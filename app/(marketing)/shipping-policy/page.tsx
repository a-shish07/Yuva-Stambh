import React from 'react';
import { Container } from '@/components/common/Container';

export default function ShippingPolicyPage() {
  return (
    <div className="pt-20 bg-background-light dark:bg-dark-400 transition-colors duration-300">
      <section className="section-padding">
        <Container size="md">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-playfair font-bold mb-8">Shipping and Delivery Policy</h1>
            <p className="lead">Last updated: April 2026</p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Delivery of Services</h2>
            <p>
              As Yuvastambh is an NGO primarily involved in community welfare and social services, we do not ship physical products. Our "services" (community programs, educational activities, advocacy work) are delivered directly to the communities we serve.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Digital Receipts</h2>
            <p>
              When you make a donation or register for an event, a confirmation email and tax receipt will be delivered digitally to your registered email address immediately upon successful transaction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Shipping Fees</h2>
            <p>
              Since we do not deal in physical goods, no shipping fees or delivery charges are applicable.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
            <p>
              For any clarification regarding our operations or donation delivery, please contact us:
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
