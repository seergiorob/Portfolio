import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import TypographicDivider from "@/components/typographic-divider"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <TypographicDivider text="About" />
      <AboutSection />
      <TypographicDivider text="Experience" />
      <ExperienceSection />
      <TypographicDivider text="Contact" />
      <ContactSection />
    </div>
  )
}
