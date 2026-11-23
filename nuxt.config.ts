const description =
  'Senior Backend Engineer and Team Lead with 6+ years building payments, wallets, ledgers and AI assistants in Go, Laravel and Node.js.'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
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
        { name: 'description', content: description },
        { name: 'author', content: 'Adeola Bada' },
        {
          name: 'keywords',
          content: 'Adeola Bada, Senior Backend Engineer, Lead Engineer, Go, Golang, Laravel, Node.js, TypeScript, PHP, Vue, payments, wallets, API, Nigeria',
        },
        { name: 'color-scheme', content: 'light dark' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:site', content: '@AdeolaBada1' },
        { name: 'twitter:creator', content: '@AdeolaBada1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/1-rb.png' },
        { rel: 'apple-touch-icon', href: '/images/1-rb.png' },
        { rel: 'canonical', href: 'https://www.adeolabada.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap',
        },
      ],
    },
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
