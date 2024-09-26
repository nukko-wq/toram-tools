import React, { useState, ChangeEvent, useEffect } from "react"
import FinalPrice from "../features/market/components/FinalPrice/FinalPrice"
import UnitPrice from "../features/market/components/UnitPrice/UnitPrice"
import ExcludingTax from "../features/market/components/ExcludingTax/ExcludingTax"
import type { Metadata } from "next"
import Header from "../components/layouts/header/header"

export const metadata: Metadata = {
  title: "マーケット計算 | トーラムいろいろツール",
  description: "トーラムオンラインのマーケット単価計算や税抜価格の計算ができます。",
}

const Page = () => {
  return (
    <>
      <Header title="マーケット計算" link="/market" />
      <div className="flex flex-col bg-gray-100 flex-grow 2xl:justify-center pt-16">

        <div className="w-full md:mt-4 2xl:mt-0 px-4 py-4 2xl:flex items-start 2xl:mx-auto justify-center">
          <div className="mx-auto px-4 py-4 max-w-xl 2xl:w-full bg-white shadow-md rounded-lg 2xl:mr-4 2xl:ml-0">
            <h1 className="text-3xl font-bold text-gray-700">マーケット最安計算</h1>
            <div className="w-full max-w-xl items-center mt-5">
              <div className="">
                <UnitPrice />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-4 2xl:mt-0 px-4 py-4 max-w-xl 2xl:w-full bg-white shadow-md rounded-lg 2xl:mx-4">
            <h1 className="text-3xl font-bold text-gray-700">税抜き価格計算</h1>
            <div className="w-full max-w-xl mt-5">
              <div className="">
                <ExcludingTax />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-4 2xl:mt-0 px-4 py-4 max-w-xl 2xl:w-full bg-white shadow-md rounded-lg 2xl:mr-0 2xl:ml-4">
            <h1 className="text-3xl font-bold text-gray-700">税込み価格計算</h1>
            <div className="w-full max-w-xl mt-5">
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

export default Page