'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { 
  Megaphone, Users, Award, TrendingUp, Heart, Shield, 
  Lightbulb, Target, CheckCircle2, ArrowRight, Vote, BookOpen 
} from 'lucide-react';

const stats = [
  { icon: Users, value: '300+', label: 'Youth Leaders', color: 'text-primary' },
  { icon: Megaphone, value: '50+', label: 'Campaigns Run', color: 'text-accent-orange' },
  { icon: Vote, value: '15+', label: 'Policy Changes', color: 'text-accent-gold' },
  { icon: Shield, value: '100K+', label: 'People Reached', color: 'text-accent-purple' },
];

const focusAreas = [
  {
    icon: Heart,
    title: 'Health & Wellbeing',
    description: 'Advocating for better healthcare access, mental health awareness, and healthy living in rural communities.',
    campaigns: ['Mental Health Awareness', 'Clean Water Access', 'Nutrition Education', 'COVID-19 Response'],
  },
  {
    icon: BookOpen,
    title: 'Education Rights',
    description: 'Fighting for quality education, equal opportunities, and inclusive learning for all children.',
    campaigns: ['Right to Education', 'Digital Divide', 'Girl Child Education', 'School Infrastructure'],
  },
  {
    icon: Shield,
    title: 'Social Justice',
    description: 'Standing up against discrimination and working towards an inclusive, equitable society.',
    campaigns: ['Gender Equality', 'Caste Discrimination', 'LGBTQ+ Rights', 'Child Protection'],
  },
  {
    icon: Lightbulb,
    title: 'Environmental Action',
    description: 'Mobilizing youth to protect the environment and combat climate change.',
    campaigns: ['Plastic Free Villages', 'Tree Plantation', 'Clean Energy', 'Water Conservation'],
  },
];

const leadershipProgram = [
  {
    phase: '1',
    title: 'Foundation',
    duration: '3 months',
    description: 'Understanding social issues, communication skills, and community engagement basics.',
    skills: ['Public Speaking', 'Critical Thinking', 'Community Analysis', 'Basic Research'],
  },
  {
    phase: '2',
    title: 'Development',
    duration: '3 months',
    description: 'Advanced training in advocacy, campaign planning, and grassroots mobilization.',
    skills: ['Campaign Strategy', 'Social Media', 'Fundraising', 'Coalition Building'],
  },
  {
    phase: '3',
    title: 'Action',
    duration: '6 months',
    description: 'Lead real campaigns, work with policymakers, and create measurable impact.',
    skills: ['Project Management', 'Policy Advocacy', 'Media Relations', 'Impact Measurement'],
  },
];

const campaigns = [
  {
    title: 'Swachh Gaon Abhiyan',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800',
    impact: '50+ villages cleaned',
    description: 'Youth-led initiative to make villages clean, green, and plastic-free.',
  },
  {
    title: 'Beti Bachao Campaign',
    image: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800',
    impact: '10,000+ girls enrolled',
    description: 'Fighting gender discrimination and promoting girls education.',
  },
  {
    title: 'Digital Literacy Drive',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    impact: '5,000+ trained',
    description: 'Bridging the digital divide in rural communities through training.',
  },
];

const testimonials = [
  {
    name: 'Ananya Singh',
    role: 'Youth Leader',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    quote: 'The leadership program transformed me from a concerned citizen to an effective change-maker. I led a campaign that resulted in 3 new schools in my district.',
  },
  {
    name: 'Arjun Patel',
    role: 'Campaign Coordinator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    quote: 'Through Yuvastambh, I found my voice and purpose. Our environmental campaign planted 10,000 trees and created a green revolution in our region.',
  },
];

export default function AdvocacyProgramPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=1920"
            alt="Advocacy Program"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-dark opacity-80" />
          <div className="absolute inset-0 pattern-grid opacity-10" />
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
              className="inline-flex items-center gap-2 bg-accent-purple/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Megaphone className="w-5 h-5 text-accent-purple" />
              <span className="text-accent-purple font-semibold">Advocacy & Leadership</span>
            </motion.div>
            <h1 className="heading-xl mb-6 animate-fadeUp">
              Empowering <span className="text-gradient-purple">Youth Leaders</span> for Change
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              Training the next generation of leaders to advocate for social justice, equality, and sustainable development.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/get-involved" variant="primary" className="animate-glowGreen">
                Become a Leader
              </Button>
              <Button href="/donate" variant="outline">
                Support Our Cause
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
            <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Creating Impact Through Advocacy</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mobilizing youth to create meaningful change in their communities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-200 dark:to-dark-100 rounded-2xl p-8 shadow-xl dark:shadow-dark-lg text-center group hover:shadow-glow-md transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-purple mb-4 group-hover:animate-bounce`}>
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
            <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Addressing critical social issues through youth-led campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                className="bg-white dark:bg-dark-200 rounded-2xl p-8 shadow-lg dark:shadow-dark-md hover:shadow-2xl dark:hover:shadow-dark-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-purple group-hover:animate-wiggle">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold mb-2 text-background-dark dark:text-white">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
                <div className="bg-background-light dark:bg-dark-100 rounded-xl p-4">
                  <h4 className="font-semibold text-primary dark:text-accent-purple mb-3">Active Campaigns:</h4>
                  <ul className="space-y-2">
                    {area.campaigns.map((campaign, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary dark:text-accent-gold flex-shrink-0" />
                        <span className="text-sm">{campaign}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gradient-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="heading-lg mb-6">Youth Leadership Program</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A comprehensive 12-month program to develop tomorrow's social leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {leadershipProgram.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-glow-gold transition-all duration-300 group relative"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center text-3xl font-playfair font-bold text-background-dark shadow-lg group-hover:animate-bounce">
                  {phase.phase}
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-playfair font-bold mb-2">{phase.title}</h3>
                  <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                    <span>{phase.duration}</span>
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">{phase.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-accent-gold mb-3">Key Skills:</h4>
                    {phase.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/90">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
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
            <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Featured Campaigns</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Youth-led initiatives creating real change in communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-background-light dark:bg-dark-200 rounded-2xl overflow-hidden shadow-lg dark:shadow-dark-md hover:shadow-2xl dark:hover:shadow-dark-lg transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-dark opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-4 right-4 bg-accent-gold text-background-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {campaign.impact}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold mb-3 text-background-dark dark:text-white">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {campaign.description}
                  </p>
                </div>
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
            <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Voices of Change</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our youth leaders who are making a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-dark-200 rounded-2xl p-8 shadow-lg dark:shadow-dark-md hover:shadow-2xl dark:hover:shadow-dark-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-background-dark dark:text-white">{testimonial.name}</h4>
                    <p className="text-primary dark:text-accent-purple text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
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
            <h2 className="heading-lg mb-6">Join the Movement</h2>
            <p className="text-xl mb-8 text-white/80">
              Be part of a generation that's creating positive change. Your voice matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/get-involved" variant="gold" icon={<ArrowRight className="w-5 h-5" />}>
                Start Your Journey
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
