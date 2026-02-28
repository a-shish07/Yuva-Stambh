'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Megaphone, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const programs = [
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Providing quality education and skill development to underprivileged youth.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    href: '/programs/education',
  },
  {
    icon: Heart,
    title: 'Health',
    description: 'Providing accessible healthcare services and promoting wellness in communities.',
    image: 'https://images.unsplash.com/photo-1505751172107-5739a00723a5?w=800',
    href: '/programs/health',
  },
  {
    icon: Briefcase,
    title: 'Livelihood',
    description: 'Creating sustainable livelihood opportunities through entrepreneurship training.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    href: '/programs/livelihood',
  },
  {
    icon: Sparkles,
    title: 'Women Empowerment',
    description: 'Empowering women through skill development and leadership training.',
    image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?w=800',
    href: '/programs/women-empowerment',
  },
];

export function ProgramsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { controls } = useScrollReveal(ref);

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          subtitle="Our Programs"
          title="Building Foundations for Tomorrow"
          description="We focus on three core pillars to create lasting impact in communities."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Link href={program.href}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg h-[500px] cursor-pointer">
                  <div className="absolute inset-0">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-dark opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>

                  <div className="relative h-full flex flex-col justify-end p-8 text-white">
                    <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-gold/20 backdrop-blur-sm group-hover:bg-accent-gold transition-colors">
                      <program.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-playfair text-3xl font-bold mb-3 group-hover:text-accent-gold transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-white/90 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent-gold font-semibold">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
