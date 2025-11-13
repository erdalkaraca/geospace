import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'fs';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const packageJson = JSON.parse(
  readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8')
);

const isExternal = (id: string) => {
  // Bundle relative imports (./something, ../something)
  if (id.startsWith('./') || id.startsWith('../')) {
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
  worker: {
    format: 'es',
  },
  plugins: [
    dts({
      outDir: 'dist',
      entryRoot: 'src',
      rollupTypes: false,
      tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json'),
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        'api/index': path.resolve(__dirname, 'src/api/index.ts'),
        'extensions/ai-system/index': path.resolve(__dirname, 'src/extensions/ai-system/index.ts'),
        'extensions/rag-system/index': path.resolve(__dirname, 'src/extensions/rag-system/index.ts'),
        'widgets/index': path.resolve(__dirname, 'src/widgets/index.ts'),
        'parts/index': path.resolve(__dirname, 'src/parts/index.ts'),
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

