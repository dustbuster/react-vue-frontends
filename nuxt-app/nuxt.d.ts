import { NuxtConfig } from '@nuxt/types';

declare module '@nuxt/types' {
  interface NuxtConfig {
    serverMiddleware?: any;  // Extend to include serverMiddleware
  }
}