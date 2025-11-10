import{x as d,a as p,n as h,r as c,t as u}from"./index-B-or_cqe.js";import{K as v,F as f,i as w}from"./main-0XsRFUta.js";var y=Object.defineProperty,g=Object.getOwnPropertyDescriptor,l=(e,t,a,s)=>{for(var i=s>1?void 0:s?g(t,a):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,a,i):o(i))||i);return s&&i&&y(t,a,i),i};w.registerEditorInputHandler({canHandle:e=>e instanceof f&&e.getName().toLowerCase().endsWith(".pdf"),handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"pdf-viewer",icon:"file-pdf",noOverflow:!1,state:{}};return t.widgetFactory=()=>d`
            <k-pdf-viewer .input=${t}></k-pdf-viewer>`,t},ranking:1e3});let r=class extends v{doClose(){this.pdfUrl&&this.pdfUrl.startsWith("blob:")&&URL.revokeObjectURL(this.pdfUrl),this.input=void 0,this.pdfUrl=void 0}async doInitUI(){await this.loadPDF()}async loadPDF(){if(!this.input?.data||!(this.input.data instanceof f))return;const t=await this.input.data.getContents({uri:!0});this.pdfUrl=t}render(){return this.pdfUrl?d`
            <iframe
                src="${this.pdfUrl}"
                style="width: 100%; height: 100%; border: none;"
                title="PDF Viewer">
            </iframe>
        `:d`
                <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                    <wa-spinner></wa-spinner>
                </div>
            `}};r.styles=p`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
        }
    `;l([h({attribute:!1})],r.prototype,"input",2);l([c()],r.prototype,"pdfUrl",2);r=l([u("k-pdf-viewer")],r);export{r as KPDFViewer};
