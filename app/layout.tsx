import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Codexura - Professional 3D Web Development Agency",
  description:
    "We create stunning 3D websites, business solutions, restaurant platforms, and POS systems. Transform your digital presence with cutting-edge web technology.",
  keywords:
    "3D websites, web development, React, Next.js, business websites, restaurant websites, POS systems, portfolio websites",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
