import{f as d,b as u,g as p,a as f,n as h,c as g,t as v}from"./default-xvQdiKMn.js";import{K as c}from"./geospace-app-CCGOW35A.js";import"./chunk.IVRNYRHD-Htfh_CZj.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.2PWIIYRH-COD9mzAh.js";var m=Object.defineProperty,C=Object.getOwnPropertyDescriptor,a=(t,n,r,o)=>{for(var i=o>1?void 0:o?C(n,r):n,s=t.length-1,l;s>=0;s--)(l=t[s])&&(i=(o?l(n,r,i):l(i))||i);return o&&i&&m(n,r,i),i};let e=class extends c{constructor(){super(...arguments),this.readOnly=!1,this.initialContent=void 0,this.initialUri=void 0,this.initialLanguage=void 0,this.widgetRef=d(),this._onContentChange=()=>{this.markDirty(!0)}}async doInitUI(){const t=this.input.data,n=await t.getContents();this.initialContent=n,this.initialUri=t.getName(),this.initialLanguage=void 0,this.requestUpdate()}getEditor(){return this.widgetRef.value?.getEditor()??void 0}save(){const t=this.widgetRef.value?.getContent()??"";this.input?.data.saveContents(t),this.markDirty(!1)}doClose(){this.widgetRef.value?.dispose()}getLanguage(){return this.widgetRef.value?.getLanguage()??null}isLanguage(t){return this.widgetRef.value?.isLanguage(t)??!1}getContent(){return this.widgetRef.value?.getContent()??null}getSelection(){return this.widgetRef.value?.getSelection()??null}getSnippet(t=5){return this.widgetRef.value?.getSnippet(t)??null}getFilePath(){return this.input?.data?.getWorkspacePath()??null}render(){return this.initialContent===void 0?u`<div class="monaco-editor-placeholder"></div>`:u`
            <k-monaco-widget
                .value=${this.initialContent}
                .uri=${this.initialUri}
                .language=${this.initialLanguage}
                .readOnly=${this.readOnly}
                @content-change=${this._onContentChange}
                ${p(this.widgetRef)}
            ></k-monaco-widget>
        `}};e.styles=f`
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
    `;a([h({attribute:!1})],e.prototype,"input",2);a([h()],e.prototype,"readOnly",2);a([g()],e.prototype,"initialContent",2);a([g()],e.prototype,"initialUri",2);a([g()],e.prototype,"initialLanguage",2);e=a([v("k-monaco-editor")],e);export{e as KMonacoEditor};
