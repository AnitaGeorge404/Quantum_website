import React from 'react';
import { ribbon } from '../data/stickers';

// Sets per half of the track. One set is ~1,100px wide, so three keep each
// half wider than even an ultrawide screen and the loop never shows a gap.
const SETS_PER_HALF = 3;

function Half({ hidden = false }) {
  const items = Array.from({ length: SETS_PER_HALF }, () => ribbon).flat();
  return (
    <div className="qff-ribbon-half" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <img
          key={i}
          src={item.src}
          alt=""
          draggable="false"
          className="h-9 w-auto shrink-0 select-none transition-transform duration-300 hover:-rotate-3 hover:scale-105 md:h-11"
        />
      ))}
    </div>
  );
}

/** Slow, endless strip of brand stickers between the hero and the content. */
export default function StickerRibbon() {
  return (
    <div className="qff-ribbon border-t border-[var(--border)] bg-[var(--surface)] py-5 md:py-6" aria-hidden="true">
      {/* Two identical halves; the track slides by exactly one half, then repeats. */}
      <div className="qff-ribbon-track">
        <Half />
        <Half hidden />
      </div>
    </div>
  );
}
