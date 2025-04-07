import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bengali OG Image Generator",
  description: "Generate OG images with Bengali text support and beautiful gradients",
  openGraph: {
    title: "Bengali OG Image Generator",
    description: "Generate OG images with Bengali text support and beautiful gradients",
    images: ["/api/og?title=বাংলা%20ওজি%20ইমেজ%20জেনারেটর"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Noto Sans Bengali font with proper weights */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'