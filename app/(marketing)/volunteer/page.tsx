'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Briefcase, Calendar, MapPin, Clock, Award } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/common/Button';

const volunteerRoles = [
  {
    icon: BookOpen,
    title: 'Education Volunteer',
    description: 'Teach and mentor youth in our education programs, helping them build academic and life skills.',
    commitment: '4-6 hours/week',
    location: 'On-site & Remote',
    skills: ['Teaching', 'Patience', 'Communication'],
  },
  {
    icon: Briefcase,
    title: 'Skill Development Trainer',
    description: 'Share your professional expertise to train youth in vocational and technical skills.',
    commitment: '6-8 hours/week',
    location: 'On-site',
    skills: ['Professional Skills', 'Training', 'Mentorship'],
  },
  {
    icon: Heart,
    title: 'Community Outreach',
    description: 'Engage with communities, organize events, and help spread awareness about our programs.',
    commitment: '5-10 hours/week',
    location: 'Field-based',
    skills: ['Communication', 'Networking', 'Event Planning'],
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Guide and support beneficiaries through their personal and professional development journey.',
    commitment: '3-5 hours/week',
    location: 'Remote',
    skills: ['Listening', 'Guidance', 'Empathy'],
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Make Real Impact',
    description: 'See tangible change in the lives of youth and communities you work with.',
  },
  {
    icon: Users,
    title: 'Build Networks',
    description: 'Connect with like-minded individuals and organizations passionate about social change.',
  },
  {
    icon: BookOpen,
    title: 'Learn & Grow',
    description: 'Develop new skills, gain experience, and broaden your perspective.',
  },
  {
    icon: Heart,
    title: 'Personal Fulfillment',
    description: 'Experience the joy and satisfaction of giving back to society.',
  },
];

const process = [
  {
    step: '01',
    title: 'Apply Online',
    description: 'Fill out our volunteer application form with your details and interests.',
  },
  {
    step: '02',
    title: 'Interview & Orientation',
    description: 'Participate in a brief interview and attend our volunteer orientation session.',
  },
  {
    step: '03',
    title: 'Training',
    description: 'Receive specific training for your volunteer role and our programs.',
  },
  {
    step: '04',
    title: 'Start Making Impact',
    description: 'Begin your volunteer journey and start creating positive change.',
  },
];

const testimonials = [
  {
    quote: 'Volunteering with Yuvastambh has been one of the most rewarding experiences of my life. The impact we create together is truly transformational.',
    author: 'Amit Sharma',
    role: 'Education Volunteer',
    duration: '2 years',
  },
  {
    quote: 'I came to volunteer and ended up learning more than I taught. The resilience and determination of these youth inspire me every day.',
    author: 'Neha Patel',
    role: 'Skill Development Trainer',
    duration: '1.5 years',
  },
  {
    quote: 'Being part of this community has given my weekends purpose and meaning. I look forward to every session with the youth.',
    author: 'Rajesh Kumar',
    role: 'Mentorship Program',
    duration: '3 years',
  },
];

export default function VolunteerPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300">
      <section className="section-padding bg-gradient-primary dark:bg-gradient-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10 dark:opacity-20" />
        <div className="absolute inset-0 gradient-spotlight-light dark:gradient-spotlight-dark" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center relative z-10"
          >
            <motion.h1 
              className="heading-xl mb-6 text-glow-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Volunteer With Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join our community of change-makers and help empower the next generation of leaders
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8"
            >
              <Button href="#apply" variant="gold" size="lg">
                Apply to Volunteer
              </Button>
            </motion.div>
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
              subtitle="Volunteer Opportunities"
              title="Find Your Role"
              description="Explore various ways you can contribute your time, skills, and passion to our mission."
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="bg-white dark:bg-dark-300 border-0 shadow-xl dark:shadow-dark-lg card-hover h-full">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 dark:bg-gradient-primary/20 mb-4 glow-effect-green"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <role.icon className="w-8 h-8 text-primary dark:text-accent-gold" />
                  </motion.div>
                  
                  <h3 className="font-playfair text-2xl font-bold mb-3 text-background-dark dark:text-white">
                    {role.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {role.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary dark:text-accent-gold" />
                      <span className="text-gray-600 dark:text-gray-400">{role.commitment}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary dark:text-accent-gold" />
                      <span className="text-gray-600 dark:text-gray-400">{role.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-primary/10 dark:bg-accent-gold/20 text-primary dark:text-accent-gold rounded-full text-xs font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
              subtitle="Why Volunteer"
              title="Benefits of Volunteering"
              description="Discover the rewards and opportunities that come with being a Yuvastambh volunteer."
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-center">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold/10 dark:bg-gradient-gold/20 mb-4"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <benefit.icon className="w-8 h-8 text-accent-gold" />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2 text-background-dark dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              subtitle="How It Works"
              title="Volunteer Journey"
              description="Your path to making a difference starts here. Follow these simple steps."
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="space-y-8"
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
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-primary dark:bg-gradient-gold flex items-center justify-center text-white font-playfair font-bold text-xl shadow-lg glow-effect-green"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.step}
                    </motion.div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-dark-300 rounded-2xl p-6 shadow-lg dark:shadow-dark-lg card-hover">
                    <h3 className="font-playfair text-xl font-bold mb-2 text-background-dark dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-dark-300">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Volunteer Voices"
              title="What Our Volunteers Say"
              description="Hear from our community of volunteers about their experience."
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
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="bg-background-light dark:bg-dark-400 border-0 shadow-xl dark:shadow-dark-lg card-hover h-full">
                  <Heart className="w-12 h-12 text-primary dark:text-accent-gold mb-4 opacity-50" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <p className="font-semibold text-background-dark dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-primary dark:text-accent-gold mt-1">
                      Volunteering for {testimonial.duration}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="apply" className="section-padding bg-gradient-primary dark:bg-gradient-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-lg mb-6 text-glow-gold">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join our volunteer community and be part of the change you wish to see in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/get-involved" variant="gold" size="lg">
                Apply Now
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
