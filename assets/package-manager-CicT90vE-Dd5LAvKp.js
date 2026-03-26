import{w as e}from"./dist-XDM-k8NY.js";import{I as t,L as n,N as r,P as i,Q as a,U as o,r as s,t as c}from"./repeat-D7ZcYN9W.js";import{p as l}from"./fs-access-BzDvih72-DkSEMJDg.js";var u=class extends n{constructor(...e){super(...e),this.open=!1,this.packages=[],this.loadingPackages=!1}configure(e){this.packages=e.packages||[],this.pyenv=e.pyenv,this.onPackageAdded=e.onPackageAdded,this.onPackageRemoved=e.onPackageRemoved}show(){this.open=!0}hide(){this.open=!1}addPackage(e){if(!e||e.trim()===``)return;let t=e.trim();this.packages.includes(t)||(this.packages=[...this.packages,t],this.onPackageAdded?.(t))}removePackage(e){this.packages.indexOf(e)>-1&&(this.packages=this.packages.filter(t=>t!==e),this.onPackageRemoved?.(e))}async reloadPackages(){if(this.pyenv){this.loadingPackages=!0,this.packageLoadError=void 0;try{await this.pyenv.loadPackages(this.packages)}catch(e){this.packageLoadError=String(e)}finally{this.loadingPackages=!1}}}render(){let e;return o`
            <wa-dialog 
                label="Manage Required Packages" 
                ?open=${this.open}
                @wa-after-hide=${()=>{this.open=!1,this.dispatchEvent(new CustomEvent(`hide`,{bubbles:!0,composed:!0}))}}>
                <div class="package-manager">
                    <p class="package-manager-description">
                        Specify Python packages that should be automatically loaded when connecting to the kernel.
                    </p>

                    ${this.loadingPackages?o`
                        <wa-alert variant="primary" open>
                            <wa-icon slot="icon" name="circle-notch" library="fa" class="spinning"></wa-icon>
                            Loading packages...
                        </wa-alert>
                    `:``}

                    ${this.packageLoadError?o`
                        <wa-alert variant="danger" open closable @wa-after-hide=${()=>this.packageLoadError=void 0}>
                            <wa-icon slot="icon" name="exclamation-triangle"></wa-icon>
                            <strong>Package Load Error:</strong><br>
                            ${this.packageLoadError}
                        </wa-alert>
                    `:``}

                    <div class="package-input-group">
                        <wa-input 
                            placeholder="Package name (e.g., pandas, numpy)" 
                            ${s(t=>e=t)}
                            @keydown=${t=>{t.key===`Enter`&&e&&(this.addPackage(e.value),e.value=``)}}>
                            <wa-icon slot="prefix" name="box"></wa-icon>
                        </wa-input>
                        <wa-button 
                            @click=${()=>{e&&(this.addPackage(e.value),e.value=``)}}
                            variant="primary">
                            <wa-icon slot="prefix" name="plus"></wa-icon>
                            Add
                        </wa-button>
                    </div>

                    ${this.packages.length===0?o`
                        <div class="empty-state">
                            <wa-icon name="box" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                            <p>No packages configured</p>
                            <p style="font-size: 0.9rem; opacity: 0.7;">Add packages above to auto-load them when the kernel connects</p>
                        </div>
                    `:o`
                        <div class="package-list">
                            <div class="package-list-header">
                                <strong>Required Packages (${this.packages.length})</strong>
                            </div>
                            ${c(this.packages,e=>e,e=>o`
                                <div class="package-item">
                                    <wa-icon name="box" style="opacity: 0.5;"></wa-icon>
                                    <span class="package-name">${e}</span>
                                    <wa-button 
                                        size="small" 
                                        variant="text"
                                        @click=${()=>this.removePackage(e)}
                                        title="Remove package">
                                        <wa-icon name="xmark"></wa-icon>
                                    </wa-button>
                                </div>
                            `)}
                        </div>
                    `}
                </div>
                <div slot="footer" class="package-manager-footer">
                    ${this.pyenv&&this.packages.length>0?o`
                        <wa-button 
                            variant="default"
                            @click=${()=>this.reloadPackages()}
                            ?disabled=${this.loadingPackages}>
                            <wa-icon slot="prefix" name="arrows-rotate"></wa-icon>
                            Reload Packages
                        </wa-button>
                    `:``}
                    <wa-button 
                        variant="primary"
                        @click=${()=>this.hide()}>
                        Done
                    </wa-button>
                </div>
            </wa-dialog>
        `}static{this.styles=a`
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
    `}};e([i({type:Boolean})],u.prototype,`open`,void 0),e([i({type:Array})],u.prototype,`packages`,void 0),e([i({attribute:!1})],u.prototype,`pyenv`,void 0),e([r()],u.prototype,`loadingPackages`,void 0),e([r()],u.prototype,`packageLoadError`,void 0),u=e([t(`lyra-python-package-manager`)],u);var d=new class{showPackageManager(e){return this.managerInstance||(this.managerInstance=document.createElement(`lyra-python-package-manager`),document.body.appendChild(this.managerInstance)),this.managerInstance.configure(e),this.managerInstance.show(),this.managerInstance}getManager(){return this.managerInstance}};l.put(`pythonPackageManagerService`,d);export{d as t};