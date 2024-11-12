import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // This is the correct way to set the loader for JSX
    include: /\.jsx$/, // Specify the file extensions to apply the loader on
  },
});
