import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import DeveloperTerminal from "@/components/DeveloperTerminal";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent flex items-center gap-1.5"
              data-testid="link-logo"
            >
              MP
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  data-testid={`link-${item.id}`}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => setTerminalOpen(true)}
                className="ml-2 gap-1.5 text-xs font-mono border-primary/30 text-primary hover:bg-primary/10"
                title="Terminal CLI (Cmd+K)"
                data-testid="button-terminal"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>CLI</span>
                <kbd className="hidden lg:inline-block px-1 py-0.2 text-[10px] bg-muted rounded border border-border">
                  ⌘K
                </kbd>
              </Button>

              <Button
                variant="default"
                onClick={() => scrollToSection("contact")}
                className="ml-2"
                data-testid="button-contact"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTerminalOpen(true)}
                className="text-primary border-primary/30"
              >
                <Terminal className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-menu-toggle"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background" data-testid="mobile-menu">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-start"
                  data-testid={`link-mobile-${item.id}`}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="default"
                onClick={() => scrollToSection("contact")}
                className="w-full"
                data-testid="button-mobile-contact"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </nav>

      <DeveloperTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}
