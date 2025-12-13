import About from "@/components/about"
import ContactSection from "@/components/hero/contact/ContactSection"
import { Hero } from "@/components/hero/hero"
import { ProjectsSection } from "@/components/projects/projects-section"
import SkillsSection from "@/components/SkillsSection"
import TechCarousel from "@/components/TechSection"

export default function Home() {
    return (
        <>
            <Hero />
            <TechCarousel />
            <About />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}
