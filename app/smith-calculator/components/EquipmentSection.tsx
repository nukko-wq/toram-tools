import type { EquipmentSet } from '../lib/types'
import EquipmentSlot from './EquipmentSlot'

interface EquipmentSectionProps {
	equipment: EquipmentSet
	onEquipmentChange: (
		slot: keyof EquipmentSet,
		stat: string,
		value: number | undefined,
	) => void
}

export default function EquipmentSection({
	equipment,
	onEquipmentChange,
}: EquipmentSectionProps) {
	return (
		<div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
			<h2 className="text-xl font-semibold mb-4">装備品プロパティ</h2>
			<div className="space-y-4">
				{/* 1行目: メイン武器, サブ武器 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<EquipmentSlot
						name="メイン武器"
						slotKey="main"
						stats={equipment.main}
						onStatsChange={onEquipmentChange}
					/>
					<EquipmentSlot
						name="サブ武器"
						slotKey="sub"
						stats={equipment.sub}
						onStatsChange={onEquipmentChange}
					/>
				</div>

				{/* 2行目: 体装備, 追加装備 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<EquipmentSlot
						name="体装備"
						slotKey="body"
						stats={equipment.body}
						onStatsChange={onEquipmentChange}
					/>
					<EquipmentSlot
						name="追加装備"
						slotKey="additional"
						stats={equipment.additional}
						onStatsChange={onEquipmentChange}
					/>
				</div>

				{/* 3行目: 特殊装備, オシャレ装備 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<EquipmentSlot
						name="特殊装備"
						slotKey="special"
						stats={equipment.special}
						onStatsChange={onEquipmentChange}
					/>
					<EquipmentSlot
						name="オシャレ装備"
						slotKey="fashion"
						stats={equipment.fashion}
						onStatsChange={onEquipmentChange}
					/>
				</div>
			</div>
		</div>
	)
}