'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { campaignItems } from '@/lib/community-data';
import { iconMap } from '@/lib/icons';

export default function CampaignsPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300 min-h-screen">
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-primary dark:bg-gradient-dark-blue text-white">
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <motion.div
          className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent-gold/30 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Container className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-xl mb-6 text-glow-gold"
          >
            Our Campaigns
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 font-playfair"
          >
            Turning unused resources into dreams and everyday actions into lasting change.
          </motion.p>
        </Container>
      </section>

      <section className="py-24 bg-background-light dark:bg-dark-400">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-primary dark:text-accent-gold font-bold uppercase tracking-widest mb-3">Active Initiatives</p>
              <h2 className="heading-lg text-background-dark dark:text-white">Empowering Through Action</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Explore our current campaigns focused on education, hygiene, and social support. Each initiative is a pillar of our mission to create a better future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {campaignItems.map((campaign, index) => (
              <motion.article
                key={campaign.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full rounded-[2rem] bg-white dark:bg-dark-300 border border-primary/5 dark:border-accent-gold/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${campaign.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute top-6 left-6 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    {(() => {
                      const Icon = iconMap[campaign.icon as keyof typeof iconMap];
                      return Icon ? <Icon className="w-6 h-6" /> : null;
                    })()}
                  </div>
                  
                  <div className="absolute top-6 right-6">
                    <div className="px-4 py-1.5 rounded-full text-xs font-bold bg-accent-gold text-background-dark shadow-lg">
                      {campaign.progress}% Impacted
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-accent-gold transition-colors">
                      {campaign.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-sm text-primary dark:text-accent-gold font-bold uppercase tracking-wider mb-4">
                    {campaign.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed line-clamp-3">
                    {campaign.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Progress</span>
                      <span className="text-sm font-bold text-background-dark dark:text-white">{campaign.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100 dark:bg-dark-200 mb-8 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${campaign.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="h-full bg-gradient-gold shadow-glow-gold"
                      />
                    </div>

                    <Button
                      href={campaign.href}
                      variant="ghost"
                      className="group/btn !px-0 !py-0 hover:bg-transparent text-primary dark:text-accent-gold font-bold flex items-center gap-2"
                    >
                      Explore Campaign
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-background-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <Container className="relative z-10 text-center">
          <h2 className="heading-md mb-8">Ready to support a cause?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/donate" variant="gold" size="lg" className="rounded-full px-12">
              Donate Now
            </Button>
            <Button href="/get-involved" variant="outline" size="lg" className="rounded-full px-12 border-white text-white hover:bg-white hover:text-background-dark">
              Get Involved
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
