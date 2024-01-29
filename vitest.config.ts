import {defineConfig} from 'vitest/config'
import Vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({imports:[
      'vue', 
      'vue-router',
      {
        'useAuthStore': [
          ['useAuthStore','stores/auth']
        ]
      }
    ]})
  ],
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})