// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devServer: {
    port: 3001,
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  runtimeConfig: {
    connstring: 'No conn string',
    public: {
      apiBase: '/api',
      maptoken: process.env.MAP_TOKEN
    }
  },

  content: {
    api: {
      baseURL: '/api/_content'
    }
  },

  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxt/content','@tresjs/nuxt'],
  ui: {
    global: true
  }
})