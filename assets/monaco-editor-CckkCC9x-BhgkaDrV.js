import{Q as e,U as t,_ as n,b as r,n as i,r as a,v as o}from"./repeat-jF3QiNU_.js";import{T as s,a as c}from"./dist-Bs3vRgSi.js";var l=class extends c{constructor(...e){super(...e),this.readOnly=!1,this.initialContent=void 0,this.initialUri=void 0,this.initialLanguage=void 0,this.widgetRef=i(),this._onContentChange=()=>{this.markDirty(!0)}}async doInitUI(){let e=this.input.data;this.initialContent=await e.getContents(),this.initialUri=e.getWorkspacePath(),this.initialLanguage=void 0,this.requestUpdate()}getEditor(){return this.widgetRef.value?.getEditor()??void 0}save(){let e=this.widgetRef.value?.getContent()??``;this.input?.data.saveContents(e),this.markDirty(!1)}doClose(){this.widgetRef.value?.dispose()}getLanguage(){return this.widgetRef.value?.getLanguage()??null}isLanguage(e){return this.widgetRef.value?.isLanguage(e)??!1}getContent(){return this.widgetRef.value?.getContent()??null}getSelection(){return this.widgetRef.value?.getSelection()??null}getSnippet(e=5){return this.widgetRef.value?.getSnippet(e)??null}getFilePath(){return this.input?.data?.getWorkspacePath()??null}renderContent(){return this.initialContent===void 0?t`<div class="monaco-editor-placeholder"></div>`:t`
            <docks-monaco-widget
                .value=${this.initialContent}
                .uri=${this.initialUri}
                .language=${this.initialLanguage}
                .readOnly=${this.readOnly}
                @content-change=${this._onContentChange}
                ${a(this.widgetRef)}
            ></docks-monaco-widget>
        `}static{this.styles=e`
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
    `}};s([o({attribute:!1})],l.prototype,`input`,void 0),s([o()],l.prototype,`readOnly`,void 0),s([n()],l.prototype,`initialContent`,void 0),s([n()],l.prototype,`initialUri`,void 0),s([n()],l.prototype,`initialLanguage`,void 0),l=s([r(`docks-monaco-editor`)],l);