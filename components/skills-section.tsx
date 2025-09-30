"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MainTitle from "./shared/main-title/MainTitle"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TechnicalSkill {
  name: string
  level: number
}

interface Tool {
  name: string
  icon: string
}

const technicalSkills: TechnicalSkill[] = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Docker", level: 65 },
  { name: "TypeScript", level: 70 },
  { name: "Node.js", level: 65 },
  { name: "UI/UX Design", level: 85 },
  { name: "Figma", level: 95 },
  { name: "DevOps", level: 50 },
]

const tools: Tool[] = [
  { name: "React", icon: "R" },
  { name: "TypeScript", icon: "T" },
  { name: "Node.js", icon: "N" },
  { name: "MongoDB", icon: "M" },
  { name: "Express", icon: "E" },
  { name: "Styled Components", icon: "S" },
  { name: "Git", icon: "G" },
  { name: "Figma", icon: "F" },
  { name: "Firebase", icon: "F" },
  { name: "GraphQL", icon: "G" },
  { name: "WebGL", icon: "W" },
  { name: "Framer Motion", icon: "F" },
]

const methodologies = [
  "Responsive Design",
  "Mobile-First Approach",
  "Component-Based Architecture",
  "RESTful APIs",
  "CI/CD",
  "TDD",
  "Agile",
  "UX Research",
  "Performance Optimization",
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const technicalRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)
  const methodologiesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Technical skills animation
      const skillBars = technicalRef.current?.querySelectorAll(".skill-bar")
      if (skillBars) {
        skillBars.forEach((bar, index) => {
          gsap.fromTo(
            bar,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: technicalRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          )

          const progressBar = bar.querySelector(".progress-fill")
          const width = progressBar?.getAttribute("data-width")
          if (progressBar && width) {
            gsap.fromTo(
              progressBar,
              { width: "0%" },
              {
                width: `${width}%`,
                duration: 1.5,
                delay: index * 0.1 + 0.3,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: technicalRef.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            )
          }
        })
      }

      // Tools animation
      const toolCards = toolsRef.current?.querySelectorAll(".tool-card")
      if (toolCards) {
        gsap.fromTo(
          toolCards,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: toolsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Methodologies animation
      const methodologyTags = methodologiesRef.current?.querySelectorAll(".methodology-tag")
      if (methodologyTags) {
        gsap.fromTo(
          methodologyTags,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: methodologiesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div ref={titleRef} className="mb-16">
            <MainTitle title="Skills & Technologies" ref={titleRef} />
          </div>

          <div className="grid text-white lg:grid-cols-2 gap-8 lg:gap-12 bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a]/60 rounded-lg p-8">
            {/* Technical Proficiency */}
            <div ref={technicalRef} className="">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-6 w-1 bg-white"></div>
                  <h3 className="text-xl font-bold">Technical Proficiency</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Years of dedicated practice and real-world projects have sharpened my
                  technical skills. Each percentage represents my confidence and experience level
                  with these technologies.
                </p>
              </div>

              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="skill-bar">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div
                        className="progress-fill h-full bg-white rounded-full transition-all duration-300"
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div ref={toolsRef} className="">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-6 w-1 bg-white"></div>
                  <h3 className="text-xl font-bold">Tools & Technologies</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  My toolkit is constantly expanding as I explore new technologies that enhance
                  user experiences and streamline development workflows. These are my daily
                  companions in crafting digital solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="tool-card bg-black/60 rounded-lg p-4 flex items-center gap-3 hover:bg-[#333333] transition-colors duration-300 cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-[#1a1a1a] rounded flex items-center justify-center font-bold text-sm">
                      {tool.icon}
                    </div>
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

              {/* Methodologies & Approaches */}
              <div ref={methodologiesRef} className="mt-12 bg-gradient-to-r from-black/60 to-black/30 rounded-lg p-8 lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-6 w-1 bg-white"></div>
                  <h3 className="text-xl font-bold">Methodologies & Approaches</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
                  Beyond code, my work is guided by proven methodologies and best practices that
                  ensure scalable, maintainable, and user-centered solutions. These approaches form
                  the foundation of every project I undertake.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {methodologies.map((methodology) => (
                  <span
                    key={methodology}
                    className="methodology-tag bg-[#2a2a2a] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#333333] transition-colors duration-300 cursor-pointer"
                  >
                    {methodology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}