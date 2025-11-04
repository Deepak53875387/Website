import { Card } from "@/components/ui/card";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "KAS Global Commerce Inc",
    role: "Associate Product Manager",
    period: "Mar 2024 – Present",
    description: "Drove product development and GTM execution for AI and API-powered SaaS tools for global e-commerce sellers.",
    current: true,
  },
  {
    company: "Erogde Inc",
    role: "Associate Product Manager",
    period: "Apr 2023 – Feb 2024",
    description: "Defined product roadmap and led API + UX revamps to improve SaaS workflows for multi-channel e-commerce users.",
    current: false,
  },
];

export function WorkExperience() {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chart-2 font-mono">//</span> Work Experience
          </h2>
          <div className="h-1 w-20 bg-chart-2"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-experience-${index}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-chart-2 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold" data-testid={`text-company-${index}`}>
                        {exp.company}
                      </h3>
                      <p className="text-chart-2 font-semibold" data-testid={`text-role-${index}`}>
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span data-testid={`text-period-${index}`}>{exp.period}</span>
                  {exp.current && (
                    <span className="ml-2 px-2 py-1 bg-chart-2/20 text-chart-2 text-xs rounded-md font-mono">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-description-${index}`}>
                {exp.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
