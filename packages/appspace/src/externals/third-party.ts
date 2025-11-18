/**
 * Third-party library re-exports
 * Centralized re-exports for commonly used third-party libraries.
 * This ensures a single source of truth for these dependencies.
 */

// Re-export uuid (all exports including v4)
export * from "uuid";

// Re-export pubsub-js
// Note: pubsub-js uses default export, so we need to handle it specially
import PubSubModule from "pubsub-js";
const PubSub = (PubSubModule as any).default || PubSubModule;
export default PubSub;
export { PubSub };

