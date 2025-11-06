import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoText from "@/assets/logo-text.png";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Your AI that cooks up results — not prompts.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo - With hover glow effect */}
          <div className="mb-8 inline-block group">
            <img 
              src={logo}
              alt="LazyCook Logo"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(198,61,28,0.6)] animate-float"
            />
          </div>

          {/* Logo Text */}
          <div className="mb-8">
            <img 
              src={logoText}
              alt="LazyCook"
              className="h-16 md:h-20 mx-auto opacity-90"
            />
          </div>

          {/* Typing Animation Tagline */}
          <div className="mb-12 min-h-[120px] flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {typedText}
              <span className={`inline-block w-1 h-12 md:h-16 ml-2 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
            </h1>
          </div>

          {/* CTA Buttons with Glow */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('manual')}
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-[0_0_30px_rgba(198,61,28,0.5)] transition-all duration-300 hover:scale-105 px-10 py-7 text-lg rounded-2xl group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('videos')}
              className="relative border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-7 text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(198,61,28,0.3)]"
            >
              Watch Demo
            </Button>
          </div>

          {/* Terminal Preview Hint */}
          <div className="mt-16 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="inline-block bg-foreground/5 backdrop-blur-sm border border-primary/20 rounded-xl px-6 py-3">
              <code className="text-sm md:text-base text-foreground font-mono">
                $ lazycook run --auto
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
