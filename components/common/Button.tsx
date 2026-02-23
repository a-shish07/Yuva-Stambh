import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className,
  disabled = false,
  icon,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105',
    gold: 'bg-gradient-gold text-background-dark hover:shadow-lg hover:shadow-accent-gold/50 hover:scale-105',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
    ghost: 'text-primary hover:bg-primary/10',
  };

  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {content}
    </motion.button>
  );
}
