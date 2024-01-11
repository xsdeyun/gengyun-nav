import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    UnoCSS({
      configFile: '../uno.config.js',
    }),],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  server: {
    hmr: true,
    host: '0.0.0.0', //ip地址
    proxy: {
      "/api": {
        target: "http://127.0.0.1/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[hash].js', // 自定义入口文件名格式
        chunkFileNames: 'assets/[hash].js', // 自定义代码块文件名格式
        assetFileNames: 'assets/[hash][extname]', // 自定义资源文件名格式
      },
    },
    target: 'es2015',
    outDir: 'dist', // 打包输出目录，默认为 'dist'
    sourcemap: true // 是否生成源映射文件，默认为 true
  }
})
