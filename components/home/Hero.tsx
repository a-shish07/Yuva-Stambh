'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { GradientBlob } from '@/components/ui/GradientBlob';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background-dark dark:bg-dark-400 mt-20">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-80 dark:opacity-90" />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      <GradientBlob color="from-primary/30 to-accent-gold/30" position="top-left" size="w-[500px] h-[500px]" />
      <GradientBlob color="from-accent-purple/20 to-accent-orange/20" position="bottom-right" size="w-[600px] h-[600px]" />
      
      <FloatingParticles count={30} color="rgba(227, 178, 60, 0.4)" />
      
      <div className="absolute inset-0 pattern-dots opacity-5" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-accent-gold/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-accent-gold/30"
        >
          <Sparkles className="w-5 h-5 text-accent-gold animate-pulse" />
          <span className="text-accent-gold font-semibold text-lg">Transforming Lives Since 2015</span>
        </motion.div>

        <AnimatedText
          text="Empowering Youth."
          className="heading-xl text-white mb-4 text-shadow-lg"
        />
        <AnimatedText
          text="Transforming Futures."
          className="heading-xl text-gradient-gold mb-8 text-shadow-lg"
          delay={0.3}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto text-shadow leading-relaxed"
        >
          We equip young leaders with skills, opportunities, and support to build sustainable communities across India through education, livelihood, and advocacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MagneticButton strength={0.2}>
            <Button 
              href="/donate" 
              variant="gold" 
              size="lg" 
              icon={<Heart className="w-5 h-5" />}
              className="animate-glow shadow-2xl"
            >
              Donate Now
            </Button>
          </MagneticButton>
          
          <MagneticButton strength={0.2}>
            <Button 
              href="/get-involved" 
              variant="outline" 
              size="lg" 
              icon={<ArrowRight className="w-5 h-5" />}
              className="hover:bg-white/10"
            >
              Become a Volunteer
            </Button>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-12 flex justify-center gap-12 text-white"
        >
          {[
            { value: '10,000+', label: 'Youth Empowered' },
            { value: '120+', label: 'Villages Reached' },
            { value: '15+', label: 'Awards Won' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-playfair font-bold text-accent-gold mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/60 dark:border-accent-gold rounded-full flex justify-center p-2 cursor-pointer hover:border-accent-gold transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div 
            className="w-1 h-3 bg-white dark:bg-accent-gold rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
