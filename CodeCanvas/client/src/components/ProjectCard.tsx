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
    <Card className="overflow-hidden hover-elevate transition-smooth-slow group glass gradient-border animate-fade-in-scale card-3d" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={`h-2 bg-gradient-to-r ${gradient} transition-smooth`}></div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold" data-testid="text-project-title">
            {title}
          </h3>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <div className="font-mono text-xs text-chart-3 mb-1">// Problem</div>
            <p className="text-sm text-muted-foreground" data-testid="text-project-problem">{problem}</p>
          </div>

          <div>
            <div className="font-mono text-xs text-chart-1 mb-1">// Technical Approach</div>
            <p className="text-sm text-muted-foreground" data-testid="text-project-approach">{approach}</p>
          </div>

          <div>
            <div className="font-mono text-xs text-chart-2 mb-1">// Business Outcome</div>
            <p className="text-sm text-muted-foreground" data-testid="text-project-outcome">{outcome}</p>
          </div>
        </div>

        {techStack.length > 0 && (
          <div className="mb-4">
            <div className="font-mono text-xs text-muted-foreground mb-2">Tech Stack:</div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="font-mono text-xs" data-testid={`badge-tech-${index}`}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-border">
          <div className="font-mono text-xs text-chart-2 mb-1">Impact:</div>
          <p className="text-sm font-semibold" data-testid="text-project-impact">{impact}</p>
        </div>
      </div>
    </Card>
  );
}
