import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-12 py-4">
        <div className="flex items-center justify-evenly">
          <ul className="flex items-center gap-4">
            <li >
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} className="w-10 h-10" />
          </Link>
          <ul className="flex items-center gap-4">
            <li>
                <a title="GitHub" href="https://github.com/ebrahimnasser" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                </a>
            </li>
            <li>
                <a title="LinkedIn" href="https://linkedin.com/in/ebrahimnasser" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                </a>
            </li>
            <li>
                <a title="Twitter" href="https://twitter.com/ebrahimnasser" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                </a>
            </li>
            <li>
            <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
