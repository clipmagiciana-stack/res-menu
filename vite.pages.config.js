import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  base:'./',plugins:[react(),tailwindcss()],
  define:{'import.meta.env.VITE_FLAT_ASSETS':JSON.stringify('true')},
  build:{outDir:'github-upload',assetsDir:''},
});
