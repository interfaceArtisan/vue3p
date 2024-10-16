import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {  
      '@': '/src',  
      '@components': '/src/components',  
      '@views': '/src/views',  
      '@assets': '/src/assets',  
    },  
  },
  base: '/vue3p/',
  build: {
    outDir: 'dist', // 默认为dist，可不配置
  },
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.0.103:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/bem.scss";`,
      }
    }
  }
})
