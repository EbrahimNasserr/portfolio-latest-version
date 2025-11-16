import { Metadata } from "next";
import Script from "next/script";
import { FeatureSteps, ServicesSection, IntroSection } from "./_components";

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: "About | Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
  description: "Learn about Ebrahim Nasser's journey from Computer Science student to Full-Stack Developer. Discover my experience at Echopus, BrSoft, and GDSC, plus my expertise in React, Next.js, and modern web development.",
  keywords: [
    "about Ebrahim Nasser",
    "full-stack developer story",
    "web developer journey",
    "computer science student",
    "React developer experience",
    "Next.js expert",
    "UI/UX designer background",
    "Echopus developer",
    "BrSoft experience",
    "GDSC instructor",
    "frontend developer timeline",
    "web development career",
    "MERN stack developer",
    "Route IT Training",
    "Thebes Academy"
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
    canonical: "/about",
  },
  openGraph: {
    title: "About | Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
    description: "Learn about Ebrahim Nasser's journey from Computer Science student to Full-Stack Developer. Discover my experience at Echopus, BrSoft, and GDSC.",
    url: "/about",
    siteName: "Ebrahim Nasser Portfolio",
    images: [
      {
        url: "/about.webp",
        width: 1200,
        height: 630,
        alt: "About Ebrahim Nasser - Full-Stack Developer Journey",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
    description: "Learn about Ebrahim Nasser's journey from Computer Science student to Full-Stack Developer. Discover my experience and expertise.",
    images: ["/about.webp"],
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
  classification: "About Page",
  other: {
    "application-name": "Ebrahim Nasser Portfolio",
    "apple-mobile-web-app-title": "About - Ebrahim Nasser",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "theme-color": "#000000",
    "color-scheme": "dark light",
  },
};

// ============================================================================
// STRUCTURED DATA (JSON-LD)
// ============================================================================

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Ebrahim Nasser",
  "description": "Learn about Ebrahim Nasser's journey as a Full-Stack Developer and UI/UX Designer",
  "url": "https://ebrahimnasser.dev/about",
  "mainEntity": {
    "@type": "Person",
    "name": "Ebrahim Nasser",
    "jobTitle": "Full-Stack Developer & UI/UX Designer",
    "description": "Computer Science student and experienced Full-Stack Developer specializing in React, Next.js, and modern web technologies",
    "url": "https://ebrahimnasser.dev",
    "image": "https://ebrahimnasser.dev/about.webp",
    "sameAs": [
      "https://github.com/ebrahimnasser",
      "https://linkedin.com/in/ebrahimnasser",
      "https://twitter.com/ebrahimnasser"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Thebes Academy",
        "description": "Computer Science Degree"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Route IT Training Center",
        "description": "Full Stack Development Diploma"
      }
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Echopus",
        "description": "Front-End Developer"
      },
      {
        "@type": "Organization",
        "name": "BrSoft",
        "description": "Part-time Developer"
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "occupationLocation": {
        "@type": "Place",
        "name": "Remote"
      },
      "skills": [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "UI/UX Design",
        "MERN Stack",
        "Frontend Development",
        "Backend Development"
      ]
    }
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
        "name": "About",
        "item": "https://ebrahimnasser.dev/about"
      }
    ]
  }
};

// Main About Page Component
export default function AboutPage() {

  const features = [
    {
      step: 'Step 1',
      title: 'Learn the Basics',
      content: 'Start your Web3 journey by learning the basics of blockchain.',
      image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 2',
      title: 'Deep Dive',
      content: 'Dive deep into blockchain fundamentals and smart contract development.',
      image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 3',
      title: 'Build Projects',
      content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
      image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
    },
  ]


  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3XDBE3VR7J"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-about" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3XDBE3VR7J', {
            page_path: '/about',
          });
        `}
      </Script>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Page Content */}
      <main className="w-full min-h-screen bg-muted/30">
        <IntroSection />
        <ServicesSection />
        <FeatureSteps features={features} />
      </main>
    </>
  );
}
