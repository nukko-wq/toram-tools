"use client"

import React, { useState, ChangeEvent, useEffect } from "react"
import FinalPrice from "../features/market/components/FinalPrice/FinalPrice"

const Page = () => {
  const [price, setPrice] = useState<number | null>(10000)
  const [items, setItems] = useState<number | null>(99)
  const [tax, setTax] = useState<number | null>(3)
  const [result, setResult] = useState<number | null>(null)
  const [sumPrice, setSumPrice] = useState<number | null>(null)

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

  const calculateUnitPrice = () => {
    if (price !== null && items !== null && tax !== null) {
      const unitPrice = price / (1 + tax / 100) / items
      setResult(Math.floor(unitPrice))
      const sum = unitPrice * 99
      setSumPrice(Math.floor(sum))
    } else {
      setResult(null)
      setSumPrice(null)
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

  useEffect(() => {
    calculateUnitPrice()
  }, [])

  return (
    <main className="flex flex-col min-h-screen bg-gray-200">
      <div className="w-full px-4 py-4 ">
        <div className="px-4 py-4 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-700">マーケット単価計算</h1>
            <div className="w-full max-w-xl mt-5">
              <div className="">
                <div>
                  <label className="block mb-2">価格</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="価格"
                    value={price ?? ''}
                    onChange={handlePriceChange}
                    onFocus={handlePriceFocus}

                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2">個数</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="個数"
                    value={items ?? ''}
                    onChange={handleNumberChange}
                    onFocus={handleNumberFocus}
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2">税率(%)</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="税率"
                    value={tax ?? ''}
                    onChange={handleTaxChange}
                    onFocus={handleTaxFocus}
                  />  
                </div>
                <button
                  className="w-full mt-4 px-4 py-2 text-white bg-teal-500 rounded transform transition-transform duration-200 ease-in-out hover:bg-teal-400 hover:scale-95 active:bg-teal-400 active:scale-95"
                  onClick={calculateUnitPrice}
                >
                  計算する
                </button>
                <div className="mt-4 p-4 rounded bg-teal-100">
                  {result !== null && <p className="text-lg">単価: {result} スピナ</p>}
                  {sumPrice !== null && <><p className="mt-4 text-lg">99個: {sumPrice} スピナ</p><p className="mt-4">※小数点以下は切り捨て</p></>}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 px-4 py-4 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-700">マーケット出品価格計算</h1>
            <div className="w-full max-w-xl mt-5">
              <div className="">
                <FinalPrice />
              </div>                
            </div>
          </div>
      </div>
    </main>
  )
}

export default Page