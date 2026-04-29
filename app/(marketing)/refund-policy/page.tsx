import React from 'react';
import { Container } from '@/components/common/Container';

export default function RefundPolicyPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300">
      <section className="section-padding">
        <Container size="md">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-playfair font-bold mb-8">Refund and Cancellation Policy</h1>
            <p className="lead">Last updated: April 2026</p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Donation Refunds</h2>
            <p>
              Yuvastambh is an NGO and all donations are voluntary. Donations are generally non-refundable. However, if there was a technical error in the processing of your donation (e.g., duplicate charge), please contact us within 7 days of the transaction for a refund.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Cancellation Policy</h2>
            <p>
              Since we do not sell physical products or provide subscription-based services with recurring billing at this time, there is no cancellation policy for ongoing services. One-time donations cannot be cancelled once the transaction is completed.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Event/Program Registration</h2>
            <p>
              If you have registered for an event or program that requires a fee, refunds for cancellations will be handled on a case-by-case basis as specified in the event's specific registration terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding a transaction, please reach out to us:
            </p>
            <p>
              <strong>Email:</strong> yuvastambhwelfareassociation@gmail.com<br />
              <strong>Address:</strong> Valmiki dharmshala sector 26  Chandigarh
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
