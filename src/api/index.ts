// Framework Public API
// 
// This module exports the public API for applications built on the framework.
// Apps should import from this module rather than directly from internal framework modules.
//
// The framework automatically bootstraps when this module is first imported.
//
// Usage:
//   import { appLoaderService, commandRegistry, createLogger } from '../api/index.ts';
//   import { KPart, KContainer } from '../api/index.ts';
//   import { AppDefinition } from '../api/index.ts';

// Bootstrap framework when API is first accessed
// This ensures framework is initialized before any API is used
import '../core/index.ts';

// Export all public services
export * from './services.ts';

// Export base classes
export * from './base-classes.ts';

// Export constants
export * from './constants.ts';

// Export types
export * from './types.ts';

// Re-export AppDefinition for convenience
export type { AppDefinition, AppContributions } from '../core/apploader.ts';

