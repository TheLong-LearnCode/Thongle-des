import { AboutSection } from "./components/layout/about-section";
import { ContactSection } from "./components/layout/contact-section";
import { ExperienceSection } from "./components/layout/experience-section";
import { HeroSection } from "./components/layout/hero-section";
import { Navbar } from "./components/layout/navbar";
import { ProjectsSection } from "./components/layout/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070511] text-white">
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
