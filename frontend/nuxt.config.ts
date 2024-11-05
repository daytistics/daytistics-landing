export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-umami"],

  // NUXT CONFIG
  runtimeConfig: {
    apiKey: process.env.API_KEY,
    apiAddress: process.env.API_ADDRESS,
    public: {
      mediaAddress: process.env.MEDIA_ADDRESS,
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://cloud.umami.is/script.js",
          "data-website-id": "9027f875-0244-4b7f-b298-6748df4fffb3",
        },
      ],
    },
  },
  css: ["~/assets/css/fonts.css", "~/assets/css/tailwind.css"],

  // UMAMI CONFIG
  umami: {
    id: "9027f875-0244-4b7f-b298-6748df4fffb3",
    host: "http://localhost:8000/",
    autoTrack: true,
  },
});
