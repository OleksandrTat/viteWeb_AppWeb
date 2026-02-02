import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'amiee-vacillant-folly.ngrok-free.dev'
    ]
  }
})
