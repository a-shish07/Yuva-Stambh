'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Heart, Users, Award, TrendingUp, Sparkles, Megaphone, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Users, value: '15,000+', label: 'Women Empowered', color: 'text-primary' },
  { icon: Award, value: '250+', label: 'Self-Help Groups', color: 'text-accent-orange' },
  { icon: Sparkles, value: '5,000+', label: 'Skill Certifications', color: 'text-accent-gold' },
  { icon: TrendingUp, value: '80%', label: 'Leadership Increase', color: 'text-accent-purple' },
];

const components = [
  {
    icon: Sparkles,
    title: 'Skill Development',
    description: 'Providing vocational training in diverse fields from traditional crafts to modern digital skills.',
    features: ['Tailoring & Embroidery', 'Digital literacy', 'Beautician courses', 'Handicraft training'],
  },
  {
    icon: Users,
    title: 'Self-Help Groups (SHGs)',
    description: 'Fostering collective financial independence through micro-savings and peer support networks.',
    features: ['Financial planning', 'Micro-credit access', 'Collective bargaining', 'Social support'],
  },
  {
    icon: Megaphone,
    title: 'Rights & Advocacy',
    description: 'Educating women about their legal rights, health, and social standing in the community.',
    features: ['Legal awareness', 'Health education', 'Leadership training', 'Social advocacy'],
  },
  {
    icon: Target,
    title: 'Entrepreneurship Support',
    description: 'Incubating women-led micro-enterprises with mentoring and market linkage support.',
    features: ['Business coaching', 'Market access', 'Product branding', 'Financial management'],
  },
];

const successStories = [
  {
    name: 'Anita Devi',
    business: 'Textile Enterprise',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    story: 'Joined an SHG, learned advanced embroidery, and now runs a collective employing 20 local women.',
    outcome: 'Business Owner',
  },
  {
    name: 'Kavita Sharma',
    business: 'Community Leader',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    story: 'Through our leadership program, she became the first female Sarpanch in her district.',
    outcome: 'Elected Official',
  },
  {
    name: 'Sunita Rawat',
    business: 'Digital Center',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400',
    story: 'A school dropout who mastered computer skills and now runs a digital services center in her village.',
    outcome: 'Tech Entrepreneur',
  },
];

export default function WomenEmpowermentPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=1920"
            alt="Women Empowerment Program"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-dark opacity-80" />
          <div className="absolute inset-0 pattern-dots opacity-10" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-white max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Megaphone className="w-5 h-5 text-accent-gold" />
              <span className="text-accent-gold font-semibold">Women Empowerment</span>
            </motion.div>
            <h1 className="heading-xl mb-6 animate-fadeUp">
              Empowering Women, <span className="text-gradient-gold">Transforming</span> Nations
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              We believe that when you empower a woman, you empower a whole family and community. Our holistic programs focus on financial independence, social equity, and leadership.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/get-involved" variant="gold" className="animate-glow">
                Join the Movement
              </Button>
              <Button href="/donate" variant="outline">
                Support Women Empowerment
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-dark-300">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Impact at a Glance</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Creating a ripple effect of change through female leadership and economic independence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-200 dark:to-dark-100 rounded-2xl p-8 shadow-xl dark:shadow-dark-lg text-center group hover:shadow-glow-md transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 group-hover:animate-float`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-playfair font-bold mb-2 ${stat.color} group-hover:animate-pulse`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background-light dark:bg-dark-400">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Our Strategic Pillars</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A holistic approach to breaking barriers and creating opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {components.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-dark-200 rounded-2xl p-8 shadow-lg dark:shadow-dark-md hover:shadow-2xl dark:hover:shadow-dark-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary group-hover:animate-wiggle">
                    <component.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold mb-2 text-background-dark dark:text-white">
                      {component.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {component.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary dark:text-accent-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="heading-lg mb-6">Success Stories</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The real faces of change and empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-glow-gold transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-dark opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-playfair font-bold">{story.name}</h3>
                    <span className="px-3 py-1 bg-accent-gold text-background-dark rounded-full text-sm font-semibold">
                      {story.outcome}
                    </span>
                  </div>
                  <p className="text-accent-gold font-semibold mb-3">{story.business}</p>
                  <p className="text-white/80 leading-relaxed">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gradient-dark-blue text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-6">Empower a Woman Today</h2>
            <p className="text-xl mb-8 text-white/80">
              Join us in our mission to create a world where every woman has the chance to thrive and lead.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/donate" variant="gold" icon={<ArrowRight className="w-5 h-5" />}>
                Support a Woman
              </Button>
              <Button href="/contact" variant="outline">
                Join Our Network
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
