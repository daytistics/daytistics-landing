import type { ProxyEndpoint } from "./types/config-types";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-adsense",
    // "nuxt-umami",
    "nuxt-gtag",
  ],

  // NUXT CONFIG
  runtimeConfig: {
    apiKey: process.env.API_KEY,
    apiAddress: process.env.API_ADDRESS,
    proxyEndpoints: [
      {
        endpoint: "/api/cms/",
        target: process.env.API_ADDRESS,
        toReplace: "/api/cms/",
        replaceWith: "/api/",
      },
    ] as ProxyEndpoint[],
    public: {
      mediaAddress: process.env.MEDIA_ADDRESS,
    },
  },
  css: ["~/assets/css/fonts.css", "~/assets/css/tailwind.css"],

  app: {
    head: {
      script: [
        {
          key: "osano",
          src: process.env.OSANO_SCRIPT,
        },
      ],
    },
  },

  gtag: {
    // Your primary Google tag ID
    id: process.env.GOOGLE_TAG_ID,
    // Additional configuration for this tag ID
    config: {
      page_title: "Daytistics",
    },
  },

  googleAdsense: {
    id: process.env.GOOGLE_ADSENSE_ID,
    test: true,
  },
});
