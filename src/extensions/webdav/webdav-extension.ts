/**
 * WebDAV Extension for geo!space
 * 
 * This extension enables connecting to WebDAV servers (Nextcloud, ownCloud, etc.)
 * as workspace folders, providing cloud storage integration.
 * 
 * Features:
 * - Connect to WebDAV servers
 * - Full file/directory operations
 * - Nextcloud and ownCloud support
 * - Seamless integration with existing workspace API
 * 
 * Usage:
 * Import this file to register the WebDAV extension and its commands.
 */

import { workspaceService } from '../../core/filesys';
import { WebDAVClient, type WebDAVConnectionInfo } from './webdav-client';
import { WebDAVDirectoryResource } from './webdav-filesys';
import type { WebDAVResource } from './webdav-client';

// Export all WebDAV types and classes
export { WebDAVClient, type WebDAVConnectionInfo, type WebDAVResource } from './webdav-client';
export { WebDAVFileResource, WebDAVDirectoryResource } from './webdav-filesys';

// Import UI component (registers itself)
import './k-webdav-connect';

// Import commands (registers themselves)
import './webdav-commands';

// Register WebDAV as a workspace contribution
workspaceService.registerContribution({
    type: 'webdav',
    name: 'WebDAV (Cloud Storage)',
    
    canHandle(input: any): boolean {
        // Accept any connection info with a URL (credentials are optional for public/shared folders)
        return input && typeof input === 'object' && 'url' in input && typeof input.url === 'string';
    },
    
    async connect(input: WebDAVConnectionInfo) {
        const client = new WebDAVClient(input);
        const rootResource: WebDAVResource = {
            href: input.url,
            displayName: extractWorkspaceNameFromUrl(input.url),
            isDirectory: true
        };
        return new WebDAVDirectoryResource(client, rootResource);
    },
    
    async restore(data: WebDAVConnectionInfo) {
        if (!data || !data.url) {
            return undefined;
        }
        
        try {
            const client = new WebDAVClient(data);
            const rootResource: WebDAVResource = {
                href: data.url,
                displayName: extractWorkspaceNameFromUrl(data.url),
                isDirectory: true
            };
            return new WebDAVDirectoryResource(client, rootResource);
        } catch (error) {
            console.error('Failed to restore WebDAV workspace:', error);
            return undefined;
        }
    },
    
    async persist(workspace) {
        // Extract connection info from the workspace
        if (workspace instanceof WebDAVDirectoryResource) {
            const client = workspace.getClient();
            const baseUrl = client.getBaseUrl();
            
            // Note: We can't extract username/password from the client after creation
            // This is a security limitation - credentials should be re-requested on restore
            // For now, we'll store a placeholder that will require re-authentication
            return {
                url: baseUrl,
                username: '',  // Will need re-authentication
                password: ''   // Will need re-authentication
            };
        }
        return null;
    }
});

function extractWorkspaceNameFromUrl(url: string): string {
    try {
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        return pathParts[pathParts.length - 1] || 'workspace';
    } catch {
        return 'workspace';
    }
}

console.log('WebDAV Extension loaded');

