import React from 'react';
import SectionHeader, { Reveal } from './SectionHeader';
import Decor from './Decor';
import { stickers } from '../data/stickers';

const details = [
  { label: 'Dates', value: '7 – 11 Oct 2026' },
  { label: 'Format', value: 'Online' },
  { label: 'Hackathon', value: 'Virtual' },
];

export default function About() {
  return (
    <section id="about" className="qff-section relative overflow-hidden">
      <div className="qff-container relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeader
            index="01"
            label="About"
            title="About the Event"
            className="!mb-8"
          />
          <Reveal delay={0.1} className="space-y-5 text-base md:text-lg leading-relaxed text-[var(--muted-foreground)]">
            <p className="font-medium text-[var(--ink)]">
              From Quantum Fundamentals to Real-World Quantum Applications.
            </p>
            <p>
              A five-day online event designed to introduce students to quantum computing, provide
              hands-on experience with Qiskit, connect participants with experts from academia and
              industry, and foster collaborative learning through a virtual hackathon.
            </p>
          </Reveal>

          {/* Decorative brand illustrations */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6" aria-hidden="true">
            {[stickers.entanglement, stickers.wave].map((src, i) => (
              <Reveal key={src} delay={0.15 + i * 0.08} className="group">
                <div className="aspect-[16/10] overflow-hidden rounded-md bg-[#BAC0C6]">
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:pt-4">
          {/* In normal flow above the list, so it never sits on the divider line */}
          <Decor
            src={stickers.pictogram}
            spin
            duration={50}
            className="mb-8 ml-auto w-20 sm:w-24 lg:mb-10 lg:w-28"
          />
          <Reveal delay={0.15}>
            <dl className="border-t border-[var(--border-strong)]">
              {details.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between gap-6 border-b border-[var(--border)] py-5">
                  <dt className="text-sm md:text-base text-[var(--muted-foreground)]">{d.label}</dt>
                  <dd className="font-mono text-xl md:text-2xl font-medium text-[var(--ink)]">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Decor
            src={stickers.cloud}
            drift
            amplitude={8}
            duration={20}
            opacity={0.5}
            className="mt-10 ml-auto w-2/3 max-w-[18rem]"
          />
        </div>
      </div>
    </section>
  );
}
