import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  base: '/myfinace/',
  plugins: [react()],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 900
  }
})
