import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./ui/Container";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/research", label: "Research" },
  { to: "/internship", label: "Internship" },
  { to: "/people", label: "People" },
  { to: "/gallery", label: "Gallery" },
  { to: "/collaborations", label: "Collaborations" },
  { to: "/join", label: "Join" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all px-4 sm:px-6 pt-4">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl md:rounded-full px-6 py-3 flex flex-col transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <div className="flex items-center justify-between w-full">
              <Link to="/" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-3 group">
                <img
                  src="/brand/qudais_logo.jpeg"
                  alt="QuDAIS Lab"
                  className="h-10 w-auto rounded-lg"
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-sky-50 text-[#0c2340] font-semibold"
                          : "text-slate-500 hover:text-sky-900 hover:bg-slate-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile Toggle */}
              <button 
                className="md:hidden p-2 text-slate-500 hover:text-pink-500 hover:bg-sky-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
              {isOpen && (
                <motion.nav 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden flex flex-col gap-2 mt-4 pb-2"
                >
                  {links.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.end}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-sky-50 text-[#0c2340] font-semibold"
                            : "text-slate-500 hover:text-sky-900 hover:bg-slate-50"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </header>
  );
}
