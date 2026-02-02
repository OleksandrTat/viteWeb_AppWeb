import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/viteWeb_AppWeb/',
  build: {
    outDir: 'dist',
  }
})