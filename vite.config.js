import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'campaign-board.html',
        contact: 'campaign-info.html'
      }
    }
  }
})