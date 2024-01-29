import { defineConfig } from 'vitest/config';
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/unit/setup.ts'], 
    transformMode: {
      web: [/.[tj]sx?$/], // Transform both .ts and .js files
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      '~': '/src',
    },
  },
});