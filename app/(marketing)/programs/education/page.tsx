'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { 
  BookOpen, Users, Award, TrendingUp, Laptop, GraduationCap, 
  Target, CheckCircle2, ArrowRight, Sparkles, Users2 
} from 'lucide-react';

const stats = [
  { icon: Users, value: 5000, label: 'Students', suffix: '+', color: 'text-primary' },
  { icon: BookOpen, value: 250, label: 'Workshops', suffix: '+', color: 'text-accent-orange' },
  { icon: Award, value: 100, label: 'Certificates', suffix: '+', color: 'text-accent-gold' },
  { icon: TrendingUp, value: 85, label: 'Success Rate', suffix: '%', color: 'text-accent-purple' },
];

const programs = [
  {
    icon: Laptop,
    title: 'Digital Literacy',
    description: 'Master essential computer skills, internet navigation, and online safety to thrive in the digital age.',
    features: ['Computer basics', 'Internet usage', 'Email & communication', 'Online safety'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GraduationCap,
    title: 'Vocational Training',
    description: 'Learn practical skills in various trades including tailoring, electrical work, plumbing, and more.',
    features: ['Trade skills', 'Hands-on training', 'Industry certification', 'Job placement'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Scholarship Programs',
    description: 'Financial support for deserving students to pursue higher education and skill development.',
    features: ['Merit-based aid', 'Need-based support', 'Book allowances', 'Tuition coverage'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users2,
    title: 'Mentorship',
    description: 'One-on-one guidance from experienced professionals to help you succeed in your chosen field.',
    features: ['Career counseling', 'Skill guidance', 'Personal development', 'Network building'],
    color: 'from-orange-500 to-red-500',
  },
];

const successStories = [
  {
    name: 'Ravi Kumar',
    age: 19,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    before: 'Struggled to find opportunities in his rural village',
    after: 'Works as a web designer, supports his family, mentors others',
    skills: ['Web Design', 'Digital Marketing', 'Freelancing'],
  },
  {
    name: 'Priya Sharma',
    age: 21,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    before: 'No access to quality education or training',
    after: 'Runs her own tailoring business with 5 employees',
    skills: ['Fashion Design', 'Business Management', 'Quality Control'],
  },
  {
    name: 'Amit Patel',
    age: 22,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    before: 'School dropout with limited prospects',
    after: 'Certified electrician working on major infrastructure projects',
    skills: ['Electrical Work', 'Safety Protocols', 'Project Management'],
  },
];

export default function EducationProgramPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920"
            alt="Education Program"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-dark opacity-80" />
          <div className="absolute inset-0 pattern-dots opacity-10" />
        </div>
        
        <FloatingParticles count={25} color="rgba(31, 122, 76, 0.3)" />
        
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
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Education & Skill Development</span>
            </motion.div>
            
            <h1 className="heading-xl mb-6 animate-fadeUp">
              Building Futures Through <span className="text-gradient-gold">Education</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              Empowering youth with quality education, digital literacy, and vocational training to succeed in today's economy.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/get-involved" variant="gold" className="animate-glow">
                Enroll Now
              </Button>
              <Button href="/donate" variant="outline">
                Support This Program
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-dark-300">
        <Container>
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Impact in Numbers</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transforming lives through education and skill development
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-200 dark:to-dark-100 rounded-2xl p-8 shadow-xl dark:shadow-dark-lg text-center group hover:shadow-glow-md transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 group-hover:animate-bounce">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-playfair font-bold mb-2 ${stat.color}`}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background-light dark:bg-dark-400">
        <Container>
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6 text-background-dark dark:text-white">Our Programs</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive training designed to equip you for success
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <RevealOnScroll key={index} delay={index * 0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-dark-200 rounded-2xl p-8 shadow-lg dark:shadow-dark-md hover:shadow-2xl dark:hover:shadow-dark-lg transition-all duration-300 group relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} group-hover:animate-wiggle`}>
                        <program.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-playfair font-bold mb-2 text-background-dark dark:text-white">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {program.features.map((feature, i) => (
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
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <FloatingParticles count={20} color="rgba(255, 255, 255, 0.2)" />
        
        <Container>
          <RevealOnScroll>
            <div className="text-center mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-accent-gold" />
                <span className="text-accent-gold font-semibold">Success Stories</span>
              </div>
              <h2 className="heading-lg mb-6">Lives We've Transformed</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Real people, real transformations, lasting impact
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {successStories.map((story, index) => (
              <RevealOnScroll key={index} delay={index * 0.2}>
                <motion.div
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
                    <div className="absolute top-4 right-4 bg-accent-gold text-background-dark px-3 py-1 rounded-full text-sm font-semibold">
                      Age {story.age}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-playfair font-bold mb-4">{story.name}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-sm text-white/60 mb-1">Before:</div>
                        <p className="text-white/80 text-sm">{story.before}</p>
                      </div>
                      <div>
                        <div className="text-sm text-accent-gold mb-1">After:</div>
                        <p className="text-white font-semibold text-sm">{story.after}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {story.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gradient-dark-blue text-white">
        <Container>
          <RevealOnScroll>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6">Ready to Transform Your Future?</h2>
              <p className="text-xl mb-8 text-white/80">
                Join thousands of youth who have already started their journey to success
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/get-involved" variant="gold" icon={<ArrowRight className="w-5 h-5" />}>
                  Enroll Now
                </Button>
                <Button href="/contact" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </div>
  );
}
