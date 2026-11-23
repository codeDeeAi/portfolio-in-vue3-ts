export const currentRoles = {
  heading: 'Leading engineering at Celebut',
  text: "I also build Kouture Konect's backend, and I lead NxtEvent's backend on contract.",
  primary: {
    company: 'Celebut',
    role: 'Lead Engineer · Lagos, Nigeria',
    since: 'Main role · since Jun 2026',
    summary: 'Rebuilding the backend of a social gifting app in Go.',
  },
  also: [
    { company: 'Kouture Konect', role: 'Senior Backend Engineer · remote, USA', since: 'since 2024' },
    { company: 'NxtEvent', role: 'Backend lead · contract', since: 'since 2025' },
  ],
}

export interface Experience {
  period: string
  company: string
  role: string
  location: string
  note?: string
}

export const experiences: Experience[] = [
  { period: 'Jun 2026 → now', company: 'Celebut', role: 'Lead Engineer', location: 'Lagos, NG' },
  { period: 'May 2025 → now', company: 'NxtEvent', role: 'Backend Engineer & Team Lead', location: 'Remote', note: 'contract' },
  { period: 'Dec 2024 → now', company: 'Kouture Konect LLC', role: 'Senior Backend Engineer', location: 'Remote, USA' },
  { period: 'Sep 2023 – Oct 2025', company: 'Weeshr App Ltd', role: 'Senior Backend Developer', location: 'Remote, Lagos' },
  { period: 'Jul 2021 – Jun 2026', company: 'Silky Systems', role: 'Software Developer → Team Lead', location: 'Riyadh, SA' },
  { period: 'May – Jul 2021', company: 'DueDash Capital Networks', role: 'Product & Testing Intern', location: 'Cologne, DE' },
  { period: '2019 – 2021', company: 'Freelance · Longbridge Technologies', role: 'Web Developer · Graduate Intern', location: 'Ondo, NG' },
]
