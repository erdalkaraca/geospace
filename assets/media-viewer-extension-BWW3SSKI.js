import{x as d,b as c,n as p,r as m,t as g}from"./index-DoDY4M9O.js";import{k as h,F as f,v as u}from"./main-Ah5g8b1x.js";var w=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(e,t,a,s)=>{for(var i=s>1?void 0:s?v(t,a):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,a,i):o(i))||i);return s&&i&&w(t,a,i),i};const b=[".pdf",".jpg",".jpeg",".png",".gif",".svg",".webp",".bmp",".ico"],y=e=>{const t=e.toLowerCase();return t.endsWith(".pdf")?"file-pdf":t.match(/\.(jpg|jpeg|png|gif|webp|bmp|ico|svg)$/)?"image":"file"},U=e=>{const t=e.getName().toLowerCase();return b.some(a=>t.endsWith(a))};u.registerEditorInputHandler({canHandle:e=>e instanceof f&&U(e),handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"media-viewer",icon:y(e.getName()),noOverflow:!1,state:{}};return t.widgetFactory=()=>d`
            <k-media-viewer .input=${t}></k-media-viewer>`,t},ranking:1e3});let r=class extends h{doClose(){this.mediaUrl&&this.mediaUrl.startsWith("blob:")&&URL.revokeObjectURL(this.mediaUrl),this.input=void 0,this.mediaUrl=void 0}async doInitUI(){await this.loadMedia()}async loadMedia(){if(!this.input?.data||!(this.input.data instanceof f))return;const t=await this.input.data.getContents({uri:!0});this.mediaUrl=t}render(){return this.mediaUrl?d`
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
    `;l([p({attribute:!1})],r.prototype,"input",2);l([m()],r.prototype,"mediaUrl",2);r=l([g("k-media-viewer")],r);export{r as KMediaViewer};
