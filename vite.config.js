import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'src/assets/1.png',
        'src/assets/2.png',
        'src/assets/3.png',
      ],
    },
  },
})
