import { Card } from "@/components/ui/card";
import { Brain, ShoppingCart, Rocket, Code2, Package } from "lucide-react";
import { SiAmazon, SiShopify } from "react-icons/si";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const marketplaceSkills = [
  { name: "Amazon SP-API & Ads API Integration", icon: SiAmazon },
  { name: "Walmart Marketplace Integration", icon: ShoppingCart },
  { name: "Shopify Ecosystem Development", icon: SiShopify },
  { name: "Multi-Marketplace Architecture", icon: Package },
  { name: "Competitor Intelligence Systems", icon: Package },
  { name: "ONDC Integration", icon: Package },
  { name: "Shopclues Integration", icon: Package },
];

const expertiseCategories = [
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    color: "text-chart-1",
    skills: [
      "LLM Integration & Optimization",
      "Multi-Model Architecture Design",
      "Prompt Engineering",
      "Generative AI Applications",
      "Context Engineering",
      "Model Benchmarking",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce & Marketplace",
    color: "text-chart-2",
    skills: marketplaceSkills,
  },
  {
    id: "product-dev",
    icon: Rocket,
    title: "Product Development Stack",
    color: "text-chart-3",
    skills: [
      "Data-Driven Decision Frameworks",
      "Growth Strategy & User Acquisition",
      "Pricing Model Innovation",
      "Internal Dashboard Development",
    ],
  },
  {
    id: "dev-ecosystem",
    icon: Code2,
    title: "Rapid Prototyping and Experimentation",
    color: "text-chart-1",
    skills: [
      "Google AI Studio",
      "Lovable",
      "Replit & Cursor",
      "Vercel",
      "n8n",
      "MCP",
    ],
  },
];

export function TechnicalExpertise() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="expertise" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chart-2 font-mono">//</span> Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-chart-2"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {expertiseCategories.map((category, index) => {
            const Icon = category.icon;
            const animationClass = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';
            return (
              <Card
                key={category.id}
                className={`p-6 hover-elevate transition-all duration-300 scroll-animate ${isVisible ? `is-visible ${animationClass}` : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-expertise-${category.id}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${category.color} mt-1`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-sm text-muted-foreground mb-2">
                      <span className="text-chart-2">//</span> {category.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const isMarketplace = typeof skill === 'object';
                    const skillName = isMarketplace ? skill.name : skill;
                    const SkillIcon = isMarketplace ? skill.icon : null;
                    
                    return (
                      <li
                        key={skillIndex}
                        className="flex items-start gap-2 text-muted-foreground"
                        data-testid={`text-skill-${category.id}-${skillIndex}`}
                      >
                        <span className="text-chart-2 font-mono mt-1">└──</span>
                        {SkillIcon && (
                          <SkillIcon className="h-4 w-4 mt-0.5 text-chart-2 flex-shrink-0" />
                        )}
                        <span className="flex-1">{skillName}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
