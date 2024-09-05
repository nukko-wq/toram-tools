import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Favicon from '/public/images/Metadata/favicon.ico'
import AppleIcon from '/public/images/Metadata/apple-icon.png'
import AndroidIcon from '/public/images/Metadata/android-touch-icon.png'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "トーラムいろいろツール",
  description: "トーラムオンラインのいろいろツール。今のところマーケット計算ツールしかありません。",
  robots: {
    index: true,
    follow: true,
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
