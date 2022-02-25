import { defineConfig } from 'vite';
import { adorableCSS } from 'adorable-css/vite-plugin-adorable-css';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [adorableCSS(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/styles/_variable.scss';
          @import '@/styles/_mixin.scss';
        `
      }
    }
  },
  server: {
    host: '192.168.10.9'
  }
});
