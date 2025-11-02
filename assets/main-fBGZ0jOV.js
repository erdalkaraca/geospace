const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/git-extension-BNwvwxW4.js","assets/index-C4bFKT08.js","assets/index-C2t38aP0.css","assets/pyterminal-extension-_Zs4VKhR.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-DPXrSYf7.js","assets/webllmservice-B15egg_e.js","assets/p12-splitter-D0lC7m-2.js","assets/package-manager-extension-DQGODV16.js","assets/notebook-extension-f7FbWyHM.js","assets/editor.main-C79rY1YI.js","assets/editor-BhPcksyq.css","assets/command-palette-extension-BpYdKWb4.js","assets/download-extension-DneQZfIP.js","assets/unzip-extension-DeNlJs4w.js","assets/md-editor-extension-Bz_f1jPx.js","assets/monaco-editor-extension-DM1grs-N.js","assets/memory-usage-extension-DBAKT0jH.js","assets/webdav-extension-C1hLPrho.js","assets/settings-tree-extension-J2zm40cO.js","assets/ai-system-extension-C5e0CsCs.js","assets/mapbuilder-extension-DONtUDc5.js","assets/style-editor-extension-DrycsQLC.js","assets/overpass-extension-iSTnF4EU.js","assets/gtfs-extension-B_8HGV99.js","assets/tendermatch-extension-CQAHPvI6.js"])))=>i.map(i=>d[i]);
import{x as j,B as kr,P as Ks,o as Ln,g as Js,i as Ys,a as Nt,t as yt,b as Qa,n as ze,r as Pt,e as Mr,E as Lt,c as Fr,d as Zs,f as Qs,h as Xa,p as eo,v as $r,j as hn,M as wi,T as to,m as Xs,k as ro,l as vr,_ as ot,q as vs,s as no,u as io,w as so,y as ao,G as ys,z as Xt,D as ea,A as bs,C as oo,F as lo,H as co,I as uo,J as ws,K as po,L as ho}from"./index-C4bFKT08.js";const fo="@kispace/geospace",mo="0.12.37",go={"@kispace/appspace":"file:../appspace","esbuild-wasm":"^0.25.11",ol:"^10.6.1","ol-mapbox-style":"^13.1.0",osmtogeojson:"^3.0.0-beta.5","font-gis":"^1.0.6","pace-js":"^1.2.4","pubsub-js":"^1.9.5"},vo={"@testing-library/jest-dom":"^6.9.1","@types/node":"^24.9.2","@types/pubsub-js":"^1.8.6","@types/toastify-js":"^1.12.4","@vitest/coverage-v8":"^4.0.6","@vitest/ui":"^4.0.6","happy-dom":"^20.0.10",jsdom:"^27.1.0","rollup-plugin-visualizer":"^6.0.5",typescript:"~5.9.3",vite:"^7.1.12","vite-plugin-cross-origin-isolation":"^0.1.6","vite-plugin-mkcert":"^1.17.9","vite-plugin-static-copy":"^3.1.4","vite-plugin-zip":"^1.0.1",vitest:"^4.0.6",esbuild:"^0.25.11"},xn={name:fo,version:mo,dependencies:go,devDependencies:vo};class ji{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,r){return e[r]||this.parent?.getProxy()[r]}set(e,r,s){e[r]=s}put(e,r){this.variables[e]=r}getProxy(){return this.proxy}createChild(e={}){const r=new ji(e);return r.parent=this,this.children.push(r),r}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const zt=new ji({}),pr=zt.createChild({});pr.put("html",j);pr.put("render",kr);const xs={debug:0,info:1,warning:2,error:3};let yo="debug";const Hr={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let ti=null;const Oi=[];function fn(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class bo{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,r){Kr(this.source,e,r)}}function wo(t){return xs[t]>=xs[yo]}function Kr(t,e,r){wo(r)&&(ti?ti(t,e,r):(Oi.push({source:t,message:e,level:r}),Hr[r==="error"?"error":r==="warning"?"warn":r==="debug"?"debug":"log"](`[${t}] ${e}`)))}function xo(){console.log=function(...t){Hr.log.apply(console,t),Kr("Console",t.map(e=>fn(e)).join(" "),"info")},console.info=function(...t){Hr.info.apply(console,t),Kr("Console",t.map(e=>fn(e)).join(" "),"info")},console.warn=function(...t){Hr.warn.apply(console,t),Kr("Console",t.map(e=>fn(e)).join(" "),"warning")},console.error=function(...t){Hr.error.apply(console,t),Kr("Console",t.map(e=>fn(e)).join(" "),"error")},console.debug=function(...t){Hr.debug.apply(console,t),Kr("Console",t.map(e=>fn(e)).join(" "),"debug")}}xo();function Io(t){for(ti=t;Oi.length>0;){const e=Oi.shift();e&&t(e.source,e.message,e.level)}}function ko(){ti=null}function Pn(t){return new bo(t)}const st=Pn("System");zt.put("logger",st);var So=Object.defineProperty,Ao=(t,e,r)=>e in t?So(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,xi=(t,e,r)=>(Ao(t,typeof e!="symbol"?e+"":e,r),r),Eo=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},Ii=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Bn=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Is=(t,e,r)=>(Eo(t,e,"access private method"),r);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ta(t,e){return Object.is(t,e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let mt=null,Sn=!1,Zn=1;const ri=Symbol("SIGNAL");function Jr(t){const e=mt;return mt=t,e}function _o(){return mt}function Co(){return Sn}const Wi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ui(t){if(Sn)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(mt===null)return;mt.consumerOnSignalRead(t);const e=mt.nextProducerIndex++;if(Xr(mt),e<mt.producerNode.length&&mt.producerNode[e]!==t&&Ti(mt)){const r=mt.producerNode[e];pi(r,mt.producerIndexOfThis[e])}mt.producerNode[e]!==t&&(mt.producerNode[e]=t,mt.producerIndexOfThis[e]=Ti(mt)?ia(t,mt,e):0),mt.producerLastReadVersion[e]=t.version}function Oo(){Zn++}function ra(t){if(!(!t.dirty&&t.lastCleanEpoch===Zn)){if(!t.producerMustRecompute(t)&&!$o(t)){t.dirty=!1,t.lastCleanEpoch=Zn;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Zn}}function na(t){if(t.liveConsumerNode===void 0)return;const e=Sn;Sn=!0;try{for(const r of t.liveConsumerNode)r.dirty||Lo(r)}finally{Sn=e}}function To(){return mt?.consumerAllowSignalWrites!==!1}function Lo(t){var e;t.dirty=!0,na(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function Po(t){return t&&(t.nextProducerIndex=0),Jr(t)}function Ro(t,e){if(Jr(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Ti(t))for(let r=t.nextProducerIndex;r<t.producerNode.length;r++)pi(t.producerNode[r],t.producerIndexOfThis[r]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function $o(t){Xr(t);for(let e=0;e<t.producerNode.length;e++){const r=t.producerNode[e],s=t.producerLastReadVersion[e];if(s!==r.version||(ra(r),s!==r.version))return!0}return!1}function ia(t,e,r){var s;if(Bi(t),Xr(t),t.liveConsumerNode.length===0){(s=t.watched)==null||s.call(t.wrapper);for(let n=0;n<t.producerNode.length;n++)t.producerIndexOfThis[n]=ia(t.producerNode[n],t,n)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(e)-1}function pi(t,e){var r;if(Bi(t),Xr(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(r=t.unwatched)==null||r.call(t.wrapper);for(let n=0;n<t.producerNode.length;n++)pi(t.producerNode[n],t.producerIndexOfThis[n])}const s=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[s],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[s],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const n=t.liveConsumerIndexOfThis[e],l=t.liveConsumerNode[e];Xr(l),l.producerIndexOfThis[n]=e}}function Ti(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function Xr(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function Bi(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function sa(t){if(ra(t),ui(t),t.value===Li)throw t.error;return t.value}function Do(t){const e=Object.create(No);e.computation=t;const r=()=>sa(e);return r[ri]=e,r}const ki=Symbol("UNSET"),Si=Symbol("COMPUTING"),Li=Symbol("ERRORED"),No={...Wi,value:ki,dirty:!0,error:null,equal:ta,producerMustRecompute(t){return t.value===ki||t.value===Si},producerRecomputeValue(t){if(t.value===Si)throw new Error("Detected cycle in computations.");const e=t.value;t.value=Si;const r=Po(t);let s,n=!1;try{s=t.computation.call(t.wrapper),n=e!==ki&&e!==Li&&t.equal.call(t.wrapper,e,s)}catch(l){s=Li,t.error=l}finally{Ro(t,r)}if(n){t.value=e;return}t.value=s,t.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Mo(){throw new Error}let Fo=Mo;function qo(){Fo()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function zo(t){const e=Object.create(Wo);e.value=t;const r=()=>(ui(e),e.value);return r[ri]=e,r}function Uo(){return ui(this),this.value}function jo(t,e){To()||qo(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,Bo(t))}const Wo={...Wi,equal:ta,value:void 0};function Bo(t){t.version++,Oo(),na(t)}/**
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
 */const At=Symbol("node");var cr;(t=>{var e,r,s,n;class l{constructor(f,w={}){Bn(this,r),xi(this,e);const k=zo(f)[ri];if(this[At]=k,k.wrapper=this,w){const y=w.equals;y&&(k.equal=y),k.watched=w[t.subtle.watched],k.unwatched=w[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Uo.call(this[At])}set(f){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Co())throw new Error("Writes to signals not permitted during Watcher callback");const w=this[At];jo(w,f)}}e=At,r=new WeakSet,t.isState=p=>typeof p=="object"&&Ii(r,p),t.State=l;class a{constructor(f,w){Bn(this,n),xi(this,s);const k=Do(f)[ri];if(k.consumerAllowSignalWrites=!0,this[At]=k,k.wrapper=this,w){const y=w.equals;y&&(k.equal=y),k.watched=w[t.subtle.watched],k.unwatched=w[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return sa(this[At])}}s=At,n=new WeakSet,t.isComputed=p=>typeof p=="object"&&Ii(n,p),t.Computed=a,(p=>{var f,w,L,k;function y(R){let G,F=null;try{F=Jr(null),G=R()}finally{Jr(F)}return G}p.untrack=y;function A(R){var G;if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((G=R[At].producerNode)==null?void 0:G.map(F=>F.wrapper))??[]}p.introspectSources=A;function D(R){var G;if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called introspectSinks without a Signal argument");return((G=R[At].liveConsumerNode)==null?void 0:G.map(F=>F.wrapper))??[]}p.introspectSinks=D;function W(R){if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called hasSinks without a Signal argument");const G=R[At].liveConsumerNode;return G?G.length>0:!1}p.hasSinks=W;function le(R){if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called hasSources without a Computed or Watcher argument");const G=R[At].producerNode;return G?G.length>0:!1}p.hasSources=le;class ke{constructor(G){Bn(this,w),Bn(this,L),xi(this,f);let F=Object.create(Wi);F.wrapper=this,F.consumerMarkedDirty=G,F.consumerIsAlwaysLive=!0,F.consumerAllowSignalWrites=!1,F.producerNode=[],this[At]=F}watch(...G){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Is(this,L,k).call(this,G);const F=this[At];F.dirty=!1;const O=Jr(F);for(const B of G)ui(B[At]);Jr(O)}unwatch(...G){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Is(this,L,k).call(this,G);const F=this[At];Xr(F);for(let O=F.producerNode.length-1;O>=0;O--)if(G.includes(F.producerNode[O].wrapper)){pi(F.producerNode[O],F.producerIndexOfThis[O]);const B=F.producerNode.length-1;if(F.producerNode[O]=F.producerNode[B],F.producerIndexOfThis[O]=F.producerIndexOfThis[B],F.producerNode.length--,F.producerIndexOfThis.length--,F.nextProducerIndex--,O<F.producerNode.length){const Z=F.producerIndexOfThis[O],Se=F.producerNode[O];Bi(Se),Se.liveConsumerIndexOfThis[Z]=O}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[At].producerNode.filter(F=>F.dirty).map(F=>F.wrapper)}}f=At,w=new WeakSet,L=new WeakSet,k=function(R){for(const G of R)if(!(0,t.isComputed)(G)&&!(0,t.isState)(G))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=R=>Ii(w,R),p.Watcher=ke;function z(){var R;return(R=_o())==null?void 0:R.wrapper}p.currentComputed=z,p.watched=Symbol("watched"),p.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(cr||(cr={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=Symbol("SignalWatcherBrand"),Go=new FinalizationRegistry((({watcher:t,signal:e})=>{t.unwatch(e)})),ks=new WeakMap;function di(t){return t[Vo]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new cr.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new cr.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new cr.subtle.Watcher((function(){const r=ks.get(this);r!==void 0&&(r._$Si===!1&&r.requestUpdate(),this.watch())}));ks.set(e,this),Go.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((r=>r.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,r,s){this._$So=!0,super.requestUpdate(e,r,s)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const r=this._$So;this.requestUpdate(),this._$So=r}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */cr.State;cr.Computed;const Ur=(t,e)=>new cr.State(t,e),rr=(t,e)=>{Ks.subscribe(t,(r,s)=>e(s))},Ye=(t,e)=>{Ks.publish(t,e)},aa=t=>function(e,r,s){const n=s.value;return n.topic=t,s};zt.put("subscribe",rr);zt.put("publish",Ye);const Rn="events/contributionregistry/contributionsChanged";class Ho{constructor(){this.contributions=new Map}registerContribution(e,r){const s=this.getContributions(e);if(r.disabled instanceof Function){const n=r.disabled;r.disabled=new cr.Computed(n)}s.push(r),Ye(Rn,{target:e,contributions:s})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const Ze=new Ho;zt.put("contributionRegistry",Ze);const Ko={},Ge=Ur(null),Qn=Ur(null),Pi=Ur(null),oa=Ur(0),Ut=Ur(void 0);Ur({name:"",timestamp:0});class Jo{constructor(e,r,s,n,l){this.id=e,this.name=r,this.description=s,this.parameters=n||[],this.output=l||[]}}class la{async execute(e,r){return Re.execute(e,r)}async undo(){}async redo(){}}class Yo{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,r){this.handlers.has(e)||this.handlers.set(e,[]);const s=this.handlers.get(e);s.push(r),s.sort((n,l)=>(l.ranking??0)-(n.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e,r){return{source:e,params:r||{},activePart:Ge.get(),activeEditor:Qn.get()}}execute(e,r={}){const s=this.getHandler(e);if(!s)throw new Error(`No handlers registered for command: ${e}`);for(const n of s)if(n.canExecute===void 0||n.canExecute(r))return n.execute(r);st.error(`No handler found to execute command: ${e}`)}createAndRegisterCommand(e,r,s,n,l){const a=new Jo(e,r,s,n);this.registerCommand(a),l&&this.registerHandler(e,l)}registerCommand(e){this.commands[e.id]=e,st.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(r=>(Re.getHandler(r.id)||[]).some(n=>n.canExecute===void 0||n.canExecute(e))).reduce((r,s)=>(r[s.id]=s,r),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const r=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(r,e.handler),e.contribution&&e.contribution.target&&Ze.registerContribution(e.contribution.target,{command:r,...e.contribution})}}const Re=new Yo;zt.put("commandRegistry",Re);const pt=t=>{Re.registerAll(t)};class Zo{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Re.listCommands();Object.values(e).forEach(r=>{r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)})}watchCommandRegistry(){const e=Re.registerCommand.bind(Re);Re.registerCommand=r=>{e(r),r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const r=e.toUpperCase().split("+").map(a=>a.trim());if(r.length===0)return null;const s={ctrl:!1,alt:!1,shift:!1,meta:!1},n=r[r.length-1],l=r.slice(0,-1);for(const a of l)switch(a){case"CTRL":case"CONTROL":s.ctrl=!0;break;case"ALT":case"OPTION":s.alt=!0;break;case"SHIFT":s.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":s.meta=!0;break;default:st.warn(`Unknown modifier: ${a}`)}return s.key=this.normalizeKey(n),s}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const r=[];return e.ctrl&&r.push("ctrl"),e.alt&&r.push("alt"),e.shift&&r.push("shift"),e.meta&&r.push("meta"),r.sort(),`${r.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,r){const s=this.parseKeyBinding(r);if(!s)return st.error(`Invalid key binding: ${r}`),!1;s.commandId=e;const n=this.getBindingKey(s);this.bindings.has(n)||this.bindings.set(n,[]);const l=this.bindings.get(n);return l.find(p=>p.commandId===e)?(st.error(`Key binding ${r} already registered for command ${e}`),!1):(l.push(s),st.debug(`Key binding registered: ${r} -> ${e}`),!0)}unregisterKeyBinding(e,r){if(r){const s=this.parseKeyBinding(r);if(s){const n=this.getBindingKey(s),l=this.bindings.get(n);if(l){const a=l.filter(p=>p.commandId!==e);a.length===0?this.bindings.delete(n):this.bindings.set(n,a)}}}else for(const[s,n]of this.bindings.entries()){const l=n.filter(a=>a.commandId!==e);l.length===0?this.bindings.delete(s):this.bindings.set(s,l)}}getKeyBindingsForCommand(e){const r=[];for(const s of this.bindings.values())for(const n of s)n.commandId===e&&r.push(this.formatKeyBinding(n));return r}formatKeyBinding(e){const r=[];e.ctrl&&r.push("Ctrl"),e.alt&&r.push("Alt"),e.shift&&r.push("Shift"),e.meta&&r.push("Cmd");let s=e.key;return s.length===1?s=s.toUpperCase():s=s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),r.push(s),r.join("+")}handleKeyDown(e){if(!this.enabled)return;const r=e.target;if(r&&(r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.isContentEditable)){const a=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&a==="P"))return}const s={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},n=this.getBindingKey(s),l=this.bindings.get(n);if(l&&l.length>0){const a=l[0];try{e.preventDefault(),e.stopPropagation();const p=Re.createExecutionContext(this,{});Re.execute(a.commandId,p),st.info(`Executed command via key binding: ${a.commandId}`)}catch(p){st.error(`Failed to execute command ${a.commandId}: ${p.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}st.debug("KeyBindingManager initializing...");const ca=new Zo;st.debug("KeyBindingManager initialized");zt.put("keyBindingManager",ca);function Vi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var jr=Vi();function ua(t){jr=t}var An={exec:()=>null};function Be(t,e=""){let r=typeof t=="string"?t:t.source,s={replace:(n,l)=>{let a=typeof l=="string"?l:l.source;return a=a.replace(Dt.caret,"$1"),r=r.replace(n,a),s},getRegex:()=>new RegExp(r,e)};return s}var Dt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Qo=/^(?:[ \t]*(?:\n|$))+/,Xo=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,el=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,$n=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,tl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Gi=/(?:[*+-]|\d{1,9}[.)])/,pa=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,da=Be(pa).replace(/bull/g,Gi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),rl=Be(pa).replace(/bull/g,Gi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Hi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,nl=/^[^\n]+/,Ki=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,il=Be(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ki).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),sl=Be(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Gi).getRegex(),hi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ji=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,al=Be("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ji).replace("tag",hi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ha=Be(Hi).replace("hr",$n).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",hi).getRegex(),ol=Be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ha).getRegex(),Yi={blockquote:ol,code:Xo,def:il,fences:el,heading:tl,hr:$n,html:al,lheading:da,list:sl,newline:Qo,paragraph:ha,table:An,text:nl},Ss=Be("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",$n).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",hi).getRegex(),ll={...Yi,lheading:rl,table:Ss,paragraph:Be(Hi).replace("hr",$n).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ss).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",hi).getRegex()},cl={...Yi,html:Be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ji).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:An,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Be(Hi).replace("hr",$n).replace("heading",` *#{1,6} *[^
]`).replace("lheading",da).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ul=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,pl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fa=/^( {2,}|\\)\n(?!\s*$)/,dl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,fi=/[\p{P}\p{S}]/u,Zi=/[\s\p{P}\p{S}]/u,ma=/[^\s\p{P}\p{S}]/u,hl=Be(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Zi).getRegex(),ga=/(?!~)[\p{P}\p{S}]/u,fl=/(?!~)[\s\p{P}\p{S}]/u,ml=/(?:[^\s\p{P}\p{S}]|~)/u,gl=Be(/link|code|html/,"g").replace("link",new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code",new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html",/<(?! )[^<>]*?>/).getRegex(),va=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,vl=Be(va,"u").replace(/punct/g,fi).getRegex(),yl=Be(va,"u").replace(/punct/g,ga).getRegex(),ya="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",bl=Be(ya,"gu").replace(/notPunctSpace/g,ma).replace(/punctSpace/g,Zi).replace(/punct/g,fi).getRegex(),wl=Be(ya,"gu").replace(/notPunctSpace/g,ml).replace(/punctSpace/g,fl).replace(/punct/g,ga).getRegex(),xl=Be("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ma).replace(/punctSpace/g,Zi).replace(/punct/g,fi).getRegex(),Il=Be(/\\(punct)/,"gu").replace(/punct/g,fi).getRegex(),kl=Be(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Sl=Be(Ji).replace("(?:-->|$)","-->").getRegex(),Al=Be("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Sl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ni=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,El=Be(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ni).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ba=Be(/^!?\[(label)\]\[(ref)\]/).replace("label",ni).replace("ref",Ki).getRegex(),wa=Be(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ki).getRegex(),_l=Be("reflink|nolink(?!\\()","g").replace("reflink",ba).replace("nolink",wa).getRegex(),As=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Qi={_backpedal:An,anyPunctuation:Il,autolink:kl,blockSkip:gl,br:fa,code:pl,del:An,emStrongLDelim:vl,emStrongRDelimAst:bl,emStrongRDelimUnd:xl,escape:ul,link:El,nolink:wa,punctuation:hl,reflink:ba,reflinkSearch:_l,tag:Al,text:dl,url:An},Cl={...Qi,link:Be(/^!?\[(label)\]\((.*?)\)/).replace("label",ni).getRegex(),reflink:Be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ni).getRegex()},Ri={...Qi,emStrongRDelimAst:wl,emStrongLDelim:yl,url:Be(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",As).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Be(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",As).getRegex()},Ol={...Ri,br:Be(fa).replace("{2,}","*").getRegex(),text:Be(Ri.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Vn={normal:Yi,gfm:ll,pedantic:cl},mn={normal:Qi,gfm:Ri,breaks:Ol,pedantic:Cl},Tl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Es=t=>Tl[t];function ar(t,e){if(e){if(Dt.escapeTest.test(t))return t.replace(Dt.escapeReplace,Es)}else if(Dt.escapeTestNoEncode.test(t))return t.replace(Dt.escapeReplaceNoEncode,Es);return t}function _s(t){try{t=encodeURI(t).replace(Dt.percentDecode,"%")}catch{return null}return t}function Cs(t,e){let r=t.replace(Dt.findPipe,(l,a,p)=>{let f=!1,w=a;for(;--w>=0&&p[w]==="\\";)f=!f;return f?"|":" |"}),s=r.split(Dt.splitPipe),n=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(Dt.slashPipe,"|");return s}function gn(t,e,r){let s=t.length;if(s===0)return"";let n=0;for(;n<s&&t.charAt(s-n-1)===e;)n++;return t.slice(0,s-n)}function Ll(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let s=0;s<t.length;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])r++;else if(t[s]===e[1]&&(r--,r<0))return s;return r>0?-2:-1}function Os(t,e,r,s,n){let l=e.href,a=e.title||null,p=t[1].replace(n.other.outputLinkReplace,"$1");s.state.inLink=!0;let f={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:l,title:a,text:p,tokens:s.inlineTokens(p)};return s.state.inLink=!1,f}function Pl(t,e,r){let s=t.match(r.other.indentCodeCompensation);if(s===null)return e;let n=s[1];return e.split(`
`).map(l=>{let a=l.match(r.other.beginningSpace);if(a===null)return l;let[p]=a;return p.length>=n.length?l.slice(n.length):l}).join(`
`)}var ii=class{options;rules;lexer;constructor(t){this.options=t||jr}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let r=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:gn(r,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let r=e[0],s=Pl(r,e[3]||"",this.rules);return{type:"code",raw:r,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(this.rules.other.endingHash.test(r)){let s=gn(r,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(r=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:gn(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let r=gn(e[0],`
`).split(`
`),s="",n="",l=[];for(;r.length>0;){let a=!1,p=[],f;for(f=0;f<r.length;f++)if(this.rules.other.blockquoteStart.test(r[f]))p.push(r[f]),a=!0;else if(!a)p.push(r[f]);else break;r=r.slice(f);let w=p.join(`
`),L=w.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${w}`:w,n=n?`${n}
${L}`:L;let k=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(L,l,!0),this.lexer.state.top=k,r.length===0)break;let y=l.at(-1);if(y?.type==="code")break;if(y?.type==="blockquote"){let A=y,D=A.raw+`
`+r.join(`
`),W=this.blockquote(D);l[l.length-1]=W,s=s.substring(0,s.length-A.raw.length)+W.raw,n=n.substring(0,n.length-A.text.length)+W.text;break}else if(y?.type==="list"){let A=y,D=A.raw+`
`+r.join(`
`),W=this.list(D);l[l.length-1]=W,s=s.substring(0,s.length-y.raw.length)+W.raw,n=n.substring(0,n.length-A.raw.length)+W.raw,r=D.substring(l.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:l,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r=e[1].trim(),s=r.length>1,n={type:"list",raw:"",ordered:s,start:s?+r.slice(0,-1):"",loose:!1,items:[]};r=s?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=s?r:"[*+-]");let l=this.rules.other.listItemRegex(r),a=!1;for(;t;){let f=!1,w="",L="";if(!(e=l.exec(t))||this.rules.block.hr.test(t))break;w=e[0],t=t.substring(w.length);let k=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,ke=>" ".repeat(3*ke.length)),y=t.split(`
`,1)[0],A=!k.trim(),D=0;if(this.options.pedantic?(D=2,L=k.trimStart()):A?D=e[1].length+1:(D=e[2].search(this.rules.other.nonSpaceChar),D=D>4?1:D,L=k.slice(D),D+=e[1].length),A&&this.rules.other.blankLine.test(y)&&(w+=y+`
`,t=t.substring(y.length+1),f=!0),!f){let ke=this.rules.other.nextBulletRegex(D),z=this.rules.other.hrRegex(D),R=this.rules.other.fencesBeginRegex(D),G=this.rules.other.headingBeginRegex(D),F=this.rules.other.htmlBeginRegex(D);for(;t;){let O=t.split(`
`,1)[0],B;if(y=O,this.options.pedantic?(y=y.replace(this.rules.other.listReplaceNesting,"  "),B=y):B=y.replace(this.rules.other.tabCharGlobal,"    "),R.test(y)||G.test(y)||F.test(y)||ke.test(y)||z.test(y))break;if(B.search(this.rules.other.nonSpaceChar)>=D||!y.trim())L+=`
`+B.slice(D);else{if(A||k.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||R.test(k)||G.test(k)||z.test(k))break;L+=`
`+y}!A&&!y.trim()&&(A=!0),w+=O+`
`,t=t.substring(O.length+1),k=B.slice(D)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(w)&&(a=!0));let W=null,le;this.options.gfm&&(W=this.rules.other.listIsTask.exec(L),W&&(le=W[0]!=="[ ] ",L=L.replace(this.rules.other.listReplaceTask,""))),n.items.push({type:"list_item",raw:w,task:!!W,checked:le,loose:!1,text:L,tokens:[]}),n.raw+=w}let p=n.items.at(-1);if(p)p.raw=p.raw.trimEnd(),p.text=p.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let f=0;f<n.items.length;f++)if(this.lexer.state.top=!1,n.items[f].tokens=this.lexer.blockTokens(n.items[f].text,[]),!n.loose){let w=n.items[f].tokens.filter(k=>k.type==="space"),L=w.length>0&&w.some(k=>this.rules.other.anyLine.test(k.raw));n.loose=L}if(n.loose)for(let f=0;f<n.items.length;f++)n.items[f].loose=!0;return n}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let r=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:r,raw:e[0],href:s,title:n}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let r=Cs(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],l={type:"table",raw:e[0],header:[],align:[],rows:[]};if(r.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?l.align.push("right"):this.rules.other.tableAlignCenter.test(a)?l.align.push("center"):this.rules.other.tableAlignLeft.test(a)?l.align.push("left"):l.align.push(null);for(let a=0;a<r.length;a++)l.header.push({text:r[a],tokens:this.lexer.inline(r[a]),header:!0,align:l.align[a]});for(let a of n)l.rows.push(Cs(a,l.header.length).map((p,f)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:l.align[f]})));return l}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let r=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let l=gn(r.slice(0,-1),"\\");if((r.length-l.length)%2===0)return}else{let l=Ll(e[2],"()");if(l===-2)return;if(l>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+l;e[2]=e[2].substring(0,l),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let s=e[2],n="";if(this.options.pedantic){let l=this.rules.other.pedanticHrefTitle.exec(s);l&&(s=l[1],n=l[3])}else n=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?s=s.slice(1):s=s.slice(1,-1)),Os(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let s=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=e[s.toLowerCase()];if(!n){let l=r[0].charAt(0);return{type:"text",raw:l,text:l}}return Os(r,n,r[0],this.lexer,this.rules)}}emStrong(t,e,r=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||s[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!r||this.rules.inline.punctuation.exec(r))){let n=[...s[0]].length-1,l,a,p=n,f=0,w=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(w.lastIndex=0,e=e.slice(-1*t.length+n);(s=w.exec(e))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(a=[...l].length,s[3]||s[4]){p+=a;continue}else if((s[5]||s[6])&&n%3&&!((n+a)%3)){f+=a;continue}if(p-=a,p>0)continue;a=Math.min(a,a+p+f);let L=[...s[0]][0].length,k=t.slice(0,n+s.index+L+a);if(Math.min(n,a)%2){let A=k.slice(1,-1);return{type:"em",raw:k,text:A,tokens:this.lexer.inlineTokens(A)}}let y=k.slice(2,-2);return{type:"strong",raw:k,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(r),n=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return s&&n&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:e[0],text:r}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let r,s;return e[2]==="@"?(r=e[1],s="mailto:"+r):(r=e[1],s=r),{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let n;do n=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(n!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let r=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:r}}}},er=class $i{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||jr,this.options.tokenizer=this.options.tokenizer||new ii,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Dt,block:Vn.normal,inline:mn.normal};this.options.pedantic?(r.block=Vn.pedantic,r.inline=mn.pedantic):this.options.gfm&&(r.block=Vn.gfm,this.options.breaks?r.inline=mn.breaks:r.inline=mn.gfm),this.tokenizer.rules=r}static get rules(){return{block:Vn,inline:mn}}static lex(e,r){return new $i(r).lex(e)}static lexInline(e,r){return new $i(r).inlineTokens(e)}lex(e){e=e.replace(Dt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let s=this.inlineQueue[r];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],s=!1){for(this.options.pedantic&&(e=e.replace(Dt.tabCharGlobal,"    ").replace(Dt.spaceLine,""));e;){let n;if(this.options.extensions?.block?.some(a=>(n=a.call({lexer:this},e,r))?(e=e.substring(n.raw.length),r.push(n),!0):!1))continue;if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length);let a=r.at(-1);n.raw.length===1&&a!==void 0?a.raw+=`
`:r.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length);let a=r.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.text,this.inlineQueue.at(-1).src=a.text):r.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length);let a=r.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title},r.push(n));continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),r.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),r.push(n);continue}let l=e;if(this.options.extensions?.startBlock){let a=1/0,p=e.slice(1),f;this.options.extensions.startBlock.forEach(w=>{f=w.call({lexer:this},p),typeof f=="number"&&f>=0&&(a=Math.min(a,f))}),a<1/0&&a>=0&&(l=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(l))){let a=r.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):r.push(n),s=l.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length);let a=r.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):r.push(n);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){let s=e,n=null;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)p.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,n.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(n=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let l=!1,a="";for(;e;){l||(a=""),l=!1;let p;if(this.options.extensions?.inline?.some(w=>(p=w.call({lexer:this},e,r))?(e=e.substring(p.raw.length),r.push(p),!0):!1))continue;if(p=this.tokenizer.escape(e)){e=e.substring(p.raw.length),r.push(p);continue}if(p=this.tokenizer.tag(e)){e=e.substring(p.raw.length),r.push(p);continue}if(p=this.tokenizer.link(e)){e=e.substring(p.raw.length),r.push(p);continue}if(p=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(p.raw.length);let w=r.at(-1);p.type==="text"&&w?.type==="text"?(w.raw+=p.raw,w.text+=p.text):r.push(p);continue}if(p=this.tokenizer.emStrong(e,s,a)){e=e.substring(p.raw.length),r.push(p);continue}if(p=this.tokenizer.codespan(e)){e=e.substring(p.raw.length),r.push(p);continue}if(p=this.tokenizer.br(e)){e=e.substring(p.raw.length),r.push(p);continue}if(p=this.tokenizer.del(e)){e=e.substring(p.raw.length),r.push(p);continue}if(p=this.tokenizer.autolink(e)){e=e.substring(p.raw.length),r.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(e))){e=e.substring(p.raw.length),r.push(p);continue}let f=e;if(this.options.extensions?.startInline){let w=1/0,L=e.slice(1),k;this.options.extensions.startInline.forEach(y=>{k=y.call({lexer:this},L),typeof k=="number"&&k>=0&&(w=Math.min(w,k))}),w<1/0&&w>=0&&(f=e.substring(0,w+1))}if(p=this.tokenizer.inlineText(f)){e=e.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(a=p.raw.slice(-1)),l=!0;let w=r.at(-1);w?.type==="text"?(w.raw+=p.raw,w.text+=p.text):r.push(p);continue}if(e){let w="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(w);break}else throw new Error(w)}}return r}},si=class{options;parser;constructor(t){this.options=t||jr}space(t){return""}code({text:t,lang:e,escaped:r}){let s=(e||"").match(Dt.notSpaceStart)?.[0],n=t.replace(Dt.endingNewline,"")+`
`;return s?'<pre><code class="language-'+ar(s)+'">'+(r?n:ar(n,!0))+`</code></pre>
`:"<pre><code>"+(r?n:ar(n,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,r=t.start,s="";for(let a=0;a<t.items.length;a++){let p=t.items[a];s+=this.listitem(p)}let n=e?"ol":"ul",l=e&&r!==1?' start="'+r+'"':"";return"<"+n+l+`>
`+s+"</"+n+`>
`}listitem(t){let e="";if(t.task){let r=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+ar(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",r="";for(let n=0;n<t.header.length;n++)r+=this.tablecell(t.header[n]);e+=this.tablerow({text:r});let s="";for(let n=0;n<t.rows.length;n++){let l=t.rows[n];r="";for(let a=0;a<l.length;a++)r+=this.tablecell(l[a]);s+=this.tablerow({text:r})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${ar(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:r}){let s=this.parser.parseInline(r),n=_s(t);if(n===null)return s;t=n;let l='<a href="'+t+'"';return e&&(l+=' title="'+ar(e)+'"'),l+=">"+s+"</a>",l}image({href:t,title:e,text:r,tokens:s}){s&&(r=this.parser.parseInline(s,this.parser.textRenderer));let n=_s(t);if(n===null)return ar(r);t=n;let l=`<img src="${t}" alt="${r}"`;return e&&(l+=` title="${ar(e)}"`),l+=">",l}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:ar(t.text)}},Xi=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},tr=class Di{options;renderer;textRenderer;constructor(e){this.options=e||jr,this.options.renderer=this.options.renderer||new si,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Xi}static parse(e,r){return new Di(r).parse(e)}static parseInline(e,r){return new Di(r).parseInline(e)}parse(e,r=!0){let s="";for(let n=0;n<e.length;n++){let l=e[n];if(this.options.extensions?.renderers?.[l.type]){let p=l,f=this.options.extensions.renderers[p.type].call({parser:this},p);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(p.type)){s+=f||"";continue}}let a=l;switch(a.type){case"space":{s+=this.renderer.space(a);continue}case"hr":{s+=this.renderer.hr(a);continue}case"heading":{s+=this.renderer.heading(a);continue}case"code":{s+=this.renderer.code(a);continue}case"table":{s+=this.renderer.table(a);continue}case"blockquote":{s+=this.renderer.blockquote(a);continue}case"list":{s+=this.renderer.list(a);continue}case"html":{s+=this.renderer.html(a);continue}case"def":{s+=this.renderer.def(a);continue}case"paragraph":{s+=this.renderer.paragraph(a);continue}case"text":{let p=a,f=this.renderer.text(p);for(;n+1<e.length&&e[n+1].type==="text";)p=e[++n],f+=`
`+this.renderer.text(p);r?s+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):s+=f;continue}default:{let p='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return s}parseInline(e,r=this.renderer){let s="";for(let n=0;n<e.length;n++){let l=e[n];if(this.options.extensions?.renderers?.[l.type]){let p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){s+=p||"";continue}}let a=l;switch(a.type){case"escape":{s+=r.text(a);break}case"html":{s+=r.html(a);break}case"link":{s+=r.link(a);break}case"image":{s+=r.image(a);break}case"strong":{s+=r.strong(a);break}case"em":{s+=r.em(a);break}case"codespan":{s+=r.codespan(a);break}case"br":{s+=r.br(a);break}case"del":{s+=r.del(a);break}case"text":{s+=r.text(a);break}default:{let p='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(p),"";throw new Error(p)}}}return s}},In=class{options;block;constructor(t){this.options=t||jr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?er.lex:er.lexInline}provideParser(){return this.block?tr.parse:tr.parseInline}},Rl=class{defaults=Vi();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=tr;Renderer=si;TextRenderer=Xi;Lexer=er;Tokenizer=ii;Hooks=In;constructor(...t){this.use(...t)}walkTokens(t,e){let r=[];for(let s of t)switch(r=r.concat(e.call(this,s)),s.type){case"table":{let n=s;for(let l of n.header)r=r.concat(this.walkTokens(l.tokens,e));for(let l of n.rows)for(let a of l)r=r.concat(this.walkTokens(a.tokens,e));break}case"list":{let n=s;r=r.concat(this.walkTokens(n.items,e));break}default:{let n=s;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(l=>{let a=n[l].flat(1/0);r=r.concat(this.walkTokens(a,e))}):n.tokens&&(r=r.concat(this.walkTokens(n.tokens,e)))}}return r}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let s={...r};if(s.async=this.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let l=e.renderers[n.name];l?e.renderers[n.name]=function(...a){let p=n.renderer.apply(this,a);return p===!1&&(p=l.apply(this,a)),p}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let l=e[n.level];l?l.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),s.extensions=e),r.renderer){let n=this.defaults.renderer||new si(this.defaults);for(let l in r.renderer){if(!(l in n))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;let a=l,p=r.renderer[a],f=n[a];n[a]=(...w)=>{let L=p.apply(n,w);return L===!1&&(L=f.apply(n,w)),L||""}}s.renderer=n}if(r.tokenizer){let n=this.defaults.tokenizer||new ii(this.defaults);for(let l in r.tokenizer){if(!(l in n))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;let a=l,p=r.tokenizer[a],f=n[a];n[a]=(...w)=>{let L=p.apply(n,w);return L===!1&&(L=f.apply(n,w)),L}}s.tokenizer=n}if(r.hooks){let n=this.defaults.hooks||new In;for(let l in r.hooks){if(!(l in n))throw new Error(`hook '${l}' does not exist`);if(["options","block"].includes(l))continue;let a=l,p=r.hooks[a],f=n[a];In.passThroughHooks.has(l)?n[a]=w=>{if(this.defaults.async&&In.passThroughHooksRespectAsync.has(l))return(async()=>{let k=await p.call(n,w);return f.call(n,k)})();let L=p.call(n,w);return f.call(n,L)}:n[a]=(...w)=>{if(this.defaults.async)return(async()=>{let k=await p.apply(n,w);return k===!1&&(k=await f.apply(n,w)),k})();let L=p.apply(n,w);return L===!1&&(L=f.apply(n,w)),L}}s.hooks=n}if(r.walkTokens){let n=this.defaults.walkTokens,l=r.walkTokens;s.walkTokens=function(a){let p=[];return p.push(l.call(this,a)),n&&(p=p.concat(n.call(this,a))),p}}this.defaults={...this.defaults,...s}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return er.lex(t,e??this.defaults)}parser(t,e){return tr.parse(t,e??this.defaults)}parseMarkdown(t){return(e,r)=>{let s={...r},n={...this.defaults,...s},l=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&s.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=t),n.async)return(async()=>{let a=n.hooks?await n.hooks.preprocess(e):e,p=await(n.hooks?await n.hooks.provideLexer():t?er.lex:er.lexInline)(a,n),f=n.hooks?await n.hooks.processAllTokens(p):p;n.walkTokens&&await Promise.all(this.walkTokens(f,n.walkTokens));let w=await(n.hooks?await n.hooks.provideParser():t?tr.parse:tr.parseInline)(f,n);return n.hooks?await n.hooks.postprocess(w):w})().catch(l);try{n.hooks&&(e=n.hooks.preprocess(e));let a=(n.hooks?n.hooks.provideLexer():t?er.lex:er.lexInline)(e,n);n.hooks&&(a=n.hooks.processAllTokens(a)),n.walkTokens&&this.walkTokens(a,n.walkTokens);let p=(n.hooks?n.hooks.provideParser():t?tr.parse:tr.parseInline)(a,n);return n.hooks&&(p=n.hooks.postprocess(p)),p}catch(a){return l(a)}}}onError(t,e){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let s="<p>An error occurred:</p><pre>"+ar(r.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(r);throw r}}},qr=new Rl;function He(t,e){return qr.parse(t,e)}He.options=He.setOptions=function(t){return qr.setOptions(t),He.defaults=qr.defaults,ua(He.defaults),He};He.getDefaults=Vi;He.defaults=jr;He.use=function(...t){return qr.use(...t),He.defaults=qr.defaults,ua(He.defaults),He};He.walkTokens=function(t,e){return qr.walkTokens(t,e)};He.parseInline=qr.parseInline;He.Parser=tr;He.parser=tr.parse;He.Renderer=si;He.TextRenderer=Xi;He.Lexer=er;He.lexer=er.lex;He.Tokenizer=ii;He.Hooks=In;He.parse=He;He.options;He.setOptions;He.use;He.walkTokens;He.parseInline;tr.parse;er.lex;let vn=null;function es(){return vn||(vn=document.createElement("div"),vn.id="global-dialog-container",document.body.appendChild(vn)),vn}function ts(t){return new Promise(e=>{const r=es(),s=()=>{kr(j``,r)},n=()=>{s(),e(t.confirmValue)},l=()=>{s(),e(t.cancelValue)},a=j`
            <wa-dialog label="${t.title}" open @wa-request-close=${l}>
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
                    ${t.renderContent({onConfirm:n,onCancel:l})}
                </div>
            </wa-dialog>
        `;kr(a,r),t.onAfterRender&&requestAnimationFrame(t.onAfterRender)})}function mi(t,e=!1){if(e){const r=He.parse(t,{async:!1});return j`<div class="dialog-message markdown-content" style="white-space: normal;">${Ln(r)}</div>`}return j`<div class="dialog-message" style="white-space: pre-line;">${t}</div>`}const Dn=async(t,e="",r=!1)=>{let s=e;return ts({title:"Input",message:t,markdown:r,confirmValue:s,cancelValue:null,renderContent:({onConfirm:n,onCancel:l})=>{const a=f=>{s=f.target.value},p=f=>{f.key==="Enter"?(f.preventDefault(),n()):f.key==="Escape"&&(f.preventDefault(),l())};return j`
                ${mi(t,r)}
                <wa-input
                    value="${e}"
                    @input=${a}
                    @keydown=${p}
                    autofocus
                ></wa-input>
                
                <div class="dialog-actions">
                    <wa-button variant="default" @click=${l}>
                        Cancel
                    </wa-button>
                    <wa-button variant="primary" @click=${()=>{n()}}>
                        OK
                    </wa-button>
                </div>
            `},onAfterRender:()=>{const l=es().querySelector("wa-input");if(l){const a=l.shadowRoot?.querySelector("input");a&&(a.focus(),a.select())}}}).then(()=>s)},an=async(t,e=!1)=>ts({title:"Confirm",message:t,markdown:e,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:r,onCancel:s})=>j`
            ${mi(t,e)}
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${s}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${r}>
                    OK
                </wa-button>
            </div>
        `}),$l=async(t,e,r=!1)=>{await ts({title:t,message:e,markdown:r,confirmValue:void 0,cancelValue:void 0,renderContent:({onConfirm:s})=>j`
            ${mi(e,r)}
            
            <div class="dialog-actions">
                <wa-button variant="primary" @click=${s}>
                    OK
                </wa-button>
            </div>
        `})},Dl=async(t,e,r,s=!1)=>new Promise(n=>{const l=es();let a=!0;const p=()=>{a&&(a=!1,kr(j``,l),n())},f=(w,L,k)=>{if(!a)return;const y=j`
                <wa-dialog label="${w}" open @wa-request-close=${p}>
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
                            ${mi(L,s)}
                        </wa-scroller>
                        
                        <div class="dialog-actions">
                            <div class="dialog-actions-left">
                                ${k.filter(A=>A.label!=="Close").map(A=>j`
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
                                ${k.filter(A=>A.label==="Close").map(A=>j`
                                    <wa-button 
                                        variant="${A.variant||"primary"}"
                                        @click=${()=>{A.callback(),p()}}
                                    >
                                        ${A.label}
                                    </wa-button>
                                `)}
                            </div>
                        </div>
                    </div>
                </wa-dialog>
            `;kr(y,l)};r.updateDialog=f,f(t,e,r)});pr.put("promptDialog",Dn);pr.put("confirmDialog",an);pr.put("infoDialog",$l);pr.put("navigableInfoDialog",Dl);var Xn={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var Nl=Xn.exports,Ts;function Ml(){return Ts||(Ts=1,(function(t){(function(e,r){t.exports?t.exports=r():e.Toastify=r()})(Nl,function(e){var r=function(a){return new r.lib.init(a)},s="1.12.0";r.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},r.lib=r.prototype={toastify:s,constructor:r,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||r.defaults.text,this.options.node=a.node||r.defaults.node,this.options.duration=a.duration===0?0:a.duration||r.defaults.duration,this.options.selector=a.selector||r.defaults.selector,this.options.callback=a.callback||r.defaults.callback,this.options.destination=a.destination||r.defaults.destination,this.options.newWindow=a.newWindow||r.defaults.newWindow,this.options.close=a.close||r.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":r.defaults.gravity,this.options.positionLeft=a.positionLeft||r.defaults.positionLeft,this.options.position=a.position||r.defaults.position,this.options.backgroundColor=a.backgroundColor||r.defaults.backgroundColor,this.options.avatar=a.avatar||r.defaults.avatar,this.options.className=a.className||r.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?r.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||r.defaults.onClick,this.options.offset=a.offset||r.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:r.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||r.defaults.ariaLive,this.options.style=a.style||r.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var p in this.options.style)a.style[p]=this.options.style[p];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var f=document.createElement("img");f.src=this.options.avatar,f.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(f):a.insertAdjacentElement("afterbegin",f)}if(this.options.close===!0){var w=document.createElement("button");w.type="button",w.setAttribute("aria-label","Close"),w.className="toast-close",w.innerHTML="&#10006;",w.addEventListener("click",(function(le){le.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var L=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&L>360?a.insertAdjacentElement("afterbegin",w):a.appendChild(w)}if(this.options.stopOnFocus&&this.options.duration>0){var k=this;a.addEventListener("mouseover",function(le){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){k.removeElement(a)},k.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(le){le.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(le){le.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var y=n("x",this.options),A=n("y",this.options),D=this.options.position=="left"?y:"-"+y,W=this.options.gravity=="toastify-top"?A:"-"+A;a.style.transform="translate("+D+","+W+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var p=r.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,p),r.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),r.reposition()}).bind(this),400)}},r.reposition=function(){for(var a={top:15,bottom:15},p={top:15,bottom:15},f={top:15,bottom:15},w=document.getElementsByClassName("toastify"),L,k=0;k<w.length;k++){l(w[k],"toastify-top")===!0?L="toastify-top":L="toastify-bottom";var y=w[k].offsetHeight;L=L.substr(9,L.length-1);var A=15,D=window.innerWidth>0?window.innerWidth:screen.width;D<=360?(w[k].style[L]=f[L]+"px",f[L]+=y+A):l(w[k],"toastify-left")===!0?(w[k].style[L]=a[L]+"px",a[L]+=y+A):(w[k].style[L]=p[L]+"px",p[L]+=y+A)}return this};function n(a,p){return p.offset[a]?isNaN(p.offset[a])?p.offset[a]:p.offset[a]+"px":"0px"}function l(a,p){return!a||typeof p!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(p)>-1)}return r.lib.init.prototype=r.lib,r})})(Xn)),Xn.exports}var Fl=Ml();const rs=Js(Fl),qt=t=>{console.info("[TOAST] INFO: ",t),rs({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},at=t=>{console.error("[TOAST] ERROR: ",t),rs({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},ql=t=>{console.warn("[TOAST] WARNING: ",t),rs({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};pr.put("toastInfo",qt);pr.put("toastError",at);pr.put("toastWarning",ql);const xa=(t,e)=>{const r=new cr.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{r.watch()}});r.watch(t)},ns=t=>function(e,r,s){const n=s.value;return n.signal=t,s};Object.defineProperty(Ys.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Nn extends Ys{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(r=>{const s=e[r];if(s instanceof Function){const n=s;n.name.startsWith("on")&&"topic"in n&&this.subscribe(n.topic,n)}}),Object.getOwnPropertyNames(e).forEach(r=>{const s=e[r];if(s instanceof Function){const n=s;n.name.startsWith("on")&&"signal"in n&&this.watch(n.signal,n)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,r){rr(e,r.bind(this))}showInfo(e){qt(e)}showError(e){at(e)}nobubble(e){return r=>{r.stopPropagation(),e.bind(this)(r)}}command(e,r={}){return()=>{this.executeCommand(e,r)}}executeCommand(e,r){const s=Re.createExecutionContext(this,r);Re.execute(e,s)}watch(e,r){xa(e,r.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}class Wr extends Nn{}var zl=Object.getOwnPropertyDescriptor,Ul=(t,e,r,s)=>{for(var n=s>1?void 0:s?zl(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=a(n)||n);return n};let Ni=class extends Wr{render(){return j`
            <slot></slot>
        `}};Ni.styles=Nt`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Ni=Ul([yt("k-app")],Ni);var jl=Object.defineProperty,Wl=Object.getOwnPropertyDescriptor,on=(t,e,r,s)=>{for(var n=s>1?void 0:s?Wl(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&jl(e,r,n),n};let Sr=class extends di(Wr){constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),rr(Rn,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const s=e.split(":");if(s.length===2){const n=s[1];if(n==="system.editors"||n===".system.editors")return this.isEditor&&t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=Ze.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),s=`${r}:*`,n=Ze.getContributions(s),l=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const p of a){const f=`${r}:${p}`,w=Ze.getContributions(f);l.push(...w)}}this.contributions=[...n,...l,...e]}contributionCreator(t){if("command"in t){const e=t,r=!!e.showLabel;return j`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${r?e.label:""}
                </wa-button>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():Ln(e)}else return j`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return j`
            <div class="toolbar-items" style=${Qa({"justify-content":this.position})}>
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
        `}};Sr.styles=Nt`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;on([ze()],Sr.prototype,"position",2);on([ze({type:Boolean,attribute:"is-editor"})],Sr.prototype,"isEditor",2);on([ze({attribute:!1})],Sr.prototype,"partToolbarContent",2);on([ze({attribute:!1})],Sr.prototype,"partToolbarRenderer",2);on([Pt()],Sr.prototype,"contributions",2);Sr=on([yt("k-toolbar")],Sr);var Bl=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,ln=(t,e,r,s)=>{for(var n=s>1?void 0:s?Vl(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Bl(e,r,n),n};let Ar=class extends di(Wr){constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Mr(),this.dropdownRef=Mr()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),rr(Rn,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[r]=t.split(":");if(e===`${r}:*`)return!0;const s=e.split(":");if(s.length===2){const n=s[1];if(n==="system.editors"||n===".system.editors")return this.isEditor&&t.startsWith(`${r}:`)}return!1}loadContributions(t){const e=Ze.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[r]=t.split(":"),s=`${r}:*`,n=Ze.getContributions(s),l=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const p of a){const f=`${r}:${p}`,w=Ze.getContributions(f);l.push(...w)}}this.contributions=[...n,...l,...e]}show(t){this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){if("command"in t){const e=t;return j`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?j`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in t){const e=t.html;return e instanceof Function?e():Ln(e)}return Lt}render(){if(!this.isOpen)return Lt;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():Lt;return j`
            <wa-dropdown 
                ${Fr(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${Fr(this.anchorRef)}
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
        `}};Ar.styles=Nt`
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
    `;ln([ze({type:Boolean,attribute:"is-editor"})],Ar.prototype,"isEditor",2);ln([ze({attribute:!1})],Ar.prototype,"partContextMenuRenderer",2);ln([Pt()],Ar.prototype,"contributions",2);ln([Pt()],Ar.prototype,"isOpen",2);ln([Pt()],Ar.prototype,"position",2);Ar=ln([yt("k-contextmenu")],Ar);class is extends Wr{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=(t,e,r)=>{const s=new Map;for(let n=e;n<=r;n++)s.set(t[n],n);return s},Gl=Zs(class extends Qs{constructor(t){if(super(t),t.type!==Xa.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let s;r===void 0?r=e:e!==void 0&&(s=e);const n=[],l=[];let a=0;for(const p of t)n[a]=s?s(p,a):a,l[a]=r(p,a),a++;return{values:l,keys:n}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,s]){const n=eo(t),{values:l,keys:a}=this.dt(e,r,s);if(!Array.isArray(n))return this.ut=a,l;const p=this.ut??=[],f=[];let w,L,k=0,y=n.length-1,A=0,D=l.length-1;for(;k<=y&&A<=D;)if(n[k]===null)k++;else if(n[y]===null)y--;else if(p[k]===a[A])f[A]=$r(n[k],l[A]),k++,A++;else if(p[y]===a[D])f[D]=$r(n[y],l[D]),y--,D--;else if(p[k]===a[D])f[D]=$r(n[k],l[D]),hn(t,f[D+1],n[k]),k++,D--;else if(p[y]===a[A])f[A]=$r(n[y],l[A]),hn(t,n[k],n[y]),y--,A++;else if(w===void 0&&(w=Ls(a,A,D),L=Ls(p,k,y)),w.has(p[k]))if(w.has(p[y])){const W=L.get(a[A]),le=W!==void 0?n[W]:null;if(le===null){const ke=hn(t,n[k]);$r(ke,l[A]),f[A]=ke}else f[A]=$r(le,l[A]),hn(t,n[k],le),n[W]=null;A++}else wi(n[y]),y--;else wi(n[k]),k++;for(;A<=D;){const W=hn(t,f[D+1]);$r(W,l[A]),f[A++]=W}for(;k<=y;){const W=n[k++];W!==null&&wi(W)}return this.ut=a,Xs(t,f),to}}),Hl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Kl="/assets/jupyter-C78Cpfql.svg",Jl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";ro("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":Hl,"../icons/jupyter.svg":Kl,"../icons/python.svg":Jl})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var Yl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Mn=(t,e,r,s)=>{for(var n=s>1?void 0:s?Zl(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Yl(e,r,n),n};let zr=class extends Nn{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),r=t.pop();return j`
            <wa-icon library="${r||Lt}" variant="${this.variant||Lt}"
                         family="${this.family||Lt}" name=${e} label="${this.label||this.name||Lt}"></wa-icon>`}};zr.styles=Nt`
        :host {
            display: contents;
        }
    `;Mn([ze()],zr.prototype,"name",2);Mn([ze()],zr.prototype,"family",2);Mn([ze()],zr.prototype,"variant",2);Mn([ze()],zr.prototype,"label",2);zr=Mn([yt("k-icon")],zr);var Ql=Object.defineProperty,Xl=(t,e,r,s)=>{for(var n=void 0,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=a(e,r,n)||n);return n&&Ql(e,r,n),n};class Tt extends is{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return Lt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return Lt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Pi.set(null),Pi.set(this),Ge.set(null),Ge.set(this)}}Xl([ze()],Tt.prototype,"dirty");const Ia="app-toolbars-main",cn="app-toolbars-main-right",ec="app-toolbars-main-center",ka="app-toolbars-bottom",ss="app-toolbars-bottom-center",Sa="app-toolbars-bottom-end",Yr="editor-area-main",Mi="sidebar-main",Aa="sidebar-main-bottom",Ea="sidebar-auxiliary",_a="panel-bottom";var Ca=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(Ca||{}),tc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,Oa=(t,e,r,s)=>{for(var n=s>1?void 0:s?rc(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&tc(e,r,n),n};let ai=class extends is{constructor(){super(...arguments),this.contributions=[],this.tabGroup=Mr(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&(this.updateToolbarFromComponent(r),requestAnimationFrame(()=>this.updateToolbarHeightVariable(r)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&this.updateContextMenuFromComponent(r)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,r=e.closest("wa-tab");if(r){const a=r.getAttribute("panel");if(a){const p=this.getTabPanel(a);if(p){const f=p.querySelector(".tab-content");if(f&&f.firstElementChild){const w=f.firstElementChild;w instanceof Tt&&Ge.set(w)}}}return}const s=e.closest("wa-scroller.tab-content");if(!s)return;const n=s.closest("wa-tab-panel");if(!n)return;const l=n.querySelector(".tab-content");if(l&&l.firstElementChild){const a=l.firstElementChild;a instanceof Tt&&Ge.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,r=e.target.closest("wa-scroller.tab-content");if(!r)return;e.preventDefault();const s=r.closest("wa-tab-panel");if(!s)return;const n=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,button:0});e.target.dispatchEvent(n),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(s);const l=s.querySelector("k-contextmenu");l&&l.show({x:e.clientX,y:e.clientY})})}))}),rr(Rn,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===Yr;this.contributions.forEach(r=>{const s=this.getTabPanel(r.name);if(!s)return;const n=s.querySelector(".tab-content");if(n&&n.firstElementChild){const l=n.firstElementChild;l instanceof Tt&&(l.tabContribution=r,l.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(s))})}}has(t){return!!this.getTabPanel(t)}activate(t){this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(t){if(this.contributions.find(r=>r.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const r=this.getTabPanel(t.name);if(r){const s=r.querySelector(".tab-content");if(s&&s.firstElementChild){const n=s.firstElementChild;n instanceof Tt&&(n.tabContribution=t,n.isEditor=this.containerId===Yr)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(r),this.updateToolbarHeightVariable(r),this.setupToolbarResizeObserver(r)})}})}handleTabAuxClick(t,e){t.button===Ca.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await an("Unsaved changes will be lost: Do you really want to close?"))return;const r=this.getTabPanel(e);if(!r)return;const s=this.contributions.find(l=>l.name===e);if(!s)return;this.cleanupTabInstance(r);const n=this.contributions.indexOf(s);n>-1&&this.contributions.splice(n,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:r})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=Ze.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=this.resizeObservers.get(t);e&&(e.disconnect(),this.resizeObservers.delete(t));const r=t.querySelector(".tab-content");if(r&&r.firstElementChild){const s=r.firstElementChild;"close"in s&&typeof s.close=="function"&&s.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`)}getTab(t){return this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`)}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof Tt)||!r.renderToolbar)return;const s=t.querySelector("k-toolbar");s&&(s.partToolbarRenderer=()=>r.renderToolbar(),s.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof Tt)||!r.renderContextMenu)return;const s=t.querySelector("k-contextmenu");s&&(s.partContextMenuRenderer=()=>r.renderContextMenu(),s.requestUpdate())}updateToolbarHeightVariable(t){const e=t.querySelector(".tab-toolbar");if(!e)return;const r=e.offsetHeight;t.style.setProperty("--toolbar-height",`${r}px`)}setupToolbarResizeObserver(t){if(this.resizeObservers.has(t))return;const e=t.querySelector(".tab-toolbar");if(!e)return;const r=new ResizeObserver(()=>{this.updateToolbarHeightVariable(t)});r.observe(e),this.resizeObservers.set(t,r)}render(){return j`
            <wa-tab-group ${Fr(this.tabGroup)}>
                ${Gl(this.contributions,t=>t.name,t=>j`
                        <wa-tab panel="${t.name}"
                                @auxclick="${e=>this.handleTabAuxClick(e,t)}">
                            <k-icon name="${t.icon}"></k-icon>
                            ${t.label}
                            ${vr(t.closable,()=>j`
                                <wa-icon name="xmark" label="Close"  @click="${e=>this.closeTab(e,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            <k-toolbar id="toolbar:${t.editorId??t.name}" 
                                       class="tab-toolbar"
                                       ?is-editor="${this.containerId===Yr}"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${t.component?t.component(t.name):Lt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu:${t.name}"
                                           ?is-editor="${this.containerId===Yr}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};ai.styles=Nt`
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
    `;Oa([Pt()],ai.prototype,"contributions",2);ai=Oa([yt("k-tabs")],ai);var nc=Object.defineProperty,ic=Object.getOwnPropertyDescriptor,Fn=(t,e,r,s)=>{for(var n=s>1?void 0:s?ic(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&nc(e,r,n),n};let en=class extends Wr{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.handleResize=t=>{if(!this.resizing)return;const r=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,s=[...this.resizing.startSizes];s[this.resizing.handleIndex]+=r,s[this.resizing.handleIndex+1]-=r;const n=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,l=n*.05;if(s[this.resizing.handleIndex]>=l&&s[this.resizing.handleIndex+1]>=l){this.resizing.currentSizes=s;const a=s.map((p,f)=>{const L=`${(p/n*100).toFixed(2)}%`;return f===s.length-1?L:`${L} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=()=>{if(this.resizing?.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/t*100).toFixed(2)}%`),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,r)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${r*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${r*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const r=this.orientation==="horizontal"?t.clientX:t.clientY,s=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,n=this.gridSizes.map(l=>l.endsWith("%")?parseFloat(l)/100*s:(l.endsWith("px"),parseFloat(l)));this.resizing={handleIndex:e,startPos:r,startSizes:n},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return Lt;const t=this.gridSizes.flatMap((e,r)=>r===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",j`
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
            
            ${this.gridChildren.map((e,r)=>{if(r<this.gridChildren.length-1){const s=this.orientation==="horizontal"?`${r*2+2}`:"1",n=this.orientation==="vertical"?`${r*2+2}`:"1";return j`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${s};
                                grid-row: ${n};
                            "
                            @mousedown=${l=>this.startResize(l,r)}
                        ></div>
                    `}return Lt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Fn([ze()],en.prototype,"orientation",2);Fn([ze()],en.prototype,"sizes",2);Fn([Pt()],en.prototype,"gridSizes",2);Fn([Pt()],en.prototype,"gridChildren",2);en=Fn([yt("k-resizable-grid")],en);function as(t){return new Promise((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)})}function sc(t,e){let r;const s=()=>{if(r)return r;const n=indexedDB.open(t);return n.onupgradeneeded=()=>n.result.createObjectStore(e),r=as(n),r.then(l=>{l.onclose=()=>r=void 0},()=>{}),r};return(n,l)=>s().then(a=>l(a.transaction(e,n).objectStore(e)))}let Ai;function Ta(){return Ai||(Ai=sc("keyval-store","keyval")),Ai}function ac(t,e=Ta()){return e("readonly",r=>as(r.get(t)))}function oc(t,e,r=Ta()){return r("readwrite",s=>(s.put(e,t),as(s.transaction)))}class lc{async persistObject(e,r){return oc(e,r)}async getObject(e){return ac(e)}}const yr=new lc;zt.put("persistenceService",yr);const lr="events/filesys/workspaceChanged",_n="events/filesys/workspaceConnected";class oi{constructor(){this.state={}}getWorkspacePath(){const e=[];let r=this;for(;r;)e.push(r.getName()),r=r.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const r=e.getParent();if(r)e=r;else break}return e}}var La=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(La||{});class tn extends oi{}class Fi extends oi{}class Pa extends tn{constructor(e,r){super(),this.contents=e,this.name=r}async getContents(e){return this.contents}async saveContents(e,r){this.contents=e}async copyTo(e){throw Error("Not supported")}delete(e,r){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class Ps extends tn{constructor(e,r){super(),this.fileHandle=e,this.parent=r}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const r=await this.fileHandle.getFile();return!e||e?.contentType==0?await r.text():e?.encoding==0||e?.uri?URL.createObjectURL(r):e?.blob?r:r.stream()}async saveContents(e,r){const s=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(s);else{const n=s.getWriter();try{await n.write(e)}finally{await n.close()}}}async copyTo(e){const r=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(r)}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(s){throw s.name==="NotAllowedError"||s.message?.includes("not allowed")||s.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):s}await r.listChildren(!0),Ye(lr,this.getWorkspace())}}}class Nr extends Fi{constructor(e,r){super(),this.dirHandle=e,this.parent=r}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){if(e||!this.files){this.files={};for await(const r of this.dirHandle.values()){const n=r.kind==="file"?new Ps(r,this):new Nr(r,this);this.files[n.getName()]=n}}return Object.values(this.files)}async getResource(e,r){if(!e)throw new Error("No path provided");const s=e.split("/");let n=this,l=!1;try{for(let a=0;a<s.length;a++){let p=s[a];if(p&&(p=p.trim()),!p)break;if(n instanceof Nr){if(n.files||await n.listChildren(),!n.files)return null;const f=n.files[p];if(!f&&r?.create)if(l=!0,a<s.length-1){const w=await n.dirHandle.getDirectoryHandle(p,{create:!0}),L=new Nr(w);n.files[p]=L,n=L}else{const w=await n.dirHandle.getFileHandle(p,{create:!0}),L=new Ps(w,n);return n.files[p]=L,L}else n=f}}}finally{l&&Ye(lr,this.getWorkspace())}return n}touch(){Ye(lr,this.getWorkspace())}async delete(e,r=!0){return e?this.dirHandle.removeEntry(e,{recursive:r}).then(()=>{Ye(lr,this.getWorkspace())}):this.getParent()?.delete(this.getName())}async copyTo(e){for(const r of await this.listChildren()){const s=[e,r.getName()].join("/");await r.copyTo(s)}}async rename(e){const r=this.getParent();if(!r)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(s){throw s.name==="NotAllowedError"||s.message?.includes("not allowed")||s.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):s}await r.listChildren(!0),Ye(lr,this.getWorkspace())}}}class cc{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&Ye(_n,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await yr.getObject("workspace_data");if(!e)return;const r=this.contributions.get(e.type);if(!r){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(r.restore){const s=await r.restore(e.data);return s&&(this.currentType=e.type),s}}catch(s){console.error(`Failed to restore workspace of type ${e.type}:`,s)}}async connectWorkspace(e){const r=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!r)throw new Error("No workspace contribution can handle this input");const s=await r.connect(e),n=r.persist?await r.persist(s):e,l={type:r.type,data:n};return await yr.persistObject("workspace_data",l),this.currentType=r.type,this.workspace=Promise.resolve(s),Ye(_n,s),s}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await yr.persistObject("workspace_data",null),await yr.persistObject("workspace",null)}}const Rt=new cc;zt.put("workspaceService",Rt);Rt.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new Nr(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new Nr(t,void 0)},async persist(t){return t instanceof Nr?t.getHandle():null}});const uc=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var pc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,gi=(t,e,r,s)=>{for(var n=s>1?void 0:s?dc(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&pc(e,r,n),n};let rn=class extends Tt{constructor(){super(...arguments),this.treeRef=Mr()}doBeforeUI(){this.initializeWorkspace()}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await Rt.getWorkspace();t?await this.loadWorkspace(t):Re.execute("help")}renderToolbar(){const t=Ut.get()instanceof oi;return j`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const t=Ut.get()instanceof oi;return j`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>Delete</k-command>
        `}async onWorkspaceChanged(t){Ut.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&Ut.set(e[0].model?.data)}async resourceToTreeNode(t){const e=t instanceof tn,r={data:t,label:t.getName(),icon:e?"file":"folder-open",leaf:e,children:[]};if(t instanceof Fi){for(const s of await t.listChildren(!0)){const n=await this.resourceToTreeNode(s);r.children.push(n)}r.children.sort(uc)}return r}createTreeItems(t,e=!1){return t?j`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${t} ?expanded=${e}>
                <span><wa-icon name=${t.icon} label="${t.leaf?"File":"Folder"}"></wa-icon> ${t.label}</span>
                ${t.children.map(r=>this.createTreeItems(r))}
            </wa-tree-item>`:j``}async onFileDoubleClicked(t){const r=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:r})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const r=e[0].model;Ut.set(r.data)}else Ut.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=l=>{if(!l.dataTransfer?.types.includes("Files"))return;l.preventDefault(),l.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const p=l.target.closest("wa-tree-item");p&&p!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=p,p.classList.add("drop-target"))},r=l=>{l.dataTransfer?.types.includes("Files")&&(l.preventDefault(),t.classList.add("drag-over"))},s=l=>{const a=t.getBoundingClientRect(),p=l.clientX,f=l.clientY;(p<=a.left||p>=a.right||f<=a.top||f>=a.bottom)&&(t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},n=async l=>{if(l.preventDefault(),t.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!l.dataTransfer||!this.workspaceDir)return;const a=Array.from(l.dataTransfer.files);if(a.length===0)return;const p=await this.getDropTarget(l);await this.handleFilesDrop(a,p)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",r),t.removeEventListener("dragleave",s),t.removeEventListener("drop",n),t.addEventListener("dragover",e),t.addEventListener("dragenter",r),t.addEventListener("dragleave",s),t.addEventListener("drop",n)}async getDropTarget(t){const r=t.target.closest("wa-tree-item");if(r){const n=r.model.data;if(n instanceof Fi)return n;const l=n.getParent();if(l)return l}return this.workspaceDir}async handleFilesDrop(t,e){const r=t.length;let s=0,n=0,l=0;for(const a of t)try{const p=this.buildTargetPath(e,a.name);if(await this.workspaceDir.getResource(p)&&!await an(`File "${a.name}" already exists. Do you want to overwrite it?`)){l++;continue}await(await this.workspaceDir.getResource(p,{create:!0})).saveContents(a),s++}catch(p){console.error(`Failed to upload ${a.name}:`,p),n++}console.log(`Uploaded ${s}/${r} files${l>0?`, ${l} skipped`:""}${n>0?`, ${n} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const r=t.getWorkspacePath();return r?`${r}/${e}`:e}render(){return j`
            <div class="tree" ${Fr(this.treeRef)}>
                ${vr(!this.workspaceDir,()=>j`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>j`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};rn.styles=Nt`
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
    `;gi([Pt()],rn.prototype,"root",2);gi([aa(lr)],rn.prototype,"onWorkspaceChanged",1);gi([aa(_n)],rn.prototype,"onWorkspaceConnected",1);rn=gi([yt("k-filebrowser")],rn);class hc{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,oa.set(this.updateCounter)}run(e,r){const s=this.createProgressMonitor(e);try{this.tasks.push(s),this.notifyUpdate(),r(s)}finally{this.tasks.splice(this.tasks.indexOf(s),1),this.notifyUpdate()}}async runAsync(e,r){const s=this.createProgressMonitor(e);return this.tasks.push(s),this.notifyUpdate(),r(s).finally(()=>{this.tasks.splice(this.tasks.indexOf(s),1),this.notifyUpdate()})}createProgressMonitor(e){const r={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(r,{set:(s,n,l)=>(s[n]=l,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const Cn=new hc;zt.put("taskService",Cn);var fc=Object.getOwnPropertyDescriptor,mc=(t,e,r,s)=>{for(var n=s>1?void 0:s?fc(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=a(n)||n);return n};Ze.registerContribution(ss,{html:"<k-tasks></k-tasks>"});let qi=class extends di(Tt){render(){oa.get();const t=Cn.getActiveTasks().length;if(t!=0)return j`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${t}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${t}
                </wa-button>
                ${Cn.getActiveTasks().map(e=>{const r=e.progress>=0||e.totalSteps>0,s=e.progress>=0?e.progress:e.totalSteps>0?Math.round(e.currentStep/e.totalSteps*100):0,n=e.progress<0&&e.totalSteps>0;return j`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${e.name}</strong>: ${e.message}
                            </div>
                            ${r?j`
                                <wa-progress-bar value="${s}" style="--track-height: 1.25rem;">
                                    ${n?`${e.currentStep}/${e.totalSteps} - `:""}${s}%
                                </wa-progress-bar>
                            `:j`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};qi.styles=Nt`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;qi=mc([yt("k-tasks")],qi);var gc=Object.getOwnPropertyDescriptor,vc=(t,e,r,s)=>{for(var n=s>1?void 0:s?gc(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=a(n)||n);return n};const Rs="<no workspace>";let $s=class extends Wr{constructor(){super(...arguments),this.workspaceName=Rs}doInitUI(){this.updateWorkspaceName(),rr(_n,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Rt.getWorkspace().then(t=>{this.workspaceName=t?.getName()||Rs,this.requestUpdate()})}handleLoadWorkspace(){Re.execute("load_workspace",{source:this})}render(){return j`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};$s=vc([yt("k-workspace-name")],$s);var yc=Object.getOwnPropertyDescriptor,bc=(t,e,r,s)=>{for(var n=s>1?void 0:s?yc(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=a(n)||n);return n};const Ds="<no part>";Ze.registerContribution(ss,{html:"<k-part-name></k-part-name>"});let Ns=class extends di(Wr){getPartName(){const t=Ge.get();return t&&(t.tabContribution?.label||t.getAttribute("id"))||Ds}render(){const e=Ge.get()?.tabContribution?.icon||"box";return j`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Ns=bc([yt("k-part-name")],Ns);const Gn=".geospace/settings.json",En="events/settings/changed";class wc{async checkSettings(){this.appSettings||(this.appSettings=await yr.getObject(Gn),this.appSettings||(this.appSettings={},await yr.persistObject(Gn,this.appSettings)),Ye(En,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,r){await this.checkSettings(),this.appSettings[e]=r,await yr.persistObject(Gn,this.appSettings),Ye(En,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await yr.persistObject(Gn,this.appSettings),Ye(En,this.appSettings)}}const Gt=new wc;zt.put("appSettings",Gt);const ei="events/extensionsregistry/extensionsConfigChanged",yn="extensions";class xc{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,rr(En,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(r=>this.isEnabled(r.id)).map(r=>this.load(r.id).catch(s=>{at("Extension could not be loaded: "+s.message)}))||[];await Promise.all(e)})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Gt.get(yn),this.extensionsSettings||(await Gt.set(yn,[]),this.extensionsSettings=await Gt.get(yn)),Ye(ei,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(r=>r.id===e&&r.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,r=!1){this.isEnabled(e)||(st.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,r)}).catch(s=>{st.error(`Could not load extension: ${e}`)}))}async load(e,r=[]){if(this.loadedExtensions.has(e))return;const s=this.loadingPromises.get(e);if(s)return s;if(r.includes(e)){const a=[...r,e].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const n=this.extensions[e];if(!n)throw new Error("Extension not found: "+e);const l=(async()=>{try{if(n.dependencies&&n.dependencies.length>0){st.debug(`Loading dependencies for ${e}: ${n.dependencies.join(", ")}`);const p=[...r,e];for(const f of n.dependencies)await this.load(f,p),this.isEnabled(f)||(await this.updateEnablementAsync(f,!0,!1),st.debug(`Auto-enabled dependency: ${f}`))}const a=await Cn.runAsync("Loading extension: "+n.name,()=>{if(n.loader)return n.loader();if(n.url)return import(n.url)});this.loadedExtensions.add(e),a?.default instanceof Function&&a?.default(pr.getProxy()),st.debug(`Extension loaded: ${e}`)}catch(a){throw this.loadedExtensions.delete(e),a}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,l),l}disable(e,r=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,r)}updateEnablement(e,r,s){this.checkExtensionsConfig().then(()=>{const n=this.extensionsSettings?.find(l=>l.id==e);n?n.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),Gt.set(yn,this.extensionsSettings).then(()=>{if(s){const l=this.extensions[e];qt(r?l.name+" enabled.":l.name+" disabled  - Please restart to take effect")}Ye(ei,this.extensionsSettings)})})}async updateEnablementAsync(e,r,s){await this.checkExtensionsConfig();const n=this.extensionsSettings?.find(l=>l.id==e);if(n?n.enabled=r:this.extensionsSettings?.push({id:e,enabled:r}),await Gt.set(yn,this.extensionsSettings),s){const l=this.extensions[e];qt(r?l.name+" enabled.":l.name+" disabled  - Please restart to take effect")}Ye(ei,this.extensionsSettings)}}st.debug("ExtensionRegistry initializing...");const Ue=new xc;zt.put("extensionRegistry",Ue);st.debug("ExtensionRegistry initialized");const Fe=Pn("AppLoader");function bn(t){return t instanceof Error?t.message:String(t)}function Ic(t){try{const r=new URL(t).pathname.split("/").filter(Boolean);return r.length>0?r[r.length-1]:void 0}catch{const e=t.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}class kc{constructor(){this.apps=new Map,this.started=!1,this.container=document.body}registerApp(e,r){this.apps.has(e.id)&&Fe.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Fe.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),r?.defaultAppId&&(this.defaultAppId=r.defaultAppId),r?.container&&(this.container=r.container),r?.autoStart&&!this.started&&this.start()}async loadExtensionFromUrl(e){Fe.info(`Loading extension from URL: ${e}...`);try{const r=`url:${e}`;if(Ue.isEnabled(r)){Fe.info(`Extension from URL ${e} is already enabled`);return}const s={id:r,name:`Extension from ${e}`,description:`Extension loaded from URL: ${e}`,url:e};Ue.registerExtension(s),Fe.info(`Registered extension from URL: ${r}`),Ue.enable(r,!1),Fe.info(`Successfully enabled extension from URL: ${e}`)}catch(r){throw Fe.error(`Failed to load extension from URL ${e}: ${bn(r)}`),r}}async loadAppFromUrl(e){Fe.info(`Loading app from URL: ${e}...`);try{const r=await import(e);if(!r.default)throw new Error(`Module at ${e} does not have a default export`);const s=r.default;if(!s.id||!s.name||!s.version||!s.render)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return Fe.info(`Successfully loaded app definition from URL: ${s.name} (${s.id})`),s}catch(r){throw Fe.error(`Failed to load app from URL ${e}: ${bn(r)}`),r}}async start(){if(this.started){Fe.debug("AppLoader already started");return}document.readyState==="loading"&&await new Promise(p=>{document.addEventListener("DOMContentLoaded",()=>p(),{once:!0})}),this.started=!0,Fe.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),r=e.get("app"),s=e.get("appId"),n=this.apps.size;let l;if(r&&(l=Ic(r),l&&Fe.info(`Extracted app ID from URL path: ${l}`)),r)try{Fe.info(`URL parameter 'app' found: ${r}, attempting to load extension or app`);try{await this.loadExtensionFromUrl(r),Fe.info(`Successfully loaded extension from URL: ${r}`)}catch(p){Fe.info(`Failed to load as extension, trying as app definition: ${bn(p)}`);try{const f=await this.loadAppFromUrl(r);await this.loadApp(f,this.container),Fe.info(`Successfully loaded app from URL: ${r}`);return}catch(f){throw Fe.error(`Failed to load from URL as both extension and app: ${bn(f)}`),f}}}catch(p){Fe.error(`Failed to load from URL parameter, falling back to default app: ${bn(p)}`)}const a=this.selectAppToLoad({appIdFromUrl:s,appIdFromAppUrl:l,appsBeforeExtension:n});if(!a)throw new Error("No apps registered");await this.loadApp(a,this.container)}async loadApp(e,r){let s;if(typeof e=="string"){const n=this.apps.get(e);if(!n)throw new Error(`App '${e}' not found. Make sure it's registered.`);s=n}else s=e,this.registerApp(s);Fe.info(`Loading app: ${s.name}...`),this.currentApp&&(Fe.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Fe.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(n=>{Ue.disable(n)}))),s.contributions&&(Fe.info("Registering app contributions..."),s.contributions.ui&&(s.contributions.ui.forEach(n=>{const l=n.target;l&&Ze.registerContribution(l,n)}),Fe.info(`Registered ${s.contributions.ui.length} UI contributions`)),s.contributions.extensions&&(s.contributions.extensions.forEach(n=>{Ue.registerExtension(n)}),Fe.info(`Registered ${s.contributions.extensions.length} app extensions`))),s.extensions&&(Fe.info(`Enabling ${s.extensions.length} extensions...`),s.extensions.forEach(n=>{Ue.enable(n)})),s.initialize&&(Fe.info(`Initializing ${s.name}...`),await s.initialize()),this.currentApp=s,Fe.info(`App ${s.name} loaded successfully`),r&&this.renderApp(r)}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");kr(this.currentApp.render(),e),Fe.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}selectAppToLoad(e){const{appIdFromUrl:r,appIdFromAppUrl:s,appsBeforeExtension:n}=e;if(r){const a=this.apps.get(r);if(a)return Fe.info(`Loading app specified by URL parameter 'appId': ${r}`),a;Fe.warn(`App ID '${r}' from URL parameter not found`)}if(s){const a=this.apps.get(s);if(a)return Fe.info(`Loading app using ID extracted from app URL path: ${s}`),a}if(this.apps.size>n){const a=Array.from(this.apps.values()).slice(n);if(a.length>0){const p=a[0];return Fe.info(`Loading app registered by extension: ${p.name} (${p.id})`),p}}if(this.defaultAppId){const a=this.apps.get(this.defaultAppId);if(a)return a;Fe.warn(`Default app '${this.defaultAppId}' not found`)}const l=this.getRegisteredApps();if(l.length>0){const a=l[0];return Fe.info(`Loading first registered app: ${a.name} (${a.id})`),a}}}const qn=new kc;zt.put("appLoaderService",qn);var Sc=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,os=(t,e,r,s)=>{for(var n=s>1?void 0:s?Ac(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Sc(e,r,n),n};let On=class extends Tt{constructor(){super(...arguments),this.filterText=""}doInitUI(){rr(ei,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){Ue.enable(t.id,!0),this.requestUpdate()}disable(t){Ue.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=qn.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return Ue.getExtensions();const t=this.filterText.toLowerCase();return Ue.getExtensions().filter(e=>e.name.toLowerCase().includes(t)||(e.description?.toLowerCase().includes(t)??!1)||e.id.toLowerCase().includes(t))}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],r=[];return t.forEach(s=>{Ue.isEnabled(s.id)?e.push(s):r.push(s)}),e.sort((s,n)=>s.name.localeCompare(n.name)),r.sort((s,n)=>s.name.localeCompare(n.name)),{enabled:e,available:r}}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return j`
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
        `}render(){const t=this.getGroupedExtensions(),e=t.enabled.length>0||t.available.length>0;return j`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${e?j`
                        ${t.enabled.length>0?j`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    Installed (${t.enabled.length})
                                </span>
                                ${t.enabled.map(r=>j`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                        <span><k-icon name="${r.icon}"></k-icon> ${r.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                        ${t.available.length>0?j`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${t.available.length})
                                </span>
                                ${t.available.map(r=>j`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${r}>
                                        <span><k-icon name="${r.icon}"></k-icon> ${r.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                    `:j`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${vr(this.selectedExtension,r=>j`
                        <h1><k-icon name="${r.icon}"></k-icon> ${r.name}</h1>
                        <hr>
                        <div>
                            ${vr(Ue.isEnabled(r.id),()=>j`
                                <wa-button 
                                    title="${this.isExtensionRequired(r.id)?"This extension is required by the current app and cannot be uninstalled":"Disable this extension"}" 
                                    @click="${()=>this.disable(r)}"
                                    variant="danger" 
                                    appearance="plain"
                                    ?disabled=${this.isExtensionRequired(r.id)}>
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>
                                ${vr(this.isExtensionRequired(r.id),()=>j`
                                    <div class="required-hint">
                                        <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                        <span>This extension is required by the current app and cannot be uninstalled</span>
                                    </div>
                                `)}
                            `,()=>j`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(r)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${vr(r.experimental,()=>j`
                            <div style="margin-top: 1em;">
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}

                        <p style="margin-top: 1em;">${r.description}</p>

                        ${vr(r.dependencies&&r.dependencies.length>0,()=>j`
                            <div style="margin-top: 1.5em;">
                                <h3 style="margin-bottom: 0.5em;">
                                    <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies
                                </h3>
                                <div class="dependencies-list">
                                    ${r.dependencies.map(s=>{const n=Ue.getExtensions().find(a=>a.id===s),l=Ue.isEnabled(s);return j`
                                            <div class="dependency-item">
                                                <wa-icon 
                                                    name="${l?"check-circle":"circle"}" 
                                                    style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                </wa-icon>
                                                <k-icon name="${n?.icon||"puzzle-piece"}"></k-icon>
                                                <span>${n?.name||s}</span>
                                                ${l?"":j`
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
        `}};On.styles=Nt`
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
    `;os([Pt()],On.prototype,"selectedExtension",2);os([Pt()],On.prototype,"filterText",2);On=os([yt("k-extensions")],On);var Ec=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,vi=(t,e,r,s)=>{for(var n=s>1?void 0:s?_c(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Ec(e,r,n),n};let nn=class extends Tt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Mr()}connectedCallback(){super.connectedCallback(),Io(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),ko()}log(t,e,r="info"){const s={timestamp:new Date,level:r,source:t,message:e};this.messages=[...this.messages,s],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const n=this.containerRef.value;n&&(n.scrollTop=n.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(n=>n.level==="info").length,e=this.messages.filter(n=>n.level==="warning").length,r=this.messages.filter(n=>n.level==="error").length,s=this.messages.filter(n=>n.level==="debug").length;return j`
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
        `}render(){const t=this.getFilteredMessages();return j`
            <div class="log-terminal">
                <div class="messages" ${Fr(this.containerRef)}>
                    ${t.length===0?j`<div class="empty-state">No log messages</div>`:t.map(e=>j`
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
        `}};nn.styles=Nt`
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
    `;vi([Pt()],nn.prototype,"messages",2);vi([Pt()],nn.prototype,"autoScroll",2);vi([Pt()],nn.prototype,"filter",2);nn=vi([yt("k-log-terminal")],nn);var Cc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,nr=(t,e,r,s)=>{for(var n=s>1?void 0:s?Oc(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Cc(e,r,n),n};let jt=class extends Nn{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const t=ca.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),rr(Rn,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=Ze.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){if("command"in t){const e=t,r=e.disabled?.get();return j`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    ?disabled="${r}">
                    ${e.label}
                </k-command>
            `}if("html"in t){const r=t.html;return r instanceof Function?r():Ln(r)}return Lt}render(){const t=this.getKeybinding();return this.isInDropdown()?j`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${t?j`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?j`
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
                    
                    ${this.title?j`
                        <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:Lt}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?j`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                        </k-command>
                    `:Lt}
                </wa-dropdown>
            `:j`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${()=>this.handleClick()}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};jt.styles=Nt`
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
    `;nr([ze()],jt.prototype,"cmd",2);nr([ze()],jt.prototype,"title",2);nr([ze()],jt.prototype,"icon",2);nr([ze({type:Boolean})],jt.prototype,"disabled",2);nr([ze()],jt.prototype,"appearance",2);nr([ze()],jt.prototype,"size",2);nr([ze({type:Object,attribute:!1})],jt.prototype,"params",2);nr([ze()],jt.prototype,"dropdown",2);nr([ze()],jt.prototype,"placement",2);nr([Pt()],jt.prototype,"dropdownContributions",2);jt=nr([yt("k-command")],jt);var Tc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,Cr=(t,e,r,s)=>{for(var n=s>1?void 0:s?Lc(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Tc(e,r,n),n};let ur=class extends Nn{constructor(){super(...arguments),this.title="",this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small"}handleClick(t){!this.disabled&&this.action&&(t.stopPropagation(),this.action(t))}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}render(){return this.isInDropdown()?j`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${t=>this.handleClick(t)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                </wa-dropdown-item>
            `:j`
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
        `}};ur.styles=Nt`
        :host {
            display: inline-block;
        }
    `;Cr([ze({type:Object,attribute:!1})],ur.prototype,"action",2);Cr([ze()],ur.prototype,"title",2);Cr([ze()],ur.prototype,"icon",2);Cr([ze({type:Boolean})],ur.prototype,"disabled",2);Cr([ze()],ur.prototype,"appearance",2);Cr([ze()],ur.prototype,"variant",2);Cr([ze()],ur.prototype,"size",2);ur=Cr([yt("k-action")],ur);var Pc=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,ls=(t,e,r,s)=>{for(var n=s>1?void 0:s?Rc(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Pc(e,r,n),n};let Tn=class extends Nn{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return j`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Tn.styles=Nt`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;ls([ze()],Tn.prototype,"message",2);ls([ze()],Tn.prototype,"icon",2);Tn=ls([yt("k-no-content")],Tn);Ue.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>ot(()=>import("./git-extension-BNwvwxW4.js"),__vite__mapDeps([0,1,2])),icon:"code-branch",experimental:!0});Ue.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>ot(()=>import("./pyterminal-extension-_Zs4VKhR.js"),__vite__mapDeps([3,1,2,4])),icon:"k python",experimental:!0});Ue.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>ot(()=>import("./k-linuxterminal-DPXrSYf7.js"),__vite__mapDeps([5,1,2,4])),icon:"terminal",experimental:!0});Ue.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>ot(()=>import("./webllmservice-B15egg_e.js"),__vite__mapDeps([6,1,2])),icon:"robot"});Ue.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>ot(()=>import("./p12-splitter-D0lC7m-2.js"),__vite__mapDeps([7,1,2])),icon:"certificate"});Ue.registerExtension({id:"system.pythonpackagemanager",name:"Python Package Manager",description:"Manage Python packages for notebooks and other Python-based extensions",loader:()=>ot(()=>import("./package-manager-extension-DQGODV16.js"),__vite__mapDeps([8,1,2])),icon:"box"});Ue.registerExtension({id:"system.notebook",name:"Jupyter-like Notebook Editor",description:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>ot(()=>import("./notebook-extension-f7FbWyHM.js"),__vite__mapDeps([9,1,2,10,11,8])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});Ue.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>ot(()=>import("./command-palette-extension-BpYdKWb4.js"),__vite__mapDeps([12,1,2])),icon:"terminal"});Ue.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>ot(()=>import("./download-extension-DneQZfIP.js"),__vite__mapDeps([13,1,2])),icon:"download"});Ue.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>ot(()=>import("./unzip-extension-DeNlJs4w.js"),__vite__mapDeps([14,1,2])),icon:"box-archive"});Ue.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>ot(()=>import("./md-editor-extension-Bz_f1jPx.js"),__vite__mapDeps([15,1,2])),icon:"book"});Ue.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>ot(()=>import("./monaco-editor-extension-DM1grs-N.js"),__vite__mapDeps([16,10,1,2,11,8])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});Ue.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>ot(()=>import("./memory-usage-extension-DBAKT0jH.js"),__vite__mapDeps([17,1,2])),icon:"microchip"});Ue.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>ot(()=>import("./webdav-extension-C1hLPrho.js"),__vite__mapDeps([18,1,2])),icon:"cloud"});Ue.registerExtension({id:"system.settings-tree",name:"Settings Tree Editor",description:"Tree-based editor for settings with in-place editing",loader:()=>ot(()=>import("./settings-tree-extension-J2zm40cO.js"),__vite__mapDeps([19,1,2])),icon:"sitemap"});Ue.registerExtension({id:"system.ai-system",name:"AI System",description:"Modern AI service with streaming support and agent workflows",loader:()=>ot(()=>import("./ai-system-extension-C5e0CsCs.js"),__vite__mapDeps([20,1,2])),icon:"robot"});const $c="events/aiservice/streamStarted",Dc="events/aiservice/streamChunk",Nc="events/aiservice/streamComplete",Ei="events/aiservice/streamError",Mc="events/aiservice/aiConfigChanged",Fc="events/aiservice/agentWorkflowStarted",qc="events/aiservice/agentWorkflowComplete",zc="events/aiservice/agentWorkflowError",zn="aiservice.agents",Ht="aiservice.chatProviders",Hn="aiConfig",Uc={defaultProvider:"ollama",providers:[]};async function*jc(t){const e=new TextDecoder;let r="";try{for(;;){const{done:s,value:n}=await t.read();if(s)break;r+=e.decode(n,{stream:!0});const l=r.split(`
`);r=l.pop()||"";for(const a of l)if(a.trim()!==""&&a.startsWith("data: ")){const p=a.slice(6).trim();if(p==="[DONE]"){yield{type:"done",content:""};continue}try{const f=JSON.parse(p);if(f.error){yield{type:"error",content:f.error.message||"Unknown error",metadata:f.error};continue}const w=f.choices?.[0]?.delta;w?.content&&(yield{type:"token",content:w.content,message:{role:w.role||"assistant",content:f.choices?.[0]?.message?.content||w.content}})}catch{continue}}}if(r.trim()&&r.startsWith("data: ")){const s=r.slice(6).trim();if(s!=="[DONE]")try{const n=JSON.parse(s),l=n.choices?.[0]?.delta;l?.content&&(yield{type:"token",content:l.content,message:{role:l.role||"assistant",content:n.choices?.[0]?.message?.content||l.content}})}catch{}}yield{type:"done",content:""}}finally{t.releaseLock()}}async function*Wc(t){const e=new TextDecoder;let r="";try{for(;;){const{done:s,value:n}=await t.read();if(s)break;r+=e.decode(n,{stream:!0});const l=r.split(`
`);r=l.pop()||"";for(const a of l)if(a.trim()!=="")try{const p=JSON.parse(a);if(p.error){yield{type:"error",content:p.error,metadata:p};continue}if(p.done){yield{type:"done",content:""};continue}p.message?.content?yield{type:"token",content:p.message.content,message:{role:p.message.role||"assistant",content:p.message.content}}:p.response&&(yield{type:"token",content:p.response,message:{role:"assistant",content:p.response}})}catch{continue}}if(r.trim())try{const s=JSON.parse(r);s.message?.content&&(yield{type:"token",content:s.message.content,message:{role:s.message.role||"assistant",content:s.message.content}})}catch{}yield{type:"done",content:""}}finally{t.releaseLock()}}const Bc={name:"openai-api-streaming",canHandle:t=>!0,streamingApi:async function*(t,e){const r=await fetch(t.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${t.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify({model:t.model,stream:!0,messages:t.messages,...t.chatConfig.parameters}),signal:e});if(!r.ok){const l=await r.text().catch(()=>"Unknown error");yield{type:"error",content:`HTTP ${r.status}: ${l}`,metadata:{status:r.status,statusText:r.statusText}};return}const s=r.headers.get("content-type")||"",n=r.body?.getReader();if(!n){yield{type:"error",content:"Response body is not readable"};return}s.includes("text/event-stream")||t.chatConfig.chatApiEndpoint.includes("openai")?yield*jc(n):yield*Wc(n)}};class Vc{constructor(){this.streamingFetchers=[],this.activeRequests=new Map,rr(En,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.checkAIConfig().then()}getAgentContributions(){return Ze.getContributions(zn)}rewriteChatHistoryForAgent(e,r){return e.map(s=>s.role==="user"?{role:s.role,content:s.content}:s.role===r?{role:"assistant",content:s.content}:{role:"user",content:`***Agent '${s.role}' replied:***
${s.content}`})}async prepareAgentPrompt(e,r,s,n){const l=this.createAgentContext(s,n,{userPrompt:r[r.length-1]?.content||""});e.hooks?.beforeSend&&await e.hooks.beforeSend(r,l);let a=e.sysPrompt;typeof a=="function"&&(a=a());const p=this.sanitizeMessagesForAPI(r),f=this.rewriteChatHistoryForAgent(p,e.role),w=f.length-1;let L=f[w];if(e.promptEnhancers?.length){const k=[...e.promptEnhancers].sort((A,D)=>(D.priority||0)-(A.priority||0));let y=L.content;for(const A of k)y=await A.enhance(y,l);L.content=y}return f.unshift({role:"system",content:a}),{messages:f,userPromptIndex:w}}createAgentContext(e,r,s={}){return{...e,...r.getProxy(),...s}}createFinalMessage(e,r){return{role:e.role,content:r.content,actions:r.actions,requiresAttention:r.requiresAttention,attentionRequests:r.attentionRequests,canContinue:r.canContinue}}createAgentOptions(e,r,s,n){return{chatContext:{history:r.map(a=>({role:a.role,content:a.content}))},chatConfig:s,callContext:n.callContext,stream:n.stream??!0,signal:n.signal,onToken:a=>n.onToken?.(e.role,a),onStatus:a=>n.onStatus?.(e.role,a)}}async processAgentMessage(e,r,s,n){const l=this.createAgentContext(s,n,{message:r});let a={...r};if(e.messageProcessors?.length){const f=[...e.messageProcessors].sort((w,L)=>(L.priority||0)-(w.priority||0));for(const w of f)a=await w.process(a,l)}e.hooks?.afterReceive&&await e.hooks.afterReceive(a,l);const p=a.actions?.some(f=>f.requiresAttention)||a.attentionRequests?.some(f=>f.requiresAction)||!1;return{...a,requiresAttention:p}}async handleUserAttention(e,r,s,n){if(!r.requiresAttention||!s.userAttentionHandler)return!0;const l=[];if(r.attentionRequests&&l.push(...r.attentionRequests),r.actions)for(const f of r.actions)f.requiresAttention&&f.attentionRequest&&l.push(f.attentionRequest);if(l.length===0)return!0;if(n.pendingAttention||(n.pendingAttention=new Map),n.pendingAttention.set(e,l),s.onAttentionRequest)for(const f of l)s.onAttentionRequest(e,f);if(s.pauseOnAttention)return n.paused=!0,n.continuationToken=`${e}-${Date.now()}-${Math.random()}`,!1;const a=s.userAttentionHandler,p=this.createAgentContext(s.sharedState||{},s.callContext,{message:r});for(const f of l)if(a.onAttentionRequest){const w=await a.onAttentionRequest(f,p);if(f.requiresAction&&(w===!1||w===null))return!1;w&&typeof w=="string"&&(p[`attention_${f.type}_result`]=w)}else switch(f.type){case"confirmation":if(a.onConfirmation&&!await a.onConfirmation(f.message,p)&&f.requiresAction)return!1;break;case"input":if(a.onInput){const w=await a.onInput(f.message,void 0,p);if(!w&&f.requiresAction)return!1;w&&(p.attention_input_result=w)}break}return!0}async continueWorkflow(e,r,s){const n={sharedState:{...s.sharedState,...Object.fromEntries(r)}},l={...s,sharedState:n.sharedState,pauseOnAttention:!1};return this.executeAgentWorkflow(l)}async checkAIConfig(){if(!this.aiConfig){if(this.aiConfig=await Gt.get(Hn),!this.aiConfig){const e={...Uc,providers:[]};await Gt.set(Hn,e),this.aiConfig=await Gt.get(Hn)}Ye(Mc,this.aiConfig)}}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const r=e.find(s=>s.name===this.aiConfig?.defaultProvider);if(r)return r}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig&&(this.aiConfig.defaultProvider=e,await Gt.set(Hn,this.aiConfig)),this.getDefaultProvider()}createMessage(e){return{role:"user",content:e}}registerStreamingFetcher(e){this.streamingFetchers.push(e)}async*streamCompletion(e){const r=`${Date.now()}-${Math.random()}`,s=new AbortController;this.activeRequests.set(r,s),e.signal&&e.signal.addEventListener("abort",()=>{s.abort()});const n=e.signal||s.signal;try{e.onStatus?.("starting"),Ye($c,{requestId:r,options:e});const l=e.chatConfig||await this.getDefaultProvider(),a=this.sanitizeMessagesForAPI(e.chatContext.history),p={model:l.model,stream:!0,messages:a,chatConfig:l},f=this.streamingFetchers.find(y=>y.canHandle(l))||Bc;let w="",L={role:"assistant",content:""};for await(const y of f.streamingApi(p,n)){if(y.type==="error"){e.onStatus?.("error"),Ye(Ei,{requestId:r,chunk:y}),yield y;break}if(y.type==="token")w+=y.content,L.content=w,y.message?.role&&(L.role=y.message.role),e.onToken?.(y.content),e.onStatus?.("streaming"),e.onProgress?.({received:w.length}),Ye(Dc,{requestId:r,chunk:y}),yield y;else if(y.type==="done"){e.onStatus?.("complete"),Ye(Nc,{requestId:r}),yield y;break}else yield y}return{message:{role:L.role||"assistant",content:w||""}}}catch(l){if(l instanceof Error&&l.name==="AbortError")throw e.onStatus?.("error"),Ye(Ei,{requestId:r,error:"Request cancelled"}),l;e.onStatus?.("error");const a=l instanceof Error?l.message:String(l);throw Ye(Ei,{requestId:r,error:a}),yield{type:"error",content:a,metadata:{error:l}},l}finally{this.activeRequests.delete(r)}}filterAndSortAgents(e,r){return e.filter(s=>s.canHandle?s.canHandle(r):!0).sort((s,n)=>(n.priority||0)-(s.priority||0))}messagesMapToArray(e){return Array.from(e.values())}sanitizeMessageForAPI(e){return{role:e.role,content:e.content}}sanitizeMessagesForAPI(e){return e.map(r=>this.sanitizeMessageForAPI(r))}async handleStreamingPrompt(e){const r=this.getAgentContributions(),s=this.createAgentContext({},e.callContext,{userPrompt:e.chatContext.history[e.chatContext.history.length-1]?.content||""}),n=this.filterAndSortAgents(r,s),l=n.length>0?n.map(f=>f.role):["assistant"],a=await this.executeAgentWorkflow({chatContext:e.chatContext,chatConfig:e.chatConfig,callContext:e.callContext,execution:"parallel",stream:e.stream,signal:e.signal,onToken:(f,w)=>{e.onToken?.(w)},onStatus:(f,w)=>{e.onStatus?.(w)},roles:l}),p=this.messagesMapToArray(a.messages);return p.length===1?p[0]:p}async handleStreamingPromptDirect(e){const r=this.streamCompletion(e);let s;for(;;){if(s=await r.next(),s.done)return s.value.message;const n=s.value;if(n.type==="error")throw new Error(n.content);if(n.type==="done"){const l=await r.next();if(l.done&&l.value)return l.value.message;if(!l.done)continue;throw new Error("Stream completed without return value")}}}cancelRequest(e){const r=this.activeRequests.get(e);return r?(r.abort(),this.activeRequests.delete(e),!0):!1}async executeAgentWorkflow(e){const r=`workflow-${Date.now()}-${Math.random()}`,s=e.execution||"parallel",n=e.sharedState||{},l={messages:new Map,sharedState:{...n},errors:new Map};Ye(Fc,{workflowId:r,options:e});try{let p=this.getAgentContributions().filter(f=>!(e.roles&&!e.roles.includes(f.role)));if(e.roles&&e.roles.length>0)p=p.sort((f,w)=>(w.priority||0)-(f.priority||0));else{const f=this.createAgentContext(n,e.callContext);p=this.filterAndSortAgents(p,f)}switch(p.length===0&&(!e.roles||!e.roles.includes("assistant"))&&p.push({role:"assistant",label:"Assistant",description:"General assistant",sysPrompt:"You are a helpful AI assistant.",priority:0}),s){case"parallel":await this.executeParallelWorkflow(p,e,l);break;case"sequential":await this.executeSequentialWorkflow(p,e,l);break;case"conditional":await this.executeConditionalWorkflow(p,e,l);break}return Ye(qc,{workflowId:r,results:l}),l}catch(a){const p=a instanceof Error?a:new Error(String(a));throw Ye(zc,{workflowId:r,error:p}),p}}async executeAgent(e,r,s,n,l,a){l.onAgentStart?.(e.role);const{messages:p}=await this.prepareAgentPrompt(e,r,s,l.callContext),f=this.createAgentOptions(e,p,n,l),w=await this.handleStreamingPromptDirect(f),L=await this.processAgentMessage(e,w,s,l.callContext),k=this.createFinalMessage(e,L);return!await this.handleUserAttention(e.role,k,l,a)&&l.pauseOnAttention?null:(a.messages.set(e.role,k),l.onAgentComplete?.(e.role,k),k)}async executeParallelWorkflow(e,r,s){const n=r.chatConfig||await this.getDefaultProvider(),l=e.map(async a=>{try{await this.executeAgent(a,r.chatContext.history,s.sharedState,n,r,s)}catch(p){const f=p instanceof Error?p:new Error(String(p));s.errors.set(a.role,f),r.onAgentError?.(a.role,f)}});await Promise.all(l)}createAgentContextWithPreviousAgents(e,r,s){return this.createAgentContext(e,r.callContext,{previousAgents:Array.from(s.messages.entries()).map(([n,l])=>({role:n,content:l.content}))})}updateWorkflowState(e,r,s,n,l){return r.push(e),s={...s,...n,message:e},l.sharedState=s,{currentMessages:r,accumulatedState:s}}async executeSequentialWorkflow(e,r,s){const n=r.chatConfig||await this.getDefaultProvider();let l=[...r.chatContext.history],a={...s.sharedState};for(const p of e)try{const f=this.createAgentContextWithPreviousAgents(a,r,s),w=await this.executeAgent(p,l,a,n,r,s);if(!w)break;const L=this.updateWorkflowState(w,l,a,f,s);l=L.currentMessages,a=L.accumulatedState}catch(f){const w=f instanceof Error?f:new Error(String(f));s.errors.set(p.role,w),r.onAgentError?.(p.role,w);break}}async executeConditionalWorkflow(e,r,s){const n=r.chatConfig||await this.getDefaultProvider();let l=[...r.chatContext.history],a={...s.sharedState};for(const p of e)try{const f=this.createAgentContextWithPreviousAgents(a,r,s);if(p.canHandle&&!p.canHandle(f))continue;const w=await this.executeAgent(p,l,a,n,r,s);if(!w)break;const L=this.updateWorkflowState(w,l,a,f,s);l=L.currentMessages,a=L.accumulatedState}catch(f){const w=f instanceof Error?f:new Error(String(f));s.errors.set(p.role,w),r.onAgentError?.(p.role,w)}}}const ep=new Vc,Gc=`You are a specialized commands execution plan generator. Your sole purpose is to analyze user requests expressed in natural language and translate them into a precise sequence of command calls that can be executed by a software controller.

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
\`\`\``,Hc=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,Kc=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``;class Jc{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,rr(_n,()=>{})}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const r=l=>{const a=l.detail;a&&Array.from(a.querySelectorAll("*")).filter(f=>f instanceof Tt).forEach(f=>{Ge.set(f),f.isEditor&&Qn.set(f)})};e.addEventListener("tab-shown",r);const s=l=>{const a=l.detail;Array.from(a.querySelectorAll("*")).filter(f=>f instanceof Tt).forEach(f=>{Ge.get()==f&&Ge.set(null),Qn.get()==f&&Qn.set(null)})};e.addEventListener("tab-closed",s),xa(Pi,l=>{const p=l.closest("wa-tab-panel").getAttribute("name");e.markDirty(p,l.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((r,s)=>(s.ranking??0)-(r.ranking??0))}async handleInput(e){for(let r=0;r<this.editorInputHandlers.length;r++){const s=this.editorInputHandlers[r];if(s.canHandle(e))return await s.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${Yr}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const r=this.getEditorArea();if(!r){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(r),r.has(e.key)){r.activate(e.key);return}r.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}}const Er=new Jc;zt.put("editorRegistry",Er);let Yc=0;const Zc={enhance:async(t,e)=>{const r=Re.listCommands(e),s=JSON.stringify(r,null,2);return`${t}

***Available Commands:***
${s}`}},Qc={process:async(t,e)=>{if(!t)return t;try{const r=e.activeEditor;let s=t.content.trim();s=s.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim();let n=s.indexOf("[");if(n===-1)return st.warn(`No JSON array found in commands message. Content: ${s.substring(0,200)}`),t;let l=0,a=!1,p=!1,f=-1;for(let D=n;D<s.length;D++){const W=s[D];if(p){p=!1;continue}if(W==="\\"){p=!0;continue}if(W==='"'&&!p){a=!a;continue}if(!a){if(W==="[")l++;else if(W==="]"&&(l--,l===0)){f=D+1;break}}}if(f===-1)return st.warn(`Could not find complete JSON array. Content: ${s.substring(0,200)}`),t;const w=s.substring(n,f);let L;try{L=JSON.parse(w)}catch(D){return st.error(`Failed to parse JSON array: ${D}. JSON string length: ${w.length}, first 500 chars: ${w.substring(0,500)}`),t}if(!Array.isArray(L)||L.length===0)return t;let k=!0;const y=L.map(({id:D,summary:W},le)=>{const ke=Re.getCommand(D);return ke?`${le+1}. ${ke.name}
	- ${W||ke.description}`:(k=!1,`${le+1}. *INVALID COMMAND:* _${D}_`)}).join(`
`),A={...t,content:y,actions:t.actions||[]};return A.actions.push({label:"Show Commands Execution Plan",icon:"list",action:async()=>{const D=Yc++,W=`\`\`\`json
${JSON.stringify(L,null,2)}
\`\`\``,le=new Pa(W,`Commands Execution Plan (${D}).md`);await Er.loadEditor(le)}}),k&&A.actions.push({label:"Execute Commands",icon:"play",action:async()=>{const D=r?.getCommandStack()||new la;await Cn.runAsync("Executing commands",async()=>{st.debug("Executing commands: "+JSON.stringify(L));const W=Re.createExecutionContext(r);for(const le of L){const ke=Object.entries(le.parameters||{}).map(([z,R])=>(typeof R=="string"&&(R=R.replace(/{{(.*?)}}/g,(G,F)=>W[F.trim()]??"")),[z,R]));W.params=Object.fromEntries(ke),await D.execute(le.id,W)}})}}),A}catch(r){return st.error(`Error processing commands message: ${r}`),t}}};Ze.registerContribution(zn,{label:"Commander",description:"Commands execution plan generator",role:"commands",icon:"list",sysPrompt:Gc,canHandle:t=>{if(!t.activeEditor)return!1;const e=Re.listCommands(t);return Object.keys(e).length>0},promptEnhancers:[Zc],messageProcessors:[Qc]});const Ra=t=>t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function",Xc={enhance:async(t,e)=>{const r=e.activeEditor;if(!Ra(r))return t;const s=r.getEditor(),n=s.getModel(),l=n.getValueInRange(s.getSelection()),a=r.input?.data.getWorkspacePath();return l?`${t}

 Code selection within file "${a}":
${l}`:`${t}

Code in file "${a}":
${n.getValue()}`}},$a=(t,e,r)=>({label:r,description:`${r}`,role:`${t==="python"?"py":"js"}-programmer`,icon:"code",sysPrompt:e,canHandle:s=>{const n=s.activeEditor;return Ra(n)&&n.getLanguage()===t},promptEnhancers:[Xc]});Ze.registerContribution(zn,$a("python",Hc,"Python Assistant"));Ze.registerContribution(zn,$a("javascript",Kc,"JavaScript Assistant"));Ze.registerContribution(Ht,{target:Ht,label:"Ollama",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""}});Ze.registerContribution(Ht,{target:Ht,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1-mini",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});Ze.registerContribution(Ht,{target:Ht,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});Ze.registerContribution(Ht,{target:Ht,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});Ze.registerContribution(Ht,{target:Ht,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});Ze.registerContribution(Ht,{target:Ht,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr"}});pt({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}]},handler:{execute:async({params:t})=>{const e=await Rt.getWorkspace();if(!e){at("Please select a workspace!");return}let r=t?.path;const s=t?.contents,n=t?.ask,l=t?.extension;if((n||!r)&&(r=await Dn("Enter path to new file (directories will be created if not exist):",r||""),!r)||(l&&!r.endsWith(l)&&(r+=l),await e.getResource(r)&&!await an(`File "${r}" already exists. Do you want to overwrite it?`)))return;const p=await e.getResource(r,{create:!0});p?(s&&await p.saveContents(s),qt("File created: "+r)):at("Could not create file: "+r)}}});pt({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{let e,r=t.params&&t.params.path;if(r){const l=await Rt.getWorkspace();l&&(e=await l.getResource(r))}if(e||(e=Ut.get()),!e){at("No resource to rename provided!");return}const s=e.getName(),n=t.params?.newName||await Dn(`Enter new name for "${s}":`,s);if(!(!n||n===s))try{await e.rename(n),qt(`Resource renamed to: ${n}`)}catch(l){at(`Failed to rename ${s}: ${l.message}`)}}}});pt({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{let e,r=t.params&&t.params.path;if(r){const l=await Rt.getWorkspace();l&&(e=await l.getResource(r))}if(e||(e=Ut.get()),!e){at("No resource to delete provided!");return}r=e.getWorkspacePath();const s=t.params&&t.params.confirm;let n=!0;if((s===void 0||s===!0)&&(n=await an(`Are you sure you want to delete ${r}?`)),n)try{await e.delete(),qt("Resource deleted: "+r)}catch(l){at(`Resource ${r} could not be deleted: ${l.message||l}`)}}}});pt({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Rt.connectWorkspace(e)).catch(e=>{at(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});pt({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Rt.getWorkspace();e||at("No workspace selected."),e.touch()}}});pt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Rt.getWorkspace();e||at("No workspace selected.");const r=t.params.path,s=await e?.getResource(r);await Er.loadEditor(s)}}});var gr={},Qt={},Ms;function eu(){if(Ms)return Qt;Ms=1,Object.defineProperty(Qt,"__esModule",{value:!0});function t(u){const i=u||"";return function(){throw new Error("this method "+i+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(u,i){if(!u)throw new Error(i||"Assertion failed")}function r(u,i,o){let d;Object.defineProperty(u,i,{get(){return d||(d=o.call(this)),d}})}function s(u){return u&&Object.assign({},u)}function n(u,i){const o=[];for(;i-- >0;)o.push(u());return o}function l(u,i){return new Array(i+1).join(u)}function a(u,i){return n(()=>u,i)}function p(u){const i=[];for(let o=0;o<u.length;o++){const d=u[o];u.lastIndexOf(d)!==o&&i.indexOf(d)<0&&i.push(d)}return i}function f(u){const i=[];return u.forEach(o=>{i.indexOf(o)<0&&i.push(o)}),i}function w(u){const i=u[0];return i===i.toUpperCase()}function L(u){return!w(u)}function k(u,i,o){const d=o||" ";return u.length<i?l(d,i-u.length)+u:u}function y(){this.strings=[]}y.prototype.append=function(u){this.strings.push(u)},y.prototype.contents=function(){return this.strings.join("")};const A=u=>String.fromCodePoint(parseInt(u,16));function D(u){if(u.charAt(0)==="\\")switch(u.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return A(u.slice(2,4));case"u":return u.charAt(2)==="{"?A(u.slice(3,-1)):A(u.slice(2,6));default:return u.charAt(1)}else return u}function W(u){if(u==null)return String(u);const i=Object.prototype.toString.call(u);try{let o;return u.constructor&&u.constructor.name?o=u.constructor.name:i.indexOf("[object ")===0?o=i.slice(8,-1):o=typeof u,o+": "+JSON.stringify(String(u))}catch{return i}}var le=Object.freeze({__proto__:null,abstract:t,assert:e,defineLazyProperty:r,clone:s,repeatFn:n,repeatStr:l,repeat:a,getDuplicates:p,copyWithoutDuplicates:f,isSyntactic:w,isLexical:L,padLeft:k,StringBuffer:y,unescapeCodePoint:D,unexpectedObjToString:W});const ke={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class z{constructor(){if(this.constructor===z)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(i){return i&&(this.source=i.trimmed()),this}}const R=Object.create(z.prototype),G=Object.create(z.prototype);class F extends z{constructor(i){super(),this.obj=i}}class O extends z{constructor(i,o){super(),this.from=i,this.to=o,this.matchCodePoint=i.length>1||o.length>1}}class B extends z{constructor(i){super(),this.index=i}}class Z extends z{constructor(i){super(),this.terms=i}}class Se extends Z{constructor(i,o,d){const v=i.rules[o].body;super([d,v]),this.superGrammar=i,this.name=o,this.body=d}}class Te extends Z{constructor(i,o,d,v){const C=i.rules[o].body;super([...d,C,...v]),this.superGrammar=i,this.ruleName=o,this.expansionPos=d.length}}class ce extends z{constructor(i){super(),this.factors=i}}class q extends z{constructor(i){super(),this.expr=i}}class ie extends q{}class me extends q{}class Ie extends q{}ie.prototype.operator="*",me.prototype.operator="+",Ie.prototype.operator="?",ie.prototype.minNumMatches=0,me.prototype.minNumMatches=1,Ie.prototype.minNumMatches=0,ie.prototype.maxNumMatches=Number.POSITIVE_INFINITY,me.prototype.maxNumMatches=Number.POSITIVE_INFINITY,Ie.prototype.maxNumMatches=1;class se extends z{constructor(i){super(),this.expr=i}}class ee extends z{constructor(i){super(),this.expr=i}}class ae extends z{constructor(i){super(),this.expr=i}}class V extends z{constructor(i,o=[]){super(),this.ruleName=i,this.args=o}isSyntactic(){return w(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class we extends z{constructor(i){super(),this.category=i,this.pattern=ke[i]}}function Le(u,i){let o;return i?(o=new Error(i.getLineAndColumnMessage()+u),o.shortMessage=u,o.interval=i):o=new Error(u),o}function b(){return Le("Interval sources don't match")}function I(u){const i=new Error;return Object.defineProperty(i,"message",{enumerable:!0,get(){return u.message}}),Object.defineProperty(i,"shortMessage",{enumerable:!0,get(){return"Expected "+u.getExpectedText()}}),i.interval=u.getInterval(),i}function pe(u,i,o){const d=i?`Grammar ${u} is not declared in namespace '${i}'`:"Undeclared grammar "+u;return Le(d,o)}function Ee(u,i){return Le("Grammar "+u.name+" is already declared in this namespace")}function Ke(u){return Le(`Grammar '${u.name}' does not support incremental parsing`)}function De(u,i,o){return Le("Rule "+u+" is not declared in grammar "+i,o)}function T(u,i,o){return Le("Cannot override rule "+u+" because it is not declared in "+i,o)}function M(u,i,o){return Le("Cannot extend rule "+u+" because it is not declared in "+i,o)}function P(u,i,o,d){let v="Duplicate declaration for rule '"+u+"' in grammar '"+i+"'";return i!==o&&(v+=" (originally declared in '"+o+"')"),Le(v,d)}function H(u,i,o,d){return Le("Wrong number of parameters for rule "+u+" (expected "+i+", got "+o+")",d)}function ne(u,i,o,d){return Le("Wrong number of arguments for rule "+u+" (expected "+i+", got "+o+")",d)}function X(u,i,o){return Le("Duplicate parameter names in rule "+u+": "+i.join(", "),o)}function U(u,i){return Le("Invalid parameter to rule "+u+": "+i+" has arity "+i.getArity()+", but parameter expressions must have arity 1",i.source)}const re="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function ve(u,i){return Le("Cannot apply syntactic rule "+u+" from here (inside a lexical context)",i.source)}function $e(u){const{ruleName:i}=u;return Le(`applySyntactic is for syntactic rules, but '${i}' is a lexical rule. `+re,u.source)}function Ne(u){return Le("applySyntactic is not required here (in a syntactic context)",u.source)}function ge(u,i){return Le("Incorrect argument type: expected "+u,i.source)}function xe(u){return Le("'...' can appear at most once in a rule body",u.source)}function Pe(u){const i=u._node;e(i&&i.isNonterminal()&&i.ctorName==="escapeChar_unicodeCodePoint");const o=u.children.slice(1,-1).map(v=>v.source),d=o[0].coverageWith(...o.slice(1));return Le(`U+${d.contents} is not a valid Unicode code point`,d)}function he(u,i){const o=i.length>0?i[i.length-1].args:[];let v="Nullable expression "+u.expr.substituteParams(o)+" is not allowed inside '"+u.operator+"' (possible infinite loop)";if(i.length>0){const C=i.map(N=>new V(N.ruleName,N.args)).join(`
`);v+=`
Application stack (most recent application last):
`+C}return Le(v,u.expr.source)}function dt(u,i,o,d){return Le("Rule "+u+" involves an alternation which has inconsistent arity (expected "+i+", got "+o+")",d.source)}function Mt(u){const i=u.map(o=>o.message);return Le(["Errors:"].concat(i).join(`
- `),u[0].interval)}function bt(u,i,o,d){let v=d.slice(0,-1).map(Q=>{const fe="  "+Q[0].name+" > "+Q[1];return Q.length===3?fe+" for '"+Q[2]+"'":fe}).join(`
`);v+=`
  `+i+" > "+u;let C="";u==="_iter"&&(C=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const N=[`Missing semantic action for '${u}' in ${o} '${i}'.${C}`,"Action stack (most recent call last):",v].join(`
`),te=Le(N);return te.name="missingSemanticAction",te}function ht(u){if(u.length===1)throw u[0];if(u.length>1)throw Mt(u)}function wt(u){let i=0;return u.map(d=>{const v=d.toString();return i=Math.max(i,v.length),v}).map(d=>k(d,i))}function Wt(u,i,o){const d=u.length,v=u.slice(0,o),C=u.slice(o+i.length);return(v+i+C).substr(0,d)}function ir(...u){const i=this,{offset:o}=i,{repeatStr:d}=le,v=new y;v.append("Line "+i.lineNum+", col "+i.colNum+`:
`);const C=wt([i.prevLine==null?0:i.lineNum-1,i.lineNum,i.nextLine==null?0:i.lineNum+1]),N=(J,K,ue)=>{v.append(ue+C[J]+" | "+K+`
`)};i.prevLine!=null&&N(0,i.prevLine,"  "),N(1,i.line,"> ");const te=i.line.length;let Q=d(" ",te+1);for(let J=0;J<u.length;++J){let K=u[J][0],ue=u[J][1];e(K>=0&&K<=ue,"range start must be >= 0 and <= end");const Ae=o-i.colNum+1;K=Math.max(0,K-Ae),ue=Math.min(ue-Ae,te),Q=Wt(Q,d("~",ue-K),K)}const fe=2+C[1].length+3;return v.append(d(" ",fe)),Q=Wt(Q,"^",i.colNum-1),v.append(Q.replace(/ +$/,"")+`
`),i.nextLine!=null&&N(2,i.nextLine,"  "),v.contents()}let wr=[];function Kt(u){wr.push(u)}function oe(u){wr.forEach(i=>{i(u)}),wr=null}function xr(u,i){let o=1,d=1,v=0,C=0,N=null,te=null,Q=-1;for(;v<i;){const K=u.charAt(v++);K===`
`?(o++,d=1,Q=C,C=v):K!=="\r"&&d++}let fe=u.indexOf(`
`,C);if(fe===-1)fe=u.length;else{const K=u.indexOf(`
`,fe+1);N=K===-1?u.slice(fe):u.slice(fe,K),N=N.replace(/^\r?\n/,"").replace(/\r$/,"")}Q>=0&&(te=u.slice(Q,C).replace(/\r?\n$/,""));const J=u.slice(C,fe).replace(/\r$/,"");return{offset:i,lineNum:o,colNum:d,line:J,prevLine:te,nextLine:N,toString:ir}}function dr(u,i,...o){return xr(u,i).toString(...o)}const Ft=(()=>{let u=0;return i=>""+i+u++})();class nt{constructor(i,o,d){this.sourceString=i,this.startIdx=o,this.endIdx=d}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...i){return nt.coverage(...i,this)}collapsedLeft(){return new nt(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new nt(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return xr(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const i=[this.startIdx,this.endIdx];return dr(this.sourceString,this.startIdx,i)}minus(i){if(this.sourceString!==i.sourceString)throw b();return this.startIdx===i.startIdx&&this.endIdx===i.endIdx?[]:this.startIdx<i.startIdx&&i.endIdx<this.endIdx?[new nt(this.sourceString,this.startIdx,i.startIdx),new nt(this.sourceString,i.endIdx,this.endIdx)]:this.startIdx<i.endIdx&&i.endIdx<this.endIdx?[new nt(this.sourceString,i.endIdx,this.endIdx)]:this.startIdx<i.startIdx&&i.startIdx<this.endIdx?[new nt(this.sourceString,this.startIdx,i.startIdx)]:[this]}relativeTo(i){if(this.sourceString!==i.sourceString)throw b();return e(this.startIdx>=i.startIdx&&this.endIdx<=i.endIdx,"other interval does not cover this one"),new nt(this.sourceString,this.startIdx-i.startIdx,this.endIdx-i.startIdx)}trimmed(){const{contents:i}=this,o=this.startIdx+i.match(/^\s*/)[0].length,d=this.endIdx-i.match(/\s*$/)[0].length;return new nt(this.sourceString,o,d)}subInterval(i,o){const d=this.startIdx+i;return new nt(this.sourceString,d,d+o)}}nt.coverage=function(u,...i){let{startIdx:o,endIdx:d}=u;for(const v of i){if(v.sourceString!==u.sourceString)throw b();o=Math.min(o,v.startIdx),d=Math.max(d,v.endIdx)}return new nt(u.sourceString,o,d)};const Bt=65535;class qe{constructor(i){this.source=i,this.pos=0,this.examinedLength=0}atEnd(){const i=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),i}next(){const i=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),i}nextCharCode(){const i=this.next();return i&&i.charCodeAt(0)}nextCodePoint(){const i=this.source.slice(this.pos++).codePointAt(0);return i>Bt&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),i}matchString(i,o){let d;if(o){for(d=0;d<i.length;d++){const v=this.next(),C=i[d];if(v==null||v.toUpperCase()!==C.toUpperCase())return!1}return!0}for(d=0;d<i.length;d++)if(this.next()!==i[d])return!1;return!0}sourceSlice(i,o){return this.source.slice(i,o)}interval(i,o){return new nt(this.source,i,o||this.pos)}}class m{constructor(i,o,d,v,C,N,te){this.matcher=i,this.input=o,this.startExpr=d,this._cst=v,this._cstOffset=C,this._rightmostFailurePosition=N,this._rightmostFailures=te,this.failed()&&(r(this,"message",function(){const Q="Expected "+this.getExpectedText();return dr(this.input,this.getRightmostFailurePosition())+Q}),r(this,"shortMessage",function(){const Q="expected "+this.getExpectedText(),fe=xr(this.input,this.getRightmostFailurePosition());return"Line "+fe.lineNum+", col "+fe.colNum+": "+Q}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const i=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=i.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const i=new y;let o=this.getRightmostFailures();o=o.filter(d=>!d.isFluffy());for(let d=0;d<o.length;d++)d>0&&(d===o.length-1?i.append(o.length>2?", or ":" or "):i.append(", ")),i.append(o[d].toString());return i.contents()}getInterval(){const i=this.getRightmostFailurePosition();return new nt(this.input,i,i)}}class x{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(i){return this.applicationMemoKeyStack.indexOf(i.toMemoKey())>=0}enter(i){this.applicationMemoKeyStack.push(i.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(i,o){o.isLeftRecursion=!0,o.headApplication=i,o.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=o;const{applicationMemoKeyStack:d}=this,v=d.indexOf(i.toMemoKey())+1,C=d.slice(v);o.isInvolved=function(N){return C.indexOf(N)>=0},o.updateInvolvedApplicationMemoKeys=function(){for(let N=v;N<d.length;N++){const te=d[N];this.isInvolved(te)||C.push(te)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(i){if(!i.isLeftRecursion)return!0;const{applicationMemoKeyStack:o}=this;for(let d=0;d<o.length;d++){const v=o[d];if(i.isInvolved(v))return!1}return!0}memoize(i,o){return this.memo[i]=o,this.maxExaminedLength=Math.max(this.maxExaminedLength,o.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,o.rightmostFailureOffset),o}clearObsoleteEntries(i,o){if(i+this.maxExaminedLength<=o)return;const{memo:d}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(d).forEach(v=>{const C=d[v];i+C.examinedLength>o?delete d[v]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,C.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,C.rightmostFailureOffset))})}}const E="✗",c="✓",h="⋅",g="⇒",_="␉",S="␊",$="␍",Y={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function de(u){return a(" ",u).join("")}function ye(u,i,o){const d=je(u.slice(i,i+o));return d.length<o?d+a(" ",o-d.length).join(""):d}function je(u){return typeof u=="string"?u.replace(/ /g,h).replace(/\t/g,_).replace(/\n/g,S).replace(/\r/g,$):String(u)}class _e{constructor(i,o,d,v,C,N,te){this.input=i,this.pos=this.pos1=o,this.pos2=d,this.source=new nt(i,o,d),this.expr=v,this.bindings=N,this.children=te||[],this.terminatingLREntry=null,this._flags=C?Y.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(i){const o=new _e(this.input,this.pos,this.pos2,i,this.succeeded,this.bindings,this.children);return o.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,o.isImplicitSpaces=this.isImplicitSpaces,o.isMemoized=this.isMemoized,o.isRootNode=this.isRootNode,o.terminatesLR=this.terminatesLR,o.terminatingLREntry=this.terminatingLREntry,o}recordLRTermination(i,o){this.terminatingLREntry=new _e(this.input,this.pos,this.pos2,this.expr,!1,[o],[i]),this.terminatingLREntry.terminatesLR=!0}walk(i,o){let d=i;typeof d=="function"&&(d={enter:d});function v(C,N,te){let Q=!0;d.enter&&d.enter.call(o,C,N,te)===_e.prototype.SKIP&&(Q=!1),Q&&(C.children.forEach(fe=>{v(fe,C,te+1)}),d.exit&&d.exit.call(o,C,N,te))}this.isRootNode?this.children.forEach(C=>{v(C,null,0)}):v(this,null,0)}toString(){const i=new y;return this.walk((o,d,v)=>{if(!o)return this.SKIP;if(o.expr.constructor.name!=="Alt"){if(i.append(ye(o.input,o.pos,10)+de(v*2+1)),i.append((o.succeeded?c:E)+" "+o.displayString),o.isHeadOfLeftRecursion&&i.append(" (LR)"),o.succeeded){const N=je(o.source.contents);i.append(" "+g+"  "),i.append(typeof N=="string"?'"'+N+'"':N)}i.append(`
`)}}),i.contents()}}_e.prototype.SKIP={},Object.keys(Y).forEach(u=>{const i=Y[u];Object.defineProperty(_e.prototype,u,{get(){return(this._flags&i)!==0},set(o){o?this._flags|=i:this._flags&=~i}})}),z.prototype.allowsSkippingPrecedingSpace=t("allowsSkippingPrecedingSpace"),R.allowsSkippingPrecedingSpace=G.allowsSkippingPrecedingSpace=V.prototype.allowsSkippingPrecedingSpace=F.prototype.allowsSkippingPrecedingSpace=O.prototype.allowsSkippingPrecedingSpace=we.prototype.allowsSkippingPrecedingSpace=function(){return!0},Z.prototype.allowsSkippingPrecedingSpace=q.prototype.allowsSkippingPrecedingSpace=ae.prototype.allowsSkippingPrecedingSpace=ee.prototype.allowsSkippingPrecedingSpace=se.prototype.allowsSkippingPrecedingSpace=B.prototype.allowsSkippingPrecedingSpace=ce.prototype.allowsSkippingPrecedingSpace=function(){return!1};let We;Kt(u=>{We=u});let Me;z.prototype.assertAllApplicationsAreValid=function(u,i){Me=0,this._assertAllApplicationsAreValid(u,i)},z.prototype._assertAllApplicationsAreValid=t("_assertAllApplicationsAreValid"),R._assertAllApplicationsAreValid=G._assertAllApplicationsAreValid=F.prototype._assertAllApplicationsAreValid=O.prototype._assertAllApplicationsAreValid=B.prototype._assertAllApplicationsAreValid=we.prototype._assertAllApplicationsAreValid=function(u,i){},ae.prototype._assertAllApplicationsAreValid=function(u,i){Me++,this.expr._assertAllApplicationsAreValid(u,i),Me--},Z.prototype._assertAllApplicationsAreValid=function(u,i){for(let o=0;o<this.terms.length;o++)this.terms[o]._assertAllApplicationsAreValid(u,i)},ce.prototype._assertAllApplicationsAreValid=function(u,i){for(let o=0;o<this.factors.length;o++)this.factors[o]._assertAllApplicationsAreValid(u,i)},q.prototype._assertAllApplicationsAreValid=se.prototype._assertAllApplicationsAreValid=ee.prototype._assertAllApplicationsAreValid=function(u,i){this.expr._assertAllApplicationsAreValid(u,i)},V.prototype._assertAllApplicationsAreValid=function(u,i,o=!1){const d=i.rules[this.ruleName],v=w(u)&&Me===0;if(!d)throw De(this.ruleName,i.name,this.source);if(!o&&w(this.ruleName)&&!v)throw ve(this.ruleName,this);const C=this.args.length,N=d.formals.length;if(C!==N)throw ne(this.ruleName,N,C,this.source);const te=We&&d===We.rules.applySyntactic;if(We&&d===We.rules.caseInsensitive&&!(this.args[0]instanceof F))throw ge('a Terminal (e.g. "abc")',this.args[0]);if(te){const fe=this.args[0];if(!(fe instanceof V))throw ge("a syntactic rule application",fe);if(!w(fe.ruleName))throw $e(fe);if(v)throw Ne(this)}this.args.forEach(fe=>{if(fe._assertAllApplicationsAreValid(u,i,te),fe.getArity()!==1)throw U(this.ruleName,fe)})},z.prototype.assertChoicesHaveUniformArity=t("assertChoicesHaveUniformArity"),R.assertChoicesHaveUniformArity=G.assertChoicesHaveUniformArity=F.prototype.assertChoicesHaveUniformArity=O.prototype.assertChoicesHaveUniformArity=B.prototype.assertChoicesHaveUniformArity=ae.prototype.assertChoicesHaveUniformArity=we.prototype.assertChoicesHaveUniformArity=function(u){},Z.prototype.assertChoicesHaveUniformArity=function(u){if(this.terms.length===0)return;const i=this.terms[0].getArity();for(let o=0;o<this.terms.length;o++){const d=this.terms[o];d.assertChoicesHaveUniformArity();const v=d.getArity();if(i!==v)throw dt(u,i,v,d)}},Se.prototype.assertChoicesHaveUniformArity=function(u){const i=this.terms[0].getArity(),o=this.terms[1].getArity();if(i!==o)throw dt(u,o,i,this.terms[0])},ce.prototype.assertChoicesHaveUniformArity=function(u){for(let i=0;i<this.factors.length;i++)this.factors[i].assertChoicesHaveUniformArity(u)},q.prototype.assertChoicesHaveUniformArity=function(u){this.expr.assertChoicesHaveUniformArity(u)},se.prototype.assertChoicesHaveUniformArity=function(u){},ee.prototype.assertChoicesHaveUniformArity=function(u){this.expr.assertChoicesHaveUniformArity(u)},V.prototype.assertChoicesHaveUniformArity=function(u){},z.prototype.assertIteratedExprsAreNotNullable=t("assertIteratedExprsAreNotNullable"),R.assertIteratedExprsAreNotNullable=G.assertIteratedExprsAreNotNullable=F.prototype.assertIteratedExprsAreNotNullable=O.prototype.assertIteratedExprsAreNotNullable=B.prototype.assertIteratedExprsAreNotNullable=we.prototype.assertIteratedExprsAreNotNullable=function(u){},Z.prototype.assertIteratedExprsAreNotNullable=function(u){for(let i=0;i<this.terms.length;i++)this.terms[i].assertIteratedExprsAreNotNullable(u)},ce.prototype.assertIteratedExprsAreNotNullable=function(u){for(let i=0;i<this.factors.length;i++)this.factors[i].assertIteratedExprsAreNotNullable(u)},q.prototype.assertIteratedExprsAreNotNullable=function(u){if(this.expr.assertIteratedExprsAreNotNullable(u),this.expr.isNullable(u))throw he(this,[])},Ie.prototype.assertIteratedExprsAreNotNullable=se.prototype.assertIteratedExprsAreNotNullable=ee.prototype.assertIteratedExprsAreNotNullable=ae.prototype.assertIteratedExprsAreNotNullable=function(u){this.expr.assertIteratedExprsAreNotNullable(u)},V.prototype.assertIteratedExprsAreNotNullable=function(u){this.args.forEach(i=>{i.assertIteratedExprsAreNotNullable(u)})};class lt{constructor(i){this.matchLength=i}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(i){if(this.children)return this.children[i]}indexOfChild(i){return this.children.indexOf(i)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(i){const o=this.indexOfChild(i);if(o<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(o===0)throw new Error("cannot get child before first child");return this.childAt(o-1)}childAfter(i){const o=this.indexOfChild(i);if(o<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(o===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(o+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class Oe extends lt{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class tt extends lt{constructor(i,o,d,v){super(v),this.ruleName=i,this.children=o,this.childOffsets=d}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return L(this.ctorName)}isSyntactic(){return w(this.ctorName)}}class $t extends lt{constructor(i,o,d,v){super(d),this.children=i,this.childOffsets=o,this.optional=v}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}z.prototype.eval=t("eval"),R.eval=function(u){const{inputStream:i}=u,o=i.pos,d=i.nextCodePoint();return d!==void 0?(u.pushBinding(new Oe(String.fromCodePoint(d).length),o),!0):(u.processFailure(o,this),!1)},G.eval=function(u){const{inputStream:i}=u,o=i.pos;return i.atEnd()?(u.pushBinding(new Oe(0),o),!0):(u.processFailure(o,this),!1)},F.prototype.eval=function(u){const{inputStream:i}=u,o=i.pos;return i.matchString(this.obj)?(u.pushBinding(new Oe(this.obj.length),o),!0):(u.processFailure(o,this),!1)},O.prototype.eval=function(u){const{inputStream:i}=u,o=i.pos,d=this.matchCodePoint?i.nextCodePoint():i.nextCharCode();return d!==void 0&&this.from.codePointAt(0)<=d&&d<=this.to.codePointAt(0)?(u.pushBinding(new Oe(String.fromCodePoint(d).length),o),!0):(u.processFailure(o,this),!1)},B.prototype.eval=function(u){return u.eval(u.currentApplication().args[this.index])},ae.prototype.eval=function(u){u.enterLexifiedContext();const i=u.eval(this.expr);return u.exitLexifiedContext(),i},Z.prototype.eval=function(u){for(let i=0;i<this.terms.length;i++)if(u.eval(this.terms[i]))return!0;return!1},ce.prototype.eval=function(u){for(let i=0;i<this.factors.length;i++){const o=this.factors[i];if(!u.eval(o))return!1}return!0},q.prototype.eval=function(u){const{inputStream:i}=u,o=i.pos,d=this.getArity(),v=[],C=[];for(;v.length<d;)v.push([]),C.push([]);let N=0,te=o,Q;for(;N<this.maxNumMatches&&u.eval(this.expr);){if(i.pos===te)throw he(this,u._applicationStack);te=i.pos,N++;const ue=u._bindings.splice(u._bindings.length-d,d),Ae=u._bindingOffsets.splice(u._bindingOffsets.length-d,d);for(Q=0;Q<ue.length;Q++)v[Q].push(ue[Q]),C[Q].push(Ae[Q])}if(N<this.minNumMatches)return!1;let fe=u.posToOffset(o),J=0;if(N>0){const ue=v[d-1],Ae=C[d-1],Ve=Ae[Ae.length-1]+ue[ue.length-1].matchLength;fe=C[0][0],J=Ve-fe}const K=this instanceof Ie;for(Q=0;Q<v.length;Q++)u._bindings.push(new $t(v[Q],C[Q],J,K)),u._bindingOffsets.push(fe);return!0},se.prototype.eval=function(u){const{inputStream:i}=u,o=i.pos;u.pushFailuresInfo();const d=u.eval(this.expr);return u.popFailuresInfo(),d?(u.processFailure(o,this),!1):(i.pos=o,!0)},ee.prototype.eval=function(u){const{inputStream:i}=u,o=i.pos;return u.eval(this.expr)?(i.pos=o,!0):!1},V.prototype.eval=function(u){const i=u.currentApplication(),o=i?i.args:[],d=this.substituteParams(o),v=u.getCurrentPosInfo();if(v.isActive(d))return d.handleCycle(u);const C=d.toMemoKey(),N=v.memo[C];if(N&&v.shouldUseMemoizedResult(N)){if(u.hasNecessaryInfo(N))return u.useMemoizedResult(u.inputStream.pos,N);delete v.memo[C]}return d.reallyEval(u)},V.prototype.handleCycle=function(u){const i=u.getCurrentPosInfo(),{currentLeftRecursion:o}=i,d=this.toMemoKey();let v=i.memo[d];return o&&o.headApplication.toMemoKey()===d?v.updateInvolvedApplicationMemoKeys():v||(v=i.memoize(d,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),i.startLeftRecursion(this,v)),u.useMemoizedResult(u.inputStream.pos,v)},V.prototype.reallyEval=function(u){const{inputStream:i}=u,o=i.pos,d=u.getCurrentPosInfo(),v=u.grammar.rules[this.ruleName],{body:C}=v,{description:N}=v;u.enterApplication(d,this),N&&u.pushFailuresInfo();const te=i.examinedLength;i.examinedLength=0;let Q=this.evalOnce(C,u);const fe=d.currentLeftRecursion,J=this.toMemoKey(),K=fe&&fe.headApplication.toMemoKey()===J;let ue;u.doNotMemoize?u.doNotMemoize=!1:K?(Q=this.growSeedResult(C,u,o,fe,Q),d.endLeftRecursion(),ue=fe,ue.examinedLength=i.examinedLength-o,ue.rightmostFailureOffset=u._getRightmostFailureOffset(),d.memoize(J,ue)):(!fe||!fe.isInvolved(J))&&(ue=d.memoize(J,{matchLength:i.pos-o,examinedLength:i.examinedLength-o,value:Q,failuresAtRightmostPosition:u.cloneRecordedFailures(),rightmostFailureOffset:u._getRightmostFailureOffset()}));const Ae=!!Q;if(N&&(u.popFailuresInfo(),Ae||u.processFailure(o,this),ue&&(ue.failuresAtRightmostPosition=u.cloneRecordedFailures())),u.isTracing()&&ue){const Ve=u.getTraceEntry(o,this,Ae,Ae?[Q]:[]);K&&(e(Ve.terminatingLREntry!=null||!Ae),Ve.isHeadOfLeftRecursion=!0),ue.traceEntry=Ve}return i.examinedLength=Math.max(i.examinedLength,te),u.exitApplication(d,Q),Ae},V.prototype.evalOnce=function(u,i){const{inputStream:o}=i,d=o.pos;if(i.eval(u)){const v=u.getArity(),C=i._bindings.splice(i._bindings.length-v,v),N=i._bindingOffsets.splice(i._bindingOffsets.length-v,v),te=o.pos-d;return new tt(this.ruleName,C,N,te)}else return!1},V.prototype.growSeedResult=function(u,i,o,d,v){if(!v)return!1;const{inputStream:C}=i;for(;;){if(d.matchLength=C.pos-o,d.value=v,d.failuresAtRightmostPosition=i.cloneRecordedFailures(),i.isTracing()){const N=i.trace[i.trace.length-1];d.traceEntry=new _e(i.input,o,C.pos,this,!0,[v],[N.clone()])}if(C.pos=o,v=this.evalOnce(u,i),C.pos-o<=d.matchLength)break;i.isTracing()&&i.trace.splice(-2,1)}return i.isTracing()&&d.traceEntry.recordLRTermination(i.trace.pop(),v),C.pos=o+d.matchLength,d.value},we.prototype.eval=function(u){const{inputStream:i}=u,o=i.pos,d=i.next();return d&&this.pattern.test(d)?(u.pushBinding(new Oe(d.length),o),!0):(u.processFailure(o,this),!1)},z.prototype.getArity=t("getArity"),R.getArity=G.getArity=F.prototype.getArity=O.prototype.getArity=B.prototype.getArity=V.prototype.getArity=we.prototype.getArity=function(){return 1},Z.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},ce.prototype.getArity=function(){let u=0;for(let i=0;i<this.factors.length;i++)u+=this.factors[i].getArity();return u},q.prototype.getArity=function(){return this.expr.getArity()},se.prototype.getArity=function(){return 0},ee.prototype.getArity=ae.prototype.getArity=function(){return this.expr.getArity()};function Je(u,i){const o={};if(u.source&&i){const d=u.source.relativeTo(i);o.sourceInterval=[d.startIdx,d.endIdx]}return o}z.prototype.outputRecipe=t("outputRecipe"),R.outputRecipe=function(u,i){return["any",Je(this,i)]},G.outputRecipe=function(u,i){return["end",Je(this,i)]},F.prototype.outputRecipe=function(u,i){return["terminal",Je(this,i),this.obj]},O.prototype.outputRecipe=function(u,i){return["range",Je(this,i),this.from,this.to]},B.prototype.outputRecipe=function(u,i){return["param",Je(this,i),this.index]},Z.prototype.outputRecipe=function(u,i){return["alt",Je(this,i)].concat(this.terms.map(o=>o.outputRecipe(u,i)))},Se.prototype.outputRecipe=function(u,i){return this.terms[0].outputRecipe(u,i)},Te.prototype.outputRecipe=function(u,i){const o=this.terms.slice(0,this.expansionPos),d=this.terms.slice(this.expansionPos+1);return["splice",Je(this,i),o.map(v=>v.outputRecipe(u,i)),d.map(v=>v.outputRecipe(u,i))]},ce.prototype.outputRecipe=function(u,i){return["seq",Je(this,i)].concat(this.factors.map(o=>o.outputRecipe(u,i)))},ie.prototype.outputRecipe=me.prototype.outputRecipe=Ie.prototype.outputRecipe=se.prototype.outputRecipe=ee.prototype.outputRecipe=ae.prototype.outputRecipe=function(u,i){return[this.constructor.name.toLowerCase(),Je(this,i),this.expr.outputRecipe(u,i)]},V.prototype.outputRecipe=function(u,i){return["app",Je(this,i),this.ruleName,this.args.map(o=>o.outputRecipe(u,i))]},we.prototype.outputRecipe=function(u,i){return["unicodeChar",Je(this,i),this.category]},z.prototype.introduceParams=t("introduceParams"),R.introduceParams=G.introduceParams=F.prototype.introduceParams=O.prototype.introduceParams=B.prototype.introduceParams=we.prototype.introduceParams=function(u){return this},Z.prototype.introduceParams=function(u){return this.terms.forEach((i,o,d)=>{d[o]=i.introduceParams(u)}),this},ce.prototype.introduceParams=function(u){return this.factors.forEach((i,o,d)=>{d[o]=i.introduceParams(u)}),this},q.prototype.introduceParams=se.prototype.introduceParams=ee.prototype.introduceParams=ae.prototype.introduceParams=function(u){return this.expr=this.expr.introduceParams(u),this},V.prototype.introduceParams=function(u){const i=u.indexOf(this.ruleName);if(i>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new B(i).withSource(this.source)}else return this.args.forEach((o,d,v)=>{v[d]=o.introduceParams(u)}),this},z.prototype.isNullable=function(u){return this._isNullable(u,Object.create(null))},z.prototype._isNullable=t("_isNullable"),R._isNullable=O.prototype._isNullable=B.prototype._isNullable=me.prototype._isNullable=we.prototype._isNullable=function(u,i){return!1},G._isNullable=function(u,i){return!0},F.prototype._isNullable=function(u,i){return typeof this.obj=="string"?this.obj==="":!1},Z.prototype._isNullable=function(u,i){return this.terms.length===0||this.terms.some(o=>o._isNullable(u,i))},ce.prototype._isNullable=function(u,i){return this.factors.every(o=>o._isNullable(u,i))},ie.prototype._isNullable=Ie.prototype._isNullable=se.prototype._isNullable=ee.prototype._isNullable=function(u,i){return!0},ae.prototype._isNullable=function(u,i){return this.expr._isNullable(u,i)},V.prototype._isNullable=function(u,i){const o=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(i,o)){const{body:d}=u.rules[this.ruleName],v=d.substituteParams(this.args);i[o]=!1,i[o]=v._isNullable(u,i)}return i[o]},z.prototype.substituteParams=t("substituteParams"),R.substituteParams=G.substituteParams=F.prototype.substituteParams=O.prototype.substituteParams=we.prototype.substituteParams=function(u){return this},B.prototype.substituteParams=function(u){return u[this.index]},Z.prototype.substituteParams=function(u){return new Z(this.terms.map(i=>i.substituteParams(u)))},ce.prototype.substituteParams=function(u){return new ce(this.factors.map(i=>i.substituteParams(u)))},q.prototype.substituteParams=se.prototype.substituteParams=ee.prototype.substituteParams=ae.prototype.substituteParams=function(u){return new this.constructor(this.expr.substituteParams(u))},V.prototype.substituteParams=function(u){if(this.args.length===0)return this;{const i=this.args.map(o=>o.substituteParams(u));return new V(this.ruleName,i)}};function hr(u){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(u)}function et(u){const i=Object.create(null);u.forEach(o=>{i[o]=(i[o]||0)+1}),Object.keys(i).forEach(o=>{if(i[o]<=1)return;let d=1;u.forEach((v,C)=>{v===o&&(u[C]=v+"_"+d++)})})}z.prototype.toArgumentNameList=t("toArgumentNameList"),R.toArgumentNameList=function(u,i){return["any"]},G.toArgumentNameList=function(u,i){return["end"]},F.prototype.toArgumentNameList=function(u,i){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+u]},O.prototype.toArgumentNameList=function(u,i){let o=this.from+"_to_"+this.to;return hr(o)||(o="_"+o),hr(o)||(o="$"+u),[o]},Z.prototype.toArgumentNameList=function(u,i){const o=this.terms.map(C=>C.toArgumentNameList(u,!0)),d=[],v=o[0].length;for(let C=0;C<v;C++){const N=[];for(let Q=0;Q<this.terms.length;Q++)N.push(o[Q][C]);const te=f(N);d.push(te.join("_or_"))}return i||et(d),d},ce.prototype.toArgumentNameList=function(u,i){let o=[];return this.factors.forEach(d=>{const v=d.toArgumentNameList(u,!0);o=o.concat(v),u+=v.length}),i||et(o),o},q.prototype.toArgumentNameList=function(u,i){const o=this.expr.toArgumentNameList(u,i).map(d=>d[d.length-1]==="s"?d+"es":d+"s");return i||et(o),o},Ie.prototype.toArgumentNameList=function(u,i){return this.expr.toArgumentNameList(u,i).map(o=>"opt"+o[0].toUpperCase()+o.slice(1))},se.prototype.toArgumentNameList=function(u,i){return[]},ee.prototype.toArgumentNameList=ae.prototype.toArgumentNameList=function(u,i){return this.expr.toArgumentNameList(u,i)},V.prototype.toArgumentNameList=function(u,i){return[this.ruleName]},we.prototype.toArgumentNameList=function(u,i){return["$"+u]},B.prototype.toArgumentNameList=function(u,i){return["param"+this.index]},z.prototype.toDisplayString=t("toDisplayString"),Z.prototype.toDisplayString=ce.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},R.toDisplayString=G.toDisplayString=q.prototype.toDisplayString=se.prototype.toDisplayString=ee.prototype.toDisplayString=ae.prototype.toDisplayString=F.prototype.toDisplayString=O.prototype.toDisplayString=B.prototype.toDisplayString=function(){return this.toString()},V.prototype.toDisplayString=function(){if(this.args.length>0){const u=this.args.map(i=>i.toDisplayString());return this.ruleName+"<"+u.join(",")+">"}else return this.ruleName},we.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function Or(u){return u==="description"||u==="string"||u==="code"}class ct{constructor(i,o,d){if(!Or(d))throw new Error("invalid Failure type: "+d);this.pexpr=i,this.text=o,this.type=d,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(i){return this.getText()===i.getText()&&this.type===i.type&&(!this.isFluffy()||this.isFluffy()&&i.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const i=new ct(this.pexpr,this.text,this.type);return this.isFluffy()&&i.makeFluffy(),i}toKey(){return this.toString()+"#"+this.type}}z.prototype.toFailure=t("toFailure"),R.toFailure=function(u){return new ct(this,"any object","description")},G.toFailure=function(u){return new ct(this,"end of input","description")},F.prototype.toFailure=function(u){return new ct(this,this.obj,"string")},O.prototype.toFailure=function(u){return new ct(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},se.prototype.toFailure=function(u){const i=this.expr===R?"nothing":"not "+this.expr.toFailure(u);return new ct(this,i,"description")},ee.prototype.toFailure=function(u){return this.expr.toFailure(u)},V.prototype.toFailure=function(u){let{description:i}=u.rules[this.ruleName];return i||(i=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new ct(this,i,"description")},we.prototype.toFailure=function(u){return new ct(this,"a Unicode ["+this.category+"] character","description")},Z.prototype.toFailure=function(u){const o="("+this.terms.map(d=>d.toFailure(u)).join(" or ")+")";return new ct(this,o,"description")},ce.prototype.toFailure=function(u){const o="("+this.factors.map(d=>d.toFailure(u)).join(" ")+")";return new ct(this,o,"description")},q.prototype.toFailure=function(u){const i="("+this.expr.toFailure(u)+this.operator+")";return new ct(this,i,"description")},z.prototype.toString=t("toString"),R.toString=function(){return"any"},G.toString=function(){return"end"},F.prototype.toString=function(){return JSON.stringify(this.obj)},O.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},B.prototype.toString=function(){return"$"+this.index},ae.prototype.toString=function(){return"#("+this.expr.toString()+")"},Z.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(u=>u.toString()).join(" | ")+")"},ce.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(u=>u.toString()).join(" ")+")"},q.prototype.toString=function(){return this.expr+this.operator},se.prototype.toString=function(){return"~"+this.expr},ee.prototype.toString=function(){return"&"+this.expr},V.prototype.toString=function(){if(this.args.length>0){const u=this.args.map(i=>i.toString());return this.ruleName+"<"+u.join(",")+">"}else return this.ruleName},we.prototype.toString=function(){return"\\p{"+this.category+"}"};class Jt extends z{constructor(i){super(),this.obj=i}_getString(i){const o=i.currentApplication().args[this.obj.index];return e(o instanceof F,"expected a Terminal expression"),o.obj}allowsSkippingPrecedingSpace(){return!0}eval(i){const{inputStream:o}=i,d=o.pos,v=this._getString(i);return o.matchString(v,!0)?(i.pushBinding(new Oe(v.length),d),!0):(i.processFailure(d,this),!1)}getArity(){return 1}substituteParams(i){return new Jt(this.obj.substituteParams(i))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(i){return new ct(this,this.obj.toFailure(i)+" (case-insensitive)","description")}_isNullable(i,o){return this.obj._isNullable(i,o)}}var bi=Object.freeze({__proto__:null,CaseInsensitiveTerminal:Jt,PExpr:z,any:R,end:G,Terminal:F,Range:O,Param:B,Alt:Z,Extend:Se,Splice:Te,Seq:ce,Iter:q,Star:ie,Plus:me,Opt:Ie,Not:se,Lookahead:ee,Lex:ae,Apply:V,UnicodeChar:we});let jn;Kt(u=>{jn=u.rules.applySyntactic.body});const un=new V("spaces");class Wn{constructor(i,o,d){this.matcher=i,this.startExpr=o,this.grammar=i.grammar,this.input=i.getInput(),this.inputStream=new qe(this.input),this.memoTable=i._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],d!==void 0&&(this.positionToRecordFailures=d,this.recordedFailures=Object.create(null))}posToOffset(i){return i-this._posStack[this._posStack.length-1]}enterApplication(i,o){this._posStack.push(this.inputStream.pos),this._applicationStack.push(o),this.inLexifiedContextStack.push(!1),i.enter(o),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(i,o){const d=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),i.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),o&&this.pushBinding(o,d)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const i=this.currentApplication();return i?i.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(un),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(i){return i.allowsSkippingPrecedingSpace()&&i!==un?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(i,o){this._bindings.push(i),this._bindingOffsets.push(this.posToOffset(o))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(i){for(;this._bindings.length>i;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(i){let o=this.memoTable[i];return o||(o=this.memoTable[i]=new x),o}processFailure(i,o){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,i),this.recordedFailures&&i===this.positionToRecordFailures){const d=this.currentApplication();d&&(o=o.substituteParams(d.args)),this.recordFailure(o.toFailure(this.grammar),!1)}}recordFailure(i,o){const d=i.toKey();this.recordedFailures[d]?this.recordedFailures[d].isFluffy()&&!i.isFluffy()&&this.recordedFailures[d].clearFluffy():this.recordedFailures[d]=o?i.clone():i}recordFailures(i,o){Object.keys(i).forEach(d=>{this.recordFailure(i[d],o)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const i=Object.create(null);return Object.keys(this.recordedFailures).forEach(o=>{i[o]=this.recordedFailures[o].clone()}),i}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(i,o){const d=this.memoTable[i];if(d&&o instanceof V){const v=d.memo[o.toMemoKey()];if(v&&v.traceEntry){const C=v.traceEntry.cloneWithExpr(o);return C.isMemoized=!0,C}}return null}getTraceEntry(i,o,d,v){if(o instanceof V){const C=this.currentApplication(),N=C?C.args:[];o=o.substituteParams(N)}return this.getMemoizedTraceEntry(i,o)||new _e(this.input,i,this.inputStream.pos,o,d,v,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(i){return this.trace&&!i.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+i.rightmostFailureOffset===this.positionToRecordFailures?!!i.failuresAtRightmostPosition:!0}useMemoizedResult(i,o){this.trace&&this.trace.push(o.traceEntry);const d=this.inputStream.pos+o.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,d),this.recordedFailures&&this.positionToRecordFailures===d&&o.failuresAtRightmostPosition&&this.recordFailures(o.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,o.examinedLength+i),o.value?(this.inputStream.pos+=o.matchLength,this.pushBinding(o.value,i),!0):!1}eval(i){const{inputStream:o}=this,d=this._bindings.length,v=this.userData;let C;this.recordedFailures&&(C=this.recordedFailures,this.recordedFailures=Object.create(null));const N=o.pos,te=this.maybeSkipSpacesBefore(i);let Q;this.trace&&(Q=this.trace,this.trace=[]);const fe=i.eval(this);if(this.trace){const J=this._bindings.slice(d),K=this.getTraceEntry(te,i,fe,J);K.isImplicitSpaces=i===un,K.isRootNode=i===this.startExpr,Q.push(K),this.trace=Q}return fe?this.recordedFailures&&o.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(J=>{this.recordedFailures[J].makeFluffy()}):(o.pos=N,this.truncateBindings(d),this.userData=v),this.recordedFailures&&this.recordFailures(C,!1),i===jn&&this.skipSpaces(),fe}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let i;this.recordedFailures&&(i=Object.keys(this.recordedFailures).map(d=>this.recordedFailures[d]));const o=this._bindings[0];return o&&(o.grammar=this.grammar),new m(this.matcher,this.input,this.startExpr,o,this._bindingOffsets[0],this.rightmostFailurePosition,i)}getTrace(){this.trace=[];const i=this.getMatchResult(),o=this.trace[this.trace.length-1];return o.result=i,o}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Ce{constructor(i){this.grammar=i,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(i){return this._input!==i&&this.replaceInputRange(0,this._input.length,i),this}replaceInputRange(i,o,d){const v=this._input,C=this._memoTable;if(i<0||i>v.length||o<0||o>v.length||i>o)throw new Error("Invalid indices: "+i+" and "+o);this._input=v.slice(0,i)+d+v.slice(o),this._input!==v&&C.length>0&&(this._isMemoTableStale=!0);const N=C.slice(o);C.length=i;for(let te=0;te<d.length;te++)C.push(void 0);for(const te of N)C.push(te);for(let te=0;te<i;te++){const Q=C[te];Q&&Q.clearObsoleteEntries(te,i)}return this}match(i,o={incremental:!0}){return this._match(this._getStartExpr(i),{incremental:o.incremental,tracing:!1})}trace(i,o={incremental:!0}){return this._match(this._getStartExpr(i),{incremental:o.incremental,tracing:!0})}_match(i,o={}){const d={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...o};if(!d.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Ke(this.grammar);const v=new Wn(this,i,d.positionToRecordFailures);return d.tracing?v.getTrace():v.getMatchResult()}_getStartExpr(i){const o=i||this.grammar.defaultStartRule;if(!o)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const d=this.grammar.parseApplication(o);return new ce([d,G])}}const ut=[],fr=(u,i)=>Object.prototype.hasOwnProperty.call(u,i);class pn{constructor(i,o,d){this._node=i,this.source=o,this._baseInterval=d,i.isNonterminal()&&e(o===d),this._childWrappers=[]}_forgetMemoizedResultFor(i){delete this._node[this._semantics.attributeKeys[i]],this.children.forEach(o=>{o._forgetMemoizedResultFor(i)})}child(i){if(!(0<=i&&i<this._node.numChildren()))return;let o=this._childWrappers[i];if(!o){const d=this._node.childAt(i),v=this._node.childOffsets[i],C=this._baseInterval.subInterval(v,d.matchLength),N=d.isNonterminal()?C:this._baseInterval;o=this._childWrappers[i]=this._semantics.wrap(d,C,N)}return o}_children(){for(let i=0;i<this._node.numChildren();i++)this.child(i);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(i){const o=i||[],d=o.map(N=>N._node),v=new $t(d,[],-1,!1),C=this._semantics.wrap(v,null,null);return C._childWrappers=o,C}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class Et{constructor(i,o){const d=this;if(this.grammar=i,this.checkedActionDicts=!1,this.Wrapper=class extends(o?o.Wrapper:pn){constructor(v,C,N){super(v,C,N),d.checkActionDictsIfHaventAlready(),this._semantics=d}toString(){return"[semantics wrapper for "+d.grammar.name+"]"}},this.super=o,o){if(!(i.equals(this.super.grammar)||i._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+i.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const v in this.attributes)Object.defineProperty(this.attributeKeys,v,{value:Ft(v)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let i;for(i in this.operations)this.operations[i].checkActionDict(this.grammar);for(i in this.attributes)this.attributes[i].checkActionDict(this.grammar)}toRecipe(i){function o(v){return v.super!==Et.BuiltInSemantics._getSemantics()}let d=`(function(g) {
`;if(o(this)){d+="  var semantics = "+this.super.toRecipe(!0)+"(g";const v=this.super.grammar;let C=this.grammar;for(;C!==v;)d+=".superGrammar",C=C.superGrammar;d+=`);
`,d+="  return g.extendSemantics(semantics)"}else d+="  return g.createSemantics()";return["Operation","Attribute"].forEach(v=>{const C=this[v.toLowerCase()+"s"];Object.keys(C).forEach(N=>{const{actionDict:te,formals:Q,builtInDefault:fe}=C[N];let J=N;Q.length>0&&(J+="("+Q.join(", ")+")");let K;o(this)&&this.super[v.toLowerCase()+"s"][N]?K="extend"+v:K="add"+v,d+=`
    .`+K+"("+JSON.stringify(J)+", {";const ue=[];Object.keys(te).forEach(Ae=>{if(te[Ae]!==fe){let Ve=te[Ae].toString().trim();Ve=Ve.replace(/^.*\(/,"function("),ue.push(`
      `+JSON.stringify(Ae)+": "+Ve)}}),d+=ue.join(",")+`
    })`})}),d+=`;
  })`,i||(d=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+d+`(grammar);
  return semantics;
});
`),d}addOperationOrAttribute(i,o,d){const v=i+"s",C=Tr(o,i),{name:N}=C,{formals:te}=C;this.assertNewName(N,i);const Q=Vr(i,N,K),fe={_default:Q};Object.keys(d).forEach(ue=>{fe[ue]=d[ue]});const J=i==="operation"?new be(N,te,fe,Q):new Qe(N,fe,Q);J.checkActionDict(this.grammar),this[v][N]=J;function K(...ue){const Ae=this._semantics[v][N];if(arguments.length!==Ae.formals.length)throw new Error("Invalid number of arguments passed to "+N+" "+i+" (expected "+Ae.formals.length+", got "+arguments.length+")");const Ve=Object.create(null);for(const[Rr,dn]of Object.entries(ue)){const Za=Ae.formals[Rr];Ve[Za]=dn}const vt=this.args;this.args=Ve;const St=Ae.execute(this._semantics,this);return this.args=vt,St}i==="operation"?(this.Wrapper.prototype[N]=K,this.Wrapper.prototype[N].toString=function(){return"["+N+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,N,{get:K,configurable:!0}),Object.defineProperty(this.attributeKeys,N,{value:Ft(N)}))}extendOperationOrAttribute(i,o,d){const v=i+"s";if(Tr(o,"attribute"),!(this.super&&o in this.super[v]))throw new Error("Cannot extend "+i+" '"+o+"': did not inherit an "+i+" with that name");if(fr(this[v],o))throw new Error("Cannot extend "+i+" '"+o+"' again");const C=this[v][o].formals,N=this[v][o].actionDict,te=Object.create(N);Object.keys(d).forEach(Q=>{te[Q]=d[Q]}),this[v][o]=i==="operation"?new be(o,C,te):new Qe(o,te),this[v][o].checkActionDict(this.grammar)}assertNewName(i,o){if(fr(pn.prototype,i))throw new Error("Cannot add "+o+" '"+i+"': that's a reserved name");if(i in this.operations)throw new Error("Cannot add "+o+" '"+i+"': an operation with that name already exists");if(i in this.attributes)throw new Error("Cannot add "+o+" '"+i+"': an attribute with that name already exists")}wrap(i,o,d){const v=d||o;return i instanceof this.Wrapper?i:new this.Wrapper(i,o,v)}}function Tr(u,i){if(!Et.prototypeGrammar)return e(u.indexOf("(")===-1),{name:u,formals:[]};const o=Et.prototypeGrammar.match(u,i==="operation"?"OperationSignature":"AttributeSignature");if(o.failed())throw new Error(o.message);return Et.prototypeGrammarSemantics(o).parse()}function Vr(u,i,o){return function(...d){const C=(this._semantics.operations[i]||this._semantics.attributes[i]).formals.map(N=>this.args[N]);if(!this.isIteration()&&d.length===1)return o.apply(d[0],C);throw bt(this.ctorName,i,u,ut)}}Et.createSemantics=function(u,i){const o=new Et(u,i!==void 0?i:Et.BuiltInSemantics._getSemantics()),d=function(C){if(!(C instanceof m))throw new TypeError("Semantics expected a MatchResult, but got "+W(C));if(C.failed())throw new TypeError("cannot apply Semantics to "+C.toString());const N=C._cst;if(N.grammar!==u)throw new Error("Cannot use a MatchResult from grammar '"+N.grammar.name+"' with a semantics for '"+u.name+"'");const te=new qe(C.input);return o.wrap(N,te.interval(C._cstOffset,C.input.length))};return d.addOperation=function(v,C){return o.addOperationOrAttribute("operation",v,C),d},d.extendOperation=function(v,C){return o.extendOperationOrAttribute("operation",v,C),d},d.addAttribute=function(v,C){return o.addOperationOrAttribute("attribute",v,C),d},d.extendAttribute=function(v,C){return o.extendOperationOrAttribute("attribute",v,C),d},d._getActionDict=function(v){const C=o.operations[v]||o.attributes[v];if(!C)throw new Error('"'+v+'" is not a valid operation or attribute name in this semantics for "'+u.name+'"');return C.actionDict},d._remove=function(v){let C;return v in o.operations?(C=o.operations[v],delete o.operations[v]):v in o.attributes&&(C=o.attributes[v],delete o.attributes[v]),delete o.Wrapper.prototype[v],C},d.getOperationNames=function(){return Object.keys(o.operations)},d.getAttributeNames=function(){return Object.keys(o.attributes)},d.getGrammar=function(){return o.grammar},d.toRecipe=function(v){return o.toRecipe(v)},d.toString=o.toString.bind(o),d._getSemantics=function(){return o},d};class be{constructor(i,o,d,v){this.name=i,this.formals=o,this.actionDict=d,this.builtInDefault=v}checkActionDict(i){i._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(i,o){try{const{ctorName:d}=o._node;let v=this.actionDict[d];return v?(ut.push([this,d]),v.apply(o,o._children())):o.isNonterminal()&&(v=this.actionDict._nonterminal,v)?(ut.push([this,"_nonterminal",d]),v.apply(o,o._children())):(ut.push([this,"default action",d]),this.actionDict._default.apply(o,o._children()))}finally{ut.pop()}}}be.prototype.typeName="operation";class Qe extends be{constructor(i,o,d){super(i,[],o,d)}execute(i,o){const d=o._node,v=i.attributeKeys[this.name];return fr(d,v)||(d[v]=be.prototype.execute.call(this,i,o)),d[v]}}Qe.prototype.typeName="attribute";const gt=["_iter","_terminal","_nonterminal","_default"];function Xe(u){return Object.keys(u.rules).sort().map(i=>u.rules[i])}const _t=u=>u.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Yt,It;class it{constructor(i,o,d,v){if(this.name=i,this.superGrammar=o,this.rules=d,v){if(!(v in d))throw new Error("Invalid start rule: '"+v+"' is not a rule in grammar '"+i+"'");this.defaultStartRule=v}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Ce(this)}isBuiltIn(){return this===it.ProtoBuiltInRules||this===it.BuiltInRules}equals(i){if(this===i)return!0;if(i==null||this.name!==i.name||this.defaultStartRule!==i.defaultStartRule||!(this.superGrammar===i.superGrammar||this.superGrammar.equals(i.superGrammar)))return!1;const o=Xe(this),d=Xe(i);return o.length===d.length&&o.every((v,C)=>v.description===d[C].description&&v.formals.join(",")===d[C].formals.join(",")&&v.body.toString()===d[C].body.toString())}match(i,o){const d=this.matcher();return d.replaceInputRange(0,0,i),d.match(o)}trace(i,o){const d=this.matcher();return d.replaceInputRange(0,0,i),d.trace(o)}createSemantics(){return Et.createSemantics(this)}extendSemantics(i){return Et.createSemantics(this,i._getSemantics())}_checkTopDownActionDict(i,o,d){const v=[];for(const C in d){const N=d[C];if(!gt.includes(C)&&!(C in this.rules)){v.push(`'${C}' is not a valid semantic action for '${this.name}'`);continue}if(typeof N!="function"){v.push(`'${C}' must be a function in an action dictionary for '${this.name}'`);continue}const Q=N.length,fe=this._topDownActionArity(C);if(Q!==fe){let J;C==="_iter"||C==="_nonterminal"?J=`it should use a rest parameter, e.g. \`${C}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:J=`expected ${fe}, got ${Q}`,v.push(`Semantic action '${C}' has the wrong arity: ${J}`)}}if(v.length>0){const C=v.map(te=>"- "+te),N=new Error([`Found errors in the action dictionary of the '${o}' ${i}:`,...C].join(`
`));throw N.problems=v,N}}_topDownActionArity(i){return gt.includes(i)?0:this.rules[i].body.getArity()}_inheritsFrom(i){let o=this.superGrammar;for(;o;){if(o.equals(i,!0))return!0;o=o.superGrammar}return!1}toRecipe(i=void 0){const o={};this.source&&(o.source=this.source.contents);let d=null;this.defaultStartRule&&(d=this.defaultStartRule);const v={};Object.keys(this.rules).forEach(te=>{const Q=this.rules[te],{body:fe}=Q,J=!this.superGrammar||!this.superGrammar.rules[te];let K;J?K="define":K=fe instanceof Se?"extend":"override";const ue={};if(Q.source&&this.source){const vt=Q.source.relativeTo(this.source);ue.sourceInterval=[vt.startIdx,vt.endIdx]}const Ae=J?Q.description:null,Ve=fe.outputRecipe(Q.formals,this.source);v[te]=[K,ue,Ae,Q.formals,Ve]});let C="null";i?C=i:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(C=this.superGrammar.toRecipe());const N=[...["grammar",o,this.name].map(JSON.stringify),C,...[d,v].map(JSON.stringify)];return _t(`[${N.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const i=new y;i.append("{");let o=!0;for(const d in this.rules){const{body:v}=this.rules[d];o?o=!1:i.append(","),i.append(`
`),i.append("  "),this.addSemanticActionTemplate(d,v,i)}return i.append(`
}`),i.contents()}addSemanticActionTemplate(i,o,d){d.append(i),d.append(": function(");const v=this._topDownActionArity(i);d.append(a("_",v).join(", ")),d.append(`) {
`),d.append("  }")}parseApplication(i){let o;if(i.indexOf("<")===-1)o=new V(i);else{const v=Yt.match(i,"Base_application");o=It(v,{})}if(!(o.ruleName in this.rules))throw De(o.ruleName,this.name);const{formals:d}=this.rules[o.ruleName];if(d.length!==o.args.length){const{source:v}=this.rules[o.ruleName];throw H(o.ruleName,d.length,o.args.length,v)}return o}_setUpMatchState(i){this._matchStateInitializer&&this._matchStateInitializer(i)}}it.ProtoBuiltInRules=new it("ProtoBuiltInRules",void 0,{any:{body:R,formals:[],description:"any character",primitive:!0},end:{body:G,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new Jt(new B(0)),formals:["str"],primitive:!0},lower:{body:new we("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new we("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new we("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new ie(new V("space")),formals:[]},space:{body:new O("\0"," "),formals:[],description:"a space"}}),it.initApplicationParser=function(u,i){Yt=u,It=i};class Ct{constructor(i){this.name=i}sourceInterval(i,o){return this.source.subInterval(i,o-i)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?it.ProtoBuiltInRules:it.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(i,o){const d=this.ensureSuperGrammar().rules[i];if(!d)throw T(i,this.superGrammar.name,o);return d}installOverriddenOrExtendedRule(i,o,d,v){const C=p(o);if(C.length>0)throw X(i,C,v);const N=this.ensureSuperGrammar().rules[i],te=N.formals,Q=te?te.length:0;if(o.length!==Q)throw H(i,Q,o.length,v);return this.install(i,o,d,N.description,v)}install(i,o,d,v,C,N=!1){return this.rules[i]={body:d.introduceParams(o),formals:o,description:v,source:C,primitive:N},this}withSuperGrammar(i){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=i,this.rules=Object.create(i.rules),i.isBuiltIn()||(this.defaultStartRule=i.defaultStartRule),this}withDefaultStartRule(i){return this.defaultStartRule=i,this}withSource(i){return this.source=new qe(i).interval(0,i.length),this}build(){const i=new it(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);i._matchStateInitializer=i.superGrammar._matchStateInitializer,i.supportsIncrementalParsing=i.superGrammar.supportsIncrementalParsing;const o=[];let d=!1;return Object.keys(i.rules).forEach(v=>{const{body:C}=i.rules[v];try{C.assertChoicesHaveUniformArity(v)}catch(N){o.push(N)}try{C.assertAllApplicationsAreValid(v,i)}catch(N){o.push(N),d=!0}}),d||Object.keys(i.rules).forEach(v=>{const{body:C}=i.rules[v];try{C.assertIteratedExprsAreNotNullable(i,[])}catch(N){o.push(N)}}),o.length>0&&ht(o),this.source&&(i.source=this.source),i}define(i,o,d,v,C,N){if(this.ensureSuperGrammar(),this.superGrammar.rules[i])throw P(i,this.name,this.superGrammar.name,C);if(this.rules[i])throw P(i,this.name,this.name,C);const te=p(o);if(te.length>0)throw X(i,te,C);return this.install(i,o,d,v,C,N)}override(i,o,d,v,C){return this.ensureSuperGrammarRuleForOverriding(i,C),this.installOverriddenOrExtendedRule(i,o,d,C),this}extend(i,o,d,v,C){if(!this.ensureSuperGrammar().rules[i])throw M(i,this.superGrammar.name,C);const te=new Se(this.superGrammar,i,d);return te.source=d.source,this.installOverriddenOrExtendedRule(i,o,te,C),this}}class Ot{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(i){return new Ct(i)}grammar(i,o,d,v,C){const N=new Ct(o);return d&&N.withSuperGrammar(d instanceof it?d:this.fromRecipe(d)),v&&N.withDefaultStartRule(v),i&&i.source&&N.withSource(i.source),this.currentDecl=N,Object.keys(C).forEach(te=>{this.currentRuleName=te;const Q=C[te],fe=Q[0],J=Q[1],K=Q[2],ue=Q[3],Ae=this.fromRecipe(Q[4]);let Ve;N.source&&J&&J.sourceInterval&&(Ve=N.source.subInterval(J.sourceInterval[0],J.sourceInterval[1]-J.sourceInterval[0])),N[fe](te,ue,Ae,K,Ve)}),this.currentRuleName=this.currentDecl=null,N.build()}terminal(i){return new F(i)}range(i,o){return new O(i,o)}param(i){return new B(i)}alt(...i){let o=[];for(let d of i)d instanceof z||(d=this.fromRecipe(d)),d instanceof Z?o=o.concat(d.terms):o.push(d);return o.length===1?o[0]:new Z(o)}seq(...i){let o=[];for(let d of i)d instanceof z||(d=this.fromRecipe(d)),d instanceof ce?o=o.concat(d.factors):o.push(d);return o.length===1?o[0]:new ce(o)}star(i){return i instanceof z||(i=this.fromRecipe(i)),new ie(i)}plus(i){return i instanceof z||(i=this.fromRecipe(i)),new me(i)}opt(i){return i instanceof z||(i=this.fromRecipe(i)),new Ie(i)}not(i){return i instanceof z||(i=this.fromRecipe(i)),new se(i)}lookahead(i){return i instanceof z||(i=this.fromRecipe(i)),new ee(i)}lex(i){return i instanceof z||(i=this.fromRecipe(i)),new ae(i)}app(i,o){return o&&o.length>0&&(o=o.map(function(d){return d instanceof z?d:this.fromRecipe(d)},this)),new V(i,o)}splice(i,o){return new Te(this.currentDecl.superGrammar,this.currentRuleName,i.map(d=>this.fromRecipe(d)),o.map(d=>this.fromRecipe(d)))}fromRecipe(i){const o=i[0]==="grammar"?i.slice(1):i.slice(2),d=this[i[0]](...o),v=i[1];return v&&v.sourceInterval&&this.currentDecl&&d.withSource(this.currentDecl.sourceInterval(...v.sourceInterval)),d}}function rt(u){return typeof u=="function"?u.call(new Ot):(typeof u=="string"&&(u=JSON.parse(u)),new Ot().fromRecipe(u))}var kt=rt(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);it.BuiltInRules=kt,oe(it.BuiltInRules);var Lr=rt(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const ft=Object.create(z.prototype);function Pr(u,i){for(const o in u)if(o===i)return!0;return!1}function mr(u,i,o){const d=new Ot;let v,C,N,te=!1;return(o||Lr).createSemantics().addOperation("visit",{Grammars(J){return J.children.map(K=>K.visit())},Grammar(J,K,ue,Ae,Ve){const vt=J.visit();v=d.newGrammar(vt),K.child(0)&&K.child(0).visit(),Ae.children.map(Rr=>Rr.visit());const St=v.build();if(St.source=this.source.trimmed(),Pr(i,vt))throw Ee(St);return i[vt]=St,St},SuperGrammar(J,K){const ue=K.visit();if(ue==="null")v.withSuperGrammar(null);else{if(!i||!Pr(i,ue))throw pe(ue,i,K.source);v.withSuperGrammar(i[ue])}},Rule_define(J,K,ue,Ae,Ve){C=J.visit(),N=K.children.map(dn=>dn.visit())[0]||[],!v.defaultStartRule&&v.ensureSuperGrammar()!==it.ProtoBuiltInRules&&v.withDefaultStartRule(C);const vt=Ve.visit(),St=ue.children.map(dn=>dn.visit())[0],Rr=this.source.trimmed();return v.define(C,N,vt,St,Rr)},Rule_override(J,K,ue,Ae){C=J.visit(),N=K.children.map(St=>St.visit())[0]||[];const Ve=this.source.trimmed();v.ensureSuperGrammarRuleForOverriding(C,Ve),te=!0;const vt=Ae.visit();return te=!1,v.override(C,N,vt,null,Ve)},Rule_extend(J,K,ue,Ae){C=J.visit(),N=K.children.map(St=>St.visit())[0]||[];const Ve=Ae.visit(),vt=this.source.trimmed();return v.extend(C,N,Ve,null,vt)},RuleBody(J,K){return d.alt(...K.visit()).withSource(this.source)},OverrideRuleBody(J,K){const ue=K.visit(),Ae=ue.indexOf(ft);if(Ae>=0){const Ve=ue.slice(0,Ae),vt=ue.slice(Ae+1);return vt.forEach(St=>{if(St===ft)throw xe(St)}),new Te(v.superGrammar,C,Ve,vt).withSource(this.source)}else return d.alt(...ue).withSource(this.source)},Formals(J,K,ue){return K.visit()},Params(J,K,ue){return K.visit()},Alt(J){return d.alt(...J.visit()).withSource(this.source)},TopLevelTerm_inline(J,K){const ue=C+"_"+K.visit(),Ae=J.visit(),Ve=this.source.trimmed(),vt=!(v.superGrammar&&v.superGrammar.rules[ue]);te&&!vt?v.override(ue,N,Ae,null,Ve):v.define(ue,N,Ae,null,Ve);const St=N.map(Rr=>d.app(Rr));return d.app(ue,St).withSource(Ae.source)},OverrideTopLevelTerm_superSplice(J){return ft},Seq(J){return d.seq(...J.children.map(K=>K.visit())).withSource(this.source)},Iter_star(J,K){return d.star(J.visit()).withSource(this.source)},Iter_plus(J,K){return d.plus(J.visit()).withSource(this.source)},Iter_opt(J,K){return d.opt(J.visit()).withSource(this.source)},Pred_not(J,K){return d.not(K.visit()).withSource(this.source)},Pred_lookahead(J,K){return d.lookahead(K.visit()).withSource(this.source)},Lex_lex(J,K){return d.lex(K.visit()).withSource(this.source)},Base_application(J,K){const ue=K.children.map(Ae=>Ae.visit())[0]||[];return d.app(J.visit(),ue).withSource(this.source)},Base_range(J,K,ue){return d.range(J.visit(),ue.visit()).withSource(this.source)},Base_terminal(J){return d.terminal(J.visit()).withSource(this.source)},Base_paren(J,K,ue){return K.visit()},ruleDescr(J,K,ue){return K.visit()},ruleDescrText(J){return this.sourceString.trim()},caseName(J,K,ue,Ae,Ve){return ue.visit()},name(J,K){return this.sourceString},nameFirst(J){},nameRest(J){},terminal(J,K,ue){return K.children.map(Ae=>Ae.visit()).join("")},oneCharTerminal(J,K,ue){return K.visit()},escapeChar(J){try{return D(this.sourceString)}catch(K){throw K instanceof RangeError&&K.message.startsWith("Invalid code point ")?Pe(J):K}},NonemptyListOf(J,K,ue){return[J.visit()].concat(ue.children.map(Ae=>Ae.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(u).visit()}var Zt=rt(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Gr(it.BuiltInRules),Ir(Zt);function Gr(u){const i={empty(){return this.iteration()},nonEmpty(o,d,v){return this.iteration([o].concat(v.children))}};Et.BuiltInSemantics=Et.createSemantics(u,null).addOperation("asIteration",{emptyListOf:i.empty,nonemptyListOf:i.nonEmpty,EmptyListOf:i.empty,NonemptyListOf:i.nonEmpty})}function Ir(u){Et.prototypeGrammarSemantics=u.createSemantics().addOperation("parse",{AttributeSignature(i){return{name:i.parse(),formals:[]}},OperationSignature(i,o){return{name:i.parse(),formals:o.children.map(d=>d.parse())[0]||[]}},Formals(i,o,d){return o.asIteration().children.map(v=>v.parse())},name(i,o){return this.sourceString}}),Et.prototypeGrammar=u}function ja(u){let i=0;const o=[0],d=()=>o[o.length-1],v={},C=/( *).*(?:$|\r?\n|\r)/g;let N;for(;(N=C.exec(u))!=null;){const[te,Q]=N;if(te.length===0)break;const fe=Q.length,J=d(),K=i+fe;if(fe>J)o.push(fe),v[K]=1;else if(fe<J){const ue=o.length;for(;d()!==fe;)o.pop();v[K]=-1*(ue-o.length)}i+=te.length}return o.length>1&&(v[i]=1-o.length),v}const ps="an indented block",ds="a dedent",hs=1114112;class Wa extends qe{constructor(i){super(i.input),this.state=i}_indentationAt(i){return this.state.userData[i]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),hs):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),hs):super.nextCodePoint()}}class fs extends z{constructor(i=!0){super(),this.isIndent=i}allowsSkippingPrecedingSpace(){return!0}eval(i){const{inputStream:o}=i,d=i.userData;i.doNotMemoize=!0;const v=o.pos,C=this.isIndent?1:-1;return(d[v]||0)*C>0?(i.userData=Object.create(d),i.userData[v]-=C,i.pushBinding(new Oe(0),v),!0):(i.processFailure(v,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(i,o){}_isNullable(i,o){return!1}assertChoicesHaveUniformArity(i){}assertIteratedExprsAreNotNullable(i){}introduceParams(i){return this}substituteParams(i){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(i){const o=this.isIndent?ps:ds;return new ct(this,o,"description")}}const Ba=new V("indent"),Va=new V("dedent"),Ga=new Te(kt,"any",[Ba,Va],[]),ms=new Ot().newGrammar("IndentationSensitive").withSuperGrammar(kt).define("indent",[],new fs(!0),ps,void 0,!0).define("dedent",[],new fs(!1),ds,void 0,!0).extend("any",[],Ga,"any character",void 0).build();Object.assign(ms,{_matchStateInitializer(u){u.userData=ja(u.input),u.inputStream=new Wa(u)},supportsIncrementalParsing:!1});const Ha="17.1.0";it.initApplicationParser(Lr,mr);const Ka=u=>!!u.constructor&&typeof u.constructor.isBuffer=="function"&&u.constructor.isBuffer(u);function Ja(u,i){const o=Lr.match(u,"Grammars");if(o.failed())throw I(o);return mr(o,i)}function Ya(u,i){const o=gs(u,i),d=Object.keys(o);if(d.length===0)throw new Error("Missing grammar definition");if(d.length>1){const C=o[d[1]].source;throw new Error(dr(C.sourceString,C.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return o[d[0]]}function gs(u,i){const o=Object.create(i||{});if(typeof u!="string")if(Ka(u))u=u.toString();else throw new TypeError("Expected string as first argument, got "+W(u));return Ja(u,o),o}return Qt.ExperimentalIndentationSensitive=ms,Qt._buildGrammar=mr,Qt.grammar=Ya,Qt.grammars=gs,Qt.makeRecipe=rt,Qt.ohmGrammar=Lr,Qt.pexprs=bi,Qt.version=Ha,Qt}var _i,Fs;function Da(){if(Fs)return _i;Fs=1;const{makeRecipe:t}=eu();return _i=t(["grammar",{source:`PEP508 {
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
`],["terminal",{sourceInterval:[6123,6126]},"#"]]],["app",{sourceInterval:[6128,6131]},"any",[]]]]]}]),_i}var wn={},qs;function zs(){return qs||(qs=1,(function(t){var e=wn&&wn.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequirementsSyntaxError=t.semantics=void 0;const r=e(Da());t.semantics=r.default.createSemantics();function s(a){return{startIdx:a.source.startIdx,endIdx:a.source.endIdx}}function n(a,p){return{data:p,location:s(a)}}t.semantics.addOperation("extract",{File:a=>a.asIteration().children.map(p=>p.extract()).filter(Boolean),Line:(a,p)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extract())||null},NameReq:(a,p,f,w)=>{var L,k;return{type:"ProjectName",name:a.sourceString,versionSpec:f.extract(),extras:(L=p.child(0))===null||L===void 0?void 0:L.extract(),environmentMarkerTree:(k=w.child(0))===null||k===void 0?void 0:k.extract()}},UrlReq:(a,p,f,w,L)=>{var k,y;return{type:"ProjectURL",name:a.sourceString,url:f.extract(),extras:(k=p.child(0))===null||k===void 0?void 0:k.extract(),environmentMarkerTree:(y=L.child(0))===null||y===void 0?void 0:y.extract()}},Extras:(a,p,f)=>p.asIteration().children.map(w=>w.sourceString),RequirementsReq:(a,p)=>({type:"RequirementsFile",path:p.sourceString}),ConstraintsReq:(a,p)=>({type:"ConstraintsFile",path:p.sourceString}),UrlSpec:(a,p)=>p.sourceString,QuotedMarker:(a,p)=>p.extract(),MarkerOr_node:(a,p,f)=>({operator:"or",left:a.extract(),right:f.extract()}),MarkerAnd_node:(a,p,f)=>({operator:"and",left:a.extract(),right:f.extract()}),MarkerExpr_leaf:(a,p,f)=>({left:a.sourceString,operator:p.sourceString,right:f.sourceString}),MarkerExpr_node:(a,p,f)=>p.extract(),VersionSpec_parenthesized:(a,p,f)=>p.extract()||[],VersionMany:a=>{const p=a.asIteration().children;if(p.length!==0)return p.map(f=>f.extract())},VersionOne:(a,p)=>({operator:a.sourceString,version:p.sourceString})}),t.semantics.addOperation("extractLoosely",{LooseFile:a=>a.asIteration().children.map(p=>p.extractLoosely()).filter(Boolean),LooseLine:(a,p)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLoosely())||null},LooseNameReq:(a,p,f,w)=>{var L;return{type:"ProjectName",name:a.sourceString,extras:(L=p.child(0))===null||L===void 0?void 0:L.extractLoosely(),versionSpec:f.extractLoosely()}},LooseNonNameReq:a=>null,LooseExtras:(a,p,f,w)=>p.asIteration().children.map(L=>L.sourceString),LooseVersionSpec_parenthesized:(a,p,f)=>p.extractLoosely()||[],LooseVersionMany:(a,p)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(w=>w.extractLoosely())},LooseVersionOne:(a,p)=>{const f={operator:a.sourceString};return p.sourceString&&(f.version=p.sourceString),f}}),t.semantics.addOperation("extractWithLocation",{File:a=>a.asIteration().children.map(p=>p.extractWithLocation()).filter(Boolean),Line:(a,p)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractWithLocation())||null},NameReq:function(a,p,f,w){var L,k;return n(this,{type:"ProjectName",name:n(a,a.sourceString),versionSpec:f.extractWithLocation(),extras:(L=p.child(0))===null||L===void 0?void 0:L.extractWithLocation(),environmentMarkerTree:(k=w.child(0))===null||k===void 0?void 0:k.extractWithLocation()})},UrlReq:function(a,p,f,w,L){var k,y;return n(this,{type:"ProjectURL",name:n(a,a.sourceString),url:f.extractWithLocation(),extras:(k=p.child(0))===null||k===void 0?void 0:k.extractWithLocation(),environmentMarkerTree:(y=L.child(0))===null||y===void 0?void 0:y.extractWithLocation()})},Extras:function(a,p,f){return p.asIteration().children.map(w=>n(w,w.sourceString))},RequirementsReq:function(a,p){return n(this,{type:"RequirementsFile",path:p.sourceString})},ConstraintsReq:function(a,p){return n(this,{type:"ConstraintsFile",path:p.sourceString})},UrlSpec:function(a,p){return n(p,p.sourceString)},QuotedMarker:(a,p)=>n(p,p.extract()),VersionSpec_parenthesized:(a,p,f)=>p.extractWithLocation()||[],VersionMany:a=>{const p=a.asIteration().children;if(p.length!==0)return p.map(f=>f.extractWithLocation())},VersionOne:function(a,p){return n(this,{operator:n(a,a.sourceString),version:n(p,p.sourceString)})}}),t.semantics.addOperation("extractLooselyWithLocation",{LooseFile:a=>a.asIteration().children.map(p=>p.extractLooselyWithLocation()).filter(Boolean),LooseLine:(a,p)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLooselyWithLocation())||null},LooseNameReq:function(a,p,f,w){var L;return n(this,{type:"ProjectName",name:n(a,a.sourceString),extras:(L=p.child(0))===null||L===void 0?void 0:L.extractLooselyWithLocation(),versionSpec:f.extractLooselyWithLocation()})},LooseNonNameReq:a=>null,LooseExtras:function(a,p,f,w){return p.asIteration().children.map(L=>n(L,L.sourceString))},LooseVersionSpec_parenthesized:(a,p,f)=>p.extractLooselyWithLocation()||[],LooseVersionMany:(a,p)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(w=>w.extractLooselyWithLocation())},LooseVersionOne:function(a,p){return n(this,{operator:n(a,a.sourceString),...p.sourceString?{version:n(p,p.sourceString)}:{}})}});class l extends Error{}t.RequirementsSyntaxError=l})(wn)),wn}var Dr={},Us;function tu(){if(Us)return Dr;Us=1,Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.VersionOperator=Dr.EnvironmentMarkerVariable=void 0;var t;(function(r){r.PythonVersion="python_version",r.PythonFullVersion="python_full_version",r.OsName="os_name",r.SysPlatform="sys_platform",r.PlatformRelease="platform_release",r.PlatformSystem="platform_system",r.PlatformVersion="platform_version",r.PlatformMachine="platform_machine",r.PlatformPythonImplementation="platform_python_implementation",r.ImplementationName="implementation_name",r.ImplementationVersion="implementation_version",r.Extra="extra"})(t||(Dr.EnvironmentMarkerVariable=t={}));var e;return(function(r){r.CompatibleRelease="~=",r.VersionMatching="==",r.VersionExclusion="!=",r.LessThanOrMatching="<=",r.GreaterThanOrMatching=">=",r.LessThan="<",r.GreaterThan=">",r.ArbitrarilyEqual="==="})(e||(Dr.VersionOperator=e={})),Dr}var js;function ru(){return js||(js=1,(function(t){var e=gr&&gr.__createBinding||(Object.create?(function(k,y,A,D){D===void 0&&(D=A);var W=Object.getOwnPropertyDescriptor(y,A);(!W||("get"in W?!y.__esModule:W.writable||W.configurable))&&(W={enumerable:!0,get:function(){return y[A]}}),Object.defineProperty(k,D,W)}):(function(k,y,A,D){D===void 0&&(D=A),k[D]=y[A]})),r=gr&&gr.__exportStar||function(k,y){for(var A in k)A!=="default"&&!Object.prototype.hasOwnProperty.call(y,A)&&e(y,k,A)},s=gr&&gr.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(t,"__esModule",{value:!0}),t.parsePipRequirementsLineLoosely=t.parsePipRequirementsFileLoosely=t.parsePipRequirementsLine=t.parsePipRequirementsFile=t.RequirementsSyntaxError=void 0;const n=s(Da()),l=zs();var a=zs();Object.defineProperty(t,"RequirementsSyntaxError",{enumerable:!0,get:function(){return a.RequirementsSyntaxError}}),r(tu(),t);function p(k,y){const A=n.default.match(k,"File");if(A.failed())throw new l.RequirementsSyntaxError(`Failed to parse requirements file. ${A.shortMessage}`);return y?.includeLocations?(0,l.semantics)(A).extractWithLocation():(0,l.semantics)(A).extract()}t.parsePipRequirementsFile=p;function f(k,y){const A=n.default.match(k,"Line");if(A.failed())throw new l.RequirementsSyntaxError(`Failed to parse requirements line. ${A.shortMessage}`);return y?.includeLocations?(0,l.semantics)(A).extractWithLocation():(0,l.semantics)(A).extract()}t.parsePipRequirementsLine=f;function w(k,y){const A=n.default.match(k,"LooseFile");if(A.failed())throw new l.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${A.shortMessage}`);return y?.includeLocations?(0,l.semantics)(A).extractLooselyWithLocation():(0,l.semantics)(A).extractLoosely()}t.parsePipRequirementsFileLoosely=w;function L(k,y){const A=n.default.match(k,"LooseLine");if(A.failed())throw new l.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${A.shortMessage}`);return y?.includeLocations?(0,l.semantics)(A).extractLooselyWithLocation():(0,l.semantics)(A).extractLoosely()}t.parsePipRequirementsLineLoosely=L})(gr)),gr}var nu=ru();function iu(t){return new Worker("/assets/pyworker-Drd8fvVW.js",{type:"module",name:t?.name})}let su=0;class au{constructor(){this.pendingMessages=new Map}async init(e,r){this.workspace=e,this.vars=r??{},this.worker=new iu,this.worker.onmessage=s=>{this.handleWorkerMessage(s.data)},this.worker.onerror=s=>{console.error("Python Worker error:",s)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const s=e.payload.prompt||"Input:",n=window.prompt(s);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:n,cancelled:n===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:s,message:n}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",n,s);return}const r=this.pendingMessages.get(e.id);r&&(this.pendingMessages.delete(e.id),e.type==="success"?r.resolve(e.payload):e.type==="error"&&r.reject(new Error(e.payload.message)))}async sendMessage(e,r){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const s=`msg-${su++}`,n={id:s,type:e,payload:r};return new Promise((l,a)=>{this.pendingMessages.set(s,{resolve:l,reject:a}),this.worker.postMessage(n)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,r){const s=await this.sendMessage("runFunction",{name:e,args:r});return Ye(lr,this.workspace),s}async setGlobal(e,r){await this.sendMessage("setGlobal",{key:e,value:r})}async mountWorkspace(e="/workspace"){const r=await Rt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:r.getHandle(),mountPoint:e})}async installDependencies(){const e=await this.workspace?.getResource("requirements.txt");if(e){const r=(await e.getContents()).replaceAll("\r",""),s=nu.parsePipRequirementsFile(r).filter(n=>"name"in n).map(n=>n.name);await this.loadPackages(s)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),Ye(lr,this.workspace)}async execCode(e){const r=await this.sendMessage("execCode",{code:e});return Ye(lr,this.workspace),r}async execScript(e){const r=e.split(".")[0],s=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(r,s)}async execModule(e,r){const s=await this.sendMessage("execModule",{moduleName:e,entryName:r,vars:this.vars});return Ye(lr,this.workspace),s}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class ou{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?j``:j`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(e=>{const r=e.dependencies||{},s=Object.entries(r);return s.length===0?j``:j`
                        <wa-tree-item expanded>
                            <span>${e.name}</span>
                            ${s.map(([n,l])=>j`
                                <wa-tree-item>
                                    <span>${n} <small>${l}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const li=new ou,lu="https://api.github.com";function cu(){const t=qn.getCurrentApp();if(t?.metadata?.github){const e=t.metadata.github;if(e.owner&&e.repo)return{owner:e.owner,repo:e.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function uu(t=100){try{const e=cu(),r=await fetch(`${lu}/repos/${e.owner}/${e.repo}/releases?per_page=${t}`);return r.ok?await r.json():[]}catch(e){return console.error("Failed to fetch releases:",e),[]}}function pu(t,e){const r=t.replace(/^v/,""),s=e.replace(/^v/,""),n=r.split(".").map(Number),l=s.split(".").map(Number);for(let a=0;a<Math.max(n.length,l.length);a++){const p=n[a]||0,f=l[a]||0;if(f>p)return!0;if(f<p)return!1}return!1}pt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{const e=qn.getCurrentApp();if(!e){at("No app loaded");return}const r=li.hasPackages(),s=li.renderTree();let n=null;const l=()=>(n||(n=document.getElementById("global-dialog-container")||document.createElement("div"),n.id||(n.id="global-dialog-container",document.body.appendChild(n))),n),a=()=>{n&&kr(j``,n)},p=W=>{const le=He.parse(W,{async:!1});return j`${Ln(le)}`};let f=[];try{f=await uu()}catch{f=[]}const w=e.version==="0.0.0",L=f.length>0?f.findIndex(W=>W.tag_name===e.version):-1,k=L>=0?L:0;let y=k;const A=W=>{if(w)return`**Development Build**

${e.description||""}`;if(f.length===0)return`**Version:** ${e.version}

${e.description||""}`;const le=f[W],ke=le.tag_name===e.version;let z=`**Version:** ${le.tag_name}`;ke&&(z+=" (Current)"),z+=`

`;const R=new Date(le.published_at).toLocaleDateString();return z+=`**Released:** ${R}

`,!ke&&pu(e.version,le.tag_name)&&(z+=`⚠️ **Update available**

`),le.body&&(z+=`---

${le.body}`),z},D=W=>{const le=A(W),ke=f.length>0,z=j`
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
                                ${r?j`<wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>`:""}
                                
                                <wa-tab-panel name="release">
                                    ${p(le)}
                                </wa-tab-panel>
                                
                                ${r?j`
                                    <wa-tab-panel name="packages">
                                        ${s}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${ke?j`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${W===f.length-1}
                                    @click=${()=>{W<f.length-1&&(y=W+1,D(y))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${W===0}
                                    @click=${()=>{W>0&&(y=W-1,D(y))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" @click=${a}>Close</wa-button>
                        </div>
                    </wa-dialog>
                `;kr(z,l())};return D(k),new Promise(W=>{const le=()=>{n?.querySelector("wa-dialog[open]")?setTimeout(le,100):W()};le()})}}});pt({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const r=new au,s=await Rt.getWorkspace();await r.init(s,t),await r.installDependencies(),await r.execScript(e)}}});pt({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});pt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=Ge.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=Ge.get();return!t||!t.isDirty()}}});pt({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});pt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{document.documentElement.classList.toggle("wa-dark")||document.documentElement.classList.toggle("wa-light")}},contribution:{target:cn,icon:"circle-half-stroke",label:"Theme Switcher"}});pt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:cn,icon:"expand",label:"Fullscreen"}});pt({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:t=>{const e={title:"settings.json",data:{async getContents(){const r=await Gt.getAll();return JSON.stringify(r,void 0,2)},getName(){return e.key},saveContents(r){const s=JSON.parse(r);return Gt.setAll(s)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>j`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,Er.loadEditor(e).then()}},contribution:{target:cn,icon:"gear",label:"Open Settings"}});pt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>j`
                <k-extensions></k-extensions>`,Er.loadEditor(e).then()}},contribution:{target:cn,icon:"puzzle-piece",label:"Open Extensions"}});Re.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?at(t):qt(t))}}});const du="@kispace/appspace",hu="0.0.0",fu={"@awesome.me/webawesome":"^3.0.0","@fortawesome/fontawesome-free":"^7.1.0","@fortawesome/fontawesome-svg-core":"^7.1.0","@fortawesome/free-solid-svg-icons":"^7.1.0","@lit-labs/signals":"^0.1.3","@lit/context":"^1.1.6","@mlc-ai/web-llm":"^0.2.79","@types/papaparse":"^5.3.16","@xterm/xterm":"^5.5.0",axios:"^1.13.1",dotenv:"^17.2.3","idb-keyval":"^6.2.2",jsonata:"^2.1.0",jszip:"^3.10.1",lit:"^3.2.1",marked:"^16.4.1","monaco-editor":"^0.54.0",papaparse:"^5.5.3","pip-requirements-js":"^1.0.2","pubsub-js":"^1.9.5",pyodide:"^0.27.7","signal-polyfill":"^0.2.2","signal-utils":"^0.21.1","toastify-js":"^1.12.0",uuid:"^13.0.0","wasm-git":"^0.0.13"},mu={typescript:"^5.9.3",vite:"^7.1.12"},Kn={name:du,version:hu,dependencies:fu,devDependencies:mu};li.addPackage({name:Kn.name,version:Kn.version,dependencies:Kn.dependencies,devDependencies:Kn.devDependencies});function Jn(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ci={exports:{}},Ws;function gu(){return Ws||(Ws=1,(function(t,e){(function(r){t.exports=r()})(function(){return(function(){function r(s,n,l){function a(w,L){if(!n[w]){if(!s[w]){var k=typeof Jn=="function"&&Jn;if(!L&&k)return k(w,!0);if(p)return p(w,!0);var y=new Error("Cannot find module '"+w+"'");throw y.code="MODULE_NOT_FOUND",y}var A=n[w]={exports:{}};s[w][0].call(A.exports,function(D){var W=s[w][1][D];return a(W||D)},A,A.exports,r,s,n,l)}return n[w].exports}for(var p=typeof Jn=="function"&&Jn,f=0;f<l.length;f++)a(l[f]);return a}return r})()({1:[function(r,s,n){const l=r("./utils"),a=(function(){const p=l.stringToArray,f=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],w=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],L=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],k=["Thousand","Million","Billion","Trillion"];function y(T,M){var P=function(ne,X,U){var re="";if(ne<=19)re=(X?" and ":"")+(U?w[ne]:f[ne]);else if(ne<100){const $e=Math.floor(ne/10),Ne=ne%10;re=(X?" and ":"")+L[$e-2],Ne>0?re+="-"+P(Ne,!1,U):U&&(re=re.substring(0,re.length-1)+"ieth")}else if(ne<1e3){const $e=Math.floor(ne/100),Ne=ne%100;re=(X?", ":"")+f[$e]+" Hundred",Ne>0?re+=P(Ne,!0,U):U&&(re+="th")}else{var ve=Math.floor(Math.log10(ne)/3);ve>k.length&&(ve=k.length);const $e=Math.pow(10,ve*3),Ne=Math.floor(ne/$e),ge=ne-Ne*$e;re=(X?", ":"")+P(Ne,!1,!1)+" "+k[ve-1],ge>0?re+=P(ge,!0,U):U&&(re+="th")}return re},H=P(T,!1,M);return H}const A={};f.forEach(function(T,M){A[T.toLowerCase()]=M}),w.forEach(function(T,M){A[T.toLowerCase()]=M}),L.forEach(function(T,M){const P=T.toLowerCase();A[P]=(M+2)*10,A[P.substring(0,T.length-1)+"ieth"]=A[P]}),A.hundredth=100,k.forEach(function(T,M){const P=T.toLowerCase(),H=Math.pow(10,(M+1)*3);A[P]=H,A[P+"th"]=H});function D(T){const P=T.split(/,\s|\sand\s|[\s\\-]/).map(X=>A[X]);let H=[0];return P.forEach(X=>{if(X<100){let U=H.pop();U>=1e3&&(H.push(U),U=0),H.push(U+X)}else H.push(H.pop()*X)}),H.reduce((X,U)=>X+U,0)}const W=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],le={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function ke(T){for(var M=0;M<W.length;M++){const P=W[M];if(T>=P[0])return P[1]+ke(T-P[0])}return""}function z(T){for(var M=0,P=1,H=T.length-1;H>=0;H--){const ne=T[H],X=le[ne];X<P?M-=X:(P=X,M+=X)}return M}function R(T,M){for(var P=[],H=M.charCodeAt(0);T>0;)P.unshift(String.fromCharCode((T-1)%26+H)),T=Math.floor((T-1)/26);return P.join("")}function G(T,M){for(var P=M.charCodeAt(0),H=0,ne=0;ne<T.length;ne++)H+=(T.charCodeAt(T.length-ne-1)-P+1)*Math.pow(26,ne);return H}function F(T,M){if(typeof T>"u")return;T=Math.floor(T);const P=Te(M);return Z(T,P)}const O={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},B={UPPER:"upper",LOWER:"lower",TITLE:"title"};function Z(T,M){let P;const H=T<0;switch(T=Math.abs(T),M.primary){case O.LETTERS:P=R(T,M.case===B.UPPER?"A":"a");break;case O.ROMAN:P=ke(T),M.case===B.UPPER&&(P=P.toUpperCase());break;case O.WORDS:P=y(T,M.ordinal),M.case===B.UPPER?P=P.toUpperCase():M.case===B.LOWER&&(P=P.toLowerCase());break;case O.DECIMAL:P=""+T;var ne=M.mandatoryDigits-P.length;if(ne>0){var X=new Array(ne+1).join("0");P=X+P}if(M.zeroCode!==48&&(P=p(P).map($e=>String.fromCodePoint($e.codePointAt(0)+M.zeroCode-48)).join("")),M.regular){const $e=Math.floor((P.length-1)/M.groupingSeparators.position);for(let Ne=$e;Ne>0;Ne--){const ge=P.length-Ne*M.groupingSeparators.position;P=P.substr(0,ge)+M.groupingSeparators.character+P.substr(ge)}}else M.groupingSeparators.reverse().forEach($e=>{const Ne=P.length-$e.position;P=P.substr(0,Ne)+$e.character+P.substr(Ne)});if(M.ordinal){var U={1:"st",2:"nd",3:"rd"},re=P[P.length-1],ve=U[re];(!ve||P.length>1&&P[P.length-2]==="1")&&(ve="th"),P=P+ve}break;case O.SEQUENCE:throw{code:"D3130",value:M.token}}return H&&(P="-"+P),P}const Se=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function Te(T){const M={type:"integer",primary:O.DECIMAL,case:B.LOWER,ordinal:!1};let P,H;const ne=T.lastIndexOf(";");switch(ne===-1?P=T:(P=T.substring(0,ne),H=T.substring(ne+1),H[0]==="o"&&(M.ordinal=!0)),P){case"A":M.case=B.UPPER;case"a":M.primary=O.LETTERS;break;case"I":M.case=B.UPPER;case"i":M.primary=O.ROMAN;break;case"W":M.case=B.UPPER,M.primary=O.WORDS;break;case"Ww":M.case=B.TITLE,M.primary=O.WORDS;break;case"w":M.primary=O.WORDS;break;default:{let X=null,U=0,re=0,ve=[],$e=0;if(p(P).map(ge=>ge.codePointAt(0)).reverse().forEach(ge=>{let xe=!1;for(let Pe=0;Pe<Se.length;Pe++){const he=Se[Pe];if(ge>=he&&ge<=he+9){if(xe=!0,U++,$e++,X===null)X=he;else if(he!==X)throw{code:"D3131"};break}}xe||(ge===35?($e++,re++):ve.push({position:$e,character:String.fromCodePoint(ge)}))}),U>0){M.primary=O.DECIMAL,M.zeroCode=X,M.mandatoryDigits=U,M.optionalDigits=re;const xe=function(Pe){if(Pe.length===0)return 0;const he=Pe[0].character;for(let ht=1;ht<Pe.length;ht++)if(Pe[ht].character!==he)return 0;const dt=Pe.map(ht=>ht.position),Mt=function(ht,wt){return wt===0?ht:Mt(wt,ht%wt)},bt=dt.reduce(Mt);for(let ht=1;ht<=dt.length;ht++)if(dt.indexOf(ht*bt)===-1)return 0;return bt}(ve);xe>0?(M.regular=!0,M.groupingSeparators={position:xe,character:ve[0].character}):(M.regular=!1,M.groupingSeparators=ve)}else M.primary=O.SEQUENCE,M.token=P}}return M}const ce={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function q(T){var M=[];const P={type:"datetime",parts:M},H=function(xe,Pe){if(Pe>xe){let he=T.substring(xe,Pe);he=he.split("]]").join("]"),M.push({type:"literal",value:he})}};for(var ne=0,X=0;X<T.length;){if(T.charAt(X)==="["){if(T.charAt(X+1)==="["){H(ne,X),M.push({type:"literal",value:"["}),X+=2,ne=X;continue}if(H(ne,X),ne=X,X=T.indexOf("]",ne),X===-1)throw{code:"D3135"};let xe=T.substring(ne+1,X);xe=xe.split(/\s+/).join("");var U={type:"marker",component:xe.charAt(0)},re=xe.lastIndexOf(","),ve;if(re!==-1){const Pe=xe.substring(re+1),he=Pe.indexOf("-");let dt,Mt;const bt=function(wt){if(!(typeof wt>"u"||wt==="*"))return parseInt(wt)};he===-1?dt=Pe:(dt=Pe.substring(0,he),Mt=Pe.substring(he+1));const ht={min:bt(dt),max:bt(Mt)};U.width=ht,ve=xe.substring(1,re)}else ve=xe.substring(1);if(ve.length===1)U.presentation1=ve;else if(ve.length>1){var $e=ve.charAt(ve.length-1);"atco".indexOf($e)!==-1?(U.presentation2=$e,$e==="o"&&(U.ordinal=!0),U.presentation1=ve.substring(0,ve.length-1)):U.presentation1=ve}else U.presentation1=ce[U.component];if(typeof U.presentation1>"u")throw{code:"D3132",value:U.component};if(U.presentation1[0]==="n")U.names=B.LOWER;else if(U.presentation1[0]==="N")U.presentation1[1]==="n"?U.names=B.TITLE:U.names=B.UPPER;else if("YMDdFWwXxHhmsf".indexOf(U.component)!==-1){var Ne=U.presentation1;if(U.presentation2&&(Ne+=";"+U.presentation2),U.integerFormat=Te(Ne),U.width&&U.width.min!==void 0&&U.integerFormat.mandatoryDigits<U.width.min&&(U.integerFormat.mandatoryDigits=U.width.min),U.component==="Y")if(U.n=-1,U.width&&U.width.max!==void 0)U.n=U.width.max,U.integerFormat.mandatoryDigits=U.n;else{var ge=U.integerFormat.mandatoryDigits+U.integerFormat.optionalDigits;ge>=2&&(U.n=ge)}const Pe=M[M.length-1];Pe&&Pe.integerFormat&&(Pe.integerFormat.parseWidth=Pe.integerFormat.mandatoryDigits)}(U.component==="Z"||U.component==="z")&&(U.integerFormat=Te(U.presentation1)),M.push(U),ne=X+1}X++}return H(ne,X),P}const ie=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],me=["January","February","March","April","May","June","July","August","September","October","November","December"],Ie=1e3*60*60*24,se=function(T){const M=Date.UTC(T.year,T.month);var P=new Date(M).getUTCDay();return P===0&&(P=7),P>4?M+(8-P)*Ie:M-(P-1)*Ie},ee=function(T,M){return{year:T,month:M,nextMonth:function(){return M===11?ee(T+1,0):ee(T,M+1)},previousMonth:function(){return M===0?ee(T-1,11):ee(T,M-1)},nextYear:function(){return ee(T+1,M)},previousYear:function(){return ee(T-1,M)}}},ae=function(T,M){return(M-T)/(Ie*7)+1},V=(T,M)=>{let P;switch(M){case"Y":P=T.getUTCFullYear();break;case"M":P=T.getUTCMonth()+1;break;case"D":P=T.getUTCDate();break;case"d":{const H=Date.UTC(T.getUTCFullYear(),T.getUTCMonth(),T.getUTCDate()),ne=Date.UTC(T.getUTCFullYear(),0);P=(H-ne)/Ie+1;break}case"F":P=T.getUTCDay(),P===0&&(P=7);break;case"W":{const H=ee(T.getUTCFullYear(),0),ne=se(H),X=Date.UTC(H.year,T.getUTCMonth(),T.getUTCDate());let U=ae(ne,X);if(U>52){const re=se(H.nextYear());X>=re&&(U=1)}else if(U<1){const re=se(H.previousYear());U=ae(re,X)}P=Math.floor(U);break}case"w":{const H=ee(T.getUTCFullYear(),T.getUTCMonth()),ne=se(H),X=Date.UTC(H.year,H.month,T.getUTCDate());let U=ae(ne,X);if(U>4){const re=se(H.nextMonth());X>=re&&(U=1)}else if(U<1){const re=se(H.previousMonth());U=ae(re,X)}P=Math.floor(U);break}case"X":{const H=ee(T.getUTCFullYear(),0),ne=se(H),X=se(H.nextYear()),U=T.getTime();U<ne?P=H.year-1:U>=X?P=H.year+1:P=H.year;break}case"x":{const H=ee(T.getUTCFullYear(),T.getUTCMonth()),ne=se(H),X=H.nextMonth(),U=se(X),re=T.getTime();re<ne?P=H.previousMonth().month+1:re>=U?P=X.month+1:P=H.month+1;break}case"H":P=T.getUTCHours();break;case"h":P=T.getUTCHours(),P=P%12,P===0&&(P=12);break;case"P":P=T.getUTCHours()>=12?"pm":"am";break;case"m":P=T.getUTCMinutes();break;case"s":P=T.getUTCSeconds();break;case"f":P=T.getUTCMilliseconds();break;case"Z":case"z":break;case"C":P="ISO";break;case"E":P="ISO";break}return P};let we=null;function Le(T,M,P){var H=0,ne=0;if(typeof P<"u"){const Ne=parseInt(P);H=Math.floor(Ne/100),ne=Ne%100}var X=function(Ne,ge){var xe=V(Ne,ge.component);if("YMDdFWwXxHhms".indexOf(ge.component)!==-1)if(ge.component==="Y"&&ge.n!==-1&&(xe=xe%Math.pow(10,ge.n)),ge.names){if(ge.component==="M"||ge.component==="x")xe=me[xe-1];else if(ge.component==="F")xe=ie[xe];else throw{code:"D3133",value:ge.component};ge.names===B.UPPER?xe=xe.toUpperCase():ge.names===B.LOWER&&(xe=xe.toLowerCase()),ge.width&&xe.length>ge.width.max&&(xe=xe.substring(0,ge.width.max))}else xe=Z(xe,ge.integerFormat);else if(ge.component==="f")xe=Z(xe,ge.integerFormat);else if(ge.component==="Z"||ge.component==="z"){const Pe=H*100+ne;if(ge.integerFormat.regular)xe=Z(Pe,ge.integerFormat);else{const he=ge.integerFormat.mandatoryDigits;if(he===1||he===2)xe=Z(H,ge.integerFormat),ne!==0&&(xe+=":"+F(ne,"00"));else if(he===3||he===4)xe=Z(Pe,ge.integerFormat);else throw{code:"D3134",value:he}}Pe>=0&&(xe="+"+xe),ge.component==="z"&&(xe="GMT"+xe),Pe===0&&ge.presentation2==="t"&&(xe="Z")}else ge.component==="P"&&ge.names===B.UPPER&&(xe=xe.toUpperCase());return xe};let U;typeof M>"u"?(we===null&&(we=q("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),U=we):U=q(M);const re=(60*H+ne)*60*1e3,ve=new Date(T+re);let $e="";return U.parts.forEach(function(Ne){Ne.type==="literal"?$e+=Ne.value:$e+=X(ve,Ne)}),$e}function b(T){var M={};if(T.type==="datetime")M.type="datetime",M.parts=T.parts.map(function(P){var H={};if(P.type==="literal")H.regex=P.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(P.component==="Z"||P.component==="z"){let X;Array.isArray(P.integerFormat.groupingSeparators)||(X=P.integerFormat.groupingSeparators),H.regex="",P.component==="z"&&(H.regex="GMT"),H.regex+="[-+][0-9]+",X&&(H.regex+=X.character+"[0-9]+"),H.parse=function(U){P.component==="z"&&(U=U.substring(3));let re=0,ve=0;return X?(re=Number.parseInt(U.substring(0,U.indexOf(X.character))),ve=Number.parseInt(U.substring(U.indexOf(X.character)+1))):U.length-1<=2?re=Number.parseInt(U):(re=Number.parseInt(U.substring(0,3)),ve=Number.parseInt(U.substring(3))),re*60+ve}}else if(P.integerFormat)H=b(P.integerFormat);else{H.regex="[a-zA-Z]+";var ne={};if(P.component==="M"||P.component==="x")me.forEach(function(X,U){P.width&&P.width.max?ne[X.substring(0,P.width.max)]=U+1:ne[X]=U+1});else if(P.component==="F")ie.forEach(function(X,U){U>0&&(P.width&&P.width.max?ne[X.substring(0,P.width.max)]=U:ne[X]=U)});else if(P.component==="P")ne={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:P.component};H.parse=function(X){return ne[X]}}return H.component=P.component,H});else{M.type="integer";const P=T.case===B.UPPER;switch(T.primary){case O.LETTERS:M.regex=P?"[A-Z]+":"[a-z]+",M.parse=function(H){return G(H,P?"A":"a")};break;case O.ROMAN:M.regex=P?"[MDCLXVI]+":"[mdclxvi]+",M.parse=function(H){return z(P?H:H.toUpperCase())};break;case O.WORDS:M.regex="(?:"+Object.keys(A).concat("and","[\\-, ]").join("|")+")+",M.parse=function(H){return D(H.toLowerCase())};break;case O.DECIMAL:M.regex="[0-9]",T.parseWidth?M.regex+=`{${T.parseWidth}}`:M.regex+="+",T.ordinal&&(M.regex+="(?:th|st|nd|rd)"),M.parse=function(H){let ne=H;return T.ordinal&&(ne=H.substring(0,H.length-2)),T.regular?ne=ne.split(",").join(""):T.groupingSeparators.forEach(X=>{ne=ne.split(X.character).join("")}),T.zeroCode!==48&&(ne=ne.split("").map(X=>String.fromCodePoint(X.codePointAt(0)-T.zeroCode+48)).join("")),parseInt(ne)};break;case O.SEQUENCE:throw{code:"D3130",value:T.token}}}return M}function I(T,M){if(typeof T>"u")return;const P=Te(M);return b(P).parse(T)}function pe(T,M){const P=q(M),H=b(P),ne="^"+H.parts.map(ve=>"("+ve.regex+")").join("")+"$";var U=new RegExp(ne,"i").exec(T);if(U!==null){const he={};for(let qe=1;qe<U.length;qe++){const m=H.parts[qe-1];m.parse&&(he[m.component]=m.parse(U[qe]))}if(Object.getOwnPropertyNames(he).length===0)return;let dt=0;const Mt=qe=>{dt<<=1,dt+=qe?1:0},bt=qe=>!(~qe&dt)&&!!(qe&dt);"YXMxWwdD".split("").forEach(qe=>Mt(he[qe]));const wt=!bt(161)&&bt(130),Wt=bt(84),ir=!Wt&&bt(72);dt=0,"PHhmsf".split("").forEach(qe=>Mt(he[qe]));const Kt=!bt(23)&&bt(47),dr=(wt?"YD":Wt?"XxwF":ir?"XWF":"YMD")+(Kt?"Phmsf":"Hmsf"),Ft=this.environment.timestamp;let nt=!1,Bt=!1;if(dr.split("").forEach(qe=>{if(typeof he[qe]>"u")nt?(he[qe]="MDd".indexOf(qe)!==-1?1:0,Bt=!0):he[qe]=V(Ft,qe);else if(nt=!0,Bt)throw{code:"D3136"}}),he.M>0?he.M-=1:he.M=0,wt){const qe=Date.UTC(he.Y,0),m=(he.d-1)*1e3*60*60*24,x=new Date(qe+m);he.M=x.getUTCMonth(),he.D=x.getUTCDate()}if(Wt)throw{code:"D3136"};if(ir)throw{code:"D3136"};Kt&&(he.H=he.h===12?0:he.h,he.P===1&&(he.H+=12));var re=Date.UTC(he.Y,he.M,he.D,he.H,he.m,he.s,he.f);return(he.Z||he.z)&&(re-=(he.Z||he.z)*60*1e3),re}}var Ee=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ke(T,M){if(!(typeof T>"u"))if(typeof M>"u"){if(!Ee.test(T))throw{stack:new Error().stack,code:"D3110",value:T};return Date.parse(T)}else return pe.call(this,T,M)}function De(T,M,P){if(!(typeof T>"u"))return Le.call(this,T,M,P)}return{formatInteger:F,parseInteger:I,fromMillis:De,toMillis:Ke}})();s.exports=a},{"./utils":6}],2:[function(r,s,n){(function(l){(function(){var a=r("./utils");const p=(()=>{var f=a.isNumeric,w=a.isArrayOfStrings,L=a.isArrayOfNumbers,k=a.createSequence,y=a.isSequence,A=a.isFunction,D=a.isLambda,W=a.isPromise,le=a.getFunctionArity,ke=a.isDeepEqual,z=a.stringToArray;function R(c){if(!(typeof c>"u")){var h=0;return c.forEach(function(g){h+=g}),h}}function G(c){return typeof c>"u"?0:c.length}function F(c){if(!(typeof c>"u"||c.length===0))return Math.max.apply(Math,c)}function O(c){if(!(typeof c>"u"||c.length===0))return Math.min.apply(Math,c)}function B(c){if(!(typeof c>"u"||c.length===0)){var h=0;return c.forEach(function(g){h+=g}),h/c.length}}function Z(c,h=!1){if(!(typeof c>"u")){var g;if(typeof c=="string")g=c;else if(A(c))g="";else{if(typeof c=="number"&&!isFinite(c))throw{code:"D3001",value:c,stack:new Error().stack};var _=h?2:0;Array.isArray(c)&&c.outerWrapper&&(c=c[0]),g=JSON.stringify(c,function(S,$){return typeof $<"u"&&$!==null&&$.toPrecision&&f($)?Number($.toPrecision(15)):$&&A($)?"":$},_)}return g}}function Se(c,h,g){if(!(typeof c>"u")){var _=z(c),S=_.length;if(S+h<0&&(h=0),typeof g<"u"){if(g<=0)return"";var $=h>=0?h+g:S+h+g;return _.slice(h,$).join("")}return _.slice(h).join("")}}function Te(c,h){if(!(typeof c>"u")){var g=c.indexOf(h);return g>-1?c.substr(0,g):c}}function ce(c,h){if(!(typeof c>"u")){var g=c.indexOf(h);return g>-1?c.substr(g+h.length):c}}function q(c){if(!(typeof c>"u"))return c.toLowerCase()}function ie(c){if(!(typeof c>"u"))return c.toUpperCase()}function me(c){if(!(typeof c>"u"))return z(c).length}function Ie(c){if(!(typeof c>"u")){var h=c.replace(/[ \t\n\r]+/gm," ");return h.charAt(0)===" "&&(h=h.substring(1)),h.charAt(h.length-1)===" "&&(h=h.substring(0,h.length-1)),h}}function se(c,h,g){if(!(typeof c>"u")){(typeof g>"u"||g.length===0)&&(g=" ");var _;h=Math.trunc(h);var S=Math.abs(h)-me(c);if(S>0){var $=new Array(S+1).join(g);g.length>1&&($=Se($,0,S)),h>0?_=c+$:_=$+c}else _=c;return _}}async function ee(c,h){var g=c.apply(this,[h]);if(W(g)&&(g=await g),g&&!(typeof g.start=="number"||g.end==="number"||Array.isArray(g.groups)||A(g.next)))throw{code:"T1010",stack:new Error().stack};return g}async function ae(c,h){if(!(typeof c>"u")){var g;if(typeof h=="string")g=c.indexOf(h)!==-1;else{var _=await ee(h,c);g=typeof _<"u"}return g}}async function V(c,h,g){if(!(typeof c>"u")){if(g<0)throw{stack:new Error().stack,value:g,code:"D3040",index:3};var _=k();if(typeof g>"u"||g>0){var S=0,$=await ee(h,c);if(typeof $<"u")for(;typeof $<"u"&&(typeof g>"u"||S<g);)_.push({match:$.match,index:$.start,groups:$.groups}),$=await ee($.next),S++}return _}}async function we(c,h,g,_){if(!(typeof c>"u")){var S=this;if(h==="")throw{code:"D3010",stack:new Error().stack,value:h,index:2};if(_<0)throw{code:"D3011",stack:new Error().stack,value:_,index:4};var $;typeof g=="string"?$=function(Me){for(var lt="",Oe=0,tt=g.indexOf("$",Oe);tt!==-1&&Oe<g.length;){lt+=g.substring(Oe,tt),Oe=tt+1;var $t=g.charAt(Oe);if($t==="$")lt+="$",Oe++;else if($t==="0")lt+=Me.match,Oe++;else{var Je;if(Me.groups.length===0?Je=1:Je=Math.floor(Math.log(Me.groups.length)*Math.LOG10E)+1,tt=parseInt(g.substring(Oe,Oe+Je),10),Je>1&&tt>Me.groups.length&&(tt=parseInt(g.substring(Oe,Oe+Je-1),10)),isNaN(tt))lt+="$";else{if(Me.groups.length>0){var hr=Me.groups[tt-1];typeof hr<"u"&&(lt+=hr)}Oe+=tt.toString().length}}tt=g.indexOf("$",Oe)}return lt+=g.substring(Oe),lt}:$=g;var Y="",de=0;if(typeof _>"u"||_>0){var ye=0;if(typeof h=="string"){for(var je=c.indexOf(h,de);je!==-1&&(typeof _>"u"||ye<_);)Y+=c.substring(de,je),Y+=g,de=je+h.length,ye++,je=c.indexOf(h,de);Y+=c.substring(de)}else{var _e=await ee(h,c);if(typeof _e<"u"){for(;typeof _e<"u"&&(typeof _>"u"||ye<_);){Y+=c.substring(de,_e.start);var We=$.apply(S,[_e]);if(W(We)&&(We=await We),typeof We=="string")Y+=We;else throw{code:"D3012",stack:new Error().stack,value:We};de=_e.start+_e.match.length,ye++,_e=await ee(_e.next)}Y+=c.substring(de)}else Y=c}}else Y=c;return Y}}function Le(c){if(!(typeof c>"u")){var h=typeof window<"u"?window.btoa:function(g){return new l.Buffer.from(g,"binary").toString("base64")};return h(c)}}function b(c){if(!(typeof c>"u")){var h=typeof window<"u"?window.atob:function(g){return new l.Buffer.from(g,"base64").toString("binary")};return h(c)}}function I(c){if(!(typeof c>"u")){var h;try{h=encodeURIComponent(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"encodeUrlComponent"}}return h}}function pe(c){if(!(typeof c>"u")){var h;try{h=encodeURI(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"encodeUrl"}}return h}}function Ee(c){if(!(typeof c>"u")){var h;try{h=decodeURIComponent(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"decodeUrlComponent"}}return h}}function Ke(c){if(!(typeof c>"u")){var h;try{h=decodeURI(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"decodeUrl"}}return h}}async function De(c,h,g){if(!(typeof c>"u")){if(g<0)throw{code:"D3020",stack:new Error().stack,value:g,index:3};var _=[];if(typeof g>"u"||g>0)if(typeof h=="string")_=c.split(h,g);else{var S=0,$=await ee(h,c);if(typeof $<"u"){for(var Y=0;typeof $<"u"&&(typeof g>"u"||S<g);)_.push(c.substring(Y,$.start)),Y=$.end,$=await ee($.next),S++;(typeof g>"u"||S<g)&&_.push(c.substring(Y))}else _.push(c)}return _}}function T(c,h){if(!(typeof c>"u"))return typeof h>"u"&&(h=""),c.join(h)}function M(c,h,g){if(!(typeof c>"u")){var _={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},S=_;typeof g<"u"&&Object.keys(g).forEach(function(be){S[be]=g[be]});for(var $=[],Y=S["zero-digit"].charCodeAt(0),de=Y;de<Y+10;de++)$.push(String.fromCharCode(de));var ye=$.concat([S["decimal-separator"],S["exponent-separator"],S["grouping-separator"],S.digit,S["pattern-separator"]]),je=h.split(S["pattern-separator"]);if(je.length>2)throw{code:"D3080",stack:new Error().stack};var _e=function(be){var Qe=(function(){for(var rt,kt=0;kt<be.length;kt++)if(rt=be.charAt(kt),ye.indexOf(rt)!==-1&&rt!==S["exponent-separator"])return be.substring(0,kt)})(),gt=(function(){for(var rt,kt=be.length-1;kt>=0;kt--)if(rt=be.charAt(kt),ye.indexOf(rt)!==-1&&rt!==S["exponent-separator"])return be.substring(kt+1)})(),Xe=be.substring(Qe.length,be.length-gt.length),_t,Yt,It,it,Ct=be.indexOf(S["exponent-separator"],Qe.length);Ct===-1||Ct>be.length-gt.length?(_t=Xe,Yt=void 0):(_t=Xe.substring(0,Ct),Yt=Xe.substring(Ct+1));var Ot=_t.indexOf(S["decimal-separator"]);return Ot===-1?(It=_t,it=gt):(It=_t.substring(0,Ot),it=_t.substring(Ot+1)),{prefix:Qe,suffix:gt,activePart:Xe,mantissaPart:_t,exponentPart:Yt,integerPart:It,fractionalPart:it,subpicture:be}},We=function(be){var Qe,gt,Xe=be.subpicture,_t=Xe.indexOf(S["decimal-separator"]);_t!==Xe.lastIndexOf(S["decimal-separator"])&&(Qe="D3081"),Xe.indexOf(S.percent)!==Xe.lastIndexOf(S.percent)&&(Qe="D3082"),Xe.indexOf(S["per-mille"])!==Xe.lastIndexOf(S["per-mille"])&&(Qe="D3083"),Xe.indexOf(S.percent)!==-1&&Xe.indexOf(S["per-mille"])!==-1&&(Qe="D3084");var Yt=!1;for(gt=0;gt<be.mantissaPart.length;gt++){var It=be.mantissaPart.charAt(gt);if($.indexOf(It)!==-1||It===S.digit){Yt=!0;break}}Yt||(Qe="D3085");var it=be.activePart.split("").map(function(rt){return ye.indexOf(rt)===-1?"p":"a"}).join("");it.indexOf("p")!==-1&&(Qe="D3086"),_t!==-1?(Xe.charAt(_t-1)===S["grouping-separator"]||Xe.charAt(_t+1)===S["grouping-separator"])&&(Qe="D3087"):be.integerPart.charAt(be.integerPart.length-1)===S["grouping-separator"]&&(Qe="D3088"),Xe.indexOf(S["grouping-separator"]+S["grouping-separator"])!==-1&&(Qe="D3089");var Ct=be.integerPart.indexOf(S.digit);Ct!==-1&&be.integerPart.substring(0,Ct).split("").filter(function(rt){return $.indexOf(rt)>-1}).length>0&&(Qe="D3090"),Ct=be.fractionalPart.lastIndexOf(S.digit),Ct!==-1&&be.fractionalPart.substring(Ct).split("").filter(function(rt){return $.indexOf(rt)>-1}).length>0&&(Qe="D3091");var Ot=typeof be.exponentPart=="string";if(Ot&&be.exponentPart.length>0&&(Xe.indexOf(S.percent)!==-1||Xe.indexOf(S["per-mille"])!==-1)&&(Qe="D3092"),Ot&&(be.exponentPart.length===0||be.exponentPart.split("").filter(function(rt){return $.indexOf(rt)===-1}).length>0)&&(Qe="D3093"),Qe)throw{code:Qe,stack:new Error().stack}},Me=function(be){var Qe=function(ft,Pr){for(var mr=[],Zt=ft.indexOf(S["grouping-separator"]);Zt!==-1;){var Gr=(Pr?ft.substring(0,Zt):ft.substring(Zt)).split("").filter(function(Ir){return $.indexOf(Ir)!==-1||Ir===S.digit}).length;mr.push(Gr),Zt=be.integerPart.indexOf(S["grouping-separator"],Zt+1)}return mr},gt=Qe(be.integerPart),Xe=function(ft){if(ft.length===0)return 0;for(var Pr=function(Gr,Ir){return Ir===0?Gr:Pr(Ir,Gr%Ir)},mr=ft.reduce(Pr),Zt=1;Zt<=ft.length;Zt++)if(ft.indexOf(Zt*mr)===-1)return 0;return mr},_t=Xe(gt),Yt=Qe(be.fractionalPart,!0),It=be.integerPart.split("").filter(function(ft){return $.indexOf(ft)!==-1}).length,it=It,Ct=be.fractionalPart.split(""),Ot=Ct.filter(function(ft){return $.indexOf(ft)!==-1}).length,rt=Ct.filter(function(ft){return $.indexOf(ft)!==-1||ft===S.digit}).length,kt=typeof be.exponentPart=="string";It===0&&rt===0&&(kt?(Ot=1,rt=1):It=1),kt&&It===0&&be.integerPart.indexOf(S.digit)!==-1&&(It=1),It===0&&Ot===0&&(Ot=1);var Lr=0;return kt&&(Lr=be.exponentPart.split("").filter(function(ft){return $.indexOf(ft)!==-1}).length),{integerPartGroupingPositions:gt,regularGrouping:_t,minimumIntegerPartSize:It,scalingFactor:it,prefix:be.prefix,fractionalPartGroupingPositions:Yt,minimumFactionalPartSize:Ot,maximumFactionalPartSize:rt,minimumExponentSize:Lr,suffix:be.suffix,picture:be.subpicture}},lt=je.map(_e);lt.forEach(We);var Oe=lt.map(Me),tt=S["minus-sign"],$t=S["zero-digit"],Je=S["decimal-separator"],hr=S["grouping-separator"];Oe.length===1&&(Oe.push(JSON.parse(JSON.stringify(Oe[0]))),Oe[1].prefix=tt+Oe[1].prefix);var et;c>=0?et=Oe[0]:et=Oe[1];var Or;et.picture.indexOf(S.percent)!==-1?Or=c*100:et.picture.indexOf(S["per-mille"])!==-1?Or=c*1e3:Or=c;var ct,Jt;if(et.minimumExponentSize===0)ct=Or;else{var bi=Math.pow(10,et.scalingFactor),jn=Math.pow(10,et.scalingFactor-1);for(ct=Or,Jt=0;ct<jn;)ct*=10,Jt-=1;for(;ct>bi;)ct/=10,Jt+=1}var un=re(ct,et.maximumFactionalPartSize),Wn=function(be,Qe){var gt=Math.abs(be).toFixed(Qe);return $t!=="0"&&(gt=gt.split("").map(function(Xe){return Xe>="0"&&Xe<="9"?$[Xe.charCodeAt(0)-48]:Xe}).join("")),gt},Ce=Wn(un,et.maximumFactionalPartSize),ut=Ce.indexOf(".");for(ut===-1?Ce=Ce+Je:Ce=Ce.replace(".",Je);Ce.charAt(0)===$t;)Ce=Ce.substring(1);for(;Ce.charAt(Ce.length-1)===$t;)Ce=Ce.substring(0,Ce.length-1);ut=Ce.indexOf(Je);var fr=et.minimumIntegerPartSize-ut,pn=et.minimumFactionalPartSize-(Ce.length-ut-1);if(Ce=(fr>0?new Array(fr+1).join($t):"")+Ce,Ce=Ce+(pn>0?new Array(pn+1).join($t):""),ut=Ce.indexOf(Je),et.regularGrouping>0)for(var Et=Math.floor((ut-1)/et.regularGrouping),Tr=1;Tr<=Et;Tr++)Ce=[Ce.slice(0,ut-Tr*et.regularGrouping),hr,Ce.slice(ut-Tr*et.regularGrouping)].join("");else et.integerPartGroupingPositions.forEach(function(be){Ce=[Ce.slice(0,ut-be),hr,Ce.slice(ut-be)].join(""),ut++});if(ut=Ce.indexOf(Je),et.fractionalPartGroupingPositions.forEach(function(be){Ce=[Ce.slice(0,be+ut+1),hr,Ce.slice(be+ut+1)].join("")}),ut=Ce.indexOf(Je),(et.picture.indexOf(Je)===-1||ut===Ce.length-1)&&(Ce=Ce.substring(0,Ce.length-1)),typeof Jt<"u"){var Vr=Wn(Jt,0);fr=et.minimumExponentSize-Vr.length,fr>0&&(Vr=new Array(fr+1).join($t)+Vr),Ce=Ce+S["exponent-separator"]+(Jt<0?tt:"")+Vr}return Ce=et.prefix+Ce+et.suffix,Ce}}function P(c,h){if(!(typeof c>"u")){if(c=re(c),typeof h>"u"?h=10:h=re(h),h<2||h>36)throw{code:"D3100",stack:new Error().stack,value:h};var g=c.toString(h);return g}}function H(c){var h;if(!(typeof c>"u")){if(typeof c=="number")h=c;else if(typeof c=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(c)&&!isNaN(parseFloat(c))&&isFinite(c))h=parseFloat(c);else if(typeof c=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(c))h=Number(c);else if(c===!0)h=1;else if(c===!1)h=0;else throw{code:"D3030",value:c,stack:new Error().stack,index:1};return h}}function ne(c){var h;if(!(typeof c>"u"))return h=Math.abs(c),h}function X(c){var h;if(!(typeof c>"u"))return h=Math.floor(c),h}function U(c){var h;if(!(typeof c>"u"))return h=Math.ceil(c),h}function re(c,h){var g;if(!(typeof c>"u")){if(h){var _=c.toString().split("e");c=+(_[0]+"e"+(_[1]?+_[1]+h:h))}g=Math.round(c);var S=g-c;return Math.abs(S)===.5&&Math.abs(g%2)===1&&(g=g-1),h&&(_=g.toString().split("e"),g=+(_[0]+"e"+(_[1]?+_[1]-h:-h))),Object.is(g,-0)&&(g=0),g}}function ve(c){var h;if(!(typeof c>"u")){if(c<0)throw{stack:new Error().stack,code:"D3060",index:1,value:c};return h=Math.sqrt(c),h}}function $e(c,h){var g;if(!(typeof c>"u")){if(g=Math.pow(c,h),!isFinite(g))throw{stack:new Error().stack,code:"D3061",index:1,value:c,exp:h};return g}}function Ne(){return Math.random()}function ge(c){if(!(typeof c>"u")){var h=!1;if(Array.isArray(c)){if(c.length===1)h=ge(c[0]);else if(c.length>1){var g=c.filter(function(_){return ge(_)});h=g.length>0}}else typeof c=="string"?c.length>0&&(h=!0):f(c)?c!==0&&(h=!0):c!==null&&typeof c=="object"&&!A(c)?Object.keys(c).length>0&&(h=!0):typeof c=="boolean"&&c===!0&&(h=!0);return h}}function xe(c){if(!(typeof c>"u"))return!ge(c)}function Pe(c,h,g,_){var S=[h],$=le(c);return $>=2&&S.push(g),$>=3&&S.push(_),S}async function he(c,h){if(!(typeof c>"u")){for(var g=k(),_=0;_<c.length;_++){var S=Pe(h,c[_],_,c),$=await h.apply(this,S);typeof $<"u"&&g.push($)}return g}}async function dt(c,h){if(!(typeof c>"u")){for(var g=k(),_=0;_<c.length;_++){var S=c[_],$=Pe(h,S,_,c),Y=await h.apply(this,$);ge(Y)&&g.push(S)}return g}}async function Mt(c,h){if(!(typeof c>"u")){for(var g=!1,_,S=0;S<c.length;S++){var $=c[S],Y=!0;if(typeof h<"u"){var de=Pe(h,$,S,c),ye=await h.apply(this,de);Y=ge(ye)}if(Y)if(!g)_=$,g=!0;else throw{stack:new Error().stack,code:"D3138",index:S}}if(!g)throw{stack:new Error().stack,code:"D3139"};return _}}function bt(){for(var c=[],h=Array.prototype.slice.call(arguments),g=Math.min.apply(Math,h.map(function($){return Array.isArray($)?$.length:0})),_=0;_<g;_++){var S=h.map($=>$[_]);c.push(S)}return c}async function ht(c,h,g){if(!(typeof c>"u")){var _,S=le(h);if(S<2)throw{stack:new Error().stack,code:"D3050",index:1};var $;for(typeof g>"u"&&c.length>0?(_=c[0],$=1):(_=g,$=0);$<c.length;){var Y=[_,c[$]];S>=3&&Y.push($),S>=4&&Y.push(c),_=await h.apply(this,Y),$++}return _}}function wt(c){var h=k();if(Array.isArray(c)){var g={};c.forEach(function(_){var S=wt(_);S.forEach(function($){g[$]=!0})}),h=wt(g)}else c!==null&&typeof c=="object"&&!A(c)&&Object.keys(c).forEach(_=>h.push(_));return h}function Wt(c,h){var g;if(Array.isArray(c)){g=k();for(var _=0;_<c.length;_++){var S=Wt(c[_],h);typeof S<"u"&&(Array.isArray(S)?S.forEach($=>g.push($)):g.push(S))}}else c!==null&&typeof c=="object"&&!A(c)&&(g=c[h]);return g}function ir(c,h){return typeof c>"u"?h:typeof h>"u"?c:(Array.isArray(c)||(c=k(c)),Array.isArray(h)||(h=[h]),c.concat(h))}function wr(c){return!(typeof c>"u")}function Kt(c){var h=k();if(Array.isArray(c))c.forEach(function(S){h=ir(h,Kt(S))});else if(c!==null&&typeof c=="object"&&!D(c))for(var g in c){var _={};_[g]=c[g],h.push(_)}else h=c;return h}function oe(c){if(!(typeof c>"u")){var h={};return c.forEach(function(g){for(var _ in g)h[_]=g[_]}),h}}function xr(c){if(!(typeof c>"u")){if(c.length<=1)return c;for(var h=c.length,g=new Array(h),_=0;_<h;_++)g[h-_-1]=c[_];return g}}async function dr(c,h){var g=k();for(var _ in c){var S=Pe(h,c[_],_,c),$=await h.apply(this,S);typeof $<"u"&&g.push($)}return g}function Ft(c){throw{code:"D3137",stack:new Error().stack,message:c||"$error() function evaluated"}}function nt(c,h){if(!c)throw{code:"D3141",stack:new Error().stack,message:h||"$assert() statement failed"}}function Bt(c){if(c!==void 0)return c===null?"null":f(c)?"number":typeof c=="string"?"string":typeof c=="boolean"?"boolean":Array.isArray(c)?"array":A(c)?"function":"object"}async function qe(c,h){if(!(typeof c>"u")){if(c.length<=1)return c;var g;if(typeof h>"u"){if(!L(c)&&!w(c))throw{stack:new Error().stack,code:"D3070",index:1};g=async function(Y,de){return Y>de}}else g=h;var _=async function(Y,de){var ye=async function(_e,We,Me){We.length===0?Array.prototype.push.apply(_e,Me):Me.length===0?Array.prototype.push.apply(_e,We):await g(We[0],Me[0])?(_e.push(Me[0]),await ye(_e,We,Me.slice(1))):(_e.push(We[0]),await ye(_e,We.slice(1),Me))},je=[];return await ye(je,Y,de),je},S=async function(Y){if(!Array.isArray(Y)||Y.length<=1)return Y;var de=Math.floor(Y.length/2),ye=Y.slice(0,de),je=Y.slice(de);return ye=await S(ye),je=await S(je),await _(ye,je)},$=await S(c);return $}}function m(c){if(!(typeof c>"u")){if(c.length<=1)return c;for(var h=new Array(c.length),g=0;g<c.length;g++){var _=Math.floor(Math.random()*(g+1));g!==_&&(h[g]=h[_]),h[_]=c[g]}return h}}function x(c){if(!(typeof c>"u")){if(!Array.isArray(c)||c.length<=1)return c;for(var h=y(c)?k():[],g=0;g<c.length;g++){for(var _=c[g],S=!1,$=0;$<h.length;$++)if(ke(_,h[$])){S=!0;break}S||h.push(_)}return h}}async function E(c,h){var g={};for(var _ in c){var S=c[_],$=Pe(h,S,_,c),Y=await h.apply(this,$);ge(Y)&&(g[_]=S)}return Object.keys(g).length===0&&(g=void 0),g}return{sum:R,count:G,max:F,min:O,average:B,string:Z,substring:Se,substringBefore:Te,substringAfter:ce,lowercase:q,uppercase:ie,length:me,trim:Ie,pad:se,match:V,contains:ae,replace:we,split:De,join:T,formatNumber:M,formatBase:P,number:H,floor:X,ceil:U,round:re,abs:ne,sqrt:ve,power:$e,random:Ne,boolean:ge,not:xe,map:he,zip:bt,filter:dt,single:Mt,foldLeft:ht,sift:E,keys:wt,lookup:Wt,append:ir,exists:wr,spread:Kt,merge:oe,reverse:xr,each:dr,error:Ft,assert:nt,type:Bt,sort:qe,shuffle:m,distinct:x,base64encode:Le,base64decode:b,encodeUrlComponent:I,encodeUrl:pe,decodeUrlComponent:Ee,decodeUrl:Ke}})();s.exports=p}).call(this)}).call(this,typeof vs<"u"?vs:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(r,s,n){var l=r("./datetime"),a=r("./functions"),p=r("./utils"),f=r("./parser"),w=r("./signature"),L=(function(){var k=p.isNumeric,y=p.isArrayOfStrings,A=p.isArrayOfNumbers,D=p.createSequence,W=p.isSequence,le=p.isFunction,ke=p.isLambda,z=p.isIterable,R=p.isPromise,G=p.getFunctionArity,F=p.isDeepEqual,O=Ft(null);async function B(m,x,E){var c,h=E.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(h&&await h(m,x,E),m.type){case"path":c=await Z(m,x,E);break;case"binary":c=await me(m,x,E);break;case"unary":c=await Ie(m,x,E);break;case"name":c=se(m,x);break;case"string":case"number":case"value":c=ee(m);break;case"wildcard":c=ae(m,x);break;case"descendant":c=we(m,x);break;case"parent":c=E.lookup(m.slot.label);break;case"condition":c=await X(m,x,E);break;case"block":c=await U(m,x,E);break;case"bind":c=await ne(m,x,E);break;case"regex":c=re(m);break;case"function":c=await Pe(m,x,E);break;case"variable":c=ve(m,x,E);break;case"lambda":c=Mt(m,x,E);break;case"partial":c=await bt(m,x,E);break;case"apply":c=await xe(m,x,E);break;case"transform":c=Ne(m,x,E);break}if(Object.prototype.hasOwnProperty.call(m,"predicate"))for(var g=0;g<m.predicate.length;g++)c=await ie(m.predicate[g].expr,c,E);m.type!=="path"&&Object.prototype.hasOwnProperty.call(m,"group")&&(c=await M(m.group,c,E));var _=E.lookup(Symbol.for("jsonata.__evaluate_exit"));return _&&await _(m,x,E,c),c&&W(c)&&!c.tupleStream&&(m.keepArray&&(c.keepSingleton=!0),c.length===0?c=void 0:c.length===1&&(c=c.keepSingleton?c:c[0])),c}async function Z(m,x,E){var c;Array.isArray(x)&&m.steps[0].type!=="variable"?c=x:c=D(x);for(var h,g=!1,_=void 0,S=0;S<m.steps.length;S++){var $=m.steps[S];if($.tuple&&(g=!0),S===0&&$.consarray?h=await B($,c,E):g?_=await q($,c,_,E):h=await Te($,c,E,S===m.steps.length-1),!g&&(typeof h>"u"||h.length===0))break;typeof $.focus>"u"&&(c=h)}if(g)if(m.tuple)h=_;else for(h=D(),S=0;S<_.length;S++)h.push(_[S]["@"]);return m.keepSingletonArray&&(Array.isArray(h)&&h.cons&&!h.sequence&&(h=D(h)),h.keepSingleton=!0),m.hasOwnProperty("group")&&(h=await M(m.group,g?_:h,E)),h}function Se(m,x){var E=Ft(m);for(const c in x)E.bind(c,x[c]);return E}async function Te(m,x,E,c){var h;if(m.type==="sort")return h=await $e(m,x,E),m.stages&&(h=await ce(m.stages,h,E)),h;h=D();for(var g=0;g<x.length;g++){var _=await B(m,x[g],E);if(m.stages)for(var S=0;S<m.stages.length;S++)_=await ie(m.stages[S].expr,_,E);typeof _<"u"&&h.push(_)}var $=D();return c&&h.length===1&&Array.isArray(h[0])&&!W(h[0])?$=h[0]:h.forEach(function(Y){!Array.isArray(Y)||Y.cons?$.push(Y):Y.forEach(de=>$.push(de))}),$}async function ce(m,x,E){for(var c=x,h=0;h<m.length;h++){var g=m[h];switch(g.type){case"filter":c=await ie(g.expr,c,E);break;case"index":for(var _=0;_<c.length;_++){var S=c[_];S[g.value]=_}break}}return c}async function q(m,x,E,c){var h;if(m.type==="sort"){if(E)h=await $e(m,E,c);else{var g=await $e(m,x,c);h=D(),h.tupleStream=!0;for(var _=0;_<g.length;_++){var S={"@":g[_]};S[m.index]=_,h.push(S)}}return m.stages&&(h=await ce(m.stages,h,c)),h}h=D(),h.tupleStream=!0;var $=c;E===void 0&&(E=x.map(je=>({"@":je})));for(var Y=0;Y<E.length;Y++){$=Se(c,E[Y]);var de=await B(m,E[Y]["@"],$);if(typeof de<"u"){Array.isArray(de)||(de=[de]);for(var ye=0;ye<de.length;ye++)S={},Object.assign(S,E[Y]),de.tupleStream?Object.assign(S,de[ye]):(m.focus?(S[m.focus]=de[ye],S["@"]=E[Y]["@"]):S["@"]=de[ye],m.index&&(S[m.index]=ye),m.ancestor&&(S[m.ancestor.label]=E[Y]["@"])),h.push(S)}}return m.stages&&(h=await ce(m.stages,h,c)),h}async function ie(m,x,E){var c=D();if(x&&x.tupleStream&&(c.tupleStream=!0),Array.isArray(x)||(x=D(x)),m.type==="number"){var h=Math.floor(m.value);h<0&&(h=x.length+h);var g=await x[h];typeof g<"u"&&(Array.isArray(g)?c=g:c.push(g))}else for(h=0;h<x.length;h++){var g=x[h],_=g,S=E;x.tupleStream&&(_=g["@"],S=Se(E,g));var $=await B(m,_,S);k($)&&($=[$]),A($)?$.forEach(function(de){var ye=Math.floor(de);ye<0&&(ye=x.length+ye),ye===h&&c.push(g)}):a.boolean($)&&c.push(g)}return c}async function me(m,x,E){var c,h=await B(m.lhs,x,E),g=m.value,_=async()=>await B(m.rhs,x,E);if(g==="and"||g==="or")try{return await Ke(h,_,g)}catch($){throw $.position=m.position,$.token=g,$}var S=await _();try{switch(g){case"+":case"-":case"*":case"/":case"%":c=b(h,S,g);break;case"=":case"!=":c=I(h,S,g);break;case"<":case"<=":case">":case">=":c=pe(h,S,g);break;case"&":c=T(h,S);break;case"..":c=H(h,S);break;case"in":c=Ee(h,S);break}}catch($){throw $.position=m.position,$.token=g,$}return c}async function Ie(m,x,E){var c;switch(m.value){case"-":if(c=await B(m.expression,x,E),typeof c>"u")c=void 0;else if(k(c))c=-c;else throw{code:"D1002",stack:new Error().stack,position:m.position,token:m.value,value:c};break;case"[":c=[];let _=await Promise.all(m.expressions.map(async(S,$)=>(E.isParallelCall=$>0,[S,await B(S,x,E)])));for(let S of _){var[h,g]=S;typeof g<"u"&&(h.value==="["?c.push(g):c=a.append(c,g))}m.consarray&&Object.defineProperty(c,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":c=await M(m,x,E);break}return c}function se(m,x,E){return a.lookup(x,m.value)}function ee(m){return m.value}function ae(m,x){var E=D();return Array.isArray(x)&&x.outerWrapper&&x.length>0&&(x=x[0]),x!==null&&typeof x=="object"&&Object.keys(x).forEach(function(c){var h=x[c];Array.isArray(h)?(h=V(h),E=a.append(E,h)):E.push(h)}),E}function V(m,x){return typeof x>"u"&&(x=[]),Array.isArray(m)?m.forEach(function(E){V(E,x)}):x.push(m),x}function we(m,x){var E,c=D();return typeof x<"u"&&(Le(x,c),c.length===1?E=c[0]:E=c),E}function Le(m,x){Array.isArray(m)||x.push(m),Array.isArray(m)?m.forEach(function(E){Le(E,x)}):m!==null&&typeof m=="object"&&Object.keys(m).forEach(function(E){Le(m[E],x)})}function b(m,x,E){var c;if(typeof m<"u"&&!k(m))throw{code:"T2001",stack:new Error().stack,value:m};if(typeof x<"u"&&!k(x))throw{code:"T2002",stack:new Error().stack,value:x};if(typeof m>"u"||typeof x>"u")return c;switch(E){case"+":c=m+x;break;case"-":c=m-x;break;case"*":c=m*x;break;case"/":c=m/x;break;case"%":c=m%x;break}return c}function I(m,x,E){var c,h=typeof m,g=typeof x;if(h==="undefined"||g==="undefined")return!1;switch(E){case"=":c=F(m,x);break;case"!=":c=!F(m,x);break}return c}function pe(m,x,E){var c,h=typeof m,g=typeof x,_=h==="undefined"||h==="string"||h==="number",S=g==="undefined"||g==="string"||g==="number";if(!_||!S)throw{code:"T2010",stack:new Error().stack,value:h==="string"||h==="number"?x:m};if(!(h==="undefined"||g==="undefined")){if(h!==g)throw{code:"T2009",stack:new Error().stack,value:m,value2:x};switch(E){case"<":c=m<x;break;case"<=":c=m<=x;break;case">":c=m>x;break;case">=":c=m>=x;break}return c}}function Ee(m,x){var E=!1;if(typeof m>"u"||typeof x>"u")return!1;Array.isArray(x)||(x=[x]);for(var c=0;c<x.length;c++)if(x[c]===m){E=!0;break}return E}async function Ke(m,x,E){var c,h=De(m);switch(E){case"and":c=h&&De(await x());break;case"or":c=h||De(await x());break}return c}function De(m){var x=a.boolean(m);return typeof x>"u"?!1:x}function T(m,x){var E,c="",h="";return typeof m<"u"&&(c=a.string(m)),typeof x<"u"&&(h=a.string(x)),E=c.concat(h),E}async function M(m,x,E){var c={},h={},g=!!(x&&x.tupleStream);Array.isArray(x)||(x=D(x)),x.length===0&&x.push(void 0);for(var _=0;_<x.length;_++)for(var S=x[_],$=g?Se(E,S):E,Y=0;Y<m.lhs.length;Y++){var de=m.lhs[Y],ye=await B(de[0],g?S["@"]:S,$);if(typeof ye!="string"&&ye!==void 0)throw{code:"T1003",stack:new Error().stack,position:m.position,value:ye};if(ye!==void 0){var je={data:S,exprIndex:Y};if(h.hasOwnProperty(ye)){if(h[ye].exprIndex!==Y)throw{code:"D1009",stack:new Error().stack,position:m.position,value:ye};h[ye].data=a.append(h[ye].data,S)}else h[ye]=je}}let _e=await Promise.all(Object.keys(h).map(async(Me,lt)=>{let Oe=h[Me];var tt=Oe.data,$t=E;if(g){var Je=P(Oe.data);tt=Je["@"],delete Je["@"],$t=Se(E,Je)}return E.isParallelCall=lt>0,[Me,await B(m.lhs[Oe.exprIndex][1],tt,$t)]}));for(let Me of _e){var[ye,We]=await Me;typeof We<"u"&&(c[ye]=We)}return c}function P(m){if(!Array.isArray(m))return m;var x={};Object.assign(x,m[0]);for(var E=1;E<m.length;E++)for(const c in m[E])x[c]=a.append(x[c],m[E][c]);return x}function H(m,x){var E;if(typeof m<"u"&&!Number.isInteger(m))throw{code:"T2003",stack:new Error().stack,value:m};if(typeof x<"u"&&!Number.isInteger(x))throw{code:"T2004",stack:new Error().stack,value:x};if(typeof m>"u"||typeof x>"u"||m>x)return E;var c=x-m+1;if(c>1e7)throw{code:"D2014",stack:new Error().stack,value:c};E=new Array(c);for(var h=m,g=0;h<=x;h++,g++)E[g]=h;return E.sequence=!0,E}async function ne(m,x,E){var c=await B(m.rhs,x,E);return E.bind(m.lhs.value,c),c}async function X(m,x,E){var c,h=await B(m.condition,x,E);return a.boolean(h)?c=await B(m.then,x,E):typeof m.else<"u"&&(c=await B(m.else,x,E)),c}async function U(m,x,E){for(var c,h=Ft(E),g=0;g<m.expressions.length;g++)c=await B(m.expressions[g],x,h);return c}function re(m){var x=new qe.RegexEngine(m.value),E=function(c,h){var g;x.lastIndex=h||0;var _=x.exec(c);if(_!==null){if(g={match:_[0],start:_.index,end:_.index+_[0].length,groups:[]},_.length>1)for(var S=1;S<_.length;S++)g.groups.push(_[S]);g.next=function(){if(!(x.lastIndex>=c.length)){var $=E(c,x.lastIndex);if($&&$.match==="")throw{code:"D1004",stack:new Error().stack,position:m.position,value:m.value.source};return $}}}return g};return E}function ve(m,x,E){var c;return m.value===""?c=x&&x.outerWrapper?x[0]:x:c=E.lookup(m.value),c}async function $e(m,x,E){var c,h=x,g=!!x.tupleStream,_=async function($,Y){for(var de=0,ye=0;de===0&&ye<m.terms.length;ye++){var je=m.terms[ye],_e=$,We=E;g&&(_e=$["@"],We=Se(E,$));var Me=await B(je.expression,_e,We);_e=Y,We=E,g&&(_e=Y["@"],We=Se(E,Y));var lt=await B(je.expression,_e,We),Oe=typeof Me,tt=typeof lt;if(Oe==="undefined"){de=tt==="undefined"?0:1;continue}if(tt==="undefined"){de=-1;continue}if(!(Oe==="string"||Oe==="number")||!(tt==="string"||tt==="number"))throw{code:"T2008",stack:new Error().stack,position:m.position,value:Oe==="string"||Oe==="number"?lt:Me};if(Oe!==tt)throw{code:"T2007",stack:new Error().stack,position:m.position,value:Me,value2:lt};Me!==lt&&(Me<lt?de=-1:de=1,je.descending===!0&&(de=-de))}return de===1},S={environment:E,input:x};return c=await a.sort.apply(S,[h,_]),c}function Ne(m,x,E){var c=async function(h){if(!(typeof h>"u")){var g=E.lookup("clone");if(!le(g))throw{code:"T2013",stack:new Error().stack,position:m.position};var _=await he(g,[h],null,E),S=await B(m.pattern,_,E);if(typeof S<"u"){Array.isArray(S)||(S=[S]);for(var $=0;$<S.length;$++){var Y=S[$];if(Y&&(Y.isPrototypeOf(_)||Y instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:m.position};var de=await B(m.update,Y,E),ye=typeof de;if(ye!=="undefined"){if(ye!=="object"||de===null||Array.isArray(de))throw{code:"T2011",stack:new Error().stack,position:m.update.position,value:de};for(var je in de)Y[je]=de[je]}if(typeof m.delete<"u"){var _e=await B(m.delete,Y,E);if(typeof _e<"u"){var We=_e;if(Array.isArray(_e)||(_e=[_e]),!y(_e))throw{code:"T2012",stack:new Error().stack,position:m.delete.position,value:We};for(var Me=0;Me<_e.length;Me++)typeof Y=="object"&&Y!==null&&delete Y[_e[Me]]}}}}return _}};return oe(c,"<(oa):o>")}var ge=f("function($f, $g) { function($x){ $g($f($x)) } }");async function xe(m,x,E){var c,h=await B(m.lhs,x,E);if(m.rhs.type==="function")c=await Pe(m.rhs,x,E,{context:h});else{var g=await B(m.rhs,x,E);if(!le(g))throw{code:"T2006",stack:new Error().stack,position:m.position,value:g};if(le(h)){var _=await B(ge,null,E);c=await he(_,[h,g],null,E)}else c=await he(g,[h],null,E)}return c}async function Pe(m,x,E,c){var h,g=await B(m.procedure,x,E);if(typeof g>"u"&&m.procedure.type==="path"&&E.lookup(m.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:m.position,token:m.procedure.steps[0].value};var _=[];typeof c<"u"&&_.push(c.context);for(var S=0;S<m.arguments.length;S++){const Y=await B(m.arguments[S],x,E);if(le(Y)){const de=async function(...ye){return await he(Y,ye,null,E)};de.arity=G(Y),_.push(de)}else _.push(Y)}var $=m.procedure.type==="path"?m.procedure.steps[0].value:m.procedure.value;try{typeof g=="object"&&(g.token=$,g.position=m.position),h=await he(g,_,x,E)}catch(Y){throw Y.position||(Y.position=m.position),Y.token||(Y.token=$),Y}return h}async function he(m,x,E,c){var h;for(h=await dt(m,x,E,c);ke(h)&&h.thunk===!0;){var g=await B(h.body.procedure,h.input,h.environment);h.body.procedure.type==="variable"&&(g.token=h.body.procedure.value),g.position=h.body.procedure.position;for(var _=[],S=0;S<h.body.arguments.length;S++)_.push(await B(h.body.arguments[S],h.input,h.environment));h=await dt(g,_,E,c)}return h}async function dt(m,x,E,c){var h;try{var g=x;if(m&&(g=ht(m.signature,x,E)),ke(m))h=await wt(m,g);else if(m&&m._jsonata_function===!0){var _={environment:c,input:E};h=m.implementation.apply(_,g),z(h)&&(h=h.next().value),R(h)&&(h=await h)}else if(typeof m=="function")h=m.apply(E,g),R(h)&&(h=await h);else throw{code:"T1006",stack:new Error().stack}}catch(S){throw m&&(typeof S.token>"u"&&typeof m.token<"u"&&(S.token=m.token),S.position=m.position||S.position),S}return h}function Mt(m,x,E){var c={_jsonata_lambda:!0,input:x,environment:E,arguments:m.arguments,signature:m.signature,body:m.body};return m.thunk===!0&&(c.thunk=!0),c.apply=async function(h,g){return await he(c,g,x,h?h.environment:E)},c}async function bt(m,x,E){for(var c,h=[],g=0;g<m.arguments.length;g++){var _=m.arguments[g];_.type==="operator"&&_.value==="?"?h.push(_):h.push(await B(_,x,E))}var S=await B(m.procedure,x,E);if(typeof S>"u"&&m.procedure.type==="path"&&E.lookup(m.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:m.position,token:m.procedure.steps[0].value};if(ke(S))c=Wt(S,h);else if(S&&S._jsonata_function===!0)c=ir(S.implementation,h);else if(typeof S=="function")c=ir(S,h);else throw{code:"T1008",stack:new Error().stack,position:m.position,token:m.procedure.type==="path"?m.procedure.steps[0].value:m.procedure.value};return c}function ht(m,x,E){if(typeof m>"u")return x;var c=m.validate(x,E);return c}async function wt(m,x){var E,c=Ft(m.environment);return m.arguments.forEach(function(h,g){c.bind(h.value,x[g])}),typeof m.body=="function"?E=await wr(m.body,c):E=await B(m.body,m.input,c),E}function Wt(m,x){var E=Ft(m.environment),c=[];m.arguments.forEach(function(g,_){var S=x[_];S&&S.type==="operator"&&S.value==="?"?c.push(g):E.bind(g.value,S)});var h={_jsonata_lambda:!0,input:m.input,environment:E,arguments:c,body:m.body};return h}function ir(m,x){var E=Kt(m);E=E.map(function(_){return"$"+_.trim()});var c="function("+E.join(", ")+"){ _ }",h=f(c);h.body=m;var g=Wt(h,x);return g}async function wr(m,x){var E=Kt(m),c=E.map(function(_){return x.lookup(_.trim())}),h={environment:x},g=m.apply(h,c);return R(g)&&(g=await g),g}function Kt(m){var x=m.toString(),E=/\(([^)]*)\)/.exec(x)[1],c=E.split(",");return c}function oe(m,x){var E={_jsonata_function:!0,implementation:m};return typeof x<"u"&&(E.signature=w(x)),E}async function xr(m,x){if(!(typeof m>"u")){var E=this.input;typeof x<"u"&&(E=x,Array.isArray(E)&&!W(E)&&(E=D(E),E.outerWrapper=!0));try{var c=f(m,!1)}catch(g){throw Bt(g),{stack:new Error().stack,code:"D3120",value:g.message,error:g}}try{var h=await B(c,E,this.environment)}catch(g){throw Bt(g),{stack:new Error().stack,code:"D3121",value:g.message,error:g}}return h}}function dr(m){if(!(typeof m>"u"))return JSON.parse(a.string(m))}function Ft(m){var x={};const E={bind:function(h,g){x[h]=g},lookup:function(h){var g;return x.hasOwnProperty(h)?g=x[h]:m&&(g=m.lookup(h)),g},timestamp:m?m.timestamp:null,async:m?m.async:!1,isParallelCall:m?m.isParallelCall:!1,global:m?m.global:{ancestry:[null]}};if(m){var c=m.lookup(Symbol.for("jsonata.__createFrame_push"));c&&c(m,E)}return E}O.bind("sum",oe(a.sum,"<a<n>:n>")),O.bind("count",oe(a.count,"<a:n>")),O.bind("max",oe(a.max,"<a<n>:n>")),O.bind("min",oe(a.min,"<a<n>:n>")),O.bind("average",oe(a.average,"<a<n>:n>")),O.bind("string",oe(a.string,"<x-b?:s>")),O.bind("substring",oe(a.substring,"<s-nn?:s>")),O.bind("substringBefore",oe(a.substringBefore,"<s-s:s>")),O.bind("substringAfter",oe(a.substringAfter,"<s-s:s>")),O.bind("lowercase",oe(a.lowercase,"<s-:s>")),O.bind("uppercase",oe(a.uppercase,"<s-:s>")),O.bind("length",oe(a.length,"<s-:n>")),O.bind("trim",oe(a.trim,"<s-:s>")),O.bind("pad",oe(a.pad,"<s-ns?:s>")),O.bind("match",oe(a.match,"<s-f<s:o>n?:a<o>>")),O.bind("contains",oe(a.contains,"<s-(sf):b>")),O.bind("replace",oe(a.replace,"<s-(sf)(sf)n?:s>")),O.bind("split",oe(a.split,"<s-(sf)n?:a<s>>")),O.bind("join",oe(a.join,"<a<s>s?:s>")),O.bind("formatNumber",oe(a.formatNumber,"<n-so?:s>")),O.bind("formatBase",oe(a.formatBase,"<n-n?:s>")),O.bind("formatInteger",oe(l.formatInteger,"<n-s:s>")),O.bind("parseInteger",oe(l.parseInteger,"<s-s:n>")),O.bind("number",oe(a.number,"<(nsb)-:n>")),O.bind("floor",oe(a.floor,"<n-:n>")),O.bind("ceil",oe(a.ceil,"<n-:n>")),O.bind("round",oe(a.round,"<n-n?:n>")),O.bind("abs",oe(a.abs,"<n-:n>")),O.bind("sqrt",oe(a.sqrt,"<n-:n>")),O.bind("power",oe(a.power,"<n-n:n>")),O.bind("random",oe(a.random,"<:n>")),O.bind("boolean",oe(a.boolean,"<x-:b>")),O.bind("not",oe(a.not,"<x-:b>")),O.bind("map",oe(a.map,"<af>")),O.bind("zip",oe(a.zip,"<a+>")),O.bind("filter",oe(a.filter,"<af>")),O.bind("single",oe(a.single,"<af?>")),O.bind("reduce",oe(a.foldLeft,"<afj?:j>")),O.bind("sift",oe(a.sift,"<o-f?:o>")),O.bind("keys",oe(a.keys,"<x-:a<s>>")),O.bind("lookup",oe(a.lookup,"<x-s:x>")),O.bind("append",oe(a.append,"<xx:a>")),O.bind("exists",oe(a.exists,"<x:b>")),O.bind("spread",oe(a.spread,"<x-:a<o>>")),O.bind("merge",oe(a.merge,"<a<o>:o>")),O.bind("reverse",oe(a.reverse,"<a:a>")),O.bind("each",oe(a.each,"<o-f:a>")),O.bind("error",oe(a.error,"<s?:x>")),O.bind("assert",oe(a.assert,"<bs?:x>")),O.bind("type",oe(a.type,"<x:s>")),O.bind("sort",oe(a.sort,"<af?:a>")),O.bind("shuffle",oe(a.shuffle,"<a:a>")),O.bind("distinct",oe(a.distinct,"<x:x>")),O.bind("base64encode",oe(a.base64encode,"<s-:s>")),O.bind("base64decode",oe(a.base64decode,"<s-:s>")),O.bind("encodeUrlComponent",oe(a.encodeUrlComponent,"<s-:s>")),O.bind("encodeUrl",oe(a.encodeUrl,"<s-:s>")),O.bind("decodeUrlComponent",oe(a.decodeUrlComponent,"<s-:s>")),O.bind("decodeUrl",oe(a.decodeUrl,"<s-:s>")),O.bind("eval",oe(xr,"<sx?:x>")),O.bind("toMillis",oe(l.toMillis,"<s-s?:n>")),O.bind("fromMillis",oe(l.fromMillis,"<n-s?s?:s>")),O.bind("clone",oe(dr,"<(oa)-:o>"));var nt={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Bt(m){var x=nt[m.code];if(typeof x<"u"){var E=x.replace(/\{\{\{([^}]+)}}}/g,function(){return m[arguments[1]]});E=E.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(m[arguments[1]])}),m.message=E}}function qe(m,x){var E,c;try{E=f(m,x&&x.recover),c=E.errors,delete E.errors}catch(_){throw Bt(_),_}var h=Ft(O),g=new Date;return h.bind("now",oe(function(_,S){return l.fromMillis(g.getTime(),_,S)},"<s?s?:s>")),h.bind("millis",oe(function(){return g.getTime()},"<:n>")),x&&x.RegexEngine?qe.RegexEngine=x.RegexEngine:qe.RegexEngine=RegExp,{evaluate:async function(_,S,$){if(typeof c<"u"){var Y={code:"S0500",position:0};throw Bt(Y),Y}if(typeof S<"u"){var de;de=Ft(h);for(var ye in S)de.bind(ye,S[ye])}else de=h;de.bind("$",_),g=new Date,de.timestamp=g,Array.isArray(_)&&!W(_)&&(_=D(_),_.outerWrapper=!0);var je;try{return je=await B(E,_,de),typeof $=="function"&&$(null,je),je}catch(_e){throw Bt(_e),_e}},assign:function(_,S){h.bind(_,S)},registerFunction:function(_,S,$){var Y=oe(S,$);h.bind(_,Y)},ast:function(){return E},errors:function(){return c}}}return qe.parser=f,qe})();s.exports=L},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(r,s,n){var l=r("./signature");const a=(()=>{var p={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,"?:":40,"??":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},w=function(k){var y=0,A=k.length,D=function(ke,z){var R={type:ke,value:z,position:y};return R},W=function(){for(var ke=y,z=0,R,G,F=function(B){if(k.charAt(B)==="/"&&z===0){for(var Z=0;k.charAt(B-(Z+1))==="\\";)Z++;if(Z%2===0)return!0}return!1};y<A;){var O=k.charAt(y);if(F(y)){if(R=k.substring(ke,y),R==="")throw{code:"S0301",stack:new Error().stack,position:y};for(y++,O=k.charAt(y),ke=y;O==="i"||O==="m";)y++,O=k.charAt(y);return G=k.substring(ke,y)+"g",new RegExp(R,G)}(O==="("||O==="["||O==="{")&&k.charAt(y-1)!=="\\"&&z++,(O===")"||O==="]"||O==="}")&&k.charAt(y-1)!=="\\"&&z--,y++}throw{code:"S0302",stack:new Error().stack,position:y}},le=function(ke){if(y>=A)return null;for(var z=k.charAt(y);y<A&&` 	
\r\v`.indexOf(z)>-1;)y++,z=k.charAt(y);if(z==="/"&&k.charAt(y+1)==="*"){var R=y;for(y+=2,z=k.charAt(y);!(z==="*"&&k.charAt(y+1)==="/");)if(z=k.charAt(++y),y>=A)throw{code:"S0106",stack:new Error().stack,position:R};return y+=2,z=k.charAt(y),le(ke)}if(ke!==!0&&z==="/")return y++,D("regex",W());if(z==="."&&k.charAt(y+1)===".")return y+=2,D("operator","..");if(z===":"&&k.charAt(y+1)==="=")return y+=2,D("operator",":=");if(z==="!"&&k.charAt(y+1)==="=")return y+=2,D("operator","!=");if(z===">"&&k.charAt(y+1)==="=")return y+=2,D("operator",">=");if(z==="<"&&k.charAt(y+1)==="=")return y+=2,D("operator","<=");if(z==="*"&&k.charAt(y+1)==="*")return y+=2,D("operator","**");if(z==="~"&&k.charAt(y+1)===">")return y+=2,D("operator","~>");if(z==="?"&&k.charAt(y+1)===":")return y+=2,D("operator","?:");if(z==="?"&&k.charAt(y+1)==="?")return y+=2,D("operator","??");if(Object.prototype.hasOwnProperty.call(p,z))return y++,D("operator",z);if(z==='"'||z==="'"){var G=z;y++;for(var F="";y<A;){if(z=k.charAt(y),z==="\\")if(y++,z=k.charAt(y),Object.prototype.hasOwnProperty.call(f,z))F+=f[z];else if(z==="u"){var O=k.substr(y+1,4);if(/^[0-9a-fA-F]+$/.test(O)){var B=parseInt(O,16);F+=String.fromCharCode(B),y+=4}else throw{code:"S0104",stack:new Error().stack,position:y}}else throw{code:"S0103",stack:new Error().stack,position:y,token:z};else{if(z===G)return y++,D("string",F);F+=z}y++}throw{code:"S0101",stack:new Error().stack,position:y}}var Z=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,Se=Z.exec(k.substring(y));if(Se!==null){var Te=parseFloat(Se[0]);if(!isNaN(Te)&&isFinite(Te))return y+=Se[0].length,D("number",Te);throw{code:"S0102",stack:new Error().stack,position:y,token:Se[0]}}var ce;if(z==="`"){y++;var q=k.indexOf("`",y);if(q!==-1)return ce=k.substring(y,q),y=q+1,D("name",ce);throw y=A,{code:"S0105",stack:new Error().stack,position:y}}for(var ie=y,me;;)if(me=k.charAt(ie),ie===A||` 	
\r\v`.indexOf(me)>-1||Object.prototype.hasOwnProperty.call(p,me)){if(k.charAt(y)==="$")return ce=k.substring(y+1,ie),y=ie,D("variable",ce);switch(ce=k.substring(y,ie),y=ie,ce){case"or":case"in":case"and":return D("operator",ce);case"true":return D("value",!0);case"false":return D("value",!1);case"null":return D("value",null);default:return y===A&&ce===""?null:D("name",ce)}}else ie++};return le},L=function(k,y){var A,D,W={},le=[],ke=function(){var b=[];A.id!=="(end)"&&b.push({type:A.type,value:A.value,position:A.position});for(var I=D();I!==null;)b.push(I),I=D();return b},z={nud:function(){var b={code:"S0211",token:this.value,position:this.position};if(y)return b.remaining=ke(),b.type="error",le.push(b),b;throw b.stack=new Error().stack,b}},R=function(b,I){var pe=W[b];return I=I||0,pe?I>=pe.lbp&&(pe.lbp=I):(pe=Object.create(z),pe.id=pe.value=b,pe.lbp=I,W[b]=pe),pe},G=function(b){if(y){b.remaining=ke(),le.push(b);var I=W["(error)"];return A=Object.create(I),A.error=b,A.type="(error)",A}else throw b.stack=new Error().stack,b},F=function(b,I){if(b&&A.id!==b){var pe;A.id==="(end)"?pe="S0203":pe="S0202";var Ee={code:pe,position:A.position,token:A.value,value:b};return G(Ee)}var Ke=D(I);if(Ke===null)return A=W["(end)"],A.position=k.length,A;var De=Ke.value,T=Ke.type,M;switch(T){case"name":case"variable":M=W["(name)"];break;case"operator":if(M=W[De],!M)return G({code:"S0204",stack:new Error().stack,position:Ke.position,token:De});break;case"string":case"number":case"value":M=W["(literal)"];break;case"regex":T="regex",M=W["(regex)"];break;default:return G({code:"S0205",stack:new Error().stack,position:Ke.position,token:De})}return A=Object.create(M),A.value=De,A.type=T,A.position=Ke.position,A},O=function(b){var I,pe=A;for(F(null,!0),I=pe.nud();b<A.lbp;)pe=A,F(),I=pe.led(I);return I},B=function(b){var I=R(b,0);I.nud=function(){return this}},Z=function(b,I,pe){var Ee=I||p[b],Ke=R(b,Ee);return Ke.led=pe||function(De){return this.lhs=De,this.rhs=O(Ee),this.type="binary",this},Ke},Se=function(b,I,pe){var Ee=R(b,I);return Ee.led=pe,Ee},Te=function(b,I){var pe=R(b);return pe.nud=I||function(){return this.expression=O(70),this.type="unary",this},pe};B("(end)"),B("(name)"),B("(literal)"),B("(regex)"),R(":"),R(";"),R(","),R(")"),R("]"),R("}"),R(".."),Z("."),Z("+"),Z("-"),Z("*"),Z("/"),Z("%"),Z("="),Z("<"),Z(">"),Z("!="),Z("<="),Z(">="),Z("&"),Z("and"),Z("or"),Z("in"),B("and"),B("or"),B("in"),Te("-"),Z("~>"),Z("??",p["??"],function(b){return this.type="condition",this.condition={type:"function",value:"(",procedure:{type:"variable",value:"exists"},arguments:[b]},this.then=b,this.else=O(0),this}),Se("(error)",10,function(b){return this.lhs=b,this.error=A.error,this.remaining=ke(),this.type="error",this}),Te("*",function(){return this.type="wildcard",this}),Te("**",function(){return this.type="descendant",this}),Te("%",function(){return this.type="parent",this}),Z("(",p["("],function(b){if(this.procedure=b,this.type="function",this.arguments=[],A.id!==")")for(;A.type==="operator"&&A.id==="?"?(this.type="partial",this.arguments.push(A),F("?")):this.arguments.push(O(0)),A.id===",";)F(",");if(F(")",!0),b.type==="name"&&(b.value==="function"||b.value==="λ")){if(this.arguments.forEach(function(De,T){if(De.type!=="variable")return G({code:"S0208",stack:new Error().stack,position:De.position,token:De.value,value:T+1})}),this.type="lambda",A.id==="<"){for(var I=A.position,pe=1,Ee="<";pe>0&&A.id!=="{"&&A.id!=="(end)";){var Ke=F();Ke.id===">"?pe--:Ke.id==="<"&&pe++,Ee+=Ke.value}F(">");try{this.signature=l(Ee)}catch(De){return De.position=I+De.offset,G(De)}}F("{"),this.body=O(0),F("}")}return this}),Te("(",function(){for(var b=[];A.id!==")"&&(b.push(O(0)),A.id===";");)F(";");return F(")",!0),this.type="block",this.expressions=b,this}),Te("[",function(){var b=[];if(A.id!=="]")for(;;){var I=O(0);if(A.id===".."){var pe={type:"binary",value:"..",position:A.position,lhs:I};F(".."),pe.rhs=O(0),I=pe}if(b.push(I),A.id!==",")break;F(",")}return F("]",!0),this.expressions=b,this.type="unary",this}),Z("[",p["["],function(b){if(A.id==="]"){for(var I=b;I&&I.type==="binary"&&I.value==="[";)I=I.lhs;return I.keepArray=!0,F("]"),b}else return this.lhs=b,this.rhs=O(p["]"]),this.type="binary",F("]",!0),this}),Z("^",p["^"],function(b){F("(");for(var I=[];;){var pe={descending:!1};if(A.id==="<"?F("<"):A.id===">"&&(pe.descending=!0,F(">")),pe.expression=O(0),I.push(pe),A.id!==",")break;F(",")}return F(")"),this.lhs=b,this.rhs=I,this.type="binary",this});var ce=function(b){var I=[];if(A.id!=="}")for(;;){var pe=O(0);F(":");var Ee=O(0);if(I.push([pe,Ee]),A.id!==",")break;F(",")}return F("}",!0),typeof b>"u"?(this.lhs=I,this.type="unary"):(this.lhs=b,this.rhs=I,this.type="binary"),this};Te("{",ce),Z("{",p["{"],ce),Se(":=",p[":="],function(b){return b.type!=="variable"?G({code:"S0212",stack:new Error().stack,position:b.position,token:b.value}):(this.lhs=b,this.rhs=O(p[":="]-1),this.type="binary",this)}),Z("@",p["@"],function(b){return this.lhs=b,this.rhs=O(p["@"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),Z("#",p["#"],function(b){return this.lhs=b,this.rhs=O(p["#"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),Z("?",p["?"],function(b){return this.type="condition",this.condition=b,this.then=O(0),A.id===":"&&(F(":"),this.else=O(0)),this}),Z("?:",p["?:"],function(b){return this.type="condition",this.condition=b,this.then=b,this.else=O(0),this}),Te("|",function(){return this.type="transform",this.pattern=O(0),F("|"),this.update=O(0),A.id===","&&(F(","),this.delete=O(0)),F("|"),this});var q=function(b){var I;if(b.type==="function"&&!b.predicate){var pe={type:"lambda",thunk:!0,arguments:[],position:b.position};pe.body=b,I=pe}else if(b.type==="condition")b.then=q(b.then),typeof b.else<"u"&&(b.else=q(b.else)),I=b;else if(b.type==="block"){var Ee=b.expressions.length;Ee>0&&(b.expressions[Ee-1]=q(b.expressions[Ee-1])),I=b}else I=b;return I},ie=0,me=0,Ie=[],se=function(b,I){switch(b.type){case"name":case"wildcard":I.level--,I.level===0&&(typeof b.ancestor>"u"||(Ie[I.index].slot.label=b.ancestor.label),b.ancestor=I,b.tuple=!0);break;case"parent":I.level++;break;case"block":b.expressions.length>0&&(b.tuple=!0,I=se(b.expressions[b.expressions.length-1],I));break;case"path":b.tuple=!0;var pe=b.steps.length-1;for(I=se(b.steps[pe--],I);I.level>0&&pe>=0;)I=se(b.steps[pe--],I);break;default:throw{code:"S0217",token:b.type,position:b.position}}return I},ee=function(b,I){if(typeof I.seekingParent<"u"||I.type==="parent"){var pe=typeof I.seekingParent<"u"?I.seekingParent:[];I.type==="parent"&&pe.push(I.slot),typeof b.seekingParent>"u"?b.seekingParent=pe:Array.prototype.push.apply(b.seekingParent,pe)}},ae=function(b){var I=b.steps.length-1,pe=b.steps[I],Ee=typeof pe.seekingParent<"u"?pe.seekingParent:[];pe.type==="parent"&&Ee.push(pe.slot);for(var Ke=0;Ke<Ee.length;Ke++){var De=Ee[Ke];for(I=b.steps.length-2;De.level>0;){if(I<0){typeof b.seekingParent>"u"?b.seekingParent=[De]:b.seekingParent.push(De);break}for(var T=b.steps[I--];I>=0&&T.focus&&b.steps[I].focus;)T=b.steps[I--];De=se(T,De)}}},V=function(b){var I;switch(b.type){case"binary":switch(b.value){case".":var pe=V(b.lhs);pe.type==="path"?I=pe:I={type:"path",steps:[pe]},pe.type==="parent"&&(I.seekingParent=[pe.slot]);var Ee=V(b.rhs);Ee.type==="function"&&Ee.procedure.type==="path"&&Ee.procedure.steps.length===1&&Ee.procedure.steps[0].type==="name"&&I.steps[I.steps.length-1].type==="function"&&(I.steps[I.steps.length-1].nextFunction=Ee.procedure.steps[0].value),Ee.type==="path"?Array.prototype.push.apply(I.steps,Ee.steps):(typeof Ee.predicate<"u"&&(Ee.stages=Ee.predicate,delete Ee.predicate),I.steps.push(Ee)),I.steps.filter(function(re){if(re.type==="number"||re.type==="value")throw{code:"S0213",stack:new Error().stack,position:re.position,value:re.value};return re.type==="string"}).forEach(function(re){re.type="name"}),I.steps.filter(function(re){return re.keepArray===!0}).length>0&&(I.keepSingletonArray=!0);var Ke=I.steps[0];Ke.type==="unary"&&Ke.value==="["&&(Ke.consarray=!0);var De=I.steps[I.steps.length-1];De.type==="unary"&&De.value==="["&&(De.consarray=!0),ae(I);break;case"[":I=V(b.lhs);var T=I,M="predicate";if(I.type==="path"&&(T=I.steps[I.steps.length-1],M="stages"),typeof T.group<"u")throw{code:"S0209",stack:new Error().stack,position:b.position};typeof T[M]>"u"&&(T[M]=[]);var P=V(b.rhs);typeof P.seekingParent<"u"&&(P.seekingParent.forEach(re=>{re.level===1?se(T,re):re.level--}),ee(T,P)),T[M].push({type:"filter",expr:P,position:b.position});break;case"{":if(I=V(b.lhs),typeof I.group<"u")throw{code:"S0210",stack:new Error().stack,position:b.position};I.group={lhs:b.rhs.map(function(re){return[V(re[0]),V(re[1])]}),position:b.position};break;case"^":I=V(b.lhs),I.type!=="path"&&(I={type:"path",steps:[I]});var H={type:"sort",position:b.position};H.terms=b.rhs.map(function(re){var ve=V(re.expression);return ee(H,ve),{descending:re.descending,expression:ve}}),I.steps.push(H),ae(I);break;case":=":I={type:"bind",value:b.value,position:b.position},I.lhs=V(b.lhs),I.rhs=V(b.rhs),ee(I,I.rhs);break;case"@":if(I=V(b.lhs),T=I,I.type==="path"&&(T=I.steps[I.steps.length-1]),typeof T.stages<"u"||typeof T.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:b.position};if(T.type==="sort")throw{code:"S0216",stack:new Error().stack,position:b.position};b.keepArray&&(T.keepArray=!0),T.focus=b.rhs.value,T.tuple=!0;break;case"#":I=V(b.lhs),T=I,I.type==="path"?T=I.steps[I.steps.length-1]:(I={type:"path",steps:[I]},typeof T.predicate<"u"&&(T.stages=T.predicate,delete T.predicate)),typeof T.stages>"u"?T.index=b.rhs.value:T.stages.push({type:"index",value:b.rhs.value,position:b.position}),T.tuple=!0;break;case"~>":I={type:"apply",value:b.value,position:b.position},I.lhs=V(b.lhs),I.rhs=V(b.rhs),I.keepArray=I.lhs.keepArray||I.rhs.keepArray;break;default:I={type:b.type,value:b.value,position:b.position},I.lhs=V(b.lhs),I.rhs=V(b.rhs),ee(I,I.lhs),ee(I,I.rhs)}break;case"unary":I={type:b.type,value:b.value,position:b.position},b.value==="["?I.expressions=b.expressions.map(function(re){var ve=V(re);return ee(I,ve),ve}):b.value==="{"?I.lhs=b.lhs.map(function(re){var ve=V(re[0]);ee(I,ve);var $e=V(re[1]);return ee(I,$e),[ve,$e]}):(I.expression=V(b.expression),b.value==="-"&&I.expression.type==="number"?(I=I.expression,I.value=-I.value):ee(I,I.expression));break;case"function":case"partial":I={type:b.type,name:b.name,value:b.value,position:b.position},I.arguments=b.arguments.map(function(re){var ve=V(re);return ee(I,ve),ve}),I.procedure=V(b.procedure);break;case"lambda":I={type:b.type,arguments:b.arguments,signature:b.signature,position:b.position};var ne=V(b.body);I.body=q(ne);break;case"condition":I={type:b.type,position:b.position},I.condition=V(b.condition),ee(I,I.condition),I.then=V(b.then),ee(I,I.then),typeof b.else<"u"&&(I.else=V(b.else),ee(I,I.else));break;case"transform":I={type:b.type,position:b.position},I.pattern=V(b.pattern),I.update=V(b.update),typeof b.delete<"u"&&(I.delete=V(b.delete));break;case"block":I={type:b.type,position:b.position},I.expressions=b.expressions.map(function(re){var ve=V(re);return ee(I,ve),(ve.consarray||ve.type==="path"&&ve.steps[0].consarray)&&(I.consarray=!0),ve});break;case"name":I={type:"path",steps:[b]},b.keepArray&&(I.keepSingletonArray=!0);break;case"parent":I={type:"parent",slot:{label:"!"+ie++,level:1,index:me++}},Ie.push(I);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":I=b;break;case"operator":if(b.value==="and"||b.value==="or"||b.value==="in")b.type="name",I=V(b);else if(b.value==="?")I=b;else throw{code:"S0201",stack:new Error().stack,position:b.position,token:b.value};break;case"error":I=b,b.lhs&&(I=V(b.lhs));break;default:var X="S0206";b.id==="(end)"&&(X="S0207");var U={code:X,position:b.position,token:b.value};if(y)return le.push(U),{type:"error",error:U};throw U.stack=new Error().stack,U}return b.keepArray&&(I.keepArray=!0),I};D=w(k),F();var we=O(0);if(A.id!=="(end)"){var Le={code:"S0201",position:A.position,token:A.value};G(Le)}if(we=V(we),we.type==="parent"||typeof we.seekingParent<"u")throw{code:"S0217",token:we.type,position:we.position};return le.length>0&&(we.errors=le),we};return L})();s.exports=a},{"./signature":5}],5:[function(r,s,n){var l=r("./utils");const a=(()=>{var p={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function f(w){for(var L=1,k=[],y={},A=y;L<w.length;){var D=w.charAt(L);if(D===":")break;var W=function(){k.push(y),A=y,y={}},le=function(Z,Se,Te,ce){for(var q=1,ie=Se;ie<Z.length;)if(ie++,D=Z.charAt(ie),D===ce){if(q--,q===0)break}else D===Te&&q++;return ie};switch(D){case"s":case"n":case"b":case"l":case"o":y.regex="["+D+"m]",y.type=D,W();break;case"a":y.regex="[asnblfom]",y.type=D,y.array=!0,W();break;case"f":y.regex="f",y.type=D,W();break;case"j":y.regex="[asnblom]",y.type=D,W();break;case"x":y.regex="[asnblfom]",y.type=D,W();break;case"-":A.context=!0,A.contextRegex=new RegExp(A.regex),A.regex+="?";break;case"?":case"+":A.regex+=D;break;case"(":var ke=le(w,L,"(",")"),z=w.substring(L+1,ke);if(z.indexOf("<")===-1)y.regex="["+z+"m]";else throw{code:"S0402",stack:new Error().stack,value:z,offset:L};y.type="("+z+")",L=ke,W();break;case"<":if(A.type==="a"||A.type==="f"){var R=le(w,L,"<",">");A.subtype=w.substring(L+1,R),L=R}else throw{code:"S0401",stack:new Error().stack,value:A.type,offset:L};break}L++}var G="^"+k.map(function(Z){return"("+Z.regex+")"}).join("")+"$",F=new RegExp(G),O=function(Z){var Se;if(l.isFunction(Z))Se="f";else{var Te=typeof Z;switch(Te){case"string":Se="s";break;case"number":Se="n";break;case"boolean":Se="b";break;case"object":Z===null?Se="l":Array.isArray(Z)?Se="a":Se="o";break;case"undefined":default:Se="m"}}return Se},B=function(Z,Se){for(var Te="^",ce=0,q=0;q<k.length;q++){Te+=k[q].regex;var ie=Se.match(Te);if(ie===null)throw{code:"T0410",stack:new Error().stack,value:Z[ce],index:ce+1};ce=ie[0].length}throw{code:"T0410",stack:new Error().stack,value:Z[ce],index:ce+1}};return{definition:w,validate:function(Z,Se){var Te="";Z.forEach(function(me){Te+=O(me)});var ce=F.exec(Te);if(ce){var q=[],ie=0;return k.forEach(function(me,Ie){var se=Z[ie],ee=ce[Ie+1];if(ee==="")if(me.context&&me.contextRegex){var ae=O(Se);if(me.contextRegex.test(ae))q.push(Se);else throw{code:"T0411",stack:new Error().stack,value:Se,index:ie+1}}else q.push(se),ie++;else ee.split("").forEach(function(V){if(me.type==="a"){if(V==="m")se=void 0;else{se=Z[ie];var we=!0;if(typeof me.subtype<"u"){if(V!=="a"&&ee!==me.subtype)we=!1;else if(V==="a"&&se.length>0){var Le=O(se[0]);if(Le!==me.subtype.charAt(0))we=!1;else{var b=se.filter(function(I){return O(I)!==Le});we=b.length===0}}}if(!we)throw{code:"T0412",stack:new Error().stack,value:se,index:ie+1,type:p[me.subtype]};V!=="a"&&(se=[se])}q.push(se),ie++}else q.push(se),ie++})}),q}B(Z,Te)}}}return f})();s.exports=a},{"./utils":6}],6:[function(r,s,n){const l=(()=>{function a(R){var G=!1;if(typeof R=="number"&&(G=!isNaN(R),G&&!isFinite(R)))throw{code:"D1001",value:R,stack:new Error().stack};return G}function p(R){var G=!1;return Array.isArray(R)&&(G=R.filter(function(F){return typeof F!="string"}).length===0),G}function f(R){var G=!1;return Array.isArray(R)&&(G=R.filter(function(F){return!a(F)}).length===0),G}function w(){var R=[];return R.sequence=!0,arguments.length===1&&R.push(arguments[0]),R}function L(R){return R.sequence===!0&&Array.isArray(R)}function k(R){return R&&(R._jsonata_function===!0||R._jsonata_lambda===!0)||typeof R=="function"}function y(R){var G=typeof R.arity=="number"?R.arity:typeof R.implementation=="function"?R.implementation.length:typeof R.length=="number"?R.length:R.arguments.length;return G}function A(R){return R&&R._jsonata_lambda===!0}var D=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function W(R){return typeof R=="object"&&R!==null&&D in R&&"next"in R&&typeof R.next=="function"}function le(R,G){if(R===G)return!0;if(typeof R=="object"&&typeof G=="object"&&R!==null&&G!==null){if(Array.isArray(R)&&Array.isArray(G)){if(R.length!==G.length)return!1;for(var F=0;F<R.length;F++)if(!le(R[F],G[F]))return!1;return!0}var O=Object.getOwnPropertyNames(R),B=Object.getOwnPropertyNames(G);if(O.length!==B.length)return!1;for(O=O.sort(),B=B.sort(),F=0;F<O.length;F++)if(O[F]!==B[F])return!1;for(F=0;F<O.length;F++){var Z=O[F];if(!le(R[Z],G[Z]))return!1}return!0}return!1}function ke(R){return typeof R=="object"&&R!==null&&"then"in R&&typeof R.then=="function"}function z(R){var G=[];for(let F of R)G.push(F);return G}return{isNumeric:a,isArrayOfStrings:p,isArrayOfNumbers:f,createSequence:w,isSequence:L,isFunction:k,isLambda:A,isIterable:W,getFunctionArity:y,isDeepEqual:le,stringToArray:z,isPromise:ke}})();s.exports=l},{}]},{},[3])(3)})})(Ci)),Ci.exports}var vu=gu();const Na=Js(vu);var sr={exports:{}};const Yn=no(io),yu="17.2.3",bu={version:yu};var Bs;function wu(){if(Bs)return sr.exports;Bs=1;var t={};const e=Yn,r=Yn,s=Yn,n=Yn,a=bu.version,p=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function f(){return p[Math.floor(Math.random()*p.length)]}function w(q){return typeof q=="string"?!["false","0","no","off",""].includes(q.toLowerCase()):!!q}function L(){return process.stdout.isTTY}function k(q){return L()?`\x1B[2m${q}\x1B[0m`:q}const y=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function A(q){const ie={};let me=q.toString();me=me.replace(/\r\n?/mg,`
`);let Ie;for(;(Ie=y.exec(me))!=null;){const se=Ie[1];let ee=Ie[2]||"";ee=ee.trim();const ae=ee[0];ee=ee.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),ae==='"'&&(ee=ee.replace(/\\n/g,`
`),ee=ee.replace(/\\r/g,"\r")),ie[se]=ee}return ie}function D(q){q=q||{};const ie=G(q);q.path=ie;const me=ce.configDotenv(q);if(!me.parsed){const ae=new Error(`MISSING_DATA: Cannot parse ${ie} for an unknown reason`);throw ae.code="MISSING_DATA",ae}const Ie=z(q).split(","),se=Ie.length;let ee;for(let ae=0;ae<se;ae++)try{const V=Ie[ae].trim(),we=R(me,V);ee=ce.decrypt(we.ciphertext,we.key);break}catch(V){if(ae+1>=se)throw V}return ce.parse(ee)}function W(q){console.error(`[dotenv@${a}][WARN] ${q}`)}function le(q){console.log(`[dotenv@${a}][DEBUG] ${q}`)}function ke(q){console.log(`[dotenv@${a}] ${q}`)}function z(q){return q&&q.DOTENV_KEY&&q.DOTENV_KEY.length>0?q.DOTENV_KEY:t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:""}function R(q,ie){let me;try{me=new URL(ie)}catch(V){if(V.code==="ERR_INVALID_URL"){const we=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw we.code="INVALID_DOTENV_KEY",we}throw V}const Ie=me.password;if(!Ie){const V=new Error("INVALID_DOTENV_KEY: Missing key part");throw V.code="INVALID_DOTENV_KEY",V}const se=me.searchParams.get("environment");if(!se){const V=new Error("INVALID_DOTENV_KEY: Missing environment part");throw V.code="INVALID_DOTENV_KEY",V}const ee=`DOTENV_VAULT_${se.toUpperCase()}`,ae=q.parsed[ee];if(!ae){const V=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${ee} in your .env.vault file.`);throw V.code="NOT_FOUND_DOTENV_ENVIRONMENT",V}return{ciphertext:ae,key:Ie}}function G(q){let ie=null;if(q&&q.path&&q.path.length>0)if(Array.isArray(q.path))for(const me of q.path)e.existsSync(me)&&(ie=me.endsWith(".vault")?me:`${me}.vault`);else ie=q.path.endsWith(".vault")?q.path:`${q.path}.vault`;else ie=r.resolve(process.cwd(),".env.vault");return e.existsSync(ie)?ie:null}function F(q){return q[0]==="~"?r.join(s.homedir(),q.slice(1)):q}function O(q){const ie=w(t.DOTENV_CONFIG_DEBUG||q&&q.debug),me=w(t.DOTENV_CONFIG_QUIET||q&&q.quiet);(ie||!me)&&ke("Loading env from encrypted .env.vault");const Ie=ce._parseVault(q);let se=t;return q&&q.processEnv!=null&&(se=q.processEnv),ce.populate(se,Ie,q),{parsed:Ie}}function B(q){const ie=r.resolve(process.cwd(),".env");let me="utf8",Ie=t;q&&q.processEnv!=null&&(Ie=q.processEnv);let se=w(Ie.DOTENV_CONFIG_DEBUG||q&&q.debug),ee=w(Ie.DOTENV_CONFIG_QUIET||q&&q.quiet);q&&q.encoding?me=q.encoding:se&&le("No encoding is specified. UTF-8 is used by default");let ae=[ie];if(q&&q.path)if(!Array.isArray(q.path))ae=[F(q.path)];else{ae=[];for(const b of q.path)ae.push(F(b))}let V;const we={};for(const b of ae)try{const I=ce.parse(e.readFileSync(b,{encoding:me}));ce.populate(we,I,q)}catch(I){se&&le(`Failed to load ${b} ${I.message}`),V=I}const Le=ce.populate(Ie,we,q);if(se=w(Ie.DOTENV_CONFIG_DEBUG||se),ee=w(Ie.DOTENV_CONFIG_QUIET||ee),se||!ee){const b=Object.keys(Le).length,I=[];for(const pe of ae)try{const Ee=r.relative(process.cwd(),pe);I.push(Ee)}catch(Ee){se&&le(`Failed to load ${pe} ${Ee.message}`),V=Ee}ke(`injecting env (${b}) from ${I.join(",")} ${k(`-- tip: ${f()}`)}`)}return V?{parsed:we,error:V}:{parsed:we}}function Z(q){if(z(q).length===0)return ce.configDotenv(q);const ie=G(q);return ie?ce._configVault(q):(W(`You set DOTENV_KEY but you are missing a .env.vault file at ${ie}. Did you forget to build it?`),ce.configDotenv(q))}function Se(q,ie){const me=Buffer.from(ie.slice(-64),"hex");let Ie=Buffer.from(q,"base64");const se=Ie.subarray(0,12),ee=Ie.subarray(-16);Ie=Ie.subarray(12,-16);try{const ae=n.createDecipheriv("aes-256-gcm",me,se);return ae.setAuthTag(ee),`${ae.update(Ie)}${ae.final()}`}catch(ae){const V=ae instanceof RangeError,we=ae.message==="Invalid key length",Le=ae.message==="Unsupported state or unable to authenticate data";if(V||we){const b=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw b.code="INVALID_DOTENV_KEY",b}else if(Le){const b=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw b.code="DECRYPTION_FAILED",b}else throw ae}}function Te(q,ie,me={}){const Ie=!!(me&&me.debug),se=!!(me&&me.override),ee={};if(typeof ie!="object"){const ae=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw ae.code="OBJECT_REQUIRED",ae}for(const ae of Object.keys(ie))Object.prototype.hasOwnProperty.call(q,ae)?(se===!0&&(q[ae]=ie[ae],ee[ae]=ie[ae]),Ie&&le(se===!0?`"${ae}" is already defined and WAS overwritten`:`"${ae}" is already defined and was NOT overwritten`)):(q[ae]=ie[ae],ee[ae]=ie[ae]);return ee}const ce={configDotenv:B,_configVault:O,_parseVault:D,config:Z,decrypt:Se,parse:A,populate:Te};return sr.exports.configDotenv=ce.configDotenv,sr.exports._configVault=ce._configVault,sr.exports._parseVault=ce._parseVault,sr.exports.config=ce.config,sr.exports.decrypt=ce.decrypt,sr.exports.parse=ce.parse,sr.exports.populate=ce.populate,sr.exports=ce,sr.exports}var xu=wu();const cs=async t=>{const r=await(await Rt.getWorkspace()).getResource(t);return r||at("Invalid URL: "+t),await r.getContents({uri:!0})},Ma=t=>t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:"),us={},ci=async(t,e)=>{const r=await Na(`[**[${e}!='']]`).evaluate(t);for(const s of r){const n=s[e];if(Ma(n))continue;const l=await cs(n);us[l]=s[e],s[e]=l}},kn=t=>us[t],zi=async(t,e)=>{const r=await Na(`[**[${e}!='']]`).evaluate(t);for(const s of r){const n=s[e];!n||!n.startsWith("blob:")||(s[e]=us[n])}},Fa=t=>{Ze.registerContribution("catalog.root",{label:t.label,icon:t.icon,contributionId:t.contributionId});const e=t.contributionId??t.label;t.items?.forEach(r=>{Ze.registerContribution(e,{label:r.label,icon:r.icon,contributionId:r.contributionId});const n=import.meta.resolve("/.");r.items.forEach(l=>{const a={label:l.label,icon:l.icon,state:{...l.state}};a.state?.url&&(a.state.url=a.state.url.replace("${baseURL}/",n)),Ze.registerContribution(r.contributionId,a)})})},Ui=t=>{Object.entries(t).forEach(([e,r])=>{const s=/\${([a-zA-Z0-9_]+)}/g;t[e]=r.replace(s,(n,l)=>{const a=t[l];return a!==void 0?a:n})})},qa=async(...t)=>{const e=await Rt.getWorkspace(),r={};for(const s of t){const n=await e?.getResource(s);if(!n)continue;const l=await n.getContents(),a=xu.parse(l||"");Ui(a),Object.assign(r,a)}return Ui(r),r},Iu=Object.freeze(Object.defineProperty({__proto__:null,getOriginalUri:kn,isAbsoluteResource:Ma,loadEnvs:qa,registerCatalog:Fa,replaceUris:ci,replaceVars:Ui,revertBlobUris:zi,toBlobUri:cs},Symbol.toStringTag,{value:"Module"}));so.resolveUrl=t=>cs(t);Er.registerEditorInputHandler({canHandle:t=>t instanceof tn&&t.getName().endsWith(".geospace"),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return e.widgetFactory=r=>j`
            <gs-map id="${r}" .input="${e}"></gs-map>`,e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ku=Zs(class extends Qs{constructor(){super(...arguments),this.key=Lt}render(t,e){return this.key=t,e}update(t,[e,r]){return e!==this.key&&(Xs(t),this.key=e),r}});function Zr(t,e){return t.layers.find(r=>r.uuid===e)}function Qr(t,e){return t.layers.findIndex(r=>r.uuid===e)}function Su(t,e){return t.controls.findIndex(r=>r.uuid===e)}function Au(t,e){return t.overlays.findIndex(r=>r.uuid===e)}const Eu=t=>new Proxy({},{get:(e,r)=>async(...s)=>{for(const n of t)await n[r](...s)}});var Vt=(t=>(t[t.LOADED=0]="LOADED",t[t.LAYER_ADDED=1]="LAYER_ADDED",t[t.LAYER_DELETED=2]="LAYER_DELETED",t[t.LAYER_UPDATED=3]="LAYER_UPDATED",t[t.FEATURE_SELECTED=4]="FEATURE_SELECTED",t))(Vt||{});const or=Ur(Ko),_u=`:root,
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
`,Cu="iframe-map-renderer.html";class Ou{constructor(e,r){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=r,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(r,s){return async(...n)=>await e.sendMessage(s,{...n})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=Cu,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}getViewExtent(){return[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(e){this.onSyncCallback&&this.onSyncCallback(e)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,r){try{const{toBlobUri:s}=await ot(async()=>{const{toBlobUri:l}=await Promise.resolve().then(()=>Iu);return{toBlobUri:l}},void 0),n=await s(r);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:n},"*")}catch(s){this.iframe.contentWindow.postMessage({id:e,success:!1,error:s instanceof Error?s.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{if(e.source!==this.iframe?.contentWindow)return;const{id:r,result:s,error:n,type:l,event:a}=e.data;if(r!==void 0&&this.pendingMessages.has(r)){const{resolve:p,reject:f}=this.pendingMessages.get(r);this.pendingMessages.delete(r),n?f(new Error(n)):p(s)}l==="dirty"?this.onDirtyCallback?.():l==="sync"?this.onSyncCallback?.(a):l==="iframeClicked"?this.onClickCallback?.():l==="resolveAsset"&&this.handleAssetResolution(r,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const r=s=>{s.source===this.iframe?.contentWindow&&s.data.type==="rendererReady"&&(window.removeEventListener("message",r),e())};window.addEventListener("message",r)})}async sendMessage(e,r){if(!this.iframe)throw new Error("Iframe not initialized");const s=++this.messageId;return new Promise((n,l)=>{this.pendingMessages.set(s,{resolve:n,reject:l}),this.iframe.contentWindow.postMessage({id:s,method:e,params:r},"*"),setTimeout(()=>{this.pendingMessages.has(s)&&(this.pendingMessages.delete(s),l(new Error("Message timeout")))},5e3)})}}class Tu{constructor(e,r){this.gsMap=e,this.renderer=r}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,r){r?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){const r=Qr(this.gsMap,e);r>=0&&(this.gsMap.layers.splice(r,1),this.triggerDirty())}async renameLayer(e,r){const s=Zr(this.gsMap,e);s&&(s.name=r,this.triggerDirty())}async moveLayer(e,r){const s=Qr(this.gsMap,e);if(s<0)return;let n;if(r){if(n=Qr(this.gsMap,r),n<0||s===n)return}else n=s>0?s-1:s+1;if(n>=0&&n<this.gsMap.layers.length&&s!==n){const[l]=this.gsMap.layers.splice(s,1);this.gsMap.layers.splice(n,0,l),this.triggerDirty()}}async setLayerVisible(e,r){const s=Zr(this.gsMap,e);s&&(s.visible=r,this.triggerDirty())}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){const r=Su(this.gsMap,e);r>=0&&(this.gsMap.controls.splice(r,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(e,r){this.gsMap.overlays.push({src:e,position:r||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){const r=Au(this.gsMap,e);r>=0&&(this.gsMap.overlays.splice(r,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(e,r){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class Lu{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,r){or.set({part:this.source,event:Vt.LAYER_ADDED})}async deleteLayer(e){or.set({part:this.source,event:Vt.LAYER_DELETED})}async renameLayer(e,r){or.set({part:this.source,event:Vt.LAYER_UPDATED})}async moveLayer(e,r){or.set({part:this.source,event:Vt.LAYER_UPDATED})}async setLayerVisible(e,r){}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,r){}async removeOverlay(e){}async enableDrawing(e,r){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){or.set({part:this.source,event:Vt.LAYER_UPDATED})}}var Pu=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,Un=(t,e,r,s)=>{for(var n=s>1?void 0:s?Ru(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Pu(e,r,n),n};const $u=Pn("GsMapEditor");let xt=class extends Tt{constructor(){super(),this.mapContainer=Mr(),this.isFirstConnection=!0,this.interactionMode="none",this.commandStack=new la}getOperations(){return this.operations}onMapChanged({part:t,event:e}){t===this&&(e===Vt.LAYER_ADDED||e===Vt.LAYER_DELETED||e===Vt.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const e=this.getGsMap()?.layers.filter(s=>{const n=s.type===ys.VECTOR,l=s.source?.type===Xt.Features;return n&&l})||[],r=this.activeDrawingLayerUuid!==void 0;return j`
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
            
            ${vr(e.length>0,()=>{const s=e.map(n=>`${n.uuid}:${n.name}`).join("|");return j`
                ${ku(s,j`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${n=>{const l=n.target.value||void 0;this.activeDrawingLayerUuid=l,(l===void 0||n.target.value==="")&&(this.operations?.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${e.map(n=>j`
                            <wa-option value="${n.uuid}">${n.name||"Layer"}</wa-option>
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
        `}async connectedCallback(){if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}this.renderer?.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Ge.set(this)}))}async doInitUI(){const t=this.input?.data,e=await qa(".env","envs/.env","env","envs/env","default.env","envs/default.env","dev.env","envs/dev.env");e.BUILD_TIME=new Date;const r=await t.getContents();let s=r&&r.trim()?JSON.parse(r):ea;s=this.migrateGsMap(s),bs(s),await ci(s,"url"),await ci(s,"src"),this.gsMap=s,s.view&&(this.initialView={center:[...s.view.center],zoom:s.view.zoom}),this.renderer=new Ou(s,e);const n=this.renderer.getOperations(),l=new Tu(s,this.renderer),a=new Lu(this);this.operations=Eu([l,n,a]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(p=>{if(this.gsMap){switch(p.type){case"viewChanged":this.gsMap.view.center=p.view.center,this.gsMap.view.zoom=p.view.zoom,p.view.rotation!==void 0&&p.view.rotation!==0&&(this.gsMap.view.rotation=p.view.rotation);break;case"featuresChanged":const f=Zr(this.gsMap,p.layerUuid);f&&f.source?.type===Xt.Features&&(f.source.features=p.features);break;case"featureSelected":const w={feature:p.feature,layerUuid:p.layerUuid,metrics:p.metrics};console.info("Feature metrics:",w.metrics),or.set({part:this,event:Vt.FEATURE_SELECTED,payload:w});break;case"featureDeselected":console.info("Feature deselected"),or.set({part:this,event:Vt.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),this.renderer.setOnClick?.(()=>{Ge.set(this)}),this.updateToolbar(),or.set({part:this,event:Vt.LOADED})}catch(p){console.error("Failed to render map:",p),at(`Failed to render map: ${p.message}`)}}migrateGsMap(t){const e={...t};let r=!1;return t.view||(console.log("Creating view field and migrating old properties..."),r=!0,e.view={},t.center!==void 0&&(e.view.center=t.center,delete e.center),t.zoom!==void 0&&(e.view.zoom=t.zoom,delete e.zoom),t.projection!==void 0&&(e.view.projection=t.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857")),(!t.styles||Object.keys(t.styles).length===0)&&(console.log("Adding default styles to map..."),r=!0,e.styles={...oo}),(!t.styleRules||t.styleRules.length===0)&&(console.log("Adding default style rules to map..."),r=!0,e.styleRules=[...lo]),r&&console.log("Map migration completed"),e}getGsMap(){return this.gsMap}async save(){if(!this.renderer){at("Map not initialized");return}try{if(!this.gsMap){at("Map not initialized");return}const t=JSON.parse(JSON.stringify(this.gsMap));await zi(t,"url"),await zi(t,"src"),this.input?.data.saveContents(JSON.stringify(t,null,2)),this.markDirty(!1)}catch(t){at(`Save failed: ${t.message}`)}}get mapOperations(){return this.operations}edit(){qt("not yet implemented")}async refresh(){if(!this.renderer){$u.error("Map not initialized");return}await this.renderer.modelToUI()}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Point",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("LineString",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Polygon",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){await this.operations?.enableFeatureSelection(),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){if(this.interactionMode==="select")try{await this.operations?.deleteSelectedFeatures(),qt("Selected features deleted")}catch(t){at(t.message)}}async handleCreateDrawingLayer(){if(!this.gsMap){at("Map not initialized");return}const t=await Dn("Enter name for new drawing layer:","Drawing Layer");if(!t)return;const e=bs({name:t,type:ys.VECTOR,source:{type:Xt.Features,features:[]},visible:!0});await this.operations?.addLayer(e,!1);const r=this.gsMap?.layers.find(s=>s.uuid===e.uuid);r?.uuid&&(this.activeDrawingLayerUuid=r.uuid),await this.updateComplete,this.updateToolbar(),qt(`Created drawing layer: ${t}`)}doClose(){this.renderer?.destroy(),this.renderer=void 0,this.input=void 0}render(){return j`
            <div class="gc-map-container" ${Fr(this.mapContainer)}>
            </div>
        `}};xt.styles=[ao(_u),Nt`
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
    `];Un([ze({attribute:!1})],xt.prototype,"input",2);Un([ze({type:String})],xt.prototype,"activeDrawingLayerUuid",2);Un([ze({type:String})],xt.prototype,"interactionMode",2);Un([ns(or)],xt.prototype,"onMapChanged",1);xt=Un([yt("gs-map")],xt);var Du=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,yi=(t,e,r,s)=>{for(var n=s>1?void 0:s?Nu(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Du(e,r,n),n};let sn=class extends Tt{onPartChanged(t){t==this||t==this.mapEditor||!(t instanceof xt)||(this.mapEditor=t,this.updateLater())}onMapChanged({part:t}){t==this.mapEditor&&this.updateLater()}toggleVisible(t){const e=this.mapEditor.getGsMap(),r=Zr(e,t);if(!r)return;const n=!(r.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(t,n),this.updateLater()}async confirmAction(t,e){await an(t)&&e()}selectLayer(t){this.selectedLayerUuid=t,this.updateToolbar(),this.updateContextMenu()}renameLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const r=this.mapEditor.getGsMap();if(!Zr(r,e))return;const n=Qr(r,e),l=Re.createExecutionContext(this,{index:n+1});l.activeEditor=this.mapEditor,Re.execute("rename_layer",l)}deleteLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const r=this.mapEditor.getGsMap(),s=Zr(r,e);s&&this.confirmAction(`Delete layer "${s.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(e)))}moveLayerUp(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const r=Qr(e,t);if(r<=0)return;const s=e.layers[r-1]?.uuid;s&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(t,s)),this.selectedLayerUuid=s)}moveLayerDown(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const r=Qr(e,t);if(r<0||r>=e.layers.length-1)return;const s=e.layers[r+1]?.uuid;s&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(t,s)),this.selectedLayerUuid=s)}renderToolbar(){const t=this.selectedLayerUuid!==void 0;return j`
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
        `}renderContextMenu(){const t=this.selectedLayerUuid!==void 0;return j`
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
        `}render(){return vr(!this.mapEditor,()=>j`
                    <k-no-content message="Select a map."></k-no-content>`,()=>j`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((t,e)=>j`
                            <wa-tree-item @click="${()=>t.uuid&&this.selectLayer(t.uuid)}" 
                                          class="${this.selectedLayerUuid===t.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${t.name??`Layer ${e+1}`}${e==0?j`
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
                        ${this.mapEditor?.getGsMap()?.controls.map(t=>j`
                            <wa-tree-item>
                                <span>${kn(t.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{t.uuid&&this.confirmAction(`Delete control "${kn(t.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(t.uuid)))}}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(t=>j`
                            <wa-tree-item>
                                <span>${kn(t.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{t.uuid&&this.confirmAction(`Delete overlay "${kn(t.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(t.uuid)))}}>
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
            `)}};sn.styles=Nt`
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
    `;yi([Pt()],sn.prototype,"selectedLayerUuid",2);yi([ns(Ge)],sn.prototype,"onPartChanged",1);yi([ns(or)],sn.prototype,"onMapChanged",1);sn=yi([yt("gs-map-props")],sn);var Mu=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,za=(t,e,r,s)=>{for(var n=s>1?void 0:s?Fu(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=(s?a(e,r,n):a(n))||n);return s&&n&&Mu(e,r,n),n};const qu="catalog.root";let _r=class extends Tt{constructor(){super(...arguments),this.treeRef=Mr()}doBeforeUI(){const t=Ze.getContributions(qu);this.rootNodes=this.toTreeNodes(t)}renderToolbar(){const t=Ge.get()instanceof _r&&Ut.get()!==void 0;return j`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!t} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(t){return t.map(e=>{const r={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const s=Ze.getContributions(e.contributionId);r.leaf=s.length===0,r.children=this.toTreeNodes(s)}return r})}onItemDblClicked(t){const e=t.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(t){const e=t.detail.selection[0].model;Ut.set(e.data)}setAllExpanded(t){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(r=>{r.expanded=t})}refresh(){this.requestUpdate()}createTreeItems(t,e=!1){return t?j`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${t} ?expanded=${e}>
                <span><k-icon name="${t.icon}"></k-icon> ${t.label}</span>
                ${t.children?.map(r=>this.createTreeItems(r))}
            </wa-tree-item>`:j``}render(){return j`
            <wa-tree ${Fr(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${this.rootNodes?.map(t=>this.createTreeItems(t,!0))}
            </wa-tree>
        `}};_r.styles=Nt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;za([Pt()],_r.prototype,"rootNodes",2);_r=za([yt("gs-catalog")],_r);const zu="geo!space catalog",Uu="earth",ju="catalog.root.geospace",Wu=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],Bu={label:zu,icon:Uu,contributionId:ju,items:Wu};pt({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async t=>{let e=t.params&&t.params.url;if(!e){const s=Ut.get();if(!s||!("url"in s))return;e=s.url}const r=await Rt.getWorkspace();if(!r){at("No workspace selected.");return}fetch(e,{method:"GET"}).then(s=>s.blob()).then(s=>{const n=new URL(e).pathname.split("/"),l=n[n.length-1];return r.getResource(l,{create:!0}).then(a=>a.saveContents(s,{contentType:La.BINARY}).then(()=>{qt("File checked out: "+l)}))}).catch(s=>{at(s)})}}});pt({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async t=>{const e=Ge.get();e instanceof _r&&e.refresh()}}});pt({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Ge.get();e instanceof _r&&e.setAllExpanded(!0)}}});pt({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Ge.get();e instanceof _r&&e.setAllExpanded(!1)}}});Fa(Bu);const Vu=Pn("GsCommandHandlers"),br=t=>t.activeEditor instanceof xt,Br=t=>{const e=t.activeEditor;if(!(e instanceof xt)||!e.getOperations())throw Vu.error("GsMapEditor with renderer not available in context.source"),new Error("GsMapEditor with renderer not available in context.source");return e.getOperations()};Re.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level, an interger between 0 and 12",required:!0}]},handler:{canExecute:br,execute:async t=>{await Br(t).setZoom(Number(t.params.zoom).valueOf())}}});Re.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[]},handler:{canExecute:t=>Ge.get()instanceof xt,execute:async t=>{const e=Ge.get(),r=e.getGsMap();r?.view?.zoom!==void 0&&await e.mapOperations?.setZoom(r.view.zoom+1)}}});Re.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[]},handler:{canExecute:t=>Ge.get()instanceof xt,execute:async t=>{const e=Ge.get(),r=e.getGsMap();r?.view?.zoom!==void 0&&await e.mapOperations?.setZoom(r.view.zoom-1)}}});Re.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the map",required:!0},{name:"lon",description:"the longitude of the map",required:!0}]},handler:{canExecute:br,execute:async t=>{const e=Br(t),r=co([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]);await e.setCenter([r[0],r[1]])}}});Re.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(Xt).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:br,execute:async t=>{const e=Br(t),r=t.params.source?.trim().toLowerCase(),s=t.params.url,n=uo(r),l=t?.params&&t.params.basemap==!0;let a;s&&(a=s.split("/").pop()),!a&&n&&(a=n);const p=ws({name:a,type:po(r),source:ws({type:n,url:s??ho(n)})});await ci(p,"url"),await e.addLayer(p,l)}}});Re.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:br,execute:async t=>{const e=Br(t),s=t.activeEditor.getGsMap(),n=parseInt(t.params.index)-1;if(n<0||!s||n>=s.layers.length)return;const l=s.layers[n];l?.uuid&&await e.deleteLayer(l.uuid)}}});Re.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:br,execute:async t=>{const e=Br(t),s=t.activeEditor.getGsMap(),n=parseInt(t.params.index)-1;if(n<0||!s||n>=s.layers.length)return;const l=s.layers[n];if(!l?.uuid)return;const a=l.name||`Layer ${n+1}`,p=t.params?.newName||await Dn(`Enter new name for "${a}":`,a);!p||p===a||await e.renameLayer(l.uuid,p)}}});Re.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:br,execute:async t=>{const e=t.source,r=t.params?.mode;await e.switchColorMode(r)}}});Re.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:br,execute:async t=>{const e=Br(t),r=t.params.src,s=t.params.position;await e.addOverlayFromModule(r,s)}}});Re.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:br,execute:async t=>{const e=Br(t),r=t.params.src;await e.addControlFromModule(r)}}});Re.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates",type:"number[]"}]},handler:{canExecute:br,execute:async t=>{const e=t.params.latlon,s=t.source.renderer.getViewExtent();if(!s)throw new Error("Failed to get view extent");let n=s;if(e||e===void 0){const{transformExtent:l}=await ot(async()=>{const{transformExtent:a}=await import("./index-C4bFKT08.js").then(p=>p.ae);return{transformExtent:a}},__vite__mapDeps([1,2]));n=l(s,"EPSG:3857","EPSG:4326"),[n[0],n[1]]=[n[1],n[0]],[n[2],n[3]]=[n[3],n[2]]}t.viewExtent=n}}});Re.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:t=>Ge.get()instanceof xt,execute:async t=>{const e=Ge.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});Re.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:t=>Ge.get()instanceof xt,execute:async t=>{const e=Ge.get();e instanceof xt&&await e.refresh()}}});Re.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:t=>Ge.get()instanceof xt,execute:async t=>{const e=Ge.get();e instanceof xt&&await e.resetView()}}});Re.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:t=>Ge.get()instanceof xt,execute:async t=>{const r=Ge.get().mapOperations;r&&await r.switchColorMode()}}});var Gu=Object.getOwnPropertyDescriptor,Hu=(t,e,r,s)=>{for(var n=s>1?void 0:s?Gu(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(n=a(n)||n);return n};let Vs=class extends is{createRenderRoot(){return this}render(){return j`
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
                <k-toolbar id=${Ia}></k-toolbar>
                <k-toolbar id=${ec}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${cn}></k-toolbar>
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
                    <k-tabs id="${Mi}"></k-tabs>
                    <k-tabs id="${Aa}"></k-tabs>
                </k-resizable-grid>
                
                <!-- CENTER: Editor + Bottom Panel -->
                <k-resizable-grid 
                    id="center-layout" 
                    orientation="vertical" 
                    sizes="80%, 20%">
                    
                    <!-- Editor Area (fixed, never moves) -->
                    <k-tabs id="${Yr}"></k-tabs>
                    
                    <!-- Bottom Panel (terminal, output, etc.) -->
                    <k-tabs id="${_a}"></k-tabs>
                </k-resizable-grid>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${Ea}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${ka}></k-toolbar>
                <k-toolbar id=${ss}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Sa}></k-toolbar>
            </div>
        `}};Vs=Hu([yt("gs-app")],Vs);const Ku=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
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
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,Ju=`# 🌐 geo!space
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

**Happy mapping! 🗺️✨**`,Gs=xn.version,Hs=Pn("GeoSpaceApp"),Yu={".geojson":Xt.GeoJSON,".json":Xt.GeoJSON,".kml":Xt.KML,".gpx":Xt.GPX,".tif":Xt.GeoTIFF,".tiff":Xt.GeoTIFF,".geotiff":Xt.GeoTIFF},Ua=t=>{const e=t.getName().toLowerCase();for(const[r,s]of Object.entries(Yu))if(e.endsWith(r))return s;return null},Zu=t=>Ua(t)!==null,Qu={id:"geospace",name:"geo!space",version:Gs,description:"A geospatial IDE for working with spatial data",metadata:{github:{owner:"erdalkaraca",repo:"geospace"}},extensions:["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage","system.pythonpackagemanager","system.settings-tree","system.ai-system"],contributions:{ui:[{target:Ia,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:Mi,name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>j`<k-filebrowser id="${t}"></k-filebrowser>`},{target:Mi,name:"catalog",label:"Catalog",icon:"book",component:t=>j`<gs-catalog id="${t}"></gs-catalog>`},{target:Aa,name:"map-props",label:"Map Properties",icon:"fg map-options",component:t=>j`<gs-map-props id="${t}"></gs-map-props>`},{target:Ea,name:"aiview",label:"AI",icon:"robot",component:t=>j`<k-aiview id="${t}"></k-aiview>`},{target:_a,name:"log-terminal",label:"Log",icon:"list",component:t=>j`<k-log-terminal id="${t}"></k-log-terminal>`},{target:ka,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:Sa,label:`v${Gs}`,icon:"circle-info",command:"show_version_info",showLabel:!0},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const t=Ut.get();return t instanceof tn?!Zu(t):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_geospace_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>ot(()=>import("./mapbuilder-extension-DONtUDc5.js"),__vite__mapDeps([21,1,2])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>ot(()=>import("./style-editor-extension-DrycsQLC.js"),__vite__mapDeps([22,1,2])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>ot(()=>import("./overpass-extension-iSTnF4EU.js"),__vite__mapDeps([23,1,2])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>ot(()=>import("./gtfs-extension-B_8HGV99.js"),__vite__mapDeps([24,1,2])),icon:"map-location-dot"},{id:"geospace.tendermatch",name:"TenderMatch",description:"Ausschreibungsmatching für Logistikunternehmen",loader:()=>ot(()=>import("./tendermatch-extension-CQAHPvI6.js"),__vite__mapDeps([25,1,2])),icon:"handshake"}]},async initialize(){li.addPackage({name:xn.name,version:xn.version,dependencies:xn.dependencies,devDependencies:xn.devDependencies});const t={enhance:async(e,r)=>Rt.getWorkspace().then(s=>{const n={workspace:s?.getName(),activeEditor:Er.getEditorArea()?.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(n,null,2)}`}

${e}`})};Ze.registerContribution(zn,{label:"App Support",description:"General app support",role:"appsupport",priority:100,icon:"question-circle",sysPrompt:()=>{const e=Ue.getExtensions().map(s=>({id:s.id,name:s.name,description:s.description,experimental:s.experimental,installedAndEnabled:Ue.isEnabled(s.id)})),r=`***Available Extensions:***
${JSON.stringify(e,null,2)}`;return`${Ku}

${r}`},promptEnhancers:[t]}),pt({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async e=>{const r=Ut.get();if(!(r instanceof tn))return;const s=Ua(r);if(!s){Hs.warn(`Unsupported file type: ${r.getName()}`);return}const n=r.getWorkspacePath(),l=Re.createExecutionContext(e.source,{source:s,url:n});await Re.execute("add_layer",l)}}}),pt({command:{id:"create_geospace_file",name:"Create GeoSpace Map File",description:"Creates a new .geospace map file",parameters:[]},handler:{execute:async()=>{const e={...ea,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}};await Re.execute("create_file",{params:{path:"map.geospace",contents:JSON.stringify(e,null,2),extension:".geospace",ask:!0}})}}}),pt({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async e=>{const r=new Pa(Ju,"README.md");await Er.loadEditor(r)}},contribution:{target:cn,icon:"question-circle",label:"Welcome"}}),Hs.info("geo!space is ready!")},render(){return j`<gs-app></gs-app>`}};qn.registerApp(Qu,{defaultAppId:"geospace",autoStart:!0,container:document.body});export{lr as A,Pn as B,Re as C,Fi as D,En as E,tn as F,xt as G,Dn as H,an as I,aa as J,Tt as K,Mc as L,au as P,Ia as T,Ge as a,Cn as b,at as c,Qn as d,pt as e,Ut as f,Er as g,La as h,ep as i,Gt as j,Wr as k,qa as l,_a as m,He as n,Gl as o,ec as p,Jn as q,zt as r,rr as s,qt as t,pr as u,st as v,Rt as w,Ze as x,ka as y,Ye as z};
