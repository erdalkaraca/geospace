import{e as p,s as f,f as h,x as i,b as g,d as l,t as w}from"./index-CNuu7pZ0.js";import{h as C,f as P}from"./main-GT0Tb3r4.js";var x=Object.defineProperty,v=Object.getOwnPropertyDescriptor,s=(t,e,a,r)=>{for(var n=r>1?void 0:r?v(e,a):e,m=t.length-1,d;m>=0;m--)(d=t[m])&&(n=(r?d(e,a,n):d(n))||n);return r&&n&&x(e,a,n),n};const u="commandpalette/open";let o=class extends P{constructor(){super(...arguments),this.inputValue="",this.filteredCommands=[],this.allCommands=[],this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={},this.isPaletteOpen=!1,this.inputRef=p(),this.dialogRef=p()}doBeforeUI(){this.commandRegistry=this.commandRegistry,this.updateCommandList()}async doInitUI(){f(u,()=>{this.openPalette()}),this.boundDocumentClickHandler=this.handleDocumentClick.bind(this),document.addEventListener("click",this.boundDocumentClickHandler)}handleDocumentClick(t){!this.isPaletteOpen&&!this.showParameterPrompt||setTimeout(()=>{const e=t.target;if(this.contains(e)||this.dialogRef.value&&this.dialogRef.value.contains(e))return;let a=e;for(;a;){if(a.tagName==="WA-DIALOG")return;a=a.parentElement}this.closePalette(),this.closeParameterPrompt()},0)}handleDialogClick(t){t.stopPropagation()}handleInputFocus(){requestAnimationFrame(()=>{this.isPaletteOpen=!0})}handleInputClick(t){t.stopPropagation(),this.isPaletteOpen=!0}handleInputMouseDown(t){t.stopPropagation()}updateCommandList(){if(!this.commandRegistry)return;const t=this.commandRegistry.listCommands({});this.allCommands=Object.values(t).filter(e=>e.id!=="commandpalette.open").map(e=>({id:e.id,name:e.name,description:e.description,icon:e.icon,keyBinding:e.keyBinding})),this.filteredCommands=[...this.allCommands]}togglePalette(){this.isPaletteOpen?this.closePalette():this.openPalette()}async openPalette(){this.inputValue="",this.updateCommandList(),this.showParameterPrompt=!1,this.isPaletteOpen=!0,await this.updateComplete,this.inputRef.value&&this.inputRef.value.focus()}closePalette(){this.isPaletteOpen=!1,this.inputValue="",this.showParameterPrompt=!1}handleInputChange(t){const e=t.target;this.inputValue=e.value,this.filterCommands()}filterCommands(){if(!this.inputValue.trim())this.filteredCommands=[...this.allCommands];else{const t=this.inputValue.toLowerCase();this.filteredCommands=this.allCommands.filter(e=>e.name.toLowerCase().includes(t)||e.id.toLowerCase().includes(t)||e.description&&e.description.toLowerCase().includes(t))}}handleKeyDown(t){t.key==="Escape"&&(t.preventDefault(),this.closePalette())}handleCommandClick(t,e){e&&(t.stopPropagation(),this.inputValue="",this.filterCommands(),this.runCommand(e))}handleContainerClick(t){t.stopPropagation()}runCommand(t){if(!t||!this.commandRegistry)return;const e=this.commandRegistry.getCommand(t.id);(e==null?void 0:e.parameters)&&e.parameters.length>0?(this.selectedCommand=e,this.parameterValues={},this.showParameterPrompt=!0):this.executeCommandWithParams(t.id,{})}executeCommandWithParams(t,e){try{this.commandRegistry.execute(t,{params:e}),this.closePalette(),this.closeParameterPrompt()}catch(a){console.error("Failed to execute command:",a)}}closeParameterPrompt(){this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={}}handleParameterInput(t,e){this.parameterValues={...this.parameterValues,[t]:e}}executeWithParameters(){var e;if(!this.selectedCommand)return;const t=(e=this.selectedCommand.parameters)==null?void 0:e.filter(a=>a.required&&!this.parameterValues[a.name]).map(a=>a.name);if(t&&t.length>0){this.toastError&&this.toastError(`Missing required parameters: ${t.join(", ")}`);return}this.executeCommandWithParams(this.selectedCommand.id,this.parameterValues)}doClose(){this.boundDocumentClickHandler&&document.removeEventListener("click",this.boundDocumentClickHandler)}render(){var t;return i`
            <wa-input
                ${h(this.inputRef)}
                placeholder="Type a command name..."
                .value=${this.inputValue}
                @input=${this.handleInputChange}
                @keydown=${this.handleKeyDown}
                @focus=${this.handleInputFocus}
                @click=${this.handleInputClick}
                @mousedown=${this.handleInputMouseDown}
                autocomplete="off"
                size="small"
            >
                <wa-icon slot="start" name="terminal" label="Terminal"></wa-icon>
            </wa-input>

            <div class="commands-container ${this.isPaletteOpen?"open":""}" @click=${this.handleContainerClick}>
                ${this.filteredCommands.length>0?i`
                    ${this.filteredCommands.map(e=>i`
                        <div class="command-item" @click=${a=>this.handleCommandClick(a,e)}>
                            ${e.icon?i`
                                <div class="command-icon">
                                    <wa-icon name="${e.icon}" label="${e.name}"></wa-icon>
                                </div>
                            `:i`
                                <div class="command-icon">
                                    <wa-icon name="terminal" label="Command"></wa-icon>
                                </div>
                            `}
                            <div class="command-info">
                                <div class="command-name">${e.name}</div>
                                <div class="command-id">${e.id}</div>
                                ${e.description?i`
                                    <div class="command-description">${e.description}</div>
                                `:""}
                            </div>
                            ${e.keyBinding?i`
                                <div class="command-keybinding">${e.keyBinding}</div>
                            `:""}
                        </div>
                    `)}
                `:i`
                    <div class="no-results">
                        <wa-icon name="search" label="No results" style="font-size: 24px; margin-bottom: 4px; opacity: 0.3;"></wa-icon>
                        <div>No commands found</div>
                    </div>
                `}
            </div>

            ${this.showParameterPrompt&&this.selectedCommand?i`
                <wa-dialog 
                    ${h(this.dialogRef)}
                    label="${this.selectedCommand.name} - Parameters"
                    open
                    @wa-request-close=${this.closeParameterPrompt}
                    @click=${this.handleDialogClick}
                >
                    <div class="parameter-prompt-title">
                        Enter parameters for ${this.selectedCommand.name}
                    </div>
                    ${(t=this.selectedCommand.parameters)==null?void 0:t.map(e=>i`
                        <div class="parameter-field">
                            <wa-input
                                label="${e.name}${e.required?" *":""}"
                                hint=${e.description||""}
                                placeholder=${e.description||`Enter ${e.name}`}
                                .value=${this.parameterValues[e.name]||""}
                                @input=${a=>this.handleParameterInput(e.name,a.target.value)}
                            ></wa-input>
                        </div>
                    `)}
                    <div class="parameter-actions">
                        <wa-button variant="default" @click=${this.closeParameterPrompt}>
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click=${this.executeWithParameters}>
                            Execute
                        </wa-button>
                    </div>
                </wa-dialog>
            `:""}
        `}};o.styles=g`
        :host {
            display: block;
            width: 100%;
            max-width: 600px;
            position: relative;
        }

        wa-input {
            max-width: 300px;
        }

        .commands-container {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            margin-top: 4px;
            background: var(--wa-color-neutral-05);
            border: 1px solid var(--wa-color-neutral-25);
            border-radius: 4px;
            max-height: 400px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);
            display: none;
        }

        :host-context(.wa-light) .commands-container {
            background: var(--wa-color-neutral-95);
            border: 1px solid var(--wa-color-neutral-75);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .commands-container.open {
            display: block;
        }

        .command-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 16px;
            cursor: pointer;
            transition: background-color 0.15s;
            border-bottom: 1px solid var(--wa-color-neutral-15);
        }

        :host-context(.wa-light) .command-item {
            border-bottom: 1px solid var(--wa-color-neutral-85);
        }

        .command-item:last-child {
            border-bottom: none;
        }

        .command-item:hover {
            background: var(--wa-color-neutral-20);
        }

        :host-context(.wa-light) .command-item:hover {
            background: var(--wa-color-neutral-80);
        }

        .command-icon {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.7;
        }

        .command-info {
            flex: 1;
            min-width: 0;
        }

        .command-name {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 2px;
        }

        .command-id {
            font-size: 11px;
            opacity: 0.5;
            font-family: monospace;
            margin-bottom: 2px;
        }

        .command-description {
            font-size: 12px;
            opacity: 0.7;
        }

        .command-keybinding {
            flex-shrink: 0;
            margin-left: auto;
            padding: 2px 8px;
            background: var(--wa-color-neutral-15);
            border: 1px solid var(--wa-color-neutral-25);
            border-radius: 3px;
            font-size: 11px;
            font-family: monospace;
            opacity: 0.7;
        }

        :host-context(.wa-light) .command-keybinding {
            background: var(--wa-color-neutral-85);
            border: 1px solid var(--wa-color-neutral-75);
        }

        .no-results {
            padding: 20px;
            text-align: center;
            color: var(--wa-color-neutral-60);
        }

        :host-context(.wa-light) .no-results {
            color: var(--wa-color-neutral-40);
        }

        wa-dialog::part(panel) {
            max-width: 600px;
            width: 90vw;
        }

        wa-dialog::part(body) {
            padding: 20px;
        }

        .parameter-prompt-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .parameter-field {
            margin-bottom: 12px;
        }

        .parameter-field wa-input {
            width: 100%;
        }

        .parameter-actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            margin-top: 20px;
        }
    `;s([l()],o.prototype,"inputValue",2);s([l()],o.prototype,"filteredCommands",2);s([l()],o.prototype,"allCommands",2);s([l()],o.prototype,"showParameterPrompt",2);s([l()],o.prototype,"selectedCommand",2);s([l()],o.prototype,"parameterValues",2);s([l()],o.prototype,"isPaletteOpen",2);o=s([w("k-command-palette")],o);const k=({contributionRegistry:t,commandRegistry:e,toastInfo:a,toastError:r,html:n,publish:m})=>{e.registerHandler("commandpalette.open",{execute:()=>{m(u,null)}}),e.registerCommand({id:"commandpalette.open",name:"Open Command Palette",description:"Opens the command palette to execute commands",icon:"terminal",keyBinding:"CTRL+SHIFT+P"});const d=(()=>{const c=document.createElement("k-command-palette");return c.commandRegistry=e,c.toastInfo=a,c.toastError=r,c})();t.registerContribution(C,{label:"Command Palette",icon:"terminal",html:()=>n`${d}`})};export{o as KCommandPalette,k as default};
