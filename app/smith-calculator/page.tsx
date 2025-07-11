import type { Metadata } from 'next'
import Header from '../components/layouts/header/header'
import SmithCalculator from './components/SmithCalculator'

export const metadata: Metadata = {
	title: 'スミス成功率計算 | トーラムいろいろツール',
	description: 'トーラムオンライン用のスミス成功率計算ツール',
	alternates: {
		canonical: 'https://toram-tools.nukko.dev/smith-calculator',
	},
}

export default function SmithCalculatorPage() {
	return (
		<>
			<Header title="スミス成功率計算" link="/smith-calculator" />
			<SmithCalculator />
		</>
	)
}
