# Iframe map renderer – Vite MIME workaround

## Problem

The map editor renders the map inside an iframe. The iframe must load a script that runs the map logic (`iframe-messaging.ts`). Loading that script triggers a **Vite bug**:

- **Symptom:** Browser error: *"Expected a JavaScript module script but the server responded with a MIME type of 'video/mp2t'"*.
- **Cause:** For `import x from './file.ts?url'`, Vite/Rollup can emit or serve the asset with a MIME type derived from the **source file extension**. Many MIME databases map `.ts` to `video/mp2t` (MPEG-2 Transport Stream), so the script is served with the wrong type and the browser rejects it.

**Vite issue:** https://github.com/vitejs/vite/issues/10271  
Related: https://github.com/vitejs/vite/issues/6979 (`.ts` → wrong MIME for assets/data URLs).

## Why we can’t make the extension self-contained

The clean approach would be:

- Keep the iframe HTML **inside the extension** (e.g. as a template string or a single HTML file).
- Use **srcdoc** with a script tag that loads the iframe script via `import iframeMessagingUrl from './iframe-messaging?url'` and set `iframe.srcdoc = html(iframeMessagingUrl)`.

That fails for the same reason: the `?url` import for a `.ts` file gets the wrong MIME type (in dev and/or build), so the iframe’s `<script type="module" src="...">` receives `video/mp2t` and the browser refuses to run it. So we **cannot** have the iframe fully self-contained in the extension with srcdoc + `?url` until this Vite bug is fixed.

## Current workaround (“dirty hack”)

Until the bug is fixed, we avoid `?url` for the iframe script by **not** loading it via a URL from the extension. Instead:

1. **HTML lives in the extension**  
   `packages/extension-map-editor/src/iframe-map-renderer.html` – single source of truth for the iframe document. It uses a **module specifier** in a normal script tag: `import '@kispace-io/extension-map-editor/iframe-messaging'`, so Vite resolves it in the app’s graph and serves it with the correct MIME.

2. **App owns the iframe “entry”**  
   The app treats that HTML as a **second HTML entry** (multi-page style):
   - **Build:** `buildStart` copies the extension’s HTML into the app as `iframe-map-renderer.html` (so the Rollup input path is under the app root and the emitted filename is valid). The build input includes this file so it’s emitted as `iframe-map-renderer.html` in `dist/`.
   - **Dev:** A custom Vite plugin in the app:
     - Serves `/iframe-map-renderer.html` via middleware (before the SPA fallback) by reading the extension’s HTML and running it through `transformIndexHtml`.
     - Skips this for `html-proxy` requests so Vite can serve the iframe-messaging **JS** for `iframe-map-renderer.html?html-proxy&index=0.js`.
     - Sets COEP/COOP on the HTML response so the iframe stays cross-origin isolated.

3. **Extension only sets the iframe URL**  
   `IFrameMapRenderer` in the extension does **not** use srcdoc or `?url`. It sets `iframe.src = baseURL + '/iframe-map-renderer.html'`, so the browser loads the document (and thus the script) from the app’s origin with correct MIME types.

## Future cleanup

When the Vite bug is fixed (or a supported way to get a script URL with correct MIME for `.ts` exists):

- Revisit making the extension self-contained: e.g. use `import iframeMessagingUrl from './iframe-messaging?url'` (or the fixed equivalent) and build the iframe via **srcdoc** with that URL, so the app no longer needs the iframe HTML entry, the copy, or the dev middleware.
- Remove the app’s `iframeMapRendererHtmlPlugin`, the `buildStart` copy, the `iframe-map-renderer.html` build input, and the `.gitignore` entry for the copied file.
- Optionally keep the HTML file in the extension as the single source and have the extension inject it (srcdoc) with the script URL once the bug is fixed.

**References**

- Vite issue (wrong mime for `?url` worker/script): https://github.com/vitejs/vite/issues/10271  
- Duplicate / related: https://github.com/vitejs/vite/issues/6979  
