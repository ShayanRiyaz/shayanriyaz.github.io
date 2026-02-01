import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://shayanriyaz.github.io',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
