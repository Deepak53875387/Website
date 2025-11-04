import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`mb-12 scroll-animate ${isVisible ? 'is-visible animate-slide-left' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chart-2 font-mono">//</span> About Me
          </h2>
          <div className="h-1 w-20 bg-chart-2"></div>
        </div>

        <div className={`space-y-4 scroll-animate ${isVisible ? 'is-visible animate-slide-bottom' : ''}`}>
          <p className="text-lg leading-relaxed" data-testid="text-about-intro">
            Graduate of <span className="text-chart-2 font-semibold">IIT Bombay</span>, I've built my career at the intersection of technical excellence and strategic product thinking. My journey started with a strong engineering foundation, evolving into a passion for building products that scale.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Today, I specialize in e-commerce marketplace platforms and generative AI applications, helping businesses unlock growth through data-driven strategies and intelligent automation.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My approach combines systems thinking with user-centric development, always focusing on measurable business impact and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
