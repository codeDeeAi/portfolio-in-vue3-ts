<script setup lang="ts">
import { personal } from '~/data/personal'

const title = 'Adeola Bada | Senior Backend Engineer'
const description =
  'Senior Backend Engineer and Team Lead with 6+ years building payments, wallets, ledgers and AI assistants in Go, Laravel and Node.js.'
const url = 'https://www.adeolabada.com'
const image = `${url}/images/1-rb.png`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: url,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${url}/#website`,
            url,
            name: 'Adeola Bada Portfolio',
            description: 'Portfolio of Adeola Bada, Senior Backend Engineer',
          },
          {
            '@type': 'Person',
            '@id': `${url}/#person`,
            name: personal.name,
            url,
            image,
            jobTitle: 'Lead Engineer',
            worksFor: { '@type': 'Organization', name: 'Celebut' },
            email: personal.email,
            sameAs: personal.socials.map((s) => s.url),
            knowsAbout: [
              'Go', 'PHP', 'Laravel', 'Node.js', 'TypeScript', 'Vue.js', 'PostgreSQL', 'MySQL', 'Redis',
              'Payments', 'Double-entry ledgers', 'REST APIs', 'AI assistants', 'GDPR', 'NDPA',
            ],
            alumniOf: { '@type': 'CollegeOrUniversity', name: 'Federal University Oye Ekiti' },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <AppHeader />
    <main class="wrap">
      <HeroSection />
      <NowSection />
      <WorkSection />
      <ProductsSection />
      <EarlierWorkSection />
      <ExperienceSection />
      <StackSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
