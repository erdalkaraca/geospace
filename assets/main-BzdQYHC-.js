const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B4VxoUZf.js","assets/index-CyGQFstn.css","assets/git-extension-DVHcD70s.js","assets/pyterminal-extension-lHJaJrXF.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-DVP9v3DR.js","assets/p12-splitter-DF9f0H9P.js","assets/notebook-extension-VNGvS8yl.js","assets/editor.main-C21k2IlN.js","assets/editor-D6kYW_CN.css","assets/command-palette-extension-qawgwUIZ.js","assets/download-extension-BcPy5dEp.js","assets/unzip-extension-BTgGaBD8.js","assets/md-editor-extension-DDE8BCdL.js","assets/monaco-editor-extension-BYGRxdob.js","assets/memory-usage-extension-Pu039ALX.js","assets/mapbuilder-extension-BzeoMWNz.js","assets/overpass-extension-O-tNqwLi.js","assets/gtfs-extension-86vqW3Cu.js"])))=>i.map(i=>d[i]);
var _a=Object.defineProperty;var Ca=(t,e,n)=>e in t?_a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Je=(t,e,n)=>Ca(t,typeof e!="symbol"?e+"":e,n);import{r as an,p as Ar,W as Ea,a as mn,g as Ss,u as mr,s as on,B as Oa,i as As,b as $t,x as ae,t as mt,o as Kr,c as Ta,n as nt,d as gt,e as Rn,E as Dt,f as Ln,h as Pa,j as Ra,k as La,l as Na,v as On,m as tr,M as ri,T as Da,q as $a,w as Ma,y as gn,z as Ii,A as Mt,R as Zi,D as Fa,F as Mr,C as ar,G as xi,S as _s,H as Cs,I as Qi,J as qa,_ as za,K as ja,L as At,N as Ua,O as Es,P as Ba,Q as Os,U as Ga,V as Va,X as Wa,Y as Ka,Z as wn}from"./index-B4VxoUZf.js";const Xi={debug:0,info:1,warning:2,error:3};let Ha="debug";const Un={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Fr=null;const ui=[];function nr(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class Ja{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,n){Bn(this.source,e,n)}}function Ya(t){return Xi[t]>=Xi[Ha]}function Bn(t,e,n){Ya(n)&&(Fr?Fr(t,e,n):(ui.push({source:t,message:e,level:n}),Un[n==="error"?"error":n==="warning"?"warn":n==="debug"?"debug":"log"](`[${t}] ${e}`)))}function Za(){console.log=function(...t){Un.log.apply(console,t),Bn("Console",t.map(e=>nr(e)).join(" "),"info")},console.info=function(...t){Un.info.apply(console,t),Bn("Console",t.map(e=>nr(e)).join(" "),"info")},console.warn=function(...t){Un.warn.apply(console,t),Bn("Console",t.map(e=>nr(e)).join(" "),"warning")},console.error=function(...t){Un.error.apply(console,t),Bn("Console",t.map(e=>nr(e)).join(" "),"error")},console.debug=function(...t){Un.debug.apply(console,t),Bn("Console",t.map(e=>nr(e)).join(" "),"debug")}}Za();function Qa(t){for(Fr=t;ui.length>0;){const e=ui.shift();e&&t(e.source,e.message,e.level)}}function Xa(){Fr=null}function ki(t){return new Ja(t)}const bt=ki("System");an.put("logger",bt);const _r=`${Ea}/settings.json`,Si="events/settings/changed";class eo{async checkSettings(){this.appSettings||(this.appSettings=await Ar.getObject(_r),this.appSettings||(this.appSettings={},await Ar.persistObject(_r,this.appSettings)),mn(Si,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,n){await this.checkSettings(),this.appSettings[e]=n,await Ar.persistObject(_r,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await Ar.persistObject(_r,this.appSettings)}}const Zt=new eo;an.put("appSettings",Zt);var Lr={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var to=Lr.exports,es;function no(){return es||(es=1,function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(to,function(e){var n=function(o){return new n.lib.init(o)},i="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:i,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var f in this.options.style)o.style[f]=this.options.style[f];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var x=document.createElement("img");x.src=this.options.avatar,x.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(x):o.insertAdjacentElement("afterbegin",x)}if(this.options.close===!0){var I=document.createElement("button");I.type="button",I.setAttribute("aria-label","Close"),I.className="toast-close",I.innerHTML="&#10006;",I.addEventListener("click",(function(ve){ve.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var E=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&E>360?o.insertAdjacentElement("afterbegin",I):o.appendChild(I)}if(this.options.stopOnFocus&&this.options.duration>0){var C=this;o.addEventListener("mouseover",function(ve){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){C.removeElement(o)},C.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",(function(ve){ve.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",(function(ve){ve.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var v=s("x",this.options),T=s("y",this.options),q=this.options.position=="left"?v:"-"+v,J=this.options.gravity=="toastify-top"?T:"-"+T;o.style.transform="translate("+q+","+J+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var f=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,f),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}).bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},f={top:15,bottom:15},x={top:15,bottom:15},I=document.getElementsByClassName("toastify"),E,C=0;C<I.length;C++){u(I[C],"toastify-top")===!0?E="toastify-top":E="toastify-bottom";var v=I[C].offsetHeight;E=E.substr(9,E.length-1);var T=15,q=window.innerWidth>0?window.innerWidth:screen.width;q<=360?(I[C].style[E]=x[E]+"px",x[E]+=v+T):u(I[C],"toastify-left")===!0?(I[C].style[E]=o[E]+"px",o[E]+=v+T):(I[C].style[E]=f[E]+"px",f[E]+=v+T)}return this};function s(o,f){return f.offset[o]?isNaN(f.offset[o])?f.offset[o]:f.offset[o]+"px":"0px"}function u(o,f){return!o||typeof f!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(f)>-1)}return n.lib.init.prototype=n.lib,n})}(Lr)),Lr.exports}var ro=no();const Ai=Ss(ro),sn=t=>{console.info("[TOAST] INFO: ",t),Ai({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},tt=t=>{console.error("[TOAST] ERROR: ",t),Ai({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},io=t=>{console.warn("[TOAST] WARNING: ",t),Ai({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};mr.put("toastInfo",sn);mr.put("toastError",tt);mr.put("toastWarning",io);var so=Object.defineProperty,ao=(t,e,n)=>e in t?so(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ii=(t,e,n)=>(ao(t,typeof e!="symbol"?e+"":e,n),n),oo=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},si=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Cr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},ts=(t,e,n)=>(oo(t,e,"access private method"),n);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ts(t,e){return Object.is(t,e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let pt=null,lr=!1,Nr=1;const qr=Symbol("SIGNAL");function Gn(t){const e=pt;return pt=t,e}function lo(){return pt}function co(){return lr}const _i={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Hr(t){if(lr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(pt===null)return;pt.consumerOnSignalRead(t);const e=pt.nextProducerIndex++;if(Vn(pt),e<pt.producerNode.length&&pt.producerNode[e]!==t&&pi(pt)){const n=pt.producerNode[e];Jr(n,pt.producerIndexOfThis[e])}pt.producerNode[e]!==t&&(pt.producerNode[e]=t,pt.producerIndexOfThis[e]=pi(pt)?Ls(t,pt,e):0),pt.producerLastReadVersion[e]=t.version}function uo(){Nr++}function Ps(t){if(!(!t.dirty&&t.lastCleanEpoch===Nr)){if(!t.producerMustRecompute(t)&&!go(t)){t.dirty=!1,t.lastCleanEpoch=Nr;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Nr}}function Rs(t){if(t.liveConsumerNode===void 0)return;const e=lr;lr=!0;try{for(const n of t.liveConsumerNode)n.dirty||ho(n)}finally{lr=e}}function po(){return(pt==null?void 0:pt.consumerAllowSignalWrites)!==!1}function ho(t){var e;t.dirty=!0,Rs(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function fo(t){return t&&(t.nextProducerIndex=0),Gn(t)}function mo(t,e){if(Gn(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(pi(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)Jr(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function go(t){Vn(t);for(let e=0;e<t.producerNode.length;e++){const n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(Ps(n),i!==n.version))return!0}return!1}function Ls(t,e,n){var i;if(Ci(t),Vn(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)t.producerIndexOfThis[s]=Ls(t.producerNode[s],t,s)}return t.liveConsumerIndexOfThis.push(n),t.liveConsumerNode.push(e)-1}function Jr(t,e){var n;if(Ci(t),Vn(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(n=t.unwatched)==null||n.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)Jr(t.producerNode[s],t.producerIndexOfThis[s])}const i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const s=t.liveConsumerIndexOfThis[e],u=t.liveConsumerNode[e];Vn(u),u.producerIndexOfThis[s]=e}}function pi(t){var e;return t.consumerIsAlwaysLive||(((e=t==null?void 0:t.liveConsumerNode)==null?void 0:e.length)??0)>0}function Vn(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function Ci(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ns(t){if(Ps(t),Hr(t),t.value===di)throw t.error;return t.value}function vo(t){const e=Object.create(yo);e.computation=t;const n=()=>Ns(e);return n[qr]=e,n}const ai=Symbol("UNSET"),oi=Symbol("COMPUTING"),di=Symbol("ERRORED"),yo={..._i,value:ai,dirty:!0,error:null,equal:Ts,producerMustRecompute(t){return t.value===ai||t.value===oi},producerRecomputeValue(t){if(t.value===oi)throw new Error("Detected cycle in computations.");const e=t.value;t.value=oi;const n=fo(t);let i,s=!1;try{i=t.computation.call(t.wrapper),s=e!==ai&&e!==di&&t.equal.call(t.wrapper,e,i)}catch(u){i=di,t.error=u}finally{mo(t,n)}if(s){t.value=e;return}t.value=i,t.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function bo(){throw new Error}let wo=bo;function Io(){wo()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function xo(t){const e=Object.create(Ao);e.value=t;const n=()=>(Hr(e),e.value);return n[qr]=e,n}function ko(){return Hr(this),this.value}function So(t,e){po()||Io(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,_o(t))}const Ao={..._i,equal:Ts,value:void 0};function _o(t){t.version++,uo(),Rs(t)}/**
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
 */const kt=Symbol("node");var nn;(t=>{var e,n,i,s;class u{constructor(x,I={}){Cr(this,n),ii(this,e);const C=xo(x)[qr];if(this[kt]=C,C.wrapper=this,I){const v=I.equals;v&&(C.equal=v),C.watched=I[t.subtle.watched],C.unwatched=I[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return ko.call(this[kt])}set(x){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(co())throw new Error("Writes to signals not permitted during Watcher callback");const I=this[kt];So(I,x)}}e=kt,n=new WeakSet,t.isState=f=>typeof f=="object"&&si(n,f),t.State=u;class o{constructor(x,I){Cr(this,s),ii(this,i);const C=vo(x)[qr];if(C.consumerAllowSignalWrites=!0,this[kt]=C,C.wrapper=this,I){const v=I.equals;v&&(C.equal=v),C.watched=I[t.subtle.watched],C.unwatched=I[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Ns(this[kt])}}i=kt,s=new WeakSet,t.isComputed=f=>typeof f=="object"&&si(s,f),t.Computed=o,(f=>{var x,I,E,C;function v(D){let B,L=null;try{L=Gn(null),B=D()}finally{Gn(L)}return B}f.untrack=v;function T(D){var B;if(!(0,t.isComputed)(D)&&!(0,t.isWatcher)(D))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((B=D[kt].producerNode)==null?void 0:B.map(L=>L.wrapper))??[]}f.introspectSources=T;function q(D){var B;if(!(0,t.isComputed)(D)&&!(0,t.isState)(D))throw new TypeError("Called introspectSinks without a Signal argument");return((B=D[kt].liveConsumerNode)==null?void 0:B.map(L=>L.wrapper))??[]}f.introspectSinks=q;function J(D){if(!(0,t.isComputed)(D)&&!(0,t.isState)(D))throw new TypeError("Called hasSinks without a Signal argument");const B=D[kt].liveConsumerNode;return B?B.length>0:!1}f.hasSinks=J;function ve(D){if(!(0,t.isComputed)(D)&&!(0,t.isWatcher)(D))throw new TypeError("Called hasSources without a Computed or Watcher argument");const B=D[kt].producerNode;return B?B.length>0:!1}f.hasSources=ve;class Oe{constructor(B){Cr(this,I),Cr(this,E),ii(this,x);let L=Object.create(_i);L.wrapper=this,L.consumerMarkedDirty=B,L.consumerIsAlwaysLive=!0,L.consumerAllowSignalWrites=!1,L.producerNode=[],this[kt]=L}watch(...B){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ts(this,E,C).call(this,B);const L=this[kt];L.dirty=!1;const y=Gn(L);for(const F of B)Hr(F[kt]);Gn(y)}unwatch(...B){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ts(this,E,C).call(this,B);const L=this[kt];Vn(L);for(let y=L.producerNode.length-1;y>=0;y--)if(B.includes(L.producerNode[y].wrapper)){Jr(L.producerNode[y],L.producerIndexOfThis[y]);const F=L.producerNode.length-1;if(L.producerNode[y]=L.producerNode[F],L.producerIndexOfThis[y]=L.producerIndexOfThis[F],L.producerNode.length--,L.producerIndexOfThis.length--,L.nextProducerIndex--,y<L.producerNode.length){const j=L.producerIndexOfThis[y],ie=L.producerNode[y];Ci(ie),ie.liveConsumerIndexOfThis[j]=y}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[kt].producerNode.filter(L=>L.dirty).map(L=>L.wrapper)}}x=kt,I=new WeakSet,E=new WeakSet,C=function(D){for(const B of D)if(!(0,t.isComputed)(B)&&!(0,t.isState)(B))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=D=>si(I,D),f.Watcher=Oe;function U(){var D;return(D=lo())==null?void 0:D.wrapper}f.currentComputed=U,f.watched=Symbol("watched"),f.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(nn||(nn={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=Symbol("SignalWatcherBrand"),Eo=new FinalizationRegistry(({watcher:t,signal:e})=>{t.unwatch(e)}),ns=new WeakMap;function Yr(t){return t[Co]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new nn.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new nn.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new nn.subtle.Watcher(function(){const n=ns.get(this);n!==void 0&&(n._$Si===!1&&n.requestUpdate(),this.watch())});ns.set(e,this),Eo.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(n=>n.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,n,i){this._$So=!0,super.requestUpdate(e,n,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(e){this._$Sh.add(e);const n=this._$So;this.requestUpdate(),this._$So=n}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */nn.State;nn.Computed;const Mn=(t,e)=>new nn.State(t,e),Oo={},Me=Mn(null),Dr=Mn(null),hi=Mn(null),Ds=Mn(0),rn=Mn(void 0);Mn({name:"",timestamp:0});class To{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Ds.set(this.updateCounter)}run(e,n){const i=this.createProgressMonitor(e);try{this.tasks.push(i),this.notifyUpdate(),n(i)}finally{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()}}async runAsync(e,n){const i=this.createProgressMonitor(e);return this.tasks.push(i),this.notifyUpdate(),n(i).finally(()=>{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()})}createProgressMonitor(e){const n={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(n,{set:(i,s,u)=>(i[s]=u,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const Wn=new To;an.put("taskService",Wn);const fi="events/extensionsregistry/extensionsConfigChanged",Er="extensions";class Po{constructor(){this.extensions={},this.loadedExtensions=new Set,on(Si,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(()=>{var e;(e=this.extensionsSettings)==null||e.forEach(n=>{this.isEnabled(n.id)&&this.load(n.id).catch(i=>{tt("Extension could not be loaded: "+i.message)})})})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Zt.get(Er),this.extensionsSettings||(await Zt.set(Er,[]),this.extensionsSettings=await Zt.get(Er)),mn(fi,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e}getExtensions(){return Object.values(this.extensions)}isEnabled(e){var n;return this.checkExtensionsConfig(),!!((n=this.extensionsSettings)!=null&&n.find(i=>i.id===e&&i.enabled))}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,n=!1){this.isEnabled(e)||(bt.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,n)}).catch(i=>{bt.error(`Could not load extension: ${e}`)}))}async load(e){if(this.loadedExtensions.has(e))return;const n=this.extensions[e];if(!n)throw new Error("Extension not found: "+e);this.loadedExtensions.add(e);const i=await Wn.runAsync("Loading extension: "+n.name,()=>{if(n.loader)return n.loader();if(n.url)return import(n.url)});(i==null?void 0:i.default)instanceof Function&&(i==null||i.default(mr.getProxy()))}disable(e,n=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,n)}updateEnablement(e,n,i){this.checkExtensionsConfig().then(()=>{var u,o;const s=(u=this.extensionsSettings)==null?void 0:u.find(f=>f.id==e);s?s.enabled=n:(o=this.extensionsSettings)==null||o.push({id:e,enabled:n}),Zt.set(Er,this.extensionsSettings).then(()=>{if(i){const f=this.extensions[e];sn(n?f.name+" enabled.":f.name+" disabled  - Please restart to take effect")}mn(fi,this.extensionsSettings)})})}}bt.debug("ExtensionRegistry initializing...");const at=new Po;an.put("extensionRegistry",at);bt.debug("ExtensionRegistry initialized");const gr="events/contributionregistry/contributionsChanged";class Ro{constructor(){this.contributions=new Map}registerContribution(e,n){const i=this.getContributions(e);if(n.disabled instanceof Function){const s=n.disabled;n.disabled=new nn.Computed(s)}i.push(n),mn(gr,this.contributions)}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const dt=new Ro;an.put("contributionRegistry",dt);const Ut=ki("AppLoader");class Lo{constructor(){this.apps=new Map}registerApp(e){this.apps.has(e.id)&&Ut.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Ut.info(`Registered app: ${e.name} (${e.id}) v${e.version}`)}async loadApp(e,n){let i;if(typeof e=="string"){const s=this.apps.get(e);if(!s)throw new Error(`App '${e}' not found. Make sure it's registered.`);i=s}else i=e,this.registerApp(i);Ut.info(`Loading app: ${i.name}...`),this.currentApp&&(Ut.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Ut.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{at.disable(s)}))),i.extensions&&(Ut.info(`Enabling ${i.extensions.length} extensions...`),i.extensions.forEach(s=>{at.enable(s)})),i.contributions&&(Ut.info("Registering app contributions..."),i.contributions.ui&&(i.contributions.ui.forEach(s=>{const u=s.target;u&&dt.registerContribution(u,s)}),Ut.info(`Registered ${i.contributions.ui.length} UI contributions`)),i.contributions.extensions&&(i.contributions.extensions.forEach(s=>{at.registerExtension(s)}),Ut.info(`Registered ${i.contributions.extensions.length} app extensions`))),i.initialize&&(Ut.info(`Initializing ${i.name}...`),await i.initialize()),this.currentApp=i,Ut.info(`App ${i.name} loaded successfully`),n&&this.renderApp(n)}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");Oa(this.currentApp.render(),e),Ut.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}}const $s=new Lo;an.put("appLoaderService",$s);const rs="0.12.9";class No{constructor(e,n,i,s,u){this.id=e,this.name=n,this.description=i,this.parameters=s||[],this.output=u||[]}}class Ms{async execute(e,n){return Ee.execute(e,n)}async undo(){}async redo(){}}class Do{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,n){this.handlers.has(e)||this.handlers.set(e,[]),this.handlers.get(e).push(n)}getHandler(e){return this.handlers.get(e)}createExecutionContext(e,n){return{source:e,params:n||{},activePart:Me.get(),activeEditor:Dr.get()}}execute(e,n={}){const i=this.getHandler(e);if(!i)throw new Error(`No handlers registered for command: ${e}`);for(const s of i)if(s.canExecute===void 0||s.canExecute(n))return s.execute(n);bt.error(`No handler found to execute command: ${e}`)}createAndRegisterCommand(e,n,i,s,u){const o=new No(e,n,i,s);this.registerCommand(o),u&&this.registerHandler(e,u)}registerCommand(e){this.commands[e.id]=e,bt.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(n=>(Ee.getHandler(n.id)||[]).some(s=>s.canExecute===void 0||s.canExecute(e))).reduce((n,i)=>(n[i.id]=i,n),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const n=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(n,e.handler),e.contribution&&e.contribution.target&&dt.registerContribution(e.contribution.target,{command:n,...e.contribution})}}const Ee=new Do;an.put("commandRegistry",Ee);const ut=t=>{Ee.registerAll(t)};class $o{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Ee.listCommands();Object.values(e).forEach(n=>{n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)})}watchCommandRegistry(){const e=Ee.registerCommand.bind(Ee);Ee.registerCommand=n=>{e(n),n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const n=e.toUpperCase().split("+").map(o=>o.trim());if(n.length===0)return null;const i={ctrl:!1,alt:!1,shift:!1,meta:!1},s=n[n.length-1],u=n.slice(0,-1);for(const o of u)switch(o){case"CTRL":case"CONTROL":i.ctrl=!0;break;case"ALT":case"OPTION":i.alt=!0;break;case"SHIFT":i.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":i.meta=!0;break;default:bt.warn(`Unknown modifier: ${o}`)}return i.key=this.normalizeKey(s),i}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const n=[];return e.ctrl&&n.push("ctrl"),e.alt&&n.push("alt"),e.shift&&n.push("shift"),e.meta&&n.push("meta"),n.sort(),`${n.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,n){const i=this.parseKeyBinding(n);if(!i)return bt.error(`Invalid key binding: ${n}`),!1;i.commandId=e;const s=this.getBindingKey(i);this.bindings.has(s)||this.bindings.set(s,[]);const u=this.bindings.get(s);return u.find(f=>f.commandId===e)?(bt.error(`Key binding ${n} already registered for command ${e}`),!1):(u.push(i),bt.debug(`Key binding registered: ${n} -> ${e}`),!0)}unregisterKeyBinding(e,n){if(n){const i=this.parseKeyBinding(n);if(i){const s=this.getBindingKey(i),u=this.bindings.get(s);if(u){const o=u.filter(f=>f.commandId!==e);o.length===0?this.bindings.delete(s):this.bindings.set(s,o)}}}else for(const[i,s]of this.bindings.entries()){const u=s.filter(o=>o.commandId!==e);u.length===0?this.bindings.delete(i):this.bindings.set(i,u)}}getKeyBindingsForCommand(e){const n=[];for(const i of this.bindings.values())for(const s of i)s.commandId===e&&n.push(this.formatKeyBinding(s));return n}formatKeyBinding(e){const n=[];e.ctrl&&n.push("Ctrl"),e.alt&&n.push("Alt"),e.shift&&n.push("Shift"),e.meta&&n.push("Cmd");let i=e.key;return i.length===1?i=i.toUpperCase():i=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase(),n.push(i),n.join("+")}handleKeyDown(e){if(!this.enabled)return;const n=e.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)){const o=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&o==="P"))return}const i={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},s=this.getBindingKey(i),u=this.bindings.get(s);if(u&&u.length>0){const o=u[0];try{e.preventDefault(),e.stopPropagation();const f=Ee.createExecutionContext(this,{});Ee.execute(o.commandId,f),bt.info(`Executed command via key binding: ${o.commandId}`)}catch(f){bt.error(`Failed to execute command ${o.commandId}: ${f.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}bt.debug("KeyBindingManager initializing...");const Fs=new $o;bt.debug("KeyBindingManager initialized");an.put("keyBindingManager",Fs);const qs=(t,e)=>{const n=new nn.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{n.watch()}});n.watch(t)},Ei=t=>function(e,n,i){const s=i.value;return s.signal=t,i};Object.defineProperty(As.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Zr extends As{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(n=>{const i=e[n];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"topic"in s&&this.subscribe(s.topic,s)}}),Object.getOwnPropertyNames(e).forEach(n=>{const i=e[n];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"signal"in s&&this.watch(s.signal,s)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,n){on(e,n.bind(this))}showInfo(e){sn(e)}showError(e){tt(e)}nobubble(e){return n=>{n.stopPropagation(),e.bind(this)(n)}}command(e,n={}){return()=>{this.executeCommand(e,n)}}executeCommand(e,n){const i=Ee.createExecutionContext(this,n);Ee.execute(e,i)}watch(e,n){qs(e,n.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}class Fn extends Zr{}var Mo=Object.getOwnPropertyDescriptor,Fo=(t,e,n,i)=>{for(var s=i>1?void 0:i?Mo(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};let mi=class extends Fn{render(){return ae`
            <slot></slot>
        `}};mi.styles=$t`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;mi=Fo([mt("k-app")],mi);var qo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,vr=(t,e,n,i)=>{for(var s=i>1?void 0:i?zo(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&qo(e,n,s),s};let Nn=class extends Yr(Fn){constructor(){super(...arguments),this.position="start",this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){if(this.getAttribute("id")){const t=this.getAttribute("id");this.contributions=dt.getContributions(t)}on(gr,()=>{this.requestUpdate()})}contributionCreator(t){var e;if("command"in t){const n=t;return ae`
                <wa-button @click=${this.command(n.command)}
                           title=${n.label}
                           ?disabled="${(e=n.disabled)==null?void 0:e.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${n.icon} label="${n.label}"></wa-icon>
                </wa-button>
            `}else if("html"in t){const n=t.html;return n instanceof Function?n():Kr(n)}else return ae`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return ae`
            <div class="toolbar-items" style=${Ta({"justify-content":this.position})}>
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
        `}};Nn.styles=$t`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;vr([nt()],Nn.prototype,"position",2);vr([nt({attribute:!1})],Nn.prototype,"partToolbarContent",2);vr([nt({attribute:!1})],Nn.prototype,"partToolbarRenderer",2);vr([gt()],Nn.prototype,"contributions",2);Nn=vr([mt("k-toolbar")],Nn);var jo=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,yr=(t,e,n,i)=>{for(var s=i>1?void 0:i?Uo(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&jo(e,n,s),s};let Dn=class extends Yr(Fn){constructor(){super(...arguments),this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Rn(),this.dropdownRef=Rn()}doBeforeUI(){const t=this.getAttribute("id");t&&(this.contributions=dt.getContributions(t)),on(gr,()=>{this.getAttribute("id")&&(this.contributions=dt.getContributions(this.getAttribute("id")),this.requestUpdate())})}show(t){this.position=t,this.isOpen=!0,this.updateComplete.then(()=>{this.dropdownRef.value&&this.dropdownRef.value.show()})}onClose(){this.isOpen=!1}renderContribution(t){var e;if("command"in t){const n=t;return ae`
                <wa-dropdown-item 
                    @click=${this.command(n.command)}
                    ?disabled="${(e=n.disabled)==null?void 0:e.get()}">
                    ${n.icon?ae`<wa-icon slot="icon" name=${n.icon}></wa-icon>`:""}
                    ${n.label}
                </wa-dropdown-item>
            `}else if("html"in t){const n=t.html;return n instanceof Function?n():Kr(n)}return Dt}render(){if(!this.isOpen)return Dt;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():Dt;return ae`
            <wa-dropdown 
                ${Ln(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${Ln(this.anchorRef)}
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
        `}};Dn.styles=$t`
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
        }
    `;yr([nt({attribute:!1})],Dn.prototype,"partContextMenuRenderer",2);yr([gt()],Dn.prototype,"contributions",2);yr([gt()],Dn.prototype,"isOpen",2);yr([gt()],Dn.prototype,"position",2);Dn=yr([mt("k-contextmenu")],Dn);class Oi extends Fn{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=(t,e,n)=>{const i=new Map;for(let s=e;s<=n;s++)i.set(t[s],s);return i},Bo=Pa(class extends Ra{constructor(t){if(super(t),t.type!==La.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const s=[],u=[];let o=0;for(const f of t)s[o]=i?i(f,o):o,u[o]=n(f,o),o++;return{values:u,keys:s}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,i]){const s=Na(t),{values:u,keys:o}=this.dt(e,n,i);if(!Array.isArray(s))return this.ut=o,u;const f=this.ut??(this.ut=[]),x=[];let I,E,C=0,v=s.length-1,T=0,q=u.length-1;for(;C<=v&&T<=q;)if(s[C]===null)C++;else if(s[v]===null)v--;else if(f[C]===o[T])x[T]=On(s[C],u[T]),C++,T++;else if(f[v]===o[q])x[q]=On(s[v],u[q]),v--,q--;else if(f[C]===o[q])x[q]=On(s[C],u[q]),tr(t,x[q+1],s[C]),C++,q--;else if(f[v]===o[T])x[T]=On(s[v],u[T]),tr(t,s[C],s[v]),v--,T++;else if(I===void 0&&(I=is(o,T,q),E=is(f,C,v)),I.has(f[C]))if(I.has(f[v])){const J=E.get(o[T]),ve=J!==void 0?s[J]:null;if(ve===null){const Oe=tr(t,s[C]);On(Oe,u[T]),x[T]=Oe}else x[T]=On(ve,u[T]),tr(t,s[C],ve),s[J]=null;T++}else ri(s[v]),v--;else ri(s[C]),C++;for(;T<=q;){const J=tr(t,x[q+1]);On(J,u[T]),x[T++]=J}for(;C<=v;){const J=s[C++];J!==null&&ri(J)}return this.ut=o,$a(t,x),Da}}),Go="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Vo="/assets/jupyter-C78Cpfql.svg",Wo="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";Ma("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":Go,"../icons/jupyter.svg":Vo,"../icons/python.svg":Wo})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});const Ft=(t,e,n,i)=>{if(!t)return"";const s=t.trim().split(/ +/),u=s.pop(),o=s.pop();return ae`
        <wa-icon library="${o||Dt}" variant="${i||Dt}"
                     family="${n||Dt}" name=${u} label="${e||t||Dt}"></wa-icon>`};var Ko=Object.defineProperty,Ho=(t,e,n,i)=>{for(var s=void 0,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(e,n,s)||s);return s&&Ko(e,n,s),s};class St extends Oi{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return Dt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return Dt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,hi.set(null),hi.set(this),Me.set(null),Me.set(this)}}Ho([nt()],St.prototype,"dirty");const Ti="app-toolbars-main",Zn="app-toolbars-main-right",Jo="app-toolbars-main-center",zs="app-toolbars-bottom",Pi="app-toolbars-bottom-center",js="app-toolbars-bottom-end",zr="editor-area-main",gi="sidebar-main",Us="sidebar-main-bottom",Bs="sidebar-auxiliary",Gs="panel-bottom";var Vs=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(Vs||{}),Yo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Ws=(t,e,n,i)=>{for(var s=i>1?void 0:i?Zo(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Yo(e,n,s),s};let jr=class extends Oi{constructor(){super(...arguments),this.contributions=[],this.tabGroup=Rn(),this.containerId=null}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateToolbarFromComponent(n)}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,n=e.closest("wa-tab");if(n){const o=n.getAttribute("panel");if(o){const f=this.getTabPanel(o);if(f){const x=f.querySelector(".tab-content");if(x&&x.firstElementChild){const I=x.firstElementChild;I instanceof St&&Me.set(I)}}}return}const i=e.closest("wa-scroller.tab-content");if(!i)return;const s=i.closest("wa-tab-panel");if(!s)return;const u=s.querySelector(".tab-content");if(u&&u.firstElementChild){const o=u.firstElementChild;o instanceof St&&Me.set(o)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,n=e.target.closest("wa-scroller.tab-content");if(!n)return;e.preventDefault();const i=n.closest("wa-tab-panel");if(!i)return;const s=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,button:0});e.target.dispatchEvent(s),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const u=i.querySelector("k-contextmenu");u&&u.show({x:e.clientX,y:e.clientY})})}))}),on(gr,()=>{this.containerId&&(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===zr;this.contributions.forEach(n=>{const i=this.getTabPanel(n.name);if(!i)return;const s=i.querySelector(".tab-content");if(s&&s.firstElementChild){const u=s.firstElementChild;u instanceof St&&(u.tabContribution=n,u.isEditor=e)}})}}has(t){return!!this.getTabPanel(t)}activate(t){this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(t){if(this.contributions.find(n=>n.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const n=this.getTabPanel(t.name);if(n){const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const s=i.firstElementChild;s instanceof St&&(s.tabContribution=t,s.isEditor=this.containerId===zr)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(n)})}})}handleTabAuxClick(t,e){t.button===Vs.MIDDLE&&e.closable&&this.closeTab(t,e.name)}closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!confirm("Unsaved changes will be lost: Do you really want to close?"))return;const n=this.getTabPanel(e);if(!n)return;const i=this.contributions.find(u=>u.name===e);if(!i)return;this.cleanupTabInstance(n);const s=this.contributions.indexOf(i);s>-1&&this.contributions.splice(s,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:n})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=dt.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=t.querySelector(".tab-content");if(e&&e.firstElementChild){const n=e.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`)}getTab(t){return this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`)}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof St)||!n.renderToolbar)return;const i=t.querySelector("k-toolbar");i&&(i.partToolbarRenderer=()=>n.renderToolbar(),i.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof St)||!n.renderContextMenu)return;const i=t.querySelector("k-contextmenu");i&&(i.partContextMenuRenderer=()=>n.renderContextMenu(),i.requestUpdate())}render(){return ae`
            <wa-tab-group ${Ln(this.tabGroup)}>
                ${Bo(this.contributions,t=>t.name,t=>ae`
                        <wa-tab panel="${t.name}"
                                @auxclick="${e=>this.handleTabAuxClick(e,t)}">
                            ${Ft(t.icon)}
                            ${t.label}
                            ${gn(t.closable,()=>ae`
                                <wa-icon name="xmark" label="Close"  @click="${e=>this.closeTab(e,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            <k-toolbar id="toolbar.${t.name}" class="tab-toolbar"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${t.component?t.component(t.name):Dt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu.${t.name}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};jr.styles=$t`
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
    `;Ws([gt()],jr.prototype,"contributions",2);jr=Ws([mt("k-tabs")],jr);var Qo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,br=(t,e,n,i)=>{for(var s=i>1?void 0:i?Xo(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Qo(e,n,s),s};let Kn=class extends Fn{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.handleResize=t=>{if(!this.resizing)return;const n=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,i=[...this.resizing.startSizes];i[this.resizing.handleIndex]+=n,i[this.resizing.handleIndex+1]-=n;const s=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,u=s*.05;i[this.resizing.handleIndex]>=u&&i[this.resizing.handleIndex+1]>=u&&(this.gridSizes=i.map(o=>`${(o/s*100).toFixed(2)}%`),this.requestUpdate())},this.stopResize=()=>{this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,n)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${n*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${n*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const n=this.orientation==="horizontal"?t.clientX:t.clientY,i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=this.gridSizes.map(u=>u.endsWith("%")?parseFloat(u)/100*i:(u.endsWith("px"),parseFloat(u)));this.resizing={handleIndex:e,startPos:n,startSizes:s},document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return Dt;const t=this.gridSizes.flatMap((e,n)=>n===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",ae`
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
            
            ${this.gridChildren.map((e,n)=>{if(n<this.gridChildren.length-1){const i=this.orientation==="horizontal"?`${n*2+2}`:"1",s=this.orientation==="vertical"?`${n*2+2}`:"1";return ae`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${i};
                                grid-row: ${s};
                            "
                            @mousedown=${u=>this.startResize(u,n)}
                        ></div>
                    `}return Dt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};br([nt()],Kn.prototype,"orientation",2);br([nt()],Kn.prototype,"sizes",2);br([gt()],Kn.prototype,"gridSizes",2);br([gt()],Kn.prototype,"gridChildren",2);Kn=br([mt("k-resizable-grid")],Kn);const el=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var tl=Object.defineProperty,nl=Object.getOwnPropertyDescriptor,Qr=(t,e,n,i)=>{for(var s=i>1?void 0:i?nl(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&tl(e,n,s),s};let Hn=class extends St{constructor(){super(...arguments),this.treeRef=Rn()}doBeforeUI(){this.initializeWorkspace()}async initializeWorkspace(){const t=await Mt.getWorkspace();t?await this.loadWorkspace(t):Ee.execute("help")}renderToolbar(){const t=rn.get()instanceof Zi;return ae`
            <k-command cmd="load_workspace" icon="folder-open" title="Load workspace folder"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const t=rn.get()instanceof Zi;return ae`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>Delete</k-command>
        `}async onWorkspaceChanged(t){await this.loadWorkspace(t)}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t):this.root=void 0}async resourceToTreeNode(t){const e=t instanceof Mr,n={data:t,label:t.getName(),icon:e?"file":"folder-open",leaf:e,children:[]};if(t instanceof Fa){for(const i of await t.listChildren(!0)){const s=await this.resourceToTreeNode(i);n.children.push(s)}n.children.sort(el)}return n}createTreeItems(t,e=!1){return t?ae`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${t} ?expanded=${e}>
                <span><wa-icon name=${t.icon} label="${t.leaf?"File":"Folder"}"></wa-icon> ${t.label}</span>
                ${t.children.map(n=>this.createTreeItems(n))}
            </wa-tree-item>`:ae``}async onFileDoubleClicked(t){const n=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:n})}onSelectionChanged(t){const e=t.detail.selection[0].model;rn.set(e.data)}render(){return ae`
            <div class="tree" ${Ln(this.treeRef)}>
                ${gn(!this.workspaceDir,()=>ae`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>ae`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};Hn.styles=$t`
        :host {
        }
    `;Qr([gt()],Hn.prototype,"root",2);Qr([Ii(ar)],Hn.prototype,"onWorkspaceChanged",1);Qr([Ii(xi)],Hn.prototype,"onWorkspaceConnected",1);Hn=Qr([mt("k-filebrowser")],Hn);var rl=Object.getOwnPropertyDescriptor,il=(t,e,n,i)=>{for(var s=i>1?void 0:i?rl(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};dt.registerContribution(Pi,{html:"<k-tasks></k-tasks>"});let vi=class extends Yr(St){render(){Ds.get();const t=Wn.getActiveTasks().length;if(t!=0)return ae`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${t}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${t}
                </wa-button>
                ${Wn.getActiveTasks().map(e=>{const n=e.progress>=0||e.totalSteps>0,i=e.progress>=0?e.progress:e.totalSteps>0?Math.round(e.currentStep/e.totalSteps*100):0,s=e.progress<0&&e.totalSteps>0;return ae`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${e.name}</strong>: ${e.message}
                            </div>
                            ${n?ae`
                                <wa-progress-bar value="${i}" style="--track-height: 1.25rem;">
                                    ${s?`${e.currentStep}/${e.totalSteps} - `:""}${i}%
                                </wa-progress-bar>
                            `:ae`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};vi.styles=$t`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;vi=il([mt("k-tasks")],vi);var sl=Object.getOwnPropertyDescriptor,al=(t,e,n,i)=>{for(var s=i>1?void 0:i?sl(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};const ss="<no workspace>";let as=class extends Fn{constructor(){super(...arguments),this.workspaceName=ss}doInitUI(){this.updateWorkspaceName(),on(xi,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Mt.getWorkspace().then(t=>{this.workspaceName=(t==null?void 0:t.getName())||ss,this.requestUpdate()})}handleLoadWorkspace(){Ee.execute("load_workspace",{source:this})}render(){return ae`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};as=al([mt("k-workspace-name")],as);var ol=Object.getOwnPropertyDescriptor,ll=(t,e,n,i)=>{for(var s=i>1?void 0:i?ol(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};const os="<no part>";dt.registerContribution(Pi,{html:"<k-part-name></k-part-name>"});let ls=class extends Yr(Fn){getPartName(){var e;const t=Me.get();return t&&(((e=t.tabContribution)==null?void 0:e.label)||t.getAttribute("id"))||os}render(){var n;const t=Me.get(),e=((n=t==null?void 0:t.tabContribution)==null?void 0:n.icon)||"box";return ae`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <span slot="start">${Ft(e,"Part")}</span>
                ${this.getPartName()}
            </wa-button>
        `}};ls=ll([mt("k-part-name")],ls);function Ri(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let qn=Ri();function Ks(t){qn=t}const cr={exec:()=>null};function Ue(t,e=""){let n=typeof t=="string"?t:t.source;const i={replace:(s,u)=>{let o=typeof u=="string"?u:u.source;return o=o.replace(Pt.caret,"$1"),n=n.replace(s,o),i},getRegex:()=>new RegExp(n,e)};return i}const Pt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},cl=/^(?:[ \t]*(?:\n|$))+/,ul=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,pl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,wr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,dl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Li=/(?:[*+-]|\d{1,9}[.)])/,Hs=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Js=Ue(Hs).replace(/bull/g,Li).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),hl=Ue(Hs).replace(/bull/g,Li).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ni=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,fl=/^[^\n]+/,Di=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ml=Ue(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Di).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),gl=Ue(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Li).getRegex(),Xr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",$i=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,vl=Ue("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",$i).replace("tag",Xr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ys=Ue(Ni).replace("hr",wr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Xr).getRegex(),yl=Ue(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ys).getRegex(),Mi={blockquote:yl,code:ul,def:ml,fences:pl,heading:dl,hr:wr,html:vl,lheading:Js,list:gl,newline:cl,paragraph:Ys,table:cr,text:fl},cs=Ue("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",wr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Xr).getRegex(),bl={...Mi,lheading:hl,table:cs,paragraph:Ue(Ni).replace("hr",wr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",cs).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Xr).getRegex()},wl={...Mi,html:Ue(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",$i).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:cr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ue(Ni).replace("hr",wr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Js).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Il=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,xl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Zs=/^( {2,}|\\)\n(?!\s*$)/,kl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ei=/[\p{P}\p{S}]/u,Fi=/[\s\p{P}\p{S}]/u,Qs=/[^\s\p{P}\p{S}]/u,Sl=Ue(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Fi).getRegex(),Xs=/(?!~)[\p{P}\p{S}]/u,Al=/(?!~)[\s\p{P}\p{S}]/u,_l=/(?:[^\s\p{P}\p{S}]|~)/u,Cl=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ea=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,El=Ue(ea,"u").replace(/punct/g,ei).getRegex(),Ol=Ue(ea,"u").replace(/punct/g,Xs).getRegex(),ta="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Tl=Ue(ta,"gu").replace(/notPunctSpace/g,Qs).replace(/punctSpace/g,Fi).replace(/punct/g,ei).getRegex(),Pl=Ue(ta,"gu").replace(/notPunctSpace/g,_l).replace(/punctSpace/g,Al).replace(/punct/g,Xs).getRegex(),Rl=Ue("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Qs).replace(/punctSpace/g,Fi).replace(/punct/g,ei).getRegex(),Ll=Ue(/\\(punct)/,"gu").replace(/punct/g,ei).getRegex(),Nl=Ue(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Dl=Ue($i).replace("(?:-->|$)","-->").getRegex(),$l=Ue("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Dl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ur=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ml=Ue(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ur).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),na=Ue(/^!?\[(label)\]\[(ref)\]/).replace("label",Ur).replace("ref",Di).getRegex(),ra=Ue(/^!?\[(ref)\](?:\[\])?/).replace("ref",Di).getRegex(),Fl=Ue("reflink|nolink(?!\\()","g").replace("reflink",na).replace("nolink",ra).getRegex(),qi={_backpedal:cr,anyPunctuation:Ll,autolink:Nl,blockSkip:Cl,br:Zs,code:xl,del:cr,emStrongLDelim:El,emStrongRDelimAst:Tl,emStrongRDelimUnd:Rl,escape:Il,link:Ml,nolink:ra,punctuation:Sl,reflink:na,reflinkSearch:Fl,tag:$l,text:kl,url:cr},ql={...qi,link:Ue(/^!?\[(label)\]\((.*?)\)/).replace("label",Ur).getRegex(),reflink:Ue(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ur).getRegex()},yi={...qi,emStrongRDelimAst:Pl,emStrongLDelim:Ol,url:Ue(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},zl={...yi,br:Ue(Zs).replace("{2,}","*").getRegex(),text:Ue(yi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Or={normal:Mi,gfm:bl,pedantic:wl},rr={normal:qi,gfm:yi,breaks:zl,pedantic:ql},jl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},us=t=>jl[t];function tn(t,e){if(e){if(Pt.escapeTest.test(t))return t.replace(Pt.escapeReplace,us)}else if(Pt.escapeTestNoEncode.test(t))return t.replace(Pt.escapeReplaceNoEncode,us);return t}function ps(t){try{t=encodeURI(t).replace(Pt.percentDecode,"%")}catch{return null}return t}function ds(t,e){var u;const n=t.replace(Pt.findPipe,(o,f,x)=>{let I=!1,E=f;for(;--E>=0&&x[E]==="\\";)I=!I;return I?"|":" |"}),i=n.split(Pt.splitPipe);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!((u=i.at(-1))!=null&&u.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(Pt.slashPipe,"|");return i}function ir(t,e,n){const i=t.length;if(i===0)return"";let s=0;for(;s<i&&t.charAt(i-s-1)===e;)s++;return t.slice(0,i-s)}function Ul(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return n>0?-2:-1}function hs(t,e,n,i,s){const u=e.href,o=e.title||null,f=t[1].replace(s.other.outputLinkReplace,"$1");i.state.inLink=!0;const x={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:u,title:o,text:f,tokens:i.inlineTokens(f)};return i.state.inLink=!1,x}function Bl(t,e,n){const i=t.match(n.other.indentCodeCompensation);if(i===null)return e;const s=i[1];return e.split(`
`).map(u=>{const o=u.match(n.other.beginningSpace);if(o===null)return u;const[f]=o;return f.length>=s.length?u.slice(s.length):u}).join(`
`)}class Br{constructor(e){Je(this,"options");Je(this,"rules");Je(this,"lexer");this.options=e||qn}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:ir(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],s=Bl(i,n[3]||"",this.rules);return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(this.rules.other.endingHash.test(i)){const s=ir(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ir(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let i=ir(n[0],`
`).split(`
`),s="",u="";const o=[];for(;i.length>0;){let f=!1;const x=[];let I;for(I=0;I<i.length;I++)if(this.rules.other.blockquoteStart.test(i[I]))x.push(i[I]),f=!0;else if(!f)x.push(i[I]);else break;i=i.slice(I);const E=x.join(`
`),C=E.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${E}`:E,u=u?`${u}
${C}`:C;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(C,o,!0),this.lexer.state.top=v,i.length===0)break;const T=o.at(-1);if((T==null?void 0:T.type)==="code")break;if((T==null?void 0:T.type)==="blockquote"){const q=T,J=q.raw+`
`+i.join(`
`),ve=this.blockquote(J);o[o.length-1]=ve,s=s.substring(0,s.length-q.raw.length)+ve.raw,u=u.substring(0,u.length-q.text.length)+ve.text;break}else if((T==null?void 0:T.type)==="list"){const q=T,J=q.raw+`
`+i.join(`
`),ve=this.list(J);o[o.length-1]=ve,s=s.substring(0,s.length-T.raw.length)+ve.raw,u=u.substring(0,u.length-q.raw.length)+ve.raw,i=J.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:u}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i=n[1].trim();const s=i.length>1,u={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");const o=this.rules.other.listItemRegex(i);let f=!1;for(;e;){let I=!1,E="",C="";if(!(n=o.exec(e))||this.rules.block.hr.test(e))break;E=n[0],e=e.substring(E.length);let v=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,U=>" ".repeat(3*U.length)),T=e.split(`
`,1)[0],q=!v.trim(),J=0;if(this.options.pedantic?(J=2,C=v.trimStart()):q?J=n[1].length+1:(J=n[2].search(this.rules.other.nonSpaceChar),J=J>4?1:J,C=v.slice(J),J+=n[1].length),q&&this.rules.other.blankLine.test(T)&&(E+=T+`
`,e=e.substring(T.length+1),I=!0),!I){const U=this.rules.other.nextBulletRegex(J),D=this.rules.other.hrRegex(J),B=this.rules.other.fencesBeginRegex(J),L=this.rules.other.headingBeginRegex(J),y=this.rules.other.htmlBeginRegex(J);for(;e;){const F=e.split(`
`,1)[0];let j;if(T=F,this.options.pedantic?(T=T.replace(this.rules.other.listReplaceNesting,"  "),j=T):j=T.replace(this.rules.other.tabCharGlobal,"    "),B.test(T)||L.test(T)||y.test(T)||U.test(T)||D.test(T))break;if(j.search(this.rules.other.nonSpaceChar)>=J||!T.trim())C+=`
`+j.slice(J);else{if(q||v.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(v)||L.test(v)||D.test(v))break;C+=`
`+T}!q&&!T.trim()&&(q=!0),E+=F+`
`,e=e.substring(F.length+1),v=j.slice(J)}}u.loose||(f?u.loose=!0:this.rules.other.doubleBlankLine.test(E)&&(f=!0));let ve=null,Oe;this.options.gfm&&(ve=this.rules.other.listIsTask.exec(C),ve&&(Oe=ve[0]!=="[ ] ",C=C.replace(this.rules.other.listReplaceTask,""))),u.items.push({type:"list_item",raw:E,task:!!ve,checked:Oe,loose:!1,text:C,tokens:[]}),u.raw+=E}const x=u.items.at(-1);if(x)x.raw=x.raw.trimEnd(),x.text=x.text.trimEnd();else return;u.raw=u.raw.trimEnd();for(let I=0;I<u.items.length;I++)if(this.lexer.state.top=!1,u.items[I].tokens=this.lexer.blockTokens(u.items[I].text,[]),!u.loose){const E=u.items[I].tokens.filter(v=>v.type==="space"),C=E.length>0&&E.some(v=>this.rules.other.anyLine.test(v.raw));u.loose=C}if(u.loose)for(let I=0;I<u.items.length;I++)u.items[I].loose=!0;return u}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:s,title:u}}}table(e){var f;const n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;const i=ds(n[1]),s=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),u=(f=n[3])!=null&&f.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:n[0],header:[],align:[],rows:[]};if(i.length===s.length){for(const x of s)this.rules.other.tableAlignRight.test(x)?o.align.push("right"):this.rules.other.tableAlignCenter.test(x)?o.align.push("center"):this.rules.other.tableAlignLeft.test(x)?o.align.push("left"):o.align.push(null);for(let x=0;x<i.length;x++)o.header.push({text:i[x],tokens:this.lexer.inline(i[x]),header:!0,align:o.align[x]});for(const x of u)o.rows.push(ds(x,o.header.length).map((I,E)=>({text:I,tokens:this.lexer.inline(I),header:!1,align:o.align[E]})));return o}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;const o=ir(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=Ul(n[2],"()");if(o===-2)return;if(o>-1){const x=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,x).trim(),n[3]=""}}let s=n[2],u="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],u=o[3])}else u=n[3]?n[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),hs(n,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),u=n[s.toLowerCase()];if(!u){const o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return hs(i,u,i[0],this.lexer,this.rules)}}emStrong(e,n,i=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...s[0]].length-1;let f,x,I=o,E=0;const C=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(C.lastIndex=0,n=n.slice(-1*e.length+o);(s=C.exec(n))!=null;){if(f=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!f)continue;if(x=[...f].length,s[3]||s[4]){I+=x;continue}else if((s[5]||s[6])&&o%3&&!((o+x)%3)){E+=x;continue}if(I-=x,I>0)continue;x=Math.min(x,x+I+E);const v=[...s[0]][0].length,T=e.slice(0,o+s.index+v+x);if(Math.min(o,x)%2){const J=T.slice(1,-1);return{type:"em",raw:T,text:J,tokens:this.lexer.inlineTokens(J)}}const q=T.slice(2,-2);return{type:"strong",raw:T,text:q,tokens:this.lexer.inlineTokens(q)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(i),u=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&u&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=n[1],s="mailto:"+i):(i=n[1],s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let n;if(n=this.rules.inline.url.exec(e)){let s,u;if(n[2]==="@")s=n[0],u="mailto:"+s;else{let o;do o=n[0],n[0]=((i=this.rules.inline._backpedal.exec(n[0]))==null?void 0:i[0])??"";while(o!==n[0]);s=n[0],n[1]==="www."?u="http://"+n[0]:u=n[0]}return{type:"link",raw:n[0],text:s,href:u,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){const i=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:i}}}}class Bt{constructor(e){Je(this,"tokens");Je(this,"options");Je(this,"state");Je(this,"tokenizer");Je(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||qn,this.options.tokenizer=this.options.tokenizer||new Br,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Pt,block:Or.normal,inline:rr.normal};this.options.pedantic?(n.block=Or.pedantic,n.inline=rr.pedantic):this.options.gfm&&(n.block=Or.gfm,this.options.breaks?n.inline=rr.breaks:n.inline=rr.gfm),this.tokenizer.rules=n}static get rules(){return{block:Or,inline:rr}}static lex(e,n){return new Bt(n).lex(e)}static lexInline(e,n){return new Bt(n).inlineTokens(e)}lex(e){e=e.replace(Pt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){var s,u,o;for(this.options.pedantic&&(e=e.replace(Pt.tabCharGlobal,"    ").replace(Pt.spaceLine,""));e;){let f;if((u=(s=this.options.extensions)==null?void 0:s.block)!=null&&u.some(I=>(f=I.call({lexer:this},e,n))?(e=e.substring(f.raw.length),n.push(f),!0):!1))continue;if(f=this.tokenizer.space(e)){e=e.substring(f.raw.length);const I=n.at(-1);f.raw.length===1&&I!==void 0?I.raw+=`
`:n.push(f);continue}if(f=this.tokenizer.code(e)){e=e.substring(f.raw.length);const I=n.at(-1);(I==null?void 0:I.type)==="paragraph"||(I==null?void 0:I.type)==="text"?(I.raw+=`
`+f.raw,I.text+=`
`+f.text,this.inlineQueue.at(-1).src=I.text):n.push(f);continue}if(f=this.tokenizer.fences(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.heading(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.hr(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.blockquote(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.list(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.html(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.def(e)){e=e.substring(f.raw.length);const I=n.at(-1);(I==null?void 0:I.type)==="paragraph"||(I==null?void 0:I.type)==="text"?(I.raw+=`
`+f.raw,I.text+=`
`+f.raw,this.inlineQueue.at(-1).src=I.text):this.tokens.links[f.tag]||(this.tokens.links[f.tag]={href:f.href,title:f.title});continue}if(f=this.tokenizer.table(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.lheading(e)){e=e.substring(f.raw.length),n.push(f);continue}let x=e;if((o=this.options.extensions)!=null&&o.startBlock){let I=1/0;const E=e.slice(1);let C;this.options.extensions.startBlock.forEach(v=>{C=v.call({lexer:this},E),typeof C=="number"&&C>=0&&(I=Math.min(I,C))}),I<1/0&&I>=0&&(x=e.substring(0,I+1))}if(this.state.top&&(f=this.tokenizer.paragraph(x))){const I=n.at(-1);i&&(I==null?void 0:I.type)==="paragraph"?(I.raw+=`
`+f.raw,I.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=I.text):n.push(f),i=x.length!==e.length,e=e.substring(f.raw.length);continue}if(f=this.tokenizer.text(e)){e=e.substring(f.raw.length);const I=n.at(-1);(I==null?void 0:I.type)==="text"?(I.raw+=`
`+f.raw,I.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=I.text):n.push(f);continue}if(e){const I="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(I);break}else throw new Error(I)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var f,x,I;let i=e,s=null;if(this.tokens.links){const E=Object.keys(this.tokens.links);if(E.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)E.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let u=!1,o="";for(;e;){u||(o=""),u=!1;let E;if((x=(f=this.options.extensions)==null?void 0:f.inline)!=null&&x.some(v=>(E=v.call({lexer:this},e,n))?(e=e.substring(E.raw.length),n.push(E),!0):!1))continue;if(E=this.tokenizer.escape(e)){e=e.substring(E.raw.length),n.push(E);continue}if(E=this.tokenizer.tag(e)){e=e.substring(E.raw.length),n.push(E);continue}if(E=this.tokenizer.link(e)){e=e.substring(E.raw.length),n.push(E);continue}if(E=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(E.raw.length);const v=n.at(-1);E.type==="text"&&(v==null?void 0:v.type)==="text"?(v.raw+=E.raw,v.text+=E.text):n.push(E);continue}if(E=this.tokenizer.emStrong(e,i,o)){e=e.substring(E.raw.length),n.push(E);continue}if(E=this.tokenizer.codespan(e)){e=e.substring(E.raw.length),n.push(E);continue}if(E=this.tokenizer.br(e)){e=e.substring(E.raw.length),n.push(E);continue}if(E=this.tokenizer.del(e)){e=e.substring(E.raw.length),n.push(E);continue}if(E=this.tokenizer.autolink(e)){e=e.substring(E.raw.length),n.push(E);continue}if(!this.state.inLink&&(E=this.tokenizer.url(e))){e=e.substring(E.raw.length),n.push(E);continue}let C=e;if((I=this.options.extensions)!=null&&I.startInline){let v=1/0;const T=e.slice(1);let q;this.options.extensions.startInline.forEach(J=>{q=J.call({lexer:this},T),typeof q=="number"&&q>=0&&(v=Math.min(v,q))}),v<1/0&&v>=0&&(C=e.substring(0,v+1))}if(E=this.tokenizer.inlineText(C)){e=e.substring(E.raw.length),E.raw.slice(-1)!=="_"&&(o=E.raw.slice(-1)),u=!0;const v=n.at(-1);(v==null?void 0:v.type)==="text"?(v.raw+=E.raw,v.text+=E.text):n.push(E);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class Gr{constructor(e){Je(this,"options");Je(this,"parser");this.options=e||qn}space(e){return""}code({text:e,lang:n,escaped:i}){var o;const s=(o=(n||"").match(Pt.notSpaceStart))==null?void 0:o[0],u=e.replace(Pt.endingNewline,"")+`
`;return s?'<pre><code class="language-'+tn(s)+'">'+(i?u:tn(u,!0))+`</code></pre>
`:"<pre><code>"+(i?u:tn(u,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,i=e.start;let s="";for(let f=0;f<e.items.length;f++){const x=e.items[f];s+=this.listitem(x)}const u=n?"ol":"ul",o=n&&i!==1?' start="'+i+'"':"";return"<"+u+o+`>
`+s+"</"+u+`>
`}listitem(e){var i;let n="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((i=e.tokens[0])==null?void 0:i.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+tn(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):n+=s+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",i="";for(let u=0;u<e.header.length;u++)i+=this.tablecell(e.header[u]);n+=this.tablerow({text:i});let s="";for(let u=0;u<e.rows.length;u++){const o=e.rows[u];i="";for(let f=0;f<o.length;f++)i+=this.tablecell(o[f]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+n+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${tn(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:i}){const s=this.parser.parseInline(i),u=ps(e);if(u===null)return s;e=u;let o='<a href="'+e+'"';return n&&(o+=' title="'+tn(n)+'"'),o+=">"+s+"</a>",o}image({href:e,title:n,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));const u=ps(e);if(u===null)return tn(i);e=u;let o=`<img src="${e}" alt="${i}"`;return n&&(o+=` title="${tn(n)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:tn(e.text)}}class zi{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Gt{constructor(e){Je(this,"options");Je(this,"renderer");Je(this,"textRenderer");this.options=e||qn,this.options.renderer=this.options.renderer||new Gr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new zi}static parse(e,n){return new Gt(n).parse(e)}static parseInline(e,n){return new Gt(n).parseInline(e)}parse(e,n=!0){var s,u;let i="";for(let o=0;o<e.length;o++){const f=e[o];if((u=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&u[f.type]){const I=f,E=this.options.extensions.renderers[I.type].call({parser:this},I);if(E!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(I.type)){i+=E||"";continue}}const x=f;switch(x.type){case"space":{i+=this.renderer.space(x);continue}case"hr":{i+=this.renderer.hr(x);continue}case"heading":{i+=this.renderer.heading(x);continue}case"code":{i+=this.renderer.code(x);continue}case"table":{i+=this.renderer.table(x);continue}case"blockquote":{i+=this.renderer.blockquote(x);continue}case"list":{i+=this.renderer.list(x);continue}case"html":{i+=this.renderer.html(x);continue}case"paragraph":{i+=this.renderer.paragraph(x);continue}case"text":{let I=x,E=this.renderer.text(I);for(;o+1<e.length&&e[o+1].type==="text";)I=e[++o],E+=`
`+this.renderer.text(I);n?i+=this.renderer.paragraph({type:"paragraph",raw:E,text:E,tokens:[{type:"text",raw:E,text:E,escaped:!0}]}):i+=E;continue}default:{const I='Token with "'+x.type+'" type was not found.';if(this.options.silent)return console.error(I),"";throw new Error(I)}}}return i}parseInline(e,n=this.renderer){var s,u;let i="";for(let o=0;o<e.length;o++){const f=e[o];if((u=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&u[f.type]){const I=this.options.extensions.renderers[f.type].call({parser:this},f);if(I!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(f.type)){i+=I||"";continue}}const x=f;switch(x.type){case"escape":{i+=n.text(x);break}case"html":{i+=n.html(x);break}case"link":{i+=n.link(x);break}case"image":{i+=n.image(x);break}case"strong":{i+=n.strong(x);break}case"em":{i+=n.em(x);break}case"codespan":{i+=n.codespan(x);break}case"br":{i+=n.br(x);break}case"del":{i+=n.del(x);break}case"text":{i+=n.text(x);break}default:{const I='Token with "'+x.type+'" type was not found.';if(this.options.silent)return console.error(I),"";throw new Error(I)}}}return i}}class ur{constructor(e){Je(this,"options");Je(this,"block");this.options=e||qn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Bt.lex:Bt.lexInline}provideParser(){return this.block?Gt.parse:Gt.parseInline}}Je(ur,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Gl{constructor(...e){Je(this,"defaults",Ri());Je(this,"options",this.setOptions);Je(this,"parse",this.parseMarkdown(!0));Je(this,"parseInline",this.parseMarkdown(!1));Je(this,"Parser",Gt);Je(this,"Renderer",Gr);Je(this,"TextRenderer",zi);Je(this,"Lexer",Bt);Je(this,"Tokenizer",Br);Je(this,"Hooks",ur);this.use(...e)}walkTokens(e,n){var s,u;let i=[];for(const o of e)switch(i=i.concat(n.call(this,o)),o.type){case"table":{const f=o;for(const x of f.header)i=i.concat(this.walkTokens(x.tokens,n));for(const x of f.rows)for(const I of x)i=i.concat(this.walkTokens(I.tokens,n));break}case"list":{const f=o;i=i.concat(this.walkTokens(f.items,n));break}default:{const f=o;(u=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&u[f.type]?this.defaults.extensions.childTokens[f.type].forEach(x=>{const I=f[x].flat(1/0);i=i.concat(this.walkTokens(I,n))}):f.tokens&&(i=i.concat(this.walkTokens(f.tokens,n)))}}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const o=n.renderers[u.name];o?n.renderers[u.name]=function(...f){let x=u.renderer.apply(this,f);return x===!1&&(x=o.apply(this,f)),x}:n.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=n[u.level];o?o.unshift(u.tokenizer):n[u.level]=[u.tokenizer],u.start&&(u.level==="block"?n.startBlock?n.startBlock.push(u.start):n.startBlock=[u.start]:u.level==="inline"&&(n.startInline?n.startInline.push(u.start):n.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(n.childTokens[u.name]=u.childTokens)}),s.extensions=n),i.renderer){const u=this.defaults.renderer||new Gr(this.defaults);for(const o in i.renderer){if(!(o in u))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const f=o,x=i.renderer[f],I=u[f];u[f]=(...E)=>{let C=x.apply(u,E);return C===!1&&(C=I.apply(u,E)),C||""}}s.renderer=u}if(i.tokenizer){const u=this.defaults.tokenizer||new Br(this.defaults);for(const o in i.tokenizer){if(!(o in u))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const f=o,x=i.tokenizer[f],I=u[f];u[f]=(...E)=>{let C=x.apply(u,E);return C===!1&&(C=I.apply(u,E)),C}}s.tokenizer=u}if(i.hooks){const u=this.defaults.hooks||new ur;for(const o in i.hooks){if(!(o in u))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const f=o,x=i.hooks[f],I=u[f];ur.passThroughHooks.has(o)?u[f]=E=>{if(this.defaults.async)return Promise.resolve(x.call(u,E)).then(v=>I.call(u,v));const C=x.call(u,E);return I.call(u,C)}:u[f]=(...E)=>{let C=x.apply(u,E);return C===!1&&(C=I.apply(u,E)),C}}s.hooks=u}if(i.walkTokens){const u=this.defaults.walkTokens,o=i.walkTokens;s.walkTokens=function(f){let x=[];return x.push(o.call(this,f)),u&&(x=x.concat(u.call(this,f))),x}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Bt.lex(e,n??this.defaults)}parser(e,n){return Gt.parse(e,n??this.defaults)}parseMarkdown(e){return(i,s)=>{const u={...s},o={...this.defaults,...u},f=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&u.async===!1)return f(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const x=o.hooks?o.hooks.provideLexer():e?Bt.lex:Bt.lexInline,I=o.hooks?o.hooks.provideParser():e?Gt.parse:Gt.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(E=>x(E,o)).then(E=>o.hooks?o.hooks.processAllTokens(E):E).then(E=>o.walkTokens?Promise.all(this.walkTokens(E,o.walkTokens)).then(()=>E):E).then(E=>I(E,o)).then(E=>o.hooks?o.hooks.postprocess(E):E).catch(f);try{o.hooks&&(i=o.hooks.preprocess(i));let E=x(i,o);o.hooks&&(E=o.hooks.processAllTokens(E)),o.walkTokens&&this.walkTokens(E,o.walkTokens);let C=I(E,o);return o.hooks&&(C=o.hooks.postprocess(C)),C}catch(E){return f(E)}}}onError(e,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+tn(i.message+"",!0)+"</pre>";return n?Promise.resolve(s):s}if(n)return Promise.reject(i);throw i}}}const $n=new Gl;function We(t,e){return $n.parse(t,e)}We.options=We.setOptions=function(t){return $n.setOptions(t),We.defaults=$n.defaults,Ks(We.defaults),We};We.getDefaults=Ri;We.defaults=qn;We.use=function(...t){return $n.use(...t),We.defaults=$n.defaults,Ks(We.defaults),We};We.walkTokens=function(t,e){return $n.walkTokens(t,e)};We.parseInline=$n.parseInline;We.Parser=Gt;We.parser=Gt.parse;We.Renderer=Gr;We.TextRenderer=zi;We.Lexer=Bt;We.lexer=Bt.lex;We.Tokenizer=Br;We.Hooks=ur;We.parse=We;We.options;We.setOptions;We.use;We.walkTokens;We.parseInline;Gt.parse;Bt.lex;var fn={},Yt={},fs;function Vl(){if(fs)return Yt;fs=1,Object.defineProperty(Yt,"__esModule",{value:!0});function t(c){const r=c||"";return function(){throw new Error("this method "+r+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(c,r){if(!c)throw new Error(r||"Assertion failed")}function n(c,r,a){let p;Object.defineProperty(c,r,{get(){return p||(p=a.call(this)),p}})}function i(c){return c&&Object.assign({},c)}function s(c,r){const a=[];for(;r-- >0;)a.push(c());return a}function u(c,r){return new Array(r+1).join(c)}function o(c,r){return s(()=>c,r)}function f(c){const r=[];for(let a=0;a<c.length;a++){const p=c[a];c.lastIndexOf(p)!==a&&r.indexOf(p)<0&&r.push(p)}return r}function x(c){const r=[];return c.forEach(a=>{r.indexOf(a)<0&&r.push(a)}),r}function I(c){const r=c[0];return r===r.toUpperCase()}function E(c){return!I(c)}function C(c,r,a){const p=a||" ";return c.length<r?u(p,r-c.length)+c:c}function v(){this.strings=[]}v.prototype.append=function(c){this.strings.push(c)},v.prototype.contents=function(){return this.strings.join("")};const T=c=>String.fromCodePoint(parseInt(c,16));function q(c){if(c.charAt(0)==="\\")switch(c.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return T(c.slice(2,4));case"u":return c.charAt(2)==="{"?T(c.slice(3,-1)):T(c.slice(2,6));default:return c.charAt(1)}else return c}function J(c){if(c==null)return String(c);const r=Object.prototype.toString.call(c);try{let a;return c.constructor&&c.constructor.name?a=c.constructor.name:r.indexOf("[object ")===0?a=r.slice(8,-1):a=typeof c,a+": "+JSON.stringify(String(c))}catch{return r}}var ve=Object.freeze({__proto__:null,abstract:t,assert:e,defineLazyProperty:n,clone:i,repeatFn:s,repeatStr:u,repeat:o,getDuplicates:f,copyWithoutDuplicates:x,isSyntactic:I,isLexical:E,padLeft:C,StringBuffer:v,unescapeCodePoint:q,unexpectedObjToString:J});const Oe={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class U{constructor(){if(this.constructor===U)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(r){return r&&(this.source=r.trimmed()),this}}const D=Object.create(U.prototype),B=Object.create(U.prototype);class L extends U{constructor(r){super(),this.obj=r}}class y extends U{constructor(r,a){super(),this.from=r,this.to=a,this.matchCodePoint=r.length>1||a.length>1}}class F extends U{constructor(r){super(),this.index=r}}class j extends U{constructor(r){super(),this.terms=r}}class ie extends j{constructor(r,a,p){const g=r.rules[a].body;super([p,g]),this.superGrammar=r,this.name=a,this.body=p}}class me extends j{constructor(r,a,p,g){const O=r.rules[a].body;super([...p,O,...g]),this.superGrammar=r,this.ruleName=a,this.expansionPos=p.length}}class Y extends U{constructor(r){super(),this.factors=r}}class ne extends U{constructor(r){super(),this.expr=r}}class ce extends ne{}class ke extends ne{}class ze extends ne{}ce.prototype.operator="*",ke.prototype.operator="+",ze.prototype.operator="?",ce.prototype.minNumMatches=0,ke.prototype.minNumMatches=1,ze.prototype.minNumMatches=0,ce.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ke.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ze.prototype.maxNumMatches=1;class ye extends U{constructor(r){super(),this.expr=r}}class ge extends U{constructor(r){super(),this.expr=r}}class Be extends U{constructor(r){super(),this.expr=r}}class te extends U{constructor(r,a=[]){super(),this.ruleName=r,this.args=a}isSyntactic(){return I(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class Ce extends U{constructor(r){super(),this.category=r,this.pattern=Oe[r]}}function Pe(c,r){let a;return r?(a=new Error(r.getLineAndColumnMessage()+c),a.shortMessage=c,a.interval=r):a=new Error(c),a}function b(){return Pe("Interval sources don't match")}function S(c){const r=new Error;return Object.defineProperty(r,"message",{enumerable:!0,get(){return c.message}}),Object.defineProperty(r,"shortMessage",{enumerable:!0,get(){return"Expected "+c.getExpectedText()}}),r.interval=c.getInterval(),r}function oe(c,r,a){const p=r?`Grammar ${c} is not declared in namespace '${r}'`:"Undeclared grammar "+c;return Pe(p,a)}function Ae(c,r){return Pe("Grammar "+c.name+" is already declared in this namespace")}function Ge(c){return Pe(`Grammar '${c.name}' does not support incremental parsing`)}function Re(c,r,a){return Pe("Rule "+c+" is not declared in grammar "+r,a)}function P(c,r,a){return Pe("Cannot override rule "+c+" because it is not declared in "+r,a)}function M(c,r,a){return Pe("Cannot extend rule "+c+" because it is not declared in "+r,a)}function R(c,r,a,p){let g="Duplicate declaration for rule '"+c+"' in grammar '"+r+"'";return r!==a&&(g+=" (originally declared in '"+a+"')"),Pe(g,p)}function K(c,r,a,p){return Pe("Wrong number of parameters for rule "+c+" (expected "+r+", got "+a+")",p)}function X(c,r,a,p){return Pe("Wrong number of arguments for rule "+c+" (expected "+r+", got "+a+")",p)}function H(c,r,a){return Pe("Duplicate parameter names in rule "+c+": "+r.join(", "),a)}function z(c,r){return Pe("Invalid parameter to rule "+c+": "+r+" has arity "+r.getArity()+", but parameter expressions must have arity 1",r.source)}const ee="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function he(c,r){return Pe("Cannot apply syntactic rule "+c+" from here (inside a lexical context)",r.source)}function Te(c){const{ruleName:r}=c;return Pe(`applySyntactic is for syntactic rules, but '${r}' is a lexical rule. `+ee,c.source)}function Le(c){return Pe("applySyntactic is not required here (in a syntactic context)",c.source)}function de(c,r){return Pe("Incorrect argument type: expected "+c,r.source)}function we(c){return Pe("'...' can appear at most once in a rule body",c.source)}function De(c){const r=c._node;e(r&&r.isNonterminal()&&r.ctorName==="escapeChar_unicodeCodePoint");const a=c.children.slice(1,-1).map(g=>g.source),p=a[0].coverageWith(...a.slice(1));return Pe(`U+${p.contents} is not a valid Unicode code point`,p)}function ue(c,r){const a=r.length>0?r[r.length-1].args:[];let g="Nullable expression "+c.expr.substituteParams(a)+" is not allowed inside '"+c.operator+"' (possible infinite loop)";if(r.length>0){const O=r.map($=>new te($.ruleName,$.args)).join(`
`);g+=`
Application stack (most recent application last):
`+O}return Pe(g,c.expr.source)}function ot(c,r,a,p){return Pe("Rule "+c+" involves an alternation which has inconsistent arity (expected "+r+", got "+a+")",p.source)}function Lt(c){const r=c.map(a=>a.message);return Pe(["Errors:"].concat(r).join(`
- `),c[0].interval)}function vt(c,r,a,p){let g=p.slice(0,-1).map(Z=>{const pe="  "+Z[0].name+" > "+Z[1];return Z.length===3?pe+" for '"+Z[2]+"'":pe}).join(`
`);g+=`
  `+r+" > "+c;let O="";c==="_iter"&&(O=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const $=[`Missing semantic action for '${c}' in ${a} '${r}'.${O}`,"Action stack (most recent call last):",g].join(`
`),Q=Pe($);return Q.name="missingSemanticAction",Q}function lt(c){if(c.length===1)throw c[0];if(c.length>1)throw Lt(c)}function yt(c){let r=0;return c.map(p=>{const g=p.toString();return r=Math.max(r,g.length),g}).map(p=>C(p,r))}function zt(c,r,a){const p=c.length,g=c.slice(0,a),O=c.slice(a+r.length);return(g+r+O).substr(0,p)}function Xt(...c){const r=this,{offset:a}=r,{repeatStr:p}=ve,g=new v;g.append("Line "+r.lineNum+", col "+r.colNum+`:
`);const O=yt([r.prevLine==null?0:r.lineNum-1,r.lineNum,r.nextLine==null?0:r.lineNum+1]),$=(V,G,se)=>{g.append(se+O[V]+" | "+G+`
`)};r.prevLine!=null&&$(0,r.prevLine,"  "),$(1,r.line,"> ");const Q=r.line.length;let Z=p(" ",Q+1);for(let V=0;V<c.length;++V){let G=c[V][0],se=c[V][1];e(G>=0&&G<=se,"range start must be >= 0 and <= end");const Ie=a-r.colNum+1;G=Math.max(0,G-Ie),se=Math.min(se-Ie,Q),Z=zt(Z,p("~",se-G),G)}const pe=2+O[1].length+3;return g.append(p(" ",pe)),Z=zt(Z,"^",r.colNum-1),g.append(Z.replace(/ +$/,"")+`
`),r.nextLine!=null&&$(2,r.nextLine,"  "),g.contents()}let vn=[];function Wt(c){vn.push(c)}function re(c){vn.forEach(r=>{r(c)}),vn=null}function yn(c,r){let a=1,p=1,g=0,O=0,$=null,Q=null,Z=-1;for(;g<r;){const G=c.charAt(g++);G===`
`?(a++,p=1,Z=O,O=g):G!=="\r"&&p++}let pe=c.indexOf(`
`,O);if(pe===-1)pe=c.length;else{const G=c.indexOf(`
`,pe+1);$=G===-1?c.slice(pe):c.slice(pe,G),$=$.replace(/^\r?\n/,"").replace(/\r$/,"")}Z>=0&&(Q=c.slice(Z,O).replace(/\r?\n$/,""));const V=c.slice(O,pe).replace(/\r$/,"");return{offset:r,lineNum:a,colNum:p,line:V,prevLine:Q,nextLine:$,toString:Xt}}function un(c,r,...a){return yn(c,r).toString(...a)}const Nt=(()=>{let c=0;return r=>""+r+c++})();class Xe{constructor(r,a,p){this.sourceString=r,this.startIdx=a,this.endIdx=p}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...r){return Xe.coverage(...r,this)}collapsedLeft(){return new Xe(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new Xe(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return yn(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const r=[this.startIdx,this.endIdx];return un(this.sourceString,this.startIdx,r)}minus(r){if(this.sourceString!==r.sourceString)throw b();return this.startIdx===r.startIdx&&this.endIdx===r.endIdx?[]:this.startIdx<r.startIdx&&r.endIdx<this.endIdx?[new Xe(this.sourceString,this.startIdx,r.startIdx),new Xe(this.sourceString,r.endIdx,this.endIdx)]:this.startIdx<r.endIdx&&r.endIdx<this.endIdx?[new Xe(this.sourceString,r.endIdx,this.endIdx)]:this.startIdx<r.startIdx&&r.startIdx<this.endIdx?[new Xe(this.sourceString,this.startIdx,r.startIdx)]:[this]}relativeTo(r){if(this.sourceString!==r.sourceString)throw b();return e(this.startIdx>=r.startIdx&&this.endIdx<=r.endIdx,"other interval does not cover this one"),new Xe(this.sourceString,this.startIdx-r.startIdx,this.endIdx-r.startIdx)}trimmed(){const{contents:r}=this,a=this.startIdx+r.match(/^\s*/)[0].length,p=this.endIdx-r.match(/\s*$/)[0].length;return new Xe(this.sourceString,a,p)}subInterval(r,a){const p=this.startIdx+r;return new Xe(this.sourceString,p,p+a)}}Xe.coverage=function(c,...r){let{startIdx:a,endIdx:p}=c;for(const g of r){if(g.sourceString!==c.sourceString)throw b();a=Math.min(a,g.startIdx),p=Math.max(p,g.endIdx)}return new Xe(c.sourceString,a,p)};const jt=65535;class $e{constructor(r){this.source=r,this.pos=0,this.examinedLength=0}atEnd(){const r=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),r}next(){const r=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),r}nextCharCode(){const r=this.next();return r&&r.charCodeAt(0)}nextCodePoint(){const r=this.source.slice(this.pos++).codePointAt(0);return r>jt&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),r}matchString(r,a){let p;if(a){for(p=0;p<r.length;p++){const g=this.next(),O=r[p];if(g==null||g.toUpperCase()!==O.toUpperCase())return!1}return!0}for(p=0;p<r.length;p++)if(this.next()!==r[p])return!1;return!0}sourceSlice(r,a){return this.source.slice(r,a)}interval(r,a){return new Xe(this.source,r,a||this.pos)}}class h{constructor(r,a,p,g,O,$,Q){this.matcher=r,this.input=a,this.startExpr=p,this._cst=g,this._cstOffset=O,this._rightmostFailurePosition=$,this._rightmostFailures=Q,this.failed()&&(n(this,"message",function(){const Z="Expected "+this.getExpectedText();return un(this.input,this.getRightmostFailurePosition())+Z}),n(this,"shortMessage",function(){const Z="expected "+this.getExpectedText(),pe=yn(this.input,this.getRightmostFailurePosition());return"Line "+pe.lineNum+", col "+pe.colNum+": "+Z}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const r=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=r.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const r=new v;let a=this.getRightmostFailures();a=a.filter(p=>!p.isFluffy());for(let p=0;p<a.length;p++)p>0&&(p===a.length-1?r.append(a.length>2?", or ":" or "):r.append(", ")),r.append(a[p].toString());return r.contents()}getInterval(){const r=this.getRightmostFailurePosition();return new Xe(this.input,r,r)}}class w{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(r){return this.applicationMemoKeyStack.indexOf(r.toMemoKey())>=0}enter(r){this.applicationMemoKeyStack.push(r.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(r,a){a.isLeftRecursion=!0,a.headApplication=r,a.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=a;const{applicationMemoKeyStack:p}=this,g=p.indexOf(r.toMemoKey())+1,O=p.slice(g);a.isInvolved=function($){return O.indexOf($)>=0},a.updateInvolvedApplicationMemoKeys=function(){for(let $=g;$<p.length;$++){const Q=p[$];this.isInvolved(Q)||O.push(Q)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(r){if(!r.isLeftRecursion)return!0;const{applicationMemoKeyStack:a}=this;for(let p=0;p<a.length;p++){const g=a[p];if(r.isInvolved(g))return!1}return!0}memoize(r,a){return this.memo[r]=a,this.maxExaminedLength=Math.max(this.maxExaminedLength,a.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,a.rightmostFailureOffset),a}clearObsoleteEntries(r,a){if(r+this.maxExaminedLength<=a)return;const{memo:p}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(p).forEach(g=>{const O=p[g];r+O.examinedLength>a?delete p[g]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,O.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,O.rightmostFailureOffset))})}}const A="✗",l="✓",d="⋅",m="⇒",_="␉",k="␊",N="␍",W={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function le(c){return o(" ",c).join("")}function fe(c,r,a){const p=Fe(c.slice(r,r+a));return p.length<a?p+o(" ",a-p.length).join(""):p}function Fe(c){return typeof c=="string"?c.replace(/ /g,d).replace(/\t/g,_).replace(/\n/g,k).replace(/\r/g,N):String(c)}class xe{constructor(r,a,p,g,O,$,Q){this.input=r,this.pos=this.pos1=a,this.pos2=p,this.source=new Xe(r,a,p),this.expr=g,this.bindings=$,this.children=Q||[],this.terminatingLREntry=null,this._flags=O?W.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(r){const a=new xe(this.input,this.pos,this.pos2,r,this.succeeded,this.bindings,this.children);return a.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,a.isImplicitSpaces=this.isImplicitSpaces,a.isMemoized=this.isMemoized,a.isRootNode=this.isRootNode,a.terminatesLR=this.terminatesLR,a.terminatingLREntry=this.terminatingLREntry,a}recordLRTermination(r,a){this.terminatingLREntry=new xe(this.input,this.pos,this.pos2,this.expr,!1,[a],[r]),this.terminatingLREntry.terminatesLR=!0}walk(r,a){let p=r;typeof p=="function"&&(p={enter:p});function g(O,$,Q){let Z=!0;p.enter&&p.enter.call(a,O,$,Q)===xe.prototype.SKIP&&(Z=!1),Z&&(O.children.forEach(pe=>{g(pe,O,Q+1)}),p.exit&&p.exit.call(a,O,$,Q))}this.isRootNode?this.children.forEach(O=>{g(O,null,0)}):g(this,null,0)}toString(){const r=new v;return this.walk((a,p,g)=>{if(!a)return this.SKIP;if(a.expr.constructor.name!=="Alt"){if(r.append(fe(a.input,a.pos,10)+le(g*2+1)),r.append((a.succeeded?l:A)+" "+a.displayString),a.isHeadOfLeftRecursion&&r.append(" (LR)"),a.succeeded){const $=Fe(a.source.contents);r.append(" "+m+"  "),r.append(typeof $=="string"?'"'+$+'"':$)}r.append(`
`)}}),r.contents()}}xe.prototype.SKIP={},Object.keys(W).forEach(c=>{const r=W[c];Object.defineProperty(xe.prototype,c,{get(){return(this._flags&r)!==0},set(a){a?this._flags|=r:this._flags&=~r}})}),U.prototype.allowsSkippingPrecedingSpace=t("allowsSkippingPrecedingSpace"),D.allowsSkippingPrecedingSpace=B.allowsSkippingPrecedingSpace=te.prototype.allowsSkippingPrecedingSpace=L.prototype.allowsSkippingPrecedingSpace=y.prototype.allowsSkippingPrecedingSpace=Ce.prototype.allowsSkippingPrecedingSpace=function(){return!0},j.prototype.allowsSkippingPrecedingSpace=ne.prototype.allowsSkippingPrecedingSpace=Be.prototype.allowsSkippingPrecedingSpace=ge.prototype.allowsSkippingPrecedingSpace=ye.prototype.allowsSkippingPrecedingSpace=F.prototype.allowsSkippingPrecedingSpace=Y.prototype.allowsSkippingPrecedingSpace=function(){return!1};let qe;Wt(c=>{qe=c});let Ne;U.prototype.assertAllApplicationsAreValid=function(c,r){Ne=0,this._assertAllApplicationsAreValid(c,r)},U.prototype._assertAllApplicationsAreValid=t("_assertAllApplicationsAreValid"),D._assertAllApplicationsAreValid=B._assertAllApplicationsAreValid=L.prototype._assertAllApplicationsAreValid=y.prototype._assertAllApplicationsAreValid=F.prototype._assertAllApplicationsAreValid=Ce.prototype._assertAllApplicationsAreValid=function(c,r){},Be.prototype._assertAllApplicationsAreValid=function(c,r){Ne++,this.expr._assertAllApplicationsAreValid(c,r),Ne--},j.prototype._assertAllApplicationsAreValid=function(c,r){for(let a=0;a<this.terms.length;a++)this.terms[a]._assertAllApplicationsAreValid(c,r)},Y.prototype._assertAllApplicationsAreValid=function(c,r){for(let a=0;a<this.factors.length;a++)this.factors[a]._assertAllApplicationsAreValid(c,r)},ne.prototype._assertAllApplicationsAreValid=ye.prototype._assertAllApplicationsAreValid=ge.prototype._assertAllApplicationsAreValid=function(c,r){this.expr._assertAllApplicationsAreValid(c,r)},te.prototype._assertAllApplicationsAreValid=function(c,r,a=!1){const p=r.rules[this.ruleName],g=I(c)&&Ne===0;if(!p)throw Re(this.ruleName,r.name,this.source);if(!a&&I(this.ruleName)&&!g)throw he(this.ruleName,this);const O=this.args.length,$=p.formals.length;if(O!==$)throw X(this.ruleName,$,O,this.source);const Q=qe&&p===qe.rules.applySyntactic;if(qe&&p===qe.rules.caseInsensitive&&!(this.args[0]instanceof L))throw de('a Terminal (e.g. "abc")',this.args[0]);if(Q){const pe=this.args[0];if(!(pe instanceof te))throw de("a syntactic rule application",pe);if(!I(pe.ruleName))throw Te(pe);if(g)throw Le(this)}this.args.forEach(pe=>{if(pe._assertAllApplicationsAreValid(c,r,Q),pe.getArity()!==1)throw z(this.ruleName,pe)})},U.prototype.assertChoicesHaveUniformArity=t("assertChoicesHaveUniformArity"),D.assertChoicesHaveUniformArity=B.assertChoicesHaveUniformArity=L.prototype.assertChoicesHaveUniformArity=y.prototype.assertChoicesHaveUniformArity=F.prototype.assertChoicesHaveUniformArity=Be.prototype.assertChoicesHaveUniformArity=Ce.prototype.assertChoicesHaveUniformArity=function(c){},j.prototype.assertChoicesHaveUniformArity=function(c){if(this.terms.length===0)return;const r=this.terms[0].getArity();for(let a=0;a<this.terms.length;a++){const p=this.terms[a];p.assertChoicesHaveUniformArity();const g=p.getArity();if(r!==g)throw ot(c,r,g,p)}},ie.prototype.assertChoicesHaveUniformArity=function(c){const r=this.terms[0].getArity(),a=this.terms[1].getArity();if(r!==a)throw ot(c,a,r,this.terms[0])},Y.prototype.assertChoicesHaveUniformArity=function(c){for(let r=0;r<this.factors.length;r++)this.factors[r].assertChoicesHaveUniformArity(c)},ne.prototype.assertChoicesHaveUniformArity=function(c){this.expr.assertChoicesHaveUniformArity(c)},ye.prototype.assertChoicesHaveUniformArity=function(c){},ge.prototype.assertChoicesHaveUniformArity=function(c){this.expr.assertChoicesHaveUniformArity(c)},te.prototype.assertChoicesHaveUniformArity=function(c){},U.prototype.assertIteratedExprsAreNotNullable=t("assertIteratedExprsAreNotNullable"),D.assertIteratedExprsAreNotNullable=B.assertIteratedExprsAreNotNullable=L.prototype.assertIteratedExprsAreNotNullable=y.prototype.assertIteratedExprsAreNotNullable=F.prototype.assertIteratedExprsAreNotNullable=Ce.prototype.assertIteratedExprsAreNotNullable=function(c){},j.prototype.assertIteratedExprsAreNotNullable=function(c){for(let r=0;r<this.terms.length;r++)this.terms[r].assertIteratedExprsAreNotNullable(c)},Y.prototype.assertIteratedExprsAreNotNullable=function(c){for(let r=0;r<this.factors.length;r++)this.factors[r].assertIteratedExprsAreNotNullable(c)},ne.prototype.assertIteratedExprsAreNotNullable=function(c){if(this.expr.assertIteratedExprsAreNotNullable(c),this.expr.isNullable(c))throw ue(this,[])},ze.prototype.assertIteratedExprsAreNotNullable=ye.prototype.assertIteratedExprsAreNotNullable=ge.prototype.assertIteratedExprsAreNotNullable=Be.prototype.assertIteratedExprsAreNotNullable=function(c){this.expr.assertIteratedExprsAreNotNullable(c)},te.prototype.assertIteratedExprsAreNotNullable=function(c){this.args.forEach(r=>{r.assertIteratedExprsAreNotNullable(c)})};class rt{constructor(r){this.matchLength=r}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(r){if(this.children)return this.children[r]}indexOfChild(r){return this.children.indexOf(r)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(r){const a=this.indexOfChild(r);if(a<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(a===0)throw new Error("cannot get child before first child");return this.childAt(a-1)}childAfter(r){const a=this.indexOfChild(r);if(a<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(a===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(a+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class _e extends rt{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class Ze extends rt{constructor(r,a,p,g){super(g),this.ruleName=r,this.children=a,this.childOffsets=p}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return E(this.ctorName)}isSyntactic(){return I(this.ctorName)}}class Tt extends rt{constructor(r,a,p,g){super(p),this.children=r,this.childOffsets=a,this.optional=g}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}U.prototype.eval=t("eval"),D.eval=function(c){const{inputStream:r}=c,a=r.pos,p=r.nextCodePoint();return p!==void 0?(c.pushBinding(new _e(String.fromCodePoint(p).length),a),!0):(c.processFailure(a,this),!1)},B.eval=function(c){const{inputStream:r}=c,a=r.pos;return r.atEnd()?(c.pushBinding(new _e(0),a),!0):(c.processFailure(a,this),!1)},L.prototype.eval=function(c){const{inputStream:r}=c,a=r.pos;return r.matchString(this.obj)?(c.pushBinding(new _e(this.obj.length),a),!0):(c.processFailure(a,this),!1)},y.prototype.eval=function(c){const{inputStream:r}=c,a=r.pos,p=this.matchCodePoint?r.nextCodePoint():r.nextCharCode();return p!==void 0&&this.from.codePointAt(0)<=p&&p<=this.to.codePointAt(0)?(c.pushBinding(new _e(String.fromCodePoint(p).length),a),!0):(c.processFailure(a,this),!1)},F.prototype.eval=function(c){return c.eval(c.currentApplication().args[this.index])},Be.prototype.eval=function(c){c.enterLexifiedContext();const r=c.eval(this.expr);return c.exitLexifiedContext(),r},j.prototype.eval=function(c){for(let r=0;r<this.terms.length;r++)if(c.eval(this.terms[r]))return!0;return!1},Y.prototype.eval=function(c){for(let r=0;r<this.factors.length;r++){const a=this.factors[r];if(!c.eval(a))return!1}return!0},ne.prototype.eval=function(c){const{inputStream:r}=c,a=r.pos,p=this.getArity(),g=[],O=[];for(;g.length<p;)g.push([]),O.push([]);let $=0,Q=a,Z;for(;$<this.maxNumMatches&&c.eval(this.expr);){if(r.pos===Q)throw ue(this,c._applicationStack);Q=r.pos,$++;const se=c._bindings.splice(c._bindings.length-p,p),Ie=c._bindingOffsets.splice(c._bindingOffsets.length-p,p);for(Z=0;Z<se.length;Z++)g[Z].push(se[Z]),O[Z].push(Ie[Z])}if($<this.minNumMatches)return!1;let pe=c.posToOffset(a),V=0;if($>0){const se=g[p-1],Ie=O[p-1],je=Ie[Ie.length-1]+se[se.length-1].matchLength;pe=O[0][0],V=je-pe}const G=this instanceof ze;for(Z=0;Z<g.length;Z++)c._bindings.push(new Tt(g[Z],O[Z],V,G)),c._bindingOffsets.push(pe);return!0},ye.prototype.eval=function(c){const{inputStream:r}=c,a=r.pos;c.pushFailuresInfo();const p=c.eval(this.expr);return c.popFailuresInfo(),p?(c.processFailure(a,this),!1):(r.pos=a,!0)},ge.prototype.eval=function(c){const{inputStream:r}=c,a=r.pos;return c.eval(this.expr)?(r.pos=a,!0):!1},te.prototype.eval=function(c){const r=c.currentApplication(),a=r?r.args:[],p=this.substituteParams(a),g=c.getCurrentPosInfo();if(g.isActive(p))return p.handleCycle(c);const O=p.toMemoKey(),$=g.memo[O];if($&&g.shouldUseMemoizedResult($)){if(c.hasNecessaryInfo($))return c.useMemoizedResult(c.inputStream.pos,$);delete g.memo[O]}return p.reallyEval(c)},te.prototype.handleCycle=function(c){const r=c.getCurrentPosInfo(),{currentLeftRecursion:a}=r,p=this.toMemoKey();let g=r.memo[p];return a&&a.headApplication.toMemoKey()===p?g.updateInvolvedApplicationMemoKeys():g||(g=r.memoize(p,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),r.startLeftRecursion(this,g)),c.useMemoizedResult(c.inputStream.pos,g)},te.prototype.reallyEval=function(c){const{inputStream:r}=c,a=r.pos,p=c.getCurrentPosInfo(),g=c.grammar.rules[this.ruleName],{body:O}=g,{description:$}=g;c.enterApplication(p,this),$&&c.pushFailuresInfo();const Q=r.examinedLength;r.examinedLength=0;let Z=this.evalOnce(O,c);const pe=p.currentLeftRecursion,V=this.toMemoKey(),G=pe&&pe.headApplication.toMemoKey()===V;let se;c.doNotMemoize?c.doNotMemoize=!1:G?(Z=this.growSeedResult(O,c,a,pe,Z),p.endLeftRecursion(),se=pe,se.examinedLength=r.examinedLength-a,se.rightmostFailureOffset=c._getRightmostFailureOffset(),p.memoize(V,se)):(!pe||!pe.isInvolved(V))&&(se=p.memoize(V,{matchLength:r.pos-a,examinedLength:r.examinedLength-a,value:Z,failuresAtRightmostPosition:c.cloneRecordedFailures(),rightmostFailureOffset:c._getRightmostFailureOffset()}));const Ie=!!Z;if($&&(c.popFailuresInfo(),Ie||c.processFailure(a,this),se&&(se.failuresAtRightmostPosition=c.cloneRecordedFailures())),c.isTracing()&&se){const je=c.getTraceEntry(a,this,Ie,Ie?[Z]:[]);G&&(e(je.terminatingLREntry!=null||!Ie),je.isHeadOfLeftRecursion=!0),se.traceEntry=je}return r.examinedLength=Math.max(r.examinedLength,Q),c.exitApplication(p,Z),Ie},te.prototype.evalOnce=function(c,r){const{inputStream:a}=r,p=a.pos;if(r.eval(c)){const g=c.getArity(),O=r._bindings.splice(r._bindings.length-g,g),$=r._bindingOffsets.splice(r._bindingOffsets.length-g,g),Q=a.pos-p;return new Ze(this.ruleName,O,$,Q)}else return!1},te.prototype.growSeedResult=function(c,r,a,p,g){if(!g)return!1;const{inputStream:O}=r;for(;;){if(p.matchLength=O.pos-a,p.value=g,p.failuresAtRightmostPosition=r.cloneRecordedFailures(),r.isTracing()){const $=r.trace[r.trace.length-1];p.traceEntry=new xe(r.input,a,O.pos,this,!0,[g],[$.clone()])}if(O.pos=a,g=this.evalOnce(c,r),O.pos-a<=p.matchLength)break;r.isTracing()&&r.trace.splice(-2,1)}return r.isTracing()&&p.traceEntry.recordLRTermination(r.trace.pop(),g),O.pos=a+p.matchLength,p.value},Ce.prototype.eval=function(c){const{inputStream:r}=c,a=r.pos,p=r.next();return p&&this.pattern.test(p)?(c.pushBinding(new _e(p.length),a),!0):(c.processFailure(a,this),!1)},U.prototype.getArity=t("getArity"),D.getArity=B.getArity=L.prototype.getArity=y.prototype.getArity=F.prototype.getArity=te.prototype.getArity=Ce.prototype.getArity=function(){return 1},j.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},Y.prototype.getArity=function(){let c=0;for(let r=0;r<this.factors.length;r++)c+=this.factors[r].getArity();return c},ne.prototype.getArity=function(){return this.expr.getArity()},ye.prototype.getArity=function(){return 0},ge.prototype.getArity=Be.prototype.getArity=function(){return this.expr.getArity()};function Ve(c,r){const a={};if(c.source&&r){const p=c.source.relativeTo(r);a.sourceInterval=[p.startIdx,p.endIdx]}return a}U.prototype.outputRecipe=t("outputRecipe"),D.outputRecipe=function(c,r){return["any",Ve(this,r)]},B.outputRecipe=function(c,r){return["end",Ve(this,r)]},L.prototype.outputRecipe=function(c,r){return["terminal",Ve(this,r),this.obj]},y.prototype.outputRecipe=function(c,r){return["range",Ve(this,r),this.from,this.to]},F.prototype.outputRecipe=function(c,r){return["param",Ve(this,r),this.index]},j.prototype.outputRecipe=function(c,r){return["alt",Ve(this,r)].concat(this.terms.map(a=>a.outputRecipe(c,r)))},ie.prototype.outputRecipe=function(c,r){return this.terms[0].outputRecipe(c,r)},me.prototype.outputRecipe=function(c,r){const a=this.terms.slice(0,this.expansionPos),p=this.terms.slice(this.expansionPos+1);return["splice",Ve(this,r),a.map(g=>g.outputRecipe(c,r)),p.map(g=>g.outputRecipe(c,r))]},Y.prototype.outputRecipe=function(c,r){return["seq",Ve(this,r)].concat(this.factors.map(a=>a.outputRecipe(c,r)))},ce.prototype.outputRecipe=ke.prototype.outputRecipe=ze.prototype.outputRecipe=ye.prototype.outputRecipe=ge.prototype.outputRecipe=Be.prototype.outputRecipe=function(c,r){return[this.constructor.name.toLowerCase(),Ve(this,r),this.expr.outputRecipe(c,r)]},te.prototype.outputRecipe=function(c,r){return["app",Ve(this,r),this.ruleName,this.args.map(a=>a.outputRecipe(c,r))]},Ce.prototype.outputRecipe=function(c,r){return["unicodeChar",Ve(this,r),this.category]},U.prototype.introduceParams=t("introduceParams"),D.introduceParams=B.introduceParams=L.prototype.introduceParams=y.prototype.introduceParams=F.prototype.introduceParams=Ce.prototype.introduceParams=function(c){return this},j.prototype.introduceParams=function(c){return this.terms.forEach((r,a,p)=>{p[a]=r.introduceParams(c)}),this},Y.prototype.introduceParams=function(c){return this.factors.forEach((r,a,p)=>{p[a]=r.introduceParams(c)}),this},ne.prototype.introduceParams=ye.prototype.introduceParams=ge.prototype.introduceParams=Be.prototype.introduceParams=function(c){return this.expr=this.expr.introduceParams(c),this},te.prototype.introduceParams=function(c){const r=c.indexOf(this.ruleName);if(r>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new F(r).withSource(this.source)}else return this.args.forEach((a,p,g)=>{g[p]=a.introduceParams(c)}),this},U.prototype.isNullable=function(c){return this._isNullable(c,Object.create(null))},U.prototype._isNullable=t("_isNullable"),D._isNullable=y.prototype._isNullable=F.prototype._isNullable=ke.prototype._isNullable=Ce.prototype._isNullable=function(c,r){return!1},B._isNullable=function(c,r){return!0},L.prototype._isNullable=function(c,r){return typeof this.obj=="string"?this.obj==="":!1},j.prototype._isNullable=function(c,r){return this.terms.length===0||this.terms.some(a=>a._isNullable(c,r))},Y.prototype._isNullable=function(c,r){return this.factors.every(a=>a._isNullable(c,r))},ce.prototype._isNullable=ze.prototype._isNullable=ye.prototype._isNullable=ge.prototype._isNullable=function(c,r){return!0},Be.prototype._isNullable=function(c,r){return this.expr._isNullable(c,r)},te.prototype._isNullable=function(c,r){const a=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(r,a)){const{body:p}=c.rules[this.ruleName],g=p.substituteParams(this.args);r[a]=!1,r[a]=g._isNullable(c,r)}return r[a]},U.prototype.substituteParams=t("substituteParams"),D.substituteParams=B.substituteParams=L.prototype.substituteParams=y.prototype.substituteParams=Ce.prototype.substituteParams=function(c){return this},F.prototype.substituteParams=function(c){return c[this.index]},j.prototype.substituteParams=function(c){return new j(this.terms.map(r=>r.substituteParams(c)))},Y.prototype.substituteParams=function(c){return new Y(this.factors.map(r=>r.substituteParams(c)))},ne.prototype.substituteParams=ye.prototype.substituteParams=ge.prototype.substituteParams=Be.prototype.substituteParams=function(c){return new this.constructor(this.expr.substituteParams(c))},te.prototype.substituteParams=function(c){if(this.args.length===0)return this;{const r=this.args.map(a=>a.substituteParams(c));return new te(this.ruleName,r)}};function pn(c){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(c)}function Ye(c){const r=Object.create(null);c.forEach(a=>{r[a]=(r[a]||0)+1}),Object.keys(r).forEach(a=>{if(r[a]<=1)return;let p=1;c.forEach((g,O)=>{g===a&&(c[O]=g+"_"+p++)})})}U.prototype.toArgumentNameList=t("toArgumentNameList"),D.toArgumentNameList=function(c,r){return["any"]},B.toArgumentNameList=function(c,r){return["end"]},L.prototype.toArgumentNameList=function(c,r){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+c]},y.prototype.toArgumentNameList=function(c,r){let a=this.from+"_to_"+this.to;return pn(a)||(a="_"+a),pn(a)||(a="$"+c),[a]},j.prototype.toArgumentNameList=function(c,r){const a=this.terms.map(O=>O.toArgumentNameList(c,!0)),p=[],g=a[0].length;for(let O=0;O<g;O++){const $=[];for(let Z=0;Z<this.terms.length;Z++)$.push(a[Z][O]);const Q=x($);p.push(Q.join("_or_"))}return r||Ye(p),p},Y.prototype.toArgumentNameList=function(c,r){let a=[];return this.factors.forEach(p=>{const g=p.toArgumentNameList(c,!0);a=a.concat(g),c+=g.length}),r||Ye(a),a},ne.prototype.toArgumentNameList=function(c,r){const a=this.expr.toArgumentNameList(c,r).map(p=>p[p.length-1]==="s"?p+"es":p+"s");return r||Ye(a),a},ze.prototype.toArgumentNameList=function(c,r){return this.expr.toArgumentNameList(c,r).map(a=>"opt"+a[0].toUpperCase()+a.slice(1))},ye.prototype.toArgumentNameList=function(c,r){return[]},ge.prototype.toArgumentNameList=Be.prototype.toArgumentNameList=function(c,r){return this.expr.toArgumentNameList(c,r)},te.prototype.toArgumentNameList=function(c,r){return[this.ruleName]},Ce.prototype.toArgumentNameList=function(c,r){return["$"+c]},F.prototype.toArgumentNameList=function(c,r){return["param"+this.index]},U.prototype.toDisplayString=t("toDisplayString"),j.prototype.toDisplayString=Y.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},D.toDisplayString=B.toDisplayString=ne.prototype.toDisplayString=ye.prototype.toDisplayString=ge.prototype.toDisplayString=Be.prototype.toDisplayString=L.prototype.toDisplayString=y.prototype.toDisplayString=F.prototype.toDisplayString=function(){return this.toString()},te.prototype.toDisplayString=function(){if(this.args.length>0){const c=this.args.map(r=>r.toDisplayString());return this.ruleName+"<"+c.join(",")+">"}else return this.ruleName},Ce.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function Sn(c){return c==="description"||c==="string"||c==="code"}class it{constructor(r,a,p){if(!Sn(p))throw new Error("invalid Failure type: "+p);this.pexpr=r,this.text=a,this.type=p,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(r){return this.getText()===r.getText()&&this.type===r.type&&(!this.isFluffy()||this.isFluffy()&&r.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const r=new it(this.pexpr,this.text,this.type);return this.isFluffy()&&r.makeFluffy(),r}toKey(){return this.toString()+"#"+this.type}}U.prototype.toFailure=t("toFailure"),D.toFailure=function(c){return new it(this,"any object","description")},B.toFailure=function(c){return new it(this,"end of input","description")},L.prototype.toFailure=function(c){return new it(this,this.obj,"string")},y.prototype.toFailure=function(c){return new it(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},ye.prototype.toFailure=function(c){const r=this.expr===D?"nothing":"not "+this.expr.toFailure(c);return new it(this,r,"description")},ge.prototype.toFailure=function(c){return this.expr.toFailure(c)},te.prototype.toFailure=function(c){let{description:r}=c.rules[this.ruleName];return r||(r=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new it(this,r,"description")},Ce.prototype.toFailure=function(c){return new it(this,"a Unicode ["+this.category+"] character","description")},j.prototype.toFailure=function(c){const a="("+this.terms.map(p=>p.toFailure(c)).join(" or ")+")";return new it(this,a,"description")},Y.prototype.toFailure=function(c){const a="("+this.factors.map(p=>p.toFailure(c)).join(" ")+")";return new it(this,a,"description")},ne.prototype.toFailure=function(c){const r="("+this.expr.toFailure(c)+this.operator+")";return new it(this,r,"description")},U.prototype.toString=t("toString"),D.toString=function(){return"any"},B.toString=function(){return"end"},L.prototype.toString=function(){return JSON.stringify(this.obj)},y.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},F.prototype.toString=function(){return"$"+this.index},Be.prototype.toString=function(){return"#("+this.expr.toString()+")"},j.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(c=>c.toString()).join(" | ")+")"},Y.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(c=>c.toString()).join(" ")+")"},ne.prototype.toString=function(){return this.expr+this.operator},ye.prototype.toString=function(){return"~"+this.expr},ge.prototype.toString=function(){return"&"+this.expr},te.prototype.toString=function(){if(this.args.length>0){const c=this.args.map(r=>r.toString());return this.ruleName+"<"+c.join(",")+">"}else return this.ruleName},Ce.prototype.toString=function(){return"\\p{"+this.category+"}"};class Kt extends U{constructor(r){super(),this.obj=r}_getString(r){const a=r.currentApplication().args[this.obj.index];return e(a instanceof L,"expected a Terminal expression"),a.obj}allowsSkippingPrecedingSpace(){return!0}eval(r){const{inputStream:a}=r,p=a.pos,g=this._getString(r);return a.matchString(g,!0)?(r.pushBinding(new _e(g.length),p),!0):(r.processFailure(p,this),!1)}getArity(){return 1}substituteParams(r){return new Kt(this.obj.substituteParams(r))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(r){return new it(this,this.obj.toFailure(r)+" (case-insensitive)","description")}_isNullable(r,a){return this.obj._isNullable(r,a)}}var ni=Object.freeze({__proto__:null,CaseInsensitiveTerminal:Kt,PExpr:U,any:D,end:B,Terminal:L,Range:y,Param:F,Alt:j,Extend:ie,Splice:me,Seq:Y,Iter:ne,Star:ce,Plus:ke,Opt:ze,Not:ye,Lookahead:ge,Lex:Be,Apply:te,UnicodeChar:Ce});let kr;Wt(c=>{kr=c.rules.applySyntactic.body});const Qn=new te("spaces");class Sr{constructor(r,a,p){this.matcher=r,this.startExpr=a,this.grammar=r.grammar,this.input=r.getInput(),this.inputStream=new $e(this.input),this.memoTable=r._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],p!==void 0&&(this.positionToRecordFailures=p,this.recordedFailures=Object.create(null))}posToOffset(r){return r-this._posStack[this._posStack.length-1]}enterApplication(r,a){this._posStack.push(this.inputStream.pos),this._applicationStack.push(a),this.inLexifiedContextStack.push(!1),r.enter(a),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(r,a){const p=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),r.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),a&&this.pushBinding(a,p)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const r=this.currentApplication();return r?r.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(Qn),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(r){return r.allowsSkippingPrecedingSpace()&&r!==Qn?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(r,a){this._bindings.push(r),this._bindingOffsets.push(this.posToOffset(a))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(r){for(;this._bindings.length>r;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(r){let a=this.memoTable[r];return a||(a=this.memoTable[r]=new w),a}processFailure(r,a){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,r),this.recordedFailures&&r===this.positionToRecordFailures){const p=this.currentApplication();p&&(a=a.substituteParams(p.args)),this.recordFailure(a.toFailure(this.grammar),!1)}}recordFailure(r,a){const p=r.toKey();this.recordedFailures[p]?this.recordedFailures[p].isFluffy()&&!r.isFluffy()&&this.recordedFailures[p].clearFluffy():this.recordedFailures[p]=a?r.clone():r}recordFailures(r,a){Object.keys(r).forEach(p=>{this.recordFailure(r[p],a)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const r=Object.create(null);return Object.keys(this.recordedFailures).forEach(a=>{r[a]=this.recordedFailures[a].clone()}),r}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(r,a){const p=this.memoTable[r];if(p&&a instanceof te){const g=p.memo[a.toMemoKey()];if(g&&g.traceEntry){const O=g.traceEntry.cloneWithExpr(a);return O.isMemoized=!0,O}}return null}getTraceEntry(r,a,p,g){if(a instanceof te){const O=this.currentApplication(),$=O?O.args:[];a=a.substituteParams($)}return this.getMemoizedTraceEntry(r,a)||new xe(this.input,r,this.inputStream.pos,a,p,g,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(r){return this.trace&&!r.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+r.rightmostFailureOffset===this.positionToRecordFailures?!!r.failuresAtRightmostPosition:!0}useMemoizedResult(r,a){this.trace&&this.trace.push(a.traceEntry);const p=this.inputStream.pos+a.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,p),this.recordedFailures&&this.positionToRecordFailures===p&&a.failuresAtRightmostPosition&&this.recordFailures(a.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,a.examinedLength+r),a.value?(this.inputStream.pos+=a.matchLength,this.pushBinding(a.value,r),!0):!1}eval(r){const{inputStream:a}=this,p=this._bindings.length,g=this.userData;let O;this.recordedFailures&&(O=this.recordedFailures,this.recordedFailures=Object.create(null));const $=a.pos,Q=this.maybeSkipSpacesBefore(r);let Z;this.trace&&(Z=this.trace,this.trace=[]);const pe=r.eval(this);if(this.trace){const V=this._bindings.slice(p),G=this.getTraceEntry(Q,r,pe,V);G.isImplicitSpaces=r===Qn,G.isRootNode=r===this.startExpr,Z.push(G),this.trace=Z}return pe?this.recordedFailures&&a.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(V=>{this.recordedFailures[V].makeFluffy()}):(a.pos=$,this.truncateBindings(p),this.userData=g),this.recordedFailures&&this.recordFailures(O,!1),r===kr&&this.skipSpaces(),pe}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let r;this.recordedFailures&&(r=Object.keys(this.recordedFailures).map(p=>this.recordedFailures[p]));const a=this._bindings[0];return a&&(a.grammar=this.grammar),new h(this.matcher,this.input,this.startExpr,a,this._bindingOffsets[0],this.rightmostFailurePosition,r)}getTrace(){this.trace=[];const r=this.getMatchResult(),a=this.trace[this.trace.length-1];return a.result=r,a}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Se{constructor(r){this.grammar=r,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(r){return this._input!==r&&this.replaceInputRange(0,this._input.length,r),this}replaceInputRange(r,a,p){const g=this._input,O=this._memoTable;if(r<0||r>g.length||a<0||a>g.length||r>a)throw new Error("Invalid indices: "+r+" and "+a);this._input=g.slice(0,r)+p+g.slice(a),this._input!==g&&O.length>0&&(this._isMemoTableStale=!0);const $=O.slice(a);O.length=r;for(let Q=0;Q<p.length;Q++)O.push(void 0);for(const Q of $)O.push(Q);for(let Q=0;Q<r;Q++){const Z=O[Q];Z&&Z.clearObsoleteEntries(Q,r)}return this}match(r,a={incremental:!0}){return this._match(this._getStartExpr(r),{incremental:a.incremental,tracing:!1})}trace(r,a={incremental:!0}){return this._match(this._getStartExpr(r),{incremental:a.incremental,tracing:!0})}_match(r,a={}){const p={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...a};if(!p.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Ge(this.grammar);const g=new Sr(this,r,p.positionToRecordFailures);return p.tracing?g.getTrace():g.getMatchResult()}_getStartExpr(r){const a=r||this.grammar.defaultStartRule;if(!a)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const p=this.grammar.parseApplication(a);return new Y([p,B])}}const st=[],dn=(c,r)=>Object.prototype.hasOwnProperty.call(c,r);class Xn{constructor(r,a,p){this._node=r,this.source=a,this._baseInterval=p,r.isNonterminal()&&e(a===p),this._childWrappers=[]}_forgetMemoizedResultFor(r){delete this._node[this._semantics.attributeKeys[r]],this.children.forEach(a=>{a._forgetMemoizedResultFor(r)})}child(r){if(!(0<=r&&r<this._node.numChildren()))return;let a=this._childWrappers[r];if(!a){const p=this._node.childAt(r),g=this._node.childOffsets[r],O=this._baseInterval.subInterval(g,p.matchLength),$=p.isNonterminal()?O:this._baseInterval;a=this._childWrappers[r]=this._semantics.wrap(p,O,$)}return a}_children(){for(let r=0;r<this._node.numChildren();r++)this.child(r);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(r){const a=r||[],p=a.map($=>$._node),g=new Tt(p,[],-1,!1),O=this._semantics.wrap(g,null,null);return O._childWrappers=a,O}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class _t{constructor(r,a){const p=this;if(this.grammar=r,this.checkedActionDicts=!1,this.Wrapper=class extends(a?a.Wrapper:Xn){constructor(g,O,$){super(g,O,$),p.checkActionDictsIfHaventAlready(),this._semantics=p}toString(){return"[semantics wrapper for "+p.grammar.name+"]"}},this.super=a,a){if(!(r.equals(this.super.grammar)||r._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+r.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const g in this.attributes)Object.defineProperty(this.attributeKeys,g,{value:Nt(g)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let r;for(r in this.operations)this.operations[r].checkActionDict(this.grammar);for(r in this.attributes)this.attributes[r].checkActionDict(this.grammar)}toRecipe(r){function a(g){return g.super!==_t.BuiltInSemantics._getSemantics()}let p=`(function(g) {
`;if(a(this)){p+="  var semantics = "+this.super.toRecipe(!0)+"(g";const g=this.super.grammar;let O=this.grammar;for(;O!==g;)p+=".superGrammar",O=O.superGrammar;p+=`);
`,p+="  return g.extendSemantics(semantics)"}else p+="  return g.createSemantics()";return["Operation","Attribute"].forEach(g=>{const O=this[g.toLowerCase()+"s"];Object.keys(O).forEach($=>{const{actionDict:Q,formals:Z,builtInDefault:pe}=O[$];let V=$;Z.length>0&&(V+="("+Z.join(", ")+")");let G;a(this)&&this.super[g.toLowerCase()+"s"][$]?G="extend"+g:G="add"+g,p+=`
    .`+G+"("+JSON.stringify(V)+", {";const se=[];Object.keys(Q).forEach(Ie=>{if(Q[Ie]!==pe){let je=Q[Ie].toString().trim();je=je.replace(/^.*\(/,"function("),se.push(`
      `+JSON.stringify(Ie)+": "+je)}}),p+=se.join(",")+`
    })`})}),p+=`;
  })`,r||(p=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+p+`(grammar);
  return semantics;
});
`),p}addOperationOrAttribute(r,a,p){const g=r+"s",O=An(a,r),{name:$}=O,{formals:Q}=O;this.assertNewName($,r);const Z=zn(r,$,G),pe={_default:Z};Object.keys(p).forEach(se=>{pe[se]=p[se]});const V=r==="operation"?new be($,Q,pe,Z):new Ke($,pe,Z);V.checkActionDict(this.grammar),this[g][$]=V;function G(...se){const Ie=this._semantics[g][$];if(arguments.length!==Ie.formals.length)throw new Error("Invalid number of arguments passed to "+$+" "+r+" (expected "+Ie.formals.length+", got "+arguments.length+")");const je=Object.create(null);for(const[En,er]of Object.entries(se)){const Aa=Ie.formals[En];je[Aa]=er}const ft=this.args;this.args=je;const xt=Ie.execute(this._semantics,this);return this.args=ft,xt}r==="operation"?(this.Wrapper.prototype[$]=G,this.Wrapper.prototype[$].toString=function(){return"["+$+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,$,{get:G,configurable:!0}),Object.defineProperty(this.attributeKeys,$,{value:Nt($)}))}extendOperationOrAttribute(r,a,p){const g=r+"s";if(An(a,"attribute"),!(this.super&&a in this.super[g]))throw new Error("Cannot extend "+r+" '"+a+"': did not inherit an "+r+" with that name");if(dn(this[g],a))throw new Error("Cannot extend "+r+" '"+a+"' again");const O=this[g][a].formals,$=this[g][a].actionDict,Q=Object.create($);Object.keys(p).forEach(Z=>{Q[Z]=p[Z]}),this[g][a]=r==="operation"?new be(a,O,Q):new Ke(a,Q),this[g][a].checkActionDict(this.grammar)}assertNewName(r,a){if(dn(Xn.prototype,r))throw new Error("Cannot add "+a+" '"+r+"': that's a reserved name");if(r in this.operations)throw new Error("Cannot add "+a+" '"+r+"': an operation with that name already exists");if(r in this.attributes)throw new Error("Cannot add "+a+" '"+r+"': an attribute with that name already exists")}wrap(r,a,p){const g=p||a;return r instanceof this.Wrapper?r:new this.Wrapper(r,a,g)}}function An(c,r){if(!_t.prototypeGrammar)return e(c.indexOf("(")===-1),{name:c,formals:[]};const a=_t.prototypeGrammar.match(c,r==="operation"?"OperationSignature":"AttributeSignature");if(a.failed())throw new Error(a.message);return _t.prototypeGrammarSemantics(a).parse()}function zn(c,r,a){return function(...p){const O=(this._semantics.operations[r]||this._semantics.attributes[r]).formals.map($=>this.args[$]);if(!this.isIteration()&&p.length===1)return a.apply(p[0],O);throw vt(this.ctorName,r,c,st)}}_t.createSemantics=function(c,r){const a=new _t(c,r!==void 0?r:_t.BuiltInSemantics._getSemantics()),p=function(O){if(!(O instanceof h))throw new TypeError("Semantics expected a MatchResult, but got "+J(O));if(O.failed())throw new TypeError("cannot apply Semantics to "+O.toString());const $=O._cst;if($.grammar!==c)throw new Error("Cannot use a MatchResult from grammar '"+$.grammar.name+"' with a semantics for '"+c.name+"'");const Q=new $e(O.input);return a.wrap($,Q.interval(O._cstOffset,O.input.length))};return p.addOperation=function(g,O){return a.addOperationOrAttribute("operation",g,O),p},p.extendOperation=function(g,O){return a.extendOperationOrAttribute("operation",g,O),p},p.addAttribute=function(g,O){return a.addOperationOrAttribute("attribute",g,O),p},p.extendAttribute=function(g,O){return a.extendOperationOrAttribute("attribute",g,O),p},p._getActionDict=function(g){const O=a.operations[g]||a.attributes[g];if(!O)throw new Error('"'+g+'" is not a valid operation or attribute name in this semantics for "'+c.name+'"');return O.actionDict},p._remove=function(g){let O;return g in a.operations?(O=a.operations[g],delete a.operations[g]):g in a.attributes&&(O=a.attributes[g],delete a.attributes[g]),delete a.Wrapper.prototype[g],O},p.getOperationNames=function(){return Object.keys(a.operations)},p.getAttributeNames=function(){return Object.keys(a.attributes)},p.getGrammar=function(){return a.grammar},p.toRecipe=function(g){return a.toRecipe(g)},p.toString=a.toString.bind(a),p._getSemantics=function(){return a},p};class be{constructor(r,a,p,g){this.name=r,this.formals=a,this.actionDict=p,this.builtInDefault=g}checkActionDict(r){r._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(r,a){try{const{ctorName:p}=a._node;let g=this.actionDict[p];return g?(st.push([this,p]),g.apply(a,a._children())):a.isNonterminal()&&(g=this.actionDict._nonterminal,g)?(st.push([this,"_nonterminal",p]),g.apply(a,a._children())):(st.push([this,"default action",p]),this.actionDict._default.apply(a,a._children()))}finally{st.pop()}}}be.prototype.typeName="operation";class Ke extends be{constructor(r,a,p){super(r,[],a,p)}execute(r,a){const p=a._node,g=r.attributeKeys[this.name];return dn(p,g)||(p[g]=be.prototype.execute.call(this,r,a)),p[g]}}Ke.prototype.typeName="attribute";const ht=["_iter","_terminal","_nonterminal","_default"];function He(c){return Object.keys(c.rules).sort().map(r=>c.rules[r])}const Ct=c=>c.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Ht,wt;class et{constructor(r,a,p,g){if(this.name=r,this.superGrammar=a,this.rules=p,g){if(!(g in p))throw new Error("Invalid start rule: '"+g+"' is not a rule in grammar '"+r+"'");this.defaultStartRule=g}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Se(this)}isBuiltIn(){return this===et.ProtoBuiltInRules||this===et.BuiltInRules}equals(r){if(this===r)return!0;if(r==null||this.name!==r.name||this.defaultStartRule!==r.defaultStartRule||!(this.superGrammar===r.superGrammar||this.superGrammar.equals(r.superGrammar)))return!1;const a=He(this),p=He(r);return a.length===p.length&&a.every((g,O)=>g.description===p[O].description&&g.formals.join(",")===p[O].formals.join(",")&&g.body.toString()===p[O].body.toString())}match(r,a){const p=this.matcher();return p.replaceInputRange(0,0,r),p.match(a)}trace(r,a){const p=this.matcher();return p.replaceInputRange(0,0,r),p.trace(a)}createSemantics(){return _t.createSemantics(this)}extendSemantics(r){return _t.createSemantics(this,r._getSemantics())}_checkTopDownActionDict(r,a,p){const g=[];for(const O in p){const $=p[O];if(!ht.includes(O)&&!(O in this.rules)){g.push(`'${O}' is not a valid semantic action for '${this.name}'`);continue}if(typeof $!="function"){g.push(`'${O}' must be a function in an action dictionary for '${this.name}'`);continue}const Z=$.length,pe=this._topDownActionArity(O);if(Z!==pe){let V;O==="_iter"||O==="_nonterminal"?V=`it should use a rest parameter, e.g. \`${O}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:V=`expected ${pe}, got ${Z}`,g.push(`Semantic action '${O}' has the wrong arity: ${V}`)}}if(g.length>0){const O=g.map(Q=>"- "+Q),$=new Error([`Found errors in the action dictionary of the '${a}' ${r}:`,...O].join(`
`));throw $.problems=g,$}}_topDownActionArity(r){return ht.includes(r)?0:this.rules[r].body.getArity()}_inheritsFrom(r){let a=this.superGrammar;for(;a;){if(a.equals(r,!0))return!0;a=a.superGrammar}return!1}toRecipe(r=void 0){const a={};this.source&&(a.source=this.source.contents);let p=null;this.defaultStartRule&&(p=this.defaultStartRule);const g={};Object.keys(this.rules).forEach(Q=>{const Z=this.rules[Q],{body:pe}=Z,V=!this.superGrammar||!this.superGrammar.rules[Q];let G;V?G="define":G=pe instanceof ie?"extend":"override";const se={};if(Z.source&&this.source){const ft=Z.source.relativeTo(this.source);se.sourceInterval=[ft.startIdx,ft.endIdx]}const Ie=V?Z.description:null,je=pe.outputRecipe(Z.formals,this.source);g[Q]=[G,se,Ie,Z.formals,je]});let O="null";r?O=r:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(O=this.superGrammar.toRecipe());const $=[...["grammar",a,this.name].map(JSON.stringify),O,...[p,g].map(JSON.stringify)];return Ct(`[${$.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const r=new v;r.append("{");let a=!0;for(const p in this.rules){const{body:g}=this.rules[p];a?a=!1:r.append(","),r.append(`
`),r.append("  "),this.addSemanticActionTemplate(p,g,r)}return r.append(`
}`),r.contents()}addSemanticActionTemplate(r,a,p){p.append(r),p.append(": function(");const g=this._topDownActionArity(r);p.append(o("_",g).join(", ")),p.append(`) {
`),p.append("  }")}parseApplication(r){let a;if(r.indexOf("<")===-1)a=new te(r);else{const g=Ht.match(r,"Base_application");a=wt(g,{})}if(!(a.ruleName in this.rules))throw Re(a.ruleName,this.name);const{formals:p}=this.rules[a.ruleName];if(p.length!==a.args.length){const{source:g}=this.rules[a.ruleName];throw K(a.ruleName,p.length,a.args.length,g)}return a}_setUpMatchState(r){this._matchStateInitializer&&this._matchStateInitializer(r)}}et.ProtoBuiltInRules=new et("ProtoBuiltInRules",void 0,{any:{body:D,formals:[],description:"any character",primitive:!0},end:{body:B,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new Kt(new F(0)),formals:["str"],primitive:!0},lower:{body:new Ce("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new Ce("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new Ce("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new ce(new te("space")),formals:[]},space:{body:new y("\0"," "),formals:[],description:"a space"}}),et.initApplicationParser=function(c,r){Ht=c,wt=r};class Et{constructor(r){this.name=r}sourceInterval(r,a){return this.source.subInterval(r,a-r)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?et.ProtoBuiltInRules:et.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(r,a){const p=this.ensureSuperGrammar().rules[r];if(!p)throw P(r,this.superGrammar.name,a);return p}installOverriddenOrExtendedRule(r,a,p,g){const O=f(a);if(O.length>0)throw H(r,O,g);const $=this.ensureSuperGrammar().rules[r],Q=$.formals,Z=Q?Q.length:0;if(a.length!==Z)throw K(r,Z,a.length,g);return this.install(r,a,p,$.description,g)}install(r,a,p,g,O,$=!1){return this.rules[r]={body:p.introduceParams(a),formals:a,description:g,source:O,primitive:$},this}withSuperGrammar(r){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=r,this.rules=Object.create(r.rules),r.isBuiltIn()||(this.defaultStartRule=r.defaultStartRule),this}withDefaultStartRule(r){return this.defaultStartRule=r,this}withSource(r){return this.source=new $e(r).interval(0,r.length),this}build(){const r=new et(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);r._matchStateInitializer=r.superGrammar._matchStateInitializer,r.supportsIncrementalParsing=r.superGrammar.supportsIncrementalParsing;const a=[];let p=!1;return Object.keys(r.rules).forEach(g=>{const{body:O}=r.rules[g];try{O.assertChoicesHaveUniformArity(g)}catch($){a.push($)}try{O.assertAllApplicationsAreValid(g,r)}catch($){a.push($),p=!0}}),p||Object.keys(r.rules).forEach(g=>{const{body:O}=r.rules[g];try{O.assertIteratedExprsAreNotNullable(r,[])}catch($){a.push($)}}),a.length>0&&lt(a),this.source&&(r.source=this.source),r}define(r,a,p,g,O,$){if(this.ensureSuperGrammar(),this.superGrammar.rules[r])throw R(r,this.name,this.superGrammar.name,O);if(this.rules[r])throw R(r,this.name,this.name,O);const Q=f(a);if(Q.length>0)throw H(r,Q,O);return this.install(r,a,p,g,O,$)}override(r,a,p,g,O){return this.ensureSuperGrammarRuleForOverriding(r,O),this.installOverriddenOrExtendedRule(r,a,p,O),this}extend(r,a,p,g,O){if(!this.ensureSuperGrammar().rules[r])throw M(r,this.superGrammar.name,O);const Q=new ie(this.superGrammar,r,p);return Q.source=p.source,this.installOverriddenOrExtendedRule(r,a,Q,O),this}}class Ot{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(r){return new Et(r)}grammar(r,a,p,g,O){const $=new Et(a);return p&&$.withSuperGrammar(p instanceof et?p:this.fromRecipe(p)),g&&$.withDefaultStartRule(g),r&&r.source&&$.withSource(r.source),this.currentDecl=$,Object.keys(O).forEach(Q=>{this.currentRuleName=Q;const Z=O[Q],pe=Z[0],V=Z[1],G=Z[2],se=Z[3],Ie=this.fromRecipe(Z[4]);let je;$.source&&V&&V.sourceInterval&&(je=$.source.subInterval(V.sourceInterval[0],V.sourceInterval[1]-V.sourceInterval[0])),$[pe](Q,se,Ie,G,je)}),this.currentRuleName=this.currentDecl=null,$.build()}terminal(r){return new L(r)}range(r,a){return new y(r,a)}param(r){return new F(r)}alt(...r){let a=[];for(let p of r)p instanceof U||(p=this.fromRecipe(p)),p instanceof j?a=a.concat(p.terms):a.push(p);return a.length===1?a[0]:new j(a)}seq(...r){let a=[];for(let p of r)p instanceof U||(p=this.fromRecipe(p)),p instanceof Y?a=a.concat(p.factors):a.push(p);return a.length===1?a[0]:new Y(a)}star(r){return r instanceof U||(r=this.fromRecipe(r)),new ce(r)}plus(r){return r instanceof U||(r=this.fromRecipe(r)),new ke(r)}opt(r){return r instanceof U||(r=this.fromRecipe(r)),new ze(r)}not(r){return r instanceof U||(r=this.fromRecipe(r)),new ye(r)}lookahead(r){return r instanceof U||(r=this.fromRecipe(r)),new ge(r)}lex(r){return r instanceof U||(r=this.fromRecipe(r)),new Be(r)}app(r,a){return a&&a.length>0&&(a=a.map(function(p){return p instanceof U?p:this.fromRecipe(p)},this)),new te(r,a)}splice(r,a){return new me(this.currentDecl.superGrammar,this.currentRuleName,r.map(p=>this.fromRecipe(p)),a.map(p=>this.fromRecipe(p)))}fromRecipe(r){const a=r[0]==="grammar"?r.slice(1):r.slice(2),p=this[r[0]](...a),g=r[1];return g&&g.sourceInterval&&this.currentDecl&&p.withSource(this.currentDecl.sourceInterval(...g.sourceInterval)),p}}function Qe(c){return typeof c=="function"?c.call(new Ot):(typeof c=="string"&&(c=JSON.parse(c)),new Ot().fromRecipe(c))}var It=Qe(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);et.BuiltInRules=It,re(et.BuiltInRules);var _n=Qe(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const ct=Object.create(U.prototype);function Cn(c,r){for(const a in c)if(a===r)return!0;return!1}function hn(c,r,a){const p=new Ot;let g,O,$,Q=!1;return(a||_n).createSemantics().addOperation("visit",{Grammars(V){return V.children.map(G=>G.visit())},Grammar(V,G,se,Ie,je){const ft=V.visit();g=p.newGrammar(ft),G.child(0)&&G.child(0).visit(),Ie.children.map(En=>En.visit());const xt=g.build();if(xt.source=this.source.trimmed(),Cn(r,ft))throw Ae(xt);return r[ft]=xt,xt},SuperGrammar(V,G){const se=G.visit();if(se==="null")g.withSuperGrammar(null);else{if(!r||!Cn(r,se))throw oe(se,r,G.source);g.withSuperGrammar(r[se])}},Rule_define(V,G,se,Ie,je){O=V.visit(),$=G.children.map(er=>er.visit())[0]||[],!g.defaultStartRule&&g.ensureSuperGrammar()!==et.ProtoBuiltInRules&&g.withDefaultStartRule(O);const ft=je.visit(),xt=se.children.map(er=>er.visit())[0],En=this.source.trimmed();return g.define(O,$,ft,xt,En)},Rule_override(V,G,se,Ie){O=V.visit(),$=G.children.map(xt=>xt.visit())[0]||[];const je=this.source.trimmed();g.ensureSuperGrammarRuleForOverriding(O,je),Q=!0;const ft=Ie.visit();return Q=!1,g.override(O,$,ft,null,je)},Rule_extend(V,G,se,Ie){O=V.visit(),$=G.children.map(xt=>xt.visit())[0]||[];const je=Ie.visit(),ft=this.source.trimmed();return g.extend(O,$,je,null,ft)},RuleBody(V,G){return p.alt(...G.visit()).withSource(this.source)},OverrideRuleBody(V,G){const se=G.visit(),Ie=se.indexOf(ct);if(Ie>=0){const je=se.slice(0,Ie),ft=se.slice(Ie+1);return ft.forEach(xt=>{if(xt===ct)throw we(xt)}),new me(g.superGrammar,O,je,ft).withSource(this.source)}else return p.alt(...se).withSource(this.source)},Formals(V,G,se){return G.visit()},Params(V,G,se){return G.visit()},Alt(V){return p.alt(...V.visit()).withSource(this.source)},TopLevelTerm_inline(V,G){const se=O+"_"+G.visit(),Ie=V.visit(),je=this.source.trimmed(),ft=!(g.superGrammar&&g.superGrammar.rules[se]);Q&&!ft?g.override(se,$,Ie,null,je):g.define(se,$,Ie,null,je);const xt=$.map(En=>p.app(En));return p.app(se,xt).withSource(Ie.source)},OverrideTopLevelTerm_superSplice(V){return ct},Seq(V){return p.seq(...V.children.map(G=>G.visit())).withSource(this.source)},Iter_star(V,G){return p.star(V.visit()).withSource(this.source)},Iter_plus(V,G){return p.plus(V.visit()).withSource(this.source)},Iter_opt(V,G){return p.opt(V.visit()).withSource(this.source)},Pred_not(V,G){return p.not(G.visit()).withSource(this.source)},Pred_lookahead(V,G){return p.lookahead(G.visit()).withSource(this.source)},Lex_lex(V,G){return p.lex(G.visit()).withSource(this.source)},Base_application(V,G){const se=G.children.map(Ie=>Ie.visit())[0]||[];return p.app(V.visit(),se).withSource(this.source)},Base_range(V,G,se){return p.range(V.visit(),se.visit()).withSource(this.source)},Base_terminal(V){return p.terminal(V.visit()).withSource(this.source)},Base_paren(V,G,se){return G.visit()},ruleDescr(V,G,se){return G.visit()},ruleDescrText(V){return this.sourceString.trim()},caseName(V,G,se,Ie,je){return se.visit()},name(V,G){return this.sourceString},nameFirst(V){},nameRest(V){},terminal(V,G,se){return G.children.map(Ie=>Ie.visit()).join("")},oneCharTerminal(V,G,se){return G.visit()},escapeChar(V){try{return q(this.sourceString)}catch(G){throw G instanceof RangeError&&G.message.startsWith("Invalid code point ")?De(V):G}},NonemptyListOf(V,G,se){return[V.visit()].concat(se.children.map(Ie=>Ie.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(c).visit()}var Jt=Qe(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);jn(et.BuiltInRules),bn(Jt);function jn(c){const r={empty(){return this.iteration()},nonEmpty(a,p,g){return this.iteration([a].concat(g.children))}};_t.BuiltInSemantics=_t.createSemantics(c,null).addOperation("asIteration",{emptyListOf:r.empty,nonemptyListOf:r.nonEmpty,EmptyListOf:r.empty,NonemptyListOf:r.nonEmpty})}function bn(c){_t.prototypeGrammarSemantics=c.createSemantics().addOperation("parse",{AttributeSignature(r){return{name:r.parse(),formals:[]}},OperationSignature(r,a){return{name:r.parse(),formals:a.children.map(p=>p.parse())[0]||[]}},Formals(r,a,p){return a.asIteration().children.map(g=>g.parse())},name(r,a){return this.sourceString}}),_t.prototypeGrammar=c}function ga(c){let r=0;const a=[0],p=()=>a[a.length-1],g={},O=/( *).*(?:$|\r?\n|\r)/g;let $;for(;($=O.exec(c))!=null;){const[Q,Z]=$;if(Q.length===0)break;const pe=Z.length,V=p(),G=r+pe;if(pe>V)a.push(pe),g[G]=1;else if(pe<V){const se=a.length;for(;p()!==pe;)a.pop();g[G]=-1*(se-a.length)}r+=Q.length}return a.length>1&&(g[r]=1-a.length),g}const Vi="an indented block",Wi="a dedent",Ki=1114112;class va extends $e{constructor(r){super(r.input),this.state=r}_indentationAt(r){return this.state.userData[r]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Ki):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Ki):super.nextCodePoint()}}class Hi extends U{constructor(r=!0){super(),this.isIndent=r}allowsSkippingPrecedingSpace(){return!0}eval(r){const{inputStream:a}=r,p=r.userData;r.doNotMemoize=!0;const g=a.pos,O=this.isIndent?1:-1;return(p[g]||0)*O>0?(r.userData=Object.create(p),r.userData[g]-=O,r.pushBinding(new _e(0),g),!0):(r.processFailure(g,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(r,a){}_isNullable(r,a){return!1}assertChoicesHaveUniformArity(r){}assertIteratedExprsAreNotNullable(r){}introduceParams(r){return this}substituteParams(r){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(r){const a=this.isIndent?Vi:Wi;return new it(this,a,"description")}}const ya=new te("indent"),ba=new te("dedent"),wa=new me(It,"any",[ya,ba],[]),Ji=new Ot().newGrammar("IndentationSensitive").withSuperGrammar(It).define("indent",[],new Hi(!0),Vi,void 0,!0).define("dedent",[],new Hi(!1),Wi,void 0,!0).extend("any",[],wa,"any character",void 0).build();Object.assign(Ji,{_matchStateInitializer(c){c.userData=ga(c.input),c.inputStream=new va(c)},supportsIncrementalParsing:!1});const Ia="17.1.0";et.initApplicationParser(_n,hn);const xa=c=>!!c.constructor&&typeof c.constructor.isBuffer=="function"&&c.constructor.isBuffer(c);function ka(c,r){const a=_n.match(c,"Grammars");if(a.failed())throw S(a);return hn(a,r)}function Sa(c,r){const a=Yi(c,r),p=Object.keys(a);if(p.length===0)throw new Error("Missing grammar definition");if(p.length>1){const O=a[p[1]].source;throw new Error(un(O.sourceString,O.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return a[p[0]]}function Yi(c,r){const a=Object.create(r||{});if(typeof c!="string")if(xa(c))c=c.toString();else throw new TypeError("Expected string as first argument, got "+J(c));return ka(c,a),a}return Yt.ExperimentalIndentationSensitive=Ji,Yt._buildGrammar=hn,Yt.grammar=Sa,Yt.grammars=Yi,Yt.makeRecipe=Qe,Yt.ohmGrammar=_n,Yt.pexprs=ni,Yt.version=Ia,Yt}var li,ms;function ia(){if(ms)return li;ms=1;const{makeRecipe:t}=Vl();return li=t(["grammar",{source:`PEP508 {
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
`],["terminal",{sourceInterval:[6127,6130]},"#"]]],["app",{sourceInterval:[6132,6135]},"any",[]]]]]}]),li}var sr={},gs;function vs(){return gs||(gs=1,function(t){var e=sr&&sr.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequirementsSyntaxError=t.semantics=void 0;const n=e(ia());t.semantics=n.default.createSemantics(),t.semantics.addOperation("extract",{File:s=>s.asIteration().children.map(u=>u.extract()).filter(Boolean),Line:(s,u)=>{var o;return((o=s.child(0))===null||o===void 0?void 0:o.extract())||null},NameReq:(s,u,o,f)=>{var x,I;return{type:"ProjectName",name:s.sourceString,versionSpec:o.extract(),extras:(x=u.child(0))===null||x===void 0?void 0:x.extract(),environmentMarkerTree:(I=f.child(0))===null||I===void 0?void 0:I.extract()}},UrlReq:(s,u,o,f,x)=>{var I,E;return{type:"ProjectURL",name:s.sourceString,url:o.extract(),extras:(I=u.child(0))===null||I===void 0?void 0:I.extract(),environmentMarkerTree:(E=x.child(0))===null||E===void 0?void 0:E.extract()}},Extras:(s,u,o)=>u.asIteration().children.map(f=>f.sourceString),RequirementsReq:(s,u)=>({type:"RequirementsFile",path:u.sourceString}),ConstraintsReq:(s,u)=>({type:"ConstraintsFile",path:u.sourceString}),UrlSpec:(s,u)=>u.sourceString,QuotedMarker:(s,u)=>u.extract(),MarkerOr_node:(s,u,o)=>({operator:"or",left:s.extract(),right:o.extract()}),MarkerAnd_node:(s,u,o)=>({operator:"and",left:s.extract(),right:o.extract()}),MarkerExpr_leaf:(s,u,o)=>({left:s.sourceString,operator:u.sourceString,right:o.sourceString}),MarkerExpr_node:(s,u,o)=>u.extract(),VersionSpec_parenthesized:(s,u,o)=>u.extract()||[],VersionMany:s=>{const u=s.asIteration().children;if(u.length!==0)return u.map(o=>o.extract())},VersionOne:(s,u)=>({operator:s.sourceString,version:u.sourceString})}),t.semantics.addOperation("extractLoosely",{LooseFile:s=>s.asIteration().children.map(u=>u.extractLoosely()).filter(Boolean),LooseLine:(s,u)=>{var o;return((o=s.child(0))===null||o===void 0?void 0:o.extractLoosely())||null},LooseNameReq:(s,u,o,f)=>({type:"ProjectName",name:s.sourceString}),LooseNonNameReq:s=>null});class i extends Error{}t.RequirementsSyntaxError=i}(sr)),sr}var Tn={},ys;function Wl(){if(ys)return Tn;ys=1,Object.defineProperty(Tn,"__esModule",{value:!0}),Tn.VersionOperator=Tn.EnvironmentMarkerVariable=void 0;var t;(function(n){n.PythonVersion="python_version",n.PythonFullVersion="python_full_version",n.OsName="os_name",n.SysPlatform="sys_platform",n.PlatformRelease="platform_release",n.PlatformSystem="platform_system",n.PlatformVersion="platform_version",n.PlatformMachine="platform_machine",n.PlatformPythonImplementation="platform_python_implementation",n.ImplementationName="implementation_name",n.ImplementationVersion="implementation_version",n.Extra="extra"})(t||(Tn.EnvironmentMarkerVariable=t={}));var e;return function(n){n.CompatibleRelease="~=",n.VersionMatching="==",n.VersionExclusion="!=",n.LessThanOrMatching="<=",n.GreaterThanOrMatching=">=",n.LessThan="<",n.GreaterThan=">",n.ArbitrarilyEqual="==="}(e||(Tn.VersionOperator=e={})),Tn}var bs;function Kl(){return bs||(bs=1,function(t){var e=fn&&fn.__createBinding||(Object.create?function(C,v,T,q){q===void 0&&(q=T);var J=Object.getOwnPropertyDescriptor(v,T);(!J||("get"in J?!v.__esModule:J.writable||J.configurable))&&(J={enumerable:!0,get:function(){return v[T]}}),Object.defineProperty(C,q,J)}:function(C,v,T,q){q===void 0&&(q=T),C[q]=v[T]}),n=fn&&fn.__exportStar||function(C,v){for(var T in C)T!=="default"&&!Object.prototype.hasOwnProperty.call(v,T)&&e(v,C,T)},i=fn&&fn.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(t,"__esModule",{value:!0}),t.parsePipRequirementsLineLoosely=t.parsePipRequirementsFileLoosely=t.parsePipRequirementsLine=t.parsePipRequirementsFile=t.RequirementsSyntaxError=void 0;const s=i(ia()),u=vs();var o=vs();Object.defineProperty(t,"RequirementsSyntaxError",{enumerable:!0,get:function(){return o.RequirementsSyntaxError}}),n(Wl(),t);function f(C){const v=s.default.match(C,"File");if(v.failed())throw new u.RequirementsSyntaxError(`Failed to parse requirements file. ${v.shortMessage}`);return(0,u.semantics)(v).extract()}t.parsePipRequirementsFile=f;function x(C){const v=s.default.match(C,"Line");if(v.failed())throw new u.RequirementsSyntaxError(`Failed to parse requirements line. ${v.shortMessage}`);return(0,u.semantics)(v).extract()}t.parsePipRequirementsLine=x;function I(C){const v=s.default.match(C,"LooseFile");if(v.failed())throw new u.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${v.shortMessage}`);return(0,u.semantics)(v).extractLoosely()}t.parsePipRequirementsFileLoosely=I;function E(C){const v=s.default.match(C,"LooseLine");if(v.failed())throw new u.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${v.shortMessage}`);return(0,u.semantics)(v).extractLoosely()}t.parsePipRequirementsLineLoosely=E}(fn)),fn}var Hl=Kl();function Jl(t){return new Worker("/assets/pyworker-C-BOLKRv.js",{type:"module",name:t==null?void 0:t.name})}let Yl=0;class Zl{constructor(){this.pendingMessages=new Map}async init(e,n){this.workspace=e,this.vars=n??{},this.worker=new Jl,this.worker.onmessage=i=>{this.handleWorkerMessage(i.data)},this.worker.onerror=i=>{console.error("Python Worker error:",i)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const i=e.payload.prompt||"Input:",s=window.prompt(i);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:s,cancelled:s===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:i,message:s}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",s,i);return}const n=this.pendingMessages.get(e.id);n&&(this.pendingMessages.delete(e.id),e.type==="success"?n.resolve(e.payload):e.type==="error"&&n.reject(new Error(e.payload.message)))}async sendMessage(e,n){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const i=`msg-${Yl++}`,s={id:i,type:e,payload:n};return new Promise((u,o)=>{this.pendingMessages.set(i,{resolve:u,reject:o}),this.worker.postMessage(s)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,n){const i=await this.sendMessage("runFunction",{name:e,args:n});return mn(ar,this.workspace),i}async setGlobal(e,n){await this.sendMessage("setGlobal",{key:e,value:n})}async mountWorkspace(e="/workspace"){const n=await Mt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:n.getHandle(),mountPoint:e})}async installDependencies(){var n;const e=await((n=this.workspace)==null?void 0:n.getResource("requirements.txt"));if(e){const i=(await e.getContents()).replaceAll("\r",""),s=Hl.parsePipRequirementsFile(i).filter(u=>"name"in u).map(u=>u.name);await this.loadPackages(s)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),mn(ar,this.workspace)}async execCode(e){const n=await this.sendMessage("execCode",{code:e});return mn(ar,this.workspace),n}async execScript(e){const n=e.split(".")[0],i=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(n,i)}async execModule(e,n){const i=await this.sendMessage("execModule",{moduleName:e,entryName:n,vars:this.vars});return mn(ar,this.workspace),i}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class Ql{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,on(xi,()=>{})}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const n=u=>{const o=u.detail;o&&Array.from(o.querySelectorAll("*")).filter(x=>x instanceof St).forEach(x=>{Me.set(x),x.isEditor&&Dr.set(x)})};e.addEventListener("tab-shown",n);const i=u=>{const o=u.detail;Array.from(o.querySelectorAll("*")).filter(x=>x instanceof St).forEach(x=>{Me.get()==x&&Me.set(null),Dr.get()==x&&Dr.set(null)})};e.addEventListener("tab-closed",i),qs(hi,u=>{const f=u.closest("wa-tab-panel").getAttribute("name");e.markDirty(f,u.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((n,i)=>(i.ranking??0)-(n.ranking??0))}async handleInput(e){for(let n=0;n<this.editorInputHandlers.length;n++){const i=this.editorInputHandlers[n];if(i.canHandle(e))return await i.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${zr}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const n=this.getEditorArea();if(!n){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(n),n.has(e.key)){n.activate(e.key);return}n.open({name:e.key,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}}const xn=new Ql;an.put("editorRegistry",xn);const Xl=`# 🌐 geo!space

**The Interactive Mapping IDE in Your Browser**
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/erdalkaraca/geospace)
[![Browser Support](https://img.shields.io/badge/Chrome%20%7C%20Opera-Supported-brightgreen)](#-browser-compatibility)
[![AI Providers](https://img.shields.io/badge/AI%20Providers-5-blue)](#-ai-configuration)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-purple)](#-key-features)
[![No Installation](https://img.shields.io/badge/Installation-None%20Required-orange)](#-quick-start)

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
- **Multiple Data Sources**: Support for OSM, GeoJSON, KML, GeoTIFF, GPX, Features, BM (basemap.de), and Overpass API
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
A: Maps: \`.geospace\` (JSON), Data: GeoJSON, KML, GPX, GeoTIFF, Features, BM (basemap.de), Overpass API. Code: Python, JavaScript, and more.

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

**Happy mapping! 🗺️✨**`;ut({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}]},handler:{execute:async({params:t})=>{const e=await Mt.getWorkspace();if(!e){tt("Please select a workspace!");return}let n=t==null?void 0:t.path;const i=t==null?void 0:t.contents,s=t==null?void 0:t.ask,u=t==null?void 0:t.extension;if((s||!n)&&(n=prompt("Enter path to new file (directories will be created if not exist):",n||""),!n)||(u&&!n.endsWith(u)&&(n+=u),await e.getResource(n)&&!confirm(`File "${n}" already exists. Do you want to overwrite it?`)))return;const f=await e.getResource(n,{create:!0});f?(i&&await f.saveContents(i),sn("File created: "+n)):tt("Could not create file: "+n)}}});ut({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{var u;let e,n=t.params&&t.params.path;if(n){const o=await Mt.getWorkspace();o&&(e=await o.getResource(n))}if(e||(e=rn.get()),!e){tt("No resource to rename provided!");return}const i=e.getName(),s=((u=t.params)==null?void 0:u.newName)||prompt(`Enter new name for "${i}":`,i);if(!(!s||s===i))try{await e.rename(s),sn(`Resource renamed to: ${s}`)}catch(o){tt(`Failed to rename ${i}: ${o.message}`)}}}});ut({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{let e,n=t.params&&t.params.path;if(n){const u=await Mt.getWorkspace();u&&(e=await u.getResource(n))}if(e||(e=rn.get()),!e){tt("No resource to delete provided!");return}n=e.getWorkspacePath();const i=t.params&&t.params.confirm;let s=!0;(i===void 0||i===!0)&&(s=window.confirm(`Are you sure you want to delete ${n}?`)),s&&e.delete().then(()=>{sn("Resource deleted: "+n)}).catch(u=>{tt(`Resource ${n} could not be deleted: `+u)})}}});ut({command:{id:"load_workspace",name:"Load workspace",description:"Loads a workspace",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Mt.connectWorkspace(e)).catch(e=>{tt(e.message)})}}});ut({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Mt.getWorkspace();e||tt("No workspace selected."),e.touch()}}});ut({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Mt.getWorkspace();e||tt("No workspace selected.");const n=t.params.path,i=await(e==null?void 0:e.getResource(n));await xn.loadEditor(i)}}});ut({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const n=new Zl,i=await Mt.getWorkspace();await n.init(i,t),await n.installDependencies(),await n.execScript(e)}}});ut({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});ut({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=Me.get();e&&e.isDirty()&&e.save()}},contribution:{target:Ti,icon:"floppy-disk",label:"Save active editor",slot:"end",disabled:()=>{const t=Me.get();return!t||!t.isDirty()}}});ut({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async t=>{const e=new _s(Xl,"README.md");await xn.loadEditor(e)}},contribution:{target:Zn,icon:"question-circle",label:"Welcome"}});ut({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{document.documentElement.classList.toggle("wa-dark")||document.documentElement.classList.toggle("wa-light")}},contribution:{target:Zn,icon:"circle-half-stroke",label:"Theme Switcher"}});ut({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:Zn,icon:"expand",label:"Fullscreen"}});ut({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:t=>{const e={title:"settings.json",data:{async getContents(){const n=await Zt.getAll();return JSON.stringify(n,void 0,2)},getName(){return e.key},saveContents(n){const i=JSON.parse(n);return Zt.setAll(i)}},key:"setting.json",icon:"gear",state:{}};e.widgetFactory=()=>ae`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,xn.loadEditor(e).then()}},contribution:{target:Zn,icon:"gear",label:"Open Settings"}});ut({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>ae`
                <k-extensions></k-extensions>`,xn.loadEditor(e).then()}},contribution:{target:Zn,icon:"puzzle-piece",label:"Open Extensions"}});Ee.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?tt(t):sn(t))}}});const sa="events/chatservice/aiConfigChanged",Tr="aiConfig",ec={defaultProvider:"ollama",providers:[{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""},{name:"openai",model:"gpt-4.1-mini",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"},{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"},{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"},{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}]},Ir="chatservice.prompts",tc={name:"openai-api",canHandle:t=>!0,completionApi:async t=>(await fetch(t.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${t.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({model:t.model,stream:t.stream,messages:t.messages,...t.chatConfig.parameters})})).json().then(n=>({role:"assistant",content:n.choices[0].message.content}))};class nc{constructor(){this.fetchers=[],this.promptContributions=[],on(Si,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.promptContributions=dt.getContributions(Ir)}registerFetcher(e){this.fetchers.push(e)}async checkAIConfig(){this.aiConfig||(this.aiConfig=await Zt.get(Tr),this.aiConfig||(await Zt.set(Tr,ec),this.aiConfig=await Zt.get(Tr)),mn(sa,this.aiConfig))}async getDefaultProvider(){var n;await this.checkAIConfig();const e=await this.getProviders();if((n=this.aiConfig)!=null&&n.defaultProvider){const i=e.find(s=>{var u;return s.name===((u=this.aiConfig)==null?void 0:u.defaultProvider)});if(i)return i}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig.defaultProvider=e,await Zt.set(Tr,this.aiConfig),this.getDefaultProvider()}async getProviders(){var e;return await this.checkAIConfig(),((e=this.aiConfig)==null?void 0:e.providers)||[]}createMessage(e){return{role:"user",content:e}}getPromptContribution(e){return this.promptContributions.find(n=>n.role===e)}async handleUserPrompt(e){const n=e.chatConfig||await this.getDefaultProvider(),i=e.chatContext,s=this.promptContributions.map(o=>{const f=e.callContext.createChild({userPrompt:i.history[i.history.length-1].content});if(o.canHandle instanceof Function&&!o.canHandle(f.getProxy()))return;const x=i.history.map(v=>{let T=v.role,q=v.content;return T!=="user"&&(T!==o.role?(T="user",q=`***Another Assistant '${v.role}' replied:***
${q}`):T="assistant"),{role:T,content:q}});let I=x[x.length-1],E=o.sysPrompt;typeof E=="function"&&(E=E()),x.unshift({role:"system",content:E});const C=async()=>{const v={model:n.model,stream:!1,messages:x,chatConfig:n};return(this.fetchers.find(q=>q.canHandle(n))||tc).completionApi(v).then(q=>q)};return o.promptDecorator instanceof Function?o.promptDecorator(f.getProxy()).then(v=>{v&&(I.content=v)}).then(C).then(async v=>(v.role=o.role,o.messageDecorator&&(f.put("message",v),o.messageDecorator(f.getProxy())),v)):C()}),u=await Promise.all(s.filter(o=>!!o));i.history.push(...u)}}const Pn=new nc;an.put("chatService",Pn);var rc=Object.defineProperty,ic=Object.getOwnPropertyDescriptor,ln=(t,e,n,i)=>{for(var s=i>1?void 0:i?ic(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&rc(e,n,s),s};let Vt=class extends St{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatContext=this.defaultChatContext,this.busy=!1,this.inputValue=""}onAIConfigChanged(){this.doBeforeUI()}onPartChanged(t){t&&"chatContext"in t?this.chatContext=t.chatContext:this.chatContext=this.defaultChatContext}doBeforeUI(){Pn.getProviders().then(t=>{this.providers=t||[]}),Pn.getDefaultProvider().then(t=>{this.defaultProvider=t})}updated(t){super.updated(t),(t.has("chatContext")||t.has("busy"))&&this.scrollToBottom()}scrollToBottom(){this.messagesContainer&&requestAnimationFrame(()=>{this.messagesContainer&&(this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight)})}onInput(t){const e=t.target;this.inputValue=e.value}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.sendMessage())}async sendMessage(){const t=this.inputValue.trim();!t||this.busy||(this.inputValue="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),await this.handlePrompt(t))}async runCommand(t,e){const n=e||Ee,i=t.trim().split(/\s+/);if(i.length===0)return;const s=i.shift(),u=n.getCommand(s);if(!u){tt("Command not found: "+s);return}const o={};i.forEach((x,I)=>{o[u.parameters[I].name]=x});const f=n.createExecutionContext(this,o);n.execute(s,f),this.requestUpdate()}async handlePrompt(t){if(t.startsWith("/")){await this.runCommand(t.substring(1),Ee);return}const e=Pn.createMessage(t);this.chatContext.history.push(e),this.requestUpdate(),this.busy=!0;const n=Me.get(),i=mr.createChild({activePart:n,activeEditor:n!=null&&n.isEditor?n:null});Wn.runAsync("Calling AI assistant",s=>Pn.handleUserPrompt({chatContext:this.chatContext,callContext:i}).then(u=>{this.requestUpdate()})).catch(s=>{tt(`${s}`)}).finally(()=>{this.busy=!1,i.destroy()})}async onChangeDefaultProvider(t){this.defaultProvider=await Pn.setDefaultProvider(t.currentTarget.value)}copyToClipboard(t){navigator.clipboard.writeText(t).then(()=>{}).catch(e=>{tt(`Failed to copy: ${e}`)})}formatTimestamp(t=new Date){return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderMessage(t){var s;const e=t.role==="user",n=Pn.getPromptContribution(t.role),i=(n==null?void 0:n.label)||t.role;return ae`
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
                        ${gn((s=t.actions)==null?void 0:s.length,()=>{var u;return ae`
                            ${(u=t.actions)==null?void 0:u.map(o=>ae`
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
                    ${Kr(We.parse(t.content))}
                </div>
            </div>
        `}renderLoadingIndicator(){return ae`
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
        `}render(){var t;return ae`
            <div class="chat-container">
                ${gn(!this.defaultProvider,()=>ae`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Select a provider from the menu below</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map(e=>this.renderMessage(e))}
                    ${gn(this.busy,()=>this.renderLoadingIndicator())}
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
                            ${(t=this.providers)==null?void 0:t.map(e=>{var n;return ae`
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
        `}};Vt.styles=$t`
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
    `;ln([gt()],Vt.prototype,"chatContext",2);ln([gt()],Vt.prototype,"providers",2);ln([gt()],Vt.prototype,"defaultProvider",2);ln([gt()],Vt.prototype,"busy",2);ln([gt()],Vt.prototype,"inputValue",2);ln([Cs(".chat-messages")],Vt.prototype,"messagesContainer",2);ln([Cs("wa-textarea")],Vt.prototype,"textareaElement",2);ln([Ii(sa)],Vt.prototype,"onAIConfigChanged",1);ln([Ei(Me)],Vt.prototype,"onPartChanged",1);Vt=ln([mt("k-aiassist")],Vt);var sc=Object.defineProperty,ac=Object.getOwnPropertyDescriptor,aa=(t,e,n,i)=>{for(var s=i>1?void 0:i?ac(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&sc(e,n,s),s};let Vr=class extends St{doInitUI(){on(fi,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){at.enable(t.id,!0),this.requestUpdate()}disable(t){at.disable(t.id,!0),this.requestUpdate()}selectionChanged(t){this.selectedExtension=t.detail.selection[0].model}render(){return ae`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree style="--indent-guide-width: 1px;" slot="start"
                         @wa-selection-change="${this.selectionChanged}">
                    ${at.getExtensions().map(t=>ae`
                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t} expanded>
                            <span>${Ft(t.icon)} ${t.name}</span>
                        </wa-tree-item>`)}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${gn(this.selectedExtension,t=>ae`
                        <h1>${Ft(t.icon)} ${t.name}</h1>
                        <hr>
                        <div>
                            ${gn(at.isEnabled(t.id),()=>ae`
                                <wa-button title="Disable this extension" @click="${()=>this.disable(t)}"
                                           variant="danger" appearance="plain">
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>`,()=>ae`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(t)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${gn(t.experimental,()=>ae`
                            <div>
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}
                        ${t.description}
                    `)}
                </div>
            </wa-split-panel>
        `}};Vr.styles=$t`
        :host {
        }
    `;aa([gt()],Vr.prototype,"selectedExtension",2);Vr=aa([mt("k-extensions")],Vr);var oc=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,ti=(t,e,n,i)=>{for(var s=i>1?void 0:i?lc(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&oc(e,n,s),s};let Jn=class extends St{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Rn()}connectedCallback(){super.connectedCallback(),Qa(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Xa()}log(t,e,n="info"){const i={timestamp:new Date,level:n,source:t,message:e};this.messages=[...this.messages,i],this.autoScroll&&this.updateComplete.then(()=>{const s=this.containerRef.value;s&&(s.scrollTop=s.scrollHeight)})}clear(){this.messages=[]}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}render(){const t=this.getFilteredMessages();return ae`
            <div class="log-terminal">
                <!-- Toolbar -->
                <div class="toolbar">
                    <div class="filters">
                        <wa-button-group>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter==="all"?"primary":"default"}"
                                @click=${()=>this.filter="all"}>
                                All (${this.messages.length})
                            </wa-button>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter==="info"?"primary":"default"}"
                                @click=${()=>this.filter="info"}>
                                <wa-icon name="circle-info" label="Info"></wa-icon> Info
                            </wa-button>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter==="warning"?"primary":"default"}"
                                @click=${()=>this.filter="warning"}>
                                <wa-icon name="triangle-exclamation" label="Warnings"></wa-icon> Warnings
                            </wa-button>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter==="error"?"primary":"default"}"
                                @click=${()=>this.filter="error"}>
                                <wa-icon name="circle-xmark" label="Errors"></wa-icon> Errors
                            </wa-button>
                            <wa-button 
                                size="small" 
                                appearance="plain"
                                variant="${this.filter==="debug"?"primary":"default"}"
                                @click=${()=>this.filter="debug"}>
                                <wa-icon name="bug" label="Debug"></wa-icon> Debug
                            </wa-button>
                        </wa-button-group>
                    </div>
                    
                    <div class="actions">
                        <wa-button 
                            size="small" 
                            appearance="plain"
                            variant="${this.autoScroll?"primary":"default"}"
                            @click=${()=>this.autoScroll=!this.autoScroll}>
                            <wa-icon name="arrow-down" label="Auto-scroll"></wa-icon>
                            ${this.autoScroll?"Auto-scroll":"Manual"}
                        </wa-button>
                        <wa-button 
                            size="small" 
                            appearance="plain"
                            @click=${()=>this.clear()}>
                            <wa-icon name="trash" label="Clear logs"></wa-icon>
                            Clear
                        </wa-button>
                    </div>
                </div>

                <!-- Messages -->
                <div class="messages" ${Ln(this.containerRef)}>
                    ${t.length===0?ae`<div class="empty-state">No log messages</div>`:t.map(e=>ae`
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
        `}};Jn.styles=$t`
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

        .toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem;
            border-bottom: 1px solid var(--wa-color-neutral-border);
            flex-shrink: 0;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .filters, .actions {
            display: flex;
            gap: 0.5rem;
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
    `;ti([gt()],Jn.prototype,"messages",2);ti([gt()],Jn.prototype,"autoScroll",2);ti([gt()],Jn.prototype,"filter",2);Jn=ti([mt("k-log-terminal")],Jn);var cc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,Qt=(t,e,n,i)=>{for(var s=i>1?void 0:i?uc(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&cc(e,n,s),s};let qt=class extends Zr{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const t=Fs.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),on(gr,()=>{this.dropdown&&this.loadDropdownContributions()}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=dt.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){var e;if("command"in t){const n=t,i=(e=n.disabled)==null?void 0:e.get();return ae`
                <k-command 
                    cmd="${n.command}"
                    icon="${n.icon||""}"
                    ?disabled="${i}">
                    ${n.label}
                </k-command>
            `}if("html"in t){const i=t.html;return i instanceof Function?i():Kr(i)}return Dt}render(){const t=this.getKeybinding();return this.isInDropdown()?ae`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    ${Ft(this.icon,this.title)}
                    <slot></slot>
                    ${t?ae`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?ae`
                <wa-dropdown placement=${this.placement}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        title=${t?`${this.title} (${t})`:this.title}>
                        ${Ft(this.icon,this.title)}
                        <slot></slot>
                    </wa-button>
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?ae`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                        </k-command>
                    `:Dt}
                </wa-dropdown>
            `:ae`
            <wa-button 
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${()=>this.handleClick()}>
                ${Ft(this.icon,this.title)}
                <slot></slot>
            </wa-button>
        `}};qt.styles=$t`
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
    `;Qt([nt()],qt.prototype,"cmd",2);Qt([nt()],qt.prototype,"title",2);Qt([nt()],qt.prototype,"icon",2);Qt([nt({type:Boolean})],qt.prototype,"disabled",2);Qt([nt()],qt.prototype,"appearance",2);Qt([nt()],qt.prototype,"size",2);Qt([nt({type:Object,attribute:!1})],qt.prototype,"params",2);Qt([nt()],qt.prototype,"dropdown",2);Qt([nt()],qt.prototype,"placement",2);Qt([gt()],qt.prototype,"dropdownContributions",2);qt=Qt([mt("k-command")],qt);var pc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,ji=(t,e,n,i)=>{for(var s=i>1?void 0:i?dc(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&pc(e,n,s),s};let hr=class extends Zr{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return ae`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};hr.styles=$t`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;ji([nt()],hr.prototype,"message",2);ji([nt()],hr.prototype,"icon",2);hr=ji([mt("k-no-content")],hr);var hc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,xr=(t,e,n,i)=>{for(var s=i>1?void 0:i?fc(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&hc(e,n,s),s};let Yn=class extends Zr{constructor(){super(...arguments),this.family="regular"}render(){return Ft(this.name,this.label,this.family,this.variant)}};xr([nt()],Yn.prototype,"name",2);xr([nt()],Yn.prototype,"family",2);xr([nt()],Yn.prototype,"variant",2);xr([nt()],Yn.prototype,"label",2);Yn=xr([mt("k-icon")],Yn);function Pr(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ci={exports:{}},ws;function mc(){return ws||(ws=1,function(t,e){(function(n){t.exports=n()})(function(){return function(){function n(i,s,u){function o(I,E){if(!s[I]){if(!i[I]){var C=typeof Pr=="function"&&Pr;if(!E&&C)return C(I,!0);if(f)return f(I,!0);var v=new Error("Cannot find module '"+I+"'");throw v.code="MODULE_NOT_FOUND",v}var T=s[I]={exports:{}};i[I][0].call(T.exports,function(q){var J=i[I][1][q];return o(J||q)},T,T.exports,n,i,s,u)}return s[I].exports}for(var f=typeof Pr=="function"&&Pr,x=0;x<u.length;x++)o(u[x]);return o}return n}()({1:[function(n,i,s){const u=n("./utils"),o=function(){const f=u.stringToArray,x=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],I=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],E=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],C=["Thousand","Million","Billion","Trillion"];function v(P,M){var R=function(X,H,z){var ee="";if(X<=19)ee=(H?" and ":"")+(z?I[X]:x[X]);else if(X<100){const Te=Math.floor(X/10),Le=X%10;ee=(H?" and ":"")+E[Te-2],Le>0?ee+="-"+R(Le,!1,z):z&&(ee=ee.substring(0,ee.length-1)+"ieth")}else if(X<1e3){const Te=Math.floor(X/100),Le=X%100;ee=(H?", ":"")+x[Te]+" Hundred",Le>0?ee+=R(Le,!0,z):z&&(ee+="th")}else{var he=Math.floor(Math.log10(X)/3);he>C.length&&(he=C.length);const Te=Math.pow(10,he*3),Le=Math.floor(X/Te),de=X-Le*Te;ee=(H?", ":"")+R(Le,!1,!1)+" "+C[he-1],de>0?ee+=R(de,!0,z):z&&(ee+="th")}return ee},K=R(P,!1,M);return K}const T={};x.forEach(function(P,M){T[P.toLowerCase()]=M}),I.forEach(function(P,M){T[P.toLowerCase()]=M}),E.forEach(function(P,M){const R=P.toLowerCase();T[R]=(M+2)*10,T[R.substring(0,P.length-1)+"ieth"]=T[R]}),T.hundredth=100,C.forEach(function(P,M){const R=P.toLowerCase(),K=Math.pow(10,(M+1)*3);T[R]=K,T[R+"th"]=K});function q(P){const R=P.split(/,\s|\sand\s|[\s\\-]/).map(H=>T[H]);let K=[0];return R.forEach(H=>{if(H<100){let z=K.pop();z>=1e3&&(K.push(z),z=0),K.push(z+H)}else K.push(K.pop()*H)}),K.reduce((H,z)=>H+z,0)}const J=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],ve={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function Oe(P){for(var M=0;M<J.length;M++){const R=J[M];if(P>=R[0])return R[1]+Oe(P-R[0])}return""}function U(P){for(var M=0,R=1,K=P.length-1;K>=0;K--){const X=P[K],H=ve[X];H<R?M-=H:(R=H,M+=H)}return M}function D(P,M){for(var R=[],K=M.charCodeAt(0);P>0;)R.unshift(String.fromCharCode((P-1)%26+K)),P=Math.floor((P-1)/26);return R.join("")}function B(P,M){for(var R=M.charCodeAt(0),K=0,X=0;X<P.length;X++)K+=(P.charCodeAt(P.length-X-1)-R+1)*Math.pow(26,X);return K}function L(P,M){if(typeof P>"u")return;P=Math.floor(P);const R=me(M);return j(P,R)}const y={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},F={UPPER:"upper",LOWER:"lower",TITLE:"title"};function j(P,M){let R;const K=P<0;switch(P=Math.abs(P),M.primary){case y.LETTERS:R=D(P,M.case===F.UPPER?"A":"a");break;case y.ROMAN:R=Oe(P),M.case===F.UPPER&&(R=R.toUpperCase());break;case y.WORDS:R=v(P,M.ordinal),M.case===F.UPPER?R=R.toUpperCase():M.case===F.LOWER&&(R=R.toLowerCase());break;case y.DECIMAL:R=""+P;var X=M.mandatoryDigits-R.length;if(X>0){var H=new Array(X+1).join("0");R=H+R}if(M.zeroCode!==48&&(R=f(R).map(Te=>String.fromCodePoint(Te.codePointAt(0)+M.zeroCode-48)).join("")),M.regular){const Te=Math.floor((R.length-1)/M.groupingSeparators.position);for(let Le=Te;Le>0;Le--){const de=R.length-Le*M.groupingSeparators.position;R=R.substr(0,de)+M.groupingSeparators.character+R.substr(de)}}else M.groupingSeparators.reverse().forEach(Te=>{const Le=R.length-Te.position;R=R.substr(0,Le)+Te.character+R.substr(Le)});if(M.ordinal){var z={1:"st",2:"nd",3:"rd"},ee=R[R.length-1],he=z[ee];(!he||R.length>1&&R[R.length-2]==="1")&&(he="th"),R=R+he}break;case y.SEQUENCE:throw{code:"D3130",value:M.token}}return K&&(R="-"+R),R}const ie=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function me(P){const M={type:"integer",primary:y.DECIMAL,case:F.LOWER,ordinal:!1};let R,K;const X=P.lastIndexOf(";");switch(X===-1?R=P:(R=P.substring(0,X),K=P.substring(X+1),K[0]==="o"&&(M.ordinal=!0)),R){case"A":M.case=F.UPPER;case"a":M.primary=y.LETTERS;break;case"I":M.case=F.UPPER;case"i":M.primary=y.ROMAN;break;case"W":M.case=F.UPPER,M.primary=y.WORDS;break;case"Ww":M.case=F.TITLE,M.primary=y.WORDS;break;case"w":M.primary=y.WORDS;break;default:{let H=null,z=0,ee=0,he=[],Te=0;if(f(R).map(de=>de.codePointAt(0)).reverse().forEach(de=>{let we=!1;for(let De=0;De<ie.length;De++){const ue=ie[De];if(de>=ue&&de<=ue+9){if(we=!0,z++,Te++,H===null)H=ue;else if(ue!==H)throw{code:"D3131"};break}}we||(de===35?(Te++,ee++):he.push({position:Te,character:String.fromCodePoint(de)}))}),z>0){M.primary=y.DECIMAL,M.zeroCode=H,M.mandatoryDigits=z,M.optionalDigits=ee;const we=function(De){if(De.length===0)return 0;const ue=De[0].character;for(let lt=1;lt<De.length;lt++)if(De[lt].character!==ue)return 0;const ot=De.map(lt=>lt.position),Lt=function(lt,yt){return yt===0?lt:Lt(yt,lt%yt)},vt=ot.reduce(Lt);for(let lt=1;lt<=ot.length;lt++)if(ot.indexOf(lt*vt)===-1)return 0;return vt}(he);we>0?(M.regular=!0,M.groupingSeparators={position:we,character:he[0].character}):(M.regular=!1,M.groupingSeparators=he)}else M.primary=y.SEQUENCE,M.token=R}}return M}const Y={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function ne(P){var M=[];const R={type:"datetime",parts:M},K=function(we,De){if(De>we){let ue=P.substring(we,De);ue=ue.split("]]").join("]"),M.push({type:"literal",value:ue})}};for(var X=0,H=0;H<P.length;){if(P.charAt(H)==="["){if(P.charAt(H+1)==="["){K(X,H),M.push({type:"literal",value:"["}),H+=2,X=H;continue}if(K(X,H),X=H,H=P.indexOf("]",X),H===-1)throw{code:"D3135"};let we=P.substring(X+1,H);we=we.split(/\s+/).join("");var z={type:"marker",component:we.charAt(0)},ee=we.lastIndexOf(","),he;if(ee!==-1){const De=we.substring(ee+1),ue=De.indexOf("-");let ot,Lt;const vt=function(yt){if(!(typeof yt>"u"||yt==="*"))return parseInt(yt)};ue===-1?ot=De:(ot=De.substring(0,ue),Lt=De.substring(ue+1));const lt={min:vt(ot),max:vt(Lt)};z.width=lt,he=we.substring(1,ee)}else he=we.substring(1);if(he.length===1)z.presentation1=he;else if(he.length>1){var Te=he.charAt(he.length-1);"atco".indexOf(Te)!==-1?(z.presentation2=Te,Te==="o"&&(z.ordinal=!0),z.presentation1=he.substring(0,he.length-1)):z.presentation1=he}else z.presentation1=Y[z.component];if(typeof z.presentation1>"u")throw{code:"D3132",value:z.component};if(z.presentation1[0]==="n")z.names=F.LOWER;else if(z.presentation1[0]==="N")z.presentation1[1]==="n"?z.names=F.TITLE:z.names=F.UPPER;else if("YMDdFWwXxHhmsf".indexOf(z.component)!==-1){var Le=z.presentation1;if(z.presentation2&&(Le+=";"+z.presentation2),z.integerFormat=me(Le),z.width&&z.width.min!==void 0&&z.integerFormat.mandatoryDigits<z.width.min&&(z.integerFormat.mandatoryDigits=z.width.min),"YMD".indexOf(z.component)!==-1)if(z.n=-1,z.width&&z.width.max!==void 0)z.n=z.width.max,z.integerFormat.mandatoryDigits=z.n;else{var de=z.integerFormat.mandatoryDigits+z.integerFormat.optionalDigits;de>=2&&(z.n=de)}}(z.component==="Z"||z.component==="z")&&(z.integerFormat=me(z.presentation1)),M.push(z),X=H+1}H++}return K(X,H),R}const ce=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ke=["January","February","March","April","May","June","July","August","September","October","November","December"],ze=1e3*60*60*24,ye=function(P){const M=Date.UTC(P.year,P.month);var R=new Date(M).getUTCDay();return R===0&&(R=7),R>4?M+(8-R)*ze:M-(R-1)*ze},ge=function(P,M){return{year:P,month:M,nextMonth:function(){return M===11?ge(P+1,0):ge(P,M+1)},previousMonth:function(){return M===0?ge(P-1,11):ge(P,M-1)},nextYear:function(){return ge(P+1,M)},previousYear:function(){return ge(P-1,M)}}},Be=function(P,M){return(M-P)/(ze*7)+1},te=(P,M)=>{let R;switch(M){case"Y":R=P.getUTCFullYear();break;case"M":R=P.getUTCMonth()+1;break;case"D":R=P.getUTCDate();break;case"d":{const K=Date.UTC(P.getUTCFullYear(),P.getUTCMonth(),P.getUTCDate()),X=Date.UTC(P.getUTCFullYear(),0);R=(K-X)/ze+1;break}case"F":R=P.getUTCDay(),R===0&&(R=7);break;case"W":{const K=ge(P.getUTCFullYear(),0),X=ye(K),H=Date.UTC(K.year,P.getUTCMonth(),P.getUTCDate());let z=Be(X,H);if(z>52){const ee=ye(K.nextYear());H>=ee&&(z=1)}else if(z<1){const ee=ye(K.previousYear());z=Be(ee,H)}R=Math.floor(z);break}case"w":{const K=ge(P.getUTCFullYear(),P.getUTCMonth()),X=ye(K),H=Date.UTC(K.year,K.month,P.getUTCDate());let z=Be(X,H);if(z>4){const ee=ye(K.nextMonth());H>=ee&&(z=1)}else if(z<1){const ee=ye(K.previousMonth());z=Be(ee,H)}R=Math.floor(z);break}case"X":{const K=ge(P.getUTCFullYear(),0),X=ye(K),H=ye(K.nextYear()),z=P.getTime();z<X?R=K.year-1:z>=H?R=K.year+1:R=K.year;break}case"x":{const K=ge(P.getUTCFullYear(),P.getUTCMonth()),X=ye(K),H=K.nextMonth(),z=ye(H),ee=P.getTime();ee<X?R=K.previousMonth().month+1:ee>=z?R=H.month+1:R=K.month+1;break}case"H":R=P.getUTCHours();break;case"h":R=P.getUTCHours(),R=R%12,R===0&&(R=12);break;case"P":R=P.getUTCHours()>=12?"pm":"am";break;case"m":R=P.getUTCMinutes();break;case"s":R=P.getUTCSeconds();break;case"f":R=P.getUTCMilliseconds();break;case"Z":case"z":break;case"C":R="ISO";break;case"E":R="ISO";break}return R};let Ce=null;function Pe(P,M,R){var K=0,X=0;if(typeof R<"u"){const Le=parseInt(R);K=Math.floor(Le/100),X=Le%100}var H=function(Le,de){var we=te(Le,de.component);if("YMDdFWwXxHhms".indexOf(de.component)!==-1)if(de.component==="Y"&&de.n!==-1&&(we=we%Math.pow(10,de.n)),de.names){if(de.component==="M"||de.component==="x")we=ke[we-1];else if(de.component==="F")we=ce[we];else throw{code:"D3133",value:de.component};de.names===F.UPPER?we=we.toUpperCase():de.names===F.LOWER&&(we=we.toLowerCase()),de.width&&we.length>de.width.max&&(we=we.substring(0,de.width.max))}else we=j(we,de.integerFormat);else if(de.component==="f")we=j(we,de.integerFormat);else if(de.component==="Z"||de.component==="z"){const De=K*100+X;if(de.integerFormat.regular)we=j(De,de.integerFormat);else{const ue=de.integerFormat.mandatoryDigits;if(ue===1||ue===2)we=j(K,de.integerFormat),X!==0&&(we+=":"+L(X,"00"));else if(ue===3||ue===4)we=j(De,de.integerFormat);else throw{code:"D3134",value:ue}}De>=0&&(we="+"+we),de.component==="z"&&(we="GMT"+we),De===0&&de.presentation2==="t"&&(we="Z")}else de.component==="P"&&de.names===F.UPPER&&(we=we.toUpperCase());return we};let z;typeof M>"u"?(Ce===null&&(Ce=ne("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),z=Ce):z=ne(M);const ee=(60*K+X)*60*1e3,he=new Date(P+ee);let Te="";return z.parts.forEach(function(Le){Le.type==="literal"?Te+=Le.value:Te+=H(he,Le)}),Te}function b(P){var M={};if(P.type==="datetime")M.type="datetime",M.parts=P.parts.map(function(R){var K={};if(R.type==="literal")K.regex=R.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(R.component==="Z"||R.component==="z"){let H;Array.isArray(R.integerFormat.groupingSeparators)||(H=R.integerFormat.groupingSeparators),K.regex="",R.component==="z"&&(K.regex="GMT"),K.regex+="[-+][0-9]+",H&&(K.regex+=H.character+"[0-9]+"),K.parse=function(z){R.component==="z"&&(z=z.substring(3));let ee=0,he=0;return H?(ee=Number.parseInt(z.substring(0,z.indexOf(H.character))),he=Number.parseInt(z.substring(z.indexOf(H.character)+1))):z.length-1<=2?ee=Number.parseInt(z):(ee=Number.parseInt(z.substring(0,3)),he=Number.parseInt(z.substring(3))),ee*60+he}}else if(R.integerFormat)R.integerFormat.n=R.n,K=b(R.integerFormat);else{K.regex="[a-zA-Z]+";var X={};if(R.component==="M"||R.component==="x")ke.forEach(function(H,z){R.width&&R.width.max?X[H.substring(0,R.width.max)]=z+1:X[H]=z+1});else if(R.component==="F")ce.forEach(function(H,z){z>0&&(R.width&&R.width.max?X[H.substring(0,R.width.max)]=z:X[H]=z)});else if(R.component==="P")X={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:R.component};K.parse=function(H){return X[H]}}return K.component=R.component,K});else{M.type="integer";const R=P.case===F.UPPER;let K;switch(P.n&&P.n>0?P.optionalDigits===0?K=`{${P.n}}`:K=`{${P.n-P.optionalDigits},${P.n}}`:K="+",P.primary){case y.LETTERS:M.regex=R?"[A-Z]+":"[a-z]+",M.parse=function(X){return B(X,R?"A":"a")};break;case y.ROMAN:M.regex=R?"[MDCLXVI]+":"[mdclxvi]+",M.parse=function(X){return U(R?X:X.toUpperCase())};break;case y.WORDS:M.regex="(?:"+Object.keys(T).concat("and","[\\-, ]").join("|")+")+",M.parse=function(X){return q(X.toLowerCase())};break;case y.DECIMAL:M.regex=`[0-9]${K}`,P.ordinal&&(M.regex+="(?:th|st|nd|rd)"),M.parse=function(X){let H=X;return P.ordinal&&(H=X.substring(0,X.length-2)),P.regular?H=H.split(",").join(""):P.groupingSeparators.forEach(z=>{H=H.split(z.character).join("")}),P.zeroCode!==48&&(H=H.split("").map(z=>String.fromCodePoint(z.codePointAt(0)-P.zeroCode+48)).join("")),parseInt(H)};break;case y.SEQUENCE:throw{code:"D3130",value:P.token}}}return M}function S(P,M){if(typeof P>"u")return;const R=me(M);return b(R).parse(P)}function oe(P,M){const R=ne(M),K=b(R),X="^"+K.parts.map(he=>"("+he.regex+")").join("")+"$";var z=new RegExp(X,"i").exec(P);if(z!==null){const ue={};for(let $e=1;$e<z.length;$e++){const h=K.parts[$e-1];h.parse&&(ue[h.component]=h.parse(z[$e]))}if(Object.getOwnPropertyNames(ue).length===0)return;let ot=0;const Lt=$e=>{ot<<=1,ot+=$e?1:0},vt=$e=>!(~$e&ot)&&!!($e&ot);"YXMxWwdD".split("").forEach($e=>Lt(ue[$e]));const yt=!vt(161)&&vt(130),zt=vt(84),Xt=!zt&&vt(72);ot=0,"PHhmsf".split("").forEach($e=>Lt(ue[$e]));const Wt=!vt(23)&&vt(47),un=(yt?"YD":zt?"XxwF":Xt?"XWF":"YMD")+(Wt?"Phmsf":"Hmsf"),Nt=this.environment.timestamp;let Xe=!1,jt=!1;if(un.split("").forEach($e=>{if(typeof ue[$e]>"u")Xe?(ue[$e]="MDd".indexOf($e)!==-1?1:0,jt=!0):ue[$e]=te(Nt,$e);else if(Xe=!0,jt)throw{code:"D3136"}}),ue.M>0?ue.M-=1:ue.M=0,yt){const $e=Date.UTC(ue.Y,0),h=(ue.d-1)*1e3*60*60*24,w=new Date($e+h);ue.M=w.getUTCMonth(),ue.D=w.getUTCDate()}if(zt)throw{code:"D3136"};if(Xt)throw{code:"D3136"};Wt&&(ue.H=ue.h===12?0:ue.h,ue.P===1&&(ue.H+=12));var ee=Date.UTC(ue.Y,ue.M,ue.D,ue.H,ue.m,ue.s,ue.f);return(ue.Z||ue.z)&&(ee-=(ue.Z||ue.z)*60*1e3),ee}}var Ae=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ge(P,M){if(!(typeof P>"u"))if(typeof M>"u"){if(!Ae.test(P))throw{stack:new Error().stack,code:"D3110",value:P};return Date.parse(P)}else return oe.call(this,P,M)}function Re(P,M,R){if(!(typeof P>"u"))return Pe.call(this,P,M,R)}return{formatInteger:L,parseInteger:S,fromMillis:Re,toMillis:Ge}}();i.exports=o},{"./utils":6}],2:[function(n,i,s){(function(u){(function(){var o=n("./utils");const f=(()=>{var x=o.isNumeric,I=o.isArrayOfStrings,E=o.isArrayOfNumbers,C=o.createSequence,v=o.isSequence,T=o.isFunction,q=o.isLambda,J=o.isPromise,ve=o.getFunctionArity,Oe=o.isDeepEqual,U=o.stringToArray;function D(l){if(!(typeof l>"u")){var d=0;return l.forEach(function(m){d+=m}),d}}function B(l){return typeof l>"u"?0:l.length}function L(l){if(!(typeof l>"u"||l.length===0))return Math.max.apply(Math,l)}function y(l){if(!(typeof l>"u"||l.length===0))return Math.min.apply(Math,l)}function F(l){if(!(typeof l>"u"||l.length===0)){var d=0;return l.forEach(function(m){d+=m}),d/l.length}}function j(l,d=!1){if(!(typeof l>"u")){var m;if(typeof l=="string")m=l;else if(T(l))m="";else{if(typeof l=="number"&&!isFinite(l))throw{code:"D3001",value:l,stack:new Error().stack};var _=d?2:0;Array.isArray(l)&&l.outerWrapper&&(l=l[0]),m=JSON.stringify(l,function(k,N){return typeof N<"u"&&N!==null&&N.toPrecision&&x(N)?Number(N.toPrecision(15)):N&&T(N)?"":N},_)}return m}}function ie(l,d,m){if(!(typeof l>"u")){var _=U(l),k=_.length;if(k+d<0&&(d=0),typeof m<"u"){if(m<=0)return"";var N=d>=0?d+m:k+d+m;return _.slice(d,N).join("")}return _.slice(d).join("")}}function me(l,d){if(!(typeof l>"u")){var m=l.indexOf(d);return m>-1?l.substr(0,m):l}}function Y(l,d){if(!(typeof l>"u")){var m=l.indexOf(d);return m>-1?l.substr(m+d.length):l}}function ne(l){if(!(typeof l>"u"))return l.toLowerCase()}function ce(l){if(!(typeof l>"u"))return l.toUpperCase()}function ke(l){if(!(typeof l>"u"))return U(l).length}function ze(l){if(!(typeof l>"u")){var d=l.replace(/[ \t\n\r]+/gm," ");return d.charAt(0)===" "&&(d=d.substring(1)),d.charAt(d.length-1)===" "&&(d=d.substring(0,d.length-1)),d}}function ye(l,d,m){if(!(typeof l>"u")){(typeof m>"u"||m.length===0)&&(m=" ");var _,k=Math.abs(d)-ke(l);if(k>0){var N=new Array(k+1).join(m);m.length>1&&(N=ie(N,0,k)),d>0?_=l+N:_=N+l}else _=l;return _}}async function ge(l,d){var m=l.apply(this,[d]);if(J(m)&&(m=await m),m&&!(typeof m.start=="number"||m.end==="number"||Array.isArray(m.groups)||T(m.next)))throw{code:"T1010",stack:new Error().stack};return m}async function Be(l,d){if(!(typeof l>"u")){var m;if(typeof d=="string")m=l.indexOf(d)!==-1;else{var _=await ge(d,l);m=typeof _<"u"}return m}}async function te(l,d,m){if(!(typeof l>"u")){if(m<0)throw{stack:new Error().stack,value:m,code:"D3040",index:3};var _=C();if(typeof m>"u"||m>0){var k=0,N=await ge(d,l);if(typeof N<"u")for(;typeof N<"u"&&(typeof m>"u"||k<m);)_.push({match:N.match,index:N.start,groups:N.groups}),N=await ge(N.next),k++}return _}}async function Ce(l,d,m,_){if(!(typeof l>"u")){var k=this;if(d==="")throw{code:"D3010",stack:new Error().stack,value:d,index:2};if(_<0)throw{code:"D3011",stack:new Error().stack,value:_,index:4};var N;typeof m=="string"?N=function(Ne){for(var rt="",_e=0,Ze=m.indexOf("$",_e);Ze!==-1&&_e<m.length;){rt+=m.substring(_e,Ze),_e=Ze+1;var Tt=m.charAt(_e);if(Tt==="$")rt+="$",_e++;else if(Tt==="0")rt+=Ne.match,_e++;else{var Ve;if(Ne.groups.length===0?Ve=1:Ve=Math.floor(Math.log(Ne.groups.length)*Math.LOG10E)+1,Ze=parseInt(m.substring(_e,_e+Ve),10),Ve>1&&Ze>Ne.groups.length&&(Ze=parseInt(m.substring(_e,_e+Ve-1),10)),isNaN(Ze))rt+="$";else{if(Ne.groups.length>0){var pn=Ne.groups[Ze-1];typeof pn<"u"&&(rt+=pn)}_e+=Ze.toString().length}}Ze=m.indexOf("$",_e)}return rt+=m.substring(_e),rt}:N=m;var W="",le=0;if(typeof _>"u"||_>0){var fe=0;if(typeof d=="string"){for(var Fe=l.indexOf(d,le);Fe!==-1&&(typeof _>"u"||fe<_);)W+=l.substring(le,Fe),W+=m,le=Fe+d.length,fe++,Fe=l.indexOf(d,le);W+=l.substring(le)}else{var xe=await ge(d,l);if(typeof xe<"u"){for(;typeof xe<"u"&&(typeof _>"u"||fe<_);){W+=l.substring(le,xe.start);var qe=N.apply(k,[xe]);if(J(qe)&&(qe=await qe),typeof qe=="string")W+=qe;else throw{code:"D3012",stack:new Error().stack,value:qe};le=xe.start+xe.match.length,fe++,xe=await ge(xe.next)}W+=l.substring(le)}else W=l}}else W=l;return W}}function Pe(l){if(!(typeof l>"u")){var d=typeof window<"u"?window.btoa:function(m){return new u.Buffer.from(m,"binary").toString("base64")};return d(l)}}function b(l){if(!(typeof l>"u")){var d=typeof window<"u"?window.atob:function(m){return new u.Buffer.from(m,"base64").toString("binary")};return d(l)}}function S(l){if(!(typeof l>"u")){var d;try{d=encodeURIComponent(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"encodeUrlComponent"}}return d}}function oe(l){if(!(typeof l>"u")){var d;try{d=encodeURI(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"encodeUrl"}}return d}}function Ae(l){if(!(typeof l>"u")){var d;try{d=decodeURIComponent(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"decodeUrlComponent"}}return d}}function Ge(l){if(!(typeof l>"u")){var d;try{d=decodeURI(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"decodeUrl"}}return d}}async function Re(l,d,m){if(!(typeof l>"u")){if(m<0)throw{code:"D3020",stack:new Error().stack,value:m,index:3};var _=[];if(typeof m>"u"||m>0)if(typeof d=="string")_=l.split(d,m);else{var k=0,N=await ge(d,l);if(typeof N<"u"){for(var W=0;typeof N<"u"&&(typeof m>"u"||k<m);)_.push(l.substring(W,N.start)),W=N.end,N=await ge(N.next),k++;(typeof m>"u"||k<m)&&_.push(l.substring(W))}else _.push(l)}return _}}function P(l,d){if(!(typeof l>"u"))return typeof d>"u"&&(d=""),l.join(d)}function M(l,d,m){if(!(typeof l>"u")){var _={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},k=_;typeof m<"u"&&Object.keys(m).forEach(function(be){k[be]=m[be]});for(var N=[],W=k["zero-digit"].charCodeAt(0),le=W;le<W+10;le++)N.push(String.fromCharCode(le));var fe=N.concat([k["decimal-separator"],k["exponent-separator"],k["grouping-separator"],k.digit,k["pattern-separator"]]),Fe=d.split(k["pattern-separator"]);if(Fe.length>2)throw{code:"D3080",stack:new Error().stack};var xe=function(be){var Ke=function(){for(var Qe,It=0;It<be.length;It++)if(Qe=be.charAt(It),fe.indexOf(Qe)!==-1&&Qe!==k["exponent-separator"])return be.substring(0,It)}(),ht=function(){for(var Qe,It=be.length-1;It>=0;It--)if(Qe=be.charAt(It),fe.indexOf(Qe)!==-1&&Qe!==k["exponent-separator"])return be.substring(It+1)}(),He=be.substring(Ke.length,be.length-ht.length),Ct,Ht,wt,et,Et=be.indexOf(k["exponent-separator"],Ke.length);Et===-1||Et>be.length-ht.length?(Ct=He,Ht=void 0):(Ct=He.substring(0,Et),Ht=He.substring(Et+1));var Ot=Ct.indexOf(k["decimal-separator"]);return Ot===-1?(wt=Ct,et=ht):(wt=Ct.substring(0,Ot),et=Ct.substring(Ot+1)),{prefix:Ke,suffix:ht,activePart:He,mantissaPart:Ct,exponentPart:Ht,integerPart:wt,fractionalPart:et,subpicture:be}},qe=function(be){var Ke,ht,He=be.subpicture,Ct=He.indexOf(k["decimal-separator"]);Ct!==He.lastIndexOf(k["decimal-separator"])&&(Ke="D3081"),He.indexOf(k.percent)!==He.lastIndexOf(k.percent)&&(Ke="D3082"),He.indexOf(k["per-mille"])!==He.lastIndexOf(k["per-mille"])&&(Ke="D3083"),He.indexOf(k.percent)!==-1&&He.indexOf(k["per-mille"])!==-1&&(Ke="D3084");var Ht=!1;for(ht=0;ht<be.mantissaPart.length;ht++){var wt=be.mantissaPart.charAt(ht);if(N.indexOf(wt)!==-1||wt===k.digit){Ht=!0;break}}Ht||(Ke="D3085");var et=be.activePart.split("").map(function(Qe){return fe.indexOf(Qe)===-1?"p":"a"}).join("");et.indexOf("p")!==-1&&(Ke="D3086"),Ct!==-1?(He.charAt(Ct-1)===k["grouping-separator"]||He.charAt(Ct+1)===k["grouping-separator"])&&(Ke="D3087"):be.integerPart.charAt(be.integerPart.length-1)===k["grouping-separator"]&&(Ke="D3088"),He.indexOf(k["grouping-separator"]+k["grouping-separator"])!==-1&&(Ke="D3089");var Et=be.integerPart.indexOf(k.digit);Et!==-1&&be.integerPart.substring(0,Et).split("").filter(function(Qe){return N.indexOf(Qe)>-1}).length>0&&(Ke="D3090"),Et=be.fractionalPart.lastIndexOf(k.digit),Et!==-1&&be.fractionalPart.substring(Et).split("").filter(function(Qe){return N.indexOf(Qe)>-1}).length>0&&(Ke="D3091");var Ot=typeof be.exponentPart=="string";if(Ot&&be.exponentPart.length>0&&(He.indexOf(k.percent)!==-1||He.indexOf(k["per-mille"])!==-1)&&(Ke="D3092"),Ot&&(be.exponentPart.length===0||be.exponentPart.split("").filter(function(Qe){return N.indexOf(Qe)===-1}).length>0)&&(Ke="D3093"),Ke)throw{code:Ke,stack:new Error().stack}},Ne=function(be){var Ke=function(ct,Cn){for(var hn=[],Jt=ct.indexOf(k["grouping-separator"]);Jt!==-1;){var jn=(Cn?ct.substring(0,Jt):ct.substring(Jt)).split("").filter(function(bn){return N.indexOf(bn)!==-1||bn===k.digit}).length;hn.push(jn),Jt=be.integerPart.indexOf(k["grouping-separator"],Jt+1)}return hn},ht=Ke(be.integerPart),He=function(ct){if(ct.length===0)return 0;for(var Cn=function(jn,bn){return bn===0?jn:Cn(bn,jn%bn)},hn=ct.reduce(Cn),Jt=1;Jt<=ct.length;Jt++)if(ct.indexOf(Jt*hn)===-1)return 0;return hn},Ct=He(ht),Ht=Ke(be.fractionalPart,!0),wt=be.integerPart.split("").filter(function(ct){return N.indexOf(ct)!==-1}).length,et=wt,Et=be.fractionalPart.split(""),Ot=Et.filter(function(ct){return N.indexOf(ct)!==-1}).length,Qe=Et.filter(function(ct){return N.indexOf(ct)!==-1||ct===k.digit}).length,It=typeof be.exponentPart=="string";wt===0&&Qe===0&&(It?(Ot=1,Qe=1):wt=1),It&&wt===0&&be.integerPart.indexOf(k.digit)!==-1&&(wt=1),wt===0&&Ot===0&&(Ot=1);var _n=0;return It&&(_n=be.exponentPart.split("").filter(function(ct){return N.indexOf(ct)!==-1}).length),{integerPartGroupingPositions:ht,regularGrouping:Ct,minimumIntegerPartSize:wt,scalingFactor:et,prefix:be.prefix,fractionalPartGroupingPositions:Ht,minimumFactionalPartSize:Ot,maximumFactionalPartSize:Qe,minimumExponentSize:_n,suffix:be.suffix,picture:be.subpicture}},rt=Fe.map(xe);rt.forEach(qe);var _e=rt.map(Ne),Ze=k["minus-sign"],Tt=k["zero-digit"],Ve=k["decimal-separator"],pn=k["grouping-separator"];_e.length===1&&(_e.push(JSON.parse(JSON.stringify(_e[0]))),_e[1].prefix=Ze+_e[1].prefix);var Ye;l>=0?Ye=_e[0]:Ye=_e[1];var Sn;Ye.picture.indexOf(k.percent)!==-1?Sn=l*100:Ye.picture.indexOf(k["per-mille"])!==-1?Sn=l*1e3:Sn=l;var it,Kt;if(Ye.minimumExponentSize===0)it=Sn;else{var ni=Math.pow(10,Ye.scalingFactor),kr=Math.pow(10,Ye.scalingFactor-1);for(it=Sn,Kt=0;it<kr;)it*=10,Kt-=1;for(;it>ni;)it/=10,Kt+=1}var Qn=ee(it,Ye.maximumFactionalPartSize),Sr=function(be,Ke){var ht=Math.abs(be).toFixed(Ke);return Tt!=="0"&&(ht=ht.split("").map(function(He){return He>="0"&&He<="9"?N[He.charCodeAt(0)-48]:He}).join("")),ht},Se=Sr(Qn,Ye.maximumFactionalPartSize),st=Se.indexOf(".");for(st===-1?Se=Se+Ve:Se=Se.replace(".",Ve);Se.charAt(0)===Tt;)Se=Se.substring(1);for(;Se.charAt(Se.length-1)===Tt;)Se=Se.substring(0,Se.length-1);st=Se.indexOf(Ve);var dn=Ye.minimumIntegerPartSize-st,Xn=Ye.minimumFactionalPartSize-(Se.length-st-1);if(Se=(dn>0?new Array(dn+1).join(Tt):"")+Se,Se=Se+(Xn>0?new Array(Xn+1).join(Tt):""),st=Se.indexOf(Ve),Ye.regularGrouping>0)for(var _t=Math.floor((st-1)/Ye.regularGrouping),An=1;An<=_t;An++)Se=[Se.slice(0,st-An*Ye.regularGrouping),pn,Se.slice(st-An*Ye.regularGrouping)].join("");else Ye.integerPartGroupingPositions.forEach(function(be){Se=[Se.slice(0,st-be),pn,Se.slice(st-be)].join(""),st++});if(st=Se.indexOf(Ve),Ye.fractionalPartGroupingPositions.forEach(function(be){Se=[Se.slice(0,be+st+1),pn,Se.slice(be+st+1)].join("")}),st=Se.indexOf(Ve),(Ye.picture.indexOf(Ve)===-1||st===Se.length-1)&&(Se=Se.substring(0,Se.length-1)),typeof Kt<"u"){var zn=Sr(Kt,0);dn=Ye.minimumExponentSize-zn.length,dn>0&&(zn=new Array(dn+1).join(Tt)+zn),Se=Se+k["exponent-separator"]+(Kt<0?Ze:"")+zn}return Se=Ye.prefix+Se+Ye.suffix,Se}}function R(l,d){if(!(typeof l>"u")){if(l=ee(l),typeof d>"u"?d=10:d=ee(d),d<2||d>36)throw{code:"D3100",stack:new Error().stack,value:d};var m=l.toString(d);return m}}function K(l){var d;if(!(typeof l>"u")){if(typeof l=="number")d=l;else if(typeof l=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(l)&&!isNaN(parseFloat(l))&&isFinite(l))d=parseFloat(l);else if(typeof l=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(l))d=Number(l);else if(l===!0)d=1;else if(l===!1)d=0;else throw{code:"D3030",value:l,stack:new Error().stack,index:1};return d}}function X(l){var d;if(!(typeof l>"u"))return d=Math.abs(l),d}function H(l){var d;if(!(typeof l>"u"))return d=Math.floor(l),d}function z(l){var d;if(!(typeof l>"u"))return d=Math.ceil(l),d}function ee(l,d){var m;if(!(typeof l>"u")){if(d){var _=l.toString().split("e");l=+(_[0]+"e"+(_[1]?+_[1]+d:d))}m=Math.round(l);var k=m-l;return Math.abs(k)===.5&&Math.abs(m%2)===1&&(m=m-1),d&&(_=m.toString().split("e"),m=+(_[0]+"e"+(_[1]?+_[1]-d:-d))),Object.is(m,-0)&&(m=0),m}}function he(l){var d;if(!(typeof l>"u")){if(l<0)throw{stack:new Error().stack,code:"D3060",index:1,value:l};return d=Math.sqrt(l),d}}function Te(l,d){var m;if(!(typeof l>"u")){if(m=Math.pow(l,d),!isFinite(m))throw{stack:new Error().stack,code:"D3061",index:1,value:l,exp:d};return m}}function Le(){return Math.random()}function de(l){if(!(typeof l>"u")){var d=!1;if(Array.isArray(l)){if(l.length===1)d=de(l[0]);else if(l.length>1){var m=l.filter(function(_){return de(_)});d=m.length>0}}else typeof l=="string"?l.length>0&&(d=!0):x(l)?l!==0&&(d=!0):l!==null&&typeof l=="object"?Object.keys(l).length>0&&(d=!0):typeof l=="boolean"&&l===!0&&(d=!0);return d}}function we(l){if(!(typeof l>"u"))return!de(l)}function De(l,d,m,_){var k=[d],N=ve(l);return N>=2&&k.push(m),N>=3&&k.push(_),k}async function ue(l,d){if(!(typeof l>"u")){for(var m=C(),_=0;_<l.length;_++){var k=De(d,l[_],_,l),N=await d.apply(this,k);typeof N<"u"&&m.push(N)}return m}}async function ot(l,d){if(!(typeof l>"u")){for(var m=C(),_=0;_<l.length;_++){var k=l[_],N=De(d,k,_,l),W=await d.apply(this,N);de(W)&&m.push(k)}return m}}async function Lt(l,d){if(!(typeof l>"u")){for(var m=!1,_,k=0;k<l.length;k++){var N=l[k],W=!0;if(typeof d<"u"){var le=De(d,N,k,l),fe=await d.apply(this,le);W=de(fe)}if(W)if(!m)_=N,m=!0;else throw{stack:new Error().stack,code:"D3138",index:k}}if(!m)throw{stack:new Error().stack,code:"D3139"};return _}}function vt(){for(var l=[],d=Array.prototype.slice.call(arguments),m=Math.min.apply(Math,d.map(function(N){return Array.isArray(N)?N.length:0})),_=0;_<m;_++){var k=d.map(N=>N[_]);l.push(k)}return l}async function lt(l,d,m){if(!(typeof l>"u")){var _,k=ve(d);if(k<2)throw{stack:new Error().stack,code:"D3050",index:1};var N;for(typeof m>"u"&&l.length>0?(_=l[0],N=1):(_=m,N=0);N<l.length;){var W=[_,l[N]];k>=3&&W.push(N),k>=4&&W.push(l),_=await d.apply(this,W),N++}return _}}function yt(l){var d=C();if(Array.isArray(l)){var m={};l.forEach(function(_){var k=yt(_);k.forEach(function(N){m[N]=!0})}),d=yt(m)}else l!==null&&typeof l=="object"&&!T(l)&&Object.keys(l).forEach(_=>d.push(_));return d}function zt(l,d){var m;if(Array.isArray(l)){m=C();for(var _=0;_<l.length;_++){var k=zt(l[_],d);typeof k<"u"&&(Array.isArray(k)?k.forEach(N=>m.push(N)):m.push(k))}}else l!==null&&typeof l=="object"&&!T(l)&&(m=l[d]);return m}function Xt(l,d){return typeof l>"u"?d:typeof d>"u"?l:(Array.isArray(l)||(l=C(l)),Array.isArray(d)||(d=[d]),l.concat(d))}function vn(l){return!(typeof l>"u")}function Wt(l){var d=C();if(Array.isArray(l))l.forEach(function(k){d=Xt(d,Wt(k))});else if(l!==null&&typeof l=="object"&&!q(l))for(var m in l){var _={};_[m]=l[m],d.push(_)}else d=l;return d}function re(l){if(!(typeof l>"u")){var d={};return l.forEach(function(m){for(var _ in m)d[_]=m[_]}),d}}function yn(l){if(!(typeof l>"u")){if(l.length<=1)return l;for(var d=l.length,m=new Array(d),_=0;_<d;_++)m[d-_-1]=l[_];return m}}async function un(l,d){var m=C();for(var _ in l){var k=De(d,l[_],_,l),N=await d.apply(this,k);typeof N<"u"&&m.push(N)}return m}function Nt(l){throw{code:"D3137",stack:new Error().stack,message:l||"$error() function evaluated"}}function Xe(l,d){if(!l)throw{code:"D3141",stack:new Error().stack,message:d||"$assert() statement failed"}}function jt(l){if(l!==void 0)return l===null?"null":x(l)?"number":typeof l=="string"?"string":typeof l=="boolean"?"boolean":Array.isArray(l)?"array":T(l)?"function":"object"}async function $e(l,d){if(!(typeof l>"u")){if(l.length<=1)return l;var m;if(typeof d>"u"){if(!E(l)&&!I(l))throw{stack:new Error().stack,code:"D3070",index:1};m=async function(W,le){return W>le}}else m=d;var _=async function(W,le){var fe=async function(xe,qe,Ne){qe.length===0?Array.prototype.push.apply(xe,Ne):Ne.length===0?Array.prototype.push.apply(xe,qe):await m(qe[0],Ne[0])?(xe.push(Ne[0]),await fe(xe,qe,Ne.slice(1))):(xe.push(qe[0]),await fe(xe,qe.slice(1),Ne))},Fe=[];return await fe(Fe,W,le),Fe},k=async function(W){if(!Array.isArray(W)||W.length<=1)return W;var le=Math.floor(W.length/2),fe=W.slice(0,le),Fe=W.slice(le);return fe=await k(fe),Fe=await k(Fe),await _(fe,Fe)},N=await k(l);return N}}function h(l){if(!(typeof l>"u")){if(l.length<=1)return l;for(var d=new Array(l.length),m=0;m<l.length;m++){var _=Math.floor(Math.random()*(m+1));m!==_&&(d[m]=d[_]),d[_]=l[m]}return d}}function w(l){if(!(typeof l>"u")){if(!Array.isArray(l)||l.length<=1)return l;for(var d=v(l)?C():[],m=0;m<l.length;m++){for(var _=l[m],k=!1,N=0;N<d.length;N++)if(Oe(_,d[N])){k=!0;break}k||d.push(_)}return d}}async function A(l,d){var m={};for(var _ in l){var k=l[_],N=De(d,k,_,l),W=await d.apply(this,N);de(W)&&(m[_]=k)}return Object.keys(m).length===0&&(m=void 0),m}return{sum:D,count:B,max:L,min:y,average:F,string:j,substring:ie,substringBefore:me,substringAfter:Y,lowercase:ne,uppercase:ce,length:ke,trim:ze,pad:ye,match:te,contains:Be,replace:Ce,split:Re,join:P,formatNumber:M,formatBase:R,number:K,floor:H,ceil:z,round:ee,abs:X,sqrt:he,power:Te,random:Le,boolean:de,not:we,map:ue,zip:vt,filter:ot,single:Lt,foldLeft:lt,sift:A,keys:yt,lookup:zt,append:Xt,exists:vn,spread:Wt,merge:re,reverse:yn,each:un,error:Nt,assert:Xe,type:jt,sort:$e,shuffle:h,distinct:w,base64encode:Pe,base64decode:b,encodeUrlComponent:S,encodeUrl:oe,decodeUrlComponent:Ae,decodeUrl:Ge}})();i.exports=f}).call(this)}).call(this,typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(n,i,s){var u=n("./datetime"),o=n("./functions"),f=n("./utils"),x=n("./parser"),I=n("./signature"),E=function(){var C=f.isNumeric,v=f.isArrayOfStrings,T=f.isArrayOfNumbers,q=f.createSequence,J=f.isSequence,ve=f.isFunction,Oe=f.isLambda,U=f.isIterable,D=f.isPromise,B=f.getFunctionArity,L=f.isDeepEqual,y=Nt(null);async function F(h,w,A){var l,d=A.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(d&&await d(h,w,A),h.type){case"path":l=await j(h,w,A);break;case"binary":l=await ke(h,w,A);break;case"unary":l=await ze(h,w,A);break;case"name":l=ye(h,w);break;case"string":case"number":case"value":l=ge(h);break;case"wildcard":l=Be(h,w);break;case"descendant":l=Ce(h,w);break;case"parent":l=A.lookup(h.slot.label);break;case"condition":l=await H(h,w,A);break;case"block":l=await z(h,w,A);break;case"bind":l=await X(h,w,A);break;case"regex":l=ee(h);break;case"function":l=await De(h,w,A);break;case"variable":l=he(h,w,A);break;case"lambda":l=Lt(h,w,A);break;case"partial":l=await vt(h,w,A);break;case"apply":l=await we(h,w,A);break;case"transform":l=Le(h,w,A);break}if(Object.prototype.hasOwnProperty.call(h,"predicate"))for(var m=0;m<h.predicate.length;m++)l=await ce(h.predicate[m].expr,l,A);h.type!=="path"&&Object.prototype.hasOwnProperty.call(h,"group")&&(l=await M(h.group,l,A));var _=A.lookup(Symbol.for("jsonata.__evaluate_exit"));return _&&await _(h,w,A,l),l&&J(l)&&!l.tupleStream&&(h.keepArray&&(l.keepSingleton=!0),l.length===0?l=void 0:l.length===1&&(l=l.keepSingleton?l:l[0])),l}async function j(h,w,A){var l;Array.isArray(w)&&h.steps[0].type!=="variable"?l=w:l=q(w);for(var d,m=!1,_=void 0,k=0;k<h.steps.length;k++){var N=h.steps[k];if(N.tuple&&(m=!0),k===0&&N.consarray?d=await F(N,l,A):m?_=await ne(N,l,_,A):d=await me(N,l,A,k===h.steps.length-1),!m&&(typeof d>"u"||d.length===0))break;typeof N.focus>"u"&&(l=d)}if(m)if(h.tuple)d=_;else for(d=q(),k=0;k<_.length;k++)d.push(_[k]["@"]);return h.keepSingletonArray&&(Array.isArray(d)&&d.cons&&!d.sequence&&(d=q(d)),d.keepSingleton=!0),h.hasOwnProperty("group")&&(d=await M(h.group,m?_:d,A)),d}function ie(h,w){var A=Nt(h);for(const l in w)A.bind(l,w[l]);return A}async function me(h,w,A,l){var d;if(h.type==="sort")return d=await Te(h,w,A),h.stages&&(d=await Y(h.stages,d,A)),d;d=q();for(var m=0;m<w.length;m++){var _=await F(h,w[m],A);if(h.stages)for(var k=0;k<h.stages.length;k++)_=await ce(h.stages[k].expr,_,A);typeof _<"u"&&d.push(_)}var N=q();return l&&d.length===1&&Array.isArray(d[0])&&!J(d[0])?N=d[0]:d.forEach(function(W){!Array.isArray(W)||W.cons?N.push(W):W.forEach(le=>N.push(le))}),N}async function Y(h,w,A){for(var l=w,d=0;d<h.length;d++){var m=h[d];switch(m.type){case"filter":l=await ce(m.expr,l,A);break;case"index":for(var _=0;_<l.length;_++){var k=l[_];k[m.value]=_}break}}return l}async function ne(h,w,A,l){var d;if(h.type==="sort"){if(A)d=await Te(h,A,l);else{var m=await Te(h,w,l);d=q(),d.tupleStream=!0;for(var _=0;_<m.length;_++){var k={"@":m[_]};k[h.index]=_,d.push(k)}}return h.stages&&(d=await Y(h.stages,d,l)),d}d=q(),d.tupleStream=!0;var N=l;A===void 0&&(A=w.map(Fe=>({"@":Fe})));for(var W=0;W<A.length;W++){N=ie(l,A[W]);var le=await F(h,A[W]["@"],N);if(typeof le<"u"){Array.isArray(le)||(le=[le]);for(var fe=0;fe<le.length;fe++)k={},Object.assign(k,A[W]),le.tupleStream?Object.assign(k,le[fe]):(h.focus?(k[h.focus]=le[fe],k["@"]=A[W]["@"]):k["@"]=le[fe],h.index&&(k[h.index]=fe),h.ancestor&&(k[h.ancestor.label]=A[W]["@"])),d.push(k)}}return h.stages&&(d=await Y(h.stages,d,l)),d}async function ce(h,w,A){var l=q();if(w&&w.tupleStream&&(l.tupleStream=!0),Array.isArray(w)||(w=q(w)),h.type==="number"){var d=Math.floor(h.value);d<0&&(d=w.length+d);var m=w[d];typeof m<"u"&&(Array.isArray(m)?l=m:l.push(m))}else for(d=0;d<w.length;d++){var m=w[d],_=m,k=A;w.tupleStream&&(_=m["@"],k=ie(A,m));var N=await F(h,_,k);C(N)&&(N=[N]),T(N)?N.forEach(function(le){var fe=Math.floor(le);fe<0&&(fe=w.length+fe),fe===d&&l.push(m)}):o.boolean(N)&&l.push(m)}return l}async function ke(h,w,A){var l,d=await F(h.lhs,w,A),m=h.value,_=async()=>await F(h.rhs,w,A);if(m==="and"||m==="or")try{return await Ge(d,_,m)}catch(N){throw N.position=h.position,N.token=m,N}var k=await _();try{switch(m){case"+":case"-":case"*":case"/":case"%":l=b(d,k,m);break;case"=":case"!=":l=S(d,k,m);break;case"<":case"<=":case">":case">=":l=oe(d,k,m);break;case"&":l=P(d,k);break;case"..":l=K(d,k);break;case"in":l=Ae(d,k);break}}catch(N){throw N.position=h.position,N.token=m,N}return l}async function ze(h,w,A){var l;switch(h.value){case"-":if(l=await F(h.expression,w,A),typeof l>"u")l=void 0;else if(C(l))l=-l;else throw{code:"D1002",stack:new Error().stack,position:h.position,token:h.value,value:l};break;case"[":l=[];let _=await Promise.all(h.expressions.map(async(k,N)=>(A.isParallelCall=N>0,[k,await F(k,w,A)])));for(let k of _){var[d,m]=k;typeof m<"u"&&(d.value==="["?l.push(m):l=o.append(l,m))}h.consarray&&Object.defineProperty(l,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":l=await M(h,w,A);break}return l}function ye(h,w,A){return o.lookup(w,h.value)}function ge(h){return h.value}function Be(h,w){var A=q();return Array.isArray(w)&&w.outerWrapper&&w.length>0&&(w=w[0]),w!==null&&typeof w=="object"&&Object.keys(w).forEach(function(l){var d=w[l];Array.isArray(d)?(d=te(d),A=o.append(A,d)):A.push(d)}),A}function te(h,w){return typeof w>"u"&&(w=[]),Array.isArray(h)?h.forEach(function(A){te(A,w)}):w.push(h),w}function Ce(h,w){var A,l=q();return typeof w<"u"&&(Pe(w,l),l.length===1?A=l[0]:A=l),A}function Pe(h,w){Array.isArray(h)||w.push(h),Array.isArray(h)?h.forEach(function(A){Pe(A,w)}):h!==null&&typeof h=="object"&&Object.keys(h).forEach(function(A){Pe(h[A],w)})}function b(h,w,A){var l;if(typeof h<"u"&&!C(h))throw{code:"T2001",stack:new Error().stack,value:h};if(typeof w<"u"&&!C(w))throw{code:"T2002",stack:new Error().stack,value:w};if(typeof h>"u"||typeof w>"u")return l;switch(A){case"+":l=h+w;break;case"-":l=h-w;break;case"*":l=h*w;break;case"/":l=h/w;break;case"%":l=h%w;break}return l}function S(h,w,A){var l,d=typeof h,m=typeof w;if(d==="undefined"||m==="undefined")return!1;switch(A){case"=":l=L(h,w);break;case"!=":l=!L(h,w);break}return l}function oe(h,w,A){var l,d=typeof h,m=typeof w,_=d==="undefined"||d==="string"||d==="number",k=m==="undefined"||m==="string"||m==="number";if(!_||!k)throw{code:"T2010",stack:new Error().stack,value:d==="string"||d==="number"?w:h};if(!(d==="undefined"||m==="undefined")){if(d!==m)throw{code:"T2009",stack:new Error().stack,value:h,value2:w};switch(A){case"<":l=h<w;break;case"<=":l=h<=w;break;case">":l=h>w;break;case">=":l=h>=w;break}return l}}function Ae(h,w){var A=!1;if(typeof h>"u"||typeof w>"u")return!1;Array.isArray(w)||(w=[w]);for(var l=0;l<w.length;l++)if(w[l]===h){A=!0;break}return A}async function Ge(h,w,A){var l,d=Re(h);switch(A){case"and":l=d&&Re(await w());break;case"or":l=d||Re(await w());break}return l}function Re(h){var w=o.boolean(h);return typeof w>"u"?!1:w}function P(h,w){var A,l="",d="";return typeof h<"u"&&(l=o.string(h)),typeof w<"u"&&(d=o.string(w)),A=l.concat(d),A}async function M(h,w,A){var l={},d={},m=!!(w&&w.tupleStream);Array.isArray(w)||(w=q(w)),w.length===0&&w.push(void 0);for(var _=0;_<w.length;_++)for(var k=w[_],N=m?ie(A,k):A,W=0;W<h.lhs.length;W++){var le=h.lhs[W],fe=await F(le[0],m?k["@"]:k,N);if(typeof fe!="string"&&fe!==void 0)throw{code:"T1003",stack:new Error().stack,position:h.position,value:fe};if(fe!==void 0){var Fe={data:k,exprIndex:W};if(d.hasOwnProperty(fe)){if(d[fe].exprIndex!==W)throw{code:"D1009",stack:new Error().stack,position:h.position,value:fe};d[fe].data=o.append(d[fe].data,k)}else d[fe]=Fe}}let xe=await Promise.all(Object.keys(d).map(async(Ne,rt)=>{let _e=d[Ne];var Ze=_e.data,Tt=A;if(m){var Ve=R(_e.data);Ze=Ve["@"],delete Ve["@"],Tt=ie(A,Ve)}return A.isParallelCall=rt>0,[Ne,await F(h.lhs[_e.exprIndex][1],Ze,Tt)]}));for(let Ne of xe){var[fe,qe]=await Ne;typeof qe<"u"&&(l[fe]=qe)}return l}function R(h){if(!Array.isArray(h))return h;var w={};Object.assign(w,h[0]);for(var A=1;A<h.length;A++)for(const l in h[A])w[l]=o.append(w[l],h[A][l]);return w}function K(h,w){var A;if(typeof h<"u"&&!Number.isInteger(h))throw{code:"T2003",stack:new Error().stack,value:h};if(typeof w<"u"&&!Number.isInteger(w))throw{code:"T2004",stack:new Error().stack,value:w};if(typeof h>"u"||typeof w>"u"||h>w)return A;var l=w-h+1;if(l>1e7)throw{code:"D2014",stack:new Error().stack,value:l};A=new Array(l);for(var d=h,m=0;d<=w;d++,m++)A[m]=d;return A.sequence=!0,A}async function X(h,w,A){var l=await F(h.rhs,w,A);return A.bind(h.lhs.value,l),l}async function H(h,w,A){var l,d=await F(h.condition,w,A);return o.boolean(d)?l=await F(h.then,w,A):typeof h.else<"u"&&(l=await F(h.else,w,A)),l}async function z(h,w,A){for(var l,d=Nt(A),m=0;m<h.expressions.length;m++)l=await F(h.expressions[m],w,d);return l}function ee(h){var w=new $e.RegexEngine(h.value),A=function(l,d){var m;w.lastIndex=d||0;var _=w.exec(l);if(_!==null){if(m={match:_[0],start:_.index,end:_.index+_[0].length,groups:[]},_.length>1)for(var k=1;k<_.length;k++)m.groups.push(_[k]);m.next=function(){if(!(w.lastIndex>=l.length)){var N=A(l,w.lastIndex);if(N&&N.match==="")throw{code:"D1004",stack:new Error().stack,position:h.position,value:h.value.source};return N}}}return m};return A}function he(h,w,A){var l;return h.value===""?l=w&&w.outerWrapper?w[0]:w:l=A.lookup(h.value),l}async function Te(h,w,A){var l,d=w,m=!!w.tupleStream,_=async function(N,W){for(var le=0,fe=0;le===0&&fe<h.terms.length;fe++){var Fe=h.terms[fe],xe=N,qe=A;m&&(xe=N["@"],qe=ie(A,N));var Ne=await F(Fe.expression,xe,qe);xe=W,qe=A,m&&(xe=W["@"],qe=ie(A,W));var rt=await F(Fe.expression,xe,qe),_e=typeof Ne,Ze=typeof rt;if(_e==="undefined"){le=Ze==="undefined"?0:1;continue}if(Ze==="undefined"){le=-1;continue}if(!(_e==="string"||_e==="number")||!(Ze==="string"||Ze==="number"))throw{code:"T2008",stack:new Error().stack,position:h.position,value:_e==="string"||_e==="number"?rt:Ne};if(_e!==Ze)throw{code:"T2007",stack:new Error().stack,position:h.position,value:Ne,value2:rt};Ne!==rt&&(Ne<rt?le=-1:le=1,Fe.descending===!0&&(le=-le))}return le===1},k={environment:A,input:w};return l=await o.sort.apply(k,[d,_]),l}function Le(h,w,A){var l=async function(d){if(!(typeof d>"u")){var m=A.lookup("clone");if(!ve(m))throw{code:"T2013",stack:new Error().stack,position:h.position};var _=await ue(m,[d],null,A),k=await F(h.pattern,_,A);if(typeof k<"u"){Array.isArray(k)||(k=[k]);for(var N=0;N<k.length;N++){var W=k[N];if(W&&(W.isPrototypeOf(_)||W instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:h.position};var le=await F(h.update,W,A),fe=typeof le;if(fe!=="undefined"){if(fe!=="object"||le===null||Array.isArray(le))throw{code:"T2011",stack:new Error().stack,position:h.update.position,value:le};for(var Fe in le)W[Fe]=le[Fe]}if(typeof h.delete<"u"){var xe=await F(h.delete,W,A);if(typeof xe<"u"){var qe=xe;if(Array.isArray(xe)||(xe=[xe]),!v(xe))throw{code:"T2012",stack:new Error().stack,position:h.delete.position,value:qe};for(var Ne=0;Ne<xe.length;Ne++)typeof W=="object"&&W!==null&&delete W[xe[Ne]]}}}}return _}};return re(l,"<(oa):o>")}var de=x("function($f, $g) { function($x){ $g($f($x)) } }");async function we(h,w,A){var l,d=await F(h.lhs,w,A);if(h.rhs.type==="function")l=await De(h.rhs,w,A,{context:d});else{var m=await F(h.rhs,w,A);if(!ve(m))throw{code:"T2006",stack:new Error().stack,position:h.position,value:m};if(ve(d)){var _=await F(de,null,A);l=await ue(_,[d,m],null,A)}else l=await ue(m,[d],null,A)}return l}async function De(h,w,A,l){var d,m=await F(h.procedure,w,A);if(typeof m>"u"&&h.procedure.type==="path"&&A.lookup(h.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:h.position,token:h.procedure.steps[0].value};var _=[];typeof l<"u"&&_.push(l.context);for(var k=0;k<h.arguments.length;k++){const W=await F(h.arguments[k],w,A);if(ve(W)){const le=async function(...fe){return await ue(W,fe,null,A)};le.arity=B(W),_.push(le)}else _.push(W)}var N=h.procedure.type==="path"?h.procedure.steps[0].value:h.procedure.value;try{typeof m=="object"&&(m.token=N,m.position=h.position),d=await ue(m,_,w,A)}catch(W){throw W.position||(W.position=h.position),W.token||(W.token=N),W}return d}async function ue(h,w,A,l){var d;for(d=await ot(h,w,A,l);Oe(d)&&d.thunk===!0;){var m=await F(d.body.procedure,d.input,d.environment);d.body.procedure.type==="variable"&&(m.token=d.body.procedure.value),m.position=d.body.procedure.position;for(var _=[],k=0;k<d.body.arguments.length;k++)_.push(await F(d.body.arguments[k],d.input,d.environment));d=await ot(m,_,A,l)}return d}async function ot(h,w,A,l){var d;try{var m=w;if(h&&(m=lt(h.signature,w,A)),Oe(h))d=await yt(h,m);else if(h&&h._jsonata_function===!0){var _={environment:l,input:A};d=h.implementation.apply(_,m),U(d)&&(d=d.next().value),D(d)&&(d=await d)}else if(typeof h=="function")d=h.apply(A,m),D(d)&&(d=await d);else throw{code:"T1006",stack:new Error().stack}}catch(k){throw h&&(typeof k.token>"u"&&typeof h.token<"u"&&(k.token=h.token),k.position=h.position||k.position),k}return d}function Lt(h,w,A){var l={_jsonata_lambda:!0,input:w,environment:A,arguments:h.arguments,signature:h.signature,body:h.body};return h.thunk===!0&&(l.thunk=!0),l.apply=async function(d,m){return await ue(l,m,w,d?d.environment:A)},l}async function vt(h,w,A){for(var l,d=[],m=0;m<h.arguments.length;m++){var _=h.arguments[m];_.type==="operator"&&_.value==="?"?d.push(_):d.push(await F(_,w,A))}var k=await F(h.procedure,w,A);if(typeof k>"u"&&h.procedure.type==="path"&&A.lookup(h.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:h.position,token:h.procedure.steps[0].value};if(Oe(k))l=zt(k,d);else if(k&&k._jsonata_function===!0)l=Xt(k.implementation,d);else if(typeof k=="function")l=Xt(k,d);else throw{code:"T1008",stack:new Error().stack,position:h.position,token:h.procedure.type==="path"?h.procedure.steps[0].value:h.procedure.value};return l}function lt(h,w,A){if(typeof h>"u")return w;var l=h.validate(w,A);return l}async function yt(h,w){var A,l=Nt(h.environment);return h.arguments.forEach(function(d,m){l.bind(d.value,w[m])}),typeof h.body=="function"?A=await vn(h.body,l):A=await F(h.body,h.input,l),A}function zt(h,w){var A=Nt(h.environment),l=[];h.arguments.forEach(function(m,_){var k=w[_];k&&k.type==="operator"&&k.value==="?"?l.push(m):A.bind(m.value,k)});var d={_jsonata_lambda:!0,input:h.input,environment:A,arguments:l,body:h.body};return d}function Xt(h,w){var A=Wt(h);A=A.map(function(_){return"$"+_.trim()});var l="function("+A.join(", ")+"){ _ }",d=x(l);d.body=h;var m=zt(d,w);return m}async function vn(h,w){var A=Wt(h),l=A.map(function(_){return w.lookup(_.trim())}),d={environment:w},m=h.apply(d,l);return D(m)&&(m=await m),m}function Wt(h){var w=h.toString(),A=/\(([^)]*)\)/.exec(w)[1],l=A.split(",");return l}function re(h,w){var A={_jsonata_function:!0,implementation:h};return typeof w<"u"&&(A.signature=I(w)),A}async function yn(h,w){if(!(typeof h>"u")){var A=this.input;typeof w<"u"&&(A=w,Array.isArray(A)&&!J(A)&&(A=q(A),A.outerWrapper=!0));try{var l=x(h,!1)}catch(m){throw jt(m),{stack:new Error().stack,code:"D3120",value:m.message,error:m}}try{var d=await F(l,A,this.environment)}catch(m){throw jt(m),{stack:new Error().stack,code:"D3121",value:m.message,error:m}}return d}}function un(h){if(!(typeof h>"u"))return JSON.parse(o.string(h))}function Nt(h){var w={};const A={bind:function(d,m){w[d]=m},lookup:function(d){var m;return w.hasOwnProperty(d)?m=w[d]:h&&(m=h.lookup(d)),m},timestamp:h?h.timestamp:null,async:h?h.async:!1,isParallelCall:h?h.isParallelCall:!1,global:h?h.global:{ancestry:[null]}};if(h){var l=h.lookup(Symbol.for("jsonata.__createFrame_push"));l&&l(h,A)}return A}y.bind("sum",re(o.sum,"<a<n>:n>")),y.bind("count",re(o.count,"<a:n>")),y.bind("max",re(o.max,"<a<n>:n>")),y.bind("min",re(o.min,"<a<n>:n>")),y.bind("average",re(o.average,"<a<n>:n>")),y.bind("string",re(o.string,"<x-b?:s>")),y.bind("substring",re(o.substring,"<s-nn?:s>")),y.bind("substringBefore",re(o.substringBefore,"<s-s:s>")),y.bind("substringAfter",re(o.substringAfter,"<s-s:s>")),y.bind("lowercase",re(o.lowercase,"<s-:s>")),y.bind("uppercase",re(o.uppercase,"<s-:s>")),y.bind("length",re(o.length,"<s-:n>")),y.bind("trim",re(o.trim,"<s-:s>")),y.bind("pad",re(o.pad,"<s-ns?:s>")),y.bind("match",re(o.match,"<s-f<s:o>n?:a<o>>")),y.bind("contains",re(o.contains,"<s-(sf):b>")),y.bind("replace",re(o.replace,"<s-(sf)(sf)n?:s>")),y.bind("split",re(o.split,"<s-(sf)n?:a<s>>")),y.bind("join",re(o.join,"<a<s>s?:s>")),y.bind("formatNumber",re(o.formatNumber,"<n-so?:s>")),y.bind("formatBase",re(o.formatBase,"<n-n?:s>")),y.bind("formatInteger",re(u.formatInteger,"<n-s:s>")),y.bind("parseInteger",re(u.parseInteger,"<s-s:n>")),y.bind("number",re(o.number,"<(nsb)-:n>")),y.bind("floor",re(o.floor,"<n-:n>")),y.bind("ceil",re(o.ceil,"<n-:n>")),y.bind("round",re(o.round,"<n-n?:n>")),y.bind("abs",re(o.abs,"<n-:n>")),y.bind("sqrt",re(o.sqrt,"<n-:n>")),y.bind("power",re(o.power,"<n-n:n>")),y.bind("random",re(o.random,"<:n>")),y.bind("boolean",re(o.boolean,"<x-:b>")),y.bind("not",re(o.not,"<x-:b>")),y.bind("map",re(o.map,"<af>")),y.bind("zip",re(o.zip,"<a+>")),y.bind("filter",re(o.filter,"<af>")),y.bind("single",re(o.single,"<af?>")),y.bind("reduce",re(o.foldLeft,"<afj?:j>")),y.bind("sift",re(o.sift,"<o-f?:o>")),y.bind("keys",re(o.keys,"<x-:a<s>>")),y.bind("lookup",re(o.lookup,"<x-s:x>")),y.bind("append",re(o.append,"<xx:a>")),y.bind("exists",re(o.exists,"<x:b>")),y.bind("spread",re(o.spread,"<x-:a<o>>")),y.bind("merge",re(o.merge,"<a<o>:o>")),y.bind("reverse",re(o.reverse,"<a:a>")),y.bind("each",re(o.each,"<o-f:a>")),y.bind("error",re(o.error,"<s?:x>")),y.bind("assert",re(o.assert,"<bs?:x>")),y.bind("type",re(o.type,"<x:s>")),y.bind("sort",re(o.sort,"<af?:a>")),y.bind("shuffle",re(o.shuffle,"<a:a>")),y.bind("distinct",re(o.distinct,"<x:x>")),y.bind("base64encode",re(o.base64encode,"<s-:s>")),y.bind("base64decode",re(o.base64decode,"<s-:s>")),y.bind("encodeUrlComponent",re(o.encodeUrlComponent,"<s-:s>")),y.bind("encodeUrl",re(o.encodeUrl,"<s-:s>")),y.bind("decodeUrlComponent",re(o.decodeUrlComponent,"<s-:s>")),y.bind("decodeUrl",re(o.decodeUrl,"<s-:s>")),y.bind("eval",re(yn,"<sx?:x>")),y.bind("toMillis",re(u.toMillis,"<s-s?:n>")),y.bind("fromMillis",re(u.fromMillis,"<n-s?s?:s>")),y.bind("clone",re(un,"<(oa)-:o>"));var Xe={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function jt(h){var w=Xe[h.code];if(typeof w<"u"){var A=w.replace(/\{\{\{([^}]+)}}}/g,function(){return h[arguments[1]]});A=A.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(h[arguments[1]])}),h.message=A}}function $e(h,w){var A,l;try{A=x(h,w&&w.recover),l=A.errors,delete A.errors}catch(_){throw jt(_),_}var d=Nt(y),m=new Date;return d.bind("now",re(function(_,k){return u.fromMillis(m.getTime(),_,k)},"<s?s?:s>")),d.bind("millis",re(function(){return m.getTime()},"<:n>")),w&&w.RegexEngine?$e.RegexEngine=w.RegexEngine:$e.RegexEngine=RegExp,{evaluate:async function(_,k,N){if(typeof l<"u"){var W={code:"S0500",position:0};throw jt(W),W}if(typeof k<"u"){var le;le=Nt(d);for(var fe in k)le.bind(fe,k[fe])}else le=d;le.bind("$",_),m=new Date,le.timestamp=m,Array.isArray(_)&&!J(_)&&(_=q(_),_.outerWrapper=!0);var Fe;try{return Fe=await F(A,_,le),typeof N=="function"&&N(null,Fe),Fe}catch(xe){throw jt(xe),xe}},assign:function(_,k){d.bind(_,k)},registerFunction:function(_,k,N){var W=re(k,N);d.bind(_,W)},ast:function(){return A},errors:function(){return l}}}return $e.parser=x,$e}();i.exports=E},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(n,i,s){var u=n("./signature");const o=(()=>{var f={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},x={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},I=function(C){var v=0,T=C.length,q=function(Oe,U){var D={type:Oe,value:U,position:v};return D},J=function(){for(var Oe=v,U=0,D,B,L=function(F){if(C.charAt(F)==="/"&&U===0){for(var j=0;C.charAt(F-(j+1))==="\\";)j++;if(j%2===0)return!0}return!1};v<T;){var y=C.charAt(v);if(L(v)){if(D=C.substring(Oe,v),D==="")throw{code:"S0301",stack:new Error().stack,position:v};for(v++,y=C.charAt(v),Oe=v;y==="i"||y==="m";)v++,y=C.charAt(v);return B=C.substring(Oe,v)+"g",new RegExp(D,B)}(y==="("||y==="["||y==="{")&&C.charAt(v-1)!=="\\"&&U++,(y===")"||y==="]"||y==="}")&&C.charAt(v-1)!=="\\"&&U--,v++}throw{code:"S0302",stack:new Error().stack,position:v}},ve=function(Oe){if(v>=T)return null;for(var U=C.charAt(v);v<T&&` 	
\r\v`.indexOf(U)>-1;)v++,U=C.charAt(v);if(U==="/"&&C.charAt(v+1)==="*"){var D=v;for(v+=2,U=C.charAt(v);!(U==="*"&&C.charAt(v+1)==="/");)if(U=C.charAt(++v),v>=T)throw{code:"S0106",stack:new Error().stack,position:D};return v+=2,U=C.charAt(v),ve(Oe)}if(Oe!==!0&&U==="/")return v++,q("regex",J());if(U==="."&&C.charAt(v+1)===".")return v+=2,q("operator","..");if(U===":"&&C.charAt(v+1)==="=")return v+=2,q("operator",":=");if(U==="!"&&C.charAt(v+1)==="=")return v+=2,q("operator","!=");if(U===">"&&C.charAt(v+1)==="=")return v+=2,q("operator",">=");if(U==="<"&&C.charAt(v+1)==="=")return v+=2,q("operator","<=");if(U==="*"&&C.charAt(v+1)==="*")return v+=2,q("operator","**");if(U==="~"&&C.charAt(v+1)===">")return v+=2,q("operator","~>");if(Object.prototype.hasOwnProperty.call(f,U))return v++,q("operator",U);if(U==='"'||U==="'"){var B=U;v++;for(var L="";v<T;){if(U=C.charAt(v),U==="\\")if(v++,U=C.charAt(v),Object.prototype.hasOwnProperty.call(x,U))L+=x[U];else if(U==="u"){var y=C.substr(v+1,4);if(/^[0-9a-fA-F]+$/.test(y)){var F=parseInt(y,16);L+=String.fromCharCode(F),v+=4}else throw{code:"S0104",stack:new Error().stack,position:v}}else throw{code:"S0103",stack:new Error().stack,position:v,token:U};else{if(U===B)return v++,q("string",L);L+=U}v++}throw{code:"S0101",stack:new Error().stack,position:v}}var j=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,ie=j.exec(C.substring(v));if(ie!==null){var me=parseFloat(ie[0]);if(!isNaN(me)&&isFinite(me))return v+=ie[0].length,q("number",me);throw{code:"S0102",stack:new Error().stack,position:v,token:ie[0]}}var Y;if(U==="`"){v++;var ne=C.indexOf("`",v);if(ne!==-1)return Y=C.substring(v,ne),v=ne+1,q("name",Y);throw v=T,{code:"S0105",stack:new Error().stack,position:v}}for(var ce=v,ke;;)if(ke=C.charAt(ce),ce===T||` 	
\r\v`.indexOf(ke)>-1||Object.prototype.hasOwnProperty.call(f,ke)){if(C.charAt(v)==="$")return Y=C.substring(v+1,ce),v=ce,q("variable",Y);switch(Y=C.substring(v,ce),v=ce,Y){case"or":case"in":case"and":return q("operator",Y);case"true":return q("value",!0);case"false":return q("value",!1);case"null":return q("value",null);default:return v===T&&Y===""?null:q("name",Y)}}else ce++};return ve},E=function(C,v){var T,q,J={},ve=[],Oe=function(){var b=[];T.id!=="(end)"&&b.push({type:T.type,value:T.value,position:T.position});for(var S=q();S!==null;)b.push(S),S=q();return b},U={nud:function(){var b={code:"S0211",token:this.value,position:this.position};if(v)return b.remaining=Oe(),b.type="error",ve.push(b),b;throw b.stack=new Error().stack,b}},D=function(b,S){var oe=J[b];return S=S||0,oe?S>=oe.lbp&&(oe.lbp=S):(oe=Object.create(U),oe.id=oe.value=b,oe.lbp=S,J[b]=oe),oe},B=function(b){if(v){b.remaining=Oe(),ve.push(b);var S=J["(error)"];return T=Object.create(S),T.error=b,T.type="(error)",T}else throw b.stack=new Error().stack,b},L=function(b,S){if(b&&T.id!==b){var oe;T.id==="(end)"?oe="S0203":oe="S0202";var Ae={code:oe,position:T.position,token:T.value,value:b};return B(Ae)}var Ge=q(S);if(Ge===null)return T=J["(end)"],T.position=C.length,T;var Re=Ge.value,P=Ge.type,M;switch(P){case"name":case"variable":M=J["(name)"];break;case"operator":if(M=J[Re],!M)return B({code:"S0204",stack:new Error().stack,position:Ge.position,token:Re});break;case"string":case"number":case"value":M=J["(literal)"];break;case"regex":P="regex",M=J["(regex)"];break;default:return B({code:"S0205",stack:new Error().stack,position:Ge.position,token:Re})}return T=Object.create(M),T.value=Re,T.type=P,T.position=Ge.position,T},y=function(b){var S,oe=T;for(L(null,!0),S=oe.nud();b<T.lbp;)oe=T,L(),S=oe.led(S);return S},F=function(b){var S=D(b,0);S.nud=function(){return this}},j=function(b,S,oe){var Ae=S||f[b],Ge=D(b,Ae);return Ge.led=oe||function(Re){return this.lhs=Re,this.rhs=y(Ae),this.type="binary",this},Ge},ie=function(b,S,oe){var Ae=D(b,S);return Ae.led=oe,Ae},me=function(b,S){var oe=D(b);return oe.nud=S||function(){return this.expression=y(70),this.type="unary",this},oe};F("(end)"),F("(name)"),F("(literal)"),F("(regex)"),D(":"),D(";"),D(","),D(")"),D("]"),D("}"),D(".."),j("."),j("+"),j("-"),j("*"),j("/"),j("%"),j("="),j("<"),j(">"),j("!="),j("<="),j(">="),j("&"),j("and"),j("or"),j("in"),F("and"),F("or"),F("in"),me("-"),j("~>"),ie("(error)",10,function(b){return this.lhs=b,this.error=T.error,this.remaining=Oe(),this.type="error",this}),me("*",function(){return this.type="wildcard",this}),me("**",function(){return this.type="descendant",this}),me("%",function(){return this.type="parent",this}),j("(",f["("],function(b){if(this.procedure=b,this.type="function",this.arguments=[],T.id!==")")for(;T.type==="operator"&&T.id==="?"?(this.type="partial",this.arguments.push(T),L("?")):this.arguments.push(y(0)),T.id===",";)L(",");if(L(")",!0),b.type==="name"&&(b.value==="function"||b.value==="λ")){if(this.arguments.forEach(function(Re,P){if(Re.type!=="variable")return B({code:"S0208",stack:new Error().stack,position:Re.position,token:Re.value,value:P+1})}),this.type="lambda",T.id==="<"){for(var S=T.position,oe=1,Ae="<";oe>0&&T.id!=="{"&&T.id!=="(end)";){var Ge=L();Ge.id===">"?oe--:Ge.id==="<"&&oe++,Ae+=Ge.value}L(">");try{this.signature=u(Ae)}catch(Re){return Re.position=S+Re.offset,B(Re)}}L("{"),this.body=y(0),L("}")}return this}),me("(",function(){for(var b=[];T.id!==")"&&(b.push(y(0)),T.id===";");)L(";");return L(")",!0),this.type="block",this.expressions=b,this}),me("[",function(){var b=[];if(T.id!=="]")for(;;){var S=y(0);if(T.id===".."){var oe={type:"binary",value:"..",position:T.position,lhs:S};L(".."),oe.rhs=y(0),S=oe}if(b.push(S),T.id!==",")break;L(",")}return L("]",!0),this.expressions=b,this.type="unary",this}),j("[",f["["],function(b){if(T.id==="]"){for(var S=b;S&&S.type==="binary"&&S.value==="[";)S=S.lhs;return S.keepArray=!0,L("]"),b}else return this.lhs=b,this.rhs=y(f["]"]),this.type="binary",L("]",!0),this}),j("^",f["^"],function(b){L("(");for(var S=[];;){var oe={descending:!1};if(T.id==="<"?L("<"):T.id===">"&&(oe.descending=!0,L(">")),oe.expression=y(0),S.push(oe),T.id!==",")break;L(",")}return L(")"),this.lhs=b,this.rhs=S,this.type="binary",this});var Y=function(b){var S=[];if(T.id!=="}")for(;;){var oe=y(0);L(":");var Ae=y(0);if(S.push([oe,Ae]),T.id!==",")break;L(",")}return L("}",!0),typeof b>"u"?(this.lhs=S,this.type="unary"):(this.lhs=b,this.rhs=S,this.type="binary"),this};me("{",Y),j("{",f["{"],Y),ie(":=",f[":="],function(b){return b.type!=="variable"?B({code:"S0212",stack:new Error().stack,position:b.position,token:b.value}):(this.lhs=b,this.rhs=y(f[":="]-1),this.type="binary",this)}),j("@",f["@"],function(b){return this.lhs=b,this.rhs=y(f["@"]),this.rhs.type!=="variable"?B({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),j("#",f["#"],function(b){return this.lhs=b,this.rhs=y(f["#"]),this.rhs.type!=="variable"?B({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),j("?",f["?"],function(b){return this.type="condition",this.condition=b,this.then=y(0),T.id===":"&&(L(":"),this.else=y(0)),this}),me("|",function(){return this.type="transform",this.pattern=y(0),L("|"),this.update=y(0),T.id===","&&(L(","),this.delete=y(0)),L("|"),this});var ne=function(b){var S;if(b.type==="function"&&!b.predicate){var oe={type:"lambda",thunk:!0,arguments:[],position:b.position};oe.body=b,S=oe}else if(b.type==="condition")b.then=ne(b.then),typeof b.else<"u"&&(b.else=ne(b.else)),S=b;else if(b.type==="block"){var Ae=b.expressions.length;Ae>0&&(b.expressions[Ae-1]=ne(b.expressions[Ae-1])),S=b}else S=b;return S},ce=0,ke=0,ze=[],ye=function(b,S){switch(b.type){case"name":case"wildcard":S.level--,S.level===0&&(typeof b.ancestor>"u"||(ze[S.index].slot.label=b.ancestor.label),b.ancestor=S,b.tuple=!0);break;case"parent":S.level++;break;case"block":b.expressions.length>0&&(b.tuple=!0,S=ye(b.expressions[b.expressions.length-1],S));break;case"path":b.tuple=!0;var oe=b.steps.length-1;for(S=ye(b.steps[oe--],S);S.level>0&&oe>=0;)S=ye(b.steps[oe--],S);break;default:throw{code:"S0217",token:b.type,position:b.position}}return S},ge=function(b,S){if(typeof S.seekingParent<"u"||S.type==="parent"){var oe=typeof S.seekingParent<"u"?S.seekingParent:[];S.type==="parent"&&oe.push(S.slot),typeof b.seekingParent>"u"?b.seekingParent=oe:Array.prototype.push.apply(b.seekingParent,oe)}},Be=function(b){var S=b.steps.length-1,oe=b.steps[S],Ae=typeof oe.seekingParent<"u"?oe.seekingParent:[];oe.type==="parent"&&Ae.push(oe.slot);for(var Ge=0;Ge<Ae.length;Ge++){var Re=Ae[Ge];for(S=b.steps.length-2;Re.level>0;){if(S<0){typeof b.seekingParent>"u"?b.seekingParent=[Re]:b.seekingParent.push(Re);break}for(var P=b.steps[S--];S>=0&&P.focus&&b.steps[S].focus;)P=b.steps[S--];Re=ye(P,Re)}}},te=function(b){var S;switch(b.type){case"binary":switch(b.value){case".":var oe=te(b.lhs);oe.type==="path"?S=oe:S={type:"path",steps:[oe]},oe.type==="parent"&&(S.seekingParent=[oe.slot]);var Ae=te(b.rhs);Ae.type==="function"&&Ae.procedure.type==="path"&&Ae.procedure.steps.length===1&&Ae.procedure.steps[0].type==="name"&&S.steps[S.steps.length-1].type==="function"&&(S.steps[S.steps.length-1].nextFunction=Ae.procedure.steps[0].value),Ae.type==="path"?Array.prototype.push.apply(S.steps,Ae.steps):(typeof Ae.predicate<"u"&&(Ae.stages=Ae.predicate,delete Ae.predicate),S.steps.push(Ae)),S.steps.filter(function(ee){if(ee.type==="number"||ee.type==="value")throw{code:"S0213",stack:new Error().stack,position:ee.position,value:ee.value};return ee.type==="string"}).forEach(function(ee){ee.type="name"}),S.steps.filter(function(ee){return ee.keepArray===!0}).length>0&&(S.keepSingletonArray=!0);var Ge=S.steps[0];Ge.type==="unary"&&Ge.value==="["&&(Ge.consarray=!0);var Re=S.steps[S.steps.length-1];Re.type==="unary"&&Re.value==="["&&(Re.consarray=!0),Be(S);break;case"[":S=te(b.lhs);var P=S,M="predicate";if(S.type==="path"&&(P=S.steps[S.steps.length-1],M="stages"),typeof P.group<"u")throw{code:"S0209",stack:new Error().stack,position:b.position};typeof P[M]>"u"&&(P[M]=[]);var R=te(b.rhs);typeof R.seekingParent<"u"&&(R.seekingParent.forEach(ee=>{ee.level===1?ye(P,ee):ee.level--}),ge(P,R)),P[M].push({type:"filter",expr:R,position:b.position});break;case"{":if(S=te(b.lhs),typeof S.group<"u")throw{code:"S0210",stack:new Error().stack,position:b.position};S.group={lhs:b.rhs.map(function(ee){return[te(ee[0]),te(ee[1])]}),position:b.position};break;case"^":S=te(b.lhs),S.type!=="path"&&(S={type:"path",steps:[S]});var K={type:"sort",position:b.position};K.terms=b.rhs.map(function(ee){var he=te(ee.expression);return ge(K,he),{descending:ee.descending,expression:he}}),S.steps.push(K),Be(S);break;case":=":S={type:"bind",value:b.value,position:b.position},S.lhs=te(b.lhs),S.rhs=te(b.rhs),ge(S,S.rhs);break;case"@":if(S=te(b.lhs),P=S,S.type==="path"&&(P=S.steps[S.steps.length-1]),typeof P.stages<"u"||typeof P.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:b.position};if(P.type==="sort")throw{code:"S0216",stack:new Error().stack,position:b.position};b.keepArray&&(P.keepArray=!0),P.focus=b.rhs.value,P.tuple=!0;break;case"#":S=te(b.lhs),P=S,S.type==="path"?P=S.steps[S.steps.length-1]:(S={type:"path",steps:[S]},typeof P.predicate<"u"&&(P.stages=P.predicate,delete P.predicate)),typeof P.stages>"u"?P.index=b.rhs.value:P.stages.push({type:"index",value:b.rhs.value,position:b.position}),P.tuple=!0;break;case"~>":S={type:"apply",value:b.value,position:b.position},S.lhs=te(b.lhs),S.rhs=te(b.rhs),S.keepArray=S.lhs.keepArray||S.rhs.keepArray;break;default:S={type:b.type,value:b.value,position:b.position},S.lhs=te(b.lhs),S.rhs=te(b.rhs),ge(S,S.lhs),ge(S,S.rhs)}break;case"unary":S={type:b.type,value:b.value,position:b.position},b.value==="["?S.expressions=b.expressions.map(function(ee){var he=te(ee);return ge(S,he),he}):b.value==="{"?S.lhs=b.lhs.map(function(ee){var he=te(ee[0]);ge(S,he);var Te=te(ee[1]);return ge(S,Te),[he,Te]}):(S.expression=te(b.expression),b.value==="-"&&S.expression.type==="number"?(S=S.expression,S.value=-S.value):ge(S,S.expression));break;case"function":case"partial":S={type:b.type,name:b.name,value:b.value,position:b.position},S.arguments=b.arguments.map(function(ee){var he=te(ee);return ge(S,he),he}),S.procedure=te(b.procedure);break;case"lambda":S={type:b.type,arguments:b.arguments,signature:b.signature,position:b.position};var X=te(b.body);S.body=ne(X);break;case"condition":S={type:b.type,position:b.position},S.condition=te(b.condition),ge(S,S.condition),S.then=te(b.then),ge(S,S.then),typeof b.else<"u"&&(S.else=te(b.else),ge(S,S.else));break;case"transform":S={type:b.type,position:b.position},S.pattern=te(b.pattern),S.update=te(b.update),typeof b.delete<"u"&&(S.delete=te(b.delete));break;case"block":S={type:b.type,position:b.position},S.expressions=b.expressions.map(function(ee){var he=te(ee);return ge(S,he),(he.consarray||he.type==="path"&&he.steps[0].consarray)&&(S.consarray=!0),he});break;case"name":S={type:"path",steps:[b]},b.keepArray&&(S.keepSingletonArray=!0);break;case"parent":S={type:"parent",slot:{label:"!"+ce++,level:1,index:ke++}},ze.push(S);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":S=b;break;case"operator":if(b.value==="and"||b.value==="or"||b.value==="in")b.type="name",S=te(b);else if(b.value==="?")S=b;else throw{code:"S0201",stack:new Error().stack,position:b.position,token:b.value};break;case"error":S=b,b.lhs&&(S=te(b.lhs));break;default:var H="S0206";b.id==="(end)"&&(H="S0207");var z={code:H,position:b.position,token:b.value};if(v)return ve.push(z),{type:"error",error:z};throw z.stack=new Error().stack,z}return b.keepArray&&(S.keepArray=!0),S};q=I(C),L();var Ce=y(0);if(T.id!=="(end)"){var Pe={code:"S0201",position:T.position,token:T.value};B(Pe)}if(Ce=te(Ce),Ce.type==="parent"||typeof Ce.seekingParent<"u")throw{code:"S0217",token:Ce.type,position:Ce.position};return ve.length>0&&(Ce.errors=ve),Ce};return E})();i.exports=o},{"./signature":5}],5:[function(n,i,s){var u=n("./utils");const o=(()=>{var f={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function x(I){for(var E=1,C=[],v={},T=v;E<I.length;){var q=I.charAt(E);if(q===":")break;var J=function(){C.push(v),T=v,v={}},ve=function(j,ie,me,Y){for(var ne=1,ce=ie;ce<j.length;)if(ce++,q=j.charAt(ce),q===Y){if(ne--,ne===0)break}else q===me&&ne++;return ce};switch(q){case"s":case"n":case"b":case"l":case"o":v.regex="["+q+"m]",v.type=q,J();break;case"a":v.regex="[asnblfom]",v.type=q,v.array=!0,J();break;case"f":v.regex="f",v.type=q,J();break;case"j":v.regex="[asnblom]",v.type=q,J();break;case"x":v.regex="[asnblfom]",v.type=q,J();break;case"-":T.context=!0,T.contextRegex=new RegExp(T.regex),T.regex+="?";break;case"?":case"+":T.regex+=q;break;case"(":var Oe=ve(I,E,"(",")"),U=I.substring(E+1,Oe);if(U.indexOf("<")===-1)v.regex="["+U+"m]";else throw{code:"S0402",stack:new Error().stack,value:U,offset:E};v.type="("+U+")",E=Oe,J();break;case"<":if(T.type==="a"||T.type==="f"){var D=ve(I,E,"<",">");T.subtype=I.substring(E+1,D),E=D}else throw{code:"S0401",stack:new Error().stack,value:T.type,offset:E};break}E++}var B="^"+C.map(function(j){return"("+j.regex+")"}).join("")+"$",L=new RegExp(B),y=function(j){var ie;if(u.isFunction(j))ie="f";else{var me=typeof j;switch(me){case"string":ie="s";break;case"number":ie="n";break;case"boolean":ie="b";break;case"object":j===null?ie="l":Array.isArray(j)?ie="a":ie="o";break;case"undefined":default:ie="m"}}return ie},F=function(j,ie){for(var me="^",Y=0,ne=0;ne<C.length;ne++){me+=C[ne].regex;var ce=ie.match(me);if(ce===null)throw{code:"T0410",stack:new Error().stack,value:j[Y],index:Y+1};Y=ce[0].length}throw{code:"T0410",stack:new Error().stack,value:j[Y],index:Y+1}};return{definition:I,validate:function(j,ie){var me="";j.forEach(function(ke){me+=y(ke)});var Y=L.exec(me);if(Y){var ne=[],ce=0;return C.forEach(function(ke,ze){var ye=j[ce],ge=Y[ze+1];if(ge==="")if(ke.context&&ke.contextRegex){var Be=y(ie);if(ke.contextRegex.test(Be))ne.push(ie);else throw{code:"T0411",stack:new Error().stack,value:ie,index:ce+1}}else ne.push(ye),ce++;else ge.split("").forEach(function(te){if(ke.type==="a"){if(te==="m")ye=void 0;else{ye=j[ce];var Ce=!0;if(typeof ke.subtype<"u"){if(te!=="a"&&ge!==ke.subtype)Ce=!1;else if(te==="a"&&ye.length>0){var Pe=y(ye[0]);if(Pe!==ke.subtype.charAt(0))Ce=!1;else{var b=ye.filter(function(S){return y(S)!==Pe});Ce=b.length===0}}}if(!Ce)throw{code:"T0412",stack:new Error().stack,value:ye,index:ce+1,type:f[ke.subtype]};te!=="a"&&(ye=[ye])}ne.push(ye),ce++}else ne.push(ye),ce++})}),ne}F(j,me)}}}return x})();i.exports=o},{"./utils":6}],6:[function(n,i,s){const u=(()=>{function o(D){var B=!1;if(typeof D=="number"&&(B=!isNaN(D),B&&!isFinite(D)))throw{code:"D1001",value:D,stack:new Error().stack};return B}function f(D){var B=!1;return Array.isArray(D)&&(B=D.filter(function(L){return typeof L!="string"}).length===0),B}function x(D){var B=!1;return Array.isArray(D)&&(B=D.filter(function(L){return!o(L)}).length===0),B}function I(){var D=[];return D.sequence=!0,arguments.length===1&&D.push(arguments[0]),D}function E(D){return D.sequence===!0&&Array.isArray(D)}function C(D){return D&&(D._jsonata_function===!0||D._jsonata_lambda===!0)||typeof D=="function"}function v(D){var B=typeof D.arity=="number"?D.arity:typeof D.implementation=="function"?D.implementation.length:typeof D.length=="number"?D.length:D.arguments.length;return B}function T(D){return D&&D._jsonata_lambda===!0}var q=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function J(D){return typeof D=="object"&&D!==null&&q in D&&"next"in D&&typeof D.next=="function"}function ve(D,B){if(D===B)return!0;if(typeof D=="object"&&typeof B=="object"&&D!==null&&B!==null){if(Array.isArray(D)&&Array.isArray(B)){if(D.length!==B.length)return!1;for(var L=0;L<D.length;L++)if(!ve(D[L],B[L]))return!1;return!0}var y=Object.getOwnPropertyNames(D),F=Object.getOwnPropertyNames(B);if(y.length!==F.length)return!1;for(y=y.sort(),F=F.sort(),L=0;L<y.length;L++)if(y[L]!==F[L])return!1;for(L=0;L<y.length;L++){var j=y[L];if(!ve(D[j],B[j]))return!1}return!0}return!1}function Oe(D){return typeof D=="object"&&D!==null&&"then"in D&&typeof D.then=="function"}function U(D){var B=[];for(let L of D)B.push(L);return B}return{isNumeric:o,isArrayOfStrings:f,isArrayOfNumbers:x,createSequence:I,isSequence:E,isFunction:C,isLambda:T,isIterable:J,getFunctionArity:v,isDeepEqual:ve,stringToArray:U,isPromise:Oe}})();i.exports=u},{}]},{},[3])(3)})}(ci)),ci.exports}var gc=mc();const oa=Ss(gc);var en={exports:{}};const Rr=qa(za),vc="16.5.0",yc={version:vc};var Is;function bc(){if(Is)return en.exports;Is=1;var t={};const e=Rr,n=Rr,i=Rr,s=Rr,o=yc.version,f=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function x(y){const F={};let j=y.toString();j=j.replace(/\r\n?/mg,`
`);let ie;for(;(ie=f.exec(j))!=null;){const me=ie[1];let Y=ie[2]||"";Y=Y.trim();const ne=Y[0];Y=Y.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),ne==='"'&&(Y=Y.replace(/\\n/g,`
`),Y=Y.replace(/\\r/g,"\r")),F[me]=Y}return F}function I(y){const F=q(y),j=L.configDotenv({path:F});if(!j.parsed){const ne=new Error(`MISSING_DATA: Cannot parse ${F} for an unknown reason`);throw ne.code="MISSING_DATA",ne}const ie=v(y).split(","),me=ie.length;let Y;for(let ne=0;ne<me;ne++)try{const ce=ie[ne].trim(),ke=T(j,ce);Y=L.decrypt(ke.ciphertext,ke.key);break}catch(ce){if(ne+1>=me)throw ce}return L.parse(Y)}function E(y){console.log(`[dotenv@${o}][WARN] ${y}`)}function C(y){console.log(`[dotenv@${o}][DEBUG] ${y}`)}function v(y){return y&&y.DOTENV_KEY&&y.DOTENV_KEY.length>0?y.DOTENV_KEY:t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:""}function T(y,F){let j;try{j=new URL(F)}catch(ce){if(ce.code==="ERR_INVALID_URL"){const ke=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw ke.code="INVALID_DOTENV_KEY",ke}throw ce}const ie=j.password;if(!ie){const ce=new Error("INVALID_DOTENV_KEY: Missing key part");throw ce.code="INVALID_DOTENV_KEY",ce}const me=j.searchParams.get("environment");if(!me){const ce=new Error("INVALID_DOTENV_KEY: Missing environment part");throw ce.code="INVALID_DOTENV_KEY",ce}const Y=`DOTENV_VAULT_${me.toUpperCase()}`,ne=y.parsed[Y];if(!ne){const ce=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${Y} in your .env.vault file.`);throw ce.code="NOT_FOUND_DOTENV_ENVIRONMENT",ce}return{ciphertext:ne,key:ie}}function q(y){let F=null;if(y&&y.path&&y.path.length>0)if(Array.isArray(y.path))for(const j of y.path)e.existsSync(j)&&(F=j.endsWith(".vault")?j:`${j}.vault`);else F=y.path.endsWith(".vault")?y.path:`${y.path}.vault`;else F=n.resolve(process.cwd(),".env.vault");return e.existsSync(F)?F:null}function J(y){return y[0]==="~"?n.join(i.homedir(),y.slice(1)):y}function ve(y){!!(y&&y.debug)&&C("Loading env from encrypted .env.vault");const j=L._parseVault(y);let ie=t;return y&&y.processEnv!=null&&(ie=y.processEnv),L.populate(ie,j,y),{parsed:j}}function Oe(y){const F=n.resolve(process.cwd(),".env");let j="utf8";const ie=!!(y&&y.debug);y&&y.encoding?j=y.encoding:ie&&C("No encoding is specified. UTF-8 is used by default");let me=[F];if(y&&y.path)if(!Array.isArray(y.path))me=[J(y.path)];else{me=[];for(const ke of y.path)me.push(J(ke))}let Y;const ne={};for(const ke of me)try{const ze=L.parse(e.readFileSync(ke,{encoding:j}));L.populate(ne,ze,y)}catch(ze){ie&&C(`Failed to load ${ke} ${ze.message}`),Y=ze}let ce=t;return y&&y.processEnv!=null&&(ce=y.processEnv),L.populate(ce,ne,y),Y?{parsed:ne,error:Y}:{parsed:ne}}function U(y){if(v(y).length===0)return L.configDotenv(y);const F=q(y);return F?L._configVault(y):(E(`You set DOTENV_KEY but you are missing a .env.vault file at ${F}. Did you forget to build it?`),L.configDotenv(y))}function D(y,F){const j=Buffer.from(F.slice(-64),"hex");let ie=Buffer.from(y,"base64");const me=ie.subarray(0,12),Y=ie.subarray(-16);ie=ie.subarray(12,-16);try{const ne=s.createDecipheriv("aes-256-gcm",j,me);return ne.setAuthTag(Y),`${ne.update(ie)}${ne.final()}`}catch(ne){const ce=ne instanceof RangeError,ke=ne.message==="Invalid key length",ze=ne.message==="Unsupported state or unable to authenticate data";if(ce||ke){const ye=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw ye.code="INVALID_DOTENV_KEY",ye}else if(ze){const ye=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw ye.code="DECRYPTION_FAILED",ye}else throw ne}}function B(y,F,j={}){const ie=!!(j&&j.debug),me=!!(j&&j.override);if(typeof F!="object"){const Y=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw Y.code="OBJECT_REQUIRED",Y}for(const Y of Object.keys(F))Object.prototype.hasOwnProperty.call(y,Y)?(me===!0&&(y[Y]=F[Y]),ie&&C(me===!0?`"${Y}" is already defined and WAS overwritten`:`"${Y}" is already defined and was NOT overwritten`)):y[Y]=F[Y]}const L={configDotenv:Oe,_configVault:ve,_parseVault:I,config:U,decrypt:D,parse:x,populate:B};return en.exports.configDotenv=L.configDotenv,en.exports._configVault=L._configVault,en.exports._parseVault=L._parseVault,en.exports.config=L.config,en.exports.decrypt=L.decrypt,en.exports.parse=L.parse,en.exports.populate=L.populate,en.exports=L,en.exports}var wc=bc();const Ui=async t=>{const n=await(await Mt.getWorkspace()).getResource(t);return n||tt("Invalid URL: "+t),await n.getContents({uri:!0})},la=t=>t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:"),Bi={},Wr=async(t,e)=>{const n=await oa(`[**[${e}!='']]`).evaluate(t);for(const i of n){const s=i[e];if(la(s))continue;const u=await Ui(s);Bi[u]=i[e],i[e]=u}},or=t=>Bi[t],bi=async(t,e)=>{const n=await oa(`[**[${e}!='']]`).evaluate(t);for(const i of n){const s=i[e];!s||!s.startsWith("blob:")||(i[e]=Bi[s])}},ca=t=>{var n;dt.registerContribution("catalog.root",{label:t.label,icon:t.icon,contributionId:t.contributionId});const e=t.contributionId??t.label;(n=t.items)==null||n.forEach(i=>{dt.registerContribution(e,{label:i.label,icon:i.icon,contributionId:i.contributionId});const u=import.meta.resolve("/.");i.items.forEach(o=>{var x;const f={label:o.label,icon:o.icon,state:{...o.state}};(x=f.state)!=null&&x.url&&(f.state.url=f.state.url.replace("${baseURL}/",u)),dt.registerContribution(i.contributionId,f)})})},wi=t=>{Object.entries(t).forEach(([e,n])=>{const i=/\${([a-zA-Z0-9_]+)}/g;t[e]=n.replace(i,(s,u)=>{const o=t[u];return o!==void 0?o:s})})},ua=async(...t)=>{const e=await Mt.getWorkspace(),n={};for(const i of t){const s=await(e==null?void 0:e.getResource(i));if(!s)continue;const u=await s.getContents(),o=wc.parse(u||"");wi(o),Object.assign(n,o)}return wi(n),n},Ic=Object.freeze(Object.defineProperty({__proto__:null,getOriginalUri:or,isAbsoluteResource:la,loadEnvs:ua,registerCatalog:ca,replaceUris:Wr,replaceVars:wi,revertBlobUris:bi,toBlobUri:Ui},Symbol.toStringTag,{value:"Module"}));ja.resolveUrl=t=>Ui(t);xn.registerEditorInputHandler({canHandle:t=>t instanceof Mr&&t.getName().endsWith(".geospace"),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),icon:"location-dot",state:{}};return e.widgetFactory=n=>ae`
            <gs-map id="${n}" .input="${e}"></gs-map>`,e}});var pr=(t=>(t[t.LOADED=0]="LOADED",t[t.LAYER_ADDED=1]="LAYER_ADDED",t[t.LAYER_DELETED=2]="LAYER_DELETED",t))(pr||{});const dr=Mn(Oo),xc=`:root,
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
`,kc=t=>new Proxy({},{get:(e,n)=>async(...i)=>{for(const s of t)await s[n](...i)}}),Sc="iframe-map-renderer.html";class Ac{constructor(e,n){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=n,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(n,i){return async(...s)=>await e.sendMessage(i,{...s})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=Sc,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}getViewExtent(){return[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(){this.onSyncCallback&&this.onSyncCallback(this.gsMap)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,n){try{const{toBlobUri:i}=await At(async()=>{const{toBlobUri:u}=await Promise.resolve().then(()=>Ic);return{toBlobUri:u}},[]),s=await i(n);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:s},"*")}catch(i){this.iframe.contentWindow.postMessage({id:e,success:!1,error:i instanceof Error?i.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{var f,x,I,E;if(e.source!==((f=this.iframe)==null?void 0:f.contentWindow))return;const{id:n,result:i,error:s,type:u,gsMap:o}=e.data;if(n!==void 0&&this.pendingMessages.has(n)){const{resolve:C,reject:v}=this.pendingMessages.get(n);this.pendingMessages.delete(n),s?v(new Error(s)):C(i)}u==="dirty"?(x=this.onDirtyCallback)==null||x.call(this):u==="sync"?(I=this.onSyncCallback)==null||I.call(this,o):u==="iframeClicked"?(E=this.onClickCallback)==null||E.call(this):u==="resolveAsset"&&this.handleAssetResolution(n,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const n=i=>{var s;i.source===((s=this.iframe)==null?void 0:s.contentWindow)&&i.data.type==="rendererReady"&&(window.removeEventListener("message",n),e())};window.addEventListener("message",n)})}async sendMessage(e,n){if(!this.iframe)throw new Error("Iframe not initialized");const i=++this.messageId;return new Promise((s,u)=>{this.pendingMessages.set(i,{resolve:s,reject:u}),this.iframe.contentWindow.postMessage({id:i,method:e,params:n},"*"),setTimeout(()=>{this.pendingMessages.has(i)&&(this.pendingMessages.delete(i),u(new Error("Message timeout")))},5e3)})}}class _c{constructor(e,n){this.gsMap=e,this.renderer=n}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,n){n?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){e>=0&&e<this.gsMap.layers.length&&this.gsMap.layers.splice(e,1),this.triggerDirty()}async setLayerVisible(e,n){e>=0&&e<this.gsMap.layers.length&&(this.gsMap.layers[e].visible=n),this.triggerDirty()}async applyStyles(e,n){const i=typeof e=="number"?this.gsMap.layers[e]:this.gsMap.layers.find(s=>s.name===e);i&&(i.stylesPath=n),this.triggerDirty()}async addMarker(e,n){let i=this.gsMap.layers.find(s=>s.name===(n||"Markers"));i||(i={name:n||"Markers",type:"vector",source:{type:"features",features:[]},visible:!0},this.gsMap.layers.push(i)),i.source&&i.source.features&&i.source.features.push(e),this.triggerDirty()}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){e>=0&&e<this.gsMap.controls.length&&this.gsMap.controls.splice(e,1),this.triggerDirty(),await this.renderer.modelToUI()}async addOverlayFromModule(e,n){this.gsMap.overlays.push({src:e,position:n||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){e>=0&&e<this.gsMap.overlays.length&&this.gsMap.overlays.splice(e,1),this.triggerDirty(),await this.renderer.modelToUI()}}class Cc{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,n){dr.set({part:this.source,event:pr.LAYER_ADDED})}async deleteLayer(e){dr.set({part:this.source,event:pr.LAYER_DELETED})}async setLayerVisible(e,n){}async applyStyles(e,n){}async addMarker(e,n){dr.set({part:this.source,event:pr.LAYER_ADDED})}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,n){}async removeOverlay(e){}}var Ec=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,pa=(t,e,n,i)=>{for(var s=i>1?void 0:i?Oc(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Ec(e,n,s),s};let Rt=class extends St{constructor(){super(),this.mapContainer=Rn(),this.isFirstConnection=!0,this.chatContext={history:[]},this.commandStack=new Ms}getOperations(){return this.operations}renderToolbar(){return ae`
            <k-command cmd="zoom_in" icon="magnifying-glass-plus" title="Zoom in"></k-command>
            <k-command cmd="zoom_out" icon="magnifying-glass-minus" title="Zoom out"></k-command>
            <k-command cmd="reset_view" icon="house" title="Reset view"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command cmd="toggle_color_mode" icon="circle-half-stroke" title="Toggle dark/light mode"></k-command>
            <k-command cmd="toggle_mobile_view" icon="mobile" title="Toggle mobile view"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command cmd="refresh_map" icon="rotate" title="Refresh map"></k-command>
        `}async connectedCallback(){var t;if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}(t=this.renderer)!=null&&t.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Me.set(this)}))}async doInitUI(){var f,x,I;const t=(f=this.input)==null?void 0:f.data,e=await ua(".env","envs/.env","env","envs/env","default.env","envs/default.env","dev.env","envs/dev.env");e.BUILD_TIME=new Date;const n=await t.getContents();let i=n&&n.trim()?JSON.parse(n):Es;i=this.migrateGsMap(i),await Wr(i,"url"),await Wr(i,"src"),this.gsMap=i,i.view&&(this.initialView={center:[...i.view.center],zoom:i.view.zoom}),this.renderer=new Ac(i,e);const s=this.renderer.getOperations(),u=new _c(i,this.renderer),o=new Cc(this);this.operations=kc([u,s,o]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(E=>{this.gsMap.view=E.view,this.markDirty(!0)}),(I=(x=this.renderer).setOnClick)==null||I.call(x,()=>{Me.set(this)}),dr.set({part:this,event:pr.LOADED})}catch(E){console.error("Failed to render map:",E),tt(`Failed to render map: ${E.message}`)}}migrateGsMap(t){if(t.view)return t;console.log("Creating view field and migrating old properties...");const e={...t,view:{}};return t.center!==void 0&&(e.view.center=t.center,delete e.center),t.zoom!==void 0&&(e.view.zoom=t.zoom,delete e.zoom),t.projection!==void 0&&(e.view.projection=t.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857"),e}getGsMap(){return this.gsMap}async save(){var t;if(!this.renderer){tt("Map not initialized");return}try{if(!this.gsMap){tt("Map not initialized");return}const e=JSON.parse(JSON.stringify(this.gsMap));await bi(e,"url"),await bi(e,"src"),(t=this.input)==null||t.data.saveContents(JSON.stringify(e,null,2)),this.markDirty(!1)}catch(e){tt(`Save failed: ${e.message}`)}}get mapOperations(){return this.operations}edit(){sn("not yet implemented")}async refresh(){if(!this.renderer){bt.error("Map not initialized");return}await this.renderer.modelToUI()}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}doClose(){var t;(t=this.renderer)==null||t.destroy(),this.renderer=void 0,this.input=void 0}render(){return ae`
            <div class="gc-map-container" ${Ln(this.mapContainer)}>
            </div>
        `}};Rt.styles=[Ua(xc),$t`
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
    `];pa([nt({attribute:!1})],Rt.prototype,"input",2);Rt=pa([mt("gs-map")],Rt);var Tc=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,Gi=(t,e,n,i)=>{for(var s=i>1?void 0:i?Pc(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Tc(e,n,s),s};let fr=class extends St{onPartChanged(t){t==this||t==this.mapEditor||!(t instanceof Rt)||(this.mapEditor=t,this.updateLater())}onMapChanged({part:t}){t==this.mapEditor&&this.updateLater()}toggleVisible(t){var o,f;const e=t.currentTarget.index,u=!(this.mapEditor.getGsMap().layers[e].visible!==!1);(f=(o=this.mapEditor)==null?void 0:o.mapOperations)==null||f.setLayerVisible(e,u),this.updateLater()}confirmAction(t,e){confirm(t)&&e()}render(){return gn(!this.mapEditor,()=>ae`
                    <k-no-content message="Select a map."></k-no-content>`,()=>{var t,e,n,i,s;return ae`
                <wa-tree>
                    <wa-tree-item expanded>
                        ${Ft("fg layers")} Layers
                        ${(t=this.mapEditor.getGsMap())==null?void 0:t.layers.map((u,o)=>ae`
                            <wa-tree-item>
                                <wa-button .index="${o}" @click="${this.toggleVisible}" appearance="plain"
                                           size="small">
                                    <wa-icon name="${u.visible!==!1?"eye":"eye-slash"}" label="${u.visible!==!1?"Hide layer":"Show layer"}"></wa-icon>
                                </wa-button>
                                <span>${u.name??`Layer ${o+1}`}${o==0?ae`
                                    <small>(basemap)</small>`:""}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${()=>this.confirmAction(`Delete layer "${u.name||`Layer ${o+1}`}"?`,()=>this.withRefresh(()=>{var f,x;return(x=(f=this.mapEditor)==null?void 0:f.mapOperations)==null?void 0:x.deleteLayer(o)}))}">
                                    <wa-icon name="trash" label="Delete layer"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${Ft("fg map-control")} Controls
                        ${(n=(e=this.mapEditor)==null?void 0:e.getGsMap())==null?void 0:n.controls.map((u,o)=>ae`
                            <wa-tree-item>
                                <span>${or(u.src)}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${()=>this.confirmAction(`Delete control "${or(u.src)}"?`,()=>this.withRefresh(()=>{var f,x;return(x=(f=this.mapEditor)==null?void 0:f.mapOperations)==null?void 0:x.removeControl(o)}))}">
                                    <wa-icon name="trash" label="Delete control"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${Ft("fg map-poi")} Overlays
                        ${(s=(i=this.mapEditor)==null?void 0:i.getGsMap())==null?void 0:s.overlays.map((u,o)=>ae`
                            <wa-tree-item>
                                <span>${or(u.src)}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${()=>this.confirmAction(`Delete overlay "${or(u.src)}"?`,()=>this.withRefresh(()=>{var f,x;return(x=(f=this.mapEditor)==null?void 0:f.mapOperations)==null?void 0:x.removeOverlay(o)}))}">
                                    <wa-icon name="trash" label="Delete overlay"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${Ft("highlighter")} Styles
                    </wa-tree-item>
                </wa-tree>
            `})}};fr.styles=$t`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;Gi([Ei(Me)],fr.prototype,"onPartChanged",1);Gi([Ei(dr)],fr.prototype,"onMapChanged",1);fr=Gi([mt("gs-map-props")],fr);var Rc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,da=(t,e,n,i)=>{for(var s=i>1?void 0:i?Lc(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Rc(e,n,s),s};const Nc="catalog.root";let In=class extends St{constructor(){super(...arguments),this.treeRef=Rn()}doBeforeUI(){const t=dt.getContributions(Nc);this.rootNodes=this.toTreeNodes(t)}renderToolbar(){const t=Me.get()instanceof In&&rn.get()!==void 0;return ae`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!t} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(t){return t.map(e=>{const n={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const i=dt.getContributions(e.contributionId);n.leaf=i.length===0,n.children=this.toTreeNodes(i)}return n})}onItemDblClicked(t){const e=t.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(t){const e=t.detail.selection[0].model;rn.set(e.data)}setAllExpanded(t){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(n=>{n.expanded=t})}refresh(){this.requestUpdate()}createTreeItems(t,e=!1){var n;return t?ae`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${t} ?expanded=${e}>
                <span>${Ft(t.icon)} ${t.label}</span>
                ${(n=t.children)==null?void 0:n.map(i=>this.createTreeItems(i))}
            </wa-tree-item>`:ae``}render(){var t;return ae`
            <wa-tree ${Ln(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${(t=this.rootNodes)==null?void 0:t.map(e=>this.createTreeItems(e,!0))}
            </wa-tree>
        `}};In.styles=$t`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;da([gt()],In.prototype,"rootNodes",2);In=da([mt("gs-catalog")],In);const Dc="geo!space catalog",$c="earth",Mc="catalog.root.geospace",Fc=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],qc={label:Dc,icon:$c,contributionId:Mc,items:Fc};ut({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async t=>{let e=t.params&&t.params.url;if(!e){const i=rn.get();if(!i||!("url"in i))return;e=i.url}const n=await Mt.getWorkspace();if(!n){tt("No workspace selected.");return}fetch(e,{method:"GET"}).then(i=>i.blob()).then(i=>{const s=new URL(e).pathname.split("/"),u=s[s.length-1];return n.getResource(u,{create:!0}).then(o=>o.saveContents(i,{contentType:Ba.BINARY}).then(()=>{sn("File checked out: "+u)}))}).catch(i=>{tt(i)})}}});ut({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async t=>{const e=Me.get();e instanceof In&&e.refresh()}}});ut({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Me.get();e instanceof In&&e.setAllExpanded(!0)}}});ut({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Me.get();e instanceof In&&e.setAllExpanded(!1)}}});ca(qc);const cn=t=>t.activeEditor instanceof Rt,kn=t=>{const e=t.activeEditor;if(!(e instanceof Rt)||!e.getOperations())throw bt.error("GsMapEditor with renderer not available in context.source"),new Error("GsMapEditor with renderer not available in context.source");return e.getOperations()};Ee.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level, an interger between 0 and 12",required:!0}]},handler:{canExecute:cn,execute:async t=>{await kn(t).setZoom(Number(t.params.zoom).valueOf())}}});Ee.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[]},handler:{canExecute:t=>Me.get()instanceof Rt,execute:async t=>{var i;const e=Me.get(),n=e.getGsMap();if(((i=n==null?void 0:n.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(n.view.zoom+1))}}}});Ee.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[]},handler:{canExecute:t=>Me.get()instanceof Rt,execute:async t=>{var i;const e=Me.get(),n=e.getGsMap();if(((i=n==null?void 0:n.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(n.view.zoom-1))}}}});Ee.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the map",required:!0},{name:"lon",description:"the longitude of the map",required:!0}]},handler:{canExecute:cn,execute:async t=>{const e=kn(t),n=Os([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]);await e.setCenter([n[0],n[1]])}}});Ee.registerAll({command:{id:"add_marker",name:"Add a marker",description:"Add a marker to the map",parameters:[{name:"lat",description:"the latitude of the marker",required:!0},{name:"lon",description:"the longitude of the marker",required:!0},{name:"name",description:"a short name of the marker",required:!0},{name:"description",description:"a description of the marker",required:!0},{name:"iconPath",description:"the path within the workspace to the icon file in any graphics format such as png, jpg or svg; if no icon path provided, a marker.png file will be assumed to be located in the root of the workspace",required:!1},{name:"layerName",description:"the name of the layer to add the marker to; if not provided, markers will be added to the default 'geocoded-markers' layer",required:!1}]},handler:{canExecute:cn,execute:async t=>{const e=kn(t),n=Os([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]),i=t.params.iconPath||"marker.png",s={state:{name:t.params.name,description:t.params.description},style:i,geometry:{type:Ga.Point,coordinates:[...n]}};await e.addMarker(s,t.params.layerName)}}});Ee.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(wn).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:cn,execute:async t=>{var f;const e=kn(t),n=(f=t.params.source)==null?void 0:f.trim().toLowerCase(),i=t.params.url,s=Va(n),u=(t==null?void 0:t.params)&&t.params.basemap==!0,o={type:Ka(n),source:{type:s,url:i??Wa(s)}};await Wr(o,"url"),await e.addLayer(o,u)}}});Ee.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:cn,execute:async t=>{const e=kn(t),n=parseInt(t.params.index)-1;n<0||await e.deleteLayer(n)}}});Ee.registerAll({command:{id:"apply_styles",name:"Apply styles",description:"Applies a styles json file to a layer",parameters:[{name:"stylesPath",description:"the path to the json file containing style definitions",required:!0},{name:"layer",description:"the layer to apply the styles to: can be either a name or the index pointing to a layer in the layers stack",required:!0}]},handler:{canExecute:cn,execute:async t=>{var s;const e=kn(t),n=t.params.layer,i=(s=t.params.stylesPath)==null?void 0:s.trim().toLowerCase();await e.applyStyles(n,i)}}});Ee.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:cn,execute:async t=>{var i;const e=t.source,n=(i=t.params)==null?void 0:i.mode;await e.switchColorMode(n)}}});Ee.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:cn,execute:async t=>{const e=kn(t),n=t.params.src,i=t.params.position;await e.addOverlayFromModule(n,i)}}});Ee.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:cn,execute:async t=>{const e=kn(t),n=t.params.src;await e.addControlFromModule(n)}}});Ee.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates",type:"number[]"}]},handler:{canExecute:cn,execute:async t=>{const e=t.params.latlon,i=t.source.renderer.getViewExtent();if(!i)throw new Error("Failed to get view extent");let s=i;if(e||e===void 0){const{transformExtent:u}=await At(async()=>{const{transformExtent:o}=await import("./index-B4VxoUZf.js").then(f=>f.aa);return{transformExtent:o}},__vite__mapDeps([0,1]));s=u(i,"EPSG:3857","EPSG:4326"),[s[0],s[1]]=[s[1],s[0]],[s[2],s[3]]=[s[3],s[2]]}t.viewExtent=s}}});Ee.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:t=>Me.get()instanceof Rt,execute:async t=>{const e=Me.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});Ee.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:t=>Me.get()instanceof Rt,execute:async t=>{const e=Me.get();e instanceof Rt&&await e.refresh()}}});Ee.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:t=>Me.get()instanceof Rt,execute:async t=>{const e=Me.get();e instanceof Rt&&await e.resetView()}}});Ee.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:t=>Me.get()instanceof Rt,execute:async t=>{const n=Me.get().mapOperations;n&&await n.switchColorMode()}}});at.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>At(()=>import("./git-extension-DVHcD70s.js"),__vite__mapDeps([2,0,1])),icon:"code-branch",experimental:!0});at.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>At(()=>import("./pyterminal-extension-lHJaJrXF.js"),__vite__mapDeps([3,0,1,4])),icon:"k python",experimental:!0});at.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>At(()=>import("./k-linuxterminal-DVP9v3DR.js"),__vite__mapDeps([5,0,1,4])),icon:"terminal",experimental:!0});at.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>At(()=>import("./webllmservice-DEDenTv5.js"),[]),icon:"robot"});at.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>At(()=>import("./p12-splitter-DF9f0H9P.js"),__vite__mapDeps([6,0,1])),icon:"certificate"});at.registerExtension({id:"system.notebook",name:"Jupyter Notebook Editor",description:"View and execute Jupyter notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>At(()=>import("./notebook-extension-VNGvS8yl.js"),__vite__mapDeps([7,0,1,8,9])),icon:"k jupyter"});at.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>At(()=>import("./command-palette-extension-qawgwUIZ.js"),__vite__mapDeps([10,0,1])),icon:"terminal"});at.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>At(()=>import("./download-extension-BcPy5dEp.js"),__vite__mapDeps([11,0,1])),icon:"download"});at.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>At(()=>import("./unzip-extension-BTgGaBD8.js"),__vite__mapDeps([12,0,1])),icon:"box-archive"});at.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>At(()=>import("./md-editor-extension-DDE8BCdL.js"),__vite__mapDeps([13,0,1])),icon:"book"});at.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>At(()=>import("./monaco-editor-extension-BYGRxdob.js"),__vite__mapDeps([14,8,0,1,9])),icon:"file-pen"});at.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>At(()=>import("./memory-usage-extension-Pu039ALX.js"),__vite__mapDeps([15,0,1])),icon:"microchip"});const zc=`You are a specialized commands execution plan generator. Your sole purpose is to analyze user requests expressed in natural language and translate them into a precise sequence of command calls that can be executed by a software controller.

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
\`\`\``,jc=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,Uc=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``;let Bc=0;dt.registerContribution(Ir,{label:"Commander",description:"Commands execution plan generator",role:"commands",sysPrompt:zc,canHandle:({activeEditor:t})=>{const e=Ee.listCommands({source:t});return Object.keys(e).length>0},promptDecorator:async({userPrompt:t,commandRegistry:e,activeEditor:n})=>{const i=e.listCommands({source:n}),s=JSON.stringify(i,null,2);return`${t}

***Available Commands:***
${s}`},messageDecorator:async({message:t,activeEditor:e})=>{if(!t)return;const n=t.content.replace("```json","").replace("```",""),i=JSON.parse(n);let s=!0;t.content=i.map(({id:u,summary:o},f)=>{const x=Ee.getCommand(u);return x?`${f+1}. ${x.name}
	- ${o||x.description}`:(s=!1,`${f+1}. *INVALID COMMAND:* _${u}_`)}).join(`
`),t.actions=t.actions||[],t.actions.push({label:"Show Commands Execution Plan",icon:"list",action:async()=>{const u=Bc++,o=`\`\`\`json
${JSON.stringify(i,null,2)}
\`\`\``,f=new _s(o,`Commands Execution Plan (${u}).md`);await xn.loadEditor(f)}}),s&&t.actions.push({label:"Execute Commands",icon:"play",action:async()=>{const u=(e==null?void 0:e.getCommandStack())||new Ms;await Wn.runAsync("Executing commands",async()=>{bt.debug("Executing commands: "+JSON.stringify(i));const o=Ee.createExecutionContext(e);for(const f of i){const x=Object.entries(f.parameters||{}).map(([I,E])=>(typeof E=="string"&&(E=E.replace(/{{(.*?)}}/g,(C,v)=>o[v.trim()]??"")),[I,E]));o.params=Object.fromEntries(x),await u.execute(f.id,o)}})}})}});const ha=t=>t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function",fa=async({userPrompt:t,activeEditor:e})=>{var u,o;const n=e.getEditor(),i=n.getModel(),s=i.getValueInRange(n.getSelection());return s?`${t}

 Code selection within file "${(u=e.input)==null?void 0:u.data.getWorkspacePath()}":

            ${s}`:`${t}

Code in file "${(o=e.input)==null?void 0:o.data.getWorkspacePath()}":

            ${i.getValue()}`};dt.registerContribution(Ir,{label:"Python Assistant",description:"Python code assistant",role:"py-programmer",sysPrompt:jc,canHandle:({activeEditor:t})=>ha(t)&&t.getLanguage()=="python",promptDecorator:fa});dt.registerContribution(Ir,{label:"JavaScript Assistant",description:"JavaScript code assistant",role:"js-programmer",sysPrompt:Uc,canHandle:({activeEditor:t})=>ha(t)&&t.getLanguage()=="javascript",promptDecorator:fa});var Gc=Object.getOwnPropertyDescriptor,Vc=(t,e,n,i)=>{for(var s=i>1?void 0:i?Gc(e,n):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};let xs=class extends Oi{createRenderRoot(){return this}render(){return ae`
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
                    padding: 0 var(--wa-space-xs);
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
                <k-toolbar id=${Ti}></k-toolbar>
                <k-toolbar id=${Jo}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Zn}></k-toolbar>
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
                    <k-tabs id="${gi}"></k-tabs>
                    <k-tabs id="${Us}"></k-tabs>
                </k-resizable-grid>
                
                <!-- CENTER: Editor + Bottom Panel -->
                <k-resizable-grid 
                    id="center-layout" 
                    orientation="vertical" 
                    sizes="80%, 20%">
                    
                    <!-- Editor Area (fixed, never moves) -->
                    <k-tabs id="${zr}"></k-tabs>
                    
                    <!-- Bottom Panel (terminal, output, etc.) -->
                    <k-tabs id="${Gs}"></k-tabs>
                </k-resizable-grid>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${Bs}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${zs}></k-toolbar>
                <k-toolbar id=${Pi}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${js}></k-toolbar>
            </div>
        `}};xs=Vc([mt("gs-app")],xs);const Wc=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
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
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,ks=ki("GeoSpaceApp"),Kc={".geojson":wn.GeoJSON,".json":wn.GeoJSON,".kml":wn.KML,".gpx":wn.GPX,".tif":wn.GeoTIFF,".tiff":wn.GeoTIFF,".geotiff":wn.GeoTIFF},ma=t=>{const e=t.getName().toLowerCase();for(const[n,i]of Object.entries(Kc))if(e.endsWith(n))return i;return null},Hc=t=>ma(t)!==null,$r={id:"geospace",name:"geo!space",version:rs,description:"A geospatial IDE for working with spatial data",extensions:["system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage"],contributions:{ui:[{target:Ti,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:gi,name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>ae`<k-filebrowser id="${t}"></k-filebrowser>`},{target:gi,name:"catalog",label:"Catalog",icon:"book",component:t=>ae`<gs-catalog id="${t}"></gs-catalog>`},{target:Us,name:"map-props",label:"Map Properties",icon:"fg map-options",component:t=>ae`<gs-map-props id="${t}"></gs-map-props>`},{target:Bs,name:"assistant",label:"AI",icon:"robot",component:t=>ae`<k-aiassist id="${t}"></k-aiassist>`},{target:Gs,name:"log-terminal",label:"Log",icon:"list",component:t=>ae`<k-log-terminal id="${t}"></k-log-terminal>`},{target:zs,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:js,label:`v${rs}`,icon:"circle-info",command:"show_version_info"},{target:"contextmenu.filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const t=rn.get();return t instanceof Mr?!Hc(t):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_geospace_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>At(()=>import("./mapbuilder-extension-BzeoMWNz.js"),__vite__mapDeps([16,0,1])),icon:"earth"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>At(()=>import("./overpass-extension-O-tNqwLi.js"),__vite__mapDeps([17,0,1])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>At(()=>import("./gtfs-extension-86vqW3Cu.js"),__vite__mapDeps([18,0,1])),icon:"map-location-dot"}]},async initialize(){dt.registerContribution(Ir,{label:"App Support",description:"General app support",role:"appsupport",sysPrompt:()=>{const t=at.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,installedAndEnabled:at.isEnabled(n.id)})),e=`***Available Extensions:***
${JSON.stringify(t,null,2)}`;return`${Wc}

${e}`},canHandle:({activeEditor:t})=>t===void 0,promptDecorator:async({userPrompt:t})=>Mt.getWorkspace().then(e=>{var s;const n={workspace:e==null?void 0:e.getName(),activeEditor:(s=xn.getEditorArea())==null?void 0:s.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(n,null,2)}`}

${t}`})}),ut({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{alert(`${$r.name}
Version: ${$r.version}
Alpha Release

${$r.description}`)}}}),ut({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async t=>{const e=rn.get();if(!(e instanceof Mr))return;const n=ma(e);if(!n){ks.warn(`Unsupported file type: ${e.getName()}`);return}const i=e.getWorkspacePath(),s=Ee.createExecutionContext(t.source,{source:n,url:i});await Ee.execute("add_layer",s)}}}),ut({command:{id:"create_geospace_file",name:"Create GeoSpace Map File",description:"Creates a new .geospace map file",parameters:[]},handler:{execute:async()=>{const t={...Es,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}};await Ee.execute("create_file",{params:{path:"map.geospace",contents:JSON.stringify(t,null,2),extension:".geospace",ask:!0}})}}}),ks.info("geo!space is ready!")},render(){return ae`<gs-app></gs-app>`}};$s.loadApp($r,document.body);export{Rt as G,Fn as K,Zl as P,Ti as T,Me as a,Wn as b,tt as c,rn as d,Gs as e,St as f,Bo as g,Jo as h,Pr as i,xn as j,bt as k,ua as l,We as m,dt as n,zs as o,ut as r,sn as t};
