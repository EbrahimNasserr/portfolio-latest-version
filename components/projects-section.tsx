"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import MainTitle from "./shared/main-title/MainTitle"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Alamir Store",
    description: "Full-stack e-commerce platform with modern design and seamless user experience",
    longDescription:
      "A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, product management, shopping cart functionality, and secure payment processing. Includes admin dashboard for inventory management.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    liveUrl: "https://alamir-store.vercel.app",
    githubUrl: "https://github.com/ebrahimnasser/alamir-store",
    featured: true,
  },
  {
    id: 2,
    title: "StitchItOn",
    description: "Custom clothing design platform with real-time preview and ordering system",
    longDescription:
      "An innovative platform allowing users to design custom clothing with real-time 3D preview. Features include design tools, fabric selection, size customization, and integrated ordering system with production tracking.",
    image: "/clothing-design-app-interface.jpg",
    technologies: ["Vue.js", "Three.js", "Node.js", "PostgreSQL", "WebGL"],
    liveUrl: "https://stitchiton.com",
    githubUrl: "https://github.com/ebrahimnasser/stitchiton",
    featured: true,
  },
  {
    id: 3,
    title: "Plan4U",
    description: "Smart task management and productivity app with AI-powered suggestions",
    longDescription:
      "A modern productivity application that helps users organize tasks, set goals, and track progress. Features AI-powered task suggestions, calendar integration, team collaboration tools, and detailed analytics.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "TypeScript", "Firebase", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://plan4u.app",
    githubUrl: "https://github.com/ebrahimnasser/plan4u",
    featured: false,
  },
  {
    id: 4,
    title: "FreshCart",
    description: "Grocery delivery app with real-time tracking and inventory management",
    longDescription:
      "A comprehensive grocery delivery platform connecting customers with local stores. Features include real-time order tracking, inventory management, delivery scheduling, and integrated payment processing.",
    image: "/grocery-delivery-app.png",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
    liveUrl: "https://freshcart.app",
    githubUrl: "https://github.com/ebrahimnasser/freshcart",
    featured: false,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Project cards animation
      const cards = gridRef.current?.querySelectorAll(".project-card")
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <MainTitle title="Featured Projects" ref={titleRef} />

          <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`project-card group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className={`${project.featured ? "md:flex md:items-center" : ""}`}>
                  <div className={`${project.featured ? "md:w-1/2" : ""} relative overflow-hidden`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className={`${project.featured ? "md:w-1/2" : ""} p-6`}>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        {project.featured && (
                          <Badge className="bg-primary/20 text-primary border-primary/30">Featured</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <Button asChild size="sm" className="bg-primary dark:bg-primary/50  hover:bg-primary/90 text-primary-foreground">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <a href="https://github.com/EbrahimNasserr?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
