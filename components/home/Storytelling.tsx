'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { slideInLeft, slideInRight } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Storytelling() {
  const ref = useRef<HTMLDivElement>(null);
  const { controls } = useScrollReveal(ref);

  return (
    <section className="section-padding bg-background-light overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={slideInLeft}>
            <ParallaxImage
              src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800"
              alt="Youth working together"
              className="w-full h-[500px]"
            />
          </motion.div>

          <motion.div variants={slideInRight} className="space-y-6">
            <span className="text-primary font-semibold text-lg uppercase tracking-wide">
              Impact Stories
            </span>
            <h2 className="heading-lg text-background-dark">
              Real Stories, Real Impact
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every day, we witness the transformative power of education and empowerment. 
              From rural villages to urban communities, young leaders are rising to create 
              lasting change in their societies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Meet Priya, a 22-year-old who turned her village&apos;s waste management crisis 
              into a thriving recycling enterprise, creating jobs for 15 youth in her community.
            </p>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg group animated-underline"
            >
              Read More Stories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
