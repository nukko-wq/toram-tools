import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from './components/layouts/footer/footer'

export const metadata: Metadata = {
	title: 'トーラムいろいろツール',
	description:
		'トーラムオンラインのいろいろツール。マーケット計算ツールやスミス成功率計算ツールがあります。',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'トーラムいろいろツール',
		description:
			'トーラムオンラインのいろいろツール。マーケット計算ツールやスミス成功率計算ツールがあります。',
		type: 'website',
		siteName: 'トーラムいろいろツール',
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
			'トーラムオンラインのいろいろツール。マーケット計算ツールやスミス成功率計算ツールがあります。',
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ja">
			<body className="">
				<div className="flex min-h-screen flex-col">
					<main className="flex grow flex-col">{children}</main>
					<Footer />
				</div>
			</body>
			<GoogleAnalytics gaId="G-CX69JHXP3E" />
		</html>
	)
}
