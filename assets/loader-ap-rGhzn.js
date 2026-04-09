import{F as e,M as t,N as n,a as r,j as i,k as a,l as o,v as s,w as c,x as l}from"./dist-C1LXzuY9.js";import{I as u,N as d,Q as f,U as p,d as m}from"./repeat-D7ZcYN9W.js";import{d as h,n as g}from"./fs-access-D-fDaJ8V-BQA-EXV_.js";import{m as _,p as v,x as y}from"./src-CXtYjNuz.js";import"./lit-D5_fOPyp.js";import{i as b,o as x,r as S}from"./utils-BuAMQ0WJ.js";import{i as C,t as w}from"./gs-map-editor-DJRg11hM.js";import"./geo-DWChlc3G.js";var T=class extends r{constructor(...e){super(...e),this.dropPosition=`before`}doBeforeUI(){this.watch(a,e=>{this.onPartChanged(e)}),this.watch(C,({part:e})=>{this.onMapChanged({part:e})})}onPartChanged(e){if(!(e==this||e==this.mapEditor)){if(!(e instanceof w)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=e,this.requestUpdate()}}onMapChanged({part:e}){e==this.mapEditor&&this.requestUpdate()}toggleVisible(e){let t=v(this.mapEditor.getGsMap(),e);if(!t)return;let n=t.visible===!1;this.mapEditor?.mapOperations?.setLayerVisible(e,n),this.updateLater()}async confirmAction(e,t){await s(e)&&t()}selectLayer(e){this.selectedLayerUuid=e}renameLayer(e){if(!this.mapEditor)return;let n=e||this.selectedLayerUuid;if(!n)return;let r=this.mapEditor.getGsMap();if(!v(r,n))return;let i=_(r,n),a=t.createExecutionContext({index:i+1});t.execute(`rename_layer`,a)}deleteLayer(e){if(!this.mapEditor)return;let t=e||this.selectedLayerUuid;if(!t)return;let n=v(this.mapEditor.getGsMap(),t);n&&this.confirmAction(`Delete layer "${n.name||`Layer`}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(t)))}moveLayerUp(e){if(!this.mapEditor)return;let t=this.mapEditor.getGsMap();if(!t)return;let n=_(t,e);if(n<=0)return;let r=t.layers[n-1]?.uuid;r&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,r)),this.selectedLayerUuid=r)}layerLabel(e,t){return e.type===y.SCRIPTED?e.name??`Scripted Layer ${t+1}`:e.name??`Layer ${t+1}`}moveLayerDown(e){if(!this.mapEditor)return;let t=this.mapEditor.getGsMap();if(!t)return;let n=_(t,e);if(n<0||n>=t.layers.length-1)return;let r=t.layers[n+1]?.uuid;r&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,r)),this.selectedLayerUuid=r)}isCommandEvent(e){return e.composedPath().some(e=>e instanceof HTMLElement&&e.tagName===`LYRA-COMMAND`)}onLayerDragStart(e,t){if(!t||this.isCommandEvent(e)||!e.dataTransfer){e.preventDefault();return}this.draggedLayerUuid=t,this.dropTargetLayerUuid=void 0,this.selectedLayerUuid=t,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t)}onLayerDragOver(e,t){if(!t||!this.draggedLayerUuid||t===this.draggedLayerUuid)return;e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=`move`);let n=e.currentTarget;if(n){let t=n.getBoundingClientRect();this.dropPosition=e.clientY<t.top+t.height/2?`before`:`after`}this.dropTargetLayerUuid=t}dropLayerAtPosition(e,t,n){let r=this.mapEditor?.getGsMap();if(!r)return;let i=r.layers,a=_(r,e),o=_(r,t);if(a<0||o<0)return;let s=n===`before`?o:o+1,c=Math.min(s,i.length-1);if(c===a)return;let l=i[c]?.uuid;l&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,l)),this.selectedLayerUuid=e)}onLayerDrop(e,t){e.preventDefault();let n=this.draggedLayerUuid,r=this.dropPosition;this.draggedLayerUuid=void 0,this.dropTargetLayerUuid=void 0,this.dropPosition=`before`,!(!n||!t||n===t)&&this.dropLayerAtPosition(n,t,r)}onLayerDragEnd(){this.draggedLayerUuid=void 0,this.dropTargetLayerUuid=void 0,this.dropPosition=`before`}renderToolbar(){let e=this.selectedLayerUuid!==void 0,t=this.mapEditor?.getGsMap(),n=e&&t&&this.selectedLayerUuid?_(t,this.selectedLayerUuid):-1,r=n>0,i=n>=0&&!!t&&n<t.layers.length-1;return p`
            <docks-command ?disabled=${!e}
                      title="Rename selected layer"
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
            </docks-command>
            <docks-command ?disabled=${!e}
                      title="Delete selected layer"
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
            </docks-command>
            <docks-command ?disabled=${!r}
                      title="Move selected layer up"
                      icon="arrow-up"
                      .action=${()=>this.selectedLayerUuid&&this.moveLayerUp(this.selectedLayerUuid)}>
            </docks-command>
            <docks-command ?disabled=${!i}
                      title="Move selected layer down"
                      icon="arrow-down"
                      .action=${()=>this.selectedLayerUuid&&this.moveLayerDown(this.selectedLayerUuid)}>
            </docks-command>
        `}renderContextMenu(){let e=this.selectedLayerUuid!==void 0,t=this.mapEditor?.getGsMap(),n=e&&t&&this.selectedLayerUuid?_(t,this.selectedLayerUuid):-1,r=n>0,i=n>=0&&!!t&&n<t.layers.length-1;return p`
            <docks-command ?disabled=${!r}
                      icon="arrow-up"
                      .action=${()=>this.selectedLayerUuid&&this.moveLayerUp(this.selectedLayerUuid)}>
                Move Up
            </docks-command>
            <docks-command ?disabled=${!i}
                      icon="arrow-down"
                      .action=${()=>this.selectedLayerUuid&&this.moveLayerDown(this.selectedLayerUuid)}>
                Move Down
            </docks-command>
            <docks-command ?disabled=${!e}
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
                Rename
            </docks-command>
            <docks-command ?disabled=${!e}
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
                Delete
            </docks-command>
        `}renderContent(){return m(!this.mapEditor,()=>p`
                    <docks-no-content message="Select a map."></docks-no-content>`,()=>p`
                <wa-tree>
                    <wa-tree-item expanded>
                        ${l(`fg layers`)} Layers
                        ${this.mapEditor.getGsMap()?.layers.map((e,t)=>p`
                            <wa-tree-item @click="${()=>e.uuid&&this.selectLayer(e.uuid)}"
                                          draggable="true"
                                          @dragstart=${t=>this.onLayerDragStart(t,e.uuid)}
                                          @dragover=${t=>this.onLayerDragOver(t,e.uuid)}
                                          @drop=${t=>this.onLayerDrop(t,e.uuid)}
                                          @dragend=${()=>this.onLayerDragEnd()}
                                          class="${this.selectedLayerUuid===e.uuid?`selected`:``} ${this.draggedLayerUuid===e.uuid?`dragging`:``} ${this.dropTargetLayerUuid===e.uuid?`drop-target`:``} ${this.dropTargetLayerUuid===e.uuid&&this.dropPosition===`before`?`drop-before`:``} ${this.dropTargetLayerUuid===e.uuid&&this.dropPosition===`after`?`drop-after`:``}">
                                <div class="layer-item">
                                    <div class="layer-main">
                                        <docks-command size="small"
                                                  icon="${e.visible===!1?`eye-slash`:`eye`}"
                                                  title="${e.visible===!1?`Show layer`:`Hide layer`}"
                                                  .action=${()=>e.uuid&&this.toggleVisible(e.uuid)}>
                                        </docks-command>
                                        <div class="layer-name">
                                            <span>${this.layerLabel(e,t)}${t==0?p`
                                                <small>(basemap)</small>`:``}
                                                ${e.type===y.SCRIPTED?p`
                                                <small class="lang-badge">${e.lang??`js`}</small>`:``}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${l(`fg map-control`)} Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(e=>p`
                            <wa-tree-item>
                                <span>${S(e.src)}</span>
                                <docks-command size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{e.uuid&&this.confirmAction(`Delete control "${S(e.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(e.uuid)))}}>
                                </docks-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${l(`fg map-poi`)} Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(e=>p`
                            <wa-tree-item>
                                <span>${S(e.src)}</span>
                                <docks-command size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{e.uuid&&this.confirmAction(`Delete overlay "${S(e.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(e.uuid)))}}>
                                </docks-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${l(`highlighter`)} Styles
                        <wa-tree-item>
                            <span>Defined Styles: ${Object.keys(this.mapEditor.getGsMap()?.styles||{}).length}</span>
                        </wa-tree-item>
                        <wa-tree-item>
                            <span>Style Rules: ${this.mapEditor.getGsMap()?.styleRules?.length||0}</span>
                        </wa-tree-item>
                    </wa-tree-item>
                </wa-tree>
            `)}static{this.styles=f`
        :host {
            display: block;
            min-height: 0;
            /* Align with docks-toolbar: tree docks-commands are not inside docks-toolbar. */
            --wa-form-control-padding-inline: var(--wa-space-2xs);
        }

        wa-tree {
            display: block;
            min-height: 0;
        }

        wa-tree-item.selected {
            background-color: var(--wa-color-primary-50);
        }

        wa-tree-item.dragging {
            opacity: 0.6;
        }

        wa-tree-item.drop-target {
            background-color: var(--wa-color-brand-fill-quiet);
        }

        wa-tree-item.drop-before {
            box-shadow: inset 0 2px 0 var(--wa-color-brand-fill-loud);
        }

        wa-tree-item.drop-after {
            box-shadow: inset 0 -2px 0 var(--wa-color-brand-fill-loud);
        }

        .layer-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
        }

        .layer-main {
            display: flex;
            align-items: center;
            flex: 1;
            min-width: 0;
            gap: 4px;
        }

        .layer-name {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
    `}};c([d()],T.prototype,`selectedLayerUuid`,void 0),c([d()],T.prototype,`draggedLayerUuid`,void 0),c([d()],T.prototype,`dropTargetLayerUuid`,void 0),c([d()],T.prototype,`dropPosition`,void 0),T=c([u(`gs-map-props`)],T);var E=h(`extension-mapprops`);n.registerContribution(`contextmenu:filebrowser`,{label:`Add as Map Layer`,icon:`layer-group`,command:`add_layer_from_selection`,disabled:()=>{let e=i.get();return e instanceof g?!x(e):!0}}),e({command:{id:`add_layer_from_selection`,name:`Add Layer from Selected File`,description:`Adds the selected file as a map layer`,parameters:[]},handler:{execute:async()=>{let e=i.get();if(!(e instanceof g))return;let n=b(e);if(!n){E.warn(`Unsupported file type: ${e.getName()}`);return}let r=e.getWorkspacePath(),a=t.createExecutionContext({source:n,url:r});await t.execute(`add_layer`,a)}}}),n.registerContribution(o,{name:`map-props`,label:`Map Properties`,icon:`fg map-options`,component:e=>p`<gs-map-props id="${e}"></gs-map-props>`});