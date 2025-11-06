import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Download, LogOut, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        navigate("/auth");
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(session.user);
        } else {
          navigate("/auth");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged out successfully" });
    navigate("/");
  };

  const handleDownload = (fileName: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({ title: `Downloading ${fileName}...` });
  };

  const downloadPackageInfo = () => {
    const content = `# LazyCook Installation Guide

## Quick Install

\`\`\`bash
pip install google-generativeai rich PyPDF2
\`\`\`

## Dependencies
- Python 3.10+
- google-generativeai
- rich
- PyPDF2

## Setup
1. Clone or download the LazyCook repository
2. Install dependencies: pip install -r requirements.txt
3. Set your Gemini API key
4. Run: python LazyCook5_withJSON.py

## Get Your Gemini API Key
Visit: https://aistudio.google.com/app/apikey

## Documentation
Full documentation available at your LazyCook portal.
`;
    handleDownload("INSTALLATION_GUIDE.txt", content);
  };

  const downloadRequirements = () => {
    const content = `google-generativeai>=0.3.0
rich>=13.0.0
PyPDF2>=3.0.0
`;
    handleDownload("requirements.txt", content);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg 
              viewBox="0 0 200 200" 
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 100 40 L 140 30 L 170 60 L 160 100"
                stroke="#C63D1C"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 100 50 L 110 120 L 130 180"
                stroke="#1C1B1B"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 90 90 L 130 70"
                stroke="#1C1B1B"
                strokeWidth="18"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <div>
              <h1 className="text-xl font-bold text-foreground">LazyCook Dashboard</h1>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Welcome to LazyCook!
            </h2>
            <p className="text-muted-foreground text-lg">
              Download your package and start cooking up AI-powered solutions
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Installation Guide */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Installation Guide</h3>
                  <p className="text-sm text-muted-foreground">Setup instructions</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Complete guide to installing and configuring LazyCook on your system.
              </p>
              <Button onClick={downloadPackageInfo} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Guide
              </Button>
            </div>

            {/* Requirements File */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Requirements File</h3>
                  <p className="text-sm text-muted-foreground">Python dependencies</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Download requirements.txt for easy dependency installation with pip.
              </p>
              <Button onClick={downloadRequirements} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download requirements.txt
              </Button>
            </div>
          </div>

          {/* Quick Start */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Start</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium text-foreground">Install Python 3.10+</p>
                  <p className="text-sm text-muted-foreground">Make sure you have Python 3.10 or higher installed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium text-foreground">Get Gemini API Key</p>
                  <p className="text-sm text-muted-foreground">Visit Google AI Studio to get your free API key</p>
                  <a 
                    href="https://aistudio.google.com/app/apikey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Get API Key →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium text-foreground">Install Dependencies</p>
                  <div className="mt-2 bg-muted rounded-md p-3 font-mono text-sm">
                    <code className="text-foreground">pip install google-generativeai rich PyPDF2</code>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <p className="font-medium text-foreground">Start Cooking!</p>
                  <p className="text-sm text-muted-foreground">Run LazyCook and let the AI agents work their magic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => navigate("/")}>
              ← Back to Home
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
