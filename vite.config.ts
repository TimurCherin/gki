import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vike from 'vike/plugin';

import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vike(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname),
    },
  },
};

export default config;
