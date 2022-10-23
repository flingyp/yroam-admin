import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import type { ConfigEnv, UserConfigExport } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default ({ mode, command }: ConfigEnv): UserConfigExport => {
  return {
    base: './',
    resolve: {
      alias: {
        '@assets': resolve(__dirname, 'src/assets'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@https': resolve(__dirname, 'src/https'),
        '@styles': resolve(__dirname, 'src/styles'),
        '@layout': resolve(__dirname, 'src/layout'),
        '@store': resolve(__dirname, 'src/store'),
        '@hooks': resolve(__dirname, 'src/hooks')
      }
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
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/Svg')],
        symbolId: 'icon-[dir]-[name]'
      })
    ]
  }
}
