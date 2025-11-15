import type { PromptEnhancer, ExecutionContext, PromptEnhancerContribution } from "@kispace-io/appspace/extensions/ai-system";
import { CID_PROMPT_ENHANCERS } from "@kispace-io/appspace/extensions/ai-system";
import { contributionRegistry } from "@kispace-io/appspace/api";

const GEOSPACE_SPECIFIC_PROMPT = `
**geo!space - WebGIS Application:**

geo!space is a WebGIS (Web Geographic Information System) application for creating, editing, and visualizing interactive maps.

**Core Capabilities:**
- Interactive map editor with zoom, pan, and layer management
- Support for multiple layer types: GeoJSON, WMS, WMTS, Vector Tiles, and more
- Drawing tools for creating and editing geographic features
- Style management for customizing layer appearance
- Map state persistence in .geospace files (JSON format containing map configuration, layers, view settings, and styles)

**Map Editor:**
When a .geospace file is open, the map editor provides:
- Interactive map view with coordinate system support (EPSG:3857, EPSG:4326, etc.)
- Layer panel for managing multiple data layers
- Drawing tools for creating points, lines, and polygons
- Style editor for customizing layer visualizations
- Catalog integration for browsing and adding spatial data
`;

const geospacePromptEnhancer: PromptEnhancer = {
    enhance: async (prompt: string, _context: ExecutionContext) => {
        return `${prompt}\n\n${GEOSPACE_SPECIFIC_PROMPT}`;
    },
    priority: 5
};

export function registerGeospacePromptEnhancer() {
    contributionRegistry.registerContribution(CID_PROMPT_ENHANCERS, {
        label: "Geo!space Prompt Enhancer",
        enhancer: geospacePromptEnhancer
    } as PromptEnhancerContribution);
}

