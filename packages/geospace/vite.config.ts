import {defineConfig} from "vite";
import {dirname} from "path";
import {fileURLToPath} from "url";
import path from 'path';
import mkcert from 'vite-plugin-mkcert';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: __dirname,
    resolve: {
        alias: {
            '@kispace-io/appspace': path.resolve(__dirname, '../appspace/src'),
            '@kispace-io/gs-lib': path.resolve(__dirname, '../gs-lib/src')
        }
    },
    optimizeDeps: {
        exclude: ['pyodide', '@kispace-io/appspace']
    },
    plugins: [
        mkcert(),
        crossOriginIsolation(),
    ],
    base: process.env.VITE_BASE_PATH || '/',
    worker: {
        format: 'es'
    },
    build: {
        outDir: path.resolve(__dirname, '../../dist'),
        rollupOptions: {
            input: {
                // Each app uses its own index.html (copied from appspace/index.html)
                main: path.resolve(__dirname, 'index.html'),
                iframe: path.resolve(__dirname, 'iframe-map-renderer.html')
            }
        }
    }
});
