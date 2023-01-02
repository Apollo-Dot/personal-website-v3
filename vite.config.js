import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      plugins: [preact()],
    }
  } else {
    return {
      plugins: [preact()],
      base: '/personal-website-v3/'
    }
  }
})
