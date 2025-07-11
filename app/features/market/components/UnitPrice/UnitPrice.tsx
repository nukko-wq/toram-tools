'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'

const UnitPrice = () => {
	const [price, setPrice] = useState<number | null>(10000)
	const [items, setItems] = useState<number | null>(99)
	const [tax, setTax] = useState<number | null>(3)
	const [listingQuantity, setListingQuantity] = useState<number | null>(99)

	// 初期値を計算して設定
	const calculateInitialValues = () => {
		const initialPrice = 10000
		const initialItems = 99
		const initialTax = 3
		const initialListingQuantity = 99

		const unitPrice = initialPrice / (1 + initialTax / 100) / initialItems
		const listingPrice = unitPrice * initialListingQuantity
		const priceIncludingTax = Math.ceil(
			Math.floor(listingPrice) * (1 + initialTax / 100),
		)

		return {
			unitPrice,
			listingPrice: Math.ceil(listingPrice),
			priceIncludingTax,
			displayQuantity: initialListingQuantity,
		}
	}

	const initialValues = calculateInitialValues()
	const [result, setResult] = useState<number | null>(initialValues.unitPrice)
	const [listingPrice, setListingPrice] = useState<number | null>(
		initialValues.listingPrice,
	)
	const [DisplayQuantity, setDisplayQuantity] = useState<number | null>(
		initialValues.displayQuantity,
	)
	const [priceIncludingTax, setPriceIncludingTax] = useState<number | null>(
		initialValues.priceIncludingTax,
	)

	const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim()
		setPrice(value ? Number(value) : null)
	}

	const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim()
		setItems(value ? Number(value) : null)
	}

	const handleTaxChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim()
		setTax(value ? Number(value) : null)
	}

	const handleListingQuantityChange = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		const value = event.target.value.trim()
		setListingQuantity(value ? Number(value) : null)
	}

	const calculateUnitPrice = () => {
		if (
			price !== null &&
			items !== null &&
			tax !== null &&
			listingQuantity !== null
		) {
			const unitPrice = price / (1 + tax / 100) / items
			const listingPrice = unitPrice * listingQuantity
			setResult(unitPrice)
			if (items === listingQuantity) {
				setListingPrice(Math.ceil(listingPrice))
				setPriceIncludingTax(
					Math.ceil(Math.floor(listingPrice) * (1 + tax / 100)),
				)
			} else {
				setListingPrice(Math.floor(unitPrice * listingQuantity))
				setPriceIncludingTax(
					Math.floor(Math.floor(listingPrice) * (1 + tax / 100)),
				)
			}
			setDisplayQuantity(listingQuantity)
		} else {
			setResult(null)
			setListingPrice(null)
		}
	}

	const handlePriceFocus = () => {
		setPrice(null)
	}

	const handleNumberFocus = () => {
		setItems(null)
	}

	const handleTaxFocus = () => {
		setTax(null)
	}

	const handleListingQuantityFocus = () => {
		setListingQuantity(null)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		calculateUnitPrice()
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="market-price" className="mb-2 block">
					マーケットの価格
				</label>
				<input
					id="market-price"
					type="number"
					inputMode="numeric"
					className="w-full rounded-lg border px-4 py-2 outline-blue-400"
					placeholder="価格"
					min={1}
					value={price ?? ''}
					onChange={handlePriceChange}
					onFocus={handlePriceFocus}
				/>
			</div>
			<div className="mt-4">
				<label htmlFor="quantity" className="mb-2 block">
					マーケットの個数
				</label>
				<input
					id="quantity"
					type="number"
					inputMode="numeric"
					className="w-full rounded-lg border px-4 py-2 outline-blue-400"
					placeholder="個数"
					min={1}
					value={items ?? ''}
					onChange={handleNumberChange}
					onFocus={handleNumberFocus}
				/>
			</div>
			<div className="mt-4">
				<label htmlFor="tax" className="mb-2 block">
					税率(%)
				</label>
				<input
					id="tax"
					type="number"
					inputMode="numeric"
					className="w-full rounded-lg border px-4 py-2 outline-blue-400"
					placeholder="税率"
					min={0}
					value={tax ?? ''}
					onChange={handleTaxChange}
					onFocus={handleTaxFocus}
				/>
			</div>
			<div className="mt-4">
				<label htmlFor="listing-quantity" className="mb-2 block">
					出品したい個数
				</label>
				<input
					id="listing-quantity"
					type="number"
					inputMode="numeric"
					className="w-full rounded-lg border px-4 py-2 outline-blue-400"
					placeholder="出品したい個数"
					min={1}
					value={listingQuantity ?? ''}
					onChange={handleListingQuantityChange}
					onFocus={handleListingQuantityFocus}
				/>
			</div>
			<button
				className="mt-4 w-full transform cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-transform duration-200 ease-in-out hover:scale-95 hover:bg-blue-600/80 active:scale-95 active:bg-blue-600/80 outline-blue-600/80"
				type="submit"
				onClick={calculateUnitPrice}
			>
				計算する
			</button>
			<div className="mt-4 rounded bg-blue-100 p-4">
				{result !== null && (
					<p className="text-lg">
						単価: <br />
						{result.toLocaleString()} スピナ
					</p>
				)}
				{listingPrice !== null && (
					<p className="mt-4 text-lg">
						税抜き価格({DisplayQuantity}個): <br />
						{listingPrice.toLocaleString()} スピナ
					</p>
				)}
				{priceIncludingTax !== null && (
					<p className="mt-4 text-lg">
						税込み価格({DisplayQuantity}個): <br />
						{priceIncludingTax.toLocaleString()} スピナ
					</p>
				)}
				<p className="mt-4">※小数点以下は切り捨て</p>
			</div>
		</form>
	)
}

export default UnitPrice
