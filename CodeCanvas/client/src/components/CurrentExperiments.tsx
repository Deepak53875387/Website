import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Beaker } from "lucide-react";

const experiments = [
  {
    title: "Multi-Agent LLM Orchestration",
    status: "active",
    description: "Exploring agent-based architectures for complex marketplace automation tasks",
  },
  {
    title: "Real-time Pricing Optimization",
    status: "active",
    description: "ML-driven dynamic pricing based on competitor analysis and demand signals",
  },
  {
    title: "Visual AI for Product Images",
    status: "active",
    description: "Computer vision models for automated image enhancement and background removal",
  },
];

export function CurrentExperiments() {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-chart-2 font-mono">//</span> Current Experiments
            <Beaker className="h-7 w-7 text-chart-2" />
          </h2>
          <div className="h-1 w-20 bg-chart-2"></div>
        </div>

        <div className="space-y-6">
          {experiments.map((experiment, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-experiment-${index}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold" data-testid={`text-experiment-title-${index}`}>
                      {experiment.title}
                    </h3>
                    <Badge
                      variant="default"
                      className="font-mono text-xs"
                    >
                      {experiment.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{experiment.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
