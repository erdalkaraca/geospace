import{i as d,d as m,x as o,a as h,n as g,r as l,t as k}from"./index-D0ONUd71.js";import{r as u,i as f}from"./main-ZIq_vygL.js";var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,s=(a,e,t,r)=>{for(var i=r>1?void 0:r?v(e,t):e,c=a.length-1,p;c>=0;c--)(p=a[c])&&(i=(r?p(e,t,i):p(i))||i);return r&&i&&y(e,t,i),i};let n=class extends d{constructor(){super(...arguments),this.open=!1,this.packages=[],this.loadingPackages=!1}configure(a){this.packages=a.packages||[],this.pyenv=a.pyenv,this.onPackageAdded=a.onPackageAdded,this.onPackageRemoved=a.onPackageRemoved}show(){this.open=!0}hide(){this.open=!1}addPackage(a){var t;if(!a||a.trim()==="")return;const e=a.trim();this.packages.includes(e)||(this.packages=[...this.packages,e],(t=this.onPackageAdded)==null||t.call(this,e))}removePackage(a){var t;this.packages.indexOf(a)>-1&&(this.packages=this.packages.filter(r=>r!==a),(t=this.onPackageRemoved)==null||t.call(this,a))}async reloadPackages(){if(this.pyenv){this.loadingPackages=!0,this.packageLoadError=void 0;try{await this.pyenv.loadPackages(this.packages)}catch(a){this.packageLoadError=String(a)}finally{this.loadingPackages=!1}}}render(){let a;return o`
            <wa-dialog 
                label="Manage Required Packages" 
                ?open=${this.open}
                @wa-after-hide=${()=>{this.open=!1,this.dispatchEvent(new CustomEvent("hide",{bubbles:!0,composed:!0}))}}>
                <div class="package-manager">
                    <p class="package-manager-description">
                        Specify Python packages that should be automatically loaded when connecting to the kernel.
                    </p>

                    ${this.loadingPackages?o`
                        <wa-alert variant="primary" open>
                            <wa-icon slot="icon" name="circle-notch" library="fa" class="spinning"></wa-icon>
                            Loading packages...
                        </wa-alert>
                    `:""}

                    ${this.packageLoadError?o`
                        <wa-alert variant="danger" open closable @wa-after-hide=${()=>this.packageLoadError=void 0}>
                            <wa-icon slot="icon" name="exclamation-triangle"></wa-icon>
                            <strong>Package Load Error:</strong><br>
                            ${this.packageLoadError}
                        </wa-alert>
                    `:""}

                    <div class="package-input-group">
                        <wa-input 
                            placeholder="Package name (e.g., pandas, numpy)" 
                            ${m(e=>a=e)}
                            @keydown=${e=>{e.key==="Enter"&&a&&(this.addPackage(a.value),a.value="")}}>
                            <wa-icon slot="prefix" name="box"></wa-icon>
                        </wa-input>
                        <wa-button 
                            @click=${()=>{a&&(this.addPackage(a.value),a.value="")}}
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
                            ${f(this.packages,e=>e,e=>o`
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
                    `:""}
                    <wa-button 
                        variant="primary"
                        @click=${()=>this.hide()}>
                        Done
                    </wa-button>
                </div>
            </wa-dialog>
        `}};n.styles=h`
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
    `;s([g({type:Boolean})],n.prototype,"open",2);s([g({type:Array})],n.prototype,"packages",2);s([g({attribute:!1})],n.prototype,"pyenv",2);s([l()],n.prototype,"loadingPackages",2);s([l()],n.prototype,"packageLoadError",2);n=s([k("k-python-package-manager")],n);class w{showPackageManager(e){return this.managerInstance||(this.managerInstance=document.createElement("k-python-package-manager"),document.body.appendChild(this.managerInstance)),this.managerInstance.configure(e),this.managerInstance.show(),this.managerInstance}getManager(){return this.managerInstance}}const P=new w,$=({})=>{u.put("pythonPackageManagerService",P)};export{n as KPythonPackageManager,$ as default,P as pythonPackageManagerService};
