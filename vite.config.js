import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Rachapudi-Sai-Sree-Portfolio/',
  server: {
    host: true, // Exposes to local network so mobile devices can connect
    port: 5173,
  },
  preview: {
    host: true, // Exposes preview to local network
    port: 4173,
  }
})
