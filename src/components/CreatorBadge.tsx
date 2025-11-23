import { ArrowUpRight } from "lucide-react";

export function CreatorBadge() {
  return (
    <a
      href="https://alecsdesign.xyz"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/20"
    >
      <span>Designed by alecsdesign</span>
      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
      <span>xyz</span>
      <ArrowUpRight className="w-3 h-3" />
    </a>
  );
}
