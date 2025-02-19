import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from './components/layouts/footer/footer'
import type {
	Article as JsonLDArticle,
	WebPage as JsonLDWebPage,
	WithContext,
} from 'schema-dts'

export const metadata: Metadata = {
	title: 'トーラムいろいろツール',
	description:
		'トーラムオンラインのいろいろツール。マーケット計算ツールがあります。',
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'トーラムいろいろツール',
		description:
			'トーラムオンラインのいろいろツール。マーケット計算ツールがあります。',
		type: 'website',
		siteName: 'トーラムいろいろツール',
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

const jsonLD: WithContext<JsonLDArticle | JsonLDWebPage> = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	name: 'トーラムいろいろツール',
	url: 'https://toram-tools.vercel.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ja">
			<body className="">
				<div className="flex flex-col min-h-screen">
					<main className="flex flex-col flex-grow">{children}</main>
					<Footer />
				</div>
				<Analytics />
				<script
					key="json-ld"
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
				/>
			</body>
			<GoogleAnalytics gaId="G-GZ32LPEYKN" />
		</html>
	)
}
