"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent } from "@/components/ui/card"

interface Skill {
  name: string
  icon: string
  category: string
  level: number
}

const skills: Skill[] = [
  { name: "React", icon: "⚛️", category: "Frontend", level: 95 },
  { name: "Next.js", icon: "▲", category: "Frontend", level: 90 },
  { name: "Vue.js", icon: "💚", category: "Frontend", level: 85 },
  { name: "TypeScript", icon: "🔷", category: "Language", level: 88 },
  { name: "Node.js", icon: "🟢", category: "Backend", level: 92 },
  { name: "MongoDB", icon: "🍃", category: "Database", level: 87 },
  { name: "GSAP", icon: "🎭", category: "Animation", level: 80 },
  { name: "Framer Motion", icon: "🎬", category: "Animation", level: 85 },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling", level: 93 },
  { name: "Redux", icon: "🔄", category: "State Management", level: 88 },
  { name: "Express.js", icon: "🚀", category: "Backend", level: 90 },
  { name: "Git", icon: "📝", category: "Tools", level: 92 },
]

const categories = ["Frontend", "Backend", "Database", "Animation", "Styling", "State Management", "Language", "Tools"]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const skillsGridRef = useRef<HTMLDivElement>(null)

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

      // Skills animation
      const skillCards = skillsGridRef.current?.querySelectorAll(".skill-card")
      if (skillCards) {
        gsap.fromTo(
          skillCards,
          {
            opacity: 0,
            y: 30,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: skillsGridRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Progress bars animation
      const progressBars = skillsGridRef.current?.querySelectorAll(".progress-bar")
      if (progressBars) {
        progressBars.forEach((bar) => {
          const width = bar.getAttribute("data-width")
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${width}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Skills & Technologies
          </h2>

          <div ref={skillsGridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="skill-card group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{skill.category}</p>

                  {/* Progress bar */}
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div
                      className="progress-bar bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                      data-width={skill.level}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Categories overview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300"
              >
                <div className="text-sm font-medium text-muted-foreground">{category}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {skills.filter((skill) => skill.category === category).length} skills
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
