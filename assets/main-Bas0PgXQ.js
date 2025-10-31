const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/git-extension-Dzh979dx.js","assets/index-CBe0mDof.js","assets/pyterminal-extension-BD4kIbpT.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-CpmCAzIS.js","assets/p12-splitter-LDII_ap5.js","assets/package-manager-extension-CvOySucs.js","assets/notebook-extension-BLyIvPQ-.js","assets/editor.main-702eHgXz.js","assets/editor-BhPcksyq.css","assets/command-palette-extension-CIwqXWJ_.js","assets/download-extension-s9Z7wu_H.js","assets/unzip-extension-BAf4ChmD.js","assets/md-editor-extension-CY6RHxK7.js","assets/monaco-editor-extension-DoL4cn0N.js","assets/memory-usage-extension-CG9hKzfA.js","assets/webdav-extension-CaHkro2s.js","assets/mapbuilder-extension--MFNqoAh.js","assets/style-editor-extension-CP82qDpk.js","assets/overpass-extension-BuvXMqiB.js","assets/gtfs-extension-DeUYrkrW.js"])))=>i.map(i=>d[i]);
import{x as A,B as Br,c as ks,g as Gs,e as ea,i as ta,E as zt,t as cr,T as qr,f as fd,u as md,a as Ks,r as Rc,b as gd,d as bd,m as Ys,_ as Dt,n as vn,h as ln,j as hi,k as pi,p as vd,v as oi,l as ha,M as ts,o as yd,q as wd,s as xd,G as Ml,w as Kn,D as zc,y as Nl,z as kd,A as Id,C as Cd,F as Sd,H as Fl,I as Ed,J as Ad}from"./index-CBe0mDof.js";/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $d=!1,_d="@kispace/geospace",Od="0.12.30",Td={"@kispace/appspace":"file:../appspace","esbuild-wasm":"^0.25.11",ol:"^10.6.1","ol-mapbox-style":"^13.1.0",osmtogeojson:"^3.0.0-beta.5","font-gis":"^1.0.6","pace-js":"^1.2.4"},Ld={"@testing-library/jest-dom":"^6.9.1","@types/node":"^24.9.2","@types/pubsub-js":"^1.8.6","@types/toastify-js":"^1.12.4","@vitest/coverage-v8":"^4.0.6","@vitest/ui":"^4.0.6","happy-dom":"^20.0.10",jsdom:"^27.1.0","rollup-plugin-visualizer":"^6.0.5",typescript:"~5.9.3",vite:"^7.1.12","vite-plugin-cross-origin-isolation":"^0.1.6","vite-plugin-mkcert":"^1.17.9","vite-plugin-static-copy":"^3.1.4","vite-plugin-zip":"^1.0.1",vitest:"^4.0.6",esbuild:"^0.25.11"},xa={name:_d,version:Od,dependencies:Td,devDependencies:Ld};class Xs{constructor(t){this.children=[],this.variables=t,this.proxy=new Proxy(t,this)}get(t,n){return t[n]||this.parent?.getProxy()[n]}set(t,n,r){t[n]=r}put(t,n){this.variables[t]=n}getProxy(){return this.proxy}createChild(t={}){const n=new Xs(t);return n.parent=this,this.children.push(n),n}getChildren(){return this.children}getParent(){return this.parent}destroy(){const t=this.parent?.children.indexOf(this);t!==void 0&&t>=0&&this.parent?.children.splice(t,1),this.parent=void 0}}const fn=new Xs({}),rr=fn.createChild({});rr.put("html",A);rr.put("render",Br);const ql={debug:0,info:1,warning:2,error:3};let Dd="debug";const Oi={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let bo=null;const Is=[];function pa(e){if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);if(e instanceof Error)return`${e.name}: ${e.message}`;try{return JSON.stringify(e)}catch{return String(e)}}class Pd{constructor(t){this.source=t}info(t){this.log(t,"info")}warning(t){this.log(t,"warning")}warn(t){this.log(t,"warning")}error(t){this.log(t,"error")}debug(t){this.log(t,"debug")}log(t,n){Ti(this.source,t,n)}}function Rd(e){return ql[e]>=ql[Dd]}function Ti(e,t,n){Rd(n)&&(bo?bo(e,t,n):(Is.push({source:e,message:t,level:n}),Oi[n==="error"?"error":n==="warning"?"warn":n==="debug"?"debug":"log"](`[${e}] ${t}`)))}function zd(){console.log=function(...e){Oi.log.apply(console,e),Ti("Console",e.map(t=>pa(t)).join(" "),"info")},console.info=function(...e){Oi.info.apply(console,e),Ti("Console",e.map(t=>pa(t)).join(" "),"info")},console.warn=function(...e){Oi.warn.apply(console,e),Ti("Console",e.map(t=>pa(t)).join(" "),"warning")},console.error=function(...e){Oi.error.apply(console,e),Ti("Console",e.map(t=>pa(t)).join(" "),"error")},console.debug=function(...e){Oi.debug.apply(console,e),Ti("Console",e.map(t=>pa(t)).join(" "),"debug")}}zd();function Md(e){for(bo=e;Is.length>0;){const t=Is.shift();t&&e(t.source,t.message,t.level)}}function Nd(){bo=null}function Ra(e){return new Pd(e)}const Ft=Ra("System");fn.put("logger",Ft);var Fd=Object.defineProperty,qd=(e,t,n)=>t in e?Fd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ns=(e,t,n)=>(qd(e,typeof t!="symbol"?t+"":t,n),n),Vd=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},rs=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},Ya=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Vl=(e,t,n)=>(Vd(e,t,"access private method"),n);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Mc(e,t){return Object.is(e,t)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let Rt=null,Ea=!1,uo=1;const vo=Symbol("SIGNAL");function Li(e){const t=Rt;return Rt=e,t}function Bd(){return Rt}function Ud(){return Ea}const Zs={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function zo(e){if(Ea)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Rt===null)return;Rt.consumerOnSignalRead(e);const t=Rt.nextProducerIndex++;if(Fi(Rt),t<Rt.producerNode.length&&Rt.producerNode[t]!==e&&Cs(Rt)){const n=Rt.producerNode[t];Mo(n,Rt.producerIndexOfThis[t])}Rt.producerNode[t]!==e&&(Rt.producerNode[t]=e,Rt.producerIndexOfThis[t]=Cs(Rt)?qc(e,Rt,t):0),Rt.producerLastReadVersion[t]=e.version}function jd(){uo++}function Nc(e){if(!(!e.dirty&&e.lastCleanEpoch===uo)){if(!e.producerMustRecompute(e)&&!Yd(e)){e.dirty=!1,e.lastCleanEpoch=uo;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=uo}}function Fc(e){if(e.liveConsumerNode===void 0)return;const t=Ea;Ea=!0;try{for(const n of e.liveConsumerNode)n.dirty||Hd(n)}finally{Ea=t}}function Wd(){return Rt?.consumerAllowSignalWrites!==!1}function Hd(e){var t;e.dirty=!0,Fc(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function Gd(e){return e&&(e.nextProducerIndex=0),Li(e)}function Kd(e,t){if(Li(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(Cs(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)Mo(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function Yd(e){Fi(e);for(let t=0;t<e.producerNode.length;t++){const n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(Nc(n),r!==n.version))return!0}return!1}function qc(e,t,n){var r;if(Js(e),Fi(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)e.producerIndexOfThis[i]=qc(e.producerNode[i],e,i)}return e.liveConsumerIndexOfThis.push(n),e.liveConsumerNode.push(t)-1}function Mo(e,t){var n;if(Js(e),Fi(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(n=e.unwatched)==null||n.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)Mo(e.producerNode[i],e.producerIndexOfThis[i])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const i=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];Fi(o),o.producerIndexOfThis[i]=t}}function Cs(e){var t;return e.consumerIsAlwaysLive||(((t=e?.liveConsumerNode)==null?void 0:t.length)??0)>0}function Fi(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function Js(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vc(e){if(Nc(e),zo(e),e.value===Ss)throw e.error;return e.value}function Xd(e){const t=Object.create(Zd);t.computation=e;const n=()=>Vc(t);return n[vo]=t,n}const is=Symbol("UNSET"),as=Symbol("COMPUTING"),Ss=Symbol("ERRORED"),Zd={...Zs,value:is,dirty:!0,error:null,equal:Mc,producerMustRecompute(e){return e.value===is||e.value===as},producerRecomputeValue(e){if(e.value===as)throw new Error("Detected cycle in computations.");const t=e.value;e.value=as;const n=Gd(e);let r,i=!1;try{r=e.computation.call(e.wrapper),i=t!==is&&t!==Ss&&e.equal.call(e.wrapper,t,r)}catch(o){r=Ss,e.error=o}finally{Kd(e,n)}if(i){e.value=t;return}e.value=r,e.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Jd(){throw new Error}let Qd=Jd;function eh(){Qd()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function th(e){const t=Object.create(ih);t.value=e;const n=()=>(zo(t),t.value);return n[vo]=t,n}function nh(){return zo(this),this.value}function rh(e,t){Wd()||eh(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,ah(e))}const ih={...Zs,equal:Mc,value:void 0};function ah(e){e.version++,jd(),Fc(e)}/**
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
 */const Xt=Symbol("node");var hr;(e=>{var t,n,r,i;class o{constructor(f,b={}){Ya(this,n),ns(this,t);const x=th(f)[vo];if(this[Xt]=x,x.wrapper=this,b){const v=b.equals;v&&(x.equal=v),x.watched=b[e.subtle.watched],x.unwatched=b[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return nh.call(this[Xt])}set(f){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Ud())throw new Error("Writes to signals not permitted during Watcher callback");const b=this[Xt];rh(b,f)}}t=Xt,n=new WeakSet,e.isState=c=>typeof c=="object"&&rs(n,c),e.State=o;class a{constructor(f,b){Ya(this,i),ns(this,r);const x=Xd(f)[vo];if(x.consumerAllowSignalWrites=!0,this[Xt]=x,x.wrapper=this,b){const v=b.equals;v&&(x.equal=v),x.watched=b[e.subtle.watched],x.unwatched=b[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Vc(this[Xt])}}r=Xt,i=new WeakSet,e.isComputed=c=>typeof c=="object"&&rs(i,c),e.Computed=a,(c=>{var f,b,C,x;function v(z){let H,F=null;try{F=Li(null),H=z()}finally{Li(F)}return H}c.untrack=v;function I(z){var H;if(!(0,e.isComputed)(z)&&!(0,e.isWatcher)(z))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((H=z[Xt].producerNode)==null?void 0:H.map(F=>F.wrapper))??[]}c.introspectSources=I;function R(z){var H;if(!(0,e.isComputed)(z)&&!(0,e.isState)(z))throw new TypeError("Called introspectSinks without a Signal argument");return((H=z[Xt].liveConsumerNode)==null?void 0:H.map(F=>F.wrapper))??[]}c.introspectSinks=R;function P(z){if(!(0,e.isComputed)(z)&&!(0,e.isState)(z))throw new TypeError("Called hasSinks without a Signal argument");const H=z[Xt].liveConsumerNode;return H?H.length>0:!1}c.hasSinks=P;function V(z){if(!(0,e.isComputed)(z)&&!(0,e.isWatcher)(z))throw new TypeError("Called hasSources without a Computed or Watcher argument");const H=z[Xt].producerNode;return H?H.length>0:!1}c.hasSources=V;class K{constructor(H){Ya(this,b),Ya(this,C),ns(this,f);let F=Object.create(Zs);F.wrapper=this,F.consumerMarkedDirty=H,F.consumerIsAlwaysLive=!0,F.consumerAllowSignalWrites=!1,F.producerNode=[],this[Xt]=F}watch(...H){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Vl(this,C,x).call(this,H);const F=this[Xt];F.dirty=!1;const D=Li(F);for(const G of H)zo(G[Xt]);Li(D)}unwatch(...H){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Vl(this,C,x).call(this,H);const F=this[Xt];Fi(F);for(let D=F.producerNode.length-1;D>=0;D--)if(H.includes(F.producerNode[D].wrapper)){Mo(F.producerNode[D],F.producerIndexOfThis[D]);const G=F.producerNode.length-1;if(F.producerNode[D]=F.producerNode[G],F.producerIndexOfThis[D]=F.producerIndexOfThis[G],F.producerNode.length--,F.producerIndexOfThis.length--,F.nextProducerIndex--,D<F.producerNode.length){const Z=F.producerIndexOfThis[D],xe=F.producerNode[D];Js(xe),xe.liveConsumerIndexOfThis[Z]=D}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[Xt].producerNode.filter(F=>F.dirty).map(F=>F.wrapper)}}f=Xt,b=new WeakSet,C=new WeakSet,x=function(z){for(const H of z)if(!(0,e.isComputed)(H)&&!(0,e.isState)(H))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=z=>rs(b,z),c.Watcher=K;function M(){var z;return(z=Bd())==null?void 0:z.wrapper}c.currentComputed=M,c.watched=Symbol("watched"),c.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(hr||(hr={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oh=Symbol("SignalWatcherBrand"),sh=new FinalizationRegistry((({watcher:e,signal:t})=>{e.unwatch(t)})),Bl=new WeakMap;function No(e){return e[oh]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new hr.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new hr.Computed((()=>{this._$St.get(),super.performUpdate()}));const t=this._$Su=new hr.subtle.Watcher((function(){const n=Bl.get(this);n!==void 0&&(n._$Si===!1&&n.requestUpdate(),this.watch())}));Bl.set(t,this),sh.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach((n=>n.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,n,r){this._$So=!0,super.requestUpdate(t,n,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(t){this._$Sh.add(t);const n=this._$So;this.requestUpdate(),this._$So=n}m(t){this._$Sh.delete(t)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */hr.State;hr.Computed;const wi=(e,t)=>new hr.State(e,t);var ka={exports:{}},lh=ka.exports,Ul;function ch(){return Ul||(Ul=1,(function(e,t){(function(n,r){var i={};n.PubSub?(i=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=i,r(i)),e!==void 0&&e.exports&&(t=e.exports=i),t.PubSub=i,e.exports=t=i})(typeof window=="object"&&window||lh||ks,function(n){var r={},i=-1,o="*";function a(P){var V;for(V in P)if(Object.prototype.hasOwnProperty.call(P,V))return!0;return!1}function c(P){return function(){throw P}}function f(P,V,K){try{P(V,K)}catch(M){setTimeout(c(M),0)}}function b(P,V,K){P(V,K)}function C(P,V,K,M){var z=r[V],H=M?b:f,F;if(Object.prototype.hasOwnProperty.call(r,V))for(F in z)Object.prototype.hasOwnProperty.call(z,F)&&H(z[F],P,K)}function x(P,V,K){return function(){var z=String(P),H=z.lastIndexOf(".");for(C(P,P,V,K);H!==-1;)z=z.substr(0,H),H=z.lastIndexOf("."),C(P,z,V,K);C(P,o,V,K)}}function v(P){var V=String(P),K=!!(Object.prototype.hasOwnProperty.call(r,V)&&a(r[V]));return K}function I(P){for(var V=String(P),K=v(V)||v(o),M=V.lastIndexOf(".");!K&&M!==-1;)V=V.substr(0,M),M=V.lastIndexOf("."),K=v(V);return K}function R(P,V,K,M){P=typeof P=="symbol"?P.toString():P;var z=x(P,V,M),H=I(P);return H?(K===!0?z():setTimeout(z,0),!0):!1}n.publish=function(P,V){return R(P,V,!1,n.immediateExceptions)},n.publishSync=function(P,V){return R(P,V,!0,n.immediateExceptions)},n.subscribe=function(P,V){if(typeof V!="function")return!1;P=typeof P=="symbol"?P.toString():P,Object.prototype.hasOwnProperty.call(r,P)||(r[P]={});var K="uid_"+String(++i);return r[P][K]=V,K},n.subscribeAll=function(P){return n.subscribe(o,P)},n.subscribeOnce=function(P,V){var K=n.subscribe(P,function(){n.unsubscribe(K),V.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){r={}},n.clearSubscriptions=function(V){var K;for(K in r)Object.prototype.hasOwnProperty.call(r,K)&&K.indexOf(V)===0&&delete r[K]},n.countSubscriptions=function(V){var K,M,z=0;for(K in r)if(Object.prototype.hasOwnProperty.call(r,K)&&K.indexOf(V)===0){for(M in r[K])z++;break}return z},n.getSubscriptions=function(V){var K,M=[];for(K in r)Object.prototype.hasOwnProperty.call(r,K)&&K.indexOf(V)===0&&M.push(K);return M},n.unsubscribe=function(P){var V=function(Z){var xe;for(xe in r)if(Object.prototype.hasOwnProperty.call(r,xe)&&xe.indexOf(Z)===0)return!0;return!1},K=typeof P=="string"&&(Object.prototype.hasOwnProperty.call(r,P)||V(P)),M=!K&&typeof P=="string",z=typeof P=="function",H=!1,F,D,G;if(K){n.clearSubscriptions(P);return}for(F in r)if(Object.prototype.hasOwnProperty.call(r,F)){if(D=r[F],M&&D[P]){delete D[P],H=P;break}if(z)for(G in D)Object.prototype.hasOwnProperty.call(D,G)&&D[G]===P&&(delete D[G],H=!0)}return H}})})(ka,ka.exports)),ka.exports}var uh=ch();const Bc=Gs(uh),ir=(e,t)=>{Bc.subscribe(e,(n,r)=>t(r))},Wt=(e,t)=>{Bc.publish(e,t)},Qs=e=>function(t,n,r){const i=r.value;return i.topic=e,r};fn.put("subscribe",ir);fn.put("publish",Wt);const za="events/contributionregistry/contributionsChanged";class dh{constructor(){this.contributions=new Map}registerContribution(t,n){const r=this.getContributions(t);if(n.disabled instanceof Function){const i=n.disabled;n.disabled=new hr.Computed(i)}r.push(n),Wt(za,{target:t,contributions:r})}getContributions(t){return this.contributions.has(t)||this.contributions.set(t,[]),this.contributions.get(t)}}const Ct=new dh;fn.put("contributionRegistry",Ct);const hh={},et=wi(null),ho=wi(null),Es=wi(null),Uc=wi(0),$n=wi(void 0);wi({name:"",timestamp:0});class ph{constructor(t,n,r,i,o){this.id=t,this.name=n,this.description=r,this.parameters=i||[],this.output=o||[]}}class jc{async execute(t,n){return qe.execute(t,n)}async undo(){}async redo(){}}class fh{constructor(){this.commands={},this.handlers=new Map}registerHandler(t,n){this.handlers.has(t)||this.handlers.set(t,[]),this.handlers.get(t).push(n)}getHandler(t){return this.handlers.get(t)}createExecutionContext(t,n){return{source:t,params:n||{},activePart:et.get(),activeEditor:ho.get()}}execute(t,n={}){const r=this.getHandler(t);if(!r)throw new Error(`No handlers registered for command: ${t}`);for(const i of r)if(i.canExecute===void 0||i.canExecute(n))return i.execute(n);Ft.error(`No handler found to execute command: ${t}`)}createAndRegisterCommand(t,n,r,i,o){const a=new ph(t,n,r,i);this.registerCommand(a),o&&this.registerHandler(t,o)}registerCommand(t){this.commands[t.id]=t,Ft.debug(`Command registered: ${t.id}`)}hasCommand(t){return t in this.commands}listCommands(t){return t?Object.values(this.commands).filter(n=>(qe.getHandler(n.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(t))).reduce((n,r)=>(n[r.id]=r,n),{}):this.commands}getCommand(t){return this.commands[t]}registerAll(t){const n=t.command.id;this.registerCommand(t.command),t.handler&&this.registerHandler(n,t.handler),t.contribution&&t.contribution.target&&Ct.registerContribution(t.contribution.target,{command:n,...t.contribution})}}const qe=new fh;fn.put("commandRegistry",qe);const Pt=e=>{qe.registerAll(e)};class mh{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const t=qe.listCommands();Object.values(t).forEach(n=>{n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)})}watchCommandRegistry(){const t=qe.registerCommand.bind(qe);qe.registerCommand=n=>{t(n),n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)}}parseKeyBinding(t){if(!t||t.trim()==="")return null;const n=t.toUpperCase().split("+").map(a=>a.trim());if(n.length===0)return null;const r={ctrl:!1,alt:!1,shift:!1,meta:!1},i=n[n.length-1],o=n.slice(0,-1);for(const a of o)switch(a){case"CTRL":case"CONTROL":r.ctrl=!0;break;case"ALT":case"OPTION":r.alt=!0;break;case"SHIFT":r.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":r.meta=!0;break;default:Ft.warn(`Unknown modifier: ${a}`)}return r.key=this.normalizeKey(i),r}normalizeKey(t){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[t]||t}getBindingKey(t){const n=[];return t.ctrl&&n.push("ctrl"),t.alt&&n.push("alt"),t.shift&&n.push("shift"),t.meta&&n.push("meta"),n.sort(),`${n.join("+")}+${t.key.toUpperCase()}`}registerKeyBinding(t,n){const r=this.parseKeyBinding(n);if(!r)return Ft.error(`Invalid key binding: ${n}`),!1;r.commandId=t;const i=this.getBindingKey(r);this.bindings.has(i)||this.bindings.set(i,[]);const o=this.bindings.get(i);return o.find(c=>c.commandId===t)?(Ft.error(`Key binding ${n} already registered for command ${t}`),!1):(o.push(r),Ft.debug(`Key binding registered: ${n} -> ${t}`),!0)}unregisterKeyBinding(t,n){if(n){const r=this.parseKeyBinding(n);if(r){const i=this.getBindingKey(r),o=this.bindings.get(i);if(o){const a=o.filter(c=>c.commandId!==t);a.length===0?this.bindings.delete(i):this.bindings.set(i,a)}}}else for(const[r,i]of this.bindings.entries()){const o=i.filter(a=>a.commandId!==t);o.length===0?this.bindings.delete(r):this.bindings.set(r,o)}}getKeyBindingsForCommand(t){const n=[];for(const r of this.bindings.values())for(const i of r)i.commandId===t&&n.push(this.formatKeyBinding(i));return n}formatKeyBinding(t){const n=[];t.ctrl&&n.push("Ctrl"),t.alt&&n.push("Alt"),t.shift&&n.push("Shift"),t.meta&&n.push("Cmd");let r=t.key;return r.length===1?r=r.toUpperCase():r=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase(),n.push(r),n.join("+")}handleKeyDown(t){if(!this.enabled)return;const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)){const a=t.key.toUpperCase();if(!((t.ctrlKey||t.metaKey)&&t.shiftKey&&a==="P"))return}const r={commandId:"",key:this.normalizeKey(t.key.toUpperCase()),ctrl:t.ctrlKey,alt:t.altKey,shift:t.shiftKey,meta:t.metaKey},i=this.getBindingKey(r),o=this.bindings.get(i);if(o&&o.length>0){const a=o[0];try{t.preventDefault(),t.stopPropagation();const c=qe.createExecutionContext(this,{});qe.execute(a.commandId,c),Ft.info(`Executed command via key binding: ${a.commandId}`)}catch(c){Ft.error(`Failed to execute command ${a.commandId}: ${c.message}`)}}}setEnabled(t){this.enabled=t}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}Ft.debug("KeyBindingManager initializing...");const Wc=new mh;Ft.debug("KeyBindingManager initialized");fn.put("keyBindingManager",Wc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let As=class extends ta{constructor(t){if(super(t),this.it=zt,t.type!==cr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===zt||t==null)return this._t=void 0,this.it=t;if(t===qr)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};As.directiveName="unsafeHTML",As.resultType=1;const pr=ea(As);function el(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var xi=el();function Hc(e){xi=e}var Aa={exec:()=>null};function rt(e,t=""){let n=typeof e=="string"?e:e.source,r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(dn.caret,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,t)};return r}var dn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},gh=/^(?:[ \t]*(?:\n|$))+/,bh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,vh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ma=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,yh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,tl=/(?:[*+-]|\d{1,9}[.)])/,Gc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Kc=rt(Gc).replace(/bull/g,tl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),wh=rt(Gc).replace(/bull/g,tl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),nl=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,xh=/^[^\n]+/,rl=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,kh=rt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",rl).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ih=rt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,tl).getRegex(),Fo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",il=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ch=rt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",il).replace("tag",Fo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Yc=rt(nl).replace("hr",Ma).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fo).getRegex(),Sh=rt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Yc).getRegex(),al={blockquote:Sh,code:bh,def:kh,fences:vh,heading:yh,hr:Ma,html:Ch,lheading:Kc,list:Ih,newline:gh,paragraph:Yc,table:Aa,text:xh},jl=rt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ma).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fo).getRegex(),Eh={...al,lheading:wh,table:jl,paragraph:rt(nl).replace("hr",Ma).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",jl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fo).getRegex()},Ah={...al,html:rt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",il).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Aa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:rt(nl).replace("hr",Ma).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Kc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},$h=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,_h=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Xc=/^( {2,}|\\)\n(?!\s*$)/,Oh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,qo=/[\p{P}\p{S}]/u,ol=/[\s\p{P}\p{S}]/u,Zc=/[^\s\p{P}\p{S}]/u,Th=rt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ol).getRegex(),Jc=/(?!~)[\p{P}\p{S}]/u,Lh=/(?!~)[\s\p{P}\p{S}]/u,Dh=/(?:[^\s\p{P}\p{S}]|~)/u,Ph=rt(/link|code|html/,"g").replace("link",new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code",new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html",/<(?! )[^<>]*?>/).getRegex(),Qc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Rh=rt(Qc,"u").replace(/punct/g,qo).getRegex(),zh=rt(Qc,"u").replace(/punct/g,Jc).getRegex(),eu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Mh=rt(eu,"gu").replace(/notPunctSpace/g,Zc).replace(/punctSpace/g,ol).replace(/punct/g,qo).getRegex(),Nh=rt(eu,"gu").replace(/notPunctSpace/g,Dh).replace(/punctSpace/g,Lh).replace(/punct/g,Jc).getRegex(),Fh=rt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Zc).replace(/punctSpace/g,ol).replace(/punct/g,qo).getRegex(),qh=rt(/\\(punct)/,"gu").replace(/punct/g,qo).getRegex(),Vh=rt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Bh=rt(il).replace("(?:-->|$)","-->").getRegex(),Uh=rt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Bh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),yo=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,jh=rt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",yo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),tu=rt(/^!?\[(label)\]\[(ref)\]/).replace("label",yo).replace("ref",rl).getRegex(),nu=rt(/^!?\[(ref)\](?:\[\])?/).replace("ref",rl).getRegex(),Wh=rt("reflink|nolink(?!\\()","g").replace("reflink",tu).replace("nolink",nu).getRegex(),Wl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,sl={_backpedal:Aa,anyPunctuation:qh,autolink:Vh,blockSkip:Ph,br:Xc,code:_h,del:Aa,emStrongLDelim:Rh,emStrongRDelimAst:Mh,emStrongRDelimUnd:Fh,escape:$h,link:jh,nolink:nu,punctuation:Th,reflink:tu,reflinkSearch:Wh,tag:Uh,text:Oh,url:Aa},Hh={...sl,link:rt(/^!?\[(label)\]\((.*?)\)/).replace("label",yo).getRegex(),reflink:rt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",yo).getRegex()},$s={...sl,emStrongRDelimAst:Nh,emStrongLDelim:zh,url:rt(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Wl).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:rt(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Wl).getRegex()},Gh={...$s,br:rt(Xc).replace("{2,}","*").getRegex(),text:rt($s.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xa={normal:al,gfm:Eh,pedantic:Ah},fa={normal:sl,gfm:$s,breaks:Gh,pedantic:Hh},Kh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hl=e=>Kh[e];function lr(e,t){if(t){if(dn.escapeTest.test(e))return e.replace(dn.escapeReplace,Hl)}else if(dn.escapeTestNoEncode.test(e))return e.replace(dn.escapeReplaceNoEncode,Hl);return e}function Gl(e){try{e=encodeURI(e).replace(dn.percentDecode,"%")}catch{return null}return e}function Kl(e,t){let n=e.replace(dn.findPipe,(o,a,c)=>{let f=!1,b=a;for(;--b>=0&&c[b]==="\\";)f=!f;return f?"|":" |"}),r=n.split(dn.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(dn.slashPipe,"|");return r}function ma(e,t,n){let r=e.length;if(r===0)return"";let i=0;for(;i<r&&e.charAt(r-i-1)===t;)i++;return e.slice(0,r-i)}function Yh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Yl(e,t,n,r,i){let o=t.href,a=t.title||null,c=e[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;let f={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:a,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,f}function Xh(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(o=>{let a=o.match(n.other.beginningSpace);if(a===null)return o;let[c]=a;return c.length>=i.length?o.slice(i.length):o}).join(`
`)}var wo=class{options;rules;lexer;constructor(e){this.options=e||xi}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ma(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],r=Xh(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let r=ma(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:ma(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=ma(t[0],`
`).split(`
`),r="",i="",o=[];for(;n.length>0;){let a=!1,c=[],f;for(f=0;f<n.length;f++)if(this.rules.other.blockquoteStart.test(n[f]))c.push(n[f]),a=!0;else if(!a)c.push(n[f]);else break;n=n.slice(f);let b=c.join(`
`),C=b.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${b}`:b,i=i?`${i}
${C}`:C;let x=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(C,o,!0),this.lexer.state.top=x,n.length===0)break;let v=o.at(-1);if(v?.type==="code")break;if(v?.type==="blockquote"){let I=v,R=I.raw+`
`+n.join(`
`),P=this.blockquote(R);o[o.length-1]=P,r=r.substring(0,r.length-I.raw.length)+P.raw,i=i.substring(0,i.length-I.text.length)+P.text;break}else if(v?.type==="list"){let I=v,R=I.raw+`
`+n.join(`
`),P=this.list(R);o[o.length-1]=P,r=r.substring(0,r.length-v.raw.length)+P.raw,i=i.substring(0,i.length-I.raw.length)+P.raw,n=R.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:o,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let o=this.rules.other.listItemRegex(n),a=!1;for(;e;){let f=!1,b="",C="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;b=t[0],e=e.substring(b.length);let x=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,K=>" ".repeat(3*K.length)),v=e.split(`
`,1)[0],I=!x.trim(),R=0;if(this.options.pedantic?(R=2,C=x.trimStart()):I?R=t[1].length+1:(R=t[2].search(this.rules.other.nonSpaceChar),R=R>4?1:R,C=x.slice(R),R+=t[1].length),I&&this.rules.other.blankLine.test(v)&&(b+=v+`
`,e=e.substring(v.length+1),f=!0),!f){let K=this.rules.other.nextBulletRegex(R),M=this.rules.other.hrRegex(R),z=this.rules.other.fencesBeginRegex(R),H=this.rules.other.headingBeginRegex(R),F=this.rules.other.htmlBeginRegex(R);for(;e;){let D=e.split(`
`,1)[0],G;if(v=D,this.options.pedantic?(v=v.replace(this.rules.other.listReplaceNesting,"  "),G=v):G=v.replace(this.rules.other.tabCharGlobal,"    "),z.test(v)||H.test(v)||F.test(v)||K.test(v)||M.test(v))break;if(G.search(this.rules.other.nonSpaceChar)>=R||!v.trim())C+=`
`+G.slice(R);else{if(I||x.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||z.test(x)||H.test(x)||M.test(x))break;C+=`
`+v}!I&&!v.trim()&&(I=!0),b+=D+`
`,e=e.substring(D.length+1),x=G.slice(R)}}i.loose||(a?i.loose=!0:this.rules.other.doubleBlankLine.test(b)&&(a=!0));let P=null,V;this.options.gfm&&(P=this.rules.other.listIsTask.exec(C),P&&(V=P[0]!=="[ ] ",C=C.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:b,task:!!P,checked:V,loose:!1,text:C,tokens:[]}),i.raw+=b}let c=i.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let f=0;f<i.items.length;f++)if(this.lexer.state.top=!1,i.items[f].tokens=this.lexer.blockTokens(i.items[f].text,[]),!i.loose){let b=i.items[f].tokens.filter(x=>x.type==="space"),C=b.length>0&&b.some(x=>this.rules.other.anyLine.test(x.raw));i.loose=C}if(i.loose)for(let f=0;f<i.items.length;f++)i.items[f].loose=!0;return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:i}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Kl(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<n.length;a++)o.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:o.align[a]});for(let a of i)o.rows.push(Kl(a,o.header.length).map((c,f)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[f]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=ma(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Yh(t[2],"()");if(o===-2)return;if(o>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let r=t[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Yl(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[r.toLowerCase()];if(!i){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Yl(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,o,a,c=i,f=0,b=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(b.lastIndex=0,t=t.slice(-1*e.length+i);(r=b.exec(t))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(a=[...o].length,r[3]||r[4]){c+=a;continue}else if((r[5]||r[6])&&i%3&&!((i+a)%3)){f+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+f);let C=[...r[0]][0].length,x=e.slice(0,i+r.index+C+a);if(Math.min(i,a)%2){let I=x.slice(1,-1);return{type:"em",raw:x,text:I,tokens:this.lexer.inlineTokens(I)}}let v=x.slice(2,-2);return{type:"strong",raw:x,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,r;if(t[2]==="@")n=t[0],r="mailto:"+n;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);n=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Yn=class _s{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||xi,this.options.tokenizer=this.options.tokenizer||new wo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:dn,block:Xa.normal,inline:fa.normal};this.options.pedantic?(n.block=Xa.pedantic,n.inline=fa.pedantic):this.options.gfm&&(n.block=Xa.gfm,this.options.breaks?n.inline=fa.breaks:n.inline=fa.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xa,inline:fa}}static lex(t,n){return new _s(n).lex(t)}static lexInline(t,n){return new _s(n).inlineTokens(t)}lex(t){t=t.replace(dn.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){for(this.options.pedantic&&(t=t.replace(dn.tabCharGlobal,"    ").replace(dn.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},t,n))?(t=t.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let a=n.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),n.push(i);continue}let o=t;if(this.options.extensions?.startBlock){let a=1/0,c=t.slice(1),f;this.options.extensions.startBlock.forEach(b=>{f=b.call({lexer:this},c),typeof f=="number"&&f>=0&&(a=Math.min(a,f))}),a<1/0&&a>=0&&(o=t.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(o))){let a=n.at(-1);r&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i),r=o.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let a=n.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(t){let a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let r=t,i=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,a="";for(;t;){o||(a=""),o=!1;let c;if(this.options.extensions?.inline?.some(b=>(c=b.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.escape(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.tag(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.link(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(c.raw.length);let b=n.at(-1);c.type==="text"&&b?.type==="text"?(b.raw+=c.raw,b.text+=c.text):n.push(c);continue}if(c=this.tokenizer.emStrong(t,r,a)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.codespan(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.br(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.del(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.autolink(t)){t=t.substring(c.raw.length),n.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(t))){t=t.substring(c.raw.length),n.push(c);continue}let f=t;if(this.options.extensions?.startInline){let b=1/0,C=t.slice(1),x;this.options.extensions.startInline.forEach(v=>{x=v.call({lexer:this},C),typeof x=="number"&&x>=0&&(b=Math.min(b,x))}),b<1/0&&b>=0&&(f=t.substring(0,b+1))}if(c=this.tokenizer.inlineText(f)){t=t.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(a=c.raw.slice(-1)),o=!0;let b=n.at(-1);b?.type==="text"?(b.raw+=c.raw,b.text+=c.text):n.push(c);continue}if(t){let b="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return n}},xo=class{options;parser;constructor(e){this.options=e||xi}space(e){return""}code({text:e,lang:t,escaped:n}){let r=(t||"").match(dn.notSpaceStart)?.[0],i=e.replace(dn.endingNewline,"")+`
`;return r?'<pre><code class="language-'+lr(r)+'">'+(n?i:lr(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:lr(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r="";for(let a=0;a<e.items.length;a++){let c=e.items[a];r+=this.listitem(c)}let i=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+i+o+`>
`+r+"</"+i+`>
`}listitem(e){let t="";if(e.task){let n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+lr(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let r="";for(let i=0;i<e.rows.length;i++){let o=e.rows[i];n="";for(let a=0;a<o.length;a++)n+=this.tablecell(o[a]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${lr(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Gl(e);if(i===null)return r;e=i;let o='<a href="'+e+'"';return t&&(o+=' title="'+lr(t)+'"'),o+=">"+r+"</a>",o}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Gl(e);if(i===null)return lr(n);e=i;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${lr(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:lr(e.text)}},ll=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},Xn=class Os{options;renderer;textRenderer;constructor(t){this.options=t||xi,this.options.renderer=this.options.renderer||new xo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ll}static parse(t,n){return new Os(n).parse(t)}static parseInline(t,n){return new Os(n).parseInline(t)}parse(t,n=!0){let r="";for(let i=0;i<t.length;i++){let o=t[i];if(this.options.extensions?.renderers?.[o.type]){let c=o,f=this.options.extensions.renderers[c.type].call({parser:this},c);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(c.type)){r+=f||"";continue}}let a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"def":{r+=this.renderer.def(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,f=this.renderer.text(c);for(;i+1<t.length&&t[i+1].type==="text";)c=t[++i],f+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):r+=f;continue}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(t,n=this.renderer){let r="";for(let i=0;i<t.length;i++){let o=t[i];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}let a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},Ia=class{options;block;constructor(e){this.options=e||xi}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Yn.lex:Yn.lexInline}provideParser(){return this.block?Xn.parse:Xn.parseInline}},Zh=class{defaults=el();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Xn;Renderer=xo;TextRenderer=ll;Lexer=Yn;Tokenizer=wo;Hooks=Ia;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{let i=r;for(let o of i.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of i.rows)for(let a of o)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{let i=r;n=n.concat(this.walkTokens(i.items,t));break}default:{let i=r;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let a=i[o].flat(1/0);n=n.concat(this.walkTokens(a,t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=t.renderers[i.name];o?t.renderers[i.name]=function(...a){let c=i.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),r.extensions=t),n.renderer){let i=this.defaults.renderer||new xo(this.defaults);for(let o in n.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,c=n.renderer[a],f=i[a];i[a]=(...b)=>{let C=c.apply(i,b);return C===!1&&(C=f.apply(i,b)),C||""}}r.renderer=i}if(n.tokenizer){let i=this.defaults.tokenizer||new wo(this.defaults);for(let o in n.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,c=n.tokenizer[a],f=i[a];i[a]=(...b)=>{let C=c.apply(i,b);return C===!1&&(C=f.apply(i,b)),C}}r.tokenizer=i}if(n.hooks){let i=this.defaults.hooks||new Ia;for(let o in n.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,c=n.hooks[a],f=i[a];Ia.passThroughHooks.has(o)?i[a]=b=>{if(this.defaults.async&&Ia.passThroughHooksRespectAsync.has(o))return(async()=>{let x=await c.call(i,b);return f.call(i,x)})();let C=c.call(i,b);return f.call(i,C)}:i[a]=(...b)=>{if(this.defaults.async)return(async()=>{let x=await c.apply(i,b);return x===!1&&(x=await f.apply(i,b)),x})();let C=c.apply(i,b);return C===!1&&(C=f.apply(i,b)),C}}r.hooks=i}if(n.walkTokens){let i=this.defaults.walkTokens,o=n.walkTokens;r.walkTokens=function(a){let c=[];return c.push(o.call(this,a)),i&&(c=c.concat(i.call(this,a))),c}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Yn.lex(e,t??this.defaults)}parser(e,t){return Xn.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(t):t,c=await(i.hooks?await i.hooks.provideLexer():e?Yn.lex:Yn.lexInline)(a,i),f=i.hooks?await i.hooks.processAllTokens(c):c;i.walkTokens&&await Promise.all(this.walkTokens(f,i.walkTokens));let b=await(i.hooks?await i.hooks.provideParser():e?Xn.parse:Xn.parseInline)(f,i);return i.hooks?await i.hooks.postprocess(b):b})().catch(o);try{i.hooks&&(t=i.hooks.preprocess(t));let a=(i.hooks?i.hooks.provideLexer():e?Yn.lex:Yn.lexInline)(t,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let c=(i.hooks?i.hooks.provideParser():e?Xn.parse:Xn.parseInline)(a,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(a){return o(a)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+lr(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},fi=new Zh;function at(e,t){return fi.parse(e,t)}at.options=at.setOptions=function(e){return fi.setOptions(e),at.defaults=fi.defaults,Hc(at.defaults),at};at.getDefaults=el;at.defaults=xi;at.use=function(...e){return fi.use(...e),at.defaults=fi.defaults,Hc(at.defaults),at};at.walkTokens=function(e,t){return fi.walkTokens(e,t)};at.parseInline=fi.parseInline;at.Parser=Xn;at.parser=Xn.parse;at.Renderer=xo;at.TextRenderer=ll;at.Lexer=Yn;at.lexer=Yn.lex;at.Tokenizer=wo;at.Hooks=Ia;at.parse=at;at.options;at.setOptions;at.use;at.walkTokens;at.parseInline;Xn.parse;Yn.lex;let ga=null;function cl(){return ga||(ga=document.createElement("div"),ga.id="global-dialog-container",document.body.appendChild(ga)),ga}function ul(e){return new Promise(t=>{const n=cl(),r=()=>{Br(A``,n)},i=()=>{r(),t(e.confirmValue)},o=()=>{r(),t(e.cancelValue)},a=A`
            <wa-dialog label="${e.title}" open @wa-request-close=${o}>
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
                    ${e.renderContent({onConfirm:i,onCancel:o})}
                </div>
            </wa-dialog>
        `;Br(a,n),e.onAfterRender&&requestAnimationFrame(e.onAfterRender)})}function Vo(e,t=!1){if(t){const n=at.parse(e,{async:!1});return A`<div class="dialog-message markdown-content" style="white-space: normal;">${pr(n)}</div>`}return A`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}const Na=async(e,t="",n=!1)=>{let r=t;return ul({title:"Input",message:e,markdown:n,confirmValue:r,cancelValue:null,renderContent:({onConfirm:i,onCancel:o})=>{const a=f=>{r=f.target.value},c=f=>{f.key==="Enter"?(f.preventDefault(),i()):f.key==="Escape"&&(f.preventDefault(),o())};return A`
                ${Vo(e,n)}
                <wa-input
                    value="${t}"
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
            `},onAfterRender:()=>{const o=cl().querySelector("wa-input");if(o){const a=o.shadowRoot?.querySelector("input");a&&(a.focus(),a.select())}}}).then(()=>r)},na=async(e,t=!1)=>ul({title:"Confirm",message:e,markdown:t,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:n,onCancel:r})=>A`
            ${Vo(e,t)}
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${r}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${n}>
                    OK
                </wa-button>
            </div>
        `}),Jh=async(e,t,n=!1)=>{await ul({title:e,message:t,markdown:n,confirmValue:void 0,cancelValue:void 0,renderContent:({onConfirm:r})=>A`
            ${Vo(t,n)}
            
            <div class="dialog-actions">
                <wa-button variant="primary" @click=${r}>
                    OK
                </wa-button>
            </div>
        `})},Qh=async(e,t,n,r=!1)=>new Promise(i=>{const o=cl();let a=!0;const c=()=>{a&&(a=!1,Br(A``,o),i())},f=(b,C,x)=>{if(!a)return;const v=A`
                <wa-dialog label="${b}" open @wa-request-close=${c}>
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
                            ${Vo(C,r)}
                        </wa-scroller>
                        
                        <div class="dialog-actions">
                            <div class="dialog-actions-left">
                                ${x.filter(I=>I.label!=="Close").map(I=>A`
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
                                ${x.filter(I=>I.label==="Close").map(I=>A`
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
            `;Br(v,o)};n.updateDialog=f,f(e,t,n)});rr.put("promptDialog",Na);rr.put("confirmDialog",na);rr.put("infoDialog",Jh);rr.put("navigableInfoDialog",Qh);const Ts=new Set,Di=new Map;let ci,dl="ltr",hl="en";const ru=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ru){const e=new MutationObserver(au);dl=document.documentElement.dir||"ltr",hl=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function iu(...e){e.map(t=>{const n=t.$code.toLowerCase();Di.has(n)?Di.set(n,Object.assign(Object.assign({},Di.get(n)),t)):Di.set(n,t),ci||(ci=t)}),au()}function au(){ru&&(dl=document.documentElement.dir||"ltr",hl=document.documentElement.lang||navigator.language),[...Ts.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let ep=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ts.add(this.host)}hostDisconnected(){Ts.delete(this.host)}dir(){return`${this.host.dir||dl}`.toLowerCase()}lang(){return`${this.host.lang||hl}`.toLowerCase()}getTranslationData(t){var n,r;const i=new Intl.Locale(t.replace(/_/g,"-")),o=i?.language.toLowerCase(),a=(r=(n=i?.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&r!==void 0?r:"",c=Di.get(`${o}-${a}`),f=Di.get(o);return{locale:i,language:o,region:a,primary:c,secondary:f}}exists(t,n){var r;const{primary:i,secondary:o}=this.getTranslationData((r=n.lang)!==null&&r!==void 0?r:this.lang());return n=Object.assign({includeFallback:!1},n),!!(i&&i[t]||o&&o[t]||n.includeFallback&&ci&&ci[t])}term(t,...n){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let o;if(r&&r[t])o=r[t];else if(i&&i[t])o=i[t];else if(ci&&ci[t])o=ci[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...n):o}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,n)}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ou={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};iu(ou);var tp=ou;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ot=class extends ep{};iu(tp);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var pl=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Ls="",Ds="";function Xl(e){Ls=e}function np(e=""){if(!Ls){const t=document.querySelector("[data-webawesome]");if(t?.hasAttribute("data-webawesome")){const n=new URL(t.getAttribute("data-webawesome")??"",window.location.href).pathname;Xl(n)}else{const r=[...document.getElementsByTagName("script")].find(i=>i.src.endsWith("webawesome.js")||i.src.endsWith("webawesome.loader.js")||i.src.endsWith("webawesome.ssr-loader.js"));if(r){const i=String(r.getAttribute("src"));Xl(i.split("/").slice(0,-1).join("/"))}}}return Ls.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}function rp(e){Ds=e}function ip(){if(!Ds){const e=document.querySelector("[data-fa-kit-code]");e&&rp(e.getAttribute("data-fa-kit-code")||"")}return Ds}var Ar="7.0.1";function ap(e,t,n){const r=ip(),i=r.length>0;let o="solid";return t==="notdog"?(n==="solid"&&(o="solid"),n==="duo-solid"&&(o="duo-solid"),`https://ka-p.fontawesome.com/releases/v${Ar}/svgs/notdog-${o}/${e}.svg?token=${encodeURIComponent(r)}`):t==="chisel"?`https://ka-p.fontawesome.com/releases/v${Ar}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t==="etch"?`https://ka-p.fontawesome.com/releases/v${Ar}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t==="jelly"?(n==="regular"&&(o="regular"),n==="duo-regular"&&(o="duo-regular"),n==="fill-regular"&&(o="fill-regular"),`https://ka-p.fontawesome.com/releases/v${Ar}/svgs/jelly-${o}/${e}.svg?token=${encodeURIComponent(r)}`):t==="slab"?((n==="solid"||n==="regular")&&(o="regular"),n==="press-regular"&&(o="press-regular"),`https://ka-p.fontawesome.com/releases/v${Ar}/svgs/slab-${o}/${e}.svg?token=${encodeURIComponent(r)}`):t==="thumbprint"?`https://ka-p.fontawesome.com/releases/v${Ar}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t==="whiteboard"?`https://ka-p.fontawesome.com/releases/v${Ar}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t==="classic"&&(n==="thin"&&(o="thin"),n==="light"&&(o="light"),n==="regular"&&(o="regular"),n==="solid"&&(o="solid")),t==="sharp"&&(n==="thin"&&(o="sharp-thin"),n==="light"&&(o="sharp-light"),n==="regular"&&(o="sharp-regular"),n==="solid"&&(o="sharp-solid")),t==="duotone"&&(n==="thin"&&(o="duotone-thin"),n==="light"&&(o="duotone-light"),n==="regular"&&(o="duotone-regular"),n==="solid"&&(o="duotone")),t==="sharp-duotone"&&(n==="thin"&&(o="sharp-duotone-thin"),n==="light"&&(o="sharp-duotone-light"),n==="regular"&&(o="sharp-duotone-regular"),n==="solid"&&(o="sharp-duotone-solid")),t==="brands"&&(o="brands"),i?`https://ka-p.fontawesome.com/releases/v${Ar}/svgs/${o}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${Ar}/svgs/${o}/${e}.svg`)}var op={name:"default",resolver:(e,t="classic",n="solid")=>ap(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute("data-duotone-initialized")){const{family:n,variant:r}=t;if(n==="duotone"||n==="sharp-duotone"||n==="notdog"&&r==="duo-solid"||n==="jelly"&&r==="duo-regular"||n==="thumbprint"){const i=[...e.querySelectorAll("path")],o=i.find(c=>!c.hasAttribute("opacity")),a=i.find(c=>c.hasAttribute("opacity"));if(!o||!a)return;if(o.setAttribute("data-duotone-primary",""),a.setAttribute("data-duotone-secondary",""),t.swapOpacity&&o&&a){const c=a.getAttribute("opacity")||"0.4";o.style.setProperty("--path-opacity",c),a.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},sp=op;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function lp(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var os={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},cp={name:"system",resolver:(e,t="classic",n="solid")=>{let i=os[n][e]??os.regular[e]??os.regular["circle-question"];return i?lp(i):""}},up=cp;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var dp="classic",ko=[sp,up],Io=[];function hp(e){Io.push(e)}function pp(e){Io=Io.filter(t=>t!==e)}function ss(e){return ko.find(t=>t.name===e)}function su(e,t){fp(e),ko.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),Io.forEach(n=>{n.library===e&&n.setIcon()})}function fp(e){ko=ko.filter(t=>t.name!==e)}function mp(){return dp}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function ye(e,t){const n={waitUntilFirstUpdate:!1,...t};return(r,i)=>{const{update:o}=r,a=Array.isArray(e)?e:[e];r.update=function(c){a.forEach(f=>{const b=f;if(c.has(b)){const C=c.get(b),x=this[b];C!==x&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[i](C,x)}}),o.call(this,c)}}}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var gp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,lu=e=>{throw TypeError(e)},l=(e,t,n,r)=>{for(var i=r>1?void 0:r?bp(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&gp(t,n,i),i},cu=(e,t,n)=>t.has(e)||lu("Cannot "+n),vp=(e,t,n)=>(cu(e,t,"read from private field"),t.get(e)),yp=(e,t,n)=>t.has(e)?lu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),wp=(e,t,n,r)=>(cu(e,t,"write to private field"),t.set(e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=e=>(t,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xp={attribute:!0,type:String,converter:md,reflect:!1,hasChanged:fd},kp=(e=xp,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(c){const f=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,f,e)},init(c){return c!==void 0&&this.C(a,void 0,e,c),c}}}if(r==="setter"){const{name:a}=n;return function(c){const f=this[a];t.call(this,c),this.requestUpdate(a,f,e)}}throw Error("Unsupported decorator location: "+r)};function p(e){return(t,n)=>typeof n=="object"?kp(e,t,n):((r,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),a?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bo(e){return(t,n)=>{const r=typeof t=="function"?t:t[n];Object.assign(r,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uu=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e,t){return(n,r,i)=>{const o=a=>a.renderRoot?.querySelector(e)??null;return uu(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ip(e){return(t,n)=>uu(t,n,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Cp=`:host {
  box-sizing: border-box !important;
}

:host *,
:host *::before,
:host *::after {
  box-sizing: inherit !important;
}

[hidden] {
  display: none !important;
}
`,po,De=class extends Ks{constructor(){super(),yp(this,po,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,n)=>{if(this.internals?.states)try{n?this.internals.states.add(t):this.internals.states.delete(t)}catch(r){if(String(r).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw r}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default==="inherit"&&n.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){const e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Cp,...e].map(t=>typeof t=="string"?Rc(t):t)}attributeChangedCallback(e,t,n){vp(this,po)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),wp(this,po,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){const n=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});n.error=t,this.dispatchEvent(n)}throw t}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};po=new WeakMap;l([p()],De.prototype,"dir",2);l([p()],De.prototype,"lang",2);l([p({type:Boolean,reflect:!0,attribute:"did-ssr"})],De.prototype,"didSSR",2);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Ri=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},Sp=`:host {
  --primary-color: currentColor;
  --primary-opacity: 1;
  --secondary-color: currentColor;
  --secondary-opacity: 0.4;

  box-sizing: content-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: -0.125em;
}

/* Standard */
:host(:not([auto-width])) {
  width: 1.25em;
  height: 1em;
}

/* Auto-width */
:host([auto-width]) {
  width: auto;
  height: 1em;
}

svg {
  height: 1em;
  fill: currentColor;
  overflow: visible;

  /* Duotone colors with path-specific opacity fallback */
  path[data-duotone-primary] {
    color: var(--primary-color);
    opacity: var(--path-opacity, var(--primary-opacity));
  }

  path[data-duotone-secondary] {
    color: var(--secondary-color);
    opacity: var(--path-opacity, var(--secondary-opacity));
  }
}
`,ba=Symbol(),Za=Symbol(),ls,cs=new Map,xn=class extends De{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=A`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(r,this),this.svg}try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?ba:Za}catch{return Za}try{const r=document.createElement("div");r.innerHTML=await n.text();const i=r.firstElementChild;if(i?.tagName?.toLowerCase()!=="svg")return ba;ls||(ls=new DOMParser);const a=ls.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ba}catch{return ba}}}connectedCallback(){super.connectedCallback(),hp(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),pp(this)}getIconSource(){const e=ss(this.library),t=this.family||mp();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:e,fromLibrary:t}=this.getIconSource(),n=t?ss(this.library):void 0;if(!e){this.svg=null;return}let r=cs.get(e);r||(r=this.resolveIcon(e,n),cs.set(e,r));const i=await r;if(i===Za&&cs.delete(e),e===this.getIconSource().url){if(gd(i)){this.svg=i;return}switch(i){case Za:case ba:this.svg=null,this.dispatchEvent(new Ri);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new pl)}}}updated(e){super.updated(e);const t=ss(this.library),n=this.shadowRoot?.querySelector("svg");n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:A`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};xn.css=Sp;l([ge()],xn.prototype,"svg",2);l([p({reflect:!0})],xn.prototype,"name",2);l([p({reflect:!0})],xn.prototype,"family",2);l([p({reflect:!0})],xn.prototype,"variant",2);l([p({attribute:"auto-width",type:Boolean,reflect:!0})],xn.prototype,"autoWidth",2);l([p({attribute:"swap-opacity",type:Boolean,reflect:!0})],xn.prototype,"swapOpacity",2);l([p()],xn.prototype,"src",2);l([p()],xn.prototype,"label",2);l([p({reflect:!0})],xn.prototype,"library",2);l([ye("label")],xn.prototype,"handleLabelChange",1);l([ye(["family","name","library","variant","src","autoWidth","swapOpacity"])],xn.prototype,"setIcon",1);xn=l([fe("wa-icon")],xn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Ep=`:host {
  --control-box-size: 3rem;
  --icon-size: calc(var(--control-box-size) * 0.625);

  display: inline-flex;
  position: relative;
  cursor: pointer;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}

img[aria-hidden='true'] {
  display: none;
}

.control-box {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: calc(50% - var(--control-box-size) / 2);
  right: calc(50% - var(--control-box-size) / 2);
  width: var(--control-box-size);
  height: var(--control-box-size);
  font-size: calc(var(--icon-size) * 0.75);
  background: none;
  border: solid var(--wa-border-width-s) currentColor;
  background-color: rgb(0 0 0 / 50%);
  border-radius: var(--wa-border-radius-circle);
  color: white;
  pointer-events: none;
  transition: opacity var(--wa-transition-normal) var(--wa-transition-easing);
}

@media (hover: hover) {
  :host([play]:hover) .control-box {
    opacity: 1;
  }
}

:where(:host([play]:not(:hover))) .control-box {
  opacity: 0;
}

:host([play]) slot[name='play-icon'],
:host(:not([play])) slot[name='pause-icon'] {
  display: none;
}

/* Show control box on keyboard focus */
.animated-image {
  &:focus {
    outline: none;
  }

  &:focus-visible .control-box {
    opacity: 1;
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}
`,Zn=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.play=!this.play)}handleLoad(){const e=document.createElement("canvas"),{width:t,height:n}=this.animatedImage;e.width=t,e.height=n,e.getContext("2d").drawImage(this.animatedImage,0,0,t,n),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new pl),this.isLoaded=!0)}handleError(){this.dispatchEvent(new Ri)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const t=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return A`
      <div
        class="animated-image"
        tabindex="0"
        role="button"
        aria-pressed=${this.play?"true":"false"}
        aria-label=${t}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <img
          class="animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          role="presentation"
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?A`
              <img
                class="frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                role="presentation"
              />

              <div part="control-box" class="control-box" aria-hidden="true">
                <slot name="play-icon">
                  <wa-icon
                    name="play"
                    library="system"
                    variant="solid"
                    class="default"
                    style="margin-inline-start: 3px;"
                  ></wa-icon>
                </slot>
                <slot name="pause-icon">
                  <wa-icon name="pause" library="system" variant="solid" class="default"></wa-icon>
                </slot>
              </div>
            `:""}
      </div>
    `}};Zn.css=Ep;l([he(".animated")],Zn.prototype,"animatedImage",2);l([ge()],Zn.prototype,"frozenFrame",2);l([ge()],Zn.prototype,"isLoaded",2);l([p()],Zn.prototype,"src",2);l([p()],Zn.prototype,"alt",2);l([p({type:Boolean,reflect:!0})],Zn.prototype,"play",2);l([ye("play",{waitUntilFirstUpdate:!0})],Zn.prototype,"handlePlayChange",1);l([ye("src")],Zn.prototype,"handleSrcChange",1);Zn=l([fe("wa-animated-image")],Zn);const Ap=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],$p=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],_p=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Op=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Tp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Lp=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Dp=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Pp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Mp=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Np=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Fp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qp=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Vp=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Bp=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Up=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],jp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Wp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Hp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Gp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Kp=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Yp=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Xp=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Zp=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Jp=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Qp=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],ef=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],tf=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],nf=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],rf=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],af=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],of=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sf=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lf=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cf=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],uf=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],df=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hf=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pf=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ff=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mf=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gf=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bf=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vf=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],yf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],wf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],xf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],kf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],If=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Cf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Sf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Ef=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Af=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],$f=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],_f=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Of=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Tf=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Lf=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Df=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Pf=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Rf=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],zf=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Mf=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nf=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Ff=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],qf=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Vf=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Bf=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Uf=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],jf=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Wf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Hf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Gf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Kf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Yf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Xf=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Zf=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Jf=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Qf=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],em=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],tm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],nm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],rm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],im=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],am=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],om=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sm=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],lm=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],cm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],um=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],dm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],hm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],pm=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],fm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],mm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],gm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],bm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],du={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},vm=Object.freeze(Object.defineProperty({__proto__:null,backInDown:qp,backInLeft:Vp,backInRight:Bp,backInUp:Up,backOutDown:jp,backOutLeft:Wp,backOutRight:Hp,backOutUp:Gp,bounce:Ap,bounceIn:Kp,bounceInDown:Yp,bounceInLeft:Xp,bounceInRight:Zp,bounceInUp:Jp,bounceOut:Qp,bounceOutDown:ef,bounceOutLeft:tf,bounceOutRight:nf,bounceOutUp:rf,easings:du,fadeIn:af,fadeInBottomLeft:of,fadeInBottomRight:sf,fadeInDown:lf,fadeInDownBig:cf,fadeInLeft:uf,fadeInLeftBig:df,fadeInRight:hf,fadeInRightBig:pf,fadeInTopLeft:ff,fadeInTopRight:mf,fadeInUp:gf,fadeInUpBig:bf,fadeOut:vf,fadeOutBottomLeft:yf,fadeOutBottomRight:wf,fadeOutDown:xf,fadeOutDownBig:kf,fadeOutLeft:If,fadeOutLeftBig:Cf,fadeOutRight:Sf,fadeOutRightBig:Ef,fadeOutTopLeft:Af,fadeOutTopRight:$f,fadeOutUp:_f,fadeOutUpBig:Of,flash:$p,flip:Tf,flipInX:Lf,flipInY:Df,flipOutX:Pf,flipOutY:Rf,headShake:_p,heartBeat:Op,hinge:im,jackInTheBox:am,jello:Tp,lightSpeedInLeft:zf,lightSpeedInRight:Mf,lightSpeedOutLeft:Nf,lightSpeedOutRight:Ff,pulse:Lp,rollIn:om,rollOut:sm,rotateIn:qf,rotateInDownLeft:Vf,rotateInDownRight:Bf,rotateInUpLeft:Uf,rotateInUpRight:jf,rotateOut:Wf,rotateOutDownLeft:Hf,rotateOutDownRight:Gf,rotateOutUpLeft:Kf,rotateOutUpRight:Yf,rubberBand:Dp,shake:Pp,shakeX:Rp,shakeY:zp,slideInDown:Xf,slideInLeft:Zf,slideInRight:Jf,slideInUp:Qf,slideOutDown:em,slideOutLeft:tm,slideOutRight:nm,slideOutUp:rm,swing:Mp,tada:Np,wobble:Fp,zoomIn:lm,zoomInDown:cm,zoomInLeft:um,zoomInRight:dm,zoomInUp:hm,zoomOut:pm,zoomOutDown:fm,zoomOutLeft:mm,zoomOutRight:gm,zoomOutUp:bm},Symbol.toStringTag,{value:"Module"}));/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ym=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}},wm=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}},Zl=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}},xm=`:host {
  display: contents;
}
`,qt=class extends De{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new wm)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new ym)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const e=du[this.easing]??this.easing,t=this.keyframes??vm[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!t?!1:(this.destroyAnimation(),this.animation=r.animate(t,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new Zl)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new Zl)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};qt.css=xm;l([Ip("slot")],qt.prototype,"defaultSlot",2);l([p()],qt.prototype,"name",2);l([p({type:Boolean,reflect:!0})],qt.prototype,"play",2);l([p({type:Number})],qt.prototype,"delay",2);l([p()],qt.prototype,"direction",2);l([p({type:Number})],qt.prototype,"duration",2);l([p()],qt.prototype,"easing",2);l([p({attribute:"end-delay",type:Number})],qt.prototype,"endDelay",2);l([p()],qt.prototype,"fill",2);l([p({type:Number})],qt.prototype,"iterations",2);l([p({attribute:"iteration-start",type:Number})],qt.prototype,"iterationStart",2);l([p({attribute:!1})],qt.prototype,"keyframes",2);l([p({attribute:"playback-rate",type:Number})],qt.prototype,"playbackRate",2);l([ye(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],qt.prototype,"handleAnimationChange",1);l([ye("play")],qt.prototype,"handlePlayChange",1);l([ye("playbackRate")],qt.prototype,"handlePlaybackRateChange",1);qt=l([fe("wa-animation")],qt);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var km=`:host {
  --size: 3rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: var(--size);
  height: var(--size);
  color: var(--wa-color-neutral-on-normal);
  font: inherit;
  font-size: calc(var(--size) * 0.4);
  vertical-align: middle;
  background-color: var(--wa-color-neutral-fill-normal);
  border-radius: var(--wa-border-radius-circle);
  user-select: none;
  -webkit-user-select: none;
}

:host([shape='square']) {
  border-radius: 0;
}

:host([shape='rounded']) {
  border-radius: var(--wa-border-radius-m);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.initials {
  line-height: 1;
  text-transform: uppercase;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: inherit;
}
`,mr=class extends De{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new Ri)}render(){const e=A`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let t=A``;return this.initials?t=A`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:t=A`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,A` ${this.image&&!this.hasError?e:t} `}};mr.css=km;l([ge()],mr.prototype,"hasError",2);l([p()],mr.prototype,"image",2);l([p()],mr.prototype,"label",2);l([p()],mr.prototype,"initials",2);l([p()],mr.prototype,"loading",2);l([p({reflect:!0})],mr.prototype,"shape",2);l([ye("image")],mr.prototype,"handleImageChange",1);mr=l([fe("wa-avatar")],mr);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Fa=`@layer wa-utilities {
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
}
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Im=`:host {
  --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375em 0.625em;
  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
  font-size: max(var(--wa-font-size-2xs), 0.75em);
  font-weight: var(--wa-font-weight-semibold);
  line-height: 1;
  white-space: nowrap;
  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
  border-color: transparent;
  border-radius: var(--wa-border-radius-s);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
  user-select: none;
  -webkit-user-select: none;
  cursor: inherit;
}

/* Appearance modifiers */
:host([appearance='outlined']) {
  --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

  color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
  background-color: transparent;
  border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
}

:host([appearance='filled']) {
  --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

  color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
  background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
  border-color: transparent;
}

:host([appearance='filled-outlined']) {
  --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

  color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
  background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
  border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
}

:host([appearance='accent']) {
  --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
  border-color: transparent;
}

/* Pill modifier */
:host([pill]) {
  border-radius: var(--wa-border-radius-pill);
}

/* Pulse attention */
:host([attention='pulse']) {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--pulse-color);
  }
  70% {
    box-shadow: 0 0 0 0.5rem transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

/* Bounce attention */
:host([attention='bounce']) {
  animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-2px);
  }
}

::slotted(wa-icon) {
  margin-inline-end: var(--wa-space-2xs, 0.25em);
  opacity: 90%;
  line-height: 1;
  height: 0.85em;
}
`,mi=class extends De{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return A` <slot part="base" role="status"></slot>`}};mi.css=[Fa,Im];l([p({reflect:!0})],mi.prototype,"variant",2);l([p({reflect:!0})],mi.prototype,"appearance",2);l([p({type:Boolean,reflect:!0})],mi.prototype,"pill",2);l([p({reflect:!0})],mi.prototype,"attention",2);mi=l([fe("wa-badge")],mi);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Cm=`.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
`,qi=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="wa-breadcrumb-item");e.forEach((t,n)=>{const r=t.querySelector('[slot="separator"]');r===null?t.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),A`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <wa-icon
            name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"}
            library="system"
            variant="solid"
          ></wa-icon>
        </slot>
      </span>
    `}};qi.css=Cm;l([he("slot")],qi.prototype,"defaultSlot",2);l([he('slot[name="separator"]')],qi.prototype,"separatorSlot",2);l([p()],qi.prototype,"label",2);qi=l([fe("wa-breadcrumb")],qi);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Uo=()=>({checkValidity(e){const t=e.input,n={message:"",isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if("checkValidity"in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,"validationMessage"in t&&(n.message=t.validationMessage),!("validity"in t))return n.invalidKeys.push("customError"),n;for(const i in t.validity){if(i==="valid")continue;const o=i;t.validity[o]&&n.invalidKeys.push(o)}return n}});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var fl=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},Sm=()=>({observedAttributes:["custom-error"],checkValidity(e){const t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),xt=class extends De{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new fl))},this.handleInteraction=e=>{const t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[Sm()]}static get observedAttributes(){const e=new Set(super.observedAttributes||[]);for(const t of this.validators)if(t.observedAttributes)for(const n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")){const t=this.value;if(Array.isArray(t)){if(this.name){const n=new FormData;for(const r of t)n.append(this.name,r);this.setValue(n,n)}}else this.setValue(t,t)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){const t=e[0],n=e[1];let r=e[2];r||(r=this.validationTarget),this.internals.setValidity(t,n,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&n),this.customStates.set("user-valid",t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){const[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){const e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const e=this.allValidators;if(!e?.length)return;const t={customError:!!this.customError},n=this.validationTarget||this.input||void 0;let r="";for(const i of e){const{isValid:o,message:a,invalidKeys:c}=i.checkValidity(this);o||(r||(r=a),c?.length>=0&&c.forEach(f=>t[f]=!0))}r||(r=this.validationMessage),this.setValidity(t,r,n)}};xt.formAssociated=!0;l([p({reflect:!0})],xt.prototype,"name",2);l([p({type:Boolean})],xt.prototype,"disabled",2);l([p({state:!0,attribute:!1})],xt.prototype,"valueHasChanged",2);l([p({state:!0,attribute:!1})],xt.prototype,"hasInteracted",2);l([p({attribute:"custom-error",reflect:!0})],xt.prototype,"customError",2);l([p({attribute:!1,state:!0,type:Object})],xt.prototype,"validity",1);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Pn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const r=n.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var mn=`@layer wa-utilities {
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
}
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=ea(class extends ta{constructor(e){if(super(e),e.type!==cr.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return qr}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=e=>e??zt;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hu=Symbol.for(""),Em=e=>{if(e?.r===hu)return e?._$litStatic$},Jl=(e,...t)=>({_$litStatic$:t.reduce(((n,r,i)=>n+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[i+1]),e[0]),r:hu}),Ql=new Map,Am=e=>(t,...n)=>{const r=n.length;let i,o;const a=[],c=[];let f,b=0,C=!1;for(;b<r;){for(f=t[b];b<r&&(o=n[b],(i=Em(o))!==void 0);)f+=i+t[++b],C=!0;b!==r&&c.push(o),a.push(f),b++}if(b===r&&a.push(t[r]),C){const x=a.join("$$lit$$");(t=Ql.get(x))===void 0&&(a.raw=a,Ql.set(x,t=a)),n=c}return e(t,...n)},us=Am(A);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var $m=`@layer wa-component {
  :host {
    display: inline-block;

    /* Workaround because Chrome doesn't like :host(:has()) below
     * https://issues.chromium.org/issues/40062355
     * Firefox doesn't like this nested rule, so both are needed */
    &:has(wa-badge) {
      position: relative;
    }
  }

  /* Apply relative positioning only when needed to position wa-badge
   * This avoids creating a new stacking context for every button */
  :host(:has(wa-badge)) {
    position: relative;
  }
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  transition-property: background, border, box-shadow, color;
  transition-duration: var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  cursor: pointer;
  padding: 0 var(--wa-form-control-padding-inline);
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--wa-font-weight-action);
  line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  height: var(--wa-form-control-height);
  width: 100%;

  background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
  border-color: transparent;
  color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
}

/* Appearance modifiers */
:host([appearance='plain']) {
  .button {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance='outlined']) {
  .button {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance='filled']) {
  .button {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-hover)
      );
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance='filled-outlined']) {
  .button {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-hover)
      );
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
      var(--wa-color-mix-active)
    );
  }
}

:host([appearance='accent']) {
  .button {
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-hover)
      );
    }
  }
  .button:not(.disabled):not(.loading):active {
    background-color: color-mix(
      in oklab,
      var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
      var(--wa-color-mix-active)
    );
  }
}

/* Focus states */
.button:focus {
  outline: none;
}

.button:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Disabled state */
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* When disabled, prevent mouse events from bubbling up from children */
.button.disabled * {
  pointer-events: none;
}

/* Keep it last so Safari doesn't stop parsing this block */
.button::-moz-focus-inner {
  border: 0;
}

/* Icon buttons */
.button.is-icon-button {
  outline-offset: 2px;
  width: var(--wa-form-control-height);
  aspect-ratio: 1;
}

.button.is-icon-button:has(wa-icon) {
  width: auto;
}

/* Pill modifier */
:host([pill]) .button {
  border-radius: var(--wa-border-radius-pill);
}

/*
 * Label
 */

.start,
.end {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.label {
  display: inline-block;
}

.is-icon-button .label {
  display: flex;
}

.label::slotted(wa-icon) {
  align-self: center;
}

/*
 * Caret modifier
 */

wa-icon[part='caret'] {
  display: flex;
  align-self: center;
  align-items: center;

  &::part(svg) {
    width: 0.875em;
    height: 0.875em;
  }

  .button:has(&) .end {
    display: none;
  }
}

/*
 * Loading modifier
 */

.loading {
  position: relative;
  cursor: wait;

  .start,
  .label,
  .end,
  .caret {
    visibility: hidden;
  }

  wa-spinner {
    --indicator-color: currentColor;
    --track-color: color-mix(in oklab, currentColor, transparent 90%);

    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }
}

/*
 * Badges
 */

.button ::slotted(wa-badge) {
  border-color: var(--wa-color-surface-default);
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
  translate: 50% -50%;
  pointer-events: none;
}

:host(:dir(rtl)) ::slotted(wa-badge) {
  translate: -50% -50%;
}

/*
* Button spacing
*/

slot[name='start']::slotted(*) {
  margin-inline-end: 0.75em;
}

slot[name='end']::slotted(*),
.button:not(.visually-hidden-label) [part='caret'] {
  margin-inline-start: 0.75em;
}

/*
 * Button group border radius modifications
 */

/* Remove border radius from all grouped buttons by default */
:host(.wa-button-group__button) .button {
  border-radius: 0;
}

/* Horizontal orientation */
:host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-end-start-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Vertical orientation */
:host(.wa-button-group__vertical) {
  flex: 1 1 auto;
}

:host(.wa-button-group__vertical) .button {
  width: 100%;
  justify-content: start;
}

:host(.wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-start-end-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Handle pill modifier for button groups */
:host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-end-start-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-start-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}
`,lt=class extends xt{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new Pn(this,"[default]","start","end"),this.localize=new ot(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,Uo()]}constructLightDOMButton(){const e=document.createElement("button");return e.type=this.type,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",this.name&&(e.name=this.name),e.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){if(!this.getForm())return;const t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new fl)}handleLabelSlotChange(){const e=this.labelSlot.assignedNodes({flatten:!0});let t=!1,n=!1,r=!1,i=!1;[...e].forEach(o=>{if(o.nodeType===Node.ELEMENT_NODE){const a=o;a.localName==="wa-icon"?(n=!0,t||(t=a.label!==void 0)):i=!0}else o.nodeType===Node.TEXT_NODE&&(o.textContent?.trim()||"").length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=this.isLink(),t=e?Jl`a`:Jl`button`;return us`
      <${t}
        part="base"
        class=${Ve({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${ze(e?void 0:this.disabled)}
        type=${ze(e?void 0:this.type)}
        title=${this.title}
        name=${ze(e?void 0:this.name)}
        value=${ze(e?void 0:this.value)}
        href=${ze(e?this.href:void 0)}
        target=${ze(e?this.target:void 0)}
        download=${ze(e?this.download:void 0)}
        rel=${ze(e&&this.rel?this.rel:void 0)}
        role=${ze(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?us`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?us`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};lt.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0};lt.css=[$m,Fa,mn];l([he(".button")],lt.prototype,"button",2);l([he("slot:not([name])")],lt.prototype,"labelSlot",2);l([ge()],lt.prototype,"invalid",2);l([ge()],lt.prototype,"isIconButton",2);l([p()],lt.prototype,"title",2);l([p({reflect:!0})],lt.prototype,"variant",2);l([p({reflect:!0})],lt.prototype,"appearance",2);l([p({reflect:!0})],lt.prototype,"size",2);l([p({attribute:"with-caret",type:Boolean,reflect:!0})],lt.prototype,"withCaret",2);l([p({type:Boolean})],lt.prototype,"disabled",2);l([p({type:Boolean,reflect:!0})],lt.prototype,"loading",2);l([p({type:Boolean,reflect:!0})],lt.prototype,"pill",2);l([p()],lt.prototype,"type",2);l([p({reflect:!0})],lt.prototype,"name",2);l([p({reflect:!0})],lt.prototype,"value",2);l([p({reflect:!0})],lt.prototype,"href",2);l([p()],lt.prototype,"target",2);l([p()],lt.prototype,"rel",2);l([p()],lt.prototype,"download",2);l([p({reflect:!0})],lt.prototype,"form",2);l([p({attribute:"formaction"})],lt.prototype,"formAction",2);l([p({attribute:"formenctype"})],lt.prototype,"formEnctype",2);l([p({attribute:"formmethod"})],lt.prototype,"formMethod",2);l([p({attribute:"formnovalidate",type:Boolean})],lt.prototype,"formNoValidate",2);l([p({attribute:"formtarget"})],lt.prototype,"formTarget",2);l([ye("disabled",{waitUntilFirstUpdate:!0})],lt.prototype,"handleDisabledChange",1);lt=l([fe("wa-button")],lt);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var _m=`:host {
  --track-width: 2px;
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-color: var(--wa-color-brand-fill-loud);
  --speed: 2s;

  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.
   Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can grow/shrink and
   break the animation. The use of \`flex: none\` on the host element prevents this by always having the spinner sized
   according to its actual dimensions.
  */
  flex: none;
  display: inline-flex;
  width: 1em;
  height: 1em;
}

svg {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  animation: spin var(--speed) linear infinite;
}

.track {
  stroke: var(--track-color);
}

.indicator {
  stroke: var(--indicator-color);
  stroke-dasharray: 75, 100;
  stroke-dashoffset: -5;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`,Ps=class extends De{constructor(){super(...arguments),this.localize=new ot(this)}render(){return A`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};Ps.css=_m;Ps=l([fe("wa-spinner")],Ps);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Om=`:host {
  display: inline-flex;
}

.button-group {
  display: flex;
  position: relative;
  isolation: isolate;
  flex-wrap: wrap;
  gap: 1px;

  @media (hover: hover) {
    > :hover,
    &::slotted(:hover) {
      z-index: 1;
    }
  }

  /* Focus and checked are always on top */
  > :focus,
  &::slotted(:focus),
  > [aria-checked='true'],
  &::slotted([aria-checked='true']),
  > [checked],
  &::slotted([checked]) {
    z-index: 2 !important;
  }
}
:host([orientation='vertical']) .button-group {
  flex-direction: column;
}

/* Button groups with at least one outlined button will not have a gap and instead have borders overlap */
.button-group.has-outlined {
  gap: 0;

  &:not([aria-orientation='vertical']):not(.button-group-vertical)::slotted(:not(:first-child)) {
    margin-inline-start: calc(-1 * var(--border-width));
  }

  &:is([aria-orientation='vertical'], .button-group-vertical)::slotted(:not(:first-child)) {
    margin-block-start: calc(-1 * var(--border-width));
  }
}
`,Lr=class extends De{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal",this.variant="neutral"}updated(e){super.updated(e),e.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(e){va(e.target)?.classList.add("button-focus")}handleBlur(e){va(e.target)?.classList.remove("button-focus")}handleMouseOver(e){va(e.target)?.classList.add("button-hover")}handleMouseOut(e){va(e.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,e.forEach(t=>{const n=e.indexOf(t),r=va(t);r&&(r.appearance==="outlined"&&(this.hasOutlined=!0),r.classList.add("wa-button-group__button"),r.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),r.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),r.classList.toggle("wa-button-group__button-first",n===0),r.classList.toggle("wa-button-group__button-inner",n>0&&n<e.length-1),r.classList.toggle("wa-button-group__button-last",n===e.length-1),r.classList.toggle("wa-button-group__button-radio",r.tagName.toLowerCase()==="wa-radio-button"))})}render(){return A`
      <slot
        part="base"
        class=${Ve({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};Lr.css=[Fa,Om];l([he("slot")],Lr.prototype,"defaultSlot",2);l([ge()],Lr.prototype,"disableRole",2);l([ge()],Lr.prototype,"hasOutlined",2);l([p()],Lr.prototype,"label",2);l([p({reflect:!0})],Lr.prototype,"orientation",2);l([p({reflect:!0})],Lr.prototype,"variant",2);Lr=l([fe("wa-button-group")],Lr);function va(e){const t="wa-button, wa-radio-button";return e.closest(t)??e.querySelector(t)}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Tm=`:host {
  display: flex;
  position: relative;
  align-items: stretch;
  border-radius: var(--wa-panel-border-radius);
  background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
  border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  border-style: var(--wa-panel-border-style);
  border-width: var(--wa-panel-border-width);
  color: var(--wa-color-text-normal);
  padding: 1em;
}

/* Appearance modifiers */
:host([appearance~='plain']) {
  background-color: transparent;
  border-color: transparent;
}

:host([appearance~='outlined']) {
  background-color: transparent;
  border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
}

:host([appearance~='filled']) {
  background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
  border-color: transparent;
}

:host([appearance~='filled-outlined']) {
  border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
}

:host([appearance~='accent']) {
  color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
  background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
  border-color: transparent;

  [part~='icon'] {
    color: currentColor;
  }
}

[part~='icon'] {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  color: var(--wa-color-on-quiet);
  font-size: 1.25em;
}

::slotted([slot='icon']) {
  margin-inline-end: var(--wa-form-control-padding-inline);
}

[part~='message'] {
  flex: 1 1 auto;
  display: block;
  overflow: hidden;
}
`,Vi=class extends De{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return A`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};Vi.css=[Tm,Fa,mn];l([p({reflect:!0})],Vi.prototype,"variant",2);l([p({reflect:!0})],Vi.prototype,"appearance",2);l([p({reflect:!0})],Vi.prototype,"size",2);Vi=l([fe("wa-callout")],Vi);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Lm=`:host {
  --spacing: var(--wa-space-l);

  /* Internal calculated properties */
  --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));

  display: flex;
  flex-direction: column;
  background-color: var(--wa-color-surface-default);
  border-color: var(--wa-color-surface-border);
  border-radius: var(--wa-panel-border-radius);
  border-style: var(--wa-panel-border-style);
  box-shadow: var(--wa-shadow-s);
  border-width: var(--wa-panel-border-width);
  color: var(--wa-color-text-normal);
}

/* Appearance modifiers */
:host([appearance~='plain']) {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

:host([appearance~='outlined']) {
  background-color: var(--wa-color-surface-default);
  border-color: var(--wa-color-surface-border);
}

:host([appearance~='filled']) {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: transparent;
}

:host([appearance~='filled'][appearance~='outlined']) {
  border-color: var(--wa-color-neutral-border-quiet);
}

:host([appearance~='accent']) {
  color: var(--wa-color-neutral-on-loud);
  background-color: var(--wa-color-neutral-fill-loud);
  border-color: transparent;
}

/* Take care of top and bottom radii */
.media,
:host(:not([with-media])) .header,
:host(:not([with-media], [with-header])) .body {
  border-start-start-radius: var(--inner-border-radius);
  border-start-end-radius: var(--inner-border-radius);
}

:host(:not([with-footer])) .body,
.footer {
  border-end-start-radius: var(--inner-border-radius);
  border-end-end-radius: var(--inner-border-radius);
}

.media {
  display: flex;
  overflow: hidden;

  &::slotted(*) {
    display: block;
    width: 100%;
    border-radius: 0 !important;
  }
}

/* Round all corners for plain appearance */
:host([appearance='plain']) .media {
  border-radius: var(--inner-border-radius);

  &::slotted(*) {
    border-radius: inherit !important;
  }
}

.header {
  display: block;
  border-block-end-style: inherit;
  border-block-end-color: var(--wa-color-surface-border);
  border-block-end-width: var(--wa-panel-border-width);
  padding: calc(var(--spacing) / 2) var(--spacing);
}

.body {
  display: block;
  padding: var(--spacing);
}

.footer {
  display: block;
  border-block-start-style: inherit;
  border-block-start-color: var(--wa-color-surface-border);
  border-block-start-width: var(--wa-panel-border-width);
  padding: var(--spacing);
}

/* Push slots to sides when the action slots renders */
.has-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:host(:not([with-header])) .header,
:host(:not([with-footer])) .footer,
:host(:not([with-media])) .media {
  display: none;
}

/* Orientation Styles */
:host([orientation='horizontal']) {
  flex-direction: row;

  .media {
    border-start-start-radius: var(--inner-border-radius);
    border-end-start-radius: var(--inner-border-radius);
    border-start-end-radius: 0;

    &::slotted(*) {
      block-size: 100%;
      inline-size: 100%;
      object-fit: cover;
    }
  }
}

:host([orientation='horizontal']) ::slotted([slot='body']) {
  display: block;
  height: 100%;
  margin: 0;
}

:host([orientation='horizontal']) ::slotted([slot='actions']) {
  display: flex;
  align-items: center;
  padding: var(--spacing);
}
`,Ur=class extends De{constructor(){super(...arguments),this.hasSlotController=new Pn(this,"footer","header","media"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?A`
        <slot name="media" part="media" class="media"></slot>
        <slot part="body" class="body"></slot>
        <slot name="actions" part="actions" class="actions"></slot>
      `:A`
      <slot name="media" part="media" class="media"></slot>

      ${this.hasSlotController.test("header-actions")?A` <header part="header" class="header has-actions">
            <slot name="header"></slot>
            <slot name="header-actions"></slot>
          </header>`:A` <header part="header" class="header">
            <slot name="header"></slot>
          </header>`}

      <slot part="body" class="body"></slot>
      ${this.hasSlotController.test("footer-actions")?A` <footer part="footer" class="footer has-actions">
            <slot name="footer"></slot>
            <slot name="footer-actions"></slot>
          </footer>`:A` <footer part="footer" class="footer">
            <slot name="footer"></slot>
          </footer>`}
    `}};Ur.css=[mn,Lm];l([p({reflect:!0})],Ur.prototype,"appearance",2);l([p({attribute:"with-header",type:Boolean,reflect:!0})],Ur.prototype,"withHeader",2);l([p({attribute:"with-media",type:Boolean,reflect:!0})],Ur.prototype,"withMedia",2);l([p({attribute:"with-footer",type:Boolean,reflect:!0})],Ur.prototype,"withFooter",2);l([p({reflect:!0})],Ur.prototype,"orientation",2);Ur=l([fe("wa-card")],Ur);const Dm="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Pm=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=Dm[n[e]&63];return t};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function Ye(e,t,n){const r=i=>Object.is(i,-0)?0:i;return e<t?r(t):e>n?r(n):r(e)}function jo(e=""){return`${e}${Pm()}`}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function Jn(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */async function Co(e,t,n){return e.animate(t,n).finished.catch(()=>{})}function yt(e,t){return new Promise(n=>{const r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let o=()=>{e.classList.remove(t),n(),r.abort()};e.addEventListener("animationend",o,{once:!0,signal:i}),e.addEventListener("animationcancel",o,{once:!0,signal:i})})}function So(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e)||0:e.indexOf("s")>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}function ec(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Rm=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*zm(e,t){if(e!==void 0){let n=0;for(const r of e)yield t(r,n++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Mm(e,t,n=1){const r=t===void 0?0:e;t??=e;for(let i=r;n>0?i<t:t<i;i+=n)yield i}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */(()=>{const e=(r,i)=>{let o=0;return function(...a){window.clearTimeout(o),o=window.setTimeout(()=>{r.call(this,...a)},i)}},t=(r,i,o)=>{const a=r[i];r[i]=function(...c){a.call(this,...c),o.call(this,a,...c)}};if(!("onscrollend"in window)){const r=new Set,i=new WeakMap,o=c=>{r.add(c.pointerId)},a=c=>{r.delete(c.pointerId)};document.addEventListener("pointerdown",o),document.addEventListener("pointerup",a),t(EventTarget.prototype,"addEventListener",function(c,f){if(f!=="scroll")return;const b=e(()=>{r.size?b():this.dispatchEvent(new Event("scrollend"))},100);c.call(this,"scroll",b,{passive:!0}),i.set(this,b)}),t(EventTarget.prototype,"removeEventListener",function(c,f){if(f!=="scroll")return;const b=i.get(this);b&&c.call(this,"scroll",b,{passive:!0})})}})();var Nm=class extends Event{constructor(e){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Fm=`:host {
  --aspect-ratio: 16 / 9;
  --scroll-hint: 0px;
  --slide-gap: var(--wa-space-m, 1rem); /* fallback value is necessary */

  display: flex;
}

.carousel {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: 1fr min-content;
  grid-template-areas:
    '. slides .'
    '. pagination .';
  gap: var(--wa-space-m);
  align-items: center;
  min-height: 100%;
  min-width: 100%;
  position: relative;
}

.pagination {
  grid-area: pagination;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--wa-space-s);
}

.slides {
  grid-area: slides;

  display: grid;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-items: center;
  overflow: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
  border-radius: var(--wa-border-radius-m);

  --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
}

@media (prefers-reduced-motion) {
  :where(.slides) {
    scroll-behavior: auto;
  }
}

.slides-horizontal {
  grid-auto-flow: column;
  grid-auto-columns: var(--slide-size);
  grid-auto-rows: 100%;
  column-gap: var(--slide-gap);
  scroll-snap-type: x mandatory;
  scroll-padding-inline: var(--scroll-hint);
  padding-inline: var(--scroll-hint);
  overflow-y: hidden;
}

.slides-vertical {
  grid-auto-flow: row;
  grid-auto-columns: 100%;
  grid-auto-rows: var(--slide-size);
  row-gap: var(--slide-gap);
  scroll-snap-type: y mandatory;
  scroll-padding-block: var(--scroll-hint);
  padding-block: var(--scroll-hint);
  overflow-x: hidden;
}

.slides-dragging,
.slides-dropping {
  scroll-snap-type: unset;
}

:host([vertical]) ::slotted(wa-carousel-item) {
  height: 100%;
}

.slides::-webkit-scrollbar {
  display: none;
}

.navigation {
  grid-area: navigation;
  display: contents;
  font-size: var(--wa-font-size-l);
}

.navigation-button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  border-radius: var(--wa-border-radius-m);
  font-size: inherit;
  color: var(--wa-color-text-quiet);
  padding: var(--wa-space-xs);
  cursor: pointer;
  transition: var(--wa-transition-normal) color;
  appearance: none;
}

.navigation-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.navigation-button-disabled::part(base) {
  pointer-events: none;
}

.navigation-button-previous {
  grid-column: 1;
  grid-row: 1;
}

.navigation-button-next {
  grid-column: 3;
  grid-row: 1;
}

.pagination-item {
  display: block;
  cursor: pointer;
  background: none;
  border: 0;
  border-radius: var(--wa-border-radius-circle);
  width: var(--wa-space-s);
  height: var(--wa-space-s);
  background-color: var(--wa-color-neutral-fill-normal);
  padding: 0;
  margin: 0;
  transition: transform var(--wa-transition-slow);
}

.pagination-item-active {
  background-color: var(--wa-form-control-activated-color);
  transform: scale(1.25);
}

/* Focus styles */
.slides:focus-visible,
.navigation-button:focus-visible,
.pagination-item:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}
`,wt=class extends De{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Rm(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new ot(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,n=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const r=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:n,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==r||n!==i)&&(e.scrollTo({left:r,top:i,behavior:ec()?"auto":"smooth"}),await Jn(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(n=>[...n.addedNodes,...n.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:n,loop:r}=this,i=r?e/n:(e-t)/n+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),n=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+n*n)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,n=this.localize.dir()==="rtl",r=t.closest('[part~="pagination-item"]')!==null,i=e.key==="ArrowDown"||!n&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!n&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),i&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{const a=this.shadowRoot?.querySelector('[part~="pagination-item-active"]');a&&a.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const c of t){const f=c.target;f.toggleAttribute("inert",!c.isIntersecting),f.classList.toggle("--in-view",c.isIntersecting),f.setAttribute("aria-hidden",c.isIntersecting?"false":"true")}const n=t.find(c=>c.isIntersecting);if(!n)return;const r=this.getSlides({excludeClones:!1}),i=this.getSlides().length,o=r.indexOf(n.target),a=this.loop?o-this.slidesPerPage:o;if(n&&(this.activeSlide=(Math.ceil(a/this.slidesPerMove)*this.slidesPerMove+i)%i,!this.scrolling&&this.loop&&n.target.hasAttribute("data-clone"))){const c=Number(n.target.getAttribute("data-clone"));this.goToSlide(c,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,n=e.slice(-t),r=e.slice(0,t);n.reverse().forEach((i,o)=>{const a=i.cloneNode(!0);a.setAttribute("data-clone",String(e.length-o-1)),this.prepend(a)}),r.forEach((i,o)=>{const a=i.cloneNode(!0);a.setAttribute("data-clone",String(o)),this.append(a)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,n)=>{t.classList.toggle("--is-active",n===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new Nm({index:this.activeSlide,slide:e[this.activeSlide]}))}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((n,r)=>{(r+t)%t===0?n.style.removeProperty("scroll-snap-align"):n.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:n,loop:r}=this,i=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!i.length)return;const a=r?(e+i.length)%i.length:Ye(e,0,i.length-n);this.activeSlide=a;const c=this.localize.dir()==="rtl",f=Ye(e+(r?n:0)+(c?n-1:0),0,o.length-1),b=o[f];this.scrollToSlide(b,ec()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const n=this.scrollContainer,r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),o=i.left-r.left,a=i.top-r.top;o||a?(this.pendingSlideChange=!0,n.scrollTo({left:o+n.scrollLeft,top:a+n.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this;let n=0,r=0,i=!1,o=!1;this.hasUpdated&&(n=this.getPageCount(),r=this.getCurrentPage(),i=this.canScrollPrev(),o=this.canScrollNext());const a=this.localize.dir()==="rtl";return A`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${Ve({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot @slotchange=${()=>this.requestUpdate()}></slot>
        </div>

        ${this.navigation?A`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${Ve({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!i})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${a?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${Ve({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${a?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?A`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${zm(Mm(n),c=>{const f=c===r;return A`
                    <button
                      part="pagination-item ${f?"pagination-item-active":""}"
                      class="${Ve({"pagination-item":!0,"pagination-item-active":f})}"
                      role="tab"
                      aria-selected="${f?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",c+1,n)}"
                      tabindex=${f?"0":"-1"}
                      @click=${()=>this.goToSlide(c*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:A``}
      </div>
    `}};wt.css=Fm;l([p({type:Boolean,reflect:!0})],wt.prototype,"loop",2);l([p({type:Number,reflect:!0})],wt.prototype,"slides",2);l([p({type:Number,reflect:!0})],wt.prototype,"currentSlide",2);l([p({type:Boolean,reflect:!0})],wt.prototype,"navigation",2);l([p({type:Boolean,reflect:!0})],wt.prototype,"pagination",2);l([p({type:Boolean,reflect:!0})],wt.prototype,"autoplay",2);l([p({type:Number,attribute:"autoplay-interval"})],wt.prototype,"autoplayInterval",2);l([p({type:Number,attribute:"slides-per-page"})],wt.prototype,"slidesPerPage",2);l([p({type:Number,attribute:"slides-per-move"})],wt.prototype,"slidesPerMove",2);l([p()],wt.prototype,"orientation",2);l([p({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],wt.prototype,"mouseDragging",2);l([he(".slides")],wt.prototype,"scrollContainer",2);l([he(".pagination")],wt.prototype,"paginationContainer",2);l([ge()],wt.prototype,"activeSlide",2);l([ge()],wt.prototype,"scrolling",2);l([ge()],wt.prototype,"dragging",2);l([Bo({passive:!0})],wt.prototype,"handleScroll",1);l([ye("loop",{waitUntilFirstUpdate:!0}),ye("slidesPerPage",{waitUntilFirstUpdate:!0})],wt.prototype,"initializeSlides",1);l([ye("activeSlide")],wt.prototype,"handleSlideChange",1);l([ye("slidesPerMove")],wt.prototype,"updateSlidesSnap",1);l([ye("autoplay")],wt.prototype,"handleAutoplayChange",1);wt=l([fe("wa-carousel")],wt);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Wo=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||(t=Object.assign(document.createElement("input"),{required:!0})),n||(n="value");const r={observedAttributes:["required"],message:t.validationMessage,checkValidity(i){const o={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&!i[n]&&(o.message=typeof r.message=="function"?r.message(i):r.message||"",o.isValid=!1,o.invalidKeys.push("valueMissing")),o}};return r};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Rr=`:host {
  display: flex;
  flex-direction: column;
}

/* Label */
:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {
  display: inline-flex;
  color: var(--wa-form-control-label-color);
  font-weight: var(--wa-form-control-label-font-weight);
  line-height: var(--wa-form-control-label-line-height);
  margin-block-end: 0.5em;
}

:host([required]) :is([part~='form-control-label'], [part~='label'])::after {
  content: var(--wa-form-control-required-content);
  margin-inline-start: var(--wa-form-control-required-content-offset);
  color: var(--wa-form-control-required-content-color);
}

/* Help text */
[part~='hint'] {
  display: block;
  color: var(--wa-form-control-hint-color);
  font-weight: var(--wa-form-control-hint-font-weight);
  line-height: var(--wa-form-control-hint-line-height);
  margin-block-start: 0.5em;
  font-size: var(--wa-font-size-smaller);
  line-height: var(--wa-form-control-label-line-height);

  &:not(.has-slotted) {
    display: none;
  }
}
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=ea(class extends ta{constructor(e){if(super(e),e.type!==cr.PROPERTY&&e.type!==cr.ATTRIBUTE&&e.type!==cr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!bd(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===qr||t===zt)return t;const n=e.element,r=e.name;if(e.type===cr.PROPERTY){if(t===n[r])return qr}else if(e.type===cr.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return qr}else if(e.type===cr.ATTRIBUTE&&n.getAttribute(r)===t+"")return qr;return Ys(e),t}});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var qm=`:host {
  --checked-icon-color: var(--wa-color-brand-on-loud);
  --checked-icon-scale: 0.8;

  display: inline-flex;
  color: var(--wa-form-control-value-color);
  font-family: inherit;
  font-weight: var(--wa-form-control-value-font-weight);
  line-height: var(--wa-form-control-value-line-height);
  user-select: none;
  -webkit-user-select: none;
}

[part~='control'] {
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
  align-items: center;
  justify-content: center;
  width: var(--wa-form-control-toggle-size);
  height: var(--wa-form-control-toggle-size);
  border-color: var(--wa-form-control-border-color);
  border-radius: min(
    calc(var(--wa-form-control-toggle-size) * 0.375),
    var(--wa-border-radius-s)
  ); /* min prevents entirely circular checkbox */
  border-style: var(--wa-border-style);
  border-width: var(--wa-form-control-border-width);
  background-color: var(--wa-form-control-background-color);
  transition:
    background var(--wa-transition-normal),
    border-color var(--wa-transition-fast),
    box-shadow var(--wa-transition-fast),
    color var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);

  margin-inline-end: 0.5em;
}

[part~='base'] {
  display: flex;
  align-items: flex-start;
  position: relative;
  color: currentColor;
  vertical-align: middle;
  cursor: pointer;
}

[part~='label'] {
  display: inline;
}

/* Checked */
[part~='control']:has(:checked, :indeterminate) {
  color: var(--checked-icon-color);
  border-color: var(--wa-form-control-activated-color);
  background-color: var(--wa-form-control-activated-color);
}

/* Focus */
[part~='control']:has(> input:focus-visible:not(:disabled)) {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Disabled */
:host [part~='base']:has(input:disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

input {
  position: absolute;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  pointer-events: none;
}

[part~='icon'] {
  display: flex;
  scale: var(--checked-icon-scale);

  /* Without this, Safari renders the icon slightly to the left */
  &::part(svg) {
    translate: 0.0009765625em;
  }

  input:not(:checked, :indeterminate) + & {
    visibility: hidden;
  }
}

:host([required]) [part~='label']::after {
  content: var(--wa-form-control-required-content);
  color: var(--wa-form-control-required-content-color);
  margin-inline-start: var(--wa-form-control-required-content-offset);
}
`,Vt=class extends xt{constructor(){super(...arguments),this.hasSlotController=new Pn(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static get validators(){const e=[Wo({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){const e=this._value||"on";return this.checked?e:null}set value(e){this._value=e}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),t=this.hint?!0:!!e,n=!this.checked&&this.indeterminate,r=n?"indeterminate":"check",i=n?"indeterminate":"check";return A`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ze(this._value)}
            .indeterminate=${Bi(this.indeterminate)}
            .checked=${Bi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${i}-icon icon" library="system" name=${r}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${t?"false":"true"}
        class="${Ve({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};Vt.css=[Rr,mn,qm];Vt.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0};l([he('input[type="checkbox"]')],Vt.prototype,"input",2);l([p()],Vt.prototype,"title",2);l([p({reflect:!0})],Vt.prototype,"name",2);l([p({reflect:!0})],Vt.prototype,"value",1);l([p({reflect:!0})],Vt.prototype,"size",2);l([p({type:Boolean})],Vt.prototype,"disabled",2);l([p({type:Boolean,reflect:!0})],Vt.prototype,"indeterminate",2);l([p({type:Boolean,attribute:!1})],Vt.prototype,"checked",2);l([p({type:Boolean,reflect:!0,attribute:"checked"})],Vt.prototype,"defaultChecked",2);l([p({reflect:!0})],Vt.prototype,"form",2);l([p({type:Boolean,reflect:!0})],Vt.prototype,"required",2);l([p()],Vt.prototype,"hint",2);l([ye("defaultChecked")],Vt.prototype,"handleDefaultCheckedChange",1);l([ye(["checked","indeterminate"])],Vt.prototype,"handleStateChange",1);l([ye("disabled")],Vt.prototype,"handleDisabledChange",1);Vt=l([fe("wa-checkbox")],Vt);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function $a(e,t){function n(i){const o=e.getBoundingClientRect(),a=e.ownerDocument.defaultView,c=o.left+a.pageXOffset,f=o.top+a.pageYOffset,b=i.pageX-c,C=i.pageY-f;t?.onMove&&t.onMove(b,C)}function r(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r),t?.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",r),t?.initialEvent instanceof PointerEvent&&n(t.initialEvent)}var $r=typeof window<"u"&&"ontouchstart"in window,Ja=class{constructor(e,t){this.isActive=!1,this.isDragging=!1,this.handleDragStart=n=>{const r=$r&&"touches"in n?n.touches[0].clientX:n.clientX,i=$r&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging||!$r&&n.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),this.options.start(r,i))},this.handleDragStop=n=>{const r=$r&&"touches"in n?n.touches[0].clientX:n.clientX,i=$r&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.options.stop(r,i)},this.handleDragMove=n=>{const r=$r&&"touches"in n?n.touches[0].clientX:n.clientX,i=$r&&"touches"in n?n.touches[0].clientY:n.clientY;window.getSelection()?.removeAllRanges(),this.options.move(r,i)},this.element=e,this.options={start:()=>{},stop:()=>{},move:()=>{},...t},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),$r&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.element.removeEventListener("pointerdown",this.handleDragStart),$r&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(e){(e!==void 0?e:!this.isActive)?this.start():this.stop()}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var pu=`@layer wa-utilities {
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
}
`;function Jt(e,t){Vm(e)&&(e="100%");const n=Bm(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Qa(e){return Math.min(1,Math.max(0,e))}function Vm(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Bm(e){return typeof e=="string"&&e.indexOf("%")!==-1}function fu(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function eo(e){return Number(e)<=1?`${Number(e)*100}%`:e}function ui(e){return e.length===1?"0"+e:String(e)}function Um(e,t,n){return{r:Jt(e,255)*255,g:Jt(t,255)*255,b:Jt(n,255)*255}}function tc(e,t,n){e=Jt(e,255),t=Jt(t,255),n=Jt(n,255);const r=Math.max(e,t,n),i=Math.min(e,t,n);let o=0,a=0;const c=(r+i)/2;if(r===i)a=0,o=0;else{const f=r-i;switch(a=c>.5?f/(2-r-i):f/(r+i),r){case e:o=(t-n)/f+(t<n?6:0);break;case t:o=(n-e)/f+2;break;case n:o=(e-t)/f+4;break}o/=6}return{h:o,s:a,l:c}}function ds(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function jm(e,t,n){let r,i,o;if(e=Jt(e,360),t=Jt(t,100),n=Jt(n,100),t===0)i=n,o=n,r=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;r=ds(c,a,e+1/3),i=ds(c,a,e),o=ds(c,a,e-1/3)}return{r:r*255,g:i*255,b:o*255}}function nc(e,t,n){e=Jt(e,255),t=Jt(t,255),n=Jt(n,255);const r=Math.max(e,t,n),i=Math.min(e,t,n);let o=0;const a=r,c=r-i,f=r===0?0:c/r;if(r===i)o=0;else{switch(r){case e:o=(t-n)/c+(t<n?6:0);break;case t:o=(n-e)/c+2;break;case n:o=(e-t)/c+4;break}o/=6}return{h:o,s:f,v:a}}function Wm(e,t,n){e=Jt(e,360)*6,t=Jt(t,100),n=Jt(n,100);const r=Math.floor(e),i=e-r,o=n*(1-t),a=n*(1-i*t),c=n*(1-(1-i)*t),f=r%6,b=[n,a,o,o,c,n][f],C=[c,n,n,a,o,o][f],x=[o,o,c,n,n,a][f];return{r:b*255,g:C*255,b:x*255}}function rc(e,t,n,r){const i=[ui(Math.round(e).toString(16)),ui(Math.round(t).toString(16)),ui(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function Hm(e,t,n,r,i){const o=[ui(Math.round(e).toString(16)),ui(Math.round(t).toString(16)),ui(Math.round(n).toString(16)),ui(Km(r))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Gm(e,t,n,r){const i=e/100,o=t/100,a=n/100,c=r/100,f=255*(1-i)*(1-c),b=255*(1-o)*(1-c),C=255*(1-a)*(1-c);return{r:f,g:b,b:C}}function ic(e,t,n){let r=1-e/255,i=1-t/255,o=1-n/255,a=Math.min(r,i,o);return a===1?(r=0,i=0,o=0):(r=(r-a)/(1-a)*100,i=(i-a)/(1-a)*100,o=(o-a)/(1-a)*100),a*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(o),k:Math.round(a)}}function Km(e){return Math.round(parseFloat(e)*255).toString(16)}function ac(e){return En(e)/255}function En(e){return parseInt(e,16)}function Ym(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const Rs={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Xm(e){let t={r:0,g:0,b:0},n=1,r=null,i=null,o=null,a=!1,c=!1;return typeof e=="string"&&(e=Qm(e)),typeof e=="object"&&(Sn(e.r)&&Sn(e.g)&&Sn(e.b)?(t=Um(e.r,e.g,e.b),a=!0,c=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Sn(e.h)&&Sn(e.s)&&Sn(e.v)?(r=eo(e.s),i=eo(e.v),t=Wm(e.h,r,i),a=!0,c="hsv"):Sn(e.h)&&Sn(e.s)&&Sn(e.l)?(r=eo(e.s),o=eo(e.l),t=jm(e.h,r,o),a=!0,c="hsl"):Sn(e.c)&&Sn(e.m)&&Sn(e.y)&&Sn(e.k)&&(t=Gm(e.c,e.m,e.y,e.k),a=!0,c="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=fu(n),{ok:a,format:e.format||c,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}const Zm="[-\\+]?\\d+%?",Jm="[-\\+]?\\d*\\.\\d+%?",Vr="(?:"+Jm+")|(?:"+Zm+")",hs="[\\s|\\(]+("+Vr+")[,|\\s]+("+Vr+")[,|\\s]+("+Vr+")\\s*\\)?",to="[\\s|\\(]+("+Vr+")[,|\\s]+("+Vr+")[,|\\s]+("+Vr+")[,|\\s]+("+Vr+")\\s*\\)?",Nn={CSS_UNIT:new RegExp(Vr),rgb:new RegExp("rgb"+hs),rgba:new RegExp("rgba"+to),hsl:new RegExp("hsl"+hs),hsla:new RegExp("hsla"+to),hsv:new RegExp("hsv"+hs),hsva:new RegExp("hsva"+to),cmyk:new RegExp("cmyk"+to),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Qm(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Rs[e])e=Rs[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let n=Nn.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=Nn.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=Nn.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=Nn.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=Nn.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=Nn.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=Nn.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=Nn.hex8.exec(e),n?{r:En(n[1]),g:En(n[2]),b:En(n[3]),a:ac(n[4]),format:t?"name":"hex8"}:(n=Nn.hex6.exec(e),n?{r:En(n[1]),g:En(n[2]),b:En(n[3]),format:t?"name":"hex"}:(n=Nn.hex4.exec(e),n?{r:En(n[1]+n[1]),g:En(n[2]+n[2]),b:En(n[3]+n[3]),a:ac(n[4]+n[4]),format:t?"name":"hex8"}:(n=Nn.hex3.exec(e),n?{r:En(n[1]+n[1]),g:En(n[2]+n[2]),b:En(n[3]+n[3]),format:t?"name":"hex"}:!1))))))))))}function Sn(e){return typeof e=="number"?!Number.isNaN(e):Nn.CSS_UNIT.test(e)}class $t{constructor(t="",n={}){if(t instanceof $t)return t;typeof t=="number"&&(t=Ym(t)),this.originalInput=t;const r=Xm(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let n,r,i;const o=t.r/255,a=t.g/255,c=t.b/255;return o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),c<=.03928?i=c/12.92:i=Math.pow((c+.055)/1.055,2.4),.2126*n+.7152*r+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=fu(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=nc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=nc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?`hsv(${n}, ${r}%, ${i}%)`:`hsva(${n}, ${r}%, ${i}%, ${this.roundA})`}toHsl(){const t=tc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=tc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?`hsl(${n}, ${r}%, ${i}%)`:`hsla(${n}, ${r}%, ${i}%, ${this.roundA})`}toHex(t=!1){return rc(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Hm(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${n}, ${r})`:`rgba(${t}, ${n}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=n=>`${Math.round(Jt(n,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=n=>Math.round(Jt(n,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...ic(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:n,y:r,k:i}=ic(this.r,this.g,this.b);return`cmyk(${t}, ${n}, ${r}, ${i})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+rc(this.r,this.g,this.b,!1);for(const[n,r]of Object.entries(Rs))if(t===r)return n;return!1}toString(t){const n=!!t;t=t??this.format;let r=!1;const i=this.a<1&&this.a>=0;return!n&&i&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new $t(this.toString())}lighten(t=10){const n=this.toHsl();return n.l+=t/100,n.l=Qa(n.l),new $t(n)}brighten(t=10){const n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new $t(n)}darken(t=10){const n=this.toHsl();return n.l-=t/100,n.l=Qa(n.l),new $t(n)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const n=this.toHsl();return n.s-=t/100,n.s=Qa(n.s),new $t(n)}saturate(t=10){const n=this.toHsl();return n.s+=t/100,n.s=Qa(n.s),new $t(n)}greyscale(){return this.desaturate(100)}spin(t){const n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new $t(n)}mix(t,n=50){const r=this.toRgb(),i=new $t(t).toRgb(),o=n/100,a={r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a};return new $t(a)}analogous(t=6,n=30){const r=this.toHsl(),i=360/n,o=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,o.push(new $t(r));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new $t(t)}monochromatic(t=6){const n=this.toHsv(),{h:r}=n,{s:i}=n;let{v:o}=n;const a=[],c=1/t;for(;t--;)a.push(new $t({h:r,s:i,v:o})),o=(o+c)%1;return a}splitcomplement(){const t=this.toHsl(),{h:n}=t;return[this,new $t({h:(n+72)%360,s:t.s,l:t.l}),new $t({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){const n=this.toRgb(),r=new $t(t).toRgb(),i=n.a+r.a*(1-n.a);return new $t({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const n=this.toHsl(),{h:r}=n,i=[this],o=360/t;for(let a=1;a<t;a++)i.push(new $t({h:(r+a*o)%360,s:n.s,l:n.l}));return i}equals(t){const n=new $t(t);return this.format==="cmyk"||n.format==="cmyk"?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mu="important",eg=" !"+mu,An=ea(class extends ta{constructor(e){if(super(e),e.type!==cr.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?n.removeProperty(r):n[r]=null);for(const r in t){const i=t[r];if(i!=null){this.ft.add(r);const o=typeof i=="string"&&i.endsWith(eg);r.includes("-")||o?n.setProperty(r,o?i.slice(0,-11):i,o?mu:""):n[r]=i}}return qr}});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var tg=`:host {
  --grid-width: 17em;
  --grid-height: 12em;
  --grid-handle-size: 1.25em;
  --slider-height: 1em;
  --slider-handle-size: calc(var(--slider-height) + 0.25em);
}

.color-picker {
  background-color: var(--wa-color-surface-raised);
  border-radius: var(--wa-border-radius-m);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
  border-color: var(--wa-color-surface-border);
  box-shadow: var(--wa-shadow-m);
  color: var(--color);
  font: inherit;
  font-size: inherit;
  user-select: none;
  width: var(--grid-width);
  -webkit-user-select: none;
}

.grid {
  position: relative;
  height: var(--grid-height);
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
    linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
  border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
  border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
  cursor: crosshair;
  forced-color-adjust: none;
}

.grid-handle {
  position: absolute;
  width: var(--grid-handle-size);
  height: var(--grid-handle-size);
  border-radius: var(--wa-border-radius-circle);
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  border: solid 0.125rem white;
  margin-top: calc(var(--grid-handle-size) / -2);
  margin-left: calc(var(--grid-handle-size) / -2);
  transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
}

.grid-handle-dragging {
  cursor: none;
  scale: 1.5;
}

.grid-handle:focus-visible {
  outline: var(--wa-focus-ring);
}

.controls {
  padding: 0.75em;
  display: flex;
  align-items: center;
}

.sliders {
  flex: 1 1 auto;
}

.slider {
  position: relative;
  height: var(--slider-height);
  border-radius: var(--wa-border-radius-s);
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  forced-color-adjust: none;
}

.slider:not(:last-of-type) {
  margin-bottom: 0.75em;
}

.slider-handle {
  position: absolute;
  top: calc(50% - var(--slider-handle-size) / 2);
  width: var(--slider-handle-size);
  height: var(--slider-handle-size);
  border-radius: var(--wa-border-radius-circle);
  border: solid 0.125rem white;
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  margin-left: calc(var(--slider-handle-size) / -2);
}

.slider-handle:focus-visible {
  outline: var(--wa-focus-ring);
}

.hue {
  background-image: linear-gradient(
    to right,
    rgb(255, 0, 0) 0%,
    rgb(255, 255, 0) 17%,
    rgb(0, 255, 0) 33%,
    rgb(0, 255, 255) 50%,
    rgb(0, 0, 255) 67%,
    rgb(255, 0, 255) 83%,
    rgb(255, 0, 0) 100%
  );
}

.alpha .alpha-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.preview {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 3em;
  height: 3em;
  border: none;
  border-radius: var(--wa-border-radius-circle);
  background: none;
  font-size: inherit;
  margin-inline-start: 0.75em;
  cursor: copy;
  forced-color-adjust: none;
}

.preview:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

  /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
  background-color: var(--preview-color);
}

.preview:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.preview-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 0.0625rem rgba(0, 0, 0, 0.125);
}

.preview-color-copied {
  animation: pulse 850ms;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
  }
  70% {
    box-shadow: 0 0 0 0.5rem transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

.user-input {
  display: flex;
  align-items: center;
  padding: 0 0.75em 0.75em 0.75em;
}

.user-input wa-input {
  min-width: 0; /* fix input width in Safari */
  flex: 1 1 auto;

  &::part(form-control-label) {
    /* Visually hidden */
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
}

.user-input wa-button-group {
  margin-inline-start: 0.75em;

  &::part(base) {
    flex-wrap: nowrap;
  }
}

.user-input wa-button:first-of-type {
  min-width: 3em;
  max-width: 3em;
}

.swatches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(1.5em, 100%), 1fr));
  grid-gap: 0.5em;
  justify-items: center;
  border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
    var(--wa-color-surface-border);
  padding: 0.5em;
  forced-color-adjust: none;
}

.swatch {
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: var(--wa-border-radius-s);
}

.swatch .swatch-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  border-radius: inherit;
  cursor: pointer;
}

.swatch:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.transparent-bg {
  background-image:
    linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
    linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
    linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
  background-size: 0.5rem 0.5rem;
  background-position:
    0 0,
    0 0,
    -0.25rem -0.25rem,
    0.25rem 0.25rem;
}

:host([disabled]) {
  opacity: 0.5;
  cursor: not-allowed;

  .grid,
  .grid-handle,
  .slider,
  .slider-handle,
  .preview,
  .swatch,
  .swatch-color {
    pointer-events: none;
  }
}

/*
 * Color dropdown
 */

.color-dropdown {
  display: contents;
}

.color-dropdown::part(panel) {
  max-height: none;
  background-color: var(--wa-color-surface-raised);
  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  overflow: visible;
}

.trigger {
  display: block;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  forced-color-adjust: none;
  width: var(--wa-form-control-height);
  height: var(--wa-form-control-height);
  border-radius: var(--wa-form-control-border-radius);
}

.trigger:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: currentColor;
  box-shadow:
    inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
    inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
}

.trigger-empty:before {
  background-color: transparent;
}

.trigger:focus-visible {
  outline: none;
}

.trigger:focus-visible:not(.trigger:disabled) {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

:host([disabled]) :is(.label, .trigger) {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-control.form-control-has-label .label {
  cursor: pointer;
  display: inline-block;
}
`,Ne=class extends xt{constructor(){super(),this.hasSlotController=new Pn(this,"hint","label"),this.isSafeValue=!1,this.localize=new ot(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form=null,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focus(),this.hide();return}e.key==="Tab"&&setTimeout(()=>{const t=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||t?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{const n=e.composedPath().some(r=>r instanceof Element&&(r.closest(".color-picker")||r===this.trigger));this&&!n&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const e=[Wo()];return[...super.validators,...e]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".slider.alpha"),n=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect();let i=this.value,o=this.value;n.focus(),e.preventDefault(),$a(t,{onMove:a=>{this.alpha=Ye(a/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".slider.hue"),n=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect();let i=this.value,o=this.value;n.focus(),e.preventDefault(),$a(t,{onMove:a=>{this.hue=Ye(a/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".grid"),n=t.querySelector(".grid-handle"),{width:r,height:i}=t.getBoundingClientRect();let o=this.value,a=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,$a(t,{onMove:(c,f)=>{this.saturation=Ye(c/r*100,0,100),this.brightness=Ye(100-f/i*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ye(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ye(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ye(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ye(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ye(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ye(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ye(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ye(this.brightness-t,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(e){const t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||""):this.value="",this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()==="")return null;const t=new $t(e);if(!t.isValid)return null;const n=t.toHsl(),r=t.toRgb(),i=t.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;const o={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},a=t.toHexString(),c=t.toHex8String(),f={h:i.h||0,s:(i.s||0)*100,v:(i.v||0)*100,a:i.a||0};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:f.h,s:f.s,v:f.v,string:this.setLetterCase(`hsv(${Math.round(f.h)}, ${Math.round(f.s)}%, ${Math.round(f.v)}%)`)},hsva:{h:f.h,s:f.s,v:f.v,a:f.a,string:this.setLetterCase(`hsva(${Math.round(f.h)}, ${Math.round(f.s)}%, ${Math.round(f.v)}%, ${f.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(c)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(t=>{const n=this.value;this.setColor(t.sRGBHex),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(e,t,n,r=100){const i=new $t(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){super.willUpdate(e),e.has("value")&&this.handleValueChange(e.get("value")||"",this.value||"")}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(t);n!==null?(this.inputValue=this.value||"",this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=e??""}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){const e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.popup?.active&&this.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new fl),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}updateAccessibleTrigger(){const e=this.trigger;e&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,Jn(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Jn(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await yt(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await yt(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const e=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.saturation,o=100-this.brightness,a=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(f=>f.trim()!==""),c=A`
      <div
        part="base"
        class=${Ve({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${An({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Ve({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${An({top:`${o}%`,left:`${i}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${ze(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${An({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${ze(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?A`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${An({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${An({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${ze(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${An({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="small"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${this.withoutFormatToggle?"":A`
                  <wa-button
                    part="format-button"
                    size="small"
                    appearance="outlined"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `}
            ${this.hasEyeDropper?A`
                  <wa-button
                    part="eyedropper-button"
                    size="small"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></wa-icon>
                  </wa-button>
                `:""}
          </wa-button-group>
        </div>

        ${a.length>0?A`
              <div part="swatches" class="swatches">
                ${a.map(f=>{const b=this.parseColor(f);return b?A`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${ze(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${f}
                      @click=${()=>this.selectSwatch(f)}
                      @keydown=${C=>!this.disabled&&C.key==="Enter"&&this.setColor(b.hexa)}
                    >
                      <div class="swatch-color" style=${An({backgroundColor:b.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return A`
      <div
        class=${Ve({container:!0,"form-control":!0,"form-control-has-label":n})}
        part="trigger-container form-control"
      >
        <div part="form-control-label" class="label" id="form-control-label">
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${Ve({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${An({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Ve({"has-slotted":r})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement="bottom-start"
        distance="0"
        skidding="0"
        sync="width"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${c}
      </wa-popup>
    `}};Ne.css=[pu,mn,Rr,tg];Ne.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0};l([he('[part~="base"]')],Ne.prototype,"base",2);l([he('[part~="input"]')],Ne.prototype,"input",2);l([he('[part~="form-control-label"]')],Ne.prototype,"triggerLabel",2);l([he('[part~="form-control-input"]')],Ne.prototype,"triggerButton",2);l([he(".color-popup")],Ne.prototype,"popup",2);l([he('[part~="preview"]')],Ne.prototype,"previewButton",2);l([he('[part~="trigger"]')],Ne.prototype,"trigger",2);l([ge()],Ne.prototype,"hasFocus",2);l([ge()],Ne.prototype,"isDraggingGridHandle",2);l([ge()],Ne.prototype,"isEmpty",2);l([ge()],Ne.prototype,"inputValue",2);l([ge()],Ne.prototype,"hue",2);l([ge()],Ne.prototype,"saturation",2);l([ge()],Ne.prototype,"brightness",2);l([ge()],Ne.prototype,"alpha",2);l([ge()],Ne.prototype,"value",1);l([p({attribute:"value",reflect:!0})],Ne.prototype,"defaultValue",2);l([p({attribute:"with-label",reflect:!0,type:Boolean})],Ne.prototype,"withLabel",2);l([p({attribute:"with-hint",reflect:!0,type:Boolean})],Ne.prototype,"withHint",2);l([ge()],Ne.prototype,"hasEyeDropper",2);l([p()],Ne.prototype,"label",2);l([p({attribute:"hint"})],Ne.prototype,"hint",2);l([p()],Ne.prototype,"format",2);l([p({reflect:!0})],Ne.prototype,"size",2);l([p({attribute:"without-format-toggle",type:Boolean})],Ne.prototype,"withoutFormatToggle",2);l([p({reflect:!0})],Ne.prototype,"name",2);l([p({type:Boolean})],Ne.prototype,"disabled",2);l([p({type:Boolean,reflect:!0})],Ne.prototype,"open",2);l([p({type:Boolean})],Ne.prototype,"opacity",2);l([p({type:Boolean})],Ne.prototype,"uppercase",2);l([p()],Ne.prototype,"swatches",2);l([p({reflect:!0})],Ne.prototype,"form",2);l([p({type:Boolean,reflect:!0})],Ne.prototype,"required",2);l([Bo({passive:!1})],Ne.prototype,"handleTouchMove",1);l([ye("format",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleFormatChange",1);l([ye("opacity")],Ne.prototype,"handleOpacityChange",1);l([ye("value")],Ne.prototype,"handleValueChange",1);l([ye("open",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleOpenChange",1);Ne=l([fe("wa-color-picker")],Ne);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var gu=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function bu(e,t){const n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&ng(t)})}function ng(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;const n=[...t.elements];if(n.length===1){t.requestSubmit(null);return}const r=n.find(i=>i.type==="submit"&&!i.matches(":disabled"));r&&(["input","button"].includes(r.localName)?t.requestSubmit(r):r.click())}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var rg=`:host {
  border-width: 0;
}

.text-field {
  flex: auto;
  display: flex;
  align-items: stretch;
  justify-content: start;
  position: relative;
  transition: inherit;
  height: var(--wa-form-control-height);
  border-color: var(--wa-form-control-border-color);
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-form-control-border-style);
  border-width: var(--wa-form-control-border-width);
  cursor: text;
  color: var(--wa-form-control-value-color);
  font-size: var(--wa-form-control-value-font-size);
  font-family: inherit;
  font-weight: var(--wa-form-control-value-font-weight);
  line-height: var(--wa-form-control-value-line-height);
  vertical-align: middle;
  width: 100%;
  transition:
    background-color var(--wa-transition-normal),
    border var(--wa-transition-normal),
    outline var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  background-color: var(--wa-form-control-background-color);
  box-shadow: var(--box-shadow);
  padding: 0 var(--wa-form-control-padding-inline);

  &:focus-within {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Style disabled inputs */
  &:has(:disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

/* Appearance modifiers */
:host([appearance='outlined']) .text-field {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance='filled']) .text-field {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance='filled-outlined']) .text-field {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-form-control-border-color);
}

:host([pill]) .text-field {
  border-radius: var(--wa-border-radius-pill) !important;
}

.text-field {
  /* Show autofill styles over the entire text field, not just the native <input> */
  &:has(:autofill),
  &:has(:-webkit-autofill) {
    background-color: var(--wa-color-brand-fill-quiet) !important;
  }

  input,
  textarea {
    /*
    Fixes an alignment issue with placeholders.
    https://github.com/shoelace-style/webawesome/issues/342
  */
    height: 100%;

    padding: 0;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
    font: inherit;

    /* Turn off Safari's autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-background-clip: text;
      background-color: transparent;
      -webkit-text-fill-color: inherit;
    }
  }
}

input {
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  transition: inherit;

  /* prettier-ignore */
  background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
  height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  padding-block: 0;
  color: inherit;

  &:autofill {
    &,
    &:hover,
    &:focus,
    &:active {
      box-shadow: none;
      caret-color: var(--wa-form-control-value-color);
    }
  }

  &::placeholder {
    color: var(--wa-form-control-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }
}

textarea {
  &:autofill {
    &,
    &:hover,
    &:focus,
    &:active {
      box-shadow: none;
      caret-color: var(--wa-form-control-value-color);
    }
  }

  &::placeholder {
    color: var(--wa-form-control-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }
}

.start,
.end {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  cursor: default;

  &::slotted(wa-icon) {
    color: var(--wa-color-neutral-on-quiet);
  }
}

.start::slotted(*) {
  margin-inline-end: var(--wa-form-control-padding-inline);
}

.end::slotted(*) {
  margin-inline-start: var(--wa-form-control-padding-inline);
}

/*
 * Clearable + Password Toggle
 */

.clear,
.password-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: var(--wa-color-neutral-on-quiet);
  border: none;
  background: none;
  padding: 0;
  transition: var(--wa-transition-normal) color;
  cursor: pointer;
  margin-inline-start: var(--wa-form-control-padding-inline);

  @media (hover: hover) {
    &:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  &:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  &:focus {
    outline: none;
  }
}

/* Don't show the browser's password toggle in Edge */
::-ms-reveal {
  display: none;
}

/* Hide the built-in number spinner */
:host([without-spin-buttons]) input[type='number'] {
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }
}
`,We=class extends xt{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new Pn(this,"hint","label"),this.localize=new ot(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Uo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new gu),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){bu(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r="preserve"){const i=t??this.input.selectionStart,o=n??this.input.selectionEnd;this.input.setRangeText(e,i,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,o=this.hasUpdated&&i&&(typeof this.value=="number"||this.value&&this.value.length>0);return A`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${ze(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${ze(this.placeholder)}
          minlength=${ze(this.minlength)}
          maxlength=${ze(this.maxlength)}
          min=${ze(this.min)}
          max=${ze(this.max)}
          step=${ze(this.step)}
          .value=${Bi(this.value??"")}
          autocapitalize=${ze(this.autocapitalize)}
          autocomplete=${ze(this.autocomplete)}
          autocorrect=${ze(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${ze(this.pattern)}
          enterkeyhint=${ze(this.enterkeyhint)}
          inputmode=${ze(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${o?A`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?A`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?A`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:A`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${Ve({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};We.css=[mn,Rr,rg];We.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0};l([he("input")],We.prototype,"input",2);l([p()],We.prototype,"title",2);l([p({reflect:!0})],We.prototype,"type",2);l([ge()],We.prototype,"value",1);l([p({attribute:"value",reflect:!0})],We.prototype,"defaultValue",2);l([p({reflect:!0})],We.prototype,"size",2);l([p({reflect:!0})],We.prototype,"appearance",2);l([p({type:Boolean,reflect:!0})],We.prototype,"pill",2);l([p()],We.prototype,"label",2);l([p({attribute:"hint"})],We.prototype,"hint",2);l([p({attribute:"with-clear",type:Boolean})],We.prototype,"withClear",2);l([p()],We.prototype,"placeholder",2);l([p({type:Boolean,reflect:!0})],We.prototype,"readonly",2);l([p({attribute:"password-toggle",type:Boolean})],We.prototype,"passwordToggle",2);l([p({attribute:"password-visible",type:Boolean})],We.prototype,"passwordVisible",2);l([p({attribute:"without-spin-buttons",type:Boolean})],We.prototype,"withoutSpinButtons",2);l([p({reflect:!0})],We.prototype,"form",2);l([p({type:Boolean,reflect:!0})],We.prototype,"required",2);l([p()],We.prototype,"pattern",2);l([p({type:Number})],We.prototype,"minlength",2);l([p({type:Number})],We.prototype,"maxlength",2);l([p()],We.prototype,"min",2);l([p()],We.prototype,"max",2);l([p()],We.prototype,"step",2);l([p()],We.prototype,"autocapitalize",2);l([p()],We.prototype,"autocorrect",2);l([p()],We.prototype,"autocomplete",2);l([p({type:Boolean})],We.prototype,"autofocus",2);l([p()],We.prototype,"enterkeyhint",2);l([p({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],We.prototype,"spellcheck",2);l([p()],We.prototype,"inputmode",2);l([p({attribute:"with-label",type:Boolean})],We.prototype,"withLabel",2);l([p({attribute:"with-hint",type:Boolean})],We.prototype,"withHint",2);l([ye("step",{waitUntilFirstUpdate:!0})],We.prototype,"handleStepChange",1);We=l([fe("wa-input")],We);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var vu=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};const jr=Math.min,_n=Math.max,Eo=Math.round,no=Math.floor,fr=e=>({x:e,y:e}),ig={left:"right",right:"left",bottom:"top",top:"bottom"},ag={start:"end",end:"start"};function zs(e,t,n){return _n(e,jr(t,n))}function ra(e,t){return typeof e=="function"?e(t):e}function Wr(e){return e.split("-")[0]}function ia(e){return e.split("-")[1]}function yu(e){return e==="x"?"y":"x"}function ml(e){return e==="y"?"height":"width"}const og=new Set(["top","bottom"]);function Or(e){return og.has(Wr(e))?"y":"x"}function gl(e){return yu(Or(e))}function sg(e,t,n){n===void 0&&(n=!1);const r=ia(e),i=gl(e),o=ml(i);let a=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=Ao(a)),[a,Ao(a)]}function lg(e){const t=Ao(e);return[Ms(e),t,Ms(t)]}function Ms(e){return e.replace(/start|end/g,t=>ag[t])}const oc=["left","right"],sc=["right","left"],cg=["top","bottom"],ug=["bottom","top"];function dg(e,t,n){switch(e){case"top":case"bottom":return n?t?sc:oc:t?oc:sc;case"left":case"right":return t?cg:ug;default:return[]}}function hg(e,t,n,r){const i=ia(e);let o=dg(Wr(e),n==="start",r);return i&&(o=o.map(a=>a+"-"+i),t&&(o=o.concat(o.map(Ms)))),o}function Ao(e){return e.replace(/left|right|bottom|top/g,t=>ig[t])}function pg(e){return{top:0,right:0,bottom:0,left:0,...e}}function wu(e){return typeof e!="number"?pg(e):{top:e,right:e,bottom:e,left:e}}function $o(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function lc(e,t,n){let{reference:r,floating:i}=e;const o=Or(t),a=gl(t),c=ml(a),f=Wr(t),b=o==="y",C=r.x+r.width/2-i.width/2,x=r.y+r.height/2-i.height/2,v=r[c]/2-i[c]/2;let I;switch(f){case"top":I={x:C,y:r.y-i.height};break;case"bottom":I={x:C,y:r.y+r.height};break;case"right":I={x:r.x+r.width,y:x};break;case"left":I={x:r.x-i.width,y:x};break;default:I={x:r.x,y:r.y}}switch(ia(t)){case"start":I[a]-=v*(n&&b?-1:1);break;case"end":I[a]+=v*(n&&b?-1:1);break}return I}const fg=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,c=o.filter(Boolean),f=await(a.isRTL==null?void 0:a.isRTL(t));let b=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:C,y:x}=lc(b,r,f),v=r,I={},R=0;for(let P=0;P<c.length;P++){const{name:V,fn:K}=c[P],{x:M,y:z,data:H,reset:F}=await K({x:C,y:x,initialPlacement:r,placement:v,strategy:i,middlewareData:I,rects:b,platform:a,elements:{reference:e,floating:t}});C=M??C,x=z??x,I={...I,[V]:{...I[V],...H}},F&&R<=50&&(R++,typeof F=="object"&&(F.placement&&(v=F.placement),F.rects&&(b=F.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):F.rects),{x:C,y:x}=lc(b,v,f)),P=-1)}return{x:C,y:x,placement:v,strategy:i,middlewareData:I}};async function bl(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:a,elements:c,strategy:f}=e,{boundary:b="clippingAncestors",rootBoundary:C="viewport",elementContext:x="floating",altBoundary:v=!1,padding:I=0}=ra(t,e),R=wu(I),V=c[v?x==="floating"?"reference":"floating":x],K=$o(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(V)))==null||n?V:V.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(c.floating)),boundary:b,rootBoundary:C,strategy:f})),M=x==="floating"?{x:r,y:i,width:a.floating.width,height:a.floating.height}:a.reference,z=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c.floating)),H=await(o.isElement==null?void 0:o.isElement(z))?await(o.getScale==null?void 0:o.getScale(z))||{x:1,y:1}:{x:1,y:1},F=$o(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:M,offsetParent:z,strategy:f}):M);return{top:(K.top-F.top+R.top)/H.y,bottom:(F.bottom-K.bottom+R.bottom)/H.y,left:(K.left-F.left+R.left)/H.x,right:(F.right-K.right+R.right)/H.x}}const mg=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:a,elements:c,middlewareData:f}=t,{element:b,padding:C=0}=ra(e,t)||{};if(b==null)return{};const x=wu(C),v={x:n,y:r},I=gl(i),R=ml(I),P=await a.getDimensions(b),V=I==="y",K=V?"top":"left",M=V?"bottom":"right",z=V?"clientHeight":"clientWidth",H=o.reference[R]+o.reference[I]-v[I]-o.floating[R],F=v[I]-o.reference[I],D=await(a.getOffsetParent==null?void 0:a.getOffsetParent(b));let G=D?D[z]:0;(!G||!await(a.isElement==null?void 0:a.isElement(D)))&&(G=c.floating[z]||o.floating[R]);const Z=H/2-F/2,xe=G/2-P[R]/2-1,Oe=jr(x[K],xe),ue=jr(x[M],xe),U=Oe,oe=G-P[R]-ue,pe=G/2-P[R]/2+Z,Ce=zs(U,pe,oe),se=!f.arrow&&ia(i)!=null&&pe!==Ce&&o.reference[R]/2-(pe<U?Oe:ue)-P[R]/2<0,Q=se?pe<U?pe-U:pe-oe:0;return{[I]:v[I]+Q,data:{[I]:Ce,centerOffset:pe-Ce-Q,...se&&{alignmentOffset:Q}},reset:se}}}),gg=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:a,initialPlacement:c,platform:f,elements:b}=t,{mainAxis:C=!0,crossAxis:x=!0,fallbackPlacements:v,fallbackStrategy:I="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:P=!0,...V}=ra(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const K=Wr(i),M=Or(c),z=Wr(c)===c,H=await(f.isRTL==null?void 0:f.isRTL(b.floating)),F=v||(z||!P?[Ao(c)]:lg(c)),D=R!=="none";!v&&D&&F.push(...hg(c,P,R,H));const G=[c,...F],Z=await bl(t,V),xe=[];let Oe=((r=o.flip)==null?void 0:r.overflows)||[];if(C&&xe.push(Z[K]),x){const pe=sg(i,a,H);xe.push(Z[pe[0]],Z[pe[1]])}if(Oe=[...Oe,{placement:i,overflows:xe}],!xe.every(pe=>pe<=0)){var ue,U;const pe=(((ue=o.flip)==null?void 0:ue.index)||0)+1,Ce=G[pe];if(Ce&&(!(x==="alignment"?M!==Or(Ce):!1)||Oe.every(ie=>ie.overflows[0]>0&&Or(ie.placement)===M)))return{data:{index:pe,overflows:Oe},reset:{placement:Ce}};let se=(U=Oe.filter(Q=>Q.overflows[0]<=0).sort((Q,ie)=>Q.overflows[1]-ie.overflows[1])[0])==null?void 0:U.placement;if(!se)switch(I){case"bestFit":{var oe;const Q=(oe=Oe.filter(ie=>{if(D){const X=Or(ie.placement);return X===M||X==="y"}return!0}).map(ie=>[ie.placement,ie.overflows.filter(X=>X>0).reduce((X,$e)=>X+$e,0)]).sort((ie,X)=>ie[1]-X[1])[0])==null?void 0:oe[0];Q&&(se=Q);break}case"initialPlacement":se=c;break}if(i!==se)return{reset:{placement:se}}}return{}}}},bg=new Set(["left","top"]);async function vg(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),a=Wr(n),c=ia(n),f=Or(n)==="y",b=bg.has(a)?-1:1,C=o&&f?-1:1,x=ra(t,e);let{mainAxis:v,crossAxis:I,alignmentAxis:R}=typeof x=="number"?{mainAxis:x,crossAxis:0,alignmentAxis:null}:{mainAxis:x.mainAxis||0,crossAxis:x.crossAxis||0,alignmentAxis:x.alignmentAxis};return c&&typeof R=="number"&&(I=c==="end"?R*-1:R),f?{x:I*C,y:v*b}:{x:v*b,y:I*C}}const yg=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:a,middlewareData:c}=t,f=await vg(t,e);return a===((n=c.offset)==null?void 0:n.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:a}}}}},wg=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:c={fn:V=>{let{x:K,y:M}=V;return{x:K,y:M}}},...f}=ra(e,t),b={x:n,y:r},C=await bl(t,f),x=Or(Wr(i)),v=yu(x);let I=b[v],R=b[x];if(o){const V=v==="y"?"top":"left",K=v==="y"?"bottom":"right",M=I+C[V],z=I-C[K];I=zs(M,I,z)}if(a){const V=x==="y"?"top":"left",K=x==="y"?"bottom":"right",M=R+C[V],z=R-C[K];R=zs(M,R,z)}const P=c.fn({...t,[v]:I,[x]:R});return{...P,data:{x:P.x-n,y:P.y-r,enabled:{[v]:o,[x]:a}}}}}},xg=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:o,platform:a,elements:c}=t,{apply:f=()=>{},...b}=ra(e,t),C=await bl(t,b),x=Wr(i),v=ia(i),I=Or(i)==="y",{width:R,height:P}=o.floating;let V,K;x==="top"||x==="bottom"?(V=x,K=v===(await(a.isRTL==null?void 0:a.isRTL(c.floating))?"start":"end")?"left":"right"):(K=x,V=v==="end"?"top":"bottom");const M=P-C.top-C.bottom,z=R-C.left-C.right,H=jr(P-C[V],M),F=jr(R-C[K],z),D=!t.middlewareData.shift;let G=H,Z=F;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(Z=z),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(G=M),D&&!v){const Oe=_n(C.left,0),ue=_n(C.right,0),U=_n(C.top,0),oe=_n(C.bottom,0);I?Z=R-2*(Oe!==0||ue!==0?Oe+ue:_n(C.left,C.right)):G=P-2*(U!==0||oe!==0?U+oe:_n(C.top,C.bottom))}await f({...t,availableWidth:Z,availableHeight:G});const xe=await a.getDimensions(c.floating);return R!==xe.width||P!==xe.height?{reset:{rects:!0}}:{}}}};function Ho(){return typeof window<"u"}function aa(e){return xu(e)?(e.nodeName||"").toLowerCase():"#document"}function On(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function xr(e){var t;return(t=(xu(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function xu(e){return Ho()?e instanceof Node||e instanceof On(e).Node:!1}function Qn(e){return Ho()?e instanceof Element||e instanceof On(e).Element:!1}function gr(e){return Ho()?e instanceof HTMLElement||e instanceof On(e).HTMLElement:!1}function cc(e){return!Ho()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof On(e).ShadowRoot}const kg=new Set(["inline","contents"]);function qa(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=er(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!kg.has(i)}const Ig=new Set(["table","td","th"]);function Cg(e){return Ig.has(aa(e))}const Sg=[":popover-open",":modal"];function Go(e){return Sg.some(t=>{try{return e.matches(t)}catch{return!1}})}const Eg=["transform","translate","scale","rotate","perspective"],Ag=["transform","translate","scale","rotate","perspective","filter"],$g=["paint","layout","strict","content"];function Ko(e){const t=vl(),n=Qn(e)?er(e):e;return Eg.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Ag.some(r=>(n.willChange||"").includes(r))||$g.some(r=>(n.contain||"").includes(r))}function _g(e){let t=Hr(e);for(;gr(t)&&!Ui(t);){if(Ko(t))return t;if(Go(t))return null;t=Hr(t)}return null}function vl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Og=new Set(["html","body","#document"]);function Ui(e){return Og.has(aa(e))}function er(e){return On(e).getComputedStyle(e)}function Yo(e){return Qn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Hr(e){if(aa(e)==="html")return e;const t=e.assignedSlot||e.parentNode||cc(e)&&e.host||xr(e);return cc(t)?t.host:t}function ku(e){const t=Hr(e);return Ui(t)?e.ownerDocument?e.ownerDocument.body:e.body:gr(t)&&qa(t)?t:ku(t)}function ji(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=ku(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=On(i);if(o){const c=Ns(a);return t.concat(a,a.visualViewport||[],qa(i)?i:[],c&&n?ji(c):[])}return t.concat(i,ji(i,[],n))}function Ns(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Iu(e){const t=er(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=gr(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,c=Eo(n)!==o||Eo(r)!==a;return c&&(n=o,r=a),{width:n,height:r,$:c}}function yl(e){return Qn(e)?e:e.contextElement}function zi(e){const t=yl(e);if(!gr(t))return fr(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Iu(t);let a=(o?Eo(n.width):n.width)/r,c=(o?Eo(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const Tg=fr(0);function Cu(e){const t=On(e);return!vl()||!t.visualViewport?Tg:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Lg(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==On(e)?!1:t}function gi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=yl(e);let a=fr(1);t&&(r?Qn(r)&&(a=zi(r)):a=zi(e));const c=Lg(o,n,r)?Cu(o):fr(0);let f=(i.left+c.x)/a.x,b=(i.top+c.y)/a.y,C=i.width/a.x,x=i.height/a.y;if(o){const v=On(o),I=r&&Qn(r)?On(r):r;let R=v,P=Ns(R);for(;P&&r&&I!==R;){const V=zi(P),K=P.getBoundingClientRect(),M=er(P),z=K.left+(P.clientLeft+parseFloat(M.paddingLeft))*V.x,H=K.top+(P.clientTop+parseFloat(M.paddingTop))*V.y;f*=V.x,b*=V.y,C*=V.x,x*=V.y,f+=z,b+=H,R=On(P),P=Ns(R)}}return $o({width:C,height:x,x:f,y:b})}function wl(e,t){const n=Yo(e).scrollLeft;return t?t.left+n:gi(xr(e)).left+n}function Su(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:wl(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function Dg(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",a=xr(r),c=t?Go(t.floating):!1;if(r===a||c&&o)return n;let f={scrollLeft:0,scrollTop:0},b=fr(1);const C=fr(0),x=gr(r);if((x||!x&&!o)&&((aa(r)!=="body"||qa(a))&&(f=Yo(r)),gr(r))){const I=gi(r);b=zi(r),C.x=I.x+r.clientLeft,C.y=I.y+r.clientTop}const v=a&&!x&&!o?Su(a,f,!0):fr(0);return{width:n.width*b.x,height:n.height*b.y,x:n.x*b.x-f.scrollLeft*b.x+C.x+v.x,y:n.y*b.y-f.scrollTop*b.y+C.y+v.y}}function Pg(e){return Array.from(e.getClientRects())}function Rg(e){const t=xr(e),n=Yo(e),r=e.ownerDocument.body,i=_n(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=_n(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+wl(e);const c=-n.scrollTop;return er(r).direction==="rtl"&&(a+=_n(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:c}}function zg(e,t){const n=On(e),r=xr(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,c=0,f=0;if(i){o=i.width,a=i.height;const b=vl();(!b||b&&t==="fixed")&&(c=i.offsetLeft,f=i.offsetTop)}return{width:o,height:a,x:c,y:f}}const Mg=new Set(["absolute","fixed"]);function Ng(e,t){const n=gi(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=gr(e)?zi(e):fr(1),a=e.clientWidth*o.x,c=e.clientHeight*o.y,f=i*o.x,b=r*o.y;return{width:a,height:c,x:f,y:b}}function uc(e,t,n){let r;if(t==="viewport")r=zg(e,n);else if(t==="document")r=Rg(xr(e));else if(Qn(t))r=Ng(t,n);else{const i=Cu(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return $o(r)}function Eu(e,t){const n=Hr(e);return n===t||!Qn(n)||Ui(n)?!1:er(n).position==="fixed"||Eu(n,t)}function Fg(e,t){const n=t.get(e);if(n)return n;let r=ji(e,[],!1).filter(c=>Qn(c)&&aa(c)!=="body"),i=null;const o=er(e).position==="fixed";let a=o?Hr(e):e;for(;Qn(a)&&!Ui(a);){const c=er(a),f=Ko(a);!f&&c.position==="fixed"&&(i=null),(o?!f&&!i:!f&&c.position==="static"&&!!i&&Mg.has(i.position)||qa(a)&&!f&&Eu(e,a))?r=r.filter(C=>C!==a):i=c,a=Hr(a)}return t.set(e,r),r}function qg(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?Go(t)?[]:Fg(t,this._c):[].concat(n),r],c=a[0],f=a.reduce((b,C)=>{const x=uc(t,C,i);return b.top=_n(x.top,b.top),b.right=jr(x.right,b.right),b.bottom=jr(x.bottom,b.bottom),b.left=_n(x.left,b.left),b},uc(t,c,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function Vg(e){const{width:t,height:n}=Iu(e);return{width:t,height:n}}function Bg(e,t,n){const r=gr(t),i=xr(t),o=n==="fixed",a=gi(e,!0,o,t);let c={scrollLeft:0,scrollTop:0};const f=fr(0);function b(){f.x=wl(i)}if(r||!r&&!o)if((aa(t)!=="body"||qa(i))&&(c=Yo(t)),r){const I=gi(t,!0,o,t);f.x=I.x+t.clientLeft,f.y=I.y+t.clientTop}else i&&b();o&&!r&&i&&b();const C=i&&!r&&!o?Su(i,c):fr(0),x=a.left+c.scrollLeft-f.x-C.x,v=a.top+c.scrollTop-f.y-C.y;return{x,y:v,width:a.width,height:a.height}}function ps(e){return er(e).position==="static"}function dc(e,t){if(!gr(e)||er(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return xr(e)===n&&(n=n.ownerDocument.body),n}function Au(e,t){const n=On(e);if(Go(e))return n;if(!gr(e)){let i=Hr(e);for(;i&&!Ui(i);){if(Qn(i)&&!ps(i))return i;i=Hr(i)}return n}let r=dc(e,t);for(;r&&Cg(r)&&ps(r);)r=dc(r,t);return r&&Ui(r)&&ps(r)&&!Ko(r)?n:r||_g(e)||n}const Ug=async function(e){const t=this.getOffsetParent||Au,n=this.getDimensions,r=await n(e.floating);return{reference:Bg(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function jg(e){return er(e).direction==="rtl"}const fo={convertOffsetParentRelativeRectToViewportRelativeRect:Dg,getDocumentElement:xr,getClippingRect:qg,getOffsetParent:Au,getElementRects:Ug,getClientRects:Pg,getDimensions:Vg,getScale:zi,isElement:Qn,isRTL:jg};function $u(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Wg(e,t){let n=null,r;const i=xr(e);function o(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function a(c,f){c===void 0&&(c=!1),f===void 0&&(f=1),o();const b=e.getBoundingClientRect(),{left:C,top:x,width:v,height:I}=b;if(c||t(),!v||!I)return;const R=no(x),P=no(i.clientWidth-(C+v)),V=no(i.clientHeight-(x+I)),K=no(C),z={rootMargin:-R+"px "+-P+"px "+-V+"px "+-K+"px",threshold:_n(0,jr(1,f))||1};let H=!0;function F(D){const G=D[0].intersectionRatio;if(G!==f){if(!H)return a();G?a(!1,G):r=setTimeout(()=>{a(!1,1e-7)},1e3)}G===1&&!$u(b,e.getBoundingClientRect())&&a(),H=!1}try{n=new IntersectionObserver(F,{...z,root:i.ownerDocument})}catch{n=new IntersectionObserver(F,z)}n.observe(e)}return a(!0),o}function _u(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:f=!1}=r,b=yl(e),C=i||o?[...b?ji(b):[],...ji(t)]:[];C.forEach(K=>{i&&K.addEventListener("scroll",n,{passive:!0}),o&&K.addEventListener("resize",n)});const x=b&&c?Wg(b,n):null;let v=-1,I=null;a&&(I=new ResizeObserver(K=>{let[M]=K;M&&M.target===b&&I&&(I.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var z;(z=I)==null||z.observe(t)})),n()}),b&&!f&&I.observe(b),I.observe(t));let R,P=f?gi(e):null;f&&V();function V(){const K=gi(e);P&&!$u(P,K)&&n(),P=K,R=requestAnimationFrame(V)}return n(),()=>{var K;C.forEach(M=>{i&&M.removeEventListener("scroll",n),o&&M.removeEventListener("resize",n)}),x?.(),(K=I)==null||K.disconnect(),I=null,f&&cancelAnimationFrame(R)}}const Ou=yg,Tu=wg,Lu=gg,hc=xg,Hg=mg,Du=(e,t,n)=>{const r=new Map,i={platform:fo,...n},o={...i.platform,_c:r};return fg(e,t,{...i,platform:o})};function Gg(e){return Kg(e)}function fs(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Kg(e){for(let t=e;t;t=fs(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=fs(e);t;t=fs(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||Ko(n)||t.tagName==="BODY"))return t}return null}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Yg=`:host {
  --arrow-color: black;
  --arrow-size: var(--wa-tooltip-arrow-size);
  --show-duration: 100ms;
  --hide-duration: 100ms;

  /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

  display: contents;
}

.popup {
  position: absolute;
  isolation: isolate;
  max-width: var(--auto-size-available-width, none);
  max-height: var(--auto-size-available-height, none);

  /* Clear UA styles for [popover] */
  :where(&) {
    inset: unset;
    padding: unset;
    margin: unset;
    width: unset;
    height: unset;
    color: unset;
    background: unset;
    border: unset;
    overflow: unset;
  }
}

.popup-fixed {
  position: fixed;
}

.popup:not(.popup-active) {
  display: none;
}

.arrow {
  position: absolute;
  width: calc(var(--arrow-size-diagonal) * 2);
  height: calc(var(--arrow-size-diagonal) * 2);
  rotate: 45deg;
  background: var(--arrow-color);
  z-index: 3;
}

:host([data-current-placement~='left']) .arrow {
  rotate: -45deg;
}

:host([data-current-placement~='right']) .arrow {
  rotate: 135deg;
}

:host([data-current-placement~='bottom']) .arrow {
  rotate: 225deg;
}

/* Hover bridge */
.popup-hover-bridge:not(.popup-hover-bridge-visible) {
  display: none;
}

.popup-hover-bridge {
  position: fixed;
  z-index: 899;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: polygon(
    var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
    var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
    var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
    var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
  );
}

/* Built-in animations */
.show {
  animation: show var(--show-duration) ease;
}

.hide {
  animation: show var(--hide-duration) ease reverse;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.show-with-scale {
  animation: show-with-scale var(--show-duration) ease;
}

.hide-with-scale {
  animation: show-with-scale var(--hide-duration) ease reverse;
}

@keyframes show-with-scale {
  from {
    opacity: 0;
    scale: 0.8;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
`;function pc(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var ro=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),dt=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let r=0,i=0,o=0,a=0,c=0,f=0,b=0,C=0;n?e.top<t.top?(r=e.left,i=e.bottom,o=e.right,a=e.bottom,c=t.left,f=t.top,b=t.right,C=t.top):(r=t.left,i=t.bottom,o=t.right,a=t.bottom,c=e.left,f=e.top,b=e.right,C=e.top):e.left<t.left?(r=e.right,i=e.top,o=t.left,a=t.top,c=e.right,f=e.bottom,b=t.left,C=t.bottom):(r=t.right,i=t.top,o=e.left,a=e.top,c=t.right,f=t.bottom,b=e.left,C=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${f}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${b}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${C}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||pc(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=_u(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Ou({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(hc({apply:({rects:r})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let t;ro&&!pc(this.anchor)&&this.boundary==="scroll"&&(t=ji(this.anchorEl).filter(r=>r instanceof Element)),this.flip&&e.push(Lu({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Tu({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(hc({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Hg({element:this.arrowEl,padding:this.arrowPadding}));const n=ro?r=>fo.getOffsetParent(r,Gg):fo.getOffsetParent;Du(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:ro?"absolute":"fixed",platform:{...fo,getOffsetParent:n}}).then(({x:r,y:i,middlewareData:o,placement:a})=>{const c=this.localize.dir()==="rtl",f={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){const b=o.arrow.x,C=o.arrow.y;let x="",v="",I="",R="";if(this.arrowPlacement==="start"){const P=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";x=typeof C=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",v=c?P:"",R=c?"":P}else if(this.arrowPlacement==="end"){const P=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";v=c?"":P,R=c?P:"",I=typeof C=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(R=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":"",x=typeof C=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(R=typeof b=="number"?`${b}px`:"",x=typeof C=="number"?`${C}px`:"");Object.assign(this.arrowEl.style,{top:x,right:v,bottom:I,left:R,[f]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new vu)}render(){return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ve({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Ve({popup:!0,"popup-active":this.active,"popup-fixed":!ro,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?A`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};dt.css=Yg;l([he(".popup")],dt.prototype,"popup",2);l([he(".arrow")],dt.prototype,"arrowEl",2);l([p()],dt.prototype,"anchor",2);l([p({type:Boolean,reflect:!0})],dt.prototype,"active",2);l([p({reflect:!0})],dt.prototype,"placement",2);l([p()],dt.prototype,"boundary",2);l([p({type:Number})],dt.prototype,"distance",2);l([p({type:Number})],dt.prototype,"skidding",2);l([p({type:Boolean})],dt.prototype,"arrow",2);l([p({attribute:"arrow-placement"})],dt.prototype,"arrowPlacement",2);l([p({attribute:"arrow-padding",type:Number})],dt.prototype,"arrowPadding",2);l([p({type:Boolean})],dt.prototype,"flip",2);l([p({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],dt.prototype,"flipFallbackPlacements",2);l([p({attribute:"flip-fallback-strategy"})],dt.prototype,"flipFallbackStrategy",2);l([p({type:Object})],dt.prototype,"flipBoundary",2);l([p({attribute:"flip-padding",type:Number})],dt.prototype,"flipPadding",2);l([p({type:Boolean})],dt.prototype,"shift",2);l([p({type:Object})],dt.prototype,"shiftBoundary",2);l([p({attribute:"shift-padding",type:Number})],dt.prototype,"shiftPadding",2);l([p({attribute:"auto-size"})],dt.prototype,"autoSize",2);l([p()],dt.prototype,"sync",2);l([p({type:Object})],dt.prototype,"autoSizeBoundary",2);l([p({attribute:"auto-size-padding",type:Number})],dt.prototype,"autoSizePadding",2);l([p({attribute:"hover-bridge",type:Boolean})],dt.prototype,"hoverBridge",2);dt=l([fe("wa-popup")],dt);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Xg=`:host {
  --divider-width: 0.125rem;
  --handle-size: 2.5rem;

  display: block;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

.before,
.after {
  display: block;

  &::slotted(img),
  &::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  &::slotted(:not(img, svg)) {
    isolation: isolate;
  }
}

.after {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

/* Disable pointer-events while dragging. This is especially important for iframes. */
:host(:state(dragging)) {
  .before,
  .after {
    pointer-events: none;
  }
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: var(--divider-width);
  height: 100%;
  background-color: var(--wa-color-surface-default);
  translate: calc(var(--divider-width) / -2);
  cursor: ew-resize;
}

.handle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(50% - (var(--handle-size) / 2));
  width: var(--handle-size);
  height: var(--handle-size);
  background-color: var(--wa-color-surface-default);
  border-radius: var(--wa-border-radius-circle);
  font-size: calc(var(--handle-size) * 0.4);
  color: var(--wa-color-neutral-on-quiet);
  cursor: inherit;
  z-index: 10;
}

.handle:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}
`,Wi=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.position=50}handleDrag(e){const{width:t}=this.getBoundingClientRect(),n=this.localize.dir()==="rtl";e.preventDefault(),$a(this,{onMove:r=>{this.customStates.set("dragging",!0),this.position=parseFloat(Ye(r/t*100,0,100).toFixed(2)),n&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:e})}handleKeyDown(e){const t=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight")&&(i-=r),(t&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft")&&(i+=r),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=Ye(i,0,100),this.position=i}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return A`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${An({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${An({left:e?`${100-this.position}%`:`${this.position}%`})}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <div
          part="handle"
          class="handle"
          role="scrollbar"
          aria-valuenow=${this.position}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-controls="comparison"
          tabindex="0"
        >
          <slot name="handle">
            <wa-icon library="system" name="grip-vertical" variant="solid"></wa-icon>
          </slot>
        </div>
      </div>
    `}};Wi.css=Xg;l([he(".handle")],Wi.prototype,"handle",2);l([p({type:Number,reflect:!0})],Wi.prototype,"position",2);l([ye("position",{waitUntilFirstUpdate:!0})],Wi.prototype,"handlePositionChange",1);Wi=l([fe("wa-comparison")],Wi);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Zg=class extends Event{constructor(e){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Jg=`:host {
  display: inline-block;
  color: var(--wa-color-neutral-on-quiet);
}

.button {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: var(--wa-form-control-border-radius);
  color: inherit;
  font-size: inherit;
  padding: 0.5em;
  cursor: pointer;
  transition: color var(--wa-transition-fast) var(--wa-transition-easing);
}

@media (hover: hover) {
  .button:hover:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }
}

.button:focus-visible:not([disabled]) {
  background-color: var(--wa-color-neutral-fill-quiet);
  color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
}

.button:active:not([disabled]) {
  color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
}

slot[name='success-icon'] {
  color: var(--wa-color-success-on-quiet);
}

slot[name='error-icon'] {
  color: var(--wa-color-danger-on-quiet);
}

.button:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed !important;
}

slot {
  display: inline-flex;
}

.show {
  animation: show 100ms ease;
}

.hide {
  animation: show 100ms ease reverse;
}

@keyframes show {
  from {
    scale: 0.25;
    opacity: 0.25;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
`,Qt=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),n=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let i=this.from,o="";n?[i,o]=this.from.trim().split("."):r&&([i,o]=this.from.trim().replace(/\]$/,"").split("["));const a="getElementById"in t?t.getElementById(i):null;a?r?e=a.getAttribute(o)||"":n?e=a[o]||"":e=a.textContent||"":(this.showStatus("error"),this.dispatchEvent(new Ri))}if(!e)this.showStatus("error"),this.dispatchEvent(new Ri);else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.dispatchEvent(new Zg({value:e}))}catch{this.showStatus("error"),this.dispatchEvent(new Ri)}}async showStatus(e){const t=e==="success"?this.successIcon:this.errorIcon;await yt(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=e,t.hidden=!1,await yt(t,"show"),setTimeout(async()=>{await yt(t,"hide"),t.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await yt(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return A`
      <button
        class="button"
        part="button"
        type="button"
        id="copy-button"
        ?disabled=${this.disabled}
        @click=${this.handleCopy}
      >
        <!-- Render a visually hidden label to appease the accessibility checking gods -->
        <span class="wa-visually-hidden">${this.currentLabel}</span>
        <slot part="copy-icon" name="copy-icon">
          <wa-icon library="system" name="copy" variant="regular"></wa-icon>
        </slot>
        <slot part="success-icon" name="success-icon" variant="solid" hidden>
          <wa-icon library="system" name="check"></wa-icon>
        </slot>
        <slot part="error-icon" name="error-icon" variant="solid" hidden>
          <wa-icon library="system" name="xmark"></wa-icon>
        </slot>
        <wa-tooltip
          class=${Ve({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
          for="copy-button"
          placement=${this.tooltipPlacement}
          ?disabled=${this.disabled}
          exportparts="
            base:tooltip__base,
            base__popup:tooltip__base__popup,
            base__arrow:tooltip__base__arrow,
            body:tooltip__body
          "
          >${this.currentLabel}</wa-tooltip
        >
      </button>
    `}};Qt.css=[pu,Jg];l([he('slot[name="copy-icon"]')],Qt.prototype,"copyIcon",2);l([he('slot[name="success-icon"]')],Qt.prototype,"successIcon",2);l([he('slot[name="error-icon"]')],Qt.prototype,"errorIcon",2);l([he("wa-tooltip")],Qt.prototype,"tooltip",2);l([ge()],Qt.prototype,"isCopying",2);l([ge()],Qt.prototype,"status",2);l([p()],Qt.prototype,"value",2);l([p()],Qt.prototype,"from",2);l([p({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);l([p({attribute:"copy-label"})],Qt.prototype,"copyLabel",2);l([p({attribute:"success-label"})],Qt.prototype,"successLabel",2);l([p({attribute:"error-label"})],Qt.prototype,"errorLabel",2);l([p({attribute:"feedback-duration",type:Number})],Qt.prototype,"feedbackDuration",2);l([p({attribute:"tooltip-placement"})],Qt.prototype,"tooltipPlacement",2);Qt=l([fe("wa-copy-button")],Qt);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ki=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},Ii=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},Ci=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Si=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Qg=`:host {
  --max-width: 30ch;

  /** These styles are added so we don't interfere in the DOM. */
  display: inline-block;
  position: absolute;

  /** Defaults for inherited CSS properties */
  color: var(--wa-tooltip-content-color);
  font-size: var(--wa-tooltip-font-size);
  line-height: var(--wa-tooltip-line-height);
  text-align: start;
  white-space: normal;
}

.tooltip {
  --arrow-size: var(--wa-tooltip-arrow-size);
  --arrow-color: var(--wa-tooltip-background-color);
}

.tooltip::part(popup) {
  z-index: 1000;
}

.tooltip[placement^='top']::part(popup) {
  transform-origin: bottom;
}

.tooltip[placement^='bottom']::part(popup) {
  transform-origin: top;
}

.tooltip[placement^='left']::part(popup) {
  transform-origin: right;
}

.tooltip[placement^='right']::part(popup) {
  transform-origin: left;
}

.body {
  display: block;
  width: max-content;
  max-width: var(--max-width);
  border-radius: var(--wa-tooltip-border-radius);
  background-color: var(--wa-tooltip-background-color);
  border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
  padding: 0.25em 0.5em;
  user-select: none;
  -webkit-user-select: none;
}

.tooltip::part(arrow) {
  border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
  border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
}
`,_t=class extends De{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),this.hideDelay))}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=jo("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}addToAriaLabelledBy(e,t){const r=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);r.includes(t)||(r.push(t),e.setAttribute("aria-labelledby",r.join(" ")))}removeFromAriaLabelledBy(e,t){const i=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(o=>o!==t);i.length>0?e.setAttribute("aria-labelledby",i.join(" ")):e.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await yt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Ii)}else{const e=new Ci;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await yt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new ki)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,n=this.anchor;if(t===n)return;const{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener("blur",this.handleBlur,{capture:!0,signal:r}),t.addEventListener("focus",this.handleFocus,{capture:!0,signal:r}),t.addEventListener("click",this.handleClick,{signal:r}),t.addEventListener("mouseover",this.handleMouseOver,{signal:r}),t.addEventListener("mouseout",this.handleMouseOut,{signal:r})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener("blur",this.handleBlur,{capture:!0}),n.removeEventListener("focus",this.handleFocus,{capture:!0}),n.removeEventListener("click",this.handleClick),n.removeEventListener("mouseover",this.handleMouseOver),n.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Jn(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Jn(this,"wa-after-hide")}render(){return A`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Ve({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};_t.css=Qg;_t.dependencies={"wa-popup":dt};l([he("slot:not([name])")],_t.prototype,"defaultSlot",2);l([he(".body")],_t.prototype,"body",2);l([he("wa-popup")],_t.prototype,"popup",2);l([p()],_t.prototype,"placement",2);l([p({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);l([p({type:Number})],_t.prototype,"distance",2);l([p({type:Boolean,reflect:!0})],_t.prototype,"open",2);l([p({type:Number})],_t.prototype,"skidding",2);l([p({attribute:"show-delay",type:Number})],_t.prototype,"showDelay",2);l([p({attribute:"hide-delay",type:Number})],_t.prototype,"hideDelay",2);l([p()],_t.prototype,"trigger",2);l([p({attribute:"without-arrow",type:Boolean,reflect:!0})],_t.prototype,"withoutArrow",2);l([p()],_t.prototype,"for",2);l([ge()],_t.prototype,"anchor",2);l([ye("open",{waitUntilFirstUpdate:!0})],_t.prototype,"handleOpenChange",1);l([ye("for")],_t.prototype,"handleForChange",1);l([ye(["distance","placement","skidding"])],_t.prototype,"handleOptionsChange",1);l([ye("disabled")],_t.prototype,"handleDisabledChange",1);_t=l([fe("wa-tooltip")],_t);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var eb=`:host {
  --spacing: var(--wa-space-m);
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: block;
}

details {
  display: block;
  overflow-anchor: none;
  border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);
  background-color: var(--wa-color-surface-default);
  border-radius: var(--wa-panel-border-radius);
  color: var(--wa-color-text-normal);

  /* Print styles */
  @media print {
    background: none;
    border: solid var(--wa-border-width-s) var(--wa-color-surface-border);

    summary {
      list-style: none;
    }
  }
}

/* Appearance modifiers */
:host([appearance='plain']) details {
  background-color: transparent;
  border-color: transparent;
  border-radius: 0;
}

:host([appearance='outlined']) details {
  background-color: var(--wa-color-surface-default);
  border-color: var(--wa-color-surface-border);
}

:host([appearance='filled']) details {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: transparent;
}

:host([appearance='filled-outlined']) details {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-border-quiet);
}

:host([disabled]) details {
  opacity: 0.5;
  cursor: not-allowed;
}

summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing);
  padding: var(--spacing); /* Add padding here */
  border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;

  &::marker,
  &::-webkit-details-marker {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));
  }
}

:host([open]) summary {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}

/* 'Start' icon placement */
:host([icon-placement='start']) summary {
  flex-direction: row-reverse;
  justify-content: start;
}

[part~='icon'] {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  color: var(--wa-color-text-quiet);
  transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
}

:host([open]) [part~='icon'] {
  rotate: 90deg;
}

:host([open]:dir(rtl)) [part~='icon'] {
  rotate: -90deg;
}

:host([open]) slot[name='expand-icon'],
:host(:not([open])) slot[name='collapse-icon'] {
  display: none;
}

.body.animating {
  overflow: hidden;
}

.content {
  display: block;
  padding-block-start: var(--spacing);
  padding-inline: var(--spacing); /* Add horizontal padding */
  padding-block-end: var(--spacing); /* Add bottom padding */
}
`,hn=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(e){e.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(e){e.composedPath().some(r=>{if(!(r instanceof HTMLElement))return!1;const i=r.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(i)?!0:r instanceof xt?!("disabled"in r)||!r.disabled:!1})||(e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(n=>{n!==this&&n.open&&(n.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const t=So(getComputedStyle(this.body).getPropertyValue("--show-duration"));await Co(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new Ii)}else{const e=new Ci;if(this.dispatchEvent(e),e.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const t=So(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await Co(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new ki)}}async show(){if(!(this.open||this.disabled))return this.open=!0,Jn(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Jn(this,"wa-after-hide")}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return A`
      <details part="base">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${Ve({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};hn.css=eb;l([he("details")],hn.prototype,"details",2);l([he("summary")],hn.prototype,"header",2);l([he(".body")],hn.prototype,"body",2);l([he(".expand-icon-slot")],hn.prototype,"expandIconSlot",2);l([ge()],hn.prototype,"isAnimating",2);l([p({type:Boolean,reflect:!0})],hn.prototype,"open",2);l([p()],hn.prototype,"summary",2);l([p({reflect:!0})],hn.prototype,"name",2);l([p({type:Boolean,reflect:!0})],hn.prototype,"disabled",2);l([p({reflect:!0})],hn.prototype,"appearance",2);l([p({attribute:"icon-placement",reflect:!0})],hn.prototype,"iconPlacement",2);l([ye("open",{waitUntilFirstUpdate:!0})],hn.prototype,"handleOpenChange",1);hn=l([fe("wa-details")],hn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function tb(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Fs=new Set;function nb(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function rb(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function _o(e){if(Fs.add(e),!document.documentElement.classList.contains("wa-scroll-lock")){const t=nb()+rb();let n=getComputedStyle(document.documentElement).scrollbarGutter;(!n||n==="auto")&&(n="stable"),t<2&&(n=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",n),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${t}px`)}}function Oo(e){Fs.delete(e),Fs.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function qs(e,t,n="vertical",r="smooth"){const i=tb(e,t),o=i.top+t.scrollTop,a=i.left+t.scrollLeft,c=t.scrollLeft,f=t.scrollLeft+t.offsetWidth,b=t.scrollTop,C=t.scrollTop+t.offsetHeight;(n==="horizontal"||n==="both")&&(a<c?t.scrollTo({left:a,behavior:r}):a+e.clientWidth>f&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:r})),(n==="vertical"||n==="both")&&(o<b?t.scrollTo({top:o,behavior:r}):o+e.clientHeight>C&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:r}))}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function xl(e){return e.split(" ").map(t=>t.trim()).filter(t=>t!=="")}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ib=`:host {
  --width: 31rem;
  --spacing: var(--wa-space-l);
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: none;
}

:host([open]) {
  display: block;
}

.dialog {
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--width);
  max-width: calc(100% - var(--wa-space-2xl));
  max-height: calc(100% - var(--wa-space-2xl));
  background-color: var(--wa-color-surface-raised);
  border-radius: var(--wa-panel-border-radius);
  border: none;
  box-shadow: var(--wa-shadow-l);
  padding: 0;
  margin: auto;

  &.show {
    animation: show-dialog var(--show-duration) ease;

    &::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }
  }

  &.hide {
    animation: show-dialog var(--hide-duration) ease reverse;

    &::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }
  }

  &.pulse {
    animation: pulse 250ms ease;
  }
}

.dialog:focus {
  outline: none;
}

/* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
@media screen and (max-width: 420px) {
  .dialog {
    max-height: 80vh;
  }
}

.open {
  display: flex;
  opacity: 1;
}

.header {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: nowrap;

  padding-inline-start: var(--spacing);
  padding-block-end: 0;

  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
}

.title {
  align-self: center;
  flex: 1 1 auto;
  font-family: inherit;
  font-size: var(--wa-font-size-l);
  font-weight: var(--wa-font-weight-heading);
  line-height: var(--wa-line-height-condensed);
  margin: 0;
}

.header-actions {
  align-self: start;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: end;
  gap: var(--wa-space-2xs);
  padding-inline-start: var(--spacing);
}

.header-actions wa-button,
.header-actions ::slotted(wa-button) {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.body {
  flex: 1 1 auto;
  display: block;
  padding: var(--spacing);
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}

.footer {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: var(--wa-space-xs);
  justify-content: end;
  padding: var(--spacing);
  padding-block-start: 0;
}

.footer ::slotted(wa-button:not(:first-of-type)) {
  margin-inline-start: var(--wa-spacing-xs);
}

.dialog::backdrop {
  /*
    NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
    remove the fallback values here.
  */
  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
}

@keyframes pulse {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.02;
  }
  100% {
    scale: 1;
  }
}

@keyframes show-dialog {
  from {
    opacity: 0;
    scale: 0.8;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes show-backdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (forced-colors: active) {
  .dialog {
    border: solid 1px white;
  }
}
`,Dr=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.hasSlotController=new Pn(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),_o(this))}disconnectedCallback(){super.disconnectedCallback(),Oo(this),this.removeOpenListeners()}async requestClose(e){const t=new Ci({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,yt(this.dialog,"pulse");return}this.removeOpenListeners(),await yt(this.dialog,"hide"),this.open=!1,this.dialog.close(),Oo(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new ki)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains("hide")&&e.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(e){const n=e.target.closest('[data-dialog="close"]');n&&(e.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await yt(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),_o(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await yt(this.dialog,"show"),this.dispatchEvent(new Ii)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return A`
      <dialog
        part="dialog"
        class=${Ve({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?A`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${n=>this.requestClose(n.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${t?A`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Dr.css=ib;l([he(".dialog")],Dr.prototype,"dialog",2);l([p({type:Boolean,reflect:!0})],Dr.prototype,"open",2);l([p({reflect:!0})],Dr.prototype,"label",2);l([p({attribute:"without-header",type:Boolean,reflect:!0})],Dr.prototype,"withoutHeader",2);l([p({attribute:"light-dismiss",type:Boolean})],Dr.prototype,"lightDismiss",2);l([ye("open",{waitUntilFirstUpdate:!0})],Dr.prototype,"handleOpenChange",1);Dr=l([fe("wa-dialog")],Dr);document.addEventListener("click",e=>{const t=e.target.closest("[data-dialog]");if(t instanceof Element){const[n,r]=xl(t.getAttribute("data-dialog")||"");if(n==="open"&&r?.length){const o=t.getRootNode().getElementById(r);o?.localName==="wa-dialog"?o.open=!0:console.warn(`A dialog with an ID of "${r}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ab=`:host {
  --color: var(--wa-color-surface-border);
  --width: var(--wa-border-width-s);
  --spacing: var(--wa-space-m);
}

:host(:not([orientation='vertical'])) {
  display: block;
  border-top: solid var(--width) var(--color);
  margin: var(--spacing) 0;
}

:host([orientation='vertical']) {
  display: inline-block;
  height: 100%;
  border-inline-start: solid var(--width) var(--color);
  margin: 0 var(--spacing);
  min-block-size: 1lh;
}
`,_a=class extends De{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};_a.css=ab;l([p({reflect:!0})],_a.prototype,"orientation",2);l([ye("orientation")],_a.prototype,"handleVerticalChange",1);_a=l([fe("wa-divider")],_a);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ob=`:host {
  --size: 25rem;
  --spacing: var(--wa-space-l);
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: none;
}

:host([open]) {
  display: block;
}

.drawer {
  display: flex;
  flex-direction: column;
  top: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  background-color: var(--wa-color-surface-raised);
  border: none;
  box-shadow: var(--wa-shadow-l);
  overflow: auto;
  padding: 0;
  margin: 0;
  animation-duration: var(--show-duration);
  animation-timing-function: ease;

  &.show::backdrop {
    animation: show-backdrop var(--show-duration, 200ms) ease;
  }

  &.hide::backdrop {
    animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
  }

  &.show.top {
    animation: show-drawer-from-top var(--show-duration) ease;
  }

  &.hide.top {
    animation: show-drawer-from-top var(--hide-duration) ease reverse;
  }

  &.show.end {
    animation: show-drawer-from-end var(--show-duration) ease;

    &:dir(rtl) {
      animation-name: show-drawer-from-start;
    }
  }

  &.hide.end {
    animation: show-drawer-from-end var(--hide-duration) ease reverse;

    &:dir(rtl) {
      animation-name: show-drawer-from-start;
    }
  }

  &.show.bottom {
    animation: show-drawer-from-bottom var(--show-duration) ease;
  }

  &.hide.bottom {
    animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
  }

  &.show.start {
    animation: show-drawer-from-start var(--show-duration) ease;

    &:dir(rtl) {
      animation-name: show-drawer-from-end;
    }
  }

  &.hide.start {
    animation: show-drawer-from-start var(--hide-duration) ease reverse;

    &:dir(rtl) {
      animation-name: show-drawer-from-end;
    }
  }

  &.pulse {
    animation: pulse 250ms ease;
  }
}

.drawer:focus {
  outline: none;
}

.top {
  top: 0;
  inset-inline-end: auto;
  bottom: auto;
  inset-inline-start: 0;
  width: 100%;
  height: var(--size);
}

.end {
  top: 0;
  inset-inline-end: 0;
  bottom: auto;
  inset-inline-start: auto;
  width: var(--size);
  height: 100%;
}

.bottom {
  top: auto;
  inset-inline-end: auto;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: var(--size);
}

.start {
  top: 0;
  inset-inline-end: auto;
  bottom: auto;
  inset-inline-start: 0;
  width: var(--size);
  height: 100%;
}

.header {
  display: flex;
  flex-wrap: nowrap;
  padding-inline-start: var(--spacing);
  padding-block-end: 0;

  /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
  padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
  padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
}

.title {
  align-self: center;
  flex: 1 1 auto;
  font: inherit;
  font-size: var(--wa-font-size-l);
  font-weight: var(--wa-font-weight-heading);
  line-height: var(--wa-line-height-condensed);
  margin: 0;
}

.header-actions {
  align-self: start;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: end;
  gap: var(--wa-space-2xs);
  padding-inline-start: var(--spacing);
}

.header-actions wa-button,
.header-actions ::slotted(wa-button) {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.body {
  flex: 1 1 auto;
  display: block;
  padding: var(--spacing);
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}

.footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wa-space-xs);
  justify-content: end;
  padding: var(--spacing);
  padding-block-start: 0;
}

.footer ::slotted(wa-button:not(:last-of-type)) {
  margin-inline-end: var(--wa-spacing-xs);
}

.drawer::backdrop {
  /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
  background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
}

@keyframes pulse {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.01;
  }
  100% {
    scale: 1;
  }
}

@keyframes show-drawer {
  from {
    opacity: 0;
    scale: 0.8;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes show-drawer-from-top {
  from {
    opacity: 0;
    translate: 0 -100%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-drawer-from-end {
  from {
    opacity: 0;
    translate: 100%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-drawer-from-bottom {
  from {
    opacity: 0;
    translate: 0 100%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-drawer-from-start {
  from {
    opacity: 0;
    translate: -100% 0;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes show-backdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (forced-colors: active) {
  .drawer {
    border: solid 1px white;
  }
}
`,br=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.hasSlotController=new Pn(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),_o(this))}disconnectedCallback(){super.disconnectedCallback(),Oo(this),this.removeOpenListeners()}async requestClose(e){const t=new Ci({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,yt(this.drawer,"pulse");return}this.removeOpenListeners(),await yt(this.drawer,"hide"),this.open=!1,this.drawer.close(),Oo(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new ki)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),!this.drawer.classList.contains("hide")&&e.target===this.drawer&&this.requestClose(this.drawer)}handleDialogClick(e){const n=e.target.closest('[data-drawer="close"]');n&&(e.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(e){e.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await yt(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),_o(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.drawer.focus()}),await yt(this.drawer,"show"),this.dispatchEvent(new Ii)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return A`
      <dialog
        part="dialog"
        class=${Ve({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?A`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${n=>this.requestClose(n.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${t?A`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};br.css=ob;l([he(".drawer")],br.prototype,"drawer",2);l([p({type:Boolean,reflect:!0})],br.prototype,"open",2);l([p({reflect:!0})],br.prototype,"label",2);l([p({reflect:!0})],br.prototype,"placement",2);l([p({attribute:"without-header",type:Boolean,reflect:!0})],br.prototype,"withoutHeader",2);l([p({attribute:"light-dismiss",type:Boolean})],br.prototype,"lightDismiss",2);l([ye("open",{waitUntilFirstUpdate:!0})],br.prototype,"handleOpenChange",1);br=l([fe("wa-drawer")],br);document.addEventListener("click",e=>{const t=e.target.closest("[data-drawer]");if(t instanceof Element){const[n,r]=xl(t.getAttribute("data-drawer")||"");if(n==="open"&&r?.length){const o=t.getRootNode().getElementById(r);o?.localName==="wa-drawer"?o.open=!0:console.warn(`A drawer with an ID of "${r}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var sb=class extends Event{constructor(e){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};function*Pu(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Pu(e.shadowRoot.activeElement)))}var lb=`:host {
  --show-duration: 50ms;
  --hide-duration: 50ms;
  display: contents;
}

#menu {
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0;
  padding: 0.25em;
  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  background-color: var(--wa-color-surface-raised);
  box-shadow: var(--wa-shadow-m);
  color: var(--wa-color-text-normal);
  text-align: start;
  user-select: none;
  overflow: auto;
  max-width: var(--auto-size-available-width) !important;
  max-height: var(--auto-size-available-height) !important;

  &.show {
    animation: show var(--show-duration) ease;
  }

  &.hide {
    animation: show var(--hide-duration) ease reverse;
  }

  ::slotted(h1),
  ::slotted(h2),
  ::slotted(h3),
  ::slotted(h4),
  ::slotted(h5),
  ::slotted(h6) {
    display: block !important;
    margin: 0.25em 0 !important;
    padding: 0.25em 0.75em !important;
    color: var(--wa-color-text-quiet) !important;
    font-family: var(--wa-font-family-body) !important;
    font-weight: var(--wa-font-weight-semibold) !important;
    font-size: var(--wa-font-size-smaller) !important;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em; /* Component-specific, left as-is */
  }
}

wa-popup[data-current-placement^='top'] #menu {
  transform-origin: bottom;
}

wa-popup[data-current-placement^='bottom'] #menu {
  transform-origin: top;
}

wa-popup[data-current-placement^='left'] #menu {
  transform-origin: right;
}

wa-popup[data-current-placement^='right'] #menu {
  transform-origin: left;
}

wa-popup[data-current-placement='left-start'] #menu {
  transform-origin: right top;
}

wa-popup[data-current-placement='left-end'] #menu {
  transform-origin: right bottom;
}

wa-popup[data-current-placement='right-start'] #menu {
  transform-origin: left top;
}

wa-popup[data-current-placement='right-end'] #menu {
  transform-origin: left bottom;
}

@keyframes show {
  from {
    scale: 0.9;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
`,ms=new Set,wn=class extends De{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new ot(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{const t=this.localize.dir()==="rtl";if(e.key==="Escape"){const C=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,C?.focus();return}const n=[...Pu()].find(C=>C.localName==="wa-dropdown-item"),r=n?.localName==="wa-dropdown-item",i=this.getCurrentSubmenuItem(),o=!!i;let a,c,f;o?(a=this.getSubmenuItems(i),c=a.find(C=>C.active||C===n),f=c?a.indexOf(c):-1):(a=this.getItems(),c=a.find(C=>C.active||C===n),f=c?a.indexOf(c):-1);let b;if(e.key==="ArrowUp"&&(e.preventDefault(),e.stopPropagation(),f>0?b=a[f-1]:b=a[a.length-1]),e.key==="ArrowDown"&&(e.preventDefault(),e.stopPropagation(),f!==-1&&f<a.length-1?b=a[f+1]:b=a[0]),e.key===(t?"ArrowLeft":"ArrowRight")&&r&&c&&c.hasSubmenu){e.preventDefault(),e.stopPropagation(),c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{const C=this.getSubmenuItems(c);C.length>0&&(C.forEach((x,v)=>x.active=v===0),C[0].focus())},0);return}if(e.key===(t?"ArrowRight":"ArrowLeft")&&o){e.preventDefault(),e.stopPropagation();const C=this.removeFromSubmenuStack();C&&(C.submenuOpen=!1,setTimeout(()=>{C.focus(),C.active=!0,(C.slot==="submenu"?this.getSubmenuItems(C.parentElement):this.getItems()).forEach(v=>{v!==C&&(v.active=!1)})},0));return}if((e.key==="Home"||e.key==="End")&&(e.preventDefault(),e.stopPropagation(),b=e.key==="Home"?a[0]:a[a.length-1]),e.key==="Tab"&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=e.key,a.some(C=>{const x=(C.textContent||"").trim().toLowerCase(),v=this.userTypedQuery.trim().toLowerCase();return x.startsWith(v)?(b=C,!0):!1})),b){e.preventDefault(),e.stopPropagation(),a.forEach(C=>C.active=C===b),b.focus();return}(e.key==="Enter"||e.key===" "&&this.userTypedQuery==="")&&r&&c&&(e.preventDefault(),e.stopPropagation(),c.hasSubmenu?(c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{const C=this.getSubmenuItems(c);C.length>0&&(C.forEach((x,v)=>x.active=v===0),C[0].focus())},0)):this.makeSelection(c))},this.handleDocumentPointerDown=e=>{e.composedPath().some(r=>r instanceof HTMLElement?r===this||r.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{const t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;const n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl",i=r?n.right:n.left,o=r?Math.max(e.clientX,i):Math.min(e.clientX,i),a=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${o}px`),t.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${a}px`);const c=t.matches(":hover"),f=t.submenuElement?.matches(":hover")||!!e.composedPath().find(b=>b instanceof HTMLElement&&b.closest('[part="submenu"]')===t.submenuElement);!c&&!f&&setTimeout(()=>{!t.matches(":hover")&&!t.submenuElement?.matches(":hover")&&(t.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(e){e.has("open")&&(this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())),e.has("size")&&this.syncItemSizes()}getItems(e=!1){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(n=>n.localName==="wa-dropdown-item");return e?t:t.filter(n=>!n.disabled)}getSubmenuItems(e,t=!1){const n=e.shadowRoot?.querySelector('slot[name="submenu"]')||e.querySelector('slot[name="submenu"]');if(!n)return[];const r=n.assignedElements({flatten:!0}).filter(i=>i.localName==="wa-dropdown-item");return t?r:r.filter(i=>!i.disabled)}syncItemSizes(){this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.localName==="wa-dropdown-item").forEach(t=>t.size=this.size)}addToSubmenuStack(e){const t=this.openSubmenuStack.indexOf(e);t!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1):this.openSubmenuStack.push(e)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(t=>{t.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){const t=e.closest('wa-dropdown-item:not([slot="submenu"])');let n;t?n=this.getSubmenuItems(t,!0):n=this.getItems(!0),n.forEach(r=>{r!==e&&r.submenuOpen&&(r.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger())return;const t=new Si;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}ms.forEach(r=>r.open=!1),this.popup.active=!0,this.open=!0,ms.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await yt(this.menu,"show");const n=this.getItems();n.length>0&&(n.forEach((r,i)=>r.active=i===0),n[0].focus()),this.dispatchEvent(new Ii)}async hideMenu(){const e=new Ci({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,ms.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await yt(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new ki)}handleMenuClick(e){const t=e.target.closest("wa-dropdown-item");if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.submenuOpen=!0),e.stopPropagation();return}this.makeSelection(t)}}async handleMenuSlotChange(){const e=this.getItems(!0);await Promise.all(e.map(r=>r.updateComplete)),this.syncItemSizes();const t=e.some(r=>r.type==="checkbox"),n=e.some(r=>r.hasSubmenu);e.forEach((r,i)=>{r.active=i===0,r.checkboxAdjacent=t,r.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){const t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);const t=_u(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);const n=e.submenuElement.querySelector('slot[name="submenu"]');n&&(n.removeEventListener("slotchange",wn.handleSubmenuSlotChange),n.addEventListener("slotchange",wn.handleSubmenuSlotChange),wn.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){const t=e.target;if(!t)return;const n=t.assignedElements().filter(o=>o.localName==="wa-dropdown-item");if(n.length===0)return;const r=n.some(o=>o.hasSubmenu),i=n.some(o=>o.type==="checkbox");n.forEach(o=>{o.submenuAdjacent=r,o.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;const t=this.getSubmenuItems(e,!0),n=t.some(r=>r.hasSubmenu);t.forEach(r=>{r.submenuAdjacent=n})}cleanupSubmenuPosition(e){const t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;const n=this.localize.dir()==="rtl"?"left-start":"right-start";Du(e,e.submenuElement,{placement:n,middleware:[Ou({mainAxis:0,crossAxis:-5}),Lu({fallbackStrategy:"bestFit"}),Tu({padding:8})]}).then(({x:r,y:i,placement:o})=>{e.submenuElement.setAttribute("data-placement",o),Object.assign(e.submenuElement.style,{left:`${r}px`,top:`${i}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){e.submenuElement.style.setProperty("--safe-triangle-visible","none");return}e.submenuElement.style.setProperty("--safe-triangle-visible","block");const n=e.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${r?n.right:n.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${n.top}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${r?n.right:n.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${n.bottom}px`)}makeSelection(e){const t=this.getTrigger();if(e.disabled)return;e.type==="checkbox"&&(e.checked=!e.checked);const n=new sb({item:e});this.dispatchEvent(n),n.defaultPrevented||(this.open=!1,t?.focus())}async syncAriaAttributes(){const e=this.getTrigger();let t;e&&(e.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await e.updateComplete,t=e.shadowRoot.querySelector('[part="base"]')):t=e,t.hasAttribute("id")||t.setAttribute("id",jo("wa-dropdown-trigger-")),t.setAttribute("aria-haspopup","menu"),t.setAttribute("aria-expanded",this.open?"true":"false"),this.menu.setAttribute("aria-expanded","false"))}render(){let e=this.hasUpdated?this.popup.active:this.open;return A`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${e}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};wn.css=[mn,lb];l([he("slot:not([name])")],wn.prototype,"defaultSlot",2);l([he("#menu")],wn.prototype,"menu",2);l([he("wa-popup")],wn.prototype,"popup",2);l([p({type:Boolean,reflect:!0})],wn.prototype,"open",2);l([p({reflect:!0})],wn.prototype,"size",2);l([p({reflect:!0})],wn.prototype,"placement",2);l([p({type:Number})],wn.prototype,"distance",2);l([p({type:Number})],wn.prototype,"skidding",2);wn=l([fe("wa-dropdown")],wn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var cb=`:host {
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: var(--wa-border-radius-s);
  isolation: isolate;
  color: var(--wa-color-text-normal);
  line-height: var(--wa-line-height-condensed);
  cursor: pointer;
  transition:
    100ms background-color ease,
    100ms color ease;
}

@media (hover: hover) {
  :host(:hover:not(:state(disabled))) {
    background-color: var(--wa-color-neutral-fill-normal);
  }
}

:host(:focus-visible) {
  z-index: 1;
  outline: var(--wa-focus-ring);
  background-color: var(--wa-color-neutral-fill-normal);
}

:host(:state(disabled)) {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Danger variant */
:host([variant='danger']),
:host([variant='danger']) #details {
  color: var(--wa-color-danger-on-quiet);
}

@media (hover: hover) {
  :host([variant='danger']:hover) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }
}

:host([variant='danger']:focus-visible) {
  background-color: var(--wa-color-danger-fill-normal);
  color: var(--wa-color-danger-on-normal);
}

:host([checkbox-adjacent]) {
  padding-inline-start: 2em;
}

/* Only add padding when item actually has a submenu */
:host([submenu-adjacent]:not(:state(has-submenu))) #details {
  padding-inline-end: 0;
}

:host(:state(has-submenu)[submenu-adjacent]) #details {
  padding-inline-end: 1.75em;
}

#check {
  visibility: hidden;
  margin-inline-start: -1.5em;
  margin-inline-end: 0.5em;
  font-size: var(--wa-font-size-smaller);
}

:host(:state(checked)) #check {
  visibility: visible;
}

#icon ::slotted(*) {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-inline-end: 0.75em !important;
  font-size: var(--wa-font-size-smaller);
}

#label {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#details {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: end;
  color: var(--wa-color-text-quiet);
  font-size: var(--wa-font-size-smaller) !important;
}

#details ::slotted(*) {
  margin-inline-start: 2em !important;
}

/* Submenu indicator icon */
#submenu-indicator {
  position: absolute;
  inset-inline-end: 1em;
  color: var(--wa-color-neutral-on-quiet);
  font-size: var(--wa-font-size-smaller);
}

/* Flip chevron icon when RTL */
:host(:dir(rtl)) #submenu-indicator {
  transform: scaleX(-1);
}

/* Submenu styles */
#submenu {
  display: flex;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  width: max-content;
  margin: 0;
  padding: 0.25em;
  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  background-color: var(--wa-color-surface-raised);
  box-shadow: var(--wa-shadow-m);
  color: var(--wa-color-text-normal);
  text-align: start;
  user-select: none;

  /* Override default popover styles */
  &[popover] {
    margin: 0;
    inset: auto;
    padding: 0.25em;
    overflow: visible;
    border-radius: var(--wa-border-radius-m);
  }

  &.show {
    animation: submenu-show var(--show-duration, 50ms) ease;
  }

  &.hide {
    animation: submenu-show var(--show-duration, 50ms) ease reverse;
  }

  /* Submenu placement transform origins */
  &[data-placement^='top'] {
    transform-origin: bottom;
  }

  &[data-placement^='bottom'] {
    transform-origin: top;
  }

  &[data-placement^='left'] {
    transform-origin: right;
  }

  &[data-placement^='right'] {
    transform-origin: left;
  }

  &[data-placement='left-start'] {
    transform-origin: right top;
  }

  &[data-placement='left-end'] {
    transform-origin: right bottom;
  }

  &[data-placement='right-start'] {
    transform-origin: left top;
  }

  &[data-placement='right-end'] {
    transform-origin: left bottom;
  }

  /* Safe triangle styling */
  &::before {
    display: none;
    z-index: 9;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: '';
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
    pointer-events: auto; /* Enable mouse events on the triangle */
  }

  &[data-visible]::before {
    display: block;
  }
}

::slotted(wa-dropdown-item) {
  font-size: inherit;
}

::slotted(wa-divider) {
  --spacing: 0.25em;
}

@keyframes submenu-show {
  from {
    scale: 0.9;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
`,pn=class extends De{constructor(){super(...arguments),this.hasSlotController=new Pn(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(e){e.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),e.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),e.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),e.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),e.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.notifyParentOfOpening(),this.submenuElement.showPopover(),this.submenuElement.hidden=!1,this.submenuElement.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await yt(this.submenuElement,"show"),setTimeout(()=>{const e=this.getSubmenuItems();e.length>0&&(e.forEach((t,n)=>t.active=n===0),e[0].focus())},0))}notifyParentOfOpening(){const e=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);const t=this.parentElement;t&&[...t.children].filter(r=>r!==this&&r.localName==="wa-dropdown-item"&&r.getAttribute("slot")===this.getAttribute("slot")&&r.submenuOpen).forEach(r=>{r.submenuOpen=!1})}async closeSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),this.submenuElement.hidden||(await yt(this.submenuElement,"hide"),this.submenuElement.hidden=!0,this.submenuElement.removeAttribute("data-visible"),this.submenuElement.hidePopover()))}getSubmenuItems(){return[...this.children].filter(e=>e.localName==="wa-dropdown-item"&&e.getAttribute("slot")==="submenu"&&!e.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return A`
      ${this.type==="checkbox"?A`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?A`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?A`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:""}
    `}};pn.css=cb;l([he("#submenu")],pn.prototype,"submenuElement",2);l([p({type:Boolean})],pn.prototype,"active",2);l([p({reflect:!0})],pn.prototype,"variant",2);l([p({reflect:!0})],pn.prototype,"size",2);l([p({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],pn.prototype,"checkboxAdjacent",2);l([p({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],pn.prototype,"submenuAdjacent",2);l([p()],pn.prototype,"value",2);l([p({reflect:!0})],pn.prototype,"type",2);l([p({type:Boolean})],pn.prototype,"checked",2);l([p({type:Boolean,reflect:!0})],pn.prototype,"disabled",2);l([p({type:Boolean,reflect:!0})],pn.prototype,"submenuOpen",2);l([ge()],pn.prototype,"hasSubmenu",2);pn=l([fe("wa-dropdown-item")],pn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Oa=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],n=this.unit==="bit"?e:t,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),n.length-1)),i=n[r]+this.unit,o=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};l([p({type:Number})],Oa.prototype,"value",2);l([p()],Oa.prototype,"unit",2);l([p()],Oa.prototype,"display",2);Oa=l([fe("wa-format-bytes")],Oa);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var kn=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(e.getMilliseconds()))return;const n=this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t});return A`<time datetime=${e.toISOString()}>${n}</time>`}};l([p()],kn.prototype,"date",2);l([p()],kn.prototype,"weekday",2);l([p()],kn.prototype,"era",2);l([p()],kn.prototype,"year",2);l([p()],kn.prototype,"month",2);l([p()],kn.prototype,"day",2);l([p()],kn.prototype,"hour",2);l([p()],kn.prototype,"minute",2);l([p()],kn.prototype,"second",2);l([p({attribute:"time-zone-name"})],kn.prototype,"timeZoneName",2);l([p({attribute:"time-zone"})],kn.prototype,"timeZone",2);l([p({attribute:"hour-format"})],kn.prototype,"hourFormat",2);kn=l([fe("wa-format-date")],kn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Vn=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};l([p({type:Number})],Vn.prototype,"value",2);l([p()],Vn.prototype,"type",2);l([p({attribute:"without-grouping",type:Boolean})],Vn.prototype,"withoutGrouping",2);l([p()],Vn.prototype,"currency",2);l([p({attribute:"currency-display"})],Vn.prototype,"currencyDisplay",2);l([p({attribute:"minimum-integer-digits",type:Number})],Vn.prototype,"minimumIntegerDigits",2);l([p({attribute:"minimum-fraction-digits",type:Number})],Vn.prototype,"minimumFractionDigits",2);l([p({attribute:"maximum-fraction-digits",type:Number})],Vn.prototype,"maximumFractionDigits",2);l([p({attribute:"minimum-significant-digits",type:Number})],Vn.prototype,"minimumSignificantDigits",2);l([p({attribute:"maximum-significant-digits",type:Number})],Vn.prototype,"maximumSignificantDigits",2);Vn=l([fe("wa-format-number")],Vn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var gs=new Map;function ub(e,t="cors"){const n=gs.get(e);if(n!==void 0)return Promise.resolve(n);const r=fetch(e,{mode:t}).then(async i=>{const o={ok:i.ok,status:i.status,html:await i.text()};return gs.set(e,o),o});return gs.set(e,r),r}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var fc=class extends Event{constructor(e){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},db=`:host {
  display: block;
}
`,bi=class extends De{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(n=>t.setAttribute(n.name,n.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await ub(e,this.mode);if(e!==this.src)return;if(!t.ok){this.dispatchEvent(new fc({status:t.status}));return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(n=>this.executeScript(n)),this.dispatchEvent(new pl)}catch{this.dispatchEvent(new fc({status:-1}))}}render(){return A`<slot></slot>`}};bi.css=db;l([p()],bi.prototype,"src",2);l([p()],bi.prototype,"mode",2);l([p({attribute:"allow-scripts",type:Boolean})],bi.prototype,"allowScripts",2);l([ye("src")],bi.prototype,"handleSrcChange",1);bi=l([fe("wa-include")],bi);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var hb=class extends Event{constructor(e){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},pb=`:host {
  display: contents;
}
`,tr=class extends De{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.dispatchEvent(new hb({mutationList:e}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return A` <slot></slot> `}};tr.css=pb;l([p({reflect:!0})],tr.prototype,"attr",2);l([p({attribute:"attr-old-value",type:Boolean,reflect:!0})],tr.prototype,"attrOldValue",2);l([p({attribute:"char-data",type:Boolean,reflect:!0})],tr.prototype,"charData",2);l([p({attribute:"char-data-old-value",type:Boolean,reflect:!0})],tr.prototype,"charDataOldValue",2);l([p({attribute:"child-list",type:Boolean,reflect:!0})],tr.prototype,"childList",2);l([p({type:Boolean,reflect:!0})],tr.prototype,"disabled",2);l([ye("disabled")],tr.prototype,"handleDisabledChange",1);l([ye("attr",{waitUntilFirstUpdate:!0}),ye("attr-old-value",{waitUntilFirstUpdate:!0}),ye("char-data",{waitUntilFirstUpdate:!0}),ye("char-data-old-value",{waitUntilFirstUpdate:!0}),ye("childList",{waitUntilFirstUpdate:!0})],tr.prototype,"handleChange",1);tr=l([fe("wa-mutation-observer")],tr);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var fb=`:host {
  --arrow-size: 0.375rem;
  --max-width: 25rem;
  --show-duration: 100ms;
  --hide-duration: 100ms;

  /* Internal calculated properties */
  --arrow-diagonal-size: calc((var(--arrow-size) * sin(45deg)));

  display: contents;

  /** Defaults for inherited CSS properties */
  font-size: var(--wa-font-size-m);
  line-height: var(--wa-line-height-normal);
  text-align: start;
  white-space: normal;
}

/* The native dialog element */
.dialog {
  display: none;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
  pointer-events: none;

  &:focus {
    outline: none;
  }

  &[open] {
    display: block;
  }
}

/* The <wa-popup> element */
.popover {
  --arrow-size: inherit;
  --show-duration: inherit;
  --hide-duration: inherit;

  pointer-events: auto;

  &::part(arrow) {
    background-color: var(--wa-color-surface-default);
    border-top: none;
    border-left: none;
    border-bottom: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
    border-right: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
    box-shadow: none;
  }
}

.popover[placement^='top']::part(popup) {
  transform-origin: bottom;
}

.popover[placement^='bottom']::part(popup) {
  transform-origin: top;
}

.popover[placement^='left']::part(popup) {
  transform-origin: right;
}

.popover[placement^='right']::part(popup) {
  transform-origin: left;
}

/* Body */
.body {
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: var(--max-width);
  padding: var(--wa-space-l);
  background-color: var(--wa-color-surface-default);
  border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
  border-radius: var(--wa-panel-border-radius);
  border-style: var(--wa-panel-border-style);
  box-shadow: var(--wa-shadow-l);
  color: var(--wa-color-text-normal);
  user-select: none;
  -webkit-user-select: none;
}
`,bs=new Set,en=class extends De{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=e=>{e.target.closest('[data-popover="close"]')&&(e.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=e=>{const t=e.target;this.anchor&&e.composedPath().includes(this.anchor)||t.closest("wa-popover")!==this&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=jo("wa-popover-"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(e){e.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}bs.forEach(t=>t.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,bs.add(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await yt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Ii)}else{const e=new Ci;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),bs.delete(this),await yt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new ki)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,n=this.anchor;if(t===n)return;const{signal:r}=this.eventController;t&&t.addEventListener("click",this.handleAnchorClick,{signal:r}),n&&n.removeEventListener("click",this.handleAnchorClick),this.anchor=t,this.for&&!t&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Jn(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Jn(this,"wa-after-hide")}render(){return A`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${Ve({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};en.css=fb;en.dependencies={"wa-popup":dt};l([he("dialog")],en.prototype,"dialog",2);l([he(".body")],en.prototype,"body",2);l([he("wa-popup")],en.prototype,"popup",2);l([ge()],en.prototype,"anchor",2);l([p()],en.prototype,"placement",2);l([p({type:Boolean,reflect:!0})],en.prototype,"open",2);l([p({type:Number})],en.prototype,"distance",2);l([p({type:Number})],en.prototype,"skidding",2);l([p()],en.prototype,"for",2);l([p({attribute:"without-arrow",type:Boolean,reflect:!0})],en.prototype,"withoutArrow",2);l([ye("open",{waitUntilFirstUpdate:!0})],en.prototype,"handleOpenChange",1);l([ye("for")],en.prototype,"handleForChange",1);l([ye(["distance","placement","skidding"])],en.prototype,"handleOptionsChange",1);en=l([fe("wa-popover")],en);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var mb=`:host {
  --track-height: 1rem;
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-color: var(--wa-color-brand-fill-loud);

  display: flex;
}

.progress-bar {
  flex: 1 1 auto;
  display: flex;
  position: relative;
  overflow: hidden;
  height: var(--track-height);
  border-radius: var(--wa-border-radius-pill);
  background-color: var(--track-color);
  color: var(--wa-color-brand-on-loud);
  font-size: var(--wa-font-size-s);
}

.indicator {
  width: var(--percentage);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--indicator-color);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1;
  font-weight: var(--wa-font-weight-semibold);
  transition: all var(--wa-transition-slow, 200ms) var(--wa-transition-easing, ease);
  user-select: none;
  -webkit-user-select: none;
}

/* Indeterminate */
:host([indeterminate]) .indicator {
  position: absolute;
  inset-block: 0;
  inline-size: 50%;
  animation: wa-progress-indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
}

@media (forced-colors: active) {
  .progress-bar {
    outline: solid 1px SelectedItem;
    background-color: var(--wa-color-surface-default);
  }

  .indicator {
    outline: solid 1px SelectedItem;
    background-color: SelectedItem;
  }
}

@keyframes wa-progress-indeterminate {
  0% {
    inset-inline-start: -50%;
  }

  75%,
  100% {
    inset-inline-start: 100%;
  }
}
`,Hi=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.value=0,this.indeterminate=!1,this.label=""}updated(e){e.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${Ye(this.value,0,100)}%`)})}render(){return A`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${ze(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":A` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};Hi.css=mb;l([p({type:Number,reflect:!0})],Hi.prototype,"value",2);l([p({type:Boolean,reflect:!0})],Hi.prototype,"indeterminate",2);l([p()],Hi.prototype,"label",2);Hi=l([fe("wa-progress-bar")],Hi);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var gb=`:host {
  --size: 8rem;
  --track-width: 0.25em; /* avoid using rems here */
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-width: var(--track-width);
  --indicator-color: var(--wa-color-brand-fill-loud);
  --indicator-transition-duration: 0.35s;

  display: inline-flex;
}

.progress-ring {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.image {
  width: var(--size);
  height: var(--size);
  rotate: -90deg;
  transform-origin: 50% 50%;
}

.track,
.indicator {
  --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
  --circumference: calc(var(--radius) * 2 * 3.141592654);

  fill: none;
  r: var(--radius);
  cx: calc(var(--size) / 2);
  cy: calc(var(--size) / 2);
}

.track {
  stroke: var(--track-color);
  stroke-width: var(--track-width);
}

.indicator {
  stroke: var(--indicator-color);
  stroke-width: var(--indicator-width);
  stroke-linecap: round;
  transition-property: stroke-dashoffset;
  transition-duration: var(--indicator-transition-duration);
  stroke-dasharray: var(--circumference) var(--circumference);
  stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
}

.label {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
}
`,vi=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),n=2*Math.PI*t,r=n-this.value/100*n;this.indicatorOffset=`${r}px`}}render(){return A`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="image">
          <circle class="track"></circle>
          <circle class="indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};vi.css=gb;l([he(".indicator")],vi.prototype,"indicator",2);l([ge()],vi.prototype,"indicatorOffset",2);l([p({type:Number,reflect:!0})],vi.prototype,"value",2);l([p()],vi.prototype,"label",2);vi=l([fe("wa-progress-ring")],vi);var bb=`:host {
  --size: 128px;
  display: inline-block;
}

:host,
canvas {
  max-width: var(--size);
  max-height: var(--size);
  width: var(--size);
  height: var(--size);
}
`,vs,Tn=class extends De{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(e){super.firstUpdated(e),this.hasUpdated&&this.generate()}generate(){if(this.style.setProperty("--size",`${this.size}px`),!!this.hasUpdated){if(!vs){Dt(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(e=>{vs=e.default,this.generate()});return}vs.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas),this.generated=!0}}render(){return A`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
      ></canvas>
    `}};Tn.css=bb;l([he("canvas")],Tn.prototype,"canvas",2);l([p()],Tn.prototype,"value",2);l([p()],Tn.prototype,"label",2);l([p({type:Number})],Tn.prototype,"size",2);l([p()],Tn.prototype,"fill",2);l([p()],Tn.prototype,"background",2);l([p({type:Number})],Tn.prototype,"radius",2);l([p({attribute:"error-correction"})],Tn.prototype,"errorCorrection",2);l([ge()],Tn.prototype,"generated",2);l([ye(["background","errorCorrection","fill","radius","size","value"])],Tn.prototype,"generate",1);Tn=l([fe("wa-qr-code")],Tn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var vb=`:host {
  display: block;
}

.form-control {
  position: relative;
  border: none;
  padding: 0;
  margin: 0;
}

.label {
  padding: 0;
}

.radio-group-required .label::after {
  content: var(--wa-form-control-required-content);
  margin-inline-start: var(--wa-form-control-required-content-offset);
}

[part~='form-control-input'] {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0; /* Radios handle their own spacing */
}

/* Horizontal */
:host([orientation='horizontal']) [part~='form-control-input'] {
  flex-direction: row;
}

/* Help text */
[part~='hint'] {
  margin-block-start: 0.5em;
}
`,sn=class extends xt{constructor(){super(),this.hasSlotController=new Pn(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const t=e.target.closest("wa-radio");if(!t||t.disabled||t.forceDisabled||this.disabled)return;const n=this.value;this.value=t.value,t.checked=!0;const r=this.getAllRadios();for(const i of r)t!==i&&(i.checked=!1,i.setAttribute("tabindex","-1"));this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const e=[Wo({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:jo("__wa-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}get validationTarget(){const e=this.querySelector(":is(wa-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();if(e.forEach((t,n)=>{t.setAttribute("size",this.size),t.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),t.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),t.toggleAttribute("data-wa-radio-first",n===0),t.toggleAttribute("data-wa-radio-inner",n!==0&&n!==e.length-1),t.toggleAttribute("data-wa-radio-last",n===e.length-1),t.forceDisabled=this.disabled}),await Promise.all(e.map(async t=>{await t.updateComplete,!t.disabled&&t.value===this.value?t.checked=!0:t.checked=!1})),this.disabled)e.forEach(t=>{t.tabIndex=-1});else{const t=e.filter(r=>!r.disabled),n=t.find(r=>r.checked);t.length>0&&(n?t.forEach(r=>{r.tabIndex=r.checked?0:-1}):t.forEach((r,i)=>{r.tabIndex=i===0?0:-1})),e.filter(r=>r.disabled).forEach(r=>{r.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios().filter(c=>!c.disabled);if(t.length<=0)return;e.preventDefault();const n=this.value,r=t.find(c=>c.checked)??t[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let o=t.indexOf(r)+i;o||(o=0),o<0&&(o=t.length-1),o>t.length-1&&(o=0);const a=t.some(c=>c.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(c=>{c.checked=!1,a||c.setAttribute("tabindex","-1")}),this.value=t[o].value,t[o].checked=!0,a?t[o].shadowRoot.querySelector("button").focus():(t[o].setAttribute("tabindex","0"),t[o].focus()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const t=this.getAllRadios(),n=t.find(o=>o.checked),r=t.find(o=>!o.disabled),i=n||r;i&&i.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t;return A`
      <fieldset
        part="form-control"
        class=${Ve({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${n?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Ve({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};sn.css=[mn,Rr,vb];sn.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0};l([he("slot:not([name])")],sn.prototype,"defaultSlot",2);l([p()],sn.prototype,"label",2);l([p({attribute:"hint"})],sn.prototype,"hint",2);l([p({reflect:!0})],sn.prototype,"name",2);l([p({type:Boolean,reflect:!0})],sn.prototype,"disabled",2);l([p({reflect:!0})],sn.prototype,"orientation",2);l([ge()],sn.prototype,"value",1);l([p({attribute:"value",reflect:!0})],sn.prototype,"defaultValue",2);l([p({reflect:!0})],sn.prototype,"size",2);l([p({type:Boolean,reflect:!0})],sn.prototype,"required",2);l([p({type:Boolean,attribute:"with-label"})],sn.prototype,"withLabel",2);l([p({type:Boolean,attribute:"with-hint"})],sn.prototype,"withHint",2);sn=l([fe("wa-radio-group")],sn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var yb=`:host {
  --checked-icon-color: var(--wa-form-control-activated-color);
  --checked-icon-scale: 0.7;

  color: var(--wa-form-control-value-color);
  display: inline-flex;
  flex-direction: row;
  align-items: top;
  font-family: inherit;
  font-weight: var(--wa-form-control-value-font-weight);
  line-height: var(--wa-form-control-value-line-height);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}

:host(:focus) {
  outline: none;
}

/* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
:host(:not(:state(checked))) svg circle {
  opacity: 0;
}

[part~='label'] {
  display: inline;
}

[part~='hint'] {
  margin-block-start: 0.5em;
}

/* Default spacing for default appearance radios */
:host([appearance='default']) {
  margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
}

:host([appearance='default'][data-wa-radio-horizontal]) {
  margin-block: 0;
  margin-inline: 0.5em; /* Half of the original 1em gap on each side */
}

/* Remove margin from first/last items to prevent extra space */
:host([appearance='default'][data-wa-radio-first]) {
  margin-block-start: 0;
  margin-inline-start: 0;
}

:host([appearance='default'][data-wa-radio-last]) {
  margin-block-end: 0;
  margin-inline-end: 0;
}

/* Button appearance have no spacing, they get handled by the overlap margins below */
:host([appearance='button']) {
  margin: 0;
  align-items: center;
  min-height: var(--wa-form-control-height);
  background-color: var(--wa-color-surface-default);
  border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
  border-radius: var(--wa-border-radius-m);
  padding: 0 var(--wa-form-control-padding-inline);
  transition:
    background-color var(--wa-transition-fast),
    border-color var(--wa-transition-fast);
}

/* Default appearance */
:host([appearance='default']) {
  .control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    color: transparent;
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  .checked-icon {
    display: flex;
    fill: currentColor;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    scale: var(--checked-icon-scale);
  }
}

/* Button appearance */
:host([appearance='button']) {
  .control {
    display: none;
  }
}

/* Checked */
:host(:state(checked)) .control {
  color: var(--checked-icon-color);
  border-color: var(--wa-form-control-activated-color);
  background-color: var(--wa-form-control-background-color);
}

/* Focus */
:host(:focus-visible) .control {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Disabled */
:host(:state(disabled)) {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Horizontal grouping - remove inner border radius */
:host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
  border-radius: 0;
}

:host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

:host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

/* Vertical grouping - remove inner border radius */
:host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
  border-radius: 0;
}

:host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}

:host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
}

@media (hover: hover) {
  :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
    background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
  }
}

:host([appearance='button']:focus-visible) {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

:host([appearance='button']:state(checked)) {
  border-color: var(--wa-form-control-activated-color);
  background-color: var(--wa-color-brand-fill-quiet);
}

:host([appearance='button']:state(checked):focus-visible) {
  outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-brand-border-loud);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Button overlap margins */
:host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
  margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
}

:host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
  margin-block-start: calc(-1 * var(--wa-form-control-border-width));
}

/* Ensure interactive states are visible above adjacent buttons */
:host([appearance='button']:hover),
:host([appearance='button']:state(checked)) {
  position: relative;
  z-index: 1;
}

:host([appearance='button']:focus-visible) {
  z-index: 2;
}
`,vr=class extends xt{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this.setAttribute("aria-disabled",t?"true":"false"),t?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return A`
      <span part="control" class="control">
        ${this.checked?A`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};vr.css=[Rr,mn,yb];l([ge()],vr.prototype,"checked",2);l([ge()],vr.prototype,"forceDisabled",2);l([p({reflect:!0})],vr.prototype,"form",2);l([p({reflect:!0})],vr.prototype,"value",2);l([p({reflect:!0})],vr.prototype,"appearance",2);l([p({reflect:!0})],vr.prototype,"size",2);l([p({type:Boolean})],vr.prototype,"disabled",2);vr=l([fe("wa-radio")],vr);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var mc=class extends Event{constructor(e){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},wb=`:host {
  --symbol-color: var(--wa-color-neutral-on-quiet);
  --symbol-color-active: var(--wa-color-yellow-70);
  --symbol-spacing: 0.125em;

  display: inline-flex;
}

.rating {
  position: relative;
  display: inline-flex;
  border-radius: var(--wa-border-radius-m);
  vertical-align: middle;
}

.rating:focus {
  outline: none;
}

.rating:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.symbols {
  display: inline-flex;
  gap: 0.125em;
  position: relative;
  line-height: 0;
  color: var(--symbol-color);
  white-space: nowrap;
  cursor: pointer;
}

.symbols > * {
  padding: var(--symbol-spacing);
}

.symbol-active,
.partial-filled {
  color: var(--symbol-color-active);
}

.partial-symbol-container {
  position: relative;
}

.partial-filled {
  position: absolute;
  top: var(--symbol-spacing);
  left: var(--symbol-spacing);
}

.symbol {
  transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
  pointer-events: none;
}

.symbol-hover {
  scale: 1.2;
}

.rating-readonly .symbols {
  cursor: default;
}

:host([disabled]) .symbol-hover,
.rating-readonly .symbol-hover {
  scale: none;
}

:host([disabled]) {
  opacity: 0.5;
}

:host([disabled]) .symbols {
  cursor: not-allowed;
}

/* Forced colors mode */
@media (forced-colors: active) {
  .symbol-active {
    color: SelectedItem;
  }
}
`,tn=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(e,t)=>t?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:n,right:r,width:i}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((r-e)/i*this.max,this.precision):this.roundToPrecision((e-n)/i*this.max,this.precision);return Ye(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight"){const i=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft"){const i=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}roundToPrecision(e,t=.5){const n=1/t;return Math.ceil(e*n)/n}handleHoverValueChange(){this.dispatchEvent(new mc({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new mc({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir,t=Array.from(Array(this.max).keys());let n=0;return this.disabled||this.readonly?n=this.value:n=this.isHovering?this.hoverValue:this.value,A`
      <div
        part="base"
        class=${Ve({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="symbols">
          ${t.map(r=>{const i=n>=r+1;return n>r&&n<r+1?A`
                <span
                  class=${Ve({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(n)===r+1})}
                  role="presentation"
                >
                  <div
                    style=${An({clipPath:e?`inset(0 ${(n-r)*100}% 0 0)`:`inset(0 0 0 ${(n-r)*100}%)`})}
                  >
                    ${pr(this.getSymbol(r+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${An({clipPath:e?`inset(0 0 0 ${100-(n-r)*100}%)`:`inset(0 ${100-(n-r)*100}% 0 0)`})}
                  >
                    ${pr(this.getSymbol(r+1,!0))}
                  </div>
                </span>
              `:A`
              <span
                class=${Ve({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(n)===r+1,"symbol-active":n>=r+1})}
                role="presentation"
              >
                ${pr(this.getSymbol(r+1,i))}
              </span>
            `})}
        </span>
      </div>
    `}};tn.css=[mn,wb];l([he(".rating")],tn.prototype,"rating",2);l([ge()],tn.prototype,"hoverValue",2);l([ge()],tn.prototype,"isHovering",2);l([p()],tn.prototype,"label",2);l([p({type:Number})],tn.prototype,"value",2);l([p({type:Number})],tn.prototype,"max",2);l([p({type:Number})],tn.prototype,"precision",2);l([p({type:Boolean,reflect:!0})],tn.prototype,"readonly",2);l([p({type:Boolean,reflect:!0})],tn.prototype,"disabled",2);l([p()],tn.prototype,"getSymbol",2);l([p({reflect:!0})],tn.prototype,"size",2);l([Bo({passive:!0})],tn.prototype,"handleTouchMove",1);l([ye("hoverValue")],tn.prototype,"handleHoverValueChange",1);l([ye("isHovering")],tn.prototype,"handleIsHoveringChange",1);tn=l([fe("wa-rating")],tn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var xb=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Gr=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const n=t.getTime()-e.getTime(),{unit:r,value:i}=xb.find(o=>Math.abs(n)<o.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(n/i),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;r==="minute"?o=io("second"):r==="hour"?o=io("minute"):r==="day"?o=io("hour"):o=io("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),o)}return A`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};l([ge()],Gr.prototype,"isoTime",2);l([ge()],Gr.prototype,"relativeTime",2);l([p()],Gr.prototype,"date",2);l([p()],Gr.prototype,"format",2);l([p()],Gr.prototype,"numeric",2);l([p({type:Boolean})],Gr.prototype,"sync",2);Gr=l([fe("wa-relative-time")],Gr);function io(e){const n={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return n-Date.now()%n}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var kb=class extends Event{constructor(e){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Ib=`:host {
  display: contents;
}
`,Ta=class extends De{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.dispatchEvent(new kb({entries:e}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(n=>this.resizeObserver.unobserve(n)),this.observedElements=[],t.forEach(n=>{this.resizeObserver.observe(n),this.observedElements.push(n)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ta.css=Ib;l([p({type:Boolean,reflect:!0})],Ta.prototype,"disabled",2);l([ye("disabled",{waitUntilFirstUpdate:!0})],Ta.prototype,"handleDisabledChange",1);Ta=l([fe("wa-resize-observer")],Ta);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Cb=`:host {
  --shadow-color: var(--wa-color-surface-default);
  --shadow-size: 2rem;

  /* private (defined dynamically) */
  --start-shadow-opacity: 0;
  --end-shadow-opacity: 0;

  display: block;
  position: relative;
  max-width: 100%;
  isolation: isolate;
}

:host([orientation='vertical']) {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#content {
  z-index: 1; /* below shadows */
  border-radius: inherit;
  scroll-behavior: smooth;
  scrollbar-width: thin;

  /* Prevent text in mobile Safari from being larger when the container width larger than the viewport */
  -webkit-text-size-adjust: 100%;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}

:host([without-scrollbar]) #content {
  scrollbar-width: none;
}

:host([orientation='horizontal']) #content {
  overflow-x: auto;
  overflow-y: hidden;
}

:host([orientation='vertical']) #content {
  flex: 1 1 auto;
  min-height: 0; /* This is crucial for flex children to respect overflow */
  overflow-x: hidden;
  overflow-y: auto;
}

/* Horizontal shadows */
:host([orientation='horizontal']) {
  #start-shadow,
  #end-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--shadow-size);
    pointer-events: none;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
  }

  #start-shadow {
    &:dir(ltr) {
      left: 0;
      background: linear-gradient(to right, var(--shadow-color), transparent 100%);
    }

    &:dir(rtl) {
      right: 0;
      background: linear-gradient(to left, var(--shadow-color), transparent 100%);
    }
  }

  #end-shadow {
    &:dir(ltr) {
      right: 0;
      background: linear-gradient(to left, var(--shadow-color), transparent 100%);
    }

    &:dir(rtl) {
      left: 0;
      background: linear-gradient(to right, var(--shadow-color), transparent 100%);
    }
  }
}

/* Vertical shadows */
:host([orientation='vertical']) {
  #start-shadow,
  #end-shadow {
    position: absolute;
    z-index: 2;
    right: 0;
    left: 0;
    height: var(--shadow-size);
    pointer-events: none;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
  }

  #start-shadow {
    top: 0;
    background: linear-gradient(to bottom, var(--shadow-color), transparent 100%);
  }

  #end-shadow {
    bottom: 0;
    background: linear-gradient(to top, var(--shadow-color), transparent 100%);
  }
}
`,Pr=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(e){e.key==="Home"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),e.key==="End"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const e=Math.ceil(this.content.clientWidth),t=Math.abs(Math.ceil(this.content.scrollLeft)),r=Math.ceil(this.content.scrollWidth)-e;this.canScroll=r>0;const i=Math.min(1,t/(r*.05)),o=Math.min(1,(r-t)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(i||0)),this.style.setProperty("--end-shadow-opacity",String(o||0))}else{const e=Math.ceil(this.content.clientHeight),t=Math.abs(Math.ceil(this.content.scrollTop)),r=Math.ceil(this.content.scrollHeight)-e;this.canScroll=r>0;const i=Math.min(1,t/(r*.05)),o=Math.min(1,(r-t)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(i||0)),this.style.setProperty("--end-shadow-opacity",String(o||0))}}render(){return A`
      ${this.withoutShadow?"":A`
            <div id="start-shadow" part="start-shadow" aria-hidden="true"></div>
            <div id="end-shadow" part="end-shadow" aria-hidden="true"></div>
          `}

      <div
        id="content"
        part="content"
        role="region"
        aria-label=${this.localize.term("scrollableRegion")}
        aria-orientation=${this.orientation}
        tabindex=${this.canScroll?"0":"-1"}
        @keydown=${this.handleKeyDown}
        @scroll=${this.updateScroll}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Pr.css=[Cb];l([he("#content")],Pr.prototype,"content",2);l([ge()],Pr.prototype,"canScroll",2);l([p({reflect:!0})],Pr.prototype,"orientation",2);l([p({attribute:"without-scrollbar",type:Boolean,reflect:!0})],Pr.prototype,"withoutScrollbar",2);l([p({attribute:"without-shadow",type:Boolean,reflect:!0})],Pr.prototype,"withoutShadow",2);l([Bo({passive:!0})],Pr.prototype,"updateScroll",1);Pr=l([fe("wa-scroller")],Pr);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Sb=`:host {
  --tag-max-size: 10ch;
  --show-duration: 100ms;
  --hide-duration: 100ms;
}

/* Add ellipses to multi select options */
:host wa-tag::part(content) {
  display: initial;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: var(--tag-max-size);
}

:host .disabled [part~='combobox'] {
  opacity: 0.5;
  cursor: not-allowed;
  outline: none;
}

:host .enabled:is(.open, :focus-within) [part~='combobox'] {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/** The popup */
.select {
  flex: 1 1 auto;
  display: inline-flex;
  width: 100%;
  position: relative;
  vertical-align: middle;

  /* Pass through from select to the popup */
  --show-duration: inherit;
  --hide-duration: inherit;

  &::part(popup) {
    z-index: 900;
  }

  &[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  &[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }
}

/* Combobox */
.combobox {
  flex: 1;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  justify-content: start;

  min-height: var(--wa-form-control-height);

  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-form-control-border-style);
  border-width: var(--wa-form-control-border-width);
  color: var(--wa-form-control-value-color);
  cursor: pointer;
  font-family: inherit;
  font-weight: var(--wa-form-control-value-font-weight);
  line-height: var(--wa-form-control-value-line-height);
  overflow: hidden;
  padding: 0 var(--wa-form-control-padding-inline);
  position: relative;
  vertical-align: middle;
  width: 100%;
  transition:
    background-color var(--wa-transition-normal),
    border var(--wa-transition-normal),
    outline var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);

  :host([multiple]) .select:not(.placeholder-visible) & {
    padding-inline-start: 0;
    padding-block: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));
  }

  /* Pills */
  :host([pill]) & {
    border-radius: var(--wa-border-radius-pill);
  }
}

/* Appearance modifiers */
:host([appearance='outlined']) .combobox {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance='filled']) .combobox {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance='filled-outlined']) .combobox {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-form-control-border-color);
}

.display-input {
  position: relative;
  width: 100%;
  font: inherit;
  border: none;
  background: none;
  line-height: var(--wa-form-control-value-line-height);
  color: var(--wa-form-control-value-color);
  cursor: inherit;
  overflow: hidden;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--wa-form-control-placeholder-color);
  }
}

/* Visually hide the display input when multiple is enabled */
:host([multiple]) .select:not(.placeholder-visible) .display-input {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.value-input {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding: 0;
  margin: 0;
}

.tags {
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
  margin-inline-start: 0.25em;
  gap: 0.25em;

  &::slotted(wa-tag) {
    cursor: pointer !important;
  }

  .disabled &,
  .disabled &::slotted(wa-tag) {
    cursor: not-allowed !important;
  }
}

/* Start and End */

.start,
.end {
  flex: 0;
  display: inline-flex;
  align-items: center;
  color: var(--wa-color-neutral-on-quiet);
}

.end::slotted(*) {
  margin-inline-start: var(--wa-form-control-padding-inline);
}

.start::slotted(*) {
  margin-inline-end: var(--wa-form-control-padding-inline);
}

:host([multiple]) .start::slotted(*) {
  margin-inline: var(--wa-form-control-padding-inline);
}

/* Clear button */
[part~='clear-button'] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: var(--wa-color-neutral-on-quiet);
  border: none;
  background: none;
  padding: 0;
  transition: color var(--wa-transition-normal);
  cursor: pointer;
  margin-inline-start: var(--wa-form-control-padding-inline);

  &:focus {
    outline: none;
  }

  @media (hover: hover) {
    &:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  &:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }
}

/* Expand icon */
.expand-icon {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  color: var(--wa-color-neutral-on-quiet);
  transition: rotate var(--wa-transition-slow) ease;
  rotate: 0deg;
  margin-inline-start: var(--wa-form-control-padding-inline);

  .open & {
    rotate: -180deg;
  }
}

/* Listbox */
.listbox {
  display: block;
  position: relative;
  font: inherit;
  box-shadow: var(--wa-shadow-m);
  background: var(--wa-color-surface-raised);
  border-color: var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
  padding-block: 0.5em;
  padding-inline: 0;
  overflow: auto;
  overscroll-behavior: none;

  /* Make sure it adheres to the popup's auto size */
  max-width: var(--auto-size-available-width);
  max-height: var(--auto-size-available-height);

  &::slotted(wa-divider) {
    --spacing: 0.5em;
  }
}

slot:not([name])::slotted(small) {
  display: block;
  font-size: var(--wa-font-size-smaller);
  font-weight: var(--wa-font-weight-semibold);
  color: var(--wa-color-text-quiet);
  padding-block: 0.5em;
  padding-inline: 2.25em;
}
`,Xe=class extends xt{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new Pn(this,"hint","label"),this.localize=new ot(this),this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.form=null,this.required=!1,this.getTag=e=>A`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,n=t.closest('[part~="clear-button"]')!==null,r=t.closest("wa-button")!==null;if(!(n||r)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),o=i.indexOf(this.currentOption);let a=Math.max(0,o);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(a=o+1,a>i.length-1&&(a=0)):e.key==="ArrowUp"?(a=o-1,a<0&&(a=i.length-1)):e.key==="Home"?a=0:e.key==="End"&&(a=i.length-1),this.setCurrentOption(i[a])}if(e.key?.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of i)if(o.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){const e=[Wo({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(e){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]),this._value=e??null,this.value!==t&&(this.valueHasChanged=!0,this.requestUpdate("value",t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),e==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(n=>!n.disabled).map(n=>n.value));let t=e;return e!=null&&(t=e.filter(n=>this.optionValues.has(n)),t=this.multiple?t:t[0],t=t??null),t}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const t=this.getAllOptions().filter(n=>n.hasAttribute("selected")||n.defaultSelected);if(t.length>0){const n=t.map(r=>r.value);this._defaultValue=this.multiple?n:n[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){const n=e.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="wa-button");this.disabled||n||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==null&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new gu),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const n=e.target.closest("wa-option");n&&!n.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(n):this.setSelectedOptions(n),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);const n=e.filter(r=>t.includes(r.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;let n=t;if(!n){const r=e.target.closest("wa-tag[part~=tag]");if(r){const i=this.shadowRoot?.querySelector('[part="tags"]');if(i){const a=Array.from(i.children).indexOf(r);a>=0&&a<this.selectedOptions.length&&(n=this.selectedOptions[a])}}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(e){this.getAllOptions().forEach(n=>{n.current=!1,n.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(r=>{n.includes(r)||(r.selected=!1)}),n.length&&n.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){const e=this.getAllOptions();this.selectedOptions=e.filter(n=>{if(!this.hasInteracted&&!this.valueHasChanged){const r=this.defaultValue,i=Array.isArray(r)?r:[r];return n.hasAttribute("selected")||n.defaultSelected||n.selected||i?.includes(n.value)}return n.selected});let t=new Set(this.selectedOptions.map(n=>n.value));if(t.size>0||this._value){const n=this._value;if(this._value==null){let r=this.defaultValue??[];this._value=Array.isArray(r)?r:[r]}this._value=this._value?.filter(r=>!this.optionValues?.has(r))??null,this._value?.unshift(...t),this.requestUpdate("value",n)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.displayLabel=n?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const n=this.getTag(e,t);return n?typeof n=="string"?pr(n):n:null}else if(t===this.maxOptionsVisible)return A`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(r=>t.includes(r.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await yt(this.popup.popup,"show"),this.currentOption&&qs(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Ii)}else{const e=new Ci;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await yt(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new ki)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Jn(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Jn(this,"wa-after-hide")}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||$d)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,o=!!(this.placeholder&&(!this.value||this.value.length===0));return A`
      <div
        part="form-control"
        class=${Ve({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class="label"
          aria-hidden=${n?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Ve({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":o})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?A`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${i?A`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Ve({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};Xe.css=[Sb,Rr,mn];l([he(".select")],Xe.prototype,"popup",2);l([he(".combobox")],Xe.prototype,"combobox",2);l([he(".display-input")],Xe.prototype,"displayInput",2);l([he(".value-input")],Xe.prototype,"valueInput",2);l([he(".listbox")],Xe.prototype,"listbox",2);l([ge()],Xe.prototype,"displayLabel",2);l([ge()],Xe.prototype,"currentOption",2);l([ge()],Xe.prototype,"selectedOptions",2);l([ge()],Xe.prototype,"optionValues",2);l([p()],Xe.prototype,"name",2);l([p({attribute:!1})],Xe.prototype,"defaultValue",1);l([p({attribute:"value",reflect:!1})],Xe.prototype,"value",1);l([p({reflect:!0})],Xe.prototype,"size",2);l([p()],Xe.prototype,"placeholder",2);l([p({type:Boolean,reflect:!0})],Xe.prototype,"multiple",2);l([p({attribute:"max-options-visible",type:Number})],Xe.prototype,"maxOptionsVisible",2);l([p({type:Boolean})],Xe.prototype,"disabled",2);l([p({attribute:"with-clear",type:Boolean})],Xe.prototype,"withClear",2);l([p({type:Boolean,reflect:!0})],Xe.prototype,"open",2);l([p({reflect:!0})],Xe.prototype,"appearance",2);l([p({type:Boolean,reflect:!0})],Xe.prototype,"pill",2);l([p()],Xe.prototype,"label",2);l([p({reflect:!0})],Xe.prototype,"placement",2);l([p({attribute:"hint"})],Xe.prototype,"hint",2);l([p({attribute:"with-label",type:Boolean})],Xe.prototype,"withLabel",2);l([p({attribute:"with-hint",type:Boolean})],Xe.prototype,"withHint",2);l([p({reflect:!0})],Xe.prototype,"form",2);l([p({type:Boolean,reflect:!0})],Xe.prototype,"required",2);l([p({attribute:!1})],Xe.prototype,"getTag",2);l([ye("disabled",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleDisabledChange",1);l([ye("value",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleValueChange",1);l([ye("open",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleOpenChange",1);Xe=l([fe("wa-select")],Xe);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Eb=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},Ab=`@layer wa-component {
  :host {
    display: inline-flex;
    gap: 0.5em;
    border-radius: var(--wa-border-radius-m);
    align-items: center;
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    font-size: inherit;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    height: calc(var(--wa-form-control-height) * 0.8);
    line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
    padding: 0 0.75em;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
  }

  :host([appearance='filled']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
  }

  :host([appearance='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
  }
}

.content {
  font-size: var(--wa-font-size-smaller);
}

[part='remove-button'] {
  color: inherit;
  line-height: 1;
}

[part='remove-button']::part(base) {
  padding: 0;
  height: 1em;
  width: 1em;
}

@media (hover: hover) {
  :host(:hover) > [part='remove-button']::part(base) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }
}

:host(:active) > [part='remove-button']::part(base) {
  color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
}

/*
 * Pill modifier
 */
:host([pill]) {
  border-radius: var(--wa-border-radius-pill);
}
`,Kr=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new Eb)}render(){return A`
      <slot part="content" class="content"></slot>

      ${this.withRemove?A`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};Kr.css=[Ab,Fa,mn];l([p({reflect:!0})],Kr.prototype,"variant",2);l([p({reflect:!0})],Kr.prototype,"appearance",2);l([p({reflect:!0})],Kr.prototype,"size",2);l([p({type:Boolean,reflect:!0})],Kr.prototype,"pill",2);l([p({attribute:"with-remove",type:Boolean})],Kr.prototype,"withRemove",2);Kr=l([fe("wa-tag")],Kr);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function Ca(e,t=0){if(!e||!globalThis.Node)return"";if(typeof e[Symbol.iterator]=="function")return(Array.isArray(e)?e:[...e]).map(i=>Ca(i,--t)).join("");let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??"";if(n.nodeType===Node.ELEMENT_NODE){let r=n;if(r.hasAttribute("slot")||r.matches("style, script"))return"";if(r instanceof HTMLSlotElement){let i=r.assignedNodes({flatten:!0});if(i.length>0)return Ca(i,--t)}return t>-1?Ca(r,--t):r.textContent??""}return n.hasChildNodes()?Ca(n.childNodes,--t):""}var $b=`:host {
  display: block;
  color: var(--wa-color-text-normal);
  -webkit-user-select: none;
  user-select: none;

  position: relative;
  display: flex;
  align-items: center;
  font: inherit;
  padding: 0.5em 1em 0.5em 0.25em;
  line-height: var(--wa-line-height-condensed);
  transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
  cursor: pointer;
}

:host(:focus) {
  outline: none;
}

@media (hover: hover) {
  :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {
    background-color: var(--wa-color-neutral-fill-normal);
    color: var(--wa-color-neutral-on-normal);
  }
}

:host(:state(current)),
:host([disabled]:state(current)) {
  background-color: var(--wa-color-brand-fill-loud);
  color: var(--wa-color-brand-on-loud);
  opacity: 1;
}

:host([disabled]) {
  outline: none;
  opacity: 0.5;
  cursor: not-allowed;
}

.label {
  flex: 1 1 auto;
  display: inline-block;
}

.check {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--wa-font-size-smaller);
  visibility: hidden;
  width: 2em;
}

:host(:state(selected)) .check {
  visibility: visible;
}

.start,
.end {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.start::slotted(*) {
  margin-inline-end: 0.5em;
}

.end::slotted(*) {
  margin-inline-start: 0.5em;
}

@media (forced-colors: active) {
  :host(:hover:not([aria-disabled='true'])) {
    outline: dashed 1px SelectedItem;
    outline-offset: -1px;
  }
}
`,nr=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=e=>{e.type==="mouseenter"?this.customStates.set("hover",!0):e.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(e){const t=this._label;this._label=e||"",this._label!==t&&this.requestUpdate("label",t)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?customElements.whenDefined("wa-select").then(()=>{const e=this.closest("wa-select");e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())}):this.isInitialized=!0}willUpdate(e){if(e.has("defaultSelected")&&!this.closest("wa-select")?.hasInteracted){const t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}super.willUpdate(e)}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),e.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),e.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let e=this.defaultLabel;this.defaultLabel=Ca(this).trim();let t=this.defaultLabel!==e;return!this._label&&t&&this.requestUpdate("label",e),t}render(){return A`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};nr.css=$b;l([he(".label")],nr.prototype,"defaultSlot",2);l([ge()],nr.prototype,"current",2);l([p({reflect:!0})],nr.prototype,"value",2);l([p({type:Boolean})],nr.prototype,"disabled",2);l([p({type:Boolean,attribute:!1})],nr.prototype,"selected",2);l([p({type:Boolean,attribute:"selected"})],nr.prototype,"defaultSelected",2);l([p()],nr.prototype,"label",1);l([ge()],nr.prototype,"defaultLabel",2);nr=l([fe("wa-option")],nr);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var _b=`:host {
  --color: var(--wa-color-neutral-fill-normal);
  --sheen-color: color-mix(in oklab, var(--color), var(--wa-color-surface-raised));

  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 1rem;
}

.indicator {
  flex: 1 1 auto;
  background: var(--color);
  border-radius: var(--wa-border-radius-pill);
}

:host([effect='sheen']) .indicator {
  background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
  background-size: 400% 100%;
  animation: sheen 8s ease-in-out infinite;
}

:host([effect='pulse']) .indicator {
  animation: pulse 2s ease-in-out 0.5s infinite;
}

/* Forced colors mode */
@media (forced-colors: active) {
  :host {
    --color: GrayText;
  }
}

@keyframes sheen {
  0% {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
`,To=class extends De{constructor(){super(...arguments),this.effect="none"}render(){return A` <div part="indicator" class="indicator"></div> `}};To.css=_b;l([p({reflect:!0})],To.prototype,"effect",2);To=l([fe("wa-skeleton")],To);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Ob=()=>{const e=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(t){const n={message:"",isValid:!0,invalidKeys:[]},r=(i,o,a,c)=>{const f=document.createElement("input");return f.type="range",f.min=String(o),f.max=String(a),f.step=String(c),f.value=String(i),f.checkValidity(),f.validationMessage};if(t.required&&!t.hasInteracted)return n.isValid=!1,n.invalidKeys.push("valueMissing"),n.message=e.validationMessage||"Please fill out this field.",n;if(t.isRange){const i=t.minValue,o=t.maxValue;if(i<t.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=r(i,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,n;if(o>t.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=r(o,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,n;if(t.step&&t.step!==1){const a=(i-t.min)%t.step!==0,c=(o-t.min)%t.step!==0;if(a||c){n.isValid=!1,n.invalidKeys.push("stepMismatch");const f=a?i:o;return n.message=r(f,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,n}}}else{const i=t.value;if(i<t.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=r(i,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,n;if(i>t.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=r(i,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,n;if(t.step&&t.step!==1&&(i-t.min)%t.step!==0)return n.isValid=!1,n.invalidKeys.push("stepMismatch"),n.message=r(i,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,n}return n}}},Tb=`:host {
  --track-size: 0.5em;
  --thumb-width: 1.4em;
  --thumb-height: 1.4em;
  --marker-width: 0.1875em;
  --marker-height: 0.1875em;
}

:host([orientation='vertical']) {
  width: auto;
}

#label:has(~ .vertical) {
  display: block;
  order: 2;
  max-width: none;
  text-align: center;
}

#description:has(~ .vertical) {
  order: 3;
  text-align: center;
}

/* Add extra space between slider and label, when present */
#label:has(*:not(:empty)) ~ #slider {
  &.horizontal {
    margin-block-start: 0.5em;
  }
  &.vertical {
    margin-block-end: 0.5em;
  }
}

#slider {
  touch-action: none;

  &:focus {
    outline: none;
  }

  &:focus-visible:not(.disabled) #thumb,
  &:focus-visible:not(.disabled) #thumb-min,
  &:focus-visible:not(.disabled) #thumb-max {
    outline: var(--wa-focus-ring);
    /* intentionally no offset due to border */
  }
}

#track {
  position: relative;
  border-radius: 9999px;
  background: var(--wa-color-neutral-fill-normal);
  isolation: isolate;
}

/* Orientation */
.horizontal #track {
  height: var(--track-size);
}

.vertical #track {
  order: 1;
  width: var(--track-size);
  height: 200px;
}

/* Disabled */
.disabled #track {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Indicator */
#indicator {
  position: absolute;
  border-radius: inherit;
  background-color: var(--wa-form-control-activated-color);

  &:dir(ltr) {
    right: calc(100% - max(var(--start), var(--end)));
    left: min(var(--start), var(--end));
  }

  &:dir(rtl) {
    right: min(var(--start), var(--end));
    left: calc(100% - max(var(--start), var(--end)));
  }
}

.horizontal #indicator {
  top: 0;
  height: 100%;
}

.vertical #indicator {
  top: calc(100% - var(--end));
  bottom: var(--start);
  left: 0;
  width: 100%;
}

/* Thumbs */
#thumb,
#thumb-min,
#thumb-max {
  z-index: 3;
  position: absolute;
  width: var(--thumb-width);
  height: var(--thumb-height);
  border: solid 0.125em var(--wa-color-surface-default);
  border-radius: 50%;
  background-color: var(--wa-form-control-activated-color);
  cursor: pointer;
}

.disabled #thumb,
.disabled #thumb-min,
.disabled #thumb-max {
  cursor: inherit;
}

.horizontal #thumb,
.horizontal #thumb-min,
.horizontal #thumb-max {
  top: calc(50% - var(--thumb-height) / 2);

  &:dir(ltr) {
    right: auto;
    left: calc(var(--position) - var(--thumb-width) / 2);
  }

  &:dir(rtl) {
    right: calc(var(--position) - var(--thumb-width) / 2);
    left: auto;
  }
}

.vertical #thumb,
.vertical #thumb-min,
.vertical #thumb-max {
  bottom: calc(var(--position) - var(--thumb-height) / 2);
  left: calc(50% - var(--thumb-width) / 2);
}

/* Range-specific thumb styles */
:host([range]) {
  #thumb-min:focus-visible,
  #thumb-max:focus-visible {
    z-index: 4; /* Ensure focused thumb appears on top */
    outline: var(--wa-focus-ring);
    /* intentionally no offset due to border */
  }
}

/* Markers */
#markers {
  pointer-events: none;
}

.marker {
  z-index: 2;
  position: absolute;
  width: var(--marker-width);
  height: var(--marker-height);
  border-radius: 50%;
  background-color: var(--wa-color-surface-default);
}

.marker:first-of-type,
.marker:last-of-type {
  display: none;
}

.horizontal .marker {
  top: calc(50% - var(--marker-height) / 2);
  left: calc(var(--position) - var(--marker-width) / 2);
}

.vertical .marker {
  top: calc(var(--position) - var(--marker-height) / 2);
  left: calc(50% - var(--marker-width) / 2);
}

/* Marker labels */
#references {
  position: relative;

  slot {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  ::slotted(*) {
    color: var(--wa-color-text-quiet);
    font-size: 0.875em;
    line-height: 1;
  }
}

.horizontal {
  #references {
    margin-block-start: 0.5em;
  }
}

.vertical {
  display: flex;
  margin-inline: auto;

  #track {
    order: 1;
  }

  #references {
    order: 2;
    width: min-content;
    margin-inline-start: 0.75em;

    slot {
      flex-direction: column;
    }
  }
}

.vertical #references slot {
  flex-direction: column;
}
`,Ze=class extends xt{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new Pn(this,"hint","label"),this.localize=new ot(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.form=null,this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,Ob()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){e=Number(e)??this.minValue,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new Ja(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Ja(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Ja(this.track,{start:(e,t)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const n=this.getValueFromCoordinates(e,t),r=Math.abs(n-this.minValue),i=Math.abs(n-this.maxValue);if(r===i)if(n>this.maxValue)this.activeThumb="max";else if(n<this.minValue)this.activeThumb="min";else{const o=this.localize.dir()==="rtl",a=this.orientation==="vertical",c=a?t:e,f=this.lastTrackPosition||c;this.lastTrackPosition=c;const b=c>f!==o&&!a||c<f&&a;this.activeThumb=b?"max":"min"}else this.activeThumb=r<=i?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(e,t,this.activeThumb),this.showRangeTooltips()},move:(e,t)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,t,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Ja(this.slider,{start:(e,t)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(e,t),this.showTooltip()},move:(e,t)=>{this.setValueFromCoordinates(e,t)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(e){if(e.has("range")&&this.requestUpdate(),this.isRange?(e.has("minValue")||e.has("maxValue"))&&(this.minValue=Ye(this.minValue,this.min,this.maxValue),this.maxValue=Ye(this.maxValue,this.minValue,this.max),this.updateFormValue()):e.has("value")&&(this.value=Ye(this.value,this.min,this.max),this.setValue(String(this.value))),(e.has("min")||e.has("max"))&&(this.isRange?(this.minValue=Ye(this.minValue,this.min,this.max),this.maxValue=Ye(this.maxValue,this.min,this.max)):this.value=Ye(this.value,this.min,this.max)),e.has("disabled")&&this.customStates.set("disabled",this.disabled),e.has("disabled")||e.has("readonly")){const t=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(t),this.draggableThumbMax&&this.draggableThumbMax.toggle(t)),this.draggableTrack&&this.draggableTrack.toggle(t)}super.updated(e)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(e){const t=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length;return e=Math.round(e/this.step)*this.step,e=Ye(e,this.min,this.max),parseFloat(e.toFixed(t))}getPercentageFromValue(e){return(e-this.min)/(this.max-this.min)*100}getValueFromCoordinates(e,t){const n=this.localize.dir()==="rtl",r=this.orientation==="vertical",{top:i,right:o,bottom:a,left:c,height:f,width:b}=this.trackBoundingClientRect,C=r?t:e,x=r?{start:i,end:a,size:f}:{start:c,end:o,size:b},I=(r||n?x.end-C:C-x.start)/x.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*I)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const e=this.shadowRoot?.activeElement;e===this.thumbMin||e===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(e){const t=e.target;this.isRange?(t===this.thumbMin?this.activeThumb="min":t===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(e){const t=this.localize.dir()==="rtl",n=e.target;if(this.disabled||this.readonly||this.isRange&&(n===this.thumbMin?this.activeThumb="min":n===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const r=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let i=r;switch(e.key){case"ArrowUp":case(t?"ArrowLeft":"ArrowRight"):e.preventDefault(),i=this.clampAndRoundToStep(r+this.step);break;case"ArrowDown":case(t?"ArrowRight":"ArrowLeft"):e.preventDefault(),i=this.clampAndRoundToStep(r-this.step);break;case"Home":e.preventDefault(),i=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":e.preventDefault(),i=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":e.preventDefault();const o=Math.max(r+(this.max-this.min)/10,r+this.step);i=this.clampAndRoundToStep(o);break;case"PageDown":e.preventDefault();const a=Math.min(r-(this.max-this.min)/10,r-this.step);i=this.clampAndRoundToStep(a);break;case"Enter":bu(e,this);return}i!==r&&(this.isRange?(this.activeThumb==="min"?i>this.maxValue?(this.maxValue=i,this.minValue=i):this.minValue=Math.max(this.min,i):i<this.minValue?(this.minValue=i,this.maxValue=i):this.maxValue=Math.min(this.max,i),this.updateFormValue()):this.value=Ye(i,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(e){e.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(e,t){const n=this.value;this.value=this.getValueFromCoordinates(e,t),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(e,t,n){const r=this.getValueFromCoordinates(e,t),i=n==="min"?this.minValue:this.maxValue;n==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),i!==(n==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(e&&(e.open=!0),t&&(t.open=!1)):this.activeThumb==="max"&&(t&&(t.open=!0),e&&(e.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const e=this.shadowRoot?.getElementById("tooltip-thumb-min"),t=this.shadowRoot?.getElementById("tooltip-thumb-max");e&&(e.open=!1),t&&(t.open=!1)}updateFormValue(){if(this.isRange){const e=new FormData;e.append(this.name||"",String(this.minValue)),e.append(this.name||"",String(this.maxValue)),this.setValue(e)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const e=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=Ye(e,this.min,this.maxValue),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value-this.step);this.value=e}}stepUp(){if(this.isRange){const e=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=Ye(e,this.minValue,this.max),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value+this.step);this.value=e}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("hint"),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.hasSlotController.test("reference"),o=Ve({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),a=[];if(this.withMarkers)for(let v=this.min;v<=this.max;v+=this.step)a.push(this.getPercentageFromValue(v));const c=A`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${Ve({vh:!n})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,f=A`
      <div
        id="hint"
        part="hint"
        class=${Ve({"has-slotted":r})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,b=this.withMarkers?A`
          <div id="markers" part="markers">
            ${a.map(v=>A`<span part="marker" class="marker" style="--position: ${v}%"></span>`)}
          </div>
        `:"",C=i?A`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",x=(v,I)=>this.withTooltip?A`
            <wa-tooltip
              id=${`tooltip${v!=="thumb"?"-"+v:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${v}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(I):this.localize.number(I)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const v=Ye(this.getPercentageFromValue(this.minValue),0,100),I=Ye(this.getPercentageFromValue(this.maxValue),0,100);return A`
        ${c}

        <div id="slider" part="slider" class=${o}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(v,I)}%; --end: ${Math.max(v,I)}%"
            ></div>

            ${b}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${v}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style="--position: ${I}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${C} ${f}
        </div>

        ${x("thumb-min",this.minValue)} ${x("thumb-max",this.maxValue)}
      `}else{const v=Ye(this.getPercentageFromValue(this.value),0,100),I=Ye(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return A`
        ${c}

        <div
          id="slider"
          part="slider"
          class=${o}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${I}%; --end: ${v}%"
            ></div>

            ${b}
            <span id="thumb" part="thumb" style="--position: ${v}%"></span>
          </div>

          ${C} ${f}
        </div>

        ${x("thumb",this.value)}
      `}}};Ze.formAssociated=!0;Ze.observeSlots=!0;Ze.css=[mn,Rr,Tb];l([he("#slider")],Ze.prototype,"slider",2);l([he("#thumb")],Ze.prototype,"thumb",2);l([he("#thumb-min")],Ze.prototype,"thumbMin",2);l([he("#thumb-max")],Ze.prototype,"thumbMax",2);l([he("#track")],Ze.prototype,"track",2);l([he("#tooltip")],Ze.prototype,"tooltip",2);l([p()],Ze.prototype,"label",2);l([p({attribute:"hint"})],Ze.prototype,"hint",2);l([p({reflect:!0})],Ze.prototype,"name",2);l([p({type:Number,attribute:"min-value"})],Ze.prototype,"minValue",2);l([p({type:Number,attribute:"max-value"})],Ze.prototype,"maxValue",2);l([p({attribute:"value",reflect:!0,type:Number})],Ze.prototype,"defaultValue",2);l([ge()],Ze.prototype,"value",1);l([p({type:Boolean,reflect:!0})],Ze.prototype,"range",2);l([p({type:Boolean})],Ze.prototype,"disabled",2);l([p({type:Boolean,reflect:!0})],Ze.prototype,"readonly",2);l([p({reflect:!0})],Ze.prototype,"orientation",2);l([p({reflect:!0})],Ze.prototype,"size",2);l([p({attribute:"indicator-offset",type:Number})],Ze.prototype,"indicatorOffset",2);l([p({reflect:!0})],Ze.prototype,"form",2);l([p({type:Number})],Ze.prototype,"min",2);l([p({type:Number})],Ze.prototype,"max",2);l([p({type:Number})],Ze.prototype,"step",2);l([p({type:Boolean,reflect:!0})],Ze.prototype,"required",2);l([p({type:Boolean})],Ze.prototype,"autofocus",2);l([p({attribute:"tooltip-distance",type:Number})],Ze.prototype,"tooltipDistance",2);l([p({attribute:"tooltip-placement",reflect:!0})],Ze.prototype,"tooltipPlacement",2);l([p({attribute:"with-markers",type:Boolean})],Ze.prototype,"withMarkers",2);l([p({attribute:"with-tooltip",type:Boolean})],Ze.prototype,"withTooltip",2);l([p({attribute:!1})],Ze.prototype,"valueFormatter",2);Ze=l([fe("wa-slider")],Ze);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Lb=`:host {
  --divider-width: 0.25rem;
  --divider-hit-area: 0.75rem;
  --min: 0%;
  --max: 100%;

  display: grid;
}

.start,
.end {
  overflow: hidden;
}

.divider {
  flex: 0 0 var(--divider-width);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: var(--wa-color-neutral-border-normal);
  color: var(--wa-color-neutral-on-normal);
  z-index: 1;
}

.divider:focus {
  outline: none;
}

:host(:not([disabled])) .divider:focus-visible {
  outline: var(--wa-focus-ring);
}

:host([disabled]) .divider {
  cursor: not-allowed;
}

/* Horizontal */
:host(:not([orientation='vertical'], [disabled])) .divider {
  cursor: col-resize;
}

:host(:not([orientation='vertical'])) .divider::after {
  display: flex;
  content: '';
  position: absolute;
  height: 100%;
  left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
  width: var(--divider-hit-area);
}

/* Vertical */
:host([orientation='vertical']) {
  flex-direction: column;
}

:host([orientation='vertical']:not([disabled])) .divider {
  cursor: row-resize;
}

:host([orientation='vertical']) .divider::after {
  content: '';
  position: absolute;
  width: 100%;
  top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
  height: var(--divider-hit-area);
}

@media (forced-colors: active) {
  .divider {
    outline: solid 1px transparent;
  }
}
`,In=class extends De{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new ot(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),$a(this,{onMove:(n,r)=>{let i=this.orientation==="vertical"?r:n;this.primary==="end"&&(i=this.size-i),this.snap&&this.snap.split(" ").forEach(a=>{let c;a.endsWith("%")?c=this.size*(parseFloat(a)/100):c=parseFloat(a),t&&this.orientation==="horizontal"&&(c=this.size-c),i>=c-this.snapThreshold&&i<=c+this.snapThreshold&&(i=c)}),this.position=Ye(this.pixelsToPercentage(i),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const n=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&this.orientation==="horizontal"||e.key==="ArrowUp"&&this.orientation==="vertical")&&(t-=n),(e.key==="ArrowRight"&&this.orientation==="horizontal"||e.key==="ArrowDown"&&this.orientation==="vertical")&&(t+=n),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const r=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=r})}this.position=Ye(t,0,100)}}handleResize(e){const{width:t,height:n}=e[0].contentRect;this.size=this.orientation==="vertical"?n:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new vu)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",t=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",n=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.style||(this.style={}),this.primary==="end"?n&&this.orientation==="horizontal"?this.style[e]=`${r} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${r}`:n&&this.orientation==="horizontal"?this.style[e]=`${i} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${i}`,this.style[t]="",A`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${ze(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};In.css=Lb;l([he(".divider")],In.prototype,"divider",2);l([p({type:Number,reflect:!0})],In.prototype,"position",2);l([p({attribute:"position-in-pixels",type:Number})],In.prototype,"positionInPixels",2);l([p({reflect:!0})],In.prototype,"orientation",2);l([p({type:Boolean,reflect:!0})],In.prototype,"disabled",2);l([p()],In.prototype,"primary",2);l([p()],In.prototype,"snap",2);l([p({type:Number,attribute:"snap-threshold"})],In.prototype,"snapThreshold",2);l([ye("position")],In.prototype,"handlePositionChange",1);l([ye("positionInPixels")],In.prototype,"handlePositionInPixelsChange",1);l([ye("vertical")],In.prototype,"handleVerticalChange",1);In=l([fe("wa-split-panel")],In);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Db=`:host {
  --height: var(--wa-form-control-toggle-size);
  --width: calc(var(--height) * 1.75);
  --thumb-size: 0.75em;

  display: inline-flex;
  line-height: var(--wa-form-control-value-line-height);
}

label {
  position: relative;
  display: flex;
  align-items: center;
  font: inherit;
  color: var(--wa-form-control-value-color);
  vertical-align: middle;
  cursor: pointer;
}

.switch {
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width);
  height: var(--height);
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
  border-radius: var(--height);
  border-style: var(--wa-form-control-border-style);
  border-width: var(--wa-form-control-border-width);
  transition-property: translate, background, border-color, box-shadow;
  transition-duration: var(--wa-transition-normal);
  transition-timing-function: var(--wa-transition-easing);
}

.switch .thumb {
  aspect-ratio: 1 / 1;
  width: var(--thumb-size);
  height: var(--thumb-size);
  background-color: var(--wa-form-control-border-color);
  border-radius: 50%;
  translate: calc((var(--width) - var(--height)) / -2);
  transition: inherit;
}

.input {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
  pointer-events: none;
}

/* Focus */
label:not(.disabled) .input:focus-visible ~ .switch .thumb {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Checked */
.checked .switch {
  background-color: var(--wa-form-control-activated-color);
  border-color: var(--wa-form-control-activated-color);
}

.checked .switch .thumb {
  background-color: var(--wa-color-surface-default);
  translate: calc((var(--width) - var(--height)) / 2);
}

/* Disabled */
label:has(> :disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

[part~='label'] {
  display: inline-block;
  line-height: var(--height);
  margin-inline-start: 0.5em;
  user-select: none;
  -webkit-user-select: none;
}

:host([required]) [part~='label']::after {
  content: var(--wa-form-control-required-content);
  color: var(--wa-form-control-required-content-color);
  margin-inline-start: var(--wa-form-control-required-content-offset);
}

@media (forced-colors: active) {
  :checked:enabled + .switch:hover .thumb,
  :checked + .switch .thumb {
    background-color: ButtonText;
  }
}
`,Bt=class extends xt{constructor(){super(...arguments),this.hasSlotController=new Pn(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,Uo()]}get value(){return this._value??"on"}set value(e){this._value=e}firstUpdated(e){super.firstUpdated(e),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(e??"on",t)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,t=this.hint?!0:!!e;return A`
      <label
        part="base"
        class=${Ve({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${ze(this.value)}
          .checked=${Bi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${Ve({"has-slotted":t})}
        aria-hidden=${t?"false":"true"}
        >${this.hint}</slot
      >
    `}};Bt.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0};Bt.css=[Rr,mn,Db];l([he('input[type="checkbox"]')],Bt.prototype,"input",2);l([p()],Bt.prototype,"title",2);l([p({reflect:!0})],Bt.prototype,"name",2);l([p({reflect:!0})],Bt.prototype,"value",1);l([p({reflect:!0})],Bt.prototype,"size",2);l([p({type:Boolean})],Bt.prototype,"disabled",2);l([p({type:Boolean,attribute:!1})],Bt.prototype,"checked",2);l([p({type:Boolean,attribute:"checked",reflect:!0})],Bt.prototype,"defaultChecked",2);l([p({reflect:!0})],Bt.prototype,"form",2);l([p({type:Boolean,reflect:!0})],Bt.prototype,"required",2);l([p({attribute:"hint"})],Bt.prototype,"hint",2);l([p({attribute:"with-hint",type:Boolean})],Bt.prototype,"withHint",2);l([ye("defaultChecked")],Bt.prototype,"handleDefaultCheckedChange",1);l([ye(["checked"])],Bt.prototype,"handleStateChange",1);l([ye("disabled",{waitUntilFirstUpdate:!0})],Bt.prototype,"handleDisabledChange",1);Bt=l([fe("wa-switch")],Bt);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Pb=class extends Event{constructor(e){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Rb=class extends Event{constructor(e){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},zb=`:host {
  --indicator-color: var(--wa-color-brand-fill-loud);
  --track-color: var(--wa-color-neutral-fill-normal);
  --track-width: 0.125rem;

  display: block;
}

.tab-group {
  display: flex;
  border-radius: 0;
}

.tabs {
  display: flex;
  position: relative;
}

.indicator {
  position: absolute;
}

.tab-group-has-scroll-controls .nav-container {
  position: relative;
  padding: 0 1.5em;
}

.body {
  display: block;
}

.scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5em;
}

.scroll-button-start {
  inset-inline-start: 0;
}

.scroll-button-end {
  inset-inline-end: 0;
}

/*
   * Top
   */

.tab-group-top {
  flex-direction: column;
}

.tab-group-top .nav-container {
  order: 1;
}

.tab-group-top .nav {
  display: flex;
  overflow-x: auto;

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
}

/* Hide scrollbar in Chrome/Safari */
.tab-group-top .nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.tab-group-top .tabs {
  flex: 1 1 auto;
  position: relative;
  flex-direction: row;
  border-bottom: solid var(--track-width) var(--track-color);
}

.tab-group-top .indicator {
  bottom: calc(-1 * var(--track-width));
  border-bottom: solid var(--track-width) var(--indicator-color);
}

.tab-group-top .body {
  order: 2;
}

.tab-group-top ::slotted(wa-tab[active]) {
  border-block-end: solid var(--track-width) var(--indicator-color);
  margin-block-end: calc(-1 * var(--track-width));
}

.tab-group-top ::slotted(wa-tab-panel) {
  --padding: var(--wa-space-xl) 0;
}

/*
   * Bottom
   */

.tab-group-bottom {
  flex-direction: column;
}

.tab-group-bottom .nav-container {
  order: 2;
}

.tab-group-bottom .nav {
  display: flex;
  overflow-x: auto;

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
}

/* Hide scrollbar in Chrome/Safari */
.tab-group-bottom .nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.tab-group-bottom .tabs {
  flex: 1 1 auto;
  position: relative;
  flex-direction: row;
  border-top: solid var(--track-width) var(--track-color);
}

.tab-group-bottom .indicator {
  top: calc(-1 * var(--track-width));
  border-top: solid var(--track-width) var(--indicator-color);
}

.tab-group-bottom .body {
  order: 1;
}

.tab-group-bottom ::slotted(wa-tab[active]) {
  border-block-start: solid var(--track-width) var(--indicator-color);
  margin-block-start: calc(-1 * var(--track-width));
}

.tab-group-bottom ::slotted(wa-tab-panel) {
  --padding: var(--wa-space-xl) 0;
}

/*
   * Start
   */

.tab-group-start {
  flex-direction: row;
}

.tab-group-start .nav-container {
  order: 1;
}

.tab-group-start .tabs {
  flex: 0 0 auto;
  flex-direction: column;
  border-inline-end: solid var(--track-width) var(--track-color);
}

.tab-group-start .indicator {
  inset-inline-end: calc(-1 * var(--track-width));
  border-right: solid var(--track-width) var(--indicator-color);
}

.tab-group-start .body {
  flex: 1 1 auto;
  order: 2;
}

.tab-group-start ::slotted(wa-tab[active]) {
  border-inline-end: solid var(--track-width) var(--indicator-color);
  margin-inline-end: calc(-1 * var(--track-width));
}

.tab-group-start ::slotted(wa-tab-panel) {
  --padding: 0 var(--wa-space-xl);
}

/*
   * End
   */

.tab-group-end {
  flex-direction: row;
}

.tab-group-end .nav-container {
  order: 2;
}

.tab-group-end .tabs {
  flex: 0 0 auto;
  flex-direction: column;
  border-left: solid var(--track-width) var(--track-color);
}

.tab-group-end .indicator {
  inset-inline-start: calc(-1 * var(--track-width));
  border-inline-start: solid var(--track-width) var(--indicator-color);
}

.tab-group-end .body {
  flex: 1 1 auto;
  order: 1;
}

.tab-group-end ::slotted(wa-tab[active]) {
  border-inline-start: solid var(--track-width) var(--indicator-color);
  margin-inline-start: calc(-1 * var(--track-width));
}

.tab-group-end ::slotted(wa-tab-panel) {
  --padding: 0 var(--wa-space-xl);
}
`,Ln=class extends De{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ot(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(n=>!["aria-labelledby","aria-controls"].includes(n.attributeName))&&setTimeout(()=>this.setAriaLabels());const t=e.filter(n=>n.target.closest("wa-tab-group")===this);if(t.some(n=>n.attributeName==="disabled"))this.syncTabsAndPanels();else if(t.some(n=>n.attributeName==="active")){const r=t.filter(i=>i.attributeName==="active"&&i.target.tagName.toLowerCase()==="wa-tab").map(i=>i.target).find(i=>i.active);r&&r.closest("wa-tab-group")===this&&this.setActiveTab(r)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,n)=>{if(t[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const r=this.tabs.find(i=>i.panel===this.active);r&&this.setActiveTab(r)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});n.unobserve(t[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const n=e.target.closest("wa-tab");n?.closest("wa-tab-group")===this&&n!==null&&this.setActiveTab(n,{scrollBehavior:"smooth"})}handleKeyDown(e){const n=e.target.closest("wa-tab");if(n?.closest("wa-tab-group")===this){if(["Enter"," "].includes(e.key)){n!==null&&(this.setActiveTab(n,{scrollBehavior:"smooth"}),e.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.tabs.find(c=>c.matches(":focus")),o=this.localize.dir()==="rtl";let a=null;if(i?.tagName.toLowerCase()==="wa-tab"){if(e.key==="Home")a=this.focusableTabs[0];else if(e.key==="End")a=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const c=this.tabs.findIndex(f=>f===i);a=this.findNextFocusableTab(c,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const c=this.tabs.findIndex(f=>f===i);a=this.findNextFocusableTab(c,"forward")}if(!a)return;a.tabIndex=0,a.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(a,{scrollBehavior:"smooth"}):this.tabs.forEach(c=>{c.tabIndex=c===a?0:-1}),["top","bottom"].includes(this.placement)&&qs(a,this.nav,"horizontal"),e.preventDefault()}}}}findNextFocusableTab(e,t){let n=null;const r=t==="forward"?1:-1;let i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){t==="forward"?n=this.focusableTabs[0]:n=this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:"auto",...t},e.closest("wa-tab-group")===this&&e!==this.activeTab&&!e.disabled){const n=this.activeTab;this.active=e.panel,this.activeTab=e,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>r.active=r.name===this.activeTab?.panel),["top","bottom"].includes(this.placement)&&qs(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(n&&this.dispatchEvent(new Pb({name:n.panel})),this.dispatchEvent(new Rb({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(n=>n.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const e=this.tabs.find(t=>t.panel===this.active);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return A`
      <div
        part="base"
        class=${Ve({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?A`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${e?"chevron-right":"chevron-left"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToStart")}
                  ></wa-icon>
                </wa-button>
              `:""}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?A`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${e?"chevron-left":"chevron-right"}
                    library="system"
                    variant="solid"
                    label=${this.localize.term("scrollToEnd")}
                  ></wa-icon>
                </wa-button>
              `:""}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Ln.css=zb;l([he(".tab-group")],Ln.prototype,"tabGroup",2);l([he(".body")],Ln.prototype,"body",2);l([he(".nav")],Ln.prototype,"nav",2);l([ge()],Ln.prototype,"hasScrollControls",2);l([p({reflect:!0})],Ln.prototype,"active",2);l([p()],Ln.prototype,"placement",2);l([p()],Ln.prototype,"activation",2);l([p({attribute:"without-scroll-controls",type:Boolean})],Ln.prototype,"withoutScrollControls",2);l([ye("active")],Ln.prototype,"updateActiveTab",1);l([ye("withoutScrollControls",{waitUntilFirstUpdate:!0})],Ln.prototype,"updateScrollControls",1);Ln=l([fe("wa-tab-group")],Ln);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Mb=`:host {
  display: inline-block;
  color: var(--wa-color-neutral-on-quiet);
  font-weight: var(--wa-font-weight-action);
}

.tab {
  display: inline-flex;
  align-items: center;
  font: inherit;
  padding: 1em 1.5em;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  transition: color var(--wa-transition-fast) var(--wa-transition-easing);

  ::slotted(wa-icon:first-child) {
    margin-inline-end: 0.5em;
  }

  ::slotted(wa-icon:last-child) {
    margin-inline-start: 0.5em;
  }
}

@media (hover: hover) {
  :host(:hover:not([disabled])) .tab {
    color: currentColor;
  }
}

:host(:focus) {
  outline: transparent;
}

:host(:focus-visible) .tab {
  outline: var(--wa-focus-ring);
  outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
}

:host([active]:not([disabled])) {
  color: var(--wa-color-brand-on-quiet);
}

:host([disabled]) .tab {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (forced-colors: active) {
  :host([active]:not([disabled])) {
    outline: solid 1px transparent;
    outline-offset: -3px;
  }
}
`,Nb=0,yr=class extends De{constructor(){super(...arguments),this.attrId=++Nb,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,A`
      <div
        part="base"
        class=${Ve({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};yr.css=Mb;l([he(".tab")],yr.prototype,"tab",2);l([p({reflect:!0})],yr.prototype,"panel",2);l([p({type:Boolean,reflect:!0})],yr.prototype,"active",2);l([p({type:Boolean,reflect:!0})],yr.prototype,"disabled",2);l([p({type:Number,reflect:!0})],yr.prototype,"tabIndex",2);l([ye("active")],yr.prototype,"handleActiveChange",1);l([ye("disabled")],yr.prototype,"handleDisabledChange",1);yr=l([fe("wa-tab")],yr);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Fb=`:host {
  --padding: 0;

  display: none;
}

:host([active]) {
  display: block;
}

.tab-panel {
  display: block;
  padding: var(--padding);
}
`,qb=0,Gi=class extends De{constructor(){super(...arguments),this.attrId=++qb,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return A`
      <slot
        part="base"
        class=${Ve({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Gi.css=Fb;l([p({reflect:!0})],Gi.prototype,"name",2);l([p({type:Boolean,reflect:!0})],Gi.prototype,"active",2);l([ye("active")],Gi.prototype,"handleActiveChange",1);Gi=l([fe("wa-tab-panel")],Gi);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Vb=`:host {
  border-width: 0;
}

.textarea {
  display: grid;
  align-items: center;
  margin: 0;
  border: none;
  outline: none;
  cursor: inherit;
  font: inherit;
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-form-control-border-style);
  border-width: var(--wa-form-control-border-width);
  -webkit-appearance: none;

  &:focus-within {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }
}

/* Appearance modifiers */
:host([appearance='outlined']) .textarea {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance='filled']) .textarea {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance='filled-outlined']) .textarea {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-form-control-border-color);
}

textarea {
  display: block;
  width: 100%;
  border: none;
  background: transparent;
  font: inherit;
  color: inherit;
  padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
  min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  box-shadow: none;
  margin: 0;

  &::placeholder {
    color: var(--wa-form-control-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  &:autofill {
    &,
    &:hover,
    &:focus,
    &:active {
      box-shadow: none;
      caret-color: var(--wa-form-control-value-color);
    }
  }

  &:focus {
    outline: none;
  }
}

/* Shared textarea and size-adjuster positioning */
.control,
.size-adjuster {
  grid-area: 1 / 1 / 2 / 2;
}

.size-adjuster {
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  padding: 0;
}

textarea::-webkit-search-decoration,
textarea::-webkit-search-cancel-button,
textarea::-webkit-search-results-button,
textarea::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

/*
 * Resize types
 */

:host([resize='none']) textarea {
  resize: none;
}

textarea,
:host([resize='vertical']) textarea {
  resize: vertical;
}

:host([resize='horizontal']) textarea {
  resize: horizontal;
}

:host([resize='both']) textarea {
  resize: both;
}

:host([resize='auto']) textarea {
  height: auto;
  resize: none;
  overflow-y: hidden;
}
`,Qe=class extends xt{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new Pn(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Uo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const e=this.input.value;this.value=e}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(e){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(e){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const e=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${e}px`}if(this.input.style.height){const e=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${e}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(e){e.has("resize")&&this.setTextareaDimensions(),super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r="preserve"){const i=t??this.input.selectionStart,o=n??this.input.selectionEnd;this.input.setRangeText(e,i,o,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t;return A`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${ze(this.name)}
          .value=${Bi(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${ze(this.placeholder)}
          rows=${ze(this.rows)}
          minlength=${ze(this.minlength)}
          maxlength=${ze(this.maxlength)}
          autocapitalize=${ze(this.autocapitalize)}
          autocorrect=${ze(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${ze(this.spellcheck)}
          enterkeyhint=${ze(this.enterkeyhint)}
          inputmode=${ze(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize!=="auto"}></div>
      </div>

      <slot
        id="hint"
        name="hint"
        part="hint"
        aria-hidden=${r?"false":"true"}
        class=${Ve({"has-slotted":r})}
        >${this.hint}</slot
      >
    `}};Qe.css=[Vb,Rr,mn];l([he(".control")],Qe.prototype,"input",2);l([he('[part~="base"]')],Qe.prototype,"base",2);l([he(".size-adjuster")],Qe.prototype,"sizeAdjuster",2);l([p()],Qe.prototype,"title",2);l([p({reflect:!0})],Qe.prototype,"name",2);l([ge()],Qe.prototype,"value",1);l([p({attribute:"value",reflect:!0})],Qe.prototype,"defaultValue",2);l([p({reflect:!0})],Qe.prototype,"size",2);l([p({reflect:!0})],Qe.prototype,"appearance",2);l([p()],Qe.prototype,"label",2);l([p({attribute:"hint"})],Qe.prototype,"hint",2);l([p()],Qe.prototype,"placeholder",2);l([p({type:Number})],Qe.prototype,"rows",2);l([p({reflect:!0})],Qe.prototype,"resize",2);l([p({type:Boolean})],Qe.prototype,"disabled",2);l([p({type:Boolean,reflect:!0})],Qe.prototype,"readonly",2);l([p({reflect:!0})],Qe.prototype,"form",2);l([p({type:Boolean,reflect:!0})],Qe.prototype,"required",2);l([p({type:Number})],Qe.prototype,"minlength",2);l([p({type:Number})],Qe.prototype,"maxlength",2);l([p()],Qe.prototype,"autocapitalize",2);l([p()],Qe.prototype,"autocorrect",2);l([p()],Qe.prototype,"autocomplete",2);l([p({type:Boolean})],Qe.prototype,"autofocus",2);l([p()],Qe.prototype,"enterkeyhint",2);l([p({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Qe.prototype,"spellcheck",2);l([p()],Qe.prototype,"inputmode",2);l([p({attribute:"with-label",type:Boolean})],Qe.prototype,"withLabel",2);l([p({attribute:"with-hint",type:Boolean})],Qe.prototype,"withHint",2);l([ye("rows",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleRowsChange",1);l([ye("value",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleValueChange",1);Qe=l([fe("wa-textarea")],Qe);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Bb=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},Ub=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}},jb=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},Wb=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}},Hb=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}},Gb=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}},Kb=`:host {
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: block;
  color: var(--wa-color-text-normal);
  outline: 0;
  z-index: 0;
}

:host(:focus) {
  outline: none;
}

slot:not([name])::slotted(wa-icon) {
  margin-inline-end: var(--wa-space-xs);
}

.tree-item {
  position: relative;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  cursor: default;
  user-select: none;
  -webkit-user-select: none;
}

.checkbox {
  line-height: var(--wa-form-control-value-line-height);
  pointer-events: none;
}

.expand-button,
.checkbox,
.label {
  font-family: inherit;
  font-size: var(--wa-font-size-m);
  font-weight: inherit;
}

.checkbox::part(base) {
  display: flex;
  align-items: center;
}

.indentation {
  display: block;
  width: 1em;
  flex-shrink: 0;
}

.expand-button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wa-color-text-quiet);
  width: 2em;
  height: 2em;
  flex-shrink: 0;
  cursor: pointer;
}

.expand-button {
  transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
}

.tree-item-expanded .expand-button {
  rotate: 90deg;
}

.tree-item-expanded:dir(rtl) .expand-button {
  rotate: -90deg;
}

.tree-item-expanded slot[name='expand-icon'],
.tree-item:not(.tree-item-expanded) slot[name='collapse-icon'] {
  display: none;
}

.tree-item:not(.tree-item-has-expand-button) .expand-icon-slot {
  display: none;
}

.expand-button-visible {
  cursor: pointer;
}

.item {
  display: flex;
  align-items: center;
  border-inline-start: solid 3px transparent;
}

:host([disabled]) .item {
  opacity: 0.5;
  outline: none;
  cursor: not-allowed;
}

:host(:focus-visible) .item {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
  z-index: 2;
}

:host(:not([aria-disabled='true'])) .tree-item-selected .item {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-inline-start-color: var(--wa-color-brand-fill-loud);
}

:host(:not([aria-disabled='true'])) .expand-button {
  color: var(--wa-color-text-quiet);
}

.label {
  display: flex;
  align-items: center;
  transition: color var(--wa-transition-normal) var(--wa-transition-easing);
}

.children {
  display: block;
  font-size: calc(1em + var(--indent-size, var(--wa-space-m)));
}

/* Indentation lines */
.children {
  position: relative;
}

.children::before {
  content: '';
  position: absolute;
  top: var(--indent-guide-offset);
  bottom: var(--indent-guide-offset);
  inset-inline-start: calc(1em - (var(--indent-guide-width) / 2) - 1px);
  border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
  z-index: 1;
}

@media (forced-colors: active) {
  :host(:not([aria-disabled='true'])) .tree-item-selected .item {
    outline: dashed 1px SelectedItem;
  }
}
`,st=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new jb);const e=So(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await Co(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new Bb)}isNestedItem(){const e=this.parentElement;return!!e&&st.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new Wb),this.childrenContainer.hidden=!1;const e=So(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await Co(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new Ub)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new Gb)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new Hb)}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>st.isTreeItem(t)&&(e||!t.disabled)):[]}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return A`
      <div
        part="base"
        class="${Ve({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-has-expand-button":t})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${Ve({"expand-button":!0,"expand-button-visible":t})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${vn(this.loading,()=>A` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `)}
              <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${vn(this.selectable,()=>A`
              <wa-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Bi(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `)}

          <slot class="label" part="label"></slot>
        </div>

        <div class="children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};st.css=Kb;l([ge()],st.prototype,"indeterminate",2);l([ge()],st.prototype,"isLeaf",2);l([ge()],st.prototype,"loading",2);l([ge()],st.prototype,"selectable",2);l([p({type:Boolean,reflect:!0})],st.prototype,"expanded",2);l([p({type:Boolean,reflect:!0})],st.prototype,"selected",2);l([p({type:Boolean,reflect:!0})],st.prototype,"disabled",2);l([p({type:Boolean,reflect:!0})],st.prototype,"lazy",2);l([he("slot:not([name])")],st.prototype,"defaultSlot",2);l([he("slot[name=children]")],st.prototype,"childrenSlot",2);l([he(".item")],st.prototype,"itemElement",2);l([he(".children")],st.prototype,"childrenContainer",2);l([he(".expand-button slot")],st.prototype,"expandButtonSlot",2);l([ye("loading",{waitUntilFirstUpdate:!0})],st.prototype,"handleLoadingChange",1);l([ye("disabled")],st.prototype,"handleDisabledChange",1);l([ye("expanded")],st.prototype,"handleExpandedState",1);l([ye("indeterminate")],st.prototype,"handleIndeterminateStateChange",1);l([ye("selected")],st.prototype,"handleSelectedChange",1);l([ye("expanded",{waitUntilFirstUpdate:!0})],st.prototype,"handleExpandedChange",1);l([ye("expanded",{waitUntilFirstUpdate:!0})],st.prototype,"handleExpandAnimation",1);l([ye("lazy",{waitUntilFirstUpdate:!0})],st.prototype,"handleLazyChange",1);st=l([fe("wa-tree-item")],st);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Yb=class extends Event{constructor(e){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Xb=`:host {
  /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
  --indent-guide-color: var(--wa-color-surface-border);
  --indent-guide-offset: 0;
  --indent-guide-style: solid;
  --indent-guide-width: 0;
  --indent-size: var(--wa-space-l);

  display: block;

  /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
  font-size: 0;
}
`;function gc(e,t=!1){function n(o){const a=o.getChildrenItems({includeDisabled:!1});if(a.length){const c=a.every(b=>b.selected),f=a.every(b=>!b.selected&&!b.indeterminate);o.selected=c,o.indeterminate=!c&&!f}}function r(o){const a=o.parentElement;st.isTreeItem(a)&&(n(a),r(a))}function i(o){for(const a of o.getChildrenItems())a.selected=t?o.selected||a.selected:!a.disabled&&o.selected,i(a);t&&n(o)}i(e),r(e)}var Yr=class extends De{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new ot(this),this.initTreeItem=e=>{e.updateComplete.then(()=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const n=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(n===null?e.append(r):n.hasAttribute("data-default")&&n.replaceWith(r))})})},this.handleTreeChanged=e=>{for(const t of e){const n=[...t.addedNodes].filter(st.isTreeItem),r=[...t.removedNodes].filter(st.isTreeItem);n.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),st.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}getExpandButtonIcon(e){const n=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(n){const r=n.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${e}-icon`,r}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),gc(e);else if(this.selection==="single"||e.isLeaf){const r=this.getAllTreeItems();for(const i of r)i.selected=i===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const n=this.selectedItems;(t.length!==n.length||n.some(r=>!t.includes(r)))&&Promise.all(n.map(r=>r.updateComplete)).then(()=>{this.dispatchEvent(new Yb({selection:n}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(e){e?.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(i=>["input","textarea"].includes(i?.tagName?.toLowerCase())))return;const t=this.getFocusableItems(),n=this.matches(":dir(ltr)"),r=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(f=>f.matches(":focus")),o=t[i],a=f=>{const b=t[Ye(f,0,t.length-1)];this.focusItem(b)},c=f=>{o.expanded=f};e.key==="ArrowDown"?a(i+1):e.key==="ArrowUp"?a(i-1):n&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?a(i+1):c(!0):n&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?a(i-1):c(!1):e.key==="Home"?a(0):e.key==="End"?a(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,n=t.closest("wa-tree-item"),r=e.composedPath().some(i=>i?.classList?.contains("expand-button"));!n||n.disabled||t!==this.clickTarget||(r?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const n of t)n.updateComplete.then(()=>{n.selectable=e});e&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(n=>{n.updateComplete.then(()=>{gc(n,!0)})}))}get selectedItems(){const e=this.getAllTreeItems(),t=n=>n.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(n=>{if(n.disabled)return!1;const r=n.parentElement?.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||t.has(r))&&t.add(n),!t.has(n)})}render(){return A`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Yr.css=Xb;l([he("slot:not([name])")],Yr.prototype,"defaultSlot",2);l([he("slot[name=expand-icon]")],Yr.prototype,"expandedIconSlot",2);l([he("slot[name=collapse-icon]")],Yr.prototype,"collapsedIconSlot",2);l([p()],Yr.prototype,"selection",2);l([ye("selection")],Yr.prototype,"handleSelectionChange",1);Yr=l([fe("wa-tree")],Yr);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Zb=`:host {
  display: block;
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  overflow: hidden;
  border-radius: var(--wa-border-radius-m);
}

#frame-container {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% / var(--zoom));
  height: calc(100% / var(--zoom));
  transform: scale(var(--zoom));
  transform-origin: 0 0;
}

#iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: inherit;
  /* Prevent the iframe from being selected, e.g. by a double click. Doesn't affect selection withing the iframe. */
  user-select: none;
  -webkit-user-select: none;
}

#controls {
  display: flex;
  position: absolute;
  bottom: 0.5em;
  align-items: center;
  font-weight: var(--wa-font-weight-semibold);
  padding: 0.25em 0.5em;
  gap: 0.5em;
  border-radius: var(--wa-border-radius-s);
  background: #000b;
  color: white;
  font-size: min(12px, 0.75em);
  user-select: none;
  -webkit-user-select: none;

  &:dir(ltr) {
    right: 0.5em;
  }

  &:dir(rtl) {
    left: 0.5em;
  }

  button {
    display: flex;
    align-items: center;
    padding: 0.25em;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  span {
    min-width: 4.5ch; /* extra space so numbers don't shift */
    font-variant-numeric: tabular-nums;
    text-align: center;
  }
}
`,Cn=class extends De{constructor(){super(...arguments),this.localize=new ot(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){return this.iframe?.contentWindow||null}get contentDocument(){return this.iframe?.contentDocument||null}parseZoomLevels(e){const t=xl(e),n=[];for(const r of t){let i;if(r.endsWith("%")){const o=parseFloat(r.slice(0,-1));if(!isNaN(o))i=Math.max(0,o/100);else continue}else if(i=parseFloat(r),!isNaN(i))i=Math.max(0,i);else continue;n.push(i)}return[...new Set(n)].sort((r,i)=>r-i)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let e=0,t=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let n=1;n<this.availableZoomLevels.length;n++){const r=Math.abs(this.availableZoomLevels[n]-this.zoom);r<t&&(t=r,e=n)}return e}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(e){if(e.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),e.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const t=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[t]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[t])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const e=this.getCurrentZoomIndex();e<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[e+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const e=this.getCurrentZoomIndex();e>0&&(this.zoom=this.availableZoomLevels[e-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return A`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${ze(this.sandbox??void 0)}
          src=${ze(this.src??void 0)}
          srcdoc=${ze(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?"":A`
            <div id="controls" part="controls">
              <button
                part="zoom-out-button"
                aria-label=${this.localize.term("zoomOut")}
                @click=${this.zoomOut}
                ?disabled=${this.isZoomOutDisabled()}
              >
                <slot name="zoom-out-icon">
                  <wa-icon name="minus" label="Zoom out"></wa-icon>
                </slot>
              </button>
              <span>${this.localize.number(this.zoom,{style:"percent",maximumFractionDigits:1})}</span>
              <button
                part="zoom-in-button"
                aria-label=${this.localize.term("zoomIn")}
                @click=${this.zoomIn}
                ?disabled=${this.isZoomInDisabled()}
              >
                <slot name="zoom-in-icon">
                  <wa-icon name="plus" label="Zoom in"></wa-icon>
                </slot>
              </button>
            </div>
          `}
    `}};Cn.css=Zb;l([he("#iframe")],Cn.prototype,"iframe",2);l([p()],Cn.prototype,"src",2);l([p()],Cn.prototype,"srcdoc",2);l([p({type:Boolean})],Cn.prototype,"allowfullscreen",2);l([p()],Cn.prototype,"loading",2);l([p()],Cn.prototype,"referrerpolicy",2);l([p()],Cn.prototype,"sandbox",2);l([p({type:Number,reflect:!0})],Cn.prototype,"zoom",2);l([p({attribute:"zoom-levels"})],Cn.prototype,"zoomLevels",2);l([p({type:Boolean,attribute:"without-controls",reflect:!0})],Cn.prototype,"withoutControls",2);l([p({type:Boolean,attribute:"without-interaction",reflect:!0})],Cn.prototype,"withoutInteraction",2);Cn=l([fe("wa-zoomable-frame")],Cn);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Jb=new MutationObserver(e=>{for(const{addedNodes:t}of e)for(const n of t)n.nodeType===Node.ELEMENT_NODE&&Ru(n)});function Qb(){Ru(document),Jb.observe(document.documentElement,{subtree:!0,childList:!0})}async function Ru(e){const t=e instanceof Element?e.tagName.toLowerCase():"",n=t?.startsWith("wa-"),r=[...e.querySelectorAll(":not(:defined)")].map(a=>a.tagName.toLowerCase()).filter(a=>a.startsWith("wa-"));n&&!customElements.get(t)&&r.push(t);const i=[...new Set(r)],o=await Promise.allSettled(i.map(a=>ev(a)));for(const a of o)a.status==="rejected"&&console.warn(a.reason);await new Promise(requestAnimationFrame),e.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function ev(e){if(customElements.get(e))return Promise.resolve();const t=e.replace(/^wa-/i,""),n=np(`components/${t}/${t}.js`);return new Promise((r,i)=>{import(n).then(()=>r()).catch(()=>i(new Error(`Unable to autoload <${e}> from ${n}`)))})}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */Qb();Promise.race([new Promise(e=>document.addEventListener("wa-discovery-complete",e)),new Promise(e=>setTimeout(e,2e3))]).then(()=>{document.querySelectorAll(".wa-cloak").forEach(e=>e.classList.remove("wa-cloak"))});su("fg",{resolver:(e,t,n)=>import.meta.resolve("/icon-libs/font-gis.svg")+`#fg-${e}`,mutator:e=>{e.setAttribute("fill","currentColor"),e.setAttribute("width","16"),e.setAttribute("height","16")},spriteSheet:!0});var mo={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var tv=mo.exports,bc;function nv(){return bc||(bc=1,(function(e){(function(t,n){e.exports?e.exports=n():t.Toastify=n()})(tv,function(t){var n=function(a){return new n.lib.init(a)},r="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:r,constructor:n,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||n.defaults.text,this.options.node=a.node||n.defaults.node,this.options.duration=a.duration===0?0:a.duration||n.defaults.duration,this.options.selector=a.selector||n.defaults.selector,this.options.callback=a.callback||n.defaults.callback,this.options.destination=a.destination||n.defaults.destination,this.options.newWindow=a.newWindow||n.defaults.newWindow,this.options.close=a.close||n.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=a.positionLeft||n.defaults.positionLeft,this.options.position=a.position||n.defaults.position,this.options.backgroundColor=a.backgroundColor||n.defaults.backgroundColor,this.options.avatar=a.avatar||n.defaults.avatar,this.options.className=a.className||n.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?n.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||n.defaults.onClick,this.options.offset=a.offset||n.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||n.defaults.ariaLive,this.options.style=a.style||n.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var c in this.options.style)a.style[c]=this.options.style[c];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var f=document.createElement("img");f.src=this.options.avatar,f.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(f):a.insertAdjacentElement("afterbegin",f)}if(this.options.close===!0){var b=document.createElement("button");b.type="button",b.setAttribute("aria-label","Close"),b.className="toast-close",b.innerHTML="&#10006;",b.addEventListener("click",(function(V){V.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var C=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&C>360?a.insertAdjacentElement("afterbegin",b):a.appendChild(b)}if(this.options.stopOnFocus&&this.options.duration>0){var x=this;a.addEventListener("mouseover",function(V){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){x.removeElement(a)},x.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(V){V.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(V){V.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var v=i("x",this.options),I=i("y",this.options),R=this.options.position=="left"?v:"-"+v,P=this.options.gravity=="toastify-top"?I:"-"+I;a.style.transform="translate("+R+","+P+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var c=n.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,c),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),n.reposition()}).bind(this),400)}},n.reposition=function(){for(var a={top:15,bottom:15},c={top:15,bottom:15},f={top:15,bottom:15},b=document.getElementsByClassName("toastify"),C,x=0;x<b.length;x++){o(b[x],"toastify-top")===!0?C="toastify-top":C="toastify-bottom";var v=b[x].offsetHeight;C=C.substr(9,C.length-1);var I=15,R=window.innerWidth>0?window.innerWidth:screen.width;R<=360?(b[x].style[C]=f[C]+"px",f[C]+=v+I):o(b[x],"toastify-left")===!0?(b[x].style[C]=a[C]+"px",a[C]+=v+I):(b[x].style[C]=c[C]+"px",c[C]+=v+I)}return this};function i(a,c){return c.offset[a]?isNaN(c.offset[a])?c.offset[a]:c.offset[a]+"px":"0px"}function o(a,c){return!a||typeof c!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(c)>-1)}return n.lib.init.prototype=n.lib,n})})(mo)),mo.exports}var rv=nv();const kl=Gs(rv),yn=e=>{console.info("[TOAST] INFO: ",e),kl({text:e,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},mt=e=>{console.error("[TOAST] ERROR: ",e),kl({text:e,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},iv=e=>{console.warn("[TOAST] WARNING: ",e),kl({text:e,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};rr.put("toastInfo",yn);rr.put("toastError",mt);rr.put("toastWarning",iv);const zu=(e,t)=>{const n=new hr.subtle.Watcher(async()=>{try{await 0,t(e.get())}finally{n.watch()}});n.watch(e)},Xo=e=>function(t,n,r){const i=r.value;return i.signal=e,r};Object.defineProperty(Ks.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Va extends Ks{connectedCallback(){const t=Object.getPrototypeOf(this);Object.getOwnPropertyNames(t).forEach(n=>{const r=t[n];if(r instanceof Function){const i=r;i.name.startsWith("on")&&"topic"in i&&this.subscribe(i.topic,i)}}),Object.getOwnPropertyNames(t).forEach(n=>{const r=t[n];if(r instanceof Function){const i=r;i.name.startsWith("on")&&"signal"in i&&this.watch(i.signal,i)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(t,n){ir(t,n.bind(this))}showInfo(t){yn(t)}showError(t){mt(t)}nobubble(t){return n=>{n.stopPropagation(),t.bind(this)(n)}}command(t,n={}){return()=>{this.executeCommand(t,n)}}executeCommand(t,n){const r=qe.createExecutionContext(this,n);qe.execute(t,r)}watch(t,n){zu(t,n.bind(this))}firstUpdated(t){super.firstUpdated(t),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(t){t(),this.updateLater()}}class Ei extends Va{}var av=Object.getOwnPropertyDescriptor,ov=(e,t,n,r)=>{for(var i=r>1?void 0:r?av(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=a(i)||i);return i};let Vs=class extends Ei{render(){return A`
            <slot></slot>
        `}};Vs.styles=ln`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Vs=ov([fe("k-app")],Vs);var sv=Object.defineProperty,lv=Object.getOwnPropertyDescriptor,oa=(e,t,n,r)=>{for(var i=r>1?void 0:r?lv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&sv(t,n,i),i};let Xr=class extends No(Ei){constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),ir(za,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[n]=e.split(":");if(t===`${n}:*`)return!0;const r=t.split(":");if(r.length===2){const i=r[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&e.startsWith(`${n}:`)}return!1}loadContributions(e){const t=Ct.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[n]=e.split(":"),r=`${n}:*`,i=Ct.getContributions(r),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const c of a){const f=`${n}:${c}`,b=Ct.getContributions(f);o.push(...b)}}this.contributions=[...i,...o,...t]}contributionCreator(e){if("command"in e){const t=e,n=!!t.showLabel;return A`
                <wa-button @click=${()=>this.executeCommand(t.command,t.params||{})}
                           title=${t.label}
                           ?disabled="${t.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${t.icon} label="${t.label}"></wa-icon>
                    ${n?t.label:""}
                </wa-button>
            `}else if("html"in e){const t=e.html;return t instanceof Function?t():pr(t)}else return A`<span>unknown contribution type: ${typeof e}</span>`}render(){const e=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return A`
            <div class="toolbar-items" style=${An({"justify-content":this.position})}>
                <slot name="start">
                    ${this.contributions.filter(t=>t.slot==="start").map(this.contributionCreator.bind(this))}
                </slot>
                ${e}
                ${this.contributions.filter(t=>t.slot===void 0).map(this.contributionCreator.bind(this))}
                <slot>
                </slot>
                <slot name="end">
                    ${this.contributions.filter(t=>t.slot==="end").map(this.contributionCreator.bind(this))}
                </slot>
            </div>
        `}};Xr.styles=ln`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;oa([p()],Xr.prototype,"position",2);oa([p({type:Boolean,attribute:"is-editor"})],Xr.prototype,"isEditor",2);oa([p({attribute:!1})],Xr.prototype,"partToolbarContent",2);oa([p({attribute:!1})],Xr.prototype,"partToolbarRenderer",2);oa([ge()],Xr.prototype,"contributions",2);Xr=oa([fe("k-toolbar")],Xr);var cv=Object.defineProperty,uv=Object.getOwnPropertyDescriptor,sa=(e,t,n,r)=>{for(var i=r>1?void 0:r?uv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&cv(t,n,i),i};let Zr=class extends No(Ei){constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=hi(),this.dropdownRef=hi()}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),ir(za,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[n]=e.split(":");if(t===`${n}:*`)return!0;const r=t.split(":");if(r.length===2){const i=r[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&e.startsWith(`${n}:`)}return!1}loadContributions(e){const t=Ct.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[n]=e.split(":"),r=`${n}:*`,i=Ct.getContributions(r),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const c of a){const f=`${n}:${c}`,b=Ct.getContributions(f);o.push(...b)}}this.contributions=[...i,...o,...t]}show(e){this.position=e,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(e,t){return async()=>{this.executeCommand(e,t||{})}}renderContribution(e){if("command"in e){const t=e;return A`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(t.command,t.params)}
                    ?disabled="${t.disabled?.get()}">
                    ${t.icon?A`<wa-icon slot="icon" name=${t.icon}></wa-icon>`:""}
                    ${t.label}
                </wa-dropdown-item>
            `}else if("html"in e){const t=e.html;return t instanceof Function?t():pr(t)}return zt}render(){if(!this.isOpen)return zt;const e=this.partContextMenuRenderer?this.partContextMenuRenderer():zt;return A`
            <wa-dropdown 
                ${pi(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${pi(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${e}
                ${this.contributions.map(t=>this.renderContribution(t))}
            </wa-dropdown>
        `}};Zr.styles=ln`
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
    `;sa([p({type:Boolean,attribute:"is-editor"})],Zr.prototype,"isEditor",2);sa([p({attribute:!1})],Zr.prototype,"partContextMenuRenderer",2);sa([ge()],Zr.prototype,"contributions",2);sa([ge()],Zr.prototype,"isOpen",2);sa([ge()],Zr.prototype,"position",2);Zr=sa([fe("k-contextmenu")],Zr);class Il extends Ei{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vc=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},dv=ea(class extends ta{constructor(e){if(super(e),e.type!==cr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let a=0;for(const c of e)i[a]=r?r(c,a):a,o[a]=n(c,a),a++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=vd(e),{values:o,keys:a}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=a,o;const c=this.ut??=[],f=[];let b,C,x=0,v=i.length-1,I=0,R=o.length-1;for(;x<=v&&I<=R;)if(i[x]===null)x++;else if(i[v]===null)v--;else if(c[x]===a[I])f[I]=oi(i[x],o[I]),x++,I++;else if(c[v]===a[R])f[R]=oi(i[v],o[R]),v--,R--;else if(c[x]===a[R])f[R]=oi(i[x],o[R]),ha(e,f[R+1],i[x]),x++,R--;else if(c[v]===a[I])f[I]=oi(i[v],o[I]),ha(e,i[x],i[v]),v--,I++;else if(b===void 0&&(b=vc(a,I,R),C=vc(c,x,v)),b.has(c[x]))if(b.has(c[v])){const P=C.get(a[I]),V=P!==void 0?i[P]:null;if(V===null){const K=ha(e,i[x]);oi(K,o[I]),f[I]=K}else f[I]=oi(V,o[I]),ha(e,i[x],V),i[P]=null;I++}else ts(i[v]),v--;else ts(i[x]),x++;for(;I<=R;){const P=ha(e,f[R+1]);oi(P,o[I]),f[I++]=P}for(;x<=v;){const P=i[x++];P!==null&&ts(P)}return this.ut=a,Ys(e,f),qr}}),hv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",pv="/assets/jupyter-C78Cpfql.svg",fv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";su("k",{resolver:e=>new URL(Object.assign({"../icons/js.svg":hv,"../icons/jupyter.svg":pv,"../icons/python.svg":fv})[`../icons/${e}.svg`],import.meta.url).href,mutator:e=>{e.setAttribute("fill","currentColor"),e.setAttribute("stroke","currentColor")}});var mv=Object.defineProperty,gv=Object.getOwnPropertyDescriptor,Ba=(e,t,n,r)=>{for(var i=r>1?void 0:r?gv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&mv(t,n,i),i};let yi=class extends Va{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const e=this.name.trim().split(/ +/),t=e.pop(),n=e.pop();return A`
            <wa-icon library="${n||zt}" variant="${this.variant||zt}"
                         family="${this.family||zt}" name=${t} label="${this.label||this.name||zt}"></wa-icon>`}};yi.styles=ln`
        :host {
            display: contents;
        }
    `;Ba([p()],yi.prototype,"name",2);Ba([p()],yi.prototype,"family",2);Ba([p()],yi.prototype,"variant",2);Ba([p()],yi.prototype,"label",2);yi=Ba([fe("k-icon")],yi);var bv=Object.defineProperty,vv=(e,t,n,r)=>{for(var i=void 0,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=a(t,n,i)||i);return i&&bv(t,n,i),i};class Zt extends Il{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return zt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return zt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(t){super.updated(t),t.has("dirty")&&t.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(t){this.dirty=t,Es.set(null),Es.set(this),et.set(null),et.set(this)}}vv([p()],Zt.prototype,"dirty");const Mu="app-toolbars-main",la="app-toolbars-main-right",yv="app-toolbars-main-center",Nu="app-toolbars-bottom",Cl="app-toolbars-bottom-center",Fu="app-toolbars-bottom-end",Pi="editor-area-main",Bs="sidebar-main",qu="sidebar-main-bottom",Vu="sidebar-auxiliary",Bu="panel-bottom";var Uu=(e=>(e[e.LEFT=0]="LEFT",e[e.MIDDLE=1]="MIDDLE",e[e.RIGHT=2]="RIGHT",e[e.BACK=3]="BACK",e[e.FORWARD=4]="FORWARD",e))(Uu||{}),wv=Object.defineProperty,xv=Object.getOwnPropertyDescriptor,ju=(e,t,n,r)=>{for(var i=r>1?void 0:r?xv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&wv(t,n,i),i};let Lo=class extends Il{constructor(){super(...arguments),this.contributions=[],this.tabGroup=hi(),this.containerId=null}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",e=>{const t=this.getTabPanel(e.detail.name);t&&(this.updateToolbarFromComponent(t),this.dispatchEvent(new CustomEvent("tab-shown",{detail:t})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",e=>{const n=e.target.closest("wa-tab-panel");n&&this.updateToolbarFromComponent(n)}),this.tabGroup.value.addEventListener("part-contextmenu-changed",e=>{const n=e.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),this.tabGroup.value.addEventListener("click",e=>{const t=e.target,n=t.closest("wa-tab");if(n){const a=n.getAttribute("panel");if(a){const c=this.getTabPanel(a);if(c){const f=c.querySelector(".tab-content");if(f&&f.firstElementChild){const b=f.firstElementChild;b instanceof Zt&&et.set(b)}}}return}const r=t.closest("wa-scroller.tab-content");if(!r)return;const i=r.closest("wa-tab-panel");if(!i)return;const o=i.querySelector(".tab-content");if(o&&o.firstElementChild){const a=o.firstElementChild;a instanceof Zt&&et.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",e=>{const t=e,n=t.target.closest("wa-scroller.tab-content");if(!n)return;t.preventDefault();const r=n.closest("wa-tab-panel");if(!r)return;const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY,button:0});t.target.dispatchEvent(i),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(r);const o=r.querySelector("k-contextmenu");o&&o.show({x:t.clientX,y:t.clientY})})}))}),ir(za,e=>{!this.containerId||e.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(e){if(super.updated(e),e.has("contributions")){const t=this.containerId===Pi;this.contributions.forEach(n=>{const r=this.getTabPanel(n.name);if(!r)return;const i=r.querySelector(".tab-content");if(i&&i.firstElementChild){const o=i.firstElementChild;o instanceof Zt&&(o.tabContribution=n,o.isEditor=t)}})}}has(e){return!!this.getTabPanel(e)}activate(e){this.tabGroup.value.setAttribute("active",e)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(e){if(this.contributions.find(n=>n.name===e.name)){this.activate(e.name);return}this.contributions.push(e),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(e.name);const n=this.getTabPanel(e.name);if(n){const r=n.querySelector(".tab-content");if(r&&r.firstElementChild){const i=r.firstElementChild;i instanceof Zt&&(i.tabContribution=e,i.isEditor=this.containerId===Pi)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(n)})}})}handleTabAuxClick(e,t){e.button===Uu.MIDDLE&&t.closable&&this.closeTab(e,t.name)}async closeTab(e,t){if(e.stopPropagation(),this.isDirty(t)&&!await na("Unsaved changes will be lost: Do you really want to close?"))return;const n=this.getTabPanel(t);if(!n)return;const r=this.contributions.find(o=>o.name===t);if(!r)return;this.cleanupTabInstance(n);const i=this.contributions.indexOf(r);i>-1&&this.contributions.splice(i,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:n})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(e,t){this.getTab(e).classList.toggle("part-dirty",t)}isDirty(e){return this.getTab(e).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=Ct.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(e){const t=e.querySelector(".tab-content");if(t&&t.firstElementChild){const n=t.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const e=this.tabGroup.value.querySelectorAll("wa-tab");if(e.length>0){const t=e.item(0).getAttribute("panel");t&&this.tabGroup.value.setAttribute("active",t)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(e){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${e}']`)}getTab(e){return this.tabGroup.value.querySelector(`wa-tab[panel='${e}']`)}updateToolbarFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const n=t.firstElementChild;if(!(n instanceof Zt)||!n.renderToolbar)return;const r=e.querySelector("k-toolbar");r&&(r.partToolbarRenderer=()=>n.renderToolbar(),r.requestUpdate())}updateContextMenuFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const n=t.firstElementChild;if(!(n instanceof Zt)||!n.renderContextMenu)return;const r=e.querySelector("k-contextmenu");r&&(r.partContextMenuRenderer=()=>n.renderContextMenu(),r.requestUpdate())}render(){return A`
            <wa-tab-group ${pi(this.tabGroup)}>
                ${dv(this.contributions,e=>e.name,e=>A`
                        <wa-tab panel="${e.name}"
                                @auxclick="${t=>this.handleTabAuxClick(t,e)}">
                            <k-icon name="${e.icon}"></k-icon>
                            ${e.label}
                            ${vn(e.closable,()=>A`
                                <wa-icon name="xmark" label="Close"  @click="${t=>this.closeTab(t,e.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${e.name}">
                            <k-toolbar id="toolbar:${e.editorId??e.name}" 
                                       class="tab-toolbar"
                                       ?is-editor="${this.containerId===Pi}"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${e.component?e.component(e.name):zt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu:${e.name}"
                                           ?is-editor="${this.containerId===Pi}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};Lo.styles=ln`
        :host {
            height: 100%;
            width: 100%;
        }

        wa-tab-group {
            height: 100%;
            width: 100%;
        }

        wa-tab::part(base) {
            padding: 3px 0.5rem;
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
        }

        wa-tab-panel {
            --padding: 0px;
        }

        .part-dirty::part(base) {
            font-style: italic;
            color: var(--wa-color-danger-fill-loud)
        }
    `;ju([ge()],Lo.prototype,"contributions",2);Lo=ju([fe("k-tabs")],Lo);var kv=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,Ua=(e,t,n,r)=>{for(var i=r>1?void 0:r?Iv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&kv(t,n,i),i};let Ki=class extends Ei{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.handleResize=e=>{if(!this.resizing)return;const n=(this.orientation==="horizontal"?e.clientX:e.clientY)-this.resizing.startPos,r=[...this.resizing.startSizes];r[this.resizing.handleIndex]+=n,r[this.resizing.handleIndex+1]-=n;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,o=i*.05;if(r[this.resizing.handleIndex]>=o&&r[this.resizing.handleIndex+1]>=o){this.resizing.currentSizes=r;const a=r.map((c,f)=>{const C=`${(c/i*100).toFixed(2)}%`;return f===r.length-1?C:`${C} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=()=>{if(this.resizing?.currentSizes){const e=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(t=>`${(t/e*100).toFixed(2)}%`),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}loadChildren(){const e=Array.from(this.children).filter(t=>t.tagName!=="STYLE"&&t.tagName!=="SCRIPT"&&!t.classList.contains("resize-handle"));if(e.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=e,this.sizes)this.gridSizes=this.sizes.split(",").map(t=>t.trim());else{const t=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>t)}this.requestUpdate()}}updated(e){super.updated(e),e.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((t,n)=>{t.style.overflow="hidden",t.style.height="100%",t.style.width="100%",t.style.gridColumn=this.orientation==="horizontal"?`${n*2+1}`:"1",t.style.gridRow=this.orientation==="vertical"?`${n*2+1}`:"1",t.style.display="flex",t.style.flexDirection="column"}))}startResize(e,t){if(e.preventDefault(),t>=this.gridChildren.length-1)return;const n=this.orientation==="horizontal"?e.clientX:e.clientY,r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(o=>o.endsWith("%")?parseFloat(o)/100*r:(o.endsWith("px"),parseFloat(o)));this.resizing={handleIndex:t,startPos:n,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return zt;const e=this.gridSizes.flatMap((t,n)=>n===this.gridSizes.length-1?[t]:[t,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=e,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=e),this.style.overflow="hidden",A`
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
            
            ${this.gridChildren.map((t,n)=>{if(n<this.gridChildren.length-1){const r=this.orientation==="horizontal"?`${n*2+2}`:"1",i=this.orientation==="vertical"?`${n*2+2}`:"1";return A`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${r};
                                grid-row: ${i};
                            "
                            @mousedown=${o=>this.startResize(o,n)}
                        ></div>
                    `}return zt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Ua([p()],Ki.prototype,"orientation",2);Ua([p()],Ki.prototype,"sizes",2);Ua([ge()],Ki.prototype,"gridSizes",2);Ua([ge()],Ki.prototype,"gridChildren",2);Ki=Ua([fe("k-resizable-grid")],Ki);function Sl(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function Cv(e,t){let n;const r=()=>{if(n)return n;const i=indexedDB.open(e);return i.onupgradeneeded=()=>i.result.createObjectStore(t),n=Sl(i),n.then(o=>{o.onclose=()=>n=void 0},()=>{}),n};return(i,o)=>r().then(a=>o(a.transaction(t,i).objectStore(t)))}let ys;function Wu(){return ys||(ys=Cv("keyval-store","keyval")),ys}function Sv(e,t=Wu()){return t("readonly",n=>Sl(n.get(e)))}function Ev(e,t,n=Wu()){return n("readwrite",r=>(r.put(t,e),Sl(r.transaction)))}class Av{async persistObject(t,n){return Ev(t,n)}async getObject(t){return Sv(t)}}const Tr=new Av;fn.put("persistenceService",Tr);const dr="events/filesys/workspaceChanged",La="events/filesys/workspaceConnected";class Do{constructor(){this.state={}}getWorkspacePath(){const t=[];let n=this;for(;n;)t.push(n.getName()),n=n.getParent();return t.reverse(),t.shift(),t.join("/")}getWorkspace(){let t=this;for(;t;){const n=t.getParent();if(n)t=n;else break}return t}}var Hu=(e=>(e[e.TEXT=0]="TEXT",e[e.BINARY=1]="BINARY",e))(Hu||{});class Yi extends Do{}class Us extends Do{}class Gu extends Yi{constructor(t,n){super(),this.contents=t,this.name=n}async getContents(t){return this.contents}async saveContents(t,n){this.contents=t}async copyTo(t){throw Error("Not supported")}delete(t,n){throw Error("Not supported")}async rename(t){throw Error("Not supported")}getName(){return this.name}getParent(){}}class yc extends Yi{constructor(t,n){super(),this.fileHandle=t,this.parent=n}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(t){const n=await this.fileHandle.getFile();return!t||t?.contentType==0?await n.text():t?.encoding==0||t?.uri?URL.createObjectURL(n):t?.blob?n:n.stream()}async saveContents(t,n){const r=await this.fileHandle.createWritable();if(t&&typeof t.pipeTo=="function")await t.pipeTo(r);else{const i=r.getWriter();try{await i.write(t)}finally{await i.close()}}}async copyTo(t){const n=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(t,{create:!0})).saveContents(n)}async rename(t){const n=this.getParent();if(!n)throw new Error("Cannot rename root resource");if(this.getName()!==t){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(t)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):r}await n.listChildren(!0),Wt(dr,this.getWorkspace())}}}class di extends Us{constructor(t,n){super(),this.dirHandle=t,this.parent=n}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(t=!1){if(t||!this.files){this.files={};for await(const n of this.dirHandle.values()){const i=n.kind==="file"?new yc(n,this):new di(n,this);this.files[i.getName()]=i}}return Object.values(this.files)}async getResource(t,n){if(!t)throw new Error("No path provided");const r=t.split("/");let i=this,o=!1;try{for(let a=0;a<r.length;a++){let c=r[a];if(c&&(c=c.trim()),!c)break;if(i instanceof di){if(i.files||await i.listChildren(),!i.files)return null;const f=i.files[c];if(!f&&n?.create)if(o=!0,a<r.length-1){const b=await i.dirHandle.getDirectoryHandle(c,{create:!0}),C=new di(b);i.files[c]=C,i=C}else{const b=await i.dirHandle.getFileHandle(c,{create:!0}),C=new yc(b,i);return i.files[c]=C,C}else i=f}}}finally{o&&Wt(dr,this.getWorkspace())}return i}touch(){Wt(dr,this.getWorkspace())}async delete(t,n=!0){return t?this.dirHandle.removeEntry(t,{recursive:n}).then(()=>{Wt(dr,this.getWorkspace())}):this.getParent()?.delete(this.getName())}async copyTo(t){for(const n of await this.listChildren()){const r=[t,n.getName()].join("/");await n.copyTo(r)}}async rename(t){const n=this.getParent();if(!n)throw new Error("Cannot rename workspace root");if(this.getName()!==t){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(t)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):r}await n.listChildren(!0),Wt(dr,this.getWorkspace())}}}class $v{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(t=>{t&&Wt(La,t)})}registerContribution(t){this.contributions.set(t.type,t),console.log(`Workspace contribution registered: ${t.name} (${t.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const t=await Tr.getObject("workspace_data");if(!t)return;const n=this.contributions.get(t.type);if(!n){console.warn(`No contribution found for workspace type: ${t.type}`);return}try{if(n.restore){const r=await n.restore(t.data);return r&&(this.currentType=t.type),r}}catch(r){console.error(`Failed to restore workspace of type ${t.type}:`,r)}}async connectWorkspace(t){const n=Array.from(this.contributions.values()).find(a=>a.canHandle(t));if(!n)throw new Error("No workspace contribution can handle this input");const r=await n.connect(t),i=n.persist?await n.persist(r):t,o={type:n.type,data:i};return await Tr.persistObject("workspace_data",o),this.currentType=n.type,this.workspace=Promise.resolve(r),Wt(La,r),r}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await Tr.persistObject("workspace_data",null),await Tr.persistObject("workspace",null)}}const cn=new $v;fn.put("workspaceService",cn);cn.registerContribution({type:"filesystem",name:"Local File System",canHandle(e){return e&&"kind"in e&&e.kind==="directory"},async connect(e){return new di(e)},async restore(e){if(e&&"kind"in e&&e.kind==="directory")return new di(e,void 0)},async persist(e){return e instanceof di?e.getHandle():null}});const _v=(e,t)=>!e.leaf&&t.leaf?-1:e.leaf&&!t.leaf?1:e.label.localeCompare(t.label);var Ov=Object.defineProperty,Tv=Object.getOwnPropertyDescriptor,Zo=(e,t,n,r)=>{for(var i=r>1?void 0:r?Tv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Ov(t,n,i),i};let Xi=class extends Zt{constructor(){super(...arguments),this.treeRef=hi()}doBeforeUI(){this.initializeWorkspace()}firstUpdated(e){super.firstUpdated(e),this.setupDragAndDrop()}updated(e){super.updated(e),e.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const e=await cn.getWorkspace();e?await this.loadWorkspace(e):qe.execute("help")}renderToolbar(){const e=$n.get()instanceof Do;return A`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!e} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!e} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const e=$n.get()instanceof Do;return A`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!e}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!e}>Delete</k-command>
        `}async onWorkspaceChanged(e){$n.set(void 0),await this.loadWorkspace(e),await this.syncTreeSelection()}async onWorkspaceConnected(e){await this.loadWorkspace(e)}async loadWorkspace(e){this.workspaceDir=e,e?this.root=await this.resourceToTreeNode(e):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const t=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];t.length>0&&$n.set(t[0].model?.data)}async resourceToTreeNode(e){const t=e instanceof Yi,n={data:e,label:e.getName(),icon:t?"file":"folder-open",leaf:t,children:[]};if(e instanceof Us){for(const r of await e.listChildren(!0)){const i=await this.resourceToTreeNode(r);n.children.push(i)}n.children.sort(_v)}return n}createTreeItems(e,t=!1){return e?A`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${e} ?expanded=${t}>
                <span><wa-icon name=${e.icon} label="${e.leaf?"File":"Folder"}"></wa-icon> ${e.label}</span>
                ${e.children.map(n=>this.createTreeItems(n))}
            </wa-tree-item>`:A``}async onFileDoubleClicked(e){const n=e.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:n})}onSelectionChanged(e){const t=e.detail.selection;if(t&&t.length>0){const n=t[0].model;$n.set(n.data)}else $n.set(void 0)}setupDragAndDrop(){const e=this.treeRef.value;if(!e)return;const t=o=>{if(!o.dataTransfer?.types.includes("Files"))return;o.preventDefault(),o.dataTransfer.dropEffect="copy",e.classList.add("drag-over");const c=o.target.closest("wa-tree-item");c&&c!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=c,c.classList.add("drop-target"))},n=o=>{o.dataTransfer?.types.includes("Files")&&(o.preventDefault(),e.classList.add("drag-over"))},r=o=>{const a=e.getBoundingClientRect(),c=o.clientX,f=o.clientY;(c<=a.left||c>=a.right||f<=a.top||f>=a.bottom)&&(e.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async o=>{if(o.preventDefault(),e.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!o.dataTransfer||!this.workspaceDir)return;const a=Array.from(o.dataTransfer.files);if(a.length===0)return;const c=await this.getDropTarget(o);await this.handleFilesDrop(a,c)};e.removeEventListener("dragover",t),e.removeEventListener("dragenter",n),e.removeEventListener("dragleave",r),e.removeEventListener("drop",i),e.addEventListener("dragover",t),e.addEventListener("dragenter",n),e.addEventListener("dragleave",r),e.addEventListener("drop",i)}async getDropTarget(e){const n=e.target.closest("wa-tree-item");if(n){const i=n.model.data;if(i instanceof Us)return i;const o=i.getParent();if(o)return o}return this.workspaceDir}async handleFilesDrop(e,t){const n=e.length;let r=0,i=0,o=0;for(const a of e)try{const c=this.buildTargetPath(t,a.name);if(await this.workspaceDir.getResource(c)&&!await na(`File "${a.name}" already exists. Do you want to overwrite it?`)){o++;continue}await(await this.workspaceDir.getResource(c,{create:!0})).saveContents(a),r++}catch(c){console.error(`Failed to upload ${a.name}:`,c),i++}console.log(`Uploaded ${r}/${n} files${o>0?`, ${o} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(e,t){const n=e.getWorkspacePath();return n?`${n}/${t}`:t}render(){return A`
            <div class="tree" ${pi(this.treeRef)}>
                ${vn(!this.workspaceDir,()=>A`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>A`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};Xi.styles=ln`
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
    `;Zo([ge()],Xi.prototype,"root",2);Zo([Qs(dr)],Xi.prototype,"onWorkspaceChanged",1);Zo([Qs(La)],Xi.prototype,"onWorkspaceConnected",1);Xi=Zo([fe("k-filebrowser")],Xi);class Lv{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Uc.set(this.updateCounter)}run(t,n){const r=this.createProgressMonitor(t);try{this.tasks.push(r),this.notifyUpdate(),n(r)}finally{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()}}async runAsync(t,n){const r=this.createProgressMonitor(t);return this.tasks.push(r),this.notifyUpdate(),n(r).finally(()=>{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()})}createProgressMonitor(t){const n={name:t,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(n,{set:(r,i,o)=>(r[i]=o,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const Zi=new Lv;fn.put("taskService",Zi);var Dv=Object.getOwnPropertyDescriptor,Pv=(e,t,n,r)=>{for(var i=r>1?void 0:r?Dv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=a(i)||i);return i};Ct.registerContribution(Cl,{html:"<k-tasks></k-tasks>"});let js=class extends No(Zt){render(){Uc.get();const e=Zi.getActiveTasks().length;if(e!=0)return A`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${e}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${e}
                </wa-button>
                ${Zi.getActiveTasks().map(t=>{const n=t.progress>=0||t.totalSteps>0,r=t.progress>=0?t.progress:t.totalSteps>0?Math.round(t.currentStep/t.totalSteps*100):0,i=t.progress<0&&t.totalSteps>0;return A`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${t.name}</strong>: ${t.message}
                            </div>
                            ${n?A`
                                <wa-progress-bar value="${r}" style="--track-height: 1.25rem;">
                                    ${i?`${t.currentStep}/${t.totalSteps} - `:""}${r}%
                                </wa-progress-bar>
                            `:A`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};js.styles=ln`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;js=Pv([fe("k-tasks")],js);var Rv=Object.getOwnPropertyDescriptor,zv=(e,t,n,r)=>{for(var i=r>1?void 0:r?Rv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=a(i)||i);return i};const wc="<no workspace>";let xc=class extends Ei{constructor(){super(...arguments),this.workspaceName=wc}doInitUI(){this.updateWorkspaceName(),ir(La,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){cn.getWorkspace().then(e=>{this.workspaceName=e?.getName()||wc,this.requestUpdate()})}handleLoadWorkspace(){qe.execute("load_workspace",{source:this})}render(){return A`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};xc=zv([fe("k-workspace-name")],xc);var Mv=Object.getOwnPropertyDescriptor,Nv=(e,t,n,r)=>{for(var i=r>1?void 0:r?Mv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=a(i)||i);return i};const kc="<no part>";Ct.registerContribution(Cl,{html:"<k-part-name></k-part-name>"});let Ic=class extends No(Ei){getPartName(){const e=et.get();return e&&(e.tabContribution?.label||e.getAttribute("id"))||kc}render(){const t=et.get()?.tabContribution?.icon||"box";return A`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${t}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Ic=Nv([fe("k-part-name")],Ic);const ao=".geospace/settings.json",El="events/settings/changed";class Fv{async checkSettings(){this.appSettings||(this.appSettings=await Tr.getObject(ao),this.appSettings||(this.appSettings={},await Tr.persistObject(ao,this.appSettings)),Wt(El,this.appSettings))}async get(t){return await this.checkSettings(),this.appSettings[t]}async set(t,n){await this.checkSettings(),this.appSettings[t]=n,await Tr.persistObject(ao,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(t){this.appSettings=t,await Tr.persistObject(ao,this.appSettings)}}const qn=new Fv;fn.put("appSettings",qn);const Ku="events/chatservice/aiConfigChanged",oo="aiConfig",qv={defaultProvider:"ollama",providers:[{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""},{name:"openai",model:"gpt-4.1-mini",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"},{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"},{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"},{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}]},ja="chatservice.prompts",Vv={name:"openai-api",canHandle:e=>!0,completionApi:async e=>(await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({model:e.model,stream:e.stream,messages:e.messages,...e.chatConfig.parameters})})).json().then(n=>({role:"assistant",content:n.choices[0].message.content}))};class Bv{constructor(){this.fetchers=[],this.promptContributions=[],ir(El,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.promptContributions=Ct.getContributions(ja)}registerFetcher(t){this.fetchers.push(t)}async checkAIConfig(){this.aiConfig||(this.aiConfig=await qn.get(oo),this.aiConfig||(await qn.set(oo,qv),this.aiConfig=await qn.get(oo)),Wt(Ku,this.aiConfig))}async getDefaultProvider(){await this.checkAIConfig();const t=await this.getProviders();if(this.aiConfig?.defaultProvider){const n=t.find(r=>r.name===this.aiConfig?.defaultProvider);if(n)return n}return t[0]}async setDefaultProvider(t){return await this.checkAIConfig(),this.aiConfig.defaultProvider=t,await qn.set(oo,this.aiConfig),this.getDefaultProvider()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}createMessage(t){return{role:"user",content:t}}getPromptContribution(t){return this.promptContributions.find(n=>n.role===t)}async handleUserPrompt(t){const n=t.chatConfig||await this.getDefaultProvider(),r=t.chatContext,i=this.promptContributions.map(a=>{const c=t.callContext.createChild({userPrompt:r.history[r.history.length-1].content});if(a.canHandle instanceof Function&&!a.canHandle(c.getProxy()))return;const f=r.history.map(v=>{let I=v.role,R=v.content;return I!=="user"&&(I!==a.role?(I="user",R=`***Another Assistant '${v.role}' replied:***
${R}`):I="assistant"),{role:I,content:R}});let b=f[f.length-1],C=a.sysPrompt;typeof C=="function"&&(C=C()),f.unshift({role:"system",content:C});const x=async()=>{const v={model:n.model,stream:!1,messages:f,chatConfig:n};return(this.fetchers.find(R=>R.canHandle(n))||Vv).completionApi(v).then(R=>R)};return a.promptDecorator instanceof Function?a.promptDecorator(c.getProxy()).then(v=>{v&&(b.content=v)}).then(x).then(async v=>(v.role=a.role,a.messageDecorator&&(c.put("message",v),a.messageDecorator(c.getProxy())),v)):x()}),o=await Promise.all(i.filter(a=>!!a));r.history.push(...o)}}const li=new Bv;fn.put("chatService",li);var Uv=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,kr=(e,t,n,r)=>{for(var i=r>1?void 0:r?jv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Uv(t,n,i),i};let Bn=class extends Zt{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatContext=this.defaultChatContext,this.busy=!1,this.inputValue=""}onAIConfigChanged(){this.doBeforeUI()}onPartChanged(e){e&&"chatContext"in e?this.chatContext=e.chatContext:this.chatContext=this.defaultChatContext}doBeforeUI(){li.getProviders().then(e=>{this.providers=e||[]}),li.getDefaultProvider().then(e=>{this.defaultProvider=e})}updated(e){super.updated(e),(e.has("chatContext")||e.has("busy"))&&this.scrollToBottom()}scrollToBottom(){this.messagesContainer&&requestAnimationFrame(()=>{this.messagesContainer&&(this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight)})}onInput(e){const t=e.target;this.inputValue=t.value}onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.sendMessage())}async sendMessage(){const e=this.inputValue.trim();!e||this.busy||(this.inputValue="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),await this.handlePrompt(e))}async runCommand(e,t){const n=t||qe,r=e.trim().split(/\s+/);if(r.length===0)return;const i=r.shift(),o=n.getCommand(i);if(!o){mt("Command not found: "+i);return}const a={};r.forEach((f,b)=>{a[o.parameters[b].name]=f});const c=n.createExecutionContext(this,a);n.execute(i,c),this.requestUpdate()}async handlePrompt(e){if(e.startsWith("/")){await this.runCommand(e.substring(1),qe);return}const t=li.createMessage(e);this.chatContext.history.push(t),this.requestUpdate(),this.busy=!0;const n=et.get(),r=rr.createChild({activePart:n,activeEditor:n?.isEditor?n:null});Zi.runAsync("Calling AI assistant",i=>li.handleUserPrompt({chatContext:this.chatContext,callContext:r}).then(o=>{this.requestUpdate()})).catch(i=>{mt(`${i}`)}).finally(()=>{this.busy=!1,r.destroy()})}async onChangeDefaultProvider(e){this.defaultProvider=await li.setDefaultProvider(e.currentTarget.value)}copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{}).catch(t=>{mt(`Failed to copy: ${t}`)})}formatTimestamp(e=new Date){return e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderMessage(e){const t=e.role==="user",r=li.getPromptContribution(e.role)?.label||e.role;return A`
            <div class="message-wrapper ${t?"user":"assistant"}">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-icon 
                            name="${t?"user":"robot"}" 
                            label="${r}">
                        </wa-icon>
                        <span class="role-name">${r}</span>
                        <span class="timestamp">${this.formatTimestamp()}</span>
                    </div>
                    <div class="message-actions">
                        <wa-button
                            appearance="plain"
                            size="small"
                            @click="${()=>this.copyToClipboard(e.content)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                        ${vn(e.actions?.length,()=>A`
                            ${e.actions?.map(i=>A`
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
                    ${pr(at.parse(e.content))}
                </div>
            </div>
        `}renderLoadingIndicator(){return A`
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
        `}render(){return A`
            <div class="chat-container">
                ${vn(!this.defaultProvider,()=>A`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Select a provider from the menu below</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map(e=>this.renderMessage(e))}
                    ${vn(this.busy,()=>this.renderLoadingIndicator())}
                </div>

                <div class="input-container">
                    <div class="input-row">
                        <wa-textarea
                            placeholder="Type your message..."
                            resize="auto"
                            rows="1"
                            .value="${this.inputValue}"
                            ?disabled="${this.busy||!this.defaultProvider}"
                            @input="${this.onInput}"
                            @keydown="${this.onKeyDown}">
                        </wa-textarea>
                        
                        <wa-button
                            appearance="plain"
                            size="medium"
                            ?disabled="${!this.inputValue.trim()||this.busy||!this.defaultProvider}"
                            @click="${this.sendMessage}">
                            <wa-icon name="paper-plane" label="Send"></wa-icon>
                        </wa-button>

                        <wa-dropdown placement="top-end">
                            <wa-button
                                slot="trigger"
                                appearance="plain"
                                size="medium">
                                <wa-icon name="gear" label="Settings"></wa-icon>
                            </wa-button>
                            <wa-dropdown-label>AI Provider</wa-dropdown-label>
                            ${this.providers?.map(e=>A`
                                <wa-dropdown-item 
                                    type="checkbox"
                                    value="${e.name}"
                                    ?checked="${e.name===this.defaultProvider?.name}"
                                    @click="${this.onChangeDefaultProvider}">
                                    ${e.name}
                                </wa-dropdown-item>
                            `)}
                        </wa-dropdown>
                    </div>
                </div>
            </div>
        `}};Bn.styles=ln`
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
    `;kr([ge()],Bn.prototype,"chatContext",2);kr([ge()],Bn.prototype,"providers",2);kr([ge()],Bn.prototype,"defaultProvider",2);kr([ge()],Bn.prototype,"busy",2);kr([ge()],Bn.prototype,"inputValue",2);kr([he(".chat-messages")],Bn.prototype,"messagesContainer",2);kr([he("wa-textarea")],Bn.prototype,"textareaElement",2);kr([Qs(Ku)],Bn.prototype,"onAIConfigChanged",1);kr([Xo(et)],Bn.prototype,"onPartChanged",1);Bn=kr([fe("k-aiassist")],Bn);const go="events/extensionsregistry/extensionsConfigChanged",ya="extensions";class Wv{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,ir(El,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(async()=>{const t=this.extensionsSettings?.filter(n=>this.isEnabled(n.id)).map(n=>this.load(n.id).catch(r=>{mt("Extension could not be loaded: "+r.message)}))||[];await Promise.all(t)})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await qn.get(ya),this.extensionsSettings||(await qn.set(ya,[]),this.extensionsSettings=await qn.get(ya)),Wt(go,this.extensionsSettings))}registerExtension(t){this.extensions[t.id]=t}getExtensions(){return Object.values(this.extensions)}isEnabled(t){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(n=>n.id===t&&n.enabled)}isLoaded(t){return this.loadedExtensions.has(t)}enable(t,n=!1){this.isEnabled(t)||(Ft.debug(`Loading extension: ${t}`),this.load(t).then(()=>{this.updateEnablement(t,!0,n)}).catch(r=>{Ft.error(`Could not load extension: ${t}`)}))}async load(t,n=[]){if(this.loadedExtensions.has(t))return;const r=this.loadingPromises.get(t);if(r)return r;if(n.includes(t)){const a=[...n,t].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const i=this.extensions[t];if(!i)throw new Error("Extension not found: "+t);const o=(async()=>{try{if(i.dependencies&&i.dependencies.length>0){Ft.debug(`Loading dependencies for ${t}: ${i.dependencies.join(", ")}`);const c=[...n,t];for(const f of i.dependencies)await this.load(f,c),this.isEnabled(f)||(await this.updateEnablementAsync(f,!0,!1),Ft.debug(`Auto-enabled dependency: ${f}`))}const a=await Zi.runAsync("Loading extension: "+i.name,()=>{if(i.loader)return i.loader();if(i.url)return import(i.url)});this.loadedExtensions.add(t),a?.default instanceof Function&&a?.default(rr.getProxy()),Ft.debug(`Extension loaded: ${t}`)}catch(a){throw this.loadedExtensions.delete(t),a}finally{this.loadingPromises.delete(t)}})();return this.loadingPromises.set(t,o),o}disable(t,n=!1){this.isEnabled(t)&&this.updateEnablement(t,!1,n)}updateEnablement(t,n,r){this.checkExtensionsConfig().then(()=>{const i=this.extensionsSettings?.find(o=>o.id==t);i?i.enabled=n:this.extensionsSettings?.push({id:t,enabled:n}),qn.set(ya,this.extensionsSettings).then(()=>{if(r){const o=this.extensions[t];yn(n?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}Wt(go,this.extensionsSettings)})})}async updateEnablementAsync(t,n,r){await this.checkExtensionsConfig();const i=this.extensionsSettings?.find(o=>o.id==t);if(i?i.enabled=n:this.extensionsSettings?.push({id:t,enabled:n}),await qn.set(ya,this.extensionsSettings),r){const o=this.extensions[t];yn(n?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}Wt(go,this.extensionsSettings)}}Ft.debug("ExtensionRegistry initializing...");const ft=new Wv;fn.put("extensionRegistry",ft);Ft.debug("ExtensionRegistry initialized");const Mn=Ra("AppLoader");class Hv{constructor(){this.apps=new Map}registerApp(t){this.apps.has(t.id)&&Mn.warn(`App '${t.id}' is already registered. Overwriting.`),this.apps.set(t.id,t),Mn.info(`Registered app: ${t.name} (${t.id}) v${t.version}`)}async loadApp(t,n){let r;if(typeof t=="string"){const i=this.apps.get(t);if(!i)throw new Error(`App '${t}' not found. Make sure it's registered.`);r=i}else r=t,this.registerApp(r);Mn.info(`Loading app: ${r.name}...`),this.currentApp&&(Mn.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Mn.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(i=>{ft.disable(i)}))),r.contributions&&(Mn.info("Registering app contributions..."),r.contributions.ui&&(r.contributions.ui.forEach(i=>{const o=i.target;o&&Ct.registerContribution(o,i)}),Mn.info(`Registered ${r.contributions.ui.length} UI contributions`)),r.contributions.extensions&&(r.contributions.extensions.forEach(i=>{ft.registerExtension(i)}),Mn.info(`Registered ${r.contributions.extensions.length} app extensions`))),r.extensions&&(Mn.info(`Enabling ${r.extensions.length} extensions...`),r.extensions.forEach(i=>{ft.enable(i)})),r.initialize&&(Mn.info(`Initializing ${r.name}...`),await r.initialize()),this.currentApp=r,Mn.info(`App ${r.name} loaded successfully`),n&&this.renderApp(n)}renderApp(t){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");Br(this.currentApp.render(),t),Mn.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}}const Wa=new Hv;fn.put("appLoaderService",Wa);var Gv=Object.defineProperty,Kv=Object.getOwnPropertyDescriptor,Al=(e,t,n,r)=>{for(var i=r>1?void 0:r?Kv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Gv(t,n,i),i};let Da=class extends Zt{constructor(){super(...arguments),this.filterText=""}doInitUI(){ir(go,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(e){ft.enable(e.id,!0),this.requestUpdate()}disable(e){ft.disable(e.id,!0),this.requestUpdate()}isExtensionRequired(e){const t=Wa.getCurrentApp();return!t||!t.extensions?!1:t.extensions.includes(e)}selectionChanged(e){const t=e.detail.selection||[];t.length>0&&t[0].model?this.selectedExtension=t[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return ft.getExtensions();const e=this.filterText.toLowerCase();return ft.getExtensions().filter(t=>t.name.toLowerCase().includes(e)||(t.description?.toLowerCase().includes(e)??!1)||t.id.toLowerCase().includes(e))}getGroupedExtensions(){const e=this.getFilteredExtensions(),t=[],n=[];return e.forEach(r=>{ft.isEnabled(r.id)?t.push(r):n.push(r)}),t.sort((r,i)=>r.name.localeCompare(i.name)),n.sort((r,i)=>r.name.localeCompare(i.name)),{enabled:t,available:n}}handleFilterInput(e){this.filterText=e.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return A`
            <wa-input
                placeholder="Filter extensions..."
                .value=${this.filterText}
                @input=${e=>this.handleFilterInput(e)}
                @wa-clear=${()=>this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
        `}render(){const e=this.getGroupedExtensions(),t=e.enabled.length>0||e.available.length>0;return A`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${t?A`
                        ${e.enabled.length>0?A`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    Installed (${e.enabled.length})
                                </span>
                                ${e.enabled.map(n=>A`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${n}>
                                        <span><k-icon name="${n.icon}"></k-icon> ${n.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                        ${e.available.length>0?A`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${e.available.length})
                                </span>
                                ${e.available.map(n=>A`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${n}>
                                        <span><k-icon name="${n.icon}"></k-icon> ${n.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                    `:A`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${vn(this.selectedExtension,n=>A`
                        <h1><k-icon name="${n.icon}"></k-icon> ${n.name}</h1>
                        <hr>
                        <div>
                            ${vn(ft.isEnabled(n.id),()=>A`
                                <wa-button 
                                    title="${this.isExtensionRequired(n.id)?"This extension is required by the current app and cannot be uninstalled":"Disable this extension"}" 
                                    @click="${()=>this.disable(n)}"
                                    variant="danger" 
                                    appearance="plain"
                                    ?disabled=${this.isExtensionRequired(n.id)}>
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>
                                ${vn(this.isExtensionRequired(n.id),()=>A`
                                    <div class="required-hint">
                                        <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                        <span>This extension is required by the current app and cannot be uninstalled</span>
                                    </div>
                                `)}
                            `,()=>A`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(n)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${vn(n.experimental,()=>A`
                            <div style="margin-top: 1em;">
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}

                        <p style="margin-top: 1em;">${n.description}</p>

                        ${vn(n.dependencies&&n.dependencies.length>0,()=>A`
                            <div style="margin-top: 1.5em;">
                                <h3 style="margin-bottom: 0.5em;">
                                    <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies
                                </h3>
                                <div class="dependencies-list">
                                    ${n.dependencies.map(r=>{const i=ft.getExtensions().find(a=>a.id===r),o=ft.isEnabled(r);return A`
                                            <div class="dependency-item">
                                                <wa-icon 
                                                    name="${o?"check-circle":"circle"}" 
                                                    style="color: ${o?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                </wa-icon>
                                                <k-icon name="${i?.icon||"puzzle-piece"}"></k-icon>
                                                <span>${i?.name||r}</span>
                                                ${o?"":A`
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
        `}};Da.styles=ln`
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
    `;Al([ge()],Da.prototype,"selectedExtension",2);Al([ge()],Da.prototype,"filterText",2);Da=Al([fe("k-extensions")],Da);var Yv=Object.defineProperty,Xv=Object.getOwnPropertyDescriptor,Jo=(e,t,n,r)=>{for(var i=r>1?void 0:r?Xv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Yv(t,n,i),i};let Ji=class extends Zt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=hi()}connectedCallback(){super.connectedCallback(),Md(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Nd()}log(e,t,n="info"){const r={timestamp:new Date,level:n,source:e,message:t};this.messages=[...this.messages,r],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(e=>e.level===this.filter)}formatTimestamp(e){return e.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(e){switch(e){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(e){switch(e){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const e=this.messages.filter(i=>i.level==="info").length,t=this.messages.filter(i=>i.level==="warning").length,n=this.messages.filter(i=>i.level==="error").length,r=this.messages.filter(i=>i.level==="debug").length;return A`
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
                Info${e>0?` (${e})`:""}
            </k-action>

            <k-action 
                icon="triangle-exclamation"
                title="Warning logs"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.updateToolbar()}}>
                Warnings${t>0?` (${t})`:""}
            </k-action>

            <k-action 
                icon="circle-xmark"
                title="Error logs"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.updateToolbar()}}>
                Errors${n>0?` (${n})`:""}
            </k-action>

            <k-action 
                icon="bug"
                title="Debug logs"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.updateToolbar()}}>
                Debug${r>0?` (${r})`:""}
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
        `}render(){const e=this.getFilteredMessages();return A`
            <div class="log-terminal">
                <div class="messages" ${pi(this.containerRef)}>
                    ${e.length===0?A`<div class="empty-state">No log messages</div>`:e.map(t=>A`
                            <div class="message" data-level="${t.level}">
                                <span class="timestamp">${this.formatTimestamp(t.timestamp)}</span>
                                <wa-icon 
                                    name="${this.getLevelIcon(t.level)}" 
                                    label="${t.level}"
                                    style="color: ${this.getLevelColor(t.level)}">
                                </wa-icon>
                                <span class="source">[${t.source}]</span>
                                <span class="text">${t.message}</span>
                            </div>
                        `)}
                </div>
            </div>
        `}};Ji.styles=ln`
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
    `;Jo([ge()],Ji.prototype,"messages",2);Jo([ge()],Ji.prototype,"autoScroll",2);Jo([ge()],Ji.prototype,"filter",2);Ji=Jo([fe("k-log-terminal")],Ji);var Zv=Object.defineProperty,Jv=Object.getOwnPropertyDescriptor,ar=(e,t,n,r)=>{for(var i=r>1?void 0:r?Jv(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Zv(t,n,i),i};let Dn=class extends Va{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const e=Wc.getKeyBindingsForCommand(this.cmd);return e.length>0?e[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),ir(za,e=>{this.dropdown&&e.target===this.dropdown&&(this.dropdownContributions=e.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=Ct.getContributions(this.dropdown),this.requestUpdate())}renderContribution(e){if("command"in e){const t=e,n=t.disabled?.get();return A`
                <k-command 
                    cmd="${t.command}"
                    icon="${t.icon||""}"
                    ?disabled="${n}">
                    ${t.label}
                </k-command>
            `}if("html"in e){const n=e.html;return n instanceof Function?n():pr(n)}return zt}render(){const e=this.getKeybinding();return this.isInDropdown()?A`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${e?A`<span class="keybinding">${e}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?A`
                <wa-dropdown placement=${this.placement}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${e?`${this.title} (${e})`:this.title}>
                        <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                        <slot></slot>
                    </wa-button>
                    
                    ${this.title?A`
                        <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:zt}
                    
                    ${this.dropdownContributions.map(t=>this.renderContribution(t))}
                    
                    ${this.cmd?A`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                        </k-command>
                    `:zt}
                </wa-dropdown>
            `:A`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${e?`${this.title} (${e})`:this.title}
                @click=${()=>this.handleClick()}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};Dn.styles=ln`
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
    `;ar([p()],Dn.prototype,"cmd",2);ar([p()],Dn.prototype,"title",2);ar([p()],Dn.prototype,"icon",2);ar([p({type:Boolean})],Dn.prototype,"disabled",2);ar([p()],Dn.prototype,"appearance",2);ar([p()],Dn.prototype,"size",2);ar([p({type:Object,attribute:!1})],Dn.prototype,"params",2);ar([p()],Dn.prototype,"dropdown",2);ar([p()],Dn.prototype,"placement",2);ar([ge()],Dn.prototype,"dropdownContributions",2);Dn=ar([fe("k-command")],Dn);var Qv=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,ei=(e,t,n,r)=>{for(var i=r>1?void 0:r?e0(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Qv(t,n,i),i};let wr=class extends Va{constructor(){super(...arguments),this.title="",this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small"}handleClick(e){!this.disabled&&this.action&&(e.stopPropagation(),this.action(e))}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}render(){return this.isInDropdown()?A`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                </wa-dropdown-item>
            `:A`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${this.title}
                @click=${e=>this.handleClick(e)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};wr.styles=ln`
        :host {
            display: inline-block;
        }
    `;ei([p({type:Object,attribute:!1})],wr.prototype,"action",2);ei([p()],wr.prototype,"title",2);ei([p()],wr.prototype,"icon",2);ei([p({type:Boolean})],wr.prototype,"disabled",2);ei([p()],wr.prototype,"appearance",2);ei([p()],wr.prototype,"variant",2);ei([p()],wr.prototype,"size",2);wr=ei([fe("k-action")],wr);var t0=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,$l=(e,t,n,r)=>{for(var i=r>1?void 0:r?n0(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&t0(t,n,i),i};let Pa=class extends Va{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return A`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Pa.styles=ln`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;$l([p()],Pa.prototype,"message",2);$l([p()],Pa.prototype,"icon",2);Pa=$l([fe("k-no-content")],Pa);ft.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>Dt(()=>import("./git-extension-Dzh979dx.js"),__vite__mapDeps([0,1])),icon:"code-branch",experimental:!0});ft.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>Dt(()=>import("./pyterminal-extension-BD4kIbpT.js"),__vite__mapDeps([2,1,3])),icon:"k python",experimental:!0});ft.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>Dt(()=>import("./k-linuxterminal-CpmCAzIS.js"),__vite__mapDeps([4,1,3])),icon:"terminal",experimental:!0});ft.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>Dt(()=>import("./webllmservice-BdmwlYTp.js"),[]),icon:"robot"});ft.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>Dt(()=>import("./p12-splitter-LDII_ap5.js"),__vite__mapDeps([5,1])),icon:"certificate"});ft.registerExtension({id:"system.pythonpackagemanager",name:"Python Package Manager",description:"Manage Python packages for notebooks and other Python-based extensions",loader:()=>Dt(()=>import("./package-manager-extension-CvOySucs.js"),__vite__mapDeps([6,1])),icon:"box"});ft.registerExtension({id:"system.notebook",name:"Jupyter-like Notebook Editor",description:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>Dt(()=>import("./notebook-extension-BLyIvPQ-.js"),__vite__mapDeps([7,1,8,9,6])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});ft.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>Dt(()=>import("./command-palette-extension-CIwqXWJ_.js"),__vite__mapDeps([10,1])),icon:"terminal"});ft.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>Dt(()=>import("./download-extension-s9Z7wu_H.js"),__vite__mapDeps([11,1])),icon:"download"});ft.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>Dt(()=>import("./unzip-extension-BAf4ChmD.js"),__vite__mapDeps([12,1])),icon:"box-archive"});ft.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>Dt(()=>import("./md-editor-extension-CY6RHxK7.js"),__vite__mapDeps([13,1])),icon:"book"});ft.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>Dt(()=>import("./monaco-editor-extension-DoL4cn0N.js"),__vite__mapDeps([14,8,1,9,6])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});ft.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>Dt(()=>import("./memory-usage-extension-CG9hKzfA.js"),__vite__mapDeps([15,1])),icon:"microchip"});ft.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>Dt(()=>import("./webdav-extension-CaHkro2s.js"),__vite__mapDeps([16,1])),icon:"cloud"});const r0=`You are a specialized commands execution plan generator. Your sole purpose is to analyze user requests expressed in natural language and translate them into a precise sequence of command calls that can be executed by a software controller.

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
\`\`\``,i0=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,a0=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``;class o0{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,ir(La,()=>{})}setupEventListeners(t){if(this.listenersAttached)return;this.listenersAttached=!0;const n=o=>{const a=o.detail;a&&Array.from(a.querySelectorAll("*")).filter(f=>f instanceof Zt).forEach(f=>{et.set(f),f.isEditor&&ho.set(f)})};t.addEventListener("tab-shown",n);const r=o=>{const a=o.detail;Array.from(a.querySelectorAll("*")).filter(f=>f instanceof Zt).forEach(f=>{et.get()==f&&et.set(null),ho.get()==f&&ho.set(null)})};t.addEventListener("tab-closed",r),zu(Es,o=>{const c=o.closest("wa-tab-panel").getAttribute("name");t.markDirty(c,o.isDirty())})}registerEditorInputHandler(t){this.editorInputHandlers.push(t),this.editorInputHandlers.sort((n,r)=>(r.ranking??0)-(n.ranking??0))}async handleInput(t){for(let n=0;n<this.editorInputHandlers.length;n++){const r=this.editorInputHandlers[n];if(r.canHandle(t))return await r.handle(t)}}getEditorArea(){return document.querySelector(`k-tabs#${Pi}`)}async loadEditor(t){if(!t||("widgetFactory"in t||(t=await this.handleInput(t)),!t||!("widgetFactory"in t)))return;const n=this.getEditorArea();if(!n){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(n),n.has(t.key)){n.activate(t.key);return}n.open({name:t.key,editorId:t.editorId,label:t.title,icon:t.icon,closable:!0,noOverflow:t.noOverflow,component:t.widgetFactory})}}const Jr=new o0;fn.put("editorRegistry",Jr);let s0=0;Ct.registerContribution(ja,{label:"Commander",description:"Commands execution plan generator",role:"commands",sysPrompt:r0,canHandle:({activeEditor:e})=>{const t=qe.listCommands({source:e});return Object.keys(t).length>0},promptDecorator:async({userPrompt:e,commandRegistry:t,activeEditor:n})=>{const r=t.listCommands({source:n}),i=JSON.stringify(r,null,2);return`${e}

***Available Commands:***
${i}`},messageDecorator:async({message:e,activeEditor:t})=>{if(!e)return;const n=e.content.replace("```json","").replace("```",""),r=JSON.parse(n);let i=!0;e.content=r.map(({id:o,summary:a},c)=>{const f=qe.getCommand(o);return f?`${c+1}. ${f.name}
	- ${a||f.description}`:(i=!1,`${c+1}. *INVALID COMMAND:* _${o}_`)}).join(`
`),e.actions=e.actions||[],e.actions.push({label:"Show Commands Execution Plan",icon:"list",action:async()=>{const o=s0++,a=`\`\`\`json
${JSON.stringify(r,null,2)}
\`\`\``,c=new Gu(a,`Commands Execution Plan (${o}).md`);await Jr.loadEditor(c)}}),i&&e.actions.push({label:"Execute Commands",icon:"play",action:async()=>{const o=t?.getCommandStack()||new jc;await Zi.runAsync("Executing commands",async()=>{Ft.debug("Executing commands: "+JSON.stringify(r));const a=qe.createExecutionContext(t);for(const c of r){const f=Object.entries(c.parameters||{}).map(([b,C])=>(typeof C=="string"&&(C=C.replace(/{{(.*?)}}/g,(x,v)=>a[v.trim()]??"")),[b,C]));a.params=Object.fromEntries(f),await o.execute(c.id,a)}})}})}});const Yu=e=>e&&typeof e.getEditor=="function"&&typeof e.getLanguage=="function",Xu=async({userPrompt:e,activeEditor:t})=>{const n=t.getEditor(),r=n.getModel(),i=r.getValueInRange(n.getSelection());return i?`${e}

 Code selection within file "${t.input?.data.getWorkspacePath()}":

            ${i}`:`${e}

Code in file "${t.input?.data.getWorkspacePath()}":

            ${r.getValue()}`};Ct.registerContribution(ja,{label:"Python Assistant",description:"Python code assistant",role:"py-programmer",sysPrompt:i0,canHandle:({activeEditor:e})=>Yu(e)&&e.getLanguage()=="python",promptDecorator:Xu});Ct.registerContribution(ja,{label:"JavaScript Assistant",description:"JavaScript code assistant",role:"js-programmer",sysPrompt:a0,canHandle:({activeEditor:e})=>Yu(e)&&e.getLanguage()=="javascript",promptDecorator:Xu});Pt({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}]},handler:{execute:async({params:e})=>{const t=await cn.getWorkspace();if(!t){mt("Please select a workspace!");return}let n=e?.path;const r=e?.contents,i=e?.ask,o=e?.extension;if((i||!n)&&(n=await Na("Enter path to new file (directories will be created if not exist):",n||""),!n)||(o&&!n.endsWith(o)&&(n+=o),await t.getResource(n)&&!await na(`File "${n}" already exists. Do you want to overwrite it?`)))return;const c=await t.getResource(n,{create:!0});c?(r&&await c.saveContents(r),yn("File created: "+n)):mt("Could not create file: "+n)}}});Pt({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async e=>{let t,n=e.params&&e.params.path;if(n){const o=await cn.getWorkspace();o&&(t=await o.getResource(n))}if(t||(t=$n.get()),!t){mt("No resource to rename provided!");return}const r=t.getName(),i=e.params?.newName||await Na(`Enter new name for "${r}":`,r);if(!(!i||i===r))try{await t.rename(i),yn(`Resource renamed to: ${i}`)}catch(o){mt(`Failed to rename ${r}: ${o.message}`)}}}});Pt({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async e=>{let t,n=e.params&&e.params.path;if(n){const o=await cn.getWorkspace();o&&(t=await o.getResource(n))}if(t||(t=$n.get()),!t){mt("No resource to delete provided!");return}n=t.getWorkspacePath();const r=e.params&&e.params.confirm;let i=!0;if((r===void 0||r===!0)&&(i=await na(`Are you sure you want to delete ${n}?`)),i)try{await t.delete(),yn("Resource deleted: "+n)}catch(o){mt(`Resource ${n} could not be deleted: ${o.message||o}`)}}}});Pt({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async e=>{await window.showDirectoryPicker({mode:"readwrite"}).then(t=>cn.connectWorkspace(t)).catch(t=>{mt(t.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});Pt({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async e=>{const t=await cn.getWorkspace();t||mt("No workspace selected."),t.touch()}}});Pt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async e=>{const t=await cn.getWorkspace();t||mt("No workspace selected.");const n=e.params.path,r=await t?.getResource(n);await Jr.loadEditor(r)}}});var _r={},Gn={},Cc;function l0(){if(Cc)return Gn;Cc=1,Object.defineProperty(Gn,"__esModule",{value:!0});function e(h){const s=h||"";return function(){throw new Error("this method "+s+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function t(h,s){if(!h)throw new Error(s||"Assertion failed")}function n(h,s,u){let m;Object.defineProperty(h,s,{get(){return m||(m=u.call(this)),m}})}function r(h){return h&&Object.assign({},h)}function i(h,s){const u=[];for(;s-- >0;)u.push(h());return u}function o(h,s){return new Array(s+1).join(h)}function a(h,s){return i(()=>h,s)}function c(h){const s=[];for(let u=0;u<h.length;u++){const m=h[u];h.lastIndexOf(m)!==u&&s.indexOf(m)<0&&s.push(m)}return s}function f(h){const s=[];return h.forEach(u=>{s.indexOf(u)<0&&s.push(u)}),s}function b(h){const s=h[0];return s===s.toUpperCase()}function C(h){return!b(h)}function x(h,s,u){const m=u||" ";return h.length<s?o(m,s-h.length)+h:h}function v(){this.strings=[]}v.prototype.append=function(h){this.strings.push(h)},v.prototype.contents=function(){return this.strings.join("")};const I=h=>String.fromCodePoint(parseInt(h,16));function R(h){if(h.charAt(0)==="\\")switch(h.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return I(h.slice(2,4));case"u":return h.charAt(2)==="{"?I(h.slice(3,-1)):I(h.slice(2,6));default:return h.charAt(1)}else return h}function P(h){if(h==null)return String(h);const s=Object.prototype.toString.call(h);try{let u;return h.constructor&&h.constructor.name?u=h.constructor.name:s.indexOf("[object ")===0?u=s.slice(8,-1):u=typeof h,u+": "+JSON.stringify(String(h))}catch{return s}}var V=Object.freeze({__proto__:null,abstract:e,assert:t,defineLazyProperty:n,clone:r,repeatFn:i,repeatStr:o,repeat:a,getDuplicates:c,copyWithoutDuplicates:f,isSyntactic:b,isLexical:C,padLeft:x,StringBuffer:v,unescapeCodePoint:R,unexpectedObjToString:P});const K={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class M{constructor(){if(this.constructor===M)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(s){return s&&(this.source=s.trimmed()),this}}const z=Object.create(M.prototype),H=Object.create(M.prototype);class F extends M{constructor(s){super(),this.obj=s}}class D extends M{constructor(s,u){super(),this.from=s,this.to=u,this.matchCodePoint=s.length>1||u.length>1}}class G extends M{constructor(s){super(),this.index=s}}class Z extends M{constructor(s){super(),this.terms=s}}class xe extends Z{constructor(s,u,m){const k=s.rules[u].body;super([m,k]),this.superGrammar=s,this.name=u,this.body=m}}class Oe extends Z{constructor(s,u,m,k){const L=s.rules[u].body;super([...m,L,...k]),this.superGrammar=s,this.ruleName=u,this.expansionPos=m.length}}class ue extends M{constructor(s){super(),this.factors=s}}class U extends M{constructor(s){super(),this.expr=s}}class oe extends U{}class pe extends U{}class Ce extends U{}oe.prototype.operator="*",pe.prototype.operator="+",Ce.prototype.operator="?",oe.prototype.minNumMatches=0,pe.prototype.minNumMatches=1,Ce.prototype.minNumMatches=0,oe.prototype.maxNumMatches=Number.POSITIVE_INFINITY,pe.prototype.maxNumMatches=Number.POSITIVE_INFINITY,Ce.prototype.maxNumMatches=1;class se extends M{constructor(s){super(),this.expr=s}}class Q extends M{constructor(s){super(),this.expr=s}}class ie extends M{constructor(s){super(),this.expr=s}}class X extends M{constructor(s,u=[]){super(),this.ruleName=s,this.args=u}isSyntactic(){return b(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class $e extends M{constructor(s){super(),this.category=s,this.pattern=K[s]}}function Be(h,s){let u;return s?(u=new Error(s.getLineAndColumnMessage()+h),u.shortMessage=h,u.interval=s):u=new Error(h),u}function S(){return Be("Interval sources don't match")}function $(h){const s=new Error;return Object.defineProperty(s,"message",{enumerable:!0,get(){return h.message}}),Object.defineProperty(s,"shortMessage",{enumerable:!0,get(){return"Expected "+h.getExpectedText()}}),s.interval=h.getInterval(),s}function ve(h,s,u){const m=s?`Grammar ${h} is not declared in namespace '${s}'`:"Undeclared grammar "+h;return Be(m,u)}function Pe(h,s){return Be("Grammar "+h.name+" is already declared in this namespace")}function ct(h){return Be(`Grammar '${h.name}' does not support incremental parsing`)}function He(h,s,u){return Be("Rule "+h+" is not declared in grammar "+s,u)}function N(h,s,u){return Be("Cannot override rule "+h+" because it is not declared in "+s,u)}function W(h,s,u){return Be("Cannot extend rule "+h+" because it is not declared in "+s,u)}function q(h,s,u,m){let k="Duplicate declaration for rule '"+h+"' in grammar '"+s+"'";return s!==u&&(k+=" (originally declared in '"+u+"')"),Be(k,m)}function J(h,s,u,m){return Be("Wrong number of parameters for rule "+h+" (expected "+s+", got "+u+")",m)}function de(h,s,u,m){return Be("Wrong number of arguments for rule "+h+" (expected "+s+", got "+u+")",m)}function ae(h,s,u){return Be("Duplicate parameter names in rule "+h+": "+s.join(", "),u)}function Y(h,s){return Be("Invalid parameter to rule "+h+": "+s+" has arity "+s.getArity()+", but parameter expressions must have arity 1",s.source)}const ce="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function Ee(h,s){return Be("Cannot apply syntactic rule "+h+" from here (inside a lexical context)",s.source)}function je(h){const{ruleName:s}=h;return Be(`applySyntactic is for syntactic rules, but '${s}' is a lexical rule. `+ce,h.source)}function Ge(h){return Be("applySyntactic is not required here (in a syntactic context)",h.source)}function Se(h,s){return Be("Incorrect argument type: expected "+h,s.source)}function Te(h){return Be("'...' can appear at most once in a rule body",h.source)}function Ue(h){const s=h._node;t(s&&s.isNonterminal()&&s.ctorName==="escapeChar_unicodeCodePoint");const u=h.children.slice(1,-1).map(k=>k.source),m=u[0].coverageWith(...u.slice(1));return Be(`U+${m.contents} is not a valid Unicode code point`,m)}function ke(h,s){const u=s.length>0?s[s.length-1].args:[];let k="Nullable expression "+h.expr.substituteParams(u)+" is not allowed inside '"+h.operator+"' (possible infinite loop)";if(s.length>0){const L=s.map(j=>new X(j.ruleName,j.args)).join(`
`);k+=`
Application stack (most recent application last):
`+L}return Be(k,h.expr.source)}function Ot(h,s,u,m){return Be("Rule "+h+" involves an alternation which has inconsistent arity (expected "+s+", got "+u+")",m.source)}function gn(h){const s=h.map(u=>u.message);return Be(["Errors:"].concat(s).join(`
- `),h[0].interval)}function Ut(h,s,u,m){let k=m.slice(0,-1).map(re=>{const Ie="  "+re[0].name+" > "+re[1];return re.length===3?Ie+" for '"+re[2]+"'":Ie}).join(`
`);k+=`
  `+s+" > "+h;let L="";h==="_iter"&&(L=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const j=[`Missing semantic action for '${h}' in ${u} '${s}'.${L}`,"Action stack (most recent call last):",k].join(`
`),le=Be(j);return le.name="missingSemanticAction",le}function Tt(h){if(h.length===1)throw h[0];if(h.length>1)throw gn(h)}function jt(h){let s=0;return h.map(m=>{const k=m.toString();return s=Math.max(s,k.length),k}).map(m=>x(m,s))}function Rn(h,s,u){const m=h.length,k=h.slice(0,u),L=h.slice(u+s.length);return(k+s+L).substr(0,m)}function or(...h){const s=this,{offset:u}=s,{repeatStr:m}=V,k=new v;k.append("Line "+s.lineNum+", col "+s.colNum+`:
`);const L=jt([s.prevLine==null?0:s.lineNum-1,s.lineNum,s.nextLine==null?0:s.lineNum+1]),j=(te,ee,be)=>{k.append(be+L[te]+" | "+ee+`
`)};s.prevLine!=null&&j(0,s.prevLine,"  "),j(1,s.line,"> ");const le=s.line.length;let re=m(" ",le+1);for(let te=0;te<h.length;++te){let ee=h[te][0],be=h[te][1];t(ee>=0&&ee<=be,"range start must be >= 0 and <= end");const Le=u-s.colNum+1;ee=Math.max(0,ee-Le),be=Math.min(be-Le,le),re=Rn(re,m("~",be-ee),ee)}const Ie=2+L[1].length+3;return k.append(m(" ",Ie)),re=Rn(re,"^",s.colNum-1),k.append(re.replace(/ +$/,"")+`
`),s.nextLine!=null&&j(2,s.nextLine,"  "),k.contents()}let Mr=[];function Un(h){Mr.push(h)}function me(h){Mr.forEach(s=>{s(h)}),Mr=null}function Nr(h,s){let u=1,m=1,k=0,L=0,j=null,le=null,re=-1;for(;k<s;){const ee=h.charAt(k++);ee===`
`?(u++,m=1,re=L,L=k):ee!=="\r"&&m++}let Ie=h.indexOf(`
`,L);if(Ie===-1)Ie=h.length;else{const ee=h.indexOf(`
`,Ie+1);j=ee===-1?h.slice(Ie):h.slice(Ie,ee),j=j.replace(/^\r?\n/,"").replace(/\r$/,"")}re>=0&&(le=h.slice(re,L).replace(/\r?\n$/,""));const te=h.slice(L,Ie).replace(/\r$/,"");return{offset:s,lineNum:u,colNum:m,line:te,prevLine:le,nextLine:j,toString:or}}function Ir(h,s,...u){return Nr(h,s).toString(...u)}const bn=(()=>{let h=0;return s=>""+s+h++})();class kt{constructor(s,u,m){this.sourceString=s,this.startIdx=u,this.endIdx=m}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...s){return kt.coverage(...s,this)}collapsedLeft(){return new kt(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new kt(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return Nr(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const s=[this.startIdx,this.endIdx];return Ir(this.sourceString,this.startIdx,s)}minus(s){if(this.sourceString!==s.sourceString)throw S();return this.startIdx===s.startIdx&&this.endIdx===s.endIdx?[]:this.startIdx<s.startIdx&&s.endIdx<this.endIdx?[new kt(this.sourceString,this.startIdx,s.startIdx),new kt(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.endIdx&&s.endIdx<this.endIdx?[new kt(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.startIdx&&s.startIdx<this.endIdx?[new kt(this.sourceString,this.startIdx,s.startIdx)]:[this]}relativeTo(s){if(this.sourceString!==s.sourceString)throw S();return t(this.startIdx>=s.startIdx&&this.endIdx<=s.endIdx,"other interval does not cover this one"),new kt(this.sourceString,this.startIdx-s.startIdx,this.endIdx-s.startIdx)}trimmed(){const{contents:s}=this,u=this.startIdx+s.match(/^\s*/)[0].length,m=this.endIdx-s.match(/\s*$/)[0].length;return new kt(this.sourceString,u,m)}subInterval(s,u){const m=this.startIdx+s;return new kt(this.sourceString,m,m+u)}}kt.coverage=function(h,...s){let{startIdx:u,endIdx:m}=h;for(const k of s){if(k.sourceString!==h.sourceString)throw S();u=Math.min(u,k.startIdx),m=Math.max(m,k.endIdx)}return new kt(h.sourceString,u,m)};const zn=65535;class Je{constructor(s){this.source=s,this.pos=0,this.examinedLength=0}atEnd(){const s=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),s}next(){const s=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),s}nextCharCode(){const s=this.next();return s&&s.charCodeAt(0)}nextCodePoint(){const s=this.source.slice(this.pos++).codePointAt(0);return s>zn&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),s}matchString(s,u){let m;if(u){for(m=0;m<s.length;m++){const k=this.next(),L=s[m];if(k==null||k.toUpperCase()!==L.toUpperCase())return!1}return!0}for(m=0;m<s.length;m++)if(this.next()!==s[m])return!1;return!0}sourceSlice(s,u){return this.source.slice(s,u)}interval(s,u){return new kt(this.source,s,u||this.pos)}}class y{constructor(s,u,m,k,L,j,le){this.matcher=s,this.input=u,this.startExpr=m,this._cst=k,this._cstOffset=L,this._rightmostFailurePosition=j,this._rightmostFailures=le,this.failed()&&(n(this,"message",function(){const re="Expected "+this.getExpectedText();return Ir(this.input,this.getRightmostFailurePosition())+re}),n(this,"shortMessage",function(){const re="expected "+this.getExpectedText(),Ie=Nr(this.input,this.getRightmostFailurePosition());return"Line "+Ie.lineNum+", col "+Ie.colNum+": "+re}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const s=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=s.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const s=new v;let u=this.getRightmostFailures();u=u.filter(m=>!m.isFluffy());for(let m=0;m<u.length;m++)m>0&&(m===u.length-1?s.append(u.length>2?", or ":" or "):s.append(", ")),s.append(u[m].toString());return s.contents()}getInterval(){const s=this.getRightmostFailurePosition();return new kt(this.input,s,s)}}class E{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(s){return this.applicationMemoKeyStack.indexOf(s.toMemoKey())>=0}enter(s){this.applicationMemoKeyStack.push(s.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(s,u){u.isLeftRecursion=!0,u.headApplication=s,u.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=u;const{applicationMemoKeyStack:m}=this,k=m.indexOf(s.toMemoKey())+1,L=m.slice(k);u.isInvolved=function(j){return L.indexOf(j)>=0},u.updateInvolvedApplicationMemoKeys=function(){for(let j=k;j<m.length;j++){const le=m[j];this.isInvolved(le)||L.push(le)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(s){if(!s.isLeftRecursion)return!0;const{applicationMemoKeyStack:u}=this;for(let m=0;m<u.length;m++){const k=u[m];if(s.isInvolved(k))return!1}return!0}memoize(s,u){return this.memo[s]=u,this.maxExaminedLength=Math.max(this.maxExaminedLength,u.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,u.rightmostFailureOffset),u}clearObsoleteEntries(s,u){if(s+this.maxExaminedLength<=u)return;const{memo:m}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(m).forEach(k=>{const L=m[k];s+L.examinedLength>u?delete m[k]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,L.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,L.rightmostFailureOffset))})}}const O="✗",d="✓",g="⋅",w="⇒",T="␉",_="␊",B="␍",ne={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function we(h){return a(" ",h).join("")}function Ae(h,s,u){const m=tt(h.slice(s,s+u));return m.length<u?m+a(" ",u-m.length).join(""):m}function tt(h){return typeof h=="string"?h.replace(/ /g,g).replace(/\t/g,T).replace(/\n/g,_).replace(/\r/g,B):String(h)}class Re{constructor(s,u,m,k,L,j,le){this.input=s,this.pos=this.pos1=u,this.pos2=m,this.source=new kt(s,u,m),this.expr=k,this.bindings=j,this.children=le||[],this.terminatingLREntry=null,this._flags=L?ne.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(s){const u=new Re(this.input,this.pos,this.pos2,s,this.succeeded,this.bindings,this.children);return u.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,u.isImplicitSpaces=this.isImplicitSpaces,u.isMemoized=this.isMemoized,u.isRootNode=this.isRootNode,u.terminatesLR=this.terminatesLR,u.terminatingLREntry=this.terminatingLREntry,u}recordLRTermination(s,u){this.terminatingLREntry=new Re(this.input,this.pos,this.pos2,this.expr,!1,[u],[s]),this.terminatingLREntry.terminatesLR=!0}walk(s,u){let m=s;typeof m=="function"&&(m={enter:m});function k(L,j,le){let re=!0;m.enter&&m.enter.call(u,L,j,le)===Re.prototype.SKIP&&(re=!1),re&&(L.children.forEach(Ie=>{k(Ie,L,le+1)}),m.exit&&m.exit.call(u,L,j,le))}this.isRootNode?this.children.forEach(L=>{k(L,null,0)}):k(this,null,0)}toString(){const s=new v;return this.walk((u,m,k)=>{if(!u)return this.SKIP;if(u.expr.constructor.name!=="Alt"){if(s.append(Ae(u.input,u.pos,10)+we(k*2+1)),s.append((u.succeeded?d:O)+" "+u.displayString),u.isHeadOfLeftRecursion&&s.append(" (LR)"),u.succeeded){const j=tt(u.source.contents);s.append(" "+w+"  "),s.append(typeof j=="string"?'"'+j+'"':j)}s.append(`
`)}}),s.contents()}}Re.prototype.SKIP={},Object.keys(ne).forEach(h=>{const s=ne[h];Object.defineProperty(Re.prototype,h,{get(){return(this._flags&s)!==0},set(u){u?this._flags|=s:this._flags&=~s}})}),M.prototype.allowsSkippingPrecedingSpace=e("allowsSkippingPrecedingSpace"),z.allowsSkippingPrecedingSpace=H.allowsSkippingPrecedingSpace=X.prototype.allowsSkippingPrecedingSpace=F.prototype.allowsSkippingPrecedingSpace=D.prototype.allowsSkippingPrecedingSpace=$e.prototype.allowsSkippingPrecedingSpace=function(){return!0},Z.prototype.allowsSkippingPrecedingSpace=U.prototype.allowsSkippingPrecedingSpace=ie.prototype.allowsSkippingPrecedingSpace=Q.prototype.allowsSkippingPrecedingSpace=se.prototype.allowsSkippingPrecedingSpace=G.prototype.allowsSkippingPrecedingSpace=ue.prototype.allowsSkippingPrecedingSpace=function(){return!1};let nt;Un(h=>{nt=h});let Ke;M.prototype.assertAllApplicationsAreValid=function(h,s){Ke=0,this._assertAllApplicationsAreValid(h,s)},M.prototype._assertAllApplicationsAreValid=e("_assertAllApplicationsAreValid"),z._assertAllApplicationsAreValid=H._assertAllApplicationsAreValid=F.prototype._assertAllApplicationsAreValid=D.prototype._assertAllApplicationsAreValid=G.prototype._assertAllApplicationsAreValid=$e.prototype._assertAllApplicationsAreValid=function(h,s){},ie.prototype._assertAllApplicationsAreValid=function(h,s){Ke++,this.expr._assertAllApplicationsAreValid(h,s),Ke--},Z.prototype._assertAllApplicationsAreValid=function(h,s){for(let u=0;u<this.terms.length;u++)this.terms[u]._assertAllApplicationsAreValid(h,s)},ue.prototype._assertAllApplicationsAreValid=function(h,s){for(let u=0;u<this.factors.length;u++)this.factors[u]._assertAllApplicationsAreValid(h,s)},U.prototype._assertAllApplicationsAreValid=se.prototype._assertAllApplicationsAreValid=Q.prototype._assertAllApplicationsAreValid=function(h,s){this.expr._assertAllApplicationsAreValid(h,s)},X.prototype._assertAllApplicationsAreValid=function(h,s,u=!1){const m=s.rules[this.ruleName],k=b(h)&&Ke===0;if(!m)throw He(this.ruleName,s.name,this.source);if(!u&&b(this.ruleName)&&!k)throw Ee(this.ruleName,this);const L=this.args.length,j=m.formals.length;if(L!==j)throw de(this.ruleName,j,L,this.source);const le=nt&&m===nt.rules.applySyntactic;if(nt&&m===nt.rules.caseInsensitive&&!(this.args[0]instanceof F))throw Se('a Terminal (e.g. "abc")',this.args[0]);if(le){const Ie=this.args[0];if(!(Ie instanceof X))throw Se("a syntactic rule application",Ie);if(!b(Ie.ruleName))throw je(Ie);if(k)throw Ge(this)}this.args.forEach(Ie=>{if(Ie._assertAllApplicationsAreValid(h,s,le),Ie.getArity()!==1)throw Y(this.ruleName,Ie)})},M.prototype.assertChoicesHaveUniformArity=e("assertChoicesHaveUniformArity"),z.assertChoicesHaveUniformArity=H.assertChoicesHaveUniformArity=F.prototype.assertChoicesHaveUniformArity=D.prototype.assertChoicesHaveUniformArity=G.prototype.assertChoicesHaveUniformArity=ie.prototype.assertChoicesHaveUniformArity=$e.prototype.assertChoicesHaveUniformArity=function(h){},Z.prototype.assertChoicesHaveUniformArity=function(h){if(this.terms.length===0)return;const s=this.terms[0].getArity();for(let u=0;u<this.terms.length;u++){const m=this.terms[u];m.assertChoicesHaveUniformArity();const k=m.getArity();if(s!==k)throw Ot(h,s,k,m)}},xe.prototype.assertChoicesHaveUniformArity=function(h){const s=this.terms[0].getArity(),u=this.terms[1].getArity();if(s!==u)throw Ot(h,u,s,this.terms[0])},ue.prototype.assertChoicesHaveUniformArity=function(h){for(let s=0;s<this.factors.length;s++)this.factors[s].assertChoicesHaveUniformArity(h)},U.prototype.assertChoicesHaveUniformArity=function(h){this.expr.assertChoicesHaveUniformArity(h)},se.prototype.assertChoicesHaveUniformArity=function(h){},Q.prototype.assertChoicesHaveUniformArity=function(h){this.expr.assertChoicesHaveUniformArity(h)},X.prototype.assertChoicesHaveUniformArity=function(h){},M.prototype.assertIteratedExprsAreNotNullable=e("assertIteratedExprsAreNotNullable"),z.assertIteratedExprsAreNotNullable=H.assertIteratedExprsAreNotNullable=F.prototype.assertIteratedExprsAreNotNullable=D.prototype.assertIteratedExprsAreNotNullable=G.prototype.assertIteratedExprsAreNotNullable=$e.prototype.assertIteratedExprsAreNotNullable=function(h){},Z.prototype.assertIteratedExprsAreNotNullable=function(h){for(let s=0;s<this.terms.length;s++)this.terms[s].assertIteratedExprsAreNotNullable(h)},ue.prototype.assertIteratedExprsAreNotNullable=function(h){for(let s=0;s<this.factors.length;s++)this.factors[s].assertIteratedExprsAreNotNullable(h)},U.prototype.assertIteratedExprsAreNotNullable=function(h){if(this.expr.assertIteratedExprsAreNotNullable(h),this.expr.isNullable(h))throw ke(this,[])},Ce.prototype.assertIteratedExprsAreNotNullable=se.prototype.assertIteratedExprsAreNotNullable=Q.prototype.assertIteratedExprsAreNotNullable=ie.prototype.assertIteratedExprsAreNotNullable=function(h){this.expr.assertIteratedExprsAreNotNullable(h)},X.prototype.assertIteratedExprsAreNotNullable=function(h){this.args.forEach(s=>{s.assertIteratedExprsAreNotNullable(h)})};class St{constructor(s){this.matchLength=s}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(s){if(this.children)return this.children[s]}indexOfChild(s){return this.children.indexOf(s)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(s){const u=this.indexOfChild(s);if(u<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(u===0)throw new Error("cannot get child before first child");return this.childAt(u-1)}childAfter(s){const u=this.indexOfChild(s);if(u<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(u===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(u+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class Fe extends St{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class bt extends St{constructor(s,u,m,k){super(k),this.ruleName=s,this.children=u,this.childOffsets=m}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return C(this.ctorName)}isSyntactic(){return b(this.ctorName)}}class un extends St{constructor(s,u,m,k){super(m),this.children=s,this.childOffsets=u,this.optional=k}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}M.prototype.eval=e("eval"),z.eval=function(h){const{inputStream:s}=h,u=s.pos,m=s.nextCodePoint();return m!==void 0?(h.pushBinding(new Fe(String.fromCodePoint(m).length),u),!0):(h.processFailure(u,this),!1)},H.eval=function(h){const{inputStream:s}=h,u=s.pos;return s.atEnd()?(h.pushBinding(new Fe(0),u),!0):(h.processFailure(u,this),!1)},F.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos;return s.matchString(this.obj)?(h.pushBinding(new Fe(this.obj.length),u),!0):(h.processFailure(u,this),!1)},D.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos,m=this.matchCodePoint?s.nextCodePoint():s.nextCharCode();return m!==void 0&&this.from.codePointAt(0)<=m&&m<=this.to.codePointAt(0)?(h.pushBinding(new Fe(String.fromCodePoint(m).length),u),!0):(h.processFailure(u,this),!1)},G.prototype.eval=function(h){return h.eval(h.currentApplication().args[this.index])},ie.prototype.eval=function(h){h.enterLexifiedContext();const s=h.eval(this.expr);return h.exitLexifiedContext(),s},Z.prototype.eval=function(h){for(let s=0;s<this.terms.length;s++)if(h.eval(this.terms[s]))return!0;return!1},ue.prototype.eval=function(h){for(let s=0;s<this.factors.length;s++){const u=this.factors[s];if(!h.eval(u))return!1}return!0},U.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos,m=this.getArity(),k=[],L=[];for(;k.length<m;)k.push([]),L.push([]);let j=0,le=u,re;for(;j<this.maxNumMatches&&h.eval(this.expr);){if(s.pos===le)throw ke(this,h._applicationStack);le=s.pos,j++;const be=h._bindings.splice(h._bindings.length-m,m),Le=h._bindingOffsets.splice(h._bindingOffsets.length-m,m);for(re=0;re<be.length;re++)k[re].push(be[re]),L[re].push(Le[re])}if(j<this.minNumMatches)return!1;let Ie=h.posToOffset(u),te=0;if(j>0){const be=k[m-1],Le=L[m-1],it=Le[Le.length-1]+be[be.length-1].matchLength;Ie=L[0][0],te=it-Ie}const ee=this instanceof Ce;for(re=0;re<k.length;re++)h._bindings.push(new un(k[re],L[re],te,ee)),h._bindingOffsets.push(Ie);return!0},se.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos;h.pushFailuresInfo();const m=h.eval(this.expr);return h.popFailuresInfo(),m?(h.processFailure(u,this),!1):(s.pos=u,!0)},Q.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos;return h.eval(this.expr)?(s.pos=u,!0):!1},X.prototype.eval=function(h){const s=h.currentApplication(),u=s?s.args:[],m=this.substituteParams(u),k=h.getCurrentPosInfo();if(k.isActive(m))return m.handleCycle(h);const L=m.toMemoKey(),j=k.memo[L];if(j&&k.shouldUseMemoizedResult(j)){if(h.hasNecessaryInfo(j))return h.useMemoizedResult(h.inputStream.pos,j);delete k.memo[L]}return m.reallyEval(h)},X.prototype.handleCycle=function(h){const s=h.getCurrentPosInfo(),{currentLeftRecursion:u}=s,m=this.toMemoKey();let k=s.memo[m];return u&&u.headApplication.toMemoKey()===m?k.updateInvolvedApplicationMemoKeys():k||(k=s.memoize(m,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),s.startLeftRecursion(this,k)),h.useMemoizedResult(h.inputStream.pos,k)},X.prototype.reallyEval=function(h){const{inputStream:s}=h,u=s.pos,m=h.getCurrentPosInfo(),k=h.grammar.rules[this.ruleName],{body:L}=k,{description:j}=k;h.enterApplication(m,this),j&&h.pushFailuresInfo();const le=s.examinedLength;s.examinedLength=0;let re=this.evalOnce(L,h);const Ie=m.currentLeftRecursion,te=this.toMemoKey(),ee=Ie&&Ie.headApplication.toMemoKey()===te;let be;h.doNotMemoize?h.doNotMemoize=!1:ee?(re=this.growSeedResult(L,h,u,Ie,re),m.endLeftRecursion(),be=Ie,be.examinedLength=s.examinedLength-u,be.rightmostFailureOffset=h._getRightmostFailureOffset(),m.memoize(te,be)):(!Ie||!Ie.isInvolved(te))&&(be=m.memoize(te,{matchLength:s.pos-u,examinedLength:s.examinedLength-u,value:re,failuresAtRightmostPosition:h.cloneRecordedFailures(),rightmostFailureOffset:h._getRightmostFailureOffset()}));const Le=!!re;if(j&&(h.popFailuresInfo(),Le||h.processFailure(u,this),be&&(be.failuresAtRightmostPosition=h.cloneRecordedFailures())),h.isTracing()&&be){const it=h.getTraceEntry(u,this,Le,Le?[re]:[]);ee&&(t(it.terminatingLREntry!=null||!Le),it.isHeadOfLeftRecursion=!0),be.traceEntry=it}return s.examinedLength=Math.max(s.examinedLength,le),h.exitApplication(m,re),Le},X.prototype.evalOnce=function(h,s){const{inputStream:u}=s,m=u.pos;if(s.eval(h)){const k=h.getArity(),L=s._bindings.splice(s._bindings.length-k,k),j=s._bindingOffsets.splice(s._bindingOffsets.length-k,k),le=u.pos-m;return new bt(this.ruleName,L,j,le)}else return!1},X.prototype.growSeedResult=function(h,s,u,m,k){if(!k)return!1;const{inputStream:L}=s;for(;;){if(m.matchLength=L.pos-u,m.value=k,m.failuresAtRightmostPosition=s.cloneRecordedFailures(),s.isTracing()){const j=s.trace[s.trace.length-1];m.traceEntry=new Re(s.input,u,L.pos,this,!0,[k],[j.clone()])}if(L.pos=u,k=this.evalOnce(h,s),L.pos-u<=m.matchLength)break;s.isTracing()&&s.trace.splice(-2,1)}return s.isTracing()&&m.traceEntry.recordLRTermination(s.trace.pop(),k),L.pos=u+m.matchLength,m.value},$e.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos,m=s.next();return m&&this.pattern.test(m)?(h.pushBinding(new Fe(m.length),u),!0):(h.processFailure(u,this),!1)},M.prototype.getArity=e("getArity"),z.getArity=H.getArity=F.prototype.getArity=D.prototype.getArity=G.prototype.getArity=X.prototype.getArity=$e.prototype.getArity=function(){return 1},Z.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},ue.prototype.getArity=function(){let h=0;for(let s=0;s<this.factors.length;s++)h+=this.factors[s].getArity();return h},U.prototype.getArity=function(){return this.expr.getArity()},se.prototype.getArity=function(){return 0},Q.prototype.getArity=ie.prototype.getArity=function(){return this.expr.getArity()};function ut(h,s){const u={};if(h.source&&s){const m=h.source.relativeTo(s);u.sourceInterval=[m.startIdx,m.endIdx]}return u}M.prototype.outputRecipe=e("outputRecipe"),z.outputRecipe=function(h,s){return["any",ut(this,s)]},H.outputRecipe=function(h,s){return["end",ut(this,s)]},F.prototype.outputRecipe=function(h,s){return["terminal",ut(this,s),this.obj]},D.prototype.outputRecipe=function(h,s){return["range",ut(this,s),this.from,this.to]},G.prototype.outputRecipe=function(h,s){return["param",ut(this,s),this.index]},Z.prototype.outputRecipe=function(h,s){return["alt",ut(this,s)].concat(this.terms.map(u=>u.outputRecipe(h,s)))},xe.prototype.outputRecipe=function(h,s){return this.terms[0].outputRecipe(h,s)},Oe.prototype.outputRecipe=function(h,s){const u=this.terms.slice(0,this.expansionPos),m=this.terms.slice(this.expansionPos+1);return["splice",ut(this,s),u.map(k=>k.outputRecipe(h,s)),m.map(k=>k.outputRecipe(h,s))]},ue.prototype.outputRecipe=function(h,s){return["seq",ut(this,s)].concat(this.factors.map(u=>u.outputRecipe(h,s)))},oe.prototype.outputRecipe=pe.prototype.outputRecipe=Ce.prototype.outputRecipe=se.prototype.outputRecipe=Q.prototype.outputRecipe=ie.prototype.outputRecipe=function(h,s){return[this.constructor.name.toLowerCase(),ut(this,s),this.expr.outputRecipe(h,s)]},X.prototype.outputRecipe=function(h,s){return["app",ut(this,s),this.ruleName,this.args.map(u=>u.outputRecipe(h,s))]},$e.prototype.outputRecipe=function(h,s){return["unicodeChar",ut(this,s),this.category]},M.prototype.introduceParams=e("introduceParams"),z.introduceParams=H.introduceParams=F.prototype.introduceParams=D.prototype.introduceParams=G.prototype.introduceParams=$e.prototype.introduceParams=function(h){return this},Z.prototype.introduceParams=function(h){return this.terms.forEach((s,u,m)=>{m[u]=s.introduceParams(h)}),this},ue.prototype.introduceParams=function(h){return this.factors.forEach((s,u,m)=>{m[u]=s.introduceParams(h)}),this},U.prototype.introduceParams=se.prototype.introduceParams=Q.prototype.introduceParams=ie.prototype.introduceParams=function(h){return this.expr=this.expr.introduceParams(h),this},X.prototype.introduceParams=function(h){const s=h.indexOf(this.ruleName);if(s>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new G(s).withSource(this.source)}else return this.args.forEach((u,m,k)=>{k[m]=u.introduceParams(h)}),this},M.prototype.isNullable=function(h){return this._isNullable(h,Object.create(null))},M.prototype._isNullable=e("_isNullable"),z._isNullable=D.prototype._isNullable=G.prototype._isNullable=pe.prototype._isNullable=$e.prototype._isNullable=function(h,s){return!1},H._isNullable=function(h,s){return!0},F.prototype._isNullable=function(h,s){return typeof this.obj=="string"?this.obj==="":!1},Z.prototype._isNullable=function(h,s){return this.terms.length===0||this.terms.some(u=>u._isNullable(h,s))},ue.prototype._isNullable=function(h,s){return this.factors.every(u=>u._isNullable(h,s))},oe.prototype._isNullable=Ce.prototype._isNullable=se.prototype._isNullable=Q.prototype._isNullable=function(h,s){return!0},ie.prototype._isNullable=function(h,s){return this.expr._isNullable(h,s)},X.prototype._isNullable=function(h,s){const u=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(s,u)){const{body:m}=h.rules[this.ruleName],k=m.substituteParams(this.args);s[u]=!1,s[u]=k._isNullable(h,s)}return s[u]},M.prototype.substituteParams=e("substituteParams"),z.substituteParams=H.substituteParams=F.prototype.substituteParams=D.prototype.substituteParams=$e.prototype.substituteParams=function(h){return this},G.prototype.substituteParams=function(h){return h[this.index]},Z.prototype.substituteParams=function(h){return new Z(this.terms.map(s=>s.substituteParams(h)))},ue.prototype.substituteParams=function(h){return new ue(this.factors.map(s=>s.substituteParams(h)))},U.prototype.substituteParams=se.prototype.substituteParams=Q.prototype.substituteParams=ie.prototype.substituteParams=function(h){return new this.constructor(this.expr.substituteParams(h))},X.prototype.substituteParams=function(h){if(this.args.length===0)return this;{const s=this.args.map(u=>u.substituteParams(h));return new X(this.ruleName,s)}};function Cr(h){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(h)}function gt(h){const s=Object.create(null);h.forEach(u=>{s[u]=(s[u]||0)+1}),Object.keys(s).forEach(u=>{if(s[u]<=1)return;let m=1;h.forEach((k,L)=>{k===u&&(h[L]=k+"_"+m++)})})}M.prototype.toArgumentNameList=e("toArgumentNameList"),z.toArgumentNameList=function(h,s){return["any"]},H.toArgumentNameList=function(h,s){return["end"]},F.prototype.toArgumentNameList=function(h,s){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+h]},D.prototype.toArgumentNameList=function(h,s){let u=this.from+"_to_"+this.to;return Cr(u)||(u="_"+u),Cr(u)||(u="$"+h),[u]},Z.prototype.toArgumentNameList=function(h,s){const u=this.terms.map(L=>L.toArgumentNameList(h,!0)),m=[],k=u[0].length;for(let L=0;L<k;L++){const j=[];for(let re=0;re<this.terms.length;re++)j.push(u[re][L]);const le=f(j);m.push(le.join("_or_"))}return s||gt(m),m},ue.prototype.toArgumentNameList=function(h,s){let u=[];return this.factors.forEach(m=>{const k=m.toArgumentNameList(h,!0);u=u.concat(k),h+=k.length}),s||gt(u),u},U.prototype.toArgumentNameList=function(h,s){const u=this.expr.toArgumentNameList(h,s).map(m=>m[m.length-1]==="s"?m+"es":m+"s");return s||gt(u),u},Ce.prototype.toArgumentNameList=function(h,s){return this.expr.toArgumentNameList(h,s).map(u=>"opt"+u[0].toUpperCase()+u.slice(1))},se.prototype.toArgumentNameList=function(h,s){return[]},Q.prototype.toArgumentNameList=ie.prototype.toArgumentNameList=function(h,s){return this.expr.toArgumentNameList(h,s)},X.prototype.toArgumentNameList=function(h,s){return[this.ruleName]},$e.prototype.toArgumentNameList=function(h,s){return["$"+h]},G.prototype.toArgumentNameList=function(h,s){return["param"+this.index]},M.prototype.toDisplayString=e("toDisplayString"),Z.prototype.toDisplayString=ue.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},z.toDisplayString=H.toDisplayString=U.prototype.toDisplayString=se.prototype.toDisplayString=Q.prototype.toDisplayString=ie.prototype.toDisplayString=F.prototype.toDisplayString=D.prototype.toDisplayString=G.prototype.toDisplayString=function(){return this.toString()},X.prototype.toDisplayString=function(){if(this.args.length>0){const h=this.args.map(s=>s.toDisplayString());return this.ruleName+"<"+h.join(",")+">"}else return this.ruleName},$e.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function ti(h){return h==="description"||h==="string"||h==="code"}class Et{constructor(s,u,m){if(!ti(m))throw new Error("invalid Failure type: "+m);this.pexpr=s,this.text=u,this.type=m,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(s){return this.getText()===s.getText()&&this.type===s.type&&(!this.isFluffy()||this.isFluffy()&&s.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const s=new Et(this.pexpr,this.text,this.type);return this.isFluffy()&&s.makeFluffy(),s}toKey(){return this.toString()+"#"+this.type}}M.prototype.toFailure=e("toFailure"),z.toFailure=function(h){return new Et(this,"any object","description")},H.toFailure=function(h){return new Et(this,"end of input","description")},F.prototype.toFailure=function(h){return new Et(this,this.obj,"string")},D.prototype.toFailure=function(h){return new Et(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},se.prototype.toFailure=function(h){const s=this.expr===z?"nothing":"not "+this.expr.toFailure(h);return new Et(this,s,"description")},Q.prototype.toFailure=function(h){return this.expr.toFailure(h)},X.prototype.toFailure=function(h){let{description:s}=h.rules[this.ruleName];return s||(s=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new Et(this,s,"description")},$e.prototype.toFailure=function(h){return new Et(this,"a Unicode ["+this.category+"] character","description")},Z.prototype.toFailure=function(h){const u="("+this.terms.map(m=>m.toFailure(h)).join(" or ")+")";return new Et(this,u,"description")},ue.prototype.toFailure=function(h){const u="("+this.factors.map(m=>m.toFailure(h)).join(" ")+")";return new Et(this,u,"description")},U.prototype.toFailure=function(h){const s="("+this.expr.toFailure(h)+this.operator+")";return new Et(this,s,"description")},M.prototype.toString=e("toString"),z.toString=function(){return"any"},H.toString=function(){return"end"},F.prototype.toString=function(){return JSON.stringify(this.obj)},D.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},G.prototype.toString=function(){return"$"+this.index},ie.prototype.toString=function(){return"#("+this.expr.toString()+")"},Z.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(h=>h.toString()).join(" | ")+")"},ue.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(h=>h.toString()).join(" ")+")"},U.prototype.toString=function(){return this.expr+this.operator},se.prototype.toString=function(){return"~"+this.expr},Q.prototype.toString=function(){return"&"+this.expr},X.prototype.toString=function(){if(this.args.length>0){const h=this.args.map(s=>s.toString());return this.ruleName+"<"+h.join(",")+">"}else return this.ruleName},$e.prototype.toString=function(){return"\\p{"+this.category+"}"};class jn extends M{constructor(s){super(),this.obj=s}_getString(s){const u=s.currentApplication().args[this.obj.index];return t(u instanceof F,"expected a Terminal expression"),u.obj}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:u}=s,m=u.pos,k=this._getString(s);return u.matchString(k,!0)?(s.pushBinding(new Fe(k.length),m),!0):(s.processFailure(m,this),!1)}getArity(){return 1}substituteParams(s){return new jn(this.obj.substituteParams(s))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(s){return new Et(this,this.obj.toFailure(s)+" (case-insensitive)","description")}_isNullable(s,u){return this.obj._isNullable(s,u)}}var es=Object.freeze({__proto__:null,CaseInsensitiveTerminal:jn,PExpr:M,any:z,end:H,Terminal:F,Range:D,Param:G,Alt:Z,Extend:xe,Splice:Oe,Seq:ue,Iter:U,Star:oe,Plus:pe,Opt:Ce,Not:se,Lookahead:Q,Lex:ie,Apply:X,UnicodeChar:$e});let Ga;Un(h=>{Ga=h.rules.applySyntactic.body});const ca=new X("spaces");class Ka{constructor(s,u,m){this.matcher=s,this.startExpr=u,this.grammar=s.grammar,this.input=s.getInput(),this.inputStream=new Je(this.input),this.memoTable=s._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],m!==void 0&&(this.positionToRecordFailures=m,this.recordedFailures=Object.create(null))}posToOffset(s){return s-this._posStack[this._posStack.length-1]}enterApplication(s,u){this._posStack.push(this.inputStream.pos),this._applicationStack.push(u),this.inLexifiedContextStack.push(!1),s.enter(u),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(s,u){const m=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),s.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),u&&this.pushBinding(u,m)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const s=this.currentApplication();return s?s.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(ca),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(s){return s.allowsSkippingPrecedingSpace()&&s!==ca?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(s,u){this._bindings.push(s),this._bindingOffsets.push(this.posToOffset(u))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(s){for(;this._bindings.length>s;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(s){let u=this.memoTable[s];return u||(u=this.memoTable[s]=new E),u}processFailure(s,u){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,s),this.recordedFailures&&s===this.positionToRecordFailures){const m=this.currentApplication();m&&(u=u.substituteParams(m.args)),this.recordFailure(u.toFailure(this.grammar),!1)}}recordFailure(s,u){const m=s.toKey();this.recordedFailures[m]?this.recordedFailures[m].isFluffy()&&!s.isFluffy()&&this.recordedFailures[m].clearFluffy():this.recordedFailures[m]=u?s.clone():s}recordFailures(s,u){Object.keys(s).forEach(m=>{this.recordFailure(s[m],u)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const s=Object.create(null);return Object.keys(this.recordedFailures).forEach(u=>{s[u]=this.recordedFailures[u].clone()}),s}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(s,u){const m=this.memoTable[s];if(m&&u instanceof X){const k=m.memo[u.toMemoKey()];if(k&&k.traceEntry){const L=k.traceEntry.cloneWithExpr(u);return L.isMemoized=!0,L}}return null}getTraceEntry(s,u,m,k){if(u instanceof X){const L=this.currentApplication(),j=L?L.args:[];u=u.substituteParams(j)}return this.getMemoizedTraceEntry(s,u)||new Re(this.input,s,this.inputStream.pos,u,m,k,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(s){return this.trace&&!s.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+s.rightmostFailureOffset===this.positionToRecordFailures?!!s.failuresAtRightmostPosition:!0}useMemoizedResult(s,u){this.trace&&this.trace.push(u.traceEntry);const m=this.inputStream.pos+u.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,m),this.recordedFailures&&this.positionToRecordFailures===m&&u.failuresAtRightmostPosition&&this.recordFailures(u.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,u.examinedLength+s),u.value?(this.inputStream.pos+=u.matchLength,this.pushBinding(u.value,s),!0):!1}eval(s){const{inputStream:u}=this,m=this._bindings.length,k=this.userData;let L;this.recordedFailures&&(L=this.recordedFailures,this.recordedFailures=Object.create(null));const j=u.pos,le=this.maybeSkipSpacesBefore(s);let re;this.trace&&(re=this.trace,this.trace=[]);const Ie=s.eval(this);if(this.trace){const te=this._bindings.slice(m),ee=this.getTraceEntry(le,s,Ie,te);ee.isImplicitSpaces=s===ca,ee.isRootNode=s===this.startExpr,re.push(ee),this.trace=re}return Ie?this.recordedFailures&&u.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(te=>{this.recordedFailures[te].makeFluffy()}):(u.pos=j,this.truncateBindings(m),this.userData=k),this.recordedFailures&&this.recordFailures(L,!1),s===Ga&&this.skipSpaces(),Ie}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let s;this.recordedFailures&&(s=Object.keys(this.recordedFailures).map(m=>this.recordedFailures[m]));const u=this._bindings[0];return u&&(u.grammar=this.grammar),new y(this.matcher,this.input,this.startExpr,u,this._bindingOffsets[0],this.rightmostFailurePosition,s)}getTrace(){this.trace=[];const s=this.getMatchResult(),u=this.trace[this.trace.length-1];return u.result=s,u}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Me{constructor(s){this.grammar=s,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(s){return this._input!==s&&this.replaceInputRange(0,this._input.length,s),this}replaceInputRange(s,u,m){const k=this._input,L=this._memoTable;if(s<0||s>k.length||u<0||u>k.length||s>u)throw new Error("Invalid indices: "+s+" and "+u);this._input=k.slice(0,s)+m+k.slice(u),this._input!==k&&L.length>0&&(this._isMemoTableStale=!0);const j=L.slice(u);L.length=s;for(let le=0;le<m.length;le++)L.push(void 0);for(const le of j)L.push(le);for(let le=0;le<s;le++){const re=L[le];re&&re.clearObsoleteEntries(le,s)}return this}match(s,u={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:u.incremental,tracing:!1})}trace(s,u={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:u.incremental,tracing:!0})}_match(s,u={}){const m={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...u};if(!m.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw ct(this.grammar);const k=new Ka(this,s,m.positionToRecordFailures);return m.tracing?k.getTrace():k.getMatchResult()}_getStartExpr(s){const u=s||this.grammar.defaultStartRule;if(!u)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const m=this.grammar.parseApplication(u);return new ue([m,H])}}const At=[],Sr=(h,s)=>Object.prototype.hasOwnProperty.call(h,s);class ua{constructor(s,u,m){this._node=s,this.source=u,this._baseInterval=m,s.isNonterminal()&&t(u===m),this._childWrappers=[]}_forgetMemoizedResultFor(s){delete this._node[this._semantics.attributeKeys[s]],this.children.forEach(u=>{u._forgetMemoizedResultFor(s)})}child(s){if(!(0<=s&&s<this._node.numChildren()))return;let u=this._childWrappers[s];if(!u){const m=this._node.childAt(s),k=this._node.childOffsets[s],L=this._baseInterval.subInterval(k,m.matchLength),j=m.isNonterminal()?L:this._baseInterval;u=this._childWrappers[s]=this._semantics.wrap(m,L,j)}return u}_children(){for(let s=0;s<this._node.numChildren();s++)this.child(s);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(s){const u=s||[],m=u.map(j=>j._node),k=new un(m,[],-1,!1),L=this._semantics.wrap(k,null,null);return L._childWrappers=u,L}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class nn{constructor(s,u){const m=this;if(this.grammar=s,this.checkedActionDicts=!1,this.Wrapper=class extends(u?u.Wrapper:ua){constructor(k,L,j){super(k,L,j),m.checkActionDictsIfHaventAlready(),this._semantics=m}toString(){return"[semantics wrapper for "+m.grammar.name+"]"}},this.super=u,u){if(!(s.equals(this.super.grammar)||s._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+s.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const k in this.attributes)Object.defineProperty(this.attributeKeys,k,{value:bn(k)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let s;for(s in this.operations)this.operations[s].checkActionDict(this.grammar);for(s in this.attributes)this.attributes[s].checkActionDict(this.grammar)}toRecipe(s){function u(k){return k.super!==nn.BuiltInSemantics._getSemantics()}let m=`(function(g) {
`;if(u(this)){m+="  var semantics = "+this.super.toRecipe(!0)+"(g";const k=this.super.grammar;let L=this.grammar;for(;L!==k;)m+=".superGrammar",L=L.superGrammar;m+=`);
`,m+="  return g.extendSemantics(semantics)"}else m+="  return g.createSemantics()";return["Operation","Attribute"].forEach(k=>{const L=this[k.toLowerCase()+"s"];Object.keys(L).forEach(j=>{const{actionDict:le,formals:re,builtInDefault:Ie}=L[j];let te=j;re.length>0&&(te+="("+re.join(", ")+")");let ee;u(this)&&this.super[k.toLowerCase()+"s"][j]?ee="extend"+k:ee="add"+k,m+=`
    .`+ee+"("+JSON.stringify(te)+", {";const be=[];Object.keys(le).forEach(Le=>{if(le[Le]!==Ie){let it=le[Le].toString().trim();it=it.replace(/^.*\(/,"function("),be.push(`
      `+JSON.stringify(Le)+": "+it)}}),m+=be.join(",")+`
    })`})}),m+=`;
  })`,s||(m=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+m+`(grammar);
  return semantics;
});
`),m}addOperationOrAttribute(s,u,m){const k=s+"s",L=ni(u,s),{name:j}=L,{formals:le}=L;this.assertNewName(j,s);const re=$i(s,j,ee),Ie={_default:re};Object.keys(m).forEach(be=>{Ie[be]=m[be]});const te=s==="operation"?new _e(j,le,Ie,re):new ht(j,Ie,re);te.checkActionDict(this.grammar),this[k][j]=te;function ee(...be){const Le=this._semantics[k][j];if(arguments.length!==Le.formals.length)throw new Error("Invalid number of arguments passed to "+j+" "+s+" (expected "+Le.formals.length+", got "+arguments.length+")");const it=Object.create(null);for(const[ai,da]of Object.entries(be)){const pd=Le.formals[ai];it[pd]=da}const Nt=this.args;this.args=it;const Yt=Le.execute(this._semantics,this);return this.args=Nt,Yt}s==="operation"?(this.Wrapper.prototype[j]=ee,this.Wrapper.prototype[j].toString=function(){return"["+j+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,j,{get:ee,configurable:!0}),Object.defineProperty(this.attributeKeys,j,{value:bn(j)}))}extendOperationOrAttribute(s,u,m){const k=s+"s";if(ni(u,"attribute"),!(this.super&&u in this.super[k]))throw new Error("Cannot extend "+s+" '"+u+"': did not inherit an "+s+" with that name");if(Sr(this[k],u))throw new Error("Cannot extend "+s+" '"+u+"' again");const L=this[k][u].formals,j=this[k][u].actionDict,le=Object.create(j);Object.keys(m).forEach(re=>{le[re]=m[re]}),this[k][u]=s==="operation"?new _e(u,L,le):new ht(u,le),this[k][u].checkActionDict(this.grammar)}assertNewName(s,u){if(Sr(ua.prototype,s))throw new Error("Cannot add "+u+" '"+s+"': that's a reserved name");if(s in this.operations)throw new Error("Cannot add "+u+" '"+s+"': an operation with that name already exists");if(s in this.attributes)throw new Error("Cannot add "+u+" '"+s+"': an attribute with that name already exists")}wrap(s,u,m){const k=m||u;return s instanceof this.Wrapper?s:new this.Wrapper(s,u,k)}}function ni(h,s){if(!nn.prototypeGrammar)return t(h.indexOf("(")===-1),{name:h,formals:[]};const u=nn.prototypeGrammar.match(h,s==="operation"?"OperationSignature":"AttributeSignature");if(u.failed())throw new Error(u.message);return nn.prototypeGrammarSemantics(u).parse()}function $i(h,s,u){return function(...m){const L=(this._semantics.operations[s]||this._semantics.attributes[s]).formals.map(j=>this.args[j]);if(!this.isIteration()&&m.length===1)return u.apply(m[0],L);throw Ut(this.ctorName,s,h,At)}}nn.createSemantics=function(h,s){const u=new nn(h,s!==void 0?s:nn.BuiltInSemantics._getSemantics()),m=function(L){if(!(L instanceof y))throw new TypeError("Semantics expected a MatchResult, but got "+P(L));if(L.failed())throw new TypeError("cannot apply Semantics to "+L.toString());const j=L._cst;if(j.grammar!==h)throw new Error("Cannot use a MatchResult from grammar '"+j.grammar.name+"' with a semantics for '"+h.name+"'");const le=new Je(L.input);return u.wrap(j,le.interval(L._cstOffset,L.input.length))};return m.addOperation=function(k,L){return u.addOperationOrAttribute("operation",k,L),m},m.extendOperation=function(k,L){return u.extendOperationOrAttribute("operation",k,L),m},m.addAttribute=function(k,L){return u.addOperationOrAttribute("attribute",k,L),m},m.extendAttribute=function(k,L){return u.extendOperationOrAttribute("attribute",k,L),m},m._getActionDict=function(k){const L=u.operations[k]||u.attributes[k];if(!L)throw new Error('"'+k+'" is not a valid operation or attribute name in this semantics for "'+h.name+'"');return L.actionDict},m._remove=function(k){let L;return k in u.operations?(L=u.operations[k],delete u.operations[k]):k in u.attributes&&(L=u.attributes[k],delete u.attributes[k]),delete u.Wrapper.prototype[k],L},m.getOperationNames=function(){return Object.keys(u.operations)},m.getAttributeNames=function(){return Object.keys(u.attributes)},m.getGrammar=function(){return u.grammar},m.toRecipe=function(k){return u.toRecipe(k)},m.toString=u.toString.bind(u),m._getSemantics=function(){return u},m};class _e{constructor(s,u,m,k){this.name=s,this.formals=u,this.actionDict=m,this.builtInDefault=k}checkActionDict(s){s._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(s,u){try{const{ctorName:m}=u._node;let k=this.actionDict[m];return k?(At.push([this,m]),k.apply(u,u._children())):u.isNonterminal()&&(k=this.actionDict._nonterminal,k)?(At.push([this,"_nonterminal",m]),k.apply(u,u._children())):(At.push([this,"default action",m]),this.actionDict._default.apply(u,u._children()))}finally{At.pop()}}}_e.prototype.typeName="operation";class ht extends _e{constructor(s,u,m){super(s,[],u,m)}execute(s,u){const m=u._node,k=s.attributeKeys[this.name];return Sr(m,k)||(m[k]=_e.prototype.execute.call(this,s,u)),m[k]}}ht.prototype.typeName="attribute";const Mt=["_iter","_terminal","_nonterminal","_default"];function pt(h){return Object.keys(h.rules).sort().map(s=>h.rules[s])}const rn=h=>h.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Wn,Gt;class It{constructor(s,u,m,k){if(this.name=s,this.superGrammar=u,this.rules=m,k){if(!(k in m))throw new Error("Invalid start rule: '"+k+"' is not a rule in grammar '"+s+"'");this.defaultStartRule=k}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Me(this)}isBuiltIn(){return this===It.ProtoBuiltInRules||this===It.BuiltInRules}equals(s){if(this===s)return!0;if(s==null||this.name!==s.name||this.defaultStartRule!==s.defaultStartRule||!(this.superGrammar===s.superGrammar||this.superGrammar.equals(s.superGrammar)))return!1;const u=pt(this),m=pt(s);return u.length===m.length&&u.every((k,L)=>k.description===m[L].description&&k.formals.join(",")===m[L].formals.join(",")&&k.body.toString()===m[L].body.toString())}match(s,u){const m=this.matcher();return m.replaceInputRange(0,0,s),m.match(u)}trace(s,u){const m=this.matcher();return m.replaceInputRange(0,0,s),m.trace(u)}createSemantics(){return nn.createSemantics(this)}extendSemantics(s){return nn.createSemantics(this,s._getSemantics())}_checkTopDownActionDict(s,u,m){const k=[];for(const L in m){const j=m[L];if(!Mt.includes(L)&&!(L in this.rules)){k.push(`'${L}' is not a valid semantic action for '${this.name}'`);continue}if(typeof j!="function"){k.push(`'${L}' must be a function in an action dictionary for '${this.name}'`);continue}const re=j.length,Ie=this._topDownActionArity(L);if(re!==Ie){let te;L==="_iter"||L==="_nonterminal"?te=`it should use a rest parameter, e.g. \`${L}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:te=`expected ${Ie}, got ${re}`,k.push(`Semantic action '${L}' has the wrong arity: ${te}`)}}if(k.length>0){const L=k.map(le=>"- "+le),j=new Error([`Found errors in the action dictionary of the '${u}' ${s}:`,...L].join(`
`));throw j.problems=k,j}}_topDownActionArity(s){return Mt.includes(s)?0:this.rules[s].body.getArity()}_inheritsFrom(s){let u=this.superGrammar;for(;u;){if(u.equals(s,!0))return!0;u=u.superGrammar}return!1}toRecipe(s=void 0){const u={};this.source&&(u.source=this.source.contents);let m=null;this.defaultStartRule&&(m=this.defaultStartRule);const k={};Object.keys(this.rules).forEach(le=>{const re=this.rules[le],{body:Ie}=re,te=!this.superGrammar||!this.superGrammar.rules[le];let ee;te?ee="define":ee=Ie instanceof xe?"extend":"override";const be={};if(re.source&&this.source){const Nt=re.source.relativeTo(this.source);be.sourceInterval=[Nt.startIdx,Nt.endIdx]}const Le=te?re.description:null,it=Ie.outputRecipe(re.formals,this.source);k[le]=[ee,be,Le,re.formals,it]});let L="null";s?L=s:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(L=this.superGrammar.toRecipe());const j=[...["grammar",u,this.name].map(JSON.stringify),L,...[m,k].map(JSON.stringify)];return rn(`[${j.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const s=new v;s.append("{");let u=!0;for(const m in this.rules){const{body:k}=this.rules[m];u?u=!1:s.append(","),s.append(`
`),s.append("  "),this.addSemanticActionTemplate(m,k,s)}return s.append(`
}`),s.contents()}addSemanticActionTemplate(s,u,m){m.append(s),m.append(": function(");const k=this._topDownActionArity(s);m.append(a("_",k).join(", ")),m.append(`) {
`),m.append("  }")}parseApplication(s){let u;if(s.indexOf("<")===-1)u=new X(s);else{const k=Wn.match(s,"Base_application");u=Gt(k,{})}if(!(u.ruleName in this.rules))throw He(u.ruleName,this.name);const{formals:m}=this.rules[u.ruleName];if(m.length!==u.args.length){const{source:k}=this.rules[u.ruleName];throw J(u.ruleName,m.length,u.args.length,k)}return u}_setUpMatchState(s){this._matchStateInitializer&&this._matchStateInitializer(s)}}It.ProtoBuiltInRules=new It("ProtoBuiltInRules",void 0,{any:{body:z,formals:[],description:"any character",primitive:!0},end:{body:H,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new jn(new G(0)),formals:["str"],primitive:!0},lower:{body:new $e("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new $e("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new $e("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new oe(new X("space")),formals:[]},space:{body:new D("\0"," "),formals:[],description:"a space"}}),It.initApplicationParser=function(h,s){Wn=h,Gt=s};class an{constructor(s){this.name=s}sourceInterval(s,u){return this.source.subInterval(s,u-s)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?It.ProtoBuiltInRules:It.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(s,u){const m=this.ensureSuperGrammar().rules[s];if(!m)throw N(s,this.superGrammar.name,u);return m}installOverriddenOrExtendedRule(s,u,m,k){const L=c(u);if(L.length>0)throw ae(s,L,k);const j=this.ensureSuperGrammar().rules[s],le=j.formals,re=le?le.length:0;if(u.length!==re)throw J(s,re,u.length,k);return this.install(s,u,m,j.description,k)}install(s,u,m,k,L,j=!1){return this.rules[s]={body:m.introduceParams(u),formals:u,description:k,source:L,primitive:j},this}withSuperGrammar(s){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=s,this.rules=Object.create(s.rules),s.isBuiltIn()||(this.defaultStartRule=s.defaultStartRule),this}withDefaultStartRule(s){return this.defaultStartRule=s,this}withSource(s){return this.source=new Je(s).interval(0,s.length),this}build(){const s=new It(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);s._matchStateInitializer=s.superGrammar._matchStateInitializer,s.supportsIncrementalParsing=s.superGrammar.supportsIncrementalParsing;const u=[];let m=!1;return Object.keys(s.rules).forEach(k=>{const{body:L}=s.rules[k];try{L.assertChoicesHaveUniformArity(k)}catch(j){u.push(j)}try{L.assertAllApplicationsAreValid(k,s)}catch(j){u.push(j),m=!0}}),m||Object.keys(s.rules).forEach(k=>{const{body:L}=s.rules[k];try{L.assertIteratedExprsAreNotNullable(s,[])}catch(j){u.push(j)}}),u.length>0&&Tt(u),this.source&&(s.source=this.source),s}define(s,u,m,k,L,j){if(this.ensureSuperGrammar(),this.superGrammar.rules[s])throw q(s,this.name,this.superGrammar.name,L);if(this.rules[s])throw q(s,this.name,this.name,L);const le=c(u);if(le.length>0)throw ae(s,le,L);return this.install(s,u,m,k,L,j)}override(s,u,m,k,L){return this.ensureSuperGrammarRuleForOverriding(s,L),this.installOverriddenOrExtendedRule(s,u,m,L),this}extend(s,u,m,k,L){if(!this.ensureSuperGrammar().rules[s])throw W(s,this.superGrammar.name,L);const le=new xe(this.superGrammar,s,m);return le.source=m.source,this.installOverriddenOrExtendedRule(s,u,le,L),this}}class on{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(s){return new an(s)}grammar(s,u,m,k,L){const j=new an(u);return m&&j.withSuperGrammar(m instanceof It?m:this.fromRecipe(m)),k&&j.withDefaultStartRule(k),s&&s.source&&j.withSource(s.source),this.currentDecl=j,Object.keys(L).forEach(le=>{this.currentRuleName=le;const re=L[le],Ie=re[0],te=re[1],ee=re[2],be=re[3],Le=this.fromRecipe(re[4]);let it;j.source&&te&&te.sourceInterval&&(it=j.source.subInterval(te.sourceInterval[0],te.sourceInterval[1]-te.sourceInterval[0])),j[Ie](le,be,Le,ee,it)}),this.currentRuleName=this.currentDecl=null,j.build()}terminal(s){return new F(s)}range(s,u){return new D(s,u)}param(s){return new G(s)}alt(...s){let u=[];for(let m of s)m instanceof M||(m=this.fromRecipe(m)),m instanceof Z?u=u.concat(m.terms):u.push(m);return u.length===1?u[0]:new Z(u)}seq(...s){let u=[];for(let m of s)m instanceof M||(m=this.fromRecipe(m)),m instanceof ue?u=u.concat(m.factors):u.push(m);return u.length===1?u[0]:new ue(u)}star(s){return s instanceof M||(s=this.fromRecipe(s)),new oe(s)}plus(s){return s instanceof M||(s=this.fromRecipe(s)),new pe(s)}opt(s){return s instanceof M||(s=this.fromRecipe(s)),new Ce(s)}not(s){return s instanceof M||(s=this.fromRecipe(s)),new se(s)}lookahead(s){return s instanceof M||(s=this.fromRecipe(s)),new Q(s)}lex(s){return s instanceof M||(s=this.fromRecipe(s)),new ie(s)}app(s,u){return u&&u.length>0&&(u=u.map(function(m){return m instanceof M?m:this.fromRecipe(m)},this)),new X(s,u)}splice(s,u){return new Oe(this.currentDecl.superGrammar,this.currentRuleName,s.map(m=>this.fromRecipe(m)),u.map(m=>this.fromRecipe(m)))}fromRecipe(s){const u=s[0]==="grammar"?s.slice(1):s.slice(2),m=this[s[0]](...u),k=s[1];return k&&k.sourceInterval&&this.currentDecl&&m.withSource(this.currentDecl.sourceInterval(...k.sourceInterval)),m}}function vt(h){return typeof h=="function"?h.call(new on):(typeof h=="string"&&(h=JSON.parse(h)),new on().fromRecipe(h))}var Kt=vt(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);It.BuiltInRules=Kt,me(It.BuiltInRules);var ri=vt(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const Lt=Object.create(M.prototype);function ii(h,s){for(const u in h)if(u===s)return!0;return!1}function Er(h,s,u){const m=new on;let k,L,j,le=!1;return(u||ri).createSemantics().addOperation("visit",{Grammars(te){return te.children.map(ee=>ee.visit())},Grammar(te,ee,be,Le,it){const Nt=te.visit();k=m.newGrammar(Nt),ee.child(0)&&ee.child(0).visit(),Le.children.map(ai=>ai.visit());const Yt=k.build();if(Yt.source=this.source.trimmed(),ii(s,Nt))throw Pe(Yt);return s[Nt]=Yt,Yt},SuperGrammar(te,ee){const be=ee.visit();if(be==="null")k.withSuperGrammar(null);else{if(!s||!ii(s,be))throw ve(be,s,ee.source);k.withSuperGrammar(s[be])}},Rule_define(te,ee,be,Le,it){L=te.visit(),j=ee.children.map(da=>da.visit())[0]||[],!k.defaultStartRule&&k.ensureSuperGrammar()!==It.ProtoBuiltInRules&&k.withDefaultStartRule(L);const Nt=it.visit(),Yt=be.children.map(da=>da.visit())[0],ai=this.source.trimmed();return k.define(L,j,Nt,Yt,ai)},Rule_override(te,ee,be,Le){L=te.visit(),j=ee.children.map(Yt=>Yt.visit())[0]||[];const it=this.source.trimmed();k.ensureSuperGrammarRuleForOverriding(L,it),le=!0;const Nt=Le.visit();return le=!1,k.override(L,j,Nt,null,it)},Rule_extend(te,ee,be,Le){L=te.visit(),j=ee.children.map(Yt=>Yt.visit())[0]||[];const it=Le.visit(),Nt=this.source.trimmed();return k.extend(L,j,it,null,Nt)},RuleBody(te,ee){return m.alt(...ee.visit()).withSource(this.source)},OverrideRuleBody(te,ee){const be=ee.visit(),Le=be.indexOf(Lt);if(Le>=0){const it=be.slice(0,Le),Nt=be.slice(Le+1);return Nt.forEach(Yt=>{if(Yt===Lt)throw Te(Yt)}),new Oe(k.superGrammar,L,it,Nt).withSource(this.source)}else return m.alt(...be).withSource(this.source)},Formals(te,ee,be){return ee.visit()},Params(te,ee,be){return ee.visit()},Alt(te){return m.alt(...te.visit()).withSource(this.source)},TopLevelTerm_inline(te,ee){const be=L+"_"+ee.visit(),Le=te.visit(),it=this.source.trimmed(),Nt=!(k.superGrammar&&k.superGrammar.rules[be]);le&&!Nt?k.override(be,j,Le,null,it):k.define(be,j,Le,null,it);const Yt=j.map(ai=>m.app(ai));return m.app(be,Yt).withSource(Le.source)},OverrideTopLevelTerm_superSplice(te){return Lt},Seq(te){return m.seq(...te.children.map(ee=>ee.visit())).withSource(this.source)},Iter_star(te,ee){return m.star(te.visit()).withSource(this.source)},Iter_plus(te,ee){return m.plus(te.visit()).withSource(this.source)},Iter_opt(te,ee){return m.opt(te.visit()).withSource(this.source)},Pred_not(te,ee){return m.not(ee.visit()).withSource(this.source)},Pred_lookahead(te,ee){return m.lookahead(ee.visit()).withSource(this.source)},Lex_lex(te,ee){return m.lex(ee.visit()).withSource(this.source)},Base_application(te,ee){const be=ee.children.map(Le=>Le.visit())[0]||[];return m.app(te.visit(),be).withSource(this.source)},Base_range(te,ee,be){return m.range(te.visit(),be.visit()).withSource(this.source)},Base_terminal(te){return m.terminal(te.visit()).withSource(this.source)},Base_paren(te,ee,be){return ee.visit()},ruleDescr(te,ee,be){return ee.visit()},ruleDescrText(te){return this.sourceString.trim()},caseName(te,ee,be,Le,it){return be.visit()},name(te,ee){return this.sourceString},nameFirst(te){},nameRest(te){},terminal(te,ee,be){return ee.children.map(Le=>Le.visit()).join("")},oneCharTerminal(te,ee,be){return ee.visit()},escapeChar(te){try{return R(this.sourceString)}catch(ee){throw ee instanceof RangeError&&ee.message.startsWith("Invalid code point ")?Ue(te):ee}},NonemptyListOf(te,ee,be){return[te.visit()].concat(be.children.map(Le=>Le.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(h).visit()}var Hn=vt(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);_i(It.BuiltInRules),Fr(Hn);function _i(h){const s={empty(){return this.iteration()},nonEmpty(u,m,k){return this.iteration([u].concat(k.children))}};nn.BuiltInSemantics=nn.createSemantics(h,null).addOperation("asIteration",{emptyListOf:s.empty,nonemptyListOf:s.nonEmpty,EmptyListOf:s.empty,NonemptyListOf:s.nonEmpty})}function Fr(h){nn.prototypeGrammarSemantics=h.createSemantics().addOperation("parse",{AttributeSignature(s){return{name:s.parse(),formals:[]}},OperationSignature(s,u){return{name:s.parse(),formals:u.children.map(m=>m.parse())[0]||[]}},Formals(s,u,m){return u.asIteration().children.map(k=>k.parse())},name(s,u){return this.sourceString}}),nn.prototypeGrammar=h}function id(h){let s=0;const u=[0],m=()=>u[u.length-1],k={},L=/( *).*(?:$|\r?\n|\r)/g;let j;for(;(j=L.exec(h))!=null;){const[le,re]=j;if(le.length===0)break;const Ie=re.length,te=m(),ee=s+Ie;if(Ie>te)u.push(Ie),k[ee]=1;else if(Ie<te){const be=u.length;for(;m()!==Ie;)u.pop();k[ee]=-1*(be-u.length)}s+=le.length}return u.length>1&&(k[s]=1-u.length),k}const Tl="an indented block",Ll="a dedent",Dl=1114112;class ad extends Je{constructor(s){super(s.input),this.state=s}_indentationAt(s){return this.state.userData[s]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Dl):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Dl):super.nextCodePoint()}}class Pl extends M{constructor(s=!0){super(),this.isIndent=s}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:u}=s,m=s.userData;s.doNotMemoize=!0;const k=u.pos,L=this.isIndent?1:-1;return(m[k]||0)*L>0?(s.userData=Object.create(m),s.userData[k]-=L,s.pushBinding(new Fe(0),k),!0):(s.processFailure(k,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(s,u){}_isNullable(s,u){return!1}assertChoicesHaveUniformArity(s){}assertIteratedExprsAreNotNullable(s){}introduceParams(s){return this}substituteParams(s){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(s){const u=this.isIndent?Tl:Ll;return new Et(this,u,"description")}}const od=new X("indent"),sd=new X("dedent"),ld=new Oe(Kt,"any",[od,sd],[]),Rl=new on().newGrammar("IndentationSensitive").withSuperGrammar(Kt).define("indent",[],new Pl(!0),Tl,void 0,!0).define("dedent",[],new Pl(!1),Ll,void 0,!0).extend("any",[],ld,"any character",void 0).build();Object.assign(Rl,{_matchStateInitializer(h){h.userData=id(h.input),h.inputStream=new ad(h)},supportsIncrementalParsing:!1});const cd="17.1.0";It.initApplicationParser(ri,Er);const ud=h=>!!h.constructor&&typeof h.constructor.isBuffer=="function"&&h.constructor.isBuffer(h);function dd(h,s){const u=ri.match(h,"Grammars");if(u.failed())throw $(u);return Er(u,s)}function hd(h,s){const u=zl(h,s),m=Object.keys(u);if(m.length===0)throw new Error("Missing grammar definition");if(m.length>1){const L=u[m[1]].source;throw new Error(Ir(L.sourceString,L.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return u[m[0]]}function zl(h,s){const u=Object.create(s||{});if(typeof h!="string")if(ud(h))h=h.toString();else throw new TypeError("Expected string as first argument, got "+P(h));return dd(h,u),u}return Gn.ExperimentalIndentationSensitive=Rl,Gn._buildGrammar=Er,Gn.grammar=hd,Gn.grammars=zl,Gn.makeRecipe=vt,Gn.ohmGrammar=ri,Gn.pexprs=es,Gn.version=cd,Gn}var ws,Sc;function Zu(){if(Sc)return ws;Sc=1;const{makeRecipe:e}=l0();return ws=e(["grammar",{source:`PEP508 {
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
`],["terminal",{sourceInterval:[6123,6126]},"#"]]],["app",{sourceInterval:[6128,6131]},"any",[]]]]]}]),ws}var wa={},Ec;function Ac(){return Ec||(Ec=1,(function(e){var t=wa&&wa.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.RequirementsSyntaxError=e.semantics=void 0;const n=t(Zu());e.semantics=n.default.createSemantics();function r(a){return{startIdx:a.source.startIdx,endIdx:a.source.endIdx}}function i(a,c){return{data:c,location:r(a)}}e.semantics.addOperation("extract",{File:a=>a.asIteration().children.map(c=>c.extract()).filter(Boolean),Line:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extract())||null},NameReq:(a,c,f,b)=>{var C,x;return{type:"ProjectName",name:a.sourceString,versionSpec:f.extract(),extras:(C=c.child(0))===null||C===void 0?void 0:C.extract(),environmentMarkerTree:(x=b.child(0))===null||x===void 0?void 0:x.extract()}},UrlReq:(a,c,f,b,C)=>{var x,v;return{type:"ProjectURL",name:a.sourceString,url:f.extract(),extras:(x=c.child(0))===null||x===void 0?void 0:x.extract(),environmentMarkerTree:(v=C.child(0))===null||v===void 0?void 0:v.extract()}},Extras:(a,c,f)=>c.asIteration().children.map(b=>b.sourceString),RequirementsReq:(a,c)=>({type:"RequirementsFile",path:c.sourceString}),ConstraintsReq:(a,c)=>({type:"ConstraintsFile",path:c.sourceString}),UrlSpec:(a,c)=>c.sourceString,QuotedMarker:(a,c)=>c.extract(),MarkerOr_node:(a,c,f)=>({operator:"or",left:a.extract(),right:f.extract()}),MarkerAnd_node:(a,c,f)=>({operator:"and",left:a.extract(),right:f.extract()}),MarkerExpr_leaf:(a,c,f)=>({left:a.sourceString,operator:c.sourceString,right:f.sourceString}),MarkerExpr_node:(a,c,f)=>c.extract(),VersionSpec_parenthesized:(a,c,f)=>c.extract()||[],VersionMany:a=>{const c=a.asIteration().children;if(c.length!==0)return c.map(f=>f.extract())},VersionOne:(a,c)=>({operator:a.sourceString,version:c.sourceString})}),e.semantics.addOperation("extractLoosely",{LooseFile:a=>a.asIteration().children.map(c=>c.extractLoosely()).filter(Boolean),LooseLine:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLoosely())||null},LooseNameReq:(a,c,f,b)=>{var C;return{type:"ProjectName",name:a.sourceString,extras:(C=c.child(0))===null||C===void 0?void 0:C.extractLoosely(),versionSpec:f.extractLoosely()}},LooseNonNameReq:a=>null,LooseExtras:(a,c,f,b)=>c.asIteration().children.map(C=>C.sourceString),LooseVersionSpec_parenthesized:(a,c,f)=>c.extractLoosely()||[],LooseVersionMany:(a,c)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(b=>b.extractLoosely())},LooseVersionOne:(a,c)=>{const f={operator:a.sourceString};return c.sourceString&&(f.version=c.sourceString),f}}),e.semantics.addOperation("extractWithLocation",{File:a=>a.asIteration().children.map(c=>c.extractWithLocation()).filter(Boolean),Line:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractWithLocation())||null},NameReq:function(a,c,f,b){var C,x;return i(this,{type:"ProjectName",name:i(a,a.sourceString),versionSpec:f.extractWithLocation(),extras:(C=c.child(0))===null||C===void 0?void 0:C.extractWithLocation(),environmentMarkerTree:(x=b.child(0))===null||x===void 0?void 0:x.extractWithLocation()})},UrlReq:function(a,c,f,b,C){var x,v;return i(this,{type:"ProjectURL",name:i(a,a.sourceString),url:f.extractWithLocation(),extras:(x=c.child(0))===null||x===void 0?void 0:x.extractWithLocation(),environmentMarkerTree:(v=C.child(0))===null||v===void 0?void 0:v.extractWithLocation()})},Extras:function(a,c,f){return c.asIteration().children.map(b=>i(b,b.sourceString))},RequirementsReq:function(a,c){return i(this,{type:"RequirementsFile",path:c.sourceString})},ConstraintsReq:function(a,c){return i(this,{type:"ConstraintsFile",path:c.sourceString})},UrlSpec:function(a,c){return i(c,c.sourceString)},QuotedMarker:(a,c)=>i(c,c.extract()),VersionSpec_parenthesized:(a,c,f)=>c.extractWithLocation()||[],VersionMany:a=>{const c=a.asIteration().children;if(c.length!==0)return c.map(f=>f.extractWithLocation())},VersionOne:function(a,c){return i(this,{operator:i(a,a.sourceString),version:i(c,c.sourceString)})}}),e.semantics.addOperation("extractLooselyWithLocation",{LooseFile:a=>a.asIteration().children.map(c=>c.extractLooselyWithLocation()).filter(Boolean),LooseLine:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLooselyWithLocation())||null},LooseNameReq:function(a,c,f,b){var C;return i(this,{type:"ProjectName",name:i(a,a.sourceString),extras:(C=c.child(0))===null||C===void 0?void 0:C.extractLooselyWithLocation(),versionSpec:f.extractLooselyWithLocation()})},LooseNonNameReq:a=>null,LooseExtras:function(a,c,f,b){return c.asIteration().children.map(C=>i(C,C.sourceString))},LooseVersionSpec_parenthesized:(a,c,f)=>c.extractLooselyWithLocation()||[],LooseVersionMany:(a,c)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(b=>b.extractLooselyWithLocation())},LooseVersionOne:function(a,c){return i(this,{operator:i(a,a.sourceString),...c.sourceString?{version:i(c,c.sourceString)}:{}})}});class o extends Error{}e.RequirementsSyntaxError=o})(wa)),wa}var si={},$c;function c0(){if($c)return si;$c=1,Object.defineProperty(si,"__esModule",{value:!0}),si.VersionOperator=si.EnvironmentMarkerVariable=void 0;var e;(function(n){n.PythonVersion="python_version",n.PythonFullVersion="python_full_version",n.OsName="os_name",n.SysPlatform="sys_platform",n.PlatformRelease="platform_release",n.PlatformSystem="platform_system",n.PlatformVersion="platform_version",n.PlatformMachine="platform_machine",n.PlatformPythonImplementation="platform_python_implementation",n.ImplementationName="implementation_name",n.ImplementationVersion="implementation_version",n.Extra="extra"})(e||(si.EnvironmentMarkerVariable=e={}));var t;return(function(n){n.CompatibleRelease="~=",n.VersionMatching="==",n.VersionExclusion="!=",n.LessThanOrMatching="<=",n.GreaterThanOrMatching=">=",n.LessThan="<",n.GreaterThan=">",n.ArbitrarilyEqual="==="})(t||(si.VersionOperator=t={})),si}var _c;function u0(){return _c||(_c=1,(function(e){var t=_r&&_r.__createBinding||(Object.create?(function(x,v,I,R){R===void 0&&(R=I);var P=Object.getOwnPropertyDescriptor(v,I);(!P||("get"in P?!v.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return v[I]}}),Object.defineProperty(x,R,P)}):(function(x,v,I,R){R===void 0&&(R=I),x[R]=v[I]})),n=_r&&_r.__exportStar||function(x,v){for(var I in x)I!=="default"&&!Object.prototype.hasOwnProperty.call(v,I)&&t(v,x,I)},r=_r&&_r.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(e,"__esModule",{value:!0}),e.parsePipRequirementsLineLoosely=e.parsePipRequirementsFileLoosely=e.parsePipRequirementsLine=e.parsePipRequirementsFile=e.RequirementsSyntaxError=void 0;const i=r(Zu()),o=Ac();var a=Ac();Object.defineProperty(e,"RequirementsSyntaxError",{enumerable:!0,get:function(){return a.RequirementsSyntaxError}}),n(c0(),e);function c(x,v){const I=i.default.match(x,"File");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements file. ${I.shortMessage}`);return v?.includeLocations?(0,o.semantics)(I).extractWithLocation():(0,o.semantics)(I).extract()}e.parsePipRequirementsFile=c;function f(x,v){const I=i.default.match(x,"Line");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements line. ${I.shortMessage}`);return v?.includeLocations?(0,o.semantics)(I).extractWithLocation():(0,o.semantics)(I).extract()}e.parsePipRequirementsLine=f;function b(x,v){const I=i.default.match(x,"LooseFile");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${I.shortMessage}`);return v?.includeLocations?(0,o.semantics)(I).extractLooselyWithLocation():(0,o.semantics)(I).extractLoosely()}e.parsePipRequirementsFileLoosely=b;function C(x,v){const I=i.default.match(x,"LooseLine");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${I.shortMessage}`);return v?.includeLocations?(0,o.semantics)(I).extractLooselyWithLocation():(0,o.semantics)(I).extractLoosely()}e.parsePipRequirementsLineLoosely=C})(_r)),_r}var d0=u0();function h0(e){return new Worker("/assets/pyworker-Drd8fvVW.js",{type:"module",name:e?.name})}let p0=0;class f0{constructor(){this.pendingMessages=new Map}async init(t,n){this.workspace=t,this.vars=n??{},this.worker=new h0,this.worker.onmessage=r=>{this.handleWorkerMessage(r.data)},this.worker.onerror=r=>{console.error("Python Worker error:",r)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(t){if(t.id==="interrupt-buffer"){t.type==="success"?this.interruptBuffer=new Uint8Array(t.payload):this.interruptBuffer=void 0;return}if(t.type==="inputRequest"){const r=t.payload.prompt||"Input:",i=window.prompt(r);this.worker.postMessage({id:t.id,type:"inputResponse",payload:{value:i,cancelled:i===null}});return}if(t.type==="stdout"){this.stdoutCallback?this.stdoutCallback(t.payload):console.info(t.payload);return}if(t.type==="stderr"){this.stderrCallback?this.stderrCallback(t.payload):console.error(t.payload);return}if(t.type==="console"){const{level:r,message:i}=t.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",i,r);return}const n=this.pendingMessages.get(t.id);n&&(this.pendingMessages.delete(t.id),t.type==="success"?n.resolve(t.payload):t.type==="error"&&n.reject(new Error(t.payload.message)))}async sendMessage(t,n){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const r=`msg-${p0++}`,i={id:r,type:t,payload:n};return new Promise((o,a)=>{this.pendingMessages.set(r,{resolve:o,reject:a}),this.worker.postMessage(i)})}setStdoutCallback(t){this.stdoutCallback=t}setStderrCallback(t){this.stderrCallback=t}async runFunction(t,n){const r=await this.sendMessage("runFunction",{name:t,args:n});return Wt(dr,this.workspace),r}async setGlobal(t,n){await this.sendMessage("setGlobal",{key:t,value:n})}async mountWorkspace(t="/workspace"){const n=await cn.getWorkspace();await this.sendMessage("mountWorkspace",{handle:n.getHandle(),mountPoint:t})}async installDependencies(){const t=await this.workspace?.getResource("requirements.txt");if(t){const n=(await t.getContents()).replaceAll("\r",""),r=d0.parsePipRequirementsFile(n).filter(i=>"name"in i).map(i=>i.name);await this.loadPackages(r)}}async loadPackages(t){t.length>0&&await this.sendMessage("loadPackages",{packages:t})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),Wt(dr,this.workspace)}async execCode(t){const n=await this.sendMessage("execCode",{code:t});return Wt(dr,this.workspace),n}async execScript(t){const n=t.split(".")[0],r=t.includes(":")?t.split(":").reverse()[0]:void 0;return await this.execModule(n,r)}async execModule(t,n){const r=await this.sendMessage("execModule",{moduleName:t,entryName:n,vars:this.vars});return Wt(dr,this.workspace),r}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class m0{constructor(){this.packages=[]}addPackage(t){this.packages.push(t)}hasPackages(){return this.packages.length>0&&this.packages.some(t=>t.dependencies&&Object.keys(t.dependencies).length>0)}renderTree(){return this.packages.length===0?A``:A`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(t=>{const n=t.dependencies||{},r=Object.entries(n);return r.length===0?A``:A`
                        <wa-tree-item expanded>
                            <span>${t.name}</span>
                            ${r.map(([i,o])=>A`
                                <wa-tree-item>
                                    <span>${i} <small>${o}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const Po=new m0,g0="https://api.github.com";function b0(){const e=Wa.getCurrentApp();if(e?.metadata?.github){const t=e.metadata.github;if(t.owner&&t.repo)return{owner:t.owner,repo:t.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function v0(e=100){try{const t=b0(),n=await fetch(`${g0}/repos/${t.owner}/${t.repo}/releases?per_page=${e}`);return n.ok?await n.json():[]}catch(t){return console.error("Failed to fetch releases:",t),[]}}function y0(e,t){const n=e.replace(/^v/,""),r=t.replace(/^v/,""),i=n.split(".").map(Number),o=r.split(".").map(Number);for(let a=0;a<Math.max(i.length,o.length);a++){const c=i[a]||0,f=o[a]||0;if(f>c)return!0;if(f<c)return!1}return!1}Pt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async e=>{const t=Wa.getCurrentApp();if(!t){mt("No app loaded");return}const n=Po.hasPackages(),r=Po.renderTree();let i=null;const o=()=>(i||(i=document.getElementById("global-dialog-container")||document.createElement("div"),i.id||(i.id="global-dialog-container",document.body.appendChild(i))),i),a=()=>{i&&Br(A``,i)},c=P=>{const V=at.parse(P,{async:!1});return A`${pr(V)}`};let f=[];try{f=await v0()}catch{f=[]}const b=t.version==="0.0.0",C=f.length>0?f.findIndex(P=>P.tag_name===t.version):-1,x=C>=0?C:0;let v=x;const I=P=>{if(b)return`**Development Build**

${t.description||""}`;if(f.length===0)return`**Version:** ${t.version}

${t.description||""}`;const V=f[P],K=V.tag_name===t.version;let M=`**Version:** ${V.tag_name}`;K&&(M+=" (Current)"),M+=`

`;const z=new Date(V.published_at).toLocaleDateString();return M+=`**Released:** ${z}

`,!K&&y0(t.version,V.tag_name)&&(M+=`⚠️ **Update available**

`),V.body&&(M+=`---

${V.body}`),M},R=P=>{const V=I(P),K=f.length>0,M=A`
                    <wa-dialog label="${t.name}" open @wa-request-close=${a}>
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
                                ${n?A`<wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>`:""}
                                
                                <wa-tab-panel name="release">
                                    ${c(V)}
                                </wa-tab-panel>
                                
                                ${n?A`
                                    <wa-tab-panel name="packages">
                                        ${r}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${K?A`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${P===f.length-1}
                                    @click=${()=>{P<f.length-1&&(v=P+1,R(v))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${P===0}
                                    @click=${()=>{P>0&&(v=P-1,R(v))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" @click=${a}>Close</wa-button>
                        </div>
                    </wa-dialog>
                `;Br(M,o())};return R(x),new Promise(P=>{const V=()=>{i?.querySelector("wa-dialog[open]")?setTimeout(V,100):P()};V()})}}});Pt({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async e=>{const t=e.params.script;if(!t)return;const n=new f0,r=await cn.getWorkspace();await n.init(r,e),await n.installDependencies(),await n.execScript(t)}}});Pt({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});Pt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async e=>{const t=et.get();t&&t.isDirty()&&t.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const e=et.get();return!e||!e.isDirty()}}});Pt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async e=>{document.documentElement.classList.toggle("wa-dark")||document.documentElement.classList.toggle("wa-light")}},contribution:{target:la,icon:"circle-half-stroke",label:"Theme Switcher"}});Pt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async e=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:la,icon:"expand",label:"Fullscreen"}});Pt({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:e=>{const t={title:"settings.json",data:{async getContents(){const n=await qn.getAll();return JSON.stringify(n,void 0,2)},getName(){return t.key},saveContents(n){const r=JSON.parse(n);return qn.setAll(r)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};t.widgetFactory=()=>A`
                <k-monaco-editor .input=${t}></k-monaco-editor>`,Jr.loadEditor(t).then()}},contribution:{target:la,icon:"gear",label:"Open Settings"}});Pt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:e=>{const t={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};t.widgetFactory=()=>A`
                <k-extensions></k-extensions>`,Jr.loadEditor(t).then()}},contribution:{target:la,icon:"puzzle-piece",label:"Open Extensions"}});qe.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:e,type:t}})=>{e&&(t==="error"?mt(e):yn(e))}}});const w0="@kispace/appspace",x0="0.0.0",k0={"@awesome.me/webawesome":"^3.0.0","@fortawesome/fontawesome-free":"^7.1.0","@fortawesome/fontawesome-svg-core":"^7.1.0","@fortawesome/free-solid-svg-icons":"^7.1.0","@lit-labs/signals":"^0.1.3","@lit/context":"^1.1.6","@mlc-ai/web-llm":"^0.2.79","@xterm/xterm":"^5.5.0",axios:"^1.13.1",dotenv:"^17.2.3","idb-keyval":"^6.2.2",jsonata:"^2.1.0",jszip:"^3.10.1",lit:"^3.2.1",marked:"^16.4.1","monaco-editor":"^0.54.0","pip-requirements-js":"^1.0.2","pubsub-js":"^1.9.5",pyodide:"^0.27.7","signal-polyfill":"^0.2.2","signal-utils":"^0.21.1","toastify-js":"^1.12.0",uuid:"^13.0.0","wasm-git":"^0.0.13"},I0={typescript:"^5.9.3",vite:"^7.1.12"},so={name:w0,version:x0,dependencies:k0,devDependencies:I0};Po.addPackage({name:so.name,version:so.version,dependencies:so.dependencies,devDependencies:so.devDependencies});function lo(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var xs={exports:{}},Oc;function C0(){return Oc||(Oc=1,(function(e,t){(function(n){e.exports=n()})(function(){return(function(){function n(r,i,o){function a(b,C){if(!i[b]){if(!r[b]){var x=typeof lo=="function"&&lo;if(!C&&x)return x(b,!0);if(c)return c(b,!0);var v=new Error("Cannot find module '"+b+"'");throw v.code="MODULE_NOT_FOUND",v}var I=i[b]={exports:{}};r[b][0].call(I.exports,function(R){var P=r[b][1][R];return a(P||R)},I,I.exports,n,r,i,o)}return i[b].exports}for(var c=typeof lo=="function"&&lo,f=0;f<o.length;f++)a(o[f]);return a}return n})()({1:[function(n,r,i){const o=n("./utils"),a=(function(){const c=o.stringToArray,f=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],b=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],C=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],x=["Thousand","Million","Billion","Trillion"];function v(N,W){var q=function(de,ae,Y){var ce="";if(de<=19)ce=(ae?" and ":"")+(Y?b[de]:f[de]);else if(de<100){const je=Math.floor(de/10),Ge=de%10;ce=(ae?" and ":"")+C[je-2],Ge>0?ce+="-"+q(Ge,!1,Y):Y&&(ce=ce.substring(0,ce.length-1)+"ieth")}else if(de<1e3){const je=Math.floor(de/100),Ge=de%100;ce=(ae?", ":"")+f[je]+" Hundred",Ge>0?ce+=q(Ge,!0,Y):Y&&(ce+="th")}else{var Ee=Math.floor(Math.log10(de)/3);Ee>x.length&&(Ee=x.length);const je=Math.pow(10,Ee*3),Ge=Math.floor(de/je),Se=de-Ge*je;ce=(ae?", ":"")+q(Ge,!1,!1)+" "+x[Ee-1],Se>0?ce+=q(Se,!0,Y):Y&&(ce+="th")}return ce},J=q(N,!1,W);return J}const I={};f.forEach(function(N,W){I[N.toLowerCase()]=W}),b.forEach(function(N,W){I[N.toLowerCase()]=W}),C.forEach(function(N,W){const q=N.toLowerCase();I[q]=(W+2)*10,I[q.substring(0,N.length-1)+"ieth"]=I[q]}),I.hundredth=100,x.forEach(function(N,W){const q=N.toLowerCase(),J=Math.pow(10,(W+1)*3);I[q]=J,I[q+"th"]=J});function R(N){const q=N.split(/,\s|\sand\s|[\s\\-]/).map(ae=>I[ae]);let J=[0];return q.forEach(ae=>{if(ae<100){let Y=J.pop();Y>=1e3&&(J.push(Y),Y=0),J.push(Y+ae)}else J.push(J.pop()*ae)}),J.reduce((ae,Y)=>ae+Y,0)}const P=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],V={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function K(N){for(var W=0;W<P.length;W++){const q=P[W];if(N>=q[0])return q[1]+K(N-q[0])}return""}function M(N){for(var W=0,q=1,J=N.length-1;J>=0;J--){const de=N[J],ae=V[de];ae<q?W-=ae:(q=ae,W+=ae)}return W}function z(N,W){for(var q=[],J=W.charCodeAt(0);N>0;)q.unshift(String.fromCharCode((N-1)%26+J)),N=Math.floor((N-1)/26);return q.join("")}function H(N,W){for(var q=W.charCodeAt(0),J=0,de=0;de<N.length;de++)J+=(N.charCodeAt(N.length-de-1)-q+1)*Math.pow(26,de);return J}function F(N,W){if(typeof N>"u")return;N=Math.floor(N);const q=Oe(W);return Z(N,q)}const D={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},G={UPPER:"upper",LOWER:"lower",TITLE:"title"};function Z(N,W){let q;const J=N<0;switch(N=Math.abs(N),W.primary){case D.LETTERS:q=z(N,W.case===G.UPPER?"A":"a");break;case D.ROMAN:q=K(N),W.case===G.UPPER&&(q=q.toUpperCase());break;case D.WORDS:q=v(N,W.ordinal),W.case===G.UPPER?q=q.toUpperCase():W.case===G.LOWER&&(q=q.toLowerCase());break;case D.DECIMAL:q=""+N;var de=W.mandatoryDigits-q.length;if(de>0){var ae=new Array(de+1).join("0");q=ae+q}if(W.zeroCode!==48&&(q=c(q).map(je=>String.fromCodePoint(je.codePointAt(0)+W.zeroCode-48)).join("")),W.regular){const je=Math.floor((q.length-1)/W.groupingSeparators.position);for(let Ge=je;Ge>0;Ge--){const Se=q.length-Ge*W.groupingSeparators.position;q=q.substr(0,Se)+W.groupingSeparators.character+q.substr(Se)}}else W.groupingSeparators.reverse().forEach(je=>{const Ge=q.length-je.position;q=q.substr(0,Ge)+je.character+q.substr(Ge)});if(W.ordinal){var Y={1:"st",2:"nd",3:"rd"},ce=q[q.length-1],Ee=Y[ce];(!Ee||q.length>1&&q[q.length-2]==="1")&&(Ee="th"),q=q+Ee}break;case D.SEQUENCE:throw{code:"D3130",value:W.token}}return J&&(q="-"+q),q}const xe=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function Oe(N){const W={type:"integer",primary:D.DECIMAL,case:G.LOWER,ordinal:!1};let q,J;const de=N.lastIndexOf(";");switch(de===-1?q=N:(q=N.substring(0,de),J=N.substring(de+1),J[0]==="o"&&(W.ordinal=!0)),q){case"A":W.case=G.UPPER;case"a":W.primary=D.LETTERS;break;case"I":W.case=G.UPPER;case"i":W.primary=D.ROMAN;break;case"W":W.case=G.UPPER,W.primary=D.WORDS;break;case"Ww":W.case=G.TITLE,W.primary=D.WORDS;break;case"w":W.primary=D.WORDS;break;default:{let ae=null,Y=0,ce=0,Ee=[],je=0;if(c(q).map(Se=>Se.codePointAt(0)).reverse().forEach(Se=>{let Te=!1;for(let Ue=0;Ue<xe.length;Ue++){const ke=xe[Ue];if(Se>=ke&&Se<=ke+9){if(Te=!0,Y++,je++,ae===null)ae=ke;else if(ke!==ae)throw{code:"D3131"};break}}Te||(Se===35?(je++,ce++):Ee.push({position:je,character:String.fromCodePoint(Se)}))}),Y>0){W.primary=D.DECIMAL,W.zeroCode=ae,W.mandatoryDigits=Y,W.optionalDigits=ce;const Te=function(Ue){if(Ue.length===0)return 0;const ke=Ue[0].character;for(let Tt=1;Tt<Ue.length;Tt++)if(Ue[Tt].character!==ke)return 0;const Ot=Ue.map(Tt=>Tt.position),gn=function(Tt,jt){return jt===0?Tt:gn(jt,Tt%jt)},Ut=Ot.reduce(gn);for(let Tt=1;Tt<=Ot.length;Tt++)if(Ot.indexOf(Tt*Ut)===-1)return 0;return Ut}(Ee);Te>0?(W.regular=!0,W.groupingSeparators={position:Te,character:Ee[0].character}):(W.regular=!1,W.groupingSeparators=Ee)}else W.primary=D.SEQUENCE,W.token=q}}return W}const ue={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function U(N){var W=[];const q={type:"datetime",parts:W},J=function(Te,Ue){if(Ue>Te){let ke=N.substring(Te,Ue);ke=ke.split("]]").join("]"),W.push({type:"literal",value:ke})}};for(var de=0,ae=0;ae<N.length;){if(N.charAt(ae)==="["){if(N.charAt(ae+1)==="["){J(de,ae),W.push({type:"literal",value:"["}),ae+=2,de=ae;continue}if(J(de,ae),de=ae,ae=N.indexOf("]",de),ae===-1)throw{code:"D3135"};let Te=N.substring(de+1,ae);Te=Te.split(/\s+/).join("");var Y={type:"marker",component:Te.charAt(0)},ce=Te.lastIndexOf(","),Ee;if(ce!==-1){const Ue=Te.substring(ce+1),ke=Ue.indexOf("-");let Ot,gn;const Ut=function(jt){if(!(typeof jt>"u"||jt==="*"))return parseInt(jt)};ke===-1?Ot=Ue:(Ot=Ue.substring(0,ke),gn=Ue.substring(ke+1));const Tt={min:Ut(Ot),max:Ut(gn)};Y.width=Tt,Ee=Te.substring(1,ce)}else Ee=Te.substring(1);if(Ee.length===1)Y.presentation1=Ee;else if(Ee.length>1){var je=Ee.charAt(Ee.length-1);"atco".indexOf(je)!==-1?(Y.presentation2=je,je==="o"&&(Y.ordinal=!0),Y.presentation1=Ee.substring(0,Ee.length-1)):Y.presentation1=Ee}else Y.presentation1=ue[Y.component];if(typeof Y.presentation1>"u")throw{code:"D3132",value:Y.component};if(Y.presentation1[0]==="n")Y.names=G.LOWER;else if(Y.presentation1[0]==="N")Y.presentation1[1]==="n"?Y.names=G.TITLE:Y.names=G.UPPER;else if("YMDdFWwXxHhmsf".indexOf(Y.component)!==-1){var Ge=Y.presentation1;if(Y.presentation2&&(Ge+=";"+Y.presentation2),Y.integerFormat=Oe(Ge),Y.width&&Y.width.min!==void 0&&Y.integerFormat.mandatoryDigits<Y.width.min&&(Y.integerFormat.mandatoryDigits=Y.width.min),Y.component==="Y")if(Y.n=-1,Y.width&&Y.width.max!==void 0)Y.n=Y.width.max,Y.integerFormat.mandatoryDigits=Y.n;else{var Se=Y.integerFormat.mandatoryDigits+Y.integerFormat.optionalDigits;Se>=2&&(Y.n=Se)}const Ue=W[W.length-1];Ue&&Ue.integerFormat&&(Ue.integerFormat.parseWidth=Ue.integerFormat.mandatoryDigits)}(Y.component==="Z"||Y.component==="z")&&(Y.integerFormat=Oe(Y.presentation1)),W.push(Y),de=ae+1}ae++}return J(de,ae),q}const oe=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],pe=["January","February","March","April","May","June","July","August","September","October","November","December"],Ce=1e3*60*60*24,se=function(N){const W=Date.UTC(N.year,N.month);var q=new Date(W).getUTCDay();return q===0&&(q=7),q>4?W+(8-q)*Ce:W-(q-1)*Ce},Q=function(N,W){return{year:N,month:W,nextMonth:function(){return W===11?Q(N+1,0):Q(N,W+1)},previousMonth:function(){return W===0?Q(N-1,11):Q(N,W-1)},nextYear:function(){return Q(N+1,W)},previousYear:function(){return Q(N-1,W)}}},ie=function(N,W){return(W-N)/(Ce*7)+1},X=(N,W)=>{let q;switch(W){case"Y":q=N.getUTCFullYear();break;case"M":q=N.getUTCMonth()+1;break;case"D":q=N.getUTCDate();break;case"d":{const J=Date.UTC(N.getUTCFullYear(),N.getUTCMonth(),N.getUTCDate()),de=Date.UTC(N.getUTCFullYear(),0);q=(J-de)/Ce+1;break}case"F":q=N.getUTCDay(),q===0&&(q=7);break;case"W":{const J=Q(N.getUTCFullYear(),0),de=se(J),ae=Date.UTC(J.year,N.getUTCMonth(),N.getUTCDate());let Y=ie(de,ae);if(Y>52){const ce=se(J.nextYear());ae>=ce&&(Y=1)}else if(Y<1){const ce=se(J.previousYear());Y=ie(ce,ae)}q=Math.floor(Y);break}case"w":{const J=Q(N.getUTCFullYear(),N.getUTCMonth()),de=se(J),ae=Date.UTC(J.year,J.month,N.getUTCDate());let Y=ie(de,ae);if(Y>4){const ce=se(J.nextMonth());ae>=ce&&(Y=1)}else if(Y<1){const ce=se(J.previousMonth());Y=ie(ce,ae)}q=Math.floor(Y);break}case"X":{const J=Q(N.getUTCFullYear(),0),de=se(J),ae=se(J.nextYear()),Y=N.getTime();Y<de?q=J.year-1:Y>=ae?q=J.year+1:q=J.year;break}case"x":{const J=Q(N.getUTCFullYear(),N.getUTCMonth()),de=se(J),ae=J.nextMonth(),Y=se(ae),ce=N.getTime();ce<de?q=J.previousMonth().month+1:ce>=Y?q=ae.month+1:q=J.month+1;break}case"H":q=N.getUTCHours();break;case"h":q=N.getUTCHours(),q=q%12,q===0&&(q=12);break;case"P":q=N.getUTCHours()>=12?"pm":"am";break;case"m":q=N.getUTCMinutes();break;case"s":q=N.getUTCSeconds();break;case"f":q=N.getUTCMilliseconds();break;case"Z":case"z":break;case"C":q="ISO";break;case"E":q="ISO";break}return q};let $e=null;function Be(N,W,q){var J=0,de=0;if(typeof q<"u"){const Ge=parseInt(q);J=Math.floor(Ge/100),de=Ge%100}var ae=function(Ge,Se){var Te=X(Ge,Se.component);if("YMDdFWwXxHhms".indexOf(Se.component)!==-1)if(Se.component==="Y"&&Se.n!==-1&&(Te=Te%Math.pow(10,Se.n)),Se.names){if(Se.component==="M"||Se.component==="x")Te=pe[Te-1];else if(Se.component==="F")Te=oe[Te];else throw{code:"D3133",value:Se.component};Se.names===G.UPPER?Te=Te.toUpperCase():Se.names===G.LOWER&&(Te=Te.toLowerCase()),Se.width&&Te.length>Se.width.max&&(Te=Te.substring(0,Se.width.max))}else Te=Z(Te,Se.integerFormat);else if(Se.component==="f")Te=Z(Te,Se.integerFormat);else if(Se.component==="Z"||Se.component==="z"){const Ue=J*100+de;if(Se.integerFormat.regular)Te=Z(Ue,Se.integerFormat);else{const ke=Se.integerFormat.mandatoryDigits;if(ke===1||ke===2)Te=Z(J,Se.integerFormat),de!==0&&(Te+=":"+F(de,"00"));else if(ke===3||ke===4)Te=Z(Ue,Se.integerFormat);else throw{code:"D3134",value:ke}}Ue>=0&&(Te="+"+Te),Se.component==="z"&&(Te="GMT"+Te),Ue===0&&Se.presentation2==="t"&&(Te="Z")}else Se.component==="P"&&Se.names===G.UPPER&&(Te=Te.toUpperCase());return Te};let Y;typeof W>"u"?($e===null&&($e=U("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),Y=$e):Y=U(W);const ce=(60*J+de)*60*1e3,Ee=new Date(N+ce);let je="";return Y.parts.forEach(function(Ge){Ge.type==="literal"?je+=Ge.value:je+=ae(Ee,Ge)}),je}function S(N){var W={};if(N.type==="datetime")W.type="datetime",W.parts=N.parts.map(function(q){var J={};if(q.type==="literal")J.regex=q.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(q.component==="Z"||q.component==="z"){let ae;Array.isArray(q.integerFormat.groupingSeparators)||(ae=q.integerFormat.groupingSeparators),J.regex="",q.component==="z"&&(J.regex="GMT"),J.regex+="[-+][0-9]+",ae&&(J.regex+=ae.character+"[0-9]+"),J.parse=function(Y){q.component==="z"&&(Y=Y.substring(3));let ce=0,Ee=0;return ae?(ce=Number.parseInt(Y.substring(0,Y.indexOf(ae.character))),Ee=Number.parseInt(Y.substring(Y.indexOf(ae.character)+1))):Y.length-1<=2?ce=Number.parseInt(Y):(ce=Number.parseInt(Y.substring(0,3)),Ee=Number.parseInt(Y.substring(3))),ce*60+Ee}}else if(q.integerFormat)J=S(q.integerFormat);else{J.regex="[a-zA-Z]+";var de={};if(q.component==="M"||q.component==="x")pe.forEach(function(ae,Y){q.width&&q.width.max?de[ae.substring(0,q.width.max)]=Y+1:de[ae]=Y+1});else if(q.component==="F")oe.forEach(function(ae,Y){Y>0&&(q.width&&q.width.max?de[ae.substring(0,q.width.max)]=Y:de[ae]=Y)});else if(q.component==="P")de={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:q.component};J.parse=function(ae){return de[ae]}}return J.component=q.component,J});else{W.type="integer";const q=N.case===G.UPPER;switch(N.primary){case D.LETTERS:W.regex=q?"[A-Z]+":"[a-z]+",W.parse=function(J){return H(J,q?"A":"a")};break;case D.ROMAN:W.regex=q?"[MDCLXVI]+":"[mdclxvi]+",W.parse=function(J){return M(q?J:J.toUpperCase())};break;case D.WORDS:W.regex="(?:"+Object.keys(I).concat("and","[\\-, ]").join("|")+")+",W.parse=function(J){return R(J.toLowerCase())};break;case D.DECIMAL:W.regex="[0-9]",N.parseWidth?W.regex+=`{${N.parseWidth}}`:W.regex+="+",N.ordinal&&(W.regex+="(?:th|st|nd|rd)"),W.parse=function(J){let de=J;return N.ordinal&&(de=J.substring(0,J.length-2)),N.regular?de=de.split(",").join(""):N.groupingSeparators.forEach(ae=>{de=de.split(ae.character).join("")}),N.zeroCode!==48&&(de=de.split("").map(ae=>String.fromCodePoint(ae.codePointAt(0)-N.zeroCode+48)).join("")),parseInt(de)};break;case D.SEQUENCE:throw{code:"D3130",value:N.token}}}return W}function $(N,W){if(typeof N>"u")return;const q=Oe(W);return S(q).parse(N)}function ve(N,W){const q=U(W),J=S(q),de="^"+J.parts.map(Ee=>"("+Ee.regex+")").join("")+"$";var Y=new RegExp(de,"i").exec(N);if(Y!==null){const ke={};for(let Je=1;Je<Y.length;Je++){const y=J.parts[Je-1];y.parse&&(ke[y.component]=y.parse(Y[Je]))}if(Object.getOwnPropertyNames(ke).length===0)return;let Ot=0;const gn=Je=>{Ot<<=1,Ot+=Je?1:0},Ut=Je=>!(~Je&Ot)&&!!(Je&Ot);"YXMxWwdD".split("").forEach(Je=>gn(ke[Je]));const jt=!Ut(161)&&Ut(130),Rn=Ut(84),or=!Rn&&Ut(72);Ot=0,"PHhmsf".split("").forEach(Je=>gn(ke[Je]));const Un=!Ut(23)&&Ut(47),Ir=(jt?"YD":Rn?"XxwF":or?"XWF":"YMD")+(Un?"Phmsf":"Hmsf"),bn=this.environment.timestamp;let kt=!1,zn=!1;if(Ir.split("").forEach(Je=>{if(typeof ke[Je]>"u")kt?(ke[Je]="MDd".indexOf(Je)!==-1?1:0,zn=!0):ke[Je]=X(bn,Je);else if(kt=!0,zn)throw{code:"D3136"}}),ke.M>0?ke.M-=1:ke.M=0,jt){const Je=Date.UTC(ke.Y,0),y=(ke.d-1)*1e3*60*60*24,E=new Date(Je+y);ke.M=E.getUTCMonth(),ke.D=E.getUTCDate()}if(Rn)throw{code:"D3136"};if(or)throw{code:"D3136"};Un&&(ke.H=ke.h===12?0:ke.h,ke.P===1&&(ke.H+=12));var ce=Date.UTC(ke.Y,ke.M,ke.D,ke.H,ke.m,ke.s,ke.f);return(ke.Z||ke.z)&&(ce-=(ke.Z||ke.z)*60*1e3),ce}}var Pe=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function ct(N,W){if(!(typeof N>"u"))if(typeof W>"u"){if(!Pe.test(N))throw{stack:new Error().stack,code:"D3110",value:N};return Date.parse(N)}else return ve.call(this,N,W)}function He(N,W,q){if(!(typeof N>"u"))return Be.call(this,N,W,q)}return{formatInteger:F,parseInteger:$,fromMillis:He,toMillis:ct}})();r.exports=a},{"./utils":6}],2:[function(n,r,i){(function(o){(function(){var a=n("./utils");const c=(()=>{var f=a.isNumeric,b=a.isArrayOfStrings,C=a.isArrayOfNumbers,x=a.createSequence,v=a.isSequence,I=a.isFunction,R=a.isLambda,P=a.isPromise,V=a.getFunctionArity,K=a.isDeepEqual,M=a.stringToArray;function z(d){if(!(typeof d>"u")){var g=0;return d.forEach(function(w){g+=w}),g}}function H(d){return typeof d>"u"?0:d.length}function F(d){if(!(typeof d>"u"||d.length===0))return Math.max.apply(Math,d)}function D(d){if(!(typeof d>"u"||d.length===0))return Math.min.apply(Math,d)}function G(d){if(!(typeof d>"u"||d.length===0)){var g=0;return d.forEach(function(w){g+=w}),g/d.length}}function Z(d,g=!1){if(!(typeof d>"u")){var w;if(typeof d=="string")w=d;else if(I(d))w="";else{if(typeof d=="number"&&!isFinite(d))throw{code:"D3001",value:d,stack:new Error().stack};var T=g?2:0;Array.isArray(d)&&d.outerWrapper&&(d=d[0]),w=JSON.stringify(d,function(_,B){return typeof B<"u"&&B!==null&&B.toPrecision&&f(B)?Number(B.toPrecision(15)):B&&I(B)?"":B},T)}return w}}function xe(d,g,w){if(!(typeof d>"u")){var T=M(d),_=T.length;if(_+g<0&&(g=0),typeof w<"u"){if(w<=0)return"";var B=g>=0?g+w:_+g+w;return T.slice(g,B).join("")}return T.slice(g).join("")}}function Oe(d,g){if(!(typeof d>"u")){var w=d.indexOf(g);return w>-1?d.substr(0,w):d}}function ue(d,g){if(!(typeof d>"u")){var w=d.indexOf(g);return w>-1?d.substr(w+g.length):d}}function U(d){if(!(typeof d>"u"))return d.toLowerCase()}function oe(d){if(!(typeof d>"u"))return d.toUpperCase()}function pe(d){if(!(typeof d>"u"))return M(d).length}function Ce(d){if(!(typeof d>"u")){var g=d.replace(/[ \t\n\r]+/gm," ");return g.charAt(0)===" "&&(g=g.substring(1)),g.charAt(g.length-1)===" "&&(g=g.substring(0,g.length-1)),g}}function se(d,g,w){if(!(typeof d>"u")){(typeof w>"u"||w.length===0)&&(w=" ");var T;g=Math.trunc(g);var _=Math.abs(g)-pe(d);if(_>0){var B=new Array(_+1).join(w);w.length>1&&(B=xe(B,0,_)),g>0?T=d+B:T=B+d}else T=d;return T}}async function Q(d,g){var w=d.apply(this,[g]);if(P(w)&&(w=await w),w&&!(typeof w.start=="number"||w.end==="number"||Array.isArray(w.groups)||I(w.next)))throw{code:"T1010",stack:new Error().stack};return w}async function ie(d,g){if(!(typeof d>"u")){var w;if(typeof g=="string")w=d.indexOf(g)!==-1;else{var T=await Q(g,d);w=typeof T<"u"}return w}}async function X(d,g,w){if(!(typeof d>"u")){if(w<0)throw{stack:new Error().stack,value:w,code:"D3040",index:3};var T=x();if(typeof w>"u"||w>0){var _=0,B=await Q(g,d);if(typeof B<"u")for(;typeof B<"u"&&(typeof w>"u"||_<w);)T.push({match:B.match,index:B.start,groups:B.groups}),B=await Q(B.next),_++}return T}}async function $e(d,g,w,T){if(!(typeof d>"u")){var _=this;if(g==="")throw{code:"D3010",stack:new Error().stack,value:g,index:2};if(T<0)throw{code:"D3011",stack:new Error().stack,value:T,index:4};var B;typeof w=="string"?B=function(Ke){for(var St="",Fe=0,bt=w.indexOf("$",Fe);bt!==-1&&Fe<w.length;){St+=w.substring(Fe,bt),Fe=bt+1;var un=w.charAt(Fe);if(un==="$")St+="$",Fe++;else if(un==="0")St+=Ke.match,Fe++;else{var ut;if(Ke.groups.length===0?ut=1:ut=Math.floor(Math.log(Ke.groups.length)*Math.LOG10E)+1,bt=parseInt(w.substring(Fe,Fe+ut),10),ut>1&&bt>Ke.groups.length&&(bt=parseInt(w.substring(Fe,Fe+ut-1),10)),isNaN(bt))St+="$";else{if(Ke.groups.length>0){var Cr=Ke.groups[bt-1];typeof Cr<"u"&&(St+=Cr)}Fe+=bt.toString().length}}bt=w.indexOf("$",Fe)}return St+=w.substring(Fe),St}:B=w;var ne="",we=0;if(typeof T>"u"||T>0){var Ae=0;if(typeof g=="string"){for(var tt=d.indexOf(g,we);tt!==-1&&(typeof T>"u"||Ae<T);)ne+=d.substring(we,tt),ne+=w,we=tt+g.length,Ae++,tt=d.indexOf(g,we);ne+=d.substring(we)}else{var Re=await Q(g,d);if(typeof Re<"u"){for(;typeof Re<"u"&&(typeof T>"u"||Ae<T);){ne+=d.substring(we,Re.start);var nt=B.apply(_,[Re]);if(P(nt)&&(nt=await nt),typeof nt=="string")ne+=nt;else throw{code:"D3012",stack:new Error().stack,value:nt};we=Re.start+Re.match.length,Ae++,Re=await Q(Re.next)}ne+=d.substring(we)}else ne=d}}else ne=d;return ne}}function Be(d){if(!(typeof d>"u")){var g=typeof window<"u"?window.btoa:function(w){return new o.Buffer.from(w,"binary").toString("base64")};return g(d)}}function S(d){if(!(typeof d>"u")){var g=typeof window<"u"?window.atob:function(w){return new o.Buffer.from(w,"base64").toString("binary")};return g(d)}}function $(d){if(!(typeof d>"u")){var g;try{g=encodeURIComponent(d)}catch{throw{code:"D3140",stack:new Error().stack,value:d,functionName:"encodeUrlComponent"}}return g}}function ve(d){if(!(typeof d>"u")){var g;try{g=encodeURI(d)}catch{throw{code:"D3140",stack:new Error().stack,value:d,functionName:"encodeUrl"}}return g}}function Pe(d){if(!(typeof d>"u")){var g;try{g=decodeURIComponent(d)}catch{throw{code:"D3140",stack:new Error().stack,value:d,functionName:"decodeUrlComponent"}}return g}}function ct(d){if(!(typeof d>"u")){var g;try{g=decodeURI(d)}catch{throw{code:"D3140",stack:new Error().stack,value:d,functionName:"decodeUrl"}}return g}}async function He(d,g,w){if(!(typeof d>"u")){if(w<0)throw{code:"D3020",stack:new Error().stack,value:w,index:3};var T=[];if(typeof w>"u"||w>0)if(typeof g=="string")T=d.split(g,w);else{var _=0,B=await Q(g,d);if(typeof B<"u"){for(var ne=0;typeof B<"u"&&(typeof w>"u"||_<w);)T.push(d.substring(ne,B.start)),ne=B.end,B=await Q(B.next),_++;(typeof w>"u"||_<w)&&T.push(d.substring(ne))}else T.push(d)}return T}}function N(d,g){if(!(typeof d>"u"))return typeof g>"u"&&(g=""),d.join(g)}function W(d,g,w){if(!(typeof d>"u")){var T={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},_=T;typeof w<"u"&&Object.keys(w).forEach(function(_e){_[_e]=w[_e]});for(var B=[],ne=_["zero-digit"].charCodeAt(0),we=ne;we<ne+10;we++)B.push(String.fromCharCode(we));var Ae=B.concat([_["decimal-separator"],_["exponent-separator"],_["grouping-separator"],_.digit,_["pattern-separator"]]),tt=g.split(_["pattern-separator"]);if(tt.length>2)throw{code:"D3080",stack:new Error().stack};var Re=function(_e){var ht=(function(){for(var vt,Kt=0;Kt<_e.length;Kt++)if(vt=_e.charAt(Kt),Ae.indexOf(vt)!==-1&&vt!==_["exponent-separator"])return _e.substring(0,Kt)})(),Mt=(function(){for(var vt,Kt=_e.length-1;Kt>=0;Kt--)if(vt=_e.charAt(Kt),Ae.indexOf(vt)!==-1&&vt!==_["exponent-separator"])return _e.substring(Kt+1)})(),pt=_e.substring(ht.length,_e.length-Mt.length),rn,Wn,Gt,It,an=_e.indexOf(_["exponent-separator"],ht.length);an===-1||an>_e.length-Mt.length?(rn=pt,Wn=void 0):(rn=pt.substring(0,an),Wn=pt.substring(an+1));var on=rn.indexOf(_["decimal-separator"]);return on===-1?(Gt=rn,It=Mt):(Gt=rn.substring(0,on),It=rn.substring(on+1)),{prefix:ht,suffix:Mt,activePart:pt,mantissaPart:rn,exponentPart:Wn,integerPart:Gt,fractionalPart:It,subpicture:_e}},nt=function(_e){var ht,Mt,pt=_e.subpicture,rn=pt.indexOf(_["decimal-separator"]);rn!==pt.lastIndexOf(_["decimal-separator"])&&(ht="D3081"),pt.indexOf(_.percent)!==pt.lastIndexOf(_.percent)&&(ht="D3082"),pt.indexOf(_["per-mille"])!==pt.lastIndexOf(_["per-mille"])&&(ht="D3083"),pt.indexOf(_.percent)!==-1&&pt.indexOf(_["per-mille"])!==-1&&(ht="D3084");var Wn=!1;for(Mt=0;Mt<_e.mantissaPart.length;Mt++){var Gt=_e.mantissaPart.charAt(Mt);if(B.indexOf(Gt)!==-1||Gt===_.digit){Wn=!0;break}}Wn||(ht="D3085");var It=_e.activePart.split("").map(function(vt){return Ae.indexOf(vt)===-1?"p":"a"}).join("");It.indexOf("p")!==-1&&(ht="D3086"),rn!==-1?(pt.charAt(rn-1)===_["grouping-separator"]||pt.charAt(rn+1)===_["grouping-separator"])&&(ht="D3087"):_e.integerPart.charAt(_e.integerPart.length-1)===_["grouping-separator"]&&(ht="D3088"),pt.indexOf(_["grouping-separator"]+_["grouping-separator"])!==-1&&(ht="D3089");var an=_e.integerPart.indexOf(_.digit);an!==-1&&_e.integerPart.substring(0,an).split("").filter(function(vt){return B.indexOf(vt)>-1}).length>0&&(ht="D3090"),an=_e.fractionalPart.lastIndexOf(_.digit),an!==-1&&_e.fractionalPart.substring(an).split("").filter(function(vt){return B.indexOf(vt)>-1}).length>0&&(ht="D3091");var on=typeof _e.exponentPart=="string";if(on&&_e.exponentPart.length>0&&(pt.indexOf(_.percent)!==-1||pt.indexOf(_["per-mille"])!==-1)&&(ht="D3092"),on&&(_e.exponentPart.length===0||_e.exponentPart.split("").filter(function(vt){return B.indexOf(vt)===-1}).length>0)&&(ht="D3093"),ht)throw{code:ht,stack:new Error().stack}},Ke=function(_e){var ht=function(Lt,ii){for(var Er=[],Hn=Lt.indexOf(_["grouping-separator"]);Hn!==-1;){var _i=(ii?Lt.substring(0,Hn):Lt.substring(Hn)).split("").filter(function(Fr){return B.indexOf(Fr)!==-1||Fr===_.digit}).length;Er.push(_i),Hn=_e.integerPart.indexOf(_["grouping-separator"],Hn+1)}return Er},Mt=ht(_e.integerPart),pt=function(Lt){if(Lt.length===0)return 0;for(var ii=function(_i,Fr){return Fr===0?_i:ii(Fr,_i%Fr)},Er=Lt.reduce(ii),Hn=1;Hn<=Lt.length;Hn++)if(Lt.indexOf(Hn*Er)===-1)return 0;return Er},rn=pt(Mt),Wn=ht(_e.fractionalPart,!0),Gt=_e.integerPart.split("").filter(function(Lt){return B.indexOf(Lt)!==-1}).length,It=Gt,an=_e.fractionalPart.split(""),on=an.filter(function(Lt){return B.indexOf(Lt)!==-1}).length,vt=an.filter(function(Lt){return B.indexOf(Lt)!==-1||Lt===_.digit}).length,Kt=typeof _e.exponentPart=="string";Gt===0&&vt===0&&(Kt?(on=1,vt=1):Gt=1),Kt&&Gt===0&&_e.integerPart.indexOf(_.digit)!==-1&&(Gt=1),Gt===0&&on===0&&(on=1);var ri=0;return Kt&&(ri=_e.exponentPart.split("").filter(function(Lt){return B.indexOf(Lt)!==-1}).length),{integerPartGroupingPositions:Mt,regularGrouping:rn,minimumIntegerPartSize:Gt,scalingFactor:It,prefix:_e.prefix,fractionalPartGroupingPositions:Wn,minimumFactionalPartSize:on,maximumFactionalPartSize:vt,minimumExponentSize:ri,suffix:_e.suffix,picture:_e.subpicture}},St=tt.map(Re);St.forEach(nt);var Fe=St.map(Ke),bt=_["minus-sign"],un=_["zero-digit"],ut=_["decimal-separator"],Cr=_["grouping-separator"];Fe.length===1&&(Fe.push(JSON.parse(JSON.stringify(Fe[0]))),Fe[1].prefix=bt+Fe[1].prefix);var gt;d>=0?gt=Fe[0]:gt=Fe[1];var ti;gt.picture.indexOf(_.percent)!==-1?ti=d*100:gt.picture.indexOf(_["per-mille"])!==-1?ti=d*1e3:ti=d;var Et,jn;if(gt.minimumExponentSize===0)Et=ti;else{var es=Math.pow(10,gt.scalingFactor),Ga=Math.pow(10,gt.scalingFactor-1);for(Et=ti,jn=0;Et<Ga;)Et*=10,jn-=1;for(;Et>es;)Et/=10,jn+=1}var ca=ce(Et,gt.maximumFactionalPartSize),Ka=function(_e,ht){var Mt=Math.abs(_e).toFixed(ht);return un!=="0"&&(Mt=Mt.split("").map(function(pt){return pt>="0"&&pt<="9"?B[pt.charCodeAt(0)-48]:pt}).join("")),Mt},Me=Ka(ca,gt.maximumFactionalPartSize),At=Me.indexOf(".");for(At===-1?Me=Me+ut:Me=Me.replace(".",ut);Me.charAt(0)===un;)Me=Me.substring(1);for(;Me.charAt(Me.length-1)===un;)Me=Me.substring(0,Me.length-1);At=Me.indexOf(ut);var Sr=gt.minimumIntegerPartSize-At,ua=gt.minimumFactionalPartSize-(Me.length-At-1);if(Me=(Sr>0?new Array(Sr+1).join(un):"")+Me,Me=Me+(ua>0?new Array(ua+1).join(un):""),At=Me.indexOf(ut),gt.regularGrouping>0)for(var nn=Math.floor((At-1)/gt.regularGrouping),ni=1;ni<=nn;ni++)Me=[Me.slice(0,At-ni*gt.regularGrouping),Cr,Me.slice(At-ni*gt.regularGrouping)].join("");else gt.integerPartGroupingPositions.forEach(function(_e){Me=[Me.slice(0,At-_e),Cr,Me.slice(At-_e)].join(""),At++});if(At=Me.indexOf(ut),gt.fractionalPartGroupingPositions.forEach(function(_e){Me=[Me.slice(0,_e+At+1),Cr,Me.slice(_e+At+1)].join("")}),At=Me.indexOf(ut),(gt.picture.indexOf(ut)===-1||At===Me.length-1)&&(Me=Me.substring(0,Me.length-1)),typeof jn<"u"){var $i=Ka(jn,0);Sr=gt.minimumExponentSize-$i.length,Sr>0&&($i=new Array(Sr+1).join(un)+$i),Me=Me+_["exponent-separator"]+(jn<0?bt:"")+$i}return Me=gt.prefix+Me+gt.suffix,Me}}function q(d,g){if(!(typeof d>"u")){if(d=ce(d),typeof g>"u"?g=10:g=ce(g),g<2||g>36)throw{code:"D3100",stack:new Error().stack,value:g};var w=d.toString(g);return w}}function J(d){var g;if(!(typeof d>"u")){if(typeof d=="number")g=d;else if(typeof d=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(d)&&!isNaN(parseFloat(d))&&isFinite(d))g=parseFloat(d);else if(typeof d=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(d))g=Number(d);else if(d===!0)g=1;else if(d===!1)g=0;else throw{code:"D3030",value:d,stack:new Error().stack,index:1};return g}}function de(d){var g;if(!(typeof d>"u"))return g=Math.abs(d),g}function ae(d){var g;if(!(typeof d>"u"))return g=Math.floor(d),g}function Y(d){var g;if(!(typeof d>"u"))return g=Math.ceil(d),g}function ce(d,g){var w;if(!(typeof d>"u")){if(g){var T=d.toString().split("e");d=+(T[0]+"e"+(T[1]?+T[1]+g:g))}w=Math.round(d);var _=w-d;return Math.abs(_)===.5&&Math.abs(w%2)===1&&(w=w-1),g&&(T=w.toString().split("e"),w=+(T[0]+"e"+(T[1]?+T[1]-g:-g))),Object.is(w,-0)&&(w=0),w}}function Ee(d){var g;if(!(typeof d>"u")){if(d<0)throw{stack:new Error().stack,code:"D3060",index:1,value:d};return g=Math.sqrt(d),g}}function je(d,g){var w;if(!(typeof d>"u")){if(w=Math.pow(d,g),!isFinite(w))throw{stack:new Error().stack,code:"D3061",index:1,value:d,exp:g};return w}}function Ge(){return Math.random()}function Se(d){if(!(typeof d>"u")){var g=!1;if(Array.isArray(d)){if(d.length===1)g=Se(d[0]);else if(d.length>1){var w=d.filter(function(T){return Se(T)});g=w.length>0}}else typeof d=="string"?d.length>0&&(g=!0):f(d)?d!==0&&(g=!0):d!==null&&typeof d=="object"&&!I(d)?Object.keys(d).length>0&&(g=!0):typeof d=="boolean"&&d===!0&&(g=!0);return g}}function Te(d){if(!(typeof d>"u"))return!Se(d)}function Ue(d,g,w,T){var _=[g],B=V(d);return B>=2&&_.push(w),B>=3&&_.push(T),_}async function ke(d,g){if(!(typeof d>"u")){for(var w=x(),T=0;T<d.length;T++){var _=Ue(g,d[T],T,d),B=await g.apply(this,_);typeof B<"u"&&w.push(B)}return w}}async function Ot(d,g){if(!(typeof d>"u")){for(var w=x(),T=0;T<d.length;T++){var _=d[T],B=Ue(g,_,T,d),ne=await g.apply(this,B);Se(ne)&&w.push(_)}return w}}async function gn(d,g){if(!(typeof d>"u")){for(var w=!1,T,_=0;_<d.length;_++){var B=d[_],ne=!0;if(typeof g<"u"){var we=Ue(g,B,_,d),Ae=await g.apply(this,we);ne=Se(Ae)}if(ne)if(!w)T=B,w=!0;else throw{stack:new Error().stack,code:"D3138",index:_}}if(!w)throw{stack:new Error().stack,code:"D3139"};return T}}function Ut(){for(var d=[],g=Array.prototype.slice.call(arguments),w=Math.min.apply(Math,g.map(function(B){return Array.isArray(B)?B.length:0})),T=0;T<w;T++){var _=g.map(B=>B[T]);d.push(_)}return d}async function Tt(d,g,w){if(!(typeof d>"u")){var T,_=V(g);if(_<2)throw{stack:new Error().stack,code:"D3050",index:1};var B;for(typeof w>"u"&&d.length>0?(T=d[0],B=1):(T=w,B=0);B<d.length;){var ne=[T,d[B]];_>=3&&ne.push(B),_>=4&&ne.push(d),T=await g.apply(this,ne),B++}return T}}function jt(d){var g=x();if(Array.isArray(d)){var w={};d.forEach(function(T){var _=jt(T);_.forEach(function(B){w[B]=!0})}),g=jt(w)}else d!==null&&typeof d=="object"&&!I(d)&&Object.keys(d).forEach(T=>g.push(T));return g}function Rn(d,g){var w;if(Array.isArray(d)){w=x();for(var T=0;T<d.length;T++){var _=Rn(d[T],g);typeof _<"u"&&(Array.isArray(_)?_.forEach(B=>w.push(B)):w.push(_))}}else d!==null&&typeof d=="object"&&!I(d)&&(w=d[g]);return w}function or(d,g){return typeof d>"u"?g:typeof g>"u"?d:(Array.isArray(d)||(d=x(d)),Array.isArray(g)||(g=[g]),d.concat(g))}function Mr(d){return!(typeof d>"u")}function Un(d){var g=x();if(Array.isArray(d))d.forEach(function(_){g=or(g,Un(_))});else if(d!==null&&typeof d=="object"&&!R(d))for(var w in d){var T={};T[w]=d[w],g.push(T)}else g=d;return g}function me(d){if(!(typeof d>"u")){var g={};return d.forEach(function(w){for(var T in w)g[T]=w[T]}),g}}function Nr(d){if(!(typeof d>"u")){if(d.length<=1)return d;for(var g=d.length,w=new Array(g),T=0;T<g;T++)w[g-T-1]=d[T];return w}}async function Ir(d,g){var w=x();for(var T in d){var _=Ue(g,d[T],T,d),B=await g.apply(this,_);typeof B<"u"&&w.push(B)}return w}function bn(d){throw{code:"D3137",stack:new Error().stack,message:d||"$error() function evaluated"}}function kt(d,g){if(!d)throw{code:"D3141",stack:new Error().stack,message:g||"$assert() statement failed"}}function zn(d){if(d!==void 0)return d===null?"null":f(d)?"number":typeof d=="string"?"string":typeof d=="boolean"?"boolean":Array.isArray(d)?"array":I(d)?"function":"object"}async function Je(d,g){if(!(typeof d>"u")){if(d.length<=1)return d;var w;if(typeof g>"u"){if(!C(d)&&!b(d))throw{stack:new Error().stack,code:"D3070",index:1};w=async function(ne,we){return ne>we}}else w=g;var T=async function(ne,we){var Ae=async function(Re,nt,Ke){nt.length===0?Array.prototype.push.apply(Re,Ke):Ke.length===0?Array.prototype.push.apply(Re,nt):await w(nt[0],Ke[0])?(Re.push(Ke[0]),await Ae(Re,nt,Ke.slice(1))):(Re.push(nt[0]),await Ae(Re,nt.slice(1),Ke))},tt=[];return await Ae(tt,ne,we),tt},_=async function(ne){if(!Array.isArray(ne)||ne.length<=1)return ne;var we=Math.floor(ne.length/2),Ae=ne.slice(0,we),tt=ne.slice(we);return Ae=await _(Ae),tt=await _(tt),await T(Ae,tt)},B=await _(d);return B}}function y(d){if(!(typeof d>"u")){if(d.length<=1)return d;for(var g=new Array(d.length),w=0;w<d.length;w++){var T=Math.floor(Math.random()*(w+1));w!==T&&(g[w]=g[T]),g[T]=d[w]}return g}}function E(d){if(!(typeof d>"u")){if(!Array.isArray(d)||d.length<=1)return d;for(var g=v(d)?x():[],w=0;w<d.length;w++){for(var T=d[w],_=!1,B=0;B<g.length;B++)if(K(T,g[B])){_=!0;break}_||g.push(T)}return g}}async function O(d,g){var w={};for(var T in d){var _=d[T],B=Ue(g,_,T,d),ne=await g.apply(this,B);Se(ne)&&(w[T]=_)}return Object.keys(w).length===0&&(w=void 0),w}return{sum:z,count:H,max:F,min:D,average:G,string:Z,substring:xe,substringBefore:Oe,substringAfter:ue,lowercase:U,uppercase:oe,length:pe,trim:Ce,pad:se,match:X,contains:ie,replace:$e,split:He,join:N,formatNumber:W,formatBase:q,number:J,floor:ae,ceil:Y,round:ce,abs:de,sqrt:Ee,power:je,random:Ge,boolean:Se,not:Te,map:ke,zip:Ut,filter:Ot,single:gn,foldLeft:Tt,sift:O,keys:jt,lookup:Rn,append:or,exists:Mr,spread:Un,merge:me,reverse:Nr,each:Ir,error:bn,assert:kt,type:zn,sort:Je,shuffle:y,distinct:E,base64encode:Be,base64decode:S,encodeUrlComponent:$,encodeUrl:ve,decodeUrlComponent:Pe,decodeUrl:ct}})();r.exports=c}).call(this)}).call(this,typeof ks<"u"?ks:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(n,r,i){var o=n("./datetime"),a=n("./functions"),c=n("./utils"),f=n("./parser"),b=n("./signature"),C=(function(){var x=c.isNumeric,v=c.isArrayOfStrings,I=c.isArrayOfNumbers,R=c.createSequence,P=c.isSequence,V=c.isFunction,K=c.isLambda,M=c.isIterable,z=c.isPromise,H=c.getFunctionArity,F=c.isDeepEqual,D=bn(null);async function G(y,E,O){var d,g=O.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(g&&await g(y,E,O),y.type){case"path":d=await Z(y,E,O);break;case"binary":d=await pe(y,E,O);break;case"unary":d=await Ce(y,E,O);break;case"name":d=se(y,E);break;case"string":case"number":case"value":d=Q(y);break;case"wildcard":d=ie(y,E);break;case"descendant":d=$e(y,E);break;case"parent":d=O.lookup(y.slot.label);break;case"condition":d=await ae(y,E,O);break;case"block":d=await Y(y,E,O);break;case"bind":d=await de(y,E,O);break;case"regex":d=ce(y);break;case"function":d=await Ue(y,E,O);break;case"variable":d=Ee(y,E,O);break;case"lambda":d=gn(y,E,O);break;case"partial":d=await Ut(y,E,O);break;case"apply":d=await Te(y,E,O);break;case"transform":d=Ge(y,E,O);break}if(Object.prototype.hasOwnProperty.call(y,"predicate"))for(var w=0;w<y.predicate.length;w++)d=await oe(y.predicate[w].expr,d,O);y.type!=="path"&&Object.prototype.hasOwnProperty.call(y,"group")&&(d=await W(y.group,d,O));var T=O.lookup(Symbol.for("jsonata.__evaluate_exit"));return T&&await T(y,E,O,d),d&&P(d)&&!d.tupleStream&&(y.keepArray&&(d.keepSingleton=!0),d.length===0?d=void 0:d.length===1&&(d=d.keepSingleton?d:d[0])),d}async function Z(y,E,O){var d;Array.isArray(E)&&y.steps[0].type!=="variable"?d=E:d=R(E);for(var g,w=!1,T=void 0,_=0;_<y.steps.length;_++){var B=y.steps[_];if(B.tuple&&(w=!0),_===0&&B.consarray?g=await G(B,d,O):w?T=await U(B,d,T,O):g=await Oe(B,d,O,_===y.steps.length-1),!w&&(typeof g>"u"||g.length===0))break;typeof B.focus>"u"&&(d=g)}if(w)if(y.tuple)g=T;else for(g=R(),_=0;_<T.length;_++)g.push(T[_]["@"]);return y.keepSingletonArray&&(Array.isArray(g)&&g.cons&&!g.sequence&&(g=R(g)),g.keepSingleton=!0),y.hasOwnProperty("group")&&(g=await W(y.group,w?T:g,O)),g}function xe(y,E){var O=bn(y);for(const d in E)O.bind(d,E[d]);return O}async function Oe(y,E,O,d){var g;if(y.type==="sort")return g=await je(y,E,O),y.stages&&(g=await ue(y.stages,g,O)),g;g=R();for(var w=0;w<E.length;w++){var T=await G(y,E[w],O);if(y.stages)for(var _=0;_<y.stages.length;_++)T=await oe(y.stages[_].expr,T,O);typeof T<"u"&&g.push(T)}var B=R();return d&&g.length===1&&Array.isArray(g[0])&&!P(g[0])?B=g[0]:g.forEach(function(ne){!Array.isArray(ne)||ne.cons?B.push(ne):ne.forEach(we=>B.push(we))}),B}async function ue(y,E,O){for(var d=E,g=0;g<y.length;g++){var w=y[g];switch(w.type){case"filter":d=await oe(w.expr,d,O);break;case"index":for(var T=0;T<d.length;T++){var _=d[T];_[w.value]=T}break}}return d}async function U(y,E,O,d){var g;if(y.type==="sort"){if(O)g=await je(y,O,d);else{var w=await je(y,E,d);g=R(),g.tupleStream=!0;for(var T=0;T<w.length;T++){var _={"@":w[T]};_[y.index]=T,g.push(_)}}return y.stages&&(g=await ue(y.stages,g,d)),g}g=R(),g.tupleStream=!0;var B=d;O===void 0&&(O=E.map(tt=>({"@":tt})));for(var ne=0;ne<O.length;ne++){B=xe(d,O[ne]);var we=await G(y,O[ne]["@"],B);if(typeof we<"u"){Array.isArray(we)||(we=[we]);for(var Ae=0;Ae<we.length;Ae++)_={},Object.assign(_,O[ne]),we.tupleStream?Object.assign(_,we[Ae]):(y.focus?(_[y.focus]=we[Ae],_["@"]=O[ne]["@"]):_["@"]=we[Ae],y.index&&(_[y.index]=Ae),y.ancestor&&(_[y.ancestor.label]=O[ne]["@"])),g.push(_)}}return y.stages&&(g=await ue(y.stages,g,d)),g}async function oe(y,E,O){var d=R();if(E&&E.tupleStream&&(d.tupleStream=!0),Array.isArray(E)||(E=R(E)),y.type==="number"){var g=Math.floor(y.value);g<0&&(g=E.length+g);var w=await E[g];typeof w<"u"&&(Array.isArray(w)?d=w:d.push(w))}else for(g=0;g<E.length;g++){var w=E[g],T=w,_=O;E.tupleStream&&(T=w["@"],_=xe(O,w));var B=await G(y,T,_);x(B)&&(B=[B]),I(B)?B.forEach(function(we){var Ae=Math.floor(we);Ae<0&&(Ae=E.length+Ae),Ae===g&&d.push(w)}):a.boolean(B)&&d.push(w)}return d}async function pe(y,E,O){var d,g=await G(y.lhs,E,O),w=y.value,T=async()=>await G(y.rhs,E,O);if(w==="and"||w==="or")try{return await ct(g,T,w)}catch(B){throw B.position=y.position,B.token=w,B}var _=await T();try{switch(w){case"+":case"-":case"*":case"/":case"%":d=S(g,_,w);break;case"=":case"!=":d=$(g,_,w);break;case"<":case"<=":case">":case">=":d=ve(g,_,w);break;case"&":d=N(g,_);break;case"..":d=J(g,_);break;case"in":d=Pe(g,_);break}}catch(B){throw B.position=y.position,B.token=w,B}return d}async function Ce(y,E,O){var d;switch(y.value){case"-":if(d=await G(y.expression,E,O),typeof d>"u")d=void 0;else if(x(d))d=-d;else throw{code:"D1002",stack:new Error().stack,position:y.position,token:y.value,value:d};break;case"[":d=[];let T=await Promise.all(y.expressions.map(async(_,B)=>(O.isParallelCall=B>0,[_,await G(_,E,O)])));for(let _ of T){var[g,w]=_;typeof w<"u"&&(g.value==="["?d.push(w):d=a.append(d,w))}y.consarray&&Object.defineProperty(d,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":d=await W(y,E,O);break}return d}function se(y,E,O){return a.lookup(E,y.value)}function Q(y){return y.value}function ie(y,E){var O=R();return Array.isArray(E)&&E.outerWrapper&&E.length>0&&(E=E[0]),E!==null&&typeof E=="object"&&Object.keys(E).forEach(function(d){var g=E[d];Array.isArray(g)?(g=X(g),O=a.append(O,g)):O.push(g)}),O}function X(y,E){return typeof E>"u"&&(E=[]),Array.isArray(y)?y.forEach(function(O){X(O,E)}):E.push(y),E}function $e(y,E){var O,d=R();return typeof E<"u"&&(Be(E,d),d.length===1?O=d[0]:O=d),O}function Be(y,E){Array.isArray(y)||E.push(y),Array.isArray(y)?y.forEach(function(O){Be(O,E)}):y!==null&&typeof y=="object"&&Object.keys(y).forEach(function(O){Be(y[O],E)})}function S(y,E,O){var d;if(typeof y<"u"&&!x(y))throw{code:"T2001",stack:new Error().stack,value:y};if(typeof E<"u"&&!x(E))throw{code:"T2002",stack:new Error().stack,value:E};if(typeof y>"u"||typeof E>"u")return d;switch(O){case"+":d=y+E;break;case"-":d=y-E;break;case"*":d=y*E;break;case"/":d=y/E;break;case"%":d=y%E;break}return d}function $(y,E,O){var d,g=typeof y,w=typeof E;if(g==="undefined"||w==="undefined")return!1;switch(O){case"=":d=F(y,E);break;case"!=":d=!F(y,E);break}return d}function ve(y,E,O){var d,g=typeof y,w=typeof E,T=g==="undefined"||g==="string"||g==="number",_=w==="undefined"||w==="string"||w==="number";if(!T||!_)throw{code:"T2010",stack:new Error().stack,value:g==="string"||g==="number"?E:y};if(!(g==="undefined"||w==="undefined")){if(g!==w)throw{code:"T2009",stack:new Error().stack,value:y,value2:E};switch(O){case"<":d=y<E;break;case"<=":d=y<=E;break;case">":d=y>E;break;case">=":d=y>=E;break}return d}}function Pe(y,E){var O=!1;if(typeof y>"u"||typeof E>"u")return!1;Array.isArray(E)||(E=[E]);for(var d=0;d<E.length;d++)if(E[d]===y){O=!0;break}return O}async function ct(y,E,O){var d,g=He(y);switch(O){case"and":d=g&&He(await E());break;case"or":d=g||He(await E());break}return d}function He(y){var E=a.boolean(y);return typeof E>"u"?!1:E}function N(y,E){var O,d="",g="";return typeof y<"u"&&(d=a.string(y)),typeof E<"u"&&(g=a.string(E)),O=d.concat(g),O}async function W(y,E,O){var d={},g={},w=!!(E&&E.tupleStream);Array.isArray(E)||(E=R(E)),E.length===0&&E.push(void 0);for(var T=0;T<E.length;T++)for(var _=E[T],B=w?xe(O,_):O,ne=0;ne<y.lhs.length;ne++){var we=y.lhs[ne],Ae=await G(we[0],w?_["@"]:_,B);if(typeof Ae!="string"&&Ae!==void 0)throw{code:"T1003",stack:new Error().stack,position:y.position,value:Ae};if(Ae!==void 0){var tt={data:_,exprIndex:ne};if(g.hasOwnProperty(Ae)){if(g[Ae].exprIndex!==ne)throw{code:"D1009",stack:new Error().stack,position:y.position,value:Ae};g[Ae].data=a.append(g[Ae].data,_)}else g[Ae]=tt}}let Re=await Promise.all(Object.keys(g).map(async(Ke,St)=>{let Fe=g[Ke];var bt=Fe.data,un=O;if(w){var ut=q(Fe.data);bt=ut["@"],delete ut["@"],un=xe(O,ut)}return O.isParallelCall=St>0,[Ke,await G(y.lhs[Fe.exprIndex][1],bt,un)]}));for(let Ke of Re){var[Ae,nt]=await Ke;typeof nt<"u"&&(d[Ae]=nt)}return d}function q(y){if(!Array.isArray(y))return y;var E={};Object.assign(E,y[0]);for(var O=1;O<y.length;O++)for(const d in y[O])E[d]=a.append(E[d],y[O][d]);return E}function J(y,E){var O;if(typeof y<"u"&&!Number.isInteger(y))throw{code:"T2003",stack:new Error().stack,value:y};if(typeof E<"u"&&!Number.isInteger(E))throw{code:"T2004",stack:new Error().stack,value:E};if(typeof y>"u"||typeof E>"u"||y>E)return O;var d=E-y+1;if(d>1e7)throw{code:"D2014",stack:new Error().stack,value:d};O=new Array(d);for(var g=y,w=0;g<=E;g++,w++)O[w]=g;return O.sequence=!0,O}async function de(y,E,O){var d=await G(y.rhs,E,O);return O.bind(y.lhs.value,d),d}async function ae(y,E,O){var d,g=await G(y.condition,E,O);return a.boolean(g)?d=await G(y.then,E,O):typeof y.else<"u"&&(d=await G(y.else,E,O)),d}async function Y(y,E,O){for(var d,g=bn(O),w=0;w<y.expressions.length;w++)d=await G(y.expressions[w],E,g);return d}function ce(y){var E=new Je.RegexEngine(y.value),O=function(d,g){var w;E.lastIndex=g||0;var T=E.exec(d);if(T!==null){if(w={match:T[0],start:T.index,end:T.index+T[0].length,groups:[]},T.length>1)for(var _=1;_<T.length;_++)w.groups.push(T[_]);w.next=function(){if(!(E.lastIndex>=d.length)){var B=O(d,E.lastIndex);if(B&&B.match==="")throw{code:"D1004",stack:new Error().stack,position:y.position,value:y.value.source};return B}}}return w};return O}function Ee(y,E,O){var d;return y.value===""?d=E&&E.outerWrapper?E[0]:E:d=O.lookup(y.value),d}async function je(y,E,O){var d,g=E,w=!!E.tupleStream,T=async function(B,ne){for(var we=0,Ae=0;we===0&&Ae<y.terms.length;Ae++){var tt=y.terms[Ae],Re=B,nt=O;w&&(Re=B["@"],nt=xe(O,B));var Ke=await G(tt.expression,Re,nt);Re=ne,nt=O,w&&(Re=ne["@"],nt=xe(O,ne));var St=await G(tt.expression,Re,nt),Fe=typeof Ke,bt=typeof St;if(Fe==="undefined"){we=bt==="undefined"?0:1;continue}if(bt==="undefined"){we=-1;continue}if(!(Fe==="string"||Fe==="number")||!(bt==="string"||bt==="number"))throw{code:"T2008",stack:new Error().stack,position:y.position,value:Fe==="string"||Fe==="number"?St:Ke};if(Fe!==bt)throw{code:"T2007",stack:new Error().stack,position:y.position,value:Ke,value2:St};Ke!==St&&(Ke<St?we=-1:we=1,tt.descending===!0&&(we=-we))}return we===1},_={environment:O,input:E};return d=await a.sort.apply(_,[g,T]),d}function Ge(y,E,O){var d=async function(g){if(!(typeof g>"u")){var w=O.lookup("clone");if(!V(w))throw{code:"T2013",stack:new Error().stack,position:y.position};var T=await ke(w,[g],null,O),_=await G(y.pattern,T,O);if(typeof _<"u"){Array.isArray(_)||(_=[_]);for(var B=0;B<_.length;B++){var ne=_[B];if(ne&&(ne.isPrototypeOf(T)||ne instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:y.position};var we=await G(y.update,ne,O),Ae=typeof we;if(Ae!=="undefined"){if(Ae!=="object"||we===null||Array.isArray(we))throw{code:"T2011",stack:new Error().stack,position:y.update.position,value:we};for(var tt in we)ne[tt]=we[tt]}if(typeof y.delete<"u"){var Re=await G(y.delete,ne,O);if(typeof Re<"u"){var nt=Re;if(Array.isArray(Re)||(Re=[Re]),!v(Re))throw{code:"T2012",stack:new Error().stack,position:y.delete.position,value:nt};for(var Ke=0;Ke<Re.length;Ke++)typeof ne=="object"&&ne!==null&&delete ne[Re[Ke]]}}}}return T}};return me(d,"<(oa):o>")}var Se=f("function($f, $g) { function($x){ $g($f($x)) } }");async function Te(y,E,O){var d,g=await G(y.lhs,E,O);if(y.rhs.type==="function")d=await Ue(y.rhs,E,O,{context:g});else{var w=await G(y.rhs,E,O);if(!V(w))throw{code:"T2006",stack:new Error().stack,position:y.position,value:w};if(V(g)){var T=await G(Se,null,O);d=await ke(T,[g,w],null,O)}else d=await ke(w,[g],null,O)}return d}async function Ue(y,E,O,d){var g,w=await G(y.procedure,E,O);if(typeof w>"u"&&y.procedure.type==="path"&&O.lookup(y.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:y.position,token:y.procedure.steps[0].value};var T=[];typeof d<"u"&&T.push(d.context);for(var _=0;_<y.arguments.length;_++){const ne=await G(y.arguments[_],E,O);if(V(ne)){const we=async function(...Ae){return await ke(ne,Ae,null,O)};we.arity=H(ne),T.push(we)}else T.push(ne)}var B=y.procedure.type==="path"?y.procedure.steps[0].value:y.procedure.value;try{typeof w=="object"&&(w.token=B,w.position=y.position),g=await ke(w,T,E,O)}catch(ne){throw ne.position||(ne.position=y.position),ne.token||(ne.token=B),ne}return g}async function ke(y,E,O,d){var g;for(g=await Ot(y,E,O,d);K(g)&&g.thunk===!0;){var w=await G(g.body.procedure,g.input,g.environment);g.body.procedure.type==="variable"&&(w.token=g.body.procedure.value),w.position=g.body.procedure.position;for(var T=[],_=0;_<g.body.arguments.length;_++)T.push(await G(g.body.arguments[_],g.input,g.environment));g=await Ot(w,T,O,d)}return g}async function Ot(y,E,O,d){var g;try{var w=E;if(y&&(w=Tt(y.signature,E,O)),K(y))g=await jt(y,w);else if(y&&y._jsonata_function===!0){var T={environment:d,input:O};g=y.implementation.apply(T,w),M(g)&&(g=g.next().value),z(g)&&(g=await g)}else if(typeof y=="function")g=y.apply(O,w),z(g)&&(g=await g);else throw{code:"T1006",stack:new Error().stack}}catch(_){throw y&&(typeof _.token>"u"&&typeof y.token<"u"&&(_.token=y.token),_.position=y.position||_.position),_}return g}function gn(y,E,O){var d={_jsonata_lambda:!0,input:E,environment:O,arguments:y.arguments,signature:y.signature,body:y.body};return y.thunk===!0&&(d.thunk=!0),d.apply=async function(g,w){return await ke(d,w,E,g?g.environment:O)},d}async function Ut(y,E,O){for(var d,g=[],w=0;w<y.arguments.length;w++){var T=y.arguments[w];T.type==="operator"&&T.value==="?"?g.push(T):g.push(await G(T,E,O))}var _=await G(y.procedure,E,O);if(typeof _>"u"&&y.procedure.type==="path"&&O.lookup(y.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:y.position,token:y.procedure.steps[0].value};if(K(_))d=Rn(_,g);else if(_&&_._jsonata_function===!0)d=or(_.implementation,g);else if(typeof _=="function")d=or(_,g);else throw{code:"T1008",stack:new Error().stack,position:y.position,token:y.procedure.type==="path"?y.procedure.steps[0].value:y.procedure.value};return d}function Tt(y,E,O){if(typeof y>"u")return E;var d=y.validate(E,O);return d}async function jt(y,E){var O,d=bn(y.environment);return y.arguments.forEach(function(g,w){d.bind(g.value,E[w])}),typeof y.body=="function"?O=await Mr(y.body,d):O=await G(y.body,y.input,d),O}function Rn(y,E){var O=bn(y.environment),d=[];y.arguments.forEach(function(w,T){var _=E[T];_&&_.type==="operator"&&_.value==="?"?d.push(w):O.bind(w.value,_)});var g={_jsonata_lambda:!0,input:y.input,environment:O,arguments:d,body:y.body};return g}function or(y,E){var O=Un(y);O=O.map(function(T){return"$"+T.trim()});var d="function("+O.join(", ")+"){ _ }",g=f(d);g.body=y;var w=Rn(g,E);return w}async function Mr(y,E){var O=Un(y),d=O.map(function(T){return E.lookup(T.trim())}),g={environment:E},w=y.apply(g,d);return z(w)&&(w=await w),w}function Un(y){var E=y.toString(),O=/\(([^)]*)\)/.exec(E)[1],d=O.split(",");return d}function me(y,E){var O={_jsonata_function:!0,implementation:y};return typeof E<"u"&&(O.signature=b(E)),O}async function Nr(y,E){if(!(typeof y>"u")){var O=this.input;typeof E<"u"&&(O=E,Array.isArray(O)&&!P(O)&&(O=R(O),O.outerWrapper=!0));try{var d=f(y,!1)}catch(w){throw zn(w),{stack:new Error().stack,code:"D3120",value:w.message,error:w}}try{var g=await G(d,O,this.environment)}catch(w){throw zn(w),{stack:new Error().stack,code:"D3121",value:w.message,error:w}}return g}}function Ir(y){if(!(typeof y>"u"))return JSON.parse(a.string(y))}function bn(y){var E={};const O={bind:function(g,w){E[g]=w},lookup:function(g){var w;return E.hasOwnProperty(g)?w=E[g]:y&&(w=y.lookup(g)),w},timestamp:y?y.timestamp:null,async:y?y.async:!1,isParallelCall:y?y.isParallelCall:!1,global:y?y.global:{ancestry:[null]}};if(y){var d=y.lookup(Symbol.for("jsonata.__createFrame_push"));d&&d(y,O)}return O}D.bind("sum",me(a.sum,"<a<n>:n>")),D.bind("count",me(a.count,"<a:n>")),D.bind("max",me(a.max,"<a<n>:n>")),D.bind("min",me(a.min,"<a<n>:n>")),D.bind("average",me(a.average,"<a<n>:n>")),D.bind("string",me(a.string,"<x-b?:s>")),D.bind("substring",me(a.substring,"<s-nn?:s>")),D.bind("substringBefore",me(a.substringBefore,"<s-s:s>")),D.bind("substringAfter",me(a.substringAfter,"<s-s:s>")),D.bind("lowercase",me(a.lowercase,"<s-:s>")),D.bind("uppercase",me(a.uppercase,"<s-:s>")),D.bind("length",me(a.length,"<s-:n>")),D.bind("trim",me(a.trim,"<s-:s>")),D.bind("pad",me(a.pad,"<s-ns?:s>")),D.bind("match",me(a.match,"<s-f<s:o>n?:a<o>>")),D.bind("contains",me(a.contains,"<s-(sf):b>")),D.bind("replace",me(a.replace,"<s-(sf)(sf)n?:s>")),D.bind("split",me(a.split,"<s-(sf)n?:a<s>>")),D.bind("join",me(a.join,"<a<s>s?:s>")),D.bind("formatNumber",me(a.formatNumber,"<n-so?:s>")),D.bind("formatBase",me(a.formatBase,"<n-n?:s>")),D.bind("formatInteger",me(o.formatInteger,"<n-s:s>")),D.bind("parseInteger",me(o.parseInteger,"<s-s:n>")),D.bind("number",me(a.number,"<(nsb)-:n>")),D.bind("floor",me(a.floor,"<n-:n>")),D.bind("ceil",me(a.ceil,"<n-:n>")),D.bind("round",me(a.round,"<n-n?:n>")),D.bind("abs",me(a.abs,"<n-:n>")),D.bind("sqrt",me(a.sqrt,"<n-:n>")),D.bind("power",me(a.power,"<n-n:n>")),D.bind("random",me(a.random,"<:n>")),D.bind("boolean",me(a.boolean,"<x-:b>")),D.bind("not",me(a.not,"<x-:b>")),D.bind("map",me(a.map,"<af>")),D.bind("zip",me(a.zip,"<a+>")),D.bind("filter",me(a.filter,"<af>")),D.bind("single",me(a.single,"<af?>")),D.bind("reduce",me(a.foldLeft,"<afj?:j>")),D.bind("sift",me(a.sift,"<o-f?:o>")),D.bind("keys",me(a.keys,"<x-:a<s>>")),D.bind("lookup",me(a.lookup,"<x-s:x>")),D.bind("append",me(a.append,"<xx:a>")),D.bind("exists",me(a.exists,"<x:b>")),D.bind("spread",me(a.spread,"<x-:a<o>>")),D.bind("merge",me(a.merge,"<a<o>:o>")),D.bind("reverse",me(a.reverse,"<a:a>")),D.bind("each",me(a.each,"<o-f:a>")),D.bind("error",me(a.error,"<s?:x>")),D.bind("assert",me(a.assert,"<bs?:x>")),D.bind("type",me(a.type,"<x:s>")),D.bind("sort",me(a.sort,"<af?:a>")),D.bind("shuffle",me(a.shuffle,"<a:a>")),D.bind("distinct",me(a.distinct,"<x:x>")),D.bind("base64encode",me(a.base64encode,"<s-:s>")),D.bind("base64decode",me(a.base64decode,"<s-:s>")),D.bind("encodeUrlComponent",me(a.encodeUrlComponent,"<s-:s>")),D.bind("encodeUrl",me(a.encodeUrl,"<s-:s>")),D.bind("decodeUrlComponent",me(a.decodeUrlComponent,"<s-:s>")),D.bind("decodeUrl",me(a.decodeUrl,"<s-:s>")),D.bind("eval",me(Nr,"<sx?:x>")),D.bind("toMillis",me(o.toMillis,"<s-s?:n>")),D.bind("fromMillis",me(o.fromMillis,"<n-s?s?:s>")),D.bind("clone",me(Ir,"<(oa)-:o>"));var kt={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function zn(y){var E=kt[y.code];if(typeof E<"u"){var O=E.replace(/\{\{\{([^}]+)}}}/g,function(){return y[arguments[1]]});O=O.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(y[arguments[1]])}),y.message=O}}function Je(y,E){var O,d;try{O=f(y,E&&E.recover),d=O.errors,delete O.errors}catch(T){throw zn(T),T}var g=bn(D),w=new Date;return g.bind("now",me(function(T,_){return o.fromMillis(w.getTime(),T,_)},"<s?s?:s>")),g.bind("millis",me(function(){return w.getTime()},"<:n>")),E&&E.RegexEngine?Je.RegexEngine=E.RegexEngine:Je.RegexEngine=RegExp,{evaluate:async function(T,_,B){if(typeof d<"u"){var ne={code:"S0500",position:0};throw zn(ne),ne}if(typeof _<"u"){var we;we=bn(g);for(var Ae in _)we.bind(Ae,_[Ae])}else we=g;we.bind("$",T),w=new Date,we.timestamp=w,Array.isArray(T)&&!P(T)&&(T=R(T),T.outerWrapper=!0);var tt;try{return tt=await G(O,T,we),typeof B=="function"&&B(null,tt),tt}catch(Re){throw zn(Re),Re}},assign:function(T,_){g.bind(T,_)},registerFunction:function(T,_,B){var ne=me(_,B);g.bind(T,ne)},ast:function(){return O},errors:function(){return d}}}return Je.parser=f,Je})();r.exports=C},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(n,r,i){var o=n("./signature");const a=(()=>{var c={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,"?:":40,"??":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},b=function(x){var v=0,I=x.length,R=function(K,M){var z={type:K,value:M,position:v};return z},P=function(){for(var K=v,M=0,z,H,F=function(G){if(x.charAt(G)==="/"&&M===0){for(var Z=0;x.charAt(G-(Z+1))==="\\";)Z++;if(Z%2===0)return!0}return!1};v<I;){var D=x.charAt(v);if(F(v)){if(z=x.substring(K,v),z==="")throw{code:"S0301",stack:new Error().stack,position:v};for(v++,D=x.charAt(v),K=v;D==="i"||D==="m";)v++,D=x.charAt(v);return H=x.substring(K,v)+"g",new RegExp(z,H)}(D==="("||D==="["||D==="{")&&x.charAt(v-1)!=="\\"&&M++,(D===")"||D==="]"||D==="}")&&x.charAt(v-1)!=="\\"&&M--,v++}throw{code:"S0302",stack:new Error().stack,position:v}},V=function(K){if(v>=I)return null;for(var M=x.charAt(v);v<I&&` 	
\r\v`.indexOf(M)>-1;)v++,M=x.charAt(v);if(M==="/"&&x.charAt(v+1)==="*"){var z=v;for(v+=2,M=x.charAt(v);!(M==="*"&&x.charAt(v+1)==="/");)if(M=x.charAt(++v),v>=I)throw{code:"S0106",stack:new Error().stack,position:z};return v+=2,M=x.charAt(v),V(K)}if(K!==!0&&M==="/")return v++,R("regex",P());if(M==="."&&x.charAt(v+1)===".")return v+=2,R("operator","..");if(M===":"&&x.charAt(v+1)==="=")return v+=2,R("operator",":=");if(M==="!"&&x.charAt(v+1)==="=")return v+=2,R("operator","!=");if(M===">"&&x.charAt(v+1)==="=")return v+=2,R("operator",">=");if(M==="<"&&x.charAt(v+1)==="=")return v+=2,R("operator","<=");if(M==="*"&&x.charAt(v+1)==="*")return v+=2,R("operator","**");if(M==="~"&&x.charAt(v+1)===">")return v+=2,R("operator","~>");if(M==="?"&&x.charAt(v+1)===":")return v+=2,R("operator","?:");if(M==="?"&&x.charAt(v+1)==="?")return v+=2,R("operator","??");if(Object.prototype.hasOwnProperty.call(c,M))return v++,R("operator",M);if(M==='"'||M==="'"){var H=M;v++;for(var F="";v<I;){if(M=x.charAt(v),M==="\\")if(v++,M=x.charAt(v),Object.prototype.hasOwnProperty.call(f,M))F+=f[M];else if(M==="u"){var D=x.substr(v+1,4);if(/^[0-9a-fA-F]+$/.test(D)){var G=parseInt(D,16);F+=String.fromCharCode(G),v+=4}else throw{code:"S0104",stack:new Error().stack,position:v}}else throw{code:"S0103",stack:new Error().stack,position:v,token:M};else{if(M===H)return v++,R("string",F);F+=M}v++}throw{code:"S0101",stack:new Error().stack,position:v}}var Z=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,xe=Z.exec(x.substring(v));if(xe!==null){var Oe=parseFloat(xe[0]);if(!isNaN(Oe)&&isFinite(Oe))return v+=xe[0].length,R("number",Oe);throw{code:"S0102",stack:new Error().stack,position:v,token:xe[0]}}var ue;if(M==="`"){v++;var U=x.indexOf("`",v);if(U!==-1)return ue=x.substring(v,U),v=U+1,R("name",ue);throw v=I,{code:"S0105",stack:new Error().stack,position:v}}for(var oe=v,pe;;)if(pe=x.charAt(oe),oe===I||` 	
\r\v`.indexOf(pe)>-1||Object.prototype.hasOwnProperty.call(c,pe)){if(x.charAt(v)==="$")return ue=x.substring(v+1,oe),v=oe,R("variable",ue);switch(ue=x.substring(v,oe),v=oe,ue){case"or":case"in":case"and":return R("operator",ue);case"true":return R("value",!0);case"false":return R("value",!1);case"null":return R("value",null);default:return v===I&&ue===""?null:R("name",ue)}}else oe++};return V},C=function(x,v){var I,R,P={},V=[],K=function(){var S=[];I.id!=="(end)"&&S.push({type:I.type,value:I.value,position:I.position});for(var $=R();$!==null;)S.push($),$=R();return S},M={nud:function(){var S={code:"S0211",token:this.value,position:this.position};if(v)return S.remaining=K(),S.type="error",V.push(S),S;throw S.stack=new Error().stack,S}},z=function(S,$){var ve=P[S];return $=$||0,ve?$>=ve.lbp&&(ve.lbp=$):(ve=Object.create(M),ve.id=ve.value=S,ve.lbp=$,P[S]=ve),ve},H=function(S){if(v){S.remaining=K(),V.push(S);var $=P["(error)"];return I=Object.create($),I.error=S,I.type="(error)",I}else throw S.stack=new Error().stack,S},F=function(S,$){if(S&&I.id!==S){var ve;I.id==="(end)"?ve="S0203":ve="S0202";var Pe={code:ve,position:I.position,token:I.value,value:S};return H(Pe)}var ct=R($);if(ct===null)return I=P["(end)"],I.position=x.length,I;var He=ct.value,N=ct.type,W;switch(N){case"name":case"variable":W=P["(name)"];break;case"operator":if(W=P[He],!W)return H({code:"S0204",stack:new Error().stack,position:ct.position,token:He});break;case"string":case"number":case"value":W=P["(literal)"];break;case"regex":N="regex",W=P["(regex)"];break;default:return H({code:"S0205",stack:new Error().stack,position:ct.position,token:He})}return I=Object.create(W),I.value=He,I.type=N,I.position=ct.position,I},D=function(S){var $,ve=I;for(F(null,!0),$=ve.nud();S<I.lbp;)ve=I,F(),$=ve.led($);return $},G=function(S){var $=z(S,0);$.nud=function(){return this}},Z=function(S,$,ve){var Pe=$||c[S],ct=z(S,Pe);return ct.led=ve||function(He){return this.lhs=He,this.rhs=D(Pe),this.type="binary",this},ct},xe=function(S,$,ve){var Pe=z(S,$);return Pe.led=ve,Pe},Oe=function(S,$){var ve=z(S);return ve.nud=$||function(){return this.expression=D(70),this.type="unary",this},ve};G("(end)"),G("(name)"),G("(literal)"),G("(regex)"),z(":"),z(";"),z(","),z(")"),z("]"),z("}"),z(".."),Z("."),Z("+"),Z("-"),Z("*"),Z("/"),Z("%"),Z("="),Z("<"),Z(">"),Z("!="),Z("<="),Z(">="),Z("&"),Z("and"),Z("or"),Z("in"),G("and"),G("or"),G("in"),Oe("-"),Z("~>"),Z("??",c["??"],function(S){return this.type="condition",this.condition={type:"function",value:"(",procedure:{type:"variable",value:"exists"},arguments:[S]},this.then=S,this.else=D(0),this}),xe("(error)",10,function(S){return this.lhs=S,this.error=I.error,this.remaining=K(),this.type="error",this}),Oe("*",function(){return this.type="wildcard",this}),Oe("**",function(){return this.type="descendant",this}),Oe("%",function(){return this.type="parent",this}),Z("(",c["("],function(S){if(this.procedure=S,this.type="function",this.arguments=[],I.id!==")")for(;I.type==="operator"&&I.id==="?"?(this.type="partial",this.arguments.push(I),F("?")):this.arguments.push(D(0)),I.id===",";)F(",");if(F(")",!0),S.type==="name"&&(S.value==="function"||S.value==="λ")){if(this.arguments.forEach(function(He,N){if(He.type!=="variable")return H({code:"S0208",stack:new Error().stack,position:He.position,token:He.value,value:N+1})}),this.type="lambda",I.id==="<"){for(var $=I.position,ve=1,Pe="<";ve>0&&I.id!=="{"&&I.id!=="(end)";){var ct=F();ct.id===">"?ve--:ct.id==="<"&&ve++,Pe+=ct.value}F(">");try{this.signature=o(Pe)}catch(He){return He.position=$+He.offset,H(He)}}F("{"),this.body=D(0),F("}")}return this}),Oe("(",function(){for(var S=[];I.id!==")"&&(S.push(D(0)),I.id===";");)F(";");return F(")",!0),this.type="block",this.expressions=S,this}),Oe("[",function(){var S=[];if(I.id!=="]")for(;;){var $=D(0);if(I.id===".."){var ve={type:"binary",value:"..",position:I.position,lhs:$};F(".."),ve.rhs=D(0),$=ve}if(S.push($),I.id!==",")break;F(",")}return F("]",!0),this.expressions=S,this.type="unary",this}),Z("[",c["["],function(S){if(I.id==="]"){for(var $=S;$&&$.type==="binary"&&$.value==="[";)$=$.lhs;return $.keepArray=!0,F("]"),S}else return this.lhs=S,this.rhs=D(c["]"]),this.type="binary",F("]",!0),this}),Z("^",c["^"],function(S){F("(");for(var $=[];;){var ve={descending:!1};if(I.id==="<"?F("<"):I.id===">"&&(ve.descending=!0,F(">")),ve.expression=D(0),$.push(ve),I.id!==",")break;F(",")}return F(")"),this.lhs=S,this.rhs=$,this.type="binary",this});var ue=function(S){var $=[];if(I.id!=="}")for(;;){var ve=D(0);F(":");var Pe=D(0);if($.push([ve,Pe]),I.id!==",")break;F(",")}return F("}",!0),typeof S>"u"?(this.lhs=$,this.type="unary"):(this.lhs=S,this.rhs=$,this.type="binary"),this};Oe("{",ue),Z("{",c["{"],ue),xe(":=",c[":="],function(S){return S.type!=="variable"?H({code:"S0212",stack:new Error().stack,position:S.position,token:S.value}):(this.lhs=S,this.rhs=D(c[":="]-1),this.type="binary",this)}),Z("@",c["@"],function(S){return this.lhs=S,this.rhs=D(c["@"]),this.rhs.type!=="variable"?H({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),Z("#",c["#"],function(S){return this.lhs=S,this.rhs=D(c["#"]),this.rhs.type!=="variable"?H({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),Z("?",c["?"],function(S){return this.type="condition",this.condition=S,this.then=D(0),I.id===":"&&(F(":"),this.else=D(0)),this}),Z("?:",c["?:"],function(S){return this.type="condition",this.condition=S,this.then=S,this.else=D(0),this}),Oe("|",function(){return this.type="transform",this.pattern=D(0),F("|"),this.update=D(0),I.id===","&&(F(","),this.delete=D(0)),F("|"),this});var U=function(S){var $;if(S.type==="function"&&!S.predicate){var ve={type:"lambda",thunk:!0,arguments:[],position:S.position};ve.body=S,$=ve}else if(S.type==="condition")S.then=U(S.then),typeof S.else<"u"&&(S.else=U(S.else)),$=S;else if(S.type==="block"){var Pe=S.expressions.length;Pe>0&&(S.expressions[Pe-1]=U(S.expressions[Pe-1])),$=S}else $=S;return $},oe=0,pe=0,Ce=[],se=function(S,$){switch(S.type){case"name":case"wildcard":$.level--,$.level===0&&(typeof S.ancestor>"u"||(Ce[$.index].slot.label=S.ancestor.label),S.ancestor=$,S.tuple=!0);break;case"parent":$.level++;break;case"block":S.expressions.length>0&&(S.tuple=!0,$=se(S.expressions[S.expressions.length-1],$));break;case"path":S.tuple=!0;var ve=S.steps.length-1;for($=se(S.steps[ve--],$);$.level>0&&ve>=0;)$=se(S.steps[ve--],$);break;default:throw{code:"S0217",token:S.type,position:S.position}}return $},Q=function(S,$){if(typeof $.seekingParent<"u"||$.type==="parent"){var ve=typeof $.seekingParent<"u"?$.seekingParent:[];$.type==="parent"&&ve.push($.slot),typeof S.seekingParent>"u"?S.seekingParent=ve:Array.prototype.push.apply(S.seekingParent,ve)}},ie=function(S){var $=S.steps.length-1,ve=S.steps[$],Pe=typeof ve.seekingParent<"u"?ve.seekingParent:[];ve.type==="parent"&&Pe.push(ve.slot);for(var ct=0;ct<Pe.length;ct++){var He=Pe[ct];for($=S.steps.length-2;He.level>0;){if($<0){typeof S.seekingParent>"u"?S.seekingParent=[He]:S.seekingParent.push(He);break}for(var N=S.steps[$--];$>=0&&N.focus&&S.steps[$].focus;)N=S.steps[$--];He=se(N,He)}}},X=function(S){var $;switch(S.type){case"binary":switch(S.value){case".":var ve=X(S.lhs);ve.type==="path"?$=ve:$={type:"path",steps:[ve]},ve.type==="parent"&&($.seekingParent=[ve.slot]);var Pe=X(S.rhs);Pe.type==="function"&&Pe.procedure.type==="path"&&Pe.procedure.steps.length===1&&Pe.procedure.steps[0].type==="name"&&$.steps[$.steps.length-1].type==="function"&&($.steps[$.steps.length-1].nextFunction=Pe.procedure.steps[0].value),Pe.type==="path"?Array.prototype.push.apply($.steps,Pe.steps):(typeof Pe.predicate<"u"&&(Pe.stages=Pe.predicate,delete Pe.predicate),$.steps.push(Pe)),$.steps.filter(function(ce){if(ce.type==="number"||ce.type==="value")throw{code:"S0213",stack:new Error().stack,position:ce.position,value:ce.value};return ce.type==="string"}).forEach(function(ce){ce.type="name"}),$.steps.filter(function(ce){return ce.keepArray===!0}).length>0&&($.keepSingletonArray=!0);var ct=$.steps[0];ct.type==="unary"&&ct.value==="["&&(ct.consarray=!0);var He=$.steps[$.steps.length-1];He.type==="unary"&&He.value==="["&&(He.consarray=!0),ie($);break;case"[":$=X(S.lhs);var N=$,W="predicate";if($.type==="path"&&(N=$.steps[$.steps.length-1],W="stages"),typeof N.group<"u")throw{code:"S0209",stack:new Error().stack,position:S.position};typeof N[W]>"u"&&(N[W]=[]);var q=X(S.rhs);typeof q.seekingParent<"u"&&(q.seekingParent.forEach(ce=>{ce.level===1?se(N,ce):ce.level--}),Q(N,q)),N[W].push({type:"filter",expr:q,position:S.position});break;case"{":if($=X(S.lhs),typeof $.group<"u")throw{code:"S0210",stack:new Error().stack,position:S.position};$.group={lhs:S.rhs.map(function(ce){return[X(ce[0]),X(ce[1])]}),position:S.position};break;case"^":$=X(S.lhs),$.type!=="path"&&($={type:"path",steps:[$]});var J={type:"sort",position:S.position};J.terms=S.rhs.map(function(ce){var Ee=X(ce.expression);return Q(J,Ee),{descending:ce.descending,expression:Ee}}),$.steps.push(J),ie($);break;case":=":$={type:"bind",value:S.value,position:S.position},$.lhs=X(S.lhs),$.rhs=X(S.rhs),Q($,$.rhs);break;case"@":if($=X(S.lhs),N=$,$.type==="path"&&(N=$.steps[$.steps.length-1]),typeof N.stages<"u"||typeof N.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:S.position};if(N.type==="sort")throw{code:"S0216",stack:new Error().stack,position:S.position};S.keepArray&&(N.keepArray=!0),N.focus=S.rhs.value,N.tuple=!0;break;case"#":$=X(S.lhs),N=$,$.type==="path"?N=$.steps[$.steps.length-1]:($={type:"path",steps:[$]},typeof N.predicate<"u"&&(N.stages=N.predicate,delete N.predicate)),typeof N.stages>"u"?N.index=S.rhs.value:N.stages.push({type:"index",value:S.rhs.value,position:S.position}),N.tuple=!0;break;case"~>":$={type:"apply",value:S.value,position:S.position},$.lhs=X(S.lhs),$.rhs=X(S.rhs),$.keepArray=$.lhs.keepArray||$.rhs.keepArray;break;default:$={type:S.type,value:S.value,position:S.position},$.lhs=X(S.lhs),$.rhs=X(S.rhs),Q($,$.lhs),Q($,$.rhs)}break;case"unary":$={type:S.type,value:S.value,position:S.position},S.value==="["?$.expressions=S.expressions.map(function(ce){var Ee=X(ce);return Q($,Ee),Ee}):S.value==="{"?$.lhs=S.lhs.map(function(ce){var Ee=X(ce[0]);Q($,Ee);var je=X(ce[1]);return Q($,je),[Ee,je]}):($.expression=X(S.expression),S.value==="-"&&$.expression.type==="number"?($=$.expression,$.value=-$.value):Q($,$.expression));break;case"function":case"partial":$={type:S.type,name:S.name,value:S.value,position:S.position},$.arguments=S.arguments.map(function(ce){var Ee=X(ce);return Q($,Ee),Ee}),$.procedure=X(S.procedure);break;case"lambda":$={type:S.type,arguments:S.arguments,signature:S.signature,position:S.position};var de=X(S.body);$.body=U(de);break;case"condition":$={type:S.type,position:S.position},$.condition=X(S.condition),Q($,$.condition),$.then=X(S.then),Q($,$.then),typeof S.else<"u"&&($.else=X(S.else),Q($,$.else));break;case"transform":$={type:S.type,position:S.position},$.pattern=X(S.pattern),$.update=X(S.update),typeof S.delete<"u"&&($.delete=X(S.delete));break;case"block":$={type:S.type,position:S.position},$.expressions=S.expressions.map(function(ce){var Ee=X(ce);return Q($,Ee),(Ee.consarray||Ee.type==="path"&&Ee.steps[0].consarray)&&($.consarray=!0),Ee});break;case"name":$={type:"path",steps:[S]},S.keepArray&&($.keepSingletonArray=!0);break;case"parent":$={type:"parent",slot:{label:"!"+oe++,level:1,index:pe++}},Ce.push($);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":$=S;break;case"operator":if(S.value==="and"||S.value==="or"||S.value==="in")S.type="name",$=X(S);else if(S.value==="?")$=S;else throw{code:"S0201",stack:new Error().stack,position:S.position,token:S.value};break;case"error":$=S,S.lhs&&($=X(S.lhs));break;default:var ae="S0206";S.id==="(end)"&&(ae="S0207");var Y={code:ae,position:S.position,token:S.value};if(v)return V.push(Y),{type:"error",error:Y};throw Y.stack=new Error().stack,Y}return S.keepArray&&($.keepArray=!0),$};R=b(x),F();var $e=D(0);if(I.id!=="(end)"){var Be={code:"S0201",position:I.position,token:I.value};H(Be)}if($e=X($e),$e.type==="parent"||typeof $e.seekingParent<"u")throw{code:"S0217",token:$e.type,position:$e.position};return V.length>0&&($e.errors=V),$e};return C})();r.exports=a},{"./signature":5}],5:[function(n,r,i){var o=n("./utils");const a=(()=>{var c={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function f(b){for(var C=1,x=[],v={},I=v;C<b.length;){var R=b.charAt(C);if(R===":")break;var P=function(){x.push(v),I=v,v={}},V=function(Z,xe,Oe,ue){for(var U=1,oe=xe;oe<Z.length;)if(oe++,R=Z.charAt(oe),R===ue){if(U--,U===0)break}else R===Oe&&U++;return oe};switch(R){case"s":case"n":case"b":case"l":case"o":v.regex="["+R+"m]",v.type=R,P();break;case"a":v.regex="[asnblfom]",v.type=R,v.array=!0,P();break;case"f":v.regex="f",v.type=R,P();break;case"j":v.regex="[asnblom]",v.type=R,P();break;case"x":v.regex="[asnblfom]",v.type=R,P();break;case"-":I.context=!0,I.contextRegex=new RegExp(I.regex),I.regex+="?";break;case"?":case"+":I.regex+=R;break;case"(":var K=V(b,C,"(",")"),M=b.substring(C+1,K);if(M.indexOf("<")===-1)v.regex="["+M+"m]";else throw{code:"S0402",stack:new Error().stack,value:M,offset:C};v.type="("+M+")",C=K,P();break;case"<":if(I.type==="a"||I.type==="f"){var z=V(b,C,"<",">");I.subtype=b.substring(C+1,z),C=z}else throw{code:"S0401",stack:new Error().stack,value:I.type,offset:C};break}C++}var H="^"+x.map(function(Z){return"("+Z.regex+")"}).join("")+"$",F=new RegExp(H),D=function(Z){var xe;if(o.isFunction(Z))xe="f";else{var Oe=typeof Z;switch(Oe){case"string":xe="s";break;case"number":xe="n";break;case"boolean":xe="b";break;case"object":Z===null?xe="l":Array.isArray(Z)?xe="a":xe="o";break;case"undefined":default:xe="m"}}return xe},G=function(Z,xe){for(var Oe="^",ue=0,U=0;U<x.length;U++){Oe+=x[U].regex;var oe=xe.match(Oe);if(oe===null)throw{code:"T0410",stack:new Error().stack,value:Z[ue],index:ue+1};ue=oe[0].length}throw{code:"T0410",stack:new Error().stack,value:Z[ue],index:ue+1}};return{definition:b,validate:function(Z,xe){var Oe="";Z.forEach(function(pe){Oe+=D(pe)});var ue=F.exec(Oe);if(ue){var U=[],oe=0;return x.forEach(function(pe,Ce){var se=Z[oe],Q=ue[Ce+1];if(Q==="")if(pe.context&&pe.contextRegex){var ie=D(xe);if(pe.contextRegex.test(ie))U.push(xe);else throw{code:"T0411",stack:new Error().stack,value:xe,index:oe+1}}else U.push(se),oe++;else Q.split("").forEach(function(X){if(pe.type==="a"){if(X==="m")se=void 0;else{se=Z[oe];var $e=!0;if(typeof pe.subtype<"u"){if(X!=="a"&&Q!==pe.subtype)$e=!1;else if(X==="a"&&se.length>0){var Be=D(se[0]);if(Be!==pe.subtype.charAt(0))$e=!1;else{var S=se.filter(function($){return D($)!==Be});$e=S.length===0}}}if(!$e)throw{code:"T0412",stack:new Error().stack,value:se,index:oe+1,type:c[pe.subtype]};X!=="a"&&(se=[se])}U.push(se),oe++}else U.push(se),oe++})}),U}G(Z,Oe)}}}return f})();r.exports=a},{"./utils":6}],6:[function(n,r,i){const o=(()=>{function a(z){var H=!1;if(typeof z=="number"&&(H=!isNaN(z),H&&!isFinite(z)))throw{code:"D1001",value:z,stack:new Error().stack};return H}function c(z){var H=!1;return Array.isArray(z)&&(H=z.filter(function(F){return typeof F!="string"}).length===0),H}function f(z){var H=!1;return Array.isArray(z)&&(H=z.filter(function(F){return!a(F)}).length===0),H}function b(){var z=[];return z.sequence=!0,arguments.length===1&&z.push(arguments[0]),z}function C(z){return z.sequence===!0&&Array.isArray(z)}function x(z){return z&&(z._jsonata_function===!0||z._jsonata_lambda===!0)||typeof z=="function"}function v(z){var H=typeof z.arity=="number"?z.arity:typeof z.implementation=="function"?z.implementation.length:typeof z.length=="number"?z.length:z.arguments.length;return H}function I(z){return z&&z._jsonata_lambda===!0}var R=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function P(z){return typeof z=="object"&&z!==null&&R in z&&"next"in z&&typeof z.next=="function"}function V(z,H){if(z===H)return!0;if(typeof z=="object"&&typeof H=="object"&&z!==null&&H!==null){if(Array.isArray(z)&&Array.isArray(H)){if(z.length!==H.length)return!1;for(var F=0;F<z.length;F++)if(!V(z[F],H[F]))return!1;return!0}var D=Object.getOwnPropertyNames(z),G=Object.getOwnPropertyNames(H);if(D.length!==G.length)return!1;for(D=D.sort(),G=G.sort(),F=0;F<D.length;F++)if(D[F]!==G[F])return!1;for(F=0;F<D.length;F++){var Z=D[F];if(!V(z[Z],H[Z]))return!1}return!0}return!1}function K(z){return typeof z=="object"&&z!==null&&"then"in z&&typeof z.then=="function"}function M(z){var H=[];for(let F of z)H.push(F);return H}return{isNumeric:a,isArrayOfStrings:c,isArrayOfNumbers:f,createSequence:b,isSequence:C,isFunction:x,isLambda:I,isIterable:P,getFunctionArity:v,isDeepEqual:V,stringToArray:M,isPromise:K}})();r.exports=o},{}]},{},[3])(3)})})(xs)),xs.exports}var S0=C0();const Ju=Gs(S0);var sr={exports:{}};const co=yd(wd),E0="17.2.3",A0={version:E0};var Tc;function $0(){if(Tc)return sr.exports;Tc=1;var e={};const t=co,n=co,r=co,i=co,a=A0.version,c=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function f(){return c[Math.floor(Math.random()*c.length)]}function b(U){return typeof U=="string"?!["false","0","no","off",""].includes(U.toLowerCase()):!!U}function C(){return process.stdout.isTTY}function x(U){return C()?`\x1B[2m${U}\x1B[0m`:U}const v=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function I(U){const oe={};let pe=U.toString();pe=pe.replace(/\r\n?/mg,`
`);let Ce;for(;(Ce=v.exec(pe))!=null;){const se=Ce[1];let Q=Ce[2]||"";Q=Q.trim();const ie=Q[0];Q=Q.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),ie==='"'&&(Q=Q.replace(/\\n/g,`
`),Q=Q.replace(/\\r/g,"\r")),oe[se]=Q}return oe}function R(U){U=U||{};const oe=H(U);U.path=oe;const pe=ue.configDotenv(U);if(!pe.parsed){const ie=new Error(`MISSING_DATA: Cannot parse ${oe} for an unknown reason`);throw ie.code="MISSING_DATA",ie}const Ce=M(U).split(","),se=Ce.length;let Q;for(let ie=0;ie<se;ie++)try{const X=Ce[ie].trim(),$e=z(pe,X);Q=ue.decrypt($e.ciphertext,$e.key);break}catch(X){if(ie+1>=se)throw X}return ue.parse(Q)}function P(U){console.error(`[dotenv@${a}][WARN] ${U}`)}function V(U){console.log(`[dotenv@${a}][DEBUG] ${U}`)}function K(U){console.log(`[dotenv@${a}] ${U}`)}function M(U){return U&&U.DOTENV_KEY&&U.DOTENV_KEY.length>0?U.DOTENV_KEY:e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:""}function z(U,oe){let pe;try{pe=new URL(oe)}catch(X){if(X.code==="ERR_INVALID_URL"){const $e=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw $e.code="INVALID_DOTENV_KEY",$e}throw X}const Ce=pe.password;if(!Ce){const X=new Error("INVALID_DOTENV_KEY: Missing key part");throw X.code="INVALID_DOTENV_KEY",X}const se=pe.searchParams.get("environment");if(!se){const X=new Error("INVALID_DOTENV_KEY: Missing environment part");throw X.code="INVALID_DOTENV_KEY",X}const Q=`DOTENV_VAULT_${se.toUpperCase()}`,ie=U.parsed[Q];if(!ie){const X=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${Q} in your .env.vault file.`);throw X.code="NOT_FOUND_DOTENV_ENVIRONMENT",X}return{ciphertext:ie,key:Ce}}function H(U){let oe=null;if(U&&U.path&&U.path.length>0)if(Array.isArray(U.path))for(const pe of U.path)t.existsSync(pe)&&(oe=pe.endsWith(".vault")?pe:`${pe}.vault`);else oe=U.path.endsWith(".vault")?U.path:`${U.path}.vault`;else oe=n.resolve(process.cwd(),".env.vault");return t.existsSync(oe)?oe:null}function F(U){return U[0]==="~"?n.join(r.homedir(),U.slice(1)):U}function D(U){const oe=b(e.DOTENV_CONFIG_DEBUG||U&&U.debug),pe=b(e.DOTENV_CONFIG_QUIET||U&&U.quiet);(oe||!pe)&&K("Loading env from encrypted .env.vault");const Ce=ue._parseVault(U);let se=e;return U&&U.processEnv!=null&&(se=U.processEnv),ue.populate(se,Ce,U),{parsed:Ce}}function G(U){const oe=n.resolve(process.cwd(),".env");let pe="utf8",Ce=e;U&&U.processEnv!=null&&(Ce=U.processEnv);let se=b(Ce.DOTENV_CONFIG_DEBUG||U&&U.debug),Q=b(Ce.DOTENV_CONFIG_QUIET||U&&U.quiet);U&&U.encoding?pe=U.encoding:se&&V("No encoding is specified. UTF-8 is used by default");let ie=[oe];if(U&&U.path)if(!Array.isArray(U.path))ie=[F(U.path)];else{ie=[];for(const S of U.path)ie.push(F(S))}let X;const $e={};for(const S of ie)try{const $=ue.parse(t.readFileSync(S,{encoding:pe}));ue.populate($e,$,U)}catch($){se&&V(`Failed to load ${S} ${$.message}`),X=$}const Be=ue.populate(Ce,$e,U);if(se=b(Ce.DOTENV_CONFIG_DEBUG||se),Q=b(Ce.DOTENV_CONFIG_QUIET||Q),se||!Q){const S=Object.keys(Be).length,$=[];for(const ve of ie)try{const Pe=n.relative(process.cwd(),ve);$.push(Pe)}catch(Pe){se&&V(`Failed to load ${ve} ${Pe.message}`),X=Pe}K(`injecting env (${S}) from ${$.join(",")} ${x(`-- tip: ${f()}`)}`)}return X?{parsed:$e,error:X}:{parsed:$e}}function Z(U){if(M(U).length===0)return ue.configDotenv(U);const oe=H(U);return oe?ue._configVault(U):(P(`You set DOTENV_KEY but you are missing a .env.vault file at ${oe}. Did you forget to build it?`),ue.configDotenv(U))}function xe(U,oe){const pe=Buffer.from(oe.slice(-64),"hex");let Ce=Buffer.from(U,"base64");const se=Ce.subarray(0,12),Q=Ce.subarray(-16);Ce=Ce.subarray(12,-16);try{const ie=i.createDecipheriv("aes-256-gcm",pe,se);return ie.setAuthTag(Q),`${ie.update(Ce)}${ie.final()}`}catch(ie){const X=ie instanceof RangeError,$e=ie.message==="Invalid key length",Be=ie.message==="Unsupported state or unable to authenticate data";if(X||$e){const S=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw S.code="INVALID_DOTENV_KEY",S}else if(Be){const S=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw S.code="DECRYPTION_FAILED",S}else throw ie}}function Oe(U,oe,pe={}){const Ce=!!(pe&&pe.debug),se=!!(pe&&pe.override),Q={};if(typeof oe!="object"){const ie=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw ie.code="OBJECT_REQUIRED",ie}for(const ie of Object.keys(oe))Object.prototype.hasOwnProperty.call(U,ie)?(se===!0&&(U[ie]=oe[ie],Q[ie]=oe[ie]),Ce&&V(se===!0?`"${ie}" is already defined and WAS overwritten`:`"${ie}" is already defined and was NOT overwritten`)):(U[ie]=oe[ie],Q[ie]=oe[ie]);return Q}const ue={configDotenv:G,_configVault:D,_parseVault:R,config:Z,decrypt:xe,parse:I,populate:Oe};return sr.exports.configDotenv=ue.configDotenv,sr.exports._configVault=ue._configVault,sr.exports._parseVault=ue._parseVault,sr.exports.config=ue.config,sr.exports.decrypt=ue.decrypt,sr.exports.parse=ue.parse,sr.exports.populate=ue.populate,sr.exports=ue,sr.exports}var _0=$0();const _l=async e=>{const n=await(await cn.getWorkspace()).getResource(e);return n||mt("Invalid URL: "+e),await n.getContents({uri:!0})},Qu=e=>e.startsWith("blob:")||e.startsWith("http:")||e.startsWith("https:"),Ol={},Ro=async(e,t)=>{const n=await Ju(`[**[${t}!='']]`).evaluate(e);for(const r of n){const i=r[t];if(Qu(i))continue;const o=await _l(i);Ol[o]=r[t],r[t]=o}},Sa=e=>Ol[e],Ws=async(e,t)=>{const n=await Ju(`[**[${t}!='']]`).evaluate(e);for(const r of n){const i=r[t];!i||!i.startsWith("blob:")||(r[t]=Ol[i])}},ed=e=>{Ct.registerContribution("catalog.root",{label:e.label,icon:e.icon,contributionId:e.contributionId});const t=e.contributionId??e.label;e.items?.forEach(n=>{Ct.registerContribution(t,{label:n.label,icon:n.icon,contributionId:n.contributionId});const i=import.meta.resolve("/.");n.items.forEach(o=>{const a={label:o.label,icon:o.icon,state:{...o.state}};a.state?.url&&(a.state.url=a.state.url.replace("${baseURL}/",i)),Ct.registerContribution(n.contributionId,a)})})},Hs=e=>{Object.entries(e).forEach(([t,n])=>{const r=/\${([a-zA-Z0-9_]+)}/g;e[t]=n.replace(r,(i,o)=>{const a=e[o];return a!==void 0?a:i})})},td=async(...e)=>{const t=await cn.getWorkspace(),n={};for(const r of e){const i=await t?.getResource(r);if(!i)continue;const o=await i.getContents(),a=_0.parse(o||"");Hs(a),Object.assign(n,a)}return Hs(n),n},O0=Object.freeze(Object.defineProperty({__proto__:null,getOriginalUri:Sa,isAbsoluteResource:Qu,loadEnvs:td,registerCatalog:ed,replaceUris:Ro,replaceVars:Hs,revertBlobUris:Ws,toBlobUri:_l},Symbol.toStringTag,{value:"Module"}));xd.resolveUrl=e=>_l(e);Jr.registerEditorInputHandler({canHandle:e=>e instanceof Yi&&e.getName().endsWith(".geospace"),handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return t.widgetFactory=n=>A`
            <gs-map id="${n}" .input="${t}"></gs-map>`,t}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T0=ea(class extends ta{constructor(){super(...arguments),this.key=zt}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Ys(e),this.key=t),n}});function Mi(e,t){return e.layers.find(n=>n.uuid===t)}function Ni(e,t){return e.layers.findIndex(n=>n.uuid===t)}function L0(e,t){return e.controls.findIndex(n=>n.uuid===t)}function D0(e,t){return e.overlays.findIndex(n=>n.uuid===t)}const P0=e=>new Proxy({},{get:(t,n)=>async(...r)=>{for(const i of e)await i[n](...r)}});var Fn=(e=>(e[e.LOADED=0]="LOADED",e[e.LAYER_ADDED=1]="LAYER_ADDED",e[e.LAYER_DELETED=2]="LAYER_DELETED",e[e.LAYER_UPDATED=3]="LAYER_UPDATED",e[e.FEATURE_SELECTED=4]="FEATURE_SELECTED",e))(Fn||{});const ur=wi(hh),R0=`:root,
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
`,z0="iframe-map-renderer.html";class M0{constructor(t,n){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=t,this.env=n,this.operations=this.createProxy(this)}createProxy(t){return new Proxy({},{get(n,r){return async(...i)=>await t.sendMessage(r,{...i})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(t){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=z0,this.targetElement=typeof t=="string"?document.querySelector(t):t,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(t){await this.sendMessage("modelToUI",t??this.gsMap)}getOperations(){return this.operations}getViewExtent(){return[0,0,0,0]}setOnDirty(t){this.onDirtyCallback=t}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(t){this.onSyncCallback=t}setOnClick(t){this.onClickCallback=t}triggerSync(t){this.onSyncCallback&&this.onSyncCallback(t)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(t,n){try{const{toBlobUri:r}=await Dt(async()=>{const{toBlobUri:o}=await Promise.resolve().then(()=>O0);return{toBlobUri:o}},void 0),i=await r(n);this.iframe.contentWindow.postMessage({id:t,success:!0,assetUrl:i},"*")}catch(r){this.iframe.contentWindow.postMessage({id:t,success:!1,error:r instanceof Error?r.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=t=>{if(t.source!==this.iframe?.contentWindow)return;const{id:n,result:r,error:i,type:o,event:a}=t.data;if(n!==void 0&&this.pendingMessages.has(n)){const{resolve:c,reject:f}=this.pendingMessages.get(n);this.pendingMessages.delete(n),i?f(new Error(i)):c(r)}o==="dirty"?this.onDirtyCallback?.():o==="sync"?this.onSyncCallback?.(a):o==="iframeClicked"?this.onClickCallback?.():o==="resolveAsset"&&this.handleAssetResolution(n,t.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(t=>{const n=r=>{r.source===this.iframe?.contentWindow&&r.data.type==="rendererReady"&&(window.removeEventListener("message",n),t())};window.addEventListener("message",n)})}async sendMessage(t,n){if(!this.iframe)throw new Error("Iframe not initialized");const r=++this.messageId;return new Promise((i,o)=>{this.pendingMessages.set(r,{resolve:i,reject:o}),this.iframe.contentWindow.postMessage({id:r,method:t,params:n},"*"),setTimeout(()=>{this.pendingMessages.has(r)&&(this.pendingMessages.delete(r),o(new Error("Message timeout")))},5e3)})}}class N0{constructor(t,n){this.gsMap=t,this.renderer=n}triggerDirty(){this.renderer.triggerDirty()}async setZoom(t){this.gsMap.view.zoom=t,this.triggerDirty()}async setCenter(t){this.gsMap.view.center=t,this.triggerDirty()}async switchColorMode(t){this.gsMap.view.colorMode=t,this.triggerDirty()}async addLayer(t,n){n?this.gsMap.layers.unshift(t):this.gsMap.layers.push(t),this.triggerDirty()}async deleteLayer(t){const n=Ni(this.gsMap,t);n>=0&&(this.gsMap.layers.splice(n,1),this.triggerDirty())}async renameLayer(t,n){const r=Mi(this.gsMap,t);r&&(r.name=n,this.triggerDirty())}async moveLayer(t,n){const r=Ni(this.gsMap,t);if(r<0)return;let i;if(n){if(i=Ni(this.gsMap,n),i<0||r===i)return}else i=r>0?r-1:r+1;if(i>=0&&i<this.gsMap.layers.length&&r!==i){const[o]=this.gsMap.layers.splice(r,1);this.gsMap.layers.splice(i,0,o),this.triggerDirty()}}async setLayerVisible(t,n){const r=Mi(this.gsMap,t);r&&(r.visible=n,this.triggerDirty())}async addControlFromModule(t){this.gsMap.controls.push({src:t,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(t){const n=L0(this.gsMap,t);n>=0&&(this.gsMap.controls.splice(n,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(t,n){this.gsMap.overlays.push({src:t,position:n||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(t){const n=D0(this.gsMap,t);n>=0&&(this.gsMap.overlays.splice(n,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(t,n){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class F0{constructor(t){this.source=t}async setZoom(t){}async setCenter(t){}async switchColorMode(t){}async addLayer(t,n){ur.set({part:this.source,event:Fn.LAYER_ADDED})}async deleteLayer(t){ur.set({part:this.source,event:Fn.LAYER_DELETED})}async renameLayer(t,n){ur.set({part:this.source,event:Fn.LAYER_UPDATED})}async moveLayer(t,n){ur.set({part:this.source,event:Fn.LAYER_UPDATED})}async setLayerVisible(t,n){}async addControlFromModule(t){}async removeControl(t){}async addOverlayFromModule(t,n){}async removeOverlay(t){}async enableDrawing(t,n){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){ur.set({part:this.source,event:Fn.LAYER_UPDATED})}}var q0=Object.defineProperty,V0=Object.getOwnPropertyDescriptor,Ha=(e,t,n,r)=>{for(var i=r>1?void 0:r?V0(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&q0(t,n,i),i};const B0=Ra("GsMapEditor");let Ht=class extends Zt{constructor(){super(),this.mapContainer=hi(),this.isFirstConnection=!0,this.interactionMode="none",this.chatContext={history:[]},this.commandStack=new jc}getOperations(){return this.operations}onMapChanged({part:e,event:t}){e===this&&(t===Fn.LAYER_ADDED||t===Fn.LAYER_DELETED||t===Fn.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const t=this.getGsMap()?.layers.filter(r=>{const i=r.type===Ml.VECTOR,o=r.source?.type===Kn.Features;return i&&o})||[],n=this.activeDrawingLayerUuid!==void 0;return A`
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
            
            ${vn(t.length>0,()=>{const r=t.map(i=>`${i.uuid}:${i.name}`).join("|");return A`
                ${T0(r,A`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${i=>{const o=i.target.value||void 0;this.activeDrawingLayerUuid=o,(o===void 0||i.target.value==="")&&(this.operations?.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${t.map(i=>A`
                            <wa-option value="${i.uuid}">${i.name||"Layer"}</wa-option>
                        `)}
                    </wa-select>
                `)}
                
                <k-action icon="location-dot" 
                          title="Draw Point"
                          ?disabled=${!n}
                          .action=${()=>this.handleDrawPoint()}>
                </k-action>
                <k-action icon="minus" 
                          title="Draw LineString"
                          ?disabled=${!n}
                          .action=${()=>this.handleDrawLine()}>
                </k-action>
                <k-action icon="draw-polygon" 
                          title="Draw Polygon"
                          ?disabled=${!n}
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
        `}async connectedCallback(){if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}this.renderer?.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{et.set(this)}))}async doInitUI(){const e=this.input?.data,t=await td(".env","envs/.env","env","envs/env","default.env","envs/default.env","dev.env","envs/dev.env");t.BUILD_TIME=new Date;const n=await e.getContents();let r=n&&n.trim()?JSON.parse(n):zc;r=this.migrateGsMap(r),Nl(r),await Ro(r,"url"),await Ro(r,"src"),this.gsMap=r,r.view&&(this.initialView={center:[...r.view.center],zoom:r.view.zoom}),this.renderer=new M0(r,t);const i=this.renderer.getOperations(),o=new N0(r,this.renderer),a=new F0(this);this.operations=P0([o,i,a]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(c=>{if(this.gsMap){switch(c.type){case"viewChanged":this.gsMap.view.center=c.view.center,this.gsMap.view.zoom=c.view.zoom,c.view.rotation!==void 0&&c.view.rotation!==0&&(this.gsMap.view.rotation=c.view.rotation);break;case"featuresChanged":const f=Mi(this.gsMap,c.layerUuid);f&&f.source?.type===Kn.Features&&(f.source.features=c.features);break;case"featureSelected":const b={feature:c.feature,layerUuid:c.layerUuid,metrics:c.metrics};console.info("Feature metrics:",b.metrics),ur.set({part:this,event:Fn.FEATURE_SELECTED,payload:b});break;case"featureDeselected":console.info("Feature deselected"),ur.set({part:this,event:Fn.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),this.renderer.setOnClick?.(()=>{et.set(this)}),this.updateToolbar(),ur.set({part:this,event:Fn.LOADED})}catch(c){console.error("Failed to render map:",c),mt(`Failed to render map: ${c.message}`)}}migrateGsMap(e){const t={...e};let n=!1;return e.view||(console.log("Creating view field and migrating old properties..."),n=!0,t.view={},e.center!==void 0&&(t.view.center=e.center,delete t.center),e.zoom!==void 0&&(t.view.zoom=e.zoom,delete t.zoom),e.projection!==void 0&&(t.view.projection=e.projection,delete t.projection),t.view.center===void 0&&(t.view.center=[0,0]),t.view.zoom===void 0&&(t.view.zoom=0),t.view.projection===void 0&&(t.view.projection="EPSG:3857")),(!e.styles||Object.keys(e.styles).length===0)&&(console.log("Adding default styles to map..."),n=!0,t.styles={...kd}),(!e.styleRules||e.styleRules.length===0)&&(console.log("Adding default style rules to map..."),n=!0,t.styleRules=[...Id]),n&&console.log("Map migration completed"),t}getGsMap(){return this.gsMap}async save(){if(!this.renderer){mt("Map not initialized");return}try{if(!this.gsMap){mt("Map not initialized");return}const e=JSON.parse(JSON.stringify(this.gsMap));await Ws(e,"url"),await Ws(e,"src"),this.input?.data.saveContents(JSON.stringify(e,null,2)),this.markDirty(!1)}catch(e){mt(`Save failed: ${e.message}`)}}get mapOperations(){return this.operations}edit(){yn("not yet implemented")}async refresh(){if(!this.renderer){B0.error("Map not initialized");return}await this.renderer.modelToUI()}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Point",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("LineString",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Polygon",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){await this.operations?.enableFeatureSelection(),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){if(this.interactionMode==="select")try{await this.operations?.deleteSelectedFeatures(),yn("Selected features deleted")}catch(e){mt(e.message)}}async handleCreateDrawingLayer(){if(!this.gsMap){mt("Map not initialized");return}const e=await Na("Enter name for new drawing layer:","Drawing Layer");if(!e)return;const t=Nl({name:e,type:Ml.VECTOR,source:{type:Kn.Features,features:[]},visible:!0});await this.operations?.addLayer(t,!1);const n=this.gsMap?.layers.find(r=>r.uuid===t.uuid);n?.uuid&&(this.activeDrawingLayerUuid=n.uuid),await this.updateComplete,this.updateToolbar(),yn(`Created drawing layer: ${e}`)}doClose(){this.renderer?.destroy(),this.renderer=void 0,this.input=void 0}render(){return A`
            <div class="gc-map-container" ${pi(this.mapContainer)}>
            </div>
        `}};Ht.styles=[Rc(R0),ln`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
        }

        .gc-map-container {
            flex: 1;
        }

        input.prompt {
            flex: 1;
            font-size: large;
        }
    `];Ha([p({attribute:!1})],Ht.prototype,"input",2);Ha([p({type:String})],Ht.prototype,"activeDrawingLayerUuid",2);Ha([p({type:String})],Ht.prototype,"interactionMode",2);Ha([Xo(ur)],Ht.prototype,"onMapChanged",1);Ht=Ha([fe("gs-map")],Ht);var U0=Object.defineProperty,j0=Object.getOwnPropertyDescriptor,Qo=(e,t,n,r)=>{for(var i=r>1?void 0:r?j0(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&U0(t,n,i),i};let Qi=class extends Zt{onPartChanged(e){e==this||e==this.mapEditor||!(e instanceof Ht)||(this.mapEditor=e,this.updateLater())}onMapChanged({part:e}){e==this.mapEditor&&this.updateLater()}toggleVisible(e){const t=this.mapEditor.getGsMap(),n=Mi(t,e);if(!n)return;const i=!(n.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(e,i),this.updateLater()}async confirmAction(e,t){await na(e)&&t()}selectLayer(e){this.selectedLayerUuid=e,this.updateToolbar(),this.updateContextMenu()}renameLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const n=this.mapEditor.getGsMap();if(!Mi(n,t))return;const i=Ni(n,t),o=qe.createExecutionContext(this,{index:i+1});o.activeEditor=this.mapEditor,qe.execute("rename_layer",o)}deleteLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const n=this.mapEditor.getGsMap(),r=Mi(n,t);r&&this.confirmAction(`Delete layer "${r.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(t)))}moveLayerUp(e){if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const n=Ni(t,e);if(n<=0)return;const r=t.layers[n-1]?.uuid;r&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,r)),this.selectedLayerUuid=r)}moveLayerDown(e){if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const n=Ni(t,e);if(n<0||n>=t.layers.length-1)return;const r=t.layers[n+1]?.uuid;r&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(e,r)),this.selectedLayerUuid=r)}renderToolbar(){const e=this.selectedLayerUuid!==void 0;return A`
            <k-action ?disabled=${!e} 
                      title="Rename selected layer" 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
            </k-action>
            <k-action ?disabled=${!e} 
                      title="Delete selected layer" 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
            </k-action>
        `}renderContextMenu(){const e=this.selectedLayerUuid!==void 0;return A`
            <k-action ?disabled=${!e} 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
                Rename
            </k-action>
            <k-action ?disabled=${!e} 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
                Delete
            </k-action>
        `}render(){return vn(!this.mapEditor,()=>A`
                    <k-no-content message="Select a map."></k-no-content>`,()=>A`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((e,t)=>A`
                            <wa-tree-item @click="${()=>e.uuid&&this.selectLayer(e.uuid)}" 
                                          class="${this.selectedLayerUuid===e.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${e.name??`Layer ${t+1}`}${t==0?A`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-action size="small"
                                                  icon="${e.visible!==!1?"eye":"eye-slash"}"
                                                  title="${e.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>e.uuid&&this.toggleVisible(e.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${t===0}"
                                                  .action=${()=>e.uuid&&this.moveLayerUp(e.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${t===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>e.uuid&&this.moveLayerDown(e.uuid)}>
                                        </k-action>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(e=>A`
                            <wa-tree-item>
                                <span>${Sa(e.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{e.uuid&&this.confirmAction(`Delete control "${Sa(e.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(e.uuid)))}}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(e=>A`
                            <wa-tree-item>
                                <span>${Sa(e.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{e.uuid&&this.confirmAction(`Delete overlay "${Sa(e.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(e.uuid)))}}>
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
            `)}};Qi.styles=ln`
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
    `;Qo([ge()],Qi.prototype,"selectedLayerUuid",2);Qo([Xo(et)],Qi.prototype,"onPartChanged",1);Qo([Xo(ur)],Qi.prototype,"onMapChanged",1);Qi=Qo([fe("gs-map-props")],Qi);var W0=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,nd=(e,t,n,r)=>{for(var i=r>1?void 0:r?H0(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&W0(t,n,i),i};const G0="catalog.root";let Qr=class extends Zt{constructor(){super(...arguments),this.treeRef=hi()}doBeforeUI(){const e=Ct.getContributions(G0);this.rootNodes=this.toTreeNodes(e)}renderToolbar(){const e=et.get()instanceof Qr&&$n.get()!==void 0;return A`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!e} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(e){return e.map(t=>{const n={data:t.state,icon:t.icon,label:t.label,leaf:!1};if(t.contributionId){const r=Ct.getContributions(t.contributionId);n.leaf=r.length===0,n.children=this.toTreeNodes(r)}return n})}onItemDblClicked(e){const t=e.currentTarget.model.data.url;this.executeCommand("checkout",{url:t})}onSelectionChanged(e){const t=e.detail.selection[0].model;$n.set(t.data)}setAllExpanded(e){const t=this.treeRef.value;t&&t.querySelectorAll("wa-tree-item").forEach(n=>{n.expanded=e})}refresh(){this.requestUpdate()}createTreeItems(e,t=!1){return e?A`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${e} ?expanded=${t}>
                <span><k-icon name="${e.icon}"></k-icon> ${e.label}</span>
                ${e.children?.map(n=>this.createTreeItems(n))}
            </wa-tree-item>`:A``}render(){return A`
            <wa-tree ${pi(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${this.rootNodes?.map(e=>this.createTreeItems(e,!0))}
            </wa-tree>
        `}};Qr.styles=ln`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;nd([ge()],Qr.prototype,"rootNodes",2);Qr=nd([fe("gs-catalog")],Qr);const K0="geo!space catalog",Y0="earth",X0="catalog.root.geospace",Z0=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],J0={label:K0,icon:Y0,contributionId:X0,items:Z0};Pt({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async e=>{let t=e.params&&e.params.url;if(!t){const r=$n.get();if(!r||!("url"in r))return;t=r.url}const n=await cn.getWorkspace();if(!n){mt("No workspace selected.");return}fetch(t,{method:"GET"}).then(r=>r.blob()).then(r=>{const i=new URL(t).pathname.split("/"),o=i[i.length-1];return n.getResource(o,{create:!0}).then(a=>a.saveContents(r,{contentType:Hu.BINARY}).then(()=>{yn("File checked out: "+o)}))}).catch(r=>{mt(r)})}}});Pt({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async e=>{const t=et.get();t instanceof Qr&&t.refresh()}}});Pt({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async e=>{const t=et.get();t instanceof Qr&&t.setAllExpanded(!0)}}});Pt({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async e=>{const t=et.get();t instanceof Qr&&t.setAllExpanded(!1)}}});ed(J0);const Q0=Ra("GsCommandHandlers"),zr=e=>e.activeEditor instanceof Ht,Ai=e=>{const t=e.activeEditor;if(!(t instanceof Ht)||!t.getOperations())throw Q0.error("GsMapEditor with renderer not available in context.source"),new Error("GsMapEditor with renderer not available in context.source");return t.getOperations()};qe.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level, an interger between 0 and 12",required:!0}]},handler:{canExecute:zr,execute:async e=>{await Ai(e).setZoom(Number(e.params.zoom).valueOf())}}});qe.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[]},handler:{canExecute:e=>et.get()instanceof Ht,execute:async e=>{const t=et.get(),n=t.getGsMap();n?.view?.zoom!==void 0&&await t.mapOperations?.setZoom(n.view.zoom+1)}}});qe.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[]},handler:{canExecute:e=>et.get()instanceof Ht,execute:async e=>{const t=et.get(),n=t.getGsMap();n?.view?.zoom!==void 0&&await t.mapOperations?.setZoom(n.view.zoom-1)}}});qe.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the map",required:!0},{name:"lon",description:"the longitude of the map",required:!0}]},handler:{canExecute:zr,execute:async e=>{const t=Ai(e),n=Cd([Number(e.params.lon).valueOf(),Number(e.params.lat).valueOf()]);await t.setCenter([n[0],n[1]])}}});qe.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(Kn).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:zr,execute:async e=>{const t=Ai(e),n=e.params.source?.trim().toLowerCase(),r=e.params.url,i=Sd(n),o=e?.params&&e.params.basemap==!0;let a;r&&(a=r.split("/").pop()),!a&&i&&(a=i);const c=Fl({name:a,type:Ed(n),source:Fl({type:i,url:r??Ad(i)})});await Ro(c,"url"),await t.addLayer(c,o)}}});qe.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:zr,execute:async e=>{const t=Ai(e),r=e.activeEditor.getGsMap(),i=parseInt(e.params.index)-1;if(i<0||!r||i>=r.layers.length)return;const o=r.layers[i];o?.uuid&&await t.deleteLayer(o.uuid)}}});qe.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:zr,execute:async e=>{const t=Ai(e),r=e.activeEditor.getGsMap(),i=parseInt(e.params.index)-1;if(i<0||!r||i>=r.layers.length)return;const o=r.layers[i];if(!o?.uuid)return;const a=o.name||`Layer ${i+1}`,c=e.params?.newName||await Na(`Enter new name for "${a}":`,a);!c||c===a||await t.renameLayer(o.uuid,c)}}});qe.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:zr,execute:async e=>{const t=e.source,n=e.params?.mode;await t.switchColorMode(n)}}});qe.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:zr,execute:async e=>{const t=Ai(e),n=e.params.src,r=e.params.position;await t.addOverlayFromModule(n,r)}}});qe.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:zr,execute:async e=>{const t=Ai(e),n=e.params.src;await t.addControlFromModule(n)}}});qe.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates",type:"number[]"}]},handler:{canExecute:zr,execute:async e=>{const t=e.params.latlon,r=e.source.renderer.getViewExtent();if(!r)throw new Error("Failed to get view extent");let i=r;if(t||t===void 0){const{transformExtent:o}=await Dt(async()=>{const{transformExtent:a}=await import("./index-CBe0mDof.js").then(c=>c.aa);return{transformExtent:a}},[]);i=o(r,"EPSG:3857","EPSG:4326"),[i[0],i[1]]=[i[1],i[0]],[i[2],i[3]]=[i[3],i[2]]}e.viewExtent=i}}});qe.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:e=>et.get()instanceof Ht,execute:async e=>{const t=et.get().renderer;if(!t||!("toggleMobileView"in t))throw new Error("Mobile view toggle not available on this renderer");t.toggleMobileView()}}});qe.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:e=>et.get()instanceof Ht,execute:async e=>{const t=et.get();t instanceof Ht&&await t.refresh()}}});qe.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:e=>et.get()instanceof Ht,execute:async e=>{const t=et.get();t instanceof Ht&&await t.resetView()}}});qe.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:e=>et.get()instanceof Ht,execute:async e=>{const n=et.get().mapOperations;n&&await n.switchColorMode()}}});var ey=Object.getOwnPropertyDescriptor,ty=(e,t,n,r)=>{for(var i=r>1?void 0:r?ey(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=a(i)||i);return i};let Lc=class extends Il{createRenderRoot(){return this}render(){return A`
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
                <k-toolbar id=${Mu}></k-toolbar>
                <k-toolbar id=${yv}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${la}></k-toolbar>
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
                    <k-tabs id="${Bs}"></k-tabs>
                    <k-tabs id="${qu}"></k-tabs>
                </k-resizable-grid>
                
                <!-- CENTER: Editor + Bottom Panel -->
                <k-resizable-grid 
                    id="center-layout" 
                    orientation="vertical" 
                    sizes="80%, 20%">
                    
                    <!-- Editor Area (fixed, never moves) -->
                    <k-tabs id="${Pi}"></k-tabs>
                    
                    <!-- Bottom Panel (terminal, output, etc.) -->
                    <k-tabs id="${Bu}"></k-tabs>
                </k-resizable-grid>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${Vu}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${Nu}></k-toolbar>
                <k-toolbar id=${Cl}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Fu}></k-toolbar>
            </div>
        `}};Lc=ty([fe("gs-app")],Lc);const ny=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
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
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,ry=`# 🌐 geo!space
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/erdalkaraca/geospace)
[![Browser Support](https://img.shields.io/badge/Chrome%20%7C%20Opera-Supported-brightgreen)](#-browser-compatibility)
[![AI Providers](https://img.shields.io/badge/AI%20Providers-5-blue)](#-ai-configuration)
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

**Happy mapping! 🗺️✨**`,Dc=xa.version,Pc=Ra("GeoSpaceApp"),iy={".geojson":Kn.GeoJSON,".json":Kn.GeoJSON,".kml":Kn.KML,".gpx":Kn.GPX,".tif":Kn.GeoTIFF,".tiff":Kn.GeoTIFF,".geotiff":Kn.GeoTIFF},rd=e=>{const t=e.getName().toLowerCase();for(const[n,r]of Object.entries(iy))if(t.endsWith(n))return r;return null},ay=e=>rd(e)!==null,oy={id:"geospace",name:"geo!space",version:Dc,description:"A geospatial IDE for working with spatial data",metadata:{github:{owner:"erdalkaraca",repo:"geospace"}},extensions:["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage","system.pythonpackagemanager"],contributions:{ui:[{target:Mu,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:Bs,name:"filebrowser",label:"Workspace",icon:"folder-open",component:e=>A`<k-filebrowser id="${e}"></k-filebrowser>`},{target:Bs,name:"catalog",label:"Catalog",icon:"book",component:e=>A`<gs-catalog id="${e}"></gs-catalog>`},{target:qu,name:"map-props",label:"Map Properties",icon:"fg map-options",component:e=>A`<gs-map-props id="${e}"></gs-map-props>`},{target:Vu,name:"assistant",label:"AI",icon:"robot",component:e=>A`<k-aiassist id="${e}"></k-aiassist>`},{target:Bu,name:"log-terminal",label:"Log",icon:"list",component:e=>A`<k-log-terminal id="${e}"></k-log-terminal>`},{target:Nu,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:Fu,label:`v${Dc}`,icon:"circle-info",command:"show_version_info",showLabel:!0},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const e=$n.get();return e instanceof Yi?!ay(e):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_geospace_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>Dt(()=>import("./mapbuilder-extension--MFNqoAh.js"),__vite__mapDeps([17,1])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>Dt(()=>import("./style-editor-extension-CP82qDpk.js"),__vite__mapDeps([18,1])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>Dt(()=>import("./overpass-extension-BuvXMqiB.js"),__vite__mapDeps([19,1])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>Dt(()=>import("./gtfs-extension-DeUYrkrW.js"),__vite__mapDeps([20,1])),icon:"map-location-dot"}]},async initialize(){Po.addPackage({name:xa.name,version:xa.version,dependencies:xa.dependencies,devDependencies:xa.devDependencies}),Ct.registerContribution(ja,{label:"App Support",description:"General app support",role:"appsupport",sysPrompt:()=>{const e=ft.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,installedAndEnabled:ft.isEnabled(n.id)})),t=`***Available Extensions:***
${JSON.stringify(e,null,2)}`;return`${ny}

${t}`},canHandle:({activeEditor:e})=>e===void 0,promptDecorator:async({userPrompt:e})=>cn.getWorkspace().then(t=>{const n={workspace:t?.getName(),activeEditor:Jr.getEditorArea()?.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(n,null,2)}`}

${e}`})}),Pt({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async e=>{const t=$n.get();if(!(t instanceof Yi))return;const n=rd(t);if(!n){Pc.warn(`Unsupported file type: ${t.getName()}`);return}const r=t.getWorkspacePath(),i=qe.createExecutionContext(e.source,{source:n,url:r});await qe.execute("add_layer",i)}}}),Pt({command:{id:"create_geospace_file",name:"Create GeoSpace Map File",description:"Creates a new .geospace map file",parameters:[]},handler:{execute:async()=>{const e={...zc,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}};await qe.execute("create_file",{params:{path:"map.geospace",contents:JSON.stringify(e,null,2),extension:".geospace",ask:!0}})}}}),Pt({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async e=>{const t=new Gu(ry,"README.md");await Jr.loadEditor(t)}},contribution:{target:la,icon:"question-circle",label:"Welcome"}}),Pc.info("geo!space is ready!")},render(){return A`<gs-app></gs-app>`}};Wa.loadApp(oy,document.body);export{Nu as A,Wt as B,dr as C,Us as D,Ra as E,Yi as F,Ht as G,Ei as K,f0 as P,Mu as T,et as a,Zi as b,mt as c,ge as d,fe as e,ho as f,Pt as g,$n as h,Bu as i,Zt as j,at as k,td as l,pr as m,p as n,An as o,dv as p,yv as q,fn as r,ir as s,yn as t,Hu as u,lo as v,cn as w,Jr as x,Ft as y,Ct as z};
