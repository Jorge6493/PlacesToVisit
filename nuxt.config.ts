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
      apiBase: '/api',
      maptoken: 'pk.eyJ1Ijoiam9yZ2U2NDkzIiwiYSI6ImNtM2VucHg5YzBnMDQya3B4eWZrajd3ODUifQ.5TJQmCEhU1Ksm1cj19OcHQ'
    }
  },

  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  ui: {
    global: true
  },
  // css: ['mapbox-gl/dist/mapbox-gl.css']
  // app: {
  //     head: {
  //       //link: [{ rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css'}]
  //     }
  //   }
})