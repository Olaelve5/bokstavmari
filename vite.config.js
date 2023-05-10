import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-svg-core",
        "https://cdn.jsdelivr.net/npm/@fortawesome/free-brands-svg-icons",
        "https://cdn.jsdelivr.net/npm/@fortawesome/react-fontawesome",
      ],
    },
  },
});
