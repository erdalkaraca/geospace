// Framework Entry Point
//
// This is the main entry point for the framework.
// Applications should import from this module to use the framework.
//
// Usage:
//   import { appLoaderService, commandRegistry, createLogger } from '@framework';
//   import { AppDefinition } from '@framework';
//
// The framework automatically bootstraps when this module is imported.

// Bootstrap the framework (initialize services, register components, etc.)
import './bootstrap.ts';

// Export public API
export * from './api/index.ts';

// Re-export AppDefinition for convenience
export type { AppDefinition, AppContributions } from './apploader.ts';

