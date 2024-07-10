import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // external configuration here is typically used for dependencies,
      // not for static assets like images.
      external:  ['src/assets/1.png'],
    },
  },
})

