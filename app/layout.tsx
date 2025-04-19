import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Particles from "@/components/particles"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sergio Robledo | Software Engineer",
  description: "Professional portfolio of Sergio Robledo, Software Engineer",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Particles />
          <div className="flex min-h-screen flex-col relative z-10">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
