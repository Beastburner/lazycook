import { useState } from "react";
import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
}

export const VideoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const videos: Video[] = [
    {
      id: "1",
      title: "Getting Started with LazyCook",
      description: "Learn the basics in under 3 minutes",
      thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=450&fit=crop",
      duration: "2:45"
    },
    {
      id: "2",
      title: "Advanced Recipe Generation",
      description: "Unlock the full power of AI cooking",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=450&fit=crop",
      duration: "5:20"
    },
    {
      id: "3",
      title: "Building Your Digital Cookbook",
      description: "Save and organize your favorite recipes",
      thumbnail: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=450&fit=crop",
      duration: "3:15"
    }
  ];

  return (
    <section id="videos" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
            Watch & Learn
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Quick tutorials to master LazyCook in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="bg-background rounded-full p-6 transform transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-12 h-12 text-primary fill-primary" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-[#1C1B1B]/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 bg-card border border-border/50">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">Want to see more?</p>
          <a
            href="#"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Visit our YouTube channel
            <svg
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
