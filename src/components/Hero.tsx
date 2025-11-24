import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";
import { copyToClipboard } from '@/lib/utils';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoText from "@/assets/logo-text.png";
import installationPDF from "@/assets/InstallationGuide.pdf";
import requirementsTXT from "@/assets/requirements.txt";

export const Hero = () => {
  const isLoggedIn = false; // Set to true or false manually for now
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [copiedHero, setCopiedHero] = useState(false);
  const fullText = "Your AI that cooks up results — not prompts.";

  // Helper to wrap Z/z in red
  const highlightZ = (text: string) => {
    return text.split('').map((char, i) => {
      if (char === 'Z' || char === 'z') {
        return <span key={i} style={{ color: 'red' }}>{char}</span>;
      }
      return char;
    });
  };
  const navigate = useNavigate();

  // Typing animation
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

  const copyHeroCommand = () => {
    const cmd = 'pip install lazycook';
    copyToClipboard(cmd).then((ok) => {
      if (ok) {
        setCopiedHero(true);
        setTimeout(() => setCopiedHero(false), 2000);
      }
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 inline-block group">
            <img 
              src={logo}
              alt="LazyCook Logo"
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(198,61,28,0.6)] animate-float"
            />
          </div>

          {/* Logo Text */}
          <div className="mb-6 sm:mb-8">
            <img 
              src={logoText}
              alt="LazyCook"
              className="h-12 sm:h-16 md:h-20 mx-auto opacity-90"
            />
          </div>

          {/* Typing Animation Tagline */}
          <div className="mb-8 sm:mb-12 min-h-[80px] sm:min-h-[120px] flex items-center justify-center px-2">
            <h1
              className="relative text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground sm:whitespace-nowrap"
              style={{ fontFamily: '"SF Pro Display","SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif' }}
            >
              {typedText.split('').map((char, i) => (
                char === 'Z' || char === 'z'
                  ? <span key={i} style={{ color: 'red' }}>{char}</span>
                  : char
              ))}
              <span className={`inline-block w-0.5 sm:w-1 h-6 sm:h-10 md:h-14 ml-1 sm:ml-2 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
            </h1>
          </div>

          {/* Install Pill (above CTAs) */}
          <div className="mb-8 sm:mb-10 px-2">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-background/80 backdrop-blur-md border-2 border-primary/40 rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3.5 shadow-[0_8px_30px_rgba(198,61,28,0.15)] ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
              <code className="text-sm sm:text-base md:text-lg text-foreground font-mono tracking-tight">
                {'pip install lazycook'.split('').map((char, i) => (
                  char === 'Z' || char === 'z'
                    ? <span key={i} style={{ color: 'red' }}>{char}</span>
                    : char
                ))}
              </code>
              <button
                onClick={copyHeroCommand}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/15 hover:bg-primary/25 text-primary text-xs font-medium transition-all hover:scale-105"
                aria-label={copiedHero ? 'Copied' : 'Copy command'}
              >
                {copiedHero ? (
                  <><Check className="w-4 h-4" /><span>Copied</span></>
                ) : (
                  <><Copy className="w-4 h-4" /><span>Copy</span></>
                )}
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center px-2">
            {/* Row: All CTAs side-by-side on >= sm, stacked on mobile */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Dynamic Login / Dashboard Button */}
            {!isLoggedIn ? (
              <Button 
                size="lg"
                onClick={() => navigate("/auth")}
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-[0_0_30px_rgba(198,61,28,0.5)] transition-all duration-300 hover:scale-105 px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-2xl group overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            ) : (
             <Button 
  size="lg"
  onClick={() => navigate("/dashboard")}
  className="relative z-10 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(198,61,28,0.3)] w-full sm:w-auto"
>
  <span className="relative z-20 font-semibold">Go to Dashboard</span>
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
</Button>
            )}
            {/* Watch Demo */}
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('videos')}
              className="relative border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(198,61,28,0.3)] w-full sm:w-auto"
            >
              Watch Demo
            </Button>
            
            {/* Upcoming Package Download (non-interactive) */}
            <Button
              size="lg"
              variant="ghost"
              className="relative border-2 border-black/50 text-primary/70 bg-transparent hover:bg-primary/10 px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(198,61,28,0.2)] group w-full sm:w-auto pointer-events-none cursor-not-allowed"
            >
              <span className="relative z-10 flex flex-col items-center text-center">
                <span>Download </span>
                <span className="text-xs sm:text-sm text-foreground/70">
                  <span className="text-black font-black">Upcoming</span>
                  <span> – no footprint with us</span>
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            </div>
          </div>

          {/* Install Pill moved above CTAs */}
        </div>
      </div>

    </section>
  );
};