import { useState } from "react";
import { Copy, Check, ExternalLink, Key, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GeminiKeyGuide = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: "Go to Google AI Studio",
      description: "Visit Google AI Studio to access the Gemini API",
      link: "https://aistudio.google.com/app/apikey",
      linkText: "Open Google AI Studio"
    },
    {
      title: "Sign in with Google Account",
      description: "Use your Google account to sign in to AI Studio"
    },
    {
      title: "Create API Key",
      description: "Click on 'Get API Key' or 'Create API Key' button"
    },
    {
      title: "Copy Your API Key",
      description: "Copy the generated API key and store it securely",
      warning: "Keep your API key secure and never share it publicly"
    },
    {
      title: "Set Up Environment Variable",
      description: "Add your API key to your environment configuration",
      code: "GEMINI_API_KEY=your_api_key_here"
    }
  ];

  return (
    <section id="gemini-key" className="py-24 bg-foreground/[0.02] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-3xl mb-6 animate-float">
              <Key className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Get Your <span className="text-gradient">Gemini API Key</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Follow these simple steps to obtain your Google Gemini API key
            </p>
          </div>

          {/* Progress Line */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {steps.map((_, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border-2 border-primary/40">
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-12 md:w-20 h-1 bg-primary/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(198,61,28,0.2)] hover:border-primary/40 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {index + 1}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      {step.description}
                    </p>

                    {/* Link */}
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg hover:underline transition-all duration-200"
                      >
                        {step.linkText}
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}

                    {/* Warning */}
                    {step.warning && (
                      <div className="mt-4 p-4 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-xl flex items-start gap-3">
                        <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-yellow-700 dark:text-yellow-400 font-medium">
                          ⚠️ {step.warning}
                        </p>
                      </div>
                    )}

                    {/* Code Block */}
                    {step.code && (
                      <div className="mt-4 relative">
                        <div className="bg-foreground/95 rounded-xl p-5 font-mono text-sm border-2 border-primary/30">
                          <code className="text-background">{step.code}</code>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-3 right-3 bg-primary/20 hover:bg-primary/30 text-primary hover:scale-105 transition-all duration-200"
                          onClick={() => copyToClipboard(step.code!, index)}
                        >
                          {copiedIndex === index ? (
                            <><Check className="h-4 w-4 mr-1" /> Copied!</>
                          ) : (
                            <><Copy className="h-4 w-4 mr-1" /> Copy</>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/30 rounded-3xl shadow-xl animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Shield className="w-7 h-7 text-primary" />
              Important Notes
            </h3>
            <ul className="space-y-3">
              {[
                "Free tier includes generous usage limits for testing",
                "API keys can be regenerated if compromised",
                "Monitor your usage in the Google Cloud Console",
                "Consider setting up usage quotas to control costs"
              ].map((note, idx) => (
                <li key={idx} className="flex items-center gap-3 text-muted-foreground text-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
