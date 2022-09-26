import path from 'path'
import styleInject from '@senojs/rollup-plugin-style-inject'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const name = 'index'

export default defineConfig({
  plugins: [
    vue(),
    styleInject(),
  ],
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name,
      fileName: format => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      output: {
        globals: { 'vue': 'Vue', '@vueuse/core': 'VueUse' },
      },
    },
  },
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'happy-dom',
    deps: {
      inline: ['@vue', '@vueuse', 'vite-vue-typescript-lib-starter'],
    },
  },
})
