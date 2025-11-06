import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

export const TerminalDemo = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const terminalSequence = [
    { type: "input", text: "pip install lazycook and run the file" },
    { type: "output", text: "🧠 LazyCook v1.0 initialized..." },
    { type: "output", text: "✓ Generator Agent: Creating solution..." },
    { type: "output", text: "✓ Analyzer Agent: Evaluating quality..." },
    { type: "output", text: "✓ Optimizer Agent: Refining output..." },
    { type: "output", text: "✓ Validator Agent: Final verification..." },
    { type: "success", text: "✅ Task completed! Quality score: 0.947" },
  ];

  useEffect(() => {
    if (currentIndex < terminalSequence.length) {
      const timer = setTimeout(() => {
        setCommands(prev => [...prev, terminalSequence[currentIndex].text]);
        setCurrentIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      // Reset after completion
      const resetTimer = setTimeout(() => {
        setCommands([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-foreground/95 rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-300">
        {/* Terminal Header */}
        <div className="bg-foreground/90 px-6 py-3 flex items-center gap-3 border-b border-primary/20">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="text-background/80 font-mono text-sm">lazycook-terminal</span>
          <div className="ml-auto flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
          {commands.map((cmd, idx) => (
            <div
              key={idx}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {terminalSequence[idx]?.type === "input" && (
                <div className="text-primary">{cmd}</div>
              )}
              {terminalSequence[idx]?.type === "output" && (
                <div className="text-background/70 ml-4">{cmd}</div>
              )}
              {terminalSequence[idx]?.type === "success" && (
                <div className="text-green-400 ml-4 font-bold">{cmd}</div>
              )}
            </div>
          ))}
          {currentIndex < terminalSequence.length && (
            <div className="inline-block w-2 h-4 bg-primary animate-pulse ml-1"></div>
          )}
        </div>
      </div>
    </div>
  );
};
