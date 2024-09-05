"use client"

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

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

  useEffect(() => {
    calculateExcludingTaxPrice()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2">価格</label>
        <input
          type="number"
          inputMode="numeric"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          placeholder="価格"
          value={price ?? ""}
          onChange={handlePriceChange}
          onFocus={handlePriceFocus}
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2">税率(%)</label>
        <input
          type="number"
          inputMode="numeric"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          placeholder="税率"
          value={tax ?? ""}
          onChange={handleTaxChange}
          onFocus={handleTaxFocus}
        />
      </div>
      <button
        className="w-full mt-4 px-4 py-2 text-white bg-teal-500 rounded transform transition-transform duration-200 ease-in-out hover:bg-teal-400 hover:scale-95 active:bg-teal-400 active:scale-95"
        onClick={calculateExcludingTaxPrice}
      >
        計算する
      </button>
      <div className="mt-4 p-4 rounded bg-teal-100 flex flex-col sm:flex-row justify-start items-start">
        {result !== null && (
          <>
            <p className="text-lg">
              税抜価格: {result.toLocaleString()} スピナ
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="sm:ml-4 mt-1 sm:mt-0 px-3 py-1 text-gray-700 text-sm w-auto bg-white opacity-70 rounded hover:bg-teal-400"
            >
              {copied ? <span className='inline-flex items-center'><svg className='w-3 h-3 text-gray-700 me-1.5' aria-hidden="true" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>Copied!</span> : "Copy"}

            </button>
          </>
        )}
      </div>
    </form>
  )
}

export default ExcludingTax