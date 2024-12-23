import type { Metadata } from 'next'
import '@/src/app/globals.css'
import Favicon from '/public/images/Metadata/favicon.ico'
import AppleIcon from '/public/images/Metadata/monster/apple-icon.png'
import AndroidIcon from '/public/images/Metadata/monster/android-touch-icon.png'
import OgImage from '/public/images/Metadata/og-image.jpg'
import TwitterImage from '/public/images/Metadata/twitter-image.jpg'
import Header from '../components/layouts/header/header'

export const metadata: Metadata = {
	title: 'トーラム色一覧 | トーラムいろいろツール',
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
				url: OgImage.src,
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
		images: TwitterImage.src,
	},
	verification: {
		google: '6OpGn6zf_DC6Sq376ndFl1wJ47WnLtXf0YK4Q6qW8u4',
	},
	icons: [
		{ rel: 'icon', url: Favicon.src },
		{ rel: 'apple-touch-icon', url: AppleIcon.src, sizes: '180x180' },
		{ rel: 'icon', type: 'image/png', url: AndroidIcon.src, sizes: '192x192' },
	],
}

export default function MonsterLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header title="トーラム色一覧" link="/colors" />
			{children}
		</>
	)
}
