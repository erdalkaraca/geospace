import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isExternal = (id: string) => {
  // Bundle relative imports (./something, ../something)
  if (id.startsWith('./') || id.startsWith('../')) {
    return false;
  }
  // Bundle appspace imports (for webawesome-components)
  if (id.startsWith('@kispace-io/appspace')) {
    return false;
  }
  // Bundle absolute paths to source files (entry points)
  if (path.isAbsolute(id) && id.includes('/src/')) {
    return false;
  }
  // Everything else is external (dependencies, node_modules, etc.)
  return true;
};

export default defineConfig({
  resolve: {
    alias: {
      '@kispace-io/appspace': path.resolve(__dirname, '../appspace/src'),
    },
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
    rollupOptions: {
      external: isExternal,
      output: {
        preserveModules: false,
        entryFileNames: '[name].js',
        format: 'es',
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: false,
  },
});

