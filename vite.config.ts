/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="./src/utils/svg" />
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: [
      { find: 'ui-kit', replacement: path.resolve(__dirname, 'src/ui-kit') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'interfaces', replacement: path.resolve(__dirname, 'src/interfaces') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: 'modal', replacement: path.resolve(__dirname, 'src/modal') },
      { find: 'services', replacement: path.resolve(__dirname, 'src/services') },
    ],
  },
})
