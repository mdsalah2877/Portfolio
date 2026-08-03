export type SkillCategory = 'all' | 'design' | 'video' | 'marketing' | 'tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // percentage e.g. 95
  yearsOfExp: string;
  iconName: string;
  description: string;
  highlight?: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  turnaround: string;
  popular?: boolean;
}

export type PortfolioCategory = 'all' | 'Graphic Design' | 'Video Editing' | 'Motion Graphics' | 'Social Media' | 'Branding';

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  description: string;
  client: string;
  year: string;
  tools: string[];
  stats?: string;
  videoUrl?: string;
  deliverables: string[];
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Workflow' | 'Payment';
}
