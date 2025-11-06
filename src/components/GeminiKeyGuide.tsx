import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
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
      warning: "⚠️ Keep your API key secure and never share it publicly"
    },
    {
      title: "Set Up Environment Variable",
      description: "Add your API key to your environment configuration",
      code: "GEMINI_API_KEY=your_api_key_here"
    }
  ];

  return (
    <section id="gemini-key" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How to Get Your Gemini API Key
            </h2>
            <p className="text-muted-foreground text-lg">
              Follow these simple steps to obtain your Google Gemini API key
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {step.description}
                    </p>

                    {/* Link */}
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        {step.linkText}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {/* Warning */}
                    {step.warning && (
                      <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                        <p className="text-sm text-yellow-700 dark:text-yellow-400">
                          {step.warning}
                        </p>
                      </div>
                    )}

                    {/* Code Block */}
                    {step.code && (
                      <div className="mt-3 relative">
                        <div className="bg-muted rounded-md p-4 font-mono text-sm">
                          <code className="text-foreground">{step.code}</code>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(step.code!, index)}
                        >
                          {copiedIndex === index ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
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
          <div className="mt-8 p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              📌 Important Notes
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Free tier includes generous usage limits for testing</li>
              <li>• API keys can be regenerated if compromised</li>
              <li>• Monitor your usage in the Google Cloud Console</li>
              <li>• Consider setting up usage quotas to control costs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
