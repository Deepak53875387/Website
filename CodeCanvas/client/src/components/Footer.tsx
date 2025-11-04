export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-chart-2">//</span> Built with strategic thinking & rapid execution
          </div>

          <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-chart-2 transition-colors"
              data-testid="link-footer-about"
            >
              About
            </button>
            <span className="text-chart-2">│</span>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-chart-2 transition-colors"
              data-testid="link-footer-projects"
            >
              Projects
            </button>
            <span className="text-chart-2">│</span>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-chart-2 transition-colors"
              data-testid="link-footer-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
