# Yuvastambh NGO Website

A premium, animation-rich website for Yuvastambh NGO built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Rich Animations**: Framer Motion & GSAP for smooth, engaging animations
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Form Validation**: React Hook Form + Zod for robust form handling
- **Payment Integration**: Ready for Stripe/Razorpay integration
- **SEO Optimized**: Metadata and Open Graph tags for better discoverability
- **Accessibility**: ARIA labels and keyboard navigation support

## Pages

- Homepage with Hero, Impact Counters, Programs Preview
- About Us with Timeline and Team
- Programs Overview and Detail Pages
- Donate Page with Payment Integration
- Get Involved (Volunteer Registration)
- Contact Page with Form and Map
- Gallery, FAQ, Privacy Policy, Terms of Service

## Tech Stack

- **Framework**: Next.js 14.2+
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion, GSAP
- **Forms**: React Hook Form, Zod
- **UI Libraries**: Lucide React (icons), Embla Carousel
- **Fonts**: Playfair Display (headings), Inter (body)

## Design System

### Colors
- Primary Green: `#1F7A4C`
- Teal: `#1DA1A1`
- Accent Gold: `#E3B23C`
- Background Light: `#F8FAF9`
- Background Dark: `#0E1A2B`

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Copy `.env.example` to `.env.local` and add your environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

To create a production build:

\`\`\`bash
npm run build
\`\`\`

To run the production build:

\`\`\`bash
npm start
\`\`\`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

\`\`\`
├── app/
│   ├── (marketing)/      # Marketing pages
│   │   ├── page.tsx      # Homepage
│   │   ├── about/
│   │   ├── programs/
│   │   ├── donate/
│   │   ├── contact/
│   │   ├── get-involved/
│   │   └── ...
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── common/           # Shared components
│   ├── home/             # Homepage sections
│   └── ui/               # UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and helpers
├── styles/               # Additional styles
└── public/               # Static assets
\`\`\`

## Environment Variables

Required environment variables (see `.env.example`):

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe public key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` - Razorpay key (alternative)
- `NEXT_PUBLIC_MAPBOX_TOKEN` - Mapbox token for maps

## Customization

### Images

Replace placeholder images in:
- `/public/images/` - Static images
- `/public/yuvastambh-logo.png` - Logo
- Update Unsplash URLs in components with actual images

### Content

Update content in:
- Component files for text and data
- `app/layout.tsx` for site metadata
- Footer links in `components/common/Footer.tsx`

### Styling

- Modify `tailwind.config.js` for design system changes
- Update `app/globals.css` for global styles
- Adjust `styles/gradients.css` for gradient effects

## Payment Integration

The donate page is set up for Stripe/Razorpay integration. To complete:

1. Add your API keys to `.env.local`
2. Implement server-side payment logic in API routes
3. Update form submission handler in `app/(marketing)/donate/page.tsx`

## Deployment

This project is ready to deploy to Vercel, Netlify, or any other Next.js hosting platform.

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## Performance

- Static generation (SSG) for all pages
- Optimized images with next/image
- Code splitting and lazy loading
- Tailwind CSS purging for minimal CSS bundle

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Reduced motion support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is private and proprietary to Yuvastambh NGO.

## Support

For questions or issues, contact: support@yuvastambh.org

---

Built with ❤️ for Yuvastambh - The Pillar of Youth
