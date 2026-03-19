// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  // Update with your GitHub username (e.g. https://johndoe.github.io)
  site: 'https://entwicklungszeit.github.io/',
  base: '/ct-net-shop.com',
  vite: {
    plugins: [tailwindcss()]
  }
})
