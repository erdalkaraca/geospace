# Example Extension

A template extension package for geo!space marketplace.

## Structure

This package demonstrates how to create a marketplace extension:

- `src/extension.ts` - Main extension entry point
- `package.json` - Package configuration with appspace as dependency
- `vite.config.ts` - Build configuration for library output
- `tsconfig.json` - TypeScript configuration

## Building

```bash
# Install dependencies first
npm install

# Build the extension
npm run build
```

This will create a `dist/extension.js` file that can be hosted and referenced in a marketplace catalog.

**Important**: The extension is built with `@kispace-io/appspace` marked as external, meaning it expects appspace to be available at runtime. When the extension is loaded via `import()` in the application context, it will have access to appspace services through the context parameter.

## Usage in Marketplace Catalog

Add this extension to your catalog JSON:

```json
{
  "id": "example-extension",
  "name": "Example Extension",
  "description": "A simple example extension",
  "url": "https://your-domain.com/extensions/example-extension.js",
  "icon": "puzzle-piece",
  "version": "1.0.0",
  "author": "Your Name",
  "experimental": false,
  "dependencies": []
}
```

## Development

```bash
# Type check
npm run type-check

# Build in watch mode
npm run dev
```

## Customization

1. Update `package.json` with your extension name and version
2. Modify `src/extension.ts` to implement your extension logic
3. Add any additional dependencies to `package.json`
4. Build and host the output file
5. Add to your marketplace catalog

