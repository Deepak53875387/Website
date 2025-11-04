import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

type Skill = {
  name: string;
  level: number;
  color: string;
};

const skills: Skill[] = [
  { name: "UI/UX Design", level: 87, color: "chart-1" },
  { name: "Business Strategy", level: 90, color: "chart-2" },
  { name: "Technical Architecture", level: 85, color: "chart-3" },
  { name: "Product Strategy", level: 95, color: "chart-1" },
  { name: "AI/ML Integration", level: 90, color: "chart-2" },
  { name: "API Integration", level: 92, color: "chart-3" },
  { name: "Market Analysis", level: 93, color: "chart-1" },
  { name: "System Architecture", level: 88, color: "chart-2" },
  { name: "Data-Driven Decision Making", level: 91, color: "chart-3" },
  { name: "Stakeholder Management", level: 89, color: "chart-1" },
  { name: "Product Roadmapping", level: 94, color: "chart-2" },
  { name: "Go-to-Market Strategy", level: 87, color: "chart-3" },
  { name: "Competitive Analysis", level: 90, color: "chart-1" },
  { name: "User Research", level: 86, color: "chart-2" },
  { name: "A/B Testing & Experimentation", level: 92, color: "chart-3" },
  { name: "Agile & Scrum Methodology", level: 88, color: "chart-1" },
  { name: "Financial Modeling", level: 85, color: "chart-2" },
  { name: "Prioritization Frameworks", level: 91, color: "chart-3" },
  { name: "Team Leadership & Collaboration", level: 89, color: "chart-1" },
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
    <div className="flex flex-col items-center group animate-fade-in-scale" style={{ animationDelay: `${delay}ms` }}>
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
    <div className="space-y-2 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
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

export function SkillsVisualization() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chart-2 font-mono">//</span> Core Competencies
          </h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Data-driven expertise across product management, AI integration, and marketplace strategy
          </p>
        </div>

        <Card className="p-8 glass gradient-border max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-chart-1">●</span> Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <RadialProgress key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
