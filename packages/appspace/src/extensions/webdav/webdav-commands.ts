/**
 * Commands for WebDAV workspace integration
 */

import { registerAll } from "../../core/commandregistry";
import { workspaceService } from "../../core/filesys";
import { createLogger } from "../../core/logger";
import type { WebDAVConnectionInfo } from "./webdav-client";
import { html, render } from "lit";

const logger = createLogger('WebDAV');

// Singleton dialog instance to prevent DOM memory leaks
let webdavDialog: HTMLElement | null = null;

function getWebDAVDialog(): HTMLElement {
    if (!webdavDialog) {
        const container = document.createElement('div');
        
        const handleConnect = async () => {
            const dialog = container.querySelector('wa-dialog') as any;
            const urlInput = container.querySelector('#webdav-url') as any;
            const passwordInput = container.querySelector('#webdav-password') as any;
            
            const url = urlInput?.value;
            if (!url) {
                logger.error('Please provide a URL');
                return;
            }
            
            const password = passwordInput?.value;
            
            try {
                let connectionInfo: WebDAVConnectionInfo;
                
                // Check if it's a Nextcloud/ownCloud share URL format
                const shareMatch = url.match(/^(https?:\/\/[^\/]+)\/(?:index\.php\/)?s\/([A-Za-z0-9]+)/);
                
                if (shareMatch) {
                    // It's a share URL - convert to WebDAV endpoint
                    const server = shareMatch[1];
                    const token = shareMatch[2];
                    
                    connectionInfo = {
                        url: `${server}/public.php/webdav/`,
                        username: token,
                        password: password || ''
                    };
                } else {
                    // It's a direct WebDAV URL - use as-is
                    connectionInfo = {
                        url,
                        ...(password && {
                            username: '',
                            password
                        })
                    };
                }

                await workspaceService.connectWorkspace(connectionInfo);
                logger.info('Connected to WebDAV workspace');
                
                dialog.open = false;
                urlInput.value = '';
                passwordInput.value = '';
            } catch (error) {
                if (error instanceof Error) {
                    logger.error(`Failed to connect: ${error.message}`);
                } else {
                    logger.error('Failed to connect to WebDAV workspace');
                }
            }
        };
        
        const template = html`
            <wa-dialog label="Connect to WebDAV / Cloud Storage">
                <style>
                    .webdav-dialog {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        padding: 1.5rem;
                        max-width: 500px;
                    }
                    
                    .form-buttons {
                        display: flex;
                        gap: 0.5rem;
                        justify-content: flex-end;
                        margin-top: 1rem;
                    }
                </style>
                
                <div class="webdav-dialog">
                <wa-input
                    id="webdav-url"
                    label="URL"
                    placeholder="https://my-nextcloud.de/s/<share-token>"
                    required
                    help-text="Nextcloud share link or WebDAV endpoint URL">
                </wa-input>
                    
                    <wa-input
                        id="webdav-password"
                        type="password"
                        label="Password (optional)"
                        placeholder="Leave empty if not required">
                    </wa-input>
                    
                    <div class="form-buttons">
                        <wa-button
                            appearance="outline"
                            @click=${() => (container.querySelector('wa-dialog') as any).open = false}>
                            Cancel
                        </wa-button>
                        
                        <wa-button
                            appearance="primary"
                            @click=${handleConnect}>
                            <wa-icon name="plug" slot="start"></wa-icon>
                            Connect
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `;
        
        render(template, container);
        document.body.appendChild(container);
        webdavDialog = container.querySelector('wa-dialog') as HTMLElement;
    }
    return webdavDialog;
}

/**
 * Universal WebDAV connection command
 * Handles Nextcloud shares, direct WebDAV URLs, and more
 */
registerAll({
    command: {
        "id": "workspace.connect.webdav",
        "name": "WebDAV / Cloud Storage",
        "description": "Connect to WebDAV servers, Nextcloud shares, ownCloud, and other cloud storage",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "description": "WebDAV URL: share link (https://cloud.example.com/s/TOKEN) or direct endpoint",
                "required": false
            },
            {
                "name": "password",
                "type": "string",
                "description": "Password (if required)",
                "required": false
            }
        ]
    },
    handler: {
        execute: async (context) => {
            const url = context.parameters?.url as string;
            const password = context.parameters?.password as string;

            // If no parameters provided, show the dialog
            if (!url) {
                const dialog = getWebDAVDialog();
                (dialog as any).open = true;
                return;
            }

            try {
                let connectionInfo: WebDAVConnectionInfo;
                
                // Check if it's a Nextcloud/ownCloud share URL format
                const shareMatch = url.match(/^(https?:\/\/[^\/]+)\/(?:index\.php\/)?s\/([A-Za-z0-9]+)/);
                
                if (shareMatch) {
                    // It's a share URL - convert to WebDAV endpoint
                    const server = shareMatch[1];
                    const token = shareMatch[2];
                    
                    connectionInfo = {
                        url: `${server}/public.php/webdav/`,
                        username: token,
                        password: password || ''
                    };
                } else {
                    // It's a direct WebDAV URL - use as-is
                    connectionInfo = {
                        url,
                        ...(password && {
                            username: '',
                            password
                        })
                    };
                }

                await workspaceService.connectWorkspace(connectionInfo);
                logger.info('Connected to WebDAV workspace');
            } catch (error) {
                if (error instanceof Error) {
                    logger.error(`Failed to connect: ${error.message}`);
                } else {
                    logger.error('Failed to connect to WebDAV workspace');
                }
            }
        }
    },
    contribution: {
        target: "filebrowser.connections",
        label: "WebDAV / Cloud Storage",
        icon: "cloud"
    }
});
