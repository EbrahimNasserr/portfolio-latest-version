"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Users } from "lucide-react"
import MainTitle from "./shared/main-title/MainTitle"

interface Education {
  id: number
  institution: string
  degree: string
  field: string
  location: string
  period: string
  description: string[]
  achievements?: string[]
  gpa?: string
  status: 'completed' | 'current'
}

interface ClubActivity {
  id: number
  organization: string
  role: string
  location: string
  period: string
  description: string
  achievements: string[]
  logo?: string
  color: string
}

const education: Education[] = [
  {
    id: 1,
    institution: "Thebes Academy",
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    location: "Giza, Egypt",
    period: "2021 – 2025",
    status: "completed",
    description: [
      "Pursuing a degree in Computer Science with a strong focus on software engineering and web development.",
      "Coursework includes Data Structures, Algorithms, Web Development, Database Systems, and Software Engineering.",
      "Actively engaged in coding projects, technical learning, and collaborative academic work.",
    ],
    achievements: [
      "Maintained strong academic performance in core computer science courses",
      "Active participation in university technology initiatives",
      "Recognized for contributions in collaborative student projects",
    ],
  },
  {
    id: 2,
    institution: "Route IT Training Center",
    degree: "Full Stack Diploma",
    field: "Software Development",
    location: "Cairo, Egypt",
    period: "2023",
    status: "completed",
    description: [
      "Completed an intensive Full Stack Development diploma covering front-end and back-end technologies.",
      "Focused on React.js, Next.js, Node.js, MongoDB, and modern state management solutions.",
      "Final project: FreshCart – a dynamic eCommerce application demonstrating real-world implementation of React, Context API, and React Query.",
    ],
    achievements: [
      "Successfully delivered a fully functional eCommerce project as diploma capstone",
      "Strengthened expertise in responsive design and API integration",
    ],
  },
]

const clubActivities: ClubActivity[] = [
  {
    id: 1,
    organization: "Google Developer Student Clubs (GDSC) – Thebes Academy",
    role: "Frontend Instructor",
    location: "Cairo, Egypt",
    period: "2023 – 2024",
    color: "from-green-500 to-emerald-500",
    description:
      "Designed and delivered structured workshops on HTML, CSS, JavaScript, React, and Next.js, guiding students to build real-world projects and master animations.",
    achievements: [
      "Created and delivered a full front-end development curriculum",
      "Conducted interactive workshops and coding sessions for 100+ students",
      "Provided mentorship and one-on-one guidance to help students complete projects",
    ],
  },
]

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const clubsRef = useRef<HTMLDivElement>(null)

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

      // Education cards animation
      const educationCards = educationRef.current?.querySelectorAll(".education-card")
      if (educationCards) {
        educationCards.forEach((card, index) => {
          gsap.fromTo(
            card,
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
              delay: index * 0.2,
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

      // Club cards animation
      const clubCards = clubsRef.current?.querySelectorAll(".club-card")
      if (clubCards) {
        clubCards.forEach((card, index) => {
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
              delay: index * 0.3,
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <MainTitle title="Education Journey" ref={titleRef} />

          {/* Formal Education */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Formal Education</h3>
            </div>
            
            <div ref={educationRef} className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {education.map((edu, index) => (
                <div key={edu.id} className="education-card">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border border-border/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-foreground mb-2">
                            {edu.degree}
                          </CardTitle>
                          <div className="space-y-2">
                            <div className="text-primary font-semibold text-lg">
                              {edu.institution}
                            </div>
                            <div className="text-muted-foreground font-medium">
                              {edu.field}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                            {edu.gpa && (
                              <div className="flex items-center gap-2">
                                <Badge 
                                  variant="secondary" 
                                  className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                >
                                  GPA: {edu.gpa}
                                </Badge>
                                <Badge 
                                  variant={edu.status === 'current' ? 'default' : 'secondary'}
                                  className={edu.status === 'current' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' : ''}
                                >
                                  {edu.status === 'current' ? 'Current' : 'Completed'}
                                </Badge>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {edu.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                      {edu.achievements && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                              >
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* College Clubs */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">College Clubs</h3>
            </div>
            
            <div ref={clubsRef} className="grid grid-cols-1">
              {clubActivities.map((club, index) => (
                <div key={club.id} className="club-card">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${club.color}`}></div>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${club.color} flex items-center justify-center text-white font-bold text-lg`}>
                          {club.organization.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-foreground mb-1">
                            {club.organization}
                          </CardTitle>
                          <div className="text-primary font-semibold mb-2">
                            {club.role}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{club.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{club.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {club.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Contributions:</h4>
                        <ul className="space-y-1">
                          {club.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
