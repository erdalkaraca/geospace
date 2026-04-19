import{n as e}from"./fs-access-D-fDaJ8V-4fi1R5VX.js";import{Q as t,U as n,_ as r,b as i,v as a,z as o}from"./repeat-jF3QiNU_.js";import{T as s,a as c,n as l}from"./dist-Bs3vRgSi.js";var u=[`.pdf`,`.jpg`,`.jpeg`,`.png`,`.gif`,`.svg`,`.webp`,`.bmp`,`.ico`],d=e=>{let t=e.toLowerCase();return t.endsWith(`.pdf`)?`file-pdf`:t.match(/\.(jpg|jpeg|png|gif|webp|bmp|ico|svg)$/)?`image`:`file`},f=e=>{let t=e.getName().toLowerCase();return u.some(e=>t.endsWith(e))},p=[`.jpg`,`.jpeg`,`.png`,`.gif`,`.svg`,`.webp`,`.bmp`,`.ico`],m=e=>{let t=e.getName().toLowerCase();return p.some(e=>t.endsWith(e))};l.registerEditorInputHandler({editorId:`system.media-viewer`,label:`Media viewer`,canHandle:t=>t instanceof e&&f(t),handle:async e=>{let t={title:e.getWorkspacePath(),data:e,key:e.getWorkspacePath(),icon:d(e.getName()),state:{}};return t.component=e=>n`
            <docks-media-viewer id="${e}" .input=${t}></docks-media-viewer>`,t},ranking:1e3});var h=class extends c{constructor(...e){super(...e),this.scrollMode=`native`,this.imageNaturalWidth=0,this.imageNaturalHeight=0,this.overlays=[],this.onImageLoad=e=>{let t=e.target;t?.naturalWidth&&t?.naturalHeight&&(this.imageNaturalWidth=t.naturalWidth,this.imageNaturalHeight=t.naturalHeight)}}getMediaUrl(){return this.mediaUrl}getIsImage(){return!!(this.input?.data instanceof e&&this.mediaUrl&&m(this.input.data))}getImageDimensions(){return{width:this.imageNaturalWidth,height:this.imageNaturalHeight}}setOverlays(e){this.overlays=e??[]}getOverlays(){return[...this.overlays]}clearOverlays(){this.overlays=[]}doClose(){this.mediaUrl&&this.mediaUrl.startsWith(`blob:`)&&URL.revokeObjectURL(this.mediaUrl),this.input=void 0,this.mediaUrl=void 0,this.overlays=[],this.imageNaturalWidth=0,this.imageNaturalHeight=0}async doInitUI(){await this.loadMedia()}async loadMedia(){!this.input?.data||!(this.input.data instanceof e)||(this.mediaUrl=await this.input.data.getContents({uri:!0}),this.overlays=[])}renderContent(){return this.mediaUrl?this.getIsImage()?n`
                <div class="image-container">
                    <div class="image-wrapper">
                        <img
                            class="media-image"
                            src="${this.mediaUrl}"
                            alt=""
                            @load=${this.onImageLoad}
                        />
                        ${this.overlays.length>0?n`
                            <div class="overlay-layer">
                                ${this.overlays.map(e=>e.type===`bbox`?n`
                                    <div
                                        class="overlay-bbox"
                                        style="left: ${e.left*100}%; top: ${e.top*100}%; width: ${e.width*100}%; height: ${e.height*100}%;${e.color?` --overlay-color: ${e.color};`:``}"
                                        title="${e.label??``}"
                                    >
                                        ${e.label?n`<span class="overlay-label">${e.label}</span>`:o}
                                    </div>
                                `:e.type===`mask`?n`
                                    <img
                                        class="overlay-mask"
                                        src="${e.dataUrl}"
                                        alt="${e.label??``}"
                                        title="${e.label??``}"
                                    />
                                `:o)}
                            </div>
                        `:o}
                    </div>
                </div>
            `:n`
            <div class="media-iframe-container">
                <iframe
                    src="${this.mediaUrl}"
                    class="media-iframe"
                    title="Media Viewer"></iframe>
            </div>
        `:n`
                <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                    <wa-spinner></wa-spinner>
                </div>
            `}static{this.styles=t`
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
    `}};s([a({attribute:!1})],h.prototype,`input`,void 0),s([r()],h.prototype,`mediaUrl`,void 0),s([r()],h.prototype,`imageNaturalWidth`,void 0),s([r()],h.prototype,`imageNaturalHeight`,void 0),s([r()],h.prototype,`overlays`,void 0),h=s([i(`docks-media-viewer`)],h);export{h as DocksMediaViewer};