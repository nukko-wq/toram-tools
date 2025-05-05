import type { Metadata } from 'next'
import Header from '../components/layouts/header/header'
import MarketTabs from '../features/market/components/MarketTabs/MarketTabs'

export const metadata: Metadata = {
	title: 'マーケット計算 | トーラムいろいろツール',
	description:
		'トーラムオンラインのマーケット単価計算や税抜価格の計算ができます。',
}

const Page = () => {
	return (
		<>
			<Header title="マーケット計算" link="/market" />
			<MarketTabs />
		</>
	)
}

export default Page
