import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Favicon from '/public/images/Metadata/favicon.ico'
import AppleIcon from '/public/images/Metadata/apple-icon.png'
import AndroidIcon from '/public/images/Metadata/android-touch-icon.png'
import OgImage from '/public/images/Metadata/og-image.jpg'
import TwitterImage from '/public/images/Metadata/twitter-image.jpg'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "トーラムいろいろツール",
  description: "トーラムオンラインのいろいろツール。マーケット計算ツールがあります。",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "トーラムいろいろツール",
    description: "トーラムオンラインのいろいろツール。マーケット計算ツールがあります。",
    type: "website",
    url: "https://toram-tools.vercel.app",
    images: [
      {
        url: OgImage.src,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'トーラムいろいろツール',
    description: 'トーラムオンラインのいろいろツール。マーケット計算ツールがあります。',
    images: TwitterImage.src
  },
  verification: {
    google: "6OpGn6zf_DC6Sq376ndFl1wJ47WnLtXf0YK4Q6qW8u4",
  },
  icons: [
    { rel: 'icon', url: Favicon.src },
    { rel: 'apple-touch-icon', url: AppleIcon.src, sizes: "180x180"},
    { rel: 'icon', type: "image/png", url: AndroidIcon.src, sizes: "192x192"}
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-GZ32LPEYKN" />
    </html>
  )
}
