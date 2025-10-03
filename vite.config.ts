import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],

  root: './src',

  publicDir: '../public',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

  server: {
    allowedHosts: [
      '284y29-5173.csb.app',
      '.csb.app', // разрешает все поддомены csb.app
    ],
  },

  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      app: path.resolve(process.cwd(), 'src/app'),
      pages: path.resolve(process.cwd(), 'src/pages'),
      widgets: path.resolve(process.cwd(), 'src/widgets'),
      features: path.resolve(process.cwd(), 'src/features'),
      entities: path.resolve(process.cwd(), 'src/entities'),
      shared: path.resolve(process.cwd(), 'src/shared'),
    },
  },

  // CSS настройки
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
