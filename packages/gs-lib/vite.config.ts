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
  // Bundle core modules that gs-lib directly uses
  // These are re-exports from core, so we bundle them to make gs-lib self-contained
  const coreModulesToBundle = [
    '@kispace-io/core/externals/third-party',  // uuid
    '@kispace-io/core/externals/lit',          // lit
    '@kispace-io/core/externals/webawesome',   // webawesome
    '@kispace-io/core/core/events'              // subscribe, publish, unsubscribe
  ];
  
  const isCoreModuleToBundle = coreModulesToBundle.some(module =>
    id === module || id.startsWith(`${module}/`)
  );
  
  if (isCoreModuleToBundle) {
    return false;
  }
  
  // Keep other core imports external (e.g., ./api which pulls in the entire framework)
  if (id.startsWith('@kispace-io/core')) {
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
  // These are packages imported by ol/ol-mapbox-style that are not core
  const isBareSpecifier = !id.startsWith('./') &&
                          !id.startsWith('../') &&
                          !id.startsWith('@kispace-io/core');
  
  const isNodeModulesPath = path.isAbsolute(id) &&
                           id.includes('/node_modules/') &&
                           !id.includes('/node_modules/@kispace-io/core/');
  
  if (isBareSpecifier || isNodeModulesPath) {
    return false;
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

