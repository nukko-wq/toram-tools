'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	const handleLinkClick = (href: string) => {
		setIsOpen(false)
		router.push(href, { scroll: false })
	}

	return (
		<>
			<div className="md:hidden relative">
				<nav
					className={`flex flex-col fixed top-0 bottom-0 w-[240px] h-svh bg-white transition-all duration-500 overflow-x-hidden overflow-y-auto ${isOpen ? 'left-0' : '-left-[240px]'} z-30`}
				>
					<div className="p-[25px]">
						<ul className="">
							<li className="border-b border-gray-300 relative">
								<button
									type="button"
									onClick={() => handleLinkClick('/market')}
									className="block w-full text-left py-4 text-gray-700 hover:bg-gray-100 active:bg-gray-100 duration-200"
								>
									マーケット計算
								</button>
							</li>
						</ul>
					</div>
				</nav>
				<button
					onClick={toggleMenu}
					className={`block fixed left-4 top-[15px] z-30 w-[30px] h-[30px] cursor-pointer transition-all duration-500 ${isOpen ? 'left-[260px]' : ''}`}
					type="button"
				>
					<span
						className={`block absolute left-0 w-[30px] h-[2px] top-[4px] rounded-[4px] transition-all duration-500 ${isOpen ? 'translate-y-[10px] rotate-[-315deg] bg-white' : 'bg-gray-600'} `}
					/>
					<span
						className={`block absolute left-0 w-[30px] h-[2px] top-[14px] rounded-[4px] transition-all duration-500 ${isOpen ? 'opacity-0 bg-white' : 'opacity-100 bg-gray-600'} `}
					/>
					<span
						className={`block absolute left-0 w-[30px] h-[2px] bottom-[4px] rounded-[4px] transition-all duration-500 ${isOpen ? 'translate-y-[-10px] rotate-[315deg] bg-white' : 'bg-gray-600'}`}
					/>
				</button>

				{isOpen && (
					<div
						className="fixed inset-0 bg-black bg-opacity-80 z-20 cursor-pointer transition-all duration-500 h-svh"
						onClick={toggleMenu}
						onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
					/>
				)}
			</div>
		</>
	)
}

export default MobileMenu
