'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { controls } = useScrollReveal(ref);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="relative"
    >
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="hidden md:block md:w-1/2" />
            <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-accent-gold rounded-full border-4 border-white transform -translate-x-1/2 shadow-lg" />
            <div className="ml-16 md:ml-0 md:w-1/2 md:px-12">
              <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <span className="inline-block text-accent-gold font-bold text-xl mb-2">
                  {item.year}
                </span>
                <h3 className="font-playfair text-2xl font-bold mb-3 text-background-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
