import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/uccrn-atlas-demo/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/auth/login.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 2000
  }
});
