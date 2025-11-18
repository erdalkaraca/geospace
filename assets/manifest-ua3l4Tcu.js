const n=`{
  "id": "/",
  "scope": "/",
  "name": "$PWA_NAME",
  "display": "standalone",
  "start_url": "/",
  "short_name": "$PWA_SHORT_NAME",
  "description": "$PWA_DESCRIPTION",
  "version": "$PWA_VERSION",
  "orientation": "any",
  "related_applications": [],
  "prefer_related_applications": false,
  "display_override": [
    "window-controls-overlay"
  ],
  "launch_handler": {
    "client_mode": "focus-existing"
  },
  "icons": [
    {
      "src": "assets/icons/512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "assets/icons/192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icons/48x48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "assets/icons/24x24.png",
      "sizes": "24x24",
      "type": "image/png"
    }
  ],
  "screenshots": [],
  "features": [
    "Cross Platform",
    "fast",
    "interactive"
  ],
  "categories": [
    "mapping",
    "geospatial",
    "interaction"
  ],
  "shortcuts": [],
  "widgets": []
}
`;export{n as default};
