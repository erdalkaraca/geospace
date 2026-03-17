import{b as r,A as g,i as c,n as p,r as n,t as v}from"./repeat-Duk-1tMZ.js";import{L as f,F as m,f as u}from"./config-RT97oKMn-ocVRH-Jd.js";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(t,e,a,o)=>{for(var i=o>1?void 0:o?b(e,a):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(i=(o?h(e,a,i):h(i))||i);return o&&i&&y(e,a,i),i};const w=[".pdf",".jpg",".jpeg",".png",".gif",".svg",".webp",".bmp",".ico"],N=t=>{const e=t.toLowerCase();return e.endsWith(".pdf")?"file-pdf":e.match(/\.(jpg|jpeg|png|gif|webp|bmp|ico|svg)$/)?"image":"file"},$=t=>{const e=t.getName().toLowerCase();return w.some(a=>e.endsWith(a))},I=[".jpg",".jpeg",".png",".gif",".svg",".webp",".bmp",".ico"],x=t=>{const e=t.getName().toLowerCase();return I.some(a=>e.endsWith(a))};u.registerEditorInputHandler({editorId:"system.media-viewer",label:"Media viewer",canHandle:t=>t instanceof m&&$(t),handle:async t=>{const e={title:t.getWorkspacePath(),data:t,key:t.getWorkspacePath(),icon:N(t.getName()),noOverflow:!1,state:{}};return e.component=()=>r`
            <lyra-media-viewer .input=${e}></lyra-media-viewer>`,e},ranking:1e3});let s=class extends f{constructor(){super(...arguments),this.imageNaturalWidth=0,this.imageNaturalHeight=0,this.overlays=[],this.onImageLoad=t=>{const e=t.target;e?.naturalWidth&&e?.naturalHeight&&(this.imageNaturalWidth=e.naturalWidth,this.imageNaturalHeight=e.naturalHeight)}}getMediaUrl(){return this.mediaUrl}getIsImage(){return!!(this.input?.data instanceof m&&this.mediaUrl&&x(this.input.data))}getImageDimensions(){return{width:this.imageNaturalWidth,height:this.imageNaturalHeight}}setOverlays(t){this.overlays=t??[]}getOverlays(){return[...this.overlays]}clearOverlays(){this.overlays=[]}doClose(){this.mediaUrl&&this.mediaUrl.startsWith("blob:")&&URL.revokeObjectURL(this.mediaUrl),this.input=void 0,this.mediaUrl=void 0,this.overlays=[],this.imageNaturalWidth=0,this.imageNaturalHeight=0}async doInitUI(){await this.loadMedia()}async loadMedia(){if(!this.input?.data||!(this.input.data instanceof m))return;const e=await this.input.data.getContents({uri:!0});this.mediaUrl=e,this.overlays=[]}render(){if(!this.mediaUrl)return r`
                <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                    <wa-spinner></wa-spinner>
                </div>
            `;if(this.getIsImage()){const e=this.imageNaturalWidth||1,a=this.imageNaturalHeight||1,o=e/a;return r`
                <div class="image-container">
                    <div
                        class="image-wrapper"
                        style="aspect-ratio: ${o};"
                    >
                        <img
                            class="media-image"
                            src="${this.mediaUrl}"
                            alt=""
                            @load=${this.onImageLoad}
                        />
                        ${this.overlays.length>0?r`
                            <div class="overlay-layer">
                                ${this.overlays.map(i=>i.type==="bbox"?r`
                                    <div
                                        class="overlay-bbox"
                                        style="left: ${i.left*100}%; top: ${i.top*100}%; width: ${i.width*100}%; height: ${i.height*100}%;${i.color?` --overlay-color: ${i.color};`:""}"
                                        title="${i.label??""}"
                                    >
                                        ${i.label?r`<span class="overlay-label">${i.label}</span>`:g}
                                    </div>
                                `:i.type==="mask"?r`
                                    <img
                                        class="overlay-mask"
                                        src="${i.dataUrl}"
                                        alt="${i.label??""}"
                                        title="${i.label??""}"
                                    />
                                `:g)}
                            </div>
                        `:g}
                    </div>
                </div>
            `}return r`
            <div class="media-iframe-container">
                <iframe
                    src="${this.mediaUrl}"
                    class="media-iframe"
                    title="Media Viewer"></iframe>
            </div>
        `}};s.styles=c`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
            background: var(--wa-color-surface-default, #1a1a1a);
        }

        .image-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .image-wrapper {
            position: relative;
            max-width: 100%;
            max-height: 100%;
        }

        .media-iframe-container {
            position: absolute;
            inset: 0;
            min-height: 0;
        }

        .media-iframe {
            display: block;
            width: 100%;
            height: 100%;
            border: 0;
        }

        .media-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .overlay-layer {
            position: absolute;
            inset: 0;
            pointer-events: none;
        }

        .overlay-bbox {
            position: absolute;
            border: 2px solid var(--overlay-color, var(--wa-color-brand-fill, #0d6efd));
            background: color-mix(in srgb, var(--overlay-color, #0d6efd) 15%, transparent);
            pointer-events: auto;
            box-sizing: border-box;
        }

        .overlay-label {
            position: absolute;
            left: 0;
            top: -1.25em;
            font-size: 0.7rem;
            white-space: nowrap;
            background: var(--overlay-color, var(--wa-color-brand-fill, #0d6efd));
            color: var(--wa-color-surface-default, #fff);
            padding: 1px 4px;
            border-radius: 2px;
        }

        .overlay-mask {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: fill;
            pointer-events: none;
        }
    `;l([p({attribute:!1})],s.prototype,"input",2);l([n()],s.prototype,"mediaUrl",2);l([n()],s.prototype,"imageNaturalWidth",2);l([n()],s.prototype,"imageNaturalHeight",2);l([n()],s.prototype,"overlays",2);s=l([v("lyra-media-viewer")],s);export{s as LyraMediaViewer};
