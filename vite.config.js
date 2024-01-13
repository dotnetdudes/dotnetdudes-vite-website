import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          about: resolve(__dirname, 'about.html'),
          mobile: resolve(__dirname, 'mobile.html'),
          blogs: resolve(__dirname, 'blogs.html'),
          contact: resolve(__dirname, 'contact.html'),
          silent: resolve(__dirname, 'silent-sso-check.html'),
          starters: resolve(__dirname, 'starters.html'),
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
  });