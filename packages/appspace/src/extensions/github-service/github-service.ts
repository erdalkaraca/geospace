/**
 * GitHub API service for fetching release information
 */

import { appLoaderService } from '../../core/apploader';

export interface GitHubRelease {
    tag_name: string;
    name: string;
    body: string;
    published_at: string;
    html_url: string;
    prerelease: boolean;
    draft: boolean;
}

const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Get current GitHub repository configuration from the app definition.
 * The github-service reads from the current app definition via appLoaderService.
 * Looks for github info in app.metadata.github.
 * 
 * @throws Error if GitHub repository is not configured in app metadata
 */
export function getGitHubConfig(): { owner: string; repo: string } {
    const currentApp = appLoaderService.getCurrentApp();
    if (currentApp?.metadata?.github) {
        const github = currentApp.metadata.github;
        if (github.owner && github.repo) {
            return { owner: github.owner, repo: github.repo };
        }
    }
    throw new Error('GitHub repository not configured. Specify metadata.github in AppDefinition.');
}

/**
 * Fetches all releases from GitHub (up to 100 most recent)
 */
export async function fetchReleases(perPage: number = 100): Promise<GitHubRelease[]> {
    try {
        const config = getGitHubConfig();
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${config.owner}/${config.repo}/releases?per_page=${perPage}`
        );
        
        if (!response.ok) {
            return [];
        }
        
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch releases:', error);
        return [];
    }
}

/**
 * Fetches the latest release from GitHub
 */
export async function fetchLatestRelease(): Promise<GitHubRelease | null> {
    try {
        const config = getGitHubConfig();
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${config.owner}/${config.repo}/releases/latest`
        );
        
        if (!response.ok) {
            return null;
        }
        
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch latest release:', error);
        return null;
    }
}

/**
 * Fetches a specific release by tag name
 */
export async function fetchReleaseByTag(tag: string): Promise<GitHubRelease | null> {
    try {
        const config = getGitHubConfig();
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${config.owner}/${config.repo}/releases/tags/${tag}`
        );
        
        if (!response.ok) {
            return null;
        }
        
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch release ${tag}:`, error);
        return null;
    }
}

/**
 * Compares two semantic versions
 * Returns true if newVersion is greater than currentVersion
 */
export function isNewerVersion(currentVersion: string, newVersion: string): boolean {
    const cleanCurrent = currentVersion.replace(/^v/, '');
    const cleanNew = newVersion.replace(/^v/, '');
    
    const currentParts = cleanCurrent.split('.').map(Number);
    const newParts = cleanNew.split('.').map(Number);
    
    for (let i = 0; i < Math.max(currentParts.length, newParts.length); i++) {
        const current = currentParts[i] || 0;
        const newer = newParts[i] || 0;
        
        if (newer > current) return true;
        if (newer < current) return false;
    }
    
    return false;
}

