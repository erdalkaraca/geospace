/**
 * GitHub API service for fetching release information
 */

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
const REPO_OWNER = 'erdalkaraca';
const REPO_NAME = 'geospace';

/**
 * Fetches all releases from GitHub (up to 100 most recent)
 */
export async function fetchReleases(perPage: number = 100): Promise<GitHubRelease[]> {
    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=${perPage}`
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
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`
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
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/releases/tags/${tag}`
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

