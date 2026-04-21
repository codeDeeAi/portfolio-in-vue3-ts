export interface SpeakingEngagement {
  id: number
  event: string
  organisation: string
  role: string
  topic: string
  date: string
  location: string
  format: string
  recordingUrl?: string
  description: string
}

export const speakingEngagements: SpeakingEngagement[] = [
  {
    id: 1,
    event: 'Career Pathways & Global Opportunities in IT',
    organisation: 'Reconciliation House Youth Church',
    role: 'Guest Speaker',
    topic: 'Career Pathways & Global Opportunities in Information Technology',
    date: '27 July 2025',
    location: 'Akure, Ondo State, Nigeria',
    format: 'Live-streamed (YouTube Live)',
    recordingUrl: 'https://www.youtube.com/live/Gtrg7suZQJI',
    description:
      'Addressed a youth audience on navigating career pathways in the IT industry and accessing global professional opportunities — drawing from personal experience working across Nigeria, Saudi Arabia, Germany, and the United States.',
  },
]
