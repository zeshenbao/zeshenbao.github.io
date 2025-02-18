import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, Atom, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToNext = () => {
    const experienceSection = document.querySelector("#experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen relative">
      {/* Background Image - Using a free nature image from Unsplash */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2560')] 
        bg-cover bg-center brightness-50"
        style={{ height: '100vh' }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-grow flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-lg space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <Atom className="h-8 w-8 md:h-12 md:w-12 text-primary animate-pulse" />
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                    Zeshen Bao
                  </span>
                </h1>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPinIcon className="h-5 w-5" />
                  <span>Stockholm, Sweden</span>
                </div>

                <p className="text-base md:text-lg text-foreground">
                  Engineering Physics student at KTH Royal Institute of Technology,
                  passionate about deep learning, physics, and technology.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  <a href="mailto:zeshen@hotmail.se">
                    <MailIcon className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" asChild className="bg-background/50 backdrop-blur-sm w-full sm:w-auto">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="bg-background/50 backdrop-blur-sm w-full sm:w-auto">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white cursor-pointer drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform" 
          onClick={scrollToNext}
        >
          <ChevronDown className="h-10 w-10 animate-bounce" />
        </div>
      </div>
    </section>
  );
}