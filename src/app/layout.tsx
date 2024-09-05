import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Favicon from '/public/images/Metadata/favicon.ico'
import AppleIcon from '/public/images/Metadata/apple-icon.png'
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
  icons: [
    { rel: 'icon', url: Favicon.src },
    { rel: 'apple-touch-icon', url: AppleIcon.src}
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
