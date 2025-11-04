import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

type ContactProps = {
  onSubmit?: () => void;
};

export function Contact({ onSubmit }: ContactProps) {
  const handleEmailClick = () => {
    if (onSubmit) onSubmit();
    window.location.href = "mailto:deepakraj5387@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/deepak-kumar-baa00818b", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-chart-1/10 rounded-full filter blur-3xl opacity-50 float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-chart-2/10 rounded-full filter blur-3xl opacity-50 float-delay-1"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to discuss AI product strategy, marketplace integrations, or
            explore collaboration opportunities, I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="hover-elevate active-elevate-2 w-full sm:w-auto"
            data-testid="button-email"
            onClick={handleEmailClick}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hover-elevate active-elevate-2 w-full sm:w-auto"
            data-testid="button-linkedin"
            onClick={handleLinkedInClick}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
