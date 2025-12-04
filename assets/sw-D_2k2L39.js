const e=`importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

// Workbox automatically manages cache versions based on precache manifest changes
// Hashed filenames from esbuild ensure proper cache invalidation

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the \`precacheAndRoute\` line.

// When widget is installed/pinned, push initial state.
self.addEventListener('widgetinstall', (event) => {
    event.waitUntil(updateWidget(event));
});

// When widget is shown, update content to ensure it is up-to-date.
self.addEventListener('widgetresume', (event) => {
    event.waitUntil(updateWidget(event));
});

// When the user clicks an element with an associated Action.Execute,
// handle according to the 'verb' in event.action.
self.addEventListener('widgetclick', (event) => {
if (event.action == "updateName") {
    event.waitUntil(updateName(event));
}
});

// When the widget is uninstalled/unpinned, clean up any unnecessary
// periodic sync or widget-related state.
self.addEventListener('widgetuninstall', (event) => {});

// Handle service worker updates
self.addEventListener('install', (event) => {
    console.log('Service Worker installing');
    // Skip waiting to activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating');
    event.waitUntil(
        // Workbox automatically cleans up old precache entries
        // We just need to take control and notify clients
        self.clients.claim().then(() => {
            return self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'RELOAD'
                    });
                });
            });
        })
    );
});

// Handle version change notifications
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

const updateWidget = async (event) => {
// The widget definition represents the fields specified in the manifest.
    const widgetDefinition = event.widget.definition;

    // Fetch the template and data defined in the manifest to generate the payload.
    const payload = {
        template: JSON.stringify(await (await fetch(widgetDefinition.msAcTemplate)).json()),
        data: JSON.stringify(await (await fetch(widgetDefinition.data)).json()),
    };

    // Push payload to widget.
    await self.widgets.updateByInstanceId(event.instanceId, payload);
}

const updateName = async (event) => {
    const name = event.data.json().name;

    // The widget definition represents the fields specified in the manifest.
    const widgetDefinition = event.widget.definition;

    // Fetch the template and data defined in the manifest to generate the payload.
    const payload = {
        template: JSON.stringify(await (await fetch(widgetDefinition.msAcTemplate)).json()),
        data: JSON.stringify({name}),
    };

    // Push payload to widget.
    await self.widgets.updateByInstanceId(event.instanceId, payload);
}

// Precache all assets with versioning
// Hashed filenames from esbuild naturally handle cache invalidation
// When content changes, esbuild generates a new hash, so the browser automatically fetches the new file
const manifest = self.__WB_MANIFEST || [];
workbox.precaching.precacheAndRoute(manifest);

// Use NetworkFirst for index.html and manifest.json to always fetch the latest version
// These files change with each build (index.html references new hashed app.js, manifest.json has new version)
// NetworkFirst ensures we get the latest versions while still working offline
workbox.routing.registerRoute(
    ({ url }) => {
        const pathname = url.pathname;
        return pathname === '/' || 
               pathname.endsWith('/index.html') || 
               pathname.endsWith('/manifest.json');
    },
    new workbox.strategies.NetworkFirst({
        cacheName: 'html-manifest-cache'
    })
);`;export{e as default};
