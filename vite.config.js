import { defineConfig } from "vite";

const productionConfig = {
  base: '/uccrn-atlas-demo/',
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {
    open: true
  }
};

export default defineConfig(() => {
  return productionConfig;
});
