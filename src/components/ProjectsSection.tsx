
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A Kanban-style project management tool with drag-and-drop functionality, task assignments, and progress tracking.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather application showing forecasts, historical data, and interactive maps with weather overlays.",
    image: "/placeholder.svg",
    tags: ["React", "Chart.js", "API Integration", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Personal Finance Tracker",
    description: "An application to track expenses, create budgets, and visualize spending patterns with interactive charts.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "Firebase", "Authentication", "D3.js"],
    githubUrl: "#",
    liveUrl: "#"
  }
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
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-60 z-0" />
      
      <div className="section-container relative z-10">
        <h2 className="section-heading" style={{ animationPlayState: isVisible ? 'running' : 'paused' }}>
          My Projects
        </h2>
        <p className="section-subheading" style={{ animationPlayState: isVisible ? 'running' : 'paused' }}>
          Explore a selection of my recent work showcasing my technical skills and problem-solving abilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-panel rounded-xl overflow-hidden border border-white/30 group hover:shadow-lg transition-all duration-300 animate-on-scroll ${isVisible ? 'visible' : ''}`}
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
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="h-8 gap-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="font-normal text-xs">
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
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center text-primary hover:text-primary/80 transition-colors animate-on-scroll ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.5s' }}
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
