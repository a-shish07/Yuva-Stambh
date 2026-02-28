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
  Briefcase,
  Award,
  LucideIcon
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
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
  Briefcase,
  Award,
};

export type IconName = keyof typeof iconMap;
