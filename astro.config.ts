// @ts-check
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import robotsConfig from './robots.config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Production canonical URL
  site: 'https://windswept.bot',

  // Vite config
  vite: {
    plugins: [
      tailwindcss()
    ],
  },

  // Astro integrations
  integrations: [
    sitemap(), 
    robotsTxt(robotsConfig)
  ],
});
