import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total sequence: 
    // 0s-1.0s (wave enters)
    // 1.0s-2.4s (logo draws)
    // 2.0s-2.6s (wave fades)
    // 2.5s-3.7s (hold logo)
    // 3.7s-4.5s (loading screen fades out)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  // 1. Wave Line Animation
  const waveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] },
        opacity: { duration: 0.2 }
      }
    },
    fadeOut: {
      opacity: 0,
      transition: { delay: 2.1, duration: 0.6, ease: 'easeInOut' }
    }
  };

  // 2. Logo Outer Circle & Equator Ring Variants
  const primaryRingVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.95,
        duration: 1.3,
        ease: [0.42, 0.0, 0.58, 1.0]
      }
    }
  };

  // 3. Top and Bottom Ellipses Variants
  const secondaryRingVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 1.15,
        duration: 1.25,
        ease: [0.42, 0.0, 0.58, 1.0]
      }
    }
  };

  // 4. Diagonal Line Variant
  const diagonalVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 1.45,
        duration: 0.9,
        ease: 'easeInOut'
      }
    }
  };

  // 5. Node Circles Variants
  const nodeVariants = {
    hidden: { pathLength: 0, scale: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      scale: 1,
      opacity: 1,
      transition: {
        delay: 2.0,
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1] // Spring pop
      }
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white select-none pointer-events-auto"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="relative w-full max-w-[700px] aspect-[10/6] flex items-center justify-center p-4">
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Phase 1 & 3: Incoming Wave Line (from left edge to sphere) */}
              <motion.path
                d="M 0 300 L 380 300"
                stroke="#777777"
                strokeWidth="3"
                strokeLinecap="round"
                variants={waveVariants}
                initial="hidden"
                animate={['visible', 'fadeOut']}
              />

              {/* Phase 2: Logo Drawing */}
              <g stroke="#333333" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round">
                {/* 1. Outer Sphere Circle (Radius 120, centered at 500, 300) */}
                <motion.path
                  d="M 380 300 A 120 120 0 1 0 620 300 A 120 120 0 1 0 380 300"
                  variants={primaryRingVariants}
                  initial="hidden"
                  animate="visible"
                />

                {/* 2. Middle Equator Ellipse */}
                <motion.path
                  d="M 380 300 A 120 36 0 1 0 620 300 A 120 36 0 1 0 380 300"
                  variants={primaryRingVariants}
                  initial="hidden"
                  animate="visible"
                />

                {/* 3. Top Latitude Ellipse */}
                <motion.path
                  d="M 393 245 A 107 32 0 1 0 607 245 A 107 32 0 1 0 393 245"
                  variants={secondaryRingVariants}
                  initial="hidden"
                  animate="visible"
                />

                {/* 4. Bottom Latitude Ellipse */}
                <motion.path
                  d="M 393 355 A 107 32 0 1 0 607 355 A 107 32 0 1 0 393 355"
                  variants={secondaryRingVariants}
                  initial="hidden"
                  animate="visible"
                />

                {/* 5. Diagonal Connecting Line */}
                <motion.path
                  d="M 415 228 L 585 372"
                  variants={diagonalVariants}
                  initial="hidden"
                  animate="visible"
                />

                {/* 6. Upper Node Circle */}
                <motion.circle
                  cx="415"
                  cy="228"
                  r="9.5"
                  fill="#FFFFFF"
                  stroke="#333333"
                  strokeWidth="3.5"
                  variants={nodeVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ transformOrigin: '415px 228px' }}
                />

                {/* 7. Lower Node Circle */}
                <motion.circle
                  cx="585"
                  cy="372"
                  r="9.5"
                  fill="#FFFFFF"
                  stroke="#333333"
                  strokeWidth="3.5"
                  variants={nodeVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ transformOrigin: '585px 372px' }}
                />
              </g>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

