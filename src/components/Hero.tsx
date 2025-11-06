import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo - Large centered icon */}
          <div className="mb-12 inline-block">
            <svg 
              viewBox="0 0 200 200" 
              className="w-64 h-64 mx-auto animate-float"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Red brush stroke */}
              <path
                d="M 100 40 L 140 30 L 170 60 L 160 100"
                stroke="#C63D1C"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
              />
              {/* Black brush stroke */}
              <path
                d="M 100 50 L 110 120 L 130 180"
                stroke="#1C1B1B"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
              />
              {/* Crossbar */}
              <path
                d="M 90 90 L 130 70"
                stroke="#1C1B1B"
                strokeWidth="18"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Your AI that cooks up results — not prompts.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = '/auth'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg rounded-xl"
            >
              Login
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('videos')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
