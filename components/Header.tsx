"use client"
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Github, Phone } from "lucide-react";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsScroll } from "@/hooks/use-isScroll";

interface socialLinks {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface navLinks {
  label: string;
  href: string;
}

const navLinks: navLinks[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

const socialLinks: socialLinks[] = [
  {
    label: "GitHub",
    href: "https://github.com/EbrahimNasserr",
    icon: <Github />,
  },

  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ebrahim-nasser",
    icon: <Linkedin />,
  },

  {
    label: "WhatsApp",
    href: "https://wa.me/201152153667",
    icon: <Phone />,
  },
]

export default function Header() {
  const scrolled = useIsScroll()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50`}>
      <div className={cn("container mx-auto px-6 py-4 transition-all", scrolled ? "backdrop-blur-sm" : "")}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between lg:justify-around px-3 lg:px-0">
            <ul className="items-center justify-center gap-12 w-[33.33%] hidden lg:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <motion.div className=" relative group" whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Link href={link.href}>{link.label}</Link>
                    <motion.span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.div>
                </li>
              ))}
            </ul>
            <div className="w-[33.33%] lg:w-auto flex items-center justify-start lg:justify-center gap-2">
              <Link href="/" className="">
                <Image src="/logo.svg" className="w-10 h-10 rounded-full" alt="Logo" width={50} height={50} loading="lazy" />
              </Link>
            </div>
            <ul className="flex items-center justify-center gap-6 md:gap-12 w-auto lg:w-[33.33%]">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a title={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
