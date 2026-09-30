import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { RSVP_URL, MAPS_URL } from '../data/event';
import { stickers } from '../data/stickers';
import Decor from './Decor';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#timeline', label: 'Schedule' },
  { href: '#team', label: 'Speakers' },
  { href: '#organizers', label: 'Organizers' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[var(--ink)] text-white">
      <Decor
        src={stickers.cloudLight}
        drift
        amplitude={12}
        duration={26}
        opacity={0.07}
        className="absolute -left-10 top-10 w-72 md:w-[28rem]"
      />
      {/* Closing call to action */}
      <div className="qff-container relative border-b border-white/15 py-16 md:py-24">
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="qff-label !text-[var(--pink)]">7 October 2026 – 11 October 2026 · 5-Day Online Event</p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] !text-white">
              Qiskit Fall Fest 2026
            </h2>
          </div>
          {/* Badge stacked above the button in its own column — no overlap */}
          <div className="flex flex-col items-start gap-6 md:items-end">
            <Decor src={stickers.badge} spin duration={40} className="w-20 md:w-28" />
            <a href={RSVP_URL} target="_blank" rel="noreferrer" className="qff-btn qff-btn-pink">
              Register now <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="qff-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="qff-label !text-white/50">Event Organizers</p>
          <p className="mt-3 text-lg font-semibold">QuDAIS Lab</p>
          <p className="mt-1 max-w-xs text-sm leading-relaxed text-white/65">
            Indian Institute of Information Technology Kottayam
          </p>
        </div>

        <div>
          <p className="qff-label !text-white/50">Location</p>
          <div className="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-white/85">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              Indian Institute of Information Technology (IIIT)<br />
              Kottayam, Kerala, India
            </p>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[var(--pink)] hover:text-white transition-colors"
          >
            Open in Maps <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <nav aria-label="Page sections">
          <p className="qff-label !text-white/50">On this page</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/85 hover:text-[var(--pink)] transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="qff-container border-t border-white/15 py-6 text-center font-mono text-xs text-white/50">
        <p>© 2026 IBM Qiskit Fall Fest. All rights reserved.</p>
      </div>
    </footer>
  );
}
