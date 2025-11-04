import { ProjectCard } from '../ProjectCard';
import { ThemeProvider } from '../ThemeProvider';

export default function ProjectCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-2xl">
        <ProjectCard
          title="Example Project"
          problem="Sample problem description for demonstration"
          approach="Technical approach using modern technologies"
          outcome="Measurable business outcomes achieved"
          techStack={["React", "Node.js", "AI/ML"]}
          impact="100% improvement in key metrics"
        />
      </div>
    </ThemeProvider>
  );
}
