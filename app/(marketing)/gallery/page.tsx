'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800', alt: 'Youth Workshop' },
  { src: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800', alt: 'Community Work' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', alt: 'Education Program' },
  { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', alt: 'Skill Training' },
  { src: 'https://images.unsplash.com/photo-1573164574511-73c773193279?w=800', alt: 'Youth Leadership' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800', alt: 'Team Meeting' },
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  const openLightbox = (image: typeof galleryImages[0]) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary dark:bg-gradient-dark-blue text-white py-20">
        <div className="absolute inset-0 pattern-dots opacity-10 dark:opacity-20" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="heading-xl mb-4 text-glow-gold">Our Gallery</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Capturing moments of impact, learning, and community empowerment.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <SectionHeading
              subtitle="Our Work"
              title="Impact in Pictures"
              description="Glimpses of our journey empowering youth across India."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-lg dark:shadow-dark-lg cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Caption */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <p className="text-white font-semibold text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {image.alt}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ rotate: 90 }}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-xl font-semibold">{selectedImage.alt}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}