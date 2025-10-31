// Framework Bootstrap
// 
// This module initializes the framework by:
// 1. Setting up core services
// 2. Registering framework components
// 3. Initializing event handlers and global state
//
// The framework automatically bootstraps when this module is imported.
// Apps can opt-in to bootstrap by importing this module.

// Initialize core services (set up global event listeners and state)
import './keybindings';  // Sets up global keyboard event listener
import './dialog';       // Initializes dialog utilities

// Register framework parts (k-* components)
import '../parts/index';

// Register framework components
import '../components';

// Register framework widgets
import '../widgets/index';

// Register framework extensions (system extensions)
import '../extensions';

// Register framework system prompts
import '../sysprompts';
