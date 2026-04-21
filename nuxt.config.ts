export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    public: {
      formspreeId: process.env.NUXT_PUBLIC_FORMSPREE_ID ?? '',
    },
  },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  vite: {
    plugins: [
      (await import('@tailwindcss/vite')).default(),
    ],
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Adeola Bada | Senior Backend Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Senior Backend Engineer with 5+ years building scalable APIs, distributed systems, and high-performance backend infrastructure. Laravel · Node.js · TypeScript · Redis.',
        },
        { name: 'author', content: 'Adeola Bada' },
        { name: 'keywords', content: 'Adeola Bada, Senior Backend Engineer, Laravel, Node.js, TypeScript, PHP, Redis, API, Nigeria' },
        { property: 'og:title', content: 'Adeola Bada | Senior Backend Engineer' },
        {
          property: 'og:description',
          content: 'Senior Backend Engineer with 5+ years building scalable APIs, distributed systems, and high-performance backend infrastructure.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.adeolabada.com' },
        { property: 'og:image', content: 'https://www.adeolabada.com/images/1-rb.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@AdeolaBada1' },
        { name: 'twitter:creator', content: '@AdeolaBada1' },
        { name: 'twitter:title', content: 'Adeola Bada | Senior Backend Engineer' },
        {
          name: 'twitter:description',
          content: 'Senior Backend Engineer with 5+ years building scalable APIs and distributed systems.',
        },
        { name: 'twitter:image', content: 'https://www.adeolabada.com/images/1-rb.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/1-rb.png' },
        { rel: 'apple-touch-icon', href: '/images/1-rb.png' },
        { rel: 'canonical', href: 'https://www.adeolabada.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap',
        },
      ],
    },
  },

  image: {
    quality: 85,
    formats: ['webp', 'png'],
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  typescript: {
    strict: true,
  },
})
