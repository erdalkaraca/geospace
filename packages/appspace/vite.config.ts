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

const dependencies = Object.keys(packageJson.dependencies || {});
const peerDependencies = Object.keys(packageJson.peerDependencies || {});

export default defineConfig({
  worker: {
    format: 'es',
  },
  plugins: [
    dts({
      include: ['src/index.ts', 'src/api/index.ts', 'src/extensions/ai-system/index.ts', 'src/extensions/rag-system/index.ts', 'src/widgets/index.ts', 'src/parts/index.ts'],
      outDir: 'dist',
      entryRoot: 'src',
      rollupTypes: true,
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
      external: [
        ...dependencies,
        ...peerDependencies,
        /^@kispace-io\/appspace\/.*/,
      ],
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

