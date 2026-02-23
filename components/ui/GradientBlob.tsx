'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientBlobProps {
  color?: string;
  size?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  className?: string;
  animate?: boolean;
}

export function GradientBlob({
  color = 'from-primary/20 to-accent-gold/20',
  size = 'w-96 h-96',
  position = 'top-right',
  className = '',
  animate = true,
}: GradientBlobProps) {
  const positionClasses = {
    'top-left': '-top-20 -left-20',
    'top-right': '-top-20 -right-20',
    'bottom-left': '-bottom-20 -left-20',
    'bottom-right': '-bottom-20 -right-20',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <motion.div
      className={`absolute ${size} ${positionClasses[position]} bg-gradient-to-br ${color} rounded-full blur-3xl opacity-50 ${className}`}
      animate={animate ? {
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      } : undefined}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
