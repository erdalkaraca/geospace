import {defineConfig} from "vite";
import {viteStaticCopy} from "vite-plugin-static-copy";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import mkcert from 'vite-plugin-mkcert'
import {visualizer} from "rollup-plugin-visualizer";
//import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'

const PYODIDE_EXCLUDE = [
    "!**/*.{md,html}",
    "!**/*.d.ts",
    "!**/*.whl",
    "!**/node_modules",
];

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
    optimizeDeps: {exclude: ["pyodide"]},
    plugins: [
        mkcert(),
        //viteStaticCopyPyodide(),
        visualizer({
            open: false,
            gzipSize: true,
            brotliSize: true
        }),
    ],
    base: process.env.VITE_BASE_PATH || '/',
});