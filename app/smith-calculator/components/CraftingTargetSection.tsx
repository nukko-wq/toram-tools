import type { EquipmentType } from '../lib/types'

const equipmentTypes: EquipmentType[] = [
	'片手剣',
	'両手剣',
	'弓',
	'自動弓',
	'杖',
	'魔道具',
	'手甲',
	'旋風槍',
	'抜刀剣',
	'体防具',
]

interface CraftingTargetSectionProps {
	equipmentType: EquipmentType
	difficulty: number | undefined
	basePotential: number | undefined
	onEquipmentTypeChange: (type: EquipmentType) => void
	onDifficultyChange: (value: number | undefined) => void
	onBasePotentialChange: (value: number | undefined) => void
}

export default function CraftingTargetSection({
	equipmentType,
	difficulty,
	basePotential,
	onEquipmentTypeChange,
	onDifficultyChange,
	onBasePotentialChange,
}: CraftingTargetSectionProps) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md order-3 md:order-2">
			<h2 className="text-xl font-semibold mb-4">製作対象</h2>
			<div className="space-y-3">
				<div>
					<label
						htmlFor="equipment-type"
						className="block text-sm font-medium mb-1"
					>
						装備種別
					</label>
					<select
						id="equipment-type"
						value={equipmentType}
						onChange={(e) => onEquipmentTypeChange(e.target.value as EquipmentType)}
						className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
					>
						{equipmentTypes.map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="difficulty" className="block text-sm font-medium mb-1">
						難易度
					</label>
					<input
						id="difficulty"
						type="number"
						inputMode="numeric"
						value={difficulty ?? ''}
						onChange={(e) =>
							onDifficultyChange(
								e.target.value === ''
									? undefined
									: Number.parseInt(e.target.value) || 0,
							)
						}
						onMouseDown={(e) => {
							if (document.activeElement === e.target) {
								e.preventDefault()
								onDifficultyChange(undefined)
							}
						}}
						className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
					/>
				</div>
				<div>
					<label
						htmlFor="base-potential"
						className="block text-sm font-medium mb-1"
					>
						基礎潜在値
					</label>
					<input
						id="base-potential"
						type="number"
						inputMode="numeric"
						value={basePotential ?? ''}
						onChange={(e) =>
							onBasePotentialChange(
								e.target.value === ''
									? undefined
									: Number.parseInt(e.target.value) || 0,
							)
						}
						onMouseDown={(e) => {
							if (document.activeElement === e.target) {
								e.preventDefault()
								onBasePotentialChange(undefined)
							}
						}}
						className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
					/>
				</div>
			</div>
		</div>
	)
}