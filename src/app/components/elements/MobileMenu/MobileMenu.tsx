'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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
			<div className="relative md:hidden">
				<nav
					className={`fixed top-0 bottom-0 flex h-svh w-[240px] flex-col overflow-y-auto overflow-x-hidden bg-white transition-all duration-500 ${isOpen ? 'left-0' : '-left-[240px]'} z-30`}
				>
					<div className="p-[25px]">
						<ul className="">
							<li className="relative border-gray-300 border-b">
								<button
									type="button"
									onClick={() => handleLinkClick('/market')}
									className="block w-full py-4 text-left text-gray-700 duration-200 hover:bg-gray-100 active:bg-gray-100"
								>
									マーケット計算
								</button>
							</li>
						</ul>
					</div>
				</nav>
				<button
					onClick={toggleMenu}
					className={`fixed top-[15px] left-4 z-30 block h-[30px] w-[30px] cursor-pointer transition-all duration-500 ${isOpen ? 'left-[260px]' : ''}`}
					type="button"
				>
					<span
						className={`absolute top-[4px] left-0 block h-[2px] w-[30px] rounded-[4px] transition-all duration-500 ${isOpen ? 'translate-y-[10px] rotate-[-315deg] bg-white' : 'bg-gray-600'}`}
					/>
					<span
						className={`absolute top-[14px] left-0 block h-[2px] w-[30px] rounded-[4px] transition-all duration-500 ${isOpen ? 'bg-white opacity-0' : 'bg-gray-600 opacity-100'}`}
					/>
					<span
						className={`absolute bottom-[4px] left-0 block h-[2px] w-[30px] rounded-[4px] transition-all duration-500 ${isOpen ? 'translate-y-[-10px] rotate-[315deg] bg-white' : 'bg-gray-600'}`}
					/>
				</button>

				{isOpen && (
					<div
						className="fixed inset-0 z-20 h-svh cursor-pointer bg-black bg-opacity-80 transition-all duration-500"
						onClick={toggleMenu}
						onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
					/>
				)}
			</div>
		</>
	)
}

export default MobileMenu
