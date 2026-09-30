import React from 'react';
import { schedule } from '../data/schedule';
import { dayStickers } from '../data/stickers';
import SectionHeader, { Reveal } from './SectionHeader';

// "7 October 2026" -> { day: "07", month: "Oct" }
function splitDate(str) {
  const [d, m] = str.split(' ');
  return { day: d.padStart(2, '0'), month: m.slice(0, 3) };
}

export default function Timeline() {
  return (
    <section id="timeline" className="qff-section">
      <div className="qff-container">
        <SectionHeader
          index="02"
          label="Schedule"
          title="Event Schedule"
        />

        <ol className="border-t border-[var(--border-strong)]">
          {schedule.map((item, idx) => {
            const { day, month } = splitDate(item.time);
            return (
              <Reveal
                as="li"
                key={item.time}
                delay={Math.min(idx * 0.05, 0.2)}
                className="group grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-[var(--border)] py-8 sm:grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr_14rem] md:gap-x-10 md:py-10"
              >
                {/* Date + day sticker */}
                <div className="flex flex-col">
                  <span className="font-mono text-4xl md:text-5xl font-medium leading-none text-[var(--ink)] tabular-nums transition-colors group-hover:text-[var(--pink-strong)]">
                    {day}
                  </span>
                  <span className="qff-label mt-2">{month} · Day {idx + 1}</span>
                  <img
                    src={dayStickers[idx % dayStickers.length]}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="mt-4 w-14 sm:w-16 md:w-20 transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110"
                  />
                </div>

                {/* Session */}
                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--muted-foreground)]">
                    {item.speaker.bio}
                  </p>
                </div>

                {/* Speaker */}
                {item.speaker.name !== 'TBA' && (
                  <div className="col-start-2 mt-4 md:col-start-auto md:mt-1 md:border-l md:border-[var(--border)] md:pl-6">
                    <p className="qff-label">Speaker</p>
                    <p className="mt-1.5 text-sm md:text-base font-medium text-[var(--ink)]">{item.speaker.name}</p>
                  </div>
                )}
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
