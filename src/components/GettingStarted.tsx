import { useState } from "react";

export const GettingStarted = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="manual" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Getting Started
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick start guide to install, configure, and run LazyCook locally.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Prerequisites */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Prerequisites</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Python 3.10 or newer</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Internet access for API calls to Gemini</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Google AI Studio account to obtain an API key</span>
              </li>
            </ul>
          </div>

          {/* Install */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Install</h3>
            <p className="text-foreground mb-4">
              Recommended: install via <code className="bg-muted px-2 py-1 rounded">pip</code> into a virtual environment.
            </p>
            
            <div className="bg-[#1C1B1B] text-white p-6 rounded-xl font-mono text-sm overflow-x-auto relative">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <code>python -m venv .venv</code>
                  <button
                    onClick={() => copyToClipboard('python -m venv .venv', 0)}
                    className="px-3 py-1 bg-background text-foreground text-xs rounded hover:bg-background/80 transition-colors ml-4"
                  >
                    {copiedIndex === 0 ? '✓' : 'Copy'}
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <code>source .venv/bin/activate  # macOS / Linux</code>
                  <button
                    onClick={() => copyToClipboard('source .venv/bin/activate', 1)}
                    className="px-3 py-1 bg-background text-foreground text-xs rounded hover:bg-background/80 transition-colors ml-4"
                  >
                    {copiedIndex === 1 ? '✓' : 'Copy'}
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <code>.venv\Scripts\activate     # Windows (PowerShell)</code>
                  <button
                    onClick={() => copyToClipboard('.venv\\Scripts\\activate', 2)}
                    className="px-3 py-1 bg-background text-foreground text-xs rounded hover:bg-background/80 transition-colors ml-4"
                  >
                    {copiedIndex === 2 ? '✓' : 'Copy'}
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <code>pip install lazycook</code>
                  <button
                    onClick={() => copyToClipboard('pip install lazycook', 3)}
                    className="px-3 py-1 bg-background text-foreground text-xs rounded hover:bg-background/80 transition-colors ml-4"
                  >
                    {copiedIndex === 3 ? '✓' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Configure */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Configure</h3>
            <p className="text-foreground mb-4">
              Set your Gemini API key as an environment variable:
            </p>
            
            <div className="bg-[#1C1B1B] text-white p-6 rounded-xl font-mono text-sm overflow-x-auto relative">
              <div className="flex justify-between items-start">
                <code>export GEMINI_API_KEY="your_api_key_here"</code>
                <button
                  onClick={() => copyToClipboard('export GEMINI_API_KEY="your_api_key_here"', 4)}
                  className="px-3 py-1 bg-background text-foreground text-xs rounded hover:bg-background/80 transition-colors ml-4"
                >
                  {copiedIndex === 4 ? '✓' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          {/* Run */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Run</h3>
            <p className="text-foreground mb-4">
              Start LazyCook in autonomous mode:
            </p>
            
            <div className="bg-[#1C1B1B] text-white p-6 rounded-xl font-mono text-sm overflow-x-auto relative">
              <div className="flex justify-between items-start">
                <code>lazycook run --auto</code>
                <button
                  onClick={() => copyToClipboard('lazycook run --auto', 5)}
                  className="px-3 py-1 bg-background text-foreground text-xs rounded hover:bg-background/80 transition-colors ml-4"
                >
                  {copiedIndex === 5 ? '✓' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
