import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

type Skill = {
  name: string;
  level: number;
  color: string;
};

const skills: Skill[] = [
  { name: "Business Strategy", level: 90, color: "chart-1" },
  { name: "Market Analysis", level: 93, color: "chart-2" },
  { name: "ROI Optimization", level: 89, color: "chart-3" },
  { name: "Stakeholder Management", level: 94, color: "chart-1" },
  { name: "Financial Planning", level: 86, color: "chart-2" },
  { name: "Strategic Partnerships", level: 88, color: "chart-3" },
  { name: "Go-to-Market", level: 88, color: "chart-2" },
];

function RadialProgress({ skill, delay }: { skill: Skill; delay: number }) {
  const [progress, setProgress] = useState(0);
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, delay);
    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div className="flex flex-col items-center group animate-fade-in-scale" style={{ animationDelay: `${delay}ms` }} data-testid={`radial-${skill.name.toLowerCase().replace(/[\s&/()]/g, '-')}`}>
      <div className="relative">
        <svg width="120" height="120" className="transform -rotate-90">
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="none"
            stroke={`hsl(var(--${skill.color}))`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{Math.round(progress)}%</span>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-center">{skill.name}</p>
    </div>
  );
}

function AnimatedBar({ skill, delay }: { skill: Skill; delay: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, delay);
    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <div className="space-y-2 animate-fade-in" style={{ animationDelay: `${delay}ms` }} data-testid={`bar-${skill.name.toLowerCase().replace(/[\s&/()]/g, '-')}`}>
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${width}%`,
            background: `hsl(var(--${skill.color}))`
          }}
        />
      </div>
    </div>
  );
}

export function BusinessAcumenVisualization() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" data-testid="section-business-acumen">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-business-acumen">
            <span className="text-chart-2 font-mono">//</span> Business Acumen
          </h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Strategic thinking and business intelligence for data-driven decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 glass gradient-border">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-chart-1">●</span> Proficiency Levels
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {skills.slice(0, 4).map((skill, index) => (
                <RadialProgress key={skill.name} skill={skill} delay={index * 100} />
              ))}
            </div>
          </Card>

          <Card className="p-8 glass gradient-border">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-chart-2">●</span> Skill Distribution
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <AnimatedBar key={skill.name} skill={skill} delay={index * 100} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
