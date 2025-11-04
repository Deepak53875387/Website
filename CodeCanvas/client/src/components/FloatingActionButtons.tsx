import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingActionButtons() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsVisible(currentScrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Deepak_IITB_PM_2.5+YOE.pdf";
    link.download = "Deepak_IITB_PM_2.5+YOE.pdf";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const parallaxOffset = scrollY * 0.1;

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 flex flex-col gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      style={{
        transform: `translateY(-${parallaxOffset}px)`,
      }}
    >
      <Button
        size="icon"
        onClick={scrollToContact}
        className="h-14 w-14 rounded-full shadow-lg glass gradient-border hover-elevate active-elevate-2"
        data-testid="button-floating-contact"
      >
        <Mail className="h-5 w-5" />
      </Button>
      <Button
        size="icon"
        variant="outline"
        onClick={handleResumeDownload}
        className="h-14 w-14 rounded-full shadow-lg glass hover-elevate active-elevate-2"
        data-testid="button-floating-resume"
      >
        <Download className="h-5 w-5" />
      </Button>
    </div>
  );
}
