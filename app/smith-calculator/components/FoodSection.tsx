import type { FoodBonus } from '../lib/types'

interface FoodSectionProps {
	food: FoodBonus
	onFoodChange: (stat: keyof FoodBonus, value: number | undefined) => void
}

export default function FoodSection({ food, onFoodChange }: FoodSectionProps) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md order-4">
			<h2 className="text-xl font-semibold mb-4">料理</h2>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<label htmlFor="food-str" className="block text-sm font-medium mb-1">
						STR
					</label>
					<input
						id="food-str"
						type="number"
						inputMode="numeric"
						min="0"
						value={food.str ?? ''}
						onChange={(e) =>
							onFoodChange(
								'str',
								e.target.value === ''
									? undefined
									: Number.parseInt(e.target.value) || 0,
							)
						}
						onMouseDown={(e) => {
							if (document.activeElement === e.target) {
								e.preventDefault()
								onFoodChange('str', undefined)
							}
						}}
						className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
					/>
				</div>
				<div>
					<label htmlFor="food-dex" className="block text-sm font-medium mb-1">
						DEX
					</label>
					<input
						id="food-dex"
						type="number"
						inputMode="numeric"
						min="0"
						value={food.dex ?? ''}
						onChange={(e) =>
							onFoodChange(
								'dex',
								e.target.value === ''
									? undefined
									: Number.parseInt(e.target.value) || 0,
							)
						}
						onMouseDown={(e) => {
							if (document.activeElement === e.target) {
								e.preventDefault()
								onFoodChange('dex', undefined)
							}
						}}
						className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
					/>
				</div>
			</div>
		</div>
	)
}