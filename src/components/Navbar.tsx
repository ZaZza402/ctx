import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Orbit } from "lucide-react";

const navLinks = [
  { name: "Solutions", href: "#features" },
  { name: "Technology", href: "#features" },
  { name: "About", href: "#footer" },
];

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVars = {
  hidden: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 } as const,
  },
  exit: { x: -50, opacity: 0 },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        {/* Logo - Left */}
        <div className="flex items-center gap-2 text-white font-bold text-xl pointer-events-auto">
          <Orbit className="w-6 h-6 text-primary" />
          <span>CTX</span>
        </div>

        {/* Desktop Menu - Right (Glass Pill) */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white pointer-events-auto hover:bg-white/20 transition-colors relative z-50"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-3xl flex flex-col justify-center px-8"
          >
            {/* Links */}
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={linkVars}
                  className="text-4xl font-bold text-white hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
