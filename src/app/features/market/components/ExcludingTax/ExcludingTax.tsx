'use client'

import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'

const ExcludingTax = () => {
	const [price, setPrice] = useState<number | null>(10000)
	const [tax, setTax] = useState<number | null>(3)
	const [result, setResult] = useState<number | null>(null)
	const [copied, setCopied] = useState(false)

	const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim()
		setPrice(value ? Number(value) : null)
	}

	const handleTaxChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim()
		setTax(value ? Number(value) : null)
	}

	const calculateExcludingTaxPrice = () => {
		if (price !== null && tax !== null) {
			const excludingTaxPrice = price / (1 + tax / 100)
			setResult(Math.ceil(excludingTaxPrice))
		} else {
			setResult(null)
		}
	}

	const handlePriceFocus = () => {
		setPrice(null)
	}

	const handleTaxFocus = () => {
		setTax(null)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		calculateExcludingTaxPrice()
	}

	const handleCopy = () => {
		if (result !== null) {
			navigator.clipboard.writeText(result.toString()).then(() => {
				setCopied(true)
				setTimeout(() => setCopied(false), 3000)
			})
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		calculateExcludingTaxPrice()
	}, [])

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label className="mb-2 block" htmlFor="excludingtax_price">
					価格
				</label>
				<input
					id="excludingtax_price"
					type="number"
					inputMode="numeric"
					className="w-full rounded-lg border px-4 py-2 focus:border-blue-400 focus:outline-hidden"
					placeholder="価格"
					min={1}
					value={price ?? ''}
					onChange={handlePriceChange}
					onFocus={handlePriceFocus}
				/>
			</div>
			<div className="mt-4">
				<label className="mb-2 block" htmlFor="excluding-tax-tax">
					税率(%)
				</label>
				<input
					id="excluding-tax-tax"
					type="number"
					inputMode="numeric"
					className="w-full rounded-lg border px-4 py-2 focus:border-blue-400 focus:outline-hidden"
					placeholder="税率"
					min={0}
					value={tax ?? ''}
					onChange={handleTaxChange}
					onFocus={handleTaxFocus}
				/>
			</div>
			<button
				className="mt-4 w-full transform rounded bg-teal-500 px-4 py-2 text-white transition-transform duration-200 ease-in-out hover:scale-95 hover:bg-teal-600 active:scale-95 active:bg-teal-600"
				type="submit"
				onClick={calculateExcludingTaxPrice}
			>
				計算する
			</button>
			<div className="mt-4 flex flex-col items-start justify-start rounded bg-teal-100 p-4">
				{result !== null && (
					<>
						<p className="text-lg">税抜価格:</p>
						<div className="flex flex-col sm:flex-row">
							<p className="text-lg">{result.toLocaleString()} スピナ</p>
							<button
								type="button"
								onClick={handleCopy}
								className="mt-1 w-24 rounded bg-white px-3 py-1 text-gray-700 text-sm opacity-70 hover:bg-teal-400 active:bg-teal-400 sm:mt-0 sm:ml-4 sm:w-auto"
							>
								{copied ? (
									<span className="inline-flex items-center">
										<svg
											className="me-1.5 h-3 w-3 text-gray-700"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 16 12"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M1 5.917 5.724 10.5 15 1.5"
											/>
										</svg>
										Copied!
									</span>
								) : (
									<span>Copy</span>
								)}
							</button>
						</div>
					</>
				)}
			</div>
		</form>
	)
}

export default ExcludingTax
