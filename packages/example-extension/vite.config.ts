import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/extension.ts'),
      name: 'ExampleExtension',
      fileName: 'extension',
      formats: ['es']
    },
    rollupOptions: {
      external: ['@kispace-io/appspace'],
      output: {
        globals: {
          '@kispace-io/appspace': 'Appspace'
        }
      }
    },
    sourcemap: true,
    minify: false
  },
});

