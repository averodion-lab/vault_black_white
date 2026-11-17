import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    globals: true,
  },
})
