import { useEffect, useState, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Command {
  prompt: string;
  command: string;
  output: string[];
}

export const TerminalDemo = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [visibleCommands, setVisibleCommands] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const commands: Command[] = [
    {
      prompt: "lazycook",
      command: "lazycook cook --ingredients \"chicken, rice, garlic\"",
      output: [
        "🔍 Analyzing ingredients...",
        "🤖 AI generating recipe...",
        "✨ Perfect! Here's your recipe:",
        "",
        "📝 Garlic Chicken Rice",
        "⏱️  Prep time: 10 mins | Cook time: 25 mins",
        "",
        "Ingredients:",
        "• 2 chicken breasts",
        "• 1 cup rice",
        "• 4 cloves garlic, minced",
        "",
        "Instructions:",
        "1. Season and cook chicken in a pan",
        "2. Add minced garlic and sauté",
        "3. Cook rice separately and combine",
      ]
    },
    {
      prompt: "lazycook",
      command: "lazycook suggest --cuisine italian",
      output: [
        "🇮🇹 Searching Italian recipes...",
        "✓ Found 3 perfect matches!",
        "",
        "1. Classic Carbonara",
        "2. Margherita Pizza",
        "3. Tiramisu",
      ]
    },
    {
      prompt: "lazycook",
      command: "lazycook save --recipe \"Garlic Chicken Rice\"",
      output: [
        "💾 Saving to your cookbook...",
        "✓ Recipe saved successfully!",
        "📚 Total recipes: 15",
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let count = 0;
            const interval = setInterval(() => {
              if (count < commands.length) {
                setVisibleCommands(count + 1);
                count++;
              } else {
                clearInterval(interval);
              }
            }, 600);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="manual" ref={sectionRef} className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Quick Start Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get cooking in seconds with simple CLI commands
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {commands.map((cmd, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index < visibleCommands
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-[#1C1B1B] rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                {/* Terminal Header */}
                <div className="bg-[#2D2D2D] px-4 py-3 flex items-center justify-between border-b border-primary/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono">terminal</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 px-2 text-gray-400 hover:text-primary hover:bg-primary/10"
                    onClick={() => copyToClipboard(cmd.command, index)}
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  {/* Command Input */}
                  <div className="flex items-center mb-4">
                    <span className="text-primary mr-2">$</span>
                    <span className="text-green-400">{cmd.prompt}</span>
                    <span className="text-gray-300 ml-2">{cmd.command}</span>
                  </div>

                  {/* Command Output */}
                  <div className="space-y-1 text-gray-300">
                    {cmd.output.map((line, i) => (
                      <div
                        key={i}
                        className="leading-relaxed"
                        style={{
                          animation: index < visibleCommands 
                            ? `fadeIn 0.3s ease-out ${i * 0.05}s forwards`
                            : 'none',
                          opacity: 0
                        }}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Installation Instructions */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Installation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Using npm:</h4>
                <div className="bg-[#1C1B1B] rounded-lg p-4 font-mono text-sm text-green-400">
                  npm install -g lazycook
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Using pip:</h4>
                <div className="bg-[#1C1B1B] rounded-lg p-4 font-mono text-sm text-green-400">
                  pip install lazycook
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
