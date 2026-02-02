// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://coruz.net',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    sitemap({
      filter: (page) =>
        page !== 'https://coruz.net/404' && page !== 'https://coruz.net/aviso-de-privacidad/',
    }),
  ],
})
