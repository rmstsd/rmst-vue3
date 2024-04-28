import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'

export default defineConfig({
  dev: {
    hmr: false
  },
  html: {
    template: './index.html'
  },
  plugins: [pluginVue()]
})
