import type { Skills, SmithingInput } from '../lib/types'

interface SkillsSectionProps {
	skills: Skills
	smithProficiency: number | undefined
	onSkillsChange: (skills: Skills) => void
	onSmithProficiencyChange: (value: number | undefined) => void
}

export default function SkillsSection({
	skills,
	smithProficiency,
	onSkillsChange,
	onSmithProficiencyChange,
}: SkillsSectionProps) {
	const handleSkillChange = (skill: keyof Skills, value: number) => {
		onSkillsChange({
			...skills,
			[skill]: value,
		})
	}

	return (
		<div className="bg-white p-6 rounded-lg shadow-md order-2 md:order-3">
			<h2 className="text-xl font-semibold mb-4">スキル・熟練度</h2>
			<div className="space-y-3">
				{/* 1行目: スミス熟練度, 装備製作 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label
							htmlFor="smith-proficiency"
							className="block text-sm font-medium mb-1"
						>
							スミス熟練度
						</label>
						<input
							id="smith-proficiency"
							type="number"
							inputMode="numeric"
							min="0"
							value={smithProficiency ?? ''}
							onChange={(e) =>
								onSmithProficiencyChange(
									e.target.value === ''
										? undefined
										: Math.max(0, Number.parseInt(e.target.value) || 0),
								)
							}
							onMouseDown={(e) => {
								if (document.activeElement === e.target) {
									e.preventDefault()
									onSmithProficiencyChange(undefined)
								}
							}}
							className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
						/>
					</div>
					<div>
						<label
							htmlFor="equipment-crafting"
							className="block text-sm font-medium mb-1"
						>
							装備製作
						</label>
						<input
							id="equipment-crafting"
							type="number"
							inputMode="numeric"
							min="0"
							max="10"
							value={skills.equipmentCrafting}
							onChange={(e) =>
								handleSkillChange(
									'equipmentCrafting',
									Math.max(
										0,
										Math.min(10, Number.parseInt(e.target.value) || 0),
									),
								)
							}
							className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
						/>
					</div>
				</div>

				{/* 2行目: 丁寧な制作, 匠の製作技術 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label
							htmlFor="careful-crafting"
							className="block text-sm font-medium mb-1"
						>
							丁寧な制作
						</label>
						<input
							id="careful-crafting"
							type="number"
							inputMode="numeric"
							min="0"
							max="10"
							value={skills.carefulCrafting}
							onChange={(e) =>
								handleSkillChange(
									'carefulCrafting',
									Math.max(
										0,
										Math.min(10, Number.parseInt(e.target.value) || 0),
									),
								)
							}
							className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
						/>
					</div>
					<div>
						<label
							htmlFor="master-crafting"
							className="block text-sm font-medium mb-1"
						>
							匠の製作技術
						</label>
						<input
							id="master-crafting"
							type="number"
							inputMode="numeric"
							min="0"
							max="10"
							value={skills.masterCrafting}
							onChange={(e) =>
								handleSkillChange(
									'masterCrafting',
									Math.max(
										0,
										Math.min(10, Number.parseInt(e.target.value) || 0),
									),
								)
							}
							className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
