import { customElement, state } from "lit/decorators.js";
import { KElement } from "../../parts/k-element";
import { html } from "lit";
import { workspaceService } from "../../core/filesys";
import type { WebDAVConnectionInfo } from "./webdav-client";
import { createLogger } from "../../core/logger";

const logger = createLogger('WebDAV');

@customElement('k-webdav-connect')
export class KWebDAVConnect extends KElement {
    
    @state()
    private url = '';
    
    @state()
    private username = '';
    
    @state()
    private password = '';
    
    @state()
    private connecting = false;

    @state()
    private showHelp = false;

    private async handleConnect() {
        if (!this.url) {
            logger.error('Please provide a URL');
            return;
        }

        // Validate URL format
        try {
            new URL(this.url);
        } catch {
            logger.error('Invalid URL format');
            return;
        }

        this.connecting = true;
        
        try {
            const connectionInfo: WebDAVConnectionInfo = {
                url: this.url,
                // Only include credentials if both are provided
                ...(this.username && this.password && {
                    username: this.username,
                    password: this.password
                })
            };
            
            await workspaceService.connectWorkspace(connectionInfo);
            logger.info('Successfully connected to WebDAV workspace');
            
            this.dispatchEvent(new CustomEvent('connected', {
                bubbles: true,
                composed: true
            }));
        } catch (error) {
            if (error instanceof Error) {
                logger.error(`Connection failed: ${error.message}`);
            } else {
                logger.error('Failed to connect to WebDAV server');
            }
        } finally {
            this.connecting = false;
        }
    }

    private toggleHelp() {
        this.showHelp = !this.showHelp;
    }

    protected render() {
        return html`
            <style>
                .webdav-connect-dialog {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 500px;
                    padding: 1.5rem;
                }
                
                .webdav-connect-dialog h2 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }
                
                .form-buttons {
                    display: flex;
                    gap: 0.5rem;
                    justify-content: flex-end;
                    margin-top: 1rem;
                }
                
                .help-text {
                    background: var(--wa-color-neutral-50);
                    padding: 1rem;
                    border-radius: 4px;
                    font-size: 0.875rem;
                    margin-top: 1rem;
                }
                
                .help-text h3 {
                    margin-top: 0;
                    font-size: 1rem;
                }
                
                .help-text p {
                    margin: 0.5rem 0;
                }
                
                .help-text code {
                    display: block;
                    background: var(--wa-color-neutral-100);
                    padding: 0.5rem;
                    border-radius: 3px;
                    margin: 0.5rem 0;
                    font-family: monospace;
                    word-break: break-all;
                }
                
                .help-toggle {
                    cursor: pointer;
                    color: var(--wa-color-primary-600);
                    font-size: 0.875rem;
                    text-decoration: underline;
                }
            </style>
            
            <div class="webdav-connect-dialog">
                <h2>
                    <wa-icon name="cloud" label="WebDAV"></wa-icon>
                    Connect to WebDAV Folder
                </h2>
                
                <wa-input
                    label="WebDAV URL"
                    placeholder="https://cloud.example.com/remote.php/dav/files/username/"
                    .value=${this.url}
                    @input=${(e: Event) => this.url = (e.target as any).value}
                    required
                    help-text="The full WebDAV endpoint URL">
                </wa-input>
                
                <wa-input
                    label="Username (optional)"
                    placeholder="username"
                    .value=${this.username}
                    @input=${(e: Event) => this.username = (e.target as any).value}
                    help-text="Leave empty for public/shared folders">
                </wa-input>
                
                <wa-input
                    type="password"
                    label="Password (optional)"
                    placeholder="Password or App Password"
                    .value=${this.password}
                    @input=${(e: Event) => this.password = (e.target as any).value}
                    help-text="Leave empty for public/shared folders. Use an app password if 2FA is enabled">
                </wa-input>
                
                <div class="form-buttons">
                    <wa-button
                        appearance="outline"
                        @click=${this.toggleHelp}>
                        <wa-icon name="circle-info" slot="start"></wa-icon>
                        ${this.showHelp ? 'Hide' : 'Show'} Help
                    </wa-button>
                    
                    <wa-button
                        appearance="primary"
                        @click=${this.handleConnect}
                        ?disabled=${this.connecting || !this.url}>
                        <wa-icon name="${this.connecting ? 'spinner' : 'plug'}" slot="start"></wa-icon>
                        ${this.connecting ? 'Connecting...' : 'Connect'}
                    </wa-button>
                </div>
                
                ${this.showHelp ? html`
                    <div class="help-text">
                        <h3>WebDAV Connection Help</h3>
                        
                        <p><strong>Public/Shared Folders:</strong></p>
                        <p>For publicly shared WebDAV folders, just enter the URL and leave username/password empty.</p>
                        
                        <p><strong>Nextcloud Public Shares:</strong></p>
                        <p>For Nextcloud public shares (e.g., https://cloud.example.com/s/TOKEN):</p>
                        <ul>
                            <li><strong>URL:</strong> https://your-cloud.com/public.php/webdav/</li>
                            <li><strong>Username:</strong> The share token (the part after /s/)</li>
                            <li><strong>Password:</strong> Leave empty (or enter share password if protected)</li>
                        </ul>
                        <p><em>Tip: Use the "Connect to Nextcloud Public Share" command for easier setup!</em></p>
                        
                        <p><strong>Nextcloud Personal Files:</strong></p>
                        <p>Your WebDAV URL should look like:</p>
                        <code>https://your-cloud.com/remote.php/dav/files/USERNAME/</code>
                        
                        <p><strong>ownCloud:</strong></p>
                        <code>https://your-owncloud.com/remote.php/dav/files/USERNAME/</code>
                        
                        <p><strong>Two-Factor Authentication:</strong></p>
                        <p>If you have 2FA enabled:</p>
                        <ol>
                            <li>Go to your account settings</li>
                            <li>Find "Security" or "App passwords"</li>
                            <li>Generate a new app password</li>
                            <li>Use that password here instead of your regular password</li>
                        </ol>
                        
                        <p><strong>CORS Issues:</strong></p>
                        <p>If connection fails, your WebDAV server may need CORS configuration. 
                        Contact your administrator or check the server documentation.</p>
                        
                        <p><strong>Note:</strong> Your credentials (if provided) will be stored securely in your browser's storage.</p>
                    </div>
                ` : ''}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'k-webdav-connect': KWebDAVConnect;
    }
}

