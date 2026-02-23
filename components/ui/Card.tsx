'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { scaleIn } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className, hover = true, glass = false }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { controls } = useScrollReveal(ref);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scaleIn}
      className={cn(
        'rounded-2xl p-6 md:p-8',
        glass ? 'glass' : 'bg-white shadow-lg',
        hover && 'card-hover',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
