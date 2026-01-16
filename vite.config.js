import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: '/sp3FrontendEksamen/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://music.codedbyniki.dk',
        changeOrigin: true,
      }
    }
  }
})
