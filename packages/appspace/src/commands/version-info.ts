import { registerAll } from "../core/commandregistry";
import { html, render } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { marked } from "marked";
import { toastError } from "../core/toast";
import { appLoaderService, type ReleaseEntry } from "../core/apploader";
import { packageInfoService } from "../core/packageinfoservice";

registerAll({
    command: {
        "id": "show_version_info",
        "name": "Show Version Info",
        "description": "Shows application version information",
        "parameters": []
    },
    handler: {
        execute: async _context => {
            const app = appLoaderService.getCurrentApp();
            if (!app) {
                toastError("No app loaded");
                return;
            }

            const hasPackages = packageInfoService.hasPackages();
            const packagesTree = packageInfoService.renderTree();

            let dialogContainer: HTMLElement | null = null;
            const getDialogContainer = (): HTMLElement => {
                if (!dialogContainer) {
                    dialogContainer = document.getElementById('global-dialog-container') || document.createElement('div');
                    if (!dialogContainer.id) {
                        dialogContainer.id = 'global-dialog-container';
                        document.body.appendChild(dialogContainer);
                    }
                }
                return dialogContainer;
            };

            const cleanup = () => {
                if (dialogContainer) {
                    render(html``, dialogContainer);
                }
            };

            const renderReleaseContent = (releaseContent: string) => {
                const htmlContent = marked.parse(releaseContent, { async: false }) as string;
                return html`${unsafeHTML(htmlContent)}`;
            };

            let releases: ReleaseEntry[] = [];
            if (app.releaseHistory) {
                if (typeof app.releaseHistory === 'function') {
                    try {
                        releases = await app.releaseHistory();
                    } catch (error) {
                        console.error('Failed to load release history from app:', error);
                        releases = [];
                    }
                } else {
                    releases = app.releaseHistory;
                }
            }

            const isDev = app.version === '0.0.0';
            const currentIndex = releases.length > 0 ? releases.findIndex(r => r.tag_name === app.version) : -1;
            const startIndex = currentIndex >= 0 ? currentIndex : 0;
            let currentReleaseIndex = startIndex;

            const buildReleaseContent = (index: number) => {
                if (releases.length === 0) {
                    return "";
                }

                const release = releases[index];
                const isCurrentVersion = release.tag_name === app.version;

                let message = `**Version:** ${release.tag_name}`;
                if (isCurrentVersion) {
                    message += ` (Current)`;
                }
                message += `\n\n`;

                const publishDate = new Date(release.published_at).toLocaleDateString();
                message += `**Released:** ${publishDate}\n\n`;

                if (!isCurrentVersion) {
                    const cleanCurrent = app.version.replace(/^v/, '');
                    const cleanRelease = release.tag_name.replace(/^v/, '');
                    const currentParts = cleanCurrent.split('.').map(Number);
                    const releaseParts = cleanRelease.split('.').map(Number);
                    let isNewer = false;
                    for (let i = 0; i < Math.max(currentParts.length, releaseParts.length); i++) {
                        const current = currentParts[i] || 0;
                        const releasePart = releaseParts[i] || 0;
                        if (releasePart > current) {
                            isNewer = true;
                            break;
                        }
                        if (releasePart < current) {
                            break;
                        }
                    }
                    if (isNewer) {
                        message += `⚠️ **Update available - reload page to update**\n\n`;
                    }
                }

                if (release.body) {
                    message += `---\n\n${release.body}`;
                }

                return message;
            };

            const handleClose = () => {
                cleanup();
            };

            const handleAfterHide = () => {
                cleanup();
            };

            const updateDialog = (index: number) => {
                const releaseContent = buildReleaseContent(index);
                const hasNavigation = releases.length > 0;

                const template = html`
                    <wa-dialog 
                        label="About ${app.name} - ${app.version}"
                        open 
                        light-dismiss
                        style="--width: 600px;"
                        @wa-request-close=${handleClose}
                        @wa-after-hide=${handleAfterHide}
                    >
                        <style>
                            .dialog-content {
                                height: 600px;
                            }
                            
                            wa-tree-item > span small {
                                color: var(--wa-color-neutral-60);
                                font-size: 0.875em;
                                margin-left: 0.5rem;
                            }
                        </style>
                        <small>${app.description}</small>
                        <div class="dialog-content">
                            <wa-tab-group>
                                ${releases.length > 0 ? html`
                                    <wa-tab slot="nav" panel="release">Release History</wa-tab>
                                    <wa-tab-panel name="release">
                                        ${renderReleaseContent(releaseContent)}
                                    </wa-tab-panel>
                                ` : ''}
                                
                                ${hasPackages ? html`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${packagesTree}
                                    </wa-tab-panel>
                                ` : ''}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${hasNavigation ? html`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${index === releases.length - 1}
                                    @click=${() => {
                            if (index < releases.length - 1) {
                                currentReleaseIndex = index + 1;
                                updateDialog(currentReleaseIndex);
                            }
                        }}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${index === 0}
                                    @click=${() => {
                            if (index > 0) {
                                currentReleaseIndex = index - 1;
                                updateDialog(currentReleaseIndex);
                            }
                        }}
                                >
                                    Next →
                                </wa-button>
                            ` : ''}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;
                render(template, getDialogContainer());
            };

            updateDialog(startIndex);

            return new Promise<void>((resolve) => {
                const checkClosed = () => {
                    if (!dialogContainer?.querySelector('wa-dialog[open]')) {
                        resolve();
                    } else {
                        setTimeout(checkClosed, 100);
                    }
                };
                checkClosed();
            });
        }
    }
})

