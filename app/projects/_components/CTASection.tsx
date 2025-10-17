"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// ============================================================================
// CTA SECTION COMPONENT
// ============================================================================

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-primary/20 via-primary/10 to-transparent opacity-50 blur-[100px]" />
      </div>
      <div className="container mx-auto relative z-10 px-6 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Ready to Start Your
          <br />
          <span className="text-primary">Next Project?</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Let's collaborate to bring your vision to life with innovative design and development solutions.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
