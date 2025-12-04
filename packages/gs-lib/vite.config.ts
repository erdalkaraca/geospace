import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isExternal = (id: string) => {
  // Exclude Vite-specific modules (development only)
  if (id === '@vite/client' || id.startsWith('@vite/')) {
    return true;
  }
  // Bundle relative imports (./something, ../something)
  if (id.startsWith('./') || id.startsWith('../')) {
    return false;
  }
  // appspace is a peer dependency - should be external
  if (id === '@kispace-io/appspace' || id.startsWith('@kispace-io/appspace/')) {
    return true;
  }
  // Bundle absolute paths to source files (entry points)
  if (path.isAbsolute(id) && id.includes('/src/')) {
    return false;
  }
  // Bundle all other dependencies to make gs-lib self-contained
  // This is needed for the build service which runs in browser (esbuild-wasm)
  // and can't access node_modules
  return false; // Bundle everything else
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
    rollupOptions: {
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

