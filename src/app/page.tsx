import Link from 'next/link'
import Header from './components/layouts/header/header'
import { auth } from '@/auth'

export default async function Home() {
	const session = await auth()

	return (
		<>
			<Header title='' link="/" />
			<main className="flex flex-col justify-center pt-16">
				<div className="flex flex-col justify-center items-center">
					<div className="max-w-lg p-6 mt-8 mx-2 border border-gray-200 rounded-lg shadow">
						<Link href="/market" scroll={false}>
							<h5 className="text-2xl font-bold text-gray-700">マーケット計算</h5>
						</Link>
						<p className="mb-3 font-normal text-gray-700">
							トーラムオンラインのマーケット最安価格の計算や税抜き価格の計算が出来ます。
							<br />
							最安値で出品したい場合や国際マーケットで決まった値段で出品したいときにどうぞ。
						</p>
						<Link
							href="/market"
							className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 "
							scroll={false}
						>
							Learn more
							<svg
								className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</Link>
					</div>
					{session && (
						<div id='card2'>
							card2
						</div>
					)}
				</div>
			</main>
		</>
	)
}
