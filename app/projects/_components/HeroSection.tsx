"use client"

import { ArrowRight, Github, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContainerStagger, ContainerAnimated } from "./AnimatedGallery"

// ============================================================================
// HERO SECTION COMPONENT
// ============================================================================

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 pt-28 pb-12 px-4">
     
     <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#a3a3a32e_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a32e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]" />

      <ContainerStagger className="container mx-auto relative z-10 text-center">
        <ContainerAnimated>
        <div className="text-primary text-sm font-semibold uppercase mb-6 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          My Work
        </div>
        </ContainerAnimated>

        <ContainerAnimated>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
        </ContainerAnimated>

        <ContainerAnimated>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Explore my portfolio of innovative projects that blend creativity with cutting-edge technology
            to deliver exceptional results.
          </p>
        </ContainerAnimated>

        <ContainerAnimated>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </div>
        </ContainerAnimated>
      </ContainerStagger>
    </section>
  )
}
