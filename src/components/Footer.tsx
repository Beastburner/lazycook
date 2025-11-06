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
    <footer className="relative bg-foreground text-background pt-20 pb-10 overflow-hidden">
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
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <img 
                src={logo}
                alt="LazyCook Logo"
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-3xl font-bold">LazyCook</span>
            </div>
            <p className="text-background/70 mb-8 max-w-md text-lg leading-relaxed">
              Your autonomous AI assistant that delivers maximum results with minimal prompting. 
              Powered by Gemini 2.5 Flash with a four-agent architecture.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Mail, label: "Email", href: "#" }
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="relative w-12 h-12 rounded-xl bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(198,61,28,0.5)] group"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              Quick Links
              <div className="h-1 w-8 bg-primary"></div>
            </h3>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Examples', 'Changelog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-all duration-300 relative inline-block group"
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

          {/* Community */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              Community
              <div className="h-1 w-8 bg-primary"></div>
            </h3>
            <ul className="space-y-3">
              {['GitHub', 'Discord', 'Twitter', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-all duration-300 relative inline-block group"
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
        <div className="pt-10 border-t border-background/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} LazyCook v5.0 by <strong className="text-primary">Harsh Bhatt</strong>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
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
        <div className="mt-8 text-center">
          <p className="text-background/40 text-xs font-mono">
            Built with ❤️ • Python 3.10+ • Gemini 2.5 Flash
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-[0_0_30px_rgba(198,61,28,0.6)] transition-all duration-300 z-50 p-0 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-7 h-7 group-hover:animate-bounce" />
        </Button>
      )}
    </footer>
  );
};
