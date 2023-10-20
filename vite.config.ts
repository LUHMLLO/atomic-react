import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const env = loadEnv('', process.cwd());

const port = parseInt(env.VITE_PORT) || 3000;

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
      '@': './src/',
      '@api': './src/api/',
      '@interfaces': './src/common/interfaces/',
      '@stores': './src/common/stores/',
      '@styles': './src/common/styles/',
      '@utils': './src/common/utils/',
      '@components': './src/components/',
      '@layouts': './src/layouts/',
      '@routes': './src/routes/',
    },
  },
});
