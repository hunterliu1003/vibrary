import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: pkg.name,
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.js',
    css: true,
  },
})
