import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  techStack: string[];
  impact: string;
  gradient?: string;
};

export function ProjectCard({
  title,
  problem,
  approach,
  outcome,
  techStack,
  impact,
  gradient = "from-chart-1/10 to-chart-2/10",
}: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden group relative border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-2xl"
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Modern gradient accent bar */}
      <div className={`h-1.5 bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:h-2`}></div>

      {/* Card content with improved spacing */}
      <div className="p-7 md:p-8">
        {/* Title with better typography */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-chart-1 transition-colors duration-300" data-testid="text-project-title">
            {title}
          </h3>
        </div>

        {/* Content sections with modern spacing */}
        <div className="space-y-5 mb-6">
          <div>
            <div className="font-mono text-xs font-semibold text-chart-3 mb-2 tracking-wide">// PROBLEM</div>
            <p className="text-sm leading-relaxed text-foreground/70" data-testid="text-project-problem">{problem}</p>
          </div>

          <div>
            <div className="font-mono text-xs font-semibold text-chart-1 mb-2 tracking-wide">// TECHNICAL APPROACH</div>
            <p className="text-sm leading-relaxed text-foreground/70" data-testid="text-project-approach">{approach}</p>
          </div>

          <div>
            <div className="font-mono text-xs font-semibold text-chart-2 mb-2 tracking-wide">// BUSINESS OUTCOME</div>
            <p className="text-sm leading-relaxed text-foreground/70" data-testid="text-project-outcome">{outcome}</p>
          </div>
        </div>

        {/* Tech stack badges if present */}
        {techStack.length > 0 && (
          <div className="mb-6">
            <div className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-wider">Tech Stack:</div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="font-mono text-xs px-3 py-1 rounded-full hover:bg-primary/10 transition-colors"
                  data-testid={`badge-tech-${index}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Impact section with modern styling */}
        <div className="pt-6 border-t border-border/50">
          <div className="font-mono text-xs font-semibold text-chart-2 mb-2 tracking-wide">IMPACT:</div>
          <p className="text-sm font-semibold leading-relaxed text-foreground/90" data-testid="text-project-impact">{impact}</p>
        </div>
      </div>

      {/* Hover gradient overlay effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`}></div>
      </div>
    </Card>
  );
}
