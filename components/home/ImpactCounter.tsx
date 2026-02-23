'use client';

import React from 'react';
import { Users, MapPin, Heart, Award } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/common/Container';

const stats = [
  {
    icon: Users,
    end: 10000,
    suffix: '+',
    label: 'Youth Empowered',
    color: 'text-primary',
  },
  {
    icon: MapPin,
    end: 120,
    suffix: '+',
    label: 'Villages Reached',
    color: 'text-accent-gold',
  },
  {
    icon: Heart,
    end: 500,
    suffix: '+',
    label: 'Volunteers',
    color: 'text-primary-teal',
  },
  {
    icon: Award,
    end: 50,
    suffix: '+',
    label: 'Campaigns',
    color: 'text-accent-gold',
  },
];

function StatCard({ icon: Icon, end, suffix, label, color }: typeof stats[0]) {
  const { ref, count } = useCountUp({ end });

  return (
    <Card className="text-center">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary/10 mb-4 ${color}`}>
        <Icon className="w-8 h-8" />
      </div>
      <div ref={ref} className="font-playfair text-4xl md:text-5xl font-bold mb-2 text-background-dark">
        {Math.round(count).toLocaleString()}{suffix}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </Card>
  );
}

export function ImpactCounter() {
  return (
    <section className="section-padding bg-background-light">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
