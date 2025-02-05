import { defineConfig } from "vite";

const config = {
  base: '/uccrn-atlas-demo/',  // Changed from '/ipcc-apps-uccrn-atlas-demo/'
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {
    open: true
  }
};

export default defineConfig(config);
