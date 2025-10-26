/**
 * Core Services Initialization
 * 
 * This file imports core services to ensure they are initialized at startup.
 * Services that need to set up global event listeners or state should be imported here.
 */

// Initialize KeyBindingManager (sets up global keyboard event listener)
import "./keybindings.ts";

// Initialize dialog utilities
import "./dialog.ts";

// Export empty object to make this a module
export {};

