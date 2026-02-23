'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/ui/Card';

const volunteerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number required'),
  city: z.string().min(2, 'City is required'),
  interest: z.enum(['education', 'livelihood', 'advocacy', 'fundraising', 'general']),
  availability: z.string().min(1, 'Please select your availability'),
  experience: z.string().optional(),
  message: z.string().optional(),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

const opportunities = [
  {
    icon: Users,
    title: 'Become a Volunteer',
    description: 'Join our team of passionate volunteers and make a direct impact in communities.',
    benefits: ['Skill development', 'Networking', 'Certificate', 'Impact stories'],
  },
  {
    icon: Heart,
    title: 'Monthly Donor',
    description: 'Support our mission with regular contributions and track your impact.',
    benefits: ['Tax benefits', 'Impact reports', 'Priority updates', 'Recognition'],
  },
  {
    icon: Briefcase,
    title: 'Corporate Partnership',
    description: 'Partner with us for CSR initiatives and employee engagement programs.',
    benefits: ['CSR alignment', 'Brand visibility', 'Employee engagement', 'Impact metrics'],
  },
  {
    icon: Calendar,
    title: 'Organize Events',
    description: 'Host fundraising events or awareness campaigns in your community.',
    benefits: ['Event support', 'Marketing materials', 'Media coverage', 'Community impact'],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function GetInvolvedPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API
    console.log('Volunteer data:', data);
    setShowSuccess(true);
    reset();
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300 min-h-screen">
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
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="heading-xl mb-4 text-glow-gold">Get Involved</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Join us in empowering youth and transforming communities across India
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Opportunities Cards */}
      <section className="section-padding">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <SectionHeading
              subtitle="Ways to Help"
              title="Make a Difference Today"
              description="Choose how you'd like to contribute to our mission."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {opportunities.map((opportunity, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover group h-full">
                    <motion.div
                      className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary/10 dark:bg-gradient-primary/20 mb-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <opportunity.icon className="w-7 h-7 text-primary dark:text-accent-gold" />
                    </motion.div>
                    <h3 className="font-playfair text-2xl font-bold mb-3 text-background-dark dark:text-white">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{opportunity.description}</p>
                    <ul className="space-y-2 mb-6">
                      {opportunity.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form and Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-8 text-background-dark dark:text-white">Volunteer Registration</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Full Name *
                    </label>
                    <motion.input
                      {...register('name')}
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 dark:text-red-400 text-sm mt-1"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Email *
                    </label>
                    <motion.input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 dark:text-red-400 text-sm mt-1"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Phone *
                    </label>
                    <motion.input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <AnimatePresence>
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 dark:text-red-400 text-sm mt-1"
                        >
                          {errors.phone.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* City */}
                  <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      City *
                    </label>
                    <motion.input
                      {...register('city')}
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <AnimatePresence>
                      {errors.city && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 dark:text-red-400 text-sm mt-1"
                        >
                          {errors.city.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Interest */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Area of Interest *
                  </label>
                  <motion.select
                    {...register('interest')}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select an area</option>
                    <option value="education">Education & Skill Development</option>
                    <option value="livelihood">Livelihood & Entrepreneurship</option>
                    <option value="advocacy">Advocacy & Leadership</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="general">General Support</option>
                  </motion.select>
                  <AnimatePresence>
                    {errors.interest && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-500 dark:text-red-400 text-sm mt-1"
                      >
                        {errors.interest.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Availability */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Availability *
                  </label>
                  <motion.select
                    {...register('availability')}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select availability</option>
                    <option value="weekends">Weekends</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="flexible">Flexible</option>
                    <option value="events">Events Only</option>
                  </motion.select>
                  <AnimatePresence>
                    {errors.availability && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-500 dark:text-red-400 text-sm mt-1"
                      >
                        {errors.availability.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Experience */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Relevant Experience (Optional)
                  </label>
                  <motion.textarea
                    {...register('experience')}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Message (Optional)
                  </label>
                  <motion.textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Submit */}
                <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center justify-center"
                        >
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="submit"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          Submit Application
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Sidebar Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-dark-300 rounded-2xl shadow-lg dark:shadow-dark-lg p-8 transition-all duration-300"
              >
                <h3 className="font-playfair text-2xl font-bold mb-4 text-background-dark dark:text-white">
                  Why Volunteer with Us?
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  {[
                    { title: 'Direct Impact', desc: 'See the real change you create in communities' },
                    { title: 'Skill Development', desc: 'Gain valuable experience and new skills' },
                    { title: 'Network', desc: 'Connect with like-minded changemakers' },
                    { title: 'Recognition', desc: 'Receive certificates and acknowledgment' },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary dark:bg-accent-gold" />
                      </div>
                      <div>
                        <strong className="text-background-dark dark:text-white">{item.title}:</strong> {item.desc}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-primary dark:bg-gradient-dark-blue rounded-2xl shadow-lg dark:shadow-dark-lg p-8 text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 pattern-dots opacity-10" />
                <div className="relative z-10">
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-glow-gold">Questions?</h3>
                  <p className="text-white/90 mb-4">
                    We&apos;re here to help! Reach out to our volunteer coordinator for any queries.
                  </p>
                  <a
                    href="mailto:volunteer@yuvastambh.org"
                    className="text-accent-gold font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    volunteer@yuvastambh.org
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Success Toast */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed bottom-4 right-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3 shadow-lg z-50"
              >
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <p className="text-green-800 dark:text-green-200">Thank you! We'll contact you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </div>
  );
}