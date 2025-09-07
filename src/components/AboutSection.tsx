import {
  ArrowRight,
  BookOpen,
  Code,
  FileCode2,
  Laptop,
  Megaphone,
  SearchCheck,
  Server,
  Trophy,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import cPlusLogo from "../assets/logos/c.svg";
import cSharpLogo from "../assets/logos/csharp.svg.png";
import cssLogo from "../assets/logos/css.svg";

import dotnetLogo from "../assets/logos/dotnet.svg";
import gitLogo from "../assets/logos/git.svg";
import htmlLogo from "../assets/logos/html.svg";
import javaLogo from "../assets/logos/java.svg";
import jsLogo from "../assets/logos/javascript.svg";
import mongoLogo from "../assets/logos/mongo.svg";
import nodeLogo from "../assets/logos/node.svg";
import pythonLogo from "../assets/logos/python.svg";
import reactLogo from "../assets/logos/react.svg";
import sqlLogo from "../assets/logos/sql.svg";
import tailwindLogo from "../assets/logos/tailwind.svg";
import tsLogo from "../assets/logos/typescript.svg";
import SkillsSection from "./SkillsSection";
const skills = [
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "TypeScript", logo: tsLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "CSS", logo: cssLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "Git", logo: gitLogo },
  { name: "Java", logo: javaLogo },
  { name: "Python", logo: pythonLogo },
  { name: "C#", logo: cSharpLogo },
  { name: "C++", logo: cPlusLogo },
  { name: "SQL", logo: sqlLogo },
  { name: ".NET", logo: dotnetLogo },
  { name: "MongoDB", logo: mongoLogo },
];

const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className="py-4 md:py-2 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />

      <div className="section-container relative z-10">
        <h2
          className="section-heading font-as  uppercase"
          style={{ animationPlayState: isVisible ? "running" : "paused" }}
        >
          About Me
        </h2>
        <p
          className="section-subheading font-montserratLight text-lg text-muted-foreground text-center "
          style={{ animationPlayState: isVisible ? "running" : "paused" }}
        >
          Get to know my background, skills, and what drives me as a developer.
        </p>

        <div className="grid grid-cols-1  gap-10 mt-12">
          {/* Bio */}
          <div>
            <h3
              className="text-2xl font-semibold mb-4 animate-on-scroll"
              style={{ animationPlayState: isVisible ? "running" : "paused" }}
            >
              Who I Am
            </h3>
            <p
              style={{
                animationPlayState: isVisible ? "running" : "paused",
                transitionDelay: "0.2s",
              }}
              className={`animate-on-scroll ${
                isVisible ? "visible" : ""
              } text-section mb-4 text-lg font-montserratLight fade-in-slow`}
            >
              I’m a Computer Science graduate from UBB with a strong focus on
              building scalable, high-performance web and mobile applications. I
              specialize in React, TypeScript, and Node.js, crafting seamless
              digital experiences that balance clean design with technical
              efficiency.
            </p>
            <p
              style={{
                animationPlayState: isVisible ? "running" : "paused",
                transitionDelay: "0.4s",
              }}
              className={`animate-on-scroll ${
                isVisible ? "visible" : ""
              } text-section mb-4 text-lg font-montserratLight fade-in-slow`}
            >
              Beyond full-stack development, I enjoy creating websites for
              businesses with SEO, performance, and conversion in mind—ensuring
              not just functionality, but measurable results.
            </p>
            <p
              style={{
                animationPlayState: isVisible ? "running" : "paused",
                transitionDelay: "0.6s",
              }}
              className={`animate-on-scroll ${
                isVisible ? "visible" : ""
              } text-section mb-4 text-lg font-montserratLight fade-in-slow`}
            >
              My academic background provided a solid foundation in algorithms,
              data structures, and software engineering principles, while
              hands-on projects have deepened my expertise in modern web
              technologies.
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="flex items-center text-lg font-semibold text-primary hover:text-blue-600 transition-colors relative py-2 group animate-fade-in-slow"
            >
              Let's Connect
              <ArrowRight className="w-5 h-5 ml-2" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </button>
          </div>

          {/* Skills */}
          <SkillsSection />
        </div>

        {/* Education and Achievements */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold font-as mb-6 text-center fade-in-slow animate-on-scroll">
            Education & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "BSc in Computer Science",
                description:
                  "Babes-Bolyai University, Cluj-Napoca, graduated July 2025",
              },
              {
                icon: Trophy,
                title: "CAE Certification",
                description: "Cambridge English: Advanced, C2 Level",
              },
              {
                icon: BookOpen,
                title: "Meta Frontend Developer Course",
                description:
                  "Completed a series of intermediate level courses in frontend development from Meta",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="glass-panel text p-6 rounded-xl animate-on-scroll fade-in-slow"
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary text-white">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-medium font-montserrat">{item.title}</h4>
                </div>
                <p className="text-sm font-montserratLight font-bold ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center font-as fade-in-slow animate-on-scroll">
            What I Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Laptop,
                title: "Frontend Development",
                description:
                  "Creating responsive, accessible, and performant user interfaces with React, TypeScript, and modern CSS.",
              },
              {
                icon: Server,
                title: "Backend Development",
                description:
                  "Building robust APIs and server-side applications with Node.js, Express, and MongoDB.",
              },
              {
                icon: Code,
                title: "Full Stack Integration",
                description:
                  "Connecting frontend and backend systems to create cohesive, end-to-end solutions.",
              },
              {
                icon: SearchCheck,
                title: "SEO Engineering",
                description:
                  "Optimizing websites for search engines to improve visibility and ranking.",
              },
              {
                icon: Megaphone,
                title: "Google Search Ads Marketing",
                description:
                  "Creating and managing Google Search Ads campaigns to drive traffic and conversions.",
              },
              {
                icon: FileCode2,
                title: "WordPress Development",
                description:
                  "Designing and developing custom WordPress sites with themes and plugins for clients.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-border fade-in-slow animate-on-scroll "
                style={{ transitionDelay: `${0.1 + index * 0.2}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary w-fit mb-4">
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-medium mb-2 font-montserrat">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm font-montserratLight font-bold">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
