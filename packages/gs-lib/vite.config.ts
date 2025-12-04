import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isExternal = (id: string) => {
  // Exclude Vite-specific modules (development only)
  if (id === '@vite/client' || id.startsWith('@vite/')) {
    return true;
  }
  // Bundle relative imports (./something, ../something)
  if (id.startsWith('./') || id.startsWith('../')) {
    return false;
  }
  // Bundle appspace modules that gs-lib directly uses
  // These are re-exports from appspace, so we bundle them to make gs-lib self-contained
  const appspaceModulesToBundle = [
    '@kispace-io/appspace/externals/third-party',  // uuid
    '@kispace-io/appspace/externals/lit',          // lit
    '@kispace-io/appspace/externals/webawesome',   // webawesome
    '@kispace-io/appspace/core/events'              // subscribe, publish, unsubscribe
  ];
  
  // Check if it's an appspace module we want to bundle
  const isAppspaceModuleToBundle = appspaceModulesToBundle.some(module => 
    id === module || id.startsWith(`${module}/`)
  );
  
  if (isAppspaceModuleToBundle) {
    return false; // Bundle these appspace modules
  }
  
  // Keep other appspace imports external (e.g., ./api which pulls in the entire framework)
  if (id.startsWith('@kispace-io/appspace')) {
    return true;
  }
  // Bundle absolute paths to source files (entry points)
  if (path.isAbsolute(id) && id.includes('/src/')) {
    return false;
  }
  // Only bundle direct dependencies: ol and ol-mapbox-style
  // Also bundle their transitive dependencies (needed for ol to work)
  const directDependencies = ['ol', 'ol-mapbox-style'];
  // Check both original import specifier and resolved paths
  const isDirectDep = directDependencies.some(dep => {
    // Match original import specifier (e.g., 'ol', 'ol/Map')
    if (id === dep || id.startsWith(`${dep}/`)) {
      return true;
    }
    // Match resolved absolute paths (e.g., '/path/to/node_modules/ol/index.js')
    if (path.isAbsolute(id) && id.includes(`/node_modules/${dep}/`)) {
      return true;
    }
    return false;
  });
  
  if (isDirectDep) {
    return false; // Bundle direct dependencies
  }
  
  // Bundle transitive dependencies of ol/ol-mapbox-style
  // These are packages imported by ol/ol-mapbox-style that are not appspace
  // Check if it's a bare specifier (not relative, not appspace)
  const isBareSpecifier = !id.startsWith('./') && 
                          !id.startsWith('../') && 
                          !id.startsWith('@kispace-io/appspace');
  
  // Check if it's an absolute path to node_modules (but not appspace)
  const isNodeModulesPath = path.isAbsolute(id) && 
                           id.includes('/node_modules/') && 
                           !id.includes('/node_modules/@kispace-io/appspace/');
  
  // If it's a bare specifier or a node_modules path (and not appspace), bundle it
  // This bundles transitive dependencies of ol/ol-mapbox-style
  if (isBareSpecifier || isNodeModulesPath) {
    return false; // Bundle transitive dependencies
  }
  
  // Everything else (node built-ins, etc.) should be external
  return true;
};

export default defineConfig({
  resolve: {
    alias: {},
  },
  plugins: [
    dts({
      outDir: 'dist',
      entryRoot: 'src',
      rollupTypes: false,
      tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => {
        return `${entryName}.js`;
      },
    },
    rollupOptions: {
      external: isExternal,
      output: {
        preserveModules: false,
        entryFileNames: '[name].js',
        format: 'es',
        // Output a single file to make it easier to copy for build service
        inlineDynamicImports: true,
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: false,
  },
});

