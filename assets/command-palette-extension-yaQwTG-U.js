import{e as p,s as u,d as c,x as o,a as f,c as m,t as x}from"./index-CWmBQ8ze.js";import{f as g,e as v}from"./main-ra-59-xe.js";var w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,l=(t,e,a,i)=>{for(var n=i>1?void 0:i?C(e,a):e,d=t.length-1,r;d>=0;d--)(r=t[d])&&(n=(i?r(e,a,n):r(n))||n);return i&&n&&w(e,a,n),n};const h="commandpalette/open";let s=class extends v{constructor(){super(...arguments),this.inputValue="",this.filteredCommands=[],this.selectedIndex=0,this.allCommands=[],this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={},this.inputRef=p(),this.dialogRef=p()}async doInitUI(){this.commandRegistry=this.commandRegistry,this.updateCommandList(),u(h,()=>{this.openPalette()})}updateCommandList(){if(!this.commandRegistry)return;const t=this.commandRegistry.listCommands({});this.allCommands=Object.values(t).filter(e=>e.id!=="commandpalette.open").map(e=>({id:e.id,name:e.name,description:e.description,icon:e.icon,keyBinding:e.keyBinding})),this.filteredCommands=[...this.allCommands]}togglePalette(){var t;(t=this.dialogRef.value)!=null&&t.open?this.closePalette():this.openPalette()}async openPalette(){var t;this.inputValue="",this.updateCommandList(),this.selectedIndex=0,this.showParameterPrompt=!1,await this.updateComplete,this.dialogRef.value&&(this.dialogRef.value.open=!0,await this.dialogRef.value.updateComplete,(t=this.inputRef.value)==null||t.focus())}closePalette(){this.dialogRef.value&&(this.dialogRef.value.open=!1),this.inputValue="",this.selectedIndex=0,this.showParameterPrompt=!1}handleInputChange(t){const e=t.target;this.inputValue=e.value,this.filterCommands()}filterCommands(){if(!this.inputValue.trim())this.filteredCommands=[...this.allCommands];else{const t=this.inputValue.toLowerCase();this.filteredCommands=this.allCommands.filter(e=>e.name.toLowerCase().includes(t)||e.id.toLowerCase().includes(t)||e.description&&e.description.toLowerCase().includes(t))}this.selectedIndex=0}handleKeyDown(t){t.key==="ArrowDown"?(t.preventDefault(),this.selectedIndex=Math.min(this.selectedIndex+1,this.filteredCommands.length-1)):t.key==="ArrowUp"?(t.preventDefault(),this.selectedIndex=Math.max(this.selectedIndex-1,0)):t.key==="Enter"?(t.preventDefault(),this.executeSelectedCommand()):t.key==="Escape"&&(t.preventDefault(),this.closePalette())}executeSelectedCommand(){const t=this.filteredCommands[this.selectedIndex];this.runCommand(t)}runCommand(t){if(!t||!this.commandRegistry)return;const e=this.commandRegistry.getCommand(t.id);(e==null?void 0:e.parameters)&&e.parameters.length>0?(this.selectedCommand=e,this.parameterValues={},this.showParameterPrompt=!0):this.executeCommandWithParams(t.id,{})}executeCommandWithParams(t,e){try{if(this.commandRegistry.execute(t,{params:e}),this.closePalette(),this.closeParameterPrompt(),this.toastInfo){const a=this.commandRegistry.getCommand(t);this.toastInfo(`Executed: ${(a==null?void 0:a.name)||t}`)}}catch(a){if(console.error("Failed to execute command:",a),this.toastError){const i=this.commandRegistry.getCommand(t);this.toastError(`Failed to execute: ${(i==null?void 0:i.name)||t}`)}}}closeParameterPrompt(){this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={}}handleParameterInput(t,e){this.parameterValues={...this.parameterValues,[t]:e}}executeWithParameters(){var e;if(!this.selectedCommand)return;const t=(e=this.selectedCommand.parameters)==null?void 0:e.filter(a=>a.required&&!this.parameterValues[a.name]).map(a=>a.name);if(t&&t.length>0){this.toastError&&this.toastError(`Missing required parameters: ${t.join(", ")}`);return}this.executeCommandWithParams(this.selectedCommand.id,this.parameterValues)}doClose(){}render(){var t;return o`
            <wa-button @click=${this.togglePalette} appearance="plain">
                <wa-icon slot="start" name="terminal"></wa-icon>
                Run Command
            </wa-button>

            <wa-dialog 
                ${c(this.dialogRef)}
                label="Command Palette"
                @wa-request-close=${this.handleDialogClose}
            >
                <div class="dialog-content">
                    ${this.showParameterPrompt?"":o`
                        <div class="input-container">
                            <wa-input
                                ${c(this.inputRef)}
                                placeholder="Type a command name..."
                                .value=${this.inputValue}
                                @input=${this.handleInputChange}
                                @keydown=${this.handleKeyDown}
                            >
                                <wa-icon slot="start" name="magnifying-glass"></wa-icon>
                            </wa-input>
                        </div>
                    `}
                    
                    ${this.showParameterPrompt&&this.selectedCommand?o`
                        <div class="parameter-prompt">
                            <div class="parameter-prompt-title">
                                ${this.selectedCommand.name} - Parameters
                            </div>
                            ${(t=this.selectedCommand.parameters)==null?void 0:t.map(e=>o`
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
                        </div>
                    `:""}
                    
                    ${!this.showParameterPrompt&&this.filteredCommands.length>0?o`
                        <div class="results-count">
                            ${this.filteredCommands.length} command${this.filteredCommands.length!==1?"s":""}
                        </div>
                        <wa-scroller orientation="vertical" class="command-list-scroller">
                            <div class="command-list-content">
                                ${this.filteredCommands.map((e,a)=>o`
                                    <div 
                                        class="command-item ${a===this.selectedIndex?"selected":""}"
                                        @click=${i=>{i.preventDefault(),this.runCommand(e)}}
                                        @mouseenter=${()=>this.selectedIndex=a}
                                    >
                                        ${e.icon?o`
                                            <div class="command-icon">
                                                <wa-icon name="${e.icon}"></wa-icon>
                                            </div>
                                        `:o`
                                            <div class="command-icon">
                                                <wa-icon name="terminal"></wa-icon>
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
                            </div>
                        </wa-scroller>
                    `:this.showParameterPrompt?"":o`
                        <div class="no-results">
                            <wa-icon name="search" style="font-size: 32px; margin-bottom: 8px; opacity: 0.3;"></wa-icon>
                            <div>No commands found</div>
                        </div>
                    `}
                </div>
            </wa-dialog>
        `}handleDialogClose(t){t.preventDefault(),this.closePalette()}};s.styles=f`
        :host {
            display: block;
        }

        wa-dialog::part(panel) {
            max-width: 600px;
            width: 90vw;
        }

        wa-dialog::part(body) {
            padding: 0;
        }

        .dialog-content {
            display: flex;
            flex-direction: column;
            max-height: 70vh;
        }

        .input-container {
            padding: 12px;
            border-bottom: 1px solid var(--wa-panel-border-color, #3e3e3e);
            flex-shrink: 0;
        }

        .input-container wa-input {
            width: 100%;
        }

        .command-list-scroller {
            flex: 1;
            min-height: 200px;
            max-height: 400px;
        }

        .command-list-content {
            padding: 4px;
        }

        .command-item {
            padding: 10px 16px;
            cursor: pointer;
            border-radius: 4px;
            margin-bottom: 2px;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.15s ease;
            position: relative;
            border-left: 3px solid transparent;
        }

        .command-item:hover {
            background: var(--wa-color-primary-900);
            transform: translateX(4px);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border-left-color: var(--wa-color-primary-600);
        }

        .command-item.selected {
            background: var(--wa-color-primary-800);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            border-left-color: var(--wa-color-primary-600);
        }

        .command-item.selected:hover {
            transform: translateX(4px);
            border-left-color: var(--wa-color-primary-600);
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
            color: var(--wa-color-neutral-50);
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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
            padding: 40px 20px;
            text-align: center;
            color: var(--wa-color-neutral-400);
        }

        .parameter-prompt {
            padding: 20px;
        }

        .parameter-prompt-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--wa-color-neutral-50);
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

        .results-count {
            padding: 8px 16px;
            font-size: 11px;
            opacity: 0.5;
            border-bottom: 1px solid var(--wa-panel-border-color, #3e3e3e);
        }
    `;l([m()],s.prototype,"inputValue",2);l([m()],s.prototype,"filteredCommands",2);l([m()],s.prototype,"selectedIndex",2);l([m()],s.prototype,"allCommands",2);l([m()],s.prototype,"showParameterPrompt",2);l([m()],s.prototype,"selectedCommand",2);l([m()],s.prototype,"parameterValues",2);s=l([x("k-command-palette")],s);const b=({contributionRegistry:t,commandRegistry:e,toastInfo:a,toastError:i,html:n,publish:d})=>{e.registerHandler("commandpalette.open",{execute:()=>{d(h,null)}}),e.registerCommand({id:"commandpalette.open",name:"Open Command Palette",description:"Opens the command palette to execute commands",icon:"terminal",keyBinding:"CTRL+SHIFT+P"}),t.registerContribution(g,{label:"Command Palette",icon:"terminal",html:()=>{const r=document.createElement("k-command-palette");return r.commandRegistry=e,r.toastInfo=a,r.toastError=i,n`${r}`}})};export{s as KCommandPalette,b as default};
