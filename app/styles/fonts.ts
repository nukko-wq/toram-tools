import { Inter } from 'next/font/google'
import { Inconsolata } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
})

const inconsolata = Inconsolata({
	subsets: ['latin'],
	weight: '500',
	variable: '--font-inconsolata',
	display: 'swap',
})

export { inter, inconsolata }
