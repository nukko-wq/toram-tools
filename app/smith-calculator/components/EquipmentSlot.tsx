import type { EquipmentSet, EquipmentStats } from '../lib/types'

interface EquipmentSlotProps {
	name: string
	slotKey: keyof EquipmentSet
	stats: EquipmentStats
	onStatsChange: (
		slotKey: keyof EquipmentSet,
		stat: string,
		value: number | undefined,
	) => void
}

export default function EquipmentSlot({
	name,
	slotKey,
	stats,
	onStatsChange,
}: EquipmentSlotProps) {
	const handleStatChange = (stat: string, value: number | undefined) => {
		onStatsChange(slotKey, stat, value)
	}

	const handleInputChange = (stat: string, inputValue: string) => {
		if (inputValue === '') {
			handleStatChange(stat, undefined)
		} else {
			const numValue = Number.parseInt(inputValue) || 0
			handleStatChange(stat, numValue)
		}
	}

	const handleInputFocus = (stat: string) => {
		handleStatChange(stat, undefined)
	}

	return (
		<div className="border border-gray-200 rounded-lg p-3">
			<h3 className="text-sm font-medium mb-2">{name}</h3>
			<div className="grid grid-cols-2 gap-2">
				<div>
					<label
						htmlFor={`${slotKey}-dex`}
						className="block text-xs font-medium mb-1"
					>
						DEX
					</label>
					<input
						id={`${slotKey}-dex`}
						type="number"
						inputMode="numeric"
						min="0"
						value={stats.dex ?? ''}
						onChange={(e) => handleInputChange('dex', e.target.value)}
						onMouseDown={(e) => {
							if (document.activeElement === e.target) {
								e.preventDefault()
								handleInputFocus('dex')
							}
						}}
						className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
					/>
				</div>
				<div>
					<label
						htmlFor={`${slotKey}-str`}
						className="block text-xs font-medium mb-1"
					>
						STR
					</label>
					<input
						id={`${slotKey}-str`}
						type="number"
						inputMode="numeric"
						min="0"
						value={stats.str ?? ''}
						onChange={(e) => handleInputChange('str', e.target.value)}
						onMouseDown={(e) => {
							if (document.activeElement === e.target) {
								e.preventDefault()
								handleInputFocus('str')
							}
						}}
						className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
					/>
				</div>
				<div>
					<label
						htmlFor={`${slotKey}-dex-percent`}
						className="block text-xs font-medium mb-1"
					>
						DEX%
					</label>
					<input
						id={`${slotKey}-dex-percent`}
						type="number"
						inputMode="numeric"
						min="0"
						value={stats.dexPercent ?? ''}
						onChange={(e) => handleInputChange('dexPercent', e.target.value)}
						onMouseDown={(e) => {
							if (document.activeElement === e.target) {
								e.preventDefault()
								handleInputFocus('dexPercent')
							}
						}}
						className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
					/>
				</div>
				<div>
					<label
						htmlFor={`${slotKey}-str-percent`}
						className="block text-xs font-medium mb-1"
					>
						STR%
					</label>
					<input
						id={`${slotKey}-str-percent`}
						type="number"
						inputMode="numeric"
						min="0"
						value={stats.strPercent ?? ''}
						onChange={(e) => handleInputChange('strPercent', e.target.value)}
						onMouseDown={(e) => {
							if (document.activeElement === e.target) {
								e.preventDefault()
								handleInputFocus('strPercent')
							}
						}}
						className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
					/>
				</div>
			</div>
		</div>
	)
}
