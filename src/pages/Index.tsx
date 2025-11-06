import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { GettingStarted } from "@/components/GettingStarted";
import { GeminiKeyGuide } from "@/components/GeminiKeyGuide";
import { Demos } from "@/components/Demos";
import { Documentation } from "@/components/Documentation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <GettingStarted />
        <GeminiKeyGuide />
        <Demos />
        <Documentation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
