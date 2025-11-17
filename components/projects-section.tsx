"use client"

import { useEffect, useRef, useState, useCallback } from "react"
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
  video?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

interface CloudinaryVideo {
  publicId: string
  url: string
  format: string
  width?: number
  height?: number
  duration?: number
  bytes?: number
  createdAt: string
  folder?: string
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Alamir Store",
    description: "E-Commerce Platform with optimized performance and efficient state management",
    longDescription:
      "Full-stack e-commerce platform built with Next.js for optimized performance. Utilized Redux and RTK Query for efficient state management and data caching. Implemented product listings, search, filtering, and cart management. Successfully delivered and currently live.",
    image: "/modern-ecommerce-interface.webp",
    technologies: ["Next.js", "TailwindCSS", "Redux Toolkit", "RTK Query", "SEO Optimization"],
    liveUrl: "https://www.alamir.store/",
    githubUrl: "https://github.com/EbrahimNasserr/alamir",
    featured: true,
  },
  {
    id: 2,
    title: "StitchItOn",
    description: "Custom eCommerce Platform with drag-and-drop design customization",
    longDescription:
      "Feature-rich eCommerce platform for custom-printed apparel. Features an intuitive drag-and-drop customization system with real-time preview, custom pages, and layouts. Built with Vue.js and Tailwind CSS, enhanced with GSAP animations. Includes shopping cart, authentication, and order management.",
    image: "/clothing-design-app-interface.jpg",
    technologies: ["Vue.js", "GSAP", "Pinia.js", "TailwindCSS"],
    liveUrl: "https://stitchiton.net/",
    githubUrl: "https://github.com/echopus/stitch-frontend",
    featured: true,
  },
  {
    id: 3,
    title: "Plan4U",
    description: "Lesson Presentation & Content Management Tool for educators",
    longDescription:
      "Web-based interactive lesson editor for educators to create and deliver presentations. Features nested folder organization, content sharing with students, and a custom WYSIWYG editor with text/image editing. Built with Vue.js, Tailwind CSS, and Pinia for state management. Includes user roles and authentication for secure teacher-student collaboration.",
    image: "/project1.webp",
    technologies: ["Vue.js", "Pinia", "TailwindCSS", "WYSIWYG Editor", "Web Socket"],
    liveUrl: "https://plan4u.echop.us/",
    githubUrl: "https://github.com/echopus/stitch-frontend",
    featured: false,
  },
  {
    id: 4,
    title: "FreshCart",
    description: "E-Commerce Application - Final Project at Route IT Training Center",
    longDescription:
      "Dynamic e-Commerce application built as the final project for Route Academy. Utilized Context API for state management and React Query for efficient data fetching and caching. Features product browsing, cart management, and user authentication with a clean, responsive UI.",
    image: "/grocery-delivery-app.png",
    technologies: ["React", "Context API", "React Query", "TailwindCSS"],
    liveUrl: undefined,
    githubUrl: "https://github.com/EbrahimNasserr/freshCart",
    featured: false,
  },
]

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Intersection Observer to detect when card is in viewport
  useEffect(() => {
    if (!project.video || !cardRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "50px" } // Start loading slightly before card is visible
    )

    observer.observe(cardRef.current)

    return () => {
      observer.disconnect()
    }
  }, [project.video])

  // Load video source only when in viewport and on hover
  const loadVideo = useCallback(() => {
    if (videoRef.current && project.video && !videoLoaded) {
      const video = videoRef.current
      video.src = project.video

      // Handle video ready to play
      const handleCanPlay = () => {
        setVideoLoaded(true)
        video.removeEventListener("canplay", handleCanPlay)
      }

      video.addEventListener("canplay", handleCanPlay, { once: true })

      // Handle loading errors
      const handleError = () => {
        console.warn(`Failed to load video for ${project.title}`)
        video.removeEventListener("error", handleError)
      }

      video.addEventListener("error", handleError, { once: true })

      // Start loading the video
      video.load()
    }
  }, [project.video, videoLoaded, project.title])

  const handleMouseEnter = useCallback(() => {
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }

    setIsHovered(true)

    // Only load and play video if card is in viewport
    if (isInView && project.video) {
      if (!videoLoaded) {
        loadVideo()
      }

      // Play video when ready
      const playVideo = () => {
        if (videoRef.current && (videoLoaded || videoRef.current.readyState >= 2)) {
          videoRef.current.play().catch((error) => {
            // Silently handle autoplay restrictions
            if (error.name !== "NotAllowedError") {
              console.error("Error playing video:", error)
            }
          })
        } else if (videoRef.current) {
          // Wait for video to be ready
          const checkReady = () => {
            if (videoRef.current && videoRef.current.readyState >= 2) {
              videoRef.current.play().catch(() => { })
              videoRef.current.removeEventListener("canplay", checkReady)
            }
          }
          videoRef.current.addEventListener("canplay", checkReady, { once: true })
        }
      }

      // Small delay to ensure smooth transition
      hoverTimeoutRef.current = setTimeout(playVideo, 50)
    }
  }, [isInView, project.video, loadVideo, videoLoaded])

  const handleMouseLeave = useCallback(() => {
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }

    setIsHovered(false)

    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.src = ""
        videoRef.current.load()
      }
    }
  }, [])

  return (
    <div ref={cardRef} className={project.featured ? "md:col-span-2" : ""}>
      <Card
        className={`project-card group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${project.featured ? "md:flex md:items-center" : ""}`}>
          <div className={`${project.featured ? "md:w-1/2" : ""} relative overflow-hidden`}>
            {project.video ? (
              <>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-64 object-cover transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  loading="lazy"
                  decoding="async"
                />
                {isInView && (
                  <video
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-64 object-cover transition-opacity duration-500 ${isHovered && videoLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-label={`${project.title} preview video`}
                  />
                )}
              </>
            ) : (
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
    </div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [projects, setProjects] = useState<Project[]>(initialProjects)

  // Fetch videos from Cloudinary and map them to projects
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/cloudinary/videos?folder=portfolio")
        const data = await response.json()

        if (data.success && data.videos && data.videos.length > 0) {
          // Map videos to projects
          const updatedProjects = initialProjects.map((project) => {
            // Try to find matching video by project ID or title
            const matchingVideo = data.videos.find((video: CloudinaryVideo) => {
              const publicIdLower = video.publicId.toLowerCase()
              const projectIdStr = project.id.toString()
              const titleLower = project.title.toLowerCase().replace(/\s+/g, "-")

              // Match by project ID (e.g., "portfolio/project-1" or "portfolio/1")
              if (
                publicIdLower.includes(`project-${projectIdStr}`) ||
                publicIdLower.includes(`/${projectIdStr}.`) ||
                publicIdLower.includes(`/${projectIdStr}_`)
              ) {
                return true
              }

              // Match by project title (e.g., "portfolio/alamir-store")
              if (publicIdLower.includes(titleLower)) {
                return true
              }

              return false
            })

            // Return project with video URL if found
            return {
              ...project,
              video: matchingVideo ? matchingVideo.url : project.video,
            }
          })

          setProjects(updatedProjects)
        }
      } catch (error) {
        console.error("Error fetching videos from Cloudinary:", error)
        // Keep using initial projects if fetch fails
      }
    }

    fetchVideos()
  }, [])

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

          <p className="text-center text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            <span className="inline-block animate-bounce mr-2">🎬</span>
            <span className="font-medium text-foreground">Pro tip:</span> Hover over the cards below to watch the magic happen!
          </p>

          <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
