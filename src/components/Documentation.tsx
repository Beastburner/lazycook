import { useState } from "react";

export const Documentation = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Core Features" },
    { id: "architecture", label: "System Architecture" },
    { id: "agents", label: "Multi-Agent Roles" },
    { id: "modules", label: "Modules & Classes" },
    { id: "files", label: "Supported File Types" },
    { id: "logging", label: "Logging System" },
  ];

  return (
    <section id="documentation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
          LazyCook — Documentation (v5.0)
        </h2>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-border h-fit lg:sticky lg:top-24">
            <h3 className="font-semibold mb-4 text-foreground">On this page</h3>
            <div className="border-t border-border pt-4">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
            {activeSection === "overview" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Overview</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  LazyCook is an autonomous multi-agent conversational assistant (version <strong>5.0</strong>) authored by
                  Harsh Bhatt. It targets Python 3.10+ and provides an end-to-end assistant that processes
                  user queries, manages documents, stores conversations, and performs iterative AI reasoning
                  loops using the Gemini 2.5 Flash model in a four-agent architecture.
                </p>
              </div>
            )}

            {activeSection === "features" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Core Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Multi-Agent AI System</span>
                    </h4>
                    <p className="text-sm text-muted-foreground ml-5">
                      Generator, Analyzer, Optimizer, Validator to produce high-quality outputs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Smart Context Management</span>
                    </h4>
                    <p className="text-sm text-muted-foreground ml-5">
                      Builds context from current session plus historical conversation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Document Handling</span>
                    </h4>
                    <p className="text-sm text-muted-foreground ml-5">
                      Upload and parse .txt, .md, .csv, .json, .pdf files.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Quality Evaluation</span>
                    </h4>
                    <p className="text-sm text-muted-foreground ml-5">
                      Objective & subjective scoring using dedicated agents.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "architecture" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">System Architecture</h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  LazyCook employs a <strong>four-agent architecture</strong> coordinated by a MultiAgentSystem:
                </p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">1.</span>
                    <span><strong>Generator:</strong> Creates initial responses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">2.</span>
                    <span><strong>Analyzer:</strong> Evaluates quality and context</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">3.</span>
                    <span><strong>Optimizer:</strong> Refines and improves outputs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">4.</span>
                    <span><strong>Validator:</strong> Ensures correctness and completeness</span>
                  </li>
                </ul>
              </div>
            )}

            {activeSection === "agents" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Multi-Agent Roles</h3>
                <p className="text-foreground leading-relaxed">
                  Each agent has a specific role in the pipeline. The Generator creates content,
                  the Analyzer reviews it, the Optimizer enhances it, and the Validator performs
                  final quality checks before delivering the response to the user.
                </p>
              </div>
            )}

            {activeSection === "modules" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Modules & Classes</h3>
                <p className="text-foreground leading-relaxed">
                  The codebase is organized into modules for document handling, agent coordination,
                  context management, and conversation storage. Key classes include DocumentHandler,
                  MultiAgentSystem, ContextManager, and ConversationLogger.
                </p>
              </div>
            )}

            {activeSection === "files" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Supported File Types</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['.txt', '.md', '.csv', '.json', '.pdf', '.docx'].map((type) => (
                    <div key={type} className="bg-muted px-4 py-3 rounded-lg text-center font-mono text-sm">
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "logging" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Logging System</h3>
                <p className="text-foreground leading-relaxed">
                  LazyCook includes a comprehensive logging system that tracks all conversations,
                  agent interactions, and system events. Logs can be exported in multiple formats
                  for analysis and debugging.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
