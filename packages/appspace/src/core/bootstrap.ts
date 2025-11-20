// Framework Bootstrap
// 
// This module initializes the framework by:
// 1. Setting up core services
// 2. Registering framework components
// 3. Initializing event handlers and global state
//
// The framework automatically bootstraps when this module is imported.
// Apps can opt-in to bootstrap by importing this module.

import '../i18n';

// Initialize core services (set up global event listeners and state)
import './keybindings';  // Sets up global keyboard event listener
import '../dialogs';     // Initializes dialog utilities

// Register framework parts (k-* components)
import '../parts/index';

// Register framework components
import '../components';

// Register framework widgets
import '../widgets/index';

// Register framework extensions (system extensions)
import '../extensions';

// Register framework contributions
import '../contributions';

// Register framework commands
import '../commands';

// Register framework package info
import { packageInfoService } from './packageinfoservice';
import appspacePackageJson from '../../package.json';

packageInfoService.addPackage({
    name: appspacePackageJson.name,
    version: appspacePackageJson.version,
    dependencies: appspacePackageJson.dependencies,
    devDependencies: appspacePackageJson.devDependencies
});
