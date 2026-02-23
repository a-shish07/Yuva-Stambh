'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/common/Button';

const eventCategories = ['All', 'Workshop', 'Training', 'Community', 'Fundraiser', 'Awareness'];

const upcomingEvents = [
  {
    id: 1,
    title: 'Youth Leadership Workshop',
    category: 'Workshop',
    date: '2025-03-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Mumbai Community Center',
    attendees: 45,
    maxAttendees: 50,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    description: 'An intensive workshop focused on developing leadership skills, communication, and team management for youth.',
    featured: true,
  },
  {
    id: 2,
    title: 'Digital Skills Training Program',
    category: 'Training',
    date: '2025-03-20',
    time: '2:00 PM - 6:00 PM',
    location: 'Online (Zoom)',
    attendees: 120,
    maxAttendees: 150,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    description: 'Learn essential digital marketing, social media management, and basic coding skills.',
    featured: true,
  },
  {
    id: 3,
    title: 'Community Cleanup Drive',
    category: 'Community',
    date: '2025-03-25',
    time: '7:00 AM - 12:00 PM',
    location: 'Dharavi, Mumbai',
    attendees: 30,
    maxAttendees: 100,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    description: 'Join us in making our community cleaner and greener. All ages welcome!',
    featured: false,
  },
  {
    id: 4,
    title: 'Annual Fundraising Gala',
    category: 'Fundraiser',
    date: '2025-04-10',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Hotel, Mumbai',
    attendees: 80,
    maxAttendees: 200,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    description: 'An elegant evening of networking, entertainment, and fundraising for our programs.',
    featured: true,
  },
  {
    id: 5,
    title: 'Women Empowerment Seminar',
    category: 'Awareness',
    date: '2025-04-15',
    time: '10:00 AM - 3:00 PM',
    location: 'Pune Convention Center',
    attendees: 65,
    maxAttendees: 80,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800',
    description: 'Celebrating and discussing women\'s rights, opportunities, and success stories.',
    featured: false,
  },
  {
    id: 6,
    title: 'Skill Development Fair',
    category: 'Training',
    date: '2025-04-22',
    time: '9:00 AM - 5:00 PM',
    location: 'Nashik Expo Center',
    attendees: 150,
    maxAttendees: 300,
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
    description: 'Explore various vocational training opportunities and meet potential mentors.',
    featured: false,
  },
];

const pastEvents = [
  {
    title: 'Youth Entrepreneurship Summit 2024',
    date: 'December 2024',
    attendees: 250,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    highlights: 'Featured 15 successful young entrepreneurs, 8 workshops, and networking opportunities.',
  },
  {
    title: 'Rural Development Workshop',
    date: 'November 2024',
    attendees: 120,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
    highlights: 'Trained local leaders in sustainable farming and community development practices.',
  },
  {
    title: 'Annual Impact Celebration',
    date: 'October 2024',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    highlights: 'Celebrated achievements, honored volunteers, and shared success stories.',
  },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = selectedCategory === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

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
              Events & Programs
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join us in our upcoming events and be part of the change
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
              subtitle="Upcoming Events"
              title="What's Coming Up"
              description="Discover and register for our upcoming workshops, trainings, and community events."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {eventCategories.map((category) => (
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
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className={`bg-white dark:bg-dark-300 border-0 shadow-xl dark:shadow-dark-lg card-hover h-full overflow-hidden ${event.featured ? 'ring-4 ring-accent-gold dark:ring-accent-gold/50' : ''}`}>
                  <div className="relative h-48 overflow-hidden image-hover-zoom">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    {event.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-accent-gold text-white rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-dark-300/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary dark:text-accent-gold">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-3 text-background-dark dark:text-white">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 text-primary dark:text-accent-gold" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 text-primary dark:text-accent-gold" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 text-primary dark:text-accent-gold" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4 text-primary dark:text-accent-gold" />
                        <span>{event.attendees}/{event.maxAttendees} registered</span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-4">
                      <div 
                        className="bg-gradient-primary dark:bg-gradient-gold h-2 rounded-full"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      />
                    </div>
                    
                    <Button 
                      href={`/events/${event.id}`} 
                      variant="primary" 
                      className="w-full"
                    >
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Calendar className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No events found in this category. Check back soon!
              </p>
            </motion.div>
          )}
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
              subtitle="Past Events"
              title="Event Highlights"
              description="Look back at some of our successful events and their impact."
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
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="bg-background-light dark:bg-dark-400 border-0 shadow-xl dark:shadow-dark-lg card-hover h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden image-hover-zoom">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-dark opacity-20" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2 text-background-dark dark:text-white">
                      {event.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {event.date}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <Users className="w-4 h-4 text-primary dark:text-accent-gold" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {event.attendees} attendees
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {event.highlights}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="heading-lg mb-6 text-glow-gold">Stay Updated</h2>
            <p className="text-xl mb-8 text-white/90">
              Never miss an event! Subscribe to our newsletter to get updates about upcoming programs, workshops, and community gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="gold" size="lg">
                Subscribe to Newsletter
              </Button>
              <Button href="/volunteer" variant="outline" size="lg">
                Volunteer at Events
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
