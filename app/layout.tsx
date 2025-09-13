import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { GSAPProvider } from "@/components/gsap-provider"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Ebrahim Nasser - Full Stack Developer",
  description:
    "Passionate and detail-oriented Full Stack Web Developer specializing in MERN stack and modern front-end frameworks",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <GSAPProvider>
            <Suspense fallback={null}>
              <Header/>
              {children}
            </Suspense>
          </GSAPProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
