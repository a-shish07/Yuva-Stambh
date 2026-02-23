'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/ui/Card';

// Import Timeline component if it's custom; we'll wrap its items here
import { Timeline } from '@/components/ui/Timeline';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower youth through education, skill development, and leadership training to create sustainable social impact in underserved communities across India.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'A future where every young person has the opportunity to reach their full potential and become a pillar of positive change in their community.',
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'Integrity, empowerment, sustainability, inclusivity, and transparency guide everything we do.',
  },
  {
    icon: Users,
    title: 'Approach',
    description: 'Community-led, youth-focused programs that create lasting impact through education, livelihood, and advocacy.',
  },
];

const timeline = [
  {
    year: '2015',
    title: 'Foundation',
    description: 'Yuvastambh was founded with a vision to empower youth in rural India through education and skill development.',
  },
  {
    year: '2017',
    title: 'First 1000',
    description: 'Reached our first milestone of empowering 1,000 youth across 20 villages in Maharashtra.',
  },
  {
    year: '2019',
    title: 'Expansion',
    description: 'Expanded programs to 5 states, launching livelihood and entrepreneurship initiatives.',
  },
  {
    year: '2021',
    title: 'Digital Transformation',
    description: 'Launched online learning platforms, reaching 5,000+ youth during the pandemic.',
  },
  {
    year: '2023',
    title: '10,000+ Lives',
    description: 'Crossed the milestone of empowering 10,000+ youth with sustainable skills and opportunities.',
  },
  {
    year: '2025',
    title: 'Future Forward',
    description: 'Committed to empowering 50,000 youth by 2030 with enhanced programs and partnerships.',
  },
];

const team = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: '15+ years in social development',
  },
  {
    name: 'Priya Sharma',
    role: 'Director of Programs',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Expert in youth empowerment',
  },
  {
    name: 'Amit Patel',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    bio: 'Strategic operations leader',
  },
  {
    name: 'Sneha Reddy',
    role: 'Community Engagement',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Community development specialist',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

// Stats counter component
const StatCounter = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''));
      if (!isNaN(numericValue)) {
        let start = 0;
        const duration = 2000;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const current = Math.min(Math.floor((progress / duration) * numericValue), numericValue);
          setCount(current);
          if (progress < duration) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      } else {
        setCount(parseInt(value) || 0);
      }
    }
  }, [isInView, value]);

  return (
    <motion.div ref={ref} className="text-center" whileHover={{ scale: 1.05 }}>
      <motion.div
        className="text-5xl font-playfair font-bold mb-2 text-accent-gold text-glow-gold"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {value.includes('+') ? `${count}+` : count || value}
      </motion.div>
      <p className="text-white/80 dark:text-white/90">{label}</p>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary dark:bg-gradient-dark-blue text-white py-20 md:py-28">
        <div className="absolute inset-0 pattern-dots opacity-10 dark:opacity-20" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255,215,0,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center"
          >
            <motion.h1
              className="heading-xl mb-6 text-glow-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              About Yuvastambh
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The Pillar of Youth – Building sustainable communities through youth empowerment since 2015
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-light dark:gradient-mesh-dark" />
        <Container className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center bg-white dark:bg-dark-300 border-0 shadow-xl dark:shadow-dark-lg card-hover group h-full">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 dark:bg-gradient-primary/20 mb-4 glow-effect-green"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-8 h-8 text-primary dark:text-accent-gold" />
                  </motion.div>
                  <h3 className="font-playfair text-2xl font-bold mb-3 text-background-dark dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Timeline Section */}
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
              subtitle="Our Journey"
              title="A Decade of Impact"
              description="From a small initiative to a nationwide movement empowering thousands of youth."
            />
          </motion.div>

          {/* Wrap Timeline items with motion if Timeline is a custom component */}
          <div className="relative">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="mb-8 last:mb-0"
              >
                <div className="bg-white dark:bg-dark-400 rounded-2xl shadow-lg dark:shadow-dark-lg p-6 border-l-4 border-primary dark:border-accent-gold hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="text-3xl font-playfair font-bold text-primary dark:text-accent-gold">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-background-dark dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
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
              subtitle="Leadership Team"
              title="Meet the People Behind the Mission"
              description="Our passionate team is dedicated to creating lasting impact in communities."
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants} className="group perspective">
                <motion.div
                  whileHover={{ rotateX: 5, rotateY: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white dark:bg-dark-300 rounded-2xl shadow-lg dark:shadow-dark-lg overflow-hidden card-hover transform-gpu preserve-3d"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-playfair text-xl font-bold mb-1 text-background-dark dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-primary dark:text-accent-gold font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background-dark dark:bg-dark-200 text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute inset-0 gradient-wave-dark" />
        <Container className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <StatCounter value="2015" label="Year Founded" />
            <StatCounter value="120+" label="Villages Reached" />
            <StatCounter value="10,000+" label="Lives Transformed" />
          </motion.div>
        </Container>
      </section>
    </div>
  );
}