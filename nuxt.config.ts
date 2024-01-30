// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxtjs/supabase', '@pinia/nuxt', '@nuxt/ui', '@pinia-plugin-persistedstate/nuxt', '@nuxt/test-utils/module'],
  supabase: {
    redirect: false
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
  testUtils: {
    startOnBoot: true,
    logToConsole: true,
    vitestConfig: {
      setupFiles: ['./tests/setup/mocks'],
      environmentOptions: {
        nuxt: {
          mock: {
            indexedDb: true,
          },
        },
      },
    },
  },
  imports: {
    injectAtEnd: true,
  },
  runtimeConfig: {
    public: {
      hello: 'world',
      testValue: 'default'
    },
  },
})
