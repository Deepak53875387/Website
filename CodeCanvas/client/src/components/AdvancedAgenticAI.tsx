import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Network, Zap, Target, Lightbulb, Database, Workflow } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const focus = {
  title: "Current Focus: Autonomous Marketplace Intelligence",
  items: [
    "Continuously monitor and analyze competitor strategies across marketplaces",
    "Automatically identify winning products and pricing patterns",
    "Generate and publish optimized listings with AI-created content",
    "Execute dynamic pricing based on real-time market data",
    "Provide predictive analytics for inventory and trend forecasting",
  ],
};

const visionGoal = {
  title: "What We're Looking to Achieve",
  description: "Building a fully autonomous AI agent system that handles end-to-end ecommerce operations without manual intervention—from market research to execution.",
  items: [
    "Automated listing generation optimized for each marketplace's requirements",
    "Dynamic content updates based on competitor demographic strategies and positioning",
    "Intelligent pricing adjustments responding to real-time market conditions",
    "Strategic decision-making across all ecommerce operations autonomously",
    "Continuous model improvement through feedback loops and performance data",
    "Self-optimizing system that learns from outcomes and refines strategies",
  ],
};

const technologies = [
  { name: "LangChain/LangGraph", description: "Building complex multi-agent workflows with memory and tools" },
  { name: "LlamaIndex", description: "Advanced RAG systems for marketplace intelligence" },
  { name: "Vector Databases", description: "ChromaDB, Pinecone, Weaviate for semantic search" },
  { name: "Agent Frameworks", description: "AutoGPT, CrewAI, Microsoft Autogen" },
  { name: "LLM Orchestration", description: "GPT-4, Claude, Gemini with intelligent routing" },
];

const advancedSkills = [
  { icon: Network, title: "Multi-Agent Coordination", description: "Specialized agents for research, analysis, content creation, and publishing" },
  { icon: Brain, title: "Agent Memory Systems", description: "Long-term context preservation and learning" },
  { icon: Zap, title: "Tool Integration", description: "Marketplace APIs, payment systems, analytics platforms" },
  { icon: Target, title: "Evaluation Frameworks", description: "Measuring agent performance and business impact" },
  { icon: Database, title: "Cost Optimization", description: "Intelligent model switching and caching strategies" },
];

const emergingAreas = [
  "Reinforcement Learning: For continuous agent improvement",
  "Agent-to-Agent Communication: Collaborative problem-solving",
  "Federated Learning: Privacy-preserving marketplace insights",
  "Explainable AI: Transparent decision-making in autonomous systems",
  "Edge Deployment: Running agents closer to data sources",
];

const infrastructure = [
  "Vector Embedding Pipelines: Real-time data processing",
  "Agent Monitoring: Performance tracking and alerting",
  "Scalable Architecture: Cloud-native agent deployment",
  "Security: Safe autonomous operation in production",
];

const learningProjects = [
  "Autonomous pricing optimization agent",
  "Multi-marketplace content generation pipeline",
  "Real-time competitor intelligence system",
  "Predictive inventory management agent",
];

export function AdvancedAgenticAI() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-chart-1/10 rounded-full filter blur-3xl opacity-50 float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-chart-3/10 rounded-full filter blur-3xl opacity-50 float" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="h-8 w-8 text-chart-1" />
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="heading-advanced-agentic-ai">
              <span className="text-chart-2 font-mono">//</span> Agentic AI Research & Exploration
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-chart-1 to-chart-2"></div>
        </div>

        <Card className="p-8 glass-card gradient-border mb-8 border-chart-2">
          <div className="flex items-start gap-3 mb-6">
            <Lightbulb className="h-6 w-6 text-chart-2 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-chart-2 to-chart-1 bg-clip-text text-transparent" data-testid="heading-vision-goal">
                {visionGoal.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm" data-testid="text-vision-description">
                {visionGoal.description}
              </p>
              <div className="space-y-3">
                {visionGoal.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`text-vision-item-${index}`}>
                    <span className="text-chart-2 font-mono mt-0.5 flex-shrink-0">→</span>
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 glass-card gradient-border mb-8">
          <div className="flex items-start gap-3 mb-6">
            <Target className="h-6 w-6 text-chart-1 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent" data-testid="heading-current-focus">
                {focus.title}
              </h3>
              <div className="space-y-3">
                {focus.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`text-focus-item-${index}`}>
                    <span className="text-chart-1 font-mono mt-0.5 flex-shrink-0">→</span>
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className={`p-6 glass-card hover-elevate scroll-animate ${isVisible ? 'is-visible animate-slide-left' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <Workflow className="h-6 w-6 text-chart-2" />
              <h3 className="text-lg font-bold" data-testid="heading-core-technologies">Core Technologies I'm Mastering</h3>
            </div>
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div key={index} className="border-l-2 border-chart-2/30 pl-4" data-testid={`text-technology-${index}`}>
                  <p className="font-semibold text-foreground mb-1">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className={`p-6 glass-card hover-elevate scroll-animate ${isVisible ? 'is-visible animate-slide-right' : ''}`} style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-6 w-6 text-chart-1" />
              <h3 className="text-lg font-bold" data-testid="heading-advanced-skills">Advanced Skills I'm Developing</h3>
            </div>
            <div className="space-y-4">
              {advancedSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex items-start gap-3" data-testid={`card-skill-${index}`}>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm mb-1">{skill.title}</p>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 glass-card hover-elevate">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-chart-3" />
              <h3 className="font-bold" data-testid="heading-emerging-areas">Emerging Areas</h3>
            </div>
            <ul className="space-y-2">
              {emergingAreas.map((area, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`text-emerging-${index}`}>
                  <span className="text-chart-3 font-mono flex-shrink-0">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 glass-card hover-elevate">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-chart-2" />
              <h3 className="font-bold" data-testid="heading-infrastructure">Infrastructure & Deployment</h3>
            </div>
            <ul className="space-y-2">
              {infrastructure.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`text-infrastructure-${index}`}>
                  <span className="text-chart-2 font-mono flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 glass-card hover-elevate">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-5 w-5 text-chart-1" />
              <h3 className="font-bold" data-testid="heading-learning-projects">Learning Projects</h3>
            </div>
            <ul className="space-y-2">
              {learningProjects.map((project, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`text-project-${index}`}>
                  <span className="text-chart-1 font-mono flex-shrink-0">•</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="p-6 glass-card border-chart-1">
          <div className="flex items-start gap-3">
            <Target className="h-6 w-6 text-chart-1 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2" data-testid="heading-future-vision">Future Vision</h3>
              <p className="text-muted-foreground" data-testid="text-future-vision">
                Creating self-optimizing marketplace ecosystems where AI agents handle everything from competitor research to automated publishing, while providing human-level strategic insights.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
