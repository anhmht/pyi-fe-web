import fs from 'fs'
import path from 'path'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/pyi-fe-web/'
        }
      }
    : {}
export default {
  target: 'static',

  /*
   ** SSL on local development (checkout README.md for instructions)
   */
  // server: {
  //   port: process.env.NUXT_PORT,
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, '.ssl/localhost.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, '.ssl/localhost.crt'))
  //   }
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PYIGroup',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'font-awesome/css/font-awesome.min.css',
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],

    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[name]__[local]_[hash:base64:5]',
          exportLocalsConvention: 'camelCaseOnly'
        }
      }
    },

    // Customize PostCSS Loader plugins
    // https://nuxtjs.org/api/configuration-build/#postcss
    postcss: {
      // Nuxt.js has applied PostCSS Preset Env.
      // By default it enables Stage 2 features and Autoprefixer,
      // you can use `build.postcss.preset` to configure it.
      // https://preset-env.cssdb.org/features#stage-2
      preset: {
        // Specifies sources where variables like Custom Media, Custom Properties, etc.
        // https://github.com/csstools/postcss-preset-env#importfrom
        importFrom: ['assets/styles/variables.css'],

        // Enables or disables specific polyfills
        // https://github.com/csstools/postcss-preset-env#features
        features: {
          'nesting-rules': true,
          'custom-media-queries': true,
          stage: 1
        }
      },
      plugins: {
        'postcss-custom-properties': false,
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        autoprefixer: {}
      }
    }
  },
  ...routerBase
}
