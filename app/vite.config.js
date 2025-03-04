import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      // Add this to handle the ArcGIS assets properly
      '@arcgis': resolve(__dirname, 'node_modules/@arcgis')
    }
  },
  // This ensures that Vite properly copies ArcGIS assets during build
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  server: {
    // Option 1: Remove strict COEP headers
    headers: {
      // "Cross-Origin-Opener-Policy": "same-origin", 
      // "Cross-Origin-Embedder-Policy": "require-corp" 
    },
    // Option 2: Set up a proxy for ArcGIS Online requests
    proxy: {
      '/arcgis-proxy': {
        target: 'https://www.arcgis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/arcgis-proxy/, '')
      }
    }
  }
})