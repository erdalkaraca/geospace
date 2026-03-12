import{G as d,b as u,U as p,H as v,n as h,r as g,t as f}from"./webawesome-Bcy1vMqC.js";import{L as c}from"./config-ByP2ak92-zMGYTrLw.js";import"./chunk.FSRXYGSW-CMgxtNeZ.js";import"./preload-helper-BXl3LOEh.js";var y=Object.defineProperty,m=Object.getOwnPropertyDescriptor,a=(t,n,o,r)=>{for(var i=r>1?void 0:r?m(n,o):n,s=t.length-1,l;s>=0;s--)(l=t[s])&&(i=(r?l(n,o,i):l(i))||i);return r&&i&&y(n,o,i),i};let e=class extends c{constructor(){super(...arguments),this.readOnly=!1,this.initialContent=void 0,this.initialUri=void 0,this.initialLanguage=void 0,this.widgetRef=d(),this._onContentChange=()=>{this.markDirty(!0)}}async doInitUI(){const t=this.input.data,n=await t.getContents();this.initialContent=n,this.initialUri=t.getName(),this.initialLanguage=void 0,this.requestUpdate()}getEditor(){return this.widgetRef.value?.getEditor()??void 0}save(){const t=this.widgetRef.value?.getContent()??"";this.input?.data.saveContents(t),this.markDirty(!1)}doClose(){this.widgetRef.value?.dispose()}getLanguage(){return this.widgetRef.value?.getLanguage()??null}isLanguage(t){return this.widgetRef.value?.isLanguage(t)??!1}getContent(){return this.widgetRef.value?.getContent()??null}getSelection(){return this.widgetRef.value?.getSelection()??null}getSnippet(t=5){return this.widgetRef.value?.getSnippet(t)??null}getFilePath(){return this.input?.data?.getWorkspacePath()??null}render(){return this.initialContent===void 0?u`<div class="monaco-editor-placeholder"></div>`:u`
            <lyra-monaco-widget
                .value=${this.initialContent}
                .uri=${this.initialUri}
                .language=${this.initialLanguage}
                .readOnly=${this.readOnly}
                @content-change=${this._onContentChange}
                ${p(this.widgetRef)}
            ></lyra-monaco-widget>
        `}};e.styles=v`
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
    `;a([h({attribute:!1})],e.prototype,"input",2);a([h()],e.prototype,"readOnly",2);a([g()],e.prototype,"initialContent",2);a([g()],e.prototype,"initialUri",2);a([g()],e.prototype,"initialLanguage",2);e=a([f("lyra-monaco-editor")],e);export{e as LyraMonacoEditor};
