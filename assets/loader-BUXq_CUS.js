import{a as w,c as b,b as s,h as L,t as $}from"./default-xvQdiKMn.js";import{K as v,n as E,e as x,j as d,f as h,d as y,c as f,r as k,Z as M,s as U}from"./geospace-app-CCGOW35A.js";import{m as S,G as C,f as m,a as p,g as o,i as D,b as O}from"./gs-map-editor-3ZF3IM1n.js";import{p as u}from"./index-bn5ri0EB.js";import"./chunk.IVRNYRHD-Htfh_CZj.js";import"./preload-helper-WQhrSmCl.js";import"./chunk.2PWIIYRH-COD9mzAh.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";var _=Object.defineProperty,G=Object.getOwnPropertyDescriptor,g=(e,t,a,i)=>{for(var r=i>1?void 0:i?G(t,a):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(r=(i?c(t,a,r):c(r))||r);return i&&r&&_(t,a,r),r};let l=class extends v{doBeforeUI(){this.watch(E,e=>{this.onPartChanged(e)}),this.watch(S,({part:e})=>{this.onMapChanged({part:e})})}onPartChanged(e){if(!(e==this||e==this.mapEditor)){if(!(e instanceof C)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=e,this.requestUpdate()}}onMapChanged({part:e}){e==this.mapEditor&&this.requestUpdate()}toggleVisible(e){const t=this.mapEditor.getGsMap(),a=m(t,e);if(!a)return;const r=!(a.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(e,r),this.updateLater()}async confirmAction(e,t){await x(e)&&t()}selectLayer(e){this.selectedLayerUuid=e,this.updateToolbar(),this.updateContextMenu()}renameLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const a=this.mapEditor.getGsMap();if(!m(a,t))return;const r=p(a,t),n=d.createExecutionContext({index:r+1});d.execute("rename_layer",n)}deleteLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const a=this.mapEditor.getGsMap(),i=m(a,t);i&&this.confirmAction(`Delete layer "${i.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(t)))}moveLayerUp(e){if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const a=p(t,e);if(a<=0)return;const i=t.layers[a-1]?.uuid;i&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,i)),this.selectedLayerUuid=i)}layerIcon(e){return e.type===u.SCRIPTED?"code":"layers"}layerLabel(e,t){if(e.type===u.SCRIPTED){const a=e;return e.name??a.src?.split("/").pop()??`Scripted Layer ${t+1}`}return e.name??`Layer ${t+1}`}moveLayerDown(e){if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const a=p(t,e);if(a<0||a>=t.layers.length-1)return;const i=t.layers[a+1]?.uuid;i&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,i)),this.selectedLayerUuid=i)}renderToolbar(){const e=this.selectedLayerUuid!==void 0;return s`
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
        `}renderContextMenu(){const e=this.selectedLayerUuid!==void 0;return s`
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
        `}render(){return L(!this.mapEditor,()=>s`
                    <k-no-content message="Select a map."></k-no-content>`,()=>s`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((e,t)=>s`
                            <wa-tree-item @click="${()=>e.uuid&&this.selectLayer(e.uuid)}"
                                          class="${this.selectedLayerUuid===e.uuid?"selected":""}">
                                <k-icon name="${this.layerIcon(e)}"></k-icon>
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${this.layerLabel(e,t)}${t==0?s`
                                            <small>(basemap)</small>`:""}
                                            ${e.type===u.SCRIPTED?s`
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
                        ${this.mapEditor?.getGsMap()?.controls.map(e=>s`
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
                        ${this.mapEditor?.getGsMap()?.overlays.map(e=>s`
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
    `;g([b()],l.prototype,"selectedLayerUuid",2);l=g([$("gs-map-props")],l);const R=U("extension-mapprops");h.registerContribution("contextmenu:filebrowser",{label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const e=y.get();return e instanceof f?!D(e):!0}});k({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async()=>{const e=y.get();if(!(e instanceof f))return;const t=O(e);if(!t){R.warn(`Unsupported file type: ${e.getName()}`);return}const a=e.getWorkspacePath(),i=d.createExecutionContext({source:t,url:a});await d.execute("add_layer",i)}}});h.registerContribution(M,{name:"map-props",label:"Map Properties",icon:"fg map-options",component:e=>s`<gs-map-props id="${e}"></gs-map-props>`});
