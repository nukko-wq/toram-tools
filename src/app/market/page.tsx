"use client"

import React, { useState, ChangeEvent, useEffect } from "react"
import FinalPrice from "../features/market/components/FinalPrice/FinalPrice"
import UnitPrice from "../features/market/components/UnitPrice/UnitPrice"
import ExcludingTax from "../features/market/components/ExcludingTax/ExcludingTax"

const Page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-200">
      <div className="w-full md:mt-12 px-4 py-4 ">
        <div className="md:mx-auto px-4 py-4 max-w-xl bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-700">マーケット単価計算</h1>
            <div className="w-full max-w-xl items-center mt-5">
              <div className="">
                <UnitPrice />
              </div>
            </div>
          </div>

          <div className="md:mx-auto mt-4 px-4 py-4 max-w-xl bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-700">税抜き価格計算</h1>
            <div className="w-full max-w-xl mt-5">
              <div className="">
                <ExcludingTax />
              </div>                
            </div>
          </div>
          
          <div className="md:mx-auto mt-4 px-4 py-4 max-w-xl bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-700">税込み価格計算</h1>
            <div className="w-full max-w-xl mt-5">
              <div className="">
                <FinalPrice />
              </div>                
            </div>
          </div>
      </div>
      <footer className="mt-auto items-center p-4">
        <aside className="items-center flex flex-row justify-center">
          <p className="pl-3">© トーラムいろいろツール 2024</p>
        </aside>
      </footer>
    </main>
  )
}

export default Page