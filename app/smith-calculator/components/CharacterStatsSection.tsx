import { CircleHelp } from 'lucide-react'
import { Button, Dialog, DialogTrigger, Popover } from 'react-aria-components'
import type { CharacterStats } from '../lib/types'

interface CharacterStatsSectionProps {
	characterStats: CharacterStats
	onStatsChange: (stat: keyof CharacterStats, value: number | undefined) => void
	isMobile: boolean
}

export default function CharacterStatsSection({
	characterStats,
	onStatsChange,
	isMobile,
}: CharacterStatsSectionProps) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md order-1">
			<div className="flex gap-2 mb-4">
				<h2 className="text-xl font-semibold">ステータス</h2>
				<DialogTrigger>
					<Button className="cursor-pointer">
						<CircleHelp className="w-4 h-4" />
					</Button>
					<Popover
						placement={isMobile ? 'bottom' : 'right'}
						crossOffset={0}
						offset={8}
						shouldFlip={true}
						containerPadding={16}
						className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl border border-blue-200 rounded-lg p-0 w-[calc(100vw-2rem)] max-w-md md:w-auto"
					>
						<Dialog className="p-3 sm:p-4">
							<div className="space-y-3 sm:space-y-4">
								<h3 className="text-base sm:text-lg font-semibold text-blue-800 border-b border-blue-300 pb-2">
									ステータスによる潜在値上昇量
								</h3>
								<div className="overflow-hidden rounded-lg border border-blue-200">
									<table className="w-full text-xs sm:text-sm">
										<thead className="bg-blue-50/50">
											<tr>
												<th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-medium text-blue-700 border-b border-blue-200">
													武器種別
												</th>
												<th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-medium text-blue-700 border-b border-blue-200">
													計算式
												</th>
											</tr>
										</thead>
										<tbody className="bg-white/70 divide-y divide-blue-100">
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													片手剣
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													(STR+DEX)÷20
												</td>
											</tr>
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													両手剣
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													STR÷10
												</td>
											</tr>
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													弓
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													(STR+DEX)÷20
												</td>
											</tr>
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													自動弓
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													DEX÷10
												</td>
											</tr>
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													杖
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													INT÷10
												</td>
											</tr>
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													魔道具
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													(INT+AGI)÷20
												</td>
											</tr>
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													手甲
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													AGI÷10
												</td>
											</tr>
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													旋風槍
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													(STR+AGI)÷20
												</td>
											</tr>
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													抜刀剣
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													(DEX+AGI)÷20
												</td>
											</tr>
											<tr className="hover:bg-blue-50 transition-colors">
												<td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-blue-800">
													体防具
												</td>
												<td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-700 font-mono">
													VIT÷10
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</Dialog>
					</Popover>
				</DialogTrigger>
			</div>
			<div className="grid grid-cols-2 gap-4">
				{(['str', 'dex', 'vit', 'agi', 'int', 'tec'] as const).map((stat) => (
					<div key={stat}>
						<label
							htmlFor={`stat-${stat}`}
							className="block text-sm font-medium mb-1"
						>
							{stat.toUpperCase()}
						</label>
						<input
							id={`stat-${stat}`}
							type="number"
							inputMode="numeric"
							min="0"
							max="999"
							value={characterStats[stat] ?? ''}
							onChange={(e) => {
								const value = e.target.value
								if (value === '') {
									onStatsChange(stat, undefined)
								} else {
									const numValue = Number.parseInt(value)
									onStatsChange(stat, Number.isNaN(numValue) ? 1 : numValue)
								}
							}}
							onMouseDown={(e) => {
								if (document.activeElement === e.target) {
									e.preventDefault()
									onStatsChange(stat, undefined)
								}
							}}
							className="w-full px-2 py-1 border border-gray-300 rounded outline-blue-500"
						/>
					</div>
				))}
			</div>
		</div>
	)
}
