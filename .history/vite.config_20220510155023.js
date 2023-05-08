/*
 * @Author: your name
 * @Date: 2022-05-10 14:33:55
 * @LastEditTime: 2022-05-10 15:50:23
 * @LastEditors: LAPTOP-I5MTMLBO
 * @Description: In User Settings Edit
 * @FilePath: \testPlatform\vite.config.js
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pxtorem from 'postcss-pxtorem'
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 16,
          propList: [''],
          exclude: /node_modules/i
        })
      ]
    },
  }
})
