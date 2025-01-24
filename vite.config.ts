/// <reference types="vitest" />

import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import RemoveConsole from 'vite-plugin-remove-console'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          'consola': [
            'consola',
            'createConsola',
          ],
          '@formkit/tempo': [
            'format',
            'parse',
          ],
          'wretch': [
            ['default', 'wretch']
          ],
          'wretch/middlewares': [
            'retry',
            'dedupe',
            'throttlingCache',
            'delay',
          ],
          '@formkit/auto-animate/vue': [
            'useAutoAnimate',
          ],
          'overlayscrollbars-vue': [
            'useOverlayScrollbars',
          ]
        }
      ],
      dts: true,
      dirsScanOptions: {
        types: true,
      },
      dirs: [
        './src/composables',
        './src/fetch'
      ],
      vueTemplate: true,
      packagePresets: ['pinia', '@pinia/colada'],
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    tailwindcss(),

    RemoveConsole()
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
