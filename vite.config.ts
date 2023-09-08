import { defineConfig } from 'vite'
import { dependencies } from './package.json';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import preact from '@preact/preset-vite'

function renderChunks(deps: Record<string, string>) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  mode: 'development',
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'River_Dot',
    short_name: 'River_Dot',
    theme_color: '#2196f3',
    icons: [
      {
        src: 'pwa-192x192.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png', // <== don't remove slash, for testing
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA(pwaOptions)
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
})
