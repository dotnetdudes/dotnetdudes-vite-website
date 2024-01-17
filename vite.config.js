import { resolve } from 'path'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import eslintPlugin from 'vite-plugin-eslint'

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
    minify: 'esbuild',
    plugins: [
      ViteMinifyPlugin({
        removeConsole: true,
        removeDebugger: true,
        removeWhitespace: true,
        removeComments: true,
        compress: true,
        verbose: true,
      }),
      eslintPlugin(),
    ],
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    test: {
      environment: 'jsdom',
      testMatch: ['**/*.test.js'],
      timeout: 60000,
      reporter: ['html', 'json', 'default'],
      outputFile: {
        json: './reports/index.json',
        html: './reports/index.html',
      },
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', ['html', { subdir: './reports/html' }], 'json-summary'],
        thresholds: {
          lines: 20,
          branches: 20,
          functions: 20,
          statements: 20
        },
        reportOnFailure: true,
      },
    }
  });