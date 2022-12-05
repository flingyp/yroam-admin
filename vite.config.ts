import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import type { ConfigEnv, defineConfig, UserConfigExport } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import clearConsole from 'vite-plugin-clear-console'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { name, version } from './package.json'

const templateTitle = name
const templateVersion = version

export default ({ mode, command }: ConfigEnv): UserConfigExport => ({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
      '@configs': resolve(__dirname, './configs'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@https': resolve(__dirname, 'src/https'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@store': resolve(__dirname, 'src/store'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@router': resolve(__dirname, 'src/router'),
      '@components': resolve(__dirname, 'src/components')
    }
  },
  server: {
    host: true,
    cors: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue(),
    DefineOptions(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/Svg')],
      symbolId: 'icon-[dir]-[name]'
    }),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve',
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      watchFiles: true,
      logger: true
    }),
    clearConsole({
      inject: {
        path: './src/main.ts',
        template: [
          `console.log('%c${templateTitle}%cV${templateVersion}', 'padding: 2px 6px; border-radius: 4px 0 0 4px; color: #fff; background: #606060; font-weight: bold;','padding: 2px 6px; border-radius: 0 4px 4px 0; color: #fff; background: #42c02e; font-weight: bold;')`
        ]
      }
    })
  ]
})
