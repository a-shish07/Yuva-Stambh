import {
  Building2,
  GraduationCap,
  Heart,
  Megaphone,
  ShieldAlert,
  Sparkles,
  Users,
  UserRound,
  BookOpen,
  Library,
  School,
  Monitor,
  Laptop,
} from 'lucide-react';

export const getInvolvedItems = [
  {
    slug: 'individual-support',
    href: '/get-involved/individual-support',
    title: 'Individual Support',
    subtitle: 'One person can change hundreds of lives',
    description:
      'Contribute monthly, sponsor a youth learner, or support focused interventions that create measurable change in your city and beyond.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400',
    icon: 'UserRound',
    metrics: [
      { value: '12,000+', label: 'Individual donors' },
      { value: '84%', label: 'Recurring retention' },
      { value: '4.8/5', label: 'Volunteer satisfaction' },
    ],
    highlights: [
      'Sponsor learning kits and digital access',
      'Set up recurring monthly contribution plans',
      'Join neighborhood fundraising circles',
      'Get transparent quarterly impact snapshots',
    ],
  },
  {
    slug: 'corporate-partnerships',
    href: '/get-involved/corporate-partnerships',
    title: 'Corporate Partnerships',
    subtitle: 'Align CSR goals with high-impact youth programs',
    description:
      'Co-create scalable social impact with employee engagement, skilling drives, and long-term partnerships designed for measurable outcomes.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400',
    icon: 'Building2',
    metrics: [
      { value: '110+', label: 'Corporate partners' },
      { value: '2.4L+', label: 'Volunteer hours' },
      { value: '78', label: 'Districts served' },
    ],
    highlights: [
      'Purpose-built CSR impact programs',
      'Employee volunteering and mentorship tracks',
      'Annual social impact reporting support',
      'Brand-aligned cause campaigns and activations',
    ],
  },
  {
    slug: 'school-partnerships',
    href: '/get-involved/school-partnerships',
    title: 'School Partnerships',
    subtitle: 'Build stronger classrooms and future-ready learners',
    description:
      'Partner with us to build inclusive learning environments, peer leadership clubs, and practical life-skills pathways for students.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400',
    icon: 'GraduationCap',
    metrics: [
      { value: '420+', label: 'Schools connected' },
      { value: '1.9L+', label: 'Students reached' },
      { value: '9,300+', label: 'Teacher upskilling sessions' },
    ],
    highlights: [
      'Teacher development and youth leadership modules',
      'STEM, health, and career-readiness workshops',
      'Parent engagement circles for holistic support',
      'Learning outcome tracking with regular reviews',
    ],
  },
  {
    slug: 'volunteers-internships',
    href: '/get-involved/volunteers-internships',
    title: 'Volunteers & Internships',
    subtitle: 'Learn by doing while building community impact',
    description:
      'Join project teams across education, campaigns, media, and field operations. Gain practical experience while supporting real outcomes.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400',
    icon: 'Users',
    metrics: [
      { value: '3,600+', label: 'Active volunteers' },
      { value: '950+', label: 'Interns mentored' },
      { value: '26', label: 'States represented' },
    ],
    highlights: [
      'Remote and on-ground roles across India',
      'Structured mentorship and project reviews',
      'Portfolio-ready outcomes and certificates',
      'Fast-track opportunities for top performers',
    ],
  },
] as const;

export const campaignItems = [
  {
    slug: 'evening-school-of-excellence',
    href: '/campaigns/evening-school-of-excellence',
    title: 'Evening School of Excellence',
    subtitle: 'Ensuring learning does not stop after regular school hours',
    description:
      'Yuvastambh believes true education goes beyond textbooks — it shapes character and creates opportunity. Beyond academics, the program builds confidence, discipline, communication skills, and self-belief.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400',
    icon: 'GraduationCap',
    impact: '100+ children educated',
    goals: [
      'Volunteer teachers teaching English, Mathematics, Science, and Arts',
      'Building confidence, discipline and self-belief',
      'Communication skills and character development',
    ],
    progress: 85,
    details: {
      timings: '3 PM to 7 PM (Daily)',
      focus: 'Confidence, Discipline, Communication skills, Self-belief',
    },
  },
  {
    slug: 'raddi-se-library',
    href: '/campaigns/raddi-se-library',
    title: 'Raddi Se Library',
    subtitle: 'Encouraging reading habits and promoting education',
    description:
      '“Raddi Se Library” is an initiative aimed at encouraging reading habits and promoting education by collecting old and unused books from homes, schools, and offices. "No book is ever wasted — every book creates a new dream."',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1400',
    icon: 'Library',
    impact: '10,000+ books collected',
    goals: [
      'Distribute books to underprivileged children',
      'Promote reuse of resources and protect environment',
      'Creating new dreams through every book',
    ],
    progress: 90,
    details: {
      collects_from: 'Homes, Schools, Offices',
      core_belief: 'No book is ever wasted — every book creates a new dream.',
    },
  },
  {
    slug: 'raddi-se-shiksha',
    href: '/campaigns/raddi-se-shiksha',
    title: 'Raddi Se Shiksha',
    subtitle: 'Turning unused books into a new ray of hope',
    description:
      'This initiative collects unused books and distributes them to children who cannot afford educational materials. We ensure education is treated as a right, not a privilege.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1400',
    icon: 'BookOpen',
    impact: '8,000–9,000 books distributed',
    goals: [
      'Ensure education is a right, not a privilege',
      'Turn every unused book into a ray of hope',
      'Providing essential materials to needy children',
    ],
    progress: 88,
    details: {
      objective: 'Ensure education is treated as a right, not a privilege',
    },
  },
  {
    slug: 'project-sahara',
    href: '/campaigns/project-sahara',
    title: 'Project Sahara',
    subtitle: 'Supporting elderly widow women with dignity',
    description:
      'Project Sahara supports elderly widow women who often face life without financial or emotional support. We ensure food security, dignity, and social inclusion for those valued by society.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1400',
    icon: 'Heart',
    impact: 'Monthly ration kits to 10 elderly widows',
    goals: [
      'Ensure food security and nutrition support',
      'Provide dignity and emotional care',
      'Foster social inclusion and belonging',
    ],
    progress: 75,
    details: {
      monthly_support: 'Ration kits provided to 10 elderly widows',
      purpose: 'Food security, Dignity, Emotional care, Social inclusion',
    },
  },
  {
    slug: 'scholarship-program',
    href: '/campaigns/scholarship-program',
    title: 'Yuvastambh Scholarship Program',
    subtitle: 'Supporting children through financial or social challenges',
    description:
      'This scholarship supports children who cannot continue education due to financial or social challenges. It helps students build a brighter future through academic guidance and mentorship.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400',
    icon: 'Sparkles',
    impact: '50+ students supported',
    goals: [
      '10th & 12th Open Board admission support',
      'B.A. (Bachelor of Arts) academic guidance',
      'Motivation and long-term mentorship',
    ],
    progress: 80,
    details: {
      support_includes: '10th/12th Open Board, B.A. support, Free classes, Mentorship',
    },
  },
  {
    slug: 'gyaan-shakti-school',
    href: '/campaigns/gyaan-shakti-school',
    title: 'Gyaan Shakti School',
    subtitle: 'First doorway to dignity and opportunity',
    description:
      'Operating in Jammu and PGI Chandigarh, Gyaan Shakti School targets children of labourers and daily-wage workers who have never attended formal schools.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400',
    icon: 'School',
    impact: '150 students currently studying',
    goals: [
      'Teaching English, Mathematics, and Science',
      'Serving children of daily-wage workers',
      'Providing the first doorway to opportunity',
    ],
    progress: 82,
    details: {
      operates_in: 'Jammu, PGI Chandigarh',
      target_group: 'Children of labourers and daily-wage workers',
    },
  },
  {
    slug: 'project-pankh',
    href: '/campaigns/project-pankh',
    title: 'Project Pankh',
    subtitle: 'Promoting menstrual hygiene and dignity',
    description:
      'Project Pankh promotes menstrual hygiene awareness and supports women with essential sanitary products. "We are not just giving pads — we are giving wings (Pankh) to live with dignity."',
    image: 'https://images.unsplash.com/photo-1573497619153-fb5260b8503a?w=1400',
    icon: 'Megaphone',
    impact: '3,000+ sanitary pads distributed yearly',
    goals: [
      'Break menstrual taboos and myths',
      'Promote hygiene and health awareness',
      'Provide dignity and confidence to women',
    ],
    progress: 78,
    details: {
      monthly_distribution: 'Sanitary pads to 100 women',
      message: 'We are not just giving pads — we are giving wings (Pankh) to live with dignity.',
    },
  },
  {
    slug: 'e-shiksha-project',
    href: '/campaigns/e-shiksha-project',
    title: 'E-Shiksha Project',
    subtitle: 'Digital empowerment and career readiness',
    description:
      'E-Shiksha provides free computer education to underprivileged children, bringing confidence, digital literacy, and future employment opportunities.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400',
    icon: 'Laptop',
    impact: '200 children trained, 120+ provided employment',
    goals: [
      'Basic computer skills and Tally ERP training',
      'Web designing and digital literacy',
      'Career readiness and economic upliftment',
    ],
    progress: 92,
    details: {
      training_includes: 'Basic computer skills, Tally ERP, Web designing',
    },
  },
] as const;
