import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Building scalable digital products through structured thinking, rapid experimentation, and strategic AI implementation";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
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

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 pt-24 pb-12 relative overflow-hidden">
      {/* Modern gradient background with improved blending */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-chart-1/[0.08] rounded-full filter blur-[120px] opacity-60 float"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-chart-2/[0.08] rounded-full filter blur-[120px] opacity-60 float-delay-1"></div>

      {/* Main content with better spacing */}
      <div className="max-w-5xl w-full relative z-10 animate-fade-in">
        {/* Name with improved typography and gradient */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight gradient-cycle animate-fade-in-scale leading-[1.1]" data-testid="text-name">
          Deepak Kumar
        </h1>

        {/* Role badges with modern styling */}
        <div className="flex flex-wrap items-center gap-4 mb-10 text-base md:text-lg">
          <span className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 font-medium" data-testid="text-role">
            Product Manager
          </span>
          <span className="text-chart-2/60">•</span>
          <span className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 font-medium" data-testid="text-education">
            IIT Bombay Graduate
          </span>
          <span className="text-chart-2/60">•</span>
          <span className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 font-medium" data-testid="text-focus">
            AI-Driven Product Strategy
          </span>
        </div>

        {/* Typing animation with better spacing */}
        <div className="mb-14 min-h-[5rem] max-w-3xl">
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 font-mono leading-relaxed">
            <span className="text-chart-2 mr-2">//</span>
            {displayText}
            <span className="animate-pulse ml-0.5 text-chart-1">|</span>
          </p>
        </div>

        {/* Modern CTA buttons with enhanced styling */}
        <div className="flex flex-wrap gap-4 md:gap-5">
          <Button
            size="lg"
            onClick={scrollToProjects}
            data-testid="button-view-work"
            className="hover-elevate active-elevate-2 text-base md:text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            data-testid="button-download-resume"
            className="hover-elevate active-elevate-2 backdrop-blur-sm text-base md:text-lg px-8 py-6 rounded-xl border-2 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
