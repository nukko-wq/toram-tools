import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from './components/layouts/footer/footer'

// Google Analytics ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// 動的メタデータを生成する関数
export async function generateMetadata(): Promise<Metadata> {
	// 現在のホスト名を取得
	const host =
		process.env.VERCEL_URL ||
		process.env.NEXT_PUBLIC_SITE_URL ||
		'localhost:3000'

	// toram-tools.vercel.appの場合はindexを無効化
	const shouldIndex = !host.includes('toram-tools.vercel.app')

	return {
		title: 'トーラムいろいろツール',
		description:
			'トーラムオンラインのいろいろツール。マーケット計算ツールやスミス成功率計算ツールがあります。',
		robots: {
			index: shouldIndex,
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
			{GA_ID && <GoogleAnalytics gaId={GA_ID} />}
		</html>
	)
}
