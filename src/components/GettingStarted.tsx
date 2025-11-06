import { useState } from "react";
import { Copy, Check, Terminal, Box, Cog, Rocket } from "lucide-react";

export const GettingStarted = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="manual" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Floating Gradient Orbs */}
      <div className="absolute top-0 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Getting <span className="text-gradient">Started</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Quick start guide to install, configure, and run LazyCook locally in minutes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {/* Prerequisites */}
          <div className="group bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,61,28,0.15)] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <Box className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Prerequisites</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4 ml-2">
              {[
                "Python 3.10 or newer",
                "Internet access for API calls to Gemini",
                "Google AI Studio account to obtain an API key"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Install */}
          <div className="group bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,61,28,0.15)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <Terminal className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Install</h3>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Recommended: install via <code className="bg-foreground/10 px-2 sm:px-3 py-1 rounded-lg text-primary font-mono text-sm sm:text-base">pip</code> into a virtual environment.
            </p>
            
            <div className="bg-foreground/95 text-background p-4 sm:p-6 rounded-2xl font-mono text-xs sm:text-sm space-y-3 sm:space-y-4 border-2 border-primary/30 shadow-xl overflow-x-auto">
              {[
                { cmd: "python -m venv .venv", idx: 0 },
                { cmd: "source .venv/bin/activate  # macOS / Linux", idx: 1 },
                { cmd: ".venv\\Scripts\\activate     # Windows", idx: 2 },
                { cmd: "pip install lazycook", idx: 3 }
              ].map(({ cmd, idx }) => (
                <div key={idx} className="flex justify-between items-center bg-background/5 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-background/10 transition-all duration-200 group/cmd gap-2">
                  <code className="flex-1 break-all sm:break-normal">{cmd}</code>
                  <button
                    onClick={() => copyToClipboard(cmd, idx)}
                    className="ml-2 sm:ml-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-all duration-200 flex items-center gap-1 sm:gap-2 text-xs font-sans hover:scale-105 flex-shrink-0"
                  >
                    {copiedIndex === idx ? (
                      <><Check className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Copied!</span></>
                    ) : (
                      <><Copy className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Copy</span></>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Configure */}
          <div className="group bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,61,28,0.15)] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <Cog className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Configure</h3>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Set your Gemini API key as an environment variable:
            </p>
            
            <div className="bg-foreground/95 text-background p-4 sm:p-6 rounded-2xl font-mono text-xs sm:text-sm border-2 border-primary/30 shadow-xl overflow-x-auto">
              <div className="flex justify-between items-center bg-background/5 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-background/10 transition-all duration-200 gap-2">
                <code className="flex-1 break-all sm:break-normal">export GEMINI_API_KEY="your_api_key_here"</code>
                <button
                  onClick={() => copyToClipboard('export GEMINI_API_KEY="your_api_key_here"', 4)}
                  className="ml-2 sm:ml-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-all duration-200 flex items-center gap-1 sm:gap-2 text-xs font-sans hover:scale-105 flex-shrink-0"
                >
                  {copiedIndex === 4 ? (
                    <><Check className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Copied!</span></>
                  ) : (
                    <><Copy className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">Copy</span></>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Run */}
          <div className="group bg-gradient-to-br from-card via-card to-card/50 p-6 sm:p-8 rounded-3xl border-2 border-primary/40 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(198,61,28,0.3)] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300 animate-pulse">
                <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Run</h3>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Start LazyCook in autonomous mode and watch the magic happen:
            </p>
            
            <div className="bg-foreground/95 text-background p-4 sm:p-6 rounded-2xl font-mono text-xs sm:text-sm border-2 border-primary/50 shadow-2xl overflow-x-auto">
              <div className="flex justify-between items-center bg-background/5 px-3 sm:px-4 py-3 sm:py-4 rounded-lg hover:bg-background/10 transition-all duration-200 gap-2">
                <code className="flex-1 text-primary text-base sm:text-lg break-all sm:break-normal">lazycook run --auto</code>
                <button
                  onClick={() => copyToClipboard('lazycook run --auto', 5)}
                  className="ml-2 sm:ml-4 px-3 sm:px-5 py-2 sm:py-3 bg-primary/30 hover:bg-primary/40 text-primary rounded-lg transition-all duration-200 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-sans hover:scale-105 font-bold flex-shrink-0"
                >
                  {copiedIndex === 5 ? (
                    <><Check className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="hidden sm:inline">Copied!</span></>
                  ) : (
                    <><Copy className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="hidden sm:inline">Copy</span></>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
