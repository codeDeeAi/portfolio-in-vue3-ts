# Adeola Bada — Portfolio

Personal portfolio for [Adeola Bada](https://www.adeolabada.com), Senior Backend Engineer. Built with Nuxt 4, Vue 3, TypeScript, and Tailwind CSS v4.

## Live Site

[www.adeolabada.com](https://www.adeolabada.com)

## Features

- **Dual theme system** — Terminal Dark and Minimal Pro, user-selectable with a first-visit prompt and persistent toggle
- **Dark mode** — available in Minimal theme
- **SSG / SEO** — static site generation via Nuxt, Schema.org JSON-LD, Open Graph, Twitter Card meta
- **Sections** — Hero, About, Experience, Speaking, Projects, Tech Stack, Contact
- **Contact form** — Formspree integration with success/error states
- **Project thumbnails** — live site screenshots via Microlink

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | Nuxt 3.17 (Nuxt 4 compat mode) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties |
| State | Pinia (manual localStorage persistence) |
| Contact | Formspree |
| Deployment | Static (`nuxt generate`) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run generate
```

## Environment Variables

Create a `.env` file at the project root:

```env
NUXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

## Author

**Adeola Bada** — Senior Backend Engineer  
[GitHub](https://github.com/codeDeeAi) · [LinkedIn](https://www.linkedin.com/in/adeola-bada) · [adeolabada.com](https://www.adeolabada.com)

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).
