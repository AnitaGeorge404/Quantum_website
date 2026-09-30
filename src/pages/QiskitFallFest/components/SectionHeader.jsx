import React from 'react';
import { motion } from 'framer-motion';

/** Fades children up once when they scroll into view. */
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** Numbered eyebrow + title (+ optional intro) used at the top of every section. */
export default function SectionHeader({ index, label, title, intro, className = '' }) {
  return (
    <Reveal className={`mb-12 md:mb-16 max-w-2xl ${className}`}>
      <p className="qff-label mb-4 flex items-center gap-3">
        <span className="text-[var(--pink-strong)]">{index}</span>
        <span className="h-px w-8 bg-[var(--border-strong)]" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.1]">{title}</h2>
      {intro && (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-[var(--muted-foreground)]">{intro}</p>
      )}
    </Reveal>
  );
}
