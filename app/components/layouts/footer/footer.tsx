'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
	const pathname = usePathname()
	const isSmithCalculatorPage = pathname.includes('/smith-calculator')

	if (isSmithCalculatorPage) {
		return (
			<footer className="hidden md:block items-center bg-gray-50 p-4">
				<aside className="flex items-center justify-center">
					<p className="text-slate-500 text-sm">© 2024 トーラムいろいろツール</p>
				</aside>
			</footer>
		)
	}

	return (
		<footer className="items-center bg-gray-50 p-4">
			<aside className="flex items-center justify-center">
				<p className="text-slate-500 text-sm">© 2024 トーラムいろいろツール</p>
			</aside>
		</footer>
	)
}
