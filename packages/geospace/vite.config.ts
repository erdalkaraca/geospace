import {defineConfig} from "vite";
import {viteStaticCopy} from "vite-plugin-static-copy";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import mkcert from 'vite-plugin-mkcert'
import {visualizer} from "rollup-plugin-visualizer";
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'
import path from 'path';

const PYODIDE_EXCLUDE = [
    "!**/*.{md,html}",
    "!**/*.d.ts",
    "!**/*.whl",
    "!**/node_modules",
];

const __dirname = dirname(fileURLToPath(import.meta.url))

export function viteStaticCopyPyodide() {
    const pyodideDir = dirname(fileURLToPath(import.meta.resolve("pyodide")));
    return viteStaticCopy({
        targets: [
            {
                src: [join(pyodideDir, "*")].concat(PYODIDE_EXCLUDE),
                dest: "assets",
            },
        ],
    });
}

export default defineConfig({
    root: __dirname,
    resolve: {
        alias: {
            '@kispace/appspace': path.resolve(__dirname, '../appspace/src')
        }
    },
    optimizeDeps: {
        exclude: ['pyodide', '@kispace/appspace']
    },
    plugins: [
        mkcert(),
        crossOriginIsolation(),
        visualizer({
            open: false,
            gzipSize: true,
            brotliSize: true
        }),
    ],
    base: process.env.VITE_BASE_PATH || '/',
    worker: {
        format: 'es'
    },
    build: {
        outDir: path.resolve(__dirname, '../../dist'),
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                iframe: path.resolve(__dirname, 'iframe-map-renderer.html')
            }
        }
    }
});
