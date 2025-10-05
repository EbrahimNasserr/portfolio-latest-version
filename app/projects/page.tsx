"use client"

import * as React from "react"
import { HTMLMotionProps, motion, useScroll, useTransform, Variants, MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, Github, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

// ============================================================================
// ANIMATED GALLERY COMPONENTS
// ============================================================================

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}

const SPRING_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
  duration: 0.3,
}

const blurVariants: Variants = {
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
  },
}

const ContainerStagger = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, viewport, transition, ...props }, ref) => {
    return (
      <motion.div
        className={cn("relative", className)}
        ref={ref}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, ...viewport }}
        transition={{
          staggerChildren: transition?.staggerChildren || 0.2,
          ...transition,
        }}
        {...props}
      />
    )
  }
)
ContainerStagger.displayName = "ContainerStagger"

const ContainerAnimated = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, transition, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        variants={blurVariants}
        transition={SPRING_CONFIG || transition}
        {...props}
      />
    )
  }
)
ContainerAnimated.displayName = "ContainerAnimated"

// ============================================================================
// CARDS STACK COMPONENTS
// ============================================================================

interface CardStickyProps extends Omit<HTMLMotionProps<"div">, 'style'> {
  index: number
  incrementY?: number
  incrementZ?: number
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const ContainerScrollStack = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        style={{ perspective: "1000px", ...props.style }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ContainerScrollStack.displayName = "ContainerScrollStack"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  ({ index, incrementY = 10, incrementZ = 10, children, className, style, ...props }, ref) => {
    const y = index * incrementY
    const z = index * incrementZ

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: y,
          z,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={cn("sticky", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
CardSticky.displayName = "CardSticky"

// ============================================================================
// DATA
// ============================================================================

const PROJECTS = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform with real-time inventory management and seamless checkout experience.",
    services: ["UI/UX Design", "Development", "Branding"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "project-2",
    title: "SaaS Dashboard",
    category: "Product Design",
    description: "Comprehensive analytics dashboard for SaaS businesses with advanced data visualization.",
    services: ["UI/UX Design", "Prototyping", "Development"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "project-3",
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and intuitive mobile banking application with biometric authentication.",
    services: ["Mobile Design", "Development", "Security"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: "project-4",
    title: "AI Content Generator",
    category: "AI & Machine Learning",
    description: "AI-powered content generation tool for marketers and content creators.",
    services: ["AI Integration", "UI/UX Design", "Development"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "project-5",
    title: "Fitness Tracking Platform",
    category: "Health & Wellness",
    description: "Comprehensive fitness tracking platform with personalized workout plans and nutrition guidance.",
    services: ["Mobile App", "Web Platform", "Wearable Integration"],
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop",
    color: "from-violet-500/20 to-indigo-500/20",
  },
] 

// ============================================================================
// MAIN PROJECTS PAGE COMPONENT
// ============================================================================

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Animated Gallery */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent opacity-50 blur-[100px]" />
          <div className="absolute -right-20 top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-purple-500/30 via-purple-500/20 to-transparent opacity-50 blur-[100px]" />
        </div>

        <ContainerStagger className="container relative z-10 py-28 px-4 text-center">
          <ContainerAnimated>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Our Work
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
              Explore our portfolio of innovative projects that blend creativity with cutting-edge technology
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

      {/* Featured Projects Section with Stack Cards */}
      <section className="relative bg-background py-24">
        <div className="container px-6">
          <div className="mb-16 text-center">
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

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-primary/20 via-primary/10 to-transparent opacity-50 blur-[100px]" />
        </div>
        <div className="container relative z-10 px-6 text-center">
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
    </div>
  )
}

export default ProjectsPage