/*
 * @Author: your name
 * @Date: 2022-05-10 14:33:55
 * @LastEditTime: 2022-05-10 14:44:18
 * @LastEditors: your name
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
    position: {
      plugin: [
        pxtorem({
          rootValue: 16,

        })
      ]
    },
  }
})
