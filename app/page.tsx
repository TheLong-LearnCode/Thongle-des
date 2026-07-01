import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { ExperienceSection } from "./components/experience-section";
import { HeroSection } from "./components/hero-section";
import { Navbar } from "./components/navbar";
import { ProjectsSection } from "./components/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06373B] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
