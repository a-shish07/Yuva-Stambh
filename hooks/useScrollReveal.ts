'use client';

import { useEffect, RefObject } from 'react';
import { useInView, useAnimation } from 'framer-motion';

interface UseScrollRevealOptions {
  threshold?: number;
  once?: boolean;
}

export function useScrollReveal(
  ref: RefObject<HTMLElement>,
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.2, once = true } = options;
  const controls = useAnimation();
  const inView = useInView(ref, { amount: threshold, once });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [inView, controls, once]);

  return { controls, inView };
}
