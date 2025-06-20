'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'

const FinalPrice = () => {
	const [price, setPrice] = useState<number | null>(10000)
	const [tax, setTax] = useState<number | null>(3)
	const [result, setResult] = useState<number | null>(() => {
		// 初期値を計算
		const initialPrice = 10000
		const initialTax = 3
		const finalPrice = initialPrice * (1 + initialTax / 100)
		return Math.floor(finalPrice)
	})

	const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim()
		setPrice(value ? Number(value) : null)
	}

	const handleTaxChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim()
		setTax(value ? Number(value) : null)
	}

	const handlePriceFocus = () => {
		setPrice(null)
	}

	const handleTaxFocus = () => {
		setTax(null)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		calculateFinalPrice()
	}

	const calculateFinalPrice = () => {
		if (price !== null && tax !== null) {
			const finalPrice = price * (1 + tax / 100)
			setResult(Math.floor(finalPrice))
		} else {
			setResult(null)
		}
	}


	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label className="mb-2 block" htmlFor="final-price-price">
					価格
				</label>
				<input
					id="final-price-price"
					type="number"
					inputMode="numeric"
					className="w-full rounded-lg border px-4 py-2 outline-teal-400"
					placeholder="価格"
					min={1}
					value={price ?? ''}
					onChange={handlePriceChange}
					onFocus={handlePriceFocus}
				/>
			</div>
			<div className="mt-4">
				<label className="mb-2 block" htmlFor="final-price-tax">
					税率(%)
				</label>
				<input
					id="final-price-tax"
					type="number"
					inputMode="numeric"
					className="w-full rounded-lg border px-4 py-2 outline-teal-400"
					placeholder="税率"
					min={0}
					value={tax ?? ''}
					onChange={handleTaxChange}
					onFocus={handleTaxFocus}
				/>
			</div>
			<button
				className="mt-4 w-full transform cursor-pointer rounded bg-teal-500 px-4 py-2 text-white transition-transform duration-200 ease-in-out hover:scale-95 hover:bg-teal-600 active:scale-95 active:bg-teal-600 outline-teal-600"
				type="submit"
				onClick={calculateFinalPrice}
			>
				計算する
			</button>
			<div className="mt-4 rounded bg-teal-100 p-4">
				{result !== null && (
					<p className="text-lg">
						出品価格: <br /> {result.toLocaleString()} スピナ
					</p>
				)}
			</div>
		</form>
	)
}

export default FinalPrice
