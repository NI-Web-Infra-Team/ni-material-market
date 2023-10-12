// @ts-nocheck
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { DEFAULT_LOCALE, SUPPORT_LOCALES } from './project.config';
import iconConfig from './icon.config.json';

const browserslist = readFileSync(
  resolve(__dirname, '.browserslistrc'),
  'utf-8'
)
  .split('\n')
  .filter(Boolean);

let BASE_URL = process.env.BASE_URL || '/';
BASE_URL.endsWith('/') || (BASE_URL += '/');
const SERVER_PATH = process.env.SERVER_PATH;
const API_BASE = process.env.NUXT_PUBLIC_API_BASE;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  app: {
    rootId: 'app',
    baseURL: BASE_URL,
    head: {
      script: [
        {
          type: 'text/javascript',
          src: '/js/dark-mode-ponyfill.js'
        }
      ],
      link: [
        {
          rel: iconConfig.favicon.defaultRel,
          href: `${BASE_URL}favicon.ico`
        },
        {
          rel: 'icon',
          sizes: iconConfig.favicon.sizes
            .map(size => `${size}x${size}`)
            .join(' '),
          href: `${BASE_URL}images/favicon.ico`
        },
        ...iconConfig.android.sizes.map(size => ({
          ...iconConfig.android.header.attrs,
          sizes: `${size}x${size}`,
          href: `${BASE_URL}images/favicon-${size}.png`
        })),
        ...iconConfig.ios.sizes.map(size => ({
          ...iconConfig.ios.header.attrs,
          sizes: `${size}x${size}`,
          href: `${BASE_URL}images/favicon-${size}.png`
        }))
      ]
    }
  },
  css: ['vuetify/lib/styles/main.sass', '~/assets/scss/main.scss'],
  modules: [
    (_, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        config.plugins ||= [];
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-vite-legacy',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  pinia: {
    // @see https://pinia.vuejs.org/ssr/nuxt.html#Auto-imports
    autoImports: [
      // automatically imports `defineStore`
      'acceptHMRUpdate',
      'defineStore' // import { defineStore } from 'pinia'
      // ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'color-mode-script',
    globalName: '__COLOR_MODE__',
    componentName: 'ColorScheme',
    classSuffix: '',
    storageKey: 'color-mode'
  },
  build: {
    transpile: [
      /echarts/,
      /zrender/,
      'vue-echarts',
      'resize-detector',
      'tslib',
      'vuetify'
    ]
  },
  typescript: {
    strict: true,
    typeCheck: false
  },
  vite: {
    optimizeDeps: { exclude: ['fsevents'] },
    build: {
      target: ['edge88', 'firefox115', 'chrome88', 'safari14']
    },
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: SUPPORT_LOCALES.map(locale => locale.key),
    vueI18n: './i18n.config.ts'
  },
  // 修复 @vitejs/plugin-legacy 无效的问题
  // @see https://github.com/nuxt/nuxt/issues/15464
  legacy: {
    targets: browserslist
  },
  runtimeConfig: {
    // @see https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
    public: {
      SUPPORT_LOCALES,
      apiBase: API_BASE,
      DEFAULT_LOCALE
    },
    SERVER_PATH
  },
  routeRules: {
    '/examples/local-cache': {
      swr: 10
    }
  }
});
