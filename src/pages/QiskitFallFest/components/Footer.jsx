import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#31135E] text-white relative z-20 mt-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold font-mono text-white" style={{ color: 'white' }}>Location</h3>
          <div className="flex items-start gap-3 text-white/80">
            <MapPin className="w-6 h-6 shrink-0 mt-1" />
            <p className="max-w-xs leading-relaxed">
              Indian Institute of Information Technology (IIIT)<br/>
              Kottayam, Kerala, India
            </p>
          </div>
        </div>
        
        <a 
          href="https://maps.app.goo.gl/CFKjNBg2cQi2ax2y8" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF7EB6] text-[#31135E] font-mono font-bold hover:bg-[#ff8ec0] transition-colors"
          style={{ color: '#31135E' }}
        >
          OPEN IN MAPS <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/20 pt-8 text-center text-sm font-mono text-white/60">
        <p>© 2026 IBM Qiskit Fall Fest. All rights reserved.</p>
      </div>
    </footer>
  );
}
