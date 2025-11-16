import { Metadata } from "next";
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"
import Script from "next/script";

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: "Ebrahim Nasser - Full-Stack Developer & UI/UX Designer | React, Next.js Expert",
  description: "Ebrahim Nasser is a skilled Full-Stack Developer and UI/UX Designer specializing in React, Next.js, TypeScript, and modern web technologies. Currently studying Computer Science at Thebes Academy and working at Echopus.",
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
    "modern web development",
    "responsive design",
    "web applications",
    "portfolio",
    "Echopus developer",
    "BrSoft developer",
    "computer science student"
  ],
  authors: [{ name: "Ebrahim Nasser" }],
  creator: "Ebrahim Nasser",
  publisher: "Ebrahim Nasser",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ebrahim-nasser.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
    description: "Skilled Full-Stack Developer and UI/UX Designer specializing in React, Next.js, TypeScript, and modern web technologies.",
    url: "/",
    siteName: "Ebrahim Nasser Portfolio",
    images: [
      {
        url: "/logo.PNG",
        width: 1200,
        height: 630,
        alt: "Ebrahim Nasser - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
    description: "Skilled Full-Stack Developer and UI/UX Designer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/logo.PNG"],
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
  classification: "Portfolio Website",
  other: {
    "application-name": "Ebrahim Nasser Portfolio",
    "apple-mobile-web-app-title": "Ebrahim Nasser",
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
  "@type": "Person",
  "name": "Ebrahim Nasser",
  "jobTitle": "Full-Stack Developer & UI/UX Designer",
  "description": "Skilled Full-Stack Developer and UI/UX Designer specializing in React, Next.js, TypeScript, and modern web technologies",
  "url": "https://ebrahim-nasser.vercel.app/",
  "image": "https://ebrahim-nasser.vercel.app/logo.PNG",
  "sameAs": [
    "https://github.com/ebrahimnasser",
    "https://linkedin.com/in/ebrahimnasser",
    "https://twitter.com/ebrahimnasser"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Thebes Academy",
      "description": "Computer Science Degree - Currently Studying"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Route IT Training Center",
      "description": "Full Stack Development Diploma - Completed 2022"
    }
  ],
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Echopus",
      "description": "Front-End Developer - 2024-Present"
    },
    {
      "@type": "Organization",
      "name": "BrSoft",
      "description": "Part-time Developer - 2024"
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
      "JavaScript",
      "Node.js",
      "UI/UX Design",
      "MERN Stack",
      "Frontend Development",
      "Backend Development",
      "Responsive Design",
      "Modern Web Development"
    ]
  },
  "knowsAbout": [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Modern Web Technologies"
  ]
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3XDBE3VR7J"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3XDBE3VR7J');
          `}
      </Script>

      {/* Page Content */}
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  )
}
