import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Omogućava globalne funkcije poput `describe`, `it`, itd.
    environment: 'jsdom', // Simulira DOM okruženje za testiranje React komponenti.
    setupFiles: './src/setupTests.ts', // Fajl za postavljanje globalnih konfiguracija za testiranje.
  },
})
