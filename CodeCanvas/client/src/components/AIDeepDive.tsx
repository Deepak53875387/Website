import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const aiApplications = [
  {
    title: "Content Generation Pipeline",
    description: "Manual listing creation is slow and inconsistent across marketplaces",
    details: "Automatically creates complete product listings from minimal input, generating titles, descriptions, bullet points, and metadata optimized for each marketplace's specific requirements and SEO standards.",
  },
  {
    title: "Image & Text Quality Grading",
    description: "Sellers struggle to assess listing quality and optimization opportunities",
    details: "Evaluates listing quality across visual appeal, text clarity, and SEO optimization, providing actionable recommendations to improve conversion rates and marketplace performance.",
  },
  {
    title: "Lifestyle Image Generation Pipeline",
    description: "Basic product images fail to engage customers and drive conversions",
    details: "Transforms basic product images into contextual lifestyle scenes, increasing visual appeal and driving higher engagement across marketplace platforms.",
  },
  {
    title: "A+ Enhanced Brand Content Generation",
    description: "Creating premium brand content requires design skills and time",
    details: "Generates rich, engaging A+ content with comparison charts, enhanced images, and storytelling elements to boost brand presence and conversion rates.",
  },
  {
    title: "Competitor Intelligence Tracking",
    description: "Manual competitor monitoring misses critical market opportunities",
    details: "Continuously tracks competitor pricing, inventory changes, and content updates across multiple platforms, providing actionable insights for strategic adjustments",
  },
  {
    title: "Smart LLM Routing System",
    description: "Single LLM cannot optimally handle all ecommerce content types - some excel at creative writing while others are better for technical specifications",
    details: "Intelligently routes different content generation tasks (product descriptions, SEO titles, technical specs) to specialized LLMs (GPT-4, Claude, Gemini) based on use case complexity, cost constraints, and quality requirements.",
  },
  {
    title: "AI Evaluation & Quality Framework",
    description: "Continuously developing skills in AI quality assurance and evaluation metrics for generative AI features",
    details: "Working closely with different teams to define quality benchmarks, track model performance, and establish evaluation protocols. Currently focused on implementing robust testing frameworks for LLM outputs, cost-quality optimization, and minimizing hallucinations in production AI systems.",
  },
];

export function AIDeepDive() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chart-2 font-mono">//</span> AI & Technical Deep Dive
          </h2>
          <div className="h-1 w-20 bg-chart-2"></div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Generative AI Applications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {aiApplications.map((app, index) => (
              <Card key={index} className="p-4" data-testid={`card-ai-app-${index}`}>
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full text-left"
                  data-testid={`button-expand-${index}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-mono text-sm text-chart-1 mb-1">{app.title}</div>
                      <p className="text-sm text-muted-foreground">{app.description}</p>
                    </div>
                    {expandedIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-chart-2 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                </button>
                {expandedIndex === index && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">{app.details}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
