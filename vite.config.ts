import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          fiber: ["@react-three/fiber", "@react-three/drei"],
          rapier: ["@react-three/rapier"],
          postprocessing: ["@react-three/postprocessing"],
        },
      },
    },
  },
});
