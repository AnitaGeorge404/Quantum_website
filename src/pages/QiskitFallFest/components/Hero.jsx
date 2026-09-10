import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import FoldText from './FoldText';
import StrokeText from './StrokeText';

import fallFestSticker from '../assets/svg/Sticker_Fall Fest_Magenta.svg';
import sticker2026 from '../assets/svg/2026.svg';
import heroBg from '../assets/svg/Hero 1 without title.svg';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center min-h-screen overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center justify-center mb-10 space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-mono tracking-tighter text-[var(--text-primary)] w-full">
            <StrokeText
              text="QISKIT"
              strokeColor="#31135E"
              fillColor="#31135E"
              fontSize={160}
              strokeWidth={2}
              drawDuration={1.2}
              fillDelay={0.5}
              stagger={0.03}
            />
          </h1>
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <motion.img
              whileHover={{ scale: 1.05, rotate: -1.5 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              src={fallFestSticker}
              alt="Fall Fest"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto drop-shadow-sm select-none cursor-pointer"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: 1.5 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              src={sticker2026}
              alt="2026"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto drop-shadow-sm select-none cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 mb-8 font-mono text-sm md:text-base">
          <div className="flex items-center gap-2 text-[var(--accent-pink)] font-semibold">
            <Calendar className="w-5 h-5" />
            <FoldText text="7 October 2026 - 11 October 2026 (5-Day Online Event)" fontSize="inherit" fontWeight="inherit" color="inherit" duration={0.4} stagger={0.02} />
          </div>
          <div className="flex items-center gap-2 text-[var(--text-primary)] opacity-80">
            <MapPin className="w-5 h-5 text-[var(--text-primary)]" />
            <FoldText text="Indian Institute of Information Technology (IIIT) Kottayam, Kerala, India" fontSize="inherit" fontWeight="inherit" color="inherit" duration={0.4} stagger={0.02} />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://docs.google.com/forms"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#FF7EB6] text-[#1b1442] font-mono font-bold text-sm md:text-base tracking-wider transition-all duration-200 hover:brightness-105 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            REGISTER NOW
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#FF7EB6] text-[#1b1442] font-mono font-bold text-sm md:text-base tracking-wider transition-all duration-200 hover:brightness-105 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            JOIN COMMUNITY
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>


      </motion.div>


    </section>
  );
}
