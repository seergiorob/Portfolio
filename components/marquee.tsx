export default function Marquee() {
  const items =
    "Product-driven Engineering • TypeScript • System Architecture • Spec-Driven Development • AI + Software Development • Developer Experience (DX) • React • Node.js • SSR • Frontend Development • JavaScript • UI/UX • Problem Solving • System Architecture • "

  return (
    <div className="bg-primary py-4 overflow-hidden whitespace-nowrap mb-0 -rotate-1 scale-105 relative z-10">
      <div className="flex animate-marquee font-headline font-black text-2xl text-[#003640] uppercase tracking-tighter">
        <span className="pr-12">{items}</span>
        <span className="pr-12">{items}</span>
      </div>
    </div>
  )
}
