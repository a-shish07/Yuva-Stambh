/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#1F7A4C',
          teal: '#1DA1A1',
          DEFAULT: '#1F7A4C',
        },
        accent: {
          gold: '#E3B23C',
          orange: '#FF6B35',
          purple: '#6C63FF',
          DEFAULT: '#E3B23C',
        },
        background: {
          light: '#F8FAF9',
          dark: '#0E1A2B',
          darker: '#060D15',
        },
        dark: {
          100: '#1A1F2E',
          200: '#121825',
          300: '#0A0E1A',
          400: '#060911',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1F7A4C 0%, #1DA1A1 100%)',
        'gradient-gold': 'linear-gradient(135deg, #E3B23C 0%, #F5D76E 100%)',
        'gradient-dark': 'linear-gradient(180deg, transparent 0%, #0E1A2B 100%)',
        'gradient-purple': 'linear-gradient(135deg, #6C63FF 0%, #9D97FF 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)',
        'gradient-dark-blue': 'linear-gradient(135deg, #0A0E1A 0%, #1A1F2E 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(227, 178, 60, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(227, 178, 60, 0.6)' },
        },
        glowGreen: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(31, 122, 76, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(31, 122, 76, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        fadeUp: 'fadeUp 0.6s ease-out',
        fadeDown: 'fadeDown 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
        glow: 'glow 2s ease-in-out infinite',
        glowGreen: 'glowGreen 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        floatSlow: 'floatSlow 5s ease-in-out infinite',
        scaleIn: 'scaleIn 0.4s ease-out',
        scaleUp: 'scaleUp 0.3s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        bounce: 'bounce 1s infinite',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        slideUp: 'slideUp 0.5s ease-out',
        slideDown: 'slideDown 0.5s ease-out',
        zoomIn: 'zoomIn 0.5s ease-out',
        rotate: 'rotate 2s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(31, 122, 76, 0.5)',
        'glow-md': '0 0 20px rgba(31, 122, 76, 0.5)',
        'glow-lg': '0 0 30px rgba(31, 122, 76, 0.5)',
        'glow-gold': '0 0 20px rgba(227, 178, 60, 0.5)',
        'dark-sm': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'dark-md': '0 4px 8px rgba(0, 0, 0, 0.4)',
        'dark-lg': '0 8px 16px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
