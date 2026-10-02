import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

import { stickers } from '../data/stickers';
import { RSVP_URL } from '../data/event';
import StrokeText from './StrokeText';
import FoldText from './FoldText';
import Decor from './Decor';
import Countdown from './Countdown';

const facts = [
  { label: 'Dates', value: '7 October 2026 – 11 October 2026' },
  { label: 'Format', value: '5-Day Online Event' },
];

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Illustration — kept quiet so the type leads */}
      <img
        src={stickers.heroScene}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
      />

      <div className="qff-container relative pt-32 pb-16 sm:pt-40 md:pb-24 lg:pt-44">
        {/* Sticker scene — right side on desktop */}
        <div className="pointer-events-none absolute right-0 top-24 hidden h-[30rem] w-[46%] lg:block" aria-hidden="true">
          <Decor src={stickers.cloudLight} drift amplitude={10} duration={22} className="absolute right-0 top-[18%] w-[72%]" />
          <Decor src={stickers.cloud} drift amplitude={-8} duration={18} delay={0.2} opacity={0.6} className="absolute left-[2%] top-[62%] w-[46%]" />
          <Decor src={stickers.badge} spin duration={40} delay={0.3} className="absolute right-[6%] top-[4%] w-32 xl:w-36" />
          <Decor src={stickers.eagle} delay={0.4} amplitude={10} duration={6} className="absolute left-[14%] top-[10%] w-44 xl:w-52" />
          <Decor src={stickers.swallow} delay={0.55} amplitude={7} duration={7} rotate={-6} className="absolute right-[14%] top-[48%] w-36 xl:w-40" />
        </div>

        {/* Compact version for phones & tablets */}
        <div className="pointer-events-none absolute right-5 top-[17rem] sm:right-8 sm:top-[20rem] lg:hidden" aria-hidden="true">
          <Decor src={stickers.eagle} amplitude={6} duration={6} delay={0.4} className="w-20 sm:w-28" />
        </div>

        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="qff-label flex items-center gap-2"
          >
            <img src="/qiskit-logo.png" alt="" className="h-5 w-auto" />
            IBM Quantum · Qiskit
          </motion.p>

          <h1 className="qff-hero-title mt-6 -ml-1 sm:-ml-2">
            <StrokeText
              text="Qiskit"
              align="xMinYMid"
              strokeColor="#31135E"
              fillColor="#31135E"
              fontSize={160}
              fontWeight={600}
              letterSpacing={-6}
              strokeWidth={2}
              drawDuration={0.6}
              fillDelay={0.05}
              stagger={0.03}
              fillMode="wipe"
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            <img src={stickers.fallFest} alt="Fall Fest" className="h-10 sm:h-12 md:h-14 w-auto select-none" />
            <img src={stickers.year2026} alt="2026" className="h-10 sm:h-12 md:h-14 w-auto select-none" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-[var(--muted-foreground)]"
          >
            From Quantum Fundamentals to Real-World Quantum Applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a href={RSVP_URL} target="_blank" rel="noreferrer" className="qff-btn qff-btn-primary">
              Register now <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#timeline" className="qff-btn qff-btn-outline">
              View schedule <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="mt-10"
          >
            <Countdown />
          </motion.div>

          {/* Key facts */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 border-t border-[var(--border-strong)]"
          >
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`py-5 sm:pt-6 sm:pb-0 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-[var(--border)] sm:pl-6' : ''} ${i < facts.length - 1 ? 'sm:pr-6' : ''}`}
              >
                <dt className="qff-label">{fact.label}</dt>
                <dd className="mt-2 text-base md:text-lg font-medium text-[var(--ink)]">
                  <FoldText
                    text={fact.value}
                    splitBy="word"
                    fontSize="inherit"
                    fontWeight="inherit"
                    color="inherit"
                    duration={0.5}
                    stagger={0.06}
                  />
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
