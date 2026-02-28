'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, GraduationCap, TrendingUp, Quote } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/ui/Card';

const impactStats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Books Collected',
    description: 'Promoting reading habits through "Raddi Se Library"',
  },
  {
    icon: GraduationCap,
    value: '1,000+',
    label: 'Students Educated',
    description: 'Across Evening School, Gyaan Shakti, and E-Shiksha',
  },
  {
    icon: TrendingUp,
    value: '120+',
    label: 'Students Employed',
    description: 'Career-ready youth through digital empowerment',
  },
  {
    icon: Heart,
    value: '3,000+',
    label: 'Hygiene Support',
    description: 'Sanitary pads distributed yearly through Project Pankh',
  },
];

const stories = [
  {
    name: 'Priya Sharma',
    age: 22,
    village: 'Dharavi, Mumbai',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600',
    story: 'From a small village with limited opportunities, Priya joined our vocational training program. Today, she runs her own tailoring business, employing 5 women from her community.',
    impact: 'Started own business, employing 5 people',
    program: 'Livelihood Training',
  },
  {
    name: 'Rahul Verma',
    age: 19,
    village: 'Nashik, Maharashtra',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    story: 'Rahul was a school dropout due to financial constraints. Through our education support program, he completed his degree and now works as a software developer.',
    impact: 'Completed degree, now a software developer',
    program: 'Education Support',
  },
  {
    name: 'Anita Devi',
    age: 25,
    village: 'Raigad, Maharashtra',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600',
    story: 'A passionate advocate for women\'s rights, Anita participated in our leadership program. She now leads a women\'s collective working on sustainable farming.',
    impact: 'Leading women\'s collective of 50+ members',
    program: 'Leadership & Advocacy',
  },
  {
    name: 'Suresh Kumar',
    age: 21,
    village: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600',
    story: 'Suresh learned digital marketing through our skill development program. He now runs a successful digital agency and trains other youth in his village.',
    impact: 'Running digital agency, training others',
    program: 'Skill Development',
  },
];

const testimonials = [
  {
    quote: 'Yuvastambh didn\'t just give me skills, they gave me confidence and a vision for my future. I\'m forever grateful.',
    author: 'Meera Patel',
    role: 'Program Beneficiary',
    program: 'Vocational Training',
  },
  {
    quote: 'The support and mentorship I received transformed not just my life, but my entire family\'s future. Thank you!',
    author: 'Vijay Singh',
    role: 'Entrepreneur',
    program: 'Livelihood Program',
  },
  {
    quote: 'Through this program, I discovered my potential and learned that my background doesn\'t define my future.',
    author: 'Rekha Sharma',
    role: 'Teacher',
    program: 'Education Support',
  },
];

export default function ImpactPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300">
      <section className="section-padding bg-gradient-primary dark:bg-gradient-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10 dark:opacity-20" />
        <div className="absolute inset-0 gradient-spotlight-light dark:gradient-spotlight-dark" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center relative z-10"
          >
            <motion.h1 
              className="heading-xl mb-6 text-glow-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our Impact & Stories
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Real stories of transformation, hope, and empowerment from the communities we serve
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-light dark:gradient-mesh-dark" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Impact by Numbers"
              title="Creating Measurable Change"
              description="Our commitment to transparency and accountability drives us to track and share our impact."
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <Card className="text-center bg-white dark:bg-dark-300 border-0 shadow-xl dark:shadow-dark-lg card-hover group">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 dark:bg-gradient-primary/20 mb-4 glow-effect-green"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary dark:text-accent-gold" />
                  </motion.div>
                  <div className="text-4xl font-playfair font-bold mb-2 text-primary dark:text-accent-gold text-glow">
                    {stat.value}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-background-dark dark:text-white">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-dark-300 relative overflow-hidden">
        <div className="absolute inset-0 pattern-hexagon opacity-20 dark:opacity-10" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Success Stories"
              title="Lives We've Touched"
              description="Meet some of the incredible individuals whose lives have been transformed through our programs."
            />
          </motion.div>

          <div className="space-y-16">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl dark:shadow-dark-lg image-hover-zoom">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-dark opacity-20" />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="inline-block px-4 py-2 bg-gradient-primary/10 dark:bg-gradient-primary/20 rounded-full mb-4">
                    <span className="text-primary dark:text-accent-gold font-semibold text-sm">
                      {story.program}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-3xl font-bold mb-2 text-background-dark dark:text-white">
                    {story.name}, {story.age}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{story.village}</p>
                  
                  <div className="relative pl-6 border-l-4 border-primary dark:border-accent-gold mb-6">
                    <Quote className="absolute -left-3 top-0 w-6 h-6 text-primary dark:text-accent-gold bg-white dark:bg-dark-300" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                      "{story.story}"
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/10 dark:bg-accent-gold/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-accent-gold" />
                    <span className="text-background-dark dark:text-white font-semibold text-sm">
                      {story.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background-light dark:bg-dark-400 relative overflow-hidden">
        <div className="absolute inset-0 gradient-aurora-light dark:gradient-aurora-dark" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Testimonials"
              title="In Their Own Words"
              description="Hear directly from our beneficiaries about their journey with Yuvastambh."
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <Card className="bg-white dark:bg-dark-300 border-0 shadow-xl dark:shadow-dark-lg card-hover h-full">
                  <Quote className="w-12 h-12 text-primary dark:text-accent-gold mb-4 opacity-50" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <p className="font-semibold text-background-dark dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-primary dark:text-accent-gold mt-1">
                      {testimonial.program}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
