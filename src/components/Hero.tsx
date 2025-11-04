import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChefHat, Terminal, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsla(37, 63%, 94%, 0.95), hsla(37, 50%, 88%, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <ChefHat className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-32 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-12 h-12 text-primary" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo */}
          <div className="mb-8 inline-block group">
            <div className="relative">
              <Terminal className="w-20 h-20 mx-auto text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <div className="absolute -inset-2 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">LazyCook</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-4 text-foreground/80 font-light">
            Your Agentic AI Kitchen Assistant
          </p>
          
          <p className="text-base md:text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
            Transform ingredients into recipes with AI. Just tell LazyCook what you have, 
            and let our intelligent CLI handle the rest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg rounded-xl group"
            >
              Get Started
              <Terminal className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Demo
            </Button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: "🤖", title: "AI-Powered", desc: "Smart recipe generation" },
              { icon: "⚡", title: "Lightning Fast", desc: "Instant results" },
              { icon: "🎯", title: "Simple CLI", desc: "Easy to use commands" }
            ].map((feature, i) => (
              <div 
                key={i}
                className="bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
