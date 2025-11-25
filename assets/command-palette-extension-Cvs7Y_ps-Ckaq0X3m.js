import{z as P,A as u,at as E,a4 as p,au as g,X as C,x as o,av as x,aw as w,Z as v,a1 as m,a0 as b}from"./index-Bz1SaEj3.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.LTSJC6DR-BCCP1Gxs.js";const A="commandpalette",N={PLACEHOLDER:"Type a command name...",NO_COMMANDS_FOUND:"No commands found",PARAMETERS:"Parameters",ENTER_PARAMETERS:"Enter parameters for {commandName}",CANCEL:"Cancel",EXECUTE:"Execute",OPEN_COMMAND_PALETTE:"Open Command Palette",OPEN_COMMAND_PALETTE_DESC:"Opens the command palette to execute commands",MISSING_REQUIRED_PARAMS:"Missing required parameters: {params}",ENTER_PARAM:"Enter {paramName}"},_={PLACEHOLDER:"Befehlsname eingeben...",NO_COMMANDS_FOUND:"Keine Befehle gefunden",PARAMETERS:"Parameter",ENTER_PARAMETERS:"Parameter für {commandName} eingeben",CANCEL:"Abbrechen",EXECUTE:"Ausführen",OPEN_COMMAND_PALETTE:"Befehls-Palette öffnen",OPEN_COMMAND_PALETTE_DESC:"Öffnet die Befehls-Palette zum Ausführen von Befehlen",MISSING_REQUIRED_PARAMS:"Erforderliche Parameter fehlen: {params}",ENTER_PARAM:"{paramName} eingeben"},O={namespace:A,en:N,de:_};var y=Object.defineProperty,R=Object.getOwnPropertyDescriptor,r=(e,t,a,l)=>{for(var s=l>1?void 0:l?R(t,a):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(s=(l?c(t,a,s):c(s))||s);return l&&s&&y(t,a,s),s};const n=g("commandpalette"),f="commandpalette/open";let i=class extends P{constructor(){super(...arguments),this.inputValue="",this.filteredCommands=[],this.allCommands=[],this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={},this.isPaletteOpen=!1,this.inputRef=u(),this.dialogRef=u()}async doInitUI(){E(f,()=>{this.openPalette()}),this.boundDocumentClickHandler=this.handleDocumentClick.bind(this),document.addEventListener("click",this.boundDocumentClickHandler)}async handleDocumentClick(e){if(!this.isPaletteOpen&&!this.showParameterPrompt)return;await this.updateComplete;const t=e.target;if(this.contains(t)||this.dialogRef.value&&this.dialogRef.value.contains(t))return;let a=t;for(;a;){if(a.tagName==="WA-DIALOG")return;a=a.parentElement}this.closePalette(),this.closeParameterPrompt()}handleDialogClick(e){e.stopPropagation()}handleInputFocus(){requestAnimationFrame(()=>{this.isPaletteOpen=!0})}handleInputClick(e){e.stopPropagation(),this.openPalette()}handleInputMouseDown(e){e.stopPropagation()}updateCommandList(){const e=p.listCommands(this.executionContext||{});this.allCommands=Object.values(e).filter(t=>t.id!=="commandpalette.open").map(t=>({id:t.id,name:t.name,description:t.description,icon:t.icon,keyBinding:t.keyBinding})),this.filteredCommands=[...this.allCommands]}async openPalette(){this.executionContext=p.createExecutionContext(),this.inputValue="",this.updateCommandList(),this.showParameterPrompt=!1,this.isPaletteOpen=!0,await this.updateComplete,this.inputRef.value&&this.inputRef.value.focus()}closePalette(){this.isPaletteOpen=!1,this.inputValue="",this.showParameterPrompt=!1,this.executionContext=void 0}handleInputChange(e){const t=e.target;this.inputValue=t.value,this.filterCommands()}filterCommands(){if(!this.inputValue.trim())this.filteredCommands=[...this.allCommands];else{const e=this.inputValue.toLowerCase();this.filteredCommands=this.allCommands.filter(t=>t.name.toLowerCase().includes(e)||t.id.toLowerCase().includes(e)||t.description&&t.description.toLowerCase().includes(e))}}handleKeyDown(e){e.key==="Escape"&&(e.preventDefault(),this.closePalette())}handleCommandClick(e,t){t&&(e.stopPropagation(),this.inputValue="",this.filterCommands(),this.runCommand(t))}handleContainerClick(e){e.stopPropagation()}runCommand(e){if(!e||!p)return;const t=p.getCommand(e.id);t?.parameters&&t.parameters.length>0?(this.selectedCommand=t,this.parameterValues={},this.showParameterPrompt=!0):this.executeCommandWithParams(e.id,{})}executeCommandWithParams(e,t){try{p.execute(e,{...this.executionContext||{},params:t}),this.closePalette(),this.closeParameterPrompt()}catch(a){console.error("Failed to execute command:",a)}}closeParameterPrompt(){this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={}}handleParameterInput(e,t){this.parameterValues={...this.parameterValues,[e]:t}}executeWithParameters(){if(!this.selectedCommand)return;const e=this.selectedCommand.parameters?.filter(t=>t.required&&!this.parameterValues[t.name]).map(t=>t.name);if(e&&e.length>0){this.toastError&&this.toastError(n("MISSING_REQUIRED_PARAMS",{params:e.join(", ")}));return}this.executeCommandWithParams(this.selectedCommand.id,this.parameterValues)}doClose(){this.boundDocumentClickHandler&&document.removeEventListener("click",this.boundDocumentClickHandler)}render(){return o`
            <wa-input
                ${C(this.inputRef)}
                placeholder="${n("PLACEHOLDER")}"
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
                ${this.filteredCommands.length>0?o`
                    ${this.filteredCommands.map(e=>o`
                        <div class="command-item" @click=${t=>this.handleCommandClick(t,e)}>
                            ${e.icon?o`
                                <div class="command-icon">
                                    <wa-icon name="${e.icon}" label="${e.name}"></wa-icon>
                                </div>
                            `:o`
                                <div class="command-icon">
                                    <wa-icon name="terminal" label="Command"></wa-icon>
                                </div>
                            `}
                            <div class="command-info">
                                <div class="command-name">${e.name}</div>
                                <div class="command-id">${e.id}</div>
                                ${e.description?o`
                                    <div class="command-description">${e.description}</div>
                                `:""}
                            </div>
                            ${e.keyBinding?o`
                                <div class="command-keybinding">${e.keyBinding}</div>
                            `:""}
                        </div>
                    `)}
                `:o`
                    <div class="no-results">
                        <wa-icon name="search" label="${n("NO_COMMANDS_FOUND")}" style="font-size: 24px; margin-bottom: 4px; opacity: 0.3;"></wa-icon>
                        <div>${n("NO_COMMANDS_FOUND")}</div>
                    </div>
                `}
            </div>

            ${this.showParameterPrompt&&this.selectedCommand?o`
                <wa-dialog 
                    ${C(this.dialogRef)}
                    label="${this.selectedCommand.name} - ${n("PARAMETERS")}"
                    open
                    @wa-request-close=${this.closeParameterPrompt}
                    @click=${this.handleDialogClick}
                >
                    <div class="parameter-prompt-title">
                        ${n("ENTER_PARAMETERS",{commandName:this.selectedCommand.name})}
                    </div>
                    ${this.selectedCommand.parameters?.map(e=>o`
                        <div class="parameter-field">
                            <wa-input
                                label="${e.name}${e.required?" *":""}"
                                hint=${e.description||""}
                                placeholder=${e.description||n("ENTER_PARAM",{paramName:e.name})}
                                .value=${this.parameterValues[e.name]||""}
                                @input=${t=>this.handleParameterInput(e.name,t.target.value)}
                            ></wa-input>
                        </div>
                    `)}
                    <div class="parameter-actions">
                        <wa-button variant="default" @click=${this.closeParameterPrompt}>
                            ${n("CANCEL")}
                        </wa-button>
                        <wa-button variant="primary" @click=${this.executeWithParameters}>
                            ${n("EXECUTE")}
                        </wa-button>
                    </div>
                </wa-dialog>
            `:""}
        `}};i.styles=v`
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
    `;r([m()],i.prototype,"inputValue",2);r([m()],i.prototype,"filteredCommands",2);r([m()],i.prototype,"allCommands",2);r([m()],i.prototype,"showParameterPrompt",2);r([m()],i.prototype,"selectedCommand",2);r([m()],i.prototype,"parameterValues",2);r([m()],i.prototype,"isPaletteOpen",2);i=r([b("k-command-palette")],i);const k=({contributionRegistry:e,commandRegistry:t,toastInfo:a,toastError:l,html:s,publish:d})=>{e.registerContribution(x,O),t.registerHandler("commandpalette.open",{execute:()=>{d(f,null)}}),t.registerCommand({id:"commandpalette.open",name:n("OPEN_COMMAND_PALETTE"),description:n("OPEN_COMMAND_PALETTE_DESC"),icon:"terminal",keyBinding:"CTRL+SHIFT+P"});const c=(()=>{const h=document.createElement("k-command-palette");return h.commandRegistry=t,h.toastInfo=a,h.toastError=l,h})();e.registerContribution(w,{label:"Command Palette",icon:"terminal",html:()=>s`${c}`})};export{i as KCommandPalette,k as default};
