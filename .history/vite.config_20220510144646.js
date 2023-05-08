/*
 * @Author: your name
 * @Date: 2022-05-10 14:33:55
 * @LastEditTime: 2022-05-10 14:46:46
 * @LastEditors: LAPTOP-I5MTMLBO
 * @Description: In User Settings Edit
 * @FilePath: \testPlatform\vite.config.js
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pxtorem from 'postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
