import {defineConfig} from 'vitest/config'
import Vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
  }
})
// import { defineVitestConfig } from '@nuxt/test-utils/config'

// export default defineVitestConfig({
//   test: {
//     environment: 'nuxt',
//   }
// });