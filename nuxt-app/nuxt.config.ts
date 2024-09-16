import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'https://test_app.testdev/api',
    },
  },
  modules: ['vuetify-nuxt-module'],
  plugins: [
    '~/plugins/vuetify.js',
  ],
  css: [
    'vuetify/styles',
    '~/assets/pinkbike.css',
  ],
});
