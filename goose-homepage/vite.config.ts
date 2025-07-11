import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#App': path.resolve(__dirname, './src/App.tsx'),
      '#assets': path.resolve(__dirname, './src/assets'),
      '#components': path.resolve(__dirname, './src/components'),
      '#constants': path.resolve(__dirname, './src/constants'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
      '#locales': path.resolve(__dirname, './src/locales'),
      '#pages': path.resolve(__dirname, './src/pages'),
      '#routes': path.resolve(__dirname, './src/routes'),
      '#styles': path.resolve(__dirname, './src/styles'),
      '#types': path.resolve(__dirname, './src/types'),
    },
  },
})
