import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    if (window.lenis && target.startsWith('#')) {
      window.lenis.scrollTo(target);
    } else {
      window.location.href = target;
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--panel-bg)]/80 backdrop-blur-md border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-5">
            <span className="font-medium text-2xl text-[var(--text-primary)] tracking-tight">
              IBM <span className="font-bold">Quantum</span>
            </span>
            <div className="flex items-center gap-2">
              <img src="/qiskit-logo.png" alt="Qiskit" className="h-8 w-auto" />
              <span className="font-bold text-2xl text-[var(--text-primary)] tracking-tight">
                QISKIT
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-sm font-medium text-[var(--text-primary)] opacity-80 hover:opacity-100 hover:text-[var(--accent-pink)] transition-colors">Home</a>
            <a href="#timeline" onClick={(e) => handleScroll(e, '#timeline')} className="text-sm font-medium text-[var(--text-primary)] opacity-80 hover:opacity-100 hover:text-[var(--accent-pink)] transition-colors">Schedule</a>
            <a href="#team" onClick={(e) => handleScroll(e, '#team')} className="text-sm font-medium text-[var(--text-primary)] opacity-80 hover:opacity-100 hover:text-[var(--accent-pink)] transition-colors">Meet our Team</a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-sm font-medium text-[var(--text-primary)] opacity-80 hover:opacity-100 hover:text-[var(--accent-pink)] transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center space-x-3">
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hidden lg:flex items-center gap-2 bg-[#5B45F2] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors shadow-sm" title="Join Community">
              Community <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://docs.google.com/forms" target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 bg-[#5B45F2] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors shadow-sm" title="RSVP">
              RSVP <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
