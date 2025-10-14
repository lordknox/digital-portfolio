import { Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {currentYear} Alex Morgan. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Blockchain Developer & Financial Analyst
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://instagram.com/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-footer-instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/alexmorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-2 rounded-md"
              data-testid="link-footer-github"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
