const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/git-extension-CNL3HOUm.js","assets/index-CGmBFeLm.js","assets/pyterminal-extension-CcWkYQdQ.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-i3yW1k7_.js","assets/p12-splitter-C8U07nnh.js","assets/package-manager-extension-C7SxbZWu.js","assets/notebook-extension-C1Ao7ZAo.js","assets/editor.main-CIIfPI4g.js","assets/editor-D6kYW_CN.css","assets/command-palette-extension-DKN_lZKX.js","assets/download-extension-wvX00mne.js","assets/unzip-extension-LDKm1TFn.js","assets/md-editor-extension-BgfWCJiB.js","assets/monaco-editor-extension-CcNIdci5.js","assets/memory-usage-extension-Bp9bv38Y.js","assets/webdav-extension-Coh74Gjj.js","assets/mapbuilder-extension-2jolkmX0.js","assets/style-editor-extension-ATakL9d0.js","assets/overpass-extension-Wif01N3a.js","assets/gtfs-extension-CRXVdq8K.js"])))=>i.map(i=>d[i]);
var pd=Object.defineProperty;var fd=(e,t,n)=>t in e?pd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var mt=(e,t,n)=>fd(e,typeof t!="symbol"?t+"":t,n);import{x as _,B as qi,c as xs,g as Ws,e as na,i as ra,E as Mt,t as dr,T as Br,f as md,u as gd,a as Hs,r as Pc,b as bd,d as vd,m as Gs,_ as Pt,n as yn,h as cn,j as pi,k as fi,p as yd,v as si,l as fa,M as es,o as wd,q as xd,s as kd,G as zl,w as Jn,D as Rc,y as Ml,z as Id,A as Cd,C as Sd,F as Ed,H as Nl,I as Ad,J as $d}from"./index-CGmBFeLm.js";/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _d=!1,Fl="0.12.28";class Ks{constructor(t){this.children=[],this.variables=t,this.proxy=new Proxy(t,this)}get(t,n){var r;return t[n]||((r=this.parent)==null?void 0:r.getProxy()[n])}set(t,n,r){t[n]=r}put(t,n){this.variables[t]=n}getProxy(){return this.proxy}createChild(t={}){const n=new Ks(t);return n.parent=this,this.children.push(n),n}getChildren(){return this.children}getParent(){return this.parent}destroy(){var n,r;const t=(n=this.parent)==null?void 0:n.children.indexOf(this);t!==void 0&&t>=0&&((r=this.parent)==null||r.children.splice(t,1)),this.parent=void 0}}const mn=new Ks({}),ar=mn.createChild({});ar.put("html",_);ar.put("render",qi);const ql={debug:0,info:1,warning:2,error:3};let Od="debug";const Ti={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let go=null;const ks=[];function ma(e){if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);if(e instanceof Error)return`${e.name}: ${e.message}`;try{return JSON.stringify(e)}catch{return String(e)}}class Td{constructor(t){this.source=t}info(t){this.log(t,"info")}warning(t){this.log(t,"warning")}warn(t){this.log(t,"warning")}error(t){this.log(t,"error")}debug(t){this.log(t,"debug")}log(t,n){Li(this.source,t,n)}}function Ld(e){return ql[e]>=ql[Od]}function Li(e,t,n){Ld(n)&&(go?go(e,t,n):(ks.push({source:e,message:t,level:n}),Ti[n==="error"?"error":n==="warning"?"warn":n==="debug"?"debug":"log"](`[${e}] ${t}`)))}function Dd(){console.log=function(...e){Ti.log.apply(console,e),Li("Console",e.map(t=>ma(t)).join(" "),"info")},console.info=function(...e){Ti.info.apply(console,e),Li("Console",e.map(t=>ma(t)).join(" "),"info")},console.warn=function(...e){Ti.warn.apply(console,e),Li("Console",e.map(t=>ma(t)).join(" "),"warning")},console.error=function(...e){Ti.error.apply(console,e),Li("Console",e.map(t=>ma(t)).join(" "),"error")},console.debug=function(...e){Ti.debug.apply(console,e),Li("Console",e.map(t=>ma(t)).join(" "),"debug")}}Dd();function Pd(e){for(go=e;ks.length>0;){const t=ks.shift();t&&e(t.source,t.message,t.level)}}function Rd(){go=null}function za(e){return new Td(e)}const qt=za("System");mn.put("logger",qt);var zd=Object.defineProperty,Md=(e,t,n)=>t in e?zd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ts=(e,t,n)=>(Md(e,typeof t!="symbol"?t+"":t,n),n),Nd=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},ns=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},Ya=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Vl=(e,t,n)=>(Nd(e,t,"access private method"),n);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function zc(e,t){return Object.is(e,t)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let zt=null,Ea=!1,co=1;const bo=Symbol("SIGNAL");function Di(e){const t=zt;return zt=e,t}function Fd(){return zt}function qd(){return Ea}const Ys={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Po(e){if(Ea)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(zt===null)return;zt.consumerOnSignalRead(e);const t=zt.nextProducerIndex++;if(Vi(zt),t<zt.producerNode.length&&zt.producerNode[t]!==e&&Is(zt)){const n=zt.producerNode[t];Ro(n,zt.producerIndexOfThis[t])}zt.producerNode[t]!==e&&(zt.producerNode[t]=e,zt.producerIndexOfThis[t]=Is(zt)?Fc(e,zt,t):0),zt.producerLastReadVersion[t]=e.version}function Vd(){co++}function Mc(e){if(!(!e.dirty&&e.lastCleanEpoch===co)){if(!e.producerMustRecompute(e)&&!Hd(e)){e.dirty=!1,e.lastCleanEpoch=co;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=co}}function Nc(e){if(e.liveConsumerNode===void 0)return;const t=Ea;Ea=!0;try{for(const n of e.liveConsumerNode)n.dirty||Ud(n)}finally{Ea=t}}function Bd(){return(zt==null?void 0:zt.consumerAllowSignalWrites)!==!1}function Ud(e){var t;e.dirty=!0,Nc(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function jd(e){return e&&(e.nextProducerIndex=0),Di(e)}function Wd(e,t){if(Di(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(Is(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)Ro(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function Hd(e){Vi(e);for(let t=0;t<e.producerNode.length;t++){const n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(Mc(n),r!==n.version))return!0}return!1}function Fc(e,t,n){var r;if(Xs(e),Vi(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)e.producerIndexOfThis[i]=Fc(e.producerNode[i],e,i)}return e.liveConsumerIndexOfThis.push(n),e.liveConsumerNode.push(t)-1}function Ro(e,t){var n;if(Xs(e),Vi(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(n=e.unwatched)==null||n.call(e.wrapper);for(let i=0;i<e.producerNode.length;i++)Ro(e.producerNode[i],e.producerIndexOfThis[i])}const r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const i=e.liveConsumerIndexOfThis[t],a=e.liveConsumerNode[t];Vi(a),a.producerIndexOfThis[i]=t}}function Is(e){var t;return e.consumerIsAlwaysLive||(((t=e==null?void 0:e.liveConsumerNode)==null?void 0:t.length)??0)>0}function Vi(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function Xs(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function qc(e){if(Mc(e),Po(e),e.value===Cs)throw e.error;return e.value}function Gd(e){const t=Object.create(Kd);t.computation=e;const n=()=>qc(t);return n[bo]=t,n}const rs=Symbol("UNSET"),is=Symbol("COMPUTING"),Cs=Symbol("ERRORED"),Kd={...Ys,value:rs,dirty:!0,error:null,equal:zc,producerMustRecompute(e){return e.value===rs||e.value===is},producerRecomputeValue(e){if(e.value===is)throw new Error("Detected cycle in computations.");const t=e.value;e.value=is;const n=jd(e);let r,i=!1;try{r=e.computation.call(e.wrapper),i=t!==rs&&t!==Cs&&e.equal.call(e.wrapper,t,r)}catch(a){r=Cs,e.error=a}finally{Wd(e,n)}if(i){e.value=t;return}e.value=r,e.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Yd(){throw new Error}let Xd=Yd;function Zd(){Xd()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Jd(e){const t=Object.create(th);t.value=e;const n=()=>(Po(t),t.value);return n[bo]=t,n}function Qd(){return Po(this),this.value}function eh(e,t){Bd()||Zd(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,nh(e))}const th={...Ys,equal:zc,value:void 0};function nh(e){e.version++,Vd(),Nc(e)}/**
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
 */const Zt=Symbol("node");var fr;(e=>{var t,n,r,i;class a{constructor(p,g={}){Ya(this,n),ts(this,t);const x=Jd(p)[bo];if(this[Zt]=x,x.wrapper=this,g){const y=g.equals;y&&(x.equal=y),x.watched=g[e.subtle.watched],x.unwatched=g[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Qd.call(this[Zt])}set(p){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(qd())throw new Error("Writes to signals not permitted during Watcher callback");const g=this[Zt];eh(g,p)}}t=Zt,n=new WeakSet,e.isState=c=>typeof c=="object"&&ns(n,c),e.State=a;class o{constructor(p,g){Ya(this,i),ts(this,r);const x=Gd(p)[bo];if(x.consumerAllowSignalWrites=!0,this[Zt]=x,x.wrapper=this,g){const y=g.equals;y&&(x.equal=y),x.watched=g[e.subtle.watched],x.unwatched=g[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return qc(this[Zt])}}r=Zt,i=new WeakSet,e.isComputed=c=>typeof c=="object"&&ns(i,c),e.Computed=o,(c=>{var p,g,v,x;function y(z){let G,M=null;try{M=Di(null),G=z()}finally{Di(M)}return G}c.untrack=y;function I(z){var G;if(!(0,e.isComputed)(z)&&!(0,e.isWatcher)(z))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((G=z[Zt].producerNode)==null?void 0:G.map(M=>M.wrapper))??[]}c.introspectSources=I;function R(z){var G;if(!(0,e.isComputed)(z)&&!(0,e.isState)(z))throw new TypeError("Called introspectSinks without a Signal argument");return((G=z[Zt].liveConsumerNode)==null?void 0:G.map(M=>M.wrapper))??[]}c.introspectSinks=R;function D(z){if(!(0,e.isComputed)(z)&&!(0,e.isState)(z))throw new TypeError("Called hasSinks without a Signal argument");const G=z[Zt].liveConsumerNode;return G?G.length>0:!1}c.hasSinks=D;function U(z){if(!(0,e.isComputed)(z)&&!(0,e.isWatcher)(z))throw new TypeError("Called hasSources without a Computed or Watcher argument");const G=z[Zt].producerNode;return G?G.length>0:!1}c.hasSources=U;class Y{constructor(G){Ya(this,g),Ya(this,v),ts(this,p);let M=Object.create(Ys);M.wrapper=this,M.consumerMarkedDirty=G,M.consumerIsAlwaysLive=!0,M.consumerAllowSignalWrites=!1,M.producerNode=[],this[Zt]=M}watch(...G){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Vl(this,v,x).call(this,G);const M=this[Zt];M.dirty=!1;const S=Di(M);for(const V of G)Po(V[Zt]);Di(S)}unwatch(...G){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Vl(this,v,x).call(this,G);const M=this[Zt];Vi(M);for(let S=M.producerNode.length-1;S>=0;S--)if(G.includes(M.producerNode[S].wrapper)){Ro(M.producerNode[S],M.producerIndexOfThis[S]);const V=M.producerNode.length-1;if(M.producerNode[S]=M.producerNode[V],M.producerIndexOfThis[S]=M.producerIndexOfThis[V],M.producerNode.length--,M.producerIndexOfThis.length--,M.nextProducerIndex--,S<M.producerNode.length){const W=M.producerIndexOfThis[S],re=M.producerNode[S];Xs(re),re.liveConsumerIndexOfThis[W]=S}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[Zt].producerNode.filter(M=>M.dirty).map(M=>M.wrapper)}}p=Zt,g=new WeakSet,v=new WeakSet,x=function(z){for(const G of z)if(!(0,e.isComputed)(G)&&!(0,e.isState)(G))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=z=>ns(g,z),c.Watcher=Y;function q(){var z;return(z=Fd())==null?void 0:z.wrapper}c.currentComputed=q,c.watched=Symbol("watched"),c.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(fr||(fr={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rh=Symbol("SignalWatcherBrand"),ih=new FinalizationRegistry((({watcher:e,signal:t})=>{e.unwatch(t)})),Bl=new WeakMap;function zo(e){return e[rh]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new fr.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new fr.Computed((()=>{this._$St.get(),super.performUpdate()}));const t=this._$Su=new fr.subtle.Watcher((function(){const n=Bl.get(this);n!==void 0&&(n._$Si===!1&&n.requestUpdate(),this.watch())}));Bl.set(t,this),ih.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach((n=>n.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,n,r){this._$So=!0,super.requestUpdate(t,n,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(t){this._$Sh.add(t);const n=this._$So;this.requestUpdate(),this._$So=n}m(t){this._$Sh.delete(t)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */fr.State;fr.Computed;const xi=(e,t)=>new fr.State(e,t);var Ia={exports:{}},ah=Ia.exports,Ul;function oh(){return Ul||(Ul=1,(function(e,t){(function(n,r){var i={};n.PubSub?(i=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=i,r(i)),e!==void 0&&e.exports&&(t=e.exports=i),t.PubSub=i,e.exports=t=i})(typeof window=="object"&&window||ah||xs,function(n){var r={},i=-1,a="*";function o(D){var U;for(U in D)if(Object.prototype.hasOwnProperty.call(D,U))return!0;return!1}function c(D){return function(){throw D}}function p(D,U,Y){try{D(U,Y)}catch(q){setTimeout(c(q),0)}}function g(D,U,Y){D(U,Y)}function v(D,U,Y,q){var z=r[U],G=q?g:p,M;if(Object.prototype.hasOwnProperty.call(r,U))for(M in z)Object.prototype.hasOwnProperty.call(z,M)&&G(z[M],D,Y)}function x(D,U,Y){return function(){var z=String(D),G=z.lastIndexOf(".");for(v(D,D,U,Y);G!==-1;)z=z.substr(0,G),G=z.lastIndexOf("."),v(D,z,U,Y);v(D,a,U,Y)}}function y(D){var U=String(D),Y=!!(Object.prototype.hasOwnProperty.call(r,U)&&o(r[U]));return Y}function I(D){for(var U=String(D),Y=y(U)||y(a),q=U.lastIndexOf(".");!Y&&q!==-1;)U=U.substr(0,q),q=U.lastIndexOf("."),Y=y(U);return Y}function R(D,U,Y,q){D=typeof D=="symbol"?D.toString():D;var z=x(D,U,q),G=I(D);return G?(Y===!0?z():setTimeout(z,0),!0):!1}n.publish=function(D,U){return R(D,U,!1,n.immediateExceptions)},n.publishSync=function(D,U){return R(D,U,!0,n.immediateExceptions)},n.subscribe=function(D,U){if(typeof U!="function")return!1;D=typeof D=="symbol"?D.toString():D,Object.prototype.hasOwnProperty.call(r,D)||(r[D]={});var Y="uid_"+String(++i);return r[D][Y]=U,Y},n.subscribeAll=function(D){return n.subscribe(a,D)},n.subscribeOnce=function(D,U){var Y=n.subscribe(D,function(){n.unsubscribe(Y),U.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){r={}},n.clearSubscriptions=function(U){var Y;for(Y in r)Object.prototype.hasOwnProperty.call(r,Y)&&Y.indexOf(U)===0&&delete r[Y]},n.countSubscriptions=function(U){var Y,q,z=0;for(Y in r)if(Object.prototype.hasOwnProperty.call(r,Y)&&Y.indexOf(U)===0){for(q in r[Y])z++;break}return z},n.getSubscriptions=function(U){var Y,q=[];for(Y in r)Object.prototype.hasOwnProperty.call(r,Y)&&Y.indexOf(U)===0&&q.push(Y);return q},n.unsubscribe=function(D){var U=function(W){var re;for(re in r)if(Object.prototype.hasOwnProperty.call(r,re)&&re.indexOf(W)===0)return!0;return!1},Y=typeof D=="string"&&(Object.prototype.hasOwnProperty.call(r,D)||U(D)),q=!Y&&typeof D=="string",z=typeof D=="function",G=!1,M,S,V;if(Y){n.clearSubscriptions(D);return}for(M in r)if(Object.prototype.hasOwnProperty.call(r,M)){if(S=r[M],q&&S[D]){delete S[D],G=D;break}if(z)for(V in S)Object.prototype.hasOwnProperty.call(S,V)&&S[V]===D&&(delete S[V],G=!0)}return G}})})(Ia,Ia.exports)),Ia.exports}var sh=oh();const Vc=Ws(sh),or=(e,t)=>{Vc.subscribe(e,(n,r)=>t(r))},Ht=(e,t)=>{Vc.publish(e,t)},Zs=e=>function(t,n,r){const i=r.value;return i.topic=e,r};mn.put("subscribe",or);mn.put("publish",Ht);const Ma="events/contributionregistry/contributionsChanged";class lh{constructor(){this.contributions=new Map}registerContribution(t,n){const r=this.getContributions(t);if(n.disabled instanceof Function){const i=n.disabled;n.disabled=new fr.Computed(i)}r.push(n),Ht(Ma,{target:t,contributions:r})}getContributions(t){return this.contributions.has(t)||this.contributions.set(t,[]),this.contributions.get(t)}}const Ct=new lh;mn.put("contributionRegistry",Ct);const ch={},et=xi(null),uo=xi(null),Ss=xi(null),Bc=xi(0),On=xi(void 0);xi({name:"",timestamp:0});class uh{constructor(t,n,r,i,a){this.id=t,this.name=n,this.description=r,this.parameters=i||[],this.output=a||[]}}class Uc{async execute(t,n){return Fe.execute(t,n)}async undo(){}async redo(){}}class dh{constructor(){this.commands={},this.handlers=new Map}registerHandler(t,n){this.handlers.has(t)||this.handlers.set(t,[]),this.handlers.get(t).push(n)}getHandler(t){return this.handlers.get(t)}createExecutionContext(t,n){return{source:t,params:n||{},activePart:et.get(),activeEditor:uo.get()}}execute(t,n={}){const r=this.getHandler(t);if(!r)throw new Error(`No handlers registered for command: ${t}`);for(const i of r)if(i.canExecute===void 0||i.canExecute(n))return i.execute(n);qt.error(`No handler found to execute command: ${t}`)}createAndRegisterCommand(t,n,r,i,a){const o=new uh(t,n,r,i);this.registerCommand(o),a&&this.registerHandler(t,a)}registerCommand(t){this.commands[t.id]=t,qt.debug(`Command registered: ${t.id}`)}hasCommand(t){return t in this.commands}listCommands(t){return t?Object.values(this.commands).filter(n=>(Fe.getHandler(n.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(t))).reduce((n,r)=>(n[r.id]=r,n),{}):this.commands}getCommand(t){return this.commands[t]}registerAll(t){const n=t.command.id;this.registerCommand(t.command),t.handler&&this.registerHandler(n,t.handler),t.contribution&&t.contribution.target&&Ct.registerContribution(t.contribution.target,{command:n,...t.contribution})}}const Fe=new dh;mn.put("commandRegistry",Fe);const Rt=e=>{Fe.registerAll(e)};class hh{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const t=Fe.listCommands();Object.values(t).forEach(n=>{n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)})}watchCommandRegistry(){const t=Fe.registerCommand.bind(Fe);Fe.registerCommand=n=>{t(n),n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)}}parseKeyBinding(t){if(!t||t.trim()==="")return null;const n=t.toUpperCase().split("+").map(o=>o.trim());if(n.length===0)return null;const r={ctrl:!1,alt:!1,shift:!1,meta:!1},i=n[n.length-1],a=n.slice(0,-1);for(const o of a)switch(o){case"CTRL":case"CONTROL":r.ctrl=!0;break;case"ALT":case"OPTION":r.alt=!0;break;case"SHIFT":r.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":r.meta=!0;break;default:qt.warn(`Unknown modifier: ${o}`)}return r.key=this.normalizeKey(i),r}normalizeKey(t){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[t]||t}getBindingKey(t){const n=[];return t.ctrl&&n.push("ctrl"),t.alt&&n.push("alt"),t.shift&&n.push("shift"),t.meta&&n.push("meta"),n.sort(),`${n.join("+")}+${t.key.toUpperCase()}`}registerKeyBinding(t,n){const r=this.parseKeyBinding(n);if(!r)return qt.error(`Invalid key binding: ${n}`),!1;r.commandId=t;const i=this.getBindingKey(r);this.bindings.has(i)||this.bindings.set(i,[]);const a=this.bindings.get(i);return a.find(c=>c.commandId===t)?(qt.error(`Key binding ${n} already registered for command ${t}`),!1):(a.push(r),qt.debug(`Key binding registered: ${n} -> ${t}`),!0)}unregisterKeyBinding(t,n){if(n){const r=this.parseKeyBinding(n);if(r){const i=this.getBindingKey(r),a=this.bindings.get(i);if(a){const o=a.filter(c=>c.commandId!==t);o.length===0?this.bindings.delete(i):this.bindings.set(i,o)}}}else for(const[r,i]of this.bindings.entries()){const a=i.filter(o=>o.commandId!==t);a.length===0?this.bindings.delete(r):this.bindings.set(r,a)}}getKeyBindingsForCommand(t){const n=[];for(const r of this.bindings.values())for(const i of r)i.commandId===t&&n.push(this.formatKeyBinding(i));return n}formatKeyBinding(t){const n=[];t.ctrl&&n.push("Ctrl"),t.alt&&n.push("Alt"),t.shift&&n.push("Shift"),t.meta&&n.push("Cmd");let r=t.key;return r.length===1?r=r.toUpperCase():r=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase(),n.push(r),n.join("+")}handleKeyDown(t){if(!this.enabled)return;const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)){const o=t.key.toUpperCase();if(!((t.ctrlKey||t.metaKey)&&t.shiftKey&&o==="P"))return}const r={commandId:"",key:this.normalizeKey(t.key.toUpperCase()),ctrl:t.ctrlKey,alt:t.altKey,shift:t.shiftKey,meta:t.metaKey},i=this.getBindingKey(r),a=this.bindings.get(i);if(a&&a.length>0){const o=a[0];try{t.preventDefault(),t.stopPropagation();const c=Fe.createExecutionContext(this,{});Fe.execute(o.commandId,c),qt.info(`Executed command via key binding: ${o.commandId}`)}catch(c){qt.error(`Failed to execute command ${o.commandId}: ${c.message}`)}}}setEnabled(t){this.enabled=t}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}qt.debug("KeyBindingManager initializing...");const jc=new hh;qt.debug("KeyBindingManager initialized");mn.put("keyBindingManager",jc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Es=class extends ra{constructor(t){if(super(t),this.it=Mt,t.type!==dr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Mt||t==null)return this._t=void 0,this.it=t;if(t===Br)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Es.directiveName="unsafeHTML",Es.resultType=1;const Dr=na(Es);function Js(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let ki=Js();function Wc(e){ki=e}const Aa={exec:()=>null};function st(e,t=""){let n=typeof e=="string"?e:e.source;const r={replace:(i,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(hn.caret,"$1"),n=n.replace(i,o),r},getRegex:()=>new RegExp(n,t)};return r}const hn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},ph=/^(?:[ \t]*(?:\n|$))+/,fh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,mh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Na=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,gh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Qs=/(?:[*+-]|\d{1,9}[.)])/,Hc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Gc=st(Hc).replace(/bull/g,Qs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),bh=st(Hc).replace(/bull/g,Qs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),el=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,vh=/^[^\n]+/,tl=/(?!\s*\])(?:\\.|[^\[\]\\])+/,yh=st(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",tl).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wh=st(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Qs).getRegex(),Mo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",nl=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,xh=st("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",nl).replace("tag",Mo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Kc=st(el).replace("hr",Na).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mo).getRegex(),kh=st(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Kc).getRegex(),rl={blockquote:kh,code:fh,def:yh,fences:mh,heading:gh,hr:Na,html:xh,lheading:Gc,list:wh,newline:ph,paragraph:Kc,table:Aa,text:vh},jl=st("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Na).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mo).getRegex(),Ih={...rl,lheading:bh,table:jl,paragraph:st(el).replace("hr",Na).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",jl).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Mo).getRegex()},Ch={...rl,html:st(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",nl).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Aa,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:st(el).replace("hr",Na).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Gc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Sh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Eh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Yc=/^( {2,}|\\)\n(?!\s*$)/,Ah=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,No=/[\p{P}\p{S}]/u,il=/[\s\p{P}\p{S}]/u,Xc=/[^\s\p{P}\p{S}]/u,$h=st(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,il).getRegex(),Zc=/(?!~)[\p{P}\p{S}]/u,_h=/(?!~)[\s\p{P}\p{S}]/u,Oh=/(?:[^\s\p{P}\p{S}]|~)/u,Th=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Jc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Lh=st(Jc,"u").replace(/punct/g,No).getRegex(),Dh=st(Jc,"u").replace(/punct/g,Zc).getRegex(),Qc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ph=st(Qc,"gu").replace(/notPunctSpace/g,Xc).replace(/punctSpace/g,il).replace(/punct/g,No).getRegex(),Rh=st(Qc,"gu").replace(/notPunctSpace/g,Oh).replace(/punctSpace/g,_h).replace(/punct/g,Zc).getRegex(),zh=st("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Xc).replace(/punctSpace/g,il).replace(/punct/g,No).getRegex(),Mh=st(/\\(punct)/,"gu").replace(/punct/g,No).getRegex(),Nh=st(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Fh=st(nl).replace("(?:-->|$)","-->").getRegex(),qh=st("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Fh).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),vo=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Vh=st(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",vo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),eu=st(/^!?\[(label)\]\[(ref)\]/).replace("label",vo).replace("ref",tl).getRegex(),tu=st(/^!?\[(ref)\](?:\[\])?/).replace("ref",tl).getRegex(),Bh=st("reflink|nolink(?!\\()","g").replace("reflink",eu).replace("nolink",tu).getRegex(),al={_backpedal:Aa,anyPunctuation:Mh,autolink:Nh,blockSkip:Th,br:Yc,code:Eh,del:Aa,emStrongLDelim:Lh,emStrongRDelimAst:Ph,emStrongRDelimUnd:zh,escape:Sh,link:Vh,nolink:tu,punctuation:$h,reflink:eu,reflinkSearch:Bh,tag:qh,text:Ah,url:Aa},Uh={...al,link:st(/^!?\[(label)\]\((.*?)\)/).replace("label",vo).getRegex(),reflink:st(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",vo).getRegex()},As={...al,emStrongRDelimAst:Rh,emStrongLDelim:Dh,url:st(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},jh={...As,br:st(Yc).replace("{2,}","*").getRegex(),text:st(As.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xa={normal:rl,gfm:Ih,pedantic:Ch},ga={normal:al,gfm:As,breaks:jh,pedantic:Uh},Wh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wl=e=>Wh[e];function ur(e,t){if(t){if(hn.escapeTest.test(e))return e.replace(hn.escapeReplace,Wl)}else if(hn.escapeTestNoEncode.test(e))return e.replace(hn.escapeReplaceNoEncode,Wl);return e}function Hl(e){try{e=encodeURI(e).replace(hn.percentDecode,"%")}catch{return null}return e}function Gl(e,t){var a;const n=e.replace(hn.findPipe,(o,c,p)=>{let g=!1,v=c;for(;--v>=0&&p[v]==="\\";)g=!g;return g?"|":" |"}),r=n.split(hn.splitPipe);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!((a=r.at(-1))!=null&&a.trim())&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(hn.slashPipe,"|");return r}function ba(e,t,n){const r=e.length;if(r===0)return"";let i=0;for(;i<r&&e.charAt(r-i-1)===t;)i++;return e.slice(0,r-i)}function Hh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Kl(e,t,n,r,i){const a=t.href,o=t.title||null,c=e[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;const p={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:a,title:o,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,p}function Gh(e,t,n){const r=e.match(n.other.indentCodeCompensation);if(r===null)return t;const i=r[1];return t.split(`
`).map(a=>{const o=a.match(n.other.beginningSpace);if(o===null)return a;const[c]=o;return c.length>=i.length?a.slice(i.length):a}).join(`
`)}class yo{constructor(t){mt(this,"options");mt(this,"rules");mt(this,"lexer");this.options=t||ki}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const r=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:ba(r,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const r=n[0],i=Gh(r,n[3]||"",this.rules);return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let r=n[2].trim();if(this.rules.other.endingHash.test(r)){const i=ba(r,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:ba(n[0],`
`)}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){let r=ba(n[0],`
`).split(`
`),i="",a="";const o=[];for(;r.length>0;){let c=!1;const p=[];let g;for(g=0;g<r.length;g++)if(this.rules.other.blockquoteStart.test(r[g]))p.push(r[g]),c=!0;else if(!c)p.push(r[g]);else break;r=r.slice(g);const v=p.join(`
`),x=v.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${v}`:v,a=a?`${a}
${x}`:x;const y=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(x,o,!0),this.lexer.state.top=y,r.length===0)break;const I=o.at(-1);if((I==null?void 0:I.type)==="code")break;if((I==null?void 0:I.type)==="blockquote"){const R=I,D=R.raw+`
`+r.join(`
`),U=this.blockquote(D);o[o.length-1]=U,i=i.substring(0,i.length-R.raw.length)+U.raw,a=a.substring(0,a.length-R.text.length)+U.text;break}else if((I==null?void 0:I.type)==="list"){const R=I,D=R.raw+`
`+r.join(`
`),U=this.list(D);o[o.length-1]=U,i=i.substring(0,i.length-I.raw.length)+U.raw,a=a.substring(0,a.length-R.raw.length)+U.raw,r=D.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:o,text:a}}}list(t){let n=this.rules.block.list.exec(t);if(n){let r=n[1].trim();const i=r.length>1,a={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const o=this.rules.other.listItemRegex(r);let c=!1;for(;t;){let g=!1,v="",x="";if(!(n=o.exec(t))||this.rules.block.hr.test(t))break;v=n[0],t=t.substring(v.length);let y=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,q=>" ".repeat(3*q.length)),I=t.split(`
`,1)[0],R=!y.trim(),D=0;if(this.options.pedantic?(D=2,x=y.trimStart()):R?D=n[1].length+1:(D=n[2].search(this.rules.other.nonSpaceChar),D=D>4?1:D,x=y.slice(D),D+=n[1].length),R&&this.rules.other.blankLine.test(I)&&(v+=I+`
`,t=t.substring(I.length+1),g=!0),!g){const q=this.rules.other.nextBulletRegex(D),z=this.rules.other.hrRegex(D),G=this.rules.other.fencesBeginRegex(D),M=this.rules.other.headingBeginRegex(D),S=this.rules.other.htmlBeginRegex(D);for(;t;){const V=t.split(`
`,1)[0];let W;if(I=V,this.options.pedantic?(I=I.replace(this.rules.other.listReplaceNesting,"  "),W=I):W=I.replace(this.rules.other.tabCharGlobal,"    "),G.test(I)||M.test(I)||S.test(I)||q.test(I)||z.test(I))break;if(W.search(this.rules.other.nonSpaceChar)>=D||!I.trim())x+=`
`+W.slice(D);else{if(R||y.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||G.test(y)||M.test(y)||z.test(y))break;x+=`
`+I}!R&&!I.trim()&&(R=!0),v+=V+`
`,t=t.substring(V.length+1),y=W.slice(D)}}a.loose||(c?a.loose=!0:this.rules.other.doubleBlankLine.test(v)&&(c=!0));let U=null,Y;this.options.gfm&&(U=this.rules.other.listIsTask.exec(x),U&&(Y=U[0]!=="[ ] ",x=x.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:v,task:!!U,checked:Y,loose:!1,text:x,tokens:[]}),a.raw+=v}const p=a.items.at(-1);if(p)p.raw=p.raw.trimEnd(),p.text=p.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let g=0;g<a.items.length;g++)if(this.lexer.state.top=!1,a.items[g].tokens=this.lexer.blockTokens(a.items[g].text,[]),!a.loose){const v=a.items[g].tokens.filter(y=>y.type==="space"),x=v.length>0&&v.some(y=>this.rules.other.anyLine.test(y.raw));a.loose=x}if(a.loose)for(let g=0;g<a.items.length;g++)a.items[g].loose=!0;return a}}html(t){const n=this.rules.block.html.exec(t);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(t){const n=this.rules.block.def.exec(t);if(n){const r=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:a}}}table(t){var c;const n=this.rules.block.table.exec(t);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;const r=Gl(n[1]),i=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=(c=n[3])!=null&&c.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const p of i)this.rules.other.tableAlignRight.test(p)?o.align.push("right"):this.rules.other.tableAlignCenter.test(p)?o.align.push("center"):this.rules.other.tableAlignLeft.test(p)?o.align.push("left"):o.align.push(null);for(let p=0;p<r.length;p++)o.header.push({text:r[p],tokens:this.lexer.inline(r[p]),header:!0,align:o.align[p]});for(const p of a)o.rows.push(Gl(p,o.header.length).map((g,v)=>({text:g,tokens:this.lexer.inline(g),header:!1,align:o.align[v]})));return o}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(t){const n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const r=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;const o=ba(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=Hh(n[2],"()");if(o===-2)return;if(o>-1){const p=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,p).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(i);o&&(i=o[1],a=o[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i=i.slice(1):i=i.slice(1,-1)),Kl(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(t,n){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){const i=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=n[i.toLowerCase()];if(!a){const o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return Kl(r,a,r[0],this.lexer,this.rules)}}emStrong(t,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(t);if(!i||i[3]&&r.match(this.rules.other.unicodeAlphaNumeric))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const o=[...i[0]].length-1;let c,p,g=o,v=0;const x=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(x.lastIndex=0,n=n.slice(-1*t.length+o);(i=x.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(p=[...c].length,i[3]||i[4]){g+=p;continue}else if((i[5]||i[6])&&o%3&&!((o+p)%3)){v+=p;continue}if(g-=p,g>0)continue;p=Math.min(p,p+g+v);const y=[...i[0]][0].length,I=t.slice(0,o+i.index+y+p);if(Math.min(o,p)%2){const D=I.slice(1,-1);return{type:"em",raw:I,text:D,tokens:this.lexer.inlineTokens(D)}}const R=I.slice(2,-2);return{type:"strong",raw:I,text:R,tokens:this.lexer.inlineTokens(R)}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let r=n[2].replace(this.rules.other.newLineCharGlobal," ");const i=this.rules.other.nonSpaceChar.test(r),a=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return i&&a&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:n[0],text:r}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t){const n=this.rules.inline.autolink.exec(t);if(n){let r,i;return n[2]==="@"?(r=n[1],i="mailto:"+r):(r=n[1],i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(t){var r;let n;if(n=this.rules.inline.url.exec(t)){let i,a;if(n[2]==="@")i=n[0],a="mailto:"+i;else{let o;do o=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(o!==n[0]);i=n[0],n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t){const n=this.rules.inline.text.exec(t);if(n){const r=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:r}}}}class Un{constructor(t){mt(this,"tokens");mt(this,"options");mt(this,"state");mt(this,"tokenizer");mt(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||ki,this.options.tokenizer=this.options.tokenizer||new yo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:hn,block:Xa.normal,inline:ga.normal};this.options.pedantic?(n.block=Xa.pedantic,n.inline=ga.pedantic):this.options.gfm&&(n.block=Xa.gfm,this.options.breaks?n.inline=ga.breaks:n.inline=ga.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xa,inline:ga}}static lex(t,n){return new Un(n).lex(t)}static lexInline(t,n){return new Un(n).inlineTokens(t)}lex(t){t=t.replace(hn.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){var i,a,o;for(this.options.pedantic&&(t=t.replace(hn.tabCharGlobal,"    ").replace(hn.spaceLine,""));t;){let c;if((a=(i=this.options.extensions)==null?void 0:i.block)!=null&&a.some(g=>(c=g.call({lexer:this},t,n))?(t=t.substring(c.raw.length),n.push(c),!0):!1))continue;if(c=this.tokenizer.space(t)){t=t.substring(c.raw.length);const g=n.at(-1);c.raw.length===1&&g!==void 0?g.raw+=`
`:n.push(c);continue}if(c=this.tokenizer.code(t)){t=t.substring(c.raw.length);const g=n.at(-1);(g==null?void 0:g.type)==="paragraph"||(g==null?void 0:g.type)==="text"?(g.raw+=`
`+c.raw,g.text+=`
`+c.text,this.inlineQueue.at(-1).src=g.text):n.push(c);continue}if(c=this.tokenizer.fences(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.heading(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.hr(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.blockquote(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.list(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.html(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.def(t)){t=t.substring(c.raw.length);const g=n.at(-1);(g==null?void 0:g.type)==="paragraph"||(g==null?void 0:g.type)==="text"?(g.raw+=`
`+c.raw,g.text+=`
`+c.raw,this.inlineQueue.at(-1).src=g.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title});continue}if(c=this.tokenizer.table(t)){t=t.substring(c.raw.length),n.push(c);continue}if(c=this.tokenizer.lheading(t)){t=t.substring(c.raw.length),n.push(c);continue}let p=t;if((o=this.options.extensions)!=null&&o.startBlock){let g=1/0;const v=t.slice(1);let x;this.options.extensions.startBlock.forEach(y=>{x=y.call({lexer:this},v),typeof x=="number"&&x>=0&&(g=Math.min(g,x))}),g<1/0&&g>=0&&(p=t.substring(0,g+1))}if(this.state.top&&(c=this.tokenizer.paragraph(p))){const g=n.at(-1);r&&(g==null?void 0:g.type)==="paragraph"?(g.raw+=`
`+c.raw,g.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=g.text):n.push(c),r=p.length!==t.length,t=t.substring(c.raw.length);continue}if(c=this.tokenizer.text(t)){t=t.substring(c.raw.length);const g=n.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=`
`+c.raw,g.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=g.text):n.push(c);continue}if(t){const g="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var c,p,g;let r=t,i=null;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)v.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let a=!1,o="";for(;t;){a||(o=""),a=!1;let v;if((p=(c=this.options.extensions)==null?void 0:c.inline)!=null&&p.some(y=>(v=y.call({lexer:this},t,n))?(t=t.substring(v.raw.length),n.push(v),!0):!1))continue;if(v=this.tokenizer.escape(t)){t=t.substring(v.raw.length),n.push(v);continue}if(v=this.tokenizer.tag(t)){t=t.substring(v.raw.length),n.push(v);continue}if(v=this.tokenizer.link(t)){t=t.substring(v.raw.length),n.push(v);continue}if(v=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(v.raw.length);const y=n.at(-1);v.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=v.raw,y.text+=v.text):n.push(v);continue}if(v=this.tokenizer.emStrong(t,r,o)){t=t.substring(v.raw.length),n.push(v);continue}if(v=this.tokenizer.codespan(t)){t=t.substring(v.raw.length),n.push(v);continue}if(v=this.tokenizer.br(t)){t=t.substring(v.raw.length),n.push(v);continue}if(v=this.tokenizer.del(t)){t=t.substring(v.raw.length),n.push(v);continue}if(v=this.tokenizer.autolink(t)){t=t.substring(v.raw.length),n.push(v);continue}if(!this.state.inLink&&(v=this.tokenizer.url(t))){t=t.substring(v.raw.length),n.push(v);continue}let x=t;if((g=this.options.extensions)!=null&&g.startInline){let y=1/0;const I=t.slice(1);let R;this.options.extensions.startInline.forEach(D=>{R=D.call({lexer:this},I),typeof R=="number"&&R>=0&&(y=Math.min(y,R))}),y<1/0&&y>=0&&(x=t.substring(0,y+1))}if(v=this.tokenizer.inlineText(x)){t=t.substring(v.raw.length),v.raw.slice(-1)!=="_"&&(o=v.raw.slice(-1)),a=!0;const y=n.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=v.raw,y.text+=v.text):n.push(v);continue}if(t){const y="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return n}}class wo{constructor(t){mt(this,"options");mt(this,"parser");this.options=t||ki}space(t){return""}code({text:t,lang:n,escaped:r}){var o;const i=(o=(n||"").match(hn.notSpaceStart))==null?void 0:o[0],a=t.replace(hn.endingNewline,"")+`
`;return i?'<pre><code class="language-'+ur(i)+'">'+(r?a:ur(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:ur(a,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:n}){return`<h${n}>${this.parser.parseInline(t)}</h${n}>
`}hr(t){return`<hr>
`}list(t){const n=t.ordered,r=t.start;let i="";for(let c=0;c<t.items.length;c++){const p=t.items[c];i+=this.listitem(p)}const a=n?"ol":"ul",o=n&&r!==1?' start="'+r+'"':"";return"<"+a+o+`>
`+i+"</"+a+`>
`}listitem(t){var r;let n="";if(t.task){const i=this.checkbox({checked:!!t.checked});t.loose?((r=t.tokens[0])==null?void 0:r.type)==="paragraph"?(t.tokens[0].text=i+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=i+" "+ur(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):n+=i+" "}return n+=this.parser.parse(t.tokens,!!t.loose),`<li>${n}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let n="",r="";for(let a=0;a<t.header.length;a++)r+=this.tablecell(t.header[a]);n+=this.tablerow({text:r});let i="";for(let a=0;a<t.rows.length;a++){const o=t.rows[a];r="";for(let c=0;c<o.length;c++)r+=this.tablecell(o[c]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+i+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const n=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${ur(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:n,tokens:r}){const i=this.parser.parseInline(r),a=Hl(t);if(a===null)return i;t=a;let o='<a href="'+t+'"';return n&&(o+=' title="'+ur(n)+'"'),o+=">"+i+"</a>",o}image({href:t,title:n,text:r,tokens:i}){i&&(r=this.parser.parseInline(i,this.parser.textRenderer));const a=Hl(t);if(a===null)return ur(r);t=a;let o=`<img src="${t}" alt="${r}"`;return n&&(o+=` title="${ur(n)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:ur(t.text)}}class ol{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}}class jn{constructor(t){mt(this,"options");mt(this,"renderer");mt(this,"textRenderer");this.options=t||ki,this.options.renderer=this.options.renderer||new wo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ol}static parse(t,n){return new jn(n).parse(t)}static parseInline(t,n){return new jn(n).parseInline(t)}parse(t,n=!0){var i,a;let r="";for(let o=0;o<t.length;o++){const c=t[o];if((a=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&a[c.type]){const g=c,v=this.options.extensions.renderers[g.type].call({parser:this},g);if(v!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type)){r+=v||"";continue}}const p=c;switch(p.type){case"space":{r+=this.renderer.space(p);continue}case"hr":{r+=this.renderer.hr(p);continue}case"heading":{r+=this.renderer.heading(p);continue}case"code":{r+=this.renderer.code(p);continue}case"table":{r+=this.renderer.table(p);continue}case"blockquote":{r+=this.renderer.blockquote(p);continue}case"list":{r+=this.renderer.list(p);continue}case"html":{r+=this.renderer.html(p);continue}case"paragraph":{r+=this.renderer.paragraph(p);continue}case"text":{let g=p,v=this.renderer.text(g);for(;o+1<t.length&&t[o+1].type==="text";)g=t[++o],v+=`
`+this.renderer.text(g);n?r+=this.renderer.paragraph({type:"paragraph",raw:v,text:v,tokens:[{type:"text",raw:v,text:v,escaped:!0}]}):r+=v;continue}default:{const g='Token with "'+p.type+'" type was not found.';if(this.options.silent)return console.error(g),"";throw new Error(g)}}}return r}parseInline(t,n=this.renderer){var i,a;let r="";for(let o=0;o<t.length;o++){const c=t[o];if((a=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&a[c.type]){const g=this.options.extensions.renderers[c.type].call({parser:this},c);if(g!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(c.type)){r+=g||"";continue}}const p=c;switch(p.type){case"escape":{r+=n.text(p);break}case"html":{r+=n.html(p);break}case"link":{r+=n.link(p);break}case"image":{r+=n.image(p);break}case"strong":{r+=n.strong(p);break}case"em":{r+=n.em(p);break}case"codespan":{r+=n.codespan(p);break}case"br":{r+=n.br(p);break}case"del":{r+=n.del(p);break}case"text":{r+=n.text(p);break}default:{const g='Token with "'+p.type+'" type was not found.';if(this.options.silent)return console.error(g),"";throw new Error(g)}}}return r}}class $a{constructor(t){mt(this,"options");mt(this,"block");this.options=t||ki}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?Un.lex:Un.lexInline}provideParser(){return this.block?jn.parse:jn.parseInline}}mt($a,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Kh{constructor(...t){mt(this,"defaults",Js());mt(this,"options",this.setOptions);mt(this,"parse",this.parseMarkdown(!0));mt(this,"parseInline",this.parseMarkdown(!1));mt(this,"Parser",jn);mt(this,"Renderer",wo);mt(this,"TextRenderer",ol);mt(this,"Lexer",Un);mt(this,"Tokenizer",yo);mt(this,"Hooks",$a);this.use(...t)}walkTokens(t,n){var i,a;let r=[];for(const o of t)switch(r=r.concat(n.call(this,o)),o.type){case"table":{const c=o;for(const p of c.header)r=r.concat(this.walkTokens(p.tokens,n));for(const p of c.rows)for(const g of p)r=r.concat(this.walkTokens(g.tokens,n));break}case"list":{const c=o;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=o;(a=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&a[c.type]?this.defaults.extensions.childTokens[c.type].forEach(p=>{const g=c[p].flat(1/0);r=r.concat(this.walkTokens(g,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...t){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const o=n.renderers[a.name];o?n.renderers[a.name]=function(...c){let p=a.renderer.apply(this,c);return p===!1&&(p=o.apply(this,c)),p}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=n[a.level];o?o.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),i.extensions=n),r.renderer){const a=this.defaults.renderer||new wo(this.defaults);for(const o in r.renderer){if(!(o in a))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const c=o,p=r.renderer[c],g=a[c];a[c]=(...v)=>{let x=p.apply(a,v);return x===!1&&(x=g.apply(a,v)),x||""}}i.renderer=a}if(r.tokenizer){const a=this.defaults.tokenizer||new yo(this.defaults);for(const o in r.tokenizer){if(!(o in a))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const c=o,p=r.tokenizer[c],g=a[c];a[c]=(...v)=>{let x=p.apply(a,v);return x===!1&&(x=g.apply(a,v)),x}}i.tokenizer=a}if(r.hooks){const a=this.defaults.hooks||new $a;for(const o in r.hooks){if(!(o in a))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const c=o,p=r.hooks[c],g=a[c];$a.passThroughHooks.has(o)?a[c]=v=>{if(this.defaults.async)return Promise.resolve(p.call(a,v)).then(y=>g.call(a,y));const x=p.call(a,v);return g.call(a,x)}:a[c]=(...v)=>{let x=p.apply(a,v);return x===!1&&(x=g.apply(a,v)),x}}i.hooks=a}if(r.walkTokens){const a=this.defaults.walkTokens,o=r.walkTokens;i.walkTokens=function(c){let p=[];return p.push(o.call(this,c)),a&&(p=p.concat(a.call(this,c))),p}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,n){return Un.lex(t,n??this.defaults)}parser(t,n){return jn.parse(t,n??this.defaults)}parseMarkdown(t){return(r,i)=>{const a={...i},o={...this.defaults,...a},c=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=t);const p=o.hooks?o.hooks.provideLexer():t?Un.lex:Un.lexInline,g=o.hooks?o.hooks.provideParser():t?jn.parse:jn.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(r):r).then(v=>p(v,o)).then(v=>o.hooks?o.hooks.processAllTokens(v):v).then(v=>o.walkTokens?Promise.all(this.walkTokens(v,o.walkTokens)).then(()=>v):v).then(v=>g(v,o)).then(v=>o.hooks?o.hooks.postprocess(v):v).catch(c);try{o.hooks&&(r=o.hooks.preprocess(r));let v=p(r,o);o.hooks&&(v=o.hooks.processAllTokens(v)),o.walkTokens&&this.walkTokens(v,o.walkTokens);let x=g(v,o);return o.hooks&&(x=o.hooks.postprocess(x)),x}catch(v){return c(v)}}}onError(t,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const i="<p>An error occurred:</p><pre>"+ur(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const mi=new Kh;function at(e,t){return mi.parse(e,t)}at.options=at.setOptions=function(e){return mi.setOptions(e),at.defaults=mi.defaults,Wc(at.defaults),at};at.getDefaults=Js;at.defaults=ki;at.use=function(...e){return mi.use(...e),at.defaults=mi.defaults,Wc(at.defaults),at};at.walkTokens=function(e,t){return mi.walkTokens(e,t)};at.parseInline=mi.parseInline;at.Parser=jn;at.parser=jn.parse;at.Renderer=wo;at.TextRenderer=ol;at.Lexer=Un;at.lexer=Un.lex;at.Tokenizer=yo;at.Hooks=$a;at.parse=at;at.options;at.setOptions;at.use;at.walkTokens;at.parseInline;jn.parse;Un.lex;let va=null;function sl(){return va||(va=document.createElement("div"),va.id="global-dialog-container",document.body.appendChild(va)),va}function ll(e){return new Promise(t=>{const n=sl(),r=()=>{qi(_``,n)},i=()=>{r(),t(e.confirmValue)},a=()=>{r(),t(e.cancelValue)},o=_`
            <wa-dialog label="${e.title}" open @wa-request-close=${a}>
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
                    ${e.renderContent({onConfirm:i,onCancel:a})}
                </div>
            </wa-dialog>
        `;qi(o,n),e.onAfterRender&&requestAnimationFrame(e.onAfterRender)})}function Fo(e,t=!1){if(t){const n=at.parse(e,{async:!1});return _`<div class="dialog-message markdown-content" style="white-space: normal;">${Dr(n)}</div>`}return _`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}const Fa=async(e,t="",n=!1)=>{let r=t;return ll({title:"Input",message:e,markdown:n,confirmValue:r,cancelValue:null,renderContent:({onConfirm:i,onCancel:a})=>{const o=p=>{r=p.target.value},c=p=>{p.key==="Enter"?(p.preventDefault(),i()):p.key==="Escape"&&(p.preventDefault(),a())};return _`
                ${Fo(e,n)}
                <wa-input
                    value="${t}"
                    @input=${o}
                    @keydown=${c}
                    autofocus
                ></wa-input>
                
                <div class="dialog-actions">
                    <wa-button variant="default" @click=${a}>
                        Cancel
                    </wa-button>
                    <wa-button variant="primary" @click=${()=>{i()}}>
                        OK
                    </wa-button>
                </div>
            `},onAfterRender:()=>{var o;const a=sl().querySelector("wa-input");if(a){const c=(o=a.shadowRoot)==null?void 0:o.querySelector("input");c&&(c.focus(),c.select())}}}).then(()=>r)},ia=async(e,t=!1)=>ll({title:"Confirm",message:e,markdown:t,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:n,onCancel:r})=>_`
            ${Fo(e,t)}
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${r}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${n}>
                    OK
                </wa-button>
            </div>
        `}),$s=async(e,t,n=!1)=>{await ll({title:e,message:t,markdown:n,confirmValue:void 0,cancelValue:void 0,renderContent:({onConfirm:r})=>_`
            ${Fo(t,n)}
            
            <div class="dialog-actions">
                <wa-button variant="primary" @click=${r}>
                    OK
                </wa-button>
            </div>
        `})},nu=async(e,t,n,r=!1)=>new Promise(i=>{const a=sl();let o=!0;const c=()=>{o&&(o=!1,qi(_``,a),i())},p=(g,v,x)=>{if(!o)return;const y=_`
                <wa-dialog label="${g}" open @wa-request-close=${c}>
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
                            ${Fo(v,r)}
                        </wa-scroller>
                        
                        <div class="dialog-actions">
                            <div class="dialog-actions-left">
                                ${x.filter(I=>I.label!=="Close").map(I=>_`
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
                                ${x.filter(I=>I.label==="Close").map(I=>_`
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
            `;qi(y,a)};n.updateDialog=p,p(e,t,n)});ar.put("promptDialog",Fa);ar.put("confirmDialog",ia);ar.put("infoDialog",$s);ar.put("navigableInfoDialog",nu);const _s=new Set,Pi=new Map;let ui,cl="ltr",ul="en";const ru=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ru){const e=new MutationObserver(au);cl=document.documentElement.dir||"ltr",ul=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function iu(...e){e.map(t=>{const n=t.$code.toLowerCase();Pi.has(n)?Pi.set(n,Object.assign(Object.assign({},Pi.get(n)),t)):Pi.set(n,t),ui||(ui=t)}),au()}function au(){ru&&(cl=document.documentElement.dir||"ltr",ul=document.documentElement.lang||navigator.language),[..._s.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Yh=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){_s.add(this.host)}hostDisconnected(){_s.delete(this.host)}dir(){return`${this.host.dir||cl}`.toLowerCase()}lang(){return`${this.host.lang||ul}`.toLowerCase()}getTranslationData(t){var n,r;const i=new Intl.Locale(t.replace(/_/g,"-")),a=i==null?void 0:i.language.toLowerCase(),o=(r=(n=i==null?void 0:i.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&r!==void 0?r:"",c=Pi.get(`${a}-${o}`),p=Pi.get(a);return{locale:i,language:a,region:o,primary:c,secondary:p}}exists(t,n){var r;const{primary:i,secondary:a}=this.getTranslationData((r=n.lang)!==null&&r!==void 0?r:this.lang());return n=Object.assign({includeFallback:!1},n),!!(i&&i[t]||a&&a[t]||n.includeFallback&&ui&&ui[t])}term(t,...n){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let a;if(r&&r[t])a=r[t];else if(i&&i[t])a=i[t];else if(ui&&ui[t])a=ui[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof a=="function"?a(...n):a}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,n)}};var ou={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};iu(ou);var Xh=ou,it=class extends Yh{};iu(Xh);var dl=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}},Os="",Ts="";function Yl(e){Os=e}function Zh(e=""){if(!Os){const t=document.querySelector("[data-webawesome]");if(t!=null&&t.hasAttribute("data-webawesome")){const n=new URL(t.getAttribute("data-webawesome")??"",window.location.href).pathname;Yl(n)}else{const r=[...document.getElementsByTagName("script")].find(i=>i.src.endsWith("webawesome.js")||i.src.endsWith("webawesome.loader.js")||i.src.endsWith("webawesome.ssr-loader.js"));if(r){const i=String(r.getAttribute("src"));Yl(i.split("/").slice(0,-1).join("/"))}}}return Os.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}function Jh(e){Ts=e}function Qh(){if(!Ts){const e=document.querySelector("[data-fa-kit-code]");e&&Jh(e.getAttribute("data-fa-kit-code")||"")}return Ts}var $r="7.0.1";function ep(e,t,n){const r=Qh(),i=r.length>0;let a="solid";return t==="notdog"?(n==="solid"&&(a="solid"),n==="duo-solid"&&(a="duo-solid"),`https://ka-p.fontawesome.com/releases/v${$r}/svgs/notdog-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t==="chisel"?`https://ka-p.fontawesome.com/releases/v${$r}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t==="etch"?`https://ka-p.fontawesome.com/releases/v${$r}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t==="jelly"?(n==="regular"&&(a="regular"),n==="duo-regular"&&(a="duo-regular"),n==="fill-regular"&&(a="fill-regular"),`https://ka-p.fontawesome.com/releases/v${$r}/svgs/jelly-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t==="slab"?((n==="solid"||n==="regular")&&(a="regular"),n==="press-regular"&&(a="press-regular"),`https://ka-p.fontawesome.com/releases/v${$r}/svgs/slab-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t==="thumbprint"?`https://ka-p.fontawesome.com/releases/v${$r}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t==="whiteboard"?`https://ka-p.fontawesome.com/releases/v${$r}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t==="classic"&&(n==="thin"&&(a="thin"),n==="light"&&(a="light"),n==="regular"&&(a="regular"),n==="solid"&&(a="solid")),t==="sharp"&&(n==="thin"&&(a="sharp-thin"),n==="light"&&(a="sharp-light"),n==="regular"&&(a="sharp-regular"),n==="solid"&&(a="sharp-solid")),t==="duotone"&&(n==="thin"&&(a="duotone-thin"),n==="light"&&(a="duotone-light"),n==="regular"&&(a="duotone-regular"),n==="solid"&&(a="duotone")),t==="sharp-duotone"&&(n==="thin"&&(a="sharp-duotone-thin"),n==="light"&&(a="sharp-duotone-light"),n==="regular"&&(a="sharp-duotone-regular"),n==="solid"&&(a="sharp-duotone-solid")),t==="brands"&&(a="brands"),i?`https://ka-p.fontawesome.com/releases/v${$r}/svgs/${a}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${$r}/svgs/${a}/${e}.svg`)}var tp={name:"default",resolver:(e,t="classic",n="solid")=>ep(e,t,n),mutator:(e,t)=>{if(t!=null&&t.family&&!e.hasAttribute("data-duotone-initialized")){const{family:n,variant:r}=t;if(n==="duotone"||n==="sharp-duotone"||n==="notdog"&&r==="duo-solid"||n==="jelly"&&r==="duo-regular"||n==="thumbprint"){const i=[...e.querySelectorAll("path")],a=i.find(c=>!c.hasAttribute("opacity")),o=i.find(c=>c.hasAttribute("opacity"));if(!a||!o)return;if(a.setAttribute("data-duotone-primary",""),o.setAttribute("data-duotone-secondary",""),t.swapOpacity&&a&&o){const c=o.getAttribute("opacity")||"0.4";a.style.setProperty("--path-opacity",c),o.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},np=tp;function rp(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var as={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},ip={name:"system",resolver:(e,t="classic",n="solid")=>{let i=as[n][e]??as.regular[e]??as.regular["circle-question"];return i?rp(i):""}},ap=ip,op="classic",xo=[np,ap],ko=[];function sp(e){ko.push(e)}function lp(e){ko=ko.filter(t=>t!==e)}function os(e){return xo.find(t=>t.name===e)}function su(e,t){cp(e),xo.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),ko.forEach(n=>{n.library===e&&n.setIcon()})}function cp(e){xo=xo.filter(t=>t.name!==e)}function up(){return op}function me(e,t){const n={waitUntilFirstUpdate:!1,...t};return(r,i)=>{const{update:a}=r,o=Array.isArray(e)?e:[e];r.update=function(c){o.forEach(p=>{const g=p;if(c.has(g)){const v=c.get(g),x=this[g];v!==x&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[i](v,x)}}),a.call(this,c)}}}var dp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,lu=e=>{throw TypeError(e)},l=(e,t,n,r)=>{for(var i=r>1?void 0:r?hp(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&dp(t,n,i),i},cu=(e,t,n)=>t.has(e)||lu("Cannot "+n),pp=(e,t,n)=>(cu(e,t,"read from private field"),t.get(e)),fp=(e,t,n)=>t.has(e)?lu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),mp=(e,t,n,r)=>(cu(e,t,"write to private field"),t.set(e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=e=>(t,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gp={attribute:!0,type:String,converter:gd,reflect:!1,hasChanged:md},bp=(e=gp,t,n)=>{const{kind:r,metadata:i}=n;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(c){const p=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,p,e)},init(c){return c!==void 0&&this.C(o,void 0,e,c),c}}}if(r==="setter"){const{name:o}=n;return function(c){const p=this[o];t.call(this,c),this.requestUpdate(o,p,e)}}throw Error("Unsupported decorator location: "+r)};function f(e){return(t,n)=>typeof n=="object"?bp(e,t,n):((r,i,a)=>{const o=i.hasOwnProperty(a);return i.constructor.createProperty(a,r),o?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qo(e){return(t,n)=>{const r=typeof t=="function"?t:t[n];Object.assign(r,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hl=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(e,t){return(n,r,i)=>{const a=o=>{var c;return((c=o.renderRoot)==null?void 0:c.querySelector(e))??null};return hl(n,r,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vp;function yp(e){return(t,n)=>hl(t,n,{get(){return(this.renderRoot??vp??(vp=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wp(e){return(t,n)=>hl(t,n,{async get(){var r;return await this.updateComplete,((r=this.renderRoot)==null?void 0:r.querySelector(e))??null}})}var xp=`:host {
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
`,ho,Oe=class extends Hs{constructor(){super(),fp(this,ho,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,n)=>{var r;(r=this.internals)!=null&&r.states&&(n?this.internals.states.add(t):this.internals.states.delete(t))},has:t=>{var n;return(n=this.internals)!=null&&n.states?this.internals.states.has(t):!1}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default==="inherit"&&n.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){const e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[xp,...e].map(t=>typeof t=="string"?Pc(t):t)}attributeChangedCallback(e,t,n){pp(this,ho)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),mp(this,ho,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){var t;super.firstUpdated(e),this.didSSR&&((t=this.shadowRoot)==null||t.querySelectorAll("slot").forEach(n=>{n.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}))}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){const n=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});n.error=t,this.dispatchEvent(n)}throw t}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};ho=new WeakMap;l([f()],Oe.prototype,"dir",2);l([f()],Oe.prototype,"lang",2);l([f({type:Boolean,reflect:!0,attribute:"did-ssr"})],Oe.prototype,"didSSR",2);var zi=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},kp=`:host {
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
`,ya=Symbol(),Za=Symbol(),ss,ls=new Map,kn=class extends Oe{constructor(){super(...arguments),this.svg=null,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(e,t)=>{var r;let n;if(t!=null&&t.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=_`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(i,this),this.svg}try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?ya:Za}catch{return Za}try{const i=document.createElement("div");i.innerHTML=await n.text();const a=i.firstElementChild;if(((r=a==null?void 0:a.tagName)==null?void 0:r.toLowerCase())!=="svg")return ya;ss||(ss=new DOMParser);const c=ss.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):ya}catch{return ya}}}connectedCallback(){super.connectedCallback(),sp(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),lp(this)}getIconSource(){const e=os(this.library),t=this.family||up();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var a;const{url:e,fromLibrary:t}=this.getIconSource(),n=t?os(this.library):void 0;if(!e){this.svg=null;return}let r=ls.get(e);r||(r=this.resolveIcon(e,n),ls.set(e,r));const i=await r;if(i===Za&&ls.delete(e),e===this.getIconSource().url){if(bd(i)){this.svg=i;return}switch(i){case Za:case ya:this.svg=null,this.dispatchEvent(new zi);break;default:this.svg=i.cloneNode(!0),(a=n==null?void 0:n.mutator)==null||a.call(n,this.svg,this),this.dispatchEvent(new dl)}}}updated(e){var r,i;super.updated(e);const t=os(this.library),n=(r=this.shadowRoot)==null?void 0:r.querySelector("svg");n&&((i=t==null?void 0:t.mutator)==null||i.call(t,n,this))}render(){return this.hasUpdated?this.svg:_`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};kn.css=kp;l([pe()],kn.prototype,"svg",2);l([f({reflect:!0})],kn.prototype,"name",2);l([f({reflect:!0})],kn.prototype,"family",2);l([f({reflect:!0})],kn.prototype,"variant",2);l([f({attribute:"auto-width",type:Boolean,reflect:!0})],kn.prototype,"autoWidth",2);l([f({attribute:"swap-opacity",type:Boolean,reflect:!0})],kn.prototype,"swapOpacity",2);l([f()],kn.prototype,"src",2);l([f()],kn.prototype,"label",2);l([f({reflect:!0})],kn.prototype,"library",2);l([me("label")],kn.prototype,"handleLabelChange",1);l([me(["family","name","library","variant","src","autoWidth","swapOpacity"])],kn.prototype,"setIcon",1);kn=l([ue("wa-icon")],kn);var Ip=`:host {
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
`,Qn=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.isLoaded=!1}handleClick(){this.play=!this.play}handleKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.play=!this.play)}handleLoad(){const e=document.createElement("canvas"),{width:t,height:n}=this.animatedImage;e.width=t,e.height=n,e.getContext("2d").drawImage(this.animatedImage,0,0,t,n),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.dispatchEvent(new dl),this.isLoaded=!0)}handleError(){this.dispatchEvent(new zi)}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){const t=`${this.localize.term(this.play?"pauseAnimation":"playAnimation")} ${this.alt}`;return _`
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

        ${this.isLoaded?_`
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
    `}};Qn.css=Ip;l([ce(".animated")],Qn.prototype,"animatedImage",2);l([pe()],Qn.prototype,"frozenFrame",2);l([pe()],Qn.prototype,"isLoaded",2);l([f()],Qn.prototype,"src",2);l([f()],Qn.prototype,"alt",2);l([f({type:Boolean,reflect:!0})],Qn.prototype,"play",2);l([me("play",{waitUntilFirstUpdate:!0})],Qn.prototype,"handlePlayChange",1);l([me("src")],Qn.prototype,"handleSrcChange",1);Qn=l([ue("wa-animated-image")],Qn);const Cp=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Sp=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Ep=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Ap=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],$p=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],_p=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Op=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Tp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Lp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Dp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pp=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Rp=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],zp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Mp=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Np=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Fp=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],qp=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Vp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Bp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Up=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],jp=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Wp=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Hp=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Gp=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Kp=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Yp=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Xp=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Zp=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Jp=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Qp=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],ef=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],tf=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],nf=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rf=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],af=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],of=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sf=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lf=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cf=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],uf=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],df=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hf=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pf=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ff=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mf=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],gf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],bf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],vf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],yf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],wf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],xf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],kf=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],If=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Cf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Sf=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Ef=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Af=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],$f=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],_f=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Of=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Tf=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Lf=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Df=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pf=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rf=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],zf=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Mf=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Nf=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ff=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],qf=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Vf=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Bf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Uf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],jf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Wf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Hf=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Gf=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Kf=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Yf=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Xf=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Zf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Jf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Qf=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],em=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],tm=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],nm=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],rm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],im=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],am=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],om=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],sm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],lm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],cm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],um=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],dm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],hm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],pm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],fm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],uu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},mm=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Mp,backInLeft:Np,backInRight:Fp,backInUp:qp,backOutDown:Vp,backOutLeft:Bp,backOutRight:Up,backOutUp:jp,bounce:Cp,bounceIn:Wp,bounceInDown:Hp,bounceInLeft:Gp,bounceInRight:Kp,bounceInUp:Yp,bounceOut:Xp,bounceOutDown:Zp,bounceOutLeft:Jp,bounceOutRight:Qp,bounceOutUp:ef,easings:uu,fadeIn:tf,fadeInBottomLeft:nf,fadeInBottomRight:rf,fadeInDown:af,fadeInDownBig:of,fadeInLeft:sf,fadeInLeftBig:lf,fadeInRight:cf,fadeInRightBig:uf,fadeInTopLeft:df,fadeInTopRight:hf,fadeInUp:pf,fadeInUpBig:ff,fadeOut:mf,fadeOutBottomLeft:gf,fadeOutBottomRight:bf,fadeOutDown:vf,fadeOutDownBig:yf,fadeOutLeft:wf,fadeOutLeftBig:xf,fadeOutRight:kf,fadeOutRightBig:If,fadeOutTopLeft:Cf,fadeOutTopRight:Sf,fadeOutUp:Ef,fadeOutUpBig:Af,flash:Sp,flip:$f,flipInX:_f,flipInY:Of,flipOutX:Tf,flipOutY:Lf,headShake:Ep,heartBeat:Ap,hinge:tm,jackInTheBox:nm,jello:$p,lightSpeedInLeft:Df,lightSpeedInRight:Pf,lightSpeedOutLeft:Rf,lightSpeedOutRight:zf,pulse:_p,rollIn:rm,rollOut:im,rotateIn:Mf,rotateInDownLeft:Nf,rotateInDownRight:Ff,rotateInUpLeft:qf,rotateInUpRight:Vf,rotateOut:Bf,rotateOutDownLeft:Uf,rotateOutDownRight:jf,rotateOutUpLeft:Wf,rotateOutUpRight:Hf,rubberBand:Op,shake:Tp,shakeX:Lp,shakeY:Dp,slideInDown:Gf,slideInLeft:Kf,slideInRight:Yf,slideInUp:Xf,slideOutDown:Zf,slideOutLeft:Jf,slideOutRight:Qf,slideOutUp:em,swing:Pp,tada:Rp,wobble:zp,zoomIn:am,zoomInDown:om,zoomInLeft:sm,zoomInRight:lm,zoomInUp:cm,zoomOut:um,zoomOutDown:dm,zoomOutLeft:hm,zoomOutRight:pm,zoomOutUp:fm},Symbol.toStringTag,{value:"Module"}));var gm=class extends Event{constructor(){super("wa-cancel",{bubbles:!0,cancelable:!1,composed:!0})}},bm=class extends Event{constructor(){super("wa-finish",{bubbles:!0,cancelable:!1,composed:!0})}},Xl=class extends Event{constructor(){super("wa-start",{bubbles:!0,cancelable:!1,composed:!0})}},vm=`:host {
  display: contents;
}
`,Vt=class extends Oe{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new bm)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.dispatchEvent(new gm)}}get currentTime(){var e;return((e=this.animation)==null?void 0:e.currentTime)??0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){const e=uu[this.easing]??this.easing,t=this.keyframes??mm[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!t?!1:(this.destroyAnimation(),this.animation=r.animate(t,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.dispatchEvent(new Xl)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.dispatchEvent(new Xl)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return _` <slot @slotchange=${this.handleSlotChange}></slot> `}};Vt.css=vm;l([wp("slot")],Vt.prototype,"defaultSlot",2);l([f()],Vt.prototype,"name",2);l([f({type:Boolean,reflect:!0})],Vt.prototype,"play",2);l([f({type:Number})],Vt.prototype,"delay",2);l([f()],Vt.prototype,"direction",2);l([f({type:Number})],Vt.prototype,"duration",2);l([f()],Vt.prototype,"easing",2);l([f({attribute:"end-delay",type:Number})],Vt.prototype,"endDelay",2);l([f()],Vt.prototype,"fill",2);l([f({type:Number})],Vt.prototype,"iterations",2);l([f({attribute:"iteration-start",type:Number})],Vt.prototype,"iterationStart",2);l([f({attribute:!1})],Vt.prototype,"keyframes",2);l([f({attribute:"playback-rate",type:Number})],Vt.prototype,"playbackRate",2);l([me(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Vt.prototype,"handleAnimationChange",1);l([me("play")],Vt.prototype,"handlePlayChange",1);l([me("playbackRate")],Vt.prototype,"handlePlaybackRateChange",1);Vt=l([ue("wa-animation")],Vt);var ym=`:host {
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
`,gr=class extends Oe{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.dispatchEvent(new zi)}render(){const e=_`
      <img
        part="image"
        class="image"
        src="${this.image}"
        loading="${this.loading}"
        role="img"
        aria-label=${this.label}
        @error="${this.handleImageLoadError}"
      />
    `;let t=_``;return this.initials?t=_`<div part="initials" class="initials" role="img" aria-label=${this.label}>
        ${this.initials}
      </div>`:t=_`
        <slot name="icon" part="icon" class="icon" role="img" aria-label=${this.label}>
          <wa-icon name="user" library="system" variant="solid"></wa-icon>
        </slot>
      `,_` ${this.image&&!this.hasError?e:t} `}};gr.css=ym;l([pe()],gr.prototype,"hasError",2);l([f()],gr.prototype,"image",2);l([f()],gr.prototype,"label",2);l([f()],gr.prototype,"initials",2);l([f()],gr.prototype,"loading",2);l([f({reflect:!0})],gr.prototype,"shape",2);l([me("image")],gr.prototype,"handleImageChange",1);gr=l([ue("wa-avatar")],gr);var qa=`@layer wa-utilities {
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
`,wm=`:host {
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
:host([appearance~='outlined']) {
  --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

  color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
  background-color: transparent;
  border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
}

:host([appearance~='filled']) {
  --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

  color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
  background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
  border-color: transparent;
}

:host([appearance~='filled'][appearance~='outlined']) {
  --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

  border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
}

:host([appearance~='accent']) {
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
`,gi=class extends Oe{constructor(){super(...arguments),this.variant="brand",this.appearance="accent",this.pill=!1,this.attention="none"}render(){return _` <slot part="base" role="status"></slot>`}};gi.css=[qa,wm];l([f({reflect:!0})],gi.prototype,"variant",2);l([f({reflect:!0})],gi.prototype,"appearance",2);l([f({type:Boolean,reflect:!0})],gi.prototype,"pill",2);l([f({reflect:!0})],gi.prototype,"attention",2);gi=l([ue("wa-badge")],gi);var xm=`.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
`,Bi=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="wa-breadcrumb-item");e.forEach((t,n)=>{const r=t.querySelector('[slot="separator"]');r===null?t.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),_`
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
    `}};Bi.css=xm;l([ce("slot")],Bi.prototype,"defaultSlot",2);l([ce('slot[name="separator"]')],Bi.prototype,"separatorSlot",2);l([f()],Bi.prototype,"label",2);Bi=l([ue("wa-breadcrumb")],Bi);var Vo=()=>({checkValidity(e){const t=e.input,n={message:"",isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if("checkValidity"in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,"validationMessage"in t&&(n.message=t.validationMessage),!("validity"in t))return n.invalidKeys.push("customError"),n;for(const i in t.validity){if(i==="valid")continue;const a=i;t.validity[a]&&n.invalidKeys.push(a)}return n}}),pl=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},km=()=>({observedAttributes:["custom-error"],checkValidity(e){const t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),St=class extends Oe{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new pl))},this.handleInteraction=e=>{var n;const t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===((n=this.assumeInteractionOn)==null?void 0:n.length)&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[km()]}static get observedAttributes(){const e=new Set(super.observedAttributes||[]);for(const t of this.validators)if(t.observedAttributes)for(const n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")){const t=this.value;if(Array.isArray(t)){if(this.name){const n=new FormData;for(const r of t)n.append(this.name,r);this.setValue(n,n)}}else this.setValue(t,t)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){const t=e[0],n=e[1];let r=e[2];r||(r=this.validationTarget),this.internals.setValidity(t,n,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&n),this.customStates.set("user-valid",t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){const[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){const e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const e=this.allValidators;if(!(e!=null&&e.length))return;const t={customError:!!this.customError},n=this.validationTarget||this.input||void 0;let r="";for(const i of e){const{isValid:a,message:o,invalidKeys:c}=i.checkValidity(this);a||(r||(r=o),(c==null?void 0:c.length)>=0&&c.forEach(p=>t[p]=!0))}r||(r=this.validationMessage),this.setValidity(t,r,n)}};St.formAssociated=!0;l([f({reflect:!0})],St.prototype,"name",2);l([f({type:Boolean})],St.prototype,"disabled",2);l([f({state:!0,attribute:!1})],St.prototype,"valueHasChanged",2);l([f({state:!0,attribute:!1})],St.prototype,"hasInteracted",2);l([f({attribute:"custom-error",reflect:!0})],St.prototype,"customError",2);l([f({attribute:!1,state:!0,type:Object})],St.prototype,"validity",1);var zn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const r=n.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},gn=`@layer wa-utilities {
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
 */const qe=na(class extends ra{constructor(e){var t;if(super(e),e.type!==dr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((a=>a!==""))));for(const a in t)t[a]&&!((r=this.nt)!=null&&r.has(a))&&this.st.add(a);return this.render(t)}const n=e.element.classList;for(const a of this.st)a in t||(n.remove(a),this.st.delete(a));for(const a in t){const o=!!t[a];o===this.st.has(a)||(i=this.nt)!=null&&i.has(a)||(o?(n.add(a),this.st.add(a)):(n.remove(a),this.st.delete(a)))}return Br}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=e=>e??Mt;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const du=Symbol.for(""),Im=e=>{if((e==null?void 0:e.r)===du)return e==null?void 0:e._$litStatic$},Zl=(e,...t)=>({_$litStatic$:t.reduce(((n,r,i)=>n+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[i+1]),e[0]),r:du}),Jl=new Map,Cm=e=>(t,...n)=>{const r=n.length;let i,a;const o=[],c=[];let p,g=0,v=!1;for(;g<r;){for(p=t[g];g<r&&(a=n[g],(i=Im(a))!==void 0);)p+=i+t[++g],v=!0;g!==r&&c.push(a),o.push(p),g++}if(g===r&&o.push(t[r]),v){const x=o.join("$$lit$$");(t=Jl.get(x))===void 0&&(o.raw=o,Jl.set(x,t=o)),n=c}return e(t,...n)},cs=Cm(_);var Sm=`@layer wa-component {
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
:host([appearance~='plain']) {
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

:host([appearance~='outlined']) {
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

:host([appearance~='filled']) {
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

:host([appearance~='filled'][appearance~='outlined']) .button {
  border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
}

:host([appearance~='accent']) {
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

wa-icon[part~='caret'] {
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

button ::slotted(wa-badge) {
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
.button:not(.visually-hidden-label) [part~='caret'] {
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
`,ut=class extends St{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new zn(this,"[default]","start","end"),this.localize=new it(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,Vo()]}constructLightDOMButton(){const e=document.createElement("button");return e.type=this.type,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",this.name&&(e.name=this.name),e.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){var n;if(!this.getForm())return;const t=this.constructLightDOMButton();(n=this.parentElement)==null||n.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new pl)}handleLabelSlotChange(){const e=this.labelSlot.assignedNodes({flatten:!0});let t=!1,n=!1,r="";[...e].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&i.localName==="wa-icon"&&(n=!0,t||(t=i.hasAttribute("label"))),i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),this.isIconButton=r.trim()===""&&n,this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=this.isLink(),t=e?Zl`a`:Zl`button`;return cs`
      <${t}
        part="base"
        class=${qe({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${Le(e?void 0:this.disabled)}
        type=${Le(e?void 0:this.type)}
        title=${this.title}
        name=${Le(e?void 0:this.name)}
        value=${Le(e?void 0:this.value)}
        href=${Le(e?this.href:void 0)}
        target=${Le(e?this.target:void 0)}
        download=${Le(e?this.download:void 0)}
        rel=${Le(e&&this.rel?this.rel:void 0)}
        role=${Le(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?cs`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?cs`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};ut.css=[Sm,qa,gn];l([ce(".button")],ut.prototype,"button",2);l([ce("slot:not([name])")],ut.prototype,"labelSlot",2);l([pe()],ut.prototype,"invalid",2);l([pe()],ut.prototype,"isIconButton",2);l([f()],ut.prototype,"title",2);l([f({reflect:!0})],ut.prototype,"variant",2);l([f({reflect:!0})],ut.prototype,"appearance",2);l([f({reflect:!0})],ut.prototype,"size",2);l([f({attribute:"with-caret",type:Boolean,reflect:!0})],ut.prototype,"withCaret",2);l([f({type:Boolean})],ut.prototype,"disabled",2);l([f({type:Boolean,reflect:!0})],ut.prototype,"loading",2);l([f({type:Boolean,reflect:!0})],ut.prototype,"pill",2);l([f()],ut.prototype,"type",2);l([f({reflect:!0})],ut.prototype,"name",2);l([f({reflect:!0})],ut.prototype,"value",2);l([f({reflect:!0})],ut.prototype,"href",2);l([f()],ut.prototype,"target",2);l([f()],ut.prototype,"rel",2);l([f()],ut.prototype,"download",2);l([f({reflect:!0})],ut.prototype,"form",2);l([f({attribute:"formaction"})],ut.prototype,"formAction",2);l([f({attribute:"formenctype"})],ut.prototype,"formEnctype",2);l([f({attribute:"formmethod"})],ut.prototype,"formMethod",2);l([f({attribute:"formnovalidate",type:Boolean})],ut.prototype,"formNoValidate",2);l([f({attribute:"formtarget"})],ut.prototype,"formTarget",2);l([me("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);ut=l([ue("wa-button")],ut);var Em=`:host {
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
`,Ls=class extends Oe{constructor(){super(...arguments),this.localize=new it(this)}render(){return _`
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
    `}};Ls.css=Em;Ls=l([ue("wa-spinner")],Ls);var Am=`:host {
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
`,Pr=class extends Oe{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal",this.variant="neutral"}updated(e){super.updated(e),e.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(e){const t=wa(e.target);t==null||t.classList.add("button-focus")}handleBlur(e){const t=wa(e.target);t==null||t.classList.remove("button-focus")}handleMouseOver(e){const t=wa(e.target);t==null||t.classList.add("button-hover")}handleMouseOut(e){const t=wa(e.target);t==null||t.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,e.forEach(t=>{const n=e.indexOf(t),r=wa(t);r&&(r.appearance==="outlined"&&(this.hasOutlined=!0),r.classList.add("wa-button-group__button"),r.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),r.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),r.classList.toggle("wa-button-group__button-first",n===0),r.classList.toggle("wa-button-group__button-inner",n>0&&n<e.length-1),r.classList.toggle("wa-button-group__button-last",n===e.length-1),r.classList.toggle("wa-button-group__button-radio",r.tagName.toLowerCase()==="wa-radio-button"))})}render(){return _`
      <slot
        part="base"
        class=${qe({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};Pr.css=[qa,Am];l([ce("slot")],Pr.prototype,"defaultSlot",2);l([pe()],Pr.prototype,"disableRole",2);l([pe()],Pr.prototype,"hasOutlined",2);l([f()],Pr.prototype,"label",2);l([f({reflect:!0})],Pr.prototype,"orientation",2);l([f({reflect:!0})],Pr.prototype,"variant",2);Pr=l([ue("wa-button-group")],Pr);function wa(e){const t="wa-button, wa-radio-button";return e.closest(t)??e.querySelector(t)}var $m=`:host {
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

:host([appearance~='filled'][appearance~='outlined']) {
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
`,Ui=class extends Oe{constructor(){super(...arguments),this.variant="brand",this.appearance="outlined filled",this.size="medium"}render(){return _`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};Ui.css=[$m,qa,gn];l([f({reflect:!0})],Ui.prototype,"variant",2);l([f({reflect:!0})],Ui.prototype,"appearance",2);l([f({reflect:!0})],Ui.prototype,"size",2);Ui=l([ue("wa-callout")],Ui);var _m=`:host {
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block-start-style: inherit;
  border-block-start-color: var(--wa-color-surface-border);
  border-block-start-width: var(--wa-panel-border-width);
  padding: var(--spacing);
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
    object-fit: cover;
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
`,jr=class extends Oe{constructor(){super(...arguments),this.hasSlotController=new zn(this,"footer","header","media"),this.appearance="outlined",this.withHeader=!1,this.withMedia=!1,this.withFooter=!1,this.orientation="vertical"}updated(){!this.withHeader&&this.hasSlotController.test("header")&&(this.withHeader=!0),!this.withMedia&&this.hasSlotController.test("media")&&(this.withMedia=!0),!this.withFooter&&this.hasSlotController.test("footer")&&(this.withFooter=!0)}render(){return this.orientation==="horizontal"?_`
        <slot name="media" part="media" class="media"></slot>
        <slot part="body" class="body"></slot>
        <slot name="actions" part="actions" class="actions"></slot>
      `:_`
      <slot name="media" part="media" class="media"></slot>
      <header part="header" class="header">
        <slot name="header"></slot>
        <slot name="header-actions"></slot>
      </header>
      <slot part="body" class="body"></slot>
      <footer part="footer" class="footer">
        <slot name="footer"></slot>
        <slot name="footer-actions"></slot>
      </footer>
    `}};jr.css=[gn,_m];l([f({reflect:!0})],jr.prototype,"appearance",2);l([f({attribute:"with-header",type:Boolean,reflect:!0})],jr.prototype,"withHeader",2);l([f({attribute:"with-media",type:Boolean,reflect:!0})],jr.prototype,"withMedia",2);l([f({attribute:"with-footer",type:Boolean,reflect:!0})],jr.prototype,"withFooter",2);l([f({reflect:!0})],jr.prototype,"orientation",2);jr=l([ue("wa-card")],jr);function er(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}const Om="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Tm=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=Om[n[e]&63];return t};function Ye(e,t,n){const r=i=>Object.is(i,-0)?0:i;return e<t?r(t):e>n?r(n):r(e)}function Bo(e=""){return`${e}${Tm()}`}async function Io(e,t,n){return e.animate(t,n).finished.catch(()=>{})}function wt(e,t){return new Promise(n=>{const r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let a=()=>{e.classList.remove(t),n(),r.abort()};e.addEventListener("animationend",a,{once:!0,signal:i}),e.addEventListener("animationcancel",a,{once:!0,signal:i})})}function Co(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e)||0:e.indexOf("s")>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}function Ql(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}var Lm=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Dm(e,t){if(e!==void 0){let n=0;for(const r of e)yield t(r,n++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Pm(e,t,n=1){const r=t===void 0?0:e;t??(t=e);for(let i=r;n>0?i<t:t<i;i+=n)yield i}(()=>{const e=(r,i)=>{let a=0;return function(...o){window.clearTimeout(a),a=window.setTimeout(()=>{r.call(this,...o)},i)}},t=(r,i,a)=>{const o=r[i];r[i]=function(...c){o.call(this,...c),a.call(this,o,...c)}};if(!("onscrollend"in window)){const r=new Set,i=new WeakMap,a=c=>{r.add(c.pointerId)},o=c=>{r.delete(c.pointerId)};document.addEventListener("pointerdown",a),document.addEventListener("pointerup",o),t(EventTarget.prototype,"addEventListener",function(c,p){if(p!=="scroll")return;const g=e(()=>{r.size?g():this.dispatchEvent(new Event("scrollend"))},100);c.call(this,"scroll",g,{passive:!0}),i.set(this,g)}),t(EventTarget.prototype,"removeEventListener",function(c,p){if(p!=="scroll")return;const g=i.get(this);g&&c.call(this,"scroll",g,{passive:!0})})}})();var Rm=class extends Event{constructor(e){super("wa-slide-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},zm=`:host {
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
`,xt=class extends Oe{constructor(){super(...arguments),this.loop=!1,this.slides=0,this.currentSlide=0,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Lm(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new it(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,n=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const r=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:n,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==r||n!==i)&&(e.scrollTo({left:r,top:i,behavior:Ql()?"auto":"smooth"}),await er(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(n=>[...n.addedNodes,...n.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:n,loop:r}=this,i=r?e/n:(e-t)/n+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),n=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+n*n)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,n=this.localize.dir()==="rtl",r=t.closest('[part~="pagination-item"]')!==null,i=e.key==="ArrowDown"||!n&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft",a=e.key==="ArrowUp"||!n&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight";e.preventDefault(),a&&this.previous(),i&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{var c;const o=(c=this.shadowRoot)==null?void 0:c.querySelector('[part~="pagination-item-active"]');o&&o.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const c of t){const p=c.target;p.toggleAttribute("inert",!c.isIntersecting),p.classList.toggle("--in-view",c.isIntersecting),p.setAttribute("aria-hidden",c.isIntersecting?"false":"true")}const n=t.find(c=>c.isIntersecting);if(!n)return;const r=this.getSlides({excludeClones:!1}),i=this.getSlides().length,a=r.indexOf(n.target),o=this.loop?a-this.slidesPerPage:a;if(n&&(this.activeSlide=(Math.ceil(o/this.slidesPerMove)*this.slidesPerMove+i)%i,!this.scrolling&&this.loop&&n.target.hasAttribute("data-clone"))){const c=Number(n.target.getAttribute("data-clone"));this.goToSlide(c,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="wa-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,n=e.slice(-t),r=e.slice(0,t);n.reverse().forEach((i,a)=>{const o=i.cloneNode(!0);o.setAttribute("data-clone",String(e.length-a-1)),this.prepend(o)}),r.forEach((i,a)=>{const o=i.cloneNode(!0);o.setAttribute("data-clone",String(a)),this.append(o)})}handleSlideChange(){const e=this.getSlides();e.forEach((t,n)=>{t.classList.toggle("--is-active",n===this.activeSlide)}),this.hasUpdated&&this.dispatchEvent(new Rm({index:this.activeSlide,slide:e[this.activeSlide]}))}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((n,r)=>{(r+t)%t===0?n.style.removeProperty("scroll-snap-align"):n.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:n,loop:r}=this,i=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!i.length)return;const o=r?(e+i.length)%i.length:Ye(e,0,i.length-n);this.activeSlide=o;const c=this.localize.dir()==="rtl",p=Ye(e+(r?n:0)+(c?n-1:0),0,a.length-1),g=a[p];this.scrollToSlide(g,Ql()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const n=this.scrollContainer,r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),a=i.left-r.left,o=i.top-r.top;a||o?(this.pendingSlideChange=!0,n.scrollTo({left:a+n.scrollLeft,top:o+n.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this;let n=0,r=0,i=!1,a=!1;this.hasUpdated&&(n=this.getPageCount(),r=this.getCurrentPage(),i=this.canScrollPrev(),a=this.canScrollNext());const o=this.localize.dir()==="rtl";return _`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${qe({slides:!0,"slides-horizontal":this.orientation==="horizontal","slides-vertical":this.orientation==="vertical","slides-dragging":this.dragging})}"
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

        ${this.navigation?_`
              <div part="navigation" class="navigation">
                <button
                  part="navigation-button navigation-button-previous"
                  class="${qe({"navigation-button":!0,"navigation-button-previous":!0,"navigation-button-disabled":!i})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <wa-icon library="system" name="${o?"chevron-right":"chevron-left"}"></wa-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button-next"
                  class=${qe({"navigation-button":!0,"navigation-button-next":!0,"navigation-button-disabled":!a})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?"false":"true"}"
                  @click=${a?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <wa-icon library="system" name="${o?"chevron-left":"chevron-right"}"></wa-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?_`
              <div part="pagination" role="tablist" class="pagination" aria-controls="scroll-container">
                ${Dm(Pm(n),c=>{const p=c===r;return _`
                    <button
                      part="pagination-item ${p?"pagination-item-active":""}"
                      class="${qe({"pagination-item":!0,"pagination-item-active":p})}"
                      role="tab"
                      aria-selected="${p?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",c+1,n)}"
                      tabindex=${p?"0":"-1"}
                      @click=${()=>this.goToSlide(c*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:_``}
      </div>
    `}};xt.css=zm;l([f({type:Boolean,reflect:!0})],xt.prototype,"loop",2);l([f({type:Number,reflect:!0})],xt.prototype,"slides",2);l([f({type:Number,reflect:!0})],xt.prototype,"currentSlide",2);l([f({type:Boolean,reflect:!0})],xt.prototype,"navigation",2);l([f({type:Boolean,reflect:!0})],xt.prototype,"pagination",2);l([f({type:Boolean,reflect:!0})],xt.prototype,"autoplay",2);l([f({type:Number,attribute:"autoplay-interval"})],xt.prototype,"autoplayInterval",2);l([f({type:Number,attribute:"slides-per-page"})],xt.prototype,"slidesPerPage",2);l([f({type:Number,attribute:"slides-per-move"})],xt.prototype,"slidesPerMove",2);l([f()],xt.prototype,"orientation",2);l([f({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],xt.prototype,"mouseDragging",2);l([ce(".slides")],xt.prototype,"scrollContainer",2);l([ce(".pagination")],xt.prototype,"paginationContainer",2);l([pe()],xt.prototype,"activeSlide",2);l([pe()],xt.prototype,"scrolling",2);l([pe()],xt.prototype,"dragging",2);l([qo({passive:!0})],xt.prototype,"handleScroll",1);l([me("loop",{waitUntilFirstUpdate:!0}),me("slidesPerPage",{waitUntilFirstUpdate:!0})],xt.prototype,"initializeSlides",1);l([me("activeSlide")],xt.prototype,"handleSlideChange",1);l([me("slidesPerMove")],xt.prototype,"updateSlidesSnap",1);l([me("autoplay")],xt.prototype,"handleAutoplayChange",1);xt=l([ue("wa-carousel")],xt);var Uo=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||(t=Object.assign(document.createElement("input"),{required:!0})),n||(n="value");const r={observedAttributes:["required"],message:t.validationMessage,checkValidity(i){const a={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&!i[n]&&(a.message=typeof r.message=="function"?r.message(i):r.message||"",a.isValid=!1,a.invalidKeys.push("valueMissing")),a}};return r},Mr=`:host {
  display: flex;
  flex-direction: column;
}

/* Label */
:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {
  display: inline-block;
  color: var(--wa-form-control-label-color);
  font-weight: var(--wa-form-control-label-font-weight);
  line-height: var(--wa-form-control-label-line-height);
  margin-block-end: 0.5em;

  :host([required]) &::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }
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
 */const ji=na(class extends ra{constructor(e){if(super(e),e.type!==dr.PROPERTY&&e.type!==dr.ATTRIBUTE&&e.type!==dr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!vd(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Br||t===Mt)return t;const n=e.element,r=e.name;if(e.type===dr.PROPERTY){if(t===n[r])return Br}else if(e.type===dr.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Br}else if(e.type===dr.ATTRIBUTE&&n.getAttribute(r)===t+"")return Br;return Gs(e),t}});var Mm=`:host {
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
`,Bt=class extends St{constructor(){super(...arguments),this.hasSlotController=new zn(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static get validators(){const e=[Uo({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){return this._value??"on"}set value(e){this._value=e}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),t=this.hint?!0:!!e,n=!this.checked&&this.indeterminate,r=n?"indeterminate":"check",i=n?"indeterminate":"check";return _`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Le(this._value)}
            .indeterminate=${ji(this.indeterminate)}
            .checked=${ji(this.checked)}
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
        class="${qe({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};Bt.css=[Mr,gn,Mm];Bt.shadowRootOptions={...St.shadowRootOptions,delegatesFocus:!0};l([ce('input[type="checkbox"]')],Bt.prototype,"input",2);l([f()],Bt.prototype,"title",2);l([f({reflect:!0})],Bt.prototype,"name",2);l([f({reflect:!0})],Bt.prototype,"value",1);l([f({reflect:!0})],Bt.prototype,"size",2);l([f({type:Boolean})],Bt.prototype,"disabled",2);l([f({type:Boolean,reflect:!0})],Bt.prototype,"indeterminate",2);l([f({type:Boolean,attribute:!1})],Bt.prototype,"checked",2);l([f({type:Boolean,reflect:!0,attribute:"checked"})],Bt.prototype,"defaultChecked",2);l([f({reflect:!0})],Bt.prototype,"form",2);l([f({type:Boolean,reflect:!0})],Bt.prototype,"required",2);l([f()],Bt.prototype,"hint",2);l([me("defaultChecked")],Bt.prototype,"handleDefaultCheckedChange",1);l([me(["checked","indeterminate"])],Bt.prototype,"handleStateChange",1);l([me("disabled")],Bt.prototype,"handleDisabledChange",1);Bt=l([ue("wa-checkbox")],Bt);function _a(e,t){function n(i){const a=e.getBoundingClientRect(),o=e.ownerDocument.defaultView,c=a.left+o.pageXOffset,p=a.top+o.pageYOffset,g=i.pageX-c,v=i.pageY-p;t!=null&&t.onMove&&t.onMove(g,v)}function r(){document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",n,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&n(t.initialEvent)}var _r=typeof window<"u"&&"ontouchstart"in window,Ja=class{constructor(e,t){this.isActive=!1,this.isDragging=!1,this.handleDragStart=n=>{const r=_r&&"touches"in n?n.touches[0].clientX:n.clientX,i=_r&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging||!_r&&n.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),this.options.start(r,i))},this.handleDragStop=n=>{const r=_r&&"touches"in n?n.touches[0].clientX:n.clientX,i=_r&&"touches"in n?n.touches[0].clientY:n.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.options.stop(r,i)},this.handleDragMove=n=>{var a;const r=_r&&"touches"in n?n.touches[0].clientX:n.clientX,i=_r&&"touches"in n?n.touches[0].clientY:n.clientY;(a=window.getSelection())==null||a.removeAllRanges(),this.options.move(r,i)},this.element=e,this.options={start:()=>{},stop:()=>{},move:()=>{},...t},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),_r&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.element.removeEventListener("pointerdown",this.handleDragStart),_r&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(e){(e!==void 0?e:!this.isActive)?this.start():this.stop()}},hu=`@layer wa-utilities {
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force {
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
`;function Qt(e,t){Nm(e)&&(e="100%");const n=Fm(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Qa(e){return Math.min(1,Math.max(0,e))}function Nm(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Fm(e){return typeof e=="string"&&e.indexOf("%")!==-1}function pu(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function eo(e){return Number(e)<=1?`${Number(e)*100}%`:e}function di(e){return e.length===1?"0"+e:String(e)}function qm(e,t,n){return{r:Qt(e,255)*255,g:Qt(t,255)*255,b:Qt(n,255)*255}}function ec(e,t,n){e=Qt(e,255),t=Qt(t,255),n=Qt(n,255);const r=Math.max(e,t,n),i=Math.min(e,t,n);let a=0,o=0;const c=(r+i)/2;if(r===i)o=0,a=0;else{const p=r-i;switch(o=c>.5?p/(2-r-i):p/(r+i),r){case e:a=(t-n)/p+(t<n?6:0);break;case t:a=(n-e)/p+2;break;case n:a=(e-t)/p+4;break}a/=6}return{h:a,s:o,l:c}}function us(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Vm(e,t,n){let r,i,a;if(e=Qt(e,360),t=Qt(t,100),n=Qt(n,100),t===0)i=n,a=n,r=n;else{const o=n<.5?n*(1+t):n+t-n*t,c=2*n-o;r=us(c,o,e+1/3),i=us(c,o,e),a=us(c,o,e-1/3)}return{r:r*255,g:i*255,b:a*255}}function tc(e,t,n){e=Qt(e,255),t=Qt(t,255),n=Qt(n,255);const r=Math.max(e,t,n),i=Math.min(e,t,n);let a=0;const o=r,c=r-i,p=r===0?0:c/r;if(r===i)a=0;else{switch(r){case e:a=(t-n)/c+(t<n?6:0);break;case t:a=(n-e)/c+2;break;case n:a=(e-t)/c+4;break}a/=6}return{h:a,s:p,v:o}}function Bm(e,t,n){e=Qt(e,360)*6,t=Qt(t,100),n=Qt(n,100);const r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),c=n*(1-(1-i)*t),p=r%6,g=[n,o,a,a,c,n][p],v=[c,n,n,o,a,a][p],x=[a,a,c,n,n,o][p];return{r:g*255,g:v*255,b:x*255}}function nc(e,t,n,r){const i=[di(Math.round(e).toString(16)),di(Math.round(t).toString(16)),di(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function Um(e,t,n,r,i){const a=[di(Math.round(e).toString(16)),di(Math.round(t).toString(16)),di(Math.round(n).toString(16)),di(Wm(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function jm(e,t,n,r){const i=e/100,a=t/100,o=n/100,c=r/100,p=255*(1-i)*(1-c),g=255*(1-a)*(1-c),v=255*(1-o)*(1-c);return{r:p,g,b:v}}function rc(e,t,n){let r=1-e/255,i=1-t/255,a=1-n/255,o=Math.min(r,i,a);return o===1?(r=0,i=0,a=0):(r=(r-o)/(1-o)*100,i=(i-o)/(1-o)*100,a=(a-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(a),k:Math.round(o)}}function Wm(e){return Math.round(parseFloat(e)*255).toString(16)}function ic(e){return An(e)/255}function An(e){return parseInt(e,16)}function Hm(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const Ds={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Gm(e){let t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,c=!1;return typeof e=="string"&&(e=Xm(e)),typeof e=="object"&&(En(e.r)&&En(e.g)&&En(e.b)?(t=qm(e.r,e.g,e.b),o=!0,c=String(e.r).substr(-1)==="%"?"prgb":"rgb"):En(e.h)&&En(e.s)&&En(e.v)?(r=eo(e.s),i=eo(e.v),t=Bm(e.h,r,i),o=!0,c="hsv"):En(e.h)&&En(e.s)&&En(e.l)?(r=eo(e.s),a=eo(e.l),t=Vm(e.h,r,a),o=!0,c="hsl"):En(e.c)&&En(e.m)&&En(e.y)&&En(e.k)&&(t=jm(e.c,e.m,e.y,e.k),o=!0,c="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=pu(n),{ok:o,format:e.format||c,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}const Km="[-\\+]?\\d+%?",Ym="[-\\+]?\\d*\\.\\d+%?",Ur="(?:"+Ym+")|(?:"+Km+")",ds="[\\s|\\(]+("+Ur+")[,|\\s]+("+Ur+")[,|\\s]+("+Ur+")\\s*\\)?",to="[\\s|\\(]+("+Ur+")[,|\\s]+("+Ur+")[,|\\s]+("+Ur+")[,|\\s]+("+Ur+")\\s*\\)?",qn={CSS_UNIT:new RegExp(Ur),rgb:new RegExp("rgb"+ds),rgba:new RegExp("rgba"+to),hsl:new RegExp("hsl"+ds),hsla:new RegExp("hsla"+to),hsv:new RegExp("hsv"+ds),hsva:new RegExp("hsva"+to),cmyk:new RegExp("cmyk"+to),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Xm(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Ds[e])e=Ds[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let n=qn.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=qn.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=qn.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=qn.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=qn.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=qn.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=qn.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=qn.hex8.exec(e),n?{r:An(n[1]),g:An(n[2]),b:An(n[3]),a:ic(n[4]),format:t?"name":"hex8"}:(n=qn.hex6.exec(e),n?{r:An(n[1]),g:An(n[2]),b:An(n[3]),format:t?"name":"hex"}:(n=qn.hex4.exec(e),n?{r:An(n[1]+n[1]),g:An(n[2]+n[2]),b:An(n[3]+n[3]),a:ic(n[4]+n[4]),format:t?"name":"hex8"}:(n=qn.hex3.exec(e),n?{r:An(n[1]+n[1]),g:An(n[2]+n[2]),b:An(n[3]+n[3]),format:t?"name":"hex"}:!1))))))))))}function En(e){return typeof e=="number"?!Number.isNaN(e):qn.CSS_UNIT.test(e)}class _t{constructor(t="",n={}){if(t instanceof _t)return t;typeof t=="number"&&(t=Hm(t)),this.originalInput=t;const r=Gm(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let n,r,i;const a=t.r/255,o=t.g/255,c=t.b/255;return a<=.03928?n=a/12.92:n=Math.pow((a+.055)/1.055,2.4),o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),c<=.03928?i=c/12.92:i=Math.pow((c+.055)/1.055,2.4),.2126*n+.7152*r+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=pu(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=tc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=tc(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?`hsv(${n}, ${r}%, ${i}%)`:`hsva(${n}, ${r}%, ${i}%, ${this.roundA})`}toHsl(){const t=ec(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=ec(this.r,this.g,this.b),n=Math.round(t.h*360),r=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?`hsl(${n}, ${r}%, ${i}%)`:`hsla(${n}, ${r}%, ${i}%, ${this.roundA})`}toHex(t=!1){return nc(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Um(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${n}, ${r})`:`rgba(${t}, ${n}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=n=>`${Math.round(Qt(n,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=n=>Math.round(Qt(n,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...rc(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:n,y:r,k:i}=rc(this.r,this.g,this.b);return`cmyk(${t}, ${n}, ${r}, ${i})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+nc(this.r,this.g,this.b,!1);for(const[n,r]of Object.entries(Ds))if(t===r)return n;return!1}toString(t){const n=!!t;t=t??this.format;let r=!1;const i=this.a<1&&this.a>=0;return!n&&i&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new _t(this.toString())}lighten(t=10){const n=this.toHsl();return n.l+=t/100,n.l=Qa(n.l),new _t(n)}brighten(t=10){const n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new _t(n)}darken(t=10){const n=this.toHsl();return n.l-=t/100,n.l=Qa(n.l),new _t(n)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const n=this.toHsl();return n.s-=t/100,n.s=Qa(n.s),new _t(n)}saturate(t=10){const n=this.toHsl();return n.s+=t/100,n.s=Qa(n.s),new _t(n)}greyscale(){return this.desaturate(100)}spin(t){const n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new _t(n)}mix(t,n=50){const r=this.toRgb(),i=new _t(t).toRgb(),a=n/100,o={r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a};return new _t(o)}analogous(t=6,n=30){const r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(new _t(r));return a}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new _t(t)}monochromatic(t=6){const n=this.toHsv(),{h:r}=n,{s:i}=n;let{v:a}=n;const o=[],c=1/t;for(;t--;)o.push(new _t({h:r,s:i,v:a})),a=(a+c)%1;return o}splitcomplement(){const t=this.toHsl(),{h:n}=t;return[this,new _t({h:(n+72)%360,s:t.s,l:t.l}),new _t({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){const n=this.toRgb(),r=new _t(t).toRgb(),i=n.a+r.a*(1-n.a);return new _t({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const n=this.toHsl(),{h:r}=n,i=[this],a=360/t;for(let o=1;o<t;o++)i.push(new _t({h:(r+o*a)%360,s:n.s,l:n.l}));return i}equals(t){const n=new _t(t);return this.format==="cmyk"||n.format==="cmyk"?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fu="important",Zm=" !"+fu,_n=na(class extends ra{constructor(e){var t;if(super(e),e.type!==dr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?n.removeProperty(r):n[r]=null);for(const r in t){const i=t[r];if(i!=null){this.ft.add(r);const a=typeof i=="string"&&i.endsWith(Zm);r.includes("-")||a?n.setProperty(r,a?i.slice(0,-11):i,a?fu:""):n[r]=i}}return Br}});var Jm=`:host {
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
`,Re=class extends St{constructor(){super(),this.hasSlotController=new zn(this,"hint","label"),this.isSafeValue=!1,this.localize=new it(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form=null,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focus(),this.hide();return}e.key==="Tab"&&setTimeout(()=>{var n,r;const t=this.getRootNode()instanceof ShadowRoot?(r=(n=document.activeElement)==null?void 0:n.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this||(t==null?void 0:t.closest(this.tagName.toLowerCase()))!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{const n=e.composedPath().some(r=>r instanceof Element&&(r.closest(".color-picker")||r===this.trigger));this&&!n&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){const e=[Uo()];return[...super.validators,...e]}get validationTarget(){var e;return(e=this.popup)!=null&&e.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".slider.alpha"),n=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect();let i=this.value,a=this.value;n.focus(),e.preventDefault(),_a(t,{onMove:o=>{this.alpha=Ye(o/r*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".slider.hue"),n=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect();let i=this.value,a=this.value;n.focus(),e.preventDefault(),_a(t,{onMove:o=>{this.hue=Ye(o/r*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".grid"),n=t.querySelector(".grid-handle"),{width:r,height:i}=t.getBoundingClientRect();let a=this.value,o=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,_a(t,{onMove:(c,p)=>{this.saturation=Ye(c/r*100,0,100),this.brightness=Ye(100-p/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ye(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ye(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ye(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ye(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){const t=e.shiftKey?10:1,n=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ye(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ye(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ye(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ye(this.brightness-t,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(e){const t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||""):this.value="",this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()==="")return null;const t=new _t(e);if(!t.isValid)return null;const n=t.toHsl(),r=t.toRgb(),i=t.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;const a={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},o=t.toHexString(),c=t.toHex8String(),p={h:i.h||0,s:(i.s||0)*100,v:(i.v||0)*100,a:i.a||0};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:p.h,s:p.s,v:p.v,string:this.setLetterCase(`hsv(${Math.round(p.h)}, ${Math.round(p.s)}%, ${Math.round(p.v)}%)`)},hsva:{h:p.h,s:p.s,v:p.v,a:p.a,string:this.setLetterCase(`hsva(${Math.round(p.h)}, ${Math.round(p.s)}%, ${Math.round(p.v)}%, ${p.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(c)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(t=>{const n=this.value;this.setColor(t.sRGBHex),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(e,t,n,r=100){const i=new _t(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){super.willUpdate(e),e.has("value")&&this.handleValueChange(e.get("value")||"",this.value||"")}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const n=this.parseColor(t);n!==null?(this.inputValue=this.value||"",this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues()):this.inputValue=e??""}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){var t;const e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.popup)!=null&&t.active&&this.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new pl),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}updateAccessibleTrigger(){const e=this.trigger;e&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,er(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,er(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await wt(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await wt(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){const e=this.hasUpdated?this.withLabel||this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.withHint||this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.saturation,a=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(p=>p.trim()!==""),c=_`
      <div
        part="base"
        class=${qe({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${_n({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${qe({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${_n({top:`${a}%`,left:`${i}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${Le(this.disabled?void 0:"0")}
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
                style=${_n({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${Le(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?_`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${_n({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${_n({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${Le(this.disabled?void 0:"0")}
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
            style=${_n({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.withoutFormatToggle?"":_`
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
            ${this.hasEyeDropper?_`
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

        ${o.length>0?_`
              <div part="swatches" class="swatches">
                ${o.map(p=>{const g=this.parseColor(p);return g?_`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${Le(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${p}
                      @click=${()=>this.selectSwatch(p)}
                      @keydown=${v=>!this.disabled&&v.key==="Enter"&&this.setColor(g.hexa)}
                    >
                      <div class="swatch-color" style=${_n({backgroundColor:g.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return _`
      <div
        class=${qe({container:!0,"form-control":!0,"form-control-has-label":n})}
        part="trigger-container form-control"
      >
        <div part="form-control-label" class="label" id="form-control-label">
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${qe({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${_n({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
          class=${qe({"has-slotted":r})}
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
    `}};Re.css=[hu,gn,Mr,Jm];Re.shadowRootOptions={...St.shadowRootOptions,delegatesFocus:!0};l([ce('[part~="base"]')],Re.prototype,"base",2);l([ce('[part~="input"]')],Re.prototype,"input",2);l([ce('[part~="form-control-label"]')],Re.prototype,"triggerLabel",2);l([ce('[part~="form-control-input"]')],Re.prototype,"triggerButton",2);l([ce(".color-popup")],Re.prototype,"popup",2);l([ce('[part~="preview"]')],Re.prototype,"previewButton",2);l([ce('[part~="trigger"]')],Re.prototype,"trigger",2);l([pe()],Re.prototype,"hasFocus",2);l([pe()],Re.prototype,"isDraggingGridHandle",2);l([pe()],Re.prototype,"isEmpty",2);l([pe()],Re.prototype,"inputValue",2);l([pe()],Re.prototype,"hue",2);l([pe()],Re.prototype,"saturation",2);l([pe()],Re.prototype,"brightness",2);l([pe()],Re.prototype,"alpha",2);l([pe()],Re.prototype,"value",1);l([f({attribute:"value",reflect:!0})],Re.prototype,"defaultValue",2);l([f({attribute:"with-label",reflect:!0,type:Boolean})],Re.prototype,"withLabel",2);l([f({attribute:"with-hint",reflect:!0,type:Boolean})],Re.prototype,"withHint",2);l([pe()],Re.prototype,"hasEyeDropper",2);l([f()],Re.prototype,"label",2);l([f({attribute:"hint"})],Re.prototype,"hint",2);l([f()],Re.prototype,"format",2);l([f({reflect:!0})],Re.prototype,"size",2);l([f({attribute:"without-format-toggle",type:Boolean})],Re.prototype,"withoutFormatToggle",2);l([f({reflect:!0})],Re.prototype,"name",2);l([f({type:Boolean})],Re.prototype,"disabled",2);l([f({type:Boolean,reflect:!0})],Re.prototype,"open",2);l([f({type:Boolean})],Re.prototype,"opacity",2);l([f({type:Boolean})],Re.prototype,"uppercase",2);l([f()],Re.prototype,"swatches",2);l([f({reflect:!0})],Re.prototype,"form",2);l([f({type:Boolean,reflect:!0})],Re.prototype,"required",2);l([qo({passive:!1})],Re.prototype,"handleTouchMove",1);l([me("format",{waitUntilFirstUpdate:!0})],Re.prototype,"handleFormatChange",1);l([me("opacity")],Re.prototype,"handleOpacityChange",1);l([me("value")],Re.prototype,"handleValueChange",1);l([me("open",{waitUntilFirstUpdate:!0})],Re.prototype,"handleOpenChange",1);Re=l([ue("wa-color-picker")],Re);var mu=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function gu(e,t){const n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&Qm(t)})}function Qm(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;const n=[...t.elements];if(n.length===1){t.requestSubmit(null);return}const r=n.find(i=>i.type==="submit"&&!i.matches(":disabled"));r&&(["input","button"].includes(r.localName)?t.requestSubmit(r):r.click())}var eg=`:host {
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
:host([appearance~='outlined']) .text-field {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance~='filled']) .text-field {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance~='filled'][appearance~='outlined']) .text-field {
  border-color: var(--wa-form-control-border-color);
}

:host([pill]) .text-field {
  border-radius: var(--wa-border-radius-pill) !important;
}

.text-field input,
.text-field textarea {
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
`,Ue=class extends St{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new zn(this,"hint","label"),this.localize=new it(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Vo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new mu),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){gu(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r="preserve"){const i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=this.hasUpdated&&i&&(typeof this.value=="number"||this.value&&this.value.length>0);return _`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="input" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="base"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${Le(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Le(this.placeholder)}
          minlength=${Le(this.minlength)}
          maxlength=${Le(this.maxlength)}
          min=${Le(this.min)}
          max=${Le(this.max)}
          step=${Le(this.step)}
          .value=${ji(this.value??"")}
          autocapitalize=${Le(this.autocapitalize)}
          autocomplete=${Le(this.autocomplete)}
          autocorrect=${Le(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${Le(this.pattern)}
          enterkeyhint=${Le(this.enterkeyhint)}
          inputmode=${Le(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?_`
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
        ${this.passwordToggle&&!this.disabled?_`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?_`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:_`
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
        class=${qe({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};Ue.css=[gn,Mr,eg];Ue.shadowRootOptions={...St.shadowRootOptions,delegatesFocus:!0};l([ce("input")],Ue.prototype,"input",2);l([f()],Ue.prototype,"title",2);l([f({reflect:!0})],Ue.prototype,"type",2);l([pe()],Ue.prototype,"value",1);l([f({attribute:"value",reflect:!0})],Ue.prototype,"defaultValue",2);l([f({reflect:!0})],Ue.prototype,"size",2);l([f({reflect:!0})],Ue.prototype,"appearance",2);l([f({type:Boolean,reflect:!0})],Ue.prototype,"pill",2);l([f()],Ue.prototype,"label",2);l([f({attribute:"hint"})],Ue.prototype,"hint",2);l([f({attribute:"with-clear",type:Boolean})],Ue.prototype,"withClear",2);l([f()],Ue.prototype,"placeholder",2);l([f({type:Boolean,reflect:!0})],Ue.prototype,"readonly",2);l([f({attribute:"password-toggle",type:Boolean})],Ue.prototype,"passwordToggle",2);l([f({attribute:"password-visible",type:Boolean})],Ue.prototype,"passwordVisible",2);l([f({attribute:"without-spin-buttons",type:Boolean})],Ue.prototype,"withoutSpinButtons",2);l([f({reflect:!0})],Ue.prototype,"form",2);l([f({type:Boolean,reflect:!0})],Ue.prototype,"required",2);l([f()],Ue.prototype,"pattern",2);l([f({type:Number})],Ue.prototype,"minlength",2);l([f({type:Number})],Ue.prototype,"maxlength",2);l([f()],Ue.prototype,"min",2);l([f()],Ue.prototype,"max",2);l([f()],Ue.prototype,"step",2);l([f()],Ue.prototype,"autocapitalize",2);l([f()],Ue.prototype,"autocorrect",2);l([f()],Ue.prototype,"autocomplete",2);l([f({type:Boolean})],Ue.prototype,"autofocus",2);l([f()],Ue.prototype,"enterkeyhint",2);l([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Ue.prototype,"spellcheck",2);l([f()],Ue.prototype,"inputmode",2);l([f({attribute:"with-label",type:Boolean})],Ue.prototype,"withLabel",2);l([f({attribute:"with-hint",type:Boolean})],Ue.prototype,"withHint",2);l([me("step",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleStepChange",1);Ue=l([ue("wa-input")],Ue);var bu=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};const Wr=Math.min,Tn=Math.max,So=Math.round,no=Math.floor,mr=e=>({x:e,y:e}),tg={left:"right",right:"left",bottom:"top",top:"bottom"},ng={start:"end",end:"start"};function Ps(e,t,n){return Tn(e,Wr(t,n))}function aa(e,t){return typeof e=="function"?e(t):e}function Hr(e){return e.split("-")[0]}function oa(e){return e.split("-")[1]}function vu(e){return e==="x"?"y":"x"}function fl(e){return e==="y"?"height":"width"}const rg=new Set(["top","bottom"]);function Tr(e){return rg.has(Hr(e))?"y":"x"}function ml(e){return vu(Tr(e))}function ig(e,t,n){n===void 0&&(n=!1);const r=oa(e),i=ml(e),a=fl(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(o=Eo(o)),[o,Eo(o)]}function ag(e){const t=Eo(e);return[Rs(e),t,Rs(t)]}function Rs(e){return e.replace(/start|end/g,t=>ng[t])}const ac=["left","right"],oc=["right","left"],og=["top","bottom"],sg=["bottom","top"];function lg(e,t,n){switch(e){case"top":case"bottom":return n?t?oc:ac:t?ac:oc;case"left":case"right":return t?og:sg;default:return[]}}function cg(e,t,n,r){const i=oa(e);let a=lg(Hr(e),n==="start",r);return i&&(a=a.map(o=>o+"-"+i),t&&(a=a.concat(a.map(Rs)))),a}function Eo(e){return e.replace(/left|right|bottom|top/g,t=>tg[t])}function ug(e){return{top:0,right:0,bottom:0,left:0,...e}}function yu(e){return typeof e!="number"?ug(e):{top:e,right:e,bottom:e,left:e}}function Ao(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function sc(e,t,n){let{reference:r,floating:i}=e;const a=Tr(t),o=ml(t),c=fl(o),p=Hr(t),g=a==="y",v=r.x+r.width/2-i.width/2,x=r.y+r.height/2-i.height/2,y=r[c]/2-i[c]/2;let I;switch(p){case"top":I={x:v,y:r.y-i.height};break;case"bottom":I={x:v,y:r.y+r.height};break;case"right":I={x:r.x+r.width,y:x};break;case"left":I={x:r.x-i.width,y:x};break;default:I={x:r.x,y:r.y}}switch(oa(t)){case"start":I[o]-=y*(n&&g?-1:1);break;case"end":I[o]+=y*(n&&g?-1:1);break}return I}const dg=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:o}=n,c=a.filter(Boolean),p=await(o.isRTL==null?void 0:o.isRTL(t));let g=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:v,y:x}=sc(g,r,p),y=r,I={},R=0;for(let D=0;D<c.length;D++){const{name:U,fn:Y}=c[D],{x:q,y:z,data:G,reset:M}=await Y({x:v,y:x,initialPlacement:r,placement:y,strategy:i,middlewareData:I,rects:g,platform:o,elements:{reference:e,floating:t}});v=q??v,x=z??x,I={...I,[U]:{...I[U],...G}},M&&R<=50&&(R++,typeof M=="object"&&(M.placement&&(y=M.placement),M.rects&&(g=M.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):M.rects),{x:v,y:x}=sc(g,y,p)),D=-1)}return{x:v,y:x,placement:y,strategy:i,middlewareData:I}};async function gl(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:o,elements:c,strategy:p}=e,{boundary:g="clippingAncestors",rootBoundary:v="viewport",elementContext:x="floating",altBoundary:y=!1,padding:I=0}=aa(t,e),R=yu(I),U=c[y?x==="floating"?"reference":"floating":x],Y=Ao(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(U)))==null||n?U:U.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:g,rootBoundary:v,strategy:p})),q=x==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,z=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),G=await(a.isElement==null?void 0:a.isElement(z))?await(a.getScale==null?void 0:a.getScale(z))||{x:1,y:1}:{x:1,y:1},M=Ao(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:q,offsetParent:z,strategy:p}):q);return{top:(Y.top-M.top+R.top)/G.y,bottom:(M.bottom-Y.bottom+R.bottom)/G.y,left:(Y.left-M.left+R.left)/G.x,right:(M.right-Y.right+R.right)/G.x}}const hg=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:a,platform:o,elements:c,middlewareData:p}=t,{element:g,padding:v=0}=aa(e,t)||{};if(g==null)return{};const x=yu(v),y={x:n,y:r},I=ml(i),R=fl(I),D=await o.getDimensions(g),U=I==="y",Y=U?"top":"left",q=U?"bottom":"right",z=U?"clientHeight":"clientWidth",G=a.reference[R]+a.reference[I]-y[I]-a.floating[R],M=y[I]-a.reference[I],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(g));let V=S?S[z]:0;(!V||!await(o.isElement==null?void 0:o.isElement(S)))&&(V=c.floating[z]||a.floating[R]);const W=G/2-M/2,re=V/2-D[R]/2-1,ge=Wr(x[Y],re),X=Wr(x[q],re),ie=ge,de=V-D[R]-X,ke=V/2-D[R]/2+W,Ve=Ps(ie,ke,de),ye=!p.arrow&&oa(i)!=null&&ke!==Ve&&a.reference[R]/2-(ke<ie?ge:X)-D[R]/2<0,be=ye?ke<ie?ke-ie:ke-de:0;return{[I]:y[I]+be,data:{[I]:Ve,centerOffset:ke-Ve-be,...ye&&{alignmentOffset:be}},reset:ye}}}),pg=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:a,rects:o,initialPlacement:c,platform:p,elements:g}=t,{mainAxis:v=!0,crossAxis:x=!0,fallbackPlacements:y,fallbackStrategy:I="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:D=!0,...U}=aa(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const Y=Hr(i),q=Tr(c),z=Hr(c)===c,G=await(p.isRTL==null?void 0:p.isRTL(g.floating)),M=y||(z||!D?[Eo(c)]:ag(c)),S=R!=="none";!y&&S&&M.push(...cg(c,D,R,G));const V=[c,...M],W=await gl(t,U),re=[];let ge=((r=a.flip)==null?void 0:r.overflows)||[];if(v&&re.push(W[Y]),x){const ke=ig(i,o,G);re.push(W[ke[0]],W[ke[1]])}if(ge=[...ge,{placement:i,overflows:re}],!re.every(ke=>ke<=0)){var X,ie;const ke=(((X=a.flip)==null?void 0:X.index)||0)+1,Ve=V[ke];if(Ve&&(!(x==="alignment"?q!==Tr(Ve):!1)||ge.every(ze=>ze.overflows[0]>0&&Tr(ze.placement)===q)))return{data:{index:ke,overflows:ge},reset:{placement:Ve}};let ye=(ie=ge.filter(be=>be.overflows[0]<=0).sort((be,ze)=>be.overflows[1]-ze.overflows[1])[0])==null?void 0:ie.placement;if(!ye)switch(I){case"bestFit":{var de;const be=(de=ge.filter(ze=>{if(S){const ne=Tr(ze.placement);return ne===q||ne==="y"}return!0}).map(ze=>[ze.placement,ze.overflows.filter(ne=>ne>0).reduce((ne,De)=>ne+De,0)]).sort((ze,ne)=>ze[1]-ne[1])[0])==null?void 0:de[0];be&&(ye=be);break}case"initialPlacement":ye=c;break}if(i!==ye)return{reset:{placement:ye}}}return{}}}},fg=new Set(["left","top"]);async function mg(e,t){const{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Hr(n),c=oa(n),p=Tr(n)==="y",g=fg.has(o)?-1:1,v=a&&p?-1:1,x=aa(t,e);let{mainAxis:y,crossAxis:I,alignmentAxis:R}=typeof x=="number"?{mainAxis:x,crossAxis:0,alignmentAxis:null}:{mainAxis:x.mainAxis||0,crossAxis:x.crossAxis||0,alignmentAxis:x.alignmentAxis};return c&&typeof R=="number"&&(I=c==="end"?R*-1:R),p?{x:I*v,y:y*g}:{x:y*g,y:I*v}}const gg=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:a,placement:o,middlewareData:c}=t,p=await mg(t,e);return o===((n=c.offset)==null?void 0:n.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+p.x,y:a+p.y,data:{...p,placement:o}}}}},bg=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:c={fn:U=>{let{x:Y,y:q}=U;return{x:Y,y:q}}},...p}=aa(e,t),g={x:n,y:r},v=await gl(t,p),x=Tr(Hr(i)),y=vu(x);let I=g[y],R=g[x];if(a){const U=y==="y"?"top":"left",Y=y==="y"?"bottom":"right",q=I+v[U],z=I-v[Y];I=Ps(q,I,z)}if(o){const U=x==="y"?"top":"left",Y=x==="y"?"bottom":"right",q=R+v[U],z=R-v[Y];R=Ps(q,R,z)}const D=c.fn({...t,[y]:I,[x]:R});return{...D,data:{x:D.x-n,y:D.y-r,enabled:{[y]:a,[x]:o}}}}}},vg=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:a,platform:o,elements:c}=t,{apply:p=()=>{},...g}=aa(e,t),v=await gl(t,g),x=Hr(i),y=oa(i),I=Tr(i)==="y",{width:R,height:D}=a.floating;let U,Y;x==="top"||x==="bottom"?(U=x,Y=y===(await(o.isRTL==null?void 0:o.isRTL(c.floating))?"start":"end")?"left":"right"):(Y=x,U=y==="end"?"top":"bottom");const q=D-v.top-v.bottom,z=R-v.left-v.right,G=Wr(D-v[U],q),M=Wr(R-v[Y],z),S=!t.middlewareData.shift;let V=G,W=M;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(W=z),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(V=q),S&&!y){const ge=Tn(v.left,0),X=Tn(v.right,0),ie=Tn(v.top,0),de=Tn(v.bottom,0);I?W=R-2*(ge!==0||X!==0?ge+X:Tn(v.left,v.right)):V=D-2*(ie!==0||de!==0?ie+de:Tn(v.top,v.bottom))}await p({...t,availableWidth:W,availableHeight:V});const re=await o.getDimensions(c.floating);return R!==re.width||D!==re.height?{reset:{rects:!0}}:{}}}};function jo(){return typeof window<"u"}function sa(e){return wu(e)?(e.nodeName||"").toLowerCase():"#document"}function Ln(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function kr(e){var t;return(t=(wu(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function wu(e){return jo()?e instanceof Node||e instanceof Ln(e).Node:!1}function tr(e){return jo()?e instanceof Element||e instanceof Ln(e).Element:!1}function br(e){return jo()?e instanceof HTMLElement||e instanceof Ln(e).HTMLElement:!1}function lc(e){return!jo()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ln(e).ShadowRoot}const yg=new Set(["inline","contents"]);function Va(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=nr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!yg.has(i)}const wg=new Set(["table","td","th"]);function xg(e){return wg.has(sa(e))}const kg=[":popover-open",":modal"];function Wo(e){return kg.some(t=>{try{return e.matches(t)}catch{return!1}})}const Ig=["transform","translate","scale","rotate","perspective"],Cg=["transform","translate","scale","rotate","perspective","filter"],Sg=["paint","layout","strict","content"];function Ho(e){const t=bl(),n=tr(e)?nr(e):e;return Ig.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Cg.some(r=>(n.willChange||"").includes(r))||Sg.some(r=>(n.contain||"").includes(r))}function Eg(e){let t=Gr(e);for(;br(t)&&!Wi(t);){if(Ho(t))return t;if(Wo(t))return null;t=Gr(t)}return null}function bl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ag=new Set(["html","body","#document"]);function Wi(e){return Ag.has(sa(e))}function nr(e){return Ln(e).getComputedStyle(e)}function Go(e){return tr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gr(e){if(sa(e)==="html")return e;const t=e.assignedSlot||e.parentNode||lc(e)&&e.host||kr(e);return lc(t)?t.host:t}function xu(e){const t=Gr(e);return Wi(t)?e.ownerDocument?e.ownerDocument.body:e.body:br(t)&&Va(t)?t:xu(t)}function Hi(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=xu(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),o=Ln(i);if(a){const c=zs(o);return t.concat(o,o.visualViewport||[],Va(i)?i:[],c&&n?Hi(c):[])}return t.concat(i,Hi(i,[],n))}function zs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ku(e){const t=nr(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=br(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,c=So(n)!==a||So(r)!==o;return c&&(n=a,r=o),{width:n,height:r,$:c}}function vl(e){return tr(e)?e:e.contextElement}function Mi(e){const t=vl(e);if(!br(t))return mr(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ku(t);let o=(a?So(n.width):n.width)/r,c=(a?So(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!c||!Number.isFinite(c))&&(c=1),{x:o,y:c}}const $g=mr(0);function Iu(e){const t=Ln(e);return!bl()||!t.visualViewport?$g:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function _g(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ln(e)?!1:t}function bi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),a=vl(e);let o=mr(1);t&&(r?tr(r)&&(o=Mi(r)):o=Mi(e));const c=_g(a,n,r)?Iu(a):mr(0);let p=(i.left+c.x)/o.x,g=(i.top+c.y)/o.y,v=i.width/o.x,x=i.height/o.y;if(a){const y=Ln(a),I=r&&tr(r)?Ln(r):r;let R=y,D=zs(R);for(;D&&r&&I!==R;){const U=Mi(D),Y=D.getBoundingClientRect(),q=nr(D),z=Y.left+(D.clientLeft+parseFloat(q.paddingLeft))*U.x,G=Y.top+(D.clientTop+parseFloat(q.paddingTop))*U.y;p*=U.x,g*=U.y,v*=U.x,x*=U.y,p+=z,g+=G,R=Ln(D),D=zs(R)}}return Ao({width:v,height:x,x:p,y:g})}function yl(e,t){const n=Go(e).scrollLeft;return t?t.left+n:bi(kr(e)).left+n}function Cu(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:yl(e,r)),a=r.top+t.scrollTop;return{x:i,y:a}}function Og(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const a=i==="fixed",o=kr(r),c=t?Wo(t.floating):!1;if(r===o||c&&a)return n;let p={scrollLeft:0,scrollTop:0},g=mr(1);const v=mr(0),x=br(r);if((x||!x&&!a)&&((sa(r)!=="body"||Va(o))&&(p=Go(r)),br(r))){const I=bi(r);g=Mi(r),v.x=I.x+r.clientLeft,v.y=I.y+r.clientTop}const y=o&&!x&&!a?Cu(o,p,!0):mr(0);return{width:n.width*g.x,height:n.height*g.y,x:n.x*g.x-p.scrollLeft*g.x+v.x+y.x,y:n.y*g.y-p.scrollTop*g.y+v.y+y.y}}function Tg(e){return Array.from(e.getClientRects())}function Lg(e){const t=kr(e),n=Go(e),r=e.ownerDocument.body,i=Tn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Tn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+yl(e);const c=-n.scrollTop;return nr(r).direction==="rtl"&&(o+=Tn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:c}}function Dg(e,t){const n=Ln(e),r=kr(e),i=n.visualViewport;let a=r.clientWidth,o=r.clientHeight,c=0,p=0;if(i){a=i.width,o=i.height;const g=bl();(!g||g&&t==="fixed")&&(c=i.offsetLeft,p=i.offsetTop)}return{width:a,height:o,x:c,y:p}}const Pg=new Set(["absolute","fixed"]);function Rg(e,t){const n=bi(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=br(e)?Mi(e):mr(1),o=e.clientWidth*a.x,c=e.clientHeight*a.y,p=i*a.x,g=r*a.y;return{width:o,height:c,x:p,y:g}}function cc(e,t,n){let r;if(t==="viewport")r=Dg(e,n);else if(t==="document")r=Lg(kr(e));else if(tr(t))r=Rg(t,n);else{const i=Iu(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ao(r)}function Su(e,t){const n=Gr(e);return n===t||!tr(n)||Wi(n)?!1:nr(n).position==="fixed"||Su(n,t)}function zg(e,t){const n=t.get(e);if(n)return n;let r=Hi(e,[],!1).filter(c=>tr(c)&&sa(c)!=="body"),i=null;const a=nr(e).position==="fixed";let o=a?Gr(e):e;for(;tr(o)&&!Wi(o);){const c=nr(o),p=Ho(o);!p&&c.position==="fixed"&&(i=null),(a?!p&&!i:!p&&c.position==="static"&&!!i&&Pg.has(i.position)||Va(o)&&!p&&Su(e,o))?r=r.filter(v=>v!==o):i=c,o=Gr(o)}return t.set(e,r),r}function Mg(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=[...n==="clippingAncestors"?Wo(t)?[]:zg(t,this._c):[].concat(n),r],c=o[0],p=o.reduce((g,v)=>{const x=cc(t,v,i);return g.top=Tn(x.top,g.top),g.right=Wr(x.right,g.right),g.bottom=Wr(x.bottom,g.bottom),g.left=Tn(x.left,g.left),g},cc(t,c,i));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}}function Ng(e){const{width:t,height:n}=ku(e);return{width:t,height:n}}function Fg(e,t,n){const r=br(t),i=kr(t),a=n==="fixed",o=bi(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const p=mr(0);function g(){p.x=yl(i)}if(r||!r&&!a)if((sa(t)!=="body"||Va(i))&&(c=Go(t)),r){const I=bi(t,!0,a,t);p.x=I.x+t.clientLeft,p.y=I.y+t.clientTop}else i&&g();a&&!r&&i&&g();const v=i&&!r&&!a?Cu(i,c):mr(0),x=o.left+c.scrollLeft-p.x-v.x,y=o.top+c.scrollTop-p.y-v.y;return{x,y,width:o.width,height:o.height}}function hs(e){return nr(e).position==="static"}function uc(e,t){if(!br(e)||nr(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return kr(e)===n&&(n=n.ownerDocument.body),n}function Eu(e,t){const n=Ln(e);if(Wo(e))return n;if(!br(e)){let i=Gr(e);for(;i&&!Wi(i);){if(tr(i)&&!hs(i))return i;i=Gr(i)}return n}let r=uc(e,t);for(;r&&xg(r)&&hs(r);)r=uc(r,t);return r&&Wi(r)&&hs(r)&&!Ho(r)?n:r||Eg(e)||n}const qg=async function(e){const t=this.getOffsetParent||Eu,n=this.getDimensions,r=await n(e.floating);return{reference:Fg(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Vg(e){return nr(e).direction==="rtl"}const po={convertOffsetParentRelativeRectToViewportRelativeRect:Og,getDocumentElement:kr,getClippingRect:Mg,getOffsetParent:Eu,getElementRects:qg,getClientRects:Tg,getDimensions:Ng,getScale:Mi,isElement:tr,isRTL:Vg};function Au(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Bg(e,t){let n=null,r;const i=kr(e);function a(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function o(c,p){c===void 0&&(c=!1),p===void 0&&(p=1),a();const g=e.getBoundingClientRect(),{left:v,top:x,width:y,height:I}=g;if(c||t(),!y||!I)return;const R=no(x),D=no(i.clientWidth-(v+y)),U=no(i.clientHeight-(x+I)),Y=no(v),z={rootMargin:-R+"px "+-D+"px "+-U+"px "+-Y+"px",threshold:Tn(0,Wr(1,p))||1};let G=!0;function M(S){const V=S[0].intersectionRatio;if(V!==p){if(!G)return o();V?o(!1,V):r=setTimeout(()=>{o(!1,1e-7)},1e3)}V===1&&!Au(g,e.getBoundingClientRect())&&o(),G=!1}try{n=new IntersectionObserver(M,{...z,root:i.ownerDocument})}catch{n=new IntersectionObserver(M,z)}n.observe(e)}return o(!0),a}function $u(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:p=!1}=r,g=vl(e),v=i||a?[...g?Hi(g):[],...Hi(t)]:[];v.forEach(Y=>{i&&Y.addEventListener("scroll",n,{passive:!0}),a&&Y.addEventListener("resize",n)});const x=g&&c?Bg(g,n):null;let y=-1,I=null;o&&(I=new ResizeObserver(Y=>{let[q]=Y;q&&q.target===g&&I&&(I.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var z;(z=I)==null||z.observe(t)})),n()}),g&&!p&&I.observe(g),I.observe(t));let R,D=p?bi(e):null;p&&U();function U(){const Y=bi(e);D&&!Au(D,Y)&&n(),D=Y,R=requestAnimationFrame(U)}return n(),()=>{var Y;v.forEach(q=>{i&&q.removeEventListener("scroll",n),a&&q.removeEventListener("resize",n)}),x==null||x(),(Y=I)==null||Y.disconnect(),I=null,p&&cancelAnimationFrame(R)}}const _u=gg,Ou=bg,Tu=pg,dc=vg,Ug=hg,Lu=(e,t,n)=>{const r=new Map,i={platform:po,...n},a={...i.platform,_c:r};return dg(e,t,{...i,platform:a})};function jg(e){return Wg(e)}function ps(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Wg(e){for(let t=e;t;t=ps(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ps(e);t;t=ps(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||Ho(n)||t.tagName==="BODY"))return t}return null}var Hg=`:host {
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
`;function hc(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var Dc,ro=(Dc=globalThis==null?void 0:globalThis.HTMLElement)==null?void 0:Dc.prototype.hasOwnProperty("popover"),dt=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let r=0,i=0,a=0,o=0,c=0,p=0,g=0,v=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,c=t.left,p=t.top,g=t.right,v=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,c=e.left,p=e.top,g=e.right,v=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,c=e.right,p=e.bottom,g=t.left,v=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,c=t.right,p=t.bottom,g=e.left,v=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${v}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||hc(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){var e,t;!this.anchorEl||!this.active||((t=(e=this.popup).showPopover)==null||t.call(e),this.cleanup=$u(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{var t,n;(n=(t=this.popup).hidePopover)==null||n.call(t),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[_u({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(dc({apply:({rects:r})=>{const i=this.sync==="width"||this.sync==="both",a=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=a?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let t;ro&&!hc(this.anchor)&&this.boundary==="scroll"&&(t=Hi(this.anchorEl).filter(r=>r instanceof Element)),this.flip&&e.push(Tu({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ou({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(dc({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Ug({element:this.arrowEl,padding:this.arrowPadding}));const n=ro?r=>po.getOffsetParent(r,jg):po.getOffsetParent;Lu(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:ro?"absolute":"fixed",platform:{...po,getOffsetParent:n}}).then(({x:r,y:i,middlewareData:a,placement:o})=>{const c=this.localize.dir()==="rtl",p={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){const g=a.arrow.x,v=a.arrow.y;let x="",y="",I="",R="";if(this.arrowPlacement==="start"){const D=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";x=typeof v=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",y=c?D:"",R=c?"":D}else if(this.arrowPlacement==="end"){const D=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";y=c?"":D,R=c?D:"",I=typeof v=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(R=typeof g=="number"?"calc(50% - var(--arrow-size-diagonal))":"",x=typeof v=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(R=typeof g=="number"?`${g}px`:"",x=typeof v=="number"?`${v}px`:"");Object.assign(this.arrowEl.style,{top:x,right:y,bottom:I,left:R,[p]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new bu)}render(){return _`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${qe({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${qe({popup:!0,"popup-active":this.active,"popup-fixed":!ro,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?_`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};dt.css=Hg;l([ce(".popup")],dt.prototype,"popup",2);l([ce(".arrow")],dt.prototype,"arrowEl",2);l([f()],dt.prototype,"anchor",2);l([f({type:Boolean,reflect:!0})],dt.prototype,"active",2);l([f({reflect:!0})],dt.prototype,"placement",2);l([f()],dt.prototype,"boundary",2);l([f({type:Number})],dt.prototype,"distance",2);l([f({type:Number})],dt.prototype,"skidding",2);l([f({type:Boolean})],dt.prototype,"arrow",2);l([f({attribute:"arrow-placement"})],dt.prototype,"arrowPlacement",2);l([f({attribute:"arrow-padding",type:Number})],dt.prototype,"arrowPadding",2);l([f({type:Boolean})],dt.prototype,"flip",2);l([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],dt.prototype,"flipFallbackPlacements",2);l([f({attribute:"flip-fallback-strategy"})],dt.prototype,"flipFallbackStrategy",2);l([f({type:Object})],dt.prototype,"flipBoundary",2);l([f({attribute:"flip-padding",type:Number})],dt.prototype,"flipPadding",2);l([f({type:Boolean})],dt.prototype,"shift",2);l([f({type:Object})],dt.prototype,"shiftBoundary",2);l([f({attribute:"shift-padding",type:Number})],dt.prototype,"shiftPadding",2);l([f({attribute:"auto-size"})],dt.prototype,"autoSize",2);l([f()],dt.prototype,"sync",2);l([f({type:Object})],dt.prototype,"autoSizeBoundary",2);l([f({attribute:"auto-size-padding",type:Number})],dt.prototype,"autoSizePadding",2);l([f({attribute:"hover-bridge",type:Boolean})],dt.prototype,"hoverBridge",2);dt=l([ue("wa-popup")],dt);var Gg=`:host {
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
`,Gi=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.position=50}handleDrag(e){const{width:t}=this.getBoundingClientRect(),n=this.localize.dir()==="rtl";e.preventDefault(),_a(this,{onMove:r=>{this.customStates.set("dragging",!0),this.position=parseFloat(Ye(r/t*100,0,100).toFixed(2)),n&&(this.position=100-this.position)},onStop:()=>{this.customStates.set("dragging",!1)},initialEvent:e})}handleKeyDown(e){const t=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight")&&(i-=r),(t&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft")&&(i+=r),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=Ye(i,0,100),this.position=i}}handlePositionChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return _`
      <div id="comparison" class="image" part="base">
        <div part="before" class="before">
          <slot name="before"></slot>
        </div>

        <div
          part="after"
          class="after"
          style=${_n({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
        >
          <slot name="after"></slot>
        </div>
      </div>

      <div
        part="divider"
        class="divider"
        style=${_n({left:e?`${100-this.position}%`:`${this.position}%`})}
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
    `}};Gi.css=Gg;l([ce(".handle")],Gi.prototype,"handle",2);l([f({type:Number,reflect:!0})],Gi.prototype,"position",2);l([me("position",{waitUntilFirstUpdate:!0})],Gi.prototype,"handlePositionChange",1);Gi=l([ue("wa-comparison")],Gi);var Kg=class extends Event{constructor(e){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Yg=`:host {
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
`,en=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),n=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let i=this.from,a="";n?[i,a]=this.from.trim().split("."):r&&([i,a]=this.from.trim().replace(/\]$/,"").split("["));const o="getElementById"in t?t.getElementById(i):null;o?r?e=o.getAttribute(a)||"":n?e=o[a]||"":e=o.textContent||"":(this.showStatus("error"),this.dispatchEvent(new zi))}if(!e)this.showStatus("error"),this.dispatchEvent(new zi);else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.dispatchEvent(new Kg({value:e}))}catch{this.showStatus("error"),this.dispatchEvent(new zi)}}async showStatus(e){const t=e==="success"?this.successIcon:this.errorIcon;await wt(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=e,t.hidden=!1,await wt(t,"show"),setTimeout(async()=>{await wt(t,"hide"),t.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await wt(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return _`
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
          class=${qe({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
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
    `}};en.css=[hu,Yg];l([ce('slot[name="copy-icon"]')],en.prototype,"copyIcon",2);l([ce('slot[name="success-icon"]')],en.prototype,"successIcon",2);l([ce('slot[name="error-icon"]')],en.prototype,"errorIcon",2);l([ce("wa-tooltip")],en.prototype,"tooltip",2);l([pe()],en.prototype,"isCopying",2);l([pe()],en.prototype,"status",2);l([f()],en.prototype,"value",2);l([f()],en.prototype,"from",2);l([f({type:Boolean,reflect:!0})],en.prototype,"disabled",2);l([f({attribute:"copy-label"})],en.prototype,"copyLabel",2);l([f({attribute:"success-label"})],en.prototype,"successLabel",2);l([f({attribute:"error-label"})],en.prototype,"errorLabel",2);l([f({attribute:"feedback-duration",type:Number})],en.prototype,"feedbackDuration",2);l([f({attribute:"tooltip-placement"})],en.prototype,"tooltipPlacement",2);en=l([ue("wa-copy-button")],en);var Ii=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},Ci=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},Si=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Ei=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}},Xg=`:host {
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
`,Ot=class extends Oe{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),this.hideDelay))}}connectedCallback(){super.connectedCallback(),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Bo("wa-tooltip-"))}disconnectedCallback(){if(super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor){const e=this.anchor.getAttribute("aria-labelledby")||"";this.anchor.setAttribute("aria-labelledby",e.replace(this.id,""))}}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;const e=new Ei;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await wt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Ci)}else{const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await wt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Ii)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.querySelector(`#${this.for}`):null,n=this.anchor;if(t===n)return;const{signal:r}=this.eventController,i=new RegExp(`\\b${this.id}\\b`);if(t){const a=t.getAttribute("aria-labelledby")||"";a.match(i)||t.setAttribute("aria-labelledby",a+" "+this.id),t.addEventListener("blur",this.handleBlur,{capture:!0,signal:r}),t.addEventListener("focus",this.handleFocus,{capture:!0,signal:r}),t.addEventListener("click",this.handleClick,{signal:r}),t.addEventListener("mouseover",this.handleMouseOver,{signal:r}),t.addEventListener("mouseout",this.handleMouseOut,{signal:r})}if(n){const a=n.getAttribute("aria-labelledby")||"";n.setAttribute("aria-labelledby",a.replace(i,"")),n.removeEventListener("blur",this.handleBlur,{capture:!0}),n.removeEventListener("focus",this.handleFocus,{capture:!0}),n.removeEventListener("click",this.handleClick),n.removeEventListener("mouseover",this.handleMouseOver),n.removeEventListener("mouseout",this.handleMouseOut)}this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,er(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,er(this,"wa-after-hide")}render(){return _`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${qe({tooltip:!0,"tooltip-open":this.open})}
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
    `}};Ot.css=Xg;Ot.dependencies={"wa-popup":dt};l([ce("slot:not([name])")],Ot.prototype,"defaultSlot",2);l([ce(".body")],Ot.prototype,"body",2);l([ce("wa-popup")],Ot.prototype,"popup",2);l([f()],Ot.prototype,"placement",2);l([f({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);l([f({type:Number})],Ot.prototype,"distance",2);l([f({type:Boolean,reflect:!0})],Ot.prototype,"open",2);l([f({type:Number})],Ot.prototype,"skidding",2);l([f({attribute:"show-delay",type:Number})],Ot.prototype,"showDelay",2);l([f({attribute:"hide-delay",type:Number})],Ot.prototype,"hideDelay",2);l([f()],Ot.prototype,"trigger",2);l([f({attribute:"without-arrow",type:Boolean,reflect:!0})],Ot.prototype,"withoutArrow",2);l([f()],Ot.prototype,"for",2);l([pe()],Ot.prototype,"anchor",2);l([me("open",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleOpenChange",1);l([me("for")],Ot.prototype,"handleForChange",1);l([me(["distance","placement","skidding"])],Ot.prototype,"handleOptionsChange",1);l([me("disabled")],Ot.prototype,"handleDisabledChange",1);Ot=l([ue("wa-tooltip")],Ot);var Zg=`:host {
  --spacing: var(--wa-space-m);
  --show-duration: 200ms;
  --hide-duration: 200ms;

  display: block;
}

:host summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    outline-offset: calc(var(--spacing) + var(--wa-focus-ring-offset));
  }
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
:host([appearance~='plain']) details {
  background-color: transparent;
  border-color: transparent;
}

:host([appearance~='outlined']) details {
  background-color: var(--wa-color-surface-default);
  border-color: var(--wa-color-surface-border);
}

:host([appearance~='filled']) details {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: transparent;
}

:host([appearance~='filled'][appearance~='outlined']) details {
  border-color: var(--wa-color-neutral-border-quiet);
}

:host([appearance='plain']) details {
  border-radius: 0;
}

:host([disabled]) details {
  opacity: 0.5;
  cursor: not-allowed;
}

:host summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing);
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  padding: var(--spacing); /* Add padding here */

  &::marker,
  &::-webkit-details-marker {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: calc(var(--spacing) + var(--wa-focus-ring-offset));
  }
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
`,pn=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(e){e.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(e){e.composedPath().some(r=>{var a;if(!(r instanceof HTMLElement))return!1;const i=(a=r.tagName)==null?void 0:a.toLowerCase();return["a","button","input","textarea","select"].includes(i)?!0:r instanceof St?!("disabled"in r)||!r.disabled:!1})||(e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(n=>{n!==this&&n.open&&(n.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const e=new Ei;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const t=Co(getComputedStyle(this.body).getPropertyValue("--show-duration"));await Io(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new Ci)}else{const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const t=Co(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await Io(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new Ii)}}async show(){if(!(this.open||this.disabled))return this.open=!0,er(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,er(this,"wa-after-hide")}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return _`
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
          class=${qe({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};pn.css=Zg;l([ce("details")],pn.prototype,"details",2);l([ce("summary")],pn.prototype,"header",2);l([ce(".body")],pn.prototype,"body",2);l([ce(".expand-icon-slot")],pn.prototype,"expandIconSlot",2);l([pe()],pn.prototype,"isAnimating",2);l([f({type:Boolean,reflect:!0})],pn.prototype,"open",2);l([f()],pn.prototype,"summary",2);l([f()],pn.prototype,"name",2);l([f({type:Boolean,reflect:!0})],pn.prototype,"disabled",2);l([f({reflect:!0})],pn.prototype,"appearance",2);l([f({attribute:"icon-placement",reflect:!0})],pn.prototype,"iconPlacement",2);l([me("open",{waitUntilFirstUpdate:!0})],pn.prototype,"handleOpenChange",1);pn=l([ue("wa-details")],pn);function Jg(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Ms=new Set;function Qg(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function eb(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function $o(e){if(Ms.add(e),!document.documentElement.classList.contains("wa-scroll-lock")){const t=Qg()+eb();let n=getComputedStyle(document.documentElement).scrollbarGutter;(!n||n==="auto")&&(n="stable"),t<2&&(n=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",n),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${t}px`)}}function _o(e){Ms.delete(e),Ms.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function Ns(e,t,n="vertical",r="smooth"){const i=Jg(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,c=t.scrollLeft,p=t.scrollLeft+t.offsetWidth,g=t.scrollTop,v=t.scrollTop+t.offsetHeight;(n==="horizontal"||n==="both")&&(o<c?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>p&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n==="vertical"||n==="both")&&(a<g?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>v&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}function wl(e){return e.split(" ").map(t=>t.trim()).filter(t=>t!=="")}var tb=`:host {
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
`,Rr=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.hasSlotController=new zn(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),$o(this))}disconnectedCallback(){super.disconnectedCallback(),_o(this),this.removeOpenListeners()}async requestClose(e){const t=new Si({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,wt(this.dialog,"pulse");return}this.removeOpenListeners(),await wt(this.dialog,"hide"),this.open=!1,this.dialog.close(),_o(this);const n=this.originalTrigger;typeof(n==null?void 0:n.focus)=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new Ii)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),this.dialog.classList.contains("hide")||this.requestClose(this.dialog)}handleDialogClick(e){const n=e.target.closest('[data-dialog="close"]');n&&(e.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await wt(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const e=new Ei;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),$o(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"&&t.focus()}),await wt(this.dialog,"show"),this.dispatchEvent(new Ci)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return _`
      <dialog
        part="dialog"
        class=${qe({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?_`
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

        ${t?_`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};Rr.css=tb;l([ce(".dialog")],Rr.prototype,"dialog",2);l([f({type:Boolean,reflect:!0})],Rr.prototype,"open",2);l([f({reflect:!0})],Rr.prototype,"label",2);l([f({attribute:"without-header",type:Boolean,reflect:!0})],Rr.prototype,"withoutHeader",2);l([f({attribute:"light-dismiss",type:Boolean})],Rr.prototype,"lightDismiss",2);l([me("open",{waitUntilFirstUpdate:!0})],Rr.prototype,"handleOpenChange",1);Rr=l([ue("wa-dialog")],Rr);document.addEventListener("click",e=>{const t=e.target.closest("[data-dialog]");if(t instanceof Element){const[n,r]=wl(t.getAttribute("data-dialog")||"");if(n==="open"&&(r!=null&&r.length)){const a=t.getRootNode().getElementById(r);(a==null?void 0:a.localName)==="wa-dialog"?a.open=!0:console.warn(`A dialog with an ID of "${r}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var nb=`:host {
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
`,Oa=class extends Oe{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};Oa.css=nb;l([f({reflect:!0})],Oa.prototype,"orientation",2);l([me("orientation")],Oa.prototype,"handleVerticalChange",1);Oa=l([ue("wa-divider")],Oa);var rb=`:host {
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
`,vr=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.hasSlotController=new zn(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.drawer.showModal(),$o(this))}disconnectedCallback(){super.disconnectedCallback(),_o(this),this.removeOpenListeners()}async requestClose(e){const t=new Si({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,wt(this.drawer,"pulse");return}this.removeOpenListeners(),await wt(this.drawer,"hide"),this.open=!1,this.drawer.close(),_o(this);const n=this.originalTrigger;typeof(n==null?void 0:n.focus)=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new Ii)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),this.drawer.classList.contains("hide")||this.requestClose(this.drawer)}handleDialogClick(e){const n=e.target.closest('[data-drawer="close"]');n&&(e.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(e){e.target===this.drawer&&(this.lightDismiss?this.requestClose(this.drawer):await wt(this.drawer,"pulse"))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open&&(this.open=!0,this.requestClose(this.drawer))}async show(){const e=new Ei;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),$o(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"&&t.focus()}),await wt(this.drawer,"show"),this.dispatchEvent(new Ci)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return _`
      <dialog
        part="dialog"
        class=${qe({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?_`
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

        ${t?_`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};vr.css=rb;l([ce(".drawer")],vr.prototype,"drawer",2);l([f({type:Boolean,reflect:!0})],vr.prototype,"open",2);l([f({reflect:!0})],vr.prototype,"label",2);l([f({reflect:!0})],vr.prototype,"placement",2);l([f({attribute:"without-header",type:Boolean,reflect:!0})],vr.prototype,"withoutHeader",2);l([f({attribute:"light-dismiss",type:Boolean})],vr.prototype,"lightDismiss",2);l([me("open",{waitUntilFirstUpdate:!0})],vr.prototype,"handleOpenChange",1);vr=l([ue("wa-drawer")],vr);document.addEventListener("click",e=>{const t=e.target.closest("[data-drawer]");if(t instanceof Element){const[n,r]=wl(t.getAttribute("data-drawer")||"");if(n==="open"&&(r!=null&&r.length)){const a=t.getRootNode().getElementById(r);(a==null?void 0:a.localName)==="wa-drawer"?a.open=!0:console.warn(`A drawer with an ID of "${r}" could not be found in this document.`)}}});document.body.addEventListener("pointerdown",()=>{});var ib=class extends Event{constructor(e){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};function*Du(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Du(e.shadowRoot.activeElement)))}var ab=`:host {
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
`,fs=new Set,xn=class extends Oe{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new it(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{const t=this.localize.dir()==="rtl";if(e.key==="Escape"){const v=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,v==null||v.focus();return}const n=[...Du()].find(v=>v.localName==="wa-dropdown-item"),r=(n==null?void 0:n.localName)==="wa-dropdown-item",i=this.getCurrentSubmenuItem(),a=!!i;let o,c,p;a?(o=this.getSubmenuItems(i),c=o.find(v=>v.active||v===n),p=c?o.indexOf(c):-1):(o=this.getItems(),c=o.find(v=>v.active||v===n),p=c?o.indexOf(c):-1);let g;if(e.key==="ArrowUp"&&(e.preventDefault(),e.stopPropagation(),p>0?g=o[p-1]:g=o[o.length-1]),e.key==="ArrowDown"&&(e.preventDefault(),e.stopPropagation(),p!==-1&&p<o.length-1?g=o[p+1]:g=o[0]),e.key===(t?"ArrowLeft":"ArrowRight")&&r&&c&&c.hasSubmenu){e.preventDefault(),e.stopPropagation(),c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{const v=this.getSubmenuItems(c);v.length>0&&(v.forEach((x,y)=>x.active=y===0),v[0].focus())},0);return}if(e.key===(t?"ArrowRight":"ArrowLeft")&&a){e.preventDefault(),e.stopPropagation();const v=this.removeFromSubmenuStack();v&&(v.submenuOpen=!1,setTimeout(()=>{v.focus(),v.active=!0,(v.slot==="submenu"?this.getSubmenuItems(v.parentElement):this.getItems()).forEach(y=>{y!==v&&(y.active=!1)})},0));return}if((e.key==="Home"||e.key==="End")&&(e.preventDefault(),e.stopPropagation(),g=e.key==="Home"?o[0]:o[o.length-1]),e.key==="Tab"&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=e.key,o.some(v=>{const x=(v.textContent||"").trim().toLowerCase(),y=this.userTypedQuery.trim().toLowerCase();return x.startsWith(y)?(g=v,!0):!1})),g){e.preventDefault(),e.stopPropagation(),o.forEach(v=>v.active=v===g),g.focus();return}(e.key==="Enter"||e.key===" "&&this.userTypedQuery==="")&&r&&c&&(e.preventDefault(),e.stopPropagation(),c.hasSubmenu?(c.submenuOpen=!0,this.addToSubmenuStack(c),setTimeout(()=>{const v=this.getSubmenuItems(c);v.length>0&&(v.forEach((x,y)=>x.active=y===0),v[0].focus())},0)):this.makeSelection(c))},this.handleDocumentPointerDown=e=>{e.composedPath().some(r=>r instanceof HTMLElement?r===this||r.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{var g;const t=this.getCurrentSubmenuItem();if(!(t!=null&&t.submenuOpen)||!t.submenuElement)return;const n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl",i=r?n.right:n.left,a=r?Math.max(e.clientX,i):Math.min(e.clientX,i),o=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${a}px`),t.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${o}px`);const c=t.matches(":hover"),p=((g=t.submenuElement)==null?void 0:g.matches(":hover"))||!!e.composedPath().find(v=>v instanceof HTMLElement&&v.closest('[part="submenu"]')===t.submenuElement);!c&&!p&&setTimeout(()=>{var v;!t.matches(":hover")&&!((v=t.submenuElement)!=null&&v.matches(":hover"))&&(t.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(e){e.has("open")&&(this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())),e.has("size")&&this.syncItemSizes()}getItems(e=!1){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(n=>n.localName==="wa-dropdown-item");return e?t:t.filter(n=>!n.disabled)}getSubmenuItems(e,t=!1){var i;const n=((i=e.shadowRoot)==null?void 0:i.querySelector('slot[name="submenu"]'))||e.querySelector('slot[name="submenu"]');if(!n)return[];const r=n.assignedElements({flatten:!0}).filter(a=>a.localName==="wa-dropdown-item");return t?r:r.filter(a=>!a.disabled)}syncItemSizes(){this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.localName==="wa-dropdown-item").forEach(t=>t.size=this.size)}addToSubmenuStack(e){const t=this.openSubmenuStack.indexOf(e);t!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1):this.openSubmenuStack.push(e)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(t=>{t.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){const t=e.closest('wa-dropdown-item:not([slot="submenu"])');let n;t?n=this.getSubmenuItems(t,!0):n=this.getItems(!0),n.forEach(r=>{r!==e&&r.submenuOpen&&(r.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger())return;const t=new Ei;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}fs.forEach(r=>r.open=!1),this.popup.active=!0,this.open=!0,fs.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await wt(this.menu,"show");const n=this.getItems();n.length>0&&(n.forEach((r,i)=>r.active=i===0),n[0].focus()),this.dispatchEvent(new Ci)}async hideMenu(){const e=new Si({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,fs.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await wt(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new Ii)}handleMenuClick(e){const t=e.target.closest("wa-dropdown-item");if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.submenuOpen=!0),e.stopPropagation();return}this.makeSelection(t)}}async handleMenuSlotChange(){const e=this.getItems(!0);await Promise.all(e.map(r=>r.updateComplete)),this.syncItemSizes();const t=e.some(r=>r.type==="checkbox"),n=e.some(r=>r.hasSubmenu);e.forEach((r,i)=>{r.active=i===0,r.checkboxAdjacent=t,r.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){const t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);const t=$u(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);const n=e.submenuElement.querySelector('slot[name="submenu"]');n&&(n.removeEventListener("slotchange",xn.handleSubmenuSlotChange),n.addEventListener("slotchange",xn.handleSubmenuSlotChange),xn.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){const t=e.target;if(!t)return;const n=t.assignedElements().filter(a=>a.localName==="wa-dropdown-item");if(n.length===0)return;const r=n.some(a=>a.hasSubmenu),i=n.some(a=>a.type==="checkbox");n.forEach(a=>{a.submenuAdjacent=r,a.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;const t=this.getSubmenuItems(e,!0),n=t.some(r=>r.hasSubmenu);t.forEach(r=>{r.submenuAdjacent=n})}cleanupSubmenuPosition(e){const t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;const n=this.localize.dir()==="rtl"?"left-start":"right-start";Lu(e,e.submenuElement,{placement:n,middleware:[_u({mainAxis:0,crossAxis:-5}),Tu({fallbackStrategy:"bestFit"}),Ou({padding:8})]}).then(({x:r,y:i,placement:a})=>{e.submenuElement.setAttribute("data-placement",a),Object.assign(e.submenuElement.style,{left:`${r}px`,top:`${i}px`})})}updateSafeTriangleCoordinates(e){var i;if(!e.submenuElement||!e.submenuOpen)return;if((i=document.activeElement)==null?void 0:i.matches(":focus-visible")){e.submenuElement.style.setProperty("--safe-triangle-visible","none");return}e.submenuElement.style.setProperty("--safe-triangle-visible","block");const n=e.submenuElement.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${r?n.right:n.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${n.top}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${r?n.right:n.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${n.bottom}px`)}makeSelection(e){const t=this.getTrigger();if(e.disabled)return;e.type==="checkbox"&&(e.checked=!e.checked);const n=new ib({item:e});this.dispatchEvent(n),n.defaultPrevented||(this.open=!1,t==null||t.focus())}async syncAriaAttributes(){const e=this.getTrigger();let t;e&&(e.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await e.updateComplete,t=e.shadowRoot.querySelector('[part="base"]')):t=e,t.hasAttribute("id")||t.setAttribute("id",Bo("wa-dropdown-trigger-")),t.setAttribute("aria-haspopup","menu"),t.setAttribute("aria-expanded",this.open?"true":"false"),this.menu.setAttribute("aria-expanded","false"))}render(){let e=this.hasUpdated?this.popup.active:this.open;return _`
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
    `}};xn.css=[gn,ab];l([ce("slot:not([name])")],xn.prototype,"defaultSlot",2);l([ce("#menu")],xn.prototype,"menu",2);l([ce("wa-popup")],xn.prototype,"popup",2);l([f({type:Boolean,reflect:!0})],xn.prototype,"open",2);l([f({reflect:!0})],xn.prototype,"size",2);l([f({reflect:!0})],xn.prototype,"placement",2);l([f({type:Number})],xn.prototype,"distance",2);l([f({type:Number})],xn.prototype,"skidding",2);xn=l([ue("wa-dropdown")],xn);var ob=`:host {
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
`,fn=class extends Oe{constructor(){super(...arguments),this.hasSlotController=new zn(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(e){e.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),e.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),e.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),e.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),e.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.notifyParentOfOpening(),this.submenuElement.showPopover(),this.submenuElement.hidden=!1,this.submenuElement.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await wt(this.submenuElement,"show"),setTimeout(()=>{const e=this.getSubmenuItems();e.length>0&&(e.forEach((t,n)=>t.active=n===0),e[0].focus())},0))}notifyParentOfOpening(){const e=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);const t=this.parentElement;t&&[...t.children].filter(r=>r!==this&&r.localName==="wa-dropdown-item"&&r.getAttribute("slot")===this.getAttribute("slot")&&r.submenuOpen).forEach(r=>{r.submenuOpen=!1})}async closeSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),this.submenuElement.hidden||(await wt(this.submenuElement,"hide"),this.submenuElement.hidden=!0,this.submenuElement.removeAttribute("data-visible"),this.submenuElement.hidePopover()))}getSubmenuItems(){return[...this.children].filter(e=>e.localName==="wa-dropdown-item"&&e.getAttribute("slot")==="submenu"&&!e.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return _`
      ${this.type==="checkbox"?_`
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

      ${this.hasSubmenu?_`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?_`
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
    `}};fn.css=ob;l([ce("#submenu")],fn.prototype,"submenuElement",2);l([f({type:Boolean})],fn.prototype,"active",2);l([f({reflect:!0})],fn.prototype,"variant",2);l([f({reflect:!0})],fn.prototype,"size",2);l([f({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],fn.prototype,"checkboxAdjacent",2);l([f({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],fn.prototype,"submenuAdjacent",2);l([f()],fn.prototype,"value",2);l([f({reflect:!0})],fn.prototype,"type",2);l([f({type:Boolean})],fn.prototype,"checked",2);l([f({type:Boolean,reflect:!0})],fn.prototype,"disabled",2);l([f({type:Boolean,reflect:!0})],fn.prototype,"submenuOpen",2);l([pe()],fn.prototype,"hasSubmenu",2);fn=l([ue("wa-dropdown-item")],fn);var Ta=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.value=0,this.unit="byte",this.display="short"}static get styles(){return[]}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],n=this.unit==="bit"?e:t,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),n.length-1)),i=n[r]+this.unit,a=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(a,{style:"unit",unit:i,unitDisplay:this.display})}};l([f({type:Number})],Ta.prototype,"value",2);l([f()],Ta.prototype,"unit",2);l([f()],Ta.prototype,"display",2);Ta=l([ue("wa-format-bytes")],Ta);var In=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.date=new Date,this.hourFormat="auto"}static get styles(){return[]}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(isNaN(e.getMilliseconds()))return;const n=this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t});return _`<time datetime=${e.toISOString()}>${n}</time>`}};l([f()],In.prototype,"date",2);l([f()],In.prototype,"weekday",2);l([f()],In.prototype,"era",2);l([f()],In.prototype,"year",2);l([f()],In.prototype,"month",2);l([f()],In.prototype,"day",2);l([f()],In.prototype,"hour",2);l([f()],In.prototype,"minute",2);l([f()],In.prototype,"second",2);l([f({attribute:"time-zone-name"})],In.prototype,"timeZoneName",2);l([f({attribute:"time-zone"})],In.prototype,"timeZone",2);l([f({attribute:"hour-format"})],In.prototype,"hourFormat",2);In=l([ue("wa-format-date")],In);var Wn=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.value=0,this.type="decimal",this.withoutGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}static get styles(){return[]}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.withoutGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};l([f({type:Number})],Wn.prototype,"value",2);l([f()],Wn.prototype,"type",2);l([f({attribute:"without-grouping",type:Boolean})],Wn.prototype,"withoutGrouping",2);l([f()],Wn.prototype,"currency",2);l([f({attribute:"currency-display"})],Wn.prototype,"currencyDisplay",2);l([f({attribute:"minimum-integer-digits",type:Number})],Wn.prototype,"minimumIntegerDigits",2);l([f({attribute:"minimum-fraction-digits",type:Number})],Wn.prototype,"minimumFractionDigits",2);l([f({attribute:"maximum-fraction-digits",type:Number})],Wn.prototype,"maximumFractionDigits",2);l([f({attribute:"minimum-significant-digits",type:Number})],Wn.prototype,"minimumSignificantDigits",2);l([f({attribute:"maximum-significant-digits",type:Number})],Wn.prototype,"maximumSignificantDigits",2);Wn=l([ue("wa-format-number")],Wn);var ms=new Map;function sb(e,t="cors"){const n=ms.get(e);if(n!==void 0)return Promise.resolve(n);const r=fetch(e,{mode:t}).then(async i=>{const a={ok:i.ok,status:i.status,html:await i.text()};return ms.set(e,a),a});return ms.set(e,r),r}var pc=class extends Event{constructor(e){super("wa-include-error",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},lb=`:host {
  display: block;
}
`,vi=class extends Oe{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(n=>t.setAttribute(n.name,n.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await sb(e,this.mode);if(e!==this.src)return;if(!t.ok){this.dispatchEvent(new pc({status:t.status}));return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(n=>this.executeScript(n)),this.dispatchEvent(new dl)}catch{this.dispatchEvent(new pc({status:-1}))}}render(){return _`<slot></slot>`}};vi.css=lb;l([f()],vi.prototype,"src",2);l([f()],vi.prototype,"mode",2);l([f({attribute:"allow-scripts",type:Boolean})],vi.prototype,"allowScripts",2);l([me("src")],vi.prototype,"handleSrcChange",1);vi=l([ue("wa-include")],vi);var cb=class extends Event{constructor(e){super("wa-mutation",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},ub=`:host {
  display: contents;
}
`,rr=class extends Oe{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.dispatchEvent(new cb({mutationList:e}))}}connectedCallback(){super.connectedCallback(),typeof MutationObserver<"u"&&(this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver())}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return _` <slot></slot> `}};rr.css=ub;l([f({reflect:!0})],rr.prototype,"attr",2);l([f({attribute:"attr-old-value",type:Boolean,reflect:!0})],rr.prototype,"attrOldValue",2);l([f({attribute:"char-data",type:Boolean,reflect:!0})],rr.prototype,"charData",2);l([f({attribute:"char-data-old-value",type:Boolean,reflect:!0})],rr.prototype,"charDataOldValue",2);l([f({attribute:"child-list",type:Boolean,reflect:!0})],rr.prototype,"childList",2);l([f({type:Boolean,reflect:!0})],rr.prototype,"disabled",2);l([me("disabled")],rr.prototype,"handleDisabledChange",1);l([me("attr",{waitUntilFirstUpdate:!0}),me("attr-old-value",{waitUntilFirstUpdate:!0}),me("char-data",{waitUntilFirstUpdate:!0}),me("char-data-old-value",{waitUntilFirstUpdate:!0}),me("childList",{waitUntilFirstUpdate:!0})],rr.prototype,"handleChange",1);rr=l([ue("wa-mutation-observer")],rr);var db=`:host {
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
`,gs=new Set,tn=class extends Oe{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=e=>{e.target.closest('[data-popover="close"]')&&(e.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=e=>{const t=e.target;this.anchor&&e.composedPath().includes(this.anchor)||t.closest("wa-popover")!==this&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=Bo("wa-popover-"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(e){e.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const e=new Ei;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}gs.forEach(t=>t.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,gs.add(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await wt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Ci)}else{const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),gs.delete(this),await wt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Ii)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.querySelector(`#${this.for}`):null,n=this.anchor;if(t===n)return;const{signal:r}=this.eventController;t&&t.addEventListener("click",this.handleAnchorClick,{signal:r}),n&&n.removeEventListener("click",this.handleAnchorClick),this.anchor=t,this.for&&!t&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,er(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,er(this,"wa-after-hide")}render(){return _`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${qe({popover:!0,"popover-open":this.open})}
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
    `}};tn.css=db;tn.dependencies={"wa-popup":dt};l([ce("dialog")],tn.prototype,"dialog",2);l([ce(".body")],tn.prototype,"body",2);l([ce("wa-popup")],tn.prototype,"popup",2);l([pe()],tn.prototype,"anchor",2);l([f()],tn.prototype,"placement",2);l([f({type:Boolean,reflect:!0})],tn.prototype,"open",2);l([f({type:Number})],tn.prototype,"distance",2);l([f({type:Number})],tn.prototype,"skidding",2);l([f()],tn.prototype,"for",2);l([f({attribute:"without-arrow",type:Boolean,reflect:!0})],tn.prototype,"withoutArrow",2);l([me("open",{waitUntilFirstUpdate:!0})],tn.prototype,"handleOpenChange",1);l([me("for")],tn.prototype,"handleForChange",1);l([me(["distance","placement","skidding"])],tn.prototype,"handleOptionsChange",1);tn=l([ue("wa-popover")],tn);var hb=`:host {
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
`,Ki=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.value=0,this.indeterminate=!1,this.label=""}updated(e){e.has("value")&&requestAnimationFrame(()=>{this.style.setProperty("--percentage",`${Ye(this.value,0,100)}%`)})}render(){return _`
      <div
        part="base"
        class="progress-bar"
        role="progressbar"
        title=${Le(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?"0":this.value}
      >
        <div part="indicator" class="indicator">
          ${this.indeterminate?"":_` <slot part="label" class="label"></slot> `}
        </div>
      </div>
    `}};Ki.css=hb;l([f({type:Number,reflect:!0})],Ki.prototype,"value",2);l([f({type:Boolean,reflect:!0})],Ki.prototype,"indeterminate",2);l([f()],Ki.prototype,"label",2);Ki=l([ue("wa-progress-bar")],Ki);var pb=`:host {
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
`,yi=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),n=2*Math.PI*t,r=n-this.value/100*n;this.indicatorOffset=`${r}px`}}render(){return _`
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
    `}};yi.css=pb;l([ce(".indicator")],yi.prototype,"indicator",2);l([pe()],yi.prototype,"indicatorOffset",2);l([f({type:Number,reflect:!0})],yi.prototype,"value",2);l([f()],yi.prototype,"label",2);yi=l([ue("wa-progress-ring")],yi);var fb=`:host {
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
`,bs,Dn=class extends Oe{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H",this.generated=!1}firstUpdated(e){super.firstUpdated(e),this.hasUpdated&&this.generate()}generate(){if(this.style.setProperty("--size",`${this.size}px`),!!this.hasUpdated){if(!bs){Pt(()=>import("./qr-creator.es6.min-DtlEF1Ls.js"),[]).then(e=>{bs=e.default,this.generate()});return}bs.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas),this.generated=!0}}render(){var e;return _`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
      ></canvas>
    `}};Dn.css=fb;l([ce("canvas")],Dn.prototype,"canvas",2);l([f()],Dn.prototype,"value",2);l([f()],Dn.prototype,"label",2);l([f({type:Number})],Dn.prototype,"size",2);l([f()],Dn.prototype,"fill",2);l([f()],Dn.prototype,"background",2);l([f({type:Number})],Dn.prototype,"radius",2);l([f({attribute:"error-correction"})],Dn.prototype,"errorCorrection",2);l([pe()],Dn.prototype,"generated",2);l([me(["background","errorCorrection","fill","radius","size","value"])],Dn.prototype,"generate",1);Dn=l([ue("wa-qr-code")],Dn);var mb=`:host {
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
`,ln=class extends St{constructor(){super(),this.hasSlotController=new zn(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const t=e.target.closest("wa-radio");if(!t||t.disabled||t.forceDisabled||this.disabled)return;const n=this.value;this.value=t.value,t.checked=!0;const r=this.getAllRadios();for(const i of r)t!==i&&(i.checked=!1,i.setAttribute("tabindex","-1"));this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const e=[Uo({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:Bo("__wa-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}get validationTarget(){const e=this.querySelector(":is(wa-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();if(e.forEach((t,n)=>{t.setAttribute("size",this.size),t.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),t.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),t.toggleAttribute("data-wa-radio-first",n===0),t.toggleAttribute("data-wa-radio-inner",n!==0&&n!==e.length-1),t.toggleAttribute("data-wa-radio-last",n===e.length-1),t.forceDisabled=this.disabled}),await Promise.all(e.map(async t=>{await t.updateComplete,!t.disabled&&t.value===this.value?t.checked=!0:t.checked=!1})),this.disabled)e.forEach(t=>{t.tabIndex=-1});else{const t=e.filter(r=>!r.disabled),n=t.find(r=>r.checked);t.length>0&&(n?t.forEach(r=>{r.tabIndex=r.checked?0:-1}):t.forEach((r,i)=>{r.tabIndex=i===0?0:-1})),e.filter(r=>r.disabled).forEach(r=>{r.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios().filter(c=>!c.disabled);if(t.length<=0)return;e.preventDefault();const n=this.value,r=t.find(c=>c.checked)??t[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let a=t.indexOf(r)+i;a||(a=0),a<0&&(a=t.length-1),a>t.length-1&&(a=0);const o=t.some(c=>c.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(c=>{c.checked=!1,o||c.setAttribute("tabindex","-1")}),this.value=t[a].value,t[a].checked=!0,o?t[a].shadowRoot.querySelector("button").focus():(t[a].setAttribute("tabindex","0"),t[a].focus()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const t=this.getAllRadios(),n=t.find(a=>a.checked),r=t.find(a=>!a.disabled),i=n||r;i&&i.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t;return _`
      <fieldset
        part="form-control"
        class=${qe({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":n})}
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
          class=${qe({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};ln.css=[gn,Mr,mb];ln.shadowRootOptions={...St.shadowRootOptions,delegatesFocus:!0};l([ce("slot:not([name])")],ln.prototype,"defaultSlot",2);l([f()],ln.prototype,"label",2);l([f({attribute:"hint"})],ln.prototype,"hint",2);l([f({reflect:!0})],ln.prototype,"name",2);l([f({type:Boolean,reflect:!0})],ln.prototype,"disabled",2);l([f({reflect:!0})],ln.prototype,"orientation",2);l([pe()],ln.prototype,"value",1);l([f({attribute:"value",reflect:!0})],ln.prototype,"defaultValue",2);l([f({reflect:!0})],ln.prototype,"size",2);l([f({type:Boolean,reflect:!0})],ln.prototype,"required",2);l([f({type:Boolean,attribute:"with-label"})],ln.prototype,"withLabel",2);l([f({type:Boolean,attribute:"with-hint"})],ln.prototype,"withHint",2);ln=l([ue("wa-radio-group")],ln);var gb=`:host {
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
`,yr=class extends St{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this.setAttribute("aria-disabled",t?"true":"false"),t?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return _`
      <span part="control" class="control">
        ${this.checked?_`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};yr.css=[Mr,gn,gb];l([pe()],yr.prototype,"checked",2);l([pe()],yr.prototype,"forceDisabled",2);l([f({reflect:!0})],yr.prototype,"form",2);l([f({reflect:!0})],yr.prototype,"value",2);l([f({reflect:!0})],yr.prototype,"appearance",2);l([f({reflect:!0})],yr.prototype,"size",2);l([f({type:Boolean})],yr.prototype,"disabled",2);yr=l([ue("wa-radio")],yr);var fc=class extends Event{constructor(e){super("wa-hover",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},bb=`:host {
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
`,nn=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=(e,t)=>t?'<wa-icon name="star" library="system" variant="solid"></wa-icon>':'<wa-icon name="star" library="system" variant="regular"></wa-icon>',this.size="medium"}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:n,right:r,width:i}=this.rating.getBoundingClientRect(),a=t?this.roundToPrecision((r-e)/i*this.max,this.precision):this.roundToPrecision((e-n)/i*this.max,this.precision);return Ye(a,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.matches(":dir(ltr)"),n=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight"){const i=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft"){const i=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}roundToPrecision(e,t=.5){const n=1/t;return Math.ceil(e*n)/n}handleHoverValueChange(){this.dispatchEvent(new fc({phase:"move",value:this.hoverValue}))}handleIsHoveringChange(){this.dispatchEvent(new fc({phase:this.isHovering?"start":"end",value:this.hoverValue}))}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir,t=Array.from(Array(this.max).keys());let n=0;return this.disabled||this.readonly?n=this.value:n=this.isHovering?this.hoverValue:this.value,_`
      <div
        part="base"
        class=${qe({rating:!0,"rating-readonly":this.readonly,"rating-disabled":this.disabled})}
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
          ${t.map(r=>{const i=n>=r+1;return n>r&&n<r+1?_`
                <span
                  class=${qe({symbol:!0,"partial-symbol-container":!0,"symbol-hover":this.isHovering&&Math.ceil(n)===r+1})}
                  role="presentation"
                >
                  <div
                    style=${_n({clipPath:e?`inset(0 ${(n-r)*100}% 0 0)`:`inset(0 0 0 ${(n-r)*100}%)`})}
                  >
                    ${Dr(this.getSymbol(r+1,!1))}
                  </div>
                  <div
                    class="partial-filled"
                    style=${_n({clipPath:e?`inset(0 0 0 ${100-(n-r)*100}%)`:`inset(0 ${100-(n-r)*100}% 0 0)`})}
                  >
                    ${Dr(this.getSymbol(r+1,!0))}
                  </div>
                </span>
              `:_`
              <span
                class=${qe({symbol:!0,"symbol-hover":this.isHovering&&Math.ceil(n)===r+1,"symbol-active":n>=r+1})}
                role="presentation"
              >
                ${Dr(this.getSymbol(r+1,i))}
              </span>
            `})}
        </span>
      </div>
    `}};nn.css=[gn,bb];l([ce(".rating")],nn.prototype,"rating",2);l([pe()],nn.prototype,"hoverValue",2);l([pe()],nn.prototype,"isHovering",2);l([f()],nn.prototype,"label",2);l([f({type:Number})],nn.prototype,"value",2);l([f({type:Number})],nn.prototype,"max",2);l([f({type:Number})],nn.prototype,"precision",2);l([f({type:Boolean,reflect:!0})],nn.prototype,"readonly",2);l([f({type:Boolean,reflect:!0})],nn.prototype,"disabled",2);l([f()],nn.prototype,"getSymbol",2);l([f({reflect:!0})],nn.prototype,"size",2);l([qo({passive:!0})],nn.prototype,"handleTouchMove",1);l([me("hoverValue")],nn.prototype,"handleHoverValueChange",1);l([me("isHovering")],nn.prototype,"handleIsHoveringChange",1);nn=l([ue("wa-rating")],nn);var vb=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Kr=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const n=t.getTime()-e.getTime(),{unit:r,value:i}=vb.find(a=>Math.abs(n)<a.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(n/i),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let a;r==="minute"?a=io("second"):r==="hour"?a=io("minute"):r==="day"?a=io("hour"):a=io("day"),this.updateTimeout=setTimeout(()=>this.requestUpdate(),a)}return _`<time datetime=${this.isoTime}>${this.relativeTime}</time>`}};l([pe()],Kr.prototype,"isoTime",2);l([pe()],Kr.prototype,"relativeTime",2);l([f()],Kr.prototype,"date",2);l([f()],Kr.prototype,"format",2);l([f()],Kr.prototype,"numeric",2);l([f({type:Boolean})],Kr.prototype,"sync",2);Kr=l([ue("wa-relative-time")],Kr);function io(e){const n={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return n-Date.now()%n}var yb=class extends Event{constructor(e){super("wa-resize",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},wb=`:host {
  display: contents;
}
`,La=class extends Oe{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.dispatchEvent(new yb({entries:e}))}),this.disabled||this.updateComplete.then(()=>{this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(n=>this.resizeObserver.unobserve(n)),this.observedElements=[],t.forEach(n=>{this.resizeObserver.observe(n),this.observedElements.push(n)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return _` <slot @slotchange=${this.handleSlotChange}></slot> `}};La.css=wb;l([f({type:Boolean,reflect:!0})],La.prototype,"disabled",2);l([me("disabled",{waitUntilFirstUpdate:!0})],La.prototype,"handleDisabledChange",1);La=l([ue("wa-resize-observer")],La);var xb=`:host {
  --shadow-color: var(--wa-color-surface-default);
  --shadow-size: 2rem;

  /* private (defined dynamically) */
  --start-shadow-opacity: 0;
  --end-shadow-opacity: 0;

  display: block;
  position: relative;
  max-width: 100%;
  isolation: isolate;
  overflow: hidden;
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
`,zr=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(e){e.key==="Home"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),e.key==="End"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const e=Math.ceil(this.content.clientWidth),t=Math.abs(Math.ceil(this.content.scrollLeft)),r=Math.ceil(this.content.scrollWidth)-e;this.canScroll=r>0;const i=Math.min(1,t/(r*.05)),a=Math.min(1,(r-t)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(i||0)),this.style.setProperty("--end-shadow-opacity",String(a||0))}else{const e=Math.ceil(this.content.clientHeight),t=Math.abs(Math.ceil(this.content.scrollTop)),r=Math.ceil(this.content.scrollHeight)-e;this.canScroll=r>0;const i=Math.min(1,t/(r*.05)),a=Math.min(1,(r-t)/(r*.05));this.style.setProperty("--start-shadow-opacity",String(i||0)),this.style.setProperty("--end-shadow-opacity",String(a||0))}}render(){return _`
      ${this.withoutShadow?"":_`
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
    `}};zr.css=[xb];l([ce("#content")],zr.prototype,"content",2);l([pe()],zr.prototype,"canScroll",2);l([f({reflect:!0})],zr.prototype,"orientation",2);l([f({attribute:"without-scrollbar",type:Boolean,reflect:!0})],zr.prototype,"withoutScrollbar",2);l([f({attribute:"without-shadow",type:Boolean,reflect:!0})],zr.prototype,"withoutShadow",2);l([qo({passive:!0})],zr.prototype,"updateScroll",1);zr=l([ue("wa-scroller")],zr);var kb=`:host {
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
:host([appearance~='outlined']) .combobox {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance~='filled']) .combobox {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance~='filled'][appearance~='outlined']) .combobox {
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
`,Xe=class extends St{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new zn(this,"hint","label"),this.localize=new it(this),this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.form=null,this.required=!1,this.getTag=e=>_`
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
      `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{var i;const t=e.target,n=t.closest('[part~="clear-button"]')!==null,r=t.closest("wa-button")!==null;if(!(n||r)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const a=this.getAllOptions(),o=a.indexOf(this.currentOption);let c=Math.max(0,o);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(c=o+1,c>a.length-1&&(c=0)):e.key==="ArrowUp"?(c=o-1,c<0&&(c=a.length-1)):e.key==="Home"?c=0:e.key==="End"&&(c=a.length-1),this.setCurrentOption(a[c])}if(((i=e.key)==null?void 0:i.length)===1||e.key==="Backspace"){const a=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of a)if(o.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){const e=[Uo({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(e){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]),this._value=e??null,this.value!==t&&(this.valueHasChanged=!0,this.requestUpdate("value",t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),e==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(n=>!n.disabled).map(n=>n.value));let t=e;return e!=null&&(t=e.filter(n=>this.optionValues.has(n)),t=this.multiple?t:t[0],t=t??null),t}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const t=this.getAllOptions().filter(n=>n.hasAttribute("selected")||n.defaultSelected);if(t.length>0){const n=t.map(r=>r.value);this._defaultValue=this.multiple?n:n[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){const n=e.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="wa-button");this.disabled||n||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==null&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new mu),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const n=e.target.closest("wa-option");n&&!n.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(n):this.setSelectedOptions(n),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);const n=e.filter(r=>t.includes(r.value));this.setSelectedOptions(n)}handleTagRemove(e,t){var r;if(e.stopPropagation(),this.disabled)return;let n=t;if(!n){const i=e.target.closest("wa-tag[part~=tag]");if(i){const a=(r=this.shadowRoot)==null?void 0:r.querySelector('[part="tags"]');if(a){const c=Array.from(a.children).indexOf(i);c>=0&&c<this.selectedOptions.length&&(n=this.selectedOptions[c])}}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this!=null&&this.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(e){this.getAllOptions().forEach(n=>{n.current=!1,n.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(r=>{n.includes(r)||(r.selected=!1)}),n.length&&n.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var n,r,i;const e=this.getAllOptions();this.selectedOptions=e.filter(a=>{if(!this.hasInteracted&&!this.valueHasChanged){const o=this.defaultValue,c=Array.isArray(o)?o:[o];return a.hasAttribute("selected")||a.defaultSelected||a.selected||(c==null?void 0:c.includes(a.value))}return a.selected});let t=new Set(this.selectedOptions.map(a=>a.value));if(t.size>0||this._value){const a=this._value;if(this._value==null){let o=this.defaultValue??[];this._value=Array.isArray(o)?o:[o]}this._value=((n=this._value)==null?void 0:n.filter(o=>{var c;return!((c=this.optionValues)!=null&&c.has(o))}))??null,(r=this._value)==null||r.unshift(...t),this.requestUpdate("value",a)}if(this.multiple)this.placeholder&&!((i=this.value)!=null&&i.length)?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const a=this.selectedOptions[0];this.displayLabel=(a==null?void 0:a.label)??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const n=this.getTag(e,t);return n?typeof n=="string"?Dr(n):n:null}else if(t===this.maxOptionsVisible)return _`
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
        `;return null})}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(r=>t.includes(r.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const e=new Ei;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await wt(this.popup.popup,"show"),this.currentOption&&Ns(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Ci)}else{const e=new Si;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await wt(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Ii)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,er(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,er(this,"wa-after-hide")}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||_d)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,a=!!(this.placeholder&&(!this.value||this.value.length===0));return _`
      <div
        part="form-control"
        class=${qe({"form-control":!0,"form-control-has-label":n})}
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
            class=${qe({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":a})}
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
              ${this.multiple&&this.hasUpdated?_`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

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

              ${i?_`
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
          class=${qe({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};Xe.css=[kb,Mr,gn];l([ce(".select")],Xe.prototype,"popup",2);l([ce(".combobox")],Xe.prototype,"combobox",2);l([ce(".display-input")],Xe.prototype,"displayInput",2);l([ce(".value-input")],Xe.prototype,"valueInput",2);l([ce(".listbox")],Xe.prototype,"listbox",2);l([pe()],Xe.prototype,"displayLabel",2);l([pe()],Xe.prototype,"currentOption",2);l([pe()],Xe.prototype,"selectedOptions",2);l([pe()],Xe.prototype,"optionValues",2);l([f()],Xe.prototype,"name",2);l([f({attribute:!1})],Xe.prototype,"defaultValue",1);l([f({attribute:"value",reflect:!1})],Xe.prototype,"value",1);l([f({reflect:!0})],Xe.prototype,"size",2);l([f()],Xe.prototype,"placeholder",2);l([f({type:Boolean,reflect:!0})],Xe.prototype,"multiple",2);l([f({attribute:"max-options-visible",type:Number})],Xe.prototype,"maxOptionsVisible",2);l([f({type:Boolean})],Xe.prototype,"disabled",2);l([f({attribute:"with-clear",type:Boolean})],Xe.prototype,"withClear",2);l([f({type:Boolean,reflect:!0})],Xe.prototype,"open",2);l([f({reflect:!0})],Xe.prototype,"appearance",2);l([f({type:Boolean,reflect:!0})],Xe.prototype,"pill",2);l([f()],Xe.prototype,"label",2);l([f({reflect:!0})],Xe.prototype,"placement",2);l([f({attribute:"hint"})],Xe.prototype,"hint",2);l([f({attribute:"with-label",type:Boolean})],Xe.prototype,"withLabel",2);l([f({attribute:"with-hint",type:Boolean})],Xe.prototype,"withHint",2);l([f({reflect:!0})],Xe.prototype,"form",2);l([f({type:Boolean,reflect:!0})],Xe.prototype,"required",2);l([f({attribute:!1})],Xe.prototype,"getTag",2);l([me("disabled",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleDisabledChange",1);l([me("value",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleValueChange",1);l([me("open",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleOpenChange",1);Xe=l([ue("wa-select")],Xe);var Ib=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},Cb=`@layer wa-component {
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
  :host([appearance~='outlined']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
  }

  :host([appearance~='filled']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: transparent;
  }

  :host([appearance~='filled'][appearance~='outlined']) {
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
  }

  :host([appearance~='accent']) {
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
`,Yr=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.variant="neutral",this.appearance="outlined filled",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new Ib)}render(){return _`
      <slot part="content" class="content"></slot>

      ${this.withRemove?_`
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
    `}};Yr.css=[Cb,qa,gn];l([f({reflect:!0})],Yr.prototype,"variant",2);l([f({reflect:!0})],Yr.prototype,"appearance",2);l([f({reflect:!0})],Yr.prototype,"size",2);l([f({type:Boolean,reflect:!0})],Yr.prototype,"pill",2);l([f({attribute:"with-remove",type:Boolean})],Yr.prototype,"withRemove",2);Yr=l([ue("wa-tag")],Yr);function Ca(e,t=0){if(!e||!globalThis.Node)return"";if(typeof e[Symbol.iterator]=="function")return(Array.isArray(e)?e:[...e]).map(i=>Ca(i,--t)).join("");let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??"";if(n.nodeType===Node.ELEMENT_NODE){let r=n;if(r.hasAttribute("slot")||r.matches("style, script"))return"";if(r instanceof HTMLSlotElement){let i=r.assignedNodes({flatten:!0});if(i.length>0)return Ca(i,--t)}return t>-1?Ca(r,--t):r.textContent??""}return n.hasChildNodes()?Ca(n.childNodes,--t):""}var Sb=`:host {
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
`,ir=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=e=>{e.type==="mouseenter"?this.customStates.set("hover",!0):e.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(e){const t=this._label;this._label=e||"",this._label!==t&&this.requestUpdate("label",t)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?customElements.whenDefined("wa-select").then(()=>{var t;const e=this.closest("wa-select");e&&(e.handleDefaultSlotChange(),(t=e.selectionChanged)==null||t.call(e))}):this.isInitialized=!0}willUpdate(e){var t;if(e.has("defaultSelected")&&!((t=this.closest("wa-select"))!=null&&t.hasInteracted)){const n=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",n)}super.willUpdate(e)}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),e.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),e.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let e=this.defaultLabel;this.defaultLabel=Ca(this).trim();let t=this.defaultLabel!==e;return!this._label&&t&&this.requestUpdate("label",e),t}render(){return _`
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
    `}};ir.css=Sb;l([ce(".label")],ir.prototype,"defaultSlot",2);l([pe()],ir.prototype,"current",2);l([f({reflect:!0})],ir.prototype,"value",2);l([f({type:Boolean})],ir.prototype,"disabled",2);l([f({type:Boolean,attribute:!1})],ir.prototype,"selected",2);l([f({type:Boolean,attribute:"selected"})],ir.prototype,"defaultSelected",2);l([f()],ir.prototype,"label",1);l([pe()],ir.prototype,"defaultLabel",2);ir=l([ue("wa-option")],ir);var Eb=`:host {
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
`,Oo=class extends Oe{constructor(){super(...arguments),this.effect="none"}render(){return _` <div part="indicator" class="indicator"></div> `}};Oo.css=Eb;l([f({reflect:!0})],Oo.prototype,"effect",2);Oo=l([ue("wa-skeleton")],Oo);var Ab=()=>{const e=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(t){const n={message:"",isValid:!0,invalidKeys:[]},r=(i,a,o,c)=>{const p=document.createElement("input");return p.type="range",p.min=String(a),p.max=String(o),p.step=String(c),p.value=String(i),p.checkValidity(),p.validationMessage};if(t.required&&!t.hasInteracted)return n.isValid=!1,n.invalidKeys.push("valueMissing"),n.message=e.validationMessage||"Please fill out this field.",n;if(t.isRange){const i=t.minValue,a=t.maxValue;if(i<t.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=r(i,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,n;if(a>t.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=r(a,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,n;if(t.step&&t.step!==1){const o=(i-t.min)%t.step!==0,c=(a-t.min)%t.step!==0;if(o||c){n.isValid=!1,n.invalidKeys.push("stepMismatch");const p=o?i:a;return n.message=r(p,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,n}}}else{const i=t.value;if(i<t.min)return n.isValid=!1,n.invalidKeys.push("rangeUnderflow"),n.message=r(i,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,n;if(i>t.max)return n.isValid=!1,n.invalidKeys.push("rangeOverflow"),n.message=r(i,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,n;if(t.step&&t.step!==1&&(i-t.min)%t.step!==0)return n.isValid=!1,n.invalidKeys.push("stepMismatch"),n.message=r(i,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,n}return n}}},$b=`:host {
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
`,je=class extends St{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new zn(this,"hint","label"),this.localize=new it(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.form=null,this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,Ab()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){e=Number(e)??this.minValue,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new Ja(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Ja(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Ja(this.track,{start:(e,t)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const n=this.getValueFromCoordinates(e,t),r=Math.abs(n-this.minValue),i=Math.abs(n-this.maxValue);if(r===i)if(n>this.maxValue)this.activeThumb="max";else if(n<this.minValue)this.activeThumb="min";else{const a=this.localize.dir()==="rtl",o=this.orientation==="vertical",c=o?t:e,p=this.lastTrackPosition||c;this.lastTrackPosition=c;const g=c>p!==a&&!o||c<p&&o;this.activeThumb=g?"max":"min"}else this.activeThumb=r<=i?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(e,t,this.activeThumb),this.showRangeTooltips()},move:(e,t)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,t,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Ja(this.slider,{start:(e,t)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(e,t),this.showTooltip()},move:(e,t)=>{this.setValueFromCoordinates(e,t)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(e){if(e.has("range")&&this.requestUpdate(),this.isRange?(e.has("minValue")||e.has("maxValue"))&&(this.minValue=Ye(this.minValue,this.min,this.maxValue),this.maxValue=Ye(this.maxValue,this.minValue,this.max),this.updateFormValue()):e.has("value")&&(this.value=Ye(this.value,this.min,this.max),this.setValue(String(this.value))),(e.has("min")||e.has("max"))&&(this.isRange?(this.minValue=Ye(this.minValue,this.min,this.max),this.maxValue=Ye(this.maxValue,this.min,this.max)):this.value=Ye(this.value,this.min,this.max)),e.has("disabled")&&this.customStates.set("disabled",this.disabled),e.has("disabled")||e.has("readonly")){const t=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(t),this.draggableThumbMax&&this.draggableThumbMax.toggle(t)),this.draggableTrack&&this.draggableTrack.toggle(t)}super.updated(e)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(e){const t=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length;return e=Math.round(e/this.step)*this.step,e=Ye(e,this.min,this.max),parseFloat(e.toFixed(t))}getPercentageFromValue(e){return(e-this.min)/(this.max-this.min)*100}getValueFromCoordinates(e,t){const n=this.localize.dir()==="rtl",r=this.orientation==="vertical",{top:i,right:a,bottom:o,left:c,height:p,width:g}=this.trackBoundingClientRect,v=r?t:e,x=r?{start:i,end:o,size:p}:{start:c,end:a,size:g},I=(r||n?x.end-v:v-x.start)/x.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*I)}handleBlur(){this.isRange?requestAnimationFrame(()=>{var n;const e=(n=this.shadowRoot)==null?void 0:n.activeElement;e===this.thumbMin||e===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(e){const t=e.target;this.isRange?(t===this.thumbMin?this.activeThumb="min":t===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(e){const t=this.localize.dir()==="rtl",n=e.target;if(this.disabled||this.readonly||this.isRange&&(n===this.thumbMin?this.activeThumb="min":n===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const r=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let i=r;switch(e.key){case"ArrowUp":case(t?"ArrowLeft":"ArrowRight"):e.preventDefault(),i=this.clampAndRoundToStep(r+this.step);break;case"ArrowDown":case(t?"ArrowRight":"ArrowLeft"):e.preventDefault(),i=this.clampAndRoundToStep(r-this.step);break;case"Home":e.preventDefault(),i=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":e.preventDefault(),i=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":e.preventDefault();const a=Math.max(r+(this.max-this.min)/10,r+this.step);i=this.clampAndRoundToStep(a);break;case"PageDown":e.preventDefault();const o=Math.min(r-(this.max-this.min)/10,r-this.step);i=this.clampAndRoundToStep(o);break;case"Enter":gu(e,this);return}i!==r&&(this.isRange?(this.activeThumb==="min"?i>this.maxValue?(this.maxValue=i,this.minValue=i):this.minValue=Math.max(this.min,i):i<this.minValue?(this.minValue=i,this.maxValue=i):this.maxValue=Math.min(this.max,i),this.updateFormValue()):this.value=Ye(i,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(e){var t;e.preventDefault(),this.disabled||(this.isRange?(t=this.thumbMin)==null||t.focus():this.slider.focus())}setValueFromCoordinates(e,t){const n=this.value;this.value=this.getValueFromCoordinates(e,t),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(e,t,n){const r=this.getValueFromCoordinates(e,t),i=n==="min"?this.minValue:this.maxValue;n==="min"?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),i!==(n==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){this.withTooltip&&this.tooltips.forEach(e=>{e.open=!0})}hideRangeTooltips(){this.withTooltip&&this.tooltips.forEach(e=>{e.open=!1})}updateFormValue(){if(this.isRange){const e=new FormData;e.append(this.name||"",String(this.minValue)),e.append(this.name||"",String(this.maxValue)),this.setValue(e)}}focus(){var e;this.isRange?(e=this.thumbMin)==null||e.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const e=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=Ye(e,this.min,this.maxValue),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value-this.step);this.value=e}}stepUp(){if(this.isRange){const e=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=Ye(e,this.minValue,this.max),this.updateFormValue()}else{const e=this.clampAndRoundToStep(this.value+this.step);this.value=e}}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("hint"),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.hasSlotController.test("reference"),a=qe({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),o=[];if(this.withMarkers)for(let y=this.min;y<=this.max;y+=this.step)o.push(this.getPercentageFromValue(y));const c=_`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${qe({vh:!n})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,p=_`
      <div
        id="hint"
        part="hint"
        class=${qe({"has-slotted":r})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,g=this.withMarkers?_`
          <div id="markers" part="markers">
            ${o.map(y=>_`<span part="marker" class="marker" style="--position: ${y}%"></span>`)}
          </div>
        `:"",v=i?_`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",x=(y,I)=>this.withTooltip?_`
            <wa-tooltip
              id=${`tooltip${y!=="thumb"?"-"+y:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${y}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(I):this.localize.number(I)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const y=Ye(this.getPercentageFromValue(this.minValue),0,100),I=Ye(this.getPercentageFromValue(this.maxValue),0,100);return _`
        ${c}

        <div id="slider" part="slider" class=${a}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(y,I)}%; --end: ${Math.max(y,I)}%"
            ></div>

            ${g}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${y}%"
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

          ${v} ${p}
        </div>

        ${x("thumb-min",this.minValue)} ${x("thumb-max",this.maxValue)}
      `}else{const y=Ye(this.getPercentageFromValue(this.value),0,100),I=Ye(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return _`
        ${c}

        <div
          id="slider"
          part="slider"
          class=${a}
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
              style="--start: ${I}%; --end: ${y}%"
            ></div>

            ${g}
            <span id="thumb" part="thumb" style="--position: ${y}%"></span>
          </div>

          ${v} ${p}
        </div>

        ${x("thumb",this.value)}
      `}}};je.formAssociated=!0;je.observeSlots=!0;je.css=[gn,Mr,$b];l([ce("#slider")],je.prototype,"slider",2);l([ce("#thumb")],je.prototype,"thumb",2);l([ce("#thumb-min")],je.prototype,"thumbMin",2);l([ce("#thumb-max")],je.prototype,"thumbMax",2);l([ce("#track")],je.prototype,"track",2);l([ce("#tooltip")],je.prototype,"tooltip",2);l([yp("wa-tooltip")],je.prototype,"tooltips",2);l([f()],je.prototype,"label",2);l([f({attribute:"hint"})],je.prototype,"hint",2);l([f({reflect:!0})],je.prototype,"name",2);l([f({type:Number,attribute:"min-value"})],je.prototype,"minValue",2);l([f({type:Number,attribute:"max-value"})],je.prototype,"maxValue",2);l([f({attribute:"value",reflect:!0,type:Number})],je.prototype,"defaultValue",2);l([pe()],je.prototype,"value",1);l([f({type:Boolean,reflect:!0})],je.prototype,"range",2);l([f({type:Boolean})],je.prototype,"disabled",2);l([f({type:Boolean,reflect:!0})],je.prototype,"readonly",2);l([f({reflect:!0})],je.prototype,"orientation",2);l([f({reflect:!0})],je.prototype,"size",2);l([f({attribute:"indicator-offset",type:Number})],je.prototype,"indicatorOffset",2);l([f({reflect:!0})],je.prototype,"form",2);l([f({type:Number})],je.prototype,"min",2);l([f({type:Number})],je.prototype,"max",2);l([f({type:Number})],je.prototype,"step",2);l([f({type:Boolean,reflect:!0})],je.prototype,"required",2);l([f({type:Boolean})],je.prototype,"autofocus",2);l([f({attribute:"tooltip-distance",type:Number})],je.prototype,"tooltipDistance",2);l([f({attribute:"tooltip-placement",reflect:!0})],je.prototype,"tooltipPlacement",2);l([f({attribute:"with-markers",type:Boolean})],je.prototype,"withMarkers",2);l([f({attribute:"with-tooltip",type:Boolean})],je.prototype,"withTooltip",2);l([f({attribute:!1})],je.prototype,"valueFormatter",2);je=l([ue("wa-slider")],je);var _b=`:host {
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
`,Cn=class extends Oe{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new it(this),this.positionBeforeCollapsing=0,this.position=50,this.orientation="horizontal",this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.orientation==="vertical"?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),_a(this,{onMove:(n,r)=>{let i=this.orientation==="vertical"?r:n;this.primary==="end"&&(i=this.size-i),this.snap&&this.snap.split(" ").forEach(o=>{let c;o.endsWith("%")?c=this.size*(parseFloat(o)/100):c=parseFloat(o),t&&this.orientation==="horizontal"&&(c=this.size-c),i>=c-this.snapThreshold&&i<=c+this.snapThreshold&&(i=c)}),this.position=Ye(this.pixelsToPercentage(i),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const n=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&this.orientation==="horizontal"||e.key==="ArrowUp"&&this.orientation==="vertical")&&(t-=n),(e.key==="ArrowRight"&&this.orientation==="horizontal"||e.key==="ArrowDown"&&this.orientation==="vertical")&&(t+=n),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const r=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=r})}this.position=Ye(t,0,100)}}handleResize(e){const{width:t,height:n}=e[0].contentRect;this.size=this.orientation==="vertical"?n:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.dispatchEvent(new bu)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.orientation==="vertical"?"gridTemplateRows":"gridTemplateColumns",t=this.orientation==="vertical"?"gridTemplateColumns":"gridTemplateRows",n=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.style||(this.style={}),this.primary==="end"?n&&this.orientation==="horizontal"?this.style[e]=`${r} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${r}`:n&&this.orientation==="horizontal"?this.style[e]=`${i} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${i}`,this.style[t]="",_`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${Le(this.disabled?void 0:"0")}
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
    `}};Cn.css=_b;l([ce(".divider")],Cn.prototype,"divider",2);l([f({type:Number,reflect:!0})],Cn.prototype,"position",2);l([f({attribute:"position-in-pixels",type:Number})],Cn.prototype,"positionInPixels",2);l([f({reflect:!0})],Cn.prototype,"orientation",2);l([f({type:Boolean,reflect:!0})],Cn.prototype,"disabled",2);l([f()],Cn.prototype,"primary",2);l([f()],Cn.prototype,"snap",2);l([f({type:Number,attribute:"snap-threshold"})],Cn.prototype,"snapThreshold",2);l([me("position")],Cn.prototype,"handlePositionChange",1);l([me("positionInPixels")],Cn.prototype,"handlePositionInPixelsChange",1);l([me("vertical")],Cn.prototype,"handleVerticalChange",1);Cn=l([ue("wa-split-panel")],Cn);var Ob=`:host {
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
`,Ut=class extends St{constructor(){super(...arguments),this.hasSlotController=new zn(this,"hint"),this.title="",this.name=null,this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint="",this.withHint=!1}static get validators(){return[...super.validators,Vo()]}get value(){return this._value??"on"}set value(e){this._value=e}firstUpdated(e){super.firstUpdated(e),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set("checked",this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(e??"on",t)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){const e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,t=this.hint?!0:!!e;return _`
      <label
        part="base"
        class=${qe({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${Le(this.value)}
          .checked=${ji(this.checked)}
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
        class=${qe({"has-slotted":t})}
        aria-hidden=${t?"false":"true"}
        >${this.hint}</slot
      >
    `}};Ut.shadowRootOptions={...St.shadowRootOptions,delegatesFocus:!0};Ut.css=[Mr,gn,Ob];l([ce('input[type="checkbox"]')],Ut.prototype,"input",2);l([f()],Ut.prototype,"title",2);l([f({reflect:!0})],Ut.prototype,"name",2);l([f({reflect:!0})],Ut.prototype,"value",1);l([f({reflect:!0})],Ut.prototype,"size",2);l([f({type:Boolean})],Ut.prototype,"disabled",2);l([f({type:Boolean,attribute:!1})],Ut.prototype,"checked",2);l([f({type:Boolean,attribute:"checked",reflect:!0})],Ut.prototype,"defaultChecked",2);l([f({reflect:!0})],Ut.prototype,"form",2);l([f({type:Boolean,reflect:!0})],Ut.prototype,"required",2);l([f({attribute:"hint"})],Ut.prototype,"hint",2);l([f({attribute:"with-hint",type:Boolean})],Ut.prototype,"withHint",2);l([me("defaultChecked")],Ut.prototype,"handleDefaultCheckedChange",1);l([me(["checked"])],Ut.prototype,"handleStateChange",1);l([me("disabled",{waitUntilFirstUpdate:!0})],Ut.prototype,"handleDisabledChange",1);Ut=l([ue("wa-switch")],Ut);var Tb=class extends Event{constructor(e){super("wa-tab-hide",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Lb=class extends Event{constructor(e){super("wa-tab-show",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Db=`:host {
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
  overflow: auto;
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
`,Pn=class extends Oe{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new it(this),this.hasScrollControls=!1,this.active="",this.placement="top",this.activation="auto",this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(n=>!["aria-labelledby","aria-controls"].includes(n.attributeName))&&setTimeout(()=>this.setAriaLabels());const t=e.filter(n=>n.target.closest("wa-tab-group")===this);if(t.some(n=>n.attributeName==="disabled"))this.syncTabsAndPanels();else if(t.some(n=>n.attributeName==="active")){const r=t.filter(i=>i.attributeName==="active"&&i.target.tagName.toLowerCase()==="wa-tab").map(i=>i.target).find(i=>i.active);r&&r.closest("wa-tab-group")===this&&this.setActiveTab(r)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((t,n)=>{if(t[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){const r=this.tabs.find(i=>i.panel===this.active);r&&this.setActiveTab(r)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});n.unobserve(t[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(t=>t.tagName.toLowerCase()==="wa-tab")}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="wa-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const n=e.target.closest("wa-tab");(n==null?void 0:n.closest("wa-tab-group"))===this&&n!==null&&this.setActiveTab(n,{scrollBehavior:"smooth"})}handleKeyDown(e){const n=e.target.closest("wa-tab");if((n==null?void 0:n.closest("wa-tab-group"))===this){if(["Enter"," "].includes(e.key)){n!==null&&(this.setActiveTab(n,{scrollBehavior:"smooth"}),e.preventDefault());return}if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.tabs.find(c=>c.matches(":focus")),a=this.localize.dir()==="rtl";let o=null;if((i==null?void 0:i.tagName.toLowerCase())==="wa-tab"){if(e.key==="Home")o=this.focusableTabs[0];else if(e.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const c=this.tabs.findIndex(p=>p===i);o=this.findNextFocusableTab(c,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const c=this.tabs.findIndex(p=>p===i);o=this.findNextFocusableTab(c,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(c=>{c.tabIndex=c===o?0:-1}),["top","bottom"].includes(this.placement)&&Ns(o,this.nav,"horizontal"),e.preventDefault()}}}}findNextFocusableTab(e,t){let n=null;const r=t==="forward"?1:-1;let i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){t==="forward"?n=this.focusableTabs[0]:n=this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:"auto",...t},e.closest("wa-tab-group")===this&&e!==this.activeTab&&!e.disabled){const n=this.activeTab;this.active=e.panel,this.activeTab=e,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var i;return r.active=r.name===((i=this.activeTab)==null?void 0:i.panel)}),["top","bottom"].includes(this.placement)&&Ns(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(n&&this.dispatchEvent(new Tb({name:n.panel})),this.dispatchEvent(new Lb({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(n=>n.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){const e=this.tabs.find(t=>t.panel===this.active);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return _`
      <div
        part="base"
        class=${qe({"tab-group":!0,"tab-group-top":this.placement==="top","tab-group-bottom":this.placement==="bottom","tab-group-start":this.placement==="start","tab-group-end":this.placement==="end","tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?_`
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
          <div class="nav" @focus=${()=>{var t;return(t=this.activeTab)==null?void 0:t.focus({preventScroll:!0})}}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?_`
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
    `}};Pn.css=Db;l([ce(".tab-group")],Pn.prototype,"tabGroup",2);l([ce(".body")],Pn.prototype,"body",2);l([ce(".nav")],Pn.prototype,"nav",2);l([pe()],Pn.prototype,"hasScrollControls",2);l([f({reflect:!0})],Pn.prototype,"active",2);l([f()],Pn.prototype,"placement",2);l([f()],Pn.prototype,"activation",2);l([f({attribute:"without-scroll-controls",type:Boolean})],Pn.prototype,"withoutScrollControls",2);l([me("active")],Pn.prototype,"updateActiveTab",1);l([me("withoutScrollControls",{waitUntilFirstUpdate:!0})],Pn.prototype,"updateScrollControls",1);Pn=l([ue("wa-tab-group")],Pn);var Pb=`:host {
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
`,Rb=0,wr=class extends Oe{constructor(){super(...arguments),this.attrId=++Rb,this.componentId=`wa-tab-${this.attrId}`,this.panel="",this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||(this.slot="nav"),super.connectedCallback(),this.setAttribute("role","tab")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){var e;return this.id=((e=this.id)==null?void 0:e.length)>0?this.id:this.componentId,_`
      <div
        part="base"
        class=${qe({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};wr.css=Pb;l([ce(".tab")],wr.prototype,"tab",2);l([f({reflect:!0})],wr.prototype,"panel",2);l([f({type:Boolean,reflect:!0})],wr.prototype,"active",2);l([f({type:Boolean,reflect:!0})],wr.prototype,"disabled",2);l([f({type:Number,reflect:!0})],wr.prototype,"tabIndex",2);l([me("active")],wr.prototype,"handleActiveChange",1);l([me("disabled")],wr.prototype,"handleDisabledChange",1);wr=l([ue("wa-tab")],wr);var zb=`:host {
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
`,Mb=0,Yi=class extends Oe{constructor(){super(...arguments),this.attrId=++Mb,this.componentId=`wa-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return _`
      <slot
        part="base"
        class=${qe({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Yi.css=zb;l([f({reflect:!0})],Yi.prototype,"name",2);l([f({type:Boolean,reflect:!0})],Yi.prototype,"active",2);l([me("active")],Yi.prototype,"handleActiveChange",1);Yi=l([ue("wa-tab-panel")],Yi);var Nb=`:host {
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
:host([appearance~='outlined']) .textarea {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance~='filled']) .textarea {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance~='filled'][appearance~='outlined']) .textarea {
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
`,Qe=class extends St{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new zn(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Vo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const e=this.input.value;this.value=e}})}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.checkValidity()}handleChange(e){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(e){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const e=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${e}px`}if(this.input.style.height){const e=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${e}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(e){e.has("resize")&&this.setTextareaDimensions(),super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r="preserve"){const i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t;return _`
      <label part="label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${Le(this.name)}
          .value=${ji(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Le(this.placeholder)}
          rows=${Le(this.rows)}
          minlength=${Le(this.minlength)}
          maxlength=${Le(this.maxlength)}
          autocapitalize=${Le(this.autocapitalize)}
          autocorrect=${Le(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${Le(this.spellcheck)}
          enterkeyhint=${Le(this.enterkeyhint)}
          inputmode=${Le(this.inputmode)}
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
        class=${qe({"has-slotted":r})}
        >${this.hint}</slot
      >
    `}};Qe.css=[Nb,Mr,gn];l([ce(".control")],Qe.prototype,"input",2);l([ce('[part~="base"]')],Qe.prototype,"base",2);l([ce(".size-adjuster")],Qe.prototype,"sizeAdjuster",2);l([f()],Qe.prototype,"title",2);l([f({reflect:!0})],Qe.prototype,"name",2);l([pe()],Qe.prototype,"value",1);l([f({attribute:"value",reflect:!0})],Qe.prototype,"defaultValue",2);l([f({reflect:!0})],Qe.prototype,"size",2);l([f({reflect:!0})],Qe.prototype,"appearance",2);l([f()],Qe.prototype,"label",2);l([f({attribute:"hint"})],Qe.prototype,"hint",2);l([f()],Qe.prototype,"placeholder",2);l([f({type:Number})],Qe.prototype,"rows",2);l([f({reflect:!0})],Qe.prototype,"resize",2);l([f({type:Boolean})],Qe.prototype,"disabled",2);l([f({type:Boolean,reflect:!0})],Qe.prototype,"readonly",2);l([f({reflect:!0})],Qe.prototype,"form",2);l([f({type:Boolean,reflect:!0})],Qe.prototype,"required",2);l([f({type:Number})],Qe.prototype,"minlength",2);l([f({type:Number})],Qe.prototype,"maxlength",2);l([f()],Qe.prototype,"autocapitalize",2);l([f()],Qe.prototype,"autocorrect",2);l([f()],Qe.prototype,"autocomplete",2);l([f({type:Boolean})],Qe.prototype,"autofocus",2);l([f()],Qe.prototype,"enterkeyhint",2);l([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Qe.prototype,"spellcheck",2);l([f()],Qe.prototype,"inputmode",2);l([f({attribute:"with-label",type:Boolean})],Qe.prototype,"withLabel",2);l([f({attribute:"with-hint",type:Boolean})],Qe.prototype,"withHint",2);l([me("rows",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleRowsChange",1);l([me("value",{waitUntilFirstUpdate:!0})],Qe.prototype,"handleValueChange",1);Qe=l([ue("wa-textarea")],Qe);var Fb=class extends Event{constructor(){super("wa-after-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},qb=class extends Event{constructor(){super("wa-after-expand",{bubbles:!0,cancelable:!1,composed:!0})}},Vb=class extends Event{constructor(){super("wa-collapse",{bubbles:!0,cancelable:!1,composed:!0})}},Bb=class extends Event{constructor(){super("wa-expand",{bubbles:!0,cancelable:!1,composed:!0})}},Ub=class extends Event{constructor(){super("wa-lazy-change",{bubbles:!0,cancelable:!1,composed:!0})}},jb=class extends Event{constructor(){super("wa-lazy-load",{bubbles:!0,cancelable:!1,composed:!0})}},Wb=`:host {
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
`,ot=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.dispatchEvent(new Vb);const e=Co(getComputedStyle(this.childrenContainer).getPropertyValue("--hide-duration"));await Io(this.childrenContainer,[{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.hidden=!0,this.dispatchEvent(new Fb)}isNestedItem(){const e=this.parentElement;return!!e&&ot.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.dispatchEvent(new Bb),this.childrenContainer.hidden=!1;const e=Co(getComputedStyle(this.childrenContainer).getPropertyValue("--show-duration"));await Io(this.childrenContainer,[{height:"0",opacity:"0",overflow:"hidden"},{height:`${this.childrenContainer.scrollHeight}px`,opacity:"1",overflow:"hidden"}],{duration:e,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}),this.childrenContainer.style.height="auto",this.dispatchEvent(new qb)}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleExpandedState(){this.customStates.set("expanded",this.expanded)}handleIndeterminateStateChange(){this.customStates.set("indeterminate",this.indeterminate)}handleSelectedChange(){this.customStates.set("selected",this.selected),this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.dispatchEvent(new jb)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.dispatchEvent(new Ub)}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>ot.isTreeItem(t)&&(e||!t.disabled)):[]}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return _`
      <div
        part="base"
        class="${qe({"tree-item":!0,"tree-item-expanded":this.expanded,"tree-item-selected":this.selected,"tree-item-leaf":this.isLeaf,"tree-item-has-expand-button":t})}"
      >
        <div class="item" part="item">
          <div class="indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${qe({"expand-button":!0,"expand-button-visible":t})}
            aria-hidden="true"
          >
            <slot class="expand-icon-slot" name="expand-icon">
              ${yn(this.loading,()=>_` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `)}
              <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
            <slot class="expand-icon-slot" name="collapse-icon">
              <wa-icon name=${e?"chevron-left":"chevron-right"} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${yn(this.selectable,()=>_`
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
                ?checked="${ji(this.selected)}"
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
    `}};ot.css=Wb;l([pe()],ot.prototype,"indeterminate",2);l([pe()],ot.prototype,"isLeaf",2);l([pe()],ot.prototype,"loading",2);l([pe()],ot.prototype,"selectable",2);l([f({type:Boolean,reflect:!0})],ot.prototype,"expanded",2);l([f({type:Boolean,reflect:!0})],ot.prototype,"selected",2);l([f({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);l([f({type:Boolean,reflect:!0})],ot.prototype,"lazy",2);l([ce("slot:not([name])")],ot.prototype,"defaultSlot",2);l([ce("slot[name=children]")],ot.prototype,"childrenSlot",2);l([ce(".item")],ot.prototype,"itemElement",2);l([ce(".children")],ot.prototype,"childrenContainer",2);l([ce(".expand-button slot")],ot.prototype,"expandButtonSlot",2);l([me("loading",{waitUntilFirstUpdate:!0})],ot.prototype,"handleLoadingChange",1);l([me("disabled")],ot.prototype,"handleDisabledChange",1);l([me("expanded")],ot.prototype,"handleExpandedState",1);l([me("indeterminate")],ot.prototype,"handleIndeterminateStateChange",1);l([me("selected")],ot.prototype,"handleSelectedChange",1);l([me("expanded",{waitUntilFirstUpdate:!0})],ot.prototype,"handleExpandedChange",1);l([me("expanded",{waitUntilFirstUpdate:!0})],ot.prototype,"handleExpandAnimation",1);l([me("lazy",{waitUntilFirstUpdate:!0})],ot.prototype,"handleLazyChange",1);ot=l([ue("wa-tree-item")],ot);var Hb=class extends Event{constructor(e){super("wa-selection-change",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Gb=`:host {
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
`;function mc(e,t=!1){function n(a){const o=a.getChildrenItems({includeDisabled:!1});if(o.length){const c=o.every(g=>g.selected),p=o.every(g=>!g.selected&&!g.indeterminate);a.selected=c,a.indeterminate=!c&&!p}}function r(a){const o=a.parentElement;ot.isTreeItem(o)&&(n(o),r(o))}function i(a){for(const o of a.getChildrenItems())o.selected=t?a.selected||o.selected:!o.disabled&&a.selected,i(o);t&&n(a)}i(e),r(e)}var Xr=class extends Oe{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new it(this),this.initTreeItem=e=>{e.updateComplete.then(()=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const n=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(n===null?e.append(r):n.hasAttribute("data-default")&&n.replaceWith(r))})})},this.handleTreeChanged=e=>{for(const t of e){const n=[...t.addedNodes].filter(ot.isTreeItem),r=[...t.removedNodes].filter(ot.isTreeItem);n.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),ot.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("wa-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){const n=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(n){const r=n.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${e}-icon`,r}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),mc(e);else if(this.selection==="single"||e.isLeaf){const r=this.getAllTreeItems();for(const i of r)i.selected=i===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const n=this.selectedItems;(t.length!==n.length||n.some(r=>!t.includes(r)))&&Promise.all(n.map(r=>r.updateComplete)).then(()=>{this.dispatchEvent(new Hb({selection:n}))})}getAllTreeItems(){return[...this.querySelectorAll("wa-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(i=>{var a;return["input","textarea"].includes((a=i==null?void 0:i.tagName)==null?void 0:a.toLowerCase())}))return;const t=this.getFocusableItems(),n=this.matches(":dir(ltr)"),r=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(p=>p.matches(":focus")),a=t[i],o=p=>{const g=t[Ye(p,0,t.length-1)];this.focusItem(g)},c=p=>{a.expanded=p};e.key==="ArrowDown"?o(i+1):e.key==="ArrowUp"?o(i-1):n&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?o(i+1):c(!0):n&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"?!a||a.disabled||a.isLeaf||!a.expanded?o(i-1):c(!1):e.key==="Home"?o(0):e.key==="End"?o(t.length-1):(e.key==="Enter"||e.key===" ")&&(a.disabled||this.selectItem(a))}}handleClick(e){const t=e.target,n=t.closest("wa-tree-item"),r=e.composedPath().some(i=>{var a;return(a=i==null?void 0:i.classList)==null?void 0:a.contains("expand-button")});!n||n.disabled||t!==this.clickTarget||(r?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const n of t)n.updateComplete.then(()=>{n.selectable=e});e&&(await this.updateComplete,[...this.querySelectorAll(":scope > wa-tree-item")].forEach(n=>{n.updateComplete.then(()=>{mc(n,!0)})}))}get selectedItems(){const e=this.getAllTreeItems(),t=n=>n.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(n=>{var i;if(n.disabled)return!1;const r=(i=n.parentElement)==null?void 0:i.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||t.has(r))&&t.add(n),!t.has(n)})}render(){return _`
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
    `}};Xr.css=Gb;l([ce("slot:not([name])")],Xr.prototype,"defaultSlot",2);l([ce("slot[name=expand-icon]")],Xr.prototype,"expandedIconSlot",2);l([ce("slot[name=collapse-icon]")],Xr.prototype,"collapsedIconSlot",2);l([f()],Xr.prototype,"selection",2);l([me("selection")],Xr.prototype,"handleSelectionChange",1);Xr=l([ue("wa-tree")],Xr);var Kb=`:host {
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
`,Sn=class extends Oe{constructor(){super(...arguments),this.localize=new it(this),this.availableZoomLevels=[],this.allowfullscreen=!1,this.loading="eager",this.zoom=1,this.zoomLevels="25% 50% 75% 100% 125% 150% 175% 200%",this.withoutControls=!1,this.withoutInteraction=!1}get contentWindow(){var e;return((e=this.iframe)==null?void 0:e.contentWindow)||null}get contentDocument(){var e;return((e=this.iframe)==null?void 0:e.contentDocument)||null}parseZoomLevels(e){const t=wl(e),n=[];for(const r of t){let i;if(r.endsWith("%")){const a=parseFloat(r.slice(0,-1));if(!isNaN(a))i=Math.max(0,a/100);else continue}else if(i=parseFloat(r),!isNaN(i))i=Math.max(0,i);else continue;n.push(i)}return[...new Set(n)].sort((r,i)=>r-i)}getCurrentZoomIndex(){if(this.availableZoomLevels.length===0)return-1;let e=0,t=Math.abs(this.availableZoomLevels[0]-this.zoom);for(let n=1;n<this.availableZoomLevels.length;n++){const r=Math.abs(this.availableZoomLevels[n]-this.zoom);r<t&&(t=r,e=n)}return e}isZoomInDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()>=this.availableZoomLevels.length-1}isZoomOutDisabled(){return this.availableZoomLevels.length===0?!1:this.getCurrentZoomIndex()<=0}updated(e){if(e.has("zoom")&&this.style.setProperty("--zoom",`${this.zoom}`),e.has("zoomLevels")&&(this.availableZoomLevels=this.parseZoomLevels(this.zoomLevels),this.availableZoomLevels.length>0)){const t=this.getCurrentZoomIndex();Math.abs(this.availableZoomLevels[t]-this.zoom)>.001&&(this.zoom=this.availableZoomLevels[t])}}zoomIn(){if(this.availableZoomLevels.length===0){this.zoom=Math.min(this.zoom+.05,2);return}const e=this.getCurrentZoomIndex();e<this.availableZoomLevels.length-1&&(this.zoom=this.availableZoomLevels[e+1])}zoomOut(){if(this.availableZoomLevels.length===0){this.zoom=Math.max(this.zoom-.05,0);return}const e=this.getCurrentZoomIndex();e>0&&(this.zoom=this.availableZoomLevels[e-1])}handleLoad(){this.dispatchEvent(new Event("load",{bubbles:!1,cancelable:!1,composed:!0}))}handleError(){this.dispatchEvent(new Event("error",{bubbles:!1,cancelable:!1,composed:!0}))}render(){return _`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${Le(this.sandbox??void 0)}
          src=${Le(this.src??void 0)}
          srcdoc=${Le(this.srcdoc??void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${this.withoutControls?"":_`
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
    `}};Sn.css=Kb;l([ce("#iframe")],Sn.prototype,"iframe",2);l([f()],Sn.prototype,"src",2);l([f()],Sn.prototype,"srcdoc",2);l([f({type:Boolean})],Sn.prototype,"allowfullscreen",2);l([f()],Sn.prototype,"loading",2);l([f()],Sn.prototype,"referrerpolicy",2);l([f()],Sn.prototype,"sandbox",2);l([f({type:Number,reflect:!0})],Sn.prototype,"zoom",2);l([f({attribute:"zoom-levels"})],Sn.prototype,"zoomLevels",2);l([f({type:Boolean,attribute:"without-controls",reflect:!0})],Sn.prototype,"withoutControls",2);l([f({type:Boolean,attribute:"without-interaction",reflect:!0})],Sn.prototype,"withoutInteraction",2);Sn=l([ue("wa-zoomable-frame")],Sn);var Yb=new MutationObserver(e=>{for(const{addedNodes:t}of e)for(const n of t)n.nodeType===Node.ELEMENT_NODE&&Pu(n)});function Xb(){Pu(document),Yb.observe(document.documentElement,{subtree:!0,childList:!0})}async function Pu(e){const t=e instanceof Element?e.tagName.toLowerCase():"",n=t==null?void 0:t.startsWith("wa-"),r=[...e.querySelectorAll(":not(:defined)")].map(o=>o.tagName.toLowerCase()).filter(o=>o.startsWith("wa-"));n&&!customElements.get(t)&&r.push(t);const i=[...new Set(r)],a=await Promise.allSettled(i.map(o=>Zb(o)));for(const o of a)o.status==="rejected"&&console.warn(o.reason);await new Promise(requestAnimationFrame),e.dispatchEvent(new CustomEvent("wa-discovery-complete",{bubbles:!1,cancelable:!1,composed:!0}))}function Zb(e){if(customElements.get(e))return Promise.resolve();const t=e.replace(/^wa-/i,""),n=Zh(`components/${t}/${t}.js`);return new Promise((r,i)=>{import(n).then(()=>r()).catch(()=>i(new Error(`Unable to autoload <${e}> from ${n}`)))})}Xb();Promise.race([new Promise(e=>document.addEventListener("wa-discovery-complete",e)),new Promise(e=>setTimeout(e,2e3))]).then(()=>{document.querySelectorAll(".wa-cloak").forEach(e=>e.classList.remove("wa-cloak"))});su("fg",{resolver:(e,t,n)=>import.meta.resolve("/icon-libs/font-gis.svg")+`#fg-${e}`,mutator:e=>{e.setAttribute("fill","currentColor"),e.setAttribute("width","16"),e.setAttribute("height","16")},spriteSheet:!0});var fo={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var Jb=fo.exports,gc;function Qb(){return gc||(gc=1,(function(e){(function(t,n){e.exports?e.exports=n():t.Toastify=n()})(Jb,function(t){var n=function(o){return new n.lib.init(o)},r="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:r,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var c in this.options.style)o.style[c]=this.options.style[c];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var p=document.createElement("img");p.src=this.options.avatar,p.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(p):o.insertAdjacentElement("afterbegin",p)}if(this.options.close===!0){var g=document.createElement("button");g.type="button",g.setAttribute("aria-label","Close"),g.className="toast-close",g.innerHTML="&#10006;",g.addEventListener("click",(function(U){U.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var v=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&v>360?o.insertAdjacentElement("afterbegin",g):o.appendChild(g)}if(this.options.stopOnFocus&&this.options.duration>0){var x=this;o.addEventListener("mouseover",function(U){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){x.removeElement(o)},x.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",(function(U){U.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",(function(U){U.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var y=i("x",this.options),I=i("y",this.options),R=this.options.position=="left"?y:"-"+y,D=this.options.gravity=="toastify-top"?I:"-"+I;o.style.transform="translate("+R+","+D+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var c=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,c),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}).bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},c={top:15,bottom:15},p={top:15,bottom:15},g=document.getElementsByClassName("toastify"),v,x=0;x<g.length;x++){a(g[x],"toastify-top")===!0?v="toastify-top":v="toastify-bottom";var y=g[x].offsetHeight;v=v.substr(9,v.length-1);var I=15,R=window.innerWidth>0?window.innerWidth:screen.width;R<=360?(g[x].style[v]=p[v]+"px",p[v]+=y+I):a(g[x],"toastify-left")===!0?(g[x].style[v]=o[v]+"px",o[v]+=y+I):(g[x].style[v]=c[v]+"px",c[v]+=y+I)}return this};function i(o,c){return c.offset[o]?isNaN(c.offset[o])?c.offset[o]:c.offset[o]+"px":"0px"}function a(o,c){return!o||typeof c!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(c)>-1)}return n.lib.init.prototype=n.lib,n})})(fo)),fo.exports}var ev=Qb();const xl=Ws(ev),wn=e=>{console.info("[TOAST] INFO: ",e),xl({text:e,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},bt=e=>{console.error("[TOAST] ERROR: ",e),xl({text:e,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},tv=e=>{console.warn("[TOAST] WARNING: ",e),xl({text:e,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};ar.put("toastInfo",wn);ar.put("toastError",bt);ar.put("toastWarning",tv);const Ru=(e,t)=>{const n=new fr.subtle.Watcher(async()=>{try{await 0,t(e.get())}finally{n.watch()}});n.watch(e)},Ko=e=>function(t,n,r){const i=r.value;return i.signal=e,r};Object.defineProperty(Hs.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Ba extends Hs{connectedCallback(){const t=Object.getPrototypeOf(this);Object.getOwnPropertyNames(t).forEach(n=>{const r=t[n];if(r instanceof Function){const i=r;i.name.startsWith("on")&&"topic"in i&&this.subscribe(i.topic,i)}}),Object.getOwnPropertyNames(t).forEach(n=>{const r=t[n];if(r instanceof Function){const i=r;i.name.startsWith("on")&&"signal"in i&&this.watch(i.signal,i)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(t,n){or(t,n.bind(this))}showInfo(t){wn(t)}showError(t){bt(t)}nobubble(t){return n=>{n.stopPropagation(),t.bind(this)(n)}}command(t,n={}){return()=>{this.executeCommand(t,n)}}executeCommand(t,n){const r=Fe.createExecutionContext(this,n);Fe.execute(t,r)}watch(t,n){Ru(t,n.bind(this))}firstUpdated(t){super.firstUpdated(t),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(t){t(),this.updateLater()}}class Ai extends Ba{}var nv=Object.getOwnPropertyDescriptor,rv=(e,t,n,r)=>{for(var i=r>1?void 0:r?nv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=o(i)||i);return i};let Fs=class extends Ai{render(){return _`
            <slot></slot>
        `}};Fs.styles=cn`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Fs=rv([ue("k-app")],Fs);var iv=Object.defineProperty,av=Object.getOwnPropertyDescriptor,la=(e,t,n,r)=>{for(var i=r>1?void 0:r?av(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&iv(t,n,i),i};let Zr=class extends zo(Ai){constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),or(Ma,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[n]=e.split(":");if(t===`${n}:*`)return!0;const r=t.split(":");if(r.length===2){const i=r[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&e.startsWith(`${n}:`)}return!1}loadContributions(e){const t=Ct.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[n]=e.split(":"),r=`${n}:*`,i=Ct.getContributions(r),a=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const c of o){const p=`${n}:${c}`,g=Ct.getContributions(p);a.push(...g)}}this.contributions=[...i,...a,...t]}contributionCreator(e){var t;if("command"in e){const n=e,r=!!n.showLabel;return _`
                <wa-button @click=${()=>this.executeCommand(n.command,n.params||{})}
                           title=${n.label}
                           ?disabled="${(t=n.disabled)==null?void 0:t.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${n.icon} label="${n.label}"></wa-icon>
                    ${r?n.label:""}
                </wa-button>
            `}else if("html"in e){const n=e.html;return n instanceof Function?n():Dr(n)}else return _`<span>unknown contribution type: ${typeof e}</span>`}render(){const e=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return _`
            <div class="toolbar-items" style=${_n({"justify-content":this.position})}>
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
        `}};Zr.styles=cn`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;la([f()],Zr.prototype,"position",2);la([f({type:Boolean,attribute:"is-editor"})],Zr.prototype,"isEditor",2);la([f({attribute:!1})],Zr.prototype,"partToolbarContent",2);la([f({attribute:!1})],Zr.prototype,"partToolbarRenderer",2);la([pe()],Zr.prototype,"contributions",2);Zr=la([ue("k-toolbar")],Zr);var ov=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,ca=(e,t,n,r)=>{for(var i=r>1?void 0:r?sv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ov(t,n,i),i};let Jr=class extends zo(Ai){constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=pi(),this.dropdownRef=pi()}doBeforeUI(){const e=this.getAttribute("id");e&&this.loadContributions(e),or(Ma,t=>{if(!e)return;this.matchesTarget(e,t.target)&&(this.loadContributions(e),this.requestUpdate())})}matchesTarget(e,t){if(t===e)return!0;if(!e.includes(":"))return!1;const[n]=e.split(":");if(t===`${n}:*`)return!0;const r=t.split(":");if(r.length===2){const i=r[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&e.startsWith(`${n}:`)}return!1}loadContributions(e){const t=Ct.getContributions(e);if(!e.includes(":")){this.contributions=t;return}const[n]=e.split(":"),r=`${n}:*`,i=Ct.getContributions(r),a=[];if(this.isEditor){const o=["system.editors",".system.editors"];for(const c of o){const p=`${n}:${c}`,g=Ct.getContributions(p);a.push(...g)}}this.contributions=[...i,...a,...t]}show(e){this.position=e,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(e,t){return async()=>{this.executeCommand(e,t||{})}}renderContribution(e){var t;if("command"in e){const n=e;return _`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(n.command,n.params)}
                    ?disabled="${(t=n.disabled)==null?void 0:t.get()}">
                    ${n.icon?_`<wa-icon slot="icon" name=${n.icon}></wa-icon>`:""}
                    ${n.label}
                </wa-dropdown-item>
            `}else if("html"in e){const n=e.html;return n instanceof Function?n():Dr(n)}return Mt}render(){if(!this.isOpen)return Mt;const e=this.partContextMenuRenderer?this.partContextMenuRenderer():Mt;return _`
            <wa-dropdown 
                ${fi(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${fi(this.anchorRef)}
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
        `}};Jr.styles=cn`
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
    `;ca([f({type:Boolean,attribute:"is-editor"})],Jr.prototype,"isEditor",2);ca([f({attribute:!1})],Jr.prototype,"partContextMenuRenderer",2);ca([pe()],Jr.prototype,"contributions",2);ca([pe()],Jr.prototype,"isOpen",2);ca([pe()],Jr.prototype,"position",2);Jr=ca([ue("k-contextmenu")],Jr);class kl extends Ai{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bc=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},lv=na(class extends ra{constructor(e){if(super(e),e.type!==dr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],a=[];let o=0;for(const c of e)i[o]=r?r(c,o):o,a[o]=n(c,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=yd(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;const c=this.ut??(this.ut=[]),p=[];let g,v,x=0,y=i.length-1,I=0,R=a.length-1;for(;x<=y&&I<=R;)if(i[x]===null)x++;else if(i[y]===null)y--;else if(c[x]===o[I])p[I]=si(i[x],a[I]),x++,I++;else if(c[y]===o[R])p[R]=si(i[y],a[R]),y--,R--;else if(c[x]===o[R])p[R]=si(i[x],a[R]),fa(e,p[R+1],i[x]),x++,R--;else if(c[y]===o[I])p[I]=si(i[y],a[I]),fa(e,i[x],i[y]),y--,I++;else if(g===void 0&&(g=bc(o,I,R),v=bc(c,x,y)),g.has(c[x]))if(g.has(c[y])){const D=v.get(o[I]),U=D!==void 0?i[D]:null;if(U===null){const Y=fa(e,i[x]);si(Y,a[I]),p[I]=Y}else p[I]=si(U,a[I]),fa(e,i[x],U),i[D]=null;I++}else es(i[y]),y--;else es(i[x]),x++;for(;I<=R;){const D=fa(e,p[R+1]);si(D,a[I]),p[I++]=D}for(;x<=y;){const D=i[x++];D!==null&&es(D)}return this.ut=o,Gs(e,p),Br}}),cv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",uv="/assets/jupyter-C78Cpfql.svg",dv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";su("k",{resolver:e=>new URL(Object.assign({"../icons/js.svg":cv,"../icons/jupyter.svg":uv,"../icons/python.svg":dv})[`../icons/${e}.svg`],import.meta.url).href,mutator:e=>{e.setAttribute("fill","currentColor"),e.setAttribute("stroke","currentColor")}});var hv=Object.defineProperty,pv=Object.getOwnPropertyDescriptor,Ua=(e,t,n,r)=>{for(var i=r>1?void 0:r?pv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&hv(t,n,i),i};let wi=class extends Ba{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const e=this.name.trim().split(/ +/),t=e.pop(),n=e.pop();return _`
            <wa-icon library="${n||Mt}" variant="${this.variant||Mt}"
                         family="${this.family||Mt}" name=${t} label="${this.label||this.name||Mt}"></wa-icon>`}};wi.styles=cn`
        :host {
            display: contents;
        }
    `;Ua([f()],wi.prototype,"name",2);Ua([f()],wi.prototype,"family",2);Ua([f()],wi.prototype,"variant",2);Ua([f()],wi.prototype,"label",2);wi=Ua([ue("k-icon")],wi);var fv=Object.defineProperty,mv=(e,t,n,r)=>{for(var i=void 0,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=o(t,n,i)||i);return i&&fv(t,n,i),i};class Jt extends kl{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return Mt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return Mt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(t){super.updated(t),t.has("dirty")&&t.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(t){this.dirty=t,Ss.set(null),Ss.set(this),et.set(null),et.set(this)}}mv([f()],Jt.prototype,"dirty");const zu="app-toolbars-main",ua="app-toolbars-main-right",gv="app-toolbars-main-center",Mu="app-toolbars-bottom",Il="app-toolbars-bottom-center",Nu="app-toolbars-bottom-end",Ri="editor-area-main",qs="sidebar-main",Fu="sidebar-main-bottom",qu="sidebar-auxiliary",Vu="panel-bottom";var Bu=(e=>(e[e.LEFT=0]="LEFT",e[e.MIDDLE=1]="MIDDLE",e[e.RIGHT=2]="RIGHT",e[e.BACK=3]="BACK",e[e.FORWARD=4]="FORWARD",e))(Bu||{}),bv=Object.defineProperty,vv=Object.getOwnPropertyDescriptor,Uu=(e,t,n,r)=>{for(var i=r>1?void 0:r?vv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&bv(t,n,i),i};let To=class extends kl{constructor(){super(...arguments),this.contributions=[],this.tabGroup=pi(),this.containerId=null}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",e=>{const t=this.getTabPanel(e.detail.name);t&&(this.updateToolbarFromComponent(t),this.dispatchEvent(new CustomEvent("tab-shown",{detail:t})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",e=>{const n=e.target.closest("wa-tab-panel");n&&this.updateToolbarFromComponent(n)}),this.tabGroup.value.addEventListener("part-contextmenu-changed",e=>{const n=e.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),this.tabGroup.value.addEventListener("click",e=>{const t=e.target,n=t.closest("wa-tab");if(n){const o=n.getAttribute("panel");if(o){const c=this.getTabPanel(o);if(c){const p=c.querySelector(".tab-content");if(p&&p.firstElementChild){const g=p.firstElementChild;g instanceof Jt&&et.set(g)}}}return}const r=t.closest("wa-scroller.tab-content");if(!r)return;const i=r.closest("wa-tab-panel");if(!i)return;const a=i.querySelector(".tab-content");if(a&&a.firstElementChild){const o=a.firstElementChild;o instanceof Jt&&et.set(o)}}),this.tabGroup.value.addEventListener("contextmenu",e=>{const t=e,n=t.target.closest("wa-scroller.tab-content");if(!n)return;t.preventDefault();const r=n.closest("wa-tab-panel");if(!r)return;const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:t.clientX,clientY:t.clientY,button:0});t.target.dispatchEvent(i),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(r);const a=r.querySelector("k-contextmenu");a&&a.show({x:t.clientX,y:t.clientY})})}))}),or(Ma,e=>{!this.containerId||e.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(e){if(super.updated(e),e.has("contributions")){const t=this.containerId===Ri;this.contributions.forEach(n=>{const r=this.getTabPanel(n.name);if(!r)return;const i=r.querySelector(".tab-content");if(i&&i.firstElementChild){const a=i.firstElementChild;a instanceof Jt&&(a.tabContribution=n,a.isEditor=t)}})}}has(e){return!!this.getTabPanel(e)}activate(e){this.tabGroup.value.setAttribute("active",e)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(e){if(this.contributions.find(n=>n.name===e.name)){this.activate(e.name);return}this.contributions.push(e),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(e.name);const n=this.getTabPanel(e.name);if(n){const r=n.querySelector(".tab-content");if(r&&r.firstElementChild){const i=r.firstElementChild;i instanceof Jt&&(i.tabContribution=e,i.isEditor=this.containerId===Ri)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(n)})}})}handleTabAuxClick(e,t){e.button===Bu.MIDDLE&&t.closable&&this.closeTab(e,t.name)}async closeTab(e,t){if(e.stopPropagation(),this.isDirty(t)&&!await ia("Unsaved changes will be lost: Do you really want to close?"))return;const n=this.getTabPanel(t);if(!n)return;const r=this.contributions.find(a=>a.name===t);if(!r)return;this.cleanupTabInstance(n);const i=this.contributions.indexOf(r);i>-1&&this.contributions.splice(i,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:n})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(e,t){this.getTab(e).classList.toggle("part-dirty",t)}isDirty(e){return this.getTab(e).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=Ct.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(e){const t=e.querySelector(".tab-content");if(t&&t.firstElementChild){const n=t.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const e=this.tabGroup.value.querySelectorAll("wa-tab");if(e.length>0){const t=e.item(0).getAttribute("panel");t&&this.tabGroup.value.setAttribute("active",t)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(e){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${e}']`)}getTab(e){return this.tabGroup.value.querySelector(`wa-tab[panel='${e}']`)}updateToolbarFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const n=t.firstElementChild;if(!(n instanceof Jt)||!n.renderToolbar)return;const r=e.querySelector("k-toolbar");r&&(r.partToolbarRenderer=()=>n.renderToolbar(),r.requestUpdate())}updateContextMenuFromComponent(e){const t=e.querySelector(".tab-content");if(!t||!t.firstElementChild)return;const n=t.firstElementChild;if(!(n instanceof Jt)||!n.renderContextMenu)return;const r=e.querySelector("k-contextmenu");r&&(r.partContextMenuRenderer=()=>n.renderContextMenu(),r.requestUpdate())}render(){return _`
            <wa-tab-group ${fi(this.tabGroup)}>
                ${lv(this.contributions,e=>e.name,e=>_`
                        <wa-tab panel="${e.name}"
                                @auxclick="${t=>this.handleTabAuxClick(t,e)}">
                            <k-icon name="${e.icon}"></k-icon>
                            ${e.label}
                            ${yn(e.closable,()=>_`
                                <wa-icon name="xmark" label="Close"  @click="${t=>this.closeTab(t,e.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${e.name}">
                            <k-toolbar id="toolbar:${e.editorId??e.name}" 
                                       class="tab-toolbar"
                                       ?is-editor="${this.containerId===Ri}"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${e.component?e.component(e.name):Mt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu:${e.name}"
                                           ?is-editor="${this.containerId===Ri}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};To.styles=cn`
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
    `;Uu([pe()],To.prototype,"contributions",2);To=Uu([ue("k-tabs")],To);var yv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,ja=(e,t,n,r)=>{for(var i=r>1?void 0:r?wv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&yv(t,n,i),i};let Xi=class extends Ai{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.handleResize=e=>{if(!this.resizing)return;const n=(this.orientation==="horizontal"?e.clientX:e.clientY)-this.resizing.startPos,r=[...this.resizing.startSizes];r[this.resizing.handleIndex]+=n,r[this.resizing.handleIndex+1]-=n;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,a=i*.05;if(r[this.resizing.handleIndex]>=a&&r[this.resizing.handleIndex+1]>=a){this.resizing.currentSizes=r;const o=r.map((c,p)=>{const v=`${(c/i*100).toFixed(2)}%`;return p===r.length-1?v:`${v} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=o:this.style.gridTemplateRows=o}},this.stopResize=()=>{var e;if((e=this.resizing)!=null&&e.currentSizes){const t=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(n=>`${(n/t*100).toFixed(2)}%`),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}loadChildren(){const e=Array.from(this.children).filter(t=>t.tagName!=="STYLE"&&t.tagName!=="SCRIPT"&&!t.classList.contains("resize-handle"));if(e.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=e,this.sizes)this.gridSizes=this.sizes.split(",").map(t=>t.trim());else{const t=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>t)}this.requestUpdate()}}updated(e){super.updated(e),e.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((t,n)=>{t.style.overflow="hidden",t.style.height="100%",t.style.width="100%",t.style.gridColumn=this.orientation==="horizontal"?`${n*2+1}`:"1",t.style.gridRow=this.orientation==="vertical"?`${n*2+1}`:"1",t.style.display="flex",t.style.flexDirection="column"}))}startResize(e,t){if(e.preventDefault(),t>=this.gridChildren.length-1)return;const n=this.orientation==="horizontal"?e.clientX:e.clientY,r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(a=>a.endsWith("%")?parseFloat(a)/100*r:(a.endsWith("px"),parseFloat(a)));this.resizing={handleIndex:t,startPos:n,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return Mt;const e=this.gridSizes.flatMap((t,n)=>n===this.gridSizes.length-1?[t]:[t,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=e,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=e),this.style.overflow="hidden",_`
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
            
            ${this.gridChildren.map((t,n)=>{if(n<this.gridChildren.length-1){const r=this.orientation==="horizontal"?`${n*2+2}`:"1",i=this.orientation==="vertical"?`${n*2+2}`:"1";return _`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${r};
                                grid-row: ${i};
                            "
                            @mousedown=${a=>this.startResize(a,n)}
                        ></div>
                    `}return Mt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};ja([f()],Xi.prototype,"orientation",2);ja([f()],Xi.prototype,"sizes",2);ja([pe()],Xi.prototype,"gridSizes",2);ja([pe()],Xi.prototype,"gridChildren",2);Xi=ja([ue("k-resizable-grid")],Xi);function Cl(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function xv(e,t){const n=indexedDB.open(e);n.onupgradeneeded=()=>n.result.createObjectStore(t);const r=Cl(n);return(i,a)=>r.then(o=>a(o.transaction(t,i).objectStore(t)))}let vs;function ju(){return vs||(vs=xv("keyval-store","keyval")),vs}function kv(e,t=ju()){return t("readonly",n=>Cl(n.get(e)))}function Iv(e,t,n=ju()){return n("readwrite",r=>(r.put(t,e),Cl(r.transaction)))}class Cv{async persistObject(t,n){return Iv(t,n)}async getObject(t){return kv(t)}}const Lr=new Cv;mn.put("persistenceService",Lr);const pr="events/filesys/workspaceChanged",Da="events/filesys/workspaceConnected";class Lo{constructor(){this.state={}}getWorkspacePath(){const t=[];let n=this;for(;n;)t.push(n.getName()),n=n.getParent();return t.reverse(),t.shift(),t.join("/")}getWorkspace(){let t=this;for(;t;){const n=t.getParent();if(n)t=n;else break}return t}}var Wu=(e=>(e[e.TEXT=0]="TEXT",e[e.BINARY=1]="BINARY",e))(Wu||{});class Zi extends Lo{}class Vs extends Lo{}class Hu extends Zi{constructor(t,n){super(),this.contents=t,this.name=n}async getContents(t){return this.contents}async saveContents(t,n){this.contents=t}async copyTo(t){throw Error("Not supported")}delete(t,n){throw Error("Not supported")}async rename(t){throw Error("Not supported")}getName(){return this.name}getParent(){}}class vc extends Zi{constructor(t,n){super(),this.fileHandle=t,this.parent=n}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(t){const n=await this.fileHandle.getFile();return!t||(t==null?void 0:t.contentType)==0?await n.text():(t==null?void 0:t.encoding)==0||t!=null&&t.uri?URL.createObjectURL(n):t!=null&&t.blob?n:n.stream()}async saveContents(t,n){const r=await this.fileHandle.createWritable();if(t&&typeof t.pipeTo=="function")await t.pipeTo(r);else{const i=r.getWriter();try{await i.write(t)}finally{await i.close()}}}async copyTo(t){const n=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(t,{create:!0})).saveContents(n)}async rename(t){var r,i;const n=this.getParent();if(!n)throw new Error("Cannot rename root resource");if(this.getName()!==t){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(t)}catch(a){throw a.name==="NotAllowedError"||(r=a.message)!=null&&r.includes("not allowed")||(i=a.message)!=null&&i.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):a}await n.listChildren(!0),Ht(pr,this.getWorkspace())}}}class hi extends Vs{constructor(t,n){super(),this.dirHandle=t,this.parent=n}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(t=!1){if(t||!this.files){this.files={};for await(const n of this.dirHandle.values()){const i=n.kind==="file"?new vc(n,this):new hi(n,this);this.files[i.getName()]=i}}return Object.values(this.files)}async getResource(t,n){if(!t)throw new Error("No path provided");const r=t.split("/");let i=this,a=!1;try{for(let o=0;o<r.length;o++){let c=r[o];if(c&&(c=c.trim()),!c)break;if(i instanceof hi){if(i.files||await i.listChildren(),!i.files)return null;const p=i.files[c];if(!p&&(n!=null&&n.create))if(a=!0,o<r.length-1){const g=await i.dirHandle.getDirectoryHandle(c,{create:!0}),v=new hi(g);i.files[c]=v,i=v}else{const g=await i.dirHandle.getFileHandle(c,{create:!0}),v=new vc(g,i);return i.files[c]=v,v}else i=p}}}finally{a&&Ht(pr,this.getWorkspace())}return i}touch(){Ht(pr,this.getWorkspace())}async delete(t,n=!0){var r;return t?this.dirHandle.removeEntry(t,{recursive:n}).then(()=>{Ht(pr,this.getWorkspace())}):(r=this.getParent())==null?void 0:r.delete(this.getName())}async copyTo(t){for(const n of await this.listChildren()){const r=[t,n.getName()].join("/");await n.copyTo(r)}}async rename(t){var r,i;const n=this.getParent();if(!n)throw new Error("Cannot rename workspace root");if(this.getName()!==t){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(t)}catch(a){throw a.name==="NotAllowedError"||(r=a.message)!=null&&r.includes("not allowed")||(i=a.message)!=null&&i.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):a}await n.listChildren(!0),Ht(pr,this.getWorkspace())}}}class Sv{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(t=>{t&&Ht(Da,t)})}registerContribution(t){this.contributions.set(t.type,t),console.log(`Workspace contribution registered: ${t.name} (${t.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const t=await Lr.getObject("workspace_data");if(!t)return;const n=this.contributions.get(t.type);if(!n){console.warn(`No contribution found for workspace type: ${t.type}`);return}try{if(n.restore){const r=await n.restore(t.data);return r&&(this.currentType=t.type),r}}catch(r){console.error(`Failed to restore workspace of type ${t.type}:`,r)}}async connectWorkspace(t){const n=Array.from(this.contributions.values()).find(o=>o.canHandle(t));if(!n)throw new Error("No workspace contribution can handle this input");const r=await n.connect(t),i=n.persist?await n.persist(r):t,a={type:n.type,data:i};return await Lr.persistObject("workspace_data",a),this.currentType=n.type,this.workspace=Promise.resolve(r),Ht(Da,r),r}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await Lr.persistObject("workspace_data",null),await Lr.persistObject("workspace",null)}}const un=new Sv;mn.put("workspaceService",un);un.registerContribution({type:"filesystem",name:"Local File System",canHandle(e){return e&&"kind"in e&&e.kind==="directory"},async connect(e){return new hi(e)},async restore(e){if(e&&"kind"in e&&e.kind==="directory")return new hi(e,void 0)},async persist(e){return e instanceof hi?e.getHandle():null}});const Ev=(e,t)=>!e.leaf&&t.leaf?-1:e.leaf&&!t.leaf?1:e.label.localeCompare(t.label);var Av=Object.defineProperty,$v=Object.getOwnPropertyDescriptor,Yo=(e,t,n,r)=>{for(var i=r>1?void 0:r?$v(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Av(t,n,i),i};let Ji=class extends Jt{constructor(){super(...arguments),this.treeRef=pi()}doBeforeUI(){this.initializeWorkspace()}firstUpdated(e){super.firstUpdated(e),this.setupDragAndDrop()}updated(e){super.updated(e),e.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const e=await un.getWorkspace();e?await this.loadWorkspace(e):Fe.execute("help")}renderToolbar(){const e=On.get()instanceof Lo;return _`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!e} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!e} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const e=On.get()instanceof Lo;return _`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!e}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!e}>Delete</k-command>
        `}async onWorkspaceChanged(e){On.set(void 0),await this.loadWorkspace(e),await this.syncTreeSelection()}async onWorkspaceConnected(e){await this.loadWorkspace(e)}async loadWorkspace(e){this.workspaceDir=e,e?this.root=await this.resourceToTreeNode(e):this.root=void 0}async syncTreeSelection(){var n,r;await this.updateComplete;const e=(n=this.treeRef.value)==null?void 0:n.querySelector("wa-tree"),t=(e==null?void 0:e.selectedItems)||[];t.length>0&&On.set((r=t[0].model)==null?void 0:r.data)}async resourceToTreeNode(e){const t=e instanceof Zi,n={data:e,label:e.getName(),icon:t?"file":"folder-open",leaf:t,children:[]};if(e instanceof Vs){for(const r of await e.listChildren(!0)){const i=await this.resourceToTreeNode(r);n.children.push(i)}n.children.sort(Ev)}return n}createTreeItems(e,t=!1){return e?_`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${e} ?expanded=${t}>
                <span><wa-icon name=${e.icon} label="${e.leaf?"File":"Folder"}"></wa-icon> ${e.label}</span>
                ${e.children.map(n=>this.createTreeItems(n))}
            </wa-tree-item>`:_``}async onFileDoubleClicked(e){const n=e.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:n})}onSelectionChanged(e){const t=e.detail.selection;if(t&&t.length>0){const n=t[0].model;On.set(n.data)}else On.set(void 0)}setupDragAndDrop(){const e=this.treeRef.value;if(!e)return;const t=a=>{var p,g;if(!((p=a.dataTransfer)!=null&&p.types.includes("Files")))return;a.preventDefault(),a.dataTransfer.dropEffect="copy",e.classList.add("drag-over");const c=a.target.closest("wa-tree-item");c&&c!==this.currentDropTarget&&((g=this.currentDropTarget)==null||g.classList.remove("drop-target"),this.currentDropTarget=c,c.classList.add("drop-target"))},n=a=>{var o;(o=a.dataTransfer)!=null&&o.types.includes("Files")&&(a.preventDefault(),e.classList.add("drag-over"))},r=a=>{var g;const o=e.getBoundingClientRect(),c=a.clientX,p=a.clientY;(c<=o.left||c>=o.right||p<=o.top||p>=o.bottom)&&(e.classList.remove("drag-over"),(g=this.currentDropTarget)==null||g.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async a=>{var p;if(a.preventDefault(),e.classList.remove("drag-over"),(p=this.currentDropTarget)==null||p.classList.remove("drop-target"),this.currentDropTarget=void 0,!a.dataTransfer||!this.workspaceDir)return;const o=Array.from(a.dataTransfer.files);if(o.length===0)return;const c=await this.getDropTarget(a);await this.handleFilesDrop(o,c)};e.removeEventListener("dragover",t),e.removeEventListener("dragenter",n),e.removeEventListener("dragleave",r),e.removeEventListener("drop",i),e.addEventListener("dragover",t),e.addEventListener("dragenter",n),e.addEventListener("dragleave",r),e.addEventListener("drop",i)}async getDropTarget(e){const n=e.target.closest("wa-tree-item");if(n){const i=n.model.data;if(i instanceof Vs)return i;const a=i.getParent();if(a)return a}return this.workspaceDir}async handleFilesDrop(e,t){const n=e.length;let r=0,i=0,a=0;for(const o of e)try{const c=this.buildTargetPath(t,o.name);if(await this.workspaceDir.getResource(c)&&!await ia(`File "${o.name}" already exists. Do you want to overwrite it?`)){a++;continue}await(await this.workspaceDir.getResource(c,{create:!0})).saveContents(o),r++}catch(c){console.error(`Failed to upload ${o.name}:`,c),i++}console.log(`Uploaded ${r}/${n} files${a>0?`, ${a} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(e,t){const n=e.getWorkspacePath();return n?`${n}/${t}`:t}render(){return _`
            <div class="tree" ${fi(this.treeRef)}>
                ${yn(!this.workspaceDir,()=>_`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>_`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};Ji.styles=cn`
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
    `;Yo([pe()],Ji.prototype,"root",2);Yo([Zs(pr)],Ji.prototype,"onWorkspaceChanged",1);Yo([Zs(Da)],Ji.prototype,"onWorkspaceConnected",1);Ji=Yo([ue("k-filebrowser")],Ji);class _v{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Bc.set(this.updateCounter)}run(t,n){const r=this.createProgressMonitor(t);try{this.tasks.push(r),this.notifyUpdate(),n(r)}finally{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()}}async runAsync(t,n){const r=this.createProgressMonitor(t);return this.tasks.push(r),this.notifyUpdate(),n(r).finally(()=>{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()})}createProgressMonitor(t){const n={name:t,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(n,{set:(r,i,a)=>(r[i]=a,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const Qi=new _v;mn.put("taskService",Qi);var Ov=Object.getOwnPropertyDescriptor,Tv=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ov(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=o(i)||i);return i};Ct.registerContribution(Il,{html:"<k-tasks></k-tasks>"});let Bs=class extends zo(Jt){render(){Bc.get();const e=Qi.getActiveTasks().length;if(e!=0)return _`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${e}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${e}
                </wa-button>
                ${Qi.getActiveTasks().map(t=>{const n=t.progress>=0||t.totalSteps>0,r=t.progress>=0?t.progress:t.totalSteps>0?Math.round(t.currentStep/t.totalSteps*100):0,i=t.progress<0&&t.totalSteps>0;return _`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${t.name}</strong>: ${t.message}
                            </div>
                            ${n?_`
                                <wa-progress-bar value="${r}" style="--track-height: 1.25rem;">
                                    ${i?`${t.currentStep}/${t.totalSteps} - `:""}${r}%
                                </wa-progress-bar>
                            `:_`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};Bs.styles=cn`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;Bs=Tv([ue("k-tasks")],Bs);var Lv=Object.getOwnPropertyDescriptor,Dv=(e,t,n,r)=>{for(var i=r>1?void 0:r?Lv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=o(i)||i);return i};const yc="<no workspace>";let wc=class extends Ai{constructor(){super(...arguments),this.workspaceName=yc}doInitUI(){this.updateWorkspaceName(),or(Da,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){un.getWorkspace().then(e=>{this.workspaceName=(e==null?void 0:e.getName())||yc,this.requestUpdate()})}handleLoadWorkspace(){Fe.execute("load_workspace",{source:this})}render(){return _`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};wc=Dv([ue("k-workspace-name")],wc);var Pv=Object.getOwnPropertyDescriptor,Rv=(e,t,n,r)=>{for(var i=r>1?void 0:r?Pv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=o(i)||i);return i};const xc="<no part>";Ct.registerContribution(Il,{html:"<k-part-name></k-part-name>"});let kc=class extends zo(Ai){getPartName(){var t;const e=et.get();return e&&(((t=e.tabContribution)==null?void 0:t.label)||e.getAttribute("id"))||xc}render(){var n;const e=et.get(),t=((n=e==null?void 0:e.tabContribution)==null?void 0:n.icon)||"box";return _`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${t}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};kc=Rv([ue("k-part-name")],kc);var Or={},Zn={},Ic;function zv(){if(Ic)return Zn;Ic=1,Object.defineProperty(Zn,"__esModule",{value:!0});function e(h){const s=h||"";return function(){throw new Error("this method "+s+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function t(h,s){if(!h)throw new Error(s||"Assertion failed")}function n(h,s,u){let m;Object.defineProperty(h,s,{get(){return m||(m=u.call(this)),m}})}function r(h){return h&&Object.assign({},h)}function i(h,s){const u=[];for(;s-- >0;)u.push(h());return u}function a(h,s){return new Array(s+1).join(h)}function o(h,s){return i(()=>h,s)}function c(h){const s=[];for(let u=0;u<h.length;u++){const m=h[u];h.lastIndexOf(m)!==u&&s.indexOf(m)<0&&s.push(m)}return s}function p(h){const s=[];return h.forEach(u=>{s.indexOf(u)<0&&s.push(u)}),s}function g(h){const s=h[0];return s===s.toUpperCase()}function v(h){return!g(h)}function x(h,s,u){const m=u||" ";return h.length<s?a(m,s-h.length)+h:h}function y(){this.strings=[]}y.prototype.append=function(h){this.strings.push(h)},y.prototype.contents=function(){return this.strings.join("")};const I=h=>String.fromCodePoint(parseInt(h,16));function R(h){if(h.charAt(0)==="\\")switch(h.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return I(h.slice(2,4));case"u":return h.charAt(2)==="{"?I(h.slice(3,-1)):I(h.slice(2,6));default:return h.charAt(1)}else return h}function D(h){if(h==null)return String(h);const s=Object.prototype.toString.call(h);try{let u;return h.constructor&&h.constructor.name?u=h.constructor.name:s.indexOf("[object ")===0?u=s.slice(8,-1):u=typeof h,u+": "+JSON.stringify(String(h))}catch{return s}}var U=Object.freeze({__proto__:null,abstract:e,assert:t,defineLazyProperty:n,clone:r,repeatFn:i,repeatStr:a,repeat:o,getDuplicates:c,copyWithoutDuplicates:p,isSyntactic:g,isLexical:v,padLeft:x,StringBuffer:y,unescapeCodePoint:R,unexpectedObjToString:D});const Y={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class q{constructor(){if(this.constructor===q)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(s){return s&&(this.source=s.trimmed()),this}}const z=Object.create(q.prototype),G=Object.create(q.prototype);class M extends q{constructor(s){super(),this.obj=s}}class S extends q{constructor(s,u){super(),this.from=s,this.to=u,this.matchCodePoint=s.length>1||u.length>1}}class V extends q{constructor(s){super(),this.index=s}}class W extends q{constructor(s){super(),this.terms=s}}class re extends W{constructor(s,u,m){const C=s.rules[u].body;super([m,C]),this.superGrammar=s,this.name=u,this.body=m}}class ge extends W{constructor(s,u,m,C){const P=s.rules[u].body;super([...m,P,...C]),this.superGrammar=s,this.ruleName=u,this.expansionPos=m.length}}class X extends q{constructor(s){super(),this.factors=s}}class ie extends q{constructor(s){super(),this.expr=s}}class de extends ie{}class ke extends ie{}class Ve extends ie{}de.prototype.operator="*",ke.prototype.operator="+",Ve.prototype.operator="?",de.prototype.minNumMatches=0,ke.prototype.minNumMatches=1,Ve.prototype.minNumMatches=0,de.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ke.prototype.maxNumMatches=Number.POSITIVE_INFINITY,Ve.prototype.maxNumMatches=1;class ye extends q{constructor(s){super(),this.expr=s}}class be extends q{constructor(s){super(),this.expr=s}}class ze extends q{constructor(s){super(),this.expr=s}}class ne extends q{constructor(s,u=[]){super(),this.ruleName=s,this.args=u}isSyntactic(){return g(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class De extends q{constructor(s){super(),this.category=s,this.pattern=Y[s]}}function We(h,s){let u;return s?(u=new Error(s.getLineAndColumnMessage()+h),u.shortMessage=h,u.interval=s):u=new Error(h),u}function E(){return We("Interval sources don't match")}function O(h){const s=new Error;return Object.defineProperty(s,"message",{enumerable:!0,get(){return h.message}}),Object.defineProperty(s,"shortMessage",{enumerable:!0,get(){return"Expected "+h.getExpectedText()}}),s.interval=h.getInterval(),s}function ve(h,s,u){const m=s?`Grammar ${h} is not declared in namespace '${s}'`:"Undeclared grammar "+h;return We(m,u)}function Me(h,s){return We("Grammar "+h.name+" is already declared in this namespace")}function lt(h){return We(`Grammar '${h.name}' does not support incremental parsing`)}function He(h,s,u){return We("Rule "+h+" is not declared in grammar "+s,u)}function N(h,s,u){return We("Cannot override rule "+h+" because it is not declared in "+s,u)}function H(h,s,u){return We("Cannot extend rule "+h+" because it is not declared in "+s,u)}function F(h,s,u,m){let C="Duplicate declaration for rule '"+h+"' in grammar '"+s+"'";return s!==u&&(C+=" (originally declared in '"+u+"')"),We(C,m)}function ee(h,s,u,m){return We("Wrong number of parameters for rule "+h+" (expected "+s+", got "+u+")",m)}function se(h,s,u,m){return We("Wrong number of arguments for rule "+h+" (expected "+s+", got "+u+")",m)}function te(h,s,u){return We("Duplicate parameter names in rule "+h+": "+s.join(", "),u)}function K(h,s){return We("Invalid parameter to rule "+h+": "+s+" has arity "+s.getArity()+", but parameter expressions must have arity 1",s.source)}const le="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function Se(h,s){return We("Cannot apply syntactic rule "+h+" from here (inside a lexical context)",s.source)}function Be(h){const{ruleName:s}=h;return We(`applySyntactic is for syntactic rules, but '${s}' is a lexical rule. `+le,h.source)}function Ge(h){return We("applySyntactic is not required here (in a syntactic context)",h.source)}function Ce(h,s){return We("Incorrect argument type: expected "+h,s.source)}function $e(h){return We("'...' can appear at most once in a rule body",h.source)}function Ze(h){const s=h._node;t(s&&s.isNonterminal()&&s.ctorName==="escapeChar_unicodeCodePoint");const u=h.children.slice(1,-1).map(C=>C.source),m=u[0].coverageWith(...u.slice(1));return We(`U+${m.contents} is not a valid Unicode code point`,m)}function xe(h,s){const u=s.length>0?s[s.length-1].args:[];let C="Nullable expression "+h.expr.substituteParams(u)+" is not allowed inside '"+h.operator+"' (possible infinite loop)";if(s.length>0){const P=s.map(j=>new ne(j.ruleName,j.args)).join(`
`);C+=`
Application stack (most recent application last):
`+P}return We(C,h.expr.source)}function Tt(h,s,u,m){return We("Rule "+h+" involves an alternation which has inconsistent arity (expected "+s+", got "+u+")",m.source)}function bn(h){const s=h.map(u=>u.message);return We(["Errors:"].concat(s).join(`
- `),h[0].interval)}function jt(h,s,u,m){let C=m.slice(0,-1).map(ae=>{const Ie="  "+ae[0].name+" > "+ae[1];return ae.length===3?Ie+" for '"+ae[2]+"'":Ie}).join(`
`);C+=`
  `+s+" > "+h;let P="";h==="_iter"&&(P=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const j=[`Missing semantic action for '${h}' in ${u} '${s}'.${P}`,"Action stack (most recent call last):",C].join(`
`),oe=We(j);return oe.name="missingSemanticAction",oe}function Lt(h){if(h.length===1)throw h[0];if(h.length>1)throw bn(h)}function Wt(h){let s=0;return h.map(m=>{const C=m.toString();return s=Math.max(s,C.length),C}).map(m=>x(m,s))}function Mn(h,s,u){const m=h.length,C=h.slice(0,u),P=h.slice(u+s.length);return(C+s+P).substr(0,m)}function lr(...h){const s=this,{offset:u}=s,{repeatStr:m}=U,C=new y;C.append("Line "+s.lineNum+", col "+s.colNum+`:
`);const P=Wt([s.prevLine==null?0:s.lineNum-1,s.lineNum,s.nextLine==null?0:s.lineNum+1]),j=(J,Z,fe)=>{C.append(fe+P[J]+" | "+Z+`
`)};s.prevLine!=null&&j(0,s.prevLine,"  "),j(1,s.line,"> ");const oe=s.line.length;let ae=m(" ",oe+1);for(let J=0;J<h.length;++J){let Z=h[J][0],fe=h[J][1];t(Z>=0&&Z<=fe,"range start must be >= 0 and <= end");const _e=u-s.colNum+1;Z=Math.max(0,Z-_e),fe=Math.min(fe-_e,oe),ae=Mn(ae,m("~",fe-Z),Z)}const Ie=2+P[1].length+3;return C.append(m(" ",Ie)),ae=Mn(ae,"^",s.colNum-1),C.append(ae.replace(/ +$/,"")+`
`),s.nextLine!=null&&j(2,s.nextLine,"  "),C.contents()}let Fr=[];function Gn(h){Fr.push(h)}function he(h){Fr.forEach(s=>{s(h)}),Fr=null}function qr(h,s){let u=1,m=1,C=0,P=0,j=null,oe=null,ae=-1;for(;C<s;){const Z=h.charAt(C++);Z===`
`?(u++,m=1,ae=P,P=C):Z!=="\r"&&m++}let Ie=h.indexOf(`
`,P);if(Ie===-1)Ie=h.length;else{const Z=h.indexOf(`
`,Ie+1);j=Z===-1?h.slice(Ie):h.slice(Ie,Z),j=j.replace(/^\r?\n/,"").replace(/\r$/,"")}ae>=0&&(oe=h.slice(ae,P).replace(/\r?\n$/,""));const J=h.slice(P,Ie).replace(/\r$/,"");return{offset:s,lineNum:u,colNum:m,line:J,prevLine:oe,nextLine:j,toString:lr}}function Cr(h,s,...u){return qr(h,s).toString(...u)}const vn=(()=>{let h=0;return s=>""+s+h++})();class kt{constructor(s,u,m){this.sourceString=s,this.startIdx=u,this.endIdx=m}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...s){return kt.coverage(...s,this)}collapsedLeft(){return new kt(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new kt(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return qr(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const s=[this.startIdx,this.endIdx];return Cr(this.sourceString,this.startIdx,s)}minus(s){if(this.sourceString!==s.sourceString)throw E();return this.startIdx===s.startIdx&&this.endIdx===s.endIdx?[]:this.startIdx<s.startIdx&&s.endIdx<this.endIdx?[new kt(this.sourceString,this.startIdx,s.startIdx),new kt(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.endIdx&&s.endIdx<this.endIdx?[new kt(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.startIdx&&s.startIdx<this.endIdx?[new kt(this.sourceString,this.startIdx,s.startIdx)]:[this]}relativeTo(s){if(this.sourceString!==s.sourceString)throw E();return t(this.startIdx>=s.startIdx&&this.endIdx<=s.endIdx,"other interval does not cover this one"),new kt(this.sourceString,this.startIdx-s.startIdx,this.endIdx-s.startIdx)}trimmed(){const{contents:s}=this,u=this.startIdx+s.match(/^\s*/)[0].length,m=this.endIdx-s.match(/\s*$/)[0].length;return new kt(this.sourceString,u,m)}subInterval(s,u){const m=this.startIdx+s;return new kt(this.sourceString,m,m+u)}}kt.coverage=function(h,...s){let{startIdx:u,endIdx:m}=h;for(const C of s){if(C.sourceString!==h.sourceString)throw E();u=Math.min(u,C.startIdx),m=Math.max(m,C.endIdx)}return new kt(h.sourceString,u,m)};const Nn=65535;class Je{constructor(s){this.source=s,this.pos=0,this.examinedLength=0}atEnd(){const s=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),s}next(){const s=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),s}nextCharCode(){const s=this.next();return s&&s.charCodeAt(0)}nextCodePoint(){const s=this.source.slice(this.pos++).codePointAt(0);return s>Nn&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),s}matchString(s,u){let m;if(u){for(m=0;m<s.length;m++){const C=this.next(),P=s[m];if(C==null||C.toUpperCase()!==P.toUpperCase())return!1}return!0}for(m=0;m<s.length;m++)if(this.next()!==s[m])return!1;return!0}sourceSlice(s,u){return this.source.slice(s,u)}interval(s,u){return new kt(this.source,s,u||this.pos)}}class w{constructor(s,u,m,C,P,j,oe){this.matcher=s,this.input=u,this.startExpr=m,this._cst=C,this._cstOffset=P,this._rightmostFailurePosition=j,this._rightmostFailures=oe,this.failed()&&(n(this,"message",function(){const ae="Expected "+this.getExpectedText();return Cr(this.input,this.getRightmostFailurePosition())+ae}),n(this,"shortMessage",function(){const ae="expected "+this.getExpectedText(),Ie=qr(this.input,this.getRightmostFailurePosition());return"Line "+Ie.lineNum+", col "+Ie.colNum+": "+ae}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const s=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=s.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const s=new y;let u=this.getRightmostFailures();u=u.filter(m=>!m.isFluffy());for(let m=0;m<u.length;m++)m>0&&(m===u.length-1?s.append(u.length>2?", or ":" or "):s.append(", ")),s.append(u[m].toString());return s.contents()}getInterval(){const s=this.getRightmostFailurePosition();return new kt(this.input,s,s)}}class A{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(s){return this.applicationMemoKeyStack.indexOf(s.toMemoKey())>=0}enter(s){this.applicationMemoKeyStack.push(s.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(s,u){u.isLeftRecursion=!0,u.headApplication=s,u.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=u;const{applicationMemoKeyStack:m}=this,C=m.indexOf(s.toMemoKey())+1,P=m.slice(C);u.isInvolved=function(j){return P.indexOf(j)>=0},u.updateInvolvedApplicationMemoKeys=function(){for(let j=C;j<m.length;j++){const oe=m[j];this.isInvolved(oe)||P.push(oe)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(s){if(!s.isLeftRecursion)return!0;const{applicationMemoKeyStack:u}=this;for(let m=0;m<u.length;m++){const C=u[m];if(s.isInvolved(C))return!1}return!0}memoize(s,u){return this.memo[s]=u,this.maxExaminedLength=Math.max(this.maxExaminedLength,u.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,u.rightmostFailureOffset),u}clearObsoleteEntries(s,u){if(s+this.maxExaminedLength<=u)return;const{memo:m}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(m).forEach(C=>{const P=m[C];s+P.examinedLength>u?delete m[C]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,P.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,P.rightmostFailureOffset))})}}const T="✗",d="✓",b="⋅",k="⇒",L="␉",$="␊",B="␍",Q={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function we(h){return o(" ",h).join("")}function Ee(h,s,u){const m=tt(h.slice(s,s+u));return m.length<u?m+o(" ",u-m.length).join(""):m}function tt(h){return typeof h=="string"?h.replace(/ /g,b).replace(/\t/g,L).replace(/\n/g,$).replace(/\r/g,B):String(h)}class Te{constructor(s,u,m,C,P,j,oe){this.input=s,this.pos=this.pos1=u,this.pos2=m,this.source=new kt(s,u,m),this.expr=C,this.bindings=j,this.children=oe||[],this.terminatingLREntry=null,this._flags=P?Q.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(s){const u=new Te(this.input,this.pos,this.pos2,s,this.succeeded,this.bindings,this.children);return u.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,u.isImplicitSpaces=this.isImplicitSpaces,u.isMemoized=this.isMemoized,u.isRootNode=this.isRootNode,u.terminatesLR=this.terminatesLR,u.terminatingLREntry=this.terminatingLREntry,u}recordLRTermination(s,u){this.terminatingLREntry=new Te(this.input,this.pos,this.pos2,this.expr,!1,[u],[s]),this.terminatingLREntry.terminatesLR=!0}walk(s,u){let m=s;typeof m=="function"&&(m={enter:m});function C(P,j,oe){let ae=!0;m.enter&&m.enter.call(u,P,j,oe)===Te.prototype.SKIP&&(ae=!1),ae&&(P.children.forEach(Ie=>{C(Ie,P,oe+1)}),m.exit&&m.exit.call(u,P,j,oe))}this.isRootNode?this.children.forEach(P=>{C(P,null,0)}):C(this,null,0)}toString(){const s=new y;return this.walk((u,m,C)=>{if(!u)return this.SKIP;if(u.expr.constructor.name!=="Alt"){if(s.append(Ee(u.input,u.pos,10)+we(C*2+1)),s.append((u.succeeded?d:T)+" "+u.displayString),u.isHeadOfLeftRecursion&&s.append(" (LR)"),u.succeeded){const j=tt(u.source.contents);s.append(" "+k+"  "),s.append(typeof j=="string"?'"'+j+'"':j)}s.append(`
`)}}),s.contents()}}Te.prototype.SKIP={},Object.keys(Q).forEach(h=>{const s=Q[h];Object.defineProperty(Te.prototype,h,{get(){return(this._flags&s)!==0},set(u){u?this._flags|=s:this._flags&=~s}})}),q.prototype.allowsSkippingPrecedingSpace=e("allowsSkippingPrecedingSpace"),z.allowsSkippingPrecedingSpace=G.allowsSkippingPrecedingSpace=ne.prototype.allowsSkippingPrecedingSpace=M.prototype.allowsSkippingPrecedingSpace=S.prototype.allowsSkippingPrecedingSpace=De.prototype.allowsSkippingPrecedingSpace=function(){return!0},W.prototype.allowsSkippingPrecedingSpace=ie.prototype.allowsSkippingPrecedingSpace=ze.prototype.allowsSkippingPrecedingSpace=be.prototype.allowsSkippingPrecedingSpace=ye.prototype.allowsSkippingPrecedingSpace=V.prototype.allowsSkippingPrecedingSpace=X.prototype.allowsSkippingPrecedingSpace=function(){return!1};let nt;Gn(h=>{nt=h});let Ke;q.prototype.assertAllApplicationsAreValid=function(h,s){Ke=0,this._assertAllApplicationsAreValid(h,s)},q.prototype._assertAllApplicationsAreValid=e("_assertAllApplicationsAreValid"),z._assertAllApplicationsAreValid=G._assertAllApplicationsAreValid=M.prototype._assertAllApplicationsAreValid=S.prototype._assertAllApplicationsAreValid=V.prototype._assertAllApplicationsAreValid=De.prototype._assertAllApplicationsAreValid=function(h,s){},ze.prototype._assertAllApplicationsAreValid=function(h,s){Ke++,this.expr._assertAllApplicationsAreValid(h,s),Ke--},W.prototype._assertAllApplicationsAreValid=function(h,s){for(let u=0;u<this.terms.length;u++)this.terms[u]._assertAllApplicationsAreValid(h,s)},X.prototype._assertAllApplicationsAreValid=function(h,s){for(let u=0;u<this.factors.length;u++)this.factors[u]._assertAllApplicationsAreValid(h,s)},ie.prototype._assertAllApplicationsAreValid=ye.prototype._assertAllApplicationsAreValid=be.prototype._assertAllApplicationsAreValid=function(h,s){this.expr._assertAllApplicationsAreValid(h,s)},ne.prototype._assertAllApplicationsAreValid=function(h,s,u=!1){const m=s.rules[this.ruleName],C=g(h)&&Ke===0;if(!m)throw He(this.ruleName,s.name,this.source);if(!u&&g(this.ruleName)&&!C)throw Se(this.ruleName,this);const P=this.args.length,j=m.formals.length;if(P!==j)throw se(this.ruleName,j,P,this.source);const oe=nt&&m===nt.rules.applySyntactic;if(nt&&m===nt.rules.caseInsensitive&&!(this.args[0]instanceof M))throw Ce('a Terminal (e.g. "abc")',this.args[0]);if(oe){const Ie=this.args[0];if(!(Ie instanceof ne))throw Ce("a syntactic rule application",Ie);if(!g(Ie.ruleName))throw Be(Ie);if(C)throw Ge(this)}this.args.forEach(Ie=>{if(Ie._assertAllApplicationsAreValid(h,s,oe),Ie.getArity()!==1)throw K(this.ruleName,Ie)})},q.prototype.assertChoicesHaveUniformArity=e("assertChoicesHaveUniformArity"),z.assertChoicesHaveUniformArity=G.assertChoicesHaveUniformArity=M.prototype.assertChoicesHaveUniformArity=S.prototype.assertChoicesHaveUniformArity=V.prototype.assertChoicesHaveUniformArity=ze.prototype.assertChoicesHaveUniformArity=De.prototype.assertChoicesHaveUniformArity=function(h){},W.prototype.assertChoicesHaveUniformArity=function(h){if(this.terms.length===0)return;const s=this.terms[0].getArity();for(let u=0;u<this.terms.length;u++){const m=this.terms[u];m.assertChoicesHaveUniformArity();const C=m.getArity();if(s!==C)throw Tt(h,s,C,m)}},re.prototype.assertChoicesHaveUniformArity=function(h){const s=this.terms[0].getArity(),u=this.terms[1].getArity();if(s!==u)throw Tt(h,u,s,this.terms[0])},X.prototype.assertChoicesHaveUniformArity=function(h){for(let s=0;s<this.factors.length;s++)this.factors[s].assertChoicesHaveUniformArity(h)},ie.prototype.assertChoicesHaveUniformArity=function(h){this.expr.assertChoicesHaveUniformArity(h)},ye.prototype.assertChoicesHaveUniformArity=function(h){},be.prototype.assertChoicesHaveUniformArity=function(h){this.expr.assertChoicesHaveUniformArity(h)},ne.prototype.assertChoicesHaveUniformArity=function(h){},q.prototype.assertIteratedExprsAreNotNullable=e("assertIteratedExprsAreNotNullable"),z.assertIteratedExprsAreNotNullable=G.assertIteratedExprsAreNotNullable=M.prototype.assertIteratedExprsAreNotNullable=S.prototype.assertIteratedExprsAreNotNullable=V.prototype.assertIteratedExprsAreNotNullable=De.prototype.assertIteratedExprsAreNotNullable=function(h){},W.prototype.assertIteratedExprsAreNotNullable=function(h){for(let s=0;s<this.terms.length;s++)this.terms[s].assertIteratedExprsAreNotNullable(h)},X.prototype.assertIteratedExprsAreNotNullable=function(h){for(let s=0;s<this.factors.length;s++)this.factors[s].assertIteratedExprsAreNotNullable(h)},ie.prototype.assertIteratedExprsAreNotNullable=function(h){if(this.expr.assertIteratedExprsAreNotNullable(h),this.expr.isNullable(h))throw xe(this,[])},Ve.prototype.assertIteratedExprsAreNotNullable=ye.prototype.assertIteratedExprsAreNotNullable=be.prototype.assertIteratedExprsAreNotNullable=ze.prototype.assertIteratedExprsAreNotNullable=function(h){this.expr.assertIteratedExprsAreNotNullable(h)},ne.prototype.assertIteratedExprsAreNotNullable=function(h){this.args.forEach(s=>{s.assertIteratedExprsAreNotNullable(h)})};class Et{constructor(s){this.matchLength=s}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(s){if(this.children)return this.children[s]}indexOfChild(s){return this.children.indexOf(s)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(s){const u=this.indexOfChild(s);if(u<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(u===0)throw new Error("cannot get child before first child");return this.childAt(u-1)}childAfter(s){const u=this.indexOfChild(s);if(u<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(u===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(u+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class Ne extends Et{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class vt extends Et{constructor(s,u,m,C){super(C),this.ruleName=s,this.children=u,this.childOffsets=m}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return v(this.ctorName)}isSyntactic(){return g(this.ctorName)}}class dn extends Et{constructor(s,u,m,C){super(m),this.children=s,this.childOffsets=u,this.optional=C}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}q.prototype.eval=e("eval"),z.eval=function(h){const{inputStream:s}=h,u=s.pos,m=s.nextCodePoint();return m!==void 0?(h.pushBinding(new Ne(String.fromCodePoint(m).length),u),!0):(h.processFailure(u,this),!1)},G.eval=function(h){const{inputStream:s}=h,u=s.pos;return s.atEnd()?(h.pushBinding(new Ne(0),u),!0):(h.processFailure(u,this),!1)},M.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos;return s.matchString(this.obj)?(h.pushBinding(new Ne(this.obj.length),u),!0):(h.processFailure(u,this),!1)},S.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos,m=this.matchCodePoint?s.nextCodePoint():s.nextCharCode();return m!==void 0&&this.from.codePointAt(0)<=m&&m<=this.to.codePointAt(0)?(h.pushBinding(new Ne(String.fromCodePoint(m).length),u),!0):(h.processFailure(u,this),!1)},V.prototype.eval=function(h){return h.eval(h.currentApplication().args[this.index])},ze.prototype.eval=function(h){h.enterLexifiedContext();const s=h.eval(this.expr);return h.exitLexifiedContext(),s},W.prototype.eval=function(h){for(let s=0;s<this.terms.length;s++)if(h.eval(this.terms[s]))return!0;return!1},X.prototype.eval=function(h){for(let s=0;s<this.factors.length;s++){const u=this.factors[s];if(!h.eval(u))return!1}return!0},ie.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos,m=this.getArity(),C=[],P=[];for(;C.length<m;)C.push([]),P.push([]);let j=0,oe=u,ae;for(;j<this.maxNumMatches&&h.eval(this.expr);){if(s.pos===oe)throw xe(this,h._applicationStack);oe=s.pos,j++;const fe=h._bindings.splice(h._bindings.length-m,m),_e=h._bindingOffsets.splice(h._bindingOffsets.length-m,m);for(ae=0;ae<fe.length;ae++)C[ae].push(fe[ae]),P[ae].push(_e[ae])}if(j<this.minNumMatches)return!1;let Ie=h.posToOffset(u),J=0;if(j>0){const fe=C[m-1],_e=P[m-1],rt=_e[_e.length-1]+fe[fe.length-1].matchLength;Ie=P[0][0],J=rt-Ie}const Z=this instanceof Ve;for(ae=0;ae<C.length;ae++)h._bindings.push(new dn(C[ae],P[ae],J,Z)),h._bindingOffsets.push(Ie);return!0},ye.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos;h.pushFailuresInfo();const m=h.eval(this.expr);return h.popFailuresInfo(),m?(h.processFailure(u,this),!1):(s.pos=u,!0)},be.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos;return h.eval(this.expr)?(s.pos=u,!0):!1},ne.prototype.eval=function(h){const s=h.currentApplication(),u=s?s.args:[],m=this.substituteParams(u),C=h.getCurrentPosInfo();if(C.isActive(m))return m.handleCycle(h);const P=m.toMemoKey(),j=C.memo[P];if(j&&C.shouldUseMemoizedResult(j)){if(h.hasNecessaryInfo(j))return h.useMemoizedResult(h.inputStream.pos,j);delete C.memo[P]}return m.reallyEval(h)},ne.prototype.handleCycle=function(h){const s=h.getCurrentPosInfo(),{currentLeftRecursion:u}=s,m=this.toMemoKey();let C=s.memo[m];return u&&u.headApplication.toMemoKey()===m?C.updateInvolvedApplicationMemoKeys():C||(C=s.memoize(m,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),s.startLeftRecursion(this,C)),h.useMemoizedResult(h.inputStream.pos,C)},ne.prototype.reallyEval=function(h){const{inputStream:s}=h,u=s.pos,m=h.getCurrentPosInfo(),C=h.grammar.rules[this.ruleName],{body:P}=C,{description:j}=C;h.enterApplication(m,this),j&&h.pushFailuresInfo();const oe=s.examinedLength;s.examinedLength=0;let ae=this.evalOnce(P,h);const Ie=m.currentLeftRecursion,J=this.toMemoKey(),Z=Ie&&Ie.headApplication.toMemoKey()===J;let fe;h.doNotMemoize?h.doNotMemoize=!1:Z?(ae=this.growSeedResult(P,h,u,Ie,ae),m.endLeftRecursion(),fe=Ie,fe.examinedLength=s.examinedLength-u,fe.rightmostFailureOffset=h._getRightmostFailureOffset(),m.memoize(J,fe)):(!Ie||!Ie.isInvolved(J))&&(fe=m.memoize(J,{matchLength:s.pos-u,examinedLength:s.examinedLength-u,value:ae,failuresAtRightmostPosition:h.cloneRecordedFailures(),rightmostFailureOffset:h._getRightmostFailureOffset()}));const _e=!!ae;if(j&&(h.popFailuresInfo(),_e||h.processFailure(u,this),fe&&(fe.failuresAtRightmostPosition=h.cloneRecordedFailures())),h.isTracing()&&fe){const rt=h.getTraceEntry(u,this,_e,_e?[ae]:[]);Z&&(t(rt.terminatingLREntry!=null||!_e),rt.isHeadOfLeftRecursion=!0),fe.traceEntry=rt}return s.examinedLength=Math.max(s.examinedLength,oe),h.exitApplication(m,ae),_e},ne.prototype.evalOnce=function(h,s){const{inputStream:u}=s,m=u.pos;if(s.eval(h)){const C=h.getArity(),P=s._bindings.splice(s._bindings.length-C,C),j=s._bindingOffsets.splice(s._bindingOffsets.length-C,C),oe=u.pos-m;return new vt(this.ruleName,P,j,oe)}else return!1},ne.prototype.growSeedResult=function(h,s,u,m,C){if(!C)return!1;const{inputStream:P}=s;for(;;){if(m.matchLength=P.pos-u,m.value=C,m.failuresAtRightmostPosition=s.cloneRecordedFailures(),s.isTracing()){const j=s.trace[s.trace.length-1];m.traceEntry=new Te(s.input,u,P.pos,this,!0,[C],[j.clone()])}if(P.pos=u,C=this.evalOnce(h,s),P.pos-u<=m.matchLength)break;s.isTracing()&&s.trace.splice(-2,1)}return s.isTracing()&&m.traceEntry.recordLRTermination(s.trace.pop(),C),P.pos=u+m.matchLength,m.value},De.prototype.eval=function(h){const{inputStream:s}=h,u=s.pos,m=s.next();return m&&this.pattern.test(m)?(h.pushBinding(new Ne(m.length),u),!0):(h.processFailure(u,this),!1)},q.prototype.getArity=e("getArity"),z.getArity=G.getArity=M.prototype.getArity=S.prototype.getArity=V.prototype.getArity=ne.prototype.getArity=De.prototype.getArity=function(){return 1},W.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},X.prototype.getArity=function(){let h=0;for(let s=0;s<this.factors.length;s++)h+=this.factors[s].getArity();return h},ie.prototype.getArity=function(){return this.expr.getArity()},ye.prototype.getArity=function(){return 0},be.prototype.getArity=ze.prototype.getArity=function(){return this.expr.getArity()};function ct(h,s){const u={};if(h.source&&s){const m=h.source.relativeTo(s);u.sourceInterval=[m.startIdx,m.endIdx]}return u}q.prototype.outputRecipe=e("outputRecipe"),z.outputRecipe=function(h,s){return["any",ct(this,s)]},G.outputRecipe=function(h,s){return["end",ct(this,s)]},M.prototype.outputRecipe=function(h,s){return["terminal",ct(this,s),this.obj]},S.prototype.outputRecipe=function(h,s){return["range",ct(this,s),this.from,this.to]},V.prototype.outputRecipe=function(h,s){return["param",ct(this,s),this.index]},W.prototype.outputRecipe=function(h,s){return["alt",ct(this,s)].concat(this.terms.map(u=>u.outputRecipe(h,s)))},re.prototype.outputRecipe=function(h,s){return this.terms[0].outputRecipe(h,s)},ge.prototype.outputRecipe=function(h,s){const u=this.terms.slice(0,this.expansionPos),m=this.terms.slice(this.expansionPos+1);return["splice",ct(this,s),u.map(C=>C.outputRecipe(h,s)),m.map(C=>C.outputRecipe(h,s))]},X.prototype.outputRecipe=function(h,s){return["seq",ct(this,s)].concat(this.factors.map(u=>u.outputRecipe(h,s)))},de.prototype.outputRecipe=ke.prototype.outputRecipe=Ve.prototype.outputRecipe=ye.prototype.outputRecipe=be.prototype.outputRecipe=ze.prototype.outputRecipe=function(h,s){return[this.constructor.name.toLowerCase(),ct(this,s),this.expr.outputRecipe(h,s)]},ne.prototype.outputRecipe=function(h,s){return["app",ct(this,s),this.ruleName,this.args.map(u=>u.outputRecipe(h,s))]},De.prototype.outputRecipe=function(h,s){return["unicodeChar",ct(this,s),this.category]},q.prototype.introduceParams=e("introduceParams"),z.introduceParams=G.introduceParams=M.prototype.introduceParams=S.prototype.introduceParams=V.prototype.introduceParams=De.prototype.introduceParams=function(h){return this},W.prototype.introduceParams=function(h){return this.terms.forEach((s,u,m)=>{m[u]=s.introduceParams(h)}),this},X.prototype.introduceParams=function(h){return this.factors.forEach((s,u,m)=>{m[u]=s.introduceParams(h)}),this},ie.prototype.introduceParams=ye.prototype.introduceParams=be.prototype.introduceParams=ze.prototype.introduceParams=function(h){return this.expr=this.expr.introduceParams(h),this},ne.prototype.introduceParams=function(h){const s=h.indexOf(this.ruleName);if(s>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new V(s).withSource(this.source)}else return this.args.forEach((u,m,C)=>{C[m]=u.introduceParams(h)}),this},q.prototype.isNullable=function(h){return this._isNullable(h,Object.create(null))},q.prototype._isNullable=e("_isNullable"),z._isNullable=S.prototype._isNullable=V.prototype._isNullable=ke.prototype._isNullable=De.prototype._isNullable=function(h,s){return!1},G._isNullable=function(h,s){return!0},M.prototype._isNullable=function(h,s){return typeof this.obj=="string"?this.obj==="":!1},W.prototype._isNullable=function(h,s){return this.terms.length===0||this.terms.some(u=>u._isNullable(h,s))},X.prototype._isNullable=function(h,s){return this.factors.every(u=>u._isNullable(h,s))},de.prototype._isNullable=Ve.prototype._isNullable=ye.prototype._isNullable=be.prototype._isNullable=function(h,s){return!0},ze.prototype._isNullable=function(h,s){return this.expr._isNullable(h,s)},ne.prototype._isNullable=function(h,s){const u=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(s,u)){const{body:m}=h.rules[this.ruleName],C=m.substituteParams(this.args);s[u]=!1,s[u]=C._isNullable(h,s)}return s[u]},q.prototype.substituteParams=e("substituteParams"),z.substituteParams=G.substituteParams=M.prototype.substituteParams=S.prototype.substituteParams=De.prototype.substituteParams=function(h){return this},V.prototype.substituteParams=function(h){return h[this.index]},W.prototype.substituteParams=function(h){return new W(this.terms.map(s=>s.substituteParams(h)))},X.prototype.substituteParams=function(h){return new X(this.factors.map(s=>s.substituteParams(h)))},ie.prototype.substituteParams=ye.prototype.substituteParams=be.prototype.substituteParams=ze.prototype.substituteParams=function(h){return new this.constructor(this.expr.substituteParams(h))},ne.prototype.substituteParams=function(h){if(this.args.length===0)return this;{const s=this.args.map(u=>u.substituteParams(h));return new ne(this.ruleName,s)}};function Sr(h){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(h)}function gt(h){const s=Object.create(null);h.forEach(u=>{s[u]=(s[u]||0)+1}),Object.keys(s).forEach(u=>{if(s[u]<=1)return;let m=1;h.forEach((C,P)=>{C===u&&(h[P]=C+"_"+m++)})})}q.prototype.toArgumentNameList=e("toArgumentNameList"),z.toArgumentNameList=function(h,s){return["any"]},G.toArgumentNameList=function(h,s){return["end"]},M.prototype.toArgumentNameList=function(h,s){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+h]},S.prototype.toArgumentNameList=function(h,s){let u=this.from+"_to_"+this.to;return Sr(u)||(u="_"+u),Sr(u)||(u="$"+h),[u]},W.prototype.toArgumentNameList=function(h,s){const u=this.terms.map(P=>P.toArgumentNameList(h,!0)),m=[],C=u[0].length;for(let P=0;P<C;P++){const j=[];for(let ae=0;ae<this.terms.length;ae++)j.push(u[ae][P]);const oe=p(j);m.push(oe.join("_or_"))}return s||gt(m),m},X.prototype.toArgumentNameList=function(h,s){let u=[];return this.factors.forEach(m=>{const C=m.toArgumentNameList(h,!0);u=u.concat(C),h+=C.length}),s||gt(u),u},ie.prototype.toArgumentNameList=function(h,s){const u=this.expr.toArgumentNameList(h,s).map(m=>m[m.length-1]==="s"?m+"es":m+"s");return s||gt(u),u},Ve.prototype.toArgumentNameList=function(h,s){return this.expr.toArgumentNameList(h,s).map(u=>"opt"+u[0].toUpperCase()+u.slice(1))},ye.prototype.toArgumentNameList=function(h,s){return[]},be.prototype.toArgumentNameList=ze.prototype.toArgumentNameList=function(h,s){return this.expr.toArgumentNameList(h,s)},ne.prototype.toArgumentNameList=function(h,s){return[this.ruleName]},De.prototype.toArgumentNameList=function(h,s){return["$"+h]},V.prototype.toArgumentNameList=function(h,s){return["param"+this.index]},q.prototype.toDisplayString=e("toDisplayString"),W.prototype.toDisplayString=X.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},z.toDisplayString=G.toDisplayString=ie.prototype.toDisplayString=ye.prototype.toDisplayString=be.prototype.toDisplayString=ze.prototype.toDisplayString=M.prototype.toDisplayString=S.prototype.toDisplayString=V.prototype.toDisplayString=function(){return this.toString()},ne.prototype.toDisplayString=function(){if(this.args.length>0){const h=this.args.map(s=>s.toDisplayString());return this.ruleName+"<"+h.join(",")+">"}else return this.ruleName},De.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function ni(h){return h==="description"||h==="string"||h==="code"}class At{constructor(s,u,m){if(!ni(m))throw new Error("invalid Failure type: "+m);this.pexpr=s,this.text=u,this.type=m,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(s){return this.getText()===s.getText()&&this.type===s.type&&(!this.isFluffy()||this.isFluffy()&&s.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const s=new At(this.pexpr,this.text,this.type);return this.isFluffy()&&s.makeFluffy(),s}toKey(){return this.toString()+"#"+this.type}}q.prototype.toFailure=e("toFailure"),z.toFailure=function(h){return new At(this,"any object","description")},G.toFailure=function(h){return new At(this,"end of input","description")},M.prototype.toFailure=function(h){return new At(this,this.obj,"string")},S.prototype.toFailure=function(h){return new At(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},ye.prototype.toFailure=function(h){const s=this.expr===z?"nothing":"not "+this.expr.toFailure(h);return new At(this,s,"description")},be.prototype.toFailure=function(h){return this.expr.toFailure(h)},ne.prototype.toFailure=function(h){let{description:s}=h.rules[this.ruleName];return s||(s=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new At(this,s,"description")},De.prototype.toFailure=function(h){return new At(this,"a Unicode ["+this.category+"] character","description")},W.prototype.toFailure=function(h){const u="("+this.terms.map(m=>m.toFailure(h)).join(" or ")+")";return new At(this,u,"description")},X.prototype.toFailure=function(h){const u="("+this.factors.map(m=>m.toFailure(h)).join(" ")+")";return new At(this,u,"description")},ie.prototype.toFailure=function(h){const s="("+this.expr.toFailure(h)+this.operator+")";return new At(this,s,"description")},q.prototype.toString=e("toString"),z.toString=function(){return"any"},G.toString=function(){return"end"},M.prototype.toString=function(){return JSON.stringify(this.obj)},S.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},V.prototype.toString=function(){return"$"+this.index},ze.prototype.toString=function(){return"#("+this.expr.toString()+")"},W.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(h=>h.toString()).join(" | ")+")"},X.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(h=>h.toString()).join(" ")+")"},ie.prototype.toString=function(){return this.expr+this.operator},ye.prototype.toString=function(){return"~"+this.expr},be.prototype.toString=function(){return"&"+this.expr},ne.prototype.toString=function(){if(this.args.length>0){const h=this.args.map(s=>s.toString());return this.ruleName+"<"+h.join(",")+">"}else return this.ruleName},De.prototype.toString=function(){return"\\p{"+this.category+"}"};class Kn extends q{constructor(s){super(),this.obj=s}_getString(s){const u=s.currentApplication().args[this.obj.index];return t(u instanceof M,"expected a Terminal expression"),u.obj}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:u}=s,m=u.pos,C=this._getString(s);return u.matchString(C,!0)?(s.pushBinding(new Ne(C.length),m),!0):(s.processFailure(m,this),!1)}getArity(){return 1}substituteParams(s){return new Kn(this.obj.substituteParams(s))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(s){return new At(this,this.obj.toFailure(s)+" (case-insensitive)","description")}_isNullable(s,u){return this.obj._isNullable(s,u)}}var Qo=Object.freeze({__proto__:null,CaseInsensitiveTerminal:Kn,PExpr:q,any:z,end:G,Terminal:M,Range:S,Param:V,Alt:W,Extend:re,Splice:ge,Seq:X,Iter:ie,Star:de,Plus:ke,Opt:Ve,Not:ye,Lookahead:be,Lex:ze,Apply:ne,UnicodeChar:De});let Ga;Gn(h=>{Ga=h.rules.applySyntactic.body});const da=new ne("spaces");class Ka{constructor(s,u,m){this.matcher=s,this.startExpr=u,this.grammar=s.grammar,this.input=s.getInput(),this.inputStream=new Je(this.input),this.memoTable=s._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],m!==void 0&&(this.positionToRecordFailures=m,this.recordedFailures=Object.create(null))}posToOffset(s){return s-this._posStack[this._posStack.length-1]}enterApplication(s,u){this._posStack.push(this.inputStream.pos),this._applicationStack.push(u),this.inLexifiedContextStack.push(!1),s.enter(u),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(s,u){const m=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),s.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),u&&this.pushBinding(u,m)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const s=this.currentApplication();return s?s.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(da),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(s){return s.allowsSkippingPrecedingSpace()&&s!==da?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(s,u){this._bindings.push(s),this._bindingOffsets.push(this.posToOffset(u))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(s){for(;this._bindings.length>s;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(s){let u=this.memoTable[s];return u||(u=this.memoTable[s]=new A),u}processFailure(s,u){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,s),this.recordedFailures&&s===this.positionToRecordFailures){const m=this.currentApplication();m&&(u=u.substituteParams(m.args)),this.recordFailure(u.toFailure(this.grammar),!1)}}recordFailure(s,u){const m=s.toKey();this.recordedFailures[m]?this.recordedFailures[m].isFluffy()&&!s.isFluffy()&&this.recordedFailures[m].clearFluffy():this.recordedFailures[m]=u?s.clone():s}recordFailures(s,u){Object.keys(s).forEach(m=>{this.recordFailure(s[m],u)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const s=Object.create(null);return Object.keys(this.recordedFailures).forEach(u=>{s[u]=this.recordedFailures[u].clone()}),s}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(s,u){const m=this.memoTable[s];if(m&&u instanceof ne){const C=m.memo[u.toMemoKey()];if(C&&C.traceEntry){const P=C.traceEntry.cloneWithExpr(u);return P.isMemoized=!0,P}}return null}getTraceEntry(s,u,m,C){if(u instanceof ne){const P=this.currentApplication(),j=P?P.args:[];u=u.substituteParams(j)}return this.getMemoizedTraceEntry(s,u)||new Te(this.input,s,this.inputStream.pos,u,m,C,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(s){return this.trace&&!s.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+s.rightmostFailureOffset===this.positionToRecordFailures?!!s.failuresAtRightmostPosition:!0}useMemoizedResult(s,u){this.trace&&this.trace.push(u.traceEntry);const m=this.inputStream.pos+u.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,m),this.recordedFailures&&this.positionToRecordFailures===m&&u.failuresAtRightmostPosition&&this.recordFailures(u.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,u.examinedLength+s),u.value?(this.inputStream.pos+=u.matchLength,this.pushBinding(u.value,s),!0):!1}eval(s){const{inputStream:u}=this,m=this._bindings.length,C=this.userData;let P;this.recordedFailures&&(P=this.recordedFailures,this.recordedFailures=Object.create(null));const j=u.pos,oe=this.maybeSkipSpacesBefore(s);let ae;this.trace&&(ae=this.trace,this.trace=[]);const Ie=s.eval(this);if(this.trace){const J=this._bindings.slice(m),Z=this.getTraceEntry(oe,s,Ie,J);Z.isImplicitSpaces=s===da,Z.isRootNode=s===this.startExpr,ae.push(Z),this.trace=ae}return Ie?this.recordedFailures&&u.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(J=>{this.recordedFailures[J].makeFluffy()}):(u.pos=j,this.truncateBindings(m),this.userData=C),this.recordedFailures&&this.recordFailures(P,!1),s===Ga&&this.skipSpaces(),Ie}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let s;this.recordedFailures&&(s=Object.keys(this.recordedFailures).map(m=>this.recordedFailures[m]));const u=this._bindings[0];return u&&(u.grammar=this.grammar),new w(this.matcher,this.input,this.startExpr,u,this._bindingOffsets[0],this.rightmostFailurePosition,s)}getTrace(){this.trace=[];const s=this.getMatchResult(),u=this.trace[this.trace.length-1];return u.result=s,u}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Pe{constructor(s){this.grammar=s,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(s){return this._input!==s&&this.replaceInputRange(0,this._input.length,s),this}replaceInputRange(s,u,m){const C=this._input,P=this._memoTable;if(s<0||s>C.length||u<0||u>C.length||s>u)throw new Error("Invalid indices: "+s+" and "+u);this._input=C.slice(0,s)+m+C.slice(u),this._input!==C&&P.length>0&&(this._isMemoTableStale=!0);const j=P.slice(u);P.length=s;for(let oe=0;oe<m.length;oe++)P.push(void 0);for(const oe of j)P.push(oe);for(let oe=0;oe<s;oe++){const ae=P[oe];ae&&ae.clearObsoleteEntries(oe,s)}return this}match(s,u={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:u.incremental,tracing:!1})}trace(s,u={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:u.incremental,tracing:!0})}_match(s,u={}){const m={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...u};if(!m.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw lt(this.grammar);const C=new Ka(this,s,m.positionToRecordFailures);return m.tracing?C.getTrace():C.getMatchResult()}_getStartExpr(s){const u=s||this.grammar.defaultStartRule;if(!u)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const m=this.grammar.parseApplication(u);return new X([m,G])}}const $t=[],Er=(h,s)=>Object.prototype.hasOwnProperty.call(h,s);class ha{constructor(s,u,m){this._node=s,this.source=u,this._baseInterval=m,s.isNonterminal()&&t(u===m),this._childWrappers=[]}_forgetMemoizedResultFor(s){delete this._node[this._semantics.attributeKeys[s]],this.children.forEach(u=>{u._forgetMemoizedResultFor(s)})}child(s){if(!(0<=s&&s<this._node.numChildren()))return;let u=this._childWrappers[s];if(!u){const m=this._node.childAt(s),C=this._node.childOffsets[s],P=this._baseInterval.subInterval(C,m.matchLength),j=m.isNonterminal()?P:this._baseInterval;u=this._childWrappers[s]=this._semantics.wrap(m,P,j)}return u}_children(){for(let s=0;s<this._node.numChildren();s++)this.child(s);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(s){const u=s||[],m=u.map(j=>j._node),C=new dn(m,[],-1,!1),P=this._semantics.wrap(C,null,null);return P._childWrappers=u,P}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class rn{constructor(s,u){const m=this;if(this.grammar=s,this.checkedActionDicts=!1,this.Wrapper=class extends(u?u.Wrapper:ha){constructor(C,P,j){super(C,P,j),m.checkActionDictsIfHaventAlready(),this._semantics=m}toString(){return"[semantics wrapper for "+m.grammar.name+"]"}},this.super=u,u){if(!(s.equals(this.super.grammar)||s._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+s.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const C in this.attributes)Object.defineProperty(this.attributeKeys,C,{value:vn(C)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let s;for(s in this.operations)this.operations[s].checkActionDict(this.grammar);for(s in this.attributes)this.attributes[s].checkActionDict(this.grammar)}toRecipe(s){function u(C){return C.super!==rn.BuiltInSemantics._getSemantics()}let m=`(function(g) {
`;if(u(this)){m+="  var semantics = "+this.super.toRecipe(!0)+"(g";const C=this.super.grammar;let P=this.grammar;for(;P!==C;)m+=".superGrammar",P=P.superGrammar;m+=`);
`,m+="  return g.extendSemantics(semantics)"}else m+="  return g.createSemantics()";return["Operation","Attribute"].forEach(C=>{const P=this[C.toLowerCase()+"s"];Object.keys(P).forEach(j=>{const{actionDict:oe,formals:ae,builtInDefault:Ie}=P[j];let J=j;ae.length>0&&(J+="("+ae.join(", ")+")");let Z;u(this)&&this.super[C.toLowerCase()+"s"][j]?Z="extend"+C:Z="add"+C,m+=`
    .`+Z+"("+JSON.stringify(J)+", {";const fe=[];Object.keys(oe).forEach(_e=>{if(oe[_e]!==Ie){let rt=oe[_e].toString().trim();rt=rt.replace(/^.*\(/,"function("),fe.push(`
      `+JSON.stringify(_e)+": "+rt)}}),m+=fe.join(",")+`
    })`})}),m+=`;
  })`,s||(m=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+m+`(grammar);
  return semantics;
});
`),m}addOperationOrAttribute(s,u,m){const C=s+"s",P=ri(u,s),{name:j}=P,{formals:oe}=P;this.assertNewName(j,s);const ae=_i(s,j,Z),Ie={_default:ae};Object.keys(m).forEach(fe=>{Ie[fe]=m[fe]});const J=s==="operation"?new Ae(j,oe,Ie,ae):new ht(j,Ie,ae);J.checkActionDict(this.grammar),this[C][j]=J;function Z(...fe){const _e=this._semantics[C][j];if(arguments.length!==_e.formals.length)throw new Error("Invalid number of arguments passed to "+j+" "+s+" (expected "+_e.formals.length+", got "+arguments.length+")");const rt=Object.create(null);for(const[oi,pa]of Object.entries(fe)){const hd=_e.formals[oi];rt[hd]=pa}const Ft=this.args;this.args=rt;const Xt=_e.execute(this._semantics,this);return this.args=Ft,Xt}s==="operation"?(this.Wrapper.prototype[j]=Z,this.Wrapper.prototype[j].toString=function(){return"["+j+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,j,{get:Z,configurable:!0}),Object.defineProperty(this.attributeKeys,j,{value:vn(j)}))}extendOperationOrAttribute(s,u,m){const C=s+"s";if(ri(u,"attribute"),!(this.super&&u in this.super[C]))throw new Error("Cannot extend "+s+" '"+u+"': did not inherit an "+s+" with that name");if(Er(this[C],u))throw new Error("Cannot extend "+s+" '"+u+"' again");const P=this[C][u].formals,j=this[C][u].actionDict,oe=Object.create(j);Object.keys(m).forEach(ae=>{oe[ae]=m[ae]}),this[C][u]=s==="operation"?new Ae(u,P,oe):new ht(u,oe),this[C][u].checkActionDict(this.grammar)}assertNewName(s,u){if(Er(ha.prototype,s))throw new Error("Cannot add "+u+" '"+s+"': that's a reserved name");if(s in this.operations)throw new Error("Cannot add "+u+" '"+s+"': an operation with that name already exists");if(s in this.attributes)throw new Error("Cannot add "+u+" '"+s+"': an attribute with that name already exists")}wrap(s,u,m){const C=m||u;return s instanceof this.Wrapper?s:new this.Wrapper(s,u,C)}}function ri(h,s){if(!rn.prototypeGrammar)return t(h.indexOf("(")===-1),{name:h,formals:[]};const u=rn.prototypeGrammar.match(h,s==="operation"?"OperationSignature":"AttributeSignature");if(u.failed())throw new Error(u.message);return rn.prototypeGrammarSemantics(u).parse()}function _i(h,s,u){return function(...m){const P=(this._semantics.operations[s]||this._semantics.attributes[s]).formals.map(j=>this.args[j]);if(!this.isIteration()&&m.length===1)return u.apply(m[0],P);throw jt(this.ctorName,s,h,$t)}}rn.createSemantics=function(h,s){const u=new rn(h,s!==void 0?s:rn.BuiltInSemantics._getSemantics()),m=function(P){if(!(P instanceof w))throw new TypeError("Semantics expected a MatchResult, but got "+D(P));if(P.failed())throw new TypeError("cannot apply Semantics to "+P.toString());const j=P._cst;if(j.grammar!==h)throw new Error("Cannot use a MatchResult from grammar '"+j.grammar.name+"' with a semantics for '"+h.name+"'");const oe=new Je(P.input);return u.wrap(j,oe.interval(P._cstOffset,P.input.length))};return m.addOperation=function(C,P){return u.addOperationOrAttribute("operation",C,P),m},m.extendOperation=function(C,P){return u.extendOperationOrAttribute("operation",C,P),m},m.addAttribute=function(C,P){return u.addOperationOrAttribute("attribute",C,P),m},m.extendAttribute=function(C,P){return u.extendOperationOrAttribute("attribute",C,P),m},m._getActionDict=function(C){const P=u.operations[C]||u.attributes[C];if(!P)throw new Error('"'+C+'" is not a valid operation or attribute name in this semantics for "'+h.name+'"');return P.actionDict},m._remove=function(C){let P;return C in u.operations?(P=u.operations[C],delete u.operations[C]):C in u.attributes&&(P=u.attributes[C],delete u.attributes[C]),delete u.Wrapper.prototype[C],P},m.getOperationNames=function(){return Object.keys(u.operations)},m.getAttributeNames=function(){return Object.keys(u.attributes)},m.getGrammar=function(){return u.grammar},m.toRecipe=function(C){return u.toRecipe(C)},m.toString=u.toString.bind(u),m._getSemantics=function(){return u},m};class Ae{constructor(s,u,m,C){this.name=s,this.formals=u,this.actionDict=m,this.builtInDefault=C}checkActionDict(s){s._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(s,u){try{const{ctorName:m}=u._node;let C=this.actionDict[m];return C?($t.push([this,m]),C.apply(u,u._children())):u.isNonterminal()&&(C=this.actionDict._nonterminal,C)?($t.push([this,"_nonterminal",m]),C.apply(u,u._children())):($t.push([this,"default action",m]),this.actionDict._default.apply(u,u._children()))}finally{$t.pop()}}}Ae.prototype.typeName="operation";class ht extends Ae{constructor(s,u,m){super(s,[],u,m)}execute(s,u){const m=u._node,C=s.attributeKeys[this.name];return Er(m,C)||(m[C]=Ae.prototype.execute.call(this,s,u)),m[C]}}ht.prototype.typeName="attribute";const Nt=["_iter","_terminal","_nonterminal","_default"];function pt(h){return Object.keys(h.rules).sort().map(s=>h.rules[s])}const an=h=>h.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Yn,Kt;class It{constructor(s,u,m,C){if(this.name=s,this.superGrammar=u,this.rules=m,C){if(!(C in m))throw new Error("Invalid start rule: '"+C+"' is not a rule in grammar '"+s+"'");this.defaultStartRule=C}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Pe(this)}isBuiltIn(){return this===It.ProtoBuiltInRules||this===It.BuiltInRules}equals(s){if(this===s)return!0;if(s==null||this.name!==s.name||this.defaultStartRule!==s.defaultStartRule||!(this.superGrammar===s.superGrammar||this.superGrammar.equals(s.superGrammar)))return!1;const u=pt(this),m=pt(s);return u.length===m.length&&u.every((C,P)=>C.description===m[P].description&&C.formals.join(",")===m[P].formals.join(",")&&C.body.toString()===m[P].body.toString())}match(s,u){const m=this.matcher();return m.replaceInputRange(0,0,s),m.match(u)}trace(s,u){const m=this.matcher();return m.replaceInputRange(0,0,s),m.trace(u)}createSemantics(){return rn.createSemantics(this)}extendSemantics(s){return rn.createSemantics(this,s._getSemantics())}_checkTopDownActionDict(s,u,m){const C=[];for(const P in m){const j=m[P];if(!Nt.includes(P)&&!(P in this.rules)){C.push(`'${P}' is not a valid semantic action for '${this.name}'`);continue}if(typeof j!="function"){C.push(`'${P}' must be a function in an action dictionary for '${this.name}'`);continue}const ae=j.length,Ie=this._topDownActionArity(P);if(ae!==Ie){let J;P==="_iter"||P==="_nonterminal"?J=`it should use a rest parameter, e.g. \`${P}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:J=`expected ${Ie}, got ${ae}`,C.push(`Semantic action '${P}' has the wrong arity: ${J}`)}}if(C.length>0){const P=C.map(oe=>"- "+oe),j=new Error([`Found errors in the action dictionary of the '${u}' ${s}:`,...P].join(`
`));throw j.problems=C,j}}_topDownActionArity(s){return Nt.includes(s)?0:this.rules[s].body.getArity()}_inheritsFrom(s){let u=this.superGrammar;for(;u;){if(u.equals(s,!0))return!0;u=u.superGrammar}return!1}toRecipe(s=void 0){const u={};this.source&&(u.source=this.source.contents);let m=null;this.defaultStartRule&&(m=this.defaultStartRule);const C={};Object.keys(this.rules).forEach(oe=>{const ae=this.rules[oe],{body:Ie}=ae,J=!this.superGrammar||!this.superGrammar.rules[oe];let Z;J?Z="define":Z=Ie instanceof re?"extend":"override";const fe={};if(ae.source&&this.source){const Ft=ae.source.relativeTo(this.source);fe.sourceInterval=[Ft.startIdx,Ft.endIdx]}const _e=J?ae.description:null,rt=Ie.outputRecipe(ae.formals,this.source);C[oe]=[Z,fe,_e,ae.formals,rt]});let P="null";s?P=s:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(P=this.superGrammar.toRecipe());const j=[...["grammar",u,this.name].map(JSON.stringify),P,...[m,C].map(JSON.stringify)];return an(`[${j.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const s=new y;s.append("{");let u=!0;for(const m in this.rules){const{body:C}=this.rules[m];u?u=!1:s.append(","),s.append(`
`),s.append("  "),this.addSemanticActionTemplate(m,C,s)}return s.append(`
}`),s.contents()}addSemanticActionTemplate(s,u,m){m.append(s),m.append(": function(");const C=this._topDownActionArity(s);m.append(o("_",C).join(", ")),m.append(`) {
`),m.append("  }")}parseApplication(s){let u;if(s.indexOf("<")===-1)u=new ne(s);else{const C=Yn.match(s,"Base_application");u=Kt(C,{})}if(!(u.ruleName in this.rules))throw He(u.ruleName,this.name);const{formals:m}=this.rules[u.ruleName];if(m.length!==u.args.length){const{source:C}=this.rules[u.ruleName];throw ee(u.ruleName,m.length,u.args.length,C)}return u}_setUpMatchState(s){this._matchStateInitializer&&this._matchStateInitializer(s)}}It.ProtoBuiltInRules=new It("ProtoBuiltInRules",void 0,{any:{body:z,formals:[],description:"any character",primitive:!0},end:{body:G,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new Kn(new V(0)),formals:["str"],primitive:!0},lower:{body:new De("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new De("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new De("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new de(new ne("space")),formals:[]},space:{body:new S("\0"," "),formals:[],description:"a space"}}),It.initApplicationParser=function(h,s){Yn=h,Kt=s};class on{constructor(s){this.name=s}sourceInterval(s,u){return this.source.subInterval(s,u-s)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?It.ProtoBuiltInRules:It.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(s,u){const m=this.ensureSuperGrammar().rules[s];if(!m)throw N(s,this.superGrammar.name,u);return m}installOverriddenOrExtendedRule(s,u,m,C){const P=c(u);if(P.length>0)throw te(s,P,C);const j=this.ensureSuperGrammar().rules[s],oe=j.formals,ae=oe?oe.length:0;if(u.length!==ae)throw ee(s,ae,u.length,C);return this.install(s,u,m,j.description,C)}install(s,u,m,C,P,j=!1){return this.rules[s]={body:m.introduceParams(u),formals:u,description:C,source:P,primitive:j},this}withSuperGrammar(s){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=s,this.rules=Object.create(s.rules),s.isBuiltIn()||(this.defaultStartRule=s.defaultStartRule),this}withDefaultStartRule(s){return this.defaultStartRule=s,this}withSource(s){return this.source=new Je(s).interval(0,s.length),this}build(){const s=new It(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);s._matchStateInitializer=s.superGrammar._matchStateInitializer,s.supportsIncrementalParsing=s.superGrammar.supportsIncrementalParsing;const u=[];let m=!1;return Object.keys(s.rules).forEach(C=>{const{body:P}=s.rules[C];try{P.assertChoicesHaveUniformArity(C)}catch(j){u.push(j)}try{P.assertAllApplicationsAreValid(C,s)}catch(j){u.push(j),m=!0}}),m||Object.keys(s.rules).forEach(C=>{const{body:P}=s.rules[C];try{P.assertIteratedExprsAreNotNullable(s,[])}catch(j){u.push(j)}}),u.length>0&&Lt(u),this.source&&(s.source=this.source),s}define(s,u,m,C,P,j){if(this.ensureSuperGrammar(),this.superGrammar.rules[s])throw F(s,this.name,this.superGrammar.name,P);if(this.rules[s])throw F(s,this.name,this.name,P);const oe=c(u);if(oe.length>0)throw te(s,oe,P);return this.install(s,u,m,C,P,j)}override(s,u,m,C,P){return this.ensureSuperGrammarRuleForOverriding(s,P),this.installOverriddenOrExtendedRule(s,u,m,P),this}extend(s,u,m,C,P){if(!this.ensureSuperGrammar().rules[s])throw H(s,this.superGrammar.name,P);const oe=new re(this.superGrammar,s,m);return oe.source=m.source,this.installOverriddenOrExtendedRule(s,u,oe,P),this}}class sn{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(s){return new on(s)}grammar(s,u,m,C,P){const j=new on(u);return m&&j.withSuperGrammar(m instanceof It?m:this.fromRecipe(m)),C&&j.withDefaultStartRule(C),s&&s.source&&j.withSource(s.source),this.currentDecl=j,Object.keys(P).forEach(oe=>{this.currentRuleName=oe;const ae=P[oe],Ie=ae[0],J=ae[1],Z=ae[2],fe=ae[3],_e=this.fromRecipe(ae[4]);let rt;j.source&&J&&J.sourceInterval&&(rt=j.source.subInterval(J.sourceInterval[0],J.sourceInterval[1]-J.sourceInterval[0])),j[Ie](oe,fe,_e,Z,rt)}),this.currentRuleName=this.currentDecl=null,j.build()}terminal(s){return new M(s)}range(s,u){return new S(s,u)}param(s){return new V(s)}alt(...s){let u=[];for(let m of s)m instanceof q||(m=this.fromRecipe(m)),m instanceof W?u=u.concat(m.terms):u.push(m);return u.length===1?u[0]:new W(u)}seq(...s){let u=[];for(let m of s)m instanceof q||(m=this.fromRecipe(m)),m instanceof X?u=u.concat(m.factors):u.push(m);return u.length===1?u[0]:new X(u)}star(s){return s instanceof q||(s=this.fromRecipe(s)),new de(s)}plus(s){return s instanceof q||(s=this.fromRecipe(s)),new ke(s)}opt(s){return s instanceof q||(s=this.fromRecipe(s)),new Ve(s)}not(s){return s instanceof q||(s=this.fromRecipe(s)),new ye(s)}lookahead(s){return s instanceof q||(s=this.fromRecipe(s)),new be(s)}lex(s){return s instanceof q||(s=this.fromRecipe(s)),new ze(s)}app(s,u){return u&&u.length>0&&(u=u.map(function(m){return m instanceof q?m:this.fromRecipe(m)},this)),new ne(s,u)}splice(s,u){return new ge(this.currentDecl.superGrammar,this.currentRuleName,s.map(m=>this.fromRecipe(m)),u.map(m=>this.fromRecipe(m)))}fromRecipe(s){const u=s[0]==="grammar"?s.slice(1):s.slice(2),m=this[s[0]](...u),C=s[1];return C&&C.sourceInterval&&this.currentDecl&&m.withSource(this.currentDecl.sourceInterval(...C.sourceInterval)),m}}function yt(h){return typeof h=="function"?h.call(new sn):(typeof h=="string"&&(h=JSON.parse(h)),new sn().fromRecipe(h))}var Yt=yt(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);It.BuiltInRules=Yt,he(It.BuiltInRules);var ii=yt(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const Dt=Object.create(q.prototype);function ai(h,s){for(const u in h)if(u===s)return!0;return!1}function Ar(h,s,u){const m=new sn;let C,P,j,oe=!1;return(u||ii).createSemantics().addOperation("visit",{Grammars(J){return J.children.map(Z=>Z.visit())},Grammar(J,Z,fe,_e,rt){const Ft=J.visit();C=m.newGrammar(Ft),Z.child(0)&&Z.child(0).visit(),_e.children.map(oi=>oi.visit());const Xt=C.build();if(Xt.source=this.source.trimmed(),ai(s,Ft))throw Me(Xt);return s[Ft]=Xt,Xt},SuperGrammar(J,Z){const fe=Z.visit();if(fe==="null")C.withSuperGrammar(null);else{if(!s||!ai(s,fe))throw ve(fe,s,Z.source);C.withSuperGrammar(s[fe])}},Rule_define(J,Z,fe,_e,rt){P=J.visit(),j=Z.children.map(pa=>pa.visit())[0]||[],!C.defaultStartRule&&C.ensureSuperGrammar()!==It.ProtoBuiltInRules&&C.withDefaultStartRule(P);const Ft=rt.visit(),Xt=fe.children.map(pa=>pa.visit())[0],oi=this.source.trimmed();return C.define(P,j,Ft,Xt,oi)},Rule_override(J,Z,fe,_e){P=J.visit(),j=Z.children.map(Xt=>Xt.visit())[0]||[];const rt=this.source.trimmed();C.ensureSuperGrammarRuleForOverriding(P,rt),oe=!0;const Ft=_e.visit();return oe=!1,C.override(P,j,Ft,null,rt)},Rule_extend(J,Z,fe,_e){P=J.visit(),j=Z.children.map(Xt=>Xt.visit())[0]||[];const rt=_e.visit(),Ft=this.source.trimmed();return C.extend(P,j,rt,null,Ft)},RuleBody(J,Z){return m.alt(...Z.visit()).withSource(this.source)},OverrideRuleBody(J,Z){const fe=Z.visit(),_e=fe.indexOf(Dt);if(_e>=0){const rt=fe.slice(0,_e),Ft=fe.slice(_e+1);return Ft.forEach(Xt=>{if(Xt===Dt)throw $e(Xt)}),new ge(C.superGrammar,P,rt,Ft).withSource(this.source)}else return m.alt(...fe).withSource(this.source)},Formals(J,Z,fe){return Z.visit()},Params(J,Z,fe){return Z.visit()},Alt(J){return m.alt(...J.visit()).withSource(this.source)},TopLevelTerm_inline(J,Z){const fe=P+"_"+Z.visit(),_e=J.visit(),rt=this.source.trimmed(),Ft=!(C.superGrammar&&C.superGrammar.rules[fe]);oe&&!Ft?C.override(fe,j,_e,null,rt):C.define(fe,j,_e,null,rt);const Xt=j.map(oi=>m.app(oi));return m.app(fe,Xt).withSource(_e.source)},OverrideTopLevelTerm_superSplice(J){return Dt},Seq(J){return m.seq(...J.children.map(Z=>Z.visit())).withSource(this.source)},Iter_star(J,Z){return m.star(J.visit()).withSource(this.source)},Iter_plus(J,Z){return m.plus(J.visit()).withSource(this.source)},Iter_opt(J,Z){return m.opt(J.visit()).withSource(this.source)},Pred_not(J,Z){return m.not(Z.visit()).withSource(this.source)},Pred_lookahead(J,Z){return m.lookahead(Z.visit()).withSource(this.source)},Lex_lex(J,Z){return m.lex(Z.visit()).withSource(this.source)},Base_application(J,Z){const fe=Z.children.map(_e=>_e.visit())[0]||[];return m.app(J.visit(),fe).withSource(this.source)},Base_range(J,Z,fe){return m.range(J.visit(),fe.visit()).withSource(this.source)},Base_terminal(J){return m.terminal(J.visit()).withSource(this.source)},Base_paren(J,Z,fe){return Z.visit()},ruleDescr(J,Z,fe){return Z.visit()},ruleDescrText(J){return this.sourceString.trim()},caseName(J,Z,fe,_e,rt){return fe.visit()},name(J,Z){return this.sourceString},nameFirst(J){},nameRest(J){},terminal(J,Z,fe){return Z.children.map(_e=>_e.visit()).join("")},oneCharTerminal(J,Z,fe){return Z.visit()},escapeChar(J){try{return R(this.sourceString)}catch(Z){throw Z instanceof RangeError&&Z.message.startsWith("Invalid code point ")?Ze(J):Z}},NonemptyListOf(J,Z,fe){return[J.visit()].concat(fe.children.map(_e=>_e.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(h).visit()}var Xn=yt(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Oi(It.BuiltInRules),Vr(Xn);function Oi(h){const s={empty(){return this.iteration()},nonEmpty(u,m,C){return this.iteration([u].concat(C.children))}};rn.BuiltInSemantics=rn.createSemantics(h,null).addOperation("asIteration",{emptyListOf:s.empty,nonemptyListOf:s.nonEmpty,EmptyListOf:s.empty,NonemptyListOf:s.nonEmpty})}function Vr(h){rn.prototypeGrammarSemantics=h.createSemantics().addOperation("parse",{AttributeSignature(s){return{name:s.parse(),formals:[]}},OperationSignature(s,u){return{name:s.parse(),formals:u.children.map(m=>m.parse())[0]||[]}},Formals(s,u,m){return u.asIteration().children.map(C=>C.parse())},name(s,u){return this.sourceString}}),rn.prototypeGrammar=h}function rd(h){let s=0;const u=[0],m=()=>u[u.length-1],C={},P=/( *).*(?:$|\r?\n|\r)/g;let j;for(;(j=P.exec(h))!=null;){const[oe,ae]=j;if(oe.length===0)break;const Ie=ae.length,J=m(),Z=s+Ie;if(Ie>J)u.push(Ie),C[Z]=1;else if(Ie<J){const fe=u.length;for(;m()!==Ie;)u.pop();C[Z]=-1*(fe-u.length)}s+=oe.length}return u.length>1&&(C[s]=1-u.length),C}const Ol="an indented block",Tl="a dedent",Ll=1114112;class id extends Je{constructor(s){super(s.input),this.state=s}_indentationAt(s){return this.state.userData[s]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Ll):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Ll):super.nextCodePoint()}}class Dl extends q{constructor(s=!0){super(),this.isIndent=s}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:u}=s,m=s.userData;s.doNotMemoize=!0;const C=u.pos,P=this.isIndent?1:-1;return(m[C]||0)*P>0?(s.userData=Object.create(m),s.userData[C]-=P,s.pushBinding(new Ne(0),C),!0):(s.processFailure(C,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(s,u){}_isNullable(s,u){return!1}assertChoicesHaveUniformArity(s){}assertIteratedExprsAreNotNullable(s){}introduceParams(s){return this}substituteParams(s){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(s){const u=this.isIndent?Ol:Tl;return new At(this,u,"description")}}const ad=new ne("indent"),od=new ne("dedent"),sd=new ge(Yt,"any",[ad,od],[]),Pl=new sn().newGrammar("IndentationSensitive").withSuperGrammar(Yt).define("indent",[],new Dl(!0),Ol,void 0,!0).define("dedent",[],new Dl(!1),Tl,void 0,!0).extend("any",[],sd,"any character",void 0).build();Object.assign(Pl,{_matchStateInitializer(h){h.userData=rd(h.input),h.inputStream=new id(h)},supportsIncrementalParsing:!1});const ld="17.1.0";It.initApplicationParser(ii,Ar);const cd=h=>!!h.constructor&&typeof h.constructor.isBuffer=="function"&&h.constructor.isBuffer(h);function ud(h,s){const u=ii.match(h,"Grammars");if(u.failed())throw O(u);return Ar(u,s)}function dd(h,s){const u=Rl(h,s),m=Object.keys(u);if(m.length===0)throw new Error("Missing grammar definition");if(m.length>1){const P=u[m[1]].source;throw new Error(Cr(P.sourceString,P.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return u[m[0]]}function Rl(h,s){const u=Object.create(s||{});if(typeof h!="string")if(cd(h))h=h.toString();else throw new TypeError("Expected string as first argument, got "+D(h));return ud(h,u),u}return Zn.ExperimentalIndentationSensitive=Pl,Zn._buildGrammar=Ar,Zn.grammar=dd,Zn.grammars=Rl,Zn.makeRecipe=yt,Zn.ohmGrammar=ii,Zn.pexprs=Qo,Zn.version=ld,Zn}var ys,Cc;function Gu(){if(Cc)return ys;Cc=1;const{makeRecipe:e}=zv();return ys=e(["grammar",{source:`PEP508 {
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
    LooseExtras       = "[" (ListOf<identifier, ","> "]"?)?
    LooseQuotedMarker = ";" looseAnything
    LooseVersionSpec  = "(" (LooseVersionMany ")"?)? -- parenthesized
                      | LooseVersionMany -- direct
    LooseVersionMany  = ListOf<LooseVersionOne, ","> ","?
    LooseVersionOne   = (looseVersionCmp looseVersion?)?
    looseVersionCmp   = ("<" | "=" | "!" | ">" | "~")+
    looseVersion      = (alnum | "-" | "_" | "." | "*" | "+" | "!" )+
    looseAnything     = (~("\\n" | "#") any)* // Any non-comment line content
}`},"PEP508",null,"File",{File:["define",{sourceInterval:[148,173]},null,[],["app",{sourceInterval:[155,173]},"ListOf",[["app",{sourceInterval:[162,166]},"Line",[]],["terminal",{sourceInterval:[168,172]},`
`]]]],Line:["define",{sourceInterval:[178,198]},null,[],["seq",{sourceInterval:[185,198]},["opt",{sourceInterval:[185,189]},["app",{sourceInterval:[185,188]},"Req",[]]],["opt",{sourceInterval:[190,198]},["app",{sourceInterval:[190,197]},"comment",[]]]]],Req:["define",{sourceInterval:[203,260]},null,[],["alt",{sourceInterval:[209,260]},["app",{sourceInterval:[209,215]},"UrlReq",[]],["app",{sourceInterval:[218,225]},"NameReq",[]],["app",{sourceInterval:[228,243]},"RequirementsReq",[]],["app",{sourceInterval:[246,260]},"ConstraintsReq",[]]]],NameReq:["define",{sourceInterval:[266,314]},null,[],["seq",{sourceInterval:[276,314]},["app",{sourceInterval:[276,280]},"Name",[]],["opt",{sourceInterval:[281,288]},["app",{sourceInterval:[281,287]},"Extras",[]]],["app",{sourceInterval:[289,300]},"VersionSpec",[]],["opt",{sourceInterval:[301,314]},["app",{sourceInterval:[301,313]},"QuotedMarker",[]]]]],UrlReq:["define",{sourceInterval:[319,371]},null,[],["seq",{sourceInterval:[329,371]},["app",{sourceInterval:[329,333]},"Name",[]],["opt",{sourceInterval:[334,341]},["app",{sourceInterval:[334,340]},"Extras",[]]],["app",{sourceInterval:[342,349]},"UrlSpec",[]],["opt",{sourceInterval:[350,371]},["seq",{sourceInterval:[351,369]},["app",{sourceInterval:[351,356]},"space",[]],["app",{sourceInterval:[357,369]},"QuotedMarker",[]]]]]],Extras:["define",{sourceInterval:[376,417]},null,[],["seq",{sourceInterval:[386,417]},["terminal",{sourceInterval:[386,389]},"["],["app",{sourceInterval:[390,413]},"ListOf",[["app",{sourceInterval:[397,407]},"identifier",[]],["terminal",{sourceInterval:[409,412]},","]]],["terminal",{sourceInterval:[414,417]},"]"]]],Name:["define",{sourceInterval:[422,442]},null,[],["app",{sourceInterval:[432,442]},"identifier",[]]],identifier:["define",{sourceInterval:[447,483]},null,[],["seq",{sourceInterval:[463,483]},["app",{sourceInterval:[463,468]},"alnum",[]],["star",{sourceInterval:[469,483]},["app",{sourceInterval:[469,482]},"identifierEnd",[]]]]],identifierEnd_single:["define",{sourceInterval:[504,519]},null,[],["app",{sourceInterval:[504,509]},"alnum",[]]],identifierEnd_multi:["define",{sourceInterval:[540,576]},null,[],["seq",{sourceInterval:[540,567]},["star",{sourceInterval:[541,560]},["alt",{sourceInterval:[542,557]},["terminal",{sourceInterval:[542,545]},"-"],["terminal",{sourceInterval:[548,551]},"_"],["terminal",{sourceInterval:[554,557]},"."]]],["app",{sourceInterval:[561,566]},"alnum",[]]]],identifierEnd:["define",{sourceInterval:[488,576]},null,[],["alt",{sourceInterval:[504,576]},["app",{sourceInterval:[504,509]},"identifierEnd_single",[]],["app",{sourceInterval:[540,567]},"identifierEnd_multi",[]]]],RequirementsReq:["define",{sourceInterval:[675,706]},null,[],["seq",{sourceInterval:[693,706]},["terminal",{sourceInterval:[693,697]},"-r"],["app",{sourceInterval:[698,706]},"filePath",[]]]],ConstraintsReq:["define",{sourceInterval:[711,742]},null,[],["seq",{sourceInterval:[729,742]},["terminal",{sourceInterval:[729,733]},"-c"],["app",{sourceInterval:[734,742]},"filePath",[]]]],filePath:["define",{sourceInterval:[747,785]},null,[],["plus",{sourceInterval:[765,785]},["seq",{sourceInterval:[766,783]},["not",{sourceInterval:[766,779]},["alt",{sourceInterval:[768,778]},["terminal",{sourceInterval:[768,772]},`
`],["terminal",{sourceInterval:[775,778]},"#"]]],["app",{sourceInterval:[780,783]},"any",[]]]]],UrlSpec:["define",{sourceInterval:[791,822]},null,[],["seq",{sourceInterval:[806,822]},["terminal",{sourceInterval:[806,809]},"@"],["app",{sourceInterval:[810,822]},"uriReference",[]]]],uriReference:["define",{sourceInterval:[827,859]},null,[],["alt",{sourceInterval:[842,859]},["app",{sourceInterval:[842,845]},"uri",[]],["app",{sourceInterval:[848,859]},"relativeRef",[]]]],uri:["define",{sourceInterval:[864,929]},null,[],["seq",{sourceInterval:[879,929]},["app",{sourceInterval:[879,885]},"scheme",[]],["terminal",{sourceInterval:[886,889]},":"],["opt",{sourceInterval:[890,899]},["app",{sourceInterval:[890,898]},"hierPart",[]]],["opt",{sourceInterval:[900,913]},["seq",{sourceInterval:[901,910]},["terminal",{sourceInterval:[901,904]},"?"],["app",{sourceInterval:[905,910]},"query",[]]]],["opt",{sourceInterval:[914,929]},["seq",{sourceInterval:[915,927]},["terminal",{sourceInterval:[915,918]},"#"],["app",{sourceInterval:[919,927]},"fragment",[]]]]]],hierPart_abempty:["define",{sourceInterval:[949,988]},null,[],["seq",{sourceInterval:[949,977]},["terminal",{sourceInterval:[950,954]},"//"],["app",{sourceInterval:[955,964]},"authority",[]],["app",{sourceInterval:[965,976]},"pathAbempty",[]]]],hierPart_absolute:["define",{sourceInterval:[1008,1032]},null,[],["app",{sourceInterval:[1008,1020]},"pathAbsolute",[]]],hierPart_rootless:["define",{sourceInterval:[1052,1076]},null,[],["app",{sourceInterval:[1052,1064]},"pathRootless",[]]],hierPart:["define",{sourceInterval:[934,1076]},null,[],["alt",{sourceInterval:[949,1076]},["app",{sourceInterval:[949,977]},"hierPart_abempty",[]],["app",{sourceInterval:[1008,1020]},"hierPart_absolute",[]],["app",{sourceInterval:[1052,1064]},"hierPart_rootless",[]]]],absoluteUri:["define",{sourceInterval:[1081,1130]},null,[],["seq",{sourceInterval:[1096,1130]},["app",{sourceInterval:[1096,1102]},"scheme",[]],["terminal",{sourceInterval:[1103,1106]},":"],["opt",{sourceInterval:[1107,1116]},["app",{sourceInterval:[1107,1115]},"hierPart",[]]],["opt",{sourceInterval:[1117,1130]},["seq",{sourceInterval:[1118,1127]},["terminal",{sourceInterval:[1118,1121]},"?"],["app",{sourceInterval:[1122,1127]},"query",[]]]]]],relativeRef:["define",{sourceInterval:[1135,1194]},null,[],["seq",{sourceInterval:[1150,1194]},["opt",{sourceInterval:[1150,1163]},["app",{sourceInterval:[1150,1162]},"relativePart",[]]],["opt",{sourceInterval:[1164,1177]},["seq",{sourceInterval:[1165,1174]},["terminal",{sourceInterval:[1165,1168]},"?"],["app",{sourceInterval:[1169,1174]},"query",[]]]],["opt",{sourceInterval:[1178,1194]},["seq",{sourceInterval:[1179,1191]},["terminal",{sourceInterval:[1179,1182]},"#"],["app",{sourceInterval:[1183,1191]},"fragment",[]]]]]],relativePart_abempty:["define",{sourceInterval:[1214,1251]},null,[],["seq",{sourceInterval:[1214,1240]},["terminal",{sourceInterval:[1214,1218]},"//"],["app",{sourceInterval:[1219,1228]},"authority",[]],["app",{sourceInterval:[1229,1240]},"pathAbempty",[]]]],relativePart_absolute:["define",{sourceInterval:[1271,1295]},null,[],["app",{sourceInterval:[1271,1283]},"pathAbsolute",[]]],relativePart_noscheme:["define",{sourceInterval:[1315,1339]},null,[],["app",{sourceInterval:[1315,1327]},"pathNoscheme",[]]],relativePart:["define",{sourceInterval:[1199,1339]},null,[],["alt",{sourceInterval:[1214,1339]},["app",{sourceInterval:[1214,1240]},"relativePart_abempty",[]],["app",{sourceInterval:[1271,1283]},"relativePart_absolute",[]],["app",{sourceInterval:[1315,1327]},"relativePart_noscheme",[]]]],scheme:["define",{sourceInterval:[1344,1392]},null,[],["seq",{sourceInterval:[1359,1392]},["app",{sourceInterval:[1359,1365]},"letter",[]],["star",{sourceInterval:[1366,1392]},["alt",{sourceInterval:[1367,1390]},["app",{sourceInterval:[1367,1372]},"alnum",[]],["terminal",{sourceInterval:[1375,1378]},"+"],["terminal",{sourceInterval:[1381,1384]},"-"],["terminal",{sourceInterval:[1387,1390]},"."]]]]],authority:["define",{sourceInterval:[1397,1446]},null,[],["seq",{sourceInterval:[1412,1446]},["opt",{sourceInterval:[1412,1428]},["seq",{sourceInterval:[1413,1425]},["app",{sourceInterval:[1413,1421]},"userinfo",[]],["terminal",{sourceInterval:[1422,1425]},"@"]]],["app",{sourceInterval:[1429,1433]},"host",[]],["opt",{sourceInterval:[1434,1446]},["seq",{sourceInterval:[1435,1443]},["terminal",{sourceInterval:[1435,1438]},":"],["app",{sourceInterval:[1439,1443]},"port",[]]]]]],userinfo:["define",{sourceInterval:[1451,1510]},null,[],["star",{sourceInterval:[1466,1510]},["alt",{sourceInterval:[1467,1508]},["app",{sourceInterval:[1467,1477]},"unreserved",[]],["app",{sourceInterval:[1480,1490]},"pctEncoded",[]],["app",{sourceInterval:[1493,1502]},"subDelims",[]],["terminal",{sourceInterval:[1505,1508]},":"]]]],host:["define",{sourceInterval:[1515,1563]},null,[],["alt",{sourceInterval:[1530,1563]},["app",{sourceInterval:[1530,1539]},"ipLiteral",[]],["app",{sourceInterval:[1542,1553]},"ipv4Address",[]],["app",{sourceInterval:[1556,1563]},"regName",[]]]],port:["define",{sourceInterval:[1568,1589]},null,[],["star",{sourceInterval:[1583,1589]},["app",{sourceInterval:[1583,1588]},"digit",[]]]],ipLiteral:["define",{sourceInterval:[1594,1642]},null,[],["seq",{sourceInterval:[1609,1642]},["terminal",{sourceInterval:[1609,1612]},"["],["alt",{sourceInterval:[1614,1637]},["app",{sourceInterval:[1614,1625]},"ipv6Address",[]],["app",{sourceInterval:[1628,1637]},"ipvFuture",[]]],["terminal",{sourceInterval:[1639,1642]},"]"]]],ipvFuture:["define",{sourceInterval:[1647,1709]},null,[],["seq",{sourceInterval:[1662,1709]},["terminal",{sourceInterval:[1662,1665]},"v"],["plus",{sourceInterval:[1666,1673]},["app",{sourceInterval:[1666,1672]},"hexdig",[]]],["terminal",{sourceInterval:[1674,1677]},"."],["plus",{sourceInterval:[1678,1709]},["alt",{sourceInterval:[1679,1707]},["app",{sourceInterval:[1679,1689]},"unreserved",[]],["app",{sourceInterval:[1692,1701]},"subDelims",[]],["terminal",{sourceInterval:[1704,1707]},":"]]]]],ipv6Address:["define",{sourceInterval:[1714,1750]},null,[],["plus",{sourceInterval:[1729,1750]},["alt",{sourceInterval:[1730,1748]},["app",{sourceInterval:[1730,1736]},"hexdig",[]],["terminal",{sourceInterval:[1739,1742]},":"],["terminal",{sourceInterval:[1745,1748]},"."]]]],ipv4Address:["define",{sourceInterval:[1825,1887]},null,[],["seq",{sourceInterval:[1840,1887]},["app",{sourceInterval:[1840,1848]},"decOctet",[]],["terminal",{sourceInterval:[1849,1852]},"."],["app",{sourceInterval:[1853,1861]},"decOctet",[]],["terminal",{sourceInterval:[1862,1865]},"."],["app",{sourceInterval:[1866,1874]},"decOctet",[]],["terminal",{sourceInterval:[1875,1878]},"."],["app",{sourceInterval:[1879,1887]},"decOctet",[]]]],nz:["define",{sourceInterval:[1892,1917]},null,[],["seq",{sourceInterval:[1907,1917]},["not",{sourceInterval:[1907,1911]},["terminal",{sourceInterval:[1908,1911]},"0"]],["app",{sourceInterval:[1912,1917]},"digit",[]]]],decOctet_zeroToNine:["define",{sourceInterval:[1937,1956]},null,[],["app",{sourceInterval:[1937,1942]},"digit",[]]],decOctet_tenToNinetyNine:["define",{sourceInterval:[1976,2003]},null,[],["seq",{sourceInterval:[1976,1984]},["app",{sourceInterval:[1976,1978]},"nz",[]],["app",{sourceInterval:[1979,1984]},"digit",[]]]],decOctet_oneHundredToOneNinetyNine:["define",{sourceInterval:[2023,2067]},null,[],["seq",{sourceInterval:[2023,2038]},["terminal",{sourceInterval:[2023,2026]},"1"],["app",{sourceInterval:[2027,2032]},"digit",[]],["app",{sourceInterval:[2033,2038]},"digit",[]]]],decOctet_twoHundredToTwoFortyNine:["define",{sourceInterval:[2087,2154]},null,[],["seq",{sourceInterval:[2087,2126]},["terminal",{sourceInterval:[2087,2090]},"2"],["alt",{sourceInterval:[2092,2119]},["terminal",{sourceInterval:[2092,2095]},"0"],["terminal",{sourceInterval:[2098,2101]},"1"],["terminal",{sourceInterval:[2104,2107]},"2"],["terminal",{sourceInterval:[2110,2113]},"3"],["terminal",{sourceInterval:[2116,2119]},"4"]],["app",{sourceInterval:[2121,2126]},"digit",[]]]],decOctet_twoFiftyToTwoFiftyFive:["define",{sourceInterval:[2174,2240]},null,[],["seq",{sourceInterval:[2174,2214]},["terminal",{sourceInterval:[2174,2178]},"25"],["alt",{sourceInterval:[2180,2213]},["terminal",{sourceInterval:[2180,2183]},"0"],["terminal",{sourceInterval:[2186,2189]},"1"],["terminal",{sourceInterval:[2192,2195]},"2"],["terminal",{sourceInterval:[2198,2201]},"3"],["terminal",{sourceInterval:[2204,2207]},"4"],["terminal",{sourceInterval:[2210,2213]},"5"]]]],decOctet:["define",{sourceInterval:[1922,2240]},null,[],["alt",{sourceInterval:[1937,2240]},["app",{sourceInterval:[1937,1942]},"decOctet_zeroToNine",[]],["app",{sourceInterval:[1976,1984]},"decOctet_tenToNinetyNine",[]],["app",{sourceInterval:[2023,2038]},"decOctet_oneHundredToOneNinetyNine",[]],["app",{sourceInterval:[2087,2126]},"decOctet_twoHundredToTwoFortyNine",[]],["app",{sourceInterval:[2174,2214]},"decOctet_twoFiftyToTwoFiftyFive",[]]]],regName:["define",{sourceInterval:[2245,2298]},null,[],["star",{sourceInterval:[2260,2298]},["alt",{sourceInterval:[2261,2296]},["app",{sourceInterval:[2261,2271]},"unreserved",[]],["app",{sourceInterval:[2274,2284]},"pctEncoded",[]],["app",{sourceInterval:[2287,2296]},"subDelims",[]]]]],path:["define",{sourceInterval:[2303,2523]},null,[],["alt",{sourceInterval:[2318,2523]},["app",{sourceInterval:[2318,2329]},"pathAbempty",[]],["app",{sourceInterval:[2380,2392]},"pathAbsolute",[]],["app",{sourceInterval:[2444,2456]},"pathNoscheme",[]],["app",{sourceInterval:[2511,2523]},"pathRootless",[]]]],pathAbempty:["define",{sourceInterval:[2553,2582]},null,[],["star",{sourceInterval:[2568,2582]},["seq",{sourceInterval:[2569,2580]},["terminal",{sourceInterval:[2569,2572]},"/"],["app",{sourceInterval:[2573,2580]},"segment",[]]]]],pathAbsolute:["define",{sourceInterval:[2587,2634]},null,[],["seq",{sourceInterval:[2602,2634]},["terminal",{sourceInterval:[2602,2605]},"/"],["opt",{sourceInterval:[2606,2634]},["seq",{sourceInterval:[2607,2631]},["app",{sourceInterval:[2607,2616]},"segmentNz",[]],["star",{sourceInterval:[2617,2631]},["seq",{sourceInterval:[2618,2629]},["terminal",{sourceInterval:[2618,2621]},"/"],["app",{sourceInterval:[2622,2629]},"segment",[]]]]]]]],pathNoscheme:["define",{sourceInterval:[2639,2680]},null,[],["seq",{sourceInterval:[2654,2680]},["app",{sourceInterval:[2654,2665]},"segmentNzNc",[]],["star",{sourceInterval:[2666,2680]},["seq",{sourceInterval:[2667,2678]},["terminal",{sourceInterval:[2667,2670]},"/"],["app",{sourceInterval:[2671,2678]},"segment",[]]]]]],pathRootless:["define",{sourceInterval:[2685,2724]},null,[],["seq",{sourceInterval:[2700,2724]},["app",{sourceInterval:[2700,2709]},"segmentNz",[]],["star",{sourceInterval:[2710,2724]},["seq",{sourceInterval:[2711,2722]},["terminal",{sourceInterval:[2711,2714]},"/"],["app",{sourceInterval:[2715,2722]},"segment",[]]]]]],segment:["define",{sourceInterval:[2729,2750]},null,[],["star",{sourceInterval:[2744,2750]},["app",{sourceInterval:[2744,2749]},"pchar",[]]]],segmentNz:["define",{sourceInterval:[2755,2776]},null,[],["plus",{sourceInterval:[2770,2776]},["app",{sourceInterval:[2770,2775]},"pchar",[]]]],segmentNzNc:["define",{sourceInterval:[2781,2840]},null,[],["plus",{sourceInterval:[2796,2840]},["alt",{sourceInterval:[2797,2838]},["app",{sourceInterval:[2797,2807]},"unreserved",[]],["app",{sourceInterval:[2810,2820]},"pctEncoded",[]],["app",{sourceInterval:[2823,2832]},"subDelims",[]],["terminal",{sourceInterval:[2835,2838]},"@"]]]],pchar:["define",{sourceInterval:[2894,2956]},null,[],["alt",{sourceInterval:[2909,2956]},["app",{sourceInterval:[2909,2919]},"unreserved",[]],["app",{sourceInterval:[2922,2932]},"pctEncoded",[]],["app",{sourceInterval:[2935,2944]},"subDelims",[]],["terminal",{sourceInterval:[2947,2950]},":"],["terminal",{sourceInterval:[2953,2956]},"@"]]],query:["define",{sourceInterval:[2961,2996]},null,[],["star",{sourceInterval:[2976,2996]},["alt",{sourceInterval:[2977,2994]},["app",{sourceInterval:[2977,2982]},"pchar",[]],["terminal",{sourceInterval:[2985,2988]},"/"],["terminal",{sourceInterval:[2991,2994]},"?"]]]],fragment:["define",{sourceInterval:[3001,3036]},null,[],["star",{sourceInterval:[3016,3036]},["alt",{sourceInterval:[3017,3034]},["app",{sourceInterval:[3017,3022]},"pchar",[]],["terminal",{sourceInterval:[3025,3028]},"/"],["terminal",{sourceInterval:[3031,3034]},"?"]]]],pctEncoded:["define",{sourceInterval:[3041,3066]},null,[],["seq",{sourceInterval:[3056,3066]},["terminal",{sourceInterval:[3056,3059]},"%"],["app",{sourceInterval:[3060,3066]},"hexdig",[]]]],unreserved:["define",{sourceInterval:[3071,3115]},null,[],["alt",{sourceInterval:[3086,3115]},["app",{sourceInterval:[3086,3091]},"alnum",[]],["terminal",{sourceInterval:[3094,3097]},"-"],["terminal",{sourceInterval:[3100,3103]},"."],["terminal",{sourceInterval:[3106,3109]},"_"],["terminal",{sourceInterval:[3112,3115]},"~"]]],reserved:["define",{sourceInterval:[3120,3156]},null,[],["alt",{sourceInterval:[3135,3156]},["app",{sourceInterval:[3135,3144]},"genDelims",[]],["app",{sourceInterval:[3147,3156]},"subDelims",[]]]],genDelims:["define",{sourceInterval:[3161,3216]},null,[],["alt",{sourceInterval:[3176,3216]},["terminal",{sourceInterval:[3176,3179]},":"],["terminal",{sourceInterval:[3182,3185]},"/"],["terminal",{sourceInterval:[3188,3191]},"?"],["terminal",{sourceInterval:[3194,3197]},"#"],["terminal",{sourceInterval:[3200,3203]},"("],["terminal",{sourceInterval:[3206,3210]},")?"],["terminal",{sourceInterval:[3213,3216]},"@"]]],subDelims:["define",{sourceInterval:[3221,3299]},null,[],["alt",{sourceInterval:[3236,3299]},["terminal",{sourceInterval:[3236,3239]},"!"],["terminal",{sourceInterval:[3242,3245]},"$"],["terminal",{sourceInterval:[3248,3251]},"&"],["terminal",{sourceInterval:[3254,3257]},"'"],["terminal",{sourceInterval:[3260,3263]},"("],["terminal",{sourceInterval:[3266,3269]},")"],["terminal",{sourceInterval:[3272,3275]},"*"],["terminal",{sourceInterval:[3278,3281]},"+"],["terminal",{sourceInterval:[3284,3287]},","],["terminal",{sourceInterval:[3290,3293]},";"],["terminal",{sourceInterval:[3296,3299]},"="]]],hexdig:["define",{sourceInterval:[3304,3396]},null,[],["alt",{sourceInterval:[3319,3396]},["app",{sourceInterval:[3319,3324]},"digit",[]],["terminal",{sourceInterval:[3327,3330]},"a"],["terminal",{sourceInterval:[3333,3336]},"A"],["terminal",{sourceInterval:[3339,3342]},"b"],["terminal",{sourceInterval:[3345,3348]},"B"],["terminal",{sourceInterval:[3351,3354]},"c"],["terminal",{sourceInterval:[3357,3360]},"C"],["terminal",{sourceInterval:[3363,3366]},"d"],["terminal",{sourceInterval:[3369,3372]},"D"],["terminal",{sourceInterval:[3375,3378]},"e"],["terminal",{sourceInterval:[3381,3384]},"E"],["terminal",{sourceInterval:[3387,3390]},"f"],["terminal",{sourceInterval:[3393,3396]},"F"]]],QuotedMarker:["define",{sourceInterval:[3429,3455]},null,[],["seq",{sourceInterval:[3445,3455]},["terminal",{sourceInterval:[3445,3448]},";"],["app",{sourceInterval:[3449,3455]},"Marker",[]]]],Marker:["define",{sourceInterval:[3460,3484]},null,[],["app",{sourceInterval:[3476,3484]},"MarkerOr",[]]],MarkerOr_node:["define",{sourceInterval:[3505,3537]},null,[],["seq",{sourceInterval:[3505,3529]},["app",{sourceInterval:[3505,3514]},"MarkerAnd",[]],["terminal",{sourceInterval:[3515,3519]},"or"],["app",{sourceInterval:[3520,3529]},"MarkerAnd",[]]]],MarkerOr_leaf:["define",{sourceInterval:[3558,3575]},null,[],["app",{sourceInterval:[3558,3567]},"MarkerAnd",[]]],MarkerOr:["define",{sourceInterval:[3489,3575]},null,[],["alt",{sourceInterval:[3505,3575]},["app",{sourceInterval:[3505,3529]},"MarkerOr_node",[]],["app",{sourceInterval:[3558,3567]},"MarkerOr_leaf",[]]]],MarkerAnd_node:["define",{sourceInterval:[3596,3631]},null,[],["seq",{sourceInterval:[3596,3623]},["app",{sourceInterval:[3596,3606]},"MarkerExpr",[]],["terminal",{sourceInterval:[3607,3612]},"and"],["app",{sourceInterval:[3613,3623]},"MarkerExpr",[]]]],MarkerAnd_leaf:["define",{sourceInterval:[3652,3670]},null,[],["app",{sourceInterval:[3652,3662]},"MarkerExpr",[]]],MarkerAnd:["define",{sourceInterval:[3580,3670]},null,[],["alt",{sourceInterval:[3596,3670]},["app",{sourceInterval:[3596,3623]},"MarkerAnd_node",[]],["app",{sourceInterval:[3652,3662]},"MarkerAnd_leaf",[]]]],MarkerExpr_leaf:["define",{sourceInterval:[3691,3727]},null,[],["seq",{sourceInterval:[3691,3719]},["app",{sourceInterval:[3691,3700]},"MarkerVar",[]],["app",{sourceInterval:[3701,3709]},"markerOp",[]],["app",{sourceInterval:[3710,3719]},"MarkerVar",[]]]],MarkerExpr_node:["define",{sourceInterval:[3748,3770]},null,[],["seq",{sourceInterval:[3748,3762]},["terminal",{sourceInterval:[3748,3751]},"("],["app",{sourceInterval:[3752,3758]},"Marker",[]],["terminal",{sourceInterval:[3759,3762]},")"]]],MarkerExpr:["define",{sourceInterval:[3675,3770]},null,[],["alt",{sourceInterval:[3691,3770]},["app",{sourceInterval:[3691,3719]},"MarkerExpr_leaf",[]],["app",{sourceInterval:[3748,3762]},"MarkerExpr_node",[]]]],MarkerVar:["define",{sourceInterval:[3775,3809]},null,[],["alt",{sourceInterval:[3791,3809]},["app",{sourceInterval:[3791,3797]},"envVar",[]],["app",{sourceInterval:[3800,3809]},"pythonStr",[]]]],markerOp_versionCmp:["define",{sourceInterval:[3830,3854]},null,[],["app",{sourceInterval:[3830,3840]},"versionCmp",[]]],markerOp_in:["define",{sourceInterval:[3875,3885]},null,[],["terminal",{sourceInterval:[3875,3879]},"in"]],markerOp_notIn:["define",{sourceInterval:[3906,3934]},null,[],["seq",{sourceInterval:[3906,3925]},["terminal",{sourceInterval:[3907,3912]},"not"],["plus",{sourceInterval:[3913,3919]},["app",{sourceInterval:[3913,3918]},"space",[]]],["terminal",{sourceInterval:[3920,3924]},"in"]]],markerOp:["define",{sourceInterval:[3814,3934]},null,[],["alt",{sourceInterval:[3830,3934]},["app",{sourceInterval:[3830,3840]},"markerOp_versionCmp",[]],["app",{sourceInterval:[3875,3879]},"markerOp_in",[]],["app",{sourceInterval:[3906,3925]},"markerOp_notIn",[]]]],pythonStr:["define",{sourceInterval:[3939,4039]},null,[],["alt",{sourceInterval:[3955,4039]},["seq",{sourceInterval:[3955,3986]},["terminal",{sourceInterval:[3955,3958]},"'"],["star",{sourceInterval:[3959,3982]},["alt",{sourceInterval:[3960,3980]},["app",{sourceInterval:[3960,3973]},"pythonStrChar",[]],["terminal",{sourceInterval:[3976,3980]},'"']]],["terminal",{sourceInterval:[3983,3986]},"'"]],["seq",{sourceInterval:[4007,4039]},["terminal",{sourceInterval:[4007,4011]},'"'],["star",{sourceInterval:[4012,4034]},["alt",{sourceInterval:[4013,4032]},["app",{sourceInterval:[4013,4026]},"pythonStrChar",[]],["terminal",{sourceInterval:[4029,4032]},"'"]]],["terminal",{sourceInterval:[4035,4039]},'"']]]],pythonStrChar:["define",{sourceInterval:[4044,4265]},null,[],["alt",{sourceInterval:[4060,4265]},["app",{sourceInterval:[4060,4065]},"space",[]],["app",{sourceInterval:[4068,4073]},"alnum",[]],["terminal",{sourceInterval:[4076,4079]},"("],["terminal",{sourceInterval:[4082,4085]},")"],["terminal",{sourceInterval:[4088,4091]},"."],["terminal",{sourceInterval:[4094,4097]},"{"],["terminal",{sourceInterval:[4100,4103]},"}"],["terminal",{sourceInterval:[4106,4109]},"-"],["terminal",{sourceInterval:[4112,4115]},"_"],["terminal",{sourceInterval:[4118,4121]},"*"],["terminal",{sourceInterval:[4124,4127]},"#"],["terminal",{sourceInterval:[4130,4133]},":"],["terminal",{sourceInterval:[4136,4139]},";"],["terminal",{sourceInterval:[4142,4145]},","],["terminal",{sourceInterval:[4148,4151]},"/"],["terminal",{sourceInterval:[4154,4157]},"?"],["terminal",{sourceInterval:[4178,4181]},"["],["terminal",{sourceInterval:[4184,4187]},"]"],["terminal",{sourceInterval:[4190,4193]},"!"],["terminal",{sourceInterval:[4196,4199]},"~"],["terminal",{sourceInterval:[4202,4205]},"`"],["terminal",{sourceInterval:[4208,4211]},"@"],["terminal",{sourceInterval:[4214,4217]},"$"],["terminal",{sourceInterval:[4220,4223]},"%"],["terminal",{sourceInterval:[4226,4229]},"^"],["terminal",{sourceInterval:[4232,4235]},"&"],["terminal",{sourceInterval:[4238,4241]},"="],["terminal",{sourceInterval:[4244,4247]},"+"],["terminal",{sourceInterval:[4250,4253]},"|"],["terminal",{sourceInterval:[4256,4259]},"<"],["terminal",{sourceInterval:[4262,4265]},">"]]],envVar:["define",{sourceInterval:[4270,4570]},null,[],["alt",{sourceInterval:[4286,4570]},["terminal",{sourceInterval:[4286,4302]},"python_version"],["terminal",{sourceInterval:[4305,4326]},"python_full_version"],["terminal",{sourceInterval:[4329,4338]},"os_name"],["terminal",{sourceInterval:[4341,4355]},"sys_platform"],["terminal",{sourceInterval:[4358,4376]},"platform_release"],["terminal",{sourceInterval:[4397,4414]},"platform_system"],["terminal",{sourceInterval:[4417,4435]},"platform_version"],["terminal",{sourceInterval:[4438,4456]},"platform_machine"],["terminal",{sourceInterval:[4459,4491]},"platform_python_implementation"],["terminal",{sourceInterval:[4512,4533]},"implementation_name"],["terminal",{sourceInterval:[4536,4560]},"implementation_version"],["terminal",{sourceInterval:[4563,4570]},"extra"]]],VersionSpec_parenthesized:["define",{sourceInterval:[4717,4753]},null,[],["seq",{sourceInterval:[4717,4736]},["terminal",{sourceInterval:[4717,4720]},"("],["app",{sourceInterval:[4721,4732]},"VersionMany",[]],["terminal",{sourceInterval:[4733,4736]},")"]]],VersionSpec_direct:["define",{sourceInterval:[4774,4795]},null,[],["app",{sourceInterval:[4774,4785]},"VersionMany",[]]],VersionSpec:["define",{sourceInterval:[4701,4795]},null,[],["alt",{sourceInterval:[4717,4795]},["app",{sourceInterval:[4717,4736]},"VersionSpec_parenthesized",[]],["app",{sourceInterval:[4774,4785]},"VersionSpec_direct",[]]]],VersionMany:["define",{sourceInterval:[4800,4839]},null,[],["app",{sourceInterval:[4816,4839]},"ListOf",[["app",{sourceInterval:[4823,4833]},"VersionOne",[]],["terminal",{sourceInterval:[4835,4838]},","]]]],VersionOne:["define",{sourceInterval:[4844,4878]},null,[],["seq",{sourceInterval:[4860,4878]},["app",{sourceInterval:[4860,4870]},"versionCmp",[]],["app",{sourceInterval:[4871,4878]},"version",[]]]],versionCmp:["define",{sourceInterval:[4883,4951]},null,[],["alt",{sourceInterval:[4899,4951]},["terminal",{sourceInterval:[4899,4903]},"<="],["terminal",{sourceInterval:[4906,4909]},"<"],["terminal",{sourceInterval:[4912,4916]},"!="],["terminal",{sourceInterval:[4919,4923]},"=="],["terminal",{sourceInterval:[4926,4930]},">="],["terminal",{sourceInterval:[4933,4936]},">"],["terminal",{sourceInterval:[4939,4943]},"~="],["terminal",{sourceInterval:[4946,4951]},"==="]]],version:["define",{sourceInterval:[4956,5017]},null,[],["plus",{sourceInterval:[4972,5017]},["alt",{sourceInterval:[4973,5014]},["app",{sourceInterval:[4973,4978]},"alnum",[]],["terminal",{sourceInterval:[4981,4984]},"-"],["terminal",{sourceInterval:[4987,4990]},"_"],["terminal",{sourceInterval:[4993,4996]},"."],["terminal",{sourceInterval:[4999,5002]},"*"],["terminal",{sourceInterval:[5005,5008]},"+"],["terminal",{sourceInterval:[5011,5014]},"!"]]]],comment:["define",{sourceInterval:[5023,5049]},null,[],["seq",{sourceInterval:[5033,5049]},["terminal",{sourceInterval:[5033,5036]},"#"],["star",{sourceInterval:[5037,5049]},["seq",{sourceInterval:[5038,5047]},["not",{sourceInterval:[5038,5043]},["terminal",{sourceInterval:[5039,5043]},`
`]],["app",{sourceInterval:[5044,5047]},"any",[]]]]]],space:["override",{sourceInterval:[5055,5074]},null,[],["alt",{sourceInterval:[5064,5074]},["terminal",{sourceInterval:[5064,5067]}," "],["terminal",{sourceInterval:[5070,5074]},"	"]]],LooseFile:["define",{sourceInterval:[5291,5334]},null,[],["app",{sourceInterval:[5311,5334]},"ListOf",[["app",{sourceInterval:[5318,5327]},"LooseLine",[]],["terminal",{sourceInterval:[5329,5333]},`
`]]]],LooseLine:["define",{sourceInterval:[5339,5376]},null,[],["seq",{sourceInterval:[5359,5376]},["app",{sourceInterval:[5359,5367]},"LooseReq",[]],["opt",{sourceInterval:[5368,5376]},["app",{sourceInterval:[5368,5375]},"comment",[]]]]],LooseReq:["define",{sourceInterval:[5381,5431]},null,[],["alt",{sourceInterval:[5401,5431]},["app",{sourceInterval:[5401,5416]},"LooseNonNameReq",[]],["app",{sourceInterval:[5419,5431]},"LooseNameReq",[]]]],LooseNameReq:["define",{sourceInterval:[5436,5509]},null,[],["seq",{sourceInterval:[5456,5509]},["app",{sourceInterval:[5456,5460]},"Name",[]],["opt",{sourceInterval:[5461,5473]},["app",{sourceInterval:[5461,5472]},"LooseExtras",[]]],["app",{sourceInterval:[5474,5490]},"LooseVersionSpec",[]],["opt",{sourceInterval:[5491,5509]},["app",{sourceInterval:[5491,5508]},"LooseQuotedMarker",[]]]]],LooseNonNameReq:["define",{sourceInterval:[5514,5569]},null,[],["seq",{sourceInterval:[5534,5569]},["not",{sourceInterval:[5535,5554]},["seq",{sourceInterval:[5537,5553]},["not",{sourceInterval:[5537,5548]},["seq",{sourceInterval:[5539,5547]},["app",{sourceInterval:[5539,5543]},"Name",[]],["terminal",{sourceInterval:[5544,5547]},"@"]]],["app",{sourceInterval:[5549,5553]},"Name",[]]]],["app",{sourceInterval:[5555,5568]},"looseAnything",[]]]],LooseExtras:["define",{sourceInterval:[5634,5689]},null,[],["seq",{sourceInterval:[5654,5689]},["terminal",{sourceInterval:[5654,5657]},"["],["opt",{sourceInterval:[5658,5689]},["seq",{sourceInterval:[5659,5687]},["app",{sourceInterval:[5659,5682]},"ListOf",[["app",{sourceInterval:[5666,5676]},"identifier",[]],["terminal",{sourceInterval:[5678,5681]},","]]],["opt",{sourceInterval:[5683,5687]},["terminal",{sourceInterval:[5683,5686]},"]"]]]]]],LooseQuotedMarker:["define",{sourceInterval:[5694,5731]},null,[],["seq",{sourceInterval:[5714,5731]},["terminal",{sourceInterval:[5714,5717]},";"],["app",{sourceInterval:[5718,5731]},"looseAnything",[]]]],LooseVersionSpec_parenthesized:["define",{sourceInterval:[5756,5801]},null,[],["seq",{sourceInterval:[5756,5784]},["terminal",{sourceInterval:[5756,5759]},"("],["opt",{sourceInterval:[5760,5784]},["seq",{sourceInterval:[5761,5782]},["app",{sourceInterval:[5761,5777]},"LooseVersionMany",[]],["opt",{sourceInterval:[5778,5782]},["terminal",{sourceInterval:[5778,5781]},")"]]]]]],LooseVersionSpec_direct:["define",{sourceInterval:[5826,5852]},null,[],["app",{sourceInterval:[5826,5842]},"LooseVersionMany",[]]],LooseVersionSpec:["define",{sourceInterval:[5736,5852]},null,[],["alt",{sourceInterval:[5756,5852]},["app",{sourceInterval:[5756,5784]},"LooseVersionSpec_parenthesized",[]],["app",{sourceInterval:[5826,5842]},"LooseVersionSpec_direct",[]]]],LooseVersionMany:["define",{sourceInterval:[5857,5910]},null,[],["seq",{sourceInterval:[5877,5910]},["app",{sourceInterval:[5877,5905]},"ListOf",[["app",{sourceInterval:[5884,5899]},"LooseVersionOne",[]],["terminal",{sourceInterval:[5901,5904]},","]]],["opt",{sourceInterval:[5906,5910]},["terminal",{sourceInterval:[5906,5909]},","]]]],LooseVersionOne:["define",{sourceInterval:[5915,5967]},null,[],["opt",{sourceInterval:[5935,5967]},["seq",{sourceInterval:[5936,5965]},["app",{sourceInterval:[5936,5951]},"looseVersionCmp",[]],["opt",{sourceInterval:[5952,5965]},["app",{sourceInterval:[5952,5964]},"looseVersion",[]]]]]],looseVersionCmp:["define",{sourceInterval:[5972,6022]},null,[],["plus",{sourceInterval:[5992,6022]},["alt",{sourceInterval:[5993,6020]},["terminal",{sourceInterval:[5993,5996]},"<"],["terminal",{sourceInterval:[5999,6002]},"="],["terminal",{sourceInterval:[6005,6008]},"!"],["terminal",{sourceInterval:[6011,6014]},">"],["terminal",{sourceInterval:[6017,6020]},"~"]]]],looseVersion:["define",{sourceInterval:[6027,6092]},null,[],["plus",{sourceInterval:[6047,6092]},["alt",{sourceInterval:[6048,6089]},["app",{sourceInterval:[6048,6053]},"alnum",[]],["terminal",{sourceInterval:[6056,6059]},"-"],["terminal",{sourceInterval:[6062,6065]},"_"],["terminal",{sourceInterval:[6068,6071]},"."],["terminal",{sourceInterval:[6074,6077]},"*"],["terminal",{sourceInterval:[6080,6083]},"+"],["terminal",{sourceInterval:[6086,6089]},"!"]]]],looseAnything:["define",{sourceInterval:[6097,6137]},null,[],["star",{sourceInterval:[6117,6137]},["seq",{sourceInterval:[6118,6135]},["not",{sourceInterval:[6118,6131]},["alt",{sourceInterval:[6120,6130]},["terminal",{sourceInterval:[6120,6124]},`
`],["terminal",{sourceInterval:[6127,6130]},"#"]]],["app",{sourceInterval:[6132,6135]},"any",[]]]]]}]),ys}var xa={},Sc;function Ec(){return Sc||(Sc=1,(function(e){var t=xa&&xa.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(e,"__esModule",{value:!0}),e.RequirementsSyntaxError=e.semantics=void 0;const n=t(Gu());e.semantics=n.default.createSemantics(),e.semantics.addOperation("extract",{File:i=>i.asIteration().children.map(a=>a.extract()).filter(Boolean),Line:(i,a)=>{var o;return((o=i.child(0))===null||o===void 0?void 0:o.extract())||null},NameReq:(i,a,o,c)=>{var p,g;return{type:"ProjectName",name:i.sourceString,versionSpec:o.extract(),extras:(p=a.child(0))===null||p===void 0?void 0:p.extract(),environmentMarkerTree:(g=c.child(0))===null||g===void 0?void 0:g.extract()}},UrlReq:(i,a,o,c,p)=>{var g,v;return{type:"ProjectURL",name:i.sourceString,url:o.extract(),extras:(g=a.child(0))===null||g===void 0?void 0:g.extract(),environmentMarkerTree:(v=p.child(0))===null||v===void 0?void 0:v.extract()}},Extras:(i,a,o)=>a.asIteration().children.map(c=>c.sourceString),RequirementsReq:(i,a)=>({type:"RequirementsFile",path:a.sourceString}),ConstraintsReq:(i,a)=>({type:"ConstraintsFile",path:a.sourceString}),UrlSpec:(i,a)=>a.sourceString,QuotedMarker:(i,a)=>a.extract(),MarkerOr_node:(i,a,o)=>({operator:"or",left:i.extract(),right:o.extract()}),MarkerAnd_node:(i,a,o)=>({operator:"and",left:i.extract(),right:o.extract()}),MarkerExpr_leaf:(i,a,o)=>({left:i.sourceString,operator:a.sourceString,right:o.sourceString}),MarkerExpr_node:(i,a,o)=>a.extract(),VersionSpec_parenthesized:(i,a,o)=>a.extract()||[],VersionMany:i=>{const a=i.asIteration().children;if(a.length!==0)return a.map(o=>o.extract())},VersionOne:(i,a)=>({operator:i.sourceString,version:a.sourceString})}),e.semantics.addOperation("extractLoosely",{LooseFile:i=>i.asIteration().children.map(a=>a.extractLoosely()).filter(Boolean),LooseLine:(i,a)=>{var o;return((o=i.child(0))===null||o===void 0?void 0:o.extractLoosely())||null},LooseNameReq:(i,a,o,c)=>({type:"ProjectName",name:i.sourceString}),LooseNonNameReq:i=>null});class r extends Error{}e.RequirementsSyntaxError=r})(xa)),xa}var li={},Ac;function Mv(){if(Ac)return li;Ac=1,Object.defineProperty(li,"__esModule",{value:!0}),li.VersionOperator=li.EnvironmentMarkerVariable=void 0;var e;(function(n){n.PythonVersion="python_version",n.PythonFullVersion="python_full_version",n.OsName="os_name",n.SysPlatform="sys_platform",n.PlatformRelease="platform_release",n.PlatformSystem="platform_system",n.PlatformVersion="platform_version",n.PlatformMachine="platform_machine",n.PlatformPythonImplementation="platform_python_implementation",n.ImplementationName="implementation_name",n.ImplementationVersion="implementation_version",n.Extra="extra"})(e||(li.EnvironmentMarkerVariable=e={}));var t;return(function(n){n.CompatibleRelease="~=",n.VersionMatching="==",n.VersionExclusion="!=",n.LessThanOrMatching="<=",n.GreaterThanOrMatching=">=",n.LessThan="<",n.GreaterThan=">",n.ArbitrarilyEqual="==="})(t||(li.VersionOperator=t={})),li}var $c;function Nv(){return $c||($c=1,(function(e){var t=Or&&Or.__createBinding||(Object.create?(function(x,y,I,R){R===void 0&&(R=I);var D=Object.getOwnPropertyDescriptor(y,I);(!D||("get"in D?!y.__esModule:D.writable||D.configurable))&&(D={enumerable:!0,get:function(){return y[I]}}),Object.defineProperty(x,R,D)}):(function(x,y,I,R){R===void 0&&(R=I),x[R]=y[I]})),n=Or&&Or.__exportStar||function(x,y){for(var I in x)I!=="default"&&!Object.prototype.hasOwnProperty.call(y,I)&&t(y,x,I)},r=Or&&Or.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(e,"__esModule",{value:!0}),e.parsePipRequirementsLineLoosely=e.parsePipRequirementsFileLoosely=e.parsePipRequirementsLine=e.parsePipRequirementsFile=e.RequirementsSyntaxError=void 0;const i=r(Gu()),a=Ec();var o=Ec();Object.defineProperty(e,"RequirementsSyntaxError",{enumerable:!0,get:function(){return o.RequirementsSyntaxError}}),n(Mv(),e);function c(x){const y=i.default.match(x,"File");if(y.failed())throw new a.RequirementsSyntaxError(`Failed to parse requirements file. ${y.shortMessage}`);return(0,a.semantics)(y).extract()}e.parsePipRequirementsFile=c;function p(x){const y=i.default.match(x,"Line");if(y.failed())throw new a.RequirementsSyntaxError(`Failed to parse requirements line. ${y.shortMessage}`);return(0,a.semantics)(y).extract()}e.parsePipRequirementsLine=p;function g(x){const y=i.default.match(x,"LooseFile");if(y.failed())throw new a.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${y.shortMessage}`);return(0,a.semantics)(y).extractLoosely()}e.parsePipRequirementsFileLoosely=g;function v(x){const y=i.default.match(x,"LooseLine");if(y.failed())throw new a.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${y.shortMessage}`);return(0,a.semantics)(y).extractLoosely()}e.parsePipRequirementsLineLoosely=v})(Or)),Or}var Fv=Nv();function qv(e){return new Worker("/assets/pyworker-BY5Ng6fm.js",{type:"module",name:e==null?void 0:e.name})}let Vv=0;class Bv{constructor(){this.pendingMessages=new Map}async init(t,n){this.workspace=t,this.vars=n??{},this.worker=new qv,this.worker.onmessage=r=>{this.handleWorkerMessage(r.data)},this.worker.onerror=r=>{console.error("Python Worker error:",r)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(t){if(t.id==="interrupt-buffer"){t.type==="success"?this.interruptBuffer=new Uint8Array(t.payload):this.interruptBuffer=void 0;return}if(t.type==="inputRequest"){const r=t.payload.prompt||"Input:",i=window.prompt(r);this.worker.postMessage({id:t.id,type:"inputResponse",payload:{value:i,cancelled:i===null}});return}if(t.type==="stdout"){this.stdoutCallback?this.stdoutCallback(t.payload):console.info(t.payload);return}if(t.type==="stderr"){this.stderrCallback?this.stderrCallback(t.payload):console.error(t.payload);return}if(t.type==="console"){const{level:r,message:i}=t.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",i,r);return}const n=this.pendingMessages.get(t.id);n&&(this.pendingMessages.delete(t.id),t.type==="success"?n.resolve(t.payload):t.type==="error"&&n.reject(new Error(t.payload.message)))}async sendMessage(t,n){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const r=`msg-${Vv++}`,i={id:r,type:t,payload:n};return new Promise((a,o)=>{this.pendingMessages.set(r,{resolve:a,reject:o}),this.worker.postMessage(i)})}setStdoutCallback(t){this.stdoutCallback=t}setStderrCallback(t){this.stderrCallback=t}async runFunction(t,n){const r=await this.sendMessage("runFunction",{name:t,args:n});return Ht(pr,this.workspace),r}async setGlobal(t,n){await this.sendMessage("setGlobal",{key:t,value:n})}async mountWorkspace(t="/workspace"){const n=await un.getWorkspace();await this.sendMessage("mountWorkspace",{handle:n.getHandle(),mountPoint:t})}async installDependencies(){var n;const t=await((n=this.workspace)==null?void 0:n.getResource("requirements.txt"));if(t){const r=(await t.getContents()).replaceAll("\r",""),i=Fv.parsePipRequirementsFile(r).filter(a=>"name"in a).map(a=>a.name);await this.loadPackages(i)}}async loadPackages(t){t.length>0&&await this.sendMessage("loadPackages",{packages:t})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),Ht(pr,this.workspace)}async execCode(t){const n=await this.sendMessage("execCode",{code:t});return Ht(pr,this.workspace),n}async execScript(t){const n=t.split(".")[0],r=t.includes(":")?t.split(":").reverse()[0]:void 0;return await this.execModule(n,r)}async execModule(t,n){const r=await this.sendMessage("execModule",{moduleName:t,entryName:n,vars:this.vars});return Ht(pr,this.workspace),r}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class Uv{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,or(Da,()=>{})}setupEventListeners(t){if(this.listenersAttached)return;this.listenersAttached=!0;const n=a=>{const o=a.detail;o&&Array.from(o.querySelectorAll("*")).filter(p=>p instanceof Jt).forEach(p=>{et.set(p),p.isEditor&&uo.set(p)})};t.addEventListener("tab-shown",n);const r=a=>{const o=a.detail;Array.from(o.querySelectorAll("*")).filter(p=>p instanceof Jt).forEach(p=>{et.get()==p&&et.set(null),uo.get()==p&&uo.set(null)})};t.addEventListener("tab-closed",r),Ru(Ss,a=>{const c=a.closest("wa-tab-panel").getAttribute("name");t.markDirty(c,a.isDirty())})}registerEditorInputHandler(t){this.editorInputHandlers.push(t),this.editorInputHandlers.sort((n,r)=>(r.ranking??0)-(n.ranking??0))}async handleInput(t){for(let n=0;n<this.editorInputHandlers.length;n++){const r=this.editorInputHandlers[n];if(r.canHandle(t))return await r.handle(t)}}getEditorArea(){return document.querySelector(`k-tabs#${Ri}`)}async loadEditor(t){if(!t||("widgetFactory"in t||(t=await this.handleInput(t)),!t||!("widgetFactory"in t)))return;const n=this.getEditorArea();if(!n){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(n),n.has(t.key)){n.activate(t.key);return}n.open({name:t.key,editorId:t.editorId,label:t.title,icon:t.icon,closable:!0,noOverflow:t.noOverflow,component:t.widgetFactory})}}const Qr=new Uv;mn.put("editorRegistry",Qr);const ao=".geospace/settings.json",Sl="events/settings/changed";class jv{async checkSettings(){this.appSettings||(this.appSettings=await Lr.getObject(ao),this.appSettings||(this.appSettings={},await Lr.persistObject(ao,this.appSettings)),Ht(Sl,this.appSettings))}async get(t){return await this.checkSettings(),this.appSettings[t]}async set(t,n){await this.checkSettings(),this.appSettings[t]=n,await Lr.persistObject(ao,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(t){this.appSettings=t,await Lr.persistObject(ao,this.appSettings)}}const Bn=new jv;mn.put("appSettings",Bn);Rt({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}]},handler:{execute:async({params:e})=>{const t=await un.getWorkspace();if(!t){bt("Please select a workspace!");return}let n=e==null?void 0:e.path;const r=e==null?void 0:e.contents,i=e==null?void 0:e.ask,a=e==null?void 0:e.extension;if((i||!n)&&(n=await Fa("Enter path to new file (directories will be created if not exist):",n||""),!n)||(a&&!n.endsWith(a)&&(n+=a),await t.getResource(n)&&!await ia(`File "${n}" already exists. Do you want to overwrite it?`)))return;const c=await t.getResource(n,{create:!0});c?(r&&await c.saveContents(r),wn("File created: "+n)):bt("Could not create file: "+n)}}});Rt({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async e=>{var a;let t,n=e.params&&e.params.path;if(n){const o=await un.getWorkspace();o&&(t=await o.getResource(n))}if(t||(t=On.get()),!t){bt("No resource to rename provided!");return}const r=t.getName(),i=((a=e.params)==null?void 0:a.newName)||await Fa(`Enter new name for "${r}":`,r);if(!(!i||i===r))try{await t.rename(i),wn(`Resource renamed to: ${i}`)}catch(o){bt(`Failed to rename ${r}: ${o.message}`)}}}});Rt({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async e=>{let t,n=e.params&&e.params.path;if(n){const a=await un.getWorkspace();a&&(t=await a.getResource(n))}if(t||(t=On.get()),!t){bt("No resource to delete provided!");return}n=t.getWorkspacePath();const r=e.params&&e.params.confirm;let i=!0;if((r===void 0||r===!0)&&(i=await ia(`Are you sure you want to delete ${n}?`)),i)try{await t.delete(),wn("Resource deleted: "+n)}catch(a){bt(`Resource ${n} could not be deleted: ${a.message||a}`)}}}});Rt({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async e=>{await window.showDirectoryPicker({mode:"readwrite"}).then(t=>un.connectWorkspace(t)).catch(t=>{bt(t.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});Rt({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async e=>{const t=await un.getWorkspace();t||bt("No workspace selected."),t.touch()}}});Rt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async e=>{const t=await un.getWorkspace();t||bt("No workspace selected.");const n=e.params.path,r=await(t==null?void 0:t.getResource(n));await Qr.loadEditor(r)}}});Rt({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async e=>{const t=e.params.script;if(!t)return;const n=new Bv,r=await un.getWorkspace();await n.init(r,e),await n.installDependencies(),await n.execScript(t)}}});Rt({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});Rt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async e=>{const t=et.get();t&&t.isDirty()&&t.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const e=et.get();return!e||!e.isDirty()}}});Rt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async e=>{document.documentElement.classList.toggle("wa-dark")||document.documentElement.classList.toggle("wa-light")}},contribution:{target:ua,icon:"circle-half-stroke",label:"Theme Switcher"}});Rt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async e=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:ua,icon:"expand",label:"Fullscreen"}});Rt({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:e=>{const t={title:"settings.json",data:{async getContents(){const n=await Bn.getAll();return JSON.stringify(n,void 0,2)},getName(){return t.key},saveContents(n){const r=JSON.parse(n);return Bn.setAll(r)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};t.widgetFactory=()=>_`
                <k-monaco-editor .input=${t}></k-monaco-editor>`,Qr.loadEditor(t).then()}},contribution:{target:ua,icon:"gear",label:"Open Settings"}});Rt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:e=>{const t={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};t.widgetFactory=()=>_`
                <k-extensions></k-extensions>`,Qr.loadEditor(t).then()}},contribution:{target:ua,icon:"puzzle-piece",label:"Open Extensions"}});Fe.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:e,type:t}})=>{e&&(t==="error"?bt(e):wn(e))}}});const Ku="events/chatservice/aiConfigChanged",oo="aiConfig",Wv={defaultProvider:"ollama",providers:[{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""},{name:"openai",model:"gpt-4.1-mini",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"},{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"},{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"},{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}]},Wa="chatservice.prompts",Hv={name:"openai-api",canHandle:e=>!0,completionApi:async e=>(await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({model:e.model,stream:e.stream,messages:e.messages,...e.chatConfig.parameters})})).json().then(n=>({role:"assistant",content:n.choices[0].message.content}))};class Gv{constructor(){this.fetchers=[],this.promptContributions=[],or(Sl,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.promptContributions=Ct.getContributions(Wa)}registerFetcher(t){this.fetchers.push(t)}async checkAIConfig(){this.aiConfig||(this.aiConfig=await Bn.get(oo),this.aiConfig||(await Bn.set(oo,Wv),this.aiConfig=await Bn.get(oo)),Ht(Ku,this.aiConfig))}async getDefaultProvider(){var n;await this.checkAIConfig();const t=await this.getProviders();if((n=this.aiConfig)!=null&&n.defaultProvider){const r=t.find(i=>{var a;return i.name===((a=this.aiConfig)==null?void 0:a.defaultProvider)});if(r)return r}return t[0]}async setDefaultProvider(t){return await this.checkAIConfig(),this.aiConfig.defaultProvider=t,await Bn.set(oo,this.aiConfig),this.getDefaultProvider()}async getProviders(){var t;return await this.checkAIConfig(),((t=this.aiConfig)==null?void 0:t.providers)||[]}createMessage(t){return{role:"user",content:t}}getPromptContribution(t){return this.promptContributions.find(n=>n.role===t)}async handleUserPrompt(t){const n=t.chatConfig||await this.getDefaultProvider(),r=t.chatContext,i=this.promptContributions.map(o=>{const c=t.callContext.createChild({userPrompt:r.history[r.history.length-1].content});if(o.canHandle instanceof Function&&!o.canHandle(c.getProxy()))return;const p=r.history.map(y=>{let I=y.role,R=y.content;return I!=="user"&&(I!==o.role?(I="user",R=`***Another Assistant '${y.role}' replied:***
${R}`):I="assistant"),{role:I,content:R}});let g=p[p.length-1],v=o.sysPrompt;typeof v=="function"&&(v=v()),p.unshift({role:"system",content:v});const x=async()=>{const y={model:n.model,stream:!1,messages:p,chatConfig:n};return(this.fetchers.find(R=>R.canHandle(n))||Hv).completionApi(y).then(R=>R)};return o.promptDecorator instanceof Function?o.promptDecorator(c.getProxy()).then(y=>{y&&(g.content=y)}).then(x).then(async y=>(y.role=o.role,o.messageDecorator&&(c.put("message",y),o.messageDecorator(c.getProxy())),y)):x()}),a=await Promise.all(i.filter(o=>!!o));r.history.push(...a)}}const ci=new Gv;mn.put("chatService",ci);var Kv=Object.defineProperty,Yv=Object.getOwnPropertyDescriptor,Ir=(e,t,n,r)=>{for(var i=r>1?void 0:r?Yv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Kv(t,n,i),i};let Hn=class extends Jt{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatContext=this.defaultChatContext,this.busy=!1,this.inputValue=""}onAIConfigChanged(){this.doBeforeUI()}onPartChanged(e){e&&"chatContext"in e?this.chatContext=e.chatContext:this.chatContext=this.defaultChatContext}doBeforeUI(){ci.getProviders().then(e=>{this.providers=e||[]}),ci.getDefaultProvider().then(e=>{this.defaultProvider=e})}updated(e){super.updated(e),(e.has("chatContext")||e.has("busy"))&&this.scrollToBottom()}scrollToBottom(){this.messagesContainer&&requestAnimationFrame(()=>{this.messagesContainer&&(this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight)})}onInput(e){const t=e.target;this.inputValue=t.value}onKeyDown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.sendMessage())}async sendMessage(){const e=this.inputValue.trim();!e||this.busy||(this.inputValue="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),await this.handlePrompt(e))}async runCommand(e,t){const n=t||Fe,r=e.trim().split(/\s+/);if(r.length===0)return;const i=r.shift(),a=n.getCommand(i);if(!a){bt("Command not found: "+i);return}const o={};r.forEach((p,g)=>{o[a.parameters[g].name]=p});const c=n.createExecutionContext(this,o);n.execute(i,c),this.requestUpdate()}async handlePrompt(e){if(e.startsWith("/")){await this.runCommand(e.substring(1),Fe);return}const t=ci.createMessage(e);this.chatContext.history.push(t),this.requestUpdate(),this.busy=!0;const n=et.get(),r=ar.createChild({activePart:n,activeEditor:n!=null&&n.isEditor?n:null});Qi.runAsync("Calling AI assistant",i=>ci.handleUserPrompt({chatContext:this.chatContext,callContext:r}).then(a=>{this.requestUpdate()})).catch(i=>{bt(`${i}`)}).finally(()=>{this.busy=!1,r.destroy()})}async onChangeDefaultProvider(e){this.defaultProvider=await ci.setDefaultProvider(e.currentTarget.value)}copyToClipboard(e){navigator.clipboard.writeText(e).then(()=>{}).catch(t=>{bt(`Failed to copy: ${t}`)})}formatTimestamp(e=new Date){return e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderMessage(e){var i;const t=e.role==="user",n=ci.getPromptContribution(e.role),r=(n==null?void 0:n.label)||e.role;return _`
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
                        ${yn((i=e.actions)==null?void 0:i.length,()=>{var a;return _`
                            ${(a=e.actions)==null?void 0:a.map(o=>_`
                                <wa-button
                                    appearance="plain"
                                    size="small"
                                    @click="${()=>o.action()}">
                                    <wa-icon name="${o.icon}" label="${o.label}"></wa-icon>
                                </wa-button>
                            `)}
                        `})}
                    </div>
                </div>
                <div class="message-content">
                    ${Dr(at.parse(e.content))}
                </div>
            </div>
        `}renderLoadingIndicator(){return _`
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
        `}render(){var e;return _`
            <div class="chat-container">
                ${yn(!this.defaultProvider,()=>_`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Select a provider from the menu below</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map(t=>this.renderMessage(t))}
                    ${yn(this.busy,()=>this.renderLoadingIndicator())}
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
                            ${(e=this.providers)==null?void 0:e.map(t=>{var n;return _`
                                <wa-dropdown-item 
                                    type="checkbox"
                                    value="${t.name}"
                                    ?checked="${t.name===((n=this.defaultProvider)==null?void 0:n.name)}"
                                    @click="${this.onChangeDefaultProvider}">
                                    ${t.name}
                                </wa-dropdown-item>
                            `})}
                        </wa-dropdown>
                    </div>
                </div>
            </div>
        `}};Hn.styles=cn`
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
    `;Ir([pe()],Hn.prototype,"chatContext",2);Ir([pe()],Hn.prototype,"providers",2);Ir([pe()],Hn.prototype,"defaultProvider",2);Ir([pe()],Hn.prototype,"busy",2);Ir([pe()],Hn.prototype,"inputValue",2);Ir([ce(".chat-messages")],Hn.prototype,"messagesContainer",2);Ir([ce("wa-textarea")],Hn.prototype,"textareaElement",2);Ir([Zs(Ku)],Hn.prototype,"onAIConfigChanged",1);Ir([Ko(et)],Hn.prototype,"onPartChanged",1);Hn=Ir([ue("k-aiassist")],Hn);const mo="events/extensionsregistry/extensionsConfigChanged",ka="extensions";class Xv{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,or(Sl,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(async()=>{var n;const t=((n=this.extensionsSettings)==null?void 0:n.filter(r=>this.isEnabled(r.id)).map(r=>this.load(r.id).catch(i=>{bt("Extension could not be loaded: "+i.message)})))||[];await Promise.all(t)})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Bn.get(ka),this.extensionsSettings||(await Bn.set(ka,[]),this.extensionsSettings=await Bn.get(ka)),Ht(mo,this.extensionsSettings))}registerExtension(t){this.extensions[t.id]=t}getExtensions(){return Object.values(this.extensions)}isEnabled(t){var n;return this.checkExtensionsConfig(),!!((n=this.extensionsSettings)!=null&&n.find(r=>r.id===t&&r.enabled))}isLoaded(t){return this.loadedExtensions.has(t)}enable(t,n=!1){this.isEnabled(t)||(qt.debug(`Loading extension: ${t}`),this.load(t).then(()=>{this.updateEnablement(t,!0,n)}).catch(r=>{qt.error(`Could not load extension: ${t}`)}))}async load(t,n=[]){if(this.loadedExtensions.has(t))return;const r=this.loadingPromises.get(t);if(r)return r;if(n.includes(t)){const o=[...n,t].join(" → ");throw new Error(`Circular dependency detected: ${o}`)}const i=this.extensions[t];if(!i)throw new Error("Extension not found: "+t);const a=(async()=>{try{if(i.dependencies&&i.dependencies.length>0){qt.debug(`Loading dependencies for ${t}: ${i.dependencies.join(", ")}`);const c=[...n,t];for(const p of i.dependencies)await this.load(p,c),this.isEnabled(p)||(await this.updateEnablementAsync(p,!0,!1),qt.debug(`Auto-enabled dependency: ${p}`))}const o=await Qi.runAsync("Loading extension: "+i.name,()=>{if(i.loader)return i.loader();if(i.url)return import(i.url)});this.loadedExtensions.add(t),(o==null?void 0:o.default)instanceof Function&&(o==null||o.default(ar.getProxy())),qt.debug(`Extension loaded: ${t}`)}catch(o){throw this.loadedExtensions.delete(t),o}finally{this.loadingPromises.delete(t)}})();return this.loadingPromises.set(t,a),a}disable(t,n=!1){this.isEnabled(t)&&this.updateEnablement(t,!1,n)}updateEnablement(t,n,r){this.checkExtensionsConfig().then(()=>{var a,o;const i=(a=this.extensionsSettings)==null?void 0:a.find(c=>c.id==t);i?i.enabled=n:(o=this.extensionsSettings)==null||o.push({id:t,enabled:n}),Bn.set(ka,this.extensionsSettings).then(()=>{if(r){const c=this.extensions[t];wn(n?c.name+" enabled.":c.name+" disabled  - Please restart to take effect")}Ht(mo,this.extensionsSettings)})})}async updateEnablementAsync(t,n,r){var a,o;await this.checkExtensionsConfig();const i=(a=this.extensionsSettings)==null?void 0:a.find(c=>c.id==t);if(i?i.enabled=n:(o=this.extensionsSettings)==null||o.push({id:t,enabled:n}),await Bn.set(ka,this.extensionsSettings),r){const c=this.extensions[t];wn(n?c.name+" enabled.":c.name+" disabled  - Please restart to take effect")}Ht(mo,this.extensionsSettings)}}qt.debug("ExtensionRegistry initializing...");const ft=new Xv;mn.put("extensionRegistry",ft);qt.debug("ExtensionRegistry initialized");const Fn=za("AppLoader");class Zv{constructor(){this.apps=new Map}registerApp(t){this.apps.has(t.id)&&Fn.warn(`App '${t.id}' is already registered. Overwriting.`),this.apps.set(t.id,t),Fn.info(`Registered app: ${t.name} (${t.id}) v${t.version}`)}async loadApp(t,n){let r;if(typeof t=="string"){const i=this.apps.get(t);if(!i)throw new Error(`App '${t}' not found. Make sure it's registered.`);r=i}else r=t,this.registerApp(r);Fn.info(`Loading app: ${r.name}...`),this.currentApp&&(Fn.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Fn.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(i=>{ft.disable(i)}))),r.contributions&&(Fn.info("Registering app contributions..."),r.contributions.ui&&(r.contributions.ui.forEach(i=>{const a=i.target;a&&Ct.registerContribution(a,i)}),Fn.info(`Registered ${r.contributions.ui.length} UI contributions`)),r.contributions.extensions&&(r.contributions.extensions.forEach(i=>{ft.registerExtension(i)}),Fn.info(`Registered ${r.contributions.extensions.length} app extensions`))),r.extensions&&(Fn.info(`Enabling ${r.extensions.length} extensions...`),r.extensions.forEach(i=>{ft.enable(i)})),r.initialize&&(Fn.info(`Initializing ${r.name}...`),await r.initialize()),this.currentApp=r,Fn.info(`App ${r.name} loaded successfully`),n&&this.renderApp(n)}renderApp(t){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");qi(this.currentApp.render(),t),Fn.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}}const Xo=new Zv;mn.put("appLoaderService",Xo);var Jv=Object.defineProperty,Qv=Object.getOwnPropertyDescriptor,El=(e,t,n,r)=>{for(var i=r>1?void 0:r?Qv(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Jv(t,n,i),i};let Pa=class extends Jt{constructor(){super(...arguments),this.filterText=""}doInitUI(){or(mo,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(e){ft.enable(e.id,!0),this.requestUpdate()}disable(e){ft.disable(e.id,!0),this.requestUpdate()}isExtensionRequired(e){const t=Xo.getCurrentApp();return!t||!t.extensions?!1:t.extensions.includes(e)}selectionChanged(e){const t=e.detail.selection||[];t.length>0&&t[0].model?this.selectedExtension=t[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return ft.getExtensions();const e=this.filterText.toLowerCase();return ft.getExtensions().filter(t=>{var n;return t.name.toLowerCase().includes(e)||(((n=t.description)==null?void 0:n.toLowerCase().includes(e))??!1)||t.id.toLowerCase().includes(e)})}getGroupedExtensions(){const e=this.getFilteredExtensions(),t=[],n=[];return e.forEach(r=>{ft.isEnabled(r.id)?t.push(r):n.push(r)}),t.sort((r,i)=>r.name.localeCompare(i.name)),n.sort((r,i)=>r.name.localeCompare(i.name)),{enabled:t,available:n}}handleFilterInput(e){this.filterText=e.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return _`
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
        `}render(){const e=this.getGroupedExtensions(),t=e.enabled.length>0||e.available.length>0;return _`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${t?_`
                        ${e.enabled.length>0?_`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    Installed (${e.enabled.length})
                                </span>
                                ${e.enabled.map(n=>_`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${n}>
                                        <span><k-icon name="${n.icon}"></k-icon> ${n.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                        ${e.available.length>0?_`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${e.available.length})
                                </span>
                                ${e.available.map(n=>_`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${n}>
                                        <span><k-icon name="${n.icon}"></k-icon> ${n.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                    `:_`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${yn(this.selectedExtension,n=>_`
                        <h1><k-icon name="${n.icon}"></k-icon> ${n.name}</h1>
                        <hr>
                        <div>
                            ${yn(ft.isEnabled(n.id),()=>_`
                                <wa-button 
                                    title="${this.isExtensionRequired(n.id)?"This extension is required by the current app and cannot be uninstalled":"Disable this extension"}" 
                                    @click="${()=>this.disable(n)}"
                                    variant="danger" 
                                    appearance="plain"
                                    ?disabled=${this.isExtensionRequired(n.id)}>
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>
                                ${yn(this.isExtensionRequired(n.id),()=>_`
                                    <div class="required-hint">
                                        <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                        <span>This extension is required by the current app and cannot be uninstalled</span>
                                    </div>
                                `)}
                            `,()=>_`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(n)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${yn(n.experimental,()=>_`
                            <div style="margin-top: 1em;">
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}

                        <p style="margin-top: 1em;">${n.description}</p>

                        ${yn(n.dependencies&&n.dependencies.length>0,()=>_`
                            <div style="margin-top: 1.5em;">
                                <h3 style="margin-bottom: 0.5em;">
                                    <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies
                                </h3>
                                <div class="dependencies-list">
                                    ${n.dependencies.map(r=>{const i=ft.getExtensions().find(o=>o.id===r),a=ft.isEnabled(r);return _`
                                            <div class="dependency-item">
                                                <wa-icon 
                                                    name="${a?"check-circle":"circle"}" 
                                                    style="color: ${a?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                </wa-icon>
                                                <k-icon name="${(i==null?void 0:i.icon)||"puzzle-piece"}"></k-icon>
                                                <span>${(i==null?void 0:i.name)||r}</span>
                                                ${a?"":_`
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
        `}};Pa.styles=cn`
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
    `;El([pe()],Pa.prototype,"selectedExtension",2);El([pe()],Pa.prototype,"filterText",2);Pa=El([ue("k-extensions")],Pa);var e0=Object.defineProperty,t0=Object.getOwnPropertyDescriptor,Zo=(e,t,n,r)=>{for(var i=r>1?void 0:r?t0(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&e0(t,n,i),i};let ea=class extends Jt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=pi()}connectedCallback(){super.connectedCallback(),Pd(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Rd()}log(e,t,n="info"){const r={timestamp:new Date,level:n,source:e,message:t};this.messages=[...this.messages,r],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(e=>e.level===this.filter)}formatTimestamp(e){return e.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(e){switch(e){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(e){switch(e){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const e=this.messages.filter(i=>i.level==="info").length,t=this.messages.filter(i=>i.level==="warning").length,n=this.messages.filter(i=>i.level==="error").length,r=this.messages.filter(i=>i.level==="debug").length;return _`
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
        `}render(){const e=this.getFilteredMessages();return _`
            <div class="log-terminal">
                <div class="messages" ${fi(this.containerRef)}>
                    ${e.length===0?_`<div class="empty-state">No log messages</div>`:e.map(t=>_`
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
        `}};ea.styles=cn`
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
    `;Zo([pe()],ea.prototype,"messages",2);Zo([pe()],ea.prototype,"autoScroll",2);Zo([pe()],ea.prototype,"filter",2);ea=Zo([ue("k-log-terminal")],ea);var n0=Object.defineProperty,r0=Object.getOwnPropertyDescriptor,sr=(e,t,n,r)=>{for(var i=r>1?void 0:r?r0(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&n0(t,n,i),i};let Rn=class extends Ba{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const e=jc.getKeyBindingsForCommand(this.cmd);return e.length>0?e[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),or(Ma,e=>{this.dropdown&&e.target===this.dropdown&&(this.dropdownContributions=e.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=Ct.getContributions(this.dropdown),this.requestUpdate())}renderContribution(e){var t;if("command"in e){const n=e,r=(t=n.disabled)==null?void 0:t.get();return _`
                <k-command 
                    cmd="${n.command}"
                    icon="${n.icon||""}"
                    ?disabled="${r}">
                    ${n.label}
                </k-command>
            `}if("html"in e){const r=e.html;return r instanceof Function?r():Dr(r)}return Mt}render(){const e=this.getKeybinding();return this.isInDropdown()?_`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${e?_`<span class="keybinding">${e}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?_`
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
                    
                    ${this.title?_`
                        <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:Mt}
                    
                    ${this.dropdownContributions.map(t=>this.renderContribution(t))}
                    
                    ${this.cmd?_`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                        </k-command>
                    `:Mt}
                </wa-dropdown>
            `:_`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${e?`${this.title} (${e})`:this.title}
                @click=${()=>this.handleClick()}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};Rn.styles=cn`
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
    `;sr([f()],Rn.prototype,"cmd",2);sr([f()],Rn.prototype,"title",2);sr([f()],Rn.prototype,"icon",2);sr([f({type:Boolean})],Rn.prototype,"disabled",2);sr([f()],Rn.prototype,"appearance",2);sr([f()],Rn.prototype,"size",2);sr([f({type:Object,attribute:!1})],Rn.prototype,"params",2);sr([f()],Rn.prototype,"dropdown",2);sr([f()],Rn.prototype,"placement",2);sr([pe()],Rn.prototype,"dropdownContributions",2);Rn=sr([ue("k-command")],Rn);var i0=Object.defineProperty,a0=Object.getOwnPropertyDescriptor,ti=(e,t,n,r)=>{for(var i=r>1?void 0:r?a0(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&i0(t,n,i),i};let xr=class extends Ba{constructor(){super(...arguments),this.title="",this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small"}handleClick(e){!this.disabled&&this.action&&(e.stopPropagation(),this.action(e))}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}render(){return this.isInDropdown()?_`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                </wa-dropdown-item>
            `:_`
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
        `}};xr.styles=cn`
        :host {
            display: inline-block;
        }
    `;ti([f({type:Object,attribute:!1})],xr.prototype,"action",2);ti([f()],xr.prototype,"title",2);ti([f()],xr.prototype,"icon",2);ti([f({type:Boolean})],xr.prototype,"disabled",2);ti([f()],xr.prototype,"appearance",2);ti([f()],xr.prototype,"variant",2);ti([f()],xr.prototype,"size",2);xr=ti([ue("k-action")],xr);var o0=Object.defineProperty,s0=Object.getOwnPropertyDescriptor,Al=(e,t,n,r)=>{for(var i=r>1?void 0:r?s0(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&o0(t,n,i),i};let Ra=class extends Ba{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return _`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Ra.styles=cn`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;Al([f()],Ra.prototype,"message",2);Al([f()],Ra.prototype,"icon",2);Ra=Al([ue("k-no-content")],Ra);ft.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>Pt(()=>import("./git-extension-CNL3HOUm.js"),__vite__mapDeps([0,1])),icon:"code-branch",experimental:!0});ft.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>Pt(()=>import("./pyterminal-extension-CcWkYQdQ.js"),__vite__mapDeps([2,1,3])),icon:"k python",experimental:!0});ft.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>Pt(()=>import("./k-linuxterminal-i3yW1k7_.js"),__vite__mapDeps([4,1,3])),icon:"terminal",experimental:!0});ft.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>Pt(()=>import("./webllmservice-C_a_lBkJ.js"),[]),icon:"robot"});ft.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>Pt(()=>import("./p12-splitter-C8U07nnh.js"),__vite__mapDeps([5,1])),icon:"certificate"});ft.registerExtension({id:"system.pythonpackagemanager",name:"Python Package Manager",description:"Manage Python packages for notebooks and other Python-based extensions",loader:()=>Pt(()=>import("./package-manager-extension-C7SxbZWu.js"),__vite__mapDeps([6,1])),icon:"box"});ft.registerExtension({id:"system.notebook",name:"Jupyter Notebook Editor",description:"View and execute Jupyter notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>Pt(()=>import("./notebook-extension-C1Ao7ZAo.js"),__vite__mapDeps([7,1,8,9,6])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});ft.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>Pt(()=>import("./command-palette-extension-DKN_lZKX.js"),__vite__mapDeps([10,1])),icon:"terminal"});ft.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>Pt(()=>import("./download-extension-wvX00mne.js"),__vite__mapDeps([11,1])),icon:"download"});ft.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>Pt(()=>import("./unzip-extension-LDKm1TFn.js"),__vite__mapDeps([12,1])),icon:"box-archive"});ft.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>Pt(()=>import("./md-editor-extension-BgfWCJiB.js"),__vite__mapDeps([13,1])),icon:"book"});ft.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>Pt(()=>import("./monaco-editor-extension-CcNIdci5.js"),__vite__mapDeps([14,8,1,9,6])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});ft.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>Pt(()=>import("./memory-usage-extension-Bp9bv38Y.js"),__vite__mapDeps([15,1])),icon:"microchip"});ft.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>Pt(()=>import("./webdav-extension-Coh74Gjj.js"),__vite__mapDeps([16,1])),icon:"cloud"});const l0=`You are a specialized commands execution plan generator. Your sole purpose is to analyze user requests expressed in natural language and translate them into a precise sequence of command calls that can be executed by a software controller.

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
\`\`\``,c0=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,u0=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``;let d0=0;Ct.registerContribution(Wa,{label:"Commander",description:"Commands execution plan generator",role:"commands",sysPrompt:l0,canHandle:({activeEditor:e})=>{const t=Fe.listCommands({source:e});return Object.keys(t).length>0},promptDecorator:async({userPrompt:e,commandRegistry:t,activeEditor:n})=>{const r=t.listCommands({source:n}),i=JSON.stringify(r,null,2);return`${e}

***Available Commands:***
${i}`},messageDecorator:async({message:e,activeEditor:t})=>{if(!e)return;const n=e.content.replace("```json","").replace("```",""),r=JSON.parse(n);let i=!0;e.content=r.map(({id:a,summary:o},c)=>{const p=Fe.getCommand(a);return p?`${c+1}. ${p.name}
	- ${o||p.description}`:(i=!1,`${c+1}. *INVALID COMMAND:* _${a}_`)}).join(`
`),e.actions=e.actions||[],e.actions.push({label:"Show Commands Execution Plan",icon:"list",action:async()=>{const a=d0++,o=`\`\`\`json
${JSON.stringify(r,null,2)}
\`\`\``,c=new Hu(o,`Commands Execution Plan (${a}).md`);await Qr.loadEditor(c)}}),i&&e.actions.push({label:"Execute Commands",icon:"play",action:async()=>{const a=(t==null?void 0:t.getCommandStack())||new Uc;await Qi.runAsync("Executing commands",async()=>{qt.debug("Executing commands: "+JSON.stringify(r));const o=Fe.createExecutionContext(t);for(const c of r){const p=Object.entries(c.parameters||{}).map(([g,v])=>(typeof v=="string"&&(v=v.replace(/{{(.*?)}}/g,(x,y)=>o[y.trim()]??"")),[g,v]));o.params=Object.fromEntries(p),await a.execute(c.id,o)}})}})}});const Yu=e=>e&&typeof e.getEditor=="function"&&typeof e.getLanguage=="function",Xu=async({userPrompt:e,activeEditor:t})=>{var a,o;const n=t.getEditor(),r=n.getModel(),i=r.getValueInRange(n.getSelection());return i?`${e}

 Code selection within file "${(a=t.input)==null?void 0:a.data.getWorkspacePath()}":

            ${i}`:`${e}

Code in file "${(o=t.input)==null?void 0:o.data.getWorkspacePath()}":

            ${r.getValue()}`};Ct.registerContribution(Wa,{label:"Python Assistant",description:"Python code assistant",role:"py-programmer",sysPrompt:c0,canHandle:({activeEditor:e})=>Yu(e)&&e.getLanguage()=="python",promptDecorator:Xu});Ct.registerContribution(Wa,{label:"JavaScript Assistant",description:"JavaScript code assistant",role:"js-programmer",sysPrompt:u0,canHandle:({activeEditor:e})=>Yu(e)&&e.getLanguage()=="javascript",promptDecorator:Xu});const h0="https://api.github.com";function p0(){var t;const e=Xo.getCurrentApp();if((t=e==null?void 0:e.metadata)!=null&&t.github){const n=e.metadata.github;if(n.owner&&n.repo)return{owner:n.owner,repo:n.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function f0(e=100){try{const t=p0(),n=await fetch(`${h0}/repos/${t.owner}/${t.repo}/releases?per_page=${e}`);return n.ok?await n.json():[]}catch(t){return console.error("Failed to fetch releases:",t),[]}}function m0(e,t){const n=e.replace(/^v/,""),r=t.replace(/^v/,""),i=n.split(".").map(Number),a=r.split(".").map(Number);for(let o=0;o<Math.max(i.length,a.length);o++){const c=i[o]||0,p=a[o]||0;if(p>c)return!0;if(p<c)return!1}return!1}function so(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ws={exports:{}},_c;function g0(){return _c||(_c=1,(function(e,t){(function(n){e.exports=n()})(function(){return(function(){function n(r,i,a){function o(g,v){if(!i[g]){if(!r[g]){var x=typeof so=="function"&&so;if(!v&&x)return x(g,!0);if(c)return c(g,!0);var y=new Error("Cannot find module '"+g+"'");throw y.code="MODULE_NOT_FOUND",y}var I=i[g]={exports:{}};r[g][0].call(I.exports,function(R){var D=r[g][1][R];return o(D||R)},I,I.exports,n,r,i,a)}return i[g].exports}for(var c=typeof so=="function"&&so,p=0;p<a.length;p++)o(a[p]);return o}return n})()({1:[function(n,r,i){const a=n("./utils"),o=(function(){const c=a.stringToArray,p=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],g=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],v=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],x=["Thousand","Million","Billion","Trillion"];function y(N,H){var F=function(se,te,K){var le="";if(se<=19)le=(te?" and ":"")+(K?g[se]:p[se]);else if(se<100){const Be=Math.floor(se/10),Ge=se%10;le=(te?" and ":"")+v[Be-2],Ge>0?le+="-"+F(Ge,!1,K):K&&(le=le.substring(0,le.length-1)+"ieth")}else if(se<1e3){const Be=Math.floor(se/100),Ge=se%100;le=(te?", ":"")+p[Be]+" Hundred",Ge>0?le+=F(Ge,!0,K):K&&(le+="th")}else{var Se=Math.floor(Math.log10(se)/3);Se>x.length&&(Se=x.length);const Be=Math.pow(10,Se*3),Ge=Math.floor(se/Be),Ce=se-Ge*Be;le=(te?", ":"")+F(Ge,!1,!1)+" "+x[Se-1],Ce>0?le+=F(Ce,!0,K):K&&(le+="th")}return le},ee=F(N,!1,H);return ee}const I={};p.forEach(function(N,H){I[N.toLowerCase()]=H}),g.forEach(function(N,H){I[N.toLowerCase()]=H}),v.forEach(function(N,H){const F=N.toLowerCase();I[F]=(H+2)*10,I[F.substring(0,N.length-1)+"ieth"]=I[F]}),I.hundredth=100,x.forEach(function(N,H){const F=N.toLowerCase(),ee=Math.pow(10,(H+1)*3);I[F]=ee,I[F+"th"]=ee});function R(N){const F=N.split(/,\s|\sand\s|[\s\\-]/).map(te=>I[te]);let ee=[0];return F.forEach(te=>{if(te<100){let K=ee.pop();K>=1e3&&(ee.push(K),K=0),ee.push(K+te)}else ee.push(ee.pop()*te)}),ee.reduce((te,K)=>te+K,0)}const D=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],U={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function Y(N){for(var H=0;H<D.length;H++){const F=D[H];if(N>=F[0])return F[1]+Y(N-F[0])}return""}function q(N){for(var H=0,F=1,ee=N.length-1;ee>=0;ee--){const se=N[ee],te=U[se];te<F?H-=te:(F=te,H+=te)}return H}function z(N,H){for(var F=[],ee=H.charCodeAt(0);N>0;)F.unshift(String.fromCharCode((N-1)%26+ee)),N=Math.floor((N-1)/26);return F.join("")}function G(N,H){for(var F=H.charCodeAt(0),ee=0,se=0;se<N.length;se++)ee+=(N.charCodeAt(N.length-se-1)-F+1)*Math.pow(26,se);return ee}function M(N,H){if(typeof N>"u")return;N=Math.floor(N);const F=ge(H);return W(N,F)}const S={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},V={UPPER:"upper",LOWER:"lower",TITLE:"title"};function W(N,H){let F;const ee=N<0;switch(N=Math.abs(N),H.primary){case S.LETTERS:F=z(N,H.case===V.UPPER?"A":"a");break;case S.ROMAN:F=Y(N),H.case===V.UPPER&&(F=F.toUpperCase());break;case S.WORDS:F=y(N,H.ordinal),H.case===V.UPPER?F=F.toUpperCase():H.case===V.LOWER&&(F=F.toLowerCase());break;case S.DECIMAL:F=""+N;var se=H.mandatoryDigits-F.length;if(se>0){var te=new Array(se+1).join("0");F=te+F}if(H.zeroCode!==48&&(F=c(F).map(Be=>String.fromCodePoint(Be.codePointAt(0)+H.zeroCode-48)).join("")),H.regular){const Be=Math.floor((F.length-1)/H.groupingSeparators.position);for(let Ge=Be;Ge>0;Ge--){const Ce=F.length-Ge*H.groupingSeparators.position;F=F.substr(0,Ce)+H.groupingSeparators.character+F.substr(Ce)}}else H.groupingSeparators.reverse().forEach(Be=>{const Ge=F.length-Be.position;F=F.substr(0,Ge)+Be.character+F.substr(Ge)});if(H.ordinal){var K={1:"st",2:"nd",3:"rd"},le=F[F.length-1],Se=K[le];(!Se||F.length>1&&F[F.length-2]==="1")&&(Se="th"),F=F+Se}break;case S.SEQUENCE:throw{code:"D3130",value:H.token}}return ee&&(F="-"+F),F}const re=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function ge(N){const H={type:"integer",primary:S.DECIMAL,case:V.LOWER,ordinal:!1};let F,ee;const se=N.lastIndexOf(";");switch(se===-1?F=N:(F=N.substring(0,se),ee=N.substring(se+1),ee[0]==="o"&&(H.ordinal=!0)),F){case"A":H.case=V.UPPER;case"a":H.primary=S.LETTERS;break;case"I":H.case=V.UPPER;case"i":H.primary=S.ROMAN;break;case"W":H.case=V.UPPER,H.primary=S.WORDS;break;case"Ww":H.case=V.TITLE,H.primary=S.WORDS;break;case"w":H.primary=S.WORDS;break;default:{let te=null,K=0,le=0,Se=[],Be=0;if(c(F).map(Ce=>Ce.codePointAt(0)).reverse().forEach(Ce=>{let $e=!1;for(let Ze=0;Ze<re.length;Ze++){const xe=re[Ze];if(Ce>=xe&&Ce<=xe+9){if($e=!0,K++,Be++,te===null)te=xe;else if(xe!==te)throw{code:"D3131"};break}}$e||(Ce===35?(Be++,le++):Se.push({position:Be,character:String.fromCodePoint(Ce)}))}),K>0){H.primary=S.DECIMAL,H.zeroCode=te,H.mandatoryDigits=K,H.optionalDigits=le;const $e=function(Ze){if(Ze.length===0)return 0;const xe=Ze[0].character;for(let Lt=1;Lt<Ze.length;Lt++)if(Ze[Lt].character!==xe)return 0;const Tt=Ze.map(Lt=>Lt.position),bn=function(Lt,Wt){return Wt===0?Lt:bn(Wt,Lt%Wt)},jt=Tt.reduce(bn);for(let Lt=1;Lt<=Tt.length;Lt++)if(Tt.indexOf(Lt*jt)===-1)return 0;return jt}(Se);$e>0?(H.regular=!0,H.groupingSeparators={position:$e,character:Se[0].character}):(H.regular=!1,H.groupingSeparators=Se)}else H.primary=S.SEQUENCE,H.token=F}}return H}const X={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function ie(N){var H=[];const F={type:"datetime",parts:H},ee=function($e,Ze){if(Ze>$e){let xe=N.substring($e,Ze);xe=xe.split("]]").join("]"),H.push({type:"literal",value:xe})}};for(var se=0,te=0;te<N.length;){if(N.charAt(te)==="["){if(N.charAt(te+1)==="["){ee(se,te),H.push({type:"literal",value:"["}),te+=2,se=te;continue}if(ee(se,te),se=te,te=N.indexOf("]",se),te===-1)throw{code:"D3135"};let $e=N.substring(se+1,te);$e=$e.split(/\s+/).join("");var K={type:"marker",component:$e.charAt(0)},le=$e.lastIndexOf(","),Se;if(le!==-1){const Ze=$e.substring(le+1),xe=Ze.indexOf("-");let Tt,bn;const jt=function(Wt){if(!(typeof Wt>"u"||Wt==="*"))return parseInt(Wt)};xe===-1?Tt=Ze:(Tt=Ze.substring(0,xe),bn=Ze.substring(xe+1));const Lt={min:jt(Tt),max:jt(bn)};K.width=Lt,Se=$e.substring(1,le)}else Se=$e.substring(1);if(Se.length===1)K.presentation1=Se;else if(Se.length>1){var Be=Se.charAt(Se.length-1);"atco".indexOf(Be)!==-1?(K.presentation2=Be,Be==="o"&&(K.ordinal=!0),K.presentation1=Se.substring(0,Se.length-1)):K.presentation1=Se}else K.presentation1=X[K.component];if(typeof K.presentation1>"u")throw{code:"D3132",value:K.component};if(K.presentation1[0]==="n")K.names=V.LOWER;else if(K.presentation1[0]==="N")K.presentation1[1]==="n"?K.names=V.TITLE:K.names=V.UPPER;else if("YMDdFWwXxHhmsf".indexOf(K.component)!==-1){var Ge=K.presentation1;if(K.presentation2&&(Ge+=";"+K.presentation2),K.integerFormat=ge(Ge),K.width&&K.width.min!==void 0&&K.integerFormat.mandatoryDigits<K.width.min&&(K.integerFormat.mandatoryDigits=K.width.min),"YMD".indexOf(K.component)!==-1)if(K.n=-1,K.width&&K.width.max!==void 0)K.n=K.width.max,K.integerFormat.mandatoryDigits=K.n;else{var Ce=K.integerFormat.mandatoryDigits+K.integerFormat.optionalDigits;Ce>=2&&(K.n=Ce)}}(K.component==="Z"||K.component==="z")&&(K.integerFormat=ge(K.presentation1)),H.push(K),se=te+1}te++}return ee(se,te),F}const de=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ke=["January","February","March","April","May","June","July","August","September","October","November","December"],Ve=1e3*60*60*24,ye=function(N){const H=Date.UTC(N.year,N.month);var F=new Date(H).getUTCDay();return F===0&&(F=7),F>4?H+(8-F)*Ve:H-(F-1)*Ve},be=function(N,H){return{year:N,month:H,nextMonth:function(){return H===11?be(N+1,0):be(N,H+1)},previousMonth:function(){return H===0?be(N-1,11):be(N,H-1)},nextYear:function(){return be(N+1,H)},previousYear:function(){return be(N-1,H)}}},ze=function(N,H){return(H-N)/(Ve*7)+1},ne=(N,H)=>{let F;switch(H){case"Y":F=N.getUTCFullYear();break;case"M":F=N.getUTCMonth()+1;break;case"D":F=N.getUTCDate();break;case"d":{const ee=Date.UTC(N.getUTCFullYear(),N.getUTCMonth(),N.getUTCDate()),se=Date.UTC(N.getUTCFullYear(),0);F=(ee-se)/Ve+1;break}case"F":F=N.getUTCDay(),F===0&&(F=7);break;case"W":{const ee=be(N.getUTCFullYear(),0),se=ye(ee),te=Date.UTC(ee.year,N.getUTCMonth(),N.getUTCDate());let K=ze(se,te);if(K>52){const le=ye(ee.nextYear());te>=le&&(K=1)}else if(K<1){const le=ye(ee.previousYear());K=ze(le,te)}F=Math.floor(K);break}case"w":{const ee=be(N.getUTCFullYear(),N.getUTCMonth()),se=ye(ee),te=Date.UTC(ee.year,ee.month,N.getUTCDate());let K=ze(se,te);if(K>4){const le=ye(ee.nextMonth());te>=le&&(K=1)}else if(K<1){const le=ye(ee.previousMonth());K=ze(le,te)}F=Math.floor(K);break}case"X":{const ee=be(N.getUTCFullYear(),0),se=ye(ee),te=ye(ee.nextYear()),K=N.getTime();K<se?F=ee.year-1:K>=te?F=ee.year+1:F=ee.year;break}case"x":{const ee=be(N.getUTCFullYear(),N.getUTCMonth()),se=ye(ee),te=ee.nextMonth(),K=ye(te),le=N.getTime();le<se?F=ee.previousMonth().month+1:le>=K?F=te.month+1:F=ee.month+1;break}case"H":F=N.getUTCHours();break;case"h":F=N.getUTCHours(),F=F%12,F===0&&(F=12);break;case"P":F=N.getUTCHours()>=12?"pm":"am";break;case"m":F=N.getUTCMinutes();break;case"s":F=N.getUTCSeconds();break;case"f":F=N.getUTCMilliseconds();break;case"Z":case"z":break;case"C":F="ISO";break;case"E":F="ISO";break}return F};let De=null;function We(N,H,F){var ee=0,se=0;if(typeof F<"u"){const Ge=parseInt(F);ee=Math.floor(Ge/100),se=Ge%100}var te=function(Ge,Ce){var $e=ne(Ge,Ce.component);if("YMDdFWwXxHhms".indexOf(Ce.component)!==-1)if(Ce.component==="Y"&&Ce.n!==-1&&($e=$e%Math.pow(10,Ce.n)),Ce.names){if(Ce.component==="M"||Ce.component==="x")$e=ke[$e-1];else if(Ce.component==="F")$e=de[$e];else throw{code:"D3133",value:Ce.component};Ce.names===V.UPPER?$e=$e.toUpperCase():Ce.names===V.LOWER&&($e=$e.toLowerCase()),Ce.width&&$e.length>Ce.width.max&&($e=$e.substring(0,Ce.width.max))}else $e=W($e,Ce.integerFormat);else if(Ce.component==="f")$e=W($e,Ce.integerFormat);else if(Ce.component==="Z"||Ce.component==="z"){const Ze=ee*100+se;if(Ce.integerFormat.regular)$e=W(Ze,Ce.integerFormat);else{const xe=Ce.integerFormat.mandatoryDigits;if(xe===1||xe===2)$e=W(ee,Ce.integerFormat),se!==0&&($e+=":"+M(se,"00"));else if(xe===3||xe===4)$e=W(Ze,Ce.integerFormat);else throw{code:"D3134",value:xe}}Ze>=0&&($e="+"+$e),Ce.component==="z"&&($e="GMT"+$e),Ze===0&&Ce.presentation2==="t"&&($e="Z")}else Ce.component==="P"&&Ce.names===V.UPPER&&($e=$e.toUpperCase());return $e};let K;typeof H>"u"?(De===null&&(De=ie("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),K=De):K=ie(H);const le=(60*ee+se)*60*1e3,Se=new Date(N+le);let Be="";return K.parts.forEach(function(Ge){Ge.type==="literal"?Be+=Ge.value:Be+=te(Se,Ge)}),Be}function E(N){var H={};if(N.type==="datetime")H.type="datetime",H.parts=N.parts.map(function(F){var ee={};if(F.type==="literal")ee.regex=F.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(F.component==="Z"||F.component==="z"){let te;Array.isArray(F.integerFormat.groupingSeparators)||(te=F.integerFormat.groupingSeparators),ee.regex="",F.component==="z"&&(ee.regex="GMT"),ee.regex+="[-+][0-9]+",te&&(ee.regex+=te.character+"[0-9]+"),ee.parse=function(K){F.component==="z"&&(K=K.substring(3));let le=0,Se=0;return te?(le=Number.parseInt(K.substring(0,K.indexOf(te.character))),Se=Number.parseInt(K.substring(K.indexOf(te.character)+1))):K.length-1<=2?le=Number.parseInt(K):(le=Number.parseInt(K.substring(0,3)),Se=Number.parseInt(K.substring(3))),le*60+Se}}else if(F.integerFormat)F.integerFormat.n=F.n,ee=E(F.integerFormat);else{ee.regex="[a-zA-Z]+";var se={};if(F.component==="M"||F.component==="x")ke.forEach(function(te,K){F.width&&F.width.max?se[te.substring(0,F.width.max)]=K+1:se[te]=K+1});else if(F.component==="F")de.forEach(function(te,K){K>0&&(F.width&&F.width.max?se[te.substring(0,F.width.max)]=K:se[te]=K)});else if(F.component==="P")se={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:F.component};ee.parse=function(te){return se[te]}}return ee.component=F.component,ee});else{H.type="integer";const F=N.case===V.UPPER;let ee;switch(N.n&&N.n>0?N.optionalDigits===0?ee=`{${N.n}}`:ee=`{${N.n-N.optionalDigits},${N.n}}`:ee="+",N.primary){case S.LETTERS:H.regex=F?"[A-Z]+":"[a-z]+",H.parse=function(se){return G(se,F?"A":"a")};break;case S.ROMAN:H.regex=F?"[MDCLXVI]+":"[mdclxvi]+",H.parse=function(se){return q(F?se:se.toUpperCase())};break;case S.WORDS:H.regex="(?:"+Object.keys(I).concat("and","[\\-, ]").join("|")+")+",H.parse=function(se){return R(se.toLowerCase())};break;case S.DECIMAL:H.regex=`[0-9]${ee}`,N.ordinal&&(H.regex+="(?:th|st|nd|rd)"),H.parse=function(se){let te=se;return N.ordinal&&(te=se.substring(0,se.length-2)),N.regular?te=te.split(",").join(""):N.groupingSeparators.forEach(K=>{te=te.split(K.character).join("")}),N.zeroCode!==48&&(te=te.split("").map(K=>String.fromCodePoint(K.codePointAt(0)-N.zeroCode+48)).join("")),parseInt(te)};break;case S.SEQUENCE:throw{code:"D3130",value:N.token}}}return H}function O(N,H){if(typeof N>"u")return;const F=ge(H);return E(F).parse(N)}function ve(N,H){const F=ie(H),ee=E(F),se="^"+ee.parts.map(Se=>"("+Se.regex+")").join("")+"$";var K=new RegExp(se,"i").exec(N);if(K!==null){const xe={};for(let Je=1;Je<K.length;Je++){const w=ee.parts[Je-1];w.parse&&(xe[w.component]=w.parse(K[Je]))}if(Object.getOwnPropertyNames(xe).length===0)return;let Tt=0;const bn=Je=>{Tt<<=1,Tt+=Je?1:0},jt=Je=>!(~Je&Tt)&&!!(Je&Tt);"YXMxWwdD".split("").forEach(Je=>bn(xe[Je]));const Wt=!jt(161)&&jt(130),Mn=jt(84),lr=!Mn&&jt(72);Tt=0,"PHhmsf".split("").forEach(Je=>bn(xe[Je]));const Gn=!jt(23)&&jt(47),Cr=(Wt?"YD":Mn?"XxwF":lr?"XWF":"YMD")+(Gn?"Phmsf":"Hmsf"),vn=this.environment.timestamp;let kt=!1,Nn=!1;if(Cr.split("").forEach(Je=>{if(typeof xe[Je]>"u")kt?(xe[Je]="MDd".indexOf(Je)!==-1?1:0,Nn=!0):xe[Je]=ne(vn,Je);else if(kt=!0,Nn)throw{code:"D3136"}}),xe.M>0?xe.M-=1:xe.M=0,Wt){const Je=Date.UTC(xe.Y,0),w=(xe.d-1)*1e3*60*60*24,A=new Date(Je+w);xe.M=A.getUTCMonth(),xe.D=A.getUTCDate()}if(Mn)throw{code:"D3136"};if(lr)throw{code:"D3136"};Gn&&(xe.H=xe.h===12?0:xe.h,xe.P===1&&(xe.H+=12));var le=Date.UTC(xe.Y,xe.M,xe.D,xe.H,xe.m,xe.s,xe.f);return(xe.Z||xe.z)&&(le-=(xe.Z||xe.z)*60*1e3),le}}var Me=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function lt(N,H){if(!(typeof N>"u"))if(typeof H>"u"){if(!Me.test(N))throw{stack:new Error().stack,code:"D3110",value:N};return Date.parse(N)}else return ve.call(this,N,H)}function He(N,H,F){if(!(typeof N>"u"))return We.call(this,N,H,F)}return{formatInteger:M,parseInteger:O,fromMillis:He,toMillis:lt}})();r.exports=o},{"./utils":6}],2:[function(n,r,i){(function(a){(function(){var o=n("./utils");const c=(()=>{var p=o.isNumeric,g=o.isArrayOfStrings,v=o.isArrayOfNumbers,x=o.createSequence,y=o.isSequence,I=o.isFunction,R=o.isLambda,D=o.isPromise,U=o.getFunctionArity,Y=o.isDeepEqual,q=o.stringToArray;function z(d){if(!(typeof d>"u")){var b=0;return d.forEach(function(k){b+=k}),b}}function G(d){return typeof d>"u"?0:d.length}function M(d){if(!(typeof d>"u"||d.length===0))return Math.max.apply(Math,d)}function S(d){if(!(typeof d>"u"||d.length===0))return Math.min.apply(Math,d)}function V(d){if(!(typeof d>"u"||d.length===0)){var b=0;return d.forEach(function(k){b+=k}),b/d.length}}function W(d,b=!1){if(!(typeof d>"u")){var k;if(typeof d=="string")k=d;else if(I(d))k="";else{if(typeof d=="number"&&!isFinite(d))throw{code:"D3001",value:d,stack:new Error().stack};var L=b?2:0;Array.isArray(d)&&d.outerWrapper&&(d=d[0]),k=JSON.stringify(d,function($,B){return typeof B<"u"&&B!==null&&B.toPrecision&&p(B)?Number(B.toPrecision(15)):B&&I(B)?"":B},L)}return k}}function re(d,b,k){if(!(typeof d>"u")){var L=q(d),$=L.length;if($+b<0&&(b=0),typeof k<"u"){if(k<=0)return"";var B=b>=0?b+k:$+b+k;return L.slice(b,B).join("")}return L.slice(b).join("")}}function ge(d,b){if(!(typeof d>"u")){var k=d.indexOf(b);return k>-1?d.substr(0,k):d}}function X(d,b){if(!(typeof d>"u")){var k=d.indexOf(b);return k>-1?d.substr(k+b.length):d}}function ie(d){if(!(typeof d>"u"))return d.toLowerCase()}function de(d){if(!(typeof d>"u"))return d.toUpperCase()}function ke(d){if(!(typeof d>"u"))return q(d).length}function Ve(d){if(!(typeof d>"u")){var b=d.replace(/[ \t\n\r]+/gm," ");return b.charAt(0)===" "&&(b=b.substring(1)),b.charAt(b.length-1)===" "&&(b=b.substring(0,b.length-1)),b}}function ye(d,b,k){if(!(typeof d>"u")){(typeof k>"u"||k.length===0)&&(k=" ");var L,$=Math.abs(b)-ke(d);if($>0){var B=new Array($+1).join(k);k.length>1&&(B=re(B,0,$)),b>0?L=d+B:L=B+d}else L=d;return L}}async function be(d,b){var k=d.apply(this,[b]);if(D(k)&&(k=await k),k&&!(typeof k.start=="number"||k.end==="number"||Array.isArray(k.groups)||I(k.next)))throw{code:"T1010",stack:new Error().stack};return k}async function ze(d,b){if(!(typeof d>"u")){var k;if(typeof b=="string")k=d.indexOf(b)!==-1;else{var L=await be(b,d);k=typeof L<"u"}return k}}async function ne(d,b,k){if(!(typeof d>"u")){if(k<0)throw{stack:new Error().stack,value:k,code:"D3040",index:3};var L=x();if(typeof k>"u"||k>0){var $=0,B=await be(b,d);if(typeof B<"u")for(;typeof B<"u"&&(typeof k>"u"||$<k);)L.push({match:B.match,index:B.start,groups:B.groups}),B=await be(B.next),$++}return L}}async function De(d,b,k,L){if(!(typeof d>"u")){var $=this;if(b==="")throw{code:"D3010",stack:new Error().stack,value:b,index:2};if(L<0)throw{code:"D3011",stack:new Error().stack,value:L,index:4};var B;typeof k=="string"?B=function(Ke){for(var Et="",Ne=0,vt=k.indexOf("$",Ne);vt!==-1&&Ne<k.length;){Et+=k.substring(Ne,vt),Ne=vt+1;var dn=k.charAt(Ne);if(dn==="$")Et+="$",Ne++;else if(dn==="0")Et+=Ke.match,Ne++;else{var ct;if(Ke.groups.length===0?ct=1:ct=Math.floor(Math.log(Ke.groups.length)*Math.LOG10E)+1,vt=parseInt(k.substring(Ne,Ne+ct),10),ct>1&&vt>Ke.groups.length&&(vt=parseInt(k.substring(Ne,Ne+ct-1),10)),isNaN(vt))Et+="$";else{if(Ke.groups.length>0){var Sr=Ke.groups[vt-1];typeof Sr<"u"&&(Et+=Sr)}Ne+=vt.toString().length}}vt=k.indexOf("$",Ne)}return Et+=k.substring(Ne),Et}:B=k;var Q="",we=0;if(typeof L>"u"||L>0){var Ee=0;if(typeof b=="string"){for(var tt=d.indexOf(b,we);tt!==-1&&(typeof L>"u"||Ee<L);)Q+=d.substring(we,tt),Q+=k,we=tt+b.length,Ee++,tt=d.indexOf(b,we);Q+=d.substring(we)}else{var Te=await be(b,d);if(typeof Te<"u"){for(;typeof Te<"u"&&(typeof L>"u"||Ee<L);){Q+=d.substring(we,Te.start);var nt=B.apply($,[Te]);if(D(nt)&&(nt=await nt),typeof nt=="string")Q+=nt;else throw{code:"D3012",stack:new Error().stack,value:nt};we=Te.start+Te.match.length,Ee++,Te=await be(Te.next)}Q+=d.substring(we)}else Q=d}}else Q=d;return Q}}function We(d){if(!(typeof d>"u")){var b=typeof window<"u"?window.btoa:function(k){return new a.Buffer.from(k,"binary").toString("base64")};return b(d)}}function E(d){if(!(typeof d>"u")){var b=typeof window<"u"?window.atob:function(k){return new a.Buffer.from(k,"base64").toString("binary")};return b(d)}}function O(d){if(!(typeof d>"u")){var b;try{b=encodeURIComponent(d)}catch{throw{code:"D3140",stack:new Error().stack,value:d,functionName:"encodeUrlComponent"}}return b}}function ve(d){if(!(typeof d>"u")){var b;try{b=encodeURI(d)}catch{throw{code:"D3140",stack:new Error().stack,value:d,functionName:"encodeUrl"}}return b}}function Me(d){if(!(typeof d>"u")){var b;try{b=decodeURIComponent(d)}catch{throw{code:"D3140",stack:new Error().stack,value:d,functionName:"decodeUrlComponent"}}return b}}function lt(d){if(!(typeof d>"u")){var b;try{b=decodeURI(d)}catch{throw{code:"D3140",stack:new Error().stack,value:d,functionName:"decodeUrl"}}return b}}async function He(d,b,k){if(!(typeof d>"u")){if(k<0)throw{code:"D3020",stack:new Error().stack,value:k,index:3};var L=[];if(typeof k>"u"||k>0)if(typeof b=="string")L=d.split(b,k);else{var $=0,B=await be(b,d);if(typeof B<"u"){for(var Q=0;typeof B<"u"&&(typeof k>"u"||$<k);)L.push(d.substring(Q,B.start)),Q=B.end,B=await be(B.next),$++;(typeof k>"u"||$<k)&&L.push(d.substring(Q))}else L.push(d)}return L}}function N(d,b){if(!(typeof d>"u"))return typeof b>"u"&&(b=""),d.join(b)}function H(d,b,k){if(!(typeof d>"u")){var L={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},$=L;typeof k<"u"&&Object.keys(k).forEach(function(Ae){$[Ae]=k[Ae]});for(var B=[],Q=$["zero-digit"].charCodeAt(0),we=Q;we<Q+10;we++)B.push(String.fromCharCode(we));var Ee=B.concat([$["decimal-separator"],$["exponent-separator"],$["grouping-separator"],$.digit,$["pattern-separator"]]),tt=b.split($["pattern-separator"]);if(tt.length>2)throw{code:"D3080",stack:new Error().stack};var Te=function(Ae){var ht=(function(){for(var yt,Yt=0;Yt<Ae.length;Yt++)if(yt=Ae.charAt(Yt),Ee.indexOf(yt)!==-1&&yt!==$["exponent-separator"])return Ae.substring(0,Yt)})(),Nt=(function(){for(var yt,Yt=Ae.length-1;Yt>=0;Yt--)if(yt=Ae.charAt(Yt),Ee.indexOf(yt)!==-1&&yt!==$["exponent-separator"])return Ae.substring(Yt+1)})(),pt=Ae.substring(ht.length,Ae.length-Nt.length),an,Yn,Kt,It,on=Ae.indexOf($["exponent-separator"],ht.length);on===-1||on>Ae.length-Nt.length?(an=pt,Yn=void 0):(an=pt.substring(0,on),Yn=pt.substring(on+1));var sn=an.indexOf($["decimal-separator"]);return sn===-1?(Kt=an,It=Nt):(Kt=an.substring(0,sn),It=an.substring(sn+1)),{prefix:ht,suffix:Nt,activePart:pt,mantissaPart:an,exponentPart:Yn,integerPart:Kt,fractionalPart:It,subpicture:Ae}},nt=function(Ae){var ht,Nt,pt=Ae.subpicture,an=pt.indexOf($["decimal-separator"]);an!==pt.lastIndexOf($["decimal-separator"])&&(ht="D3081"),pt.indexOf($.percent)!==pt.lastIndexOf($.percent)&&(ht="D3082"),pt.indexOf($["per-mille"])!==pt.lastIndexOf($["per-mille"])&&(ht="D3083"),pt.indexOf($.percent)!==-1&&pt.indexOf($["per-mille"])!==-1&&(ht="D3084");var Yn=!1;for(Nt=0;Nt<Ae.mantissaPart.length;Nt++){var Kt=Ae.mantissaPart.charAt(Nt);if(B.indexOf(Kt)!==-1||Kt===$.digit){Yn=!0;break}}Yn||(ht="D3085");var It=Ae.activePart.split("").map(function(yt){return Ee.indexOf(yt)===-1?"p":"a"}).join("");It.indexOf("p")!==-1&&(ht="D3086"),an!==-1?(pt.charAt(an-1)===$["grouping-separator"]||pt.charAt(an+1)===$["grouping-separator"])&&(ht="D3087"):Ae.integerPart.charAt(Ae.integerPart.length-1)===$["grouping-separator"]&&(ht="D3088"),pt.indexOf($["grouping-separator"]+$["grouping-separator"])!==-1&&(ht="D3089");var on=Ae.integerPart.indexOf($.digit);on!==-1&&Ae.integerPart.substring(0,on).split("").filter(function(yt){return B.indexOf(yt)>-1}).length>0&&(ht="D3090"),on=Ae.fractionalPart.lastIndexOf($.digit),on!==-1&&Ae.fractionalPart.substring(on).split("").filter(function(yt){return B.indexOf(yt)>-1}).length>0&&(ht="D3091");var sn=typeof Ae.exponentPart=="string";if(sn&&Ae.exponentPart.length>0&&(pt.indexOf($.percent)!==-1||pt.indexOf($["per-mille"])!==-1)&&(ht="D3092"),sn&&(Ae.exponentPart.length===0||Ae.exponentPart.split("").filter(function(yt){return B.indexOf(yt)===-1}).length>0)&&(ht="D3093"),ht)throw{code:ht,stack:new Error().stack}},Ke=function(Ae){var ht=function(Dt,ai){for(var Ar=[],Xn=Dt.indexOf($["grouping-separator"]);Xn!==-1;){var Oi=(ai?Dt.substring(0,Xn):Dt.substring(Xn)).split("").filter(function(Vr){return B.indexOf(Vr)!==-1||Vr===$.digit}).length;Ar.push(Oi),Xn=Ae.integerPart.indexOf($["grouping-separator"],Xn+1)}return Ar},Nt=ht(Ae.integerPart),pt=function(Dt){if(Dt.length===0)return 0;for(var ai=function(Oi,Vr){return Vr===0?Oi:ai(Vr,Oi%Vr)},Ar=Dt.reduce(ai),Xn=1;Xn<=Dt.length;Xn++)if(Dt.indexOf(Xn*Ar)===-1)return 0;return Ar},an=pt(Nt),Yn=ht(Ae.fractionalPart,!0),Kt=Ae.integerPart.split("").filter(function(Dt){return B.indexOf(Dt)!==-1}).length,It=Kt,on=Ae.fractionalPart.split(""),sn=on.filter(function(Dt){return B.indexOf(Dt)!==-1}).length,yt=on.filter(function(Dt){return B.indexOf(Dt)!==-1||Dt===$.digit}).length,Yt=typeof Ae.exponentPart=="string";Kt===0&&yt===0&&(Yt?(sn=1,yt=1):Kt=1),Yt&&Kt===0&&Ae.integerPart.indexOf($.digit)!==-1&&(Kt=1),Kt===0&&sn===0&&(sn=1);var ii=0;return Yt&&(ii=Ae.exponentPart.split("").filter(function(Dt){return B.indexOf(Dt)!==-1}).length),{integerPartGroupingPositions:Nt,regularGrouping:an,minimumIntegerPartSize:Kt,scalingFactor:It,prefix:Ae.prefix,fractionalPartGroupingPositions:Yn,minimumFactionalPartSize:sn,maximumFactionalPartSize:yt,minimumExponentSize:ii,suffix:Ae.suffix,picture:Ae.subpicture}},Et=tt.map(Te);Et.forEach(nt);var Ne=Et.map(Ke),vt=$["minus-sign"],dn=$["zero-digit"],ct=$["decimal-separator"],Sr=$["grouping-separator"];Ne.length===1&&(Ne.push(JSON.parse(JSON.stringify(Ne[0]))),Ne[1].prefix=vt+Ne[1].prefix);var gt;d>=0?gt=Ne[0]:gt=Ne[1];var ni;gt.picture.indexOf($.percent)!==-1?ni=d*100:gt.picture.indexOf($["per-mille"])!==-1?ni=d*1e3:ni=d;var At,Kn;if(gt.minimumExponentSize===0)At=ni;else{var Qo=Math.pow(10,gt.scalingFactor),Ga=Math.pow(10,gt.scalingFactor-1);for(At=ni,Kn=0;At<Ga;)At*=10,Kn-=1;for(;At>Qo;)At/=10,Kn+=1}var da=le(At,gt.maximumFactionalPartSize),Ka=function(Ae,ht){var Nt=Math.abs(Ae).toFixed(ht);return dn!=="0"&&(Nt=Nt.split("").map(function(pt){return pt>="0"&&pt<="9"?B[pt.charCodeAt(0)-48]:pt}).join("")),Nt},Pe=Ka(da,gt.maximumFactionalPartSize),$t=Pe.indexOf(".");for($t===-1?Pe=Pe+ct:Pe=Pe.replace(".",ct);Pe.charAt(0)===dn;)Pe=Pe.substring(1);for(;Pe.charAt(Pe.length-1)===dn;)Pe=Pe.substring(0,Pe.length-1);$t=Pe.indexOf(ct);var Er=gt.minimumIntegerPartSize-$t,ha=gt.minimumFactionalPartSize-(Pe.length-$t-1);if(Pe=(Er>0?new Array(Er+1).join(dn):"")+Pe,Pe=Pe+(ha>0?new Array(ha+1).join(dn):""),$t=Pe.indexOf(ct),gt.regularGrouping>0)for(var rn=Math.floor(($t-1)/gt.regularGrouping),ri=1;ri<=rn;ri++)Pe=[Pe.slice(0,$t-ri*gt.regularGrouping),Sr,Pe.slice($t-ri*gt.regularGrouping)].join("");else gt.integerPartGroupingPositions.forEach(function(Ae){Pe=[Pe.slice(0,$t-Ae),Sr,Pe.slice($t-Ae)].join(""),$t++});if($t=Pe.indexOf(ct),gt.fractionalPartGroupingPositions.forEach(function(Ae){Pe=[Pe.slice(0,Ae+$t+1),Sr,Pe.slice(Ae+$t+1)].join("")}),$t=Pe.indexOf(ct),(gt.picture.indexOf(ct)===-1||$t===Pe.length-1)&&(Pe=Pe.substring(0,Pe.length-1)),typeof Kn<"u"){var _i=Ka(Kn,0);Er=gt.minimumExponentSize-_i.length,Er>0&&(_i=new Array(Er+1).join(dn)+_i),Pe=Pe+$["exponent-separator"]+(Kn<0?vt:"")+_i}return Pe=gt.prefix+Pe+gt.suffix,Pe}}function F(d,b){if(!(typeof d>"u")){if(d=le(d),typeof b>"u"?b=10:b=le(b),b<2||b>36)throw{code:"D3100",stack:new Error().stack,value:b};var k=d.toString(b);return k}}function ee(d){var b;if(!(typeof d>"u")){if(typeof d=="number")b=d;else if(typeof d=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(d)&&!isNaN(parseFloat(d))&&isFinite(d))b=parseFloat(d);else if(typeof d=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(d))b=Number(d);else if(d===!0)b=1;else if(d===!1)b=0;else throw{code:"D3030",value:d,stack:new Error().stack,index:1};return b}}function se(d){var b;if(!(typeof d>"u"))return b=Math.abs(d),b}function te(d){var b;if(!(typeof d>"u"))return b=Math.floor(d),b}function K(d){var b;if(!(typeof d>"u"))return b=Math.ceil(d),b}function le(d,b){var k;if(!(typeof d>"u")){if(b){var L=d.toString().split("e");d=+(L[0]+"e"+(L[1]?+L[1]+b:b))}k=Math.round(d);var $=k-d;return Math.abs($)===.5&&Math.abs(k%2)===1&&(k=k-1),b&&(L=k.toString().split("e"),k=+(L[0]+"e"+(L[1]?+L[1]-b:-b))),Object.is(k,-0)&&(k=0),k}}function Se(d){var b;if(!(typeof d>"u")){if(d<0)throw{stack:new Error().stack,code:"D3060",index:1,value:d};return b=Math.sqrt(d),b}}function Be(d,b){var k;if(!(typeof d>"u")){if(k=Math.pow(d,b),!isFinite(k))throw{stack:new Error().stack,code:"D3061",index:1,value:d,exp:b};return k}}function Ge(){return Math.random()}function Ce(d){if(!(typeof d>"u")){var b=!1;if(Array.isArray(d)){if(d.length===1)b=Ce(d[0]);else if(d.length>1){var k=d.filter(function(L){return Ce(L)});b=k.length>0}}else typeof d=="string"?d.length>0&&(b=!0):p(d)?d!==0&&(b=!0):d!==null&&typeof d=="object"?Object.keys(d).length>0&&(b=!0):typeof d=="boolean"&&d===!0&&(b=!0);return b}}function $e(d){if(!(typeof d>"u"))return!Ce(d)}function Ze(d,b,k,L){var $=[b],B=U(d);return B>=2&&$.push(k),B>=3&&$.push(L),$}async function xe(d,b){if(!(typeof d>"u")){for(var k=x(),L=0;L<d.length;L++){var $=Ze(b,d[L],L,d),B=await b.apply(this,$);typeof B<"u"&&k.push(B)}return k}}async function Tt(d,b){if(!(typeof d>"u")){for(var k=x(),L=0;L<d.length;L++){var $=d[L],B=Ze(b,$,L,d),Q=await b.apply(this,B);Ce(Q)&&k.push($)}return k}}async function bn(d,b){if(!(typeof d>"u")){for(var k=!1,L,$=0;$<d.length;$++){var B=d[$],Q=!0;if(typeof b<"u"){var we=Ze(b,B,$,d),Ee=await b.apply(this,we);Q=Ce(Ee)}if(Q)if(!k)L=B,k=!0;else throw{stack:new Error().stack,code:"D3138",index:$}}if(!k)throw{stack:new Error().stack,code:"D3139"};return L}}function jt(){for(var d=[],b=Array.prototype.slice.call(arguments),k=Math.min.apply(Math,b.map(function(B){return Array.isArray(B)?B.length:0})),L=0;L<k;L++){var $=b.map(B=>B[L]);d.push($)}return d}async function Lt(d,b,k){if(!(typeof d>"u")){var L,$=U(b);if($<2)throw{stack:new Error().stack,code:"D3050",index:1};var B;for(typeof k>"u"&&d.length>0?(L=d[0],B=1):(L=k,B=0);B<d.length;){var Q=[L,d[B]];$>=3&&Q.push(B),$>=4&&Q.push(d),L=await b.apply(this,Q),B++}return L}}function Wt(d){var b=x();if(Array.isArray(d)){var k={};d.forEach(function(L){var $=Wt(L);$.forEach(function(B){k[B]=!0})}),b=Wt(k)}else d!==null&&typeof d=="object"&&!I(d)&&Object.keys(d).forEach(L=>b.push(L));return b}function Mn(d,b){var k;if(Array.isArray(d)){k=x();for(var L=0;L<d.length;L++){var $=Mn(d[L],b);typeof $<"u"&&(Array.isArray($)?$.forEach(B=>k.push(B)):k.push($))}}else d!==null&&typeof d=="object"&&!I(d)&&(k=d[b]);return k}function lr(d,b){return typeof d>"u"?b:typeof b>"u"?d:(Array.isArray(d)||(d=x(d)),Array.isArray(b)||(b=[b]),d.concat(b))}function Fr(d){return!(typeof d>"u")}function Gn(d){var b=x();if(Array.isArray(d))d.forEach(function($){b=lr(b,Gn($))});else if(d!==null&&typeof d=="object"&&!R(d))for(var k in d){var L={};L[k]=d[k],b.push(L)}else b=d;return b}function he(d){if(!(typeof d>"u")){var b={};return d.forEach(function(k){for(var L in k)b[L]=k[L]}),b}}function qr(d){if(!(typeof d>"u")){if(d.length<=1)return d;for(var b=d.length,k=new Array(b),L=0;L<b;L++)k[b-L-1]=d[L];return k}}async function Cr(d,b){var k=x();for(var L in d){var $=Ze(b,d[L],L,d),B=await b.apply(this,$);typeof B<"u"&&k.push(B)}return k}function vn(d){throw{code:"D3137",stack:new Error().stack,message:d||"$error() function evaluated"}}function kt(d,b){if(!d)throw{code:"D3141",stack:new Error().stack,message:b||"$assert() statement failed"}}function Nn(d){if(d!==void 0)return d===null?"null":p(d)?"number":typeof d=="string"?"string":typeof d=="boolean"?"boolean":Array.isArray(d)?"array":I(d)?"function":"object"}async function Je(d,b){if(!(typeof d>"u")){if(d.length<=1)return d;var k;if(typeof b>"u"){if(!v(d)&&!g(d))throw{stack:new Error().stack,code:"D3070",index:1};k=async function(Q,we){return Q>we}}else k=b;var L=async function(Q,we){var Ee=async function(Te,nt,Ke){nt.length===0?Array.prototype.push.apply(Te,Ke):Ke.length===0?Array.prototype.push.apply(Te,nt):await k(nt[0],Ke[0])?(Te.push(Ke[0]),await Ee(Te,nt,Ke.slice(1))):(Te.push(nt[0]),await Ee(Te,nt.slice(1),Ke))},tt=[];return await Ee(tt,Q,we),tt},$=async function(Q){if(!Array.isArray(Q)||Q.length<=1)return Q;var we=Math.floor(Q.length/2),Ee=Q.slice(0,we),tt=Q.slice(we);return Ee=await $(Ee),tt=await $(tt),await L(Ee,tt)},B=await $(d);return B}}function w(d){if(!(typeof d>"u")){if(d.length<=1)return d;for(var b=new Array(d.length),k=0;k<d.length;k++){var L=Math.floor(Math.random()*(k+1));k!==L&&(b[k]=b[L]),b[L]=d[k]}return b}}function A(d){if(!(typeof d>"u")){if(!Array.isArray(d)||d.length<=1)return d;for(var b=y(d)?x():[],k=0;k<d.length;k++){for(var L=d[k],$=!1,B=0;B<b.length;B++)if(Y(L,b[B])){$=!0;break}$||b.push(L)}return b}}async function T(d,b){var k={};for(var L in d){var $=d[L],B=Ze(b,$,L,d),Q=await b.apply(this,B);Ce(Q)&&(k[L]=$)}return Object.keys(k).length===0&&(k=void 0),k}return{sum:z,count:G,max:M,min:S,average:V,string:W,substring:re,substringBefore:ge,substringAfter:X,lowercase:ie,uppercase:de,length:ke,trim:Ve,pad:ye,match:ne,contains:ze,replace:De,split:He,join:N,formatNumber:H,formatBase:F,number:ee,floor:te,ceil:K,round:le,abs:se,sqrt:Se,power:Be,random:Ge,boolean:Ce,not:$e,map:xe,zip:jt,filter:Tt,single:bn,foldLeft:Lt,sift:T,keys:Wt,lookup:Mn,append:lr,exists:Fr,spread:Gn,merge:he,reverse:qr,each:Cr,error:vn,assert:kt,type:Nn,sort:Je,shuffle:w,distinct:A,base64encode:We,base64decode:E,encodeUrlComponent:O,encodeUrl:ve,decodeUrlComponent:Me,decodeUrl:lt}})();r.exports=c}).call(this)}).call(this,typeof xs<"u"?xs:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(n,r,i){var a=n("./datetime"),o=n("./functions"),c=n("./utils"),p=n("./parser"),g=n("./signature"),v=(function(){var x=c.isNumeric,y=c.isArrayOfStrings,I=c.isArrayOfNumbers,R=c.createSequence,D=c.isSequence,U=c.isFunction,Y=c.isLambda,q=c.isIterable,z=c.isPromise,G=c.getFunctionArity,M=c.isDeepEqual,S=vn(null);async function V(w,A,T){var d,b=T.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(b&&await b(w,A,T),w.type){case"path":d=await W(w,A,T);break;case"binary":d=await ke(w,A,T);break;case"unary":d=await Ve(w,A,T);break;case"name":d=ye(w,A);break;case"string":case"number":case"value":d=be(w);break;case"wildcard":d=ze(w,A);break;case"descendant":d=De(w,A);break;case"parent":d=T.lookup(w.slot.label);break;case"condition":d=await te(w,A,T);break;case"block":d=await K(w,A,T);break;case"bind":d=await se(w,A,T);break;case"regex":d=le(w);break;case"function":d=await Ze(w,A,T);break;case"variable":d=Se(w,A,T);break;case"lambda":d=bn(w,A,T);break;case"partial":d=await jt(w,A,T);break;case"apply":d=await $e(w,A,T);break;case"transform":d=Ge(w,A,T);break}if(Object.prototype.hasOwnProperty.call(w,"predicate"))for(var k=0;k<w.predicate.length;k++)d=await de(w.predicate[k].expr,d,T);w.type!=="path"&&Object.prototype.hasOwnProperty.call(w,"group")&&(d=await H(w.group,d,T));var L=T.lookup(Symbol.for("jsonata.__evaluate_exit"));return L&&await L(w,A,T,d),d&&D(d)&&!d.tupleStream&&(w.keepArray&&(d.keepSingleton=!0),d.length===0?d=void 0:d.length===1&&(d=d.keepSingleton?d:d[0])),d}async function W(w,A,T){var d;Array.isArray(A)&&w.steps[0].type!=="variable"?d=A:d=R(A);for(var b,k=!1,L=void 0,$=0;$<w.steps.length;$++){var B=w.steps[$];if(B.tuple&&(k=!0),$===0&&B.consarray?b=await V(B,d,T):k?L=await ie(B,d,L,T):b=await ge(B,d,T,$===w.steps.length-1),!k&&(typeof b>"u"||b.length===0))break;typeof B.focus>"u"&&(d=b)}if(k)if(w.tuple)b=L;else for(b=R(),$=0;$<L.length;$++)b.push(L[$]["@"]);return w.keepSingletonArray&&(Array.isArray(b)&&b.cons&&!b.sequence&&(b=R(b)),b.keepSingleton=!0),w.hasOwnProperty("group")&&(b=await H(w.group,k?L:b,T)),b}function re(w,A){var T=vn(w);for(const d in A)T.bind(d,A[d]);return T}async function ge(w,A,T,d){var b;if(w.type==="sort")return b=await Be(w,A,T),w.stages&&(b=await X(w.stages,b,T)),b;b=R();for(var k=0;k<A.length;k++){var L=await V(w,A[k],T);if(w.stages)for(var $=0;$<w.stages.length;$++)L=await de(w.stages[$].expr,L,T);typeof L<"u"&&b.push(L)}var B=R();return d&&b.length===1&&Array.isArray(b[0])&&!D(b[0])?B=b[0]:b.forEach(function(Q){!Array.isArray(Q)||Q.cons?B.push(Q):Q.forEach(we=>B.push(we))}),B}async function X(w,A,T){for(var d=A,b=0;b<w.length;b++){var k=w[b];switch(k.type){case"filter":d=await de(k.expr,d,T);break;case"index":for(var L=0;L<d.length;L++){var $=d[L];$[k.value]=L}break}}return d}async function ie(w,A,T,d){var b;if(w.type==="sort"){if(T)b=await Be(w,T,d);else{var k=await Be(w,A,d);b=R(),b.tupleStream=!0;for(var L=0;L<k.length;L++){var $={"@":k[L]};$[w.index]=L,b.push($)}}return w.stages&&(b=await X(w.stages,b,d)),b}b=R(),b.tupleStream=!0;var B=d;T===void 0&&(T=A.map(tt=>({"@":tt})));for(var Q=0;Q<T.length;Q++){B=re(d,T[Q]);var we=await V(w,T[Q]["@"],B);if(typeof we<"u"){Array.isArray(we)||(we=[we]);for(var Ee=0;Ee<we.length;Ee++)$={},Object.assign($,T[Q]),we.tupleStream?Object.assign($,we[Ee]):(w.focus?($[w.focus]=we[Ee],$["@"]=T[Q]["@"]):$["@"]=we[Ee],w.index&&($[w.index]=Ee),w.ancestor&&($[w.ancestor.label]=T[Q]["@"])),b.push($)}}return w.stages&&(b=await X(w.stages,b,d)),b}async function de(w,A,T){var d=R();if(A&&A.tupleStream&&(d.tupleStream=!0),Array.isArray(A)||(A=R(A)),w.type==="number"){var b=Math.floor(w.value);b<0&&(b=A.length+b);var k=A[b];typeof k<"u"&&(Array.isArray(k)?d=k:d.push(k))}else for(b=0;b<A.length;b++){var k=A[b],L=k,$=T;A.tupleStream&&(L=k["@"],$=re(T,k));var B=await V(w,L,$);x(B)&&(B=[B]),I(B)?B.forEach(function(we){var Ee=Math.floor(we);Ee<0&&(Ee=A.length+Ee),Ee===b&&d.push(k)}):o.boolean(B)&&d.push(k)}return d}async function ke(w,A,T){var d,b=await V(w.lhs,A,T),k=w.value,L=async()=>await V(w.rhs,A,T);if(k==="and"||k==="or")try{return await lt(b,L,k)}catch(B){throw B.position=w.position,B.token=k,B}var $=await L();try{switch(k){case"+":case"-":case"*":case"/":case"%":d=E(b,$,k);break;case"=":case"!=":d=O(b,$,k);break;case"<":case"<=":case">":case">=":d=ve(b,$,k);break;case"&":d=N(b,$);break;case"..":d=ee(b,$);break;case"in":d=Me(b,$);break}}catch(B){throw B.position=w.position,B.token=k,B}return d}async function Ve(w,A,T){var d;switch(w.value){case"-":if(d=await V(w.expression,A,T),typeof d>"u")d=void 0;else if(x(d))d=-d;else throw{code:"D1002",stack:new Error().stack,position:w.position,token:w.value,value:d};break;case"[":d=[];let L=await Promise.all(w.expressions.map(async($,B)=>(T.isParallelCall=B>0,[$,await V($,A,T)])));for(let $ of L){var[b,k]=$;typeof k<"u"&&(b.value==="["?d.push(k):d=o.append(d,k))}w.consarray&&Object.defineProperty(d,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":d=await H(w,A,T);break}return d}function ye(w,A,T){return o.lookup(A,w.value)}function be(w){return w.value}function ze(w,A){var T=R();return Array.isArray(A)&&A.outerWrapper&&A.length>0&&(A=A[0]),A!==null&&typeof A=="object"&&Object.keys(A).forEach(function(d){var b=A[d];Array.isArray(b)?(b=ne(b),T=o.append(T,b)):T.push(b)}),T}function ne(w,A){return typeof A>"u"&&(A=[]),Array.isArray(w)?w.forEach(function(T){ne(T,A)}):A.push(w),A}function De(w,A){var T,d=R();return typeof A<"u"&&(We(A,d),d.length===1?T=d[0]:T=d),T}function We(w,A){Array.isArray(w)||A.push(w),Array.isArray(w)?w.forEach(function(T){We(T,A)}):w!==null&&typeof w=="object"&&Object.keys(w).forEach(function(T){We(w[T],A)})}function E(w,A,T){var d;if(typeof w<"u"&&!x(w))throw{code:"T2001",stack:new Error().stack,value:w};if(typeof A<"u"&&!x(A))throw{code:"T2002",stack:new Error().stack,value:A};if(typeof w>"u"||typeof A>"u")return d;switch(T){case"+":d=w+A;break;case"-":d=w-A;break;case"*":d=w*A;break;case"/":d=w/A;break;case"%":d=w%A;break}return d}function O(w,A,T){var d,b=typeof w,k=typeof A;if(b==="undefined"||k==="undefined")return!1;switch(T){case"=":d=M(w,A);break;case"!=":d=!M(w,A);break}return d}function ve(w,A,T){var d,b=typeof w,k=typeof A,L=b==="undefined"||b==="string"||b==="number",$=k==="undefined"||k==="string"||k==="number";if(!L||!$)throw{code:"T2010",stack:new Error().stack,value:b==="string"||b==="number"?A:w};if(!(b==="undefined"||k==="undefined")){if(b!==k)throw{code:"T2009",stack:new Error().stack,value:w,value2:A};switch(T){case"<":d=w<A;break;case"<=":d=w<=A;break;case">":d=w>A;break;case">=":d=w>=A;break}return d}}function Me(w,A){var T=!1;if(typeof w>"u"||typeof A>"u")return!1;Array.isArray(A)||(A=[A]);for(var d=0;d<A.length;d++)if(A[d]===w){T=!0;break}return T}async function lt(w,A,T){var d,b=He(w);switch(T){case"and":d=b&&He(await A());break;case"or":d=b||He(await A());break}return d}function He(w){var A=o.boolean(w);return typeof A>"u"?!1:A}function N(w,A){var T,d="",b="";return typeof w<"u"&&(d=o.string(w)),typeof A<"u"&&(b=o.string(A)),T=d.concat(b),T}async function H(w,A,T){var d={},b={},k=!!(A&&A.tupleStream);Array.isArray(A)||(A=R(A)),A.length===0&&A.push(void 0);for(var L=0;L<A.length;L++)for(var $=A[L],B=k?re(T,$):T,Q=0;Q<w.lhs.length;Q++){var we=w.lhs[Q],Ee=await V(we[0],k?$["@"]:$,B);if(typeof Ee!="string"&&Ee!==void 0)throw{code:"T1003",stack:new Error().stack,position:w.position,value:Ee};if(Ee!==void 0){var tt={data:$,exprIndex:Q};if(b.hasOwnProperty(Ee)){if(b[Ee].exprIndex!==Q)throw{code:"D1009",stack:new Error().stack,position:w.position,value:Ee};b[Ee].data=o.append(b[Ee].data,$)}else b[Ee]=tt}}let Te=await Promise.all(Object.keys(b).map(async(Ke,Et)=>{let Ne=b[Ke];var vt=Ne.data,dn=T;if(k){var ct=F(Ne.data);vt=ct["@"],delete ct["@"],dn=re(T,ct)}return T.isParallelCall=Et>0,[Ke,await V(w.lhs[Ne.exprIndex][1],vt,dn)]}));for(let Ke of Te){var[Ee,nt]=await Ke;typeof nt<"u"&&(d[Ee]=nt)}return d}function F(w){if(!Array.isArray(w))return w;var A={};Object.assign(A,w[0]);for(var T=1;T<w.length;T++)for(const d in w[T])A[d]=o.append(A[d],w[T][d]);return A}function ee(w,A){var T;if(typeof w<"u"&&!Number.isInteger(w))throw{code:"T2003",stack:new Error().stack,value:w};if(typeof A<"u"&&!Number.isInteger(A))throw{code:"T2004",stack:new Error().stack,value:A};if(typeof w>"u"||typeof A>"u"||w>A)return T;var d=A-w+1;if(d>1e7)throw{code:"D2014",stack:new Error().stack,value:d};T=new Array(d);for(var b=w,k=0;b<=A;b++,k++)T[k]=b;return T.sequence=!0,T}async function se(w,A,T){var d=await V(w.rhs,A,T);return T.bind(w.lhs.value,d),d}async function te(w,A,T){var d,b=await V(w.condition,A,T);return o.boolean(b)?d=await V(w.then,A,T):typeof w.else<"u"&&(d=await V(w.else,A,T)),d}async function K(w,A,T){for(var d,b=vn(T),k=0;k<w.expressions.length;k++)d=await V(w.expressions[k],A,b);return d}function le(w){var A=new Je.RegexEngine(w.value),T=function(d,b){var k;A.lastIndex=b||0;var L=A.exec(d);if(L!==null){if(k={match:L[0],start:L.index,end:L.index+L[0].length,groups:[]},L.length>1)for(var $=1;$<L.length;$++)k.groups.push(L[$]);k.next=function(){if(!(A.lastIndex>=d.length)){var B=T(d,A.lastIndex);if(B&&B.match==="")throw{code:"D1004",stack:new Error().stack,position:w.position,value:w.value.source};return B}}}return k};return T}function Se(w,A,T){var d;return w.value===""?d=A&&A.outerWrapper?A[0]:A:d=T.lookup(w.value),d}async function Be(w,A,T){var d,b=A,k=!!A.tupleStream,L=async function(B,Q){for(var we=0,Ee=0;we===0&&Ee<w.terms.length;Ee++){var tt=w.terms[Ee],Te=B,nt=T;k&&(Te=B["@"],nt=re(T,B));var Ke=await V(tt.expression,Te,nt);Te=Q,nt=T,k&&(Te=Q["@"],nt=re(T,Q));var Et=await V(tt.expression,Te,nt),Ne=typeof Ke,vt=typeof Et;if(Ne==="undefined"){we=vt==="undefined"?0:1;continue}if(vt==="undefined"){we=-1;continue}if(!(Ne==="string"||Ne==="number")||!(vt==="string"||vt==="number"))throw{code:"T2008",stack:new Error().stack,position:w.position,value:Ne==="string"||Ne==="number"?Et:Ke};if(Ne!==vt)throw{code:"T2007",stack:new Error().stack,position:w.position,value:Ke,value2:Et};Ke!==Et&&(Ke<Et?we=-1:we=1,tt.descending===!0&&(we=-we))}return we===1},$={environment:T,input:A};return d=await o.sort.apply($,[b,L]),d}function Ge(w,A,T){var d=async function(b){if(!(typeof b>"u")){var k=T.lookup("clone");if(!U(k))throw{code:"T2013",stack:new Error().stack,position:w.position};var L=await xe(k,[b],null,T),$=await V(w.pattern,L,T);if(typeof $<"u"){Array.isArray($)||($=[$]);for(var B=0;B<$.length;B++){var Q=$[B];if(Q&&(Q.isPrototypeOf(L)||Q instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:w.position};var we=await V(w.update,Q,T),Ee=typeof we;if(Ee!=="undefined"){if(Ee!=="object"||we===null||Array.isArray(we))throw{code:"T2011",stack:new Error().stack,position:w.update.position,value:we};for(var tt in we)Q[tt]=we[tt]}if(typeof w.delete<"u"){var Te=await V(w.delete,Q,T);if(typeof Te<"u"){var nt=Te;if(Array.isArray(Te)||(Te=[Te]),!y(Te))throw{code:"T2012",stack:new Error().stack,position:w.delete.position,value:nt};for(var Ke=0;Ke<Te.length;Ke++)typeof Q=="object"&&Q!==null&&delete Q[Te[Ke]]}}}}return L}};return he(d,"<(oa):o>")}var Ce=p("function($f, $g) { function($x){ $g($f($x)) } }");async function $e(w,A,T){var d,b=await V(w.lhs,A,T);if(w.rhs.type==="function")d=await Ze(w.rhs,A,T,{context:b});else{var k=await V(w.rhs,A,T);if(!U(k))throw{code:"T2006",stack:new Error().stack,position:w.position,value:k};if(U(b)){var L=await V(Ce,null,T);d=await xe(L,[b,k],null,T)}else d=await xe(k,[b],null,T)}return d}async function Ze(w,A,T,d){var b,k=await V(w.procedure,A,T);if(typeof k>"u"&&w.procedure.type==="path"&&T.lookup(w.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:w.position,token:w.procedure.steps[0].value};var L=[];typeof d<"u"&&L.push(d.context);for(var $=0;$<w.arguments.length;$++){const Q=await V(w.arguments[$],A,T);if(U(Q)){const we=async function(...Ee){return await xe(Q,Ee,null,T)};we.arity=G(Q),L.push(we)}else L.push(Q)}var B=w.procedure.type==="path"?w.procedure.steps[0].value:w.procedure.value;try{typeof k=="object"&&(k.token=B,k.position=w.position),b=await xe(k,L,A,T)}catch(Q){throw Q.position||(Q.position=w.position),Q.token||(Q.token=B),Q}return b}async function xe(w,A,T,d){var b;for(b=await Tt(w,A,T,d);Y(b)&&b.thunk===!0;){var k=await V(b.body.procedure,b.input,b.environment);b.body.procedure.type==="variable"&&(k.token=b.body.procedure.value),k.position=b.body.procedure.position;for(var L=[],$=0;$<b.body.arguments.length;$++)L.push(await V(b.body.arguments[$],b.input,b.environment));b=await Tt(k,L,T,d)}return b}async function Tt(w,A,T,d){var b;try{var k=A;if(w&&(k=Lt(w.signature,A,T)),Y(w))b=await Wt(w,k);else if(w&&w._jsonata_function===!0){var L={environment:d,input:T};b=w.implementation.apply(L,k),q(b)&&(b=b.next().value),z(b)&&(b=await b)}else if(typeof w=="function")b=w.apply(T,k),z(b)&&(b=await b);else throw{code:"T1006",stack:new Error().stack}}catch($){throw w&&(typeof $.token>"u"&&typeof w.token<"u"&&($.token=w.token),$.position=w.position||$.position),$}return b}function bn(w,A,T){var d={_jsonata_lambda:!0,input:A,environment:T,arguments:w.arguments,signature:w.signature,body:w.body};return w.thunk===!0&&(d.thunk=!0),d.apply=async function(b,k){return await xe(d,k,A,b?b.environment:T)},d}async function jt(w,A,T){for(var d,b=[],k=0;k<w.arguments.length;k++){var L=w.arguments[k];L.type==="operator"&&L.value==="?"?b.push(L):b.push(await V(L,A,T))}var $=await V(w.procedure,A,T);if(typeof $>"u"&&w.procedure.type==="path"&&T.lookup(w.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:w.position,token:w.procedure.steps[0].value};if(Y($))d=Mn($,b);else if($&&$._jsonata_function===!0)d=lr($.implementation,b);else if(typeof $=="function")d=lr($,b);else throw{code:"T1008",stack:new Error().stack,position:w.position,token:w.procedure.type==="path"?w.procedure.steps[0].value:w.procedure.value};return d}function Lt(w,A,T){if(typeof w>"u")return A;var d=w.validate(A,T);return d}async function Wt(w,A){var T,d=vn(w.environment);return w.arguments.forEach(function(b,k){d.bind(b.value,A[k])}),typeof w.body=="function"?T=await Fr(w.body,d):T=await V(w.body,w.input,d),T}function Mn(w,A){var T=vn(w.environment),d=[];w.arguments.forEach(function(k,L){var $=A[L];$&&$.type==="operator"&&$.value==="?"?d.push(k):T.bind(k.value,$)});var b={_jsonata_lambda:!0,input:w.input,environment:T,arguments:d,body:w.body};return b}function lr(w,A){var T=Gn(w);T=T.map(function(L){return"$"+L.trim()});var d="function("+T.join(", ")+"){ _ }",b=p(d);b.body=w;var k=Mn(b,A);return k}async function Fr(w,A){var T=Gn(w),d=T.map(function(L){return A.lookup(L.trim())}),b={environment:A},k=w.apply(b,d);return z(k)&&(k=await k),k}function Gn(w){var A=w.toString(),T=/\(([^)]*)\)/.exec(A)[1],d=T.split(",");return d}function he(w,A){var T={_jsonata_function:!0,implementation:w};return typeof A<"u"&&(T.signature=g(A)),T}async function qr(w,A){if(!(typeof w>"u")){var T=this.input;typeof A<"u"&&(T=A,Array.isArray(T)&&!D(T)&&(T=R(T),T.outerWrapper=!0));try{var d=p(w,!1)}catch(k){throw Nn(k),{stack:new Error().stack,code:"D3120",value:k.message,error:k}}try{var b=await V(d,T,this.environment)}catch(k){throw Nn(k),{stack:new Error().stack,code:"D3121",value:k.message,error:k}}return b}}function Cr(w){if(!(typeof w>"u"))return JSON.parse(o.string(w))}function vn(w){var A={};const T={bind:function(b,k){A[b]=k},lookup:function(b){var k;return A.hasOwnProperty(b)?k=A[b]:w&&(k=w.lookup(b)),k},timestamp:w?w.timestamp:null,async:w?w.async:!1,isParallelCall:w?w.isParallelCall:!1,global:w?w.global:{ancestry:[null]}};if(w){var d=w.lookup(Symbol.for("jsonata.__createFrame_push"));d&&d(w,T)}return T}S.bind("sum",he(o.sum,"<a<n>:n>")),S.bind("count",he(o.count,"<a:n>")),S.bind("max",he(o.max,"<a<n>:n>")),S.bind("min",he(o.min,"<a<n>:n>")),S.bind("average",he(o.average,"<a<n>:n>")),S.bind("string",he(o.string,"<x-b?:s>")),S.bind("substring",he(o.substring,"<s-nn?:s>")),S.bind("substringBefore",he(o.substringBefore,"<s-s:s>")),S.bind("substringAfter",he(o.substringAfter,"<s-s:s>")),S.bind("lowercase",he(o.lowercase,"<s-:s>")),S.bind("uppercase",he(o.uppercase,"<s-:s>")),S.bind("length",he(o.length,"<s-:n>")),S.bind("trim",he(o.trim,"<s-:s>")),S.bind("pad",he(o.pad,"<s-ns?:s>")),S.bind("match",he(o.match,"<s-f<s:o>n?:a<o>>")),S.bind("contains",he(o.contains,"<s-(sf):b>")),S.bind("replace",he(o.replace,"<s-(sf)(sf)n?:s>")),S.bind("split",he(o.split,"<s-(sf)n?:a<s>>")),S.bind("join",he(o.join,"<a<s>s?:s>")),S.bind("formatNumber",he(o.formatNumber,"<n-so?:s>")),S.bind("formatBase",he(o.formatBase,"<n-n?:s>")),S.bind("formatInteger",he(a.formatInteger,"<n-s:s>")),S.bind("parseInteger",he(a.parseInteger,"<s-s:n>")),S.bind("number",he(o.number,"<(nsb)-:n>")),S.bind("floor",he(o.floor,"<n-:n>")),S.bind("ceil",he(o.ceil,"<n-:n>")),S.bind("round",he(o.round,"<n-n?:n>")),S.bind("abs",he(o.abs,"<n-:n>")),S.bind("sqrt",he(o.sqrt,"<n-:n>")),S.bind("power",he(o.power,"<n-n:n>")),S.bind("random",he(o.random,"<:n>")),S.bind("boolean",he(o.boolean,"<x-:b>")),S.bind("not",he(o.not,"<x-:b>")),S.bind("map",he(o.map,"<af>")),S.bind("zip",he(o.zip,"<a+>")),S.bind("filter",he(o.filter,"<af>")),S.bind("single",he(o.single,"<af?>")),S.bind("reduce",he(o.foldLeft,"<afj?:j>")),S.bind("sift",he(o.sift,"<o-f?:o>")),S.bind("keys",he(o.keys,"<x-:a<s>>")),S.bind("lookup",he(o.lookup,"<x-s:x>")),S.bind("append",he(o.append,"<xx:a>")),S.bind("exists",he(o.exists,"<x:b>")),S.bind("spread",he(o.spread,"<x-:a<o>>")),S.bind("merge",he(o.merge,"<a<o>:o>")),S.bind("reverse",he(o.reverse,"<a:a>")),S.bind("each",he(o.each,"<o-f:a>")),S.bind("error",he(o.error,"<s?:x>")),S.bind("assert",he(o.assert,"<bs?:x>")),S.bind("type",he(o.type,"<x:s>")),S.bind("sort",he(o.sort,"<af?:a>")),S.bind("shuffle",he(o.shuffle,"<a:a>")),S.bind("distinct",he(o.distinct,"<x:x>")),S.bind("base64encode",he(o.base64encode,"<s-:s>")),S.bind("base64decode",he(o.base64decode,"<s-:s>")),S.bind("encodeUrlComponent",he(o.encodeUrlComponent,"<s-:s>")),S.bind("encodeUrl",he(o.encodeUrl,"<s-:s>")),S.bind("decodeUrlComponent",he(o.decodeUrlComponent,"<s-:s>")),S.bind("decodeUrl",he(o.decodeUrl,"<s-:s>")),S.bind("eval",he(qr,"<sx?:x>")),S.bind("toMillis",he(a.toMillis,"<s-s?:n>")),S.bind("fromMillis",he(a.fromMillis,"<n-s?s?:s>")),S.bind("clone",he(Cr,"<(oa)-:o>"));var kt={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Nn(w){var A=kt[w.code];if(typeof A<"u"){var T=A.replace(/\{\{\{([^}]+)}}}/g,function(){return w[arguments[1]]});T=T.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(w[arguments[1]])}),w.message=T}}function Je(w,A){var T,d;try{T=p(w,A&&A.recover),d=T.errors,delete T.errors}catch(L){throw Nn(L),L}var b=vn(S),k=new Date;return b.bind("now",he(function(L,$){return a.fromMillis(k.getTime(),L,$)},"<s?s?:s>")),b.bind("millis",he(function(){return k.getTime()},"<:n>")),A&&A.RegexEngine?Je.RegexEngine=A.RegexEngine:Je.RegexEngine=RegExp,{evaluate:async function(L,$,B){if(typeof d<"u"){var Q={code:"S0500",position:0};throw Nn(Q),Q}if(typeof $<"u"){var we;we=vn(b);for(var Ee in $)we.bind(Ee,$[Ee])}else we=b;we.bind("$",L),k=new Date,we.timestamp=k,Array.isArray(L)&&!D(L)&&(L=R(L),L.outerWrapper=!0);var tt;try{return tt=await V(T,L,we),typeof B=="function"&&B(null,tt),tt}catch(Te){throw Nn(Te),Te}},assign:function(L,$){b.bind(L,$)},registerFunction:function(L,$,B){var Q=he($,B);b.bind(L,Q)},ast:function(){return T},errors:function(){return d}}}return Je.parser=p,Je})();r.exports=v},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(n,r,i){var a=n("./signature");const o=(()=>{var c={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},p={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},g=function(x){var y=0,I=x.length,R=function(Y,q){var z={type:Y,value:q,position:y};return z},D=function(){for(var Y=y,q=0,z,G,M=function(V){if(x.charAt(V)==="/"&&q===0){for(var W=0;x.charAt(V-(W+1))==="\\";)W++;if(W%2===0)return!0}return!1};y<I;){var S=x.charAt(y);if(M(y)){if(z=x.substring(Y,y),z==="")throw{code:"S0301",stack:new Error().stack,position:y};for(y++,S=x.charAt(y),Y=y;S==="i"||S==="m";)y++,S=x.charAt(y);return G=x.substring(Y,y)+"g",new RegExp(z,G)}(S==="("||S==="["||S==="{")&&x.charAt(y-1)!=="\\"&&q++,(S===")"||S==="]"||S==="}")&&x.charAt(y-1)!=="\\"&&q--,y++}throw{code:"S0302",stack:new Error().stack,position:y}},U=function(Y){if(y>=I)return null;for(var q=x.charAt(y);y<I&&` 	
\r\v`.indexOf(q)>-1;)y++,q=x.charAt(y);if(q==="/"&&x.charAt(y+1)==="*"){var z=y;for(y+=2,q=x.charAt(y);!(q==="*"&&x.charAt(y+1)==="/");)if(q=x.charAt(++y),y>=I)throw{code:"S0106",stack:new Error().stack,position:z};return y+=2,q=x.charAt(y),U(Y)}if(Y!==!0&&q==="/")return y++,R("regex",D());if(q==="."&&x.charAt(y+1)===".")return y+=2,R("operator","..");if(q===":"&&x.charAt(y+1)==="=")return y+=2,R("operator",":=");if(q==="!"&&x.charAt(y+1)==="=")return y+=2,R("operator","!=");if(q===">"&&x.charAt(y+1)==="=")return y+=2,R("operator",">=");if(q==="<"&&x.charAt(y+1)==="=")return y+=2,R("operator","<=");if(q==="*"&&x.charAt(y+1)==="*")return y+=2,R("operator","**");if(q==="~"&&x.charAt(y+1)===">")return y+=2,R("operator","~>");if(Object.prototype.hasOwnProperty.call(c,q))return y++,R("operator",q);if(q==='"'||q==="'"){var G=q;y++;for(var M="";y<I;){if(q=x.charAt(y),q==="\\")if(y++,q=x.charAt(y),Object.prototype.hasOwnProperty.call(p,q))M+=p[q];else if(q==="u"){var S=x.substr(y+1,4);if(/^[0-9a-fA-F]+$/.test(S)){var V=parseInt(S,16);M+=String.fromCharCode(V),y+=4}else throw{code:"S0104",stack:new Error().stack,position:y}}else throw{code:"S0103",stack:new Error().stack,position:y,token:q};else{if(q===G)return y++,R("string",M);M+=q}y++}throw{code:"S0101",stack:new Error().stack,position:y}}var W=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,re=W.exec(x.substring(y));if(re!==null){var ge=parseFloat(re[0]);if(!isNaN(ge)&&isFinite(ge))return y+=re[0].length,R("number",ge);throw{code:"S0102",stack:new Error().stack,position:y,token:re[0]}}var X;if(q==="`"){y++;var ie=x.indexOf("`",y);if(ie!==-1)return X=x.substring(y,ie),y=ie+1,R("name",X);throw y=I,{code:"S0105",stack:new Error().stack,position:y}}for(var de=y,ke;;)if(ke=x.charAt(de),de===I||` 	
\r\v`.indexOf(ke)>-1||Object.prototype.hasOwnProperty.call(c,ke)){if(x.charAt(y)==="$")return X=x.substring(y+1,de),y=de,R("variable",X);switch(X=x.substring(y,de),y=de,X){case"or":case"in":case"and":return R("operator",X);case"true":return R("value",!0);case"false":return R("value",!1);case"null":return R("value",null);default:return y===I&&X===""?null:R("name",X)}}else de++};return U},v=function(x,y){var I,R,D={},U=[],Y=function(){var E=[];I.id!=="(end)"&&E.push({type:I.type,value:I.value,position:I.position});for(var O=R();O!==null;)E.push(O),O=R();return E},q={nud:function(){var E={code:"S0211",token:this.value,position:this.position};if(y)return E.remaining=Y(),E.type="error",U.push(E),E;throw E.stack=new Error().stack,E}},z=function(E,O){var ve=D[E];return O=O||0,ve?O>=ve.lbp&&(ve.lbp=O):(ve=Object.create(q),ve.id=ve.value=E,ve.lbp=O,D[E]=ve),ve},G=function(E){if(y){E.remaining=Y(),U.push(E);var O=D["(error)"];return I=Object.create(O),I.error=E,I.type="(error)",I}else throw E.stack=new Error().stack,E},M=function(E,O){if(E&&I.id!==E){var ve;I.id==="(end)"?ve="S0203":ve="S0202";var Me={code:ve,position:I.position,token:I.value,value:E};return G(Me)}var lt=R(O);if(lt===null)return I=D["(end)"],I.position=x.length,I;var He=lt.value,N=lt.type,H;switch(N){case"name":case"variable":H=D["(name)"];break;case"operator":if(H=D[He],!H)return G({code:"S0204",stack:new Error().stack,position:lt.position,token:He});break;case"string":case"number":case"value":H=D["(literal)"];break;case"regex":N="regex",H=D["(regex)"];break;default:return G({code:"S0205",stack:new Error().stack,position:lt.position,token:He})}return I=Object.create(H),I.value=He,I.type=N,I.position=lt.position,I},S=function(E){var O,ve=I;for(M(null,!0),O=ve.nud();E<I.lbp;)ve=I,M(),O=ve.led(O);return O},V=function(E){var O=z(E,0);O.nud=function(){return this}},W=function(E,O,ve){var Me=O||c[E],lt=z(E,Me);return lt.led=ve||function(He){return this.lhs=He,this.rhs=S(Me),this.type="binary",this},lt},re=function(E,O,ve){var Me=z(E,O);return Me.led=ve,Me},ge=function(E,O){var ve=z(E);return ve.nud=O||function(){return this.expression=S(70),this.type="unary",this},ve};V("(end)"),V("(name)"),V("(literal)"),V("(regex)"),z(":"),z(";"),z(","),z(")"),z("]"),z("}"),z(".."),W("."),W("+"),W("-"),W("*"),W("/"),W("%"),W("="),W("<"),W(">"),W("!="),W("<="),W(">="),W("&"),W("and"),W("or"),W("in"),V("and"),V("or"),V("in"),ge("-"),W("~>"),re("(error)",10,function(E){return this.lhs=E,this.error=I.error,this.remaining=Y(),this.type="error",this}),ge("*",function(){return this.type="wildcard",this}),ge("**",function(){return this.type="descendant",this}),ge("%",function(){return this.type="parent",this}),W("(",c["("],function(E){if(this.procedure=E,this.type="function",this.arguments=[],I.id!==")")for(;I.type==="operator"&&I.id==="?"?(this.type="partial",this.arguments.push(I),M("?")):this.arguments.push(S(0)),I.id===",";)M(",");if(M(")",!0),E.type==="name"&&(E.value==="function"||E.value==="λ")){if(this.arguments.forEach(function(He,N){if(He.type!=="variable")return G({code:"S0208",stack:new Error().stack,position:He.position,token:He.value,value:N+1})}),this.type="lambda",I.id==="<"){for(var O=I.position,ve=1,Me="<";ve>0&&I.id!=="{"&&I.id!=="(end)";){var lt=M();lt.id===">"?ve--:lt.id==="<"&&ve++,Me+=lt.value}M(">");try{this.signature=a(Me)}catch(He){return He.position=O+He.offset,G(He)}}M("{"),this.body=S(0),M("}")}return this}),ge("(",function(){for(var E=[];I.id!==")"&&(E.push(S(0)),I.id===";");)M(";");return M(")",!0),this.type="block",this.expressions=E,this}),ge("[",function(){var E=[];if(I.id!=="]")for(;;){var O=S(0);if(I.id===".."){var ve={type:"binary",value:"..",position:I.position,lhs:O};M(".."),ve.rhs=S(0),O=ve}if(E.push(O),I.id!==",")break;M(",")}return M("]",!0),this.expressions=E,this.type="unary",this}),W("[",c["["],function(E){if(I.id==="]"){for(var O=E;O&&O.type==="binary"&&O.value==="[";)O=O.lhs;return O.keepArray=!0,M("]"),E}else return this.lhs=E,this.rhs=S(c["]"]),this.type="binary",M("]",!0),this}),W("^",c["^"],function(E){M("(");for(var O=[];;){var ve={descending:!1};if(I.id==="<"?M("<"):I.id===">"&&(ve.descending=!0,M(">")),ve.expression=S(0),O.push(ve),I.id!==",")break;M(",")}return M(")"),this.lhs=E,this.rhs=O,this.type="binary",this});var X=function(E){var O=[];if(I.id!=="}")for(;;){var ve=S(0);M(":");var Me=S(0);if(O.push([ve,Me]),I.id!==",")break;M(",")}return M("}",!0),typeof E>"u"?(this.lhs=O,this.type="unary"):(this.lhs=E,this.rhs=O,this.type="binary"),this};ge("{",X),W("{",c["{"],X),re(":=",c[":="],function(E){return E.type!=="variable"?G({code:"S0212",stack:new Error().stack,position:E.position,token:E.value}):(this.lhs=E,this.rhs=S(c[":="]-1),this.type="binary",this)}),W("@",c["@"],function(E){return this.lhs=E,this.rhs=S(c["@"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),W("#",c["#"],function(E){return this.lhs=E,this.rhs=S(c["#"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),W("?",c["?"],function(E){return this.type="condition",this.condition=E,this.then=S(0),I.id===":"&&(M(":"),this.else=S(0)),this}),ge("|",function(){return this.type="transform",this.pattern=S(0),M("|"),this.update=S(0),I.id===","&&(M(","),this.delete=S(0)),M("|"),this});var ie=function(E){var O;if(E.type==="function"&&!E.predicate){var ve={type:"lambda",thunk:!0,arguments:[],position:E.position};ve.body=E,O=ve}else if(E.type==="condition")E.then=ie(E.then),typeof E.else<"u"&&(E.else=ie(E.else)),O=E;else if(E.type==="block"){var Me=E.expressions.length;Me>0&&(E.expressions[Me-1]=ie(E.expressions[Me-1])),O=E}else O=E;return O},de=0,ke=0,Ve=[],ye=function(E,O){switch(E.type){case"name":case"wildcard":O.level--,O.level===0&&(typeof E.ancestor>"u"||(Ve[O.index].slot.label=E.ancestor.label),E.ancestor=O,E.tuple=!0);break;case"parent":O.level++;break;case"block":E.expressions.length>0&&(E.tuple=!0,O=ye(E.expressions[E.expressions.length-1],O));break;case"path":E.tuple=!0;var ve=E.steps.length-1;for(O=ye(E.steps[ve--],O);O.level>0&&ve>=0;)O=ye(E.steps[ve--],O);break;default:throw{code:"S0217",token:E.type,position:E.position}}return O},be=function(E,O){if(typeof O.seekingParent<"u"||O.type==="parent"){var ve=typeof O.seekingParent<"u"?O.seekingParent:[];O.type==="parent"&&ve.push(O.slot),typeof E.seekingParent>"u"?E.seekingParent=ve:Array.prototype.push.apply(E.seekingParent,ve)}},ze=function(E){var O=E.steps.length-1,ve=E.steps[O],Me=typeof ve.seekingParent<"u"?ve.seekingParent:[];ve.type==="parent"&&Me.push(ve.slot);for(var lt=0;lt<Me.length;lt++){var He=Me[lt];for(O=E.steps.length-2;He.level>0;){if(O<0){typeof E.seekingParent>"u"?E.seekingParent=[He]:E.seekingParent.push(He);break}for(var N=E.steps[O--];O>=0&&N.focus&&E.steps[O].focus;)N=E.steps[O--];He=ye(N,He)}}},ne=function(E){var O;switch(E.type){case"binary":switch(E.value){case".":var ve=ne(E.lhs);ve.type==="path"?O=ve:O={type:"path",steps:[ve]},ve.type==="parent"&&(O.seekingParent=[ve.slot]);var Me=ne(E.rhs);Me.type==="function"&&Me.procedure.type==="path"&&Me.procedure.steps.length===1&&Me.procedure.steps[0].type==="name"&&O.steps[O.steps.length-1].type==="function"&&(O.steps[O.steps.length-1].nextFunction=Me.procedure.steps[0].value),Me.type==="path"?Array.prototype.push.apply(O.steps,Me.steps):(typeof Me.predicate<"u"&&(Me.stages=Me.predicate,delete Me.predicate),O.steps.push(Me)),O.steps.filter(function(le){if(le.type==="number"||le.type==="value")throw{code:"S0213",stack:new Error().stack,position:le.position,value:le.value};return le.type==="string"}).forEach(function(le){le.type="name"}),O.steps.filter(function(le){return le.keepArray===!0}).length>0&&(O.keepSingletonArray=!0);var lt=O.steps[0];lt.type==="unary"&&lt.value==="["&&(lt.consarray=!0);var He=O.steps[O.steps.length-1];He.type==="unary"&&He.value==="["&&(He.consarray=!0),ze(O);break;case"[":O=ne(E.lhs);var N=O,H="predicate";if(O.type==="path"&&(N=O.steps[O.steps.length-1],H="stages"),typeof N.group<"u")throw{code:"S0209",stack:new Error().stack,position:E.position};typeof N[H]>"u"&&(N[H]=[]);var F=ne(E.rhs);typeof F.seekingParent<"u"&&(F.seekingParent.forEach(le=>{le.level===1?ye(N,le):le.level--}),be(N,F)),N[H].push({type:"filter",expr:F,position:E.position});break;case"{":if(O=ne(E.lhs),typeof O.group<"u")throw{code:"S0210",stack:new Error().stack,position:E.position};O.group={lhs:E.rhs.map(function(le){return[ne(le[0]),ne(le[1])]}),position:E.position};break;case"^":O=ne(E.lhs),O.type!=="path"&&(O={type:"path",steps:[O]});var ee={type:"sort",position:E.position};ee.terms=E.rhs.map(function(le){var Se=ne(le.expression);return be(ee,Se),{descending:le.descending,expression:Se}}),O.steps.push(ee),ze(O);break;case":=":O={type:"bind",value:E.value,position:E.position},O.lhs=ne(E.lhs),O.rhs=ne(E.rhs),be(O,O.rhs);break;case"@":if(O=ne(E.lhs),N=O,O.type==="path"&&(N=O.steps[O.steps.length-1]),typeof N.stages<"u"||typeof N.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:E.position};if(N.type==="sort")throw{code:"S0216",stack:new Error().stack,position:E.position};E.keepArray&&(N.keepArray=!0),N.focus=E.rhs.value,N.tuple=!0;break;case"#":O=ne(E.lhs),N=O,O.type==="path"?N=O.steps[O.steps.length-1]:(O={type:"path",steps:[O]},typeof N.predicate<"u"&&(N.stages=N.predicate,delete N.predicate)),typeof N.stages>"u"?N.index=E.rhs.value:N.stages.push({type:"index",value:E.rhs.value,position:E.position}),N.tuple=!0;break;case"~>":O={type:"apply",value:E.value,position:E.position},O.lhs=ne(E.lhs),O.rhs=ne(E.rhs),O.keepArray=O.lhs.keepArray||O.rhs.keepArray;break;default:O={type:E.type,value:E.value,position:E.position},O.lhs=ne(E.lhs),O.rhs=ne(E.rhs),be(O,O.lhs),be(O,O.rhs)}break;case"unary":O={type:E.type,value:E.value,position:E.position},E.value==="["?O.expressions=E.expressions.map(function(le){var Se=ne(le);return be(O,Se),Se}):E.value==="{"?O.lhs=E.lhs.map(function(le){var Se=ne(le[0]);be(O,Se);var Be=ne(le[1]);return be(O,Be),[Se,Be]}):(O.expression=ne(E.expression),E.value==="-"&&O.expression.type==="number"?(O=O.expression,O.value=-O.value):be(O,O.expression));break;case"function":case"partial":O={type:E.type,name:E.name,value:E.value,position:E.position},O.arguments=E.arguments.map(function(le){var Se=ne(le);return be(O,Se),Se}),O.procedure=ne(E.procedure);break;case"lambda":O={type:E.type,arguments:E.arguments,signature:E.signature,position:E.position};var se=ne(E.body);O.body=ie(se);break;case"condition":O={type:E.type,position:E.position},O.condition=ne(E.condition),be(O,O.condition),O.then=ne(E.then),be(O,O.then),typeof E.else<"u"&&(O.else=ne(E.else),be(O,O.else));break;case"transform":O={type:E.type,position:E.position},O.pattern=ne(E.pattern),O.update=ne(E.update),typeof E.delete<"u"&&(O.delete=ne(E.delete));break;case"block":O={type:E.type,position:E.position},O.expressions=E.expressions.map(function(le){var Se=ne(le);return be(O,Se),(Se.consarray||Se.type==="path"&&Se.steps[0].consarray)&&(O.consarray=!0),Se});break;case"name":O={type:"path",steps:[E]},E.keepArray&&(O.keepSingletonArray=!0);break;case"parent":O={type:"parent",slot:{label:"!"+de++,level:1,index:ke++}},Ve.push(O);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":O=E;break;case"operator":if(E.value==="and"||E.value==="or"||E.value==="in")E.type="name",O=ne(E);else if(E.value==="?")O=E;else throw{code:"S0201",stack:new Error().stack,position:E.position,token:E.value};break;case"error":O=E,E.lhs&&(O=ne(E.lhs));break;default:var te="S0206";E.id==="(end)"&&(te="S0207");var K={code:te,position:E.position,token:E.value};if(y)return U.push(K),{type:"error",error:K};throw K.stack=new Error().stack,K}return E.keepArray&&(O.keepArray=!0),O};R=g(x),M();var De=S(0);if(I.id!=="(end)"){var We={code:"S0201",position:I.position,token:I.value};G(We)}if(De=ne(De),De.type==="parent"||typeof De.seekingParent<"u")throw{code:"S0217",token:De.type,position:De.position};return U.length>0&&(De.errors=U),De};return v})();r.exports=o},{"./signature":5}],5:[function(n,r,i){var a=n("./utils");const o=(()=>{var c={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function p(g){for(var v=1,x=[],y={},I=y;v<g.length;){var R=g.charAt(v);if(R===":")break;var D=function(){x.push(y),I=y,y={}},U=function(W,re,ge,X){for(var ie=1,de=re;de<W.length;)if(de++,R=W.charAt(de),R===X){if(ie--,ie===0)break}else R===ge&&ie++;return de};switch(R){case"s":case"n":case"b":case"l":case"o":y.regex="["+R+"m]",y.type=R,D();break;case"a":y.regex="[asnblfom]",y.type=R,y.array=!0,D();break;case"f":y.regex="f",y.type=R,D();break;case"j":y.regex="[asnblom]",y.type=R,D();break;case"x":y.regex="[asnblfom]",y.type=R,D();break;case"-":I.context=!0,I.contextRegex=new RegExp(I.regex),I.regex+="?";break;case"?":case"+":I.regex+=R;break;case"(":var Y=U(g,v,"(",")"),q=g.substring(v+1,Y);if(q.indexOf("<")===-1)y.regex="["+q+"m]";else throw{code:"S0402",stack:new Error().stack,value:q,offset:v};y.type="("+q+")",v=Y,D();break;case"<":if(I.type==="a"||I.type==="f"){var z=U(g,v,"<",">");I.subtype=g.substring(v+1,z),v=z}else throw{code:"S0401",stack:new Error().stack,value:I.type,offset:v};break}v++}var G="^"+x.map(function(W){return"("+W.regex+")"}).join("")+"$",M=new RegExp(G),S=function(W){var re;if(a.isFunction(W))re="f";else{var ge=typeof W;switch(ge){case"string":re="s";break;case"number":re="n";break;case"boolean":re="b";break;case"object":W===null?re="l":Array.isArray(W)?re="a":re="o";break;case"undefined":default:re="m"}}return re},V=function(W,re){for(var ge="^",X=0,ie=0;ie<x.length;ie++){ge+=x[ie].regex;var de=re.match(ge);if(de===null)throw{code:"T0410",stack:new Error().stack,value:W[X],index:X+1};X=de[0].length}throw{code:"T0410",stack:new Error().stack,value:W[X],index:X+1}};return{definition:g,validate:function(W,re){var ge="";W.forEach(function(ke){ge+=S(ke)});var X=M.exec(ge);if(X){var ie=[],de=0;return x.forEach(function(ke,Ve){var ye=W[de],be=X[Ve+1];if(be==="")if(ke.context&&ke.contextRegex){var ze=S(re);if(ke.contextRegex.test(ze))ie.push(re);else throw{code:"T0411",stack:new Error().stack,value:re,index:de+1}}else ie.push(ye),de++;else be.split("").forEach(function(ne){if(ke.type==="a"){if(ne==="m")ye=void 0;else{ye=W[de];var De=!0;if(typeof ke.subtype<"u"){if(ne!=="a"&&be!==ke.subtype)De=!1;else if(ne==="a"&&ye.length>0){var We=S(ye[0]);if(We!==ke.subtype.charAt(0))De=!1;else{var E=ye.filter(function(O){return S(O)!==We});De=E.length===0}}}if(!De)throw{code:"T0412",stack:new Error().stack,value:ye,index:de+1,type:c[ke.subtype]};ne!=="a"&&(ye=[ye])}ie.push(ye),de++}else ie.push(ye),de++})}),ie}V(W,ge)}}}return p})();r.exports=o},{"./utils":6}],6:[function(n,r,i){const a=(()=>{function o(z){var G=!1;if(typeof z=="number"&&(G=!isNaN(z),G&&!isFinite(z)))throw{code:"D1001",value:z,stack:new Error().stack};return G}function c(z){var G=!1;return Array.isArray(z)&&(G=z.filter(function(M){return typeof M!="string"}).length===0),G}function p(z){var G=!1;return Array.isArray(z)&&(G=z.filter(function(M){return!o(M)}).length===0),G}function g(){var z=[];return z.sequence=!0,arguments.length===1&&z.push(arguments[0]),z}function v(z){return z.sequence===!0&&Array.isArray(z)}function x(z){return z&&(z._jsonata_function===!0||z._jsonata_lambda===!0)||typeof z=="function"}function y(z){var G=typeof z.arity=="number"?z.arity:typeof z.implementation=="function"?z.implementation.length:typeof z.length=="number"?z.length:z.arguments.length;return G}function I(z){return z&&z._jsonata_lambda===!0}var R=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function D(z){return typeof z=="object"&&z!==null&&R in z&&"next"in z&&typeof z.next=="function"}function U(z,G){if(z===G)return!0;if(typeof z=="object"&&typeof G=="object"&&z!==null&&G!==null){if(Array.isArray(z)&&Array.isArray(G)){if(z.length!==G.length)return!1;for(var M=0;M<z.length;M++)if(!U(z[M],G[M]))return!1;return!0}var S=Object.getOwnPropertyNames(z),V=Object.getOwnPropertyNames(G);if(S.length!==V.length)return!1;for(S=S.sort(),V=V.sort(),M=0;M<S.length;M++)if(S[M]!==V[M])return!1;for(M=0;M<S.length;M++){var W=S[M];if(!U(z[W],G[W]))return!1}return!0}return!1}function Y(z){return typeof z=="object"&&z!==null&&"then"in z&&typeof z.then=="function"}function q(z){var G=[];for(let M of z)G.push(M);return G}return{isNumeric:o,isArrayOfStrings:c,isArrayOfNumbers:p,createSequence:g,isSequence:v,isFunction:x,isLambda:I,isIterable:D,getFunctionArity:y,isDeepEqual:U,stringToArray:q,isPromise:Y}})();r.exports=a},{}]},{},[3])(3)})})(ws)),ws.exports}var b0=g0();const Zu=Ws(b0);var cr={exports:{}};const lo=wd(xd),v0="16.5.0",y0={version:v0};var Oc;function w0(){if(Oc)return cr.exports;Oc=1;var e={};const t=lo,n=lo,r=lo,i=lo,o=y0.version,c=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function p(S){const V={};let W=S.toString();W=W.replace(/\r\n?/mg,`
`);let re;for(;(re=c.exec(W))!=null;){const ge=re[1];let X=re[2]||"";X=X.trim();const ie=X[0];X=X.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),ie==='"'&&(X=X.replace(/\\n/g,`
`),X=X.replace(/\\r/g,"\r")),V[ge]=X}return V}function g(S){const V=R(S),W=M.configDotenv({path:V});if(!W.parsed){const ie=new Error(`MISSING_DATA: Cannot parse ${V} for an unknown reason`);throw ie.code="MISSING_DATA",ie}const re=y(S).split(","),ge=re.length;let X;for(let ie=0;ie<ge;ie++)try{const de=re[ie].trim(),ke=I(W,de);X=M.decrypt(ke.ciphertext,ke.key);break}catch(de){if(ie+1>=ge)throw de}return M.parse(X)}function v(S){console.log(`[dotenv@${o}][WARN] ${S}`)}function x(S){console.log(`[dotenv@${o}][DEBUG] ${S}`)}function y(S){return S&&S.DOTENV_KEY&&S.DOTENV_KEY.length>0?S.DOTENV_KEY:e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:""}function I(S,V){let W;try{W=new URL(V)}catch(de){if(de.code==="ERR_INVALID_URL"){const ke=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw ke.code="INVALID_DOTENV_KEY",ke}throw de}const re=W.password;if(!re){const de=new Error("INVALID_DOTENV_KEY: Missing key part");throw de.code="INVALID_DOTENV_KEY",de}const ge=W.searchParams.get("environment");if(!ge){const de=new Error("INVALID_DOTENV_KEY: Missing environment part");throw de.code="INVALID_DOTENV_KEY",de}const X=`DOTENV_VAULT_${ge.toUpperCase()}`,ie=S.parsed[X];if(!ie){const de=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${X} in your .env.vault file.`);throw de.code="NOT_FOUND_DOTENV_ENVIRONMENT",de}return{ciphertext:ie,key:re}}function R(S){let V=null;if(S&&S.path&&S.path.length>0)if(Array.isArray(S.path))for(const W of S.path)t.existsSync(W)&&(V=W.endsWith(".vault")?W:`${W}.vault`);else V=S.path.endsWith(".vault")?S.path:`${S.path}.vault`;else V=n.resolve(process.cwd(),".env.vault");return t.existsSync(V)?V:null}function D(S){return S[0]==="~"?n.join(r.homedir(),S.slice(1)):S}function U(S){!!(S&&S.debug)&&x("Loading env from encrypted .env.vault");const W=M._parseVault(S);let re=e;return S&&S.processEnv!=null&&(re=S.processEnv),M.populate(re,W,S),{parsed:W}}function Y(S){const V=n.resolve(process.cwd(),".env");let W="utf8";const re=!!(S&&S.debug);S&&S.encoding?W=S.encoding:re&&x("No encoding is specified. UTF-8 is used by default");let ge=[V];if(S&&S.path)if(!Array.isArray(S.path))ge=[D(S.path)];else{ge=[];for(const ke of S.path)ge.push(D(ke))}let X;const ie={};for(const ke of ge)try{const Ve=M.parse(t.readFileSync(ke,{encoding:W}));M.populate(ie,Ve,S)}catch(Ve){re&&x(`Failed to load ${ke} ${Ve.message}`),X=Ve}let de=e;return S&&S.processEnv!=null&&(de=S.processEnv),M.populate(de,ie,S),X?{parsed:ie,error:X}:{parsed:ie}}function q(S){if(y(S).length===0)return M.configDotenv(S);const V=R(S);return V?M._configVault(S):(v(`You set DOTENV_KEY but you are missing a .env.vault file at ${V}. Did you forget to build it?`),M.configDotenv(S))}function z(S,V){const W=Buffer.from(V.slice(-64),"hex");let re=Buffer.from(S,"base64");const ge=re.subarray(0,12),X=re.subarray(-16);re=re.subarray(12,-16);try{const ie=i.createDecipheriv("aes-256-gcm",W,ge);return ie.setAuthTag(X),`${ie.update(re)}${ie.final()}`}catch(ie){const de=ie instanceof RangeError,ke=ie.message==="Invalid key length",Ve=ie.message==="Unsupported state or unable to authenticate data";if(de||ke){const ye=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw ye.code="INVALID_DOTENV_KEY",ye}else if(Ve){const ye=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw ye.code="DECRYPTION_FAILED",ye}else throw ie}}function G(S,V,W={}){const re=!!(W&&W.debug),ge=!!(W&&W.override);if(typeof V!="object"){const X=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw X.code="OBJECT_REQUIRED",X}for(const X of Object.keys(V))Object.prototype.hasOwnProperty.call(S,X)?(ge===!0&&(S[X]=V[X]),re&&x(ge===!0?`"${X}" is already defined and WAS overwritten`:`"${X}" is already defined and was NOT overwritten`)):S[X]=V[X]}const M={configDotenv:Y,_configVault:U,_parseVault:g,config:q,decrypt:z,parse:p,populate:G};return cr.exports.configDotenv=M.configDotenv,cr.exports._configVault=M._configVault,cr.exports._parseVault=M._parseVault,cr.exports.config=M.config,cr.exports.decrypt=M.decrypt,cr.exports.parse=M.parse,cr.exports.populate=M.populate,cr.exports=M,cr.exports}var x0=w0();const $l=async e=>{const n=await(await un.getWorkspace()).getResource(e);return n||bt("Invalid URL: "+e),await n.getContents({uri:!0})},Ju=e=>e.startsWith("blob:")||e.startsWith("http:")||e.startsWith("https:"),_l={},Do=async(e,t)=>{const n=await Zu(`[**[${t}!='']]`).evaluate(e);for(const r of n){const i=r[t];if(Ju(i))continue;const a=await $l(i);_l[a]=r[t],r[t]=a}},Sa=e=>_l[e],Us=async(e,t)=>{const n=await Zu(`[**[${t}!='']]`).evaluate(e);for(const r of n){const i=r[t];!i||!i.startsWith("blob:")||(r[t]=_l[i])}},Qu=e=>{var n;Ct.registerContribution("catalog.root",{label:e.label,icon:e.icon,contributionId:e.contributionId});const t=e.contributionId??e.label;(n=e.items)==null||n.forEach(r=>{Ct.registerContribution(t,{label:r.label,icon:r.icon,contributionId:r.contributionId});const a=import.meta.resolve("/.");r.items.forEach(o=>{var p;const c={label:o.label,icon:o.icon,state:{...o.state}};(p=c.state)!=null&&p.url&&(c.state.url=c.state.url.replace("${baseURL}/",a)),Ct.registerContribution(r.contributionId,c)})})},js=e=>{Object.entries(e).forEach(([t,n])=>{const r=/\${([a-zA-Z0-9_]+)}/g;e[t]=n.replace(r,(i,a)=>{const o=e[a];return o!==void 0?o:i})})},ed=async(...e)=>{const t=await un.getWorkspace(),n={};for(const r of e){const i=await(t==null?void 0:t.getResource(r));if(!i)continue;const a=await i.getContents(),o=x0.parse(a||"");js(o),Object.assign(n,o)}return js(n),n},k0=Object.freeze(Object.defineProperty({__proto__:null,getOriginalUri:Sa,isAbsoluteResource:Ju,loadEnvs:ed,registerCatalog:Qu,replaceUris:Do,replaceVars:js,revertBlobUris:Us,toBlobUri:$l},Symbol.toStringTag,{value:"Module"}));kd.resolveUrl=e=>$l(e);Qr.registerEditorInputHandler({canHandle:e=>e instanceof Zi&&e.getName().endsWith(".geospace"),handle:async e=>{const t={title:e.getName(),data:e,key:e.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return t.widgetFactory=n=>_`
            <gs-map id="${n}" .input="${t}"></gs-map>`,t}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I0=na(class extends ra{constructor(){super(...arguments),this.key=Mt}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Gs(e),this.key=t),n}});function Ni(e,t){return e.layers.find(n=>n.uuid===t)}function Fi(e,t){return e.layers.findIndex(n=>n.uuid===t)}function C0(e,t){return e.controls.findIndex(n=>n.uuid===t)}function S0(e,t){return e.overlays.findIndex(n=>n.uuid===t)}const E0=e=>new Proxy({},{get:(t,n)=>async(...r)=>{for(const i of e)await i[n](...r)}});var Vn=(e=>(e[e.LOADED=0]="LOADED",e[e.LAYER_ADDED=1]="LAYER_ADDED",e[e.LAYER_DELETED=2]="LAYER_DELETED",e[e.LAYER_UPDATED=3]="LAYER_UPDATED",e[e.FEATURE_SELECTED=4]="FEATURE_SELECTED",e))(Vn||{});const hr=xi(ch),A0=`:root,
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
`,$0="iframe-map-renderer.html";class _0{constructor(t,n){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=t,this.env=n,this.operations=this.createProxy(this)}createProxy(t){return new Proxy({},{get(n,r){return async(...i)=>await t.sendMessage(r,{...i})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(t){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=$0,this.targetElement=typeof t=="string"?document.querySelector(t):t,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(t){await this.sendMessage("modelToUI",t??this.gsMap)}getOperations(){return this.operations}getViewExtent(){return[0,0,0,0]}setOnDirty(t){this.onDirtyCallback=t}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(t){this.onSyncCallback=t}setOnClick(t){this.onClickCallback=t}triggerSync(t){this.onSyncCallback&&this.onSyncCallback(t)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(t,n){try{const{toBlobUri:r}=await Pt(async()=>{const{toBlobUri:a}=await Promise.resolve().then(()=>k0);return{toBlobUri:a}},void 0),i=await r(n);this.iframe.contentWindow.postMessage({id:t,success:!0,assetUrl:i},"*")}catch(r){this.iframe.contentWindow.postMessage({id:t,success:!1,error:r instanceof Error?r.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=t=>{var c,p,g,v;if(t.source!==((c=this.iframe)==null?void 0:c.contentWindow))return;const{id:n,result:r,error:i,type:a,event:o}=t.data;if(n!==void 0&&this.pendingMessages.has(n)){const{resolve:x,reject:y}=this.pendingMessages.get(n);this.pendingMessages.delete(n),i?y(new Error(i)):x(r)}a==="dirty"?(p=this.onDirtyCallback)==null||p.call(this):a==="sync"?(g=this.onSyncCallback)==null||g.call(this,o):a==="iframeClicked"?(v=this.onClickCallback)==null||v.call(this):a==="resolveAsset"&&this.handleAssetResolution(n,t.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(t=>{const n=r=>{var i;r.source===((i=this.iframe)==null?void 0:i.contentWindow)&&r.data.type==="rendererReady"&&(window.removeEventListener("message",n),t())};window.addEventListener("message",n)})}async sendMessage(t,n){if(!this.iframe)throw new Error("Iframe not initialized");const r=++this.messageId;return new Promise((i,a)=>{this.pendingMessages.set(r,{resolve:i,reject:a}),this.iframe.contentWindow.postMessage({id:r,method:t,params:n},"*"),setTimeout(()=>{this.pendingMessages.has(r)&&(this.pendingMessages.delete(r),a(new Error("Message timeout")))},5e3)})}}class O0{constructor(t,n){this.gsMap=t,this.renderer=n}triggerDirty(){this.renderer.triggerDirty()}async setZoom(t){this.gsMap.view.zoom=t,this.triggerDirty()}async setCenter(t){this.gsMap.view.center=t,this.triggerDirty()}async switchColorMode(t){this.gsMap.view.colorMode=t,this.triggerDirty()}async addLayer(t,n){n?this.gsMap.layers.unshift(t):this.gsMap.layers.push(t),this.triggerDirty()}async deleteLayer(t){const n=Fi(this.gsMap,t);n>=0&&(this.gsMap.layers.splice(n,1),this.triggerDirty())}async renameLayer(t,n){const r=Ni(this.gsMap,t);r&&(r.name=n,this.triggerDirty())}async moveLayer(t,n){const r=Fi(this.gsMap,t);if(r<0)return;let i;if(n){if(i=Fi(this.gsMap,n),i<0||r===i)return}else i=r>0?r-1:r+1;if(i>=0&&i<this.gsMap.layers.length&&r!==i){const[a]=this.gsMap.layers.splice(r,1);this.gsMap.layers.splice(i,0,a),this.triggerDirty()}}async setLayerVisible(t,n){const r=Ni(this.gsMap,t);r&&(r.visible=n,this.triggerDirty())}async addControlFromModule(t){this.gsMap.controls.push({src:t,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(t){const n=C0(this.gsMap,t);n>=0&&(this.gsMap.controls.splice(n,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(t,n){this.gsMap.overlays.push({src:t,position:n||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(t){const n=S0(this.gsMap,t);n>=0&&(this.gsMap.overlays.splice(n,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(t,n){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class T0{constructor(t){this.source=t}async setZoom(t){}async setCenter(t){}async switchColorMode(t){}async addLayer(t,n){hr.set({part:this.source,event:Vn.LAYER_ADDED})}async deleteLayer(t){hr.set({part:this.source,event:Vn.LAYER_DELETED})}async renameLayer(t,n){hr.set({part:this.source,event:Vn.LAYER_UPDATED})}async moveLayer(t,n){hr.set({part:this.source,event:Vn.LAYER_UPDATED})}async setLayerVisible(t,n){}async addControlFromModule(t){}async removeControl(t){}async addOverlayFromModule(t,n){}async removeOverlay(t){}async enableDrawing(t,n){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){hr.set({part:this.source,event:Vn.LAYER_UPDATED})}}var L0=Object.defineProperty,D0=Object.getOwnPropertyDescriptor,Ha=(e,t,n,r)=>{for(var i=r>1?void 0:r?D0(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&L0(t,n,i),i};const P0=za("GsMapEditor");let Gt=class extends Jt{constructor(){super(),this.mapContainer=pi(),this.isFirstConnection=!0,this.interactionMode="none",this.chatContext={history:[]},this.commandStack=new Uc}getOperations(){return this.operations}onMapChanged({part:e,event:t}){e===this&&(t===Vn.LAYER_ADDED||t===Vn.LAYER_DELETED||t===Vn.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const e=this.getGsMap(),t=(e==null?void 0:e.layers.filter(r=>{var o;const i=r.type===zl.VECTOR,a=((o=r.source)==null?void 0:o.type)===Jn.Features;return i&&a}))||[],n=this.activeDrawingLayerUuid!==void 0;return _`
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
            
            ${yn(t.length>0,()=>{const r=t.map(i=>`${i.uuid}:${i.name}`).join("|");return _`
                ${I0(r,_`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${i=>{var o;const a=i.target.value||void 0;this.activeDrawingLayerUuid=a,(a===void 0||i.target.value==="")&&((o=this.operations)==null||o.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${t.map(i=>_`
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
        `}async connectedCallback(){var e;if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}(e=this.renderer)!=null&&e.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{et.set(this)}))}async doInitUI(){var c,p,g;const e=(c=this.input)==null?void 0:c.data,t=await ed(".env","envs/.env","env","envs/env","default.env","envs/default.env","dev.env","envs/dev.env");t.BUILD_TIME=new Date;const n=await e.getContents();let r=n&&n.trim()?JSON.parse(n):Rc;r=this.migrateGsMap(r),Ml(r),await Do(r,"url"),await Do(r,"src"),this.gsMap=r,r.view&&(this.initialView={center:[...r.view.center],zoom:r.view.zoom}),this.renderer=new _0(r,t);const i=this.renderer.getOperations(),a=new O0(r,this.renderer),o=new T0(this);this.operations=E0([a,i,o]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(v=>{var x;if(this.gsMap){switch(v.type){case"viewChanged":this.gsMap.view.center=v.view.center,this.gsMap.view.zoom=v.view.zoom,v.view.rotation!==void 0&&v.view.rotation!==0&&(this.gsMap.view.rotation=v.view.rotation);break;case"featuresChanged":const y=Ni(this.gsMap,v.layerUuid);y&&((x=y.source)==null?void 0:x.type)===Jn.Features&&(y.source.features=v.features);break;case"featureSelected":const I={feature:v.feature,layerUuid:v.layerUuid,metrics:v.metrics};console.info("Feature metrics:",I.metrics),hr.set({part:this,event:Vn.FEATURE_SELECTED,payload:I});break;case"featureDeselected":console.info("Feature deselected"),hr.set({part:this,event:Vn.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),(g=(p=this.renderer).setOnClick)==null||g.call(p,()=>{et.set(this)}),this.updateToolbar(),hr.set({part:this,event:Vn.LOADED})}catch(v){console.error("Failed to render map:",v),bt(`Failed to render map: ${v.message}`)}}migrateGsMap(e){const t={...e};let n=!1;return e.view||(console.log("Creating view field and migrating old properties..."),n=!0,t.view={},e.center!==void 0&&(t.view.center=e.center,delete t.center),e.zoom!==void 0&&(t.view.zoom=e.zoom,delete t.zoom),e.projection!==void 0&&(t.view.projection=e.projection,delete t.projection),t.view.center===void 0&&(t.view.center=[0,0]),t.view.zoom===void 0&&(t.view.zoom=0),t.view.projection===void 0&&(t.view.projection="EPSG:3857")),(!e.styles||Object.keys(e.styles).length===0)&&(console.log("Adding default styles to map..."),n=!0,t.styles={...Id}),(!e.styleRules||e.styleRules.length===0)&&(console.log("Adding default style rules to map..."),n=!0,t.styleRules=[...Cd]),n&&console.log("Map migration completed"),t}getGsMap(){return this.gsMap}async save(){var e;if(!this.renderer){bt("Map not initialized");return}try{if(!this.gsMap){bt("Map not initialized");return}const t=JSON.parse(JSON.stringify(this.gsMap));await Us(t,"url"),await Us(t,"src"),(e=this.input)==null||e.data.saveContents(JSON.stringify(t,null,2)),this.markDirty(!1)}catch(t){bt(`Save failed: ${t.message}`)}}get mapOperations(){return this.operations}edit(){wn("not yet implemented")}async refresh(){if(!this.renderer){P0.error("Map not initialized");return}await this.renderer.modelToUI()}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){var e;this.activeDrawingLayerUuid&&(await((e=this.operations)==null?void 0:e.enableDrawing("Point",this.activeDrawingLayerUuid)),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){var e;this.activeDrawingLayerUuid&&(await((e=this.operations)==null?void 0:e.enableDrawing("LineString",this.activeDrawingLayerUuid)),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){var e;this.activeDrawingLayerUuid&&(await((e=this.operations)==null?void 0:e.enableDrawing("Polygon",this.activeDrawingLayerUuid)),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){var e;await((e=this.operations)==null?void 0:e.enableFeatureSelection()),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){var e;if(this.interactionMode==="select")try{await((e=this.operations)==null?void 0:e.deleteSelectedFeatures()),wn("Selected features deleted")}catch(t){bt(t.message)}}async handleCreateDrawingLayer(){var r,i;if(!this.gsMap){bt("Map not initialized");return}const e=await Fa("Enter name for new drawing layer:","Drawing Layer");if(!e)return;const t=Ml({name:e,type:zl.VECTOR,source:{type:Jn.Features,features:[]},visible:!0});await((r=this.operations)==null?void 0:r.addLayer(t,!1));const n=(i=this.gsMap)==null?void 0:i.layers.find(a=>a.uuid===t.uuid);n!=null&&n.uuid&&(this.activeDrawingLayerUuid=n.uuid),await this.updateComplete,this.updateToolbar(),wn(`Created drawing layer: ${e}`)}doClose(){var e;(e=this.renderer)==null||e.destroy(),this.renderer=void 0,this.input=void 0}render(){return _`
            <div class="gc-map-container" ${fi(this.mapContainer)}>
            </div>
        `}};Gt.styles=[Pc(A0),cn`
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
    `];Ha([f({attribute:!1})],Gt.prototype,"input",2);Ha([f({type:String})],Gt.prototype,"activeDrawingLayerUuid",2);Ha([f({type:String})],Gt.prototype,"interactionMode",2);Ha([Ko(hr)],Gt.prototype,"onMapChanged",1);Gt=Ha([ue("gs-map")],Gt);var R0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,Jo=(e,t,n,r)=>{for(var i=r>1?void 0:r?z0(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&R0(t,n,i),i};let ta=class extends Jt{onPartChanged(e){e==this||e==this.mapEditor||!(e instanceof Gt)||(this.mapEditor=e,this.updateLater())}onMapChanged({part:e}){e==this.mapEditor&&this.updateLater()}toggleVisible(e){var a,o;const t=this.mapEditor.getGsMap(),n=Ni(t,e);if(!n)return;const i=!(n.visible!==!1);(o=(a=this.mapEditor)==null?void 0:a.mapOperations)==null||o.setLayerVisible(e,i),this.updateLater()}async confirmAction(e,t){await ia(e)&&t()}selectLayer(e){this.selectedLayerUuid=e,this.updateToolbar(),this.updateContextMenu()}renameLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const n=this.mapEditor.getGsMap();if(!Ni(n,t))return;const i=Fi(n,t),a=Fe.createExecutionContext(this,{index:i+1});a.activeEditor=this.mapEditor,Fe.execute("rename_layer",a)}deleteLayer(e){if(!this.mapEditor)return;const t=e||this.selectedLayerUuid;if(!t)return;const n=this.mapEditor.getGsMap(),r=Ni(n,t);r&&this.confirmAction(`Delete layer "${r.name||"Layer"}"?`,()=>this.withRefresh(()=>{var i,a;return(a=(i=this.mapEditor)==null?void 0:i.mapOperations)==null?void 0:a.deleteLayer(t)}))}moveLayerUp(e){var i;if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const n=Fi(t,e);if(n<=0)return;const r=(i=t.layers[n-1])==null?void 0:i.uuid;r&&(this.withRefresh(()=>{var a,o;return(o=(a=this.mapEditor)==null?void 0:a.mapOperations)==null?void 0:o.moveLayer(e,r)}),this.selectedLayerUuid=r)}moveLayerDown(e){var i;if(!this.mapEditor)return;const t=this.mapEditor.getGsMap();if(!t)return;const n=Fi(t,e);if(n<0||n>=t.layers.length-1)return;const r=(i=t.layers[n+1])==null?void 0:i.uuid;r&&(this.withRefresh(()=>{var a,o;return(o=(a=this.mapEditor)==null?void 0:a.mapOperations)==null?void 0:o.moveLayer(e,r)}),this.selectedLayerUuid=r)}renderToolbar(){const e=this.selectedLayerUuid!==void 0;return _`
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
        `}renderContextMenu(){const e=this.selectedLayerUuid!==void 0;return _`
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
        `}render(){return yn(!this.mapEditor,()=>_`
                    <k-no-content message="Select a map."></k-no-content>`,()=>{var e,t,n,r,i,a,o,c;return _`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${(e=this.mapEditor.getGsMap())==null?void 0:e.layers.map((p,g)=>_`
                            <wa-tree-item @click="${()=>p.uuid&&this.selectLayer(p.uuid)}" 
                                          class="${this.selectedLayerUuid===p.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${p.name??`Layer ${g+1}`}${g==0?_`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-action size="small"
                                                  icon="${p.visible!==!1?"eye":"eye-slash"}"
                                                  title="${p.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>p.uuid&&this.toggleVisible(p.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${g===0}"
                                                  .action=${()=>p.uuid&&this.moveLayerUp(p.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${g===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>p.uuid&&this.moveLayerDown(p.uuid)}>
                                        </k-action>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${(n=(t=this.mapEditor)==null?void 0:t.getGsMap())==null?void 0:n.controls.map(p=>_`
                            <wa-tree-item>
                                <span>${Sa(p.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{p.uuid&&this.confirmAction(`Delete control "${Sa(p.src)}"?`,()=>this.withRefresh(()=>{var g,v;return(v=(g=this.mapEditor)==null?void 0:g.mapOperations)==null?void 0:v.removeControl(p.uuid)}))}}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${(i=(r=this.mapEditor)==null?void 0:r.getGsMap())==null?void 0:i.overlays.map(p=>_`
                            <wa-tree-item>
                                <span>${Sa(p.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{p.uuid&&this.confirmAction(`Delete overlay "${Sa(p.src)}"?`,()=>this.withRefresh(()=>{var g,v;return(v=(g=this.mapEditor)==null?void 0:g.mapOperations)==null?void 0:v.removeOverlay(p.uuid)}))}}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="highlighter"></k-icon> Styles
                        <wa-tree-item>
                            <span>Defined Styles: ${Object.keys(((a=this.mapEditor.getGsMap())==null?void 0:a.styles)||{}).length}</span>
                        </wa-tree-item>
                        <wa-tree-item>
                            <span>Style Rules: ${((c=(o=this.mapEditor.getGsMap())==null?void 0:o.styleRules)==null?void 0:c.length)||0}</span>
                        </wa-tree-item>
                    </wa-tree-item>
                </wa-tree>
            `})}};ta.styles=cn`
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
    `;Jo([pe()],ta.prototype,"selectedLayerUuid",2);Jo([Ko(et)],ta.prototype,"onPartChanged",1);Jo([Ko(hr)],ta.prototype,"onMapChanged",1);ta=Jo([ue("gs-map-props")],ta);var M0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,td=(e,t,n,r)=>{for(var i=r>1?void 0:r?N0(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&M0(t,n,i),i};const F0="catalog.root";let ei=class extends Jt{constructor(){super(...arguments),this.treeRef=pi()}doBeforeUI(){const e=Ct.getContributions(F0);this.rootNodes=this.toTreeNodes(e)}renderToolbar(){const e=et.get()instanceof ei&&On.get()!==void 0;return _`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!e} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(e){return e.map(t=>{const n={data:t.state,icon:t.icon,label:t.label,leaf:!1};if(t.contributionId){const r=Ct.getContributions(t.contributionId);n.leaf=r.length===0,n.children=this.toTreeNodes(r)}return n})}onItemDblClicked(e){const t=e.currentTarget.model.data.url;this.executeCommand("checkout",{url:t})}onSelectionChanged(e){const t=e.detail.selection[0].model;On.set(t.data)}setAllExpanded(e){const t=this.treeRef.value;t&&t.querySelectorAll("wa-tree-item").forEach(n=>{n.expanded=e})}refresh(){this.requestUpdate()}createTreeItems(e,t=!1){var n;return e?_`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${e} ?expanded=${t}>
                <span><k-icon name="${e.icon}"></k-icon> ${e.label}</span>
                ${(n=e.children)==null?void 0:n.map(r=>this.createTreeItems(r))}
            </wa-tree-item>`:_``}render(){var e;return _`
            <wa-tree ${fi(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${(e=this.rootNodes)==null?void 0:e.map(t=>this.createTreeItems(t,!0))}
            </wa-tree>
        `}};ei.styles=cn`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;td([pe()],ei.prototype,"rootNodes",2);ei=td([ue("gs-catalog")],ei);const q0="geo!space catalog",V0="earth",B0="catalog.root.geospace",U0=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],j0={label:q0,icon:V0,contributionId:B0,items:U0};Rt({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async e=>{let t=e.params&&e.params.url;if(!t){const r=On.get();if(!r||!("url"in r))return;t=r.url}const n=await un.getWorkspace();if(!n){bt("No workspace selected.");return}fetch(t,{method:"GET"}).then(r=>r.blob()).then(r=>{const i=new URL(t).pathname.split("/"),a=i[i.length-1];return n.getResource(a,{create:!0}).then(o=>o.saveContents(r,{contentType:Wu.BINARY}).then(()=>{wn("File checked out: "+a)}))}).catch(r=>{bt(r)})}}});Rt({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async e=>{const t=et.get();t instanceof ei&&t.refresh()}}});Rt({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async e=>{const t=et.get();t instanceof ei&&t.setAllExpanded(!0)}}});Rt({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async e=>{const t=et.get();t instanceof ei&&t.setAllExpanded(!1)}}});Qu(j0);const W0=za("GsCommandHandlers"),Nr=e=>e.activeEditor instanceof Gt,$i=e=>{const t=e.activeEditor;if(!(t instanceof Gt)||!t.getOperations())throw W0.error("GsMapEditor with renderer not available in context.source"),new Error("GsMapEditor with renderer not available in context.source");return t.getOperations()};Fe.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level, an interger between 0 and 12",required:!0}]},handler:{canExecute:Nr,execute:async e=>{await $i(e).setZoom(Number(e.params.zoom).valueOf())}}});Fe.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[]},handler:{canExecute:e=>et.get()instanceof Gt,execute:async e=>{var r;const t=et.get(),n=t.getGsMap();if(((r=n==null?void 0:n.view)==null?void 0:r.zoom)!==void 0){const i=t.mapOperations;await(i==null?void 0:i.setZoom(n.view.zoom+1))}}}});Fe.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[]},handler:{canExecute:e=>et.get()instanceof Gt,execute:async e=>{var r;const t=et.get(),n=t.getGsMap();if(((r=n==null?void 0:n.view)==null?void 0:r.zoom)!==void 0){const i=t.mapOperations;await(i==null?void 0:i.setZoom(n.view.zoom-1))}}}});Fe.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the map",required:!0},{name:"lon",description:"the longitude of the map",required:!0}]},handler:{canExecute:Nr,execute:async e=>{const t=$i(e),n=Sd([Number(e.params.lon).valueOf(),Number(e.params.lat).valueOf()]);await t.setCenter([n[0],n[1]])}}});Fe.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(Jn).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:Nr,execute:async e=>{var p;const t=$i(e),n=(p=e.params.source)==null?void 0:p.trim().toLowerCase(),r=e.params.url,i=Ed(n),a=(e==null?void 0:e.params)&&e.params.basemap==!0;let o;r&&(o=r.split("/").pop()),!o&&i&&(o=i);const c=Nl({name:o,type:Ad(n),source:Nl({type:i,url:r??$d(i)})});await Do(c,"url"),await t.addLayer(c,a)}}});Fe.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:Nr,execute:async e=>{const t=$i(e),r=e.activeEditor.getGsMap(),i=parseInt(e.params.index)-1;if(i<0||!r||i>=r.layers.length)return;const a=r.layers[i];a!=null&&a.uuid&&await t.deleteLayer(a.uuid)}}});Fe.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:Nr,execute:async e=>{var p;const t=$i(e),r=e.activeEditor.getGsMap(),i=parseInt(e.params.index)-1;if(i<0||!r||i>=r.layers.length)return;const a=r.layers[i];if(!(a!=null&&a.uuid))return;const o=a.name||`Layer ${i+1}`,c=((p=e.params)==null?void 0:p.newName)||await Fa(`Enter new name for "${o}":`,o);!c||c===o||await t.renameLayer(a.uuid,c)}}});Fe.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:Nr,execute:async e=>{var r;const t=e.source,n=(r=e.params)==null?void 0:r.mode;await t.switchColorMode(n)}}});Fe.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:Nr,execute:async e=>{const t=$i(e),n=e.params.src,r=e.params.position;await t.addOverlayFromModule(n,r)}}});Fe.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:Nr,execute:async e=>{const t=$i(e),n=e.params.src;await t.addControlFromModule(n)}}});Fe.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates",type:"number[]"}]},handler:{canExecute:Nr,execute:async e=>{const t=e.params.latlon,r=e.source.renderer.getViewExtent();if(!r)throw new Error("Failed to get view extent");let i=r;if(t||t===void 0){const{transformExtent:a}=await Pt(async()=>{const{transformExtent:o}=await import("./index-CGmBFeLm.js").then(c=>c.aa);return{transformExtent:o}},[]);i=a(r,"EPSG:3857","EPSG:4326"),[i[0],i[1]]=[i[1],i[0]],[i[2],i[3]]=[i[3],i[2]]}e.viewExtent=i}}});Fe.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:e=>et.get()instanceof Gt,execute:async e=>{const t=et.get().renderer;if(!t||!("toggleMobileView"in t))throw new Error("Mobile view toggle not available on this renderer");t.toggleMobileView()}}});Fe.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:e=>et.get()instanceof Gt,execute:async e=>{const t=et.get();t instanceof Gt&&await t.refresh()}}});Fe.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:e=>et.get()instanceof Gt,execute:async e=>{const t=et.get();t instanceof Gt&&await t.resetView()}}});Fe.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:e=>et.get()instanceof Gt,execute:async e=>{const n=et.get().mapOperations;n&&await n.switchColorMode()}}});var H0=Object.getOwnPropertyDescriptor,G0=(e,t,n,r)=>{for(var i=r>1?void 0:r?H0(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=o(i)||i);return i};let Tc=class extends kl{createRenderRoot(){return this}render(){return _`
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
                <k-toolbar id=${zu}></k-toolbar>
                <k-toolbar id=${gv}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${ua}></k-toolbar>
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
                    <k-tabs id="${qs}"></k-tabs>
                    <k-tabs id="${Fu}"></k-tabs>
                </k-resizable-grid>
                
                <!-- CENTER: Editor + Bottom Panel -->
                <k-resizable-grid 
                    id="center-layout" 
                    orientation="vertical" 
                    sizes="80%, 20%">
                    
                    <!-- Editor Area (fixed, never moves) -->
                    <k-tabs id="${Ri}"></k-tabs>
                    
                    <!-- Bottom Panel (terminal, output, etc.) -->
                    <k-tabs id="${Vu}"></k-tabs>
                </k-resizable-grid>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${qu}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${Mu}></k-toolbar>
                <k-toolbar id=${Il}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Nu}></k-toolbar>
            </div>
        `}};Tc=G0([ue("gs-app")],Tc);const K0=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
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
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,Y0=`# 🌐 geo!space
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

**Happy mapping! 🗺️✨**`,Lc=za("GeoSpaceApp"),X0={".geojson":Jn.GeoJSON,".json":Jn.GeoJSON,".kml":Jn.KML,".gpx":Jn.GPX,".tif":Jn.GeoTIFF,".tiff":Jn.GeoTIFF,".geotiff":Jn.GeoTIFF},nd=e=>{const t=e.getName().toLowerCase();for(const[n,r]of Object.entries(X0))if(t.endsWith(n))return r;return null},Z0=e=>nd(e)!==null,$n={id:"geospace",name:"geo!space",version:Fl,description:"A geospatial IDE for working with spatial data",metadata:{github:{owner:"erdalkaraca",repo:"geospace"}},extensions:["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage","system.pythonpackagemanager"],contributions:{ui:[{target:zu,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:qs,name:"filebrowser",label:"Workspace",icon:"folder-open",component:e=>_`<k-filebrowser id="${e}"></k-filebrowser>`},{target:qs,name:"catalog",label:"Catalog",icon:"book",component:e=>_`<gs-catalog id="${e}"></gs-catalog>`},{target:Fu,name:"map-props",label:"Map Properties",icon:"fg map-options",component:e=>_`<gs-map-props id="${e}"></gs-map-props>`},{target:qu,name:"assistant",label:"AI",icon:"robot",component:e=>_`<k-aiassist id="${e}"></k-aiassist>`},{target:Vu,name:"log-terminal",label:"Log",icon:"list",component:e=>_`<k-log-terminal id="${e}"></k-log-terminal>`},{target:Mu,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:Nu,label:`v${Fl}`,icon:"circle-info",command:"show_version_info",showLabel:!0},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const e=On.get();return e instanceof Zi?!Z0(e):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_geospace_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>Pt(()=>import("./mapbuilder-extension-2jolkmX0.js"),__vite__mapDeps([17,1])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>Pt(()=>import("./style-editor-extension-ATakL9d0.js"),__vite__mapDeps([18,1])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>Pt(()=>import("./overpass-extension-Wif01N3a.js"),__vite__mapDeps([19,1])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>Pt(()=>import("./gtfs-extension-CRXVdq8K.js"),__vite__mapDeps([20,1])),icon:"map-location-dot"}]},async initialize(){Ct.registerContribution(Wa,{label:"App Support",description:"General app support",role:"appsupport",sysPrompt:()=>{const e=ft.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,installedAndEnabled:ft.isEnabled(n.id)})),t=`***Available Extensions:***
${JSON.stringify(e,null,2)}`;return`${K0}

${t}`},canHandle:({activeEditor:e})=>e===void 0,promptDecorator:async({userPrompt:e})=>un.getWorkspace().then(t=>{var i;const n={workspace:t==null?void 0:t.getName(),activeEditor:(i=Qr.getEditorArea())==null?void 0:i.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(n,null,2)}`}

${e}`})}),Rt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async e=>{if($n.version==="0.0.0"){await $s($n.name,`**Development Build**

${$n.description}`,!0);return}const n=await f0();if(n.length===0){await $s($n.name,`**Version:** ${$n.version}

${$n.description}`,!0);return}const r=n.findIndex(x=>x.tag_name===$n.version),i=r>=0?r:0;let a=i;const o=x=>{const y=n[x],I=y.tag_name===$n.version;let R=`**Version:** ${y.tag_name}`;I&&(R+=" (Current)"),R+=`

`;const D=new Date(y.published_at).toLocaleDateString();return R+=`**Released:** ${D}

`,!I&&m0($n.version,y.tag_name)&&(R+=`⚠️ **Update available**

`),y.body&&(R+=`---

${y.body}`),R},c=(x,y)=>{const I=[];return I.push({label:"← Previous",variant:"default",disabled:x===n.length-1,callback:()=>{if(x<n.length-1){a=x+1;const R=o(a),D=c(a,y),U=y.updateDialog;U&&U($n.name,R,D)}}}),I.push({label:"Next →",variant:"default",disabled:x===0,callback:()=>{if(x>0){a=x-1;const R=o(a),D=c(a,y),U=y.updateDialog;U&&U($n.name,R,D)}}}),I.push({label:"Close",variant:"primary",callback:()=>{}}),I},p=o(i),g=[],v=c(i,g);g.push(...v),await nu($n.name,p,g,!0)}}}),Rt({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async e=>{const t=On.get();if(!(t instanceof Zi))return;const n=nd(t);if(!n){Lc.warn(`Unsupported file type: ${t.getName()}`);return}const r=t.getWorkspacePath(),i=Fe.createExecutionContext(e.source,{source:n,url:r});await Fe.execute("add_layer",i)}}}),Rt({command:{id:"create_geospace_file",name:"Create GeoSpace Map File",description:"Creates a new .geospace map file",parameters:[]},handler:{execute:async()=>{const e={...Rc,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}};await Fe.execute("create_file",{params:{path:"map.geospace",contents:JSON.stringify(e,null,2),extension:".geospace",ask:!0}})}}}),Rt({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async e=>{const t=new Hu(Y0,"README.md");await Qr.loadEditor(t)}},contribution:{target:ua,icon:"question-circle",label:"Welcome"}}),Lc.info("geo!space is ready!")},render(){return _`<gs-app></gs-app>`}};Xo.loadApp($n,document.body);export{Mu as A,Ht as B,pr as C,Vs as D,za as E,Zi as F,Gt as G,Ai as K,Bv as P,zu as T,et as a,Qi as b,bt as c,pe as d,ue as e,uo as f,Rt as g,On as h,Vu as i,Jt as j,Dr as k,ed as l,at as m,f as n,_n as o,lv as p,gv as q,mn as r,or as s,wn as t,Wu as u,so as v,un as w,Qr as x,qt as y,Ct as z};
