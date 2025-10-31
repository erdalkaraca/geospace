// Framework Bootstrap
// 
// This module initializes the framework by:
// 1. Setting up core services
// 2. Registering framework components
// 3. Initializing event handlers and global state
//
// The framework automatically bootstraps when this module is imported.
// Apps can opt-in to bootstrap by importing this module.

// Initialize core services
import './init.ts';

// Register framework parts (k-* components)
import '../parts/index.ts';

// Register framework components
import '../components';

// Register framework widgets
import '../widgets/index.ts';

// Register framework extensions (system extensions)
import '../extensions';

// Register framework system prompts
import '../sysprompts';

// Apply framework configuration to services
import { getFrameworkConfig } from './config.ts';
import { configureGitHub } from './github-service.ts';

// Apply framework configuration
const config = getFrameworkConfig();

// Apply GitHub configuration
if (config.github !== undefined) {
    configureGitHub(config.github.owner, config.github.repo);
}

