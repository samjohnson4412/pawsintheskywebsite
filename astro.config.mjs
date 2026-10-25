import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/site-url.mjs';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      // The thank-you page is a form destination, not something to rank.
      filter: (page) => !page.includes('/quote/thanks'),
    }),
  ],
  build: { format: 'directory' },
});
