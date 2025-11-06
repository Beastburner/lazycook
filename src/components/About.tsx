import { TerminalDemo } from "./TerminalDemo";
import { Sparkles, Zap, Database, FileText } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-foreground/[0.02] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            About <span>La<span className="text-red-500">z</span>yCook</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            An <strong className="text-primary">autonomous multi-agent AI assistant</strong> that runs in your terminal. 
            Using <strong className="text-primary">Gemini 2.5 Flash</strong> with a <strong className="text-primary">four-agent architecture</strong> 
            for maximum output with minimal prompting.
          </p>
        </div>

        {/* Terminal Demo */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <TerminalDemo />
        </div>

        {/* Version & Architecture Overview */}
        <div className="max-w-6xl mx-auto mb-16 bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-[0_0_50px_rgba(198,61,28,0.3)] transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center group">
              <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">v1.0.2</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Current Version</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">Python</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">3.10+ Required</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">4 Agents</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Multi-Agent System</div>
            </div>
          </div>
          
          <div className="border-t-2 border-primary/20 pt-8">
            <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              System Architecture
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La<span className="text-red-500">z</span>yCook employs a sophisticated four-agent architecture where each agent plays a specialized role:
              <strong className="text-foreground"> Generator</strong> creates initial solutions, 
              <strong className="text-foreground"> Analyzer</strong> evaluates quality, 
              <strong className="text-foreground"> Optimizer</strong> refines outputs, and 
              <strong className="text-foreground"> Validator</strong> ensures accuracy. This collaborative approach produces high-quality, 
              reliable responses with minimal user input.
            </p>
          </div>
        </div>

        {/* Goals Grid with Glassmorphism */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { 
              icon: Zap, 
              title: "Autonomous", 
              description: "Minimal prompting, maximum results through intelligent agent collaboration",
              color: "text-yellow-500"
            },
            { 
              icon: Sparkles, 
              title: "Multi-Agent", 
              description: "Four specialized AI agents working together for quality assurance",
              color: "text-blue-500"
            },
            { 
              icon: Database, 
              title: "Context-Aware", 
              description: "Maintains conversation history and learns from past interactions",
              color: "text-green-500"
            },
            { 
              icon: FileText, 
              title: "Document Processing", 
              description: "Handles PDFs, text files, markdown, and CSV with metadata tracking",
              color: "text-purple-500"
            }
          ].map((goal, index) => {
            const IconComponent = goal.icon;
            return (
              <div 
                key={index}
                className="group bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(198,61,28,0.2)] hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className={`w-8 h-8 ${goal.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{goal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
