import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
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
      // Explicitly stringify the environment variable
      __PASSWORD__: JSON.stringify(env.VITE_APP_PASSWORD || process.env.VITE_APP_PASSWORD)
    }
  };
});
