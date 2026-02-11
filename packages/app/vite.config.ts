import {defineConfig} from "vite";
import {dirname} from "path";
import {fileURLToPath} from "url";
import path from 'path';
import mkcert from 'vite-plugin-mkcert';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: __dirname,
    plugins: [
        mkcert(),
        crossOriginIsolation(),
    ],
    resolve: {
        alias: {
            '@kispace-io/extension-map-editor': path.resolve(__dirname, '../extension-map-editor/src'),
            '@kispace-io/gs-lib': path.resolve(__dirname, '../gs-lib/src'),
            // Alias for dist files (used by build service)
            '@kispace-io/gs-lib/dist': path.resolve(__dirname, '../gs-lib/dist'),
            // Alias for public files (used by build service)
            // Public folder is included in the npm package, so we can import directly
            '@kispace-io/gs-lib/public': path.resolve(__dirname, '../gs-lib/public')
        },
        // Dedupe lit imports - ensure all lit imports resolve to the same instance
        // This prevents multiple versions from being loaded when appspace uses direct "lit" imports
        // appspace has 160+ files using direct "lit" imports instead of externals/lit
        dedupe: ['lit']
    },
    optimizeDeps: {
        exclude: []
    },
    base: process.env.VITE_BASE_PATH || '/',
    worker: {
        format: 'es'
    },
    build: {
        outDir: path.resolve(__dirname, '../../dist'),
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html')
            }
        }
    }
});
