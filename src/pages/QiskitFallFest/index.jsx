import React from 'react';
import Hero from './components/Hero';
import StickerRibbon from './components/StickerRibbon';
import About from './components/About';
import Timeline from './components/Timeline';
import TeamGrid from './components/TeamGrid';
import Organizers from './components/Organizers';
import Experience from './components/Experience';
import QiskitFooter from './components/Footer';
import './styles.css';

/**
 * QiskitFallFest page
 * Embedded inside the Quantum website's router at /qiskit-fall-fest-26.
 * Uses its own scoped CSS variables (see styles.css) and components.
 * The main Quantum Navbar still wraps this via MainLayoutNoFooter;
 * the Qiskit-specific footer is rendered inside this page.
 */
export default function QiskitFallFest() {
  return (
    <div className="qiskit-page min-h-screen">
      <Hero />
      <StickerRibbon />
      <About />
      <Timeline />
      <TeamGrid />
      <Organizers />
      <Experience />
      <QiskitFooter />
    </div>
  );
}
