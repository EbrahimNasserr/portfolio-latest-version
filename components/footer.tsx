import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-10 pb-6">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* --- Top Section: Links & Socials --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          
          {/* Quick Info & Social Icons */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Ebrahim Nasser</h3>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              Full Stack Web Developer crafting modern and performant web experiences.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-5 pt-2">
              <Link href="https://github.com/EbrahimNasserr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-200" />
              </Link>
              <Link href="https://www.linkedin.com/in/ebrahim-nasser" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-200" />
              </Link>
              <Link href="mailto:ebrahimm.nasser@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-200" />
              </Link>
              {/* Optional: Add Twitter/X if needed */}
              {/* <Link href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-200" />
              </Link> */}
            </div>
          </div>
          
          {/* Portfolio Links (Optional second column) */}
          <div className="text-center md:text-right space-y-2">
            <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground">
              About Me
            </Link>
            <Link href="/projects" className="block text-sm text-muted-foreground hover:text-foreground">
              Projects
            </Link>
            <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
              Get in Touch
            </Link>
            {/* Subtle "View Source" link */}
            <Link 
                href="https://github.com/your-username/your-repo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-xs font-mono mt-4 text-primary/70 hover:text-primary"
            >
                &lt;View Source Code /&gt;
            </Link>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Tech Stack (Separated by a line) --- */}
        <div className="mt-10 pt-6 border-t border-border/50">
          <p className="text-center text-xs text-muted-foreground/70 tracking-wider">
            &copy; {currentYear} Ebrahim Nasser. All Rights Reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground/50 mt-1">
            Built with Next.js, Tailwind CSS, GSAP, and 💙.
          </p>
        </div>
      </div>
    </footer>
  );
}