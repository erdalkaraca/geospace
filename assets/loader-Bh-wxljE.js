import{d as e,n as t}from"./fs-access-D-fDaJ8V-4fi1R5VX.js";import{Q as n,U as r,_ as i,b as a,i as o}from"./repeat-jF3QiNU_.js";import{F as s,L as c,N as l,P as u,S as d,T as f,a as p,j as m,l as h,y as g}from"./dist-Bs3vRgSi.js";import{m as _,p as v,x as y}from"./src-Der9vNwe.js";import"./lit-CjwmRm-7.js";import{i as b,o as x,r as S}from"./utils-YugBxwpM.js";import{i as C,t as w}from"./gs-map-editor-BPogudwq.js";import"./geo-BE8bRSfB.js";var T=class extends p{constructor(...e){super(...e),this.dropPosition=`before`}doBeforeUI(){this.watch(m,e=>{this.onPartChanged(e)}),this.watch(C,({part:e})=>{this.onMapChanged({part:e})})}onPartChanged(e){if(!(e==this||e==this.mapEditor)){if(!(e instanceof w)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=e,this.requestUpdate()}}onMapChanged({part:e}){e==this.mapEditor&&this.requestUpdate()}toggleVisible(e){let t=v(this.mapEditor.getGsMap(),e);if(!t)return;let n=t.visible===!1;this.mapEditor?.mapOperations?.setLayerVisible(e,n),this.updateLater()}async confirmAction(e,t){await g(e)&&t()}selectLayer(e){this.selectedLayerUuid=e}renameLayer(e){if(!this.mapEditor)return;let t=e||this.selectedLayerUuid;if(!t)return;let n=this.mapEditor.getGsMap();if(!v(n,t))return;let r=_(n,t),i=u.createExecutionContext({index:r+1});u.execute(`rename_layer`,i)}deleteLayer(e){if(!this.mapEditor)return;let t=e||this.selectedLayerUuid;if(!t)return;let n=v(this.mapEditor.getGsMap(),t);n&&this.confirmAction(`Delete layer "${n.name||`Layer`}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(t)))}moveLayerUp(e){if(!this.mapEditor)return;let t=this.mapEditor.getGsMap();if(!t)return;let n=_(t,e);if(n<=0)return;let r=t.layers[n-1]?.uuid;r&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,r)),this.selectedLayerUuid=r)}layerLabel(e,t){return e.type===y.SCRIPTED?e.name??`Scripted Layer ${t+1}`:e.name??`Layer ${t+1}`}moveLayerDown(e){if(!this.mapEditor)return;let t=this.mapEditor.getGsMap();if(!t)return;let n=_(t,e);if(n<0||n>=t.layers.length-1)return;let r=t.layers[n+1]?.uuid;r&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,r)),this.selectedLayerUuid=r)}isCommandEvent(e){return e.composedPath().some(e=>e instanceof HTMLElement&&e.tagName===`DOCKS-COMMAND`)}onLayerDragStart(e,t){if(!t||this.isCommandEvent(e)||!e.dataTransfer){e.preventDefault();return}this.draggedLayerUuid=t,this.dropTargetLayerUuid=void 0,this.selectedLayerUuid=t,e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t)}onLayerDragOver(e,t){if(!t||!this.draggedLayerUuid||t===this.draggedLayerUuid)return;e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=`move`);let n=e.currentTarget;if(n){let t=n.getBoundingClientRect();this.dropPosition=e.clientY<t.top+t.height/2?`before`:`after`}this.dropTargetLayerUuid=t}dropLayerAtPosition(e,t,n){let r=this.mapEditor?.getGsMap();if(!r)return;let i=r.layers,a=_(r,e),o=_(r,t);if(a<0||o<0)return;let s=n===`before`?o:o+1,c=Math.min(s,i.length-1);if(c===a)return;let l=i[c]?.uuid;l&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,l)),this.selectedLayerUuid=e)}onLayerDrop(e,t){e.preventDefault();let n=this.draggedLayerUuid,r=this.dropPosition;this.draggedLayerUuid=void 0,this.dropTargetLayerUuid=void 0,this.dropPosition=`before`,!(!n||!t||n===t)&&this.dropLayerAtPosition(n,t,r)}onLayerDragEnd(){this.draggedLayerUuid=void 0,this.dropTargetLayerUuid=void 0,this.dropPosition=`before`}renderToolbar(){let e=this.selectedLayerUuid!==void 0,t=this.mapEditor?.getGsMap(),n=e&&t&&this.selectedLayerUuid?_(t,this.selectedLayerUuid):-1,i=n>0,a=n>=0&&!!t&&n<t.layers.length-1;return r`
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
            <docks-command ?disabled=${!i}
                      title="Move selected layer up"
                      icon="arrow-up"
                      .action=${()=>this.selectedLayerUuid&&this.moveLayerUp(this.selectedLayerUuid)}>
            </docks-command>
            <docks-command ?disabled=${!a}
                      title="Move selected layer down"
                      icon="arrow-down"
                      .action=${()=>this.selectedLayerUuid&&this.moveLayerDown(this.selectedLayerUuid)}>
            </docks-command>
        `}renderContextMenu(){let e=this.selectedLayerUuid!==void 0,t=this.mapEditor?.getGsMap(),n=e&&t&&this.selectedLayerUuid?_(t,this.selectedLayerUuid):-1,i=n>0,a=n>=0&&!!t&&n<t.layers.length-1;return r`
            <docks-command ?disabled=${!i}
                      icon="arrow-up"
                      .action=${()=>this.selectedLayerUuid&&this.moveLayerUp(this.selectedLayerUuid)}>
                Move Up
            </docks-command>
            <docks-command ?disabled=${!a}
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
        `}renderContent(){return o(!this.mapEditor,()=>r`
                    <docks-no-content message="Select a map."></docks-no-content>`,()=>r`
                <wa-tree>
                    <wa-tree-item expanded>
                        ${d(`fg layers`)} Layers
                        ${this.mapEditor.getGsMap()?.layers.map((e,t)=>r`
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
                                            <span>${this.layerLabel(e,t)}${t==0?r`
                                                <small>(basemap)</small>`:``}
                                                ${e.type===y.SCRIPTED?r`
                                                <small class="lang-badge">${e.lang??`js`}</small>`:``}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${d(`fg map-control`)} Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(e=>r`
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
                        ${d(`fg map-poi`)} Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(e=>r`
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
                        ${d(`highlighter`)} Styles
                        <wa-tree-item>
                            <span>Defined Styles: ${Object.keys(this.mapEditor.getGsMap()?.styles||{}).length}</span>
                        </wa-tree-item>
                        <wa-tree-item>
                            <span>Style Rules: ${this.mapEditor.getGsMap()?.styleRules?.length||0}</span>
                        </wa-tree-item>
                    </wa-tree-item>
                </wa-tree>
            `)}static{this.styles=n`
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
    `}};f([i()],T.prototype,`selectedLayerUuid`,void 0),f([i()],T.prototype,`draggedLayerUuid`,void 0),f([i()],T.prototype,`dropTargetLayerUuid`,void 0),f([i()],T.prototype,`dropPosition`,void 0),T=f([a(`gs-map-props`)],T);var E=e(`extension-mapprops`);s.registerContribution(`contextmenu:filebrowser`,{label:`Add as Map Layer`,icon:`layer-group`,command:`add_layer_from_selection`,disabled:()=>{let e=l.get();return e instanceof t?!x(e):!0}}),c({command:{id:`add_layer_from_selection`,name:`Add Layer from Selected File`,description:`Adds the selected file as a map layer`,parameters:[]},handler:{execute:async()=>{let e=l.get();if(!(e instanceof t))return;let n=b(e);if(!n){E.warn(`Unsupported file type: ${e.getName()}`);return}let r=e.getWorkspacePath(),i=u.createExecutionContext({source:n,url:r});await u.execute(`add_layer`,i)}}}),s.registerContribution(h,{name:`map-props`,label:`Map Properties`,icon:`fg map-options`,component:e=>r`<gs-map-props id="${e}"></gs-map-props>`});