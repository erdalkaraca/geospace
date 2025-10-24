const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C9fhvFKW.js","assets/index-CyGQFstn.css","assets/git-extension-DzIgrWBO.js","assets/pyterminal-extension-wJdzVujZ.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-pit_L-XC.js","assets/p12-splitter-OgDsS_Qm.js","assets/notebook-extension-6-3DDQRK.js","assets/editor.main-CBTrNLza.js","assets/editor-D6kYW_CN.css","assets/command-palette-extension-D9_3WK9j.js","assets/download-extension-Dn3kFufb.js","assets/unzip-extension-Dp1LqccR.js","assets/md-editor-extension-Brl7FlHU.js","assets/monaco-editor-extension-CRc9sgNJ.js","assets/memory-usage-extension-Pi3f7rA5.js","assets/mapbuilder-extension-BdDj0H5k.js","assets/overpass-extension-LEPlwq8w.js"])))=>i.map(i=>d[i]);
var Ia=Object.defineProperty;var xa=(t,e,r)=>e in t?Ia(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Je=(t,e,r)=>xa(t,typeof e!="symbol"?e+"":e,r);import{r as tr,p as In,W as ka,a as cr,g as xs,u as pn,s as dr,B as Aa,i as ks,b as Bt,x as de,t as gt,o as gi,c as Sa,n as Nt,d as vt,e as Tr,E as qt,f as Pr,h as _a,j as Ca,k as Ea,l as Oa,v as _r,m as Qr,M as Xn,T as Ta,q as Pa,w as Ra,y as ur,z as vi,A as Dt,R as Hi,D as La,F as Rn,C as nn,G as yi,S as As,H as Ss,I as Ji,J as Na,_ as Da,K as Ma,L as Et,N as $a,O as Fa,P as qa,Q as _s,U as za,V as ja,X as Ua,Y as Ba,Z as gr}from"./index-C9fhvFKW.js";const Yi={debug:0,info:1,warning:2,error:3};let Ga="debug";const zr={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Ln=null;const ai=[];function Xr(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class Va{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,r){jr(this.source,e,r)}}function Wa(t){return Yi[t]>=Yi[Ga]}function jr(t,e,r){Wa(r)&&(Ln?Ln(t,e,r):(ai.push({source:t,message:e,level:r}),zr[r==="error"?"error":r==="warning"?"warn":r==="debug"?"debug":"log"](`[${t}] ${e}`)))}function Ka(){console.log=function(...t){zr.log.apply(console,t),jr("Console",t.map(e=>Xr(e)).join(" "),"info")},console.info=function(...t){zr.info.apply(console,t),jr("Console",t.map(e=>Xr(e)).join(" "),"info")},console.warn=function(...t){zr.warn.apply(console,t),jr("Console",t.map(e=>Xr(e)).join(" "),"warning")},console.error=function(...t){zr.error.apply(console,t),jr("Console",t.map(e=>Xr(e)).join(" "),"error")},console.debug=function(...t){zr.debug.apply(console,t),jr("Console",t.map(e=>Xr(e)).join(" "),"debug")}}Ka();function Ha(t){for(Ln=t;ai.length>0;){const e=ai.shift();e&&t(e.source,e.message,e.level)}}function Ja(){Ln=null}function bi(t){return new Va(t)}const Ct=bi("System");tr.put("logger",Ct);const xn=`${ka}/settings.json`,wi="events/settings/changed";class Ya{async checkSettings(){this.appSettings||(this.appSettings=await In.getObject(xn),this.appSettings||(this.appSettings={},await In.persistObject(xn,this.appSettings)),cr(wi,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,r){await this.checkSettings(),this.appSettings[e]=r,await In.persistObject(xn,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await In.persistObject(xn,this.appSettings)}}const Jt=new Ya;tr.put("appSettings",Jt);var On={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var Za=On.exports,Zi;function Qa(){return Zi||(Zi=1,function(t){(function(e,r){t.exports?t.exports=r():e.Toastify=r()})(Za,function(e){var r=function(o){return new r.lib.init(o)},i="1.12.0";r.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},r.lib=r.prototype={toastify:i,constructor:r,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||r.defaults.text,this.options.node=o.node||r.defaults.node,this.options.duration=o.duration===0?0:o.duration||r.defaults.duration,this.options.selector=o.selector||r.defaults.selector,this.options.callback=o.callback||r.defaults.callback,this.options.destination=o.destination||r.defaults.destination,this.options.newWindow=o.newWindow||r.defaults.newWindow,this.options.close=o.close||r.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":r.defaults.gravity,this.options.positionLeft=o.positionLeft||r.defaults.positionLeft,this.options.position=o.position||r.defaults.position,this.options.backgroundColor=o.backgroundColor||r.defaults.backgroundColor,this.options.avatar=o.avatar||r.defaults.avatar,this.options.className=o.className||r.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?r.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||r.defaults.onClick,this.options.offset=o.offset||r.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:r.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||r.defaults.ariaLive,this.options.style=o.style||r.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var f in this.options.style)o.style[f]=this.options.style[f];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var x=document.createElement("img");x.src=this.options.avatar,x.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(x):o.insertAdjacentElement("afterbegin",x)}if(this.options.close===!0){var I=document.createElement("button");I.type="button",I.setAttribute("aria-label","Close"),I.className="toast-close",I.innerHTML="&#10006;",I.addEventListener("click",(function(ve){ve.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var O=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&O>360?o.insertAdjacentElement("afterbegin",I):o.appendChild(I)}if(this.options.stopOnFocus&&this.options.duration>0){var C=this;o.addEventListener("mouseover",function(ve){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){C.removeElement(o)},C.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",(function(ve){ve.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",(function(ve){ve.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var v=s("x",this.options),T=s("y",this.options),q=this.options.position=="left"?v:"-"+v,J=this.options.gravity=="toastify-top"?T:"-"+T;o.style.transform="translate("+q+","+J+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var f=r.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,f),r.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),r.reposition()}).bind(this),400)}},r.reposition=function(){for(var o={top:15,bottom:15},f={top:15,bottom:15},x={top:15,bottom:15},I=document.getElementsByClassName("toastify"),O,C=0;C<I.length;C++){u(I[C],"toastify-top")===!0?O="toastify-top":O="toastify-bottom";var v=I[C].offsetHeight;O=O.substr(9,O.length-1);var T=15,q=window.innerWidth>0?window.innerWidth:screen.width;q<=360?(I[C].style[O]=x[O]+"px",x[O]+=v+T):u(I[C],"toastify-left")===!0?(I[C].style[O]=o[O]+"px",o[O]+=v+T):(I[C].style[O]=f[O]+"px",f[O]+=v+T)}return this};function s(o,f){return f.offset[o]?isNaN(f.offset[o])?f.offset[o]:f.offset[o]+"px":"0px"}function u(o,f){return!o||typeof f!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(f)>-1)}return r.lib.init.prototype=r.lib,r})}(On)),On.exports}var Xa=Qa();const Ii=xs(Xa),vr=t=>{console.info("[TOAST] INFO: ",t),Ii({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},ut=t=>{console.error("[TOAST] ERROR: ",t),Ii({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},eo=t=>{console.warn("[TOAST] WARNING: ",t),Ii({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};pn.put("toastInfo",vr);pn.put("toastError",ut);pn.put("toastWarning",eo);var to=Object.defineProperty,ro=(t,e,r)=>e in t?to(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ei=(t,e,r)=>(ro(t,typeof e!="symbol"?e+"":e,r),r),no=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},ti=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},kn=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Qi=(t,e,r)=>(no(t,e,"access private method"),r);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Cs(t,e){return Object.is(t,e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ct=null,an=!1,Tn=1;const Nn=Symbol("SIGNAL");function Ur(t){const e=ct;return ct=t,e}function io(){return ct}function so(){return an}const xi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Un(t){if(an)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(ct===null)return;ct.consumerOnSignalRead(t);const e=ct.nextProducerIndex++;if(Br(ct),e<ct.producerNode.length&&ct.producerNode[e]!==t&&oi(ct)){const r=ct.producerNode[e];Bn(r,ct.producerIndexOfThis[e])}ct.producerNode[e]!==t&&(ct.producerNode[e]=t,ct.producerIndexOfThis[e]=oi(ct)?Ts(t,ct,e):0),ct.producerLastReadVersion[e]=t.version}function ao(){Tn++}function Es(t){if(!(!t.dirty&&t.lastCleanEpoch===Tn)){if(!t.producerMustRecompute(t)&&!po(t)){t.dirty=!1,t.lastCleanEpoch=Tn;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Tn}}function Os(t){if(t.liveConsumerNode===void 0)return;const e=an;an=!0;try{for(const r of t.liveConsumerNode)r.dirty||lo(r)}finally{an=e}}function oo(){return(ct==null?void 0:ct.consumerAllowSignalWrites)!==!1}function lo(t){var e;t.dirty=!0,Os(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function co(t){return t&&(t.nextProducerIndex=0),Ur(t)}function uo(t,e){if(Ur(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(oi(t))for(let r=t.nextProducerIndex;r<t.producerNode.length;r++)Bn(t.producerNode[r],t.producerIndexOfThis[r]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function po(t){Br(t);for(let e=0;e<t.producerNode.length;e++){const r=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==r.version||(Es(r),i!==r.version))return!0}return!1}function Ts(t,e,r){var i;if(ki(t),Br(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)t.producerIndexOfThis[s]=Ts(t.producerNode[s],t,s)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(e)-1}function Bn(t,e){var r;if(ki(t),Br(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(r=t.unwatched)==null||r.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)Bn(t.producerNode[s],t.producerIndexOfThis[s])}const i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const s=t.liveConsumerIndexOfThis[e],u=t.liveConsumerNode[e];Br(u),u.producerIndexOfThis[s]=e}}function oi(t){var e;return t.consumerIsAlwaysLive||(((e=t==null?void 0:t.liveConsumerNode)==null?void 0:e.length)??0)>0}function Br(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function ki(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ps(t){if(Es(t),Un(t),t.value===li)throw t.error;return t.value}function ho(t){const e=Object.create(fo);e.computation=t;const r=()=>Ps(e);return r[Nn]=e,r}const ri=Symbol("UNSET"),ni=Symbol("COMPUTING"),li=Symbol("ERRORED"),fo={...xi,value:ri,dirty:!0,error:null,equal:Cs,producerMustRecompute(t){return t.value===ri||t.value===ni},producerRecomputeValue(t){if(t.value===ni)throw new Error("Detected cycle in computations.");const e=t.value;t.value=ni;const r=co(t);let i,s=!1;try{i=t.computation.call(t.wrapper),s=e!==ri&&e!==li&&t.equal.call(t.wrapper,e,i)}catch(u){i=li,t.error=u}finally{uo(t,r)}if(s){t.value=e;return}t.value=i,t.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function mo(){throw new Error}let go=mo;function vo(){go()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function yo(t){const e=Object.create(Io);e.value=t;const r=()=>(Un(e),e.value);return r[Nn]=e,r}function bo(){return Un(this),this.value}function wo(t,e){oo()||vo(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,xo(t))}const Io={...xi,equal:Cs,value:void 0};function xo(t){t.version++,ao(),Os(t)}/**
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
 */const It=Symbol("node");var er;(t=>{var e,r,i,s;class u{constructor(x,I={}){kn(this,r),ei(this,e);const C=yo(x)[Nn];if(this[It]=C,C.wrapper=this,I){const v=I.equals;v&&(C.equal=v),C.watched=I[t.subtle.watched],C.unwatched=I[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return bo.call(this[It])}set(x){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(so())throw new Error("Writes to signals not permitted during Watcher callback");const I=this[It];wo(I,x)}}e=It,r=new WeakSet,t.isState=f=>typeof f=="object"&&ti(r,f),t.State=u;class o{constructor(x,I){kn(this,s),ei(this,i);const C=ho(x)[Nn];if(C.consumerAllowSignalWrites=!0,this[It]=C,C.wrapper=this,I){const v=I.equals;v&&(C.equal=v),C.watched=I[t.subtle.watched],C.unwatched=I[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Ps(this[It])}}i=It,s=new WeakSet,t.isComputed=f=>typeof f=="object"&&ti(s,f),t.Computed=o,(f=>{var x,I,O,C;function v(D){let B,L=null;try{L=Ur(null),B=D()}finally{Ur(L)}return B}f.untrack=v;function T(D){var B;if(!(0,t.isComputed)(D)&&!(0,t.isWatcher)(D))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((B=D[It].producerNode)==null?void 0:B.map(L=>L.wrapper))??[]}f.introspectSources=T;function q(D){var B;if(!(0,t.isComputed)(D)&&!(0,t.isState)(D))throw new TypeError("Called introspectSinks without a Signal argument");return((B=D[It].liveConsumerNode)==null?void 0:B.map(L=>L.wrapper))??[]}f.introspectSinks=q;function J(D){if(!(0,t.isComputed)(D)&&!(0,t.isState)(D))throw new TypeError("Called hasSinks without a Signal argument");const B=D[It].liveConsumerNode;return B?B.length>0:!1}f.hasSinks=J;function ve(D){if(!(0,t.isComputed)(D)&&!(0,t.isWatcher)(D))throw new TypeError("Called hasSources without a Computed or Watcher argument");const B=D[It].producerNode;return B?B.length>0:!1}f.hasSources=ve;class Ee{constructor(B){kn(this,I),kn(this,O),ei(this,x);let L=Object.create(xi);L.wrapper=this,L.consumerMarkedDirty=B,L.consumerIsAlwaysLive=!0,L.consumerAllowSignalWrites=!1,L.producerNode=[],this[It]=L}watch(...B){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Qi(this,O,C).call(this,B);const L=this[It];L.dirty=!1;const y=Ur(L);for(const F of B)Un(F[It]);Ur(y)}unwatch(...B){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Qi(this,O,C).call(this,B);const L=this[It];Br(L);for(let y=L.producerNode.length-1;y>=0;y--)if(B.includes(L.producerNode[y].wrapper)){Bn(L.producerNode[y],L.producerIndexOfThis[y]);const F=L.producerNode.length-1;if(L.producerNode[y]=L.producerNode[F],L.producerIndexOfThis[y]=L.producerIndexOfThis[F],L.producerNode.length--,L.producerIndexOfThis.length--,L.nextProducerIndex--,y<L.producerNode.length){const j=L.producerIndexOfThis[y],ie=L.producerNode[y];ki(ie),ie.liveConsumerIndexOfThis[j]=y}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[It].producerNode.filter(L=>L.dirty).map(L=>L.wrapper)}}x=It,I=new WeakSet,O=new WeakSet,C=function(D){for(const B of D)if(!(0,t.isComputed)(B)&&!(0,t.isState)(B))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=D=>ti(I,D),f.Watcher=Ee;function U(){var D;return(D=io())==null?void 0:D.wrapper}f.currentComputed=U,f.watched=Symbol("watched"),f.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(er||(er={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko=Symbol("SignalWatcherBrand"),Ao=new FinalizationRegistry(({watcher:t,signal:e})=>{t.unwatch(e)}),Xi=new WeakMap;function Gn(t){return t[ko]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new er.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new er.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new er.subtle.Watcher(function(){const r=Xi.get(this);r!==void 0&&(r._$Si===!1&&r.requestUpdate(),this.watch())});Xi.set(e,this),Ao.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(r=>r.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,r,i){this._$So=!0,super.requestUpdate(e,r,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(e){this._$Sh.add(e);const r=this._$So;this.requestUpdate(),this._$So=r}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */er.State;er.Computed;const Dr=(t,e)=>new er.State(t,e),So={},qe=Dr(null);Dr(null);const ci=Dr(null),Or=Dr(0),pr=Dr(void 0);Dr({name:"",timestamp:0});class _o{constructor(){this.tasks=[]}run(e,r){const i={name:e};try{this.tasks.push(i),Or.set(this.tasks.length),r(i)}finally{this.tasks.splice(this.tasks.indexOf(i),1),Or.set(this.tasks.length)}}async runAsync(e,r){const i={name:e};return this.tasks.push(i),Or.set(this.tasks.length),r(i).finally(()=>{this.tasks.splice(this.tasks.indexOf(i),1),Or.set(this.tasks.length)})}getActiveTasks(){return this.tasks}}const dn=new _o;tr.put("taskService",dn);const ui="events/extensionsregistry/extensionsConfigChanged",An="extensions";class Co{constructor(){this.extensions={},this.loadedExtensions=new Set,dr(wi,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(()=>{var e;(e=this.extensionsSettings)==null||e.forEach(r=>{this.isEnabled(r.id)&&this.load(r.id).catch(i=>{ut("Extension could not be loaded: "+i.message)})})})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Jt.get(An),this.extensionsSettings||(await Jt.set(An,[]),this.extensionsSettings=await Jt.get(An)),cr(ui,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e}getExtensions(){return Object.values(this.extensions)}isEnabled(e){var r;return this.checkExtensionsConfig(),!!((r=this.extensionsSettings)!=null&&r.find(i=>i.id===e&&i.enabled))}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,r=!1){this.isEnabled(e)||(Ct.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,r)}).catch(i=>{Ct.error(`Could not load extension: ${e}`)}))}async load(e){if(this.loadedExtensions.has(e))return;const r=this.extensions[e];if(!r)throw new Error("Extension not found: "+e);this.loadedExtensions.add(e);const i=await dn.runAsync("Loading extension: "+r.name,()=>{if(r.loader)return r.loader();if(r.url)return import(r.url)});(i==null?void 0:i.default)instanceof Function&&(i==null||i.default(pn.getProxy()))}disable(e,r=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,r)}updateEnablement(e,r,i){this.checkExtensionsConfig().then(()=>{var u,o;const s=(u=this.extensionsSettings)==null?void 0:u.find(f=>f.id==e);s?s.enabled=r:(o=this.extensionsSettings)==null||o.push({id:e,enabled:r}),Jt.set(An,this.extensionsSettings).then(()=>{if(i){const f=this.extensions[e];vr(r?f.name+" enabled.":f.name+" disabled  - Please restart to take effect")}cr(ui,this.extensionsSettings)})})}}Ct.debug("ExtensionRegistry initializing...");const it=new Co;tr.put("extensionRegistry",it);Ct.debug("ExtensionRegistry initialized");const Vn="events/contributionregistry/contributionsChanged";class Eo{constructor(){this.contributions=new Map}registerContribution(e,r){const i=this.getContributions(e);if(r.disabled instanceof Function){const s=r.disabled;r.disabled=new er.Computed(s)}i.push(r),cr(Vn,this.contributions)}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const st=new Eo;tr.put("contributionRegistry",st);const Ft=bi("AppLoader");class Oo{constructor(){this.apps=new Map}registerApp(e){this.apps.has(e.id)&&Ft.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Ft.info(`Registered app: ${e.name} (${e.id}) v${e.version}`)}async loadApp(e,r){let i;if(typeof e=="string"){const s=this.apps.get(e);if(!s)throw new Error(`App '${e}' not found. Make sure it's registered.`);i=s}else i=e,this.registerApp(i);Ft.info(`Loading app: ${i.name}...`),this.currentApp&&(Ft.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Ft.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{it.disable(s)}))),i.extensions&&(Ft.info(`Enabling ${i.extensions.length} extensions...`),i.extensions.forEach(s=>{it.enable(s)})),i.contributions&&(Ft.info("Registering app contributions..."),i.contributions.ui&&(i.contributions.ui.forEach(s=>{const u=s.target;u&&st.registerContribution(u,s)}),Ft.info(`Registered ${i.contributions.ui.length} UI contributions`)),i.contributions.extensions&&(i.contributions.extensions.forEach(s=>{it.registerExtension(s)}),Ft.info(`Registered ${i.contributions.extensions.length} app extensions`))),i.initialize&&(Ft.info(`Initializing ${i.name}...`),await i.initialize()),this.currentApp=i,Ft.info(`App ${i.name} loaded successfully`),r&&this.renderApp(r)}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");Aa(this.currentApp.render(),e),Ft.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}}const Rs=new Oo;tr.put("appLoaderService",Rs);const es="0.12.5";class To{constructor(e,r,i,s,u){this.id=e,this.name=r,this.description=i,this.parameters=s||[],this.output=u||[]}}class Ls{async execute(e,r){return Me.execute(e,r)}async undo(){}async redo(){}}class Po{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,r){this.handlers.has(e)||this.handlers.set(e,[]),this.handlers.get(e).push(r)}getHandler(e){return this.handlers.get(e)}execute(e,r={}){const i=this.getHandler(e);if(!i)throw new Error(`No handlers registered for command: ${e}`);for(const s of i)if(s.canExecute===void 0||s.canExecute(r))return s.execute(r);throw new Error(`Registered handlers could not match execution of command: ${e}`)}createAndRegisterCommand(e,r,i,s,u){const o=new To(e,r,i,s);this.registerCommand(o),u&&this.registerHandler(e,u)}registerCommand(e){this.commands[e.id]=e,Ct.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(r=>(Me.getHandler(r.id)||[]).some(s=>s.canExecute===void 0||s.canExecute(e))).reduce((r,i)=>(r[i.id]=i,r),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const r=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(r,e.handler),e.contribution&&e.contribution.target&&st.registerContribution(e.contribution.target,{command:r,...e.contribution})}}const Me=new Po;tr.put("commandRegistry",Me);const pt=t=>{Me.registerAll(t)};class Ro{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Me.listCommands();Object.values(e).forEach(r=>{r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)})}watchCommandRegistry(){const e=Me.registerCommand.bind(Me);Me.registerCommand=r=>{e(r),r.keyBinding&&this.registerKeyBinding(r.id,r.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const r=e.toUpperCase().split("+").map(o=>o.trim());if(r.length===0)return null;const i={ctrl:!1,alt:!1,shift:!1,meta:!1},s=r[r.length-1],u=r.slice(0,-1);for(const o of u)switch(o){case"CTRL":case"CONTROL":i.ctrl=!0;break;case"ALT":case"OPTION":i.alt=!0;break;case"SHIFT":i.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":i.meta=!0;break;default:Ct.warn(`Unknown modifier: ${o}`)}return i.key=this.normalizeKey(s),i}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const r=[];return e.ctrl&&r.push("ctrl"),e.alt&&r.push("alt"),e.shift&&r.push("shift"),e.meta&&r.push("meta"),r.sort(),`${r.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,r){const i=this.parseKeyBinding(r);if(!i)return Ct.error(`Invalid key binding: ${r}`),!1;i.commandId=e;const s=this.getBindingKey(i);this.bindings.has(s)||this.bindings.set(s,[]);const u=this.bindings.get(s);return u.find(f=>f.commandId===e)?(Ct.error(`Key binding ${r} already registered for command ${e}`),!1):(u.push(i),Ct.debug(`Key binding registered: ${r} -> ${e}`),!0)}unregisterKeyBinding(e,r){if(r){const i=this.parseKeyBinding(r);if(i){const s=this.getBindingKey(i),u=this.bindings.get(s);if(u){const o=u.filter(f=>f.commandId!==e);o.length===0?this.bindings.delete(s):this.bindings.set(s,o)}}}else for(const[i,s]of this.bindings.entries()){const u=s.filter(o=>o.commandId!==e);u.length===0?this.bindings.delete(i):this.bindings.set(i,u)}}getKeyBindingsForCommand(e){const r=[];for(const i of this.bindings.values())for(const s of i)s.commandId===e&&r.push(this.formatKeyBinding(s));return r}formatKeyBinding(e){const r=[];e.ctrl&&r.push("Ctrl"),e.alt&&r.push("Alt"),e.shift&&r.push("Shift"),e.meta&&r.push("Cmd");let i=e.key;return i.length===1?i=i.toUpperCase():i=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase(),r.push(i),r.join("+")}handleKeyDown(e){if(!this.enabled)return;const r=e.target;if(r&&(r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.isContentEditable)){const o=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&o==="P"))return}const i={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},s=this.getBindingKey(i),u=this.bindings.get(s);if(u&&u.length>0){const o=u[0];try{e.preventDefault(),e.stopPropagation();const f={source:"keybinding",params:{}};Me.execute(o.commandId,f),Ct.info(`Executed command via key binding: ${o.commandId}`)}catch(f){Ct.error(`Failed to execute command ${o.commandId}: ${f.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}Ct.debug("KeyBindingManager initializing...");const Lo=new Ro;Ct.debug("KeyBindingManager initialized");tr.put("keyBindingManager",Lo);const Ns=(t,e)=>{const r=new er.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{r.watch()}});r.watch(t)},Ai=t=>function(e,r,i){const s=i.value;return s.signal=t,i};Object.defineProperty(ks.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Si extends ks{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(r=>{const i=e[r];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"topic"in s&&this.subscribe(s.topic,s)}}),Object.getOwnPropertyNames(e).forEach(r=>{const i=e[r];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"signal"in s&&this.watch(s.signal,s)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,r){dr(e,r.bind(this))}showInfo(e){vr(e)}showError(e){ut(e)}nobubble(e){return r=>{r.stopPropagation(),e.bind(this)(r)}}command(e,r={}){return()=>{this.executeCommand(e,r)}}executeCommand(e,r){const i={source:this,params:r};Me.execute(e,i)}watch(e,r){Ns(e,r.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}class Mr extends Si{}var No=Object.getOwnPropertyDescriptor,Do=(t,e,r,i)=>{for(var s=i>1?void 0:i?No(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};let pi=class extends Mr{render(){return de`
            <slot></slot>
        `}};pi.styles=Bt`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;pi=Do([gt("k-app")],pi);var Mo=Object.defineProperty,$o=Object.getOwnPropertyDescriptor,hn=(t,e,r,i)=>{for(var s=i>1?void 0:i?$o(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Mo(e,r,s),s};let Rr=class extends Gn(Mr){constructor(){super(...arguments),this.position="start",this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){if(this.getAttribute("id")){const t=this.getAttribute("id");this.contributions=st.getContributions(t)}dr(Vn,()=>{this.requestUpdate()})}contributionCreator(t){var e;if("command"in t){const r=t;return de`
                <wa-button @click=${this.command(r.command)}
                           title=${r.label}
                           ?disabled="${(e=r.disabled)==null?void 0:e.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${r.icon} label="${r.label}"></wa-icon>
                </wa-button>
            `}else if("html"in t){const r=t.html;return r instanceof Function?r():gi(r)}else return de`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return de`
            <div class="toolbar-items" style=${Sa({"justify-content":this.position})}>
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
        `}};Rr.styles=Bt`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;hn([Nt()],Rr.prototype,"position",2);hn([Nt({attribute:!1})],Rr.prototype,"partToolbarContent",2);hn([Nt({attribute:!1})],Rr.prototype,"partToolbarRenderer",2);hn([vt()],Rr.prototype,"contributions",2);Rr=hn([gt("k-toolbar")],Rr);var Fo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,fn=(t,e,r,i)=>{for(var s=i>1?void 0:i?qo(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Fo(e,r,s),s};let Lr=class extends Gn(Mr){constructor(){super(...arguments),this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Tr(),this.dropdownRef=Tr()}doBeforeUI(){const t=this.getAttribute("id");t&&(this.contributions=st.getContributions(t)),dr(Vn,()=>{this.getAttribute("id")&&(this.contributions=st.getContributions(this.getAttribute("id")),this.requestUpdate())})}show(t){this.position=t,this.isOpen=!0,this.updateComplete.then(()=>{this.dropdownRef.value&&this.dropdownRef.value.show()})}onClose(){this.isOpen=!1}renderContribution(t){var e;if("command"in t){const r=t;return de`
                <wa-dropdown-item 
                    @click=${this.command(r.command)}
                    ?disabled="${(e=r.disabled)==null?void 0:e.get()}">
                    ${r.icon?de`<wa-icon slot="icon" name=${r.icon}></wa-icon>`:""}
                    ${r.label}
                </wa-dropdown-item>
            `}else if("html"in t){const r=t.html;return r instanceof Function?r():gi(r)}return qt}render(){if(!this.isOpen)return qt;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():qt;return de`
            <wa-dropdown 
                ${Pr(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${Pr(this.anchorRef)}
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
        `}};Lr.styles=Bt`
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
    `;fn([Nt({attribute:!1})],Lr.prototype,"partContextMenuRenderer",2);fn([vt()],Lr.prototype,"contributions",2);fn([vt()],Lr.prototype,"isOpen",2);fn([vt()],Lr.prototype,"position",2);Lr=fn([gt("k-contextmenu")],Lr);class _i extends Mr{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ts=(t,e,r)=>{const i=new Map;for(let s=e;s<=r;s++)i.set(t[s],s);return i},zo=_a(class extends Ca{constructor(t){if(super(t),t.type!==Ea.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let i;r===void 0?r=e:e!==void 0&&(i=e);const s=[],u=[];let o=0;for(const f of t)s[o]=i?i(f,o):o,u[o]=r(f,o),o++;return{values:u,keys:s}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,i]){const s=Oa(t),{values:u,keys:o}=this.dt(e,r,i);if(!Array.isArray(s))return this.ut=o,u;const f=this.ut??(this.ut=[]),x=[];let I,O,C=0,v=s.length-1,T=0,q=u.length-1;for(;C<=v&&T<=q;)if(s[C]===null)C++;else if(s[v]===null)v--;else if(f[C]===o[T])x[T]=_r(s[C],u[T]),C++,T++;else if(f[v]===o[q])x[q]=_r(s[v],u[q]),v--,q--;else if(f[C]===o[q])x[q]=_r(s[C],u[q]),Qr(t,x[q+1],s[C]),C++,q--;else if(f[v]===o[T])x[T]=_r(s[v],u[T]),Qr(t,s[C],s[v]),v--,T++;else if(I===void 0&&(I=ts(o,T,q),O=ts(f,C,v)),I.has(f[C]))if(I.has(f[v])){const J=O.get(o[T]),ve=J!==void 0?s[J]:null;if(ve===null){const Ee=Qr(t,s[C]);_r(Ee,u[T]),x[T]=Ee}else x[T]=_r(ve,u[T]),Qr(t,s[C],ve),s[J]=null;T++}else Xn(s[v]),v--;else Xn(s[C]),C++;for(;T<=q;){const J=Qr(t,x[q+1]);_r(J,u[T]),x[T++]=J}for(;C<=v;){const J=s[C++];J!==null&&Xn(J)}return this.ut=o,Pa(t,x),Ta}}),jo="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Uo="/assets/jupyter-C78Cpfql.svg",Bo="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";Ra("k",{resolver:t=>new URL(Object.assign({"../icons/js.svg":jo,"../icons/jupyter.svg":Uo,"../icons/python.svg":Bo})[`../icons/${t}.svg`],import.meta.url).href,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor")}});const Xt=(t,e,r,i)=>{if(!t)return"";const s=t.trim().split(/ +/),u=s.pop(),o=s.pop();return de`
        <wa-icon library="${o||qt}" variant="${i||qt}"
                     family="${r||qt}" name=${u} label="${e||t||qt}"></wa-icon>`};var Go=Object.defineProperty,Vo=(t,e,r,i)=>{for(var s=void 0,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(e,r,s)||s);return s&&Go(e,r,s),s};class xt extends _i{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return qt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return qt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,ci.set(null),ci.set(this),qe.set(null),qe.set(this)}registerToolbarContribution(e){const r=this.getAttribute("id");if(!r)return;const i=`toolbar.${r}`;st.registerContribution(i,{...e,target:i})}registerContextMenuContribution(e){const r=this.getAttribute("id");if(!r)return;const i=`contextmenu.${r}`;st.registerContribution(i,{...e,target:i})}}Vo([Nt()],xt.prototype,"dirty");const Ci="app-toolbars-main",Hr="app-toolbars-main-right",Wo="app-toolbars-main-center",Ds="app-toolbars-bottom",Ei="app-toolbars-bottom-center",Ms="app-toolbars-bottom-end",Dn="editor-area-main",di="sidebar-main",$s="sidebar-main-bottom",Fs="sidebar-auxiliary",qs="panel-bottom";var zs=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(zs||{}),Ko=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,js=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ho(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ko(e,r,s),s};let Mn=class extends _i{constructor(){super(...arguments),this.contributions=[],this.tabGroup=Tr(),this.containerId=null}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&this.updateToolbarFromComponent(r)}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const r=t.target.closest("wa-tab-panel");r&&this.updateContextMenuFromComponent(r)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,r=e.closest("wa-tab");if(r){const o=r.getAttribute("panel");if(o){const f=this.getTabPanel(o);if(f){const x=f.querySelector(".tab-content");if(x&&x.firstElementChild){const I=x.firstElementChild;I instanceof xt&&qe.set(I)}}}return}const i=e.closest("wa-scroller.tab-content");if(!i)return;const s=i.closest("wa-tab-panel");if(!s)return;const u=s.querySelector(".tab-content");if(u&&u.firstElementChild){const o=u.firstElementChild;o instanceof xt&&qe.set(o)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,r=e.target.closest("wa-scroller.tab-content");if(!r)return;e.preventDefault();const i=r.closest("wa-tab-panel");if(!i)return;const s=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,button:0});e.target.dispatchEvent(s),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const u=i.querySelector("k-contextmenu");u&&u.show({x:e.clientX,y:e.clientY})})}))}),dr(Vn,()=>{this.containerId&&(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===Dn;this.contributions.forEach(r=>{const i=this.getTabPanel(r.name);if(!i)return;const s=i.querySelector(".tab-content");if(s&&s.firstElementChild){const u=s.firstElementChild;u instanceof xt&&(u.tabContribution=r,u.isEditor=e)}})}}has(t){return!!this.getTabPanel(t)}activate(t){this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(t){if(this.contributions.find(r=>r.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const r=this.getTabPanel(t.name);if(r){const i=r.querySelector(".tab-content");if(i&&i.firstElementChild){const s=i.firstElementChild;s instanceof xt&&(s.tabContribution=t,s.isEditor=this.containerId===Dn)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(r)})}})}handleTabAuxClick(t,e){t.button===zs.MIDDLE&&e.closable&&this.closeTab(t,e.name)}closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!confirm("Unsaved changes will be lost: Do you really want to close?"))return;const r=this.getTabPanel(e);if(!r)return;const i=this.contributions.find(u=>u.name===e);if(!i)return;this.cleanupTabInstance(r);const s=this.contributions.indexOf(i);s>-1&&this.contributions.splice(s,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:r})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=st.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=t.querySelector(".tab-content");if(e&&e.firstElementChild){const r=e.firstElementChild;"close"in r&&typeof r.close=="function"&&r.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`)}getTab(t){return this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`)}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof xt)||!r.renderToolbar)return;const i=t.querySelector("k-toolbar");i&&(i.partToolbarRenderer=()=>r.renderToolbar(),i.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const r=e.firstElementChild;if(!(r instanceof xt)||!r.renderContextMenu)return;const i=t.querySelector("k-contextmenu");i&&(i.partContextMenuRenderer=()=>r.renderContextMenu(),i.requestUpdate())}render(){return de`
            <wa-tab-group ${Pr(this.tabGroup)}>
                ${zo(this.contributions,t=>t.name,t=>de`
                        <wa-tab panel="${t.name}"
                                @auxclick="${e=>this.handleTabAuxClick(e,t)}">
                            ${Xt(t.icon)}
                            ${t.label}
                            ${ur(t.closable,()=>de`
                                <wa-icon name="xmark" label="Close"  @click="${e=>this.closeTab(e,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            <k-toolbar id="toolbar.${t.name}" class="tab-toolbar"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${t.component?t.component(t.name):qt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu.${t.name}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};Mn.styles=Bt`
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
    `;js([vt()],Mn.prototype,"contributions",2);Mn=js([gt("k-tabs")],Mn);var Jo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,mn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Yo(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Jo(e,r,s),s};let Gr=class extends Mr{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.handleResize=t=>{if(!this.resizing)return;const r=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,i=[...this.resizing.startSizes];i[this.resizing.handleIndex]+=r,i[this.resizing.handleIndex+1]-=r;const s=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,u=s*.05;i[this.resizing.handleIndex]>=u&&i[this.resizing.handleIndex+1]>=u&&(this.gridSizes=i.map(o=>`${(o/s*100).toFixed(2)}%`),this.requestUpdate())},this.stopResize=()=>{this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,r)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${r*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${r*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const r=this.orientation==="horizontal"?t.clientX:t.clientY,i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=this.gridSizes.map(u=>u.endsWith("%")?parseFloat(u)/100*i:(u.endsWith("px"),parseFloat(u)));this.resizing={handleIndex:e,startPos:r,startSizes:s},document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return qt;const t=this.gridSizes.flatMap((e,r)=>r===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",de`
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
            
            ${this.gridChildren.map((e,r)=>{if(r<this.gridChildren.length-1){const i=this.orientation==="horizontal"?`${r*2+2}`:"1",s=this.orientation==="vertical"?`${r*2+2}`:"1";return de`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${i};
                                grid-row: ${s};
                            "
                            @mousedown=${u=>this.startResize(u,r)}
                        ></div>
                    `}return qt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};mn([Nt()],Gr.prototype,"orientation",2);mn([Nt()],Gr.prototype,"sizes",2);mn([vt()],Gr.prototype,"gridSizes",2);mn([vt()],Gr.prototype,"gridChildren",2);Gr=mn([gt("k-resizable-grid")],Gr);const Zo=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var Qo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Wn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xo(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Qo(e,r,s),s};let Vr=class extends xt{constructor(){super(...arguments),this.treeRef=Tr()}doBeforeUI(){this.initializeWorkspace(),this.registerToolbarActions(),this.registerContextMenuActions()}async initializeWorkspace(){const t=await Dt.getWorkspace();t?await this.loadWorkspace(t):Me.execute("help")}registerToolbarActions(){this.registerToolbarContribution({label:"Load workspace folder",icon:"folder-open",command:"load_workspace",slot:"start"}),this.registerToolbarContribution({label:"Reload workspace folder",icon:"repeat",command:"reload_workspace",slot:"start"}),this.registerToolbarContribution({label:"Create new file...",icon:"plus",command:"create_file",slot:"start"}),this.registerToolbarContribution({label:"Delete selected resource",icon:"trash",command:"delete_resource",slot:"start",disabled:()=>!(pr.get()instanceof Hi)})}registerContextMenuActions(){this.registerContextMenuContribution({label:"Open",icon:"folder-open",command:"open_editor"}),this.registerContextMenuContribution({label:"Create new file...",icon:"plus",command:"create_file"}),this.registerContextMenuContribution({label:"Delete",icon:"trash",command:"delete_resource",disabled:()=>!(pr.get()instanceof Hi)})}async onWorkspaceChanged(t){await this.loadWorkspace(t)}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t):this.root=void 0}async resourceToTreeNode(t){const e=t instanceof Rn,r={data:t,label:t.getName(),icon:e?"file":"folder-open",leaf:e,children:[]};if(t instanceof La){for(const i of await t.listChildren(!0)){const s=await this.resourceToTreeNode(i);r.children.push(s)}r.children.sort(Zo)}return r}createTreeItems(t,e=!1){return t?de`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${t} ?expanded=${e}>
                <span><wa-icon name=${t.icon} label="${t.leaf?"File":"Folder"}"></wa-icon> ${t.label}</span>
                ${t.children.map(r=>this.createTreeItems(r))}
            </wa-tree-item>`:de``}async onFileDoubleClicked(t){const r=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:r})}onSelectionChanged(t){const e=t.detail.selection[0].model;pr.set(e.data)}render(){return de`
            <div class="tree" ${Pr(this.treeRef)}>
                ${ur(!this.workspaceDir,()=>de`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>de`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};Vr.styles=Bt`
        :host {
        }
    `;Wn([vt()],Vr.prototype,"root",2);Wn([vi(nn)],Vr.prototype,"onWorkspaceChanged",1);Wn([vi(yi)],Vr.prototype,"onWorkspaceConnected",1);Vr=Wn([gt("k-filebrowser")],Vr);var el=Object.getOwnPropertyDescriptor,tl=(t,e,r,i)=>{for(var s=i>1?void 0:i?el(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};st.registerContribution(Ei,{html:"<k-tasks></k-tasks>"});let rs=class extends Gn(xt){render(){if(Or.get()!=0)return de`
            <wa-dropdown>
                <div slot="trigger" title="Active tasks: ${Or.get()}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${Or.get()}
                </div>
                ${dn.getActiveTasks().map(t=>de`
                    <wa-dropdown-item>${t.name}: ${t.message}</wa-dropdown-item>
                `)}
            </wa-dropdown>
        `}};rs=tl([gt("k-tasks")],rs);var rl=Object.getOwnPropertyDescriptor,nl=(t,e,r,i)=>{for(var s=i>1?void 0:i?rl(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};const ns="<no workspace>";let is=class extends Mr{constructor(){super(...arguments),this.workspaceName=ns}doInitUI(){this.updateWorkspaceName(),dr(yi,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Dt.getWorkspace().then(t=>{this.workspaceName=(t==null?void 0:t.getName())||ns,this.requestUpdate()})}handleLoadWorkspace(){Me.execute("load_workspace",{source:this})}render(){return de`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};is=nl([gt("k-workspace-name")],is);var il=Object.getOwnPropertyDescriptor,sl=(t,e,r,i)=>{for(var s=i>1?void 0:i?il(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};const ss="<no part>";st.registerContribution(Ei,{html:"<k-part-name></k-part-name>"});let as=class extends Gn(Mr){getPartName(){var e;const t=qe.get();return t&&(((e=t.tabContribution)==null?void 0:e.label)||t.getAttribute("id"))||ss}render(){var r;const t=qe.get(),e=((r=t==null?void 0:t.tabContribution)==null?void 0:r.icon)||"box";return de`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <span slot="start">${Xt(e,"Part")}</span>
                ${this.getPartName()}
            </wa-button>
        `}};as=sl([gt("k-part-name")],as);function Oi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let $r=Oi();function Us(t){$r=t}const on={exec:()=>null};function Ue(t,e=""){let r=typeof t=="string"?t:t.source;const i={replace:(s,u)=>{let o=typeof u=="string"?u:u.source;return o=o.replace(Tt.caret,"$1"),r=r.replace(s,o),i},getRegex:()=>new RegExp(r,e)};return i}const Tt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},al=/^(?:[ \t]*(?:\n|$))+/,ol=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ll=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,gn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,cl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ti=/(?:[*+-]|\d{1,9}[.)])/,Bs=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Gs=Ue(Bs).replace(/bull/g,Ti).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ul=Ue(Bs).replace(/bull/g,Ti).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Pi=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,pl=/^[^\n]+/,Ri=/(?!\s*\])(?:\\.|[^\[\]\\])+/,dl=Ue(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ri).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),hl=Ue(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ti).getRegex(),Kn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Li=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,fl=Ue("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Li).replace("tag",Kn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Vs=Ue(Pi).replace("hr",gn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Kn).getRegex(),ml=Ue(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Vs).getRegex(),Ni={blockquote:ml,code:ol,def:dl,fences:ll,heading:cl,hr:gn,html:fl,lheading:Gs,list:hl,newline:al,paragraph:Vs,table:on,text:pl},os=Ue("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",gn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Kn).getRegex(),gl={...Ni,lheading:ul,table:os,paragraph:Ue(Pi).replace("hr",gn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",os).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Kn).getRegex()},vl={...Ni,html:Ue(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Li).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:on,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ue(Pi).replace("hr",gn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Gs).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},yl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ws=/^( {2,}|\\)\n(?!\s*$)/,wl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Hn=/[\p{P}\p{S}]/u,Di=/[\s\p{P}\p{S}]/u,Ks=/[^\s\p{P}\p{S}]/u,Il=Ue(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Di).getRegex(),Hs=/(?!~)[\p{P}\p{S}]/u,xl=/(?!~)[\s\p{P}\p{S}]/u,kl=/(?:[^\s\p{P}\p{S}]|~)/u,Al=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Js=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Sl=Ue(Js,"u").replace(/punct/g,Hn).getRegex(),_l=Ue(Js,"u").replace(/punct/g,Hs).getRegex(),Ys="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Cl=Ue(Ys,"gu").replace(/notPunctSpace/g,Ks).replace(/punctSpace/g,Di).replace(/punct/g,Hn).getRegex(),El=Ue(Ys,"gu").replace(/notPunctSpace/g,kl).replace(/punctSpace/g,xl).replace(/punct/g,Hs).getRegex(),Ol=Ue("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ks).replace(/punctSpace/g,Di).replace(/punct/g,Hn).getRegex(),Tl=Ue(/\\(punct)/,"gu").replace(/punct/g,Hn).getRegex(),Pl=Ue(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Rl=Ue(Li).replace("(?:-->|$)","-->").getRegex(),Ll=Ue("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Rl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),$n=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Nl=Ue(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",$n).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Zs=Ue(/^!?\[(label)\]\[(ref)\]/).replace("label",$n).replace("ref",Ri).getRegex(),Qs=Ue(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ri).getRegex(),Dl=Ue("reflink|nolink(?!\\()","g").replace("reflink",Zs).replace("nolink",Qs).getRegex(),Mi={_backpedal:on,anyPunctuation:Tl,autolink:Pl,blockSkip:Al,br:Ws,code:bl,del:on,emStrongLDelim:Sl,emStrongRDelimAst:Cl,emStrongRDelimUnd:Ol,escape:yl,link:Nl,nolink:Qs,punctuation:Il,reflink:Zs,reflinkSearch:Dl,tag:Ll,text:wl,url:on},Ml={...Mi,link:Ue(/^!?\[(label)\]\((.*?)\)/).replace("label",$n).getRegex(),reflink:Ue(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$n).getRegex()},hi={...Mi,emStrongRDelimAst:El,emStrongLDelim:_l,url:Ue(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},$l={...hi,br:Ue(Ws).replace("{2,}","*").getRegex(),text:Ue(hi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Sn={normal:Ni,gfm:gl,pedantic:vl},en={normal:Mi,gfm:hi,breaks:$l,pedantic:Ml},Fl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ls=t=>Fl[t];function Qt(t,e){if(e){if(Tt.escapeTest.test(t))return t.replace(Tt.escapeReplace,ls)}else if(Tt.escapeTestNoEncode.test(t))return t.replace(Tt.escapeReplaceNoEncode,ls);return t}function cs(t){try{t=encodeURI(t).replace(Tt.percentDecode,"%")}catch{return null}return t}function us(t,e){var u;const r=t.replace(Tt.findPipe,(o,f,x)=>{let I=!1,O=f;for(;--O>=0&&x[O]==="\\";)I=!I;return I?"|":" |"}),i=r.split(Tt.splitPipe);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!((u=i.at(-1))!=null&&u.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(Tt.slashPipe,"|");return i}function tn(t,e,r){const i=t.length;if(i===0)return"";let s=0;for(;s<i&&t.charAt(i-s-1)===e;)s++;return t.slice(0,i-s)}function ql(t,e){if(t.indexOf(e[1])===-1)return-1;let r=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])r++;else if(t[i]===e[1]&&(r--,r<0))return i;return r>0?-2:-1}function ps(t,e,r,i,s){const u=e.href,o=e.title||null,f=t[1].replace(s.other.outputLinkReplace,"$1");i.state.inLink=!0;const x={type:t[0].charAt(0)==="!"?"image":"link",raw:r,href:u,title:o,text:f,tokens:i.inlineTokens(f)};return i.state.inLink=!1,x}function zl(t,e,r){const i=t.match(r.other.indentCodeCompensation);if(i===null)return e;const s=i[1];return e.split(`
`).map(u=>{const o=u.match(r.other.beginningSpace);if(o===null)return u;const[f]=o;return f.length>=s.length?u.slice(s.length):u}).join(`
`)}class Fn{constructor(e){Je(this,"options");Je(this,"rules");Je(this,"lexer");this.options=e||$r}space(e){const r=this.rules.block.newline.exec(e);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(e){const r=this.rules.block.code.exec(e);if(r){const i=r[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?i:tn(i,`
`)}}}fences(e){const r=this.rules.block.fences.exec(e);if(r){const i=r[0],s=zl(i,r[3]||"",this.rules);return{type:"code",raw:i,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:s}}}heading(e){const r=this.rules.block.heading.exec(e);if(r){let i=r[2].trim();if(this.rules.other.endingHash.test(i)){const s=tn(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const r=this.rules.block.hr.exec(e);if(r)return{type:"hr",raw:tn(r[0],`
`)}}blockquote(e){const r=this.rules.block.blockquote.exec(e);if(r){let i=tn(r[0],`
`).split(`
`),s="",u="";const o=[];for(;i.length>0;){let f=!1;const x=[];let I;for(I=0;I<i.length;I++)if(this.rules.other.blockquoteStart.test(i[I]))x.push(i[I]),f=!0;else if(!f)x.push(i[I]);else break;i=i.slice(I);const O=x.join(`
`),C=O.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${O}`:O,u=u?`${u}
${C}`:C;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(C,o,!0),this.lexer.state.top=v,i.length===0)break;const T=o.at(-1);if((T==null?void 0:T.type)==="code")break;if((T==null?void 0:T.type)==="blockquote"){const q=T,J=q.raw+`
`+i.join(`
`),ve=this.blockquote(J);o[o.length-1]=ve,s=s.substring(0,s.length-q.raw.length)+ve.raw,u=u.substring(0,u.length-q.text.length)+ve.text;break}else if((T==null?void 0:T.type)==="list"){const q=T,J=q.raw+`
`+i.join(`
`),ve=this.list(J);o[o.length-1]=ve,s=s.substring(0,s.length-T.raw.length)+ve.raw,u=u.substring(0,u.length-q.raw.length)+ve.raw,i=J.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:u}}}list(e){let r=this.rules.block.list.exec(e);if(r){let i=r[1].trim();const s=i.length>1,u={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");const o=this.rules.other.listItemRegex(i);let f=!1;for(;e;){let I=!1,O="",C="";if(!(r=o.exec(e))||this.rules.block.hr.test(e))break;O=r[0],e=e.substring(O.length);let v=r[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,U=>" ".repeat(3*U.length)),T=e.split(`
`,1)[0],q=!v.trim(),J=0;if(this.options.pedantic?(J=2,C=v.trimStart()):q?J=r[1].length+1:(J=r[2].search(this.rules.other.nonSpaceChar),J=J>4?1:J,C=v.slice(J),J+=r[1].length),q&&this.rules.other.blankLine.test(T)&&(O+=T+`
`,e=e.substring(T.length+1),I=!0),!I){const U=this.rules.other.nextBulletRegex(J),D=this.rules.other.hrRegex(J),B=this.rules.other.fencesBeginRegex(J),L=this.rules.other.headingBeginRegex(J),y=this.rules.other.htmlBeginRegex(J);for(;e;){const F=e.split(`
`,1)[0];let j;if(T=F,this.options.pedantic?(T=T.replace(this.rules.other.listReplaceNesting,"  "),j=T):j=T.replace(this.rules.other.tabCharGlobal,"    "),B.test(T)||L.test(T)||y.test(T)||U.test(T)||D.test(T))break;if(j.search(this.rules.other.nonSpaceChar)>=J||!T.trim())C+=`
`+j.slice(J);else{if(q||v.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(v)||L.test(v)||D.test(v))break;C+=`
`+T}!q&&!T.trim()&&(q=!0),O+=F+`
`,e=e.substring(F.length+1),v=j.slice(J)}}u.loose||(f?u.loose=!0:this.rules.other.doubleBlankLine.test(O)&&(f=!0));let ve=null,Ee;this.options.gfm&&(ve=this.rules.other.listIsTask.exec(C),ve&&(Ee=ve[0]!=="[ ] ",C=C.replace(this.rules.other.listReplaceTask,""))),u.items.push({type:"list_item",raw:O,task:!!ve,checked:Ee,loose:!1,text:C,tokens:[]}),u.raw+=O}const x=u.items.at(-1);if(x)x.raw=x.raw.trimEnd(),x.text=x.text.trimEnd();else return;u.raw=u.raw.trimEnd();for(let I=0;I<u.items.length;I++)if(this.lexer.state.top=!1,u.items[I].tokens=this.lexer.blockTokens(u.items[I].text,[]),!u.loose){const O=u.items[I].tokens.filter(v=>v.type==="space"),C=O.length>0&&O.some(v=>this.rules.other.anyLine.test(v.raw));u.loose=C}if(u.loose)for(let I=0;I<u.items.length;I++)u.items[I].loose=!0;return u}}html(e){const r=this.rules.block.html.exec(e);if(r)return{type:"html",block:!0,raw:r[0],pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:r[0]}}def(e){const r=this.rules.block.def.exec(e);if(r){const i=r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=r[2]?r[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:i,raw:r[0],href:s,title:u}}}table(e){var f;const r=this.rules.block.table.exec(e);if(!r||!this.rules.other.tableDelimiter.test(r[2]))return;const i=us(r[1]),s=r[2].replace(this.rules.other.tableAlignChars,"").split("|"),u=(f=r[3])!=null&&f.trim()?r[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:r[0],header:[],align:[],rows:[]};if(i.length===s.length){for(const x of s)this.rules.other.tableAlignRight.test(x)?o.align.push("right"):this.rules.other.tableAlignCenter.test(x)?o.align.push("center"):this.rules.other.tableAlignLeft.test(x)?o.align.push("left"):o.align.push(null);for(let x=0;x<i.length;x++)o.header.push({text:i[x],tokens:this.lexer.inline(i[x]),header:!0,align:o.align[x]});for(const x of u)o.rows.push(us(x,o.header.length).map((I,O)=>({text:I,tokens:this.lexer.inline(I),header:!1,align:o.align[O]})));return o}}lheading(e){const r=this.rules.block.lheading.exec(e);if(r)return{type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:this.lexer.inline(r[1])}}paragraph(e){const r=this.rules.block.paragraph.exec(e);if(r){const i=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const r=this.rules.block.text.exec(e);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(e){const r=this.rules.inline.escape.exec(e);if(r)return{type:"escape",raw:r[0],text:r[1]}}tag(e){const r=this.rules.inline.tag.exec(e);if(r)return!this.lexer.state.inLink&&this.rules.other.startATag.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(e){const r=this.rules.inline.link.exec(e);if(r){const i=r[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;const o=tn(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=ql(r[2],"()");if(o===-2)return;if(o>-1){const x=(r[0].indexOf("!")===0?5:4)+r[1].length+o;r[2]=r[2].substring(0,o),r[0]=r[0].substring(0,x).trim(),r[3]=""}}let s=r[2],u="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],u=o[3])}else u=r[3]?r[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),ps(r,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer,this.rules)}}reflink(e,r){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),u=r[s.toLowerCase()];if(!u){const o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return ps(i,u,i[0],this.lexer,this.rules)}}emStrong(e,r,i=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...s[0]].length-1;let f,x,I=o,O=0;const C=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(C.lastIndex=0,r=r.slice(-1*e.length+o);(s=C.exec(r))!=null;){if(f=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!f)continue;if(x=[...f].length,s[3]||s[4]){I+=x;continue}else if((s[5]||s[6])&&o%3&&!((o+x)%3)){O+=x;continue}if(I-=x,I>0)continue;x=Math.min(x,x+I+O);const v=[...s[0]][0].length,T=e.slice(0,o+s.index+v+x);if(Math.min(o,x)%2){const J=T.slice(1,-1);return{type:"em",raw:T,text:J,tokens:this.lexer.inlineTokens(J)}}const q=T.slice(2,-2);return{type:"strong",raw:T,text:q,tokens:this.lexer.inlineTokens(q)}}}}codespan(e){const r=this.rules.inline.code.exec(e);if(r){let i=r[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(i),u=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&u&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:r[0],text:i}}}br(e){const r=this.rules.inline.br.exec(e);if(r)return{type:"br",raw:r[0]}}del(e){const r=this.rules.inline.del.exec(e);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}}autolink(e){const r=this.rules.inline.autolink.exec(e);if(r){let i,s;return r[2]==="@"?(i=r[1],s="mailto:"+i):(i=r[1],s=i),{type:"link",raw:r[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let r;if(r=this.rules.inline.url.exec(e)){let s,u;if(r[2]==="@")s=r[0],u="mailto:"+s;else{let o;do o=r[0],r[0]=((i=this.rules.inline._backpedal.exec(r[0]))==null?void 0:i[0])??"";while(o!==r[0]);s=r[0],r[1]==="www."?u="http://"+r[0]:u=r[0]}return{type:"link",raw:r[0],text:s,href:u,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const r=this.rules.inline.text.exec(e);if(r){const i=this.lexer.state.inRawBlock;return{type:"text",raw:r[0],text:r[0],escaped:i}}}}class zt{constructor(e){Je(this,"tokens");Je(this,"options");Je(this,"state");Je(this,"tokenizer");Je(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$r,this.options.tokenizer=this.options.tokenizer||new Fn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={other:Tt,block:Sn.normal,inline:en.normal};this.options.pedantic?(r.block=Sn.pedantic,r.inline=en.pedantic):this.options.gfm&&(r.block=Sn.gfm,this.options.breaks?r.inline=en.breaks:r.inline=en.gfm),this.tokenizer.rules=r}static get rules(){return{block:Sn,inline:en}}static lex(e,r){return new zt(r).lex(e)}static lexInline(e,r){return new zt(r).inlineTokens(e)}lex(e){e=e.replace(Tt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){const i=this.inlineQueue[r];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,r=[],i=!1){var s,u,o;for(this.options.pedantic&&(e=e.replace(Tt.tabCharGlobal,"    ").replace(Tt.spaceLine,""));e;){let f;if((u=(s=this.options.extensions)==null?void 0:s.block)!=null&&u.some(I=>(f=I.call({lexer:this},e,r))?(e=e.substring(f.raw.length),r.push(f),!0):!1))continue;if(f=this.tokenizer.space(e)){e=e.substring(f.raw.length);const I=r.at(-1);f.raw.length===1&&I!==void 0?I.raw+=`
`:r.push(f);continue}if(f=this.tokenizer.code(e)){e=e.substring(f.raw.length);const I=r.at(-1);(I==null?void 0:I.type)==="paragraph"||(I==null?void 0:I.type)==="text"?(I.raw+=`
`+f.raw,I.text+=`
`+f.text,this.inlineQueue.at(-1).src=I.text):r.push(f);continue}if(f=this.tokenizer.fences(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.heading(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.hr(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.blockquote(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.list(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.html(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.def(e)){e=e.substring(f.raw.length);const I=r.at(-1);(I==null?void 0:I.type)==="paragraph"||(I==null?void 0:I.type)==="text"?(I.raw+=`
`+f.raw,I.text+=`
`+f.raw,this.inlineQueue.at(-1).src=I.text):this.tokens.links[f.tag]||(this.tokens.links[f.tag]={href:f.href,title:f.title});continue}if(f=this.tokenizer.table(e)){e=e.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.lheading(e)){e=e.substring(f.raw.length),r.push(f);continue}let x=e;if((o=this.options.extensions)!=null&&o.startBlock){let I=1/0;const O=e.slice(1);let C;this.options.extensions.startBlock.forEach(v=>{C=v.call({lexer:this},O),typeof C=="number"&&C>=0&&(I=Math.min(I,C))}),I<1/0&&I>=0&&(x=e.substring(0,I+1))}if(this.state.top&&(f=this.tokenizer.paragraph(x))){const I=r.at(-1);i&&(I==null?void 0:I.type)==="paragraph"?(I.raw+=`
`+f.raw,I.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=I.text):r.push(f),i=x.length!==e.length,e=e.substring(f.raw.length);continue}if(f=this.tokenizer.text(e)){e=e.substring(f.raw.length);const I=r.at(-1);(I==null?void 0:I.type)==="text"?(I.raw+=`
`+f.raw,I.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=I.text):r.push(f);continue}if(e){const I="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(I);break}else throw new Error(I)}}return this.state.top=!0,r}inline(e,r=[]){return this.inlineQueue.push({src:e,tokens:r}),r}inlineTokens(e,r=[]){var f,x,I;let i=e,s=null;if(this.tokens.links){const O=Object.keys(this.tokens.links);if(O.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)O.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let u=!1,o="";for(;e;){u||(o=""),u=!1;let O;if((x=(f=this.options.extensions)==null?void 0:f.inline)!=null&&x.some(v=>(O=v.call({lexer:this},e,r))?(e=e.substring(O.raw.length),r.push(O),!0):!1))continue;if(O=this.tokenizer.escape(e)){e=e.substring(O.raw.length),r.push(O);continue}if(O=this.tokenizer.tag(e)){e=e.substring(O.raw.length),r.push(O);continue}if(O=this.tokenizer.link(e)){e=e.substring(O.raw.length),r.push(O);continue}if(O=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(O.raw.length);const v=r.at(-1);O.type==="text"&&(v==null?void 0:v.type)==="text"?(v.raw+=O.raw,v.text+=O.text):r.push(O);continue}if(O=this.tokenizer.emStrong(e,i,o)){e=e.substring(O.raw.length),r.push(O);continue}if(O=this.tokenizer.codespan(e)){e=e.substring(O.raw.length),r.push(O);continue}if(O=this.tokenizer.br(e)){e=e.substring(O.raw.length),r.push(O);continue}if(O=this.tokenizer.del(e)){e=e.substring(O.raw.length),r.push(O);continue}if(O=this.tokenizer.autolink(e)){e=e.substring(O.raw.length),r.push(O);continue}if(!this.state.inLink&&(O=this.tokenizer.url(e))){e=e.substring(O.raw.length),r.push(O);continue}let C=e;if((I=this.options.extensions)!=null&&I.startInline){let v=1/0;const T=e.slice(1);let q;this.options.extensions.startInline.forEach(J=>{q=J.call({lexer:this},T),typeof q=="number"&&q>=0&&(v=Math.min(v,q))}),v<1/0&&v>=0&&(C=e.substring(0,v+1))}if(O=this.tokenizer.inlineText(C)){e=e.substring(O.raw.length),O.raw.slice(-1)!=="_"&&(o=O.raw.slice(-1)),u=!0;const v=r.at(-1);(v==null?void 0:v.type)==="text"?(v.raw+=O.raw,v.text+=O.text):r.push(O);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return r}}class qn{constructor(e){Je(this,"options");Je(this,"parser");this.options=e||$r}space(e){return""}code({text:e,lang:r,escaped:i}){var o;const s=(o=(r||"").match(Tt.notSpaceStart))==null?void 0:o[0],u=e.replace(Tt.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Qt(s)+'">'+(i?u:Qt(u,!0))+`</code></pre>
`:"<pre><code>"+(i?u:Qt(u,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:r}){return`<h${r}>${this.parser.parseInline(e)}</h${r}>
`}hr(e){return`<hr>
`}list(e){const r=e.ordered,i=e.start;let s="";for(let f=0;f<e.items.length;f++){const x=e.items[f];s+=this.listitem(x)}const u=r?"ol":"ul",o=r&&i!==1?' start="'+i+'"':"";return"<"+u+o+`>
`+s+"</"+u+`>
`}listitem(e){var i;let r="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((i=e.tokens[0])==null?void 0:i.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+Qt(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):r+=s+" "}return r+=this.parser.parse(e.tokens,!!e.loose),`<li>${r}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let r="",i="";for(let u=0;u<e.header.length;u++)i+=this.tablecell(e.header[u]);r+=this.tablerow({text:i});let s="";for(let u=0;u<e.rows.length;u++){const o=e.rows[u];i="";for(let f=0;f<o.length;f++)i+=this.tablecell(o[f]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const r=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+r+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Qt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:r,tokens:i}){const s=this.parser.parseInline(i),u=cs(e);if(u===null)return s;e=u;let o='<a href="'+e+'"';return r&&(o+=' title="'+Qt(r)+'"'),o+=">"+s+"</a>",o}image({href:e,title:r,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));const u=cs(e);if(u===null)return Qt(i);e=u;let o=`<img src="${e}" alt="${i}"`;return r&&(o+=` title="${Qt(r)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Qt(e.text)}}class $i{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class jt{constructor(e){Je(this,"options");Je(this,"renderer");Je(this,"textRenderer");this.options=e||$r,this.options.renderer=this.options.renderer||new qn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $i}static parse(e,r){return new jt(r).parse(e)}static parseInline(e,r){return new jt(r).parseInline(e)}parse(e,r=!0){var s,u;let i="";for(let o=0;o<e.length;o++){const f=e[o];if((u=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&u[f.type]){const I=f,O=this.options.extensions.renderers[I.type].call({parser:this},I);if(O!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(I.type)){i+=O||"";continue}}const x=f;switch(x.type){case"space":{i+=this.renderer.space(x);continue}case"hr":{i+=this.renderer.hr(x);continue}case"heading":{i+=this.renderer.heading(x);continue}case"code":{i+=this.renderer.code(x);continue}case"table":{i+=this.renderer.table(x);continue}case"blockquote":{i+=this.renderer.blockquote(x);continue}case"list":{i+=this.renderer.list(x);continue}case"html":{i+=this.renderer.html(x);continue}case"paragraph":{i+=this.renderer.paragraph(x);continue}case"text":{let I=x,O=this.renderer.text(I);for(;o+1<e.length&&e[o+1].type==="text";)I=e[++o],O+=`
`+this.renderer.text(I);r?i+=this.renderer.paragraph({type:"paragraph",raw:O,text:O,tokens:[{type:"text",raw:O,text:O,escaped:!0}]}):i+=O;continue}default:{const I='Token with "'+x.type+'" type was not found.';if(this.options.silent)return console.error(I),"";throw new Error(I)}}}return i}parseInline(e,r=this.renderer){var s,u;let i="";for(let o=0;o<e.length;o++){const f=e[o];if((u=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&u[f.type]){const I=this.options.extensions.renderers[f.type].call({parser:this},f);if(I!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(f.type)){i+=I||"";continue}}const x=f;switch(x.type){case"escape":{i+=r.text(x);break}case"html":{i+=r.html(x);break}case"link":{i+=r.link(x);break}case"image":{i+=r.image(x);break}case"strong":{i+=r.strong(x);break}case"em":{i+=r.em(x);break}case"codespan":{i+=r.codespan(x);break}case"br":{i+=r.br(x);break}case"del":{i+=r.del(x);break}case"text":{i+=r.text(x);break}default:{const I='Token with "'+x.type+'" type was not found.';if(this.options.silent)return console.error(I),"";throw new Error(I)}}}return i}}class ln{constructor(e){Je(this,"options");Je(this,"block");this.options=e||$r}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?zt.lex:zt.lexInline}provideParser(){return this.block?jt.parse:jt.parseInline}}Je(ln,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class jl{constructor(...e){Je(this,"defaults",Oi());Je(this,"options",this.setOptions);Je(this,"parse",this.parseMarkdown(!0));Je(this,"parseInline",this.parseMarkdown(!1));Je(this,"Parser",jt);Je(this,"Renderer",qn);Je(this,"TextRenderer",$i);Je(this,"Lexer",zt);Je(this,"Tokenizer",Fn);Je(this,"Hooks",ln);this.use(...e)}walkTokens(e,r){var s,u;let i=[];for(const o of e)switch(i=i.concat(r.call(this,o)),o.type){case"table":{const f=o;for(const x of f.header)i=i.concat(this.walkTokens(x.tokens,r));for(const x of f.rows)for(const I of x)i=i.concat(this.walkTokens(I.tokens,r));break}case"list":{const f=o;i=i.concat(this.walkTokens(f.items,r));break}default:{const f=o;(u=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&u[f.type]?this.defaults.extensions.childTokens[f.type].forEach(x=>{const I=f[x].flat(1/0);i=i.concat(this.walkTokens(I,r))}):f.tokens&&(i=i.concat(this.walkTokens(f.tokens,r)))}}return i}use(...e){const r=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const o=r.renderers[u.name];o?r.renderers[u.name]=function(...f){let x=u.renderer.apply(this,f);return x===!1&&(x=o.apply(this,f)),x}:r.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=r[u.level];o?o.unshift(u.tokenizer):r[u.level]=[u.tokenizer],u.start&&(u.level==="block"?r.startBlock?r.startBlock.push(u.start):r.startBlock=[u.start]:u.level==="inline"&&(r.startInline?r.startInline.push(u.start):r.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(r.childTokens[u.name]=u.childTokens)}),s.extensions=r),i.renderer){const u=this.defaults.renderer||new qn(this.defaults);for(const o in i.renderer){if(!(o in u))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const f=o,x=i.renderer[f],I=u[f];u[f]=(...O)=>{let C=x.apply(u,O);return C===!1&&(C=I.apply(u,O)),C||""}}s.renderer=u}if(i.tokenizer){const u=this.defaults.tokenizer||new Fn(this.defaults);for(const o in i.tokenizer){if(!(o in u))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const f=o,x=i.tokenizer[f],I=u[f];u[f]=(...O)=>{let C=x.apply(u,O);return C===!1&&(C=I.apply(u,O)),C}}s.tokenizer=u}if(i.hooks){const u=this.defaults.hooks||new ln;for(const o in i.hooks){if(!(o in u))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const f=o,x=i.hooks[f],I=u[f];ln.passThroughHooks.has(o)?u[f]=O=>{if(this.defaults.async)return Promise.resolve(x.call(u,O)).then(v=>I.call(u,v));const C=x.call(u,O);return I.call(u,C)}:u[f]=(...O)=>{let C=x.apply(u,O);return C===!1&&(C=I.apply(u,O)),C}}s.hooks=u}if(i.walkTokens){const u=this.defaults.walkTokens,o=i.walkTokens;s.walkTokens=function(f){let x=[];return x.push(o.call(this,f)),u&&(x=x.concat(u.call(this,f))),x}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,r){return zt.lex(e,r??this.defaults)}parser(e,r){return jt.parse(e,r??this.defaults)}parseMarkdown(e){return(i,s)=>{const u={...s},o={...this.defaults,...u},f=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&u.async===!1)return f(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const x=o.hooks?o.hooks.provideLexer():e?zt.lex:zt.lexInline,I=o.hooks?o.hooks.provideParser():e?jt.parse:jt.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(O=>x(O,o)).then(O=>o.hooks?o.hooks.processAllTokens(O):O).then(O=>o.walkTokens?Promise.all(this.walkTokens(O,o.walkTokens)).then(()=>O):O).then(O=>I(O,o)).then(O=>o.hooks?o.hooks.postprocess(O):O).catch(f);try{o.hooks&&(i=o.hooks.preprocess(i));let O=x(i,o);o.hooks&&(O=o.hooks.processAllTokens(O)),o.walkTokens&&this.walkTokens(O,o.walkTokens);let C=I(O,o);return o.hooks&&(C=o.hooks.postprocess(C)),C}catch(O){return f(O)}}}onError(e,r){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+Qt(i.message+"",!0)+"</pre>";return r?Promise.resolve(s):s}if(r)return Promise.reject(i);throw i}}}const Nr=new jl;function We(t,e){return Nr.parse(t,e)}We.options=We.setOptions=function(t){return Nr.setOptions(t),We.defaults=Nr.defaults,Us(We.defaults),We};We.getDefaults=Oi;We.defaults=$r;We.use=function(...t){return Nr.use(...t),We.defaults=Nr.defaults,Us(We.defaults),We};We.walkTokens=function(t,e){return Nr.walkTokens(t,e)};We.parseInline=Nr.parseInline;We.Parser=jt;We.parser=jt.parse;We.Renderer=qn;We.TextRenderer=$i;We.Lexer=zt;We.lexer=zt.lex;We.Tokenizer=Fn;We.Hooks=ln;We.parse=We;We.options;We.setOptions;We.use;We.walkTokens;We.parseInline;jt.parse;zt.lex;var lr={},Ht={},ds;function Ul(){if(ds)return Ht;ds=1,Object.defineProperty(Ht,"__esModule",{value:!0});function t(c){const n=c||"";return function(){throw new Error("this method "+n+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(c,n){if(!c)throw new Error(n||"Assertion failed")}function r(c,n,a){let p;Object.defineProperty(c,n,{get(){return p||(p=a.call(this)),p}})}function i(c){return c&&Object.assign({},c)}function s(c,n){const a=[];for(;n-- >0;)a.push(c());return a}function u(c,n){return new Array(n+1).join(c)}function o(c,n){return s(()=>c,n)}function f(c){const n=[];for(let a=0;a<c.length;a++){const p=c[a];c.lastIndexOf(p)!==a&&n.indexOf(p)<0&&n.push(p)}return n}function x(c){const n=[];return c.forEach(a=>{n.indexOf(a)<0&&n.push(a)}),n}function I(c){const n=c[0];return n===n.toUpperCase()}function O(c){return!I(c)}function C(c,n,a){const p=a||" ";return c.length<n?u(p,n-c.length)+c:c}function v(){this.strings=[]}v.prototype.append=function(c){this.strings.push(c)},v.prototype.contents=function(){return this.strings.join("")};const T=c=>String.fromCodePoint(parseInt(c,16));function q(c){if(c.charAt(0)==="\\")switch(c.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return T(c.slice(2,4));case"u":return c.charAt(2)==="{"?T(c.slice(3,-1)):T(c.slice(2,6));default:return c.charAt(1)}else return c}function J(c){if(c==null)return String(c);const n=Object.prototype.toString.call(c);try{let a;return c.constructor&&c.constructor.name?a=c.constructor.name:n.indexOf("[object ")===0?a=n.slice(8,-1):a=typeof c,a+": "+JSON.stringify(String(c))}catch{return n}}var ve=Object.freeze({__proto__:null,abstract:t,assert:e,defineLazyProperty:r,clone:i,repeatFn:s,repeatStr:u,repeat:o,getDuplicates:f,copyWithoutDuplicates:x,isSyntactic:I,isLexical:O,padLeft:C,StringBuffer:v,unescapeCodePoint:q,unexpectedObjToString:J});const Ee={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class U{constructor(){if(this.constructor===U)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(n){return n&&(this.source=n.trimmed()),this}}const D=Object.create(U.prototype),B=Object.create(U.prototype);class L extends U{constructor(n){super(),this.obj=n}}class y extends U{constructor(n,a){super(),this.from=n,this.to=a,this.matchCodePoint=n.length>1||a.length>1}}class F extends U{constructor(n){super(),this.index=n}}class j extends U{constructor(n){super(),this.terms=n}}class ie extends j{constructor(n,a,p){const g=n.rules[a].body;super([p,g]),this.superGrammar=n,this.name=a,this.body=p}}class me extends j{constructor(n,a,p,g){const E=n.rules[a].body;super([...p,E,...g]),this.superGrammar=n,this.ruleName=a,this.expansionPos=p.length}}class Y extends U{constructor(n){super(),this.factors=n}}class re extends U{constructor(n){super(),this.expr=n}}class le extends re{}class ke extends re{}class ze extends re{}le.prototype.operator="*",ke.prototype.operator="+",ze.prototype.operator="?",le.prototype.minNumMatches=0,ke.prototype.minNumMatches=1,ze.prototype.minNumMatches=0,le.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ke.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ze.prototype.maxNumMatches=1;class ye extends U{constructor(n){super(),this.expr=n}}class ge extends U{constructor(n){super(),this.expr=n}}class Be extends U{constructor(n){super(),this.expr=n}}class te extends U{constructor(n,a=[]){super(),this.ruleName=n,this.args=a}isSyntactic(){return I(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class Ce extends U{constructor(n){super(),this.category=n,this.pattern=Ee[n]}}function Te(c,n){let a;return n?(a=new Error(n.getLineAndColumnMessage()+c),a.shortMessage=c,a.interval=n):a=new Error(c),a}function b(){return Te("Interval sources don't match")}function A(c){const n=new Error;return Object.defineProperty(n,"message",{enumerable:!0,get(){return c.message}}),Object.defineProperty(n,"shortMessage",{enumerable:!0,get(){return"Expected "+c.getExpectedText()}}),n.interval=c.getInterval(),n}function ae(c,n,a){const p=n?`Grammar ${c} is not declared in namespace '${n}'`:"Undeclared grammar "+c;return Te(p,a)}function Se(c,n){return Te("Grammar "+c.name+" is already declared in this namespace")}function Ge(c){return Te(`Grammar '${c.name}' does not support incremental parsing`)}function Pe(c,n,a){return Te("Rule "+c+" is not declared in grammar "+n,a)}function P(c,n,a){return Te("Cannot override rule "+c+" because it is not declared in "+n,a)}function $(c,n,a){return Te("Cannot extend rule "+c+" because it is not declared in "+n,a)}function R(c,n,a,p){let g="Duplicate declaration for rule '"+c+"' in grammar '"+n+"'";return n!==a&&(g+=" (originally declared in '"+a+"')"),Te(g,p)}function K(c,n,a,p){return Te("Wrong number of parameters for rule "+c+" (expected "+n+", got "+a+")",p)}function X(c,n,a,p){return Te("Wrong number of arguments for rule "+c+" (expected "+n+", got "+a+")",p)}function H(c,n,a){return Te("Duplicate parameter names in rule "+c+": "+n.join(", "),a)}function z(c,n){return Te("Invalid parameter to rule "+c+": "+n+" has arity "+n.getArity()+", but parameter expressions must have arity 1",n.source)}const ee="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function he(c,n){return Te("Cannot apply syntactic rule "+c+" from here (inside a lexical context)",n.source)}function Oe(c){const{ruleName:n}=c;return Te(`applySyntactic is for syntactic rules, but '${n}' is a lexical rule. `+ee,c.source)}function Re(c){return Te("applySyntactic is not required here (in a syntactic context)",c.source)}function pe(c,n){return Te("Incorrect argument type: expected "+c,n.source)}function we(c){return Te("'...' can appear at most once in a rule body",c.source)}function Ne(c){const n=c._node;e(n&&n.isNonterminal()&&n.ctorName==="escapeChar_unicodeCodePoint");const a=c.children.slice(1,-1).map(g=>g.source),p=a[0].coverageWith(...a.slice(1));return Te(`U+${p.contents} is not a valid Unicode code point`,p)}function ce(c,n){const a=n.length>0?n[n.length-1].args:[];let g="Nullable expression "+c.expr.substituteParams(a)+" is not allowed inside '"+c.operator+"' (possible infinite loop)";if(n.length>0){const E=n.map(M=>new te(M.ruleName,M.args)).join(`
`);g+=`
Application stack (most recent application last):
`+E}return Te(g,c.expr.source)}function at(c,n,a,p){return Te("Rule "+c+" involves an alternation which has inconsistent arity (expected "+n+", got "+a+")",p.source)}function Pt(c){const n=c.map(a=>a.message);return Te(["Errors:"].concat(n).join(`
- `),c[0].interval)}function ft(c,n,a,p){let g=p.slice(0,-1).map(Z=>{const ue="  "+Z[0].name+" > "+Z[1];return Z.length===3?ue+" for '"+Z[2]+"'":ue}).join(`
`);g+=`
  `+n+" > "+c;let E="";c==="_iter"&&(E=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const M=[`Missing semantic action for '${c}' in ${a} '${n}'.${E}`,"Action stack (most recent call last):",g].join(`
`),Q=Te(M);return Q.name="missingSemanticAction",Q}function ot(c){if(c.length===1)throw c[0];if(c.length>1)throw Pt(c)}function mt(c){let n=0;return c.map(p=>{const g=p.toString();return n=Math.max(n,g.length),g}).map(p=>C(p,n))}function Mt(c,n,a){const p=c.length,g=c.slice(0,a),E=c.slice(a+n.length);return(g+n+E).substr(0,p)}function Yt(...c){const n=this,{offset:a}=n,{repeatStr:p}=ve,g=new v;g.append("Line "+n.lineNum+", col "+n.colNum+`:
`);const E=mt([n.prevLine==null?0:n.lineNum-1,n.lineNum,n.nextLine==null?0:n.lineNum+1]),M=(V,G,se)=>{g.append(se+E[V]+" | "+G+`
`)};n.prevLine!=null&&M(0,n.prevLine,"  "),M(1,n.line,"> ");const Q=n.line.length;let Z=p(" ",Q+1);for(let V=0;V<c.length;++V){let G=c[V][0],se=c[V][1];e(G>=0&&G<=se,"range start must be >= 0 and <= end");const Ie=a-n.colNum+1;G=Math.max(0,G-Ie),se=Math.min(se-Ie,Q),Z=Mt(Z,p("~",se-G),G)}const ue=2+E[1].length+3;return g.append(p(" ",ue)),Z=Mt(Z,"^",n.colNum-1),g.append(Z.replace(/ +$/,"")+`
`),n.nextLine!=null&&M(2,n.nextLine,"  "),g.contents()}let hr=[];function Gt(c){hr.push(c)}function ne(c){hr.forEach(n=>{n(c)}),hr=null}function fr(c,n){let a=1,p=1,g=0,E=0,M=null,Q=null,Z=-1;for(;g<n;){const G=c.charAt(g++);G===`
`?(a++,p=1,Z=E,E=g):G!=="\r"&&p++}let ue=c.indexOf(`
`,E);if(ue===-1)ue=c.length;else{const G=c.indexOf(`
`,ue+1);M=G===-1?c.slice(ue):c.slice(ue,G),M=M.replace(/^\r?\n/,"").replace(/\r$/,"")}Z>=0&&(Q=c.slice(Z,E).replace(/\r?\n$/,""));const V=c.slice(E,ue).replace(/\r$/,"");return{offset:n,lineNum:a,colNum:p,line:V,prevLine:Q,nextLine:M,toString:Yt}}function ir(c,n,...a){return fr(c,n).toString(...a)}const Rt=(()=>{let c=0;return n=>""+n+c++})();class Xe{constructor(n,a,p){this.sourceString=n,this.startIdx=a,this.endIdx=p}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...n){return Xe.coverage(...n,this)}collapsedLeft(){return new Xe(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new Xe(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return fr(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const n=[this.startIdx,this.endIdx];return ir(this.sourceString,this.startIdx,n)}minus(n){if(this.sourceString!==n.sourceString)throw b();return this.startIdx===n.startIdx&&this.endIdx===n.endIdx?[]:this.startIdx<n.startIdx&&n.endIdx<this.endIdx?[new Xe(this.sourceString,this.startIdx,n.startIdx),new Xe(this.sourceString,n.endIdx,this.endIdx)]:this.startIdx<n.endIdx&&n.endIdx<this.endIdx?[new Xe(this.sourceString,n.endIdx,this.endIdx)]:this.startIdx<n.startIdx&&n.startIdx<this.endIdx?[new Xe(this.sourceString,this.startIdx,n.startIdx)]:[this]}relativeTo(n){if(this.sourceString!==n.sourceString)throw b();return e(this.startIdx>=n.startIdx&&this.endIdx<=n.endIdx,"other interval does not cover this one"),new Xe(this.sourceString,this.startIdx-n.startIdx,this.endIdx-n.startIdx)}trimmed(){const{contents:n}=this,a=this.startIdx+n.match(/^\s*/)[0].length,p=this.endIdx-n.match(/\s*$/)[0].length;return new Xe(this.sourceString,a,p)}subInterval(n,a){const p=this.startIdx+n;return new Xe(this.sourceString,p,p+a)}}Xe.coverage=function(c,...n){let{startIdx:a,endIdx:p}=c;for(const g of n){if(g.sourceString!==c.sourceString)throw b();a=Math.min(a,g.startIdx),p=Math.max(p,g.endIdx)}return new Xe(c.sourceString,a,p)};const $t=65535;class De{constructor(n){this.source=n,this.pos=0,this.examinedLength=0}atEnd(){const n=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),n}next(){const n=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),n}nextCharCode(){const n=this.next();return n&&n.charCodeAt(0)}nextCodePoint(){const n=this.source.slice(this.pos++).codePointAt(0);return n>$t&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),n}matchString(n,a){let p;if(a){for(p=0;p<n.length;p++){const g=this.next(),E=n[p];if(g==null||g.toUpperCase()!==E.toUpperCase())return!1}return!0}for(p=0;p<n.length;p++)if(this.next()!==n[p])return!1;return!0}sourceSlice(n,a){return this.source.slice(n,a)}interval(n,a){return new Xe(this.source,n,a||this.pos)}}class h{constructor(n,a,p,g,E,M,Q){this.matcher=n,this.input=a,this.startExpr=p,this._cst=g,this._cstOffset=E,this._rightmostFailurePosition=M,this._rightmostFailures=Q,this.failed()&&(r(this,"message",function(){const Z="Expected "+this.getExpectedText();return ir(this.input,this.getRightmostFailurePosition())+Z}),r(this,"shortMessage",function(){const Z="expected "+this.getExpectedText(),ue=fr(this.input,this.getRightmostFailurePosition());return"Line "+ue.lineNum+", col "+ue.colNum+": "+Z}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const n=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=n.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const n=new v;let a=this.getRightmostFailures();a=a.filter(p=>!p.isFluffy());for(let p=0;p<a.length;p++)p>0&&(p===a.length-1?n.append(a.length>2?", or ":" or "):n.append(", ")),n.append(a[p].toString());return n.contents()}getInterval(){const n=this.getRightmostFailurePosition();return new Xe(this.input,n,n)}}class w{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(n){return this.applicationMemoKeyStack.indexOf(n.toMemoKey())>=0}enter(n){this.applicationMemoKeyStack.push(n.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(n,a){a.isLeftRecursion=!0,a.headApplication=n,a.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=a;const{applicationMemoKeyStack:p}=this,g=p.indexOf(n.toMemoKey())+1,E=p.slice(g);a.isInvolved=function(M){return E.indexOf(M)>=0},a.updateInvolvedApplicationMemoKeys=function(){for(let M=g;M<p.length;M++){const Q=p[M];this.isInvolved(Q)||E.push(Q)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(n){if(!n.isLeftRecursion)return!0;const{applicationMemoKeyStack:a}=this;for(let p=0;p<a.length;p++){const g=a[p];if(n.isInvolved(g))return!1}return!0}memoize(n,a){return this.memo[n]=a,this.maxExaminedLength=Math.max(this.maxExaminedLength,a.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,a.rightmostFailureOffset),a}clearObsoleteEntries(n,a){if(n+this.maxExaminedLength<=a)return;const{memo:p}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(p).forEach(g=>{const E=p[g];n+E.examinedLength>a?delete p[g]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,E.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,E.rightmostFailureOffset))})}}const S="✗",l="✓",d="⋅",m="⇒",_="␉",k="␊",N="␍",W={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function oe(c){return o(" ",c).join("")}function fe(c,n,a){const p=$e(c.slice(n,n+a));return p.length<a?p+o(" ",a-p.length).join(""):p}function $e(c){return typeof c=="string"?c.replace(/ /g,d).replace(/\t/g,_).replace(/\n/g,k).replace(/\r/g,N):String(c)}class xe{constructor(n,a,p,g,E,M,Q){this.input=n,this.pos=this.pos1=a,this.pos2=p,this.source=new Xe(n,a,p),this.expr=g,this.bindings=M,this.children=Q||[],this.terminatingLREntry=null,this._flags=E?W.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(n){const a=new xe(this.input,this.pos,this.pos2,n,this.succeeded,this.bindings,this.children);return a.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,a.isImplicitSpaces=this.isImplicitSpaces,a.isMemoized=this.isMemoized,a.isRootNode=this.isRootNode,a.terminatesLR=this.terminatesLR,a.terminatingLREntry=this.terminatingLREntry,a}recordLRTermination(n,a){this.terminatingLREntry=new xe(this.input,this.pos,this.pos2,this.expr,!1,[a],[n]),this.terminatingLREntry.terminatesLR=!0}walk(n,a){let p=n;typeof p=="function"&&(p={enter:p});function g(E,M,Q){let Z=!0;p.enter&&p.enter.call(a,E,M,Q)===xe.prototype.SKIP&&(Z=!1),Z&&(E.children.forEach(ue=>{g(ue,E,Q+1)}),p.exit&&p.exit.call(a,E,M,Q))}this.isRootNode?this.children.forEach(E=>{g(E,null,0)}):g(this,null,0)}toString(){const n=new v;return this.walk((a,p,g)=>{if(!a)return this.SKIP;if(a.expr.constructor.name!=="Alt"){if(n.append(fe(a.input,a.pos,10)+oe(g*2+1)),n.append((a.succeeded?l:S)+" "+a.displayString),a.isHeadOfLeftRecursion&&n.append(" (LR)"),a.succeeded){const M=$e(a.source.contents);n.append(" "+m+"  "),n.append(typeof M=="string"?'"'+M+'"':M)}n.append(`
`)}}),n.contents()}}xe.prototype.SKIP={},Object.keys(W).forEach(c=>{const n=W[c];Object.defineProperty(xe.prototype,c,{get(){return(this._flags&n)!==0},set(a){a?this._flags|=n:this._flags&=~n}})}),U.prototype.allowsSkippingPrecedingSpace=t("allowsSkippingPrecedingSpace"),D.allowsSkippingPrecedingSpace=B.allowsSkippingPrecedingSpace=te.prototype.allowsSkippingPrecedingSpace=L.prototype.allowsSkippingPrecedingSpace=y.prototype.allowsSkippingPrecedingSpace=Ce.prototype.allowsSkippingPrecedingSpace=function(){return!0},j.prototype.allowsSkippingPrecedingSpace=re.prototype.allowsSkippingPrecedingSpace=Be.prototype.allowsSkippingPrecedingSpace=ge.prototype.allowsSkippingPrecedingSpace=ye.prototype.allowsSkippingPrecedingSpace=F.prototype.allowsSkippingPrecedingSpace=Y.prototype.allowsSkippingPrecedingSpace=function(){return!1};let Fe;Gt(c=>{Fe=c});let Le;U.prototype.assertAllApplicationsAreValid=function(c,n){Le=0,this._assertAllApplicationsAreValid(c,n)},U.prototype._assertAllApplicationsAreValid=t("_assertAllApplicationsAreValid"),D._assertAllApplicationsAreValid=B._assertAllApplicationsAreValid=L.prototype._assertAllApplicationsAreValid=y.prototype._assertAllApplicationsAreValid=F.prototype._assertAllApplicationsAreValid=Ce.prototype._assertAllApplicationsAreValid=function(c,n){},Be.prototype._assertAllApplicationsAreValid=function(c,n){Le++,this.expr._assertAllApplicationsAreValid(c,n),Le--},j.prototype._assertAllApplicationsAreValid=function(c,n){for(let a=0;a<this.terms.length;a++)this.terms[a]._assertAllApplicationsAreValid(c,n)},Y.prototype._assertAllApplicationsAreValid=function(c,n){for(let a=0;a<this.factors.length;a++)this.factors[a]._assertAllApplicationsAreValid(c,n)},re.prototype._assertAllApplicationsAreValid=ye.prototype._assertAllApplicationsAreValid=ge.prototype._assertAllApplicationsAreValid=function(c,n){this.expr._assertAllApplicationsAreValid(c,n)},te.prototype._assertAllApplicationsAreValid=function(c,n,a=!1){const p=n.rules[this.ruleName],g=I(c)&&Le===0;if(!p)throw Pe(this.ruleName,n.name,this.source);if(!a&&I(this.ruleName)&&!g)throw he(this.ruleName,this);const E=this.args.length,M=p.formals.length;if(E!==M)throw X(this.ruleName,M,E,this.source);const Q=Fe&&p===Fe.rules.applySyntactic;if(Fe&&p===Fe.rules.caseInsensitive&&!(this.args[0]instanceof L))throw pe('a Terminal (e.g. "abc")',this.args[0]);if(Q){const ue=this.args[0];if(!(ue instanceof te))throw pe("a syntactic rule application",ue);if(!I(ue.ruleName))throw Oe(ue);if(g)throw Re(this)}this.args.forEach(ue=>{if(ue._assertAllApplicationsAreValid(c,n,Q),ue.getArity()!==1)throw z(this.ruleName,ue)})},U.prototype.assertChoicesHaveUniformArity=t("assertChoicesHaveUniformArity"),D.assertChoicesHaveUniformArity=B.assertChoicesHaveUniformArity=L.prototype.assertChoicesHaveUniformArity=y.prototype.assertChoicesHaveUniformArity=F.prototype.assertChoicesHaveUniformArity=Be.prototype.assertChoicesHaveUniformArity=Ce.prototype.assertChoicesHaveUniformArity=function(c){},j.prototype.assertChoicesHaveUniformArity=function(c){if(this.terms.length===0)return;const n=this.terms[0].getArity();for(let a=0;a<this.terms.length;a++){const p=this.terms[a];p.assertChoicesHaveUniformArity();const g=p.getArity();if(n!==g)throw at(c,n,g,p)}},ie.prototype.assertChoicesHaveUniformArity=function(c){const n=this.terms[0].getArity(),a=this.terms[1].getArity();if(n!==a)throw at(c,a,n,this.terms[0])},Y.prototype.assertChoicesHaveUniformArity=function(c){for(let n=0;n<this.factors.length;n++)this.factors[n].assertChoicesHaveUniformArity(c)},re.prototype.assertChoicesHaveUniformArity=function(c){this.expr.assertChoicesHaveUniformArity(c)},ye.prototype.assertChoicesHaveUniformArity=function(c){},ge.prototype.assertChoicesHaveUniformArity=function(c){this.expr.assertChoicesHaveUniformArity(c)},te.prototype.assertChoicesHaveUniformArity=function(c){},U.prototype.assertIteratedExprsAreNotNullable=t("assertIteratedExprsAreNotNullable"),D.assertIteratedExprsAreNotNullable=B.assertIteratedExprsAreNotNullable=L.prototype.assertIteratedExprsAreNotNullable=y.prototype.assertIteratedExprsAreNotNullable=F.prototype.assertIteratedExprsAreNotNullable=Ce.prototype.assertIteratedExprsAreNotNullable=function(c){},j.prototype.assertIteratedExprsAreNotNullable=function(c){for(let n=0;n<this.terms.length;n++)this.terms[n].assertIteratedExprsAreNotNullable(c)},Y.prototype.assertIteratedExprsAreNotNullable=function(c){for(let n=0;n<this.factors.length;n++)this.factors[n].assertIteratedExprsAreNotNullable(c)},re.prototype.assertIteratedExprsAreNotNullable=function(c){if(this.expr.assertIteratedExprsAreNotNullable(c),this.expr.isNullable(c))throw ce(this,[])},ze.prototype.assertIteratedExprsAreNotNullable=ye.prototype.assertIteratedExprsAreNotNullable=ge.prototype.assertIteratedExprsAreNotNullable=Be.prototype.assertIteratedExprsAreNotNullable=function(c){this.expr.assertIteratedExprsAreNotNullable(c)},te.prototype.assertIteratedExprsAreNotNullable=function(c){this.args.forEach(n=>{n.assertIteratedExprsAreNotNullable(c)})};class tt{constructor(n){this.matchLength=n}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(n){if(this.children)return this.children[n]}indexOfChild(n){return this.children.indexOf(n)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(n){const a=this.indexOfChild(n);if(a<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(a===0)throw new Error("cannot get child before first child");return this.childAt(a-1)}childAfter(n){const a=this.indexOfChild(n);if(a<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(a===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(a+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class _e extends tt{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class Ze extends tt{constructor(n,a,p,g){super(g),this.ruleName=n,this.children=a,this.childOffsets=p}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return O(this.ctorName)}isSyntactic(){return I(this.ctorName)}}class Ot extends tt{constructor(n,a,p,g){super(p),this.children=n,this.childOffsets=a,this.optional=g}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}U.prototype.eval=t("eval"),D.eval=function(c){const{inputStream:n}=c,a=n.pos,p=n.nextCodePoint();return p!==void 0?(c.pushBinding(new _e(String.fromCodePoint(p).length),a),!0):(c.processFailure(a,this),!1)},B.eval=function(c){const{inputStream:n}=c,a=n.pos;return n.atEnd()?(c.pushBinding(new _e(0),a),!0):(c.processFailure(a,this),!1)},L.prototype.eval=function(c){const{inputStream:n}=c,a=n.pos;return n.matchString(this.obj)?(c.pushBinding(new _e(this.obj.length),a),!0):(c.processFailure(a,this),!1)},y.prototype.eval=function(c){const{inputStream:n}=c,a=n.pos,p=this.matchCodePoint?n.nextCodePoint():n.nextCharCode();return p!==void 0&&this.from.codePointAt(0)<=p&&p<=this.to.codePointAt(0)?(c.pushBinding(new _e(String.fromCodePoint(p).length),a),!0):(c.processFailure(a,this),!1)},F.prototype.eval=function(c){return c.eval(c.currentApplication().args[this.index])},Be.prototype.eval=function(c){c.enterLexifiedContext();const n=c.eval(this.expr);return c.exitLexifiedContext(),n},j.prototype.eval=function(c){for(let n=0;n<this.terms.length;n++)if(c.eval(this.terms[n]))return!0;return!1},Y.prototype.eval=function(c){for(let n=0;n<this.factors.length;n++){const a=this.factors[n];if(!c.eval(a))return!1}return!0},re.prototype.eval=function(c){const{inputStream:n}=c,a=n.pos,p=this.getArity(),g=[],E=[];for(;g.length<p;)g.push([]),E.push([]);let M=0,Q=a,Z;for(;M<this.maxNumMatches&&c.eval(this.expr);){if(n.pos===Q)throw ce(this,c._applicationStack);Q=n.pos,M++;const se=c._bindings.splice(c._bindings.length-p,p),Ie=c._bindingOffsets.splice(c._bindingOffsets.length-p,p);for(Z=0;Z<se.length;Z++)g[Z].push(se[Z]),E[Z].push(Ie[Z])}if(M<this.minNumMatches)return!1;let ue=c.posToOffset(a),V=0;if(M>0){const se=g[p-1],Ie=E[p-1],je=Ie[Ie.length-1]+se[se.length-1].matchLength;ue=E[0][0],V=je-ue}const G=this instanceof ze;for(Z=0;Z<g.length;Z++)c._bindings.push(new Ot(g[Z],E[Z],V,G)),c._bindingOffsets.push(ue);return!0},ye.prototype.eval=function(c){const{inputStream:n}=c,a=n.pos;c.pushFailuresInfo();const p=c.eval(this.expr);return c.popFailuresInfo(),p?(c.processFailure(a,this),!1):(n.pos=a,!0)},ge.prototype.eval=function(c){const{inputStream:n}=c,a=n.pos;return c.eval(this.expr)?(n.pos=a,!0):!1},te.prototype.eval=function(c){const n=c.currentApplication(),a=n?n.args:[],p=this.substituteParams(a),g=c.getCurrentPosInfo();if(g.isActive(p))return p.handleCycle(c);const E=p.toMemoKey(),M=g.memo[E];if(M&&g.shouldUseMemoizedResult(M)){if(c.hasNecessaryInfo(M))return c.useMemoizedResult(c.inputStream.pos,M);delete g.memo[E]}return p.reallyEval(c)},te.prototype.handleCycle=function(c){const n=c.getCurrentPosInfo(),{currentLeftRecursion:a}=n,p=this.toMemoKey();let g=n.memo[p];return a&&a.headApplication.toMemoKey()===p?g.updateInvolvedApplicationMemoKeys():g||(g=n.memoize(p,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),n.startLeftRecursion(this,g)),c.useMemoizedResult(c.inputStream.pos,g)},te.prototype.reallyEval=function(c){const{inputStream:n}=c,a=n.pos,p=c.getCurrentPosInfo(),g=c.grammar.rules[this.ruleName],{body:E}=g,{description:M}=g;c.enterApplication(p,this),M&&c.pushFailuresInfo();const Q=n.examinedLength;n.examinedLength=0;let Z=this.evalOnce(E,c);const ue=p.currentLeftRecursion,V=this.toMemoKey(),G=ue&&ue.headApplication.toMemoKey()===V;let se;c.doNotMemoize?c.doNotMemoize=!1:G?(Z=this.growSeedResult(E,c,a,ue,Z),p.endLeftRecursion(),se=ue,se.examinedLength=n.examinedLength-a,se.rightmostFailureOffset=c._getRightmostFailureOffset(),p.memoize(V,se)):(!ue||!ue.isInvolved(V))&&(se=p.memoize(V,{matchLength:n.pos-a,examinedLength:n.examinedLength-a,value:Z,failuresAtRightmostPosition:c.cloneRecordedFailures(),rightmostFailureOffset:c._getRightmostFailureOffset()}));const Ie=!!Z;if(M&&(c.popFailuresInfo(),Ie||c.processFailure(a,this),se&&(se.failuresAtRightmostPosition=c.cloneRecordedFailures())),c.isTracing()&&se){const je=c.getTraceEntry(a,this,Ie,Ie?[Z]:[]);G&&(e(je.terminatingLREntry!=null||!Ie),je.isHeadOfLeftRecursion=!0),se.traceEntry=je}return n.examinedLength=Math.max(n.examinedLength,Q),c.exitApplication(p,Z),Ie},te.prototype.evalOnce=function(c,n){const{inputStream:a}=n,p=a.pos;if(n.eval(c)){const g=c.getArity(),E=n._bindings.splice(n._bindings.length-g,g),M=n._bindingOffsets.splice(n._bindingOffsets.length-g,g),Q=a.pos-p;return new Ze(this.ruleName,E,M,Q)}else return!1},te.prototype.growSeedResult=function(c,n,a,p,g){if(!g)return!1;const{inputStream:E}=n;for(;;){if(p.matchLength=E.pos-a,p.value=g,p.failuresAtRightmostPosition=n.cloneRecordedFailures(),n.isTracing()){const M=n.trace[n.trace.length-1];p.traceEntry=new xe(n.input,a,E.pos,this,!0,[g],[M.clone()])}if(E.pos=a,g=this.evalOnce(c,n),E.pos-a<=p.matchLength)break;n.isTracing()&&n.trace.splice(-2,1)}return n.isTracing()&&p.traceEntry.recordLRTermination(n.trace.pop(),g),E.pos=a+p.matchLength,p.value},Ce.prototype.eval=function(c){const{inputStream:n}=c,a=n.pos,p=n.next();return p&&this.pattern.test(p)?(c.pushBinding(new _e(p.length),a),!0):(c.processFailure(a,this),!1)},U.prototype.getArity=t("getArity"),D.getArity=B.getArity=L.prototype.getArity=y.prototype.getArity=F.prototype.getArity=te.prototype.getArity=Ce.prototype.getArity=function(){return 1},j.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},Y.prototype.getArity=function(){let c=0;for(let n=0;n<this.factors.length;n++)c+=this.factors[n].getArity();return c},re.prototype.getArity=function(){return this.expr.getArity()},ye.prototype.getArity=function(){return 0},ge.prototype.getArity=Be.prototype.getArity=function(){return this.expr.getArity()};function Ve(c,n){const a={};if(c.source&&n){const p=c.source.relativeTo(n);a.sourceInterval=[p.startIdx,p.endIdx]}return a}U.prototype.outputRecipe=t("outputRecipe"),D.outputRecipe=function(c,n){return["any",Ve(this,n)]},B.outputRecipe=function(c,n){return["end",Ve(this,n)]},L.prototype.outputRecipe=function(c,n){return["terminal",Ve(this,n),this.obj]},y.prototype.outputRecipe=function(c,n){return["range",Ve(this,n),this.from,this.to]},F.prototype.outputRecipe=function(c,n){return["param",Ve(this,n),this.index]},j.prototype.outputRecipe=function(c,n){return["alt",Ve(this,n)].concat(this.terms.map(a=>a.outputRecipe(c,n)))},ie.prototype.outputRecipe=function(c,n){return this.terms[0].outputRecipe(c,n)},me.prototype.outputRecipe=function(c,n){const a=this.terms.slice(0,this.expansionPos),p=this.terms.slice(this.expansionPos+1);return["splice",Ve(this,n),a.map(g=>g.outputRecipe(c,n)),p.map(g=>g.outputRecipe(c,n))]},Y.prototype.outputRecipe=function(c,n){return["seq",Ve(this,n)].concat(this.factors.map(a=>a.outputRecipe(c,n)))},le.prototype.outputRecipe=ke.prototype.outputRecipe=ze.prototype.outputRecipe=ye.prototype.outputRecipe=ge.prototype.outputRecipe=Be.prototype.outputRecipe=function(c,n){return[this.constructor.name.toLowerCase(),Ve(this,n),this.expr.outputRecipe(c,n)]},te.prototype.outputRecipe=function(c,n){return["app",Ve(this,n),this.ruleName,this.args.map(a=>a.outputRecipe(c,n))]},Ce.prototype.outputRecipe=function(c,n){return["unicodeChar",Ve(this,n),this.category]},U.prototype.introduceParams=t("introduceParams"),D.introduceParams=B.introduceParams=L.prototype.introduceParams=y.prototype.introduceParams=F.prototype.introduceParams=Ce.prototype.introduceParams=function(c){return this},j.prototype.introduceParams=function(c){return this.terms.forEach((n,a,p)=>{p[a]=n.introduceParams(c)}),this},Y.prototype.introduceParams=function(c){return this.factors.forEach((n,a,p)=>{p[a]=n.introduceParams(c)}),this},re.prototype.introduceParams=ye.prototype.introduceParams=ge.prototype.introduceParams=Be.prototype.introduceParams=function(c){return this.expr=this.expr.introduceParams(c),this},te.prototype.introduceParams=function(c){const n=c.indexOf(this.ruleName);if(n>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new F(n).withSource(this.source)}else return this.args.forEach((a,p,g)=>{g[p]=a.introduceParams(c)}),this},U.prototype.isNullable=function(c){return this._isNullable(c,Object.create(null))},U.prototype._isNullable=t("_isNullable"),D._isNullable=y.prototype._isNullable=F.prototype._isNullable=ke.prototype._isNullable=Ce.prototype._isNullable=function(c,n){return!1},B._isNullable=function(c,n){return!0},L.prototype._isNullable=function(c,n){return typeof this.obj=="string"?this.obj==="":!1},j.prototype._isNullable=function(c,n){return this.terms.length===0||this.terms.some(a=>a._isNullable(c,n))},Y.prototype._isNullable=function(c,n){return this.factors.every(a=>a._isNullable(c,n))},le.prototype._isNullable=ze.prototype._isNullable=ye.prototype._isNullable=ge.prototype._isNullable=function(c,n){return!0},Be.prototype._isNullable=function(c,n){return this.expr._isNullable(c,n)},te.prototype._isNullable=function(c,n){const a=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(n,a)){const{body:p}=c.rules[this.ruleName],g=p.substituteParams(this.args);n[a]=!1,n[a]=g._isNullable(c,n)}return n[a]},U.prototype.substituteParams=t("substituteParams"),D.substituteParams=B.substituteParams=L.prototype.substituteParams=y.prototype.substituteParams=Ce.prototype.substituteParams=function(c){return this},F.prototype.substituteParams=function(c){return c[this.index]},j.prototype.substituteParams=function(c){return new j(this.terms.map(n=>n.substituteParams(c)))},Y.prototype.substituteParams=function(c){return new Y(this.factors.map(n=>n.substituteParams(c)))},re.prototype.substituteParams=ye.prototype.substituteParams=ge.prototype.substituteParams=Be.prototype.substituteParams=function(c){return new this.constructor(this.expr.substituteParams(c))},te.prototype.substituteParams=function(c){if(this.args.length===0)return this;{const n=this.args.map(a=>a.substituteParams(c));return new te(this.ruleName,n)}};function sr(c){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(c)}function Ye(c){const n=Object.create(null);c.forEach(a=>{n[a]=(n[a]||0)+1}),Object.keys(n).forEach(a=>{if(n[a]<=1)return;let p=1;c.forEach((g,E)=>{g===a&&(c[E]=g+"_"+p++)})})}U.prototype.toArgumentNameList=t("toArgumentNameList"),D.toArgumentNameList=function(c,n){return["any"]},B.toArgumentNameList=function(c,n){return["end"]},L.prototype.toArgumentNameList=function(c,n){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+c]},y.prototype.toArgumentNameList=function(c,n){let a=this.from+"_to_"+this.to;return sr(a)||(a="_"+a),sr(a)||(a="$"+c),[a]},j.prototype.toArgumentNameList=function(c,n){const a=this.terms.map(E=>E.toArgumentNameList(c,!0)),p=[],g=a[0].length;for(let E=0;E<g;E++){const M=[];for(let Z=0;Z<this.terms.length;Z++)M.push(a[Z][E]);const Q=x(M);p.push(Q.join("_or_"))}return n||Ye(p),p},Y.prototype.toArgumentNameList=function(c,n){let a=[];return this.factors.forEach(p=>{const g=p.toArgumentNameList(c,!0);a=a.concat(g),c+=g.length}),n||Ye(a),a},re.prototype.toArgumentNameList=function(c,n){const a=this.expr.toArgumentNameList(c,n).map(p=>p[p.length-1]==="s"?p+"es":p+"s");return n||Ye(a),a},ze.prototype.toArgumentNameList=function(c,n){return this.expr.toArgumentNameList(c,n).map(a=>"opt"+a[0].toUpperCase()+a.slice(1))},ye.prototype.toArgumentNameList=function(c,n){return[]},ge.prototype.toArgumentNameList=Be.prototype.toArgumentNameList=function(c,n){return this.expr.toArgumentNameList(c,n)},te.prototype.toArgumentNameList=function(c,n){return[this.ruleName]},Ce.prototype.toArgumentNameList=function(c,n){return["$"+c]},F.prototype.toArgumentNameList=function(c,n){return["param"+this.index]},U.prototype.toDisplayString=t("toDisplayString"),j.prototype.toDisplayString=Y.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},D.toDisplayString=B.toDisplayString=re.prototype.toDisplayString=ye.prototype.toDisplayString=ge.prototype.toDisplayString=Be.prototype.toDisplayString=L.prototype.toDisplayString=y.prototype.toDisplayString=F.prototype.toDisplayString=function(){return this.toString()},te.prototype.toDisplayString=function(){if(this.args.length>0){const c=this.args.map(n=>n.toDisplayString());return this.ruleName+"<"+c.join(",")+">"}else return this.ruleName},Ce.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function Ir(c){return c==="description"||c==="string"||c==="code"}class rt{constructor(n,a,p){if(!Ir(p))throw new Error("invalid Failure type: "+p);this.pexpr=n,this.text=a,this.type=p,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(n){return this.getText()===n.getText()&&this.type===n.type&&(!this.isFluffy()||this.isFluffy()&&n.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const n=new rt(this.pexpr,this.text,this.type);return this.isFluffy()&&n.makeFluffy(),n}toKey(){return this.toString()+"#"+this.type}}U.prototype.toFailure=t("toFailure"),D.toFailure=function(c){return new rt(this,"any object","description")},B.toFailure=function(c){return new rt(this,"end of input","description")},L.prototype.toFailure=function(c){return new rt(this,this.obj,"string")},y.prototype.toFailure=function(c){return new rt(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},ye.prototype.toFailure=function(c){const n=this.expr===D?"nothing":"not "+this.expr.toFailure(c);return new rt(this,n,"description")},ge.prototype.toFailure=function(c){return this.expr.toFailure(c)},te.prototype.toFailure=function(c){let{description:n}=c.rules[this.ruleName];return n||(n=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new rt(this,n,"description")},Ce.prototype.toFailure=function(c){return new rt(this,"a Unicode ["+this.category+"] character","description")},j.prototype.toFailure=function(c){const a="("+this.terms.map(p=>p.toFailure(c)).join(" or ")+")";return new rt(this,a,"description")},Y.prototype.toFailure=function(c){const a="("+this.factors.map(p=>p.toFailure(c)).join(" ")+")";return new rt(this,a,"description")},re.prototype.toFailure=function(c){const n="("+this.expr.toFailure(c)+this.operator+")";return new rt(this,n,"description")},U.prototype.toString=t("toString"),D.toString=function(){return"any"},B.toString=function(){return"end"},L.prototype.toString=function(){return JSON.stringify(this.obj)},y.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},F.prototype.toString=function(){return"$"+this.index},Be.prototype.toString=function(){return"#("+this.expr.toString()+")"},j.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(c=>c.toString()).join(" | ")+")"},Y.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(c=>c.toString()).join(" ")+")"},re.prototype.toString=function(){return this.expr+this.operator},ye.prototype.toString=function(){return"~"+this.expr},ge.prototype.toString=function(){return"&"+this.expr},te.prototype.toString=function(){if(this.args.length>0){const c=this.args.map(n=>n.toString());return this.ruleName+"<"+c.join(",")+">"}else return this.ruleName},Ce.prototype.toString=function(){return"\\p{"+this.category+"}"};class Vt extends U{constructor(n){super(),this.obj=n}_getString(n){const a=n.currentApplication().args[this.obj.index];return e(a instanceof L,"expected a Terminal expression"),a.obj}allowsSkippingPrecedingSpace(){return!0}eval(n){const{inputStream:a}=n,p=a.pos,g=this._getString(n);return a.matchString(g,!0)?(n.pushBinding(new _e(g.length),p),!0):(n.processFailure(p,this),!1)}getArity(){return 1}substituteParams(n){return new Vt(this.obj.substituteParams(n))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(n){return new rt(this,this.obj.toFailure(n)+" (case-insensitive)","description")}_isNullable(n,a){return this.obj._isNullable(n,a)}}var Qn=Object.freeze({__proto__:null,CaseInsensitiveTerminal:Vt,PExpr:U,any:D,end:B,Terminal:L,Range:y,Param:F,Alt:j,Extend:ie,Splice:me,Seq:Y,Iter:re,Star:le,Plus:ke,Opt:ze,Not:ye,Lookahead:ge,Lex:Be,Apply:te,UnicodeChar:Ce});let bn;Gt(c=>{bn=c.rules.applySyntactic.body});const Jr=new te("spaces");class wn{constructor(n,a,p){this.matcher=n,this.startExpr=a,this.grammar=n.grammar,this.input=n.getInput(),this.inputStream=new De(this.input),this.memoTable=n._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],p!==void 0&&(this.positionToRecordFailures=p,this.recordedFailures=Object.create(null))}posToOffset(n){return n-this._posStack[this._posStack.length-1]}enterApplication(n,a){this._posStack.push(this.inputStream.pos),this._applicationStack.push(a),this.inLexifiedContextStack.push(!1),n.enter(a),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(n,a){const p=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),n.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),a&&this.pushBinding(a,p)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const n=this.currentApplication();return n?n.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(Jr),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(n){return n.allowsSkippingPrecedingSpace()&&n!==Jr?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(n,a){this._bindings.push(n),this._bindingOffsets.push(this.posToOffset(a))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(n){for(;this._bindings.length>n;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(n){let a=this.memoTable[n];return a||(a=this.memoTable[n]=new w),a}processFailure(n,a){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,n),this.recordedFailures&&n===this.positionToRecordFailures){const p=this.currentApplication();p&&(a=a.substituteParams(p.args)),this.recordFailure(a.toFailure(this.grammar),!1)}}recordFailure(n,a){const p=n.toKey();this.recordedFailures[p]?this.recordedFailures[p].isFluffy()&&!n.isFluffy()&&this.recordedFailures[p].clearFluffy():this.recordedFailures[p]=a?n.clone():n}recordFailures(n,a){Object.keys(n).forEach(p=>{this.recordFailure(n[p],a)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const n=Object.create(null);return Object.keys(this.recordedFailures).forEach(a=>{n[a]=this.recordedFailures[a].clone()}),n}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(n,a){const p=this.memoTable[n];if(p&&a instanceof te){const g=p.memo[a.toMemoKey()];if(g&&g.traceEntry){const E=g.traceEntry.cloneWithExpr(a);return E.isMemoized=!0,E}}return null}getTraceEntry(n,a,p,g){if(a instanceof te){const E=this.currentApplication(),M=E?E.args:[];a=a.substituteParams(M)}return this.getMemoizedTraceEntry(n,a)||new xe(this.input,n,this.inputStream.pos,a,p,g,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(n){return this.trace&&!n.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+n.rightmostFailureOffset===this.positionToRecordFailures?!!n.failuresAtRightmostPosition:!0}useMemoizedResult(n,a){this.trace&&this.trace.push(a.traceEntry);const p=this.inputStream.pos+a.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,p),this.recordedFailures&&this.positionToRecordFailures===p&&a.failuresAtRightmostPosition&&this.recordFailures(a.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,a.examinedLength+n),a.value?(this.inputStream.pos+=a.matchLength,this.pushBinding(a.value,n),!0):!1}eval(n){const{inputStream:a}=this,p=this._bindings.length,g=this.userData;let E;this.recordedFailures&&(E=this.recordedFailures,this.recordedFailures=Object.create(null));const M=a.pos,Q=this.maybeSkipSpacesBefore(n);let Z;this.trace&&(Z=this.trace,this.trace=[]);const ue=n.eval(this);if(this.trace){const V=this._bindings.slice(p),G=this.getTraceEntry(Q,n,ue,V);G.isImplicitSpaces=n===Jr,G.isRootNode=n===this.startExpr,Z.push(G),this.trace=Z}return ue?this.recordedFailures&&a.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(V=>{this.recordedFailures[V].makeFluffy()}):(a.pos=M,this.truncateBindings(p),this.userData=g),this.recordedFailures&&this.recordFailures(E,!1),n===bn&&this.skipSpaces(),ue}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let n;this.recordedFailures&&(n=Object.keys(this.recordedFailures).map(p=>this.recordedFailures[p]));const a=this._bindings[0];return a&&(a.grammar=this.grammar),new h(this.matcher,this.input,this.startExpr,a,this._bindingOffsets[0],this.rightmostFailurePosition,n)}getTrace(){this.trace=[];const n=this.getMatchResult(),a=this.trace[this.trace.length-1];return a.result=n,a}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Ae{constructor(n){this.grammar=n,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(n){return this._input!==n&&this.replaceInputRange(0,this._input.length,n),this}replaceInputRange(n,a,p){const g=this._input,E=this._memoTable;if(n<0||n>g.length||a<0||a>g.length||n>a)throw new Error("Invalid indices: "+n+" and "+a);this._input=g.slice(0,n)+p+g.slice(a),this._input!==g&&E.length>0&&(this._isMemoTableStale=!0);const M=E.slice(a);E.length=n;for(let Q=0;Q<p.length;Q++)E.push(void 0);for(const Q of M)E.push(Q);for(let Q=0;Q<n;Q++){const Z=E[Q];Z&&Z.clearObsoleteEntries(Q,n)}return this}match(n,a={incremental:!0}){return this._match(this._getStartExpr(n),{incremental:a.incremental,tracing:!1})}trace(n,a={incremental:!0}){return this._match(this._getStartExpr(n),{incremental:a.incremental,tracing:!0})}_match(n,a={}){const p={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...a};if(!p.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Ge(this.grammar);const g=new wn(this,n,p.positionToRecordFailures);return p.tracing?g.getTrace():g.getMatchResult()}_getStartExpr(n){const a=n||this.grammar.defaultStartRule;if(!a)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const p=this.grammar.parseApplication(a);return new Y([p,B])}}const nt=[],ar=(c,n)=>Object.prototype.hasOwnProperty.call(c,n);class Yr{constructor(n,a,p){this._node=n,this.source=a,this._baseInterval=p,n.isNonterminal()&&e(a===p),this._childWrappers=[]}_forgetMemoizedResultFor(n){delete this._node[this._semantics.attributeKeys[n]],this.children.forEach(a=>{a._forgetMemoizedResultFor(n)})}child(n){if(!(0<=n&&n<this._node.numChildren()))return;let a=this._childWrappers[n];if(!a){const p=this._node.childAt(n),g=this._node.childOffsets[n],E=this._baseInterval.subInterval(g,p.matchLength),M=p.isNonterminal()?E:this._baseInterval;a=this._childWrappers[n]=this._semantics.wrap(p,E,M)}return a}_children(){for(let n=0;n<this._node.numChildren();n++)this.child(n);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(n){const a=n||[],p=a.map(M=>M._node),g=new Ot(p,[],-1,!1),E=this._semantics.wrap(g,null,null);return E._childWrappers=a,E}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class kt{constructor(n,a){const p=this;if(this.grammar=n,this.checkedActionDicts=!1,this.Wrapper=class extends(a?a.Wrapper:Yr){constructor(g,E,M){super(g,E,M),p.checkActionDictsIfHaventAlready(),this._semantics=p}toString(){return"[semantics wrapper for "+p.grammar.name+"]"}},this.super=a,a){if(!(n.equals(this.super.grammar)||n._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+n.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const g in this.attributes)Object.defineProperty(this.attributeKeys,g,{value:Rt(g)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let n;for(n in this.operations)this.operations[n].checkActionDict(this.grammar);for(n in this.attributes)this.attributes[n].checkActionDict(this.grammar)}toRecipe(n){function a(g){return g.super!==kt.BuiltInSemantics._getSemantics()}let p=`(function(g) {
`;if(a(this)){p+="  var semantics = "+this.super.toRecipe(!0)+"(g";const g=this.super.grammar;let E=this.grammar;for(;E!==g;)p+=".superGrammar",E=E.superGrammar;p+=`);
`,p+="  return g.extendSemantics(semantics)"}else p+="  return g.createSemantics()";return["Operation","Attribute"].forEach(g=>{const E=this[g.toLowerCase()+"s"];Object.keys(E).forEach(M=>{const{actionDict:Q,formals:Z,builtInDefault:ue}=E[M];let V=M;Z.length>0&&(V+="("+Z.join(", ")+")");let G;a(this)&&this.super[g.toLowerCase()+"s"][M]?G="extend"+g:G="add"+g,p+=`
    .`+G+"("+JSON.stringify(V)+", {";const se=[];Object.keys(Q).forEach(Ie=>{if(Q[Ie]!==ue){let je=Q[Ie].toString().trim();je=je.replace(/^.*\(/,"function("),se.push(`
      `+JSON.stringify(Ie)+": "+je)}}),p+=se.join(",")+`
    })`})}),p+=`;
  })`,n||(p=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+p+`(grammar);
  return semantics;
});
`),p}addOperationOrAttribute(n,a,p){const g=n+"s",E=xr(a,n),{name:M}=E,{formals:Q}=E;this.assertNewName(M,n);const Z=Fr(n,M,G),ue={_default:Z};Object.keys(p).forEach(se=>{ue[se]=p[se]});const V=n==="operation"?new be(M,Q,ue,Z):new Ke(M,ue,Z);V.checkActionDict(this.grammar),this[g][M]=V;function G(...se){const Ie=this._semantics[g][M];if(arguments.length!==Ie.formals.length)throw new Error("Invalid number of arguments passed to "+M+" "+n+" (expected "+Ie.formals.length+", got "+arguments.length+")");const je=Object.create(null);for(const[Sr,Zr]of Object.entries(se)){const wa=Ie.formals[Sr];je[wa]=Zr}const ht=this.args;this.args=je;const wt=Ie.execute(this._semantics,this);return this.args=ht,wt}n==="operation"?(this.Wrapper.prototype[M]=G,this.Wrapper.prototype[M].toString=function(){return"["+M+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,M,{get:G,configurable:!0}),Object.defineProperty(this.attributeKeys,M,{value:Rt(M)}))}extendOperationOrAttribute(n,a,p){const g=n+"s";if(xr(a,"attribute"),!(this.super&&a in this.super[g]))throw new Error("Cannot extend "+n+" '"+a+"': did not inherit an "+n+" with that name");if(ar(this[g],a))throw new Error("Cannot extend "+n+" '"+a+"' again");const E=this[g][a].formals,M=this[g][a].actionDict,Q=Object.create(M);Object.keys(p).forEach(Z=>{Q[Z]=p[Z]}),this[g][a]=n==="operation"?new be(a,E,Q):new Ke(a,Q),this[g][a].checkActionDict(this.grammar)}assertNewName(n,a){if(ar(Yr.prototype,n))throw new Error("Cannot add "+a+" '"+n+"': that's a reserved name");if(n in this.operations)throw new Error("Cannot add "+a+" '"+n+"': an operation with that name already exists");if(n in this.attributes)throw new Error("Cannot add "+a+" '"+n+"': an attribute with that name already exists")}wrap(n,a,p){const g=p||a;return n instanceof this.Wrapper?n:new this.Wrapper(n,a,g)}}function xr(c,n){if(!kt.prototypeGrammar)return e(c.indexOf("(")===-1),{name:c,formals:[]};const a=kt.prototypeGrammar.match(c,n==="operation"?"OperationSignature":"AttributeSignature");if(a.failed())throw new Error(a.message);return kt.prototypeGrammarSemantics(a).parse()}function Fr(c,n,a){return function(...p){const E=(this._semantics.operations[n]||this._semantics.attributes[n]).formals.map(M=>this.args[M]);if(!this.isIteration()&&p.length===1)return a.apply(p[0],E);throw ft(this.ctorName,n,c,nt)}}kt.createSemantics=function(c,n){const a=new kt(c,n!==void 0?n:kt.BuiltInSemantics._getSemantics()),p=function(E){if(!(E instanceof h))throw new TypeError("Semantics expected a MatchResult, but got "+J(E));if(E.failed())throw new TypeError("cannot apply Semantics to "+E.toString());const M=E._cst;if(M.grammar!==c)throw new Error("Cannot use a MatchResult from grammar '"+M.grammar.name+"' with a semantics for '"+c.name+"'");const Q=new De(E.input);return a.wrap(M,Q.interval(E._cstOffset,E.input.length))};return p.addOperation=function(g,E){return a.addOperationOrAttribute("operation",g,E),p},p.extendOperation=function(g,E){return a.extendOperationOrAttribute("operation",g,E),p},p.addAttribute=function(g,E){return a.addOperationOrAttribute("attribute",g,E),p},p.extendAttribute=function(g,E){return a.extendOperationOrAttribute("attribute",g,E),p},p._getActionDict=function(g){const E=a.operations[g]||a.attributes[g];if(!E)throw new Error('"'+g+'" is not a valid operation or attribute name in this semantics for "'+c.name+'"');return E.actionDict},p._remove=function(g){let E;return g in a.operations?(E=a.operations[g],delete a.operations[g]):g in a.attributes&&(E=a.attributes[g],delete a.attributes[g]),delete a.Wrapper.prototype[g],E},p.getOperationNames=function(){return Object.keys(a.operations)},p.getAttributeNames=function(){return Object.keys(a.attributes)},p.getGrammar=function(){return a.grammar},p.toRecipe=function(g){return a.toRecipe(g)},p.toString=a.toString.bind(a),p._getSemantics=function(){return a},p};class be{constructor(n,a,p,g){this.name=n,this.formals=a,this.actionDict=p,this.builtInDefault=g}checkActionDict(n){n._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(n,a){try{const{ctorName:p}=a._node;let g=this.actionDict[p];return g?(nt.push([this,p]),g.apply(a,a._children())):a.isNonterminal()&&(g=this.actionDict._nonterminal,g)?(nt.push([this,"_nonterminal",p]),g.apply(a,a._children())):(nt.push([this,"default action",p]),this.actionDict._default.apply(a,a._children()))}finally{nt.pop()}}}be.prototype.typeName="operation";class Ke extends be{constructor(n,a,p){super(n,[],a,p)}execute(n,a){const p=a._node,g=n.attributeKeys[this.name];return ar(p,g)||(p[g]=be.prototype.execute.call(this,n,a)),p[g]}}Ke.prototype.typeName="attribute";const dt=["_iter","_terminal","_nonterminal","_default"];function He(c){return Object.keys(c.rules).sort().map(n=>c.rules[n])}const At=c=>c.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Wt,yt;class et{constructor(n,a,p,g){if(this.name=n,this.superGrammar=a,this.rules=p,g){if(!(g in p))throw new Error("Invalid start rule: '"+g+"' is not a rule in grammar '"+n+"'");this.defaultStartRule=g}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Ae(this)}isBuiltIn(){return this===et.ProtoBuiltInRules||this===et.BuiltInRules}equals(n){if(this===n)return!0;if(n==null||this.name!==n.name||this.defaultStartRule!==n.defaultStartRule||!(this.superGrammar===n.superGrammar||this.superGrammar.equals(n.superGrammar)))return!1;const a=He(this),p=He(n);return a.length===p.length&&a.every((g,E)=>g.description===p[E].description&&g.formals.join(",")===p[E].formals.join(",")&&g.body.toString()===p[E].body.toString())}match(n,a){const p=this.matcher();return p.replaceInputRange(0,0,n),p.match(a)}trace(n,a){const p=this.matcher();return p.replaceInputRange(0,0,n),p.trace(a)}createSemantics(){return kt.createSemantics(this)}extendSemantics(n){return kt.createSemantics(this,n._getSemantics())}_checkTopDownActionDict(n,a,p){const g=[];for(const E in p){const M=p[E];if(!dt.includes(E)&&!(E in this.rules)){g.push(`'${E}' is not a valid semantic action for '${this.name}'`);continue}if(typeof M!="function"){g.push(`'${E}' must be a function in an action dictionary for '${this.name}'`);continue}const Z=M.length,ue=this._topDownActionArity(E);if(Z!==ue){let V;E==="_iter"||E==="_nonterminal"?V=`it should use a rest parameter, e.g. \`${E}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:V=`expected ${ue}, got ${Z}`,g.push(`Semantic action '${E}' has the wrong arity: ${V}`)}}if(g.length>0){const E=g.map(Q=>"- "+Q),M=new Error([`Found errors in the action dictionary of the '${a}' ${n}:`,...E].join(`
`));throw M.problems=g,M}}_topDownActionArity(n){return dt.includes(n)?0:this.rules[n].body.getArity()}_inheritsFrom(n){let a=this.superGrammar;for(;a;){if(a.equals(n,!0))return!0;a=a.superGrammar}return!1}toRecipe(n=void 0){const a={};this.source&&(a.source=this.source.contents);let p=null;this.defaultStartRule&&(p=this.defaultStartRule);const g={};Object.keys(this.rules).forEach(Q=>{const Z=this.rules[Q],{body:ue}=Z,V=!this.superGrammar||!this.superGrammar.rules[Q];let G;V?G="define":G=ue instanceof ie?"extend":"override";const se={};if(Z.source&&this.source){const ht=Z.source.relativeTo(this.source);se.sourceInterval=[ht.startIdx,ht.endIdx]}const Ie=V?Z.description:null,je=ue.outputRecipe(Z.formals,this.source);g[Q]=[G,se,Ie,Z.formals,je]});let E="null";n?E=n:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(E=this.superGrammar.toRecipe());const M=[...["grammar",a,this.name].map(JSON.stringify),E,...[p,g].map(JSON.stringify)];return At(`[${M.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const n=new v;n.append("{");let a=!0;for(const p in this.rules){const{body:g}=this.rules[p];a?a=!1:n.append(","),n.append(`
`),n.append("  "),this.addSemanticActionTemplate(p,g,n)}return n.append(`
}`),n.contents()}addSemanticActionTemplate(n,a,p){p.append(n),p.append(": function(");const g=this._topDownActionArity(n);p.append(o("_",g).join(", ")),p.append(`) {
`),p.append("  }")}parseApplication(n){let a;if(n.indexOf("<")===-1)a=new te(n);else{const g=Wt.match(n,"Base_application");a=yt(g,{})}if(!(a.ruleName in this.rules))throw Pe(a.ruleName,this.name);const{formals:p}=this.rules[a.ruleName];if(p.length!==a.args.length){const{source:g}=this.rules[a.ruleName];throw K(a.ruleName,p.length,a.args.length,g)}return a}_setUpMatchState(n){this._matchStateInitializer&&this._matchStateInitializer(n)}}et.ProtoBuiltInRules=new et("ProtoBuiltInRules",void 0,{any:{body:D,formals:[],description:"any character",primitive:!0},end:{body:B,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new Vt(new F(0)),formals:["str"],primitive:!0},lower:{body:new Ce("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new Ce("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new Ce("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new le(new te("space")),formals:[]},space:{body:new y("\0"," "),formals:[],description:"a space"}}),et.initApplicationParser=function(c,n){Wt=c,yt=n};class St{constructor(n){this.name=n}sourceInterval(n,a){return this.source.subInterval(n,a-n)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?et.ProtoBuiltInRules:et.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(n,a){const p=this.ensureSuperGrammar().rules[n];if(!p)throw P(n,this.superGrammar.name,a);return p}installOverriddenOrExtendedRule(n,a,p,g){const E=f(a);if(E.length>0)throw H(n,E,g);const M=this.ensureSuperGrammar().rules[n],Q=M.formals,Z=Q?Q.length:0;if(a.length!==Z)throw K(n,Z,a.length,g);return this.install(n,a,p,M.description,g)}install(n,a,p,g,E,M=!1){return this.rules[n]={body:p.introduceParams(a),formals:a,description:g,source:E,primitive:M},this}withSuperGrammar(n){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=n,this.rules=Object.create(n.rules),n.isBuiltIn()||(this.defaultStartRule=n.defaultStartRule),this}withDefaultStartRule(n){return this.defaultStartRule=n,this}withSource(n){return this.source=new De(n).interval(0,n.length),this}build(){const n=new et(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);n._matchStateInitializer=n.superGrammar._matchStateInitializer,n.supportsIncrementalParsing=n.superGrammar.supportsIncrementalParsing;const a=[];let p=!1;return Object.keys(n.rules).forEach(g=>{const{body:E}=n.rules[g];try{E.assertChoicesHaveUniformArity(g)}catch(M){a.push(M)}try{E.assertAllApplicationsAreValid(g,n)}catch(M){a.push(M),p=!0}}),p||Object.keys(n.rules).forEach(g=>{const{body:E}=n.rules[g];try{E.assertIteratedExprsAreNotNullable(n,[])}catch(M){a.push(M)}}),a.length>0&&ot(a),this.source&&(n.source=this.source),n}define(n,a,p,g,E,M){if(this.ensureSuperGrammar(),this.superGrammar.rules[n])throw R(n,this.name,this.superGrammar.name,E);if(this.rules[n])throw R(n,this.name,this.name,E);const Q=f(a);if(Q.length>0)throw H(n,Q,E);return this.install(n,a,p,g,E,M)}override(n,a,p,g,E){return this.ensureSuperGrammarRuleForOverriding(n,E),this.installOverriddenOrExtendedRule(n,a,p,E),this}extend(n,a,p,g,E){if(!this.ensureSuperGrammar().rules[n])throw $(n,this.superGrammar.name,E);const Q=new ie(this.superGrammar,n,p);return Q.source=p.source,this.installOverriddenOrExtendedRule(n,a,Q,E),this}}class _t{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(n){return new St(n)}grammar(n,a,p,g,E){const M=new St(a);return p&&M.withSuperGrammar(p instanceof et?p:this.fromRecipe(p)),g&&M.withDefaultStartRule(g),n&&n.source&&M.withSource(n.source),this.currentDecl=M,Object.keys(E).forEach(Q=>{this.currentRuleName=Q;const Z=E[Q],ue=Z[0],V=Z[1],G=Z[2],se=Z[3],Ie=this.fromRecipe(Z[4]);let je;M.source&&V&&V.sourceInterval&&(je=M.source.subInterval(V.sourceInterval[0],V.sourceInterval[1]-V.sourceInterval[0])),M[ue](Q,se,Ie,G,je)}),this.currentRuleName=this.currentDecl=null,M.build()}terminal(n){return new L(n)}range(n,a){return new y(n,a)}param(n){return new F(n)}alt(...n){let a=[];for(let p of n)p instanceof U||(p=this.fromRecipe(p)),p instanceof j?a=a.concat(p.terms):a.push(p);return a.length===1?a[0]:new j(a)}seq(...n){let a=[];for(let p of n)p instanceof U||(p=this.fromRecipe(p)),p instanceof Y?a=a.concat(p.factors):a.push(p);return a.length===1?a[0]:new Y(a)}star(n){return n instanceof U||(n=this.fromRecipe(n)),new le(n)}plus(n){return n instanceof U||(n=this.fromRecipe(n)),new ke(n)}opt(n){return n instanceof U||(n=this.fromRecipe(n)),new ze(n)}not(n){return n instanceof U||(n=this.fromRecipe(n)),new ye(n)}lookahead(n){return n instanceof U||(n=this.fromRecipe(n)),new ge(n)}lex(n){return n instanceof U||(n=this.fromRecipe(n)),new Be(n)}app(n,a){return a&&a.length>0&&(a=a.map(function(p){return p instanceof U?p:this.fromRecipe(p)},this)),new te(n,a)}splice(n,a){return new me(this.currentDecl.superGrammar,this.currentRuleName,n.map(p=>this.fromRecipe(p)),a.map(p=>this.fromRecipe(p)))}fromRecipe(n){const a=n[0]==="grammar"?n.slice(1):n.slice(2),p=this[n[0]](...a),g=n[1];return g&&g.sourceInterval&&this.currentDecl&&p.withSource(this.currentDecl.sourceInterval(...g.sourceInterval)),p}}function Qe(c){return typeof c=="function"?c.call(new _t):(typeof c=="string"&&(c=JSON.parse(c)),new _t().fromRecipe(c))}var bt=Qe(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);et.BuiltInRules=bt,ne(et.BuiltInRules);var kr=Qe(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const lt=Object.create(U.prototype);function Ar(c,n){for(const a in c)if(a===n)return!0;return!1}function or(c,n,a){const p=new _t;let g,E,M,Q=!1;return(a||kr).createSemantics().addOperation("visit",{Grammars(V){return V.children.map(G=>G.visit())},Grammar(V,G,se,Ie,je){const ht=V.visit();g=p.newGrammar(ht),G.child(0)&&G.child(0).visit(),Ie.children.map(Sr=>Sr.visit());const wt=g.build();if(wt.source=this.source.trimmed(),Ar(n,ht))throw Se(wt);return n[ht]=wt,wt},SuperGrammar(V,G){const se=G.visit();if(se==="null")g.withSuperGrammar(null);else{if(!n||!Ar(n,se))throw ae(se,n,G.source);g.withSuperGrammar(n[se])}},Rule_define(V,G,se,Ie,je){E=V.visit(),M=G.children.map(Zr=>Zr.visit())[0]||[],!g.defaultStartRule&&g.ensureSuperGrammar()!==et.ProtoBuiltInRules&&g.withDefaultStartRule(E);const ht=je.visit(),wt=se.children.map(Zr=>Zr.visit())[0],Sr=this.source.trimmed();return g.define(E,M,ht,wt,Sr)},Rule_override(V,G,se,Ie){E=V.visit(),M=G.children.map(wt=>wt.visit())[0]||[];const je=this.source.trimmed();g.ensureSuperGrammarRuleForOverriding(E,je),Q=!0;const ht=Ie.visit();return Q=!1,g.override(E,M,ht,null,je)},Rule_extend(V,G,se,Ie){E=V.visit(),M=G.children.map(wt=>wt.visit())[0]||[];const je=Ie.visit(),ht=this.source.trimmed();return g.extend(E,M,je,null,ht)},RuleBody(V,G){return p.alt(...G.visit()).withSource(this.source)},OverrideRuleBody(V,G){const se=G.visit(),Ie=se.indexOf(lt);if(Ie>=0){const je=se.slice(0,Ie),ht=se.slice(Ie+1);return ht.forEach(wt=>{if(wt===lt)throw we(wt)}),new me(g.superGrammar,E,je,ht).withSource(this.source)}else return p.alt(...se).withSource(this.source)},Formals(V,G,se){return G.visit()},Params(V,G,se){return G.visit()},Alt(V){return p.alt(...V.visit()).withSource(this.source)},TopLevelTerm_inline(V,G){const se=E+"_"+G.visit(),Ie=V.visit(),je=this.source.trimmed(),ht=!(g.superGrammar&&g.superGrammar.rules[se]);Q&&!ht?g.override(se,M,Ie,null,je):g.define(se,M,Ie,null,je);const wt=M.map(Sr=>p.app(Sr));return p.app(se,wt).withSource(Ie.source)},OverrideTopLevelTerm_superSplice(V){return lt},Seq(V){return p.seq(...V.children.map(G=>G.visit())).withSource(this.source)},Iter_star(V,G){return p.star(V.visit()).withSource(this.source)},Iter_plus(V,G){return p.plus(V.visit()).withSource(this.source)},Iter_opt(V,G){return p.opt(V.visit()).withSource(this.source)},Pred_not(V,G){return p.not(G.visit()).withSource(this.source)},Pred_lookahead(V,G){return p.lookahead(G.visit()).withSource(this.source)},Lex_lex(V,G){return p.lex(G.visit()).withSource(this.source)},Base_application(V,G){const se=G.children.map(Ie=>Ie.visit())[0]||[];return p.app(V.visit(),se).withSource(this.source)},Base_range(V,G,se){return p.range(V.visit(),se.visit()).withSource(this.source)},Base_terminal(V){return p.terminal(V.visit()).withSource(this.source)},Base_paren(V,G,se){return G.visit()},ruleDescr(V,G,se){return G.visit()},ruleDescrText(V){return this.sourceString.trim()},caseName(V,G,se,Ie,je){return se.visit()},name(V,G){return this.sourceString},nameFirst(V){},nameRest(V){},terminal(V,G,se){return G.children.map(Ie=>Ie.visit()).join("")},oneCharTerminal(V,G,se){return G.visit()},escapeChar(V){try{return q(this.sourceString)}catch(G){throw G instanceof RangeError&&G.message.startsWith("Invalid code point ")?Ne(V):G}},NonemptyListOf(V,G,se){return[V.visit()].concat(se.children.map(Ie=>Ie.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(c).visit()}var Kt=Qe(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);qr(et.BuiltInRules),mr(Kt);function qr(c){const n={empty(){return this.iteration()},nonEmpty(a,p,g){return this.iteration([a].concat(g.children))}};kt.BuiltInSemantics=kt.createSemantics(c,null).addOperation("asIteration",{emptyListOf:n.empty,nonemptyListOf:n.nonEmpty,EmptyListOf:n.empty,NonemptyListOf:n.nonEmpty})}function mr(c){kt.prototypeGrammarSemantics=c.createSemantics().addOperation("parse",{AttributeSignature(n){return{name:n.parse(),formals:[]}},OperationSignature(n,a){return{name:n.parse(),formals:a.children.map(p=>p.parse())[0]||[]}},Formals(n,a,p){return a.asIteration().children.map(g=>g.parse())},name(n,a){return this.sourceString}}),kt.prototypeGrammar=c}function pa(c){let n=0;const a=[0],p=()=>a[a.length-1],g={},E=/( *).*(?:$|\r?\n|\r)/g;let M;for(;(M=E.exec(c))!=null;){const[Q,Z]=M;if(Q.length===0)break;const ue=Z.length,V=p(),G=n+ue;if(ue>V)a.push(ue),g[G]=1;else if(ue<V){const se=a.length;for(;p()!==ue;)a.pop();g[G]=-1*(se-a.length)}n+=Q.length}return a.length>1&&(g[n]=1-a.length),g}const Ui="an indented block",Bi="a dedent",Gi=1114112;class da extends De{constructor(n){super(n.input),this.state=n}_indentationAt(n){return this.state.userData[n]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Gi):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Gi):super.nextCodePoint()}}class Vi extends U{constructor(n=!0){super(),this.isIndent=n}allowsSkippingPrecedingSpace(){return!0}eval(n){const{inputStream:a}=n,p=n.userData;n.doNotMemoize=!0;const g=a.pos,E=this.isIndent?1:-1;return(p[g]||0)*E>0?(n.userData=Object.create(p),n.userData[g]-=E,n.pushBinding(new _e(0),g),!0):(n.processFailure(g,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(n,a){}_isNullable(n,a){return!1}assertChoicesHaveUniformArity(n){}assertIteratedExprsAreNotNullable(n){}introduceParams(n){return this}substituteParams(n){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(n){const a=this.isIndent?Ui:Bi;return new rt(this,a,"description")}}const ha=new te("indent"),fa=new te("dedent"),ma=new me(bt,"any",[ha,fa],[]),Wi=new _t().newGrammar("IndentationSensitive").withSuperGrammar(bt).define("indent",[],new Vi(!0),Ui,void 0,!0).define("dedent",[],new Vi(!1),Bi,void 0,!0).extend("any",[],ma,"any character",void 0).build();Object.assign(Wi,{_matchStateInitializer(c){c.userData=pa(c.input),c.inputStream=new da(c)},supportsIncrementalParsing:!1});const ga="17.1.0";et.initApplicationParser(kr,or);const va=c=>!!c.constructor&&typeof c.constructor.isBuffer=="function"&&c.constructor.isBuffer(c);function ya(c,n){const a=kr.match(c,"Grammars");if(a.failed())throw A(a);return or(a,n)}function ba(c,n){const a=Ki(c,n),p=Object.keys(a);if(p.length===0)throw new Error("Missing grammar definition");if(p.length>1){const E=a[p[1]].source;throw new Error(ir(E.sourceString,E.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return a[p[0]]}function Ki(c,n){const a=Object.create(n||{});if(typeof c!="string")if(va(c))c=c.toString();else throw new TypeError("Expected string as first argument, got "+J(c));return ya(c,a),a}return Ht.ExperimentalIndentationSensitive=Wi,Ht._buildGrammar=or,Ht.grammar=ba,Ht.grammars=Ki,Ht.makeRecipe=Qe,Ht.ohmGrammar=kr,Ht.pexprs=Qn,Ht.version=ga,Ht}var ii,hs;function Xs(){if(hs)return ii;hs=1;const{makeRecipe:t}=Ul();return ii=t(["grammar",{source:`PEP508 {
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
`],["terminal",{sourceInterval:[6127,6130]},"#"]]],["app",{sourceInterval:[6132,6135]},"any",[]]]]]}]),ii}var rn={},fs;function ms(){return fs||(fs=1,function(t){var e=rn&&rn.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequirementsSyntaxError=t.semantics=void 0;const r=e(Xs());t.semantics=r.default.createSemantics(),t.semantics.addOperation("extract",{File:s=>s.asIteration().children.map(u=>u.extract()).filter(Boolean),Line:(s,u)=>{var o;return((o=s.child(0))===null||o===void 0?void 0:o.extract())||null},NameReq:(s,u,o,f)=>{var x,I;return{type:"ProjectName",name:s.sourceString,versionSpec:o.extract(),extras:(x=u.child(0))===null||x===void 0?void 0:x.extract(),environmentMarkerTree:(I=f.child(0))===null||I===void 0?void 0:I.extract()}},UrlReq:(s,u,o,f,x)=>{var I,O;return{type:"ProjectURL",name:s.sourceString,url:o.extract(),extras:(I=u.child(0))===null||I===void 0?void 0:I.extract(),environmentMarkerTree:(O=x.child(0))===null||O===void 0?void 0:O.extract()}},Extras:(s,u,o)=>u.asIteration().children.map(f=>f.sourceString),RequirementsReq:(s,u)=>({type:"RequirementsFile",path:u.sourceString}),ConstraintsReq:(s,u)=>({type:"ConstraintsFile",path:u.sourceString}),UrlSpec:(s,u)=>u.sourceString,QuotedMarker:(s,u)=>u.extract(),MarkerOr_node:(s,u,o)=>({operator:"or",left:s.extract(),right:o.extract()}),MarkerAnd_node:(s,u,o)=>({operator:"and",left:s.extract(),right:o.extract()}),MarkerExpr_leaf:(s,u,o)=>({left:s.sourceString,operator:u.sourceString,right:o.sourceString}),MarkerExpr_node:(s,u,o)=>u.extract(),VersionSpec_parenthesized:(s,u,o)=>u.extract()||[],VersionMany:s=>{const u=s.asIteration().children;if(u.length!==0)return u.map(o=>o.extract())},VersionOne:(s,u)=>({operator:s.sourceString,version:u.sourceString})}),t.semantics.addOperation("extractLoosely",{LooseFile:s=>s.asIteration().children.map(u=>u.extractLoosely()).filter(Boolean),LooseLine:(s,u)=>{var o;return((o=s.child(0))===null||o===void 0?void 0:o.extractLoosely())||null},LooseNameReq:(s,u,o,f)=>({type:"ProjectName",name:s.sourceString}),LooseNonNameReq:s=>null});class i extends Error{}t.RequirementsSyntaxError=i}(rn)),rn}var Cr={},gs;function Bl(){if(gs)return Cr;gs=1,Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.VersionOperator=Cr.EnvironmentMarkerVariable=void 0;var t;(function(r){r.PythonVersion="python_version",r.PythonFullVersion="python_full_version",r.OsName="os_name",r.SysPlatform="sys_platform",r.PlatformRelease="platform_release",r.PlatformSystem="platform_system",r.PlatformVersion="platform_version",r.PlatformMachine="platform_machine",r.PlatformPythonImplementation="platform_python_implementation",r.ImplementationName="implementation_name",r.ImplementationVersion="implementation_version",r.Extra="extra"})(t||(Cr.EnvironmentMarkerVariable=t={}));var e;return function(r){r.CompatibleRelease="~=",r.VersionMatching="==",r.VersionExclusion="!=",r.LessThanOrMatching="<=",r.GreaterThanOrMatching=">=",r.LessThan="<",r.GreaterThan=">",r.ArbitrarilyEqual="==="}(e||(Cr.VersionOperator=e={})),Cr}var vs;function Gl(){return vs||(vs=1,function(t){var e=lr&&lr.__createBinding||(Object.create?function(C,v,T,q){q===void 0&&(q=T);var J=Object.getOwnPropertyDescriptor(v,T);(!J||("get"in J?!v.__esModule:J.writable||J.configurable))&&(J={enumerable:!0,get:function(){return v[T]}}),Object.defineProperty(C,q,J)}:function(C,v,T,q){q===void 0&&(q=T),C[q]=v[T]}),r=lr&&lr.__exportStar||function(C,v){for(var T in C)T!=="default"&&!Object.prototype.hasOwnProperty.call(v,T)&&e(v,C,T)},i=lr&&lr.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(t,"__esModule",{value:!0}),t.parsePipRequirementsLineLoosely=t.parsePipRequirementsFileLoosely=t.parsePipRequirementsLine=t.parsePipRequirementsFile=t.RequirementsSyntaxError=void 0;const s=i(Xs()),u=ms();var o=ms();Object.defineProperty(t,"RequirementsSyntaxError",{enumerable:!0,get:function(){return o.RequirementsSyntaxError}}),r(Bl(),t);function f(C){const v=s.default.match(C,"File");if(v.failed())throw new u.RequirementsSyntaxError(`Failed to parse requirements file. ${v.shortMessage}`);return(0,u.semantics)(v).extract()}t.parsePipRequirementsFile=f;function x(C){const v=s.default.match(C,"Line");if(v.failed())throw new u.RequirementsSyntaxError(`Failed to parse requirements line. ${v.shortMessage}`);return(0,u.semantics)(v).extract()}t.parsePipRequirementsLine=x;function I(C){const v=s.default.match(C,"LooseFile");if(v.failed())throw new u.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${v.shortMessage}`);return(0,u.semantics)(v).extractLoosely()}t.parsePipRequirementsFileLoosely=I;function O(C){const v=s.default.match(C,"LooseLine");if(v.failed())throw new u.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${v.shortMessage}`);return(0,u.semantics)(v).extractLoosely()}t.parsePipRequirementsLineLoosely=O}(lr)),lr}var Vl=Gl();function Wl(t){return new Worker("/assets/pyworker-C-BOLKRv.js",{type:"module",name:t==null?void 0:t.name})}let Kl=0;class Hl{constructor(){this.pendingMessages=new Map}async init(e,r){this.workspace=e,this.vars=r??{},this.worker=new Wl,this.worker.onmessage=i=>{this.handleWorkerMessage(i.data)},this.worker.onerror=i=>{console.error("Python Worker error:",i)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const i=e.payload.prompt||"Input:",s=window.prompt(i);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:s,cancelled:s===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:i,message:s}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",s,i);return}const r=this.pendingMessages.get(e.id);r&&(this.pendingMessages.delete(e.id),e.type==="success"?r.resolve(e.payload):e.type==="error"&&r.reject(new Error(e.payload.message)))}async sendMessage(e,r){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const i=`msg-${Kl++}`,s={id:i,type:e,payload:r};return new Promise((u,o)=>{this.pendingMessages.set(i,{resolve:u,reject:o}),this.worker.postMessage(s)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,r){const i=await this.sendMessage("runFunction",{name:e,args:r});return cr(nn,this.workspace),i}async setGlobal(e,r){await this.sendMessage("setGlobal",{key:e,value:r})}async mountWorkspace(e="/workspace"){const r=await Dt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:r.getHandle(),mountPoint:e})}async installDependencies(){var r;const e=await((r=this.workspace)==null?void 0:r.getResource("requirements.txt"));if(e){const i=(await e.getContents()).replaceAll("\r",""),s=Vl.parsePipRequirementsFile(i).filter(u=>"name"in u).map(u=>u.name);await this.loadPackages(s)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),cr(nn,this.workspace)}async execCode(e){const r=await this.sendMessage("execCode",{code:e});return cr(nn,this.workspace),r}async execScript(e){const r=e.split(".")[0],i=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(r,i)}async execModule(e,r){const i=await this.sendMessage("execModule",{moduleName:e,entryName:r,vars:this.vars});return cr(nn,this.workspace),i}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class Jl{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,dr(yi,()=>{})}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const r=u=>{const o=u.detail;o&&Array.from(o.querySelectorAll("*")).filter(x=>x instanceof xt).forEach(x=>{qe.set(x)})};e.addEventListener("tab-shown",r);const i=u=>{const o=u.detail;Array.from(o.querySelectorAll("*")).filter(x=>x instanceof xt).forEach(x=>{qe.get()==x&&qe.set(null)})};e.addEventListener("tab-closed",i),Ns(ci,u=>{const f=u.closest("wa-tab-panel").getAttribute("name");e.markDirty(f,u.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((r,i)=>(i.ranking??0)-(r.ranking??0))}async handleInput(e){for(let r=0;r<this.editorInputHandlers.length;r++){const i=this.editorInputHandlers[r];if(i.canHandle(e))return await i.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${Dn}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const r=this.getEditorArea();if(!r){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(r),r.has(e.key)){r.activate(e.key);return}r.open({name:e.key,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}}const br=new Jl;tr.put("editorRegistry",br);const Yl=`# 🌐 geo!space

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

**Happy mapping! 🗺️✨**`;pt({command:{id:"touch",name:"Create a file",description:"Creates a new file within the workspace",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!0},{name:"contents",description:"the textual contents of the file",required:!1}]},handler:{execute:async({params:{path:t,contents:e}})=>{if(!t)return;const i=await(await Dt.getWorkspace()).getResource(t,{create:!0});i?e&&await i.saveContents(e):console.log("could not create file: "+t)}}});pt({command:{id:"create_file",name:"Create new file",description:"Shows a popup to create a new file",parameters:[]},handler:{execute:async t=>{const e=await Dt.getWorkspace();if(!e){ut("Please select a workspace!");return}const r=prompt("Enter path to new file (directories will be created if not exist):");r&&await e.getResource(r,{create:!0})}}});pt({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{let e,r=t.params&&t.params.path;if(r){const u=await Dt.getWorkspace();u&&(e=await u.getResource(r))}if(e||(e=pr.get()),!e){ut("No resource to delete provided!");return}r=e.getWorkspacePath();const i=t.params&&t.params.confirm;let s=!0;(i===void 0||i===!0)&&(s=window.confirm(`Are you sure you want to delete ${r}?`)),s&&e.delete().then(()=>{vr("Resource deleted: "+r)}).catch(u=>{ut(`Resource ${r} could not be deleted: `+u)})}}});pt({command:{id:"load_workspace",name:"Load workspace",description:"Loads a workspace",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Dt.connectWorkspace(e)).catch(e=>{ut(e.message)})}}});pt({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Dt.getWorkspace();e||ut("No workspace selected."),e.touch()}}});pt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Dt.getWorkspace();e||ut("No workspace selected.");const r=t.params.path,i=await(e==null?void 0:e.getResource(r));await br.loadEditor(i)}}});pt({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const r=new Hl,i=await Dt.getWorkspace();await r.init(i,t),await r.installDependencies(),await r.execScript(e)}}});pt({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});pt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=qe.get();e&&e.isDirty()&&e.save()}},contribution:{target:Ci,icon:"floppy-disk",label:"Save active editor",slot:"end",disabled:()=>{const t=qe.get();return!t||!t.isDirty()}}});pt({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async t=>{const e=new As(Yl,"README.md");await br.loadEditor(e)}},contribution:{target:Hr,icon:"question-circle",label:"Welcome"}});pt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{document.documentElement.classList.toggle("wa-dark")||document.documentElement.classList.toggle("wa-light")}},contribution:{target:Hr,icon:"circle-half-stroke",label:"Theme Switcher"}});pt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:Hr,icon:"expand",label:"Fullscreen"}});pt({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:t=>{const e={title:"settings.json",data:{async getContents(){const r=await Jt.getAll();return JSON.stringify(r,void 0,2)},getName(){return e.key},saveContents(r){const i=JSON.parse(r);return Jt.setAll(i)}},key:"setting.json",icon:"gear",state:{}};e.widgetFactory=()=>de`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,br.loadEditor(e).then()}},contribution:{target:Hr,icon:"gear",label:"Open Settings"}});pt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>de`
                <k-extensions></k-extensions>`,br.loadEditor(e).then()}},contribution:{target:Hr,icon:"puzzle-piece",label:"Open Extensions"}});Me.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?ut(t):vr(t))}}});const ea="events/chatservice/aiConfigChanged",_n="aiConfig",Zl={defaultProvider:"ollama",providers:[{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""},{name:"openai",model:"gpt-4.1-mini",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"},{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"},{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"},{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}]},vn="chatservice.prompts",Ql={name:"openai-api",canHandle:t=>!0,completionApi:async t=>(await fetch(t.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${t.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({model:t.model,stream:t.stream,messages:t.messages,...t.chatConfig.parameters})})).json().then(r=>({role:"assistant",content:r.choices[0].message.content}))};class Xl{constructor(){this.fetchers=[],this.promptContributions=[],dr(wi,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.promptContributions=st.getContributions(vn)}registerFetcher(e){this.fetchers.push(e)}async checkAIConfig(){this.aiConfig||(this.aiConfig=await Jt.get(_n),this.aiConfig||(await Jt.set(_n,Zl),this.aiConfig=await Jt.get(_n)),cr(ea,this.aiConfig))}async getDefaultProvider(){var r;await this.checkAIConfig();const e=await this.getProviders();if((r=this.aiConfig)!=null&&r.defaultProvider){const i=e.find(s=>{var u;return s.name===((u=this.aiConfig)==null?void 0:u.defaultProvider)});if(i)return i}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig.defaultProvider=e,await Jt.set(_n,this.aiConfig),this.getDefaultProvider()}async getProviders(){var e;return await this.checkAIConfig(),((e=this.aiConfig)==null?void 0:e.providers)||[]}createMessage(e){return{role:"user",content:e}}getPromptContribution(e){return this.promptContributions.find(r=>r.role===e)}async handleUserPrompt(e){const r=e.chatConfig||await this.getDefaultProvider(),i=e.chatContext,s=this.promptContributions.map(o=>{const f=e.callContext.createChild({userPrompt:i.history[i.history.length-1].content});if(o.canHandle instanceof Function&&!o.canHandle(f.getProxy()))return;const x=i.history.map(v=>{let T=v.role,q=v.content;return T!=="user"&&(T!==o.role?(T="user",q=`***Another Assistant '${v.role}' replied:***
${q}`):T="assistant"),{role:T,content:q}});let I=x[x.length-1],O=o.sysPrompt;typeof O=="function"&&(O=O()),x.unshift({role:"system",content:O});const C=async()=>{const v={model:r.model,stream:!1,messages:x,chatConfig:r};return(this.fetchers.find(q=>q.canHandle(r))||Ql).completionApi(v).then(q=>q)};return o.promptDecorator instanceof Function?o.promptDecorator(f.getProxy()).then(v=>{v&&(I.content=v)}).then(C).then(async v=>(v.role=o.role,o.messageDecorator&&(f.put("message",v),o.messageDecorator(f.getProxy())),v)):C()}),u=await Promise.all(s.filter(o=>!!o));i.history.push(...u)}}const Er=new Xl;tr.put("chatService",Er);var ec=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,rr=(t,e,r,i)=>{for(var s=i>1?void 0:i?tc(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ec(e,r,s),s};let Ut=class extends xt{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatContext=this.defaultChatContext,this.busy=!1,this.inputValue=""}onAIConfigChanged(){this.doBeforeUI()}onPartChanged(t){t&&"chatContext"in t?this.chatContext=t.chatContext:this.chatContext=this.defaultChatContext}doBeforeUI(){Er.getProviders().then(t=>{this.providers=t||[]}),Er.getDefaultProvider().then(t=>{this.defaultProvider=t})}updated(t){super.updated(t),(t.has("chatContext")||t.has("busy"))&&this.scrollToBottom()}scrollToBottom(){this.messagesContainer&&requestAnimationFrame(()=>{this.messagesContainer&&(this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight)})}onInput(t){const e=t.target;this.inputValue=e.value}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.sendMessage())}async sendMessage(){const t=this.inputValue.trim();!t||this.busy||(this.inputValue="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),await this.handlePrompt(t))}async runCommand(t,e){const r=e||Me,i=t.trim().split(/\s+/);if(i.length===0)return;const s=i.shift(),u=r.getCommand(s);if(!u){ut("Command not found: "+s);return}const o={};i.forEach((x,I)=>{o[u.parameters[I].name]=x});const f={source:this,params:o};r.execute(s,f),this.requestUpdate()}async handlePrompt(t){if(t.startsWith("/")){await this.runCommand(t.substring(1),Me);return}const e=Er.createMessage(t);this.chatContext.history.push(e),this.requestUpdate(),this.busy=!0;const r=qe.get(),i=pn.createChild({activePart:r,activeEditor:r!=null&&r.isEditor?r:null});dn.runAsync("Calling AI assistant",s=>Er.handleUserPrompt({chatContext:this.chatContext,callContext:i}).then(u=>{this.requestUpdate()})).catch(s=>{ut(`${s}`)}).finally(()=>{this.busy=!1,i.destroy()})}async onChangeDefaultProvider(t){this.defaultProvider=await Er.setDefaultProvider(t.currentTarget.value)}copyToClipboard(t){navigator.clipboard.writeText(t).then(()=>{}).catch(e=>{ut(`Failed to copy: ${e}`)})}formatTimestamp(t=new Date){return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderMessage(t){var s;const e=t.role==="user",r=Er.getPromptContribution(t.role),i=(r==null?void 0:r.label)||t.role;return de`
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
                        ${ur((s=t.actions)==null?void 0:s.length,()=>{var u;return de`
                            ${(u=t.actions)==null?void 0:u.map(o=>de`
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
                    ${gi(We.parse(t.content))}
                </div>
            </div>
        `}renderLoadingIndicator(){return de`
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
        `}render(){var t;return de`
            <div class="chat-container">
                ${ur(!this.defaultProvider,()=>de`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Select a provider from the menu below</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map(e=>this.renderMessage(e))}
                    ${ur(this.busy,()=>this.renderLoadingIndicator())}
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
                            ${(t=this.providers)==null?void 0:t.map(e=>{var r;return de`
                                <wa-dropdown-item 
                                    type="checkbox"
                                    value="${e.name}"
                                    ?checked="${e.name===((r=this.defaultProvider)==null?void 0:r.name)}"
                                    @click="${this.onChangeDefaultProvider}">
                                    ${e.name}
                                </wa-dropdown-item>
                            `})}
                        </wa-dropdown>
                    </div>
                </div>
            </div>
        `}};Ut.styles=Bt`
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
    `;rr([vt()],Ut.prototype,"chatContext",2);rr([vt()],Ut.prototype,"providers",2);rr([vt()],Ut.prototype,"defaultProvider",2);rr([vt()],Ut.prototype,"busy",2);rr([vt()],Ut.prototype,"inputValue",2);rr([Ss(".chat-messages")],Ut.prototype,"messagesContainer",2);rr([Ss("wa-textarea")],Ut.prototype,"textareaElement",2);rr([vi(ea)],Ut.prototype,"onAIConfigChanged",1);rr([Ai(qe)],Ut.prototype,"onPartChanged",1);Ut=rr([gt("k-aiassist")],Ut);var rc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,ta=(t,e,r,i)=>{for(var s=i>1?void 0:i?nc(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&rc(e,r,s),s};let zn=class extends xt{doInitUI(){dr(ui,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){it.enable(t.id,!0),this.requestUpdate()}disable(t){it.disable(t.id,!0),this.requestUpdate()}selectionChanged(t){this.selectedExtension=t.detail.selection[0].model}render(){return de`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree style="--indent-guide-width: 1px;" slot="start"
                         @wa-selection-change="${this.selectionChanged}">
                    ${it.getExtensions().map(t=>de`
                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t} expanded>
                            <span>${Xt(t.icon)} ${t.name}</span>
                        </wa-tree-item>`)}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${ur(this.selectedExtension,t=>de`
                        <h1>${Xt(t.icon)} ${t.name}</h1>
                        <hr>
                        <div>
                            ${ur(it.isEnabled(t.id),()=>de`
                                <wa-button title="Disable this extension" @click="${()=>this.disable(t)}"
                                           variant="danger" appearance="plain">
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>`,()=>de`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(t)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${ur(t.experimental,()=>de`
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
        `}};zn.styles=Bt`
        :host {
        }
    `;ta([vt()],zn.prototype,"selectedExtension",2);zn=ta([gt("k-extensions")],zn);var ic=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,Jn=(t,e,r,i)=>{for(var s=i>1?void 0:i?sc(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ic(e,r,s),s};let Wr=class extends xt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Tr()}connectedCallback(){super.connectedCallback(),Ha(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Ja()}log(t,e,r="info"){const i={timestamp:new Date,level:r,source:t,message:e};this.messages=[...this.messages,i],this.autoScroll&&this.updateComplete.then(()=>{const s=this.containerRef.value;s&&(s.scrollTop=s.scrollHeight)})}clear(){this.messages=[]}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}render(){const t=this.getFilteredMessages();return de`
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
                <div class="messages" ${Pr(this.containerRef)}>
                    ${t.length===0?de`<div class="empty-state">No log messages</div>`:t.map(e=>de`
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
        `}};Wr.styles=Bt`
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
    `;Jn([vt()],Wr.prototype,"messages",2);Jn([vt()],Wr.prototype,"autoScroll",2);Jn([vt()],Wr.prototype,"filter",2);Wr=Jn([gt("k-log-terminal")],Wr);var ac=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,Fi=(t,e,r,i)=>{for(var s=i>1?void 0:i?oc(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ac(e,r,s),s};let cn=class extends Si{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return de`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};cn.styles=Bt`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;Fi([Nt()],cn.prototype,"message",2);Fi([Nt()],cn.prototype,"icon",2);cn=Fi([gt("k-no-content")],cn);var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,yn=(t,e,r,i)=>{for(var s=i>1?void 0:i?cc(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&lc(e,r,s),s};let Kr=class extends Si{constructor(){super(...arguments),this.family="regular"}render(){return Xt(this.name,this.label,this.family,this.variant)}};yn([Nt()],Kr.prototype,"name",2);yn([Nt()],Kr.prototype,"family",2);yn([Nt()],Kr.prototype,"variant",2);yn([Nt()],Kr.prototype,"label",2);Kr=yn([gt("k-icon")],Kr);function Cn(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var si={exports:{}},ys;function uc(){return ys||(ys=1,function(t,e){(function(r){t.exports=r()})(function(){return function(){function r(i,s,u){function o(I,O){if(!s[I]){if(!i[I]){var C=typeof Cn=="function"&&Cn;if(!O&&C)return C(I,!0);if(f)return f(I,!0);var v=new Error("Cannot find module '"+I+"'");throw v.code="MODULE_NOT_FOUND",v}var T=s[I]={exports:{}};i[I][0].call(T.exports,function(q){var J=i[I][1][q];return o(J||q)},T,T.exports,r,i,s,u)}return s[I].exports}for(var f=typeof Cn=="function"&&Cn,x=0;x<u.length;x++)o(u[x]);return o}return r}()({1:[function(r,i,s){const u=r("./utils"),o=function(){const f=u.stringToArray,x=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],I=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],O=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],C=["Thousand","Million","Billion","Trillion"];function v(P,$){var R=function(X,H,z){var ee="";if(X<=19)ee=(H?" and ":"")+(z?I[X]:x[X]);else if(X<100){const Oe=Math.floor(X/10),Re=X%10;ee=(H?" and ":"")+O[Oe-2],Re>0?ee+="-"+R(Re,!1,z):z&&(ee=ee.substring(0,ee.length-1)+"ieth")}else if(X<1e3){const Oe=Math.floor(X/100),Re=X%100;ee=(H?", ":"")+x[Oe]+" Hundred",Re>0?ee+=R(Re,!0,z):z&&(ee+="th")}else{var he=Math.floor(Math.log10(X)/3);he>C.length&&(he=C.length);const Oe=Math.pow(10,he*3),Re=Math.floor(X/Oe),pe=X-Re*Oe;ee=(H?", ":"")+R(Re,!1,!1)+" "+C[he-1],pe>0?ee+=R(pe,!0,z):z&&(ee+="th")}return ee},K=R(P,!1,$);return K}const T={};x.forEach(function(P,$){T[P.toLowerCase()]=$}),I.forEach(function(P,$){T[P.toLowerCase()]=$}),O.forEach(function(P,$){const R=P.toLowerCase();T[R]=($+2)*10,T[R.substring(0,P.length-1)+"ieth"]=T[R]}),T.hundredth=100,C.forEach(function(P,$){const R=P.toLowerCase(),K=Math.pow(10,($+1)*3);T[R]=K,T[R+"th"]=K});function q(P){const R=P.split(/,\s|\sand\s|[\s\\-]/).map(H=>T[H]);let K=[0];return R.forEach(H=>{if(H<100){let z=K.pop();z>=1e3&&(K.push(z),z=0),K.push(z+H)}else K.push(K.pop()*H)}),K.reduce((H,z)=>H+z,0)}const J=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],ve={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function Ee(P){for(var $=0;$<J.length;$++){const R=J[$];if(P>=R[0])return R[1]+Ee(P-R[0])}return""}function U(P){for(var $=0,R=1,K=P.length-1;K>=0;K--){const X=P[K],H=ve[X];H<R?$-=H:(R=H,$+=H)}return $}function D(P,$){for(var R=[],K=$.charCodeAt(0);P>0;)R.unshift(String.fromCharCode((P-1)%26+K)),P=Math.floor((P-1)/26);return R.join("")}function B(P,$){for(var R=$.charCodeAt(0),K=0,X=0;X<P.length;X++)K+=(P.charCodeAt(P.length-X-1)-R+1)*Math.pow(26,X);return K}function L(P,$){if(typeof P>"u")return;P=Math.floor(P);const R=me($);return j(P,R)}const y={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},F={UPPER:"upper",LOWER:"lower",TITLE:"title"};function j(P,$){let R;const K=P<0;switch(P=Math.abs(P),$.primary){case y.LETTERS:R=D(P,$.case===F.UPPER?"A":"a");break;case y.ROMAN:R=Ee(P),$.case===F.UPPER&&(R=R.toUpperCase());break;case y.WORDS:R=v(P,$.ordinal),$.case===F.UPPER?R=R.toUpperCase():$.case===F.LOWER&&(R=R.toLowerCase());break;case y.DECIMAL:R=""+P;var X=$.mandatoryDigits-R.length;if(X>0){var H=new Array(X+1).join("0");R=H+R}if($.zeroCode!==48&&(R=f(R).map(Oe=>String.fromCodePoint(Oe.codePointAt(0)+$.zeroCode-48)).join("")),$.regular){const Oe=Math.floor((R.length-1)/$.groupingSeparators.position);for(let Re=Oe;Re>0;Re--){const pe=R.length-Re*$.groupingSeparators.position;R=R.substr(0,pe)+$.groupingSeparators.character+R.substr(pe)}}else $.groupingSeparators.reverse().forEach(Oe=>{const Re=R.length-Oe.position;R=R.substr(0,Re)+Oe.character+R.substr(Re)});if($.ordinal){var z={1:"st",2:"nd",3:"rd"},ee=R[R.length-1],he=z[ee];(!he||R.length>1&&R[R.length-2]==="1")&&(he="th"),R=R+he}break;case y.SEQUENCE:throw{code:"D3130",value:$.token}}return K&&(R="-"+R),R}const ie=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function me(P){const $={type:"integer",primary:y.DECIMAL,case:F.LOWER,ordinal:!1};let R,K;const X=P.lastIndexOf(";");switch(X===-1?R=P:(R=P.substring(0,X),K=P.substring(X+1),K[0]==="o"&&($.ordinal=!0)),R){case"A":$.case=F.UPPER;case"a":$.primary=y.LETTERS;break;case"I":$.case=F.UPPER;case"i":$.primary=y.ROMAN;break;case"W":$.case=F.UPPER,$.primary=y.WORDS;break;case"Ww":$.case=F.TITLE,$.primary=y.WORDS;break;case"w":$.primary=y.WORDS;break;default:{let H=null,z=0,ee=0,he=[],Oe=0;if(f(R).map(pe=>pe.codePointAt(0)).reverse().forEach(pe=>{let we=!1;for(let Ne=0;Ne<ie.length;Ne++){const ce=ie[Ne];if(pe>=ce&&pe<=ce+9){if(we=!0,z++,Oe++,H===null)H=ce;else if(ce!==H)throw{code:"D3131"};break}}we||(pe===35?(Oe++,ee++):he.push({position:Oe,character:String.fromCodePoint(pe)}))}),z>0){$.primary=y.DECIMAL,$.zeroCode=H,$.mandatoryDigits=z,$.optionalDigits=ee;const we=function(Ne){if(Ne.length===0)return 0;const ce=Ne[0].character;for(let ot=1;ot<Ne.length;ot++)if(Ne[ot].character!==ce)return 0;const at=Ne.map(ot=>ot.position),Pt=function(ot,mt){return mt===0?ot:Pt(mt,ot%mt)},ft=at.reduce(Pt);for(let ot=1;ot<=at.length;ot++)if(at.indexOf(ot*ft)===-1)return 0;return ft}(he);we>0?($.regular=!0,$.groupingSeparators={position:we,character:he[0].character}):($.regular=!1,$.groupingSeparators=he)}else $.primary=y.SEQUENCE,$.token=R}}return $}const Y={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function re(P){var $=[];const R={type:"datetime",parts:$},K=function(we,Ne){if(Ne>we){let ce=P.substring(we,Ne);ce=ce.split("]]").join("]"),$.push({type:"literal",value:ce})}};for(var X=0,H=0;H<P.length;){if(P.charAt(H)==="["){if(P.charAt(H+1)==="["){K(X,H),$.push({type:"literal",value:"["}),H+=2,X=H;continue}if(K(X,H),X=H,H=P.indexOf("]",X),H===-1)throw{code:"D3135"};let we=P.substring(X+1,H);we=we.split(/\s+/).join("");var z={type:"marker",component:we.charAt(0)},ee=we.lastIndexOf(","),he;if(ee!==-1){const Ne=we.substring(ee+1),ce=Ne.indexOf("-");let at,Pt;const ft=function(mt){if(!(typeof mt>"u"||mt==="*"))return parseInt(mt)};ce===-1?at=Ne:(at=Ne.substring(0,ce),Pt=Ne.substring(ce+1));const ot={min:ft(at),max:ft(Pt)};z.width=ot,he=we.substring(1,ee)}else he=we.substring(1);if(he.length===1)z.presentation1=he;else if(he.length>1){var Oe=he.charAt(he.length-1);"atco".indexOf(Oe)!==-1?(z.presentation2=Oe,Oe==="o"&&(z.ordinal=!0),z.presentation1=he.substring(0,he.length-1)):z.presentation1=he}else z.presentation1=Y[z.component];if(typeof z.presentation1>"u")throw{code:"D3132",value:z.component};if(z.presentation1[0]==="n")z.names=F.LOWER;else if(z.presentation1[0]==="N")z.presentation1[1]==="n"?z.names=F.TITLE:z.names=F.UPPER;else if("YMDdFWwXxHhmsf".indexOf(z.component)!==-1){var Re=z.presentation1;if(z.presentation2&&(Re+=";"+z.presentation2),z.integerFormat=me(Re),z.width&&z.width.min!==void 0&&z.integerFormat.mandatoryDigits<z.width.min&&(z.integerFormat.mandatoryDigits=z.width.min),"YMD".indexOf(z.component)!==-1)if(z.n=-1,z.width&&z.width.max!==void 0)z.n=z.width.max,z.integerFormat.mandatoryDigits=z.n;else{var pe=z.integerFormat.mandatoryDigits+z.integerFormat.optionalDigits;pe>=2&&(z.n=pe)}}(z.component==="Z"||z.component==="z")&&(z.integerFormat=me(z.presentation1)),$.push(z),X=H+1}H++}return K(X,H),R}const le=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ke=["January","February","March","April","May","June","July","August","September","October","November","December"],ze=1e3*60*60*24,ye=function(P){const $=Date.UTC(P.year,P.month);var R=new Date($).getUTCDay();return R===0&&(R=7),R>4?$+(8-R)*ze:$-(R-1)*ze},ge=function(P,$){return{year:P,month:$,nextMonth:function(){return $===11?ge(P+1,0):ge(P,$+1)},previousMonth:function(){return $===0?ge(P-1,11):ge(P,$-1)},nextYear:function(){return ge(P+1,$)},previousYear:function(){return ge(P-1,$)}}},Be=function(P,$){return($-P)/(ze*7)+1},te=(P,$)=>{let R;switch($){case"Y":R=P.getUTCFullYear();break;case"M":R=P.getUTCMonth()+1;break;case"D":R=P.getUTCDate();break;case"d":{const K=Date.UTC(P.getUTCFullYear(),P.getUTCMonth(),P.getUTCDate()),X=Date.UTC(P.getUTCFullYear(),0);R=(K-X)/ze+1;break}case"F":R=P.getUTCDay(),R===0&&(R=7);break;case"W":{const K=ge(P.getUTCFullYear(),0),X=ye(K),H=Date.UTC(K.year,P.getUTCMonth(),P.getUTCDate());let z=Be(X,H);if(z>52){const ee=ye(K.nextYear());H>=ee&&(z=1)}else if(z<1){const ee=ye(K.previousYear());z=Be(ee,H)}R=Math.floor(z);break}case"w":{const K=ge(P.getUTCFullYear(),P.getUTCMonth()),X=ye(K),H=Date.UTC(K.year,K.month,P.getUTCDate());let z=Be(X,H);if(z>4){const ee=ye(K.nextMonth());H>=ee&&(z=1)}else if(z<1){const ee=ye(K.previousMonth());z=Be(ee,H)}R=Math.floor(z);break}case"X":{const K=ge(P.getUTCFullYear(),0),X=ye(K),H=ye(K.nextYear()),z=P.getTime();z<X?R=K.year-1:z>=H?R=K.year+1:R=K.year;break}case"x":{const K=ge(P.getUTCFullYear(),P.getUTCMonth()),X=ye(K),H=K.nextMonth(),z=ye(H),ee=P.getTime();ee<X?R=K.previousMonth().month+1:ee>=z?R=H.month+1:R=K.month+1;break}case"H":R=P.getUTCHours();break;case"h":R=P.getUTCHours(),R=R%12,R===0&&(R=12);break;case"P":R=P.getUTCHours()>=12?"pm":"am";break;case"m":R=P.getUTCMinutes();break;case"s":R=P.getUTCSeconds();break;case"f":R=P.getUTCMilliseconds();break;case"Z":case"z":break;case"C":R="ISO";break;case"E":R="ISO";break}return R};let Ce=null;function Te(P,$,R){var K=0,X=0;if(typeof R<"u"){const Re=parseInt(R);K=Math.floor(Re/100),X=Re%100}var H=function(Re,pe){var we=te(Re,pe.component);if("YMDdFWwXxHhms".indexOf(pe.component)!==-1)if(pe.component==="Y"&&pe.n!==-1&&(we=we%Math.pow(10,pe.n)),pe.names){if(pe.component==="M"||pe.component==="x")we=ke[we-1];else if(pe.component==="F")we=le[we];else throw{code:"D3133",value:pe.component};pe.names===F.UPPER?we=we.toUpperCase():pe.names===F.LOWER&&(we=we.toLowerCase()),pe.width&&we.length>pe.width.max&&(we=we.substring(0,pe.width.max))}else we=j(we,pe.integerFormat);else if(pe.component==="f")we=j(we,pe.integerFormat);else if(pe.component==="Z"||pe.component==="z"){const Ne=K*100+X;if(pe.integerFormat.regular)we=j(Ne,pe.integerFormat);else{const ce=pe.integerFormat.mandatoryDigits;if(ce===1||ce===2)we=j(K,pe.integerFormat),X!==0&&(we+=":"+L(X,"00"));else if(ce===3||ce===4)we=j(Ne,pe.integerFormat);else throw{code:"D3134",value:ce}}Ne>=0&&(we="+"+we),pe.component==="z"&&(we="GMT"+we),Ne===0&&pe.presentation2==="t"&&(we="Z")}else pe.component==="P"&&pe.names===F.UPPER&&(we=we.toUpperCase());return we};let z;typeof $>"u"?(Ce===null&&(Ce=re("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),z=Ce):z=re($);const ee=(60*K+X)*60*1e3,he=new Date(P+ee);let Oe="";return z.parts.forEach(function(Re){Re.type==="literal"?Oe+=Re.value:Oe+=H(he,Re)}),Oe}function b(P){var $={};if(P.type==="datetime")$.type="datetime",$.parts=P.parts.map(function(R){var K={};if(R.type==="literal")K.regex=R.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(R.component==="Z"||R.component==="z"){let H;Array.isArray(R.integerFormat.groupingSeparators)||(H=R.integerFormat.groupingSeparators),K.regex="",R.component==="z"&&(K.regex="GMT"),K.regex+="[-+][0-9]+",H&&(K.regex+=H.character+"[0-9]+"),K.parse=function(z){R.component==="z"&&(z=z.substring(3));let ee=0,he=0;return H?(ee=Number.parseInt(z.substring(0,z.indexOf(H.character))),he=Number.parseInt(z.substring(z.indexOf(H.character)+1))):z.length-1<=2?ee=Number.parseInt(z):(ee=Number.parseInt(z.substring(0,3)),he=Number.parseInt(z.substring(3))),ee*60+he}}else if(R.integerFormat)R.integerFormat.n=R.n,K=b(R.integerFormat);else{K.regex="[a-zA-Z]+";var X={};if(R.component==="M"||R.component==="x")ke.forEach(function(H,z){R.width&&R.width.max?X[H.substring(0,R.width.max)]=z+1:X[H]=z+1});else if(R.component==="F")le.forEach(function(H,z){z>0&&(R.width&&R.width.max?X[H.substring(0,R.width.max)]=z:X[H]=z)});else if(R.component==="P")X={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:R.component};K.parse=function(H){return X[H]}}return K.component=R.component,K});else{$.type="integer";const R=P.case===F.UPPER;let K;switch(P.n&&P.n>0?P.optionalDigits===0?K=`{${P.n}}`:K=`{${P.n-P.optionalDigits},${P.n}}`:K="+",P.primary){case y.LETTERS:$.regex=R?"[A-Z]+":"[a-z]+",$.parse=function(X){return B(X,R?"A":"a")};break;case y.ROMAN:$.regex=R?"[MDCLXVI]+":"[mdclxvi]+",$.parse=function(X){return U(R?X:X.toUpperCase())};break;case y.WORDS:$.regex="(?:"+Object.keys(T).concat("and","[\\-, ]").join("|")+")+",$.parse=function(X){return q(X.toLowerCase())};break;case y.DECIMAL:$.regex=`[0-9]${K}`,P.ordinal&&($.regex+="(?:th|st|nd|rd)"),$.parse=function(X){let H=X;return P.ordinal&&(H=X.substring(0,X.length-2)),P.regular?H=H.split(",").join(""):P.groupingSeparators.forEach(z=>{H=H.split(z.character).join("")}),P.zeroCode!==48&&(H=H.split("").map(z=>String.fromCodePoint(z.codePointAt(0)-P.zeroCode+48)).join("")),parseInt(H)};break;case y.SEQUENCE:throw{code:"D3130",value:P.token}}}return $}function A(P,$){if(typeof P>"u")return;const R=me($);return b(R).parse(P)}function ae(P,$){const R=re($),K=b(R),X="^"+K.parts.map(he=>"("+he.regex+")").join("")+"$";var z=new RegExp(X,"i").exec(P);if(z!==null){const ce={};for(let De=1;De<z.length;De++){const h=K.parts[De-1];h.parse&&(ce[h.component]=h.parse(z[De]))}if(Object.getOwnPropertyNames(ce).length===0)return;let at=0;const Pt=De=>{at<<=1,at+=De?1:0},ft=De=>!(~De&at)&&!!(De&at);"YXMxWwdD".split("").forEach(De=>Pt(ce[De]));const mt=!ft(161)&&ft(130),Mt=ft(84),Yt=!Mt&&ft(72);at=0,"PHhmsf".split("").forEach(De=>Pt(ce[De]));const Gt=!ft(23)&&ft(47),ir=(mt?"YD":Mt?"XxwF":Yt?"XWF":"YMD")+(Gt?"Phmsf":"Hmsf"),Rt=this.environment.timestamp;let Xe=!1,$t=!1;if(ir.split("").forEach(De=>{if(typeof ce[De]>"u")Xe?(ce[De]="MDd".indexOf(De)!==-1?1:0,$t=!0):ce[De]=te(Rt,De);else if(Xe=!0,$t)throw{code:"D3136"}}),ce.M>0?ce.M-=1:ce.M=0,mt){const De=Date.UTC(ce.Y,0),h=(ce.d-1)*1e3*60*60*24,w=new Date(De+h);ce.M=w.getUTCMonth(),ce.D=w.getUTCDate()}if(Mt)throw{code:"D3136"};if(Yt)throw{code:"D3136"};Gt&&(ce.H=ce.h===12?0:ce.h,ce.P===1&&(ce.H+=12));var ee=Date.UTC(ce.Y,ce.M,ce.D,ce.H,ce.m,ce.s,ce.f);return(ce.Z||ce.z)&&(ee-=(ce.Z||ce.z)*60*1e3),ee}}var Se=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ge(P,$){if(!(typeof P>"u"))if(typeof $>"u"){if(!Se.test(P))throw{stack:new Error().stack,code:"D3110",value:P};return Date.parse(P)}else return ae.call(this,P,$)}function Pe(P,$,R){if(!(typeof P>"u"))return Te.call(this,P,$,R)}return{formatInteger:L,parseInteger:A,fromMillis:Pe,toMillis:Ge}}();i.exports=o},{"./utils":6}],2:[function(r,i,s){(function(u){(function(){var o=r("./utils");const f=(()=>{var x=o.isNumeric,I=o.isArrayOfStrings,O=o.isArrayOfNumbers,C=o.createSequence,v=o.isSequence,T=o.isFunction,q=o.isLambda,J=o.isPromise,ve=o.getFunctionArity,Ee=o.isDeepEqual,U=o.stringToArray;function D(l){if(!(typeof l>"u")){var d=0;return l.forEach(function(m){d+=m}),d}}function B(l){return typeof l>"u"?0:l.length}function L(l){if(!(typeof l>"u"||l.length===0))return Math.max.apply(Math,l)}function y(l){if(!(typeof l>"u"||l.length===0))return Math.min.apply(Math,l)}function F(l){if(!(typeof l>"u"||l.length===0)){var d=0;return l.forEach(function(m){d+=m}),d/l.length}}function j(l,d=!1){if(!(typeof l>"u")){var m;if(typeof l=="string")m=l;else if(T(l))m="";else{if(typeof l=="number"&&!isFinite(l))throw{code:"D3001",value:l,stack:new Error().stack};var _=d?2:0;Array.isArray(l)&&l.outerWrapper&&(l=l[0]),m=JSON.stringify(l,function(k,N){return typeof N<"u"&&N!==null&&N.toPrecision&&x(N)?Number(N.toPrecision(15)):N&&T(N)?"":N},_)}return m}}function ie(l,d,m){if(!(typeof l>"u")){var _=U(l),k=_.length;if(k+d<0&&(d=0),typeof m<"u"){if(m<=0)return"";var N=d>=0?d+m:k+d+m;return _.slice(d,N).join("")}return _.slice(d).join("")}}function me(l,d){if(!(typeof l>"u")){var m=l.indexOf(d);return m>-1?l.substr(0,m):l}}function Y(l,d){if(!(typeof l>"u")){var m=l.indexOf(d);return m>-1?l.substr(m+d.length):l}}function re(l){if(!(typeof l>"u"))return l.toLowerCase()}function le(l){if(!(typeof l>"u"))return l.toUpperCase()}function ke(l){if(!(typeof l>"u"))return U(l).length}function ze(l){if(!(typeof l>"u")){var d=l.replace(/[ \t\n\r]+/gm," ");return d.charAt(0)===" "&&(d=d.substring(1)),d.charAt(d.length-1)===" "&&(d=d.substring(0,d.length-1)),d}}function ye(l,d,m){if(!(typeof l>"u")){(typeof m>"u"||m.length===0)&&(m=" ");var _,k=Math.abs(d)-ke(l);if(k>0){var N=new Array(k+1).join(m);m.length>1&&(N=ie(N,0,k)),d>0?_=l+N:_=N+l}else _=l;return _}}async function ge(l,d){var m=l.apply(this,[d]);if(J(m)&&(m=await m),m&&!(typeof m.start=="number"||m.end==="number"||Array.isArray(m.groups)||T(m.next)))throw{code:"T1010",stack:new Error().stack};return m}async function Be(l,d){if(!(typeof l>"u")){var m;if(typeof d=="string")m=l.indexOf(d)!==-1;else{var _=await ge(d,l);m=typeof _<"u"}return m}}async function te(l,d,m){if(!(typeof l>"u")){if(m<0)throw{stack:new Error().stack,value:m,code:"D3040",index:3};var _=C();if(typeof m>"u"||m>0){var k=0,N=await ge(d,l);if(typeof N<"u")for(;typeof N<"u"&&(typeof m>"u"||k<m);)_.push({match:N.match,index:N.start,groups:N.groups}),N=await ge(N.next),k++}return _}}async function Ce(l,d,m,_){if(!(typeof l>"u")){var k=this;if(d==="")throw{code:"D3010",stack:new Error().stack,value:d,index:2};if(_<0)throw{code:"D3011",stack:new Error().stack,value:_,index:4};var N;typeof m=="string"?N=function(Le){for(var tt="",_e=0,Ze=m.indexOf("$",_e);Ze!==-1&&_e<m.length;){tt+=m.substring(_e,Ze),_e=Ze+1;var Ot=m.charAt(_e);if(Ot==="$")tt+="$",_e++;else if(Ot==="0")tt+=Le.match,_e++;else{var Ve;if(Le.groups.length===0?Ve=1:Ve=Math.floor(Math.log(Le.groups.length)*Math.LOG10E)+1,Ze=parseInt(m.substring(_e,_e+Ve),10),Ve>1&&Ze>Le.groups.length&&(Ze=parseInt(m.substring(_e,_e+Ve-1),10)),isNaN(Ze))tt+="$";else{if(Le.groups.length>0){var sr=Le.groups[Ze-1];typeof sr<"u"&&(tt+=sr)}_e+=Ze.toString().length}}Ze=m.indexOf("$",_e)}return tt+=m.substring(_e),tt}:N=m;var W="",oe=0;if(typeof _>"u"||_>0){var fe=0;if(typeof d=="string"){for(var $e=l.indexOf(d,oe);$e!==-1&&(typeof _>"u"||fe<_);)W+=l.substring(oe,$e),W+=m,oe=$e+d.length,fe++,$e=l.indexOf(d,oe);W+=l.substring(oe)}else{var xe=await ge(d,l);if(typeof xe<"u"){for(;typeof xe<"u"&&(typeof _>"u"||fe<_);){W+=l.substring(oe,xe.start);var Fe=N.apply(k,[xe]);if(J(Fe)&&(Fe=await Fe),typeof Fe=="string")W+=Fe;else throw{code:"D3012",stack:new Error().stack,value:Fe};oe=xe.start+xe.match.length,fe++,xe=await ge(xe.next)}W+=l.substring(oe)}else W=l}}else W=l;return W}}function Te(l){if(!(typeof l>"u")){var d=typeof window<"u"?window.btoa:function(m){return new u.Buffer.from(m,"binary").toString("base64")};return d(l)}}function b(l){if(!(typeof l>"u")){var d=typeof window<"u"?window.atob:function(m){return new u.Buffer.from(m,"base64").toString("binary")};return d(l)}}function A(l){if(!(typeof l>"u")){var d;try{d=encodeURIComponent(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"encodeUrlComponent"}}return d}}function ae(l){if(!(typeof l>"u")){var d;try{d=encodeURI(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"encodeUrl"}}return d}}function Se(l){if(!(typeof l>"u")){var d;try{d=decodeURIComponent(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"decodeUrlComponent"}}return d}}function Ge(l){if(!(typeof l>"u")){var d;try{d=decodeURI(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"decodeUrl"}}return d}}async function Pe(l,d,m){if(!(typeof l>"u")){if(m<0)throw{code:"D3020",stack:new Error().stack,value:m,index:3};var _=[];if(typeof m>"u"||m>0)if(typeof d=="string")_=l.split(d,m);else{var k=0,N=await ge(d,l);if(typeof N<"u"){for(var W=0;typeof N<"u"&&(typeof m>"u"||k<m);)_.push(l.substring(W,N.start)),W=N.end,N=await ge(N.next),k++;(typeof m>"u"||k<m)&&_.push(l.substring(W))}else _.push(l)}return _}}function P(l,d){if(!(typeof l>"u"))return typeof d>"u"&&(d=""),l.join(d)}function $(l,d,m){if(!(typeof l>"u")){var _={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},k=_;typeof m<"u"&&Object.keys(m).forEach(function(be){k[be]=m[be]});for(var N=[],W=k["zero-digit"].charCodeAt(0),oe=W;oe<W+10;oe++)N.push(String.fromCharCode(oe));var fe=N.concat([k["decimal-separator"],k["exponent-separator"],k["grouping-separator"],k.digit,k["pattern-separator"]]),$e=d.split(k["pattern-separator"]);if($e.length>2)throw{code:"D3080",stack:new Error().stack};var xe=function(be){var Ke=function(){for(var Qe,bt=0;bt<be.length;bt++)if(Qe=be.charAt(bt),fe.indexOf(Qe)!==-1&&Qe!==k["exponent-separator"])return be.substring(0,bt)}(),dt=function(){for(var Qe,bt=be.length-1;bt>=0;bt--)if(Qe=be.charAt(bt),fe.indexOf(Qe)!==-1&&Qe!==k["exponent-separator"])return be.substring(bt+1)}(),He=be.substring(Ke.length,be.length-dt.length),At,Wt,yt,et,St=be.indexOf(k["exponent-separator"],Ke.length);St===-1||St>be.length-dt.length?(At=He,Wt=void 0):(At=He.substring(0,St),Wt=He.substring(St+1));var _t=At.indexOf(k["decimal-separator"]);return _t===-1?(yt=At,et=dt):(yt=At.substring(0,_t),et=At.substring(_t+1)),{prefix:Ke,suffix:dt,activePart:He,mantissaPart:At,exponentPart:Wt,integerPart:yt,fractionalPart:et,subpicture:be}},Fe=function(be){var Ke,dt,He=be.subpicture,At=He.indexOf(k["decimal-separator"]);At!==He.lastIndexOf(k["decimal-separator"])&&(Ke="D3081"),He.indexOf(k.percent)!==He.lastIndexOf(k.percent)&&(Ke="D3082"),He.indexOf(k["per-mille"])!==He.lastIndexOf(k["per-mille"])&&(Ke="D3083"),He.indexOf(k.percent)!==-1&&He.indexOf(k["per-mille"])!==-1&&(Ke="D3084");var Wt=!1;for(dt=0;dt<be.mantissaPart.length;dt++){var yt=be.mantissaPart.charAt(dt);if(N.indexOf(yt)!==-1||yt===k.digit){Wt=!0;break}}Wt||(Ke="D3085");var et=be.activePart.split("").map(function(Qe){return fe.indexOf(Qe)===-1?"p":"a"}).join("");et.indexOf("p")!==-1&&(Ke="D3086"),At!==-1?(He.charAt(At-1)===k["grouping-separator"]||He.charAt(At+1)===k["grouping-separator"])&&(Ke="D3087"):be.integerPart.charAt(be.integerPart.length-1)===k["grouping-separator"]&&(Ke="D3088"),He.indexOf(k["grouping-separator"]+k["grouping-separator"])!==-1&&(Ke="D3089");var St=be.integerPart.indexOf(k.digit);St!==-1&&be.integerPart.substring(0,St).split("").filter(function(Qe){return N.indexOf(Qe)>-1}).length>0&&(Ke="D3090"),St=be.fractionalPart.lastIndexOf(k.digit),St!==-1&&be.fractionalPart.substring(St).split("").filter(function(Qe){return N.indexOf(Qe)>-1}).length>0&&(Ke="D3091");var _t=typeof be.exponentPart=="string";if(_t&&be.exponentPart.length>0&&(He.indexOf(k.percent)!==-1||He.indexOf(k["per-mille"])!==-1)&&(Ke="D3092"),_t&&(be.exponentPart.length===0||be.exponentPart.split("").filter(function(Qe){return N.indexOf(Qe)===-1}).length>0)&&(Ke="D3093"),Ke)throw{code:Ke,stack:new Error().stack}},Le=function(be){var Ke=function(lt,Ar){for(var or=[],Kt=lt.indexOf(k["grouping-separator"]);Kt!==-1;){var qr=(Ar?lt.substring(0,Kt):lt.substring(Kt)).split("").filter(function(mr){return N.indexOf(mr)!==-1||mr===k.digit}).length;or.push(qr),Kt=be.integerPart.indexOf(k["grouping-separator"],Kt+1)}return or},dt=Ke(be.integerPart),He=function(lt){if(lt.length===0)return 0;for(var Ar=function(qr,mr){return mr===0?qr:Ar(mr,qr%mr)},or=lt.reduce(Ar),Kt=1;Kt<=lt.length;Kt++)if(lt.indexOf(Kt*or)===-1)return 0;return or},At=He(dt),Wt=Ke(be.fractionalPart,!0),yt=be.integerPart.split("").filter(function(lt){return N.indexOf(lt)!==-1}).length,et=yt,St=be.fractionalPart.split(""),_t=St.filter(function(lt){return N.indexOf(lt)!==-1}).length,Qe=St.filter(function(lt){return N.indexOf(lt)!==-1||lt===k.digit}).length,bt=typeof be.exponentPart=="string";yt===0&&Qe===0&&(bt?(_t=1,Qe=1):yt=1),bt&&yt===0&&be.integerPart.indexOf(k.digit)!==-1&&(yt=1),yt===0&&_t===0&&(_t=1);var kr=0;return bt&&(kr=be.exponentPart.split("").filter(function(lt){return N.indexOf(lt)!==-1}).length),{integerPartGroupingPositions:dt,regularGrouping:At,minimumIntegerPartSize:yt,scalingFactor:et,prefix:be.prefix,fractionalPartGroupingPositions:Wt,minimumFactionalPartSize:_t,maximumFactionalPartSize:Qe,minimumExponentSize:kr,suffix:be.suffix,picture:be.subpicture}},tt=$e.map(xe);tt.forEach(Fe);var _e=tt.map(Le),Ze=k["minus-sign"],Ot=k["zero-digit"],Ve=k["decimal-separator"],sr=k["grouping-separator"];_e.length===1&&(_e.push(JSON.parse(JSON.stringify(_e[0]))),_e[1].prefix=Ze+_e[1].prefix);var Ye;l>=0?Ye=_e[0]:Ye=_e[1];var Ir;Ye.picture.indexOf(k.percent)!==-1?Ir=l*100:Ye.picture.indexOf(k["per-mille"])!==-1?Ir=l*1e3:Ir=l;var rt,Vt;if(Ye.minimumExponentSize===0)rt=Ir;else{var Qn=Math.pow(10,Ye.scalingFactor),bn=Math.pow(10,Ye.scalingFactor-1);for(rt=Ir,Vt=0;rt<bn;)rt*=10,Vt-=1;for(;rt>Qn;)rt/=10,Vt+=1}var Jr=ee(rt,Ye.maximumFactionalPartSize),wn=function(be,Ke){var dt=Math.abs(be).toFixed(Ke);return Ot!=="0"&&(dt=dt.split("").map(function(He){return He>="0"&&He<="9"?N[He.charCodeAt(0)-48]:He}).join("")),dt},Ae=wn(Jr,Ye.maximumFactionalPartSize),nt=Ae.indexOf(".");for(nt===-1?Ae=Ae+Ve:Ae=Ae.replace(".",Ve);Ae.charAt(0)===Ot;)Ae=Ae.substring(1);for(;Ae.charAt(Ae.length-1)===Ot;)Ae=Ae.substring(0,Ae.length-1);nt=Ae.indexOf(Ve);var ar=Ye.minimumIntegerPartSize-nt,Yr=Ye.minimumFactionalPartSize-(Ae.length-nt-1);if(Ae=(ar>0?new Array(ar+1).join(Ot):"")+Ae,Ae=Ae+(Yr>0?new Array(Yr+1).join(Ot):""),nt=Ae.indexOf(Ve),Ye.regularGrouping>0)for(var kt=Math.floor((nt-1)/Ye.regularGrouping),xr=1;xr<=kt;xr++)Ae=[Ae.slice(0,nt-xr*Ye.regularGrouping),sr,Ae.slice(nt-xr*Ye.regularGrouping)].join("");else Ye.integerPartGroupingPositions.forEach(function(be){Ae=[Ae.slice(0,nt-be),sr,Ae.slice(nt-be)].join(""),nt++});if(nt=Ae.indexOf(Ve),Ye.fractionalPartGroupingPositions.forEach(function(be){Ae=[Ae.slice(0,be+nt+1),sr,Ae.slice(be+nt+1)].join("")}),nt=Ae.indexOf(Ve),(Ye.picture.indexOf(Ve)===-1||nt===Ae.length-1)&&(Ae=Ae.substring(0,Ae.length-1)),typeof Vt<"u"){var Fr=wn(Vt,0);ar=Ye.minimumExponentSize-Fr.length,ar>0&&(Fr=new Array(ar+1).join(Ot)+Fr),Ae=Ae+k["exponent-separator"]+(Vt<0?Ze:"")+Fr}return Ae=Ye.prefix+Ae+Ye.suffix,Ae}}function R(l,d){if(!(typeof l>"u")){if(l=ee(l),typeof d>"u"?d=10:d=ee(d),d<2||d>36)throw{code:"D3100",stack:new Error().stack,value:d};var m=l.toString(d);return m}}function K(l){var d;if(!(typeof l>"u")){if(typeof l=="number")d=l;else if(typeof l=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(l)&&!isNaN(parseFloat(l))&&isFinite(l))d=parseFloat(l);else if(typeof l=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(l))d=Number(l);else if(l===!0)d=1;else if(l===!1)d=0;else throw{code:"D3030",value:l,stack:new Error().stack,index:1};return d}}function X(l){var d;if(!(typeof l>"u"))return d=Math.abs(l),d}function H(l){var d;if(!(typeof l>"u"))return d=Math.floor(l),d}function z(l){var d;if(!(typeof l>"u"))return d=Math.ceil(l),d}function ee(l,d){var m;if(!(typeof l>"u")){if(d){var _=l.toString().split("e");l=+(_[0]+"e"+(_[1]?+_[1]+d:d))}m=Math.round(l);var k=m-l;return Math.abs(k)===.5&&Math.abs(m%2)===1&&(m=m-1),d&&(_=m.toString().split("e"),m=+(_[0]+"e"+(_[1]?+_[1]-d:-d))),Object.is(m,-0)&&(m=0),m}}function he(l){var d;if(!(typeof l>"u")){if(l<0)throw{stack:new Error().stack,code:"D3060",index:1,value:l};return d=Math.sqrt(l),d}}function Oe(l,d){var m;if(!(typeof l>"u")){if(m=Math.pow(l,d),!isFinite(m))throw{stack:new Error().stack,code:"D3061",index:1,value:l,exp:d};return m}}function Re(){return Math.random()}function pe(l){if(!(typeof l>"u")){var d=!1;if(Array.isArray(l)){if(l.length===1)d=pe(l[0]);else if(l.length>1){var m=l.filter(function(_){return pe(_)});d=m.length>0}}else typeof l=="string"?l.length>0&&(d=!0):x(l)?l!==0&&(d=!0):l!==null&&typeof l=="object"?Object.keys(l).length>0&&(d=!0):typeof l=="boolean"&&l===!0&&(d=!0);return d}}function we(l){if(!(typeof l>"u"))return!pe(l)}function Ne(l,d,m,_){var k=[d],N=ve(l);return N>=2&&k.push(m),N>=3&&k.push(_),k}async function ce(l,d){if(!(typeof l>"u")){for(var m=C(),_=0;_<l.length;_++){var k=Ne(d,l[_],_,l),N=await d.apply(this,k);typeof N<"u"&&m.push(N)}return m}}async function at(l,d){if(!(typeof l>"u")){for(var m=C(),_=0;_<l.length;_++){var k=l[_],N=Ne(d,k,_,l),W=await d.apply(this,N);pe(W)&&m.push(k)}return m}}async function Pt(l,d){if(!(typeof l>"u")){for(var m=!1,_,k=0;k<l.length;k++){var N=l[k],W=!0;if(typeof d<"u"){var oe=Ne(d,N,k,l),fe=await d.apply(this,oe);W=pe(fe)}if(W)if(!m)_=N,m=!0;else throw{stack:new Error().stack,code:"D3138",index:k}}if(!m)throw{stack:new Error().stack,code:"D3139"};return _}}function ft(){for(var l=[],d=Array.prototype.slice.call(arguments),m=Math.min.apply(Math,d.map(function(N){return Array.isArray(N)?N.length:0})),_=0;_<m;_++){var k=d.map(N=>N[_]);l.push(k)}return l}async function ot(l,d,m){if(!(typeof l>"u")){var _,k=ve(d);if(k<2)throw{stack:new Error().stack,code:"D3050",index:1};var N;for(typeof m>"u"&&l.length>0?(_=l[0],N=1):(_=m,N=0);N<l.length;){var W=[_,l[N]];k>=3&&W.push(N),k>=4&&W.push(l),_=await d.apply(this,W),N++}return _}}function mt(l){var d=C();if(Array.isArray(l)){var m={};l.forEach(function(_){var k=mt(_);k.forEach(function(N){m[N]=!0})}),d=mt(m)}else l!==null&&typeof l=="object"&&!T(l)&&Object.keys(l).forEach(_=>d.push(_));return d}function Mt(l,d){var m;if(Array.isArray(l)){m=C();for(var _=0;_<l.length;_++){var k=Mt(l[_],d);typeof k<"u"&&(Array.isArray(k)?k.forEach(N=>m.push(N)):m.push(k))}}else l!==null&&typeof l=="object"&&!T(l)&&(m=l[d]);return m}function Yt(l,d){return typeof l>"u"?d:typeof d>"u"?l:(Array.isArray(l)||(l=C(l)),Array.isArray(d)||(d=[d]),l.concat(d))}function hr(l){return!(typeof l>"u")}function Gt(l){var d=C();if(Array.isArray(l))l.forEach(function(k){d=Yt(d,Gt(k))});else if(l!==null&&typeof l=="object"&&!q(l))for(var m in l){var _={};_[m]=l[m],d.push(_)}else d=l;return d}function ne(l){if(!(typeof l>"u")){var d={};return l.forEach(function(m){for(var _ in m)d[_]=m[_]}),d}}function fr(l){if(!(typeof l>"u")){if(l.length<=1)return l;for(var d=l.length,m=new Array(d),_=0;_<d;_++)m[d-_-1]=l[_];return m}}async function ir(l,d){var m=C();for(var _ in l){var k=Ne(d,l[_],_,l),N=await d.apply(this,k);typeof N<"u"&&m.push(N)}return m}function Rt(l){throw{code:"D3137",stack:new Error().stack,message:l||"$error() function evaluated"}}function Xe(l,d){if(!l)throw{code:"D3141",stack:new Error().stack,message:d||"$assert() statement failed"}}function $t(l){if(l!==void 0)return l===null?"null":x(l)?"number":typeof l=="string"?"string":typeof l=="boolean"?"boolean":Array.isArray(l)?"array":T(l)?"function":"object"}async function De(l,d){if(!(typeof l>"u")){if(l.length<=1)return l;var m;if(typeof d>"u"){if(!O(l)&&!I(l))throw{stack:new Error().stack,code:"D3070",index:1};m=async function(W,oe){return W>oe}}else m=d;var _=async function(W,oe){var fe=async function(xe,Fe,Le){Fe.length===0?Array.prototype.push.apply(xe,Le):Le.length===0?Array.prototype.push.apply(xe,Fe):await m(Fe[0],Le[0])?(xe.push(Le[0]),await fe(xe,Fe,Le.slice(1))):(xe.push(Fe[0]),await fe(xe,Fe.slice(1),Le))},$e=[];return await fe($e,W,oe),$e},k=async function(W){if(!Array.isArray(W)||W.length<=1)return W;var oe=Math.floor(W.length/2),fe=W.slice(0,oe),$e=W.slice(oe);return fe=await k(fe),$e=await k($e),await _(fe,$e)},N=await k(l);return N}}function h(l){if(!(typeof l>"u")){if(l.length<=1)return l;for(var d=new Array(l.length),m=0;m<l.length;m++){var _=Math.floor(Math.random()*(m+1));m!==_&&(d[m]=d[_]),d[_]=l[m]}return d}}function w(l){if(!(typeof l>"u")){if(!Array.isArray(l)||l.length<=1)return l;for(var d=v(l)?C():[],m=0;m<l.length;m++){for(var _=l[m],k=!1,N=0;N<d.length;N++)if(Ee(_,d[N])){k=!0;break}k||d.push(_)}return d}}async function S(l,d){var m={};for(var _ in l){var k=l[_],N=Ne(d,k,_,l),W=await d.apply(this,N);pe(W)&&(m[_]=k)}return Object.keys(m).length===0&&(m=void 0),m}return{sum:D,count:B,max:L,min:y,average:F,string:j,substring:ie,substringBefore:me,substringAfter:Y,lowercase:re,uppercase:le,length:ke,trim:ze,pad:ye,match:te,contains:Be,replace:Ce,split:Pe,join:P,formatNumber:$,formatBase:R,number:K,floor:H,ceil:z,round:ee,abs:X,sqrt:he,power:Oe,random:Re,boolean:pe,not:we,map:ce,zip:ft,filter:at,single:Pt,foldLeft:ot,sift:S,keys:mt,lookup:Mt,append:Yt,exists:hr,spread:Gt,merge:ne,reverse:fr,each:ir,error:Rt,assert:Xe,type:$t,sort:De,shuffle:h,distinct:w,base64encode:Te,base64decode:b,encodeUrlComponent:A,encodeUrl:ae,decodeUrlComponent:Se,decodeUrl:Ge}})();i.exports=f}).call(this)}).call(this,typeof Ji<"u"?Ji:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(r,i,s){var u=r("./datetime"),o=r("./functions"),f=r("./utils"),x=r("./parser"),I=r("./signature"),O=function(){var C=f.isNumeric,v=f.isArrayOfStrings,T=f.isArrayOfNumbers,q=f.createSequence,J=f.isSequence,ve=f.isFunction,Ee=f.isLambda,U=f.isIterable,D=f.isPromise,B=f.getFunctionArity,L=f.isDeepEqual,y=Rt(null);async function F(h,w,S){var l,d=S.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(d&&await d(h,w,S),h.type){case"path":l=await j(h,w,S);break;case"binary":l=await ke(h,w,S);break;case"unary":l=await ze(h,w,S);break;case"name":l=ye(h,w);break;case"string":case"number":case"value":l=ge(h);break;case"wildcard":l=Be(h,w);break;case"descendant":l=Ce(h,w);break;case"parent":l=S.lookup(h.slot.label);break;case"condition":l=await H(h,w,S);break;case"block":l=await z(h,w,S);break;case"bind":l=await X(h,w,S);break;case"regex":l=ee(h);break;case"function":l=await Ne(h,w,S);break;case"variable":l=he(h,w,S);break;case"lambda":l=Pt(h,w,S);break;case"partial":l=await ft(h,w,S);break;case"apply":l=await we(h,w,S);break;case"transform":l=Re(h,w,S);break}if(Object.prototype.hasOwnProperty.call(h,"predicate"))for(var m=0;m<h.predicate.length;m++)l=await le(h.predicate[m].expr,l,S);h.type!=="path"&&Object.prototype.hasOwnProperty.call(h,"group")&&(l=await $(h.group,l,S));var _=S.lookup(Symbol.for("jsonata.__evaluate_exit"));return _&&await _(h,w,S,l),l&&J(l)&&!l.tupleStream&&(h.keepArray&&(l.keepSingleton=!0),l.length===0?l=void 0:l.length===1&&(l=l.keepSingleton?l:l[0])),l}async function j(h,w,S){var l;Array.isArray(w)&&h.steps[0].type!=="variable"?l=w:l=q(w);for(var d,m=!1,_=void 0,k=0;k<h.steps.length;k++){var N=h.steps[k];if(N.tuple&&(m=!0),k===0&&N.consarray?d=await F(N,l,S):m?_=await re(N,l,_,S):d=await me(N,l,S,k===h.steps.length-1),!m&&(typeof d>"u"||d.length===0))break;typeof N.focus>"u"&&(l=d)}if(m)if(h.tuple)d=_;else for(d=q(),k=0;k<_.length;k++)d.push(_[k]["@"]);return h.keepSingletonArray&&(Array.isArray(d)&&d.cons&&!d.sequence&&(d=q(d)),d.keepSingleton=!0),h.hasOwnProperty("group")&&(d=await $(h.group,m?_:d,S)),d}function ie(h,w){var S=Rt(h);for(const l in w)S.bind(l,w[l]);return S}async function me(h,w,S,l){var d;if(h.type==="sort")return d=await Oe(h,w,S),h.stages&&(d=await Y(h.stages,d,S)),d;d=q();for(var m=0;m<w.length;m++){var _=await F(h,w[m],S);if(h.stages)for(var k=0;k<h.stages.length;k++)_=await le(h.stages[k].expr,_,S);typeof _<"u"&&d.push(_)}var N=q();return l&&d.length===1&&Array.isArray(d[0])&&!J(d[0])?N=d[0]:d.forEach(function(W){!Array.isArray(W)||W.cons?N.push(W):W.forEach(oe=>N.push(oe))}),N}async function Y(h,w,S){for(var l=w,d=0;d<h.length;d++){var m=h[d];switch(m.type){case"filter":l=await le(m.expr,l,S);break;case"index":for(var _=0;_<l.length;_++){var k=l[_];k[m.value]=_}break}}return l}async function re(h,w,S,l){var d;if(h.type==="sort"){if(S)d=await Oe(h,S,l);else{var m=await Oe(h,w,l);d=q(),d.tupleStream=!0;for(var _=0;_<m.length;_++){var k={"@":m[_]};k[h.index]=_,d.push(k)}}return h.stages&&(d=await Y(h.stages,d,l)),d}d=q(),d.tupleStream=!0;var N=l;S===void 0&&(S=w.map($e=>({"@":$e})));for(var W=0;W<S.length;W++){N=ie(l,S[W]);var oe=await F(h,S[W]["@"],N);if(typeof oe<"u"){Array.isArray(oe)||(oe=[oe]);for(var fe=0;fe<oe.length;fe++)k={},Object.assign(k,S[W]),oe.tupleStream?Object.assign(k,oe[fe]):(h.focus?(k[h.focus]=oe[fe],k["@"]=S[W]["@"]):k["@"]=oe[fe],h.index&&(k[h.index]=fe),h.ancestor&&(k[h.ancestor.label]=S[W]["@"])),d.push(k)}}return h.stages&&(d=await Y(h.stages,d,l)),d}async function le(h,w,S){var l=q();if(w&&w.tupleStream&&(l.tupleStream=!0),Array.isArray(w)||(w=q(w)),h.type==="number"){var d=Math.floor(h.value);d<0&&(d=w.length+d);var m=w[d];typeof m<"u"&&(Array.isArray(m)?l=m:l.push(m))}else for(d=0;d<w.length;d++){var m=w[d],_=m,k=S;w.tupleStream&&(_=m["@"],k=ie(S,m));var N=await F(h,_,k);C(N)&&(N=[N]),T(N)?N.forEach(function(oe){var fe=Math.floor(oe);fe<0&&(fe=w.length+fe),fe===d&&l.push(m)}):o.boolean(N)&&l.push(m)}return l}async function ke(h,w,S){var l,d=await F(h.lhs,w,S),m=h.value,_=async()=>await F(h.rhs,w,S);if(m==="and"||m==="or")try{return await Ge(d,_,m)}catch(N){throw N.position=h.position,N.token=m,N}var k=await _();try{switch(m){case"+":case"-":case"*":case"/":case"%":l=b(d,k,m);break;case"=":case"!=":l=A(d,k,m);break;case"<":case"<=":case">":case">=":l=ae(d,k,m);break;case"&":l=P(d,k);break;case"..":l=K(d,k);break;case"in":l=Se(d,k);break}}catch(N){throw N.position=h.position,N.token=m,N}return l}async function ze(h,w,S){var l;switch(h.value){case"-":if(l=await F(h.expression,w,S),typeof l>"u")l=void 0;else if(C(l))l=-l;else throw{code:"D1002",stack:new Error().stack,position:h.position,token:h.value,value:l};break;case"[":l=[];let _=await Promise.all(h.expressions.map(async(k,N)=>(S.isParallelCall=N>0,[k,await F(k,w,S)])));for(let k of _){var[d,m]=k;typeof m<"u"&&(d.value==="["?l.push(m):l=o.append(l,m))}h.consarray&&Object.defineProperty(l,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":l=await $(h,w,S);break}return l}function ye(h,w,S){return o.lookup(w,h.value)}function ge(h){return h.value}function Be(h,w){var S=q();return Array.isArray(w)&&w.outerWrapper&&w.length>0&&(w=w[0]),w!==null&&typeof w=="object"&&Object.keys(w).forEach(function(l){var d=w[l];Array.isArray(d)?(d=te(d),S=o.append(S,d)):S.push(d)}),S}function te(h,w){return typeof w>"u"&&(w=[]),Array.isArray(h)?h.forEach(function(S){te(S,w)}):w.push(h),w}function Ce(h,w){var S,l=q();return typeof w<"u"&&(Te(w,l),l.length===1?S=l[0]:S=l),S}function Te(h,w){Array.isArray(h)||w.push(h),Array.isArray(h)?h.forEach(function(S){Te(S,w)}):h!==null&&typeof h=="object"&&Object.keys(h).forEach(function(S){Te(h[S],w)})}function b(h,w,S){var l;if(typeof h<"u"&&!C(h))throw{code:"T2001",stack:new Error().stack,value:h};if(typeof w<"u"&&!C(w))throw{code:"T2002",stack:new Error().stack,value:w};if(typeof h>"u"||typeof w>"u")return l;switch(S){case"+":l=h+w;break;case"-":l=h-w;break;case"*":l=h*w;break;case"/":l=h/w;break;case"%":l=h%w;break}return l}function A(h,w,S){var l,d=typeof h,m=typeof w;if(d==="undefined"||m==="undefined")return!1;switch(S){case"=":l=L(h,w);break;case"!=":l=!L(h,w);break}return l}function ae(h,w,S){var l,d=typeof h,m=typeof w,_=d==="undefined"||d==="string"||d==="number",k=m==="undefined"||m==="string"||m==="number";if(!_||!k)throw{code:"T2010",stack:new Error().stack,value:d==="string"||d==="number"?w:h};if(!(d==="undefined"||m==="undefined")){if(d!==m)throw{code:"T2009",stack:new Error().stack,value:h,value2:w};switch(S){case"<":l=h<w;break;case"<=":l=h<=w;break;case">":l=h>w;break;case">=":l=h>=w;break}return l}}function Se(h,w){var S=!1;if(typeof h>"u"||typeof w>"u")return!1;Array.isArray(w)||(w=[w]);for(var l=0;l<w.length;l++)if(w[l]===h){S=!0;break}return S}async function Ge(h,w,S){var l,d=Pe(h);switch(S){case"and":l=d&&Pe(await w());break;case"or":l=d||Pe(await w());break}return l}function Pe(h){var w=o.boolean(h);return typeof w>"u"?!1:w}function P(h,w){var S,l="",d="";return typeof h<"u"&&(l=o.string(h)),typeof w<"u"&&(d=o.string(w)),S=l.concat(d),S}async function $(h,w,S){var l={},d={},m=!!(w&&w.tupleStream);Array.isArray(w)||(w=q(w)),w.length===0&&w.push(void 0);for(var _=0;_<w.length;_++)for(var k=w[_],N=m?ie(S,k):S,W=0;W<h.lhs.length;W++){var oe=h.lhs[W],fe=await F(oe[0],m?k["@"]:k,N);if(typeof fe!="string"&&fe!==void 0)throw{code:"T1003",stack:new Error().stack,position:h.position,value:fe};if(fe!==void 0){var $e={data:k,exprIndex:W};if(d.hasOwnProperty(fe)){if(d[fe].exprIndex!==W)throw{code:"D1009",stack:new Error().stack,position:h.position,value:fe};d[fe].data=o.append(d[fe].data,k)}else d[fe]=$e}}let xe=await Promise.all(Object.keys(d).map(async(Le,tt)=>{let _e=d[Le];var Ze=_e.data,Ot=S;if(m){var Ve=R(_e.data);Ze=Ve["@"],delete Ve["@"],Ot=ie(S,Ve)}return S.isParallelCall=tt>0,[Le,await F(h.lhs[_e.exprIndex][1],Ze,Ot)]}));for(let Le of xe){var[fe,Fe]=await Le;typeof Fe<"u"&&(l[fe]=Fe)}return l}function R(h){if(!Array.isArray(h))return h;var w={};Object.assign(w,h[0]);for(var S=1;S<h.length;S++)for(const l in h[S])w[l]=o.append(w[l],h[S][l]);return w}function K(h,w){var S;if(typeof h<"u"&&!Number.isInteger(h))throw{code:"T2003",stack:new Error().stack,value:h};if(typeof w<"u"&&!Number.isInteger(w))throw{code:"T2004",stack:new Error().stack,value:w};if(typeof h>"u"||typeof w>"u"||h>w)return S;var l=w-h+1;if(l>1e7)throw{code:"D2014",stack:new Error().stack,value:l};S=new Array(l);for(var d=h,m=0;d<=w;d++,m++)S[m]=d;return S.sequence=!0,S}async function X(h,w,S){var l=await F(h.rhs,w,S);return S.bind(h.lhs.value,l),l}async function H(h,w,S){var l,d=await F(h.condition,w,S);return o.boolean(d)?l=await F(h.then,w,S):typeof h.else<"u"&&(l=await F(h.else,w,S)),l}async function z(h,w,S){for(var l,d=Rt(S),m=0;m<h.expressions.length;m++)l=await F(h.expressions[m],w,d);return l}function ee(h){var w=new De.RegexEngine(h.value),S=function(l,d){var m;w.lastIndex=d||0;var _=w.exec(l);if(_!==null){if(m={match:_[0],start:_.index,end:_.index+_[0].length,groups:[]},_.length>1)for(var k=1;k<_.length;k++)m.groups.push(_[k]);m.next=function(){if(!(w.lastIndex>=l.length)){var N=S(l,w.lastIndex);if(N&&N.match==="")throw{code:"D1004",stack:new Error().stack,position:h.position,value:h.value.source};return N}}}return m};return S}function he(h,w,S){var l;return h.value===""?l=w&&w.outerWrapper?w[0]:w:l=S.lookup(h.value),l}async function Oe(h,w,S){var l,d=w,m=!!w.tupleStream,_=async function(N,W){for(var oe=0,fe=0;oe===0&&fe<h.terms.length;fe++){var $e=h.terms[fe],xe=N,Fe=S;m&&(xe=N["@"],Fe=ie(S,N));var Le=await F($e.expression,xe,Fe);xe=W,Fe=S,m&&(xe=W["@"],Fe=ie(S,W));var tt=await F($e.expression,xe,Fe),_e=typeof Le,Ze=typeof tt;if(_e==="undefined"){oe=Ze==="undefined"?0:1;continue}if(Ze==="undefined"){oe=-1;continue}if(!(_e==="string"||_e==="number")||!(Ze==="string"||Ze==="number"))throw{code:"T2008",stack:new Error().stack,position:h.position,value:_e==="string"||_e==="number"?tt:Le};if(_e!==Ze)throw{code:"T2007",stack:new Error().stack,position:h.position,value:Le,value2:tt};Le!==tt&&(Le<tt?oe=-1:oe=1,$e.descending===!0&&(oe=-oe))}return oe===1},k={environment:S,input:w};return l=await o.sort.apply(k,[d,_]),l}function Re(h,w,S){var l=async function(d){if(!(typeof d>"u")){var m=S.lookup("clone");if(!ve(m))throw{code:"T2013",stack:new Error().stack,position:h.position};var _=await ce(m,[d],null,S),k=await F(h.pattern,_,S);if(typeof k<"u"){Array.isArray(k)||(k=[k]);for(var N=0;N<k.length;N++){var W=k[N];if(W&&(W.isPrototypeOf(_)||W instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:h.position};var oe=await F(h.update,W,S),fe=typeof oe;if(fe!=="undefined"){if(fe!=="object"||oe===null||Array.isArray(oe))throw{code:"T2011",stack:new Error().stack,position:h.update.position,value:oe};for(var $e in oe)W[$e]=oe[$e]}if(typeof h.delete<"u"){var xe=await F(h.delete,W,S);if(typeof xe<"u"){var Fe=xe;if(Array.isArray(xe)||(xe=[xe]),!v(xe))throw{code:"T2012",stack:new Error().stack,position:h.delete.position,value:Fe};for(var Le=0;Le<xe.length;Le++)typeof W=="object"&&W!==null&&delete W[xe[Le]]}}}}return _}};return ne(l,"<(oa):o>")}var pe=x("function($f, $g) { function($x){ $g($f($x)) } }");async function we(h,w,S){var l,d=await F(h.lhs,w,S);if(h.rhs.type==="function")l=await Ne(h.rhs,w,S,{context:d});else{var m=await F(h.rhs,w,S);if(!ve(m))throw{code:"T2006",stack:new Error().stack,position:h.position,value:m};if(ve(d)){var _=await F(pe,null,S);l=await ce(_,[d,m],null,S)}else l=await ce(m,[d],null,S)}return l}async function Ne(h,w,S,l){var d,m=await F(h.procedure,w,S);if(typeof m>"u"&&h.procedure.type==="path"&&S.lookup(h.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:h.position,token:h.procedure.steps[0].value};var _=[];typeof l<"u"&&_.push(l.context);for(var k=0;k<h.arguments.length;k++){const W=await F(h.arguments[k],w,S);if(ve(W)){const oe=async function(...fe){return await ce(W,fe,null,S)};oe.arity=B(W),_.push(oe)}else _.push(W)}var N=h.procedure.type==="path"?h.procedure.steps[0].value:h.procedure.value;try{typeof m=="object"&&(m.token=N,m.position=h.position),d=await ce(m,_,w,S)}catch(W){throw W.position||(W.position=h.position),W.token||(W.token=N),W}return d}async function ce(h,w,S,l){var d;for(d=await at(h,w,S,l);Ee(d)&&d.thunk===!0;){var m=await F(d.body.procedure,d.input,d.environment);d.body.procedure.type==="variable"&&(m.token=d.body.procedure.value),m.position=d.body.procedure.position;for(var _=[],k=0;k<d.body.arguments.length;k++)_.push(await F(d.body.arguments[k],d.input,d.environment));d=await at(m,_,S,l)}return d}async function at(h,w,S,l){var d;try{var m=w;if(h&&(m=ot(h.signature,w,S)),Ee(h))d=await mt(h,m);else if(h&&h._jsonata_function===!0){var _={environment:l,input:S};d=h.implementation.apply(_,m),U(d)&&(d=d.next().value),D(d)&&(d=await d)}else if(typeof h=="function")d=h.apply(S,m),D(d)&&(d=await d);else throw{code:"T1006",stack:new Error().stack}}catch(k){throw h&&(typeof k.token>"u"&&typeof h.token<"u"&&(k.token=h.token),k.position=h.position||k.position),k}return d}function Pt(h,w,S){var l={_jsonata_lambda:!0,input:w,environment:S,arguments:h.arguments,signature:h.signature,body:h.body};return h.thunk===!0&&(l.thunk=!0),l.apply=async function(d,m){return await ce(l,m,w,d?d.environment:S)},l}async function ft(h,w,S){for(var l,d=[],m=0;m<h.arguments.length;m++){var _=h.arguments[m];_.type==="operator"&&_.value==="?"?d.push(_):d.push(await F(_,w,S))}var k=await F(h.procedure,w,S);if(typeof k>"u"&&h.procedure.type==="path"&&S.lookup(h.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:h.position,token:h.procedure.steps[0].value};if(Ee(k))l=Mt(k,d);else if(k&&k._jsonata_function===!0)l=Yt(k.implementation,d);else if(typeof k=="function")l=Yt(k,d);else throw{code:"T1008",stack:new Error().stack,position:h.position,token:h.procedure.type==="path"?h.procedure.steps[0].value:h.procedure.value};return l}function ot(h,w,S){if(typeof h>"u")return w;var l=h.validate(w,S);return l}async function mt(h,w){var S,l=Rt(h.environment);return h.arguments.forEach(function(d,m){l.bind(d.value,w[m])}),typeof h.body=="function"?S=await hr(h.body,l):S=await F(h.body,h.input,l),S}function Mt(h,w){var S=Rt(h.environment),l=[];h.arguments.forEach(function(m,_){var k=w[_];k&&k.type==="operator"&&k.value==="?"?l.push(m):S.bind(m.value,k)});var d={_jsonata_lambda:!0,input:h.input,environment:S,arguments:l,body:h.body};return d}function Yt(h,w){var S=Gt(h);S=S.map(function(_){return"$"+_.trim()});var l="function("+S.join(", ")+"){ _ }",d=x(l);d.body=h;var m=Mt(d,w);return m}async function hr(h,w){var S=Gt(h),l=S.map(function(_){return w.lookup(_.trim())}),d={environment:w},m=h.apply(d,l);return D(m)&&(m=await m),m}function Gt(h){var w=h.toString(),S=/\(([^)]*)\)/.exec(w)[1],l=S.split(",");return l}function ne(h,w){var S={_jsonata_function:!0,implementation:h};return typeof w<"u"&&(S.signature=I(w)),S}async function fr(h,w){if(!(typeof h>"u")){var S=this.input;typeof w<"u"&&(S=w,Array.isArray(S)&&!J(S)&&(S=q(S),S.outerWrapper=!0));try{var l=x(h,!1)}catch(m){throw $t(m),{stack:new Error().stack,code:"D3120",value:m.message,error:m}}try{var d=await F(l,S,this.environment)}catch(m){throw $t(m),{stack:new Error().stack,code:"D3121",value:m.message,error:m}}return d}}function ir(h){if(!(typeof h>"u"))return JSON.parse(o.string(h))}function Rt(h){var w={};const S={bind:function(d,m){w[d]=m},lookup:function(d){var m;return w.hasOwnProperty(d)?m=w[d]:h&&(m=h.lookup(d)),m},timestamp:h?h.timestamp:null,async:h?h.async:!1,isParallelCall:h?h.isParallelCall:!1,global:h?h.global:{ancestry:[null]}};if(h){var l=h.lookup(Symbol.for("jsonata.__createFrame_push"));l&&l(h,S)}return S}y.bind("sum",ne(o.sum,"<a<n>:n>")),y.bind("count",ne(o.count,"<a:n>")),y.bind("max",ne(o.max,"<a<n>:n>")),y.bind("min",ne(o.min,"<a<n>:n>")),y.bind("average",ne(o.average,"<a<n>:n>")),y.bind("string",ne(o.string,"<x-b?:s>")),y.bind("substring",ne(o.substring,"<s-nn?:s>")),y.bind("substringBefore",ne(o.substringBefore,"<s-s:s>")),y.bind("substringAfter",ne(o.substringAfter,"<s-s:s>")),y.bind("lowercase",ne(o.lowercase,"<s-:s>")),y.bind("uppercase",ne(o.uppercase,"<s-:s>")),y.bind("length",ne(o.length,"<s-:n>")),y.bind("trim",ne(o.trim,"<s-:s>")),y.bind("pad",ne(o.pad,"<s-ns?:s>")),y.bind("match",ne(o.match,"<s-f<s:o>n?:a<o>>")),y.bind("contains",ne(o.contains,"<s-(sf):b>")),y.bind("replace",ne(o.replace,"<s-(sf)(sf)n?:s>")),y.bind("split",ne(o.split,"<s-(sf)n?:a<s>>")),y.bind("join",ne(o.join,"<a<s>s?:s>")),y.bind("formatNumber",ne(o.formatNumber,"<n-so?:s>")),y.bind("formatBase",ne(o.formatBase,"<n-n?:s>")),y.bind("formatInteger",ne(u.formatInteger,"<n-s:s>")),y.bind("parseInteger",ne(u.parseInteger,"<s-s:n>")),y.bind("number",ne(o.number,"<(nsb)-:n>")),y.bind("floor",ne(o.floor,"<n-:n>")),y.bind("ceil",ne(o.ceil,"<n-:n>")),y.bind("round",ne(o.round,"<n-n?:n>")),y.bind("abs",ne(o.abs,"<n-:n>")),y.bind("sqrt",ne(o.sqrt,"<n-:n>")),y.bind("power",ne(o.power,"<n-n:n>")),y.bind("random",ne(o.random,"<:n>")),y.bind("boolean",ne(o.boolean,"<x-:b>")),y.bind("not",ne(o.not,"<x-:b>")),y.bind("map",ne(o.map,"<af>")),y.bind("zip",ne(o.zip,"<a+>")),y.bind("filter",ne(o.filter,"<af>")),y.bind("single",ne(o.single,"<af?>")),y.bind("reduce",ne(o.foldLeft,"<afj?:j>")),y.bind("sift",ne(o.sift,"<o-f?:o>")),y.bind("keys",ne(o.keys,"<x-:a<s>>")),y.bind("lookup",ne(o.lookup,"<x-s:x>")),y.bind("append",ne(o.append,"<xx:a>")),y.bind("exists",ne(o.exists,"<x:b>")),y.bind("spread",ne(o.spread,"<x-:a<o>>")),y.bind("merge",ne(o.merge,"<a<o>:o>")),y.bind("reverse",ne(o.reverse,"<a:a>")),y.bind("each",ne(o.each,"<o-f:a>")),y.bind("error",ne(o.error,"<s?:x>")),y.bind("assert",ne(o.assert,"<bs?:x>")),y.bind("type",ne(o.type,"<x:s>")),y.bind("sort",ne(o.sort,"<af?:a>")),y.bind("shuffle",ne(o.shuffle,"<a:a>")),y.bind("distinct",ne(o.distinct,"<x:x>")),y.bind("base64encode",ne(o.base64encode,"<s-:s>")),y.bind("base64decode",ne(o.base64decode,"<s-:s>")),y.bind("encodeUrlComponent",ne(o.encodeUrlComponent,"<s-:s>")),y.bind("encodeUrl",ne(o.encodeUrl,"<s-:s>")),y.bind("decodeUrlComponent",ne(o.decodeUrlComponent,"<s-:s>")),y.bind("decodeUrl",ne(o.decodeUrl,"<s-:s>")),y.bind("eval",ne(fr,"<sx?:x>")),y.bind("toMillis",ne(u.toMillis,"<s-s?:n>")),y.bind("fromMillis",ne(u.fromMillis,"<n-s?s?:s>")),y.bind("clone",ne(ir,"<(oa)-:o>"));var Xe={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function $t(h){var w=Xe[h.code];if(typeof w<"u"){var S=w.replace(/\{\{\{([^}]+)}}}/g,function(){return h[arguments[1]]});S=S.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(h[arguments[1]])}),h.message=S}}function De(h,w){var S,l;try{S=x(h,w&&w.recover),l=S.errors,delete S.errors}catch(_){throw $t(_),_}var d=Rt(y),m=new Date;return d.bind("now",ne(function(_,k){return u.fromMillis(m.getTime(),_,k)},"<s?s?:s>")),d.bind("millis",ne(function(){return m.getTime()},"<:n>")),w&&w.RegexEngine?De.RegexEngine=w.RegexEngine:De.RegexEngine=RegExp,{evaluate:async function(_,k,N){if(typeof l<"u"){var W={code:"S0500",position:0};throw $t(W),W}if(typeof k<"u"){var oe;oe=Rt(d);for(var fe in k)oe.bind(fe,k[fe])}else oe=d;oe.bind("$",_),m=new Date,oe.timestamp=m,Array.isArray(_)&&!J(_)&&(_=q(_),_.outerWrapper=!0);var $e;try{return $e=await F(S,_,oe),typeof N=="function"&&N(null,$e),$e}catch(xe){throw $t(xe),xe}},assign:function(_,k){d.bind(_,k)},registerFunction:function(_,k,N){var W=ne(k,N);d.bind(_,W)},ast:function(){return S},errors:function(){return l}}}return De.parser=x,De}();i.exports=O},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(r,i,s){var u=r("./signature");const o=(()=>{var f={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},x={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},I=function(C){var v=0,T=C.length,q=function(Ee,U){var D={type:Ee,value:U,position:v};return D},J=function(){for(var Ee=v,U=0,D,B,L=function(F){if(C.charAt(F)==="/"&&U===0){for(var j=0;C.charAt(F-(j+1))==="\\";)j++;if(j%2===0)return!0}return!1};v<T;){var y=C.charAt(v);if(L(v)){if(D=C.substring(Ee,v),D==="")throw{code:"S0301",stack:new Error().stack,position:v};for(v++,y=C.charAt(v),Ee=v;y==="i"||y==="m";)v++,y=C.charAt(v);return B=C.substring(Ee,v)+"g",new RegExp(D,B)}(y==="("||y==="["||y==="{")&&C.charAt(v-1)!=="\\"&&U++,(y===")"||y==="]"||y==="}")&&C.charAt(v-1)!=="\\"&&U--,v++}throw{code:"S0302",stack:new Error().stack,position:v}},ve=function(Ee){if(v>=T)return null;for(var U=C.charAt(v);v<T&&` 	
\r\v`.indexOf(U)>-1;)v++,U=C.charAt(v);if(U==="/"&&C.charAt(v+1)==="*"){var D=v;for(v+=2,U=C.charAt(v);!(U==="*"&&C.charAt(v+1)==="/");)if(U=C.charAt(++v),v>=T)throw{code:"S0106",stack:new Error().stack,position:D};return v+=2,U=C.charAt(v),ve(Ee)}if(Ee!==!0&&U==="/")return v++,q("regex",J());if(U==="."&&C.charAt(v+1)===".")return v+=2,q("operator","..");if(U===":"&&C.charAt(v+1)==="=")return v+=2,q("operator",":=");if(U==="!"&&C.charAt(v+1)==="=")return v+=2,q("operator","!=");if(U===">"&&C.charAt(v+1)==="=")return v+=2,q("operator",">=");if(U==="<"&&C.charAt(v+1)==="=")return v+=2,q("operator","<=");if(U==="*"&&C.charAt(v+1)==="*")return v+=2,q("operator","**");if(U==="~"&&C.charAt(v+1)===">")return v+=2,q("operator","~>");if(Object.prototype.hasOwnProperty.call(f,U))return v++,q("operator",U);if(U==='"'||U==="'"){var B=U;v++;for(var L="";v<T;){if(U=C.charAt(v),U==="\\")if(v++,U=C.charAt(v),Object.prototype.hasOwnProperty.call(x,U))L+=x[U];else if(U==="u"){var y=C.substr(v+1,4);if(/^[0-9a-fA-F]+$/.test(y)){var F=parseInt(y,16);L+=String.fromCharCode(F),v+=4}else throw{code:"S0104",stack:new Error().stack,position:v}}else throw{code:"S0103",stack:new Error().stack,position:v,token:U};else{if(U===B)return v++,q("string",L);L+=U}v++}throw{code:"S0101",stack:new Error().stack,position:v}}var j=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,ie=j.exec(C.substring(v));if(ie!==null){var me=parseFloat(ie[0]);if(!isNaN(me)&&isFinite(me))return v+=ie[0].length,q("number",me);throw{code:"S0102",stack:new Error().stack,position:v,token:ie[0]}}var Y;if(U==="`"){v++;var re=C.indexOf("`",v);if(re!==-1)return Y=C.substring(v,re),v=re+1,q("name",Y);throw v=T,{code:"S0105",stack:new Error().stack,position:v}}for(var le=v,ke;;)if(ke=C.charAt(le),le===T||` 	
\r\v`.indexOf(ke)>-1||Object.prototype.hasOwnProperty.call(f,ke)){if(C.charAt(v)==="$")return Y=C.substring(v+1,le),v=le,q("variable",Y);switch(Y=C.substring(v,le),v=le,Y){case"or":case"in":case"and":return q("operator",Y);case"true":return q("value",!0);case"false":return q("value",!1);case"null":return q("value",null);default:return v===T&&Y===""?null:q("name",Y)}}else le++};return ve},O=function(C,v){var T,q,J={},ve=[],Ee=function(){var b=[];T.id!=="(end)"&&b.push({type:T.type,value:T.value,position:T.position});for(var A=q();A!==null;)b.push(A),A=q();return b},U={nud:function(){var b={code:"S0211",token:this.value,position:this.position};if(v)return b.remaining=Ee(),b.type="error",ve.push(b),b;throw b.stack=new Error().stack,b}},D=function(b,A){var ae=J[b];return A=A||0,ae?A>=ae.lbp&&(ae.lbp=A):(ae=Object.create(U),ae.id=ae.value=b,ae.lbp=A,J[b]=ae),ae},B=function(b){if(v){b.remaining=Ee(),ve.push(b);var A=J["(error)"];return T=Object.create(A),T.error=b,T.type="(error)",T}else throw b.stack=new Error().stack,b},L=function(b,A){if(b&&T.id!==b){var ae;T.id==="(end)"?ae="S0203":ae="S0202";var Se={code:ae,position:T.position,token:T.value,value:b};return B(Se)}var Ge=q(A);if(Ge===null)return T=J["(end)"],T.position=C.length,T;var Pe=Ge.value,P=Ge.type,$;switch(P){case"name":case"variable":$=J["(name)"];break;case"operator":if($=J[Pe],!$)return B({code:"S0204",stack:new Error().stack,position:Ge.position,token:Pe});break;case"string":case"number":case"value":$=J["(literal)"];break;case"regex":P="regex",$=J["(regex)"];break;default:return B({code:"S0205",stack:new Error().stack,position:Ge.position,token:Pe})}return T=Object.create($),T.value=Pe,T.type=P,T.position=Ge.position,T},y=function(b){var A,ae=T;for(L(null,!0),A=ae.nud();b<T.lbp;)ae=T,L(),A=ae.led(A);return A},F=function(b){var A=D(b,0);A.nud=function(){return this}},j=function(b,A,ae){var Se=A||f[b],Ge=D(b,Se);return Ge.led=ae||function(Pe){return this.lhs=Pe,this.rhs=y(Se),this.type="binary",this},Ge},ie=function(b,A,ae){var Se=D(b,A);return Se.led=ae,Se},me=function(b,A){var ae=D(b);return ae.nud=A||function(){return this.expression=y(70),this.type="unary",this},ae};F("(end)"),F("(name)"),F("(literal)"),F("(regex)"),D(":"),D(";"),D(","),D(")"),D("]"),D("}"),D(".."),j("."),j("+"),j("-"),j("*"),j("/"),j("%"),j("="),j("<"),j(">"),j("!="),j("<="),j(">="),j("&"),j("and"),j("or"),j("in"),F("and"),F("or"),F("in"),me("-"),j("~>"),ie("(error)",10,function(b){return this.lhs=b,this.error=T.error,this.remaining=Ee(),this.type="error",this}),me("*",function(){return this.type="wildcard",this}),me("**",function(){return this.type="descendant",this}),me("%",function(){return this.type="parent",this}),j("(",f["("],function(b){if(this.procedure=b,this.type="function",this.arguments=[],T.id!==")")for(;T.type==="operator"&&T.id==="?"?(this.type="partial",this.arguments.push(T),L("?")):this.arguments.push(y(0)),T.id===",";)L(",");if(L(")",!0),b.type==="name"&&(b.value==="function"||b.value==="λ")){if(this.arguments.forEach(function(Pe,P){if(Pe.type!=="variable")return B({code:"S0208",stack:new Error().stack,position:Pe.position,token:Pe.value,value:P+1})}),this.type="lambda",T.id==="<"){for(var A=T.position,ae=1,Se="<";ae>0&&T.id!=="{"&&T.id!=="(end)";){var Ge=L();Ge.id===">"?ae--:Ge.id==="<"&&ae++,Se+=Ge.value}L(">");try{this.signature=u(Se)}catch(Pe){return Pe.position=A+Pe.offset,B(Pe)}}L("{"),this.body=y(0),L("}")}return this}),me("(",function(){for(var b=[];T.id!==")"&&(b.push(y(0)),T.id===";");)L(";");return L(")",!0),this.type="block",this.expressions=b,this}),me("[",function(){var b=[];if(T.id!=="]")for(;;){var A=y(0);if(T.id===".."){var ae={type:"binary",value:"..",position:T.position,lhs:A};L(".."),ae.rhs=y(0),A=ae}if(b.push(A),T.id!==",")break;L(",")}return L("]",!0),this.expressions=b,this.type="unary",this}),j("[",f["["],function(b){if(T.id==="]"){for(var A=b;A&&A.type==="binary"&&A.value==="[";)A=A.lhs;return A.keepArray=!0,L("]"),b}else return this.lhs=b,this.rhs=y(f["]"]),this.type="binary",L("]",!0),this}),j("^",f["^"],function(b){L("(");for(var A=[];;){var ae={descending:!1};if(T.id==="<"?L("<"):T.id===">"&&(ae.descending=!0,L(">")),ae.expression=y(0),A.push(ae),T.id!==",")break;L(",")}return L(")"),this.lhs=b,this.rhs=A,this.type="binary",this});var Y=function(b){var A=[];if(T.id!=="}")for(;;){var ae=y(0);L(":");var Se=y(0);if(A.push([ae,Se]),T.id!==",")break;L(",")}return L("}",!0),typeof b>"u"?(this.lhs=A,this.type="unary"):(this.lhs=b,this.rhs=A,this.type="binary"),this};me("{",Y),j("{",f["{"],Y),ie(":=",f[":="],function(b){return b.type!=="variable"?B({code:"S0212",stack:new Error().stack,position:b.position,token:b.value}):(this.lhs=b,this.rhs=y(f[":="]-1),this.type="binary",this)}),j("@",f["@"],function(b){return this.lhs=b,this.rhs=y(f["@"]),this.rhs.type!=="variable"?B({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),j("#",f["#"],function(b){return this.lhs=b,this.rhs=y(f["#"]),this.rhs.type!=="variable"?B({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),j("?",f["?"],function(b){return this.type="condition",this.condition=b,this.then=y(0),T.id===":"&&(L(":"),this.else=y(0)),this}),me("|",function(){return this.type="transform",this.pattern=y(0),L("|"),this.update=y(0),T.id===","&&(L(","),this.delete=y(0)),L("|"),this});var re=function(b){var A;if(b.type==="function"&&!b.predicate){var ae={type:"lambda",thunk:!0,arguments:[],position:b.position};ae.body=b,A=ae}else if(b.type==="condition")b.then=re(b.then),typeof b.else<"u"&&(b.else=re(b.else)),A=b;else if(b.type==="block"){var Se=b.expressions.length;Se>0&&(b.expressions[Se-1]=re(b.expressions[Se-1])),A=b}else A=b;return A},le=0,ke=0,ze=[],ye=function(b,A){switch(b.type){case"name":case"wildcard":A.level--,A.level===0&&(typeof b.ancestor>"u"||(ze[A.index].slot.label=b.ancestor.label),b.ancestor=A,b.tuple=!0);break;case"parent":A.level++;break;case"block":b.expressions.length>0&&(b.tuple=!0,A=ye(b.expressions[b.expressions.length-1],A));break;case"path":b.tuple=!0;var ae=b.steps.length-1;for(A=ye(b.steps[ae--],A);A.level>0&&ae>=0;)A=ye(b.steps[ae--],A);break;default:throw{code:"S0217",token:b.type,position:b.position}}return A},ge=function(b,A){if(typeof A.seekingParent<"u"||A.type==="parent"){var ae=typeof A.seekingParent<"u"?A.seekingParent:[];A.type==="parent"&&ae.push(A.slot),typeof b.seekingParent>"u"?b.seekingParent=ae:Array.prototype.push.apply(b.seekingParent,ae)}},Be=function(b){var A=b.steps.length-1,ae=b.steps[A],Se=typeof ae.seekingParent<"u"?ae.seekingParent:[];ae.type==="parent"&&Se.push(ae.slot);for(var Ge=0;Ge<Se.length;Ge++){var Pe=Se[Ge];for(A=b.steps.length-2;Pe.level>0;){if(A<0){typeof b.seekingParent>"u"?b.seekingParent=[Pe]:b.seekingParent.push(Pe);break}for(var P=b.steps[A--];A>=0&&P.focus&&b.steps[A].focus;)P=b.steps[A--];Pe=ye(P,Pe)}}},te=function(b){var A;switch(b.type){case"binary":switch(b.value){case".":var ae=te(b.lhs);ae.type==="path"?A=ae:A={type:"path",steps:[ae]},ae.type==="parent"&&(A.seekingParent=[ae.slot]);var Se=te(b.rhs);Se.type==="function"&&Se.procedure.type==="path"&&Se.procedure.steps.length===1&&Se.procedure.steps[0].type==="name"&&A.steps[A.steps.length-1].type==="function"&&(A.steps[A.steps.length-1].nextFunction=Se.procedure.steps[0].value),Se.type==="path"?Array.prototype.push.apply(A.steps,Se.steps):(typeof Se.predicate<"u"&&(Se.stages=Se.predicate,delete Se.predicate),A.steps.push(Se)),A.steps.filter(function(ee){if(ee.type==="number"||ee.type==="value")throw{code:"S0213",stack:new Error().stack,position:ee.position,value:ee.value};return ee.type==="string"}).forEach(function(ee){ee.type="name"}),A.steps.filter(function(ee){return ee.keepArray===!0}).length>0&&(A.keepSingletonArray=!0);var Ge=A.steps[0];Ge.type==="unary"&&Ge.value==="["&&(Ge.consarray=!0);var Pe=A.steps[A.steps.length-1];Pe.type==="unary"&&Pe.value==="["&&(Pe.consarray=!0),Be(A);break;case"[":A=te(b.lhs);var P=A,$="predicate";if(A.type==="path"&&(P=A.steps[A.steps.length-1],$="stages"),typeof P.group<"u")throw{code:"S0209",stack:new Error().stack,position:b.position};typeof P[$]>"u"&&(P[$]=[]);var R=te(b.rhs);typeof R.seekingParent<"u"&&(R.seekingParent.forEach(ee=>{ee.level===1?ye(P,ee):ee.level--}),ge(P,R)),P[$].push({type:"filter",expr:R,position:b.position});break;case"{":if(A=te(b.lhs),typeof A.group<"u")throw{code:"S0210",stack:new Error().stack,position:b.position};A.group={lhs:b.rhs.map(function(ee){return[te(ee[0]),te(ee[1])]}),position:b.position};break;case"^":A=te(b.lhs),A.type!=="path"&&(A={type:"path",steps:[A]});var K={type:"sort",position:b.position};K.terms=b.rhs.map(function(ee){var he=te(ee.expression);return ge(K,he),{descending:ee.descending,expression:he}}),A.steps.push(K),Be(A);break;case":=":A={type:"bind",value:b.value,position:b.position},A.lhs=te(b.lhs),A.rhs=te(b.rhs),ge(A,A.rhs);break;case"@":if(A=te(b.lhs),P=A,A.type==="path"&&(P=A.steps[A.steps.length-1]),typeof P.stages<"u"||typeof P.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:b.position};if(P.type==="sort")throw{code:"S0216",stack:new Error().stack,position:b.position};b.keepArray&&(P.keepArray=!0),P.focus=b.rhs.value,P.tuple=!0;break;case"#":A=te(b.lhs),P=A,A.type==="path"?P=A.steps[A.steps.length-1]:(A={type:"path",steps:[A]},typeof P.predicate<"u"&&(P.stages=P.predicate,delete P.predicate)),typeof P.stages>"u"?P.index=b.rhs.value:P.stages.push({type:"index",value:b.rhs.value,position:b.position}),P.tuple=!0;break;case"~>":A={type:"apply",value:b.value,position:b.position},A.lhs=te(b.lhs),A.rhs=te(b.rhs),A.keepArray=A.lhs.keepArray||A.rhs.keepArray;break;default:A={type:b.type,value:b.value,position:b.position},A.lhs=te(b.lhs),A.rhs=te(b.rhs),ge(A,A.lhs),ge(A,A.rhs)}break;case"unary":A={type:b.type,value:b.value,position:b.position},b.value==="["?A.expressions=b.expressions.map(function(ee){var he=te(ee);return ge(A,he),he}):b.value==="{"?A.lhs=b.lhs.map(function(ee){var he=te(ee[0]);ge(A,he);var Oe=te(ee[1]);return ge(A,Oe),[he,Oe]}):(A.expression=te(b.expression),b.value==="-"&&A.expression.type==="number"?(A=A.expression,A.value=-A.value):ge(A,A.expression));break;case"function":case"partial":A={type:b.type,name:b.name,value:b.value,position:b.position},A.arguments=b.arguments.map(function(ee){var he=te(ee);return ge(A,he),he}),A.procedure=te(b.procedure);break;case"lambda":A={type:b.type,arguments:b.arguments,signature:b.signature,position:b.position};var X=te(b.body);A.body=re(X);break;case"condition":A={type:b.type,position:b.position},A.condition=te(b.condition),ge(A,A.condition),A.then=te(b.then),ge(A,A.then),typeof b.else<"u"&&(A.else=te(b.else),ge(A,A.else));break;case"transform":A={type:b.type,position:b.position},A.pattern=te(b.pattern),A.update=te(b.update),typeof b.delete<"u"&&(A.delete=te(b.delete));break;case"block":A={type:b.type,position:b.position},A.expressions=b.expressions.map(function(ee){var he=te(ee);return ge(A,he),(he.consarray||he.type==="path"&&he.steps[0].consarray)&&(A.consarray=!0),he});break;case"name":A={type:"path",steps:[b]},b.keepArray&&(A.keepSingletonArray=!0);break;case"parent":A={type:"parent",slot:{label:"!"+le++,level:1,index:ke++}},ze.push(A);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":A=b;break;case"operator":if(b.value==="and"||b.value==="or"||b.value==="in")b.type="name",A=te(b);else if(b.value==="?")A=b;else throw{code:"S0201",stack:new Error().stack,position:b.position,token:b.value};break;case"error":A=b,b.lhs&&(A=te(b.lhs));break;default:var H="S0206";b.id==="(end)"&&(H="S0207");var z={code:H,position:b.position,token:b.value};if(v)return ve.push(z),{type:"error",error:z};throw z.stack=new Error().stack,z}return b.keepArray&&(A.keepArray=!0),A};q=I(C),L();var Ce=y(0);if(T.id!=="(end)"){var Te={code:"S0201",position:T.position,token:T.value};B(Te)}if(Ce=te(Ce),Ce.type==="parent"||typeof Ce.seekingParent<"u")throw{code:"S0217",token:Ce.type,position:Ce.position};return ve.length>0&&(Ce.errors=ve),Ce};return O})();i.exports=o},{"./signature":5}],5:[function(r,i,s){var u=r("./utils");const o=(()=>{var f={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function x(I){for(var O=1,C=[],v={},T=v;O<I.length;){var q=I.charAt(O);if(q===":")break;var J=function(){C.push(v),T=v,v={}},ve=function(j,ie,me,Y){for(var re=1,le=ie;le<j.length;)if(le++,q=j.charAt(le),q===Y){if(re--,re===0)break}else q===me&&re++;return le};switch(q){case"s":case"n":case"b":case"l":case"o":v.regex="["+q+"m]",v.type=q,J();break;case"a":v.regex="[asnblfom]",v.type=q,v.array=!0,J();break;case"f":v.regex="f",v.type=q,J();break;case"j":v.regex="[asnblom]",v.type=q,J();break;case"x":v.regex="[asnblfom]",v.type=q,J();break;case"-":T.context=!0,T.contextRegex=new RegExp(T.regex),T.regex+="?";break;case"?":case"+":T.regex+=q;break;case"(":var Ee=ve(I,O,"(",")"),U=I.substring(O+1,Ee);if(U.indexOf("<")===-1)v.regex="["+U+"m]";else throw{code:"S0402",stack:new Error().stack,value:U,offset:O};v.type="("+U+")",O=Ee,J();break;case"<":if(T.type==="a"||T.type==="f"){var D=ve(I,O,"<",">");T.subtype=I.substring(O+1,D),O=D}else throw{code:"S0401",stack:new Error().stack,value:T.type,offset:O};break}O++}var B="^"+C.map(function(j){return"("+j.regex+")"}).join("")+"$",L=new RegExp(B),y=function(j){var ie;if(u.isFunction(j))ie="f";else{var me=typeof j;switch(me){case"string":ie="s";break;case"number":ie="n";break;case"boolean":ie="b";break;case"object":j===null?ie="l":Array.isArray(j)?ie="a":ie="o";break;case"undefined":default:ie="m"}}return ie},F=function(j,ie){for(var me="^",Y=0,re=0;re<C.length;re++){me+=C[re].regex;var le=ie.match(me);if(le===null)throw{code:"T0410",stack:new Error().stack,value:j[Y],index:Y+1};Y=le[0].length}throw{code:"T0410",stack:new Error().stack,value:j[Y],index:Y+1}};return{definition:I,validate:function(j,ie){var me="";j.forEach(function(ke){me+=y(ke)});var Y=L.exec(me);if(Y){var re=[],le=0;return C.forEach(function(ke,ze){var ye=j[le],ge=Y[ze+1];if(ge==="")if(ke.context&&ke.contextRegex){var Be=y(ie);if(ke.contextRegex.test(Be))re.push(ie);else throw{code:"T0411",stack:new Error().stack,value:ie,index:le+1}}else re.push(ye),le++;else ge.split("").forEach(function(te){if(ke.type==="a"){if(te==="m")ye=void 0;else{ye=j[le];var Ce=!0;if(typeof ke.subtype<"u"){if(te!=="a"&&ge!==ke.subtype)Ce=!1;else if(te==="a"&&ye.length>0){var Te=y(ye[0]);if(Te!==ke.subtype.charAt(0))Ce=!1;else{var b=ye.filter(function(A){return y(A)!==Te});Ce=b.length===0}}}if(!Ce)throw{code:"T0412",stack:new Error().stack,value:ye,index:le+1,type:f[ke.subtype]};te!=="a"&&(ye=[ye])}re.push(ye),le++}else re.push(ye),le++})}),re}F(j,me)}}}return x})();i.exports=o},{"./utils":6}],6:[function(r,i,s){const u=(()=>{function o(D){var B=!1;if(typeof D=="number"&&(B=!isNaN(D),B&&!isFinite(D)))throw{code:"D1001",value:D,stack:new Error().stack};return B}function f(D){var B=!1;return Array.isArray(D)&&(B=D.filter(function(L){return typeof L!="string"}).length===0),B}function x(D){var B=!1;return Array.isArray(D)&&(B=D.filter(function(L){return!o(L)}).length===0),B}function I(){var D=[];return D.sequence=!0,arguments.length===1&&D.push(arguments[0]),D}function O(D){return D.sequence===!0&&Array.isArray(D)}function C(D){return D&&(D._jsonata_function===!0||D._jsonata_lambda===!0)||typeof D=="function"}function v(D){var B=typeof D.arity=="number"?D.arity:typeof D.implementation=="function"?D.implementation.length:typeof D.length=="number"?D.length:D.arguments.length;return B}function T(D){return D&&D._jsonata_lambda===!0}var q=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function J(D){return typeof D=="object"&&D!==null&&q in D&&"next"in D&&typeof D.next=="function"}function ve(D,B){if(D===B)return!0;if(typeof D=="object"&&typeof B=="object"&&D!==null&&B!==null){if(Array.isArray(D)&&Array.isArray(B)){if(D.length!==B.length)return!1;for(var L=0;L<D.length;L++)if(!ve(D[L],B[L]))return!1;return!0}var y=Object.getOwnPropertyNames(D),F=Object.getOwnPropertyNames(B);if(y.length!==F.length)return!1;for(y=y.sort(),F=F.sort(),L=0;L<y.length;L++)if(y[L]!==F[L])return!1;for(L=0;L<y.length;L++){var j=y[L];if(!ve(D[j],B[j]))return!1}return!0}return!1}function Ee(D){return typeof D=="object"&&D!==null&&"then"in D&&typeof D.then=="function"}function U(D){var B=[];for(let L of D)B.push(L);return B}return{isNumeric:o,isArrayOfStrings:f,isArrayOfNumbers:x,createSequence:I,isSequence:O,isFunction:C,isLambda:T,isIterable:J,getFunctionArity:v,isDeepEqual:ve,stringToArray:U,isPromise:Ee}})();i.exports=u},{}]},{},[3])(3)})}(si)),si.exports}var pc=uc();const ra=xs(pc);var Zt={exports:{}};const En=Na(Da),dc="16.5.0",hc={version:dc};var bs;function fc(){if(bs)return Zt.exports;bs=1;var t={};const e=En,r=En,i=En,s=En,o=hc.version,f=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function x(y){const F={};let j=y.toString();j=j.replace(/\r\n?/mg,`
`);let ie;for(;(ie=f.exec(j))!=null;){const me=ie[1];let Y=ie[2]||"";Y=Y.trim();const re=Y[0];Y=Y.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),re==='"'&&(Y=Y.replace(/\\n/g,`
`),Y=Y.replace(/\\r/g,"\r")),F[me]=Y}return F}function I(y){const F=q(y),j=L.configDotenv({path:F});if(!j.parsed){const re=new Error(`MISSING_DATA: Cannot parse ${F} for an unknown reason`);throw re.code="MISSING_DATA",re}const ie=v(y).split(","),me=ie.length;let Y;for(let re=0;re<me;re++)try{const le=ie[re].trim(),ke=T(j,le);Y=L.decrypt(ke.ciphertext,ke.key);break}catch(le){if(re+1>=me)throw le}return L.parse(Y)}function O(y){console.log(`[dotenv@${o}][WARN] ${y}`)}function C(y){console.log(`[dotenv@${o}][DEBUG] ${y}`)}function v(y){return y&&y.DOTENV_KEY&&y.DOTENV_KEY.length>0?y.DOTENV_KEY:t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:""}function T(y,F){let j;try{j=new URL(F)}catch(le){if(le.code==="ERR_INVALID_URL"){const ke=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw ke.code="INVALID_DOTENV_KEY",ke}throw le}const ie=j.password;if(!ie){const le=new Error("INVALID_DOTENV_KEY: Missing key part");throw le.code="INVALID_DOTENV_KEY",le}const me=j.searchParams.get("environment");if(!me){const le=new Error("INVALID_DOTENV_KEY: Missing environment part");throw le.code="INVALID_DOTENV_KEY",le}const Y=`DOTENV_VAULT_${me.toUpperCase()}`,re=y.parsed[Y];if(!re){const le=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${Y} in your .env.vault file.`);throw le.code="NOT_FOUND_DOTENV_ENVIRONMENT",le}return{ciphertext:re,key:ie}}function q(y){let F=null;if(y&&y.path&&y.path.length>0)if(Array.isArray(y.path))for(const j of y.path)e.existsSync(j)&&(F=j.endsWith(".vault")?j:`${j}.vault`);else F=y.path.endsWith(".vault")?y.path:`${y.path}.vault`;else F=r.resolve(process.cwd(),".env.vault");return e.existsSync(F)?F:null}function J(y){return y[0]==="~"?r.join(i.homedir(),y.slice(1)):y}function ve(y){!!(y&&y.debug)&&C("Loading env from encrypted .env.vault");const j=L._parseVault(y);let ie=t;return y&&y.processEnv!=null&&(ie=y.processEnv),L.populate(ie,j,y),{parsed:j}}function Ee(y){const F=r.resolve(process.cwd(),".env");let j="utf8";const ie=!!(y&&y.debug);y&&y.encoding?j=y.encoding:ie&&C("No encoding is specified. UTF-8 is used by default");let me=[F];if(y&&y.path)if(!Array.isArray(y.path))me=[J(y.path)];else{me=[];for(const ke of y.path)me.push(J(ke))}let Y;const re={};for(const ke of me)try{const ze=L.parse(e.readFileSync(ke,{encoding:j}));L.populate(re,ze,y)}catch(ze){ie&&C(`Failed to load ${ke} ${ze.message}`),Y=ze}let le=t;return y&&y.processEnv!=null&&(le=y.processEnv),L.populate(le,re,y),Y?{parsed:re,error:Y}:{parsed:re}}function U(y){if(v(y).length===0)return L.configDotenv(y);const F=q(y);return F?L._configVault(y):(O(`You set DOTENV_KEY but you are missing a .env.vault file at ${F}. Did you forget to build it?`),L.configDotenv(y))}function D(y,F){const j=Buffer.from(F.slice(-64),"hex");let ie=Buffer.from(y,"base64");const me=ie.subarray(0,12),Y=ie.subarray(-16);ie=ie.subarray(12,-16);try{const re=s.createDecipheriv("aes-256-gcm",j,me);return re.setAuthTag(Y),`${re.update(ie)}${re.final()}`}catch(re){const le=re instanceof RangeError,ke=re.message==="Invalid key length",ze=re.message==="Unsupported state or unable to authenticate data";if(le||ke){const ye=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw ye.code="INVALID_DOTENV_KEY",ye}else if(ze){const ye=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw ye.code="DECRYPTION_FAILED",ye}else throw re}}function B(y,F,j={}){const ie=!!(j&&j.debug),me=!!(j&&j.override);if(typeof F!="object"){const Y=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw Y.code="OBJECT_REQUIRED",Y}for(const Y of Object.keys(F))Object.prototype.hasOwnProperty.call(y,Y)?(me===!0&&(y[Y]=F[Y]),ie&&C(me===!0?`"${Y}" is already defined and WAS overwritten`:`"${Y}" is already defined and was NOT overwritten`)):y[Y]=F[Y]}const L={configDotenv:Ee,_configVault:ve,_parseVault:I,config:U,decrypt:D,parse:x,populate:B};return Zt.exports.configDotenv=L.configDotenv,Zt.exports._configVault=L._configVault,Zt.exports._parseVault=L._parseVault,Zt.exports.config=L.config,Zt.exports.decrypt=L.decrypt,Zt.exports.parse=L.parse,Zt.exports.populate=L.populate,Zt.exports=L,Zt.exports}var mc=fc();const qi=async t=>{const r=await(await Dt.getWorkspace()).getResource(t);return r||ut("Invalid URL: "+t),await r.getContents({uri:!0})},na=t=>t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:"),zi={},jn=async(t,e)=>{const r=await ra(`[**[${e}!='']]`).evaluate(t);for(const i of r){const s=i[e];if(na(s))continue;const u=await qi(s);zi[u]=i[e],i[e]=u}},sn=t=>zi[t],fi=async(t,e)=>{const r=await ra(`[**[${e}!='']]`).evaluate(t);for(const i of r){const s=i[e];!s||!s.startsWith("blob:")||(i[e]=zi[s])}},ia=t=>{var r;st.registerContribution("catalog.root",{label:t.label,icon:t.icon,contributionId:t.contributionId});const e=t.contributionId??t.label;(r=t.items)==null||r.forEach(i=>{st.registerContribution(e,{label:i.label,icon:i.icon,contributionId:i.contributionId});const u=import.meta.resolve("/.");i.items.forEach(o=>{var x;const f={label:o.label,icon:o.icon,state:{...o.state}};(x=f.state)!=null&&x.url&&(f.state.url=f.state.url.replace("${baseURL}/",u)),st.registerContribution(i.contributionId,f)})})},mi=t=>{Object.entries(t).forEach(([e,r])=>{const i=/\${([a-zA-Z0-9_]+)}/g;t[e]=r.replace(i,(s,u)=>{const o=t[u];return o!==void 0?o:s})})},sa=async(...t)=>{const e=await Dt.getWorkspace(),r={};for(const i of t){const s=await(e==null?void 0:e.getResource(i));if(!s)continue;const u=await s.getContents(),o=mc.parse(u||"");mi(o),Object.assign(r,o)}return mi(r),r},gc=Object.freeze(Object.defineProperty({__proto__:null,getOriginalUri:sn,isAbsoluteResource:na,loadEnvs:sa,registerCatalog:ia,replaceUris:jn,replaceVars:mi,revertBlobUris:fi,toBlobUri:qi},Symbol.toStringTag,{value:"Module"}));Ma.resolveUrl=t=>qi(t);br.registerEditorInputHandler({canHandle:t=>t instanceof Rn&&t.getName().endsWith(".geospace"),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),icon:"location-dot",state:{}};return e.widgetFactory=r=>de`
            <gs-map id="${r}" .input="${e}"></gs-map>`,e}});var Yn=(t=>(t[t.LOADED=0]="LOADED",t[t.LAYER_ADDED=1]="LAYER_ADDED",t[t.LAYER_DELETED=2]="LAYER_DELETED",t))(Yn||{});const Zn=Dr(So),vc=`:root,
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
`,yc=t=>new Proxy({},{get:(e,r)=>async(...i)=>{for(const s of t)await s[r](...i)}}),bc="iframe-map-renderer.html";class wc{constructor(e,r){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=r,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(r,i){return async(...s)=>await e.sendMessage(i,{...s})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=bc,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}getViewExtent(){return[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(){this.onSyncCallback&&this.onSyncCallback(this.gsMap)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,r){try{const{toBlobUri:i}=await Et(async()=>{const{toBlobUri:u}=await Promise.resolve().then(()=>gc);return{toBlobUri:u}},[]),s=await i(r);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:s},"*")}catch(i){this.iframe.contentWindow.postMessage({id:e,success:!1,error:i instanceof Error?i.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{var f,x,I,O;if(e.source!==((f=this.iframe)==null?void 0:f.contentWindow))return;const{id:r,result:i,error:s,type:u,gsMap:o}=e.data;if(r!==void 0&&this.pendingMessages.has(r)){const{resolve:C,reject:v}=this.pendingMessages.get(r);this.pendingMessages.delete(r),s?v(new Error(s)):C(i)}u==="dirty"?(x=this.onDirtyCallback)==null||x.call(this):u==="sync"?(I=this.onSyncCallback)==null||I.call(this,o):u==="iframeClicked"?(O=this.onClickCallback)==null||O.call(this):u==="resolveAsset"&&this.handleAssetResolution(r,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const r=i=>{var s;i.source===((s=this.iframe)==null?void 0:s.contentWindow)&&i.data.type==="rendererReady"&&(window.removeEventListener("message",r),e())};window.addEventListener("message",r)})}async sendMessage(e,r){if(!this.iframe)throw new Error("Iframe not initialized");const i=++this.messageId;return new Promise((s,u)=>{this.pendingMessages.set(i,{resolve:s,reject:u}),this.iframe.contentWindow.postMessage({id:i,method:e,params:r},"*"),setTimeout(()=>{this.pendingMessages.has(i)&&(this.pendingMessages.delete(i),u(new Error("Message timeout")))},5e3)})}}class Ic{constructor(e,r){this.gsMap=e,this.renderer=r}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,r){r?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){e>=0&&e<this.gsMap.layers.length&&this.gsMap.layers.splice(e,1),this.triggerDirty()}async setLayerVisible(e,r){e>=0&&e<this.gsMap.layers.length&&(this.gsMap.layers[e].visible=r),this.triggerDirty()}async applyStyles(e,r){const i=typeof e=="number"?this.gsMap.layers[e]:this.gsMap.layers.find(s=>s.name===e);i&&(i.stylesPath=r),this.triggerDirty()}async addMarker(e,r){let i=this.gsMap.layers.find(s=>s.name===(r||"Markers"));i||(i={name:r||"Markers",type:"vector",source:{type:"features",features:[]},visible:!0},this.gsMap.layers.push(i)),i.source&&i.source.features&&i.source.features.push(e),this.triggerDirty()}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){e>=0&&e<this.gsMap.controls.length&&this.gsMap.controls.splice(e,1),this.triggerDirty(),await this.renderer.modelToUI()}async addOverlayFromModule(e,r){this.gsMap.overlays.push({src:e,position:r||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){e>=0&&e<this.gsMap.overlays.length&&this.gsMap.overlays.splice(e,1),this.triggerDirty(),await this.renderer.modelToUI()}}var xc=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,aa=(t,e,r,i)=>{for(var s=i>1?void 0:i?kc(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&xc(e,r,s),s};let Lt=class extends xt{constructor(){super(),this.mapContainer=Tr(),this.isFirstConnection=!0,this.chatContext={history:[]},this.commandStack=new Ls}doBeforeUI(){this.registerToolbarActions()}registerToolbarActions(){this.registerToolbarContribution({label:"Zoom in",icon:"magnifying-glass-plus",command:"zoom_in",slot:"start"}),this.registerToolbarContribution({label:"Zoom out",icon:"magnifying-glass-minus",command:"zoom_out",slot:"start"}),this.registerToolbarContribution({label:"Reset view",icon:"house",command:"reset_view",slot:"start"}),this.registerToolbarDivider(),this.registerToolbarContribution({label:"Toggle dark/light mode",icon:"circle-half-stroke",command:"toggle_color_mode",slot:"start"}),this.registerToolbarContribution({label:"Toggle mobile view",icon:"mobile",command:"toggle_mobile_view",slot:"start"}),this.registerToolbarDivider(),this.registerToolbarContribution({label:"Refresh map",icon:"rotate",command:"refresh_map",slot:"start"})}registerToolbarDivider(){const t=this.getAttribute("id");if(!t)return;const e=`toolbar.${t}`;st.registerContribution(e,{label:"",html:'<wa-divider orientation="vertical"></wa-divider>',target:e,slot:"start"})}async connectedCallback(){var t;if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}(t=this.renderer)!=null&&t.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{qe.set(this)}))}async doInitUI(){var o,f,x;const t=(o=this.input)==null?void 0:o.data,e=await sa(".env","envs/.env","env","envs/env","default.env","envs/default.env","dev.env","envs/dev.env");e.BUILD_TIME=new Date;const r=await t.getContents();let i=r&&r.trim()?JSON.parse(r):Fa;i=this.migrateGsMap(i),await jn(i,"url"),await jn(i,"src"),this.gsMap=i,i.view&&(this.initialView={center:[...i.view.center],zoom:i.view.zoom}),this.renderer=new wc(i,e);const s=this.renderer.getOperations(),u=new Ic(i,this.renderer);this.operations=yc([u,s]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(I=>{this.gsMap.view=I.view,this.markDirty(!0)}),(x=(f=this.renderer).setOnClick)==null||x.call(f,()=>{qe.set(this)}),Zn.set({part:this,event:Yn.LOADED})}catch(I){console.error("Failed to render map:",I),ut(`Failed to render map: ${I.message}`)}}migrateGsMap(t){if(t.view)return t;console.log("Creating view field and migrating old properties...");const e={...t,view:{}};return t.center!==void 0&&(e.view.center=t.center,delete e.center),t.zoom!==void 0&&(e.view.zoom=t.zoom,delete e.zoom),t.projection!==void 0&&(e.view.projection=t.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857"),e}getGsMap(){return this.gsMap}async save(){var t;if(!this.renderer){ut("Map not initialized");return}try{if(!this.gsMap){ut("Map not initialized");return}const e=JSON.parse(JSON.stringify(this.gsMap));await fi(e,"url"),await fi(e,"src"),(t=this.input)==null||t.data.saveContents(JSON.stringify(e,null,2)),this.markDirty(!1)}catch(e){ut(`Save failed: ${e.message}`)}}get mapOperations(){return this.operations}edit(){vr("not yet implemented")}async refresh(){if(!this.renderer){Ct.error("Map not initialized");return}await this.renderer.modelToUI()}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}doClose(){var t;(t=this.renderer)==null||t.destroy(),this.renderer=void 0,this.input=void 0}render(){return de`
            <div class="gc-map-container" ${Pr(this.mapContainer)}>
            </div>
        `}};Lt.styles=[$a(vc),Bt`
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
    `];aa([Nt({attribute:!1})],Lt.prototype,"input",2);Lt=aa([gt("gs-map")],Lt);var Ac=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,ji=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sc(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ac(e,r,s),s};let un=class extends xt{onPartChanged(t){t==this||t==this.mapEditor||!(t instanceof Lt)||(this.mapEditor=t,this.updateLater())}onMapChanged({part:t}){t==this.mapEditor&&this.updateLater()}toggleVisible(t){var o,f;const e=t.currentTarget.index,u=!(this.mapEditor.getGsMap().layers[e].visible!==!1);(f=(o=this.mapEditor)==null?void 0:o.mapOperations)==null||f.setLayerVisible(e,u),this.updateLater()}confirmAction(t,e){confirm(t)&&e()}render(){return ur(!this.mapEditor,()=>de`
                    <k-no-content message="Select a map."></k-no-content>`,()=>{var t,e,r,i,s;return de`
                <wa-tree>
                    <wa-tree-item expanded>
                        ${Xt("fg layers")} Layers
                        ${(t=this.mapEditor.getGsMap())==null?void 0:t.layers.map((u,o)=>de`
                            <wa-tree-item>
                                <wa-button .index="${o}" @click="${this.toggleVisible}" appearance="plain"
                                           size="small">
                                    <wa-icon name="${u.visible!==!1?"eye":"eye-slash"}" label="${u.visible!==!1?"Hide layer":"Show layer"}"></wa-icon>
                                </wa-button>
                                <span>${u.name??`Layer ${o+1}`}${o==0?de`
                                    <small>(basemap)</small>`:""}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${()=>this.confirmAction(`Delete layer "${u.name||`Layer ${o+1}`}"?`,()=>this.withRefresh(()=>{var f,x;return(x=(f=this.mapEditor)==null?void 0:f.mapOperations)==null?void 0:x.deleteLayer(o)}))}">
                                    <wa-icon name="trash" label="Delete layer"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${Xt("fg map-control")} Controls
                        ${(r=(e=this.mapEditor)==null?void 0:e.getGsMap())==null?void 0:r.controls.map((u,o)=>de`
                            <wa-tree-item>
                                <span>${sn(u.src)}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${()=>this.confirmAction(`Delete control "${sn(u.src)}"?`,()=>this.withRefresh(()=>{var f,x;return(x=(f=this.mapEditor)==null?void 0:f.mapOperations)==null?void 0:x.removeControl(o)}))}">
                                    <wa-icon name="trash" label="Delete control"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${Xt("fg map-poi")} Overlays
                        ${(s=(i=this.mapEditor)==null?void 0:i.getGsMap())==null?void 0:s.overlays.map((u,o)=>de`
                            <wa-tree-item>
                                <span>${sn(u.src)}</span>
                                <wa-button appearance="plain" size="small"
                                           @click="${()=>this.confirmAction(`Delete overlay "${sn(u.src)}"?`,()=>this.withRefresh(()=>{var f,x;return(x=(f=this.mapEditor)==null?void 0:f.mapOperations)==null?void 0:x.removeOverlay(o)}))}">
                                    <wa-icon name="trash" label="Delete overlay"></wa-icon>
                                </wa-button>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        ${Xt("highlighter")} Styles
                    </wa-tree-item>
                </wa-tree>
            `})}};un.styles=Bt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;ji([Ai(qe)],un.prototype,"onPartChanged",1);ji([Ai(Zn)],un.prototype,"onMapChanged",1);un=ji([gt("gs-map-props")],un);var _c=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,oa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Cc(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&_c(e,r,s),s};const Ec="catalog.root";let yr=class extends xt{constructor(){super(...arguments),this.treeRef=Tr()}doBeforeUI(){const t=st.getContributions(Ec);this.rootNodes=this.toTreeNodes(t)}doInitUI(){this.registerToolbarActions()}registerToolbarActions(){this.registerToolbarContribution({label:"Checkout",icon:"file-arrow-down",command:"checkout",slot:"start",disabled:()=>!(qe.get()instanceof yr)||pr.get()===void 0}),this.registerToolbarContribution({label:"Refresh Catalog",icon:"arrows-rotate",command:"refresh_catalog",slot:"start"}),this.registerToolbarContribution({label:"Expand All",icon:"angles-down",command:"catalog_expand_all",slot:"end"}),this.registerToolbarContribution({label:"Collapse All",icon:"angles-up",command:"catalog_collapse_all",slot:"end"})}toTreeNodes(t){return t.map(e=>{const r={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const i=st.getContributions(e.contributionId);r.leaf=i.length===0,r.children=this.toTreeNodes(i)}return r})}onItemDblClicked(t){const e=t.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(t){const e=t.detail.selection[0].model;pr.set(e.data)}setAllExpanded(t){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(r=>{r.expanded=t})}refresh(){this.requestUpdate()}createTreeItems(t,e=!1){var r;return t?de`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${t} ?expanded=${e}>
                <span>${Xt(t.icon)} ${t.label}</span>
                ${(r=t.children)==null?void 0:r.map(i=>this.createTreeItems(i))}
            </wa-tree-item>`:de``}render(){var t;return de`
            <wa-tree ${Pr(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${(t=this.rootNodes)==null?void 0:t.map(e=>this.createTreeItems(e,!0))}
            </wa-tree>
        `}};yr.styles=Bt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;oa([vt()],yr.prototype,"rootNodes",2);yr=oa([gt("gs-catalog")],yr);const Oc="geo!space catalog",Tc="earth",Pc="catalog.root.geospace",Rc=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],Lc={label:Oc,icon:Tc,contributionId:Pc,items:Rc};pt({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async t=>{let e=t.params&&t.params.url;if(!e){const i=pr.get();if(!i||!("url"in i))return;e=i.url}const r=await Dt.getWorkspace();if(!r){ut("No workspace selected.");return}fetch(e,{method:"GET"}).then(i=>i.blob()).then(i=>{const s=new URL(e).pathname.split("/"),u=s[s.length-1];return r.getResource(u,{create:!0}).then(o=>o.saveContents(i,{contentType:qa.BINARY}).then(()=>{vr("File checked out: "+u)}))}).catch(i=>{ut(i)})}}});pt({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async t=>{const e=qe.get();e instanceof yr&&e.refresh()}}});pt({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=qe.get();e instanceof yr&&e.setAllExpanded(!0)}}});pt({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=qe.get();e instanceof yr&&e.setAllExpanded(!1)}}});ia(Lc);const nr=t=>t.source instanceof Lt,wr=t=>{if(!t.source||!t.source.renderer)throw new Error("GsMapEditor with renderer not available in context.source");return t.source.renderer.getOperations()};Me.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level, an interger between 0 and 12",required:!0}]},handler:{canExecute:nr,execute:async t=>{await wr(t).setZoom(Number(t.params.zoom).valueOf())}}});Me.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[]},handler:{canExecute:t=>qe.get()instanceof Lt,execute:async t=>{var i;const e=qe.get(),r=e.getGsMap();if(((i=r==null?void 0:r.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(r.view.zoom+1))}}}});Me.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[]},handler:{canExecute:t=>qe.get()instanceof Lt,execute:async t=>{var i;const e=qe.get(),r=e.getGsMap();if(((i=r==null?void 0:r.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(r.view.zoom-1))}}}});Me.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the map",required:!0},{name:"lon",description:"the longitude of the map",required:!0}]},handler:{canExecute:nr,execute:async t=>{const e=wr(t),r=_s([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]);await e.setCenter([r[0],r[1]])}}});Me.registerAll({command:{id:"add_marker",name:"Add a marker",description:"Add a marker to the map",parameters:[{name:"lat",description:"the latitude of the marker",required:!0},{name:"lon",description:"the longitude of the marker",required:!0},{name:"name",description:"a short name of the marker",required:!0},{name:"description",description:"a description of the marker",required:!0},{name:"iconPath",description:"the path within the workspace to the icon file in any graphics format such as png, jpg or svg; if no icon path provided, a marker.png file will be assumed to be located in the root of the workspace",required:!1},{name:"layerName",description:"the name of the layer to add the marker to; if not provided, markers will be added to the default 'geocoded-markers' layer",required:!1}]},handler:{canExecute:nr,execute:async t=>{const e=wr(t),r=_s([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]),i=t.params.iconPath||"marker.png",s={state:{name:t.params.name,description:t.params.description},style:i,geometry:{type:za.Point,coordinates:[...r]}};await e.addMarker(s,t.params.layerName),Zn.set({part:e,event:Yn.LAYER_ADDED})}}});Me.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(gr).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:nr,execute:async t=>{var f;const e=wr(t),r=(f=t.params.source)==null?void 0:f.trim().toLowerCase(),i=t.params.url,s=ja(r),u=(t==null?void 0:t.params)&&t.params.basemap==!0,o={type:Ba(r),source:{type:s,url:i??Ua(s)}};await jn(o,"url"),await e.addLayer(o,u),Zn.set({part:e,event:Yn.LAYER_ADDED})}}});Me.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:nr,execute:async t=>{const e=wr(t),r=parseInt(t.params.index)-1;r<0||await e.deleteLayer(r)}}});Me.registerAll({command:{id:"apply_styles",name:"Apply styles",description:"Applies a styles json file to a layer",parameters:[{name:"stylesPath",description:"the path to the json file containing style definitions",required:!0},{name:"layer",description:"the layer to apply the styles to: can be either a name or the index pointing to a layer in the layers stack",required:!0}]},handler:{canExecute:nr,execute:async t=>{var s;const e=wr(t),r=t.params.layer,i=(s=t.params.stylesPath)==null?void 0:s.trim().toLowerCase();await e.applyStyles(r,i)}}});Me.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:nr,execute:async t=>{var i;const e=t.source,r=(i=t.params)==null?void 0:i.mode;await e.switchColorMode(r)}}});Me.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:nr,execute:async t=>{const e=wr(t),r=t.params.src,i=t.params.position;await e.addOverlayFromModule(r,i)}}});Me.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:nr,execute:async t=>{const e=wr(t),r=t.params.src;await e.addControlFromModule(r)}}});Me.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates",type:"number[]"}]},handler:{canExecute:nr,execute:async t=>{const e=t.params.latlon,i=t.source.renderer.getViewExtent();if(!i)throw new Error("Failed to get view extent");let s=i;if(e||e===void 0){const{transformExtent:u}=await Et(async()=>{const{transformExtent:o}=await import("./index-C9fhvFKW.js").then(f=>f.aa);return{transformExtent:o}},__vite__mapDeps([0,1]));s=u(i,"EPSG:3857","EPSG:4326"),[s[0],s[1]]=[s[1],s[0]],[s[2],s[3]]=[s[3],s[2]]}t.viewExtent=s}}});Me.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:t=>qe.get()instanceof Lt,execute:async t=>{const e=qe.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});Me.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:t=>qe.get()instanceof Lt,execute:async t=>{const e=qe.get();e instanceof Lt&&await e.refresh()}}});Me.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:t=>qe.get()instanceof Lt,execute:async t=>{const e=qe.get();e instanceof Lt&&await e.resetView()}}});Me.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:t=>qe.get()instanceof Lt,execute:async t=>{const r=qe.get().mapOperations;r&&await r.switchColorMode()}}});it.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>Et(()=>import("./git-extension-DzIgrWBO.js"),__vite__mapDeps([2,0,1])),icon:"code-branch",experimental:!0});it.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>Et(()=>import("./pyterminal-extension-wJdzVujZ.js"),__vite__mapDeps([3,0,1,4])),icon:"k python",experimental:!0});it.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>Et(()=>import("./k-linuxterminal-pit_L-XC.js"),__vite__mapDeps([5,0,1,4])),icon:"terminal",experimental:!0});it.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>Et(()=>import("./webllmservice-DEDenTv5.js"),[]),icon:"robot"});it.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>Et(()=>import("./p12-splitter-OgDsS_Qm.js"),__vite__mapDeps([6,0,1])),icon:"certificate"});it.registerExtension({id:"system.notebook",name:"Jupyter Notebook Editor",description:"View and execute Jupyter notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>Et(()=>import("./notebook-extension-6-3DDQRK.js"),__vite__mapDeps([7,0,1,8,9])),icon:"k jupyter"});it.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>Et(()=>import("./command-palette-extension-D9_3WK9j.js"),__vite__mapDeps([10,0,1])),icon:"terminal"});it.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>Et(()=>import("./download-extension-Dn3kFufb.js"),__vite__mapDeps([11,0,1])),icon:"download"});it.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>Et(()=>import("./unzip-extension-Dp1LqccR.js"),__vite__mapDeps([12,0,1])),icon:"box-archive"});it.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>Et(()=>import("./md-editor-extension-Brl7FlHU.js"),__vite__mapDeps([13,0,1])),icon:"book"});it.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>Et(()=>import("./monaco-editor-extension-CRc9sgNJ.js"),__vite__mapDeps([14,8,0,1,9])),icon:"file-pen"});it.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>Et(()=>import("./memory-usage-extension-Pi3f7rA5.js"),__vite__mapDeps([15,0,1])),icon:"microchip"});const Nc=`You are a specialized commands execution plan generator. Your sole purpose is to analyze user requests expressed in natural language and translate them into a precise sequence of command calls that can be executed by a software controller.

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
\`\`\``,Dc=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,Mc=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``;let $c=0;st.registerContribution(vn,{label:"Commander",description:"Commands execution plan generator",role:"commands",sysPrompt:Nc,canHandle:({activeEditor:t})=>{const e=Me.listCommands({source:t});return Object.keys(e).length>0},promptDecorator:async({userPrompt:t,commandRegistry:e,activeEditor:r})=>{const i=e.listCommands({source:r}),s=JSON.stringify(i,null,2);return`${t}

***Available Commands:***
${s}`},messageDecorator:async({message:t,activeEditor:e})=>{if(!t)return;const r=t.content.replace("```json","").replace("```",""),i=JSON.parse(r);let s=!0;t.content=i.map(({id:u,summary:o},f)=>{const x=Me.getCommand(u);return x?`${f+1}. ${x.name}
	- ${o||x.description}`:(s=!1,`${f+1}. *INVALID COMMAND:* _${u}_`)}).join(`
`),t.actions=t.actions||[],t.actions.push({label:"Show Commands Execution Plan",icon:"list",action:async()=>{const u=$c++,o=`\`\`\`json
${JSON.stringify(i,null,2)}
\`\`\``,f=new As(o,`Commands Execution Plan (${u}).md`);await br.loadEditor(f)}}),s&&t.actions.push({label:"Execute Commands",icon:"play",action:async()=>{const u=(e==null?void 0:e.getCommandStack())||new Ls;await dn.runAsync("Executing commands",async()=>{Ct.debug("Executing commands: "+JSON.stringify(i));const o={source:e};for(const f of i){const x=Object.entries(f.parameters||{}).map(([I,O])=>(typeof O=="string"&&(O=O.replace(/{{(.*?)}}/g,(C,v)=>o[v.trim()]??"")),[I,O]));o.params=Object.fromEntries(x),await u.execute(f.id,o)}})}})}});const la=t=>t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function",ca=async({userPrompt:t,activeEditor:e})=>{var u,o;const r=e.getEditor(),i=r.getModel(),s=i.getValueInRange(r.getSelection());return s?`${t}

 Code selection within file "${(u=e.input)==null?void 0:u.data.getWorkspacePath()}":

            ${s}`:`${t}

Code in file "${(o=e.input)==null?void 0:o.data.getWorkspacePath()}":

            ${i.getValue()}`};st.registerContribution(vn,{label:"Python Assistant",description:"Python code assistant",role:"py-programmer",sysPrompt:Dc,canHandle:({activeEditor:t})=>la(t)&&t.getLanguage()=="python",promptDecorator:ca});st.registerContribution(vn,{label:"JavaScript Assistant",description:"JavaScript code assistant",role:"js-programmer",sysPrompt:Mc,canHandle:({activeEditor:t})=>la(t)&&t.getLanguage()=="javascript",promptDecorator:ca});var Fc=Object.getOwnPropertyDescriptor,qc=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fc(e,r):e,u=t.length-1,o;u>=0;u--)(o=t[u])&&(s=o(s)||s);return s};let ws=class extends _i{createRenderRoot(){return this}render(){return de`
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
                <k-toolbar id=${Ci}></k-toolbar>
                <k-toolbar id=${Wo}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Hr}></k-toolbar>
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
                    <k-tabs id="${di}"></k-tabs>
                    <k-tabs id="${$s}"></k-tabs>
                </k-resizable-grid>
                
                <!-- CENTER: Editor + Bottom Panel -->
                <k-resizable-grid 
                    id="center-layout" 
                    orientation="vertical" 
                    sizes="70%, 30%">
                    
                    <!-- Editor Area (fixed, never moves) -->
                    <k-tabs id="${Dn}"></k-tabs>
                    
                    <!-- Bottom Panel (terminal, output, etc.) -->
                    <k-tabs id="${qs}"></k-tabs>
                </k-resizable-grid>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${Fs}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${Ds}></k-toolbar>
                <k-toolbar id=${Ei}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Ms}></k-toolbar>
            </div>
        `}};ws=qc([gt("gs-app")],ws);const zc=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
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
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,Is=bi("GeoSpaceApp"),jc={".geojson":gr.GeoJSON,".json":gr.GeoJSON,".kml":gr.KML,".gpx":gr.GPX,".tif":gr.GeoTIFF,".tiff":gr.GeoTIFF,".geotiff":gr.GeoTIFF},ua=t=>{const e=t.getName().toLowerCase();for(const[r,i]of Object.entries(jc))if(e.endsWith(r))return i;return null},Uc=t=>ua(t)!==null,Pn={id:"geospace",name:"geo!space",version:es,description:"A geospatial IDE for working with spatial data",extensions:["system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage"],contributions:{ui:[{target:Ci,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:di,name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>de`<k-filebrowser id="${t}"></k-filebrowser>`},{target:di,name:"catalog",label:"Catalog",icon:"book",component:t=>de`<gs-catalog id="${t}"></gs-catalog>`},{target:$s,name:"map-props",label:"Map Properties",icon:"fg map-options",component:t=>de`<gs-map-props id="${t}"></gs-map-props>`},{target:Fs,name:"assistant",label:"AI",icon:"robot",component:t=>de`<k-aiassist id="${t}"></k-aiassist>`},{target:qs,name:"log-terminal",label:"Log",icon:"list",component:t=>de`<k-log-terminal id="${t}"></k-log-terminal>`},{target:Ds,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:Ms,label:`v${es}`,icon:"circle-info",command:"show_version_info"},{target:"contextmenu.filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const t=pr.get();return t instanceof Rn?!Uc(t):!0}}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>Et(()=>import("./mapbuilder-extension-BdDj0H5k.js"),__vite__mapDeps([16,0,1])),icon:"earth"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>Et(()=>import("./overpass-extension-LEPlwq8w.js"),__vite__mapDeps([17,0,1])),icon:"table"}]},async initialize(){st.registerContribution(vn,{label:"App Support",description:"General app support",role:"appsupport",sysPrompt:()=>{const t=it.getExtensions().map(r=>({id:r.id,name:r.name,description:r.description,experimental:r.experimental,installedAndEnabled:it.isEnabled(r.id)})),e=`***Available Extensions:***
${JSON.stringify(t,null,2)}`;return`${zc}

${e}`},canHandle:({activeEditor:t})=>t===void 0,promptDecorator:async({userPrompt:t})=>Dt.getWorkspace().then(e=>{var s;const r={workspace:e==null?void 0:e.getName(),activeEditor:(s=br.getEditorArea())==null?void 0:s.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(r,null,2)}`}

${t}`})}),pt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{alert(`${Pn.name}
Version: ${Pn.version}
Alpha Release

${Pn.description}`)}}}),pt({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async t=>{const e=pr.get();if(!(e instanceof Rn))return;const r=ua(e);if(!r){Is.warn(`Unsupported file type: ${e.getName()}`);return}const i=e.getWorkspacePath();await t.commandRegistry.execute("add_layer",{source:t,params:{source:r,url:i}})}}}),Is.info("geo!space is ready!")},render(){return de`<gs-app></gs-app>`}};Rs.loadApp(Pn,document.body);export{Lt as G,Mr as K,Hl as P,Ci as T,qe as a,dn as b,ut as c,qs as d,xt as e,zo as f,Wo as g,Cn as h,pr as i,br as j,Ct as k,sa as l,We as m,st as n,Ds as o,pt as r,vr as t};
