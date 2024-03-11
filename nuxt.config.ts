// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  modules: [
    "@nuxt/ui",
  ],

  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },

  app: {
    head: {
      bodyAttrs: {
        class: 'overflow-hidden',
      },
    },
  },
})
