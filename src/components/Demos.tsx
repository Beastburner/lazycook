import { Play, Video } from "lucide-react";

export const Demos = () => {
  return (
    <section id="videos" className="py-24 bg-background relative overflow-hidden">
      {/* Floating Gradient Orbs */}
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            See LazyCook <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how LazyCook's multi-agent system delivers intelligent results with minimal prompting
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Demo 1 */}
          <div className="group relative cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative bg-foreground/95 aspect-video rounded-3xl flex items-center justify-center overflow-hidden border-2 border-primary/30 hover:border-primary/60 shadow-2xl hover:shadow-[0_0_50px_rgba(198,61,28,0.4)] transition-all duration-500 hover:scale-[1.02]">
              {/* Terminal-style header */}
              <div className="absolute top-0 left-0 right-0 bg-foreground border-b border-primary/30 px-6 py-3 flex items-center gap-3">
                <Video className="w-5 h-5 text-primary" />
                <span className="text-background/80 font-mono text-sm">demo-1.mp4</span>
                <div className="ml-auto flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center p-8">
                <p className="text-background/70 text-lg mb-8 font-mono">$ lazycook run --auto</p>
                <div className="w-20 h-20 mx-auto flex items-center justify-center bg-primary/20 rounded-full hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                </div>
                <p className="text-background/60 mt-6 font-mono text-sm">Running LazyCook</p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Demo 2 */}
          <div className="group relative cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-foreground/95 aspect-video rounded-3xl flex items-center justify-center overflow-hidden border-2 border-primary/30 hover:border-primary/60 shadow-2xl hover:shadow-[0_0_50px_rgba(198,61,28,0.4)] transition-all duration-500 hover:scale-[1.02]">
              {/* Terminal-style header */}
              <div className="absolute top-0 left-0 right-0 bg-foreground border-b border-primary/30 px-6 py-3 flex items-center gap-3">
                <Video className="w-5 h-5 text-primary" />
                <span className="text-background/80 font-mono text-sm">demo-2.mp4</span>
                <div className="ml-auto flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center p-8">
                <p className="text-background/70 text-lg mb-8 font-mono">Multi-Agent Collaboration</p>
                <div className="w-20 h-20 mx-auto flex items-center justify-center bg-primary/20 rounded-full hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                </div>
                <p className="text-background/60 mt-6 font-mono text-sm">Output Generation</p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="/auth"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-semibold text-lg shadow-lg hover:shadow-[0_0_30px_rgba(198,61,28,0.5)] transition-all duration-300 hover:scale-105"
          >
            Start Cooking with AI
            <Play className="w-5 h-5" fill="currentColor" />
          </a>
        </div>
      </div>
    </section>
  );
};
