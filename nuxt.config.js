export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dimension-Build Font | A futuristic and hacker-styled font',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dimension-Build Font is a futuristic and hacker-styled font designed in 2022. It includes uppercase letters and basic symbols. Its v1.0.4 is the first release, and v2 will include lowercase letters.' },
      { hid: 'keywords', name: 'keywords', content: 'Dimension-Build Font, futuristic font, hacker font, uppercase letters' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202301140015146.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    rootDir: ['/']
  },

  generate: {
    dir: 'docs'
  },

  router: {
    base: '/Dimension-Build-Font/'
  }
}
