import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Download, LogOut, Package, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import logoText from "@/assets/logo-text.png";
import installationPDF from "@/assets/InstallationGuide.pdf";
import requirementsTXT from "@/assets/requirements.txt";
export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Auth listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/auth");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    toast({ title: "Logged out successfully" });
    navigate("/");
  };

   const handleFileDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({ title: `Downloading ${fileName}...` });
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
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src={logo}
              alt="LazyCook Logo"
              className="w-10 h-10"
            />
            <img
              src={logoText}
              alt="LazyCook"
              className="h-8 opacity-90 -ml-[8px]"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => navigate("/")} variant="outline" size="sm">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button onClick={handleLogout} variant="destructive" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Welcome, <span className="text-primary">
                {user?.displayName || user?.email?.split("@")[0]}
              </span> 👋
            </h2>
            <p className="text-muted-foreground text-lg">
              Download your package and start cooking up AI-powered solutions.
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
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
              <Button
  onClick={() => handleFileDownload(installationPDF, "InstallationGuide.pdf")}
  className="w-full"
>
  <Download className="w-4 h-4 mr-2" />
  Download Guide (PDF)
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
              <Button
  onClick={() => handleFileDownload(requirementsTXT, "requirements.txt")}
  className="w-full"
>
  <Download className="w-4 h-4 mr-2" />
  Download requirements.txt
</Button>

            </div>

            {/* Upcoming Package Download (Coming Soon) */}
            <div className="bg-card border border-dashed border-primary/40 rounded-lg p-6 hover:shadow-[0_0_25px_rgba(198,61,28,0.2)] transition-all relative overflow-hidden group animate-pulse">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary/70" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">La<span style={{color:'red'}}>z</span>yCook Package</h3>
                  <p className="text-sm text-muted-foreground">Upcoming Release</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                The full La<span style={{color:'red'}}>z</span>yCook package will be available for download soon.
                No sign-in or tracking — truly <span style={{color:'red'}}>z</span>ero footprint with us.
              </p>
              <Button
                size="lg"
                variant="ghost"
                disabled
                className="w-full border-2 border-primary/40 text-primary/70 hover:bg-primary/10 hover:scale-105 transition-all duration-300 rounded-xl relative overflow-hidden group-hover:shadow-[0_0_25px_rgba(198,61,28,0.2)]"
              >
                <span className="relative z-10 flex flex-col items-center text-center leading-tight">
                  <span>Download Package</span>
                  <span className="text-xs opacity-70">Upcoming – no footprint with us</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>

          {/* Quick Start */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Start</h3>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "Install Python 3.10+",
                  desc: "Make sure you have Python 3.10 or higher installed",
                },
                {
                  num: "2",
                  title: "Get Gemini API Key",
                  desc: "Visit Google AI Studio to get your free API key",
                  link: "https://aistudio.google.com/app/apikey",
                },
                {
                  num: "3",
                  title: "Install Dependencies",
                  desc: "Install using pip or requirements.txt",
                  code: "pip install google-generativeai rich PyPDF2",
                },
                {
                  num: "4",
                  title: "Start Cooking!",
                  desc: "Run LazyCook and let the AI agents work their magic",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Get API Key →
                      </a>
                    )}
                    {step.code && (
                      <div className="mt-2 bg-muted rounded-md p-3 font-mono text-sm">
                        <code className="text-foreground">{step.code}</code>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
