import type { Metadata } from 'next'
import { tv } from 'tailwind-variants'
import Header from '../components/layouts/header/header'
import ExcludingTax from '../features/market/components/ExcludingTax/ExcludingTax'
import FinalPrice from '../features/market/components/FinalPrice/FinalPrice'
import UnitPrice from '../features/market/components/UnitPrice/UnitPrice'
import MarketTabs from '../features/market/components/MarketTabs/MarketTabs'

export const metadata: Metadata = {
	title: 'マーケット計算 | トーラムいろいろツール',
	description:
		'トーラムオンラインのマーケット単価計算や税抜価格の計算ができます。',
}

const containerVariants = tv({
	base: 'mx-auto px-4 py-4 max-w-xl bg-white shadow-md rounded-lg',
})

const titleVariants = tv({
	base: 'text-3xl font bold text-gray-700',
})

const contentVariants = tv({
	base: 'w-full max-w-xl items-center mt-5',
})

const Page = () => {
	return (
		<>
			<Header title="マーケット計算" link="/market" />
			<MarketTabs />
		</>
	)
}

export default Page
