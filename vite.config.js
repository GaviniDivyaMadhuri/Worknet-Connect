import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dev server proxy so the React app can call the Express API without CORS issues.
// In production, serve the built files directly from Express instead (see README).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
