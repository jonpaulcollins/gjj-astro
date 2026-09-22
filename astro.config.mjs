import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.guildfordbjj.com',
  integrations: [
    tailwind(),
    // /free-trial/* pages are hidden landing pages (booking links sent by the
    // AI assistant), not linked from the site — keep them out of the sitemap
    // too (G2a, 22 Sep 2026). They also carry a noindex meta tag as a second layer.
    sitemap({
      filter: (page) => !page.includes('/free-trial/'),
    }),
  ],
});
