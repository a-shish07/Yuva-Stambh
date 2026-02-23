'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is Yuvastambh?',
    answer: 'Yuvastambh is an NGO dedicated to empowering youth through education, livelihood, and advocacy programs across India.',
  },
  {
    question: 'How can I donate?',
    answer: 'You can donate online through our secure payment gateway, via bank transfer, or by sending a cheque/DD. Visit our Donate page for more details.',
  },
  {
    question: 'Are donations tax-deductible?',
    answer: 'Yes, all donations to Yuvastambh are eligible for tax benefits under Section 80G of the Income Tax Act.',
  },
  {
    question: 'How can I volunteer?',
    answer: 'Fill out our volunteer registration form on the Get Involved page. Our team will contact you with opportunities matching your interests and availability.',
  },
  {
    question: 'Where do you operate?',
    answer: 'We currently operate across 120+ villages in 5 states: Maharashtra, Karnataka, Gujarat, Rajasthan, and Madhya Pradesh.',
  },
  {
    question: 'How do you ensure transparency?',
    answer: 'We publish annual reports, provide regular updates to donors, and maintain complete financial transparency with third-party audits.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-lg text-background-dark">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="pt-20 bg-background-light">
      <section className="section-padding">
        <Container size="md">
          <SectionHeading
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our organization and programs."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
