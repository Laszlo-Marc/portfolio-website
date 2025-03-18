import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import dentalImage from "../assets/images/dental-app.png";
import hangmanImage from "../assets/images/hangman.png";
import insta from "../assets/images/insta.png";
import javaLogo from "../assets/images/java.webp";
import portfolio from "../assets/images/portfolio.png";
import ubb from "../assets/images/ubb-cluj.png";
const projects = [
  {
    title: "AI-Powered Dental App",
    description:
      "Developed the frontend of a web application with an AI-powered dental diagnosis system for detecting dental pathologies from X-ray images.",
    image: dentalImage,
    tags: ["TypeScript", "React", "SupaBase", "Flask"],
    githubUrl: "https://github.com/Laszlo-Marc/dental-app",
  },
  {
    title: "Hangman Game in React",
    description:
      "The classic hangman word-guessing game, featuring a responsive design and custom animations.",
    image: hangmanImage,
    tags: ["React", "Vite", "TypeScript", "JavaScript"],
    githubUrl: "https://github.com/Laszlo-Marc/hangman-react-ts",
    liveUrl: "https://hangman-react-ts-gamma.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "This website, built with React, Vite, TypeScript and Tailwind CSS, showcases my projects and skills.",
    image: portfolio,
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    githubUrl: "https://github.com/Laszlo-Marc/portfolio-website",
  },
  {
    title: "University Work",
    description:
      "A collection of all my assignments and projects from university.",
    image: ubb,
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Java",
      "Python",
      "C++",
      "SQL",
      ".NET",
      "JavaScript",
      "HTML",
      "CSS",
      "C#",
      "Assembly",
    ],
    githubUrl: "https://github.com/Laszlo-Marc/university_work",
  },
  {
    title: "Instagram Home Page Clone",
    description:
      "A clone of Instagram's home page made with HTML, CSS and JavaScript.",
    image: insta,
    tags: ["HTML & CSS", "JavaScript"],
    githubUrl: "https://github.com/Laszlo-Marc/intagram_homepage_frontend",
    liveUrl: "https://intagram-homepage-frontend.vercel.app/",
  },

  {
    title: "Toy Language Interpreter",
    description:
      "Developed a custom interpreter supporting conditionals, loops, concurrency, and data types.",
    image: javaLogo,
    tags: ["Java"],
    githubUrl: "https://github.com/Laszlo-Marc/Toy-Language-Interpreter",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-60 z-0" />

      <div className="section-container relative z-10">
        <h2
          className="section-heading font-as uppercase"
          style={{ animationPlayState: isVisible ? "running" : "paused" }}
        >
          My Projects
        </h2>
        <p
          className="section-subheading"
          style={{ animationPlayState: isVisible ? "running" : "paused" }}
        >
          Explore a selection of my recent work showcasing my technical skills
          and problem-solving abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-panel rounded-xl overflow-hidden border border-white/30 group hover:shadow-lg transition-all duration-300 animate-on-scroll ${
                isVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 gap-1"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 gap-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} />
                          <span>Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-normal text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Laszlo-Marc"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-primary hover:text-primary/80 transition-colors animate-on-scroll ${
              isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <span className="font-medium">View more projects on GitHub</span>
            <ArrowUpRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
