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
    <section id="gemini-key" className="py-16 sm:py-20 md:py-24 bg-foreground/[0.02] relative overflow-hidden">
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
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-3xl mb-4 sm:mb-6 animate-float">
              <Key className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground px-2">
              Get Your <span className="text-gradient">Gemini API Key</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              Follow these simple steps to obtain your Google Gemini API key
            </p>
          </div>

          {/* Progress Line */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up px-2" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-center sm:justify-between max-w-2xl mx-auto gap-1 sm:gap-2">
              {steps.map((_, idx) => (
                <div key={idx} className="flex items-center flex-shrink-0">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border-2 border-primary/40 text-xs sm:text-sm md:text-base">
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-4 sm:w-8 md:w-12 lg:w-20 h-0.5 sm:h-1 bg-primary/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4 sm:space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 sm:p-8 hover:shadow-[0_0_40px_rgba(198,61,28,0.2)] hover:border-primary/40 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg sm:text-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {index + 1}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">
                      {step.description}
                    </p>

                    {/* Link */}
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm sm:text-base md:text-lg hover:underline transition-all duration-200 break-words"
                      >
                        <span className="break-all">{step.linkText}</span>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      </a>
                    )}

                    {/* Warning */}
                    {step.warning && (
                      <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-xl flex items-start gap-2 sm:gap-3">
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-yellow-700 dark:text-yellow-400 font-medium">
                          ⚠️ {step.warning}
                        </p>
                      </div>
                    )}

                    {/* Code Block */}
                    {step.code && (
                      <div className="mt-3 sm:mt-4 relative">
                        <div className="bg-foreground/95 rounded-xl p-3 sm:p-4 md:p-5 pr-12 sm:pr-14 md:pr-16 font-mono text-xs sm:text-sm border-2 border-primary/30 overflow-x-auto">
                          <code className="text-background whitespace-pre-wrap break-all">{step.code}</code>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 md:top-3 md:right-3 bg-primary/20 hover:bg-primary/30 text-primary hover:scale-105 transition-all duration-200 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 min-w-[60px] sm:min-w-[80px]"
                          onClick={() => copyToClipboard(step.code!, index)}
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                              <span className="ml-1 hidden xs:inline sm:inline">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                              <span className="ml-1 hidden xs:inline sm:inline">Copy</span>
                            </>
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
          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/30 rounded-3xl shadow-xl animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground flex items-center gap-2 sm:gap-3">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              Important Notes
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Free tier includes generous usage limits for testing",
                "API keys can be regenerated if compromised",
                "Monitor your usage in the Google Cloud Console",
                "Consider setting up usage quotas to control costs"
              ].map((note, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base md:text-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></div>
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
