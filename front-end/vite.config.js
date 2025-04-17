import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://27p0rgd4-8000.use2.devtunnels.ms/",
        changeOrigin: true
      },
    },
  },
});
