export interface Project {
  id: number
  title: string
  description: string
  stack: string[]
  image: string
  github?: string
  demo?: string
  featured: boolean
  category: 'backend' | 'fullstack' | 'frontend' | 'cli' | 'framework' | 'production'
  highlights?: string[]
  wip?: boolean
  company?: string
}

const thumb = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

export const projects: Project[] = [
  // ─── FEATURED — MOST RECENT PRODUCTION ────────────────────────────────────
  {
    id: 15,
    title: 'NxtEvent Platform',
    description:
      'Modern event technology platform that unites planners, clients, vendors, and guests in one shared space. Leading backend architecture, API development, and team operations as contract Team Lead.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Docker'],
    image: thumb('https://www.thenxtevnt.com/'),
    demo: 'https://www.thenxtevnt.com/',
    featured: true,
    category: 'production',
    company: 'NxtEvent',
    highlights: [
      'Led full backend architecture from ground up',
      'Overseeing API design, deployment & team workflows',
    ],
  },
  {
    id: 16,
    title: 'Kouture Konect',
    description:
      'Global fashion tech platform facilitating custom design connections. Migrated the backend from Laravel 8 to Laravel 11 and maintain the production API infrastructure supporting web and mobile clients.',
    stack: ['PHP', 'Laravel', 'Node.js', 'TypeScript', 'MySQL', 'REST APIs'],
    image: thumb('https://www.kouturekonect.com/'),
    demo: 'https://www.kouturekonect.com/',
    featured: true,
    category: 'production',
    company: 'Kouture Konect LLC',
    highlights: [
      'Full Laravel 8 → 11 migration',
      'Scalable REST API supporting web & mobile',
    ],
  },
  {
    id: 18,
    title: 'Weeshr',
    description:
      'Gifting marketplace platform allowing users to gift themselves or surprise loved ones. Led backend as Senior Developer: built wallet system, payments, payouts, and realtime notification infrastructure.',
    stack: ['Node.js', 'TypeScript', 'Redis', 'MongoDB', 'Socket.IO', 'Paystack', 'Supabase', 'Docker'],
    image: 'https://res.cloudinary.com/drykej1am/image/upload/v1757702126/weeshr-marketplace/Desktop_-_19_jcvfpg.png',
    demo: 'https://weeshr.com/',
    featured: true,
    category: 'production',
    company: 'Weeshr App Ltd',
    highlights: [
      '+25% user engagement via notification system',
      '-30% fraud incidents in payment system',
      '-40% payout processing time',
    ],
  },

  // ─── PRODUCTION (COMPANY PROJECTS) ───────────────────────────────────────
  {
    id: 11,
    title: 'iPOS v2',
    description:
      'Point-of-sale system with a fully redesigned web interface. Rebuilt the UI from scratch to improve usability and modernise the end-user experience for retail operations.',
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'REST APIs'],
    image: thumb('https://ipos.silkysystems.com/'),
    demo: 'https://ipos.silkysystems.com/',
    featured: false,
    category: 'production',
    company: 'Silky Systems',
  },
  {
    id: 12,
    title: 'CRM — Silky Systems',
    description:
      'Customer relationship management platform with a custom Token System for product identification and user tracking. Includes reporting, analytics, and integrated payment gateway.',
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'REST APIs'],
    image: thumb('https://crm.silkysystems.com/'),
    demo: 'https://crm.silkysystems.com/',
    featured: false,
    category: 'production',
    company: 'Silky Systems',
  },
  {
    id: 13,
    title: 'Logistics / Warehouse FMS',
    description:
      'Warehouse Fulfilment Management System built to streamline order tracking and warehouse operations for Silky Systems clients.',
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'REST APIs'],
    image: thumb('https://logistics.silkysystems.com/'),
    demo: 'https://logistics.silkysystems.com/',
    featured: false,
    category: 'production',
    company: 'Silky Systems',
  },
  {
    id: 14,
    title: 'iPortal',
    description:
      'Admin and operations portal for Silky Systems. Features robust authentication, role-based authorization, multi-language support, and a comprehensive management dashboard.',
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'REST APIs'],
    image: thumb('https://iportal.silkysystems.com/'),
    demo: 'https://iportal.silkysystems.com/',
    featured: false,
    category: 'production',
    company: 'Silky Systems',
  },

  // ─── WIP ─────────────────────────────────────────────────────────────────
  {
    id: 17,
    title: 'Flowtali',
    description:
      'Invoice and letterhead generation tool currently in development. Streamlines professional document creation for freelancers and small businesses.',
    stack: ['Node.js', 'TypeScript', 'REST APIs'],
    image: '/images/projects/precis.png',
    featured: false,
    category: 'backend',
    wip: true,
  },

  // ─── OPEN SOURCE / PERSONAL ───────────────────────────────────────────────
  {
    id: 1,
    title: 'Hulo',
    description:
      'Real estate marketplace PWA connecting verified house owners and realtors to prospective buyers. Features secure auth, realtime chats via Redis + Pusher, AWS S3 uploads, subscriptions, and listing recommendations.',
    stack: ['PWA', 'Vue.js', 'Nuxt.js', 'Laravel', 'PHP', 'Redis', 'Pusher', 'AWS S3', 'Node.js', 'Express.js', 'SQL'],
    image: '/images/projects/hulo.png',
    featured: false,
    category: 'fullstack',
    highlights: [
      'Real-time chat infrastructure with Redis pub/sub and Pusher',
      'AWS S3 for scalable media storage',
      'Realtor verification and subscription system',
    ],
  },
  {
    id: 2,
    title: 'Précis',
    description:
      'Custom PHP framework built from scratch — routing, MVC, migrations, Active Records, middlewares, events, and a DI container. Built to understand how Laravel and Symfony work under the hood.',
    stack: ['PHP', 'Composer', 'Pest', 'Phinx'],
    image: '/images/projects/precis.png',
    github: 'https://github.com/codeDeeAi/Precis',
    featured: false,
    category: 'framework',
    highlights: [
      'Custom routing engine with middleware pipeline',
      'Active Record ORM with migration system',
      'Event-driven architecture and DI container',
    ],
  },
  {
    id: 3,
    title: 'CBT Platform APIs',
    description:
      'Backend API system for Computer Based Assessments. Teachers create exams, register students, and grade results. Features auto + manual grading, instant results, and performance analytics.',
    stack: ['PHP', 'Laravel', 'REST APIs', 'MySQL'],
    image: '/images/projects/cbt.png',
    github: 'https://github.com/codeDeeAi/CBT_be_apis',
    featured: false,
    category: 'backend',
    highlights: [
      'Auto and manual grading engine',
      'Instant result computation post-exam',
      'Student performance analytics',
    ],
  },
  {
    id: 4,
    title: 'Thrift.io',
    description:
      'Application for organising rotating savings (AJO) among family and friends. Create thrift groups, manage members, auto-calculate due dates, and track finances.',
    stack: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'JavaScript'],
    image: '/images/projects/thrift.png',
    github: 'https://github.com/codeDeeAi/thrift.io',
    featured: false,
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'Wafi — Bank CLI',
    description:
      'PHP 8+ CLI application for bank transactions: creating accounts, depositing credits, and transferring between accounts. Clean OOP design, fully backwards compatible.',
    stack: ['PHP 8+', 'Composer', 'CLI', 'OOP'],
    image: '/images/projects/wafi.png',
    github: 'https://github.com/codeDeeAi/wafi',
    featured: false,
    category: 'cli',
  },
  {
    id: 6,
    title: 'Countries & States API',
    description:
      'RESTful API built with Node.js and Express.js exposing all countries and their states. Simple, powerful endpoints with fast response times.',
    stack: ['Node.js', 'Express.js', 'JavaScript', 'REST APIs'],
    image: '/images/projects/countries-states.png',
    github: 'https://github.com/codeDeeAi/countries_and_states_api',
    demo: 'https://countries-and-states.onrender.com/api/v1',
    featured: false,
    category: 'backend',
  },
  {
    id: 7,
    title: 'Finance Tracker',
    description:
      'Personal finance tracker for daily income, expenses, and savings across multiple accounts. Visualises data through lists and charts.',
    stack: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'JavaScript'],
    image: '/images/projects/financelogger.png',
    github: 'https://github.com/codeDeeAi/financeloggerclient',
    featured: false,
    category: 'fullstack',
  },
  {
    id: 8,
    title: 'Issue / Bug Tracker',
    description:
      'Issue and bug tracker for QA teams. Manage teams, assign tasks, record defects, and export reports to Excel.',
    stack: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'JavaScript'],
    image: '/images/projects/bugtracker.png',
    github: 'https://github.com/codeDeeAi/issue_tracker.git',
    featured: false,
    category: 'fullstack',
  },
  {
    id: 9,
    title: 'LaraBlog',
    description:
      'Full-featured blog platform with role-based admin panel, fully customisable by the administrator with user roles and permissions.',
    stack: ['Laravel 7', 'Vue.js', 'PHP', 'MySQL'],
    image: '/images/projects/larablog.png',
    github: 'https://github.com/codeDeeAi/Larablog.git',
    featured: false,
    category: 'fullstack',
  },
  {
    id: 10,
    title: 'Hulo Admin Dashboard',
    description:
      'Administrator portal for the Hulo platform with realtime notifications, role-based access, app customisation, email management, and listing controls.',
    stack: ['Vue.js', 'TypeScript', 'JavaScript', 'AWS S3', 'Pusher', 'REST APIs'],
    image: '/images/projects/hulo-admin.png',
    featured: false,
    category: 'fullstack',
  },
]
