import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jalabarentoclothingshop/',   // ← must end with / and match repo name exactly (lowercase)
})