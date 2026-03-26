import{a as e,w as t}from"./dist-XDM-k8NY.js";import{I as n,N as r,P as i,Q as a,U as o,n as s,r as c}from"./repeat-D7ZcYN9W.js";var l=class extends e{constructor(...e){super(...e),this.readOnly=!1,this.initialContent=void 0,this.initialUri=void 0,this.initialLanguage=void 0,this.widgetRef=s(),this._onContentChange=()=>{this.markDirty(!0)}}async doInitUI(){let e=this.input.data;this.initialContent=await e.getContents(),this.initialUri=e.getWorkspacePath(),this.initialLanguage=void 0,this.requestUpdate()}getEditor(){return this.widgetRef.value?.getEditor()??void 0}save(){let e=this.widgetRef.value?.getContent()??``;this.input?.data.saveContents(e),this.markDirty(!1)}doClose(){this.widgetRef.value?.dispose()}getLanguage(){return this.widgetRef.value?.getLanguage()??null}isLanguage(e){return this.widgetRef.value?.isLanguage(e)??!1}getContent(){return this.widgetRef.value?.getContent()??null}getSelection(){return this.widgetRef.value?.getSelection()??null}getSnippet(e=5){return this.widgetRef.value?.getSnippet(e)??null}getFilePath(){return this.input?.data?.getWorkspacePath()??null}renderContent(){return this.initialContent===void 0?o`<div class="monaco-editor-placeholder"></div>`:o`
            <lyra-monaco-widget
                .value=${this.initialContent}
                .uri=${this.initialUri}
                .language=${this.initialLanguage}
                .readOnly=${this.readOnly}
                @content-change=${this._onContentChange}
                ${c(this.widgetRef)}
            ></lyra-monaco-widget>
        `}static{this.styles=a`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
        }
        .monaco-editor-placeholder {
            flex: 1;
            min-height: 0;
        }
    `}};t([i({attribute:!1})],l.prototype,`input`,void 0),t([i()],l.prototype,`readOnly`,void 0),t([r()],l.prototype,`initialContent`,void 0),t([r()],l.prototype,`initialUri`,void 0),t([r()],l.prototype,`initialLanguage`,void 0),l=t([n(`lyra-monaco-editor`)],l);