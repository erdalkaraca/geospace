/**
 * Lit library exports
 * Centralized Lit imports for use across packages.
 * This ensures a single source of truth for Lit dependencies.
 */

// Re-export everything from lit core
export * from "lit";

// Re-export decorators
export * from "lit/decorators.js";

// Re-export commonly used directives
export * from "lit/directives/when.js";
export * from "lit/directives/repeat.js";
export * from "lit/directives/keyed.js";
export * from "lit/directives/class-map.js";
export * from "lit/directives/style-map.js";
export * from "lit/directives/if-defined.js";
export * from "lit/directives/guard.js";
export * from "lit/directives/cache.js";
export * from "lit/directives/unsafe-html.js";
export * from "lit/directives/until.js";
export * from "lit/directives/live.js";
export * from "lit/directives/ref.js";

