import postcss from './postcss.config.js';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';


export default defineConfig({
    plugins: [svelte()],
  css:{
    postcss
  },
  build: {
    assetsDir: '',
    sourcemap: true,
    lib: {
      entry: 'src/main.js',
      formats: ['iife'],
      name: 'jpComponentBuilder',
      fileName: 'bundle'
    }
  }
})
