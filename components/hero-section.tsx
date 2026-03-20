"use client"

import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="px-8 pt-40 pb-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12">
        {/* Text side */}
        <div className="w-full md:w-2/3">
          <div className="text-primary font-mono text-sm tracking-[0.3em] mb-4 uppercase">
            Engineering the Future
          </div>
          <h1
            className="font-headline font-extrabold leading-[0.85] tracking-tighter uppercase mb-8 text-white"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            Sergio
            <br />
            Robledo
          </h1>
          <p className="text-2xl md:text-3xl font-headline font-light text-[#bcc9cd] max-w-xl border-l-4 border-primary pl-6 mb-10">
            Software Engineer at{" "}
            <span className="text-white font-bold">Mercado Libre</span>.
            Building robust frontend ecosystems and high-performance applications.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-primary text-[#003640] px-8 py-4 font-headline font-black uppercase tracking-widest text-sm hover:bg-[#06b6d4] transition-colors duration-300"
          >
            Start a Project
          </Link>
        </div>

        {/* Photo side */}
        <div className="w-full md:w-1/3 bg-[#131b2e] p-2 flex-shrink-0">
          <Image
            src="/images/profile.jpg"
            alt="Sergio Robledo"
            width={480}
            height={640}
            className="grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[3/4]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
