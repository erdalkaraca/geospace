const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/git-extension-Da41IQy4.js","assets/index-ge_ZvpWO.js","assets/index-C2t38aP0.css","assets/pyterminal-extension-DPNY-zAY.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-DhxU5fBR.js","assets/p12-splitter-BUZVwQ1c.js","assets/package-manager-extension-v72rKhOP.js","assets/notebook-extension-DwKnLVkX.js","assets/editor.main-DU25sjvv.js","assets/editor-BhPcksyq.css","assets/command-palette-extension-B7nENWYn.js","assets/download-extension-DdrOjsul.js","assets/unzip-extension-DPbZuX16.js","assets/md-editor-extension-B7F_DS3O.js","assets/monaco-editor-extension-Cjwef1fN.js","assets/memory-usage-extension-DrQuzQs2.js","assets/webdav-extension-B1_GoFwR.js","assets/settings-tree-extension-BQjbijGw.js","assets/mapbuilder-extension-bbNd8guT.js","assets/style-editor-extension-CwYhtB0E.js","assets/overpass-extension-Dq60gIJp.js","assets/gtfs-extension-dSPhMByJ.js"])))=>i.map(i=>d[i]);
import{x as z,B as Ar,P as Zs,o as un,g as Qs,i as Xs,a as $t,t as gt,b as ro,n as ze,r as et,e as zr,E as Rt,c as Ur,d as ea,f as ta,h as no,p as io,v as Nr,j as yn,M as Si,T as so,m as ra,k as ao,l as Wt,q as na,_ as ht,s as ws,u as oo,w as lo,y as co,z as uo,G as xs,A as rr,D as ia,C as Is,F as po,H as ho,I as fo,J as mo,K as ks,L as go,N as vo}from"./index-ge_ZvpWO.js";const yo="@kispace/geospace",bo="0.12.35",wo={"@kispace/appspace":"file:../appspace","esbuild-wasm":"^0.25.11",ol:"^10.6.1","ol-mapbox-style":"^13.1.0",osmtogeojson:"^3.0.0-beta.5","font-gis":"^1.0.6","pace-js":"^1.2.4","pubsub-js":"^1.9.5"},xo={"@testing-library/jest-dom":"^6.9.1","@types/node":"^24.9.2","@types/pubsub-js":"^1.8.6","@types/toastify-js":"^1.12.4","@vitest/coverage-v8":"^4.0.6","@vitest/ui":"^4.0.6","happy-dom":"^20.0.10",jsdom:"^27.1.0","rollup-plugin-visualizer":"^6.0.5",typescript:"~5.9.3",vite:"^7.1.12","vite-plugin-cross-origin-isolation":"^0.1.6","vite-plugin-mkcert":"^1.17.9","vite-plugin-static-copy":"^3.1.4","vite-plugin-zip":"^1.0.1",vitest:"^4.0.6",esbuild:"^0.25.11"},En={name:yo,version:bo,dependencies:wo,devDependencies:xo};class Vi{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,r){return e[r]||this.parent?.getProxy()[r]}set(e,r,s){e[r]=s}put(e,r){this.variables[e]=r}getProxy(){return this.proxy}createChild(e={}){const r=new Vi(e);return r.parent=this,this.children.push(r),r}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const zt=new Vi({}),sr=zt.createChild({});sr.put("html",z);sr.put("render",Ar);const Ss={debug:0,info:1,warning:2,error:3};let Io="debug";const Jr={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let ii=null;const Li=[];function bn(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class ko{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,r){Zr(this.source,e,r)}}function So(t){return Ss[t]>=Ss[Io]}function Zr(t,e,r){So(r)&&(ii?ii(t,e,r):(Li.push({source:t,message:e,level:r}),Jr[r==="error"?"error":r==="warning"?"warn":r==="debug"?"debug":"log"](`[${t}] ${e}`)))}function Ao(){console.log=function(...t){Jr.log.apply(console,t),Zr("Console",t.map(e=>bn(e)).join(" "),"info")},console.info=function(...t){Jr.info.apply(console,t),Zr("Console",t.map(e=>bn(e)).join(" "),"info")},console.warn=function(...t){Jr.warn.apply(console,t),Zr("Console",t.map(e=>bn(e)).join(" "),"warning")},console.error=function(...t){Jr.error.apply(console,t),Zr("Console",t.map(e=>bn(e)).join(" "),"error")},console.debug=function(...t){Jr.debug.apply(console,t),Zr("Console",t.map(e=>bn(e)).join(" "),"debug")}}Ao();function Eo(t){for(ii=t;Li.length>0;){const e=Li.shift();e&&t(e.source,e.message,e.level)}}function _o(){ii=null}function Dn(t){return new ko(t)}const bt=Dn("System");zt.put("logger",bt);var Co=Object.defineProperty,Oo=(t,e,r)=>e in t?Co(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ai=(t,e,r)=>(Oo(t,typeof e!="symbol"?e+"":e,r),r),To=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},Ei=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Hn=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},As=(t,e,r)=>(To(t,e,"access private method"),r);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function sa(t,e){return Object.is(t,e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ft=null,On=!1,ei=1;const si=Symbol("SIGNAL");function Qr(t){const e=ft;return ft=t,e}function Po(){return ft}function Lo(){return On}const Gi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function hi(t){if(On)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(ft===null)return;ft.consumerOnSignalRead(t);const e=ft.nextProducerIndex++;if(rn(ft),e<ft.producerNode.length&&ft.producerNode[e]!==t&&Ri(ft)){const r=ft.producerNode[e];fi(r,ft.producerIndexOfThis[e])}ft.producerNode[e]!==t&&(ft.producerNode[e]=t,ft.producerIndexOfThis[e]=Ri(ft)?la(t,ft,e):0),ft.producerLastReadVersion[e]=t.version}function Ro(){ei++}function aa(t){if(!(!t.dirty&&t.lastCleanEpoch===ei)){if(!t.producerMustRecompute(t)&&!Fo(t)){t.dirty=!1,t.lastCleanEpoch=ei;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=ei}}function oa(t){if(t.liveConsumerNode===void 0)return;const e=On;On=!0;try{for(const r of t.liveConsumerNode)r.dirty||Do(r)}finally{On=e}}function $o(){return ft?.consumerAllowSignalWrites!==!1}function Do(t){var e;t.dirty=!0,oa(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function No(t){return t&&(t.nextProducerIndex=0),Qr(t)}function Mo(t,e){if(Qr(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Ri(t))for(let r=t.nextProducerIndex;r<t.producerNode.length;r++)fi(t.producerNode[r],t.producerIndexOfThis[r]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function Fo(t){rn(t);for(let e=0;e<t.producerNode.length;e++){const r=t.producerNode[e],s=t.producerLastReadVersion[e];if(s!==r.version||(aa(r),s!==r.version))return!0}return!1}function la(t,e,r){var s;if(Hi(t),rn(t),t.liveConsumerNode.length===0){(s=t.watched)==null||s.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)t.producerIndexOfThis[i]=la(t.producerNode[i],t,i)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(e)-1}function fi(t,e){var r;if(Hi(t),rn(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(r=t.unwatched)==null||r.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)fi(t.producerNode[i],t.producerIndexOfThis[i])}const s=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[s],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[s],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const i=t.liveConsumerIndexOfThis[e],u=t.liveConsumerNode[e];rn(u),u.producerIndexOfThis[i]=e}}function Ri(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function rn(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function Hi(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ca(t){if(aa(t),hi(t),t.value===$i)throw t.error;return t.value}function qo(t){const e=Object.create(zo);e.computation=t;const r=()=>ca(e);return r[si]=e,r}const _i=Symbol("UNSET"),Ci=Symbol("COMPUTING"),$i=Symbol("ERRORED"),zo={...Gi,value:_i,dirty:!0,error:null,equal:sa,producerMustRecompute(t){return t.value===_i||t.value===Ci},producerRecomputeValue(t){if(t.value===Ci)throw new Error("Detected cycle in computations.");const e=t.value;t.value=Ci;const r=No(t);let s,i=!1;try{s=t.computation.call(t.wrapper),i=e!==_i&&e!==$i&&t.equal.call(t.wrapper,e,s)}catch(u){s=$i,t.error=u}finally{Mo(t,r)}if(i){t.value=e;return}t.value=s,t.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Uo(){throw new Error}let jo=Uo;function Bo(){jo()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wo(t){const e=Object.create(Ho);e.value=t;const r=()=>(hi(e),e.value);return r[si]=e,r}function Vo(){return hi(this),this.value}function Go(t,e){$o()||Bo(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,Ko(t))}const Ho={...Gi,equal:sa,value:void 0};function Ko(t){t.version++,Ro(),oa(t)}/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=Symbol("node");var hr;(t=>{var e,r,s,i;class u{constructor(v,C={}){Hn(this,r),Ai(this,e);const S=Wo(v)[si];if(this[Et]=S,S.wrapper=this,C){const b=C.equals;b&&(S.equal=b),S.watched=C[t.subtle.watched],S.unwatched=C[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Vo.call(this[Et])}set(v){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Lo())throw new Error("Writes to signals not permitted during Watcher callback");const C=this[Et];Go(C,v)}}e=Et,r=new WeakSet,t.isState=d=>typeof d=="object"&&Ei(r,d),t.State=u;class a{constructor(v,C){Hn(this,i),Ai(this,s);const S=qo(v)[si];if(S.consumerAllowSignalWrites=!0,this[Et]=S,S.wrapper=this,C){const b=C.equals;b&&(S.equal=b),S.watched=C[t.subtle.watched],S.unwatched=C[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return ca(this[Et])}}s=Et,i=new WeakSet,t.isComputed=d=>typeof d=="object"&&Ei(i,d),t.Computed=a,(d=>{var v,C,L,S;function b($){let V,q=null;try{q=Qr(null),V=$()}finally{Qr(q)}return V}d.untrack=b;function A($){var V;if(!(0,t.isComputed)($)&&!(0,t.isWatcher)($))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((V=$[Et].producerNode)==null?void 0:V.map(q=>q.wrapper))??[]}d.introspectSources=A;function M($){var V;if(!(0,t.isComputed)($)&&!(0,t.isState)($))throw new TypeError("Called introspectSinks without a Signal argument");return((V=$[Et].liveConsumerNode)==null?void 0:V.map(q=>q.wrapper))??[]}d.introspectSinks=M;function J($){if(!(0,t.isComputed)($)&&!(0,t.isState)($))throw new TypeError("Called hasSinks without a Signal argument");const V=$[Et].liveConsumerNode;return V?V.length>0:!1}d.hasSinks=J;function de($){if(!(0,t.isComputed)($)&&!(0,t.isWatcher)($))throw new TypeError("Called hasSources without a Computed or Watcher argument");const V=$[Et].producerNode;return V?V.length>0:!1}d.hasSources=de;class _e{constructor(V){Hn(this,C),Hn(this,L),Ai(this,v);let q=Object.create(Gi);q.wrapper=this,q.consumerMarkedDirty=V,q.consumerIsAlwaysLive=!0,q.consumerAllowSignalWrites=!1,q.producerNode=[],this[Et]=q}watch(...V){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");As(this,L,S).call(this,V);const q=this[Et];q.dirty=!1;const O=Qr(q);for(const B of V)hi(B[Et]);Qr(O)}unwatch(...V){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");As(this,L,S).call(this,V);const q=this[Et];rn(q);for(let O=q.producerNode.length-1;O>=0;O--)if(V.includes(q.producerNode[O].wrapper)){fi(q.producerNode[O],q.producerIndexOfThis[O]);const B=q.producerNode.length-1;if(q.producerNode[O]=q.producerNode[B],q.producerIndexOfThis[O]=q.producerIndexOfThis[B],q.producerNode.length--,q.producerIndexOfThis.length--,q.nextProducerIndex--,O<q.producerNode.length){const Z=q.producerIndexOfThis[O],ke=q.producerNode[O];Hi(ke),ke.liveConsumerIndexOfThis[Z]=O}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[Et].producerNode.filter(q=>q.dirty).map(q=>q.wrapper)}}v=Et,C=new WeakSet,L=new WeakSet,S=function($){for(const V of $)if(!(0,t.isComputed)(V)&&!(0,t.isState)(V))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=$=>Ei(C,$),d.Watcher=_e;function j(){var $;return($=Po())==null?void 0:$.wrapper}d.currentComputed=j,d.watched=Symbol("watched"),d.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(hr||(hr={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yo=Symbol("SignalWatcherBrand"),Jo=new FinalizationRegistry((({watcher:t,signal:e})=>{t.unwatch(e)})),Es=new WeakMap;function mi(t){return t[Yo]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new hr.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new hr.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new hr.subtle.Watcher((function(){const r=Es.get(this);r!==void 0&&(r._$Si===!1&&r.requestUpdate(),this.watch())}));Es.set(e,this),Jo.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((r=>r.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,r,s){this._$So=!0,super.requestUpdate(e,r,s)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const r=this._$So;this.requestUpdate(),this._$So=r}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */hr.State;hr.Computed;const Wr=(t,e)=>new hr.State(t,e),ar=(t,e)=>{Zs.subscribe(t,(r,s)=>e(s))},mt=(t,e)=>{Zs.publish(t,e)},Ki=t=>function(e,r,s){const i=s.value;return i.topic=t,s};zt.put("subscribe",ar);zt.put("publish",mt);const Nn="events/contributionregistry/contributionsChanged";class Zo{constructor(){this.contributions=new Map}registerContribution(e,r){const s=this.getContributions(e);if(r.disabled instanceof Function){const i=r.disabled;r.disabled=new hr.Computed(i)}s.push(r),mt(Nn,{target:e,contributions:s})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const Ye=new Zo;zt.put("contributionRegistry",Ye);const Qo={},Ue=Wr(null),ti=Wr(null),Di=Wr(null),ua=Wr(0),Vt=Wr(void 0);Wr({name:"",timestamp:0});class Xo{constructor(e,r,s,i,u){this.id=e,this.name=r,this.description=s,this.parameters=i||[],this.output=u||[]}}class pa{async execute(e,r){return Pe.execute(e,r)}async undo(){}async redo(){}}class el{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,r){this.handlers.has(e)||this.handlers.set(e,[]);const s=this.handlers.get(e);s.push(r),s.sort((i,u)=>(u.ranking??0)-(i.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e,r){return{source:e,params:r||{},activePart:Ue.get(),activeEditor:ti.get()}}execute(e,r={}){const s=this.getHandler(e);if(!s)throw new Error(`No handlers registered for command: ${e}`);for(const i of s)if(i.canExecute===void 0||i.canExecute(r))return i.execute(r);bt.error(`No handler found to execute command: ${e}`)}createAndRegisterCommand(e,r,s,i,u){const a=new Xo(e,r,s,i);this.registerCommand(a),u&&this.registerHandler(e,u)}registerCommand(e){this.commands[e.id]=e,bt.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(r=>(Pe.getHandler(r.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(e))).reduce((r,s)=>(r[s.id]=s,r),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const r=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(r,e.handler),e.contribution&&e.contribution.target&&Ye.registerContribution(e.contribution.target,{command:r,...e.contribution})}}const Pe=new el;zt.put("commandRegistry",Pe);const ct=t=>{Pe.registerAll(t)};class tl{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Pe.listCommands();Object.values(e).forEach(r=>{r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)})}watchCommandRegistry(){const e=Pe.registerCommand.bind(Pe);Pe.registerCommand=r=>{e(r),r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const r=e.toUpperCase().split("+").map(a=>a.trim());if(r.length===0)return null;const s={ctrl:!1,alt:!1,shift:!1,meta:!1},i=r[r.length-1],u=r.slice(0,-1);for(const a of u)switch(a){case"CTRL":case"CONTROL":s.ctrl=!0;break;case"ALT":case"OPTION":s.alt=!0;break;case"SHIFT":s.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":s.meta=!0;break;default:bt.warn(`Unknown modifier: ${a}`)}return s.key=this.normalizeKey(i),s}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const r=[];return e.ctrl&&r.push("ctrl"),e.alt&&r.push("alt"),e.shift&&r.push("shift"),e.meta&&r.push("meta"),r.sort(),`${r.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,r){const s=this.parseKeyBinding(r);if(!s)return bt.error(`Invalid key binding: ${r}`),!1;s.commandId=e;const i=this.getBindingKey(s);this.bindings.has(i)||this.bindings.set(i,[]);const u=this.bindings.get(i);return u.find(d=>d.commandId===e)?(bt.error(`Key binding ${r} already registered for command ${e}`),!1):(u.push(s),bt.debug(`Key binding registered: ${r} -> ${e}`),!0)}unregisterKeyBinding(e,r){if(r){const s=this.parseKeyBinding(r);if(s){const i=this.getBindingKey(s),u=this.bindings.get(i);if(u){const a=u.filter(d=>d.commandId!==e);a.length===0?this.bindings.delete(i):this.bindings.set(i,a)}}}else for(const[s,i]of this.bindings.entries()){const u=i.filter(a=>a.commandId!==e);u.length===0?this.bindings.delete(s):this.bindings.set(s,u)}}getKeyBindingsForCommand(e){const r=[];for(const s of this.bindings.values())for(const i of s)i.commandId===e&&r.push(this.formatKeyBinding(i));return r}formatKeyBinding(e){const r=[];e.ctrl&&r.push("Ctrl"),e.alt&&r.push("Alt"),e.shift&&r.push("Shift"),e.meta&&r.push("Cmd");let s=e.key;return s.length===1?s=s.toUpperCase():s=s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),r.push(s),r.join("+")}handleKeyDown(e){if(!this.enabled)return;const r=e.target;if(r&&(r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.isContentEditable)){const a=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&a==="P"))return}const s={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},i=this.getBindingKey(s),u=this.bindings.get(i);if(u&&u.length>0){const a=u[0];try{e.preventDefault(),e.stopPropagation();const d=Pe.createExecutionContext(this,{});Pe.execute(a.commandId,d),bt.info(`Executed command via key binding: ${a.commandId}`)}catch(d){bt.error(`Failed to execute command ${a.commandId}: ${d.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}bt.debug("KeyBindingManager initializing...");const da=new tl;bt.debug("KeyBindingManager initialized");zt.put("keyBindingManager",da);function Yi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Vr=Yi();function ha(t){Vr=t}var Tn={exec:()=>null};function Ve(t,e=""){let r=typeof t=="string"?t:t.source,s={replace:(i,u)=>{let a=typeof u=="string"?u:u.source;return a=a.replace(Ft.caret,"$1"),r=r.replace(i,a),s},getRegex:()=>new RegExp(r,e)};return s}var Ft={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},rl=/^(?:[ \t]*(?:\n|$))+/,nl=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,il=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Mn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,sl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ji=/(?:[*+-]|\d{1,9}[.)])/,fa=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ma=Ve(fa).replace(/bull/g,Ji).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),al=Ve(fa).replace(/bull/g,Ji).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Zi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ol=/^[^\n]+/,Qi=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ll=Ve(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),cl=Ve(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ji).getRegex(),gi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Xi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ul=Ve("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Xi).replace("tag",gi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ga=Ve(Zi).replace("hr",Mn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gi).getRegex(),pl=Ve(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ga).getRegex(),es={blockquote:pl,code:nl,def:ll,fences:il,heading:sl,hr:Mn,html:ul,lheading:ma,list:cl,newline:rl,paragraph:ga,table:Tn,text:ol},_s=Ve("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Mn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gi).getRegex(),dl={...es,lheading:al,table:_s,paragraph:Ve(Zi).replace("hr",Mn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_s).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gi).getRegex()},hl={...es,html:Ve(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Xi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Tn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ve(Zi).replace("hr",Mn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ma).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},fl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ml=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,va=/^( {2,}|\\)\n(?!\s*$)/,gl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vi=/[\p{P}\p{S}]/u,ts=/[\s\p{P}\p{S}]/u,ya=/[^\s\p{P}\p{S}]/u,vl=Ve(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ts).getRegex(),ba=/(?!~)[\p{P}\p{S}]/u,yl=/(?!~)[\s\p{P}\p{S}]/u,bl=/(?:[^\s\p{P}\p{S}]|~)/u,wl=Ve(/link|code|html/,"g").replace("link",new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code",new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html",/<(?! )[^<>]*?>/).getRegex(),wa=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,xl=Ve(wa,"u").replace(/punct/g,vi).getRegex(),Il=Ve(wa,"u").replace(/punct/g,ba).getRegex(),xa="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",kl=Ve(xa,"gu").replace(/notPunctSpace/g,ya).replace(/punctSpace/g,ts).replace(/punct/g,vi).getRegex(),Sl=Ve(xa,"gu").replace(/notPunctSpace/g,bl).replace(/punctSpace/g,yl).replace(/punct/g,ba).getRegex(),Al=Ve("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ya).replace(/punctSpace/g,ts).replace(/punct/g,vi).getRegex(),El=Ve(/\\(punct)/,"gu").replace(/punct/g,vi).getRegex(),_l=Ve(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Cl=Ve(Xi).replace("(?:-->|$)","-->").getRegex(),Ol=Ve("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Cl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ai=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Tl=Ve(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ai).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ia=Ve(/^!?\[(label)\]\[(ref)\]/).replace("label",ai).replace("ref",Qi).getRegex(),ka=Ve(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qi).getRegex(),Pl=Ve("reflink|nolink(?!\\()","g").replace("reflink",Ia).replace("nolink",ka).getRegex(),Cs=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,rs={_backpedal:Tn,anyPunctuation:El,autolink:_l,blockSkip:wl,br:va,code:ml,del:Tn,emStrongLDelim:xl,emStrongRDelimAst:kl,emStrongRDelimUnd:Al,escape:fl,link:Tl,nolink:ka,punctuation:vl,reflink:Ia,reflinkSearch:Pl,tag:Ol,text:gl,url:Tn},Ll={...rs,link:Ve(/^!?\[(label)\]\((.*?)\)/).replace("label",ai).getRegex(),reflink:Ve(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ai).getRegex()},Ni={...rs,emStrongRDelimAst:Sl,emStrongLDelim:Il,url:Ve(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Cs).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Ve(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Cs).getRegex()},Rl={...Ni,br:Ve(va).replace("{2,}","*").getRegex(),text:Ve(Ni.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Kn={normal:es,gfm:dl,pedantic:hl},wn={normal:rs,gfm:Ni,breaks:Rl,pedantic:Ll},$l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Os=t=>$l[t];function ur(t,e){if(e){if(Ft.escapeTest.test(t))return t.replace(Ft.escapeReplace,Os)}else if(Ft.escapeTestNoEncode.test(t))return t.replace(Ft.escapeReplaceNoEncode,Os);return t}function Ts(t){try{t=encodeURI(t).replace(Ft.percentDecode,"%")}catch{return null}return t}function Ps(t,e){let r=t.replace(Ft.findPipe,(u,a,d)=>{let v=!1,C=a;for(;--C>=0&&d[C]==="\\";)v=!v;return v?"|":" |"}),s=r.split(Ft.splitPipe),i=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(Ft.slashPipe,"|");return s}function xn(t,e,r){let s=t.length;if(s===0)return"";let i=0;for(;i<s&&t.charAt(s-i-1)===e;)i++;return t.slice(0,s-i)}function Dl(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let s=0;s<t.length;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])r++;else if(t[s]===e[1]&&(r--,r<0))return s;return r>0?-2:-1}function Ls(t,e,r,s,i){let u=e.href,a=e.title||null,d=t[1].replace(i.other.outputLinkReplace,"$1");s.state.inLink=!0;let v={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:u,title:a,text:d,tokens:s.inlineTokens(d)};return s.state.inLink=!1,v}function Nl(t,e,r){let s=t.match(r.other.indentCodeCompensation);if(s===null)return e;let i=s[1];return e.split(`
`).map(u=>{let a=u.match(r.other.beginningSpace);if(a===null)return u;let[d]=a;return d.length>=i.length?u.slice(i.length):u}).join(`
`)}var oi=class{options;rules;lexer;constructor(t){this.options=t||Vr}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:xn(r,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let r=e[0],s=Nl(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let s=xn(r,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(r=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:xn(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let r=xn(e[0],`
`).split(`
`),s="",i="",u=[];for(;r.length>0;){let a=!1,d=[],v;for(v=0;v<r.length;v++)if(this.rules.other.blockquoteStart.test(r[v]))d.push(r[v]),a=!0;else if(!a)d.push(r[v]);else break;r=r.slice(v);let C=d.join(`
`),L=C.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${C}`:C,i=i?`${i}
${L}`:L;let S=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(L,u,!0),this.lexer.state.top=S,r.length===0)break;let b=u.at(-1);if(b?.type==="code")break;if(b?.type==="blockquote"){let A=b,M=A.raw+`
`+r.join(`
`),J=this.blockquote(M);u[u.length-1]=J,s=s.substring(0,s.length-A.raw.length)+J.raw,i=i.substring(0,i.length-A.text.length)+J.text;break}else if(b?.type==="list"){let A=b,M=A.raw+`
`+r.join(`
`),J=this.list(M);u[u.length-1]=J,s=s.substring(0,s.length-b.raw.length)+J.raw,i=i.substring(0,i.length-A.raw.length)+J.raw,r=M.substring(u.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:u,text:i}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r=e[1].trim(),s=r.length>1,i={type:"list",raw:"",ordered:s,start:s?+r.slice(0,-1):"",loose:!1,items:[]};r=s?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=s?r:"[*+-]");let u=this.rules.other.listItemRegex(r),a=!1;for(;t;){let v=!1,C="",L="";if(!(e=u.exec(t))||this.rules.block.hr.test(t))break;C=e[0],t=t.substring(C.length);let S=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,_e=>" ".repeat(3*_e.length)),b=t.split(`
`,1)[0],A=!S.trim(),M=0;if(this.options.pedantic?(M=2,L=S.trimStart()):A?M=e[1].length+1:(M=e[2].search(this.rules.other.nonSpaceChar),M=M>4?1:M,L=S.slice(M),M+=e[1].length),A&&this.rules.other.blankLine.test(b)&&(C+=b+`
`,t=t.substring(b.length+1),v=!0),!v){let _e=this.rules.other.nextBulletRegex(M),j=this.rules.other.hrRegex(M),$=this.rules.other.fencesBeginRegex(M),V=this.rules.other.headingBeginRegex(M),q=this.rules.other.htmlBeginRegex(M);for(;t;){let O=t.split(`
`,1)[0],B;if(b=O,this.options.pedantic?(b=b.replace(this.rules.other.listReplaceNesting,"  "),B=b):B=b.replace(this.rules.other.tabCharGlobal,"    "),$.test(b)||V.test(b)||q.test(b)||_e.test(b)||j.test(b))break;if(B.search(this.rules.other.nonSpaceChar)>=M||!b.trim())L+=`
`+B.slice(M);else{if(A||S.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||$.test(S)||V.test(S)||j.test(S))break;L+=`
`+b}!A&&!b.trim()&&(A=!0),C+=O+`
`,t=t.substring(O.length+1),S=B.slice(M)}}i.loose||(a?i.loose=!0:this.rules.other.doubleBlankLine.test(C)&&(a=!0));let J=null,de;this.options.gfm&&(J=this.rules.other.listIsTask.exec(L),J&&(de=J[0]!=="[ ] ",L=L.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:C,task:!!J,checked:de,loose:!1,text:L,tokens:[]}),i.raw+=C}let d=i.items.at(-1);if(d)d.raw=d.raw.trimEnd(),d.text=d.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let v=0;v<i.items.length;v++)if(this.lexer.state.top=!1,i.items[v].tokens=this.lexer.blockTokens(i.items[v].text,[]),!i.loose){let C=i.items[v].tokens.filter(S=>S.type==="space"),L=C.length>0&&C.some(S=>this.rules.other.anyLine.test(S.raw));i.loose=L}if(i.loose)for(let v=0;v<i.items.length;v++)i.items[v].loose=!0;return i}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:s,title:i}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=Ps(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],u={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?u.align.push("right"):this.rules.other.tableAlignCenter.test(a)?u.align.push("center"):this.rules.other.tableAlignLeft.test(a)?u.align.push("left"):u.align.push(null);for(let a=0;a<r.length;a++)u.header.push({text:r[a],tokens:this.lexer.inline(r[a]),header:!0,align:u.align[a]});for(let a of i)u.rows.push(Ps(a,u.header.length).map((d,v)=>({text:d,tokens:this.lexer.inline(d),header:!1,align:u.align[v]})));return u}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let u=xn(r.slice(0,-1),"\\");if((r.length-u.length)%2===0)return}else{let u=Dl(e[2],"()");if(u===-2)return;if(u>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+u;e[2]=e[2].substring(0,u),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let s=e[2],i="";if(this.options.pedantic){let u=this.rules.other.pedanticHrefTitle.exec(s);u&&(s=u[1],i=u[3])}else i=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?s=s.slice(1):s=s.slice(1,-1)),Ls(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let s=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[s.toLowerCase()];if(!i){let u=r[0].charAt(0);return{type:"text",raw:u,text:u}}return Ls(r,i,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||s[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!r||this.rules.inline.punctuation.exec(r))){let i=[...s[0]].length-1,u,a,d=i,v=0,C=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(C.lastIndex=0,e=e.slice(-1*t.length+i);(s=C.exec(e))!=null;){if(u=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!u)continue;if(a=[...u].length,s[3]||s[4]){d+=a;continue}else if((s[5]||s[6])&&i%3&&!((i+a)%3)){v+=a;continue}if(d-=a,d>0)continue;a=Math.min(a,a+d+v);let L=[...s[0]][0].length,S=t.slice(0,i+s.index+L+a);if(Math.min(i,a)%2){let A=S.slice(1,-1);return{type:"em",raw:S,text:A,tokens:this.lexer.inlineTokens(A)}}let b=S.slice(2,-2);return{type:"strong",raw:S,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return s&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let r,s;return e[2]==="@"?(r=e[1],s="mailto:"+r):(r=e[1],s=r),{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},nr=class Mi{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Vr,this.options.tokenizer=this.options.tokenizer||new oi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Ft,block:Kn.normal,inline:wn.normal};this.options.pedantic?(r.block=Kn.pedantic,r.inline=wn.pedantic):this.options.gfm&&(r.block=Kn.gfm,this.options.breaks?r.inline=wn.breaks:r.inline=wn.gfm),this.tokenizer.rules=r}static get rules(){return{block:Kn,inline:wn}}static lex(e,r){return new Mi(r).lex(e)}static lexInline(e,r){return new Mi(r).inlineTokens(e)}lex(e){e=e.replace(Ft.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let s=this.inlineQueue[r];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],s=!1){for(this.options.pedantic&&(e=e.replace(Ft.tabCharGlobal,"    ").replace(Ft.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,r))?(e=e.substring(i.raw.length),r.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=r.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:r.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=r.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):r.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=r.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},r.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),r.push(i);continue}let u=e;if(this.options.extensions?.startBlock){let a=1/0,d=e.slice(1),v;this.options.extensions.startBlock.forEach(C=>{v=C.call({lexer:this},d),typeof v=="number"&&v>=0&&(a=Math.min(a,v))}),a<1/0&&a>=0&&(u=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(u))){let a=r.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):r.push(i),s=u.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=r.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):r.push(i);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let s=e,i=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)d.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,i.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let u=!1,a="";for(;e;){u||(a=""),u=!1;let d;if(this.options.extensions?.inline?.some(C=>(d=C.call({lexer:this},e,r))?(e=e.substring(d.raw.length),r.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);let C=r.at(-1);d.type==="text"&&C?.type==="text"?(C.raw+=d.raw,C.text+=d.text):r.push(d);continue}if(d=this.tokenizer.emStrong(e,s,a)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.del(e)){e=e.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),r.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),r.push(d);continue}let v=e;if(this.options.extensions?.startInline){let C=1/0,L=e.slice(1),S;this.options.extensions.startInline.forEach(b=>{S=b.call({lexer:this},L),typeof S=="number"&&S>=0&&(C=Math.min(C,S))}),C<1/0&&C>=0&&(v=e.substring(0,C+1))}if(d=this.tokenizer.inlineText(v)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(a=d.raw.slice(-1)),u=!0;let C=r.at(-1);C?.type==="text"?(C.raw+=d.raw,C.text+=d.text):r.push(d);continue}if(e){let C="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(C);break}else throw new Error(C)}}return r}},li=class{options;parser;constructor(t){this.options=t||Vr}space(t){return""}code({text:t,lang:e,escaped:r}){let s=(e||"").match(Ft.notSpaceStart)?.[0],i=t.replace(Ft.endingNewline,"")+`
`;return s?'<pre><code class="language-'+ur(s)+'">'+(r?i:ur(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:ur(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,r=t.start,s="";for(let a=0;a<t.items.length;a++){let d=t.items[a];s+=this.listitem(d)}let i=e?"ol":"ul",u=e&&r!==1?' start="'+r+'"':"";return"<"+i+u+`>
`+s+"</"+i+`>
`}listitem(t){let e="";if(t.task){let r=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+ur(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let i=0;i<t.header.length;i++)r+=this.tablecell(t.header[i]);e+=this.tablerow({text:r});let s="";for(let i=0;i<t.rows.length;i++){let u=t.rows[i];r="";for(let a=0;a<u.length;a++)r+=this.tablecell(u[a]);s+=this.tablerow({text:r})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${ur(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){let s=this.parser.parseInline(r),i=Ts(t);if(i===null)return s;t=i;let u='<a href="'+t+'"';return e&&(u+=' title="'+ur(e)+'"'),u+=">"+s+"</a>",u}image({href:t,title:e,text:r,tokens:s}){s&&(r=this.parser.parseInline(s,this.parser.textRenderer));let i=Ts(t);if(i===null)return ur(r);t=i;let u=`<img src="${t}" alt="${r}"`;return e&&(u+=` title="${ur(e)}"`),u+=">",u}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:ur(t.text)}},ns=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},ir=class Fi{options;renderer;textRenderer;constructor(e){this.options=e||Vr,this.options.renderer=this.options.renderer||new li,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ns}static parse(e,r){return new Fi(r).parse(e)}static parseInline(e,r){return new Fi(r).parseInline(e)}parse(e,r=!0){let s="";for(let i=0;i<e.length;i++){let u=e[i];if(this.options.extensions?.renderers?.[u.type]){let d=u,v=this.options.extensions.renderers[d.type].call({parser:this},d);if(v!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(d.type)){s+=v||"";continue}}let a=u;switch(a.type){case"space":{s+=this.renderer.space(a);continue}case"hr":{s+=this.renderer.hr(a);continue}case"heading":{s+=this.renderer.heading(a);continue}case"code":{s+=this.renderer.code(a);continue}case"table":{s+=this.renderer.table(a);continue}case"blockquote":{s+=this.renderer.blockquote(a);continue}case"list":{s+=this.renderer.list(a);continue}case"html":{s+=this.renderer.html(a);continue}case"def":{s+=this.renderer.def(a);continue}case"paragraph":{s+=this.renderer.paragraph(a);continue}case"text":{let d=a,v=this.renderer.text(d);for(;i+1<e.length&&e[i+1].type==="text";)d=e[++i],v+=`
`+this.renderer.text(d);r?s+=this.renderer.paragraph({type:"paragraph",raw:v,text:v,tokens:[{type:"text",raw:v,text:v,escaped:!0}]}):s+=v;continue}default:{let d='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return s}parseInline(e,r=this.renderer){let s="";for(let i=0;i<e.length;i++){let u=e[i];if(this.options.extensions?.renderers?.[u.type]){let d=this.options.extensions.renderers[u.type].call({parser:this},u);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=d||"";continue}}let a=u;switch(a.type){case"escape":{s+=r.text(a);break}case"html":{s+=r.html(a);break}case"link":{s+=r.link(a);break}case"image":{s+=r.image(a);break}case"strong":{s+=r.strong(a);break}case"em":{s+=r.em(a);break}case"codespan":{s+=r.codespan(a);break}case"br":{s+=r.br(a);break}case"del":{s+=r.del(a);break}case"text":{s+=r.text(a);break}default:{let d='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return s}},_n=class{options;block;constructor(t){this.options=t||Vr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?nr.lex:nr.lexInline}provideParser(){return this.block?ir.parse:ir.parseInline}},Ml=class{defaults=Yi();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ir;Renderer=li;TextRenderer=ns;Lexer=nr;Tokenizer=oi;Hooks=_n;constructor(...t){this.use(...t)}walkTokens(t,e){let r=[];for(let s of t)switch(r=r.concat(e.call(this,s)),s.type){case"table":{let i=s;for(let u of i.header)r=r.concat(this.walkTokens(u.tokens,e));for(let u of i.rows)for(let a of u)r=r.concat(this.walkTokens(a.tokens,e));break}case"list":{let i=s;r=r.concat(this.walkTokens(i.items,e));break}default:{let i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(u=>{let a=i[u].flat(1/0);r=r.concat(this.walkTokens(a,e))}):i.tokens&&(r=r.concat(this.walkTokens(i.tokens,e)))}}return r}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let s={...r};if(s.async=this.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let u=e.renderers[i.name];u?e.renderers[i.name]=function(...a){let d=i.renderer.apply(this,a);return d===!1&&(d=u.apply(this,a)),d}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let u=e[i.level];u?u.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),s.extensions=e),r.renderer){let i=this.defaults.renderer||new li(this.defaults);for(let u in r.renderer){if(!(u in i))throw new Error(`renderer '${u}' does not exist`);if(["options","parser"].includes(u))continue;let a=u,d=r.renderer[a],v=i[a];i[a]=(...C)=>{let L=d.apply(i,C);return L===!1&&(L=v.apply(i,C)),L||""}}s.renderer=i}if(r.tokenizer){let i=this.defaults.tokenizer||new oi(this.defaults);for(let u in r.tokenizer){if(!(u in i))throw new Error(`tokenizer '${u}' does not exist`);if(["options","rules","lexer"].includes(u))continue;let a=u,d=r.tokenizer[a],v=i[a];i[a]=(...C)=>{let L=d.apply(i,C);return L===!1&&(L=v.apply(i,C)),L}}s.tokenizer=i}if(r.hooks){let i=this.defaults.hooks||new _n;for(let u in r.hooks){if(!(u in i))throw new Error(`hook '${u}' does not exist`);if(["options","block"].includes(u))continue;let a=u,d=r.hooks[a],v=i[a];_n.passThroughHooks.has(u)?i[a]=C=>{if(this.defaults.async&&_n.passThroughHooksRespectAsync.has(u))return(async()=>{let S=await d.call(i,C);return v.call(i,S)})();let L=d.call(i,C);return v.call(i,L)}:i[a]=(...C)=>{if(this.defaults.async)return(async()=>{let S=await d.apply(i,C);return S===!1&&(S=await v.apply(i,C)),S})();let L=d.apply(i,C);return L===!1&&(L=v.apply(i,C)),L}}s.hooks=i}if(r.walkTokens){let i=this.defaults.walkTokens,u=r.walkTokens;s.walkTokens=function(a){let d=[];return d.push(u.call(this,a)),i&&(d=d.concat(i.call(this,a))),d}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return nr.lex(t,e??this.defaults)}parser(t,e){return ir.parse(t,e??this.defaults)}parseMarkdown(t){return(e,r)=>{let s={...r},i={...this.defaults,...s},u=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=t),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(e):e,d=await(i.hooks?await i.hooks.provideLexer():t?nr.lex:nr.lexInline)(a,i),v=i.hooks?await i.hooks.processAllTokens(d):d;i.walkTokens&&await Promise.all(this.walkTokens(v,i.walkTokens));let C=await(i.hooks?await i.hooks.provideParser():t?ir.parse:ir.parseInline)(v,i);return i.hooks?await i.hooks.postprocess(C):C})().catch(u);try{i.hooks&&(e=i.hooks.preprocess(e));let a=(i.hooks?i.hooks.provideLexer():t?nr.lex:nr.lexInline)(e,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let d=(i.hooks?i.hooks.provideParser():t?ir.parse:ir.parseInline)(a,i);return i.hooks&&(d=i.hooks.postprocess(d)),d}catch(a){return u(a)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let s="<p>An error occurred:</p><pre>"+ur(r.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(r);throw r}}},jr=new Ml;function He(t,e){return jr.parse(t,e)}He.options=He.setOptions=function(t){return jr.setOptions(t),He.defaults=jr.defaults,ha(He.defaults),He};He.getDefaults=Yi;He.defaults=Vr;He.use=function(...t){return jr.use(...t),He.defaults=jr.defaults,ha(He.defaults),He};He.walkTokens=function(t,e){return jr.walkTokens(t,e)};He.parseInline=jr.parseInline;He.Parser=ir;He.parser=ir.parse;He.Renderer=li;He.TextRenderer=ns;He.Lexer=nr;He.lexer=nr.lex;He.Tokenizer=oi;He.Hooks=_n;He.parse=He;He.options;He.setOptions;He.use;He.walkTokens;He.parseInline;ir.parse;nr.lex;let In=null;function is(){return In||(In=document.createElement("div"),In.id="global-dialog-container",document.body.appendChild(In)),In}function ss(t){return new Promise(e=>{const r=is(),s=()=>{Ar(z``,r)},i=()=>{s(),e(t.confirmValue)},u=()=>{s(),e(t.cancelValue)},a=z`
            <wa-dialog label="${t.title}" open @wa-request-close=${u}>
                <style>
                    .dialog-content {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        padding: 1rem;
                        min-width: 400px;
                    }
                    
                    .dialog-message {
                        margin-bottom: 0.5rem;
                        color: var(--wa-color-neutral-700);
                    }
                    
                    .markdown-content {
                        line-height: 1.6;
                    }
                    
                    .markdown-content h1,
                    .markdown-content h2,
                    .markdown-content h3 {
                        margin-top: 1rem;
                        margin-bottom: 0.5rem;
                        font-weight: 600;
                    }
                    
                    .markdown-content h1 { font-size: 1.5rem; }
                    .markdown-content h2 { font-size: 1.3rem; }
                    .markdown-content h3 { font-size: 1.1rem; }
                    
                    .markdown-content p {
                        margin: 0.5rem 0;
                    }
                    
                    .markdown-content ul,
                    .markdown-content ol {
                        margin: 0.5rem 0;
                        padding-left: 1.5rem;
                    }
                    
                    .markdown-content code {
                        background: var(--wa-color-neutral-100);
                        padding: 0.125rem 0.25rem;
                        border-radius: 3px;
                        font-family: monospace;
                        font-size: 0.9em;
                    }
                    
                    .markdown-content pre {
                        background: var(--wa-color-neutral-100);
                        padding: 0.75rem;
                        border-radius: 4px;
                        overflow-x: auto;
                    }
                    
                    .markdown-content pre code {
                        background: none;
                        padding: 0;
                    }
                    
                    .markdown-content hr {
                        border: none;
                        border-top: 1px solid var(--wa-color-neutral-300);
                        margin: 1rem 0;
                    }
                    
                    .markdown-content blockquote {
                        border-left: 3px solid var(--wa-color-neutral-300);
                        padding-left: 1rem;
                        margin: 0.5rem 0;
                        color: var(--wa-color-neutral-600);
                    }
                    
                    .dialog-actions {
                        display: flex;
                        gap: 0.5rem;
                        justify-content: flex-end;
                        margin-top: 0.5rem;
                    }
                </style>
                
                <div class="dialog-content">
                    ${t.renderContent({onConfirm:i,onCancel:u})}
                </div>
            </wa-dialog>
        `;Ar(a,r),t.onAfterRender&&requestAnimationFrame(t.onAfterRender)})}function yi(t,e=!1){if(e){const r=He.parse(t,{async:!1});return z`<div class="dialog-message markdown-content" style="white-space: normal;">${un(r)}</div>`}return z`<div class="dialog-message" style="white-space: pre-line;">${t}</div>`}const Fn=async(t,e="",r=!1)=>{let s=e;return ss({title:"Input",message:t,markdown:r,confirmValue:s,cancelValue:null,renderContent:({onConfirm:i,onCancel:u})=>{const a=v=>{s=v.target.value},d=v=>{v.key==="Enter"?(v.preventDefault(),i()):v.key==="Escape"&&(v.preventDefault(),u())};return z`
                ${yi(t,r)}
                <wa-input
                    value="${e}"
                    @input=${a}
                    @keydown=${d}
                    autofocus
                ></wa-input>
                
                <div class="dialog-actions">
                    <wa-button variant="default" @click=${u}>
                        Cancel
                    </wa-button>
                    <wa-button variant="primary" @click=${()=>{i()}}>
                        OK
                    </wa-button>
                </div>
            `},onAfterRender:()=>{const u=is().querySelector("wa-input");if(u){const a=u.shadowRoot?.querySelector("input");a&&(a.focus(),a.select())}}}).then(()=>s)},pn=async(t,e=!1)=>ss({title:"Confirm",message:t,markdown:e,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:r,onCancel:s})=>z`
            ${yi(t,e)}
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${s}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${r}>
                    OK
                </wa-button>
            </div>
        `}),Fl=async(t,e,r=!1)=>{await ss({title:t,message:e,markdown:r,confirmValue:void 0,cancelValue:void 0,renderContent:({onConfirm:s})=>z`
            ${yi(e,r)}
            
            <div class="dialog-actions">
                <wa-button variant="primary" @click=${s}>
                    OK
                </wa-button>
            </div>
        `})},ql=async(t,e,r,s=!1)=>new Promise(i=>{const u=is();let a=!0;const d=()=>{a&&(a=!1,Ar(z``,u),i())},v=(C,L,S)=>{if(!a)return;const b=z`
                <wa-dialog label="${C}" open @wa-request-close=${d}>
                    <style>
                        .dialog-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 400px;
                            max-width: 600px;
                            height: 500px;
                        }
                        
                        .dialog-scroller {
                            flex: 1;
                            overflow-y: auto;
                        }
                        
                        .dialog-message {
                            margin-bottom: 0.5rem;
                            color: var(--wa-color-neutral-700);
                        }
                        
                        .dialog-actions {
                            display: flex;
                            gap: 0.5rem;
                            justify-content: space-between;
                            margin-top: 0.5rem;
                        }
                        
                        .dialog-actions-left,
                        .dialog-actions-right {
                            display: flex;
                            gap: 0.5rem;
                        }
                    </style>
                    
                    <div class="dialog-content">
                        <wa-scroller class="dialog-scroller">
                            ${yi(L,s)}
                        </wa-scroller>
                        
                        <div class="dialog-actions">
                            <div class="dialog-actions-left">
                                ${S.filter(A=>A.label!=="Close").map(A=>z`
                                    <wa-button 
                                        variant="${A.variant||"default"}"
                                        ?disabled=${A.disabled}
                                        @click=${()=>{A.callback()}}
                                    >
                                        ${A.label}
                                    </wa-button>
                                `)}
                            </div>
                            <div class="dialog-actions-right">
                                ${S.filter(A=>A.label==="Close").map(A=>z`
                                    <wa-button 
                                        variant="${A.variant||"primary"}"
                                        @click=${()=>{A.callback(),d()}}
                                    >
                                        ${A.label}
                                    </wa-button>
                                `)}
                            </div>
                        </div>
                    </div>
                </wa-dialog>
            `;Ar(b,u)};r.updateDialog=v,v(t,e,r)});sr.put("promptDialog",Fn);sr.put("confirmDialog",pn);sr.put("infoDialog",Fl);sr.put("navigableInfoDialog",ql);var ri={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var zl=ri.exports,Rs;function Ul(){return Rs||(Rs=1,(function(t){(function(e,r){t.exports?t.exports=r():e.Toastify=r()})(zl,function(e){var r=function(a){return new r.lib.init(a)},s="1.12.0";r.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},r.lib=r.prototype={toastify:s,constructor:r,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||r.defaults.text,this.options.node=a.node||r.defaults.node,this.options.duration=a.duration===0?0:a.duration||r.defaults.duration,this.options.selector=a.selector||r.defaults.selector,this.options.callback=a.callback||r.defaults.callback,this.options.destination=a.destination||r.defaults.destination,this.options.newWindow=a.newWindow||r.defaults.newWindow,this.options.close=a.close||r.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":r.defaults.gravity,this.options.positionLeft=a.positionLeft||r.defaults.positionLeft,this.options.position=a.position||r.defaults.position,this.options.backgroundColor=a.backgroundColor||r.defaults.backgroundColor,this.options.avatar=a.avatar||r.defaults.avatar,this.options.className=a.className||r.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?r.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||r.defaults.onClick,this.options.offset=a.offset||r.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:r.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||r.defaults.ariaLive,this.options.style=a.style||r.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var d in this.options.style)a.style[d]=this.options.style[d];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var v=document.createElement("img");v.src=this.options.avatar,v.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(v):a.insertAdjacentElement("afterbegin",v)}if(this.options.close===!0){var C=document.createElement("button");C.type="button",C.setAttribute("aria-label","Close"),C.className="toast-close",C.innerHTML="&#10006;",C.addEventListener("click",(function(de){de.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var L=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&L>360?a.insertAdjacentElement("afterbegin",C):a.appendChild(C)}if(this.options.stopOnFocus&&this.options.duration>0){var S=this;a.addEventListener("mouseover",function(de){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){S.removeElement(a)},S.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(de){de.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(de){de.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var b=i("x",this.options),A=i("y",this.options),M=this.options.position=="left"?b:"-"+b,J=this.options.gravity=="toastify-top"?A:"-"+A;a.style.transform="translate("+M+","+J+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var d=r.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,d),r.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),r.reposition()}).bind(this),400)}},r.reposition=function(){for(var a={top:15,bottom:15},d={top:15,bottom:15},v={top:15,bottom:15},C=document.getElementsByClassName("toastify"),L,S=0;S<C.length;S++){u(C[S],"toastify-top")===!0?L="toastify-top":L="toastify-bottom";var b=C[S].offsetHeight;L=L.substr(9,L.length-1);var A=15,M=window.innerWidth>0?window.innerWidth:screen.width;M<=360?(C[S].style[L]=v[L]+"px",v[L]+=b+A):u(C[S],"toastify-left")===!0?(C[S].style[L]=a[L]+"px",a[L]+=b+A):(C[S].style[L]=d[L]+"px",d[L]+=b+A)}return this};function i(a,d){return d.offset[a]?isNaN(d.offset[a])?d.offset[a]:d.offset[a]+"px":"0px"}function u(a,d){return!a||typeof d!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(d)>-1)}return r.lib.init.prototype=r.lib,r})})(ri)),ri.exports}var jl=Ul();const as=Qs(jl),qt=t=>{console.info("[TOAST] INFO: ",t),as({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},Ke=t=>{console.error("[TOAST] ERROR: ",t),as({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},Bl=t=>{console.warn("[TOAST] WARNING: ",t),as({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};sr.put("toastInfo",qt);sr.put("toastError",Ke);sr.put("toastWarning",Bl);const Sa=(t,e)=>{const r=new hr.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{r.watch()}});r.watch(t)},bi=t=>function(e,r,s){const i=s.value;return i.signal=t,s};Object.defineProperty(Xs.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class qn extends Xs{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(r=>{const s=e[r];if(s instanceof Function){const i=s;i.name.startsWith("on")&&"topic"in i&&this.subscribe(i.topic,i)}}),Object.getOwnPropertyNames(e).forEach(r=>{const s=e[r];if(s instanceof Function){const i=s;i.name.startsWith("on")&&"signal"in i&&this.watch(i.signal,i)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,r){ar(e,r.bind(this))}showInfo(e){qt(e)}showError(e){Ke(e)}nobubble(e){return r=>{r.stopPropagation(),e.bind(this)(r)}}command(e,r={}){return()=>{this.executeCommand(e,r)}}executeCommand(e,r){const s=Pe.createExecutionContext(this,r);Pe.execute(e,s)}watch(e,r){Sa(e,r.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}class Gr extends qn{}var Wl=Object.getOwnPropertyDescriptor,Vl=(t,e,r,s)=>{for(var i=s>1?void 0:s?Wl(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=a(i)||i);return i};let qi=class extends Gr{render(){return z`
            <slot></slot>
        `}};qi.styles=$t`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;qi=Vl([gt("k-app")],qi);var Gl=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,dn=(t,e,r,s)=>{for(var i=s>1?void 0:s?Hl(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Gl(e,r,i),i};let Er=class extends mi(Gr){constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),ar(Nn,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const s=e.split(":");if(s.length===2){const i=s[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=Ye.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),s=`${r}:*`,i=Ye.getContributions(s),u=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const d of a){const v=`${r}:${d}`,C=Ye.getContributions(v);u.push(...C)}}this.contributions=[...i,...u,...e]}contributionCreator(t){if("command"in t){const e=t,r=!!e.showLabel;return z`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${r?e.label:""}
                </wa-button>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():un(e)}else return z`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return z`
            <div class="toolbar-items" style=${ro({"justify-content":this.position})}>
                <slot name="start">
                    ${this.contributions.filter(e=>e.slot==="start").map(this.contributionCreator.bind(this))}
                </slot>
                ${t}
                ${this.contributions.filter(e=>e.slot===void 0).map(this.contributionCreator.bind(this))}
                <slot>
                </slot>
                <slot name="end">
                    ${this.contributions.filter(e=>e.slot==="end").map(this.contributionCreator.bind(this))}
                </slot>
            </div>
        `}};Er.styles=$t`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;dn([ze()],Er.prototype,"position",2);dn([ze({type:Boolean,attribute:"is-editor"})],Er.prototype,"isEditor",2);dn([ze({attribute:!1})],Er.prototype,"partToolbarContent",2);dn([ze({attribute:!1})],Er.prototype,"partToolbarRenderer",2);dn([et()],Er.prototype,"contributions",2);Er=dn([gt("k-toolbar")],Er);var Kl=Object.defineProperty,Yl=Object.getOwnPropertyDescriptor,hn=(t,e,r,s)=>{for(var i=s>1?void 0:s?Yl(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Kl(e,r,i),i};let _r=class extends mi(Gr){constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=zr(),this.dropdownRef=zr()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),ar(Nn,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const s=e.split(":");if(s.length===2){const i=s[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=Ye.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),s=`${r}:*`,i=Ye.getContributions(s),u=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const d of a){const v=`${r}:${d}`,C=Ye.getContributions(v);u.push(...C)}}this.contributions=[...i,...u,...e]}show(t){this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){if("command"in t){const e=t;return z`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?z`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():un(e)}return Rt}render(){if(!this.isOpen)return Rt;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():Rt;return z`
            <wa-dropdown 
                ${Ur(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${Ur(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${t}
                ${this.contributions.map(e=>this.renderContribution(e))}
            </wa-dropdown>
        `}};_r.styles=$t`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            pointer-events: none;
            z-index: 10000;
        }

        wa-dropdown {
            pointer-events: auto;
            min-width: 200px;
        }
        
        wa-dropdown::part(panel) {
            min-width: 200px;
        }
    `;hn([ze({type:Boolean,attribute:"is-editor"})],_r.prototype,"isEditor",2);hn([ze({attribute:!1})],_r.prototype,"partContextMenuRenderer",2);hn([et()],_r.prototype,"contributions",2);hn([et()],_r.prototype,"isOpen",2);hn([et()],_r.prototype,"position",2);_r=hn([gt("k-contextmenu")],_r);class os extends Gr{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=(t,e,r)=>{const s=new Map;for(let i=e;i<=r;i++)s.set(t[i],i);return s},Jl=ea(class extends ta{constructor(t){if(super(t),t.type!==no.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let s;r===void 0?r=e:e!==void 0&&(s=e);const i=[],u=[];let a=0;for(const d of t)i[a]=s?s(d,a):a,u[a]=r(d,a),a++;return{values:u,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,s]){const i=io(t),{values:u,keys:a}=this.dt(e,r,s);if(!Array.isArray(i))return this.ut=a,u;const d=this.ut??=[],v=[];let C,L,S=0,b=i.length-1,A=0,M=u.length-1;for(;S<=b&&A<=M;)if(i[S]===null)S++;else if(i[b]===null)b--;else if(d[S]===a[A])v[A]=Nr(i[S],u[A]),S++,A++;else if(d[b]===a[M])v[M]=Nr(i[b],u[M]),b--,M--;else if(d[S]===a[M])v[M]=Nr(i[S],u[M]),yn(t,v[M+1],i[S]),S++,M--;else if(d[b]===a[A])v[A]=Nr(i[b],u[A]),yn(t,i[S],i[b]),b--,A++;else if(C===void 0&&(C=$s(a,A,M),L=$s(d,S,b)),C.has(d[S]))if(C.has(d[b])){const J=L.get(a[A]),de=J!==void 0?i[J]:null;if(de===null){const _e=yn(t,i[S]);Nr(_e,u[A]),v[A]=_e}else v[A]=Nr(de,u[A]),yn(t,i[S],de),i[J]=null;A++}else Si(i[b]),b--;else Si(i[S]),S++;for(;A<=M;){const J=yn(t,v[M+1]);Nr(J,u[A]),v[A++]=J}for(;S<=b;){const J=i[S++];J!==null&&Si(J)}return this.ut=a,ra(t,v),so}}),Zl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Ql="/assets/jupyter-C78Cpfql.svg",Xl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";ao("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":Zl,"../icons/jupyter.svg":Ql,"../icons/python.svg":Xl})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var ec=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,zn=(t,e,r,s)=>{for(var i=s>1?void 0:s?tc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&ec(e,r,i),i};let Br=class extends qn{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),r=t.pop();return z`
            <wa-icon library="${r||Rt}" variant="${this.variant||Rt}"
                         family="${this.family||Rt}" name=${e} label="${this.label||this.name||Rt}"></wa-icon>`}};Br.styles=$t`
        :host {
            display: contents;
        }
    `;zn([ze()],Br.prototype,"name",2);zn([ze()],Br.prototype,"family",2);zn([ze()],Br.prototype,"variant",2);zn([ze()],Br.prototype,"label",2);Br=zn([gt("k-icon")],Br);var rc=Object.defineProperty,nc=(t,e,r,s)=>{for(var i=void 0,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=a(e,r,i)||i);return i&&rc(e,r,i),i};class _t extends os{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return Rt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return Rt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Di.set(null),Di.set(this),Ue.set(null),Ue.set(this)}}nc([ze()],_t.prototype,"dirty");const Aa="app-toolbars-main",fn="app-toolbars-main-right",ic="app-toolbars-main-center",Ea="app-toolbars-bottom",ls="app-toolbars-bottom-center",_a="app-toolbars-bottom-end",Xr="editor-area-main",zi="sidebar-main",Ca="sidebar-main-bottom",Oa="sidebar-auxiliary",Ta="panel-bottom";var Pa=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(Pa||{}),sc=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,La=(t,e,r,s)=>{for(var i=s>1?void 0:s?ac(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&sc(e,r,i),i};let ci=class extends os{constructor(){super(...arguments),this.contributions=[],this.tabGroup=zr(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&(this.updateToolbarFromComponent(r),requestAnimationFrame(()=>this.updateToolbarHeightVariable(r)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&this.updateContextMenuFromComponent(r)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,r=e.closest("wa-tab");if(r){const a=r.getAttribute("panel");if(a){const d=this.getTabPanel(a);if(d){const v=d.querySelector(".tab-content");if(v&&v.firstElementChild){const C=v.firstElementChild;C instanceof _t&&Ue.set(C)}}}return}const s=e.closest("wa-scroller.tab-content");if(!s)return;const i=s.closest("wa-tab-panel");if(!i)return;const u=i.querySelector(".tab-content");if(u&&u.firstElementChild){const a=u.firstElementChild;a instanceof _t&&Ue.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,r=e.target.closest("wa-scroller.tab-content");if(!r)return;e.preventDefault();const s=r.closest("wa-tab-panel");if(!s)return;const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,button:0});e.target.dispatchEvent(i),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(s);const u=s.querySelector("k-contextmenu");u&&u.show({x:e.clientX,y:e.clientY})})}))}),ar(Nn,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===Xr;this.contributions.forEach(r=>{const s=this.getTabPanel(r.name);if(!s)return;const i=s.querySelector(".tab-content");if(i&&i.firstElementChild){const u=i.firstElementChild;u instanceof _t&&(u.tabContribution=r,u.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(s))})}}has(t){return!!this.getTabPanel(t)}activate(t){this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(t){if(this.contributions.find(r=>r.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const r=this.getTabPanel(t.name);if(r){const s=r.querySelector(".tab-content");if(s&&s.firstElementChild){const i=s.firstElementChild;i instanceof _t&&(i.tabContribution=t,i.isEditor=this.containerId===Xr)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(r),this.updateToolbarHeightVariable(r),this.setupToolbarResizeObserver(r)})}})}handleTabAuxClick(t,e){t.button===Pa.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await pn("Unsaved changes will be lost: Do you really want to close?"))return;const r=this.getTabPanel(e);if(!r)return;const s=this.contributions.find(u=>u.name===e);if(!s)return;this.cleanupTabInstance(r);const i=this.contributions.indexOf(s);i>-1&&this.contributions.splice(i,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:r})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=Ye.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=this.resizeObservers.get(t);e&&(e.disconnect(),this.resizeObservers.delete(t));const r=t.querySelector(".tab-content");if(r&&r.firstElementChild){const s=r.firstElementChild;"close"in s&&typeof s.close=="function"&&s.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`)}getTab(t){return this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`)}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof _t)||!r.renderToolbar)return;const s=t.querySelector("k-toolbar");s&&(s.partToolbarRenderer=()=>r.renderToolbar(),s.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof _t)||!r.renderContextMenu)return;const s=t.querySelector("k-contextmenu");s&&(s.partContextMenuRenderer=()=>r.renderContextMenu(),s.requestUpdate())}updateToolbarHeightVariable(t){const e=t.querySelector(".tab-toolbar");if(!e)return;const r=e.offsetHeight;t.style.setProperty("--toolbar-height",`${r}px`)}setupToolbarResizeObserver(t){if(this.resizeObservers.has(t))return;const e=t.querySelector(".tab-toolbar");if(!e)return;const r=new ResizeObserver(()=>{this.updateToolbarHeightVariable(t)});r.observe(e),this.resizeObservers.set(t,r)}render(){return z`
            <wa-tab-group ${Ur(this.tabGroup)}>
                ${Jl(this.contributions,t=>t.name,t=>z`
                        <wa-tab panel="${t.name}"
                                @auxclick="${e=>this.handleTabAuxClick(e,t)}">
                            <k-icon name="${t.icon}"></k-icon>
                            ${t.label}
                            ${Wt(t.closable,()=>z`
                                <wa-icon name="xmark" label="Close"  @click="${e=>this.closeTab(e,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            <k-toolbar id="toolbar:${t.editorId??t.name}" 
                                       class="tab-toolbar"
                                       ?is-editor="${this.containerId===Xr}"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${t.component?t.component(t.name):Rt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu:${t.name}"
                                           ?is-editor="${this.containerId===Xr}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};ci.styles=$t`
        :host {
            height: 100%;
            width: 100%;
        }

        wa-tab-group {
            height: 100%;
            width: 100%;
        }

        wa-tab-group::part(base) {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            height: 100%;
            width: 100%;
        }

        wa-tab-panel[active] {
            display: grid;
            grid-template-rows: minmax(0, 1fr);
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
        }

        .tab-content {
            position: absolute;
            top: calc(var(--toolbar-height, 0px));
            right: 0;
            left: 0;
            height: calc(100% - var(--toolbar-height, 0px));
        }

        wa-tab::part(base) {
            padding: 3px 0.5rem;
        }

        wa-tab-panel {
            --padding: 0px;
        }

        .part-dirty::part(base) {
            font-style: italic;
            color: var(--wa-color-danger-fill-loud)
        }
    `;La([et()],ci.prototype,"contributions",2);ci=La([gt("k-tabs")],ci);var oc=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,Un=(t,e,r,s)=>{for(var i=s>1?void 0:s?lc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&oc(e,r,i),i};let nn=class extends Gr{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.handleResize=t=>{if(!this.resizing)return;const r=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,s=[...this.resizing.startSizes];s[this.resizing.handleIndex]+=r,s[this.resizing.handleIndex+1]-=r;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,u=i*.05;if(s[this.resizing.handleIndex]>=u&&s[this.resizing.handleIndex+1]>=u){this.resizing.currentSizes=s;const a=s.map((d,v)=>{const L=`${(d/i*100).toFixed(2)}%`;return v===s.length-1?L:`${L} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,r)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${r*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${r*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const r=this.orientation==="horizontal"?t.clientX:t.clientY,s=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(u=>u.endsWith("%")?parseFloat(u)/100*s:(u.endsWith("px"),parseFloat(u)));this.resizing={handleIndex:e,startPos:r,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return Rt;const t=this.gridSizes.flatMap((e,r)=>r===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",z`
            <style>
                .resize-handle {
                    position: relative;
                    z-index: 10;
                    background-color: var(--wa-color-neutral-border-quiet);
                    transition: background-color var(--wa-transition-fast);
                }
                
                .resize-handle:hover {
                    background-color: var(--wa-color-brand-fill-normal);
                }
            </style>
            
            ${this.gridChildren.map((e,r)=>{if(r<this.gridChildren.length-1){const s=this.orientation==="horizontal"?`${r*2+2}`:"1",i=this.orientation==="vertical"?`${r*2+2}`:"1";return z`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${s};
                                grid-row: ${i};
                            "
                            @mousedown=${u=>this.startResize(u,r)}
                        ></div>
                    `}return Rt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Un([ze()],nn.prototype,"orientation",2);Un([ze()],nn.prototype,"sizes",2);Un([et()],nn.prototype,"gridSizes",2);Un([et()],nn.prototype,"gridChildren",2);nn=Un([gt("k-resizable-grid")],nn);function cs(t){return new Promise((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)})}function cc(t,e){let r;const s=()=>{if(r)return r;const i=indexedDB.open(t);return i.onupgradeneeded=()=>i.result.createObjectStore(e),r=cs(i),r.then(u=>{u.onclose=()=>r=void 0},()=>{}),r};return(i,u)=>s().then(a=>u(a.transaction(e,i).objectStore(e)))}let Oi;function Ra(){return Oi||(Oi=cc("keyval-store","keyval")),Oi}function uc(t,e=Ra()){return e("readonly",r=>cs(r.get(t)))}function pc(t,e,r=Ra()){return r("readwrite",s=>(s.put(e,t),cs(s.transaction)))}class dc{async persistObject(e,r){return pc(e,r)}async getObject(e){return uc(e)}}const wr=new dc;zt.put("persistenceService",wr);const dr="events/filesys/workspaceChanged",Ln="events/filesys/workspaceConnected";class ui{constructor(){this.state={}}getWorkspacePath(){const e=[];let r=this;for(;r;)e.push(r.getName()),r=r.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const r=e.getParent();if(r)e=r;else break}return e}}var $a=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))($a||{});class sn extends ui{}class Ui extends ui{}class Da extends sn{constructor(e,r){super(),this.contents=e,this.name=r}async getContents(e){return this.contents}async saveContents(e,r){this.contents=e}async copyTo(e){throw Error("Not supported")}delete(e,r){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class Ds extends sn{constructor(e,r){super(),this.fileHandle=e,this.parent=r}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const r=await this.fileHandle.getFile();return!e||e?.contentType==0?await r.text():e?.encoding==0||e?.uri?URL.createObjectURL(r):e?.blob?r:r.stream()}async saveContents(e,r){const s=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(s);else{const i=s.getWriter();try{await i.write(e)}finally{await i.close()}}}async copyTo(e){const r=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(r)}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(s){throw s.name==="NotAllowedError"||s.message?.includes("not allowed")||s.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):s}await r.listChildren(!0),mt(dr,this.getWorkspace())}}}class qr extends Ui{constructor(e,r){super(),this.dirHandle=e,this.parent=r}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){if(e||!this.files){this.files={};for await(const r of this.dirHandle.values()){const i=r.kind==="file"?new Ds(r,this):new qr(r,this);this.files[i.getName()]=i}}return Object.values(this.files)}async getResource(e,r){if(!e)throw new Error("No path provided");const s=e.split("/");let i=this,u=!1;try{for(let a=0;a<s.length;a++){let d=s[a];if(d&&(d=d.trim()),!d)break;if(i instanceof qr){if(i.files||await i.listChildren(),!i.files)return null;const v=i.files[d];if(!v&&r?.create)if(u=!0,a<s.length-1){const C=await i.dirHandle.getDirectoryHandle(d,{create:!0}),L=new qr(C);i.files[d]=L,i=L}else{const C=await i.dirHandle.getFileHandle(d,{create:!0}),L=new Ds(C,i);return i.files[d]=L,L}else i=v}}}finally{u&&mt(dr,this.getWorkspace())}return i}touch(){mt(dr,this.getWorkspace())}async delete(e,r=!0){return e?this.dirHandle.removeEntry(e,{recursive:r}).then(()=>{mt(dr,this.getWorkspace())}):this.getParent()?.delete(this.getName())}async copyTo(e){for(const r of await this.listChildren()){const s=[e,r.getName()].join("/");await r.copyTo(s)}}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(s){throw s.name==="NotAllowedError"||s.message?.includes("not allowed")||s.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):s}await r.listChildren(!0),mt(dr,this.getWorkspace())}}}class hc{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&mt(Ln,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await wr.getObject("workspace_data");if(!e)return;const r=this.contributions.get(e.type);if(!r){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(r.restore){const s=await r.restore(e.data);return s&&(this.currentType=e.type),s}}catch(s){console.error(`Failed to restore workspace of type ${e.type}:`,s)}}async connectWorkspace(e){const r=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!r)throw new Error("No workspace contribution can handle this input");const s=await r.connect(e),i=r.persist?await r.persist(s):e,u={type:r.type,data:i};return await wr.persistObject("workspace_data",u),this.currentType=r.type,this.workspace=Promise.resolve(s),mt(Ln,s),s}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await wr.persistObject("workspace_data",null),await wr.persistObject("workspace",null)}}const Dt=new hc;zt.put("workspaceService",Dt);Dt.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new qr(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new qr(t,void 0)},async persist(t){return t instanceof qr?t.getHandle():null}});const fc=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var mc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,wi=(t,e,r,s)=>{for(var i=s>1?void 0:s?gc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&mc(e,r,i),i};let an=class extends _t{constructor(){super(...arguments),this.treeRef=zr()}doBeforeUI(){this.initializeWorkspace()}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await Dt.getWorkspace();t?await this.loadWorkspace(t):Pe.execute("help")}renderToolbar(){const t=Vt.get()instanceof ui;return z`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const t=Vt.get()instanceof ui;return z`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>Delete</k-command>
        `}async onWorkspaceChanged(t){Vt.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&Vt.set(e[0].model?.data)}async resourceToTreeNode(t){const e=t instanceof sn,r={data:t,label:t.getName(),icon:e?"file":"folder-open",leaf:e,children:[]};if(t instanceof Ui){for(const s of await t.listChildren(!0)){const i=await this.resourceToTreeNode(s);r.children.push(i)}r.children.sort(fc)}return r}createTreeItems(t,e=!1){return t?z`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${t} ?expanded=${e}>
                <span><wa-icon name=${t.icon} label="${t.leaf?"File":"Folder"}"></wa-icon> ${t.label}</span>
                ${t.children.map(r=>this.createTreeItems(r))}
            </wa-tree-item>`:z``}async onFileDoubleClicked(t){const r=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:r})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const r=e[0].model;Vt.set(r.data)}else Vt.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=u=>{if(!u.dataTransfer?.types.includes("Files"))return;u.preventDefault(),u.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const d=u.target.closest("wa-tree-item");d&&d!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=d,d.classList.add("drop-target"))},r=u=>{u.dataTransfer?.types.includes("Files")&&(u.preventDefault(),t.classList.add("drag-over"))},s=u=>{const a=t.getBoundingClientRect(),d=u.clientX,v=u.clientY;(d<=a.left||d>=a.right||v<=a.top||v>=a.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async u=>{if(u.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!u.dataTransfer||!this.workspaceDir)return;const a=Array.from(u.dataTransfer.files);if(a.length===0)return;const d=await this.getDropTarget(u);await this.handleFilesDrop(a,d)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",r),t.removeEventListener("dragleave",s),t.removeEventListener("drop",i),t.addEventListener("dragover",e),t.addEventListener("dragenter",r),t.addEventListener("dragleave",s),t.addEventListener("drop",i)}async getDropTarget(t){const r=t.target.closest("wa-tree-item");if(r){const i=r.model.data;if(i instanceof Ui)return i;const u=i.getParent();if(u)return u}return this.workspaceDir}async handleFilesDrop(t,e){const r=t.length;let s=0,i=0,u=0;for(const a of t)try{const d=this.buildTargetPath(e,a.name);if(await this.workspaceDir.getResource(d)&&!await pn(`File "${a.name}" already exists. Do you want to overwrite it?`)){u++;continue}await(await this.workspaceDir.getResource(d,{create:!0})).saveContents(a),s++}catch(d){console.error(`Failed to upload ${a.name}:`,d),i++}console.log(`Uploaded ${s}/${r} files${u>0?`, ${u} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const r=t.getWorkspacePath();return r?`${r}/${e}`:e}render(){return z`
            <div class="tree" ${Ur(this.treeRef)}>
                ${Wt(!this.workspaceDir,()=>z`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>z`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};an.styles=$t`
        :host {
        }
        
        .tree {
            height: 100%;
            position: relative;
            transition: all 0.2s ease;
        }
        
        .tree.drag-over {
            background-color: var(--wa-color-brand-fill-quiet);
            outline: 2px dashed var(--wa-color-brand-border-normal);
            outline-offset: -4px;
            border-radius: var(--wa-border-radius-medium);
        }
        
        .tree.drag-over::before {
            content: '📁 Drop files here';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            padding: var(--wa-spacing-large);
            border-radius: var(--wa-border-radius-large);
            font-weight: bold;
            pointer-events: none;
            z-index: 1000;
            opacity: 0.3;
        }
        
        wa-tree-item.drop-target {
            background-color: var(--wa-color-brand-fill-loud);
            color: var(--wa-color-brand-on-loud);
            border-radius: var(--wa-border-radius-small);
            outline: 2px solid var(--wa-color-brand-border-loud);
            outline-offset: -2px;
        }
    `;wi([et()],an.prototype,"root",2);wi([Ki(dr)],an.prototype,"onWorkspaceChanged",1);wi([Ki(Ln)],an.prototype,"onWorkspaceConnected",1);an=wi([gt("k-filebrowser")],an);class vc{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,ua.set(this.updateCounter)}run(e,r){const s=this.createProgressMonitor(e);try{this.tasks.push(s),this.notifyUpdate(),r(s)}finally{this.tasks.splice(this.tasks.indexOf(s),1),this.notifyUpdate()}}async runAsync(e,r){const s=this.createProgressMonitor(e);return this.tasks.push(s),this.notifyUpdate(),r(s).finally(()=>{this.tasks.splice(this.tasks.indexOf(s),1),this.notifyUpdate()})}createProgressMonitor(e){const r={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(r,{set:(s,i,u)=>(s[i]=u,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const on=new vc;zt.put("taskService",on);var yc=Object.getOwnPropertyDescriptor,bc=(t,e,r,s)=>{for(var i=s>1?void 0:s?yc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=a(i)||i);return i};Ye.registerContribution(ls,{html:"<k-tasks></k-tasks>"});let ji=class extends mi(_t){render(){ua.get();const t=on.getActiveTasks().length;if(t!=0)return z`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${t}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${t}
                </wa-button>
                ${on.getActiveTasks().map(e=>{const r=e.progress>=0||e.totalSteps>0,s=e.progress>=0?e.progress:e.totalSteps>0?Math.round(e.currentStep/e.totalSteps*100):0,i=e.progress<0&&e.totalSteps>0;return z`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${e.name}</strong>: ${e.message}
                            </div>
                            ${r?z`
                                <wa-progress-bar value="${s}" style="--track-height: 1.25rem;">
                                    ${i?`${e.currentStep}/${e.totalSteps} - `:""}${s}%
                                </wa-progress-bar>
                            `:z`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};ji.styles=$t`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;ji=bc([gt("k-tasks")],ji);var wc=Object.getOwnPropertyDescriptor,xc=(t,e,r,s)=>{for(var i=s>1?void 0:s?wc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=a(i)||i);return i};const Ns="<no workspace>";let Ms=class extends Gr{constructor(){super(...arguments),this.workspaceName=Ns}doInitUI(){this.updateWorkspaceName(),ar(Ln,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Dt.getWorkspace().then(t=>{this.workspaceName=t?.getName()||Ns,this.requestUpdate()})}handleLoadWorkspace(){Pe.execute("load_workspace",{source:this})}render(){return z`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};Ms=xc([gt("k-workspace-name")],Ms);var Ic=Object.getOwnPropertyDescriptor,kc=(t,e,r,s)=>{for(var i=s>1?void 0:s?Ic(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=a(i)||i);return i};const Fs="<no part>";Ye.registerContribution(ls,{html:"<k-part-name></k-part-name>"});let qs=class extends mi(Gr){getPartName(){const t=Ue.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||Fs}render(){const e=Ue.get()?.tabContribution?.icon||"box";return z`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};qs=kc([gt("k-part-name")],qs);const Yn=".geospace/settings.json",Pn="events/settings/changed";class Sc{async checkSettings(){this.appSettings||(this.appSettings=await wr.getObject(Yn),this.appSettings||(this.appSettings={},await wr.persistObject(Yn,this.appSettings)),mt(Pn,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,r){await this.checkSettings(),this.appSettings[e]=r,await wr.persistObject(Yn,this.appSettings),mt(Pn,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await wr.persistObject(Yn,this.appSettings),mt(Pn,this.appSettings)}}const Mt=new Sc;zt.put("appSettings",Mt);const Na="events/chatservice/aiConfigChanged",Jn="aiConfig",Ac={defaultProvider:"ollama",providers:[]},jn="chatservice.prompts",Gt="chatservice.chatProviders",Ec={name:"openai-api",canHandle:t=>!0,completionApi:async t=>(await fetch(t.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${t.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({model:t.model,stream:t.stream,messages:t.messages,...t.chatConfig.parameters})})).json().then(r=>({role:"assistant",content:r.choices[0].message.content}))};class _c{constructor(){this.fetchers=[],this.promptContributions=[],ar(Pn,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.promptContributions=Ye.getContributions(jn)}getContributedProviders(){return Ye.getContributions(Gt).map(r=>r.provider)}mergeProviders(e,r){const s=new Map;return e.forEach(i=>{s.set(i.name,{...i})}),r.forEach(i=>{const u=s.get(i.name);u?s.set(i.name,{...u,...i}):s.set(i.name,i)}),Array.from(s.values())}registerFetcher(e){this.fetchers.push(e)}async checkAIConfig(){if(!this.aiConfig){if(this.aiConfig=await Mt.get(Jn),this.aiConfig){const e=this.getContributedProviders();this.aiConfig.providers=this.mergeProviders(e,this.aiConfig.providers||[])}else{const e=this.getContributedProviders(),r={...Ac,providers:e};await Mt.set(Jn,r),this.aiConfig=await Mt.get(Jn)}mt(Na,this.aiConfig)}}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const r=e.find(s=>s.name===this.aiConfig?.defaultProvider);if(r)return r}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig.defaultProvider=e,await Mt.set(Jn,this.aiConfig),this.getDefaultProvider()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}createMessage(e){return{role:"user",content:e}}getPromptContribution(e){return this.promptContributions.find(r=>r.role===e)}async handleUserPrompt(e){const r=e.chatConfig||await this.getDefaultProvider(),s=e.chatContext,i=this.promptContributions.map(a=>{const d=e.callContext.createChild({userPrompt:s.history[s.history.length-1].content});if(a.canHandle instanceof Function&&!a.canHandle(d.getProxy()))return;const v=s.history.map(b=>{let A=b.role,M=b.content;return A!=="user"&&(A!==a.role?(A="user",M=`***Another Assistant '${b.role}' replied:***
${M}`):A="assistant"),{role:A,content:M}});let C=v[v.length-1],L=a.sysPrompt;typeof L=="function"&&(L=L()),v.unshift({role:"system",content:L});const S=async()=>{const b={model:r.model,stream:!1,messages:v,chatConfig:r};return(this.fetchers.find(M=>M.canHandle(r))||Ec).completionApi(b).then(M=>M)};return a.promptDecorator instanceof Function?a.promptDecorator(d.getProxy()).then(b=>{b&&(C.content=b)}).then(S).then(async b=>(b.role=a.role,a.messageDecorator&&(d.put("message",b),a.messageDecorator(d.getProxy())),b)):S()}),u=await Promise.all(i.filter(a=>!!a));s.history.push(...u)}}const Fr=new _c;zt.put("chatService",Fr);var Cc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,Ut=(t,e,r,s)=>{for(var i=s>1?void 0:s?Oc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Cc(e,r,i),i};let Ct=class extends _t{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatContext=this.defaultChatContext,this.busy=!1,this.inputValue="",this.settingsDialogOpen=!1,this.availableModels=[],this.loadingModels=!1,this.SETTINGS_KEY="aiAssistChat"}onAIConfigChanged(){this.doBeforeUI()}onPartChanged(t){t&&"chatContext"in t?this.chatContext=t.chatContext:this.chatContext=this.defaultChatContext}async doBeforeUI(){this.providers=await Fr.getProviders()||[],await this.loadSettings()}async loadSettings(){const t=await Mt.get(this.SETTINGS_KEY)||{};if(t.providerName){const e=this.providers?.find(r=>r.name===t.providerName);e&&(this.selectedProvider={...e,model:t.model||e.model})}if(!this.selectedProvider&&this.providers&&this.providers.length>0){const e=await Fr.getDefaultProvider();this.selectedProvider=e,await this.saveSettings(e.name,e.model)}}async saveSettings(t,e){const r={providerName:t,model:e};await Mt.set(this.SETTINGS_KEY,r)}updated(t){super.updated(t),(t.has("chatContext")||t.has("busy"))&&this.scrollToBottom()}scrollToBottom(){this.messagesContainer&&requestAnimationFrame(()=>{this.messagesContainer&&(this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight)})}onInput(t){const e=t.target;this.inputValue=e.value}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.sendMessage())}async sendMessage(){const t=this.inputValue.trim();!t||this.busy||(this.inputValue="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),await this.handlePrompt(t))}async runCommand(t,e){const r=e||Pe,s=t.trim().split(/\s+/);if(s.length===0)return;const i=s.shift(),u=r.getCommand(i);if(!u){Ke("Command not found: "+i);return}const a={};s.forEach((v,C)=>{a[u.parameters[C].name]=v});const d=r.createExecutionContext(this,a);r.execute(i,d),this.requestUpdate()}async handlePrompt(t){if(t.startsWith("/")){await this.runCommand(t.substring(1),Pe);return}if(!this.selectedProvider){Ke("Please configure AI provider in settings");return}const e=Fr.createMessage(t);this.chatContext.history.push(e),this.requestUpdate(),this.busy=!0;const r=Ue.get(),s=sr.createChild({activePart:r,activeEditor:r?.isEditor?r:null});on.runAsync("Calling AI assistant",i=>Fr.handleUserPrompt({chatContext:this.chatContext,chatConfig:this.selectedProvider,callContext:s}).then(u=>{this.requestUpdate()})).catch(i=>{Ke(`${i}`)}).finally(()=>{this.busy=!1,s.destroy()})}async openSettingsDialog(){const t=await Mt.get(this.SETTINGS_KEY)||{};this.settingsProviderName=t.providerName||this.selectedProvider?.name||this.providers?.[0]?.name,this.settingsModel=t.model||this.selectedProvider?.model,this.settingsDialogOpen=!0,this.settingsProviderName&&this.fetchModels(this.settingsProviderName).catch(e=>{Ke(`Failed to fetch models: ${e}`)})}async closeSettingsDialog(){this.settingsDialogOpen=!1,this.availableModels=[]}async onProviderChange(t){const r=t.target.value;this.settingsProviderName=r,this.settingsModel=void 0,this.availableModels=[],await this.fetchModels(r)}async fetchModels(t){const e=this.providers?.find(r=>r.name===t);if(e){this.loadingModels=!0;try{const s=`${e.chatApiEndpoint.replace("/v1/chat/completions","")}/v1/models`,i=await fetch(s,{method:"GET",headers:{Authorization:`Bearer ${e.apiKey}`,"Content-Type":"application/json"}});if(!i.ok)throw new Error(`Failed to fetch models: ${i.statusText}`);const a=(await i.json()).data||[];this.availableModels=a.map(d=>({id:d.id,name:d.name||d.id})),!this.settingsModel&&this.availableModels.length>0&&(this.settingsModel=this.availableModels[0].id)}catch(r){Ke(`Failed to fetch models: ${r}`),this.availableModels=[]}finally{this.loadingModels=!1}}}async onModelChange(t){const e=t.target;this.settingsModel=e.value}async saveSettingsAndClose(){if(!this.settingsProviderName||!this.settingsModel){Ke("Please select both provider and model");return}await this.saveSettings(this.settingsProviderName,this.settingsModel);const t=this.providers?.find(e=>e.name===this.settingsProviderName);t&&(this.selectedProvider={...t,model:this.settingsModel},await Fr.setDefaultProvider(this.settingsProviderName)),this.settingsDialogOpen=!1,qt("Settings saved")}copyToClipboard(t){navigator.clipboard.writeText(t).then(()=>{}).catch(e=>{Ke(`Failed to copy: ${e}`)})}formatTimestamp(t=new Date){return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderMessage(t){const e=t.role==="user",s=Fr.getPromptContribution(t.role)?.label||t.role;return z`
            <div class="message-wrapper ${e?"user":"assistant"}">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-icon 
                            name="${e?"user":"robot"}" 
                            label="${s}">
                        </wa-icon>
                        <span class="role-name">${s}</span>
                        <span class="timestamp">${this.formatTimestamp()}</span>
                    </div>
                    <div class="message-actions">
                        <wa-button
                            appearance="plain"
                            size="small"
                            @click="${()=>this.copyToClipboard(t.content)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                        ${Wt(t.actions?.length,()=>z`
                            ${t.actions?.map(i=>z`
                                <wa-button
                                    appearance="plain"
                                    size="small"
                                    @click="${()=>i.action()}">
                                    <wa-icon name="${i.icon}" label="${i.label}"></wa-icon>
                                </wa-button>
                            `)}
                        `)}
                    </div>
                </div>
                <div class="message-content">
                    ${un(He.parse(t.content))}
                </div>
            </div>
        `}renderLoadingIndicator(){return z`
            <div class="message-wrapper assistant loading">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-animation name="flip" duration="2000" play>
                            <wa-icon name="robot" label="AI Assistant"></wa-icon>
                        </wa-animation>
                        <span class="role-name">AI Assistant</span>
                    </div>
                </div>
                <div class="message-content loading-dots">
                    <span>Thinking</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                </div>
            </div>
        `}renderSettingsDialog(){return this.settingsDialogOpen?z`
            <wa-dialog label="AI Assistant Settings" open @wa-request-close="${this.closeSettingsDialog}">
                <div class="settings-dialog-content">
                    <div class="settings-field">
                        <label>Provider:</label>
                        <wa-select 
                            value="${this.settingsProviderName||""}"
                            @change="${this.onProviderChange}">
                            ${this.providers?.map(t=>z`
                                <wa-option value="${t.name}">
                                    ${t.name}
                                </wa-option>
                            `)}
                        </wa-select>
                    </div>

                    <div class="settings-field">
                        <label>Model:</label>
                        ${Wt(this.loadingModels,()=>z`
                            <div>Loading models...</div>
                        `,()=>z`
                            ${Wt(this.availableModels.length>0,()=>z`
                                <wa-select 
                                    value="${this.settingsModel||""}"
                                    @change="${this.onModelChange}">
                                    ${this.availableModels.map(t=>z`
                                        <wa-option value="${t.id}">
                                            ${t.name||t.id}
                                        </wa-option>
                                    `)}
                                </wa-select>
                            `,()=>z`
                                <wa-select 
                                    value="${this.settingsModel||""}"
                                    @change="${this.onModelChange}">
                                    ${this.providers?.find(t=>t.name===this.settingsProviderName)&&z`
                                        <wa-option value="${this.providers.find(t=>t.name===this.settingsProviderName).model}">
                                            ${this.providers.find(t=>t.name===this.settingsProviderName).model}
                                        </wa-option>
                                    `}
                                </wa-select>
                            `)}
                        `)}
                    </div>

                    <div class="settings-actions">
                        <wa-button variant="default" @click="${this.closeSettingsDialog}">
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click="${this.saveSettingsAndClose}">
                            Save
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `:z``}render(){return z`
            <div class="chat-container">
                ${this.renderSettingsDialog()}
                
                ${Wt(!this.selectedProvider,()=>z`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Click the settings button to configure</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map(t=>this.renderMessage(t))}
                    ${Wt(this.busy,()=>this.renderLoadingIndicator())}
                </div>

                <div class="input-container">
                    <div class="input-row">
                        <wa-textarea
                            placeholder="Type your message..."
                            resize="auto"
                            rows="1"
                            .value="${this.inputValue}"
                            ?disabled="${this.busy||!this.selectedProvider}"
                            @input="${this.onInput}"
                            @keydown="${this.onKeyDown}">
                        </wa-textarea>
                        
                        <wa-button
                            appearance="plain"
                            size="medium"
                            ?disabled="${!this.inputValue.trim()||this.busy||!this.selectedProvider}"
                            @click="${this.sendMessage}">
                            <wa-icon name="paper-plane" label="Send"></wa-icon>
                        </wa-button>

                        <wa-button
                            appearance="plain"
                            size="medium"
                            @click="${this.openSettingsDialog}">
                            <wa-icon name="gear" label="Settings"></wa-icon>
                        </wa-button>
                    </div>
                </div>
            </div>
        `}};Ct.styles=$t`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .chat-container {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
            color: var(--wa-color-neutral-60);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }

        .empty-state p {
            margin: 0.5rem 0;
        }

        .empty-state .hint {
            font-size: 0.875rem;
            opacity: 0.7;
        }

        .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            scroll-behavior: smooth;
        }

        .message-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-width: 85%;
            animation: slideIn 0.2s ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .message-wrapper.user {
            align-self: flex-end;
        }

        .message-wrapper.assistant {
            align-self: flex-start;
        }

        .message-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.5rem;
            padding: 0 0.5rem;
        }

        .message-meta {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.75rem;
            color: var(--wa-color-neutral-60);
        }

        .role-name {
            font-weight: 600;
        }

        .timestamp {
            opacity: 0.7;
        }

        .message-actions {
            display: flex;
            gap: 0.25rem;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .message-wrapper:hover .message-actions {
            opacity: 1;
        }

        .message-content {
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            font-size: 0.9rem;
            line-height: 1.5;
            word-wrap: break-word;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            border: 1px solid;
        }

        .message-wrapper.user .message-content {
            background-color: var(--wa-color-blue-50);
            color: white;
            border-color: var(--wa-color-blue-95);
        }

        .message-wrapper.assistant .message-content {
            background-color: var(--wa-color-gray-05);
            color: var(--wa-color-gray-90);
            border-color: var(--wa-color-gray-20);
        }

        .message-content :first-child {
            margin-top: 0;
        }

        .message-content :last-child {
            margin-bottom: 0;
        }

        .message-content p {
            margin: 0.5rem 0;
        }

        .message-content pre {
            margin: 0.5rem 0;
            padding: 0.75rem;
            background-color: var(--wa-color-neutral-90);
            color: var(--wa-color-neutral-05);
            border-radius: 0.375rem;
            overflow-x: auto;
        }

        .message-content code {
            font-family: 'Courier New', monospace;
            font-size: 0.875em;
        }

        .message-content pre code {
            background: none;
            padding: 0;
        }

        .message-content :not(pre) > code {
            background-color: rgba(0, 0, 0, 0.1);
            padding: 0.125rem 0.25rem;
            border-radius: 0.25rem;
        }

        .message-wrapper.user .message-content :not(pre) > code {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .loading-dots {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .dot {
            animation: blink 1.4s infinite;
        }

        .dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        .dot:nth-child(4) {
            animation-delay: 0.6s;
        }

        @keyframes blink {
            0%, 60%, 100% {
                opacity: 0;
            }
            30% {
                opacity: 1;
            }
        }

        .input-container {
            padding: 1rem;
            border-top: 1px solid var(--wa-color-neutral-20);
        }

        .input-row {
            display: flex;
            align-items: flex-end;
            gap: 0.5rem;
        }

        wa-textarea {
            flex: 1;
        }

        wa-textarea::part(base) {
            max-height: 200px;
        }

        .settings-dialog-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            min-width: 400px;
        }

        .settings-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .settings-field label {
            font-weight: 600;
            font-size: 0.875rem;
        }

        .settings-actions {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            margin-top: 0.5rem;
        }
    `;Ut([et()],Ct.prototype,"chatContext",2);Ut([et()],Ct.prototype,"providers",2);Ut([et()],Ct.prototype,"selectedProvider",2);Ut([et()],Ct.prototype,"busy",2);Ut([et()],Ct.prototype,"inputValue",2);Ut([et()],Ct.prototype,"settingsDialogOpen",2);Ut([et()],Ct.prototype,"settingsProviderName",2);Ut([et()],Ct.prototype,"settingsModel",2);Ut([et()],Ct.prototype,"availableModels",2);Ut([et()],Ct.prototype,"loadingModels",2);Ut([na(".chat-messages")],Ct.prototype,"messagesContainer",2);Ut([na("wa-textarea")],Ct.prototype,"textareaElement",2);Ut([Ki(Na)],Ct.prototype,"onAIConfigChanged",1);Ut([bi(Ue)],Ct.prototype,"onPartChanged",1);Ct=Ut([gt("k-aiassist")],Ct);const ni="events/extensionsregistry/extensionsConfigChanged",kn="extensions";class Tc{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,ar(Pn,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(r=>this.isEnabled(r.id)).map(r=>this.load(r.id).catch(s=>{Ke("Extension could not be loaded: "+s.message)}))||[];await Promise.all(e)})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Mt.get(kn),this.extensionsSettings||(await Mt.set(kn,[]),this.extensionsSettings=await Mt.get(kn)),mt(ni,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(r=>r.id===e&&r.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,r=!1){this.isEnabled(e)||(bt.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,r)}).catch(s=>{bt.error(`Could not load extension: ${e}`)}))}async load(e,r=[]){if(this.loadedExtensions.has(e))return;const s=this.loadingPromises.get(e);if(s)return s;if(r.includes(e)){const a=[...r,e].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const i=this.extensions[e];if(!i)throw new Error("Extension not found: "+e);const u=(async()=>{try{if(i.dependencies&&i.dependencies.length>0){bt.debug(`Loading dependencies for ${e}: ${i.dependencies.join(", ")}`);const d=[...r,e];for(const v of i.dependencies)await this.load(v,d),this.isEnabled(v)||(await this.updateEnablementAsync(v,!0,!1),bt.debug(`Auto-enabled dependency: ${v}`))}const a=await on.runAsync("Loading extension: "+i.name,()=>{if(i.loader)return i.loader();if(i.url)return import(i.url)});this.loadedExtensions.add(e),a?.default instanceof Function&&a?.default(sr.getProxy()),bt.debug(`Extension loaded: ${e}`)}catch(a){throw this.loadedExtensions.delete(e),a}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,u),u}disable(e,r=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,r)}updateEnablement(e,r,s){this.checkExtensionsConfig().then(()=>{const i=this.extensionsSettings?.find(u=>u.id==e);i?i.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),Mt.set(kn,this.extensionsSettings).then(()=>{if(s){const u=this.extensions[e];qt(r?u.name+" enabled.":u.name+" disabled  - Please restart to take effect")}mt(ni,this.extensionsSettings)})})}async updateEnablementAsync(e,r,s){await this.checkExtensionsConfig();const i=this.extensionsSettings?.find(u=>u.id==e);if(i?i.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),await Mt.set(kn,this.extensionsSettings),s){const u=this.extensions[e];qt(r?u.name+" enabled.":u.name+" disabled  - Please restart to take effect")}mt(ni,this.extensionsSettings)}}bt.debug("ExtensionRegistry initializing...");const We=new Tc;zt.put("extensionRegistry",We);bt.debug("ExtensionRegistry initialized");const Fe=Dn("AppLoader");function Sn(t){return t instanceof Error?t.message:String(t)}function Pc(t){try{const r=new URL(t).pathname.split("/").filter(Boolean);return r.length>0?r[r.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}class Lc{constructor(){this.apps=new Map,this.started=!1,this.container=document.body}registerApp(e,r){this.apps.has(e.id)&&Fe.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Fe.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),r?.defaultAppId&&(this.defaultAppId=r.defaultAppId),r?.container&&(this.container=r.container),r?.autoStart&&!this.started&&this.start()}async loadExtensionFromUrl(e){Fe.info(`Loading extension from URL: ${e}...`);try{const r=`url:${e}`;if(We.isEnabled(r)){Fe.info(`Extension from URL ${e} is already enabled`);return}const s={id:r,name:`Extension from ${e}`,description:`Extension loaded from URL: ${e}`,url:e};We.registerExtension(s),Fe.info(`Registered extension from URL: ${r}`),We.enable(r,!1),Fe.info(`Successfully enabled extension from URL: ${e}`)}catch(r){throw Fe.error(`Failed to load extension from URL ${e}: ${Sn(r)}`),r}}async loadAppFromUrl(e){Fe.info(`Loading app from URL: ${e}...`);try{const r=await import(e);if(!r.default)throw new Error(`Module at ${e} does not have a default export`);const s=r.default;if(!s.id||!s.name||!s.version||!s.render)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return Fe.info(`Successfully loaded app definition from URL: ${s.name} (${s.id})`),s}catch(r){throw Fe.error(`Failed to load app from URL ${e}: ${Sn(r)}`),r}}async start(){if(this.started){Fe.debug("AppLoader already started");return}document.readyState==="loading"&&await new Promise(d=>{document.addEventListener("DOMContentLoaded",()=>d(),{once:!0})}),this.started=!0,Fe.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),r=e.get("app"),s=e.get("appId"),i=this.apps.size;let u;if(r&&(u=Pc(r),u&&Fe.info(`Extracted app ID from URL path: ${u}`)),r)try{Fe.info(`URL parameter 'app' found: ${r}, attempting to load extension or app`);try{await this.loadExtensionFromUrl(r),Fe.info(`Successfully loaded extension from URL: ${r}`)}catch(d){Fe.info(`Failed to load as extension, trying as app definition: ${Sn(d)}`);try{const v=await this.loadAppFromUrl(r);await this.loadApp(v,this.container),Fe.info(`Successfully loaded app from URL: ${r}`);return}catch(v){throw Fe.error(`Failed to load from URL as both extension and app: ${Sn(v)}`),v}}}catch(d){Fe.error(`Failed to load from URL parameter, falling back to default app: ${Sn(d)}`)}const a=this.selectAppToLoad({appIdFromUrl:s,appIdFromAppUrl:u,appsBeforeExtension:i});if(!a)throw new Error("No apps registered");await this.loadApp(a,this.container)}async loadApp(e,r){let s;if(typeof e=="string"){const i=this.apps.get(e);if(!i)throw new Error(`App '${e}' not found. Make sure it's registered.`);s=i}else s=e,this.registerApp(s);Fe.info(`Loading app: ${s.name}...`),this.currentApp&&(Fe.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Fe.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(i=>{We.disable(i)}))),s.contributions&&(Fe.info("Registering app contributions..."),s.contributions.ui&&(s.contributions.ui.forEach(i=>{const u=i.target;u&&Ye.registerContribution(u,i)}),Fe.info(`Registered ${s.contributions.ui.length} UI contributions`)),s.contributions.extensions&&(s.contributions.extensions.forEach(i=>{We.registerExtension(i)}),Fe.info(`Registered ${s.contributions.extensions.length} app extensions`))),s.extensions&&(Fe.info(`Enabling ${s.extensions.length} extensions...`),s.extensions.forEach(i=>{We.enable(i)})),s.initialize&&(Fe.info(`Initializing ${s.name}...`),await s.initialize()),this.currentApp=s,Fe.info(`App ${s.name} loaded successfully`),r&&this.renderApp(r)}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");Ar(this.currentApp.render(),e),Fe.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}selectAppToLoad(e){const{appIdFromUrl:r,appIdFromAppUrl:s,appsBeforeExtension:i}=e;if(r){const a=this.apps.get(r);if(a)return Fe.info(`Loading app specified by URL parameter 'appId': ${r}`),a;Fe.warn(`App ID '${r}' from URL parameter not found`)}if(s){const a=this.apps.get(s);if(a)return Fe.info(`Loading app using ID extracted from app URL path: ${s}`),a}if(this.apps.size>i){const a=Array.from(this.apps.values()).slice(i);if(a.length>0){const d=a[0];return Fe.info(`Loading app registered by extension: ${d.name} (${d.id})`),d}}if(this.defaultAppId){const a=this.apps.get(this.defaultAppId);if(a)return a;Fe.warn(`Default app '${this.defaultAppId}' not found`)}const u=this.getRegisteredApps();if(u.length>0){const a=u[0];return Fe.info(`Loading first registered app: ${a.name} (${a.id})`),a}}}const Bn=new Lc;zt.put("appLoaderService",Bn);var Rc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,us=(t,e,r,s)=>{for(var i=s>1?void 0:s?$c(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Rc(e,r,i),i};let Rn=class extends _t{constructor(){super(...arguments),this.filterText=""}doInitUI(){ar(ni,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){We.enable(t.id,!0),this.requestUpdate()}disable(t){We.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=Bn.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return We.getExtensions();const t=this.filterText.toLowerCase();return We.getExtensions().filter(e=>e.name.toLowerCase().includes(t)||(e.description?.toLowerCase().includes(t)??!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],r=[];return t.forEach(s=>{We.isEnabled(s.id)?e.push(s):r.push(s)}),e.sort((s,i)=>s.name.localeCompare(i.name)),r.sort((s,i)=>s.name.localeCompare(i.name)),{enabled:e,available:r}}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return z`
            <wa-input
                placeholder="Filter extensions..."
                .value=${this.filterText}
                @input=${t=>this.handleFilterInput(t)}
                @wa-clear=${()=>this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
        `}render(){const t=this.getGroupedExtensions(),e=t.enabled.length>0||t.available.length>0;return z`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${e?z`
                        ${t.enabled.length>0?z`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    Installed (${t.enabled.length})
                                </span>
                                ${t.enabled.map(r=>z`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                        <span><k-icon name="${r.icon}"></k-icon> ${r.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                        ${t.available.length>0?z`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${t.available.length})
                                </span>
                                ${t.available.map(r=>z`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                        <span><k-icon name="${r.icon}"></k-icon> ${r.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                    `:z`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${Wt(this.selectedExtension,r=>z`
                        <h1><k-icon name="${r.icon}"></k-icon> ${r.name}</h1>
                        <hr>
                        <div>
                            ${Wt(We.isEnabled(r.id),()=>z`
                                <wa-button 
                                    title="${this.isExtensionRequired(r.id)?"This extension is required by the current app and cannot be uninstalled":"Disable this extension"}" 
                                    @click="${()=>this.disable(r)}"
                                    variant="danger" 
                                    appearance="plain"
                                    ?disabled=${this.isExtensionRequired(r.id)}>
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>
                                ${Wt(this.isExtensionRequired(r.id),()=>z`
                                    <div class="required-hint">
                                        <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                        <span>This extension is required by the current app and cannot be uninstalled</span>
                                    </div>
                                `)}
                            `,()=>z`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(r)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${Wt(r.experimental,()=>z`
                            <div style="margin-top: 1em;">
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}

                        <p style="margin-top: 1em;">${r.description}</p>

                        ${Wt(r.dependencies&&r.dependencies.length>0,()=>z`
                            <div style="margin-top: 1.5em;">
                                <h3 style="margin-bottom: 0.5em;">
                                    <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies
                                </h3>
                                <div class="dependencies-list">
                                    ${r.dependencies.map(s=>{const i=We.getExtensions().find(a=>a.id===s),u=We.isEnabled(s);return z`
                                            <div class="dependency-item">
                                                <wa-icon 
                                                    name="${u?"check-circle":"circle"}" 
                                                    style="color: ${u?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                </wa-icon>
                                                <k-icon name="${i?.icon||"puzzle-piece"}"></k-icon>
                                                <span>${i?.name||s}</span>
                                                ${u?"":z`
                                                    <span class="dependency-badge">Not Installed</span>
                                                `}
                                            </div>
                                        `})}
                                </div>
                                <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                    <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies are automatically installed when this extension is enabled.
                                </small>
                            </div>
                        `)}
                    `)}
                </div>
            </wa-split-panel>
        `}};Rn.styles=$t`
        :host {
        }

        wa-tree-item > span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        wa-tree-item:has(> wa-tree-item) {
            font-weight: 500;
        }

        .dependencies-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .dependency-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-surface-variant);
        }

        .dependency-item wa-icon:first-child {
            flex-shrink: 0;
        }

        .dependency-item k-icon {
            flex-shrink: 0;
        }

        .dependency-item span:not(.dependency-badge) {
            flex: 1;
        }

        .dependency-badge {
            font-size: 0.85rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-warning-100);
            color: var(--wa-color-warning-900);
        }

        .required-hint {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.75rem;
            padding: 0.5rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
        }

        .required-hint wa-icon {
            flex-shrink: 0;
        }

        .required-hint span {
            line-height: 1.4;
        }
    `;us([et()],Rn.prototype,"selectedExtension",2);us([et()],Rn.prototype,"filterText",2);Rn=us([gt("k-extensions")],Rn);var Dc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,xi=(t,e,r,s)=>{for(var i=s>1?void 0:s?Nc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Dc(e,r,i),i};let ln=class extends _t{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=zr()}connectedCallback(){super.connectedCallback(),Eo(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),_o()}log(t,e,r="info"){const s={timestamp:new Date,level:r,source:t,message:e};this.messages=[...this.messages,s],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(i=>i.level==="info").length,e=this.messages.filter(i=>i.level==="warning").length,r=this.messages.filter(i=>i.level==="error").length,s=this.messages.filter(i=>i.level==="debug").length;return z`
            <k-action 
                icon="list"
                title="All logs"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.updateToolbar()}}>
                All (${this.messages.length})
            </k-action>

            <k-action 
                icon="circle-info"
                title="Info logs"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.updateToolbar()}}>
                Info${t>0?` (${t})`:""}
            </k-action>

            <k-action 
                icon="triangle-exclamation"
                title="Warning logs"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.updateToolbar()}}>
                Warnings${e>0?` (${e})`:""}
            </k-action>

            <k-action 
                icon="circle-xmark"
                title="Error logs"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.updateToolbar()}}>
                Errors${r>0?` (${r})`:""}
            </k-action>

            <k-action 
                icon="bug"
                title="Debug logs"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.updateToolbar()}}>
                Debug${s>0?` (${s})`:""}
            </k-action>

            <wa-divider orientation="vertical"></wa-divider>

            <k-action 
                icon="arrow-down" 
                title="${this.autoScroll?"Auto-scroll enabled":"Auto-scroll disabled"}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.updateToolbar()}}>
                ${this.autoScroll?"Auto-scroll":"Manual"}
            </k-action>

            <k-action 
                icon="trash" 
                title="Clear logs"
                .action=${()=>this.clear()}>
                Clear
            </k-action>
        `}render(){const t=this.getFilteredMessages();return z`
            <div class="log-terminal">
                <div class="messages" ${Ur(this.containerRef)}>
                    ${t.length===0?z`<div class="empty-state">No log messages</div>`:t.map(e=>z`
                            <div class="message" data-level="${e.level}">
                                <span class="timestamp">${this.formatTimestamp(e.timestamp)}</span>
                                <wa-icon 
                                    name="${this.getLevelIcon(e.level)}" 
                                    label="${e.level}"
                                    style="color: ${this.getLevelColor(e.level)}">
                                </wa-icon>
                                <span class="source">[${e.source}]</span>
                                <span class="text">${e.message}</span>
                            </div>
                        `)}
                </div>
            </div>
        `}};ln.styles=$t`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .log-terminal {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .messages {
            flex: 1;
            overflow-y: auto;
            padding: 0.5rem;
            font-family: var(--wa-font-mono);
            font-size: 0.875rem;
            line-height: 1.5;
        }

        .message {
            display: flex;
            gap: 0.5rem;
            padding: 0.25rem 0.5rem;
            align-items: baseline;
            border-radius: var(--wa-border-radius-small);
        }

        .message:hover {
            background: var(--wa-color-neutral-background-hover);
        }

        .timestamp {
            color: var(--wa-color-neutral-text-subtle);
            font-size: 0.75rem;
            white-space: nowrap;
        }

        .source {
            color: var(--wa-color-primary-text);
            font-weight: 500;
            white-space: nowrap;
        }

        .text {
            color: var(--wa-color-neutral-text);
            word-break: break-word;
        }

        .message[data-level="error"] .text {
            color: var(--wa-color-danger-text);
        }

        .message[data-level="warning"] .text {
            color: var(--wa-color-warning-text);
        }

        .message[data-level="debug"] .text {
            color: var(--wa-color-neutral-text-subtle);
        }

        .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: var(--wa-color-neutral-text-subtle);
            font-style: italic;
        }

        wa-icon {
            flex-shrink: 0;
        }
    `;xi([et()],ln.prototype,"messages",2);xi([et()],ln.prototype,"autoScroll",2);xi([et()],ln.prototype,"filter",2);ln=xi([gt("k-log-terminal")],ln);var Mc=Object.defineProperty,Fc=Object.getOwnPropertyDescriptor,or=(t,e,r,s)=>{for(var i=s>1?void 0:s?Fc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Mc(e,r,i),i};let Ht=class extends qn{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const t=da.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),ar(Nn,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=Ye.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,r=e.disabled?.get();return z`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    ?disabled="${r}">
                    ${e.label}
                </k-command>
            `}if("html"in t){const r=t.html;return r instanceof Function?r():un(r)}return Rt}render(){const t=this.getKeybinding();return this.isInDropdown()?z`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${t?z`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?z`
                <wa-dropdown placement=${this.placement}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${t?`${this.title} (${t})`:this.title}>
                        <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                        <slot></slot>
                    </wa-button>
                    
                    ${this.title?z`
                        <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:Rt}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?z`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                        </k-command>
                    `:Rt}
                </wa-dropdown>
            `:z`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${()=>this.handleClick()}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};Ht.styles=$t`
        :host {
            display: inline-block;
        }

        .keybinding {
            margin-left: auto;
            padding: 2px 6px;
            background: var(--wa-color-neutral-15);
            border: 1px solid var(--wa-color-neutral-25);
            border-radius: 3px;
            font-size: 10px;
            font-family: monospace;
            opacity: 0.7;
        }

        :host-context(.wa-light) .keybinding {
            background: var(--wa-color-neutral-85);
            border: 1px solid var(--wa-color-neutral-75);
        }
    `;or([ze()],Ht.prototype,"cmd",2);or([ze()],Ht.prototype,"title",2);or([ze()],Ht.prototype,"icon",2);or([ze({type:Boolean})],Ht.prototype,"disabled",2);or([ze()],Ht.prototype,"appearance",2);or([ze()],Ht.prototype,"size",2);or([ze({type:Object,attribute:!1})],Ht.prototype,"params",2);or([ze()],Ht.prototype,"dropdown",2);or([ze()],Ht.prototype,"placement",2);or([et()],Ht.prototype,"dropdownContributions",2);Ht=or([gt("k-command")],Ht);var qc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,Tr=(t,e,r,s)=>{for(var i=s>1?void 0:s?zc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&qc(e,r,i),i};let fr=class extends qn{constructor(){super(...arguments),this.title="",this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small"}handleClick(t){!this.disabled&&this.action&&(t.stopPropagation(),this.action(t))}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}render(){return this.isInDropdown()?z`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${t=>this.handleClick(t)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                </wa-dropdown-item>
            `:z`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${this.title}
                @click=${t=>this.handleClick(t)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};fr.styles=$t`
        :host {
            display: inline-block;
        }
    `;Tr([ze({type:Object,attribute:!1})],fr.prototype,"action",2);Tr([ze()],fr.prototype,"title",2);Tr([ze()],fr.prototype,"icon",2);Tr([ze({type:Boolean})],fr.prototype,"disabled",2);Tr([ze()],fr.prototype,"appearance",2);Tr([ze()],fr.prototype,"variant",2);Tr([ze()],fr.prototype,"size",2);fr=Tr([gt("k-action")],fr);var Uc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,ps=(t,e,r,s)=>{for(var i=s>1?void 0:s?jc(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Uc(e,r,i),i};let $n=class extends qn{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return z`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};$n.styles=$t`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;ps([ze()],$n.prototype,"message",2);ps([ze()],$n.prototype,"icon",2);$n=ps([gt("k-no-content")],$n);We.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>ht(()=>import("./git-extension-Da41IQy4.js"),__vite__mapDeps([0,1,2])),icon:"code-branch",experimental:!0});We.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>ht(()=>import("./pyterminal-extension-DPNY-zAY.js"),__vite__mapDeps([3,1,2,4])),icon:"k python",experimental:!0});We.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>ht(()=>import("./k-linuxterminal-DhxU5fBR.js"),__vite__mapDeps([5,1,2,4])),icon:"terminal",experimental:!0});We.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>ht(()=>import("./webllmservice-BdmwlYTp.js"),[]),icon:"robot"});We.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>ht(()=>import("./p12-splitter-BUZVwQ1c.js"),__vite__mapDeps([6,1,2])),icon:"certificate"});We.registerExtension({id:"system.pythonpackagemanager",name:"Python Package Manager",description:"Manage Python packages for notebooks and other Python-based extensions",loader:()=>ht(()=>import("./package-manager-extension-v72rKhOP.js"),__vite__mapDeps([7,1,2])),icon:"box"});We.registerExtension({id:"system.notebook",name:"Jupyter-like Notebook Editor",description:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>ht(()=>import("./notebook-extension-DwKnLVkX.js"),__vite__mapDeps([8,1,2,9,10,7])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});We.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>ht(()=>import("./command-palette-extension-B7nENWYn.js"),__vite__mapDeps([11,1,2])),icon:"terminal"});We.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>ht(()=>import("./download-extension-DdrOjsul.js"),__vite__mapDeps([12,1,2])),icon:"download"});We.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>ht(()=>import("./unzip-extension-DPbZuX16.js"),__vite__mapDeps([13,1,2])),icon:"box-archive"});We.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>ht(()=>import("./md-editor-extension-B7F_DS3O.js"),__vite__mapDeps([14,1,2])),icon:"book"});We.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>ht(()=>import("./monaco-editor-extension-Cjwef1fN.js"),__vite__mapDeps([15,9,1,2,10,7])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});We.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>ht(()=>import("./memory-usage-extension-DrQuzQs2.js"),__vite__mapDeps([16,1,2])),icon:"microchip"});We.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>ht(()=>import("./webdav-extension-B1_GoFwR.js"),__vite__mapDeps([17,1,2])),icon:"cloud"});We.registerExtension({id:"system.settings-tree",name:"Settings Tree Editor",description:"Tree-based editor for settings with in-place editing",loader:()=>ht(()=>import("./settings-tree-extension-BQjbijGw.js"),__vite__mapDeps([18,1,2])),icon:"sitemap"});const Bc=`You are a specialized commands execution plan generator. Your sole purpose is to analyze user requests expressed in natural language and translate them into a precise sequence of command calls that can be executed by a software controller.

**Instructions:**

1.  **Analyze the User Prompt:** Carefully understand the user's request.  Identify the desired outcome.
2.  **Translate to Command Sequence:**  Break down the request into a sequence of command calls.  Each command call should be a JSON object in the following format:
    \`\`\`json
    {
      "id": "CommandId",
      "summary": "brief description effects of executing this command and the parameter values which will be provided"
      "parameters": {
        "parameter1": "value1",
        "parameter2": "{{variable1}}",
        ...
      }
    }
    \`\`\`
    Note that the parameters object of each command call can reference output variables of previous commands by using the notation {{var_name}} as their value.
3.  **JSON Output Only:**  Your response *must* be a single, valid JSON array containing the sequence of command calls.  Do not include any introductory text or explanations *outside* the JSON array.
4.  **Parameter Extraction:**  Carefully extract the necessary parameters from the user prompt and map them to the corresponding command parameters.
5.  **Prioritize Clarity:**  If multiple command sequences could satisfy the request, choose the most straightforward and understandable sequence.
6.  **Error Handling:** If the user prompt is unclear or cannot be translated into a valid command sequence, use the proper command (toast_message) to inform the user, else respond with an empty JSON array: \\\`[]\\\`
7.  **Check json output:** Check your JSON result and correct if required.

**Available commands:**

\`\`\`json
\${commandsJson}
\`\`\``,Wc=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
The user will provide code snippets, and you will help them understand, debug, and extend their code.
Supported programming languages that geo!space can directly run:
- Python code is directly executed in the browser using Pyodide
- JavaScript code is executed in a worker

Code for other programming languages cannot be executed directly, but geo!space uses the monaco editor to offer basic IDE like functionality.

**Your Responsibilities:**

*   **Understand the User's Goal:**  Always start by clarifying what the user is trying to achieve with their Python code. Ask clarifying questions if necessary.
*   **Explain Python Code:**  If the user provides code, explain what it does, line by line if needed.  Point out potential issues or areas for improvement.
*   **Help with \`js\` Module Interaction:**  The user will likely want to call JavaScript functions from Python or pass data between Python and JavaScript.  Provide clear examples of how to use the \`js\` module for these interactions.  Explain the syntax and potential pitfalls.
*   **Provide Code Examples:**  Give concise, runnable code examples to illustrate concepts.
*   **Debug Code:**  If the user reports errors, help them identify the cause and suggest solutions.  Consider both Python and JavaScript errors.
*   **Suggest Improvements:**  Offer suggestions for making the code more efficient, readable, or robust.
*   **Focus on Browser Context:**  Remember that the code is running in a browser environment.  Be mindful of browser limitations and security considerations.
*   **Be Concise and Clear:**  Avoid jargon and explain concepts in a way that is easy to understand.
*   **Assume Basic Python Knowledge:**  While you should explain code, assume the user has a basic understanding of Python syntax.

**About the Python environment:**
A mount point is provided at /workspace which is linked to a folder on the user's local file system previously selected using the file system access api of the browser.
The working directory is automatically set to the /workspace folder. The user can access the workspace content in the web app's file browser titled "Workspace" in the UI.
The user can install additional Python packages by adding them as dependencies in the workspace file requirements.txt.
The dependencies within the requirements.txt are installed before any code is executed.`,Vc=`You are a JavaScript programming assistant for the geo!space IDE.
Your role is to help users write, understand, and debug geo!space modules—JavaScript files that export a function for dynamic interaction with OpenLayers-powered maps.

*Always follow these guidelines:*

- Explain concepts and code clearly, concisely, and at the experience level of the user.
- If a user shares module code, extract and summarize its structure (such as state, refs, UI, use of the map object, etc.) before offering feedback or improvements.
- When explaining, reference geo!space context, e.g., "This is how you add a map layer in geo!space..."
- For any questions or issues, focus help specifically on JavaScript, OpenLayers usage, and geo!space module patterns.
- Do not discuss topics outside JavaScript, OpenLayers, or geo!space modules.
- If a user's intent isn't clear, ask clarifying questions before answering.
- When a user requests a starter, skeleton, or minimal module, provide the following template and explain its structure:

\`\`\`javascript
// Export your module as a default function.
// The following parameters are available:
export default function ({ map, env, render, html, style, when, ref, createRef, events, settings }) {
    // Optional: local state for your module
    const state = {
        // Your state variables here
    };

    // Optional: references for interactive elements
    // const myRef = createRef();

    // Optional: run code when module loads
    // style({ /* ... custom styles or slotting ... */ })

    // Return a function that renders your UI
    return () => html\`
        <!-- Your module's UI goes here -->

        <div>
            <h3>Hello, geo!space!</h3>
            <button @click=\${() => {
                // Example: add a marker or interact with map
                alert("Button clicked! Add OpenLayers code here.");
            }}>
                Click me
            </button>
        </div>
    \`;
}
\`\`\``;class Gc{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,ar(Ln,()=>{})}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const r=u=>{const a=u.detail;a&&Array.from(a.querySelectorAll("*")).filter(v=>v instanceof _t).forEach(v=>{Ue.set(v),v.isEditor&&ti.set(v)})};e.addEventListener("tab-shown",r);const s=u=>{const a=u.detail;Array.from(a.querySelectorAll("*")).filter(v=>v instanceof _t).forEach(v=>{Ue.get()==v&&Ue.set(null),ti.get()==v&&ti.set(null)})};e.addEventListener("tab-closed",s),Sa(Di,u=>{const d=u.closest("wa-tab-panel").getAttribute("name");e.markDirty(d,u.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((r,s)=>(s.ranking??0)-(r.ranking??0))}async handleInput(e){for(let r=0;r<this.editorInputHandlers.length;r++){const s=this.editorInputHandlers[r];if(s.canHandle(e))return await s.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${Xr}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const r=this.getEditorArea();if(!r){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(r),r.has(e.key)){r.activate(e.key);return}r.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}}const Cr=new Gc;zt.put("editorRegistry",Cr);let Hc=0;Ye.registerContribution(jn,{label:"Commander",description:"Commands execution plan generator",role:"commands",sysPrompt:Bc,canHandle:({activeEditor:t})=>{const e=Pe.listCommands({source:t});return Object.keys(e).length>0},promptDecorator:async({userPrompt:t,commandRegistry:e,activeEditor:r})=>{const s=e.listCommands({source:r}),i=JSON.stringify(s,null,2);return`${t}

***Available Commands:***
${i}`},messageDecorator:async({message:t,activeEditor:e})=>{if(!t)return;const r=t.content.replace("```json","").replace("```",""),s=JSON.parse(r);let i=!0;t.content=s.map(({id:u,summary:a},d)=>{const v=Pe.getCommand(u);return v?`${d+1}. ${v.name}
	- ${a||v.description}`:(i=!1,`${d+1}. *INVALID COMMAND:* _${u}_`)}).join(`
`),t.actions=t.actions||[],t.actions.push({label:"Show Commands Execution Plan",icon:"list",action:async()=>{const u=Hc++,a=`\`\`\`json
${JSON.stringify(s,null,2)}
\`\`\``,d=new Da(a,`Commands Execution Plan (${u}).md`);await Cr.loadEditor(d)}}),i&&t.actions.push({label:"Execute Commands",icon:"play",action:async()=>{const u=e?.getCommandStack()||new pa;await on.runAsync("Executing commands",async()=>{bt.debug("Executing commands: "+JSON.stringify(s));const a=Pe.createExecutionContext(e);for(const d of s){const v=Object.entries(d.parameters||{}).map(([C,L])=>(typeof L=="string"&&(L=L.replace(/{{(.*?)}}/g,(S,b)=>a[b.trim()]??"")),[C,L]));a.params=Object.fromEntries(v),await u.execute(d.id,a)}})}})}});const Ma=t=>t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function",Fa=async({userPrompt:t,activeEditor:e})=>{const r=e.getEditor(),s=r.getModel(),i=s.getValueInRange(r.getSelection());return i?`${t}

 Code selection within file "${e.input?.data.getWorkspacePath()}":

            ${i}`:`${t}

Code in file "${e.input?.data.getWorkspacePath()}":

            ${s.getValue()}`};Ye.registerContribution(jn,{label:"Python Assistant",description:"Python code assistant",role:"py-programmer",sysPrompt:Wc,canHandle:({activeEditor:t})=>Ma(t)&&t.getLanguage()=="python",promptDecorator:Fa});Ye.registerContribution(jn,{label:"JavaScript Assistant",description:"JavaScript code assistant",role:"js-programmer",sysPrompt:Vc,canHandle:({activeEditor:t})=>Ma(t)&&t.getLanguage()=="javascript",promptDecorator:Fa});Ye.registerContribution(Gt,{target:Gt,label:"Ollama",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""}});Ye.registerContribution(Gt,{target:Gt,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1-mini",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});Ye.registerContribution(Gt,{target:Gt,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});Ye.registerContribution(Gt,{target:Gt,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});Ye.registerContribution(Gt,{target:Gt,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});Ye.registerContribution(Gt,{target:Gt,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr"}});ct({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}]},handler:{execute:async({params:t})=>{const e=await Dt.getWorkspace();if(!e){Ke("Please select a workspace!");return}let r=t?.path;const s=t?.contents,i=t?.ask,u=t?.extension;if((i||!r)&&(r=await Fn("Enter path to new file (directories will be created if not exist):",r||""),!r)||(u&&!r.endsWith(u)&&(r+=u),await e.getResource(r)&&!await pn(`File "${r}" already exists. Do you want to overwrite it?`)))return;const d=await e.getResource(r,{create:!0});d?(s&&await d.saveContents(s),qt("File created: "+r)):Ke("Could not create file: "+r)}}});ct({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{let e,r=t.params&&t.params.path;if(r){const u=await Dt.getWorkspace();u&&(e=await u.getResource(r))}if(e||(e=Vt.get()),!e){Ke("No resource to rename provided!");return}const s=e.getName(),i=t.params?.newName||await Fn(`Enter new name for "${s}":`,s);if(!(!i||i===s))try{await e.rename(i),qt(`Resource renamed to: ${i}`)}catch(u){Ke(`Failed to rename ${s}: ${u.message}`)}}}});ct({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{let e,r=t.params&&t.params.path;if(r){const u=await Dt.getWorkspace();u&&(e=await u.getResource(r))}if(e||(e=Vt.get()),!e){Ke("No resource to delete provided!");return}r=e.getWorkspacePath();const s=t.params&&t.params.confirm;let i=!0;if((s===void 0||s===!0)&&(i=await pn(`Are you sure you want to delete ${r}?`)),i)try{await e.delete(),qt("Resource deleted: "+r)}catch(u){Ke(`Resource ${r} could not be deleted: ${u.message||u}`)}}}});ct({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Dt.connectWorkspace(e)).catch(e=>{Ke(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});ct({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Dt.getWorkspace();e||Ke("No workspace selected."),e.touch()}}});ct({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Dt.getWorkspace();e||Ke("No workspace selected.");const r=t.params.path,s=await e?.getResource(r);await Cr.loadEditor(s)}}});var br={},tr={},zs;function Kc(){if(zs)return tr;zs=1,Object.defineProperty(tr,"__esModule",{value:!0});function t(c){const n=c||"";return function(){throw new Error("this method "+n+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(c,n){if(!c)throw new Error(n||"Assertion failed")}function r(c,n,o){let p;Object.defineProperty(c,n,{get(){return p||(p=o.call(this)),p}})}function s(c){return c&&Object.assign({},c)}function i(c,n){const o=[];for(;n-- >0;)o.push(c());return o}function u(c,n){return new Array(n+1).join(c)}function a(c,n){return i(()=>c,n)}function d(c){const n=[];for(let o=0;o<c.length;o++){const p=c[o];c.lastIndexOf(p)!==o&&n.indexOf(p)<0&&n.push(p)}return n}function v(c){const n=[];return c.forEach(o=>{n.indexOf(o)<0&&n.push(o)}),n}function C(c){const n=c[0];return n===n.toUpperCase()}function L(c){return!C(c)}function S(c,n,o){const p=o||" ";return c.length<n?u(p,n-c.length)+c:c}function b(){this.strings=[]}b.prototype.append=function(c){this.strings.push(c)},b.prototype.contents=function(){return this.strings.join("")};const A=c=>String.fromCodePoint(parseInt(c,16));function M(c){if(c.charAt(0)==="\\")switch(c.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return A(c.slice(2,4));case"u":return c.charAt(2)==="{"?A(c.slice(3,-1)):A(c.slice(2,6));default:return c.charAt(1)}else return c}function J(c){if(c==null)return String(c);const n=Object.prototype.toString.call(c);try{let o;return c.constructor&&c.constructor.name?o=c.constructor.name:n.indexOf("[object ")===0?o=n.slice(8,-1):o=typeof c,o+": "+JSON.stringify(String(c))}catch{return n}}var de=Object.freeze({__proto__:null,abstract:t,assert:e,defineLazyProperty:r,clone:s,repeatFn:i,repeatStr:u,repeat:a,getDuplicates:d,copyWithoutDuplicates:v,isSyntactic:C,isLexical:L,padLeft:S,StringBuffer:b,unescapeCodePoint:M,unexpectedObjToString:J});const _e={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class j{constructor(){if(this.constructor===j)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(n){return n&&(this.source=n.trimmed()),this}}const $=Object.create(j.prototype),V=Object.create(j.prototype);class q extends j{constructor(n){super(),this.obj=n}}class O extends j{constructor(n,o){super(),this.from=n,this.to=o,this.matchCodePoint=n.length>1||o.length>1}}class B extends j{constructor(n){super(),this.index=n}}class Z extends j{constructor(n){super(),this.terms=n}}class ke extends Z{constructor(n,o,p){const g=n.rules[o].body;super([p,g]),this.superGrammar=n,this.name=o,this.body=p}}class Te extends Z{constructor(n,o,p,g){const _=n.rules[o].body;super([...p,_,...g]),this.superGrammar=n,this.ruleName=o,this.expansionPos=p.length}}class le extends j{constructor(n){super(),this.factors=n}}class F extends j{constructor(n){super(),this.expr=n}}class ie extends F{}class me extends F{}class Ie extends F{}ie.prototype.operator="*",me.prototype.operator="+",Ie.prototype.operator="?",ie.prototype.minNumMatches=0,me.prototype.minNumMatches=1,Ie.prototype.minNumMatches=0,ie.prototype.maxNumMatches=Number.POSITIVE_INFINITY,me.prototype.maxNumMatches=Number.POSITIVE_INFINITY,Ie.prototype.maxNumMatches=1;class se extends j{constructor(n){super(),this.expr=n}}class ee extends j{constructor(n){super(),this.expr=n}}class ae extends j{constructor(n){super(),this.expr=n}}class W extends j{constructor(n,o=[]){super(),this.ruleName=n,this.args=o}isSyntactic(){return C(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class we extends j{constructor(n){super(),this.category=n,this.pattern=_e[n]}}function Le(c,n){let o;return n?(o=new Error(n.getLineAndColumnMessage()+c),o.shortMessage=c,o.interval=n):o=new Error(c),o}function y(){return Le("Interval sources don't match")}function x(c){const n=new Error;return Object.defineProperty(n,"message",{enumerable:!0,get(){return c.message}}),Object.defineProperty(n,"shortMessage",{enumerable:!0,get(){return"Expected "+c.getExpectedText()}}),n.interval=c.getInterval(),n}function ue(c,n,o){const p=n?`Grammar ${c} is not declared in namespace '${n}'`:"Undeclared grammar "+c;return Le(p,o)}function Ae(c,n){return Le("Grammar "+c.name+" is already declared in this namespace")}function Je(c){return Le(`Grammar '${c.name}' does not support incremental parsing`)}function De(c,n,o){return Le("Rule "+c+" is not declared in grammar "+n,o)}function T(c,n,o){return Le("Cannot override rule "+c+" because it is not declared in "+n,o)}function N(c,n,o){return Le("Cannot extend rule "+c+" because it is not declared in "+n,o)}function P(c,n,o,p){let g="Duplicate declaration for rule '"+c+"' in grammar '"+n+"'";return n!==o&&(g+=" (originally declared in '"+o+"')"),Le(g,p)}function G(c,n,o,p){return Le("Wrong number of parameters for rule "+c+" (expected "+n+", got "+o+")",p)}function ne(c,n,o,p){return Le("Wrong number of arguments for rule "+c+" (expected "+n+", got "+o+")",p)}function X(c,n,o){return Le("Duplicate parameter names in rule "+c+": "+n.join(", "),o)}function U(c,n){return Le("Invalid parameter to rule "+c+": "+n+" has arity "+n.getArity()+", but parameter expressions must have arity 1",n.source)}const re="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function ve(c,n){return Le("Cannot apply syntactic rule "+c+" from here (inside a lexical context)",n.source)}function $e(c){const{ruleName:n}=c;return Le(`applySyntactic is for syntactic rules, but '${n}' is a lexical rule. `+re,c.source)}function Ne(c){return Le("applySyntactic is not required here (in a syntactic context)",c.source)}function ge(c,n){return Le("Incorrect argument type: expected "+c,n.source)}function xe(c){return Le("'...' can appear at most once in a rule body",c.source)}function Re(c){const n=c._node;e(n&&n.isNonterminal()&&n.ctorName==="escapeChar_unicodeCodePoint");const o=c.children.slice(1,-1).map(g=>g.source),p=o[0].coverageWith(...o.slice(1));return Le(`U+${p.contents} is not a valid Unicode code point`,p)}function he(c,n){const o=n.length>0?n[n.length-1].args:[];let g="Nullable expression "+c.expr.substituteParams(o)+" is not allowed inside '"+c.operator+"' (possible infinite loop)";if(n.length>0){const _=n.map(D=>new W(D.ruleName,D.args)).join(`
`);g+=`
Application stack (most recent application last):
`+_}return Le(g,c.expr.source)}function ut(c,n,o,p){return Le("Rule "+c+" involves an alternation which has inconsistent arity (expected "+n+", got "+o+")",p.source)}function jt(c){const n=c.map(o=>o.message);return Le(["Errors:"].concat(n).join(`
- `),c[0].interval)}function wt(c,n,o,p){let g=p.slice(0,-1).map(Q=>{const fe="  "+Q[0].name+" > "+Q[1];return Q.length===3?fe+" for '"+Q[2]+"'":fe}).join(`
`);g+=`
  `+n+" > "+c;let _="";c==="_iter"&&(_=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const D=[`Missing semantic action for '${c}' in ${o} '${n}'.${_}`,"Action stack (most recent call last):",g].join(`
`),te=Le(D);return te.name="missingSemanticAction",te}function pt(c){if(c.length===1)throw c[0];if(c.length>1)throw jt(c)}function xt(c){let n=0;return c.map(p=>{const g=p.toString();return n=Math.max(n,g.length),g}).map(p=>S(p,n))}function Kt(c,n,o){const p=c.length,g=c.slice(0,o),_=c.slice(o+n.length);return(g+n+_).substr(0,p)}function lr(...c){const n=this,{offset:o}=n,{repeatStr:p}=de,g=new b;g.append("Line "+n.lineNum+", col "+n.colNum+`:
`);const _=xt([n.prevLine==null?0:n.lineNum-1,n.lineNum,n.nextLine==null?0:n.lineNum+1]),D=(K,H,ce)=>{g.append(ce+_[K]+" | "+H+`
`)};n.prevLine!=null&&D(0,n.prevLine,"  "),D(1,n.line,"> ");const te=n.line.length;let Q=p(" ",te+1);for(let K=0;K<c.length;++K){let H=c[K][0],ce=c[K][1];e(H>=0&&H<=ce,"range start must be >= 0 and <= end");const Se=o-n.colNum+1;H=Math.max(0,H-Se),ce=Math.min(ce-Se,te),Q=Kt(Q,p("~",ce-H),H)}const fe=2+_[1].length+3;return g.append(p(" ",fe)),Q=Kt(Q,"^",n.colNum-1),g.append(Q.replace(/ +$/,"")+`
`),n.nextLine!=null&&D(2,n.nextLine,"  "),g.contents()}let Ir=[];function Zt(c){Ir.push(c)}function oe(c){Ir.forEach(n=>{n(c)}),Ir=null}function kr(c,n){let o=1,p=1,g=0,_=0,D=null,te=null,Q=-1;for(;g<n;){const H=c.charAt(g++);H===`
`?(o++,p=1,Q=_,_=g):H!=="\r"&&p++}let fe=c.indexOf(`
`,_);if(fe===-1)fe=c.length;else{const H=c.indexOf(`
`,fe+1);D=H===-1?c.slice(fe):c.slice(fe,H),D=D.replace(/^\r?\n/,"").replace(/\r$/,"")}Q>=0&&(te=c.slice(Q,_).replace(/\r?\n$/,""));const K=c.slice(_,fe).replace(/\r$/,"");return{offset:n,lineNum:o,colNum:p,line:K,prevLine:te,nextLine:D,toString:lr}}function mr(c,n,...o){return kr(c,n).toString(...o)}const Bt=(()=>{let c=0;return n=>""+n+c++})();class it{constructor(n,o,p){this.sourceString=n,this.startIdx=o,this.endIdx=p}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...n){return it.coverage(...n,this)}collapsedLeft(){return new it(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new it(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return kr(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const n=[this.startIdx,this.endIdx];return mr(this.sourceString,this.startIdx,n)}minus(n){if(this.sourceString!==n.sourceString)throw y();return this.startIdx===n.startIdx&&this.endIdx===n.endIdx?[]:this.startIdx<n.startIdx&&n.endIdx<this.endIdx?[new it(this.sourceString,this.startIdx,n.startIdx),new it(this.sourceString,n.endIdx,this.endIdx)]:this.startIdx<n.endIdx&&n.endIdx<this.endIdx?[new it(this.sourceString,n.endIdx,this.endIdx)]:this.startIdx<n.startIdx&&n.startIdx<this.endIdx?[new it(this.sourceString,this.startIdx,n.startIdx)]:[this]}relativeTo(n){if(this.sourceString!==n.sourceString)throw y();return e(this.startIdx>=n.startIdx&&this.endIdx<=n.endIdx,"other interval does not cover this one"),new it(this.sourceString,this.startIdx-n.startIdx,this.endIdx-n.startIdx)}trimmed(){const{contents:n}=this,o=this.startIdx+n.match(/^\s*/)[0].length,p=this.endIdx-n.match(/\s*$/)[0].length;return new it(this.sourceString,o,p)}subInterval(n,o){const p=this.startIdx+n;return new it(this.sourceString,p,p+o)}}it.coverage=function(c,...n){let{startIdx:o,endIdx:p}=c;for(const g of n){if(g.sourceString!==c.sourceString)throw y();o=Math.min(o,g.startIdx),p=Math.max(p,g.endIdx)}return new it(c.sourceString,o,p)};const Yt=65535;class qe{constructor(n){this.source=n,this.pos=0,this.examinedLength=0}atEnd(){const n=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),n}next(){const n=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),n}nextCharCode(){const n=this.next();return n&&n.charCodeAt(0)}nextCodePoint(){const n=this.source.slice(this.pos++).codePointAt(0);return n>Yt&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),n}matchString(n,o){let p;if(o){for(p=0;p<n.length;p++){const g=this.next(),_=n[p];if(g==null||g.toUpperCase()!==_.toUpperCase())return!1}return!0}for(p=0;p<n.length;p++)if(this.next()!==n[p])return!1;return!0}sourceSlice(n,o){return this.source.slice(n,o)}interval(n,o){return new it(this.source,n,o||this.pos)}}class f{constructor(n,o,p,g,_,D,te){this.matcher=n,this.input=o,this.startExpr=p,this._cst=g,this._cstOffset=_,this._rightmostFailurePosition=D,this._rightmostFailures=te,this.failed()&&(r(this,"message",function(){const Q="Expected "+this.getExpectedText();return mr(this.input,this.getRightmostFailurePosition())+Q}),r(this,"shortMessage",function(){const Q="expected "+this.getExpectedText(),fe=kr(this.input,this.getRightmostFailurePosition());return"Line "+fe.lineNum+", col "+fe.colNum+": "+Q}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const n=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=n.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const n=new b;let o=this.getRightmostFailures();o=o.filter(p=>!p.isFluffy());for(let p=0;p<o.length;p++)p>0&&(p===o.length-1?n.append(o.length>2?", or ":" or "):n.append(", ")),n.append(o[p].toString());return n.contents()}getInterval(){const n=this.getRightmostFailurePosition();return new it(this.input,n,n)}}class w{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(n){return this.applicationMemoKeyStack.indexOf(n.toMemoKey())>=0}enter(n){this.applicationMemoKeyStack.push(n.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(n,o){o.isLeftRecursion=!0,o.headApplication=n,o.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=o;const{applicationMemoKeyStack:p}=this,g=p.indexOf(n.toMemoKey())+1,_=p.slice(g);o.isInvolved=function(D){return _.indexOf(D)>=0},o.updateInvolvedApplicationMemoKeys=function(){for(let D=g;D<p.length;D++){const te=p[D];this.isInvolved(te)||_.push(te)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(n){if(!n.isLeftRecursion)return!0;const{applicationMemoKeyStack:o}=this;for(let p=0;p<o.length;p++){const g=o[p];if(n.isInvolved(g))return!1}return!0}memoize(n,o){return this.memo[n]=o,this.maxExaminedLength=Math.max(this.maxExaminedLength,o.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,o.rightmostFailureOffset),o}clearObsoleteEntries(n,o){if(n+this.maxExaminedLength<=o)return;const{memo:p}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(p).forEach(g=>{const _=p[g];n+_.examinedLength>o?delete p[g]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,_.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,_.rightmostFailureOffset))})}}const k="✗",l="✓",h="⋅",m="⇒",E="␉",I="␊",R="␍",Y={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function pe(c){return a(" ",c).join("")}function ye(c,n,o){const p=je(c.slice(n,n+o));return p.length<o?p+a(" ",o-p.length).join(""):p}function je(c){return typeof c=="string"?c.replace(/ /g,h).replace(/\t/g,E).replace(/\n/g,I).replace(/\r/g,R):String(c)}class Ee{constructor(n,o,p,g,_,D,te){this.input=n,this.pos=this.pos1=o,this.pos2=p,this.source=new it(n,o,p),this.expr=g,this.bindings=D,this.children=te||[],this.terminatingLREntry=null,this._flags=_?Y.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(n){const o=new Ee(this.input,this.pos,this.pos2,n,this.succeeded,this.bindings,this.children);return o.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,o.isImplicitSpaces=this.isImplicitSpaces,o.isMemoized=this.isMemoized,o.isRootNode=this.isRootNode,o.terminatesLR=this.terminatesLR,o.terminatingLREntry=this.terminatingLREntry,o}recordLRTermination(n,o){this.terminatingLREntry=new Ee(this.input,this.pos,this.pos2,this.expr,!1,[o],[n]),this.terminatingLREntry.terminatesLR=!0}walk(n,o){let p=n;typeof p=="function"&&(p={enter:p});function g(_,D,te){let Q=!0;p.enter&&p.enter.call(o,_,D,te)===Ee.prototype.SKIP&&(Q=!1),Q&&(_.children.forEach(fe=>{g(fe,_,te+1)}),p.exit&&p.exit.call(o,_,D,te))}this.isRootNode?this.children.forEach(_=>{g(_,null,0)}):g(this,null,0)}toString(){const n=new b;return this.walk((o,p,g)=>{if(!o)return this.SKIP;if(o.expr.constructor.name!=="Alt"){if(n.append(ye(o.input,o.pos,10)+pe(g*2+1)),n.append((o.succeeded?l:k)+" "+o.displayString),o.isHeadOfLeftRecursion&&n.append(" (LR)"),o.succeeded){const D=je(o.source.contents);n.append(" "+m+"  "),n.append(typeof D=="string"?'"'+D+'"':D)}n.append(`
`)}}),n.contents()}}Ee.prototype.SKIP={},Object.keys(Y).forEach(c=>{const n=Y[c];Object.defineProperty(Ee.prototype,c,{get(){return(this._flags&n)!==0},set(o){o?this._flags|=n:this._flags&=~n}})}),j.prototype.allowsSkippingPrecedingSpace=t("allowsSkippingPrecedingSpace"),$.allowsSkippingPrecedingSpace=V.allowsSkippingPrecedingSpace=W.prototype.allowsSkippingPrecedingSpace=q.prototype.allowsSkippingPrecedingSpace=O.prototype.allowsSkippingPrecedingSpace=we.prototype.allowsSkippingPrecedingSpace=function(){return!0},Z.prototype.allowsSkippingPrecedingSpace=F.prototype.allowsSkippingPrecedingSpace=ae.prototype.allowsSkippingPrecedingSpace=ee.prototype.allowsSkippingPrecedingSpace=se.prototype.allowsSkippingPrecedingSpace=B.prototype.allowsSkippingPrecedingSpace=le.prototype.allowsSkippingPrecedingSpace=function(){return!1};let Be;Zt(c=>{Be=c});let Me;j.prototype.assertAllApplicationsAreValid=function(c,n){Me=0,this._assertAllApplicationsAreValid(c,n)},j.prototype._assertAllApplicationsAreValid=t("_assertAllApplicationsAreValid"),$._assertAllApplicationsAreValid=V._assertAllApplicationsAreValid=q.prototype._assertAllApplicationsAreValid=O.prototype._assertAllApplicationsAreValid=B.prototype._assertAllApplicationsAreValid=we.prototype._assertAllApplicationsAreValid=function(c,n){},ae.prototype._assertAllApplicationsAreValid=function(c,n){Me++,this.expr._assertAllApplicationsAreValid(c,n),Me--},Z.prototype._assertAllApplicationsAreValid=function(c,n){for(let o=0;o<this.terms.length;o++)this.terms[o]._assertAllApplicationsAreValid(c,n)},le.prototype._assertAllApplicationsAreValid=function(c,n){for(let o=0;o<this.factors.length;o++)this.factors[o]._assertAllApplicationsAreValid(c,n)},F.prototype._assertAllApplicationsAreValid=se.prototype._assertAllApplicationsAreValid=ee.prototype._assertAllApplicationsAreValid=function(c,n){this.expr._assertAllApplicationsAreValid(c,n)},W.prototype._assertAllApplicationsAreValid=function(c,n,o=!1){const p=n.rules[this.ruleName],g=C(c)&&Me===0;if(!p)throw De(this.ruleName,n.name,this.source);if(!o&&C(this.ruleName)&&!g)throw ve(this.ruleName,this);const _=this.args.length,D=p.formals.length;if(_!==D)throw ne(this.ruleName,D,_,this.source);const te=Be&&p===Be.rules.applySyntactic;if(Be&&p===Be.rules.caseInsensitive&&!(this.args[0]instanceof q))throw ge('a Terminal (e.g. "abc")',this.args[0]);if(te){const fe=this.args[0];if(!(fe instanceof W))throw ge("a syntactic rule application",fe);if(!C(fe.ruleName))throw $e(fe);if(g)throw Ne(this)}this.args.forEach(fe=>{if(fe._assertAllApplicationsAreValid(c,n,te),fe.getArity()!==1)throw U(this.ruleName,fe)})},j.prototype.assertChoicesHaveUniformArity=t("assertChoicesHaveUniformArity"),$.assertChoicesHaveUniformArity=V.assertChoicesHaveUniformArity=q.prototype.assertChoicesHaveUniformArity=O.prototype.assertChoicesHaveUniformArity=B.prototype.assertChoicesHaveUniformArity=ae.prototype.assertChoicesHaveUniformArity=we.prototype.assertChoicesHaveUniformArity=function(c){},Z.prototype.assertChoicesHaveUniformArity=function(c){if(this.terms.length===0)return;const n=this.terms[0].getArity();for(let o=0;o<this.terms.length;o++){const p=this.terms[o];p.assertChoicesHaveUniformArity();const g=p.getArity();if(n!==g)throw ut(c,n,g,p)}},ke.prototype.assertChoicesHaveUniformArity=function(c){const n=this.terms[0].getArity(),o=this.terms[1].getArity();if(n!==o)throw ut(c,o,n,this.terms[0])},le.prototype.assertChoicesHaveUniformArity=function(c){for(let n=0;n<this.factors.length;n++)this.factors[n].assertChoicesHaveUniformArity(c)},F.prototype.assertChoicesHaveUniformArity=function(c){this.expr.assertChoicesHaveUniformArity(c)},se.prototype.assertChoicesHaveUniformArity=function(c){},ee.prototype.assertChoicesHaveUniformArity=function(c){this.expr.assertChoicesHaveUniformArity(c)},W.prototype.assertChoicesHaveUniformArity=function(c){},j.prototype.assertIteratedExprsAreNotNullable=t("assertIteratedExprsAreNotNullable"),$.assertIteratedExprsAreNotNullable=V.assertIteratedExprsAreNotNullable=q.prototype.assertIteratedExprsAreNotNullable=O.prototype.assertIteratedExprsAreNotNullable=B.prototype.assertIteratedExprsAreNotNullable=we.prototype.assertIteratedExprsAreNotNullable=function(c){},Z.prototype.assertIteratedExprsAreNotNullable=function(c){for(let n=0;n<this.terms.length;n++)this.terms[n].assertIteratedExprsAreNotNullable(c)},le.prototype.assertIteratedExprsAreNotNullable=function(c){for(let n=0;n<this.factors.length;n++)this.factors[n].assertIteratedExprsAreNotNullable(c)},F.prototype.assertIteratedExprsAreNotNullable=function(c){if(this.expr.assertIteratedExprsAreNotNullable(c),this.expr.isNullable(c))throw he(this,[])},Ie.prototype.assertIteratedExprsAreNotNullable=se.prototype.assertIteratedExprsAreNotNullable=ee.prototype.assertIteratedExprsAreNotNullable=ae.prototype.assertIteratedExprsAreNotNullable=function(c){this.expr.assertIteratedExprsAreNotNullable(c)},W.prototype.assertIteratedExprsAreNotNullable=function(c){this.args.forEach(n=>{n.assertIteratedExprsAreNotNullable(c)})};class at{constructor(n){this.matchLength=n}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(n){if(this.children)return this.children[n]}indexOfChild(n){return this.children.indexOf(n)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(n){const o=this.indexOfChild(n);if(o<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(o===0)throw new Error("cannot get child before first child");return this.childAt(o-1)}childAfter(n){const o=this.indexOfChild(n);if(o<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(o===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(o+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class Oe extends at{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class rt extends at{constructor(n,o,p,g){super(g),this.ruleName=n,this.children=o,this.childOffsets=p}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return L(this.ctorName)}isSyntactic(){return C(this.ctorName)}}class Nt extends at{constructor(n,o,p,g){super(p),this.children=n,this.childOffsets=o,this.optional=g}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}j.prototype.eval=t("eval"),$.eval=function(c){const{inputStream:n}=c,o=n.pos,p=n.nextCodePoint();return p!==void 0?(c.pushBinding(new Oe(String.fromCodePoint(p).length),o),!0):(c.processFailure(o,this),!1)},V.eval=function(c){const{inputStream:n}=c,o=n.pos;return n.atEnd()?(c.pushBinding(new Oe(0),o),!0):(c.processFailure(o,this),!1)},q.prototype.eval=function(c){const{inputStream:n}=c,o=n.pos;return n.matchString(this.obj)?(c.pushBinding(new Oe(this.obj.length),o),!0):(c.processFailure(o,this),!1)},O.prototype.eval=function(c){const{inputStream:n}=c,o=n.pos,p=this.matchCodePoint?n.nextCodePoint():n.nextCharCode();return p!==void 0&&this.from.codePointAt(0)<=p&&p<=this.to.codePointAt(0)?(c.pushBinding(new Oe(String.fromCodePoint(p).length),o),!0):(c.processFailure(o,this),!1)},B.prototype.eval=function(c){return c.eval(c.currentApplication().args[this.index])},ae.prototype.eval=function(c){c.enterLexifiedContext();const n=c.eval(this.expr);return c.exitLexifiedContext(),n},Z.prototype.eval=function(c){for(let n=0;n<this.terms.length;n++)if(c.eval(this.terms[n]))return!0;return!1},le.prototype.eval=function(c){for(let n=0;n<this.factors.length;n++){const o=this.factors[n];if(!c.eval(o))return!1}return!0},F.prototype.eval=function(c){const{inputStream:n}=c,o=n.pos,p=this.getArity(),g=[],_=[];for(;g.length<p;)g.push([]),_.push([]);let D=0,te=o,Q;for(;D<this.maxNumMatches&&c.eval(this.expr);){if(n.pos===te)throw he(this,c._applicationStack);te=n.pos,D++;const ce=c._bindings.splice(c._bindings.length-p,p),Se=c._bindingOffsets.splice(c._bindingOffsets.length-p,p);for(Q=0;Q<ce.length;Q++)g[Q].push(ce[Q]),_[Q].push(Se[Q])}if(D<this.minNumMatches)return!1;let fe=c.posToOffset(o),K=0;if(D>0){const ce=g[p-1],Se=_[p-1],Ge=Se[Se.length-1]+ce[ce.length-1].matchLength;fe=_[0][0],K=Ge-fe}const H=this instanceof Ie;for(Q=0;Q<g.length;Q++)c._bindings.push(new Nt(g[Q],_[Q],K,H)),c._bindingOffsets.push(fe);return!0},se.prototype.eval=function(c){const{inputStream:n}=c,o=n.pos;c.pushFailuresInfo();const p=c.eval(this.expr);return c.popFailuresInfo(),p?(c.processFailure(o,this),!1):(n.pos=o,!0)},ee.prototype.eval=function(c){const{inputStream:n}=c,o=n.pos;return c.eval(this.expr)?(n.pos=o,!0):!1},W.prototype.eval=function(c){const n=c.currentApplication(),o=n?n.args:[],p=this.substituteParams(o),g=c.getCurrentPosInfo();if(g.isActive(p))return p.handleCycle(c);const _=p.toMemoKey(),D=g.memo[_];if(D&&g.shouldUseMemoizedResult(D)){if(c.hasNecessaryInfo(D))return c.useMemoizedResult(c.inputStream.pos,D);delete g.memo[_]}return p.reallyEval(c)},W.prototype.handleCycle=function(c){const n=c.getCurrentPosInfo(),{currentLeftRecursion:o}=n,p=this.toMemoKey();let g=n.memo[p];return o&&o.headApplication.toMemoKey()===p?g.updateInvolvedApplicationMemoKeys():g||(g=n.memoize(p,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),n.startLeftRecursion(this,g)),c.useMemoizedResult(c.inputStream.pos,g)},W.prototype.reallyEval=function(c){const{inputStream:n}=c,o=n.pos,p=c.getCurrentPosInfo(),g=c.grammar.rules[this.ruleName],{body:_}=g,{description:D}=g;c.enterApplication(p,this),D&&c.pushFailuresInfo();const te=n.examinedLength;n.examinedLength=0;let Q=this.evalOnce(_,c);const fe=p.currentLeftRecursion,K=this.toMemoKey(),H=fe&&fe.headApplication.toMemoKey()===K;let ce;c.doNotMemoize?c.doNotMemoize=!1:H?(Q=this.growSeedResult(_,c,o,fe,Q),p.endLeftRecursion(),ce=fe,ce.examinedLength=n.examinedLength-o,ce.rightmostFailureOffset=c._getRightmostFailureOffset(),p.memoize(K,ce)):(!fe||!fe.isInvolved(K))&&(ce=p.memoize(K,{matchLength:n.pos-o,examinedLength:n.examinedLength-o,value:Q,failuresAtRightmostPosition:c.cloneRecordedFailures(),rightmostFailureOffset:c._getRightmostFailureOffset()}));const Se=!!Q;if(D&&(c.popFailuresInfo(),Se||c.processFailure(o,this),ce&&(ce.failuresAtRightmostPosition=c.cloneRecordedFailures())),c.isTracing()&&ce){const Ge=c.getTraceEntry(o,this,Se,Se?[Q]:[]);H&&(e(Ge.terminatingLREntry!=null||!Se),Ge.isHeadOfLeftRecursion=!0),ce.traceEntry=Ge}return n.examinedLength=Math.max(n.examinedLength,te),c.exitApplication(p,Q),Se},W.prototype.evalOnce=function(c,n){const{inputStream:o}=n,p=o.pos;if(n.eval(c)){const g=c.getArity(),_=n._bindings.splice(n._bindings.length-g,g),D=n._bindingOffsets.splice(n._bindingOffsets.length-g,g),te=o.pos-p;return new rt(this.ruleName,_,D,te)}else return!1},W.prototype.growSeedResult=function(c,n,o,p,g){if(!g)return!1;const{inputStream:_}=n;for(;;){if(p.matchLength=_.pos-o,p.value=g,p.failuresAtRightmostPosition=n.cloneRecordedFailures(),n.isTracing()){const D=n.trace[n.trace.length-1];p.traceEntry=new Ee(n.input,o,_.pos,this,!0,[g],[D.clone()])}if(_.pos=o,g=this.evalOnce(c,n),_.pos-o<=p.matchLength)break;n.isTracing()&&n.trace.splice(-2,1)}return n.isTracing()&&p.traceEntry.recordLRTermination(n.trace.pop(),g),_.pos=o+p.matchLength,p.value},we.prototype.eval=function(c){const{inputStream:n}=c,o=n.pos,p=n.next();return p&&this.pattern.test(p)?(c.pushBinding(new Oe(p.length),o),!0):(c.processFailure(o,this),!1)},j.prototype.getArity=t("getArity"),$.getArity=V.getArity=q.prototype.getArity=O.prototype.getArity=B.prototype.getArity=W.prototype.getArity=we.prototype.getArity=function(){return 1},Z.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},le.prototype.getArity=function(){let c=0;for(let n=0;n<this.factors.length;n++)c+=this.factors[n].getArity();return c},F.prototype.getArity=function(){return this.expr.getArity()},se.prototype.getArity=function(){return 0},ee.prototype.getArity=ae.prototype.getArity=function(){return this.expr.getArity()};function Ze(c,n){const o={};if(c.source&&n){const p=c.source.relativeTo(n);o.sourceInterval=[p.startIdx,p.endIdx]}return o}j.prototype.outputRecipe=t("outputRecipe"),$.outputRecipe=function(c,n){return["any",Ze(this,n)]},V.outputRecipe=function(c,n){return["end",Ze(this,n)]},q.prototype.outputRecipe=function(c,n){return["terminal",Ze(this,n),this.obj]},O.prototype.outputRecipe=function(c,n){return["range",Ze(this,n),this.from,this.to]},B.prototype.outputRecipe=function(c,n){return["param",Ze(this,n),this.index]},Z.prototype.outputRecipe=function(c,n){return["alt",Ze(this,n)].concat(this.terms.map(o=>o.outputRecipe(c,n)))},ke.prototype.outputRecipe=function(c,n){return this.terms[0].outputRecipe(c,n)},Te.prototype.outputRecipe=function(c,n){const o=this.terms.slice(0,this.expansionPos),p=this.terms.slice(this.expansionPos+1);return["splice",Ze(this,n),o.map(g=>g.outputRecipe(c,n)),p.map(g=>g.outputRecipe(c,n))]},le.prototype.outputRecipe=function(c,n){return["seq",Ze(this,n)].concat(this.factors.map(o=>o.outputRecipe(c,n)))},ie.prototype.outputRecipe=me.prototype.outputRecipe=Ie.prototype.outputRecipe=se.prototype.outputRecipe=ee.prototype.outputRecipe=ae.prototype.outputRecipe=function(c,n){return[this.constructor.name.toLowerCase(),Ze(this,n),this.expr.outputRecipe(c,n)]},W.prototype.outputRecipe=function(c,n){return["app",Ze(this,n),this.ruleName,this.args.map(o=>o.outputRecipe(c,n))]},we.prototype.outputRecipe=function(c,n){return["unicodeChar",Ze(this,n),this.category]},j.prototype.introduceParams=t("introduceParams"),$.introduceParams=V.introduceParams=q.prototype.introduceParams=O.prototype.introduceParams=B.prototype.introduceParams=we.prototype.introduceParams=function(c){return this},Z.prototype.introduceParams=function(c){return this.terms.forEach((n,o,p)=>{p[o]=n.introduceParams(c)}),this},le.prototype.introduceParams=function(c){return this.factors.forEach((n,o,p)=>{p[o]=n.introduceParams(c)}),this},F.prototype.introduceParams=se.prototype.introduceParams=ee.prototype.introduceParams=ae.prototype.introduceParams=function(c){return this.expr=this.expr.introduceParams(c),this},W.prototype.introduceParams=function(c){const n=c.indexOf(this.ruleName);if(n>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new B(n).withSource(this.source)}else return this.args.forEach((o,p,g)=>{g[p]=o.introduceParams(c)}),this},j.prototype.isNullable=function(c){return this._isNullable(c,Object.create(null))},j.prototype._isNullable=t("_isNullable"),$._isNullable=O.prototype._isNullable=B.prototype._isNullable=me.prototype._isNullable=we.prototype._isNullable=function(c,n){return!1},V._isNullable=function(c,n){return!0},q.prototype._isNullable=function(c,n){return typeof this.obj=="string"?this.obj==="":!1},Z.prototype._isNullable=function(c,n){return this.terms.length===0||this.terms.some(o=>o._isNullable(c,n))},le.prototype._isNullable=function(c,n){return this.factors.every(o=>o._isNullable(c,n))},ie.prototype._isNullable=Ie.prototype._isNullable=se.prototype._isNullable=ee.prototype._isNullable=function(c,n){return!0},ae.prototype._isNullable=function(c,n){return this.expr._isNullable(c,n)},W.prototype._isNullable=function(c,n){const o=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(n,o)){const{body:p}=c.rules[this.ruleName],g=p.substituteParams(this.args);n[o]=!1,n[o]=g._isNullable(c,n)}return n[o]},j.prototype.substituteParams=t("substituteParams"),$.substituteParams=V.substituteParams=q.prototype.substituteParams=O.prototype.substituteParams=we.prototype.substituteParams=function(c){return this},B.prototype.substituteParams=function(c){return c[this.index]},Z.prototype.substituteParams=function(c){return new Z(this.terms.map(n=>n.substituteParams(c)))},le.prototype.substituteParams=function(c){return new le(this.factors.map(n=>n.substituteParams(c)))},F.prototype.substituteParams=se.prototype.substituteParams=ee.prototype.substituteParams=ae.prototype.substituteParams=function(c){return new this.constructor(this.expr.substituteParams(c))},W.prototype.substituteParams=function(c){if(this.args.length===0)return this;{const n=this.args.map(o=>o.substituteParams(c));return new W(this.ruleName,n)}};function gr(c){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(c)}function tt(c){const n=Object.create(null);c.forEach(o=>{n[o]=(n[o]||0)+1}),Object.keys(n).forEach(o=>{if(n[o]<=1)return;let p=1;c.forEach((g,_)=>{g===o&&(c[_]=g+"_"+p++)})})}j.prototype.toArgumentNameList=t("toArgumentNameList"),$.toArgumentNameList=function(c,n){return["any"]},V.toArgumentNameList=function(c,n){return["end"]},q.prototype.toArgumentNameList=function(c,n){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+c]},O.prototype.toArgumentNameList=function(c,n){let o=this.from+"_to_"+this.to;return gr(o)||(o="_"+o),gr(o)||(o="$"+c),[o]},Z.prototype.toArgumentNameList=function(c,n){const o=this.terms.map(_=>_.toArgumentNameList(c,!0)),p=[],g=o[0].length;for(let _=0;_<g;_++){const D=[];for(let Q=0;Q<this.terms.length;Q++)D.push(o[Q][_]);const te=v(D);p.push(te.join("_or_"))}return n||tt(p),p},le.prototype.toArgumentNameList=function(c,n){let o=[];return this.factors.forEach(p=>{const g=p.toArgumentNameList(c,!0);o=o.concat(g),c+=g.length}),n||tt(o),o},F.prototype.toArgumentNameList=function(c,n){const o=this.expr.toArgumentNameList(c,n).map(p=>p[p.length-1]==="s"?p+"es":p+"s");return n||tt(o),o},Ie.prototype.toArgumentNameList=function(c,n){return this.expr.toArgumentNameList(c,n).map(o=>"opt"+o[0].toUpperCase()+o.slice(1))},se.prototype.toArgumentNameList=function(c,n){return[]},ee.prototype.toArgumentNameList=ae.prototype.toArgumentNameList=function(c,n){return this.expr.toArgumentNameList(c,n)},W.prototype.toArgumentNameList=function(c,n){return[this.ruleName]},we.prototype.toArgumentNameList=function(c,n){return["$"+c]},B.prototype.toArgumentNameList=function(c,n){return["param"+this.index]},j.prototype.toDisplayString=t("toDisplayString"),Z.prototype.toDisplayString=le.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},$.toDisplayString=V.toDisplayString=F.prototype.toDisplayString=se.prototype.toDisplayString=ee.prototype.toDisplayString=ae.prototype.toDisplayString=q.prototype.toDisplayString=O.prototype.toDisplayString=B.prototype.toDisplayString=function(){return this.toString()},W.prototype.toDisplayString=function(){if(this.args.length>0){const c=this.args.map(n=>n.toDisplayString());return this.ruleName+"<"+c.join(",")+">"}else return this.ruleName},we.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function Pr(c){return c==="description"||c==="string"||c==="code"}class ot{constructor(n,o,p){if(!Pr(p))throw new Error("invalid Failure type: "+p);this.pexpr=n,this.text=o,this.type=p,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(n){return this.getText()===n.getText()&&this.type===n.type&&(!this.isFluffy()||this.isFluffy()&&n.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const n=new ot(this.pexpr,this.text,this.type);return this.isFluffy()&&n.makeFluffy(),n}toKey(){return this.toString()+"#"+this.type}}j.prototype.toFailure=t("toFailure"),$.toFailure=function(c){return new ot(this,"any object","description")},V.toFailure=function(c){return new ot(this,"end of input","description")},q.prototype.toFailure=function(c){return new ot(this,this.obj,"string")},O.prototype.toFailure=function(c){return new ot(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},se.prototype.toFailure=function(c){const n=this.expr===$?"nothing":"not "+this.expr.toFailure(c);return new ot(this,n,"description")},ee.prototype.toFailure=function(c){return this.expr.toFailure(c)},W.prototype.toFailure=function(c){let{description:n}=c.rules[this.ruleName];return n||(n=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new ot(this,n,"description")},we.prototype.toFailure=function(c){return new ot(this,"a Unicode ["+this.category+"] character","description")},Z.prototype.toFailure=function(c){const o="("+this.terms.map(p=>p.toFailure(c)).join(" or ")+")";return new ot(this,o,"description")},le.prototype.toFailure=function(c){const o="("+this.factors.map(p=>p.toFailure(c)).join(" ")+")";return new ot(this,o,"description")},F.prototype.toFailure=function(c){const n="("+this.expr.toFailure(c)+this.operator+")";return new ot(this,n,"description")},j.prototype.toString=t("toString"),$.toString=function(){return"any"},V.toString=function(){return"end"},q.prototype.toString=function(){return JSON.stringify(this.obj)},O.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},B.prototype.toString=function(){return"$"+this.index},ae.prototype.toString=function(){return"#("+this.expr.toString()+")"},Z.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(c=>c.toString()).join(" | ")+")"},le.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(c=>c.toString()).join(" ")+")"},F.prototype.toString=function(){return this.expr+this.operator},se.prototype.toString=function(){return"~"+this.expr},ee.prototype.toString=function(){return"&"+this.expr},W.prototype.toString=function(){if(this.args.length>0){const c=this.args.map(n=>n.toString());return this.ruleName+"<"+c.join(",")+">"}else return this.ruleName},we.prototype.toString=function(){return"\\p{"+this.category+"}"};class Qt extends j{constructor(n){super(),this.obj=n}_getString(n){const o=n.currentApplication().args[this.obj.index];return e(o instanceof q,"expected a Terminal expression"),o.obj}allowsSkippingPrecedingSpace(){return!0}eval(n){const{inputStream:o}=n,p=o.pos,g=this._getString(n);return o.matchString(g,!0)?(n.pushBinding(new Oe(g.length),p),!0):(n.processFailure(p,this),!1)}getArity(){return 1}substituteParams(n){return new Qt(this.obj.substituteParams(n))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(n){return new ot(this,this.obj.toFailure(n)+" (case-insensitive)","description")}_isNullable(n,o){return this.obj._isNullable(n,o)}}var ki=Object.freeze({__proto__:null,CaseInsensitiveTerminal:Qt,PExpr:j,any:$,end:V,Terminal:q,Range:O,Param:B,Alt:Z,Extend:ke,Splice:Te,Seq:le,Iter:F,Star:ie,Plus:me,Opt:Ie,Not:se,Lookahead:ee,Lex:ae,Apply:W,UnicodeChar:we});let Vn;Zt(c=>{Vn=c.rules.applySyntactic.body});const mn=new W("spaces");class Gn{constructor(n,o,p){this.matcher=n,this.startExpr=o,this.grammar=n.grammar,this.input=n.getInput(),this.inputStream=new qe(this.input),this.memoTable=n._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],p!==void 0&&(this.positionToRecordFailures=p,this.recordedFailures=Object.create(null))}posToOffset(n){return n-this._posStack[this._posStack.length-1]}enterApplication(n,o){this._posStack.push(this.inputStream.pos),this._applicationStack.push(o),this.inLexifiedContextStack.push(!1),n.enter(o),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(n,o){const p=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),n.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),o&&this.pushBinding(o,p)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const n=this.currentApplication();return n?n.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(mn),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(n){return n.allowsSkippingPrecedingSpace()&&n!==mn?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(n,o){this._bindings.push(n),this._bindingOffsets.push(this.posToOffset(o))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(n){for(;this._bindings.length>n;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(n){let o=this.memoTable[n];return o||(o=this.memoTable[n]=new w),o}processFailure(n,o){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,n),this.recordedFailures&&n===this.positionToRecordFailures){const p=this.currentApplication();p&&(o=o.substituteParams(p.args)),this.recordFailure(o.toFailure(this.grammar),!1)}}recordFailure(n,o){const p=n.toKey();this.recordedFailures[p]?this.recordedFailures[p].isFluffy()&&!n.isFluffy()&&this.recordedFailures[p].clearFluffy():this.recordedFailures[p]=o?n.clone():n}recordFailures(n,o){Object.keys(n).forEach(p=>{this.recordFailure(n[p],o)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const n=Object.create(null);return Object.keys(this.recordedFailures).forEach(o=>{n[o]=this.recordedFailures[o].clone()}),n}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(n,o){const p=this.memoTable[n];if(p&&o instanceof W){const g=p.memo[o.toMemoKey()];if(g&&g.traceEntry){const _=g.traceEntry.cloneWithExpr(o);return _.isMemoized=!0,_}}return null}getTraceEntry(n,o,p,g){if(o instanceof W){const _=this.currentApplication(),D=_?_.args:[];o=o.substituteParams(D)}return this.getMemoizedTraceEntry(n,o)||new Ee(this.input,n,this.inputStream.pos,o,p,g,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(n){return this.trace&&!n.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+n.rightmostFailureOffset===this.positionToRecordFailures?!!n.failuresAtRightmostPosition:!0}useMemoizedResult(n,o){this.trace&&this.trace.push(o.traceEntry);const p=this.inputStream.pos+o.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,p),this.recordedFailures&&this.positionToRecordFailures===p&&o.failuresAtRightmostPosition&&this.recordFailures(o.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,o.examinedLength+n),o.value?(this.inputStream.pos+=o.matchLength,this.pushBinding(o.value,n),!0):!1}eval(n){const{inputStream:o}=this,p=this._bindings.length,g=this.userData;let _;this.recordedFailures&&(_=this.recordedFailures,this.recordedFailures=Object.create(null));const D=o.pos,te=this.maybeSkipSpacesBefore(n);let Q;this.trace&&(Q=this.trace,this.trace=[]);const fe=n.eval(this);if(this.trace){const K=this._bindings.slice(p),H=this.getTraceEntry(te,n,fe,K);H.isImplicitSpaces=n===mn,H.isRootNode=n===this.startExpr,Q.push(H),this.trace=Q}return fe?this.recordedFailures&&o.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(K=>{this.recordedFailures[K].makeFluffy()}):(o.pos=D,this.truncateBindings(p),this.userData=g),this.recordedFailures&&this.recordFailures(_,!1),n===Vn&&this.skipSpaces(),fe}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let n;this.recordedFailures&&(n=Object.keys(this.recordedFailures).map(p=>this.recordedFailures[p]));const o=this._bindings[0];return o&&(o.grammar=this.grammar),new f(this.matcher,this.input,this.startExpr,o,this._bindingOffsets[0],this.rightmostFailurePosition,n)}getTrace(){this.trace=[];const n=this.getMatchResult(),o=this.trace[this.trace.length-1];return o.result=n,o}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Ce{constructor(n){this.grammar=n,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(n){return this._input!==n&&this.replaceInputRange(0,this._input.length,n),this}replaceInputRange(n,o,p){const g=this._input,_=this._memoTable;if(n<0||n>g.length||o<0||o>g.length||n>o)throw new Error("Invalid indices: "+n+" and "+o);this._input=g.slice(0,n)+p+g.slice(o),this._input!==g&&_.length>0&&(this._isMemoTableStale=!0);const D=_.slice(o);_.length=n;for(let te=0;te<p.length;te++)_.push(void 0);for(const te of D)_.push(te);for(let te=0;te<n;te++){const Q=_[te];Q&&Q.clearObsoleteEntries(te,n)}return this}match(n,o={incremental:!0}){return this._match(this._getStartExpr(n),{incremental:o.incremental,tracing:!1})}trace(n,o={incremental:!0}){return this._match(this._getStartExpr(n),{incremental:o.incremental,tracing:!0})}_match(n,o={}){const p={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...o};if(!p.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Je(this.grammar);const g=new Gn(this,n,p.positionToRecordFailures);return p.tracing?g.getTrace():g.getMatchResult()}_getStartExpr(n){const o=n||this.grammar.defaultStartRule;if(!o)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const p=this.grammar.parseApplication(o);return new le([p,V])}}const lt=[],vr=(c,n)=>Object.prototype.hasOwnProperty.call(c,n);class gn{constructor(n,o,p){this._node=n,this.source=o,this._baseInterval=p,n.isNonterminal()&&e(o===p),this._childWrappers=[]}_forgetMemoizedResultFor(n){delete this._node[this._semantics.attributeKeys[n]],this.children.forEach(o=>{o._forgetMemoizedResultFor(n)})}child(n){if(!(0<=n&&n<this._node.numChildren()))return;let o=this._childWrappers[n];if(!o){const p=this._node.childAt(n),g=this._node.childOffsets[n],_=this._baseInterval.subInterval(g,p.matchLength),D=p.isNonterminal()?_:this._baseInterval;o=this._childWrappers[n]=this._semantics.wrap(p,_,D)}return o}_children(){for(let n=0;n<this._node.numChildren();n++)this.child(n);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(n){const o=n||[],p=o.map(D=>D._node),g=new Nt(p,[],-1,!1),_=this._semantics.wrap(g,null,null);return _._childWrappers=o,_}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class Ot{constructor(n,o){const p=this;if(this.grammar=n,this.checkedActionDicts=!1,this.Wrapper=class extends(o?o.Wrapper:gn){constructor(g,_,D){super(g,_,D),p.checkActionDictsIfHaventAlready(),this._semantics=p}toString(){return"[semantics wrapper for "+p.grammar.name+"]"}},this.super=o,o){if(!(n.equals(this.super.grammar)||n._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+n.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const g in this.attributes)Object.defineProperty(this.attributeKeys,g,{value:Bt(g)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let n;for(n in this.operations)this.operations[n].checkActionDict(this.grammar);for(n in this.attributes)this.attributes[n].checkActionDict(this.grammar)}toRecipe(n){function o(g){return g.super!==Ot.BuiltInSemantics._getSemantics()}let p=`(function(g) {
`;if(o(this)){p+="  var semantics = "+this.super.toRecipe(!0)+"(g";const g=this.super.grammar;let _=this.grammar;for(;_!==g;)p+=".superGrammar",_=_.superGrammar;p+=`);
`,p+="  return g.extendSemantics(semantics)"}else p+="  return g.createSemantics()";return["Operation","Attribute"].forEach(g=>{const _=this[g.toLowerCase()+"s"];Object.keys(_).forEach(D=>{const{actionDict:te,formals:Q,builtInDefault:fe}=_[D];let K=D;Q.length>0&&(K+="("+Q.join(", ")+")");let H;o(this)&&this.super[g.toLowerCase()+"s"][D]?H="extend"+g:H="add"+g,p+=`
    .`+H+"("+JSON.stringify(K)+", {";const ce=[];Object.keys(te).forEach(Se=>{if(te[Se]!==fe){let Ge=te[Se].toString().trim();Ge=Ge.replace(/^.*\(/,"function("),ce.push(`
      `+JSON.stringify(Se)+": "+Ge)}}),p+=ce.join(",")+`
    })`})}),p+=`;
  })`,n||(p=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+p+`(grammar);
  return semantics;
});
`),p}addOperationOrAttribute(n,o,p){const g=n+"s",_=Lr(o,n),{name:D}=_,{formals:te}=_;this.assertNewName(D,n);const Q=Kr(n,D,H),fe={_default:Q};Object.keys(p).forEach(ce=>{fe[ce]=p[ce]});const K=n==="operation"?new be(D,te,fe,Q):new Qe(D,fe,Q);K.checkActionDict(this.grammar),this[g][D]=K;function H(...ce){const Se=this._semantics[g][D];if(arguments.length!==Se.formals.length)throw new Error("Invalid number of arguments passed to "+D+" "+n+" (expected "+Se.formals.length+", got "+arguments.length+")");const Ge=Object.create(null);for(const[Dr,vn]of Object.entries(ce)){const to=Se.formals[Dr];Ge[to]=vn}const yt=this.args;this.args=Ge;const At=Se.execute(this._semantics,this);return this.args=yt,At}n==="operation"?(this.Wrapper.prototype[D]=H,this.Wrapper.prototype[D].toString=function(){return"["+D+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,D,{get:H,configurable:!0}),Object.defineProperty(this.attributeKeys,D,{value:Bt(D)}))}extendOperationOrAttribute(n,o,p){const g=n+"s";if(Lr(o,"attribute"),!(this.super&&o in this.super[g]))throw new Error("Cannot extend "+n+" '"+o+"': did not inherit an "+n+" with that name");if(vr(this[g],o))throw new Error("Cannot extend "+n+" '"+o+"' again");const _=this[g][o].formals,D=this[g][o].actionDict,te=Object.create(D);Object.keys(p).forEach(Q=>{te[Q]=p[Q]}),this[g][o]=n==="operation"?new be(o,_,te):new Qe(o,te),this[g][o].checkActionDict(this.grammar)}assertNewName(n,o){if(vr(gn.prototype,n))throw new Error("Cannot add "+o+" '"+n+"': that's a reserved name");if(n in this.operations)throw new Error("Cannot add "+o+" '"+n+"': an operation with that name already exists");if(n in this.attributes)throw new Error("Cannot add "+o+" '"+n+"': an attribute with that name already exists")}wrap(n,o,p){const g=p||o;return n instanceof this.Wrapper?n:new this.Wrapper(n,o,g)}}function Lr(c,n){if(!Ot.prototypeGrammar)return e(c.indexOf("(")===-1),{name:c,formals:[]};const o=Ot.prototypeGrammar.match(c,n==="operation"?"OperationSignature":"AttributeSignature");if(o.failed())throw new Error(o.message);return Ot.prototypeGrammarSemantics(o).parse()}function Kr(c,n,o){return function(...p){const _=(this._semantics.operations[n]||this._semantics.attributes[n]).formals.map(D=>this.args[D]);if(!this.isIteration()&&p.length===1)return o.apply(p[0],_);throw wt(this.ctorName,n,c,lt)}}Ot.createSemantics=function(c,n){const o=new Ot(c,n!==void 0?n:Ot.BuiltInSemantics._getSemantics()),p=function(_){if(!(_ instanceof f))throw new TypeError("Semantics expected a MatchResult, but got "+J(_));if(_.failed())throw new TypeError("cannot apply Semantics to "+_.toString());const D=_._cst;if(D.grammar!==c)throw new Error("Cannot use a MatchResult from grammar '"+D.grammar.name+"' with a semantics for '"+c.name+"'");const te=new qe(_.input);return o.wrap(D,te.interval(_._cstOffset,_.input.length))};return p.addOperation=function(g,_){return o.addOperationOrAttribute("operation",g,_),p},p.extendOperation=function(g,_){return o.extendOperationOrAttribute("operation",g,_),p},p.addAttribute=function(g,_){return o.addOperationOrAttribute("attribute",g,_),p},p.extendAttribute=function(g,_){return o.extendOperationOrAttribute("attribute",g,_),p},p._getActionDict=function(g){const _=o.operations[g]||o.attributes[g];if(!_)throw new Error('"'+g+'" is not a valid operation or attribute name in this semantics for "'+c.name+'"');return _.actionDict},p._remove=function(g){let _;return g in o.operations?(_=o.operations[g],delete o.operations[g]):g in o.attributes&&(_=o.attributes[g],delete o.attributes[g]),delete o.Wrapper.prototype[g],_},p.getOperationNames=function(){return Object.keys(o.operations)},p.getAttributeNames=function(){return Object.keys(o.attributes)},p.getGrammar=function(){return o.grammar},p.toRecipe=function(g){return o.toRecipe(g)},p.toString=o.toString.bind(o),p._getSemantics=function(){return o},p};class be{constructor(n,o,p,g){this.name=n,this.formals=o,this.actionDict=p,this.builtInDefault=g}checkActionDict(n){n._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(n,o){try{const{ctorName:p}=o._node;let g=this.actionDict[p];return g?(lt.push([this,p]),g.apply(o,o._children())):o.isNonterminal()&&(g=this.actionDict._nonterminal,g)?(lt.push([this,"_nonterminal",p]),g.apply(o,o._children())):(lt.push([this,"default action",p]),this.actionDict._default.apply(o,o._children()))}finally{lt.pop()}}}be.prototype.typeName="operation";class Qe extends be{constructor(n,o,p){super(n,[],o,p)}execute(n,o){const p=o._node,g=n.attributeKeys[this.name];return vr(p,g)||(p[g]=be.prototype.execute.call(this,n,o)),p[g]}}Qe.prototype.typeName="attribute";const vt=["_iter","_terminal","_nonterminal","_default"];function Xe(c){return Object.keys(c.rules).sort().map(n=>c.rules[n])}const Tt=c=>c.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Xt,kt;class st{constructor(n,o,p,g){if(this.name=n,this.superGrammar=o,this.rules=p,g){if(!(g in p))throw new Error("Invalid start rule: '"+g+"' is not a rule in grammar '"+n+"'");this.defaultStartRule=g}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Ce(this)}isBuiltIn(){return this===st.ProtoBuiltInRules||this===st.BuiltInRules}equals(n){if(this===n)return!0;if(n==null||this.name!==n.name||this.defaultStartRule!==n.defaultStartRule||!(this.superGrammar===n.superGrammar||this.superGrammar.equals(n.superGrammar)))return!1;const o=Xe(this),p=Xe(n);return o.length===p.length&&o.every((g,_)=>g.description===p[_].description&&g.formals.join(",")===p[_].formals.join(",")&&g.body.toString()===p[_].body.toString())}match(n,o){const p=this.matcher();return p.replaceInputRange(0,0,n),p.match(o)}trace(n,o){const p=this.matcher();return p.replaceInputRange(0,0,n),p.trace(o)}createSemantics(){return Ot.createSemantics(this)}extendSemantics(n){return Ot.createSemantics(this,n._getSemantics())}_checkTopDownActionDict(n,o,p){const g=[];for(const _ in p){const D=p[_];if(!vt.includes(_)&&!(_ in this.rules)){g.push(`'${_}' is not a valid semantic action for '${this.name}'`);continue}if(typeof D!="function"){g.push(`'${_}' must be a function in an action dictionary for '${this.name}'`);continue}const Q=D.length,fe=this._topDownActionArity(_);if(Q!==fe){let K;_==="_iter"||_==="_nonterminal"?K=`it should use a rest parameter, e.g. \`${_}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:K=`expected ${fe}, got ${Q}`,g.push(`Semantic action '${_}' has the wrong arity: ${K}`)}}if(g.length>0){const _=g.map(te=>"- "+te),D=new Error([`Found errors in the action dictionary of the '${o}' ${n}:`,..._].join(`
`));throw D.problems=g,D}}_topDownActionArity(n){return vt.includes(n)?0:this.rules[n].body.getArity()}_inheritsFrom(n){let o=this.superGrammar;for(;o;){if(o.equals(n,!0))return!0;o=o.superGrammar}return!1}toRecipe(n=void 0){const o={};this.source&&(o.source=this.source.contents);let p=null;this.defaultStartRule&&(p=this.defaultStartRule);const g={};Object.keys(this.rules).forEach(te=>{const Q=this.rules[te],{body:fe}=Q,K=!this.superGrammar||!this.superGrammar.rules[te];let H;K?H="define":H=fe instanceof ke?"extend":"override";const ce={};if(Q.source&&this.source){const yt=Q.source.relativeTo(this.source);ce.sourceInterval=[yt.startIdx,yt.endIdx]}const Se=K?Q.description:null,Ge=fe.outputRecipe(Q.formals,this.source);g[te]=[H,ce,Se,Q.formals,Ge]});let _="null";n?_=n:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(_=this.superGrammar.toRecipe());const D=[...["grammar",o,this.name].map(JSON.stringify),_,...[p,g].map(JSON.stringify)];return Tt(`[${D.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const n=new b;n.append("{");let o=!0;for(const p in this.rules){const{body:g}=this.rules[p];o?o=!1:n.append(","),n.append(`
`),n.append("  "),this.addSemanticActionTemplate(p,g,n)}return n.append(`
}`),n.contents()}addSemanticActionTemplate(n,o,p){p.append(n),p.append(": function(");const g=this._topDownActionArity(n);p.append(a("_",g).join(", ")),p.append(`) {
`),p.append("  }")}parseApplication(n){let o;if(n.indexOf("<")===-1)o=new W(n);else{const g=Xt.match(n,"Base_application");o=kt(g,{})}if(!(o.ruleName in this.rules))throw De(o.ruleName,this.name);const{formals:p}=this.rules[o.ruleName];if(p.length!==o.args.length){const{source:g}=this.rules[o.ruleName];throw G(o.ruleName,p.length,o.args.length,g)}return o}_setUpMatchState(n){this._matchStateInitializer&&this._matchStateInitializer(n)}}st.ProtoBuiltInRules=new st("ProtoBuiltInRules",void 0,{any:{body:$,formals:[],description:"any character",primitive:!0},end:{body:V,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new Qt(new B(0)),formals:["str"],primitive:!0},lower:{body:new we("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new we("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new we("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new ie(new W("space")),formals:[]},space:{body:new O("\0"," "),formals:[],description:"a space"}}),st.initApplicationParser=function(c,n){Xt=c,kt=n};class Pt{constructor(n){this.name=n}sourceInterval(n,o){return this.source.subInterval(n,o-n)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?st.ProtoBuiltInRules:st.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(n,o){const p=this.ensureSuperGrammar().rules[n];if(!p)throw T(n,this.superGrammar.name,o);return p}installOverriddenOrExtendedRule(n,o,p,g){const _=d(o);if(_.length>0)throw X(n,_,g);const D=this.ensureSuperGrammar().rules[n],te=D.formals,Q=te?te.length:0;if(o.length!==Q)throw G(n,Q,o.length,g);return this.install(n,o,p,D.description,g)}install(n,o,p,g,_,D=!1){return this.rules[n]={body:p.introduceParams(o),formals:o,description:g,source:_,primitive:D},this}withSuperGrammar(n){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=n,this.rules=Object.create(n.rules),n.isBuiltIn()||(this.defaultStartRule=n.defaultStartRule),this}withDefaultStartRule(n){return this.defaultStartRule=n,this}withSource(n){return this.source=new qe(n).interval(0,n.length),this}build(){const n=new st(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);n._matchStateInitializer=n.superGrammar._matchStateInitializer,n.supportsIncrementalParsing=n.superGrammar.supportsIncrementalParsing;const o=[];let p=!1;return Object.keys(n.rules).forEach(g=>{const{body:_}=n.rules[g];try{_.assertChoicesHaveUniformArity(g)}catch(D){o.push(D)}try{_.assertAllApplicationsAreValid(g,n)}catch(D){o.push(D),p=!0}}),p||Object.keys(n.rules).forEach(g=>{const{body:_}=n.rules[g];try{_.assertIteratedExprsAreNotNullable(n,[])}catch(D){o.push(D)}}),o.length>0&&pt(o),this.source&&(n.source=this.source),n}define(n,o,p,g,_,D){if(this.ensureSuperGrammar(),this.superGrammar.rules[n])throw P(n,this.name,this.superGrammar.name,_);if(this.rules[n])throw P(n,this.name,this.name,_);const te=d(o);if(te.length>0)throw X(n,te,_);return this.install(n,o,p,g,_,D)}override(n,o,p,g,_){return this.ensureSuperGrammarRuleForOverriding(n,_),this.installOverriddenOrExtendedRule(n,o,p,_),this}extend(n,o,p,g,_){if(!this.ensureSuperGrammar().rules[n])throw N(n,this.superGrammar.name,_);const te=new ke(this.superGrammar,n,p);return te.source=p.source,this.installOverriddenOrExtendedRule(n,o,te,_),this}}class Lt{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(n){return new Pt(n)}grammar(n,o,p,g,_){const D=new Pt(o);return p&&D.withSuperGrammar(p instanceof st?p:this.fromRecipe(p)),g&&D.withDefaultStartRule(g),n&&n.source&&D.withSource(n.source),this.currentDecl=D,Object.keys(_).forEach(te=>{this.currentRuleName=te;const Q=_[te],fe=Q[0],K=Q[1],H=Q[2],ce=Q[3],Se=this.fromRecipe(Q[4]);let Ge;D.source&&K&&K.sourceInterval&&(Ge=D.source.subInterval(K.sourceInterval[0],K.sourceInterval[1]-K.sourceInterval[0])),D[fe](te,ce,Se,H,Ge)}),this.currentRuleName=this.currentDecl=null,D.build()}terminal(n){return new q(n)}range(n,o){return new O(n,o)}param(n){return new B(n)}alt(...n){let o=[];for(let p of n)p instanceof j||(p=this.fromRecipe(p)),p instanceof Z?o=o.concat(p.terms):o.push(p);return o.length===1?o[0]:new Z(o)}seq(...n){let o=[];for(let p of n)p instanceof j||(p=this.fromRecipe(p)),p instanceof le?o=o.concat(p.factors):o.push(p);return o.length===1?o[0]:new le(o)}star(n){return n instanceof j||(n=this.fromRecipe(n)),new ie(n)}plus(n){return n instanceof j||(n=this.fromRecipe(n)),new me(n)}opt(n){return n instanceof j||(n=this.fromRecipe(n)),new Ie(n)}not(n){return n instanceof j||(n=this.fromRecipe(n)),new se(n)}lookahead(n){return n instanceof j||(n=this.fromRecipe(n)),new ee(n)}lex(n){return n instanceof j||(n=this.fromRecipe(n)),new ae(n)}app(n,o){return o&&o.length>0&&(o=o.map(function(p){return p instanceof j?p:this.fromRecipe(p)},this)),new W(n,o)}splice(n,o){return new Te(this.currentDecl.superGrammar,this.currentRuleName,n.map(p=>this.fromRecipe(p)),o.map(p=>this.fromRecipe(p)))}fromRecipe(n){const o=n[0]==="grammar"?n.slice(1):n.slice(2),p=this[n[0]](...o),g=n[1];return g&&g.sourceInterval&&this.currentDecl&&p.withSource(this.currentDecl.sourceInterval(...g.sourceInterval)),p}}function nt(c){return typeof c=="function"?c.call(new Lt):(typeof c=="string"&&(c=JSON.parse(c)),new Lt().fromRecipe(c))}var St=nt(["grammar",{source:`BuiltInRules {

  alnum  (an alpha-numeric character)
    = letter
    | digit

  letter  (a letter)
    = lower
    | upper
    | unicodeLtmo

  digit  (a digit)
    = "0".."9"

  hexDigit  (a hexadecimal digit)
    = digit
    | "a".."f"
    | "A".."F"

  ListOf<elem, sep>
    = NonemptyListOf<elem, sep>
    | EmptyListOf<elem, sep>

  NonemptyListOf<elem, sep>
    = elem (sep elem)*

  EmptyListOf<elem, sep>
    = /* nothing */

  listOf<elem, sep>
    = nonemptyListOf<elem, sep>
    | emptyListOf<elem, sep>

  nonemptyListOf<elem, sep>
    = elem (sep elem)*

  emptyListOf<elem, sep>
    = /* nothing */

  // Allows a syntactic rule application within a lexical context.
  applySyntactic<app> = app
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);st.BuiltInRules=St,oe(st.BuiltInRules);var Rr=nt(["grammar",{source:`Ohm {

  Grammars
    = Grammar*

  Grammar
    = ident SuperGrammar? "{" Rule* "}"

  SuperGrammar
    = "<:" ident

  Rule
    = ident Formals? ruleDescr? "="  RuleBody  -- define
    | ident Formals?            ":=" OverrideRuleBody  -- override
    | ident Formals?            "+=" RuleBody  -- extend

  RuleBody
    = "|"? NonemptyListOf<TopLevelTerm, "|">

  TopLevelTerm
    = Seq caseName  -- inline
    | Seq

  OverrideRuleBody
    = "|"? NonemptyListOf<OverrideTopLevelTerm, "|">

  OverrideTopLevelTerm
    = "..."  -- superSplice
    | TopLevelTerm

  Formals
    = "<" ListOf<ident, ","> ">"

  Params
    = "<" ListOf<Seq, ","> ">"

  Alt
    = NonemptyListOf<Seq, "|">

  Seq
    = Iter*

  Iter
    = Pred "*"  -- star
    | Pred "+"  -- plus
    | Pred "?"  -- opt
    | Pred

  Pred
    = "~" Lex  -- not
    | "&" Lex  -- lookahead
    | Lex

  Lex
    = "#" Base  -- lex
    | Base

  Base
    = ident Params? ~(ruleDescr? "=" | ":=" | "+=")  -- application
    | oneCharTerminal ".." oneCharTerminal           -- range
    | terminal                                       -- terminal
    | "(" Alt ")"                                    -- paren

  ruleDescr  (a rule description)
    = "(" ruleDescrText ")"

  ruleDescrText
    = (~")" any)*

  caseName
    = "--" (~"\\n" space)* name (~"\\n" space)* ("\\n" | &"}")

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

  ident  (an identifier)
    = name

  terminal
    = "\\"" terminalChar* "\\""

  oneCharTerminal
    = "\\"" terminalChar "\\""

  terminalChar
    = escapeChar
      | ~"\\\\" ~"\\"" ~"\\n" "\\u{0}".."\\u{10FFFF}"

  escapeChar  (an escape sequence)
    = "\\\\\\\\"                                     -- backslash
    | "\\\\\\""                                     -- doubleQuote
    | "\\\\\\'"                                     -- singleQuote
    | "\\\\b"                                      -- backspace
    | "\\\\n"                                      -- lineFeed
    | "\\\\r"                                      -- carriageReturn
    | "\\\\t"                                      -- tab
    | "\\\\u{" hexDigit hexDigit? hexDigit?
             hexDigit? hexDigit? hexDigit? "}"   -- unicodeCodePoint
    | "\\\\u" hexDigit hexDigit hexDigit hexDigit  -- unicodeEscape
    | "\\\\x" hexDigit hexDigit                    -- hexEscape

  space
   += comment

  comment
    = "//" (~"\\n" any)* &("\\n" | end)  -- singleLine
    | "/*" (~"*/" any)* "*/"  -- multiLine

  tokens = token*

  token = caseName | comment | ident | operator | punctuation | terminal | any

  operator = "<:" | "=" | ":=" | "+=" | "*" | "+" | "?" | "~" | "&"

  punctuation = "<" | ">" | "," | "--"
}`},"Ohm",null,"Grammars",{Grammars:["define",{sourceInterval:[9,32]},null,[],["star",{sourceInterval:[24,32]},["app",{sourceInterval:[24,31]},"Grammar",[]]]],Grammar:["define",{sourceInterval:[36,83]},null,[],["seq",{sourceInterval:[50,83]},["app",{sourceInterval:[50,55]},"ident",[]],["opt",{sourceInterval:[56,69]},["app",{sourceInterval:[56,68]},"SuperGrammar",[]]],["terminal",{sourceInterval:[70,73]},"{"],["star",{sourceInterval:[74,79]},["app",{sourceInterval:[74,78]},"Rule",[]]],["terminal",{sourceInterval:[80,83]},"}"]]],SuperGrammar:["define",{sourceInterval:[87,116]},null,[],["seq",{sourceInterval:[106,116]},["terminal",{sourceInterval:[106,110]},"<:"],["app",{sourceInterval:[111,116]},"ident",[]]]],Rule_define:["define",{sourceInterval:[131,181]},null,[],["seq",{sourceInterval:[131,170]},["app",{sourceInterval:[131,136]},"ident",[]],["opt",{sourceInterval:[137,145]},["app",{sourceInterval:[137,144]},"Formals",[]]],["opt",{sourceInterval:[146,156]},["app",{sourceInterval:[146,155]},"ruleDescr",[]]],["terminal",{sourceInterval:[157,160]},"="],["app",{sourceInterval:[162,170]},"RuleBody",[]]]],Rule_override:["define",{sourceInterval:[188,248]},null,[],["seq",{sourceInterval:[188,235]},["app",{sourceInterval:[188,193]},"ident",[]],["opt",{sourceInterval:[194,202]},["app",{sourceInterval:[194,201]},"Formals",[]]],["terminal",{sourceInterval:[214,218]},":="],["app",{sourceInterval:[219,235]},"OverrideRuleBody",[]]]],Rule_extend:["define",{sourceInterval:[255,305]},null,[],["seq",{sourceInterval:[255,294]},["app",{sourceInterval:[255,260]},"ident",[]],["opt",{sourceInterval:[261,269]},["app",{sourceInterval:[261,268]},"Formals",[]]],["terminal",{sourceInterval:[281,285]},"+="],["app",{sourceInterval:[286,294]},"RuleBody",[]]]],Rule:["define",{sourceInterval:[120,305]},null,[],["alt",{sourceInterval:[131,305]},["app",{sourceInterval:[131,170]},"Rule_define",[]],["app",{sourceInterval:[188,235]},"Rule_override",[]],["app",{sourceInterval:[255,294]},"Rule_extend",[]]]],RuleBody:["define",{sourceInterval:[309,362]},null,[],["seq",{sourceInterval:[324,362]},["opt",{sourceInterval:[324,328]},["terminal",{sourceInterval:[324,327]},"|"]],["app",{sourceInterval:[329,362]},"NonemptyListOf",[["app",{sourceInterval:[344,356]},"TopLevelTerm",[]],["terminal",{sourceInterval:[358,361]},"|"]]]]],TopLevelTerm_inline:["define",{sourceInterval:[385,408]},null,[],["seq",{sourceInterval:[385,397]},["app",{sourceInterval:[385,388]},"Seq",[]],["app",{sourceInterval:[389,397]},"caseName",[]]]],TopLevelTerm:["define",{sourceInterval:[366,418]},null,[],["alt",{sourceInterval:[385,418]},["app",{sourceInterval:[385,397]},"TopLevelTerm_inline",[]],["app",{sourceInterval:[415,418]},"Seq",[]]]],OverrideRuleBody:["define",{sourceInterval:[422,491]},null,[],["seq",{sourceInterval:[445,491]},["opt",{sourceInterval:[445,449]},["terminal",{sourceInterval:[445,448]},"|"]],["app",{sourceInterval:[450,491]},"NonemptyListOf",[["app",{sourceInterval:[465,485]},"OverrideTopLevelTerm",[]],["terminal",{sourceInterval:[487,490]},"|"]]]]],OverrideTopLevelTerm_superSplice:["define",{sourceInterval:[522,543]},null,[],["terminal",{sourceInterval:[522,527]},"..."]],OverrideTopLevelTerm:["define",{sourceInterval:[495,562]},null,[],["alt",{sourceInterval:[522,562]},["app",{sourceInterval:[522,527]},"OverrideTopLevelTerm_superSplice",[]],["app",{sourceInterval:[550,562]},"TopLevelTerm",[]]]],Formals:["define",{sourceInterval:[566,606]},null,[],["seq",{sourceInterval:[580,606]},["terminal",{sourceInterval:[580,583]},"<"],["app",{sourceInterval:[584,602]},"ListOf",[["app",{sourceInterval:[591,596]},"ident",[]],["terminal",{sourceInterval:[598,601]},","]]],["terminal",{sourceInterval:[603,606]},">"]]],Params:["define",{sourceInterval:[610,647]},null,[],["seq",{sourceInterval:[623,647]},["terminal",{sourceInterval:[623,626]},"<"],["app",{sourceInterval:[627,643]},"ListOf",[["app",{sourceInterval:[634,637]},"Seq",[]],["terminal",{sourceInterval:[639,642]},","]]],["terminal",{sourceInterval:[644,647]},">"]]],Alt:["define",{sourceInterval:[651,685]},null,[],["app",{sourceInterval:[661,685]},"NonemptyListOf",[["app",{sourceInterval:[676,679]},"Seq",[]],["terminal",{sourceInterval:[681,684]},"|"]]]],Seq:["define",{sourceInterval:[689,704]},null,[],["star",{sourceInterval:[699,704]},["app",{sourceInterval:[699,703]},"Iter",[]]]],Iter_star:["define",{sourceInterval:[719,736]},null,[],["seq",{sourceInterval:[719,727]},["app",{sourceInterval:[719,723]},"Pred",[]],["terminal",{sourceInterval:[724,727]},"*"]]],Iter_plus:["define",{sourceInterval:[743,760]},null,[],["seq",{sourceInterval:[743,751]},["app",{sourceInterval:[743,747]},"Pred",[]],["terminal",{sourceInterval:[748,751]},"+"]]],Iter_opt:["define",{sourceInterval:[767,783]},null,[],["seq",{sourceInterval:[767,775]},["app",{sourceInterval:[767,771]},"Pred",[]],["terminal",{sourceInterval:[772,775]},"?"]]],Iter:["define",{sourceInterval:[708,794]},null,[],["alt",{sourceInterval:[719,794]},["app",{sourceInterval:[719,727]},"Iter_star",[]],["app",{sourceInterval:[743,751]},"Iter_plus",[]],["app",{sourceInterval:[767,775]},"Iter_opt",[]],["app",{sourceInterval:[790,794]},"Pred",[]]]],Pred_not:["define",{sourceInterval:[809,824]},null,[],["seq",{sourceInterval:[809,816]},["terminal",{sourceInterval:[809,812]},"~"],["app",{sourceInterval:[813,816]},"Lex",[]]]],Pred_lookahead:["define",{sourceInterval:[831,852]},null,[],["seq",{sourceInterval:[831,838]},["terminal",{sourceInterval:[831,834]},"&"],["app",{sourceInterval:[835,838]},"Lex",[]]]],Pred:["define",{sourceInterval:[798,862]},null,[],["alt",{sourceInterval:[809,862]},["app",{sourceInterval:[809,816]},"Pred_not",[]],["app",{sourceInterval:[831,838]},"Pred_lookahead",[]],["app",{sourceInterval:[859,862]},"Lex",[]]]],Lex_lex:["define",{sourceInterval:[876,892]},null,[],["seq",{sourceInterval:[876,884]},["terminal",{sourceInterval:[876,879]},"#"],["app",{sourceInterval:[880,884]},"Base",[]]]],Lex:["define",{sourceInterval:[866,903]},null,[],["alt",{sourceInterval:[876,903]},["app",{sourceInterval:[876,884]},"Lex_lex",[]],["app",{sourceInterval:[899,903]},"Base",[]]]],Base_application:["define",{sourceInterval:[918,979]},null,[],["seq",{sourceInterval:[918,963]},["app",{sourceInterval:[918,923]},"ident",[]],["opt",{sourceInterval:[924,931]},["app",{sourceInterval:[924,930]},"Params",[]]],["not",{sourceInterval:[932,963]},["alt",{sourceInterval:[934,962]},["seq",{sourceInterval:[934,948]},["opt",{sourceInterval:[934,944]},["app",{sourceInterval:[934,943]},"ruleDescr",[]]],["terminal",{sourceInterval:[945,948]},"="]],["terminal",{sourceInterval:[951,955]},":="],["terminal",{sourceInterval:[958,962]},"+="]]]]],Base_range:["define",{sourceInterval:[986,1041]},null,[],["seq",{sourceInterval:[986,1022]},["app",{sourceInterval:[986,1001]},"oneCharTerminal",[]],["terminal",{sourceInterval:[1002,1006]},".."],["app",{sourceInterval:[1007,1022]},"oneCharTerminal",[]]]],Base_terminal:["define",{sourceInterval:[1048,1106]},null,[],["app",{sourceInterval:[1048,1056]},"terminal",[]]],Base_paren:["define",{sourceInterval:[1113,1168]},null,[],["seq",{sourceInterval:[1113,1124]},["terminal",{sourceInterval:[1113,1116]},"("],["app",{sourceInterval:[1117,1120]},"Alt",[]],["terminal",{sourceInterval:[1121,1124]},")"]]],Base:["define",{sourceInterval:[907,1168]},null,[],["alt",{sourceInterval:[918,1168]},["app",{sourceInterval:[918,963]},"Base_application",[]],["app",{sourceInterval:[986,1022]},"Base_range",[]],["app",{sourceInterval:[1048,1056]},"Base_terminal",[]],["app",{sourceInterval:[1113,1124]},"Base_paren",[]]]],ruleDescr:["define",{sourceInterval:[1172,1231]},"a rule description",[],["seq",{sourceInterval:[1210,1231]},["terminal",{sourceInterval:[1210,1213]},"("],["app",{sourceInterval:[1214,1227]},"ruleDescrText",[]],["terminal",{sourceInterval:[1228,1231]},")"]]],ruleDescrText:["define",{sourceInterval:[1235,1266]},null,[],["star",{sourceInterval:[1255,1266]},["seq",{sourceInterval:[1256,1264]},["not",{sourceInterval:[1256,1260]},["terminal",{sourceInterval:[1257,1260]},")"]],["app",{sourceInterval:[1261,1264]},"any",[]]]]],caseName:["define",{sourceInterval:[1270,1338]},null,[],["seq",{sourceInterval:[1285,1338]},["terminal",{sourceInterval:[1285,1289]},"--"],["star",{sourceInterval:[1290,1304]},["seq",{sourceInterval:[1291,1302]},["not",{sourceInterval:[1291,1296]},["terminal",{sourceInterval:[1292,1296]},`
`]],["app",{sourceInterval:[1297,1302]},"space",[]]]],["app",{sourceInterval:[1305,1309]},"name",[]],["star",{sourceInterval:[1310,1324]},["seq",{sourceInterval:[1311,1322]},["not",{sourceInterval:[1311,1316]},["terminal",{sourceInterval:[1312,1316]},`
`]],["app",{sourceInterval:[1317,1322]},"space",[]]]],["alt",{sourceInterval:[1326,1337]},["terminal",{sourceInterval:[1326,1330]},`
`],["lookahead",{sourceInterval:[1333,1337]},["terminal",{sourceInterval:[1334,1337]},"}"]]]]],name:["define",{sourceInterval:[1342,1382]},"a name",[],["seq",{sourceInterval:[1363,1382]},["app",{sourceInterval:[1363,1372]},"nameFirst",[]],["star",{sourceInterval:[1373,1382]},["app",{sourceInterval:[1373,1381]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[1386,1418]},null,[],["alt",{sourceInterval:[1402,1418]},["terminal",{sourceInterval:[1402,1405]},"_"],["app",{sourceInterval:[1412,1418]},"letter",[]]]],nameRest:["define",{sourceInterval:[1422,1452]},null,[],["alt",{sourceInterval:[1437,1452]},["terminal",{sourceInterval:[1437,1440]},"_"],["app",{sourceInterval:[1447,1452]},"alnum",[]]]],ident:["define",{sourceInterval:[1456,1489]},"an identifier",[],["app",{sourceInterval:[1485,1489]},"name",[]]],terminal:["define",{sourceInterval:[1493,1531]},null,[],["seq",{sourceInterval:[1508,1531]},["terminal",{sourceInterval:[1508,1512]},'"'],["star",{sourceInterval:[1513,1526]},["app",{sourceInterval:[1513,1525]},"terminalChar",[]]],["terminal",{sourceInterval:[1527,1531]},'"']]],oneCharTerminal:["define",{sourceInterval:[1535,1579]},null,[],["seq",{sourceInterval:[1557,1579]},["terminal",{sourceInterval:[1557,1561]},'"'],["app",{sourceInterval:[1562,1574]},"terminalChar",[]],["terminal",{sourceInterval:[1575,1579]},'"']]],terminalChar:["define",{sourceInterval:[1583,1660]},null,[],["alt",{sourceInterval:[1602,1660]},["app",{sourceInterval:[1602,1612]},"escapeChar",[]],["seq",{sourceInterval:[1621,1660]},["not",{sourceInterval:[1621,1626]},["terminal",{sourceInterval:[1622,1626]},"\\"]],["not",{sourceInterval:[1627,1632]},["terminal",{sourceInterval:[1628,1632]},'"']],["not",{sourceInterval:[1633,1638]},["terminal",{sourceInterval:[1634,1638]},`
`]],["range",{sourceInterval:[1639,1660]},"\0","􏿿"]]]],escapeChar_backslash:["define",{sourceInterval:[1703,1758]},null,[],["terminal",{sourceInterval:[1703,1709]},"\\\\"]],escapeChar_doubleQuote:["define",{sourceInterval:[1765,1822]},null,[],["terminal",{sourceInterval:[1765,1771]},'\\"']],escapeChar_singleQuote:["define",{sourceInterval:[1829,1886]},null,[],["terminal",{sourceInterval:[1829,1835]},"\\'"]],escapeChar_backspace:["define",{sourceInterval:[1893,1948]},null,[],["terminal",{sourceInterval:[1893,1898]},"\\b"]],escapeChar_lineFeed:["define",{sourceInterval:[1955,2009]},null,[],["terminal",{sourceInterval:[1955,1960]},"\\n"]],escapeChar_carriageReturn:["define",{sourceInterval:[2016,2076]},null,[],["terminal",{sourceInterval:[2016,2021]},"\\r"]],escapeChar_tab:["define",{sourceInterval:[2083,2132]},null,[],["terminal",{sourceInterval:[2083,2088]},"\\t"]],escapeChar_unicodeCodePoint:["define",{sourceInterval:[2139,2243]},null,[],["seq",{sourceInterval:[2139,2221]},["terminal",{sourceInterval:[2139,2145]},"\\u{"],["app",{sourceInterval:[2146,2154]},"hexDigit",[]],["opt",{sourceInterval:[2155,2164]},["app",{sourceInterval:[2155,2163]},"hexDigit",[]]],["opt",{sourceInterval:[2165,2174]},["app",{sourceInterval:[2165,2173]},"hexDigit",[]]],["opt",{sourceInterval:[2188,2197]},["app",{sourceInterval:[2188,2196]},"hexDigit",[]]],["opt",{sourceInterval:[2198,2207]},["app",{sourceInterval:[2198,2206]},"hexDigit",[]]],["opt",{sourceInterval:[2208,2217]},["app",{sourceInterval:[2208,2216]},"hexDigit",[]]],["terminal",{sourceInterval:[2218,2221]},"}"]]],escapeChar_unicodeEscape:["define",{sourceInterval:[2250,2309]},null,[],["seq",{sourceInterval:[2250,2291]},["terminal",{sourceInterval:[2250,2255]},"\\u"],["app",{sourceInterval:[2256,2264]},"hexDigit",[]],["app",{sourceInterval:[2265,2273]},"hexDigit",[]],["app",{sourceInterval:[2274,2282]},"hexDigit",[]],["app",{sourceInterval:[2283,2291]},"hexDigit",[]]]],escapeChar_hexEscape:["define",{sourceInterval:[2316,2371]},null,[],["seq",{sourceInterval:[2316,2339]},["terminal",{sourceInterval:[2316,2321]},"\\x"],["app",{sourceInterval:[2322,2330]},"hexDigit",[]],["app",{sourceInterval:[2331,2339]},"hexDigit",[]]]],escapeChar:["define",{sourceInterval:[1664,2371]},"an escape sequence",[],["alt",{sourceInterval:[1703,2371]},["app",{sourceInterval:[1703,1709]},"escapeChar_backslash",[]],["app",{sourceInterval:[1765,1771]},"escapeChar_doubleQuote",[]],["app",{sourceInterval:[1829,1835]},"escapeChar_singleQuote",[]],["app",{sourceInterval:[1893,1898]},"escapeChar_backspace",[]],["app",{sourceInterval:[1955,1960]},"escapeChar_lineFeed",[]],["app",{sourceInterval:[2016,2021]},"escapeChar_carriageReturn",[]],["app",{sourceInterval:[2083,2088]},"escapeChar_tab",[]],["app",{sourceInterval:[2139,2221]},"escapeChar_unicodeCodePoint",[]],["app",{sourceInterval:[2250,2291]},"escapeChar_unicodeEscape",[]],["app",{sourceInterval:[2316,2339]},"escapeChar_hexEscape",[]]]],space:["extend",{sourceInterval:[2375,2394]},null,[],["app",{sourceInterval:[2387,2394]},"comment",[]]],comment_singleLine:["define",{sourceInterval:[2412,2458]},null,[],["seq",{sourceInterval:[2412,2443]},["terminal",{sourceInterval:[2412,2416]},"//"],["star",{sourceInterval:[2417,2429]},["seq",{sourceInterval:[2418,2427]},["not",{sourceInterval:[2418,2423]},["terminal",{sourceInterval:[2419,2423]},`
`]],["app",{sourceInterval:[2424,2427]},"any",[]]]],["lookahead",{sourceInterval:[2430,2443]},["alt",{sourceInterval:[2432,2442]},["terminal",{sourceInterval:[2432,2436]},`
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const dt=Object.create(j.prototype);function $r(c,n){for(const o in c)if(o===n)return!0;return!1}function yr(c,n,o){const p=new Lt;let g,_,D,te=!1;return(o||Rr).createSemantics().addOperation("visit",{Grammars(K){return K.children.map(H=>H.visit())},Grammar(K,H,ce,Se,Ge){const yt=K.visit();g=p.newGrammar(yt),H.child(0)&&H.child(0).visit(),Se.children.map(Dr=>Dr.visit());const At=g.build();if(At.source=this.source.trimmed(),$r(n,yt))throw Ae(At);return n[yt]=At,At},SuperGrammar(K,H){const ce=H.visit();if(ce==="null")g.withSuperGrammar(null);else{if(!n||!$r(n,ce))throw ue(ce,n,H.source);g.withSuperGrammar(n[ce])}},Rule_define(K,H,ce,Se,Ge){_=K.visit(),D=H.children.map(vn=>vn.visit())[0]||[],!g.defaultStartRule&&g.ensureSuperGrammar()!==st.ProtoBuiltInRules&&g.withDefaultStartRule(_);const yt=Ge.visit(),At=ce.children.map(vn=>vn.visit())[0],Dr=this.source.trimmed();return g.define(_,D,yt,At,Dr)},Rule_override(K,H,ce,Se){_=K.visit(),D=H.children.map(At=>At.visit())[0]||[];const Ge=this.source.trimmed();g.ensureSuperGrammarRuleForOverriding(_,Ge),te=!0;const yt=Se.visit();return te=!1,g.override(_,D,yt,null,Ge)},Rule_extend(K,H,ce,Se){_=K.visit(),D=H.children.map(At=>At.visit())[0]||[];const Ge=Se.visit(),yt=this.source.trimmed();return g.extend(_,D,Ge,null,yt)},RuleBody(K,H){return p.alt(...H.visit()).withSource(this.source)},OverrideRuleBody(K,H){const ce=H.visit(),Se=ce.indexOf(dt);if(Se>=0){const Ge=ce.slice(0,Se),yt=ce.slice(Se+1);return yt.forEach(At=>{if(At===dt)throw xe(At)}),new Te(g.superGrammar,_,Ge,yt).withSource(this.source)}else return p.alt(...ce).withSource(this.source)},Formals(K,H,ce){return H.visit()},Params(K,H,ce){return H.visit()},Alt(K){return p.alt(...K.visit()).withSource(this.source)},TopLevelTerm_inline(K,H){const ce=_+"_"+H.visit(),Se=K.visit(),Ge=this.source.trimmed(),yt=!(g.superGrammar&&g.superGrammar.rules[ce]);te&&!yt?g.override(ce,D,Se,null,Ge):g.define(ce,D,Se,null,Ge);const At=D.map(Dr=>p.app(Dr));return p.app(ce,At).withSource(Se.source)},OverrideTopLevelTerm_superSplice(K){return dt},Seq(K){return p.seq(...K.children.map(H=>H.visit())).withSource(this.source)},Iter_star(K,H){return p.star(K.visit()).withSource(this.source)},Iter_plus(K,H){return p.plus(K.visit()).withSource(this.source)},Iter_opt(K,H){return p.opt(K.visit()).withSource(this.source)},Pred_not(K,H){return p.not(H.visit()).withSource(this.source)},Pred_lookahead(K,H){return p.lookahead(H.visit()).withSource(this.source)},Lex_lex(K,H){return p.lex(H.visit()).withSource(this.source)},Base_application(K,H){const ce=H.children.map(Se=>Se.visit())[0]||[];return p.app(K.visit(),ce).withSource(this.source)},Base_range(K,H,ce){return p.range(K.visit(),ce.visit()).withSource(this.source)},Base_terminal(K){return p.terminal(K.visit()).withSource(this.source)},Base_paren(K,H,ce){return H.visit()},ruleDescr(K,H,ce){return H.visit()},ruleDescrText(K){return this.sourceString.trim()},caseName(K,H,ce,Se,Ge){return ce.visit()},name(K,H){return this.sourceString},nameFirst(K){},nameRest(K){},terminal(K,H,ce){return H.children.map(Se=>Se.visit()).join("")},oneCharTerminal(K,H,ce){return H.visit()},escapeChar(K){try{return M(this.sourceString)}catch(H){throw H instanceof RangeError&&H.message.startsWith("Invalid code point ")?Re(K):H}},NonemptyListOf(K,H,ce){return[K.visit()].concat(ce.children.map(Se=>Se.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(c).visit()}var er=nt(["grammar",{source:`OperationsAndAttributes {

  AttributeSignature =
    name

  OperationSignature =
    name Formals?

  Formals
    = "(" ListOf<name, ","> ")"

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Yr(st.BuiltInRules),Sr(er);function Yr(c){const n={empty(){return this.iteration()},nonEmpty(o,p,g){return this.iteration([o].concat(g.children))}};Ot.BuiltInSemantics=Ot.createSemantics(c,null).addOperation("asIteration",{emptyListOf:n.empty,nonemptyListOf:n.nonEmpty,EmptyListOf:n.empty,NonemptyListOf:n.nonEmpty})}function Sr(c){Ot.prototypeGrammarSemantics=c.createSemantics().addOperation("parse",{AttributeSignature(n){return{name:n.parse(),formals:[]}},OperationSignature(n,o){return{name:n.parse(),formals:o.children.map(p=>p.parse())[0]||[]}},Formals(n,o,p){return o.asIteration().children.map(g=>g.parse())},name(n,o){return this.sourceString}}),Ot.prototypeGrammar=c}function Ga(c){let n=0;const o=[0],p=()=>o[o.length-1],g={},_=/( *).*(?:$|\r?\n|\r)/g;let D;for(;(D=_.exec(c))!=null;){const[te,Q]=D;if(te.length===0)break;const fe=Q.length,K=p(),H=n+fe;if(fe>K)o.push(fe),g[H]=1;else if(fe<K){const ce=o.length;for(;p()!==fe;)o.pop();g[H]=-1*(ce-o.length)}n+=te.length}return o.length>1&&(g[n]=1-o.length),g}const fs="an indented block",ms="a dedent",gs=1114112;class Ha extends qe{constructor(n){super(n.input),this.state=n}_indentationAt(n){return this.state.userData[n]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),gs):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),gs):super.nextCodePoint()}}class vs extends j{constructor(n=!0){super(),this.isIndent=n}allowsSkippingPrecedingSpace(){return!0}eval(n){const{inputStream:o}=n,p=n.userData;n.doNotMemoize=!0;const g=o.pos,_=this.isIndent?1:-1;return(p[g]||0)*_>0?(n.userData=Object.create(p),n.userData[g]-=_,n.pushBinding(new Oe(0),g),!0):(n.processFailure(g,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(n,o){}_isNullable(n,o){return!1}assertChoicesHaveUniformArity(n){}assertIteratedExprsAreNotNullable(n){}introduceParams(n){return this}substituteParams(n){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(n){const o=this.isIndent?fs:ms;return new ot(this,o,"description")}}const Ka=new W("indent"),Ya=new W("dedent"),Ja=new Te(St,"any",[Ka,Ya],[]),ys=new Lt().newGrammar("IndentationSensitive").withSuperGrammar(St).define("indent",[],new vs(!0),fs,void 0,!0).define("dedent",[],new vs(!1),ms,void 0,!0).extend("any",[],Ja,"any character",void 0).build();Object.assign(ys,{_matchStateInitializer(c){c.userData=Ga(c.input),c.inputStream=new Ha(c)},supportsIncrementalParsing:!1});const Za="17.1.0";st.initApplicationParser(Rr,yr);const Qa=c=>!!c.constructor&&typeof c.constructor.isBuffer=="function"&&c.constructor.isBuffer(c);function Xa(c,n){const o=Rr.match(c,"Grammars");if(o.failed())throw x(o);return yr(o,n)}function eo(c,n){const o=bs(c,n),p=Object.keys(o);if(p.length===0)throw new Error("Missing grammar definition");if(p.length>1){const _=o[p[1]].source;throw new Error(mr(_.sourceString,_.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return o[p[0]]}function bs(c,n){const o=Object.create(n||{});if(typeof c!="string")if(Qa(c))c=c.toString();else throw new TypeError("Expected string as first argument, got "+J(c));return Xa(c,o),o}return tr.ExperimentalIndentationSensitive=ys,tr._buildGrammar=yr,tr.grammar=eo,tr.grammars=bs,tr.makeRecipe=nt,tr.ohmGrammar=Rr,tr.pexprs=ki,tr.version=Za,tr}var Ti,Us;function qa(){if(Us)return Ti;Us=1;const{makeRecipe:t}=Kc();return Ti=t(["grammar",{source:`PEP508 {
    // Grammar adapted from https://peps.python.org/pep-0508/#complete-grammar
    // (naming retained, just reordered and camelCased)
    File = ListOf<Line, "\\n">
    Line = Req? comment?
    Req = UrlReq | NameReq | RequirementsReq | ConstraintsReq

    NameReq = Name Extras? VersionSpec QuotedMarker?
    UrlReq  = Name Extras? UrlSpec (space QuotedMarker)?
    Extras  = "[" ListOf<identifier, ","> "]"
    Name    = identifier
    identifier    = alnum identifierEnd*
    identifierEnd = alnum -- single
                  | (("-" | "_" | "." )* alnum) -- multi

    // Requirements based on other requirements files (not in PEP 508, but supported by pip)
    RequirementsReq = "-r" filePath
    ConstraintsReq  = "-c" filePath
    filePath        = (~("\\n" | "#") any)+

    UrlSpec      = "@" uriReference
    uriReference = uri | relativeRef
    uri          = scheme ":" hierPart? ("?" query )? ("#" fragment)?
    hierPart     = ("//" authority pathAbempty) -- abempty
                 | pathAbsolute -- absolute
                 | pathRootless -- rootless
    absoluteUri  = scheme ":" hierPart? ("?" query )?
    relativeRef  = relativePart? ("?" query )? ("#" fragment )?
    relativePart = "//" authority pathAbempty -- abempty
                 | pathAbsolute -- absolute
                 | pathNoscheme -- noscheme
    scheme       = letter (alnum | "+" | "-" | ".")*
    authority    = (userinfo "@" )? host (":" port )?
    userinfo     = (unreserved | pctEncoded | subDelims | ":")*
    host         = ipLiteral | ipv4Address | regName
    port         = digit*
    ipLiteral    = "[" (ipv6Address | ipvFuture) "]"
    ipvFuture    = "v" hexdig+ "." (unreserved | subDelims | ":")+
    ipv6Address  = (hexdig | ":" | ".")+ // dumbed down a lot, mostly due to lack of quantifier support in Ohm
    ipv4Address  = decOctet "." decOctet "." decOctet "." decOctet
    nz           = ~"0" digit
    decOctet     = digit -- zeroToNine
                 | nz digit -- tenToNinetyNine
                 | "1" digit digit -- oneHundredToOneNinetyNine
                 | "2" ("0" | "1" | "2" | "3" | "4") digit -- twoHundredToTwoFortyNine
                 | "25" ("0" | "1" | "2" | "3" | "4" | "5") -- twoFiftyToTwoFiftyFive
    regName      = (unreserved | pctEncoded | subDelims)*
    path         = pathAbempty // begins with "/" or is empty
                 | pathAbsolute // begins with "/" but not "//"
                 | pathNoscheme // begins with a non-colon segment
                 | pathRootless // begins with a segment
    pathAbempty  = ("/" segment)*
    pathAbsolute = "/" (segmentNz ("/" segment)* )?
    pathNoscheme = segmentNzNc ("/" segment)*
    pathRootless = segmentNz ("/" segment)*
    segment      = pchar*
    segmentNz    = pchar+
    segmentNzNc  = (unreserved | pctEncoded | subDelims | "@")+ // non-zero-length segment without any colon ":"
    pchar        = unreserved | pctEncoded | subDelims | ":" | "@"
    query        = (pchar | "/" | "?")*
    fragment     = (pchar | "/" | "?")*
    pctEncoded   = "%" hexdig
    unreserved   = alnum | "-" | "." | "_" | "~"
    reserved     = genDelims | subDelims
    genDelims    = ":" | "/" | "?" | "#" | "(" | ")?" | "@"
    subDelims    = "!" | "$" | "&" | "'" | "(" | ")" | "*" | "+" | "," | ";" | "="
    hexdig       = digit | "a" | "A" | "b" | "B" | "c" | "C" | "d" | "D" | "e" | "E" | "f" | "F"

    // Environment markers
    QuotedMarker  = ";" Marker
    Marker        = MarkerOr
    MarkerOr      = MarkerAnd "or" MarkerAnd -- node
                  | MarkerAnd -- leaf
    MarkerAnd     = MarkerExpr "and" MarkerExpr -- node
                  | MarkerExpr -- leaf
    MarkerExpr    = MarkerVar markerOp MarkerVar -- leaf
                  | "(" Marker ")" -- node
    MarkerVar     = envVar | pythonStr
    markerOp      = versionCmp -- versionCmp
                  | "in" -- in
                  | ("not" space+ "in") -- notIn
    pythonStr     = "'" (pythonStrChar | "\\"")* "'"
                  | "\\"" (pythonStrChar | "'")* "\\""
    pythonStrChar = space | alnum | "(" | ")" | "." | "{" | "}" | "-" | "_" | "*" | "#" | ":" | ";" | "," | "/" | "?"
                  | "[" | "]" | "!" | "~" | "\`" | "@" | "$" | "%" | "^" | "&" | "=" | "+" | "|" | "<" | ">"
    envVar        = "python_version" | "python_full_version" | "os_name" | "sys_platform" | "platform_release"
                  | "platform_system" | "platform_version" | "platform_machine" | "platform_python_implementation"
                  | "implementation_name" | "implementation_version" | "extra" // ONLY when defined by a containing layer

    // Version specifiers, defined in PEP 440 (https://peps.python.org/pep-0440/)
    VersionSpec   = "(" VersionMany ")" -- parenthesized
                  | VersionMany -- direct
    VersionMany   = ListOf<VersionOne, ",">
    VersionOne    = versionCmp version
    versionCmp    = "<=" | "<" | "!=" | "==" | ">=" | ">" | "~=" | "==="
    version       = (alnum | "-" | "_" | "." | "*" | "+" | "!" )+

    comment = "#" (~"\\n" any)*

    space := " " | "\\t" // Overriding Ohm's definition of whitespace to kick out newlines and other Unicode whitespace

    // Loose grammar for parsing unfinished requirements - focused on extracting the name, extras, and version spec
    LooseFile         = ListOf<LooseLine, "\\n">
    LooseLine         = LooseReq comment?
    LooseReq          = LooseNonNameReq | LooseNameReq
    LooseNameReq      = Name LooseExtras? LooseVersionSpec LooseQuotedMarker?
    LooseNonNameReq   = (~(~(Name "@") Name) looseAnything) // Non-name req can start with Name only if followed by "@"
    LooseExtras       = "[" ListOf<identifier, ","> ","* "]"?
    LooseQuotedMarker = ";" looseAnything
    LooseVersionSpec  = "(" LooseVersionMany ")"? -- parenthesized
                      | LooseVersionMany -- direct
    LooseVersionMany  = ListOf<LooseVersionOne, ","> ","*
    LooseVersionOne   = looseVersionCmp looseVersion?
    looseVersionCmp   = ("<" | "=" | "!" | ">" | "~")+
    looseVersion      = (alnum | "-" | "_" | "." | "*" | "+" | "!" )+
    looseAnything     = (~("\\n" | "#") any)* // Any non-comment line content
}`},"PEP508",null,"File",{File:["define",{sourceInterval:[148,173]},null,[],["app",{sourceInterval:[155,173]},"ListOf",[["app",{sourceInterval:[162,166]},"Line",[]],["terminal",{sourceInterval:[168,172]},`
`]]]],Line:["define",{sourceInterval:[178,198]},null,[],["seq",{sourceInterval:[185,198]},["opt",{sourceInterval:[185,189]},["app",{sourceInterval:[185,188]},"Req",[]]],["opt",{sourceInterval:[190,198]},["app",{sourceInterval:[190,197]},"comment",[]]]]],Req:["define",{sourceInterval:[203,260]},null,[],["alt",{sourceInterval:[209,260]},["app",{sourceInterval:[209,215]},"UrlReq",[]],["app",{sourceInterval:[218,225]},"NameReq",[]],["app",{sourceInterval:[228,243]},"RequirementsReq",[]],["app",{sourceInterval:[246,260]},"ConstraintsReq",[]]]],NameReq:["define",{sourceInterval:[266,314]},null,[],["seq",{sourceInterval:[276,314]},["app",{sourceInterval:[276,280]},"Name",[]],["opt",{sourceInterval:[281,288]},["app",{sourceInterval:[281,287]},"Extras",[]]],["app",{sourceInterval:[289,300]},"VersionSpec",[]],["opt",{sourceInterval:[301,314]},["app",{sourceInterval:[301,313]},"QuotedMarker",[]]]]],UrlReq:["define",{sourceInterval:[319,371]},null,[],["seq",{sourceInterval:[329,371]},["app",{sourceInterval:[329,333]},"Name",[]],["opt",{sourceInterval:[334,341]},["app",{sourceInterval:[334,340]},"Extras",[]]],["app",{sourceInterval:[342,349]},"UrlSpec",[]],["opt",{sourceInterval:[350,371]},["seq",{sourceInterval:[351,369]},["app",{sourceInterval:[351,356]},"space",[]],["app",{sourceInterval:[357,369]},"QuotedMarker",[]]]]]],Extras:["define",{sourceInterval:[376,417]},null,[],["seq",{sourceInterval:[386,417]},["terminal",{sourceInterval:[386,389]},"["],["app",{sourceInterval:[390,413]},"ListOf",[["app",{sourceInterval:[397,407]},"identifier",[]],["terminal",{sourceInterval:[409,412]},","]]],["terminal",{sourceInterval:[414,417]},"]"]]],Name:["define",{sourceInterval:[422,442]},null,[],["app",{sourceInterval:[432,442]},"identifier",[]]],identifier:["define",{sourceInterval:[447,483]},null,[],["seq",{sourceInterval:[463,483]},["app",{sourceInterval:[463,468]},"alnum",[]],["star",{sourceInterval:[469,483]},["app",{sourceInterval:[469,482]},"identifierEnd",[]]]]],identifierEnd_single:["define",{sourceInterval:[504,519]},null,[],["app",{sourceInterval:[504,509]},"alnum",[]]],identifierEnd_multi:["define",{sourceInterval:[540,576]},null,[],["seq",{sourceInterval:[540,567]},["star",{sourceInterval:[541,560]},["alt",{sourceInterval:[542,557]},["terminal",{sourceInterval:[542,545]},"-"],["terminal",{sourceInterval:[548,551]},"_"],["terminal",{sourceInterval:[554,557]},"."]]],["app",{sourceInterval:[561,566]},"alnum",[]]]],identifierEnd:["define",{sourceInterval:[488,576]},null,[],["alt",{sourceInterval:[504,576]},["app",{sourceInterval:[504,509]},"identifierEnd_single",[]],["app",{sourceInterval:[540,567]},"identifierEnd_multi",[]]]],RequirementsReq:["define",{sourceInterval:[675,706]},null,[],["seq",{sourceInterval:[693,706]},["terminal",{sourceInterval:[693,697]},"-r"],["app",{sourceInterval:[698,706]},"filePath",[]]]],ConstraintsReq:["define",{sourceInterval:[711,742]},null,[],["seq",{sourceInterval:[729,742]},["terminal",{sourceInterval:[729,733]},"-c"],["app",{sourceInterval:[734,742]},"filePath",[]]]],filePath:["define",{sourceInterval:[747,785]},null,[],["plus",{sourceInterval:[765,785]},["seq",{sourceInterval:[766,783]},["not",{sourceInterval:[766,779]},["alt",{sourceInterval:[768,778]},["terminal",{sourceInterval:[768,772]},`
`],["terminal",{sourceInterval:[775,778]},"#"]]],["app",{sourceInterval:[780,783]},"any",[]]]]],UrlSpec:["define",{sourceInterval:[791,822]},null,[],["seq",{sourceInterval:[806,822]},["terminal",{sourceInterval:[806,809]},"@"],["app",{sourceInterval:[810,822]},"uriReference",[]]]],uriReference:["define",{sourceInterval:[827,859]},null,[],["alt",{sourceInterval:[842,859]},["app",{sourceInterval:[842,845]},"uri",[]],["app",{sourceInterval:[848,859]},"relativeRef",[]]]],uri:["define",{sourceInterval:[864,929]},null,[],["seq",{sourceInterval:[879,929]},["app",{sourceInterval:[879,885]},"scheme",[]],["terminal",{sourceInterval:[886,889]},":"],["opt",{sourceInterval:[890,899]},["app",{sourceInterval:[890,898]},"hierPart",[]]],["opt",{sourceInterval:[900,913]},["seq",{sourceInterval:[901,910]},["terminal",{sourceInterval:[901,904]},"?"],["app",{sourceInterval:[905,910]},"query",[]]]],["opt",{sourceInterval:[914,929]},["seq",{sourceInterval:[915,927]},["terminal",{sourceInterval:[915,918]},"#"],["app",{sourceInterval:[919,927]},"fragment",[]]]]]],hierPart_abempty:["define",{sourceInterval:[949,988]},null,[],["seq",{sourceInterval:[949,977]},["terminal",{sourceInterval:[950,954]},"//"],["app",{sourceInterval:[955,964]},"authority",[]],["app",{sourceInterval:[965,976]},"pathAbempty",[]]]],hierPart_absolute:["define",{sourceInterval:[1008,1032]},null,[],["app",{sourceInterval:[1008,1020]},"pathAbsolute",[]]],hierPart_rootless:["define",{sourceInterval:[1052,1076]},null,[],["app",{sourceInterval:[1052,1064]},"pathRootless",[]]],hierPart:["define",{sourceInterval:[934,1076]},null,[],["alt",{sourceInterval:[949,1076]},["app",{sourceInterval:[949,977]},"hierPart_abempty",[]],["app",{sourceInterval:[1008,1020]},"hierPart_absolute",[]],["app",{sourceInterval:[1052,1064]},"hierPart_rootless",[]]]],absoluteUri:["define",{sourceInterval:[1081,1130]},null,[],["seq",{sourceInterval:[1096,1130]},["app",{sourceInterval:[1096,1102]},"scheme",[]],["terminal",{sourceInterval:[1103,1106]},":"],["opt",{sourceInterval:[1107,1116]},["app",{sourceInterval:[1107,1115]},"hierPart",[]]],["opt",{sourceInterval:[1117,1130]},["seq",{sourceInterval:[1118,1127]},["terminal",{sourceInterval:[1118,1121]},"?"],["app",{sourceInterval:[1122,1127]},"query",[]]]]]],relativeRef:["define",{sourceInterval:[1135,1194]},null,[],["seq",{sourceInterval:[1150,1194]},["opt",{sourceInterval:[1150,1163]},["app",{sourceInterval:[1150,1162]},"relativePart",[]]],["opt",{sourceInterval:[1164,1177]},["seq",{sourceInterval:[1165,1174]},["terminal",{sourceInterval:[1165,1168]},"?"],["app",{sourceInterval:[1169,1174]},"query",[]]]],["opt",{sourceInterval:[1178,1194]},["seq",{sourceInterval:[1179,1191]},["terminal",{sourceInterval:[1179,1182]},"#"],["app",{sourceInterval:[1183,1191]},"fragment",[]]]]]],relativePart_abempty:["define",{sourceInterval:[1214,1251]},null,[],["seq",{sourceInterval:[1214,1240]},["terminal",{sourceInterval:[1214,1218]},"//"],["app",{sourceInterval:[1219,1228]},"authority",[]],["app",{sourceInterval:[1229,1240]},"pathAbempty",[]]]],relativePart_absolute:["define",{sourceInterval:[1271,1295]},null,[],["app",{sourceInterval:[1271,1283]},"pathAbsolute",[]]],relativePart_noscheme:["define",{sourceInterval:[1315,1339]},null,[],["app",{sourceInterval:[1315,1327]},"pathNoscheme",[]]],relativePart:["define",{sourceInterval:[1199,1339]},null,[],["alt",{sourceInterval:[1214,1339]},["app",{sourceInterval:[1214,1240]},"relativePart_abempty",[]],["app",{sourceInterval:[1271,1283]},"relativePart_absolute",[]],["app",{sourceInterval:[1315,1327]},"relativePart_noscheme",[]]]],scheme:["define",{sourceInterval:[1344,1392]},null,[],["seq",{sourceInterval:[1359,1392]},["app",{sourceInterval:[1359,1365]},"letter",[]],["star",{sourceInterval:[1366,1392]},["alt",{sourceInterval:[1367,1390]},["app",{sourceInterval:[1367,1372]},"alnum",[]],["terminal",{sourceInterval:[1375,1378]},"+"],["terminal",{sourceInterval:[1381,1384]},"-"],["terminal",{sourceInterval:[1387,1390]},"."]]]]],authority:["define",{sourceInterval:[1397,1446]},null,[],["seq",{sourceInterval:[1412,1446]},["opt",{sourceInterval:[1412,1428]},["seq",{sourceInterval:[1413,1425]},["app",{sourceInterval:[1413,1421]},"userinfo",[]],["terminal",{sourceInterval:[1422,1425]},"@"]]],["app",{sourceInterval:[1429,1433]},"host",[]],["opt",{sourceInterval:[1434,1446]},["seq",{sourceInterval:[1435,1443]},["terminal",{sourceInterval:[1435,1438]},":"],["app",{sourceInterval:[1439,1443]},"port",[]]]]]],userinfo:["define",{sourceInterval:[1451,1510]},null,[],["star",{sourceInterval:[1466,1510]},["alt",{sourceInterval:[1467,1508]},["app",{sourceInterval:[1467,1477]},"unreserved",[]],["app",{sourceInterval:[1480,1490]},"pctEncoded",[]],["app",{sourceInterval:[1493,1502]},"subDelims",[]],["terminal",{sourceInterval:[1505,1508]},":"]]]],host:["define",{sourceInterval:[1515,1563]},null,[],["alt",{sourceInterval:[1530,1563]},["app",{sourceInterval:[1530,1539]},"ipLiteral",[]],["app",{sourceInterval:[1542,1553]},"ipv4Address",[]],["app",{sourceInterval:[1556,1563]},"regName",[]]]],port:["define",{sourceInterval:[1568,1589]},null,[],["star",{sourceInterval:[1583,1589]},["app",{sourceInterval:[1583,1588]},"digit",[]]]],ipLiteral:["define",{sourceInterval:[1594,1642]},null,[],["seq",{sourceInterval:[1609,1642]},["terminal",{sourceInterval:[1609,1612]},"["],["alt",{sourceInterval:[1614,1637]},["app",{sourceInterval:[1614,1625]},"ipv6Address",[]],["app",{sourceInterval:[1628,1637]},"ipvFuture",[]]],["terminal",{sourceInterval:[1639,1642]},"]"]]],ipvFuture:["define",{sourceInterval:[1647,1709]},null,[],["seq",{sourceInterval:[1662,1709]},["terminal",{sourceInterval:[1662,1665]},"v"],["plus",{sourceInterval:[1666,1673]},["app",{sourceInterval:[1666,1672]},"hexdig",[]]],["terminal",{sourceInterval:[1674,1677]},"."],["plus",{sourceInterval:[1678,1709]},["alt",{sourceInterval:[1679,1707]},["app",{sourceInterval:[1679,1689]},"unreserved",[]],["app",{sourceInterval:[1692,1701]},"subDelims",[]],["terminal",{sourceInterval:[1704,1707]},":"]]]]],ipv6Address:["define",{sourceInterval:[1714,1750]},null,[],["plus",{sourceInterval:[1729,1750]},["alt",{sourceInterval:[1730,1748]},["app",{sourceInterval:[1730,1736]},"hexdig",[]],["terminal",{sourceInterval:[1739,1742]},":"],["terminal",{sourceInterval:[1745,1748]},"."]]]],ipv4Address:["define",{sourceInterval:[1825,1887]},null,[],["seq",{sourceInterval:[1840,1887]},["app",{sourceInterval:[1840,1848]},"decOctet",[]],["terminal",{sourceInterval:[1849,1852]},"."],["app",{sourceInterval:[1853,1861]},"decOctet",[]],["terminal",{sourceInterval:[1862,1865]},"."],["app",{sourceInterval:[1866,1874]},"decOctet",[]],["terminal",{sourceInterval:[1875,1878]},"."],["app",{sourceInterval:[1879,1887]},"decOctet",[]]]],nz:["define",{sourceInterval:[1892,1917]},null,[],["seq",{sourceInterval:[1907,1917]},["not",{sourceInterval:[1907,1911]},["terminal",{sourceInterval:[1908,1911]},"0"]],["app",{sourceInterval:[1912,1917]},"digit",[]]]],decOctet_zeroToNine:["define",{sourceInterval:[1937,1956]},null,[],["app",{sourceInterval:[1937,1942]},"digit",[]]],decOctet_tenToNinetyNine:["define",{sourceInterval:[1976,2003]},null,[],["seq",{sourceInterval:[1976,1984]},["app",{sourceInterval:[1976,1978]},"nz",[]],["app",{sourceInterval:[1979,1984]},"digit",[]]]],decOctet_oneHundredToOneNinetyNine:["define",{sourceInterval:[2023,2067]},null,[],["seq",{sourceInterval:[2023,2038]},["terminal",{sourceInterval:[2023,2026]},"1"],["app",{sourceInterval:[2027,2032]},"digit",[]],["app",{sourceInterval:[2033,2038]},"digit",[]]]],decOctet_twoHundredToTwoFortyNine:["define",{sourceInterval:[2087,2154]},null,[],["seq",{sourceInterval:[2087,2126]},["terminal",{sourceInterval:[2087,2090]},"2"],["alt",{sourceInterval:[2092,2119]},["terminal",{sourceInterval:[2092,2095]},"0"],["terminal",{sourceInterval:[2098,2101]},"1"],["terminal",{sourceInterval:[2104,2107]},"2"],["terminal",{sourceInterval:[2110,2113]},"3"],["terminal",{sourceInterval:[2116,2119]},"4"]],["app",{sourceInterval:[2121,2126]},"digit",[]]]],decOctet_twoFiftyToTwoFiftyFive:["define",{sourceInterval:[2174,2240]},null,[],["seq",{sourceInterval:[2174,2214]},["terminal",{sourceInterval:[2174,2178]},"25"],["alt",{sourceInterval:[2180,2213]},["terminal",{sourceInterval:[2180,2183]},"0"],["terminal",{sourceInterval:[2186,2189]},"1"],["terminal",{sourceInterval:[2192,2195]},"2"],["terminal",{sourceInterval:[2198,2201]},"3"],["terminal",{sourceInterval:[2204,2207]},"4"],["terminal",{sourceInterval:[2210,2213]},"5"]]]],decOctet:["define",{sourceInterval:[1922,2240]},null,[],["alt",{sourceInterval:[1937,2240]},["app",{sourceInterval:[1937,1942]},"decOctet_zeroToNine",[]],["app",{sourceInterval:[1976,1984]},"decOctet_tenToNinetyNine",[]],["app",{sourceInterval:[2023,2038]},"decOctet_oneHundredToOneNinetyNine",[]],["app",{sourceInterval:[2087,2126]},"decOctet_twoHundredToTwoFortyNine",[]],["app",{sourceInterval:[2174,2214]},"decOctet_twoFiftyToTwoFiftyFive",[]]]],regName:["define",{sourceInterval:[2245,2298]},null,[],["star",{sourceInterval:[2260,2298]},["alt",{sourceInterval:[2261,2296]},["app",{sourceInterval:[2261,2271]},"unreserved",[]],["app",{sourceInterval:[2274,2284]},"pctEncoded",[]],["app",{sourceInterval:[2287,2296]},"subDelims",[]]]]],path:["define",{sourceInterval:[2303,2523]},null,[],["alt",{sourceInterval:[2318,2523]},["app",{sourceInterval:[2318,2329]},"pathAbempty",[]],["app",{sourceInterval:[2380,2392]},"pathAbsolute",[]],["app",{sourceInterval:[2444,2456]},"pathNoscheme",[]],["app",{sourceInterval:[2511,2523]},"pathRootless",[]]]],pathAbempty:["define",{sourceInterval:[2553,2582]},null,[],["star",{sourceInterval:[2568,2582]},["seq",{sourceInterval:[2569,2580]},["terminal",{sourceInterval:[2569,2572]},"/"],["app",{sourceInterval:[2573,2580]},"segment",[]]]]],pathAbsolute:["define",{sourceInterval:[2587,2634]},null,[],["seq",{sourceInterval:[2602,2634]},["terminal",{sourceInterval:[2602,2605]},"/"],["opt",{sourceInterval:[2606,2634]},["seq",{sourceInterval:[2607,2631]},["app",{sourceInterval:[2607,2616]},"segmentNz",[]],["star",{sourceInterval:[2617,2631]},["seq",{sourceInterval:[2618,2629]},["terminal",{sourceInterval:[2618,2621]},"/"],["app",{sourceInterval:[2622,2629]},"segment",[]]]]]]]],pathNoscheme:["define",{sourceInterval:[2639,2680]},null,[],["seq",{sourceInterval:[2654,2680]},["app",{sourceInterval:[2654,2665]},"segmentNzNc",[]],["star",{sourceInterval:[2666,2680]},["seq",{sourceInterval:[2667,2678]},["terminal",{sourceInterval:[2667,2670]},"/"],["app",{sourceInterval:[2671,2678]},"segment",[]]]]]],pathRootless:["define",{sourceInterval:[2685,2724]},null,[],["seq",{sourceInterval:[2700,2724]},["app",{sourceInterval:[2700,2709]},"segmentNz",[]],["star",{sourceInterval:[2710,2724]},["seq",{sourceInterval:[2711,2722]},["terminal",{sourceInterval:[2711,2714]},"/"],["app",{sourceInterval:[2715,2722]},"segment",[]]]]]],segment:["define",{sourceInterval:[2729,2750]},null,[],["star",{sourceInterval:[2744,2750]},["app",{sourceInterval:[2744,2749]},"pchar",[]]]],segmentNz:["define",{sourceInterval:[2755,2776]},null,[],["plus",{sourceInterval:[2770,2776]},["app",{sourceInterval:[2770,2775]},"pchar",[]]]],segmentNzNc:["define",{sourceInterval:[2781,2840]},null,[],["plus",{sourceInterval:[2796,2840]},["alt",{sourceInterval:[2797,2838]},["app",{sourceInterval:[2797,2807]},"unreserved",[]],["app",{sourceInterval:[2810,2820]},"pctEncoded",[]],["app",{sourceInterval:[2823,2832]},"subDelims",[]],["terminal",{sourceInterval:[2835,2838]},"@"]]]],pchar:["define",{sourceInterval:[2894,2956]},null,[],["alt",{sourceInterval:[2909,2956]},["app",{sourceInterval:[2909,2919]},"unreserved",[]],["app",{sourceInterval:[2922,2932]},"pctEncoded",[]],["app",{sourceInterval:[2935,2944]},"subDelims",[]],["terminal",{sourceInterval:[2947,2950]},":"],["terminal",{sourceInterval:[2953,2956]},"@"]]],query:["define",{sourceInterval:[2961,2996]},null,[],["star",{sourceInterval:[2976,2996]},["alt",{sourceInterval:[2977,2994]},["app",{sourceInterval:[2977,2982]},"pchar",[]],["terminal",{sourceInterval:[2985,2988]},"/"],["terminal",{sourceInterval:[2991,2994]},"?"]]]],fragment:["define",{sourceInterval:[3001,3036]},null,[],["star",{sourceInterval:[3016,3036]},["alt",{sourceInterval:[3017,3034]},["app",{sourceInterval:[3017,3022]},"pchar",[]],["terminal",{sourceInterval:[3025,3028]},"/"],["terminal",{sourceInterval:[3031,3034]},"?"]]]],pctEncoded:["define",{sourceInterval:[3041,3066]},null,[],["seq",{sourceInterval:[3056,3066]},["terminal",{sourceInterval:[3056,3059]},"%"],["app",{sourceInterval:[3060,3066]},"hexdig",[]]]],unreserved:["define",{sourceInterval:[3071,3115]},null,[],["alt",{sourceInterval:[3086,3115]},["app",{sourceInterval:[3086,3091]},"alnum",[]],["terminal",{sourceInterval:[3094,3097]},"-"],["terminal",{sourceInterval:[3100,3103]},"."],["terminal",{sourceInterval:[3106,3109]},"_"],["terminal",{sourceInterval:[3112,3115]},"~"]]],reserved:["define",{sourceInterval:[3120,3156]},null,[],["alt",{sourceInterval:[3135,3156]},["app",{sourceInterval:[3135,3144]},"genDelims",[]],["app",{sourceInterval:[3147,3156]},"subDelims",[]]]],genDelims:["define",{sourceInterval:[3161,3216]},null,[],["alt",{sourceInterval:[3176,3216]},["terminal",{sourceInterval:[3176,3179]},":"],["terminal",{sourceInterval:[3182,3185]},"/"],["terminal",{sourceInterval:[3188,3191]},"?"],["terminal",{sourceInterval:[3194,3197]},"#"],["terminal",{sourceInterval:[3200,3203]},"("],["terminal",{sourceInterval:[3206,3210]},")?"],["terminal",{sourceInterval:[3213,3216]},"@"]]],subDelims:["define",{sourceInterval:[3221,3299]},null,[],["alt",{sourceInterval:[3236,3299]},["terminal",{sourceInterval:[3236,3239]},"!"],["terminal",{sourceInterval:[3242,3245]},"$"],["terminal",{sourceInterval:[3248,3251]},"&"],["terminal",{sourceInterval:[3254,3257]},"'"],["terminal",{sourceInterval:[3260,3263]},"("],["terminal",{sourceInterval:[3266,3269]},")"],["terminal",{sourceInterval:[3272,3275]},"*"],["terminal",{sourceInterval:[3278,3281]},"+"],["terminal",{sourceInterval:[3284,3287]},","],["terminal",{sourceInterval:[3290,3293]},";"],["terminal",{sourceInterval:[3296,3299]},"="]]],hexdig:["define",{sourceInterval:[3304,3396]},null,[],["alt",{sourceInterval:[3319,3396]},["app",{sourceInterval:[3319,3324]},"digit",[]],["terminal",{sourceInterval:[3327,3330]},"a"],["terminal",{sourceInterval:[3333,3336]},"A"],["terminal",{sourceInterval:[3339,3342]},"b"],["terminal",{sourceInterval:[3345,3348]},"B"],["terminal",{sourceInterval:[3351,3354]},"c"],["terminal",{sourceInterval:[3357,3360]},"C"],["terminal",{sourceInterval:[3363,3366]},"d"],["terminal",{sourceInterval:[3369,3372]},"D"],["terminal",{sourceInterval:[3375,3378]},"e"],["terminal",{sourceInterval:[3381,3384]},"E"],["terminal",{sourceInterval:[3387,3390]},"f"],["terminal",{sourceInterval:[3393,3396]},"F"]]],QuotedMarker:["define",{sourceInterval:[3429,3455]},null,[],["seq",{sourceInterval:[3445,3455]},["terminal",{sourceInterval:[3445,3448]},";"],["app",{sourceInterval:[3449,3455]},"Marker",[]]]],Marker:["define",{sourceInterval:[3460,3484]},null,[],["app",{sourceInterval:[3476,3484]},"MarkerOr",[]]],MarkerOr_node:["define",{sourceInterval:[3505,3537]},null,[],["seq",{sourceInterval:[3505,3529]},["app",{sourceInterval:[3505,3514]},"MarkerAnd",[]],["terminal",{sourceInterval:[3515,3519]},"or"],["app",{sourceInterval:[3520,3529]},"MarkerAnd",[]]]],MarkerOr_leaf:["define",{sourceInterval:[3558,3575]},null,[],["app",{sourceInterval:[3558,3567]},"MarkerAnd",[]]],MarkerOr:["define",{sourceInterval:[3489,3575]},null,[],["alt",{sourceInterval:[3505,3575]},["app",{sourceInterval:[3505,3529]},"MarkerOr_node",[]],["app",{sourceInterval:[3558,3567]},"MarkerOr_leaf",[]]]],MarkerAnd_node:["define",{sourceInterval:[3596,3631]},null,[],["seq",{sourceInterval:[3596,3623]},["app",{sourceInterval:[3596,3606]},"MarkerExpr",[]],["terminal",{sourceInterval:[3607,3612]},"and"],["app",{sourceInterval:[3613,3623]},"MarkerExpr",[]]]],MarkerAnd_leaf:["define",{sourceInterval:[3652,3670]},null,[],["app",{sourceInterval:[3652,3662]},"MarkerExpr",[]]],MarkerAnd:["define",{sourceInterval:[3580,3670]},null,[],["alt",{sourceInterval:[3596,3670]},["app",{sourceInterval:[3596,3623]},"MarkerAnd_node",[]],["app",{sourceInterval:[3652,3662]},"MarkerAnd_leaf",[]]]],MarkerExpr_leaf:["define",{sourceInterval:[3691,3727]},null,[],["seq",{sourceInterval:[3691,3719]},["app",{sourceInterval:[3691,3700]},"MarkerVar",[]],["app",{sourceInterval:[3701,3709]},"markerOp",[]],["app",{sourceInterval:[3710,3719]},"MarkerVar",[]]]],MarkerExpr_node:["define",{sourceInterval:[3748,3770]},null,[],["seq",{sourceInterval:[3748,3762]},["terminal",{sourceInterval:[3748,3751]},"("],["app",{sourceInterval:[3752,3758]},"Marker",[]],["terminal",{sourceInterval:[3759,3762]},")"]]],MarkerExpr:["define",{sourceInterval:[3675,3770]},null,[],["alt",{sourceInterval:[3691,3770]},["app",{sourceInterval:[3691,3719]},"MarkerExpr_leaf",[]],["app",{sourceInterval:[3748,3762]},"MarkerExpr_node",[]]]],MarkerVar:["define",{sourceInterval:[3775,3809]},null,[],["alt",{sourceInterval:[3791,3809]},["app",{sourceInterval:[3791,3797]},"envVar",[]],["app",{sourceInterval:[3800,3809]},"pythonStr",[]]]],markerOp_versionCmp:["define",{sourceInterval:[3830,3854]},null,[],["app",{sourceInterval:[3830,3840]},"versionCmp",[]]],markerOp_in:["define",{sourceInterval:[3875,3885]},null,[],["terminal",{sourceInterval:[3875,3879]},"in"]],markerOp_notIn:["define",{sourceInterval:[3906,3934]},null,[],["seq",{sourceInterval:[3906,3925]},["terminal",{sourceInterval:[3907,3912]},"not"],["plus",{sourceInterval:[3913,3919]},["app",{sourceInterval:[3913,3918]},"space",[]]],["terminal",{sourceInterval:[3920,3924]},"in"]]],markerOp:["define",{sourceInterval:[3814,3934]},null,[],["alt",{sourceInterval:[3830,3934]},["app",{sourceInterval:[3830,3840]},"markerOp_versionCmp",[]],["app",{sourceInterval:[3875,3879]},"markerOp_in",[]],["app",{sourceInterval:[3906,3925]},"markerOp_notIn",[]]]],pythonStr:["define",{sourceInterval:[3939,4039]},null,[],["alt",{sourceInterval:[3955,4039]},["seq",{sourceInterval:[3955,3986]},["terminal",{sourceInterval:[3955,3958]},"'"],["star",{sourceInterval:[3959,3982]},["alt",{sourceInterval:[3960,3980]},["app",{sourceInterval:[3960,3973]},"pythonStrChar",[]],["terminal",{sourceInterval:[3976,3980]},'"']]],["terminal",{sourceInterval:[3983,3986]},"'"]],["seq",{sourceInterval:[4007,4039]},["terminal",{sourceInterval:[4007,4011]},'"'],["star",{sourceInterval:[4012,4034]},["alt",{sourceInterval:[4013,4032]},["app",{sourceInterval:[4013,4026]},"pythonStrChar",[]],["terminal",{sourceInterval:[4029,4032]},"'"]]],["terminal",{sourceInterval:[4035,4039]},'"']]]],pythonStrChar:["define",{sourceInterval:[4044,4265]},null,[],["alt",{sourceInterval:[4060,4265]},["app",{sourceInterval:[4060,4065]},"space",[]],["app",{sourceInterval:[4068,4073]},"alnum",[]],["terminal",{sourceInterval:[4076,4079]},"("],["terminal",{sourceInterval:[4082,4085]},")"],["terminal",{sourceInterval:[4088,4091]},"."],["terminal",{sourceInterval:[4094,4097]},"{"],["terminal",{sourceInterval:[4100,4103]},"}"],["terminal",{sourceInterval:[4106,4109]},"-"],["terminal",{sourceInterval:[4112,4115]},"_"],["terminal",{sourceInterval:[4118,4121]},"*"],["terminal",{sourceInterval:[4124,4127]},"#"],["terminal",{sourceInterval:[4130,4133]},":"],["terminal",{sourceInterval:[4136,4139]},";"],["terminal",{sourceInterval:[4142,4145]},","],["terminal",{sourceInterval:[4148,4151]},"/"],["terminal",{sourceInterval:[4154,4157]},"?"],["terminal",{sourceInterval:[4178,4181]},"["],["terminal",{sourceInterval:[4184,4187]},"]"],["terminal",{sourceInterval:[4190,4193]},"!"],["terminal",{sourceInterval:[4196,4199]},"~"],["terminal",{sourceInterval:[4202,4205]},"`"],["terminal",{sourceInterval:[4208,4211]},"@"],["terminal",{sourceInterval:[4214,4217]},"$"],["terminal",{sourceInterval:[4220,4223]},"%"],["terminal",{sourceInterval:[4226,4229]},"^"],["terminal",{sourceInterval:[4232,4235]},"&"],["terminal",{sourceInterval:[4238,4241]},"="],["terminal",{sourceInterval:[4244,4247]},"+"],["terminal",{sourceInterval:[4250,4253]},"|"],["terminal",{sourceInterval:[4256,4259]},"<"],["terminal",{sourceInterval:[4262,4265]},">"]]],envVar:["define",{sourceInterval:[4270,4570]},null,[],["alt",{sourceInterval:[4286,4570]},["terminal",{sourceInterval:[4286,4302]},"python_version"],["terminal",{sourceInterval:[4305,4326]},"python_full_version"],["terminal",{sourceInterval:[4329,4338]},"os_name"],["terminal",{sourceInterval:[4341,4355]},"sys_platform"],["terminal",{sourceInterval:[4358,4376]},"platform_release"],["terminal",{sourceInterval:[4397,4414]},"platform_system"],["terminal",{sourceInterval:[4417,4435]},"platform_version"],["terminal",{sourceInterval:[4438,4456]},"platform_machine"],["terminal",{sourceInterval:[4459,4491]},"platform_python_implementation"],["terminal",{sourceInterval:[4512,4533]},"implementation_name"],["terminal",{sourceInterval:[4536,4560]},"implementation_version"],["terminal",{sourceInterval:[4563,4570]},"extra"]]],VersionSpec_parenthesized:["define",{sourceInterval:[4717,4753]},null,[],["seq",{sourceInterval:[4717,4736]},["terminal",{sourceInterval:[4717,4720]},"("],["app",{sourceInterval:[4721,4732]},"VersionMany",[]],["terminal",{sourceInterval:[4733,4736]},")"]]],VersionSpec_direct:["define",{sourceInterval:[4774,4795]},null,[],["app",{sourceInterval:[4774,4785]},"VersionMany",[]]],VersionSpec:["define",{sourceInterval:[4701,4795]},null,[],["alt",{sourceInterval:[4717,4795]},["app",{sourceInterval:[4717,4736]},"VersionSpec_parenthesized",[]],["app",{sourceInterval:[4774,4785]},"VersionSpec_direct",[]]]],VersionMany:["define",{sourceInterval:[4800,4839]},null,[],["app",{sourceInterval:[4816,4839]},"ListOf",[["app",{sourceInterval:[4823,4833]},"VersionOne",[]],["terminal",{sourceInterval:[4835,4838]},","]]]],VersionOne:["define",{sourceInterval:[4844,4878]},null,[],["seq",{sourceInterval:[4860,4878]},["app",{sourceInterval:[4860,4870]},"versionCmp",[]],["app",{sourceInterval:[4871,4878]},"version",[]]]],versionCmp:["define",{sourceInterval:[4883,4951]},null,[],["alt",{sourceInterval:[4899,4951]},["terminal",{sourceInterval:[4899,4903]},"<="],["terminal",{sourceInterval:[4906,4909]},"<"],["terminal",{sourceInterval:[4912,4916]},"!="],["terminal",{sourceInterval:[4919,4923]},"=="],["terminal",{sourceInterval:[4926,4930]},">="],["terminal",{sourceInterval:[4933,4936]},">"],["terminal",{sourceInterval:[4939,4943]},"~="],["terminal",{sourceInterval:[4946,4951]},"==="]]],version:["define",{sourceInterval:[4956,5017]},null,[],["plus",{sourceInterval:[4972,5017]},["alt",{sourceInterval:[4973,5014]},["app",{sourceInterval:[4973,4978]},"alnum",[]],["terminal",{sourceInterval:[4981,4984]},"-"],["terminal",{sourceInterval:[4987,4990]},"_"],["terminal",{sourceInterval:[4993,4996]},"."],["terminal",{sourceInterval:[4999,5002]},"*"],["terminal",{sourceInterval:[5005,5008]},"+"],["terminal",{sourceInterval:[5011,5014]},"!"]]]],comment:["define",{sourceInterval:[5023,5049]},null,[],["seq",{sourceInterval:[5033,5049]},["terminal",{sourceInterval:[5033,5036]},"#"],["star",{sourceInterval:[5037,5049]},["seq",{sourceInterval:[5038,5047]},["not",{sourceInterval:[5038,5043]},["terminal",{sourceInterval:[5039,5043]},`
`]],["app",{sourceInterval:[5044,5047]},"any",[]]]]]],space:["override",{sourceInterval:[5055,5074]},null,[],["alt",{sourceInterval:[5064,5074]},["terminal",{sourceInterval:[5064,5067]}," "],["terminal",{sourceInterval:[5070,5074]},"	"]]],LooseFile:["define",{sourceInterval:[5291,5334]},null,[],["app",{sourceInterval:[5311,5334]},"ListOf",[["app",{sourceInterval:[5318,5327]},"LooseLine",[]],["terminal",{sourceInterval:[5329,5333]},`
`]]]],LooseLine:["define",{sourceInterval:[5339,5376]},null,[],["seq",{sourceInterval:[5359,5376]},["app",{sourceInterval:[5359,5367]},"LooseReq",[]],["opt",{sourceInterval:[5368,5376]},["app",{sourceInterval:[5368,5375]},"comment",[]]]]],LooseReq:["define",{sourceInterval:[5381,5431]},null,[],["alt",{sourceInterval:[5401,5431]},["app",{sourceInterval:[5401,5416]},"LooseNonNameReq",[]],["app",{sourceInterval:[5419,5431]},"LooseNameReq",[]]]],LooseNameReq:["define",{sourceInterval:[5436,5509]},null,[],["seq",{sourceInterval:[5456,5509]},["app",{sourceInterval:[5456,5460]},"Name",[]],["opt",{sourceInterval:[5461,5473]},["app",{sourceInterval:[5461,5472]},"LooseExtras",[]]],["app",{sourceInterval:[5474,5490]},"LooseVersionSpec",[]],["opt",{sourceInterval:[5491,5509]},["app",{sourceInterval:[5491,5508]},"LooseQuotedMarker",[]]]]],LooseNonNameReq:["define",{sourceInterval:[5514,5569]},null,[],["seq",{sourceInterval:[5534,5569]},["not",{sourceInterval:[5535,5554]},["seq",{sourceInterval:[5537,5553]},["not",{sourceInterval:[5537,5548]},["seq",{sourceInterval:[5539,5547]},["app",{sourceInterval:[5539,5543]},"Name",[]],["terminal",{sourceInterval:[5544,5547]},"@"]]],["app",{sourceInterval:[5549,5553]},"Name",[]]]],["app",{sourceInterval:[5555,5568]},"looseAnything",[]]]],LooseExtras:["define",{sourceInterval:[5634,5691]},null,[],["seq",{sourceInterval:[5654,5691]},["terminal",{sourceInterval:[5654,5657]},"["],["app",{sourceInterval:[5658,5681]},"ListOf",[["app",{sourceInterval:[5665,5675]},"identifier",[]],["terminal",{sourceInterval:[5677,5680]},","]]],["star",{sourceInterval:[5682,5686]},["terminal",{sourceInterval:[5682,5685]},","]],["opt",{sourceInterval:[5687,5691]},["terminal",{sourceInterval:[5687,5690]},"]"]]]],LooseQuotedMarker:["define",{sourceInterval:[5696,5733]},null,[],["seq",{sourceInterval:[5716,5733]},["terminal",{sourceInterval:[5716,5719]},";"],["app",{sourceInterval:[5720,5733]},"looseAnything",[]]]],LooseVersionSpec_parenthesized:["define",{sourceInterval:[5758,5800]},null,[],["seq",{sourceInterval:[5758,5783]},["terminal",{sourceInterval:[5758,5761]},"("],["app",{sourceInterval:[5762,5778]},"LooseVersionMany",[]],["opt",{sourceInterval:[5779,5783]},["terminal",{sourceInterval:[5779,5782]},")"]]]],LooseVersionSpec_direct:["define",{sourceInterval:[5825,5851]},null,[],["app",{sourceInterval:[5825,5841]},"LooseVersionMany",[]]],LooseVersionSpec:["define",{sourceInterval:[5738,5851]},null,[],["alt",{sourceInterval:[5758,5851]},["app",{sourceInterval:[5758,5783]},"LooseVersionSpec_parenthesized",[]],["app",{sourceInterval:[5825,5841]},"LooseVersionSpec_direct",[]]]],LooseVersionMany:["define",{sourceInterval:[5856,5909]},null,[],["seq",{sourceInterval:[5876,5909]},["app",{sourceInterval:[5876,5904]},"ListOf",[["app",{sourceInterval:[5883,5898]},"LooseVersionOne",[]],["terminal",{sourceInterval:[5900,5903]},","]]],["star",{sourceInterval:[5905,5909]},["terminal",{sourceInterval:[5905,5908]},","]]]],LooseVersionOne:["define",{sourceInterval:[5914,5963]},null,[],["seq",{sourceInterval:[5934,5963]},["app",{sourceInterval:[5934,5949]},"looseVersionCmp",[]],["opt",{sourceInterval:[5950,5963]},["app",{sourceInterval:[5950,5962]},"looseVersion",[]]]]],looseVersionCmp:["define",{sourceInterval:[5968,6018]},null,[],["plus",{sourceInterval:[5988,6018]},["alt",{sourceInterval:[5989,6016]},["terminal",{sourceInterval:[5989,5992]},"<"],["terminal",{sourceInterval:[5995,5998]},"="],["terminal",{sourceInterval:[6001,6004]},"!"],["terminal",{sourceInterval:[6007,6010]},">"],["terminal",{sourceInterval:[6013,6016]},"~"]]]],looseVersion:["define",{sourceInterval:[6023,6088]},null,[],["plus",{sourceInterval:[6043,6088]},["alt",{sourceInterval:[6044,6085]},["app",{sourceInterval:[6044,6049]},"alnum",[]],["terminal",{sourceInterval:[6052,6055]},"-"],["terminal",{sourceInterval:[6058,6061]},"_"],["terminal",{sourceInterval:[6064,6067]},"."],["terminal",{sourceInterval:[6070,6073]},"*"],["terminal",{sourceInterval:[6076,6079]},"+"],["terminal",{sourceInterval:[6082,6085]},"!"]]]],looseAnything:["define",{sourceInterval:[6093,6133]},null,[],["star",{sourceInterval:[6113,6133]},["seq",{sourceInterval:[6114,6131]},["not",{sourceInterval:[6114,6127]},["alt",{sourceInterval:[6116,6126]},["terminal",{sourceInterval:[6116,6120]},`
`],["terminal",{sourceInterval:[6123,6126]},"#"]]],["app",{sourceInterval:[6128,6131]},"any",[]]]]]}]),Ti}var An={},js;function Bs(){return js||(js=1,(function(t){var e=An&&An.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequirementsSyntaxError=t.semantics=void 0;const r=e(qa());t.semantics=r.default.createSemantics();function s(a){return{startIdx:a.source.startIdx,endIdx:a.source.endIdx}}function i(a,d){return{data:d,location:s(a)}}t.semantics.addOperation("extract",{File:a=>a.asIteration().children.map(d=>d.extract()).filter(Boolean),Line:(a,d)=>{var v;return((v=a.child(0))===null||v===void 0?void 0:v.extract())||null},NameReq:(a,d,v,C)=>{var L,S;return{type:"ProjectName",name:a.sourceString,versionSpec:v.extract(),extras:(L=d.child(0))===null||L===void 0?void 0:L.extract(),environmentMarkerTree:(S=C.child(0))===null||S===void 0?void 0:S.extract()}},UrlReq:(a,d,v,C,L)=>{var S,b;return{type:"ProjectURL",name:a.sourceString,url:v.extract(),extras:(S=d.child(0))===null||S===void 0?void 0:S.extract(),environmentMarkerTree:(b=L.child(0))===null||b===void 0?void 0:b.extract()}},Extras:(a,d,v)=>d.asIteration().children.map(C=>C.sourceString),RequirementsReq:(a,d)=>({type:"RequirementsFile",path:d.sourceString}),ConstraintsReq:(a,d)=>({type:"ConstraintsFile",path:d.sourceString}),UrlSpec:(a,d)=>d.sourceString,QuotedMarker:(a,d)=>d.extract(),MarkerOr_node:(a,d,v)=>({operator:"or",left:a.extract(),right:v.extract()}),MarkerAnd_node:(a,d,v)=>({operator:"and",left:a.extract(),right:v.extract()}),MarkerExpr_leaf:(a,d,v)=>({left:a.sourceString,operator:d.sourceString,right:v.sourceString}),MarkerExpr_node:(a,d,v)=>d.extract(),VersionSpec_parenthesized:(a,d,v)=>d.extract()||[],VersionMany:a=>{const d=a.asIteration().children;if(d.length!==0)return d.map(v=>v.extract())},VersionOne:(a,d)=>({operator:a.sourceString,version:d.sourceString})}),t.semantics.addOperation("extractLoosely",{LooseFile:a=>a.asIteration().children.map(d=>d.extractLoosely()).filter(Boolean),LooseLine:(a,d)=>{var v;return((v=a.child(0))===null||v===void 0?void 0:v.extractLoosely())||null},LooseNameReq:(a,d,v,C)=>{var L;return{type:"ProjectName",name:a.sourceString,extras:(L=d.child(0))===null||L===void 0?void 0:L.extractLoosely(),versionSpec:v.extractLoosely()}},LooseNonNameReq:a=>null,LooseExtras:(a,d,v,C)=>d.asIteration().children.map(L=>L.sourceString),LooseVersionSpec_parenthesized:(a,d,v)=>d.extractLoosely()||[],LooseVersionMany:(a,d)=>{const v=a.asIteration().children;if(v.length!==0)return v.map(C=>C.extractLoosely())},LooseVersionOne:(a,d)=>{const v={operator:a.sourceString};return d.sourceString&&(v.version=d.sourceString),v}}),t.semantics.addOperation("extractWithLocation",{File:a=>a.asIteration().children.map(d=>d.extractWithLocation()).filter(Boolean),Line:(a,d)=>{var v;return((v=a.child(0))===null||v===void 0?void 0:v.extractWithLocation())||null},NameReq:function(a,d,v,C){var L,S;return i(this,{type:"ProjectName",name:i(a,a.sourceString),versionSpec:v.extractWithLocation(),extras:(L=d.child(0))===null||L===void 0?void 0:L.extractWithLocation(),environmentMarkerTree:(S=C.child(0))===null||S===void 0?void 0:S.extractWithLocation()})},UrlReq:function(a,d,v,C,L){var S,b;return i(this,{type:"ProjectURL",name:i(a,a.sourceString),url:v.extractWithLocation(),extras:(S=d.child(0))===null||S===void 0?void 0:S.extractWithLocation(),environmentMarkerTree:(b=L.child(0))===null||b===void 0?void 0:b.extractWithLocation()})},Extras:function(a,d,v){return d.asIteration().children.map(C=>i(C,C.sourceString))},RequirementsReq:function(a,d){return i(this,{type:"RequirementsFile",path:d.sourceString})},ConstraintsReq:function(a,d){return i(this,{type:"ConstraintsFile",path:d.sourceString})},UrlSpec:function(a,d){return i(d,d.sourceString)},QuotedMarker:(a,d)=>i(d,d.extract()),VersionSpec_parenthesized:(a,d,v)=>d.extractWithLocation()||[],VersionMany:a=>{const d=a.asIteration().children;if(d.length!==0)return d.map(v=>v.extractWithLocation())},VersionOne:function(a,d){return i(this,{operator:i(a,a.sourceString),version:i(d,d.sourceString)})}}),t.semantics.addOperation("extractLooselyWithLocation",{LooseFile:a=>a.asIteration().children.map(d=>d.extractLooselyWithLocation()).filter(Boolean),LooseLine:(a,d)=>{var v;return((v=a.child(0))===null||v===void 0?void 0:v.extractLooselyWithLocation())||null},LooseNameReq:function(a,d,v,C){var L;return i(this,{type:"ProjectName",name:i(a,a.sourceString),extras:(L=d.child(0))===null||L===void 0?void 0:L.extractLooselyWithLocation(),versionSpec:v.extractLooselyWithLocation()})},LooseNonNameReq:a=>null,LooseExtras:function(a,d,v,C){return d.asIteration().children.map(L=>i(L,L.sourceString))},LooseVersionSpec_parenthesized:(a,d,v)=>d.extractLooselyWithLocation()||[],LooseVersionMany:(a,d)=>{const v=a.asIteration().children;if(v.length!==0)return v.map(C=>C.extractLooselyWithLocation())},LooseVersionOne:function(a,d){return i(this,{operator:i(a,a.sourceString),...d.sourceString?{version:i(d,d.sourceString)}:{}})}});class u extends Error{}t.RequirementsSyntaxError=u})(An)),An}var Mr={},Ws;function Yc(){if(Ws)return Mr;Ws=1,Object.defineProperty(Mr,"__esModule",{value:!0}),Mr.VersionOperator=Mr.EnvironmentMarkerVariable=void 0;var t;(function(r){r.PythonVersion="python_version",r.PythonFullVersion="python_full_version",r.OsName="os_name",r.SysPlatform="sys_platform",r.PlatformRelease="platform_release",r.PlatformSystem="platform_system",r.PlatformVersion="platform_version",r.PlatformMachine="platform_machine",r.PlatformPythonImplementation="platform_python_implementation",r.ImplementationName="implementation_name",r.ImplementationVersion="implementation_version",r.Extra="extra"})(t||(Mr.EnvironmentMarkerVariable=t={}));var e;return(function(r){r.CompatibleRelease="~=",r.VersionMatching="==",r.VersionExclusion="!=",r.LessThanOrMatching="<=",r.GreaterThanOrMatching=">=",r.LessThan="<",r.GreaterThan=">",r.ArbitrarilyEqual="==="})(e||(Mr.VersionOperator=e={})),Mr}var Vs;function Jc(){return Vs||(Vs=1,(function(t){var e=br&&br.__createBinding||(Object.create?(function(S,b,A,M){M===void 0&&(M=A);var J=Object.getOwnPropertyDescriptor(b,A);(!J||("get"in J?!b.__esModule:J.writable||J.configurable))&&(J={enumerable:!0,get:function(){return b[A]}}),Object.defineProperty(S,M,J)}):(function(S,b,A,M){M===void 0&&(M=A),S[M]=b[A]})),r=br&&br.__exportStar||function(S,b){for(var A in S)A!=="default"&&!Object.prototype.hasOwnProperty.call(b,A)&&e(b,S,A)},s=br&&br.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(t,"__esModule",{value:!0}),t.parsePipRequirementsLineLoosely=t.parsePipRequirementsFileLoosely=t.parsePipRequirementsLine=t.parsePipRequirementsFile=t.RequirementsSyntaxError=void 0;const i=s(qa()),u=Bs();var a=Bs();Object.defineProperty(t,"RequirementsSyntaxError",{enumerable:!0,get:function(){return a.RequirementsSyntaxError}}),r(Yc(),t);function d(S,b){const A=i.default.match(S,"File");if(A.failed())throw new u.RequirementsSyntaxError(`Failed to parse requirements file. ${A.shortMessage}`);return b?.includeLocations?(0,u.semantics)(A).extractWithLocation():(0,u.semantics)(A).extract()}t.parsePipRequirementsFile=d;function v(S,b){const A=i.default.match(S,"Line");if(A.failed())throw new u.RequirementsSyntaxError(`Failed to parse requirements line. ${A.shortMessage}`);return b?.includeLocations?(0,u.semantics)(A).extractWithLocation():(0,u.semantics)(A).extract()}t.parsePipRequirementsLine=v;function C(S,b){const A=i.default.match(S,"LooseFile");if(A.failed())throw new u.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${A.shortMessage}`);return b?.includeLocations?(0,u.semantics)(A).extractLooselyWithLocation():(0,u.semantics)(A).extractLoosely()}t.parsePipRequirementsFileLoosely=C;function L(S,b){const A=i.default.match(S,"LooseLine");if(A.failed())throw new u.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${A.shortMessage}`);return b?.includeLocations?(0,u.semantics)(A).extractLooselyWithLocation():(0,u.semantics)(A).extractLoosely()}t.parsePipRequirementsLineLoosely=L})(br)),br}var Zc=Jc();function Qc(t){return new Worker("/assets/pyworker-Drd8fvVW.js",{type:"module",name:t?.name})}let Xc=0;class eu{constructor(){this.pendingMessages=new Map}async init(e,r){this.workspace=e,this.vars=r??{},this.worker=new Qc,this.worker.onmessage=s=>{this.handleWorkerMessage(s.data)},this.worker.onerror=s=>{console.error("Python Worker error:",s)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const s=e.payload.prompt||"Input:",i=window.prompt(s);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:i,cancelled:i===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:s,message:i}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",i,s);return}const r=this.pendingMessages.get(e.id);r&&(this.pendingMessages.delete(e.id),e.type==="success"?r.resolve(e.payload):e.type==="error"&&r.reject(new Error(e.payload.message)))}async sendMessage(e,r){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const s=`msg-${Xc++}`,i={id:s,type:e,payload:r};return new Promise((u,a)=>{this.pendingMessages.set(s,{resolve:u,reject:a}),this.worker.postMessage(i)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,r){const s=await this.sendMessage("runFunction",{name:e,args:r});return mt(dr,this.workspace),s}async setGlobal(e,r){await this.sendMessage("setGlobal",{key:e,value:r})}async mountWorkspace(e="/workspace"){const r=await Dt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:r.getHandle(),mountPoint:e})}async installDependencies(){const e=await this.workspace?.getResource("requirements.txt");if(e){const r=(await e.getContents()).replaceAll("\r",""),s=Zc.parsePipRequirementsFile(r).filter(i=>"name"in i).map(i=>i.name);await this.loadPackages(s)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),mt(dr,this.workspace)}async execCode(e){const r=await this.sendMessage("execCode",{code:e});return mt(dr,this.workspace),r}async execScript(e){const r=e.split(".")[0],s=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(r,s)}async execModule(e,r){const s=await this.sendMessage("execModule",{moduleName:e,entryName:r,vars:this.vars});return mt(dr,this.workspace),s}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class tu{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?z``:z`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(e=>{const r=e.dependencies||{},s=Object.entries(r);return s.length===0?z``:z`
                        <wa-tree-item expanded>
                            <span>${e.name}</span>
                            ${s.map(([i,u])=>z`
                                <wa-tree-item>
                                    <span>${i} <small>${u}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const pi=new tu,ru="https://api.github.com";function nu(){const t=Bn.getCurrentApp();if(t?.metadata?.github){const e=t.metadata.github;if(e.owner&&e.repo)return{owner:e.owner,repo:e.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function iu(t=100){try{const e=nu(),r=await fetch(`${ru}/repos/${e.owner}/${e.repo}/releases?per_page=${t}`);return r.ok?await r.json():[]}catch(e){return console.error("Failed to fetch releases:",e),[]}}function su(t,e){const r=t.replace(/^v/,""),s=e.replace(/^v/,""),i=r.split(".").map(Number),u=s.split(".").map(Number);for(let a=0;a<Math.max(i.length,u.length);a++){const d=i[a]||0,v=u[a]||0;if(v>d)return!0;if(v<d)return!1}return!1}ct({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=Bn.getCurrentApp();if(!e){Ke("No app loaded");return}const r=pi.hasPackages(),s=pi.renderTree();let i=null;const u=()=>(i||(i=document.getElementById("global-dialog-container")||document.createElement("div"),i.id||(i.id="global-dialog-container",document.body.appendChild(i))),i),a=()=>{i&&Ar(z``,i)},d=J=>{const de=He.parse(J,{async:!1});return z`${un(de)}`};let v=[];try{v=await iu()}catch{v=[]}const C=e.version==="0.0.0",L=v.length>0?v.findIndex(J=>J.tag_name===e.version):-1,S=L>=0?L:0;let b=S;const A=J=>{if(C)return`**Development Build**

${e.description||""}`;if(v.length===0)return`**Version:** ${e.version}

${e.description||""}`;const de=v[J],_e=de.tag_name===e.version;let j=`**Version:** ${de.tag_name}`;_e&&(j+=" (Current)"),j+=`

`;const $=new Date(de.published_at).toLocaleDateString();return j+=`**Released:** ${$}

`,!_e&&su(e.version,de.tag_name)&&(j+=`⚠️ **Update available**

`),de.body&&(j+=`---

${de.body}`),j},M=J=>{const de=A(J),_e=v.length>0,j=z`
                    <wa-dialog label="${e.name}" open @wa-request-close=${a}>
                        <style>
                            .dialog-content {
                                width: 600px;
                                height: 600px;
                            }
                            
                            wa-tree-item > span small {
                                color: var(--wa-color-neutral-60);
                                font-size: 0.875em;
                                margin-left: 0.5rem;
                            }
                        </style>
                        <div class="dialog-content">
                            <wa-tab-group>
                                <wa-tab slot="nav" panel="release">Release Info</wa-tab>
                                ${r?z`<wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>`:""}
                                
                                <wa-tab-panel name="release">
                                    ${d(de)}
                                </wa-tab-panel>
                                
                                ${r?z`
                                    <wa-tab-panel name="packages">
                                        ${s}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${_e?z`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${J===v.length-1}
                                    @click=${()=>{J<v.length-1&&(b=J+1,M(b))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${J===0}
                                    @click=${()=>{J>0&&(b=J-1,M(b))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" @click=${a}>Close</wa-button>
                        </div>
                    </wa-dialog>
                `;Ar(j,u())};return M(S),new Promise(J=>{const de=()=>{i?.querySelector("wa-dialog[open]")?setTimeout(de,100):J()};de()})}}});ct({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const r=new eu,s=await Dt.getWorkspace();await r.init(s,t),await r.installDependencies(),await r.execScript(e)}}});ct({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});ct({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=Ue.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=Ue.get();return!t||!t.isDirty()}}});ct({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});ct({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{document.documentElement.classList.toggle("wa-dark")||document.documentElement.classList.toggle("wa-light")}},contribution:{target:fn,icon:"circle-half-stroke",label:"Theme Switcher"}});ct({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:fn,icon:"expand",label:"Fullscreen"}});ct({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:t=>{const e={title:"settings.json",data:{async getContents(){const r=await Mt.getAll();return JSON.stringify(r,void 0,2)},getName(){return e.key},saveContents(r){const s=JSON.parse(r);return Mt.setAll(s)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>z`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,Cr.loadEditor(e).then()}},contribution:{target:fn,icon:"gear",label:"Open Settings"}});ct({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>z`
                <k-extensions></k-extensions>`,Cr.loadEditor(e).then()}},contribution:{target:fn,icon:"puzzle-piece",label:"Open Extensions"}});Pe.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?Ke(t):qt(t))}}});const au="@kispace/appspace",ou="0.0.0",lu={"@awesome.me/webawesome":"^3.0.0","@fortawesome/fontawesome-free":"^7.1.0","@fortawesome/fontawesome-svg-core":"^7.1.0","@fortawesome/free-solid-svg-icons":"^7.1.0","@lit-labs/signals":"^0.1.3","@lit/context":"^1.1.6","@mlc-ai/web-llm":"^0.2.79","@xterm/xterm":"^5.5.0",axios:"^1.13.1",dotenv:"^17.2.3","idb-keyval":"^6.2.2",jsonata:"^2.1.0",jszip:"^3.10.1",lit:"^3.2.1",marked:"^16.4.1","monaco-editor":"^0.54.0","pip-requirements-js":"^1.0.2","pubsub-js":"^1.9.5",pyodide:"^0.27.7","signal-polyfill":"^0.2.2","signal-utils":"^0.21.1","toastify-js":"^1.12.0",uuid:"^13.0.0","wasm-git":"^0.0.13"},cu={typescript:"^5.9.3",vite:"^7.1.12"},Zn={name:au,version:ou,dependencies:lu,devDependencies:cu};pi.addPackage({name:Zn.name,version:Zn.version,dependencies:Zn.dependencies,devDependencies:Zn.devDependencies});function Qn(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Pi={exports:{}},Gs;function uu(){return Gs||(Gs=1,(function(t,e){(function(r){t.exports=r()})(function(){return(function(){function r(s,i,u){function a(C,L){if(!i[C]){if(!s[C]){var S=typeof Qn=="function"&&Qn;if(!L&&S)return S(C,!0);if(d)return d(C,!0);var b=new Error("Cannot find module '"+C+"'");throw b.code="MODULE_NOT_FOUND",b}var A=i[C]={exports:{}};s[C][0].call(A.exports,function(M){var J=s[C][1][M];return a(J||M)},A,A.exports,r,s,i,u)}return i[C].exports}for(var d=typeof Qn=="function"&&Qn,v=0;v<u.length;v++)a(u[v]);return a}return r})()({1:[function(r,s,i){const u=r("./utils"),a=(function(){const d=u.stringToArray,v=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],C=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],L=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],S=["Thousand","Million","Billion","Trillion"];function b(T,N){var P=function(ne,X,U){var re="";if(ne<=19)re=(X?" and ":"")+(U?C[ne]:v[ne]);else if(ne<100){const $e=Math.floor(ne/10),Ne=ne%10;re=(X?" and ":"")+L[$e-2],Ne>0?re+="-"+P(Ne,!1,U):U&&(re=re.substring(0,re.length-1)+"ieth")}else if(ne<1e3){const $e=Math.floor(ne/100),Ne=ne%100;re=(X?", ":"")+v[$e]+" Hundred",Ne>0?re+=P(Ne,!0,U):U&&(re+="th")}else{var ve=Math.floor(Math.log10(ne)/3);ve>S.length&&(ve=S.length);const $e=Math.pow(10,ve*3),Ne=Math.floor(ne/$e),ge=ne-Ne*$e;re=(X?", ":"")+P(Ne,!1,!1)+" "+S[ve-1],ge>0?re+=P(ge,!0,U):U&&(re+="th")}return re},G=P(T,!1,N);return G}const A={};v.forEach(function(T,N){A[T.toLowerCase()]=N}),C.forEach(function(T,N){A[T.toLowerCase()]=N}),L.forEach(function(T,N){const P=T.toLowerCase();A[P]=(N+2)*10,A[P.substring(0,T.length-1)+"ieth"]=A[P]}),A.hundredth=100,S.forEach(function(T,N){const P=T.toLowerCase(),G=Math.pow(10,(N+1)*3);A[P]=G,A[P+"th"]=G});function M(T){const P=T.split(/,\s|\sand\s|[\s\\-]/).map(X=>A[X]);let G=[0];return P.forEach(X=>{if(X<100){let U=G.pop();U>=1e3&&(G.push(U),U=0),G.push(U+X)}else G.push(G.pop()*X)}),G.reduce((X,U)=>X+U,0)}const J=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],de={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function _e(T){for(var N=0;N<J.length;N++){const P=J[N];if(T>=P[0])return P[1]+_e(T-P[0])}return""}function j(T){for(var N=0,P=1,G=T.length-1;G>=0;G--){const ne=T[G],X=de[ne];X<P?N-=X:(P=X,N+=X)}return N}function $(T,N){for(var P=[],G=N.charCodeAt(0);T>0;)P.unshift(String.fromCharCode((T-1)%26+G)),T=Math.floor((T-1)/26);return P.join("")}function V(T,N){for(var P=N.charCodeAt(0),G=0,ne=0;ne<T.length;ne++)G+=(T.charCodeAt(T.length-ne-1)-P+1)*Math.pow(26,ne);return G}function q(T,N){if(typeof T>"u")return;T=Math.floor(T);const P=Te(N);return Z(T,P)}const O={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},B={UPPER:"upper",LOWER:"lower",TITLE:"title"};function Z(T,N){let P;const G=T<0;switch(T=Math.abs(T),N.primary){case O.LETTERS:P=$(T,N.case===B.UPPER?"A":"a");break;case O.ROMAN:P=_e(T),N.case===B.UPPER&&(P=P.toUpperCase());break;case O.WORDS:P=b(T,N.ordinal),N.case===B.UPPER?P=P.toUpperCase():N.case===B.LOWER&&(P=P.toLowerCase());break;case O.DECIMAL:P=""+T;var ne=N.mandatoryDigits-P.length;if(ne>0){var X=new Array(ne+1).join("0");P=X+P}if(N.zeroCode!==48&&(P=d(P).map($e=>String.fromCodePoint($e.codePointAt(0)+N.zeroCode-48)).join("")),N.regular){const $e=Math.floor((P.length-1)/N.groupingSeparators.position);for(let Ne=$e;Ne>0;Ne--){const ge=P.length-Ne*N.groupingSeparators.position;P=P.substr(0,ge)+N.groupingSeparators.character+P.substr(ge)}}else N.groupingSeparators.reverse().forEach($e=>{const Ne=P.length-$e.position;P=P.substr(0,Ne)+$e.character+P.substr(Ne)});if(N.ordinal){var U={1:"st",2:"nd",3:"rd"},re=P[P.length-1],ve=U[re];(!ve||P.length>1&&P[P.length-2]==="1")&&(ve="th"),P=P+ve}break;case O.SEQUENCE:throw{code:"D3130",value:N.token}}return G&&(P="-"+P),P}const ke=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function Te(T){const N={type:"integer",primary:O.DECIMAL,case:B.LOWER,ordinal:!1};let P,G;const ne=T.lastIndexOf(";");switch(ne===-1?P=T:(P=T.substring(0,ne),G=T.substring(ne+1),G[0]==="o"&&(N.ordinal=!0)),P){case"A":N.case=B.UPPER;case"a":N.primary=O.LETTERS;break;case"I":N.case=B.UPPER;case"i":N.primary=O.ROMAN;break;case"W":N.case=B.UPPER,N.primary=O.WORDS;break;case"Ww":N.case=B.TITLE,N.primary=O.WORDS;break;case"w":N.primary=O.WORDS;break;default:{let X=null,U=0,re=0,ve=[],$e=0;if(d(P).map(ge=>ge.codePointAt(0)).reverse().forEach(ge=>{let xe=!1;for(let Re=0;Re<ke.length;Re++){const he=ke[Re];if(ge>=he&&ge<=he+9){if(xe=!0,U++,$e++,X===null)X=he;else if(he!==X)throw{code:"D3131"};break}}xe||(ge===35?($e++,re++):ve.push({position:$e,character:String.fromCodePoint(ge)}))}),U>0){N.primary=O.DECIMAL,N.zeroCode=X,N.mandatoryDigits=U,N.optionalDigits=re;const xe=function(Re){if(Re.length===0)return 0;const he=Re[0].character;for(let pt=1;pt<Re.length;pt++)if(Re[pt].character!==he)return 0;const ut=Re.map(pt=>pt.position),jt=function(pt,xt){return xt===0?pt:jt(xt,pt%xt)},wt=ut.reduce(jt);for(let pt=1;pt<=ut.length;pt++)if(ut.indexOf(pt*wt)===-1)return 0;return wt}(ve);xe>0?(N.regular=!0,N.groupingSeparators={position:xe,character:ve[0].character}):(N.regular=!1,N.groupingSeparators=ve)}else N.primary=O.SEQUENCE,N.token=P}}return N}const le={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function F(T){var N=[];const P={type:"datetime",parts:N},G=function(xe,Re){if(Re>xe){let he=T.substring(xe,Re);he=he.split("]]").join("]"),N.push({type:"literal",value:he})}};for(var ne=0,X=0;X<T.length;){if(T.charAt(X)==="["){if(T.charAt(X+1)==="["){G(ne,X),N.push({type:"literal",value:"["}),X+=2,ne=X;continue}if(G(ne,X),ne=X,X=T.indexOf("]",ne),X===-1)throw{code:"D3135"};let xe=T.substring(ne+1,X);xe=xe.split(/\s+/).join("");var U={type:"marker",component:xe.charAt(0)},re=xe.lastIndexOf(","),ve;if(re!==-1){const Re=xe.substring(re+1),he=Re.indexOf("-");let ut,jt;const wt=function(xt){if(!(typeof xt>"u"||xt==="*"))return parseInt(xt)};he===-1?ut=Re:(ut=Re.substring(0,he),jt=Re.substring(he+1));const pt={min:wt(ut),max:wt(jt)};U.width=pt,ve=xe.substring(1,re)}else ve=xe.substring(1);if(ve.length===1)U.presentation1=ve;else if(ve.length>1){var $e=ve.charAt(ve.length-1);"atco".indexOf($e)!==-1?(U.presentation2=$e,$e==="o"&&(U.ordinal=!0),U.presentation1=ve.substring(0,ve.length-1)):U.presentation1=ve}else U.presentation1=le[U.component];if(typeof U.presentation1>"u")throw{code:"D3132",value:U.component};if(U.presentation1[0]==="n")U.names=B.LOWER;else if(U.presentation1[0]==="N")U.presentation1[1]==="n"?U.names=B.TITLE:U.names=B.UPPER;else if("YMDdFWwXxHhmsf".indexOf(U.component)!==-1){var Ne=U.presentation1;if(U.presentation2&&(Ne+=";"+U.presentation2),U.integerFormat=Te(Ne),U.width&&U.width.min!==void 0&&U.integerFormat.mandatoryDigits<U.width.min&&(U.integerFormat.mandatoryDigits=U.width.min),U.component==="Y")if(U.n=-1,U.width&&U.width.max!==void 0)U.n=U.width.max,U.integerFormat.mandatoryDigits=U.n;else{var ge=U.integerFormat.mandatoryDigits+U.integerFormat.optionalDigits;ge>=2&&(U.n=ge)}const Re=N[N.length-1];Re&&Re.integerFormat&&(Re.integerFormat.parseWidth=Re.integerFormat.mandatoryDigits)}(U.component==="Z"||U.component==="z")&&(U.integerFormat=Te(U.presentation1)),N.push(U),ne=X+1}X++}return G(ne,X),P}const ie=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],me=["January","February","March","April","May","June","July","August","September","October","November","December"],Ie=1e3*60*60*24,se=function(T){const N=Date.UTC(T.year,T.month);var P=new Date(N).getUTCDay();return P===0&&(P=7),P>4?N+(8-P)*Ie:N-(P-1)*Ie},ee=function(T,N){return{year:T,month:N,nextMonth:function(){return N===11?ee(T+1,0):ee(T,N+1)},previousMonth:function(){return N===0?ee(T-1,11):ee(T,N-1)},nextYear:function(){return ee(T+1,N)},previousYear:function(){return ee(T-1,N)}}},ae=function(T,N){return(N-T)/(Ie*7)+1},W=(T,N)=>{let P;switch(N){case"Y":P=T.getUTCFullYear();break;case"M":P=T.getUTCMonth()+1;break;case"D":P=T.getUTCDate();break;case"d":{const G=Date.UTC(T.getUTCFullYear(),T.getUTCMonth(),T.getUTCDate()),ne=Date.UTC(T.getUTCFullYear(),0);P=(G-ne)/Ie+1;break}case"F":P=T.getUTCDay(),P===0&&(P=7);break;case"W":{const G=ee(T.getUTCFullYear(),0),ne=se(G),X=Date.UTC(G.year,T.getUTCMonth(),T.getUTCDate());let U=ae(ne,X);if(U>52){const re=se(G.nextYear());X>=re&&(U=1)}else if(U<1){const re=se(G.previousYear());U=ae(re,X)}P=Math.floor(U);break}case"w":{const G=ee(T.getUTCFullYear(),T.getUTCMonth()),ne=se(G),X=Date.UTC(G.year,G.month,T.getUTCDate());let U=ae(ne,X);if(U>4){const re=se(G.nextMonth());X>=re&&(U=1)}else if(U<1){const re=se(G.previousMonth());U=ae(re,X)}P=Math.floor(U);break}case"X":{const G=ee(T.getUTCFullYear(),0),ne=se(G),X=se(G.nextYear()),U=T.getTime();U<ne?P=G.year-1:U>=X?P=G.year+1:P=G.year;break}case"x":{const G=ee(T.getUTCFullYear(),T.getUTCMonth()),ne=se(G),X=G.nextMonth(),U=se(X),re=T.getTime();re<ne?P=G.previousMonth().month+1:re>=U?P=X.month+1:P=G.month+1;break}case"H":P=T.getUTCHours();break;case"h":P=T.getUTCHours(),P=P%12,P===0&&(P=12);break;case"P":P=T.getUTCHours()>=12?"pm":"am";break;case"m":P=T.getUTCMinutes();break;case"s":P=T.getUTCSeconds();break;case"f":P=T.getUTCMilliseconds();break;case"Z":case"z":break;case"C":P="ISO";break;case"E":P="ISO";break}return P};let we=null;function Le(T,N,P){var G=0,ne=0;if(typeof P<"u"){const Ne=parseInt(P);G=Math.floor(Ne/100),ne=Ne%100}var X=function(Ne,ge){var xe=W(Ne,ge.component);if("YMDdFWwXxHhms".indexOf(ge.component)!==-1)if(ge.component==="Y"&&ge.n!==-1&&(xe=xe%Math.pow(10,ge.n)),ge.names){if(ge.component==="M"||ge.component==="x")xe=me[xe-1];else if(ge.component==="F")xe=ie[xe];else throw{code:"D3133",value:ge.component};ge.names===B.UPPER?xe=xe.toUpperCase():ge.names===B.LOWER&&(xe=xe.toLowerCase()),ge.width&&xe.length>ge.width.max&&(xe=xe.substring(0,ge.width.max))}else xe=Z(xe,ge.integerFormat);else if(ge.component==="f")xe=Z(xe,ge.integerFormat);else if(ge.component==="Z"||ge.component==="z"){const Re=G*100+ne;if(ge.integerFormat.regular)xe=Z(Re,ge.integerFormat);else{const he=ge.integerFormat.mandatoryDigits;if(he===1||he===2)xe=Z(G,ge.integerFormat),ne!==0&&(xe+=":"+q(ne,"00"));else if(he===3||he===4)xe=Z(Re,ge.integerFormat);else throw{code:"D3134",value:he}}Re>=0&&(xe="+"+xe),ge.component==="z"&&(xe="GMT"+xe),Re===0&&ge.presentation2==="t"&&(xe="Z")}else ge.component==="P"&&ge.names===B.UPPER&&(xe=xe.toUpperCase());return xe};let U;typeof N>"u"?(we===null&&(we=F("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),U=we):U=F(N);const re=(60*G+ne)*60*1e3,ve=new Date(T+re);let $e="";return U.parts.forEach(function(Ne){Ne.type==="literal"?$e+=Ne.value:$e+=X(ve,Ne)}),$e}function y(T){var N={};if(T.type==="datetime")N.type="datetime",N.parts=T.parts.map(function(P){var G={};if(P.type==="literal")G.regex=P.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(P.component==="Z"||P.component==="z"){let X;Array.isArray(P.integerFormat.groupingSeparators)||(X=P.integerFormat.groupingSeparators),G.regex="",P.component==="z"&&(G.regex="GMT"),G.regex+="[-+][0-9]+",X&&(G.regex+=X.character+"[0-9]+"),G.parse=function(U){P.component==="z"&&(U=U.substring(3));let re=0,ve=0;return X?(re=Number.parseInt(U.substring(0,U.indexOf(X.character))),ve=Number.parseInt(U.substring(U.indexOf(X.character)+1))):U.length-1<=2?re=Number.parseInt(U):(re=Number.parseInt(U.substring(0,3)),ve=Number.parseInt(U.substring(3))),re*60+ve}}else if(P.integerFormat)G=y(P.integerFormat);else{G.regex="[a-zA-Z]+";var ne={};if(P.component==="M"||P.component==="x")me.forEach(function(X,U){P.width&&P.width.max?ne[X.substring(0,P.width.max)]=U+1:ne[X]=U+1});else if(P.component==="F")ie.forEach(function(X,U){U>0&&(P.width&&P.width.max?ne[X.substring(0,P.width.max)]=U:ne[X]=U)});else if(P.component==="P")ne={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:P.component};G.parse=function(X){return ne[X]}}return G.component=P.component,G});else{N.type="integer";const P=T.case===B.UPPER;switch(T.primary){case O.LETTERS:N.regex=P?"[A-Z]+":"[a-z]+",N.parse=function(G){return V(G,P?"A":"a")};break;case O.ROMAN:N.regex=P?"[MDCLXVI]+":"[mdclxvi]+",N.parse=function(G){return j(P?G:G.toUpperCase())};break;case O.WORDS:N.regex="(?:"+Object.keys(A).concat("and","[\\-, ]").join("|")+")+",N.parse=function(G){return M(G.toLowerCase())};break;case O.DECIMAL:N.regex="[0-9]",T.parseWidth?N.regex+=`{${T.parseWidth}}`:N.regex+="+",T.ordinal&&(N.regex+="(?:th|st|nd|rd)"),N.parse=function(G){let ne=G;return T.ordinal&&(ne=G.substring(0,G.length-2)),T.regular?ne=ne.split(",").join(""):T.groupingSeparators.forEach(X=>{ne=ne.split(X.character).join("")}),T.zeroCode!==48&&(ne=ne.split("").map(X=>String.fromCodePoint(X.codePointAt(0)-T.zeroCode+48)).join("")),parseInt(ne)};break;case O.SEQUENCE:throw{code:"D3130",value:T.token}}}return N}function x(T,N){if(typeof T>"u")return;const P=Te(N);return y(P).parse(T)}function ue(T,N){const P=F(N),G=y(P),ne="^"+G.parts.map(ve=>"("+ve.regex+")").join("")+"$";var U=new RegExp(ne,"i").exec(T);if(U!==null){const he={};for(let qe=1;qe<U.length;qe++){const f=G.parts[qe-1];f.parse&&(he[f.component]=f.parse(U[qe]))}if(Object.getOwnPropertyNames(he).length===0)return;let ut=0;const jt=qe=>{ut<<=1,ut+=qe?1:0},wt=qe=>!(~qe&ut)&&!!(qe&ut);"YXMxWwdD".split("").forEach(qe=>jt(he[qe]));const xt=!wt(161)&&wt(130),Kt=wt(84),lr=!Kt&&wt(72);ut=0,"PHhmsf".split("").forEach(qe=>jt(he[qe]));const Zt=!wt(23)&&wt(47),mr=(xt?"YD":Kt?"XxwF":lr?"XWF":"YMD")+(Zt?"Phmsf":"Hmsf"),Bt=this.environment.timestamp;let it=!1,Yt=!1;if(mr.split("").forEach(qe=>{if(typeof he[qe]>"u")it?(he[qe]="MDd".indexOf(qe)!==-1?1:0,Yt=!0):he[qe]=W(Bt,qe);else if(it=!0,Yt)throw{code:"D3136"}}),he.M>0?he.M-=1:he.M=0,xt){const qe=Date.UTC(he.Y,0),f=(he.d-1)*1e3*60*60*24,w=new Date(qe+f);he.M=w.getUTCMonth(),he.D=w.getUTCDate()}if(Kt)throw{code:"D3136"};if(lr)throw{code:"D3136"};Zt&&(he.H=he.h===12?0:he.h,he.P===1&&(he.H+=12));var re=Date.UTC(he.Y,he.M,he.D,he.H,he.m,he.s,he.f);return(he.Z||he.z)&&(re-=(he.Z||he.z)*60*1e3),re}}var Ae=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Je(T,N){if(!(typeof T>"u"))if(typeof N>"u"){if(!Ae.test(T))throw{stack:new Error().stack,code:"D3110",value:T};return Date.parse(T)}else return ue.call(this,T,N)}function De(T,N,P){if(!(typeof T>"u"))return Le.call(this,T,N,P)}return{formatInteger:q,parseInteger:x,fromMillis:De,toMillis:Je}})();s.exports=a},{"./utils":6}],2:[function(r,s,i){(function(u){(function(){var a=r("./utils");const d=(()=>{var v=a.isNumeric,C=a.isArrayOfStrings,L=a.isArrayOfNumbers,S=a.createSequence,b=a.isSequence,A=a.isFunction,M=a.isLambda,J=a.isPromise,de=a.getFunctionArity,_e=a.isDeepEqual,j=a.stringToArray;function $(l){if(!(typeof l>"u")){var h=0;return l.forEach(function(m){h+=m}),h}}function V(l){return typeof l>"u"?0:l.length}function q(l){if(!(typeof l>"u"||l.length===0))return Math.max.apply(Math,l)}function O(l){if(!(typeof l>"u"||l.length===0))return Math.min.apply(Math,l)}function B(l){if(!(typeof l>"u"||l.length===0)){var h=0;return l.forEach(function(m){h+=m}),h/l.length}}function Z(l,h=!1){if(!(typeof l>"u")){var m;if(typeof l=="string")m=l;else if(A(l))m="";else{if(typeof l=="number"&&!isFinite(l))throw{code:"D3001",value:l,stack:new Error().stack};var E=h?2:0;Array.isArray(l)&&l.outerWrapper&&(l=l[0]),m=JSON.stringify(l,function(I,R){return typeof R<"u"&&R!==null&&R.toPrecision&&v(R)?Number(R.toPrecision(15)):R&&A(R)?"":R},E)}return m}}function ke(l,h,m){if(!(typeof l>"u")){var E=j(l),I=E.length;if(I+h<0&&(h=0),typeof m<"u"){if(m<=0)return"";var R=h>=0?h+m:I+h+m;return E.slice(h,R).join("")}return E.slice(h).join("")}}function Te(l,h){if(!(typeof l>"u")){var m=l.indexOf(h);return m>-1?l.substr(0,m):l}}function le(l,h){if(!(typeof l>"u")){var m=l.indexOf(h);return m>-1?l.substr(m+h.length):l}}function F(l){if(!(typeof l>"u"))return l.toLowerCase()}function ie(l){if(!(typeof l>"u"))return l.toUpperCase()}function me(l){if(!(typeof l>"u"))return j(l).length}function Ie(l){if(!(typeof l>"u")){var h=l.replace(/[ \t\n\r]+/gm," ");return h.charAt(0)===" "&&(h=h.substring(1)),h.charAt(h.length-1)===" "&&(h=h.substring(0,h.length-1)),h}}function se(l,h,m){if(!(typeof l>"u")){(typeof m>"u"||m.length===0)&&(m=" ");var E;h=Math.trunc(h);var I=Math.abs(h)-me(l);if(I>0){var R=new Array(I+1).join(m);m.length>1&&(R=ke(R,0,I)),h>0?E=l+R:E=R+l}else E=l;return E}}async function ee(l,h){var m=l.apply(this,[h]);if(J(m)&&(m=await m),m&&!(typeof m.start=="number"||m.end==="number"||Array.isArray(m.groups)||A(m.next)))throw{code:"T1010",stack:new Error().stack};return m}async function ae(l,h){if(!(typeof l>"u")){var m;if(typeof h=="string")m=l.indexOf(h)!==-1;else{var E=await ee(h,l);m=typeof E<"u"}return m}}async function W(l,h,m){if(!(typeof l>"u")){if(m<0)throw{stack:new Error().stack,value:m,code:"D3040",index:3};var E=S();if(typeof m>"u"||m>0){var I=0,R=await ee(h,l);if(typeof R<"u")for(;typeof R<"u"&&(typeof m>"u"||I<m);)E.push({match:R.match,index:R.start,groups:R.groups}),R=await ee(R.next),I++}return E}}async function we(l,h,m,E){if(!(typeof l>"u")){var I=this;if(h==="")throw{code:"D3010",stack:new Error().stack,value:h,index:2};if(E<0)throw{code:"D3011",stack:new Error().stack,value:E,index:4};var R;typeof m=="string"?R=function(Me){for(var at="",Oe=0,rt=m.indexOf("$",Oe);rt!==-1&&Oe<m.length;){at+=m.substring(Oe,rt),Oe=rt+1;var Nt=m.charAt(Oe);if(Nt==="$")at+="$",Oe++;else if(Nt==="0")at+=Me.match,Oe++;else{var Ze;if(Me.groups.length===0?Ze=1:Ze=Math.floor(Math.log(Me.groups.length)*Math.LOG10E)+1,rt=parseInt(m.substring(Oe,Oe+Ze),10),Ze>1&&rt>Me.groups.length&&(rt=parseInt(m.substring(Oe,Oe+Ze-1),10)),isNaN(rt))at+="$";else{if(Me.groups.length>0){var gr=Me.groups[rt-1];typeof gr<"u"&&(at+=gr)}Oe+=rt.toString().length}}rt=m.indexOf("$",Oe)}return at+=m.substring(Oe),at}:R=m;var Y="",pe=0;if(typeof E>"u"||E>0){var ye=0;if(typeof h=="string"){for(var je=l.indexOf(h,pe);je!==-1&&(typeof E>"u"||ye<E);)Y+=l.substring(pe,je),Y+=m,pe=je+h.length,ye++,je=l.indexOf(h,pe);Y+=l.substring(pe)}else{var Ee=await ee(h,l);if(typeof Ee<"u"){for(;typeof Ee<"u"&&(typeof E>"u"||ye<E);){Y+=l.substring(pe,Ee.start);var Be=R.apply(I,[Ee]);if(J(Be)&&(Be=await Be),typeof Be=="string")Y+=Be;else throw{code:"D3012",stack:new Error().stack,value:Be};pe=Ee.start+Ee.match.length,ye++,Ee=await ee(Ee.next)}Y+=l.substring(pe)}else Y=l}}else Y=l;return Y}}function Le(l){if(!(typeof l>"u")){var h=typeof window<"u"?window.btoa:function(m){return new u.Buffer.from(m,"binary").toString("base64")};return h(l)}}function y(l){if(!(typeof l>"u")){var h=typeof window<"u"?window.atob:function(m){return new u.Buffer.from(m,"base64").toString("binary")};return h(l)}}function x(l){if(!(typeof l>"u")){var h;try{h=encodeURIComponent(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"encodeUrlComponent"}}return h}}function ue(l){if(!(typeof l>"u")){var h;try{h=encodeURI(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"encodeUrl"}}return h}}function Ae(l){if(!(typeof l>"u")){var h;try{h=decodeURIComponent(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"decodeUrlComponent"}}return h}}function Je(l){if(!(typeof l>"u")){var h;try{h=decodeURI(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"decodeUrl"}}return h}}async function De(l,h,m){if(!(typeof l>"u")){if(m<0)throw{code:"D3020",stack:new Error().stack,value:m,index:3};var E=[];if(typeof m>"u"||m>0)if(typeof h=="string")E=l.split(h,m);else{var I=0,R=await ee(h,l);if(typeof R<"u"){for(var Y=0;typeof R<"u"&&(typeof m>"u"||I<m);)E.push(l.substring(Y,R.start)),Y=R.end,R=await ee(R.next),I++;(typeof m>"u"||I<m)&&E.push(l.substring(Y))}else E.push(l)}return E}}function T(l,h){if(!(typeof l>"u"))return typeof h>"u"&&(h=""),l.join(h)}function N(l,h,m){if(!(typeof l>"u")){var E={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},I=E;typeof m<"u"&&Object.keys(m).forEach(function(be){I[be]=m[be]});for(var R=[],Y=I["zero-digit"].charCodeAt(0),pe=Y;pe<Y+10;pe++)R.push(String.fromCharCode(pe));var ye=R.concat([I["decimal-separator"],I["exponent-separator"],I["grouping-separator"],I.digit,I["pattern-separator"]]),je=h.split(I["pattern-separator"]);if(je.length>2)throw{code:"D3080",stack:new Error().stack};var Ee=function(be){var Qe=(function(){for(var nt,St=0;St<be.length;St++)if(nt=be.charAt(St),ye.indexOf(nt)!==-1&&nt!==I["exponent-separator"])return be.substring(0,St)})(),vt=(function(){for(var nt,St=be.length-1;St>=0;St--)if(nt=be.charAt(St),ye.indexOf(nt)!==-1&&nt!==I["exponent-separator"])return be.substring(St+1)})(),Xe=be.substring(Qe.length,be.length-vt.length),Tt,Xt,kt,st,Pt=be.indexOf(I["exponent-separator"],Qe.length);Pt===-1||Pt>be.length-vt.length?(Tt=Xe,Xt=void 0):(Tt=Xe.substring(0,Pt),Xt=Xe.substring(Pt+1));var Lt=Tt.indexOf(I["decimal-separator"]);return Lt===-1?(kt=Tt,st=vt):(kt=Tt.substring(0,Lt),st=Tt.substring(Lt+1)),{prefix:Qe,suffix:vt,activePart:Xe,mantissaPart:Tt,exponentPart:Xt,integerPart:kt,fractionalPart:st,subpicture:be}},Be=function(be){var Qe,vt,Xe=be.subpicture,Tt=Xe.indexOf(I["decimal-separator"]);Tt!==Xe.lastIndexOf(I["decimal-separator"])&&(Qe="D3081"),Xe.indexOf(I.percent)!==Xe.lastIndexOf(I.percent)&&(Qe="D3082"),Xe.indexOf(I["per-mille"])!==Xe.lastIndexOf(I["per-mille"])&&(Qe="D3083"),Xe.indexOf(I.percent)!==-1&&Xe.indexOf(I["per-mille"])!==-1&&(Qe="D3084");var Xt=!1;for(vt=0;vt<be.mantissaPart.length;vt++){var kt=be.mantissaPart.charAt(vt);if(R.indexOf(kt)!==-1||kt===I.digit){Xt=!0;break}}Xt||(Qe="D3085");var st=be.activePart.split("").map(function(nt){return ye.indexOf(nt)===-1?"p":"a"}).join("");st.indexOf("p")!==-1&&(Qe="D3086"),Tt!==-1?(Xe.charAt(Tt-1)===I["grouping-separator"]||Xe.charAt(Tt+1)===I["grouping-separator"])&&(Qe="D3087"):be.integerPart.charAt(be.integerPart.length-1)===I["grouping-separator"]&&(Qe="D3088"),Xe.indexOf(I["grouping-separator"]+I["grouping-separator"])!==-1&&(Qe="D3089");var Pt=be.integerPart.indexOf(I.digit);Pt!==-1&&be.integerPart.substring(0,Pt).split("").filter(function(nt){return R.indexOf(nt)>-1}).length>0&&(Qe="D3090"),Pt=be.fractionalPart.lastIndexOf(I.digit),Pt!==-1&&be.fractionalPart.substring(Pt).split("").filter(function(nt){return R.indexOf(nt)>-1}).length>0&&(Qe="D3091");var Lt=typeof be.exponentPart=="string";if(Lt&&be.exponentPart.length>0&&(Xe.indexOf(I.percent)!==-1||Xe.indexOf(I["per-mille"])!==-1)&&(Qe="D3092"),Lt&&(be.exponentPart.length===0||be.exponentPart.split("").filter(function(nt){return R.indexOf(nt)===-1}).length>0)&&(Qe="D3093"),Qe)throw{code:Qe,stack:new Error().stack}},Me=function(be){var Qe=function(dt,$r){for(var yr=[],er=dt.indexOf(I["grouping-separator"]);er!==-1;){var Yr=($r?dt.substring(0,er):dt.substring(er)).split("").filter(function(Sr){return R.indexOf(Sr)!==-1||Sr===I.digit}).length;yr.push(Yr),er=be.integerPart.indexOf(I["grouping-separator"],er+1)}return yr},vt=Qe(be.integerPart),Xe=function(dt){if(dt.length===0)return 0;for(var $r=function(Yr,Sr){return Sr===0?Yr:$r(Sr,Yr%Sr)},yr=dt.reduce($r),er=1;er<=dt.length;er++)if(dt.indexOf(er*yr)===-1)return 0;return yr},Tt=Xe(vt),Xt=Qe(be.fractionalPart,!0),kt=be.integerPart.split("").filter(function(dt){return R.indexOf(dt)!==-1}).length,st=kt,Pt=be.fractionalPart.split(""),Lt=Pt.filter(function(dt){return R.indexOf(dt)!==-1}).length,nt=Pt.filter(function(dt){return R.indexOf(dt)!==-1||dt===I.digit}).length,St=typeof be.exponentPart=="string";kt===0&&nt===0&&(St?(Lt=1,nt=1):kt=1),St&&kt===0&&be.integerPart.indexOf(I.digit)!==-1&&(kt=1),kt===0&&Lt===0&&(Lt=1);var Rr=0;return St&&(Rr=be.exponentPart.split("").filter(function(dt){return R.indexOf(dt)!==-1}).length),{integerPartGroupingPositions:vt,regularGrouping:Tt,minimumIntegerPartSize:kt,scalingFactor:st,prefix:be.prefix,fractionalPartGroupingPositions:Xt,minimumFactionalPartSize:Lt,maximumFactionalPartSize:nt,minimumExponentSize:Rr,suffix:be.suffix,picture:be.subpicture}},at=je.map(Ee);at.forEach(Be);var Oe=at.map(Me),rt=I["minus-sign"],Nt=I["zero-digit"],Ze=I["decimal-separator"],gr=I["grouping-separator"];Oe.length===1&&(Oe.push(JSON.parse(JSON.stringify(Oe[0]))),Oe[1].prefix=rt+Oe[1].prefix);var tt;l>=0?tt=Oe[0]:tt=Oe[1];var Pr;tt.picture.indexOf(I.percent)!==-1?Pr=l*100:tt.picture.indexOf(I["per-mille"])!==-1?Pr=l*1e3:Pr=l;var ot,Qt;if(tt.minimumExponentSize===0)ot=Pr;else{var ki=Math.pow(10,tt.scalingFactor),Vn=Math.pow(10,tt.scalingFactor-1);for(ot=Pr,Qt=0;ot<Vn;)ot*=10,Qt-=1;for(;ot>ki;)ot/=10,Qt+=1}var mn=re(ot,tt.maximumFactionalPartSize),Gn=function(be,Qe){var vt=Math.abs(be).toFixed(Qe);return Nt!=="0"&&(vt=vt.split("").map(function(Xe){return Xe>="0"&&Xe<="9"?R[Xe.charCodeAt(0)-48]:Xe}).join("")),vt},Ce=Gn(mn,tt.maximumFactionalPartSize),lt=Ce.indexOf(".");for(lt===-1?Ce=Ce+Ze:Ce=Ce.replace(".",Ze);Ce.charAt(0)===Nt;)Ce=Ce.substring(1);for(;Ce.charAt(Ce.length-1)===Nt;)Ce=Ce.substring(0,Ce.length-1);lt=Ce.indexOf(Ze);var vr=tt.minimumIntegerPartSize-lt,gn=tt.minimumFactionalPartSize-(Ce.length-lt-1);if(Ce=(vr>0?new Array(vr+1).join(Nt):"")+Ce,Ce=Ce+(gn>0?new Array(gn+1).join(Nt):""),lt=Ce.indexOf(Ze),tt.regularGrouping>0)for(var Ot=Math.floor((lt-1)/tt.regularGrouping),Lr=1;Lr<=Ot;Lr++)Ce=[Ce.slice(0,lt-Lr*tt.regularGrouping),gr,Ce.slice(lt-Lr*tt.regularGrouping)].join("");else tt.integerPartGroupingPositions.forEach(function(be){Ce=[Ce.slice(0,lt-be),gr,Ce.slice(lt-be)].join(""),lt++});if(lt=Ce.indexOf(Ze),tt.fractionalPartGroupingPositions.forEach(function(be){Ce=[Ce.slice(0,be+lt+1),gr,Ce.slice(be+lt+1)].join("")}),lt=Ce.indexOf(Ze),(tt.picture.indexOf(Ze)===-1||lt===Ce.length-1)&&(Ce=Ce.substring(0,Ce.length-1)),typeof Qt<"u"){var Kr=Gn(Qt,0);vr=tt.minimumExponentSize-Kr.length,vr>0&&(Kr=new Array(vr+1).join(Nt)+Kr),Ce=Ce+I["exponent-separator"]+(Qt<0?rt:"")+Kr}return Ce=tt.prefix+Ce+tt.suffix,Ce}}function P(l,h){if(!(typeof l>"u")){if(l=re(l),typeof h>"u"?h=10:h=re(h),h<2||h>36)throw{code:"D3100",stack:new Error().stack,value:h};var m=l.toString(h);return m}}function G(l){var h;if(!(typeof l>"u")){if(typeof l=="number")h=l;else if(typeof l=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(l)&&!isNaN(parseFloat(l))&&isFinite(l))h=parseFloat(l);else if(typeof l=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(l))h=Number(l);else if(l===!0)h=1;else if(l===!1)h=0;else throw{code:"D3030",value:l,stack:new Error().stack,index:1};return h}}function ne(l){var h;if(!(typeof l>"u"))return h=Math.abs(l),h}function X(l){var h;if(!(typeof l>"u"))return h=Math.floor(l),h}function U(l){var h;if(!(typeof l>"u"))return h=Math.ceil(l),h}function re(l,h){var m;if(!(typeof l>"u")){if(h){var E=l.toString().split("e");l=+(E[0]+"e"+(E[1]?+E[1]+h:h))}m=Math.round(l);var I=m-l;return Math.abs(I)===.5&&Math.abs(m%2)===1&&(m=m-1),h&&(E=m.toString().split("e"),m=+(E[0]+"e"+(E[1]?+E[1]-h:-h))),Object.is(m,-0)&&(m=0),m}}function ve(l){var h;if(!(typeof l>"u")){if(l<0)throw{stack:new Error().stack,code:"D3060",index:1,value:l};return h=Math.sqrt(l),h}}function $e(l,h){var m;if(!(typeof l>"u")){if(m=Math.pow(l,h),!isFinite(m))throw{stack:new Error().stack,code:"D3061",index:1,value:l,exp:h};return m}}function Ne(){return Math.random()}function ge(l){if(!(typeof l>"u")){var h=!1;if(Array.isArray(l)){if(l.length===1)h=ge(l[0]);else if(l.length>1){var m=l.filter(function(E){return ge(E)});h=m.length>0}}else typeof l=="string"?l.length>0&&(h=!0):v(l)?l!==0&&(h=!0):l!==null&&typeof l=="object"&&!A(l)?Object.keys(l).length>0&&(h=!0):typeof l=="boolean"&&l===!0&&(h=!0);return h}}function xe(l){if(!(typeof l>"u"))return!ge(l)}function Re(l,h,m,E){var I=[h],R=de(l);return R>=2&&I.push(m),R>=3&&I.push(E),I}async function he(l,h){if(!(typeof l>"u")){for(var m=S(),E=0;E<l.length;E++){var I=Re(h,l[E],E,l),R=await h.apply(this,I);typeof R<"u"&&m.push(R)}return m}}async function ut(l,h){if(!(typeof l>"u")){for(var m=S(),E=0;E<l.length;E++){var I=l[E],R=Re(h,I,E,l),Y=await h.apply(this,R);ge(Y)&&m.push(I)}return m}}async function jt(l,h){if(!(typeof l>"u")){for(var m=!1,E,I=0;I<l.length;I++){var R=l[I],Y=!0;if(typeof h<"u"){var pe=Re(h,R,I,l),ye=await h.apply(this,pe);Y=ge(ye)}if(Y)if(!m)E=R,m=!0;else throw{stack:new Error().stack,code:"D3138",index:I}}if(!m)throw{stack:new Error().stack,code:"D3139"};return E}}function wt(){for(var l=[],h=Array.prototype.slice.call(arguments),m=Math.min.apply(Math,h.map(function(R){return Array.isArray(R)?R.length:0})),E=0;E<m;E++){var I=h.map(R=>R[E]);l.push(I)}return l}async function pt(l,h,m){if(!(typeof l>"u")){var E,I=de(h);if(I<2)throw{stack:new Error().stack,code:"D3050",index:1};var R;for(typeof m>"u"&&l.length>0?(E=l[0],R=1):(E=m,R=0);R<l.length;){var Y=[E,l[R]];I>=3&&Y.push(R),I>=4&&Y.push(l),E=await h.apply(this,Y),R++}return E}}function xt(l){var h=S();if(Array.isArray(l)){var m={};l.forEach(function(E){var I=xt(E);I.forEach(function(R){m[R]=!0})}),h=xt(m)}else l!==null&&typeof l=="object"&&!A(l)&&Object.keys(l).forEach(E=>h.push(E));return h}function Kt(l,h){var m;if(Array.isArray(l)){m=S();for(var E=0;E<l.length;E++){var I=Kt(l[E],h);typeof I<"u"&&(Array.isArray(I)?I.forEach(R=>m.push(R)):m.push(I))}}else l!==null&&typeof l=="object"&&!A(l)&&(m=l[h]);return m}function lr(l,h){return typeof l>"u"?h:typeof h>"u"?l:(Array.isArray(l)||(l=S(l)),Array.isArray(h)||(h=[h]),l.concat(h))}function Ir(l){return!(typeof l>"u")}function Zt(l){var h=S();if(Array.isArray(l))l.forEach(function(I){h=lr(h,Zt(I))});else if(l!==null&&typeof l=="object"&&!M(l))for(var m in l){var E={};E[m]=l[m],h.push(E)}else h=l;return h}function oe(l){if(!(typeof l>"u")){var h={};return l.forEach(function(m){for(var E in m)h[E]=m[E]}),h}}function kr(l){if(!(typeof l>"u")){if(l.length<=1)return l;for(var h=l.length,m=new Array(h),E=0;E<h;E++)m[h-E-1]=l[E];return m}}async function mr(l,h){var m=S();for(var E in l){var I=Re(h,l[E],E,l),R=await h.apply(this,I);typeof R<"u"&&m.push(R)}return m}function Bt(l){throw{code:"D3137",stack:new Error().stack,message:l||"$error() function evaluated"}}function it(l,h){if(!l)throw{code:"D3141",stack:new Error().stack,message:h||"$assert() statement failed"}}function Yt(l){if(l!==void 0)return l===null?"null":v(l)?"number":typeof l=="string"?"string":typeof l=="boolean"?"boolean":Array.isArray(l)?"array":A(l)?"function":"object"}async function qe(l,h){if(!(typeof l>"u")){if(l.length<=1)return l;var m;if(typeof h>"u"){if(!L(l)&&!C(l))throw{stack:new Error().stack,code:"D3070",index:1};m=async function(Y,pe){return Y>pe}}else m=h;var E=async function(Y,pe){var ye=async function(Ee,Be,Me){Be.length===0?Array.prototype.push.apply(Ee,Me):Me.length===0?Array.prototype.push.apply(Ee,Be):await m(Be[0],Me[0])?(Ee.push(Me[0]),await ye(Ee,Be,Me.slice(1))):(Ee.push(Be[0]),await ye(Ee,Be.slice(1),Me))},je=[];return await ye(je,Y,pe),je},I=async function(Y){if(!Array.isArray(Y)||Y.length<=1)return Y;var pe=Math.floor(Y.length/2),ye=Y.slice(0,pe),je=Y.slice(pe);return ye=await I(ye),je=await I(je),await E(ye,je)},R=await I(l);return R}}function f(l){if(!(typeof l>"u")){if(l.length<=1)return l;for(var h=new Array(l.length),m=0;m<l.length;m++){var E=Math.floor(Math.random()*(m+1));m!==E&&(h[m]=h[E]),h[E]=l[m]}return h}}function w(l){if(!(typeof l>"u")){if(!Array.isArray(l)||l.length<=1)return l;for(var h=b(l)?S():[],m=0;m<l.length;m++){for(var E=l[m],I=!1,R=0;R<h.length;R++)if(_e(E,h[R])){I=!0;break}I||h.push(E)}return h}}async function k(l,h){var m={};for(var E in l){var I=l[E],R=Re(h,I,E,l),Y=await h.apply(this,R);ge(Y)&&(m[E]=I)}return Object.keys(m).length===0&&(m=void 0),m}return{sum:$,count:V,max:q,min:O,average:B,string:Z,substring:ke,substringBefore:Te,substringAfter:le,lowercase:F,uppercase:ie,length:me,trim:Ie,pad:se,match:W,contains:ae,replace:we,split:De,join:T,formatNumber:N,formatBase:P,number:G,floor:X,ceil:U,round:re,abs:ne,sqrt:ve,power:$e,random:Ne,boolean:ge,not:xe,map:he,zip:wt,filter:ut,single:jt,foldLeft:pt,sift:k,keys:xt,lookup:Kt,append:lr,exists:Ir,spread:Zt,merge:oe,reverse:kr,each:mr,error:Bt,assert:it,type:Yt,sort:qe,shuffle:f,distinct:w,base64encode:Le,base64decode:y,encodeUrlComponent:x,encodeUrl:ue,decodeUrlComponent:Ae,decodeUrl:Je}})();s.exports=d}).call(this)}).call(this,typeof ws<"u"?ws:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(r,s,i){var u=r("./datetime"),a=r("./functions"),d=r("./utils"),v=r("./parser"),C=r("./signature"),L=(function(){var S=d.isNumeric,b=d.isArrayOfStrings,A=d.isArrayOfNumbers,M=d.createSequence,J=d.isSequence,de=d.isFunction,_e=d.isLambda,j=d.isIterable,$=d.isPromise,V=d.getFunctionArity,q=d.isDeepEqual,O=Bt(null);async function B(f,w,k){var l,h=k.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(h&&await h(f,w,k),f.type){case"path":l=await Z(f,w,k);break;case"binary":l=await me(f,w,k);break;case"unary":l=await Ie(f,w,k);break;case"name":l=se(f,w);break;case"string":case"number":case"value":l=ee(f);break;case"wildcard":l=ae(f,w);break;case"descendant":l=we(f,w);break;case"parent":l=k.lookup(f.slot.label);break;case"condition":l=await X(f,w,k);break;case"block":l=await U(f,w,k);break;case"bind":l=await ne(f,w,k);break;case"regex":l=re(f);break;case"function":l=await Re(f,w,k);break;case"variable":l=ve(f,w,k);break;case"lambda":l=jt(f,w,k);break;case"partial":l=await wt(f,w,k);break;case"apply":l=await xe(f,w,k);break;case"transform":l=Ne(f,w,k);break}if(Object.prototype.hasOwnProperty.call(f,"predicate"))for(var m=0;m<f.predicate.length;m++)l=await ie(f.predicate[m].expr,l,k);f.type!=="path"&&Object.prototype.hasOwnProperty.call(f,"group")&&(l=await N(f.group,l,k));var E=k.lookup(Symbol.for("jsonata.__evaluate_exit"));return E&&await E(f,w,k,l),l&&J(l)&&!l.tupleStream&&(f.keepArray&&(l.keepSingleton=!0),l.length===0?l=void 0:l.length===1&&(l=l.keepSingleton?l:l[0])),l}async function Z(f,w,k){var l;Array.isArray(w)&&f.steps[0].type!=="variable"?l=w:l=M(w);for(var h,m=!1,E=void 0,I=0;I<f.steps.length;I++){var R=f.steps[I];if(R.tuple&&(m=!0),I===0&&R.consarray?h=await B(R,l,k):m?E=await F(R,l,E,k):h=await Te(R,l,k,I===f.steps.length-1),!m&&(typeof h>"u"||h.length===0))break;typeof R.focus>"u"&&(l=h)}if(m)if(f.tuple)h=E;else for(h=M(),I=0;I<E.length;I++)h.push(E[I]["@"]);return f.keepSingletonArray&&(Array.isArray(h)&&h.cons&&!h.sequence&&(h=M(h)),h.keepSingleton=!0),f.hasOwnProperty("group")&&(h=await N(f.group,m?E:h,k)),h}function ke(f,w){var k=Bt(f);for(const l in w)k.bind(l,w[l]);return k}async function Te(f,w,k,l){var h;if(f.type==="sort")return h=await $e(f,w,k),f.stages&&(h=await le(f.stages,h,k)),h;h=M();for(var m=0;m<w.length;m++){var E=await B(f,w[m],k);if(f.stages)for(var I=0;I<f.stages.length;I++)E=await ie(f.stages[I].expr,E,k);typeof E<"u"&&h.push(E)}var R=M();return l&&h.length===1&&Array.isArray(h[0])&&!J(h[0])?R=h[0]:h.forEach(function(Y){!Array.isArray(Y)||Y.cons?R.push(Y):Y.forEach(pe=>R.push(pe))}),R}async function le(f,w,k){for(var l=w,h=0;h<f.length;h++){var m=f[h];switch(m.type){case"filter":l=await ie(m.expr,l,k);break;case"index":for(var E=0;E<l.length;E++){var I=l[E];I[m.value]=E}break}}return l}async function F(f,w,k,l){var h;if(f.type==="sort"){if(k)h=await $e(f,k,l);else{var m=await $e(f,w,l);h=M(),h.tupleStream=!0;for(var E=0;E<m.length;E++){var I={"@":m[E]};I[f.index]=E,h.push(I)}}return f.stages&&(h=await le(f.stages,h,l)),h}h=M(),h.tupleStream=!0;var R=l;k===void 0&&(k=w.map(je=>({"@":je})));for(var Y=0;Y<k.length;Y++){R=ke(l,k[Y]);var pe=await B(f,k[Y]["@"],R);if(typeof pe<"u"){Array.isArray(pe)||(pe=[pe]);for(var ye=0;ye<pe.length;ye++)I={},Object.assign(I,k[Y]),pe.tupleStream?Object.assign(I,pe[ye]):(f.focus?(I[f.focus]=pe[ye],I["@"]=k[Y]["@"]):I["@"]=pe[ye],f.index&&(I[f.index]=ye),f.ancestor&&(I[f.ancestor.label]=k[Y]["@"])),h.push(I)}}return f.stages&&(h=await le(f.stages,h,l)),h}async function ie(f,w,k){var l=M();if(w&&w.tupleStream&&(l.tupleStream=!0),Array.isArray(w)||(w=M(w)),f.type==="number"){var h=Math.floor(f.value);h<0&&(h=w.length+h);var m=await w[h];typeof m<"u"&&(Array.isArray(m)?l=m:l.push(m))}else for(h=0;h<w.length;h++){var m=w[h],E=m,I=k;w.tupleStream&&(E=m["@"],I=ke(k,m));var R=await B(f,E,I);S(R)&&(R=[R]),A(R)?R.forEach(function(pe){var ye=Math.floor(pe);ye<0&&(ye=w.length+ye),ye===h&&l.push(m)}):a.boolean(R)&&l.push(m)}return l}async function me(f,w,k){var l,h=await B(f.lhs,w,k),m=f.value,E=async()=>await B(f.rhs,w,k);if(m==="and"||m==="or")try{return await Je(h,E,m)}catch(R){throw R.position=f.position,R.token=m,R}var I=await E();try{switch(m){case"+":case"-":case"*":case"/":case"%":l=y(h,I,m);break;case"=":case"!=":l=x(h,I,m);break;case"<":case"<=":case">":case">=":l=ue(h,I,m);break;case"&":l=T(h,I);break;case"..":l=G(h,I);break;case"in":l=Ae(h,I);break}}catch(R){throw R.position=f.position,R.token=m,R}return l}async function Ie(f,w,k){var l;switch(f.value){case"-":if(l=await B(f.expression,w,k),typeof l>"u")l=void 0;else if(S(l))l=-l;else throw{code:"D1002",stack:new Error().stack,position:f.position,token:f.value,value:l};break;case"[":l=[];let E=await Promise.all(f.expressions.map(async(I,R)=>(k.isParallelCall=R>0,[I,await B(I,w,k)])));for(let I of E){var[h,m]=I;typeof m<"u"&&(h.value==="["?l.push(m):l=a.append(l,m))}f.consarray&&Object.defineProperty(l,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":l=await N(f,w,k);break}return l}function se(f,w,k){return a.lookup(w,f.value)}function ee(f){return f.value}function ae(f,w){var k=M();return Array.isArray(w)&&w.outerWrapper&&w.length>0&&(w=w[0]),w!==null&&typeof w=="object"&&Object.keys(w).forEach(function(l){var h=w[l];Array.isArray(h)?(h=W(h),k=a.append(k,h)):k.push(h)}),k}function W(f,w){return typeof w>"u"&&(w=[]),Array.isArray(f)?f.forEach(function(k){W(k,w)}):w.push(f),w}function we(f,w){var k,l=M();return typeof w<"u"&&(Le(w,l),l.length===1?k=l[0]:k=l),k}function Le(f,w){Array.isArray(f)||w.push(f),Array.isArray(f)?f.forEach(function(k){Le(k,w)}):f!==null&&typeof f=="object"&&Object.keys(f).forEach(function(k){Le(f[k],w)})}function y(f,w,k){var l;if(typeof f<"u"&&!S(f))throw{code:"T2001",stack:new Error().stack,value:f};if(typeof w<"u"&&!S(w))throw{code:"T2002",stack:new Error().stack,value:w};if(typeof f>"u"||typeof w>"u")return l;switch(k){case"+":l=f+w;break;case"-":l=f-w;break;case"*":l=f*w;break;case"/":l=f/w;break;case"%":l=f%w;break}return l}function x(f,w,k){var l,h=typeof f,m=typeof w;if(h==="undefined"||m==="undefined")return!1;switch(k){case"=":l=q(f,w);break;case"!=":l=!q(f,w);break}return l}function ue(f,w,k){var l,h=typeof f,m=typeof w,E=h==="undefined"||h==="string"||h==="number",I=m==="undefined"||m==="string"||m==="number";if(!E||!I)throw{code:"T2010",stack:new Error().stack,value:h==="string"||h==="number"?w:f};if(!(h==="undefined"||m==="undefined")){if(h!==m)throw{code:"T2009",stack:new Error().stack,value:f,value2:w};switch(k){case"<":l=f<w;break;case"<=":l=f<=w;break;case">":l=f>w;break;case">=":l=f>=w;break}return l}}function Ae(f,w){var k=!1;if(typeof f>"u"||typeof w>"u")return!1;Array.isArray(w)||(w=[w]);for(var l=0;l<w.length;l++)if(w[l]===f){k=!0;break}return k}async function Je(f,w,k){var l,h=De(f);switch(k){case"and":l=h&&De(await w());break;case"or":l=h||De(await w());break}return l}function De(f){var w=a.boolean(f);return typeof w>"u"?!1:w}function T(f,w){var k,l="",h="";return typeof f<"u"&&(l=a.string(f)),typeof w<"u"&&(h=a.string(w)),k=l.concat(h),k}async function N(f,w,k){var l={},h={},m=!!(w&&w.tupleStream);Array.isArray(w)||(w=M(w)),w.length===0&&w.push(void 0);for(var E=0;E<w.length;E++)for(var I=w[E],R=m?ke(k,I):k,Y=0;Y<f.lhs.length;Y++){var pe=f.lhs[Y],ye=await B(pe[0],m?I["@"]:I,R);if(typeof ye!="string"&&ye!==void 0)throw{code:"T1003",stack:new Error().stack,position:f.position,value:ye};if(ye!==void 0){var je={data:I,exprIndex:Y};if(h.hasOwnProperty(ye)){if(h[ye].exprIndex!==Y)throw{code:"D1009",stack:new Error().stack,position:f.position,value:ye};h[ye].data=a.append(h[ye].data,I)}else h[ye]=je}}let Ee=await Promise.all(Object.keys(h).map(async(Me,at)=>{let Oe=h[Me];var rt=Oe.data,Nt=k;if(m){var Ze=P(Oe.data);rt=Ze["@"],delete Ze["@"],Nt=ke(k,Ze)}return k.isParallelCall=at>0,[Me,await B(f.lhs[Oe.exprIndex][1],rt,Nt)]}));for(let Me of Ee){var[ye,Be]=await Me;typeof Be<"u"&&(l[ye]=Be)}return l}function P(f){if(!Array.isArray(f))return f;var w={};Object.assign(w,f[0]);for(var k=1;k<f.length;k++)for(const l in f[k])w[l]=a.append(w[l],f[k][l]);return w}function G(f,w){var k;if(typeof f<"u"&&!Number.isInteger(f))throw{code:"T2003",stack:new Error().stack,value:f};if(typeof w<"u"&&!Number.isInteger(w))throw{code:"T2004",stack:new Error().stack,value:w};if(typeof f>"u"||typeof w>"u"||f>w)return k;var l=w-f+1;if(l>1e7)throw{code:"D2014",stack:new Error().stack,value:l};k=new Array(l);for(var h=f,m=0;h<=w;h++,m++)k[m]=h;return k.sequence=!0,k}async function ne(f,w,k){var l=await B(f.rhs,w,k);return k.bind(f.lhs.value,l),l}async function X(f,w,k){var l,h=await B(f.condition,w,k);return a.boolean(h)?l=await B(f.then,w,k):typeof f.else<"u"&&(l=await B(f.else,w,k)),l}async function U(f,w,k){for(var l,h=Bt(k),m=0;m<f.expressions.length;m++)l=await B(f.expressions[m],w,h);return l}function re(f){var w=new qe.RegexEngine(f.value),k=function(l,h){var m;w.lastIndex=h||0;var E=w.exec(l);if(E!==null){if(m={match:E[0],start:E.index,end:E.index+E[0].length,groups:[]},E.length>1)for(var I=1;I<E.length;I++)m.groups.push(E[I]);m.next=function(){if(!(w.lastIndex>=l.length)){var R=k(l,w.lastIndex);if(R&&R.match==="")throw{code:"D1004",stack:new Error().stack,position:f.position,value:f.value.source};return R}}}return m};return k}function ve(f,w,k){var l;return f.value===""?l=w&&w.outerWrapper?w[0]:w:l=k.lookup(f.value),l}async function $e(f,w,k){var l,h=w,m=!!w.tupleStream,E=async function(R,Y){for(var pe=0,ye=0;pe===0&&ye<f.terms.length;ye++){var je=f.terms[ye],Ee=R,Be=k;m&&(Ee=R["@"],Be=ke(k,R));var Me=await B(je.expression,Ee,Be);Ee=Y,Be=k,m&&(Ee=Y["@"],Be=ke(k,Y));var at=await B(je.expression,Ee,Be),Oe=typeof Me,rt=typeof at;if(Oe==="undefined"){pe=rt==="undefined"?0:1;continue}if(rt==="undefined"){pe=-1;continue}if(!(Oe==="string"||Oe==="number")||!(rt==="string"||rt==="number"))throw{code:"T2008",stack:new Error().stack,position:f.position,value:Oe==="string"||Oe==="number"?at:Me};if(Oe!==rt)throw{code:"T2007",stack:new Error().stack,position:f.position,value:Me,value2:at};Me!==at&&(Me<at?pe=-1:pe=1,je.descending===!0&&(pe=-pe))}return pe===1},I={environment:k,input:w};return l=await a.sort.apply(I,[h,E]),l}function Ne(f,w,k){var l=async function(h){if(!(typeof h>"u")){var m=k.lookup("clone");if(!de(m))throw{code:"T2013",stack:new Error().stack,position:f.position};var E=await he(m,[h],null,k),I=await B(f.pattern,E,k);if(typeof I<"u"){Array.isArray(I)||(I=[I]);for(var R=0;R<I.length;R++){var Y=I[R];if(Y&&(Y.isPrototypeOf(E)||Y instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:f.position};var pe=await B(f.update,Y,k),ye=typeof pe;if(ye!=="undefined"){if(ye!=="object"||pe===null||Array.isArray(pe))throw{code:"T2011",stack:new Error().stack,position:f.update.position,value:pe};for(var je in pe)Y[je]=pe[je]}if(typeof f.delete<"u"){var Ee=await B(f.delete,Y,k);if(typeof Ee<"u"){var Be=Ee;if(Array.isArray(Ee)||(Ee=[Ee]),!b(Ee))throw{code:"T2012",stack:new Error().stack,position:f.delete.position,value:Be};for(var Me=0;Me<Ee.length;Me++)typeof Y=="object"&&Y!==null&&delete Y[Ee[Me]]}}}}return E}};return oe(l,"<(oa):o>")}var ge=v("function($f, $g) { function($x){ $g($f($x)) } }");async function xe(f,w,k){var l,h=await B(f.lhs,w,k);if(f.rhs.type==="function")l=await Re(f.rhs,w,k,{context:h});else{var m=await B(f.rhs,w,k);if(!de(m))throw{code:"T2006",stack:new Error().stack,position:f.position,value:m};if(de(h)){var E=await B(ge,null,k);l=await he(E,[h,m],null,k)}else l=await he(m,[h],null,k)}return l}async function Re(f,w,k,l){var h,m=await B(f.procedure,w,k);if(typeof m>"u"&&f.procedure.type==="path"&&k.lookup(f.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:f.position,token:f.procedure.steps[0].value};var E=[];typeof l<"u"&&E.push(l.context);for(var I=0;I<f.arguments.length;I++){const Y=await B(f.arguments[I],w,k);if(de(Y)){const pe=async function(...ye){return await he(Y,ye,null,k)};pe.arity=V(Y),E.push(pe)}else E.push(Y)}var R=f.procedure.type==="path"?f.procedure.steps[0].value:f.procedure.value;try{typeof m=="object"&&(m.token=R,m.position=f.position),h=await he(m,E,w,k)}catch(Y){throw Y.position||(Y.position=f.position),Y.token||(Y.token=R),Y}return h}async function he(f,w,k,l){var h;for(h=await ut(f,w,k,l);_e(h)&&h.thunk===!0;){var m=await B(h.body.procedure,h.input,h.environment);h.body.procedure.type==="variable"&&(m.token=h.body.procedure.value),m.position=h.body.procedure.position;for(var E=[],I=0;I<h.body.arguments.length;I++)E.push(await B(h.body.arguments[I],h.input,h.environment));h=await ut(m,E,k,l)}return h}async function ut(f,w,k,l){var h;try{var m=w;if(f&&(m=pt(f.signature,w,k)),_e(f))h=await xt(f,m);else if(f&&f._jsonata_function===!0){var E={environment:l,input:k};h=f.implementation.apply(E,m),j(h)&&(h=h.next().value),$(h)&&(h=await h)}else if(typeof f=="function")h=f.apply(k,m),$(h)&&(h=await h);else throw{code:"T1006",stack:new Error().stack}}catch(I){throw f&&(typeof I.token>"u"&&typeof f.token<"u"&&(I.token=f.token),I.position=f.position||I.position),I}return h}function jt(f,w,k){var l={_jsonata_lambda:!0,input:w,environment:k,arguments:f.arguments,signature:f.signature,body:f.body};return f.thunk===!0&&(l.thunk=!0),l.apply=async function(h,m){return await he(l,m,w,h?h.environment:k)},l}async function wt(f,w,k){for(var l,h=[],m=0;m<f.arguments.length;m++){var E=f.arguments[m];E.type==="operator"&&E.value==="?"?h.push(E):h.push(await B(E,w,k))}var I=await B(f.procedure,w,k);if(typeof I>"u"&&f.procedure.type==="path"&&k.lookup(f.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:f.position,token:f.procedure.steps[0].value};if(_e(I))l=Kt(I,h);else if(I&&I._jsonata_function===!0)l=lr(I.implementation,h);else if(typeof I=="function")l=lr(I,h);else throw{code:"T1008",stack:new Error().stack,position:f.position,token:f.procedure.type==="path"?f.procedure.steps[0].value:f.procedure.value};return l}function pt(f,w,k){if(typeof f>"u")return w;var l=f.validate(w,k);return l}async function xt(f,w){var k,l=Bt(f.environment);return f.arguments.forEach(function(h,m){l.bind(h.value,w[m])}),typeof f.body=="function"?k=await Ir(f.body,l):k=await B(f.body,f.input,l),k}function Kt(f,w){var k=Bt(f.environment),l=[];f.arguments.forEach(function(m,E){var I=w[E];I&&I.type==="operator"&&I.value==="?"?l.push(m):k.bind(m.value,I)});var h={_jsonata_lambda:!0,input:f.input,environment:k,arguments:l,body:f.body};return h}function lr(f,w){var k=Zt(f);k=k.map(function(E){return"$"+E.trim()});var l="function("+k.join(", ")+"){ _ }",h=v(l);h.body=f;var m=Kt(h,w);return m}async function Ir(f,w){var k=Zt(f),l=k.map(function(E){return w.lookup(E.trim())}),h={environment:w},m=f.apply(h,l);return $(m)&&(m=await m),m}function Zt(f){var w=f.toString(),k=/\(([^)]*)\)/.exec(w)[1],l=k.split(",");return l}function oe(f,w){var k={_jsonata_function:!0,implementation:f};return typeof w<"u"&&(k.signature=C(w)),k}async function kr(f,w){if(!(typeof f>"u")){var k=this.input;typeof w<"u"&&(k=w,Array.isArray(k)&&!J(k)&&(k=M(k),k.outerWrapper=!0));try{var l=v(f,!1)}catch(m){throw Yt(m),{stack:new Error().stack,code:"D3120",value:m.message,error:m}}try{var h=await B(l,k,this.environment)}catch(m){throw Yt(m),{stack:new Error().stack,code:"D3121",value:m.message,error:m}}return h}}function mr(f){if(!(typeof f>"u"))return JSON.parse(a.string(f))}function Bt(f){var w={};const k={bind:function(h,m){w[h]=m},lookup:function(h){var m;return w.hasOwnProperty(h)?m=w[h]:f&&(m=f.lookup(h)),m},timestamp:f?f.timestamp:null,async:f?f.async:!1,isParallelCall:f?f.isParallelCall:!1,global:f?f.global:{ancestry:[null]}};if(f){var l=f.lookup(Symbol.for("jsonata.__createFrame_push"));l&&l(f,k)}return k}O.bind("sum",oe(a.sum,"<a<n>:n>")),O.bind("count",oe(a.count,"<a:n>")),O.bind("max",oe(a.max,"<a<n>:n>")),O.bind("min",oe(a.min,"<a<n>:n>")),O.bind("average",oe(a.average,"<a<n>:n>")),O.bind("string",oe(a.string,"<x-b?:s>")),O.bind("substring",oe(a.substring,"<s-nn?:s>")),O.bind("substringBefore",oe(a.substringBefore,"<s-s:s>")),O.bind("substringAfter",oe(a.substringAfter,"<s-s:s>")),O.bind("lowercase",oe(a.lowercase,"<s-:s>")),O.bind("uppercase",oe(a.uppercase,"<s-:s>")),O.bind("length",oe(a.length,"<s-:n>")),O.bind("trim",oe(a.trim,"<s-:s>")),O.bind("pad",oe(a.pad,"<s-ns?:s>")),O.bind("match",oe(a.match,"<s-f<s:o>n?:a<o>>")),O.bind("contains",oe(a.contains,"<s-(sf):b>")),O.bind("replace",oe(a.replace,"<s-(sf)(sf)n?:s>")),O.bind("split",oe(a.split,"<s-(sf)n?:a<s>>")),O.bind("join",oe(a.join,"<a<s>s?:s>")),O.bind("formatNumber",oe(a.formatNumber,"<n-so?:s>")),O.bind("formatBase",oe(a.formatBase,"<n-n?:s>")),O.bind("formatInteger",oe(u.formatInteger,"<n-s:s>")),O.bind("parseInteger",oe(u.parseInteger,"<s-s:n>")),O.bind("number",oe(a.number,"<(nsb)-:n>")),O.bind("floor",oe(a.floor,"<n-:n>")),O.bind("ceil",oe(a.ceil,"<n-:n>")),O.bind("round",oe(a.round,"<n-n?:n>")),O.bind("abs",oe(a.abs,"<n-:n>")),O.bind("sqrt",oe(a.sqrt,"<n-:n>")),O.bind("power",oe(a.power,"<n-n:n>")),O.bind("random",oe(a.random,"<:n>")),O.bind("boolean",oe(a.boolean,"<x-:b>")),O.bind("not",oe(a.not,"<x-:b>")),O.bind("map",oe(a.map,"<af>")),O.bind("zip",oe(a.zip,"<a+>")),O.bind("filter",oe(a.filter,"<af>")),O.bind("single",oe(a.single,"<af?>")),O.bind("reduce",oe(a.foldLeft,"<afj?:j>")),O.bind("sift",oe(a.sift,"<o-f?:o>")),O.bind("keys",oe(a.keys,"<x-:a<s>>")),O.bind("lookup",oe(a.lookup,"<x-s:x>")),O.bind("append",oe(a.append,"<xx:a>")),O.bind("exists",oe(a.exists,"<x:b>")),O.bind("spread",oe(a.spread,"<x-:a<o>>")),O.bind("merge",oe(a.merge,"<a<o>:o>")),O.bind("reverse",oe(a.reverse,"<a:a>")),O.bind("each",oe(a.each,"<o-f:a>")),O.bind("error",oe(a.error,"<s?:x>")),O.bind("assert",oe(a.assert,"<bs?:x>")),O.bind("type",oe(a.type,"<x:s>")),O.bind("sort",oe(a.sort,"<af?:a>")),O.bind("shuffle",oe(a.shuffle,"<a:a>")),O.bind("distinct",oe(a.distinct,"<x:x>")),O.bind("base64encode",oe(a.base64encode,"<s-:s>")),O.bind("base64decode",oe(a.base64decode,"<s-:s>")),O.bind("encodeUrlComponent",oe(a.encodeUrlComponent,"<s-:s>")),O.bind("encodeUrl",oe(a.encodeUrl,"<s-:s>")),O.bind("decodeUrlComponent",oe(a.decodeUrlComponent,"<s-:s>")),O.bind("decodeUrl",oe(a.decodeUrl,"<s-:s>")),O.bind("eval",oe(kr,"<sx?:x>")),O.bind("toMillis",oe(u.toMillis,"<s-s?:n>")),O.bind("fromMillis",oe(u.fromMillis,"<n-s?s?:s>")),O.bind("clone",oe(mr,"<(oa)-:o>"));var it={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Yt(f){var w=it[f.code];if(typeof w<"u"){var k=w.replace(/\{\{\{([^}]+)}}}/g,function(){return f[arguments[1]]});k=k.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(f[arguments[1]])}),f.message=k}}function qe(f,w){var k,l;try{k=v(f,w&&w.recover),l=k.errors,delete k.errors}catch(E){throw Yt(E),E}var h=Bt(O),m=new Date;return h.bind("now",oe(function(E,I){return u.fromMillis(m.getTime(),E,I)},"<s?s?:s>")),h.bind("millis",oe(function(){return m.getTime()},"<:n>")),w&&w.RegexEngine?qe.RegexEngine=w.RegexEngine:qe.RegexEngine=RegExp,{evaluate:async function(E,I,R){if(typeof l<"u"){var Y={code:"S0500",position:0};throw Yt(Y),Y}if(typeof I<"u"){var pe;pe=Bt(h);for(var ye in I)pe.bind(ye,I[ye])}else pe=h;pe.bind("$",E),m=new Date,pe.timestamp=m,Array.isArray(E)&&!J(E)&&(E=M(E),E.outerWrapper=!0);var je;try{return je=await B(k,E,pe),typeof R=="function"&&R(null,je),je}catch(Ee){throw Yt(Ee),Ee}},assign:function(E,I){h.bind(E,I)},registerFunction:function(E,I,R){var Y=oe(I,R);h.bind(E,Y)},ast:function(){return k},errors:function(){return l}}}return qe.parser=v,qe})();s.exports=L},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(r,s,i){var u=r("./signature");const a=(()=>{var d={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,"?:":40,"??":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},v={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},C=function(S){var b=0,A=S.length,M=function(_e,j){var $={type:_e,value:j,position:b};return $},J=function(){for(var _e=b,j=0,$,V,q=function(B){if(S.charAt(B)==="/"&&j===0){for(var Z=0;S.charAt(B-(Z+1))==="\\";)Z++;if(Z%2===0)return!0}return!1};b<A;){var O=S.charAt(b);if(q(b)){if($=S.substring(_e,b),$==="")throw{code:"S0301",stack:new Error().stack,position:b};for(b++,O=S.charAt(b),_e=b;O==="i"||O==="m";)b++,O=S.charAt(b);return V=S.substring(_e,b)+"g",new RegExp($,V)}(O==="("||O==="["||O==="{")&&S.charAt(b-1)!=="\\"&&j++,(O===")"||O==="]"||O==="}")&&S.charAt(b-1)!=="\\"&&j--,b++}throw{code:"S0302",stack:new Error().stack,position:b}},de=function(_e){if(b>=A)return null;for(var j=S.charAt(b);b<A&&` 	
\r\v`.indexOf(j)>-1;)b++,j=S.charAt(b);if(j==="/"&&S.charAt(b+1)==="*"){var $=b;for(b+=2,j=S.charAt(b);!(j==="*"&&S.charAt(b+1)==="/");)if(j=S.charAt(++b),b>=A)throw{code:"S0106",stack:new Error().stack,position:$};return b+=2,j=S.charAt(b),de(_e)}if(_e!==!0&&j==="/")return b++,M("regex",J());if(j==="."&&S.charAt(b+1)===".")return b+=2,M("operator","..");if(j===":"&&S.charAt(b+1)==="=")return b+=2,M("operator",":=");if(j==="!"&&S.charAt(b+1)==="=")return b+=2,M("operator","!=");if(j===">"&&S.charAt(b+1)==="=")return b+=2,M("operator",">=");if(j==="<"&&S.charAt(b+1)==="=")return b+=2,M("operator","<=");if(j==="*"&&S.charAt(b+1)==="*")return b+=2,M("operator","**");if(j==="~"&&S.charAt(b+1)===">")return b+=2,M("operator","~>");if(j==="?"&&S.charAt(b+1)===":")return b+=2,M("operator","?:");if(j==="?"&&S.charAt(b+1)==="?")return b+=2,M("operator","??");if(Object.prototype.hasOwnProperty.call(d,j))return b++,M("operator",j);if(j==='"'||j==="'"){var V=j;b++;for(var q="";b<A;){if(j=S.charAt(b),j==="\\")if(b++,j=S.charAt(b),Object.prototype.hasOwnProperty.call(v,j))q+=v[j];else if(j==="u"){var O=S.substr(b+1,4);if(/^[0-9a-fA-F]+$/.test(O)){var B=parseInt(O,16);q+=String.fromCharCode(B),b+=4}else throw{code:"S0104",stack:new Error().stack,position:b}}else throw{code:"S0103",stack:new Error().stack,position:b,token:j};else{if(j===V)return b++,M("string",q);q+=j}b++}throw{code:"S0101",stack:new Error().stack,position:b}}var Z=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,ke=Z.exec(S.substring(b));if(ke!==null){var Te=parseFloat(ke[0]);if(!isNaN(Te)&&isFinite(Te))return b+=ke[0].length,M("number",Te);throw{code:"S0102",stack:new Error().stack,position:b,token:ke[0]}}var le;if(j==="`"){b++;var F=S.indexOf("`",b);if(F!==-1)return le=S.substring(b,F),b=F+1,M("name",le);throw b=A,{code:"S0105",stack:new Error().stack,position:b}}for(var ie=b,me;;)if(me=S.charAt(ie),ie===A||` 	
\r\v`.indexOf(me)>-1||Object.prototype.hasOwnProperty.call(d,me)){if(S.charAt(b)==="$")return le=S.substring(b+1,ie),b=ie,M("variable",le);switch(le=S.substring(b,ie),b=ie,le){case"or":case"in":case"and":return M("operator",le);case"true":return M("value",!0);case"false":return M("value",!1);case"null":return M("value",null);default:return b===A&&le===""?null:M("name",le)}}else ie++};return de},L=function(S,b){var A,M,J={},de=[],_e=function(){var y=[];A.id!=="(end)"&&y.push({type:A.type,value:A.value,position:A.position});for(var x=M();x!==null;)y.push(x),x=M();return y},j={nud:function(){var y={code:"S0211",token:this.value,position:this.position};if(b)return y.remaining=_e(),y.type="error",de.push(y),y;throw y.stack=new Error().stack,y}},$=function(y,x){var ue=J[y];return x=x||0,ue?x>=ue.lbp&&(ue.lbp=x):(ue=Object.create(j),ue.id=ue.value=y,ue.lbp=x,J[y]=ue),ue},V=function(y){if(b){y.remaining=_e(),de.push(y);var x=J["(error)"];return A=Object.create(x),A.error=y,A.type="(error)",A}else throw y.stack=new Error().stack,y},q=function(y,x){if(y&&A.id!==y){var ue;A.id==="(end)"?ue="S0203":ue="S0202";var Ae={code:ue,position:A.position,token:A.value,value:y};return V(Ae)}var Je=M(x);if(Je===null)return A=J["(end)"],A.position=S.length,A;var De=Je.value,T=Je.type,N;switch(T){case"name":case"variable":N=J["(name)"];break;case"operator":if(N=J[De],!N)return V({code:"S0204",stack:new Error().stack,position:Je.position,token:De});break;case"string":case"number":case"value":N=J["(literal)"];break;case"regex":T="regex",N=J["(regex)"];break;default:return V({code:"S0205",stack:new Error().stack,position:Je.position,token:De})}return A=Object.create(N),A.value=De,A.type=T,A.position=Je.position,A},O=function(y){var x,ue=A;for(q(null,!0),x=ue.nud();y<A.lbp;)ue=A,q(),x=ue.led(x);return x},B=function(y){var x=$(y,0);x.nud=function(){return this}},Z=function(y,x,ue){var Ae=x||d[y],Je=$(y,Ae);return Je.led=ue||function(De){return this.lhs=De,this.rhs=O(Ae),this.type="binary",this},Je},ke=function(y,x,ue){var Ae=$(y,x);return Ae.led=ue,Ae},Te=function(y,x){var ue=$(y);return ue.nud=x||function(){return this.expression=O(70),this.type="unary",this},ue};B("(end)"),B("(name)"),B("(literal)"),B("(regex)"),$(":"),$(";"),$(","),$(")"),$("]"),$("}"),$(".."),Z("."),Z("+"),Z("-"),Z("*"),Z("/"),Z("%"),Z("="),Z("<"),Z(">"),Z("!="),Z("<="),Z(">="),Z("&"),Z("and"),Z("or"),Z("in"),B("and"),B("or"),B("in"),Te("-"),Z("~>"),Z("??",d["??"],function(y){return this.type="condition",this.condition={type:"function",value:"(",procedure:{type:"variable",value:"exists"},arguments:[y]},this.then=y,this.else=O(0),this}),ke("(error)",10,function(y){return this.lhs=y,this.error=A.error,this.remaining=_e(),this.type="error",this}),Te("*",function(){return this.type="wildcard",this}),Te("**",function(){return this.type="descendant",this}),Te("%",function(){return this.type="parent",this}),Z("(",d["("],function(y){if(this.procedure=y,this.type="function",this.arguments=[],A.id!==")")for(;A.type==="operator"&&A.id==="?"?(this.type="partial",this.arguments.push(A),q("?")):this.arguments.push(O(0)),A.id===",";)q(",");if(q(")",!0),y.type==="name"&&(y.value==="function"||y.value==="λ")){if(this.arguments.forEach(function(De,T){if(De.type!=="variable")return V({code:"S0208",stack:new Error().stack,position:De.position,token:De.value,value:T+1})}),this.type="lambda",A.id==="<"){for(var x=A.position,ue=1,Ae="<";ue>0&&A.id!=="{"&&A.id!=="(end)";){var Je=q();Je.id===">"?ue--:Je.id==="<"&&ue++,Ae+=Je.value}q(">");try{this.signature=u(Ae)}catch(De){return De.position=x+De.offset,V(De)}}q("{"),this.body=O(0),q("}")}return this}),Te("(",function(){for(var y=[];A.id!==")"&&(y.push(O(0)),A.id===";");)q(";");return q(")",!0),this.type="block",this.expressions=y,this}),Te("[",function(){var y=[];if(A.id!=="]")for(;;){var x=O(0);if(A.id===".."){var ue={type:"binary",value:"..",position:A.position,lhs:x};q(".."),ue.rhs=O(0),x=ue}if(y.push(x),A.id!==",")break;q(",")}return q("]",!0),this.expressions=y,this.type="unary",this}),Z("[",d["["],function(y){if(A.id==="]"){for(var x=y;x&&x.type==="binary"&&x.value==="[";)x=x.lhs;return x.keepArray=!0,q("]"),y}else return this.lhs=y,this.rhs=O(d["]"]),this.type="binary",q("]",!0),this}),Z("^",d["^"],function(y){q("(");for(var x=[];;){var ue={descending:!1};if(A.id==="<"?q("<"):A.id===">"&&(ue.descending=!0,q(">")),ue.expression=O(0),x.push(ue),A.id!==",")break;q(",")}return q(")"),this.lhs=y,this.rhs=x,this.type="binary",this});var le=function(y){var x=[];if(A.id!=="}")for(;;){var ue=O(0);q(":");var Ae=O(0);if(x.push([ue,Ae]),A.id!==",")break;q(",")}return q("}",!0),typeof y>"u"?(this.lhs=x,this.type="unary"):(this.lhs=y,this.rhs=x,this.type="binary"),this};Te("{",le),Z("{",d["{"],le),ke(":=",d[":="],function(y){return y.type!=="variable"?V({code:"S0212",stack:new Error().stack,position:y.position,token:y.value}):(this.lhs=y,this.rhs=O(d[":="]-1),this.type="binary",this)}),Z("@",d["@"],function(y){return this.lhs=y,this.rhs=O(d["@"]),this.rhs.type!=="variable"?V({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),Z("#",d["#"],function(y){return this.lhs=y,this.rhs=O(d["#"]),this.rhs.type!=="variable"?V({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),Z("?",d["?"],function(y){return this.type="condition",this.condition=y,this.then=O(0),A.id===":"&&(q(":"),this.else=O(0)),this}),Z("?:",d["?:"],function(y){return this.type="condition",this.condition=y,this.then=y,this.else=O(0),this}),Te("|",function(){return this.type="transform",this.pattern=O(0),q("|"),this.update=O(0),A.id===","&&(q(","),this.delete=O(0)),q("|"),this});var F=function(y){var x;if(y.type==="function"&&!y.predicate){var ue={type:"lambda",thunk:!0,arguments:[],position:y.position};ue.body=y,x=ue}else if(y.type==="condition")y.then=F(y.then),typeof y.else<"u"&&(y.else=F(y.else)),x=y;else if(y.type==="block"){var Ae=y.expressions.length;Ae>0&&(y.expressions[Ae-1]=F(y.expressions[Ae-1])),x=y}else x=y;return x},ie=0,me=0,Ie=[],se=function(y,x){switch(y.type){case"name":case"wildcard":x.level--,x.level===0&&(typeof y.ancestor>"u"||(Ie[x.index].slot.label=y.ancestor.label),y.ancestor=x,y.tuple=!0);break;case"parent":x.level++;break;case"block":y.expressions.length>0&&(y.tuple=!0,x=se(y.expressions[y.expressions.length-1],x));break;case"path":y.tuple=!0;var ue=y.steps.length-1;for(x=se(y.steps[ue--],x);x.level>0&&ue>=0;)x=se(y.steps[ue--],x);break;default:throw{code:"S0217",token:y.type,position:y.position}}return x},ee=function(y,x){if(typeof x.seekingParent<"u"||x.type==="parent"){var ue=typeof x.seekingParent<"u"?x.seekingParent:[];x.type==="parent"&&ue.push(x.slot),typeof y.seekingParent>"u"?y.seekingParent=ue:Array.prototype.push.apply(y.seekingParent,ue)}},ae=function(y){var x=y.steps.length-1,ue=y.steps[x],Ae=typeof ue.seekingParent<"u"?ue.seekingParent:[];ue.type==="parent"&&Ae.push(ue.slot);for(var Je=0;Je<Ae.length;Je++){var De=Ae[Je];for(x=y.steps.length-2;De.level>0;){if(x<0){typeof y.seekingParent>"u"?y.seekingParent=[De]:y.seekingParent.push(De);break}for(var T=y.steps[x--];x>=0&&T.focus&&y.steps[x].focus;)T=y.steps[x--];De=se(T,De)}}},W=function(y){var x;switch(y.type){case"binary":switch(y.value){case".":var ue=W(y.lhs);ue.type==="path"?x=ue:x={type:"path",steps:[ue]},ue.type==="parent"&&(x.seekingParent=[ue.slot]);var Ae=W(y.rhs);Ae.type==="function"&&Ae.procedure.type==="path"&&Ae.procedure.steps.length===1&&Ae.procedure.steps[0].type==="name"&&x.steps[x.steps.length-1].type==="function"&&(x.steps[x.steps.length-1].nextFunction=Ae.procedure.steps[0].value),Ae.type==="path"?Array.prototype.push.apply(x.steps,Ae.steps):(typeof Ae.predicate<"u"&&(Ae.stages=Ae.predicate,delete Ae.predicate),x.steps.push(Ae)),x.steps.filter(function(re){if(re.type==="number"||re.type==="value")throw{code:"S0213",stack:new Error().stack,position:re.position,value:re.value};return re.type==="string"}).forEach(function(re){re.type="name"}),x.steps.filter(function(re){return re.keepArray===!0}).length>0&&(x.keepSingletonArray=!0);var Je=x.steps[0];Je.type==="unary"&&Je.value==="["&&(Je.consarray=!0);var De=x.steps[x.steps.length-1];De.type==="unary"&&De.value==="["&&(De.consarray=!0),ae(x);break;case"[":x=W(y.lhs);var T=x,N="predicate";if(x.type==="path"&&(T=x.steps[x.steps.length-1],N="stages"),typeof T.group<"u")throw{code:"S0209",stack:new Error().stack,position:y.position};typeof T[N]>"u"&&(T[N]=[]);var P=W(y.rhs);typeof P.seekingParent<"u"&&(P.seekingParent.forEach(re=>{re.level===1?se(T,re):re.level--}),ee(T,P)),T[N].push({type:"filter",expr:P,position:y.position});break;case"{":if(x=W(y.lhs),typeof x.group<"u")throw{code:"S0210",stack:new Error().stack,position:y.position};x.group={lhs:y.rhs.map(function(re){return[W(re[0]),W(re[1])]}),position:y.position};break;case"^":x=W(y.lhs),x.type!=="path"&&(x={type:"path",steps:[x]});var G={type:"sort",position:y.position};G.terms=y.rhs.map(function(re){var ve=W(re.expression);return ee(G,ve),{descending:re.descending,expression:ve}}),x.steps.push(G),ae(x);break;case":=":x={type:"bind",value:y.value,position:y.position},x.lhs=W(y.lhs),x.rhs=W(y.rhs),ee(x,x.rhs);break;case"@":if(x=W(y.lhs),T=x,x.type==="path"&&(T=x.steps[x.steps.length-1]),typeof T.stages<"u"||typeof T.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:y.position};if(T.type==="sort")throw{code:"S0216",stack:new Error().stack,position:y.position};y.keepArray&&(T.keepArray=!0),T.focus=y.rhs.value,T.tuple=!0;break;case"#":x=W(y.lhs),T=x,x.type==="path"?T=x.steps[x.steps.length-1]:(x={type:"path",steps:[x]},typeof T.predicate<"u"&&(T.stages=T.predicate,delete T.predicate)),typeof T.stages>"u"?T.index=y.rhs.value:T.stages.push({type:"index",value:y.rhs.value,position:y.position}),T.tuple=!0;break;case"~>":x={type:"apply",value:y.value,position:y.position},x.lhs=W(y.lhs),x.rhs=W(y.rhs),x.keepArray=x.lhs.keepArray||x.rhs.keepArray;break;default:x={type:y.type,value:y.value,position:y.position},x.lhs=W(y.lhs),x.rhs=W(y.rhs),ee(x,x.lhs),ee(x,x.rhs)}break;case"unary":x={type:y.type,value:y.value,position:y.position},y.value==="["?x.expressions=y.expressions.map(function(re){var ve=W(re);return ee(x,ve),ve}):y.value==="{"?x.lhs=y.lhs.map(function(re){var ve=W(re[0]);ee(x,ve);var $e=W(re[1]);return ee(x,$e),[ve,$e]}):(x.expression=W(y.expression),y.value==="-"&&x.expression.type==="number"?(x=x.expression,x.value=-x.value):ee(x,x.expression));break;case"function":case"partial":x={type:y.type,name:y.name,value:y.value,position:y.position},x.arguments=y.arguments.map(function(re){var ve=W(re);return ee(x,ve),ve}),x.procedure=W(y.procedure);break;case"lambda":x={type:y.type,arguments:y.arguments,signature:y.signature,position:y.position};var ne=W(y.body);x.body=F(ne);break;case"condition":x={type:y.type,position:y.position},x.condition=W(y.condition),ee(x,x.condition),x.then=W(y.then),ee(x,x.then),typeof y.else<"u"&&(x.else=W(y.else),ee(x,x.else));break;case"transform":x={type:y.type,position:y.position},x.pattern=W(y.pattern),x.update=W(y.update),typeof y.delete<"u"&&(x.delete=W(y.delete));break;case"block":x={type:y.type,position:y.position},x.expressions=y.expressions.map(function(re){var ve=W(re);return ee(x,ve),(ve.consarray||ve.type==="path"&&ve.steps[0].consarray)&&(x.consarray=!0),ve});break;case"name":x={type:"path",steps:[y]},y.keepArray&&(x.keepSingletonArray=!0);break;case"parent":x={type:"parent",slot:{label:"!"+ie++,level:1,index:me++}},Ie.push(x);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":x=y;break;case"operator":if(y.value==="and"||y.value==="or"||y.value==="in")y.type="name",x=W(y);else if(y.value==="?")x=y;else throw{code:"S0201",stack:new Error().stack,position:y.position,token:y.value};break;case"error":x=y,y.lhs&&(x=W(y.lhs));break;default:var X="S0206";y.id==="(end)"&&(X="S0207");var U={code:X,position:y.position,token:y.value};if(b)return de.push(U),{type:"error",error:U};throw U.stack=new Error().stack,U}return y.keepArray&&(x.keepArray=!0),x};M=C(S),q();var we=O(0);if(A.id!=="(end)"){var Le={code:"S0201",position:A.position,token:A.value};V(Le)}if(we=W(we),we.type==="parent"||typeof we.seekingParent<"u")throw{code:"S0217",token:we.type,position:we.position};return de.length>0&&(we.errors=de),we};return L})();s.exports=a},{"./signature":5}],5:[function(r,s,i){var u=r("./utils");const a=(()=>{var d={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function v(C){for(var L=1,S=[],b={},A=b;L<C.length;){var M=C.charAt(L);if(M===":")break;var J=function(){S.push(b),A=b,b={}},de=function(Z,ke,Te,le){for(var F=1,ie=ke;ie<Z.length;)if(ie++,M=Z.charAt(ie),M===le){if(F--,F===0)break}else M===Te&&F++;return ie};switch(M){case"s":case"n":case"b":case"l":case"o":b.regex="["+M+"m]",b.type=M,J();break;case"a":b.regex="[asnblfom]",b.type=M,b.array=!0,J();break;case"f":b.regex="f",b.type=M,J();break;case"j":b.regex="[asnblom]",b.type=M,J();break;case"x":b.regex="[asnblfom]",b.type=M,J();break;case"-":A.context=!0,A.contextRegex=new RegExp(A.regex),A.regex+="?";break;case"?":case"+":A.regex+=M;break;case"(":var _e=de(C,L,"(",")"),j=C.substring(L+1,_e);if(j.indexOf("<")===-1)b.regex="["+j+"m]";else throw{code:"S0402",stack:new Error().stack,value:j,offset:L};b.type="("+j+")",L=_e,J();break;case"<":if(A.type==="a"||A.type==="f"){var $=de(C,L,"<",">");A.subtype=C.substring(L+1,$),L=$}else throw{code:"S0401",stack:new Error().stack,value:A.type,offset:L};break}L++}var V="^"+S.map(function(Z){return"("+Z.regex+")"}).join("")+"$",q=new RegExp(V),O=function(Z){var ke;if(u.isFunction(Z))ke="f";else{var Te=typeof Z;switch(Te){case"string":ke="s";break;case"number":ke="n";break;case"boolean":ke="b";break;case"object":Z===null?ke="l":Array.isArray(Z)?ke="a":ke="o";break;case"undefined":default:ke="m"}}return ke},B=function(Z,ke){for(var Te="^",le=0,F=0;F<S.length;F++){Te+=S[F].regex;var ie=ke.match(Te);if(ie===null)throw{code:"T0410",stack:new Error().stack,value:Z[le],index:le+1};le=ie[0].length}throw{code:"T0410",stack:new Error().stack,value:Z[le],index:le+1}};return{definition:C,validate:function(Z,ke){var Te="";Z.forEach(function(me){Te+=O(me)});var le=q.exec(Te);if(le){var F=[],ie=0;return S.forEach(function(me,Ie){var se=Z[ie],ee=le[Ie+1];if(ee==="")if(me.context&&me.contextRegex){var ae=O(ke);if(me.contextRegex.test(ae))F.push(ke);else throw{code:"T0411",stack:new Error().stack,value:ke,index:ie+1}}else F.push(se),ie++;else ee.split("").forEach(function(W){if(me.type==="a"){if(W==="m")se=void 0;else{se=Z[ie];var we=!0;if(typeof me.subtype<"u"){if(W!=="a"&&ee!==me.subtype)we=!1;else if(W==="a"&&se.length>0){var Le=O(se[0]);if(Le!==me.subtype.charAt(0))we=!1;else{var y=se.filter(function(x){return O(x)!==Le});we=y.length===0}}}if(!we)throw{code:"T0412",stack:new Error().stack,value:se,index:ie+1,type:d[me.subtype]};W!=="a"&&(se=[se])}F.push(se),ie++}else F.push(se),ie++})}),F}B(Z,Te)}}}return v})();s.exports=a},{"./utils":6}],6:[function(r,s,i){const u=(()=>{function a($){var V=!1;if(typeof $=="number"&&(V=!isNaN($),V&&!isFinite($)))throw{code:"D1001",value:$,stack:new Error().stack};return V}function d($){var V=!1;return Array.isArray($)&&(V=$.filter(function(q){return typeof q!="string"}).length===0),V}function v($){var V=!1;return Array.isArray($)&&(V=$.filter(function(q){return!a(q)}).length===0),V}function C(){var $=[];return $.sequence=!0,arguments.length===1&&$.push(arguments[0]),$}function L($){return $.sequence===!0&&Array.isArray($)}function S($){return $&&($._jsonata_function===!0||$._jsonata_lambda===!0)||typeof $=="function"}function b($){var V=typeof $.arity=="number"?$.arity:typeof $.implementation=="function"?$.implementation.length:typeof $.length=="number"?$.length:$.arguments.length;return V}function A($){return $&&$._jsonata_lambda===!0}var M=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function J($){return typeof $=="object"&&$!==null&&M in $&&"next"in $&&typeof $.next=="function"}function de($,V){if($===V)return!0;if(typeof $=="object"&&typeof V=="object"&&$!==null&&V!==null){if(Array.isArray($)&&Array.isArray(V)){if($.length!==V.length)return!1;for(var q=0;q<$.length;q++)if(!de($[q],V[q]))return!1;return!0}var O=Object.getOwnPropertyNames($),B=Object.getOwnPropertyNames(V);if(O.length!==B.length)return!1;for(O=O.sort(),B=B.sort(),q=0;q<O.length;q++)if(O[q]!==B[q])return!1;for(q=0;q<O.length;q++){var Z=O[q];if(!de($[Z],V[Z]))return!1}return!0}return!1}function _e($){return typeof $=="object"&&$!==null&&"then"in $&&typeof $.then=="function"}function j($){var V=[];for(let q of $)V.push(q);return V}return{isNumeric:a,isArrayOfStrings:d,isArrayOfNumbers:v,createSequence:C,isSequence:L,isFunction:S,isLambda:A,isIterable:J,getFunctionArity:b,isDeepEqual:de,stringToArray:j,isPromise:_e}})();s.exports=u},{}]},{},[3])(3)})})(Pi)),Pi.exports}var pu=uu();const za=Qs(pu);var cr={exports:{}};const Xn=oo(lo),du="17.2.3",hu={version:du};var Hs;function fu(){if(Hs)return cr.exports;Hs=1;var t={};const e=Xn,r=Xn,s=Xn,i=Xn,a=hu.version,d=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function v(){return d[Math.floor(Math.random()*d.length)]}function C(F){return typeof F=="string"?!["false","0","no","off",""].includes(F.toLowerCase()):!!F}function L(){return process.stdout.isTTY}function S(F){return L()?`\x1B[2m${F}\x1B[0m`:F}const b=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function A(F){const ie={};let me=F.toString();me=me.replace(/\r\n?/mg,`
`);let Ie;for(;(Ie=b.exec(me))!=null;){const se=Ie[1];let ee=Ie[2]||"";ee=ee.trim();const ae=ee[0];ee=ee.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),ae==='"'&&(ee=ee.replace(/\\n/g,`
`),ee=ee.replace(/\\r/g,"\r")),ie[se]=ee}return ie}function M(F){F=F||{};const ie=V(F);F.path=ie;const me=le.configDotenv(F);if(!me.parsed){const ae=new Error(`MISSING_DATA: Cannot parse ${ie} for an unknown reason`);throw ae.code="MISSING_DATA",ae}const Ie=j(F).split(","),se=Ie.length;let ee;for(let ae=0;ae<se;ae++)try{const W=Ie[ae].trim(),we=$(me,W);ee=le.decrypt(we.ciphertext,we.key);break}catch(W){if(ae+1>=se)throw W}return le.parse(ee)}function J(F){console.error(`[dotenv@${a}][WARN] ${F}`)}function de(F){console.log(`[dotenv@${a}][DEBUG] ${F}`)}function _e(F){console.log(`[dotenv@${a}] ${F}`)}function j(F){return F&&F.DOTENV_KEY&&F.DOTENV_KEY.length>0?F.DOTENV_KEY:t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:""}function $(F,ie){let me;try{me=new URL(ie)}catch(W){if(W.code==="ERR_INVALID_URL"){const we=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw we.code="INVALID_DOTENV_KEY",we}throw W}const Ie=me.password;if(!Ie){const W=new Error("INVALID_DOTENV_KEY: Missing key part");throw W.code="INVALID_DOTENV_KEY",W}const se=me.searchParams.get("environment");if(!se){const W=new Error("INVALID_DOTENV_KEY: Missing environment part");throw W.code="INVALID_DOTENV_KEY",W}const ee=`DOTENV_VAULT_${se.toUpperCase()}`,ae=F.parsed[ee];if(!ae){const W=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${ee} in your .env.vault file.`);throw W.code="NOT_FOUND_DOTENV_ENVIRONMENT",W}return{ciphertext:ae,key:Ie}}function V(F){let ie=null;if(F&&F.path&&F.path.length>0)if(Array.isArray(F.path))for(const me of F.path)e.existsSync(me)&&(ie=me.endsWith(".vault")?me:`${me}.vault`);else ie=F.path.endsWith(".vault")?F.path:`${F.path}.vault`;else ie=r.resolve(process.cwd(),".env.vault");return e.existsSync(ie)?ie:null}function q(F){return F[0]==="~"?r.join(s.homedir(),F.slice(1)):F}function O(F){const ie=C(t.DOTENV_CONFIG_DEBUG||F&&F.debug),me=C(t.DOTENV_CONFIG_QUIET||F&&F.quiet);(ie||!me)&&_e("Loading env from encrypted .env.vault");const Ie=le._parseVault(F);let se=t;return F&&F.processEnv!=null&&(se=F.processEnv),le.populate(se,Ie,F),{parsed:Ie}}function B(F){const ie=r.resolve(process.cwd(),".env");let me="utf8",Ie=t;F&&F.processEnv!=null&&(Ie=F.processEnv);let se=C(Ie.DOTENV_CONFIG_DEBUG||F&&F.debug),ee=C(Ie.DOTENV_CONFIG_QUIET||F&&F.quiet);F&&F.encoding?me=F.encoding:se&&de("No encoding is specified. UTF-8 is used by default");let ae=[ie];if(F&&F.path)if(!Array.isArray(F.path))ae=[q(F.path)];else{ae=[];for(const y of F.path)ae.push(q(y))}let W;const we={};for(const y of ae)try{const x=le.parse(e.readFileSync(y,{encoding:me}));le.populate(we,x,F)}catch(x){se&&de(`Failed to load ${y} ${x.message}`),W=x}const Le=le.populate(Ie,we,F);if(se=C(Ie.DOTENV_CONFIG_DEBUG||se),ee=C(Ie.DOTENV_CONFIG_QUIET||ee),se||!ee){const y=Object.keys(Le).length,x=[];for(const ue of ae)try{const Ae=r.relative(process.cwd(),ue);x.push(Ae)}catch(Ae){se&&de(`Failed to load ${ue} ${Ae.message}`),W=Ae}_e(`injecting env (${y}) from ${x.join(",")} ${S(`-- tip: ${v()}`)}`)}return W?{parsed:we,error:W}:{parsed:we}}function Z(F){if(j(F).length===0)return le.configDotenv(F);const ie=V(F);return ie?le._configVault(F):(J(`You set DOTENV_KEY but you are missing a .env.vault file at ${ie}. Did you forget to build it?`),le.configDotenv(F))}function ke(F,ie){const me=Buffer.from(ie.slice(-64),"hex");let Ie=Buffer.from(F,"base64");const se=Ie.subarray(0,12),ee=Ie.subarray(-16);Ie=Ie.subarray(12,-16);try{const ae=i.createDecipheriv("aes-256-gcm",me,se);return ae.setAuthTag(ee),`${ae.update(Ie)}${ae.final()}`}catch(ae){const W=ae instanceof RangeError,we=ae.message==="Invalid key length",Le=ae.message==="Unsupported state or unable to authenticate data";if(W||we){const y=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw y.code="INVALID_DOTENV_KEY",y}else if(Le){const y=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw y.code="DECRYPTION_FAILED",y}else throw ae}}function Te(F,ie,me={}){const Ie=!!(me&&me.debug),se=!!(me&&me.override),ee={};if(typeof ie!="object"){const ae=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw ae.code="OBJECT_REQUIRED",ae}for(const ae of Object.keys(ie))Object.prototype.hasOwnProperty.call(F,ae)?(se===!0&&(F[ae]=ie[ae],ee[ae]=ie[ae]),Ie&&de(se===!0?`"${ae}" is already defined and WAS overwritten`:`"${ae}" is already defined and was NOT overwritten`)):(F[ae]=ie[ae],ee[ae]=ie[ae]);return ee}const le={configDotenv:B,_configVault:O,_parseVault:M,config:Z,decrypt:ke,parse:A,populate:Te};return cr.exports.configDotenv=le.configDotenv,cr.exports._configVault=le._configVault,cr.exports._parseVault=le._parseVault,cr.exports.config=le.config,cr.exports.decrypt=le.decrypt,cr.exports.parse=le.parse,cr.exports.populate=le.populate,cr.exports=le,cr.exports}var mu=fu();const ds=async t=>{const r=await(await Dt.getWorkspace()).getResource(t);return r||Ke("Invalid URL: "+t),await r.getContents({uri:!0})},Ua=t=>t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:"),hs={},di=async(t,e)=>{const r=await za(`[**[${e}!='']]`).evaluate(t);for(const s of r){const i=s[e];if(Ua(i))continue;const u=await ds(i);hs[u]=s[e],s[e]=u}},Cn=t=>hs[t],Bi=async(t,e)=>{const r=await za(`[**[${e}!='']]`).evaluate(t);for(const s of r){const i=s[e];!i||!i.startsWith("blob:")||(s[e]=hs[i])}},ja=t=>{Ye.registerContribution("catalog.root",{label:t.label,icon:t.icon,contributionId:t.contributionId});const e=t.contributionId??t.label;t.items?.forEach(r=>{Ye.registerContribution(e,{label:r.label,icon:r.icon,contributionId:r.contributionId});const i=import.meta.resolve("/.");r.items.forEach(u=>{const a={label:u.label,icon:u.icon,state:{...u.state}};a.state?.url&&(a.state.url=a.state.url.replace("${baseURL}/",i)),Ye.registerContribution(r.contributionId,a)})})},Wi=t=>{Object.entries(t).forEach(([e,r])=>{const s=/\${([a-zA-Z0-9_]+)}/g;t[e]=r.replace(s,(i,u)=>{const a=t[u];return a!==void 0?a:i})})},Ba=async(...t)=>{const e=await Dt.getWorkspace(),r={};for(const s of t){const i=await e?.getResource(s);if(!i)continue;const u=await i.getContents(),a=mu.parse(u||"");Wi(a),Object.assign(r,a)}return Wi(r),r},gu=Object.freeze(Object.defineProperty({__proto__:null,getOriginalUri:Cn,isAbsoluteResource:Ua,loadEnvs:Ba,registerCatalog:ja,replaceUris:di,replaceVars:Wi,revertBlobUris:Bi,toBlobUri:ds},Symbol.toStringTag,{value:"Module"}));co.resolveUrl=t=>ds(t);Cr.registerEditorInputHandler({canHandle:t=>t instanceof sn&&t.getName().endsWith(".geospace"),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return e.widgetFactory=r=>z`
            <gs-map id="${r}" .input="${e}"></gs-map>`,e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vu=ea(class extends ta{constructor(){super(...arguments),this.key=Rt}render(t,e){return this.key=t,e}update(t,[e,r]){return e!==this.key&&(ra(t),this.key=e),r}});function en(t,e){return t.layers.find(r=>r.uuid===e)}function tn(t,e){return t.layers.findIndex(r=>r.uuid===e)}function yu(t,e){return t.controls.findIndex(r=>r.uuid===e)}function bu(t,e){return t.overlays.findIndex(r=>r.uuid===e)}const wu=t=>new Proxy({},{get:(e,r)=>async(...s)=>{for(const i of t)await i[r](...s)}});var Jt=(t=>(t[t.LOADED=0]="LOADED",t[t.LAYER_ADDED=1]="LAYER_ADDED",t[t.LAYER_DELETED=2]="LAYER_DELETED",t[t.LAYER_UPDATED=3]="LAYER_UPDATED",t[t.FEATURE_SELECTED=4]="FEATURE_SELECTED",t))(Jt||{});const pr=Wr(Qo),xu=`:root,
:host {
  --ol-background-color: white;
  --ol-accent-background-color: #F5F5F5;
  --ol-subtle-background-color: rgba(128, 128, 128, 0.25);
  --ol-partial-background-color: rgba(255, 255, 255, 0.75);
  --ol-foreground-color: #333333;
  --ol-subtle-foreground-color: #666666;
  --ol-brand-color: #00AAFF;
}

.ol-box {
  box-sizing: border-box;
  border-radius: 2px;
  border: 1.5px solid var(--ol-background-color);
  background-color: var(--ol-partial-background-color);
}

.ol-mouse-position {
  top: 8px;
  right: 8px;
  position: absolute;
}

.ol-scale-line {
  background: var(--ol-partial-background-color);
  border-radius: 4px;
  bottom: 8px;
  left: 8px;
  padding: 2px;
  position: absolute;
}

.ol-scale-line-inner {
  border: 1px solid var(--ol-subtle-foreground-color);
  border-top: none;
  color: var(--ol-foreground-color);
  font-size: 10px;
  text-align: center;
  margin: 1px;
  will-change: contents, width;
  transition: all 0.25s;
}

.ol-scale-bar {
  position: absolute;
  bottom: 8px;
  left: 8px;
}

.ol-scale-bar-inner {
  display: flex;
}

.ol-scale-step-marker {
  width: 1px;
  height: 15px;
  background-color: var(--ol-foreground-color);
  float: right;
  z-index: 10;
}

.ol-scale-step-text {
  position: absolute;
  bottom: -5px;
  font-size: 10px;
  z-index: 11;
  color: var(--ol-foreground-color);
  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);
}

.ol-scale-text {
  position: absolute;
  font-size: 12px;
  text-align: center;
  bottom: 25px;
  color: var(--ol-foreground-color);
  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);
}

.ol-scale-singlebar {
  position: relative;
  height: 10px;
  z-index: 9;
  box-sizing: border-box;
  border: 1px solid var(--ol-foreground-color);
}

.ol-scale-singlebar-even {
  background-color: var(--ol-subtle-foreground-color);
}

.ol-scale-singlebar-odd {
  background-color: var(--ol-background-color);
}

.ol-unsupported {
  display: none;
}

.ol-viewport,
.ol-unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.ol-viewport canvas {
  all: unset;
  overflow: hidden;
}

.ol-viewport {
  touch-action: pan-x pan-y;
}

.ol-selectable {
  -webkit-touch-callout: default;
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text;
}

.ol-grabbing {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}

.ol-grab {
  cursor: move;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}

.ol-control {
  position: absolute;
  background-color: var(--ol-subtle-background-color);
  border-radius: 4px;
}

.ol-zoom {
  top: .5em;
  left: .5em;
}

.ol-rotate {
  top: .5em;
  right: .5em;
  transition: opacity .25s linear, visibility 0s linear;
}

.ol-rotate.ol-hidden {
  opacity: 0;
  visibility: hidden;
  transition: opacity .25s linear, visibility 0s linear .25s;
}

.ol-zoom-extent {
  top: 4.643em;
  left: .5em;
}

.ol-full-screen {
  right: .5em;
  top: .5em;
}

.ol-control button {
  display: block;
  margin: 1px;
  padding: 0;
  color: var(--ol-subtle-foreground-color);
  font-weight: bold;
  text-decoration: none;
  font-size: inherit;
  text-align: center;
  height: 1.375em;
  width: 1.375em;
  line-height: .4em;
  background-color: var(--ol-background-color);
  border: none;
  border-radius: 2px;
}

.ol-control button::-moz-focus-inner {
  border: none;
  padding: 0;
}

.ol-zoom-extent button {
  line-height: 1.4em;
}

.ol-compass {
  display: block;
  font-weight: normal;
  will-change: transform;
}

.ol-touch .ol-control button {
  font-size: 1.5em;
}

.ol-touch .ol-zoom-extent {
  top: 5.5em;
}

.ol-control button:hover,
.ol-control button:focus {
  text-decoration: none;
  outline: 1px solid var(--ol-subtle-foreground-color);
  color: var(--ol-foreground-color);
}

.ol-zoom .ol-zoom-in {
  border-radius: 2px 2px 0 0;
}

.ol-zoom .ol-zoom-out {
  border-radius: 0 0 2px 2px;
}

.ol-attribution {
  text-align: right;
  bottom: .5em;
  right: .5em;
  max-width: calc(100% - 1.3em);
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
}

.ol-attribution a {
  color: var(--ol-subtle-foreground-color);
  text-decoration: none;
}

.ol-attribution ul {
  margin: 0;
  padding: 1px .5em;
  color: var(--ol-foreground-color);
  text-shadow: 0 0 2px var(--ol-background-color);
  font-size: 12px;
}

.ol-attribution li {
  display: inline;
  list-style: none;
}

.ol-attribution li:not(:last-child):after {
  content: " ";
}

.ol-attribution img {
  max-height: 2em;
  max-width: inherit;
  vertical-align: middle;
}

.ol-attribution button {
  flex-shrink: 0;
}

.ol-attribution.ol-collapsed ul {
  display: none;
}

.ol-attribution:not(.ol-collapsed) {
  background: var(--ol-partial-background-color);
}

.ol-attribution.ol-uncollapsible {
  bottom: 0;
  right: 0;
  border-radius: 4px 0 0;
}

.ol-attribution.ol-uncollapsible img {
  margin-top: -.2em;
  max-height: 1.6em;
}

.ol-attribution.ol-uncollapsible button {
  display: none;
}

.ol-zoomslider {
  top: 4.5em;
  left: .5em;
  height: 200px;
}

.ol-zoomslider button {
  position: relative;
  height: 10px;
}

.ol-touch .ol-zoomslider {
  top: 5.5em;
}

.ol-overviewmap {
  left: 0.5em;
  bottom: 0.5em;
}

.ol-overviewmap.ol-uncollapsible {
  bottom: 0;
  left: 0;
  border-radius: 0 4px 0 0;
}

.ol-overviewmap .ol-overviewmap-map,
.ol-overviewmap button {
  display: block;
}

.ol-overviewmap .ol-overviewmap-map {
  border: 1px solid var(--ol-subtle-foreground-color);
  height: 150px;
  width: 150px;
}

.ol-overviewmap:not(.ol-collapsed) button {
  bottom: 0;
  left: 0;
  position: absolute;
}

.ol-overviewmap.ol-collapsed .ol-overviewmap-map,
.ol-overviewmap.ol-uncollapsible button {
  display: none;
}

.ol-overviewmap:not(.ol-collapsed) {
  background: var(--ol-subtle-background-color);
}

.ol-overviewmap-box {
  border: 1.5px dotted var(--ol-subtle-foreground-color);
}

.ol-overviewmap .ol-overviewmap-box:hover {
  cursor: move;
}

.ol-overviewmap .ol-viewport:hover {
  cursor: pointer;
}
`,Iu="iframe-map-renderer.html";class ku{constructor(e,r){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=r,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(r,s){return async(...i)=>await e.sendMessage(s,{...i})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=Iu,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}getViewExtent(){return[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(e){this.onSyncCallback&&this.onSyncCallback(e)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,r){try{const{toBlobUri:s}=await ht(async()=>{const{toBlobUri:u}=await Promise.resolve().then(()=>gu);return{toBlobUri:u}},void 0),i=await s(r);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:i},"*")}catch(s){this.iframe.contentWindow.postMessage({id:e,success:!1,error:s instanceof Error?s.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{if(e.source!==this.iframe?.contentWindow)return;const{id:r,result:s,error:i,type:u,event:a}=e.data;if(r!==void 0&&this.pendingMessages.has(r)){const{resolve:d,reject:v}=this.pendingMessages.get(r);this.pendingMessages.delete(r),i?v(new Error(i)):d(s)}u==="dirty"?this.onDirtyCallback?.():u==="sync"?this.onSyncCallback?.(a):u==="iframeClicked"?this.onClickCallback?.():u==="resolveAsset"&&this.handleAssetResolution(r,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const r=s=>{s.source===this.iframe?.contentWindow&&s.data.type==="rendererReady"&&(window.removeEventListener("message",r),e())};window.addEventListener("message",r)})}async sendMessage(e,r){if(!this.iframe)throw new Error("Iframe not initialized");const s=++this.messageId;return new Promise((i,u)=>{this.pendingMessages.set(s,{resolve:i,reject:u}),this.iframe.contentWindow.postMessage({id:s,method:e,params:r},"*"),setTimeout(()=>{this.pendingMessages.has(s)&&(this.pendingMessages.delete(s),u(new Error("Message timeout")))},5e3)})}}class Su{constructor(e,r){this.gsMap=e,this.renderer=r}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,r){r?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){const r=tn(this.gsMap,e);r>=0&&(this.gsMap.layers.splice(r,1),this.triggerDirty())}async renameLayer(e,r){const s=en(this.gsMap,e);s&&(s.name=r,this.triggerDirty())}async moveLayer(e,r){const s=tn(this.gsMap,e);if(s<0)return;let i;if(r){if(i=tn(this.gsMap,r),i<0||s===i)return}else i=s>0?s-1:s+1;if(i>=0&&i<this.gsMap.layers.length&&s!==i){const[u]=this.gsMap.layers.splice(s,1);this.gsMap.layers.splice(i,0,u),this.triggerDirty()}}async setLayerVisible(e,r){const s=en(this.gsMap,e);s&&(s.visible=r,this.triggerDirty())}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){const r=yu(this.gsMap,e);r>=0&&(this.gsMap.controls.splice(r,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(e,r){this.gsMap.overlays.push({src:e,position:r||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){const r=bu(this.gsMap,e);r>=0&&(this.gsMap.overlays.splice(r,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(e,r){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class Au{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,r){pr.set({part:this.source,event:Jt.LAYER_ADDED})}async deleteLayer(e){pr.set({part:this.source,event:Jt.LAYER_DELETED})}async renameLayer(e,r){pr.set({part:this.source,event:Jt.LAYER_UPDATED})}async moveLayer(e,r){pr.set({part:this.source,event:Jt.LAYER_UPDATED})}async setLayerVisible(e,r){}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,r){}async removeOverlay(e){}async enableDrawing(e,r){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){pr.set({part:this.source,event:Jt.LAYER_UPDATED})}}var Eu=Object.defineProperty,_u=Object.getOwnPropertyDescriptor,Wn=(t,e,r,s)=>{for(var i=s>1?void 0:s?_u(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Eu(e,r,i),i};const Cu=Dn("GsMapEditor");let It=class extends _t{constructor(){super(),this.mapContainer=zr(),this.isFirstConnection=!0,this.interactionMode="none",this.chatContext={history:[]},this.commandStack=new pa}getOperations(){return this.operations}onMapChanged({part:t,event:e}){t===this&&(e===Jt.LAYER_ADDED||e===Jt.LAYER_DELETED||e===Jt.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const e=this.getGsMap()?.layers.filter(s=>{const i=s.type===xs.VECTOR,u=s.source?.type===rr.Features;return i&&u})||[],r=this.activeDrawingLayerUuid!==void 0;return z`
            <k-command cmd="zoom_in" icon="magnifying-glass-plus" title="Zoom in"></k-command>
            <k-command cmd="zoom_out" icon="magnifying-glass-minus" title="Zoom out"></k-command>
            <k-command cmd="reset_view" icon="house" title="Reset view"></k-command>
            <k-command cmd="refresh_map" icon="rotate" title="Refresh map"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command cmd="toggle_color_mode" icon="circle-half-stroke" title="Toggle dark/light mode"></k-command>
            <k-command cmd="toggle_mobile_view" icon="mobile" title="Toggle mobile view"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-action icon="plus" 
                      title="Create Drawing Layer"
                      .action=${()=>this.handleCreateDrawingLayer()}>
            </k-action>
            
            ${Wt(e.length>0,()=>{const s=e.map(i=>`${i.uuid}:${i.name}`).join("|");return z`
                ${vu(s,z`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${i=>{const u=i.target.value||void 0;this.activeDrawingLayerUuid=u,(u===void 0||i.target.value==="")&&(this.operations?.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${e.map(i=>z`
                            <wa-option value="${i.uuid}">${i.name||"Layer"}</wa-option>
                        `)}
                    </wa-select>
                `)}
                
                <k-action icon="location-dot" 
                          title="Draw Point"
                          ?disabled=${!r}
                          .action=${()=>this.handleDrawPoint()}>
                </k-action>
                <k-action icon="minus" 
                          title="Draw LineString"
                          ?disabled=${!r}
                          .action=${()=>this.handleDrawLine()}>
                </k-action>
                <k-action icon="draw-polygon" 
                          title="Draw Polygon"
                          ?disabled=${!r}
                          .action=${()=>this.handleDrawPolygon()}>
                </k-action>
                
                <k-action icon="trash" 
                          title="Delete Selected Features"
                          ?disabled=${this.interactionMode!=="select"}
                          .action=${()=>this.handleDeleteSelected()}>
                </k-action>

                <wa-divider orientation="vertical"></wa-divider>
            `})}
            
            <k-action icon="hand-pointer" 
                      title="Select Features"
                      .action=${()=>this.handleSelectFeatures()}>
            </k-action>

            <wa-divider orientation="vertical"></wa-divider>
        `}async connectedCallback(){if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}this.renderer?.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Ue.set(this)}))}async doInitUI(){const t=this.input?.data,e=await Ba(".env","envs/.env","env","envs/env","default.env","envs/default.env","dev.env","envs/dev.env");e.BUILD_TIME=new Date;const r=await t.getContents();let s=r&&r.trim()?JSON.parse(r):ia;s=this.migrateGsMap(s),Is(s),await di(s,"url"),await di(s,"src"),this.gsMap=s,s.view&&(this.initialView={center:[...s.view.center],zoom:s.view.zoom}),this.renderer=new ku(s,e);const i=this.renderer.getOperations(),u=new Su(s,this.renderer),a=new Au(this);this.operations=wu([u,i,a]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(d=>{if(this.gsMap){switch(d.type){case"viewChanged":this.gsMap.view.center=d.view.center,this.gsMap.view.zoom=d.view.zoom,d.view.rotation!==void 0&&d.view.rotation!==0&&(this.gsMap.view.rotation=d.view.rotation);break;case"featuresChanged":const v=en(this.gsMap,d.layerUuid);v&&v.source?.type===rr.Features&&(v.source.features=d.features);break;case"featureSelected":const C={feature:d.feature,layerUuid:d.layerUuid,metrics:d.metrics};console.info("Feature metrics:",C.metrics),pr.set({part:this,event:Jt.FEATURE_SELECTED,payload:C});break;case"featureDeselected":console.info("Feature deselected"),pr.set({part:this,event:Jt.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),this.renderer.setOnClick?.(()=>{Ue.set(this)}),this.updateToolbar(),pr.set({part:this,event:Jt.LOADED})}catch(d){console.error("Failed to render map:",d),Ke(`Failed to render map: ${d.message}`)}}migrateGsMap(t){const e={...t};let r=!1;return t.view||(console.log("Creating view field and migrating old properties..."),r=!0,e.view={},t.center!==void 0&&(e.view.center=t.center,delete e.center),t.zoom!==void 0&&(e.view.zoom=t.zoom,delete e.zoom),t.projection!==void 0&&(e.view.projection=t.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857")),(!t.styles||Object.keys(t.styles).length===0)&&(console.log("Adding default styles to map..."),r=!0,e.styles={...po}),(!t.styleRules||t.styleRules.length===0)&&(console.log("Adding default style rules to map..."),r=!0,e.styleRules=[...ho]),r&&console.log("Map migration completed"),e}getGsMap(){return this.gsMap}async save(){if(!this.renderer){Ke("Map not initialized");return}try{if(!this.gsMap){Ke("Map not initialized");return}const t=JSON.parse(JSON.stringify(this.gsMap));await Bi(t,"url"),await Bi(t,"src"),this.input?.data.saveContents(JSON.stringify(t,null,2)),this.markDirty(!1)}catch(t){Ke(`Save failed: ${t.message}`)}}get mapOperations(){return this.operations}edit(){qt("not yet implemented")}async refresh(){if(!this.renderer){Cu.error("Map not initialized");return}await this.renderer.modelToUI()}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Point",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("LineString",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Polygon",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){await this.operations?.enableFeatureSelection(),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){if(this.interactionMode==="select")try{await this.operations?.deleteSelectedFeatures(),qt("Selected features deleted")}catch(t){Ke(t.message)}}async handleCreateDrawingLayer(){if(!this.gsMap){Ke("Map not initialized");return}const t=await Fn("Enter name for new drawing layer:","Drawing Layer");if(!t)return;const e=Is({name:t,type:xs.VECTOR,source:{type:rr.Features,features:[]},visible:!0});await this.operations?.addLayer(e,!1);const r=this.gsMap?.layers.find(s=>s.uuid===e.uuid);r?.uuid&&(this.activeDrawingLayerUuid=r.uuid),await this.updateComplete,this.updateToolbar(),qt(`Created drawing layer: ${t}`)}doClose(){this.renderer?.destroy(),this.renderer=void 0,this.input=void 0}render(){return z`
            <div class="gc-map-container" ${Ur(this.mapContainer)}>
            </div>
        `}};It.styles=[uo(xu),$t`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .gc-map-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
        }
    `];Wn([ze({attribute:!1})],It.prototype,"input",2);Wn([ze({type:String})],It.prototype,"activeDrawingLayerUuid",2);Wn([ze({type:String})],It.prototype,"interactionMode",2);Wn([bi(pr)],It.prototype,"onMapChanged",1);It=Wn([gt("gs-map")],It);var Ou=Object.defineProperty,Tu=Object.getOwnPropertyDescriptor,Ii=(t,e,r,s)=>{for(var i=s>1?void 0:s?Tu(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Ou(e,r,i),i};let cn=class extends _t{onPartChanged(t){t==this||t==this.mapEditor||!(t instanceof It)||(this.mapEditor=t,this.updateLater())}onMapChanged({part:t}){t==this.mapEditor&&this.updateLater()}toggleVisible(t){const e=this.mapEditor.getGsMap(),r=en(e,t);if(!r)return;const i=!(r.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(t,i),this.updateLater()}async confirmAction(t,e){await pn(t)&&e()}selectLayer(t){this.selectedLayerUuid=t,this.updateToolbar(),this.updateContextMenu()}renameLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const r=this.mapEditor.getGsMap();if(!en(r,e))return;const i=tn(r,e),u=Pe.createExecutionContext(this,{index:i+1});u.activeEditor=this.mapEditor,Pe.execute("rename_layer",u)}deleteLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const r=this.mapEditor.getGsMap(),s=en(r,e);s&&this.confirmAction(`Delete layer "${s.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(e)))}moveLayerUp(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const r=tn(e,t);if(r<=0)return;const s=e.layers[r-1]?.uuid;s&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(t,s)),this.selectedLayerUuid=s)}moveLayerDown(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const r=tn(e,t);if(r<0||r>=e.layers.length-1)return;const s=e.layers[r+1]?.uuid;s&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(t,s)),this.selectedLayerUuid=s)}renderToolbar(){const t=this.selectedLayerUuid!==void 0;return z`
            <k-action ?disabled=${!t} 
                      title="Rename selected layer" 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
            </k-action>
            <k-action ?disabled=${!t} 
                      title="Delete selected layer" 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
            </k-action>
        `}renderContextMenu(){const t=this.selectedLayerUuid!==void 0;return z`
            <k-action ?disabled=${!t} 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
                Rename
            </k-action>
            <k-action ?disabled=${!t} 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
                Delete
            </k-action>
        `}render(){return Wt(!this.mapEditor,()=>z`
                    <k-no-content message="Select a map."></k-no-content>`,()=>z`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((t,e)=>z`
                            <wa-tree-item @click="${()=>t.uuid&&this.selectLayer(t.uuid)}" 
                                          class="${this.selectedLayerUuid===t.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${t.name??`Layer ${e+1}`}${e==0?z`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-action size="small"
                                                  icon="${t.visible!==!1?"eye":"eye-slash"}"
                                                  title="${t.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>t.uuid&&this.toggleVisible(t.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${e===0}"
                                                  .action=${()=>t.uuid&&this.moveLayerUp(t.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${e===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>t.uuid&&this.moveLayerDown(t.uuid)}>
                                        </k-action>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(t=>z`
                            <wa-tree-item>
                                <span>${Cn(t.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{t.uuid&&this.confirmAction(`Delete control "${Cn(t.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(t.uuid)))}}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(t=>z`
                            <wa-tree-item>
                                <span>${Cn(t.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{t.uuid&&this.confirmAction(`Delete overlay "${Cn(t.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(t.uuid)))}}>
                                </k-action>
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
            `)}};cn.styles=$t`
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
    `;Ii([et()],cn.prototype,"selectedLayerUuid",2);Ii([bi(Ue)],cn.prototype,"onPartChanged",1);Ii([bi(pr)],cn.prototype,"onMapChanged",1);cn=Ii([gt("gs-map-props")],cn);var Pu=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,Wa=(t,e,r,s)=>{for(var i=s>1?void 0:s?Lu(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&Pu(e,r,i),i};const Ru="catalog.root";let Or=class extends _t{constructor(){super(...arguments),this.treeRef=zr()}doBeforeUI(){const t=Ye.getContributions(Ru);this.rootNodes=this.toTreeNodes(t)}renderToolbar(){const t=Ue.get()instanceof Or&&Vt.get()!==void 0;return z`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!t} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(t){return t.map(e=>{const r={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const s=Ye.getContributions(e.contributionId);r.leaf=s.length===0,r.children=this.toTreeNodes(s)}return r})}onItemDblClicked(t){const e=t.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(t){const e=t.detail.selection[0].model;Vt.set(e.data)}setAllExpanded(t){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(r=>{r.expanded=t})}refresh(){this.requestUpdate()}createTreeItems(t,e=!1){return t?z`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${t} ?expanded=${e}>
                <span><k-icon name="${t.icon}"></k-icon> ${t.label}</span>
                ${t.children?.map(r=>this.createTreeItems(r))}
            </wa-tree-item>`:z``}render(){return z`
            <wa-tree ${Ur(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${this.rootNodes?.map(t=>this.createTreeItems(t,!0))}
            </wa-tree>
        `}};Or.styles=$t`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;Wa([et()],Or.prototype,"rootNodes",2);Or=Wa([gt("gs-catalog")],Or);const $u="geo!space catalog",Du="earth",Nu="catalog.root.geospace",Mu=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],Fu={label:$u,icon:Du,contributionId:Nu,items:Mu};ct({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async t=>{let e=t.params&&t.params.url;if(!e){const s=Vt.get();if(!s||!("url"in s))return;e=s.url}const r=await Dt.getWorkspace();if(!r){Ke("No workspace selected.");return}fetch(e,{method:"GET"}).then(s=>s.blob()).then(s=>{const i=new URL(e).pathname.split("/"),u=i[i.length-1];return r.getResource(u,{create:!0}).then(a=>a.saveContents(s,{contentType:$a.BINARY}).then(()=>{qt("File checked out: "+u)}))}).catch(s=>{Ke(s)})}}});ct({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async t=>{const e=Ue.get();e instanceof Or&&e.refresh()}}});ct({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Ue.get();e instanceof Or&&e.setAllExpanded(!0)}}});ct({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Ue.get();e instanceof Or&&e.setAllExpanded(!1)}}});ja(Fu);const qu=Dn("GsCommandHandlers"),xr=t=>t.activeEditor instanceof It,Hr=t=>{const e=t.activeEditor;if(!(e instanceof It)||!e.getOperations())throw qu.error("GsMapEditor with renderer not available in context.source"),new Error("GsMapEditor with renderer not available in context.source");return e.getOperations()};Pe.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level, an interger between 0 and 12",required:!0}]},handler:{canExecute:xr,execute:async t=>{await Hr(t).setZoom(Number(t.params.zoom).valueOf())}}});Pe.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[]},handler:{canExecute:t=>Ue.get()instanceof It,execute:async t=>{const e=Ue.get(),r=e.getGsMap();r?.view?.zoom!==void 0&&await e.mapOperations?.setZoom(r.view.zoom+1)}}});Pe.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[]},handler:{canExecute:t=>Ue.get()instanceof It,execute:async t=>{const e=Ue.get(),r=e.getGsMap();r?.view?.zoom!==void 0&&await e.mapOperations?.setZoom(r.view.zoom-1)}}});Pe.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the map",required:!0},{name:"lon",description:"the longitude of the map",required:!0}]},handler:{canExecute:xr,execute:async t=>{const e=Hr(t),r=fo([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]);await e.setCenter([r[0],r[1]])}}});Pe.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(rr).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:xr,execute:async t=>{const e=Hr(t),r=t.params.source?.trim().toLowerCase(),s=t.params.url,i=mo(r),u=t?.params&&t.params.basemap==!0;let a;s&&(a=s.split("/").pop()),!a&&i&&(a=i);const d=ks({name:a,type:go(r),source:ks({type:i,url:s??vo(i)})});await di(d,"url"),await e.addLayer(d,u)}}});Pe.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:xr,execute:async t=>{const e=Hr(t),s=t.activeEditor.getGsMap(),i=parseInt(t.params.index)-1;if(i<0||!s||i>=s.layers.length)return;const u=s.layers[i];u?.uuid&&await e.deleteLayer(u.uuid)}}});Pe.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:xr,execute:async t=>{const e=Hr(t),s=t.activeEditor.getGsMap(),i=parseInt(t.params.index)-1;if(i<0||!s||i>=s.layers.length)return;const u=s.layers[i];if(!u?.uuid)return;const a=u.name||`Layer ${i+1}`,d=t.params?.newName||await Fn(`Enter new name for "${a}":`,a);!d||d===a||await e.renameLayer(u.uuid,d)}}});Pe.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:xr,execute:async t=>{const e=t.source,r=t.params?.mode;await e.switchColorMode(r)}}});Pe.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:xr,execute:async t=>{const e=Hr(t),r=t.params.src,s=t.params.position;await e.addOverlayFromModule(r,s)}}});Pe.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:xr,execute:async t=>{const e=Hr(t),r=t.params.src;await e.addControlFromModule(r)}}});Pe.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates",type:"number[]"}]},handler:{canExecute:xr,execute:async t=>{const e=t.params.latlon,s=t.source.renderer.getViewExtent();if(!s)throw new Error("Failed to get view extent");let i=s;if(e||e===void 0){const{transformExtent:u}=await ht(async()=>{const{transformExtent:a}=await import("./index-ge_ZvpWO.js").then(d=>d.ae);return{transformExtent:a}},__vite__mapDeps([1,2]));i=u(s,"EPSG:3857","EPSG:4326"),[i[0],i[1]]=[i[1],i[0]],[i[2],i[3]]=[i[3],i[2]]}t.viewExtent=i}}});Pe.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:t=>Ue.get()instanceof It,execute:async t=>{const e=Ue.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});Pe.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:t=>Ue.get()instanceof It,execute:async t=>{const e=Ue.get();e instanceof It&&await e.refresh()}}});Pe.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:t=>Ue.get()instanceof It,execute:async t=>{const e=Ue.get();e instanceof It&&await e.resetView()}}});Pe.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:t=>Ue.get()instanceof It,execute:async t=>{const r=Ue.get().mapOperations;r&&await r.switchColorMode()}}});var zu=Object.getOwnPropertyDescriptor,Uu=(t,e,r,s)=>{for(var i=s>1?void 0:s?zu(e,r):e,u=t.length-1,a;u>=0;u--)(a=t[u])&&(i=a(i)||i);return i};let Ks=class extends os{createRenderRoot(){return this}render(){return z`
            <style>
                gs-app {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                gs-app .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                gs-app .toolbar-bottom {
                    width: 100%;
                    border-top: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    display: grid;
                    grid-template-columns: 1fr 2fr auto;
                    align-items: center;
                    flex-shrink: 0;
                    min-height: 32px;
                    padding: 0 var(--wa-space-s);
                    box-sizing: border-box;
                }
                
                gs-app .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                gs-app .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <!-- TOP TOOLBAR -->
            <div class="toolbar-top">
                <k-toolbar id=${Aa}></k-toolbar>
                <k-toolbar id=${ic}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${fn}></k-toolbar>
            </div>
            
            <!-- MAIN CONTENT AREA (VS Code style layout) -->
            <k-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes="15%, 65%, 20%">
                
                <!-- LEFT SIDEBAR (split vertically) -->
                <k-resizable-grid 
                    id="left-sidebar-split" 
                    orientation="vertical" 
                    sizes="50%, 50%">
                    <k-tabs id="${zi}"></k-tabs>
                    <k-tabs id="${Ca}"></k-tabs>
                </k-resizable-grid>
                
                <!-- CENTER: Editor + Bottom Panel -->
                <k-resizable-grid 
                    id="center-layout" 
                    orientation="vertical" 
                    sizes="80%, 20%">
                    
                    <!-- Editor Area (fixed, never moves) -->
                    <k-tabs id="${Xr}"></k-tabs>
                    
                    <!-- Bottom Panel (terminal, output, etc.) -->
                    <k-tabs id="${Ta}"></k-tabs>
                </k-resizable-grid>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${Oa}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${Ea}></k-toolbar>
                <k-toolbar id=${ls}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${_a}></k-toolbar>
            </div>
        `}};Ks=Uu([gt("gs-app")],Ks);const ju=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
geo!space provides the following components:
- a file browser on the left pane with "Workspace" in its tab title
- an editor area in the center which shows a welcome message and how to get started if no workspace is selected
- a chat UI on the right pane to interact with you

The file browser component allows to select a local folder as a workspace.
Once a workspace is connected, it will be restored when the user reloads geo!space.
If the user does not see a file they expect to be in the file browser,
they can choose to reload the workspace which will lead to syncing the workspace folder with the local file system.

Files with the extension .geospace are opened in the geo!space mapping editor: once opened,
the editor offers an input field which the user can use to either directly interact with the map via UI elements
or by prompting another editor-specific assistant to run one or more commands.
.geospace files are simple json files which contain fields to save and restore the map the user created.
For example, the zoom level, the center coordinates and the layers.

Any other will be opened using a code editor. The code editor has IDE like UI,
such as syntax highlighting and syntax checking for most well known programming languages and file formats.
The user can execute code in Python or JavaScript by pressing the run button in the open code editor.

If a file is dirty, i.e. the user made changes to its content, the tab title of the dirty editor will signal this
by showing an asterisk "*".

If the user prompt starts with "/<command>" where <command> is a command name,
geo!space will directly run the registered command.

Via a button with a puzzle icon in the top-right corner, the extensions editor can be opened.
The user can browse available extensions, install, or uninstall it (in this case a reload of the web app is required).

Answer technical requests not by code any technical terms, but by abstract and easy-to-understand concepts.
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,Bu=`# 🌐 geo!space
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/erdalkaraca/geospace)
[![Browser Support](https://img.shields.io/badge/Chrome%20%7C%20Opera-Supported-brightgreen)](#-browser-compatibility)
[![AI Providers](https://img.shields.io/badge/AI%20Providers-6-blue)](#-ai-configuration)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-purple)](#-key-features)
[![No Installation](https://img.shields.io/badge/Installation-None%20Required-orange)](#-quick-start)

**The Interactive Mapping IDE in Your Browser**

geo!space is a powerful web application that combines professional mapping capabilities with AI-powered automation tools. Create interactive maps, execute Python and JavaScript code, and automate repetitive tasks using natural language prompts - all without installing any software, directly in your browser.

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🌐 Browser Compatibility](#-browser-compatibility)
- [🌟 Use Cases](#-use-cases)
- [🚀 Getting Started](#-getting-started)
- [💬 Commands & Natural Language](#-commands--natural-language)
- [💡 Examples](#-examples)
- [⚙️ AI Configuration](#️-ai-configuration)
- [🔧 Troubleshooting](#-troubleshooting)
- [❓ FAQ](#-faq)
- [🏗️ Technical Architecture](#️-technical-architecture)
- [🤝 Trusted by](#-trusted-by)
- [⚡ Quick Start](#-quick-start)

## ✨ Key Features

### 🗺️ **Professional Mapping**
- **Interactive Map Editor**: Create and edit maps using the custom \`.geospace\` format
- **Multiple Data Sources**: Support for OSM, XYZ tiles, GeoJSON, KML, GeoTIFF, GPX, Features, BM (basemap.de), WMS, WMTS, and Overpass API
- **Satellite Imagery**: Built-in access to Esri World Imagery and Sentinel-2 satellite imagery
- **Layer Management**: Vector layers, tile layers, and layer groups with full styling control
- **OpenLayers Integration**: Built on the industry-standard OpenLayers mapping library
- **Advanced Styling**: Dynamic style loading and management system
- **PWA Transformation**: Convert \`.geospace\` files into cross-platform Progressive Web Apps

### 🤖 **AI-Powered Automation**
- **Multiple AI Providers**: Ollama, OpenAI, Groq, Cerebras, and WebLLM support
- **Context-Aware Assistants**: Specialized AI roles for mapping, coding, and general assistance
- **Local AI Support**: Run AI models locally using WebLLM or Ollama
- **Natural Language Commands**: Control the application using conversational prompts

### 💻 **Development Environment**
- **Monaco Editor**: Full VS Code editor experience with syntax highlighting
- **Python Execution**: Complete Pyodide integration with package management and pip requirements
- **JavaScript Execution**: Direct browser JavaScript execution in workers
- **File System Access**: Direct browser integration with local files and workspace persistence
- **Dependency Management**: Automatic pip requirements handling and package installation

### 🔧 **Extensibility**
- **Extension System**: Browse, install, and uninstall extensions from the built-in extension manager
- **Built-in Extensions**: WebLLM, Python/JS terminals, Linux terminal
- **Extension Sources**: Add extensions from trusted URLs or the geo!space extension registry
- **Command Registry**: 20+ built-in commands + extensible command system
- **Build System**: Generate publishable maps from \`.geospace\` files

## 🌐 Browser Compatibility

**⚠️ Important**: geo!space uses the File System Access API which has limited browser support.

- ✅ **Fully Supported**: Chrome and Opera
- ⚠️ **Limited Support**: Firefox and Safari (partial File System Access API support)

For more details, see [File System API](https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker)

## 🌟 Use Cases

- **Data Analysts**: Create interactive maps for data visualization
- **Urban Planners**: Design and prototype mapping applications  
- **Developers**: Build geospatial applications without complex setup
- **Researchers**: Prototype location-based applications quickly
- **Educators**: Teach mapping and geospatial concepts interactively
- **App Creators**: Transform maps into cross-platform PWAs for mobile, desktop, and web deployment

## 🚀 Getting Started

### 1. **Connect a Workspace**
- In the Workspace tab, click the folder icon "Load workspace folder"
- Choose a local folder to use as your workspace
- This folder will be saved and restored when you reload geo!space

### 2. **Configure AI Assistant (Optional)**
- Open the settings editor using the settings button in the upper right corner
- Configure AI providers and models in the \`aiConfig\` section
- Set up API keys for your preferred AI services

### 3. **Working with Files**
- **\`.geospace\` files**: Map files that open in the interactive map editor
- **Python/JavaScript files**: Open in the Monaco code editor with syntax highlighting
- **Other files**: Open in the appropriate editor based on file type

### 4. **Creating Interactive Maps**
- Double-click \`.geospace\` files to open them in the map editor
- Use the map editor's UI to interact with layers, features, and styling
- Use the input field to run commands or interact with the map via natural language
- Add data sources: OSM tiles, GeoJSON files, KML, GeoTIFF, GPX, or custom features
- **Build PWA**: Use the "Build map" button to transform your \`.geospace\` file into a cross-platform Progressive Web App

### 5. **Code Development**
- Edit Python and JavaScript code in the Monaco editor
- Execute Python code using Pyodide (Python in the browser)
- Run JavaScript code directly in the browser
- Use the "Run" button to execute code snippets

### 6. **Resource Catalog**
- Browse the catalog view for curated maps, datasets, icons, and controls
- Select items from catalog categories (datasets, maps, overlays, controls, icons)
- Use the "Checkout" button to download items directly to your workspace
- Access pre-built basemaps (OpenStreetMap, basemap.de) and sample datasets

## 💬 Commands & Natural Language

### **Slash Commands**
Use commands starting with \`/\` in the map editor's input field:

- \`/python\`: Execute Python code
- \`/js\`: Execute JavaScript code  
- \`/touch\`: Create a new, empty file
- \`/save\`: Save the current file
- \`/build_map\`: Build a publishable map from the current \`.geospace\` file

### **Rich Command Library**
geo!space includes 20+ built-in commands for mapping operations:
- **Map Navigation**: \`zoom_to_level\`, \`center_location\`
- **Layer Management**: \`add_layer\`, \`delete_layer\`, \`add_marker\`
- **Data Operations**: Import/export various geospatial formats
- **File Operations**: Create, save, and manage workspace files

### **Natural Language Interaction**
- **Map Editor**: Ask questions like "Add a marker at coordinates 52.5, 13.4" or "Change the style of all points to red"
- **Code Editor**: Request code assistance like "Create a function to calculate distance between two points"
- **General**: Ask about app features, get help with workflows, or request explanations

## 💡 Examples

### **Create a City Map**
\`\`\`
1. /touch city-map.geospace
2. "Add OpenStreetMap as base layer"
3. "Download buildings in the current view"
4. "Download trees in the current view"
5. /build_map
\`\`\`

### **Custom App Development**
\`\`\`
1. Create map with /touch app.geospace
2. Add custom controls using JavaScript with prepackaged libraries (Lit, WebAwesome)
3. Write Python scripts for data processing
4. /build_map for cross-platform deployment
\`\`\`

## ⚙️ AI Configuration

### **Context-Aware AI Assistants**
The AI assistant adapts its role based on your current context:

- **🗺️ Map Editor**: Specialized for mapping tasks, layer management, and geospatial operations
- **💻 Code Editor**: Focused on coding assistance, debugging, and code generation
- **🌐 General App**: Helps with app navigation, features, and general workflows

Each assistant can be identified by its icon and help hint in the AI view.

### **AI Provider Setup**
Configure AI providers in the app settings (accessible via the settings button in the upper right corner). The settings are stored in IndexedDB under the \`settings.json\` section:

\`\`\`json
{
  "aiConfig": {
    "defaultProvider": "openai",
    "providers": [
      {
        "name": "ollama",
        "model": "gemma3:12b",
        "chatApiEndpoint": "http://localhost:11434/v1/chat/completions",
        "apiKey": ""
      },
      {
        "name": "openai",
        "model": "gpt-4.1",
        "chatApiEndpoint": "https://api.openai.com/v1/chat/completions",
        "apiKey": "<your api key>"
      },
      {
        "name": "groq",
        "model": "llama-3.1-8b-instant",
        "chatApiEndpoint": "https://api.groq.com/openai/v1/chat/completions",
        "apiKey": "<your api key>"
      },
      {
        "name": "cerebras",
        "model": "llama3.1-8b",
        "chatApiEndpoint": "https://api.cerebras.ai/v1/chat/completions",
        "apiKey": "<your api key>"
      },
      {
        "name": "webllm",
        "model": "gemma-2-9b-it-q4f16_1-MLC",
        "chatApiEndpoint": "",
        "apiKey": "",
        "parameters": {
          "context_window_size": 4096
        }
      },
      {
        "name": "mistral",
        "model": "mistral-large-latest",
        "chatApiEndpoint": "https://api.mistral.ai/v1/chat/completions",
        "apiKey": "<your api key>",
        "ocrApiEndpoint": "https://api.mistral.ai/v1/ocr"
      }
    ]
  }
}
\`\`\`

**Setup Instructions:**
1. Open the settings editor using the settings button in the upper right corner
2. Replace \`<your api key>\` with your actual API keys for each provider
3. Set \`defaultProvider\` to your preferred provider name
4. For **Ollama**: Install locally and ensure it's running on \`localhost:11434\`
5. For **WebLLM**: No API key needed - runs models locally in the browser
   - **⚠️ GPU Requirement**: Requires a dedicated GPU with sufficient VRAM to run the selected model
   - Models like \`gemma-2-9b-it-q4f16_1-MLC\` typically need 8GB+ VRAM
6. Settings are automatically saved to IndexedDB - no manual file management required
7. You can change the default provider in the AI view after connecting to a workspace

## 🔧 Troubleshooting

### **Common Issues**

**File Not Found**
- If you don't see expected files, try reloading the workspace
- Ensure the workspace folder is properly connected

**AI Assistant Not Working**
- Verify settings are correctly configured in the app settings (stored in IndexedDB)
- Check that your API keys are valid and properly formatted
- For local providers (Ollama), ensure the service is running

**Browser Compatibility Issues**
- Use Chrome or Opera for full functionality
- Firefox and Safari have limited File System Access API support

**Map Not Loading**
- Check that \`.geospace\` files contain valid JSON
- Verify data source URLs are accessible
- Ensure required resources (icons, styles) are available

## ❓ FAQ

**Q: Do I need to install anything?**
A: No! geo!space runs entirely in your browser. Just open it in Chrome or Opera.

**Q: Is my data secure?**
A: Yes. All data stays in your browser and local workspace. No data is sent to external servers unless you explicitly use AI services.

**Q: Can I use geo!space offline?**
A: Yes, for basic mapping features. AI assistance requires internet connection (except for local providers like Ollama/WebLLM).

**Q: How do I share my maps?**
A: Use the "Build map" button to create a PWA that can be deployed anywhere or shared as a standalone app.

**Q: What file formats are supported?**
A: Maps: \`.geospace\` (JSON), Data: GeoJSON, KML, GPX, GeoTIFF, Features. Tile sources: OSM, XYZ, WMS, WMTS, BM (basemap.de), Satellite imagery (Esri, Sentinel-2). Code: Python, JavaScript, and more.

**Q: Can I customize the interface?**
A: Yes! Install extensions, create custom controls using WebAwesome components, or add your own extensions.

**Q: What extensions are available?**
A: Built-in extensions include WebLLM, Python/JS terminals, Linux terminal, and more. Browse and install from the extension manager.

## 🏗️ Technical Architecture

**Frontend Stack:**
- **Lit**: Web components framework
- **TypeScript**: Main development language  
- **Vite**: Build tool and development server
- **Monaco Editor**: VS Code's editor component
- **WebAwesome**: Web components library (also available for custom map controls)

**Mapping Stack:**
- **OpenLayers**: Professional mapping library
- **Custom Runtime**: Map-to-OpenLayers conversion system
- **Style Loader**: Dynamic style loading

**AI Stack:**
- **Multiple Providers**: Flexible AI provider system
- **WebLLM**: Local AI model execution
- **Context-Aware**: Specialized AI roles per context

## 🤝 Trusted by

- **[Kiosk Scout](https://finder.kioskscout.de)**: A cross-platform PWA for finding nearby vending machines
- **Want your geo!space app listed here?** Contact us!

---

## ⚡ Quick Start

**Get up and running in 3 minutes:**

1. **Open geo!space** in Chrome or Opera
2. **Connect workspace** - Click folder icon and select a local directory
3. **Create your first map** - Use \`/touch my-map.geospace\` or open existing files
4. **Try AI assistance** - Ask "Add a marker at [your location]" in the map editor
5. **Build your app** - Use \`/build_map\` to create a deployable PWA

### **First-Time Setup**
- **No AI needed**: Start mapping immediately without configuration
- **AI setup**: Open settings → configure API keys for enhanced assistance
- **Extensions**: Browse and install extensions from the extension manager

## 🎯 Ready to Start?

1. **Load the app** in Chrome or Opera
2. **Connect a workspace** folder
3. **Create your first map** or open an existing \`.geospace\` file
4. **Ask the AI** for help with mapping tasks
5. **Build and share** your interactive maps

**Happy mapping! 🗺️✨**`,Ys=En.version,Js=Dn("GeoSpaceApp"),Wu={".geojson":rr.GeoJSON,".json":rr.GeoJSON,".kml":rr.KML,".gpx":rr.GPX,".tif":rr.GeoTIFF,".tiff":rr.GeoTIFF,".geotiff":rr.GeoTIFF},Va=t=>{const e=t.getName().toLowerCase();for(const[r,s]of Object.entries(Wu))if(e.endsWith(r))return s;return null},Vu=t=>Va(t)!==null,Gu={id:"geospace",name:"geo!space",version:Ys,description:"A geospatial IDE for working with spatial data",metadata:{github:{owner:"erdalkaraca",repo:"geospace"}},extensions:["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage","system.pythonpackagemanager","system.settings-tree"],contributions:{ui:[{target:Aa,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:zi,name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>z`<k-filebrowser id="${t}"></k-filebrowser>`},{target:zi,name:"catalog",label:"Catalog",icon:"book",component:t=>z`<gs-catalog id="${t}"></gs-catalog>`},{target:Ca,name:"map-props",label:"Map Properties",icon:"fg map-options",component:t=>z`<gs-map-props id="${t}"></gs-map-props>`},{target:Oa,name:"assistant",label:"AI",icon:"robot",component:t=>z`<k-aiassist id="${t}"></k-aiassist>`},{target:Ta,name:"log-terminal",label:"Log",icon:"list",component:t=>z`<k-log-terminal id="${t}"></k-log-terminal>`},{target:Ea,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:_a,label:`v${Ys}`,icon:"circle-info",command:"show_version_info",showLabel:!0},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const t=Vt.get();return t instanceof sn?!Vu(t):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_geospace_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>ht(()=>import("./mapbuilder-extension-bbNd8guT.js"),__vite__mapDeps([19,1,2])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>ht(()=>import("./style-editor-extension-CwYhtB0E.js"),__vite__mapDeps([20,1,2])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>ht(()=>import("./overpass-extension-Dq60gIJp.js"),__vite__mapDeps([21,1,2])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>ht(()=>import("./gtfs-extension-dSPhMByJ.js"),__vite__mapDeps([22,1,2])),icon:"map-location-dot"}]},async initialize(){pi.addPackage({name:En.name,version:En.version,dependencies:En.dependencies,devDependencies:En.devDependencies}),Ye.registerContribution(jn,{label:"App Support",description:"General app support",role:"appsupport",sysPrompt:()=>{const t=We.getExtensions().map(r=>({id:r.id,name:r.name,description:r.description,experimental:r.experimental,installedAndEnabled:We.isEnabled(r.id)})),e=`***Available Extensions:***
${JSON.stringify(t,null,2)}`;return`${ju}

${e}`},canHandle:({activeEditor:t})=>t===void 0,promptDecorator:async({userPrompt:t})=>Dt.getWorkspace().then(e=>{const r={workspace:e?.getName(),activeEditor:Cr.getEditorArea()?.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(r,null,2)}`}

${t}`})}),ct({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async t=>{const e=Vt.get();if(!(e instanceof sn))return;const r=Va(e);if(!r){Js.warn(`Unsupported file type: ${e.getName()}`);return}const s=e.getWorkspacePath(),i=Pe.createExecutionContext(t.source,{source:r,url:s});await Pe.execute("add_layer",i)}}}),ct({command:{id:"create_geospace_file",name:"Create GeoSpace Map File",description:"Creates a new .geospace map file",parameters:[]},handler:{execute:async()=>{const t={...ia,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}};await Pe.execute("create_file",{params:{path:"map.geospace",contents:JSON.stringify(t,null,2),extension:".geospace",ask:!0}})}}}),ct({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async t=>{const e=new Da(Bu,"README.md");await Cr.loadEditor(e)}},contribution:{target:fn,icon:"question-circle",label:"Welcome"}}),Js.info("geo!space is ready!")},render(){return z`<gs-app></gs-app>`}};Bn.registerApp(Gu,{defaultAppId:"geospace",autoStart:!0,container:document.body});export{Pn as A,Mt as B,Fn as C,Ui as D,pn as E,sn as F,It as G,Gr as K,eu as P,Aa as T,Ue as a,on as b,Ke as c,ti as d,ct as e,Vt as f,Ta as g,_t as h,Jl as i,ic as j,He as k,Ba as l,$a as m,Qn as n,Cr as o,bt as p,Ye as q,zt as r,ar as s,qt as t,Ea as u,mt as v,Dt as w,dr as x,Dn as y,Pe as z};
