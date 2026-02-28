'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Users, Heart, Info, Quote as QuoteIcon } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { useCountUp } from '@/hooks/useCountUp';
import { iconMap } from '@/lib/icons';

function StatItem({ value, label, icon: Icon }: { value: string, label: string, icon: any }) {
  const number = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  const { ref, count } = useCountUp({ end: number, duration: 2000 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-dark-300 p-6 rounded-2xl shadow-lg border border-primary/5 dark:border-accent-gold/10"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent-gold/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary dark:text-accent-gold" />
      </div>
      <div className="text-3xl font-bold text-background-dark dark:text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
}

export default function CampaignClient({ campaign, related }: { campaign: any, related: any[] }) {
  const stats = [
    { label: 'Project Reach', value: campaign.impact.split(' ')[0], icon: Users },
    { label: 'Success Rate', value: `${campaign.progress}%`, icon: TrendingUp },
    { label: 'Community Support', value: 'High', icon: Heart },
  ];

  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300 min-h-screen">
      <section
        className="relative overflow-hidden text-white py-24 md:py-40"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 24, 19, 0.7), rgba(8, 24, 19, 0.8)), url(${campaign.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute inset-0 pattern-grid" 
        />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <Link href="/campaigns" className="inline-flex items-center gap-2 text-accent-gold hover:translate-x-[-4px] transition-transform mb-8 font-medium">
              <ArrowLeft className="w-5 h-5" />
              Back to all campaigns
            </Link>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 w-24 bg-accent-gold mb-8 origin-left"
            />
            <h1 className="heading-xl mb-6 text-glow-gold leading-tight">{campaign.title}</h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 font-playfair italic">{campaign.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/donate" variant="gold" size="lg" className="rounded-full px-8">
                Support Now
              </Button>
              <Button href="#details" variant="outline" size="lg" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-background-dark">
                Learn More
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="details" className="py-20 bg-white dark:bg-dark-300">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h2 className="heading-md text-background-dark dark:text-white mb-6">About this Initiative</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                  {campaign.description}
                </p>
              </div>

              <div className="mt-8 space-y-6">
                {campaign.details?.timings && (
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-accent-gold/5 border border-primary/10">
                    <Info className="w-6 h-6 text-primary dark:text-accent-gold" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Operating Timings</p>
                      <p className="text-lg font-semibold text-background-dark dark:text-white">{campaign.details.timings}</p>
                    </div>
                  </div>
                )}
                {campaign.details?.operates_in && (
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-accent-gold/5 border border-primary/10">
                    <Info className="w-6 h-6 text-primary dark:text-accent-gold" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Locations</p>
                      <p className="text-lg font-semibold text-background-dark dark:text-white">{campaign.details.operates_in}</p>
                    </div>
                  </div>
                )}
                {campaign.details?.message && (
                  <div className="relative p-8 rounded-3xl bg-background-dark text-white overflow-hidden">
                    <QuoteIcon className="absolute top-4 right-4 w-12 h-12 text-accent-gold/20" />
                    <p className="relative z-10 text-xl font-playfair italic leading-relaxed">
                      "{campaign.details.message}"
                    </p>
                  </div>
                )}
                {campaign.details?.core_belief && (
                   <div className="relative p-8 rounded-3xl bg-background-dark text-white overflow-hidden">
                   <QuoteIcon className="absolute top-4 right-4 w-12 h-12 text-accent-gold/20" />
                   <p className="relative z-10 text-xl font-playfair italic leading-relaxed">
                     "{campaign.details.core_belief}"
                   </p>
                 </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {campaign.goals.map((goal: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-background-light dark:bg-dark-200 border border-primary/5"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 dark:bg-accent-gold/20 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary dark:text-accent-gold" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 font-medium">{goal}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <p className="text-accent-gold font-bold text-sm uppercase tracking-widest mb-2">Current Reach</p>
                    <h3 className="text-white text-3xl font-bold">{campaign.impact}</h3>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-gold rounded-full -z-10 blur-3xl opacity-20 animate-pulse" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary rounded-full -z-10 blur-3xl opacity-10 animate-pulse" />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-background-light dark:bg-dark-400 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-5" />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-md text-background-dark dark:text-white mb-4">Impact Snapshot</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Measurable outcomes drive our passion for community service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
          
          <div className="mt-16 bg-white dark:bg-dark-300 rounded-3xl p-10 shadow-xl border border-primary/5 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="text-sm font-bold text-primary dark:text-accent-gold uppercase tracking-wider mb-2">Campaign Milestone</div>
                <div className="text-5xl font-bold text-background-dark dark:text-white">{campaign.progress}%</div>
              </div>
              <div className="md:col-span-3">
                <div className="h-4 bg-gray-100 dark:bg-dark-200 rounded-full overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${campaign.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-gold shadow-glow-gold"
                  />
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-medium italic">
                  Join hundreds of supporters who have made this initiative a success. Every step forward is a dream realized.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-background-dark text-white relative overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-accent-gold/10 blur-[120px]" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-primary/10 blur-[120px]" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-8 text-glow-gold">Support Our Mission</h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Whether through donations or volunteering, your time and resources contribute to a larger wave of change in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="/donate" variant="gold" size="lg" className="rounded-full px-12 py-6 text-lg">
                Donate Now
              </Button>
              <Button href="/volunteer" variant="outline" size="lg" className="rounded-full px-12 py-6 text-lg border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-background-dark">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="heading-md text-background-dark dark:text-white mb-2">Other Active Campaigns</h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Find more ways to get involved and make an impact.</p>
            </div>
            <Link href="/campaigns" className="hidden md:flex items-center gap-2 text-primary dark:text-accent-gold font-bold group">
              Explore All
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-primary/10 dark:border-accent-gold/20 bg-white dark:bg-dark-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-accent-gold font-bold text-xs uppercase tracking-widest">
                      {(() => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap];
                        return Icon ? <Icon className="w-4 h-4" /> : null;
                      })()}
                      Campaign
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-playfair text-2xl text-background-dark dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent-gold transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">{item.subtitle}</p>
                  <div className="mt-auto flex items-center gap-2 text-primary dark:text-accent-gold font-bold text-sm">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
