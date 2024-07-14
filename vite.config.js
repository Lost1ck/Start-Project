import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      css: {
        additionalData: `@import "normalize.css"; @import "reset-css/reset.css"; @import "@/styles/variables.scss";`,
      },
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
