import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const nameTextFirstPart = "Hi, I am";
  const nameTextSecondPart = "Marc Laszlo";
  const nameLettersFirstPart = nameTextFirstPart.split("");
  const nameLettersSecondPart = nameTextSecondPart.split("");

  // Animate each character in the name
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Background animations
  const backgroundVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.4, 0.5, 0.4],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  // Interactive hover variants for buttons
  const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center pb-20 pt-28 overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0" />

      {/* Animated gradient background */}
      <motion.div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl z-0 animate-pulse-bg" />

      {/* Secondary animated gradient */}
      <motion.div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl z-0 animate-parallax-move" />

      <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          className="inline-flex items-center mb-6 bg-primary/10 px-3 py-1 rounded-full text-sm text-primary font-medium border border-primary/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Available for opportunities
        </motion.div>

        {/* Name with letter-by-letter animation */}
        <div className="text-center text-4xl md:text-5xl lg:text-6xl font-bold font-as uppercase mb-4 tracking-tight flex flex-wrap justify-center">
          {nameLettersFirstPart.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={
                letter === "M"
                  ? "text-primary ml-2"
                  : index > nameTextFirstPart.indexOf("M")
                  ? "text-decoration-white"
                  : ""
              }
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
        <div className="text-center text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-as mb-4 tracking-tight flex flex-wrap justify-center">
          {nameLettersSecondPart.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={
                letter === "M"
                  ? "text-primary ml-2"
                  : index > nameTextSecondPart.indexOf("M")
                  ? "text-primary"
                  : ""
              }
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-montserratBold uppercase font-medium text-center text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Fullstack Developer & CS Student
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground max-w-2xl mb-12 font-montserratLight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build exceptional digital experiences with clean, efficient code.
          Specializing in modern frontend frameworks with robust backend
          integration.
        </motion.p>

        {/* Improved mobile button layout */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
            className="w-full sm:w-auto"
          >
            <a href="/Resume - Marc Laszlo Lucian.pdf" target="_blank">
              <Button
                size="lg"
                className="relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10">View My Resume</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.span
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group w-full sm:w-auto"
            >
              Contact Me
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
