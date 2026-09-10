import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import badgeImg from '../assets/svg/badge-pink.svg';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show the loading screen for 2.5 seconds total before starting the fade-out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)] select-none pointer-events-auto"
        >
          <motion.img
            src={badgeImg}
            alt="Loading Badge"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
