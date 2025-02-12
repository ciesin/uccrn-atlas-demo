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

const developmentConfig = {
  base: '/dev-uccrn-atlas-demo/',
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {
    open: true
  }
};

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return developmentConfig;
  } else {
    return productionConfig;
  }
});
