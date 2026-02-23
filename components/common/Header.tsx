'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Programs',
    submenu: [
      { href: '/programs/education', label: 'Education' },
      { href: '/programs/livelihood', label: 'Livelihood' },
      { href: '/programs/advocacy', label: 'Advocacy' },
    ],
  },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-dark-300/95 backdrop-blur-lg shadow-lg dark:shadow-dark-lg'
          : 'bg-gray-900 backfrop-blur'
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Yuvastambh Logo"
              width={48}
              height={48}
              className="object-contain"
              unoptimized
            />
            <span className={cn(
              'font-playfair text-2xl font-bold transition-colors',
              isScrolled ? 'text-background-dark dark:text-accent-gold' : 'text-white'
            )}>
              Yuvastambh
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.submenu ? (
                  <button
                    className={cn(
                      'flex items-center gap-1 font-medium transition-colors',
                      isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-gold' : 'text-white hover:text-accent-gold'
                    )}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href!}
                    className={cn(
                      'font-medium transition-colors',
                      isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-gold' : 'text-white hover:text-accent-gold'
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {link.submenu && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark-200 rounded-lg shadow-xl dark:shadow-dark-lg py-2"
                      >
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-accent-gold/20 hover:text-primary dark:hover:text-accent-gold transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={cn(
                'p-2 rounded-full transition-all duration-300 hover:scale-110',
                isScrolled 
                  ? 'bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-accent-gold hover:bg-gray-200 dark:hover:bg-dark-100' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              )}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </button>
            <Button href="/donate" variant="gold" size="sm">
              Donate Now
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className={cn(
                'p-2 rounded-full transition-all duration-300',
                isScrolled 
                  ? 'bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-accent-gold' 
                  : 'bg-white/10 text-white'
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className={cn(
                isScrolled ? 'text-background-dark dark:text-accent-gold' : 'text-white'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-dark-300 border-t dark:border-gray-700"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.submenu ? (
                      <div>
                        <button
                          className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 font-medium"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.label ? null : link.label
                            )
                          }
                        >
                          {link.label}
                        </button>
                        {activeDropdown === link.label && (
                          <div className="pl-8 space-y-2 mt-2">
                            {link.submenu.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent-gold"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href!}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-gold font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button href="/donate" variant="gold" className="w-full">
                    Donate Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
