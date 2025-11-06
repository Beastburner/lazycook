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
    { id: "usage", label: "Example Usage" },
    { id: "future", label: "Future Enhancements" },
  ];

  return (
    <section id="documentation" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-foreground text-center px-2">
          La<span className="text-red-500">z</span>yCook — Documentation (v1.0.2)
        </h2>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-6 sm:gap-8">
          {/* Sidebar */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-border h-fit lg:sticky lg:top-24 overflow-x-auto">
            <h3 className="font-semibold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">On this page</h3>
            <div className="border-t border-border pt-3 sm:pt-4">
              <nav className="space-y-1 sm:space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`block w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors text-sm sm:text-base ${
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
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-border overflow-x-auto">
            {activeSection === "overview" && (
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">Overview</h3>
                <p className="text-sm sm:text-base text-foreground mb-4 leading-relaxed">
                  LazyCook is an autonomous multi-agent conversational assistant (version <strong>5.0</strong>) authored by
                  Harsh Bhatt. It targets Python 3.10+ and provides an end-to-end assistant that processes
                  user queries, manages documents, stores conversations, and performs iterative AI reasoning
                  loops using the Gemini 2.5 Flash model in a four-agent architecture.
                </p>
              </div>
            )}

            {activeSection === "features" && (
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">⚙️ Core Features</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-l-4 border-primary pl-3 sm:pl-4">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">Multi-Agent AI System</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Composed of four specialized agents — Generator, Analyzer, Optimizer, Validator — to ensure high-quality responses.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3 sm:pl-4">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">Smart Context Management</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Dynamically constructs contextual conversation history from both current and previous sessions.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3 sm:pl-4">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">Document Handling</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Upload, extract, and analyze <code className="bg-muted px-1.5 sm:px-2 py-0.5 rounded text-xs sm:text-sm">.txt</code>, <code className="bg-muted px-1.5 sm:px-2 py-0.5 rounded text-xs sm:text-sm">.pdf</code>, <code className="bg-muted px-1.5 sm:px-2 py-0.5 rounded text-xs sm:text-sm">.md</code>, <code className="bg-muted px-1.5 sm:px-2 py-0.5 rounded text-xs sm:text-sm">.csv</code> documents with automatic hashing and metadata tracking.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3 sm:pl-4">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">Quality Evaluation System</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Objective & subjective scoring based on accuracy, completeness, structure, and polish.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3 sm:pl-4">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">Task Scheduling</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Automatically creates and tracks tasks related to conversation insights.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-3 sm:pl-4">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">Export System</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Export past conversations to <code className="bg-muted px-1.5 sm:px-2 py-0.5 rounded text-xs sm:text-sm">.txt</code>, <code className="bg-muted px-1.5 sm:px-2 py-0.5 rounded text-xs sm:text-sm">.md</code>, or <code className="bg-muted px-1.5 sm:px-2 py-0.5 rounded text-xs sm:text-sm">.json</code> files.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground mb-2">Query Complexity Analyzer</h4>
                    <p className="text-sm text-muted-foreground">
                      Routes user queries intelligently using lightweight or full pipelines.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground mb-2">Progress & Logging</h4>
                    <p className="text-sm text-muted-foreground">
                      Uses the <code className="bg-muted px-2 py-0.5 rounded">rich</code> library for real-time progress bars and visual CLI output.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground mb-2">UTF-8 Safe Logging</h4>
                    <p className="text-sm text-muted-foreground">
                      Works seamlessly on Windows with enforced UTF-8 encoding.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "architecture" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">🧩 System Architecture</h3>
                <div className="bg-[#1C1B1B] text-white p-6 rounded-xl font-mono text-sm overflow-x-auto mb-6">
                  <pre className="whitespace-pre">{`    User
     │
     ▼
    AutonomousMultiAgentAssistant
     ├── TextFileManager  (File & Context Storage)
     ├── MultiAgentSystem  (Coordinator)
     │     ├── AIAgent [Generator]
     │     ├── AIAgent [Analyzer]
     │     ├── AIAgent [Optimizer]
     │     └── AIAgent [Validator]
     ├── QueryComplexityAnalyzer (Routing Logic)
     └── QualityMetrics (Evaluation Engine)`}</pre>
                </div>
                <p className="text-foreground leading-relaxed">
                  The architecture is designed for high-quality iterative response generation. Each query flows through 
                  the system where specialized agents collaborate to produce accurate, complete, and polished answers.
                </p>
              </div>
            )}

            {activeSection === "agents" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">🧠 Multi-Agent Roles</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left font-semibold">Agent</th>
                        <th className="border border-border p-3 text-left font-semibold">Role</th>
                        <th className="border border-border p-3 text-left font-semibold">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-semibold text-primary">Generator</td>
                        <td className="border border-border p-3">Creative</td>
                        <td className="border border-border p-3">Produces the first draft of the solution using past context and user query.</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-semibold text-primary">Analyzer</td>
                        <td className="border border-border p-3">Critical</td>
                        <td className="border border-border p-3">Evaluates the generated solution, identifying errors, gaps, and missing logic.</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-semibold text-primary">Optimizer</td>
                        <td className="border border-border p-3">Refinement</td>
                        <td className="border border-border p-3">Enhances the response clarity, detail, and contextual coherence.</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-semibold text-primary">Validator</td>
                        <td className="border border-border p-3">Assurance</td>
                        <td className="border border-border p-3">Confirms factual accuracy and completeness of the final answer.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeSection === "modules" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">📦 Modules & Classes</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">1️⃣ TextFileManager</h4>
                    <p className="text-foreground mb-3">Handles file persistence for conversations, tasks, and documents.</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-semibold mb-2">Key Methods:</p>
                      <ul className="space-y-1 text-sm">
                        <li><code className="bg-background px-2 py-0.5 rounded">save_conversation()</code> — Store user–AI interactions</li>
                        <li><code className="bg-background px-2 py-0.5 rounded">get_conversation_context()</code> — Build session + history context</li>
                        <li><code className="bg-background px-2 py-0.5 rounded">process_uploaded_file()</code> — Parse .pdf, .txt, .csv, .md</li>
                        <li><code className="bg-background px-2 py-0.5 rounded">get_storage_stats()</code> — Analyze storage usage</li>
                        <li><code className="bg-background px-2 py-0.5 rounded">export_conversations_to_file()</code> — Export chats to multiple formats</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">2️⃣ AIAgent</h4>
                    <p className="text-foreground">Wraps Google Gemini 2.5 Flash model with async processing and role-based prompts.</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">3️⃣ QueryComplexityAnalyzer</h4>
                    <p className="text-foreground">Classifies user queries into <code className="bg-muted px-2 py-0.5 rounded">simple</code>, <code className="bg-muted px-2 py-0.5 rounded">medium</code>, or <code className="bg-muted px-2 py-0.5 rounded">complex</code>, determining which agents to use.</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">4️⃣ QualityMetrics</h4>
                    <p className="text-foreground">Calculates response quality using weighted scores (completeness, accuracy, structure, etc.)</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">5️⃣ MultiAgentSystem</h4>
                    <p className="text-foreground">Main orchestrator coordinating the 4 AI agents in iterative loops to reach a quality threshold.</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">6️⃣ AutonomousMultiAgentAssistant</h4>
                    <p className="text-foreground">High-level interface managing conversations, context, and task scheduling.</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "files" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">💾 Supported File Types</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left font-semibold">Type</th>
                        <th className="border border-border p-3 text-left font-semibold">Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono">.txt, .md, .csv</td>
                        <td className="border border-border p-3">UTF-8 read</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono">.pdf</td>
                        <td className="border border-border p-3">Extract text using PyPDF2</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono">Others</td>
                        <td className="border border-border p-3">Metadata only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeSection === "logging" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">💬 Logging System</h3>
                <p className="text-foreground mb-4">
                  <strong>File:</strong> <code className="bg-muted px-2 py-1 rounded">multi_agent_assistant.log</code>
                </p>
                <div className="bg-[#1C1B1B] text-white p-6 rounded-xl font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre">{`2025-10-31 13:22:51 - INFO - Query classified as: complex
2025-10-31 13:22:52 - INFO - Iteration 1: Objective=0.913, Subjective=0.867, Combined=0.890
2025-10-31 13:22:52 - INFO - ✓ Quality threshold met: 0.890 >= 0.880`}</pre>
                </div>
              </div>
            )}

            {activeSection === "usage" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">🚀 Example Usage</h3>
                <div className="bg-[#1C1B1B] text-white p-6 rounded-xl overflow-x-auto">
                  <pre className="font-mono text-sm whitespace-pre">{`from LazyCook5_withJSON import AutonomousMultiAgentAssistant
import asyncio

assistant = AutonomousMultiAgentAssistant(
    gemini_api_key="YOUR_API_KEY_HERE"
)

async def run():
    response = await assistant.process_user_message(
        user_id="user123",
        message="Explain binary search in Python with example."
    )
    print(response)

asyncio.run(run())`}</pre>
                </div>
              </div>
            )}

            {activeSection === "future" && (
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">🧱 Future Enhancements</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Multi-model fusion (Gemini + LLaMA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Long-term vector memory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Web dashboard for analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Voice integration (SpeechRecognition)</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
