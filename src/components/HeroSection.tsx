import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center pb-20 pt-28 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0" />

      {/* Radial gradient accent */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl opacity-40 z-0 animate-pulse" />

      <div className="container relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Tag line */}
        <div className="inline-flex items-center mb-6 bg-primary/10 px-3 py-1 rounded-full text-sm text-primary font-medium opacity-0 animate-fade-in border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Available for opportunities
        </div>

        {/* Name and title */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 tracking-tight opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I'm <span className="text-primary">Marc Laszlo</span>
        </h1>

        <h2
          className="text-xl md:text-2xl lg:text-3xl font-medium text-center text-muted-foreground mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Fullstack Developer & CS Student
        </h2>

        {/* Description */}
        <p
          className="text-center text-muted-foreground max-w-2xl mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          I build exceptional digital experiences with clean, efficient code.
          Specializing in modern frontend frameworks with robust backend
          integration. Currently pursuing my Computer Science degree and seeking
          opportunities.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            size="lg"
            className="group transition-all duration-300 hover:translate-y-[-2px]"
            onClick={scrollToProjects}
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="transition-all duration-300 hover:translate-y-[-2px]"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
