<script setup lang="ts">
useSeoMeta({
  title: 'Adeola Bada | Senior Backend Engineer',
  description:
    'Senior Backend Engineer with 5+ years building scalable APIs, distributed systems, and high-performance backend infrastructure. Laravel · Node.js · TypeScript · Redis.',
  ogTitle: 'Adeola Bada | Senior Backend Engineer',
  ogDescription:
    'Senior Backend Engineer specialising in scalable APIs, distributed systems, and backend infrastructure.',
  ogImage: 'https://www.adeolabada.com/images/1-rb.png',
  ogUrl: 'https://www.adeolabada.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Adeola Bada | Senior Backend Engineer',
  twitterDescription: 'Senior Backend Engineer with 5+ years building scalable APIs and distributed systems.',
  twitterImage: 'https://www.adeolabada.com/images/1-rb.png',
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
            '@id': 'https://www.adeolabada.com/#website',
            url: 'https://www.adeolabada.com',
            name: 'Adeola Bada Portfolio',
            description: 'Portfolio of Adeola Bada, Senior Backend Engineer',
          },
          {
            '@type': 'Person',
            '@id': 'https://www.adeolabada.com/#person',
            name: 'Adeola Bada',
            url: 'https://www.adeolabada.com',
            image: 'https://www.adeolabada.com/images/1-rb.png',
            jobTitle: 'Senior Backend Engineer',
            email: 'dunsin.bada@gmail.com',
            sameAs: [
              'https://github.com/codeDeeAi',
              'https://www.linkedin.com/in/adeola-bada-aiism-a51174124/',
              'https://twitter.com/AdeolaBada1',
            ],
            knowsAbout: ['PHP', 'Laravel', 'Node.js', 'TypeScript', 'Redis', 'MySQL', 'MongoDB', 'Docker', 'AWS', 'REST APIs'],
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Federal University Oye Ekiti',
            },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="bg-[var(--bg-primary)] min-h-screen">
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SpeakingSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
