import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-8 bg-[#131b2e] py-20 px-8">
      <div className="text-lg font-bold text-white font-headline tracking-tighter">
        &lt;SR/&gt;
      </div>

      <div className="flex flex-wrap justify-center gap-12 font-mono text-xs uppercase tracking-widest text-slate-500">
        <Link
          href="https://github.com/seergiorob"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary underline underline-offset-4 transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/sergio-robledo-9b1a33187/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary underline underline-offset-4 transition-colors"
        >
          LinkedIn
        </Link>
        <Link
          href="https://x.com/seergiorobledo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary underline underline-offset-4 transition-colors"
        >
          Twitter
        </Link>
        <Link
          href="mailto:seergiorobledo@gmail.com"
          className="hover:text-primary underline underline-offset-4 transition-colors"
        >
          Email
        </Link>
      </div>

      <div className="font-mono text-xs uppercase tracking-widest text-slate-500">
        © 2026 Sergio Robledo. Built for the bold.
      </div>
    </footer>
  )
}
