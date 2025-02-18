import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-16">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}