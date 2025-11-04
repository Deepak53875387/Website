import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Zap, Clock } from "lucide-react";

const metrics = [
  {
    label: "Revenue Growth",
    value: "3.5x",
    description: "Through finding product-market fit and shipping high-impact features",
    icon: DollarSign,
    endpoint: "GET /impact/revenue",
  },
  {
    label: "User Base Scaling",
    value: "250%",
    description: "Growth strategy execution",
    icon: Users,
    endpoint: "GET /impact/users",
  },
  {
    label: "Cost Optimization",
    value: "60%",
    description: "Via AI cost-to-value transformation",
    icon: TrendingUp,
    endpoint: "GET /impact/costs",
  },
  {
    label: "Efficiency Gains",
    value: "85%",
    description: "Automation impact",
    icon: Zap,
    endpoint: "GET /impact/efficiency",
  },
  {
    label: "Decision Velocity",
    value: "50%",
    description: "Faster with dashboards",
    icon: Clock,
    endpoint: "GET /impact/velocity",
  },
];

export function MetricsDashboard() {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chart-2 font-mono">//</span> Business Impact
          </h2>
          <div className="h-1 w-20 bg-chart-2"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-metric-${index}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="h-6 w-6 text-chart-2" />
                  <code className="text-xs text-muted-foreground font-mono">{metric.endpoint}</code>
                </div>
                <div className="text-3xl font-bold text-chart-2 mb-2" data-testid={`text-metric-value-${index}`}>
                  {metric.value}
                </div>
                <div className="text-sm font-semibold mb-1" data-testid={`text-metric-label-${index}`}>{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
