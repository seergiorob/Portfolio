const experiences = [
  {
    period: "2023 — PRES",
    title: "Software Engineer",
    company: "Mercado Libre",
    tag: "Full Time",
  },
  {
    period: "2022 — 2023",
    title: "Frontend Software Developer",
    company: "Mercado Libre",
    tag: "Professional Growth",
  },
  {
    period: "2021 — 2022",
    title: "Bootcamp Teacher",
    company: "MindHub LA",
    tag: "Mentorship",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-8 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline mb-20">
          <h2 className="text-6xl font-headline font-extrabold tracking-tighter uppercase text-white">
            Trajectory
          </h2>
          <span className="font-mono text-primary text-sm">02 // HISTORY</span>
        </div>

        <div>
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group py-12 border-t border-[#3d494c] hover:bg-[#171f33] transition-colors px-4 ${
                index === experiences.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 font-mono text-[#869397] text-sm">
                  {exp.period}
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-3xl font-headline font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-[#bcc9cd] mt-1">{exp.company}</p>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <span className="bg-[#2d3449] px-3 py-1 font-mono text-xs uppercase tracking-widest text-[#bcc9cd]">
                    {exp.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
