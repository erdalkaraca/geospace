// Framework Configuration
// 
// This module provides framework-wide configuration that can be customized
// by applications built on the framework.

export interface FrameworkConfig {
    // GitHub repository configuration (optional, for release checking)
    github?: {
        owner: string;
        repo: string;
    };
    
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

/**
 * Get GitHub repository configuration
 */
export function getGitHubConfig(): { owner: string; repo: string } | undefined {
    return frameworkConfig.github;
}

