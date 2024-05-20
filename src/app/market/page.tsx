"use client"

import React, { useState, ChangeEvent, useEffect } from "react"
import FinalPrice from "../features/market/components/FinalPrice/FinalPrice"
import UnitPrice from "../features/market/components/UnitPrice/UnitPrice"

const Page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-200">
      <div className="w-full px-4 py-4 ">
        <div className="px-4 py-4 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-700">マーケット単価計算</h1>
            <div className="w-full max-w-xl mt-5">
              <div className="">
                <UnitPrice />
              </div>
            </div>
          </div>

          <div className="mt-4 px-4 py-4 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-700">マーケット価格計算</h1>
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