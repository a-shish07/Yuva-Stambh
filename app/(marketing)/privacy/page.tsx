import React from 'react';
import { Container } from '@/components/common/Container';

export default function PrivacyPage() {
  return (
    <div className="pt-20 bg-background-light">
      <section className="section-padding">
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <h1>Privacy Policy</h1>
            <p className="lead">Last updated: February 2026</p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, including name, email address, phone number,
              and payment information when you donate or volunteer.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process donations and provide tax receipts</li>
              <li>Send updates about our programs and impact</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our services and website</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              information with service providers who assist us in operating our website and conducting our operations.
            </p>

            <h2>4. Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. All payment
              transactions are processed through secure, PCI-compliant payment gateways.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. Contact us at
              privacy@yuvastambh.org to exercise these rights.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@yuvastambh.org.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
