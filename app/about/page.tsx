import { Metadata } from "next";
import { Timeline, ServicesSection, IntroSection, TimelineEntry } from "./_components";

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
  const timelineData: TimelineEntry[] = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Continuing my Computer Science degree at Thebes Academy while working as a Full Stack Developer. 
            Focused on scalable web apps and advanced state management.
          </p>
          <div className="grid grid-cols-2 gap-4">
  <img
    src="https://source.unsplash.com/1581090700227-4c4d1b2f2b6e/400x300"
    alt="2025 milestone"
    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
  />
  <img
    src="https://source.unsplash.com/1526378722484-c1f81cfd9e87/400x300"
    alt="2025 milestone"
    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
  />
</div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div key={"2024"}>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Joined Echopus as a Front-End Developer, built client-facing platforms with React and Next.js.  
            Also worked part-time at BrSoft, delivering two e-commerce platforms and a company portfolio website.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              alt="2024 milestone"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop"
              alt="2024 milestone"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div key={"2023"}>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal my-8">
            Worked as a Front-End Instructor at GDSC, teaching React, Next.js, and animations.  
            Mentored students and conducted hands-on coding workshops.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"
              alt="2023 milestone"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop"
              alt="2023 milestone"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div key={"2022"}>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal my-4">
            Started my Computer Science degree at Thebes Academy and began my journey into web development.  
            Completed a Full Stack diploma at Route IT Training Center.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Learned MERN Stack fundamentals
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Built my first full-stack project
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Set foundations in clean code & UI/UX
            </div>
          </div>
        </div>
      ),
    },
  ];
  

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Page Content */}
      <main className="w-full min-h-screen bg-muted/30">
        <IntroSection />
        <ServicesSection />
        <Timeline data={timelineData} />
      </main>
    </>
  );
}
