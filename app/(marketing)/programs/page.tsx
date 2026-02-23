'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Megaphone, ArrowRight, Users, Award } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';

const programs = [
  {
    slug: 'education',
    icon: BookOpen,
    title: 'Education & Skill Development',
    description: 'Empowering youth through quality education, digital literacy, and vocational training programs.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
    stats: [
      { label: 'Students Reached', value: '5,000+' },
      { label: 'Workshops Conducted', value: '250+' },
    ],
    highlights: [
      'Digital literacy programs',
      'Skill development workshops',
      'Scholarship programs',
      'Mentorship initiatives',
    ],
  },
  {
    slug: 'livelihood',
    icon: Briefcase,
    title: 'Livelihood & Entrepreneurship',
    description: 'Creating sustainable livelihood opportunities through entrepreneurship training and support.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200',
    stats: [
      { label: 'Businesses Started', value: '150+' },
      { label: 'Jobs Created', value: '500+' },
    ],
    highlights: [
      'Entrepreneurship training',
      'Business mentoring',
      'Microfinance support',
      'Market linkages',
    ],
  },
  {
    slug: 'advocacy',
    icon: Megaphone,
    title: 'Advocacy & Leadership',
    description: 'Empowering youth to become advocates for social change and community leaders.',
    image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?w=1200',
    stats: [
      { label: 'Youth Leaders', value: '300+' },
      { label: 'Campaigns Run', value: '50+' },
    ],
    highlights: [
      'Leadership training',
      'Social advocacy campaigns',
      'Community mobilization',
      'Policy engagement',
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-20 bg-background-light">
      <section className="section-padding bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center relative z-10"
          >
            <h1 className="heading-xl mb-6">Our Programs</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90">
              Comprehensive programs designed to empower youth and create lasting community impact
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={program.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-dark opacity-40" />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 mb-6">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h2 className="heading-md mb-4 text-background-dark">{program.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {program.stats.map((stat, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 shadow-md">
                        <div className="text-3xl font-playfair font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-lg mb-3 text-background-dark">
                      Key Highlights
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href={`/programs/${program.slug}`}
                    variant="primary"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background-dark text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Impact Across Communities</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our programs have transformed lives across 120+ villages in India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '10,000+', label: 'Youth Empowered' },
              { icon: BookOpen, value: '250+', label: 'Workshops' },
              { icon: Briefcase, value: '500+', label: 'Jobs Created' },
              { icon: Award, value: '50+', label: 'Awards Won' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent-gold" />
                <div className="text-4xl font-playfair font-bold mb-2 text-accent-gold">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
