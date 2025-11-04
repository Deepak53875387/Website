import { Card } from "@/components/ui/card";
import { Gamepad2, Tv, Trophy, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const interests = [
  {
    icon: Gamepad2,
    text: "Playing Valorant & FIFA",
  },
  {
    icon: Tv,
    text: "Watching anime",
  },
  {
    icon: Trophy,
    text: "Following football",
  },
  {
    icon: BookOpen,
    text: "Reading philosophy",
  },
];

export function WhenImNotWorking() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 
            data-testid="heading-when-not-working"
            className="text-4xl font-bold mb-3 bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent"
          >
            When I'm Not Working
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card
                key={index}
                data-testid={`card-interest-${index}`}
                className={`glass-card p-6 group hover-elevate active-elevate-2 transition-all duration-300 scroll-animate ${isVisible ? 'is-visible animate-bounce-in' : ''}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" data-testid={`icon-interest-${index}`} />
                  </div>
                  <p className="text-sm font-medium text-foreground" data-testid={`text-interest-${index}`}>
                    {interest.text}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-chart-2/10 rounded-full filter blur-3xl opacity-30 float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-chart-3/10 rounded-full filter blur-3xl opacity-30 float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
}
