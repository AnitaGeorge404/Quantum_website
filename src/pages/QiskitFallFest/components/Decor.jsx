import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Decorative sticker that pops in on view, then bobs gently.
 * `drift` swaps the vertical bob for a slow horizontal drift (clouds).
 */
export default function Decor({
  src,
  className = '',
  delay = 0,
  drift = false,
  spin = false,
  amplitude = 8,
  duration = 6,
  rotate = 0,
  opacity = 1,
}) {
  const reduce = useReducedMotion();

  const loop = reduce
    ? {}
    : spin
      ? { rotate: [rotate, rotate + 360] }
      : drift
        ? { x: [0, amplitude * 3, 0] }
        : { y: [0, -amplitude, 0], rotate: [rotate, rotate + 2, rotate] };

  const loopTransition = spin
    ? { duration: duration, repeat: Infinity, ease: 'linear' }
    : { duration, repeat: Infinity, ease: 'easeInOut', delay };

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt=""
        draggable="false"
        className="h-auto w-full"
        style={{ rotate, opacity }}
        animate={loop}
        transition={loopTransition}
      />
    </motion.div>
  );
}
