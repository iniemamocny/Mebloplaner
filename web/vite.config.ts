import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:
    process.env.VITE_BASE_URL ??
    (process.env.NODE_ENV === 'production' ? '/MebloPlaner/' : '/'),
  plugins: [react()],
})
