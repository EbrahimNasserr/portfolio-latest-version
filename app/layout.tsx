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
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://ebrahimnasser.dev"),
  title: {
    default: "Ebrahim Nasser - Full-Stack Developer & UI/UX Designer | React, Next.js Expert",
    template: "%s | Ebrahim Nasser Portfolio",
  },
  description:
    "Ebrahim Nasser is a skilled Full-Stack Developer and UI/UX Designer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. Building scalable web applications with exceptional user experiences. Currently studying Computer Science at Thebes Academy and working at Echopus.",
  keywords: [
    "Ebrahim Nasser",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "UI/UX designer",
    "TypeScript developer",
    "frontend developer",
    "backend developer",
    "web developer",
    "JavaScript developer",
    "Node.js developer",
    "MERN stack developer",
    "MongoDB",
    "Express.js",
    "modern web development",
    "responsive design",
    "web applications",
    "portfolio",
    "software engineer",
    "web design",
    "user interface design",
    "user experience design",
    "Echopus developer",
    "BrSoft developer",
    "computer science student",
    "Thebes Academy",
  ],
  authors: [{ name: "Ebrahim Nasser" }],
  creator: "Ebrahim Nasser",
  publisher: "Ebrahim Nasser",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ebrahimnasser.dev",
    siteName: "Ebrahim Nasser Portfolio",
    title: "Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
    description:
      "Skilled Full-Stack Developer and UI/UX Designer specializing in React, Next.js, TypeScript, and modern web technologies. Building scalable web applications with exceptional user experiences.",
    images: [
      {
        url: "/logo.PNG",
        width: 1200,
        height: 630,
        alt: "Ebrahim Nasser - Full-Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
    description:
      "Skilled Full-Stack Developer and UI/UX Designer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/logo.PNG"],
    creator: "@ebrahimnasser",
    site: "@ebrahimnasser",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Portfolio Website",
  applicationName: "Ebrahim Nasser Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-title": "Ebrahim Nasser",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "google-site-verification": "UoGoSbxzHZedipZGh2sne_waDCKCQ_xnBk8QKa1TKds",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Google Search Console Verification */}
      <head>
        <meta name="google-site-verification" content="UoGoSbxzHZedipZGh2sne_waDCKCQ_xnBk8QKa1TKds" />
      </head>
      <body suppressHydrationWarning className={`font-sans ${GeistSans.variable} ${GeistMono.variable} border-2 mx-2 md:mx-6 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <GSAPProvider>
            <Suspense fallback={null}>
              <Header />
              {children}
              <Footer />
            </Suspense>
          </GSAPProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
