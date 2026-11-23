export interface CaseRow {
  label: string
  text?: string
  items?: string[]
  /** Result rows get the signal colour. */
  result?: boolean
}

export interface CaseStudy {
  id: string
  meta: string
  title: string
  summary: string
  stack: string[]
  link?: { label: string; url: string }
  rows: CaseRow[]
  diagram?: 'nimi'
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'nxtevent',
    meta: 'NxtEvent · May 2025 → now · Backend lead',
    title: 'An event platform, and an AI assistant that asks before it acts',
    summary:
      'NxtEvent connects event planners, vendors, clients and guests. I wrote the Laravel API from the first commit and led the backend. That includes Nimi, the in-app assistant planners talk to instead of clicking through menus.',
    stack: ['PHP 8.4', 'Laravel 12', 'PostgreSQL', 'OpenAI', 'Gemini', 'Paystack', 'Twilio'],
    link: { label: 'thenxtevnt.com', url: 'https://www.thenxtevnt.com/' },
    rows: [
      {
        label: 'Built',
        items: [
          'Events, budgets with installments, guest lists, RSVP and guest websites',
          'A vendor marketplace with quote requests that flow straight into budgets',
          'Paystack payments confirmed by webhook, with a backup re-check, and split payouts to vendors',
          'One credit wallet for messages, AI and upgrades, with automatic refunds when a send fails',
          'WhatsApp and SMS guest messaging with RSVP replies',
        ],
      },
      {
        label: 'Nimi',
        text: "A router sends each request to the cheapest model that can handle it, and falls back to the other provider if one fails. About 20 tools give it read access to the planner's events, budgets and tasks. Changes come back as a preview and only run when the planner confirms, with 60 seconds to undo.",
      },
      {
        label: 'Scale',
        text: '1,369 passing tests, 240 migrations, and voice input that costs and logs every call.',
        result: true,
      },
    ],
    diagram: 'nimi',
  },
  {
    id: 'celebut',
    meta: 'Celebut · Jun 2026 → now · Lead Engineer',
    title: "Rebuilding a social gifting app's backend in Go",
    summary:
      "On Celebut, people post celebrations and friends send cash or digital gifts into multi-currency wallets. I'm leading a rebuild of the backend as a modular Go monolith, together with a new staff admin.",
    stack: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Centrifuge', 'AWS ECS', 'Vue 3', 'GDPR', 'NDPA'],
    rows: [
      {
        label: 'Context',
        text: 'The original backend grew fast, and new features got harder to add safely. The rebuild sets clear module boundaries before moderation, uploads and music features arrive.',
      },
      {
        label: 'Built',
        items: [
          'A double-entry ledger behind cash, pending and withdrawable wallets',
          'Cash gifts held until a celebration ends, then released or refunded',
          'Sign-in with magic links, Google and Apple, two-step login and device sessions',
          'Realtime feeds and celebrations, plus signed callbacks from the AI moderation service',
          'A Go admin API and Vue console with staff roles, an audit log and KYC review',
          'GDPR and NDPA compliance, including age checks for under-16s',
        ],
      },
      {
        label: 'Scale',
        text: '27 modules, about 300 API routes and 283 test files in the new backend. I wrote nearly all of it.',
        result: true,
      },
    ],
  },
  {
    id: 'kouture-konect',
    meta: 'Kouture Konect · Dec 2024 → now · Senior Backend',
    title: 'The backend of a global fashion marketplace',
    summary:
      "Customers order custom pieces from designers and sellers in other countries. I'm the main backend author, with over 3,000 commits. I cover money movement, cross-border shipping, realtime chat and consultations, admin access control and privacy.",
    stack: ['PHP', 'Laravel 13', 'MySQL', 'Node.js', 'Socket.IO', 'TypeScript', 'GDPR', 'NDPA'],
    link: { label: 'kouturekonect.com', url: 'https://www.kouturekonect.com/' },
    rows: [
      {
        label: 'Built',
        items: [
          'Wallets and vendor settlement: earnings held until an order is fulfilled, then released. Refunds fall back safely when a card refund fails.',
          'Four payment gateways across USD, EUR, GBP and NGN',
          'Seven shipping carriers behind one interface, with courier webhooks and order timelines',
          'A Socket.IO service for chat, notifications, video consultation status and designer availability',
          'Custom admin access control: 64 permissions in 24 groups, with refund limits per role',
          'GDPR and NDPA compliance: consent records, account deletion, encrypted addresses and audit logs',
        ],
      },
      {
        label: 'Scale',
        text: 'About 740 API routes and 688 tests, kept current from Laravel 8 to 13 while it stayed live.',
        result: true,
      },
    ],
  },
  {
    id: 'weeshr',
    meta: 'Weeshr · 2023–2025 · Senior Backend',
    title: 'Wallets, payments and payouts for a gifting marketplace',
    summary: 'I designed the modular monolith behind Weeshr and led the features that move money.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'Redis', 'Socket.IO'],
    link: { label: 'weeshr.com', url: 'https://weeshr.com/' },
    rows: [
      {
        label: 'Built',
        text: 'User wallets, payments with fraud checks, a queued payout pipeline for partners, and realtime notifications.',
      },
      {
        label: 'Result',
        text: '−40% payout processing time, −30% fraud incidents, +25% user engagement.',
        result: true,
      },
    ],
  },
  {
    id: 'silky-systems',
    meta: 'Silky Systems · Jul 2021 – Jun 2026 · Developer → Team Lead',
    title: 'Five years building a retail software suite, from developer to team lead',
    summary:
      "Silky Systems builds business software for retail and logistics clients in Saudi Arabia. I joined as a developer, was promoted to Team Lead, and led the team that shipped the company's core products.",
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'REST'],
    link: { label: 'ipos.silkysystems.com', url: 'https://ipos.silkysystems.com/' },
    rows: [
      {
        label: 'Built',
        items: [
          'iPOS v2: a rebuilt point-of-sale web app for retail operations',
          'iPortal: an operations admin with authentication, role-based access and multi-language support',
          'Logistics: a warehouse fulfilment system for order tracking',
          'A CRM with a token system for product identification and user tracking',
          'Custom reporting and a payment gateway integration',
        ],
      },
      {
        label: 'Led',
        text: 'Ran the development team as Team Lead: planning milestones, reviewing work and keeping releases on schedule.',
      },
      {
        label: 'Result',
        text: "Four products in production, used by Silky Systems' clients.",
        result: true,
      },
    ],
  },
]
