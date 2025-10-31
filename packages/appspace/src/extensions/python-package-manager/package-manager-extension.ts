import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ref } from "lit/directives/ref.js";
import { repeat } from "lit/directives/repeat.js";
import { PyEnv } from "../../core/pyservice";
import { rootContext } from "../../core/di";

export interface PackageManagerOptions {
    packages: string[];
    onPackageAdded?: (packageName: string) => void;
    onPackageRemoved?: (packageName: string) => void;
    pyenv?: PyEnv;
}

@customElement('k-python-package-manager')
export class KPythonPackageManager extends LitElement {
    @property({ type: Boolean })
    open: boolean = false;

    @property({ type: Array })
    packages: string[] = [];

    @property({ attribute: false })
    pyenv?: PyEnv;

    @state()
    private loadingPackages: boolean = false;

    @state()
    private packageLoadError?: string;

    private onPackageAdded?: (packageName: string) => void;
    private onPackageRemoved?: (packageName: string) => void;

    public configure(options: PackageManagerOptions) {
        this.packages = options.packages || [];
        this.pyenv = options.pyenv;
        this.onPackageAdded = options.onPackageAdded;
        this.onPackageRemoved = options.onPackageRemoved;
    }

    public show() {
        this.open = true;
    }

    public hide() {
        this.open = false;
    }

    private addPackage(packageName: string) {
        if (!packageName || packageName.trim() === '') return;

        const trimmedName = packageName.trim();
        if (!this.packages.includes(trimmedName)) {
            this.packages = [...this.packages, trimmedName];
            this.onPackageAdded?.(trimmedName);
        }
    }

    private removePackage(packageName: string) {
        const index = this.packages.indexOf(packageName);
        if (index > -1) {
            this.packages = this.packages.filter(pkg => pkg !== packageName);
            this.onPackageRemoved?.(packageName);
        }
    }

    private async reloadPackages() {
        if (!this.pyenv) return;

        this.loadingPackages = true;
        this.packageLoadError = undefined;

        try {
            await this.pyenv.loadPackages(this.packages);
        } catch (error) {
            this.packageLoadError = String(error);
        } finally {
            this.loadingPackages = false;
        }
    }

    render() {
        let newPackageInput: HTMLInputElement | undefined;

        return html`
            <wa-dialog 
                label="Manage Required Packages" 
                ?open=${this.open}
                @wa-after-hide=${() => {
                    this.open = false;
                    this.dispatchEvent(new CustomEvent('hide', { bubbles: true, composed: true }));
                }}>
                <div class="package-manager">
                    <p class="package-manager-description">
                        Specify Python packages that should be automatically loaded when connecting to the kernel.
                    </p>

                    ${this.loadingPackages ? html`
                        <wa-alert variant="primary" open>
                            <wa-icon slot="icon" name="circle-notch" library="fa" class="spinning"></wa-icon>
                            Loading packages...
                        </wa-alert>
                    ` : ''}

                    ${this.packageLoadError ? html`
                        <wa-alert variant="danger" open closable @wa-after-hide=${() => this.packageLoadError = undefined}>
                            <wa-icon slot="icon" name="exclamation-triangle"></wa-icon>
                            <strong>Package Load Error:</strong><br>
                            ${this.packageLoadError}
                        </wa-alert>
                    ` : ''}

                    <div class="package-input-group">
                        <wa-input 
                            placeholder="Package name (e.g., pandas, numpy)" 
                            ${ref((el: any) => newPackageInput = el)}
                            @keydown=${(e: KeyboardEvent) => {
                                if (e.key === 'Enter' && newPackageInput) {
                                    this.addPackage(newPackageInput.value);
                                    newPackageInput.value = '';
                                }
                            }}>
                            <wa-icon slot="prefix" name="box"></wa-icon>
                        </wa-input>
                        <wa-button 
                            @click=${() => {
                                if (newPackageInput) {
                                    this.addPackage(newPackageInput.value);
                                    newPackageInput.value = '';
                                }
                            }}
                            variant="primary">
                            <wa-icon slot="prefix" name="plus"></wa-icon>
                            Add
                        </wa-button>
                    </div>

                    ${this.packages.length === 0 ? html`
                        <div class="empty-state">
                            <wa-icon name="box" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                            <p>No packages configured</p>
                            <p style="font-size: 0.9rem; opacity: 0.7;">Add packages above to auto-load them when the kernel connects</p>
                        </div>
                    ` : html`
                        <div class="package-list">
                            <div class="package-list-header">
                                <strong>Required Packages (${this.packages.length})</strong>
                            </div>
                            ${repeat(this.packages, pkg => pkg, pkg => html`
                                <div class="package-item">
                                    <wa-icon name="box" style="opacity: 0.5;"></wa-icon>
                                    <span class="package-name">${pkg}</span>
                                    <wa-button 
                                        size="small" 
                                        variant="text"
                                        @click=${() => this.removePackage(pkg)}
                                        title="Remove package">
                                        <wa-icon name="xmark"></wa-icon>
                                    </wa-button>
                                </div>
                            `)}
                        </div>
                    `}
                </div>
                <div slot="footer" class="package-manager-footer">
                    ${this.pyenv && this.packages.length > 0 ? html`
                        <wa-button 
                            variant="default"
                            @click=${() => this.reloadPackages()}
                            ?disabled=${this.loadingPackages}>
                            <wa-icon slot="prefix" name="arrows-rotate"></wa-icon>
                            Reload Packages
                        </wa-button>
                    ` : ''}
                    <wa-button 
                        variant="primary"
                        @click=${() => this.hide()}>
                        Done
                    </wa-button>
                </div>
            </wa-dialog>
        `;
    }

    static styles = css`
        :host {
            display: contents;
        }

        .package-manager {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .package-manager-description {
            margin: 0;
            font-size: 0.95rem;
            opacity: 0.8;
            line-height: 1.5;
        }

        .package-input-group {
            display: flex;
            gap: 0.5rem;
        }

        .package-input-group wa-input {
            flex: 1;
        }

        .package-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 400px;
            overflow-y: auto;
        }

        .package-list-header {
            padding: 0.5rem;
            border-bottom: 1px solid var(--wa-color-outline);
            margin-bottom: 0.5rem;
        }

        .package-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            border-radius: 4px;
            background: var(--wa-color-surface-variant);
            transition: background 0.2s;
        }

        .package-item:hover {
            background: var(--wa-color-surface-container-highest);
        }

        .package-name {
            flex: 1;
            font-family: monospace;
            font-size: 0.95rem;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            padding: 3rem 1rem;
            text-align: center;
            opacity: 0.6;
        }

        .empty-state p {
            margin: 0;
        }

        .package-manager-footer {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            padding-top: 1rem;
            border-top: 1px solid var(--wa-color-outline);
        }

        .spinning {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;
}

class PythonPackageManagerService {
    private managerInstance?: KPythonPackageManager;

    public showPackageManager(options: PackageManagerOptions): KPythonPackageManager {
        if (!this.managerInstance) {
            this.managerInstance = document.createElement('k-python-package-manager') as KPythonPackageManager;
            document.body.appendChild(this.managerInstance);
        }

        this.managerInstance.configure(options);
        this.managerInstance.show();

        return this.managerInstance;
    }

    public getManager(): KPythonPackageManager | undefined {
        return this.managerInstance;
    }
}

export const pythonPackageManagerService = new PythonPackageManagerService();

export default ({ }: any) => {
    rootContext.put("pythonPackageManagerService", pythonPackageManagerService);
}

