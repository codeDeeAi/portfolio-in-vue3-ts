export interface Experience {
  id: number
  company: string
  role: string
  period: string
  location: string
  current: boolean
  highlights: string[]
  stack: string[]
  website?: string
  metrics?: { value: string; label: string }[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Kouture Konect LLC',
    role: 'Senior Backend Engineer',
    period: 'Dec 2024 – Present',
    location: 'Remote, USA',
    current: true,
    highlights: [
      'Migrated legacy codebase from Laravel 8 to Laravel 11, implementing modern features and ensuring full compatibility.',
      'Designed and maintained scalable, secure server-side applications and REST APIs supporting web and mobile platforms.',
      'Built and optimized relational MySQL databases ensuring data integrity and high query performance.',
      'Collaborated with frontend and mobile teams for seamless platform integration.',
      'Implemented secure coding practices to protect sensitive data and ensure compliance.',
    ],
    stack: ['PHP', 'Laravel', 'Node.js', 'TypeScript', 'MySQL', 'REST APIs'],
    website: 'https://www.kouturekonect.com',
  },
  {
    id: 7,
    company: 'NxtEvent',
    role: 'Backend Engineer & Team Lead (Contract)',
    period: 'May 2025 – Present',
    location: 'Remote',
    current: true,
    highlights: [
      'Leading backend development and engineering team for NxtEvent, a modern event technology platform.',
      'Overseeing system architecture, API development, and deployment operations.',
      'Managing team workflows, prioritising features, and ensuring timely delivery of platform milestones.',
    ],
    stack: ['Node.js', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Docker'],
    website: 'https://www.thenxtevnt.com',
  },
  {
    id: 2,
    company: 'Weeshr App Ltd',
    role: 'Senior Backend Developer',
    period: 'Sep 2023 – Oct 2025',
    location: 'Remote, Lagos',
    current: false,
    highlights: [
      'Designed and implemented a Modular Monolithic Architecture, optimising system performance and scalability.',
      'Led development of critical features: user wallets, payments, payouts, and delivery systems.',
      'Managed user notifications system, driving a 25% increase in user engagement.',
      'Implemented robust security measures in payment systems, reducing fraud incidents by 30%.',
      'Streamlined payout processes for users and partners, decreasing processing time by 40%.',
      'Mentored junior developers and fostered a collaborative, high-performance team environment.',
    ],
    stack: ['Node.js', 'TypeScript', 'Redis', 'Socket.IO', 'Ably', 'Supabase', 'MongoDB', 'Docker', 'Paystack', 'Cloudinary', 'Digital Ocean'],
    website: 'https://weeshr.com',
    metrics: [
      { value: '+25%', label: 'User Engagement' },
      { value: '-30%', label: 'Fraud Incidents' },
      { value: '-40%', label: 'Payout Processing Time' },
    ],
  },
  {
    id: 3,
    company: 'Silky Systems',
    role: 'Software Developer → Team Lead',
    period: 'Jul 2021 – Present',
    location: 'Riyadh, Saudi Arabia',
    current: true,
    highlights: [
      'Promoted to Team Lead, overseeing a team of developers and ensuring project milestones are met on schedule.',
      'Redesigned and implemented new UI for iPOS Version 2, enhancing usability for end-users.',
      'Directed development of a comprehensive admin panel (iPortal) with authentication, authorization, and multi-language support.',
      'Spearheaded creation of a Warehouse Fulfilment Management System (Logistics) to streamline order tracking.',
      'Designed a Token System for the CRM platform, improving product identification and user tracking.',
      'Developed a custom reporting system and integrated a payment gateway.',
    ],
    stack: ['PHP', 'Laravel', 'Vue.js', 'JavaScript', 'MySQL', 'REST APIs'],
  },
  {
    id: 4,
    company: 'DueDash Capital Networks',
    role: 'Product Development & Testing Intern',
    period: 'May 2021 – Jul 2021',
    location: 'Cologne, Germany',
    current: false,
    highlights: [
      'Conducted 20+ comprehensive End-to-End (E2E) tests, identifying bugs that improved user flow.',
      'Authored 8+ FAQs for the company website, significantly reducing customer support queries.',
    ],
    stack: ['E2E Testing', 'QA', 'Documentation'],
  },
  {
    id: 5,
    company: 'Freelance',
    role: 'Web Developer',
    period: 'Mar 2020 – Jan 2021',
    location: 'Ondo, Nigeria',
    current: false,
    highlights: [
      'Developed and launched a modern website for a construction company, improving visibility and UX.',
      'Designed a stateless user authentication flow and built a functional e-commerce prototype.',
    ],
    stack: ['Vue.js', 'Firebase', 'PHP', 'JavaScript'],
  },
  {
    id: 6,
    company: 'Longbridge Technologies Ltd',
    role: 'Software Development Graduate Intern',
    period: 'Oct 2019 – Feb 2020',
    location: 'Ondo, Nigeria',
    current: false,
    highlights: [
      'Conducted 200+ E2E tests, improving system reliability and user experience.',
      'Assisted in developing UML diagrams and a prototype KYC banking application.',
    ],
    stack: ['PHP', 'SQL', 'UML', 'Testing'],
  },
]
