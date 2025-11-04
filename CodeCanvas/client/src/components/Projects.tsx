import { ProjectCard } from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Multi-Marketplace Advertising Automation Platform",
    problem: "Manual advertising management across multiple marketplaces required constant seller intervention, leading to inefficient spend, missed optimization opportunities, and scalability challenges across campaigns.",
    approach: "Led 0→1 development of unified advertising API architecture integrating Reporting APIs, Campaign Management APIs, and Real-time Data Streams using Amazon SQS for near real-time automation, management, and performance reporting.",
    outcome: "End-to-end automation of marketplace advertising with support for Sponsored Products, Brands, Display—currently expanding into additional ad types and marketplace integrations.",
    techStack: [],
    impact: "Reduced manual ad management effort by 60%, enabled real-time bid and budget adjustments, and scalable campaign automation for sellers expanding across multiple ad types and marketplaces",
    gradient: "from-chart-3/20 to-chart-1/20",
  },
  {
    title: "Rapid Prototyping & Cross-Functional Alignment Framework",
    problem: "In a resource-constrained startup environment, traditional product development cycles created communication gaps between business, design, and engineering teams, slowing validation and causing misalignment on product vision.",
    approach: "Pioneered a rapid iteration methodology using low-code tools (Lovable, Google AI Studio) and fast research techniques to create working proof-of-concepts in days instead of weeks. These tangible prototypes served as collaborative centerpieces for cross-functional discussions.",
    outcome: "Transformed how product vision was communicated and validated across the organization. Interactive prototypes provided a shared language between technical and non-technical teams, enabling faster feedback loops and clearer requirement alignment.",
    techStack: [],
    impact: "70% faster concept-to-validation cycles, significantly improved stakeholder buy-in, and reduced rework through early and clear alignment on product direction and user experience",
    gradient: "from-chart-2/20 to-chart-1/20",
  },
  {
    title: "Multi-Marketplace AI Content & Listing Platform",
    problem: "Sellers waste hours manually creating and optimizing product listings across Amazon, Walmart, Shopify, ONDC, and other marketplaces with inconsistent quality and missed optimization opportunities.",
    approach: "Built generative AI pipeline using multi-LLM architecture for content generation, quality grading, and automated marketplace-specific optimization. Integrated multiple marketplace APIs for seamless publishing across platforms.",
    outcome: "Single-click listing export across all major marketplaces with AI-driven quality scoring and automated content optimization.",
    techStack: [],
    impact: "85% reduction in listing creation time, 40% improvement in conversion rates",
    gradient: "from-chart-1/20 to-chart-2/20",
  },
  {
    title: "Multiple Marketplace Integration Suite",
    problem: "Managing multiple marketplaces (Amazon, Walmart, Shopify, ONDC, etc.) is complex. Sellers face high overhead due to varying APIs, constant maintenance requirements, and the challenge of tracking performance across platforms—especially for those without a data analysis background.",
    approach: "Built a unified integration framework that handles multi-marketplace authentication, rate limiting, API synchronization, and robust error handling with retry logic across all major platforms.",
    outcome: "The reusable integration layer provides a single source of truth, enabling rapid development of seller tools and streamlined access to marketplace data.",
    techStack: [],
    impact: "Improved revenue growth and platform stickiness, reduced operational overhead for sellers, simplified cross-marketplace data tracking without requiring analytical expertise",
    gradient: "from-chart-2/20 to-chart-3/20",
  },
  {
    title: "Internal Decision Intelligence Dashboard",
    problem: "Product and growth decisions scattered across multiple data sources, slowing decision velocity and creating alignment issues.",
    approach: "Built unified analytics dashboard aggregating marketplace performance, user behavior, and financial metrics with real-time updates and customizable views.",
    outcome: "Single source of truth for organizational decision-making with automated insights and anomaly detection.",
    techStack: [],
    impact: "50% faster decision cycles, improved cross-team alignment",
    gradient: "from-chart-1/20 via-chart-2/15 to-chart-1/20",
  },
  {
    title: "Competitor Tracking & Analytics System",
    problem: "Manual competitor monitoring is time-consuming and reactive, missing key market shifts and pricing opportunities.",
    approach: "Developed AI-powered competitor intelligence system tracking pricing, inventory, and content changes across marketplaces with automated alerting.",
    outcome: "Real-time competitor insights with trend analysis and strategic recommendations.",
    techStack: [],
    impact: "Improved platform stickiness and reducing manual time",
    gradient: "from-chart-3/20 to-chart-1/20",
  },
];

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="projects" className="py-20 px-6 relative">
      <div className="absolute top-10 right-10 w-96 h-96 bg-chart-3/5 rounded-full filter blur-3xl opacity-30 float-delay-2 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chart-2 font-mono">//</span> Some Key Projects
          </h2>
          <div className="h-1 w-20 bg-chart-2"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Real solutions built to solve complex problems at the intersection of AI, e-commerce, and data-driven growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`scroll-animate ${isVisible ? 'is-visible animate-scale-in' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
