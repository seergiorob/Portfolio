const interests = [
  "AI + Software Development",
  "Developer Experience (DX)",
  "Product-driven Engineering",
  "System Design & Workflows",
]

const values = [
  { icon: "bolt", label: "Fast Learner" },
  { icon: "groups", label: "Team Player" },
  { icon: "psychology", label: "Problem Solver" },
  { icon: "code", label: "Clean Code" },
]

export default function AboutSection() {
  return (
    <section id="about" className="px-8 py-24 bg-[#131b2e]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        {/* Text */}
        <div>
          <h2 className="text-5xl font-headline font-bold tracking-tighter uppercase mb-12 text-white">
            The Philosophy
          </h2>
          <div className="space-y-6 text-lg text-[#bcc9cd] font-light leading-relaxed">
            <p>
              I am a{" "}
              <span className="text-white font-semibold">Frontend Developer</span> focused on
              building scalable applications and improving how software is designed and developed —
              from the first spec to the final deployment.
            </p>
            <p>
              Recently, I&apos;ve been working deeply with{" "}
              <span className="text-white font-semibold">Spec-Driven Development</span> and{" "}
              <span className="text-white font-semibold">AI-augmented workflows</span>, exploring
              how structured specifications and multi-agent systems can transform the development
              process. I&apos;ve been designing and collaborating on Claude Code sub-agent
              orchestration, custom skills, and knowledge-sharing systems across teams.
            </p>
            <p>
              My focus is shifting from just writing code to{" "}
              <span className="text-white font-semibold">
                designing systems that enable teams to build better software faster
              </span>
              , with more consistency and clarity.
            </p>
            <p>
              Alongside this, I&apos;m studying{" "}
              <span className="text-white font-semibold">digital product management</span> —
              strengthening my understanding of product strategy, user-centered problem solving, and
              how to connect technical decisions with real product impact.
            </p>
          </div>

          {/* Interests */}
          {/* <div className="mt-10">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#869397] mb-4">
              Currently Interested In
            </div>
            <div className="flex flex-col gap-2">
              {interests.map((item) => (
                <div key={item} className="flex items-center gap-3 text-[#bcc9cd] font-light">
                  <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-2 gap-4 self-start">
          {values.map(({ icon, label }) => (
            <div
              key={label}
              className="bg-[#0b1326] p-8 flex flex-col justify-between aspect-square"
            >
              <span className="material-symbols-outlined text-primary text-4xl md:text-7xl">
                {icon}
              </span>
              <div className="font-headline font-bold text-xl uppercase tracking-tighter text-white">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
