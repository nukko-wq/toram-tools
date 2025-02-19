import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/src/app/globals.css'
import Header from '../components/layouts/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'トーラムボスモンスター | トーラムいろいろツール',
	description:
		'トーラムオンラインのいろいろツール。マーケット計算ツールがあります。',
	robots: {
		index: false,
		follow: false,
	},
	openGraph: {
		title: 'トーラムいろいろツール',
		description:
			'トーラムオンラインのいろいろツール。マーケット計算ツールがあります。',
		type: 'website',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: 'summary',
		title: 'トーラムいろいろツール',
		description:
			'トーラムオンラインのいろいろツール。マーケット計算ツールがあります。',
		images: '/twitter-image.jpg',
	},
	verification: {
		google: '6OpGn6zf_DC6Sq376ndFl1wJ47WnLtXf0YK4Q6qW8u4',
	},
	icons: [
		{ rel: 'icon', url: '/favicon.ico' },
		{
			rel: 'apple-touch-icon',
			url: '/apple-icon.png',
			sizes: '180x180',
		},
		{
			rel: 'icon',
			type: 'image/png',
			url: '/android-touch-icon.png',
			sizes: '192x192',
		},
	],
}

export default function MonsterLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header title="ボスモンスター検索" link="/monster" />
			{children}
		</>
	)
}
