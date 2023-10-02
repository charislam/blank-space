import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import autoprefixer from "autoprefixer";
import postCssPresetEnv from "postcss-preset-env";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    // devtools(),
    solidPlugin(),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer(), postCssPresetEnv()],
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
