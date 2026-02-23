'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export function useCountUp(options: UseCountUpOptions) {
  const { end, duration = 2000, start = 0, decimals = 0 } = options;
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        const currentCount = start + (end - start) * easeOutQuad(progress);
        setCount(Number(currentCount.toFixed(decimals)));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration, start, decimals]);

  return { ref, count };
}

function easeOutQuad(t: number): number {
  return t * (2 - t);
}
