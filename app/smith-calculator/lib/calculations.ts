import type { SmithingInput, SmithingResult, EquipmentType, CharacterStats } from './types';

/**
 * INT関数の実装（小数点以下を元の数値より小さい整数に切り捨て）
 */
function intFloor(value: number): number {
  return Math.floor(value);
}

/**
 * 総STRを計算
 */
function calculateTotalStr(input: SmithingInput): number {
  const { characterStats, equipment, food } = input;
  
  // STR固定値の合計
  const strFixed = 
    (equipment.main.str ?? 0) +
    (equipment.sub.str ?? 0) +
    (equipment.body.str ?? 0) +
    (equipment.additional.str ?? 0) +
    (equipment.special.str ?? 0) +
    (equipment.fashion.str ?? 0) +
    (food.str ?? 0);
  
  // STR%の合計
  const strPercent = 
    (equipment.main.strPercent ?? 0) +
    (equipment.sub.strPercent ?? 0) +
    (equipment.body.strPercent ?? 0) +
    (equipment.additional.strPercent ?? 0) +
    (equipment.special.strPercent ?? 0) +
    (equipment.fashion.strPercent ?? 0);
  
  // 総STR = INT(基礎STR × (1 + STR%/100)) + STR固定値
  return intFloor((characterStats.str ?? 1) * (1 + strPercent / 100)) + strFixed;
}

/**
 * 総DEXを計算
 */
function calculateTotalDex(input: SmithingInput): number {
  const { characterStats, equipment, food } = input;
  
  // DEX固定値の合計
  const dexFixed = 
    (equipment.main.dex ?? 0) +
    (equipment.sub.dex ?? 0) +
    (equipment.body.dex ?? 0) +
    (equipment.additional.dex ?? 0) +
    (equipment.special.dex ?? 0) +
    (equipment.fashion.dex ?? 0) +
    (food.dex ?? 0);
  
  // DEX%の合計
  const dexPercent = 
    (equipment.main.dexPercent ?? 0) +
    (equipment.sub.dexPercent ?? 0) +
    (equipment.body.dexPercent ?? 0) +
    (equipment.additional.dexPercent ?? 0) +
    (equipment.special.dexPercent ?? 0) +
    (equipment.fashion.dexPercent ?? 0);
  
  // 総DEX = INT(基礎DEX × (1 + DEX%/100)) + DEX固定値
  return intFloor((characterStats.dex ?? 1) * (1 + dexPercent / 100)) + dexFixed;
}

/**
 * 成功率を計算
 */
function calculateSuccessRate(input: SmithingInput, totalStr: number, totalDex: number): number {
  const { characterStats, smithProficiency, difficulty } = input;
  
  // 成功率 = 10 + スミス熟練度 + TEC/2 + 総DEX/6 - 難易度 + 総STR/10
  const successRate = 
    10 + 
    (smithProficiency ?? 0) + 
    (characterStats.tec ?? 1) / 2 + 
    totalDex / 6 - 
    (difficulty ?? 0) + 
    totalStr / 10;
  
  // 0-100%の範囲に制限
  return Math.max(0, Math.min(100, successRate));
}

/**
 * 装備種別ごとのキャラステータスによる潜在値上昇量を計算
 */
function calculateBasePotentialIncrease(equipmentType: EquipmentType, stats: CharacterStats): number {
  switch (equipmentType) {
    case '片手剣':
      return intFloor(((stats.str ?? 1) + (stats.dex ?? 1)) / 20);
    case '両手剣':
      return intFloor((stats.str ?? 1) / 10);
    case '弓':
      return intFloor(((stats.str ?? 1) + (stats.dex ?? 1)) / 20);
    case '自動弓':
      return intFloor((stats.dex ?? 1) / 10);
    case '杖':
      return intFloor((stats.int ?? 1) / 10);
    case '魔道具':
      return intFloor(((stats.int ?? 1) + (stats.agi ?? 1)) / 20);
    case '手甲':
      return intFloor((stats.agi ?? 1) / 10);
    case '旋風槍':
      return intFloor(((stats.str ?? 1) + (stats.agi ?? 1)) / 20);
    case '抜刀剣':
      return intFloor(((stats.dex ?? 1) + (stats.agi ?? 1)) / 20);
    case '体防具':
      return intFloor((stats.vit ?? 1) / 10);
    default:
      return 0;
  }
}

/**
 * 潜在値上昇量を計算
 */
function calculatePotentialIncrease(input: SmithingInput): number {
  const { characterStats, skills, basePotential } = input;
  
  // キャラステータスによる潜在値上昇量
  const basePotentialIncrease = calculateBasePotentialIncrease(input.equipmentType, characterStats);
  
  // 丁寧な制作補正（基礎潜在値に対して、小数点以下切り捨て）
  const carefulCraftingBonus = intFloor((basePotential ?? 0) * (skills.carefulCrafting / 100));
  
  // 匠の製作技術補正（基礎潜在値に対して、小数点以下切り捨て）
  const masterCraftingBonus = intFloor((basePotential ?? 0) * (skills.masterCrafting * 2 / 100));
  
  // 総潜在値上昇量
  return basePotentialIncrease + carefulCraftingBonus + masterCraftingBonus;
}

/**
 * スミス計算のメイン関数
 */
export function calculateSmithing(input: SmithingInput): SmithingResult {
  const totalStr = calculateTotalStr(input);
  const totalDex = calculateTotalDex(input);
  const successRate = calculateSuccessRate(input, totalStr, totalDex);
  const potentialIncrease = calculatePotentialIncrease(input);
  const finalPotential = (input.basePotential ?? 0) + potentialIncrease;
  
  return {
    successRate,
    potentialIncrease,
    finalPotential,
    totalStr,
    totalDex,
  };
}