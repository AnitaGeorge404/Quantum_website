import React, { useEffect, useState } from 'react';
import { HACKATHON_START, HACKATHON_END } from '../data/event';

const DAY = 86400000;
const HOUR = 3600000;
const MINUTE = 60000;

const pad = (n) => String(n).padStart(2, '0');

// Before the hackathon: days/hours/minutes/seconds until it starts.
// During: a 24-hour hh:mm:ss timer until it ends.
function getState(now) {
  const start = HACKATHON_START.getTime();
  const end = HACKATHON_END.getTime();

  if (now < start) {
    const diff = start - now;
    return {
      label: 'Hackathon starts in',
      units: [
        { value: Math.floor(diff / DAY), unit: 'Days' },
        { value: Math.floor((diff % DAY) / HOUR), unit: 'Hours' },
        { value: Math.floor((diff % HOUR) / MINUTE), unit: 'Minutes' },
        { value: Math.floor((diff % MINUTE) / 1000), unit: 'Seconds' },
      ],
    };
  }

  if (now < end) {
    const diff = end - now;
    return {
      label: 'Hackathon live · ends in',
      live: true,
      units: [
        { value: Math.floor(diff / HOUR), unit: 'Hours' },
        { value: Math.floor((diff % HOUR) / MINUTE), unit: 'Minutes' },
        { value: Math.floor((diff % MINUTE) / 1000), unit: 'Seconds' },
      ],
    };
  }

  return { label: 'Hackathon has ended', units: [] };
}

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      const t = Date.now();
      setNow(t);
      if (t >= HACKATHON_END.getTime()) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const { label, units, live } = getState(now);

  return (
    <div aria-live="off">
      <p className="qff-label flex items-center gap-2">
        {live && <span className="inline-block h-2 w-2 rounded-full bg-[var(--pink-strong)] animate-pulse" />}
        {label}
      </p>
      {units.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
          {units.map(({ value, unit }) => (
            <div
              key={unit}
              className="min-w-[4.25rem] sm:min-w-[5rem] rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-2 text-center"
            >
              <span className="block font-mono text-2xl sm:text-3xl font-medium leading-none text-[var(--ink)] tabular-nums">
                {unit === 'Days' ? value : pad(value)}
              </span>
              <span className="qff-label mt-1.5 block text-[0.65rem]">{unit}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
