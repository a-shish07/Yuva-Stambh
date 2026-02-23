import React from 'react';

interface SvgDividerProps {
  type?: 'wave' | 'curve' | 'diagonal';
  flip?: boolean;
  color?: string;
  className?: string;
}

export function SvgDivider({ type = 'wave', flip = false, color = '#F8FAF9', className }: SvgDividerProps) {
  const dividers = {
    wave: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full ${className}`}
        style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={color}
        />
      </svg>
    ),
    curve: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full ${className}`}
        style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={color}
        />
      </svg>
    ),
    diagonal: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full ${className}`}
        style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
      >
        <polygon
          points="0,0 1200,120 1200,0"
          fill={color}
        />
      </svg>
    ),
  };

  return dividers[type];
}
