/*
 * @Author: your name
 * @Date: 2022-05-10 14:33:55
 * @LastEditTime: 2022-05-10 16:08:48
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
      verbose: true, //打包后是否在控制台输出压缩结果
      disable: false,
      threshold: 1024,// 体积大于阈值会被压缩，单位是b,默认值1025
      algorithm: 'gzip',
      ext: '.gz',// 生成的压缩包后缀 默认值就是.gz
      deleteOriginFile: true,// 压缩后是否删除源文件 没有默认值
      filter: /\.(js|mjs|json|html)$/i  // 指定不压缩哪些资源
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
