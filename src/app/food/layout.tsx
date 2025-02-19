import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/src/app/globals.css'
import Header from '../components/layouts/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '料理バフ | トーラムいろいろツール',
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
				url: '/images/Metadata/og-image.jpg',
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
		images: '/images/Metadata/twitter-image.jpg',
	},
	verification: {
		google: '6OpGn6zf_DC6Sq376ndFl1wJ47WnLtXf0YK4Q6qW8u4',
	},
	icons: [
		{ rel: 'icon', url: '/images/Metadata/favicon.ico' },
		{
			rel: 'apple-touch-icon',
			url: '/images/Metadata/monster/apple-icon.png',
			sizes: '180x180',
		},
		{
			rel: 'icon',
			type: 'image/png',
			url: '/images/Metadata/monster/android-touch-icon.png',
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
			<Header title="料理バフ" link="/food" />
			{children}
		</>
	)
}
