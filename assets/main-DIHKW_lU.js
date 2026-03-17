const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/github-service-extension-B9550E0P-B1aZJo_l.js","assets/config-RT97oKMn-DH1WMsHN.js","assets/repeat-Duk-1tMZ.js","assets/config-RT97oKMn-bj3odw9V.css","assets/md-editor-extension-Ds1xFKOz-CGW0oW95.js","assets/media-viewer-extension-Cx-1gOxs-7Tb7FGM5.js","assets/memory-usage-extension-CU1A0tc3-CieM-8sY.js","assets/monaco-editor-extension-Cyl3JAto-C5w-3sqT.js","assets/monaco-editor-extension-Cyl3JAto-Dvl_Svmm.css","assets/settings-tree-extension-DCp2IoUR-Dpx1jT7R.js","assets/index-B3A8fKah-DCett1K1.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/pyservice-CXj6dvu6-DMzsKsem.js","assets/package-manager-DTcpwrMr-fbgxJ9WQ.js","assets/loader-OYJGcrn3.js","assets/ai-system-extension-DYiKFLNa-B-tFhgSF.js","assets/ai-service-CHv1hGx1-fWstvN3r.js","assets/command-palette-extension-B4acGt-m-C7NbAgGq.js","assets/howto-extension-8r07TyoY-DCjtLDG5.js","assets/in-browser-ml-extension-Brjz3rUR-CTsCbGpu.js","assets/python-runtime-extension-CVqoCpcM-Dd2yeEnP.js","assets/index-COQdhLDu.js","assets/notebook-kernel-api--RBL5TaE-2imfStcI.js","assets/commands-CXonsOoY-DfxXhW9d.js","assets/dataviewer-extension-D5IjkLVl-lBhVgL4O.js","assets/third-party-BW12UeC1.js","assets/sqleditor-extension-SVHoEOK_-Cpl5Lexg.js","assets/duckdb-extension-DwbNB9x_-C9-T0d1B.js","assets/api-IyM-Zhrn.js","assets/pglite-extension-BU2Y49uD-DeeAm0lD.js","assets/loader-EqEfXl_w.js","assets/loader-CObpsRdF.js","assets/loader-DyEveXFM.js","assets/index-D7-bhPba.js","assets/__vite-browser-external-DrV_kz0N.js","assets/index-BtPuoxOl.css","assets/gs-map-editor-DQEjsCDq.js","assets/gs-ol2gs-Csfziekk.js","assets/loader-L8fscUPR.js","assets/loader-ChEjkS8U.js","assets/loader-DSH8q2PS.js","assets/loader-D8Jpy78Q.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{r as A,i as a,e as t,a as f,T as v,c as s,b as T,d as w,S as I,f as L,g as O}from"./config-RT97oKMn-DH1WMsHN.js";import{_ as e}from"./repeat-Duk-1tMZ.js";import"./index-COQdhLDu.js";import{C as S}from"./ai-service-CHv1hGx1-fWstvN3r.js";import{r as x}from"./api-IyM-Zhrn.js";A("fg",{resolver:(n,o,i)=>import.meta.resolve("/icon-libs/font-gis.svg")+`#fg-${n}`,mutator:n=>{n.setAttribute("fill","currentColor"),n.setAttribute("width","16"),n.setAttribute("height","16")},spriteSheet:!0});const R="@eclipse-lyra/extension-github-service",k={name:R},P="https://api.github.com";function D(){const n=f.getCurrentApp();if(n?.metadata?.github){const o=n.metadata.github;if(o.owner&&o.repo)return{owner:o.owner,repo:o.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function M(n=100){try{const o=D(),i=await fetch(`${P}/repos/${o.owner}/${o.repo}/releases?per_page=${n}`);return i.ok?await i.json():[]}catch(o){return console.error("Failed to fetch releases:",o),[]}}const r=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-BULd5GVW-Bn_TGH4j.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-nhKFFW9C-Famg4yHh.js"),[])}),!0);t.registerExtension({id:k.name,name:r.EXT_GITHUB_SERVICE_NAME,description:r.EXT_GITHUB_SERVICE_DESC,loader:()=>e(()=>import("./github-service-extension-B9550E0P-B1aZJo_l.js"),__vite__mapDeps([0,1,2,3])),icon:"code-branch"});const C="@eclipse-lyra/extension-md-editor",$={name:C},p=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-CZaCz4W9-B2JDyIPq.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-DA7lAJif-B8YbWLGf.js"),[])}),!0);t.registerExtension({id:$.name,name:p.EXT_MDEDITOR_NAME,description:p.EXT_MDEDITOR_DESC,loader:()=>e(()=>import("./md-editor-extension-Ds1xFKOz-CGW0oW95.js"),__vite__mapDeps([4,2,1,3])),icon:"book"});const V="@eclipse-lyra/extension-media-viewer",W={name:V},l=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-Dg_5Bnbh-CuPIFKj6.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-CvZfcZjj-CccBnscq.js"),[])}),!0);t.registerExtension({id:W.name,name:l.EXT_MEDIAVIEWER_NAME,description:l.EXT_MEDIAVIEWER_DESC,loader:()=>e(()=>import("./media-viewer-extension-Cx-1gOxs-7Tb7FGM5.js"),__vite__mapDeps([5,2,1,3])),icon:"image"});const U="@eclipse-lyra/extension-memory-usage",N={name:U},c=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-CvNymKu9-BUzdyc_f.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BWr8PWw0-B1paTwCo.js"),[])}),!0);t.registerExtension({id:N.name,name:c.EXT_MEMORYUSAGE_NAME,description:c.EXT_MEMORYUSAGE_DESC,loader:()=>e(()=>import("./memory-usage-extension-CU1A0tc3-CieM-8sY.js"),__vite__mapDeps([6,1,2,3])),icon:"microchip"});const G="@eclipse-lyra/extension-monaco-editor",j={name:G},d=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-pHDhYrCl-xLvCUmQb.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BFkkoMKw-ChYDZfG0.js"),[])}),!0);t.registerExtension({id:j.name,name:d.EXT_MONACO_NAME,description:d.EXT_MONACO_DESC,loader:()=>e(()=>import("./monaco-editor-extension-Cyl3JAto-C5w-3sqT.js").then(n=>n.m),__vite__mapDeps([7,2,1,3,8])),icon:"file-pen"});const B="@eclipse-lyra/extension-settings-tree",X={name:B},m=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-DyWo8pOM-CNeg7psB.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BsMBVteB-BrbQnRTh.js"),[])}),!0);t.registerExtension({id:X.name,name:m.EXT_SETTINGS_TREE_NAME,description:m.EXT_SETTINGS_TREE_DESC,loader:()=>e(()=>import("./settings-tree-extension-DCp2IoUR-Dpx1jT7R.js"),__vite__mapDeps([9,2,1,3])),icon:"sitemap"});const F="@eclipse-lyra/extension-utils",J={name:F},u=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-B_UWyN5e-B0D_N7UR.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-3m-zCNrE-hWm4ZfID.js"),[])}),!0);t.registerExtension({id:J.name,name:u.EXT_UTILS_NAME,description:u.EXT_UTILS_DESC,loader:()=>e(()=>import("./index-B3A8fKah-DCett1K1.js"),__vite__mapDeps([10,2,1,3,11,12,13])),icon:"toolbox",dependencies:["@eclipse-lyra/extension-python-runtime"]});t.registerExtension({id:"@eclipse-lyra/extension-catalog",name:"Catalog",description:"Browse and checkout resources from a catalog",loader:()=>e(()=>import("./loader-OYJGcrn3.js"),__vite__mapDeps([14,2,1,3])),icon:"book"});const H="@eclipse-lyra/extension-ai-system",q={name:H};t.registerExtension({id:q.name,name:"AI System",description:"AI assistants, chat, and tool execution",loader:()=>e(()=>import("./ai-system-extension-DYiKFLNa-B-tFhgSF.js"),__vite__mapDeps([15,2,1,3,16])),icon:"robot"});const Q="@eclipse-lyra/extension-command-palette",z={name:Q},g=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-B7G9mZre-BMUzmHSG.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-DUXt8fIp-BWYi1YcR.js"),[])}),!0);t.registerExtension({id:z.name,name:g.EXT_COMMANDPALETTE_NAME,description:g.EXT_COMMANDPALETTE_DESC,loader:()=>e(()=>import("./command-palette-extension-B4acGt-m-C7NbAgGq.js"),__vite__mapDeps([17,2,1,3])),icon:"terminal"});const K="@eclipse-lyra/extension-howto-system",Y={name:K},_=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-O6hSgp0d-DmIVUxyg.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-iVM2YT5S-3uoiMzXB.js"),[])}),!0);t.registerExtension({id:Y.name,name:_.EXT_HOWTO_NAME,description:_.EXT_HOWTO_DESC,loader:()=>e(()=>import("./howto-extension-8r07TyoY-DCjtLDG5.js"),__vite__mapDeps([18,1,2,3,16])),icon:"list-check",experimental:!0});const Z="@eclipse-lyra/extension-in-browser-ml",ee={name:Z},y=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-DZifr5sa-BWHLrdUd.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-BQaemDaH-BhDsH6Hy.js"),[])}),!0);t.registerExtension({id:ee.name,name:y.EXT_IN_BROWSER_ML_NAME,description:y.EXT_IN_BROWSER_ML_DESC,loader:()=>e(()=>import("./in-browser-ml-extension-Brjz3rUR-CTsCbGpu.js"),__vite__mapDeps([19,1,2,3])),icon:"brain",experimental:!0});const te="@eclipse-lyra/extension-python-runtime",ne={name:te},E=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-Db_mF4lT-Db2TPO8T.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-DPL4EA5a-7WeX-Ffi.js"),[])}),!0);t.registerExtension({id:ne.name,name:E.EXT_PYTHONRUNTIME_NAME,description:E.EXT_PYTHONRUNTIME_DESC,loader:()=>Promise.all([e(()=>import("./python-runtime-extension-CVqoCpcM-Dd2yeEnP.js"),__vite__mapDeps([20,2,1,3,21,12,13,22])).then(n=>n.a),e(()=>import("./commands-CXonsOoY-DfxXhW9d.js"),__vite__mapDeps([23,1,2,3,12]))]),icon:"lyra python"});const oe="@eclipse-lyra/extension-dataviewer",ae={name:oe};t.registerExtension({id:ae.name,name:"Data Viewer",description:"Tabular data views, persistence, and CSV/TSV/DuckDB integration",loader:()=>e(()=>import("./dataviewer-extension-D5IjkLVl-lBhVgL4O.js"),__vite__mapDeps([24,2,1,3,25])),icon:"table"});const ie="@eclipse-lyra/extension-sqleditor",se={name:ie};t.registerExtension({id:se.name,name:"SQL Editor",description:"Generic SQL editor with pluggable backends",loader:()=>e(()=>import("./sqleditor-extension-SVHoEOK_-Cpl5Lexg.js"),__vite__mapDeps([26,1,2,3])),icon:"database"});const re="@eclipse-lyra/extension-duckdb",pe={name:re},b=await a(Object.assign({"./i18n.de.json":()=>e(()=>import("./i18n.de-vsrkdDrs-CrncopA1.js"),[]),"./i18n.en.json":()=>e(()=>import("./i18n.en-rmgsXRJQ-DrfEnFhW.js"),[])}),!0);t.registerExtension({id:pe.name,name:b.EXT_DUCKDB_NAME,description:b.EXT_DUCKDB_DESC,loader:()=>e(()=>import("./duckdb-extension-DwbNB9x_-C9-T0d1B.js"),__vite__mapDeps([27,1,2,3,21,28,22])),icon:"database",dependencies:["@eclipse-lyra/extension-sqleditor"],experimental:!0});const le="@eclipse-lyra/extension-pglite",ce={name:le};t.registerExtension({id:ce.name,name:"PGlite",description:"In-browser PostgreSQL via PGlite",loader:()=>e(()=>import("./pglite-extension-BU2Y49uD-DeeAm0lD.js"),__vite__mapDeps([29,2,1,3,21,28,22])),icon:"database",dependencies:["@eclipse-lyra/extension-sqleditor"],experimental:!0});t.registerExtension({id:"@kispace-io/extension-gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>e(()=>import("./loader-EqEfXl_w.js"),__vite__mapDeps([30,1,2,3])),icon:"map-location-dot"});t.registerExtension({id:"@kispace-io/extension-overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>e(()=>import("./loader-CObpsRdF.js"),__vite__mapDeps([31,2,1,3])),icon:"table"});t.registerExtension({id:"@kispace-io/extension-map-editor",name:"geo!space Map Editor",description:"Interactive map editor for .geospace files with layers, drawing tools, and style management",loader:()=>e(()=>import("./loader-DyEveXFM.js"),__vite__mapDeps([32,33,25,2,34,35,36,1,3,11,37])),icon:"location-dot"});t.registerExtension({id:"@kispace-io/extension-mapprops",name:"geo!space Map Properties",description:"View and edit map layers, controls, overlays, and styles",loader:()=>e(()=>import("./loader-L8fscUPR.js"),__vite__mapDeps([38,2,1,3,36,33,25,34,35,11])),icon:"fg map-options"});t.registerExtension({id:"@kispace-io/extension-style-editor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>e(()=>import("./loader-ChEjkS8U.js"),__vite__mapDeps([39,36,2,33,25,34,35,1,3,11])),icon:"palette",dependencies:["@kispace-io/extension-map-editor"]});t.registerExtension({id:"@kispace-io/extension-mapbuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>e(()=>import("./loader-DSH8q2PS.js"),__vite__mapDeps([40,2,36,33,25,34,35,1,3,11])),icon:"earth"});t.registerExtension({id:"@kispace-io/extension-routing",name:"In-Browser Routing",description:"In-browser routing using OpenStreetMap data (based on Rust/WASM library routx).",loader:()=>e(()=>import("./loader-D8Jpy78Q.js"),__vite__mapDeps([41,1,2,3,36,33,25,34,35,11])),icon:"route"});const de=`# geo!space
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/erdalkaraca/geospace)
[![Browser Support](https://img.shields.io/badge/Chrome%20%7C%20Opera-Supported-brightgreen)](#browser-compatibility)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-purple)](#key-features)
[![No Installation](https://img.shields.io/badge/Installation-None%20Required-orange)](#quick-start)
[![Built on Eclipse Lyra](https://img.shields.io/badge/Built%20on-Eclipse%20Lyra-blue)](https://projects.eclipse.org/proposals/eclipse-lyra)

**The Interactive Mapping IDE in Your Browser**

geo!space is a powerful browser-based mapping IDE built as an [Eclipse Lyra](https://projects.eclipse.org/proposals/eclipse-lyra) app. It provides professional mapping capabilities entirely in your browser: create interactive maps, work with geospatial data, and transform maps into cross-platform Progressive Web Apps – all without installing any native software.

## Table of Contents

- [Key Features](#key-features)
- [Browser Compatibility](#browser-compatibility)
- [Use Cases](#use-cases)
- [Getting Started](#getting-started)
- [Development](#development)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Technical Architecture](#technical-architecture)
- [Used by](#used-by)
- [Quick Start](#quick-start)

## Key Features

### Professional Mapping
- **Interactive Map Editor**: Create and edit maps using the custom \`.geospace\` format
- **Multiple Data Sources**: Support for OSM, XYZ tiles, GeoJSON, KML, GeoTIFF, GPX, Features, BM (basemap.de), WMS, WMTS, and Overpass API
- **Satellite Imagery**: Built-in access to Esri World Imagery and Sentinel-2 satellite imagery
- **Layer Management**: Vector layers, tile layers, and layer groups with full styling control
- **OpenLayers Integration**: Built on the industry-standard OpenLayers mapping library
- **Advanced Styling**: Dynamic style loading and management system
- **PWA Transformation**: Convert \`.geospace\` files into cross-platform Progressive Web Apps

### Map Building & Deployment
- **PWA Builder**: Transform \`.geospace\` files into cross-platform Progressive Web Apps
- **Custom Controls**: Create interactive UI components using JavaScript modules
- **Module System**: Import and share custom map controls within your workspace

## Use Cases

- **Data Analysts**: Create interactive maps for data visualization
- **Urban Planners**: Design and prototype mapping applications  
- **Developers**: Build geospatial applications without complex setup
- **Researchers**: Prototype location-based applications quickly
- **Educators**: Teach mapping and geospatial concepts interactively
- **App Creators**: Transform maps into cross-platform PWAs for mobile, desktop, and web deployment

## Getting Started

### 1. **Connect a Workspace**
- In the Workspace tab, click the folder icon "Load workspace folder"
- Choose a local folder to use as your workspace
- This folder will be saved and restored when you reload geo!space

### 2. **Working with Files**
- **\`.geospace\` files**: Map files that open in the interactive map editor
- **Other files**: Open in the appropriate editor based on file type

### 3. **Creating Interactive Maps**
- Double-click \`.geospace\` files to open them in the map editor
- Use the map editor's UI to interact with layers, features, and styling
- Add data sources: OSM tiles, GeoJSON files, KML, GeoTIFF, GPX, or custom features
- **Build PWA**: Use the "Build map" button to transform your \`.geospace\` file into a cross-platform Progressive Web App

### 4. **Resource Catalog**
- Browse the catalog view for curated maps, datasets, icons, and controls
- Select items from catalog categories (datasets, maps, overlays, controls, icons)
- Use the "Checkout" button to download items directly to your workspace
- Access pre-built basemaps (OpenStreetMap, basemap.de) and sample datasets

## Development

geo!space runs as an Eclipse Lyra app and provides a powerful development environment for creating custom map controls, overlays, and workflows.

### **Run locally (for developers)**

To work on geo!space itself:

1. **Install dependencies**
   - At the repository root:
     - \`npm install\`
2. **Start the dev server**
   - From the root:
     - \`npm run dev\`
   - This runs the Lyra-based app from the \`@kispace-io/app\` workspace (served by Vite) and mounts it into the \`#app-root\` element in \`index.html\`.
3. **Build and preview**
   - Build: \`npm run build\`
   - Preview: \`npm run preview\`

The main app definition lives in \`packages/app/src/main.ts\`, where the Eclipse Lyra \`AppDefinition\` is registered along with all geo!space-specific extensions.

### **Custom Modules**

Create interactive UI components for your maps using JavaScript modules. geo!space uses **Lit** for templating and **Web Awesome** for UI components - both are provided by default and based on browser standards only, so no build tools are required.

**Key Features:**
- **No Build Tools**: Write plain JavaScript modules that run directly in the browser
- **Lit Templating**: Use Lit's HTML template literals for reactive UI
- **Web Awesome Components**: Access to a full library of web-standard UI components
- **OpenLayers API**: Full access to OpenLayers through the \`ol\` namespace object
- **Module System**: Import and share modules within your workspace using relative paths or bare specifiers

**Getting Started:**
1. Create a JavaScript file in your workspace (e.g., \`my-control.js\`)
2. Export a default function that receives APIs via destructuring
3. Return a Lit template from your function
4. Add your module to a map's \`controls\` or \`overlays\` array in the \`.geospace\` file

**Example:**
\`\`\`javascript
export default function ({html, style, events, map}) {
    style({
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0"
    });

    return () => html\`
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
            <wa-button @click=\${() => events("drawer/openMenu")}>
                Menu
            </wa-button>
        </div>
    \`;
}
\`\`\`

**Learn More:**
- See the [User Modules Guide](packages/app/public/docs/user-modules.md) for complete documentation
- Browse Web Awesome components: https://webawesome.com
- Explore OpenLayers API: https://openlayers.org/

## Examples

### **Create a City Map**
\`\`\`
1. Create a new .geospace file
2. Add OpenStreetMap as base layer
3. Add GeoJSON layers for buildings and trees
4. Use the "Build map" button to create a deployable PWA
\`\`\`

### **Custom Map Controls**
\`\`\`
1. Create a JavaScript module for custom map controls
2. Use Lit and WebAwesome components for UI
3. Add your module to a map's controls array
4. Build the map as a PWA for deployment
\`\`\`

## Troubleshooting

### **Common Issues**

**File Not Found**
- If you don't see expected files, try reloading the workspace
- Ensure the workspace folder is properly connected

**Browser Compatibility Issues**
- Use Chrome or Opera for full functionality
- Firefox and Safari have limited File System Access API support

**Map Not Loading**
- Check that \`.geospace\` files contain valid JSON
- Verify data source URLs are accessible
- Ensure required resources (icons, styles) are available

## FAQ

**Q: Do I need to install anything?**
A: No! geo!space runs entirely in your browser. Just open it in Chrome or Opera.

**Q: Is my data secure?**
A: Yes. All data stays in your browser and local workspace. No data is sent to external servers.

**Q: Can I use geo!space offline?**
A: Yes, for basic mapping features. Some features may require internet connection for data sources.

**Q: How do I share my maps?**
A: Use the "Build map" button to create a PWA that can be deployed anywhere or shared as a standalone app.

**Q: What file formats are supported?**
A: Maps: \`.geospace\` (JSON), Data: GeoJSON, KML, GPX, GeoTIFF, Features. Tile sources: OSM, XYZ, WMS, WMTS, BM (basemap.de), Satellite imagery (Esri, Sentinel-2).

**Q: Can I customize maps?**
A: Yes! Create custom controls using JavaScript modules with Lit and WebAwesome components.

## Technical Architecture

geo!space is implemented as an [Eclipse Lyra](https://projects.eclipse.org/proposals/eclipse-lyra) app that uses Lyra's core IDE infrastructure and extension system.

At startup, the Lyra \`AppDefinition\` in \`packages/app/src/main.ts\` is registered and auto-started into the \`#app-root\` container. The built-in "Welcome" command opens this \`README.md\` inside Lyra's editor system as the in-app welcome page.

**geo!space-Specific Stack:**
- **Eclipse Lyra Core**: Application shell, workspace, command palette, editor registry, AI system, and utilities (\`@eclipse-lyra/core\` and Lyra extensions)
- **Mapping Extensions**: geo!space-specific Lyra extensions such as:
  - \`@kispace-io/extension-map-editor\`
  - \`@kispace-io/extension-mapbuilder\`
  - \`@kispace-io/extension-mapprops\`
  - \`@kispace-io/extension-style-editor\`
  - \`@kispace-io/extension-overpass\`
  - \`@kispace-io/extension-gtfs\`
- **IDE Extensions**: Additional Lyra extensions for markdown editing, Monaco code editing, media viewing, settings, memory usage, AI assistance, data viewing, and more
- **OpenLayers**: Professional mapping library used for rendering and interaction
- **Custom Runtime (\`gs-lib\`)**: Map-to-OpenLayers conversion system and runtime utilities
- **Style Loader**: Dynamic style loading for geospatial data
- **PWA Builder**: Transform \`.geospace\` files into cross-platform Progressive Web Apps
- **Lit & WebAwesome**: Available for creating custom map controls and overlays

\`\`\`mermaid
flowchart TD
  browserUser[BrowserUser] --> geospaceApp["geo!space (Lyra App)"]
  geospaceApp --> lyraCore["EclipseLyraCore"]
  geospaceApp --> mappingExtensions["KiSpaceMappingExtensions"]
  geospaceApp --> lyraExtensions["LyraIDEExtensions"]
  mappingExtensions --> gsLib["gs-lib Runtime"]
  gsLib --> openLayers["OpenLayers"]
\`\`\`

## Used by

- **[Kiosk Scout](https://finder.kioskscout.de)**: A cross-platform PWA for finding nearby vending machines
- **Want your geo!space app listed here?** Contact us!

---

## Quick Start

**Get up and running in 3 minutes:**

1. **Open geo!space** in Chrome or Opera
2. **Connect workspace** - Click folder icon and select a local directory
3. **Create your first map** - Create a new \`.geospace\` file or open existing files
4. **Add data layers** - Import GeoJSON, KML, or add tile sources
5. **Build your app** - Use the "Build map" button to create a deployable PWA

### **First-Time Setup**
- **Start mapping immediately** - No configuration required
- **Add data sources** - Import your geospatial data or use built-in tile sources
- **Customize maps** - Create custom controls using JavaScript modules

## Ready to Start?

1. **Load the app** in Chrome or Opera
2. **Connect a workspace** folder
3. **Create your first map** or open an existing \`.geospace\` file
4. **Add layers and customize** your map
5. **Build and share** your interactive maps as PWAs

**Happy mapping!**`,me="geo!space catalog",ue="earth",ge="catalog.root.geospace",_e=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.layers",label:"Layers",icon:"fg layers",items:[{label:"Extent Markers",icon:"code",state:{url:"${baseURL}/layers/extent-markers.js",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}},{label:"MapLibre 3D Example",icon:"cubes",state:{url:"${baseURL}/maps/maplibre-3d-demo.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],ye={label:me,icon:ue,contributionId:ge,items:_e},Ee=`**geo!space - WebGIS Application:**

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
`,be=O("GeoSpaceApp"),fe={name:"geo!space",metadata:{github:{owner:"erdalkaraca",repo:"geospace"},favicon:"/logo.svg"},extensions:["@kispace-io/extension-map-editor","@kispace-io/extension-mapprops","@kispace-io/extension-style-editor","@kispace-io/extension-overpass","@kispace-io/extension-gtfs","@kispace-io/extension-mapbuilder","@kispace-io/extension-routing","@eclipse-lyra/extension-catalog","@eclipse-lyra/extension-utils","@eclipse-lyra/extension-command-palette","@eclipse-lyra/extension-md-editor","@eclipse-lyra/extension-monaco-editor","@eclipse-lyra/extension-media-viewer","@eclipse-lyra/extension-settings-tree","@eclipse-lyra/extension-memory-usage","@eclipse-lyra/extension-ai-system","@eclipse-lyra/extension-dataviewer","@eclipse-lyra/extension-sqleditor","@eclipse-lyra/extension-github-service","@eclipse-lyra/extension-notebook"],contributions:{ui:[{name:"toolbar.brand.geospace",target:v,slot:"start",label:"Brand",component:'<span style="margin-right: 1rem; display: inline-flex; align-items: center;"><img src="/geospace.svg" alt="geo!space" style="height: 24px; display: block;" /></span>'}]},releaseHistory:M,async initialize(){const n="/".replace(/\/?$/,"/"),o=(typeof window<"u"?window.location.origin:"")+n;x(ye,o),s.registerContribution(S,{label:"Geo!space Prompt Enhancer",enhancer:{enhance:async i=>`${i}

${Ee}`,priority:5}}),s.registerContribution("system.icons",{label:"geo!space File Icons",mappings:{geospace:"earth"},priority:1}),T({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async i=>{const h=new I(de,"README.md");await L.loadEditor(h)}},contribution:{target:w,icon:"question-circle",label:"Welcome"}}),be.info("geo!space is ready!")},layout:"standard-bottom-sidebar"},he=document.getElementById("app-root")??document.body;f.registerApp(fe,{autoStart:!0,hostConfig:!0,container:he});
