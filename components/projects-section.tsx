// "use client"

// import { useEffect, useRef } from "react"
// import Image from "next/image"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ExternalLink, Github } from "lucide-react"
// import Link from "next/link"
// import SectionHeading from "./section-heading"

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
//     image: "/placeholder.svg?height=400&width=600",
//     tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
//   {
//     title: "Task Management App",
//     description: "A collaborative task management application with real-time updates and team collaboration features.",
//     image: "/placeholder.svg?height=400&width=600",
//     tags: ["React", "Node.js", "Socket.io", "MongoDB"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
//   {
//     title: "Finance Dashboard",
//     description: "An interactive dashboard for tracking personal finances, investments, and spending patterns.",
//     image: "/placeholder.svg?height=400&width=600",
//     tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
//   {
//     title: "AI Content Generator",
//     description: "A tool that leverages AI to generate marketing content, blog posts, and social media updates.",
//     image: "/placeholder.svg?height=400&width=600",
//     tags: ["React", "Python", "FastAPI", "OpenAI"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
// ]

// export default function ProjectsSection() {
//   const sectionRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fade-in")

//             const elements = entry.target.querySelectorAll(".animate-on-scroll")
//             elements.forEach((el) => el.classList.add("slide-in"))
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current)
//       }
//     }
//   }, [])

//   return (
//     <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative">
//       {/* Decorative typography */}
//       <div className="absolute right-[5%] top-[30%] text-[15vw] font-black opacity-[0.02] select-none pointer-events-none tracking-tighter rotate-90">
//         WORK
//       </div>

//       <div className="max-w-6xl mx-auto">
//         <SectionHeading
//           title="Featured"
//           highlight="Projects"
//           subtitle="Here are some of my recent projects. Each one was carefully crafted to solve specific problems and showcase different skills."
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card
//               key={project.title}
//               className="animate-on-scroll overflow-hidden border-secondary/50 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 relative"
//               style={{ animationDelay: `${0.1 * (index + 2)}s` }}
//             >
//               {/* Project number typography */}
//               <div className="absolute -right-4 -top-4 text-6xl font-black text-primary/10 z-10">
//                 {(index + 1).toString().padStart(2, "0")}
//               </div>

//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               </div>
//               <CardHeader>
//                 <CardTitle className="text-xl font-mono tracking-tight">{project.title}</CardTitle>
//                 <CardDescription>{project.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <Badge key={tag} variant="secondary">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <Button variant="ghost" size="sm" asChild>
//                   <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                     <Github className="mr-2 h-4 w-4" />
//                     Code
//                   </Link>
//                 </Button>
//                 <Button variant="outline" size="sm" asChild>
//                   <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                     <ExternalLink className="mr-2 h-4 w-4" />
//                     Live Demo
//                   </Link>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
