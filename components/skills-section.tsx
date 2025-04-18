// "use client"

// import { useEffect, useRef, useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Code, Layout, Server, Smartphone } from "lucide-react"
// import SectionHeading from "./section-heading"

// const skillCategories = [
//   {
//     id: "frontend",
//     name: "Frontend",
//     icon: <Layout className="h-5 w-5" />,
//     skills: [
//       { name: "TypeScript", level: 90 },
//       { name: "JavaScript", level: 90 },
//       { name: "React", level: 95 },
//       { name: "Next.js", level: 90 },
//       { name: "HTML/CSS", level: 95 },
//       { name: "Tailwind CSS", level: 90 },
//     ],
//   },
//   {
//     id: "backend",
//     name: "Backend",
//     icon: <Server className="h-5 w-5" />,
//     skills: [
//       { name: "Node.js", level: 85 },
//       { name: "Express", level: 80 },
//       { name: "API Rest", level: 85 },
//       { name: "MongoDB", level: 80 },
//       { name: "NPM", level: 90 },
//     ],
//   },
//   {
//     id: "mobile",
//     name: "Mobile",
//     icon: <Smartphone className="h-5 w-5" />,
//     skills: [
//       { name: "React Native", level: 80 },
//       { name: "Mobile UI", level: 85 },
//       { name: "Responsive Design", level: 90 },
//     ],
//   },
//   {
//     id: "other",
//     name: "Other",
//     icon: <Code className="h-5 w-5" />,
//     skills: [
//       { name: "Git/GitHub", level: 90 },
//       { name: "Redux", level: 85 },
//       { name: "Material UI", level: 85 },
//       { name: "Chakra UI", level: 80 },
//       { name: "Jest", level: 75 },
//       { name: "Cypress", level: 70 },
//     ],
//   },
// ]

// export default function SkillsSection() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true)
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
//     <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
//       {/* Decorative typography */}
//       <div className="absolute left-[5%] bottom-[10%] text-[15vw] font-black opacity-[0.02] select-none pointer-events-none tracking-tighter -rotate-12">
//         SKILLS
//       </div>

//       <div className="max-w-6xl mx-auto">
//         <SectionHeading
//           title="My"
//           highlight="Skills"
//           subtitle="Technologies and tools I work with to bring ideas to life"
//         />

//         <div className="relative">
//           {/* Decorative code brackets */}
//           <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 text-6xl font-mono text-primary/20">{`{`}</div>
//           <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 text-6xl font-mono text-primary/20">{`}`}</div>

//           <Tabs defaultValue="frontend" className="animate-on-scroll stagger-1">
//             <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-8">
//               {skillCategories.map((category) => (
//                 <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
//                   {category.icon}
//                   <span className="hidden sm:inline">{category.name}</span>
//                 </TabsTrigger>
//               ))}
//             </TabsList>

//             {skillCategories.map((category) => (
//               <TabsContent key={category.id} value={category.id}>
//                 <Card>
//                   <CardContent className="p-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       {category.skills.map((skill, index) => (
//                         <div key={skill.name} className="space-y-2">
//                           <div className="flex justify-between">
//                             <span className="font-medium font-mono">{skill.name}</span>
//                             <span className="text-primary">{skill.level}%</span>
//                           </div>
//                           <div className="skill-bar">
//                             <div
//                               className="skill-progress"
//                               style={{
//                                 width: isVisible ? `${skill.level}%` : "0%",
//                               }}
//                             ></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </div>
//       </div>
//     </section>
//   )
// }
