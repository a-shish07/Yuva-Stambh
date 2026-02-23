import React from 'react';
import { Hero } from '@/components/home/Hero';
import { ImpactCounter } from '@/components/home/ImpactCounter';
import { ProgramsPreview } from '@/components/home/ProgramsPreview';
import { Storytelling } from '@/components/home/Storytelling';
import { CtaSection } from '@/components/home/CtaSection';
import { Partners } from '@/components/home/Partners';
import { SvgDivider } from '@/components/ui/SvgDivider';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SvgDivider type="wave" color="#F8FAF9" />
      <ImpactCounter />
      <ProgramsPreview />
      <SvgDivider type="curve" color="#0E1A2B" />
      <Storytelling />
      <CtaSection />
      <SvgDivider type="wave" flip color="#FFFFFF" />
      <Partners />
    </>
  );
}
