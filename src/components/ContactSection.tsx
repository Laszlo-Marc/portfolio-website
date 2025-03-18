import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0" />

      <div className="section-container relative z-10">
        <h2
          className="section-heading font-as uppercase"
          style={{ animationPlayState: isVisible ? "running" : "paused" }}
        >
          Get In Touch
        </h2>
        <p
          className="section-subheading"
          style={{ animationPlayState: isVisible ? "running" : "paused" }}
        >
          Feel free to reach out for collaborations, opportunities, or just to
          say hello.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 animate-on-scroll ${
              isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "marc.laszlo22@gmail.com",
                  href: "mailto:marc.laszlo22@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+40772258546",
                  href: "tel:+40772258546",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Cluj-Napoca, Romania",
                  href: null,
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Laszlo-Marc",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/marc-laszlo/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/marc.laszlo/",
                    label: "Instagram",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                    aria-label={item.label}
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 animate-on-scroll ${
              isVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full group"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
