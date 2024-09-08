"use client"

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

const UnitPrice = () => {
  const [price, setPrice] = useState<number | null>(10000)
  const [items, setItems] = useState<number | null>(99)
  const [tax, setTax] = useState<number | null>(3)
  const [result, setResult] = useState<number | null>(null)
  const [listingQuantity, setListingQuantity] = useState<number | null>(99)
  const [listingPrice, setListingPrice] = useState<number | null>(null)
  const [DisplayQuantity, setDisplayQuantity] = useState<number | null>(99)
  const [priceIncludingTax, setPriceIncludingTax] = useState<number | null>(null)

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

  const handleListingQuantitiyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim()
    setListingQuantity(value ? Number(value) : null)
  }

  const calculateUnitPrice = () => {
    if (price !== null && items !== null && tax !== null && listingQuantity !== null) {

      const unitPrice = price / (1 + tax / 100) /items
      const listingPrice = unitPrice * listingQuantity
      setResult(unitPrice)
      if (items == listingQuantity ) {
        setListingPrice(Math.ceil(listingPrice))
        setPriceIncludingTax(Math.ceil(Math.floor(listingPrice) * (1 + tax / 100)))
      } else {
        setListingPrice(Math.floor(unitPrice * listingQuantity))
        setPriceIncludingTax(Math.floor(Math.floor(listingPrice) * (1 + tax / 100)))
      }
      setDisplayQuantity(listingQuantity)
      {/*
      if (items == 1) {
        unitPrice = price / (1 + tax / 100)
        setResult(Math.ceil(unitPrice))
        const sum = (Math.ceil(unitPrice) * 99)
        setSumPrice(sum)
        if (listingQuantity > 1) {
          setListingPrice(Math.floor(unitPrice * listingQuantity))
        } else if(listingQuantity == 1) {
          setListingPrice(Math.ceil(unitPrice * listingQuantity))
        }

        setListingPrice(Math.ceil(unitPrice) * listingQuantity)
      } else if (items == 99) {
        const sum = price / (1 + tax / 100)
        setSumPrice(Math.ceil(sum))
        unitPrice = price / (1 + tax / 100) / 99
        setResult(unitPrice)
        if (listingQuantity > 1) {
          setListingPrice(Math.ceil(unitPrice * listingQuantity))
        } else if (listingQuantity == 1) {
          setListingPrice(Math.floor(unitPrice * listingQuantity))
        }
      } else {
        unitPrice = price / (1 + tax / 100) / items
        setResult(unitPrice)
        const sum = unitPrice * 99
        setSumPrice(Math.floor(sum))
        if (listingQuantity > 1) {
          setListingPrice(Math.floor(unitPrice * listingQuantity))
        } else if (listingQuantity == 1) {
          setListingPrice(Math.ceil(Math.floor(unitPrice) * listingQuantity))
        }
      }
        */}
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

  useEffect(() => {
    calculateUnitPrice()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label className="block mb-2">マーケットの価格</label>
      <input
        type="number"
        inputMode="numeric"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        placeholder="価格"
        value={price ?? ''}
        onChange={handlePriceChange}
        onFocus={handlePriceFocus} />
    </div><div className="mt-4">
        <label className="block mb-2">個数</label>
        <input
          type="number"
          inputMode="numeric"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          placeholder="個数"
          value={items ?? ''}
          onChange={handleNumberChange}
          onFocus={handleNumberFocus} />
      </div><div className="mt-4">
        <label className="block mb-2">税率(%)</label>
        <input
          type="number"
          inputMode="numeric"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          placeholder="税率"
          value={tax ?? ''}
          onChange={handleTaxChange}
          onFocus={handleTaxFocus} />
      </div>
      <div className='mt-4'>
        <label className='block mb-2'>出品したい個数</label>
        <input
          type='number'
          inputMode='numeric'
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400'
          placeholder='出品したい個数'
          value={listingQuantity ?? ''}
          onChange={handleListingQuantitiyChange}
          onFocus={handleListingQuantityFocus} />
      </div>
      <button
        className="w-full mt-4 px-4 py-2 text-white bg-teal-500 rounded transform transition-transform duration-200 ease-in-out hover:bg-teal-600 hover:scale-95 active:bg-teal-600 active:scale-95"
        onClick={calculateUnitPrice}
      >
        計算する
      </button>
      <div className="mt-4 p-4 rounded bg-teal-100">
        {result !== null && <p className="text-lg">単価: <br />{result.toLocaleString()} スピナ</p>}
        {listingPrice !== null && <p className='mt-4 text-lg'>税抜き価格({DisplayQuantity}個): <br />{listingPrice.toLocaleString()} スピナ</p>}
        {priceIncludingTax !== null && <p className='mt-4 text-lg'>税込み価格({DisplayQuantity}個): <br />{priceIncludingTax.toLocaleString()} スピナ</p>}
        <p className='mt-4'>※小数点以下は切り捨て</p>
        </div>
      </form>
  )
}

export default UnitPrice