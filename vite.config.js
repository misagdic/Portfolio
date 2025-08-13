import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ağdaki diğer cihazlardan erişim için
    port: 5173       // İstersen portu değiştirebilirsin
  }
})
