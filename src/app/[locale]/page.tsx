import About from "@/components/about"
import { ExperienceSection } from "@/components/ExperienceSection"
import ContactSection from "@/components/hero/contact/ContactSection"
import { Hero } from "@/components/hero/hero"
import SkillsSection from "@/components/SkillsSection"
import TechCarousel from "@/components/TechSection"

export default function Home() {
    return (
        <>
            <Hero />
            <TechCarousel />
            <About />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
        </>
    )
}
