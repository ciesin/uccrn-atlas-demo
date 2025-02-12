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

// Note: If you encounter a 404 error, please check the URL and ensure that the build completed successfully.

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return developmentConfig;
  } else {
    return productionConfig;
  }
});
