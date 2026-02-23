'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { fadeUp } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { controls } = useScrollReveal(ref);

  return (
    <section className="relative section-padding bg-background-dark overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="absolute inset-0 gradient-radial" />

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-accent-gold/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <Heart className="w-8 h-8" fill="currentColor" />
        </motion.div>
      ))}

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-center relative z-10"
        >
          <h2 className="heading-lg text-white mb-6">
            Be the Pillar of Someone&apos;s Future
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Your contribution can transform lives. Join us in building a brighter tomorrow 
            for thousands of young leaders across India.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              href="/donate"
              variant="gold"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
              className="shadow-2xl animate-glow"
            >
              Donate Now
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
