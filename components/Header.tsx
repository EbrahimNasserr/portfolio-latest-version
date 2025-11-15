"use client"
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useIsScroll } from "@/hooks/use-isScroll";
import { useState } from "react";

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

export default function Header() {
  const scrolled = useIsScroll()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50`}>
      <div className={cn("container mx-auto px-6 py-4 transition-all", scrolled ? "backdrop-blur-sm" : "")}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between  px-3 lg:px-0">
            <div className=" flex items-center justify-start lg:justify-center gap-2">
              <Link href="/" className="">
                <Image src="/logo.svg" className="w-10 h-10 rounded-full" alt="Logo" width={50} height={50} loading="lazy" />
              </Link>
            </div>
            <ul className="items-center justify-center gap-12  hidden lg:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <motion.div className=" relative group" whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Link href={link.href}>{link.label}</Link>
                    <motion.span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end gap-4 ">
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Sidebar for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeSidebar}
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-64 bg-background border-r border-border z-50 lg:hidden shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <Link href="/" onClick={closeSidebar}>
                    <Image src="/logo.svg" className="w-10 h-10 rounded-full" alt="Logo" width={50} height={50} loading="lazy" />
                  </Link>
                  <button
                    onClick={closeSidebar}
                    className="p-2 rounded-md hover:bg-accent transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <ul className="flex flex-col gap-6">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeSidebar}
                          className="text-lg font-medium hover:text-primary transition-colors block py-2"
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Theme Toggle in Sidebar */}
                <div className="p-6 border-t border-border">
                  <ThemeToggle />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
