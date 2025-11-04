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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden geometric-bg">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-chart-1/10 rounded-full filter blur-3xl opacity-50 float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-chart-2/10 rounded-full filter blur-3xl opacity-50 float-delay-1"></div>
      <div className="max-w-4xl w-full relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight gradient-cycle animate-fade-in-scale" data-testid="text-name">
          Deepak Kumar
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-8 text-lg text-muted-foreground">
          <span data-testid="text-role">Product Manager</span>
          <span className="text-chart-2">•</span>
          <span data-testid="text-education">IIT Bombay Graduate</span>
          <span className="text-chart-2">•</span>
          <span data-testid="text-focus">AI-Driven Product Strategy</span>
        </div>

        <div className="mb-12 min-h-[4rem]">
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            <span className="text-chart-2">//</span> {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            onClick={scrollToProjects}
            data-testid="button-view-work"
            className="hover-elevate active-elevate-2"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            data-testid="button-download-resume"
            className="hover-elevate active-elevate-2 backdrop-blur-sm"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
