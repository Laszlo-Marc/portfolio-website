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
const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section is visible
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
    <div ref={sectionRef}>
      <h3 className="text-xl font-semibold font-as mb-4 text-center fade-in-slow animate-on-scroll">
        My Skills
      </h3>

      {/* Desktop Grid */}
      <div
        className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-6 animate-on-scroll fade-in-slow"
        style={{
          animationDelay: "0.2", // Slight delay for each card
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center bg-secondary p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ${
              isVisible ? `animate-fade-in-left` : "opacity-0" // Make it invisible initially
            }`}
            style={{
              animationDelay: `${0.5 + index * 0.3}s`, // Slight delay for each card
            }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <span className="mt-2 text-sm font-medium font-montserrat">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      {/* Mobile Carousel */}
      <div
        ref={sectionRef}
        className="md:hidden flex gap-6 overflow-x-auto scrollbar-hide py-4"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-secondary p-4 rounded-xl shadow-md min-w-[100px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
