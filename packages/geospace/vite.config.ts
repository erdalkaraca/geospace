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

/**
 * Copies Pyodide files from node_modules to the build output for local serving.
 * 
 * This function bundles Pyodide files with the build instead of loading from a CDN.
 * 
 * **Why it's currently disabled:**
 * - Pyodide is currently loaded from CDN (cdn.jsdelivr.net) for simplicity and smaller builds
 * - Bundling Pyodide locally would significantly increase build size (~50-100MB+)
 * - CDN loading provides better caching and reduces initial bundle size
 * 
 * **When to enable:**
 * - If you need offline functionality without CDN dependency
 * - If you want full control over Pyodide version distribution
 * - If you're deploying to an environment that blocks external CDN requests
 * 
 * **To enable:**
 * 1. Uncomment the plugin call in the plugins array below
 * 2. Update pyworker.ts to use local path: `indexURL: '/assets/pyodide'` instead of CDN URL
 */
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
