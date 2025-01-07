import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['react-compiler-runtime']
  }
});