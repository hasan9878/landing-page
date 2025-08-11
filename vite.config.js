import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // prevent Vite's pre-bundling from trying to handle the native lightningcss module
  optimizeDeps: {
    exclude: ['lightningcss']
  },
  // tell SSR/build that lightningcss is external (don't try to bundle its native .node file)
  ssr: {
    external: ['lightningcss']
  },
  build: {
    rollupOptions: {
      // if something in your build tries to require the relative binary path directly,
      // mark it external so rollup won't try to bundle/resolve it.
      external: ['../lightningcss.linux-x64-gnu.node']
    }
  }
})
