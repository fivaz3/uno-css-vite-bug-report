import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCSS from '@unocss/svelte-scoped/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(),
    UnoCSS({
      // injectReset: '@unocss/reset/normalize.css', // see type definition for all included reset options or how to pass in your own
      // ...other Svelte Scoped options
    }),],
})
