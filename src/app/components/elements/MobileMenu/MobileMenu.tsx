'use client'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation'

type MobileMenuProps = {
  isLoggedIn: boolean
}

const MobileMenu = ({ isLoggedIn }: MobileMenuProps) => {

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      router.push(href, { scroll: false })
    }, 100)
  }

  return (
    <>
      <div className="md:hidden relative">
        <nav className={`fixed top-0 bottom-0 h-full w-[240px] bg-white transition-all duration-500 overflow-x-hidden overflow-y-auto ${isOpen ? 'left-0' : '-left-[240px]'} z-30`}>
          <div className='p-[25px]'>
            <ul className="">
              <li className='border-b border-gray-300 relative'>
                <button type="button" onClick={() => handleLinkClick('/market')} className="block w-full text-left py-4 text-gray-700 hover:bg-gray-100 active:bg-gray-100 duration-200">マーケット計算</button>
              </li>
              {isLoggedIn && (
                <>
                  <li className='border-b border-gray-300 relative'>
                    <button type="button" onClick={() => handleLinkClick('/monster')} className="block w-full text-left py-4 text-gray-700 hover:bg-gray-100 active:bg-gray-100 duration-200">モンスター</button>
                  </li>
                  <li className='border-b border-gray-300 relative'>
                    <button type="button" onClick={() => handleLinkClick('/colors')} className="block py-4 w-full text-left text-gray-700 hover:bg-gray-100 active:bg-gray-100 duration-200">色一覧</button>
                  </li>

                </>
              )}
            </ul>
          </div>
        </nav>
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
    </>
  )
}

export default MobileMenu