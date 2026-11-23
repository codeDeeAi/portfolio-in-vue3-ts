export interface Product {
  name: string
  status: 'live' | 'beta'
  statusLabel: string
  summary: string
  features: string[]
  stack: string[]
  url: string
  urlLabel: string
  footnote: string
}

export const productsIntro =
  "Flowtali is my personal product, and Ruvian is the first product from my studio, Novenza. I'm the only engineer on both, from schema to deploy."

export const products: Product[] = [
  {
    name: 'Flowtali',
    status: 'live',
    statusLabel: 'Live',
    summary: 'Invoices, receipts, branded letterheads and project tracking for freelancers and small teams.',
    features: [
      'Workspaces with team invites and custom roles',
      '"Pay online" links on invoices, with receipts issued automatically',
      'Subscriptions in NGN and USD, with trials and renewal reminders',
      'An AI assistant that uses your own API key and confirms before every change',
      'API keys and an embeddable SDK. Available in four languages.',
    ],
    stack: ['Laravel 13', 'Vue 3', 'PWA', 'Docker'],
    url: 'https://www.flowtali.com/',
    urlLabel: 'flowtali.com',
    footnote: 'Personal product · since Apr 2026',
  },
  {
    name: 'Ruvian',
    status: 'beta',
    statusLabel: 'Private beta',
    summary: 'Operations and accountability for organisations with many branches: churches, NGOs, schools and cooperatives.',
    features: [
      'Branch returns, remittances and fund accounting with audit trails',
      'Members, programs, attendance and QR check-in',
      'Modules each organisation switches on, like school fees or messaging',
      "Each organisation's data kept separate by the database itself",
    ],
    stack: ['Go', 'PostgreSQL', 'Vue 3', 'Nuxt 4'],
    url: 'https://getruvian.com/',
    urlLabel: 'getruvian.com',
    footnote: 'Novenza Studio · early access open',
  },
]

export interface EarlierProject {
  name: string
  summary: string
  type: 'open source' | 'client' | 'personal'
  stack: string
  link?: { label: string; url: string }
}

export const earlierWork: EarlierProject[] = [
  {
    name: 'Précis',
    summary: 'PHP framework from scratch: router, ORM, DI container',
    type: 'open source',
    stack: 'PHP · Pest · Phinx',
    link: { label: 'GitHub', url: 'https://github.com/codeDeeAi/Precis' },
  },
  {
    name: 'Olayinka Ojo',
    summary: 'Portfolio and booking site for a multi-country consultant',
    type: 'client',
    stack: 'Nuxt · TypeScript',
    link: { label: 'Site', url: 'https://www.olayinkaojo.com/' },
  },
  {
    name: 'Hulo',
    summary: 'Real estate PWA with realtime chat and S3 media',
    type: 'personal',
    stack: 'Laravel · Nuxt · Redis · Pusher',
  },
  {
    name: 'CBT Platform APIs',
    summary: 'Exam engine with auto and manual grading',
    type: 'open source',
    stack: 'Laravel · MySQL',
    link: { label: 'GitHub', url: 'https://github.com/codeDeeAi/CBT_be_apis' },
  },
  {
    name: 'Countries & States API',
    summary: 'Public REST API',
    type: 'open source',
    stack: 'Node · Express',
    link: { label: 'API', url: 'https://countries-and-states.onrender.com/api/v1' },
  },
]
