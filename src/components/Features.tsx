import { Shield, Globe, Zap } from "lucide-react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden relative group hover:border-primary/50 transition-colors duration-500 ${className}`}
    >
      {children}
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {/* 1. Real-time Analytics (Big Card) */}
        <Card className="md:col-span-2 min-h-[400px]">
          <div className="p-8 relative z-20">
            <h3 className="text-3xl font-bold text-white mb-2">
              Real-time Analytics
            </h3>
            <p className="text-gray-400">
              Monitor your assets with zero latency.
            </p>
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop"
              alt="Analytics Dashboard"
              className="absolute right-0 top-0 w-3/4 h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-lighten"
            />
          </div>
        </Card>

        {/* 2. Vault Security (Tall Card) */}
        <Card className="md:row-span-2 flex flex-col items-center justify-center text-center p-8">
          <div className="relative mb-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/40 blur-[80px] rounded-full" />
            <Shield className="w-16 h-16 text-primary relative z-10 animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
            Vault Security
          </h3>
          <p className="text-gray-400 relative z-10">
            Bank-grade encryption for your digital assets.
          </p>
        </Card>

        {/* 3. Global Exchange */}
        <Card className="p-8">
          <Globe className="w-10 h-10 text-secondary mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Global Exchange</h3>
          <p className="text-gray-400 text-sm">Trade in 140+ countries.</p>
        </Card>

        {/* 4. AI Prediction */}
        <Card className="p-8">
          <Zap className="w-10 h-10 text-yellow-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">AI Prediction</h3>
          <p className="text-gray-400 text-sm">
            Forecast trends before they happen.
          </p>
        </Card>
      </div>
    </section>
  );
}
