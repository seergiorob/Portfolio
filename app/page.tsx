import HeroSection from "@/components/hero-section"
import Marquee from "@/components/marquee"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ExperienceSection />
      <BlogSection />
      <ContactSection />
    </div>
  )
}
