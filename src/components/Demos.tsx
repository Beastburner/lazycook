import { Play, Video, Maximize2 } from "lucide-react";
import { useRef, useState } from "react";
import demo1 from "@/assets/demo1.mp4";
import demo2 from "@/assets/demo2.mp4";
import heroBg from "@/assets/hero-bg.jpg";

export const Demos = () => {
  // Simple overlay state so the poster shows a macOS-like overlay until play
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);

  const playVideo1 = () => {
    v1Ref.current?.play();
  };
  const playVideo2 = () => {
    v2Ref.current?.play();
  };

  const enterFullscreen = async (el: HTMLVideoElement | null) => {
    if (!el) return;
    try {
      // Standard Fullscreen API
      if (el.requestFullscreen) {
        await el.requestFullscreen();
        return;
      }
      // Safari iOS specific
      const anyEl = el as any;
      if (anyEl.webkitEnterFullscreen) {
        anyEl.webkitEnterFullscreen();
        return;
      }
      if (anyEl.webkitRequestFullscreen) {
        anyEl.webkitRequestFullscreen();
        return;
      }
    } catch (e) {
      // no-op; best-effort
    }
  };
  return (
    <section id="videos" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Floating Gradient Orbs */}
      <div className="absolute bottom-0 left-10 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground px-2">
            See La<span className="text-red-500">z</span>yCook <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Watch how La<span className="text-red-500">z</span>yCook's multi-agent system delivers intelligent results with minimal prompting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Demo 1 */}
          <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative bg-foreground/95 aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 shadow-2xl hover:shadow-[0_0_50px_rgba(198,61,28,0.4)] transition-all duration-500 hover:scale-[1.02]">
              {/* Terminal-style header */}
              <div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0 z-30 bg-foreground/95 border-b border-white/10 px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between overflow-hidden rounded-t-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-primary text-sm sm:text-base leading-none">›</span>
                  <span className="text-background/80 font-mono text-xs sm:text-sm truncate">lazycook-terminal</span>
                </div>
                <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] ring-1 ring-white/20"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] ring-1 ring-white/20"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] ring-1 ring-white/20"></span>
                </div>
              </div>
              {/* macOS style cover overlay (shows until video plays) */}
              {!isPlaying1 && (
                <button
                  type="button"
                  aria-label="Play demo video"
                  onClick={playVideo1}
                  className="absolute inset-0 z-20 flex flex-col justify-between pointer-events-auto"
                >
                  {/* Top gradient */}
                  <div className="h-16 sm:h-20 w-full bg-gradient-to-b from-black/40 to-transparent" />
                  {/* Center play button */}
                  <div className="flex-1 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-white transition-transform duration-200 active:scale-95">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 translate-x-0.5" fill="currentColor" />
                    </span>
                  </div>
                  {/* Bottom faux control bar */}
                  <div className="px-5 sm:px-8 pb-4 sm:pb-6 w-full">
                    <div className="mx-auto w-10/12 sm:w-3/4 h-9 rounded-xl bg-black/35 border border-white/10 backdrop-blur-md flex items-center gap-3 px-4">
                      <div className="w-0 h-0 border-y-6 border-y-transparent border-l-[12px] border-l-white/90 opacity-90" />
                      <div className="flex-1 h-1.5 rounded-full bg-white/25">
                        <div className="h-1.5 w-1/4 bg-white rounded-full" />
                      </div>
                      <div className="w-8 h-2 rounded-full bg-white/30" />
                    </div>
                  </div>
                </button>
              )}

              {/* Video */}
              <video
                ref={v1Ref}
                src={demo1}
                controls
                playsInline
                preload="metadata"
                poster={heroBg}
                className="absolute inset-0 z-0 w-full h-full object-cover bg-black"
                onPlay={() => setIsPlaying1(true)}
                onPause={() => setIsPlaying1(false)}
                onEnded={() => setIsPlaying1(false)}
              >
                Your browser does not support the video tag.
              </video>
              {/* Mobile fullscreen button */}
              <button
                type="button"
                aria-label="Enter fullscreen"
                onClick={() => enterFullscreen(v1Ref.current)}
                className="md:hidden absolute bottom-3 right-3 z-40 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white border border-white/20 backdrop-blur-md active:scale-95"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              {/* Glow effect on hover (non-interactive) */}
              <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Demo 2 */}
          <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-foreground/95 aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 shadow-2xl hover:shadow-[0_0_50px_rgba(198,61,28,0.4)] transition-all duration-500 hover:scale-[1.02]">
              {/* Terminal-style header */}
              <div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0 z-30 bg-foreground/95 border-b border-white/10 px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between overflow-hidden rounded-t-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-primary text-sm sm:text-base leading-none">›</span>
                  <span className="text-background/80 font-mono text-xs sm:text-sm truncate">lazycook-terminal</span>
                </div>
                <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] ring-1 ring-white/20"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] ring-1 ring-white/20"></span>
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] ring-1 ring-white/20"></span>
                </div>
              </div>
              {/* macOS style cover overlay (shows until video plays) */}
              {!isPlaying2 && (
                <button
                  type="button"
                  aria-label="Play demo video"
                  onClick={playVideo2}
                  className="absolute inset-0 z-20 flex flex-col justify-between pointer-events-auto"
                >
                  {/* Top gradient */}
                  <div className="h-16 sm:h-20 w-full bg-gradient-to-b from-black/40 to-transparent" />
                  {/* Center play button */}
                  <div className="flex-1 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-white transition-transform duration-200 active:scale-95">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 translate-x-0.5" fill="currentColor" />
                    </span>
                  </div>
                  {/* Bottom faux control bar */}
                  <div className="px-5 sm:px-8 pb-4 sm:pb-6 w-full">
                    <div className="mx-auto w-10/12 sm:w-3/4 h-9 rounded-xl bg-black/35 border border-white/10 backdrop-blur-md flex items-center gap-3 px-4">
                      <div className="w-0 h-0 border-y-6 border-y-transparent border-l-[12px] border-l-white/90 opacity-90" />
                      <div className="flex-1 h-1.5 rounded-full bg-white/25">
                        <div className="h-1.5 w-1/4 bg-white rounded-full" />
                      </div>
                      <div className="w-8 h-2 rounded-full bg-white/30" />
                    </div>
                  </div>
                </button>
              )}

              {/* Video */}
              <video
                ref={v2Ref}
                src={demo2}
                controls
                playsInline
                preload="metadata"
                poster={heroBg}
                className="absolute inset-0 z-0 w-full h-full object-cover bg-black"
                onPlay={() => setIsPlaying2(true)}
                onPause={() => setIsPlaying2(false)}
                onEnded={() => setIsPlaying2(false)}
              >
                Your browser does not support the video tag.
              </video>
              {/* Mobile fullscreen button */}
              <button
                type="button"
                aria-label="Enter fullscreen"
                onClick={() => enterFullscreen(v2Ref.current)}
                className="md:hidden absolute bottom-3 right-3 z-40 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white border border-white/20 backdrop-blur-md active:scale-95"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              {/* Glow effect on hover (non-interactive) */}
              <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="/auth"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-[0_0_30px_rgba(198,61,28,0.5)] transition-all duration-300 hover:scale-105"
          >
            Start Cooking with AI
            <Play className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
          </a>
        </div>
      </div>
    </section>
  );
};
