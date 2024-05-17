import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensuring the output directory is set
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: For easier imports if needed
    },
  },
});
