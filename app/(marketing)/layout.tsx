'use client';

import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
