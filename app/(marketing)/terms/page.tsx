import React from 'react';
import { Container } from '@/components/common/Container';

export default function TermsPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300">
      <section className="section-padding">
        <Container size="md">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-playfair font-bold mb-8">Terms of Service</h1>
            <p className="lead">Last updated: April 2026</p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision
              of this agreement.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily view the materials on Yuvastambh's website for personal,
              non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Donations</h2>
            <p>
              All donations made through our website are voluntary. While we strive to ensure every donation is processed correctly, donations are generally non-refundable. We will provide tax receipts for all valid donations as per Indian tax regulations.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Processing</h2>
            <p>
              We use Razorpay for secure payment processing. By making a donation or transaction on our site, you agree to comply with Razorpay's terms and conditions and privacy policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Disclaimer</h2>
            <p>
              The materials on Yuvastambh's website are provided on an 'as is' basis. Yuvastambh makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitations</h2>
            <p>
              In no event shall Yuvastambh or its suppliers be liable for any damages arising out of the use
              or inability to use the materials on our website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifications</h2>
            <p>
              Yuvastambh may revise these terms of service at any time without notice. By using this website,
              you are agreeing to be bound by the current version of these terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> yuvastambhwelfareassociation@gmail.com<br />
              <strong>Address:</strong> 622 Manglam Electronic Market, Jaipur, Rajasthan 302001
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
