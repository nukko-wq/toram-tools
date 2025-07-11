'use client'

import { useState } from 'react'
import { tv } from 'tailwind-variants'
import ExcludingTax from '../ExcludingTax/ExcludingTax'
import FinalPrice from '../FinalPrice/FinalPrice'
import UnitPrice from '../UnitPrice/UnitPrice'

const MarketTabs = () => {
	const [activeTab, setActiveTab] = useState<'unit' | 'excluding' | 'final'>(
		'excluding',
	)

	const containerVariants = tv({
		base: 'mx-auto px-4 py-4 max-w-xl bg-white shadow-md rounded-lg',
	})

	const titleVariants = tv({
		base: 'text-3xl font bold text-gray-700',
	})

	const contentVariants = tv({
		base: 'w-full max-w-xl items-center mt-5',
	})

	const tabButtonVariants = tv({
		base: 'px-4 py-2 text-sm font-medium rounded-t-lg cursor-pointer',
		variants: {
			active: {
				true: 'bg-white text-blue-500',
				false: 'bg-gray-100 text-gray-500 hover:text-gray-700',
			},
		},
	})

	return (
		<>
			{/* デスクトップ表示時のコンテンツ */}
			<div className="hidden grow flex-col bg-gray-50 2xl:flex 2xl:justify-center">
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
			<div className="flex grow flex-col bg-gray-50 pt-4 2xl:hidden">
				<div className="w-full px-4 pt-4">
					<div className="mx-auto flex max-w-xl px-2">
						<button
							type="button"
							className={tabButtonVariants({
								active: activeTab === 'excluding',
							})}
							onClick={() => setActiveTab('excluding')}
						>
							税抜き計算
						</button>
						<button
							type="button"
							className={tabButtonVariants({ active: activeTab === 'unit' })}
							onClick={() => setActiveTab('unit')}
						>
							最安計算
						</button>
						<button
							type="button"
							className={tabButtonVariants({ active: activeTab === 'final' })}
							onClick={() => setActiveTab('final')}
						>
							税込み計算
						</button>
					</div>
					<div className="">
						{activeTab === 'unit' && (
							<div className={containerVariants()}>
								<h1 className={titleVariants()}>マーケット最安計算</h1>
								<div className={contentVariants()}>
									<UnitPrice />
								</div>
							</div>
						)}
						{activeTab === 'excluding' && (
							<div className={containerVariants()}>
								<h1 className={titleVariants()}>税抜き価格計算</h1>
								<div className={contentVariants()}>
									<ExcludingTax />
								</div>
							</div>
						)}
						{activeTab === 'final' && (
							<div className={containerVariants()}>
								<h1 className={titleVariants()}>税込み価格計算</h1>
								<div className={contentVariants()}>
									<FinalPrice />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default MarketTabs
