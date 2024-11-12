// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  runtimeConfig: {
    connstring: 'No conn string',
    public: {
      apiBase: '/api'
    }
  },

  modules: ['@nuxt/ui'],
  ui: {
    global: true
  }
})