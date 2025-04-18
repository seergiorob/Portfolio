"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import SectionHeading from "./section-heading"

export default function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative typography */}
      <div className="absolute left-[5%] bottom-[10%] text-[15vw] font-black opacity-[0.02] select-none pointer-events-none tracking-tighter">
        HELLO
      </div>

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind or want to discuss potential opportunities? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="animate-on-scroll stagger-2 border-secondary/50 relative overflow-hidden">
              {/* Decorative @ symbol */}
              <div className="absolute -right-10 -bottom-10 text-[200px] font-black text-primary/5 select-none pointer-events-none">
                @
              </div>

              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-2xl">Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="bg-secondary/30" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" className="bg-secondary/30" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" className="bg-secondary/30" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="bg-secondary/30 min-h-32" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="animate-on-scroll stagger-3">
            <Card className="border-secondary/50 h-full relative overflow-hidden">
              {/* Decorative typography */}
              <div className="absolute -right-10 -top-10 text-8xl font-black text-primary/5 select-none pointer-events-none">
                &lt;/&gt;
              </div>

              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-xl">Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-foreground/70 font-mono text-sm">sergio.robledo@example.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-foreground/70 font-mono text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-foreground/70">San Francisco, California</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
