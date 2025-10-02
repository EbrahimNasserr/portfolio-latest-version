import ChangeLog from "./_changelog/ChangeLog";
import Services from "./_components/Services";
import SplineSceneBasic from "./_changelog/components/splineScene";
import CoreSkills from "./_coreSkills/CoreSkills";

export const metadata = {
  title: "About Me | Ebrahim Nasser - Full Stack Web Developer",
  description:
    "Discover Ebrahim Nasser, a Full Stack Web Developer in Cairo specializing in React, Next.js, and MERN stack. Expert in modern UI/UX, GSAP animations, and scalable web apps.",
  keywords: [
    "Ebrahim Nasser",
    "Full Stack Web Developer Cairo",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Frontend Developer Egypt",
    "GSAP Animations",
    "UI/UX Engineer",
  ],
  openGraph: {
    title: "About Me | Ebrahim Nasser",
    description:
      "Full Stack Web Developer in Cairo specializing in React, Next.js, MERN Stack, and GSAP animations.",
    url: "https://ebrahim-nasser.vercel.app/about",
    siteName: "Ebrahim Nasser Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Ebrahim Nasser",
    description:
      "Frontend & Full Stack Developer specializing in Next.js, React, MERN Stack, and modern UI/UX with GSAP animations.",
  },
};

  
export default function page() {
  return (
    <main>
      {/* <SplineSceneBasic /> */}
      {/* <CoreSkills /> */}
      <ChangeLog />
      <Services/>
    </main>
  )
}
