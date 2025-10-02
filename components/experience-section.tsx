"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import MainTitle from "./shared/main-title/MainTitle"

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Front-End Developer",
    company: "Echopus",
    location: "Cairo, Egypt",
    period: "2024 - Present",
    description: [
      "Developed and maintained user-centric web applications using React, Next.js, and Vue.js",
      "Collaborated with cross-functional teams to deliver high-quality, responsive, and performant websites",
      "Implemented seamless animations and interactive features to enhance user experience",
      "Ensured code quality, maintainability, and scalability while meeting project deadlines",
    ],
    technologies: ["React", "Next.js", "Vue.js", "JavaScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Front-End Developer",
    company: "BrSoft",
    location: "Cairo, Egypt",
    period: "2024",
    description: [
      "Built responsive web applications using Next.js and modern CSS frameworks",
      "Developed two e-commerce platforms from scratch, ensuring high performance, responsiveness, and seamless user experiences",
      "Built and maintained the company portfolio website, showcasing BRSoft’s projects and services with a modern and interactive design",
    ],
    technologies: ["Next.js", "JavaScript", "CSS3", "Redux Toolkit", "Material-UI"],
  },
  {
    id: 3,
    title: "Web Instructor",
    company: "GDSC (Google Developer Student Clubs)",
    location: "University",
    period: "2023 - 2024",
    description: [
      "Designed and Delivered Curriculum: Developed comprehensive lesson plans and instructional materials covering HTML, CSS, JavaScript, React, and Next.js",
      "Hands-On Training: Conducted interactive coding sessions, workshops, and tutorials to enhance practical skills in front-end development and animations",
      "Contributed to open-source projects and community initiatives",
      "Mentorship: Provided one-on-one mentorship and guidance to students, helping them to understand complex concepts and complete their projects",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Next.js", "Tailwind CSS"],
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

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

      // Timeline cards animation
      const cards = timelineRef.current?.querySelectorAll(".experience-card")
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })
      }

      // Timeline line animation
      const timelineLine = timelineRef.current?.querySelector(".timeline-line")
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
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
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <MainTitle title="Experience" ref={titleRef} />

          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`experience-card flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border border-border/50">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-foreground text-left">{exp.title}</CardTitle>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4 text-left">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground leading-relaxed">
                              • {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
