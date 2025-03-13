import { defineConfig } from 'vite';

export default defineConfig({
  base: '/uccrn-atlas-demo/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'src/auth/login.html'
      }
    }
  }
});
