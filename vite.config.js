import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  // base: command === 'serve' ? '/' : '/krechetov-cv-2025/',
  base: '/krechetov-cv-2025/',
}));
