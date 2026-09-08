import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[var(--panel-bg)] pt-20 pb-10 border-t border-[var(--border-color)] z-10 overflow-hidden text-[var(--text-primary)]">
      {/* Subtle starfield in footer */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0))',
        backgroundSize: '100px 100px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-pink-accent rounded-sm flex items-center justify-center font-bold text-xs">ITU</div>
              <span className="font-bold text-xl">Nebula</span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed">
              The Information Technology University Nebula in conjunction with IBM Quantum is excited to host its inaugural IBM Qiskit Fall Fest Event 2026. Our virtual event will introduce participants to Quantum Computing using Qiskit.
            </p>
            <div className="text-xs text-[var(--muted-foreground)] opacity-70">
              Powered by Nebula, Engineering Partner
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-1 md:pl-10">
            <h4 className="font-bold mb-6">Useful Links</h4>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              <li><a href="#" className="hover:text-pink-accent transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-accent transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-pink-accent transition-colors">Information Technology University</a></li>
              <li><a href="#" className="hover:text-pink-accent transition-colors">Developer</a></li>
              <li><a href="#" className="hover:text-pink-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <h4 className="font-bold mb-6">Contact Us</h4>
            <div className="text-sm text-[var(--muted-foreground)] space-y-4">
              <p>Indian Institute of Information Technology (IIIT)<br/>Kottayam, Kerala, India</p>
              


              <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-[var(--accent-blue)] transition-colors mt-6">
                <Mail className="w-4 h-4" /> contact@example.com
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-md bg-[var(--muted)] flex items-center justify-center hover:bg-[var(--accent-pink)] hover:text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-md bg-[var(--muted)] flex items-center justify-center hover:bg-[var(--accent-blue)] hover:text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border-color)] pt-8 text-center flex flex-col md:flex-row justify-between items-center text-xs text-[var(--muted-foreground)] opacity-70">
          <p>© 2026 IBM Qiskit Fall Fest. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-[var(--text-primary)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--text-primary)]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
