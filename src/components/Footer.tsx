import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary/30 border-t border-border relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40 z-0" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Marc Laszlo. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-border bg-background hover:bg-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
