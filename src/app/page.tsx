import Header from './components/layouts/header/header'
import { auth } from '@/auth'
import Card from './features/card/components/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	alternates: {
		canonical: 'https://toram-tools.vercel.app/',
	},
}

export default async function Home() {
	const session = await auth()

	return (
		<>
			<Header title="" link="/" />
			<div className="flex flex-col flex-grow pt-16 md:pt-32 pb-4 items-center">
				<div
					className={`grid grid-cols-1 auto-rows-fr gap-4 max-w-7xl mt-4 mx-2 md:mx-4 ${session ? 'md:grid-cols-2 lg:grid-cols-3' : ''}`}
				>
					{!session && (
						<Card
							title="マーケット計算"
							description={[
								'トーラムオンラインのマーケット最安価格の計算や税抜き価格の計算が出来ます。',
								'最安値で出品したい場合や国際マーケットで決まった値段で出品したいときにどうぞ。',
							]}
							link="/market"
						/>
					)}
					{session && (
						<>
							<Card
								title="マーケット計算"
								description={[
									'トーラムオンラインのマーケット最安価格の計算や税抜き価格の計算が出来ます。',
									'最安値で出品したい場合や国際マーケットで決まった値段で出品したいときにどうぞ。',
								]}
								link="/market"
							/>
							<Card
								title="モンスター検索"
								description="ボスモンスターの情報があります。"
								link="/monster"
							/>
							<Card
								title="色一覧"
								description="染色一覧です。"
								link="/colors"
							/>
							<Card
								title="料理バフ"
								description="料理バフ番地の一覧です。"
								link="/food"
							/>
						</>
					)}
				</div>
			</div>
		</>
	)
}
