import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Mono, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Poolix Protocol - Convergent AI & Terminal Interfaces",
  description:
    "Experimenting around terminals, identity, and how we interact with AI systems through raw interfaces. The convergence point for human-machine dialogue.",
  icons: { icon: "/images/poolix-logo.png" },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#00FFFF",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceMono.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
