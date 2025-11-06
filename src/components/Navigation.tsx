// Navigation.tsx
import { useEffect, useState } from "react";
import { Menu, X, LogOut, LayoutDashboard, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";
import logoText from "@/assets/logo-text.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Works for /dashboard and nested routes like /dashboard/profile
  const isDashboard = location.pathname.startsWith("/dashboard");

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Get Started", href: "#manual" },
    { label: "Demos", href: "#videos" },
    { label: "Documentation", href: "#documentation" },
  ];

  // Check login session
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session?.user);
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    navigate("/");
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
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
              if (isDashboard) navigate("/");
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group"
          >
            <div className="flex items-center transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(198,61,28,0.5)]">
              <img
                src={logo}
                alt="LazyCook Logo"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />

              {/* ✅ Hide logoText entirely if dashboard route */}
              {!isDashboard && (
                <img
                  src={logoText}
                  alt="LazyCook"
                  className="h-10 sm:h-12 opacity-90 ml-2 sm:ml-3"
                />
              )}
            </div>
          </a>

          {/* Desktop Navigation */}
          {!isDashboard && (
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
            </div>
          )}

          {/* Right-side Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {!isLoggedIn ? (
              <Button
                onClick={() => navigate("/auth")}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(198,61,28,0.4)]"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            ) : (
              <>
                {!isDashboard && (
                  <Button
                    variant="outline"
                    onClick={() => navigate("/dashboard")}
                    className="flex items-center gap-2 rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(198,61,28,0.3)]"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Button>
                )}
                <Button
                  onClick={handleLogout}
                  variant="destructive"
                  className="flex items-center gap-2 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,61,28,0.4)]"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            )}
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
        {isOpen && !isDashboard && (
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

              {!isLoggedIn ? (
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/auth");
                  }}
                  className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-center transition-all duration-300"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/dashboard");
                    }}
                    variant="outline"
                    className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    variant="destructive"
                    className="mt-2 w-full rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
