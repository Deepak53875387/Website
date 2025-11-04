import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-full max-w-md px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 gradient-cycle">
            Deepak Kumar
          </h2>
          <p className="text-sm text-muted-foreground font-mono">
            // Initializing portfolio...
          </p>
        </div>

        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-all duration-200 ease-out"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, hsl(var(--chart-1)), hsl(var(--chart-2)), hsl(var(--chart-3)))`,
            }}
          />
        </div>

        <div className="mt-4 text-center">
          <span className="text-sm font-mono text-chart-1">{progress}%</span>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-chart-1 animate-pulse" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" style={{ animationDelay: "200ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-chart-3 animate-pulse" style={{ animationDelay: "400ms" }}></div>
        </div>
      </div>
    </div>
  );
}
