import { defineConfig } from "vite";

const config = {
  base: '/ipcc-apps-uccrn-atlas-demo/',  // Changed from '/uccrn-atlas-demo/'
  build: {
    chunkSizeWarningLimit: 2000
  },
  server: {
    open: true
  }
};

export default defineConfig(config);