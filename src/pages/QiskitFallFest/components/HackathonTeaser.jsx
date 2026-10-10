import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './SectionHeader';
import { intro } from '../data/hackathon';

const facts = [
  { label: 'Kickoff', value: '10 Oct · 7:05 PM' },
  { label: 'Final deadline', value: '11 Oct · 7:05 PM' },
  { label: 'Tracks', value: 'Games · Optimization' },
];

/** Short hackathon summary on the Fall Fest page; the full guide lives at /qiskit-fall-fest-26/hackathon. */
export default function HackathonTeaser() {
  return (
    <section id="hackathon" className="qff-section">
      <div className="qff-container">
        <Reveal className="grid gap-8 rounded-md bg-[var(--ink)] p-6 text-white sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
          <div className="lg:col-span-7">
            <p className="qff-label !text-[var(--pink)]">Hackathon</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.1] !text-white sm:text-4xl">
              24-Hour Quantum Hackathon
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">{intro}</p>
            <Link to="/qiskit-fall-fest-26/hackathon" className="qff-btn qff-btn-pink mt-7">
              Read the hackathon guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="self-center border-t border-white/20 lg:col-span-5">
            {facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 border-b border-white/15 py-4">
                <dt className="text-sm text-white/60">{f.label}</dt>
                <dd className="text-right font-mono text-base font-medium md:text-lg">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
