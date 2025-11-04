import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TerminalDemo } from "@/components/TerminalDemo";
import { VideoSection } from "@/components/VideoSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TerminalDemo />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
