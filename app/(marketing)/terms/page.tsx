import React from 'react';
import { Container } from '@/components/common/Container';

export default function TermsPage() {
  return (
    <div className="pt-20 bg-background-light">
      <section className="section-padding">
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <h1>Terms of Service</h1>
            <p className="lead">Last updated: February 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision
              of this agreement.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily view the materials on Yuvastambh&apos;s website for personal,
              non-commercial transitory viewing only.
            </p>

            <h2>3. Donations</h2>
            <p>
              All donations are voluntary and non-refundable unless there is an error in processing. We will
              provide tax receipts for all donations as per Indian tax regulations.
            </p>

            <h2>4. Disclaimer</h2>
            <p>
              The materials on Yuvastambh&apos;s website are provided on an &apos;as is&apos; basis. Yuvastambh makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>

            <h2>5. Limitations</h2>
            <p>
              In no event shall Yuvastambh or its suppliers be liable for any damages arising out of the use
              or inability to use the materials on our website.
            </p>

            <h2>6. Modifications</h2>
            <p>
              Yuvastambh may revise these terms of service at any time without notice. By using this website,
              you are agreeing to be bound by the current version of these terms.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at legal@yuvastambh.org.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
