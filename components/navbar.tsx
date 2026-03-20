"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Work", href: "#experience", section: "experience" },
  { name: "Blog", href: "/blog", section: null },
  { name: "About", href: "#about", section: "about" },
  { name: "Contact", href: "#contact", section: "contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Highlight nav item based on which section is in view
  useEffect(() => {
    const sectionIds = navItems.map((i) => i.section).filter(Boolean) as string[]
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0b1326]/80 backdrop-blur-xl shadow-md" : "bg-[#0b1326]/70 backdrop-blur-xl"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-6">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white font-headline">
          &lt;SR/&gt;
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => {
            const href = item.section && !isHome ? `/${item.href}` : item.href
            const isActive = item.section
              ? activeSection === item.section
              : pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={href}
                onClick={() => item.section && setActiveSection(item.section)}
                className={`font-headline uppercase tracking-tighter font-bold transition-colors text-sm ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <a
          href="https://drive.google.com/file/d/1-EsyIGDqw-zvAQsONtGNfaivH6GcHMBc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#06b6d4] text-[#003640] px-6 py-2 font-headline font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-300"
        >
          CV
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b1326]/95 backdrop-blur-xl border-t border-[#3d494c]">
          <div className="px-8 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.section && !isHome ? `/${item.href}` : item.href}
                className="block font-headline uppercase tracking-tighter font-bold text-slate-400 hover:text-white transition-colors"
                onClick={() => {
                  if (item.section) setActiveSection(item.section)
                  setMobileMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1-EsyIGDqw-zvAQsONtGNfaivH6GcHMBc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-[#06b6d4] text-[#003640] px-6 py-2 font-headline font-bold uppercase tracking-widest text-sm text-center"
            >
              CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
