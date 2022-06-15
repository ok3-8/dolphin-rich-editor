import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir:'lib',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'rich-editor',
      // the proper extensions will be added
      fileName: 'rich-editor'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom','styled-components'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React'
        }
      }
    }
  }
})
