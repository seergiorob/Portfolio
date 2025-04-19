"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "./section-heading"
import { Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Mercado Libre",
    period: "Jul 2023 - Present",
    description: [
      "Building and maintaining features to match business and product team goals.",
      "Ensured frontend tools and services were efficient, effective, and secure for users.",
      "Working on the redesign of a Strategy Shipping Project, that improves the long term goals of the shipping team.",
      "Building a new web tool from scratch for the Tactic Shipping Project, that improves the short term goals of the shipping team",
      "Building team knowledge about new tools, IA and technology.",
    ],
    tags: ["TypeScript", "JavaScript", "React", "SSR", "Frontend Development"],
  },
  {
    title: "Frontend Software Developer",
    company: "Mercado Libre",
    period: "Jul 2022 - 2023",
    description: [
      "Played an active role in designing and maintaining features to match business and product team goals.",
      "Ensured frontend tools and services were efficient, effective, and secure for users.",
      "Worked on the Billing Project, introducing new features and updating a web tool for handling bills and overseeing Mercado Envíos operations.",
      "Built a new web tool from scratch for the Shipping Project, using a mathematical approach to improve shipping efficiency.",
      "Primarily used TypeScript, JavaScript, and Server Side Rendering (SSR).",
    ],
    tags: ["TypeScript", "JavaScript", "React", "SSR", "Frontend Development"],
  },
  {
    title: "Bootcamp Teacher",
    company: "MindHub LA",
    period: "Jan 2022 - Jul 2022",
    description: [
      "Served as an instructor in a technology bootcamp, specializing in the MERN stack (MongoDB, Express.js, React, and Node.js).",
      "Conducted practical sessions, code reviews, and workshops to ensure students grasped complex technical concepts.",
      "Provided one-on-one guidance, mentorship, and support to students, fostering a positive learning environment.",
      "Stayed updated with the latest trends and best practices in the MERN stack to deliver top-tier instruction.",
      "Ensured students were well-equipped with the necessary skills to transition into the tech industry successfully.",
    ],
    tags: ["MERN Stack", "Teaching", "Mentorship", "Code Reviews", "Technical Training"],
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")

            const elements = entry.target.querySelectorAll(".animate-on-scroll")
            elements.forEach((el) => el.classList.add("slide-in"))
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative">
     

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Work"
          highlight="Experience"
          subtitle="My professional journey and the roles that have shaped my career"
        />

        <div className="space-y-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:-translate-x-1/2 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="animate-on-scroll relative"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 -translate-y-1/2 hidden md:block"></div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                <Card className="border-secondary/50 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-mono tracking-tight">{experience.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {experience.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {experience.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-foreground/80">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
