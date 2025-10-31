// Framework Configuration
// 
// This module provides framework-wide configuration that can be customized
// by applications built on the framework.

export interface FrameworkConfig {
    // Logger configuration
    logger?: {
        level?: 'debug' | 'info' | 'warning' | 'error';
    };
}

let frameworkConfig: FrameworkConfig = {};

/**
 * Initialize framework configuration
 * This should be called before framework bootstrap (if custom config is needed)
 */
export function configureFramework(config: FrameworkConfig): void {
    frameworkConfig = { ...frameworkConfig, ...config };
}

/**
 * Get current framework configuration
 */
export function getFrameworkConfig(): Readonly<FrameworkConfig> {
    return { ...frameworkConfig };
}

