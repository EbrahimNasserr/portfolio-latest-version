"use client"
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
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
    href: "https://github.com/ebrahimnasser",
    icon: <Github />,
  },
  
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ebrahimnasser",
    icon: <Linkedin />,
  },
  
  {
    label: "Twitter",
    href: "https://twitter.com/ebrahimnasser",
    icon: <Twitter />,
  },
]

export default function Header() {
  const scrolled = useIsScroll()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50`}>
      <div className={cn("container mx-auto px-6 py-4 transition-all", scrolled ? "backdrop-blur-sm" : "")}>
     <div className="max-w-6xl mx-auto">
         <div className="flex items-center justify-between">
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
        <div className="w-[33.33%] flex items-center justify-center gap-2">
        <Link href="/" className="">
            <Image src="/placeholder-logo.svg" alt="Logo" width={100} height={100} loading="lazy" />
          </Link>
        </div>
          <ul className="flex items-center justify-center gap-6 md:gap-12 w-[33.33%]">
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
