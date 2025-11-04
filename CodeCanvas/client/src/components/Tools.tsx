import { Card } from "@/components/ui/card";
import { SiGooglecloud, SiVercel, SiReplit, SiJupyter, SiPostman, SiOpenai, SiAnthropic, SiGoogle } from "react-icons/si";
import { Code2, Sparkles, Database, Brain, Network, Boxes } from "lucide-react";

const tools = [
  {
    name: "Google AI Studio",
    icon: SiGooglecloud,
  },
  {
    name: "Lovable",
    icon: Sparkles,
  },
  {
    name: "Replit",
    icon: SiReplit,
  },
  {
    name: "Cursor",
    icon: Code2,
  },
  {
    name: "Vercel",
    icon: SiVercel,
  },
  {
    name: "Hugging Face",
    icon: Brain,
  },
  {
    name: "Jupyter Notebook",
    icon: SiJupyter,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "DBeaver",
    icon: Database,
  },
  {
    name: "Google Colab",
    icon: SiGoogle,
  },
  {
    name: "ChatGPT",
    icon: SiOpenai,
  },
  {
    name: "Claude",
    icon: SiAnthropic,
  },
  {
    name: "Google Gemini",
    icon: SiGoogle,
  },
  {
    name: "n8n",
    icon: Network,
  },
  {
    name: "MCP",
    icon: Boxes,
  },
];

export function Tools() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chart-2 font-mono">//</span> Development Tools
          </h2>
          <div className="h-1 w-20 bg-chart-2"></div>
          <p className="mt-4 text-muted-foreground">
            Tools used for rapid prototyping to reduce time for development, enable proof of concept and rapid experimentation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300 text-center group"
                data-testid={`card-tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-12 w-12 text-chart-2 group-hover:text-chart-1 transition-colors" />
                </div>
                <h3 className="font-semibold group-hover:text-chart-2 transition-colors" data-testid="text-tool-name">
                  {tool.name}
                </h3>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
