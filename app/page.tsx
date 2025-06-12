import type { Metadata } from 'next'
import Header from './components/layouts/header/header'
import Card from './features/card/components/Card'

export const metadata: Metadata = {
	alternates: {
		canonical: 'https://toram-tools.vercel.app/',
	},
}

export default async function Home() {
	return (
		<>
			<Header title="" link="/" />
			<div className="flex grow flex-col items-center pb-4 md:pt-32">
				<div className="mx-2 mt-4 grid max-w-7xl auto-rows-fr grid-cols-1 gap-4 md:mx-4">
					<Card
						title="マーケット計算"
						description={[
							'トーラムオンラインのマーケット最安価格の計算や税抜き価格の計算が出来ます。',
							'最安値で出品したい場合や国際マーケットで決まった値段で出品したいときにどうぞ。',
						]}
						link="/market"
					/>
				</div>
			</div>
		</>
	)
}
