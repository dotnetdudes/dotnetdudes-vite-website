import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    // ...some configs
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          about: resolve(__dirname, 'about.html'),
          apps: resolve(__dirname, 'apps.html'),
          blogs: resolve(__dirname, 'blogs.html'),
          contact: resolve(__dirname, 'contact.html'),
          silent: resolve(__dirname, 'silent-sso-check.html'),
          starters: resolve(__dirname, 'starters.html'),
        },
      },
    },
    server: {
      port: 3000,
    },
  });