import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Instagram, Github } from "lucide-react";
import heroImage from "@assets/stock_images/abstract_blockchain__1d4eb9dd.jpg";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
            Maalav Patadiya
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4" data-testid="text-tagline">
          Blockchain Developer & Financial Analyst
        </p>
        <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12" data-testid="text-subtitle">
          Crafting decentralized solutions and innovative fintech applications
          with expertise in DeFi, smart contracts, and algorithmic trading
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="bg-background/20 backdrop-blur-sm border-primary/20"
            data-testid="button-get-in-touch"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/maalavpatadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-elevate active-elevate-2 p-2 rounded-md"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-6 h-6 text-primary" />
          </a>
          <a
            href="https://instagram.com/maalavpatadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-elevate active-elevate-2 p-2 rounded-md"
            data-testid="link-instagram"
          >
            <Instagram className="w-6 h-6 text-primary" />
          </a>
          <a
            href="https://github.com/maalavpatadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-elevate active-elevate-2 p-2 rounded-md"
            data-testid="link-github"
          >
            <Github className="w-6 h-6 text-primary" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
}
