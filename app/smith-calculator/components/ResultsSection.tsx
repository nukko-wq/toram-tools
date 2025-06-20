import type { SmithingResult } from '../lib/types'

interface ResultsSectionProps {
	result: SmithingResult
}

export default function ResultsSection({ result }: ResultsSectionProps) {
	return (
		<div className="space-y-4 lg:space-y-6 lg:col-span-2 xl:col-span-1">
			<div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md">
				<h2 className="text-xl font-semibold mb-4">計算結果</h2>
				<div className="space-y-4">
					<div className="bg-white p-4 rounded-lg">
						<div className="text-3xl font-bold text-blue-600 mb-1">
							{result.successRate.toFixed(2)}%
						</div>
						<div className="text-sm text-gray-600">成功率</div>
					</div>

					<div className="bg-white p-4 rounded-lg">
						<div className="text-2xl font-bold text-purple-600 mb-1">
							{Math.floor(result.finalPotential)}
						</div>
						<div className="text-sm text-gray-600">最終潜在値</div>
					</div>

					<div className="grid grid-cols-2 gap-3">
						<div className="bg-white p-3 rounded-lg">
							<div className="text-lg font-bold text-red-600">
								{result.totalStr}
							</div>
							<div className="text-xs text-gray-600">総STR</div>
						</div>
						<div className="bg-white p-3 rounded-lg">
							<div className="text-lg font-bold text-yellow-600">
								{result.totalDex}
							</div>
							<div className="text-xs text-gray-600">総DEX</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}