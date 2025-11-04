import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChefHat } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Manual", href: "#manual" },
    { label: "Videos", href: "#videos" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <ChefHat className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold text-gradient">LazyCook</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
            >
              Install Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium px-4 py-2 hover:bg-primary/10 rounded-lg"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg mx-4"
              >
                Install Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
