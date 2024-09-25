'use client'
import { useState } from "react"

const MobileMenu = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden relative">
      <div className={`fixed top-0 left-0 h-full w-[240px] bg-white transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-30`}>
        <nav className='p-6'>
          <ul>
            <li className='border-b border-gray-300'><a className="block py-4 text-gray-700 hover:bg-gray-100" href="/market">マーケット計算</a></li>
            <li className='border-b border-gray-300'><a className="block py-4 text-gray-700 hover:bg-gray-100" href="/monster">モンスター</a></li>
            <li className='border-b border-gray-300'><a className="block py-4 text-gray-700 hover:bg-gray-100" href="/colors">色一覧</a></li>
          </ul>
        </nav>
      </div>
      <button
        onClick={toggleMenu}
        className={`block fixed left-4 top-[15px] z-30 w-[30px] h-[30px] cursor-pointer transition-all duration-500 ${isOpen ? 'left-[260px]' : ''}`}
        type="button"
      >
        <span className={`block absolute left-0 w-[30px] h-[2px] top-[4px] rounded-[4px] transition-all duration-500 ${isOpen ? 'translate-y-[10px] rotate-[-315deg] bg-white' : 'bg-gray-600'} `} />
        <span className={`block absolute left-0 w-[30px] h-[2px] top-[14px] rounded-[4px] transition-all duration-500 ${isOpen ? 'opacity-0 bg-white' : 'opacity-100 bg-gray-600'} `} />
        <span className={`block absolute left-0 w-[30px] h-[2px] bottom-[4px] rounded-[4px] transition-all duration-500 ${isOpen ? 'translate-y-[-10px] rotate-[315deg] bg-white' : 'bg-gray-600'}`} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-20 cursor-pointer transition-all duration-500"
          onClick={toggleMenu}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        />
      )}
    </div>
  )
}

export default MobileMenu