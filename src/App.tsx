import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { CreatorBadge } from "./components/CreatorBadge";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* 1. Fixed Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Hero />
      </div>

      {/* 2. Scrollable Content Layer */}
      <main className="relative z-10">
        {/* Spacer to show the Hero initially */}
        <div className="h-screen w-full" />

        {/* The content that slides over the Hero */}
        <div className="bg-linear-to-b from-black/0 via-black/90 to-black pt-32 shadow-2xl">
          <Features />
          <Footer />
        </div>
      </main>

      <CreatorBadge />
    </div>
  );
}
