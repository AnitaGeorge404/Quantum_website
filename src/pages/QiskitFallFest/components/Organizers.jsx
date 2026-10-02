import React from 'react';
import SectionHeader, { Reveal } from './SectionHeader';
import { featuredOrganizer } from '../data/organizers';
import { stickers } from '../data/stickers';
import Decor from './Decor';

const studentOrganizers = [
  { name: 'Ashwin S', role: 'Lead Organizer' },
  { name: 'Dr. Rubell Marion Lincy G', role: 'Co Organizer' },
  { name: 'Dr. Prajeesh', role: 'Co Organizer' },
  { name: 'Aishik Roy', role: 'Co Organizer' },
  { name: 'Joswin M J', role: 'Co Organizer' },
  { name: 'Saumya S', role: 'Co Organizer' },
];

const studentVolunteers = [
  { name: 'Nevil Mathew Sanish', role: 'Volunteer' },
  { name: 'Sanjay S', role: 'Volunteer' },
];

const initials = (name) =>
  name
    .split(' ')
    .filter((w) => w && w !== 'Dr.')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

export default function Organizers() {
  return (
    <section id="organizers" className="qff-section">
      <div className="qff-container">
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <SectionHeader index="04" label="Organizers" title="Event Organizers" className="!mb-0" />
          <Decor
            src={stickers.seagulls}
            amplitude={6}
            duration={7}
            className="w-20 shrink-0 sm:w-24 lg:w-28"
          />
        </div>

        {/* Host lab */}
        <Reveal className="grid items-center gap-8 border-y border-[var(--border-strong)] py-8 md:grid-cols-[18rem_1fr] md:gap-12 md:py-10">
          <div className="flex items-center justify-center rounded-sm bg-white p-6 ring-1 ring-[var(--border)]">
            <img src="/qiskit-photos/qudais_logo.jpeg" alt="QuDAIS Lab logo" className="h-auto w-full max-w-[14rem] object-contain" />
          </div>
          <div>
            <p className="qff-label">{featuredOrganizer.role}</p>
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold">{featuredOrganizer.name}</h3>
            <p className="mt-3 max-w-xl text-base md:text-lg leading-relaxed text-[var(--muted-foreground)]">
              {featuredOrganizer.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {[stickers.qiskit, stickers.quantum, stickers.computing, stickers.century].map((src) => (
                <img key={src} src={src} alt="" aria-hidden="true" className="h-7 w-auto md:h-8 transition-transform duration-300 hover:-rotate-3" />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Organizers */}
        <div className="mt-16 md:mt-20">
          <Reveal className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold">Organizers</h3>
          </Reveal>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {studentOrganizers.map((person, idx) => (
              <Reveal
                as="li"
                key={person.name}
                delay={(idx % 3) * 0.05}
                className="group flex items-center gap-4 rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_1px_2px_rgba(49,19,94,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--border-strong)] hover:shadow-[0_8px_24px_-12px_rgba(49,19,94,0.25)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--border-strong)] font-mono text-sm font-medium text-[var(--ink)] transition-colors group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white">
                  {initials(person.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-medium text-[var(--ink)]">{person.name}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Volunteers */}
        <div className="mt-12 md:mt-16">
          <Reveal className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold">Volunteers</h3>
          </Reveal>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {studentVolunteers.map((person, idx) => (
              <Reveal
                as="li"
                key={person.name}
                delay={(idx % 3) * 0.05}
                className="group flex items-center gap-4 rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_1px_2px_rgba(49,19,94,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--border-strong)] hover:shadow-[0_8px_24px_-12px_rgba(49,19,94,0.25)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--border-strong)] font-mono text-sm font-medium text-[var(--ink)] transition-colors group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white">
                  {initials(person.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-medium text-[var(--ink)]">{person.name}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
