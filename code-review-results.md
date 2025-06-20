# コードレビュー結果

**日付**: 2025-06-20  
**対象**: Toram Tools プロジェクト全体  
**レビュー観点**: ロジック、複雑さ、変数名、再利用性、セキュリティ、パフォーマンス

## 🔴 重要な問題

### 1. DRY原則違反 - 大量の重複コード

**ファイル**: `app/smith-calculator/components/SmithCalculator.tsx:644-1124`

**問題**: 装備品の入力フィールドが6つのスロット分、全く同じ構造で繰り返されている（約480行）
- 各スロットで同じ4つの入力フィールド（DEX, STR, DEX%, STR%）が重複
- メンテナンス性が著しく低下

**改善提案**:
```typescript
// components/EquipmentSlot.tsx
interface EquipmentSlotProps {
  name: string
  slotKey: keyof EquipmentSet
  stats: EquipmentStats
  onStatsChange: (slotKey: keyof EquipmentSet, stats: EquipmentStats) => void
}

const EquipmentSlot: React.FC<EquipmentSlotProps> = ({ 
  name, slotKey, stats, onStatsChange 
}) => {
  // 共通の入力フィールドロジック
}
```

### 2. マジックナンバーの多用

**ファイル**: `app/smith-calculator/lib/calculations.ts`

**問題**: ハードコードされた数値が多数存在
- `/20`, `/10`, `/6`, `/100` などの意味が不明確
- 計算式の変更時にミスが発生しやすい

**改善提案**:
```typescript
// lib/constants.ts
export const CALCULATION_FACTORS = {
  STAT_DIVISOR_20: 20,
  STAT_DIVISOR_10: 10,
  DEX_SUCCESS_DIVISOR: 6,
  PERCENT_DIVISOR: 100,
  TEC_SUCCESS_DIVISOR: 2,
  STR_SUCCESS_DIVISOR: 10,
} as const

// 使用例
return intFloor(((stats.str ?? 1) + (stats.dex ?? 1)) / CALCULATION_FACTORS.STAT_DIVISOR_20)
```

### 3. コンポーネントの肥大化

**ファイル**: `app/smith-calculator/components/SmithCalculator.tsx` (1170行)

**問題**: 単一コンポーネントに複数の責務が集中
- UI表示、状態管理、イベントハンドリングが混在
- テストとメンテナンスが困難

**改善提案**:
```typescript
// 分割案
- SmithCalculator.tsx (メインコンテナ)
- CharacterStatsSection.tsx
- EquipmentSection.tsx
- SkillsSection.tsx
- FoodSection.tsx
- CraftingTargetSection.tsx
- ResultsSection.tsx
```

### 4. パフォーマンス問題 - 最適化されていないイベントリスナー

**ファイル**: `app/smith-calculator/components/SmithCalculator.tsx:94-103`

**問題**: リサイズイベントが最適化されていない
```typescript
useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
  return () => window.removeEventListener('resize', checkMobile)
}, [])
```

**改善提案**:
```typescript
import { debounce } from 'lodash'

useEffect(() => {
  const checkMobile = debounce(() => {
    setIsMobile(window.innerWidth < 768)
  }, 100)
  
  checkMobile()
  window.addEventListener('resize', checkMobile)
  return () => {
    window.removeEventListener('resize', checkMobile)
    checkMobile.cancel()
  }
}, [])
```

## 🟡 中程度の問題

### 5. 一貫性のないUI実装パターン

**問題**: UIライブラリの使用が統一されていない
- `MarketTabs`: React Aria Componentsを使用
- `ExcludingTax`/`FinalPrice`: 通常のHTML要素を使用

**改善提案**: プロジェクト全体でReact Aria Componentsに統一

### 6. 型安全性の問題

**ファイル**: `app/features/market/components/UnitPrice/UnitPrice.tsx:33`

**問題**: 関数名にタイポ
```typescript
const handleListingQuantitiyChange = // ❌ "Quantity"のスペルミス
```

**修正**:
```typescript
const handleListingQuantityChange = // ✅
```

### 7. 不必要なuseEffect

**ファイル**: Marketコンポーネント群

**問題**: 初期化時の計算でuseEffectを使用
```typescript
// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
useEffect(() => {
  calculateExcludingTaxPrice()
}, [])
```

**改善提案**: state初期値で対応
```typescript
const [result, setResult] = useState<number | null>(() => {
  // 初期計算ロジック
  return calculateInitialResult()
})
```

## 🟢 良い点

1. **適切な型定義**: TypeScriptの型が明確に定義されている
2. **ビジネスロジックの分離**: 計算処理が独立したファイルに適切に分離
3. **レスポンシブ対応**: モバイル・デスクトップ両方に対応
4. **localStorageの適切な使用**: エラーハンドリング付きで実装
5. **コンポーネント分離**: 機能別にコンポーネントが分かれている
6. **計算の正確性**: ゲーム内の計算式が正確に実装されている

## 🔧 推奨改善案（優先度順）

### 優先度: 高

1. **装備スロットコンポーネント化**
   - 480行の重複コードを1つのコンポーネントに集約
   - メンテナンス性の大幅向上

2. **SmithCalculatorコンポーネント分割**
   - 責務別に7-8個のコンポーネントに分割
   - テスタビリティの向上

### 優先度: 中

3. **定数の外部化**
   - マジックナンバーを定数ファイルに移動
   - 計算式の変更時の安全性向上

4. **パフォーマンス最適化**
   - リサイズイベントのdebounce/throttle
   - 不必要なre-renderの削減

### 優先度: 低

5. **UIライブラリ統一**
   - React Aria Componentsに統一
   - アクセシビリティの向上

6. **カスタムフック化**
   - 状態管理ロジックをhookに分離
   - 再利用性の向上

## 📊 品質メトリクス

- **ファイル行数**: SmithCalculator.tsx (1170行) → 推奨: 200行以下
- **重複コード率**: 約40% (480行/1170行) → 推奨: 5%以下
- **cyclomatic complexity**: 高 → 推奨: 中程度
- **型安全性**: 良好
- **テスタビリティ**: 改善必要

## 🎯 次のアクション

1. EquipmentSlotコンポーネントの作成
2. SmithCalculatorの分割計画作成
3. 定数ファイルの作成
4. パフォーマンス改善の実装

---

**総評**: 機能的には問題なく動作するが、保守性とスケーラビリティの観点で改善が必要。特にDRY原則の徹底とコンポーネント分割が最優先課題。