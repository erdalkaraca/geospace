import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isExternal = (id: string) => {
  // Always externalize Vite client/runtime modules
  if (id === '@vite/client' || id.startsWith('@vite/')) {
    return true;
  }

  // Keep gs-lib's own source bundled:
  // - relative imports inside the library
  // - absolute paths that point into this package's src tree
  if (id.startsWith('./') || id.startsWith('../')) {
    return false;
  }
  if (path.isAbsolute(id) && id.includes('/src/')) {
    return false;
  }

  // Everything else (node built-ins, third-party deps, Lyra core, etc.)
  // stays external and must be provided by the consumer.
  return true;
};

export default defineConfig({
  resolve: {
    alias: {},
  },
  plugins: [
    dts({
      outDir: 'dist',
      entryRoot: 'src',
      rollupTypes: false,
      tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => {
        return `${entryName}.js`;
      },
    },
    rolldownOptions: {
      external: isExternal,
      output: {
        preserveModules: false,
        entryFileNames: '[name].js',
        format: 'es',
        // Output a single file to make it easier to copy for build service
        inlineDynamicImports: true,
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: false,
  },
});

