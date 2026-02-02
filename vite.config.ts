import { defineConfig } from 'vite'

export default defineConfig({
  base: '/viteWeb_AppWeb/',
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'amiee-vacillant-folly.ngrok-free.dev'
    ]
  }
})
