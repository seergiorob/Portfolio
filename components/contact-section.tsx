"use client"

import { useForm, ValidationError } from "@formspree/react"
import { CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xlezwjwj")

  return (
    <section id="contact" className="px-8 py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32">
        {/* Left: heading + info */}
        <div>
          <h2 className="text-7xl font-headline font-black tracking-tighter uppercase mb-8 leading-none text-white">
            Start a<br />
            <span className="text-primary">Project</span>
          </h2>
          <p className="text-xl text-[#bcc9cd] mb-12">
            I&apos;m currently available for selective freelance opportunities and speaking
            engagements regarding frontend architecture.
          </p>
          <div className="space-y-6 font-headline font-bold text-2xl uppercase tracking-tighter text-white">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">mail</span>
              seergiorobledo@gmail.com
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              Córdoba, Argentina
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-[#131b2e] p-12">
          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-10">
              <CheckCircle className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tighter text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-[#bcc9cd]">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-[0.2em] text-[#869397]">
                  Your Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full bg-[#2d3449] border-0 border-b-2 border-[#3d494c] focus:border-primary focus:outline-none px-0 py-4 font-headline text-lg text-white placeholder:text-[#869397]/50 transition-colors"
                />
                <ValidationError prefix="Name" field="firstName" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-[0.2em] text-[#869397]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[#2d3449] border-0 border-b-2 border-[#3d494c] focus:border-primary focus:outline-none px-0 py-4 font-headline text-lg text-white placeholder:text-[#869397]/50 transition-colors"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-[0.2em] text-[#869397]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your vision..."
                  rows={4}
                  required
                  className="w-full bg-[#2d3449] border-0 border-b-2 border-[#3d494c] focus:border-primary focus:outline-none px-0 py-4 font-headline text-lg text-white placeholder:text-[#869397]/50 transition-colors resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-6 bg-primary text-[#003640] font-headline font-black text-xl uppercase tracking-widest hover:bg-[#06b6d4] transition-all flex items-center justify-center gap-4 group disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Send Message"}
                {!state.submitting && (
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    north_east
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
