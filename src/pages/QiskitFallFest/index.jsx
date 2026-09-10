import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import TeamGrid from './components/TeamGrid';
import Organizers from './components/Organizers';
import Experience from './components/Experience';
import QiskitFooter from './components/Footer';
import './styles.css';

/**
 * QiskitFallFest page
 * Embedded inside the Quantum website's router at /qiskit-fall-fest.
 * Uses its own scoped CSS variables and components.
 * The main Quantum Navbar/Footer still wraps this via MainLayout.
 * The Qiskit-specific footer (with contact/links) is rendered inside this page.
 */
export default function QiskitFallFest() {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback timeout in case animation doesn't complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Scoping wrapper — applies the Qiskit theme variables to everything inside
    <div className="qiskit-page">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className={`relative min-h-screen transition-opacity duration-1000 ${
          isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'
        }`}
      >
        <main>
          {!isLoading && (
            <>
              <Hero />
              <Timeline />
              <TeamGrid />
              <Organizers />
              <Experience />
            </>
          )}
        </main>

        {/* Qiskit-specific footer (contact details, links) */}
        {!isLoading && <QiskitFooter />}
      </div>
    </div>
  );
}
