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
        alias: [
            // Local packages aliased to source for debuggable dev server
            ...['extension-catalog', 'extension-gtfs', 'extension-map-editor', 'extension-mapbuilder', 'extension-mapprops', 'extension-overpass', 'extension-style-editor'].map(pkg => ({
                find: new RegExp(`^@kispace-io/${pkg}(.*)`),
                replacement: path.resolve(__dirname, `../${pkg}/src$1`),
            })),
            { find: /^@kispace-io\/gs-lib\/dist(.*)/, replacement: path.resolve(__dirname, '../gs-lib/dist$1') },
            { find: /^@kispace-io\/gs-lib\/public(.*)/, replacement: path.resolve(__dirname, '../gs-lib/public$1') },
            { find: '@kispace-io/gs-lib', replacement: path.resolve(__dirname, '../gs-lib/src') },
        ],
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
