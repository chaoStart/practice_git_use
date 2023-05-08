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
