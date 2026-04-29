'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, ArrowRight, Share2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { fadeUp } from '@/lib/animations';

export default function DonateSuccessPage() {
  return (
    <div className="pt-20 bg-background-light min-h-screen flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 glass"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>

            <h1 className="font-playfair text-4xl font-bold text-background-dark mb-4">
              Thank You for Your Support!
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Your contribution has been received successfully. It will help us continue our mission of empowering youth and building sustainable communities across India.
            </p>

            <div className="bg-primary/5 rounded-2xl p-6 mb-8 flex items-center gap-4 text-left">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <div>
                <p className="font-semibold text-background-dark">Tax Benefit</p>
                <p className="text-sm text-gray-600">
                  A donation receipt (80G) will be sent to your email within 24-48 hours.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" variant="primary" size="lg" className="rounded-full">
                Back to Home
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'I just donated to Yuvastambh',
                      text: 'Join me in supporting youth empowerment in India!',
                      url: window.location.origin,
                    });
                  }
                }}
                icon={<Share2 className="w-5 h-5" />}
              >
                Share Mission
              </Button>
            </div>
          </motion.div>

          <div className="mt-12">
            <p className="text-gray-500 font-medium mb-6">Explore more of our work</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/campaigns"
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <span className="font-semibold text-background-dark">Active Campaigns</span>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/impact"
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <span className="font-semibold text-background-dark">Our Impact</span>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
