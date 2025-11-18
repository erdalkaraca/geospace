# @kispace-io/gs-lib

Runtime library for geo!space maps. This package provides the core functionality to convert GsMap domain models into OpenLayers map instances.

## Features

- Type definitions for GsMap domain model (GsMap, GsLayer, GsFeature, etc.)
- Conversion from GsMap to OpenLayers (toOlMap)
- Conversion from OpenLayers to GsMap (toGsFeature, etc.)
- Style management and evaluation
- Control and overlay support
- Lit integration for custom components

## Installation

```bash
npm install @kispace-io/gs-lib
```

## Usage

```typescript
import { gsLib, GsMap } from '@kispace-io/gs-lib';

const gsMap: GsMap = {
  view: { center: [0, 0], zoom: 2, projection: 'EPSG:3857' },
  layers: [...],
  // ...
};

const olMap = await gsLib({
  containerSelector: '#map',
  gsMap: gsMap,
  env: { /* environment variables */ }
});
```

## WebAwesome Support

If your application uses user modules (controls/overlays) that utilize WebAwesome components (e.g., `<wa-button>`, `<wa-icon>`), you need to import WebAwesome in your application:

```typescript
import '@awesome.me/webawesome/dist/components/button/button.js';
// ... import other components as needed
```

Or if using the appspace package:

```typescript
import '@kispace-io/appspace/externals/webawesome';
```

WebAwesome is an optional peer dependency of this package - it's only needed if your user modules use WebAwesome components.

## License

EPL-2.0

