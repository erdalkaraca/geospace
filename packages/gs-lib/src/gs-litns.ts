// Re-export all Lit APIs from appspace's externals/lit module - single source of truth
export * from "@kispace-io/appspace/externals/lit-exports";

// Import WebAwesome components from appspace's externals/webawesome module
// This maintains a single source of truth - Vite will optimize the build to only include what's needed
// WebAwesome is treated as part of lit, so it's always available to user modules
import "@kispace-io/appspace/externals/webawesome";

