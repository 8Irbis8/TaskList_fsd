import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    })
  ],

  root: './src',

  publicDir: '../public',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

  //для CodeSandBox
  server: {
    allowedHosts: [
      '284y29-5173.csb.app',
      '.csb.app',
    ],
  },

  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      app: path.resolve(process.cwd(), 'src/app'),
      pages: path.resolve(process.cwd(), 'src/pages'),
      widgets: path.resolve(process.cwd(), 'src/widgets'),
      layouts: path.resolve(process.cwd(), 'src/layouts'),
      features: path.resolve(process.cwd(), 'src/features'),
      entities: path.resolve(process.cwd(), 'src/entities'),
      shared: path.resolve(process.cwd(), 'src/shared'),
    },
  },

  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },

  // React Compiler конфигурация
  define: {
    'process.env.REACT_COMPILER_OPTIONS': JSON.stringify({
      compilationMode: 'all',
      runtimeModule: 'react/compiler-runtime',
    }),
  },
});