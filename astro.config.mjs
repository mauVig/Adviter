import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  build: {
    format: 'file',
  },
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
