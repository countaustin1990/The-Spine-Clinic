import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  esbuild: {
    loader: "tsx", // Change to "tsx" to support both .jsx and .tsx
    include: [/\.tsx?$/, /\.jsx?$/], // Match both .tsx and .jsx files
  },
});
