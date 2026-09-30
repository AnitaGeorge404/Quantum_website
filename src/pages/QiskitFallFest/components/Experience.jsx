import React, { Suspense, lazy, useRef } from 'react';
import { useInView } from 'framer-motion';
import SectionHeader, { Reveal } from './SectionHeader';
import { stickers } from '../data/stickers';

const QuantumScene = lazy(() => import('./QuantumScene'));

const outcomes = [
  { title: 'Learn from the flock', body: 'Connect with industry experts and learn quantum fundamentals from scratch.', icon: stickers.kingfisher },
  { title: 'Build in the cloud', body: 'Run real quantum circuits directly on IBM Quantum hardware during the hackathon.', icon: stickers.cloud },
  { title: 'Share the sky', body: 'Collaborate with peers globally and present your innovative projects to the community.', icon: stickers.swallow },
];

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const hasBeenNear = useInView(containerRef, { margin: "600px", once: true });

  return (
    <section id="events" className="qff-section" ref={containerRef}>
      <div className="qff-container grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* 3D quantum computer */}
        <Reveal className="relative order-2 overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--surface)] lg:order-1">
          <div className="absolute left-4 top-4 z-10 qff-label">Interactive Hardware Model</div>
          <div className="h-[380px] w-full cursor-grab active:cursor-grabbing sm:h-[460px] lg:h-full lg:min-h-[560px]">
            {hasBeenNear && (
              <Suspense fallback={<div className="flex h-full items-center justify-center qff-label">Loading model…</div>}>
                <QuantumScene isInView={isInView} />
              </Suspense>
            )}
          </div>
        </Reveal>

        {/* Outcomes */}
        <div className="order-1 flex flex-col lg:order-2">
          <SectionHeader index="05" label="Why join" title="What you will earn" className="!mb-8" />

          <ol className="border-t border-[var(--border-strong)]">
            {outcomes.map((o, i) => (
              <Reveal as="li" key={o.title} delay={i * 0.06} className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 border-b border-[var(--border)] py-6">
                <span className="font-mono text-sm text-[var(--pink-strong)] pt-1">0{i + 1}</span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-[var(--muted-foreground)]">{o.body}</p>
                </div>
                <img
                  src={o.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="w-14 md:w-16 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:-rotate-3"
                />
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2} className="mt-8 border-l-2 border-[var(--pink)] pl-5 text-sm leading-relaxed text-[var(--muted-foreground)]">
            Open to the public. Registration is required. This is a fully virtual event. Attendees
            must consent to event recording/photography during registration.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
