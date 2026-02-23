'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Heart, Shield, Lock, Check } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { fadeUp } from '@/lib/animations';

const donationSchema = z.object({
  amount: z.number().min(1, 'Amount must be at least ₹1'),
  frequency: z.enum(['one-time', 'monthly']),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  pan: z.string().optional(),
  message: z.string().optional(),
});

type DonationFormData = z.infer<typeof donationSchema>;

const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

const impactExamples = [
  { amount: 500, impact: 'Provides school supplies for 5 children' },
  { amount: 1000, impact: 'Funds a week of skill training for 2 youth' },
  { amount: 2500, impact: 'Supports a month of education for 10 students' },
  { amount: 5000, impact: 'Enables entrepreneurship workshop for 20 youth' },
  { amount: 10000, impact: 'Sponsors complete training program for 5 youth' },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      frequency: 'one-time',
    },
  });

  const onSubmit = async (data: DonationFormData) => {
    console.log('Donation data:', data);
    alert('Payment integration would be initiated here (Razorpay/Stripe)');
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setValue('amount', amount);
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
    setValue('amount', Number(value) || 0);
  };

  const handleFrequencyChange = (freq: 'one-time' | 'monthly') => {
    setFrequency(freq);
    setValue('frequency', freq);
  };

  const currentImpact = impactExamples.find(
    (e) => e.amount === (selectedAmount || Number(customAmount))
  );

  return (
    <div className="pt-20 bg-background-light">
      <section className="section-padding">
        <Container>
          <SectionHeading
            subtitle="Make a Difference"
            title="Support Youth Empowerment"
            description="Your donation creates lasting impact in communities across India. Every contribution helps build a brighter future."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 glass">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold mb-4 text-background-dark">
                      Donation Frequency
                    </label>
                    <div className="flex gap-4">
                      {(['one-time', 'monthly'] as const).map((freq) => (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => handleFrequencyChange(freq)}
                          className={`flex-1 py-4 px-6 rounded-full font-semibold transition-all ${
                            frequency === freq
                              ? 'bg-gradient-primary text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {freq === 'one-time' ? 'One-Time' : 'Monthly'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-4 text-background-dark">
                      Select Amount (₹)
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`py-4 px-4 rounded-xl font-semibold transition-all relative ${
                            selectedAmount === amount
                              ? 'bg-gradient-gold text-background-dark shadow-lg scale-105'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {selectedAmount === amount && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                            >
                              <Check className="w-4 h-4 text-white" />
                            </motion.div>
                          )}
                          ₹{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                    {errors.amount && (
                      <p className="text-red-500 text-sm mt-2">{errors.amount.message}</p>
                    )}

                    {currentImpact && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-primary/10 rounded-xl flex items-center gap-3"
                      >
                        <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                        <p className="text-primary font-medium">{currentImpact.impact}</p>
                      </motion.div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Email *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        PAN Number (For 80G receipt)
                      </label>
                      <input
                        {...register('pan')}
                        type="text"
                        placeholder="ABCDE1234F"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Message (Optional)
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Share why you're supporting Yuvastambh..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-green-900">
                        Secure Payment
                      </p>
                      <p className="text-xs text-green-700">
                        SSL encrypted | PCI DSS compliant
                      </p>
                    </div>
                    <Lock className="w-5 h-5 text-green-600" />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    icon={<Heart className="w-5 h-5" />}
                  >
                    {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-background-dark">
                  Why Donate?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>100% of your donation goes to programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tax benefits under 80G</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Transparent impact reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Directly empowers youth</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-primary rounded-2xl shadow-lg p-6 text-white">
                <h3 className="font-playfair text-xl font-bold mb-3">
                  Need Help?
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Have questions about donating? We&apos;re here to help!
                </p>
                <a
                  href="mailto:donate@yuvastambh.org"
                  className="text-accent-gold font-semibold hover:underline"
                >
                  donate@yuvastambh.org
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-playfair text-xl font-bold mb-4 text-background-dark">
                  Other Ways to Give
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bank Transfer</li>
                  <li>• Cheque/DD</li>
                  <li>• Corporate CSR</li>
                  <li>• In-kind Donation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
