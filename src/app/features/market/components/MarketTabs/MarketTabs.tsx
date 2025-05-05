'use client'

import { tv } from 'tailwind-variants'
import ExcludingTax from '../ExcludingTax/ExcludingTax'
import FinalPrice from '../FinalPrice/FinalPrice'
import UnitPrice from '../UnitPrice/UnitPrice'

const MarketTabs = () => {
	const containerVariants = tv({
		base: 'mx-auto px-4 py-4 max-w-xl bg-white shadow-md rounded-lg',
	})

	const titleVariants = tv({
		base: 'text-3xl font bold text-gray-700',
	})

	const contentVariants = tv({
		base: 'w-full max-w-xl items-center mt-5',
	})
	return (
		<>
			{/* デスクトップ表示時のコンテンツ */}
			<div className="hidden 2xl:flex grow flex-col bg-gray-100 pt-16 2xl:justify-center">
				<div className="w-full items-start justify-center px-4 py-4 md:mt-4 2xl:mx-auto 2xl:mt-0 2xl:flex">
					<div
						className={containerVariants({
							class: '2xl:mr-4 2xl:ml-0 2xl:w-full',
						})}
					>
						<h1 className={titleVariants()}>マーケット最安計算</h1>
						<div className={contentVariants()}>
							<div className="">
								<UnitPrice />
							</div>
						</div>
					</div>

					<div
						className={containerVariants({
							class: 'mt-4 2xl:mx-4 2xl:mt-0 2xl:w-full',
						})}
					>
						<h1 className={titleVariants()}>税抜き価格計算</h1>
						<div className={contentVariants()}>
							<div className="">
								<ExcludingTax />
							</div>
						</div>
					</div>

					<div
						className={containerVariants({
							class: 'mt-4 2xl:mt-0 2xl:mr-0 2xl:ml-4 2xl:w-full',
						})}
					>
						<h1 className={titleVariants()}>税込み価格計算</h1>
						<div className={contentVariants()}>
							<div className="">
								<FinalPrice />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* モバイル表示時のコンテンツ */}
			<div className="flex 2xl:hidden grow flex-col bg-gray-100 pt-16 2xl:justify-center">
				<div className="w-full items-start justify-center px-4 py-4 md:mt-4 2xl:mx-auto 2xl:mt-0 2xl:flex">
					<div
						className={containerVariants({
							class: '2xl:mr-4 2xl:ml-0 2xl:w-full',
						})}
					>
						<h1 className={titleVariants()}>マーケット最安計算</h1>
						<div className={contentVariants()}>
							<div className="">
								<UnitPrice />
							</div>
						</div>
					</div>

					<div
						className={containerVariants({
							class: 'mt-4 2xl:mx-4 2xl:mt-0 2xl:w-full',
						})}
					>
						<h1 className={titleVariants()}>税抜き価格計算</h1>
						<div className={contentVariants()}>
							<div className="">
								<ExcludingTax />
							</div>
						</div>
					</div>

					<div
						className={containerVariants({
							class: 'mt-4 2xl:mt-0 2xl:mr-0 2xl:ml-4 2xl:w-full',
						})}
					>
						<h1 className={titleVariants()}>税込み価格計算</h1>
						<div className={contentVariants()}>
							<div className="">
								<FinalPrice />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MarketTabs
