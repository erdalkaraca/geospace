import{l as w,j as b,K as L,C as $,e as v,q as d,g as r,V as E,k as x,f as h,d as y,c as g,r as k,ad as M,H as U}from"./geospace-app-CkDP6MS6.js";import{m as S,G as C,f as m,b as p,c as u,g as o,i as D,d as O}from"./gs-map-editor-DYtbdOur.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.IVRNYRHD-89zOMqhG.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";var _=Object.defineProperty,G=Object.getOwnPropertyDescriptor,f=(e,t,a,i)=>{for(var s=i>1?void 0:i?G(t,a):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(i?c(t,a,s):c(s))||s);return i&&s&&_(t,a,s),s};let l=class extends L{doBeforeUI(){this.watch($,e=>{this.onPartChanged(e)}),this.watch(S,({part:e})=>{this.onMapChanged({part:e})})}onPartChanged(e){if(!(e==this||e==this.mapEditor)){if(!(e instanceof C)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=e,this.requestUpdate()}}onMapChanged({part:e}){e==this.mapEditor&&this.requestUpdate()}toggleVisible(e){const t=this.mapEditor.getGsMap(),a=m(t,e);if(!a)return;const s=!(a.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(e,s),this.updateLater()}async confirmAction(e,t){await v(e)&&t()}selectLayer(e){this.selectedLayerUuid=e,this.updateToolbar(),this.updateContextMenu()}renameLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const a=this.mapEditor.getGsMap();if(!m(a,t))return;const s=p(a,t),n=d.createExecutionContext({index:s+1});d.execute("rename_layer",n)}deleteLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const a=this.mapEditor.getGsMap(),i=m(a,t);i&&this.confirmAction(`Delete layer "${i.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(t)))}moveLayerUp(e){if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const a=p(t,e);if(a<=0)return;const i=t.layers[a-1]?.uuid;i&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,i)),this.selectedLayerUuid=i)}layerIcon(e){return e.type===u.SCRIPTED?"code":"layers"}layerLabel(e,t){if(e.type===u.SCRIPTED){const a=e;return e.name??a.src?.split("/").pop()??`Scripted Layer ${t+1}`}return e.name??`Layer ${t+1}`}moveLayerDown(e){if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const a=p(t,e);if(a<0||a>=t.layers.length-1)return;const i=t.layers[a+1]?.uuid;i&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,i)),this.selectedLayerUuid=i)}renderToolbar(){const e=this.selectedLayerUuid!==void 0;return r`
            <k-command ?disabled=${!e}
                      title="Rename selected layer"
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
            </k-command>
            <k-command ?disabled=${!e}
                      title="Delete selected layer"
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
            </k-command>
        `}renderContextMenu(){const e=this.selectedLayerUuid!==void 0;return r`
            <k-command ?disabled=${!e}
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
                Rename
            </k-command>
            <k-command ?disabled=${!e}
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
                Delete
            </k-command>
        `}render(){return E(!this.mapEditor,()=>r`
                    <k-no-content message="Select a map."></k-no-content>`,()=>r`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((e,t)=>r`
                            <wa-tree-item @click="${()=>e.uuid&&this.selectLayer(e.uuid)}"
                                          class="${this.selectedLayerUuid===e.uuid?"selected":""}">
                                <k-icon name="${this.layerIcon(e)}"></k-icon>
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${this.layerLabel(e,t)}${t==0?r`
                                            <small>(basemap)</small>`:""}
                                            ${e.type===u.SCRIPTED?r`
                                            <small class="lang-badge">${e.lang??"js"}</small>`:""}
                                        </span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-command size="small"
                                                  icon="${e.visible!==!1?"eye":"eye-slash"}"
                                                  title="${e.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>e.uuid&&this.toggleVisible(e.uuid)}>
                                        </k-command>
                                        <k-command size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${t===0}"
                                                  .action=${()=>e.uuid&&this.moveLayerUp(e.uuid)}>
                                        </k-command>
                                        <k-command size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${t===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>e.uuid&&this.moveLayerDown(e.uuid)}>
                                        </k-command>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(e=>r`
                            <wa-tree-item>
                                <span>${o(e.src)}</span>
                                <k-command size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{e.uuid&&this.confirmAction(`Delete control "${o(e.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(e.uuid)))}}>
                                </k-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(e=>r`
                            <wa-tree-item>
                                <span>${o(e.src)}</span>
                                <k-command size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{e.uuid&&this.confirmAction(`Delete overlay "${o(e.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(e.uuid)))}}>
                                </k-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="highlighter"></k-icon> Styles
                        <wa-tree-item>
                            <span>Defined Styles: ${Object.keys(this.mapEditor.getGsMap()?.styles||{}).length}</span>
                        </wa-tree-item>
                        <wa-tree-item>
                            <span>Style Rules: ${this.mapEditor.getGsMap()?.styleRules?.length||0}</span>
                        </wa-tree-item>
                    </wa-tree-item>
                </wa-tree>
            `)}};l.styles=w`
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
    `;f([b()],l.prototype,"selectedLayerUuid",2);l=f([x("gs-map-props")],l);const R=U("extension-mapprops");h.registerContribution("contextmenu:filebrowser",{label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const e=y.get();return e instanceof g?!D(e):!0}});k({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async()=>{const e=y.get();if(!(e instanceof g))return;const t=O(e);if(!t){R.warn(`Unsupported file type: ${e.getName()}`);return}const a=e.getWorkspacePath(),i=d.createExecutionContext({source:t,url:a});await d.execute("add_layer",i)}}});h.registerContribution(M,{name:"map-props",label:"Map Properties",icon:"fg map-options",component:e=>r`<gs-map-props id="${e}"></gs-map-props>`});
