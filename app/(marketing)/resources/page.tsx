'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download, ExternalLink, Search, TrendingUp, Users, Lightbulb, Clock } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/common/Button';

const resourceCategories = ['All', 'Articles', 'Reports', 'Videos', 'Guides', 'Case Studies'];

const resources = [
  {
    id: 1,
    title: 'Youth Empowerment: A Comprehensive Guide',
    category: 'Guides',
    type: 'PDF',
    description: 'A detailed guide covering strategies, best practices, and methodologies for youth empowerment programs.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800',
    downloadUrl: '#',
    views: 1250,
    downloads: 450,
    date: '2025-02-15',
    featured: true,
  },
  {
    id: 2,
    title: 'Annual Impact Report 2024',
    category: 'Reports',
    type: 'PDF',
    description: 'Our comprehensive annual report showcasing the impact, reach, and achievements of 2024.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    downloadUrl: '#',
    views: 2100,
    downloads: 890,
    date: '2025-01-10',
    featured: true,
  },
  {
    id: 3,
    title: 'Building Sustainable Livelihoods',
    category: 'Articles',
    type: 'Article',
    description: 'Insights and lessons learned from our livelihood programs and their long-term impact on communities.',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800',
    readUrl: '#',
    views: 850,
    date: '2025-02-05',
    featured: false,
  },
  {
    id: 4,
    title: 'Success Stories: Voices of Change',
    category: 'Videos',
    type: 'Video',
    description: 'A documentary featuring stories of beneficiaries whose lives have been transformed by our programs.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800',
    videoUrl: '#',
    views: 3400,
    duration: '15 min',
    date: '2025-01-28',
    featured: true,
  },
  {
    id: 5,
    title: 'Community-Led Development Framework',
    category: 'Case Studies',
    type: 'PDF',
    description: 'A case study on implementing community-led development approaches in rural Maharashtra.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
    downloadUrl: '#',
    views: 620,
    downloads: 280,
    date: '2025-01-20',
    featured: false,
  },
  {
    id: 6,
    title: 'Digital Literacy for Rural Youth',
    category: 'Guides',
    type: 'PDF',
    description: 'A practical guide for teaching digital skills to rural youth, including curriculum and activities.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800',
    downloadUrl: '#',
    views: 980,
    downloads: 520,
    date: '2024-12-15',
    featured: false,
  },
  {
    id: 7,
    title: 'Understanding Youth Challenges in India',
    category: 'Articles',
    type: 'Article',
    description: 'An in-depth analysis of the challenges faced by youth in India and potential solutions.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    readUrl: '#',
    views: 1450,
    date: '2024-12-01',
    featured: false,
  },
  {
    id: 8,
    title: 'Volunteer Orientation & Training',
    category: 'Videos',
    type: 'Video',
    description: 'Complete orientation video for new volunteers covering our mission, programs, and best practices.',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800',
    videoUrl: '#',
    views: 1870,
    duration: '25 min',
    date: '2024-11-20',
    featured: false,
  },
];

const quickLinks = [
  {
    icon: FileText,
    title: 'Annual Reports',
    description: 'Access all our annual impact and financial reports',
    link: '#',
  },
  {
    icon: BookOpen,
    title: 'Program Guidelines',
    description: 'Detailed guidelines for all our programs',
    link: '#',
  },
  {
    icon: Video,
    title: 'Video Library',
    description: 'Watch documentaries and program highlights',
    link: '#',
  },
  {
    icon: Download,
    title: 'Toolkits & Templates',
    description: 'Download useful resources for NGOs',
    link: '#',
  },
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300">
      <section className="section-padding bg-gradient-primary dark:bg-gradient-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10 dark:opacity-20" />
        <div className="absolute inset-0 gradient-spotlight-light dark:gradient-spotlight-dark" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center relative z-10"
          >
            <motion.h1 
              className="heading-xl mb-6 text-glow-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Resources & Knowledge Hub
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Access our library of reports, guides, videos, and insights on youth empowerment
            </motion.p>
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
              subtitle="Quick Access"
              title="Explore by Category"
              description="Find the resources you need quickly and easily."
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
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
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <Card className="bg-white dark:bg-dark-300 border-0 shadow-xl dark:shadow-dark-lg card-hover text-center h-full">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 dark:bg-gradient-primary/20 mb-4 glow-effect-green"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <link.icon className="w-8 h-8 text-primary dark:text-accent-gold" />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2 text-background-dark dark:text-white">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {link.description}
                  </p>
                  <Button href={link.link} variant="primary" className="text-sm">
                    Access Now
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-colors"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {resourceCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-primary dark:bg-gradient-gold text-white shadow-lg'
                    : 'bg-white dark:bg-dark-300 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <Card className={`bg-white dark:bg-dark-300 border-0 shadow-xl dark:shadow-dark-lg card-hover h-full overflow-hidden ${resource.featured ? 'ring-4 ring-accent-gold dark:ring-accent-gold/50' : ''}`}>
                  <div className="relative h-48 overflow-hidden image-hover-zoom">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover"
                    />
                    {resource.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-accent-gold text-white rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-dark-300/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary dark:text-accent-gold flex items-center gap-1">
                      {resource.type === 'PDF' && <FileText className="w-3 h-3" />}
                      {resource.type === 'Video' && <Video className="w-3 h-3" />}
                      {resource.type === 'Article' && <BookOpen className="w-3 h-3" />}
                      {resource.type}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-primary/10 dark:bg-accent-gold/20 text-primary dark:text-accent-gold rounded-full text-xs font-semibold mb-3">
                      {resource.category}
                    </div>
                    
                    <h3 className="font-playfair text-xl font-bold mb-3 text-background-dark dark:text-white line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{resource.views} views</span>
                      </div>
                      {resource.downloads && (
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{resource.downloads}</span>
                        </div>
                      )}
                      {resource.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{resource.duration}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      {new Date(resource.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                    
                    <Button 
                      href={resource.downloadUrl || resource.readUrl || resource.videoUrl} 
                      variant="primary" 
                      className="w-full"
                    >
                      {resource.type === 'PDF' ? 'Download' : resource.type === 'Video' ? 'Watch' : 'Read'}
                      {resource.type === 'PDF' ? <Download className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No resources found matching your criteria. Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </Container>
      </section>

      <section className="section-padding bg-gradient-primary dark:bg-gradient-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Lightbulb className="w-16 h-16 text-accent-gold mx-auto mb-6" />
            <h2 className="heading-lg mb-6 text-glow-gold">Have a Resource to Share?</h2>
            <p className="text-xl mb-8 text-white/90">
              We welcome contributions from partners, researchers, and practitioners. Share your insights and help build our knowledge base.
            </p>
            <Button href="/contact" variant="gold" size="lg">
              Submit Your Resource
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
