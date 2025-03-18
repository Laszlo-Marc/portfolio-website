import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.05 },
  }),
};

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center pb-20 pt-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl opacity-40 z-0 animate-pulse" />
      <div className="container relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">
        <div className="inline-flex items-center mb-6 bg-primary/10 px-3 py-1 rounded-full text-sm text-primary font-medium border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Available for opportunities
        </div>

        {/* Name animation */}
        <div className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
          >
            Hi,
          </motion.span>
          <motion.span
            className="block"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={1}
          >
            I'm
          </motion.span>
          <motion.span
            className="block text-primary"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={2}
          >
            Marc Laszlo
          </motion.span>
        </div>

        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-medium text-center text-muted-foreground mb-8"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={3}
        >
          Fullstack Developer & CS Student
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground max-w-2xl mb-12"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={4}
        >
          I build exceptional digital experiences with clean, efficient code.
          Specializing in modern frontend frameworks with robust backend
          integration.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={5}
        >
          <Button size="lg" onClick={scrollToProjects}>
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        custom={6}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
