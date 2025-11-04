export const About = () => {
  return (
    <section id="about" className="py-20 bg-[#1C1B1B] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About LazyCook
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-white/90">
            LazyCook (v6.0) is an autonomous multi-agent conversational assistant
            designed to intelligently process user queries, manage documents,
            store conversations, and maintain iterative AI reasoning loops. It uses
            the Gemini 2.5 Flash model and a four-agent architecture to deliver
            high-quality, context-aware responses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-background text-foreground p-6 rounded-2xl border border-border/50">
            <h3 className="text-xl font-semibold mb-3 text-primary">Language & Runtime</h3>
            <p className="text-sm text-muted-foreground">
              Python 3.10+ (async-first). Works on Windows, macOS, and Linux.
            </p>
          </div>

          <div className="bg-background text-foreground p-6 rounded-2xl border border-border/50">
            <h3 className="text-xl font-semibold mb-3 text-primary">Primary Dependencies</h3>
            <p className="text-sm font-mono text-muted-foreground">
              google-generativeai, rich, PyPDF2
            </p>
          </div>

          <div className="bg-background text-foreground p-6 rounded-2xl border border-border/50">
            <h3 className="text-xl font-semibold mb-3 text-primary">Architecture</h3>
            <p className="text-sm text-muted-foreground">
              Four cooperating agents: Generator, Analyzer, Optimizer, Validator coordinated by a MultiAgentSystem.
            </p>
          </div>

          <div className="bg-background text-foreground p-6 rounded-2xl border border-border/50">
            <h3 className="text-xl font-semibold mb-3 text-primary">Key Goals</h3>
            <p className="text-sm text-muted-foreground">
              High-quality outputs, robust context management, easy export, and CLI-first developer ergonomics.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-[#2A2A2A] px-6 py-3 rounded-lg border border-white/10">
            <code className="text-white font-mono">
              lazycook run --auto
              <button 
                className="ml-3 px-3 py-1 bg-background text-foreground text-xs rounded hover:bg-background/80 transition-colors"
                onClick={() => navigator.clipboard.writeText('lazycook run --auto')}
              >
                Copy
              </button>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};
