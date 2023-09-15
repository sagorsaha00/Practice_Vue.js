import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import viteTsconfigPaths from 'vite-tsconfig-paths';
// import svgrPlugin from 'vite-plugin-svgr';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react({
//     jsxRuntime: 'classic' // Add this line
//   }), viteTsconfigPaths(), svgrPlugin()],
// });
