"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "./section-heading"
import TypographicDivider from "./typographic-divider"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative">
      {/* Decorative typography */}
      <div className="absolute -right-[5%] top-[10%] text-[15vw] font-black opacity-[0.02] select-none pointer-events-none tracking-tighter rotate-90">
        ABOUT
      </div>

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About"
          highlight="Me"
          subtitle="Get to know more about my background and what drives me"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll stagger-1 relative mx-auto md:ml-auto">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-lg overflow-hidden border-2 border-primary/20">
              <Image
                src="/images/profile.jpg"
                alt="Sergio Robledo"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 text-4xl font-black text-primary/10">&lt;SR/&gt;</div>
          </div>

          <div>
            <p className="animate-on-scroll stagger-2 text-lg mb-6 text-foreground/80">
              Hello! I'm <span className="text-primary font-semibold">Sergio</span>, a passionate frontend developer
              with a focus on creating visually appealing and user-friendly web applications. I'm constantly striving to
              push the boundaries of what is possible with code.
            </p>
            <p className="animate-on-scroll stagger-3 text-lg mb-6 text-foreground/80">
              Whether it's implementing cutting-edge technologies or finding new ways to improve the user experience,
              I'm always up for a challenge. I specialize in frontend development with a focus on creating intuitive,
              responsive, and accessible user interfaces.
            </p>
            <p className="animate-on-scroll stagger-4 text-lg mb-8 text-foreground/80">
              You'll have the best of me working on startups or demanding projects. I thrive in environments that
              challenge me to grow and innovate.
            </p>

            <TypographicDivider text="Core Values" className="animate-on-scroll stagger-4 mb-6" />

            <div className="animate-on-scroll stagger-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Problem Solver", "Team Player", "Fast Learner"].map((trait, index) => (
                <Card key={index} className="bg-secondary/30 border-none">
                  <CardContent className="p-4 text-center">
                    <p className="font-medium text-primary">{trait}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
