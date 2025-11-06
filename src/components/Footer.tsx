import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";


export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-foreground text-background pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary animate-pulse"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6 group">
              <img 
                src={logo}
                alt="LazyCook Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-2xl sm:text-3xl font-bold">La<span className="text-red-500">z</span>yCook</span>
            </div>
            <p className="text-background/70 mb-6 sm:mb-8 max-w-md text-base sm:text-lg leading-relaxed">
              Your autonomous AI assistant that delivers maximum results with minimal prompting. 
              Powered by Gemini 2.5 Flash with a four-agent architecture.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Mail, label: "Email", href: "#" }
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(198,61,28,0.5)] group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[hsl(10,76%,45%)]/80 font-bold italic mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg">
              Quick Links
              <div className="h-1 w-6 sm:w-8 bg-primary"></div>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
                <li>
    <a
      href="/docs"
      className="text-background/70 hover:text-primary transition-all duration-300 relative inline-block group"
    >
      <span className="relative">
        Documentation
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
      </span>
    </a>
  </li>

  <li>
    <a
      href="/api"
      className="text-background/70 hover:text-primary transition-all duration-300 relative inline-block group"
    >
      <span className="relative">
        API Reference
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
      </span>
    </a>
  </li>

  <li>
    <a
      href="/examples"
      className="text-background/70 hover:text-primary transition-all duration-300 relative inline-block group"
    >
      <span className="relative">
        Examples
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
      </span>
    </a>
  </li>

  <li>
    <a
      href="/changelog"
      className="text-background/70 hover:text-primary transition-all duration-300 relative inline-block group"
    >
      <span className="relative">
        Changelog
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
      </span>
    </a>
  </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-[hsl(10,76%,45%)]/80 font-bold italic mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg">
              Community
              <div className="h-1 w-6 sm:w-8 bg-primary"></div>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {['GitHub', 'Discord', 'Twitter', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-all duration-300 relative inline-block group text-sm sm:text-base"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
       <div className="pt-8 sm:pt-10 border-t border-background/20 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
  <p className="text-xs sm:text-sm leading-relaxed animate-fade-in px-2">
    © {new Date().getFullYear()}{" "}
    <span className="font-semibold text-gradient">LazyCook</span> v5.0 —{" "}
    <span className="text-[hsla(0, 0%, 100%, 1.00)]/80 font-medium italic">
      Built by <span className="text-[hsl(10,76%,45%)]/80 font-medium italic">Hitarth Trivedi</span> &amp; <span className="text-[hsl(10,76%,45%)]/80 font-medium italic">Harsh Bhatt</span>
    </span>
    ,{" "}
    <span className="text-[hsla(0, 0%, 100%, 1.00)]/80 font-medium italic">
  designed by <span className="text-[hsl(10,76%,45%)]/80 font-medium italic"> Parth Soni</span> 
</span>
    .{" "}
    <span className="text-[hsla(0, 0%, 100%, 1.00)]/80 font-medium italic">
      Presented by <span className="text-[hsl(10,76%,45%)]/80 font-medium italic">ALPHA.KORE</span>
    </span>.
  </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            {['Privacy Policy', 'Terms of Service', 'License'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-background/60 hover:text-primary transition-all duration-300 relative group"
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Watermark */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-background/40 text-xs font-mono">
            Built with ❤️ • Python 3.10+ • Gemini 2.5 Flash
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-[0_0_30px_rgba(198,61,28,0.6)] transition-all duration-300 z-50 p-0 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-bounce" />
        </Button>
      )}
    </footer>
  );
};
