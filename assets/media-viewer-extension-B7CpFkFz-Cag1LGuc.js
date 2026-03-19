import{b as a,A as g,i as p,n as c,r as n,t as v}from"./repeat-DeJtXcpe.js";import{L as f,F as m,f as u}from"./config-BohSmpxh-V1YOTR3p.js";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(t,e,i,l)=>{for(var s=l>1?void 0:l?b(e,i):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(s=(l?h(e,i,s):h(s))||s);return l&&s&&y(e,i,s),s};const w=[".pdf",".jpg",".jpeg",".png",".gif",".svg",".webp",".bmp",".ico"],$=t=>{const e=t.toLowerCase();return e.endsWith(".pdf")?"file-pdf":e.match(/\.(jpg|jpeg|png|gif|webp|bmp|ico|svg)$/)?"image":"file"},I=t=>{const e=t.getName().toLowerCase();return w.some(i=>e.endsWith(i))},N=[".jpg",".jpeg",".png",".gif",".svg",".webp",".bmp",".ico"],x=t=>{const e=t.getName().toLowerCase();return N.some(i=>e.endsWith(i))};u.registerEditorInputHandler({editorId:"system.media-viewer",label:"Media viewer",canHandle:t=>t instanceof m&&I(t),handle:async t=>{const e={title:t.getWorkspacePath(),data:t,key:t.getWorkspacePath(),icon:$(t.getName()),state:{}};return e.component=i=>a`
            <lyra-media-viewer id="${i}" .input=${e}></lyra-media-viewer>`,e},ranking:1e3});let r=class extends f{constructor(){super(...arguments),this.scrollMode="native",this.imageNaturalWidth=0,this.imageNaturalHeight=0,this.overlays=[],this.onImageLoad=t=>{const e=t.target;e?.naturalWidth&&e?.naturalHeight&&(this.imageNaturalWidth=e.naturalWidth,this.imageNaturalHeight=e.naturalHeight)}}getMediaUrl(){return this.mediaUrl}getIsImage(){return!!(this.input?.data instanceof m&&this.mediaUrl&&x(this.input.data))}getImageDimensions(){return{width:this.imageNaturalWidth,height:this.imageNaturalHeight}}setOverlays(t){this.overlays=t??[]}getOverlays(){return[...this.overlays]}clearOverlays(){this.overlays=[]}doClose(){this.mediaUrl&&this.mediaUrl.startsWith("blob:")&&URL.revokeObjectURL(this.mediaUrl),this.input=void 0,this.mediaUrl=void 0,this.overlays=[],this.imageNaturalWidth=0,this.imageNaturalHeight=0}async doInitUI(){await this.loadMedia()}async loadMedia(){if(!this.input?.data||!(this.input.data instanceof m))return;const e=await this.input.data.getContents({uri:!0});this.mediaUrl=e,this.overlays=[]}renderContent(){return this.mediaUrl?this.getIsImage()?a`
                <div class="image-container">
                    <div class="image-wrapper">
                        <img
                            class="media-image"
                            src="${this.mediaUrl}"
                            alt=""
                            @load=${this.onImageLoad}
                        />
                        ${this.overlays.length>0?a`
                            <div class="overlay-layer">
                                ${this.overlays.map(e=>e.type==="bbox"?a`
                                    <div
                                        class="overlay-bbox"
                                        style="left: ${e.left*100}%; top: ${e.top*100}%; width: ${e.width*100}%; height: ${e.height*100}%;${e.color?` --overlay-color: ${e.color};`:""}"
                                        title="${e.label??""}"
                                    >
                                        ${e.label?a`<span class="overlay-label">${e.label}</span>`:g}
                                    </div>
                                `:e.type==="mask"?a`
                                    <img
                                        class="overlay-mask"
                                        src="${e.dataUrl}"
                                        alt="${e.label??""}"
                                        title="${e.label??""}"
                                    />
                                `:g)}
                            </div>
                        `:g}
                    </div>
                </div>
            `:a`
            <div class="media-iframe-container">
                <iframe
                    src="${this.mediaUrl}"
                    class="media-iframe"
                    title="Media Viewer"></iframe>
            </div>
        `:a`
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
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            overflow: hidden;
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
    `;o([c({attribute:!1})],r.prototype,"input",2);o([n()],r.prototype,"mediaUrl",2);o([n()],r.prototype,"imageNaturalWidth",2);o([n()],r.prototype,"imageNaturalHeight",2);o([n()],r.prototype,"overlays",2);r=o([v("lyra-media-viewer")],r);export{r as LyraMediaViewer};
