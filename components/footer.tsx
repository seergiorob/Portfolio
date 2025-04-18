import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <div className="text-[20vw] font-black tracking-tighter text-primary/10 -rotate-12 blur-[2px]">SR</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold text-primary tracking-tight">
              <span className="font-mono">SR</span>
            </Link>
            <p className="mt-2 text-sm text-foreground/70 max-w-md">
              Building exceptional digital experiences through clean code and thoughtful design.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com/seergiorob" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/sergio-robledo-9b1a33187/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://x.com/seergiorobledo" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:seergiorobledo@gmail.com">
              <Mail className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 font-mono">
            &copy; {currentYear} <span className="text-primary">Sergio Robledo</span>. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary transition-colors animated-underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors animated-underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
