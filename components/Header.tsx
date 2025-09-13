import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import "../styles/header.css";

const navLinks = [
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

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ebrahimnasser",
    icon: Github,
  },
  
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ebrahimnasser",
    icon: Linkedin,
  },
  
  {
    label: "Twitter",
    href: "https://twitter.com/ebrahimnasser",
    icon: Twitter,
  },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-12 py-4">
        <div className="flex items-center justify-between">
          <ul className="flex items-center justify-center gap-12 w-[33.33%]">
            {navLinks.map((link) => (
              <li key={link.label} className="custom-underline">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        <div className="w-[33.33%] flex items-center justify-center gap-2">
        <Link href="/" className="">
            <Image src="/placeholder-logo.svg" alt="Logo" width={100} height={100} loading="lazy" />
          </Link>
        </div>
          <ul className="flex items-center justify-center gap-12 w-[33.33%]">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a title={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-5 h-5" />
                </a>
              </li>
            ))}
            <li>
            <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
