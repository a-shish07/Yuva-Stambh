'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const partners = [
  { name: 'Partner 1', logo: 'https://via.placeholder.com/200x80?text=Partner+1' },
  { name: 'Partner 2', logo: 'https://via.placeholder.com/200x80?text=Partner+2' },
  { name: 'Partner 3', logo: 'https://via.placeholder.com/200x80?text=Partner+3' },
  { name: 'Partner 4', logo: 'https://via.placeholder.com/200x80?text=Partner+4' },
  { name: 'Partner 5', logo: 'https://via.placeholder.com/200x80?text=Partner+5' },
  { name: 'Partner 6', logo: 'https://via.placeholder.com/200x80?text=Partner+6' },
];

export function Partners() {
  const ref = useRef<HTMLDivElement>(null);
  const { controls } = useScrollReveal(ref);

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          subtitle="Our Partners"
          title="Trusted by Leading Organizations"
          description="We collaborate with organizations that share our vision for youth empowerment."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative w-full h-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
