import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Get Started", href: "#manual" },
    { label: "Demos", href: "#videos" },
    { label: "Documentation", href: "#documentation" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <img 
              src={logo}
              alt="LazyCook Logo"
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(198,61,28,0.6)]"
            />
            <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              LazyCook
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative px-5 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium text-lg group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            <a
              href="/auth"
              className="ml-4 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(198,61,28,0.4)]"
            >
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in border-t border-primary/20 mt-2">
            <div className="flex flex-col space-y-1 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium px-4 py-3 rounded-lg"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/auth"
                className="mt-4 px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-center transition-all duration-300"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
