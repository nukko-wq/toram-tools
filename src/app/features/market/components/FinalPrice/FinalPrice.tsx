import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

const FinalPrice = () => {
  const [price, setPrice] = useState<number | null>(10000)
  const [tax, setTax] = useState<number | null>(3)
  const [result, setResult] = useState<number | null>(null)

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

  useEffect(() => {
    calculateFinalPrice()
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
        value={price ?? ''}
        onChange={handlePriceChange}
        onFocus={handlePriceFocus} />
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
          onFocus={handleTaxFocus} />
      </div><button
        className="w-full mt-4 px-4 py-2 text-white bg-teal-500 rounded transform transition-transform duration-200 ease-in-out hover:bg-teal-400 hover:scale-95 active:bg-teal-400 active:scale-95"
        onClick={calculateFinalPrice}
      >
        計算する
      </button><div className="mt-4 p-4 rounded bg-teal-100">
        {result !== null && <><p className="text-lg">出品価格: {result.toLocaleString()} スピナ</p><p className='mt-4'>※小数点以下は切り捨て</p></>}
      </div>
    </form>
  )
}

export default FinalPrice