import { Metadata } from "next";
import {
    InteractiveDotsBackground,
    ContactHeroSection,
    ContactInfoSection,
    ProofSection,
} from "./_components";

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
    title: "Contact | Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
    description: "Get in touch with Ebrahim Nasser for your next web development project. Specializing in React, Next.js, TypeScript, and modern web technologies. Available for freelance work and collaborations.",
    keywords: [
        "contact Ebrahim Nasser",
        "hire full-stack developer",
        "React developer for hire",
        "Next.js developer contact",
        "freelance web developer",
        "UI/UX designer contact",
        "web development services",
        "frontend developer hire",
        "TypeScript developer",
        "modern web development",
        "remote developer",
        "web application development",
        "responsive design services",
        "JavaScript developer contact",
        "MERN stack developer hire"
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
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact | Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
        description: "Get in touch with Ebrahim Nasser for your next web development project. Specializing in React, Next.js, TypeScript, and modern web technologies.",
        url: "/contact",
        siteName: "Ebrahim Nasser Portfolio",
        images: [
            {
                url: "/logo.PNG",
                width: 1200,
                height: 630,
                alt: "Contact Ebrahim Nasser - Full-Stack Developer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | Ebrahim Nasser - Full-Stack Developer & UI/UX Designer",
        description: "Get in touch with Ebrahim Nasser for your next web development project. Available for freelance work and collaborations.",
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
    classification: "Contact Page",
    other: {
        "application-name": "Ebrahim Nasser Portfolio",
        "apple-mobile-web-app-title": "Contact - Ebrahim Nasser",
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
    "@type": "ContactPage",
    "name": "Contact Ebrahim Nasser",
    "description": "Get in touch with Ebrahim Nasser for web development projects and collaborations",
    "url": "https://ebrahimnasser.dev/contact",
    "mainEntity": {
        "@type": "Person",
        "name": "Ebrahim Nasser",
        "jobTitle": "Full-Stack Developer & UI/UX Designer",
        "description": "Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies",
        "url": "https://ebrahimnasser.dev",
        "image": "https://ebrahimnasser.dev/logo.PNG",
        "email": "ebrahim.nasser.dev@gmail.com",
        "telephone": "+20 123 456 7890",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cairo",
            "addressCountry": "Egypt"
        },
        "sameAs": [
            "https://github.com/ebrahimnasser",
            "https://linkedin.com/in/ebrahimnasser",
            "https://twitter.com/ebrahimnasser",
            "https://instagram.com/ebrahimnasser"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+20 123 456 7890",
            "contactType": "customer service",
            "email": "ebrahim.nasser.dev@gmail.com",
            "availableLanguage": ["English", "Arabic"]
        },
        "offers": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Web Development Services",
                "description": "Full-stack web development, UI/UX design, and modern web application development"
            }
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
                "name": "Contact",
                "item": "https://ebrahimnasser.dev/contact"
            }
        ]
    }
};

// ============================================================================
// MAIN CONTACT PAGE COMPONENT
// ============================================================================

const ContactPage = () => {
    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Page Content */}
            <div className="relative bg-background text-foreground flex flex-col overflow-x-hidden">
                <InteractiveDotsBackground />
                <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/90" />

                <main className="flex-grow relative z-10">
                    <ContactHeroSection />
                    <ContactInfoSection />
                    <ProofSection />
                </main>
            </div>
        </>
    );
};

export default ContactPage;