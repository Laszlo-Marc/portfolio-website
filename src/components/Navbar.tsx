import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoothly scroll to section when nav item is clicked
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-center h-16 md:h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 items-center">
              {["about", "projects", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors relative py-2 group"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Section */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background/95 backdrop-blur-md shadow-sm border-t border-border"
        >
          <ul className="py-4 px-6 space-y-4">
            {["about", "projects", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
