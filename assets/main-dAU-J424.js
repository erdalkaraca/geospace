const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/git-extension-CmgMKs9q.js","assets/index-G4cLbRFh.js","assets/index-CyGQFstn.css","assets/pyterminal-extension-BkuwKy0w.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-DgfTBLZO.js","assets/p12-splitter-CYvP2w1x.js","assets/package-manager-extension-j3HmCTj7.js","assets/notebook-extension-Buzr8Hlo.js","assets/editor.main-DdRjGR0J.js","assets/editor-D6kYW_CN.css","assets/command-palette-extension-D68YuUgP.js","assets/download-extension-BwMOy2Vw.js","assets/unzip-extension-D5d5-KPK.js","assets/md-editor-extension-DhtAb1VF.js","assets/monaco-editor-extension-BtecokkN.js","assets/memory-usage-extension-CuEZHG1v.js","assets/webdav-extension-CUJBDRAW.js","assets/mapbuilder-extension-I5oACGzL.js","assets/style-editor-extension-zq3_PwMt.js","assets/overpass-extension-B7RptiVR.js","assets/gtfs-extension-BMrq2OZE.js"])))=>i.map(i=>d[i]);
var eo=Object.defineProperty;var to=(t,e,n)=>e in t?eo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ze=(t,e,n)=>to(t,typeof e!="symbol"?e+"":e,n);import{x as V,B as rr,c as Oi,g as ji,o as Rr,i as Ys,a as Rt,t as mt,b as no,n as Me,r as dt,e as Un,E as Lt,d as jn,f as Js,h as Zs,j as ro,p as io,v as Mn,k as yr,M as Ii,T as so,m as Qs,l as ao,q as Kt,s as Xs,_ as ft,u as oo,w as lo,y as co,z as uo,G as bs,A as sn,D as ea,C as ws,F as po,H as ho,I as fo,J as mo,K as Is,L as go,N as vo}from"./index-G4cLbRFh.js";const xs="0.12.27";class Bi{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,n){var i;return e[n]||((i=this.parent)==null?void 0:i.getProxy()[n])}set(e,n,i){e[n]=i}put(e,n){this.variables[e]=n}getProxy(){return this.proxy}createChild(e={}){const n=new Bi(e);return n.parent=this,this.children.push(n),n}getChildren(){return this.children}getParent(){return this.parent}destroy(){var n,i;const e=(n=this.parent)==null?void 0:n.children.indexOf(this);e!==void 0&&e>=0&&((i=this.parent)==null||i.children.splice(e,1)),this.parent=void 0}}const Mt=new Bi({}),an=Mt.createChild({});an.put("html",V);an.put("render",rr);const ks={debug:0,info:1,warning:2,error:3};let yo="debug";const Zn={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let ti=null;const Ti=[];function br(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class bo{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,n){Qn(this.source,e,n)}}function wo(t){return ks[t]>=ks[yo]}function Qn(t,e,n){wo(n)&&(ti?ti(t,e,n):(Ti.push({source:t,message:e,level:n}),Zn[n==="error"?"error":n==="warning"?"warn":n==="debug"?"debug":"log"](`[${t}] ${e}`)))}function Io(){console.log=function(...t){Zn.log.apply(console,t),Qn("Console",t.map(e=>br(e)).join(" "),"info")},console.info=function(...t){Zn.info.apply(console,t),Qn("Console",t.map(e=>br(e)).join(" "),"info")},console.warn=function(...t){Zn.warn.apply(console,t),Qn("Console",t.map(e=>br(e)).join(" "),"warning")},console.error=function(...t){Zn.error.apply(console,t),Qn("Console",t.map(e=>br(e)).join(" "),"error")},console.debug=function(...t){Zn.debug.apply(console,t),Qn("Console",t.map(e=>br(e)).join(" "),"debug")}}Io();function xo(t){for(ti=t;Ti.length>0;){const e=Ti.shift();e&&t(e.source,e.message,e.level)}}function ko(){ti=null}function Dr(t){return new bo(t)}const yt=Dr("System");Mt.put("logger",yt);var So=Object.defineProperty,Co=(t,e,n)=>e in t?So(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xi=(t,e,n)=>(Co(t,typeof e!="symbol"?e+"":e,n),n),Ao=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},ki=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Wr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Ss=(t,e,n)=>(Ao(t,e,"access private method"),n);/**
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
 */let ht=null,_r=!1,Zr=1;const ni=Symbol("SIGNAL");function Xn(t){const e=ht;return ht=t,e}function _o(){return ht}function Eo(){return _r}const Gi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ci(t){if(_r)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(ht===null)return;ht.consumerOnSignalRead(t);const e=ht.nextProducerIndex++;if(ir(ht),e<ht.producerNode.length&&ht.producerNode[e]!==t&&Pi(ht)){const n=ht.producerNode[e];ui(n,ht.producerIndexOfThis[e])}ht.producerNode[e]!==t&&(ht.producerNode[e]=t,ht.producerIndexOfThis[e]=Pi(ht)?ia(t,ht,e):0),ht.producerLastReadVersion[e]=t.version}function Oo(){Zr++}function na(t){if(!(!t.dirty&&t.lastCleanEpoch===Zr)){if(!t.producerMustRecompute(t)&&!Do(t)){t.dirty=!1,t.lastCleanEpoch=Zr;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Zr}}function ra(t){if(t.liveConsumerNode===void 0)return;const e=_r;_r=!0;try{for(const n of t.liveConsumerNode)n.dirty||Po(n)}finally{_r=e}}function To(){return(ht==null?void 0:ht.consumerAllowSignalWrites)!==!1}function Po(t){var e;t.dirty=!0,ra(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function Lo(t){return t&&(t.nextProducerIndex=0),Xn(t)}function Ro(t,e){if(Xn(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Pi(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)ui(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function Do(t){ir(t);for(let e=0;e<t.producerNode.length;e++){const n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(na(n),i!==n.version))return!0}return!1}function ia(t,e,n){var i;if(Wi(t),ir(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)t.producerIndexOfThis[s]=ia(t.producerNode[s],t,s)}return t.liveConsumerIndexOfThis.push(n),t.liveConsumerNode.push(e)-1}function ui(t,e){var n;if(Wi(t),ir(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(n=t.unwatched)==null||n.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)ui(t.producerNode[s],t.producerIndexOfThis[s])}const i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const s=t.liveConsumerIndexOfThis[e],o=t.liveConsumerNode[e];ir(o),o.producerIndexOfThis[s]=e}}function Pi(t){var e;return t.consumerIsAlwaysLive||(((e=t==null?void 0:t.liveConsumerNode)==null?void 0:e.length)??0)>0}function ir(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function Wi(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function sa(t){if(na(t),ci(t),t.value===Li)throw t.error;return t.value}function $o(t){const e=Object.create(No);e.computation=t;const n=()=>sa(e);return n[ni]=e,n}const Si=Symbol("UNSET"),Ci=Symbol("COMPUTING"),Li=Symbol("ERRORED"),No={...Gi,value:Si,dirty:!0,error:null,equal:ta,producerMustRecompute(t){return t.value===Si||t.value===Ci},producerRecomputeValue(t){if(t.value===Ci)throw new Error("Detected cycle in computations.");const e=t.value;t.value=Ci;const n=Lo(t);let i,s=!1;try{i=t.computation.call(t.wrapper),s=e!==Si&&e!==Li&&t.equal.call(t.wrapper,e,i)}catch(o){i=Li,t.error=o}finally{Ro(t,n)}if(s){t.value=e;return}t.value=i,t.version++}};/**
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
 */function zo(t){const e=Object.create(Bo);e.value=t;const n=()=>(ci(e),e.value);return n[ni]=e,n}function Uo(){return ci(this),this.value}function jo(t,e){To()||qo(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,Go(t))}const Bo={...Gi,equal:ta,value:void 0};function Go(t){t.version++,Oo(),ra(t)}/**
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
 */const At=Symbol("node");var fn;(t=>{var e,n,i,s;class o{constructor(v,b={}){Wr(this,n),xi(this,e);const S=zo(v)[ni];if(this[At]=S,S.wrapper=this,b){const y=b.equals;y&&(S.equal=y),S.watched=b[t.subtle.watched],S.unwatched=b[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Uo.call(this[At])}set(v){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Eo())throw new Error("Writes to signals not permitted during Watcher callback");const b=this[At];jo(b,v)}}e=At,n=new WeakSet,t.isState=h=>typeof h=="object"&&ki(n,h),t.State=o;class a{constructor(v,b){Wr(this,s),xi(this,i);const S=$o(v)[ni];if(S.consumerAllowSignalWrites=!0,this[At]=S,S.wrapper=this,b){const y=b.equals;y&&(S.equal=y),S.watched=b[t.subtle.watched],S.unwatched=b[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return sa(this[At])}}i=At,s=new WeakSet,t.isComputed=h=>typeof h=="object"&&ki(s,h),t.Computed=a,(h=>{var v,b,I,S;function y(R){let G,D=null;try{D=Xn(null),G=R()}finally{Xn(D)}return G}h.untrack=y;function C(R){var G;if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((G=R[At].producerNode)==null?void 0:G.map(D=>D.wrapper))??[]}h.introspectSources=C;function M(R){var G;if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called introspectSinks without a Signal argument");return((G=R[At].liveConsumerNode)==null?void 0:G.map(D=>D.wrapper))??[]}h.introspectSinks=M;function $(R){if(!(0,t.isComputed)(R)&&!(0,t.isState)(R))throw new TypeError("Called hasSinks without a Signal argument");const G=R[At].liveConsumerNode;return G?G.length>0:!1}h.hasSinks=$;function W(R){if(!(0,t.isComputed)(R)&&!(0,t.isWatcher)(R))throw new TypeError("Called hasSources without a Computed or Watcher argument");const G=R[At].producerNode;return G?G.length>0:!1}h.hasSources=W;class re{constructor(G){Wr(this,b),Wr(this,I),xi(this,v);let D=Object.create(Gi);D.wrapper=this,D.consumerMarkedDirty=G,D.consumerIsAlwaysLive=!0,D.consumerAllowSignalWrites=!1,D.producerNode=[],this[At]=D}watch(...G){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ss(this,I,S).call(this,G);const D=this[At];D.dirty=!1;const w=Xn(D);for(const q of G)ci(q[At]);Xn(w)}unwatch(...G){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ss(this,I,S).call(this,G);const D=this[At];ir(D);for(let w=D.producerNode.length-1;w>=0;w--)if(G.includes(D.producerNode[w].wrapper)){ui(D.producerNode[w],D.producerIndexOfThis[w]);const q=D.producerNode.length-1;if(D.producerNode[w]=D.producerNode[q],D.producerIndexOfThis[w]=D.producerIndexOfThis[q],D.producerNode.length--,D.producerIndexOfThis.length--,D.nextProducerIndex--,w<D.producerNode.length){const j=D.producerIndexOfThis[w],se=D.producerNode[w];Wi(se),se.liveConsumerIndexOfThis[j]=w}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[At].producerNode.filter(D=>D.dirty).map(D=>D.wrapper)}}v=At,b=new WeakSet,I=new WeakSet,S=function(R){for(const G of R)if(!(0,t.isComputed)(G)&&!(0,t.isState)(G))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=R=>ki(b,R),h.Watcher=re;function U(){var R;return(R=_o())==null?void 0:R.wrapper}h.currentComputed=U,h.watched=Symbol("watched"),h.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(fn||(fn={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo=Symbol("SignalWatcherBrand"),Vo=new FinalizationRegistry(({watcher:t,signal:e})=>{t.unwatch(e)}),Cs=new WeakMap;function pi(t){return t[Wo]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new fn.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new fn.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new fn.subtle.Watcher(function(){const n=Cs.get(this);n!==void 0&&(n._$Si===!1&&n.requestUpdate(),this.watch())});Cs.set(e,this),Vo.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(n=>n.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,n,i){this._$So=!0,super.requestUpdate(e,n,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(e){this._$Sh.add(e);const n=this._$So;this.requestUpdate(),this._$So=n}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */fn.State;fn.Computed;const Wn=(t,e)=>new fn.State(t,e);var Cr={exports:{}},Ho=Cr.exports,As;function Ko(){return As||(As=1,function(t,e){(function(n,i){var s={};n.PubSub?(s=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=s,i(s)),t!==void 0&&t.exports&&(e=t.exports=s),e.PubSub=s,t.exports=e=s})(typeof window=="object"&&window||Ho||Oi,function(n){var i={},s=-1,o="*";function a($){var W;for(W in $)if(Object.prototype.hasOwnProperty.call($,W))return!0;return!1}function h($){return function(){throw $}}function v($,W,re){try{$(W,re)}catch(U){setTimeout(h(U),0)}}function b($,W,re){$(W,re)}function I($,W,re,U){var R=i[W],G=U?b:v,D;if(Object.prototype.hasOwnProperty.call(i,W))for(D in R)Object.prototype.hasOwnProperty.call(R,D)&&G(R[D],$,re)}function S($,W,re){return function(){var R=String($),G=R.lastIndexOf(".");for(I($,$,W,re);G!==-1;)R=R.substr(0,G),G=R.lastIndexOf("."),I($,R,W,re);I($,o,W,re)}}function y($){var W=String($),re=!!(Object.prototype.hasOwnProperty.call(i,W)&&a(i[W]));return re}function C($){for(var W=String($),re=y(W)||y(o),U=W.lastIndexOf(".");!re&&U!==-1;)W=W.substr(0,U),U=W.lastIndexOf("."),re=y(W);return re}function M($,W,re,U){$=typeof $=="symbol"?$.toString():$;var R=S($,W,U),G=C($);return G?(re===!0?R():setTimeout(R,0),!0):!1}n.publish=function($,W){return M($,W,!1,n.immediateExceptions)},n.publishSync=function($,W){return M($,W,!0,n.immediateExceptions)},n.subscribe=function($,W){if(typeof W!="function")return!1;$=typeof $=="symbol"?$.toString():$,Object.prototype.hasOwnProperty.call(i,$)||(i[$]={});var re="uid_"+String(++s);return i[$][re]=W,re},n.subscribeAll=function($){return n.subscribe(o,$)},n.subscribeOnce=function($,W){var re=n.subscribe($,function(){n.unsubscribe(re),W.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){i={}},n.clearSubscriptions=function(W){var re;for(re in i)Object.prototype.hasOwnProperty.call(i,re)&&re.indexOf(W)===0&&delete i[re]},n.countSubscriptions=function(W){var re,U,R=0;for(re in i)if(Object.prototype.hasOwnProperty.call(i,re)&&re.indexOf(W)===0){for(U in i[re])R++;break}return R},n.getSubscriptions=function(W){var re,U=[];for(re in i)Object.prototype.hasOwnProperty.call(i,re)&&re.indexOf(W)===0&&U.push(re);return U},n.unsubscribe=function($){var W=function(j){var se;for(se in i)if(Object.prototype.hasOwnProperty.call(i,se)&&se.indexOf(j)===0)return!0;return!1},re=typeof $=="string"&&(Object.prototype.hasOwnProperty.call(i,$)||W($)),U=!re&&typeof $=="string",R=typeof $=="function",G=!1,D,w,q;if(re){n.clearSubscriptions($);return}for(D in i)if(Object.prototype.hasOwnProperty.call(i,D)){if(w=i[D],U&&w[$]){delete w[$],G=$;break}if(R)for(q in w)Object.prototype.hasOwnProperty.call(w,q)&&w[q]===$&&(delete w[q],G=!0)}return G}})}(Cr,Cr.exports)),Cr.exports}var Yo=Ko();const aa=ji(Yo),on=(t,e)=>{aa.subscribe(t,(n,i)=>e(i))},It=(t,e)=>{aa.publish(t,e)},Vi=t=>function(e,n,i){const s=i.value;return s.topic=t,i};Mt.put("subscribe",on);Mt.put("publish",It);const $r="events/contributionregistry/contributionsChanged";class Jo{constructor(){this.contributions=new Map}registerContribution(e,n){const i=this.getContributions(e);if(n.disabled instanceof Function){const s=n.disabled;n.disabled=new fn.Computed(s)}i.push(n),It($r,{target:e,contributions:i})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const it=new Jo;Mt.put("contributionRegistry",it);const Zo={},Fe=Wn(null),Qr=Wn(null),Ri=Wn(null),oa=Wn(0),jt=Wn(void 0);Wn({name:"",timestamp:0});class Qo{constructor(e,n,i,s,o){this.id=e,this.name=n,this.description=i,this.parameters=s||[],this.output=o||[]}}class la{async execute(e,n){return Oe.execute(e,n)}async undo(){}async redo(){}}class Xo{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,n){this.handlers.has(e)||this.handlers.set(e,[]),this.handlers.get(e).push(n)}getHandler(e){return this.handlers.get(e)}createExecutionContext(e,n){return{source:e,params:n||{},activePart:Fe.get(),activeEditor:Qr.get()}}execute(e,n={}){const i=this.getHandler(e);if(!i)throw new Error(`No handlers registered for command: ${e}`);for(const s of i)if(s.canExecute===void 0||s.canExecute(n))return s.execute(n);yt.error(`No handler found to execute command: ${e}`)}createAndRegisterCommand(e,n,i,s,o){const a=new Qo(e,n,i,s);this.registerCommand(a),o&&this.registerHandler(e,o)}registerCommand(e){this.commands[e.id]=e,yt.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(n=>(Oe.getHandler(n.id)||[]).some(s=>s.canExecute===void 0||s.canExecute(e))).reduce((n,i)=>(n[i.id]=i,n),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const n=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(n,e.handler),e.contribution&&e.contribution.target&&it.registerContribution(e.contribution.target,{command:n,...e.contribution})}}const Oe=new Xo;Mt.put("commandRegistry",Oe);const pt=t=>{Oe.registerAll(t)};class el{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Oe.listCommands();Object.values(e).forEach(n=>{n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)})}watchCommandRegistry(){const e=Oe.registerCommand.bind(Oe);Oe.registerCommand=n=>{e(n),n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const n=e.toUpperCase().split("+").map(a=>a.trim());if(n.length===0)return null;const i={ctrl:!1,alt:!1,shift:!1,meta:!1},s=n[n.length-1],o=n.slice(0,-1);for(const a of o)switch(a){case"CTRL":case"CONTROL":i.ctrl=!0;break;case"ALT":case"OPTION":i.alt=!0;break;case"SHIFT":i.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":i.meta=!0;break;default:yt.warn(`Unknown modifier: ${a}`)}return i.key=this.normalizeKey(s),i}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const n=[];return e.ctrl&&n.push("ctrl"),e.alt&&n.push("alt"),e.shift&&n.push("shift"),e.meta&&n.push("meta"),n.sort(),`${n.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,n){const i=this.parseKeyBinding(n);if(!i)return yt.error(`Invalid key binding: ${n}`),!1;i.commandId=e;const s=this.getBindingKey(i);this.bindings.has(s)||this.bindings.set(s,[]);const o=this.bindings.get(s);return o.find(h=>h.commandId===e)?(yt.error(`Key binding ${n} already registered for command ${e}`),!1):(o.push(i),yt.debug(`Key binding registered: ${n} -> ${e}`),!0)}unregisterKeyBinding(e,n){if(n){const i=this.parseKeyBinding(n);if(i){const s=this.getBindingKey(i),o=this.bindings.get(s);if(o){const a=o.filter(h=>h.commandId!==e);a.length===0?this.bindings.delete(s):this.bindings.set(s,a)}}}else for(const[i,s]of this.bindings.entries()){const o=s.filter(a=>a.commandId!==e);o.length===0?this.bindings.delete(i):this.bindings.set(i,o)}}getKeyBindingsForCommand(e){const n=[];for(const i of this.bindings.values())for(const s of i)s.commandId===e&&n.push(this.formatKeyBinding(s));return n}formatKeyBinding(e){const n=[];e.ctrl&&n.push("Ctrl"),e.alt&&n.push("Alt"),e.shift&&n.push("Shift"),e.meta&&n.push("Cmd");let i=e.key;return i.length===1?i=i.toUpperCase():i=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase(),n.push(i),n.join("+")}handleKeyDown(e){if(!this.enabled)return;const n=e.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)){const a=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&a==="P"))return}const i={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},s=this.getBindingKey(i),o=this.bindings.get(s);if(o&&o.length>0){const a=o[0];try{e.preventDefault(),e.stopPropagation();const h=Oe.createExecutionContext(this,{});Oe.execute(a.commandId,h),yt.info(`Executed command via key binding: ${a.commandId}`)}catch(h){yt.error(`Failed to execute command ${a.commandId}: ${h.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}yt.debug("KeyBindingManager initializing...");const ca=new el;yt.debug("KeyBindingManager initialized");Mt.put("keyBindingManager",ca);function Hi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Vn=Hi();function ua(t){Vn=t}const Er={exec:()=>null};function Ge(t,e=""){let n=typeof t=="string"?t:t.source;const i={replace:(s,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(Nt.caret,"$1"),n=n.replace(s,a),i},getRegex:()=>new RegExp(n,e)};return i}const Nt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},tl=/^(?:[ \t]*(?:\n|$))+/,nl=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,rl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Nr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,il=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ki=/(?:[*+-]|\d{1,9}[.)])/,pa=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,da=Ge(pa).replace(/bull/g,Ki).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),sl=Ge(pa).replace(/bull/g,Ki).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Yi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,al=/^[^\n]+/,Ji=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ol=Ge(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ji).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ll=Ge(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ki).getRegex(),di="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Zi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,cl=Ge("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Zi).replace("tag",di).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ha=Ge(Yi).replace("hr",Nr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",di).getRegex(),ul=Ge(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ha).getRegex(),Qi={blockquote:ul,code:nl,def:ol,fences:rl,heading:il,hr:Nr,html:cl,lheading:da,list:ll,newline:tl,paragraph:ha,table:Er,text:al},_s=Ge("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Nr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",di).getRegex(),pl={...Qi,lheading:sl,table:_s,paragraph:Ge(Yi).replace("hr",Nr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_s).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",di).getRegex()},dl={...Qi,html:Ge(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Zi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Er,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ge(Yi).replace("hr",Nr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",da).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},hl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,fl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fa=/^( {2,}|\\)\n(?!\s*$)/,ml=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,hi=/[\p{P}\p{S}]/u,Xi=/[\s\p{P}\p{S}]/u,ma=/[^\s\p{P}\p{S}]/u,gl=Ge(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Xi).getRegex(),ga=/(?!~)[\p{P}\p{S}]/u,vl=/(?!~)[\s\p{P}\p{S}]/u,yl=/(?:[^\s\p{P}\p{S}]|~)/u,bl=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,va=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,wl=Ge(va,"u").replace(/punct/g,hi).getRegex(),Il=Ge(va,"u").replace(/punct/g,ga).getRegex(),ya="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",xl=Ge(ya,"gu").replace(/notPunctSpace/g,ma).replace(/punctSpace/g,Xi).replace(/punct/g,hi).getRegex(),kl=Ge(ya,"gu").replace(/notPunctSpace/g,yl).replace(/punctSpace/g,vl).replace(/punct/g,ga).getRegex(),Sl=Ge("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ma).replace(/punctSpace/g,Xi).replace(/punct/g,hi).getRegex(),Cl=Ge(/\\(punct)/,"gu").replace(/punct/g,hi).getRegex(),Al=Ge(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_l=Ge(Zi).replace("(?:-->|$)","-->").getRegex(),El=Ge("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_l).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ri=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ol=Ge(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ri).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ba=Ge(/^!?\[(label)\]\[(ref)\]/).replace("label",ri).replace("ref",Ji).getRegex(),wa=Ge(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ji).getRegex(),Tl=Ge("reflink|nolink(?!\\()","g").replace("reflink",ba).replace("nolink",wa).getRegex(),es={_backpedal:Er,anyPunctuation:Cl,autolink:Al,blockSkip:bl,br:fa,code:fl,del:Er,emStrongLDelim:wl,emStrongRDelimAst:xl,emStrongRDelimUnd:Sl,escape:hl,link:Ol,nolink:wa,punctuation:gl,reflink:ba,reflinkSearch:Tl,tag:El,text:ml,url:Er},Pl={...es,link:Ge(/^!?\[(label)\]\((.*?)\)/).replace("label",ri).getRegex(),reflink:Ge(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ri).getRegex()},Di={...es,emStrongRDelimAst:kl,emStrongLDelim:Il,url:Ge(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ll={...Di,br:Ge(fa).replace("{2,}","*").getRegex(),text:Ge(Di.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Vr={normal:Qi,gfm:pl,pedantic:dl},wr={normal:es,gfm:Di,breaks:Ll,pedantic:Pl},Rl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Es=t=>Rl[t];function pn(t,e){if(e){if(Nt.escapeTest.test(t))return t.replace(Nt.escapeReplace,Es)}else if(Nt.escapeTestNoEncode.test(t))return t.replace(Nt.escapeReplaceNoEncode,Es);return t}function Os(t){try{t=encodeURI(t).replace(Nt.percentDecode,"%")}catch{return null}return t}function Ts(t,e){var o;const n=t.replace(Nt.findPipe,(a,h,v)=>{let b=!1,I=h;for(;--I>=0&&v[I]==="\\";)b=!b;return b?"|":" |"}),i=n.split(Nt.splitPipe);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!((o=i.at(-1))!=null&&o.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(Nt.slashPipe,"|");return i}function Ir(t,e,n){const i=t.length;if(i===0)return"";let s=0;for(;s<i&&t.charAt(i-s-1)===e;)s++;return t.slice(0,i-s)}function Dl(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return n>0?-2:-1}function Ps(t,e,n,i,s){const o=e.href,a=e.title||null,h=t[1].replace(s.other.outputLinkReplace,"$1");i.state.inLink=!0;const v={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:a,text:h,tokens:i.inlineTokens(h)};return i.state.inLink=!1,v}function $l(t,e,n){const i=t.match(n.other.indentCodeCompensation);if(i===null)return e;const s=i[1];return e.split(`
`).map(o=>{const a=o.match(n.other.beginningSpace);if(a===null)return o;const[h]=a;return h.length>=s.length?o.slice(s.length):o}).join(`
`)}class ii{constructor(e){Ze(this,"options");Ze(this,"rules");Ze(this,"lexer");this.options=e||Vn}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Ir(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],s=$l(i,n[3]||"",this.rules);return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(this.rules.other.endingHash.test(i)){const s=Ir(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Ir(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let i=Ir(n[0],`
`).split(`
`),s="",o="";const a=[];for(;i.length>0;){let h=!1;const v=[];let b;for(b=0;b<i.length;b++)if(this.rules.other.blockquoteStart.test(i[b]))v.push(i[b]),h=!0;else if(!h)v.push(i[b]);else break;i=i.slice(b);const I=v.join(`
`),S=I.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${I}`:I,o=o?`${o}
${S}`:S;const y=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(S,a,!0),this.lexer.state.top=y,i.length===0)break;const C=a.at(-1);if((C==null?void 0:C.type)==="code")break;if((C==null?void 0:C.type)==="blockquote"){const M=C,$=M.raw+`
`+i.join(`
`),W=this.blockquote($);a[a.length-1]=W,s=s.substring(0,s.length-M.raw.length)+W.raw,o=o.substring(0,o.length-M.text.length)+W.text;break}else if((C==null?void 0:C.type)==="list"){const M=C,$=M.raw+`
`+i.join(`
`),W=this.list($);a[a.length-1]=W,s=s.substring(0,s.length-C.raw.length)+W.raw,o=o.substring(0,o.length-M.raw.length)+W.raw,i=$.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i=n[1].trim();const s=i.length>1,o={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");const a=this.rules.other.listItemRegex(i);let h=!1;for(;e;){let b=!1,I="",S="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;I=n[0],e=e.substring(I.length);let y=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,U=>" ".repeat(3*U.length)),C=e.split(`
`,1)[0],M=!y.trim(),$=0;if(this.options.pedantic?($=2,S=y.trimStart()):M?$=n[1].length+1:($=n[2].search(this.rules.other.nonSpaceChar),$=$>4?1:$,S=y.slice($),$+=n[1].length),M&&this.rules.other.blankLine.test(C)&&(I+=C+`
`,e=e.substring(C.length+1),b=!0),!b){const U=this.rules.other.nextBulletRegex($),R=this.rules.other.hrRegex($),G=this.rules.other.fencesBeginRegex($),D=this.rules.other.headingBeginRegex($),w=this.rules.other.htmlBeginRegex($);for(;e;){const q=e.split(`
`,1)[0];let j;if(C=q,this.options.pedantic?(C=C.replace(this.rules.other.listReplaceNesting,"  "),j=C):j=C.replace(this.rules.other.tabCharGlobal,"    "),G.test(C)||D.test(C)||w.test(C)||U.test(C)||R.test(C))break;if(j.search(this.rules.other.nonSpaceChar)>=$||!C.trim())S+=`
`+j.slice($);else{if(M||y.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||G.test(y)||D.test(y)||R.test(y))break;S+=`
`+C}!M&&!C.trim()&&(M=!0),I+=q+`
`,e=e.substring(q.length+1),y=j.slice($)}}o.loose||(h?o.loose=!0:this.rules.other.doubleBlankLine.test(I)&&(h=!0));let W=null,re;this.options.gfm&&(W=this.rules.other.listIsTask.exec(S),W&&(re=W[0]!=="[ ] ",S=S.replace(this.rules.other.listReplaceTask,""))),o.items.push({type:"list_item",raw:I,task:!!W,checked:re,loose:!1,text:S,tokens:[]}),o.raw+=I}const v=o.items.at(-1);if(v)v.raw=v.raw.trimEnd(),v.text=v.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let b=0;b<o.items.length;b++)if(this.lexer.state.top=!1,o.items[b].tokens=this.lexer.blockTokens(o.items[b].text,[]),!o.loose){const I=o.items[b].tokens.filter(y=>y.type==="space"),S=I.length>0&&I.some(y=>this.rules.other.anyLine.test(y.raw));o.loose=S}if(o.loose)for(let b=0;b<o.items.length;b++)o.items[b].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:s,title:o}}}table(e){var h;const n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;const i=Ts(n[1]),s=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=(h=n[3])!=null&&h.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(i.length===s.length){for(const v of s)this.rules.other.tableAlignRight.test(v)?a.align.push("right"):this.rules.other.tableAlignCenter.test(v)?a.align.push("center"):this.rules.other.tableAlignLeft.test(v)?a.align.push("left"):a.align.push(null);for(let v=0;v<i.length;v++)a.header.push({text:i[v],tokens:this.lexer.inline(i[v]),header:!0,align:a.align[v]});for(const v of o)a.rows.push(Ts(v,a.header.length).map((b,I)=>({text:b,tokens:this.lexer.inline(b),header:!1,align:a.align[I]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;const a=Ir(i.slice(0,-1),"\\");if((i.length-a.length)%2===0)return}else{const a=Dl(n[2],"()");if(a===-2)return;if(a>-1){const v=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,v).trim(),n[3]=""}}let s=n[2],o="";if(this.options.pedantic){const a=this.rules.other.pedanticHrefTitle.exec(s);a&&(s=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),Ps(n,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=n[s.toLowerCase()];if(!o){const a=i[0].charAt(0);return{type:"text",raw:a,text:a}}return Ps(i,o,i[0],this.lexer,this.rules)}}emStrong(e,n,i=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const a=[...s[0]].length-1;let h,v,b=a,I=0;const S=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(S.lastIndex=0,n=n.slice(-1*e.length+a);(s=S.exec(n))!=null;){if(h=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!h)continue;if(v=[...h].length,s[3]||s[4]){b+=v;continue}else if((s[5]||s[6])&&a%3&&!((a+v)%3)){I+=v;continue}if(b-=v,b>0)continue;v=Math.min(v,v+b+I);const y=[...s[0]][0].length,C=e.slice(0,a+s.index+y+v);if(Math.min(a,v)%2){const $=C.slice(1,-1);return{type:"em",raw:C,text:$,tokens:this.lexer.inlineTokens($)}}const M=C.slice(2,-2);return{type:"strong",raw:C,text:M,tokens:this.lexer.inlineTokens(M)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(i),o=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&o&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=n[1],s="mailto:"+i):(i=n[1],s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let n;if(n=this.rules.inline.url.exec(e)){let s,o;if(n[2]==="@")s=n[0],o="mailto:"+s;else{let a;do a=n[0],n[0]=((i=this.rules.inline._backpedal.exec(n[0]))==null?void 0:i[0])??"";while(a!==n[0]);s=n[0],n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){const i=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:i}}}}class Jt{constructor(e){Ze(this,"tokens");Ze(this,"options");Ze(this,"state");Ze(this,"tokenizer");Ze(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Vn,this.options.tokenizer=this.options.tokenizer||new ii,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Nt,block:Vr.normal,inline:wr.normal};this.options.pedantic?(n.block=Vr.pedantic,n.inline=wr.pedantic):this.options.gfm&&(n.block=Vr.gfm,this.options.breaks?n.inline=wr.breaks:n.inline=wr.gfm),this.tokenizer.rules=n}static get rules(){return{block:Vr,inline:wr}}static lex(e,n){return new Jt(n).lex(e)}static lexInline(e,n){return new Jt(n).inlineTokens(e)}lex(e){e=e.replace(Nt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){var s,o,a;for(this.options.pedantic&&(e=e.replace(Nt.tabCharGlobal,"    ").replace(Nt.spaceLine,""));e;){let h;if((o=(s=this.options.extensions)==null?void 0:s.block)!=null&&o.some(b=>(h=b.call({lexer:this},e,n))?(e=e.substring(h.raw.length),n.push(h),!0):!1))continue;if(h=this.tokenizer.space(e)){e=e.substring(h.raw.length);const b=n.at(-1);h.raw.length===1&&b!==void 0?b.raw+=`
`:n.push(h);continue}if(h=this.tokenizer.code(e)){e=e.substring(h.raw.length);const b=n.at(-1);(b==null?void 0:b.type)==="paragraph"||(b==null?void 0:b.type)==="text"?(b.raw+=`
`+h.raw,b.text+=`
`+h.text,this.inlineQueue.at(-1).src=b.text):n.push(h);continue}if(h=this.tokenizer.fences(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.heading(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.hr(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.blockquote(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.list(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.html(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.def(e)){e=e.substring(h.raw.length);const b=n.at(-1);(b==null?void 0:b.type)==="paragraph"||(b==null?void 0:b.type)==="text"?(b.raw+=`
`+h.raw,b.text+=`
`+h.raw,this.inlineQueue.at(-1).src=b.text):this.tokens.links[h.tag]||(this.tokens.links[h.tag]={href:h.href,title:h.title});continue}if(h=this.tokenizer.table(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.lheading(e)){e=e.substring(h.raw.length),n.push(h);continue}let v=e;if((a=this.options.extensions)!=null&&a.startBlock){let b=1/0;const I=e.slice(1);let S;this.options.extensions.startBlock.forEach(y=>{S=y.call({lexer:this},I),typeof S=="number"&&S>=0&&(b=Math.min(b,S))}),b<1/0&&b>=0&&(v=e.substring(0,b+1))}if(this.state.top&&(h=this.tokenizer.paragraph(v))){const b=n.at(-1);i&&(b==null?void 0:b.type)==="paragraph"?(b.raw+=`
`+h.raw,b.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=b.text):n.push(h),i=v.length!==e.length,e=e.substring(h.raw.length);continue}if(h=this.tokenizer.text(e)){e=e.substring(h.raw.length);const b=n.at(-1);(b==null?void 0:b.type)==="text"?(b.raw+=`
`+h.raw,b.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=b.text):n.push(h);continue}if(e){const b="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var h,v,b;let i=e,s=null;if(this.tokens.links){const I=Object.keys(this.tokens.links);if(I.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)I.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let o=!1,a="";for(;e;){o||(a=""),o=!1;let I;if((v=(h=this.options.extensions)==null?void 0:h.inline)!=null&&v.some(y=>(I=y.call({lexer:this},e,n))?(e=e.substring(I.raw.length),n.push(I),!0):!1))continue;if(I=this.tokenizer.escape(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.tag(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.link(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(I.raw.length);const y=n.at(-1);I.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=I.raw,y.text+=I.text):n.push(I);continue}if(I=this.tokenizer.emStrong(e,i,a)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.codespan(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.br(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.del(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.autolink(e)){e=e.substring(I.raw.length),n.push(I);continue}if(!this.state.inLink&&(I=this.tokenizer.url(e))){e=e.substring(I.raw.length),n.push(I);continue}let S=e;if((b=this.options.extensions)!=null&&b.startInline){let y=1/0;const C=e.slice(1);let M;this.options.extensions.startInline.forEach($=>{M=$.call({lexer:this},C),typeof M=="number"&&M>=0&&(y=Math.min(y,M))}),y<1/0&&y>=0&&(S=e.substring(0,y+1))}if(I=this.tokenizer.inlineText(S)){e=e.substring(I.raw.length),I.raw.slice(-1)!=="_"&&(a=I.raw.slice(-1)),o=!0;const y=n.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=I.raw,y.text+=I.text):n.push(I);continue}if(e){const y="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return n}}class si{constructor(e){Ze(this,"options");Ze(this,"parser");this.options=e||Vn}space(e){return""}code({text:e,lang:n,escaped:i}){var a;const s=(a=(n||"").match(Nt.notSpaceStart))==null?void 0:a[0],o=e.replace(Nt.endingNewline,"")+`
`;return s?'<pre><code class="language-'+pn(s)+'">'+(i?o:pn(o,!0))+`</code></pre>
`:"<pre><code>"+(i?o:pn(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,i=e.start;let s="";for(let h=0;h<e.items.length;h++){const v=e.items[h];s+=this.listitem(v)}const o=n?"ol":"ul",a=n&&i!==1?' start="'+i+'"':"";return"<"+o+a+`>
`+s+"</"+o+`>
`}listitem(e){var i;let n="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((i=e.tokens[0])==null?void 0:i.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+pn(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):n+=s+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",i="";for(let o=0;o<e.header.length;o++)i+=this.tablecell(e.header[o]);n+=this.tablerow({text:i});let s="";for(let o=0;o<e.rows.length;o++){const a=e.rows[o];i="";for(let h=0;h<a.length;h++)i+=this.tablecell(a[h]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+n+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${pn(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:i}){const s=this.parser.parseInline(i),o=Os(e);if(o===null)return s;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+pn(n)+'"'),a+=">"+s+"</a>",a}image({href:e,title:n,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));const o=Os(e);if(o===null)return pn(i);e=o;let a=`<img src="${e}" alt="${i}"`;return n&&(a+=` title="${pn(n)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:pn(e.text)}}class ts{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Zt{constructor(e){Ze(this,"options");Ze(this,"renderer");Ze(this,"textRenderer");this.options=e||Vn,this.options.renderer=this.options.renderer||new si,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ts}static parse(e,n){return new Zt(n).parse(e)}static parseInline(e,n){return new Zt(n).parseInline(e)}parse(e,n=!0){var s,o;let i="";for(let a=0;a<e.length;a++){const h=e[a];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[h.type]){const b=h,I=this.options.extensions.renderers[b.type].call({parser:this},b);if(I!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(b.type)){i+=I||"";continue}}const v=h;switch(v.type){case"space":{i+=this.renderer.space(v);continue}case"hr":{i+=this.renderer.hr(v);continue}case"heading":{i+=this.renderer.heading(v);continue}case"code":{i+=this.renderer.code(v);continue}case"table":{i+=this.renderer.table(v);continue}case"blockquote":{i+=this.renderer.blockquote(v);continue}case"list":{i+=this.renderer.list(v);continue}case"html":{i+=this.renderer.html(v);continue}case"paragraph":{i+=this.renderer.paragraph(v);continue}case"text":{let b=v,I=this.renderer.text(b);for(;a+1<e.length&&e[a+1].type==="text";)b=e[++a],I+=`
`+this.renderer.text(b);n?i+=this.renderer.paragraph({type:"paragraph",raw:I,text:I,tokens:[{type:"text",raw:I,text:I,escaped:!0}]}):i+=I;continue}default:{const b='Token with "'+v.type+'" type was not found.';if(this.options.silent)return console.error(b),"";throw new Error(b)}}}return i}parseInline(e,n=this.renderer){var s,o;let i="";for(let a=0;a<e.length;a++){const h=e[a];if((o=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&o[h.type]){const b=this.options.extensions.renderers[h.type].call({parser:this},h);if(b!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(h.type)){i+=b||"";continue}}const v=h;switch(v.type){case"escape":{i+=n.text(v);break}case"html":{i+=n.html(v);break}case"link":{i+=n.link(v);break}case"image":{i+=n.image(v);break}case"strong":{i+=n.strong(v);break}case"em":{i+=n.em(v);break}case"codespan":{i+=n.codespan(v);break}case"br":{i+=n.br(v);break}case"del":{i+=n.del(v);break}case"text":{i+=n.text(v);break}default:{const b='Token with "'+v.type+'" type was not found.';if(this.options.silent)return console.error(b),"";throw new Error(b)}}}return i}}class Or{constructor(e){Ze(this,"options");Ze(this,"block");this.options=e||Vn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Jt.lex:Jt.lexInline}provideParser(){return this.block?Zt.parse:Zt.parseInline}}Ze(Or,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Nl{constructor(...e){Ze(this,"defaults",Hi());Ze(this,"options",this.setOptions);Ze(this,"parse",this.parseMarkdown(!0));Ze(this,"parseInline",this.parseMarkdown(!1));Ze(this,"Parser",Zt);Ze(this,"Renderer",si);Ze(this,"TextRenderer",ts);Ze(this,"Lexer",Jt);Ze(this,"Tokenizer",ii);Ze(this,"Hooks",Or);this.use(...e)}walkTokens(e,n){var s,o;let i=[];for(const a of e)switch(i=i.concat(n.call(this,a)),a.type){case"table":{const h=a;for(const v of h.header)i=i.concat(this.walkTokens(v.tokens,n));for(const v of h.rows)for(const b of v)i=i.concat(this.walkTokens(b.tokens,n));break}case"list":{const h=a;i=i.concat(this.walkTokens(h.items,n));break}default:{const h=a;(o=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&o[h.type]?this.defaults.extensions.childTokens[h.type].forEach(v=>{const b=h[v].flat(1/0);i=i.concat(this.walkTokens(b,n))}):h.tokens&&(i=i.concat(this.walkTokens(h.tokens,n)))}}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...h){let v=o.renderer.apply(this,h);return v===!1&&(v=a.apply(this,h)),v}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),s.extensions=n),i.renderer){const o=this.defaults.renderer||new si(this.defaults);for(const a in i.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const h=a,v=i.renderer[h],b=o[h];o[h]=(...I)=>{let S=v.apply(o,I);return S===!1&&(S=b.apply(o,I)),S||""}}s.renderer=o}if(i.tokenizer){const o=this.defaults.tokenizer||new ii(this.defaults);for(const a in i.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const h=a,v=i.tokenizer[h],b=o[h];o[h]=(...I)=>{let S=v.apply(o,I);return S===!1&&(S=b.apply(o,I)),S}}s.tokenizer=o}if(i.hooks){const o=this.defaults.hooks||new Or;for(const a in i.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const h=a,v=i.hooks[h],b=o[h];Or.passThroughHooks.has(a)?o[h]=I=>{if(this.defaults.async)return Promise.resolve(v.call(o,I)).then(y=>b.call(o,y));const S=v.call(o,I);return b.call(o,S)}:o[h]=(...I)=>{let S=v.apply(o,I);return S===!1&&(S=b.apply(o,I)),S}}s.hooks=o}if(i.walkTokens){const o=this.defaults.walkTokens,a=i.walkTokens;s.walkTokens=function(h){let v=[];return v.push(a.call(this,h)),o&&(v=v.concat(o.call(this,h))),v}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Jt.lex(e,n??this.defaults)}parser(e,n){return Zt.parse(e,n??this.defaults)}parseMarkdown(e){return(i,s)=>{const o={...s},a={...this.defaults,...o},h=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const v=a.hooks?a.hooks.provideLexer():e?Jt.lex:Jt.lexInline,b=a.hooks?a.hooks.provideParser():e?Zt.parse:Zt.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(i):i).then(I=>v(I,a)).then(I=>a.hooks?a.hooks.processAllTokens(I):I).then(I=>a.walkTokens?Promise.all(this.walkTokens(I,a.walkTokens)).then(()=>I):I).then(I=>b(I,a)).then(I=>a.hooks?a.hooks.postprocess(I):I).catch(h);try{a.hooks&&(i=a.hooks.preprocess(i));let I=v(i,a);a.hooks&&(I=a.hooks.processAllTokens(I)),a.walkTokens&&this.walkTokens(I,a.walkTokens);let S=b(I,a);return a.hooks&&(S=a.hooks.postprocess(S)),S}catch(I){return h(I)}}}onError(e,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+pn(i.message+"",!0)+"</pre>";return n?Promise.resolve(s):s}if(n)return Promise.reject(i);throw i}}}const Bn=new Nl;function Be(t,e){return Bn.parse(t,e)}Be.options=Be.setOptions=function(t){return Bn.setOptions(t),Be.defaults=Bn.defaults,ua(Be.defaults),Be};Be.getDefaults=Hi;Be.defaults=Vn;Be.use=function(...t){return Bn.use(...t),Be.defaults=Bn.defaults,ua(Be.defaults),Be};Be.walkTokens=function(t,e){return Bn.walkTokens(t,e)};Be.parseInline=Bn.parseInline;Be.Parser=Zt;Be.parser=Zt.parse;Be.Renderer=si;Be.TextRenderer=ts;Be.Lexer=Jt;Be.lexer=Jt.lex;Be.Tokenizer=ii;Be.Hooks=Or;Be.parse=Be;Be.options;Be.setOptions;Be.use;Be.walkTokens;Be.parseInline;Zt.parse;Jt.lex;let xr=null;function ns(){return xr||(xr=document.createElement("div"),xr.id="global-dialog-container",document.body.appendChild(xr)),xr}function rs(t){return new Promise(e=>{const n=ns(),i=()=>{rr(V``,n)},s=()=>{i(),e(t.confirmValue)},o=()=>{i(),e(t.cancelValue)},a=V`
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
                    ${t.renderContent({onConfirm:s,onCancel:o})}
                </div>
            </wa-dialog>
        `;rr(a,n),t.onAfterRender&&requestAnimationFrame(t.onAfterRender)})}function fi(t,e=!1){if(e){const n=Be.parse(t,{async:!1});return V`<div class="dialog-message markdown-content" style="white-space: normal;">${Rr(n)}</div>`}return V`<div class="dialog-message" style="white-space: pre-line;">${t}</div>`}const Mr=async(t,e="",n=!1)=>{let i=e;return rs({title:"Input",message:t,markdown:n,confirmValue:i,cancelValue:null,renderContent:({onConfirm:s,onCancel:o})=>{const a=v=>{i=v.target.value},h=v=>{v.key==="Enter"?(v.preventDefault(),s()):v.key==="Escape"&&(v.preventDefault(),o())};return V`
                ${fi(t,n)}
                <wa-input
                    value="${e}"
                    @input=${a}
                    @keydown=${h}
                    autofocus
                ></wa-input>
                
                <div class="dialog-actions">
                    <wa-button variant="default" @click=${o}>
                        Cancel
                    </wa-button>
                    <wa-button variant="primary" @click=${()=>{s()}}>
                        OK
                    </wa-button>
                </div>
            `},onAfterRender:()=>{var a;const o=ns().querySelector("wa-input");if(o){const h=(a=o.shadowRoot)==null?void 0:a.querySelector("input");h&&(h.focus(),h.select())}}}).then(()=>i)},pr=async(t,e=!1)=>rs({title:"Confirm",message:t,markdown:e,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:n,onCancel:i})=>V`
            ${fi(t,e)}
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${i}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${n}>
                    OK
                </wa-button>
            </div>
        `}),$i=async(t,e,n=!1)=>{await rs({title:t,message:e,markdown:n,confirmValue:void 0,cancelValue:void 0,renderContent:({onConfirm:i})=>V`
            ${fi(e,n)}
            
            <div class="dialog-actions">
                <wa-button variant="primary" @click=${i}>
                    OK
                </wa-button>
            </div>
        `})},Ia=async(t,e,n,i=!1)=>new Promise(s=>{const o=ns();let a=!0;const h=()=>{a&&(a=!1,rr(V``,o),s())},v=(b,I,S)=>{if(!a)return;const y=V`
                <wa-dialog label="${b}" open @wa-request-close=${h}>
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
                            ${fi(I,i)}
                        </wa-scroller>
                        
                        <div class="dialog-actions">
                            <div class="dialog-actions-left">
                                ${S.filter(C=>C.label!=="Close").map(C=>V`
                                    <wa-button 
                                        variant="${C.variant||"default"}"
                                        ?disabled=${C.disabled}
                                        @click=${()=>{C.callback()}}
                                    >
                                        ${C.label}
                                    </wa-button>
                                `)}
                            </div>
                            <div class="dialog-actions-right">
                                ${S.filter(C=>C.label==="Close").map(C=>V`
                                    <wa-button 
                                        variant="${C.variant||"primary"}"
                                        @click=${()=>{C.callback(),h()}}
                                    >
                                        ${C.label}
                                    </wa-button>
                                `)}
                            </div>
                        </div>
                    </div>
                </wa-dialog>
            `;rr(y,o)};n.updateDialog=v,v(t,e,n)});an.put("promptDialog",Mr);an.put("confirmDialog",pr);an.put("infoDialog",$i);an.put("navigableInfoDialog",Ia);var Xr={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var Ml=Xr.exports,Ls;function Fl(){return Ls||(Ls=1,function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(Ml,function(e){var n=function(a){return new n.lib.init(a)},i="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:i,constructor:n,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||n.defaults.text,this.options.node=a.node||n.defaults.node,this.options.duration=a.duration===0?0:a.duration||n.defaults.duration,this.options.selector=a.selector||n.defaults.selector,this.options.callback=a.callback||n.defaults.callback,this.options.destination=a.destination||n.defaults.destination,this.options.newWindow=a.newWindow||n.defaults.newWindow,this.options.close=a.close||n.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=a.positionLeft||n.defaults.positionLeft,this.options.position=a.position||n.defaults.position,this.options.backgroundColor=a.backgroundColor||n.defaults.backgroundColor,this.options.avatar=a.avatar||n.defaults.avatar,this.options.className=a.className||n.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?n.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||n.defaults.onClick,this.options.offset=a.offset||n.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||n.defaults.ariaLive,this.options.style=a.style||n.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var h in this.options.style)a.style[h]=this.options.style[h];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var v=document.createElement("img");v.src=this.options.avatar,v.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(v):a.insertAdjacentElement("afterbegin",v)}if(this.options.close===!0){var b=document.createElement("button");b.type="button",b.setAttribute("aria-label","Close"),b.className="toast-close",b.innerHTML="&#10006;",b.addEventListener("click",(function(W){W.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var I=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&I>360?a.insertAdjacentElement("afterbegin",b):a.appendChild(b)}if(this.options.stopOnFocus&&this.options.duration>0){var S=this;a.addEventListener("mouseover",function(W){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){S.removeElement(a)},S.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(W){W.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(W){W.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var y=s("x",this.options),C=s("y",this.options),M=this.options.position=="left"?y:"-"+y,$=this.options.gravity=="toastify-top"?C:"-"+C;a.style.transform="translate("+M+","+$+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var h=n.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,h),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),n.reposition()}).bind(this),400)}},n.reposition=function(){for(var a={top:15,bottom:15},h={top:15,bottom:15},v={top:15,bottom:15},b=document.getElementsByClassName("toastify"),I,S=0;S<b.length;S++){o(b[S],"toastify-top")===!0?I="toastify-top":I="toastify-bottom";var y=b[S].offsetHeight;I=I.substr(9,I.length-1);var C=15,M=window.innerWidth>0?window.innerWidth:screen.width;M<=360?(b[S].style[I]=v[I]+"px",v[I]+=y+C):o(b[S],"toastify-left")===!0?(b[S].style[I]=a[I]+"px",a[I]+=y+C):(b[S].style[I]=h[I]+"px",h[I]+=y+C)}return this};function s(a,h){return h.offset[a]?isNaN(h.offset[a])?h.offset[a]:h.offset[a]+"px":"0px"}function o(a,h){return!a||typeof h!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(h)>-1)}return n.lib.init.prototype=n.lib,n})}(Xr)),Xr.exports}var ql=Fl();const is=ji(ql),zt=t=>{console.info("[TOAST] INFO: ",t),is({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},Xe=t=>{console.error("[TOAST] ERROR: ",t),is({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},zl=t=>{console.warn("[TOAST] WARNING: ",t),is({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};an.put("toastInfo",zt);an.put("toastError",Xe);an.put("toastWarning",zl);const xa=(t,e)=>{const n=new fn.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{n.watch()}});n.watch(t)},mi=t=>function(e,n,i){const s=i.value;return s.signal=t,i};Object.defineProperty(Ys.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Fr extends Ys{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(n=>{const i=e[n];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"topic"in s&&this.subscribe(s.topic,s)}}),Object.getOwnPropertyNames(e).forEach(n=>{const i=e[n];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"signal"in s&&this.watch(s.signal,s)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,n){on(e,n.bind(this))}showInfo(e){zt(e)}showError(e){Xe(e)}nobubble(e){return n=>{n.stopPropagation(),e.bind(this)(n)}}command(e,n={}){return()=>{this.executeCommand(e,n)}}executeCommand(e,n){const i=Oe.createExecutionContext(this,n);Oe.execute(e,i)}watch(e,n){xa(e,n.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}class Hn extends Fr{}var Ul=Object.getOwnPropertyDescriptor,jl=(t,e,n,i)=>{for(var s=i>1?void 0:i?Ul(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=a(s)||s);return s};let Ni=class extends Hn{render(){return V`
            <slot></slot>
        `}};Ni.styles=Rt`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Ni=jl([mt("k-app")],Ni);var Bl=Object.defineProperty,Gl=Object.getOwnPropertyDescriptor,dr=(t,e,n,i)=>{for(var s=i>1?void 0:i?Gl(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Bl(e,n,s),s};let _n=class extends pi(Hn){constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),on($r,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[n]=t.split(":");if(e===`${n}:*`)return!0;const i=e.split(":");if(i.length===2){const s=i[1];if(s==="system.editors"||s===".system.editors")return this.isEditor&&t.startsWith(`${n}:`)}return!1}loadContributions(t){const e=it.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[n]=t.split(":"),i=`${n}:*`,s=it.getContributions(i),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const h of a){const v=`${n}:${h}`,b=it.getContributions(v);o.push(...b)}}this.contributions=[...s,...o,...e]}contributionCreator(t){var e;if("command"in t){const n=t,i=!!n.showLabel;return V`
                <wa-button @click=${()=>this.executeCommand(n.command,n.params||{})}
                           title=${n.label}
                           ?disabled="${(e=n.disabled)==null?void 0:e.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${n.icon} label="${n.label}"></wa-icon>
                    ${i?n.label:""}
                </wa-button>
            `}else if("html"in t){const n=t.html;return n instanceof Function?n():Rr(n)}else return V`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return V`
            <div class="toolbar-items" style=${no({"justify-content":this.position})}>
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
        `}};_n.styles=Rt`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;dr([Me()],_n.prototype,"position",2);dr([Me({type:Boolean,attribute:"is-editor"})],_n.prototype,"isEditor",2);dr([Me({attribute:!1})],_n.prototype,"partToolbarContent",2);dr([Me({attribute:!1})],_n.prototype,"partToolbarRenderer",2);dr([dt()],_n.prototype,"contributions",2);_n=dr([mt("k-toolbar")],_n);var Wl=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,hr=(t,e,n,i)=>{for(var s=i>1?void 0:i?Vl(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Wl(e,n,s),s};let En=class extends pi(Hn){constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Un(),this.dropdownRef=Un()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),on($r,e=>{if(!t)return;this.matchesTarget(t,e.target)&&(this.loadContributions(t),this.requestUpdate())})}matchesTarget(t,e){if(e===t)return!0;if(!t.includes(":"))return!1;const[n]=t.split(":");if(e===`${n}:*`)return!0;const i=e.split(":");if(i.length===2){const s=i[1];if(s==="system.editors"||s===".system.editors")return this.isEditor&&t.startsWith(`${n}:`)}return!1}loadContributions(t){const e=it.getContributions(t);if(!t.includes(":")){this.contributions=e;return}const[n]=t.split(":"),i=`${n}:*`,s=it.getContributions(i),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const h of a){const v=`${n}:${h}`,b=it.getContributions(v);o.push(...b)}}this.contributions=[...s,...o,...e]}show(t){this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){var e;if("command"in t){const n=t;return V`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(n.command,n.params)}
                    ?disabled="${(e=n.disabled)==null?void 0:e.get()}">
                    ${n.icon?V`<wa-icon slot="icon" name=${n.icon}></wa-icon>`:""}
                    ${n.label}
                </wa-dropdown-item>
            `}else if("html"in t){const n=t.html;return n instanceof Function?n():Rr(n)}return Lt}render(){if(!this.isOpen)return Lt;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():Lt;return V`
            <wa-dropdown 
                ${jn(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${jn(this.anchorRef)}
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
        `}};En.styles=Rt`
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
    `;hr([Me({type:Boolean,attribute:"is-editor"})],En.prototype,"isEditor",2);hr([Me({attribute:!1})],En.prototype,"partContextMenuRenderer",2);hr([dt()],En.prototype,"contributions",2);hr([dt()],En.prototype,"isOpen",2);hr([dt()],En.prototype,"position",2);En=hr([mt("k-contextmenu")],En);class ss extends Hn{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rs=(t,e,n)=>{const i=new Map;for(let s=e;s<=n;s++)i.set(t[s],s);return i},Hl=Js(class extends Zs{constructor(t){if(super(t),t.type!==ro.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const s=[],o=[];let a=0;for(const h of t)s[a]=i?i(h,a):a,o[a]=n(h,a),a++;return{values:o,keys:s}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,i]){const s=io(t),{values:o,keys:a}=this.dt(e,n,i);if(!Array.isArray(s))return this.ut=a,o;const h=this.ut??(this.ut=[]),v=[];let b,I,S=0,y=s.length-1,C=0,M=o.length-1;for(;S<=y&&C<=M;)if(s[S]===null)S++;else if(s[y]===null)y--;else if(h[S]===a[C])v[C]=Mn(s[S],o[C]),S++,C++;else if(h[y]===a[M])v[M]=Mn(s[y],o[M]),y--,M--;else if(h[S]===a[M])v[M]=Mn(s[S],o[M]),yr(t,v[M+1],s[S]),S++,M--;else if(h[y]===a[C])v[C]=Mn(s[y],o[C]),yr(t,s[S],s[y]),y--,C++;else if(b===void 0&&(b=Rs(a,C,M),I=Rs(h,S,y)),b.has(h[S]))if(b.has(h[y])){const $=I.get(a[C]),W=$!==void 0?s[$]:null;if(W===null){const re=yr(t,s[S]);Mn(re,o[C]),v[C]=re}else v[C]=Mn(W,o[C]),yr(t,s[S],W),s[$]=null;C++}else Ii(s[y]),y--;else Ii(s[S]),S++;for(;C<=M;){const $=yr(t,v[M+1]);Mn($,o[C]),v[C++]=$}for(;S<=y;){const $=s[S++];$!==null&&Ii($)}return this.ut=a,Qs(t,v),so}}),Kl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Yl="/assets/jupyter-C78Cpfql.svg",Jl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";ao("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":Kl,"../icons/jupyter.svg":Yl,"../icons/python.svg":Jl})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});var Zl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,qr=(t,e,n,i)=>{for(var s=i>1?void 0:i?Ql(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Zl(e,n,s),s};let Gn=class extends Fr{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),n=t.pop();return V`
            <wa-icon library="${n||Lt}" variant="${this.variant||Lt}"
                         family="${this.family||Lt}" name=${e} label="${this.label||this.name||Lt}"></wa-icon>`}};Gn.styles=Rt`
        :host {
            display: contents;
        }
    `;qr([Me()],Gn.prototype,"name",2);qr([Me()],Gn.prototype,"family",2);qr([Me()],Gn.prototype,"variant",2);qr([Me()],Gn.prototype,"label",2);Gn=qr([mt("k-icon")],Gn);var Xl=Object.defineProperty,ec=(t,e,n,i)=>{for(var s=void 0,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=a(e,n,s)||s);return s&&Xl(e,n,s),s};class _t extends ss{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return Lt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return Lt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Ri.set(null),Ri.set(this),Fe.set(null),Fe.set(this)}}ec([Me()],_t.prototype,"dirty");const ka="app-toolbars-main",fr="app-toolbars-main-right",tc="app-toolbars-main-center",Sa="app-toolbars-bottom",as="app-toolbars-bottom-center",Ca="app-toolbars-bottom-end",er="editor-area-main",Mi="sidebar-main",Aa="sidebar-main-bottom",_a="sidebar-auxiliary",Ea="panel-bottom";var Oa=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(Oa||{}),nc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,Ta=(t,e,n,i)=>{for(var s=i>1?void 0:i?rc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&nc(e,n,s),s};let ai=class extends ss{constructor(){super(...arguments),this.contributions=[],this.tabGroup=Un(),this.containerId=null}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateToolbarFromComponent(n)}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,n=e.closest("wa-tab");if(n){const a=n.getAttribute("panel");if(a){const h=this.getTabPanel(a);if(h){const v=h.querySelector(".tab-content");if(v&&v.firstElementChild){const b=v.firstElementChild;b instanceof _t&&Fe.set(b)}}}return}const i=e.closest("wa-scroller.tab-content");if(!i)return;const s=i.closest("wa-tab-panel");if(!s)return;const o=s.querySelector(".tab-content");if(o&&o.firstElementChild){const a=o.firstElementChild;a instanceof _t&&Fe.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,n=e.target.closest("wa-scroller.tab-content");if(!n)return;e.preventDefault();const i=n.closest("wa-tab-panel");if(!i)return;const s=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,button:0});e.target.dispatchEvent(s),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const o=i.querySelector("k-contextmenu");o&&o.show({x:e.clientX,y:e.clientY})})}))}),on($r,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===er;this.contributions.forEach(n=>{const i=this.getTabPanel(n.name);if(!i)return;const s=i.querySelector(".tab-content");if(s&&s.firstElementChild){const o=s.firstElementChild;o instanceof _t&&(o.tabContribution=n,o.isEditor=e)}})}}has(t){return!!this.getTabPanel(t)}activate(t){this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(t){if(this.contributions.find(n=>n.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const n=this.getTabPanel(t.name);if(n){const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const s=i.firstElementChild;s instanceof _t&&(s.tabContribution=t,s.isEditor=this.containerId===er)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(n)})}})}handleTabAuxClick(t,e){t.button===Oa.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await pr("Unsaved changes will be lost: Do you really want to close?"))return;const n=this.getTabPanel(e);if(!n)return;const i=this.contributions.find(o=>o.name===e);if(!i)return;this.cleanupTabInstance(n);const s=this.contributions.indexOf(i);s>-1&&this.contributions.splice(s,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:n})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=it.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=t.querySelector(".tab-content");if(e&&e.firstElementChild){const n=e.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`)}getTab(t){return this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`)}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof _t)||!n.renderToolbar)return;const i=t.querySelector("k-toolbar");i&&(i.partToolbarRenderer=()=>n.renderToolbar(),i.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof _t)||!n.renderContextMenu)return;const i=t.querySelector("k-contextmenu");i&&(i.partContextMenuRenderer=()=>n.renderContextMenu(),i.requestUpdate())}render(){return V`
            <wa-tab-group ${jn(this.tabGroup)}>
                ${Hl(this.contributions,t=>t.name,t=>V`
                        <wa-tab panel="${t.name}"
                                @auxclick="${e=>this.handleTabAuxClick(e,t)}">
                            <k-icon name="${t.icon}"></k-icon>
                            ${t.label}
                            ${Kt(t.closable,()=>V`
                                <wa-icon name="xmark" label="Close"  @click="${e=>this.closeTab(e,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            <k-toolbar id="toolbar:${t.editorId??t.name}" 
                                       class="tab-toolbar"
                                       ?is-editor="${this.containerId===er}"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${t.component?t.component(t.name):Lt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu:${t.name}"
                                           ?is-editor="${this.containerId===er}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};ai.styles=Rt`
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
    `;Ta([dt()],ai.prototype,"contributions",2);ai=Ta([mt("k-tabs")],ai);var ic=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,zr=(t,e,n,i)=>{for(var s=i>1?void 0:i?sc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&ic(e,n,s),s};let sr=class extends Hn{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.handleResize=t=>{if(!this.resizing)return;const n=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,i=[...this.resizing.startSizes];i[this.resizing.handleIndex]+=n,i[this.resizing.handleIndex+1]-=n;const s=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,o=s*.05;if(i[this.resizing.handleIndex]>=o&&i[this.resizing.handleIndex+1]>=o){this.resizing.currentSizes=i;const a=i.map((h,v)=>{const I=`${(h/s*100).toFixed(2)}%`;return v===i.length-1?I:`${I} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=()=>{var t;if((t=this.resizing)!=null&&t.currentSizes){const e=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(n=>`${(n/e*100).toFixed(2)}%`),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,n)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${n*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${n*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const n=this.orientation==="horizontal"?t.clientX:t.clientY,i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=this.gridSizes.map(o=>o.endsWith("%")?parseFloat(o)/100*i:(o.endsWith("px"),parseFloat(o)));this.resizing={handleIndex:e,startPos:n,startSizes:s},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return Lt;const t=this.gridSizes.flatMap((e,n)=>n===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",V`
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
            
            ${this.gridChildren.map((e,n)=>{if(n<this.gridChildren.length-1){const i=this.orientation==="horizontal"?`${n*2+2}`:"1",s=this.orientation==="vertical"?`${n*2+2}`:"1";return V`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${i};
                                grid-row: ${s};
                            "
                            @mousedown=${o=>this.startResize(o,n)}
                        ></div>
                    `}return Lt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};zr([Me()],sr.prototype,"orientation",2);zr([Me()],sr.prototype,"sizes",2);zr([dt()],sr.prototype,"gridSizes",2);zr([dt()],sr.prototype,"gridChildren",2);sr=zr([mt("k-resizable-grid")],sr);function os(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function ac(t,e){const n=indexedDB.open(t);n.onupgradeneeded=()=>n.result.createObjectStore(e);const i=os(n);return(s,o)=>i.then(a=>o(a.transaction(e,s).objectStore(e)))}let Ai;function Pa(){return Ai||(Ai=ac("keyval-store","keyval")),Ai}function oc(t,e=Pa()){return e("readonly",n=>os(n.get(t)))}function lc(t,e,n=Pa()){return n("readwrite",i=>(i.put(e,t),os(i.transaction)))}class cc{async persistObject(e,n){return lc(e,n)}async getObject(e){return oc(e)}}const xn=new cc;Mt.put("persistenceService",xn);const hn="events/filesys/workspaceChanged",Tr="events/filesys/workspaceConnected";class oi{constructor(){this.state={}}getWorkspacePath(){const e=[];let n=this;for(;n;)e.push(n.getName()),n=n.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const n=e.getParent();if(n)e=n;else break}return e}}var La=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(La||{});class ar extends oi{}class Fi extends oi{}class Ra extends ar{constructor(e,n){super(),this.contents=e,this.name=n}async getContents(e){return this.contents}async saveContents(e,n){this.contents=e}async copyTo(e){throw Error("Not supported")}delete(e,n){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class Ds extends ar{constructor(e,n){super(),this.fileHandle=e,this.parent=n}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const n=await this.fileHandle.getFile();return!e||(e==null?void 0:e.contentType)==0?await n.text():(e==null?void 0:e.encoding)==0||e!=null&&e.uri?URL.createObjectURL(n):e!=null&&e.blob?n:n.stream()}async saveContents(e,n){const i=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(i);else{const s=i.getWriter();try{await s.write(e)}finally{await s.close()}}}async copyTo(e){const n=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(n)}async rename(e){var i,s;const n=this.getParent();if(!n)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(o){throw o.name==="NotAllowedError"||(i=o.message)!=null&&i.includes("not allowed")||(s=o.message)!=null&&s.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):o}await n.listChildren(!0),It(hn,this.getWorkspace())}}}class zn extends Fi{constructor(e,n){super(),this.dirHandle=e,this.parent=n}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){if(e||!this.files){this.files={};for await(const n of this.dirHandle.values()){const s=n.kind==="file"?new Ds(n,this):new zn(n,this);this.files[s.getName()]=s}}return Object.values(this.files)}async getResource(e,n){if(!e)throw new Error("No path provided");const i=e.split("/");let s=this,o=!1;try{for(let a=0;a<i.length;a++){let h=i[a];if(h&&(h=h.trim()),!h)break;if(s instanceof zn){if(s.files||await s.listChildren(),!s.files)return null;const v=s.files[h];if(!v&&(n!=null&&n.create))if(o=!0,a<i.length-1){const b=await s.dirHandle.getDirectoryHandle(h,{create:!0}),I=new zn(b);s.files[h]=I,s=I}else{const b=await s.dirHandle.getFileHandle(h,{create:!0}),I=new Ds(b,s);return s.files[h]=I,I}else s=v}}}finally{o&&It(hn,this.getWorkspace())}return s}touch(){It(hn,this.getWorkspace())}async delete(e,n=!0){var i;return e?this.dirHandle.removeEntry(e,{recursive:n}).then(()=>{It(hn,this.getWorkspace())}):(i=this.getParent())==null?void 0:i.delete(this.getName())}async copyTo(e){for(const n of await this.listChildren()){const i=[e,n.getName()].join("/");await n.copyTo(i)}}async rename(e){var i,s;const n=this.getParent();if(!n)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(o){throw o.name==="NotAllowedError"||(i=o.message)!=null&&i.includes("not allowed")||(s=o.message)!=null&&s.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):o}await n.listChildren(!0),It(hn,this.getWorkspace())}}}class uc{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&It(Tr,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await xn.getObject("workspace_data");if(!e)return;const n=this.contributions.get(e.type);if(!n){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(n.restore){const i=await n.restore(e.data);return i&&(this.currentType=e.type),i}}catch(i){console.error(`Failed to restore workspace of type ${e.type}:`,i)}}async connectWorkspace(e){const n=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!n)throw new Error("No workspace contribution can handle this input");const i=await n.connect(e),s=n.persist?await n.persist(i):e,o={type:n.type,data:s};return await xn.persistObject("workspace_data",o),this.currentType=n.type,this.workspace=Promise.resolve(i),It(Tr,i),i}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await xn.persistObject("workspace_data",null),await xn.persistObject("workspace",null)}}const Dt=new uc;Mt.put("workspaceService",Dt);Dt.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new zn(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new zn(t,void 0)},async persist(t){return t instanceof zn?t.getHandle():null}});const pc=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var dc=Object.defineProperty,hc=Object.getOwnPropertyDescriptor,gi=(t,e,n,i)=>{for(var s=i>1?void 0:i?hc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&dc(e,n,s),s};let or=class extends _t{constructor(){super(...arguments),this.treeRef=Un()}doBeforeUI(){this.initializeWorkspace()}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await Dt.getWorkspace();t?await this.loadWorkspace(t):Oe.execute("help")}renderToolbar(){const t=jt.get()instanceof oi;return V`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const t=jt.get()instanceof oi;return V`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>Delete</k-command>
        `}async onWorkspaceChanged(t){jt.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t):this.root=void 0}async syncTreeSelection(){var n,i;await this.updateComplete;const t=(n=this.treeRef.value)==null?void 0:n.querySelector("wa-tree"),e=(t==null?void 0:t.selectedItems)||[];e.length>0&&jt.set((i=e[0].model)==null?void 0:i.data)}async resourceToTreeNode(t){const e=t instanceof ar,n={data:t,label:t.getName(),icon:e?"file":"folder-open",leaf:e,children:[]};if(t instanceof Fi){for(const i of await t.listChildren(!0)){const s=await this.resourceToTreeNode(i);n.children.push(s)}n.children.sort(pc)}return n}createTreeItems(t,e=!1){return t?V`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${t} ?expanded=${e}>
                <span><wa-icon name=${t.icon} label="${t.leaf?"File":"Folder"}"></wa-icon> ${t.label}</span>
                ${t.children.map(n=>this.createTreeItems(n))}
            </wa-tree-item>`:V``}async onFileDoubleClicked(t){const n=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:n})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const n=e[0].model;jt.set(n.data)}else jt.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=o=>{var v,b;if(!((v=o.dataTransfer)!=null&&v.types.includes("Files")))return;o.preventDefault(),o.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const h=o.target.closest("wa-tree-item");h&&h!==this.currentDropTarget&&((b=this.currentDropTarget)==null||b.classList.remove("drop-target"),this.currentDropTarget=h,h.classList.add("drop-target"))},n=o=>{var a;(a=o.dataTransfer)!=null&&a.types.includes("Files")&&(o.preventDefault(),t.classList.add("drag-over"))},i=o=>{var b;const a=t.getBoundingClientRect(),h=o.clientX,v=o.clientY;(h<=a.left||h>=a.right||v<=a.top||v>=a.bottom)&&(t.classList.remove("drag-over"),(b=this.currentDropTarget)==null||b.classList.remove("drop-target"),this.currentDropTarget=void 0)},s=async o=>{var v;if(o.preventDefault(),t.classList.remove("drag-over"),(v=this.currentDropTarget)==null||v.classList.remove("drop-target"),this.currentDropTarget=void 0,!o.dataTransfer||!this.workspaceDir)return;const a=Array.from(o.dataTransfer.files);if(a.length===0)return;const h=await this.getDropTarget(o);await this.handleFilesDrop(a,h)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",n),t.removeEventListener("dragleave",i),t.removeEventListener("drop",s),t.addEventListener("dragover",e),t.addEventListener("dragenter",n),t.addEventListener("dragleave",i),t.addEventListener("drop",s)}async getDropTarget(t){const n=t.target.closest("wa-tree-item");if(n){const s=n.model.data;if(s instanceof Fi)return s;const o=s.getParent();if(o)return o}return this.workspaceDir}async handleFilesDrop(t,e){const n=t.length;let i=0,s=0,o=0;for(const a of t)try{const h=this.buildTargetPath(e,a.name);if(await this.workspaceDir.getResource(h)&&!await pr(`File "${a.name}" already exists. Do you want to overwrite it?`)){o++;continue}await(await this.workspaceDir.getResource(h,{create:!0})).saveContents(a),i++}catch(h){console.error(`Failed to upload ${a.name}:`,h),s++}console.log(`Uploaded ${i}/${n} files${o>0?`, ${o} skipped`:""}${s>0?`, ${s} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const n=t.getWorkspacePath();return n?`${n}/${e}`:e}render(){return V`
            <div class="tree" ${jn(this.treeRef)}>
                ${Kt(!this.workspaceDir,()=>V`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>V`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};or.styles=Rt`
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
    `;gi([dt()],or.prototype,"root",2);gi([Vi(hn)],or.prototype,"onWorkspaceChanged",1);gi([Vi(Tr)],or.prototype,"onWorkspaceConnected",1);or=gi([mt("k-filebrowser")],or);class fc{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,oa.set(this.updateCounter)}run(e,n){const i=this.createProgressMonitor(e);try{this.tasks.push(i),this.notifyUpdate(),n(i)}finally{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()}}async runAsync(e,n){const i=this.createProgressMonitor(e);return this.tasks.push(i),this.notifyUpdate(),n(i).finally(()=>{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()})}createProgressMonitor(e){const n={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(n,{set:(i,s,o)=>(i[s]=o,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const lr=new fc;Mt.put("taskService",lr);var mc=Object.getOwnPropertyDescriptor,gc=(t,e,n,i)=>{for(var s=i>1?void 0:i?mc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=a(s)||s);return s};it.registerContribution(as,{html:"<k-tasks></k-tasks>"});let qi=class extends pi(_t){render(){oa.get();const t=lr.getActiveTasks().length;if(t!=0)return V`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${t}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${t}
                </wa-button>
                ${lr.getActiveTasks().map(e=>{const n=e.progress>=0||e.totalSteps>0,i=e.progress>=0?e.progress:e.totalSteps>0?Math.round(e.currentStep/e.totalSteps*100):0,s=e.progress<0&&e.totalSteps>0;return V`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${e.name}</strong>: ${e.message}
                            </div>
                            ${n?V`
                                <wa-progress-bar value="${i}" style="--track-height: 1.25rem;">
                                    ${s?`${e.currentStep}/${e.totalSteps} - `:""}${i}%
                                </wa-progress-bar>
                            `:V`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};qi.styles=Rt`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;qi=gc([mt("k-tasks")],qi);var vc=Object.getOwnPropertyDescriptor,yc=(t,e,n,i)=>{for(var s=i>1?void 0:i?vc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=a(s)||s);return s};const $s="<no workspace>";let Ns=class extends Hn{constructor(){super(...arguments),this.workspaceName=$s}doInitUI(){this.updateWorkspaceName(),on(Tr,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Dt.getWorkspace().then(t=>{this.workspaceName=(t==null?void 0:t.getName())||$s,this.requestUpdate()})}handleLoadWorkspace(){Oe.execute("load_workspace",{source:this})}render(){return V`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};Ns=yc([mt("k-workspace-name")],Ns);var bc=Object.getOwnPropertyDescriptor,wc=(t,e,n,i)=>{for(var s=i>1?void 0:i?bc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=a(s)||s);return s};const Ms="<no part>";it.registerContribution(as,{html:"<k-part-name></k-part-name>"});let Fs=class extends pi(Hn){getPartName(){var e;const t=Fe.get();return t&&(((e=t.tabContribution)==null?void 0:e.label)||t.getAttribute("id"))||Ms}render(){var n;const t=Fe.get(),e=((n=t==null?void 0:t.tabContribution)==null?void 0:n.icon)||"box";return V`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Fs=wc([mt("k-part-name")],Fs);var In={},rn={},qs;function Ic(){if(qs)return rn;qs=1,Object.defineProperty(rn,"__esModule",{value:!0});function t(u){const r=u||"";return function(){throw new Error("this method "+r+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(u,r){if(!u)throw new Error(r||"Assertion failed")}function n(u,r,l){let p;Object.defineProperty(u,r,{get(){return p||(p=l.call(this)),p}})}function i(u){return u&&Object.assign({},u)}function s(u,r){const l=[];for(;r-- >0;)l.push(u());return l}function o(u,r){return new Array(r+1).join(u)}function a(u,r){return s(()=>u,r)}function h(u){const r=[];for(let l=0;l<u.length;l++){const p=u[l];u.lastIndexOf(p)!==l&&r.indexOf(p)<0&&r.push(p)}return r}function v(u){const r=[];return u.forEach(l=>{r.indexOf(l)<0&&r.push(l)}),r}function b(u){const r=u[0];return r===r.toUpperCase()}function I(u){return!b(u)}function S(u,r,l){const p=l||" ";return u.length<r?o(p,r-u.length)+u:u}function y(){this.strings=[]}y.prototype.append=function(u){this.strings.push(u)},y.prototype.contents=function(){return this.strings.join("")};const C=u=>String.fromCodePoint(parseInt(u,16));function M(u){if(u.charAt(0)==="\\")switch(u.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return C(u.slice(2,4));case"u":return u.charAt(2)==="{"?C(u.slice(3,-1)):C(u.slice(2,6));default:return u.charAt(1)}else return u}function $(u){if(u==null)return String(u);const r=Object.prototype.toString.call(u);try{let l;return u.constructor&&u.constructor.name?l=u.constructor.name:r.indexOf("[object ")===0?l=r.slice(8,-1):l=typeof u,l+": "+JSON.stringify(String(u))}catch{return r}}var W=Object.freeze({__proto__:null,abstract:t,assert:e,defineLazyProperty:n,clone:i,repeatFn:s,repeatStr:o,repeat:a,getDuplicates:h,copyWithoutDuplicates:v,isSyntactic:b,isLexical:I,padLeft:S,StringBuffer:y,unescapeCodePoint:M,unexpectedObjToString:$});const re={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class U{constructor(){if(this.constructor===U)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(r){return r&&(this.source=r.trimmed()),this}}const R=Object.create(U.prototype),G=Object.create(U.prototype);class D extends U{constructor(r){super(),this.obj=r}}class w extends U{constructor(r,l){super(),this.from=r,this.to=l,this.matchCodePoint=r.length>1||l.length>1}}class q extends U{constructor(r){super(),this.index=r}}class j extends U{constructor(r){super(),this.terms=r}}class se extends j{constructor(r,l,p){const g=r.rules[l].body;super([p,g]),this.superGrammar=r,this.name=l,this.body=p}}class ve extends j{constructor(r,l,p,g){const T=r.rules[l].body;super([...p,T,...g]),this.superGrammar=r,this.ruleName=l,this.expansionPos=p.length}}class Q extends U{constructor(r){super(),this.factors=r}}class ae extends U{constructor(r){super(),this.expr=r}}class pe extends ae{}class Se extends ae{}class Ue extends ae{}pe.prototype.operator="*",Se.prototype.operator="+",Ue.prototype.operator="?",pe.prototype.minNumMatches=0,Se.prototype.minNumMatches=1,Ue.prototype.minNumMatches=0,pe.prototype.maxNumMatches=Number.POSITIVE_INFINITY,Se.prototype.maxNumMatches=Number.POSITIVE_INFINITY,Ue.prototype.maxNumMatches=1;class be extends U{constructor(r){super(),this.expr=r}}class ye extends U{constructor(r){super(),this.expr=r}}class We extends U{constructor(r){super(),this.expr=r}}class ie extends U{constructor(r,l=[]){super(),this.ruleName=r,this.args=l}isSyntactic(){return b(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class Ee extends U{constructor(r){super(),this.category=r,this.pattern=re[r]}}function Pe(u,r){let l;return r?(l=new Error(r.getLineAndColumnMessage()+u),l.shortMessage=u,l.interval=r):l=new Error(u),l}function x(){return Pe("Interval sources don't match")}function _(u){const r=new Error;return Object.defineProperty(r,"message",{enumerable:!0,get(){return u.message}}),Object.defineProperty(r,"shortMessage",{enumerable:!0,get(){return"Expected "+u.getExpectedText()}}),r.interval=u.getInterval(),r}function ce(u,r,l){const p=r?`Grammar ${u} is not declared in namespace '${r}'`:"Undeclared grammar "+u;return Pe(p,l)}function Ae(u,r){return Pe("Grammar "+u.name+" is already declared in this namespace")}function Ve(u){return Pe(`Grammar '${u.name}' does not support incremental parsing`)}function Le(u,r,l){return Pe("Rule "+u+" is not declared in grammar "+r,l)}function P(u,r,l){return Pe("Cannot override rule "+u+" because it is not declared in "+r,l)}function z(u,r,l){return Pe("Cannot extend rule "+u+" because it is not declared in "+r,l)}function L(u,r,l,p){let g="Duplicate declaration for rule '"+u+"' in grammar '"+r+"'";return r!==l&&(g+=" (originally declared in '"+l+"')"),Pe(g,p)}function J(u,r,l,p){return Pe("Wrong number of parameters for rule "+u+" (expected "+r+", got "+l+")",p)}function te(u,r,l,p){return Pe("Wrong number of arguments for rule "+u+" (expected "+r+", got "+l+")",p)}function Z(u,r,l){return Pe("Duplicate parameter names in rule "+u+": "+r.join(", "),l)}function B(u,r){return Pe("Invalid parameter to rule "+u+": "+r+" has arity "+r.getArity()+", but parameter expressions must have arity 1",r.source)}const ne="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function me(u,r){return Pe("Cannot apply syntactic rule "+u+" from here (inside a lexical context)",r.source)}function Te(u){const{ruleName:r}=u;return Pe(`applySyntactic is for syntactic rules, but '${r}' is a lexical rule. `+ne,u.source)}function Re(u){return Pe("applySyntactic is not required here (in a syntactic context)",u.source)}function fe(u,r){return Pe("Incorrect argument type: expected "+u,r.source)}function Ie(u){return Pe("'...' can appear at most once in a rule body",u.source)}function $e(u){const r=u._node;e(r&&r.isNonterminal()&&r.ctorName==="escapeChar_unicodeCodePoint");const l=u.children.slice(1,-1).map(g=>g.source),p=l[0].coverageWith(...l.slice(1));return Pe(`U+${p.contents} is not a valid Unicode code point`,p)}function de(u,r){const l=r.length>0?r[r.length-1].args:[];let g="Nullable expression "+u.expr.substituteParams(l)+" is not allowed inside '"+u.operator+"' (possible infinite loop)";if(r.length>0){const T=r.map(F=>new ie(F.ruleName,F.args)).join(`
`);g+=`
Application stack (most recent application last):
`+T}return Pe(g,u.expr.source)}function lt(u,r,l,p){return Pe("Rule "+u+" involves an alternation which has inconsistent arity (expected "+r+", got "+l+")",p.source)}function Ft(u){const r=u.map(l=>l.message);return Pe(["Errors:"].concat(r).join(`
- `),u[0].interval)}function bt(u,r,l,p){let g=p.slice(0,-1).map(X=>{const he="  "+X[0].name+" > "+X[1];return X.length===3?he+" for '"+X[2]+"'":he}).join(`
`);g+=`
  `+r+" > "+u;let T="";u==="_iter"&&(T=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const F=[`Missing semantic action for '${u}' in ${l} '${r}'.${T}`,"Action stack (most recent call last):",g].join(`
`),ee=Pe(F);return ee.name="missingSemanticAction",ee}function ct(u){if(u.length===1)throw u[0];if(u.length>1)throw Ft(u)}function wt(u){let r=0;return u.map(p=>{const g=p.toString();return r=Math.max(r,g.length),g}).map(p=>S(p,r))}function Gt(u,r,l){const p=u.length,g=u.slice(0,l),T=u.slice(l+r.length);return(g+r+T).substr(0,p)}function cn(...u){const r=this,{offset:l}=r,{repeatStr:p}=W,g=new y;g.append("Line "+r.lineNum+", col "+r.colNum+`:
`);const T=wt([r.prevLine==null?0:r.lineNum-1,r.lineNum,r.nextLine==null?0:r.lineNum+1]),F=(K,H,le)=>{g.append(le+T[K]+" | "+H+`
`)};r.prevLine!=null&&F(0,r.prevLine,"  "),F(1,r.line,"> ");const ee=r.line.length;let X=p(" ",ee+1);for(let K=0;K<u.length;++K){let H=u[K][0],le=u[K][1];e(H>=0&&H<=le,"range start must be >= 0 and <= end");const xe=l-r.colNum+1;H=Math.max(0,H-xe),le=Math.min(le-xe,ee),X=Gt(X,p("~",le-H),H)}const he=2+T[1].length+3;return g.append(p(" ",he)),X=Gt(X,"^",r.colNum-1),g.append(X.replace(/ +$/,"")+`
`),r.nextLine!=null&&F(2,r.nextLine,"  "),g.contents()}let Sn=[];function Xt(u){Sn.push(u)}function oe(u){Sn.forEach(r=>{r(u)}),Sn=null}function Cn(u,r){let l=1,p=1,g=0,T=0,F=null,ee=null,X=-1;for(;g<r;){const H=u.charAt(g++);H===`
`?(l++,p=1,X=T,T=g):H!=="\r"&&p++}let he=u.indexOf(`
`,T);if(he===-1)he=u.length;else{const H=u.indexOf(`
`,he+1);F=H===-1?u.slice(he):u.slice(he,H),F=F.replace(/^\r?\n/,"").replace(/\r$/,"")}X>=0&&(ee=u.slice(X,T).replace(/\r?\n$/,""));const K=u.slice(T,he).replace(/\r$/,"");return{offset:r,lineNum:l,colNum:p,line:K,prevLine:ee,nextLine:F,toString:cn}}function vn(u,r,...l){return Cn(u,r).toString(...l)}const qt=(()=>{let u=0;return r=>""+r+u++})();class nt{constructor(r,l,p){this.sourceString=r,this.startIdx=l,this.endIdx=p}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...r){return nt.coverage(...r,this)}collapsedLeft(){return new nt(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new nt(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return Cn(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const r=[this.startIdx,this.endIdx];return vn(this.sourceString,this.startIdx,r)}minus(r){if(this.sourceString!==r.sourceString)throw x();return this.startIdx===r.startIdx&&this.endIdx===r.endIdx?[]:this.startIdx<r.startIdx&&r.endIdx<this.endIdx?[new nt(this.sourceString,this.startIdx,r.startIdx),new nt(this.sourceString,r.endIdx,this.endIdx)]:this.startIdx<r.endIdx&&r.endIdx<this.endIdx?[new nt(this.sourceString,r.endIdx,this.endIdx)]:this.startIdx<r.startIdx&&r.startIdx<this.endIdx?[new nt(this.sourceString,this.startIdx,r.startIdx)]:[this]}relativeTo(r){if(this.sourceString!==r.sourceString)throw x();return e(this.startIdx>=r.startIdx&&this.endIdx<=r.endIdx,"other interval does not cover this one"),new nt(this.sourceString,this.startIdx-r.startIdx,this.endIdx-r.startIdx)}trimmed(){const{contents:r}=this,l=this.startIdx+r.match(/^\s*/)[0].length,p=this.endIdx-r.match(/\s*$/)[0].length;return new nt(this.sourceString,l,p)}subInterval(r,l){const p=this.startIdx+r;return new nt(this.sourceString,p,p+l)}}nt.coverage=function(u,...r){let{startIdx:l,endIdx:p}=u;for(const g of r){if(g.sourceString!==u.sourceString)throw x();l=Math.min(l,g.startIdx),p=Math.max(p,g.endIdx)}return new nt(u.sourceString,l,p)};const Wt=65535;class Ne{constructor(r){this.source=r,this.pos=0,this.examinedLength=0}atEnd(){const r=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),r}next(){const r=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),r}nextCharCode(){const r=this.next();return r&&r.charCodeAt(0)}nextCodePoint(){const r=this.source.slice(this.pos++).codePointAt(0);return r>Wt&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),r}matchString(r,l){let p;if(l){for(p=0;p<r.length;p++){const g=this.next(),T=r[p];if(g==null||g.toUpperCase()!==T.toUpperCase())return!1}return!0}for(p=0;p<r.length;p++)if(this.next()!==r[p])return!1;return!0}sourceSlice(r,l){return this.source.slice(r,l)}interval(r,l){return new nt(this.source,r,l||this.pos)}}class f{constructor(r,l,p,g,T,F,ee){this.matcher=r,this.input=l,this.startExpr=p,this._cst=g,this._cstOffset=T,this._rightmostFailurePosition=F,this._rightmostFailures=ee,this.failed()&&(n(this,"message",function(){const X="Expected "+this.getExpectedText();return vn(this.input,this.getRightmostFailurePosition())+X}),n(this,"shortMessage",function(){const X="expected "+this.getExpectedText(),he=Cn(this.input,this.getRightmostFailurePosition());return"Line "+he.lineNum+", col "+he.colNum+": "+X}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const r=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=r.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const r=new y;let l=this.getRightmostFailures();l=l.filter(p=>!p.isFluffy());for(let p=0;p<l.length;p++)p>0&&(p===l.length-1?r.append(l.length>2?", or ":" or "):r.append(", ")),r.append(l[p].toString());return r.contents()}getInterval(){const r=this.getRightmostFailurePosition();return new nt(this.input,r,r)}}class k{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(r){return this.applicationMemoKeyStack.indexOf(r.toMemoKey())>=0}enter(r){this.applicationMemoKeyStack.push(r.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(r,l){l.isLeftRecursion=!0,l.headApplication=r,l.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=l;const{applicationMemoKeyStack:p}=this,g=p.indexOf(r.toMemoKey())+1,T=p.slice(g);l.isInvolved=function(F){return T.indexOf(F)>=0},l.updateInvolvedApplicationMemoKeys=function(){for(let F=g;F<p.length;F++){const ee=p[F];this.isInvolved(ee)||T.push(ee)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(r){if(!r.isLeftRecursion)return!0;const{applicationMemoKeyStack:l}=this;for(let p=0;p<l.length;p++){const g=l[p];if(r.isInvolved(g))return!1}return!0}memoize(r,l){return this.memo[r]=l,this.maxExaminedLength=Math.max(this.maxExaminedLength,l.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,l.rightmostFailureOffset),l}clearObsoleteEntries(r,l){if(r+this.maxExaminedLength<=l)return;const{memo:p}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(p).forEach(g=>{const T=p[g];r+T.examinedLength>l?delete p[g]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,T.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,T.rightmostFailureOffset))})}}const E="✗",c="✓",d="⋅",m="⇒",O="␉",A="␊",N="␍",Y={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function ue(u){return a(" ",u).join("")}function ge(u,r,l){const p=qe(u.slice(r,r+l));return p.length<l?p+a(" ",l-p.length).join(""):p}function qe(u){return typeof u=="string"?u.replace(/ /g,d).replace(/\t/g,O).replace(/\n/g,A).replace(/\r/g,N):String(u)}class ke{constructor(r,l,p,g,T,F,ee){this.input=r,this.pos=this.pos1=l,this.pos2=p,this.source=new nt(r,l,p),this.expr=g,this.bindings=F,this.children=ee||[],this.terminatingLREntry=null,this._flags=T?Y.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(r){const l=new ke(this.input,this.pos,this.pos2,r,this.succeeded,this.bindings,this.children);return l.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,l.isImplicitSpaces=this.isImplicitSpaces,l.isMemoized=this.isMemoized,l.isRootNode=this.isRootNode,l.terminatesLR=this.terminatesLR,l.terminatingLREntry=this.terminatingLREntry,l}recordLRTermination(r,l){this.terminatingLREntry=new ke(this.input,this.pos,this.pos2,this.expr,!1,[l],[r]),this.terminatingLREntry.terminatesLR=!0}walk(r,l){let p=r;typeof p=="function"&&(p={enter:p});function g(T,F,ee){let X=!0;p.enter&&p.enter.call(l,T,F,ee)===ke.prototype.SKIP&&(X=!1),X&&(T.children.forEach(he=>{g(he,T,ee+1)}),p.exit&&p.exit.call(l,T,F,ee))}this.isRootNode?this.children.forEach(T=>{g(T,null,0)}):g(this,null,0)}toString(){const r=new y;return this.walk((l,p,g)=>{if(!l)return this.SKIP;if(l.expr.constructor.name!=="Alt"){if(r.append(ge(l.input,l.pos,10)+ue(g*2+1)),r.append((l.succeeded?c:E)+" "+l.displayString),l.isHeadOfLeftRecursion&&r.append(" (LR)"),l.succeeded){const F=qe(l.source.contents);r.append(" "+m+"  "),r.append(typeof F=="string"?'"'+F+'"':F)}r.append(`
`)}}),r.contents()}}ke.prototype.SKIP={},Object.keys(Y).forEach(u=>{const r=Y[u];Object.defineProperty(ke.prototype,u,{get(){return(this._flags&r)!==0},set(l){l?this._flags|=r:this._flags&=~r}})}),U.prototype.allowsSkippingPrecedingSpace=t("allowsSkippingPrecedingSpace"),R.allowsSkippingPrecedingSpace=G.allowsSkippingPrecedingSpace=ie.prototype.allowsSkippingPrecedingSpace=D.prototype.allowsSkippingPrecedingSpace=w.prototype.allowsSkippingPrecedingSpace=Ee.prototype.allowsSkippingPrecedingSpace=function(){return!0},j.prototype.allowsSkippingPrecedingSpace=ae.prototype.allowsSkippingPrecedingSpace=We.prototype.allowsSkippingPrecedingSpace=ye.prototype.allowsSkippingPrecedingSpace=be.prototype.allowsSkippingPrecedingSpace=q.prototype.allowsSkippingPrecedingSpace=Q.prototype.allowsSkippingPrecedingSpace=function(){return!1};let ze;Xt(u=>{ze=u});let De;U.prototype.assertAllApplicationsAreValid=function(u,r){De=0,this._assertAllApplicationsAreValid(u,r)},U.prototype._assertAllApplicationsAreValid=t("_assertAllApplicationsAreValid"),R._assertAllApplicationsAreValid=G._assertAllApplicationsAreValid=D.prototype._assertAllApplicationsAreValid=w.prototype._assertAllApplicationsAreValid=q.prototype._assertAllApplicationsAreValid=Ee.prototype._assertAllApplicationsAreValid=function(u,r){},We.prototype._assertAllApplicationsAreValid=function(u,r){De++,this.expr._assertAllApplicationsAreValid(u,r),De--},j.prototype._assertAllApplicationsAreValid=function(u,r){for(let l=0;l<this.terms.length;l++)this.terms[l]._assertAllApplicationsAreValid(u,r)},Q.prototype._assertAllApplicationsAreValid=function(u,r){for(let l=0;l<this.factors.length;l++)this.factors[l]._assertAllApplicationsAreValid(u,r)},ae.prototype._assertAllApplicationsAreValid=be.prototype._assertAllApplicationsAreValid=ye.prototype._assertAllApplicationsAreValid=function(u,r){this.expr._assertAllApplicationsAreValid(u,r)},ie.prototype._assertAllApplicationsAreValid=function(u,r,l=!1){const p=r.rules[this.ruleName],g=b(u)&&De===0;if(!p)throw Le(this.ruleName,r.name,this.source);if(!l&&b(this.ruleName)&&!g)throw me(this.ruleName,this);const T=this.args.length,F=p.formals.length;if(T!==F)throw te(this.ruleName,F,T,this.source);const ee=ze&&p===ze.rules.applySyntactic;if(ze&&p===ze.rules.caseInsensitive&&!(this.args[0]instanceof D))throw fe('a Terminal (e.g. "abc")',this.args[0]);if(ee){const he=this.args[0];if(!(he instanceof ie))throw fe("a syntactic rule application",he);if(!b(he.ruleName))throw Te(he);if(g)throw Re(this)}this.args.forEach(he=>{if(he._assertAllApplicationsAreValid(u,r,ee),he.getArity()!==1)throw B(this.ruleName,he)})},U.prototype.assertChoicesHaveUniformArity=t("assertChoicesHaveUniformArity"),R.assertChoicesHaveUniformArity=G.assertChoicesHaveUniformArity=D.prototype.assertChoicesHaveUniformArity=w.prototype.assertChoicesHaveUniformArity=q.prototype.assertChoicesHaveUniformArity=We.prototype.assertChoicesHaveUniformArity=Ee.prototype.assertChoicesHaveUniformArity=function(u){},j.prototype.assertChoicesHaveUniformArity=function(u){if(this.terms.length===0)return;const r=this.terms[0].getArity();for(let l=0;l<this.terms.length;l++){const p=this.terms[l];p.assertChoicesHaveUniformArity();const g=p.getArity();if(r!==g)throw lt(u,r,g,p)}},se.prototype.assertChoicesHaveUniformArity=function(u){const r=this.terms[0].getArity(),l=this.terms[1].getArity();if(r!==l)throw lt(u,l,r,this.terms[0])},Q.prototype.assertChoicesHaveUniformArity=function(u){for(let r=0;r<this.factors.length;r++)this.factors[r].assertChoicesHaveUniformArity(u)},ae.prototype.assertChoicesHaveUniformArity=function(u){this.expr.assertChoicesHaveUniformArity(u)},be.prototype.assertChoicesHaveUniformArity=function(u){},ye.prototype.assertChoicesHaveUniformArity=function(u){this.expr.assertChoicesHaveUniformArity(u)},ie.prototype.assertChoicesHaveUniformArity=function(u){},U.prototype.assertIteratedExprsAreNotNullable=t("assertIteratedExprsAreNotNullable"),R.assertIteratedExprsAreNotNullable=G.assertIteratedExprsAreNotNullable=D.prototype.assertIteratedExprsAreNotNullable=w.prototype.assertIteratedExprsAreNotNullable=q.prototype.assertIteratedExprsAreNotNullable=Ee.prototype.assertIteratedExprsAreNotNullable=function(u){},j.prototype.assertIteratedExprsAreNotNullable=function(u){for(let r=0;r<this.terms.length;r++)this.terms[r].assertIteratedExprsAreNotNullable(u)},Q.prototype.assertIteratedExprsAreNotNullable=function(u){for(let r=0;r<this.factors.length;r++)this.factors[r].assertIteratedExprsAreNotNullable(u)},ae.prototype.assertIteratedExprsAreNotNullable=function(u){if(this.expr.assertIteratedExprsAreNotNullable(u),this.expr.isNullable(u))throw de(this,[])},Ue.prototype.assertIteratedExprsAreNotNullable=be.prototype.assertIteratedExprsAreNotNullable=ye.prototype.assertIteratedExprsAreNotNullable=We.prototype.assertIteratedExprsAreNotNullable=function(u){this.expr.assertIteratedExprsAreNotNullable(u)},ie.prototype.assertIteratedExprsAreNotNullable=function(u){this.args.forEach(r=>{r.assertIteratedExprsAreNotNullable(u)})};class st{constructor(r){this.matchLength=r}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(r){if(this.children)return this.children[r]}indexOfChild(r){return this.children.indexOf(r)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(r){const l=this.indexOfChild(r);if(l<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(l===0)throw new Error("cannot get child before first child");return this.childAt(l-1)}childAfter(r){const l=this.indexOfChild(r);if(l<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(l===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(l+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class _e extends st{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class et extends st{constructor(r,l,p,g){super(g),this.ruleName=r,this.children=l,this.childOffsets=p}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return I(this.ctorName)}isSyntactic(){return b(this.ctorName)}}class $t extends st{constructor(r,l,p,g){super(p),this.children=r,this.childOffsets=l,this.optional=g}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}U.prototype.eval=t("eval"),R.eval=function(u){const{inputStream:r}=u,l=r.pos,p=r.nextCodePoint();return p!==void 0?(u.pushBinding(new _e(String.fromCodePoint(p).length),l),!0):(u.processFailure(l,this),!1)},G.eval=function(u){const{inputStream:r}=u,l=r.pos;return r.atEnd()?(u.pushBinding(new _e(0),l),!0):(u.processFailure(l,this),!1)},D.prototype.eval=function(u){const{inputStream:r}=u,l=r.pos;return r.matchString(this.obj)?(u.pushBinding(new _e(this.obj.length),l),!0):(u.processFailure(l,this),!1)},w.prototype.eval=function(u){const{inputStream:r}=u,l=r.pos,p=this.matchCodePoint?r.nextCodePoint():r.nextCharCode();return p!==void 0&&this.from.codePointAt(0)<=p&&p<=this.to.codePointAt(0)?(u.pushBinding(new _e(String.fromCodePoint(p).length),l),!0):(u.processFailure(l,this),!1)},q.prototype.eval=function(u){return u.eval(u.currentApplication().args[this.index])},We.prototype.eval=function(u){u.enterLexifiedContext();const r=u.eval(this.expr);return u.exitLexifiedContext(),r},j.prototype.eval=function(u){for(let r=0;r<this.terms.length;r++)if(u.eval(this.terms[r]))return!0;return!1},Q.prototype.eval=function(u){for(let r=0;r<this.factors.length;r++){const l=this.factors[r];if(!u.eval(l))return!1}return!0},ae.prototype.eval=function(u){const{inputStream:r}=u,l=r.pos,p=this.getArity(),g=[],T=[];for(;g.length<p;)g.push([]),T.push([]);let F=0,ee=l,X;for(;F<this.maxNumMatches&&u.eval(this.expr);){if(r.pos===ee)throw de(this,u._applicationStack);ee=r.pos,F++;const le=u._bindings.splice(u._bindings.length-p,p),xe=u._bindingOffsets.splice(u._bindingOffsets.length-p,p);for(X=0;X<le.length;X++)g[X].push(le[X]),T[X].push(xe[X])}if(F<this.minNumMatches)return!1;let he=u.posToOffset(l),K=0;if(F>0){const le=g[p-1],xe=T[p-1],je=xe[xe.length-1]+le[le.length-1].matchLength;he=T[0][0],K=je-he}const H=this instanceof Ue;for(X=0;X<g.length;X++)u._bindings.push(new $t(g[X],T[X],K,H)),u._bindingOffsets.push(he);return!0},be.prototype.eval=function(u){const{inputStream:r}=u,l=r.pos;u.pushFailuresInfo();const p=u.eval(this.expr);return u.popFailuresInfo(),p?(u.processFailure(l,this),!1):(r.pos=l,!0)},ye.prototype.eval=function(u){const{inputStream:r}=u,l=r.pos;return u.eval(this.expr)?(r.pos=l,!0):!1},ie.prototype.eval=function(u){const r=u.currentApplication(),l=r?r.args:[],p=this.substituteParams(l),g=u.getCurrentPosInfo();if(g.isActive(p))return p.handleCycle(u);const T=p.toMemoKey(),F=g.memo[T];if(F&&g.shouldUseMemoizedResult(F)){if(u.hasNecessaryInfo(F))return u.useMemoizedResult(u.inputStream.pos,F);delete g.memo[T]}return p.reallyEval(u)},ie.prototype.handleCycle=function(u){const r=u.getCurrentPosInfo(),{currentLeftRecursion:l}=r,p=this.toMemoKey();let g=r.memo[p];return l&&l.headApplication.toMemoKey()===p?g.updateInvolvedApplicationMemoKeys():g||(g=r.memoize(p,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),r.startLeftRecursion(this,g)),u.useMemoizedResult(u.inputStream.pos,g)},ie.prototype.reallyEval=function(u){const{inputStream:r}=u,l=r.pos,p=u.getCurrentPosInfo(),g=u.grammar.rules[this.ruleName],{body:T}=g,{description:F}=g;u.enterApplication(p,this),F&&u.pushFailuresInfo();const ee=r.examinedLength;r.examinedLength=0;let X=this.evalOnce(T,u);const he=p.currentLeftRecursion,K=this.toMemoKey(),H=he&&he.headApplication.toMemoKey()===K;let le;u.doNotMemoize?u.doNotMemoize=!1:H?(X=this.growSeedResult(T,u,l,he,X),p.endLeftRecursion(),le=he,le.examinedLength=r.examinedLength-l,le.rightmostFailureOffset=u._getRightmostFailureOffset(),p.memoize(K,le)):(!he||!he.isInvolved(K))&&(le=p.memoize(K,{matchLength:r.pos-l,examinedLength:r.examinedLength-l,value:X,failuresAtRightmostPosition:u.cloneRecordedFailures(),rightmostFailureOffset:u._getRightmostFailureOffset()}));const xe=!!X;if(F&&(u.popFailuresInfo(),xe||u.processFailure(l,this),le&&(le.failuresAtRightmostPosition=u.cloneRecordedFailures())),u.isTracing()&&le){const je=u.getTraceEntry(l,this,xe,xe?[X]:[]);H&&(e(je.terminatingLREntry!=null||!xe),je.isHeadOfLeftRecursion=!0),le.traceEntry=je}return r.examinedLength=Math.max(r.examinedLength,ee),u.exitApplication(p,X),xe},ie.prototype.evalOnce=function(u,r){const{inputStream:l}=r,p=l.pos;if(r.eval(u)){const g=u.getArity(),T=r._bindings.splice(r._bindings.length-g,g),F=r._bindingOffsets.splice(r._bindingOffsets.length-g,g),ee=l.pos-p;return new et(this.ruleName,T,F,ee)}else return!1},ie.prototype.growSeedResult=function(u,r,l,p,g){if(!g)return!1;const{inputStream:T}=r;for(;;){if(p.matchLength=T.pos-l,p.value=g,p.failuresAtRightmostPosition=r.cloneRecordedFailures(),r.isTracing()){const F=r.trace[r.trace.length-1];p.traceEntry=new ke(r.input,l,T.pos,this,!0,[g],[F.clone()])}if(T.pos=l,g=this.evalOnce(u,r),T.pos-l<=p.matchLength)break;r.isTracing()&&r.trace.splice(-2,1)}return r.isTracing()&&p.traceEntry.recordLRTermination(r.trace.pop(),g),T.pos=l+p.matchLength,p.value},Ee.prototype.eval=function(u){const{inputStream:r}=u,l=r.pos,p=r.next();return p&&this.pattern.test(p)?(u.pushBinding(new _e(p.length),l),!0):(u.processFailure(l,this),!1)},U.prototype.getArity=t("getArity"),R.getArity=G.getArity=D.prototype.getArity=w.prototype.getArity=q.prototype.getArity=ie.prototype.getArity=Ee.prototype.getArity=function(){return 1},j.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},Q.prototype.getArity=function(){let u=0;for(let r=0;r<this.factors.length;r++)u+=this.factors[r].getArity();return u},ae.prototype.getArity=function(){return this.expr.getArity()},be.prototype.getArity=function(){return 0},ye.prototype.getArity=We.prototype.getArity=function(){return this.expr.getArity()};function He(u,r){const l={};if(u.source&&r){const p=u.source.relativeTo(r);l.sourceInterval=[p.startIdx,p.endIdx]}return l}U.prototype.outputRecipe=t("outputRecipe"),R.outputRecipe=function(u,r){return["any",He(this,r)]},G.outputRecipe=function(u,r){return["end",He(this,r)]},D.prototype.outputRecipe=function(u,r){return["terminal",He(this,r),this.obj]},w.prototype.outputRecipe=function(u,r){return["range",He(this,r),this.from,this.to]},q.prototype.outputRecipe=function(u,r){return["param",He(this,r),this.index]},j.prototype.outputRecipe=function(u,r){return["alt",He(this,r)].concat(this.terms.map(l=>l.outputRecipe(u,r)))},se.prototype.outputRecipe=function(u,r){return this.terms[0].outputRecipe(u,r)},ve.prototype.outputRecipe=function(u,r){const l=this.terms.slice(0,this.expansionPos),p=this.terms.slice(this.expansionPos+1);return["splice",He(this,r),l.map(g=>g.outputRecipe(u,r)),p.map(g=>g.outputRecipe(u,r))]},Q.prototype.outputRecipe=function(u,r){return["seq",He(this,r)].concat(this.factors.map(l=>l.outputRecipe(u,r)))},pe.prototype.outputRecipe=Se.prototype.outputRecipe=Ue.prototype.outputRecipe=be.prototype.outputRecipe=ye.prototype.outputRecipe=We.prototype.outputRecipe=function(u,r){return[this.constructor.name.toLowerCase(),He(this,r),this.expr.outputRecipe(u,r)]},ie.prototype.outputRecipe=function(u,r){return["app",He(this,r),this.ruleName,this.args.map(l=>l.outputRecipe(u,r))]},Ee.prototype.outputRecipe=function(u,r){return["unicodeChar",He(this,r),this.category]},U.prototype.introduceParams=t("introduceParams"),R.introduceParams=G.introduceParams=D.prototype.introduceParams=w.prototype.introduceParams=q.prototype.introduceParams=Ee.prototype.introduceParams=function(u){return this},j.prototype.introduceParams=function(u){return this.terms.forEach((r,l,p)=>{p[l]=r.introduceParams(u)}),this},Q.prototype.introduceParams=function(u){return this.factors.forEach((r,l,p)=>{p[l]=r.introduceParams(u)}),this},ae.prototype.introduceParams=be.prototype.introduceParams=ye.prototype.introduceParams=We.prototype.introduceParams=function(u){return this.expr=this.expr.introduceParams(u),this},ie.prototype.introduceParams=function(u){const r=u.indexOf(this.ruleName);if(r>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new q(r).withSource(this.source)}else return this.args.forEach((l,p,g)=>{g[p]=l.introduceParams(u)}),this},U.prototype.isNullable=function(u){return this._isNullable(u,Object.create(null))},U.prototype._isNullable=t("_isNullable"),R._isNullable=w.prototype._isNullable=q.prototype._isNullable=Se.prototype._isNullable=Ee.prototype._isNullable=function(u,r){return!1},G._isNullable=function(u,r){return!0},D.prototype._isNullable=function(u,r){return typeof this.obj=="string"?this.obj==="":!1},j.prototype._isNullable=function(u,r){return this.terms.length===0||this.terms.some(l=>l._isNullable(u,r))},Q.prototype._isNullable=function(u,r){return this.factors.every(l=>l._isNullable(u,r))},pe.prototype._isNullable=Ue.prototype._isNullable=be.prototype._isNullable=ye.prototype._isNullable=function(u,r){return!0},We.prototype._isNullable=function(u,r){return this.expr._isNullable(u,r)},ie.prototype._isNullable=function(u,r){const l=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(r,l)){const{body:p}=u.rules[this.ruleName],g=p.substituteParams(this.args);r[l]=!1,r[l]=g._isNullable(u,r)}return r[l]},U.prototype.substituteParams=t("substituteParams"),R.substituteParams=G.substituteParams=D.prototype.substituteParams=w.prototype.substituteParams=Ee.prototype.substituteParams=function(u){return this},q.prototype.substituteParams=function(u){return u[this.index]},j.prototype.substituteParams=function(u){return new j(this.terms.map(r=>r.substituteParams(u)))},Q.prototype.substituteParams=function(u){return new Q(this.factors.map(r=>r.substituteParams(u)))},ae.prototype.substituteParams=be.prototype.substituteParams=ye.prototype.substituteParams=We.prototype.substituteParams=function(u){return new this.constructor(this.expr.substituteParams(u))},ie.prototype.substituteParams=function(u){if(this.args.length===0)return this;{const r=this.args.map(l=>l.substituteParams(u));return new ie(this.ruleName,r)}};function yn(u){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(u)}function Qe(u){const r=Object.create(null);u.forEach(l=>{r[l]=(r[l]||0)+1}),Object.keys(r).forEach(l=>{if(r[l]<=1)return;let p=1;u.forEach((g,T)=>{g===l&&(u[T]=g+"_"+p++)})})}U.prototype.toArgumentNameList=t("toArgumentNameList"),R.toArgumentNameList=function(u,r){return["any"]},G.toArgumentNameList=function(u,r){return["end"]},D.prototype.toArgumentNameList=function(u,r){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+u]},w.prototype.toArgumentNameList=function(u,r){let l=this.from+"_to_"+this.to;return yn(l)||(l="_"+l),yn(l)||(l="$"+u),[l]},j.prototype.toArgumentNameList=function(u,r){const l=this.terms.map(T=>T.toArgumentNameList(u,!0)),p=[],g=l[0].length;for(let T=0;T<g;T++){const F=[];for(let X=0;X<this.terms.length;X++)F.push(l[X][T]);const ee=v(F);p.push(ee.join("_or_"))}return r||Qe(p),p},Q.prototype.toArgumentNameList=function(u,r){let l=[];return this.factors.forEach(p=>{const g=p.toArgumentNameList(u,!0);l=l.concat(g),u+=g.length}),r||Qe(l),l},ae.prototype.toArgumentNameList=function(u,r){const l=this.expr.toArgumentNameList(u,r).map(p=>p[p.length-1]==="s"?p+"es":p+"s");return r||Qe(l),l},Ue.prototype.toArgumentNameList=function(u,r){return this.expr.toArgumentNameList(u,r).map(l=>"opt"+l[0].toUpperCase()+l.slice(1))},be.prototype.toArgumentNameList=function(u,r){return[]},ye.prototype.toArgumentNameList=We.prototype.toArgumentNameList=function(u,r){return this.expr.toArgumentNameList(u,r)},ie.prototype.toArgumentNameList=function(u,r){return[this.ruleName]},Ee.prototype.toArgumentNameList=function(u,r){return["$"+u]},q.prototype.toArgumentNameList=function(u,r){return["param"+this.index]},U.prototype.toDisplayString=t("toDisplayString"),j.prototype.toDisplayString=Q.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},R.toDisplayString=G.toDisplayString=ae.prototype.toDisplayString=be.prototype.toDisplayString=ye.prototype.toDisplayString=We.prototype.toDisplayString=D.prototype.toDisplayString=w.prototype.toDisplayString=q.prototype.toDisplayString=function(){return this.toString()},ie.prototype.toDisplayString=function(){if(this.args.length>0){const u=this.args.map(r=>r.toDisplayString());return this.ruleName+"<"+u.join(",")+">"}else return this.ruleName},Ee.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function Ln(u){return u==="description"||u==="string"||u==="code"}class at{constructor(r,l,p){if(!Ln(p))throw new Error("invalid Failure type: "+p);this.pexpr=r,this.text=l,this.type=p,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(r){return this.getText()===r.getText()&&this.type===r.type&&(!this.isFluffy()||this.isFluffy()&&r.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const r=new at(this.pexpr,this.text,this.type);return this.isFluffy()&&r.makeFluffy(),r}toKey(){return this.toString()+"#"+this.type}}U.prototype.toFailure=t("toFailure"),R.toFailure=function(u){return new at(this,"any object","description")},G.toFailure=function(u){return new at(this,"end of input","description")},D.prototype.toFailure=function(u){return new at(this,this.obj,"string")},w.prototype.toFailure=function(u){return new at(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},be.prototype.toFailure=function(u){const r=this.expr===R?"nothing":"not "+this.expr.toFailure(u);return new at(this,r,"description")},ye.prototype.toFailure=function(u){return this.expr.toFailure(u)},ie.prototype.toFailure=function(u){let{description:r}=u.rules[this.ruleName];return r||(r=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new at(this,r,"description")},Ee.prototype.toFailure=function(u){return new at(this,"a Unicode ["+this.category+"] character","description")},j.prototype.toFailure=function(u){const l="("+this.terms.map(p=>p.toFailure(u)).join(" or ")+")";return new at(this,l,"description")},Q.prototype.toFailure=function(u){const l="("+this.factors.map(p=>p.toFailure(u)).join(" ")+")";return new at(this,l,"description")},ae.prototype.toFailure=function(u){const r="("+this.expr.toFailure(u)+this.operator+")";return new at(this,r,"description")},U.prototype.toString=t("toString"),R.toString=function(){return"any"},G.toString=function(){return"end"},D.prototype.toString=function(){return JSON.stringify(this.obj)},w.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},q.prototype.toString=function(){return"$"+this.index},We.prototype.toString=function(){return"#("+this.expr.toString()+")"},j.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(u=>u.toString()).join(" | ")+")"},Q.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(u=>u.toString()).join(" ")+")"},ae.prototype.toString=function(){return this.expr+this.operator},be.prototype.toString=function(){return"~"+this.expr},ye.prototype.toString=function(){return"&"+this.expr},ie.prototype.toString=function(){if(this.args.length>0){const u=this.args.map(r=>r.toString());return this.ruleName+"<"+u.join(",")+">"}else return this.ruleName},Ee.prototype.toString=function(){return"\\p{"+this.category+"}"};class en extends U{constructor(r){super(),this.obj=r}_getString(r){const l=r.currentApplication().args[this.obj.index];return e(l instanceof D,"expected a Terminal expression"),l.obj}allowsSkippingPrecedingSpace(){return!0}eval(r){const{inputStream:l}=r,p=l.pos,g=this._getString(r);return l.matchString(g,!0)?(r.pushBinding(new _e(g.length),p),!0):(r.processFailure(p,this),!1)}getArity(){return 1}substituteParams(r){return new en(this.obj.substituteParams(r))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(r){return new at(this,this.obj.toFailure(r)+" (case-insensitive)","description")}_isNullable(r,l){return this.obj._isNullable(r,l)}}var wi=Object.freeze({__proto__:null,CaseInsensitiveTerminal:en,PExpr:U,any:R,end:G,Terminal:D,Range:w,Param:q,Alt:j,Extend:se,Splice:ve,Seq:Q,Iter:ae,Star:pe,Plus:Se,Opt:Ue,Not:be,Lookahead:ye,Lex:We,Apply:ie,UnicodeChar:Ee});let Br;Xt(u=>{Br=u.rules.applySyntactic.body});const mr=new ie("spaces");class Gr{constructor(r,l,p){this.matcher=r,this.startExpr=l,this.grammar=r.grammar,this.input=r.getInput(),this.inputStream=new Ne(this.input),this.memoTable=r._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],p!==void 0&&(this.positionToRecordFailures=p,this.recordedFailures=Object.create(null))}posToOffset(r){return r-this._posStack[this._posStack.length-1]}enterApplication(r,l){this._posStack.push(this.inputStream.pos),this._applicationStack.push(l),this.inLexifiedContextStack.push(!1),r.enter(l),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(r,l){const p=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),r.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),l&&this.pushBinding(l,p)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const r=this.currentApplication();return r?r.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(mr),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(r){return r.allowsSkippingPrecedingSpace()&&r!==mr?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(r,l){this._bindings.push(r),this._bindingOffsets.push(this.posToOffset(l))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(r){for(;this._bindings.length>r;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(r){let l=this.memoTable[r];return l||(l=this.memoTable[r]=new k),l}processFailure(r,l){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,r),this.recordedFailures&&r===this.positionToRecordFailures){const p=this.currentApplication();p&&(l=l.substituteParams(p.args)),this.recordFailure(l.toFailure(this.grammar),!1)}}recordFailure(r,l){const p=r.toKey();this.recordedFailures[p]?this.recordedFailures[p].isFluffy()&&!r.isFluffy()&&this.recordedFailures[p].clearFluffy():this.recordedFailures[p]=l?r.clone():r}recordFailures(r,l){Object.keys(r).forEach(p=>{this.recordFailure(r[p],l)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const r=Object.create(null);return Object.keys(this.recordedFailures).forEach(l=>{r[l]=this.recordedFailures[l].clone()}),r}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(r,l){const p=this.memoTable[r];if(p&&l instanceof ie){const g=p.memo[l.toMemoKey()];if(g&&g.traceEntry){const T=g.traceEntry.cloneWithExpr(l);return T.isMemoized=!0,T}}return null}getTraceEntry(r,l,p,g){if(l instanceof ie){const T=this.currentApplication(),F=T?T.args:[];l=l.substituteParams(F)}return this.getMemoizedTraceEntry(r,l)||new ke(this.input,r,this.inputStream.pos,l,p,g,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(r){return this.trace&&!r.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+r.rightmostFailureOffset===this.positionToRecordFailures?!!r.failuresAtRightmostPosition:!0}useMemoizedResult(r,l){this.trace&&this.trace.push(l.traceEntry);const p=this.inputStream.pos+l.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,p),this.recordedFailures&&this.positionToRecordFailures===p&&l.failuresAtRightmostPosition&&this.recordFailures(l.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,l.examinedLength+r),l.value?(this.inputStream.pos+=l.matchLength,this.pushBinding(l.value,r),!0):!1}eval(r){const{inputStream:l}=this,p=this._bindings.length,g=this.userData;let T;this.recordedFailures&&(T=this.recordedFailures,this.recordedFailures=Object.create(null));const F=l.pos,ee=this.maybeSkipSpacesBefore(r);let X;this.trace&&(X=this.trace,this.trace=[]);const he=r.eval(this);if(this.trace){const K=this._bindings.slice(p),H=this.getTraceEntry(ee,r,he,K);H.isImplicitSpaces=r===mr,H.isRootNode=r===this.startExpr,X.push(H),this.trace=X}return he?this.recordedFailures&&l.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(K=>{this.recordedFailures[K].makeFluffy()}):(l.pos=F,this.truncateBindings(p),this.userData=g),this.recordedFailures&&this.recordFailures(T,!1),r===Br&&this.skipSpaces(),he}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let r;this.recordedFailures&&(r=Object.keys(this.recordedFailures).map(p=>this.recordedFailures[p]));const l=this._bindings[0];return l&&(l.grammar=this.grammar),new f(this.matcher,this.input,this.startExpr,l,this._bindingOffsets[0],this.rightmostFailurePosition,r)}getTrace(){this.trace=[];const r=this.getMatchResult(),l=this.trace[this.trace.length-1];return l.result=r,l}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Ce{constructor(r){this.grammar=r,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(r){return this._input!==r&&this.replaceInputRange(0,this._input.length,r),this}replaceInputRange(r,l,p){const g=this._input,T=this._memoTable;if(r<0||r>g.length||l<0||l>g.length||r>l)throw new Error("Invalid indices: "+r+" and "+l);this._input=g.slice(0,r)+p+g.slice(l),this._input!==g&&T.length>0&&(this._isMemoTableStale=!0);const F=T.slice(l);T.length=r;for(let ee=0;ee<p.length;ee++)T.push(void 0);for(const ee of F)T.push(ee);for(let ee=0;ee<r;ee++){const X=T[ee];X&&X.clearObsoleteEntries(ee,r)}return this}match(r,l={incremental:!0}){return this._match(this._getStartExpr(r),{incremental:l.incremental,tracing:!1})}trace(r,l={incremental:!0}){return this._match(this._getStartExpr(r),{incremental:l.incremental,tracing:!0})}_match(r,l={}){const p={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...l};if(!p.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Ve(this.grammar);const g=new Gr(this,r,p.positionToRecordFailures);return p.tracing?g.getTrace():g.getMatchResult()}_getStartExpr(r){const l=r||this.grammar.defaultStartRule;if(!l)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const p=this.grammar.parseApplication(l);return new Q([p,G])}}const ot=[],bn=(u,r)=>Object.prototype.hasOwnProperty.call(u,r);class gr{constructor(r,l,p){this._node=r,this.source=l,this._baseInterval=p,r.isNonterminal()&&e(l===p),this._childWrappers=[]}_forgetMemoizedResultFor(r){delete this._node[this._semantics.attributeKeys[r]],this.children.forEach(l=>{l._forgetMemoizedResultFor(r)})}child(r){if(!(0<=r&&r<this._node.numChildren()))return;let l=this._childWrappers[r];if(!l){const p=this._node.childAt(r),g=this._node.childOffsets[r],T=this._baseInterval.subInterval(g,p.matchLength),F=p.isNonterminal()?T:this._baseInterval;l=this._childWrappers[r]=this._semantics.wrap(p,T,F)}return l}_children(){for(let r=0;r<this._node.numChildren();r++)this.child(r);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(r){const l=r||[],p=l.map(F=>F._node),g=new $t(p,[],-1,!1),T=this._semantics.wrap(g,null,null);return T._childWrappers=l,T}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class Et{constructor(r,l){const p=this;if(this.grammar=r,this.checkedActionDicts=!1,this.Wrapper=class extends(l?l.Wrapper:gr){constructor(g,T,F){super(g,T,F),p.checkActionDictsIfHaventAlready(),this._semantics=p}toString(){return"[semantics wrapper for "+p.grammar.name+"]"}},this.super=l,l){if(!(r.equals(this.super.grammar)||r._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+r.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const g in this.attributes)Object.defineProperty(this.attributeKeys,g,{value:qt(g)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let r;for(r in this.operations)this.operations[r].checkActionDict(this.grammar);for(r in this.attributes)this.attributes[r].checkActionDict(this.grammar)}toRecipe(r){function l(g){return g.super!==Et.BuiltInSemantics._getSemantics()}let p=`(function(g) {
`;if(l(this)){p+="  var semantics = "+this.super.toRecipe(!0)+"(g";const g=this.super.grammar;let T=this.grammar;for(;T!==g;)p+=".superGrammar",T=T.superGrammar;p+=`);
`,p+="  return g.extendSemantics(semantics)"}else p+="  return g.createSemantics()";return["Operation","Attribute"].forEach(g=>{const T=this[g.toLowerCase()+"s"];Object.keys(T).forEach(F=>{const{actionDict:ee,formals:X,builtInDefault:he}=T[F];let K=F;X.length>0&&(K+="("+X.join(", ")+")");let H;l(this)&&this.super[g.toLowerCase()+"s"][F]?H="extend"+g:H="add"+g,p+=`
    .`+H+"("+JSON.stringify(K)+", {";const le=[];Object.keys(ee).forEach(xe=>{if(ee[xe]!==he){let je=ee[xe].toString().trim();je=je.replace(/^.*\(/,"function("),le.push(`
      `+JSON.stringify(xe)+": "+je)}}),p+=le.join(",")+`
    })`})}),p+=`;
  })`,r||(p=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+p+`(grammar);
  return semantics;
});
`),p}addOperationOrAttribute(r,l,p){const g=r+"s",T=Rn(l,r),{name:F}=T,{formals:ee}=T;this.assertNewName(F,r);const X=Yn(r,F,H),he={_default:X};Object.keys(p).forEach(le=>{he[le]=p[le]});const K=r==="operation"?new we(F,ee,he,X):new Ke(F,he,X);K.checkActionDict(this.grammar),this[g][F]=K;function H(...le){const xe=this._semantics[g][F];if(arguments.length!==xe.formals.length)throw new Error("Invalid number of arguments passed to "+F+" "+r+" (expected "+xe.formals.length+", got "+arguments.length+")");const je=Object.create(null);for(const[Nn,vr]of Object.entries(le)){const Xa=xe.formals[Nn];je[Xa]=vr}const vt=this.args;this.args=je;const Ct=xe.execute(this._semantics,this);return this.args=vt,Ct}r==="operation"?(this.Wrapper.prototype[F]=H,this.Wrapper.prototype[F].toString=function(){return"["+F+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,F,{get:H,configurable:!0}),Object.defineProperty(this.attributeKeys,F,{value:qt(F)}))}extendOperationOrAttribute(r,l,p){const g=r+"s";if(Rn(l,"attribute"),!(this.super&&l in this.super[g]))throw new Error("Cannot extend "+r+" '"+l+"': did not inherit an "+r+" with that name");if(bn(this[g],l))throw new Error("Cannot extend "+r+" '"+l+"' again");const T=this[g][l].formals,F=this[g][l].actionDict,ee=Object.create(F);Object.keys(p).forEach(X=>{ee[X]=p[X]}),this[g][l]=r==="operation"?new we(l,T,ee):new Ke(l,ee),this[g][l].checkActionDict(this.grammar)}assertNewName(r,l){if(bn(gr.prototype,r))throw new Error("Cannot add "+l+" '"+r+"': that's a reserved name");if(r in this.operations)throw new Error("Cannot add "+l+" '"+r+"': an operation with that name already exists");if(r in this.attributes)throw new Error("Cannot add "+l+" '"+r+"': an attribute with that name already exists")}wrap(r,l,p){const g=p||l;return r instanceof this.Wrapper?r:new this.Wrapper(r,l,g)}}function Rn(u,r){if(!Et.prototypeGrammar)return e(u.indexOf("(")===-1),{name:u,formals:[]};const l=Et.prototypeGrammar.match(u,r==="operation"?"OperationSignature":"AttributeSignature");if(l.failed())throw new Error(l.message);return Et.prototypeGrammarSemantics(l).parse()}function Yn(u,r,l){return function(...p){const T=(this._semantics.operations[r]||this._semantics.attributes[r]).formals.map(F=>this.args[F]);if(!this.isIteration()&&p.length===1)return l.apply(p[0],T);throw bt(this.ctorName,r,u,ot)}}Et.createSemantics=function(u,r){const l=new Et(u,r!==void 0?r:Et.BuiltInSemantics._getSemantics()),p=function(T){if(!(T instanceof f))throw new TypeError("Semantics expected a MatchResult, but got "+$(T));if(T.failed())throw new TypeError("cannot apply Semantics to "+T.toString());const F=T._cst;if(F.grammar!==u)throw new Error("Cannot use a MatchResult from grammar '"+F.grammar.name+"' with a semantics for '"+u.name+"'");const ee=new Ne(T.input);return l.wrap(F,ee.interval(T._cstOffset,T.input.length))};return p.addOperation=function(g,T){return l.addOperationOrAttribute("operation",g,T),p},p.extendOperation=function(g,T){return l.extendOperationOrAttribute("operation",g,T),p},p.addAttribute=function(g,T){return l.addOperationOrAttribute("attribute",g,T),p},p.extendAttribute=function(g,T){return l.extendOperationOrAttribute("attribute",g,T),p},p._getActionDict=function(g){const T=l.operations[g]||l.attributes[g];if(!T)throw new Error('"'+g+'" is not a valid operation or attribute name in this semantics for "'+u.name+'"');return T.actionDict},p._remove=function(g){let T;return g in l.operations?(T=l.operations[g],delete l.operations[g]):g in l.attributes&&(T=l.attributes[g],delete l.attributes[g]),delete l.Wrapper.prototype[g],T},p.getOperationNames=function(){return Object.keys(l.operations)},p.getAttributeNames=function(){return Object.keys(l.attributes)},p.getGrammar=function(){return l.grammar},p.toRecipe=function(g){return l.toRecipe(g)},p.toString=l.toString.bind(l),p._getSemantics=function(){return l},p};class we{constructor(r,l,p,g){this.name=r,this.formals=l,this.actionDict=p,this.builtInDefault=g}checkActionDict(r){r._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(r,l){try{const{ctorName:p}=l._node;let g=this.actionDict[p];return g?(ot.push([this,p]),g.apply(l,l._children())):l.isNonterminal()&&(g=this.actionDict._nonterminal,g)?(ot.push([this,"_nonterminal",p]),g.apply(l,l._children())):(ot.push([this,"default action",p]),this.actionDict._default.apply(l,l._children()))}finally{ot.pop()}}}we.prototype.typeName="operation";class Ke extends we{constructor(r,l,p){super(r,[],l,p)}execute(r,l){const p=l._node,g=r.attributeKeys[this.name];return bn(p,g)||(p[g]=we.prototype.execute.call(this,r,l)),p[g]}}Ke.prototype.typeName="attribute";const gt=["_iter","_terminal","_nonterminal","_default"];function Ye(u){return Object.keys(u.rules).sort().map(r=>u.rules[r])}const Ot=u=>u.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let tn,kt;class rt{constructor(r,l,p,g){if(this.name=r,this.superGrammar=l,this.rules=p,g){if(!(g in p))throw new Error("Invalid start rule: '"+g+"' is not a rule in grammar '"+r+"'");this.defaultStartRule=g}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Ce(this)}isBuiltIn(){return this===rt.ProtoBuiltInRules||this===rt.BuiltInRules}equals(r){if(this===r)return!0;if(r==null||this.name!==r.name||this.defaultStartRule!==r.defaultStartRule||!(this.superGrammar===r.superGrammar||this.superGrammar.equals(r.superGrammar)))return!1;const l=Ye(this),p=Ye(r);return l.length===p.length&&l.every((g,T)=>g.description===p[T].description&&g.formals.join(",")===p[T].formals.join(",")&&g.body.toString()===p[T].body.toString())}match(r,l){const p=this.matcher();return p.replaceInputRange(0,0,r),p.match(l)}trace(r,l){const p=this.matcher();return p.replaceInputRange(0,0,r),p.trace(l)}createSemantics(){return Et.createSemantics(this)}extendSemantics(r){return Et.createSemantics(this,r._getSemantics())}_checkTopDownActionDict(r,l,p){const g=[];for(const T in p){const F=p[T];if(!gt.includes(T)&&!(T in this.rules)){g.push(`'${T}' is not a valid semantic action for '${this.name}'`);continue}if(typeof F!="function"){g.push(`'${T}' must be a function in an action dictionary for '${this.name}'`);continue}const X=F.length,he=this._topDownActionArity(T);if(X!==he){let K;T==="_iter"||T==="_nonterminal"?K=`it should use a rest parameter, e.g. \`${T}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:K=`expected ${he}, got ${X}`,g.push(`Semantic action '${T}' has the wrong arity: ${K}`)}}if(g.length>0){const T=g.map(ee=>"- "+ee),F=new Error([`Found errors in the action dictionary of the '${l}' ${r}:`,...T].join(`
`));throw F.problems=g,F}}_topDownActionArity(r){return gt.includes(r)?0:this.rules[r].body.getArity()}_inheritsFrom(r){let l=this.superGrammar;for(;l;){if(l.equals(r,!0))return!0;l=l.superGrammar}return!1}toRecipe(r=void 0){const l={};this.source&&(l.source=this.source.contents);let p=null;this.defaultStartRule&&(p=this.defaultStartRule);const g={};Object.keys(this.rules).forEach(ee=>{const X=this.rules[ee],{body:he}=X,K=!this.superGrammar||!this.superGrammar.rules[ee];let H;K?H="define":H=he instanceof se?"extend":"override";const le={};if(X.source&&this.source){const vt=X.source.relativeTo(this.source);le.sourceInterval=[vt.startIdx,vt.endIdx]}const xe=K?X.description:null,je=he.outputRecipe(X.formals,this.source);g[ee]=[H,le,xe,X.formals,je]});let T="null";r?T=r:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(T=this.superGrammar.toRecipe());const F=[...["grammar",l,this.name].map(JSON.stringify),T,...[p,g].map(JSON.stringify)];return Ot(`[${F.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const r=new y;r.append("{");let l=!0;for(const p in this.rules){const{body:g}=this.rules[p];l?l=!1:r.append(","),r.append(`
`),r.append("  "),this.addSemanticActionTemplate(p,g,r)}return r.append(`
}`),r.contents()}addSemanticActionTemplate(r,l,p){p.append(r),p.append(": function(");const g=this._topDownActionArity(r);p.append(a("_",g).join(", ")),p.append(`) {
`),p.append("  }")}parseApplication(r){let l;if(r.indexOf("<")===-1)l=new ie(r);else{const g=tn.match(r,"Base_application");l=kt(g,{})}if(!(l.ruleName in this.rules))throw Le(l.ruleName,this.name);const{formals:p}=this.rules[l.ruleName];if(p.length!==l.args.length){const{source:g}=this.rules[l.ruleName];throw J(l.ruleName,p.length,l.args.length,g)}return l}_setUpMatchState(r){this._matchStateInitializer&&this._matchStateInitializer(r)}}rt.ProtoBuiltInRules=new rt("ProtoBuiltInRules",void 0,{any:{body:R,formals:[],description:"any character",primitive:!0},end:{body:G,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new en(new q(0)),formals:["str"],primitive:!0},lower:{body:new Ee("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new Ee("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new Ee("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new pe(new ie("space")),formals:[]},space:{body:new w("\0"," "),formals:[],description:"a space"}}),rt.initApplicationParser=function(u,r){tn=u,kt=r};class Tt{constructor(r){this.name=r}sourceInterval(r,l){return this.source.subInterval(r,l-r)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?rt.ProtoBuiltInRules:rt.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(r,l){const p=this.ensureSuperGrammar().rules[r];if(!p)throw P(r,this.superGrammar.name,l);return p}installOverriddenOrExtendedRule(r,l,p,g){const T=h(l);if(T.length>0)throw Z(r,T,g);const F=this.ensureSuperGrammar().rules[r],ee=F.formals,X=ee?ee.length:0;if(l.length!==X)throw J(r,X,l.length,g);return this.install(r,l,p,F.description,g)}install(r,l,p,g,T,F=!1){return this.rules[r]={body:p.introduceParams(l),formals:l,description:g,source:T,primitive:F},this}withSuperGrammar(r){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=r,this.rules=Object.create(r.rules),r.isBuiltIn()||(this.defaultStartRule=r.defaultStartRule),this}withDefaultStartRule(r){return this.defaultStartRule=r,this}withSource(r){return this.source=new Ne(r).interval(0,r.length),this}build(){const r=new rt(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);r._matchStateInitializer=r.superGrammar._matchStateInitializer,r.supportsIncrementalParsing=r.superGrammar.supportsIncrementalParsing;const l=[];let p=!1;return Object.keys(r.rules).forEach(g=>{const{body:T}=r.rules[g];try{T.assertChoicesHaveUniformArity(g)}catch(F){l.push(F)}try{T.assertAllApplicationsAreValid(g,r)}catch(F){l.push(F),p=!0}}),p||Object.keys(r.rules).forEach(g=>{const{body:T}=r.rules[g];try{T.assertIteratedExprsAreNotNullable(r,[])}catch(F){l.push(F)}}),l.length>0&&ct(l),this.source&&(r.source=this.source),r}define(r,l,p,g,T,F){if(this.ensureSuperGrammar(),this.superGrammar.rules[r])throw L(r,this.name,this.superGrammar.name,T);if(this.rules[r])throw L(r,this.name,this.name,T);const ee=h(l);if(ee.length>0)throw Z(r,ee,T);return this.install(r,l,p,g,T,F)}override(r,l,p,g,T){return this.ensureSuperGrammarRuleForOverriding(r,T),this.installOverriddenOrExtendedRule(r,l,p,T),this}extend(r,l,p,g,T){if(!this.ensureSuperGrammar().rules[r])throw z(r,this.superGrammar.name,T);const ee=new se(this.superGrammar,r,p);return ee.source=p.source,this.installOverriddenOrExtendedRule(r,l,ee,T),this}}class Pt{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(r){return new Tt(r)}grammar(r,l,p,g,T){const F=new Tt(l);return p&&F.withSuperGrammar(p instanceof rt?p:this.fromRecipe(p)),g&&F.withDefaultStartRule(g),r&&r.source&&F.withSource(r.source),this.currentDecl=F,Object.keys(T).forEach(ee=>{this.currentRuleName=ee;const X=T[ee],he=X[0],K=X[1],H=X[2],le=X[3],xe=this.fromRecipe(X[4]);let je;F.source&&K&&K.sourceInterval&&(je=F.source.subInterval(K.sourceInterval[0],K.sourceInterval[1]-K.sourceInterval[0])),F[he](ee,le,xe,H,je)}),this.currentRuleName=this.currentDecl=null,F.build()}terminal(r){return new D(r)}range(r,l){return new w(r,l)}param(r){return new q(r)}alt(...r){let l=[];for(let p of r)p instanceof U||(p=this.fromRecipe(p)),p instanceof j?l=l.concat(p.terms):l.push(p);return l.length===1?l[0]:new j(l)}seq(...r){let l=[];for(let p of r)p instanceof U||(p=this.fromRecipe(p)),p instanceof Q?l=l.concat(p.factors):l.push(p);return l.length===1?l[0]:new Q(l)}star(r){return r instanceof U||(r=this.fromRecipe(r)),new pe(r)}plus(r){return r instanceof U||(r=this.fromRecipe(r)),new Se(r)}opt(r){return r instanceof U||(r=this.fromRecipe(r)),new Ue(r)}not(r){return r instanceof U||(r=this.fromRecipe(r)),new be(r)}lookahead(r){return r instanceof U||(r=this.fromRecipe(r)),new ye(r)}lex(r){return r instanceof U||(r=this.fromRecipe(r)),new We(r)}app(r,l){return l&&l.length>0&&(l=l.map(function(p){return p instanceof U?p:this.fromRecipe(p)},this)),new ie(r,l)}splice(r,l){return new ve(this.currentDecl.superGrammar,this.currentRuleName,r.map(p=>this.fromRecipe(p)),l.map(p=>this.fromRecipe(p)))}fromRecipe(r){const l=r[0]==="grammar"?r.slice(1):r.slice(2),p=this[r[0]](...l),g=r[1];return g&&g.sourceInterval&&this.currentDecl&&p.withSource(this.currentDecl.sourceInterval(...g.sourceInterval)),p}}function tt(u){return typeof u=="function"?u.call(new Pt):(typeof u=="string"&&(u=JSON.parse(u)),new Pt().fromRecipe(u))}var St=tt(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);rt.BuiltInRules=St,oe(rt.BuiltInRules);var Dn=tt(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const ut=Object.create(U.prototype);function $n(u,r){for(const l in u)if(l===r)return!0;return!1}function wn(u,r,l){const p=new Pt;let g,T,F,ee=!1;return(l||Dn).createSemantics().addOperation("visit",{Grammars(K){return K.children.map(H=>H.visit())},Grammar(K,H,le,xe,je){const vt=K.visit();g=p.newGrammar(vt),H.child(0)&&H.child(0).visit(),xe.children.map(Nn=>Nn.visit());const Ct=g.build();if(Ct.source=this.source.trimmed(),$n(r,vt))throw Ae(Ct);return r[vt]=Ct,Ct},SuperGrammar(K,H){const le=H.visit();if(le==="null")g.withSuperGrammar(null);else{if(!r||!$n(r,le))throw ce(le,r,H.source);g.withSuperGrammar(r[le])}},Rule_define(K,H,le,xe,je){T=K.visit(),F=H.children.map(vr=>vr.visit())[0]||[],!g.defaultStartRule&&g.ensureSuperGrammar()!==rt.ProtoBuiltInRules&&g.withDefaultStartRule(T);const vt=je.visit(),Ct=le.children.map(vr=>vr.visit())[0],Nn=this.source.trimmed();return g.define(T,F,vt,Ct,Nn)},Rule_override(K,H,le,xe){T=K.visit(),F=H.children.map(Ct=>Ct.visit())[0]||[];const je=this.source.trimmed();g.ensureSuperGrammarRuleForOverriding(T,je),ee=!0;const vt=xe.visit();return ee=!1,g.override(T,F,vt,null,je)},Rule_extend(K,H,le,xe){T=K.visit(),F=H.children.map(Ct=>Ct.visit())[0]||[];const je=xe.visit(),vt=this.source.trimmed();return g.extend(T,F,je,null,vt)},RuleBody(K,H){return p.alt(...H.visit()).withSource(this.source)},OverrideRuleBody(K,H){const le=H.visit(),xe=le.indexOf(ut);if(xe>=0){const je=le.slice(0,xe),vt=le.slice(xe+1);return vt.forEach(Ct=>{if(Ct===ut)throw Ie(Ct)}),new ve(g.superGrammar,T,je,vt).withSource(this.source)}else return p.alt(...le).withSource(this.source)},Formals(K,H,le){return H.visit()},Params(K,H,le){return H.visit()},Alt(K){return p.alt(...K.visit()).withSource(this.source)},TopLevelTerm_inline(K,H){const le=T+"_"+H.visit(),xe=K.visit(),je=this.source.trimmed(),vt=!(g.superGrammar&&g.superGrammar.rules[le]);ee&&!vt?g.override(le,F,xe,null,je):g.define(le,F,xe,null,je);const Ct=F.map(Nn=>p.app(Nn));return p.app(le,Ct).withSource(xe.source)},OverrideTopLevelTerm_superSplice(K){return ut},Seq(K){return p.seq(...K.children.map(H=>H.visit())).withSource(this.source)},Iter_star(K,H){return p.star(K.visit()).withSource(this.source)},Iter_plus(K,H){return p.plus(K.visit()).withSource(this.source)},Iter_opt(K,H){return p.opt(K.visit()).withSource(this.source)},Pred_not(K,H){return p.not(H.visit()).withSource(this.source)},Pred_lookahead(K,H){return p.lookahead(H.visit()).withSource(this.source)},Lex_lex(K,H){return p.lex(H.visit()).withSource(this.source)},Base_application(K,H){const le=H.children.map(xe=>xe.visit())[0]||[];return p.app(K.visit(),le).withSource(this.source)},Base_range(K,H,le){return p.range(K.visit(),le.visit()).withSource(this.source)},Base_terminal(K){return p.terminal(K.visit()).withSource(this.source)},Base_paren(K,H,le){return H.visit()},ruleDescr(K,H,le){return H.visit()},ruleDescrText(K){return this.sourceString.trim()},caseName(K,H,le,xe,je){return le.visit()},name(K,H){return this.sourceString},nameFirst(K){},nameRest(K){},terminal(K,H,le){return H.children.map(xe=>xe.visit()).join("")},oneCharTerminal(K,H,le){return H.visit()},escapeChar(K){try{return M(this.sourceString)}catch(H){throw H instanceof RangeError&&H.message.startsWith("Invalid code point ")?$e(K):H}},NonemptyListOf(K,H,le){return[K.visit()].concat(le.children.map(xe=>xe.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(u).visit()}var nn=tt(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Jn(rt.BuiltInRules),An(nn);function Jn(u){const r={empty(){return this.iteration()},nonEmpty(l,p,g){return this.iteration([l].concat(g.children))}};Et.BuiltInSemantics=Et.createSemantics(u,null).addOperation("asIteration",{emptyListOf:r.empty,nonemptyListOf:r.nonEmpty,EmptyListOf:r.empty,NonemptyListOf:r.nonEmpty})}function An(u){Et.prototypeGrammarSemantics=u.createSemantics().addOperation("parse",{AttributeSignature(r){return{name:r.parse(),formals:[]}},OperationSignature(r,l){return{name:r.parse(),formals:l.children.map(p=>p.parse())[0]||[]}},Formals(r,l,p){return l.asIteration().children.map(g=>g.parse())},name(r,l){return this.sourceString}}),Et.prototypeGrammar=u}function Ga(u){let r=0;const l=[0],p=()=>l[l.length-1],g={},T=/( *).*(?:$|\r?\n|\r)/g;let F;for(;(F=T.exec(u))!=null;){const[ee,X]=F;if(ee.length===0)break;const he=X.length,K=p(),H=r+he;if(he>K)l.push(he),g[H]=1;else if(he<K){const le=l.length;for(;p()!==he;)l.pop();g[H]=-1*(le-l.length)}r+=ee.length}return l.length>1&&(g[r]=1-l.length),g}const hs="an indented block",fs="a dedent",ms=1114112;class Wa extends Ne{constructor(r){super(r.input),this.state=r}_indentationAt(r){return this.state.userData[r]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),ms):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),ms):super.nextCodePoint()}}class gs extends U{constructor(r=!0){super(),this.isIndent=r}allowsSkippingPrecedingSpace(){return!0}eval(r){const{inputStream:l}=r,p=r.userData;r.doNotMemoize=!0;const g=l.pos,T=this.isIndent?1:-1;return(p[g]||0)*T>0?(r.userData=Object.create(p),r.userData[g]-=T,r.pushBinding(new _e(0),g),!0):(r.processFailure(g,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(r,l){}_isNullable(r,l){return!1}assertChoicesHaveUniformArity(r){}assertIteratedExprsAreNotNullable(r){}introduceParams(r){return this}substituteParams(r){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(r){const l=this.isIndent?hs:fs;return new at(this,l,"description")}}const Va=new ie("indent"),Ha=new ie("dedent"),Ka=new ve(St,"any",[Va,Ha],[]),vs=new Pt().newGrammar("IndentationSensitive").withSuperGrammar(St).define("indent",[],new gs(!0),hs,void 0,!0).define("dedent",[],new gs(!1),fs,void 0,!0).extend("any",[],Ka,"any character",void 0).build();Object.assign(vs,{_matchStateInitializer(u){u.userData=Ga(u.input),u.inputStream=new Wa(u)},supportsIncrementalParsing:!1});const Ya="17.1.0";rt.initApplicationParser(Dn,wn);const Ja=u=>!!u.constructor&&typeof u.constructor.isBuffer=="function"&&u.constructor.isBuffer(u);function Za(u,r){const l=Dn.match(u,"Grammars");if(l.failed())throw _(l);return wn(l,r)}function Qa(u,r){const l=ys(u,r),p=Object.keys(l);if(p.length===0)throw new Error("Missing grammar definition");if(p.length>1){const T=l[p[1]].source;throw new Error(vn(T.sourceString,T.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return l[p[0]]}function ys(u,r){const l=Object.create(r||{});if(typeof u!="string")if(Ja(u))u=u.toString();else throw new TypeError("Expected string as first argument, got "+$(u));return Za(u,l),l}return rn.ExperimentalIndentationSensitive=vs,rn._buildGrammar=wn,rn.grammar=Qa,rn.grammars=ys,rn.makeRecipe=tt,rn.ohmGrammar=Dn,rn.pexprs=wi,rn.version=Ya,rn}var _i,zs;function Da(){if(zs)return _i;zs=1;const{makeRecipe:t}=Ic();return _i=t(["grammar",{source:`PEP508 {
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
`],["terminal",{sourceInterval:[6127,6130]},"#"]]],["app",{sourceInterval:[6132,6135]},"any",[]]]]]}]),_i}var kr={},Us;function js(){return Us||(Us=1,function(t){var e=kr&&kr.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequirementsSyntaxError=t.semantics=void 0;const n=e(Da());t.semantics=n.default.createSemantics(),t.semantics.addOperation("extract",{File:s=>s.asIteration().children.map(o=>o.extract()).filter(Boolean),Line:(s,o)=>{var a;return((a=s.child(0))===null||a===void 0?void 0:a.extract())||null},NameReq:(s,o,a,h)=>{var v,b;return{type:"ProjectName",name:s.sourceString,versionSpec:a.extract(),extras:(v=o.child(0))===null||v===void 0?void 0:v.extract(),environmentMarkerTree:(b=h.child(0))===null||b===void 0?void 0:b.extract()}},UrlReq:(s,o,a,h,v)=>{var b,I;return{type:"ProjectURL",name:s.sourceString,url:a.extract(),extras:(b=o.child(0))===null||b===void 0?void 0:b.extract(),environmentMarkerTree:(I=v.child(0))===null||I===void 0?void 0:I.extract()}},Extras:(s,o,a)=>o.asIteration().children.map(h=>h.sourceString),RequirementsReq:(s,o)=>({type:"RequirementsFile",path:o.sourceString}),ConstraintsReq:(s,o)=>({type:"ConstraintsFile",path:o.sourceString}),UrlSpec:(s,o)=>o.sourceString,QuotedMarker:(s,o)=>o.extract(),MarkerOr_node:(s,o,a)=>({operator:"or",left:s.extract(),right:a.extract()}),MarkerAnd_node:(s,o,a)=>({operator:"and",left:s.extract(),right:a.extract()}),MarkerExpr_leaf:(s,o,a)=>({left:s.sourceString,operator:o.sourceString,right:a.sourceString}),MarkerExpr_node:(s,o,a)=>o.extract(),VersionSpec_parenthesized:(s,o,a)=>o.extract()||[],VersionMany:s=>{const o=s.asIteration().children;if(o.length!==0)return o.map(a=>a.extract())},VersionOne:(s,o)=>({operator:s.sourceString,version:o.sourceString})}),t.semantics.addOperation("extractLoosely",{LooseFile:s=>s.asIteration().children.map(o=>o.extractLoosely()).filter(Boolean),LooseLine:(s,o)=>{var a;return((a=s.child(0))===null||a===void 0?void 0:a.extractLoosely())||null},LooseNameReq:(s,o,a,h)=>({type:"ProjectName",name:s.sourceString}),LooseNonNameReq:s=>null});class i extends Error{}t.RequirementsSyntaxError=i}(kr)),kr}var Fn={},Bs;function xc(){if(Bs)return Fn;Bs=1,Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.VersionOperator=Fn.EnvironmentMarkerVariable=void 0;var t;(function(n){n.PythonVersion="python_version",n.PythonFullVersion="python_full_version",n.OsName="os_name",n.SysPlatform="sys_platform",n.PlatformRelease="platform_release",n.PlatformSystem="platform_system",n.PlatformVersion="platform_version",n.PlatformMachine="platform_machine",n.PlatformPythonImplementation="platform_python_implementation",n.ImplementationName="implementation_name",n.ImplementationVersion="implementation_version",n.Extra="extra"})(t||(Fn.EnvironmentMarkerVariable=t={}));var e;return function(n){n.CompatibleRelease="~=",n.VersionMatching="==",n.VersionExclusion="!=",n.LessThanOrMatching="<=",n.GreaterThanOrMatching=">=",n.LessThan="<",n.GreaterThan=">",n.ArbitrarilyEqual="==="}(e||(Fn.VersionOperator=e={})),Fn}var Gs;function kc(){return Gs||(Gs=1,function(t){var e=In&&In.__createBinding||(Object.create?function(S,y,C,M){M===void 0&&(M=C);var $=Object.getOwnPropertyDescriptor(y,C);(!$||("get"in $?!y.__esModule:$.writable||$.configurable))&&($={enumerable:!0,get:function(){return y[C]}}),Object.defineProperty(S,M,$)}:function(S,y,C,M){M===void 0&&(M=C),S[M]=y[C]}),n=In&&In.__exportStar||function(S,y){for(var C in S)C!=="default"&&!Object.prototype.hasOwnProperty.call(y,C)&&e(y,S,C)},i=In&&In.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(t,"__esModule",{value:!0}),t.parsePipRequirementsLineLoosely=t.parsePipRequirementsFileLoosely=t.parsePipRequirementsLine=t.parsePipRequirementsFile=t.RequirementsSyntaxError=void 0;const s=i(Da()),o=js();var a=js();Object.defineProperty(t,"RequirementsSyntaxError",{enumerable:!0,get:function(){return a.RequirementsSyntaxError}}),n(xc(),t);function h(S){const y=s.default.match(S,"File");if(y.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements file. ${y.shortMessage}`);return(0,o.semantics)(y).extract()}t.parsePipRequirementsFile=h;function v(S){const y=s.default.match(S,"Line");if(y.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements line. ${y.shortMessage}`);return(0,o.semantics)(y).extract()}t.parsePipRequirementsLine=v;function b(S){const y=s.default.match(S,"LooseFile");if(y.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${y.shortMessage}`);return(0,o.semantics)(y).extractLoosely()}t.parsePipRequirementsFileLoosely=b;function I(S){const y=s.default.match(S,"LooseLine");if(y.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${y.shortMessage}`);return(0,o.semantics)(y).extractLoosely()}t.parsePipRequirementsLineLoosely=I}(In)),In}var Sc=kc();function Cc(t){return new Worker("/assets/pyworker-C-BOLKRv.js",{type:"module",name:t==null?void 0:t.name})}let Ac=0;class _c{constructor(){this.pendingMessages=new Map}async init(e,n){this.workspace=e,this.vars=n??{},this.worker=new Cc,this.worker.onmessage=i=>{this.handleWorkerMessage(i.data)},this.worker.onerror=i=>{console.error("Python Worker error:",i)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const i=e.payload.prompt||"Input:",s=window.prompt(i);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:s,cancelled:s===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:i,message:s}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",s,i);return}const n=this.pendingMessages.get(e.id);n&&(this.pendingMessages.delete(e.id),e.type==="success"?n.resolve(e.payload):e.type==="error"&&n.reject(new Error(e.payload.message)))}async sendMessage(e,n){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const i=`msg-${Ac++}`,s={id:i,type:e,payload:n};return new Promise((o,a)=>{this.pendingMessages.set(i,{resolve:o,reject:a}),this.worker.postMessage(s)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,n){const i=await this.sendMessage("runFunction",{name:e,args:n});return It(hn,this.workspace),i}async setGlobal(e,n){await this.sendMessage("setGlobal",{key:e,value:n})}async mountWorkspace(e="/workspace"){const n=await Dt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:n.getHandle(),mountPoint:e})}async installDependencies(){var n;const e=await((n=this.workspace)==null?void 0:n.getResource("requirements.txt"));if(e){const i=(await e.getContents()).replaceAll("\r",""),s=Sc.parsePipRequirementsFile(i).filter(o=>"name"in o).map(o=>o.name);await this.loadPackages(s)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),It(hn,this.workspace)}async execCode(e){const n=await this.sendMessage("execCode",{code:e});return It(hn,this.workspace),n}async execScript(e){const n=e.split(".")[0],i=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(n,i)}async execModule(e,n){const i=await this.sendMessage("execModule",{moduleName:e,entryName:n,vars:this.vars});return It(hn,this.workspace),i}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class Ec{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,on(Tr,()=>{})}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const n=o=>{const a=o.detail;a&&Array.from(a.querySelectorAll("*")).filter(v=>v instanceof _t).forEach(v=>{Fe.set(v),v.isEditor&&Qr.set(v)})};e.addEventListener("tab-shown",n);const i=o=>{const a=o.detail;Array.from(a.querySelectorAll("*")).filter(v=>v instanceof _t).forEach(v=>{Fe.get()==v&&Fe.set(null),Qr.get()==v&&Qr.set(null)})};e.addEventListener("tab-closed",i),xa(Ri,o=>{const h=o.closest("wa-tab-panel").getAttribute("name");e.markDirty(h,o.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((n,i)=>(i.ranking??0)-(n.ranking??0))}async handleInput(e){for(let n=0;n<this.editorInputHandlers.length;n++){const i=this.editorInputHandlers[n];if(i.canHandle(e))return await i.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${er}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const n=this.getEditorArea();if(!n){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(n),n.has(e.key)){n.activate(e.key);return}n.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}}const Tn=new Ec;Mt.put("editorRegistry",Tn);const Oc=`# 🌐 geo!space
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

**Happy mapping! 🗺️✨**`,Hr=".geospace/settings.json",ls="events/settings/changed";class Tc{async checkSettings(){this.appSettings||(this.appSettings=await xn.getObject(Hr),this.appSettings||(this.appSettings={},await xn.persistObject(Hr,this.appSettings)),It(ls,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,n){await this.checkSettings(),this.appSettings[e]=n,await xn.persistObject(Hr,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await xn.persistObject(Hr,this.appSettings)}}const Yt=new Tc;Mt.put("appSettings",Yt);pt({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}]},handler:{execute:async({params:t})=>{const e=await Dt.getWorkspace();if(!e){Xe("Please select a workspace!");return}let n=t==null?void 0:t.path;const i=t==null?void 0:t.contents,s=t==null?void 0:t.ask,o=t==null?void 0:t.extension;if((s||!n)&&(n=await Mr("Enter path to new file (directories will be created if not exist):",n||""),!n)||(o&&!n.endsWith(o)&&(n+=o),await e.getResource(n)&&!await pr(`File "${n}" already exists. Do you want to overwrite it?`)))return;const h=await e.getResource(n,{create:!0});h?(i&&await h.saveContents(i),zt("File created: "+n)):Xe("Could not create file: "+n)}}});pt({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{var o;let e,n=t.params&&t.params.path;if(n){const a=await Dt.getWorkspace();a&&(e=await a.getResource(n))}if(e||(e=jt.get()),!e){Xe("No resource to rename provided!");return}const i=e.getName(),s=((o=t.params)==null?void 0:o.newName)||await Mr(`Enter new name for "${i}":`,i);if(!(!s||s===i))try{await e.rename(s),zt(`Resource renamed to: ${s}`)}catch(a){Xe(`Failed to rename ${i}: ${a.message}`)}}}});pt({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{let e,n=t.params&&t.params.path;if(n){const o=await Dt.getWorkspace();o&&(e=await o.getResource(n))}if(e||(e=jt.get()),!e){Xe("No resource to delete provided!");return}n=e.getWorkspacePath();const i=t.params&&t.params.confirm;let s=!0;if((i===void 0||i===!0)&&(s=await pr(`Are you sure you want to delete ${n}?`)),s)try{await e.delete(),zt("Resource deleted: "+n)}catch(o){Xe(`Resource ${n} could not be deleted: ${o.message||o}`)}}}});pt({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Dt.connectWorkspace(e)).catch(e=>{Xe(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});pt({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Dt.getWorkspace();e||Xe("No workspace selected."),e.touch()}}});pt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Dt.getWorkspace();e||Xe("No workspace selected.");const n=t.params.path,i=await(e==null?void 0:e.getResource(n));await Tn.loadEditor(i)}}});pt({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const n=new _c,i=await Dt.getWorkspace();await n.init(i,t),await n.installDependencies(),await n.execScript(e)}}});pt({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});pt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=Fe.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const t=Fe.get();return!t||!t.isDirty()}}});pt({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async t=>{const e=new Ra(Oc,"README.md");await Tn.loadEditor(e)}},contribution:{target:fr,icon:"question-circle",label:"Welcome"}});pt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{document.documentElement.classList.toggle("wa-dark")||document.documentElement.classList.toggle("wa-light")}},contribution:{target:fr,icon:"circle-half-stroke",label:"Theme Switcher"}});pt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:fr,icon:"expand",label:"Fullscreen"}});pt({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:t=>{const e={title:"settings.json",data:{async getContents(){const n=await Yt.getAll();return JSON.stringify(n,void 0,2)},getName(){return e.key},saveContents(n){const i=JSON.parse(n);return Yt.setAll(i)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>V`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,Tn.loadEditor(e).then()}},contribution:{target:fr,icon:"gear",label:"Open Settings"}});pt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>V`
                <k-extensions></k-extensions>`,Tn.loadEditor(e).then()}},contribution:{target:fr,icon:"puzzle-piece",label:"Open Extensions"}});Oe.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?Xe(t):zt(t))}}});const $a="events/chatservice/aiConfigChanged",Kr="aiConfig",Pc={defaultProvider:"ollama",providers:[{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""},{name:"openai",model:"gpt-4.1-mini",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"},{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"},{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"},{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}]},Ur="chatservice.prompts",Lc={name:"openai-api",canHandle:t=>!0,completionApi:async t=>(await fetch(t.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${t.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({model:t.model,stream:t.stream,messages:t.messages,...t.chatConfig.parameters})})).json().then(n=>({role:"assistant",content:n.choices[0].message.content}))};class Rc{constructor(){this.fetchers=[],this.promptContributions=[],on(ls,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.promptContributions=it.getContributions(Ur)}registerFetcher(e){this.fetchers.push(e)}async checkAIConfig(){this.aiConfig||(this.aiConfig=await Yt.get(Kr),this.aiConfig||(await Yt.set(Kr,Pc),this.aiConfig=await Yt.get(Kr)),It($a,this.aiConfig))}async getDefaultProvider(){var n;await this.checkAIConfig();const e=await this.getProviders();if((n=this.aiConfig)!=null&&n.defaultProvider){const i=e.find(s=>{var o;return s.name===((o=this.aiConfig)==null?void 0:o.defaultProvider)});if(i)return i}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig.defaultProvider=e,await Yt.set(Kr,this.aiConfig),this.getDefaultProvider()}async getProviders(){var e;return await this.checkAIConfig(),((e=this.aiConfig)==null?void 0:e.providers)||[]}createMessage(e){return{role:"user",content:e}}getPromptContribution(e){return this.promptContributions.find(n=>n.role===e)}async handleUserPrompt(e){const n=e.chatConfig||await this.getDefaultProvider(),i=e.chatContext,s=this.promptContributions.map(a=>{const h=e.callContext.createChild({userPrompt:i.history[i.history.length-1].content});if(a.canHandle instanceof Function&&!a.canHandle(h.getProxy()))return;const v=i.history.map(y=>{let C=y.role,M=y.content;return C!=="user"&&(C!==a.role?(C="user",M=`***Another Assistant '${y.role}' replied:***
${M}`):C="assistant"),{role:C,content:M}});let b=v[v.length-1],I=a.sysPrompt;typeof I=="function"&&(I=I()),v.unshift({role:"system",content:I});const S=async()=>{const y={model:n.model,stream:!1,messages:v,chatConfig:n};return(this.fetchers.find(M=>M.canHandle(n))||Lc).completionApi(y).then(M=>M)};return a.promptDecorator instanceof Function?a.promptDecorator(h.getProxy()).then(y=>{y&&(b.content=y)}).then(S).then(async y=>(y.role=a.role,a.messageDecorator&&(h.put("message",y),a.messageDecorator(h.getProxy())),y)):S()}),o=await Promise.all(s.filter(a=>!!a));i.history.push(...o)}}const qn=new Rc;Mt.put("chatService",qn);var Dc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,gn=(t,e,n,i)=>{for(var s=i>1?void 0:i?$c(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Dc(e,n,s),s};let Qt=class extends _t{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatContext=this.defaultChatContext,this.busy=!1,this.inputValue=""}onAIConfigChanged(){this.doBeforeUI()}onPartChanged(t){t&&"chatContext"in t?this.chatContext=t.chatContext:this.chatContext=this.defaultChatContext}doBeforeUI(){qn.getProviders().then(t=>{this.providers=t||[]}),qn.getDefaultProvider().then(t=>{this.defaultProvider=t})}updated(t){super.updated(t),(t.has("chatContext")||t.has("busy"))&&this.scrollToBottom()}scrollToBottom(){this.messagesContainer&&requestAnimationFrame(()=>{this.messagesContainer&&(this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight)})}onInput(t){const e=t.target;this.inputValue=e.value}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.sendMessage())}async sendMessage(){const t=this.inputValue.trim();!t||this.busy||(this.inputValue="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),await this.handlePrompt(t))}async runCommand(t,e){const n=e||Oe,i=t.trim().split(/\s+/);if(i.length===0)return;const s=i.shift(),o=n.getCommand(s);if(!o){Xe("Command not found: "+s);return}const a={};i.forEach((v,b)=>{a[o.parameters[b].name]=v});const h=n.createExecutionContext(this,a);n.execute(s,h),this.requestUpdate()}async handlePrompt(t){if(t.startsWith("/")){await this.runCommand(t.substring(1),Oe);return}const e=qn.createMessage(t);this.chatContext.history.push(e),this.requestUpdate(),this.busy=!0;const n=Fe.get(),i=an.createChild({activePart:n,activeEditor:n!=null&&n.isEditor?n:null});lr.runAsync("Calling AI assistant",s=>qn.handleUserPrompt({chatContext:this.chatContext,callContext:i}).then(o=>{this.requestUpdate()})).catch(s=>{Xe(`${s}`)}).finally(()=>{this.busy=!1,i.destroy()})}async onChangeDefaultProvider(t){this.defaultProvider=await qn.setDefaultProvider(t.currentTarget.value)}copyToClipboard(t){navigator.clipboard.writeText(t).then(()=>{}).catch(e=>{Xe(`Failed to copy: ${e}`)})}formatTimestamp(t=new Date){return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderMessage(t){var s;const e=t.role==="user",n=qn.getPromptContribution(t.role),i=(n==null?void 0:n.label)||t.role;return V`
            <div class="message-wrapper ${e?"user":"assistant"}">
                <div class="message-header">
                    <div class="message-meta">
                        <wa-icon 
                            name="${e?"user":"robot"}" 
                            label="${i}">
                        </wa-icon>
                        <span class="role-name">${i}</span>
                        <span class="timestamp">${this.formatTimestamp()}</span>
                    </div>
                    <div class="message-actions">
                        <wa-button
                            appearance="plain"
                            size="small"
                            @click="${()=>this.copyToClipboard(t.content)}">
                            <wa-icon name="copy" label="Copy"></wa-icon>
                        </wa-button>
                        ${Kt((s=t.actions)==null?void 0:s.length,()=>{var o;return V`
                            ${(o=t.actions)==null?void 0:o.map(a=>V`
                                <wa-button
                                    appearance="plain"
                                    size="small"
                                    @click="${()=>a.action()}">
                                    <wa-icon name="${a.icon}" label="${a.label}"></wa-icon>
                                </wa-button>
                            `)}
                        `})}
                    </div>
                </div>
                <div class="message-content">
                    ${Rr(Be.parse(t.content))}
                </div>
            </div>
        `}renderLoadingIndicator(){return V`
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
        `}render(){var t;return V`
            <div class="chat-container">
                ${Kt(!this.defaultProvider,()=>V`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Select a provider from the menu below</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map(e=>this.renderMessage(e))}
                    ${Kt(this.busy,()=>this.renderLoadingIndicator())}
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
                            ${(t=this.providers)==null?void 0:t.map(e=>{var n;return V`
                                <wa-dropdown-item 
                                    type="checkbox"
                                    value="${e.name}"
                                    ?checked="${e.name===((n=this.defaultProvider)==null?void 0:n.name)}"
                                    @click="${this.onChangeDefaultProvider}">
                                    ${e.name}
                                </wa-dropdown-item>
                            `})}
                        </wa-dropdown>
                    </div>
                </div>
            </div>
        `}};Qt.styles=Rt`
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
    `;gn([dt()],Qt.prototype,"chatContext",2);gn([dt()],Qt.prototype,"providers",2);gn([dt()],Qt.prototype,"defaultProvider",2);gn([dt()],Qt.prototype,"busy",2);gn([dt()],Qt.prototype,"inputValue",2);gn([Xs(".chat-messages")],Qt.prototype,"messagesContainer",2);gn([Xs("wa-textarea")],Qt.prototype,"textareaElement",2);gn([Vi($a)],Qt.prototype,"onAIConfigChanged",1);gn([mi(Fe)],Qt.prototype,"onPartChanged",1);Qt=gn([mt("k-aiassist")],Qt);const ei="events/extensionsregistry/extensionsConfigChanged",Sr="extensions";class Nc{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,on(ls,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(async()=>{var n;const e=((n=this.extensionsSettings)==null?void 0:n.filter(i=>this.isEnabled(i.id)).map(i=>this.load(i.id).catch(s=>{Xe("Extension could not be loaded: "+s.message)})))||[];await Promise.all(e)})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Yt.get(Sr),this.extensionsSettings||(await Yt.set(Sr,[]),this.extensionsSettings=await Yt.get(Sr)),It(ei,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e}getExtensions(){return Object.values(this.extensions)}isEnabled(e){var n;return this.checkExtensionsConfig(),!!((n=this.extensionsSettings)!=null&&n.find(i=>i.id===e&&i.enabled))}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,n=!1){this.isEnabled(e)||(yt.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,n)}).catch(i=>{yt.error(`Could not load extension: ${e}`)}))}async load(e,n=[]){if(this.loadedExtensions.has(e))return;const i=this.loadingPromises.get(e);if(i)return i;if(n.includes(e)){const a=[...n,e].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const s=this.extensions[e];if(!s)throw new Error("Extension not found: "+e);const o=(async()=>{try{if(s.dependencies&&s.dependencies.length>0){yt.debug(`Loading dependencies for ${e}: ${s.dependencies.join(", ")}`);const h=[...n,e];for(const v of s.dependencies)await this.load(v,h),this.isEnabled(v)||(await this.updateEnablementAsync(v,!0,!1),yt.debug(`Auto-enabled dependency: ${v}`))}const a=await lr.runAsync("Loading extension: "+s.name,()=>{if(s.loader)return s.loader();if(s.url)return import(s.url)});this.loadedExtensions.add(e),(a==null?void 0:a.default)instanceof Function&&(a==null||a.default(an.getProxy())),yt.debug(`Extension loaded: ${e}`)}catch(a){throw this.loadedExtensions.delete(e),a}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,o),o}disable(e,n=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,n)}updateEnablement(e,n,i){this.checkExtensionsConfig().then(()=>{var o,a;const s=(o=this.extensionsSettings)==null?void 0:o.find(h=>h.id==e);s?s.enabled=n:(a=this.extensionsSettings)==null||a.push({id:e,enabled:n}),Yt.set(Sr,this.extensionsSettings).then(()=>{if(i){const h=this.extensions[e];zt(n?h.name+" enabled.":h.name+" disabled  - Please restart to take effect")}It(ei,this.extensionsSettings)})})}async updateEnablementAsync(e,n,i){var o,a;await this.checkExtensionsConfig();const s=(o=this.extensionsSettings)==null?void 0:o.find(h=>h.id==e);if(s?s.enabled=n:(a=this.extensionsSettings)==null||a.push({id:e,enabled:n}),await Yt.set(Sr,this.extensionsSettings),i){const h=this.extensions[e];zt(n?h.name+" enabled.":h.name+" disabled  - Please restart to take effect")}It(ei,this.extensionsSettings)}}yt.debug("ExtensionRegistry initializing...");const Je=new Nc;Mt.put("extensionRegistry",Je);yt.debug("ExtensionRegistry initialized");const Vt=Dr("AppLoader");class Mc{constructor(){this.apps=new Map}registerApp(e){this.apps.has(e.id)&&Vt.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Vt.info(`Registered app: ${e.name} (${e.id}) v${e.version}`)}async loadApp(e,n){let i;if(typeof e=="string"){const s=this.apps.get(e);if(!s)throw new Error(`App '${e}' not found. Make sure it's registered.`);i=s}else i=e,this.registerApp(i);Vt.info(`Loading app: ${i.name}...`),this.currentApp&&(Vt.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Vt.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{Je.disable(s)}))),i.contributions&&(Vt.info("Registering app contributions..."),i.contributions.ui&&(i.contributions.ui.forEach(s=>{const o=s.target;o&&it.registerContribution(o,s)}),Vt.info(`Registered ${i.contributions.ui.length} UI contributions`)),i.contributions.extensions&&(i.contributions.extensions.forEach(s=>{Je.registerExtension(s)}),Vt.info(`Registered ${i.contributions.extensions.length} app extensions`))),i.extensions&&(Vt.info(`Enabling ${i.extensions.length} extensions...`),i.extensions.forEach(s=>{Je.enable(s)})),i.initialize&&(Vt.info(`Initializing ${i.name}...`),await i.initialize()),this.currentApp=i,Vt.info(`App ${i.name} loaded successfully`),n&&this.renderApp(n)}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");rr(this.currentApp.render(),e),Vt.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}}const vi=new Mc;Mt.put("appLoaderService",vi);var Fc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,cs=(t,e,n,i)=>{for(var s=i>1?void 0:i?qc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Fc(e,n,s),s};let Pr=class extends _t{constructor(){super(...arguments),this.filterText=""}doInitUI(){on(ei,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){Je.enable(t.id,!0),this.requestUpdate()}disable(t){Je.disable(t.id,!0),this.requestUpdate()}isExtensionRequired(t){const e=vi.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(t)}selectionChanged(t){const e=t.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return Je.getExtensions();const t=this.filterText.toLowerCase();return Je.getExtensions().filter(e=>{var n;return e.name.toLowerCase().includes(t)||(((n=e.description)==null?void 0:n.toLowerCase().includes(t))??!1)||e.id.toLowerCase().includes(t)})}getGroupedExtensions(){const t=this.getFilteredExtensions(),e=[],n=[];return t.forEach(i=>{Je.isEnabled(i.id)?e.push(i):n.push(i)}),e.sort((i,s)=>i.name.localeCompare(s.name)),n.sort((i,s)=>i.name.localeCompare(s.name)),{enabled:e,available:n}}handleFilterInput(t){this.filterText=t.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return V`
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
        `}render(){const t=this.getGroupedExtensions(),e=t.enabled.length>0||t.available.length>0;return V`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${e?V`
                        ${t.enabled.length>0?V`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    Installed (${t.enabled.length})
                                </span>
                                ${t.enabled.map(n=>V`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${n}>
                                        <span><k-icon name="${n.icon}"></k-icon> ${n.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                        ${t.available.length>0?V`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${t.available.length})
                                </span>
                                ${t.available.map(n=>V`
                                    <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${n}>
                                        <span><k-icon name="${n.icon}"></k-icon> ${n.name}</span>
                                    </wa-tree-item>
                                `)}
                            </wa-tree-item>
                        `:""}
                    `:V`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${Kt(this.selectedExtension,n=>V`
                        <h1><k-icon name="${n.icon}"></k-icon> ${n.name}</h1>
                        <hr>
                        <div>
                            ${Kt(Je.isEnabled(n.id),()=>V`
                                <wa-button 
                                    title="${this.isExtensionRequired(n.id)?"This extension is required by the current app and cannot be uninstalled":"Disable this extension"}" 
                                    @click="${()=>this.disable(n)}"
                                    variant="danger" 
                                    appearance="plain"
                                    ?disabled=${this.isExtensionRequired(n.id)}>
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>
                                ${Kt(this.isExtensionRequired(n.id),()=>V`
                                    <div class="required-hint">
                                        <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                        <span>This extension is required by the current app and cannot be uninstalled</span>
                                    </div>
                                `)}
                            `,()=>V`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(n)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${Kt(n.experimental,()=>V`
                            <div style="margin-top: 1em;">
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}

                        <p style="margin-top: 1em;">${n.description}</p>

                        ${Kt(n.dependencies&&n.dependencies.length>0,()=>V`
                            <div style="margin-top: 1.5em;">
                                <h3 style="margin-bottom: 0.5em;">
                                    <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies
                                </h3>
                                <div class="dependencies-list">
                                    ${n.dependencies.map(i=>{const s=Je.getExtensions().find(a=>a.id===i),o=Je.isEnabled(i);return V`
                                            <div class="dependency-item">
                                                <wa-icon 
                                                    name="${o?"check-circle":"circle"}" 
                                                    style="color: ${o?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                </wa-icon>
                                                <k-icon name="${(s==null?void 0:s.icon)||"puzzle-piece"}"></k-icon>
                                                <span>${(s==null?void 0:s.name)||i}</span>
                                                ${o?"":V`
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
        `}};Pr.styles=Rt`
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
    `;cs([dt()],Pr.prototype,"selectedExtension",2);cs([dt()],Pr.prototype,"filterText",2);Pr=cs([mt("k-extensions")],Pr);var zc=Object.defineProperty,Uc=Object.getOwnPropertyDescriptor,yi=(t,e,n,i)=>{for(var s=i>1?void 0:i?Uc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&zc(e,n,s),s};let cr=class extends _t{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Un()}connectedCallback(){super.connectedCallback(),xo(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),ko()}log(t,e,n="info"){const i={timestamp:new Date,level:n,source:t,message:e};this.messages=[...this.messages,i],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const s=this.containerRef.value;s&&(s.scrollTop=s.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const t=this.messages.filter(s=>s.level==="info").length,e=this.messages.filter(s=>s.level==="warning").length,n=this.messages.filter(s=>s.level==="error").length,i=this.messages.filter(s=>s.level==="debug").length;return V`
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
                Errors${n>0?` (${n})`:""}
            </k-action>

            <k-action 
                icon="bug"
                title="Debug logs"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.updateToolbar()}}>
                Debug${i>0?` (${i})`:""}
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
        `}render(){const t=this.getFilteredMessages();return V`
            <div class="log-terminal">
                <div class="messages" ${jn(this.containerRef)}>
                    ${t.length===0?V`<div class="empty-state">No log messages</div>`:t.map(e=>V`
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
        `}};cr.styles=Rt`
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
    `;yi([dt()],cr.prototype,"messages",2);yi([dt()],cr.prototype,"autoScroll",2);yi([dt()],cr.prototype,"filter",2);cr=yi([mt("k-log-terminal")],cr);var jc=Object.defineProperty,Bc=Object.getOwnPropertyDescriptor,ln=(t,e,n,i)=>{for(var s=i>1?void 0:i?Bc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&jc(e,n,s),s};let Bt=class extends Fr{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const t=ca.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),on($r,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=it.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){var e;if("command"in t){const n=t,i=(e=n.disabled)==null?void 0:e.get();return V`
                <k-command 
                    cmd="${n.command}"
                    icon="${n.icon||""}"
                    ?disabled="${i}">
                    ${n.label}
                </k-command>
            `}if("html"in t){const i=t.html;return i instanceof Function?i():Rr(i)}return Lt}render(){const t=this.getKeybinding();return this.isInDropdown()?V`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${t?V`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?V`
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
                    
                    ${this.title?V`
                        <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:Lt}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?V`
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
            `:V`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${()=>this.handleClick()}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};Bt.styles=Rt`
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
    `;ln([Me()],Bt.prototype,"cmd",2);ln([Me()],Bt.prototype,"title",2);ln([Me()],Bt.prototype,"icon",2);ln([Me({type:Boolean})],Bt.prototype,"disabled",2);ln([Me()],Bt.prototype,"appearance",2);ln([Me()],Bt.prototype,"size",2);ln([Me({type:Object,attribute:!1})],Bt.prototype,"params",2);ln([Me()],Bt.prototype,"dropdown",2);ln([Me()],Bt.prototype,"placement",2);ln([dt()],Bt.prototype,"dropdownContributions",2);Bt=ln([mt("k-command")],Bt);var Gc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,Pn=(t,e,n,i)=>{for(var s=i>1?void 0:i?Wc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Gc(e,n,s),s};let mn=class extends Fr{constructor(){super(...arguments),this.title="",this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small"}handleClick(t){!this.disabled&&this.action&&(t.stopPropagation(),this.action(t))}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}render(){return this.isInDropdown()?V`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${t=>this.handleClick(t)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                </wa-dropdown-item>
            `:V`
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
        `}};mn.styles=Rt`
        :host {
            display: inline-block;
        }
    `;Pn([Me({type:Object,attribute:!1})],mn.prototype,"action",2);Pn([Me()],mn.prototype,"title",2);Pn([Me()],mn.prototype,"icon",2);Pn([Me({type:Boolean})],mn.prototype,"disabled",2);Pn([Me()],mn.prototype,"appearance",2);Pn([Me()],mn.prototype,"variant",2);Pn([Me()],mn.prototype,"size",2);mn=Pn([mt("k-action")],mn);var Vc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,us=(t,e,n,i)=>{for(var s=i>1?void 0:i?Hc(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Vc(e,n,s),s};let Lr=class extends Fr{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return V`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Lr.styles=Rt`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;us([Me()],Lr.prototype,"message",2);us([Me()],Lr.prototype,"icon",2);Lr=us([mt("k-no-content")],Lr);Je.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>ft(()=>import("./git-extension-CmgMKs9q.js"),__vite__mapDeps([0,1,2])),icon:"code-branch",experimental:!0});Je.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>ft(()=>import("./pyterminal-extension-BkuwKy0w.js"),__vite__mapDeps([3,1,2,4])),icon:"k python",experimental:!0});Je.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>ft(()=>import("./k-linuxterminal-DgfTBLZO.js"),__vite__mapDeps([5,1,2,4])),icon:"terminal",experimental:!0});Je.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>ft(()=>import("./webllmservice-DEDenTv5.js"),[]),icon:"robot"});Je.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>ft(()=>import("./p12-splitter-CYvP2w1x.js"),__vite__mapDeps([6,1,2])),icon:"certificate"});Je.registerExtension({id:"system.pythonpackagemanager",name:"Python Package Manager",description:"Manage Python packages for notebooks and other Python-based extensions",loader:()=>ft(()=>import("./package-manager-extension-j3HmCTj7.js"),__vite__mapDeps([7,1,2])),icon:"box"});Je.registerExtension({id:"system.notebook",name:"Jupyter Notebook Editor",description:"View and execute Jupyter notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>ft(()=>import("./notebook-extension-Buzr8Hlo.js"),__vite__mapDeps([8,1,2,9,10,7])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});Je.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>ft(()=>import("./command-palette-extension-D68YuUgP.js"),__vite__mapDeps([11,1,2])),icon:"terminal"});Je.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>ft(()=>import("./download-extension-BwMOy2Vw.js"),__vite__mapDeps([12,1,2])),icon:"download"});Je.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>ft(()=>import("./unzip-extension-D5d5-KPK.js"),__vite__mapDeps([13,1,2])),icon:"box-archive"});Je.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>ft(()=>import("./md-editor-extension-DhtAb1VF.js"),__vite__mapDeps([14,1,2])),icon:"book"});Je.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>ft(()=>import("./monaco-editor-extension-BtecokkN.js"),__vite__mapDeps([15,9,1,2,10,7])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});Je.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>ft(()=>import("./memory-usage-extension-CuEZHG1v.js"),__vite__mapDeps([16,1,2])),icon:"microchip"});Je.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>ft(()=>import("./webdav-extension-CUJBDRAW.js"),__vite__mapDeps([17,1,2])),icon:"cloud"});const Kc=`You are a specialized commands execution plan generator. Your sole purpose is to analyze user requests expressed in natural language and translate them into a precise sequence of command calls that can be executed by a software controller.

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
\`\`\``,Yc=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,Jc=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``;let Zc=0;it.registerContribution(Ur,{label:"Commander",description:"Commands execution plan generator",role:"commands",sysPrompt:Kc,canHandle:({activeEditor:t})=>{const e=Oe.listCommands({source:t});return Object.keys(e).length>0},promptDecorator:async({userPrompt:t,commandRegistry:e,activeEditor:n})=>{const i=e.listCommands({source:n}),s=JSON.stringify(i,null,2);return`${t}

***Available Commands:***
${s}`},messageDecorator:async({message:t,activeEditor:e})=>{if(!t)return;const n=t.content.replace("```json","").replace("```",""),i=JSON.parse(n);let s=!0;t.content=i.map(({id:o,summary:a},h)=>{const v=Oe.getCommand(o);return v?`${h+1}. ${v.name}
	- ${a||v.description}`:(s=!1,`${h+1}. *INVALID COMMAND:* _${o}_`)}).join(`
`),t.actions=t.actions||[],t.actions.push({label:"Show Commands Execution Plan",icon:"list",action:async()=>{const o=Zc++,a=`\`\`\`json
${JSON.stringify(i,null,2)}
\`\`\``,h=new Ra(a,`Commands Execution Plan (${o}).md`);await Tn.loadEditor(h)}}),s&&t.actions.push({label:"Execute Commands",icon:"play",action:async()=>{const o=(e==null?void 0:e.getCommandStack())||new la;await lr.runAsync("Executing commands",async()=>{yt.debug("Executing commands: "+JSON.stringify(i));const a=Oe.createExecutionContext(e);for(const h of i){const v=Object.entries(h.parameters||{}).map(([b,I])=>(typeof I=="string"&&(I=I.replace(/{{(.*?)}}/g,(S,y)=>a[y.trim()]??"")),[b,I]));a.params=Object.fromEntries(v),await o.execute(h.id,a)}})}})}});const Na=t=>t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function",Ma=async({userPrompt:t,activeEditor:e})=>{var o,a;const n=e.getEditor(),i=n.getModel(),s=i.getValueInRange(n.getSelection());return s?`${t}

 Code selection within file "${(o=e.input)==null?void 0:o.data.getWorkspacePath()}":

            ${s}`:`${t}

Code in file "${(a=e.input)==null?void 0:a.data.getWorkspacePath()}":

            ${i.getValue()}`};it.registerContribution(Ur,{label:"Python Assistant",description:"Python code assistant",role:"py-programmer",sysPrompt:Yc,canHandle:({activeEditor:t})=>Na(t)&&t.getLanguage()=="python",promptDecorator:Ma});it.registerContribution(Ur,{label:"JavaScript Assistant",description:"JavaScript code assistant",role:"js-programmer",sysPrompt:Jc,canHandle:({activeEditor:t})=>Na(t)&&t.getLanguage()=="javascript",promptDecorator:Ma});const Qc="https://api.github.com";function Xc(){var e;const t=vi.getCurrentApp();if((e=t==null?void 0:t.metadata)!=null&&e.github){const n=t.metadata.github;if(n.owner&&n.repo)return{owner:n.owner,repo:n.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function eu(t=100){try{const e=Xc(),n=await fetch(`${Qc}/repos/${e.owner}/${e.repo}/releases?per_page=${t}`);return n.ok?await n.json():[]}catch(e){return console.error("Failed to fetch releases:",e),[]}}function tu(t,e){const n=t.replace(/^v/,""),i=e.replace(/^v/,""),s=n.split(".").map(Number),o=i.split(".").map(Number);for(let a=0;a<Math.max(s.length,o.length);a++){const h=s[a]||0,v=o[a]||0;if(v>h)return!0;if(v<h)return!1}return!1}function Yr(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ei={exports:{}},Ws;function nu(){return Ws||(Ws=1,function(t,e){(function(n){t.exports=n()})(function(){return function(){function n(i,s,o){function a(b,I){if(!s[b]){if(!i[b]){var S=typeof Yr=="function"&&Yr;if(!I&&S)return S(b,!0);if(h)return h(b,!0);var y=new Error("Cannot find module '"+b+"'");throw y.code="MODULE_NOT_FOUND",y}var C=s[b]={exports:{}};i[b][0].call(C.exports,function(M){var $=i[b][1][M];return a($||M)},C,C.exports,n,i,s,o)}return s[b].exports}for(var h=typeof Yr=="function"&&Yr,v=0;v<o.length;v++)a(o[v]);return a}return n}()({1:[function(n,i,s){const o=n("./utils"),a=function(){const h=o.stringToArray,v=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],b=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],I=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],S=["Thousand","Million","Billion","Trillion"];function y(P,z){var L=function(te,Z,B){var ne="";if(te<=19)ne=(Z?" and ":"")+(B?b[te]:v[te]);else if(te<100){const Te=Math.floor(te/10),Re=te%10;ne=(Z?" and ":"")+I[Te-2],Re>0?ne+="-"+L(Re,!1,B):B&&(ne=ne.substring(0,ne.length-1)+"ieth")}else if(te<1e3){const Te=Math.floor(te/100),Re=te%100;ne=(Z?", ":"")+v[Te]+" Hundred",Re>0?ne+=L(Re,!0,B):B&&(ne+="th")}else{var me=Math.floor(Math.log10(te)/3);me>S.length&&(me=S.length);const Te=Math.pow(10,me*3),Re=Math.floor(te/Te),fe=te-Re*Te;ne=(Z?", ":"")+L(Re,!1,!1)+" "+S[me-1],fe>0?ne+=L(fe,!0,B):B&&(ne+="th")}return ne},J=L(P,!1,z);return J}const C={};v.forEach(function(P,z){C[P.toLowerCase()]=z}),b.forEach(function(P,z){C[P.toLowerCase()]=z}),I.forEach(function(P,z){const L=P.toLowerCase();C[L]=(z+2)*10,C[L.substring(0,P.length-1)+"ieth"]=C[L]}),C.hundredth=100,S.forEach(function(P,z){const L=P.toLowerCase(),J=Math.pow(10,(z+1)*3);C[L]=J,C[L+"th"]=J});function M(P){const L=P.split(/,\s|\sand\s|[\s\\-]/).map(Z=>C[Z]);let J=[0];return L.forEach(Z=>{if(Z<100){let B=J.pop();B>=1e3&&(J.push(B),B=0),J.push(B+Z)}else J.push(J.pop()*Z)}),J.reduce((Z,B)=>Z+B,0)}const $=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],W={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function re(P){for(var z=0;z<$.length;z++){const L=$[z];if(P>=L[0])return L[1]+re(P-L[0])}return""}function U(P){for(var z=0,L=1,J=P.length-1;J>=0;J--){const te=P[J],Z=W[te];Z<L?z-=Z:(L=Z,z+=Z)}return z}function R(P,z){for(var L=[],J=z.charCodeAt(0);P>0;)L.unshift(String.fromCharCode((P-1)%26+J)),P=Math.floor((P-1)/26);return L.join("")}function G(P,z){for(var L=z.charCodeAt(0),J=0,te=0;te<P.length;te++)J+=(P.charCodeAt(P.length-te-1)-L+1)*Math.pow(26,te);return J}function D(P,z){if(typeof P>"u")return;P=Math.floor(P);const L=ve(z);return j(P,L)}const w={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},q={UPPER:"upper",LOWER:"lower",TITLE:"title"};function j(P,z){let L;const J=P<0;switch(P=Math.abs(P),z.primary){case w.LETTERS:L=R(P,z.case===q.UPPER?"A":"a");break;case w.ROMAN:L=re(P),z.case===q.UPPER&&(L=L.toUpperCase());break;case w.WORDS:L=y(P,z.ordinal),z.case===q.UPPER?L=L.toUpperCase():z.case===q.LOWER&&(L=L.toLowerCase());break;case w.DECIMAL:L=""+P;var te=z.mandatoryDigits-L.length;if(te>0){var Z=new Array(te+1).join("0");L=Z+L}if(z.zeroCode!==48&&(L=h(L).map(Te=>String.fromCodePoint(Te.codePointAt(0)+z.zeroCode-48)).join("")),z.regular){const Te=Math.floor((L.length-1)/z.groupingSeparators.position);for(let Re=Te;Re>0;Re--){const fe=L.length-Re*z.groupingSeparators.position;L=L.substr(0,fe)+z.groupingSeparators.character+L.substr(fe)}}else z.groupingSeparators.reverse().forEach(Te=>{const Re=L.length-Te.position;L=L.substr(0,Re)+Te.character+L.substr(Re)});if(z.ordinal){var B={1:"st",2:"nd",3:"rd"},ne=L[L.length-1],me=B[ne];(!me||L.length>1&&L[L.length-2]==="1")&&(me="th"),L=L+me}break;case w.SEQUENCE:throw{code:"D3130",value:z.token}}return J&&(L="-"+L),L}const se=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function ve(P){const z={type:"integer",primary:w.DECIMAL,case:q.LOWER,ordinal:!1};let L,J;const te=P.lastIndexOf(";");switch(te===-1?L=P:(L=P.substring(0,te),J=P.substring(te+1),J[0]==="o"&&(z.ordinal=!0)),L){case"A":z.case=q.UPPER;case"a":z.primary=w.LETTERS;break;case"I":z.case=q.UPPER;case"i":z.primary=w.ROMAN;break;case"W":z.case=q.UPPER,z.primary=w.WORDS;break;case"Ww":z.case=q.TITLE,z.primary=w.WORDS;break;case"w":z.primary=w.WORDS;break;default:{let Z=null,B=0,ne=0,me=[],Te=0;if(h(L).map(fe=>fe.codePointAt(0)).reverse().forEach(fe=>{let Ie=!1;for(let $e=0;$e<se.length;$e++){const de=se[$e];if(fe>=de&&fe<=de+9){if(Ie=!0,B++,Te++,Z===null)Z=de;else if(de!==Z)throw{code:"D3131"};break}}Ie||(fe===35?(Te++,ne++):me.push({position:Te,character:String.fromCodePoint(fe)}))}),B>0){z.primary=w.DECIMAL,z.zeroCode=Z,z.mandatoryDigits=B,z.optionalDigits=ne;const Ie=function($e){if($e.length===0)return 0;const de=$e[0].character;for(let ct=1;ct<$e.length;ct++)if($e[ct].character!==de)return 0;const lt=$e.map(ct=>ct.position),Ft=function(ct,wt){return wt===0?ct:Ft(wt,ct%wt)},bt=lt.reduce(Ft);for(let ct=1;ct<=lt.length;ct++)if(lt.indexOf(ct*bt)===-1)return 0;return bt}(me);Ie>0?(z.regular=!0,z.groupingSeparators={position:Ie,character:me[0].character}):(z.regular=!1,z.groupingSeparators=me)}else z.primary=w.SEQUENCE,z.token=L}}return z}const Q={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function ae(P){var z=[];const L={type:"datetime",parts:z},J=function(Ie,$e){if($e>Ie){let de=P.substring(Ie,$e);de=de.split("]]").join("]"),z.push({type:"literal",value:de})}};for(var te=0,Z=0;Z<P.length;){if(P.charAt(Z)==="["){if(P.charAt(Z+1)==="["){J(te,Z),z.push({type:"literal",value:"["}),Z+=2,te=Z;continue}if(J(te,Z),te=Z,Z=P.indexOf("]",te),Z===-1)throw{code:"D3135"};let Ie=P.substring(te+1,Z);Ie=Ie.split(/\s+/).join("");var B={type:"marker",component:Ie.charAt(0)},ne=Ie.lastIndexOf(","),me;if(ne!==-1){const $e=Ie.substring(ne+1),de=$e.indexOf("-");let lt,Ft;const bt=function(wt){if(!(typeof wt>"u"||wt==="*"))return parseInt(wt)};de===-1?lt=$e:(lt=$e.substring(0,de),Ft=$e.substring(de+1));const ct={min:bt(lt),max:bt(Ft)};B.width=ct,me=Ie.substring(1,ne)}else me=Ie.substring(1);if(me.length===1)B.presentation1=me;else if(me.length>1){var Te=me.charAt(me.length-1);"atco".indexOf(Te)!==-1?(B.presentation2=Te,Te==="o"&&(B.ordinal=!0),B.presentation1=me.substring(0,me.length-1)):B.presentation1=me}else B.presentation1=Q[B.component];if(typeof B.presentation1>"u")throw{code:"D3132",value:B.component};if(B.presentation1[0]==="n")B.names=q.LOWER;else if(B.presentation1[0]==="N")B.presentation1[1]==="n"?B.names=q.TITLE:B.names=q.UPPER;else if("YMDdFWwXxHhmsf".indexOf(B.component)!==-1){var Re=B.presentation1;if(B.presentation2&&(Re+=";"+B.presentation2),B.integerFormat=ve(Re),B.width&&B.width.min!==void 0&&B.integerFormat.mandatoryDigits<B.width.min&&(B.integerFormat.mandatoryDigits=B.width.min),"YMD".indexOf(B.component)!==-1)if(B.n=-1,B.width&&B.width.max!==void 0)B.n=B.width.max,B.integerFormat.mandatoryDigits=B.n;else{var fe=B.integerFormat.mandatoryDigits+B.integerFormat.optionalDigits;fe>=2&&(B.n=fe)}}(B.component==="Z"||B.component==="z")&&(B.integerFormat=ve(B.presentation1)),z.push(B),te=Z+1}Z++}return J(te,Z),L}const pe=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Se=["January","February","March","April","May","June","July","August","September","October","November","December"],Ue=1e3*60*60*24,be=function(P){const z=Date.UTC(P.year,P.month);var L=new Date(z).getUTCDay();return L===0&&(L=7),L>4?z+(8-L)*Ue:z-(L-1)*Ue},ye=function(P,z){return{year:P,month:z,nextMonth:function(){return z===11?ye(P+1,0):ye(P,z+1)},previousMonth:function(){return z===0?ye(P-1,11):ye(P,z-1)},nextYear:function(){return ye(P+1,z)},previousYear:function(){return ye(P-1,z)}}},We=function(P,z){return(z-P)/(Ue*7)+1},ie=(P,z)=>{let L;switch(z){case"Y":L=P.getUTCFullYear();break;case"M":L=P.getUTCMonth()+1;break;case"D":L=P.getUTCDate();break;case"d":{const J=Date.UTC(P.getUTCFullYear(),P.getUTCMonth(),P.getUTCDate()),te=Date.UTC(P.getUTCFullYear(),0);L=(J-te)/Ue+1;break}case"F":L=P.getUTCDay(),L===0&&(L=7);break;case"W":{const J=ye(P.getUTCFullYear(),0),te=be(J),Z=Date.UTC(J.year,P.getUTCMonth(),P.getUTCDate());let B=We(te,Z);if(B>52){const ne=be(J.nextYear());Z>=ne&&(B=1)}else if(B<1){const ne=be(J.previousYear());B=We(ne,Z)}L=Math.floor(B);break}case"w":{const J=ye(P.getUTCFullYear(),P.getUTCMonth()),te=be(J),Z=Date.UTC(J.year,J.month,P.getUTCDate());let B=We(te,Z);if(B>4){const ne=be(J.nextMonth());Z>=ne&&(B=1)}else if(B<1){const ne=be(J.previousMonth());B=We(ne,Z)}L=Math.floor(B);break}case"X":{const J=ye(P.getUTCFullYear(),0),te=be(J),Z=be(J.nextYear()),B=P.getTime();B<te?L=J.year-1:B>=Z?L=J.year+1:L=J.year;break}case"x":{const J=ye(P.getUTCFullYear(),P.getUTCMonth()),te=be(J),Z=J.nextMonth(),B=be(Z),ne=P.getTime();ne<te?L=J.previousMonth().month+1:ne>=B?L=Z.month+1:L=J.month+1;break}case"H":L=P.getUTCHours();break;case"h":L=P.getUTCHours(),L=L%12,L===0&&(L=12);break;case"P":L=P.getUTCHours()>=12?"pm":"am";break;case"m":L=P.getUTCMinutes();break;case"s":L=P.getUTCSeconds();break;case"f":L=P.getUTCMilliseconds();break;case"Z":case"z":break;case"C":L="ISO";break;case"E":L="ISO";break}return L};let Ee=null;function Pe(P,z,L){var J=0,te=0;if(typeof L<"u"){const Re=parseInt(L);J=Math.floor(Re/100),te=Re%100}var Z=function(Re,fe){var Ie=ie(Re,fe.component);if("YMDdFWwXxHhms".indexOf(fe.component)!==-1)if(fe.component==="Y"&&fe.n!==-1&&(Ie=Ie%Math.pow(10,fe.n)),fe.names){if(fe.component==="M"||fe.component==="x")Ie=Se[Ie-1];else if(fe.component==="F")Ie=pe[Ie];else throw{code:"D3133",value:fe.component};fe.names===q.UPPER?Ie=Ie.toUpperCase():fe.names===q.LOWER&&(Ie=Ie.toLowerCase()),fe.width&&Ie.length>fe.width.max&&(Ie=Ie.substring(0,fe.width.max))}else Ie=j(Ie,fe.integerFormat);else if(fe.component==="f")Ie=j(Ie,fe.integerFormat);else if(fe.component==="Z"||fe.component==="z"){const $e=J*100+te;if(fe.integerFormat.regular)Ie=j($e,fe.integerFormat);else{const de=fe.integerFormat.mandatoryDigits;if(de===1||de===2)Ie=j(J,fe.integerFormat),te!==0&&(Ie+=":"+D(te,"00"));else if(de===3||de===4)Ie=j($e,fe.integerFormat);else throw{code:"D3134",value:de}}$e>=0&&(Ie="+"+Ie),fe.component==="z"&&(Ie="GMT"+Ie),$e===0&&fe.presentation2==="t"&&(Ie="Z")}else fe.component==="P"&&fe.names===q.UPPER&&(Ie=Ie.toUpperCase());return Ie};let B;typeof z>"u"?(Ee===null&&(Ee=ae("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),B=Ee):B=ae(z);const ne=(60*J+te)*60*1e3,me=new Date(P+ne);let Te="";return B.parts.forEach(function(Re){Re.type==="literal"?Te+=Re.value:Te+=Z(me,Re)}),Te}function x(P){var z={};if(P.type==="datetime")z.type="datetime",z.parts=P.parts.map(function(L){var J={};if(L.type==="literal")J.regex=L.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(L.component==="Z"||L.component==="z"){let Z;Array.isArray(L.integerFormat.groupingSeparators)||(Z=L.integerFormat.groupingSeparators),J.regex="",L.component==="z"&&(J.regex="GMT"),J.regex+="[-+][0-9]+",Z&&(J.regex+=Z.character+"[0-9]+"),J.parse=function(B){L.component==="z"&&(B=B.substring(3));let ne=0,me=0;return Z?(ne=Number.parseInt(B.substring(0,B.indexOf(Z.character))),me=Number.parseInt(B.substring(B.indexOf(Z.character)+1))):B.length-1<=2?ne=Number.parseInt(B):(ne=Number.parseInt(B.substring(0,3)),me=Number.parseInt(B.substring(3))),ne*60+me}}else if(L.integerFormat)L.integerFormat.n=L.n,J=x(L.integerFormat);else{J.regex="[a-zA-Z]+";var te={};if(L.component==="M"||L.component==="x")Se.forEach(function(Z,B){L.width&&L.width.max?te[Z.substring(0,L.width.max)]=B+1:te[Z]=B+1});else if(L.component==="F")pe.forEach(function(Z,B){B>0&&(L.width&&L.width.max?te[Z.substring(0,L.width.max)]=B:te[Z]=B)});else if(L.component==="P")te={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:L.component};J.parse=function(Z){return te[Z]}}return J.component=L.component,J});else{z.type="integer";const L=P.case===q.UPPER;let J;switch(P.n&&P.n>0?P.optionalDigits===0?J=`{${P.n}}`:J=`{${P.n-P.optionalDigits},${P.n}}`:J="+",P.primary){case w.LETTERS:z.regex=L?"[A-Z]+":"[a-z]+",z.parse=function(te){return G(te,L?"A":"a")};break;case w.ROMAN:z.regex=L?"[MDCLXVI]+":"[mdclxvi]+",z.parse=function(te){return U(L?te:te.toUpperCase())};break;case w.WORDS:z.regex="(?:"+Object.keys(C).concat("and","[\\-, ]").join("|")+")+",z.parse=function(te){return M(te.toLowerCase())};break;case w.DECIMAL:z.regex=`[0-9]${J}`,P.ordinal&&(z.regex+="(?:th|st|nd|rd)"),z.parse=function(te){let Z=te;return P.ordinal&&(Z=te.substring(0,te.length-2)),P.regular?Z=Z.split(",").join(""):P.groupingSeparators.forEach(B=>{Z=Z.split(B.character).join("")}),P.zeroCode!==48&&(Z=Z.split("").map(B=>String.fromCodePoint(B.codePointAt(0)-P.zeroCode+48)).join("")),parseInt(Z)};break;case w.SEQUENCE:throw{code:"D3130",value:P.token}}}return z}function _(P,z){if(typeof P>"u")return;const L=ve(z);return x(L).parse(P)}function ce(P,z){const L=ae(z),J=x(L),te="^"+J.parts.map(me=>"("+me.regex+")").join("")+"$";var B=new RegExp(te,"i").exec(P);if(B!==null){const de={};for(let Ne=1;Ne<B.length;Ne++){const f=J.parts[Ne-1];f.parse&&(de[f.component]=f.parse(B[Ne]))}if(Object.getOwnPropertyNames(de).length===0)return;let lt=0;const Ft=Ne=>{lt<<=1,lt+=Ne?1:0},bt=Ne=>!(~Ne&lt)&&!!(Ne&lt);"YXMxWwdD".split("").forEach(Ne=>Ft(de[Ne]));const wt=!bt(161)&&bt(130),Gt=bt(84),cn=!Gt&&bt(72);lt=0,"PHhmsf".split("").forEach(Ne=>Ft(de[Ne]));const Xt=!bt(23)&&bt(47),vn=(wt?"YD":Gt?"XxwF":cn?"XWF":"YMD")+(Xt?"Phmsf":"Hmsf"),qt=this.environment.timestamp;let nt=!1,Wt=!1;if(vn.split("").forEach(Ne=>{if(typeof de[Ne]>"u")nt?(de[Ne]="MDd".indexOf(Ne)!==-1?1:0,Wt=!0):de[Ne]=ie(qt,Ne);else if(nt=!0,Wt)throw{code:"D3136"}}),de.M>0?de.M-=1:de.M=0,wt){const Ne=Date.UTC(de.Y,0),f=(de.d-1)*1e3*60*60*24,k=new Date(Ne+f);de.M=k.getUTCMonth(),de.D=k.getUTCDate()}if(Gt)throw{code:"D3136"};if(cn)throw{code:"D3136"};Xt&&(de.H=de.h===12?0:de.h,de.P===1&&(de.H+=12));var ne=Date.UTC(de.Y,de.M,de.D,de.H,de.m,de.s,de.f);return(de.Z||de.z)&&(ne-=(de.Z||de.z)*60*1e3),ne}}var Ae=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ve(P,z){if(!(typeof P>"u"))if(typeof z>"u"){if(!Ae.test(P))throw{stack:new Error().stack,code:"D3110",value:P};return Date.parse(P)}else return ce.call(this,P,z)}function Le(P,z,L){if(!(typeof P>"u"))return Pe.call(this,P,z,L)}return{formatInteger:D,parseInteger:_,fromMillis:Le,toMillis:Ve}}();i.exports=a},{"./utils":6}],2:[function(n,i,s){(function(o){(function(){var a=n("./utils");const h=(()=>{var v=a.isNumeric,b=a.isArrayOfStrings,I=a.isArrayOfNumbers,S=a.createSequence,y=a.isSequence,C=a.isFunction,M=a.isLambda,$=a.isPromise,W=a.getFunctionArity,re=a.isDeepEqual,U=a.stringToArray;function R(c){if(!(typeof c>"u")){var d=0;return c.forEach(function(m){d+=m}),d}}function G(c){return typeof c>"u"?0:c.length}function D(c){if(!(typeof c>"u"||c.length===0))return Math.max.apply(Math,c)}function w(c){if(!(typeof c>"u"||c.length===0))return Math.min.apply(Math,c)}function q(c){if(!(typeof c>"u"||c.length===0)){var d=0;return c.forEach(function(m){d+=m}),d/c.length}}function j(c,d=!1){if(!(typeof c>"u")){var m;if(typeof c=="string")m=c;else if(C(c))m="";else{if(typeof c=="number"&&!isFinite(c))throw{code:"D3001",value:c,stack:new Error().stack};var O=d?2:0;Array.isArray(c)&&c.outerWrapper&&(c=c[0]),m=JSON.stringify(c,function(A,N){return typeof N<"u"&&N!==null&&N.toPrecision&&v(N)?Number(N.toPrecision(15)):N&&C(N)?"":N},O)}return m}}function se(c,d,m){if(!(typeof c>"u")){var O=U(c),A=O.length;if(A+d<0&&(d=0),typeof m<"u"){if(m<=0)return"";var N=d>=0?d+m:A+d+m;return O.slice(d,N).join("")}return O.slice(d).join("")}}function ve(c,d){if(!(typeof c>"u")){var m=c.indexOf(d);return m>-1?c.substr(0,m):c}}function Q(c,d){if(!(typeof c>"u")){var m=c.indexOf(d);return m>-1?c.substr(m+d.length):c}}function ae(c){if(!(typeof c>"u"))return c.toLowerCase()}function pe(c){if(!(typeof c>"u"))return c.toUpperCase()}function Se(c){if(!(typeof c>"u"))return U(c).length}function Ue(c){if(!(typeof c>"u")){var d=c.replace(/[ \t\n\r]+/gm," ");return d.charAt(0)===" "&&(d=d.substring(1)),d.charAt(d.length-1)===" "&&(d=d.substring(0,d.length-1)),d}}function be(c,d,m){if(!(typeof c>"u")){(typeof m>"u"||m.length===0)&&(m=" ");var O,A=Math.abs(d)-Se(c);if(A>0){var N=new Array(A+1).join(m);m.length>1&&(N=se(N,0,A)),d>0?O=c+N:O=N+c}else O=c;return O}}async function ye(c,d){var m=c.apply(this,[d]);if($(m)&&(m=await m),m&&!(typeof m.start=="number"||m.end==="number"||Array.isArray(m.groups)||C(m.next)))throw{code:"T1010",stack:new Error().stack};return m}async function We(c,d){if(!(typeof c>"u")){var m;if(typeof d=="string")m=c.indexOf(d)!==-1;else{var O=await ye(d,c);m=typeof O<"u"}return m}}async function ie(c,d,m){if(!(typeof c>"u")){if(m<0)throw{stack:new Error().stack,value:m,code:"D3040",index:3};var O=S();if(typeof m>"u"||m>0){var A=0,N=await ye(d,c);if(typeof N<"u")for(;typeof N<"u"&&(typeof m>"u"||A<m);)O.push({match:N.match,index:N.start,groups:N.groups}),N=await ye(N.next),A++}return O}}async function Ee(c,d,m,O){if(!(typeof c>"u")){var A=this;if(d==="")throw{code:"D3010",stack:new Error().stack,value:d,index:2};if(O<0)throw{code:"D3011",stack:new Error().stack,value:O,index:4};var N;typeof m=="string"?N=function(De){for(var st="",_e=0,et=m.indexOf("$",_e);et!==-1&&_e<m.length;){st+=m.substring(_e,et),_e=et+1;var $t=m.charAt(_e);if($t==="$")st+="$",_e++;else if($t==="0")st+=De.match,_e++;else{var He;if(De.groups.length===0?He=1:He=Math.floor(Math.log(De.groups.length)*Math.LOG10E)+1,et=parseInt(m.substring(_e,_e+He),10),He>1&&et>De.groups.length&&(et=parseInt(m.substring(_e,_e+He-1),10)),isNaN(et))st+="$";else{if(De.groups.length>0){var yn=De.groups[et-1];typeof yn<"u"&&(st+=yn)}_e+=et.toString().length}}et=m.indexOf("$",_e)}return st+=m.substring(_e),st}:N=m;var Y="",ue=0;if(typeof O>"u"||O>0){var ge=0;if(typeof d=="string"){for(var qe=c.indexOf(d,ue);qe!==-1&&(typeof O>"u"||ge<O);)Y+=c.substring(ue,qe),Y+=m,ue=qe+d.length,ge++,qe=c.indexOf(d,ue);Y+=c.substring(ue)}else{var ke=await ye(d,c);if(typeof ke<"u"){for(;typeof ke<"u"&&(typeof O>"u"||ge<O);){Y+=c.substring(ue,ke.start);var ze=N.apply(A,[ke]);if($(ze)&&(ze=await ze),typeof ze=="string")Y+=ze;else throw{code:"D3012",stack:new Error().stack,value:ze};ue=ke.start+ke.match.length,ge++,ke=await ye(ke.next)}Y+=c.substring(ue)}else Y=c}}else Y=c;return Y}}function Pe(c){if(!(typeof c>"u")){var d=typeof window<"u"?window.btoa:function(m){return new o.Buffer.from(m,"binary").toString("base64")};return d(c)}}function x(c){if(!(typeof c>"u")){var d=typeof window<"u"?window.atob:function(m){return new o.Buffer.from(m,"base64").toString("binary")};return d(c)}}function _(c){if(!(typeof c>"u")){var d;try{d=encodeURIComponent(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"encodeUrlComponent"}}return d}}function ce(c){if(!(typeof c>"u")){var d;try{d=encodeURI(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"encodeUrl"}}return d}}function Ae(c){if(!(typeof c>"u")){var d;try{d=decodeURIComponent(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"decodeUrlComponent"}}return d}}function Ve(c){if(!(typeof c>"u")){var d;try{d=decodeURI(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"decodeUrl"}}return d}}async function Le(c,d,m){if(!(typeof c>"u")){if(m<0)throw{code:"D3020",stack:new Error().stack,value:m,index:3};var O=[];if(typeof m>"u"||m>0)if(typeof d=="string")O=c.split(d,m);else{var A=0,N=await ye(d,c);if(typeof N<"u"){for(var Y=0;typeof N<"u"&&(typeof m>"u"||A<m);)O.push(c.substring(Y,N.start)),Y=N.end,N=await ye(N.next),A++;(typeof m>"u"||A<m)&&O.push(c.substring(Y))}else O.push(c)}return O}}function P(c,d){if(!(typeof c>"u"))return typeof d>"u"&&(d=""),c.join(d)}function z(c,d,m){if(!(typeof c>"u")){var O={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},A=O;typeof m<"u"&&Object.keys(m).forEach(function(we){A[we]=m[we]});for(var N=[],Y=A["zero-digit"].charCodeAt(0),ue=Y;ue<Y+10;ue++)N.push(String.fromCharCode(ue));var ge=N.concat([A["decimal-separator"],A["exponent-separator"],A["grouping-separator"],A.digit,A["pattern-separator"]]),qe=d.split(A["pattern-separator"]);if(qe.length>2)throw{code:"D3080",stack:new Error().stack};var ke=function(we){var Ke=function(){for(var tt,St=0;St<we.length;St++)if(tt=we.charAt(St),ge.indexOf(tt)!==-1&&tt!==A["exponent-separator"])return we.substring(0,St)}(),gt=function(){for(var tt,St=we.length-1;St>=0;St--)if(tt=we.charAt(St),ge.indexOf(tt)!==-1&&tt!==A["exponent-separator"])return we.substring(St+1)}(),Ye=we.substring(Ke.length,we.length-gt.length),Ot,tn,kt,rt,Tt=we.indexOf(A["exponent-separator"],Ke.length);Tt===-1||Tt>we.length-gt.length?(Ot=Ye,tn=void 0):(Ot=Ye.substring(0,Tt),tn=Ye.substring(Tt+1));var Pt=Ot.indexOf(A["decimal-separator"]);return Pt===-1?(kt=Ot,rt=gt):(kt=Ot.substring(0,Pt),rt=Ot.substring(Pt+1)),{prefix:Ke,suffix:gt,activePart:Ye,mantissaPart:Ot,exponentPart:tn,integerPart:kt,fractionalPart:rt,subpicture:we}},ze=function(we){var Ke,gt,Ye=we.subpicture,Ot=Ye.indexOf(A["decimal-separator"]);Ot!==Ye.lastIndexOf(A["decimal-separator"])&&(Ke="D3081"),Ye.indexOf(A.percent)!==Ye.lastIndexOf(A.percent)&&(Ke="D3082"),Ye.indexOf(A["per-mille"])!==Ye.lastIndexOf(A["per-mille"])&&(Ke="D3083"),Ye.indexOf(A.percent)!==-1&&Ye.indexOf(A["per-mille"])!==-1&&(Ke="D3084");var tn=!1;for(gt=0;gt<we.mantissaPart.length;gt++){var kt=we.mantissaPart.charAt(gt);if(N.indexOf(kt)!==-1||kt===A.digit){tn=!0;break}}tn||(Ke="D3085");var rt=we.activePart.split("").map(function(tt){return ge.indexOf(tt)===-1?"p":"a"}).join("");rt.indexOf("p")!==-1&&(Ke="D3086"),Ot!==-1?(Ye.charAt(Ot-1)===A["grouping-separator"]||Ye.charAt(Ot+1)===A["grouping-separator"])&&(Ke="D3087"):we.integerPart.charAt(we.integerPart.length-1)===A["grouping-separator"]&&(Ke="D3088"),Ye.indexOf(A["grouping-separator"]+A["grouping-separator"])!==-1&&(Ke="D3089");var Tt=we.integerPart.indexOf(A.digit);Tt!==-1&&we.integerPart.substring(0,Tt).split("").filter(function(tt){return N.indexOf(tt)>-1}).length>0&&(Ke="D3090"),Tt=we.fractionalPart.lastIndexOf(A.digit),Tt!==-1&&we.fractionalPart.substring(Tt).split("").filter(function(tt){return N.indexOf(tt)>-1}).length>0&&(Ke="D3091");var Pt=typeof we.exponentPart=="string";if(Pt&&we.exponentPart.length>0&&(Ye.indexOf(A.percent)!==-1||Ye.indexOf(A["per-mille"])!==-1)&&(Ke="D3092"),Pt&&(we.exponentPart.length===0||we.exponentPart.split("").filter(function(tt){return N.indexOf(tt)===-1}).length>0)&&(Ke="D3093"),Ke)throw{code:Ke,stack:new Error().stack}},De=function(we){var Ke=function(ut,$n){for(var wn=[],nn=ut.indexOf(A["grouping-separator"]);nn!==-1;){var Jn=($n?ut.substring(0,nn):ut.substring(nn)).split("").filter(function(An){return N.indexOf(An)!==-1||An===A.digit}).length;wn.push(Jn),nn=we.integerPart.indexOf(A["grouping-separator"],nn+1)}return wn},gt=Ke(we.integerPart),Ye=function(ut){if(ut.length===0)return 0;for(var $n=function(Jn,An){return An===0?Jn:$n(An,Jn%An)},wn=ut.reduce($n),nn=1;nn<=ut.length;nn++)if(ut.indexOf(nn*wn)===-1)return 0;return wn},Ot=Ye(gt),tn=Ke(we.fractionalPart,!0),kt=we.integerPart.split("").filter(function(ut){return N.indexOf(ut)!==-1}).length,rt=kt,Tt=we.fractionalPart.split(""),Pt=Tt.filter(function(ut){return N.indexOf(ut)!==-1}).length,tt=Tt.filter(function(ut){return N.indexOf(ut)!==-1||ut===A.digit}).length,St=typeof we.exponentPart=="string";kt===0&&tt===0&&(St?(Pt=1,tt=1):kt=1),St&&kt===0&&we.integerPart.indexOf(A.digit)!==-1&&(kt=1),kt===0&&Pt===0&&(Pt=1);var Dn=0;return St&&(Dn=we.exponentPart.split("").filter(function(ut){return N.indexOf(ut)!==-1}).length),{integerPartGroupingPositions:gt,regularGrouping:Ot,minimumIntegerPartSize:kt,scalingFactor:rt,prefix:we.prefix,fractionalPartGroupingPositions:tn,minimumFactionalPartSize:Pt,maximumFactionalPartSize:tt,minimumExponentSize:Dn,suffix:we.suffix,picture:we.subpicture}},st=qe.map(ke);st.forEach(ze);var _e=st.map(De),et=A["minus-sign"],$t=A["zero-digit"],He=A["decimal-separator"],yn=A["grouping-separator"];_e.length===1&&(_e.push(JSON.parse(JSON.stringify(_e[0]))),_e[1].prefix=et+_e[1].prefix);var Qe;c>=0?Qe=_e[0]:Qe=_e[1];var Ln;Qe.picture.indexOf(A.percent)!==-1?Ln=c*100:Qe.picture.indexOf(A["per-mille"])!==-1?Ln=c*1e3:Ln=c;var at,en;if(Qe.minimumExponentSize===0)at=Ln;else{var wi=Math.pow(10,Qe.scalingFactor),Br=Math.pow(10,Qe.scalingFactor-1);for(at=Ln,en=0;at<Br;)at*=10,en-=1;for(;at>wi;)at/=10,en+=1}var mr=ne(at,Qe.maximumFactionalPartSize),Gr=function(we,Ke){var gt=Math.abs(we).toFixed(Ke);return $t!=="0"&&(gt=gt.split("").map(function(Ye){return Ye>="0"&&Ye<="9"?N[Ye.charCodeAt(0)-48]:Ye}).join("")),gt},Ce=Gr(mr,Qe.maximumFactionalPartSize),ot=Ce.indexOf(".");for(ot===-1?Ce=Ce+He:Ce=Ce.replace(".",He);Ce.charAt(0)===$t;)Ce=Ce.substring(1);for(;Ce.charAt(Ce.length-1)===$t;)Ce=Ce.substring(0,Ce.length-1);ot=Ce.indexOf(He);var bn=Qe.minimumIntegerPartSize-ot,gr=Qe.minimumFactionalPartSize-(Ce.length-ot-1);if(Ce=(bn>0?new Array(bn+1).join($t):"")+Ce,Ce=Ce+(gr>0?new Array(gr+1).join($t):""),ot=Ce.indexOf(He),Qe.regularGrouping>0)for(var Et=Math.floor((ot-1)/Qe.regularGrouping),Rn=1;Rn<=Et;Rn++)Ce=[Ce.slice(0,ot-Rn*Qe.regularGrouping),yn,Ce.slice(ot-Rn*Qe.regularGrouping)].join("");else Qe.integerPartGroupingPositions.forEach(function(we){Ce=[Ce.slice(0,ot-we),yn,Ce.slice(ot-we)].join(""),ot++});if(ot=Ce.indexOf(He),Qe.fractionalPartGroupingPositions.forEach(function(we){Ce=[Ce.slice(0,we+ot+1),yn,Ce.slice(we+ot+1)].join("")}),ot=Ce.indexOf(He),(Qe.picture.indexOf(He)===-1||ot===Ce.length-1)&&(Ce=Ce.substring(0,Ce.length-1)),typeof en<"u"){var Yn=Gr(en,0);bn=Qe.minimumExponentSize-Yn.length,bn>0&&(Yn=new Array(bn+1).join($t)+Yn),Ce=Ce+A["exponent-separator"]+(en<0?et:"")+Yn}return Ce=Qe.prefix+Ce+Qe.suffix,Ce}}function L(c,d){if(!(typeof c>"u")){if(c=ne(c),typeof d>"u"?d=10:d=ne(d),d<2||d>36)throw{code:"D3100",stack:new Error().stack,value:d};var m=c.toString(d);return m}}function J(c){var d;if(!(typeof c>"u")){if(typeof c=="number")d=c;else if(typeof c=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(c)&&!isNaN(parseFloat(c))&&isFinite(c))d=parseFloat(c);else if(typeof c=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(c))d=Number(c);else if(c===!0)d=1;else if(c===!1)d=0;else throw{code:"D3030",value:c,stack:new Error().stack,index:1};return d}}function te(c){var d;if(!(typeof c>"u"))return d=Math.abs(c),d}function Z(c){var d;if(!(typeof c>"u"))return d=Math.floor(c),d}function B(c){var d;if(!(typeof c>"u"))return d=Math.ceil(c),d}function ne(c,d){var m;if(!(typeof c>"u")){if(d){var O=c.toString().split("e");c=+(O[0]+"e"+(O[1]?+O[1]+d:d))}m=Math.round(c);var A=m-c;return Math.abs(A)===.5&&Math.abs(m%2)===1&&(m=m-1),d&&(O=m.toString().split("e"),m=+(O[0]+"e"+(O[1]?+O[1]-d:-d))),Object.is(m,-0)&&(m=0),m}}function me(c){var d;if(!(typeof c>"u")){if(c<0)throw{stack:new Error().stack,code:"D3060",index:1,value:c};return d=Math.sqrt(c),d}}function Te(c,d){var m;if(!(typeof c>"u")){if(m=Math.pow(c,d),!isFinite(m))throw{stack:new Error().stack,code:"D3061",index:1,value:c,exp:d};return m}}function Re(){return Math.random()}function fe(c){if(!(typeof c>"u")){var d=!1;if(Array.isArray(c)){if(c.length===1)d=fe(c[0]);else if(c.length>1){var m=c.filter(function(O){return fe(O)});d=m.length>0}}else typeof c=="string"?c.length>0&&(d=!0):v(c)?c!==0&&(d=!0):c!==null&&typeof c=="object"?Object.keys(c).length>0&&(d=!0):typeof c=="boolean"&&c===!0&&(d=!0);return d}}function Ie(c){if(!(typeof c>"u"))return!fe(c)}function $e(c,d,m,O){var A=[d],N=W(c);return N>=2&&A.push(m),N>=3&&A.push(O),A}async function de(c,d){if(!(typeof c>"u")){for(var m=S(),O=0;O<c.length;O++){var A=$e(d,c[O],O,c),N=await d.apply(this,A);typeof N<"u"&&m.push(N)}return m}}async function lt(c,d){if(!(typeof c>"u")){for(var m=S(),O=0;O<c.length;O++){var A=c[O],N=$e(d,A,O,c),Y=await d.apply(this,N);fe(Y)&&m.push(A)}return m}}async function Ft(c,d){if(!(typeof c>"u")){for(var m=!1,O,A=0;A<c.length;A++){var N=c[A],Y=!0;if(typeof d<"u"){var ue=$e(d,N,A,c),ge=await d.apply(this,ue);Y=fe(ge)}if(Y)if(!m)O=N,m=!0;else throw{stack:new Error().stack,code:"D3138",index:A}}if(!m)throw{stack:new Error().stack,code:"D3139"};return O}}function bt(){for(var c=[],d=Array.prototype.slice.call(arguments),m=Math.min.apply(Math,d.map(function(N){return Array.isArray(N)?N.length:0})),O=0;O<m;O++){var A=d.map(N=>N[O]);c.push(A)}return c}async function ct(c,d,m){if(!(typeof c>"u")){var O,A=W(d);if(A<2)throw{stack:new Error().stack,code:"D3050",index:1};var N;for(typeof m>"u"&&c.length>0?(O=c[0],N=1):(O=m,N=0);N<c.length;){var Y=[O,c[N]];A>=3&&Y.push(N),A>=4&&Y.push(c),O=await d.apply(this,Y),N++}return O}}function wt(c){var d=S();if(Array.isArray(c)){var m={};c.forEach(function(O){var A=wt(O);A.forEach(function(N){m[N]=!0})}),d=wt(m)}else c!==null&&typeof c=="object"&&!C(c)&&Object.keys(c).forEach(O=>d.push(O));return d}function Gt(c,d){var m;if(Array.isArray(c)){m=S();for(var O=0;O<c.length;O++){var A=Gt(c[O],d);typeof A<"u"&&(Array.isArray(A)?A.forEach(N=>m.push(N)):m.push(A))}}else c!==null&&typeof c=="object"&&!C(c)&&(m=c[d]);return m}function cn(c,d){return typeof c>"u"?d:typeof d>"u"?c:(Array.isArray(c)||(c=S(c)),Array.isArray(d)||(d=[d]),c.concat(d))}function Sn(c){return!(typeof c>"u")}function Xt(c){var d=S();if(Array.isArray(c))c.forEach(function(A){d=cn(d,Xt(A))});else if(c!==null&&typeof c=="object"&&!M(c))for(var m in c){var O={};O[m]=c[m],d.push(O)}else d=c;return d}function oe(c){if(!(typeof c>"u")){var d={};return c.forEach(function(m){for(var O in m)d[O]=m[O]}),d}}function Cn(c){if(!(typeof c>"u")){if(c.length<=1)return c;for(var d=c.length,m=new Array(d),O=0;O<d;O++)m[d-O-1]=c[O];return m}}async function vn(c,d){var m=S();for(var O in c){var A=$e(d,c[O],O,c),N=await d.apply(this,A);typeof N<"u"&&m.push(N)}return m}function qt(c){throw{code:"D3137",stack:new Error().stack,message:c||"$error() function evaluated"}}function nt(c,d){if(!c)throw{code:"D3141",stack:new Error().stack,message:d||"$assert() statement failed"}}function Wt(c){if(c!==void 0)return c===null?"null":v(c)?"number":typeof c=="string"?"string":typeof c=="boolean"?"boolean":Array.isArray(c)?"array":C(c)?"function":"object"}async function Ne(c,d){if(!(typeof c>"u")){if(c.length<=1)return c;var m;if(typeof d>"u"){if(!I(c)&&!b(c))throw{stack:new Error().stack,code:"D3070",index:1};m=async function(Y,ue){return Y>ue}}else m=d;var O=async function(Y,ue){var ge=async function(ke,ze,De){ze.length===0?Array.prototype.push.apply(ke,De):De.length===0?Array.prototype.push.apply(ke,ze):await m(ze[0],De[0])?(ke.push(De[0]),await ge(ke,ze,De.slice(1))):(ke.push(ze[0]),await ge(ke,ze.slice(1),De))},qe=[];return await ge(qe,Y,ue),qe},A=async function(Y){if(!Array.isArray(Y)||Y.length<=1)return Y;var ue=Math.floor(Y.length/2),ge=Y.slice(0,ue),qe=Y.slice(ue);return ge=await A(ge),qe=await A(qe),await O(ge,qe)},N=await A(c);return N}}function f(c){if(!(typeof c>"u")){if(c.length<=1)return c;for(var d=new Array(c.length),m=0;m<c.length;m++){var O=Math.floor(Math.random()*(m+1));m!==O&&(d[m]=d[O]),d[O]=c[m]}return d}}function k(c){if(!(typeof c>"u")){if(!Array.isArray(c)||c.length<=1)return c;for(var d=y(c)?S():[],m=0;m<c.length;m++){for(var O=c[m],A=!1,N=0;N<d.length;N++)if(re(O,d[N])){A=!0;break}A||d.push(O)}return d}}async function E(c,d){var m={};for(var O in c){var A=c[O],N=$e(d,A,O,c),Y=await d.apply(this,N);fe(Y)&&(m[O]=A)}return Object.keys(m).length===0&&(m=void 0),m}return{sum:R,count:G,max:D,min:w,average:q,string:j,substring:se,substringBefore:ve,substringAfter:Q,lowercase:ae,uppercase:pe,length:Se,trim:Ue,pad:be,match:ie,contains:We,replace:Ee,split:Le,join:P,formatNumber:z,formatBase:L,number:J,floor:Z,ceil:B,round:ne,abs:te,sqrt:me,power:Te,random:Re,boolean:fe,not:Ie,map:de,zip:bt,filter:lt,single:Ft,foldLeft:ct,sift:E,keys:wt,lookup:Gt,append:cn,exists:Sn,spread:Xt,merge:oe,reverse:Cn,each:vn,error:qt,assert:nt,type:Wt,sort:Ne,shuffle:f,distinct:k,base64encode:Pe,base64decode:x,encodeUrlComponent:_,encodeUrl:ce,decodeUrlComponent:Ae,decodeUrl:Ve}})();i.exports=h}).call(this)}).call(this,typeof Oi<"u"?Oi:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(n,i,s){var o=n("./datetime"),a=n("./functions"),h=n("./utils"),v=n("./parser"),b=n("./signature"),I=function(){var S=h.isNumeric,y=h.isArrayOfStrings,C=h.isArrayOfNumbers,M=h.createSequence,$=h.isSequence,W=h.isFunction,re=h.isLambda,U=h.isIterable,R=h.isPromise,G=h.getFunctionArity,D=h.isDeepEqual,w=qt(null);async function q(f,k,E){var c,d=E.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(d&&await d(f,k,E),f.type){case"path":c=await j(f,k,E);break;case"binary":c=await Se(f,k,E);break;case"unary":c=await Ue(f,k,E);break;case"name":c=be(f,k);break;case"string":case"number":case"value":c=ye(f);break;case"wildcard":c=We(f,k);break;case"descendant":c=Ee(f,k);break;case"parent":c=E.lookup(f.slot.label);break;case"condition":c=await Z(f,k,E);break;case"block":c=await B(f,k,E);break;case"bind":c=await te(f,k,E);break;case"regex":c=ne(f);break;case"function":c=await $e(f,k,E);break;case"variable":c=me(f,k,E);break;case"lambda":c=Ft(f,k,E);break;case"partial":c=await bt(f,k,E);break;case"apply":c=await Ie(f,k,E);break;case"transform":c=Re(f,k,E);break}if(Object.prototype.hasOwnProperty.call(f,"predicate"))for(var m=0;m<f.predicate.length;m++)c=await pe(f.predicate[m].expr,c,E);f.type!=="path"&&Object.prototype.hasOwnProperty.call(f,"group")&&(c=await z(f.group,c,E));var O=E.lookup(Symbol.for("jsonata.__evaluate_exit"));return O&&await O(f,k,E,c),c&&$(c)&&!c.tupleStream&&(f.keepArray&&(c.keepSingleton=!0),c.length===0?c=void 0:c.length===1&&(c=c.keepSingleton?c:c[0])),c}async function j(f,k,E){var c;Array.isArray(k)&&f.steps[0].type!=="variable"?c=k:c=M(k);for(var d,m=!1,O=void 0,A=0;A<f.steps.length;A++){var N=f.steps[A];if(N.tuple&&(m=!0),A===0&&N.consarray?d=await q(N,c,E):m?O=await ae(N,c,O,E):d=await ve(N,c,E,A===f.steps.length-1),!m&&(typeof d>"u"||d.length===0))break;typeof N.focus>"u"&&(c=d)}if(m)if(f.tuple)d=O;else for(d=M(),A=0;A<O.length;A++)d.push(O[A]["@"]);return f.keepSingletonArray&&(Array.isArray(d)&&d.cons&&!d.sequence&&(d=M(d)),d.keepSingleton=!0),f.hasOwnProperty("group")&&(d=await z(f.group,m?O:d,E)),d}function se(f,k){var E=qt(f);for(const c in k)E.bind(c,k[c]);return E}async function ve(f,k,E,c){var d;if(f.type==="sort")return d=await Te(f,k,E),f.stages&&(d=await Q(f.stages,d,E)),d;d=M();for(var m=0;m<k.length;m++){var O=await q(f,k[m],E);if(f.stages)for(var A=0;A<f.stages.length;A++)O=await pe(f.stages[A].expr,O,E);typeof O<"u"&&d.push(O)}var N=M();return c&&d.length===1&&Array.isArray(d[0])&&!$(d[0])?N=d[0]:d.forEach(function(Y){!Array.isArray(Y)||Y.cons?N.push(Y):Y.forEach(ue=>N.push(ue))}),N}async function Q(f,k,E){for(var c=k,d=0;d<f.length;d++){var m=f[d];switch(m.type){case"filter":c=await pe(m.expr,c,E);break;case"index":for(var O=0;O<c.length;O++){var A=c[O];A[m.value]=O}break}}return c}async function ae(f,k,E,c){var d;if(f.type==="sort"){if(E)d=await Te(f,E,c);else{var m=await Te(f,k,c);d=M(),d.tupleStream=!0;for(var O=0;O<m.length;O++){var A={"@":m[O]};A[f.index]=O,d.push(A)}}return f.stages&&(d=await Q(f.stages,d,c)),d}d=M(),d.tupleStream=!0;var N=c;E===void 0&&(E=k.map(qe=>({"@":qe})));for(var Y=0;Y<E.length;Y++){N=se(c,E[Y]);var ue=await q(f,E[Y]["@"],N);if(typeof ue<"u"){Array.isArray(ue)||(ue=[ue]);for(var ge=0;ge<ue.length;ge++)A={},Object.assign(A,E[Y]),ue.tupleStream?Object.assign(A,ue[ge]):(f.focus?(A[f.focus]=ue[ge],A["@"]=E[Y]["@"]):A["@"]=ue[ge],f.index&&(A[f.index]=ge),f.ancestor&&(A[f.ancestor.label]=E[Y]["@"])),d.push(A)}}return f.stages&&(d=await Q(f.stages,d,c)),d}async function pe(f,k,E){var c=M();if(k&&k.tupleStream&&(c.tupleStream=!0),Array.isArray(k)||(k=M(k)),f.type==="number"){var d=Math.floor(f.value);d<0&&(d=k.length+d);var m=k[d];typeof m<"u"&&(Array.isArray(m)?c=m:c.push(m))}else for(d=0;d<k.length;d++){var m=k[d],O=m,A=E;k.tupleStream&&(O=m["@"],A=se(E,m));var N=await q(f,O,A);S(N)&&(N=[N]),C(N)?N.forEach(function(ue){var ge=Math.floor(ue);ge<0&&(ge=k.length+ge),ge===d&&c.push(m)}):a.boolean(N)&&c.push(m)}return c}async function Se(f,k,E){var c,d=await q(f.lhs,k,E),m=f.value,O=async()=>await q(f.rhs,k,E);if(m==="and"||m==="or")try{return await Ve(d,O,m)}catch(N){throw N.position=f.position,N.token=m,N}var A=await O();try{switch(m){case"+":case"-":case"*":case"/":case"%":c=x(d,A,m);break;case"=":case"!=":c=_(d,A,m);break;case"<":case"<=":case">":case">=":c=ce(d,A,m);break;case"&":c=P(d,A);break;case"..":c=J(d,A);break;case"in":c=Ae(d,A);break}}catch(N){throw N.position=f.position,N.token=m,N}return c}async function Ue(f,k,E){var c;switch(f.value){case"-":if(c=await q(f.expression,k,E),typeof c>"u")c=void 0;else if(S(c))c=-c;else throw{code:"D1002",stack:new Error().stack,position:f.position,token:f.value,value:c};break;case"[":c=[];let O=await Promise.all(f.expressions.map(async(A,N)=>(E.isParallelCall=N>0,[A,await q(A,k,E)])));for(let A of O){var[d,m]=A;typeof m<"u"&&(d.value==="["?c.push(m):c=a.append(c,m))}f.consarray&&Object.defineProperty(c,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":c=await z(f,k,E);break}return c}function be(f,k,E){return a.lookup(k,f.value)}function ye(f){return f.value}function We(f,k){var E=M();return Array.isArray(k)&&k.outerWrapper&&k.length>0&&(k=k[0]),k!==null&&typeof k=="object"&&Object.keys(k).forEach(function(c){var d=k[c];Array.isArray(d)?(d=ie(d),E=a.append(E,d)):E.push(d)}),E}function ie(f,k){return typeof k>"u"&&(k=[]),Array.isArray(f)?f.forEach(function(E){ie(E,k)}):k.push(f),k}function Ee(f,k){var E,c=M();return typeof k<"u"&&(Pe(k,c),c.length===1?E=c[0]:E=c),E}function Pe(f,k){Array.isArray(f)||k.push(f),Array.isArray(f)?f.forEach(function(E){Pe(E,k)}):f!==null&&typeof f=="object"&&Object.keys(f).forEach(function(E){Pe(f[E],k)})}function x(f,k,E){var c;if(typeof f<"u"&&!S(f))throw{code:"T2001",stack:new Error().stack,value:f};if(typeof k<"u"&&!S(k))throw{code:"T2002",stack:new Error().stack,value:k};if(typeof f>"u"||typeof k>"u")return c;switch(E){case"+":c=f+k;break;case"-":c=f-k;break;case"*":c=f*k;break;case"/":c=f/k;break;case"%":c=f%k;break}return c}function _(f,k,E){var c,d=typeof f,m=typeof k;if(d==="undefined"||m==="undefined")return!1;switch(E){case"=":c=D(f,k);break;case"!=":c=!D(f,k);break}return c}function ce(f,k,E){var c,d=typeof f,m=typeof k,O=d==="undefined"||d==="string"||d==="number",A=m==="undefined"||m==="string"||m==="number";if(!O||!A)throw{code:"T2010",stack:new Error().stack,value:d==="string"||d==="number"?k:f};if(!(d==="undefined"||m==="undefined")){if(d!==m)throw{code:"T2009",stack:new Error().stack,value:f,value2:k};switch(E){case"<":c=f<k;break;case"<=":c=f<=k;break;case">":c=f>k;break;case">=":c=f>=k;break}return c}}function Ae(f,k){var E=!1;if(typeof f>"u"||typeof k>"u")return!1;Array.isArray(k)||(k=[k]);for(var c=0;c<k.length;c++)if(k[c]===f){E=!0;break}return E}async function Ve(f,k,E){var c,d=Le(f);switch(E){case"and":c=d&&Le(await k());break;case"or":c=d||Le(await k());break}return c}function Le(f){var k=a.boolean(f);return typeof k>"u"?!1:k}function P(f,k){var E,c="",d="";return typeof f<"u"&&(c=a.string(f)),typeof k<"u"&&(d=a.string(k)),E=c.concat(d),E}async function z(f,k,E){var c={},d={},m=!!(k&&k.tupleStream);Array.isArray(k)||(k=M(k)),k.length===0&&k.push(void 0);for(var O=0;O<k.length;O++)for(var A=k[O],N=m?se(E,A):E,Y=0;Y<f.lhs.length;Y++){var ue=f.lhs[Y],ge=await q(ue[0],m?A["@"]:A,N);if(typeof ge!="string"&&ge!==void 0)throw{code:"T1003",stack:new Error().stack,position:f.position,value:ge};if(ge!==void 0){var qe={data:A,exprIndex:Y};if(d.hasOwnProperty(ge)){if(d[ge].exprIndex!==Y)throw{code:"D1009",stack:new Error().stack,position:f.position,value:ge};d[ge].data=a.append(d[ge].data,A)}else d[ge]=qe}}let ke=await Promise.all(Object.keys(d).map(async(De,st)=>{let _e=d[De];var et=_e.data,$t=E;if(m){var He=L(_e.data);et=He["@"],delete He["@"],$t=se(E,He)}return E.isParallelCall=st>0,[De,await q(f.lhs[_e.exprIndex][1],et,$t)]}));for(let De of ke){var[ge,ze]=await De;typeof ze<"u"&&(c[ge]=ze)}return c}function L(f){if(!Array.isArray(f))return f;var k={};Object.assign(k,f[0]);for(var E=1;E<f.length;E++)for(const c in f[E])k[c]=a.append(k[c],f[E][c]);return k}function J(f,k){var E;if(typeof f<"u"&&!Number.isInteger(f))throw{code:"T2003",stack:new Error().stack,value:f};if(typeof k<"u"&&!Number.isInteger(k))throw{code:"T2004",stack:new Error().stack,value:k};if(typeof f>"u"||typeof k>"u"||f>k)return E;var c=k-f+1;if(c>1e7)throw{code:"D2014",stack:new Error().stack,value:c};E=new Array(c);for(var d=f,m=0;d<=k;d++,m++)E[m]=d;return E.sequence=!0,E}async function te(f,k,E){var c=await q(f.rhs,k,E);return E.bind(f.lhs.value,c),c}async function Z(f,k,E){var c,d=await q(f.condition,k,E);return a.boolean(d)?c=await q(f.then,k,E):typeof f.else<"u"&&(c=await q(f.else,k,E)),c}async function B(f,k,E){for(var c,d=qt(E),m=0;m<f.expressions.length;m++)c=await q(f.expressions[m],k,d);return c}function ne(f){var k=new Ne.RegexEngine(f.value),E=function(c,d){var m;k.lastIndex=d||0;var O=k.exec(c);if(O!==null){if(m={match:O[0],start:O.index,end:O.index+O[0].length,groups:[]},O.length>1)for(var A=1;A<O.length;A++)m.groups.push(O[A]);m.next=function(){if(!(k.lastIndex>=c.length)){var N=E(c,k.lastIndex);if(N&&N.match==="")throw{code:"D1004",stack:new Error().stack,position:f.position,value:f.value.source};return N}}}return m};return E}function me(f,k,E){var c;return f.value===""?c=k&&k.outerWrapper?k[0]:k:c=E.lookup(f.value),c}async function Te(f,k,E){var c,d=k,m=!!k.tupleStream,O=async function(N,Y){for(var ue=0,ge=0;ue===0&&ge<f.terms.length;ge++){var qe=f.terms[ge],ke=N,ze=E;m&&(ke=N["@"],ze=se(E,N));var De=await q(qe.expression,ke,ze);ke=Y,ze=E,m&&(ke=Y["@"],ze=se(E,Y));var st=await q(qe.expression,ke,ze),_e=typeof De,et=typeof st;if(_e==="undefined"){ue=et==="undefined"?0:1;continue}if(et==="undefined"){ue=-1;continue}if(!(_e==="string"||_e==="number")||!(et==="string"||et==="number"))throw{code:"T2008",stack:new Error().stack,position:f.position,value:_e==="string"||_e==="number"?st:De};if(_e!==et)throw{code:"T2007",stack:new Error().stack,position:f.position,value:De,value2:st};De!==st&&(De<st?ue=-1:ue=1,qe.descending===!0&&(ue=-ue))}return ue===1},A={environment:E,input:k};return c=await a.sort.apply(A,[d,O]),c}function Re(f,k,E){var c=async function(d){if(!(typeof d>"u")){var m=E.lookup("clone");if(!W(m))throw{code:"T2013",stack:new Error().stack,position:f.position};var O=await de(m,[d],null,E),A=await q(f.pattern,O,E);if(typeof A<"u"){Array.isArray(A)||(A=[A]);for(var N=0;N<A.length;N++){var Y=A[N];if(Y&&(Y.isPrototypeOf(O)||Y instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:f.position};var ue=await q(f.update,Y,E),ge=typeof ue;if(ge!=="undefined"){if(ge!=="object"||ue===null||Array.isArray(ue))throw{code:"T2011",stack:new Error().stack,position:f.update.position,value:ue};for(var qe in ue)Y[qe]=ue[qe]}if(typeof f.delete<"u"){var ke=await q(f.delete,Y,E);if(typeof ke<"u"){var ze=ke;if(Array.isArray(ke)||(ke=[ke]),!y(ke))throw{code:"T2012",stack:new Error().stack,position:f.delete.position,value:ze};for(var De=0;De<ke.length;De++)typeof Y=="object"&&Y!==null&&delete Y[ke[De]]}}}}return O}};return oe(c,"<(oa):o>")}var fe=v("function($f, $g) { function($x){ $g($f($x)) } }");async function Ie(f,k,E){var c,d=await q(f.lhs,k,E);if(f.rhs.type==="function")c=await $e(f.rhs,k,E,{context:d});else{var m=await q(f.rhs,k,E);if(!W(m))throw{code:"T2006",stack:new Error().stack,position:f.position,value:m};if(W(d)){var O=await q(fe,null,E);c=await de(O,[d,m],null,E)}else c=await de(m,[d],null,E)}return c}async function $e(f,k,E,c){var d,m=await q(f.procedure,k,E);if(typeof m>"u"&&f.procedure.type==="path"&&E.lookup(f.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:f.position,token:f.procedure.steps[0].value};var O=[];typeof c<"u"&&O.push(c.context);for(var A=0;A<f.arguments.length;A++){const Y=await q(f.arguments[A],k,E);if(W(Y)){const ue=async function(...ge){return await de(Y,ge,null,E)};ue.arity=G(Y),O.push(ue)}else O.push(Y)}var N=f.procedure.type==="path"?f.procedure.steps[0].value:f.procedure.value;try{typeof m=="object"&&(m.token=N,m.position=f.position),d=await de(m,O,k,E)}catch(Y){throw Y.position||(Y.position=f.position),Y.token||(Y.token=N),Y}return d}async function de(f,k,E,c){var d;for(d=await lt(f,k,E,c);re(d)&&d.thunk===!0;){var m=await q(d.body.procedure,d.input,d.environment);d.body.procedure.type==="variable"&&(m.token=d.body.procedure.value),m.position=d.body.procedure.position;for(var O=[],A=0;A<d.body.arguments.length;A++)O.push(await q(d.body.arguments[A],d.input,d.environment));d=await lt(m,O,E,c)}return d}async function lt(f,k,E,c){var d;try{var m=k;if(f&&(m=ct(f.signature,k,E)),re(f))d=await wt(f,m);else if(f&&f._jsonata_function===!0){var O={environment:c,input:E};d=f.implementation.apply(O,m),U(d)&&(d=d.next().value),R(d)&&(d=await d)}else if(typeof f=="function")d=f.apply(E,m),R(d)&&(d=await d);else throw{code:"T1006",stack:new Error().stack}}catch(A){throw f&&(typeof A.token>"u"&&typeof f.token<"u"&&(A.token=f.token),A.position=f.position||A.position),A}return d}function Ft(f,k,E){var c={_jsonata_lambda:!0,input:k,environment:E,arguments:f.arguments,signature:f.signature,body:f.body};return f.thunk===!0&&(c.thunk=!0),c.apply=async function(d,m){return await de(c,m,k,d?d.environment:E)},c}async function bt(f,k,E){for(var c,d=[],m=0;m<f.arguments.length;m++){var O=f.arguments[m];O.type==="operator"&&O.value==="?"?d.push(O):d.push(await q(O,k,E))}var A=await q(f.procedure,k,E);if(typeof A>"u"&&f.procedure.type==="path"&&E.lookup(f.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:f.position,token:f.procedure.steps[0].value};if(re(A))c=Gt(A,d);else if(A&&A._jsonata_function===!0)c=cn(A.implementation,d);else if(typeof A=="function")c=cn(A,d);else throw{code:"T1008",stack:new Error().stack,position:f.position,token:f.procedure.type==="path"?f.procedure.steps[0].value:f.procedure.value};return c}function ct(f,k,E){if(typeof f>"u")return k;var c=f.validate(k,E);return c}async function wt(f,k){var E,c=qt(f.environment);return f.arguments.forEach(function(d,m){c.bind(d.value,k[m])}),typeof f.body=="function"?E=await Sn(f.body,c):E=await q(f.body,f.input,c),E}function Gt(f,k){var E=qt(f.environment),c=[];f.arguments.forEach(function(m,O){var A=k[O];A&&A.type==="operator"&&A.value==="?"?c.push(m):E.bind(m.value,A)});var d={_jsonata_lambda:!0,input:f.input,environment:E,arguments:c,body:f.body};return d}function cn(f,k){var E=Xt(f);E=E.map(function(O){return"$"+O.trim()});var c="function("+E.join(", ")+"){ _ }",d=v(c);d.body=f;var m=Gt(d,k);return m}async function Sn(f,k){var E=Xt(f),c=E.map(function(O){return k.lookup(O.trim())}),d={environment:k},m=f.apply(d,c);return R(m)&&(m=await m),m}function Xt(f){var k=f.toString(),E=/\(([^)]*)\)/.exec(k)[1],c=E.split(",");return c}function oe(f,k){var E={_jsonata_function:!0,implementation:f};return typeof k<"u"&&(E.signature=b(k)),E}async function Cn(f,k){if(!(typeof f>"u")){var E=this.input;typeof k<"u"&&(E=k,Array.isArray(E)&&!$(E)&&(E=M(E),E.outerWrapper=!0));try{var c=v(f,!1)}catch(m){throw Wt(m),{stack:new Error().stack,code:"D3120",value:m.message,error:m}}try{var d=await q(c,E,this.environment)}catch(m){throw Wt(m),{stack:new Error().stack,code:"D3121",value:m.message,error:m}}return d}}function vn(f){if(!(typeof f>"u"))return JSON.parse(a.string(f))}function qt(f){var k={};const E={bind:function(d,m){k[d]=m},lookup:function(d){var m;return k.hasOwnProperty(d)?m=k[d]:f&&(m=f.lookup(d)),m},timestamp:f?f.timestamp:null,async:f?f.async:!1,isParallelCall:f?f.isParallelCall:!1,global:f?f.global:{ancestry:[null]}};if(f){var c=f.lookup(Symbol.for("jsonata.__createFrame_push"));c&&c(f,E)}return E}w.bind("sum",oe(a.sum,"<a<n>:n>")),w.bind("count",oe(a.count,"<a:n>")),w.bind("max",oe(a.max,"<a<n>:n>")),w.bind("min",oe(a.min,"<a<n>:n>")),w.bind("average",oe(a.average,"<a<n>:n>")),w.bind("string",oe(a.string,"<x-b?:s>")),w.bind("substring",oe(a.substring,"<s-nn?:s>")),w.bind("substringBefore",oe(a.substringBefore,"<s-s:s>")),w.bind("substringAfter",oe(a.substringAfter,"<s-s:s>")),w.bind("lowercase",oe(a.lowercase,"<s-:s>")),w.bind("uppercase",oe(a.uppercase,"<s-:s>")),w.bind("length",oe(a.length,"<s-:n>")),w.bind("trim",oe(a.trim,"<s-:s>")),w.bind("pad",oe(a.pad,"<s-ns?:s>")),w.bind("match",oe(a.match,"<s-f<s:o>n?:a<o>>")),w.bind("contains",oe(a.contains,"<s-(sf):b>")),w.bind("replace",oe(a.replace,"<s-(sf)(sf)n?:s>")),w.bind("split",oe(a.split,"<s-(sf)n?:a<s>>")),w.bind("join",oe(a.join,"<a<s>s?:s>")),w.bind("formatNumber",oe(a.formatNumber,"<n-so?:s>")),w.bind("formatBase",oe(a.formatBase,"<n-n?:s>")),w.bind("formatInteger",oe(o.formatInteger,"<n-s:s>")),w.bind("parseInteger",oe(o.parseInteger,"<s-s:n>")),w.bind("number",oe(a.number,"<(nsb)-:n>")),w.bind("floor",oe(a.floor,"<n-:n>")),w.bind("ceil",oe(a.ceil,"<n-:n>")),w.bind("round",oe(a.round,"<n-n?:n>")),w.bind("abs",oe(a.abs,"<n-:n>")),w.bind("sqrt",oe(a.sqrt,"<n-:n>")),w.bind("power",oe(a.power,"<n-n:n>")),w.bind("random",oe(a.random,"<:n>")),w.bind("boolean",oe(a.boolean,"<x-:b>")),w.bind("not",oe(a.not,"<x-:b>")),w.bind("map",oe(a.map,"<af>")),w.bind("zip",oe(a.zip,"<a+>")),w.bind("filter",oe(a.filter,"<af>")),w.bind("single",oe(a.single,"<af?>")),w.bind("reduce",oe(a.foldLeft,"<afj?:j>")),w.bind("sift",oe(a.sift,"<o-f?:o>")),w.bind("keys",oe(a.keys,"<x-:a<s>>")),w.bind("lookup",oe(a.lookup,"<x-s:x>")),w.bind("append",oe(a.append,"<xx:a>")),w.bind("exists",oe(a.exists,"<x:b>")),w.bind("spread",oe(a.spread,"<x-:a<o>>")),w.bind("merge",oe(a.merge,"<a<o>:o>")),w.bind("reverse",oe(a.reverse,"<a:a>")),w.bind("each",oe(a.each,"<o-f:a>")),w.bind("error",oe(a.error,"<s?:x>")),w.bind("assert",oe(a.assert,"<bs?:x>")),w.bind("type",oe(a.type,"<x:s>")),w.bind("sort",oe(a.sort,"<af?:a>")),w.bind("shuffle",oe(a.shuffle,"<a:a>")),w.bind("distinct",oe(a.distinct,"<x:x>")),w.bind("base64encode",oe(a.base64encode,"<s-:s>")),w.bind("base64decode",oe(a.base64decode,"<s-:s>")),w.bind("encodeUrlComponent",oe(a.encodeUrlComponent,"<s-:s>")),w.bind("encodeUrl",oe(a.encodeUrl,"<s-:s>")),w.bind("decodeUrlComponent",oe(a.decodeUrlComponent,"<s-:s>")),w.bind("decodeUrl",oe(a.decodeUrl,"<s-:s>")),w.bind("eval",oe(Cn,"<sx?:x>")),w.bind("toMillis",oe(o.toMillis,"<s-s?:n>")),w.bind("fromMillis",oe(o.fromMillis,"<n-s?s?:s>")),w.bind("clone",oe(vn,"<(oa)-:o>"));var nt={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Wt(f){var k=nt[f.code];if(typeof k<"u"){var E=k.replace(/\{\{\{([^}]+)}}}/g,function(){return f[arguments[1]]});E=E.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(f[arguments[1]])}),f.message=E}}function Ne(f,k){var E,c;try{E=v(f,k&&k.recover),c=E.errors,delete E.errors}catch(O){throw Wt(O),O}var d=qt(w),m=new Date;return d.bind("now",oe(function(O,A){return o.fromMillis(m.getTime(),O,A)},"<s?s?:s>")),d.bind("millis",oe(function(){return m.getTime()},"<:n>")),k&&k.RegexEngine?Ne.RegexEngine=k.RegexEngine:Ne.RegexEngine=RegExp,{evaluate:async function(O,A,N){if(typeof c<"u"){var Y={code:"S0500",position:0};throw Wt(Y),Y}if(typeof A<"u"){var ue;ue=qt(d);for(var ge in A)ue.bind(ge,A[ge])}else ue=d;ue.bind("$",O),m=new Date,ue.timestamp=m,Array.isArray(O)&&!$(O)&&(O=M(O),O.outerWrapper=!0);var qe;try{return qe=await q(E,O,ue),typeof N=="function"&&N(null,qe),qe}catch(ke){throw Wt(ke),ke}},assign:function(O,A){d.bind(O,A)},registerFunction:function(O,A,N){var Y=oe(A,N);d.bind(O,Y)},ast:function(){return E},errors:function(){return c}}}return Ne.parser=v,Ne}();i.exports=I},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(n,i,s){var o=n("./signature");const a=(()=>{var h={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},v={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},b=function(S){var y=0,C=S.length,M=function(re,U){var R={type:re,value:U,position:y};return R},$=function(){for(var re=y,U=0,R,G,D=function(q){if(S.charAt(q)==="/"&&U===0){for(var j=0;S.charAt(q-(j+1))==="\\";)j++;if(j%2===0)return!0}return!1};y<C;){var w=S.charAt(y);if(D(y)){if(R=S.substring(re,y),R==="")throw{code:"S0301",stack:new Error().stack,position:y};for(y++,w=S.charAt(y),re=y;w==="i"||w==="m";)y++,w=S.charAt(y);return G=S.substring(re,y)+"g",new RegExp(R,G)}(w==="("||w==="["||w==="{")&&S.charAt(y-1)!=="\\"&&U++,(w===")"||w==="]"||w==="}")&&S.charAt(y-1)!=="\\"&&U--,y++}throw{code:"S0302",stack:new Error().stack,position:y}},W=function(re){if(y>=C)return null;for(var U=S.charAt(y);y<C&&` 	
\r\v`.indexOf(U)>-1;)y++,U=S.charAt(y);if(U==="/"&&S.charAt(y+1)==="*"){var R=y;for(y+=2,U=S.charAt(y);!(U==="*"&&S.charAt(y+1)==="/");)if(U=S.charAt(++y),y>=C)throw{code:"S0106",stack:new Error().stack,position:R};return y+=2,U=S.charAt(y),W(re)}if(re!==!0&&U==="/")return y++,M("regex",$());if(U==="."&&S.charAt(y+1)===".")return y+=2,M("operator","..");if(U===":"&&S.charAt(y+1)==="=")return y+=2,M("operator",":=");if(U==="!"&&S.charAt(y+1)==="=")return y+=2,M("operator","!=");if(U===">"&&S.charAt(y+1)==="=")return y+=2,M("operator",">=");if(U==="<"&&S.charAt(y+1)==="=")return y+=2,M("operator","<=");if(U==="*"&&S.charAt(y+1)==="*")return y+=2,M("operator","**");if(U==="~"&&S.charAt(y+1)===">")return y+=2,M("operator","~>");if(Object.prototype.hasOwnProperty.call(h,U))return y++,M("operator",U);if(U==='"'||U==="'"){var G=U;y++;for(var D="";y<C;){if(U=S.charAt(y),U==="\\")if(y++,U=S.charAt(y),Object.prototype.hasOwnProperty.call(v,U))D+=v[U];else if(U==="u"){var w=S.substr(y+1,4);if(/^[0-9a-fA-F]+$/.test(w)){var q=parseInt(w,16);D+=String.fromCharCode(q),y+=4}else throw{code:"S0104",stack:new Error().stack,position:y}}else throw{code:"S0103",stack:new Error().stack,position:y,token:U};else{if(U===G)return y++,M("string",D);D+=U}y++}throw{code:"S0101",stack:new Error().stack,position:y}}var j=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,se=j.exec(S.substring(y));if(se!==null){var ve=parseFloat(se[0]);if(!isNaN(ve)&&isFinite(ve))return y+=se[0].length,M("number",ve);throw{code:"S0102",stack:new Error().stack,position:y,token:se[0]}}var Q;if(U==="`"){y++;var ae=S.indexOf("`",y);if(ae!==-1)return Q=S.substring(y,ae),y=ae+1,M("name",Q);throw y=C,{code:"S0105",stack:new Error().stack,position:y}}for(var pe=y,Se;;)if(Se=S.charAt(pe),pe===C||` 	
\r\v`.indexOf(Se)>-1||Object.prototype.hasOwnProperty.call(h,Se)){if(S.charAt(y)==="$")return Q=S.substring(y+1,pe),y=pe,M("variable",Q);switch(Q=S.substring(y,pe),y=pe,Q){case"or":case"in":case"and":return M("operator",Q);case"true":return M("value",!0);case"false":return M("value",!1);case"null":return M("value",null);default:return y===C&&Q===""?null:M("name",Q)}}else pe++};return W},I=function(S,y){var C,M,$={},W=[],re=function(){var x=[];C.id!=="(end)"&&x.push({type:C.type,value:C.value,position:C.position});for(var _=M();_!==null;)x.push(_),_=M();return x},U={nud:function(){var x={code:"S0211",token:this.value,position:this.position};if(y)return x.remaining=re(),x.type="error",W.push(x),x;throw x.stack=new Error().stack,x}},R=function(x,_){var ce=$[x];return _=_||0,ce?_>=ce.lbp&&(ce.lbp=_):(ce=Object.create(U),ce.id=ce.value=x,ce.lbp=_,$[x]=ce),ce},G=function(x){if(y){x.remaining=re(),W.push(x);var _=$["(error)"];return C=Object.create(_),C.error=x,C.type="(error)",C}else throw x.stack=new Error().stack,x},D=function(x,_){if(x&&C.id!==x){var ce;C.id==="(end)"?ce="S0203":ce="S0202";var Ae={code:ce,position:C.position,token:C.value,value:x};return G(Ae)}var Ve=M(_);if(Ve===null)return C=$["(end)"],C.position=S.length,C;var Le=Ve.value,P=Ve.type,z;switch(P){case"name":case"variable":z=$["(name)"];break;case"operator":if(z=$[Le],!z)return G({code:"S0204",stack:new Error().stack,position:Ve.position,token:Le});break;case"string":case"number":case"value":z=$["(literal)"];break;case"regex":P="regex",z=$["(regex)"];break;default:return G({code:"S0205",stack:new Error().stack,position:Ve.position,token:Le})}return C=Object.create(z),C.value=Le,C.type=P,C.position=Ve.position,C},w=function(x){var _,ce=C;for(D(null,!0),_=ce.nud();x<C.lbp;)ce=C,D(),_=ce.led(_);return _},q=function(x){var _=R(x,0);_.nud=function(){return this}},j=function(x,_,ce){var Ae=_||h[x],Ve=R(x,Ae);return Ve.led=ce||function(Le){return this.lhs=Le,this.rhs=w(Ae),this.type="binary",this},Ve},se=function(x,_,ce){var Ae=R(x,_);return Ae.led=ce,Ae},ve=function(x,_){var ce=R(x);return ce.nud=_||function(){return this.expression=w(70),this.type="unary",this},ce};q("(end)"),q("(name)"),q("(literal)"),q("(regex)"),R(":"),R(";"),R(","),R(")"),R("]"),R("}"),R(".."),j("."),j("+"),j("-"),j("*"),j("/"),j("%"),j("="),j("<"),j(">"),j("!="),j("<="),j(">="),j("&"),j("and"),j("or"),j("in"),q("and"),q("or"),q("in"),ve("-"),j("~>"),se("(error)",10,function(x){return this.lhs=x,this.error=C.error,this.remaining=re(),this.type="error",this}),ve("*",function(){return this.type="wildcard",this}),ve("**",function(){return this.type="descendant",this}),ve("%",function(){return this.type="parent",this}),j("(",h["("],function(x){if(this.procedure=x,this.type="function",this.arguments=[],C.id!==")")for(;C.type==="operator"&&C.id==="?"?(this.type="partial",this.arguments.push(C),D("?")):this.arguments.push(w(0)),C.id===",";)D(",");if(D(")",!0),x.type==="name"&&(x.value==="function"||x.value==="λ")){if(this.arguments.forEach(function(Le,P){if(Le.type!=="variable")return G({code:"S0208",stack:new Error().stack,position:Le.position,token:Le.value,value:P+1})}),this.type="lambda",C.id==="<"){for(var _=C.position,ce=1,Ae="<";ce>0&&C.id!=="{"&&C.id!=="(end)";){var Ve=D();Ve.id===">"?ce--:Ve.id==="<"&&ce++,Ae+=Ve.value}D(">");try{this.signature=o(Ae)}catch(Le){return Le.position=_+Le.offset,G(Le)}}D("{"),this.body=w(0),D("}")}return this}),ve("(",function(){for(var x=[];C.id!==")"&&(x.push(w(0)),C.id===";");)D(";");return D(")",!0),this.type="block",this.expressions=x,this}),ve("[",function(){var x=[];if(C.id!=="]")for(;;){var _=w(0);if(C.id===".."){var ce={type:"binary",value:"..",position:C.position,lhs:_};D(".."),ce.rhs=w(0),_=ce}if(x.push(_),C.id!==",")break;D(",")}return D("]",!0),this.expressions=x,this.type="unary",this}),j("[",h["["],function(x){if(C.id==="]"){for(var _=x;_&&_.type==="binary"&&_.value==="[";)_=_.lhs;return _.keepArray=!0,D("]"),x}else return this.lhs=x,this.rhs=w(h["]"]),this.type="binary",D("]",!0),this}),j("^",h["^"],function(x){D("(");for(var _=[];;){var ce={descending:!1};if(C.id==="<"?D("<"):C.id===">"&&(ce.descending=!0,D(">")),ce.expression=w(0),_.push(ce),C.id!==",")break;D(",")}return D(")"),this.lhs=x,this.rhs=_,this.type="binary",this});var Q=function(x){var _=[];if(C.id!=="}")for(;;){var ce=w(0);D(":");var Ae=w(0);if(_.push([ce,Ae]),C.id!==",")break;D(",")}return D("}",!0),typeof x>"u"?(this.lhs=_,this.type="unary"):(this.lhs=x,this.rhs=_,this.type="binary"),this};ve("{",Q),j("{",h["{"],Q),se(":=",h[":="],function(x){return x.type!=="variable"?G({code:"S0212",stack:new Error().stack,position:x.position,token:x.value}):(this.lhs=x,this.rhs=w(h[":="]-1),this.type="binary",this)}),j("@",h["@"],function(x){return this.lhs=x,this.rhs=w(h["@"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),j("#",h["#"],function(x){return this.lhs=x,this.rhs=w(h["#"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),j("?",h["?"],function(x){return this.type="condition",this.condition=x,this.then=w(0),C.id===":"&&(D(":"),this.else=w(0)),this}),ve("|",function(){return this.type="transform",this.pattern=w(0),D("|"),this.update=w(0),C.id===","&&(D(","),this.delete=w(0)),D("|"),this});var ae=function(x){var _;if(x.type==="function"&&!x.predicate){var ce={type:"lambda",thunk:!0,arguments:[],position:x.position};ce.body=x,_=ce}else if(x.type==="condition")x.then=ae(x.then),typeof x.else<"u"&&(x.else=ae(x.else)),_=x;else if(x.type==="block"){var Ae=x.expressions.length;Ae>0&&(x.expressions[Ae-1]=ae(x.expressions[Ae-1])),_=x}else _=x;return _},pe=0,Se=0,Ue=[],be=function(x,_){switch(x.type){case"name":case"wildcard":_.level--,_.level===0&&(typeof x.ancestor>"u"||(Ue[_.index].slot.label=x.ancestor.label),x.ancestor=_,x.tuple=!0);break;case"parent":_.level++;break;case"block":x.expressions.length>0&&(x.tuple=!0,_=be(x.expressions[x.expressions.length-1],_));break;case"path":x.tuple=!0;var ce=x.steps.length-1;for(_=be(x.steps[ce--],_);_.level>0&&ce>=0;)_=be(x.steps[ce--],_);break;default:throw{code:"S0217",token:x.type,position:x.position}}return _},ye=function(x,_){if(typeof _.seekingParent<"u"||_.type==="parent"){var ce=typeof _.seekingParent<"u"?_.seekingParent:[];_.type==="parent"&&ce.push(_.slot),typeof x.seekingParent>"u"?x.seekingParent=ce:Array.prototype.push.apply(x.seekingParent,ce)}},We=function(x){var _=x.steps.length-1,ce=x.steps[_],Ae=typeof ce.seekingParent<"u"?ce.seekingParent:[];ce.type==="parent"&&Ae.push(ce.slot);for(var Ve=0;Ve<Ae.length;Ve++){var Le=Ae[Ve];for(_=x.steps.length-2;Le.level>0;){if(_<0){typeof x.seekingParent>"u"?x.seekingParent=[Le]:x.seekingParent.push(Le);break}for(var P=x.steps[_--];_>=0&&P.focus&&x.steps[_].focus;)P=x.steps[_--];Le=be(P,Le)}}},ie=function(x){var _;switch(x.type){case"binary":switch(x.value){case".":var ce=ie(x.lhs);ce.type==="path"?_=ce:_={type:"path",steps:[ce]},ce.type==="parent"&&(_.seekingParent=[ce.slot]);var Ae=ie(x.rhs);Ae.type==="function"&&Ae.procedure.type==="path"&&Ae.procedure.steps.length===1&&Ae.procedure.steps[0].type==="name"&&_.steps[_.steps.length-1].type==="function"&&(_.steps[_.steps.length-1].nextFunction=Ae.procedure.steps[0].value),Ae.type==="path"?Array.prototype.push.apply(_.steps,Ae.steps):(typeof Ae.predicate<"u"&&(Ae.stages=Ae.predicate,delete Ae.predicate),_.steps.push(Ae)),_.steps.filter(function(ne){if(ne.type==="number"||ne.type==="value")throw{code:"S0213",stack:new Error().stack,position:ne.position,value:ne.value};return ne.type==="string"}).forEach(function(ne){ne.type="name"}),_.steps.filter(function(ne){return ne.keepArray===!0}).length>0&&(_.keepSingletonArray=!0);var Ve=_.steps[0];Ve.type==="unary"&&Ve.value==="["&&(Ve.consarray=!0);var Le=_.steps[_.steps.length-1];Le.type==="unary"&&Le.value==="["&&(Le.consarray=!0),We(_);break;case"[":_=ie(x.lhs);var P=_,z="predicate";if(_.type==="path"&&(P=_.steps[_.steps.length-1],z="stages"),typeof P.group<"u")throw{code:"S0209",stack:new Error().stack,position:x.position};typeof P[z]>"u"&&(P[z]=[]);var L=ie(x.rhs);typeof L.seekingParent<"u"&&(L.seekingParent.forEach(ne=>{ne.level===1?be(P,ne):ne.level--}),ye(P,L)),P[z].push({type:"filter",expr:L,position:x.position});break;case"{":if(_=ie(x.lhs),typeof _.group<"u")throw{code:"S0210",stack:new Error().stack,position:x.position};_.group={lhs:x.rhs.map(function(ne){return[ie(ne[0]),ie(ne[1])]}),position:x.position};break;case"^":_=ie(x.lhs),_.type!=="path"&&(_={type:"path",steps:[_]});var J={type:"sort",position:x.position};J.terms=x.rhs.map(function(ne){var me=ie(ne.expression);return ye(J,me),{descending:ne.descending,expression:me}}),_.steps.push(J),We(_);break;case":=":_={type:"bind",value:x.value,position:x.position},_.lhs=ie(x.lhs),_.rhs=ie(x.rhs),ye(_,_.rhs);break;case"@":if(_=ie(x.lhs),P=_,_.type==="path"&&(P=_.steps[_.steps.length-1]),typeof P.stages<"u"||typeof P.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:x.position};if(P.type==="sort")throw{code:"S0216",stack:new Error().stack,position:x.position};x.keepArray&&(P.keepArray=!0),P.focus=x.rhs.value,P.tuple=!0;break;case"#":_=ie(x.lhs),P=_,_.type==="path"?P=_.steps[_.steps.length-1]:(_={type:"path",steps:[_]},typeof P.predicate<"u"&&(P.stages=P.predicate,delete P.predicate)),typeof P.stages>"u"?P.index=x.rhs.value:P.stages.push({type:"index",value:x.rhs.value,position:x.position}),P.tuple=!0;break;case"~>":_={type:"apply",value:x.value,position:x.position},_.lhs=ie(x.lhs),_.rhs=ie(x.rhs),_.keepArray=_.lhs.keepArray||_.rhs.keepArray;break;default:_={type:x.type,value:x.value,position:x.position},_.lhs=ie(x.lhs),_.rhs=ie(x.rhs),ye(_,_.lhs),ye(_,_.rhs)}break;case"unary":_={type:x.type,value:x.value,position:x.position},x.value==="["?_.expressions=x.expressions.map(function(ne){var me=ie(ne);return ye(_,me),me}):x.value==="{"?_.lhs=x.lhs.map(function(ne){var me=ie(ne[0]);ye(_,me);var Te=ie(ne[1]);return ye(_,Te),[me,Te]}):(_.expression=ie(x.expression),x.value==="-"&&_.expression.type==="number"?(_=_.expression,_.value=-_.value):ye(_,_.expression));break;case"function":case"partial":_={type:x.type,name:x.name,value:x.value,position:x.position},_.arguments=x.arguments.map(function(ne){var me=ie(ne);return ye(_,me),me}),_.procedure=ie(x.procedure);break;case"lambda":_={type:x.type,arguments:x.arguments,signature:x.signature,position:x.position};var te=ie(x.body);_.body=ae(te);break;case"condition":_={type:x.type,position:x.position},_.condition=ie(x.condition),ye(_,_.condition),_.then=ie(x.then),ye(_,_.then),typeof x.else<"u"&&(_.else=ie(x.else),ye(_,_.else));break;case"transform":_={type:x.type,position:x.position},_.pattern=ie(x.pattern),_.update=ie(x.update),typeof x.delete<"u"&&(_.delete=ie(x.delete));break;case"block":_={type:x.type,position:x.position},_.expressions=x.expressions.map(function(ne){var me=ie(ne);return ye(_,me),(me.consarray||me.type==="path"&&me.steps[0].consarray)&&(_.consarray=!0),me});break;case"name":_={type:"path",steps:[x]},x.keepArray&&(_.keepSingletonArray=!0);break;case"parent":_={type:"parent",slot:{label:"!"+pe++,level:1,index:Se++}},Ue.push(_);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":_=x;break;case"operator":if(x.value==="and"||x.value==="or"||x.value==="in")x.type="name",_=ie(x);else if(x.value==="?")_=x;else throw{code:"S0201",stack:new Error().stack,position:x.position,token:x.value};break;case"error":_=x,x.lhs&&(_=ie(x.lhs));break;default:var Z="S0206";x.id==="(end)"&&(Z="S0207");var B={code:Z,position:x.position,token:x.value};if(y)return W.push(B),{type:"error",error:B};throw B.stack=new Error().stack,B}return x.keepArray&&(_.keepArray=!0),_};M=b(S),D();var Ee=w(0);if(C.id!=="(end)"){var Pe={code:"S0201",position:C.position,token:C.value};G(Pe)}if(Ee=ie(Ee),Ee.type==="parent"||typeof Ee.seekingParent<"u")throw{code:"S0217",token:Ee.type,position:Ee.position};return W.length>0&&(Ee.errors=W),Ee};return I})();i.exports=a},{"./signature":5}],5:[function(n,i,s){var o=n("./utils");const a=(()=>{var h={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function v(b){for(var I=1,S=[],y={},C=y;I<b.length;){var M=b.charAt(I);if(M===":")break;var $=function(){S.push(y),C=y,y={}},W=function(j,se,ve,Q){for(var ae=1,pe=se;pe<j.length;)if(pe++,M=j.charAt(pe),M===Q){if(ae--,ae===0)break}else M===ve&&ae++;return pe};switch(M){case"s":case"n":case"b":case"l":case"o":y.regex="["+M+"m]",y.type=M,$();break;case"a":y.regex="[asnblfom]",y.type=M,y.array=!0,$();break;case"f":y.regex="f",y.type=M,$();break;case"j":y.regex="[asnblom]",y.type=M,$();break;case"x":y.regex="[asnblfom]",y.type=M,$();break;case"-":C.context=!0,C.contextRegex=new RegExp(C.regex),C.regex+="?";break;case"?":case"+":C.regex+=M;break;case"(":var re=W(b,I,"(",")"),U=b.substring(I+1,re);if(U.indexOf("<")===-1)y.regex="["+U+"m]";else throw{code:"S0402",stack:new Error().stack,value:U,offset:I};y.type="("+U+")",I=re,$();break;case"<":if(C.type==="a"||C.type==="f"){var R=W(b,I,"<",">");C.subtype=b.substring(I+1,R),I=R}else throw{code:"S0401",stack:new Error().stack,value:C.type,offset:I};break}I++}var G="^"+S.map(function(j){return"("+j.regex+")"}).join("")+"$",D=new RegExp(G),w=function(j){var se;if(o.isFunction(j))se="f";else{var ve=typeof j;switch(ve){case"string":se="s";break;case"number":se="n";break;case"boolean":se="b";break;case"object":j===null?se="l":Array.isArray(j)?se="a":se="o";break;case"undefined":default:se="m"}}return se},q=function(j,se){for(var ve="^",Q=0,ae=0;ae<S.length;ae++){ve+=S[ae].regex;var pe=se.match(ve);if(pe===null)throw{code:"T0410",stack:new Error().stack,value:j[Q],index:Q+1};Q=pe[0].length}throw{code:"T0410",stack:new Error().stack,value:j[Q],index:Q+1}};return{definition:b,validate:function(j,se){var ve="";j.forEach(function(Se){ve+=w(Se)});var Q=D.exec(ve);if(Q){var ae=[],pe=0;return S.forEach(function(Se,Ue){var be=j[pe],ye=Q[Ue+1];if(ye==="")if(Se.context&&Se.contextRegex){var We=w(se);if(Se.contextRegex.test(We))ae.push(se);else throw{code:"T0411",stack:new Error().stack,value:se,index:pe+1}}else ae.push(be),pe++;else ye.split("").forEach(function(ie){if(Se.type==="a"){if(ie==="m")be=void 0;else{be=j[pe];var Ee=!0;if(typeof Se.subtype<"u"){if(ie!=="a"&&ye!==Se.subtype)Ee=!1;else if(ie==="a"&&be.length>0){var Pe=w(be[0]);if(Pe!==Se.subtype.charAt(0))Ee=!1;else{var x=be.filter(function(_){return w(_)!==Pe});Ee=x.length===0}}}if(!Ee)throw{code:"T0412",stack:new Error().stack,value:be,index:pe+1,type:h[Se.subtype]};ie!=="a"&&(be=[be])}ae.push(be),pe++}else ae.push(be),pe++})}),ae}q(j,ve)}}}return v})();i.exports=a},{"./utils":6}],6:[function(n,i,s){const o=(()=>{function a(R){var G=!1;if(typeof R=="number"&&(G=!isNaN(R),G&&!isFinite(R)))throw{code:"D1001",value:R,stack:new Error().stack};return G}function h(R){var G=!1;return Array.isArray(R)&&(G=R.filter(function(D){return typeof D!="string"}).length===0),G}function v(R){var G=!1;return Array.isArray(R)&&(G=R.filter(function(D){return!a(D)}).length===0),G}function b(){var R=[];return R.sequence=!0,arguments.length===1&&R.push(arguments[0]),R}function I(R){return R.sequence===!0&&Array.isArray(R)}function S(R){return R&&(R._jsonata_function===!0||R._jsonata_lambda===!0)||typeof R=="function"}function y(R){var G=typeof R.arity=="number"?R.arity:typeof R.implementation=="function"?R.implementation.length:typeof R.length=="number"?R.length:R.arguments.length;return G}function C(R){return R&&R._jsonata_lambda===!0}var M=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function $(R){return typeof R=="object"&&R!==null&&M in R&&"next"in R&&typeof R.next=="function"}function W(R,G){if(R===G)return!0;if(typeof R=="object"&&typeof G=="object"&&R!==null&&G!==null){if(Array.isArray(R)&&Array.isArray(G)){if(R.length!==G.length)return!1;for(var D=0;D<R.length;D++)if(!W(R[D],G[D]))return!1;return!0}var w=Object.getOwnPropertyNames(R),q=Object.getOwnPropertyNames(G);if(w.length!==q.length)return!1;for(w=w.sort(),q=q.sort(),D=0;D<w.length;D++)if(w[D]!==q[D])return!1;for(D=0;D<w.length;D++){var j=w[D];if(!W(R[j],G[j]))return!1}return!0}return!1}function re(R){return typeof R=="object"&&R!==null&&"then"in R&&typeof R.then=="function"}function U(R){var G=[];for(let D of R)G.push(D);return G}return{isNumeric:a,isArrayOfStrings:h,isArrayOfNumbers:v,createSequence:b,isSequence:I,isFunction:S,isLambda:C,isIterable:$,getFunctionArity:y,isDeepEqual:W,stringToArray:U,isPromise:re}})();i.exports=o},{}]},{},[3])(3)})}(Ei)),Ei.exports}var ru=nu();const Fa=ji(ru);var un={exports:{}};const Jr=oo(lo),iu="16.5.0",su={version:iu};var Vs;function au(){if(Vs)return un.exports;Vs=1;var t={};const e=Jr,n=Jr,i=Jr,s=Jr,a=su.version,h=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function v(w){const q={};let j=w.toString();j=j.replace(/\r\n?/mg,`
`);let se;for(;(se=h.exec(j))!=null;){const ve=se[1];let Q=se[2]||"";Q=Q.trim();const ae=Q[0];Q=Q.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),ae==='"'&&(Q=Q.replace(/\\n/g,`
`),Q=Q.replace(/\\r/g,"\r")),q[ve]=Q}return q}function b(w){const q=M(w),j=D.configDotenv({path:q});if(!j.parsed){const ae=new Error(`MISSING_DATA: Cannot parse ${q} for an unknown reason`);throw ae.code="MISSING_DATA",ae}const se=y(w).split(","),ve=se.length;let Q;for(let ae=0;ae<ve;ae++)try{const pe=se[ae].trim(),Se=C(j,pe);Q=D.decrypt(Se.ciphertext,Se.key);break}catch(pe){if(ae+1>=ve)throw pe}return D.parse(Q)}function I(w){console.log(`[dotenv@${a}][WARN] ${w}`)}function S(w){console.log(`[dotenv@${a}][DEBUG] ${w}`)}function y(w){return w&&w.DOTENV_KEY&&w.DOTENV_KEY.length>0?w.DOTENV_KEY:t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:""}function C(w,q){let j;try{j=new URL(q)}catch(pe){if(pe.code==="ERR_INVALID_URL"){const Se=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw Se.code="INVALID_DOTENV_KEY",Se}throw pe}const se=j.password;if(!se){const pe=new Error("INVALID_DOTENV_KEY: Missing key part");throw pe.code="INVALID_DOTENV_KEY",pe}const ve=j.searchParams.get("environment");if(!ve){const pe=new Error("INVALID_DOTENV_KEY: Missing environment part");throw pe.code="INVALID_DOTENV_KEY",pe}const Q=`DOTENV_VAULT_${ve.toUpperCase()}`,ae=w.parsed[Q];if(!ae){const pe=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${Q} in your .env.vault file.`);throw pe.code="NOT_FOUND_DOTENV_ENVIRONMENT",pe}return{ciphertext:ae,key:se}}function M(w){let q=null;if(w&&w.path&&w.path.length>0)if(Array.isArray(w.path))for(const j of w.path)e.existsSync(j)&&(q=j.endsWith(".vault")?j:`${j}.vault`);else q=w.path.endsWith(".vault")?w.path:`${w.path}.vault`;else q=n.resolve(process.cwd(),".env.vault");return e.existsSync(q)?q:null}function $(w){return w[0]==="~"?n.join(i.homedir(),w.slice(1)):w}function W(w){!!(w&&w.debug)&&S("Loading env from encrypted .env.vault");const j=D._parseVault(w);let se=t;return w&&w.processEnv!=null&&(se=w.processEnv),D.populate(se,j,w),{parsed:j}}function re(w){const q=n.resolve(process.cwd(),".env");let j="utf8";const se=!!(w&&w.debug);w&&w.encoding?j=w.encoding:se&&S("No encoding is specified. UTF-8 is used by default");let ve=[q];if(w&&w.path)if(!Array.isArray(w.path))ve=[$(w.path)];else{ve=[];for(const Se of w.path)ve.push($(Se))}let Q;const ae={};for(const Se of ve)try{const Ue=D.parse(e.readFileSync(Se,{encoding:j}));D.populate(ae,Ue,w)}catch(Ue){se&&S(`Failed to load ${Se} ${Ue.message}`),Q=Ue}let pe=t;return w&&w.processEnv!=null&&(pe=w.processEnv),D.populate(pe,ae,w),Q?{parsed:ae,error:Q}:{parsed:ae}}function U(w){if(y(w).length===0)return D.configDotenv(w);const q=M(w);return q?D._configVault(w):(I(`You set DOTENV_KEY but you are missing a .env.vault file at ${q}. Did you forget to build it?`),D.configDotenv(w))}function R(w,q){const j=Buffer.from(q.slice(-64),"hex");let se=Buffer.from(w,"base64");const ve=se.subarray(0,12),Q=se.subarray(-16);se=se.subarray(12,-16);try{const ae=s.createDecipheriv("aes-256-gcm",j,ve);return ae.setAuthTag(Q),`${ae.update(se)}${ae.final()}`}catch(ae){const pe=ae instanceof RangeError,Se=ae.message==="Invalid key length",Ue=ae.message==="Unsupported state or unable to authenticate data";if(pe||Se){const be=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw be.code="INVALID_DOTENV_KEY",be}else if(Ue){const be=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw be.code="DECRYPTION_FAILED",be}else throw ae}}function G(w,q,j={}){const se=!!(j&&j.debug),ve=!!(j&&j.override);if(typeof q!="object"){const Q=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw Q.code="OBJECT_REQUIRED",Q}for(const Q of Object.keys(q))Object.prototype.hasOwnProperty.call(w,Q)?(ve===!0&&(w[Q]=q[Q]),se&&S(ve===!0?`"${Q}" is already defined and WAS overwritten`:`"${Q}" is already defined and was NOT overwritten`)):w[Q]=q[Q]}const D={configDotenv:re,_configVault:W,_parseVault:b,config:U,decrypt:R,parse:v,populate:G};return un.exports.configDotenv=D.configDotenv,un.exports._configVault=D._configVault,un.exports._parseVault=D._parseVault,un.exports.config=D.config,un.exports.decrypt=D.decrypt,un.exports.parse=D.parse,un.exports.populate=D.populate,un.exports=D,un.exports}var ou=au();const ps=async t=>{const n=await(await Dt.getWorkspace()).getResource(t);return n||Xe("Invalid URL: "+t),await n.getContents({uri:!0})},qa=t=>t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:"),ds={},li=async(t,e)=>{const n=await Fa(`[**[${e}!='']]`).evaluate(t);for(const i of n){const s=i[e];if(qa(s))continue;const o=await ps(s);ds[o]=i[e],i[e]=o}},Ar=t=>ds[t],zi=async(t,e)=>{const n=await Fa(`[**[${e}!='']]`).evaluate(t);for(const i of n){const s=i[e];!s||!s.startsWith("blob:")||(i[e]=ds[s])}},za=t=>{var n;it.registerContribution("catalog.root",{label:t.label,icon:t.icon,contributionId:t.contributionId});const e=t.contributionId??t.label;(n=t.items)==null||n.forEach(i=>{it.registerContribution(e,{label:i.label,icon:i.icon,contributionId:i.contributionId});const o=import.meta.resolve("/.");i.items.forEach(a=>{var v;const h={label:a.label,icon:a.icon,state:{...a.state}};(v=h.state)!=null&&v.url&&(h.state.url=h.state.url.replace("${baseURL}/",o)),it.registerContribution(i.contributionId,h)})})},Ui=t=>{Object.entries(t).forEach(([e,n])=>{const i=/\${([a-zA-Z0-9_]+)}/g;t[e]=n.replace(i,(s,o)=>{const a=t[o];return a!==void 0?a:s})})},Ua=async(...t)=>{const e=await Dt.getWorkspace(),n={};for(const i of t){const s=await(e==null?void 0:e.getResource(i));if(!s)continue;const o=await s.getContents(),a=ou.parse(o||"");Ui(a),Object.assign(n,a)}return Ui(n),n},lu=Object.freeze(Object.defineProperty({__proto__:null,getOriginalUri:Ar,isAbsoluteResource:qa,loadEnvs:Ua,registerCatalog:za,replaceUris:li,replaceVars:Ui,revertBlobUris:zi,toBlobUri:ps},Symbol.toStringTag,{value:"Module"}));co.resolveUrl=t=>ps(t);Tn.registerEditorInputHandler({canHandle:t=>t instanceof ar&&t.getName().endsWith(".geospace"),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return e.widgetFactory=n=>V`
            <gs-map id="${n}" .input="${e}"></gs-map>`,e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cu=Js(class extends Zs{constructor(){super(...arguments),this.key=Lt}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(Qs(t),this.key=e),n}});function tr(t,e){return t.layers.find(n=>n.uuid===e)}function nr(t,e){return t.layers.findIndex(n=>n.uuid===e)}function uu(t,e){return t.controls.findIndex(n=>n.uuid===e)}function pu(t,e){return t.overlays.findIndex(n=>n.uuid===e)}const du=t=>new Proxy({},{get:(e,n)=>async(...i)=>{for(const s of t)await s[n](...i)}});var Ht=(t=>(t[t.LOADED=0]="LOADED",t[t.LAYER_ADDED=1]="LAYER_ADDED",t[t.LAYER_DELETED=2]="LAYER_DELETED",t[t.LAYER_UPDATED=3]="LAYER_UPDATED",t[t.FEATURE_SELECTED=4]="FEATURE_SELECTED",t))(Ht||{});const dn=Wn(Zo),hu=`:root,
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
`,fu="iframe-map-renderer.html";class mu{constructor(e,n){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=n,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(n,i){return async(...s)=>await e.sendMessage(i,{...s})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=fu,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}getViewExtent(){return[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(e){this.onSyncCallback&&this.onSyncCallback(e)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,n){try{const{toBlobUri:i}=await ft(async()=>{const{toBlobUri:o}=await Promise.resolve().then(()=>lu);return{toBlobUri:o}},void 0),s=await i(n);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:s},"*")}catch(i){this.iframe.contentWindow.postMessage({id:e,success:!1,error:i instanceof Error?i.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{var h,v,b,I;if(e.source!==((h=this.iframe)==null?void 0:h.contentWindow))return;const{id:n,result:i,error:s,type:o,event:a}=e.data;if(n!==void 0&&this.pendingMessages.has(n)){const{resolve:S,reject:y}=this.pendingMessages.get(n);this.pendingMessages.delete(n),s?y(new Error(s)):S(i)}o==="dirty"?(v=this.onDirtyCallback)==null||v.call(this):o==="sync"?(b=this.onSyncCallback)==null||b.call(this,a):o==="iframeClicked"?(I=this.onClickCallback)==null||I.call(this):o==="resolveAsset"&&this.handleAssetResolution(n,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const n=i=>{var s;i.source===((s=this.iframe)==null?void 0:s.contentWindow)&&i.data.type==="rendererReady"&&(window.removeEventListener("message",n),e())};window.addEventListener("message",n)})}async sendMessage(e,n){if(!this.iframe)throw new Error("Iframe not initialized");const i=++this.messageId;return new Promise((s,o)=>{this.pendingMessages.set(i,{resolve:s,reject:o}),this.iframe.contentWindow.postMessage({id:i,method:e,params:n},"*"),setTimeout(()=>{this.pendingMessages.has(i)&&(this.pendingMessages.delete(i),o(new Error("Message timeout")))},5e3)})}}class gu{constructor(e,n){this.gsMap=e,this.renderer=n}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,n){n?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){const n=nr(this.gsMap,e);n>=0&&(this.gsMap.layers.splice(n,1),this.triggerDirty())}async renameLayer(e,n){const i=tr(this.gsMap,e);i&&(i.name=n,this.triggerDirty())}async moveLayer(e,n){const i=nr(this.gsMap,e);if(i<0)return;let s;if(n){if(s=nr(this.gsMap,n),s<0||i===s)return}else s=i>0?i-1:i+1;if(s>=0&&s<this.gsMap.layers.length&&i!==s){const[o]=this.gsMap.layers.splice(i,1);this.gsMap.layers.splice(s,0,o),this.triggerDirty()}}async setLayerVisible(e,n){const i=tr(this.gsMap,e);i&&(i.visible=n,this.triggerDirty())}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){const n=uu(this.gsMap,e);n>=0&&(this.gsMap.controls.splice(n,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(e,n){this.gsMap.overlays.push({src:e,position:n||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){const n=pu(this.gsMap,e);n>=0&&(this.gsMap.overlays.splice(n,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(e,n){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class vu{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,n){dn.set({part:this.source,event:Ht.LAYER_ADDED})}async deleteLayer(e){dn.set({part:this.source,event:Ht.LAYER_DELETED})}async renameLayer(e,n){dn.set({part:this.source,event:Ht.LAYER_UPDATED})}async moveLayer(e,n){dn.set({part:this.source,event:Ht.LAYER_UPDATED})}async setLayerVisible(e,n){}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,n){}async removeOverlay(e){}async enableDrawing(e,n){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){dn.set({part:this.source,event:Ht.LAYER_UPDATED})}}var yu=Object.defineProperty,bu=Object.getOwnPropertyDescriptor,jr=(t,e,n,i)=>{for(var s=i>1?void 0:i?bu(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&yu(e,n,s),s};const wu=Dr("GsMapEditor");let xt=class extends _t{constructor(){super(),this.mapContainer=Un(),this.isFirstConnection=!0,this.interactionMode="none",this.chatContext={history:[]},this.commandStack=new la}getOperations(){return this.operations}onMapChanged({part:t,event:e}){t===this&&(e===Ht.LAYER_ADDED||e===Ht.LAYER_DELETED||e===Ht.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const t=this.getGsMap(),e=(t==null?void 0:t.layers.filter(i=>{var a;const s=i.type===bs.VECTOR,o=((a=i.source)==null?void 0:a.type)===sn.Features;return s&&o}))||[],n=this.activeDrawingLayerUuid!==void 0;return V`
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
            
            ${Kt(e.length>0,()=>{const i=e.map(s=>`${s.uuid}:${s.name}`).join("|");return V`
                ${cu(i,V`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${s=>{var a;const o=s.target.value||void 0;this.activeDrawingLayerUuid=o,(o===void 0||s.target.value==="")&&((a=this.operations)==null||a.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${e.map(s=>V`
                            <wa-option value="${s.uuid}">${s.name||"Layer"}</wa-option>
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
        `}async connectedCallback(){var t;if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}(t=this.renderer)!=null&&t.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Fe.set(this)}))}async doInitUI(){var h,v,b;const t=(h=this.input)==null?void 0:h.data,e=await Ua(".env","envs/.env","env","envs/env","default.env","envs/default.env","dev.env","envs/dev.env");e.BUILD_TIME=new Date;const n=await t.getContents();let i=n&&n.trim()?JSON.parse(n):ea;i=this.migrateGsMap(i),ws(i),await li(i,"url"),await li(i,"src"),this.gsMap=i,i.view&&(this.initialView={center:[...i.view.center],zoom:i.view.zoom}),this.renderer=new mu(i,e);const s=this.renderer.getOperations(),o=new gu(i,this.renderer),a=new vu(this);this.operations=du([o,s,a]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(I=>{var S;if(this.gsMap){switch(I.type){case"viewChanged":this.gsMap.view.center=I.view.center,this.gsMap.view.zoom=I.view.zoom,I.view.rotation!==void 0&&I.view.rotation!==0&&(this.gsMap.view.rotation=I.view.rotation);break;case"featuresChanged":const y=tr(this.gsMap,I.layerUuid);y&&((S=y.source)==null?void 0:S.type)===sn.Features&&(y.source.features=I.features);break;case"featureSelected":const C={feature:I.feature,layerUuid:I.layerUuid,metrics:I.metrics};console.info("Feature metrics:",C.metrics),dn.set({part:this,event:Ht.FEATURE_SELECTED,payload:C});break;case"featureDeselected":console.info("Feature deselected"),dn.set({part:this,event:Ht.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),(b=(v=this.renderer).setOnClick)==null||b.call(v,()=>{Fe.set(this)}),this.updateToolbar(),dn.set({part:this,event:Ht.LOADED})}catch(I){console.error("Failed to render map:",I),Xe(`Failed to render map: ${I.message}`)}}migrateGsMap(t){const e={...t};let n=!1;return t.view||(console.log("Creating view field and migrating old properties..."),n=!0,e.view={},t.center!==void 0&&(e.view.center=t.center,delete e.center),t.zoom!==void 0&&(e.view.zoom=t.zoom,delete e.zoom),t.projection!==void 0&&(e.view.projection=t.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857")),(!t.styles||Object.keys(t.styles).length===0)&&(console.log("Adding default styles to map..."),n=!0,e.styles={...po}),(!t.styleRules||t.styleRules.length===0)&&(console.log("Adding default style rules to map..."),n=!0,e.styleRules=[...ho]),n&&console.log("Map migration completed"),e}getGsMap(){return this.gsMap}async save(){var t;if(!this.renderer){Xe("Map not initialized");return}try{if(!this.gsMap){Xe("Map not initialized");return}const e=JSON.parse(JSON.stringify(this.gsMap));await zi(e,"url"),await zi(e,"src"),(t=this.input)==null||t.data.saveContents(JSON.stringify(e,null,2)),this.markDirty(!1)}catch(e){Xe(`Save failed: ${e.message}`)}}get mapOperations(){return this.operations}edit(){zt("not yet implemented")}async refresh(){if(!this.renderer){wu.error("Map not initialized");return}await this.renderer.modelToUI()}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){var t;this.activeDrawingLayerUuid&&(await((t=this.operations)==null?void 0:t.enableDrawing("Point",this.activeDrawingLayerUuid)),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){var t;this.activeDrawingLayerUuid&&(await((t=this.operations)==null?void 0:t.enableDrawing("LineString",this.activeDrawingLayerUuid)),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){var t;this.activeDrawingLayerUuid&&(await((t=this.operations)==null?void 0:t.enableDrawing("Polygon",this.activeDrawingLayerUuid)),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){var t;await((t=this.operations)==null?void 0:t.enableFeatureSelection()),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){var t;if(this.interactionMode==="select")try{await((t=this.operations)==null?void 0:t.deleteSelectedFeatures()),zt("Selected features deleted")}catch(e){Xe(e.message)}}async handleCreateDrawingLayer(){var i,s;if(!this.gsMap){Xe("Map not initialized");return}const t=await Mr("Enter name for new drawing layer:","Drawing Layer");if(!t)return;const e=ws({name:t,type:bs.VECTOR,source:{type:sn.Features,features:[]},visible:!0});await((i=this.operations)==null?void 0:i.addLayer(e,!1));const n=(s=this.gsMap)==null?void 0:s.layers.find(o=>o.uuid===e.uuid);n!=null&&n.uuid&&(this.activeDrawingLayerUuid=n.uuid),await this.updateComplete,this.updateToolbar(),zt(`Created drawing layer: ${t}`)}doClose(){var t;(t=this.renderer)==null||t.destroy(),this.renderer=void 0,this.input=void 0}render(){return V`
            <div class="gc-map-container" ${jn(this.mapContainer)}>
            </div>
        `}};xt.styles=[uo(hu),Rt`
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
    `];jr([Me({attribute:!1})],xt.prototype,"input",2);jr([Me({type:String})],xt.prototype,"activeDrawingLayerUuid",2);jr([Me({type:String})],xt.prototype,"interactionMode",2);jr([mi(dn)],xt.prototype,"onMapChanged",1);xt=jr([mt("gs-map")],xt);var Iu=Object.defineProperty,xu=Object.getOwnPropertyDescriptor,bi=(t,e,n,i)=>{for(var s=i>1?void 0:i?xu(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Iu(e,n,s),s};let ur=class extends _t{onPartChanged(t){t==this||t==this.mapEditor||!(t instanceof xt)||(this.mapEditor=t,this.updateLater())}onMapChanged({part:t}){t==this.mapEditor&&this.updateLater()}toggleVisible(t){var o,a;const e=this.mapEditor.getGsMap(),n=tr(e,t);if(!n)return;const s=!(n.visible!==!1);(a=(o=this.mapEditor)==null?void 0:o.mapOperations)==null||a.setLayerVisible(t,s),this.updateLater()}async confirmAction(t,e){await pr(t)&&e()}selectLayer(t){this.selectedLayerUuid=t,this.updateToolbar(),this.updateContextMenu()}renameLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const n=this.mapEditor.getGsMap();if(!tr(n,e))return;const s=nr(n,e),o=Oe.createExecutionContext(this,{index:s+1});o.activeEditor=this.mapEditor,Oe.execute("rename_layer",o)}deleteLayer(t){if(!this.mapEditor)return;const e=t||this.selectedLayerUuid;if(!e)return;const n=this.mapEditor.getGsMap(),i=tr(n,e);i&&this.confirmAction(`Delete layer "${i.name||"Layer"}"?`,()=>this.withRefresh(()=>{var s,o;return(o=(s=this.mapEditor)==null?void 0:s.mapOperations)==null?void 0:o.deleteLayer(e)}))}moveLayerUp(t){var s;if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const n=nr(e,t);if(n<=0)return;const i=(s=e.layers[n-1])==null?void 0:s.uuid;i&&(this.withRefresh(()=>{var o,a;return(a=(o=this.mapEditor)==null?void 0:o.mapOperations)==null?void 0:a.moveLayer(t,i)}),this.selectedLayerUuid=i)}moveLayerDown(t){var s;if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const n=nr(e,t);if(n<0||n>=e.layers.length-1)return;const i=(s=e.layers[n+1])==null?void 0:s.uuid;i&&(this.withRefresh(()=>{var o,a;return(a=(o=this.mapEditor)==null?void 0:o.mapOperations)==null?void 0:a.moveLayer(t,i)}),this.selectedLayerUuid=i)}renderToolbar(){const t=this.selectedLayerUuid!==void 0;return V`
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
        `}renderContextMenu(){const t=this.selectedLayerUuid!==void 0;return V`
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
        `}render(){return Kt(!this.mapEditor,()=>V`
                    <k-no-content message="Select a map."></k-no-content>`,()=>{var t,e,n,i,s,o,a,h;return V`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${(t=this.mapEditor.getGsMap())==null?void 0:t.layers.map((v,b)=>V`
                            <wa-tree-item @click="${()=>v.uuid&&this.selectLayer(v.uuid)}" 
                                          class="${this.selectedLayerUuid===v.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${v.name??`Layer ${b+1}`}${b==0?V`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-action size="small"
                                                  icon="${v.visible!==!1?"eye":"eye-slash"}"
                                                  title="${v.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>v.uuid&&this.toggleVisible(v.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${b===0}"
                                                  .action=${()=>v.uuid&&this.moveLayerUp(v.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${b===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>v.uuid&&this.moveLayerDown(v.uuid)}>
                                        </k-action>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${(n=(e=this.mapEditor)==null?void 0:e.getGsMap())==null?void 0:n.controls.map(v=>V`
                            <wa-tree-item>
                                <span>${Ar(v.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{v.uuid&&this.confirmAction(`Delete control "${Ar(v.src)}"?`,()=>this.withRefresh(()=>{var b,I;return(I=(b=this.mapEditor)==null?void 0:b.mapOperations)==null?void 0:I.removeControl(v.uuid)}))}}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${(s=(i=this.mapEditor)==null?void 0:i.getGsMap())==null?void 0:s.overlays.map(v=>V`
                            <wa-tree-item>
                                <span>${Ar(v.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{v.uuid&&this.confirmAction(`Delete overlay "${Ar(v.src)}"?`,()=>this.withRefresh(()=>{var b,I;return(I=(b=this.mapEditor)==null?void 0:b.mapOperations)==null?void 0:I.removeOverlay(v.uuid)}))}}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="highlighter"></k-icon> Styles
                        <wa-tree-item>
                            <span>Defined Styles: ${Object.keys(((o=this.mapEditor.getGsMap())==null?void 0:o.styles)||{}).length}</span>
                        </wa-tree-item>
                        <wa-tree-item>
                            <span>Style Rules: ${((h=(a=this.mapEditor.getGsMap())==null?void 0:a.styleRules)==null?void 0:h.length)||0}</span>
                        </wa-tree-item>
                    </wa-tree-item>
                </wa-tree>
            `})}};ur.styles=Rt`
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
    `;bi([dt()],ur.prototype,"selectedLayerUuid",2);bi([mi(Fe)],ur.prototype,"onPartChanged",1);bi([mi(dn)],ur.prototype,"onMapChanged",1);ur=bi([mt("gs-map-props")],ur);var ku=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,ja=(t,e,n,i)=>{for(var s=i>1?void 0:i?Su(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&ku(e,n,s),s};const Cu="catalog.root";let On=class extends _t{constructor(){super(...arguments),this.treeRef=Un()}doBeforeUI(){const t=it.getContributions(Cu);this.rootNodes=this.toTreeNodes(t)}renderToolbar(){const t=Fe.get()instanceof On&&jt.get()!==void 0;return V`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!t} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(t){return t.map(e=>{const n={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const i=it.getContributions(e.contributionId);n.leaf=i.length===0,n.children=this.toTreeNodes(i)}return n})}onItemDblClicked(t){const e=t.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(t){const e=t.detail.selection[0].model;jt.set(e.data)}setAllExpanded(t){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(n=>{n.expanded=t})}refresh(){this.requestUpdate()}createTreeItems(t,e=!1){var n;return t?V`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${t} ?expanded=${e}>
                <span><k-icon name="${t.icon}"></k-icon> ${t.label}</span>
                ${(n=t.children)==null?void 0:n.map(i=>this.createTreeItems(i))}
            </wa-tree-item>`:V``}render(){var t;return V`
            <wa-tree ${jn(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${(t=this.rootNodes)==null?void 0:t.map(e=>this.createTreeItems(e,!0))}
            </wa-tree>
        `}};On.styles=Rt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;ja([dt()],On.prototype,"rootNodes",2);On=ja([mt("gs-catalog")],On);const Au="geo!space catalog",_u="earth",Eu="catalog.root.geospace",Ou=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],Tu={label:Au,icon:_u,contributionId:Eu,items:Ou};pt({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async t=>{let e=t.params&&t.params.url;if(!e){const i=jt.get();if(!i||!("url"in i))return;e=i.url}const n=await Dt.getWorkspace();if(!n){Xe("No workspace selected.");return}fetch(e,{method:"GET"}).then(i=>i.blob()).then(i=>{const s=new URL(e).pathname.split("/"),o=s[s.length-1];return n.getResource(o,{create:!0}).then(a=>a.saveContents(i,{contentType:La.BINARY}).then(()=>{zt("File checked out: "+o)}))}).catch(i=>{Xe(i)})}}});pt({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async t=>{const e=Fe.get();e instanceof On&&e.refresh()}}});pt({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Fe.get();e instanceof On&&e.setAllExpanded(!0)}}});pt({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Fe.get();e instanceof On&&e.setAllExpanded(!1)}}});za(Tu);const Pu=Dr("GsCommandHandlers"),kn=t=>t.activeEditor instanceof xt,Kn=t=>{const e=t.activeEditor;if(!(e instanceof xt)||!e.getOperations())throw Pu.error("GsMapEditor with renderer not available in context.source"),new Error("GsMapEditor with renderer not available in context.source");return e.getOperations()};Oe.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level, an interger between 0 and 12",required:!0}]},handler:{canExecute:kn,execute:async t=>{await Kn(t).setZoom(Number(t.params.zoom).valueOf())}}});Oe.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[]},handler:{canExecute:t=>Fe.get()instanceof xt,execute:async t=>{var i;const e=Fe.get(),n=e.getGsMap();if(((i=n==null?void 0:n.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(n.view.zoom+1))}}}});Oe.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[]},handler:{canExecute:t=>Fe.get()instanceof xt,execute:async t=>{var i;const e=Fe.get(),n=e.getGsMap();if(((i=n==null?void 0:n.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(n.view.zoom-1))}}}});Oe.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the map",required:!0},{name:"lon",description:"the longitude of the map",required:!0}]},handler:{canExecute:kn,execute:async t=>{const e=Kn(t),n=fo([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]);await e.setCenter([n[0],n[1]])}}});Oe.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(sn).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:kn,execute:async t=>{var v;const e=Kn(t),n=(v=t.params.source)==null?void 0:v.trim().toLowerCase(),i=t.params.url,s=mo(n),o=(t==null?void 0:t.params)&&t.params.basemap==!0;let a;i&&(a=i.split("/").pop()),!a&&s&&(a=s);const h=Is({name:a,type:go(n),source:Is({type:s,url:i??vo(s)})});await li(h,"url"),await e.addLayer(h,o)}}});Oe.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:kn,execute:async t=>{const e=Kn(t),i=t.activeEditor.getGsMap(),s=parseInt(t.params.index)-1;if(s<0||!i||s>=i.layers.length)return;const o=i.layers[s];o!=null&&o.uuid&&await e.deleteLayer(o.uuid)}}});Oe.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:kn,execute:async t=>{var v;const e=Kn(t),i=t.activeEditor.getGsMap(),s=parseInt(t.params.index)-1;if(s<0||!i||s>=i.layers.length)return;const o=i.layers[s];if(!(o!=null&&o.uuid))return;const a=o.name||`Layer ${s+1}`,h=((v=t.params)==null?void 0:v.newName)||await Mr(`Enter new name for "${a}":`,a);!h||h===a||await e.renameLayer(o.uuid,h)}}});Oe.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:kn,execute:async t=>{var i;const e=t.source,n=(i=t.params)==null?void 0:i.mode;await e.switchColorMode(n)}}});Oe.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:kn,execute:async t=>{const e=Kn(t),n=t.params.src,i=t.params.position;await e.addOverlayFromModule(n,i)}}});Oe.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:kn,execute:async t=>{const e=Kn(t),n=t.params.src;await e.addControlFromModule(n)}}});Oe.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates",type:"number[]"}]},handler:{canExecute:kn,execute:async t=>{const e=t.params.latlon,i=t.source.renderer.getViewExtent();if(!i)throw new Error("Failed to get view extent");let s=i;if(e||e===void 0){const{transformExtent:o}=await ft(async()=>{const{transformExtent:a}=await import("./index-G4cLbRFh.js").then(h=>h.ad);return{transformExtent:a}},__vite__mapDeps([1,2]));s=o(i,"EPSG:3857","EPSG:4326"),[s[0],s[1]]=[s[1],s[0]],[s[2],s[3]]=[s[3],s[2]]}t.viewExtent=s}}});Oe.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:t=>Fe.get()instanceof xt,execute:async t=>{const e=Fe.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});Oe.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:t=>Fe.get()instanceof xt,execute:async t=>{const e=Fe.get();e instanceof xt&&await e.refresh()}}});Oe.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:t=>Fe.get()instanceof xt,execute:async t=>{const e=Fe.get();e instanceof xt&&await e.resetView()}}});Oe.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:t=>Fe.get()instanceof xt,execute:async t=>{const n=Fe.get().mapOperations;n&&await n.switchColorMode()}}});var Lu=Object.getOwnPropertyDescriptor,Ru=(t,e,n,i)=>{for(var s=i>1?void 0:i?Lu(e,n):e,o=t.length-1,a;o>=0;o--)(a=t[o])&&(s=a(s)||s);return s};let Hs=class extends ss{createRenderRoot(){return this}render(){return V`
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
                <k-toolbar id=${ka}></k-toolbar>
                <k-toolbar id=${tc}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${fr}></k-toolbar>
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
                    <k-tabs id="${er}"></k-tabs>
                    
                    <!-- Bottom Panel (terminal, output, etc.) -->
                    <k-tabs id="${Ea}"></k-tabs>
                </k-resizable-grid>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${_a}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${Sa}></k-toolbar>
                <k-toolbar id=${as}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Ca}></k-toolbar>
            </div>
        `}};Hs=Ru([mt("gs-app")],Hs);const Du=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
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
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,Ks=Dr("GeoSpaceApp"),$u={".geojson":sn.GeoJSON,".json":sn.GeoJSON,".kml":sn.KML,".gpx":sn.GPX,".tif":sn.GeoTIFF,".tiff":sn.GeoTIFF,".geotiff":sn.GeoTIFF},Ba=t=>{const e=t.getName().toLowerCase();for(const[n,i]of Object.entries($u))if(e.endsWith(n))return i;return null},Nu=t=>Ba(t)!==null,Ut={id:"geospace",name:"geo!space",version:xs,description:"A geospatial IDE for working with spatial data",metadata:{github:{owner:"erdalkaraca",repo:"geospace"}},extensions:["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage","system.pythonpackagemanager"],contributions:{ui:[{target:ka,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:Mi,name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>V`<k-filebrowser id="${t}"></k-filebrowser>`},{target:Mi,name:"catalog",label:"Catalog",icon:"book",component:t=>V`<gs-catalog id="${t}"></gs-catalog>`},{target:Aa,name:"map-props",label:"Map Properties",icon:"fg map-options",component:t=>V`<gs-map-props id="${t}"></gs-map-props>`},{target:_a,name:"assistant",label:"AI",icon:"robot",component:t=>V`<k-aiassist id="${t}"></k-aiassist>`},{target:Ea,name:"log-terminal",label:"Log",icon:"list",component:t=>V`<k-log-terminal id="${t}"></k-log-terminal>`},{target:Sa,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:Ca,label:`v${xs}`,icon:"circle-info",command:"show_version_info",showLabel:!0},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const t=jt.get();return t instanceof ar?!Nu(t):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_geospace_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>ft(()=>import("./mapbuilder-extension-I5oACGzL.js"),__vite__mapDeps([18,1,2])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>ft(()=>import("./style-editor-extension-zq3_PwMt.js"),__vite__mapDeps([19,1,2])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>ft(()=>import("./overpass-extension-B7RptiVR.js"),__vite__mapDeps([20,1,2])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>ft(()=>import("./gtfs-extension-BMrq2OZE.js"),__vite__mapDeps([21,1,2])),icon:"map-location-dot"}]},async initialize(){it.registerContribution(Ur,{label:"App Support",description:"General app support",role:"appsupport",sysPrompt:()=>{const t=Je.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,installedAndEnabled:Je.isEnabled(n.id)})),e=`***Available Extensions:***
${JSON.stringify(t,null,2)}`;return`${Du}

${e}`},canHandle:({activeEditor:t})=>t===void 0,promptDecorator:async({userPrompt:t})=>Dt.getWorkspace().then(e=>{var s;const n={workspace:e==null?void 0:e.getName(),activeEditor:(s=Tn.getEditorArea())==null?void 0:s.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(n,null,2)}`}

${t}`})}),pt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{if(Ut.version==="0.0.0"){await $i(Ut.name,`**Development Build**

${Ut.description}`,!0);return}const n=await eu();if(n.length===0){await $i(Ut.name,`**Version:** ${Ut.version}

${Ut.description}`,!0);return}const i=n.findIndex(S=>S.tag_name===Ut.version),s=i>=0?i:0;let o=s;const a=S=>{const y=n[S],C=y.tag_name===Ut.version;let M=`**Version:** ${y.tag_name}`;C&&(M+=" (Current)"),M+=`

`;const $=new Date(y.published_at).toLocaleDateString();return M+=`**Released:** ${$}

`,!C&&tu(Ut.version,y.tag_name)&&(M+=`⚠️ **Update available**

`),y.body&&(M+=`---

${y.body}`),M},h=(S,y)=>{const C=[];return C.push({label:"← Previous",variant:"default",disabled:S===n.length-1,callback:()=>{if(S<n.length-1){o=S+1;const M=a(o),$=h(o,y),W=y.updateDialog;W&&W(Ut.name,M,$)}}}),C.push({label:"Next →",variant:"default",disabled:S===0,callback:()=>{if(S>0){o=S-1;const M=a(o),$=h(o,y),W=y.updateDialog;W&&W(Ut.name,M,$)}}}),C.push({label:"Close",variant:"primary",callback:()=>{}}),C},v=a(s),b=[],I=h(s,b);b.push(...I),await Ia(Ut.name,v,b,!0)}}}),pt({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async t=>{const e=jt.get();if(!(e instanceof ar))return;const n=Ba(e);if(!n){Ks.warn(`Unsupported file type: ${e.getName()}`);return}const i=e.getWorkspacePath(),s=Oe.createExecutionContext(t.source,{source:n,url:i});await Oe.execute("add_layer",s)}}}),pt({command:{id:"create_geospace_file",name:"Create GeoSpace Map File",description:"Creates a new .geospace map file",parameters:[]},handler:{execute:async()=>{const t={...ea,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}};await Oe.execute("create_file",{params:{path:"map.geospace",contents:JSON.stringify(t,null,2),extension:".geospace",ask:!0}})}}}),Ks.info("geo!space is ready!")},render(){return V`<gs-app></gs-app>`}};vi.loadApp(Ut,document.body);export{Fi as D,ar as F,xt as G,Hn as K,_c as P,ka as T,Fe as a,lr as b,Xe as c,Qr as d,pt as e,jt as f,Ea as g,_t as h,Hl as i,tc as j,La as k,Ua as l,Be as m,Yr as n,Tn as o,yt as p,it as q,Mt as r,on as s,zt as t,Sa as u,It as v,Dt as w,hn as x,Dr as y};
