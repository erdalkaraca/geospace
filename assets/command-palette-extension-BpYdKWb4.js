import{e as p,c as h,x as i,a as f,r as l,t as g}from"./index-C4bFKT08.js";import{p as w,K as C,s as P}from"./main-fBGZ0jOV.js";var x=Object.defineProperty,v=Object.getOwnPropertyDescriptor,s=(e,t,a,r)=>{for(var n=r>1?void 0:r?v(t,a):t,m=e.length-1,d;m>=0;m--)(d=e[m])&&(n=(r?d(t,a,n):d(n))||n);return r&&n&&x(t,a,n),n};const u="commandpalette/open";let o=class extends C{constructor(){super(...arguments),this.inputValue="",this.filteredCommands=[],this.allCommands=[],this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={},this.isPaletteOpen=!1,this.inputRef=p(),this.dialogRef=p()}doBeforeUI(){this.commandRegistry=this.commandRegistry,this.updateCommandList()}async doInitUI(){P(u,()=>{this.openPalette()}),this.boundDocumentClickHandler=this.handleDocumentClick.bind(this),document.addEventListener("click",this.boundDocumentClickHandler)}handleDocumentClick(e){!this.isPaletteOpen&&!this.showParameterPrompt||setTimeout(()=>{const t=e.target;if(this.contains(t)||this.dialogRef.value&&this.dialogRef.value.contains(t))return;let a=t;for(;a;){if(a.tagName==="WA-DIALOG")return;a=a.parentElement}this.closePalette(),this.closeParameterPrompt()},0)}handleDialogClick(e){e.stopPropagation()}handleInputFocus(){requestAnimationFrame(()=>{this.isPaletteOpen=!0})}handleInputClick(e){e.stopPropagation(),this.isPaletteOpen=!0}handleInputMouseDown(e){e.stopPropagation()}updateCommandList(){if(!this.commandRegistry)return;const e=this.commandRegistry.listCommands({});this.allCommands=Object.values(e).filter(t=>t.id!=="commandpalette.open").map(t=>({id:t.id,name:t.name,description:t.description,icon:t.icon,keyBinding:t.keyBinding})),this.filteredCommands=[...this.allCommands]}togglePalette(){this.isPaletteOpen?this.closePalette():this.openPalette()}async openPalette(){this.inputValue="",this.updateCommandList(),this.showParameterPrompt=!1,this.isPaletteOpen=!0,await this.updateComplete,this.inputRef.value&&this.inputRef.value.focus()}closePalette(){this.isPaletteOpen=!1,this.inputValue="",this.showParameterPrompt=!1}handleInputChange(e){const t=e.target;this.inputValue=t.value,this.filterCommands()}filterCommands(){if(!this.inputValue.trim())this.filteredCommands=[...this.allCommands];else{const e=this.inputValue.toLowerCase();this.filteredCommands=this.allCommands.filter(t=>t.name.toLowerCase().includes(e)||t.id.toLowerCase().includes(e)||t.description&&t.description.toLowerCase().includes(e))}}handleKeyDown(e){e.key==="Escape"&&(e.preventDefault(),this.closePalette())}handleCommandClick(e,t){t&&(e.stopPropagation(),this.inputValue="",this.filterCommands(),this.runCommand(t))}handleContainerClick(e){e.stopPropagation()}runCommand(e){if(!e||!this.commandRegistry)return;const t=this.commandRegistry.getCommand(e.id);t?.parameters&&t.parameters.length>0?(this.selectedCommand=t,this.parameterValues={},this.showParameterPrompt=!0):this.executeCommandWithParams(e.id,{})}executeCommandWithParams(e,t){try{this.commandRegistry.execute(e,{params:t}),this.closePalette(),this.closeParameterPrompt()}catch(a){console.error("Failed to execute command:",a)}}closeParameterPrompt(){this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={}}handleParameterInput(e,t){this.parameterValues={...this.parameterValues,[e]:t}}executeWithParameters(){if(!this.selectedCommand)return;const e=this.selectedCommand.parameters?.filter(t=>t.required&&!this.parameterValues[t.name]).map(t=>t.name);if(e&&e.length>0){this.toastError&&this.toastError(`Missing required parameters: ${e.join(", ")}`);return}this.executeCommandWithParams(this.selectedCommand.id,this.parameterValues)}doClose(){this.boundDocumentClickHandler&&document.removeEventListener("click",this.boundDocumentClickHandler)}render(){return i`
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
                        <div class="command-item" @click=${t=>this.handleCommandClick(t,e)}>
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
                    ${this.selectedCommand.parameters?.map(e=>i`
                        <div class="parameter-field">
                            <wa-input
                                label="${e.name}${e.required?" *":""}"
                                hint=${e.description||""}
                                placeholder=${e.description||`Enter ${e.name}`}
                                .value=${this.parameterValues[e.name]||""}
                                @input=${t=>this.handleParameterInput(e.name,t.target.value)}
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
        `}};o.styles=f`
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
    `;s([l()],o.prototype,"inputValue",2);s([l()],o.prototype,"filteredCommands",2);s([l()],o.prototype,"allCommands",2);s([l()],o.prototype,"showParameterPrompt",2);s([l()],o.prototype,"selectedCommand",2);s([l()],o.prototype,"parameterValues",2);s([l()],o.prototype,"isPaletteOpen",2);o=s([g("k-command-palette")],o);const k=({contributionRegistry:e,commandRegistry:t,toastInfo:a,toastError:r,html:n,publish:m})=>{t.registerHandler("commandpalette.open",{execute:()=>{m(u,null)}}),t.registerCommand({id:"commandpalette.open",name:"Open Command Palette",description:"Opens the command palette to execute commands",icon:"terminal",keyBinding:"CTRL+SHIFT+P"});const d=(()=>{const c=document.createElement("k-command-palette");return c.commandRegistry=t,c.toastInfo=a,c.toastError=r,c})();e.registerContribution(w,{label:"Command Palette",icon:"terminal",html:()=>n`${d}`})};export{o as KCommandPalette,k as default};
