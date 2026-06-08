/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) =>
  mode === 'library'
    ? {
        plugins: [
          react(),
          dts({
            insertTypesEntry: true,
            include: ['src'],
            exclude: ['src/**/*.story.tsx', 'src/**/*.test.tsx'],
          }),
          checker({
            typescript: true,
          }),
        ],
        test: {
          globals: true,
          environment: 'jsdom',
        },
        build: {
          minify: false,
          sourcemap: true,
          copyPublicDir: false,
          lib: {
            entry: resolve('src', 'index.ts'),
            formats: ['es'],
            fileName: 'index',
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', 'ctrl-keys'],
          },
        },
      }
    : {
        plugins: [
          react(),
          checker({
            typescript: true,
          }),
        ],
        test: {
          globals: true,
          environment: 'jsdom',
        },
      },
);
