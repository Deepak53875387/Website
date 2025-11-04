import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { TechnicalExpertise } from "@/components/TechnicalExpertise";
import { Projects } from "@/components/Projects";
import { SkillsVisualization } from "@/components/SkillsVisualization";
import { UIUXVisualization } from "@/components/UIUXVisualization";
import { BusinessAcumenVisualization } from "@/components/BusinessAcumenVisualization";
import { TechnicalEngineeringVisualization } from "@/components/TechnicalEngineeringVisualization";
import { AIDeepDive } from "@/components/AIDeepDive";
import { Tools } from "@/components/Tools";
import { MetricsDashboard } from "@/components/MetricsDashboard";
import { DecisionFrameworks } from "@/components/DecisionFrameworks";
import { CurrentExperiments } from "@/components/CurrentExperiments";
import { TopBlogs } from "@/components/TopBlogs";
import { AdvancedAgenticAI } from "@/components/AdvancedAgenticAI";
import { WhenImNotWorking } from "@/components/WhenImNotWorking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FloatingActionButtons } from "@/components/FloatingActionButtons";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { useConfetti, ConfettiCanvas } from "@/components/Confetti";

export default function Home() {
  const { confetti, triggerConfetti } = useConfetti();

  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <ConfettiCanvas confetti={confetti} />
      <ThemeSwitch />
      <FloatingActionButtons />
      
      <div className="min-h-screen relative">
        <Header />
        <main>
          <Hero />
          <About />
          <WorkExperience />
          <SkillsVisualization />
          <TechnicalExpertise />
          <Projects />
          <AIDeepDive />
          <Tools />
          <MetricsDashboard />
          <DecisionFrameworks />
          <CurrentExperiments />
          <TopBlogs />
          <AdvancedAgenticAI />
          <WhenImNotWorking />
          <Contact onSubmit={triggerConfetti} />
        </main>
        <Footer />
      </div>
    </>
  );
}
