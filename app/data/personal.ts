export const personal = {
  name: 'Adeola Bada',
  title: 'Senior Backend Engineer',
  status: 'Lead Engineer at Celebut · open to select contract work',
  locationLine: 'Nigeria · Remote · UTC+1',
  // The first phrase is what renders on the server and what screen readers hear.
  heroPhrases: [
    'payments, wallets and APIs',
    'AI assistants that ask first',
    'ledgers and payout systems',
    'multi-tenant SaaS backends',
  ],
  lede:
    "Senior Backend Engineer and Team Lead with 6+ years in Go, Laravel and Node.js. I've built ledgers, payout systems, shipping integrations and AI assistants for marketplaces in Nigeria, the US and Europe, with GDPR and NDPA compliance designed in.",
  email: 'dunsin.bada@gmail.com',
  website: 'https://www.adeolabada.com',
  resumeUrl:
    'https://docs.google.com/document/d/1okaqsmiuCgyqf4zxqJ1wNJG4i71-njDJLHzOD_70N4E/edit?usp=sharing',
  photo: '/images/1-rb.png',
  education: 'MSc Information Technology · Miva Open University (finishing)',
  contact: {
    title: 'Need a backend that holds the load?',
    text: "I take on a few backend contracts a year and I'm happy to talk about lead roles. I reply within two working days.",
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/codeDeeAi' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/adeola-bada-aiism-a51174124/' },
    { name: 'X', url: 'https://twitter.com/AdeolaBada1' },
  ],
}

export interface Result {
  value: string
  label: string
  source: string
  highlight?: boolean
}

export const results: Result[] = [
  { value: '−40%', label: 'payout processing time', source: 'Weeshr · payouts', highlight: true },
  { value: '−30%', label: 'payment fraud incidents', source: 'Weeshr · payments', highlight: true },
  { value: '1,369', label: 'passing tests on an API I wrote', source: 'NxtEvent · Laravel' },
  { value: '7', label: 'shipping carriers integrated', source: 'Kouture Konect' },
  { value: 'L8→13', label: 'live Laravel upgrade, no rewrite', source: 'Kouture Konect' },
]
