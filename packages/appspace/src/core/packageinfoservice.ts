import { html, TemplateResult } from "lit";

export interface PackageInfo {
    name: string;
    version: string;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
}

class PackageInfoService {
    private packages: PackageInfo[] = [];

    addPackage(packageInfo: PackageInfo): void {
        this.packages.push(packageInfo);
    }

    hasPackages(): boolean {
        return this.packages.length > 0 && this.packages.some(pkg => 
            pkg.dependencies && Object.keys(pkg.dependencies).length > 0
        );
    }

    renderTree(): TemplateResult {
        if (this.packages.length === 0) {
            return html``;
        }

        return html`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(pkg => {
                    const deps = pkg.dependencies || {};
                    const depEntries = Object.entries(deps);
                    
                    if (depEntries.length === 0) {
                        return html``;
                    }
                    
                    return html`
                        <wa-tree-item expanded>
                            <span>${pkg.name}</span>
                            ${depEntries.map(([name, version]) => html`
                                <wa-tree-item>
                                    <span>${name} <small>${version}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `;
                })}
            </wa-tree>
        `;
    }
}

export const packageInfoService = new PackageInfoService();

