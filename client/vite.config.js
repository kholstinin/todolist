import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components')
    }
  },
  build: {
    minify: false,
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          antd: ['antd']
        }
      }
    }
  }
})
