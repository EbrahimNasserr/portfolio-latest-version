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
import FooterMobile from "@/components/footer-mobile"
import { Footer } from "@/components/footer"

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
      <body suppressHydrationWarning className={`font-sans ${GeistSans.variable} ${GeistMono.variable} border-2 mx-2 md:mx-6 mb-24 md:mb-0 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <GSAPProvider>
            <Suspense fallback={null}>
              <Header/>
              {children}
              <Footer />
             <div className="fixed z-[999] bottom-0 left-0 right-0 flex justify-center items-center py-4 md:hidden">
             <FooterMobile />
             </div>
            </Suspense>
          </GSAPProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
