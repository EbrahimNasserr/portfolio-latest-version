import { Metadata } from "next"
import Script from "next/script"
import { HeroSection, FeaturedProjectsSection, CTASection } from "./_components"

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: "Projects | Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
  description: "Explore my portfolio of innovative web development projects including e-commerce platforms, SaaS dashboards, mobile apps, and AI-powered solutions. See how I blend creativity with cutting-edge technology.",
  keywords: [
    "web development projects",
    "portfolio",
    "full-stack developer",
    "UI/UX design",
    "React projects",
    "Next.js applications",
    "e-commerce development",
    "SaaS dashboard",
    "mobile app development",
    "AI integration",
    "modern web design",
    "responsive design",
    "TypeScript projects",
    "frontend development",
    "backend development"
  ],
  authors: [{ name: "Ebrahim Nasser" }],
  creator: "Ebrahim Nasser",
  publisher: "Ebrahim Nasser",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ebrahimnasser.dev"),
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
    description: "Explore my portfolio of innovative web development projects including e-commerce platforms, SaaS dashboards, mobile apps, and AI-powered solutions.",
    url: "/projects",
    siteName: "Ebrahim Nasser Portfolio",
    images: [
      {
        url: "/project1.webp",
        width: 1200,
        height: 630,
        alt: "Ebrahim Nasser Projects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
    description: "Explore my portfolio of innovative web development projects including e-commerce platforms, SaaS dashboards, mobile apps, and AI-powered solutions.",
    images: ["/project1.webp"],
    creator: "@ebrahimnasser",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
  classification: "Portfolio",
  other: {
    "application-name": "Ebrahim Nasser Portfolio",
    "apple-mobile-web-app-title": "Projects - Ebrahim Nasser",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "theme-color": "#000000",
    "color-scheme": "dark light",
  },
}

// ============================================================================
// STRUCTURED DATA (JSON-LD)
// ============================================================================

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Projects Portfolio",
  "description": "A collection of innovative web development projects by Ebrahim Nasser",
  "url": "https://ebrahimnasser.dev/projects",
  "author": {
    "@type": "Person",
    "name": "Ebrahim Nasser",
    "url": "https://ebrahimnasser.dev",
    "jobTitle": "Full-Stack Developer & UI/UX Designer",
    "sameAs": [
      "https://github.com/ebrahimnasser",
      "https://linkedin.com/in/ebrahimnasser",
      "https://twitter.com/ebrahimnasser"
    ]
  },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "position": 1,
        "name": "E-Commerce Platform",
        "description": "A modern e-commerce platform with real-time inventory management and seamless checkout experience.",
        "category": "Web Development",
        "keywords": ["e-commerce", "web development", "React", "Next.js"]
      },
      {
        "@type": "CreativeWork",
        "position": 2,
        "name": "SaaS Dashboard",
        "description": "Comprehensive analytics dashboard for SaaS businesses with advanced data visualization.",
        "category": "Product Design",
        "keywords": ["SaaS", "dashboard", "analytics", "data visualization"]
      },
      {
        "@type": "CreativeWork",
        "position": 3,
        "name": "Mobile Banking App",
        "description": "Secure and intuitive mobile banking application with biometric authentication.",
        "category": "Mobile Development",
        "keywords": ["mobile app", "banking", "security", "biometric"]
      },
      {
        "@type": "CreativeWork",
        "position": 4,
        "name": "AI Content Generator",
        "description": "AI-powered content generation tool for marketers and content creators.",
        "category": "AI & Machine Learning",
        "keywords": ["AI", "content generation", "machine learning", "automation"]
      },
      {
        "@type": "CreativeWork",
        "position": 5,
        "name": "Fitness Tracking Platform",
        "description": "Comprehensive fitness tracking platform with personalized workout plans and nutrition guidance.",
        "category": "Health & Wellness",
        "keywords": ["fitness", "health", "tracking", "wellness", "mobile app"]
      }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ebrahimnasser.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://ebrahimnasser.dev/projects"
      }
    ]
  }
}

// ============================================================================
// MAIN PROJECTS PAGE COMPONENT
// ============================================================================

const ProjectsPage = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3XDBE3VR7J"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-projects" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3XDBE3VR7J', {
            page_path: '/projects',
          });
        `}
      </Script>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Page Content */}
      <main className="min-h-screen bg-background">
        <HeroSection />
        <FeaturedProjectsSection />
        <CTASection />
      </main>
    </>
  )
}

export default ProjectsPage