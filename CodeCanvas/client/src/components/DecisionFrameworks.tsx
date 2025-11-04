import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const frameworks = [
  {
    name: "RICE Scoring",
    description: "Feature prioritization framework",
    formula: "Reach × Impact × Confidence ÷ Effort",
    useCase: "Product roadmap prioritization",
  },
  {
    name: "ICE Prioritization",
    description: "Quick impact assessment",
    formula: "Impact × Confidence × Ease",
    useCase: "Sprint planning and quick wins",
  },
  {
    name: "First Principles",
    description: "Problem breakdown methodology",
    formula: "Question assumptions → Build from fundamentals",
    useCase: "Complex problem solving",
  },
  {
    name: "A/B Testing",
    description: "Data-driven validation",
    formula: "Hypothesis → Test → Measure → Iterate",
    useCase: "Feature validation and optimization",
  },
];

export function DecisionFrameworks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chart-2 font-mono">//</span> Decision Frameworks
          </h2>
          <div className="h-1 w-20 bg-chart-2"></div>
          <p className="mt-4 text-muted-foreground">
            Systematic approaches to product decisions and prioritization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {frameworks.map((framework, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-framework-${index}`}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold" data-testid={`text-framework-name-${index}`}>{framework.name}</h3>
                <Badge variant="secondary" className="font-mono text-xs">
                  Framework
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{framework.description}</p>
              <div className="bg-muted/50 p-3 rounded-md mb-4">
                <code className="text-sm font-mono text-chart-1" data-testid={`text-framework-formula-${index}`}>{framework.formula}</code>
              </div>
              <div className="text-xs text-muted-foreground">
                <span className="font-mono text-chart-2">Use case:</span> {framework.useCase}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
