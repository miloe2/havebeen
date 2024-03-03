// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['./assets/css/style.css'],
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  // runtimeConfig : {
  //   MONGO_URL: process.env.MONGO_URL
  // }
  
  // ssr : false,
  // plugins: [
  //   { src: '~/plugins/svg-pan-zoom.client.js', mode: 'client' } // 클라이언트 사이드에서만 실행
  // ]
})
