'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { controls } = useScrollReveal(ref);

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={cn('mb-16', alignClasses[align], className)}
    >
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-primary font-semibold text-lg mb-4 uppercase tracking-wide"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-background-dark"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
