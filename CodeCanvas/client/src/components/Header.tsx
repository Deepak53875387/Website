import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import cuteCatImage from "@assets/stock_images/cute_cat_face_portra_369820ed.jpg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 pt-2 pb-1 text-center">
        <div className="text-xs text-muted-foreground/80 pulse-glow" data-testid="text-replit-credit">
          100% VIBE CODED BY REPLIT AI
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={cuteCatImage} 
              alt="Logo" 
              className="w-10 h-10 rounded-full object-cover border-2 border-chart-2/30"
              data-testid="img-logo"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm hover:text-chart-2 transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-sm hover:text-chart-2 transition-colors"
              data-testid="link-expertise"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm hover:text-chart-2 transition-colors"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm hover:text-chart-2 transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:text-chart-2 transition-colors"
              data-testid="link-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-left hover:text-chart-2 transition-colors"
              data-testid="link-mobile-expertise"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left hover:text-chart-2 transition-colors"
              data-testid="link-mobile-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left hover:text-chart-2 transition-colors"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
