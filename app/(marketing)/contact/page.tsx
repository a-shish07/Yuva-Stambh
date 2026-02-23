'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: ['info@yuvastambh.org', 'support@yuvastambh.org'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 123 456 7890', '+91 098 765 4321'],
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Main Street', 'Mumbai, Maharashtra 400001', 'India'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Contact form data:', data);
    setShowSuccess(true);
    reset();
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300">
      {/* Hero Section with Animated Background */}
      <section className="section-padding bg-gradient-primary dark:bg-gradient-dark-blue text-white relative overflow-hidden">
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
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Have questions? We&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-light dark:gradient-mesh-dark" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.h2 variants={itemVariants} className="heading-md mb-8 text-background-dark dark:text-white">
                Send us a Message
              </motion.h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Full Name *
                  </label>
                  <motion.input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/20"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 dark:text-red-400 text-sm mt-1"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Email & Phone */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Email *
                    </label>
                    <motion.input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg"
                      whileFocus={{ scale: 1.02 }}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 dark:text-red-400 text-sm mt-1"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Phone (Optional)
                    </label>
                    <motion.input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                {/* Subject */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Subject *
                  </label>
                  <motion.input
                    {...register('subject')}
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 dark:text-red-400 text-sm mt-1"
                    >
                      {errors.subject.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <motion.textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-300 text-gray-900 dark:text-white rounded-xl focus:border-primary dark:focus:border-accent-gold focus:outline-none transition-all duration-300 hover:shadow-lg resize-none scrollbar-custom"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 dark:text-red-400 text-sm mt-1"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full relative overflow-hidden group"
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
                          Sending...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="send"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-6"
            >
              <motion.h2 variants={itemVariants} className="heading-md mb-8 text-background-dark dark:text-white">
                Get in Touch
              </motion.h2>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex gap-4 p-6 bg-white dark:bg-dark-300 rounded-2xl shadow-lg dark:shadow-dark-lg card-hover group"
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-primary/10 dark:bg-gradient-primary/20 flex items-center justify-center glow-effect-green group-hover:glow-effect-gold"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon className="w-6 h-6 text-primary dark:text-accent-gold" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-background-dark dark:text-white">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Visit Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-primary dark:bg-gradient-dark-blue rounded-2xl shadow-lg dark:shadow-dark-lg p-8 text-white mt-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 pattern-dots opacity-10" />
                <div className="relative z-10">
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-glow-gold">Visit Our Office</h3>
                  <p className="text-white/90 mb-4">
                    We welcome visitors! Schedule an appointment to learn more about our work.
                  </p>
                  <Button href="/get-involved" variant="gold" className="shadow-lg">
                    Schedule a Visit
                  </Button>
                </div>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <p className="text-green-800 dark:text-green-200">Thank you! We'll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-dark-300 rounded-3xl shadow-2xl dark:shadow-dark-lg overflow-hidden h-96 border-4 border-transparent gradient-border-animated group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9377578374267!2d72.82772631490169!3d19.01687658711881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec9c3c9e5cf%3A0x1b4c4c4c4c4c4c4c!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}