"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

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

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative typography background */}
      <div className="fixed inset-0 -z-10 overflow-hidden select-none pointer-events-none">
        <div className="absolute top-[10%] left-0 w-full text-center">
          <span className="text-[15vw] font-black tracking-tighter text-primary/[0.03] blur-sm">CODE</span>
        </div>
        <div className="absolute top-[40%] left-0 w-full text-center">
          <span className="text-[15vw] font-black tracking-tighter text-primary/[0.03] blur-sm">DEV</span>
        </div>
        <div className="absolute top-[70%] left-0 w-full text-center">
          <span className="text-[15vw] font-black tracking-tighter text-primary/[0.03] blur-sm">WEB</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="animate-on-scroll stagger-1 text-primary font-medium mb-4 tracking-widest uppercase">
          Hello, my name is
        </p>
        <h1 className="animate-on-scroll stagger-2 text-4xl sm:text-5xl md:text-6xl font-bold mb-6 relative">
          <span className="relative inline-block">
            <span className="relative z-10">Sergio Robledo</span>
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/30"></span>
          </span>
        </h1>
        <div className="animate-on-scroll stagger-3 mb-8 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 tracking-tight">
            Software Engineer at <span className="text-primary italic">Mercado Libre</span>
          </h2>
          <p className="text-lg mt-2 text-foreground/70">TypeScript | JavaScript | React JS | Next JS | Node JS</p>
          <div className="absolute -right-4 top-0 text-6xl font-black text-primary/10 -rotate-12">&lt;/&gt;</div>
        </div>
        <p className="animate-on-scroll stagger-4 text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
          A frontend developer with a passion for creating visually appealing and user-friendly web applications. I'm
          constantly striving to push the boundaries of what is possible with code.
        </p>
        <div className="animate-on-scroll stagger-5 flex flex-col sm:flex-row items-final justify-between gap-4 mb-12">
          {/* <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button> */}
          <div></div>
          <Button  size="lg">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="animate-on-scroll stagger-5 flex items-center justify-center space-x-6">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 text-foreground/70 hover:text-primary transition-colors" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
