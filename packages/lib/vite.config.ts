const vue = require('@vitejs/plugin-vue')
const path = require('path')
const { defineConfig } = require('vite')
const pkg = require('./package.json')
const { pascalCase } = require('change-case')

const fileName = pkg.name
const libName = pascalCase(fileName)

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: libName,
      fileName: (format) => `${fileName}.${format}.js`
    },
    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      output: {
        globals: { vue: 'Vue', '@vueuse/core': 'VueUse' }
      }
    }
  }
})