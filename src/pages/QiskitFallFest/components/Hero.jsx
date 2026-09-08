import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import FoldText from './FoldText';
import StrokeText from './StrokeText';
import DynamicBackground from './DynamicBackground';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center min-h-screen overflow-hidden">
      <DynamicBackground className="absolute inset-0 w-full h-full -z-10 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-mono tracking-tighter text-[var(--text-primary)] w-full">
            <StrokeText
              text="QISKIT"
              strokeColor="currentColor"
              fillColor="currentColor"
              fontSize={160}
              strokeWidth={2}
              drawDuration={1.2}
              fillDelay={0.5}
              stagger={0.03}
            />
          </h1>
          <h2 className="text-3xl md:text-5xl font-light font-mono tracking-wide text-[var(--muted-foreground)]">
            FALL FEST EVENT 2026
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 mb-10 font-mono text-sm md:text-base">
          <div className="flex items-center gap-2 text-[var(--accent-pink)] font-semibold">
            <Calendar className="w-5 h-5" />
            <FoldText text="7 October 2026 - 11 October 2026 (5-Day Online Event)" fontSize="inherit" fontWeight="inherit" color="inherit" duration={0.4} stagger={0.02} />
          </div>
          <div className="flex items-center gap-2 text-[var(--text-primary)] opacity-80">
            <MapPin className="w-5 h-5 text-[var(--text-primary)]" />
            <FoldText text="Indian Institute of Information Technology (IIIT) Kottayam, Kerala, India" fontSize="inherit" fontWeight="inherit" color="inherit" duration={0.4} stagger={0.02} />
          </div>
        </div>


      </motion.div>


    </section>
  );
}
