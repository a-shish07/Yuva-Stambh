'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { getInvolvedItems } from '@/lib/community-data';
import { iconMap } from '@/lib/icons';

export default function GetInvolvedDetailPage() {
  const params = useParams<{ slug: string }>();
  const item = getInvolvedItems.find((entry) => entry.slug === params.slug);

  if (!item) {
    return (
      <div className="pt-28 min-h-screen bg-background-light dark:bg-dark-400 flex items-center">
        <Container className="text-center">
          <h1 className="heading-md mb-4 text-background-dark dark:text-white">Page not found</h1>
          <Link href="/get-involved" className="text-primary dark:text-accent-gold font-semibold">
            Return to get involved
          </Link>
        </Container>
      </div>
    );
  }

  const otherPaths = getInvolvedItems.filter((entry) => entry.slug !== item.slug);

  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300 min-h-screen">
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 19, 30, 0.85), rgba(14, 62, 44, 0.68)), url(${item.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 10% 20%, rgba(227,178,60,0.16), transparent 50%)',
              'radial-gradient(circle at 90% 20%, rgba(31,122,76,0.2), transparent 50%)',
              'radial-gradient(circle at 10% 20%, rgba(227,178,60,0.16), transparent 50%)',
            ],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <Link href="/get-involved" className="inline-flex items-center gap-2 text-white/90 hover:text-accent-gold mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to get involved
            </Link>
            <h1 className="heading-xl mb-4 text-glow-gold">{item.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">{item.subtitle}</p>
            <p className="text-white/85 text-lg leading-relaxed max-w-3xl">{item.description}</p>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-3"
            >
              <div className="rounded-3xl bg-white dark:bg-dark-300 p-8 shadow-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/15 dark:bg-accent-gold/20 mb-5">
                  {(() => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap];
                    return Icon ? <Icon className="w-8 h-8 text-primary dark:text-accent-gold" /> : null;
                  })()}
                </div>
                <h2 className="heading-sm mb-6 text-background-dark dark:text-white">How you can contribute</h2>
                <div className="space-y-3">
                  {item.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="rounded-2xl border border-primary/10 dark:border-accent-gold/20 px-5 py-4 bg-background-light dark:bg-dark-200"
                    >
                      <p className="text-gray-700 dark:text-gray-200">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-2"
            >
              <div className="rounded-3xl bg-background-dark text-white p-8 shadow-2xl overflow-hidden relative">
                <motion.div
                  className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-accent-gold/25 blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="relative z-10">
                  <h3 className="font-playfair text-3xl mb-6">Key metrics</h3>
                  <div className="space-y-4 mb-8">
                    {item.metrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="rounded-2xl bg-white/10 border border-white/20 p-4"
                      >
                        <p className="text-3xl font-playfair font-bold text-accent-gold">{metric.value}</p>
                        <p className="text-sm text-white/80">{metric.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button href="/get-involved" variant="gold" className="w-full justify-center">
                      Start now
                    </Button>
                    <Button href="/contact" variant="outline" className="w-full justify-center">
                      Request partnership call
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16">
            <h2 className="heading-sm text-background-dark dark:text-white mb-6">Explore other paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {otherPaths.map((entry) => (
                <Link
                  key={entry.slug}
                  href={entry.href}
                  className="group rounded-2xl border border-primary/10 dark:border-accent-gold/20 bg-white dark:bg-dark-300 p-5 hover:shadow-xl transition-all"
                >
                  <p className="font-playfair text-2xl text-background-dark dark:text-white mb-2">{entry.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{entry.subtitle}</p>
                  <span className="inline-flex items-center gap-2 text-primary dark:text-accent-gold font-semibold text-sm">
                    Open page
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
