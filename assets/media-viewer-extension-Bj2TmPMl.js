import{x as d,u as c,y as m,z as p,A as u}from"./index-BPuo-xLZ.js";import{m as g,F as f,x as h}from"./geospace-app-DOqKRYZp.js";import"./preload-helper-WQhrSmCl.js";var w=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(e,t,a,s)=>{for(var i=s>1?void 0:s?v(t,a):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,a,i):o(i))||i);return s&&i&&w(t,a,i),i};const y=[".pdf",".jpg",".jpeg",".png",".gif",".svg",".webp",".bmp",".ico"],b=e=>{const t=e.toLowerCase();return t.endsWith(".pdf")?"file-pdf":t.match(/\.(jpg|jpeg|png|gif|webp|bmp|ico|svg)$/)?"image":"file"},U=e=>{const t=e.getName().toLowerCase();return y.some(a=>t.endsWith(a))};h.registerEditorInputHandler({canHandle:e=>e instanceof f&&U(e),handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"media-viewer",icon:b(e.getName()),noOverflow:!1,state:{}};return t.widgetFactory=()=>d`
            <k-media-viewer .input=${t}></k-media-viewer>`,t},ranking:1e3});let r=class extends g{doClose(){this.mediaUrl&&this.mediaUrl.startsWith("blob:")&&URL.revokeObjectURL(this.mediaUrl),this.input=void 0,this.mediaUrl=void 0}async doInitUI(){await this.loadMedia()}async loadMedia(){if(!this.input?.data||!(this.input.data instanceof f))return;const t=await this.input.data.getContents({uri:!0});this.mediaUrl=t}render(){return this.mediaUrl?d`
            <iframe
                src="${this.mediaUrl}"
                class="media-iframe"
                title="Media Viewer">
            </iframe>
        `:d`
                <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                    <wa-spinner></wa-spinner>
                </div>
            `}};r.styles=c`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
            background: var(--wa-color-surface-default, #1a1a1a);
        }

        .media-iframe {
            width: 100%;
            height: 100%;
            border: none;
            background: var(--wa-color-surface-default, #1a1a1a);
        }
    `;l([m({attribute:!1})],r.prototype,"input",2);l([p()],r.prototype,"mediaUrl",2);r=l([u("k-media-viewer")],r);export{r as KMediaViewer};
