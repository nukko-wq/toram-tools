import Header from './components/layouts/header/header'
import Card from './features/card/components/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	alternates: {
		canonical: 'https://toram-tools.vercel.app/',
	},
}

export default async function Home() {
	return (
		<>
			<Header title="" link="/" />
			<div className="flex flex-col flex-grow pt-16 md:pt-32 pb-4 items-center">
				<div className="grid grid-cols-1 auto-rows-fr gap-4 max-w-7xl mt-4 mx-2 md:mx-4">
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
