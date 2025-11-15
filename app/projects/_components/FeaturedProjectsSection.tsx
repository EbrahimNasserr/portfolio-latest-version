"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ContainerScrollStack, CardSticky } from "./CardsStack"
import { PROJECTS } from "./data"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"

// ============================================================================
// FEATURED PROJECTS SECTION COMPONENT
// ============================================================================

export const FeaturedProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"]);
  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-muted/30 to-background text-foreground py-10">
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />

      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our latest work across various industries and technologies
          </p>
        </div>

        <ContainerScrollStack className="min-h-[500vh] py-12">
          {PROJECTS.map((project, index) => (
            <CardSticky
              key={project.id}
              index={index}
              className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-xl md:rounded-2xl"
              incrementY={40}
              incrementZ={5}
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative h-48 overflow-hidden sm:h-64 md:h-full">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", project.color)} />
                  <img
                    className="h-full w-full object-cover"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12">
                  <div>
                    <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.category}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground sm:mb-6 sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <div
                          key={service}
                          className="rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-medium"
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <Button variant="outline" className="w-full gap-2 sm:w-auto">
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardSticky>
          ))}
        </ContainerScrollStack>
      </div>
    </section>
  )
}
