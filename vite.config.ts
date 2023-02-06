import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import env from './env.js';
import unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-vue-markdown';

const { port } = env;
const isDev = process.env.NODE_ENV === 'development';
const base = isDev ? `//localhost:${port}` : '';

export default defineConfig({
  base,
  server: {
    port,
    cors: true,
    origin: base,
  },
  preview: {
    port,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    unocss(),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
    vueJsx({}),
    AutoImport({
      imports: ['vue'],
      dts: true,
      resolvers: [ArcoResolver()],
    }),
  ],
});
