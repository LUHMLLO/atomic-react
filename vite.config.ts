import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const env = loadEnv(
  'all',
  process.cwd()
);

const port = parseInt(env.VITE_PORT) ?? 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port,
  },
  preview: {
    port,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
