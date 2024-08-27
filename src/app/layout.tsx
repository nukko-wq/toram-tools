import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Favicon from '/public/images/Metadata/favicon.ico'
import AppleIcon from '/public/images/Metadata/apple-icon.png'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "トーラムいろいろツール",
  description: "トーラムオンラインのいろいろツール",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    noimageindex: true,
    nosnippet: true,
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
    </html>
  )
}
