'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Heart, Users, Award, TrendingUp, Activity, ShieldPlus, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Users, value: '25,000+', label: 'Patients Treated', color: 'text-primary' },
  { icon: Activity, value: '150+', label: 'Health Camps', color: 'text-accent-orange' },
  { icon: ShieldPlus, value: '10,000+', label: 'Vaccinations', color: 'text-accent-gold' },
  { icon: TrendingUp, value: '95%', label: 'Community Health Index', color: 'text-accent-purple' },
];

const components = [
  {
    icon: Activity,
    title: 'Mobile Health Clinics',
    description: 'Bringing healthcare to the doorstep of rural and underserved communities through mobile medical units.',
    features: ['Primary healthcare', 'Regular check-ups', 'Emergency support', 'Diagnostic services'],
  },
  {
    icon: ShieldPlus,
    title: 'Preventive Healthcare',
    description: 'Focusing on disease prevention through vaccination drives, hygiene awareness, and health education.',
    features: ['Vaccination programs', 'Sanitation awareness', 'Clean water access', 'Nutrition guidance'],
  },
  {
    icon: Heart,
    title: 'Maternal & Child Health',
    description: 'Specialized care for expectant mothers and infants to ensure healthy births and development.',
    features: ['Prenatal care', 'Postnatal support', 'Child nutrition', 'Early childhood screening'],
  },
  {
    icon: Target,
    title: 'Health Awareness Campaigns',
    description: 'Educating communities about critical health issues, mental health, and wellness practices.',
    features: ['Health workshops', 'Community outreach', 'Mental health support', 'Lifestyle guidance'],
  },
];

const successStories = [
  {
    name: 'Shanti Devi',
    location: 'Rural Rajasthan',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    story: 'Received life-saving treatment through our mobile clinic and now leads a community health group.',
    outcome: 'Full Recovery',
  },
  {
    name: 'Rahul Gupta',
    location: 'Urban Slum, Delhi',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    story: 'Recovered from severe malnutrition through our nutritional intervention program.',
    outcome: 'Healthy Growth',
  },
  {
    name: 'Fatima Bi',
    location: 'Kashmir Valley',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
    story: 'Access to regular maternal health checkups ensured the safe birth of her healthy child.',
    outcome: 'Safe Birth',
  },
];

export default function HealthProgramPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505751172107-5739a00723a5?w=1920"
            alt="Health Program"
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
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Health & Wellness</span>
            </motion.div>
            <h1 className="heading-xl mb-6 animate-fadeUp">
              Ensuring <span className="text-gradient-gold">Healthcare</span> for All
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              Bridging the healthcare gap by providing accessible, affordable, and quality medical services to the most vulnerable sections of society.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/get-involved" variant="gold" className="animate-glow">
                Support Our Mission
              </Button>
              <Button href="/donate" variant="outline">
                Donate to Health
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
              Transforming the health landscape of communities through persistent intervention
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
            <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Our Health Initiatives</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed for lasting impact
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
            <h2 className="heading-lg mb-6">Impact Stories</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real lives saved and improved through our health programs
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
                  <p className="text-accent-gold font-semibold mb-3">{story.location}</p>
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
            <h2 className="heading-lg mb-6">Support Healthy Communities</h2>
            <p className="text-xl mb-8 text-white/80">
              Your contribution can provide critical medical care to those who need it most
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/donate" variant="gold" icon={<ArrowRight className="w-5 h-5" />}>
                Donate Now
              </Button>
              <Button href="/contact" variant="outline">
                Volunteer with Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
