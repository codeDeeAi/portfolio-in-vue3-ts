export interface StackGroup {
  label: string
  items: string[]
}

/** Shown as its own highlighted band. The first item is emphasised. */
export const coreStack: string[] = ['Go', 'PHP / Laravel', 'TypeScript / Node.js', 'Vue 3 / Nuxt']

export const stackGroups: StackGroup[] = [
  { label: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'job queues (River, asynq, Laravel queues)'] },
  {
    label: 'Systems',
    items: ['Ledgers and wallets', 'payment webhooks', 'WebSockets (Socket.IO, Centrifuge)', 'multi-tenancy', 'access control', 'GDPR / NDPA compliance'],
  },
  { label: 'APIs & docs', items: ['REST', 'OpenAPI', 'Scramble', 'Swagger', 'oapi-codegen', 'Postman'] },
  { label: 'Monitoring', items: ['Datadog (logs, RUM)', 'Laravel Nightwatch', 'Mixpanel', 'PostHog'] },
  { label: 'Infra', items: ['Docker', 'AWS (ECS, RDS, S3)', 'Cloudflare (R2, Stream)', 'Laravel Cloud', 'Coolify', 'GitHub Actions'] },
  { label: 'Testing', items: ['Go tests', 'Pest', 'Vitest', 'Cypress'] },
  { label: 'AI in products', items: ['Claude, OpenAI and Gemini APIs', 'tool calling', 'model routing and fallback', 'usage metering'] },
  { label: 'AI tools I use', items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'ChatGPT', 'learning Rust on the side'] },
]
