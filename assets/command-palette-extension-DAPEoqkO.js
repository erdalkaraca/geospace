import{k as p,s as u,l as c,x as i,a as f,c as m,t as g}from"./index-BBymxG1x.js";import{g as C,e as P}from"./main-DJKOehCJ.js";var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,r=(t,e,a,l)=>{for(var o=l>1?void 0:l?x(e,a):e,d=t.length-1,s;d>=0;d--)(s=t[d])&&(o=(l?s(e,a,o):s(o))||o);return l&&o&&w(e,a,o),o};const h="commandpalette/open";let n=class extends P{constructor(){super(...arguments),this.inputValue="",this.filteredCommands=[],this.allCommands=[],this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={},this.isPaletteOpen=!1,this.inputRef=p(),this.dialogRef=p()}doBeforeUI(){this.commandRegistry=this.commandRegistry,this.updateCommandList()}async doInitUI(){u(h,()=>{this.openPalette()}),this.boundDocumentClickHandler=this.handleDocumentClick.bind(this),document.addEventListener("click",this.boundDocumentClickHandler)}handleDocumentClick(t){!this.isPaletteOpen&&!this.showParameterPrompt||setTimeout(()=>{const e=t.target;if(this.contains(e)||this.dialogRef.value&&this.dialogRef.value.contains(e))return;let a=e;for(;a;){if(a.tagName==="WA-DIALOG")return;a=a.parentElement}this.closePalette(),this.closeParameterPrompt()},0)}handleDialogClick(t){t.stopPropagation()}handleInputFocus(){requestAnimationFrame(()=>{this.isPaletteOpen=!0})}handleInputClick(t){t.stopPropagation(),this.isPaletteOpen=!0}handleInputMouseDown(t){t.stopPropagation()}updateCommandList(){if(!this.commandRegistry)return;const t=this.commandRegistry.listCommands({});this.allCommands=Object.values(t).filter(e=>e.id!=="commandpalette.open").map(e=>({id:e.id,name:e.name,description:e.description,icon:e.icon,keyBinding:e.keyBinding})),this.filteredCommands=[...this.allCommands]}togglePalette(){this.isPaletteOpen?this.closePalette():this.openPalette()}async openPalette(){this.inputValue="",this.updateCommandList(),this.showParameterPrompt=!1,this.isPaletteOpen=!0,await this.updateComplete,this.inputRef.value&&this.inputRef.value.focus()}closePalette(){this.isPaletteOpen=!1,this.inputValue="",this.showParameterPrompt=!1}handleInputChange(t){const e=t.target;this.inputValue=e.value,this.filterCommands()}filterCommands(){if(!this.inputValue.trim())this.filteredCommands=[...this.allCommands];else{const t=this.inputValue.toLowerCase();this.filteredCommands=this.allCommands.filter(e=>e.name.toLowerCase().includes(t)||e.id.toLowerCase().includes(t)||e.description&&e.description.toLowerCase().includes(t))}}handleKeyDown(t){t.key==="Escape"&&(t.preventDefault(),this.closePalette())}handleCommandClick(t,e){e&&(t.stopPropagation(),this.inputValue="",this.filterCommands(),this.runCommand(e))}handleContainerClick(t){t.stopPropagation()}runCommand(t){if(!t||!this.commandRegistry)return;const e=this.commandRegistry.getCommand(t.id);(e==null?void 0:e.parameters)&&e.parameters.length>0?(this.selectedCommand=e,this.parameterValues={},this.showParameterPrompt=!0):this.executeCommandWithParams(t.id,{})}executeCommandWithParams(t,e){try{this.commandRegistry.execute(t,{params:e}),this.closePalette(),this.closeParameterPrompt()}catch(a){console.error("Failed to execute command:",a)}}closeParameterPrompt(){this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={}}handleParameterInput(t,e){this.parameterValues={...this.parameterValues,[t]:e}}executeWithParameters(){var e;if(!this.selectedCommand)return;const t=(e=this.selectedCommand.parameters)==null?void 0:e.filter(a=>a.required&&!this.parameterValues[a.name]).map(a=>a.name);if(t&&t.length>0){this.toastError&&this.toastError(`Missing required parameters: ${t.join(", ")}`);return}this.executeCommandWithParams(this.selectedCommand.id,this.parameterValues)}doClose(){this.boundDocumentClickHandler&&document.removeEventListener("click",this.boundDocumentClickHandler)}render(){var t;return i`
            <wa-input
                ${c(this.inputRef)}
                placeholder="Type a command name..."
                .value=${this.inputValue}
                @input=${this.handleInputChange}
                @keydown=${this.handleKeyDown}
                @focus=${this.handleInputFocus}
                @click=${this.handleInputClick}
                @mousedown=${this.handleInputMouseDown}
                autocomplete="off"
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
                    ${c(this.dialogRef)}
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
        `}};n.styles=f`
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
            background: var(--wa-color-neutral-900);
            border: 1px solid var(--wa-color-neutral-700);
            border-radius: 4px;
            max-height: 400px;
            overflow-y: auto;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            display: none;
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
            border-bottom: 1px solid var(--wa-color-neutral-800);
        }

        .command-item:last-child {
            border-bottom: none;
        }

        .command-item:hover {
            background: var(--wa-color-neutral-800);
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
            background: var(--wa-color-neutral-800);
            border: 1px solid var(--wa-color-neutral-700);
            border-radius: 3px;
            font-size: 11px;
            font-family: monospace;
            opacity: 0.7;
        }

        .no-results {
            padding: 20px;
            text-align: center;
            color: var(--wa-color-neutral-400);
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
    `;r([m()],n.prototype,"inputValue",2);r([m()],n.prototype,"filteredCommands",2);r([m()],n.prototype,"allCommands",2);r([m()],n.prototype,"showParameterPrompt",2);r([m()],n.prototype,"selectedCommand",2);r([m()],n.prototype,"parameterValues",2);r([m()],n.prototype,"isPaletteOpen",2);n=r([g("k-command-palette")],n);const b=({contributionRegistry:t,commandRegistry:e,toastInfo:a,toastError:l,html:o,publish:d})=>{e.registerHandler("commandpalette.open",{execute:()=>{d(h,null)}}),e.registerCommand({id:"commandpalette.open",name:"Open Command Palette",description:"Opens the command palette to execute commands",icon:"terminal",keyBinding:"CTRL+SHIFT+P"}),t.registerContribution(C,{label:"Command Palette",icon:"terminal",html:()=>{const s=document.createElement("k-command-palette");return s.commandRegistry=e,s.toastInfo=a,s.toastError=l,o`${s}`}})};export{n as KCommandPalette,b as default};
