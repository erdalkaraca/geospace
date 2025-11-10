const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/git-extension-CXMFyRZt.js","assets/index-B-or_cqe.js","assets/index-C2t38aP0.css","assets/pyterminal-extension-wGsfHB-B.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-D-4jP8oR.js","assets/webllmservice--icUPpD0.js","assets/p12-splitter-BpheodJ8.js","assets/package-manager-extension-CKWnK3Y-.js","assets/notebook-extension-CKiU9j8c.js","assets/editor.main-ClVZ4v5k.js","assets/editor-BhPcksyq.css","assets/command-palette-extension-Dp9gEWg3.js","assets/download-extension-CBBSXe9O.js","assets/unzip-extension-DPmW7hWU.js","assets/md-editor-extension-tf0y9UZX.js","assets/media-viewer-extension-DvQbUwGN.js","assets/monaco-editor-extension-Ee1QtyhQ.js","assets/memory-usage-extension-Dqu2WSSA.js","assets/webdav-extension-B9nh8EjF.js","assets/settings-tree-extension-0VEZrcVc.js","assets/ai-system-extension-CRohezIB.js","assets/mapbuilder-extension-DmxMRtdM.js","assets/style-editor-extension-CNdEhlaI.js","assets/overpass-extension-BwU9InaE.js","assets/gtfs-extension-BV74HLoQ.js","assets/tendermatch-extension--lMbo3T5.js"])))=>i.map(i=>d[i]);
import{x as W,B as Or,P as ra,o as zn,g as na,i as ia,a as Dt,t as vt,b as Io,n as Te,r as kt,e as kr,E as gt,c as Sr,d as sa,f as aa,h as ko,p as So,v as zr,j as In,M as Ti,T as Ao,m as oa,k as Co,l as xr,_ as st,q as ks,s as _o,u as Eo,w as Oo,y as To,G as Ss,z as tr,D as la,A as As,C as Ro,F as Lo,H as Po,I as $o,J as Cs,K as Do,L as No}from"./index-B-or_cqe.js";const Mo="@kispace-io/geospace",Fo="0.14.5",qo={"@kispace-io/appspace":"file:../appspace","esbuild-wasm":"^0.25.11",ol:"^10.6.1","ol-mapbox-style":"^13.1.0",osmtogeojson:"^3.0.0-beta.5","font-gis":"^1.0.6","pace-js":"^1.2.4","pubsub-js":"^1.9.5"},zo={"@testing-library/jest-dom":"^6.9.1","@types/node":"^24.9.2","@types/pubsub-js":"^1.8.6","@types/toastify-js":"^1.12.4","@vitest/coverage-v8":"^4.0.6","@vitest/ui":"^4.0.6","happy-dom":"^20.0.10",jsdom:"^27.1.0","rollup-plugin-visualizer":"^6.0.5",typescript:"~5.9.3",vite:"^7.1.12","vite-plugin-cross-origin-isolation":"^0.1.6","vite-plugin-mkcert":"^1.17.9","vite-plugin-static-copy":"^3.1.4","vite-plugin-zip":"^1.0.1",vitest:"^4.0.6",esbuild:"^0.25.11"},Tn={name:Mo,version:Fo,dependencies:qo,devDependencies:zo};class Ji{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,r){return e[r]||this.parent?.getProxy()[r]}set(e,r,n){e[r]=n}put(e,r){this.variables[e]=r}getProxy(){return this.proxy}createChild(e={}){const r=new Ji(e);return r.parent=this,this.children.push(r),r}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const zt=new Ji({}),mr=zt.createChild({});mr.put("html",W);mr.put("render",Or);const _s={debug:0,info:1,warning:2,error:3};let Uo="debug";const Zr={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let li=null;const Fi=[];function kn(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class jo{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,r){Qr(this.source,e,r)}}function Wo(t){return _s[t]>=_s[Uo]}function Qr(t,e,r){Wo(r)&&(li?li(t,e,r):(Fi.push({source:t,message:e,level:r}),Zr[r==="error"?"error":r==="warning"?"warn":r==="debug"?"debug":"log"](`[${t}] ${e}`)))}function Bo(){console.log=function(...t){Zr.log.apply(console,t),Qr("Console",t.map(e=>kn(e)).join(" "),"info")},console.info=function(...t){Zr.info.apply(console,t),Qr("Console",t.map(e=>kn(e)).join(" "),"info")},console.warn=function(...t){Zr.warn.apply(console,t),Qr("Console",t.map(e=>kn(e)).join(" "),"warning")},console.error=function(...t){Zr.error.apply(console,t),Qr("Console",t.map(e=>kn(e)).join(" "),"error")},console.debug=function(...t){Zr.debug.apply(console,t),Qr("Console",t.map(e=>kn(e)).join(" "),"debug")}}Bo();function Vo(t){for(li=t;Fi.length>0;){const e=Fi.shift();e&&t(e.source,e.message,e.level)}}function Go(){li=null}function Un(t){return new jo(t)}const lt=Un("System");zt.put("logger",lt);var Ho=Object.defineProperty,Ko=(t,e,r)=>e in t?Ho(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ri=(t,e,r)=>(Ko(t,typeof e!="symbol"?e+"":e,r),r),Yo=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},Li=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Qn=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Es=(t,e,r)=>(Yo(t,e,"access private method"),r);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ca(t,e){return Object.is(t,e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let mt=null,Dn=!1,ni=1;const ci=Symbol("SIGNAL");function en(t){const e=mt;return mt=t,e}function Jo(){return mt}function Zo(){return Dn}const Zi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function yi(t){if(Dn)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(mt===null)return;mt.consumerOnSignalRead(t);const e=mt.nextProducerIndex++;if(ln(mt),e<mt.producerNode.length&&mt.producerNode[e]!==t&&qi(mt)){const r=mt.producerNode[e];bi(r,mt.producerIndexOfThis[e])}mt.producerNode[e]!==t&&(mt.producerNode[e]=t,mt.producerIndexOfThis[e]=qi(mt)?da(t,mt,e):0),mt.producerLastReadVersion[e]=t.version}function Qo(){ni++}function ua(t){if(!(!t.dirty&&t.lastCleanEpoch===ni)){if(!t.producerMustRecompute(t)&&!nl(t)){t.dirty=!1,t.lastCleanEpoch=ni;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=ni}}function pa(t){if(t.liveConsumerNode===void 0)return;const e=Dn;Dn=!0;try{for(const r of t.liveConsumerNode)r.dirty||el(r)}finally{Dn=e}}function Xo(){return mt?.consumerAllowSignalWrites!==!1}function el(t){var e;t.dirty=!0,pa(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function tl(t){return t&&(t.nextProducerIndex=0),en(t)}function rl(t,e){if(en(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(qi(t))for(let r=t.nextProducerIndex;r<t.producerNode.length;r++)bi(t.producerNode[r],t.producerIndexOfThis[r]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function nl(t){ln(t);for(let e=0;e<t.producerNode.length;e++){const r=t.producerNode[e],n=t.producerLastReadVersion[e];if(n!==r.version||(ua(r),n!==r.version))return!0}return!1}function da(t,e,r){var n;if(Qi(t),ln(t),t.liveConsumerNode.length===0){(n=t.watched)==null||n.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)t.producerIndexOfThis[i]=da(t.producerNode[i],t,i)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(e)-1}function bi(t,e){var r;if(Qi(t),ln(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(r=t.unwatched)==null||r.call(t.wrapper);for(let i=0;i<t.producerNode.length;i++)bi(t.producerNode[i],t.producerIndexOfThis[i])}const n=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[n],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[n],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const i=t.liveConsumerIndexOfThis[e],o=t.liveConsumerNode[e];ln(o),o.producerIndexOfThis[i]=e}}function qi(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function ln(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function Qi(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ha(t){if(ua(t),yi(t),t.value===zi)throw t.error;return t.value}function il(t){const e=Object.create(sl);e.computation=t;const r=()=>ha(e);return r[ci]=e,r}const Pi=Symbol("UNSET"),$i=Symbol("COMPUTING"),zi=Symbol("ERRORED"),sl={...Zi,value:Pi,dirty:!0,error:null,equal:ca,producerMustRecompute(t){return t.value===Pi||t.value===$i},producerRecomputeValue(t){if(t.value===$i)throw new Error("Detected cycle in computations.");const e=t.value;t.value=$i;const r=tl(t);let n,i=!1;try{n=t.computation.call(t.wrapper),i=e!==Pi&&e!==zi&&t.equal.call(t.wrapper,e,n)}catch(o){n=zi,t.error=o}finally{rl(t,r)}if(i){t.value=e;return}t.value=n,t.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function al(){throw new Error}let ol=al;function ll(){ol()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function cl(t){const e=Object.create(dl);e.value=t;const r=()=>(yi(e),e.value);return r[ci]=e,r}function ul(){return yi(this),this.value}function pl(t,e){Xo()||ll(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,hl(t))}const dl={...Zi,equal:ca,value:void 0};function hl(t){t.version++,Qo(),pa(t)}/**
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
 */const _t=Symbol("node");var dr;(t=>{var e,r,n,i;class o{constructor(f,y={}){Qn(this,r),Ri(this,e);const x=cl(f)[ci];if(this[_t]=x,x.wrapper=this,y){const w=y.equals;w&&(x.equal=w),x.watched=y[t.subtle.watched],x.unwatched=y[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return ul.call(this[_t])}set(f){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Zo())throw new Error("Writes to signals not permitted during Watcher callback");const y=this[_t];pl(y,f)}}e=_t,r=new WeakSet,t.isState=c=>typeof c=="object"&&Li(r,c),t.State=o;class a{constructor(f,y){Qn(this,i),Ri(this,n);const x=il(f)[ci];if(x.consumerAllowSignalWrites=!0,this[_t]=x,x.wrapper=this,y){const w=y.equals;w&&(x.equal=w),x.watched=y[t.subtle.watched],x.unwatched=y[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return ha(this[_t])}}n=_t,i=new WeakSet,t.isComputed=c=>typeof c=="object"&&Li(i,c),t.Computed=a,(c=>{var f,y,R,x;function w(P){let G,F=null;try{F=en(null),G=P()}finally{en(F)}return G}c.untrack=w;function I(P){var G;if(!(0,t.isComputed)(P)&&!(0,t.isWatcher)(P))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((G=P[_t].producerNode)==null?void 0:G.map(F=>F.wrapper))??[]}c.introspectSources=I;function q(P){var G;if(!(0,t.isComputed)(P)&&!(0,t.isState)(P))throw new TypeError("Called introspectSinks without a Signal argument");return((G=P[_t].liveConsumerNode)==null?void 0:G.map(F=>F.wrapper))??[]}c.introspectSinks=q;function B(P){if(!(0,t.isComputed)(P)&&!(0,t.isState)(P))throw new TypeError("Called hasSinks without a Signal argument");const G=P[_t].liveConsumerNode;return G?G.length>0:!1}c.hasSinks=B;function de(P){if(!(0,t.isComputed)(P)&&!(0,t.isWatcher)(P))throw new TypeError("Called hasSources without a Computed or Watcher argument");const G=P[_t].producerNode;return G?G.length>0:!1}c.hasSources=de;class ve{constructor(G){Qn(this,y),Qn(this,R),Ri(this,f);let F=Object.create(Zi);F.wrapper=this,F.consumerMarkedDirty=G,F.consumerIsAlwaysLive=!0,F.consumerAllowSignalWrites=!1,F.producerNode=[],this[_t]=F}watch(...G){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Es(this,R,x).call(this,G);const F=this[_t];F.dirty=!1;const O=en(F);for(const z of G)yi(z[_t]);en(O)}unwatch(...G){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Es(this,R,x).call(this,G);const F=this[_t];ln(F);for(let O=F.producerNode.length-1;O>=0;O--)if(G.includes(F.producerNode[O].wrapper)){bi(F.producerNode[O],F.producerIndexOfThis[O]);const z=F.producerNode.length-1;if(F.producerNode[O]=F.producerNode[z],F.producerIndexOfThis[O]=F.producerIndexOfThis[z],F.producerNode.length--,F.producerIndexOfThis.length--,F.nextProducerIndex--,O<F.producerNode.length){const J=F.producerIndexOfThis[O],Se=F.producerNode[O];Qi(Se),Se.liveConsumerIndexOfThis[J]=O}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[_t].producerNode.filter(F=>F.dirty).map(F=>F.wrapper)}}f=_t,y=new WeakSet,R=new WeakSet,x=function(P){for(const G of P)if(!(0,t.isComputed)(G)&&!(0,t.isState)(G))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=P=>Li(y,P),c.Watcher=ve;function U(){var P;return(P=Jo())==null?void 0:P.wrapper}c.currentComputed=U,c.watched=Symbol("watched"),c.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(dr||(dr={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fl=Symbol("SignalWatcherBrand"),ml=new FinalizationRegistry((({watcher:t,signal:e})=>{t.unwatch(e)})),Os=new WeakMap;function wi(t){return t[fl]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new dr.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new dr.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new dr.subtle.Watcher((function(){const r=Os.get(this);r!==void 0&&(r._$Si===!1&&r.requestUpdate(),this.watch())}));Os.set(e,this),ml.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((r=>r.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,r,n){this._$So=!0,super.requestUpdate(e,r,n)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const r=this._$So;this.requestUpdate(),this._$So=r}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */dr.State;dr.Computed;const Gr=(t,e)=>new dr.State(t,e),Yt=(t,e)=>{ra.subscribe(t,(r,n)=>e(n))},He=(t,e)=>{ra.publish(t,e)},fa=t=>function(e,r,n){const i=n.value;return i.topic=t,n};zt.put("subscribe",Yt);zt.put("publish",He);const hn="events/contributionregistry/contributionsChanged";class gl{constructor(){this.contributions=new Map}registerContribution(e,r){const n=this.getContributions(e);if(r.disabled instanceof Function){const i=r.disabled;r.disabled=new dr.Computed(i)}n.push(r),He(hn,{target:e,contributions:n})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const Qe=new gl;zt.put("contributionRegistry",Qe);const vl={},Ye=Gr(null),nn=Gr(null),Ui=Gr(null),ma=Gr(0),Ut=Gr(void 0);Gr({name:"",timestamp:0});class ga{constructor(e,r,n,i,o){this.id=e,this.name=r,this.description=n,this.parameters=i||[],this.output=o||[]}}class va{async execute(e,r){return Le.execute(e,r)}async undo(){}async redo(){}}class ya{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,r){this.handlers.has(e)||this.handlers.set(e,[]);const n=this.handlers.get(e);n.push(r),n.sort((i,o)=>(o.ranking??0)-(i.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:Ye.get(),activeEditor:nn.get()}}execute(e,r={}){const n=this.getHandler(e);if(!n)throw lt.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const i=this.getCommand(e),o=r.params?` params: ${JSON.stringify(r.params)}`:"";lt.debug(`[CommandRegistry] Executing command: ${e}${i?` (${i.name})`:""}${o}`);for(const a of n)if(a.canExecute===void 0||a.canExecute(r))try{const c=a.execute(r);return lt.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${c})`),c}catch(c){const f=c instanceof Error?c.message:String(c);throw lt.error(`[CommandRegistry] Command execution failed: ${e} - ${f}`),c}lt.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,r,n,i,o){const a=new ga(e,r,n,i);this.registerCommand(a),o&&this.registerHandler(e,o)}registerCommand(e){this.commands[e.id]=e,lt.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(r=>(Le.getHandler(r.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(e))).reduce((r,n)=>(r[n.id]=n,r),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const r=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(r,e.handler),e.contribution&&e.contribution.target&&Qe.registerContribution(e.contribution.target,{command:r,...e.contribution})}}const Le=new ya;zt.put("commandRegistry",Le);const Xe=t=>{Le.registerAll(t)},Ep=Object.freeze(Object.defineProperty({__proto__:null,Command:ga,CommandRegistry:ya,CommandStack:va,commandRegistry:Le,registerAll:Xe},Symbol.toStringTag,{value:"Module"}));class yl{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Le.listCommands();Object.values(e).forEach(r=>{r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)})}watchCommandRegistry(){const e=Le.registerCommand.bind(Le);Le.registerCommand=r=>{e(r),r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const r=e.toUpperCase().split("+").map(a=>a.trim());if(r.length===0)return null;const n={ctrl:!1,alt:!1,shift:!1,meta:!1},i=r[r.length-1],o=r.slice(0,-1);for(const a of o)switch(a){case"CTRL":case"CONTROL":n.ctrl=!0;break;case"ALT":case"OPTION":n.alt=!0;break;case"SHIFT":n.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":n.meta=!0;break;default:lt.warn(`Unknown modifier: ${a}`)}return n.key=this.normalizeKey(i),n}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const r=[];return e.ctrl&&r.push("ctrl"),e.alt&&r.push("alt"),e.shift&&r.push("shift"),e.meta&&r.push("meta"),r.sort(),`${r.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,r){const n=this.parseKeyBinding(r);if(!n)return lt.error(`Invalid key binding: ${r}`),!1;n.commandId=e;const i=this.getBindingKey(n);this.bindings.has(i)||this.bindings.set(i,[]);const o=this.bindings.get(i);return o.find(c=>c.commandId===e)?(lt.error(`Key binding ${r} already registered for command ${e}`),!1):(o.push(n),lt.debug(`Key binding registered: ${r} -> ${e}`),!0)}unregisterKeyBinding(e,r){if(r){const n=this.parseKeyBinding(r);if(n){const i=this.getBindingKey(n),o=this.bindings.get(i);if(o){const a=o.filter(c=>c.commandId!==e);a.length===0?this.bindings.delete(i):this.bindings.set(i,a)}}}else for(const[n,i]of this.bindings.entries()){const o=i.filter(a=>a.commandId!==e);o.length===0?this.bindings.delete(n):this.bindings.set(n,o)}}getKeyBindingsForCommand(e){const r=[];for(const n of this.bindings.values())for(const i of n)i.commandId===e&&r.push(this.formatKeyBinding(i));return r}formatKeyBinding(e){const r=[];e.ctrl&&r.push("Ctrl"),e.alt&&r.push("Alt"),e.shift&&r.push("Shift"),e.meta&&r.push("Cmd");let n=e.key;return n.length===1?n=n.toUpperCase():n=n.charAt(0).toUpperCase()+n.slice(1).toLowerCase(),r.push(n),r.join("+")}handleKeyDown(e){if(!this.enabled)return;const r=e.target;if(r&&(r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.isContentEditable)){const a=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&a==="P"))return}const n={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},i=this.getBindingKey(n),o=this.bindings.get(i);if(o&&o.length>0){const a=o[0];try{e.preventDefault(),e.stopPropagation();const c=Le.createExecutionContext({});Le.execute(a.commandId,c),lt.info(`Executed command via key binding: ${a.commandId}`)}catch(c){lt.error(`Failed to execute command ${a.commandId}: ${c.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}lt.debug("KeyBindingManager initializing...");const ba=new yl;lt.debug("KeyBindingManager initialized");zt.put("keyBindingManager",ba);function Xi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Hr=Xi();function wa(t){Hr=t}var Nn={exec:()=>null};function Ve(t,e=""){let r=typeof t=="string"?t:t.source,n={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(Mt.caret,"$1"),r=r.replace(i,a),n},getRegex:()=>new RegExp(r,e)};return n}var Mt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},bl=/^(?:[ \t]*(?:\n|$))+/,wl=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,xl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,jn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Il=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,es=/(?:[*+-]|\d{1,9}[.)])/,xa=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ia=Ve(xa).replace(/bull/g,es).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),kl=Ve(xa).replace(/bull/g,es).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ts=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Sl=/^[^\n]+/,rs=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Al=Ve(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",rs).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Cl=Ve(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,es).getRegex(),xi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ns=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,_l=Ve("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ns).replace("tag",xi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ka=Ve(ts).replace("hr",jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xi).getRegex(),El=Ve(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ka).getRegex(),is={blockquote:El,code:wl,def:Al,fences:xl,heading:Il,hr:jn,html:_l,lheading:Ia,list:Cl,newline:bl,paragraph:ka,table:Nn,text:Sl},Ts=Ve("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xi).getRegex(),Ol={...is,lheading:kl,table:Ts,paragraph:Ve(ts).replace("hr",jn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ts).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xi).getRegex()},Tl={...is,html:Ve(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ns).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Nn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ve(ts).replace("hr",jn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ia).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Rl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ll=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Sa=/^( {2,}|\\)\n(?!\s*$)/,Pl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ii=/[\p{P}\p{S}]/u,ss=/[\s\p{P}\p{S}]/u,Aa=/[^\s\p{P}\p{S}]/u,$l=Ve(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ss).getRegex(),Ca=/(?!~)[\p{P}\p{S}]/u,Dl=/(?!~)[\s\p{P}\p{S}]/u,Nl=/(?:[^\s\p{P}\p{S}]|~)/u,Ml=Ve(/link|code|html/,"g").replace("link",new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code",new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html",/<(?! )[^<>]*?>/).getRegex(),_a=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Fl=Ve(_a,"u").replace(/punct/g,Ii).getRegex(),ql=Ve(_a,"u").replace(/punct/g,Ca).getRegex(),Ea="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",zl=Ve(Ea,"gu").replace(/notPunctSpace/g,Aa).replace(/punctSpace/g,ss).replace(/punct/g,Ii).getRegex(),Ul=Ve(Ea,"gu").replace(/notPunctSpace/g,Nl).replace(/punctSpace/g,Dl).replace(/punct/g,Ca).getRegex(),jl=Ve("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Aa).replace(/punctSpace/g,ss).replace(/punct/g,Ii).getRegex(),Wl=Ve(/\\(punct)/,"gu").replace(/punct/g,Ii).getRegex(),Bl=Ve(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vl=Ve(ns).replace("(?:-->|$)","-->").getRegex(),Gl=Ve("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ui=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Hl=Ve(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ui).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Oa=Ve(/^!?\[(label)\]\[(ref)\]/).replace("label",ui).replace("ref",rs).getRegex(),Ta=Ve(/^!?\[(ref)\](?:\[\])?/).replace("ref",rs).getRegex(),Kl=Ve("reflink|nolink(?!\\()","g").replace("reflink",Oa).replace("nolink",Ta).getRegex(),Rs=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,as={_backpedal:Nn,anyPunctuation:Wl,autolink:Bl,blockSkip:Ml,br:Sa,code:Ll,del:Nn,emStrongLDelim:Fl,emStrongRDelimAst:zl,emStrongRDelimUnd:jl,escape:Rl,link:Hl,nolink:Ta,punctuation:$l,reflink:Oa,reflinkSearch:Kl,tag:Gl,text:Pl,url:Nn},Yl={...as,link:Ve(/^!?\[(label)\]\((.*?)\)/).replace("label",ui).getRegex(),reflink:Ve(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ui).getRegex()},ji={...as,emStrongRDelimAst:Ul,emStrongLDelim:ql,url:Ve(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Rs).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Ve(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Rs).getRegex()},Jl={...ji,br:Ve(Sa).replace("{2,}","*").getRegex(),text:Ve(ji.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xn={normal:is,gfm:Ol,pedantic:Tl},Sn={normal:as,gfm:ji,breaks:Jl,pedantic:Yl},Zl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ls=t=>Zl[t];function lr(t,e){if(e){if(Mt.escapeTest.test(t))return t.replace(Mt.escapeReplace,Ls)}else if(Mt.escapeTestNoEncode.test(t))return t.replace(Mt.escapeReplaceNoEncode,Ls);return t}function Ps(t){try{t=encodeURI(t).replace(Mt.percentDecode,"%")}catch{return null}return t}function $s(t,e){let r=t.replace(Mt.findPipe,(o,a,c)=>{let f=!1,y=a;for(;--y>=0&&c[y]==="\\";)f=!f;return f?"|":" |"}),n=r.split(Mt.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(Mt.slashPipe,"|");return n}function An(t,e,r){let n=t.length;if(n===0)return"";let i=0;for(;i<n&&t.charAt(n-i-1)===e;)i++;return t.slice(0,n-i)}function Ql(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let n=0;n<t.length;n++)if(t[n]==="\\")n++;else if(t[n]===e[0])r++;else if(t[n]===e[1]&&(r--,r<0))return n;return r>0?-2:-1}function Ds(t,e,r,n,i){let o=e.href,a=e.title||null,c=t[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let f={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:o,title:a,text:c,tokens:n.inlineTokens(c)};return n.state.inLink=!1,f}function Xl(t,e,r){let n=t.match(r.other.indentCodeCompensation);if(n===null)return e;let i=n[1];return e.split(`
`).map(o=>{let a=o.match(r.other.beginningSpace);if(a===null)return o;let[c]=a;return c.length>=i.length?o.slice(i.length):o}).join(`
`)}var pi=class{options;rules;lexer;constructor(t){this.options=t||Hr}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:An(r,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let r=e[0],n=Xl(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let n=An(r,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(r=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:An(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let r=An(e[0],`
`).split(`
`),n="",i="",o=[];for(;r.length>0;){let a=!1,c=[],f;for(f=0;f<r.length;f++)if(this.rules.other.blockquoteStart.test(r[f]))c.push(r[f]),a=!0;else if(!a)c.push(r[f]);else break;r=r.slice(f);let y=c.join(`
`),R=y.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${y}`:y,i=i?`${i}
${R}`:R;let x=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(R,o,!0),this.lexer.state.top=x,r.length===0)break;let w=o.at(-1);if(w?.type==="code")break;if(w?.type==="blockquote"){let I=w,q=I.raw+`
`+r.join(`
`),B=this.blockquote(q);o[o.length-1]=B,n=n.substring(0,n.length-I.raw.length)+B.raw,i=i.substring(0,i.length-I.text.length)+B.text;break}else if(w?.type==="list"){let I=w,q=I.raw+`
`+r.join(`
`),B=this.list(q);o[o.length-1]=B,n=n.substring(0,n.length-w.raw.length)+B.raw,i=i.substring(0,i.length-I.raw.length)+B.raw,r=q.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:o,text:i}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r=e[1].trim(),n=r.length>1,i={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]};r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]");let o=this.rules.other.listItemRegex(r),a=!1;for(;t;){let f=!1,y="",R="";if(!(e=o.exec(t))||this.rules.block.hr.test(t))break;y=e[0],t=t.substring(y.length);let x=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,ve=>" ".repeat(3*ve.length)),w=t.split(`
`,1)[0],I=!x.trim(),q=0;if(this.options.pedantic?(q=2,R=x.trimStart()):I?q=e[1].length+1:(q=e[2].search(this.rules.other.nonSpaceChar),q=q>4?1:q,R=x.slice(q),q+=e[1].length),I&&this.rules.other.blankLine.test(w)&&(y+=w+`
`,t=t.substring(w.length+1),f=!0),!f){let ve=this.rules.other.nextBulletRegex(q),U=this.rules.other.hrRegex(q),P=this.rules.other.fencesBeginRegex(q),G=this.rules.other.headingBeginRegex(q),F=this.rules.other.htmlBeginRegex(q);for(;t;){let O=t.split(`
`,1)[0],z;if(w=O,this.options.pedantic?(w=w.replace(this.rules.other.listReplaceNesting,"  "),z=w):z=w.replace(this.rules.other.tabCharGlobal,"    "),P.test(w)||G.test(w)||F.test(w)||ve.test(w)||U.test(w))break;if(z.search(this.rules.other.nonSpaceChar)>=q||!w.trim())R+=`
`+z.slice(q);else{if(I||x.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||P.test(x)||G.test(x)||U.test(x))break;R+=`
`+w}!I&&!w.trim()&&(I=!0),y+=O+`
`,t=t.substring(O.length+1),x=z.slice(q)}}i.loose||(a?i.loose=!0:this.rules.other.doubleBlankLine.test(y)&&(a=!0));let B=null,de;this.options.gfm&&(B=this.rules.other.listIsTask.exec(R),B&&(de=B[0]!=="[ ] ",R=R.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:y,task:!!B,checked:de,loose:!1,text:R,tokens:[]}),i.raw+=y}let c=i.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let f=0;f<i.items.length;f++)if(this.lexer.state.top=!1,i.items[f].tokens=this.lexer.blockTokens(i.items[f].text,[]),!i.loose){let y=i.items[f].tokens.filter(x=>x.type==="space"),R=y.length>0&&y.some(x=>this.rules.other.anyLine.test(x.raw));i.loose=R}if(i.loose)for(let f=0;f<i.items.length;f++)i.items[f].loose=!0;return i}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:n,title:i}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=$s(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===n.length){for(let a of n)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<r.length;a++)o.header.push({text:r[a],tokens:this.lexer.inline(r[a]),header:!0,align:o.align[a]});for(let a of i)o.rows.push($s(a,o.header.length).map((c,f)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[f]})));return o}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let o=An(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{let o=Ql(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(n);o&&(n=o[1],i=o[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?n=n.slice(1):n=n.slice(1,-1)),Ds(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let n=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[n.toLowerCase()];if(!i){let o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return Ds(r,i,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let n=this.rules.inline.emStrongLDelim.exec(t);if(!(!n||n[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!r||this.rules.inline.punctuation.exec(r))){let i=[...n[0]].length-1,o,a,c=i,f=0,y=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(y.lastIndex=0,e=e.slice(-1*t.length+i);(n=y.exec(e))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(a=[...o].length,n[3]||n[4]){c+=a;continue}else if((n[5]||n[6])&&i%3&&!((i+a)%3)){f+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+f);let R=[...n[0]][0].length,x=t.slice(0,i+n.index+R+a);if(Math.min(i,a)%2){let I=x.slice(1,-1);return{type:"em",raw:x,text:I,tokens:this.lexer.inlineTokens(I)}}let w=x.slice(2,-2);return{type:"strong",raw:x,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return n&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let r,n;return e[2]==="@"?(r=e[1],n="mailto:"+r):(r=e[1],n=r),{type:"link",raw:e[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let r,n;if(e[2]==="@")r=e[0],n="mailto:"+r;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);r=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:r,href:n,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},rr=class Wi{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Hr,this.options.tokenizer=this.options.tokenizer||new pi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Mt,block:Xn.normal,inline:Sn.normal};this.options.pedantic?(r.block=Xn.pedantic,r.inline=Sn.pedantic):this.options.gfm&&(r.block=Xn.gfm,this.options.breaks?r.inline=Sn.breaks:r.inline=Sn.gfm),this.tokenizer.rules=r}static get rules(){return{block:Xn,inline:Sn}}static lex(e,r){return new Wi(r).lex(e)}static lexInline(e,r){return new Wi(r).inlineTokens(e)}lex(e){e=e.replace(Mt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let n=this.inlineQueue[r];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],n=!1){for(this.options.pedantic&&(e=e.replace(Mt.tabCharGlobal,"    ").replace(Mt.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,r))?(e=e.substring(i.raw.length),r.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=r.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:r.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=r.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):r.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=r.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},r.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),r.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),r.push(i);continue}let o=e;if(this.options.extensions?.startBlock){let a=1/0,c=e.slice(1),f;this.options.extensions.startBlock.forEach(y=>{f=y.call({lexer:this},c),typeof f=="number"&&f>=0&&(a=Math.min(a,f))}),a<1/0&&a>=0&&(o=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(o))){let a=r.at(-1);n&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):r.push(i),n=o.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=r.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):r.push(i);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let n=e,i=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let o=!1,a="";for(;e;){o||(a=""),o=!1;let c;if(this.options.extensions?.inline?.some(y=>(c=y.call({lexer:this},e,r))?(e=e.substring(c.raw.length),r.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let y=r.at(-1);c.type==="text"&&y?.type==="text"?(y.raw+=c.raw,y.text+=c.text):r.push(c);continue}if(c=this.tokenizer.emStrong(e,n,a)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),r.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),r.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),r.push(c);continue}let f=e;if(this.options.extensions?.startInline){let y=1/0,R=e.slice(1),x;this.options.extensions.startInline.forEach(w=>{x=w.call({lexer:this},R),typeof x=="number"&&x>=0&&(y=Math.min(y,x))}),y<1/0&&y>=0&&(f=e.substring(0,y+1))}if(c=this.tokenizer.inlineText(f)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(a=c.raw.slice(-1)),o=!0;let y=r.at(-1);y?.type==="text"?(y.raw+=c.raw,y.text+=c.text):r.push(c);continue}if(e){let y="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return r}},di=class{options;parser;constructor(t){this.options=t||Hr}space(t){return""}code({text:t,lang:e,escaped:r}){let n=(e||"").match(Mt.notSpaceStart)?.[0],i=t.replace(Mt.endingNewline,"")+`
`;return n?'<pre><code class="language-'+lr(n)+'">'+(r?i:lr(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:lr(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,r=t.start,n="";for(let a=0;a<t.items.length;a++){let c=t.items[a];n+=this.listitem(c)}let i=e?"ol":"ul",o=e&&r!==1?' start="'+r+'"':"";return"<"+i+o+`>
`+n+"</"+i+`>
`}listitem(t){let e="";if(t.task){let r=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+lr(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let i=0;i<t.header.length;i++)r+=this.tablecell(t.header[i]);e+=this.tablerow({text:r});let n="";for(let i=0;i<t.rows.length;i++){let o=t.rows[i];r="";for(let a=0;a<o.length;a++)r+=this.tablecell(o[a]);n+=this.tablerow({text:r})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${lr(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){let n=this.parser.parseInline(r),i=Ps(t);if(i===null)return n;t=i;let o='<a href="'+t+'"';return e&&(o+=' title="'+lr(e)+'"'),o+=">"+n+"</a>",o}image({href:t,title:e,text:r,tokens:n}){n&&(r=this.parser.parseInline(n,this.parser.textRenderer));let i=Ps(t);if(i===null)return lr(r);t=i;let o=`<img src="${t}" alt="${r}"`;return e&&(o+=` title="${lr(e)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:lr(t.text)}},os=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},nr=class Bi{options;renderer;textRenderer;constructor(e){this.options=e||Hr,this.options.renderer=this.options.renderer||new di,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new os}static parse(e,r){return new Bi(r).parse(e)}static parseInline(e,r){return new Bi(r).parseInline(e)}parse(e,r=!0){let n="";for(let i=0;i<e.length;i++){let o=e[i];if(this.options.extensions?.renderers?.[o.type]){let c=o,f=this.options.extensions.renderers[c.type].call({parser:this},c);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(c.type)){n+=f||"";continue}}let a=o;switch(a.type){case"space":{n+=this.renderer.space(a);continue}case"hr":{n+=this.renderer.hr(a);continue}case"heading":{n+=this.renderer.heading(a);continue}case"code":{n+=this.renderer.code(a);continue}case"table":{n+=this.renderer.table(a);continue}case"blockquote":{n+=this.renderer.blockquote(a);continue}case"list":{n+=this.renderer.list(a);continue}case"html":{n+=this.renderer.html(a);continue}case"def":{n+=this.renderer.def(a);continue}case"paragraph":{n+=this.renderer.paragraph(a);continue}case"text":{let c=a,f=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],f+=`
`+this.renderer.text(c);r?n+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):n+=f;continue}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,r=this.renderer){let n="";for(let i=0;i<e.length;i++){let o=e[i];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=c||"";continue}}let a=o;switch(a.type){case"escape":{n+=r.text(a);break}case"html":{n+=r.html(a);break}case"link":{n+=r.link(a);break}case"image":{n+=r.image(a);break}case"strong":{n+=r.strong(a);break}case"em":{n+=r.em(a);break}case"codespan":{n+=r.codespan(a);break}case"br":{n+=r.br(a);break}case"del":{n+=r.del(a);break}case"text":{n+=r.text(a);break}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}},Rn=class{options;block;constructor(t){this.options=t||Hr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?rr.lex:rr.lexInline}provideParser(){return this.block?nr.parse:nr.parseInline}},ec=class{defaults=Xi();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=nr;Renderer=di;TextRenderer=os;Lexer=rr;Tokenizer=pi;Hooks=Rn;constructor(...t){this.use(...t)}walkTokens(t,e){let r=[];for(let n of t)switch(r=r.concat(e.call(this,n)),n.type){case"table":{let i=n;for(let o of i.header)r=r.concat(this.walkTokens(o.tokens,e));for(let o of i.rows)for(let a of o)r=r.concat(this.walkTokens(a.tokens,e));break}case"list":{let i=n;r=r.concat(this.walkTokens(i.items,e));break}default:{let i=n;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let a=i[o].flat(1/0);r=r.concat(this.walkTokens(a,e))}):i.tokens&&(r=r.concat(this.walkTokens(i.tokens,e)))}}return r}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let n={...r};if(n.async=this.defaults.async||n.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=e.renderers[i.name];o?e.renderers[i.name]=function(...a){let c=i.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[i.level];o?o.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),r.renderer){let i=this.defaults.renderer||new di(this.defaults);for(let o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,c=r.renderer[a],f=i[a];i[a]=(...y)=>{let R=c.apply(i,y);return R===!1&&(R=f.apply(i,y)),R||""}}n.renderer=i}if(r.tokenizer){let i=this.defaults.tokenizer||new pi(this.defaults);for(let o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,c=r.tokenizer[a],f=i[a];i[a]=(...y)=>{let R=c.apply(i,y);return R===!1&&(R=f.apply(i,y)),R}}n.tokenizer=i}if(r.hooks){let i=this.defaults.hooks||new Rn;for(let o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,c=r.hooks[a],f=i[a];Rn.passThroughHooks.has(o)?i[a]=y=>{if(this.defaults.async&&Rn.passThroughHooksRespectAsync.has(o))return(async()=>{let x=await c.call(i,y);return f.call(i,x)})();let R=c.call(i,y);return f.call(i,R)}:i[a]=(...y)=>{if(this.defaults.async)return(async()=>{let x=await c.apply(i,y);return x===!1&&(x=await f.apply(i,y)),x})();let R=c.apply(i,y);return R===!1&&(R=f.apply(i,y)),R}}n.hooks=i}if(r.walkTokens){let i=this.defaults.walkTokens,o=r.walkTokens;n.walkTokens=function(a){let c=[];return c.push(o.call(this,a)),i&&(c=c.concat(i.call(this,a))),c}}this.defaults={...this.defaults,...n}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return rr.lex(t,e??this.defaults)}parser(t,e){return nr.parse(t,e??this.defaults)}parseMarkdown(t){return(e,r)=>{let n={...r},i={...this.defaults,...n},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=t),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(e):e,c=await(i.hooks?await i.hooks.provideLexer():t?rr.lex:rr.lexInline)(a,i),f=i.hooks?await i.hooks.processAllTokens(c):c;i.walkTokens&&await Promise.all(this.walkTokens(f,i.walkTokens));let y=await(i.hooks?await i.hooks.provideParser():t?nr.parse:nr.parseInline)(f,i);return i.hooks?await i.hooks.postprocess(y):y})().catch(o);try{i.hooks&&(e=i.hooks.preprocess(e));let a=(i.hooks?i.hooks.provideLexer():t?rr.lex:rr.lexInline)(e,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let c=(i.hooks?i.hooks.provideParser():t?nr.parse:nr.parseInline)(a,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(a){return o(a)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let n="<p>An error occurred:</p><pre>"+lr(r.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(r);throw r}}},Wr=new ec;function Ke(t,e){return Wr.parse(t,e)}Ke.options=Ke.setOptions=function(t){return Wr.setOptions(t),Ke.defaults=Wr.defaults,wa(Ke.defaults),Ke};Ke.getDefaults=Xi;Ke.defaults=Hr;Ke.use=function(...t){return Wr.use(...t),Ke.defaults=Wr.defaults,wa(Ke.defaults),Ke};Ke.walkTokens=function(t,e){return Wr.walkTokens(t,e)};Ke.parseInline=Wr.parseInline;Ke.Parser=nr;Ke.parser=nr.parse;Ke.Renderer=di;Ke.TextRenderer=os;Ke.Lexer=rr;Ke.lexer=rr.lex;Ke.Tokenizer=pi;Ke.Hooks=Rn;Ke.parse=Ke;Ke.options;Ke.setOptions;Ke.use;Ke.walkTokens;Ke.parseInline;nr.parse;rr.lex;let Cn=null;function ls(){return Cn||(Cn=document.createElement("div"),Cn.id="global-dialog-container",document.body.appendChild(Cn)),Cn}function cs(t){return new Promise(e=>{const r=ls(),n=()=>{Or(W``,r)},i=()=>{n(),e(t.confirmValue)},o=()=>{n(),e(t.cancelValue)},a=W`
            <wa-dialog label="${t.title}" open @wa-request-close=${o}>
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
                    ${t.renderContent({onConfirm:i,onCancel:o})}
                </div>
            </wa-dialog>
        `;Or(a,r),t.onAfterRender&&requestAnimationFrame(t.onAfterRender)})}function ki(t,e=!1){if(e){const r=Ke.parse(t,{async:!1});return W`<div class="dialog-message markdown-content" style="white-space: normal;">${zn(r)}</div>`}return W`<div class="dialog-message" style="white-space: pre-line;">${t}</div>`}const Wn=async(t,e="",r=!1)=>{let n=e;return cs({title:"Input",message:t,markdown:r,confirmValue:n,cancelValue:null,renderContent:({onConfirm:i,onCancel:o})=>{const a=f=>{n=f.target.value},c=f=>{f.key==="Enter"?(f.preventDefault(),i()):f.key==="Escape"&&(f.preventDefault(),o())};return W`
                ${ki(t,r)}
                <wa-input
                    value="${e}"
                    @input=${a}
                    @keydown=${c}
                    autofocus
                ></wa-input>
                
                <div class="dialog-actions">
                    <wa-button variant="default" @click=${o}>
                        Cancel
                    </wa-button>
                    <wa-button variant="primary" @click=${()=>{i()}}>
                        OK
                    </wa-button>
                </div>
            `},onAfterRender:()=>{const o=ls().querySelector("wa-input");if(o){const a=o.shadowRoot?.querySelector("input");a&&(a.focus(),a.select())}}}).then(()=>n)},fn=async(t,e=!1)=>cs({title:"Confirm",message:t,markdown:e,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:r,onCancel:n})=>W`
            ${ki(t,e)}
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${n}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${r}>
                    OK
                </wa-button>
            </div>
        `}),tc=async(t,e,r=!1)=>{await cs({title:t,message:e,markdown:r,confirmValue:void 0,cancelValue:void 0,renderContent:({onConfirm:n})=>W`
            ${ki(e,r)}
            
            <div class="dialog-actions">
                <wa-button variant="primary" @click=${n}>
                    OK
                </wa-button>
            </div>
        `})},rc=async(t,e,r,n=!1)=>new Promise(i=>{const o=ls();let a=!0;const c=()=>{a&&(a=!1,Or(W``,o),i())},f=(y,R,x)=>{if(!a)return;const w=W`
                <wa-dialog label="${y}" open @wa-request-close=${c}>
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
                            ${ki(R,n)}
                        </wa-scroller>
                        
                        <div class="dialog-actions">
                            <div class="dialog-actions-left">
                                ${x.filter(I=>I.label!=="Close").map(I=>W`
                                    <wa-button 
                                        variant="${I.variant||"default"}"
                                        ?disabled=${I.disabled}
                                        @click=${()=>{I.callback()}}
                                    >
                                        ${I.label}
                                    </wa-button>
                                `)}
                            </div>
                            <div class="dialog-actions-right">
                                ${x.filter(I=>I.label==="Close").map(I=>W`
                                    <wa-button 
                                        variant="${I.variant||"primary"}"
                                        @click=${()=>{I.callback(),c()}}
                                    >
                                        ${I.label}
                                    </wa-button>
                                `)}
                            </div>
                        </div>
                    </div>
                </wa-dialog>
            `;Or(w,o)};r.updateDialog=f,f(t,e,r)});mr.put("promptDialog",Wn);mr.put("confirmDialog",fn);mr.put("infoDialog",tc);mr.put("navigableInfoDialog",rc);var ii={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var nc=ii.exports,Ns;function ic(){return Ns||(Ns=1,(function(t){(function(e,r){t.exports?t.exports=r():e.Toastify=r()})(nc,function(e){var r=function(a){return new r.lib.init(a)},n="1.12.0";r.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},r.lib=r.prototype={toastify:n,constructor:r,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||r.defaults.text,this.options.node=a.node||r.defaults.node,this.options.duration=a.duration===0?0:a.duration||r.defaults.duration,this.options.selector=a.selector||r.defaults.selector,this.options.callback=a.callback||r.defaults.callback,this.options.destination=a.destination||r.defaults.destination,this.options.newWindow=a.newWindow||r.defaults.newWindow,this.options.close=a.close||r.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":r.defaults.gravity,this.options.positionLeft=a.positionLeft||r.defaults.positionLeft,this.options.position=a.position||r.defaults.position,this.options.backgroundColor=a.backgroundColor||r.defaults.backgroundColor,this.options.avatar=a.avatar||r.defaults.avatar,this.options.className=a.className||r.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?r.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||r.defaults.onClick,this.options.offset=a.offset||r.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:r.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||r.defaults.ariaLive,this.options.style=a.style||r.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var c in this.options.style)a.style[c]=this.options.style[c];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var f=document.createElement("img");f.src=this.options.avatar,f.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(f):a.insertAdjacentElement("afterbegin",f)}if(this.options.close===!0){var y=document.createElement("button");y.type="button",y.setAttribute("aria-label","Close"),y.className="toast-close",y.innerHTML="&#10006;",y.addEventListener("click",(function(de){de.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var R=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&R>360?a.insertAdjacentElement("afterbegin",y):a.appendChild(y)}if(this.options.stopOnFocus&&this.options.duration>0){var x=this;a.addEventListener("mouseover",function(de){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){x.removeElement(a)},x.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(de){de.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(de){de.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var w=i("x",this.options),I=i("y",this.options),q=this.options.position=="left"?w:"-"+w,B=this.options.gravity=="toastify-top"?I:"-"+I;a.style.transform="translate("+q+","+B+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var c=r.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,c),r.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),r.reposition()}).bind(this),400)}},r.reposition=function(){for(var a={top:15,bottom:15},c={top:15,bottom:15},f={top:15,bottom:15},y=document.getElementsByClassName("toastify"),R,x=0;x<y.length;x++){o(y[x],"toastify-top")===!0?R="toastify-top":R="toastify-bottom";var w=y[x].offsetHeight;R=R.substr(9,R.length-1);var I=15,q=window.innerWidth>0?window.innerWidth:screen.width;q<=360?(y[x].style[R]=f[R]+"px",f[R]+=w+I):o(y[x],"toastify-left")===!0?(y[x].style[R]=a[R]+"px",a[R]+=w+I):(y[x].style[R]=c[R]+"px",c[R]+=w+I)}return this};function i(a,c){return c.offset[a]?isNaN(c.offset[a])?c.offset[a]:c.offset[a]+"px":"0px"}function o(a,c){return!a||typeof c!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(c)>-1)}return r.lib.init.prototype=r.lib,r})})(ii)),ii.exports}var sc=ic();const us=na(sc),jt=t=>{console.info("[TOAST] INFO: ",t),us({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},je=t=>{console.error("[TOAST] ERROR: ",t),us({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},ac=t=>{console.warn("[TOAST] WARNING: ",t),us({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};mr.put("toastInfo",jt);mr.put("toastError",je);mr.put("toastWarning",ac);const Ra=(t,e)=>{const r=new dr.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{r.watch()}});r.watch(t)},ps=t=>function(e,r,n){const i=n.value;return i.signal=t,n};Object.defineProperty(ia.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class mn extends ia{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r];if(n instanceof Function){const i=n;i.name.startsWith("on")&&"topic"in i&&this.subscribe(i.topic,i)}}),Object.getOwnPropertyNames(e).forEach(r=>{const n=e[r];if(n instanceof Function){const i=n;i.name.startsWith("on")&&"signal"in i&&this.watch(i.signal,i)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,r){Yt(e,r.bind(this))}showInfo(e){jt(e)}showError(e){je(e)}nobubble(e){return r=>{r.stopPropagation(),e.bind(this)(r)}}command(e,r={}){return()=>{this.executeCommand(e,r)}}executeCommand(e,r){const n=Le.createExecutionContext(r);Le.execute(e,n)}watch(e,r){Ra(e,r.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}function ds(t){return new Promise((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)})}function oc(t,e){let r;const n=()=>{if(r)return r;const i=indexedDB.open(t);return i.onupgradeneeded=()=>i.result.createObjectStore(e),r=ds(i),r.then(o=>{o.onclose=()=>r=void 0},()=>{}),r};return(i,o)=>n().then(a=>o(a.transaction(e,i).objectStore(e)))}let Di;function La(){return Di||(Di=oc("keyval-store","keyval")),Di}function lc(t,e=La()){return e("readonly",r=>ds(r.get(t)))}function cc(t,e,r=La()){return r("readwrite",n=>(n.put(e,t),ds(n.transaction)))}class uc{async persistObject(e,r){return cc(e,r)}async getObject(e){return lc(e)}}const cr=new uc;zt.put("persistenceService",cr);const Xr=".geospace/settings.json",si="dialogSettings",jr="events/settings/changed";class pc{async checkSettings(){this.appSettings||(this.appSettings=await cr.getObject(Xr),this.appSettings||(this.appSettings={},await cr.persistObject(Xr,this.appSettings)),He(jr,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,r){await this.checkSettings(),this.appSettings[e]=r,await cr.persistObject(Xr,this.appSettings),He(jr,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await cr.persistObject(Xr,this.appSettings),He(jr,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[si]||{})[e]}async setDialogSetting(e,r){await this.checkSettings();const n=this.appSettings[si]||{};n[e]=r,this.appSettings[si]=n,await cr.persistObject(Xr,this.appSettings),He(jr,this.appSettings)}}const Et=new pc;zt.put("appSettings",Et);const Op=Object.freeze(Object.defineProperty({__proto__:null,DIALOG_SETTINGS_KEY:si,SETTINGS_FILE_PATH:Xr,TOPIC_SETTINGS_CHANGED:jr,appSettings:Et},Symbol.toStringTag,{value:"Module"}));class Kr extends mn{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let r=this;for(;r&&r!==document.body&&r!==document.documentElement;){const n=r.getAttribute("id");if(n){e.unshift(`#${n}`);break}const i=r.tagName.toLowerCase(),o=r.parentElement;if(!o)break;const c=Array.from(o.children).filter(f=>f.tagName.toLowerCase()===i).indexOf(r);c>=0?e.unshift(`${i}:${c}`):e.unshift(i),r=o}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),r=this.getAttribute("id");if(r){this.settingsKey=`${e}:${r}`;return}const n=this.buildDOMTreePath();n&&(this.settingsKey=`${e}:${n}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await Et.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await Et.setDialogSetting(this.settingsKey,e)}}var dc=Object.getOwnPropertyDescriptor,hc=(t,e,r,n)=>{for(var i=n>1?void 0:n?dc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};let Vi=class extends Kr{render(){return W`
            <slot></slot>
        `}};Vi.styles=Dt`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Vi=hc([vt("k-app")],Vi);var fc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,gn=(t,e,r,n)=>{for(var i=n>1?void 0:n?mc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&fc(e,r,i),i};let Tr=class extends wi(Kr){constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Yt(hn,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=Qe.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),n=`${r}:*`,i=Qe.getContributions(n),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const c of a){const f=`${r}:${c}`,y=Qe.getContributions(f);o.push(...y)}}this.contributions=[...i,...o,...e]}contributionCreator(t){if("command"in t){const e=t,r=!!e.showLabel;return W`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${r?e.label:""}
                </wa-button>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():zn(e)}else return W`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return W`
            <div class="toolbar-items" style=${Io({"justify-content":this.position})}>
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
        `}};Tr.styles=Dt`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;gn([Te()],Tr.prototype,"position",2);gn([Te({type:Boolean,attribute:"is-editor"})],Tr.prototype,"isEditor",2);gn([Te({attribute:!1})],Tr.prototype,"partToolbarContent",2);gn([Te({attribute:!1})],Tr.prototype,"partToolbarRenderer",2);gn([kt()],Tr.prototype,"contributions",2);Tr=gn([vt("k-toolbar")],Tr);var gc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,vn=(t,e,r,n)=>{for(var i=n>1?void 0:n?vc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&gc(e,r,i),i};let Rr=class extends wi(Kr){constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=kr(),this.dropdownRef=kr()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),Yt(hn,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=Qe.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),n=`${r}:*`,i=Qe.getContributions(n),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const c of a){const f=`${r}:${c}`,y=Qe.getContributions(f);o.push(...y)}}this.contributions=[...i,...o,...e]}show(t){this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){if("command"in t){const e=t;return W`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?W`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():zn(e)}return gt}render(){if(!this.isOpen)return gt;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():gt;return W`
            <wa-dropdown 
                ${Sr(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${Sr(this.anchorRef)}
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
        `}};Rr.styles=Dt`
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
    `;vn([Te({type:Boolean,attribute:"is-editor"})],Rr.prototype,"isEditor",2);vn([Te({attribute:!1})],Rr.prototype,"partContextMenuRenderer",2);vn([kt()],Rr.prototype,"contributions",2);vn([kt()],Rr.prototype,"isOpen",2);vn([kt()],Rr.prototype,"position",2);Rr=vn([vt("k-contextmenu")],Rr);class hs extends Kr{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=(t,e,r)=>{const n=new Map;for(let i=e;i<=r;i++)n.set(t[i],i);return n},yc=sa(class extends aa{constructor(t){if(super(t),t.type!==ko.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const i=[],o=[];let a=0;for(const c of t)i[a]=n?n(c,a):a,o[a]=r(c,a),a++;return{values:o,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){const i=So(t),{values:o,keys:a}=this.dt(e,r,n);if(!Array.isArray(i))return this.ut=a,o;const c=this.ut??=[],f=[];let y,R,x=0,w=i.length-1,I=0,q=o.length-1;for(;x<=w&&I<=q;)if(i[x]===null)x++;else if(i[w]===null)w--;else if(c[x]===a[I])f[I]=zr(i[x],o[I]),x++,I++;else if(c[w]===a[q])f[q]=zr(i[w],o[q]),w--,q--;else if(c[x]===a[q])f[q]=zr(i[x],o[q]),In(t,f[q+1],i[x]),x++,q--;else if(c[w]===a[I])f[I]=zr(i[w],o[I]),In(t,i[x],i[w]),w--,I++;else if(y===void 0&&(y=Ms(a,I,q),R=Ms(c,x,w)),y.has(c[x]))if(y.has(c[w])){const B=R.get(a[I]),de=B!==void 0?i[B]:null;if(de===null){const ve=In(t,i[x]);zr(ve,o[I]),f[I]=ve}else f[I]=zr(de,o[I]),In(t,i[x],de),i[B]=null;I++}else Ti(i[w]),w--;else Ti(i[x]),x++;for(;I<=q;){const B=In(t,f[q+1]);zr(B,o[I]),f[I++]=B}for(;x<=w;){const B=i[x++];B!==null&&Ti(B)}return this.ut=a,oa(t,f),Ao}}),bc="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",wc="/assets/jupyter-C78Cpfql.svg",xc="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";Co("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":bc,"../icons/jupyter.svg":wc,"../icons/python.svg":xc})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var Ic=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,Bn=(t,e,r,n)=>{for(var i=n>1?void 0:n?kc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Ic(e,r,i),i};let Br=class extends mn{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),r=t.pop();return W`
            <wa-icon library="${r||gt}" variant="${this.variant||gt}"
                         family="${this.family||gt}" name=${e} label="${this.label||this.name||gt}"></wa-icon>`}};Br.styles=Dt`
        :host {
            display: contents;
        }
    `;Bn([Te()],Br.prototype,"name",2);Bn([Te()],Br.prototype,"family",2);Bn([Te()],Br.prototype,"variant",2);Bn([Te()],Br.prototype,"label",2);Br=Bn([vt("k-icon")],Br);var Sc=Object.defineProperty,Ac=(t,e,r,n)=>{for(var i=void 0,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(e,r,i)||i);return i&&Sc(e,r,i),i};class $t extends hs{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return gt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return gt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Ui.set(null),Ui.set(this),Ye.set(null),Ye.set(this)}}Ac([Te()],$t.prototype,"dirty");const Pa="app-toolbars-main",yn="app-toolbars-main-right",Cc="app-toolbars-main-center",$a="app-toolbars-bottom",fs="app-toolbars-bottom-center",Gi="app-toolbars-bottom-end",tn="editor-area-main",Da="sidebar-main",Na="sidebar-main-bottom",Ma="sidebar-auxiliary",Tp="panel-bottom",_c=!1;var Fa=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(Fa||{}),Ec=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,qa=(t,e,r,n)=>{for(var i=n>1?void 0:n?Oc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Ec(e,r,i),i};let hi=class extends hs{constructor(){super(...arguments),this.contributions=[],this.tabGroup=kr(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&(this.updateToolbarFromComponent(r),requestAnimationFrame(()=>this.updateToolbarHeightVariable(r)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&this.updateContextMenuFromComponent(r)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,r=e.closest("wa-tab");if(r){const a=r.getAttribute("panel");if(a){const c=this.getTabPanel(a);if(c){const f=c.querySelector(".tab-content");if(f&&f.firstElementChild){const y=f.firstElementChild;y instanceof $t&&Ye.set(y)}}}return}const n=e.closest("wa-scroller.tab-content");if(!n)return;const i=n.closest("wa-tab-panel");if(!i)return;const o=i.querySelector(".tab-content");if(o&&o.firstElementChild){const a=o.firstElementChild;a instanceof $t&&Ye.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,r=e.target.closest("wa-scroller.tab-content");if(!r)return;e.preventDefault();const n=r.closest("wa-tab-panel");if(!n)return;const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,button:0});e.target.dispatchEvent(i),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(n);const o=n.querySelector("k-contextmenu");o&&o.show({x:e.clientX,y:e.clientY})})}))}),Yt(hn,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===tn;this.contributions.forEach(r=>{const n=this.getTabPanel(r.name);if(!n)return;const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const o=i.firstElementChild;o instanceof $t&&(o.tabContribution=r,o.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(n))})}}has(t){return!!this.getTabPanel(t)}activate(t){this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(t){if(this.contributions.find(r=>r.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const r=this.getTabPanel(t.name);if(r){const n=r.querySelector(".tab-content");if(n&&n.firstElementChild){const i=n.firstElementChild;i instanceof $t&&(i.tabContribution=t,i.isEditor=this.containerId===tn)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(r),this.updateToolbarHeightVariable(r),this.setupToolbarResizeObserver(r)})}})}handleTabAuxClick(t,e){t.button===Fa.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await fn("Unsaved changes will be lost: Do you really want to close?"))return;const r=this.getTabPanel(e);if(!r)return;const n=this.contributions.find(o=>o.name===e);if(!n)return;this.cleanupTabInstance(r);const i=this.contributions.indexOf(n);i>-1&&this.contributions.splice(i,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:r})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=Qe.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=this.resizeObservers.get(t);e&&(e.disconnect(),this.resizeObservers.delete(t));const r=t.querySelector(".tab-content");if(r&&r.firstElementChild){const n=r.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`)}getTab(t){return this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`)}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof $t)||!r.renderToolbar)return;const n=t.querySelector("k-toolbar");n&&(n.partToolbarRenderer=()=>r.renderToolbar(),n.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof $t)||!r.renderContextMenu)return;const n=t.querySelector("k-contextmenu");n&&(n.partContextMenuRenderer=()=>r.renderContextMenu(),n.requestUpdate())}updateToolbarHeightVariable(t){const e=t.querySelector(".tab-toolbar");if(!e)return;const r=e.offsetHeight;t.style.setProperty("--toolbar-height",`${r}px`)}setupToolbarResizeObserver(t){if(this.resizeObservers.has(t))return;const e=t.querySelector(".tab-toolbar");if(!e)return;const r=new ResizeObserver(()=>{this.updateToolbarHeightVariable(t)});r.observe(e),this.resizeObservers.set(t,r)}render(){return W`
            <wa-tab-group ${Sr(this.tabGroup)}>
                ${yc(this.contributions,t=>t.name,t=>W`
                        <wa-tab panel="${t.name}"
                                @auxclick="${e=>this.handleTabAuxClick(e,t)}">
                            <k-icon name="${t.icon}"></k-icon>
                            ${t.label}
                            ${xr(t.closable,()=>W`
                                <wa-icon name="xmark" label="Close"  @click="${e=>this.closeTab(e,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            <k-toolbar id="toolbar:${t.editorId??t.name}" 
                                       class="tab-toolbar"
                                       ?is-editor="${this.containerId===tn}"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${t.component?t.component(t.name):gt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu:${t.name}"
                                           ?is-editor="${this.containerId===tn}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};hi.styles=Dt`
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
    `;qa([kt()],hi.prototype,"contributions",2);hi=qa([vt("k-tabs")],hi);var Tc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,Vn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Rc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Tc(e,r,i),i};let cn=class extends Kr{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=t=>{if(!this.resizing)return;const r=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,n=[...this.resizing.startSizes];n[this.resizing.handleIndex]+=r,n[this.resizing.handleIndex+1]-=r;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,o=i*.05;if(n[this.resizing.handleIndex]>=o&&n[this.resizing.handleIndex+1]>=o){this.resizing.currentSizes=n;const a=n.map((c,f)=>{const R=`${(c/i*100).toFixed(2)}%`;return f===n.length-1?R:`${R} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,r)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${r*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${r*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const r=this.orientation==="horizontal"?t.clientX:t.clientY,n=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(o=>o.endsWith("%")?parseFloat(o)/100*n:(o.endsWith("px"),parseFloat(o)));this.resizing={handleIndex:e,startPos:r,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return gt;const t=this.gridSizes.flatMap((e,r)=>r===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",W`
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
            
            ${this.gridChildren.map((e,r)=>{if(r<this.gridChildren.length-1){const n=this.orientation==="horizontal"?`${r*2+2}`:"1",i=this.orientation==="vertical"?`${r*2+2}`:"1";return W`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${n};
                                grid-row: ${i};
                            "
                            @mousedown=${o=>this.startResize(o,r)}
                        ></div>
                    `}return gt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Vn([Te()],cn.prototype,"orientation",2);Vn([Te()],cn.prototype,"sizes",2);Vn([kt()],cn.prototype,"gridSizes",2);Vn([kt()],cn.prototype,"gridChildren",2);cn=Vn([vt("k-resizable-grid")],cn);const pr="events/filesys/workspaceChanged",Mn="events/filesys/workspaceConnected";class fi{constructor(){this.state={}}getWorkspacePath(){const e=[];let r=this;for(;r;)e.push(r.getName()),r=r.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const r=e.getParent();if(r)e=r;else break}return e}}var za=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(za||{});class hr extends fi{}class sn extends fi{}class Lc extends hr{constructor(e,r){super(),this.contents=e,this.name=r}async getContents(e){return this.contents}async saveContents(e,r){this.contents=e}async copyTo(e){throw Error("Not supported")}delete(e,r){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class Fs extends hr{constructor(e,r){super(),this.fileHandle=e,this.parent=r}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const r=await this.fileHandle.getFile();return!e||e?.contentType==0?await r.text():e?.encoding==0||e?.uri?URL.createObjectURL(r):e?.blob?r:r.stream()}async saveContents(e,r){const n=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(n);else{const i=n.getWriter();try{await i.write(e)}finally{await i.close()}}}async copyTo(e){const r=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(r)}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):n}await r.listChildren(!0),He(pr,this.getWorkspace())}}}class Ir extends sn{constructor(e,r){super(),this.dirHandle=e,this.parent=r}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const r={};try{for await(const n of this.dirHandle.values()){const o=n.kind==="file"?new Fs(n,this):new Ir(n,this);r[o.getName()]=o}}catch(n){if(n.name==="NotFoundError")return this.files={},[];throw n}return this.files=r,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,r){if(!e)throw new Error("No path provided");const n=e.split("/");let i=this,o=!1;try{for(let a=0;a<n.length;a++){let c=n[a];if(c&&(c=c.trim()),!c)break;if(i instanceof Ir){if(await i.listChildren(),!i.files)return null;const f=i.files[c];if(f)i=f;else if(r?.create)if(o=!0,a<n.length-1)try{const y=await i.dirHandle.getDirectoryHandle(c,{create:!0}),R=new Ir(y,i);i.files[c]=R,i=R,i instanceof Ir&&await i.listChildren();continue}catch(y){throw y.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${n.slice(0,a+1).join("/")}`):y}else try{const y=await i.dirHandle.getFileHandle(c,{create:!0}),R=new Fs(y,i);return i.files[c]=R,R}catch(y){throw y.name==="NotFoundError"?new Error(`File not found or not accessible: ${n.join("/")}`):y}else return null}}}finally{o&&He(pr,this.getWorkspace())}return i}touch(){He(pr,this.getWorkspace())}async delete(e,r=!0){if(!e){const n=this.getParent();return n instanceof Ir&&(await n.listChildren(),n.files&&delete n.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,n?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:r}).then(async()=>{this.files&&delete this.files[e],He(pr,this.getWorkspace())})}async copyTo(e){for(const r of await this.listChildren()){const n=[e,r.getName()].join("/");await r.copyTo(n)}}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):n}await r.listChildren(!0),He(pr,this.getWorkspace())}}}class Pc{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&He(Mn,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await cr.getObject("workspace_data");if(!e)return;const r=this.contributions.get(e.type);if(!r){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(r.restore){const n=await r.restore(e.data);return n&&(this.currentType=e.type),n}}catch(n){console.error(`Failed to restore workspace of type ${e.type}:`,n)}}async connectWorkspace(e){const r=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!r)throw new Error("No workspace contribution can handle this input");const n=await r.connect(e),i=r.persist?await r.persist(n):e,o={type:r.type,data:i};return await cr.persistObject("workspace_data",o),this.currentType=r.type,this.workspace=Promise.resolve(n),He(Mn,n),n}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await cr.persistObject("workspace_data",null),await cr.persistObject("workspace",null)}}const Ot=new Pc;zt.put("workspaceService",Ot);Ot.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new Ir(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new Ir(t,void 0)},async persist(t){return t instanceof Ir?t.getHandle():null}});const qs=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var $c=Object.defineProperty,Dc=Object.getOwnPropertyDescriptor,Si=(t,e,r,n)=>{for(var i=n>1?void 0:n?Dc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&$c(e,r,i),i};let un=class extends $t{constructor(){super(...arguments),this.treeRef=kr(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace()}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await Ot.getWorkspace();t?await this.loadWorkspace(t):Le.execute("help")}renderToolbar(){const t=Ut.get()instanceof fi;return W`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const t=Ut.get()instanceof fi;return W`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>Delete</k-command>
        `}async onWorkspaceChanged(t){Ut.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t,!0):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&Ut.set(e[0].model?.data)}async resourceToTreeNode(t,e=!1){const r=t instanceof hr,n={data:t,label:t.getName(),icon:r?"file":"folder-open",leaf:r,children:[]};if(t instanceof sn&&e){for(const i of await t.listChildren(!1)){const o=await this.resourceToTreeNode(i,!1);n.children.push(o)}n.children.sort(qs)}return n}createTreeItems(t,e=!1){if(!t)return W``;const r=!t.leaf&&t.children.length===0;return W`
            <wa-tree-item 
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(n=>this.onLazyLoad(n,t))}
                .model=${t} 
                ?expanded=${e}
                ?lazy=${r}>
                <span><wa-icon name=${t.icon} label="${t.leaf?"File":"Folder"}"></wa-icon> ${t.label}</span>
                ${t.children.map(n=>this.createTreeItems(n,!1))}
            </wa-tree-item>`}async onLazyLoad(t,e){const r=e.data;r instanceof sn&&e.children.length===0&&await this.loadNodeChildren(e,r)}async loadNodeChildren(t,e){if(!this.loadingNodes.has(t)){this.loadingNodes.add(t);try{for(const r of await e.listChildren(!1)){_c&&r.getName().startsWith(".");const n=await this.resourceToTreeNode(r,!1);t.children.push(n)}t.children.sort(qs),this.requestUpdate()}catch(r){console.error("Failed to load directory children:",r)}finally{this.loadingNodes.delete(t)}}}async onFileDoubleClicked(t){const r=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:r})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const r=e[0].model;Ut.set(r.data)}else Ut.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=o=>{if(!o.dataTransfer?.types.includes("Files"))return;o.preventDefault(),o.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const c=o.target.closest("wa-tree-item");c&&c!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=c,c.classList.add("drop-target"))},r=o=>{o.dataTransfer?.types.includes("Files")&&(o.preventDefault(),t.classList.add("drag-over"))},n=o=>{const a=t.getBoundingClientRect(),c=o.clientX,f=o.clientY;(c<=a.left||c>=a.right||f<=a.top||f>=a.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async o=>{if(o.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!o.dataTransfer||!this.workspaceDir)return;const a=Array.from(o.dataTransfer.files);if(a.length===0)return;const c=await this.getDropTarget(o);await this.handleFilesDrop(a,c)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",r),t.removeEventListener("dragleave",n),t.removeEventListener("drop",i),t.addEventListener("dragover",e),t.addEventListener("dragenter",r),t.addEventListener("dragleave",n),t.addEventListener("drop",i)}async getDropTarget(t){const r=t.target.closest("wa-tree-item");if(r){const i=r.model.data;if(i instanceof sn)return i;const o=i.getParent();if(o)return o}return this.workspaceDir}async handleFilesDrop(t,e){const r=t.length;let n=0,i=0,o=0;for(const a of t)try{const c=this.buildTargetPath(e,a.name);if(await this.workspaceDir.getResource(c)&&!await fn(`File "${a.name}" already exists. Do you want to overwrite it?`)){o++;continue}await(await this.workspaceDir.getResource(c,{create:!0})).saveContents(a),n++}catch(c){console.error(`Failed to upload ${a.name}:`,c),i++}console.log(`Uploaded ${n}/${r} files${o>0?`, ${o} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const r=t.getWorkspacePath();return r?`${r}/${e}`:e}render(){return W`
            <div class="tree" ${Sr(this.treeRef)}>
                ${xr(!this.workspaceDir,()=>W`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>W`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};un.styles=Dt`
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
    `;Si([kt()],un.prototype,"root",2);Si([fa(pr)],un.prototype,"onWorkspaceChanged",1);Si([fa(Mn)],un.prototype,"onWorkspaceConnected",1);un=Si([vt("k-filebrowser")],un);class Nc{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,ma.set(this.updateCounter)}run(e,r){const n=this.createProgressMonitor(e);try{this.tasks.push(n),this.notifyUpdate(),r(n)}finally{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()}}async runAsync(e,r){const n=this.createProgressMonitor(e);return this.tasks.push(n),this.notifyUpdate(),r(n).finally(()=>{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()})}createProgressMonitor(e){const r={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(r,{set:(n,i,o)=>(n[i]=o,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const mi=new Nc;zt.put("taskService",mi);var Mc=Object.getOwnPropertyDescriptor,Fc=(t,e,r,n)=>{for(var i=n>1?void 0:n?Mc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};Qe.registerContribution(fs,{html:"<k-tasks></k-tasks>"});let Hi=class extends wi($t){render(){ma.get();const t=mi.getActiveTasks().length;if(t!=0)return W`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${t}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${t}
                </wa-button>
                ${mi.getActiveTasks().map(e=>{const r=e.progress>=0||e.totalSteps>0,n=e.progress>=0?e.progress:e.totalSteps>0?Math.round(e.currentStep/e.totalSteps*100):0,i=e.progress<0&&e.totalSteps>0;return W`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${e.name}</strong>: ${e.message}
                            </div>
                            ${r?W`
                                <wa-progress-bar value="${n}" style="--track-height: 1.25rem;">
                                    ${i?`${e.currentStep}/${e.totalSteps} - `:""}${n}%
                                </wa-progress-bar>
                            `:W`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};Hi.styles=Dt`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;Hi=Fc([vt("k-tasks")],Hi);var qc=Object.getOwnPropertyDescriptor,zc=(t,e,r,n)=>{for(var i=n>1?void 0:n?qc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};const zs="<no workspace>";let Us=class extends Kr{constructor(){super(...arguments),this.workspaceName=zs}doInitUI(){this.updateWorkspaceName(),Yt(Mn,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Ot.getWorkspace().then(t=>{this.workspaceName=t?.getName()||zs,this.requestUpdate()})}handleLoadWorkspace(){Le.execute("load_workspace",{source:this})}render(){return W`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};Us=zc([vt("k-workspace-name")],Us);var Uc=Object.getOwnPropertyDescriptor,jc=(t,e,r,n)=>{for(var i=n>1?void 0:n?Uc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};const js="<no part>";Qe.registerContribution(fs,{html:"<k-part-name></k-part-name>"});let Ws=class extends wi(Kr){getPartName(){const t=Ye.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||js}render(){const e=Ye.get()?.tabContribution?.icon||"box";return W`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Ws=jc([vt("k-part-name")],Ws);const ai="events/extensionsregistry/extensionsConfigChanged",_n="extensions";class Wc{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,Yt(jr,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(r=>this.isEnabled(r.id)).map(r=>this.load(r.id).catch(n=>{je("Extension could not be loaded: "+n.message)}))||[];await Promise.all(e)})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Et.get(_n),this.extensionsSettings||(await Et.set(_n,[]),this.extensionsSettings=await Et.get(_n)),He(ai,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(r=>r.id===e&&r.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,r=!1){this.isEnabled(e)||(lt.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,r)}).catch(n=>{lt.error(`Could not load extension: ${e}`)}))}async load(e,r=[]){if(this.loadedExtensions.has(e))return;const n=this.loadingPromises.get(e);if(n)return n;if(r.includes(e)){const a=[...r,e].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const i=this.extensions[e];if(!i)throw new Error("Extension not found: "+e);const o=(async()=>{try{if(i.dependencies&&i.dependencies.length>0){lt.debug(`Loading dependencies for ${e}: ${i.dependencies.join(", ")}`);const c=[...r,e];for(const f of i.dependencies)await this.load(f,c),this.isEnabled(f)||(await this.updateEnablementAsync(f,!0,!1),lt.debug(`Auto-enabled dependency: ${f}`))}const a=await mi.runAsync("Loading extension: "+i.name,()=>{if(i.loader)return i.loader();if(i.url)return import(i.url)});this.loadedExtensions.add(e),a?.default instanceof Function&&a?.default(mr.getProxy()),lt.debug(`Extension loaded: ${e}`)}catch(a){throw this.loadedExtensions.delete(e),a}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,o),o}disable(e,r=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,r)}updateEnablement(e,r,n){this.checkExtensionsConfig().then(()=>{const i=this.extensionsSettings?.find(o=>o.id==e);i?i.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),Et.set(_n,this.extensionsSettings).then(()=>{if(n){const o=this.extensions[e];jt(r?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}He(ai,this.extensionsSettings)})})}async updateEnablementAsync(e,r,n){await this.checkExtensionsConfig();const i=this.extensionsSettings?.find(o=>o.id==e);if(i?i.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),await Et.set(_n,this.extensionsSettings),n){const o=this.extensions[e];jt(r?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}He(ai,this.extensionsSettings)}}lt.debug("ExtensionRegistry initializing...");const Ue=new Wc;zt.put("extensionRegistry",Ue);lt.debug("ExtensionRegistry initialized");const Ne=Un("AppLoader");function En(t){return t instanceof Error?t.message:String(t)}function Bc(t){try{const r=new URL(t).pathname.split("/").filter(Boolean);return r.length>0?r[r.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function Vc(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const r=e[0];if(!(!r||r==="index.html"||r.endsWith(".html")))return r}class Gc{constructor(){this.apps=new Map,this.started=!1,this.container=document.body}registerApp(e,r){this.apps.has(e.id)&&Ne.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Ne.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),r?.defaultAppId&&(this.defaultAppId=r.defaultAppId),r?.container&&(this.container=r.container),r?.autoStart&&!this.started&&this.start()}async loadExtensionFromUrl(e){Ne.info(`Loading extension from URL: ${e}...`);try{const r=`url:${e}`;if(Ue.isEnabled(r)){Ne.info(`Extension from URL ${e} is already enabled`);return}const n={id:r,name:`Extension from ${e}`,description:`Extension loaded from URL: ${e}`,url:e};Ue.registerExtension(n),Ne.info(`Registered extension from URL: ${r}`),Ue.enable(r,!1),Ne.info(`Successfully enabled extension from URL: ${e}`)}catch(r){throw Ne.error(`Failed to load extension from URL ${e}: ${En(r)}`),r}}async loadAppFromUrl(e){Ne.info(`Loading app from URL: ${e}...`);try{const r=await import(e);if(!r.default)throw new Error(`Module at ${e} does not have a default export`);const n=r.default;if(!n.id||!n.name||!n.version||!n.render)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return Ne.info(`Successfully loaded app definition from URL: ${n.name} (${n.id})`),n}catch(r){throw Ne.error(`Failed to load app from URL ${e}: ${En(r)}`),r}}async start(){if(this.started){Ne.debug("AppLoader already started");return}document.readyState==="loading"&&await new Promise(f=>{document.addEventListener("DOMContentLoaded",()=>f(),{once:!0})}),this.started=!0,Ne.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),r=e.get("app"),n=e.get("appId"),i=Vc(),o=this.apps.size;let a;if(r&&(a=Bc(r),a&&Ne.info(`Extracted app ID from URL path: ${a}`)),i&&Ne.info(`Extracted app ID from current page path: ${i}`),r)try{Ne.info(`URL parameter 'app' found: ${r}, attempting to load extension or app`);try{await this.loadExtensionFromUrl(r),Ne.info(`Successfully loaded extension from URL: ${r}`)}catch(f){Ne.info(`Failed to load as extension, trying as app definition: ${En(f)}`);try{const y=await this.loadAppFromUrl(r);this.registerApp(y),await this.loadApp(y.id,this.container),Ne.info(`Successfully loaded app from URL: ${r}`);return}catch(y){throw Ne.error(`Failed to load from URL as both extension and app: ${En(y)}`),y}}}catch(f){Ne.error(`Failed to load from URL parameter, falling back to default app: ${En(f)}`)}const c=this.selectAppToLoad({appIdFromUrl:n,appIdFromPath:i,appIdFromAppUrl:a,appsBeforeExtension:o});if(!c)throw new Error("No apps registered");await this.loadApp(c,this.container)}async loadApp(e,r){const n=this.apps.get(e);if(!n)throw new Error(`App '${e}' not found. Make sure it's registered.`);Ne.info(`Loading app: ${n.name}...`),this.currentApp&&(Ne.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Ne.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(i=>{Ue.disable(i)}))),n.contributions&&(Ne.info("Registering app contributions..."),n.contributions.ui&&(n.contributions.ui.forEach(i=>{const o=i.target;o&&Qe.registerContribution(o,i)}),Ne.info(`Registered ${n.contributions.ui.length} UI contributions`)),n.contributions.extensions&&(n.contributions.extensions.forEach(i=>{Ue.registerExtension(i)}),Ne.info(`Registered ${n.contributions.extensions.length} app extensions`))),n.extensions&&(Ne.info(`Enabling ${n.extensions.length} extensions...`),n.extensions.forEach(i=>{Ue.enable(i)})),n.initialize&&(Ne.info(`Initializing ${n.name}...`),await n.initialize()),this.currentApp=n,Ne.info(`App ${n.name} loaded successfully`),r&&this.renderApp(r)}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");Or(this.currentApp.render(),e),Ne.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}selectAppToLoad(e){const{appIdFromUrl:r,appIdFromPath:n,appIdFromAppUrl:i,appsBeforeExtension:o}=e;if(r){if(this.apps.has(r))return Ne.info(`Loading app specified by URL parameter 'appId': ${r}`),r;Ne.warn(`App ID '${r}' from URL parameter not found`)}if(n){if(this.apps.has(n))return Ne.info(`Loading app from URL path: ${n}`),n;Ne.debug(`App ID '${n}' from URL path not found, continuing search`)}if(i&&this.apps.has(i))return Ne.info(`Loading app using ID extracted from app URL path: ${i}`),i;if(this.apps.size>o){const c=Array.from(this.apps.values()).slice(o);if(c.length>0){const f=c[0];return Ne.info(`Loading app registered by extension: ${f.name} (${f.id})`),f.id}}if(this.defaultAppId){if(this.apps.has(this.defaultAppId))return this.defaultAppId;Ne.warn(`Default app '${this.defaultAppId}' not found`)}const a=this.getRegisteredApps();if(a.length>0){const c=a[0];return Ne.info(`Loading first registered app: ${c.name} (${c.id})`),c.id}}}const Gn=new Gc;zt.put("appLoaderService",Gn);var Hc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,ms=(t,e,r,n)=>{for(var i=n>1?void 0:n?Kc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Hc(e,r,i),i};let Fn=class extends $t{constructor(){super(...arguments),this.filterText=""}doInitUI(){Yt(ai,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){Ue.enable(t.id,!0),this.requestUpdate()}disable(t){Ue.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=Gn.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return Ue.getExtensions();const t=this.filterText.toLowerCase();return Ue.getExtensions().filter(e=>e.name.toLowerCase().includes(t)||(e.description?.toLowerCase().includes(t)??!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],r=[];return t.forEach(n=>{Ue.isEnabled(n.id)?e.push(n):r.push(n)}),e.sort((n,i)=>n.name.localeCompare(i.name)),r.sort((n,i)=>n.name.localeCompare(i.name)),{enabled:e,available:r}}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return W`
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
        `}render(){const t=this.getGroupedExtensions(),e=t.enabled.length>0||t.available.length>0;return W`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${e?W`
                        ${t.enabled.length>0?W`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    Installed (${t.enabled.length})
                                </span>
                                ${t.enabled.map(r=>W`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                        <span><k-icon name="${r.icon}"></k-icon> ${r.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                        ${t.available.length>0?W`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${t.available.length})
                                </span>
                                ${t.available.map(r=>W`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                        <span><k-icon name="${r.icon}"></k-icon> ${r.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                    `:W`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${xr(this.selectedExtension,r=>W`
                        <h1><k-icon name="${r.icon}"></k-icon> ${r.name}</h1>
                        <hr>
                        <div>
                            ${xr(Ue.isEnabled(r.id),()=>W`
                                <wa-button 
                                    title="${this.isExtensionRequired(r.id)?"This extension is required by the current app and cannot be uninstalled":"Disable this extension"}" 
                                    @click="${()=>this.disable(r)}"
                                    variant="danger" 
                                    appearance="plain"
                                    ?disabled=${this.isExtensionRequired(r.id)}>
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>
                                ${xr(this.isExtensionRequired(r.id),()=>W`
                                    <div class="required-hint">
                                        <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                        <span>This extension is required by the current app and cannot be uninstalled</span>
                                    </div>
                                `)}
                            `,()=>W`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(r)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${xr(r.experimental,()=>W`
                            <div style="margin-top: 1em;">
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}

                        <p style="margin-top: 1em;">${r.description}</p>

                        ${xr(r.dependencies&&r.dependencies.length>0,()=>W`
                            <div style="margin-top: 1.5em;">
                                <h3 style="margin-bottom: 0.5em;">
                                    <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies
                                </h3>
                                <div class="dependencies-list">
                                    ${r.dependencies.map(n=>{const i=Ue.getExtensions().find(a=>a.id===n),o=Ue.isEnabled(n);return W`
                                            <div class="dependency-item">
                                                <wa-icon 
                                                    name="${o?"check-circle":"circle"}" 
                                                    style="color: ${o?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                </wa-icon>
                                                <k-icon name="${i?.icon||"puzzle-piece"}"></k-icon>
                                                <span>${i?.name||n}</span>
                                                ${o?"":W`
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
        `}};Fn.styles=Dt`
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
    `;ms([kt()],Fn.prototype,"selectedExtension",2);ms([kt()],Fn.prototype,"filterText",2);Fn=ms([vt("k-extensions")],Fn);var Yc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,Ai=(t,e,r,n)=>{for(var i=n>1?void 0:n?Jc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Yc(e,r,i),i};let pn=class extends $t{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=kr()}connectedCallback(){super.connectedCallback(),this.loadSettings(),Vo(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Go()}log(t,e,r="info"){const n={timestamp:new Date,level:r,source:t,message:e};this.messages=[...this.messages,n],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(i=>i.level==="info").length,e=this.messages.filter(i=>i.level==="warning").length,r=this.messages.filter(i=>i.level==="error").length,n=this.messages.filter(i=>i.level==="debug").length;return W`
            <k-action 
                icon="list"
                title="All logs"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                All (${this.messages.length})
            </k-action>

            <k-action 
                icon="circle-info"
                title="Info logs"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                Info${t>0?` (${t})`:""}
            </k-action>

            <k-action 
                icon="triangle-exclamation"
                title="Warning logs"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                Warnings${e>0?` (${e})`:""}
            </k-action>

            <k-action 
                icon="circle-xmark"
                title="Error logs"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                Errors${r>0?` (${r})`:""}
            </k-action>

            <k-action 
                icon="bug"
                title="Debug logs"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                Debug${n>0?` (${n})`:""}
            </k-action>

            <wa-divider orientation="vertical"></wa-divider>

            <k-action 
                icon="arrow-down" 
                title="${this.autoScroll?"Auto-scroll enabled":"Auto-scroll disabled"}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?"Auto-scroll":"Manual"}
            </k-action>

            <k-action 
                icon="trash" 
                title="Clear logs"
                .action=${()=>this.clear()}>
                Clear
            </k-action>
        `}render(){const t=this.getFilteredMessages();return W`
            <div class="log-terminal">
                <div class="messages" ${Sr(this.containerRef)}>
                    ${t.length===0?W`<div class="empty-state">No log messages</div>`:t.map(e=>W`
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
        `}async loadSettings(){const t=await this.getDialogSetting();t&&(typeof t.filter=="string"&&(t.filter==="all"||["info","warning","error","debug"].includes(t.filter))&&(this.filter=t.filter),typeof t.autoScroll=="boolean"&&(this.autoScroll=t.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};pn.styles=Dt`
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
    `;Ai([kt()],pn.prototype,"messages",2);Ai([kt()],pn.prototype,"autoScroll",2);Ai([kt()],pn.prototype,"filter",2);pn=Ai([vt("k-log-terminal")],pn);var Zc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,ir=(t,e,r,n)=>{for(var i=n>1?void 0:n?Qc(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Zc(e,r,i),i};let Wt=class extends mn{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const t=ba.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),Yt(hn,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=Qe.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,r=e.disabled?.get();return W`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    ?disabled="${r}">
                    ${e.label}
                </k-command>
            `}if("html"in t){const r=t.html;return r instanceof Function?r():zn(r)}return gt}render(){const t=this.getKeybinding();return this.isInDropdown()?W`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${t?W`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?W`
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
                    
                    ${this.title?W`
                        <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:gt}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?W`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                        </k-command>
                    `:gt}
                </wa-dropdown>
            `:W`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${()=>this.handleClick()}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};Wt.styles=Dt`
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
    `;ir([Te()],Wt.prototype,"cmd",2);ir([Te()],Wt.prototype,"title",2);ir([Te()],Wt.prototype,"icon",2);ir([Te({type:Boolean})],Wt.prototype,"disabled",2);ir([Te()],Wt.prototype,"appearance",2);ir([Te()],Wt.prototype,"size",2);ir([Te({type:Object,attribute:!1})],Wt.prototype,"params",2);ir([Te()],Wt.prototype,"dropdown",2);ir([Te()],Wt.prototype,"placement",2);ir([kt()],Wt.prototype,"dropdownContributions",2);Wt=ir([vt("k-command")],Wt);var Xc=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,Pr=(t,e,r,n)=>{for(var i=n>1?void 0:n?eu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&Xc(e,r,i),i};let fr=class extends mn{constructor(){super(...arguments),this.title="",this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small"}handleClick(t){!this.disabled&&this.action&&(t.stopPropagation(),this.action(t))}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}render(){return this.isInDropdown()?W`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${t=>this.handleClick(t)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                </wa-dropdown-item>
            `:W`
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
        `}};fr.styles=Dt`
        :host {
            display: inline-block;
        }
    `;Pr([Te({type:Object,attribute:!1})],fr.prototype,"action",2);Pr([Te()],fr.prototype,"title",2);Pr([Te()],fr.prototype,"icon",2);Pr([Te({type:Boolean})],fr.prototype,"disabled",2);Pr([Te()],fr.prototype,"appearance",2);Pr([Te()],fr.prototype,"variant",2);Pr([Te()],fr.prototype,"size",2);fr=Pr([vt("k-action")],fr);var tu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,sr=(t,e,r,n)=>{for(var i=n>1?void 0:n?ru(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&tu(e,r,i),i};let Bt=class extends mn{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerRef=kr(),this.tabsRef=kr()}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(t){if(!this.disabled)if(this.containerId){const e=document.querySelector(`k-tabs#${this.containerId}`);if(!e){console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(t)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(t)})}handleDrawerHide(){this.drawerOpen=!1}doBeforeUI(){this.target&&(this.loadTabContributions(),Yt(hn,t=>{this.target&&t.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const t=Qe.getContributions(this.target);this.tabContributions=t.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(t){const e=t.disabled?.get();return W`
            <wa-dropdown-item 
                ?disabled=${e}
                @click=${()=>this.handleTabClick(t)}>
                <k-icon name="${t.icon||""}" label="${t.label}" slot="icon"></k-icon>
                ${t.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?gt:W`
            <wa-dropdown placement=${this.placement}>
                <wa-button 
                    slot="trigger"
                    appearance=${this.appearance}
                    size=${this.size}
                    ?disabled=${this.disabled}
                    with-caret
                    title=${this.title}>
                    <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                    <slot></slot>
                </wa-button>
                
                ${this.title?W`
                    <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:gt}
                
                ${this.tabContributions.map(t=>this.renderTabContribution(t))}
            </wa-dropdown>

            ${this.containerId?gt:W`
                <wa-drawer 
                    ${Sr(this.drawerRef)}
                    label="${this.title||"Fast Views"}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: 50vw;">
                    <k-tabs 
                        ${Sr(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            `}
        `:gt}};Bt.styles=Dt`
        :host {
            display: inline-block;
        }
    `;sr([Te()],Bt.prototype,"target",2);sr([Te()],Bt.prototype,"title",2);sr([Te()],Bt.prototype,"icon",2);sr([Te({type:Boolean})],Bt.prototype,"disabled",2);sr([Te()],Bt.prototype,"appearance",2);sr([Te()],Bt.prototype,"size",2);sr([Te()],Bt.prototype,"placement",2);sr([Te()],Bt.prototype,"containerId",2);sr([kt()],Bt.prototype,"tabContributions",2);sr([kt()],Bt.prototype,"drawerOpen",2);Bt=sr([vt("k-fastviews")],Bt);var nu=Object.defineProperty,iu=Object.getOwnPropertyDescriptor,gs=(t,e,r,n)=>{for(var i=n>1?void 0:n?iu(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&nu(e,r,i),i};let qn=class extends mn{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return W`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};qn.styles=Dt`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;gs([Te()],qn.prototype,"message",2);gs([Te()],qn.prototype,"icon",2);qn=gs([vt("k-no-content")],qn);Ue.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>st(()=>import("./git-extension-CXMFyRZt.js"),__vite__mapDeps([0,1,2])),icon:"code-branch",experimental:!0});Ue.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>st(()=>import("./pyterminal-extension-wGsfHB-B.js"),__vite__mapDeps([3,1,2,4])),icon:"k python",experimental:!0});Ue.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>st(()=>import("./k-linuxterminal-D-4jP8oR.js"),__vite__mapDeps([5,1,2,4])),icon:"terminal",experimental:!0});Ue.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>st(()=>import("./webllmservice--icUPpD0.js"),__vite__mapDeps([6,1,2])),icon:"robot"});Ue.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>st(()=>import("./p12-splitter-BpheodJ8.js"),__vite__mapDeps([7,1,2])),icon:"certificate"});Ue.registerExtension({id:"system.pythonpackagemanager",name:"Python Package Manager",description:"Manage Python packages for notebooks and other Python-based extensions",loader:()=>st(()=>import("./package-manager-extension-CKWnK3Y-.js"),__vite__mapDeps([8,1,2])),icon:"box"});Ue.registerExtension({id:"system.notebook",name:"Jupyter-like Notebook Editor",description:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>st(()=>import("./notebook-extension-CKiU9j8c.js"),__vite__mapDeps([9,1,2,10,11,8])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});Ue.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>st(()=>import("./command-palette-extension-Dp9gEWg3.js"),__vite__mapDeps([12,1,2])),icon:"terminal"});Ue.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>st(()=>import("./download-extension-CBBSXe9O.js"),__vite__mapDeps([13,1,2])),icon:"download"});Ue.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>st(()=>import("./unzip-extension-DPmW7hWU.js"),__vite__mapDeps([14,1,2])),icon:"box-archive"});Ue.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>st(()=>import("./md-editor-extension-tf0y9UZX.js"),__vite__mapDeps([15,1,2])),icon:"book"});Ue.registerExtension({id:"system.mediaviewer",name:"Media Viewer",description:"View PDF, image, and HTML files in the browser",loader:()=>st(()=>import("./media-viewer-extension-DvQbUwGN.js"),__vite__mapDeps([16,1,2])),icon:"image"});Ue.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>st(()=>import("./monaco-editor-extension-Ee1QtyhQ.js"),__vite__mapDeps([17,10,1,2,11,8])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});Ue.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>st(()=>import("./memory-usage-extension-Dqu2WSSA.js"),__vite__mapDeps([18,1,2])),icon:"microchip"});Ue.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>st(()=>import("./webdav-extension-B9nh8EjF.js"),__vite__mapDeps([19,1,2])),icon:"cloud"});Ue.registerExtension({id:"system.settings-tree",name:"Settings Tree Editor",description:"Tree-based editor for settings with in-place editing",loader:()=>st(()=>import("./settings-tree-extension-0VEZrcVc.js"),__vite__mapDeps([20,1,2])),icon:"sitemap"});Ue.registerExtension({id:"system.ai-system",name:"AI System",description:"Modern AI service with streaming support and agent workflows",loader:()=>st(()=>import("./ai-system-extension-CRohezIB.js"),__vite__mapDeps([21,1,2])),icon:"robot"});const Ua="events/aiservice/streamStarted",ja="events/aiservice/streamChunk",Wa="events/aiservice/streamComplete",oi="events/aiservice/streamError",Ba="events/aiservice/aiConfigChanged",Va="events/aiservice/agentWorkflowStarted",Ga="events/aiservice/agentWorkflowComplete",Ha="events/aiservice/agentWorkflowError",Hn="aiservice.agents",Vt="aiservice.chatProviders",Ln="aiConfig",Ka={defaultProvider:"openai",providers:[]},Ki=10,Rp=Object.freeze(Object.defineProperty({__proto__:null,AI_CONFIG_TEMPLATE:Ka,CID_AGENTS:Hn,CID_CHAT_PROVIDERS:Vt,KEY_AI_CONFIG:Ln,MAX_TOOL_ITERATIONS:Ki,TOPIC_AGENT_WORKFLOW_COMPLETE:Ga,TOPIC_AGENT_WORKFLOW_ERROR:Ha,TOPIC_AGENT_WORKFLOW_STARTED:Va,TOPIC_AICONFIG_CHANGED:Ba,TOPIC_AI_STREAM_CHUNK:ja,TOPIC_AI_STREAM_COMPLETE:Wa,TOPIC_AI_STREAM_ERROR:oi,TOPIC_AI_STREAM_STARTED:Ua},Symbol.toStringTag,{value:"Module"}));class Ya{constructor(){this.decoder=new TextDecoder}*processLines(e){for(const r of e)r.trim()!==""&&(yield r)}}class su extends Ya{async*parse(e){let r="";try{for(;;){const{done:n,value:i}=await e.read();if(n)break;r+=this.decoder.decode(i,{stream:!0});const o=r.split(`
`);r=o.pop()||"";for(const a of this.processLines(o))if(a.startsWith("data: ")){const c=a.slice(6).trim();if(c==="[DONE]"){yield{type:"done",content:""};continue}try{const f=JSON.parse(c);if(f.error){yield{type:"error",content:f.error.message||"Unknown error",metadata:f.error};continue}const y=this.parseChunk(f);y&&(yield y)}catch{continue}}}if(r.trim()&&r.startsWith("data: ")){const n=r.slice(6).trim();if(n!=="[DONE]")try{const i=JSON.parse(n),o=this.parseChunk(i);o&&(yield o)}catch{}}yield{type:"done",content:""}}finally{e.releaseLock()}}parseChunk(e){const r=e.choices?.[0]?.delta,n=e.choices?.[0];if(r?.content)return{type:"token",content:r.content,message:{role:r.role||"assistant",content:n?.message?.content||r.content}};if(n?.message?.tool_calls){const i=this.parseToolCalls(n.message.tool_calls,!0);if(i.length>0)return{type:"token",content:"",toolCalls:i}}else if(r?.tool_calls||n?.delta?.tool_calls){const i=this.parseToolCalls(r?.tool_calls||n?.delta?.tool_calls||[],!1);if(i.length>0)return{type:"token",content:"",toolCalls:i}}return null}parseToolCalls(e,r=!1){return e.filter(n=>n.function!==void 0).map((n,i)=>({id:n.id||`call_${n.index!==void 0?n.index:i}_${Date.now()}`,type:"function",function:{name:n.function?.name||"",arguments:n.function?.arguments||(r?"{}":"")},_index:n.index!==void 0?n.index:i}))}}class au extends Ya{async*parse(e){let r="";try{for(;;){const{done:n,value:i}=await e.read();if(n)break;r+=this.decoder.decode(i,{stream:!0});const o=r.split(`
`);r=o.pop()||"";for(const a of this.processLines(o))try{const c=JSON.parse(a);if(c.error){yield{type:"error",content:c.error,metadata:c};continue}if(c.done){yield{type:"done",content:""};continue}c.message?.content?yield{type:"token",content:c.message.content,message:{role:c.message.role||"assistant",content:c.message.content}}:c.response&&(yield{type:"token",content:c.response,message:{role:"assistant",content:c.response}})}catch{continue}}if(r.trim())try{const n=JSON.parse(r);n.message?.content&&(yield{type:"token",content:n.message.content,message:{role:n.message.role||"assistant",content:n.message.content}})}catch{}yield{type:"done",content:""}}finally{e.releaseLock()}}}class Ja{createParser(e,r){return e.includes("text/event-stream")||r.includes("openai")?new su:new au}async*stream(e){const r={model:e.model,stream:!0,messages:e.messages,...e.chatConfig.parameters};e.tools&&e.tools.length>0&&(r.tools=e.tools,r.tool_choice="auto");const n=await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(r),signal:e.signal});if(!n.ok){const c=await n.text().catch(()=>"Unknown error");yield{type:"error",content:`HTTP ${n.status}: ${c}`,metadata:{status:n.status,statusText:n.statusText}};return}const i=n.headers.get("content-type")||"",o=n.body?.getReader();if(!o){yield{type:"error",content:"Response body is not readable"};return}const a=this.createParser(i,e.chatConfig.chatApiEndpoint);for await(const c of a.parse(o))yield c}}class ou extends Ja{constructor(){super(...arguments),this.name="openai"}canHandle(e){return e.chatApiEndpoint.includes("openai")||e.chatApiEndpoint.includes("v1/chat/completions")}}class lu extends Ja{constructor(){super(...arguments),this.name="ollama"}canHandle(e){return e.name.toLowerCase()==="ollama"||e.chatApiEndpoint.includes("ollama")||e.chatApiEndpoint.includes("localhost:11434")}}class cu{constructor(){this.providers=[],this.registerDefaultProviders()}registerDefaultProviders(){this.providers.push(new ou),this.providers.push(new lu)}registerProvider(e){this.providers.push(e)}getProvider(e){const r=this.providers.find(n=>n.canHandle(e));return r||this.providers[0]}getAllProviders(){return[...this.providers]}}class uu{getAgentContributions(){return Qe.getContributions(Hn)}filterAndSortAgents(e,r){return e.filter(n=>n.canHandle?n.canHandle(r):!0).sort((n,i)=>(i.priority||0)-(n.priority||0))}getDefaultAgent(){return{role:"assistant",label:"Assistant",description:"General assistant",sysPrompt:"You are a helpful AI assistant.",priority:0,tools:{enabled:!0}}}getMatchingAgents(e,r){const n=this.getAgentContributions();let i=n.filter(o=>r&&!r.includes(o.role)?!1:o.canHandle?o.canHandle(e):!0);if(r&&r.length>0){if(i=i.sort((o,a)=>(a.priority||0)-(o.priority||0)),i.length===0){const o=r.includes("assistant")?"assistant":r[0];if(o==="assistant")i.push(this.getDefaultAgent());else{const a=n.find(c=>c.role===o);a?i.push(a):i.push(this.getDefaultAgent())}}}else i=this.filterAndSortAgents(i,e),i.length===0&&i.push(this.getDefaultAgent());return i}}class Za{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}commandToTool(e,r){const n={},i=[];return e.parameters?.forEach(c=>{const f=this.sanitizeFunctionName(c.name);n[f]={type:c.type||"string",description:c.description,...c.allowedValues&&{enum:c.allowedValues}},c.required===!0&&i.push(f)}),{type:"function",function:{name:this.sanitizeFunctionName(e.id),description:e.description||e.name,parameters:{type:"object",properties:n,required:i}}}}getAvailableTools(e,r){const n=Le.listCommands();let i=Object.values(n);return r&&(i=i.filter(o=>r(o,e))),i.map(o=>this.commandToTool(o,e))}}class pu{constructor(){this.toolRegistry=new Za,this.enhancers=[]}addEnhancer(e){this.enhancers.push(e)}getSysPrompt(e){const r=e.sysPrompt;return typeof r=="function"?r():r}rewriteChatHistoryForAgent(e,r){return e.map(n=>n.role==="user"?{role:n.role,content:n.content}:n.role===r?{role:"assistant",content:n.content}:{role:"user",content:`***Agent '${n.role}' replied:***
${n.content}`})}async enhancePrompt(e,r,n){let i=e;const o=[...r.promptEnhancers||[],...this.enhancers].sort((a,c)=>(c.priority||0)-(a.priority||0));for(const a of o)i=await a.enhance(i,n);return i}async build(e,r,n,i){i?.beforeSend&&await i.beforeSend(r,n);const o=this.sanitizeMessagesForAPI(r),a=this.rewriteChatHistoryForAgent(o,e.role),c=a.length-1;let f=a[c],y;e.tools?.enabled&&(y=this.toolRegistry.getAvailableTools(n,e.tools.commandFilter));const R=await this.enhancePrompt(f.content,e,n);f.content=R;const x=this.getSysPrompt(e);return a.unshift({role:"system",content:x}),{messages:a,userPromptIndex:c,tools:y}}sanitizeMessageForAPI(e){const r={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(r.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(r.tool_calls=e.tool_calls),r}sanitizeMessagesForAPI(e){return e.map(r=>this.sanitizeMessageForAPI(r))}}class du{constructor(){this.processors=[]}addProcessor(e){this.processors.push(e)}getSortedProcessors(){return[...this.processors].sort((e,r)=>(r.priority||0)-(e.priority||0))}async process(e,r,n){let i={...e};const o=[...r.messageProcessors||[],...this.processors].sort((c,f)=>(f.priority||0)-(c.priority||0));for(const c of o)i=await c.process(i,n);const a=i.actions?.some(c=>c.requiresAttention)||i.attentionRequests?.some(c=>c.requiresAction)||!1;return{...i,requiresAttention:a}}checkRequiresAttention(e){return e.actions?.some(r=>r.requiresAttention)||e.attentionRequests?.some(r=>r.requiresAction)||!1}}class hu{constructor(){this.accumulatedToolCalls=new Map,this.toolCallIndexMap=new Map}processChunk(e){if(e.type==="token"&&e.toolCalls&&e.toolCalls.length>0)for(const r of e.toolCalls){const n=r._index,i=r.id;let o,a;if(n!==void 0&&this.toolCallIndexMap.has(n)?(a=this.toolCallIndexMap.get(n),o=this.accumulatedToolCalls.get(a)):i&&this.accumulatedToolCalls.has(i)?(a=i,o=this.accumulatedToolCalls.get(a)):(a=i||`call_${n!==void 0?n:Date.now()}_${Math.random()}`,o=void 0),o){const c=o.function.arguments||"",f=r.function.arguments||"",y=c+f;this.accumulatedToolCalls.set(a,{id:a,type:r.type||o.type,function:{name:r.function.name||o.function.name,arguments:y}}),n!==void 0&&!this.toolCallIndexMap.has(n)&&this.toolCallIndexMap.set(n,a)}else this.accumulatedToolCalls.set(a,{...r,id:a}),n!==void 0&&this.toolCallIndexMap.set(n,a)}}getFinalToolCalls(){return Array.from(this.accumulatedToolCalls.values()).filter(e=>e.function.name&&e.function.name.trim().length>0).map(e=>{let r=e.function.arguments||"";return(!r||r.trim()==="")&&(r="{}"),{...e,function:{...e.function,arguments:r}}})}reset(){this.accumulatedToolCalls.clear(),this.toolCallIndexMap.clear()}}class Qa{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}findCommand(e,r){const n=e.function.name;return Le.getCommand(n)}parseArguments(e){if(!e||e.trim()===""||e==="{}")return{};try{const r=JSON.parse(e);return r&&typeof r=="object"?r:{}}catch(r){const n=r instanceof Error?r.message:String(r);return console.error(`[ToolExecutor] Failed to parse arguments: ${e} - ${n}`),{}}}sanitizeArguments(e,r){if(!r||!r.parameters||!e||typeof e!="object")return e||{};const n={};return r.parameters.forEach(i=>{const o=this.sanitizeFunctionName(i.name);o in e&&(n[i.name]=e[o])}),n}async executeToolCall(e,r){try{const n=this.findCommand(e,r),i=n?.id||e.function.name,o=e.function.arguments||"{}",a=this.parseArguments(o),c=this.sanitizeArguments(a,n),f=Le.createExecutionContext(c),y={...r,...f,params:c};let R=await Le.execute(i,y);const w={success:!0,message:`Command "${n?.name||i}" executed successfully`,command:i};if(c&&typeof c=="object"&&Object.keys(c).length>0&&(w.parameters=c),R){let I=R;if(I instanceof Promise&&(I=await I),w.result=I,n?.output&&n.output.length>0){const q=n.output.map(B=>`${B.name}: ${B.description||B.type||"value"}`).join(", ");w.output=q}}return{id:e.id,result:w}}catch(n){const i=n instanceof Error?n.message:String(n);let o=null;try{o=this.findCommand(e,r)}catch{o=null}const a=o?.name||e.function.name;let c=i;return i.includes("No handler found")||i.includes("No handlers registered")?c=`Command "${a}" cannot be executed. ${i}. This usually means the command is not available in the current context (e.g., a map editor may not be open or active).`:(i.includes("not available")||i.includes("GsMapEditor"))&&(c=`Command "${a}" cannot be executed: ${i}. Please ensure the required editor or component is open and active.`),{id:e.id,result:null,error:c}}}async executeToolCalls(e,r){const n=[];for(const i of e){const o=await this.executeToolCall(i,r);n.push(o)}return n}createToolCallAccumulator(){return new hu}createToolCallSignature(e){const r=e.function.arguments||"{}";let n={};try{const o=JSON.parse(r);n=o&&typeof o=="object"?o:{}}catch{n={}}const i=n&&typeof n=="object"?Object.keys(n).sort().reduce((o,a)=>(o[a]=n[a],o),{}):{};return`${e.function.name}:${JSON.stringify(i)}`}}const Lp=Object.freeze(Object.defineProperty({__proto__:null,ToolExecutor:Qa},Symbol.toStringTag,{value:"Module"}));class fu{async execute(e,r,n,i){const o=r.chatConfig;if(!o)throw new Error("Chat config is required");const a=e.map(async c=>{try{await i(c,r.chatContext.history,n.sharedState,o,r,n)}catch(f){const y=f instanceof Error?f:new Error(String(f));n.errors.set(c.role,y),r.onAgentError?.(c.role,y)}});await Promise.all(a)}}class mu{async execute(e,r,n,i){const o=r.chatConfig;if(!o)throw new Error("Chat config is required");let a=[...r.chatContext.history],c={...n.sharedState};for(const f of e)try{const y=this.createAgentContextWithPreviousAgents(c,r,n),R=await i(f,a,c,o,r,n);if(!R)break;const x=this.updateWorkflowState(R,a,c,y,n);a=x.currentMessages,c=x.accumulatedState}catch(y){const R=y instanceof Error?y:new Error(String(y));n.errors.set(f.role,R),r.onAgentError?.(f.role,R);break}}createAgentContextWithPreviousAgents(e,r,n){return{...e,...r.callContext.getProxy(),previousAgents:Array.from(n.messages.entries()).map(([i,o])=>({role:i,content:o.content}))}}updateWorkflowState(e,r,n,i,o){return r.push(e),n={...n,...i,message:e},o.sharedState=n,{currentMessages:r,accumulatedState:n}}}class gu{async execute(e,r,n,i){const o=r.chatConfig;if(!o)throw new Error("Chat config is required");let a=[...r.chatContext.history],c={...n.sharedState};for(const f of e)try{const y=this.createAgentContextWithPreviousAgents(c,r,n);if(f.canHandle&&!f.canHandle(y))continue;const R=await i(f,a,c,o,r,n);if(!R)break;const x=this.updateWorkflowState(R,a,c,y,n);a=x.currentMessages,c=x.accumulatedState}catch(y){const R=y instanceof Error?y:new Error(String(y));n.errors.set(f.role,R),r.onAgentError?.(f.role,R)}}createAgentContextWithPreviousAgents(e,r,n){return{...e,...r.callContext.getProxy(),previousAgents:Array.from(n.messages.entries()).map(([i,o])=>({role:i,content:o.content}))}}updateWorkflowState(e,r,n,i,o){return r.push(e),n={...n,...i,message:e},o.sharedState=n,{currentMessages:r,accumulatedState:n}}}class vu{constructor(){this.strategies=new Map([["parallel",new fu],["sequential",new mu],["conditional",new gu]])}registerStrategy(e,r){this.strategies.set(e,r)}async execute(e,r,n){const i=`workflow-${Date.now()}-${Math.random()}`,o=r.execution||"parallel",a=r.sharedState||{},c={messages:new Map,sharedState:{...a},errors:new Map};He(Va,{workflowId:i,options:r});try{const f=this.strategies.get(o);if(!f)throw new Error(`Unknown workflow execution strategy: ${o}`);return await f.execute(e,r,c,n),He(Ga,{workflowId:i,results:c}),c}catch(f){const y=f instanceof Error?f:new Error(String(f));throw He(Ha,{workflowId:i,error:y}),y}}}class yu{constructor(){this.activeRequests=new Map,this.providerFactory=new cu,this.agentRegistry=new uu,this.promptBuilder=new pu,this.messageProcessor=new du,this.toolExecutor=new Qa,this.workflowEngine=new vu,this.toolRegistry=new Za,Yt(jr,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.checkAIConfig().then()}getAgentContributions(){return this.agentRegistry.getAgentContributions()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const r=e.find(n=>n.name===this.aiConfig?.defaultProvider);if(r)return r}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig&&(this.aiConfig.defaultProvider=e,await Et.set(Ln,this.aiConfig)),this.getDefaultProvider()}createMessage(e){return{role:"user",content:e}}registerStreamingFetcher(e){this.providerFactory.registerProvider(e)}async checkAIConfig(){if(!this.aiConfig){if(this.aiConfig=await Et.get(Ln),!this.aiConfig){const e={...Ka,providers:[]};await Et.set(Ln,e),this.aiConfig=await Et.get(Ln)}He(Ba,this.aiConfig)}}createAgentContext(e,r,n={}){return{...e,...r.getProxy(),...n}}createFinalMessage(e,r){return{role:e.role,content:r.content,actions:r.actions,requiresAttention:r.requiresAttention,attentionRequests:r.attentionRequests,canContinue:r.canContinue}}async handleUserAttention(e,r,n,i){if(!r.requiresAttention||!n.userAttentionHandler)return!0;const o=[];if(r.attentionRequests&&o.push(...r.attentionRequests),r.actions)for(const f of r.actions)f.requiresAttention&&f.attentionRequest&&o.push(f.attentionRequest);if(o.length===0)return!0;if(i.pendingAttention||(i.pendingAttention=new Map),i.pendingAttention.set(e,o),n.onAttentionRequest)for(const f of o)n.onAttentionRequest(e,f);if(n.pauseOnAttention)return i.paused=!0,i.continuationToken=`${e}-${Date.now()}-${Math.random()}`,!1;const a=n.userAttentionHandler,c=this.createAgentContext(n.sharedState||{},n.callContext,{message:r});for(const f of o)if(a.onAttentionRequest){const y=await a.onAttentionRequest(f,c);if(f.requiresAction&&(y===!1||y===null))return!1;y&&typeof y=="string"&&(c[`attention_${f.type}_result`]=y)}else switch(f.type){case"confirmation":if(a.onConfirmation&&!await a.onConfirmation(f.message,c)&&f.requiresAction)return!1;break;case"input":if(a.onInput){const y=await a.onInput(f.message,void 0,c);if(!y&&f.requiresAction)return!1;y&&(c.attention_input_result=y)}break}return!0}async*streamCompletion(e){const r=`${Date.now()}-${Math.random()}`,n=new AbortController;this.activeRequests.set(r,n),e.signal&&e.signal.addEventListener("abort",()=>{n.abort()});const i=e.signal||n.signal;try{e.onStatus?.("starting"),He(Ua,{requestId:r,options:e});const o=e.chatConfig||await this.getDefaultProvider(),a=this.sanitizeMessagesForAPI(e.chatContext.history),c=this.providerFactory.getProvider(o),f=this.toolExecutor.createToolCallAccumulator();let y="",R={role:"assistant",content:""};for await(const I of c.stream({model:o.model,messages:a,chatConfig:o,tools:e.tools,signal:i})){if(I.type==="error"){e.onStatus?.("error"),He(oi,{requestId:r,chunk:I}),yield I;break}if(I.type==="token")f.processChunk(I),(!I.toolCalls||I.toolCalls.length===0)&&(y+=I.content,R.content=y),I.message?.role&&(R.role=I.message.role),I.content&&e.onToken?.(I.content),e.onStatus?.("streaming"),e.onProgress?.({received:y.length}),He(ja,{requestId:r,chunk:I}),yield I;else if(I.type==="done"){e.onStatus?.("complete"),He(Wa,{requestId:r}),yield I;break}else yield I}const x=f.getFinalToolCalls();return{message:{role:R.role||"assistant",content:y||"",...x.length>0&&{toolCalls:x}}}}catch(o){if(o instanceof Error&&o.name==="AbortError")throw e.onStatus?.("error"),He(oi,{requestId:r,error:"Request cancelled"}),o;e.onStatus?.("error");const a=o instanceof Error?o.message:String(o);throw He(oi,{requestId:r,error:a}),yield{type:"error",content:a,metadata:{error:o}},o}finally{this.activeRequests.delete(r)}}async handleStreamingPromptDirect(e){const r=this.streamCompletion(e);let n;for(;;){if(n=await r.next(),n.done)return n.value.message;const i=n.value;if(i.type==="error")throw new Error(i.content);if(i.type==="done"){const o=await r.next();if(o.done&&o.value)return o.value.message;if(!o.done)continue;throw new Error("Stream completed without return value")}}}sanitizeMessageForAPI(e){const r={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(r.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(r.tool_calls=e.tool_calls),r}sanitizeMessagesForAPI(e){return e.map(r=>this.sanitizeMessageForAPI(r))}async handleStreamingPrompt(e){this.getAgentContributions();const r=this.createAgentContext({},e.callContext,{userPrompt:e.chatContext.history[e.chatContext.history.length-1]?.content||""}),n=this.agentRegistry.getMatchingAgents(r),i=n.length>0?n.map(c=>c.role):["assistant"],o=await this.executeAgentWorkflow({chatContext:e.chatContext,chatConfig:e.chatConfig,callContext:e.callContext,execution:"parallel",stream:e.stream,signal:e.signal,onToken:(c,f)=>{e.onToken?.(f)},onStatus:(c,f)=>{e.onStatus?.(f)},roles:i}),a=Array.from(o.messages.values());return a.length===1?a[0]:a}async continueWorkflow(e,r,n){const i={sharedState:{...n.sharedState,...Object.fromEntries(r)}},o={...n,sharedState:i.sharedState,pauseOnAttention:!1};return this.executeAgentWorkflow(o)}cancelRequest(e){const r=this.activeRequests.get(e);return r?(r.abort(),this.activeRequests.delete(e),!0):!1}async executeAgentWorkflow(e){const r=this.createAgentContext(e.sharedState||{},e.callContext),n=this.agentRegistry.getMatchingAgents(r,e.roles);return this.workflowEngine.execute(n,e,async(i,o,a,c,f,y)=>this.executeAgent(i,o,a,c,f,y))}async executeAgent(e,r,n,i,o,a){o.onAgentStart?.(e.role);const c=this.createAgentContext(n,o.callContext,{userPrompt:r[r.length-1]?.content||""}),{messages:f,tools:y}=await this.promptBuilder.build(e,r,c,e.hooks),R=f.map(ve=>{const U={role:ve.role,content:ve.content};return ve.tool_call_id&&(U.tool_call_id=ve.tool_call_id),ve.tool_calls&&(U.tool_calls=ve.tool_calls),U});let x=await this.handleStreamingPromptDirect({chatContext:{history:R},chatConfig:i,callContext:o.callContext,stream:o.stream??!0,signal:o.signal,tools:y}),w=0;const I=[...f];for(;x.toolCalls&&x.toolCalls.length>0;){if(w++,w>Ki){console.warn(`[AIService] Maximum tool call iterations (${Ki}) reached`);break}let ve=[];if(o.requireToolApproval&&o.onToolApprovalRequest){const z=x.toolCalls.map(Ee=>{const se=Ee.function.arguments||"{}";let M={};try{M=JSON.parse(se)}catch{M={}}return`${Ee.function.name}(${Object.entries(M).map(([ie,fe])=>`${ie}=${fe}`).join(", ")})`}).join(", "),J={toolCalls:x.toolCalls,message:`The AI wants to execute: ${z}`};await o.onToolApprovalRequest(e.role,J)?ve=await this.toolExecutor.executeToolCalls(x.toolCalls,c):ve=x.toolCalls.map(Ee=>({id:Ee.id,result:{success:!1,message:"Tool execution cancelled by user",cancelled:!0}}))}else ve=await this.toolExecutor.executeToolCalls(x.toolCalls,c);const U=ve.map(z=>({role:"tool",content:z.error?JSON.stringify({error:z.error}):JSON.stringify(z.result),tool_call_id:z.id})),P={role:"assistant",content:x.content||""};x.toolCalls&&x.toolCalls.length>0&&(P.tool_calls=x.toolCalls.filter(z=>z.function.name&&z.function.name.trim().length>0).map(z=>({id:z.id,type:z.type,function:{name:z.function.name,arguments:z.function.arguments||"{}"}}))),I.push(P,...U);const G=I;x=await this.handleStreamingPromptDirect({chatContext:{history:G.map(z=>({role:z.role,content:z.content,...z.tool_call_id&&{tool_call_id:z.tool_call_id},...z.tool_calls&&{tool_calls:z.tool_calls}}))},chatConfig:i,callContext:o.callContext,stream:o.stream??!0,signal:o.signal,tools:y});const F=x.content&&x.content.trim().length>0,O=x.toolCalls&&x.toolCalls.length>0;if(F&&!O)break;if(F&&O){console.warn("[AIService] Model provided content but also called tools - treating as completion");break}}const q=await this.messageProcessor.process(x,e,this.createAgentContext(n,o.callContext,{message:x}));e.hooks?.afterReceive&&await e.hooks.afterReceive(q,this.createAgentContext(n,o.callContext));const B=this.createFinalMessage(e,q);return!await this.handleUserAttention(e.role,B,o,a)&&o.pauseOnAttention?null:(a.messages.set(e.role,B),o.onAgentComplete?.(e.role,B),B)}}const Pp=new yu,bu=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,wu=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``,Xa=t=>t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function",xu={enhance:async(t,e)=>{const r=e.activeEditor;if(!Xa(r))return t;const n=r.getEditor(),i=n.getModel(),o=i.getValueInRange(n.getSelection()),a=r.input?.data.getWorkspacePath();return o?`${t}

 Code selection within file "${a}":
${o}`:`${t}

Code in file "${a}":
${i.getValue()}`}},eo=(t,e,r)=>({label:r,description:`${r}`,role:`${t==="python"?"py":"js"}-programmer`,icon:"code",sysPrompt:e,canHandle:n=>{const i=n.activeEditor;return Xa(i)&&i.getLanguage()===t},promptEnhancers:[xu]});Qe.registerContribution(Hn,eo("python",bu,"Python Assistant"));Qe.registerContribution(Hn,eo("javascript",wu,"JavaScript Assistant"));Qe.registerContribution(Vt,{target:Vt,label:"Ollama",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""}});Qe.registerContribution(Vt,{target:Vt,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});Qe.registerContribution(Vt,{target:Vt,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});Qe.registerContribution(Vt,{target:Vt,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});Qe.registerContribution(Vt,{target:Vt,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});Qe.registerContribution(Vt,{target:Vt,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr"}});class Iu{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,Yt(Mn,()=>{})}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const r=o=>{const a=o.detail;a&&Array.from(a.querySelectorAll("*")).filter(f=>f instanceof $t).forEach(f=>{Ye.set(f),f.isEditor&&nn.set(f)})};e.addEventListener("tab-shown",r);const n=o=>{const a=o.detail;Array.from(a.querySelectorAll("*")).filter(f=>f instanceof $t).forEach(f=>{Ye.get()==f&&Ye.set(null),nn.get()==f&&nn.set(null)})};e.addEventListener("tab-closed",n),Ra(Ui,o=>{const c=o.closest("wa-tab-panel").getAttribute("name");e.markDirty(c,o.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((r,n)=>(n.ranking??0)-(r.ranking??0))}async handleInput(e){for(let r=0;r<this.editorInputHandlers.length;r++){const n=this.editorInputHandlers[r];if(n.canHandle(e))return await n.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${tn}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const r=this.getEditorArea();if(!r){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(r),r.has(e.key)){r.activate(e.key);return}r.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}}const Vr=new Iu;zt.put("editorRegistry",Vr);async function Ci(t,e=!0){const r=await Ot.getWorkspace();if(!r)return null;const n=t?.path;return e&&!n?null:{workspace:r,path:n||""}}async function Kn(t,e=!0){const r=await Ci(t,e);if(!r)return null;const{workspace:n,path:i}=r;if(!i)return null;try{const o=await n.getResource(i);return!o||!(o instanceof hr)?null:{workspace:n,path:i,file:o}}catch{return null}}Xe({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async({params:t})=>{let e=t?.path;const r=t?.contents,n=t?.ask,i=t?.extension;if((n||!e)&&(e=await Wn("Enter path to new file (directories will be created if not exist):",e||""),!e))return;const o=await Ci({path:e},!0);if(!o)return;const{workspace:a}=o;if(i&&!e.endsWith(i)&&(e+=i),await a.getResource(e)&&!await fn(`File "${e}" already exists. Do you want to overwrite it?`))return;const f=await a.getResource(e,{create:!0});return f?(r&&await f.saveContents(r),lt.info("File created: "+e)):je("Could not create file: "+e),e}}});Xe({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{let e,r=t.params&&t.params.path;if(r){const o=await Ot.getWorkspace();o&&(e=await o.getResource(r))}if(e||(e=Ut.get()),!e){je("No resource to rename provided!");return}const n=e.getName(),i=t.params?.newName||await Wn(`Enter new name for "${n}":`,n);if(!(!i||i===n))try{await e.rename(i),jt(`Resource renamed to: ${i}`)}catch(o){je(`Failed to rename ${n}: ${o.message}`)}}}});Xe({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{let e,r=t.params&&t.params.path;if(r){const o=await Ot.getWorkspace();o&&(e=await o.getResource(r))}if(e||(e=Ut.get()),!e){je("No resource to delete provided!");return}r=e.getWorkspacePath();const n=t.params&&t.params.confirm;let i=!0;if((n===void 0||n===!0)&&(i=await fn(`Are you sure you want to delete ${r}?`)),i)try{await e.delete(),jt("Resource deleted: "+r)}catch(o){je(`Resource ${r} could not be deleted: ${o.message||o}`)}}}});Xe({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Ot.connectWorkspace(e)).catch(e=>{je(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});Xe({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Ot.getWorkspace();e||je("No workspace selected."),e.touch()}}});Xe({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Kn({path:t.params?.path});if(!e)return;const{file:r}=e;await Vr.loadEditor(r)}}});Xe({command:{id:"head_file",name:"Head - Show first lines",description:"Shows the first N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the beginning (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the first N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Kn(t);if(!e)return;const{file:r}=e,n=t?.lines?parseInt(t.lines,10):10;if(isNaN(n)||n<1){je("Number of lines must be a positive integer");return}try{const i=await r.getContents();if(typeof i!="string"){je("File is not a text file");return}return i.split(`
`).slice(0,n).join(`
`)}catch(i){je(`Failed to read file: ${i.message}`);return}}}});Xe({command:{id:"tail_file",name:"Tail - Show last lines",description:"Shows the last N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the end (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the last N lines of the file"}]},handler:{execute:async({params:t})=>{const e=await Kn(t);if(!e)return;const{file:r}=e,n=t?.lines?parseInt(t.lines,10):10;if(isNaN(n)||n<1){je("Number of lines must be a positive integer");return}try{const i=await r.getContents();if(typeof i!="string"){je("File is not a text file");return}return i.split(`
`).slice(-n).join(`
`)}catch(i){je(`Failed to read file: ${i.message}`);return}}}});Xe({command:{id:"cat_file",name:"Cat - Show file contents",description:"Shows the complete contents of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0}],output:[{name:"content",description:"the complete contents of the file"}]},handler:{execute:async({params:t})=>{const e=await Kn(t);if(!e)return;const{file:r}=e;try{const n=await r.getContents();if(typeof n!="string"){je("File is not a text file");return}return n}catch(n){je(`Failed to read file: ${n.message}`);return}}}});Xe({command:{id:"wc_file",name:"Word count",description:"Counts lines, words, and characters in a file",parameters:[{name:"path",description:"the path of the file to analyze",required:!0}],output:[{name:"lines",description:"number of lines in the file"},{name:"words",description:"number of words in the file"},{name:"characters",description:"number of characters in the file"}]},handler:{execute:async({params:t})=>{const e=await Kn(t);if(!e)return;const{file:r}=e;try{const n=await r.getContents();if(typeof n!="string"){je("File is not a text file");return}const o=n.split(`
`).length,a=n.trim()===""?0:n.trim().split(/\s+/).filter(f=>f.length>0).length,c=n.length;return{lines:o,words:a,characters:c}}catch(n){je(`Failed to read file: ${n.message}`);return}}}});Xe({command:{id:"file_exists",name:"Check if file exists",description:"Checks if a file exists at the given path",parameters:[{name:"path",description:"the path of the file to check, relative to the workspace",required:!0}],output:[{name:"exists",description:"true if the file exists, false otherwise"}]},handler:{execute:async({params:t})=>{const e=await Ci(t);if(!e)return!1;const{workspace:r,path:n}=e;try{return await r.getResource(n)instanceof hr}catch{return!1}}}});async function to(t){const e=[],r=await t.listChildren(!0);for(const n of r)if(n instanceof hr)e.push(n.getWorkspacePath());else if(n instanceof sn){const i=await to(n);e.push(...i)}return e}Xe({command:{id:"ls",name:"List files",description:"Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",parameters:[{name:"path",description:"the path of the directory to list, relative to the workspace. If not provided, uses workspace root",required:!1},{name:"recursive",description:"whether to recursively traverse all subdirectories",type:"boolean",required:!1}],output:[{name:"files",description:"array of file paths relative to the workspace"}]},handler:{execute:async({params:t})=>{const e=await Ci(t,!1);if(!e)return je("No workspace available"),[];const{workspace:r,path:n}=e,i=t?.recursive===!0||t?.recursive==="true";try{let o=r;if(n){const a=await r.getResource(n);if(!a)return je(`Path not found: ${n}`),[];if(!(a instanceof sn))return je(`Path is not a directory: ${n}`),[];o=a}return i?await to(o):(await o.listChildren(!0)).filter(c=>c instanceof hr).map(c=>c.getWorkspacePath())}catch(o){return je(`Failed to list files: ${o.message}`),[]}}}});var wr={},er={},Bs;function ku(){if(Bs)return er;Bs=1,Object.defineProperty(er,"__esModule",{value:!0});function t(p){const s=p||"";return function(){throw new Error("this method "+s+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(p,s){if(!p)throw new Error(s||"Assertion failed")}function r(p,s,l){let d;Object.defineProperty(p,s,{get(){return d||(d=l.call(this)),d}})}function n(p){return p&&Object.assign({},p)}function i(p,s){const l=[];for(;s-- >0;)l.push(p());return l}function o(p,s){return new Array(s+1).join(p)}function a(p,s){return i(()=>p,s)}function c(p){const s=[];for(let l=0;l<p.length;l++){const d=p[l];p.lastIndexOf(d)!==l&&s.indexOf(d)<0&&s.push(d)}return s}function f(p){const s=[];return p.forEach(l=>{s.indexOf(l)<0&&s.push(l)}),s}function y(p){const s=p[0];return s===s.toUpperCase()}function R(p){return!y(p)}function x(p,s,l){const d=l||" ";return p.length<s?o(d,s-p.length)+p:p}function w(){this.strings=[]}w.prototype.append=function(p){this.strings.push(p)},w.prototype.contents=function(){return this.strings.join("")};const I=p=>String.fromCodePoint(parseInt(p,16));function q(p){if(p.charAt(0)==="\\")switch(p.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return I(p.slice(2,4));case"u":return p.charAt(2)==="{"?I(p.slice(3,-1)):I(p.slice(2,6));default:return p.charAt(1)}else return p}function B(p){if(p==null)return String(p);const s=Object.prototype.toString.call(p);try{let l;return p.constructor&&p.constructor.name?l=p.constructor.name:s.indexOf("[object ")===0?l=s.slice(8,-1):l=typeof p,l+": "+JSON.stringify(String(p))}catch{return s}}var de=Object.freeze({__proto__:null,abstract:t,assert:e,defineLazyProperty:r,clone:n,repeatFn:i,repeatStr:o,repeat:a,getDuplicates:c,copyWithoutDuplicates:f,isSyntactic:y,isLexical:R,padLeft:x,StringBuffer:w,unescapeCodePoint:q,unexpectedObjToString:B});const ve={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class U{constructor(){if(this.constructor===U)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(s){return s&&(this.source=s.trimmed()),this}}const P=Object.create(U.prototype),G=Object.create(U.prototype);class F extends U{constructor(s){super(),this.obj=s}}class O extends U{constructor(s,l){super(),this.from=s,this.to=l,this.matchCodePoint=s.length>1||l.length>1}}class z extends U{constructor(s){super(),this.index=s}}class J extends U{constructor(s){super(),this.terms=s}}class Se extends J{constructor(s,l,d){const v=s.rules[l].body;super([d,v]),this.superGrammar=s,this.name=l,this.body=d}}class Ee extends J{constructor(s,l,d,v){const E=s.rules[l].body;super([...d,E,...v]),this.superGrammar=s,this.ruleName=l,this.expansionPos=d.length}}class se extends U{constructor(s){super(),this.factors=s}}class M extends U{constructor(s){super(),this.expr=s}}class ie extends M{}class fe extends M{}class ke extends M{}ie.prototype.operator="*",fe.prototype.operator="+",ke.prototype.operator="?",ie.prototype.minNumMatches=0,fe.prototype.minNumMatches=1,ke.prototype.minNumMatches=0,ie.prototype.maxNumMatches=Number.POSITIVE_INFINITY,fe.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ke.prototype.maxNumMatches=1;class ae extends U{constructor(s){super(),this.expr=s}}class ee extends U{constructor(s){super(),this.expr=s}}class oe extends U{constructor(s){super(),this.expr=s}}class V extends U{constructor(s,l=[]){super(),this.ruleName=s,this.args=l}isSyntactic(){return y(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class xe extends U{constructor(s){super(),this.category=s,this.pattern=ve[s]}}function Pe(p,s){let l;return s?(l=new Error(s.getLineAndColumnMessage()+p),l.shortMessage=p,l.interval=s):l=new Error(p),l}function b(){return Pe("Interval sources don't match")}function S(p){const s=new Error;return Object.defineProperty(s,"message",{enumerable:!0,get(){return p.message}}),Object.defineProperty(s,"shortMessage",{enumerable:!0,get(){return"Expected "+p.getExpectedText()}}),s.interval=p.getInterval(),s}function ue(p,s,l){const d=s?`Grammar ${p} is not declared in namespace '${s}'`:"Undeclared grammar "+p;return Pe(d,l)}function Ce(p,s){return Pe("Grammar "+p.name+" is already declared in this namespace")}function Je(p){return Pe(`Grammar '${p.name}' does not support incremental parsing`)}function Me(p,s,l){return Pe("Rule "+p+" is not declared in grammar "+s,l)}function T(p,s,l){return Pe("Cannot override rule "+p+" because it is not declared in "+s,l)}function N(p,s,l){return Pe("Cannot extend rule "+p+" because it is not declared in "+s,l)}function L(p,s,l,d){let v="Duplicate declaration for rule '"+p+"' in grammar '"+s+"'";return s!==l&&(v+=" (originally declared in '"+l+"')"),Pe(v,d)}function H(p,s,l,d){return Pe("Wrong number of parameters for rule "+p+" (expected "+s+", got "+l+")",d)}function ne(p,s,l,d){return Pe("Wrong number of arguments for rule "+p+" (expected "+s+", got "+l+")",d)}function X(p,s,l){return Pe("Duplicate parameter names in rule "+p+": "+s.join(", "),l)}function j(p,s){return Pe("Invalid parameter to rule "+p+": "+s+" has arity "+s.getArity()+", but parameter expressions must have arity 1",s.source)}const re="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function ye(p,s){return Pe("Cannot apply syntactic rule "+p+" from here (inside a lexical context)",s.source)}function De(p){const{ruleName:s}=p;return Pe(`applySyntactic is for syntactic rules, but '${s}' is a lexical rule. `+re,p.source)}function Fe(p){return Pe("applySyntactic is not required here (in a syntactic context)",p.source)}function ge(p,s){return Pe("Incorrect argument type: expected "+p,s.source)}function Ie(p){return Pe("'...' can appear at most once in a rule body",p.source)}function $e(p){const s=p._node;e(s&&s.isNonterminal()&&s.ctorName==="escapeChar_unicodeCodePoint");const l=p.children.slice(1,-1).map(v=>v.source),d=l[0].coverageWith(...l.slice(1));return Pe(`U+${d.contents} is not a valid Unicode code point`,d)}function he(p,s){const l=s.length>0?s[s.length-1].args:[];let v="Nullable expression "+p.expr.substituteParams(l)+" is not allowed inside '"+p.operator+"' (possible infinite loop)";if(s.length>0){const E=s.map(D=>new V(D.ruleName,D.args)).join(`
`);v+=`
Application stack (most recent application last):
`+E}return Pe(v,p.expr.source)}function dt(p,s,l,d){return Pe("Rule "+p+" involves an alternation which has inconsistent arity (expected "+s+", got "+l+")",d.source)}function Ft(p){const s=p.map(l=>l.message);return Pe(["Errors:"].concat(s).join(`
- `),p[0].interval)}function wt(p,s,l,d){let v=d.slice(0,-1).map(Q=>{const me="  "+Q[0].name+" > "+Q[1];return Q.length===3?me+" for '"+Q[2]+"'":me}).join(`
`);v+=`
  `+s+" > "+p;let E="";p==="_iter"&&(E=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const D=[`Missing semantic action for '${p}' in ${l} '${s}'.${E}`,"Action stack (most recent call last):",v].join(`
`),te=Pe(D);return te.name="missingSemanticAction",te}function ht(p){if(p.length===1)throw p[0];if(p.length>1)throw Ft(p)}function xt(p){let s=0;return p.map(d=>{const v=d.toString();return s=Math.max(s,v.length),v}).map(d=>x(d,s))}function Gt(p,s,l){const d=p.length,v=p.slice(0,l),E=p.slice(l+s.length);return(v+s+E).substr(0,d)}function ar(...p){const s=this,{offset:l}=s,{repeatStr:d}=de,v=new w;v.append("Line "+s.lineNum+", col "+s.colNum+`:
`);const E=xt([s.prevLine==null?0:s.lineNum-1,s.lineNum,s.nextLine==null?0:s.lineNum+1]),D=(Y,K,ce)=>{v.append(ce+E[Y]+" | "+K+`
`)};s.prevLine!=null&&D(0,s.prevLine,"  "),D(1,s.line,"> ");const te=s.line.length;let Q=d(" ",te+1);for(let Y=0;Y<p.length;++Y){let K=p[Y][0],ce=p[Y][1];e(K>=0&&K<=ce,"range start must be >= 0 and <= end");const Ae=l-s.colNum+1;K=Math.max(0,K-Ae),ce=Math.min(ce-Ae,te),Q=Gt(Q,d("~",ce-K),K)}const me=2+E[1].length+3;return v.append(d(" ",me)),Q=Gt(Q,"^",s.colNum-1),v.append(Q.replace(/ +$/,"")+`
`),s.nextLine!=null&&D(2,s.nextLine,"  "),v.contents()}let Cr=[];function Jt(p){Cr.push(p)}function le(p){Cr.forEach(s=>{s(p)}),Cr=null}function _r(p,s){let l=1,d=1,v=0,E=0,D=null,te=null,Q=-1;for(;v<s;){const K=p.charAt(v++);K===`
`?(l++,d=1,Q=E,E=v):K!=="\r"&&d++}let me=p.indexOf(`
`,E);if(me===-1)me=p.length;else{const K=p.indexOf(`
`,me+1);D=K===-1?p.slice(me):p.slice(me,K),D=D.replace(/^\r?\n/,"").replace(/\r$/,"")}Q>=0&&(te=p.slice(Q,E).replace(/\r?\n$/,""));const Y=p.slice(E,me).replace(/\r$/,"");return{offset:s,lineNum:l,colNum:d,line:Y,prevLine:te,nextLine:D,toString:ar}}function gr(p,s,...l){return _r(p,s).toString(...l)}const qt=(()=>{let p=0;return s=>""+s+p++})();class at{constructor(s,l,d){this.sourceString=s,this.startIdx=l,this.endIdx=d}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...s){return at.coverage(...s,this)}collapsedLeft(){return new at(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new at(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return _r(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const s=[this.startIdx,this.endIdx];return gr(this.sourceString,this.startIdx,s)}minus(s){if(this.sourceString!==s.sourceString)throw b();return this.startIdx===s.startIdx&&this.endIdx===s.endIdx?[]:this.startIdx<s.startIdx&&s.endIdx<this.endIdx?[new at(this.sourceString,this.startIdx,s.startIdx),new at(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.endIdx&&s.endIdx<this.endIdx?[new at(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.startIdx&&s.startIdx<this.endIdx?[new at(this.sourceString,this.startIdx,s.startIdx)]:[this]}relativeTo(s){if(this.sourceString!==s.sourceString)throw b();return e(this.startIdx>=s.startIdx&&this.endIdx<=s.endIdx,"other interval does not cover this one"),new at(this.sourceString,this.startIdx-s.startIdx,this.endIdx-s.startIdx)}trimmed(){const{contents:s}=this,l=this.startIdx+s.match(/^\s*/)[0].length,d=this.endIdx-s.match(/\s*$/)[0].length;return new at(this.sourceString,l,d)}subInterval(s,l){const d=this.startIdx+s;return new at(this.sourceString,d,d+l)}}at.coverage=function(p,...s){let{startIdx:l,endIdx:d}=p;for(const v of s){if(v.sourceString!==p.sourceString)throw b();l=Math.min(l,v.startIdx),d=Math.max(d,v.endIdx)}return new at(p.sourceString,l,d)};const Ht=65535;class ze{constructor(s){this.source=s,this.pos=0,this.examinedLength=0}atEnd(){const s=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),s}next(){const s=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),s}nextCharCode(){const s=this.next();return s&&s.charCodeAt(0)}nextCodePoint(){const s=this.source.slice(this.pos++).codePointAt(0);return s>Ht&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),s}matchString(s,l){let d;if(l){for(d=0;d<s.length;d++){const v=this.next(),E=s[d];if(v==null||v.toUpperCase()!==E.toUpperCase())return!1}return!0}for(d=0;d<s.length;d++)if(this.next()!==s[d])return!1;return!0}sourceSlice(s,l){return this.source.slice(s,l)}interval(s,l){return new at(this.source,s,l||this.pos)}}class m{constructor(s,l,d,v,E,D,te){this.matcher=s,this.input=l,this.startExpr=d,this._cst=v,this._cstOffset=E,this._rightmostFailurePosition=D,this._rightmostFailures=te,this.failed()&&(r(this,"message",function(){const Q="Expected "+this.getExpectedText();return gr(this.input,this.getRightmostFailurePosition())+Q}),r(this,"shortMessage",function(){const Q="expected "+this.getExpectedText(),me=_r(this.input,this.getRightmostFailurePosition());return"Line "+me.lineNum+", col "+me.colNum+": "+Q}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const s=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=s.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const s=new w;let l=this.getRightmostFailures();l=l.filter(d=>!d.isFluffy());for(let d=0;d<l.length;d++)d>0&&(d===l.length-1?s.append(l.length>2?", or ":" or "):s.append(", ")),s.append(l[d].toString());return s.contents()}getInterval(){const s=this.getRightmostFailurePosition();return new at(this.input,s,s)}}class k{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(s){return this.applicationMemoKeyStack.indexOf(s.toMemoKey())>=0}enter(s){this.applicationMemoKeyStack.push(s.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(s,l){l.isLeftRecursion=!0,l.headApplication=s,l.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=l;const{applicationMemoKeyStack:d}=this,v=d.indexOf(s.toMemoKey())+1,E=d.slice(v);l.isInvolved=function(D){return E.indexOf(D)>=0},l.updateInvolvedApplicationMemoKeys=function(){for(let D=v;D<d.length;D++){const te=d[D];this.isInvolved(te)||E.push(te)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(s){if(!s.isLeftRecursion)return!0;const{applicationMemoKeyStack:l}=this;for(let d=0;d<l.length;d++){const v=l[d];if(s.isInvolved(v))return!1}return!0}memoize(s,l){return this.memo[s]=l,this.maxExaminedLength=Math.max(this.maxExaminedLength,l.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,l.rightmostFailureOffset),l}clearObsoleteEntries(s,l){if(s+this.maxExaminedLength<=l)return;const{memo:d}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(d).forEach(v=>{const E=d[v];s+E.examinedLength>l?delete d[v]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,E.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,E.rightmostFailureOffset))})}}const C="✗",u="✓",h="⋅",g="⇒",_="␉",A="␊",$="␍",Z={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function pe(p){return a(" ",p).join("")}function be(p,s,l){const d=We(p.slice(s,s+l));return d.length<l?d+a(" ",l-d.length).join(""):d}function We(p){return typeof p=="string"?p.replace(/ /g,h).replace(/\t/g,_).replace(/\n/g,A).replace(/\r/g,$):String(p)}class _e{constructor(s,l,d,v,E,D,te){this.input=s,this.pos=this.pos1=l,this.pos2=d,this.source=new at(s,l,d),this.expr=v,this.bindings=D,this.children=te||[],this.terminatingLREntry=null,this._flags=E?Z.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(s){const l=new _e(this.input,this.pos,this.pos2,s,this.succeeded,this.bindings,this.children);return l.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,l.isImplicitSpaces=this.isImplicitSpaces,l.isMemoized=this.isMemoized,l.isRootNode=this.isRootNode,l.terminatesLR=this.terminatesLR,l.terminatingLREntry=this.terminatingLREntry,l}recordLRTermination(s,l){this.terminatingLREntry=new _e(this.input,this.pos,this.pos2,this.expr,!1,[l],[s]),this.terminatingLREntry.terminatesLR=!0}walk(s,l){let d=s;typeof d=="function"&&(d={enter:d});function v(E,D,te){let Q=!0;d.enter&&d.enter.call(l,E,D,te)===_e.prototype.SKIP&&(Q=!1),Q&&(E.children.forEach(me=>{v(me,E,te+1)}),d.exit&&d.exit.call(l,E,D,te))}this.isRootNode?this.children.forEach(E=>{v(E,null,0)}):v(this,null,0)}toString(){const s=new w;return this.walk((l,d,v)=>{if(!l)return this.SKIP;if(l.expr.constructor.name!=="Alt"){if(s.append(be(l.input,l.pos,10)+pe(v*2+1)),s.append((l.succeeded?u:C)+" "+l.displayString),l.isHeadOfLeftRecursion&&s.append(" (LR)"),l.succeeded){const D=We(l.source.contents);s.append(" "+g+"  "),s.append(typeof D=="string"?'"'+D+'"':D)}s.append(`
`)}}),s.contents()}}_e.prototype.SKIP={},Object.keys(Z).forEach(p=>{const s=Z[p];Object.defineProperty(_e.prototype,p,{get(){return(this._flags&s)!==0},set(l){l?this._flags|=s:this._flags&=~s}})}),U.prototype.allowsSkippingPrecedingSpace=t("allowsSkippingPrecedingSpace"),P.allowsSkippingPrecedingSpace=G.allowsSkippingPrecedingSpace=V.prototype.allowsSkippingPrecedingSpace=F.prototype.allowsSkippingPrecedingSpace=O.prototype.allowsSkippingPrecedingSpace=xe.prototype.allowsSkippingPrecedingSpace=function(){return!0},J.prototype.allowsSkippingPrecedingSpace=M.prototype.allowsSkippingPrecedingSpace=oe.prototype.allowsSkippingPrecedingSpace=ee.prototype.allowsSkippingPrecedingSpace=ae.prototype.allowsSkippingPrecedingSpace=z.prototype.allowsSkippingPrecedingSpace=se.prototype.allowsSkippingPrecedingSpace=function(){return!1};let Be;Jt(p=>{Be=p});let qe;U.prototype.assertAllApplicationsAreValid=function(p,s){qe=0,this._assertAllApplicationsAreValid(p,s)},U.prototype._assertAllApplicationsAreValid=t("_assertAllApplicationsAreValid"),P._assertAllApplicationsAreValid=G._assertAllApplicationsAreValid=F.prototype._assertAllApplicationsAreValid=O.prototype._assertAllApplicationsAreValid=z.prototype._assertAllApplicationsAreValid=xe.prototype._assertAllApplicationsAreValid=function(p,s){},oe.prototype._assertAllApplicationsAreValid=function(p,s){qe++,this.expr._assertAllApplicationsAreValid(p,s),qe--},J.prototype._assertAllApplicationsAreValid=function(p,s){for(let l=0;l<this.terms.length;l++)this.terms[l]._assertAllApplicationsAreValid(p,s)},se.prototype._assertAllApplicationsAreValid=function(p,s){for(let l=0;l<this.factors.length;l++)this.factors[l]._assertAllApplicationsAreValid(p,s)},M.prototype._assertAllApplicationsAreValid=ae.prototype._assertAllApplicationsAreValid=ee.prototype._assertAllApplicationsAreValid=function(p,s){this.expr._assertAllApplicationsAreValid(p,s)},V.prototype._assertAllApplicationsAreValid=function(p,s,l=!1){const d=s.rules[this.ruleName],v=y(p)&&qe===0;if(!d)throw Me(this.ruleName,s.name,this.source);if(!l&&y(this.ruleName)&&!v)throw ye(this.ruleName,this);const E=this.args.length,D=d.formals.length;if(E!==D)throw ne(this.ruleName,D,E,this.source);const te=Be&&d===Be.rules.applySyntactic;if(Be&&d===Be.rules.caseInsensitive&&!(this.args[0]instanceof F))throw ge('a Terminal (e.g. "abc")',this.args[0]);if(te){const me=this.args[0];if(!(me instanceof V))throw ge("a syntactic rule application",me);if(!y(me.ruleName))throw De(me);if(v)throw Fe(this)}this.args.forEach(me=>{if(me._assertAllApplicationsAreValid(p,s,te),me.getArity()!==1)throw j(this.ruleName,me)})},U.prototype.assertChoicesHaveUniformArity=t("assertChoicesHaveUniformArity"),P.assertChoicesHaveUniformArity=G.assertChoicesHaveUniformArity=F.prototype.assertChoicesHaveUniformArity=O.prototype.assertChoicesHaveUniformArity=z.prototype.assertChoicesHaveUniformArity=oe.prototype.assertChoicesHaveUniformArity=xe.prototype.assertChoicesHaveUniformArity=function(p){},J.prototype.assertChoicesHaveUniformArity=function(p){if(this.terms.length===0)return;const s=this.terms[0].getArity();for(let l=0;l<this.terms.length;l++){const d=this.terms[l];d.assertChoicesHaveUniformArity();const v=d.getArity();if(s!==v)throw dt(p,s,v,d)}},Se.prototype.assertChoicesHaveUniformArity=function(p){const s=this.terms[0].getArity(),l=this.terms[1].getArity();if(s!==l)throw dt(p,l,s,this.terms[0])},se.prototype.assertChoicesHaveUniformArity=function(p){for(let s=0;s<this.factors.length;s++)this.factors[s].assertChoicesHaveUniformArity(p)},M.prototype.assertChoicesHaveUniformArity=function(p){this.expr.assertChoicesHaveUniformArity(p)},ae.prototype.assertChoicesHaveUniformArity=function(p){},ee.prototype.assertChoicesHaveUniformArity=function(p){this.expr.assertChoicesHaveUniformArity(p)},V.prototype.assertChoicesHaveUniformArity=function(p){},U.prototype.assertIteratedExprsAreNotNullable=t("assertIteratedExprsAreNotNullable"),P.assertIteratedExprsAreNotNullable=G.assertIteratedExprsAreNotNullable=F.prototype.assertIteratedExprsAreNotNullable=O.prototype.assertIteratedExprsAreNotNullable=z.prototype.assertIteratedExprsAreNotNullable=xe.prototype.assertIteratedExprsAreNotNullable=function(p){},J.prototype.assertIteratedExprsAreNotNullable=function(p){for(let s=0;s<this.terms.length;s++)this.terms[s].assertIteratedExprsAreNotNullable(p)},se.prototype.assertIteratedExprsAreNotNullable=function(p){for(let s=0;s<this.factors.length;s++)this.factors[s].assertIteratedExprsAreNotNullable(p)},M.prototype.assertIteratedExprsAreNotNullable=function(p){if(this.expr.assertIteratedExprsAreNotNullable(p),this.expr.isNullable(p))throw he(this,[])},ke.prototype.assertIteratedExprsAreNotNullable=ae.prototype.assertIteratedExprsAreNotNullable=ee.prototype.assertIteratedExprsAreNotNullable=oe.prototype.assertIteratedExprsAreNotNullable=function(p){this.expr.assertIteratedExprsAreNotNullable(p)},V.prototype.assertIteratedExprsAreNotNullable=function(p){this.args.forEach(s=>{s.assertIteratedExprsAreNotNullable(p)})};class ct{constructor(s){this.matchLength=s}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(s){if(this.children)return this.children[s]}indexOfChild(s){return this.children.indexOf(s)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(s){const l=this.indexOfChild(s);if(l<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(l===0)throw new Error("cannot get child before first child");return this.childAt(l-1)}childAfter(s){const l=this.indexOfChild(s);if(l<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(l===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(l+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class Re extends ct{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class nt extends ct{constructor(s,l,d,v){super(v),this.ruleName=s,this.children=l,this.childOffsets=d}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return R(this.ctorName)}isSyntactic(){return y(this.ctorName)}}class Nt extends ct{constructor(s,l,d,v){super(d),this.children=s,this.childOffsets=l,this.optional=v}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}U.prototype.eval=t("eval"),P.eval=function(p){const{inputStream:s}=p,l=s.pos,d=s.nextCodePoint();return d!==void 0?(p.pushBinding(new Re(String.fromCodePoint(d).length),l),!0):(p.processFailure(l,this),!1)},G.eval=function(p){const{inputStream:s}=p,l=s.pos;return s.atEnd()?(p.pushBinding(new Re(0),l),!0):(p.processFailure(l,this),!1)},F.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos;return s.matchString(this.obj)?(p.pushBinding(new Re(this.obj.length),l),!0):(p.processFailure(l,this),!1)},O.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos,d=this.matchCodePoint?s.nextCodePoint():s.nextCharCode();return d!==void 0&&this.from.codePointAt(0)<=d&&d<=this.to.codePointAt(0)?(p.pushBinding(new Re(String.fromCodePoint(d).length),l),!0):(p.processFailure(l,this),!1)},z.prototype.eval=function(p){return p.eval(p.currentApplication().args[this.index])},oe.prototype.eval=function(p){p.enterLexifiedContext();const s=p.eval(this.expr);return p.exitLexifiedContext(),s},J.prototype.eval=function(p){for(let s=0;s<this.terms.length;s++)if(p.eval(this.terms[s]))return!0;return!1},se.prototype.eval=function(p){for(let s=0;s<this.factors.length;s++){const l=this.factors[s];if(!p.eval(l))return!1}return!0},M.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos,d=this.getArity(),v=[],E=[];for(;v.length<d;)v.push([]),E.push([]);let D=0,te=l,Q;for(;D<this.maxNumMatches&&p.eval(this.expr);){if(s.pos===te)throw he(this,p._applicationStack);te=s.pos,D++;const ce=p._bindings.splice(p._bindings.length-d,d),Ae=p._bindingOffsets.splice(p._bindingOffsets.length-d,d);for(Q=0;Q<ce.length;Q++)v[Q].push(ce[Q]),E[Q].push(Ae[Q])}if(D<this.minNumMatches)return!1;let me=p.posToOffset(l),Y=0;if(D>0){const ce=v[d-1],Ae=E[d-1],Ge=Ae[Ae.length-1]+ce[ce.length-1].matchLength;me=E[0][0],Y=Ge-me}const K=this instanceof ke;for(Q=0;Q<v.length;Q++)p._bindings.push(new Nt(v[Q],E[Q],Y,K)),p._bindingOffsets.push(me);return!0},ae.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos;p.pushFailuresInfo();const d=p.eval(this.expr);return p.popFailuresInfo(),d?(p.processFailure(l,this),!1):(s.pos=l,!0)},ee.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos;return p.eval(this.expr)?(s.pos=l,!0):!1},V.prototype.eval=function(p){const s=p.currentApplication(),l=s?s.args:[],d=this.substituteParams(l),v=p.getCurrentPosInfo();if(v.isActive(d))return d.handleCycle(p);const E=d.toMemoKey(),D=v.memo[E];if(D&&v.shouldUseMemoizedResult(D)){if(p.hasNecessaryInfo(D))return p.useMemoizedResult(p.inputStream.pos,D);delete v.memo[E]}return d.reallyEval(p)},V.prototype.handleCycle=function(p){const s=p.getCurrentPosInfo(),{currentLeftRecursion:l}=s,d=this.toMemoKey();let v=s.memo[d];return l&&l.headApplication.toMemoKey()===d?v.updateInvolvedApplicationMemoKeys():v||(v=s.memoize(d,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),s.startLeftRecursion(this,v)),p.useMemoizedResult(p.inputStream.pos,v)},V.prototype.reallyEval=function(p){const{inputStream:s}=p,l=s.pos,d=p.getCurrentPosInfo(),v=p.grammar.rules[this.ruleName],{body:E}=v,{description:D}=v;p.enterApplication(d,this),D&&p.pushFailuresInfo();const te=s.examinedLength;s.examinedLength=0;let Q=this.evalOnce(E,p);const me=d.currentLeftRecursion,Y=this.toMemoKey(),K=me&&me.headApplication.toMemoKey()===Y;let ce;p.doNotMemoize?p.doNotMemoize=!1:K?(Q=this.growSeedResult(E,p,l,me,Q),d.endLeftRecursion(),ce=me,ce.examinedLength=s.examinedLength-l,ce.rightmostFailureOffset=p._getRightmostFailureOffset(),d.memoize(Y,ce)):(!me||!me.isInvolved(Y))&&(ce=d.memoize(Y,{matchLength:s.pos-l,examinedLength:s.examinedLength-l,value:Q,failuresAtRightmostPosition:p.cloneRecordedFailures(),rightmostFailureOffset:p._getRightmostFailureOffset()}));const Ae=!!Q;if(D&&(p.popFailuresInfo(),Ae||p.processFailure(l,this),ce&&(ce.failuresAtRightmostPosition=p.cloneRecordedFailures())),p.isTracing()&&ce){const Ge=p.getTraceEntry(l,this,Ae,Ae?[Q]:[]);K&&(e(Ge.terminatingLREntry!=null||!Ae),Ge.isHeadOfLeftRecursion=!0),ce.traceEntry=Ge}return s.examinedLength=Math.max(s.examinedLength,te),p.exitApplication(d,Q),Ae},V.prototype.evalOnce=function(p,s){const{inputStream:l}=s,d=l.pos;if(s.eval(p)){const v=p.getArity(),E=s._bindings.splice(s._bindings.length-v,v),D=s._bindingOffsets.splice(s._bindingOffsets.length-v,v),te=l.pos-d;return new nt(this.ruleName,E,D,te)}else return!1},V.prototype.growSeedResult=function(p,s,l,d,v){if(!v)return!1;const{inputStream:E}=s;for(;;){if(d.matchLength=E.pos-l,d.value=v,d.failuresAtRightmostPosition=s.cloneRecordedFailures(),s.isTracing()){const D=s.trace[s.trace.length-1];d.traceEntry=new _e(s.input,l,E.pos,this,!0,[v],[D.clone()])}if(E.pos=l,v=this.evalOnce(p,s),E.pos-l<=d.matchLength)break;s.isTracing()&&s.trace.splice(-2,1)}return s.isTracing()&&d.traceEntry.recordLRTermination(s.trace.pop(),v),E.pos=l+d.matchLength,d.value},xe.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos,d=s.next();return d&&this.pattern.test(d)?(p.pushBinding(new Re(d.length),l),!0):(p.processFailure(l,this),!1)},U.prototype.getArity=t("getArity"),P.getArity=G.getArity=F.prototype.getArity=O.prototype.getArity=z.prototype.getArity=V.prototype.getArity=xe.prototype.getArity=function(){return 1},J.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},se.prototype.getArity=function(){let p=0;for(let s=0;s<this.factors.length;s++)p+=this.factors[s].getArity();return p},M.prototype.getArity=function(){return this.expr.getArity()},ae.prototype.getArity=function(){return 0},ee.prototype.getArity=oe.prototype.getArity=function(){return this.expr.getArity()};function Ze(p,s){const l={};if(p.source&&s){const d=p.source.relativeTo(s);l.sourceInterval=[d.startIdx,d.endIdx]}return l}U.prototype.outputRecipe=t("outputRecipe"),P.outputRecipe=function(p,s){return["any",Ze(this,s)]},G.outputRecipe=function(p,s){return["end",Ze(this,s)]},F.prototype.outputRecipe=function(p,s){return["terminal",Ze(this,s),this.obj]},O.prototype.outputRecipe=function(p,s){return["range",Ze(this,s),this.from,this.to]},z.prototype.outputRecipe=function(p,s){return["param",Ze(this,s),this.index]},J.prototype.outputRecipe=function(p,s){return["alt",Ze(this,s)].concat(this.terms.map(l=>l.outputRecipe(p,s)))},Se.prototype.outputRecipe=function(p,s){return this.terms[0].outputRecipe(p,s)},Ee.prototype.outputRecipe=function(p,s){const l=this.terms.slice(0,this.expansionPos),d=this.terms.slice(this.expansionPos+1);return["splice",Ze(this,s),l.map(v=>v.outputRecipe(p,s)),d.map(v=>v.outputRecipe(p,s))]},se.prototype.outputRecipe=function(p,s){return["seq",Ze(this,s)].concat(this.factors.map(l=>l.outputRecipe(p,s)))},ie.prototype.outputRecipe=fe.prototype.outputRecipe=ke.prototype.outputRecipe=ae.prototype.outputRecipe=ee.prototype.outputRecipe=oe.prototype.outputRecipe=function(p,s){return[this.constructor.name.toLowerCase(),Ze(this,s),this.expr.outputRecipe(p,s)]},V.prototype.outputRecipe=function(p,s){return["app",Ze(this,s),this.ruleName,this.args.map(l=>l.outputRecipe(p,s))]},xe.prototype.outputRecipe=function(p,s){return["unicodeChar",Ze(this,s),this.category]},U.prototype.introduceParams=t("introduceParams"),P.introduceParams=G.introduceParams=F.prototype.introduceParams=O.prototype.introduceParams=z.prototype.introduceParams=xe.prototype.introduceParams=function(p){return this},J.prototype.introduceParams=function(p){return this.terms.forEach((s,l,d)=>{d[l]=s.introduceParams(p)}),this},se.prototype.introduceParams=function(p){return this.factors.forEach((s,l,d)=>{d[l]=s.introduceParams(p)}),this},M.prototype.introduceParams=ae.prototype.introduceParams=ee.prototype.introduceParams=oe.prototype.introduceParams=function(p){return this.expr=this.expr.introduceParams(p),this},V.prototype.introduceParams=function(p){const s=p.indexOf(this.ruleName);if(s>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new z(s).withSource(this.source)}else return this.args.forEach((l,d,v)=>{v[d]=l.introduceParams(p)}),this},U.prototype.isNullable=function(p){return this._isNullable(p,Object.create(null))},U.prototype._isNullable=t("_isNullable"),P._isNullable=O.prototype._isNullable=z.prototype._isNullable=fe.prototype._isNullable=xe.prototype._isNullable=function(p,s){return!1},G._isNullable=function(p,s){return!0},F.prototype._isNullable=function(p,s){return typeof this.obj=="string"?this.obj==="":!1},J.prototype._isNullable=function(p,s){return this.terms.length===0||this.terms.some(l=>l._isNullable(p,s))},se.prototype._isNullable=function(p,s){return this.factors.every(l=>l._isNullable(p,s))},ie.prototype._isNullable=ke.prototype._isNullable=ae.prototype._isNullable=ee.prototype._isNullable=function(p,s){return!0},oe.prototype._isNullable=function(p,s){return this.expr._isNullable(p,s)},V.prototype._isNullable=function(p,s){const l=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(s,l)){const{body:d}=p.rules[this.ruleName],v=d.substituteParams(this.args);s[l]=!1,s[l]=v._isNullable(p,s)}return s[l]},U.prototype.substituteParams=t("substituteParams"),P.substituteParams=G.substituteParams=F.prototype.substituteParams=O.prototype.substituteParams=xe.prototype.substituteParams=function(p){return this},z.prototype.substituteParams=function(p){return p[this.index]},J.prototype.substituteParams=function(p){return new J(this.terms.map(s=>s.substituteParams(p)))},se.prototype.substituteParams=function(p){return new se(this.factors.map(s=>s.substituteParams(p)))},M.prototype.substituteParams=ae.prototype.substituteParams=ee.prototype.substituteParams=oe.prototype.substituteParams=function(p){return new this.constructor(this.expr.substituteParams(p))},V.prototype.substituteParams=function(p){if(this.args.length===0)return this;{const s=this.args.map(l=>l.substituteParams(p));return new V(this.ruleName,s)}};function vr(p){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(p)}function rt(p){const s=Object.create(null);p.forEach(l=>{s[l]=(s[l]||0)+1}),Object.keys(s).forEach(l=>{if(s[l]<=1)return;let d=1;p.forEach((v,E)=>{v===l&&(p[E]=v+"_"+d++)})})}U.prototype.toArgumentNameList=t("toArgumentNameList"),P.toArgumentNameList=function(p,s){return["any"]},G.toArgumentNameList=function(p,s){return["end"]},F.prototype.toArgumentNameList=function(p,s){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+p]},O.prototype.toArgumentNameList=function(p,s){let l=this.from+"_to_"+this.to;return vr(l)||(l="_"+l),vr(l)||(l="$"+p),[l]},J.prototype.toArgumentNameList=function(p,s){const l=this.terms.map(E=>E.toArgumentNameList(p,!0)),d=[],v=l[0].length;for(let E=0;E<v;E++){const D=[];for(let Q=0;Q<this.terms.length;Q++)D.push(l[Q][E]);const te=f(D);d.push(te.join("_or_"))}return s||rt(d),d},se.prototype.toArgumentNameList=function(p,s){let l=[];return this.factors.forEach(d=>{const v=d.toArgumentNameList(p,!0);l=l.concat(v),p+=v.length}),s||rt(l),l},M.prototype.toArgumentNameList=function(p,s){const l=this.expr.toArgumentNameList(p,s).map(d=>d[d.length-1]==="s"?d+"es":d+"s");return s||rt(l),l},ke.prototype.toArgumentNameList=function(p,s){return this.expr.toArgumentNameList(p,s).map(l=>"opt"+l[0].toUpperCase()+l.slice(1))},ae.prototype.toArgumentNameList=function(p,s){return[]},ee.prototype.toArgumentNameList=oe.prototype.toArgumentNameList=function(p,s){return this.expr.toArgumentNameList(p,s)},V.prototype.toArgumentNameList=function(p,s){return[this.ruleName]},xe.prototype.toArgumentNameList=function(p,s){return["$"+p]},z.prototype.toArgumentNameList=function(p,s){return["param"+this.index]},U.prototype.toDisplayString=t("toDisplayString"),J.prototype.toDisplayString=se.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},P.toDisplayString=G.toDisplayString=M.prototype.toDisplayString=ae.prototype.toDisplayString=ee.prototype.toDisplayString=oe.prototype.toDisplayString=F.prototype.toDisplayString=O.prototype.toDisplayString=z.prototype.toDisplayString=function(){return this.toString()},V.prototype.toDisplayString=function(){if(this.args.length>0){const p=this.args.map(s=>s.toDisplayString());return this.ruleName+"<"+p.join(",")+">"}else return this.ruleName},xe.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function Dr(p){return p==="description"||p==="string"||p==="code"}class ut{constructor(s,l,d){if(!Dr(d))throw new Error("invalid Failure type: "+d);this.pexpr=s,this.text=l,this.type=d,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(s){return this.getText()===s.getText()&&this.type===s.type&&(!this.isFluffy()||this.isFluffy()&&s.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const s=new ut(this.pexpr,this.text,this.type);return this.isFluffy()&&s.makeFluffy(),s}toKey(){return this.toString()+"#"+this.type}}U.prototype.toFailure=t("toFailure"),P.toFailure=function(p){return new ut(this,"any object","description")},G.toFailure=function(p){return new ut(this,"end of input","description")},F.prototype.toFailure=function(p){return new ut(this,this.obj,"string")},O.prototype.toFailure=function(p){return new ut(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},ae.prototype.toFailure=function(p){const s=this.expr===P?"nothing":"not "+this.expr.toFailure(p);return new ut(this,s,"description")},ee.prototype.toFailure=function(p){return this.expr.toFailure(p)},V.prototype.toFailure=function(p){let{description:s}=p.rules[this.ruleName];return s||(s=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new ut(this,s,"description")},xe.prototype.toFailure=function(p){return new ut(this,"a Unicode ["+this.category+"] character","description")},J.prototype.toFailure=function(p){const l="("+this.terms.map(d=>d.toFailure(p)).join(" or ")+")";return new ut(this,l,"description")},se.prototype.toFailure=function(p){const l="("+this.factors.map(d=>d.toFailure(p)).join(" ")+")";return new ut(this,l,"description")},M.prototype.toFailure=function(p){const s="("+this.expr.toFailure(p)+this.operator+")";return new ut(this,s,"description")},U.prototype.toString=t("toString"),P.toString=function(){return"any"},G.toString=function(){return"end"},F.prototype.toString=function(){return JSON.stringify(this.obj)},O.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},z.prototype.toString=function(){return"$"+this.index},oe.prototype.toString=function(){return"#("+this.expr.toString()+")"},J.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(p=>p.toString()).join(" | ")+")"},se.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(p=>p.toString()).join(" ")+")"},M.prototype.toString=function(){return this.expr+this.operator},ae.prototype.toString=function(){return"~"+this.expr},ee.prototype.toString=function(){return"&"+this.expr},V.prototype.toString=function(){if(this.args.length>0){const p=this.args.map(s=>s.toString());return this.ruleName+"<"+p.join(",")+">"}else return this.ruleName},xe.prototype.toString=function(){return"\\p{"+this.category+"}"};class Zt extends U{constructor(s){super(),this.obj=s}_getString(s){const l=s.currentApplication().args[this.obj.index];return e(l instanceof F,"expected a Terminal expression"),l.obj}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:l}=s,d=l.pos,v=this._getString(s);return l.matchString(v,!0)?(s.pushBinding(new Re(v.length),d),!0):(s.processFailure(d,this),!1)}getArity(){return 1}substituteParams(s){return new Zt(this.obj.substituteParams(s))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(s){return new ut(this,this.obj.toFailure(s)+" (case-insensitive)","description")}_isNullable(s,l){return this.obj._isNullable(s,l)}}var Oi=Object.freeze({__proto__:null,CaseInsensitiveTerminal:Zt,PExpr:U,any:P,end:G,Terminal:F,Range:O,Param:z,Alt:J,Extend:Se,Splice:Ee,Seq:se,Iter:M,Star:ie,Plus:fe,Opt:ke,Not:ae,Lookahead:ee,Lex:oe,Apply:V,UnicodeChar:xe});let Jn;Jt(p=>{Jn=p.rules.applySyntactic.body});const bn=new V("spaces");class Zn{constructor(s,l,d){this.matcher=s,this.startExpr=l,this.grammar=s.grammar,this.input=s.getInput(),this.inputStream=new ze(this.input),this.memoTable=s._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],d!==void 0&&(this.positionToRecordFailures=d,this.recordedFailures=Object.create(null))}posToOffset(s){return s-this._posStack[this._posStack.length-1]}enterApplication(s,l){this._posStack.push(this.inputStream.pos),this._applicationStack.push(l),this.inLexifiedContextStack.push(!1),s.enter(l),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(s,l){const d=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),s.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),l&&this.pushBinding(l,d)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const s=this.currentApplication();return s?s.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(bn),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(s){return s.allowsSkippingPrecedingSpace()&&s!==bn?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(s,l){this._bindings.push(s),this._bindingOffsets.push(this.posToOffset(l))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(s){for(;this._bindings.length>s;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(s){let l=this.memoTable[s];return l||(l=this.memoTable[s]=new k),l}processFailure(s,l){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,s),this.recordedFailures&&s===this.positionToRecordFailures){const d=this.currentApplication();d&&(l=l.substituteParams(d.args)),this.recordFailure(l.toFailure(this.grammar),!1)}}recordFailure(s,l){const d=s.toKey();this.recordedFailures[d]?this.recordedFailures[d].isFluffy()&&!s.isFluffy()&&this.recordedFailures[d].clearFluffy():this.recordedFailures[d]=l?s.clone():s}recordFailures(s,l){Object.keys(s).forEach(d=>{this.recordFailure(s[d],l)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const s=Object.create(null);return Object.keys(this.recordedFailures).forEach(l=>{s[l]=this.recordedFailures[l].clone()}),s}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(s,l){const d=this.memoTable[s];if(d&&l instanceof V){const v=d.memo[l.toMemoKey()];if(v&&v.traceEntry){const E=v.traceEntry.cloneWithExpr(l);return E.isMemoized=!0,E}}return null}getTraceEntry(s,l,d,v){if(l instanceof V){const E=this.currentApplication(),D=E?E.args:[];l=l.substituteParams(D)}return this.getMemoizedTraceEntry(s,l)||new _e(this.input,s,this.inputStream.pos,l,d,v,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(s){return this.trace&&!s.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+s.rightmostFailureOffset===this.positionToRecordFailures?!!s.failuresAtRightmostPosition:!0}useMemoizedResult(s,l){this.trace&&this.trace.push(l.traceEntry);const d=this.inputStream.pos+l.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,d),this.recordedFailures&&this.positionToRecordFailures===d&&l.failuresAtRightmostPosition&&this.recordFailures(l.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,l.examinedLength+s),l.value?(this.inputStream.pos+=l.matchLength,this.pushBinding(l.value,s),!0):!1}eval(s){const{inputStream:l}=this,d=this._bindings.length,v=this.userData;let E;this.recordedFailures&&(E=this.recordedFailures,this.recordedFailures=Object.create(null));const D=l.pos,te=this.maybeSkipSpacesBefore(s);let Q;this.trace&&(Q=this.trace,this.trace=[]);const me=s.eval(this);if(this.trace){const Y=this._bindings.slice(d),K=this.getTraceEntry(te,s,me,Y);K.isImplicitSpaces=s===bn,K.isRootNode=s===this.startExpr,Q.push(K),this.trace=Q}return me?this.recordedFailures&&l.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(Y=>{this.recordedFailures[Y].makeFluffy()}):(l.pos=D,this.truncateBindings(d),this.userData=v),this.recordedFailures&&this.recordFailures(E,!1),s===Jn&&this.skipSpaces(),me}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let s;this.recordedFailures&&(s=Object.keys(this.recordedFailures).map(d=>this.recordedFailures[d]));const l=this._bindings[0];return l&&(l.grammar=this.grammar),new m(this.matcher,this.input,this.startExpr,l,this._bindingOffsets[0],this.rightmostFailurePosition,s)}getTrace(){this.trace=[];const s=this.getMatchResult(),l=this.trace[this.trace.length-1];return l.result=s,l}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Oe{constructor(s){this.grammar=s,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(s){return this._input!==s&&this.replaceInputRange(0,this._input.length,s),this}replaceInputRange(s,l,d){const v=this._input,E=this._memoTable;if(s<0||s>v.length||l<0||l>v.length||s>l)throw new Error("Invalid indices: "+s+" and "+l);this._input=v.slice(0,s)+d+v.slice(l),this._input!==v&&E.length>0&&(this._isMemoTableStale=!0);const D=E.slice(l);E.length=s;for(let te=0;te<d.length;te++)E.push(void 0);for(const te of D)E.push(te);for(let te=0;te<s;te++){const Q=E[te];Q&&Q.clearObsoleteEntries(te,s)}return this}match(s,l={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:l.incremental,tracing:!1})}trace(s,l={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:l.incremental,tracing:!0})}_match(s,l={}){const d={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...l};if(!d.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Je(this.grammar);const v=new Zn(this,s,d.positionToRecordFailures);return d.tracing?v.getTrace():v.getMatchResult()}_getStartExpr(s){const l=s||this.grammar.defaultStartRule;if(!l)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const d=this.grammar.parseApplication(l);return new se([d,G])}}const pt=[],yr=(p,s)=>Object.prototype.hasOwnProperty.call(p,s);class wn{constructor(s,l,d){this._node=s,this.source=l,this._baseInterval=d,s.isNonterminal()&&e(l===d),this._childWrappers=[]}_forgetMemoizedResultFor(s){delete this._node[this._semantics.attributeKeys[s]],this.children.forEach(l=>{l._forgetMemoizedResultFor(s)})}child(s){if(!(0<=s&&s<this._node.numChildren()))return;let l=this._childWrappers[s];if(!l){const d=this._node.childAt(s),v=this._node.childOffsets[s],E=this._baseInterval.subInterval(v,d.matchLength),D=d.isNonterminal()?E:this._baseInterval;l=this._childWrappers[s]=this._semantics.wrap(d,E,D)}return l}_children(){for(let s=0;s<this._node.numChildren();s++)this.child(s);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(s){const l=s||[],d=l.map(D=>D._node),v=new Nt(d,[],-1,!1),E=this._semantics.wrap(v,null,null);return E._childWrappers=l,E}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class Tt{constructor(s,l){const d=this;if(this.grammar=s,this.checkedActionDicts=!1,this.Wrapper=class extends(l?l.Wrapper:wn){constructor(v,E,D){super(v,E,D),d.checkActionDictsIfHaventAlready(),this._semantics=d}toString(){return"[semantics wrapper for "+d.grammar.name+"]"}},this.super=l,l){if(!(s.equals(this.super.grammar)||s._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+s.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const v in this.attributes)Object.defineProperty(this.attributeKeys,v,{value:qt(v)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let s;for(s in this.operations)this.operations[s].checkActionDict(this.grammar);for(s in this.attributes)this.attributes[s].checkActionDict(this.grammar)}toRecipe(s){function l(v){return v.super!==Tt.BuiltInSemantics._getSemantics()}let d=`(function(g) {
`;if(l(this)){d+="  var semantics = "+this.super.toRecipe(!0)+"(g";const v=this.super.grammar;let E=this.grammar;for(;E!==v;)d+=".superGrammar",E=E.superGrammar;d+=`);
`,d+="  return g.extendSemantics(semantics)"}else d+="  return g.createSemantics()";return["Operation","Attribute"].forEach(v=>{const E=this[v.toLowerCase()+"s"];Object.keys(E).forEach(D=>{const{actionDict:te,formals:Q,builtInDefault:me}=E[D];let Y=D;Q.length>0&&(Y+="("+Q.join(", ")+")");let K;l(this)&&this.super[v.toLowerCase()+"s"][D]?K="extend"+v:K="add"+v,d+=`
    .`+K+"("+JSON.stringify(Y)+", {";const ce=[];Object.keys(te).forEach(Ae=>{if(te[Ae]!==me){let Ge=te[Ae].toString().trim();Ge=Ge.replace(/^.*\(/,"function("),ce.push(`
      `+JSON.stringify(Ae)+": "+Ge)}}),d+=ce.join(",")+`
    })`})}),d+=`;
  })`,s||(d=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+d+`(grammar);
  return semantics;
});
`),d}addOperationOrAttribute(s,l,d){const v=s+"s",E=Nr(l,s),{name:D}=E,{formals:te}=E;this.assertNewName(D,s);const Q=Yr(s,D,K),me={_default:Q};Object.keys(d).forEach(ce=>{me[ce]=d[ce]});const Y=s==="operation"?new we(D,te,me,Q):new et(D,me,Q);Y.checkActionDict(this.grammar),this[v][D]=Y;function K(...ce){const Ae=this._semantics[v][D];if(arguments.length!==Ae.formals.length)throw new Error("Invalid number of arguments passed to "+D+" "+s+" (expected "+Ae.formals.length+", got "+arguments.length+")");const Ge=Object.create(null);for(const[qr,xn]of Object.entries(ce)){const xo=Ae.formals[qr];Ge[xo]=xn}const bt=this.args;this.args=Ge;const Ct=Ae.execute(this._semantics,this);return this.args=bt,Ct}s==="operation"?(this.Wrapper.prototype[D]=K,this.Wrapper.prototype[D].toString=function(){return"["+D+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,D,{get:K,configurable:!0}),Object.defineProperty(this.attributeKeys,D,{value:qt(D)}))}extendOperationOrAttribute(s,l,d){const v=s+"s";if(Nr(l,"attribute"),!(this.super&&l in this.super[v]))throw new Error("Cannot extend "+s+" '"+l+"': did not inherit an "+s+" with that name");if(yr(this[v],l))throw new Error("Cannot extend "+s+" '"+l+"' again");const E=this[v][l].formals,D=this[v][l].actionDict,te=Object.create(D);Object.keys(d).forEach(Q=>{te[Q]=d[Q]}),this[v][l]=s==="operation"?new we(l,E,te):new et(l,te),this[v][l].checkActionDict(this.grammar)}assertNewName(s,l){if(yr(wn.prototype,s))throw new Error("Cannot add "+l+" '"+s+"': that's a reserved name");if(s in this.operations)throw new Error("Cannot add "+l+" '"+s+"': an operation with that name already exists");if(s in this.attributes)throw new Error("Cannot add "+l+" '"+s+"': an attribute with that name already exists")}wrap(s,l,d){const v=d||l;return s instanceof this.Wrapper?s:new this.Wrapper(s,l,v)}}function Nr(p,s){if(!Tt.prototypeGrammar)return e(p.indexOf("(")===-1),{name:p,formals:[]};const l=Tt.prototypeGrammar.match(p,s==="operation"?"OperationSignature":"AttributeSignature");if(l.failed())throw new Error(l.message);return Tt.prototypeGrammarSemantics(l).parse()}function Yr(p,s,l){return function(...d){const E=(this._semantics.operations[s]||this._semantics.attributes[s]).formals.map(D=>this.args[D]);if(!this.isIteration()&&d.length===1)return l.apply(d[0],E);throw wt(this.ctorName,s,p,pt)}}Tt.createSemantics=function(p,s){const l=new Tt(p,s!==void 0?s:Tt.BuiltInSemantics._getSemantics()),d=function(E){if(!(E instanceof m))throw new TypeError("Semantics expected a MatchResult, but got "+B(E));if(E.failed())throw new TypeError("cannot apply Semantics to "+E.toString());const D=E._cst;if(D.grammar!==p)throw new Error("Cannot use a MatchResult from grammar '"+D.grammar.name+"' with a semantics for '"+p.name+"'");const te=new ze(E.input);return l.wrap(D,te.interval(E._cstOffset,E.input.length))};return d.addOperation=function(v,E){return l.addOperationOrAttribute("operation",v,E),d},d.extendOperation=function(v,E){return l.extendOperationOrAttribute("operation",v,E),d},d.addAttribute=function(v,E){return l.addOperationOrAttribute("attribute",v,E),d},d.extendAttribute=function(v,E){return l.extendOperationOrAttribute("attribute",v,E),d},d._getActionDict=function(v){const E=l.operations[v]||l.attributes[v];if(!E)throw new Error('"'+v+'" is not a valid operation or attribute name in this semantics for "'+p.name+'"');return E.actionDict},d._remove=function(v){let E;return v in l.operations?(E=l.operations[v],delete l.operations[v]):v in l.attributes&&(E=l.attributes[v],delete l.attributes[v]),delete l.Wrapper.prototype[v],E},d.getOperationNames=function(){return Object.keys(l.operations)},d.getAttributeNames=function(){return Object.keys(l.attributes)},d.getGrammar=function(){return l.grammar},d.toRecipe=function(v){return l.toRecipe(v)},d.toString=l.toString.bind(l),d._getSemantics=function(){return l},d};class we{constructor(s,l,d,v){this.name=s,this.formals=l,this.actionDict=d,this.builtInDefault=v}checkActionDict(s){s._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(s,l){try{const{ctorName:d}=l._node;let v=this.actionDict[d];return v?(pt.push([this,d]),v.apply(l,l._children())):l.isNonterminal()&&(v=this.actionDict._nonterminal,v)?(pt.push([this,"_nonterminal",d]),v.apply(l,l._children())):(pt.push([this,"default action",d]),this.actionDict._default.apply(l,l._children()))}finally{pt.pop()}}}we.prototype.typeName="operation";class et extends we{constructor(s,l,d){super(s,[],l,d)}execute(s,l){const d=l._node,v=s.attributeKeys[this.name];return yr(d,v)||(d[v]=we.prototype.execute.call(this,s,l)),d[v]}}et.prototype.typeName="attribute";const yt=["_iter","_terminal","_nonterminal","_default"];function tt(p){return Object.keys(p.rules).sort().map(s=>p.rules[s])}const Rt=p=>p.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Qt,St;class ot{constructor(s,l,d,v){if(this.name=s,this.superGrammar=l,this.rules=d,v){if(!(v in d))throw new Error("Invalid start rule: '"+v+"' is not a rule in grammar '"+s+"'");this.defaultStartRule=v}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Oe(this)}isBuiltIn(){return this===ot.ProtoBuiltInRules||this===ot.BuiltInRules}equals(s){if(this===s)return!0;if(s==null||this.name!==s.name||this.defaultStartRule!==s.defaultStartRule||!(this.superGrammar===s.superGrammar||this.superGrammar.equals(s.superGrammar)))return!1;const l=tt(this),d=tt(s);return l.length===d.length&&l.every((v,E)=>v.description===d[E].description&&v.formals.join(",")===d[E].formals.join(",")&&v.body.toString()===d[E].body.toString())}match(s,l){const d=this.matcher();return d.replaceInputRange(0,0,s),d.match(l)}trace(s,l){const d=this.matcher();return d.replaceInputRange(0,0,s),d.trace(l)}createSemantics(){return Tt.createSemantics(this)}extendSemantics(s){return Tt.createSemantics(this,s._getSemantics())}_checkTopDownActionDict(s,l,d){const v=[];for(const E in d){const D=d[E];if(!yt.includes(E)&&!(E in this.rules)){v.push(`'${E}' is not a valid semantic action for '${this.name}'`);continue}if(typeof D!="function"){v.push(`'${E}' must be a function in an action dictionary for '${this.name}'`);continue}const Q=D.length,me=this._topDownActionArity(E);if(Q!==me){let Y;E==="_iter"||E==="_nonterminal"?Y=`it should use a rest parameter, e.g. \`${E}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:Y=`expected ${me}, got ${Q}`,v.push(`Semantic action '${E}' has the wrong arity: ${Y}`)}}if(v.length>0){const E=v.map(te=>"- "+te),D=new Error([`Found errors in the action dictionary of the '${l}' ${s}:`,...E].join(`
`));throw D.problems=v,D}}_topDownActionArity(s){return yt.includes(s)?0:this.rules[s].body.getArity()}_inheritsFrom(s){let l=this.superGrammar;for(;l;){if(l.equals(s,!0))return!0;l=l.superGrammar}return!1}toRecipe(s=void 0){const l={};this.source&&(l.source=this.source.contents);let d=null;this.defaultStartRule&&(d=this.defaultStartRule);const v={};Object.keys(this.rules).forEach(te=>{const Q=this.rules[te],{body:me}=Q,Y=!this.superGrammar||!this.superGrammar.rules[te];let K;Y?K="define":K=me instanceof Se?"extend":"override";const ce={};if(Q.source&&this.source){const bt=Q.source.relativeTo(this.source);ce.sourceInterval=[bt.startIdx,bt.endIdx]}const Ae=Y?Q.description:null,Ge=me.outputRecipe(Q.formals,this.source);v[te]=[K,ce,Ae,Q.formals,Ge]});let E="null";s?E=s:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(E=this.superGrammar.toRecipe());const D=[...["grammar",l,this.name].map(JSON.stringify),E,...[d,v].map(JSON.stringify)];return Rt(`[${D.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const s=new w;s.append("{");let l=!0;for(const d in this.rules){const{body:v}=this.rules[d];l?l=!1:s.append(","),s.append(`
`),s.append("  "),this.addSemanticActionTemplate(d,v,s)}return s.append(`
}`),s.contents()}addSemanticActionTemplate(s,l,d){d.append(s),d.append(": function(");const v=this._topDownActionArity(s);d.append(a("_",v).join(", ")),d.append(`) {
`),d.append("  }")}parseApplication(s){let l;if(s.indexOf("<")===-1)l=new V(s);else{const v=Qt.match(s,"Base_application");l=St(v,{})}if(!(l.ruleName in this.rules))throw Me(l.ruleName,this.name);const{formals:d}=this.rules[l.ruleName];if(d.length!==l.args.length){const{source:v}=this.rules[l.ruleName];throw H(l.ruleName,d.length,l.args.length,v)}return l}_setUpMatchState(s){this._matchStateInitializer&&this._matchStateInitializer(s)}}ot.ProtoBuiltInRules=new ot("ProtoBuiltInRules",void 0,{any:{body:P,formals:[],description:"any character",primitive:!0},end:{body:G,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new Zt(new z(0)),formals:["str"],primitive:!0},lower:{body:new xe("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new xe("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new xe("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new ie(new V("space")),formals:[]},space:{body:new O("\0"," "),formals:[],description:"a space"}}),ot.initApplicationParser=function(p,s){Qt=p,St=s};class Lt{constructor(s){this.name=s}sourceInterval(s,l){return this.source.subInterval(s,l-s)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?ot.ProtoBuiltInRules:ot.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(s,l){const d=this.ensureSuperGrammar().rules[s];if(!d)throw T(s,this.superGrammar.name,l);return d}installOverriddenOrExtendedRule(s,l,d,v){const E=c(l);if(E.length>0)throw X(s,E,v);const D=this.ensureSuperGrammar().rules[s],te=D.formals,Q=te?te.length:0;if(l.length!==Q)throw H(s,Q,l.length,v);return this.install(s,l,d,D.description,v)}install(s,l,d,v,E,D=!1){return this.rules[s]={body:d.introduceParams(l),formals:l,description:v,source:E,primitive:D},this}withSuperGrammar(s){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=s,this.rules=Object.create(s.rules),s.isBuiltIn()||(this.defaultStartRule=s.defaultStartRule),this}withDefaultStartRule(s){return this.defaultStartRule=s,this}withSource(s){return this.source=new ze(s).interval(0,s.length),this}build(){const s=new ot(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);s._matchStateInitializer=s.superGrammar._matchStateInitializer,s.supportsIncrementalParsing=s.superGrammar.supportsIncrementalParsing;const l=[];let d=!1;return Object.keys(s.rules).forEach(v=>{const{body:E}=s.rules[v];try{E.assertChoicesHaveUniformArity(v)}catch(D){l.push(D)}try{E.assertAllApplicationsAreValid(v,s)}catch(D){l.push(D),d=!0}}),d||Object.keys(s.rules).forEach(v=>{const{body:E}=s.rules[v];try{E.assertIteratedExprsAreNotNullable(s,[])}catch(D){l.push(D)}}),l.length>0&&ht(l),this.source&&(s.source=this.source),s}define(s,l,d,v,E,D){if(this.ensureSuperGrammar(),this.superGrammar.rules[s])throw L(s,this.name,this.superGrammar.name,E);if(this.rules[s])throw L(s,this.name,this.name,E);const te=c(l);if(te.length>0)throw X(s,te,E);return this.install(s,l,d,v,E,D)}override(s,l,d,v,E){return this.ensureSuperGrammarRuleForOverriding(s,E),this.installOverriddenOrExtendedRule(s,l,d,E),this}extend(s,l,d,v,E){if(!this.ensureSuperGrammar().rules[s])throw N(s,this.superGrammar.name,E);const te=new Se(this.superGrammar,s,d);return te.source=d.source,this.installOverriddenOrExtendedRule(s,l,te,E),this}}class Pt{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(s){return new Lt(s)}grammar(s,l,d,v,E){const D=new Lt(l);return d&&D.withSuperGrammar(d instanceof ot?d:this.fromRecipe(d)),v&&D.withDefaultStartRule(v),s&&s.source&&D.withSource(s.source),this.currentDecl=D,Object.keys(E).forEach(te=>{this.currentRuleName=te;const Q=E[te],me=Q[0],Y=Q[1],K=Q[2],ce=Q[3],Ae=this.fromRecipe(Q[4]);let Ge;D.source&&Y&&Y.sourceInterval&&(Ge=D.source.subInterval(Y.sourceInterval[0],Y.sourceInterval[1]-Y.sourceInterval[0])),D[me](te,ce,Ae,K,Ge)}),this.currentRuleName=this.currentDecl=null,D.build()}terminal(s){return new F(s)}range(s,l){return new O(s,l)}param(s){return new z(s)}alt(...s){let l=[];for(let d of s)d instanceof U||(d=this.fromRecipe(d)),d instanceof J?l=l.concat(d.terms):l.push(d);return l.length===1?l[0]:new J(l)}seq(...s){let l=[];for(let d of s)d instanceof U||(d=this.fromRecipe(d)),d instanceof se?l=l.concat(d.factors):l.push(d);return l.length===1?l[0]:new se(l)}star(s){return s instanceof U||(s=this.fromRecipe(s)),new ie(s)}plus(s){return s instanceof U||(s=this.fromRecipe(s)),new fe(s)}opt(s){return s instanceof U||(s=this.fromRecipe(s)),new ke(s)}not(s){return s instanceof U||(s=this.fromRecipe(s)),new ae(s)}lookahead(s){return s instanceof U||(s=this.fromRecipe(s)),new ee(s)}lex(s){return s instanceof U||(s=this.fromRecipe(s)),new oe(s)}app(s,l){return l&&l.length>0&&(l=l.map(function(d){return d instanceof U?d:this.fromRecipe(d)},this)),new V(s,l)}splice(s,l){return new Ee(this.currentDecl.superGrammar,this.currentRuleName,s.map(d=>this.fromRecipe(d)),l.map(d=>this.fromRecipe(d)))}fromRecipe(s){const l=s[0]==="grammar"?s.slice(1):s.slice(2),d=this[s[0]](...l),v=s[1];return v&&v.sourceInterval&&this.currentDecl&&d.withSource(this.currentDecl.sourceInterval(...v.sourceInterval)),d}}function it(p){return typeof p=="function"?p.call(new Pt):(typeof p=="string"&&(p=JSON.parse(p)),new Pt().fromRecipe(p))}var At=it(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);ot.BuiltInRules=At,le(ot.BuiltInRules);var Mr=it(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const ft=Object.create(U.prototype);function Fr(p,s){for(const l in p)if(l===s)return!0;return!1}function br(p,s,l){const d=new Pt;let v,E,D,te=!1;return(l||Mr).createSemantics().addOperation("visit",{Grammars(Y){return Y.children.map(K=>K.visit())},Grammar(Y,K,ce,Ae,Ge){const bt=Y.visit();v=d.newGrammar(bt),K.child(0)&&K.child(0).visit(),Ae.children.map(qr=>qr.visit());const Ct=v.build();if(Ct.source=this.source.trimmed(),Fr(s,bt))throw Ce(Ct);return s[bt]=Ct,Ct},SuperGrammar(Y,K){const ce=K.visit();if(ce==="null")v.withSuperGrammar(null);else{if(!s||!Fr(s,ce))throw ue(ce,s,K.source);v.withSuperGrammar(s[ce])}},Rule_define(Y,K,ce,Ae,Ge){E=Y.visit(),D=K.children.map(xn=>xn.visit())[0]||[],!v.defaultStartRule&&v.ensureSuperGrammar()!==ot.ProtoBuiltInRules&&v.withDefaultStartRule(E);const bt=Ge.visit(),Ct=ce.children.map(xn=>xn.visit())[0],qr=this.source.trimmed();return v.define(E,D,bt,Ct,qr)},Rule_override(Y,K,ce,Ae){E=Y.visit(),D=K.children.map(Ct=>Ct.visit())[0]||[];const Ge=this.source.trimmed();v.ensureSuperGrammarRuleForOverriding(E,Ge),te=!0;const bt=Ae.visit();return te=!1,v.override(E,D,bt,null,Ge)},Rule_extend(Y,K,ce,Ae){E=Y.visit(),D=K.children.map(Ct=>Ct.visit())[0]||[];const Ge=Ae.visit(),bt=this.source.trimmed();return v.extend(E,D,Ge,null,bt)},RuleBody(Y,K){return d.alt(...K.visit()).withSource(this.source)},OverrideRuleBody(Y,K){const ce=K.visit(),Ae=ce.indexOf(ft);if(Ae>=0){const Ge=ce.slice(0,Ae),bt=ce.slice(Ae+1);return bt.forEach(Ct=>{if(Ct===ft)throw Ie(Ct)}),new Ee(v.superGrammar,E,Ge,bt).withSource(this.source)}else return d.alt(...ce).withSource(this.source)},Formals(Y,K,ce){return K.visit()},Params(Y,K,ce){return K.visit()},Alt(Y){return d.alt(...Y.visit()).withSource(this.source)},TopLevelTerm_inline(Y,K){const ce=E+"_"+K.visit(),Ae=Y.visit(),Ge=this.source.trimmed(),bt=!(v.superGrammar&&v.superGrammar.rules[ce]);te&&!bt?v.override(ce,D,Ae,null,Ge):v.define(ce,D,Ae,null,Ge);const Ct=D.map(qr=>d.app(qr));return d.app(ce,Ct).withSource(Ae.source)},OverrideTopLevelTerm_superSplice(Y){return ft},Seq(Y){return d.seq(...Y.children.map(K=>K.visit())).withSource(this.source)},Iter_star(Y,K){return d.star(Y.visit()).withSource(this.source)},Iter_plus(Y,K){return d.plus(Y.visit()).withSource(this.source)},Iter_opt(Y,K){return d.opt(Y.visit()).withSource(this.source)},Pred_not(Y,K){return d.not(K.visit()).withSource(this.source)},Pred_lookahead(Y,K){return d.lookahead(K.visit()).withSource(this.source)},Lex_lex(Y,K){return d.lex(K.visit()).withSource(this.source)},Base_application(Y,K){const ce=K.children.map(Ae=>Ae.visit())[0]||[];return d.app(Y.visit(),ce).withSource(this.source)},Base_range(Y,K,ce){return d.range(Y.visit(),ce.visit()).withSource(this.source)},Base_terminal(Y){return d.terminal(Y.visit()).withSource(this.source)},Base_paren(Y,K,ce){return K.visit()},ruleDescr(Y,K,ce){return K.visit()},ruleDescrText(Y){return this.sourceString.trim()},caseName(Y,K,ce,Ae,Ge){return ce.visit()},name(Y,K){return this.sourceString},nameFirst(Y){},nameRest(Y){},terminal(Y,K,ce){return K.children.map(Ae=>Ae.visit()).join("")},oneCharTerminal(Y,K,ce){return K.visit()},escapeChar(Y){try{return q(this.sourceString)}catch(K){throw K instanceof RangeError&&K.message.startsWith("Invalid code point ")?$e(Y):K}},NonemptyListOf(Y,K,ce){return[Y.visit()].concat(ce.children.map(Ae=>Ae.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(p).visit()}var Xt=it(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Jr(ot.BuiltInRules),Er(Xt);function Jr(p){const s={empty(){return this.iteration()},nonEmpty(l,d,v){return this.iteration([l].concat(v.children))}};Tt.BuiltInSemantics=Tt.createSemantics(p,null).addOperation("asIteration",{emptyListOf:s.empty,nonemptyListOf:s.nonEmpty,EmptyListOf:s.empty,NonemptyListOf:s.nonEmpty})}function Er(p){Tt.prototypeGrammarSemantics=p.createSemantics().addOperation("parse",{AttributeSignature(s){return{name:s.parse(),formals:[]}},OperationSignature(s,l){return{name:s.parse(),formals:l.children.map(d=>d.parse())[0]||[]}},Formals(s,l,d){return l.asIteration().children.map(v=>v.parse())},name(s,l){return this.sourceString}}),Tt.prototypeGrammar=p}function po(p){let s=0;const l=[0],d=()=>l[l.length-1],v={},E=/( *).*(?:$|\r?\n|\r)/g;let D;for(;(D=E.exec(p))!=null;){const[te,Q]=D;if(te.length===0)break;const me=Q.length,Y=d(),K=s+me;if(me>Y)l.push(me),v[K]=1;else if(me<Y){const ce=l.length;for(;d()!==me;)l.pop();v[K]=-1*(ce-l.length)}s+=te.length}return l.length>1&&(v[s]=1-l.length),v}const vs="an indented block",ys="a dedent",bs=1114112;class ho extends ze{constructor(s){super(s.input),this.state=s}_indentationAt(s){return this.state.userData[s]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),bs):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),bs):super.nextCodePoint()}}class ws extends U{constructor(s=!0){super(),this.isIndent=s}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:l}=s,d=s.userData;s.doNotMemoize=!0;const v=l.pos,E=this.isIndent?1:-1;return(d[v]||0)*E>0?(s.userData=Object.create(d),s.userData[v]-=E,s.pushBinding(new Re(0),v),!0):(s.processFailure(v,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(s,l){}_isNullable(s,l){return!1}assertChoicesHaveUniformArity(s){}assertIteratedExprsAreNotNullable(s){}introduceParams(s){return this}substituteParams(s){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(s){const l=this.isIndent?vs:ys;return new ut(this,l,"description")}}const fo=new V("indent"),mo=new V("dedent"),go=new Ee(At,"any",[fo,mo],[]),xs=new Pt().newGrammar("IndentationSensitive").withSuperGrammar(At).define("indent",[],new ws(!0),vs,void 0,!0).define("dedent",[],new ws(!1),ys,void 0,!0).extend("any",[],go,"any character",void 0).build();Object.assign(xs,{_matchStateInitializer(p){p.userData=po(p.input),p.inputStream=new ho(p)},supportsIncrementalParsing:!1});const vo="17.1.0";ot.initApplicationParser(Mr,br);const yo=p=>!!p.constructor&&typeof p.constructor.isBuffer=="function"&&p.constructor.isBuffer(p);function bo(p,s){const l=Mr.match(p,"Grammars");if(l.failed())throw S(l);return br(l,s)}function wo(p,s){const l=Is(p,s),d=Object.keys(l);if(d.length===0)throw new Error("Missing grammar definition");if(d.length>1){const E=l[d[1]].source;throw new Error(gr(E.sourceString,E.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return l[d[0]]}function Is(p,s){const l=Object.create(s||{});if(typeof p!="string")if(yo(p))p=p.toString();else throw new TypeError("Expected string as first argument, got "+B(p));return bo(p,l),l}return er.ExperimentalIndentationSensitive=xs,er._buildGrammar=br,er.grammar=wo,er.grammars=Is,er.makeRecipe=it,er.ohmGrammar=Mr,er.pexprs=Oi,er.version=vo,er}var Ni,Vs;function ro(){if(Vs)return Ni;Vs=1;const{makeRecipe:t}=ku();return Ni=t(["grammar",{source:`PEP508 {
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
`],["terminal",{sourceInterval:[6123,6126]},"#"]]],["app",{sourceInterval:[6128,6131]},"any",[]]]]]}]),Ni}var On={},Gs;function Hs(){return Gs||(Gs=1,(function(t){var e=On&&On.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequirementsSyntaxError=t.semantics=void 0;const r=e(ro());t.semantics=r.default.createSemantics();function n(a){return{startIdx:a.source.startIdx,endIdx:a.source.endIdx}}function i(a,c){return{data:c,location:n(a)}}t.semantics.addOperation("extract",{File:a=>a.asIteration().children.map(c=>c.extract()).filter(Boolean),Line:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extract())||null},NameReq:(a,c,f,y)=>{var R,x;return{type:"ProjectName",name:a.sourceString,versionSpec:f.extract(),extras:(R=c.child(0))===null||R===void 0?void 0:R.extract(),environmentMarkerTree:(x=y.child(0))===null||x===void 0?void 0:x.extract()}},UrlReq:(a,c,f,y,R)=>{var x,w;return{type:"ProjectURL",name:a.sourceString,url:f.extract(),extras:(x=c.child(0))===null||x===void 0?void 0:x.extract(),environmentMarkerTree:(w=R.child(0))===null||w===void 0?void 0:w.extract()}},Extras:(a,c,f)=>c.asIteration().children.map(y=>y.sourceString),RequirementsReq:(a,c)=>({type:"RequirementsFile",path:c.sourceString}),ConstraintsReq:(a,c)=>({type:"ConstraintsFile",path:c.sourceString}),UrlSpec:(a,c)=>c.sourceString,QuotedMarker:(a,c)=>c.extract(),MarkerOr_node:(a,c,f)=>({operator:"or",left:a.extract(),right:f.extract()}),MarkerAnd_node:(a,c,f)=>({operator:"and",left:a.extract(),right:f.extract()}),MarkerExpr_leaf:(a,c,f)=>({left:a.sourceString,operator:c.sourceString,right:f.sourceString}),MarkerExpr_node:(a,c,f)=>c.extract(),VersionSpec_parenthesized:(a,c,f)=>c.extract()||[],VersionMany:a=>{const c=a.asIteration().children;if(c.length!==0)return c.map(f=>f.extract())},VersionOne:(a,c)=>({operator:a.sourceString,version:c.sourceString})}),t.semantics.addOperation("extractLoosely",{LooseFile:a=>a.asIteration().children.map(c=>c.extractLoosely()).filter(Boolean),LooseLine:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLoosely())||null},LooseNameReq:(a,c,f,y)=>{var R;return{type:"ProjectName",name:a.sourceString,extras:(R=c.child(0))===null||R===void 0?void 0:R.extractLoosely(),versionSpec:f.extractLoosely()}},LooseNonNameReq:a=>null,LooseExtras:(a,c,f,y)=>c.asIteration().children.map(R=>R.sourceString),LooseVersionSpec_parenthesized:(a,c,f)=>c.extractLoosely()||[],LooseVersionMany:(a,c)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(y=>y.extractLoosely())},LooseVersionOne:(a,c)=>{const f={operator:a.sourceString};return c.sourceString&&(f.version=c.sourceString),f}}),t.semantics.addOperation("extractWithLocation",{File:a=>a.asIteration().children.map(c=>c.extractWithLocation()).filter(Boolean),Line:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractWithLocation())||null},NameReq:function(a,c,f,y){var R,x;return i(this,{type:"ProjectName",name:i(a,a.sourceString),versionSpec:f.extractWithLocation(),extras:(R=c.child(0))===null||R===void 0?void 0:R.extractWithLocation(),environmentMarkerTree:(x=y.child(0))===null||x===void 0?void 0:x.extractWithLocation()})},UrlReq:function(a,c,f,y,R){var x,w;return i(this,{type:"ProjectURL",name:i(a,a.sourceString),url:f.extractWithLocation(),extras:(x=c.child(0))===null||x===void 0?void 0:x.extractWithLocation(),environmentMarkerTree:(w=R.child(0))===null||w===void 0?void 0:w.extractWithLocation()})},Extras:function(a,c,f){return c.asIteration().children.map(y=>i(y,y.sourceString))},RequirementsReq:function(a,c){return i(this,{type:"RequirementsFile",path:c.sourceString})},ConstraintsReq:function(a,c){return i(this,{type:"ConstraintsFile",path:c.sourceString})},UrlSpec:function(a,c){return i(c,c.sourceString)},QuotedMarker:(a,c)=>i(c,c.extract()),VersionSpec_parenthesized:(a,c,f)=>c.extractWithLocation()||[],VersionMany:a=>{const c=a.asIteration().children;if(c.length!==0)return c.map(f=>f.extractWithLocation())},VersionOne:function(a,c){return i(this,{operator:i(a,a.sourceString),version:i(c,c.sourceString)})}}),t.semantics.addOperation("extractLooselyWithLocation",{LooseFile:a=>a.asIteration().children.map(c=>c.extractLooselyWithLocation()).filter(Boolean),LooseLine:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLooselyWithLocation())||null},LooseNameReq:function(a,c,f,y){var R;return i(this,{type:"ProjectName",name:i(a,a.sourceString),extras:(R=c.child(0))===null||R===void 0?void 0:R.extractLooselyWithLocation(),versionSpec:f.extractLooselyWithLocation()})},LooseNonNameReq:a=>null,LooseExtras:function(a,c,f,y){return c.asIteration().children.map(R=>i(R,R.sourceString))},LooseVersionSpec_parenthesized:(a,c,f)=>c.extractLooselyWithLocation()||[],LooseVersionMany:(a,c)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(y=>y.extractLooselyWithLocation())},LooseVersionOne:function(a,c){return i(this,{operator:i(a,a.sourceString),...c.sourceString?{version:i(c,c.sourceString)}:{}})}});class o extends Error{}t.RequirementsSyntaxError=o})(On)),On}var Ur={},Ks;function Su(){if(Ks)return Ur;Ks=1,Object.defineProperty(Ur,"__esModule",{value:!0}),Ur.VersionOperator=Ur.EnvironmentMarkerVariable=void 0;var t;(function(r){r.PythonVersion="python_version",r.PythonFullVersion="python_full_version",r.OsName="os_name",r.SysPlatform="sys_platform",r.PlatformRelease="platform_release",r.PlatformSystem="platform_system",r.PlatformVersion="platform_version",r.PlatformMachine="platform_machine",r.PlatformPythonImplementation="platform_python_implementation",r.ImplementationName="implementation_name",r.ImplementationVersion="implementation_version",r.Extra="extra"})(t||(Ur.EnvironmentMarkerVariable=t={}));var e;return(function(r){r.CompatibleRelease="~=",r.VersionMatching="==",r.VersionExclusion="!=",r.LessThanOrMatching="<=",r.GreaterThanOrMatching=">=",r.LessThan="<",r.GreaterThan=">",r.ArbitrarilyEqual="==="})(e||(Ur.VersionOperator=e={})),Ur}var Ys;function Au(){return Ys||(Ys=1,(function(t){var e=wr&&wr.__createBinding||(Object.create?(function(x,w,I,q){q===void 0&&(q=I);var B=Object.getOwnPropertyDescriptor(w,I);(!B||("get"in B?!w.__esModule:B.writable||B.configurable))&&(B={enumerable:!0,get:function(){return w[I]}}),Object.defineProperty(x,q,B)}):(function(x,w,I,q){q===void 0&&(q=I),x[q]=w[I]})),r=wr&&wr.__exportStar||function(x,w){for(var I in x)I!=="default"&&!Object.prototype.hasOwnProperty.call(w,I)&&e(w,x,I)},n=wr&&wr.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(t,"__esModule",{value:!0}),t.parsePipRequirementsLineLoosely=t.parsePipRequirementsFileLoosely=t.parsePipRequirementsLine=t.parsePipRequirementsFile=t.RequirementsSyntaxError=void 0;const i=n(ro()),o=Hs();var a=Hs();Object.defineProperty(t,"RequirementsSyntaxError",{enumerable:!0,get:function(){return a.RequirementsSyntaxError}}),r(Su(),t);function c(x,w){const I=i.default.match(x,"File");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements file. ${I.shortMessage}`);return w?.includeLocations?(0,o.semantics)(I).extractWithLocation():(0,o.semantics)(I).extract()}t.parsePipRequirementsFile=c;function f(x,w){const I=i.default.match(x,"Line");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements line. ${I.shortMessage}`);return w?.includeLocations?(0,o.semantics)(I).extractWithLocation():(0,o.semantics)(I).extract()}t.parsePipRequirementsLine=f;function y(x,w){const I=i.default.match(x,"LooseFile");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${I.shortMessage}`);return w?.includeLocations?(0,o.semantics)(I).extractLooselyWithLocation():(0,o.semantics)(I).extractLoosely()}t.parsePipRequirementsFileLoosely=y;function R(x,w){const I=i.default.match(x,"LooseLine");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${I.shortMessage}`);return w?.includeLocations?(0,o.semantics)(I).extractLooselyWithLocation():(0,o.semantics)(I).extractLoosely()}t.parsePipRequirementsLineLoosely=R})(wr)),wr}var Cu=Au();function _u(t){return new Worker("/assets/pyworker-Drd8fvVW.js",{type:"module",name:t?.name})}let Eu=0;class Ou{constructor(){this.pendingMessages=new Map}async init(e,r){this.workspace=e,this.vars=r??{},this.worker=new _u,this.worker.onmessage=n=>{this.handleWorkerMessage(n.data)},this.worker.onerror=n=>{console.error("Python Worker error:",n)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const n=e.payload.prompt||"Input:",i=window.prompt(n);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:i,cancelled:i===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:n,message:i}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",i,n);return}const r=this.pendingMessages.get(e.id);r&&(this.pendingMessages.delete(e.id),e.type==="success"?r.resolve(e.payload):e.type==="error"&&r.reject(new Error(e.payload.message)))}async sendMessage(e,r){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const n=`msg-${Eu++}`,i={id:n,type:e,payload:r};return new Promise((o,a)=>{this.pendingMessages.set(n,{resolve:o,reject:a}),this.worker.postMessage(i)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,r){const n=await this.sendMessage("runFunction",{name:e,args:r});return He(pr,this.workspace),n}async setGlobal(e,r){await this.sendMessage("setGlobal",{key:e,value:r})}async mountWorkspace(e="/workspace"){const r=await Ot.getWorkspace();await this.sendMessage("mountWorkspace",{handle:r.getHandle(),mountPoint:e})}async installDependencies(){const e=await this.workspace?.getResource("requirements.txt");if(e){const r=(await e.getContents()).replaceAll("\r",""),n=Cu.parsePipRequirementsFile(r).filter(i=>"name"in i).map(i=>i.name);await this.loadPackages(n)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),He(pr,this.workspace)}async execCode(e){const r=await this.sendMessage("execCode",{code:e});return He(pr,this.workspace),r}async execScript(e){const r=e.split(".")[0],n=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(r,n)}async execModule(e,r){const n=await this.sendMessage("execModule",{moduleName:e,entryName:r,vars:this.vars});return He(pr,this.workspace),n}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class Tu{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?W``:W`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(e=>{const r=e.dependencies||{},n=Object.entries(r);return n.length===0?W``:W`
                        <wa-tree-item expanded>
                            <span>${e.name}</span>
                            ${n.map(([i,o])=>W`
                                <wa-tree-item>
                                    <span>${i} <small>${o}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const gi=new Tu,Ru="https://api.github.com";function Lu(){const t=Gn.getCurrentApp();if(t?.metadata?.github){const e=t.metadata.github;if(e.owner&&e.repo)return{owner:e.owner,repo:e.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function Pu(t=100){try{const e=Lu(),r=await fetch(`${Ru}/repos/${e.owner}/${e.repo}/releases?per_page=${t}`);return r.ok?await r.json():[]}catch(e){return console.error("Failed to fetch releases:",e),[]}}function $u(t,e){const r=t.replace(/^v/,""),n=e.replace(/^v/,""),i=r.split(".").map(Number),o=n.split(".").map(Number);for(let a=0;a<Math.max(i.length,o.length);a++){const c=i[a]||0,f=o[a]||0;if(f>c)return!0;if(f<c)return!1}return!1}Xe({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=Gn.getCurrentApp();if(!e){je("No app loaded");return}const r=gi.hasPackages(),n=gi.renderTree();let i=null;const o=()=>(i||(i=document.getElementById("global-dialog-container")||document.createElement("div"),i.id||(i.id="global-dialog-container",document.body.appendChild(i))),i),a=()=>{i&&Or(W``,i)},c=B=>{const de=Ke.parse(B,{async:!1});return W`${zn(de)}`};let f=[];try{f=await Pu()}catch{f=[]}const y=e.version==="0.0.0",R=f.length>0?f.findIndex(B=>B.tag_name===e.version):-1,x=R>=0?R:0;let w=x;const I=B=>{if(y)return`**Development Build**

${e.description||""}`;if(f.length===0)return`**Version:** ${e.version}

${e.description||""}`;const de=f[B],ve=de.tag_name===e.version;let U=`**Version:** ${de.tag_name}`;ve&&(U+=" (Current)"),U+=`

`;const P=new Date(de.published_at).toLocaleDateString();return U+=`**Released:** ${P}

`,!ve&&$u(e.version,de.tag_name)&&(U+=`⚠️ **Update available**

`),de.body&&(U+=`---

${de.body}`),U},q=B=>{const de=I(B),ve=f.length>0,U=W`
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
                                ${r?W`<wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>`:""}
                                
                                <wa-tab-panel name="release">
                                    ${c(de)}
                                </wa-tab-panel>
                                
                                ${r?W`
                                    <wa-tab-panel name="packages">
                                        ${n}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${ve?W`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${B===f.length-1}
                                    @click=${()=>{B<f.length-1&&(w=B+1,q(w))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${B===0}
                                    @click=${()=>{B>0&&(w=B-1,q(w))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" @click=${a}>Close</wa-button>
                        </div>
                    </wa-dialog>
                `;Or(U,o())};return q(x),new Promise(B=>{const de=()=>{i?.querySelector("wa-dialog[open]")?setTimeout(de,100):B()};de()})}}});Xe({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const r=new Ou,n=await Ot.getWorkspace();await r.init(n,t),await r.installDependencies(),await r.execScript(e)}}});Xe({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});Xe({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=nn.get()||Ye.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=Ye.get();return!t||!t.isDirty()}}});Xe({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});const no="theme";async function io(t){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(t)}async function Du(){const t=await Et.get(no);await io(t||"wa-dark")}async function Nu(t){await Et.set(no,t)}Xe({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{const r=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await io(r),await Nu(r)}},contribution:{target:yn,icon:"circle-half-stroke",label:"Theme Switcher"}});Du().catch(t=>{console.error("Failed to load theme preference:",t)});Xe({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:yn,icon:"expand",label:"Fullscreen"}});Xe({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:t=>{const e={title:"settings.json",data:{async getContents(){const r=await Et.getAll();return JSON.stringify(r,void 0,2)},getName(){return e.key},saveContents(r){const n=JSON.parse(r);return Et.setAll(n)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>W`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,Vr.loadEditor(e).then()}},contribution:{target:yn,icon:"gear",label:"Open Settings"}});Xe({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>W`
                <k-extensions></k-extensions>`,Vr.loadEditor(e).then()}},contribution:{target:yn,icon:"puzzle-piece",label:"Open Extensions"}});Le.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?je(t):jt(t))}}});const Mu="@kispace-io/appspace",Fu="0.0.0",qu={"@awesome.me/webawesome":"^3.0.0","@fortawesome/fontawesome-free":"^7.1.0","@fortawesome/fontawesome-svg-core":"^7.1.0","@fortawesome/free-solid-svg-icons":"^7.1.0","@lit-labs/signals":"^0.1.3","@lit/context":"^1.1.6","@mlc-ai/web-llm":"^0.2.79","@types/papaparse":"^5.3.16","@xterm/xterm":"^5.5.0",axios:"^1.13.1",dotenv:"^17.2.3","idb-keyval":"^6.2.2",jsonata:"^2.1.0",jszip:"^3.10.1",lit:"^3.2.1",marked:"^16.4.1","monaco-editor":"^0.54.0",papaparse:"^5.5.3","pip-requirements-js":"^1.0.2","pubsub-js":"^1.9.5",pyodide:"^0.27.7","signal-polyfill":"^0.2.2","signal-utils":"^0.21.1","toastify-js":"^1.12.0",uuid:"^13.0.0","wasm-git":"^0.0.13"},zu={typescript:"^5.9.3",vite:"^7.1.12"},ei={name:Mu,version:Fu,dependencies:qu,devDependencies:zu};gi.addPackage({name:ei.name,version:ei.version,dependencies:ei.dependencies,devDependencies:ei.devDependencies});function ti(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Mi={exports:{}},Js;function Uu(){return Js||(Js=1,(function(t,e){(function(r){t.exports=r()})(function(){return(function(){function r(n,i,o){function a(y,R){if(!i[y]){if(!n[y]){var x=typeof ti=="function"&&ti;if(!R&&x)return x(y,!0);if(c)return c(y,!0);var w=new Error("Cannot find module '"+y+"'");throw w.code="MODULE_NOT_FOUND",w}var I=i[y]={exports:{}};n[y][0].call(I.exports,function(q){var B=n[y][1][q];return a(B||q)},I,I.exports,r,n,i,o)}return i[y].exports}for(var c=typeof ti=="function"&&ti,f=0;f<o.length;f++)a(o[f]);return a}return r})()({1:[function(r,n,i){const o=r("./utils"),a=(function(){const c=o.stringToArray,f=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],y=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],R=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],x=["Thousand","Million","Billion","Trillion"];function w(T,N){var L=function(ne,X,j){var re="";if(ne<=19)re=(X?" and ":"")+(j?y[ne]:f[ne]);else if(ne<100){const De=Math.floor(ne/10),Fe=ne%10;re=(X?" and ":"")+R[De-2],Fe>0?re+="-"+L(Fe,!1,j):j&&(re=re.substring(0,re.length-1)+"ieth")}else if(ne<1e3){const De=Math.floor(ne/100),Fe=ne%100;re=(X?", ":"")+f[De]+" Hundred",Fe>0?re+=L(Fe,!0,j):j&&(re+="th")}else{var ye=Math.floor(Math.log10(ne)/3);ye>x.length&&(ye=x.length);const De=Math.pow(10,ye*3),Fe=Math.floor(ne/De),ge=ne-Fe*De;re=(X?", ":"")+L(Fe,!1,!1)+" "+x[ye-1],ge>0?re+=L(ge,!0,j):j&&(re+="th")}return re},H=L(T,!1,N);return H}const I={};f.forEach(function(T,N){I[T.toLowerCase()]=N}),y.forEach(function(T,N){I[T.toLowerCase()]=N}),R.forEach(function(T,N){const L=T.toLowerCase();I[L]=(N+2)*10,I[L.substring(0,T.length-1)+"ieth"]=I[L]}),I.hundredth=100,x.forEach(function(T,N){const L=T.toLowerCase(),H=Math.pow(10,(N+1)*3);I[L]=H,I[L+"th"]=H});function q(T){const L=T.split(/,\s|\sand\s|[\s\\-]/).map(X=>I[X]);let H=[0];return L.forEach(X=>{if(X<100){let j=H.pop();j>=1e3&&(H.push(j),j=0),H.push(j+X)}else H.push(H.pop()*X)}),H.reduce((X,j)=>X+j,0)}const B=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],de={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function ve(T){for(var N=0;N<B.length;N++){const L=B[N];if(T>=L[0])return L[1]+ve(T-L[0])}return""}function U(T){for(var N=0,L=1,H=T.length-1;H>=0;H--){const ne=T[H],X=de[ne];X<L?N-=X:(L=X,N+=X)}return N}function P(T,N){for(var L=[],H=N.charCodeAt(0);T>0;)L.unshift(String.fromCharCode((T-1)%26+H)),T=Math.floor((T-1)/26);return L.join("")}function G(T,N){for(var L=N.charCodeAt(0),H=0,ne=0;ne<T.length;ne++)H+=(T.charCodeAt(T.length-ne-1)-L+1)*Math.pow(26,ne);return H}function F(T,N){if(typeof T>"u")return;T=Math.floor(T);const L=Ee(N);return J(T,L)}const O={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},z={UPPER:"upper",LOWER:"lower",TITLE:"title"};function J(T,N){let L;const H=T<0;switch(T=Math.abs(T),N.primary){case O.LETTERS:L=P(T,N.case===z.UPPER?"A":"a");break;case O.ROMAN:L=ve(T),N.case===z.UPPER&&(L=L.toUpperCase());break;case O.WORDS:L=w(T,N.ordinal),N.case===z.UPPER?L=L.toUpperCase():N.case===z.LOWER&&(L=L.toLowerCase());break;case O.DECIMAL:L=""+T;var ne=N.mandatoryDigits-L.length;if(ne>0){var X=new Array(ne+1).join("0");L=X+L}if(N.zeroCode!==48&&(L=c(L).map(De=>String.fromCodePoint(De.codePointAt(0)+N.zeroCode-48)).join("")),N.regular){const De=Math.floor((L.length-1)/N.groupingSeparators.position);for(let Fe=De;Fe>0;Fe--){const ge=L.length-Fe*N.groupingSeparators.position;L=L.substr(0,ge)+N.groupingSeparators.character+L.substr(ge)}}else N.groupingSeparators.reverse().forEach(De=>{const Fe=L.length-De.position;L=L.substr(0,Fe)+De.character+L.substr(Fe)});if(N.ordinal){var j={1:"st",2:"nd",3:"rd"},re=L[L.length-1],ye=j[re];(!ye||L.length>1&&L[L.length-2]==="1")&&(ye="th"),L=L+ye}break;case O.SEQUENCE:throw{code:"D3130",value:N.token}}return H&&(L="-"+L),L}const Se=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function Ee(T){const N={type:"integer",primary:O.DECIMAL,case:z.LOWER,ordinal:!1};let L,H;const ne=T.lastIndexOf(";");switch(ne===-1?L=T:(L=T.substring(0,ne),H=T.substring(ne+1),H[0]==="o"&&(N.ordinal=!0)),L){case"A":N.case=z.UPPER;case"a":N.primary=O.LETTERS;break;case"I":N.case=z.UPPER;case"i":N.primary=O.ROMAN;break;case"W":N.case=z.UPPER,N.primary=O.WORDS;break;case"Ww":N.case=z.TITLE,N.primary=O.WORDS;break;case"w":N.primary=O.WORDS;break;default:{let X=null,j=0,re=0,ye=[],De=0;if(c(L).map(ge=>ge.codePointAt(0)).reverse().forEach(ge=>{let Ie=!1;for(let $e=0;$e<Se.length;$e++){const he=Se[$e];if(ge>=he&&ge<=he+9){if(Ie=!0,j++,De++,X===null)X=he;else if(he!==X)throw{code:"D3131"};break}}Ie||(ge===35?(De++,re++):ye.push({position:De,character:String.fromCodePoint(ge)}))}),j>0){N.primary=O.DECIMAL,N.zeroCode=X,N.mandatoryDigits=j,N.optionalDigits=re;const Ie=function($e){if($e.length===0)return 0;const he=$e[0].character;for(let ht=1;ht<$e.length;ht++)if($e[ht].character!==he)return 0;const dt=$e.map(ht=>ht.position),Ft=function(ht,xt){return xt===0?ht:Ft(xt,ht%xt)},wt=dt.reduce(Ft);for(let ht=1;ht<=dt.length;ht++)if(dt.indexOf(ht*wt)===-1)return 0;return wt}(ye);Ie>0?(N.regular=!0,N.groupingSeparators={position:Ie,character:ye[0].character}):(N.regular=!1,N.groupingSeparators=ye)}else N.primary=O.SEQUENCE,N.token=L}}return N}const se={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function M(T){var N=[];const L={type:"datetime",parts:N},H=function(Ie,$e){if($e>Ie){let he=T.substring(Ie,$e);he=he.split("]]").join("]"),N.push({type:"literal",value:he})}};for(var ne=0,X=0;X<T.length;){if(T.charAt(X)==="["){if(T.charAt(X+1)==="["){H(ne,X),N.push({type:"literal",value:"["}),X+=2,ne=X;continue}if(H(ne,X),ne=X,X=T.indexOf("]",ne),X===-1)throw{code:"D3135"};let Ie=T.substring(ne+1,X);Ie=Ie.split(/\s+/).join("");var j={type:"marker",component:Ie.charAt(0)},re=Ie.lastIndexOf(","),ye;if(re!==-1){const $e=Ie.substring(re+1),he=$e.indexOf("-");let dt,Ft;const wt=function(xt){if(!(typeof xt>"u"||xt==="*"))return parseInt(xt)};he===-1?dt=$e:(dt=$e.substring(0,he),Ft=$e.substring(he+1));const ht={min:wt(dt),max:wt(Ft)};j.width=ht,ye=Ie.substring(1,re)}else ye=Ie.substring(1);if(ye.length===1)j.presentation1=ye;else if(ye.length>1){var De=ye.charAt(ye.length-1);"atco".indexOf(De)!==-1?(j.presentation2=De,De==="o"&&(j.ordinal=!0),j.presentation1=ye.substring(0,ye.length-1)):j.presentation1=ye}else j.presentation1=se[j.component];if(typeof j.presentation1>"u")throw{code:"D3132",value:j.component};if(j.presentation1[0]==="n")j.names=z.LOWER;else if(j.presentation1[0]==="N")j.presentation1[1]==="n"?j.names=z.TITLE:j.names=z.UPPER;else if("YMDdFWwXxHhmsf".indexOf(j.component)!==-1){var Fe=j.presentation1;if(j.presentation2&&(Fe+=";"+j.presentation2),j.integerFormat=Ee(Fe),j.width&&j.width.min!==void 0&&j.integerFormat.mandatoryDigits<j.width.min&&(j.integerFormat.mandatoryDigits=j.width.min),j.component==="Y")if(j.n=-1,j.width&&j.width.max!==void 0)j.n=j.width.max,j.integerFormat.mandatoryDigits=j.n;else{var ge=j.integerFormat.mandatoryDigits+j.integerFormat.optionalDigits;ge>=2&&(j.n=ge)}const $e=N[N.length-1];$e&&$e.integerFormat&&($e.integerFormat.parseWidth=$e.integerFormat.mandatoryDigits)}(j.component==="Z"||j.component==="z")&&(j.integerFormat=Ee(j.presentation1)),N.push(j),ne=X+1}X++}return H(ne,X),L}const ie=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fe=["January","February","March","April","May","June","July","August","September","October","November","December"],ke=1e3*60*60*24,ae=function(T){const N=Date.UTC(T.year,T.month);var L=new Date(N).getUTCDay();return L===0&&(L=7),L>4?N+(8-L)*ke:N-(L-1)*ke},ee=function(T,N){return{year:T,month:N,nextMonth:function(){return N===11?ee(T+1,0):ee(T,N+1)},previousMonth:function(){return N===0?ee(T-1,11):ee(T,N-1)},nextYear:function(){return ee(T+1,N)},previousYear:function(){return ee(T-1,N)}}},oe=function(T,N){return(N-T)/(ke*7)+1},V=(T,N)=>{let L;switch(N){case"Y":L=T.getUTCFullYear();break;case"M":L=T.getUTCMonth()+1;break;case"D":L=T.getUTCDate();break;case"d":{const H=Date.UTC(T.getUTCFullYear(),T.getUTCMonth(),T.getUTCDate()),ne=Date.UTC(T.getUTCFullYear(),0);L=(H-ne)/ke+1;break}case"F":L=T.getUTCDay(),L===0&&(L=7);break;case"W":{const H=ee(T.getUTCFullYear(),0),ne=ae(H),X=Date.UTC(H.year,T.getUTCMonth(),T.getUTCDate());let j=oe(ne,X);if(j>52){const re=ae(H.nextYear());X>=re&&(j=1)}else if(j<1){const re=ae(H.previousYear());j=oe(re,X)}L=Math.floor(j);break}case"w":{const H=ee(T.getUTCFullYear(),T.getUTCMonth()),ne=ae(H),X=Date.UTC(H.year,H.month,T.getUTCDate());let j=oe(ne,X);if(j>4){const re=ae(H.nextMonth());X>=re&&(j=1)}else if(j<1){const re=ae(H.previousMonth());j=oe(re,X)}L=Math.floor(j);break}case"X":{const H=ee(T.getUTCFullYear(),0),ne=ae(H),X=ae(H.nextYear()),j=T.getTime();j<ne?L=H.year-1:j>=X?L=H.year+1:L=H.year;break}case"x":{const H=ee(T.getUTCFullYear(),T.getUTCMonth()),ne=ae(H),X=H.nextMonth(),j=ae(X),re=T.getTime();re<ne?L=H.previousMonth().month+1:re>=j?L=X.month+1:L=H.month+1;break}case"H":L=T.getUTCHours();break;case"h":L=T.getUTCHours(),L=L%12,L===0&&(L=12);break;case"P":L=T.getUTCHours()>=12?"pm":"am";break;case"m":L=T.getUTCMinutes();break;case"s":L=T.getUTCSeconds();break;case"f":L=T.getUTCMilliseconds();break;case"Z":case"z":break;case"C":L="ISO";break;case"E":L="ISO";break}return L};let xe=null;function Pe(T,N,L){var H=0,ne=0;if(typeof L<"u"){const Fe=parseInt(L);H=Math.floor(Fe/100),ne=Fe%100}var X=function(Fe,ge){var Ie=V(Fe,ge.component);if("YMDdFWwXxHhms".indexOf(ge.component)!==-1)if(ge.component==="Y"&&ge.n!==-1&&(Ie=Ie%Math.pow(10,ge.n)),ge.names){if(ge.component==="M"||ge.component==="x")Ie=fe[Ie-1];else if(ge.component==="F")Ie=ie[Ie];else throw{code:"D3133",value:ge.component};ge.names===z.UPPER?Ie=Ie.toUpperCase():ge.names===z.LOWER&&(Ie=Ie.toLowerCase()),ge.width&&Ie.length>ge.width.max&&(Ie=Ie.substring(0,ge.width.max))}else Ie=J(Ie,ge.integerFormat);else if(ge.component==="f")Ie=J(Ie,ge.integerFormat);else if(ge.component==="Z"||ge.component==="z"){const $e=H*100+ne;if(ge.integerFormat.regular)Ie=J($e,ge.integerFormat);else{const he=ge.integerFormat.mandatoryDigits;if(he===1||he===2)Ie=J(H,ge.integerFormat),ne!==0&&(Ie+=":"+F(ne,"00"));else if(he===3||he===4)Ie=J($e,ge.integerFormat);else throw{code:"D3134",value:he}}$e>=0&&(Ie="+"+Ie),ge.component==="z"&&(Ie="GMT"+Ie),$e===0&&ge.presentation2==="t"&&(Ie="Z")}else ge.component==="P"&&ge.names===z.UPPER&&(Ie=Ie.toUpperCase());return Ie};let j;typeof N>"u"?(xe===null&&(xe=M("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),j=xe):j=M(N);const re=(60*H+ne)*60*1e3,ye=new Date(T+re);let De="";return j.parts.forEach(function(Fe){Fe.type==="literal"?De+=Fe.value:De+=X(ye,Fe)}),De}function b(T){var N={};if(T.type==="datetime")N.type="datetime",N.parts=T.parts.map(function(L){var H={};if(L.type==="literal")H.regex=L.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(L.component==="Z"||L.component==="z"){let X;Array.isArray(L.integerFormat.groupingSeparators)||(X=L.integerFormat.groupingSeparators),H.regex="",L.component==="z"&&(H.regex="GMT"),H.regex+="[-+][0-9]+",X&&(H.regex+=X.character+"[0-9]+"),H.parse=function(j){L.component==="z"&&(j=j.substring(3));let re=0,ye=0;return X?(re=Number.parseInt(j.substring(0,j.indexOf(X.character))),ye=Number.parseInt(j.substring(j.indexOf(X.character)+1))):j.length-1<=2?re=Number.parseInt(j):(re=Number.parseInt(j.substring(0,3)),ye=Number.parseInt(j.substring(3))),re*60+ye}}else if(L.integerFormat)H=b(L.integerFormat);else{H.regex="[a-zA-Z]+";var ne={};if(L.component==="M"||L.component==="x")fe.forEach(function(X,j){L.width&&L.width.max?ne[X.substring(0,L.width.max)]=j+1:ne[X]=j+1});else if(L.component==="F")ie.forEach(function(X,j){j>0&&(L.width&&L.width.max?ne[X.substring(0,L.width.max)]=j:ne[X]=j)});else if(L.component==="P")ne={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:L.component};H.parse=function(X){return ne[X]}}return H.component=L.component,H});else{N.type="integer";const L=T.case===z.UPPER;switch(T.primary){case O.LETTERS:N.regex=L?"[A-Z]+":"[a-z]+",N.parse=function(H){return G(H,L?"A":"a")};break;case O.ROMAN:N.regex=L?"[MDCLXVI]+":"[mdclxvi]+",N.parse=function(H){return U(L?H:H.toUpperCase())};break;case O.WORDS:N.regex="(?:"+Object.keys(I).concat("and","[\\-, ]").join("|")+")+",N.parse=function(H){return q(H.toLowerCase())};break;case O.DECIMAL:N.regex="[0-9]",T.parseWidth?N.regex+=`{${T.parseWidth}}`:N.regex+="+",T.ordinal&&(N.regex+="(?:th|st|nd|rd)"),N.parse=function(H){let ne=H;return T.ordinal&&(ne=H.substring(0,H.length-2)),T.regular?ne=ne.split(",").join(""):T.groupingSeparators.forEach(X=>{ne=ne.split(X.character).join("")}),T.zeroCode!==48&&(ne=ne.split("").map(X=>String.fromCodePoint(X.codePointAt(0)-T.zeroCode+48)).join("")),parseInt(ne)};break;case O.SEQUENCE:throw{code:"D3130",value:T.token}}}return N}function S(T,N){if(typeof T>"u")return;const L=Ee(N);return b(L).parse(T)}function ue(T,N){const L=M(N),H=b(L),ne="^"+H.parts.map(ye=>"("+ye.regex+")").join("")+"$";var j=new RegExp(ne,"i").exec(T);if(j!==null){const he={};for(let ze=1;ze<j.length;ze++){const m=H.parts[ze-1];m.parse&&(he[m.component]=m.parse(j[ze]))}if(Object.getOwnPropertyNames(he).length===0)return;let dt=0;const Ft=ze=>{dt<<=1,dt+=ze?1:0},wt=ze=>!(~ze&dt)&&!!(ze&dt);"YXMxWwdD".split("").forEach(ze=>Ft(he[ze]));const xt=!wt(161)&&wt(130),Gt=wt(84),ar=!Gt&&wt(72);dt=0,"PHhmsf".split("").forEach(ze=>Ft(he[ze]));const Jt=!wt(23)&&wt(47),gr=(xt?"YD":Gt?"XxwF":ar?"XWF":"YMD")+(Jt?"Phmsf":"Hmsf"),qt=this.environment.timestamp;let at=!1,Ht=!1;if(gr.split("").forEach(ze=>{if(typeof he[ze]>"u")at?(he[ze]="MDd".indexOf(ze)!==-1?1:0,Ht=!0):he[ze]=V(qt,ze);else if(at=!0,Ht)throw{code:"D3136"}}),he.M>0?he.M-=1:he.M=0,xt){const ze=Date.UTC(he.Y,0),m=(he.d-1)*1e3*60*60*24,k=new Date(ze+m);he.M=k.getUTCMonth(),he.D=k.getUTCDate()}if(Gt)throw{code:"D3136"};if(ar)throw{code:"D3136"};Jt&&(he.H=he.h===12?0:he.h,he.P===1&&(he.H+=12));var re=Date.UTC(he.Y,he.M,he.D,he.H,he.m,he.s,he.f);return(he.Z||he.z)&&(re-=(he.Z||he.z)*60*1e3),re}}var Ce=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Je(T,N){if(!(typeof T>"u"))if(typeof N>"u"){if(!Ce.test(T))throw{stack:new Error().stack,code:"D3110",value:T};return Date.parse(T)}else return ue.call(this,T,N)}function Me(T,N,L){if(!(typeof T>"u"))return Pe.call(this,T,N,L)}return{formatInteger:F,parseInteger:S,fromMillis:Me,toMillis:Je}})();n.exports=a},{"./utils":6}],2:[function(r,n,i){(function(o){(function(){var a=r("./utils");const c=(()=>{var f=a.isNumeric,y=a.isArrayOfStrings,R=a.isArrayOfNumbers,x=a.createSequence,w=a.isSequence,I=a.isFunction,q=a.isLambda,B=a.isPromise,de=a.getFunctionArity,ve=a.isDeepEqual,U=a.stringToArray;function P(u){if(!(typeof u>"u")){var h=0;return u.forEach(function(g){h+=g}),h}}function G(u){return typeof u>"u"?0:u.length}function F(u){if(!(typeof u>"u"||u.length===0))return Math.max.apply(Math,u)}function O(u){if(!(typeof u>"u"||u.length===0))return Math.min.apply(Math,u)}function z(u){if(!(typeof u>"u"||u.length===0)){var h=0;return u.forEach(function(g){h+=g}),h/u.length}}function J(u,h=!1){if(!(typeof u>"u")){var g;if(typeof u=="string")g=u;else if(I(u))g="";else{if(typeof u=="number"&&!isFinite(u))throw{code:"D3001",value:u,stack:new Error().stack};var _=h?2:0;Array.isArray(u)&&u.outerWrapper&&(u=u[0]),g=JSON.stringify(u,function(A,$){return typeof $<"u"&&$!==null&&$.toPrecision&&f($)?Number($.toPrecision(15)):$&&I($)?"":$},_)}return g}}function Se(u,h,g){if(!(typeof u>"u")){var _=U(u),A=_.length;if(A+h<0&&(h=0),typeof g<"u"){if(g<=0)return"";var $=h>=0?h+g:A+h+g;return _.slice(h,$).join("")}return _.slice(h).join("")}}function Ee(u,h){if(!(typeof u>"u")){var g=u.indexOf(h);return g>-1?u.substr(0,g):u}}function se(u,h){if(!(typeof u>"u")){var g=u.indexOf(h);return g>-1?u.substr(g+h.length):u}}function M(u){if(!(typeof u>"u"))return u.toLowerCase()}function ie(u){if(!(typeof u>"u"))return u.toUpperCase()}function fe(u){if(!(typeof u>"u"))return U(u).length}function ke(u){if(!(typeof u>"u")){var h=u.replace(/[ \t\n\r]+/gm," ");return h.charAt(0)===" "&&(h=h.substring(1)),h.charAt(h.length-1)===" "&&(h=h.substring(0,h.length-1)),h}}function ae(u,h,g){if(!(typeof u>"u")){(typeof g>"u"||g.length===0)&&(g=" ");var _;h=Math.trunc(h);var A=Math.abs(h)-fe(u);if(A>0){var $=new Array(A+1).join(g);g.length>1&&($=Se($,0,A)),h>0?_=u+$:_=$+u}else _=u;return _}}async function ee(u,h){var g=u.apply(this,[h]);if(B(g)&&(g=await g),g&&!(typeof g.start=="number"||g.end==="number"||Array.isArray(g.groups)||I(g.next)))throw{code:"T1010",stack:new Error().stack};return g}async function oe(u,h){if(!(typeof u>"u")){var g;if(typeof h=="string")g=u.indexOf(h)!==-1;else{var _=await ee(h,u);g=typeof _<"u"}return g}}async function V(u,h,g){if(!(typeof u>"u")){if(g<0)throw{stack:new Error().stack,value:g,code:"D3040",index:3};var _=x();if(typeof g>"u"||g>0){var A=0,$=await ee(h,u);if(typeof $<"u")for(;typeof $<"u"&&(typeof g>"u"||A<g);)_.push({match:$.match,index:$.start,groups:$.groups}),$=await ee($.next),A++}return _}}async function xe(u,h,g,_){if(!(typeof u>"u")){var A=this;if(h==="")throw{code:"D3010",stack:new Error().stack,value:h,index:2};if(_<0)throw{code:"D3011",stack:new Error().stack,value:_,index:4};var $;typeof g=="string"?$=function(qe){for(var ct="",Re=0,nt=g.indexOf("$",Re);nt!==-1&&Re<g.length;){ct+=g.substring(Re,nt),Re=nt+1;var Nt=g.charAt(Re);if(Nt==="$")ct+="$",Re++;else if(Nt==="0")ct+=qe.match,Re++;else{var Ze;if(qe.groups.length===0?Ze=1:Ze=Math.floor(Math.log(qe.groups.length)*Math.LOG10E)+1,nt=parseInt(g.substring(Re,Re+Ze),10),Ze>1&&nt>qe.groups.length&&(nt=parseInt(g.substring(Re,Re+Ze-1),10)),isNaN(nt))ct+="$";else{if(qe.groups.length>0){var vr=qe.groups[nt-1];typeof vr<"u"&&(ct+=vr)}Re+=nt.toString().length}}nt=g.indexOf("$",Re)}return ct+=g.substring(Re),ct}:$=g;var Z="",pe=0;if(typeof _>"u"||_>0){var be=0;if(typeof h=="string"){for(var We=u.indexOf(h,pe);We!==-1&&(typeof _>"u"||be<_);)Z+=u.substring(pe,We),Z+=g,pe=We+h.length,be++,We=u.indexOf(h,pe);Z+=u.substring(pe)}else{var _e=await ee(h,u);if(typeof _e<"u"){for(;typeof _e<"u"&&(typeof _>"u"||be<_);){Z+=u.substring(pe,_e.start);var Be=$.apply(A,[_e]);if(B(Be)&&(Be=await Be),typeof Be=="string")Z+=Be;else throw{code:"D3012",stack:new Error().stack,value:Be};pe=_e.start+_e.match.length,be++,_e=await ee(_e.next)}Z+=u.substring(pe)}else Z=u}}else Z=u;return Z}}function Pe(u){if(!(typeof u>"u")){var h=typeof window<"u"?window.btoa:function(g){return new o.Buffer.from(g,"binary").toString("base64")};return h(u)}}function b(u){if(!(typeof u>"u")){var h=typeof window<"u"?window.atob:function(g){return new o.Buffer.from(g,"base64").toString("binary")};return h(u)}}function S(u){if(!(typeof u>"u")){var h;try{h=encodeURIComponent(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"encodeUrlComponent"}}return h}}function ue(u){if(!(typeof u>"u")){var h;try{h=encodeURI(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"encodeUrl"}}return h}}function Ce(u){if(!(typeof u>"u")){var h;try{h=decodeURIComponent(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"decodeUrlComponent"}}return h}}function Je(u){if(!(typeof u>"u")){var h;try{h=decodeURI(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"decodeUrl"}}return h}}async function Me(u,h,g){if(!(typeof u>"u")){if(g<0)throw{code:"D3020",stack:new Error().stack,value:g,index:3};var _=[];if(typeof g>"u"||g>0)if(typeof h=="string")_=u.split(h,g);else{var A=0,$=await ee(h,u);if(typeof $<"u"){for(var Z=0;typeof $<"u"&&(typeof g>"u"||A<g);)_.push(u.substring(Z,$.start)),Z=$.end,$=await ee($.next),A++;(typeof g>"u"||A<g)&&_.push(u.substring(Z))}else _.push(u)}return _}}function T(u,h){if(!(typeof u>"u"))return typeof h>"u"&&(h=""),u.join(h)}function N(u,h,g){if(!(typeof u>"u")){var _={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},A=_;typeof g<"u"&&Object.keys(g).forEach(function(we){A[we]=g[we]});for(var $=[],Z=A["zero-digit"].charCodeAt(0),pe=Z;pe<Z+10;pe++)$.push(String.fromCharCode(pe));var be=$.concat([A["decimal-separator"],A["exponent-separator"],A["grouping-separator"],A.digit,A["pattern-separator"]]),We=h.split(A["pattern-separator"]);if(We.length>2)throw{code:"D3080",stack:new Error().stack};var _e=function(we){var et=(function(){for(var it,At=0;At<we.length;At++)if(it=we.charAt(At),be.indexOf(it)!==-1&&it!==A["exponent-separator"])return we.substring(0,At)})(),yt=(function(){for(var it,At=we.length-1;At>=0;At--)if(it=we.charAt(At),be.indexOf(it)!==-1&&it!==A["exponent-separator"])return we.substring(At+1)})(),tt=we.substring(et.length,we.length-yt.length),Rt,Qt,St,ot,Lt=we.indexOf(A["exponent-separator"],et.length);Lt===-1||Lt>we.length-yt.length?(Rt=tt,Qt=void 0):(Rt=tt.substring(0,Lt),Qt=tt.substring(Lt+1));var Pt=Rt.indexOf(A["decimal-separator"]);return Pt===-1?(St=Rt,ot=yt):(St=Rt.substring(0,Pt),ot=Rt.substring(Pt+1)),{prefix:et,suffix:yt,activePart:tt,mantissaPart:Rt,exponentPart:Qt,integerPart:St,fractionalPart:ot,subpicture:we}},Be=function(we){var et,yt,tt=we.subpicture,Rt=tt.indexOf(A["decimal-separator"]);Rt!==tt.lastIndexOf(A["decimal-separator"])&&(et="D3081"),tt.indexOf(A.percent)!==tt.lastIndexOf(A.percent)&&(et="D3082"),tt.indexOf(A["per-mille"])!==tt.lastIndexOf(A["per-mille"])&&(et="D3083"),tt.indexOf(A.percent)!==-1&&tt.indexOf(A["per-mille"])!==-1&&(et="D3084");var Qt=!1;for(yt=0;yt<we.mantissaPart.length;yt++){var St=we.mantissaPart.charAt(yt);if($.indexOf(St)!==-1||St===A.digit){Qt=!0;break}}Qt||(et="D3085");var ot=we.activePart.split("").map(function(it){return be.indexOf(it)===-1?"p":"a"}).join("");ot.indexOf("p")!==-1&&(et="D3086"),Rt!==-1?(tt.charAt(Rt-1)===A["grouping-separator"]||tt.charAt(Rt+1)===A["grouping-separator"])&&(et="D3087"):we.integerPart.charAt(we.integerPart.length-1)===A["grouping-separator"]&&(et="D3088"),tt.indexOf(A["grouping-separator"]+A["grouping-separator"])!==-1&&(et="D3089");var Lt=we.integerPart.indexOf(A.digit);Lt!==-1&&we.integerPart.substring(0,Lt).split("").filter(function(it){return $.indexOf(it)>-1}).length>0&&(et="D3090"),Lt=we.fractionalPart.lastIndexOf(A.digit),Lt!==-1&&we.fractionalPart.substring(Lt).split("").filter(function(it){return $.indexOf(it)>-1}).length>0&&(et="D3091");var Pt=typeof we.exponentPart=="string";if(Pt&&we.exponentPart.length>0&&(tt.indexOf(A.percent)!==-1||tt.indexOf(A["per-mille"])!==-1)&&(et="D3092"),Pt&&(we.exponentPart.length===0||we.exponentPart.split("").filter(function(it){return $.indexOf(it)===-1}).length>0)&&(et="D3093"),et)throw{code:et,stack:new Error().stack}},qe=function(we){var et=function(ft,Fr){for(var br=[],Xt=ft.indexOf(A["grouping-separator"]);Xt!==-1;){var Jr=(Fr?ft.substring(0,Xt):ft.substring(Xt)).split("").filter(function(Er){return $.indexOf(Er)!==-1||Er===A.digit}).length;br.push(Jr),Xt=we.integerPart.indexOf(A["grouping-separator"],Xt+1)}return br},yt=et(we.integerPart),tt=function(ft){if(ft.length===0)return 0;for(var Fr=function(Jr,Er){return Er===0?Jr:Fr(Er,Jr%Er)},br=ft.reduce(Fr),Xt=1;Xt<=ft.length;Xt++)if(ft.indexOf(Xt*br)===-1)return 0;return br},Rt=tt(yt),Qt=et(we.fractionalPart,!0),St=we.integerPart.split("").filter(function(ft){return $.indexOf(ft)!==-1}).length,ot=St,Lt=we.fractionalPart.split(""),Pt=Lt.filter(function(ft){return $.indexOf(ft)!==-1}).length,it=Lt.filter(function(ft){return $.indexOf(ft)!==-1||ft===A.digit}).length,At=typeof we.exponentPart=="string";St===0&&it===0&&(At?(Pt=1,it=1):St=1),At&&St===0&&we.integerPart.indexOf(A.digit)!==-1&&(St=1),St===0&&Pt===0&&(Pt=1);var Mr=0;return At&&(Mr=we.exponentPart.split("").filter(function(ft){return $.indexOf(ft)!==-1}).length),{integerPartGroupingPositions:yt,regularGrouping:Rt,minimumIntegerPartSize:St,scalingFactor:ot,prefix:we.prefix,fractionalPartGroupingPositions:Qt,minimumFactionalPartSize:Pt,maximumFactionalPartSize:it,minimumExponentSize:Mr,suffix:we.suffix,picture:we.subpicture}},ct=We.map(_e);ct.forEach(Be);var Re=ct.map(qe),nt=A["minus-sign"],Nt=A["zero-digit"],Ze=A["decimal-separator"],vr=A["grouping-separator"];Re.length===1&&(Re.push(JSON.parse(JSON.stringify(Re[0]))),Re[1].prefix=nt+Re[1].prefix);var rt;u>=0?rt=Re[0]:rt=Re[1];var Dr;rt.picture.indexOf(A.percent)!==-1?Dr=u*100:rt.picture.indexOf(A["per-mille"])!==-1?Dr=u*1e3:Dr=u;var ut,Zt;if(rt.minimumExponentSize===0)ut=Dr;else{var Oi=Math.pow(10,rt.scalingFactor),Jn=Math.pow(10,rt.scalingFactor-1);for(ut=Dr,Zt=0;ut<Jn;)ut*=10,Zt-=1;for(;ut>Oi;)ut/=10,Zt+=1}var bn=re(ut,rt.maximumFactionalPartSize),Zn=function(we,et){var yt=Math.abs(we).toFixed(et);return Nt!=="0"&&(yt=yt.split("").map(function(tt){return tt>="0"&&tt<="9"?$[tt.charCodeAt(0)-48]:tt}).join("")),yt},Oe=Zn(bn,rt.maximumFactionalPartSize),pt=Oe.indexOf(".");for(pt===-1?Oe=Oe+Ze:Oe=Oe.replace(".",Ze);Oe.charAt(0)===Nt;)Oe=Oe.substring(1);for(;Oe.charAt(Oe.length-1)===Nt;)Oe=Oe.substring(0,Oe.length-1);pt=Oe.indexOf(Ze);var yr=rt.minimumIntegerPartSize-pt,wn=rt.minimumFactionalPartSize-(Oe.length-pt-1);if(Oe=(yr>0?new Array(yr+1).join(Nt):"")+Oe,Oe=Oe+(wn>0?new Array(wn+1).join(Nt):""),pt=Oe.indexOf(Ze),rt.regularGrouping>0)for(var Tt=Math.floor((pt-1)/rt.regularGrouping),Nr=1;Nr<=Tt;Nr++)Oe=[Oe.slice(0,pt-Nr*rt.regularGrouping),vr,Oe.slice(pt-Nr*rt.regularGrouping)].join("");else rt.integerPartGroupingPositions.forEach(function(we){Oe=[Oe.slice(0,pt-we),vr,Oe.slice(pt-we)].join(""),pt++});if(pt=Oe.indexOf(Ze),rt.fractionalPartGroupingPositions.forEach(function(we){Oe=[Oe.slice(0,we+pt+1),vr,Oe.slice(we+pt+1)].join("")}),pt=Oe.indexOf(Ze),(rt.picture.indexOf(Ze)===-1||pt===Oe.length-1)&&(Oe=Oe.substring(0,Oe.length-1)),typeof Zt<"u"){var Yr=Zn(Zt,0);yr=rt.minimumExponentSize-Yr.length,yr>0&&(Yr=new Array(yr+1).join(Nt)+Yr),Oe=Oe+A["exponent-separator"]+(Zt<0?nt:"")+Yr}return Oe=rt.prefix+Oe+rt.suffix,Oe}}function L(u,h){if(!(typeof u>"u")){if(u=re(u),typeof h>"u"?h=10:h=re(h),h<2||h>36)throw{code:"D3100",stack:new Error().stack,value:h};var g=u.toString(h);return g}}function H(u){var h;if(!(typeof u>"u")){if(typeof u=="number")h=u;else if(typeof u=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(u)&&!isNaN(parseFloat(u))&&isFinite(u))h=parseFloat(u);else if(typeof u=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(u))h=Number(u);else if(u===!0)h=1;else if(u===!1)h=0;else throw{code:"D3030",value:u,stack:new Error().stack,index:1};return h}}function ne(u){var h;if(!(typeof u>"u"))return h=Math.abs(u),h}function X(u){var h;if(!(typeof u>"u"))return h=Math.floor(u),h}function j(u){var h;if(!(typeof u>"u"))return h=Math.ceil(u),h}function re(u,h){var g;if(!(typeof u>"u")){if(h){var _=u.toString().split("e");u=+(_[0]+"e"+(_[1]?+_[1]+h:h))}g=Math.round(u);var A=g-u;return Math.abs(A)===.5&&Math.abs(g%2)===1&&(g=g-1),h&&(_=g.toString().split("e"),g=+(_[0]+"e"+(_[1]?+_[1]-h:-h))),Object.is(g,-0)&&(g=0),g}}function ye(u){var h;if(!(typeof u>"u")){if(u<0)throw{stack:new Error().stack,code:"D3060",index:1,value:u};return h=Math.sqrt(u),h}}function De(u,h){var g;if(!(typeof u>"u")){if(g=Math.pow(u,h),!isFinite(g))throw{stack:new Error().stack,code:"D3061",index:1,value:u,exp:h};return g}}function Fe(){return Math.random()}function ge(u){if(!(typeof u>"u")){var h=!1;if(Array.isArray(u)){if(u.length===1)h=ge(u[0]);else if(u.length>1){var g=u.filter(function(_){return ge(_)});h=g.length>0}}else typeof u=="string"?u.length>0&&(h=!0):f(u)?u!==0&&(h=!0):u!==null&&typeof u=="object"&&!I(u)?Object.keys(u).length>0&&(h=!0):typeof u=="boolean"&&u===!0&&(h=!0);return h}}function Ie(u){if(!(typeof u>"u"))return!ge(u)}function $e(u,h,g,_){var A=[h],$=de(u);return $>=2&&A.push(g),$>=3&&A.push(_),A}async function he(u,h){if(!(typeof u>"u")){for(var g=x(),_=0;_<u.length;_++){var A=$e(h,u[_],_,u),$=await h.apply(this,A);typeof $<"u"&&g.push($)}return g}}async function dt(u,h){if(!(typeof u>"u")){for(var g=x(),_=0;_<u.length;_++){var A=u[_],$=$e(h,A,_,u),Z=await h.apply(this,$);ge(Z)&&g.push(A)}return g}}async function Ft(u,h){if(!(typeof u>"u")){for(var g=!1,_,A=0;A<u.length;A++){var $=u[A],Z=!0;if(typeof h<"u"){var pe=$e(h,$,A,u),be=await h.apply(this,pe);Z=ge(be)}if(Z)if(!g)_=$,g=!0;else throw{stack:new Error().stack,code:"D3138",index:A}}if(!g)throw{stack:new Error().stack,code:"D3139"};return _}}function wt(){for(var u=[],h=Array.prototype.slice.call(arguments),g=Math.min.apply(Math,h.map(function($){return Array.isArray($)?$.length:0})),_=0;_<g;_++){var A=h.map($=>$[_]);u.push(A)}return u}async function ht(u,h,g){if(!(typeof u>"u")){var _,A=de(h);if(A<2)throw{stack:new Error().stack,code:"D3050",index:1};var $;for(typeof g>"u"&&u.length>0?(_=u[0],$=1):(_=g,$=0);$<u.length;){var Z=[_,u[$]];A>=3&&Z.push($),A>=4&&Z.push(u),_=await h.apply(this,Z),$++}return _}}function xt(u){var h=x();if(Array.isArray(u)){var g={};u.forEach(function(_){var A=xt(_);A.forEach(function($){g[$]=!0})}),h=xt(g)}else u!==null&&typeof u=="object"&&!I(u)&&Object.keys(u).forEach(_=>h.push(_));return h}function Gt(u,h){var g;if(Array.isArray(u)){g=x();for(var _=0;_<u.length;_++){var A=Gt(u[_],h);typeof A<"u"&&(Array.isArray(A)?A.forEach($=>g.push($)):g.push(A))}}else u!==null&&typeof u=="object"&&!I(u)&&(g=u[h]);return g}function ar(u,h){return typeof u>"u"?h:typeof h>"u"?u:(Array.isArray(u)||(u=x(u)),Array.isArray(h)||(h=[h]),u.concat(h))}function Cr(u){return!(typeof u>"u")}function Jt(u){var h=x();if(Array.isArray(u))u.forEach(function(A){h=ar(h,Jt(A))});else if(u!==null&&typeof u=="object"&&!q(u))for(var g in u){var _={};_[g]=u[g],h.push(_)}else h=u;return h}function le(u){if(!(typeof u>"u")){var h={};return u.forEach(function(g){for(var _ in g)h[_]=g[_]}),h}}function _r(u){if(!(typeof u>"u")){if(u.length<=1)return u;for(var h=u.length,g=new Array(h),_=0;_<h;_++)g[h-_-1]=u[_];return g}}async function gr(u,h){var g=x();for(var _ in u){var A=$e(h,u[_],_,u),$=await h.apply(this,A);typeof $<"u"&&g.push($)}return g}function qt(u){throw{code:"D3137",stack:new Error().stack,message:u||"$error() function evaluated"}}function at(u,h){if(!u)throw{code:"D3141",stack:new Error().stack,message:h||"$assert() statement failed"}}function Ht(u){if(u!==void 0)return u===null?"null":f(u)?"number":typeof u=="string"?"string":typeof u=="boolean"?"boolean":Array.isArray(u)?"array":I(u)?"function":"object"}async function ze(u,h){if(!(typeof u>"u")){if(u.length<=1)return u;var g;if(typeof h>"u"){if(!R(u)&&!y(u))throw{stack:new Error().stack,code:"D3070",index:1};g=async function(Z,pe){return Z>pe}}else g=h;var _=async function(Z,pe){var be=async function(_e,Be,qe){Be.length===0?Array.prototype.push.apply(_e,qe):qe.length===0?Array.prototype.push.apply(_e,Be):await g(Be[0],qe[0])?(_e.push(qe[0]),await be(_e,Be,qe.slice(1))):(_e.push(Be[0]),await be(_e,Be.slice(1),qe))},We=[];return await be(We,Z,pe),We},A=async function(Z){if(!Array.isArray(Z)||Z.length<=1)return Z;var pe=Math.floor(Z.length/2),be=Z.slice(0,pe),We=Z.slice(pe);return be=await A(be),We=await A(We),await _(be,We)},$=await A(u);return $}}function m(u){if(!(typeof u>"u")){if(u.length<=1)return u;for(var h=new Array(u.length),g=0;g<u.length;g++){var _=Math.floor(Math.random()*(g+1));g!==_&&(h[g]=h[_]),h[_]=u[g]}return h}}function k(u){if(!(typeof u>"u")){if(!Array.isArray(u)||u.length<=1)return u;for(var h=w(u)?x():[],g=0;g<u.length;g++){for(var _=u[g],A=!1,$=0;$<h.length;$++)if(ve(_,h[$])){A=!0;break}A||h.push(_)}return h}}async function C(u,h){var g={};for(var _ in u){var A=u[_],$=$e(h,A,_,u),Z=await h.apply(this,$);ge(Z)&&(g[_]=A)}return Object.keys(g).length===0&&(g=void 0),g}return{sum:P,count:G,max:F,min:O,average:z,string:J,substring:Se,substringBefore:Ee,substringAfter:se,lowercase:M,uppercase:ie,length:fe,trim:ke,pad:ae,match:V,contains:oe,replace:xe,split:Me,join:T,formatNumber:N,formatBase:L,number:H,floor:X,ceil:j,round:re,abs:ne,sqrt:ye,power:De,random:Fe,boolean:ge,not:Ie,map:he,zip:wt,filter:dt,single:Ft,foldLeft:ht,sift:C,keys:xt,lookup:Gt,append:ar,exists:Cr,spread:Jt,merge:le,reverse:_r,each:gr,error:qt,assert:at,type:Ht,sort:ze,shuffle:m,distinct:k,base64encode:Pe,base64decode:b,encodeUrlComponent:S,encodeUrl:ue,decodeUrlComponent:Ce,decodeUrl:Je}})();n.exports=c}).call(this)}).call(this,typeof ks<"u"?ks:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(r,n,i){var o=r("./datetime"),a=r("./functions"),c=r("./utils"),f=r("./parser"),y=r("./signature"),R=(function(){var x=c.isNumeric,w=c.isArrayOfStrings,I=c.isArrayOfNumbers,q=c.createSequence,B=c.isSequence,de=c.isFunction,ve=c.isLambda,U=c.isIterable,P=c.isPromise,G=c.getFunctionArity,F=c.isDeepEqual,O=qt(null);async function z(m,k,C){var u,h=C.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(h&&await h(m,k,C),m.type){case"path":u=await J(m,k,C);break;case"binary":u=await fe(m,k,C);break;case"unary":u=await ke(m,k,C);break;case"name":u=ae(m,k);break;case"string":case"number":case"value":u=ee(m);break;case"wildcard":u=oe(m,k);break;case"descendant":u=xe(m,k);break;case"parent":u=C.lookup(m.slot.label);break;case"condition":u=await X(m,k,C);break;case"block":u=await j(m,k,C);break;case"bind":u=await ne(m,k,C);break;case"regex":u=re(m);break;case"function":u=await $e(m,k,C);break;case"variable":u=ye(m,k,C);break;case"lambda":u=Ft(m,k,C);break;case"partial":u=await wt(m,k,C);break;case"apply":u=await Ie(m,k,C);break;case"transform":u=Fe(m,k,C);break}if(Object.prototype.hasOwnProperty.call(m,"predicate"))for(var g=0;g<m.predicate.length;g++)u=await ie(m.predicate[g].expr,u,C);m.type!=="path"&&Object.prototype.hasOwnProperty.call(m,"group")&&(u=await N(m.group,u,C));var _=C.lookup(Symbol.for("jsonata.__evaluate_exit"));return _&&await _(m,k,C,u),u&&B(u)&&!u.tupleStream&&(m.keepArray&&(u.keepSingleton=!0),u.length===0?u=void 0:u.length===1&&(u=u.keepSingleton?u:u[0])),u}async function J(m,k,C){var u;Array.isArray(k)&&m.steps[0].type!=="variable"?u=k:u=q(k);for(var h,g=!1,_=void 0,A=0;A<m.steps.length;A++){var $=m.steps[A];if($.tuple&&(g=!0),A===0&&$.consarray?h=await z($,u,C):g?_=await M($,u,_,C):h=await Ee($,u,C,A===m.steps.length-1),!g&&(typeof h>"u"||h.length===0))break;typeof $.focus>"u"&&(u=h)}if(g)if(m.tuple)h=_;else for(h=q(),A=0;A<_.length;A++)h.push(_[A]["@"]);return m.keepSingletonArray&&(Array.isArray(h)&&h.cons&&!h.sequence&&(h=q(h)),h.keepSingleton=!0),m.hasOwnProperty("group")&&(h=await N(m.group,g?_:h,C)),h}function Se(m,k){var C=qt(m);for(const u in k)C.bind(u,k[u]);return C}async function Ee(m,k,C,u){var h;if(m.type==="sort")return h=await De(m,k,C),m.stages&&(h=await se(m.stages,h,C)),h;h=q();for(var g=0;g<k.length;g++){var _=await z(m,k[g],C);if(m.stages)for(var A=0;A<m.stages.length;A++)_=await ie(m.stages[A].expr,_,C);typeof _<"u"&&h.push(_)}var $=q();return u&&h.length===1&&Array.isArray(h[0])&&!B(h[0])?$=h[0]:h.forEach(function(Z){!Array.isArray(Z)||Z.cons?$.push(Z):Z.forEach(pe=>$.push(pe))}),$}async function se(m,k,C){for(var u=k,h=0;h<m.length;h++){var g=m[h];switch(g.type){case"filter":u=await ie(g.expr,u,C);break;case"index":for(var _=0;_<u.length;_++){var A=u[_];A[g.value]=_}break}}return u}async function M(m,k,C,u){var h;if(m.type==="sort"){if(C)h=await De(m,C,u);else{var g=await De(m,k,u);h=q(),h.tupleStream=!0;for(var _=0;_<g.length;_++){var A={"@":g[_]};A[m.index]=_,h.push(A)}}return m.stages&&(h=await se(m.stages,h,u)),h}h=q(),h.tupleStream=!0;var $=u;C===void 0&&(C=k.map(We=>({"@":We})));for(var Z=0;Z<C.length;Z++){$=Se(u,C[Z]);var pe=await z(m,C[Z]["@"],$);if(typeof pe<"u"){Array.isArray(pe)||(pe=[pe]);for(var be=0;be<pe.length;be++)A={},Object.assign(A,C[Z]),pe.tupleStream?Object.assign(A,pe[be]):(m.focus?(A[m.focus]=pe[be],A["@"]=C[Z]["@"]):A["@"]=pe[be],m.index&&(A[m.index]=be),m.ancestor&&(A[m.ancestor.label]=C[Z]["@"])),h.push(A)}}return m.stages&&(h=await se(m.stages,h,u)),h}async function ie(m,k,C){var u=q();if(k&&k.tupleStream&&(u.tupleStream=!0),Array.isArray(k)||(k=q(k)),m.type==="number"){var h=Math.floor(m.value);h<0&&(h=k.length+h);var g=await k[h];typeof g<"u"&&(Array.isArray(g)?u=g:u.push(g))}else for(h=0;h<k.length;h++){var g=k[h],_=g,A=C;k.tupleStream&&(_=g["@"],A=Se(C,g));var $=await z(m,_,A);x($)&&($=[$]),I($)?$.forEach(function(pe){var be=Math.floor(pe);be<0&&(be=k.length+be),be===h&&u.push(g)}):a.boolean($)&&u.push(g)}return u}async function fe(m,k,C){var u,h=await z(m.lhs,k,C),g=m.value,_=async()=>await z(m.rhs,k,C);if(g==="and"||g==="or")try{return await Je(h,_,g)}catch($){throw $.position=m.position,$.token=g,$}var A=await _();try{switch(g){case"+":case"-":case"*":case"/":case"%":u=b(h,A,g);break;case"=":case"!=":u=S(h,A,g);break;case"<":case"<=":case">":case">=":u=ue(h,A,g);break;case"&":u=T(h,A);break;case"..":u=H(h,A);break;case"in":u=Ce(h,A);break}}catch($){throw $.position=m.position,$.token=g,$}return u}async function ke(m,k,C){var u;switch(m.value){case"-":if(u=await z(m.expression,k,C),typeof u>"u")u=void 0;else if(x(u))u=-u;else throw{code:"D1002",stack:new Error().stack,position:m.position,token:m.value,value:u};break;case"[":u=[];let _=await Promise.all(m.expressions.map(async(A,$)=>(C.isParallelCall=$>0,[A,await z(A,k,C)])));for(let A of _){var[h,g]=A;typeof g<"u"&&(h.value==="["?u.push(g):u=a.append(u,g))}m.consarray&&Object.defineProperty(u,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":u=await N(m,k,C);break}return u}function ae(m,k,C){return a.lookup(k,m.value)}function ee(m){return m.value}function oe(m,k){var C=q();return Array.isArray(k)&&k.outerWrapper&&k.length>0&&(k=k[0]),k!==null&&typeof k=="object"&&Object.keys(k).forEach(function(u){var h=k[u];Array.isArray(h)?(h=V(h),C=a.append(C,h)):C.push(h)}),C}function V(m,k){return typeof k>"u"&&(k=[]),Array.isArray(m)?m.forEach(function(C){V(C,k)}):k.push(m),k}function xe(m,k){var C,u=q();return typeof k<"u"&&(Pe(k,u),u.length===1?C=u[0]:C=u),C}function Pe(m,k){Array.isArray(m)||k.push(m),Array.isArray(m)?m.forEach(function(C){Pe(C,k)}):m!==null&&typeof m=="object"&&Object.keys(m).forEach(function(C){Pe(m[C],k)})}function b(m,k,C){var u;if(typeof m<"u"&&!x(m))throw{code:"T2001",stack:new Error().stack,value:m};if(typeof k<"u"&&!x(k))throw{code:"T2002",stack:new Error().stack,value:k};if(typeof m>"u"||typeof k>"u")return u;switch(C){case"+":u=m+k;break;case"-":u=m-k;break;case"*":u=m*k;break;case"/":u=m/k;break;case"%":u=m%k;break}return u}function S(m,k,C){var u,h=typeof m,g=typeof k;if(h==="undefined"||g==="undefined")return!1;switch(C){case"=":u=F(m,k);break;case"!=":u=!F(m,k);break}return u}function ue(m,k,C){var u,h=typeof m,g=typeof k,_=h==="undefined"||h==="string"||h==="number",A=g==="undefined"||g==="string"||g==="number";if(!_||!A)throw{code:"T2010",stack:new Error().stack,value:h==="string"||h==="number"?k:m};if(!(h==="undefined"||g==="undefined")){if(h!==g)throw{code:"T2009",stack:new Error().stack,value:m,value2:k};switch(C){case"<":u=m<k;break;case"<=":u=m<=k;break;case">":u=m>k;break;case">=":u=m>=k;break}return u}}function Ce(m,k){var C=!1;if(typeof m>"u"||typeof k>"u")return!1;Array.isArray(k)||(k=[k]);for(var u=0;u<k.length;u++)if(k[u]===m){C=!0;break}return C}async function Je(m,k,C){var u,h=Me(m);switch(C){case"and":u=h&&Me(await k());break;case"or":u=h||Me(await k());break}return u}function Me(m){var k=a.boolean(m);return typeof k>"u"?!1:k}function T(m,k){var C,u="",h="";return typeof m<"u"&&(u=a.string(m)),typeof k<"u"&&(h=a.string(k)),C=u.concat(h),C}async function N(m,k,C){var u={},h={},g=!!(k&&k.tupleStream);Array.isArray(k)||(k=q(k)),k.length===0&&k.push(void 0);for(var _=0;_<k.length;_++)for(var A=k[_],$=g?Se(C,A):C,Z=0;Z<m.lhs.length;Z++){var pe=m.lhs[Z],be=await z(pe[0],g?A["@"]:A,$);if(typeof be!="string"&&be!==void 0)throw{code:"T1003",stack:new Error().stack,position:m.position,value:be};if(be!==void 0){var We={data:A,exprIndex:Z};if(h.hasOwnProperty(be)){if(h[be].exprIndex!==Z)throw{code:"D1009",stack:new Error().stack,position:m.position,value:be};h[be].data=a.append(h[be].data,A)}else h[be]=We}}let _e=await Promise.all(Object.keys(h).map(async(qe,ct)=>{let Re=h[qe];var nt=Re.data,Nt=C;if(g){var Ze=L(Re.data);nt=Ze["@"],delete Ze["@"],Nt=Se(C,Ze)}return C.isParallelCall=ct>0,[qe,await z(m.lhs[Re.exprIndex][1],nt,Nt)]}));for(let qe of _e){var[be,Be]=await qe;typeof Be<"u"&&(u[be]=Be)}return u}function L(m){if(!Array.isArray(m))return m;var k={};Object.assign(k,m[0]);for(var C=1;C<m.length;C++)for(const u in m[C])k[u]=a.append(k[u],m[C][u]);return k}function H(m,k){var C;if(typeof m<"u"&&!Number.isInteger(m))throw{code:"T2003",stack:new Error().stack,value:m};if(typeof k<"u"&&!Number.isInteger(k))throw{code:"T2004",stack:new Error().stack,value:k};if(typeof m>"u"||typeof k>"u"||m>k)return C;var u=k-m+1;if(u>1e7)throw{code:"D2014",stack:new Error().stack,value:u};C=new Array(u);for(var h=m,g=0;h<=k;h++,g++)C[g]=h;return C.sequence=!0,C}async function ne(m,k,C){var u=await z(m.rhs,k,C);return C.bind(m.lhs.value,u),u}async function X(m,k,C){var u,h=await z(m.condition,k,C);return a.boolean(h)?u=await z(m.then,k,C):typeof m.else<"u"&&(u=await z(m.else,k,C)),u}async function j(m,k,C){for(var u,h=qt(C),g=0;g<m.expressions.length;g++)u=await z(m.expressions[g],k,h);return u}function re(m){var k=new ze.RegexEngine(m.value),C=function(u,h){var g;k.lastIndex=h||0;var _=k.exec(u);if(_!==null){if(g={match:_[0],start:_.index,end:_.index+_[0].length,groups:[]},_.length>1)for(var A=1;A<_.length;A++)g.groups.push(_[A]);g.next=function(){if(!(k.lastIndex>=u.length)){var $=C(u,k.lastIndex);if($&&$.match==="")throw{code:"D1004",stack:new Error().stack,position:m.position,value:m.value.source};return $}}}return g};return C}function ye(m,k,C){var u;return m.value===""?u=k&&k.outerWrapper?k[0]:k:u=C.lookup(m.value),u}async function De(m,k,C){var u,h=k,g=!!k.tupleStream,_=async function($,Z){for(var pe=0,be=0;pe===0&&be<m.terms.length;be++){var We=m.terms[be],_e=$,Be=C;g&&(_e=$["@"],Be=Se(C,$));var qe=await z(We.expression,_e,Be);_e=Z,Be=C,g&&(_e=Z["@"],Be=Se(C,Z));var ct=await z(We.expression,_e,Be),Re=typeof qe,nt=typeof ct;if(Re==="undefined"){pe=nt==="undefined"?0:1;continue}if(nt==="undefined"){pe=-1;continue}if(!(Re==="string"||Re==="number")||!(nt==="string"||nt==="number"))throw{code:"T2008",stack:new Error().stack,position:m.position,value:Re==="string"||Re==="number"?ct:qe};if(Re!==nt)throw{code:"T2007",stack:new Error().stack,position:m.position,value:qe,value2:ct};qe!==ct&&(qe<ct?pe=-1:pe=1,We.descending===!0&&(pe=-pe))}return pe===1},A={environment:C,input:k};return u=await a.sort.apply(A,[h,_]),u}function Fe(m,k,C){var u=async function(h){if(!(typeof h>"u")){var g=C.lookup("clone");if(!de(g))throw{code:"T2013",stack:new Error().stack,position:m.position};var _=await he(g,[h],null,C),A=await z(m.pattern,_,C);if(typeof A<"u"){Array.isArray(A)||(A=[A]);for(var $=0;$<A.length;$++){var Z=A[$];if(Z&&(Z.isPrototypeOf(_)||Z instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:m.position};var pe=await z(m.update,Z,C),be=typeof pe;if(be!=="undefined"){if(be!=="object"||pe===null||Array.isArray(pe))throw{code:"T2011",stack:new Error().stack,position:m.update.position,value:pe};for(var We in pe)Z[We]=pe[We]}if(typeof m.delete<"u"){var _e=await z(m.delete,Z,C);if(typeof _e<"u"){var Be=_e;if(Array.isArray(_e)||(_e=[_e]),!w(_e))throw{code:"T2012",stack:new Error().stack,position:m.delete.position,value:Be};for(var qe=0;qe<_e.length;qe++)typeof Z=="object"&&Z!==null&&delete Z[_e[qe]]}}}}return _}};return le(u,"<(oa):o>")}var ge=f("function($f, $g) { function($x){ $g($f($x)) } }");async function Ie(m,k,C){var u,h=await z(m.lhs,k,C);if(m.rhs.type==="function")u=await $e(m.rhs,k,C,{context:h});else{var g=await z(m.rhs,k,C);if(!de(g))throw{code:"T2006",stack:new Error().stack,position:m.position,value:g};if(de(h)){var _=await z(ge,null,C);u=await he(_,[h,g],null,C)}else u=await he(g,[h],null,C)}return u}async function $e(m,k,C,u){var h,g=await z(m.procedure,k,C);if(typeof g>"u"&&m.procedure.type==="path"&&C.lookup(m.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:m.position,token:m.procedure.steps[0].value};var _=[];typeof u<"u"&&_.push(u.context);for(var A=0;A<m.arguments.length;A++){const Z=await z(m.arguments[A],k,C);if(de(Z)){const pe=async function(...be){return await he(Z,be,null,C)};pe.arity=G(Z),_.push(pe)}else _.push(Z)}var $=m.procedure.type==="path"?m.procedure.steps[0].value:m.procedure.value;try{typeof g=="object"&&(g.token=$,g.position=m.position),h=await he(g,_,k,C)}catch(Z){throw Z.position||(Z.position=m.position),Z.token||(Z.token=$),Z}return h}async function he(m,k,C,u){var h;for(h=await dt(m,k,C,u);ve(h)&&h.thunk===!0;){var g=await z(h.body.procedure,h.input,h.environment);h.body.procedure.type==="variable"&&(g.token=h.body.procedure.value),g.position=h.body.procedure.position;for(var _=[],A=0;A<h.body.arguments.length;A++)_.push(await z(h.body.arguments[A],h.input,h.environment));h=await dt(g,_,C,u)}return h}async function dt(m,k,C,u){var h;try{var g=k;if(m&&(g=ht(m.signature,k,C)),ve(m))h=await xt(m,g);else if(m&&m._jsonata_function===!0){var _={environment:u,input:C};h=m.implementation.apply(_,g),U(h)&&(h=h.next().value),P(h)&&(h=await h)}else if(typeof m=="function")h=m.apply(C,g),P(h)&&(h=await h);else throw{code:"T1006",stack:new Error().stack}}catch(A){throw m&&(typeof A.token>"u"&&typeof m.token<"u"&&(A.token=m.token),A.position=m.position||A.position),A}return h}function Ft(m,k,C){var u={_jsonata_lambda:!0,input:k,environment:C,arguments:m.arguments,signature:m.signature,body:m.body};return m.thunk===!0&&(u.thunk=!0),u.apply=async function(h,g){return await he(u,g,k,h?h.environment:C)},u}async function wt(m,k,C){for(var u,h=[],g=0;g<m.arguments.length;g++){var _=m.arguments[g];_.type==="operator"&&_.value==="?"?h.push(_):h.push(await z(_,k,C))}var A=await z(m.procedure,k,C);if(typeof A>"u"&&m.procedure.type==="path"&&C.lookup(m.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:m.position,token:m.procedure.steps[0].value};if(ve(A))u=Gt(A,h);else if(A&&A._jsonata_function===!0)u=ar(A.implementation,h);else if(typeof A=="function")u=ar(A,h);else throw{code:"T1008",stack:new Error().stack,position:m.position,token:m.procedure.type==="path"?m.procedure.steps[0].value:m.procedure.value};return u}function ht(m,k,C){if(typeof m>"u")return k;var u=m.validate(k,C);return u}async function xt(m,k){var C,u=qt(m.environment);return m.arguments.forEach(function(h,g){u.bind(h.value,k[g])}),typeof m.body=="function"?C=await Cr(m.body,u):C=await z(m.body,m.input,u),C}function Gt(m,k){var C=qt(m.environment),u=[];m.arguments.forEach(function(g,_){var A=k[_];A&&A.type==="operator"&&A.value==="?"?u.push(g):C.bind(g.value,A)});var h={_jsonata_lambda:!0,input:m.input,environment:C,arguments:u,body:m.body};return h}function ar(m,k){var C=Jt(m);C=C.map(function(_){return"$"+_.trim()});var u="function("+C.join(", ")+"){ _ }",h=f(u);h.body=m;var g=Gt(h,k);return g}async function Cr(m,k){var C=Jt(m),u=C.map(function(_){return k.lookup(_.trim())}),h={environment:k},g=m.apply(h,u);return P(g)&&(g=await g),g}function Jt(m){var k=m.toString(),C=/\(([^)]*)\)/.exec(k)[1],u=C.split(",");return u}function le(m,k){var C={_jsonata_function:!0,implementation:m};return typeof k<"u"&&(C.signature=y(k)),C}async function _r(m,k){if(!(typeof m>"u")){var C=this.input;typeof k<"u"&&(C=k,Array.isArray(C)&&!B(C)&&(C=q(C),C.outerWrapper=!0));try{var u=f(m,!1)}catch(g){throw Ht(g),{stack:new Error().stack,code:"D3120",value:g.message,error:g}}try{var h=await z(u,C,this.environment)}catch(g){throw Ht(g),{stack:new Error().stack,code:"D3121",value:g.message,error:g}}return h}}function gr(m){if(!(typeof m>"u"))return JSON.parse(a.string(m))}function qt(m){var k={};const C={bind:function(h,g){k[h]=g},lookup:function(h){var g;return k.hasOwnProperty(h)?g=k[h]:m&&(g=m.lookup(h)),g},timestamp:m?m.timestamp:null,async:m?m.async:!1,isParallelCall:m?m.isParallelCall:!1,global:m?m.global:{ancestry:[null]}};if(m){var u=m.lookup(Symbol.for("jsonata.__createFrame_push"));u&&u(m,C)}return C}O.bind("sum",le(a.sum,"<a<n>:n>")),O.bind("count",le(a.count,"<a:n>")),O.bind("max",le(a.max,"<a<n>:n>")),O.bind("min",le(a.min,"<a<n>:n>")),O.bind("average",le(a.average,"<a<n>:n>")),O.bind("string",le(a.string,"<x-b?:s>")),O.bind("substring",le(a.substring,"<s-nn?:s>")),O.bind("substringBefore",le(a.substringBefore,"<s-s:s>")),O.bind("substringAfter",le(a.substringAfter,"<s-s:s>")),O.bind("lowercase",le(a.lowercase,"<s-:s>")),O.bind("uppercase",le(a.uppercase,"<s-:s>")),O.bind("length",le(a.length,"<s-:n>")),O.bind("trim",le(a.trim,"<s-:s>")),O.bind("pad",le(a.pad,"<s-ns?:s>")),O.bind("match",le(a.match,"<s-f<s:o>n?:a<o>>")),O.bind("contains",le(a.contains,"<s-(sf):b>")),O.bind("replace",le(a.replace,"<s-(sf)(sf)n?:s>")),O.bind("split",le(a.split,"<s-(sf)n?:a<s>>")),O.bind("join",le(a.join,"<a<s>s?:s>")),O.bind("formatNumber",le(a.formatNumber,"<n-so?:s>")),O.bind("formatBase",le(a.formatBase,"<n-n?:s>")),O.bind("formatInteger",le(o.formatInteger,"<n-s:s>")),O.bind("parseInteger",le(o.parseInteger,"<s-s:n>")),O.bind("number",le(a.number,"<(nsb)-:n>")),O.bind("floor",le(a.floor,"<n-:n>")),O.bind("ceil",le(a.ceil,"<n-:n>")),O.bind("round",le(a.round,"<n-n?:n>")),O.bind("abs",le(a.abs,"<n-:n>")),O.bind("sqrt",le(a.sqrt,"<n-:n>")),O.bind("power",le(a.power,"<n-n:n>")),O.bind("random",le(a.random,"<:n>")),O.bind("boolean",le(a.boolean,"<x-:b>")),O.bind("not",le(a.not,"<x-:b>")),O.bind("map",le(a.map,"<af>")),O.bind("zip",le(a.zip,"<a+>")),O.bind("filter",le(a.filter,"<af>")),O.bind("single",le(a.single,"<af?>")),O.bind("reduce",le(a.foldLeft,"<afj?:j>")),O.bind("sift",le(a.sift,"<o-f?:o>")),O.bind("keys",le(a.keys,"<x-:a<s>>")),O.bind("lookup",le(a.lookup,"<x-s:x>")),O.bind("append",le(a.append,"<xx:a>")),O.bind("exists",le(a.exists,"<x:b>")),O.bind("spread",le(a.spread,"<x-:a<o>>")),O.bind("merge",le(a.merge,"<a<o>:o>")),O.bind("reverse",le(a.reverse,"<a:a>")),O.bind("each",le(a.each,"<o-f:a>")),O.bind("error",le(a.error,"<s?:x>")),O.bind("assert",le(a.assert,"<bs?:x>")),O.bind("type",le(a.type,"<x:s>")),O.bind("sort",le(a.sort,"<af?:a>")),O.bind("shuffle",le(a.shuffle,"<a:a>")),O.bind("distinct",le(a.distinct,"<x:x>")),O.bind("base64encode",le(a.base64encode,"<s-:s>")),O.bind("base64decode",le(a.base64decode,"<s-:s>")),O.bind("encodeUrlComponent",le(a.encodeUrlComponent,"<s-:s>")),O.bind("encodeUrl",le(a.encodeUrl,"<s-:s>")),O.bind("decodeUrlComponent",le(a.decodeUrlComponent,"<s-:s>")),O.bind("decodeUrl",le(a.decodeUrl,"<s-:s>")),O.bind("eval",le(_r,"<sx?:x>")),O.bind("toMillis",le(o.toMillis,"<s-s?:n>")),O.bind("fromMillis",le(o.fromMillis,"<n-s?s?:s>")),O.bind("clone",le(gr,"<(oa)-:o>"));var at={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Ht(m){var k=at[m.code];if(typeof k<"u"){var C=k.replace(/\{\{\{([^}]+)}}}/g,function(){return m[arguments[1]]});C=C.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(m[arguments[1]])}),m.message=C}}function ze(m,k){var C,u;try{C=f(m,k&&k.recover),u=C.errors,delete C.errors}catch(_){throw Ht(_),_}var h=qt(O),g=new Date;return h.bind("now",le(function(_,A){return o.fromMillis(g.getTime(),_,A)},"<s?s?:s>")),h.bind("millis",le(function(){return g.getTime()},"<:n>")),k&&k.RegexEngine?ze.RegexEngine=k.RegexEngine:ze.RegexEngine=RegExp,{evaluate:async function(_,A,$){if(typeof u<"u"){var Z={code:"S0500",position:0};throw Ht(Z),Z}if(typeof A<"u"){var pe;pe=qt(h);for(var be in A)pe.bind(be,A[be])}else pe=h;pe.bind("$",_),g=new Date,pe.timestamp=g,Array.isArray(_)&&!B(_)&&(_=q(_),_.outerWrapper=!0);var We;try{return We=await z(C,_,pe),typeof $=="function"&&$(null,We),We}catch(_e){throw Ht(_e),_e}},assign:function(_,A){h.bind(_,A)},registerFunction:function(_,A,$){var Z=le(A,$);h.bind(_,Z)},ast:function(){return C},errors:function(){return u}}}return ze.parser=f,ze})();n.exports=R},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(r,n,i){var o=r("./signature");const a=(()=>{var c={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,"?:":40,"??":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},y=function(x){var w=0,I=x.length,q=function(ve,U){var P={type:ve,value:U,position:w};return P},B=function(){for(var ve=w,U=0,P,G,F=function(z){if(x.charAt(z)==="/"&&U===0){for(var J=0;x.charAt(z-(J+1))==="\\";)J++;if(J%2===0)return!0}return!1};w<I;){var O=x.charAt(w);if(F(w)){if(P=x.substring(ve,w),P==="")throw{code:"S0301",stack:new Error().stack,position:w};for(w++,O=x.charAt(w),ve=w;O==="i"||O==="m";)w++,O=x.charAt(w);return G=x.substring(ve,w)+"g",new RegExp(P,G)}(O==="("||O==="["||O==="{")&&x.charAt(w-1)!=="\\"&&U++,(O===")"||O==="]"||O==="}")&&x.charAt(w-1)!=="\\"&&U--,w++}throw{code:"S0302",stack:new Error().stack,position:w}},de=function(ve){if(w>=I)return null;for(var U=x.charAt(w);w<I&&` 	
\r\v`.indexOf(U)>-1;)w++,U=x.charAt(w);if(U==="/"&&x.charAt(w+1)==="*"){var P=w;for(w+=2,U=x.charAt(w);!(U==="*"&&x.charAt(w+1)==="/");)if(U=x.charAt(++w),w>=I)throw{code:"S0106",stack:new Error().stack,position:P};return w+=2,U=x.charAt(w),de(ve)}if(ve!==!0&&U==="/")return w++,q("regex",B());if(U==="."&&x.charAt(w+1)===".")return w+=2,q("operator","..");if(U===":"&&x.charAt(w+1)==="=")return w+=2,q("operator",":=");if(U==="!"&&x.charAt(w+1)==="=")return w+=2,q("operator","!=");if(U===">"&&x.charAt(w+1)==="=")return w+=2,q("operator",">=");if(U==="<"&&x.charAt(w+1)==="=")return w+=2,q("operator","<=");if(U==="*"&&x.charAt(w+1)==="*")return w+=2,q("operator","**");if(U==="~"&&x.charAt(w+1)===">")return w+=2,q("operator","~>");if(U==="?"&&x.charAt(w+1)===":")return w+=2,q("operator","?:");if(U==="?"&&x.charAt(w+1)==="?")return w+=2,q("operator","??");if(Object.prototype.hasOwnProperty.call(c,U))return w++,q("operator",U);if(U==='"'||U==="'"){var G=U;w++;for(var F="";w<I;){if(U=x.charAt(w),U==="\\")if(w++,U=x.charAt(w),Object.prototype.hasOwnProperty.call(f,U))F+=f[U];else if(U==="u"){var O=x.substr(w+1,4);if(/^[0-9a-fA-F]+$/.test(O)){var z=parseInt(O,16);F+=String.fromCharCode(z),w+=4}else throw{code:"S0104",stack:new Error().stack,position:w}}else throw{code:"S0103",stack:new Error().stack,position:w,token:U};else{if(U===G)return w++,q("string",F);F+=U}w++}throw{code:"S0101",stack:new Error().stack,position:w}}var J=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,Se=J.exec(x.substring(w));if(Se!==null){var Ee=parseFloat(Se[0]);if(!isNaN(Ee)&&isFinite(Ee))return w+=Se[0].length,q("number",Ee);throw{code:"S0102",stack:new Error().stack,position:w,token:Se[0]}}var se;if(U==="`"){w++;var M=x.indexOf("`",w);if(M!==-1)return se=x.substring(w,M),w=M+1,q("name",se);throw w=I,{code:"S0105",stack:new Error().stack,position:w}}for(var ie=w,fe;;)if(fe=x.charAt(ie),ie===I||` 	
\r\v`.indexOf(fe)>-1||Object.prototype.hasOwnProperty.call(c,fe)){if(x.charAt(w)==="$")return se=x.substring(w+1,ie),w=ie,q("variable",se);switch(se=x.substring(w,ie),w=ie,se){case"or":case"in":case"and":return q("operator",se);case"true":return q("value",!0);case"false":return q("value",!1);case"null":return q("value",null);default:return w===I&&se===""?null:q("name",se)}}else ie++};return de},R=function(x,w){var I,q,B={},de=[],ve=function(){var b=[];I.id!=="(end)"&&b.push({type:I.type,value:I.value,position:I.position});for(var S=q();S!==null;)b.push(S),S=q();return b},U={nud:function(){var b={code:"S0211",token:this.value,position:this.position};if(w)return b.remaining=ve(),b.type="error",de.push(b),b;throw b.stack=new Error().stack,b}},P=function(b,S){var ue=B[b];return S=S||0,ue?S>=ue.lbp&&(ue.lbp=S):(ue=Object.create(U),ue.id=ue.value=b,ue.lbp=S,B[b]=ue),ue},G=function(b){if(w){b.remaining=ve(),de.push(b);var S=B["(error)"];return I=Object.create(S),I.error=b,I.type="(error)",I}else throw b.stack=new Error().stack,b},F=function(b,S){if(b&&I.id!==b){var ue;I.id==="(end)"?ue="S0203":ue="S0202";var Ce={code:ue,position:I.position,token:I.value,value:b};return G(Ce)}var Je=q(S);if(Je===null)return I=B["(end)"],I.position=x.length,I;var Me=Je.value,T=Je.type,N;switch(T){case"name":case"variable":N=B["(name)"];break;case"operator":if(N=B[Me],!N)return G({code:"S0204",stack:new Error().stack,position:Je.position,token:Me});break;case"string":case"number":case"value":N=B["(literal)"];break;case"regex":T="regex",N=B["(regex)"];break;default:return G({code:"S0205",stack:new Error().stack,position:Je.position,token:Me})}return I=Object.create(N),I.value=Me,I.type=T,I.position=Je.position,I},O=function(b){var S,ue=I;for(F(null,!0),S=ue.nud();b<I.lbp;)ue=I,F(),S=ue.led(S);return S},z=function(b){var S=P(b,0);S.nud=function(){return this}},J=function(b,S,ue){var Ce=S||c[b],Je=P(b,Ce);return Je.led=ue||function(Me){return this.lhs=Me,this.rhs=O(Ce),this.type="binary",this},Je},Se=function(b,S,ue){var Ce=P(b,S);return Ce.led=ue,Ce},Ee=function(b,S){var ue=P(b);return ue.nud=S||function(){return this.expression=O(70),this.type="unary",this},ue};z("(end)"),z("(name)"),z("(literal)"),z("(regex)"),P(":"),P(";"),P(","),P(")"),P("]"),P("}"),P(".."),J("."),J("+"),J("-"),J("*"),J("/"),J("%"),J("="),J("<"),J(">"),J("!="),J("<="),J(">="),J("&"),J("and"),J("or"),J("in"),z("and"),z("or"),z("in"),Ee("-"),J("~>"),J("??",c["??"],function(b){return this.type="condition",this.condition={type:"function",value:"(",procedure:{type:"variable",value:"exists"},arguments:[b]},this.then=b,this.else=O(0),this}),Se("(error)",10,function(b){return this.lhs=b,this.error=I.error,this.remaining=ve(),this.type="error",this}),Ee("*",function(){return this.type="wildcard",this}),Ee("**",function(){return this.type="descendant",this}),Ee("%",function(){return this.type="parent",this}),J("(",c["("],function(b){if(this.procedure=b,this.type="function",this.arguments=[],I.id!==")")for(;I.type==="operator"&&I.id==="?"?(this.type="partial",this.arguments.push(I),F("?")):this.arguments.push(O(0)),I.id===",";)F(",");if(F(")",!0),b.type==="name"&&(b.value==="function"||b.value==="λ")){if(this.arguments.forEach(function(Me,T){if(Me.type!=="variable")return G({code:"S0208",stack:new Error().stack,position:Me.position,token:Me.value,value:T+1})}),this.type="lambda",I.id==="<"){for(var S=I.position,ue=1,Ce="<";ue>0&&I.id!=="{"&&I.id!=="(end)";){var Je=F();Je.id===">"?ue--:Je.id==="<"&&ue++,Ce+=Je.value}F(">");try{this.signature=o(Ce)}catch(Me){return Me.position=S+Me.offset,G(Me)}}F("{"),this.body=O(0),F("}")}return this}),Ee("(",function(){for(var b=[];I.id!==")"&&(b.push(O(0)),I.id===";");)F(";");return F(")",!0),this.type="block",this.expressions=b,this}),Ee("[",function(){var b=[];if(I.id!=="]")for(;;){var S=O(0);if(I.id===".."){var ue={type:"binary",value:"..",position:I.position,lhs:S};F(".."),ue.rhs=O(0),S=ue}if(b.push(S),I.id!==",")break;F(",")}return F("]",!0),this.expressions=b,this.type="unary",this}),J("[",c["["],function(b){if(I.id==="]"){for(var S=b;S&&S.type==="binary"&&S.value==="[";)S=S.lhs;return S.keepArray=!0,F("]"),b}else return this.lhs=b,this.rhs=O(c["]"]),this.type="binary",F("]",!0),this}),J("^",c["^"],function(b){F("(");for(var S=[];;){var ue={descending:!1};if(I.id==="<"?F("<"):I.id===">"&&(ue.descending=!0,F(">")),ue.expression=O(0),S.push(ue),I.id!==",")break;F(",")}return F(")"),this.lhs=b,this.rhs=S,this.type="binary",this});var se=function(b){var S=[];if(I.id!=="}")for(;;){var ue=O(0);F(":");var Ce=O(0);if(S.push([ue,Ce]),I.id!==",")break;F(",")}return F("}",!0),typeof b>"u"?(this.lhs=S,this.type="unary"):(this.lhs=b,this.rhs=S,this.type="binary"),this};Ee("{",se),J("{",c["{"],se),Se(":=",c[":="],function(b){return b.type!=="variable"?G({code:"S0212",stack:new Error().stack,position:b.position,token:b.value}):(this.lhs=b,this.rhs=O(c[":="]-1),this.type="binary",this)}),J("@",c["@"],function(b){return this.lhs=b,this.rhs=O(c["@"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),J("#",c["#"],function(b){return this.lhs=b,this.rhs=O(c["#"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),J("?",c["?"],function(b){return this.type="condition",this.condition=b,this.then=O(0),I.id===":"&&(F(":"),this.else=O(0)),this}),J("?:",c["?:"],function(b){return this.type="condition",this.condition=b,this.then=b,this.else=O(0),this}),Ee("|",function(){return this.type="transform",this.pattern=O(0),F("|"),this.update=O(0),I.id===","&&(F(","),this.delete=O(0)),F("|"),this});var M=function(b){var S;if(b.type==="function"&&!b.predicate){var ue={type:"lambda",thunk:!0,arguments:[],position:b.position};ue.body=b,S=ue}else if(b.type==="condition")b.then=M(b.then),typeof b.else<"u"&&(b.else=M(b.else)),S=b;else if(b.type==="block"){var Ce=b.expressions.length;Ce>0&&(b.expressions[Ce-1]=M(b.expressions[Ce-1])),S=b}else S=b;return S},ie=0,fe=0,ke=[],ae=function(b,S){switch(b.type){case"name":case"wildcard":S.level--,S.level===0&&(typeof b.ancestor>"u"||(ke[S.index].slot.label=b.ancestor.label),b.ancestor=S,b.tuple=!0);break;case"parent":S.level++;break;case"block":b.expressions.length>0&&(b.tuple=!0,S=ae(b.expressions[b.expressions.length-1],S));break;case"path":b.tuple=!0;var ue=b.steps.length-1;for(S=ae(b.steps[ue--],S);S.level>0&&ue>=0;)S=ae(b.steps[ue--],S);break;default:throw{code:"S0217",token:b.type,position:b.position}}return S},ee=function(b,S){if(typeof S.seekingParent<"u"||S.type==="parent"){var ue=typeof S.seekingParent<"u"?S.seekingParent:[];S.type==="parent"&&ue.push(S.slot),typeof b.seekingParent>"u"?b.seekingParent=ue:Array.prototype.push.apply(b.seekingParent,ue)}},oe=function(b){var S=b.steps.length-1,ue=b.steps[S],Ce=typeof ue.seekingParent<"u"?ue.seekingParent:[];ue.type==="parent"&&Ce.push(ue.slot);for(var Je=0;Je<Ce.length;Je++){var Me=Ce[Je];for(S=b.steps.length-2;Me.level>0;){if(S<0){typeof b.seekingParent>"u"?b.seekingParent=[Me]:b.seekingParent.push(Me);break}for(var T=b.steps[S--];S>=0&&T.focus&&b.steps[S].focus;)T=b.steps[S--];Me=ae(T,Me)}}},V=function(b){var S;switch(b.type){case"binary":switch(b.value){case".":var ue=V(b.lhs);ue.type==="path"?S=ue:S={type:"path",steps:[ue]},ue.type==="parent"&&(S.seekingParent=[ue.slot]);var Ce=V(b.rhs);Ce.type==="function"&&Ce.procedure.type==="path"&&Ce.procedure.steps.length===1&&Ce.procedure.steps[0].type==="name"&&S.steps[S.steps.length-1].type==="function"&&(S.steps[S.steps.length-1].nextFunction=Ce.procedure.steps[0].value),Ce.type==="path"?Array.prototype.push.apply(S.steps,Ce.steps):(typeof Ce.predicate<"u"&&(Ce.stages=Ce.predicate,delete Ce.predicate),S.steps.push(Ce)),S.steps.filter(function(re){if(re.type==="number"||re.type==="value")throw{code:"S0213",stack:new Error().stack,position:re.position,value:re.value};return re.type==="string"}).forEach(function(re){re.type="name"}),S.steps.filter(function(re){return re.keepArray===!0}).length>0&&(S.keepSingletonArray=!0);var Je=S.steps[0];Je.type==="unary"&&Je.value==="["&&(Je.consarray=!0);var Me=S.steps[S.steps.length-1];Me.type==="unary"&&Me.value==="["&&(Me.consarray=!0),oe(S);break;case"[":S=V(b.lhs);var T=S,N="predicate";if(S.type==="path"&&(T=S.steps[S.steps.length-1],N="stages"),typeof T.group<"u")throw{code:"S0209",stack:new Error().stack,position:b.position};typeof T[N]>"u"&&(T[N]=[]);var L=V(b.rhs);typeof L.seekingParent<"u"&&(L.seekingParent.forEach(re=>{re.level===1?ae(T,re):re.level--}),ee(T,L)),T[N].push({type:"filter",expr:L,position:b.position});break;case"{":if(S=V(b.lhs),typeof S.group<"u")throw{code:"S0210",stack:new Error().stack,position:b.position};S.group={lhs:b.rhs.map(function(re){return[V(re[0]),V(re[1])]}),position:b.position};break;case"^":S=V(b.lhs),S.type!=="path"&&(S={type:"path",steps:[S]});var H={type:"sort",position:b.position};H.terms=b.rhs.map(function(re){var ye=V(re.expression);return ee(H,ye),{descending:re.descending,expression:ye}}),S.steps.push(H),oe(S);break;case":=":S={type:"bind",value:b.value,position:b.position},S.lhs=V(b.lhs),S.rhs=V(b.rhs),ee(S,S.rhs);break;case"@":if(S=V(b.lhs),T=S,S.type==="path"&&(T=S.steps[S.steps.length-1]),typeof T.stages<"u"||typeof T.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:b.position};if(T.type==="sort")throw{code:"S0216",stack:new Error().stack,position:b.position};b.keepArray&&(T.keepArray=!0),T.focus=b.rhs.value,T.tuple=!0;break;case"#":S=V(b.lhs),T=S,S.type==="path"?T=S.steps[S.steps.length-1]:(S={type:"path",steps:[S]},typeof T.predicate<"u"&&(T.stages=T.predicate,delete T.predicate)),typeof T.stages>"u"?T.index=b.rhs.value:T.stages.push({type:"index",value:b.rhs.value,position:b.position}),T.tuple=!0;break;case"~>":S={type:"apply",value:b.value,position:b.position},S.lhs=V(b.lhs),S.rhs=V(b.rhs),S.keepArray=S.lhs.keepArray||S.rhs.keepArray;break;default:S={type:b.type,value:b.value,position:b.position},S.lhs=V(b.lhs),S.rhs=V(b.rhs),ee(S,S.lhs),ee(S,S.rhs)}break;case"unary":S={type:b.type,value:b.value,position:b.position},b.value==="["?S.expressions=b.expressions.map(function(re){var ye=V(re);return ee(S,ye),ye}):b.value==="{"?S.lhs=b.lhs.map(function(re){var ye=V(re[0]);ee(S,ye);var De=V(re[1]);return ee(S,De),[ye,De]}):(S.expression=V(b.expression),b.value==="-"&&S.expression.type==="number"?(S=S.expression,S.value=-S.value):ee(S,S.expression));break;case"function":case"partial":S={type:b.type,name:b.name,value:b.value,position:b.position},S.arguments=b.arguments.map(function(re){var ye=V(re);return ee(S,ye),ye}),S.procedure=V(b.procedure);break;case"lambda":S={type:b.type,arguments:b.arguments,signature:b.signature,position:b.position};var ne=V(b.body);S.body=M(ne);break;case"condition":S={type:b.type,position:b.position},S.condition=V(b.condition),ee(S,S.condition),S.then=V(b.then),ee(S,S.then),typeof b.else<"u"&&(S.else=V(b.else),ee(S,S.else));break;case"transform":S={type:b.type,position:b.position},S.pattern=V(b.pattern),S.update=V(b.update),typeof b.delete<"u"&&(S.delete=V(b.delete));break;case"block":S={type:b.type,position:b.position},S.expressions=b.expressions.map(function(re){var ye=V(re);return ee(S,ye),(ye.consarray||ye.type==="path"&&ye.steps[0].consarray)&&(S.consarray=!0),ye});break;case"name":S={type:"path",steps:[b]},b.keepArray&&(S.keepSingletonArray=!0);break;case"parent":S={type:"parent",slot:{label:"!"+ie++,level:1,index:fe++}},ke.push(S);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":S=b;break;case"operator":if(b.value==="and"||b.value==="or"||b.value==="in")b.type="name",S=V(b);else if(b.value==="?")S=b;else throw{code:"S0201",stack:new Error().stack,position:b.position,token:b.value};break;case"error":S=b,b.lhs&&(S=V(b.lhs));break;default:var X="S0206";b.id==="(end)"&&(X="S0207");var j={code:X,position:b.position,token:b.value};if(w)return de.push(j),{type:"error",error:j};throw j.stack=new Error().stack,j}return b.keepArray&&(S.keepArray=!0),S};q=y(x),F();var xe=O(0);if(I.id!=="(end)"){var Pe={code:"S0201",position:I.position,token:I.value};G(Pe)}if(xe=V(xe),xe.type==="parent"||typeof xe.seekingParent<"u")throw{code:"S0217",token:xe.type,position:xe.position};return de.length>0&&(xe.errors=de),xe};return R})();n.exports=a},{"./signature":5}],5:[function(r,n,i){var o=r("./utils");const a=(()=>{var c={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function f(y){for(var R=1,x=[],w={},I=w;R<y.length;){var q=y.charAt(R);if(q===":")break;var B=function(){x.push(w),I=w,w={}},de=function(J,Se,Ee,se){for(var M=1,ie=Se;ie<J.length;)if(ie++,q=J.charAt(ie),q===se){if(M--,M===0)break}else q===Ee&&M++;return ie};switch(q){case"s":case"n":case"b":case"l":case"o":w.regex="["+q+"m]",w.type=q,B();break;case"a":w.regex="[asnblfom]",w.type=q,w.array=!0,B();break;case"f":w.regex="f",w.type=q,B();break;case"j":w.regex="[asnblom]",w.type=q,B();break;case"x":w.regex="[asnblfom]",w.type=q,B();break;case"-":I.context=!0,I.contextRegex=new RegExp(I.regex),I.regex+="?";break;case"?":case"+":I.regex+=q;break;case"(":var ve=de(y,R,"(",")"),U=y.substring(R+1,ve);if(U.indexOf("<")===-1)w.regex="["+U+"m]";else throw{code:"S0402",stack:new Error().stack,value:U,offset:R};w.type="("+U+")",R=ve,B();break;case"<":if(I.type==="a"||I.type==="f"){var P=de(y,R,"<",">");I.subtype=y.substring(R+1,P),R=P}else throw{code:"S0401",stack:new Error().stack,value:I.type,offset:R};break}R++}var G="^"+x.map(function(J){return"("+J.regex+")"}).join("")+"$",F=new RegExp(G),O=function(J){var Se;if(o.isFunction(J))Se="f";else{var Ee=typeof J;switch(Ee){case"string":Se="s";break;case"number":Se="n";break;case"boolean":Se="b";break;case"object":J===null?Se="l":Array.isArray(J)?Se="a":Se="o";break;case"undefined":default:Se="m"}}return Se},z=function(J,Se){for(var Ee="^",se=0,M=0;M<x.length;M++){Ee+=x[M].regex;var ie=Se.match(Ee);if(ie===null)throw{code:"T0410",stack:new Error().stack,value:J[se],index:se+1};se=ie[0].length}throw{code:"T0410",stack:new Error().stack,value:J[se],index:se+1}};return{definition:y,validate:function(J,Se){var Ee="";J.forEach(function(fe){Ee+=O(fe)});var se=F.exec(Ee);if(se){var M=[],ie=0;return x.forEach(function(fe,ke){var ae=J[ie],ee=se[ke+1];if(ee==="")if(fe.context&&fe.contextRegex){var oe=O(Se);if(fe.contextRegex.test(oe))M.push(Se);else throw{code:"T0411",stack:new Error().stack,value:Se,index:ie+1}}else M.push(ae),ie++;else ee.split("").forEach(function(V){if(fe.type==="a"){if(V==="m")ae=void 0;else{ae=J[ie];var xe=!0;if(typeof fe.subtype<"u"){if(V!=="a"&&ee!==fe.subtype)xe=!1;else if(V==="a"&&ae.length>0){var Pe=O(ae[0]);if(Pe!==fe.subtype.charAt(0))xe=!1;else{var b=ae.filter(function(S){return O(S)!==Pe});xe=b.length===0}}}if(!xe)throw{code:"T0412",stack:new Error().stack,value:ae,index:ie+1,type:c[fe.subtype]};V!=="a"&&(ae=[ae])}M.push(ae),ie++}else M.push(ae),ie++})}),M}z(J,Ee)}}}return f})();n.exports=a},{"./utils":6}],6:[function(r,n,i){const o=(()=>{function a(P){var G=!1;if(typeof P=="number"&&(G=!isNaN(P),G&&!isFinite(P)))throw{code:"D1001",value:P,stack:new Error().stack};return G}function c(P){var G=!1;return Array.isArray(P)&&(G=P.filter(function(F){return typeof F!="string"}).length===0),G}function f(P){var G=!1;return Array.isArray(P)&&(G=P.filter(function(F){return!a(F)}).length===0),G}function y(){var P=[];return P.sequence=!0,arguments.length===1&&P.push(arguments[0]),P}function R(P){return P.sequence===!0&&Array.isArray(P)}function x(P){return P&&(P._jsonata_function===!0||P._jsonata_lambda===!0)||typeof P=="function"}function w(P){var G=typeof P.arity=="number"?P.arity:typeof P.implementation=="function"?P.implementation.length:typeof P.length=="number"?P.length:P.arguments.length;return G}function I(P){return P&&P._jsonata_lambda===!0}var q=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function B(P){return typeof P=="object"&&P!==null&&q in P&&"next"in P&&typeof P.next=="function"}function de(P,G){if(P===G)return!0;if(typeof P=="object"&&typeof G=="object"&&P!==null&&G!==null){if(Array.isArray(P)&&Array.isArray(G)){if(P.length!==G.length)return!1;for(var F=0;F<P.length;F++)if(!de(P[F],G[F]))return!1;return!0}var O=Object.getOwnPropertyNames(P),z=Object.getOwnPropertyNames(G);if(O.length!==z.length)return!1;for(O=O.sort(),z=z.sort(),F=0;F<O.length;F++)if(O[F]!==z[F])return!1;for(F=0;F<O.length;F++){var J=O[F];if(!de(P[J],G[J]))return!1}return!0}return!1}function ve(P){return typeof P=="object"&&P!==null&&"then"in P&&typeof P.then=="function"}function U(P){var G=[];for(let F of P)G.push(F);return G}return{isNumeric:a,isArrayOfStrings:c,isArrayOfNumbers:f,createSequence:y,isSequence:R,isFunction:x,isLambda:I,isIterable:B,getFunctionArity:w,isDeepEqual:de,stringToArray:U,isPromise:ve}})();n.exports=o},{}]},{},[3])(3)})})(Mi)),Mi.exports}var ju=Uu();const so=na(ju);var or={exports:{}};const ri=_o(Eo),Wu="17.2.3",Bu={version:Wu};var Zs;function Vu(){if(Zs)return or.exports;Zs=1;var t={};const e=ri,r=ri,n=ri,i=ri,a=Bu.version,c=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function f(){return c[Math.floor(Math.random()*c.length)]}function y(M){return typeof M=="string"?!["false","0","no","off",""].includes(M.toLowerCase()):!!M}function R(){return process.stdout.isTTY}function x(M){return R()?`\x1B[2m${M}\x1B[0m`:M}const w=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function I(M){const ie={};let fe=M.toString();fe=fe.replace(/\r\n?/mg,`
`);let ke;for(;(ke=w.exec(fe))!=null;){const ae=ke[1];let ee=ke[2]||"";ee=ee.trim();const oe=ee[0];ee=ee.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),oe==='"'&&(ee=ee.replace(/\\n/g,`
`),ee=ee.replace(/\\r/g,"\r")),ie[ae]=ee}return ie}function q(M){M=M||{};const ie=G(M);M.path=ie;const fe=se.configDotenv(M);if(!fe.parsed){const oe=new Error(`MISSING_DATA: Cannot parse ${ie} for an unknown reason`);throw oe.code="MISSING_DATA",oe}const ke=U(M).split(","),ae=ke.length;let ee;for(let oe=0;oe<ae;oe++)try{const V=ke[oe].trim(),xe=P(fe,V);ee=se.decrypt(xe.ciphertext,xe.key);break}catch(V){if(oe+1>=ae)throw V}return se.parse(ee)}function B(M){console.error(`[dotenv@${a}][WARN] ${M}`)}function de(M){console.log(`[dotenv@${a}][DEBUG] ${M}`)}function ve(M){console.log(`[dotenv@${a}] ${M}`)}function U(M){return M&&M.DOTENV_KEY&&M.DOTENV_KEY.length>0?M.DOTENV_KEY:t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:""}function P(M,ie){let fe;try{fe=new URL(ie)}catch(V){if(V.code==="ERR_INVALID_URL"){const xe=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw xe.code="INVALID_DOTENV_KEY",xe}throw V}const ke=fe.password;if(!ke){const V=new Error("INVALID_DOTENV_KEY: Missing key part");throw V.code="INVALID_DOTENV_KEY",V}const ae=fe.searchParams.get("environment");if(!ae){const V=new Error("INVALID_DOTENV_KEY: Missing environment part");throw V.code="INVALID_DOTENV_KEY",V}const ee=`DOTENV_VAULT_${ae.toUpperCase()}`,oe=M.parsed[ee];if(!oe){const V=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${ee} in your .env.vault file.`);throw V.code="NOT_FOUND_DOTENV_ENVIRONMENT",V}return{ciphertext:oe,key:ke}}function G(M){let ie=null;if(M&&M.path&&M.path.length>0)if(Array.isArray(M.path))for(const fe of M.path)e.existsSync(fe)&&(ie=fe.endsWith(".vault")?fe:`${fe}.vault`);else ie=M.path.endsWith(".vault")?M.path:`${M.path}.vault`;else ie=r.resolve(process.cwd(),".env.vault");return e.existsSync(ie)?ie:null}function F(M){return M[0]==="~"?r.join(n.homedir(),M.slice(1)):M}function O(M){const ie=y(t.DOTENV_CONFIG_DEBUG||M&&M.debug),fe=y(t.DOTENV_CONFIG_QUIET||M&&M.quiet);(ie||!fe)&&ve("Loading env from encrypted .env.vault");const ke=se._parseVault(M);let ae=t;return M&&M.processEnv!=null&&(ae=M.processEnv),se.populate(ae,ke,M),{parsed:ke}}function z(M){const ie=r.resolve(process.cwd(),".env");let fe="utf8",ke=t;M&&M.processEnv!=null&&(ke=M.processEnv);let ae=y(ke.DOTENV_CONFIG_DEBUG||M&&M.debug),ee=y(ke.DOTENV_CONFIG_QUIET||M&&M.quiet);M&&M.encoding?fe=M.encoding:ae&&de("No encoding is specified. UTF-8 is used by default");let oe=[ie];if(M&&M.path)if(!Array.isArray(M.path))oe=[F(M.path)];else{oe=[];for(const b of M.path)oe.push(F(b))}let V;const xe={};for(const b of oe)try{const S=se.parse(e.readFileSync(b,{encoding:fe}));se.populate(xe,S,M)}catch(S){ae&&de(`Failed to load ${b} ${S.message}`),V=S}const Pe=se.populate(ke,xe,M);if(ae=y(ke.DOTENV_CONFIG_DEBUG||ae),ee=y(ke.DOTENV_CONFIG_QUIET||ee),ae||!ee){const b=Object.keys(Pe).length,S=[];for(const ue of oe)try{const Ce=r.relative(process.cwd(),ue);S.push(Ce)}catch(Ce){ae&&de(`Failed to load ${ue} ${Ce.message}`),V=Ce}ve(`injecting env (${b}) from ${S.join(",")} ${x(`-- tip: ${f()}`)}`)}return V?{parsed:xe,error:V}:{parsed:xe}}function J(M){if(U(M).length===0)return se.configDotenv(M);const ie=G(M);return ie?se._configVault(M):(B(`You set DOTENV_KEY but you are missing a .env.vault file at ${ie}. Did you forget to build it?`),se.configDotenv(M))}function Se(M,ie){const fe=Buffer.from(ie.slice(-64),"hex");let ke=Buffer.from(M,"base64");const ae=ke.subarray(0,12),ee=ke.subarray(-16);ke=ke.subarray(12,-16);try{const oe=i.createDecipheriv("aes-256-gcm",fe,ae);return oe.setAuthTag(ee),`${oe.update(ke)}${oe.final()}`}catch(oe){const V=oe instanceof RangeError,xe=oe.message==="Invalid key length",Pe=oe.message==="Unsupported state or unable to authenticate data";if(V||xe){const b=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw b.code="INVALID_DOTENV_KEY",b}else if(Pe){const b=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw b.code="DECRYPTION_FAILED",b}else throw oe}}function Ee(M,ie,fe={}){const ke=!!(fe&&fe.debug),ae=!!(fe&&fe.override),ee={};if(typeof ie!="object"){const oe=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw oe.code="OBJECT_REQUIRED",oe}for(const oe of Object.keys(ie))Object.prototype.hasOwnProperty.call(M,oe)?(ae===!0&&(M[oe]=ie[oe],ee[oe]=ie[oe]),ke&&de(ae===!0?`"${oe}" is already defined and WAS overwritten`:`"${oe}" is already defined and was NOT overwritten`)):(M[oe]=ie[oe],ee[oe]=ie[oe]);return ee}const se={configDotenv:z,_configVault:O,_parseVault:q,config:J,decrypt:Se,parse:I,populate:Ee};return or.exports.configDotenv=se.configDotenv,or.exports._configVault=se._configVault,or.exports._parseVault=se._parseVault,or.exports.config=se.config,or.exports.decrypt=se.decrypt,or.exports.parse=se.parse,or.exports.populate=se.populate,or.exports=se,or.exports}var Gu=Vu();const vi=async t=>{const e=await Ot.getWorkspace();if(!e)throw new Error("No workspace available");const r=await e.getResource(t);if(!r)throw new Error("Invalid URL: "+t);return await r.getContents({uri:!0})},ao=t=>t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:"),_i={},rn=async(t,e,r)=>{const n=await so(`[**[${e}!='']]`).evaluate(t);for(const i of n){const o=i[e];if(ao(o))continue;let a;if(e==="src"&&r)try{a=(await r.resolveWorkspaceModule(o)).blobUrl}catch{a=await vi(o)}else a=await vi(o);_i[a]=i[e],i[e]=a}},Pn=t=>_i[t],$n=async(t,e)=>{const r=await so(`[**[${e}!='']]`).evaluate(t);for(const n of r){const i=n[e];!i||!i.startsWith("blob:")||(n[e]=_i[i])}},oo=t=>{Qe.registerContribution("catalog.root",{label:t.label,icon:t.icon,contributionId:t.contributionId});const e=t.contributionId??t.label;t.items?.forEach(r=>{Qe.registerContribution(e,{label:r.label,icon:r.icon,contributionId:r.contributionId});const i=import.meta.resolve("/.");r.items.forEach(o=>{const a={label:o.label,icon:o.icon,state:{...o.state}};a.state?.url&&(a.state.url=a.state.url.replace("${baseURL}/",i)),Qe.registerContribution(r.contributionId,a)})})},Yi=t=>{Object.entries(t).forEach(([e,r])=>{const n=/\${([a-zA-Z0-9_]+)}/g;t[e]=r.replace(n,(i,o)=>{const a=t[o];return a!==void 0?a:i})})},lo=async(...t)=>{const e=await Ot.getWorkspace(),r={};for(const n of t){const i=await e?.getResource(n);if(!i)continue;const o=await i.getContents(),a=Gu.parse(o||"");Yi(a),Object.assign(r,a)}return Yi(r),r},Hu=Object.freeze(Object.defineProperty({__proto__:null,_blobsLookup:_i,getOriginalUri:Pn,isAbsoluteResource:ao,loadEnvs:lo,registerCatalog:oo,replaceUris:rn,replaceVars:Yi,revertBlobUris:$n,toBlobUri:vi},Symbol.toStringTag,{value:"Module"}));Oo.resolveUrl=t=>vi(t);Vr.registerEditorInputHandler({canHandle:t=>t instanceof hr&&t.getName().endsWith(".geospace"),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return e.widgetFactory=r=>W`
            <gs-map id="${r}" .input="${e}"></gs-map>`,e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ku=sa(class extends aa{constructor(){super(...arguments),this.key=gt}render(t,e){return this.key=t,e}update(t,[e,r]){return e!==this.key&&(oa(t),this.key=e),r}});function an(t,e){return t.layers.find(r=>r.uuid===e)}function on(t,e){return t.layers.findIndex(r=>r.uuid===e)}function Yu(t,e){return t.controls.findIndex(r=>r.uuid===e)}function Ju(t,e){return t.overlays.findIndex(r=>r.uuid===e)}const Zu=t=>new Proxy({},{get:(e,r)=>async(...n)=>{for(const i of t)await i[r](...n)}});var Kt=(t=>(t[t.LOADED=0]="LOADED",t[t.LAYER_ADDED=1]="LAYER_ADDED",t[t.LAYER_DELETED=2]="LAYER_DELETED",t[t.LAYER_UPDATED=3]="LAYER_UPDATED",t[t.FEATURE_SELECTED=4]="FEATURE_SELECTED",t))(Kt||{});const ur=Gr(vl),Qu=`:root,
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
`;function Xu(t){return t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:")}function Qs(t,e){if(t.startsWith("/"))return t.slice(1);const r=e.split("/").filter(o=>o),n=t.split("/").filter(o=>o);if(t.startsWith("./")||t.startsWith("../")||!t.startsWith("/")){const o=r.slice(0,-1);r.length=0,r.push(...o)}for(const o of n)o!=="."&&(o===".."?r.length>0&&r.pop():r.push(o));return r.join("/")}function ep(t){const e=[],r=/import\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,n=/export\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,i=/import\s*\(\s*["']([^"']+)["']\s*\)/g;let o;for(;(o=r.exec(t))!==null;)e.push({fullMatch:o[0],importPath:o[1],isDynamic:!1,startIndex:o.index,endIndex:o.index+o[0].length});for(;(o=n.exec(t))!==null;)e.push({fullMatch:o[0],importPath:o[1],isDynamic:!1,startIndex:o.index,endIndex:o.index+o[0].length});for(;(o=i.exec(t))!==null;)e.push({fullMatch:o[0],importPath:o[1],isDynamic:!0,startIndex:o.index,endIndex:o.index+o[0].length});return e.sort((a,c)=>c.startIndex-a.startIndex)}class tp{constructor(){this.blobUrlCache=new Map,this.moduleCache=new Map,this.resolvingModules=new Set,this.resolvingPromises=new Map}async resolveModuleRecursive(e){if(!await Ot.getWorkspace())throw new Error("Workspace not available");if(this.blobUrlCache.has(e))return this.blobUrlCache.get(e);if(this.resolvingPromises.has(e))return await this.resolvingPromises.get(e);if(this.resolvingModules.has(e))throw new Error(`Circular dependency detected: ${e}`);this.resolvingModules.add(e);const n=this.doResolveModule(e);this.resolvingPromises.set(e,n);try{return await n}finally{this.resolvingPromises.delete(e)}}async doResolveModule(e){const r=await Ot.getWorkspace();if(!r)throw new Error("Workspace not available");try{let n=await r.getResource(e);if(n||(await r.listChildren(!0),n=await r.getResource(e)),!n)throw new Error(`Module not found: ${e}`);let i=await n.getContents();const o=ep(i);for(const f of o){const y=f.importPath;if(!Xu(y))try{const R=Qs(y,e),x=await this.resolveModuleRecursive(R);let w;if(f.isDynamic)w=`import("${x}")`;else{const I=f.fullMatch.search(/["']/);if(I===-1)w=f.fullMatch;else{const q=f.fullMatch[I],B=f.fullMatch.lastIndexOf(q);B!==-1&&B>I?w=f.fullMatch.slice(0,I+1)+x+f.fullMatch.slice(B):w=f.fullMatch}}i=i.slice(0,f.startIndex)+w+i.slice(f.endIndex)}catch{}}const a=new Blob([i],{type:"application/javascript"}),c=URL.createObjectURL(a);return this.blobUrlCache.set(e,c),this.moduleCache.set(e,{code:i,workspacePath:e,blobUrl:c}),c}catch(n){throw n}finally{this.resolvingModules.delete(e)}}async resolveWorkspaceModule(e,r){const n=r?Qs(e,r):e;if(this.moduleCache.has(n))return this.moduleCache.get(n);await this.resolveModuleRecursive(n);const i=this.moduleCache.get(n);if(!i)throw new Error(`Failed to resolve module: ${n}`);return i}clear(){for(const e of this.blobUrlCache.values())e.startsWith("blob:")&&URL.revokeObjectURL(e);this.blobUrlCache.clear(),this.moduleCache.clear(),this.resolvingModules.clear()}}const rp="iframe-map-renderer.html";class np{constructor(e,r){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=r,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(r,n){return async(...i)=>await e.sendMessage(n,{...i})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=rp,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}async getViewExtent(){return(await this.sendMessage("getViewExtent",{}))?.extent||[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(e){this.onSyncCallback&&this.onSyncCallback(e)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,r){try{const{toBlobUri:n}=await st(async()=>{const{toBlobUri:o}=await Promise.resolve().then(()=>Hu);return{toBlobUri:o}},void 0),i=await n(r);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:i},"*")}catch(n){this.iframe.contentWindow.postMessage({id:e,success:!1,error:n instanceof Error?n.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{if(e.source!==this.iframe?.contentWindow)return;const{id:r,result:n,error:i,type:o,event:a}=e.data;if(r!==void 0&&this.pendingMessages.has(r)){const{resolve:c,reject:f}=this.pendingMessages.get(r);if(this.pendingMessages.delete(r),i)f(new Error(i));else{const y=n??Object.fromEntries(Object.entries(e.data).filter(([R])=>!["id","type","event","error"].includes(R)));c(y)}}o==="dirty"?this.onDirtyCallback?.():o==="sync"?this.onSyncCallback?.(a):o==="iframeClicked"?this.onClickCallback?.():o==="resolveAsset"&&this.handleAssetResolution(r,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const r=n=>{n.source===this.iframe?.contentWindow&&n.data.type==="rendererReady"&&(window.removeEventListener("message",r),e())};window.addEventListener("message",r)})}async sendMessage(e,r){if(!this.iframe)throw new Error("Iframe not initialized");const n=++this.messageId;return new Promise((i,o)=>{this.pendingMessages.set(n,{resolve:i,reject:o}),this.iframe.contentWindow.postMessage({id:n,method:e,params:r},"*"),setTimeout(()=>{this.pendingMessages.has(n)&&(this.pendingMessages.delete(n),o(new Error("Message timeout")))},5e3)})}}class ip{constructor(e,r){this.gsMap=e,this.renderer=r}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,r){r?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){const r=on(this.gsMap,e);r>=0&&(this.gsMap.layers.splice(r,1),this.triggerDirty())}async renameLayer(e,r){const n=an(this.gsMap,e);n&&(n.name=r,this.triggerDirty())}async moveLayer(e,r){const n=on(this.gsMap,e);if(n<0)return;let i;if(r){if(i=on(this.gsMap,r),i<0||n===i)return}else i=n>0?n-1:n+1;if(i>=0&&i<this.gsMap.layers.length&&n!==i){const[o]=this.gsMap.layers.splice(n,1);this.gsMap.layers.splice(i,0,o),this.triggerDirty()}}async setLayerVisible(e,r){const n=an(this.gsMap,e);n&&(n.visible=r,this.triggerDirty())}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){const r=Yu(this.gsMap,e);r>=0&&(this.gsMap.controls.splice(r,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(e,r){this.gsMap.overlays.push({src:e,position:r||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){const r=Ju(this.gsMap,e);r>=0&&(this.gsMap.overlays.splice(r,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(e,r){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class sp{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,r){ur.set({part:this.source,event:Kt.LAYER_ADDED})}async deleteLayer(e){ur.set({part:this.source,event:Kt.LAYER_DELETED})}async renameLayer(e,r){ur.set({part:this.source,event:Kt.LAYER_UPDATED})}async moveLayer(e,r){ur.set({part:this.source,event:Kt.LAYER_UPDATED})}async setLayerVisible(e,r){}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,r){}async removeOverlay(e){}async enableDrawing(e,r){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){ur.set({part:this.source,event:Kt.LAYER_UPDATED})}}var ap=Object.defineProperty,op=Object.getOwnPropertyDescriptor,Yn=(t,e,r,n)=>{for(var i=n>1?void 0:n?op(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&ap(e,r,i),i};const lp=Un("GsMapEditor");let It=class extends $t{constructor(){super(),this.mapContainer=kr(),this.isFirstConnection=!0,this.moduleResolver=new tp,this.interactionMode="none",this.commandStack=new va}getRenderer(){return this.renderer}getOperations(){return this.operations}onMapChanged({part:t,event:e}){t===this&&(e===Kt.LAYER_ADDED||e===Kt.LAYER_DELETED||e===Kt.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const e=this.getGsMap()?.layers.filter(n=>{const i=n.type===Ss.VECTOR,o=n.source?.type===tr.Features;return i&&o})||[],r=this.activeDrawingLayerUuid!==void 0;return W`
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
            
            ${xr(e.length>0,()=>{const n=e.map(i=>`${i.uuid}:${i.name}`).join("|");return W`
                ${Ku(n,W`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${i=>{const o=i.target.value||void 0;this.activeDrawingLayerUuid=o,(o===void 0||i.target.value==="")&&(this.operations?.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${e.map(i=>W`
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
        `}async connectedCallback(){if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}this.renderer?.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Ye.set(this)}))}async doInitUI(){const t=this.input?.data,e=await lo(".env");e.BUILD_TIME=new Date;const r=await t.getContents();let n=r&&r.trim()?JSON.parse(r):la;n=this.migrateGsMap(n),As(n),await rn(n,"url"),await rn(n,"src",this.moduleResolver),this.gsMap=n,n.view&&(this.initialView={center:[...n.view.center],zoom:n.view.zoom}),this.renderer=new np(n,e);const i=this.renderer.getOperations(),o=new ip(n,this.renderer),a=new sp(this);this.operations=Zu([o,i,a]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(c=>{if(this.gsMap){switch(c.type){case"viewChanged":this.gsMap.view.center=c.view.center,this.gsMap.view.zoom=c.view.zoom,c.view.rotation!==void 0&&c.view.rotation!==0&&(this.gsMap.view.rotation=c.view.rotation);break;case"featuresChanged":const f=an(this.gsMap,c.layerUuid);f&&f.source?.type===tr.Features&&(f.source.features=c.features);break;case"featureSelected":const y={feature:c.feature,layerUuid:c.layerUuid,metrics:c.metrics};console.info("Feature metrics:",y.metrics),ur.set({part:this,event:Kt.FEATURE_SELECTED,payload:y});break;case"featureDeselected":console.info("Feature deselected"),ur.set({part:this,event:Kt.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),this.renderer.setOnClick?.(()=>{Ye.set(this)}),this.updateToolbar(),ur.set({part:this,event:Kt.LOADED})}catch(c){console.error("Failed to render map:",c),je(`Failed to render map: ${c.message}`)}}migrateGsMap(t){const e={...t};let r=!1;return t.view||(console.log("Creating view field and migrating old properties..."),r=!0,e.view={},t.center!==void 0&&(e.view.center=t.center,delete e.center),t.zoom!==void 0&&(e.view.zoom=t.zoom,delete e.zoom),t.projection!==void 0&&(e.view.projection=t.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857")),(!t.styles||Object.keys(t.styles).length===0)&&(console.log("Adding default styles to map..."),r=!0,e.styles={...Ro}),(!t.styleRules||t.styleRules.length===0)&&(console.log("Adding default style rules to map..."),r=!0,e.styleRules=[...Lo]),r&&console.log("Map migration completed"),e}getGsMap(){return this.gsMap}async save(){if(!this.renderer){je("Map not initialized");return}try{if(!this.gsMap){je("Map not initialized");return}const t=JSON.parse(JSON.stringify(this.gsMap));await $n(t,"url"),await $n(t,"src"),this.input?.data.saveContents(JSON.stringify(t,null,2)),this.markDirty(!1)}catch(t){je(`Save failed: ${t.message}`)}}get mapOperations(){return this.operations}edit(){jt("not yet implemented")}async refresh(){if(!this.renderer||!this.gsMap){lp.error("Map not initialized");return}await $n(this.gsMap,"url"),await $n(this.gsMap,"src"),this.moduleResolver.clear(),await rn(this.gsMap,"url"),await rn(this.gsMap,"src",this.moduleResolver),await this.renderer.modelToUI(this.gsMap)}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Point",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("LineString",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Polygon",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){await this.operations?.enableFeatureSelection(),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){if(this.interactionMode==="select")try{await this.operations?.deleteSelectedFeatures(),jt("Selected features deleted")}catch(t){je(t.message)}}async handleCreateDrawingLayer(){if(!this.gsMap){je("Map not initialized");return}const t=await Wn("Enter name for new drawing layer:","Drawing Layer");if(!t)return;const e=As({name:t,type:Ss.VECTOR,source:{type:tr.Features,features:[]},visible:!0});await this.operations?.addLayer(e,!1);const r=this.gsMap?.layers.find(n=>n.uuid===e.uuid);r?.uuid&&(this.activeDrawingLayerUuid=r.uuid),await this.updateComplete,this.updateToolbar(),jt(`Created drawing layer: ${t}`)}doClose(){this.renderer?.destroy(),this.renderer=void 0,this.input=void 0,this.moduleResolver.clear()}render(){return W`
            <div class="gc-map-container" ${Sr(this.mapContainer)}>
            </div>
        `}};It.styles=[To(Qu),Dt`
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
    `];Yn([Te({attribute:!1})],It.prototype,"input",2);Yn([Te({type:String})],It.prototype,"activeDrawingLayerUuid",2);Yn([Te({type:String})],It.prototype,"interactionMode",2);Yn([ps(ur)],It.prototype,"onMapChanged",1);It=Yn([vt("gs-map")],It);var cp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,Ei=(t,e,r,n)=>{for(var i=n>1?void 0:n?up(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&cp(e,r,i),i};let dn=class extends $t{onPartChanged(t){if(!(t==this||t==this.mapEditor)){if(!(t instanceof It)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=t,this.requestUpdate()}}onMapChanged({part:t}){t==this.mapEditor&&this.requestUpdate()}toggleVisible(t){const e=this.mapEditor.getGsMap(),r=an(e,t);if(!r)return;const i=!(r.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(t,i),this.updateLater()}async confirmAction(t,e){await fn(t)&&e()}selectLayer(t){this.selectedLayerUuid=t,this.updateToolbar(),this.updateContextMenu()}renameLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const r=this.mapEditor.getGsMap();if(!an(r,e))return;const i=on(r,e),o=Le.createExecutionContext({index:i+1});Le.execute("rename_layer",o)}deleteLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const r=this.mapEditor.getGsMap(),n=an(r,e);n&&this.confirmAction(`Delete layer "${n.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(e)))}moveLayerUp(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const r=on(e,t);if(r<=0)return;const n=e.layers[r-1]?.uuid;n&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(t,n)),this.selectedLayerUuid=n)}moveLayerDown(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const r=on(e,t);if(r<0||r>=e.layers.length-1)return;const n=e.layers[r+1]?.uuid;n&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(t,n)),this.selectedLayerUuid=n)}renderToolbar(){const t=this.selectedLayerUuid!==void 0;return W`
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
        `}renderContextMenu(){const t=this.selectedLayerUuid!==void 0;return W`
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
        `}render(){return xr(!this.mapEditor,()=>W`
                    <k-no-content message="Select a map."></k-no-content>`,()=>W`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((t,e)=>W`
                            <wa-tree-item @click="${()=>t.uuid&&this.selectLayer(t.uuid)}" 
                                          class="${this.selectedLayerUuid===t.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${t.name??`Layer ${e+1}`}${e==0?W`
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
                        ${this.mapEditor?.getGsMap()?.controls.map(t=>W`
                            <wa-tree-item>
                                <span>${Pn(t.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{t.uuid&&this.confirmAction(`Delete control "${Pn(t.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(t.uuid)))}}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(t=>W`
                            <wa-tree-item>
                                <span>${Pn(t.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{t.uuid&&this.confirmAction(`Delete overlay "${Pn(t.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(t.uuid)))}}>
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
            `)}};dn.styles=Dt`
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
    `;Ei([kt()],dn.prototype,"selectedLayerUuid",2);Ei([ps(nn)],dn.prototype,"onPartChanged",1);Ei([ps(ur)],dn.prototype,"onMapChanged",1);dn=Ei([vt("gs-map-props")],dn);var pp=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,co=(t,e,r,n)=>{for(var i=n>1?void 0:n?dp(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=(n?a(e,r,i):a(i))||i);return n&&i&&pp(e,r,i),i};const hp="catalog.root";let Lr=class extends $t{constructor(){super(...arguments),this.treeRef=kr()}doBeforeUI(){const t=Qe.getContributions(hp);this.rootNodes=this.toTreeNodes(t)}renderToolbar(){const t=Ye.get()instanceof Lr&&Ut.get()!==void 0;return W`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!t} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(t){return t.map(e=>{const r={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const n=Qe.getContributions(e.contributionId);r.leaf=n.length===0,r.children=this.toTreeNodes(n)}return r})}onItemDblClicked(t){const e=t.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(t){const e=t.detail.selection[0].model;Ut.set(e.data)}setAllExpanded(t){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(r=>{r.expanded=t})}refresh(){this.requestUpdate()}createTreeItems(t,e=!1){return t?W`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${t} ?expanded=${e}>
                <span><k-icon name="${t.icon}"></k-icon> ${t.label}</span>
                ${t.children?.map(r=>this.createTreeItems(r))}
            </wa-tree-item>`:W``}render(){return W`
            <wa-tree ${Sr(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${this.rootNodes?.map(t=>this.createTreeItems(t,!0))}
            </wa-tree>
        `}};Lr.styles=Dt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;co([kt()],Lr.prototype,"rootNodes",2);Lr=co([vt("gs-catalog")],Lr);const fp="geo!space catalog",mp="earth",gp="catalog.root.geospace",vp=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],yp={label:fp,icon:mp,contributionId:gp,items:vp};Xe({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async t=>{let e=t.params&&t.params.url;if(!e){const n=Ut.get();if(!n||!("url"in n))return;e=n.url}const r=await Ot.getWorkspace();if(!r){je("No workspace selected.");return}fetch(e,{method:"GET"}).then(n=>n.blob()).then(n=>{const i=new URL(e).pathname.split("/"),o=i[i.length-1];return r.getResource(o,{create:!0}).then(a=>a.saveContents(n,{contentType:za.BINARY}).then(()=>{jt("File checked out: "+o)}))}).catch(n=>{je(n)})}}});Xe({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async t=>{const e=Ye.get();e instanceof Lr&&e.refresh()}}});Xe({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Ye.get();e instanceof Lr&&e.setAllExpanded(!0)}}});Xe({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Ye.get();e instanceof Lr&&e.setAllExpanded(!1)}}});oo(yp);const bp=Un("GsCommandHandlers"),Ar=t=>t.activeEditor instanceof It,$r=t=>{const e=t.activeEditor;if(!(e instanceof It)||!e.getOperations())throw bp.error("GsMapEditor with renderer not available in context.activeEditor"),new Error("GsMapEditor with renderer not available in context.activeEditor");return e.getOperations()};Le.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level (typically 0-20, where 0=world view, 5-9=country/region, 10-12=city, 13-15=street, 16-20=building detail)",required:!0}]},handler:{canExecute:Ar,execute:async t=>{const e=$r(t),r=Number(t.params.zoom).valueOf();return await e.setZoom(r),{zoom:r}}}});Le.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:t=>Ye.get()instanceof It,execute:async t=>{const e=Ye.get(),r=e.getGsMap();if(r?.view?.zoom!==void 0){const n=e.mapOperations,i=r.view.zoom+1;return await n?.setZoom(i),i}return r?.view?.zoom}}});Le.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:t=>Ye.get()instanceof It,execute:async t=>{const e=Ye.get(),r=e.getGsMap();if(r?.view?.zoom!==void 0){const n=e.mapOperations,i=r.view.zoom-1;return await n?.setZoom(i),i}return r?.view?.zoom}}});Le.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the location (e.g., 52.52 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0},{name:"lon",description:"the longitude of the location (e.g., 13.405 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0}]},handler:{canExecute:Ar,execute:async t=>{const e=$r(t),r=Po([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]);await e.setCenter([r[0],r[1]])}}});Le.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(tr).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:Ar,execute:async t=>{const e=$r(t),r=t.params.source?.trim().toLowerCase(),n=t.params.url,i=$o(r),o=t?.params&&t.params.basemap==!0;let a;n&&(a=n.split("/").pop()),!a&&i&&(a=i);const c=Cs({name:a,type:Do(r),source:Cs({type:i,url:n??No(i)})});await rn(c,"url"),await e.addLayer(c,o)}}});Le.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:Ar,execute:async t=>{const e=$r(t),n=t.activeEditor.getGsMap(),i=parseInt(t.params.index)-1;if(i<0||!n||i>=n.layers.length)return;const o=n.layers[i];o?.uuid&&await e.deleteLayer(o.uuid)}}});Le.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:Ar,execute:async t=>{const e=$r(t),n=t.activeEditor.getGsMap(),i=parseInt(t.params.index)-1;if(i<0||!n||i>=n.layers.length)return;const o=n.layers[i];if(!o?.uuid)return;const a=o.name||`Layer ${i+1}`,c=t.params?.newName||await Wn(`Enter new name for "${a}":`,a);!c||c===a||await e.renameLayer(o.uuid,c)}}});Le.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:Ar,execute:async t=>{const e=$r(t),r=t.params?.mode;await e.switchColorMode(r)}}});Le.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:Ar,execute:async t=>{const e=$r(t),r=t.params.src,n=t.params.position;await e.addOverlayFromModule(r,n)}}});Le.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:Ar,execute:async t=>{const e=$r(t),r=t.params.src;await e.addControlFromModule(r)}}});Le.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates in WGS84 (EPSG:4326) format",type:"number[]"}]},handler:{canExecute:Ar,execute:async t=>{const e=t.activeEditor,r=t.params.latlon,i=await e.getRenderer().getViewExtent();if(!i)throw new Error("Failed to get view extent");let o=i;if(r||r===void 0){const{transformExtent:a}=await st(async()=>{const{transformExtent:c}=await import("./index-B-or_cqe.js").then(f=>f.af);return{transformExtent:c}},__vite__mapDeps([1,2]));o=a(i,"EPSG:3857","EPSG:4326"),[o[0],o[1]]=[o[1],o[0]],[o[2],o[3]]=[o[3],o[2]]}return t.viewExtent=o,o}}});Le.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:t=>Ye.get()instanceof It,execute:async t=>{const e=Ye.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});Le.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:t=>Ye.get()instanceof It,execute:async t=>{const e=Ye.get();e instanceof It&&await e.refresh()}}});Le.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:t=>Ye.get()instanceof It,execute:async t=>{const e=Ye.get();e instanceof It&&await e.resetView()}}});Le.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:t=>Ye.get()instanceof It,execute:async t=>{const r=Ye.get().mapOperations;r&&await r.switchColorMode()}}});var wp=Object.getOwnPropertyDescriptor,xp=(t,e,r,n)=>{for(var i=n>1?void 0:n?wp(e,r):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(i=a(i)||i);return i};let Xs=class extends hs{createRenderRoot(){return this}render(){return W`
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
                <k-toolbar id=${Pa}></k-toolbar>
                <k-toolbar id=${Cc}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${yn}></k-toolbar>
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
                    <k-tabs id="${Da}"></k-tabs>
                    <k-tabs id="${Na}"></k-tabs>
                </k-resizable-grid>
                
                <!-- Editor Area (fixed, never moves) -->
                <k-tabs id="${tn}"></k-tabs>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${Ma}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${$a}></k-toolbar>
                <k-toolbar id=${fs}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Gi}></k-toolbar>
            </div>
        `}};Xs=xp([vt("gs-app")],Xs);const Ip=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
geo!space provides the following components:
- a workspace/file browser in the left sidebar with "Workspace" tab (top section) and "Catalog" tab
- an editor area in the center which shows a welcome message and how to get started if no workspace is selected
- an AI chat interface in the auxiliary sidebar (right side) with tab label "AI" to interact with you
- a bottom panel for logs and terminal output

The workspace component (file browser) allows to select a local folder as a workspace.
Once a workspace is connected, it will be restored when the user reloads geo!space.
If the user does not see a file they expect to be in the workspace,
they can choose to reload the workspace which will lead to syncing the workspace folder with the local file system.

Files with the extension .geospace are opened in the geo!space mapping editor.
The editor displays an interactive map with toolbar controls for zooming, panning, layer management, and drawing tools.
Users interact with the map through the UI controls and can also use commands (via the AI assistant or command palette) to manipulate the map programmatically.
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

**Command Execution via Tools:**

geo!space exposes commands as AI-callable tools/functions. These tools represent actual commands you can execute directly in the application.

**Tool Architecture:**
- Tools are dynamically generated from available commands in the system
- Commands are **context-aware/context-sensitive** - different commands are available depending on the current application context (active editor, selected files, workspace state, etc.)
- The available tools you see at any given time reflect what commands can be executed in the current context
- Each tool includes:
  - A descriptive name and function description
  - Parameter definitions with types, descriptions, and whether they're required
  - Enum values for parameters where applicable
- You can call multiple tools in sequence to accomplish complex tasks
- The system prevents infinite loops with a maximum iteration limit

**Context Information:**
- You receive current application state with each user prompt, including:
  - The active workspace name (if a workspace is selected)
  - The currently active editor (if any editor is open)
- Use this contextual information to understand what the user is working with and provide relevant assistance

**Rules for using tools:**
1. **Always check for available tools first** - If tools are available and the user requests an action that can be performed via a tool, you MUST call that tool
2. **Never describe manual steps when tools are available** - If a tool exists for an action, use it. Do not tell the user to click buttons or use menus
3. **Read tool descriptions and parameters** - Each tool's description and parameters explain exactly what it does and what parameters it needs. Use this information to determine the correct tool and parameters.
4. **Call tools in sequence when needed** - For complex requests requiring multiple steps, call tools one after another. For example:
   - User: "zoom to Berlin at level 13" → Call \`center_location\` first, then \`zoom_to_level\`
   - User: "zoom to oldenburg, then berlin" → Call \`center_location\` for Oldenburg, then \`center_location\` for Berlin
5. **Provide final response after tool execution** - After executing tools and receiving successful results, you MUST provide a final text response to the user confirming the completion of the task. Do NOT call more tools after receiving success results unless the user explicitly requested additional steps.
6. **Do NOT loop tool calls** - Once you receive a tool result indicating success, do NOT call the same or similar tool again. The task is complete - provide your response to the user instead of calling more tools.
7. **Examples:**
   - User: "zoom to Berlin" → Call \`center_location\` tool with Berlin coordinates → Receive success result → Respond "I've centered the map on Berlin" (do NOT call more tools)
   - User: "add a geojson layer" → Call \`add_layer\` tool with source="geojson" → Receive success result → Respond "I've added the geojson layer" (do NOT call more tools)
   - User: "zoom to level 5" → Call \`zoom_to_level\` tool with zoom=5 → Receive success result → Respond "I've set the zoom level to 5" (do NOT call more tools)

**If tools are NOT available:** This means the current context doesn't support command execution. In this case:
- Explain what context is needed for the requested action (e.g., opening a map editor for map-related commands)
- Describe manual steps or explain how to perform the action using the UI
- Suggest changing the context if needed (e.g., opening the appropriate file or editor)

**Important:** When tools are provided, they represent actual commands you can execute. Use them immediately rather than discussing alternatives. The tool descriptions tell you exactly what each tool does and what parameters it requires.

Answer technical requests not by code any technical terms, but by abstract and easy-to-understand concepts.
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,kp=`# 🌐 geo!space
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
- [👨‍💻 Development](#-development)
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

## 👨‍💻 Development

geo!space provides a powerful development environment for creating custom map controls and overlays using JavaScript modules.

### **Custom Modules**

Create interactive UI components for your maps using JavaScript modules. geo!space uses **Lit** for templating and **Web Awesome** for UI components - both are provided by default and based on browser standards only, so no build tools are required.

**Key Features:**
- **No Build Tools**: Write plain JavaScript modules that run directly in the browser
- **Lit Templating**: Use Lit's HTML template literals for reactive UI
- **Web Awesome Components**: Access to a full library of web-standard UI components
- **OpenLayers API**: Full access to OpenLayers through the \`ol\` namespace object
- **Module System**: Import and share modules within your workspace using relative paths or bare specifiers

**Getting Started:**
1. Create a JavaScript file in your workspace (e.g., \`my-control.js\`)
2. Export a default function that receives APIs via destructuring
3. Return a Lit template from your function
4. Add your module to a map's \`controls\` or \`overlays\` array in the \`.geospace\` file

**Example:**
\`\`\`javascript
export default function ({html, style, events, map}) {
    style({
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0"
    });

    return () => html\`
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
            <wa-button @click=\${() => events("drawer/openMenu")}>
                Menu
            </wa-button>
        </div>
    \`;
}
\`\`\`

**Learn More:**
- 📖 See the [User Modules Guide](packages/geospace/public/docs/user-modules.md) for complete documentation
- 🎨 Browse Web Awesome components: https://webawesome.com
- 🗺️ Explore OpenLayers API: https://openlayers.org/

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

**Happy mapping! 🗺️✨**`,ea=Tn.version,ta=Un("GeoSpaceApp"),Sp={".geojson":tr.GeoJSON,".json":tr.GeoJSON,".kml":tr.KML,".gpx":tr.GPX,".tif":tr.GeoTIFF,".tiff":tr.GeoTIFF,".geotiff":tr.GeoTIFF},uo=t=>{const e=t.getName().toLowerCase();for(const[r,n]of Object.entries(Sp))if(e.endsWith(r))return n;return null},Ap=t=>uo(t)!==null,Cp={id:"geospace",name:"geo!space",version:ea,description:"A geospatial IDE for working with spatial data",metadata:{github:{owner:"erdalkaraca",repo:"geospace"}},extensions:["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage","system.pythonpackagemanager","system.settings-tree","system.ai-system"],contributions:{ui:[{target:Pa,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:Da,name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>W`<k-filebrowser id="${t}"></k-filebrowser>`},{target:"system.fastviews-bottomend",name:"catalog",label:"Catalog",icon:"book",component:t=>W`<gs-catalog id="${t}"></gs-catalog>`},{target:Na,name:"map-props",label:"Map Properties",icon:"fg map-options",component:t=>W`<gs-map-props id="${t}"></gs-map-props>`},{target:Ma,name:"aiview",label:"AI",icon:"robot",component:t=>W`<k-aiview id="${t}"></k-aiview>`},{target:"system.fastviews-bottomend",name:"log-terminal",label:"Log Messages",icon:"list",component:t=>W`<k-log-terminal id="${t}"></k-log-terminal>`},{target:$a,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:Gi,label:`v${ea}`,icon:"circle-info",command:"show_version_info",showLabel:!0},{target:Gi,label:"Fast Views",html:'<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>'},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const t=Ut.get();return t instanceof hr?!Ap(t):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_map_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>st(()=>import("./mapbuilder-extension-DmxMRtdM.js"),__vite__mapDeps([22,1,2])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>st(()=>import("./style-editor-extension-CNdEhlaI.js"),__vite__mapDeps([23,1,2])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>st(()=>import("./overpass-extension-BwU9InaE.js"),__vite__mapDeps([24,1,2])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>st(()=>import("./gtfs-extension-BV74HLoQ.js"),__vite__mapDeps([25,1,2])),icon:"map-location-dot"},{id:"geospace.tendermatch",name:"TenderMatch",description:"Ausschreibungsmatching für Logistikunternehmen",loader:()=>st(()=>import("./tendermatch-extension--lMbo3T5.js"),__vite__mapDeps([26,1,2])),icon:"handshake"}]},async initialize(){gi.addPackage({name:Tn.name,version:Tn.version,dependencies:Tn.dependencies,devDependencies:Tn.devDependencies});const t={enhance:async(e,r)=>Ot.getWorkspace().then(n=>{const i={workspace:n?.getName(),activeEditor:Vr.getEditorArea()?.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(i,null,2)}`}

${e}`})};Qe.registerContribution(Hn,{label:"App Support",description:"General app support",role:"appsupport",priority:100,icon:"question-circle",sysPrompt:()=>{const e=Ue.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,installedAndEnabled:Ue.isEnabled(n.id)})),r=`***Available Extensions:***
${JSON.stringify(e,null,2)}`;return`${Ip}

${r}`},promptEnhancers:[t],tools:{enabled:!0}}),Xe({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async e=>{const r=Ut.get();if(!(r instanceof hr))return;const n=uo(r);if(!n){ta.warn(`Unsupported file type: ${r.getName()}`);return}const i=r.getWorkspacePath(),o=Le.createExecutionContext({source:n,url:i});await Le.execute("add_layer",o)}}}),Xe({command:{id:"create_map_file",name:"Create Geospace map file",description:"Creates a new .geospace map file with default map structure. This is specifically for creating geospace map files, not general files.",parameters:[{name:"path",description:"the path including name of the map file to be created (e.g., 'my-map.geospace' or 'my map'). The .geospace extension will be added automatically if missing. Must be relative to the workspace.",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async e=>{const r={...la,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}},n=e.params?.path||"map.geospace",i=n.endsWith(".geospace")?n:`${n}.geospace`;return await Le.execute("create_file",{params:{path:i,contents:JSON.stringify(r,null,2),extension:".geospace",ask:n==="map.geospace"}})}}}),Xe({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async e=>{const r=new Lc(kp,"README.md");await Vr.loadEditor(r)}},contribution:{target:yn,icon:"question-circle",label:"Welcome"}}),ta.info("geo!space is ready!")},render(){return W`<gs-app></gs-app>`}};Gn.registerApp(Cp,{defaultAppId:"geospace",autoStart:!0,container:document.body});export{He as A,pr as B,Un as C,sn as D,jr as E,hr as F,It as G,Wn as H,fn as I,fa as J,$t as K,Ba as L,Ep as M,Op as N,Rp as O,Ou as P,Lp as Q,Pa as T,jt as a,je as b,Ye as c,Ut as d,Qe as e,nn as f,lt as g,Xe as h,Vr as i,za as j,Pp as k,lo as l,Et as m,Kr as n,Tp as o,Ke as p,yc as q,zt as r,Cc as s,mi as t,mr as u,Yt as v,Ot as w,Le as x,ti as y,$a as z};
