import {defineConfig} from "vite";
import {dirname} from "path";
import {fileURLToPath} from "url";
import path from 'path';
import mkcert from 'vite-plugin-mkcert';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Iframe HTML from extension; copied into app at build so Rollup input path stays in-app. See iframe-map-renderer workaround doc. */
const IFRAME_HTML_SOURCE = path.resolve(__dirname, '../extension-map-editor/src/iframe-map-renderer.html');
const IFRAME_HTML_IN_APP = path.resolve(__dirname, 'iframe-map-renderer.html');

/**
 * Workaround for Vite bug: ?url for .ts files gets MIME type video/mp2t, so we can't use
 * srcdoc + script URL in the extension. We serve the iframe HTML as an app entry instead.
 * See docs/known-issues/iframe-map-renderer-vite-mime-workaround.md and
 * https://github.com/vitejs/vite/issues/10271 for cleanup once fixed.
 */
function iframeMapRendererHtmlPlugin() {
    return {
        name: 'iframe-map-renderer-html',
        buildStart() {
            fs.copyFileSync(IFRAME_HTML_SOURCE, IFRAME_HTML_IN_APP);
        },
        configureServer(server: any) {
            const base = server.config.base?.replace(/\/$/, '') || '';
            const iframePath = base + '/iframe-map-renderer.html';
            const handler = async (req: any, res: any, next: any) => {
                const url = req.url || '';
                const pathname = url.split('?')[0];
                if (pathname !== '/iframe-map-renderer.html' && pathname !== iframePath) return next();
                if (url.includes('html-proxy')) return next();
                try {
                    const html = fs.readFileSync(IFRAME_HTML_SOURCE, 'utf-8');
                    const transformed = await server.transformIndexHtml(pathname, html);
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
                    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
                    res.end(transformed);
                } catch (err) {
                    next(err);
                }
            };
            server.middlewares.stack.unshift({ route: '', handle: handler });
        }
    };
}

export default defineConfig({
    root: __dirname,
    plugins: [
        mkcert(),
        crossOriginIsolation(),
        iframeMapRendererHtmlPlugin(),
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
        // Prevents multiple lit versions when Lyra uses direct "lit" imports
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
                main: path.resolve(__dirname, 'index.html'),
                /** Iframe map entry (workaround for Vite ?url MIME bug). See docs/known-issues/iframe-map-renderer-vite-mime-workaround.md */
                iframeMapRenderer: IFRAME_HTML_IN_APP,
            }
        }
    }
});
