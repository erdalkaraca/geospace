import{i as $,c as L,b as s,m as b,t as v}from"./webawesome-C6zoK8ho.js";import{L as E,N as x,y as M,j as d,E as o,c as h,x as f,F as g,r as U,W as S,f as C}from"./config-BnnWtrGw-B7Dvw4S0.js";import{m as D,G as O,f as p,b as y,g as l,i as _,c as G}from"./gs-map-editor-BSv0ifMB.js";import{p as u}from"./index-bxjZJoCW.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./__vite-browser-external-DrV_kz0N.js";import"./third-party-BW12UeC1.js";var R=Object.defineProperty,P=Object.getOwnPropertyDescriptor,w=(e,t,a,i)=>{for(var r=i>1?void 0:i?P(t,a):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(r=(i?c(t,a,r):c(r))||r);return i&&r&&R(t,a,r),r};let m=class extends E{doBeforeUI(){this.watch(x,e=>{this.onPartChanged(e)}),this.watch(D,({part:e})=>{this.onMapChanged({part:e})})}onPartChanged(e){if(!(e==this||e==this.mapEditor)){if(!(e instanceof O)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=e,this.requestUpdate()}}onMapChanged({part:e}){e==this.mapEditor&&this.requestUpdate()}toggleVisible(e){const t=this.mapEditor.getGsMap(),a=p(t,e);if(!a)return;const r=!(a.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(e,r),this.updateLater()}async confirmAction(e,t){await M(e)&&t()}selectLayer(e){this.selectedLayerUuid=e,this.updateToolbar(),this.updateContextMenu()}renameLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const a=this.mapEditor.getGsMap();if(!p(a,t))return;const r=y(a,t),n=d.createExecutionContext({index:r+1});d.execute("rename_layer",n)}deleteLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const a=this.mapEditor.getGsMap(),i=p(a,t);i&&this.confirmAction(`Delete layer "${i.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(t)))}moveLayerUp(e){if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const a=y(t,e);if(a<=0)return;const i=t.layers[a-1]?.uuid;i&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,i)),this.selectedLayerUuid=i)}layerIcon(e){return e.type===u.SCRIPTED?"code":"layers"}layerLabel(e,t){if(e.type===u.SCRIPTED){const a=e;return e.name??a.src?.split("/").pop()??`Scripted Layer ${t+1}`}return e.name??`Layer ${t+1}`}moveLayerDown(e){if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const a=y(t,e);if(a<0||a>=t.layers.length-1)return;const i=t.layers[a+1]?.uuid;i&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,i)),this.selectedLayerUuid=i)}renderToolbar(){const e=this.selectedLayerUuid!==void 0;return s`
            <lyra-command ?disabled=${!e}
                      title="Rename selected layer"
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
            </lyra-command>
            <lyra-command ?disabled=${!e}
                      title="Delete selected layer"
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
            </lyra-command>
        `}renderContextMenu(){const e=this.selectedLayerUuid!==void 0;return s`
            <lyra-command ?disabled=${!e}
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
                Rename
            </lyra-command>
            <lyra-command ?disabled=${!e}
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
                Delete
            </lyra-command>
        `}render(){return b(!this.mapEditor,()=>s`
                    <lyra-no-content message="Select a map."></lyra-no-content>`,()=>s`
                <wa-tree>
                    <wa-tree-item expanded>
                        ${o("fg layers")} Layers
                        ${this.mapEditor.getGsMap()?.layers.map((e,t)=>s`
                            <wa-tree-item @click="${()=>e.uuid&&this.selectLayer(e.uuid)}"
                                          class="${this.selectedLayerUuid===e.uuid?"selected":""}">
                                ${o(this.layerIcon(e))}
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${this.layerLabel(e,t)}${t==0?s`
                                            <small>(basemap)</small>`:""}
                                            ${e.type===u.SCRIPTED?s`
                                            <small class="lang-badge">${e.lang??"js"}</small>`:""}
                                        </span>
                                    </div>
                                    <div class="layer-actions">
                                        <lyra-command size="small"
                                                  icon="${e.visible!==!1?"eye":"eye-slash"}"
                                                  title="${e.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>e.uuid&&this.toggleVisible(e.uuid)}>
                                        </lyra-command>
                                        <lyra-command size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${t===0}"
                                                  .action=${()=>e.uuid&&this.moveLayerUp(e.uuid)}>
                                        </lyra-command>
                                        <lyra-command size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${t===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>e.uuid&&this.moveLayerDown(e.uuid)}>
                                        </lyra-command>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${o("fg map-control")} Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(e=>s`
                            <wa-tree-item>
                                <span>${l(e.src)}</span>
                                <lyra-command size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{e.uuid&&this.confirmAction(`Delete control "${l(e.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(e.uuid)))}}>
                                </lyra-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${o("fg map-poi")} Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(e=>s`
                            <wa-tree-item>
                                <span>${l(e.src)}</span>
                                <lyra-command size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{e.uuid&&this.confirmAction(`Delete overlay "${l(e.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(e.uuid)))}}>
                                </lyra-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${o("highlighter")} Styles
                        <wa-tree-item>
                            <span>Defined Styles: ${Object.keys(this.mapEditor.getGsMap()?.styles||{}).length}</span>
                        </wa-tree-item>
                        <wa-tree-item>
                            <span>Style Rules: ${this.mapEditor.getGsMap()?.styleRules?.length||0}</span>
                        </wa-tree-item>
                    </wa-tree-item>
                </wa-tree>
            `)}};m.styles=$`
        :host {
            display: flex;
            flex-direction: column;
        }

        wa-tree-item.selected {
            background-color: var(--wa-color-primary-50);
        }

        .layer-item {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 4px;
        }

        .layer-name {
            flex: 1;
        }

        .layer-actions {
            display: flex;
            gap: 2px;
        }

        .lang-badge {
            display: inline-block;
            padding: 0 4px;
            border-radius: 3px;
            background: var(--wa-color-primary-100);
            color: var(--wa-color-primary-700);
            font-size: 0.7em;
            vertical-align: middle;
            margin-left: 4px;
        }
    `;w([L()],m.prototype,"selectedLayerUuid",2);m=w([v("gs-map-props")],m);const I=C("extension-mapprops");h.registerContribution("contextmenu:filebrowser",{label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const e=f.get();return e instanceof g?!_(e):!0}});U({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async()=>{const e=f.get();if(!(e instanceof g))return;const t=G(e);if(!t){I.warn(`Unsupported file type: ${e.getName()}`);return}const a=e.getWorkspacePath(),i=d.createExecutionContext({source:t,url:a});await d.execute("add_layer",i)}}});h.registerContribution(S,{name:"map-props",label:"Map Properties",icon:"fg map-options",component:e=>s`<gs-map-props id="${e}"></gs-map-props>`});
