import{t as e}from"./events-B_ZxkU_G-T3WMQWFe.js";import{Q as t,U as n,_ as r,b as i,n as a,r as o}from"./repeat-jF3QiNU_.js";import{F as s,L as c,O as l,P as u,R as d,T as f,m as p,r as m}from"./dist-Bs3vRgSi.js";import{t as h}from"./preload-helper-Dd-HcVz_.js";import"./lit-CjwmRm-7.js";var g=await m(Object.assign({"./commandpalette.de.json":()=>h(()=>import(`./commandpalette.de-Bv--GkIv-CHUvrHnl.js`),[]),"./commandpalette.en.json":()=>h(()=>import(`./commandpalette.en-BkZSMl1d-BVjLe8mC.js`),[])})),_=`commandpalette/open`,v=class extends l{constructor(...e){super(...e),this.inputValue=``,this.filteredCommands=[],this.allCommands=[],this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={},this.isPaletteOpen=!1,this.inputRef=a(),this.dialogRef=a()}doInitUI(){this.subscribe(_,()=>{this.openPalette()}),this.boundDocumentClickHandler=this.handleDocumentClick.bind(this),document.addEventListener(`click`,this.boundDocumentClickHandler)}async handleDocumentClick(e){if(!this.isPaletteOpen&&!this.showParameterPrompt)return;await this.updateComplete;let t=e.target;if(this.contains(t)||this.dialogRef.value&&this.dialogRef.value.contains(t))return;let n=t;for(;n;){if(n.tagName===`WA-DIALOG`)return;n=n.parentElement}this.closePalette(),this.closeParameterPrompt()}handleDialogClick(e){e.stopPropagation()}handleInputFocus(){requestAnimationFrame(()=>{this.isPaletteOpen=!0})}handleInputClick(e){e.stopPropagation(),this.openPalette()}handleInputMouseDown(e){e.stopPropagation()}updateCommandList(){let e=u.listCommands(this.executionContext||{});this.allCommands=Object.values(e).filter(e=>e.id!==`commandpalette.open`).map(e=>({id:e.id,name:e.name,description:e.description,icon:e.icon,keyBinding:e.keyBinding})),this.filteredCommands=[...this.allCommands]}async openPalette(){this.executionContext=u.createExecutionContext(),this.inputValue=``,this.updateCommandList(),this.showParameterPrompt=!1,this.isPaletteOpen=!0,await this.updateComplete,this.inputRef.value&&this.inputRef.value.focus()}closePalette(){this.isPaletteOpen=!1,this.inputValue=``,this.showParameterPrompt=!1,this.executionContext=void 0}handleInputChange(e){this.inputValue=e.target.value,this.filterCommands()}filterCommands(){if(!this.inputValue.trim())this.filteredCommands=[...this.allCommands];else{let e=this.inputValue.toLowerCase();this.filteredCommands=this.allCommands.filter(t=>t.name.toLowerCase().includes(e)||t.id.toLowerCase().includes(e)||t.description&&t.description.toLowerCase().includes(e))}}handleKeyDown(e){e.key===`Escape`&&(e.preventDefault(),this.closePalette())}handleCommandClick(e,t){t&&(e.stopPropagation(),this.inputValue=``,this.filterCommands(),this.runCommand(t))}handleContainerClick(e){e.stopPropagation()}runCommand(e){if(!e)return;let t=u.getCommand(e.id);t?.parameters&&t.parameters.length>0?(this.selectedCommand=t,this.parameterValues={},this.showParameterPrompt=!0):this.executeCommandWithParams(e.id,{})}async executeCommandWithParams(e,t){try{await u.execute(e,{...this.executionContext||{},params:t}),this.closePalette(),this.closeParameterPrompt()}catch(e){console.error(`Failed to execute command:`,e)}}closeParameterPrompt(){this.showParameterPrompt=!1,this.selectedCommand=null,this.parameterValues={}}handleParameterInput(e,t){this.parameterValues={...this.parameterValues,[e]:t}}executeWithParameters(){if(!this.selectedCommand)return;let e=this.selectedCommand.parameters?.filter(e=>e.required&&!this.parameterValues[e.name]).map(e=>e.name);if(e&&e.length>0){d(g.MISSING_REQUIRED_PARAMS({params:e.join(`, `)}));return}this.executeCommandWithParams(this.selectedCommand.id,this.parameterValues)}render(){return n`
      <wa-input
      appearance="filled"
        ${o(this.inputRef)}
        placeholder="${g.PLACEHOLDER}"
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

      <div class="commands-container ${this.isPaletteOpen?`open`:``}" @click=${this.handleContainerClick}>
        ${this.filteredCommands.length>0?n`${this.filteredCommands.map(e=>n`
                <div class="command-item" @click=${t=>this.handleCommandClick(t,e)}>
                  ${e.icon?n`<div class="command-icon">
                        <wa-icon name="${e.icon}" label="${e.name}"></wa-icon>
                      </div>`:n`<div class="command-icon">
                        <wa-icon name="terminal" label="Command"></wa-icon>
                      </div>`}
                  <div class="command-info">
                    <div class="command-name">${e.name}</div>
                    <div class="command-id">${e.id}</div>
                    ${e.description?n`<div class="command-description">${e.description}</div>`:``}
                  </div>
                  ${e.keyBinding?n`<div class="command-keybinding">${e.keyBinding}</div>`:``}
                </div>
              `)}`:n`<div class="no-results">
              <wa-icon
                name="search"
                label="${g.NO_COMMANDS_FOUND}"
                style="font-size: 24px; margin-bottom: 4px; opacity: 0.3;"
              ></wa-icon>
              <div>${g.NO_COMMANDS_FOUND}</div>
            </div>`}
      </div>

      ${this.showParameterPrompt&&this.selectedCommand?n`<wa-dialog
            ${o(this.dialogRef)}
            label="${this.selectedCommand.name} - ${g.PARAMETERS}"
            open
            @wa-request-close=${this.closeParameterPrompt}
            @click=${this.handleDialogClick}
          >
            <div class="parameter-prompt-title">
              ${g.ENTER_PARAMETERS({commandName:this.selectedCommand.name})}
            </div>
            ${this.selectedCommand.parameters?.map(e=>n`<div class="parameter-field">
                <wa-input
                  label="${e.name}${e.required?` *`:``}"
                  hint=${e.description||``}
                  placeholder=${e.description||g.ENTER_PARAM({paramName:e.name})}
                  .value=${this.parameterValues[e.name]||``}
                  @input=${t=>this.handleParameterInput(e.name,t.target.value)}
                ></wa-input>
              </div>`)}
            <div class="parameter-actions">
              <wa-button variant="default" @click=${this.closeParameterPrompt}>${g.CANCEL}</wa-button>
              <wa-button variant="primary" @click=${this.executeWithParameters}>${g.EXECUTE}</wa-button>
            </div>
          </wa-dialog>`:``}
    `}doClose(){this.boundDocumentClickHandler&&=(document.removeEventListener(`click`,this.boundDocumentClickHandler),void 0)}static{this.styles=t`
    :host {
      /* inline-flex + no width:100% keeps this on one row with siblings inside wa-button-group (flex-wrap: wrap). */
      display: inline-flex;
      flex-direction: column;
      align-items: stretch;
      width: auto;
      flex: 0 1 auto;
      max-width: 600px;
      min-width: 300px;
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
  `}};f([r()],v.prototype,`inputValue`,void 0),f([r()],v.prototype,`filteredCommands`,void 0),f([r()],v.prototype,`allCommands`,void 0),f([r()],v.prototype,`showParameterPrompt`,void 0),f([r()],v.prototype,`selectedCommand`,void 0),f([r()],v.prototype,`parameterValues`,void 0),f([r()],v.prototype,`isPaletteOpen`,void 0),v=f([i(`docks-command-palette`)],v),c({command:{id:`commandpalette.open`,name:g.OPEN_COMMAND_PALETTE,description:g.OPEN_COMMAND_PALETTE_DESC,icon:`terminal`,keyBinding:`CTRL+SHIFT+P`},handler:{execute:()=>(e(_,null),null)}}),s.registerContribution(p,{name:`commandPalette.toolbar`,label:`Command Palette`,icon:`terminal`,component:()=>n`<docks-command-palette></docks-command-palette>`});