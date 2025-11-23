import { Orbit } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black pt-24 pb-12 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Giant CTA */}
        <div className="text-center relative z-10">
          <h2 className="font-display text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
            Ready to Scale?
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-full p-2 w-full max-w-md mx-auto mt-8 flex justify-between items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none outline-none text-white px-4 w-full placeholder:text-slate-500"
            />
            <button className="bg-primary text-black rounded-full px-6 py-2 font-bold hover:bg-primary/80 transition-colors shrink-0">
              Join
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-12">
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <Orbit className="w-6 h-6 text-primary" />
            <span>CTX</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CTX Financial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
