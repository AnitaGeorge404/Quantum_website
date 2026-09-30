// Brand stickers used across the page — one colour variant per item.

// Birds & illustrations
import flamingo from '../assets/svg/Sticker 01.svg';
import seagulls from '../assets/svg/Sticker 02.svg';
import bluebird from '../assets/svg/Sticker 03.svg';
import hummingbirds from '../assets/svg/Sticker 04.svg';
import eagle from '../assets/svg/Sticker 05.svg';
import kingfisher from '../assets/svg/Sticker 06.svg';
import swallow from '../assets/svg/Sticker 07.svg';
import entanglement from '../assets/svg/Sticker 08.svg';
import wave from '../assets/svg/Sticker 09.svg';

// Word pills & badges
import fallFest from '../assets/svg/Sticker_Fall Fest_Magenta.svg';
import year2026 from '../assets/svg/2026.svg';
import qiskit from '../assets/svg/Sticker_Qiskit-Purple.svg';
import quantum from '../assets/svg/Sticker_Quantum-Blue.svg';
import computing from '../assets/svg/Sticker_Computing_Gray.svg';
import century from '../assets/svg/Sticker_Theme_Magenta.svg';
import pictogram from '../assets/svg/Sticker_Pictogram-Purple.svg';
import badge from '../assets/svg/badge-pink.svg';

// Scenery
import cloud from '../assets/svg/cloud1.svg';
import cloudLight from '../assets/svg/cloud2.svg';
import heroScene from '../assets/svg/Hero 1 without title.svg';

export const stickers = {
  flamingo,
  seagulls,
  bluebird,
  hummingbirds,
  eagle,
  kingfisher,
  swallow,
  entanglement,
  wave,
  fallFest,
  year2026,
  qiskit,
  quantum,
  computing,
  century,
  pictogram,
  badge,
  cloud,
  cloudLight,
  heroScene,
};

// One round bird sticker per schedule day.
export const dayStickers = [flamingo, seagulls, bluebird, hummingbirds, kingfisher];

// Pills shown in the scrolling ribbon under the hero.
export const ribbon = [
  { src: qiskit, alt: 'Qiskit' },
  { src: quantum, alt: 'Quantum' },
  { src: computing, alt: 'Computing' },
  { src: pictogram, alt: '' },
  { src: century, alt: 'Century of Quantum' },
  { src: fallFest, alt: 'Fall Fest' },
  { src: year2026, alt: '2026' },
  { src: badge, alt: '' },
];
