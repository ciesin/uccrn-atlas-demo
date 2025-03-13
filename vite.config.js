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
      }
    }
  },
  define: {
    'import.meta.env.VITE_APP_PASSWORD': JSON.stringify(process.env.VITE_APP_PASSWORD)
  }
});
