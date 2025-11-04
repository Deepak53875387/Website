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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50 shadow-sm">
      {/* Top banner with modern styling */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-2 pb-1 text-center">
        <div className="text-xs font-mono text-muted-foreground/70 tracking-wide" data-testid="text-replit-credit">
          100% VIBE CODED BY REPLIT AI
        </div>
      </div>

      {/* Main navigation with improved spacing */}
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with modern styling */}
          <div className="flex items-center gap-3">
            <img
              src={cuteCatImage}
              alt="Logo"
              className="w-11 h-11 rounded-full object-cover border-2 border-chart-2/40 shadow-md hover:border-chart-2/60 transition-all duration-300 hover:scale-105"
              data-testid="img-logo"
            />
          </div>

          {/* Desktop navigation with modern hover effects */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-accent/50 hover:text-chart-1 transition-all duration-200"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-accent/50 hover:text-chart-1 transition-all duration-200"
              data-testid="link-expertise"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-accent/50 hover:text-chart-1 transition-all duration-200"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-accent/50 hover:text-chart-1 transition-all duration-200"
              data-testid="link-contact"
            >
              Contact
            </button>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu toggle with better styling */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              className="rounded-lg hover:bg-accent/50"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu with modern styling */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 border-t border-border/50 pt-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left px-4 py-3 rounded-lg hover:bg-accent/50 hover:text-chart-1 transition-all duration-200 font-medium"
              data-testid="link-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-left px-4 py-3 rounded-lg hover:bg-accent/50 hover:text-chart-1 transition-all duration-200 font-medium"
              data-testid="link-mobile-expertise"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left px-4 py-3 rounded-lg hover:bg-accent/50 hover:text-chart-1 transition-all duration-200 font-medium"
              data-testid="link-mobile-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left px-4 py-3 rounded-lg hover:bg-accent/50 hover:text-chart-1 transition-all duration-200 font-medium"
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
