// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxtjs/supabase', '@pinia/nuxt', '@nuxt/ui', '@pinia-plugin-persistedstate/nuxt'],
  supabase: {
    redirect: false
  }
})
