import React from 'react';
import NetBackground from './NetBackground';

/**
 * DynamicBackground
 * 
 * Unified background wrapper and switcher that renders any background variant
 * based on the `variant` prop.
 */
export default function DynamicBackground({
  variant = 'net',
  ...props
}) {
  switch (variant) {
    case 'net':
    default:
      return <NetBackground {...props} />;
  }
}
