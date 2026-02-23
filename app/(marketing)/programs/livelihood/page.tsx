'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Briefcase, Users, Award, TrendingUp, DollarSign, Rocket, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Users, value: '150+', label: 'Businesses Started', color: 'text-primary' },
  { icon: Briefcase, value: '500+', label: 'Jobs Created', color: 'text-accent-orange' },
  { icon: DollarSign, value: '₹2Cr+', label: 'Revenue Generated', color: 'text-accent-gold' },
  { icon: TrendingUp, value: '90%', label: 'Success Rate', color: 'text-accent-purple' },
];

const components = [
  {
    icon: Rocket,
    title: 'Entrepreneurship Training',
    description: 'Comprehensive training programs covering business planning, financial management, and market analysis.',
    features: ['Business plan development', 'Financial literacy', 'Market research skills', 'Legal compliance'],
  },
  {
    icon: Users,
    title: 'Business Mentoring',
    description: 'One-on-one mentorship from successful entrepreneurs and business professionals.',
    features: ['Personal business coach', 'Monthly review sessions', 'Problem-solving support', 'Network building'],
  },
  {
    icon: DollarSign,
    title: 'Microfinance Support',
    description: 'Access to microloans and financial resources to kickstart your business venture.',
    features: ['Low-interest loans', 'Flexible repayment', 'No collateral required', 'Quick approval'],
  },
  {
    icon: Target,
    title: 'Market Linkages',
    description: 'Connect with buyers, suppliers, and distribution networks to grow your business.',
    features: ['Buyer connections', 'Supply chain support', 'Digital marketplace', 'Export opportunities'],
  },
];

const successStories = [
  {
    name: 'Meera Devi',
    business: 'Handicrafts',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    story: 'Started with a ₹50,000 loan, now employs 15 women and exports products globally.',
    revenue: '₹25L/year',
  },
  {
    name: 'Rajesh Kumar',
    business: 'Organic Farming',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    story: 'Transformed his 2-acre farm into a thriving organic produce business.',
    revenue: '₹40L/year',
  },
  {
    name: 'Priya Sharma',
    business: 'Beauty Salon',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    story: 'Opened 3 salons across the district, providing jobs to 20+ women.',
    revenue: '₹60L/year',
  },
];

const milestones = [
  { year: '2016', title: 'Program Launch', value: '10', description: 'First batch of entrepreneurs' },
  { year: '2018', title: 'Expansion', value: '50+', description: 'Businesses across 5 districts' },
  { year: '2020', title: 'Digital Push', value: '100+', description: 'Online businesses launched' },
  { year: '2024', title: 'Impact Scale', value: '500+', description: 'Jobs created, thriving ecosystem' },
];

export default function LivelihoodProgramPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920"
            alt="Livelihood Program"
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
              <Briefcase className="w-5 h-5 text-accent-gold" />
              <span className="text-accent-gold font-semibold">Livelihood & Entrepreneurship</span>
            </motion.div>
            <h1 className="heading-xl mb-6 animate-fadeUp">
              Building Sustainable <span className="text-gradient-gold">Livelihoods</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              Empowering rural youth and women to become successful entrepreneurs and create lasting economic impact in their communities.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/get-involved" variant="gold" className="animate-glow">
                Join the Program
              </Button>
              <Button href="/donate" variant="outline">
                Support This Cause
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
              Creating economic opportunities and transforming lives across rural India
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
            <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Program Components</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A holistic approach to building successful businesses
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
              Meet the entrepreneurs who are changing their communities
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
                      {story.revenue}
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

      <section className="section-padding bg-white dark:bg-dark-300">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to creating a thriving entrepreneurial ecosystem
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-primary hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-background-light dark:bg-dark-200 rounded-2xl p-6 shadow-lg dark:shadow-dark-md inline-block"
                    >
                      <span className="text-4xl font-playfair font-bold text-primary dark:text-accent-gold">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 mb-2 text-background-dark dark:text-white">
                        {milestone.title}
                      </h3>
                      <div className="text-3xl font-playfair font-bold text-accent-orange mb-2">
                        {milestone.value}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-gradient-gold items-center justify-center shadow-lg animate-ping" style={{ animationDuration: '3s' }}>
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
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
            <h2 className="heading-lg mb-6">Ready to Start Your Business Journey?</h2>
            <p className="text-xl mb-8 text-white/80">
              Join our next batch of entrepreneurs and transform your business idea into reality
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/get-involved" variant="gold" icon={<ArrowRight className="w-5 h-5" />}>
                Apply Now
              </Button>
              <Button href="/contact" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
