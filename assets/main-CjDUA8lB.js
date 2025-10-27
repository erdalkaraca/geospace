const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CNuu7pZ0.js","assets/index-CyGQFstn.css","assets/git-extension-DlKTWTrq.js","assets/pyterminal-extension-BEXgss_A.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-D_csODgL.js","assets/p12-splitter-Hfj6ILM2.js","assets/notebook-extension-CeHrvSxz.js","assets/editor.main-BKQ42CJE.js","assets/editor-D6kYW_CN.css","assets/command-palette-extension-DUrJ5ZZF.js","assets/download-extension-Dt-1aOCb.js","assets/unzip-extension-DflmwE5e.js","assets/md-editor-extension-CExNlpYz.js","assets/monaco-editor-extension-CPYvSO-j.js","assets/memory-usage-extension-Bm4D2KGB.js","assets/webdav-extension-Cw_Be4q7.js","assets/mapbuilder-extension-DzIWWPLX.js","assets/overpass-extension-DiwtfHVj.js","assets/gtfs-extension-BqN5KC8C.js"])))=>i.map(i=>d[i]);
var Ma=Object.defineProperty;var Fa=(t,e,n)=>e in t?Ma(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Je=(t,e,n)=>Fa(t,typeof e!="symbol"?e+"":e,n);import{r as un,p as Pr,W as qa,a as yn,g as Ps,u as zn,s as pn,B as vi,x as Q,i as Rs,b as Rt,t as ht,o as Xr,c as za,n as Ue,d as ft,e as Dn,E as Pt,f as Nn,h as Ls,j as Ds,k as ja,l as Ua,v as Pn,m as ar,M as ui,T as Ba,q as Ns,w as ln,y as Oi,z as Mt,R as rs,D as Wa,F as Br,A as dr,C as Ti,S as $s,G as Ms,H as is,I as Ga,_ as Va,J as Ka,K as wt,L as Ha,N as ss,O as Xt,P as Fs,Q as Ya,U as qs,V as Ja,X as Za,Y as Qa,Z as Xa}from"./index-CNuu7pZ0.js";const as={debug:0,info:1,warning:2,error:3};let eo="debug";const Kn={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Wr=null;const yi=[];function or(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class to{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,n){Hn(this.source,e,n)}}function no(t){return as[t]>=as[eo]}function Hn(t,e,n){no(n)&&(Wr?Wr(t,e,n):(yi.push({source:t,message:e,level:n}),Kn[n==="error"?"error":n==="warning"?"warn":n==="debug"?"debug":"log"](`[${t}] ${e}`)))}function ro(){console.log=function(...t){Kn.log.apply(console,t),Hn("Console",t.map(e=>or(e)).join(" "),"info")},console.info=function(...t){Kn.info.apply(console,t),Hn("Console",t.map(e=>or(e)).join(" "),"info")},console.warn=function(...t){Kn.warn.apply(console,t),Hn("Console",t.map(e=>or(e)).join(" "),"warning")},console.error=function(...t){Kn.error.apply(console,t),Hn("Console",t.map(e=>or(e)).join(" "),"error")},console.debug=function(...t){Kn.debug.apply(console,t),Hn("Console",t.map(e=>or(e)).join(" "),"debug")}}ro();function io(t){for(Wr=t;yi.length>0;){const e=yi.shift();e&&t(e.source,e.message,e.level)}}function so(){Wr=null}function Pi(t){return new to(t)}const bt=Pi("System");un.put("logger",bt);const Rr=`${qa}/settings.json`,Ri="events/settings/changed";class ao{async checkSettings(){this.appSettings||(this.appSettings=await Pr.getObject(Rr),this.appSettings||(this.appSettings={},await Pr.persistObject(Rr,this.appSettings)),yn(Ri,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,n){await this.checkSettings(),this.appSettings[e]=n,await Pr.persistObject(Rr,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await Pr.persistObject(Rr,this.appSettings)}}const tn=new ao;un.put("appSettings",tn);var qr={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var oo=qr.exports,os;function lo(){return os||(os=1,function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(oo,function(e){var n=function(a){return new n.lib.init(a)},i="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:i,constructor:n,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||n.defaults.text,this.options.node=a.node||n.defaults.node,this.options.duration=a.duration===0?0:a.duration||n.defaults.duration,this.options.selector=a.selector||n.defaults.selector,this.options.callback=a.callback||n.defaults.callback,this.options.destination=a.destination||n.defaults.destination,this.options.newWindow=a.newWindow||n.defaults.newWindow,this.options.close=a.close||n.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=a.positionLeft||n.defaults.positionLeft,this.options.position=a.position||n.defaults.position,this.options.backgroundColor=a.backgroundColor||n.defaults.backgroundColor,this.options.avatar=a.avatar||n.defaults.avatar,this.options.className=a.className||n.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?n.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||n.defaults.onClick,this.options.offset=a.offset||n.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||n.defaults.ariaLive,this.options.style=a.style||n.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var h in this.options.style)a.style[h]=this.options.style[h];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var x=document.createElement("img");x.src=this.options.avatar,x.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(x):a.insertAdjacentElement("afterbegin",x)}if(this.options.close===!0){var I=document.createElement("button");I.type="button",I.setAttribute("aria-label","Close"),I.className="toast-close",I.innerHTML="&#10006;",I.addEventListener("click",(function(ve){ve.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var k=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&k>360?a.insertAdjacentElement("afterbegin",I):a.appendChild(I)}if(this.options.stopOnFocus&&this.options.duration>0){var C=this;a.addEventListener("mouseover",function(ve){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){C.removeElement(a)},C.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(ve){ve.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(ve){ve.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var v=s("x",this.options),T=s("y",this.options),q=this.options.position=="left"?v:"-"+v,Y=this.options.gravity=="toastify-top"?T:"-"+T;a.style.transform="translate("+q+","+Y+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var h=n.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,h),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),n.reposition()}).bind(this),400)}},n.reposition=function(){for(var a={top:15,bottom:15},h={top:15,bottom:15},x={top:15,bottom:15},I=document.getElementsByClassName("toastify"),k,C=0;C<I.length;C++){c(I[C],"toastify-top")===!0?k="toastify-top":k="toastify-bottom";var v=I[C].offsetHeight;k=k.substr(9,k.length-1);var T=15,q=window.innerWidth>0?window.innerWidth:screen.width;q<=360?(I[C].style[k]=x[k]+"px",x[k]+=v+T):c(I[C],"toastify-left")===!0?(I[C].style[k]=a[k]+"px",a[k]+=v+T):(I[C].style[k]=h[k]+"px",h[k]+=v+T)}return this};function s(a,h){return h.offset[a]?isNaN(h.offset[a])?h.offset[a]:h.offset[a]+"px":"0px"}function c(a,h){return!a||typeof h!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(h)>-1)}return n.lib.init.prototype=n.lib,n})}(qr)),qr.exports}var co=lo();const Li=Ps(co),Vt=t=>{console.info("[TOAST] INFO: ",t),Li({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},Qe=t=>{console.error("[TOAST] ERROR: ",t),Li({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},uo=t=>{console.warn("[TOAST] WARNING: ",t),Li({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};zn.put("toastInfo",Vt);zn.put("toastError",Qe);zn.put("toastWarning",uo);var po=Object.defineProperty,ho=(t,e,n)=>e in t?po(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,pi=(t,e,n)=>(ho(t,typeof e!="symbol"?e+"":e,n),n),fo=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},di=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Lr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},ls=(t,e,n)=>(fo(t,e,"access private method"),n);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function zs(t,e){return Object.is(t,e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let dt=null,fr=!1,zr=1;const Gr=Symbol("SIGNAL");function Yn(t){const e=dt;return dt=t,e}function mo(){return dt}function go(){return fr}const Di={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ei(t){if(fr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(dt===null)return;dt.consumerOnSignalRead(t);const e=dt.nextProducerIndex++;if(Jn(dt),e<dt.producerNode.length&&dt.producerNode[e]!==t&&bi(dt)){const n=dt.producerNode[e];ti(n,dt.producerIndexOfThis[e])}dt.producerNode[e]!==t&&(dt.producerNode[e]=t,dt.producerIndexOfThis[e]=bi(dt)?Bs(t,dt,e):0),dt.producerLastReadVersion[e]=t.version}function vo(){zr++}function js(t){if(!(!t.dirty&&t.lastCleanEpoch===zr)){if(!t.producerMustRecompute(t)&&!xo(t)){t.dirty=!1,t.lastCleanEpoch=zr;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=zr}}function Us(t){if(t.liveConsumerNode===void 0)return;const e=fr;fr=!0;try{for(const n of t.liveConsumerNode)n.dirty||bo(n)}finally{fr=e}}function yo(){return(dt==null?void 0:dt.consumerAllowSignalWrites)!==!1}function bo(t){var e;t.dirty=!0,Us(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function wo(t){return t&&(t.nextProducerIndex=0),Yn(t)}function Io(t,e){if(Yn(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(bi(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)ti(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function xo(t){Jn(t);for(let e=0;e<t.producerNode.length;e++){const n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(js(n),i!==n.version))return!0}return!1}function Bs(t,e,n){var i;if(Ni(t),Jn(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)t.producerIndexOfThis[s]=Bs(t.producerNode[s],t,s)}return t.liveConsumerIndexOfThis.push(n),t.liveConsumerNode.push(e)-1}function ti(t,e){var n;if(Ni(t),Jn(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(n=t.unwatched)==null||n.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)ti(t.producerNode[s],t.producerIndexOfThis[s])}const i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const s=t.liveConsumerIndexOfThis[e],c=t.liveConsumerNode[e];Jn(c),c.producerIndexOfThis[s]=e}}function bi(t){var e;return t.consumerIsAlwaysLive||(((e=t==null?void 0:t.liveConsumerNode)==null?void 0:e.length)??0)>0}function Jn(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function Ni(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ws(t){if(js(t),ei(t),t.value===wi)throw t.error;return t.value}function ko(t){const e=Object.create(So);e.computation=t;const n=()=>Ws(e);return n[Gr]=e,n}const hi=Symbol("UNSET"),fi=Symbol("COMPUTING"),wi=Symbol("ERRORED"),So={...Di,value:hi,dirty:!0,error:null,equal:zs,producerMustRecompute(t){return t.value===hi||t.value===fi},producerRecomputeValue(t){if(t.value===fi)throw new Error("Detected cycle in computations.");const e=t.value;t.value=fi;const n=wo(t);let i,s=!1;try{i=t.computation.call(t.wrapper),s=e!==hi&&e!==wi&&t.equal.call(t.wrapper,e,i)}catch(c){i=wi,t.error=c}finally{Io(t,n)}if(s){t.value=e;return}t.value=i,t.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ao(){throw new Error}let _o=Ao;function Co(){_o()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Eo(t){const e=Object.create(Po);e.value=t;const n=()=>(ei(e),e.value);return n[Gr]=e,n}function Oo(){return ei(this),this.value}function To(t,e){yo()||Co(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,Ro(t))}const Po={...Di,equal:zs,value:void 0};function Ro(t){t.version++,vo(),Us(t)}/**
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
 */const At=Symbol("node");var cn;(t=>{var e,n,i,s;class c{constructor(x,I={}){Lr(this,n),pi(this,e);const C=Eo(x)[Gr];if(this[At]=C,C.wrapper=this,I){const v=I.equals;v&&(C.equal=v),C.watched=I[t.subtle.watched],C.unwatched=I[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Oo.call(this[At])}set(x){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(go())throw new Error("Writes to signals not permitted during Watcher callback");const I=this[At];To(I,x)}}e=At,n=new WeakSet,t.isState=h=>typeof h=="object"&&di(n,h),t.State=c;class a{constructor(x,I){Lr(this,s),pi(this,i);const C=ko(x)[Gr];if(C.consumerAllowSignalWrites=!0,this[At]=C,C.wrapper=this,I){const v=I.equals;v&&(C.equal=v),C.watched=I[t.subtle.watched],C.unwatched=I[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Ws(this[At])}}i=At,s=new WeakSet,t.isComputed=h=>typeof h=="object"&&di(s,h),t.Computed=a,(h=>{var x,I,k,C;function v(N){let B,L=null;try{L=Yn(null),B=N()}finally{Yn(L)}return B}h.untrack=v;function T(N){var B;if(!(0,t.isComputed)(N)&&!(0,t.isWatcher)(N))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((B=N[At].producerNode)==null?void 0:B.map(L=>L.wrapper))??[]}h.introspectSources=T;function q(N){var B;if(!(0,t.isComputed)(N)&&!(0,t.isState)(N))throw new TypeError("Called introspectSinks without a Signal argument");return((B=N[At].liveConsumerNode)==null?void 0:B.map(L=>L.wrapper))??[]}h.introspectSinks=q;function Y(N){if(!(0,t.isComputed)(N)&&!(0,t.isState)(N))throw new TypeError("Called hasSinks without a Signal argument");const B=N[At].liveConsumerNode;return B?B.length>0:!1}h.hasSinks=Y;function ve(N){if(!(0,t.isComputed)(N)&&!(0,t.isWatcher)(N))throw new TypeError("Called hasSources without a Computed or Watcher argument");const B=N[At].producerNode;return B?B.length>0:!1}h.hasSources=ve;class Oe{constructor(B){Lr(this,I),Lr(this,k),pi(this,x);let L=Object.create(Di);L.wrapper=this,L.consumerMarkedDirty=B,L.consumerIsAlwaysLive=!0,L.consumerAllowSignalWrites=!1,L.producerNode=[],this[At]=L}watch(...B){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ls(this,k,C).call(this,B);const L=this[At];L.dirty=!1;const y=Yn(L);for(const F of B)ei(F[At]);Yn(y)}unwatch(...B){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");ls(this,k,C).call(this,B);const L=this[At];Jn(L);for(let y=L.producerNode.length-1;y>=0;y--)if(B.includes(L.producerNode[y].wrapper)){ti(L.producerNode[y],L.producerIndexOfThis[y]);const F=L.producerNode.length-1;if(L.producerNode[y]=L.producerNode[F],L.producerIndexOfThis[y]=L.producerIndexOfThis[F],L.producerNode.length--,L.producerIndexOfThis.length--,L.nextProducerIndex--,y<L.producerNode.length){const j=L.producerIndexOfThis[y],se=L.producerNode[y];Ni(se),se.liveConsumerIndexOfThis[j]=y}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[At].producerNode.filter(L=>L.dirty).map(L=>L.wrapper)}}x=At,I=new WeakSet,k=new WeakSet,C=function(N){for(const B of N)if(!(0,t.isComputed)(B)&&!(0,t.isState)(B))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=N=>di(I,N),h.Watcher=Oe;function U(){var N;return(N=mo())==null?void 0:N.wrapper}h.currentComputed=U,h.watched=Symbol("watched"),h.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(cn||(cn={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=Symbol("SignalWatcherBrand"),Do=new FinalizationRegistry(({watcher:t,signal:e})=>{t.unwatch(e)}),cs=new WeakMap;function ni(t){return t[Lo]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new cn.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new cn.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new cn.subtle.Watcher(function(){const n=cs.get(this);n!==void 0&&(n._$Si===!1&&n.requestUpdate(),this.watch())});cs.set(e,this),Do.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(n=>n.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,n,i){this._$So=!0,super.requestUpdate(e,n,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(e){this._$Sh.add(e);const n=this._$So;this.requestUpdate(),this._$So=n}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */cn.State;cn.Computed;const jn=(t,e)=>new cn.State(t,e),No={},Me=jn(null),jr=jn(null),Ii=jn(null),Gs=jn(0),Ft=jn(void 0);jn({name:"",timestamp:0});class $o{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,Gs.set(this.updateCounter)}run(e,n){const i=this.createProgressMonitor(e);try{this.tasks.push(i),this.notifyUpdate(),n(i)}finally{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()}}async runAsync(e,n){const i=this.createProgressMonitor(e);return this.tasks.push(i),this.notifyUpdate(),n(i).finally(()=>{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()})}createProgressMonitor(e){const n={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(n,{set:(i,s,c)=>(i[s]=c,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const Zn=new $o;un.put("taskService",Zn);const xi="events/extensionsregistry/extensionsConfigChanged",Dr="extensions";class Mo{constructor(){this.extensions={},this.loadedExtensions=new Set,pn(Ri,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(()=>{var e;(e=this.extensionsSettings)==null||e.forEach(n=>{this.isEnabled(n.id)&&this.load(n.id).catch(i=>{Qe("Extension could not be loaded: "+i.message)})})})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await tn.get(Dr),this.extensionsSettings||(await tn.set(Dr,[]),this.extensionsSettings=await tn.get(Dr)),yn(xi,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e}getExtensions(){return Object.values(this.extensions)}isEnabled(e){var n;return this.checkExtensionsConfig(),!!((n=this.extensionsSettings)!=null&&n.find(i=>i.id===e&&i.enabled))}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,n=!1){this.isEnabled(e)||(bt.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,n)}).catch(i=>{bt.error(`Could not load extension: ${e}`)}))}async load(e){if(this.loadedExtensions.has(e))return;const n=this.extensions[e];if(!n)throw new Error("Extension not found: "+e);this.loadedExtensions.add(e);const i=await Zn.runAsync("Loading extension: "+n.name,()=>{if(n.loader)return n.loader();if(n.url)return import(n.url)});(i==null?void 0:i.default)instanceof Function&&(i==null||i.default(zn.getProxy()))}disable(e,n=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,n)}updateEnablement(e,n,i){this.checkExtensionsConfig().then(()=>{var c,a;const s=(c=this.extensionsSettings)==null?void 0:c.find(h=>h.id==e);s?s.enabled=n:(a=this.extensionsSettings)==null||a.push({id:e,enabled:n}),tn.set(Dr,this.extensionsSettings).then(()=>{if(i){const h=this.extensions[e];Vt(n?h.name+" enabled.":h.name+" disabled  - Please restart to take effect")}yn(xi,this.extensionsSettings)})})}}bt.debug("ExtensionRegistry initializing...");const rt=new Mo;un.put("extensionRegistry",rt);bt.debug("ExtensionRegistry initialized");const yr="events/contributionregistry/contributionsChanged";class Fo{constructor(){this.contributions=new Map}registerContribution(e,n){const i=this.getContributions(e);if(n.disabled instanceof Function){const s=n.disabled;n.disabled=new cn.Computed(s)}i.push(n),yn(yr,{target:e,contributions:i})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const ut=new Fo;un.put("contributionRegistry",ut);const Bt=Pi("AppLoader");class qo{constructor(){this.apps=new Map}registerApp(e){this.apps.has(e.id)&&Bt.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Bt.info(`Registered app: ${e.name} (${e.id}) v${e.version}`)}async loadApp(e,n){let i;if(typeof e=="string"){const s=this.apps.get(e);if(!s)throw new Error(`App '${e}' not found. Make sure it's registered.`);i=s}else i=e,this.registerApp(i);Bt.info(`Loading app: ${i.name}...`),this.currentApp&&(Bt.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Bt.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{rt.disable(s)}))),i.extensions&&(Bt.info(`Enabling ${i.extensions.length} extensions...`),i.extensions.forEach(s=>{rt.enable(s)})),i.contributions&&(Bt.info("Registering app contributions..."),i.contributions.ui&&(i.contributions.ui.forEach(s=>{const c=s.target;c&&ut.registerContribution(c,s)}),Bt.info(`Registered ${i.contributions.ui.length} UI contributions`)),i.contributions.extensions&&(i.contributions.extensions.forEach(s=>{rt.registerExtension(s)}),Bt.info(`Registered ${i.contributions.extensions.length} app extensions`))),i.initialize&&(Bt.info(`Initializing ${i.name}...`),await i.initialize()),this.currentApp=i,Bt.info(`App ${i.name} loaded successfully`),n&&this.renderApp(n)}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");vi(this.currentApp.render(),e),Bt.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}}const Vs=new qo;un.put("appLoaderService",Vs);const us="0.12.15";class zo{constructor(e,n,i,s,c){this.id=e,this.name=n,this.description=i,this.parameters=s||[],this.output=c||[]}}class Ks{async execute(e,n){return Ae.execute(e,n)}async undo(){}async redo(){}}class jo{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,n){this.handlers.has(e)||this.handlers.set(e,[]),this.handlers.get(e).push(n)}getHandler(e){return this.handlers.get(e)}createExecutionContext(e,n){return{source:e,params:n||{},activePart:Me.get(),activeEditor:jr.get()}}execute(e,n={}){const i=this.getHandler(e);if(!i)throw new Error(`No handlers registered for command: ${e}`);for(const s of i)if(s.canExecute===void 0||s.canExecute(n))return s.execute(n);bt.error(`No handler found to execute command: ${e}`)}createAndRegisterCommand(e,n,i,s,c){const a=new zo(e,n,i,s);this.registerCommand(a),c&&this.registerHandler(e,c)}registerCommand(e){this.commands[e.id]=e,bt.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(n=>(Ae.getHandler(n.id)||[]).some(s=>s.canExecute===void 0||s.canExecute(e))).reduce((n,i)=>(n[i.id]=i,n),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const n=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(n,e.handler),e.contribution&&e.contribution.target&&ut.registerContribution(e.contribution.target,{command:n,...e.contribution})}}const Ae=new jo;un.put("commandRegistry",Ae);const pt=t=>{Ae.registerAll(t)};class Uo{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Ae.listCommands();Object.values(e).forEach(n=>{n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)})}watchCommandRegistry(){const e=Ae.registerCommand.bind(Ae);Ae.registerCommand=n=>{e(n),n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const n=e.toUpperCase().split("+").map(a=>a.trim());if(n.length===0)return null;const i={ctrl:!1,alt:!1,shift:!1,meta:!1},s=n[n.length-1],c=n.slice(0,-1);for(const a of c)switch(a){case"CTRL":case"CONTROL":i.ctrl=!0;break;case"ALT":case"OPTION":i.alt=!0;break;case"SHIFT":i.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":i.meta=!0;break;default:bt.warn(`Unknown modifier: ${a}`)}return i.key=this.normalizeKey(s),i}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const n=[];return e.ctrl&&n.push("ctrl"),e.alt&&n.push("alt"),e.shift&&n.push("shift"),e.meta&&n.push("meta"),n.sort(),`${n.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,n){const i=this.parseKeyBinding(n);if(!i)return bt.error(`Invalid key binding: ${n}`),!1;i.commandId=e;const s=this.getBindingKey(i);this.bindings.has(s)||this.bindings.set(s,[]);const c=this.bindings.get(s);return c.find(h=>h.commandId===e)?(bt.error(`Key binding ${n} already registered for command ${e}`),!1):(c.push(i),bt.debug(`Key binding registered: ${n} -> ${e}`),!0)}unregisterKeyBinding(e,n){if(n){const i=this.parseKeyBinding(n);if(i){const s=this.getBindingKey(i),c=this.bindings.get(s);if(c){const a=c.filter(h=>h.commandId!==e);a.length===0?this.bindings.delete(s):this.bindings.set(s,a)}}}else for(const[i,s]of this.bindings.entries()){const c=s.filter(a=>a.commandId!==e);c.length===0?this.bindings.delete(i):this.bindings.set(i,c)}}getKeyBindingsForCommand(e){const n=[];for(const i of this.bindings.values())for(const s of i)s.commandId===e&&n.push(this.formatKeyBinding(s));return n}formatKeyBinding(e){const n=[];e.ctrl&&n.push("Ctrl"),e.alt&&n.push("Alt"),e.shift&&n.push("Shift"),e.meta&&n.push("Cmd");let i=e.key;return i.length===1?i=i.toUpperCase():i=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase(),n.push(i),n.join("+")}handleKeyDown(e){if(!this.enabled)return;const n=e.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)){const a=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&a==="P"))return}const i={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},s=this.getBindingKey(i),c=this.bindings.get(s);if(c&&c.length>0){const a=c[0];try{e.preventDefault(),e.stopPropagation();const h=Ae.createExecutionContext(this,{});Ae.execute(a.commandId,h),bt.info(`Executed command via key binding: ${a.commandId}`)}catch(h){bt.error(`Failed to execute command ${a.commandId}: ${h.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}bt.debug("KeyBindingManager initializing...");const Hs=new Uo;bt.debug("KeyBindingManager initialized");un.put("keyBindingManager",Hs);let lr=null;function Ys(){return lr||(lr=document.createElement("div"),lr.id="global-dialog-container",document.body.appendChild(lr)),lr}function Js(t){return new Promise(e=>{const n=Ys(),i=()=>{vi(Q``,n)},s=()=>{i(),e(t.confirmValue)},c=()=>{i(),e(t.cancelValue)},a=Q`
            <wa-dialog label="${t.title}" open @wa-request-close=${c}>
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
                    
                    .dialog-actions {
                        display: flex;
                        gap: 0.5rem;
                        justify-content: flex-end;
                        margin-top: 0.5rem;
                    }
                </style>
                
                <div class="dialog-content">
                    ${t.renderContent({onConfirm:s,onCancel:c})}
                </div>
            </wa-dialog>
        `;vi(a,n),t.onAfterRender&&requestAnimationFrame(t.onAfterRender)})}const br=async(t,e="")=>{let n=e;return Js({title:"Input",message:t,confirmValue:n,cancelValue:null,renderContent:({onConfirm:i,onCancel:s})=>Q`
                <div class="dialog-message">${t}</div>
                <wa-input
                    value="${e}"
                    @input=${h=>{n=h.target.value}}
                    @keydown=${h=>{h.key==="Enter"?(h.preventDefault(),i()):h.key==="Escape"&&(h.preventDefault(),s())}}
                    autofocus
                ></wa-input>
                
                <div class="dialog-actions">
                    <wa-button variant="default" @click=${s}>
                        Cancel
                    </wa-button>
                    <wa-button variant="primary" @click=${()=>{i()}}>
                        OK
                    </wa-button>
                </div>
            `,onAfterRender:()=>{var c;const s=Ys().querySelector("wa-input");if(s){const a=(c=s.shadowRoot)==null?void 0:c.querySelector("input");a&&(a.focus(),a.select())}}}).then(()=>n)},wr=async t=>Js({title:"Confirm",message:t,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:e,onCancel:n})=>Q`
            <div class="dialog-message">${t}</div>
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${n}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${e}>
                    OK
                </wa-button>
            </div>
        `});zn.put("promptDialog",br);zn.put("confirmDialog",wr);const Zs=(t,e)=>{const n=new cn.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{n.watch()}});n.watch(t)},ri=t=>function(e,n,i){const s=i.value;return s.signal=t,i};Object.defineProperty(Rs.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Ir extends Rs{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(n=>{const i=e[n];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"topic"in s&&this.subscribe(s.topic,s)}}),Object.getOwnPropertyNames(e).forEach(n=>{const i=e[n];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"signal"in s&&this.watch(s.signal,s)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,n){pn(e,n.bind(this))}showInfo(e){Vt(e)}showError(e){Qe(e)}nobubble(e){return n=>{n.stopPropagation(),e.bind(this)(n)}}command(e,n={}){return()=>{this.executeCommand(e,n)}}executeCommand(e,n){const i=Ae.createExecutionContext(this,n);Ae.execute(e,i)}watch(e,n){Zs(e,n.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}class Un extends Ir{}var Bo=Object.getOwnPropertyDescriptor,Wo=(t,e,n,i)=>{for(var s=i>1?void 0:i?Bo(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=a(s)||s);return s};let ki=class extends Un{render(){return Q`
            <slot></slot>
        `}};ki.styles=Rt`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;ki=Wo([ht("k-app")],ki);var Go=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,xr=(t,e,n,i)=>{for(var s=i>1?void 0:i?Vo(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Go(e,n,s),s};let $n=class extends ni(Un){constructor(){super(...arguments),this.position="start",this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),pn(yr,e=>{if(!t)return;const n=t.includes(":")?t.split(":")[0]+":*":null;(e.target===t||e.target===n)&&(this.loadContributions(t),this.requestUpdate())})}loadContributions(t){const e=ut.getContributions(t);if(t.includes(":")){const n=t.split(":")[0]+":*",i=ut.getContributions(n);this.contributions=[...i,...e]}else this.contributions=e}contributionCreator(t){var e;if("command"in t){const n=t;return Q`
                <wa-button @click=${()=>this.executeCommand(n.command,n.params||{})}
                           title=${n.label}
                           ?disabled="${(e=n.disabled)==null?void 0:e.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${n.icon} label="${n.label}"></wa-icon>
                </wa-button>
            `}else if("html"in t){const n=t.html;return n instanceof Function?n():Xr(n)}else return Q`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return Q`
            <div class="toolbar-items" style=${za({"justify-content":this.position})}>
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
        `}};$n.styles=Rt`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;xr([Ue()],$n.prototype,"position",2);xr([Ue({attribute:!1})],$n.prototype,"partToolbarContent",2);xr([Ue({attribute:!1})],$n.prototype,"partToolbarRenderer",2);xr([ft()],$n.prototype,"contributions",2);$n=xr([ht("k-toolbar")],$n);var Ko=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,kr=(t,e,n,i)=>{for(var s=i>1?void 0:i?Ho(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Ko(e,n,s),s};let Mn=class extends ni(Un){constructor(){super(...arguments),this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Dn(),this.dropdownRef=Dn()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),pn(yr,e=>{if(!t)return;const n=t.includes(":")?t.split(":")[0]+":*":null;(e.target===t||e.target===n)&&(this.loadContributions(t),this.requestUpdate())})}loadContributions(t){const e=ut.getContributions(t);if(t.includes(":")){const n=t.split(":")[0]+":*",i=ut.getContributions(n);this.contributions=[...i,...e]}else this.contributions=e}show(t){this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){var e;if("command"in t){const n=t;return Q`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(n.command,n.params)}
                    ?disabled="${(e=n.disabled)==null?void 0:e.get()}">
                    ${n.icon?Q`<wa-icon slot="icon" name=${n.icon}></wa-icon>`:""}
                    ${n.label}
                </wa-dropdown-item>
            `}else if("html"in t){const n=t.html;return n instanceof Function?n():Xr(n)}return Pt}render(){if(!this.isOpen)return Pt;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():Pt;return Q`
            <wa-dropdown 
                ${Nn(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${Nn(this.anchorRef)}
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
        `}};Mn.styles=Rt`
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
    `;kr([Ue({attribute:!1})],Mn.prototype,"partContextMenuRenderer",2);kr([ft()],Mn.prototype,"contributions",2);kr([ft()],Mn.prototype,"isOpen",2);kr([ft()],Mn.prototype,"position",2);Mn=kr([ht("k-contextmenu")],Mn);class $i extends Un{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=(t,e,n)=>{const i=new Map;for(let s=e;s<=n;s++)i.set(t[s],s);return i},Yo=Ls(class extends Ds{constructor(t){if(super(t),t.type!==ja.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const s=[],c=[];let a=0;for(const h of t)s[a]=i?i(h,a):a,c[a]=n(h,a),a++;return{values:c,keys:s}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,i]){const s=Ua(t),{values:c,keys:a}=this.dt(e,n,i);if(!Array.isArray(s))return this.ut=a,c;const h=this.ut??(this.ut=[]),x=[];let I,k,C=0,v=s.length-1,T=0,q=c.length-1;for(;C<=v&&T<=q;)if(s[C]===null)C++;else if(s[v]===null)v--;else if(h[C]===a[T])x[T]=Pn(s[C],c[T]),C++,T++;else if(h[v]===a[q])x[q]=Pn(s[v],c[q]),v--,q--;else if(h[C]===a[q])x[q]=Pn(s[C],c[q]),ar(t,x[q+1],s[C]),C++,q--;else if(h[v]===a[T])x[T]=Pn(s[v],c[T]),ar(t,s[C],s[v]),v--,T++;else if(I===void 0&&(I=ps(a,T,q),k=ps(h,C,v)),I.has(h[C]))if(I.has(h[v])){const Y=k.get(a[T]),ve=Y!==void 0?s[Y]:null;if(ve===null){const Oe=ar(t,s[C]);Pn(Oe,c[T]),x[T]=Oe}else x[T]=Pn(ve,c[T]),ar(t,s[C],ve),s[Y]=null;T++}else ui(s[v]),v--;else ui(s[C]),C++;for(;T<=q;){const Y=ar(t,x[q+1]);Pn(Y,c[T]),x[T++]=Y}for(;C<=v;){const Y=s[C++];Y!==null&&ui(Y)}return this.ut=a,Ns(t,x),Ba}});var Jo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Sr=(t,e,n,i)=>{for(var s=i>1?void 0:i?Zo(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Jo(e,n,s),s};let Fn=class extends Ir{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),n=t.pop();return Q`
            <wa-icon library="${n||Pt}" variant="${this.variant||Pt}"
                         family="${this.family||Pt}" name=${e} label="${this.label||this.name||Pt}"></wa-icon>`}};Fn.styles=Rt`
        :host {
            display: contents;
        }
    `;Sr([Ue()],Fn.prototype,"name",2);Sr([Ue()],Fn.prototype,"family",2);Sr([Ue()],Fn.prototype,"variant",2);Sr([Ue()],Fn.prototype,"label",2);Fn=Sr([ht("k-icon")],Fn);var Qo=Object.defineProperty,Xo=(t,e,n,i)=>{for(var s=void 0,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=a(e,n,s)||s);return s&&Qo(e,n,s),s};class _t extends $i{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return Pt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return Pt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Ii.set(null),Ii.set(this),Me.set(null),Me.set(this)}}Xo([Ue()],_t.prototype,"dirty");const Mi="app-toolbars-main",nr="app-toolbars-main-right",el="app-toolbars-main-center",Qs="app-toolbars-bottom",Fi="app-toolbars-bottom-center",Xs="app-toolbars-bottom-end",Vr="editor-area-main",Si="sidebar-main",ea="sidebar-main-bottom",ta="sidebar-auxiliary",na="panel-bottom";var ra=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(ra||{}),tl=Object.defineProperty,nl=Object.getOwnPropertyDescriptor,ia=(t,e,n,i)=>{for(var s=i>1?void 0:i?nl(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&tl(e,n,s),s};let Kr=class extends $i{constructor(){super(...arguments),this.contributions=[],this.tabGroup=Dn(),this.containerId=null}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateToolbarFromComponent(n)}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,n=e.closest("wa-tab");if(n){const a=n.getAttribute("panel");if(a){const h=this.getTabPanel(a);if(h){const x=h.querySelector(".tab-content");if(x&&x.firstElementChild){const I=x.firstElementChild;I instanceof _t&&Me.set(I)}}}return}const i=e.closest("wa-scroller.tab-content");if(!i)return;const s=i.closest("wa-tab-panel");if(!s)return;const c=s.querySelector(".tab-content");if(c&&c.firstElementChild){const a=c.firstElementChild;a instanceof _t&&Me.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,n=e.target.closest("wa-scroller.tab-content");if(!n)return;e.preventDefault();const i=n.closest("wa-tab-panel");if(!i)return;const s=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,button:0});e.target.dispatchEvent(s),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const c=i.querySelector("k-contextmenu");c&&c.show({x:e.clientX,y:e.clientY})})}))}),pn(yr,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===Vr;this.contributions.forEach(n=>{const i=this.getTabPanel(n.name);if(!i)return;const s=i.querySelector(".tab-content");if(s&&s.firstElementChild){const c=s.firstElementChild;c instanceof _t&&(c.tabContribution=n,c.isEditor=e)}})}}has(t){return!!this.getTabPanel(t)}activate(t){this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(t){if(this.contributions.find(n=>n.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const n=this.getTabPanel(t.name);if(n){const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const s=i.firstElementChild;s instanceof _t&&(s.tabContribution=t,s.isEditor=this.containerId===Vr)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(n)})}})}handleTabAuxClick(t,e){t.button===ra.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await wr("Unsaved changes will be lost: Do you really want to close?"))return;const n=this.getTabPanel(e);if(!n)return;const i=this.contributions.find(c=>c.name===e);if(!i)return;this.cleanupTabInstance(n);const s=this.contributions.indexOf(i);s>-1&&this.contributions.splice(s,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:n})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=ut.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=t.querySelector(".tab-content");if(e&&e.firstElementChild){const n=e.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`)}getTab(t){return this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`)}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof _t)||!n.renderToolbar)return;const i=t.querySelector("k-toolbar");i&&(i.partToolbarRenderer=()=>n.renderToolbar(),i.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof _t)||!n.renderContextMenu)return;const i=t.querySelector("k-contextmenu");i&&(i.partContextMenuRenderer=()=>n.renderContextMenu(),i.requestUpdate())}render(){return Q`
            <wa-tab-group ${Nn(this.tabGroup)}>
                ${Yo(this.contributions,t=>t.name,t=>Q`
                        <wa-tab panel="${t.name}"
                                @auxclick="${e=>this.handleTabAuxClick(e,t)}">
                            <k-icon name="${t.icon}"></k-icon>
                            ${t.label}
                            ${ln(t.closable,()=>Q`
                                <wa-icon name="xmark" label="Close"  @click="${e=>this.closeTab(e,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            <k-toolbar id="toolbar:${t.editorId??t.name}" class="tab-toolbar"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${t.component?t.component(t.name):Pt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu:${t.name}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};Kr.styles=Rt`
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
    `;ia([ft()],Kr.prototype,"contributions",2);Kr=ia([ht("k-tabs")],Kr);var rl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,Ar=(t,e,n,i)=>{for(var s=i>1?void 0:i?il(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&rl(e,n,s),s};let Qn=class extends Un{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.handleResize=t=>{if(!this.resizing)return;const n=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,i=[...this.resizing.startSizes];i[this.resizing.handleIndex]+=n,i[this.resizing.handleIndex+1]-=n;const s=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,c=s*.05;if(i[this.resizing.handleIndex]>=c&&i[this.resizing.handleIndex+1]>=c){this.resizing.currentSizes=i;const a=i.map((h,x)=>{const k=`${(h/s*100).toFixed(2)}%`;return x===i.length-1?k:`${k} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=()=>{var t;if((t=this.resizing)!=null&&t.currentSizes){const e=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(n=>`${(n/e*100).toFixed(2)}%`),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,n)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${n*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${n*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const n=this.orientation==="horizontal"?t.clientX:t.clientY,i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=this.gridSizes.map(c=>c.endsWith("%")?parseFloat(c)/100*i:(c.endsWith("px"),parseFloat(c)));this.resizing={handleIndex:e,startPos:n,startSizes:s},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return Pt;const t=this.gridSizes.flatMap((e,n)=>n===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",Q`
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
            
            ${this.gridChildren.map((e,n)=>{if(n<this.gridChildren.length-1){const i=this.orientation==="horizontal"?`${n*2+2}`:"1",s=this.orientation==="vertical"?`${n*2+2}`:"1";return Q`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${i};
                                grid-row: ${s};
                            "
                            @mousedown=${c=>this.startResize(c,n)}
                        ></div>
                    `}return Pt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Ar([Ue()],Qn.prototype,"orientation",2);Ar([Ue()],Qn.prototype,"sizes",2);Ar([ft()],Qn.prototype,"gridSizes",2);Ar([ft()],Qn.prototype,"gridChildren",2);Qn=Ar([ht("k-resizable-grid")],Qn);const sl=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var al=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,ii=(t,e,n,i)=>{for(var s=i>1?void 0:i?ol(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&al(e,n,s),s};let Xn=class extends _t{constructor(){super(...arguments),this.treeRef=Dn()}doBeforeUI(){this.initializeWorkspace()}async initializeWorkspace(){const t=await Mt.getWorkspace();t?await this.loadWorkspace(t):Ae.execute("help")}renderToolbar(){const t=Ft.get()instanceof rs;return Q`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const t=Ft.get()instanceof rs;return Q`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>Delete</k-command>
        `}async onWorkspaceChanged(t){Ft.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t):this.root=void 0}async syncTreeSelection(){var n,i;await this.updateComplete;const t=(n=this.treeRef.value)==null?void 0:n.querySelector("wa-tree"),e=(t==null?void 0:t.selectedItems)||[];e.length>0&&Ft.set((i=e[0].model)==null?void 0:i.data)}async resourceToTreeNode(t){const e=t instanceof Br,n={data:t,label:t.getName(),icon:e?"file":"folder-open",leaf:e,children:[]};if(t instanceof Wa){for(const i of await t.listChildren(!0)){const s=await this.resourceToTreeNode(i);n.children.push(s)}n.children.sort(sl)}return n}createTreeItems(t,e=!1){return t?Q`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${t} ?expanded=${e}>
                <span><wa-icon name=${t.icon} label="${t.leaf?"File":"Folder"}"></wa-icon> ${t.label}</span>
                ${t.children.map(n=>this.createTreeItems(n))}
            </wa-tree-item>`:Q``}async onFileDoubleClicked(t){const n=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:n})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const n=e[0].model;Ft.set(n.data)}else Ft.set(void 0)}render(){return Q`
            <div class="tree" ${Nn(this.treeRef)}>
                ${ln(!this.workspaceDir,()=>Q`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>Q`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};Xn.styles=Rt`
        :host {
        }
    `;ii([ft()],Xn.prototype,"root",2);ii([Oi(dr)],Xn.prototype,"onWorkspaceChanged",1);ii([Oi(Ti)],Xn.prototype,"onWorkspaceConnected",1);Xn=ii([ht("k-filebrowser")],Xn);var ll=Object.getOwnPropertyDescriptor,cl=(t,e,n,i)=>{for(var s=i>1?void 0:i?ll(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=a(s)||s);return s};ut.registerContribution(Fi,{html:"<k-tasks></k-tasks>"});let Ai=class extends ni(_t){render(){Gs.get();const t=Zn.getActiveTasks().length;if(t!=0)return Q`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${t}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${t}
                </wa-button>
                ${Zn.getActiveTasks().map(e=>{const n=e.progress>=0||e.totalSteps>0,i=e.progress>=0?e.progress:e.totalSteps>0?Math.round(e.currentStep/e.totalSteps*100):0,s=e.progress<0&&e.totalSteps>0;return Q`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${e.name}</strong>: ${e.message}
                            </div>
                            ${n?Q`
                                <wa-progress-bar value="${i}" style="--track-height: 1.25rem;">
                                    ${s?`${e.currentStep}/${e.totalSteps} - `:""}${i}%
                                </wa-progress-bar>
                            `:Q`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};Ai.styles=Rt`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;Ai=cl([ht("k-tasks")],Ai);var ul=Object.getOwnPropertyDescriptor,pl=(t,e,n,i)=>{for(var s=i>1?void 0:i?ul(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=a(s)||s);return s};const ds="<no workspace>";let hs=class extends Un{constructor(){super(...arguments),this.workspaceName=ds}doInitUI(){this.updateWorkspaceName(),pn(Ti,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Mt.getWorkspace().then(t=>{this.workspaceName=(t==null?void 0:t.getName())||ds,this.requestUpdate()})}handleLoadWorkspace(){Ae.execute("load_workspace",{source:this})}render(){return Q`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};hs=pl([ht("k-workspace-name")],hs);var dl=Object.getOwnPropertyDescriptor,hl=(t,e,n,i)=>{for(var s=i>1?void 0:i?dl(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=a(s)||s);return s};const fs="<no part>";ut.registerContribution(Fi,{html:"<k-part-name></k-part-name>"});let ms=class extends ni(Un){getPartName(){var e;const t=Me.get();return t&&(((e=t.tabContribution)==null?void 0:e.label)||t.getAttribute("id"))||fs}render(){var n;const t=Me.get(),e=((n=t==null?void 0:t.tabContribution)==null?void 0:n.icon)||"box";return Q`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};ms=hl([ht("k-part-name")],ms);function qi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Bn=qi();function sa(t){Bn=t}const mr={exec:()=>null};function Be(t,e=""){let n=typeof t=="string"?t:t.source;const i={replace:(s,c)=>{let a=typeof c=="string"?c:c.source;return a=a.replace(Dt.caret,"$1"),n=n.replace(s,a),i},getRegex:()=>new RegExp(n,e)};return i}const Dt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},fl=/^(?:[ \t]*(?:\n|$))+/,ml=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,gl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_r=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,vl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,zi=/(?:[*+-]|\d{1,9}[.)])/,aa=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,oa=Be(aa).replace(/bull/g,zi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),yl=Be(aa).replace(/bull/g,zi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ji=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,bl=/^[^\n]+/,Ui=/(?!\s*\])(?:\\.|[^\[\]\\])+/,wl=Be(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ui).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Il=Be(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,zi).getRegex(),si="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Bi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,xl=Be("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Bi).replace("tag",si).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),la=Be(ji).replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",si).getRegex(),kl=Be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",la).getRegex(),Wi={blockquote:kl,code:ml,def:wl,fences:gl,heading:vl,hr:_r,html:xl,lheading:oa,list:Il,newline:fl,paragraph:la,table:mr,text:bl},gs=Be("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",si).getRegex(),Sl={...Wi,lheading:yl,table:gs,paragraph:Be(ji).replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",gs).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",si).getRegex()},Al={...Wi,html:Be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Bi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:mr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Be(ji).replace("hr",_r).replace("heading",` *#{1,6} *[^
]`).replace("lheading",oa).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},_l=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Cl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ca=/^( {2,}|\\)\n(?!\s*$)/,El=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ai=/[\p{P}\p{S}]/u,Gi=/[\s\p{P}\p{S}]/u,ua=/[^\s\p{P}\p{S}]/u,Ol=Be(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Gi).getRegex(),pa=/(?!~)[\p{P}\p{S}]/u,Tl=/(?!~)[\s\p{P}\p{S}]/u,Pl=/(?:[^\s\p{P}\p{S}]|~)/u,Rl=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,da=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ll=Be(da,"u").replace(/punct/g,ai).getRegex(),Dl=Be(da,"u").replace(/punct/g,pa).getRegex(),ha="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Nl=Be(ha,"gu").replace(/notPunctSpace/g,ua).replace(/punctSpace/g,Gi).replace(/punct/g,ai).getRegex(),$l=Be(ha,"gu").replace(/notPunctSpace/g,Pl).replace(/punctSpace/g,Tl).replace(/punct/g,pa).getRegex(),Ml=Be("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ua).replace(/punctSpace/g,Gi).replace(/punct/g,ai).getRegex(),Fl=Be(/\\(punct)/,"gu").replace(/punct/g,ai).getRegex(),ql=Be(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),zl=Be(Bi).replace("(?:-->|$)","-->").getRegex(),jl=Be("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",zl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Hr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ul=Be(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Hr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fa=Be(/^!?\[(label)\]\[(ref)\]/).replace("label",Hr).replace("ref",Ui).getRegex(),ma=Be(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ui).getRegex(),Bl=Be("reflink|nolink(?!\\()","g").replace("reflink",fa).replace("nolink",ma).getRegex(),Vi={_backpedal:mr,anyPunctuation:Fl,autolink:ql,blockSkip:Rl,br:ca,code:Cl,del:mr,emStrongLDelim:Ll,emStrongRDelimAst:Nl,emStrongRDelimUnd:Ml,escape:_l,link:Ul,nolink:ma,punctuation:Ol,reflink:fa,reflinkSearch:Bl,tag:jl,text:El,url:mr},Wl={...Vi,link:Be(/^!?\[(label)\]\((.*?)\)/).replace("label",Hr).getRegex(),reflink:Be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Hr).getRegex()},_i={...Vi,emStrongRDelimAst:$l,emStrongLDelim:Dl,url:Be(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Gl={..._i,br:Be(ca).replace("{2,}","*").getRegex(),text:Be(_i.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Nr={normal:Wi,gfm:Sl,pedantic:Al},cr={normal:Vi,gfm:_i,breaks:Gl,pedantic:Wl},Vl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vs=t=>Vl[t];function on(t,e){if(e){if(Dt.escapeTest.test(t))return t.replace(Dt.escapeReplace,vs)}else if(Dt.escapeTestNoEncode.test(t))return t.replace(Dt.escapeReplaceNoEncode,vs);return t}function ys(t){try{t=encodeURI(t).replace(Dt.percentDecode,"%")}catch{return null}return t}function bs(t,e){var c;const n=t.replace(Dt.findPipe,(a,h,x)=>{let I=!1,k=h;for(;--k>=0&&x[k]==="\\";)I=!I;return I?"|":" |"}),i=n.split(Dt.splitPipe);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!((c=i.at(-1))!=null&&c.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(Dt.slashPipe,"|");return i}function ur(t,e,n){const i=t.length;if(i===0)return"";let s=0;for(;s<i&&t.charAt(i-s-1)===e;)s++;return t.slice(0,i-s)}function Kl(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return n>0?-2:-1}function ws(t,e,n,i,s){const c=e.href,a=e.title||null,h=t[1].replace(s.other.outputLinkReplace,"$1");i.state.inLink=!0;const x={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:c,title:a,text:h,tokens:i.inlineTokens(h)};return i.state.inLink=!1,x}function Hl(t,e,n){const i=t.match(n.other.indentCodeCompensation);if(i===null)return e;const s=i[1];return e.split(`
`).map(c=>{const a=c.match(n.other.beginningSpace);if(a===null)return c;const[h]=a;return h.length>=s.length?c.slice(s.length):c}).join(`
`)}class Yr{constructor(e){Je(this,"options");Je(this,"rules");Je(this,"lexer");this.options=e||Bn}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:ur(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],s=Hl(i,n[3]||"",this.rules);return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(this.rules.other.endingHash.test(i)){const s=ur(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ur(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let i=ur(n[0],`
`).split(`
`),s="",c="";const a=[];for(;i.length>0;){let h=!1;const x=[];let I;for(I=0;I<i.length;I++)if(this.rules.other.blockquoteStart.test(i[I]))x.push(i[I]),h=!0;else if(!h)x.push(i[I]);else break;i=i.slice(I);const k=x.join(`
`),C=k.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${k}`:k,c=c?`${c}
${C}`:C;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(C,a,!0),this.lexer.state.top=v,i.length===0)break;const T=a.at(-1);if((T==null?void 0:T.type)==="code")break;if((T==null?void 0:T.type)==="blockquote"){const q=T,Y=q.raw+`
`+i.join(`
`),ve=this.blockquote(Y);a[a.length-1]=ve,s=s.substring(0,s.length-q.raw.length)+ve.raw,c=c.substring(0,c.length-q.text.length)+ve.text;break}else if((T==null?void 0:T.type)==="list"){const q=T,Y=q.raw+`
`+i.join(`
`),ve=this.list(Y);a[a.length-1]=ve,s=s.substring(0,s.length-T.raw.length)+ve.raw,c=c.substring(0,c.length-q.raw.length)+ve.raw,i=Y.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:a,text:c}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i=n[1].trim();const s=i.length>1,c={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");const a=this.rules.other.listItemRegex(i);let h=!1;for(;e;){let I=!1,k="",C="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;k=n[0],e=e.substring(k.length);let v=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,U=>" ".repeat(3*U.length)),T=e.split(`
`,1)[0],q=!v.trim(),Y=0;if(this.options.pedantic?(Y=2,C=v.trimStart()):q?Y=n[1].length+1:(Y=n[2].search(this.rules.other.nonSpaceChar),Y=Y>4?1:Y,C=v.slice(Y),Y+=n[1].length),q&&this.rules.other.blankLine.test(T)&&(k+=T+`
`,e=e.substring(T.length+1),I=!0),!I){const U=this.rules.other.nextBulletRegex(Y),N=this.rules.other.hrRegex(Y),B=this.rules.other.fencesBeginRegex(Y),L=this.rules.other.headingBeginRegex(Y),y=this.rules.other.htmlBeginRegex(Y);for(;e;){const F=e.split(`
`,1)[0];let j;if(T=F,this.options.pedantic?(T=T.replace(this.rules.other.listReplaceNesting,"  "),j=T):j=T.replace(this.rules.other.tabCharGlobal,"    "),B.test(T)||L.test(T)||y.test(T)||U.test(T)||N.test(T))break;if(j.search(this.rules.other.nonSpaceChar)>=Y||!T.trim())C+=`
`+j.slice(Y);else{if(q||v.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(v)||L.test(v)||N.test(v))break;C+=`
`+T}!q&&!T.trim()&&(q=!0),k+=F+`
`,e=e.substring(F.length+1),v=j.slice(Y)}}c.loose||(h?c.loose=!0:this.rules.other.doubleBlankLine.test(k)&&(h=!0));let ve=null,Oe;this.options.gfm&&(ve=this.rules.other.listIsTask.exec(C),ve&&(Oe=ve[0]!=="[ ] ",C=C.replace(this.rules.other.listReplaceTask,""))),c.items.push({type:"list_item",raw:k,task:!!ve,checked:Oe,loose:!1,text:C,tokens:[]}),c.raw+=k}const x=c.items.at(-1);if(x)x.raw=x.raw.trimEnd(),x.text=x.text.trimEnd();else return;c.raw=c.raw.trimEnd();for(let I=0;I<c.items.length;I++)if(this.lexer.state.top=!1,c.items[I].tokens=this.lexer.blockTokens(c.items[I].text,[]),!c.loose){const k=c.items[I].tokens.filter(v=>v.type==="space"),C=k.length>0&&k.some(v=>this.rules.other.anyLine.test(v.raw));c.loose=C}if(c.loose)for(let I=0;I<c.items.length;I++)c.items[I].loose=!0;return c}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",c=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:s,title:c}}}table(e){var h;const n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;const i=bs(n[1]),s=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),c=(h=n[3])!=null&&h.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(i.length===s.length){for(const x of s)this.rules.other.tableAlignRight.test(x)?a.align.push("right"):this.rules.other.tableAlignCenter.test(x)?a.align.push("center"):this.rules.other.tableAlignLeft.test(x)?a.align.push("left"):a.align.push(null);for(let x=0;x<i.length;x++)a.header.push({text:i[x],tokens:this.lexer.inline(i[x]),header:!0,align:a.align[x]});for(const x of c)a.rows.push(bs(x,a.header.length).map((I,k)=>({text:I,tokens:this.lexer.inline(I),header:!1,align:a.align[k]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;const a=ur(i.slice(0,-1),"\\");if((i.length-a.length)%2===0)return}else{const a=Kl(n[2],"()");if(a===-2)return;if(a>-1){const x=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,x).trim(),n[3]=""}}let s=n[2],c="";if(this.options.pedantic){const a=this.rules.other.pedanticHrefTitle.exec(s);a&&(s=a[1],c=a[3])}else c=n[3]?n[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),ws(n,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=n[s.toLowerCase()];if(!c){const a=i[0].charAt(0);return{type:"text",raw:a,text:a}}return ws(i,c,i[0],this.lexer,this.rules)}}emStrong(e,n,i=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const a=[...s[0]].length-1;let h,x,I=a,k=0;const C=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(C.lastIndex=0,n=n.slice(-1*e.length+a);(s=C.exec(n))!=null;){if(h=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!h)continue;if(x=[...h].length,s[3]||s[4]){I+=x;continue}else if((s[5]||s[6])&&a%3&&!((a+x)%3)){k+=x;continue}if(I-=x,I>0)continue;x=Math.min(x,x+I+k);const v=[...s[0]][0].length,T=e.slice(0,a+s.index+v+x);if(Math.min(a,x)%2){const Y=T.slice(1,-1);return{type:"em",raw:T,text:Y,tokens:this.lexer.inlineTokens(Y)}}const q=T.slice(2,-2);return{type:"strong",raw:T,text:q,tokens:this.lexer.inlineTokens(q)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(i),c=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&c&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=n[1],s="mailto:"+i):(i=n[1],s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let n;if(n=this.rules.inline.url.exec(e)){let s,c;if(n[2]==="@")s=n[0],c="mailto:"+s;else{let a;do a=n[0],n[0]=((i=this.rules.inline._backpedal.exec(n[0]))==null?void 0:i[0])??"";while(a!==n[0]);s=n[0],n[1]==="www."?c="http://"+n[0]:c=n[0]}return{type:"link",raw:n[0],text:s,href:c,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){const i=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:i}}}}class Wt{constructor(e){Je(this,"tokens");Je(this,"options");Je(this,"state");Je(this,"tokenizer");Je(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Bn,this.options.tokenizer=this.options.tokenizer||new Yr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Dt,block:Nr.normal,inline:cr.normal};this.options.pedantic?(n.block=Nr.pedantic,n.inline=cr.pedantic):this.options.gfm&&(n.block=Nr.gfm,this.options.breaks?n.inline=cr.breaks:n.inline=cr.gfm),this.tokenizer.rules=n}static get rules(){return{block:Nr,inline:cr}}static lex(e,n){return new Wt(n).lex(e)}static lexInline(e,n){return new Wt(n).inlineTokens(e)}lex(e){e=e.replace(Dt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){var s,c,a;for(this.options.pedantic&&(e=e.replace(Dt.tabCharGlobal,"    ").replace(Dt.spaceLine,""));e;){let h;if((c=(s=this.options.extensions)==null?void 0:s.block)!=null&&c.some(I=>(h=I.call({lexer:this},e,n))?(e=e.substring(h.raw.length),n.push(h),!0):!1))continue;if(h=this.tokenizer.space(e)){e=e.substring(h.raw.length);const I=n.at(-1);h.raw.length===1&&I!==void 0?I.raw+=`
`:n.push(h);continue}if(h=this.tokenizer.code(e)){e=e.substring(h.raw.length);const I=n.at(-1);(I==null?void 0:I.type)==="paragraph"||(I==null?void 0:I.type)==="text"?(I.raw+=`
`+h.raw,I.text+=`
`+h.text,this.inlineQueue.at(-1).src=I.text):n.push(h);continue}if(h=this.tokenizer.fences(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.heading(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.hr(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.blockquote(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.list(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.html(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.def(e)){e=e.substring(h.raw.length);const I=n.at(-1);(I==null?void 0:I.type)==="paragraph"||(I==null?void 0:I.type)==="text"?(I.raw+=`
`+h.raw,I.text+=`
`+h.raw,this.inlineQueue.at(-1).src=I.text):this.tokens.links[h.tag]||(this.tokens.links[h.tag]={href:h.href,title:h.title});continue}if(h=this.tokenizer.table(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.lheading(e)){e=e.substring(h.raw.length),n.push(h);continue}let x=e;if((a=this.options.extensions)!=null&&a.startBlock){let I=1/0;const k=e.slice(1);let C;this.options.extensions.startBlock.forEach(v=>{C=v.call({lexer:this},k),typeof C=="number"&&C>=0&&(I=Math.min(I,C))}),I<1/0&&I>=0&&(x=e.substring(0,I+1))}if(this.state.top&&(h=this.tokenizer.paragraph(x))){const I=n.at(-1);i&&(I==null?void 0:I.type)==="paragraph"?(I.raw+=`
`+h.raw,I.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=I.text):n.push(h),i=x.length!==e.length,e=e.substring(h.raw.length);continue}if(h=this.tokenizer.text(e)){e=e.substring(h.raw.length);const I=n.at(-1);(I==null?void 0:I.type)==="text"?(I.raw+=`
`+h.raw,I.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=I.text):n.push(h);continue}if(e){const I="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(I);break}else throw new Error(I)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var h,x,I;let i=e,s=null;if(this.tokens.links){const k=Object.keys(this.tokens.links);if(k.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)k.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let c=!1,a="";for(;e;){c||(a=""),c=!1;let k;if((x=(h=this.options.extensions)==null?void 0:h.inline)!=null&&x.some(v=>(k=v.call({lexer:this},e,n))?(e=e.substring(k.raw.length),n.push(k),!0):!1))continue;if(k=this.tokenizer.escape(e)){e=e.substring(k.raw.length),n.push(k);continue}if(k=this.tokenizer.tag(e)){e=e.substring(k.raw.length),n.push(k);continue}if(k=this.tokenizer.link(e)){e=e.substring(k.raw.length),n.push(k);continue}if(k=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(k.raw.length);const v=n.at(-1);k.type==="text"&&(v==null?void 0:v.type)==="text"?(v.raw+=k.raw,v.text+=k.text):n.push(k);continue}if(k=this.tokenizer.emStrong(e,i,a)){e=e.substring(k.raw.length),n.push(k);continue}if(k=this.tokenizer.codespan(e)){e=e.substring(k.raw.length),n.push(k);continue}if(k=this.tokenizer.br(e)){e=e.substring(k.raw.length),n.push(k);continue}if(k=this.tokenizer.del(e)){e=e.substring(k.raw.length),n.push(k);continue}if(k=this.tokenizer.autolink(e)){e=e.substring(k.raw.length),n.push(k);continue}if(!this.state.inLink&&(k=this.tokenizer.url(e))){e=e.substring(k.raw.length),n.push(k);continue}let C=e;if((I=this.options.extensions)!=null&&I.startInline){let v=1/0;const T=e.slice(1);let q;this.options.extensions.startInline.forEach(Y=>{q=Y.call({lexer:this},T),typeof q=="number"&&q>=0&&(v=Math.min(v,q))}),v<1/0&&v>=0&&(C=e.substring(0,v+1))}if(k=this.tokenizer.inlineText(C)){e=e.substring(k.raw.length),k.raw.slice(-1)!=="_"&&(a=k.raw.slice(-1)),c=!0;const v=n.at(-1);(v==null?void 0:v.type)==="text"?(v.raw+=k.raw,v.text+=k.text):n.push(k);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class Jr{constructor(e){Je(this,"options");Je(this,"parser");this.options=e||Bn}space(e){return""}code({text:e,lang:n,escaped:i}){var a;const s=(a=(n||"").match(Dt.notSpaceStart))==null?void 0:a[0],c=e.replace(Dt.endingNewline,"")+`
`;return s?'<pre><code class="language-'+on(s)+'">'+(i?c:on(c,!0))+`</code></pre>
`:"<pre><code>"+(i?c:on(c,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,i=e.start;let s="";for(let h=0;h<e.items.length;h++){const x=e.items[h];s+=this.listitem(x)}const c=n?"ol":"ul",a=n&&i!==1?' start="'+i+'"':"";return"<"+c+a+`>
`+s+"</"+c+`>
`}listitem(e){var i;let n="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((i=e.tokens[0])==null?void 0:i.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+on(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):n+=s+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",i="";for(let c=0;c<e.header.length;c++)i+=this.tablecell(e.header[c]);n+=this.tablerow({text:i});let s="";for(let c=0;c<e.rows.length;c++){const a=e.rows[c];i="";for(let h=0;h<a.length;h++)i+=this.tablecell(a[h]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+n+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${on(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:i}){const s=this.parser.parseInline(i),c=ys(e);if(c===null)return s;e=c;let a='<a href="'+e+'"';return n&&(a+=' title="'+on(n)+'"'),a+=">"+s+"</a>",a}image({href:e,title:n,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));const c=ys(e);if(c===null)return on(i);e=c;let a=`<img src="${e}" alt="${i}"`;return n&&(a+=` title="${on(n)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:on(e.text)}}class Ki{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Gt{constructor(e){Je(this,"options");Je(this,"renderer");Je(this,"textRenderer");this.options=e||Bn,this.options.renderer=this.options.renderer||new Jr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ki}static parse(e,n){return new Gt(n).parse(e)}static parseInline(e,n){return new Gt(n).parseInline(e)}parse(e,n=!0){var s,c;let i="";for(let a=0;a<e.length;a++){const h=e[a];if((c=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&c[h.type]){const I=h,k=this.options.extensions.renderers[I.type].call({parser:this},I);if(k!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(I.type)){i+=k||"";continue}}const x=h;switch(x.type){case"space":{i+=this.renderer.space(x);continue}case"hr":{i+=this.renderer.hr(x);continue}case"heading":{i+=this.renderer.heading(x);continue}case"code":{i+=this.renderer.code(x);continue}case"table":{i+=this.renderer.table(x);continue}case"blockquote":{i+=this.renderer.blockquote(x);continue}case"list":{i+=this.renderer.list(x);continue}case"html":{i+=this.renderer.html(x);continue}case"paragraph":{i+=this.renderer.paragraph(x);continue}case"text":{let I=x,k=this.renderer.text(I);for(;a+1<e.length&&e[a+1].type==="text";)I=e[++a],k+=`
`+this.renderer.text(I);n?i+=this.renderer.paragraph({type:"paragraph",raw:k,text:k,tokens:[{type:"text",raw:k,text:k,escaped:!0}]}):i+=k;continue}default:{const I='Token with "'+x.type+'" type was not found.';if(this.options.silent)return console.error(I),"";throw new Error(I)}}}return i}parseInline(e,n=this.renderer){var s,c;let i="";for(let a=0;a<e.length;a++){const h=e[a];if((c=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&c[h.type]){const I=this.options.extensions.renderers[h.type].call({parser:this},h);if(I!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(h.type)){i+=I||"";continue}}const x=h;switch(x.type){case"escape":{i+=n.text(x);break}case"html":{i+=n.html(x);break}case"link":{i+=n.link(x);break}case"image":{i+=n.image(x);break}case"strong":{i+=n.strong(x);break}case"em":{i+=n.em(x);break}case"codespan":{i+=n.codespan(x);break}case"br":{i+=n.br(x);break}case"del":{i+=n.del(x);break}case"text":{i+=n.text(x);break}default:{const I='Token with "'+x.type+'" type was not found.';if(this.options.silent)return console.error(I),"";throw new Error(I)}}}return i}}class gr{constructor(e){Je(this,"options");Je(this,"block");this.options=e||Bn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Wt.lex:Wt.lexInline}provideParser(){return this.block?Gt.parse:Gt.parseInline}}Je(gr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class Yl{constructor(...e){Je(this,"defaults",qi());Je(this,"options",this.setOptions);Je(this,"parse",this.parseMarkdown(!0));Je(this,"parseInline",this.parseMarkdown(!1));Je(this,"Parser",Gt);Je(this,"Renderer",Jr);Je(this,"TextRenderer",Ki);Je(this,"Lexer",Wt);Je(this,"Tokenizer",Yr);Je(this,"Hooks",gr);this.use(...e)}walkTokens(e,n){var s,c;let i=[];for(const a of e)switch(i=i.concat(n.call(this,a)),a.type){case"table":{const h=a;for(const x of h.header)i=i.concat(this.walkTokens(x.tokens,n));for(const x of h.rows)for(const I of x)i=i.concat(this.walkTokens(I.tokens,n));break}case"list":{const h=a;i=i.concat(this.walkTokens(h.items,n));break}default:{const h=a;(c=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&c[h.type]?this.defaults.extensions.childTokens[h.type].forEach(x=>{const I=h[x].flat(1/0);i=i.concat(this.walkTokens(I,n))}):h.tokens&&(i=i.concat(this.walkTokens(h.tokens,n)))}}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if("renderer"in c){const a=n.renderers[c.name];a?n.renderers[c.name]=function(...h){let x=c.renderer.apply(this,h);return x===!1&&(x=a.apply(this,h)),x}:n.renderers[c.name]=c.renderer}if("tokenizer"in c){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[c.level];a?a.unshift(c.tokenizer):n[c.level]=[c.tokenizer],c.start&&(c.level==="block"?n.startBlock?n.startBlock.push(c.start):n.startBlock=[c.start]:c.level==="inline"&&(n.startInline?n.startInline.push(c.start):n.startInline=[c.start]))}"childTokens"in c&&c.childTokens&&(n.childTokens[c.name]=c.childTokens)}),s.extensions=n),i.renderer){const c=this.defaults.renderer||new Jr(this.defaults);for(const a in i.renderer){if(!(a in c))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const h=a,x=i.renderer[h],I=c[h];c[h]=(...k)=>{let C=x.apply(c,k);return C===!1&&(C=I.apply(c,k)),C||""}}s.renderer=c}if(i.tokenizer){const c=this.defaults.tokenizer||new Yr(this.defaults);for(const a in i.tokenizer){if(!(a in c))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const h=a,x=i.tokenizer[h],I=c[h];c[h]=(...k)=>{let C=x.apply(c,k);return C===!1&&(C=I.apply(c,k)),C}}s.tokenizer=c}if(i.hooks){const c=this.defaults.hooks||new gr;for(const a in i.hooks){if(!(a in c))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const h=a,x=i.hooks[h],I=c[h];gr.passThroughHooks.has(a)?c[h]=k=>{if(this.defaults.async)return Promise.resolve(x.call(c,k)).then(v=>I.call(c,v));const C=x.call(c,k);return I.call(c,C)}:c[h]=(...k)=>{let C=x.apply(c,k);return C===!1&&(C=I.apply(c,k)),C}}s.hooks=c}if(i.walkTokens){const c=this.defaults.walkTokens,a=i.walkTokens;s.walkTokens=function(h){let x=[];return x.push(a.call(this,h)),c&&(x=x.concat(c.call(this,h))),x}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Wt.lex(e,n??this.defaults)}parser(e,n){return Gt.parse(e,n??this.defaults)}parseMarkdown(e){return(i,s)=>{const c={...s},a={...this.defaults,...c},h=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&c.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const x=a.hooks?a.hooks.provideLexer():e?Wt.lex:Wt.lexInline,I=a.hooks?a.hooks.provideParser():e?Gt.parse:Gt.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(i):i).then(k=>x(k,a)).then(k=>a.hooks?a.hooks.processAllTokens(k):k).then(k=>a.walkTokens?Promise.all(this.walkTokens(k,a.walkTokens)).then(()=>k):k).then(k=>I(k,a)).then(k=>a.hooks?a.hooks.postprocess(k):k).catch(h);try{a.hooks&&(i=a.hooks.preprocess(i));let k=x(i,a);a.hooks&&(k=a.hooks.processAllTokens(k)),a.walkTokens&&this.walkTokens(k,a.walkTokens);let C=I(k,a);return a.hooks&&(C=a.hooks.postprocess(C)),C}catch(k){return h(k)}}}onError(e,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+on(i.message+"",!0)+"</pre>";return n?Promise.resolve(s):s}if(n)return Promise.reject(i);throw i}}}const qn=new Yl;function Ke(t,e){return qn.parse(t,e)}Ke.options=Ke.setOptions=function(t){return qn.setOptions(t),Ke.defaults=qn.defaults,sa(Ke.defaults),Ke};Ke.getDefaults=qi;Ke.defaults=Bn;Ke.use=function(...t){return qn.use(...t),Ke.defaults=qn.defaults,sa(Ke.defaults),Ke};Ke.walkTokens=function(t,e){return qn.walkTokens(t,e)};Ke.parseInline=qn.parseInline;Ke.Parser=Gt;Ke.parser=Gt.parse;Ke.Renderer=Jr;Ke.TextRenderer=Ki;Ke.Lexer=Wt;Ke.lexer=Wt.lex;Ke.Tokenizer=Yr;Ke.Hooks=gr;Ke.parse=Ke;Ke.options;Ke.setOptions;Ke.use;Ke.walkTokens;Ke.parseInline;Gt.parse;Wt.lex;var vn={},Qt={},Is;function Jl(){if(Is)return Qt;Is=1,Object.defineProperty(Qt,"__esModule",{value:!0});function t(u){const r=u||"";return function(){throw new Error("this method "+r+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(u,r){if(!u)throw new Error(r||"Assertion failed")}function n(u,r,o){let p;Object.defineProperty(u,r,{get(){return p||(p=o.call(this)),p}})}function i(u){return u&&Object.assign({},u)}function s(u,r){const o=[];for(;r-- >0;)o.push(u());return o}function c(u,r){return new Array(r+1).join(u)}function a(u,r){return s(()=>u,r)}function h(u){const r=[];for(let o=0;o<u.length;o++){const p=u[o];u.lastIndexOf(p)!==o&&r.indexOf(p)<0&&r.push(p)}return r}function x(u){const r=[];return u.forEach(o=>{r.indexOf(o)<0&&r.push(o)}),r}function I(u){const r=u[0];return r===r.toUpperCase()}function k(u){return!I(u)}function C(u,r,o){const p=o||" ";return u.length<r?c(p,r-u.length)+u:u}function v(){this.strings=[]}v.prototype.append=function(u){this.strings.push(u)},v.prototype.contents=function(){return this.strings.join("")};const T=u=>String.fromCodePoint(parseInt(u,16));function q(u){if(u.charAt(0)==="\\")switch(u.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return T(u.slice(2,4));case"u":return u.charAt(2)==="{"?T(u.slice(3,-1)):T(u.slice(2,6));default:return u.charAt(1)}else return u}function Y(u){if(u==null)return String(u);const r=Object.prototype.toString.call(u);try{let o;return u.constructor&&u.constructor.name?o=u.constructor.name:r.indexOf("[object ")===0?o=r.slice(8,-1):o=typeof u,o+": "+JSON.stringify(String(u))}catch{return r}}var ve=Object.freeze({__proto__:null,abstract:t,assert:e,defineLazyProperty:n,clone:i,repeatFn:s,repeatStr:c,repeat:a,getDuplicates:h,copyWithoutDuplicates:x,isSyntactic:I,isLexical:k,padLeft:C,StringBuffer:v,unescapeCodePoint:q,unexpectedObjToString:Y});const Oe={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class U{constructor(){if(this.constructor===U)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(r){return r&&(this.source=r.trimmed()),this}}const N=Object.create(U.prototype),B=Object.create(U.prototype);class L extends U{constructor(r){super(),this.obj=r}}class y extends U{constructor(r,o){super(),this.from=r,this.to=o,this.matchCodePoint=r.length>1||o.length>1}}class F extends U{constructor(r){super(),this.index=r}}class j extends U{constructor(r){super(),this.terms=r}}class se extends j{constructor(r,o,p){const g=r.rules[o].body;super([p,g]),this.superGrammar=r,this.name=o,this.body=p}}class me extends j{constructor(r,o,p,g){const O=r.rules[o].body;super([...p,O,...g]),this.superGrammar=r,this.ruleName=o,this.expansionPos=p.length}}class J extends U{constructor(r){super(),this.factors=r}}class re extends U{constructor(r){super(),this.expr=r}}class ce extends re{}class ke extends re{}class ze extends re{}ce.prototype.operator="*",ke.prototype.operator="+",ze.prototype.operator="?",ce.prototype.minNumMatches=0,ke.prototype.minNumMatches=1,ze.prototype.minNumMatches=0,ce.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ke.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ze.prototype.maxNumMatches=1;class ye extends U{constructor(r){super(),this.expr=r}}class ge extends U{constructor(r){super(),this.expr=r}}class We extends U{constructor(r){super(),this.expr=r}}class ne extends U{constructor(r,o=[]){super(),this.ruleName=r,this.args=o}isSyntactic(){return I(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class Ee extends U{constructor(r){super(),this.category=r,this.pattern=Oe[r]}}function Pe(u,r){let o;return r?(o=new Error(r.getLineAndColumnMessage()+u),o.shortMessage=u,o.interval=r):o=new Error(u),o}function b(){return Pe("Interval sources don't match")}function A(u){const r=new Error;return Object.defineProperty(r,"message",{enumerable:!0,get(){return u.message}}),Object.defineProperty(r,"shortMessage",{enumerable:!0,get(){return"Expected "+u.getExpectedText()}}),r.interval=u.getInterval(),r}function oe(u,r,o){const p=r?`Grammar ${u} is not declared in namespace '${r}'`:"Undeclared grammar "+u;return Pe(p,o)}function _e(u,r){return Pe("Grammar "+u.name+" is already declared in this namespace")}function Ge(u){return Pe(`Grammar '${u.name}' does not support incremental parsing`)}function Re(u,r,o){return Pe("Rule "+u+" is not declared in grammar "+r,o)}function P(u,r,o){return Pe("Cannot override rule "+u+" because it is not declared in "+r,o)}function M(u,r,o){return Pe("Cannot extend rule "+u+" because it is not declared in "+r,o)}function R(u,r,o,p){let g="Duplicate declaration for rule '"+u+"' in grammar '"+r+"'";return r!==o&&(g+=" (originally declared in '"+o+"')"),Pe(g,p)}function K(u,r,o,p){return Pe("Wrong number of parameters for rule "+u+" (expected "+r+", got "+o+")",p)}function ee(u,r,o,p){return Pe("Wrong number of arguments for rule "+u+" (expected "+r+", got "+o+")",p)}function H(u,r,o){return Pe("Duplicate parameter names in rule "+u+": "+r.join(", "),o)}function z(u,r){return Pe("Invalid parameter to rule "+u+": "+r+" has arity "+r.getArity()+", but parameter expressions must have arity 1",r.source)}const te="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function he(u,r){return Pe("Cannot apply syntactic rule "+u+" from here (inside a lexical context)",r.source)}function Te(u){const{ruleName:r}=u;return Pe(`applySyntactic is for syntactic rules, but '${r}' is a lexical rule. `+te,u.source)}function Le(u){return Pe("applySyntactic is not required here (in a syntactic context)",u.source)}function de(u,r){return Pe("Incorrect argument type: expected "+u,r.source)}function we(u){return Pe("'...' can appear at most once in a rule body",u.source)}function Ne(u){const r=u._node;e(r&&r.isNonterminal()&&r.ctorName==="escapeChar_unicodeCodePoint");const o=u.children.slice(1,-1).map(g=>g.source),p=o[0].coverageWith(...o.slice(1));return Pe(`U+${p.contents} is not a valid Unicode code point`,p)}function ue(u,r){const o=r.length>0?r[r.length-1].args:[];let g="Nullable expression "+u.expr.substituteParams(o)+" is not allowed inside '"+u.operator+"' (possible infinite loop)";if(r.length>0){const O=r.map($=>new ne($.ruleName,$.args)).join(`
`);g+=`
Application stack (most recent application last):
`+O}return Pe(g,u.expr.source)}function ot(u,r,o,p){return Pe("Rule "+u+" involves an alternation which has inconsistent arity (expected "+r+", got "+o+")",p.source)}function Nt(u){const r=u.map(o=>o.message);return Pe(["Errors:"].concat(r).join(`
- `),u[0].interval)}function vt(u,r,o,p){let g=p.slice(0,-1).map(Z=>{const pe="  "+Z[0].name+" > "+Z[1];return Z.length===3?pe+" for '"+Z[2]+"'":pe}).join(`
`);g+=`
  `+r+" > "+u;let O="";u==="_iter"&&(O=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const $=[`Missing semantic action for '${u}' in ${o} '${r}'.${O}`,"Action stack (most recent call last):",g].join(`
`),X=Pe($);return X.name="missingSemanticAction",X}function lt(u){if(u.length===1)throw u[0];if(u.length>1)throw Nt(u)}function yt(u){let r=0;return u.map(p=>{const g=p.toString();return r=Math.max(r,g.length),g}).map(p=>C(p,r))}function jt(u,r,o){const p=u.length,g=u.slice(0,o),O=u.slice(o+r.length);return(g+r+O).substr(0,p)}function sn(...u){const r=this,{offset:o}=r,{repeatStr:p}=ve,g=new v;g.append("Line "+r.lineNum+", col "+r.colNum+`:
`);const O=yt([r.prevLine==null?0:r.lineNum-1,r.lineNum,r.nextLine==null?0:r.lineNum+1]),$=(G,W,ae)=>{g.append(ae+O[G]+" | "+W+`
`)};r.prevLine!=null&&$(0,r.prevLine,"  "),$(1,r.line,"> ");const X=r.line.length;let Z=p(" ",X+1);for(let G=0;G<u.length;++G){let W=u[G][0],ae=u[G][1];e(W>=0&&W<=ae,"range start must be >= 0 and <= end");const Ie=o-r.colNum+1;W=Math.max(0,W-Ie),ae=Math.min(ae-Ie,X),Z=jt(Z,p("~",ae-W),W)}const pe=2+O[1].length+3;return g.append(p(" ",pe)),Z=jt(Z,"^",r.colNum-1),g.append(Z.replace(/ +$/,"")+`
`),r.nextLine!=null&&$(2,r.nextLine,"  "),g.contents()}let In=[];function Ht(u){In.push(u)}function ie(u){In.forEach(r=>{r(u)}),In=null}function xn(u,r){let o=1,p=1,g=0,O=0,$=null,X=null,Z=-1;for(;g<r;){const W=u.charAt(g++);W===`
`?(o++,p=1,Z=O,O=g):W!=="\r"&&p++}let pe=u.indexOf(`
`,O);if(pe===-1)pe=u.length;else{const W=u.indexOf(`
`,pe+1);$=W===-1?u.slice(pe):u.slice(pe,W),$=$.replace(/^\r?\n/,"").replace(/\r$/,"")}Z>=0&&(X=u.slice(Z,O).replace(/\r?\n$/,""));const G=u.slice(O,pe).replace(/\r$/,"");return{offset:r,lineNum:o,colNum:p,line:G,prevLine:X,nextLine:$,toString:sn}}function hn(u,r,...o){return xn(u,r).toString(...o)}const $t=(()=>{let u=0;return r=>""+r+u++})();class tt{constructor(r,o,p){this.sourceString=r,this.startIdx=o,this.endIdx=p}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...r){return tt.coverage(...r,this)}collapsedLeft(){return new tt(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new tt(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return xn(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const r=[this.startIdx,this.endIdx];return hn(this.sourceString,this.startIdx,r)}minus(r){if(this.sourceString!==r.sourceString)throw b();return this.startIdx===r.startIdx&&this.endIdx===r.endIdx?[]:this.startIdx<r.startIdx&&r.endIdx<this.endIdx?[new tt(this.sourceString,this.startIdx,r.startIdx),new tt(this.sourceString,r.endIdx,this.endIdx)]:this.startIdx<r.endIdx&&r.endIdx<this.endIdx?[new tt(this.sourceString,r.endIdx,this.endIdx)]:this.startIdx<r.startIdx&&r.startIdx<this.endIdx?[new tt(this.sourceString,this.startIdx,r.startIdx)]:[this]}relativeTo(r){if(this.sourceString!==r.sourceString)throw b();return e(this.startIdx>=r.startIdx&&this.endIdx<=r.endIdx,"other interval does not cover this one"),new tt(this.sourceString,this.startIdx-r.startIdx,this.endIdx-r.startIdx)}trimmed(){const{contents:r}=this,o=this.startIdx+r.match(/^\s*/)[0].length,p=this.endIdx-r.match(/\s*$/)[0].length;return new tt(this.sourceString,o,p)}subInterval(r,o){const p=this.startIdx+r;return new tt(this.sourceString,p,p+o)}}tt.coverage=function(u,...r){let{startIdx:o,endIdx:p}=u;for(const g of r){if(g.sourceString!==u.sourceString)throw b();o=Math.min(o,g.startIdx),p=Math.max(p,g.endIdx)}return new tt(u.sourceString,o,p)};const Ut=65535;class $e{constructor(r){this.source=r,this.pos=0,this.examinedLength=0}atEnd(){const r=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),r}next(){const r=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),r}nextCharCode(){const r=this.next();return r&&r.charCodeAt(0)}nextCodePoint(){const r=this.source.slice(this.pos++).codePointAt(0);return r>Ut&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),r}matchString(r,o){let p;if(o){for(p=0;p<r.length;p++){const g=this.next(),O=r[p];if(g==null||g.toUpperCase()!==O.toUpperCase())return!1}return!0}for(p=0;p<r.length;p++)if(this.next()!==r[p])return!1;return!0}sourceSlice(r,o){return this.source.slice(r,o)}interval(r,o){return new tt(this.source,r,o||this.pos)}}class f{constructor(r,o,p,g,O,$,X){this.matcher=r,this.input=o,this.startExpr=p,this._cst=g,this._cstOffset=O,this._rightmostFailurePosition=$,this._rightmostFailures=X,this.failed()&&(n(this,"message",function(){const Z="Expected "+this.getExpectedText();return hn(this.input,this.getRightmostFailurePosition())+Z}),n(this,"shortMessage",function(){const Z="expected "+this.getExpectedText(),pe=xn(this.input,this.getRightmostFailurePosition());return"Line "+pe.lineNum+", col "+pe.colNum+": "+Z}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const r=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=r.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const r=new v;let o=this.getRightmostFailures();o=o.filter(p=>!p.isFluffy());for(let p=0;p<o.length;p++)p>0&&(p===o.length-1?r.append(o.length>2?", or ":" or "):r.append(", ")),r.append(o[p].toString());return r.contents()}getInterval(){const r=this.getRightmostFailurePosition();return new tt(this.input,r,r)}}class w{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(r){return this.applicationMemoKeyStack.indexOf(r.toMemoKey())>=0}enter(r){this.applicationMemoKeyStack.push(r.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(r,o){o.isLeftRecursion=!0,o.headApplication=r,o.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=o;const{applicationMemoKeyStack:p}=this,g=p.indexOf(r.toMemoKey())+1,O=p.slice(g);o.isInvolved=function($){return O.indexOf($)>=0},o.updateInvolvedApplicationMemoKeys=function(){for(let $=g;$<p.length;$++){const X=p[$];this.isInvolved(X)||O.push(X)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(r){if(!r.isLeftRecursion)return!0;const{applicationMemoKeyStack:o}=this;for(let p=0;p<o.length;p++){const g=o[p];if(r.isInvolved(g))return!1}return!0}memoize(r,o){return this.memo[r]=o,this.maxExaminedLength=Math.max(this.maxExaminedLength,o.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,o.rightmostFailureOffset),o}clearObsoleteEntries(r,o){if(r+this.maxExaminedLength<=o)return;const{memo:p}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(p).forEach(g=>{const O=p[g];r+O.examinedLength>o?delete p[g]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,O.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,O.rightmostFailureOffset))})}}const _="✗",l="✓",d="⋅",m="⇒",E="␉",S="␊",D="␍",V={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function le(u){return a(" ",u).join("")}function fe(u,r,o){const p=Fe(u.slice(r,r+o));return p.length<o?p+a(" ",o-p.length).join(""):p}function Fe(u){return typeof u=="string"?u.replace(/ /g,d).replace(/\t/g,E).replace(/\n/g,S).replace(/\r/g,D):String(u)}class xe{constructor(r,o,p,g,O,$,X){this.input=r,this.pos=this.pos1=o,this.pos2=p,this.source=new tt(r,o,p),this.expr=g,this.bindings=$,this.children=X||[],this.terminatingLREntry=null,this._flags=O?V.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(r){const o=new xe(this.input,this.pos,this.pos2,r,this.succeeded,this.bindings,this.children);return o.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,o.isImplicitSpaces=this.isImplicitSpaces,o.isMemoized=this.isMemoized,o.isRootNode=this.isRootNode,o.terminatesLR=this.terminatesLR,o.terminatingLREntry=this.terminatingLREntry,o}recordLRTermination(r,o){this.terminatingLREntry=new xe(this.input,this.pos,this.pos2,this.expr,!1,[o],[r]),this.terminatingLREntry.terminatesLR=!0}walk(r,o){let p=r;typeof p=="function"&&(p={enter:p});function g(O,$,X){let Z=!0;p.enter&&p.enter.call(o,O,$,X)===xe.prototype.SKIP&&(Z=!1),Z&&(O.children.forEach(pe=>{g(pe,O,X+1)}),p.exit&&p.exit.call(o,O,$,X))}this.isRootNode?this.children.forEach(O=>{g(O,null,0)}):g(this,null,0)}toString(){const r=new v;return this.walk((o,p,g)=>{if(!o)return this.SKIP;if(o.expr.constructor.name!=="Alt"){if(r.append(fe(o.input,o.pos,10)+le(g*2+1)),r.append((o.succeeded?l:_)+" "+o.displayString),o.isHeadOfLeftRecursion&&r.append(" (LR)"),o.succeeded){const $=Fe(o.source.contents);r.append(" "+m+"  "),r.append(typeof $=="string"?'"'+$+'"':$)}r.append(`
`)}}),r.contents()}}xe.prototype.SKIP={},Object.keys(V).forEach(u=>{const r=V[u];Object.defineProperty(xe.prototype,u,{get(){return(this._flags&r)!==0},set(o){o?this._flags|=r:this._flags&=~r}})}),U.prototype.allowsSkippingPrecedingSpace=t("allowsSkippingPrecedingSpace"),N.allowsSkippingPrecedingSpace=B.allowsSkippingPrecedingSpace=ne.prototype.allowsSkippingPrecedingSpace=L.prototype.allowsSkippingPrecedingSpace=y.prototype.allowsSkippingPrecedingSpace=Ee.prototype.allowsSkippingPrecedingSpace=function(){return!0},j.prototype.allowsSkippingPrecedingSpace=re.prototype.allowsSkippingPrecedingSpace=We.prototype.allowsSkippingPrecedingSpace=ge.prototype.allowsSkippingPrecedingSpace=ye.prototype.allowsSkippingPrecedingSpace=F.prototype.allowsSkippingPrecedingSpace=J.prototype.allowsSkippingPrecedingSpace=function(){return!1};let qe;Ht(u=>{qe=u});let De;U.prototype.assertAllApplicationsAreValid=function(u,r){De=0,this._assertAllApplicationsAreValid(u,r)},U.prototype._assertAllApplicationsAreValid=t("_assertAllApplicationsAreValid"),N._assertAllApplicationsAreValid=B._assertAllApplicationsAreValid=L.prototype._assertAllApplicationsAreValid=y.prototype._assertAllApplicationsAreValid=F.prototype._assertAllApplicationsAreValid=Ee.prototype._assertAllApplicationsAreValid=function(u,r){},We.prototype._assertAllApplicationsAreValid=function(u,r){De++,this.expr._assertAllApplicationsAreValid(u,r),De--},j.prototype._assertAllApplicationsAreValid=function(u,r){for(let o=0;o<this.terms.length;o++)this.terms[o]._assertAllApplicationsAreValid(u,r)},J.prototype._assertAllApplicationsAreValid=function(u,r){for(let o=0;o<this.factors.length;o++)this.factors[o]._assertAllApplicationsAreValid(u,r)},re.prototype._assertAllApplicationsAreValid=ye.prototype._assertAllApplicationsAreValid=ge.prototype._assertAllApplicationsAreValid=function(u,r){this.expr._assertAllApplicationsAreValid(u,r)},ne.prototype._assertAllApplicationsAreValid=function(u,r,o=!1){const p=r.rules[this.ruleName],g=I(u)&&De===0;if(!p)throw Re(this.ruleName,r.name,this.source);if(!o&&I(this.ruleName)&&!g)throw he(this.ruleName,this);const O=this.args.length,$=p.formals.length;if(O!==$)throw ee(this.ruleName,$,O,this.source);const X=qe&&p===qe.rules.applySyntactic;if(qe&&p===qe.rules.caseInsensitive&&!(this.args[0]instanceof L))throw de('a Terminal (e.g. "abc")',this.args[0]);if(X){const pe=this.args[0];if(!(pe instanceof ne))throw de("a syntactic rule application",pe);if(!I(pe.ruleName))throw Te(pe);if(g)throw Le(this)}this.args.forEach(pe=>{if(pe._assertAllApplicationsAreValid(u,r,X),pe.getArity()!==1)throw z(this.ruleName,pe)})},U.prototype.assertChoicesHaveUniformArity=t("assertChoicesHaveUniformArity"),N.assertChoicesHaveUniformArity=B.assertChoicesHaveUniformArity=L.prototype.assertChoicesHaveUniformArity=y.prototype.assertChoicesHaveUniformArity=F.prototype.assertChoicesHaveUniformArity=We.prototype.assertChoicesHaveUniformArity=Ee.prototype.assertChoicesHaveUniformArity=function(u){},j.prototype.assertChoicesHaveUniformArity=function(u){if(this.terms.length===0)return;const r=this.terms[0].getArity();for(let o=0;o<this.terms.length;o++){const p=this.terms[o];p.assertChoicesHaveUniformArity();const g=p.getArity();if(r!==g)throw ot(u,r,g,p)}},se.prototype.assertChoicesHaveUniformArity=function(u){const r=this.terms[0].getArity(),o=this.terms[1].getArity();if(r!==o)throw ot(u,o,r,this.terms[0])},J.prototype.assertChoicesHaveUniformArity=function(u){for(let r=0;r<this.factors.length;r++)this.factors[r].assertChoicesHaveUniformArity(u)},re.prototype.assertChoicesHaveUniformArity=function(u){this.expr.assertChoicesHaveUniformArity(u)},ye.prototype.assertChoicesHaveUniformArity=function(u){},ge.prototype.assertChoicesHaveUniformArity=function(u){this.expr.assertChoicesHaveUniformArity(u)},ne.prototype.assertChoicesHaveUniformArity=function(u){},U.prototype.assertIteratedExprsAreNotNullable=t("assertIteratedExprsAreNotNullable"),N.assertIteratedExprsAreNotNullable=B.assertIteratedExprsAreNotNullable=L.prototype.assertIteratedExprsAreNotNullable=y.prototype.assertIteratedExprsAreNotNullable=F.prototype.assertIteratedExprsAreNotNullable=Ee.prototype.assertIteratedExprsAreNotNullable=function(u){},j.prototype.assertIteratedExprsAreNotNullable=function(u){for(let r=0;r<this.terms.length;r++)this.terms[r].assertIteratedExprsAreNotNullable(u)},J.prototype.assertIteratedExprsAreNotNullable=function(u){for(let r=0;r<this.factors.length;r++)this.factors[r].assertIteratedExprsAreNotNullable(u)},re.prototype.assertIteratedExprsAreNotNullable=function(u){if(this.expr.assertIteratedExprsAreNotNullable(u),this.expr.isNullable(u))throw ue(this,[])},ze.prototype.assertIteratedExprsAreNotNullable=ye.prototype.assertIteratedExprsAreNotNullable=ge.prototype.assertIteratedExprsAreNotNullable=We.prototype.assertIteratedExprsAreNotNullable=function(u){this.expr.assertIteratedExprsAreNotNullable(u)},ne.prototype.assertIteratedExprsAreNotNullable=function(u){this.args.forEach(r=>{r.assertIteratedExprsAreNotNullable(u)})};class it{constructor(r){this.matchLength=r}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(r){if(this.children)return this.children[r]}indexOfChild(r){return this.children.indexOf(r)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(r){const o=this.indexOfChild(r);if(o<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(o===0)throw new Error("cannot get child before first child");return this.childAt(o-1)}childAfter(r){const o=this.indexOfChild(r);if(o<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(o===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(o+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class Ce extends it{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class Xe extends it{constructor(r,o,p,g){super(g),this.ruleName=r,this.children=o,this.childOffsets=p}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return k(this.ctorName)}isSyntactic(){return I(this.ctorName)}}class Lt extends it{constructor(r,o,p,g){super(p),this.children=r,this.childOffsets=o,this.optional=g}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}U.prototype.eval=t("eval"),N.eval=function(u){const{inputStream:r}=u,o=r.pos,p=r.nextCodePoint();return p!==void 0?(u.pushBinding(new Ce(String.fromCodePoint(p).length),o),!0):(u.processFailure(o,this),!1)},B.eval=function(u){const{inputStream:r}=u,o=r.pos;return r.atEnd()?(u.pushBinding(new Ce(0),o),!0):(u.processFailure(o,this),!1)},L.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos;return r.matchString(this.obj)?(u.pushBinding(new Ce(this.obj.length),o),!0):(u.processFailure(o,this),!1)},y.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos,p=this.matchCodePoint?r.nextCodePoint():r.nextCharCode();return p!==void 0&&this.from.codePointAt(0)<=p&&p<=this.to.codePointAt(0)?(u.pushBinding(new Ce(String.fromCodePoint(p).length),o),!0):(u.processFailure(o,this),!1)},F.prototype.eval=function(u){return u.eval(u.currentApplication().args[this.index])},We.prototype.eval=function(u){u.enterLexifiedContext();const r=u.eval(this.expr);return u.exitLexifiedContext(),r},j.prototype.eval=function(u){for(let r=0;r<this.terms.length;r++)if(u.eval(this.terms[r]))return!0;return!1},J.prototype.eval=function(u){for(let r=0;r<this.factors.length;r++){const o=this.factors[r];if(!u.eval(o))return!1}return!0},re.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos,p=this.getArity(),g=[],O=[];for(;g.length<p;)g.push([]),O.push([]);let $=0,X=o,Z;for(;$<this.maxNumMatches&&u.eval(this.expr);){if(r.pos===X)throw ue(this,u._applicationStack);X=r.pos,$++;const ae=u._bindings.splice(u._bindings.length-p,p),Ie=u._bindingOffsets.splice(u._bindingOffsets.length-p,p);for(Z=0;Z<ae.length;Z++)g[Z].push(ae[Z]),O[Z].push(Ie[Z])}if($<this.minNumMatches)return!1;let pe=u.posToOffset(o),G=0;if($>0){const ae=g[p-1],Ie=O[p-1],je=Ie[Ie.length-1]+ae[ae.length-1].matchLength;pe=O[0][0],G=je-pe}const W=this instanceof ze;for(Z=0;Z<g.length;Z++)u._bindings.push(new Lt(g[Z],O[Z],G,W)),u._bindingOffsets.push(pe);return!0},ye.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos;u.pushFailuresInfo();const p=u.eval(this.expr);return u.popFailuresInfo(),p?(u.processFailure(o,this),!1):(r.pos=o,!0)},ge.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos;return u.eval(this.expr)?(r.pos=o,!0):!1},ne.prototype.eval=function(u){const r=u.currentApplication(),o=r?r.args:[],p=this.substituteParams(o),g=u.getCurrentPosInfo();if(g.isActive(p))return p.handleCycle(u);const O=p.toMemoKey(),$=g.memo[O];if($&&g.shouldUseMemoizedResult($)){if(u.hasNecessaryInfo($))return u.useMemoizedResult(u.inputStream.pos,$);delete g.memo[O]}return p.reallyEval(u)},ne.prototype.handleCycle=function(u){const r=u.getCurrentPosInfo(),{currentLeftRecursion:o}=r,p=this.toMemoKey();let g=r.memo[p];return o&&o.headApplication.toMemoKey()===p?g.updateInvolvedApplicationMemoKeys():g||(g=r.memoize(p,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),r.startLeftRecursion(this,g)),u.useMemoizedResult(u.inputStream.pos,g)},ne.prototype.reallyEval=function(u){const{inputStream:r}=u,o=r.pos,p=u.getCurrentPosInfo(),g=u.grammar.rules[this.ruleName],{body:O}=g,{description:$}=g;u.enterApplication(p,this),$&&u.pushFailuresInfo();const X=r.examinedLength;r.examinedLength=0;let Z=this.evalOnce(O,u);const pe=p.currentLeftRecursion,G=this.toMemoKey(),W=pe&&pe.headApplication.toMemoKey()===G;let ae;u.doNotMemoize?u.doNotMemoize=!1:W?(Z=this.growSeedResult(O,u,o,pe,Z),p.endLeftRecursion(),ae=pe,ae.examinedLength=r.examinedLength-o,ae.rightmostFailureOffset=u._getRightmostFailureOffset(),p.memoize(G,ae)):(!pe||!pe.isInvolved(G))&&(ae=p.memoize(G,{matchLength:r.pos-o,examinedLength:r.examinedLength-o,value:Z,failuresAtRightmostPosition:u.cloneRecordedFailures(),rightmostFailureOffset:u._getRightmostFailureOffset()}));const Ie=!!Z;if($&&(u.popFailuresInfo(),Ie||u.processFailure(o,this),ae&&(ae.failuresAtRightmostPosition=u.cloneRecordedFailures())),u.isTracing()&&ae){const je=u.getTraceEntry(o,this,Ie,Ie?[Z]:[]);W&&(e(je.terminatingLREntry!=null||!Ie),je.isHeadOfLeftRecursion=!0),ae.traceEntry=je}return r.examinedLength=Math.max(r.examinedLength,X),u.exitApplication(p,Z),Ie},ne.prototype.evalOnce=function(u,r){const{inputStream:o}=r,p=o.pos;if(r.eval(u)){const g=u.getArity(),O=r._bindings.splice(r._bindings.length-g,g),$=r._bindingOffsets.splice(r._bindingOffsets.length-g,g),X=o.pos-p;return new Xe(this.ruleName,O,$,X)}else return!1},ne.prototype.growSeedResult=function(u,r,o,p,g){if(!g)return!1;const{inputStream:O}=r;for(;;){if(p.matchLength=O.pos-o,p.value=g,p.failuresAtRightmostPosition=r.cloneRecordedFailures(),r.isTracing()){const $=r.trace[r.trace.length-1];p.traceEntry=new xe(r.input,o,O.pos,this,!0,[g],[$.clone()])}if(O.pos=o,g=this.evalOnce(u,r),O.pos-o<=p.matchLength)break;r.isTracing()&&r.trace.splice(-2,1)}return r.isTracing()&&p.traceEntry.recordLRTermination(r.trace.pop(),g),O.pos=o+p.matchLength,p.value},Ee.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos,p=r.next();return p&&this.pattern.test(p)?(u.pushBinding(new Ce(p.length),o),!0):(u.processFailure(o,this),!1)},U.prototype.getArity=t("getArity"),N.getArity=B.getArity=L.prototype.getArity=y.prototype.getArity=F.prototype.getArity=ne.prototype.getArity=Ee.prototype.getArity=function(){return 1},j.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},J.prototype.getArity=function(){let u=0;for(let r=0;r<this.factors.length;r++)u+=this.factors[r].getArity();return u},re.prototype.getArity=function(){return this.expr.getArity()},ye.prototype.getArity=function(){return 0},ge.prototype.getArity=We.prototype.getArity=function(){return this.expr.getArity()};function Ve(u,r){const o={};if(u.source&&r){const p=u.source.relativeTo(r);o.sourceInterval=[p.startIdx,p.endIdx]}return o}U.prototype.outputRecipe=t("outputRecipe"),N.outputRecipe=function(u,r){return["any",Ve(this,r)]},B.outputRecipe=function(u,r){return["end",Ve(this,r)]},L.prototype.outputRecipe=function(u,r){return["terminal",Ve(this,r),this.obj]},y.prototype.outputRecipe=function(u,r){return["range",Ve(this,r),this.from,this.to]},F.prototype.outputRecipe=function(u,r){return["param",Ve(this,r),this.index]},j.prototype.outputRecipe=function(u,r){return["alt",Ve(this,r)].concat(this.terms.map(o=>o.outputRecipe(u,r)))},se.prototype.outputRecipe=function(u,r){return this.terms[0].outputRecipe(u,r)},me.prototype.outputRecipe=function(u,r){const o=this.terms.slice(0,this.expansionPos),p=this.terms.slice(this.expansionPos+1);return["splice",Ve(this,r),o.map(g=>g.outputRecipe(u,r)),p.map(g=>g.outputRecipe(u,r))]},J.prototype.outputRecipe=function(u,r){return["seq",Ve(this,r)].concat(this.factors.map(o=>o.outputRecipe(u,r)))},ce.prototype.outputRecipe=ke.prototype.outputRecipe=ze.prototype.outputRecipe=ye.prototype.outputRecipe=ge.prototype.outputRecipe=We.prototype.outputRecipe=function(u,r){return[this.constructor.name.toLowerCase(),Ve(this,r),this.expr.outputRecipe(u,r)]},ne.prototype.outputRecipe=function(u,r){return["app",Ve(this,r),this.ruleName,this.args.map(o=>o.outputRecipe(u,r))]},Ee.prototype.outputRecipe=function(u,r){return["unicodeChar",Ve(this,r),this.category]},U.prototype.introduceParams=t("introduceParams"),N.introduceParams=B.introduceParams=L.prototype.introduceParams=y.prototype.introduceParams=F.prototype.introduceParams=Ee.prototype.introduceParams=function(u){return this},j.prototype.introduceParams=function(u){return this.terms.forEach((r,o,p)=>{p[o]=r.introduceParams(u)}),this},J.prototype.introduceParams=function(u){return this.factors.forEach((r,o,p)=>{p[o]=r.introduceParams(u)}),this},re.prototype.introduceParams=ye.prototype.introduceParams=ge.prototype.introduceParams=We.prototype.introduceParams=function(u){return this.expr=this.expr.introduceParams(u),this},ne.prototype.introduceParams=function(u){const r=u.indexOf(this.ruleName);if(r>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new F(r).withSource(this.source)}else return this.args.forEach((o,p,g)=>{g[p]=o.introduceParams(u)}),this},U.prototype.isNullable=function(u){return this._isNullable(u,Object.create(null))},U.prototype._isNullable=t("_isNullable"),N._isNullable=y.prototype._isNullable=F.prototype._isNullable=ke.prototype._isNullable=Ee.prototype._isNullable=function(u,r){return!1},B._isNullable=function(u,r){return!0},L.prototype._isNullable=function(u,r){return typeof this.obj=="string"?this.obj==="":!1},j.prototype._isNullable=function(u,r){return this.terms.length===0||this.terms.some(o=>o._isNullable(u,r))},J.prototype._isNullable=function(u,r){return this.factors.every(o=>o._isNullable(u,r))},ce.prototype._isNullable=ze.prototype._isNullable=ye.prototype._isNullable=ge.prototype._isNullable=function(u,r){return!0},We.prototype._isNullable=function(u,r){return this.expr._isNullable(u,r)},ne.prototype._isNullable=function(u,r){const o=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(r,o)){const{body:p}=u.rules[this.ruleName],g=p.substituteParams(this.args);r[o]=!1,r[o]=g._isNullable(u,r)}return r[o]},U.prototype.substituteParams=t("substituteParams"),N.substituteParams=B.substituteParams=L.prototype.substituteParams=y.prototype.substituteParams=Ee.prototype.substituteParams=function(u){return this},F.prototype.substituteParams=function(u){return u[this.index]},j.prototype.substituteParams=function(u){return new j(this.terms.map(r=>r.substituteParams(u)))},J.prototype.substituteParams=function(u){return new J(this.factors.map(r=>r.substituteParams(u)))},re.prototype.substituteParams=ye.prototype.substituteParams=ge.prototype.substituteParams=We.prototype.substituteParams=function(u){return new this.constructor(this.expr.substituteParams(u))},ne.prototype.substituteParams=function(u){if(this.args.length===0)return this;{const r=this.args.map(o=>o.substituteParams(u));return new ne(this.ruleName,r)}};function fn(u){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(u)}function Ze(u){const r=Object.create(null);u.forEach(o=>{r[o]=(r[o]||0)+1}),Object.keys(r).forEach(o=>{if(r[o]<=1)return;let p=1;u.forEach((g,O)=>{g===o&&(u[O]=g+"_"+p++)})})}U.prototype.toArgumentNameList=t("toArgumentNameList"),N.toArgumentNameList=function(u,r){return["any"]},B.toArgumentNameList=function(u,r){return["end"]},L.prototype.toArgumentNameList=function(u,r){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+u]},y.prototype.toArgumentNameList=function(u,r){let o=this.from+"_to_"+this.to;return fn(o)||(o="_"+o),fn(o)||(o="$"+u),[o]},j.prototype.toArgumentNameList=function(u,r){const o=this.terms.map(O=>O.toArgumentNameList(u,!0)),p=[],g=o[0].length;for(let O=0;O<g;O++){const $=[];for(let Z=0;Z<this.terms.length;Z++)$.push(o[Z][O]);const X=x($);p.push(X.join("_or_"))}return r||Ze(p),p},J.prototype.toArgumentNameList=function(u,r){let o=[];return this.factors.forEach(p=>{const g=p.toArgumentNameList(u,!0);o=o.concat(g),u+=g.length}),r||Ze(o),o},re.prototype.toArgumentNameList=function(u,r){const o=this.expr.toArgumentNameList(u,r).map(p=>p[p.length-1]==="s"?p+"es":p+"s");return r||Ze(o),o},ze.prototype.toArgumentNameList=function(u,r){return this.expr.toArgumentNameList(u,r).map(o=>"opt"+o[0].toUpperCase()+o.slice(1))},ye.prototype.toArgumentNameList=function(u,r){return[]},ge.prototype.toArgumentNameList=We.prototype.toArgumentNameList=function(u,r){return this.expr.toArgumentNameList(u,r)},ne.prototype.toArgumentNameList=function(u,r){return[this.ruleName]},Ee.prototype.toArgumentNameList=function(u,r){return["$"+u]},F.prototype.toArgumentNameList=function(u,r){return["param"+this.index]},U.prototype.toDisplayString=t("toDisplayString"),j.prototype.toDisplayString=J.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},N.toDisplayString=B.toDisplayString=re.prototype.toDisplayString=ye.prototype.toDisplayString=ge.prototype.toDisplayString=We.prototype.toDisplayString=L.prototype.toDisplayString=y.prototype.toDisplayString=F.prototype.toDisplayString=function(){return this.toString()},ne.prototype.toDisplayString=function(){if(this.args.length>0){const u=this.args.map(r=>r.toDisplayString());return this.ruleName+"<"+u.join(",")+">"}else return this.ruleName},Ee.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function _n(u){return u==="description"||u==="string"||u==="code"}class st{constructor(r,o,p){if(!_n(p))throw new Error("invalid Failure type: "+p);this.pexpr=r,this.text=o,this.type=p,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(r){return this.getText()===r.getText()&&this.type===r.type&&(!this.isFluffy()||this.isFluffy()&&r.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const r=new st(this.pexpr,this.text,this.type);return this.isFluffy()&&r.makeFluffy(),r}toKey(){return this.toString()+"#"+this.type}}U.prototype.toFailure=t("toFailure"),N.toFailure=function(u){return new st(this,"any object","description")},B.toFailure=function(u){return new st(this,"end of input","description")},L.prototype.toFailure=function(u){return new st(this,this.obj,"string")},y.prototype.toFailure=function(u){return new st(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},ye.prototype.toFailure=function(u){const r=this.expr===N?"nothing":"not "+this.expr.toFailure(u);return new st(this,r,"description")},ge.prototype.toFailure=function(u){return this.expr.toFailure(u)},ne.prototype.toFailure=function(u){let{description:r}=u.rules[this.ruleName];return r||(r=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new st(this,r,"description")},Ee.prototype.toFailure=function(u){return new st(this,"a Unicode ["+this.category+"] character","description")},j.prototype.toFailure=function(u){const o="("+this.terms.map(p=>p.toFailure(u)).join(" or ")+")";return new st(this,o,"description")},J.prototype.toFailure=function(u){const o="("+this.factors.map(p=>p.toFailure(u)).join(" ")+")";return new st(this,o,"description")},re.prototype.toFailure=function(u){const r="("+this.expr.toFailure(u)+this.operator+")";return new st(this,r,"description")},U.prototype.toString=t("toString"),N.toString=function(){return"any"},B.toString=function(){return"end"},L.prototype.toString=function(){return JSON.stringify(this.obj)},y.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},F.prototype.toString=function(){return"$"+this.index},We.prototype.toString=function(){return"#("+this.expr.toString()+")"},j.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(u=>u.toString()).join(" | ")+")"},J.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(u=>u.toString()).join(" ")+")"},re.prototype.toString=function(){return this.expr+this.operator},ye.prototype.toString=function(){return"~"+this.expr},ge.prototype.toString=function(){return"&"+this.expr},ne.prototype.toString=function(){if(this.args.length>0){const u=this.args.map(r=>r.toString());return this.ruleName+"<"+u.join(",")+">"}else return this.ruleName},Ee.prototype.toString=function(){return"\\p{"+this.category+"}"};class Yt extends U{constructor(r){super(),this.obj=r}_getString(r){const o=r.currentApplication().args[this.obj.index];return e(o instanceof L,"expected a Terminal expression"),o.obj}allowsSkippingPrecedingSpace(){return!0}eval(r){const{inputStream:o}=r,p=o.pos,g=this._getString(r);return o.matchString(g,!0)?(r.pushBinding(new Ce(g.length),p),!0):(r.processFailure(p,this),!1)}getArity(){return 1}substituteParams(r){return new Yt(this.obj.substituteParams(r))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(r){return new st(this,this.obj.toFailure(r)+" (case-insensitive)","description")}_isNullable(r,o){return this.obj._isNullable(r,o)}}var ci=Object.freeze({__proto__:null,CaseInsensitiveTerminal:Yt,PExpr:U,any:N,end:B,Terminal:L,Range:y,Param:F,Alt:j,Extend:se,Splice:me,Seq:J,Iter:re,Star:ce,Plus:ke,Opt:ze,Not:ye,Lookahead:ge,Lex:We,Apply:ne,UnicodeChar:Ee});let Or;Ht(u=>{Or=u.rules.applySyntactic.body});const rr=new ne("spaces");class Tr{constructor(r,o,p){this.matcher=r,this.startExpr=o,this.grammar=r.grammar,this.input=r.getInput(),this.inputStream=new $e(this.input),this.memoTable=r._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],p!==void 0&&(this.positionToRecordFailures=p,this.recordedFailures=Object.create(null))}posToOffset(r){return r-this._posStack[this._posStack.length-1]}enterApplication(r,o){this._posStack.push(this.inputStream.pos),this._applicationStack.push(o),this.inLexifiedContextStack.push(!1),r.enter(o),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(r,o){const p=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),r.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),o&&this.pushBinding(o,p)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const r=this.currentApplication();return r?r.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(rr),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(r){return r.allowsSkippingPrecedingSpace()&&r!==rr?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(r,o){this._bindings.push(r),this._bindingOffsets.push(this.posToOffset(o))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(r){for(;this._bindings.length>r;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(r){let o=this.memoTable[r];return o||(o=this.memoTable[r]=new w),o}processFailure(r,o){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,r),this.recordedFailures&&r===this.positionToRecordFailures){const p=this.currentApplication();p&&(o=o.substituteParams(p.args)),this.recordFailure(o.toFailure(this.grammar),!1)}}recordFailure(r,o){const p=r.toKey();this.recordedFailures[p]?this.recordedFailures[p].isFluffy()&&!r.isFluffy()&&this.recordedFailures[p].clearFluffy():this.recordedFailures[p]=o?r.clone():r}recordFailures(r,o){Object.keys(r).forEach(p=>{this.recordFailure(r[p],o)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const r=Object.create(null);return Object.keys(this.recordedFailures).forEach(o=>{r[o]=this.recordedFailures[o].clone()}),r}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(r,o){const p=this.memoTable[r];if(p&&o instanceof ne){const g=p.memo[o.toMemoKey()];if(g&&g.traceEntry){const O=g.traceEntry.cloneWithExpr(o);return O.isMemoized=!0,O}}return null}getTraceEntry(r,o,p,g){if(o instanceof ne){const O=this.currentApplication(),$=O?O.args:[];o=o.substituteParams($)}return this.getMemoizedTraceEntry(r,o)||new xe(this.input,r,this.inputStream.pos,o,p,g,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(r){return this.trace&&!r.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+r.rightmostFailureOffset===this.positionToRecordFailures?!!r.failuresAtRightmostPosition:!0}useMemoizedResult(r,o){this.trace&&this.trace.push(o.traceEntry);const p=this.inputStream.pos+o.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,p),this.recordedFailures&&this.positionToRecordFailures===p&&o.failuresAtRightmostPosition&&this.recordFailures(o.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,o.examinedLength+r),o.value?(this.inputStream.pos+=o.matchLength,this.pushBinding(o.value,r),!0):!1}eval(r){const{inputStream:o}=this,p=this._bindings.length,g=this.userData;let O;this.recordedFailures&&(O=this.recordedFailures,this.recordedFailures=Object.create(null));const $=o.pos,X=this.maybeSkipSpacesBefore(r);let Z;this.trace&&(Z=this.trace,this.trace=[]);const pe=r.eval(this);if(this.trace){const G=this._bindings.slice(p),W=this.getTraceEntry(X,r,pe,G);W.isImplicitSpaces=r===rr,W.isRootNode=r===this.startExpr,Z.push(W),this.trace=Z}return pe?this.recordedFailures&&o.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(G=>{this.recordedFailures[G].makeFluffy()}):(o.pos=$,this.truncateBindings(p),this.userData=g),this.recordedFailures&&this.recordFailures(O,!1),r===Or&&this.skipSpaces(),pe}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let r;this.recordedFailures&&(r=Object.keys(this.recordedFailures).map(p=>this.recordedFailures[p]));const o=this._bindings[0];return o&&(o.grammar=this.grammar),new f(this.matcher,this.input,this.startExpr,o,this._bindingOffsets[0],this.rightmostFailurePosition,r)}getTrace(){this.trace=[];const r=this.getMatchResult(),o=this.trace[this.trace.length-1];return o.result=r,o}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Se{constructor(r){this.grammar=r,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(r){return this._input!==r&&this.replaceInputRange(0,this._input.length,r),this}replaceInputRange(r,o,p){const g=this._input,O=this._memoTable;if(r<0||r>g.length||o<0||o>g.length||r>o)throw new Error("Invalid indices: "+r+" and "+o);this._input=g.slice(0,r)+p+g.slice(o),this._input!==g&&O.length>0&&(this._isMemoTableStale=!0);const $=O.slice(o);O.length=r;for(let X=0;X<p.length;X++)O.push(void 0);for(const X of $)O.push(X);for(let X=0;X<r;X++){const Z=O[X];Z&&Z.clearObsoleteEntries(X,r)}return this}match(r,o={incremental:!0}){return this._match(this._getStartExpr(r),{incremental:o.incremental,tracing:!1})}trace(r,o={incremental:!0}){return this._match(this._getStartExpr(r),{incremental:o.incremental,tracing:!0})}_match(r,o={}){const p={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...o};if(!p.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Ge(this.grammar);const g=new Tr(this,r,p.positionToRecordFailures);return p.tracing?g.getTrace():g.getMatchResult()}_getStartExpr(r){const o=r||this.grammar.defaultStartRule;if(!o)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const p=this.grammar.parseApplication(o);return new J([p,B])}}const at=[],mn=(u,r)=>Object.prototype.hasOwnProperty.call(u,r);class ir{constructor(r,o,p){this._node=r,this.source=o,this._baseInterval=p,r.isNonterminal()&&e(o===p),this._childWrappers=[]}_forgetMemoizedResultFor(r){delete this._node[this._semantics.attributeKeys[r]],this.children.forEach(o=>{o._forgetMemoizedResultFor(r)})}child(r){if(!(0<=r&&r<this._node.numChildren()))return;let o=this._childWrappers[r];if(!o){const p=this._node.childAt(r),g=this._node.childOffsets[r],O=this._baseInterval.subInterval(g,p.matchLength),$=p.isNonterminal()?O:this._baseInterval;o=this._childWrappers[r]=this._semantics.wrap(p,O,$)}return o}_children(){for(let r=0;r<this._node.numChildren();r++)this.child(r);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(r){const o=r||[],p=o.map($=>$._node),g=new Lt(p,[],-1,!1),O=this._semantics.wrap(g,null,null);return O._childWrappers=o,O}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class Ct{constructor(r,o){const p=this;if(this.grammar=r,this.checkedActionDicts=!1,this.Wrapper=class extends(o?o.Wrapper:ir){constructor(g,O,$){super(g,O,$),p.checkActionDictsIfHaventAlready(),this._semantics=p}toString(){return"[semantics wrapper for "+p.grammar.name+"]"}},this.super=o,o){if(!(r.equals(this.super.grammar)||r._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+r.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const g in this.attributes)Object.defineProperty(this.attributeKeys,g,{value:$t(g)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let r;for(r in this.operations)this.operations[r].checkActionDict(this.grammar);for(r in this.attributes)this.attributes[r].checkActionDict(this.grammar)}toRecipe(r){function o(g){return g.super!==Ct.BuiltInSemantics._getSemantics()}let p=`(function(g) {
`;if(o(this)){p+="  var semantics = "+this.super.toRecipe(!0)+"(g";const g=this.super.grammar;let O=this.grammar;for(;O!==g;)p+=".superGrammar",O=O.superGrammar;p+=`);
`,p+="  return g.extendSemantics(semantics)"}else p+="  return g.createSemantics()";return["Operation","Attribute"].forEach(g=>{const O=this[g.toLowerCase()+"s"];Object.keys(O).forEach($=>{const{actionDict:X,formals:Z,builtInDefault:pe}=O[$];let G=$;Z.length>0&&(G+="("+Z.join(", ")+")");let W;o(this)&&this.super[g.toLowerCase()+"s"][$]?W="extend"+g:W="add"+g,p+=`
    .`+W+"("+JSON.stringify(G)+", {";const ae=[];Object.keys(X).forEach(Ie=>{if(X[Ie]!==pe){let je=X[Ie].toString().trim();je=je.replace(/^.*\(/,"function("),ae.push(`
      `+JSON.stringify(Ie)+": "+je)}}),p+=ae.join(",")+`
    })`})}),p+=`;
  })`,r||(p=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+p+`(grammar);
  return semantics;
});
`),p}addOperationOrAttribute(r,o,p){const g=r+"s",O=Cn(o,r),{name:$}=O,{formals:X}=O;this.assertNewName($,r);const Z=Gn(r,$,W),pe={_default:Z};Object.keys(p).forEach(ae=>{pe[ae]=p[ae]});const G=r==="operation"?new be($,X,pe,Z):new He($,pe,Z);G.checkActionDict(this.grammar),this[g][$]=G;function W(...ae){const Ie=this._semantics[g][$];if(arguments.length!==Ie.formals.length)throw new Error("Invalid number of arguments passed to "+$+" "+r+" (expected "+Ie.formals.length+", got "+arguments.length+")");const je=Object.create(null);for(const[Tn,sr]of Object.entries(ae)){const $a=Ie.formals[Tn];je[$a]=sr}const gt=this.args;this.args=je;const St=Ie.execute(this._semantics,this);return this.args=gt,St}r==="operation"?(this.Wrapper.prototype[$]=W,this.Wrapper.prototype[$].toString=function(){return"["+$+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,$,{get:W,configurable:!0}),Object.defineProperty(this.attributeKeys,$,{value:$t($)}))}extendOperationOrAttribute(r,o,p){const g=r+"s";if(Cn(o,"attribute"),!(this.super&&o in this.super[g]))throw new Error("Cannot extend "+r+" '"+o+"': did not inherit an "+r+" with that name");if(mn(this[g],o))throw new Error("Cannot extend "+r+" '"+o+"' again");const O=this[g][o].formals,$=this[g][o].actionDict,X=Object.create($);Object.keys(p).forEach(Z=>{X[Z]=p[Z]}),this[g][o]=r==="operation"?new be(o,O,X):new He(o,X),this[g][o].checkActionDict(this.grammar)}assertNewName(r,o){if(mn(ir.prototype,r))throw new Error("Cannot add "+o+" '"+r+"': that's a reserved name");if(r in this.operations)throw new Error("Cannot add "+o+" '"+r+"': an operation with that name already exists");if(r in this.attributes)throw new Error("Cannot add "+o+" '"+r+"': an attribute with that name already exists")}wrap(r,o,p){const g=p||o;return r instanceof this.Wrapper?r:new this.Wrapper(r,o,g)}}function Cn(u,r){if(!Ct.prototypeGrammar)return e(u.indexOf("(")===-1),{name:u,formals:[]};const o=Ct.prototypeGrammar.match(u,r==="operation"?"OperationSignature":"AttributeSignature");if(o.failed())throw new Error(o.message);return Ct.prototypeGrammarSemantics(o).parse()}function Gn(u,r,o){return function(...p){const O=(this._semantics.operations[r]||this._semantics.attributes[r]).formals.map($=>this.args[$]);if(!this.isIteration()&&p.length===1)return o.apply(p[0],O);throw vt(this.ctorName,r,u,at)}}Ct.createSemantics=function(u,r){const o=new Ct(u,r!==void 0?r:Ct.BuiltInSemantics._getSemantics()),p=function(O){if(!(O instanceof f))throw new TypeError("Semantics expected a MatchResult, but got "+Y(O));if(O.failed())throw new TypeError("cannot apply Semantics to "+O.toString());const $=O._cst;if($.grammar!==u)throw new Error("Cannot use a MatchResult from grammar '"+$.grammar.name+"' with a semantics for '"+u.name+"'");const X=new $e(O.input);return o.wrap($,X.interval(O._cstOffset,O.input.length))};return p.addOperation=function(g,O){return o.addOperationOrAttribute("operation",g,O),p},p.extendOperation=function(g,O){return o.extendOperationOrAttribute("operation",g,O),p},p.addAttribute=function(g,O){return o.addOperationOrAttribute("attribute",g,O),p},p.extendAttribute=function(g,O){return o.extendOperationOrAttribute("attribute",g,O),p},p._getActionDict=function(g){const O=o.operations[g]||o.attributes[g];if(!O)throw new Error('"'+g+'" is not a valid operation or attribute name in this semantics for "'+u.name+'"');return O.actionDict},p._remove=function(g){let O;return g in o.operations?(O=o.operations[g],delete o.operations[g]):g in o.attributes&&(O=o.attributes[g],delete o.attributes[g]),delete o.Wrapper.prototype[g],O},p.getOperationNames=function(){return Object.keys(o.operations)},p.getAttributeNames=function(){return Object.keys(o.attributes)},p.getGrammar=function(){return o.grammar},p.toRecipe=function(g){return o.toRecipe(g)},p.toString=o.toString.bind(o),p._getSemantics=function(){return o},p};class be{constructor(r,o,p,g){this.name=r,this.formals=o,this.actionDict=p,this.builtInDefault=g}checkActionDict(r){r._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(r,o){try{const{ctorName:p}=o._node;let g=this.actionDict[p];return g?(at.push([this,p]),g.apply(o,o._children())):o.isNonterminal()&&(g=this.actionDict._nonterminal,g)?(at.push([this,"_nonterminal",p]),g.apply(o,o._children())):(at.push([this,"default action",p]),this.actionDict._default.apply(o,o._children()))}finally{at.pop()}}}be.prototype.typeName="operation";class He extends be{constructor(r,o,p){super(r,[],o,p)}execute(r,o){const p=o._node,g=r.attributeKeys[this.name];return mn(p,g)||(p[g]=be.prototype.execute.call(this,r,o)),p[g]}}He.prototype.typeName="attribute";const mt=["_iter","_terminal","_nonterminal","_default"];function Ye(u){return Object.keys(u.rules).sort().map(r=>u.rules[r])}const Et=u=>u.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Jt,xt;class nt{constructor(r,o,p,g){if(this.name=r,this.superGrammar=o,this.rules=p,g){if(!(g in p))throw new Error("Invalid start rule: '"+g+"' is not a rule in grammar '"+r+"'");this.defaultStartRule=g}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Se(this)}isBuiltIn(){return this===nt.ProtoBuiltInRules||this===nt.BuiltInRules}equals(r){if(this===r)return!0;if(r==null||this.name!==r.name||this.defaultStartRule!==r.defaultStartRule||!(this.superGrammar===r.superGrammar||this.superGrammar.equals(r.superGrammar)))return!1;const o=Ye(this),p=Ye(r);return o.length===p.length&&o.every((g,O)=>g.description===p[O].description&&g.formals.join(",")===p[O].formals.join(",")&&g.body.toString()===p[O].body.toString())}match(r,o){const p=this.matcher();return p.replaceInputRange(0,0,r),p.match(o)}trace(r,o){const p=this.matcher();return p.replaceInputRange(0,0,r),p.trace(o)}createSemantics(){return Ct.createSemantics(this)}extendSemantics(r){return Ct.createSemantics(this,r._getSemantics())}_checkTopDownActionDict(r,o,p){const g=[];for(const O in p){const $=p[O];if(!mt.includes(O)&&!(O in this.rules)){g.push(`'${O}' is not a valid semantic action for '${this.name}'`);continue}if(typeof $!="function"){g.push(`'${O}' must be a function in an action dictionary for '${this.name}'`);continue}const Z=$.length,pe=this._topDownActionArity(O);if(Z!==pe){let G;O==="_iter"||O==="_nonterminal"?G=`it should use a rest parameter, e.g. \`${O}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:G=`expected ${pe}, got ${Z}`,g.push(`Semantic action '${O}' has the wrong arity: ${G}`)}}if(g.length>0){const O=g.map(X=>"- "+X),$=new Error([`Found errors in the action dictionary of the '${o}' ${r}:`,...O].join(`
`));throw $.problems=g,$}}_topDownActionArity(r){return mt.includes(r)?0:this.rules[r].body.getArity()}_inheritsFrom(r){let o=this.superGrammar;for(;o;){if(o.equals(r,!0))return!0;o=o.superGrammar}return!1}toRecipe(r=void 0){const o={};this.source&&(o.source=this.source.contents);let p=null;this.defaultStartRule&&(p=this.defaultStartRule);const g={};Object.keys(this.rules).forEach(X=>{const Z=this.rules[X],{body:pe}=Z,G=!this.superGrammar||!this.superGrammar.rules[X];let W;G?W="define":W=pe instanceof se?"extend":"override";const ae={};if(Z.source&&this.source){const gt=Z.source.relativeTo(this.source);ae.sourceInterval=[gt.startIdx,gt.endIdx]}const Ie=G?Z.description:null,je=pe.outputRecipe(Z.formals,this.source);g[X]=[W,ae,Ie,Z.formals,je]});let O="null";r?O=r:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(O=this.superGrammar.toRecipe());const $=[...["grammar",o,this.name].map(JSON.stringify),O,...[p,g].map(JSON.stringify)];return Et(`[${$.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const r=new v;r.append("{");let o=!0;for(const p in this.rules){const{body:g}=this.rules[p];o?o=!1:r.append(","),r.append(`
`),r.append("  "),this.addSemanticActionTemplate(p,g,r)}return r.append(`
}`),r.contents()}addSemanticActionTemplate(r,o,p){p.append(r),p.append(": function(");const g=this._topDownActionArity(r);p.append(a("_",g).join(", ")),p.append(`) {
`),p.append("  }")}parseApplication(r){let o;if(r.indexOf("<")===-1)o=new ne(r);else{const g=Jt.match(r,"Base_application");o=xt(g,{})}if(!(o.ruleName in this.rules))throw Re(o.ruleName,this.name);const{formals:p}=this.rules[o.ruleName];if(p.length!==o.args.length){const{source:g}=this.rules[o.ruleName];throw K(o.ruleName,p.length,o.args.length,g)}return o}_setUpMatchState(r){this._matchStateInitializer&&this._matchStateInitializer(r)}}nt.ProtoBuiltInRules=new nt("ProtoBuiltInRules",void 0,{any:{body:N,formals:[],description:"any character",primitive:!0},end:{body:B,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new Yt(new F(0)),formals:["str"],primitive:!0},lower:{body:new Ee("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new Ee("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new Ee("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new ce(new ne("space")),formals:[]},space:{body:new y("\0"," "),formals:[],description:"a space"}}),nt.initApplicationParser=function(u,r){Jt=u,xt=r};class Ot{constructor(r){this.name=r}sourceInterval(r,o){return this.source.subInterval(r,o-r)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?nt.ProtoBuiltInRules:nt.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(r,o){const p=this.ensureSuperGrammar().rules[r];if(!p)throw P(r,this.superGrammar.name,o);return p}installOverriddenOrExtendedRule(r,o,p,g){const O=h(o);if(O.length>0)throw H(r,O,g);const $=this.ensureSuperGrammar().rules[r],X=$.formals,Z=X?X.length:0;if(o.length!==Z)throw K(r,Z,o.length,g);return this.install(r,o,p,$.description,g)}install(r,o,p,g,O,$=!1){return this.rules[r]={body:p.introduceParams(o),formals:o,description:g,source:O,primitive:$},this}withSuperGrammar(r){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=r,this.rules=Object.create(r.rules),r.isBuiltIn()||(this.defaultStartRule=r.defaultStartRule),this}withDefaultStartRule(r){return this.defaultStartRule=r,this}withSource(r){return this.source=new $e(r).interval(0,r.length),this}build(){const r=new nt(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);r._matchStateInitializer=r.superGrammar._matchStateInitializer,r.supportsIncrementalParsing=r.superGrammar.supportsIncrementalParsing;const o=[];let p=!1;return Object.keys(r.rules).forEach(g=>{const{body:O}=r.rules[g];try{O.assertChoicesHaveUniformArity(g)}catch($){o.push($)}try{O.assertAllApplicationsAreValid(g,r)}catch($){o.push($),p=!0}}),p||Object.keys(r.rules).forEach(g=>{const{body:O}=r.rules[g];try{O.assertIteratedExprsAreNotNullable(r,[])}catch($){o.push($)}}),o.length>0&&lt(o),this.source&&(r.source=this.source),r}define(r,o,p,g,O,$){if(this.ensureSuperGrammar(),this.superGrammar.rules[r])throw R(r,this.name,this.superGrammar.name,O);if(this.rules[r])throw R(r,this.name,this.name,O);const X=h(o);if(X.length>0)throw H(r,X,O);return this.install(r,o,p,g,O,$)}override(r,o,p,g,O){return this.ensureSuperGrammarRuleForOverriding(r,O),this.installOverriddenOrExtendedRule(r,o,p,O),this}extend(r,o,p,g,O){if(!this.ensureSuperGrammar().rules[r])throw M(r,this.superGrammar.name,O);const X=new se(this.superGrammar,r,p);return X.source=p.source,this.installOverriddenOrExtendedRule(r,o,X,O),this}}class Tt{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(r){return new Ot(r)}grammar(r,o,p,g,O){const $=new Ot(o);return p&&$.withSuperGrammar(p instanceof nt?p:this.fromRecipe(p)),g&&$.withDefaultStartRule(g),r&&r.source&&$.withSource(r.source),this.currentDecl=$,Object.keys(O).forEach(X=>{this.currentRuleName=X;const Z=O[X],pe=Z[0],G=Z[1],W=Z[2],ae=Z[3],Ie=this.fromRecipe(Z[4]);let je;$.source&&G&&G.sourceInterval&&(je=$.source.subInterval(G.sourceInterval[0],G.sourceInterval[1]-G.sourceInterval[0])),$[pe](X,ae,Ie,W,je)}),this.currentRuleName=this.currentDecl=null,$.build()}terminal(r){return new L(r)}range(r,o){return new y(r,o)}param(r){return new F(r)}alt(...r){let o=[];for(let p of r)p instanceof U||(p=this.fromRecipe(p)),p instanceof j?o=o.concat(p.terms):o.push(p);return o.length===1?o[0]:new j(o)}seq(...r){let o=[];for(let p of r)p instanceof U||(p=this.fromRecipe(p)),p instanceof J?o=o.concat(p.factors):o.push(p);return o.length===1?o[0]:new J(o)}star(r){return r instanceof U||(r=this.fromRecipe(r)),new ce(r)}plus(r){return r instanceof U||(r=this.fromRecipe(r)),new ke(r)}opt(r){return r instanceof U||(r=this.fromRecipe(r)),new ze(r)}not(r){return r instanceof U||(r=this.fromRecipe(r)),new ye(r)}lookahead(r){return r instanceof U||(r=this.fromRecipe(r)),new ge(r)}lex(r){return r instanceof U||(r=this.fromRecipe(r)),new We(r)}app(r,o){return o&&o.length>0&&(o=o.map(function(p){return p instanceof U?p:this.fromRecipe(p)},this)),new ne(r,o)}splice(r,o){return new me(this.currentDecl.superGrammar,this.currentRuleName,r.map(p=>this.fromRecipe(p)),o.map(p=>this.fromRecipe(p)))}fromRecipe(r){const o=r[0]==="grammar"?r.slice(1):r.slice(2),p=this[r[0]](...o),g=r[1];return g&&g.sourceInterval&&this.currentDecl&&p.withSource(this.currentDecl.sourceInterval(...g.sourceInterval)),p}}function et(u){return typeof u=="function"?u.call(new Tt):(typeof u=="string"&&(u=JSON.parse(u)),new Tt().fromRecipe(u))}var kt=et(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);nt.BuiltInRules=kt,ie(nt.BuiltInRules);var En=et(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const ct=Object.create(U.prototype);function On(u,r){for(const o in u)if(o===r)return!0;return!1}function gn(u,r,o){const p=new Tt;let g,O,$,X=!1;return(o||En).createSemantics().addOperation("visit",{Grammars(G){return G.children.map(W=>W.visit())},Grammar(G,W,ae,Ie,je){const gt=G.visit();g=p.newGrammar(gt),W.child(0)&&W.child(0).visit(),Ie.children.map(Tn=>Tn.visit());const St=g.build();if(St.source=this.source.trimmed(),On(r,gt))throw _e(St);return r[gt]=St,St},SuperGrammar(G,W){const ae=W.visit();if(ae==="null")g.withSuperGrammar(null);else{if(!r||!On(r,ae))throw oe(ae,r,W.source);g.withSuperGrammar(r[ae])}},Rule_define(G,W,ae,Ie,je){O=G.visit(),$=W.children.map(sr=>sr.visit())[0]||[],!g.defaultStartRule&&g.ensureSuperGrammar()!==nt.ProtoBuiltInRules&&g.withDefaultStartRule(O);const gt=je.visit(),St=ae.children.map(sr=>sr.visit())[0],Tn=this.source.trimmed();return g.define(O,$,gt,St,Tn)},Rule_override(G,W,ae,Ie){O=G.visit(),$=W.children.map(St=>St.visit())[0]||[];const je=this.source.trimmed();g.ensureSuperGrammarRuleForOverriding(O,je),X=!0;const gt=Ie.visit();return X=!1,g.override(O,$,gt,null,je)},Rule_extend(G,W,ae,Ie){O=G.visit(),$=W.children.map(St=>St.visit())[0]||[];const je=Ie.visit(),gt=this.source.trimmed();return g.extend(O,$,je,null,gt)},RuleBody(G,W){return p.alt(...W.visit()).withSource(this.source)},OverrideRuleBody(G,W){const ae=W.visit(),Ie=ae.indexOf(ct);if(Ie>=0){const je=ae.slice(0,Ie),gt=ae.slice(Ie+1);return gt.forEach(St=>{if(St===ct)throw we(St)}),new me(g.superGrammar,O,je,gt).withSource(this.source)}else return p.alt(...ae).withSource(this.source)},Formals(G,W,ae){return W.visit()},Params(G,W,ae){return W.visit()},Alt(G){return p.alt(...G.visit()).withSource(this.source)},TopLevelTerm_inline(G,W){const ae=O+"_"+W.visit(),Ie=G.visit(),je=this.source.trimmed(),gt=!(g.superGrammar&&g.superGrammar.rules[ae]);X&&!gt?g.override(ae,$,Ie,null,je):g.define(ae,$,Ie,null,je);const St=$.map(Tn=>p.app(Tn));return p.app(ae,St).withSource(Ie.source)},OverrideTopLevelTerm_superSplice(G){return ct},Seq(G){return p.seq(...G.children.map(W=>W.visit())).withSource(this.source)},Iter_star(G,W){return p.star(G.visit()).withSource(this.source)},Iter_plus(G,W){return p.plus(G.visit()).withSource(this.source)},Iter_opt(G,W){return p.opt(G.visit()).withSource(this.source)},Pred_not(G,W){return p.not(W.visit()).withSource(this.source)},Pred_lookahead(G,W){return p.lookahead(W.visit()).withSource(this.source)},Lex_lex(G,W){return p.lex(W.visit()).withSource(this.source)},Base_application(G,W){const ae=W.children.map(Ie=>Ie.visit())[0]||[];return p.app(G.visit(),ae).withSource(this.source)},Base_range(G,W,ae){return p.range(G.visit(),ae.visit()).withSource(this.source)},Base_terminal(G){return p.terminal(G.visit()).withSource(this.source)},Base_paren(G,W,ae){return W.visit()},ruleDescr(G,W,ae){return W.visit()},ruleDescrText(G){return this.sourceString.trim()},caseName(G,W,ae,Ie,je){return ae.visit()},name(G,W){return this.sourceString},nameFirst(G){},nameRest(G){},terminal(G,W,ae){return W.children.map(Ie=>Ie.visit()).join("")},oneCharTerminal(G,W,ae){return W.visit()},escapeChar(G){try{return q(this.sourceString)}catch(W){throw W instanceof RangeError&&W.message.startsWith("Invalid code point ")?Ne(G):W}},NonemptyListOf(G,W,ae){return[G.visit()].concat(ae.children.map(Ie=>Ie.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(u).visit()}var Zt=et(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Vn(nt.BuiltInRules),kn(Zt);function Vn(u){const r={empty(){return this.iteration()},nonEmpty(o,p,g){return this.iteration([o].concat(g.children))}};Ct.BuiltInSemantics=Ct.createSemantics(u,null).addOperation("asIteration",{emptyListOf:r.empty,nonemptyListOf:r.nonEmpty,EmptyListOf:r.empty,NonemptyListOf:r.nonEmpty})}function kn(u){Ct.prototypeGrammarSemantics=u.createSemantics().addOperation("parse",{AttributeSignature(r){return{name:r.parse(),formals:[]}},OperationSignature(r,o){return{name:r.parse(),formals:o.children.map(p=>p.parse())[0]||[]}},Formals(r,o,p){return o.asIteration().children.map(g=>g.parse())},name(r,o){return this.sourceString}}),Ct.prototypeGrammar=u}function Ca(u){let r=0;const o=[0],p=()=>o[o.length-1],g={},O=/( *).*(?:$|\r?\n|\r)/g;let $;for(;($=O.exec(u))!=null;){const[X,Z]=$;if(X.length===0)break;const pe=Z.length,G=p(),W=r+pe;if(pe>G)o.push(pe),g[W]=1;else if(pe<G){const ae=o.length;for(;p()!==pe;)o.pop();g[W]=-1*(ae-o.length)}r+=X.length}return o.length>1&&(g[r]=1-o.length),g}const Zi="an indented block",Qi="a dedent",Xi=1114112;class Ea extends $e{constructor(r){super(r.input),this.state=r}_indentationAt(r){return this.state.userData[r]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Xi):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),Xi):super.nextCodePoint()}}class es extends U{constructor(r=!0){super(),this.isIndent=r}allowsSkippingPrecedingSpace(){return!0}eval(r){const{inputStream:o}=r,p=r.userData;r.doNotMemoize=!0;const g=o.pos,O=this.isIndent?1:-1;return(p[g]||0)*O>0?(r.userData=Object.create(p),r.userData[g]-=O,r.pushBinding(new Ce(0),g),!0):(r.processFailure(g,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(r,o){}_isNullable(r,o){return!1}assertChoicesHaveUniformArity(r){}assertIteratedExprsAreNotNullable(r){}introduceParams(r){return this}substituteParams(r){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(r){const o=this.isIndent?Zi:Qi;return new st(this,o,"description")}}const Oa=new ne("indent"),Ta=new ne("dedent"),Pa=new me(kt,"any",[Oa,Ta],[]),ts=new Tt().newGrammar("IndentationSensitive").withSuperGrammar(kt).define("indent",[],new es(!0),Zi,void 0,!0).define("dedent",[],new es(!1),Qi,void 0,!0).extend("any",[],Pa,"any character",void 0).build();Object.assign(ts,{_matchStateInitializer(u){u.userData=Ca(u.input),u.inputStream=new Ea(u)},supportsIncrementalParsing:!1});const Ra="17.1.0";nt.initApplicationParser(En,gn);const La=u=>!!u.constructor&&typeof u.constructor.isBuffer=="function"&&u.constructor.isBuffer(u);function Da(u,r){const o=En.match(u,"Grammars");if(o.failed())throw A(o);return gn(o,r)}function Na(u,r){const o=ns(u,r),p=Object.keys(o);if(p.length===0)throw new Error("Missing grammar definition");if(p.length>1){const O=o[p[1]].source;throw new Error(hn(O.sourceString,O.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return o[p[0]]}function ns(u,r){const o=Object.create(r||{});if(typeof u!="string")if(La(u))u=u.toString();else throw new TypeError("Expected string as first argument, got "+Y(u));return Da(u,o),o}return Qt.ExperimentalIndentationSensitive=ts,Qt._buildGrammar=gn,Qt.grammar=Na,Qt.grammars=ns,Qt.makeRecipe=et,Qt.ohmGrammar=En,Qt.pexprs=ci,Qt.version=Ra,Qt}var mi,xs;function ga(){if(xs)return mi;xs=1;const{makeRecipe:t}=Jl();return mi=t(["grammar",{source:`PEP508 {
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
`],["terminal",{sourceInterval:[6127,6130]},"#"]]],["app",{sourceInterval:[6132,6135]},"any",[]]]]]}]),mi}var pr={},ks;function Ss(){return ks||(ks=1,function(t){var e=pr&&pr.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequirementsSyntaxError=t.semantics=void 0;const n=e(ga());t.semantics=n.default.createSemantics(),t.semantics.addOperation("extract",{File:s=>s.asIteration().children.map(c=>c.extract()).filter(Boolean),Line:(s,c)=>{var a;return((a=s.child(0))===null||a===void 0?void 0:a.extract())||null},NameReq:(s,c,a,h)=>{var x,I;return{type:"ProjectName",name:s.sourceString,versionSpec:a.extract(),extras:(x=c.child(0))===null||x===void 0?void 0:x.extract(),environmentMarkerTree:(I=h.child(0))===null||I===void 0?void 0:I.extract()}},UrlReq:(s,c,a,h,x)=>{var I,k;return{type:"ProjectURL",name:s.sourceString,url:a.extract(),extras:(I=c.child(0))===null||I===void 0?void 0:I.extract(),environmentMarkerTree:(k=x.child(0))===null||k===void 0?void 0:k.extract()}},Extras:(s,c,a)=>c.asIteration().children.map(h=>h.sourceString),RequirementsReq:(s,c)=>({type:"RequirementsFile",path:c.sourceString}),ConstraintsReq:(s,c)=>({type:"ConstraintsFile",path:c.sourceString}),UrlSpec:(s,c)=>c.sourceString,QuotedMarker:(s,c)=>c.extract(),MarkerOr_node:(s,c,a)=>({operator:"or",left:s.extract(),right:a.extract()}),MarkerAnd_node:(s,c,a)=>({operator:"and",left:s.extract(),right:a.extract()}),MarkerExpr_leaf:(s,c,a)=>({left:s.sourceString,operator:c.sourceString,right:a.sourceString}),MarkerExpr_node:(s,c,a)=>c.extract(),VersionSpec_parenthesized:(s,c,a)=>c.extract()||[],VersionMany:s=>{const c=s.asIteration().children;if(c.length!==0)return c.map(a=>a.extract())},VersionOne:(s,c)=>({operator:s.sourceString,version:c.sourceString})}),t.semantics.addOperation("extractLoosely",{LooseFile:s=>s.asIteration().children.map(c=>c.extractLoosely()).filter(Boolean),LooseLine:(s,c)=>{var a;return((a=s.child(0))===null||a===void 0?void 0:a.extractLoosely())||null},LooseNameReq:(s,c,a,h)=>({type:"ProjectName",name:s.sourceString}),LooseNonNameReq:s=>null});class i extends Error{}t.RequirementsSyntaxError=i}(pr)),pr}var Rn={},As;function Zl(){if(As)return Rn;As=1,Object.defineProperty(Rn,"__esModule",{value:!0}),Rn.VersionOperator=Rn.EnvironmentMarkerVariable=void 0;var t;(function(n){n.PythonVersion="python_version",n.PythonFullVersion="python_full_version",n.OsName="os_name",n.SysPlatform="sys_platform",n.PlatformRelease="platform_release",n.PlatformSystem="platform_system",n.PlatformVersion="platform_version",n.PlatformMachine="platform_machine",n.PlatformPythonImplementation="platform_python_implementation",n.ImplementationName="implementation_name",n.ImplementationVersion="implementation_version",n.Extra="extra"})(t||(Rn.EnvironmentMarkerVariable=t={}));var e;return function(n){n.CompatibleRelease="~=",n.VersionMatching="==",n.VersionExclusion="!=",n.LessThanOrMatching="<=",n.GreaterThanOrMatching=">=",n.LessThan="<",n.GreaterThan=">",n.ArbitrarilyEqual="==="}(e||(Rn.VersionOperator=e={})),Rn}var _s;function Ql(){return _s||(_s=1,function(t){var e=vn&&vn.__createBinding||(Object.create?function(C,v,T,q){q===void 0&&(q=T);var Y=Object.getOwnPropertyDescriptor(v,T);(!Y||("get"in Y?!v.__esModule:Y.writable||Y.configurable))&&(Y={enumerable:!0,get:function(){return v[T]}}),Object.defineProperty(C,q,Y)}:function(C,v,T,q){q===void 0&&(q=T),C[q]=v[T]}),n=vn&&vn.__exportStar||function(C,v){for(var T in C)T!=="default"&&!Object.prototype.hasOwnProperty.call(v,T)&&e(v,C,T)},i=vn&&vn.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(t,"__esModule",{value:!0}),t.parsePipRequirementsLineLoosely=t.parsePipRequirementsFileLoosely=t.parsePipRequirementsLine=t.parsePipRequirementsFile=t.RequirementsSyntaxError=void 0;const s=i(ga()),c=Ss();var a=Ss();Object.defineProperty(t,"RequirementsSyntaxError",{enumerable:!0,get:function(){return a.RequirementsSyntaxError}}),n(Zl(),t);function h(C){const v=s.default.match(C,"File");if(v.failed())throw new c.RequirementsSyntaxError(`Failed to parse requirements file. ${v.shortMessage}`);return(0,c.semantics)(v).extract()}t.parsePipRequirementsFile=h;function x(C){const v=s.default.match(C,"Line");if(v.failed())throw new c.RequirementsSyntaxError(`Failed to parse requirements line. ${v.shortMessage}`);return(0,c.semantics)(v).extract()}t.parsePipRequirementsLine=x;function I(C){const v=s.default.match(C,"LooseFile");if(v.failed())throw new c.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${v.shortMessage}`);return(0,c.semantics)(v).extractLoosely()}t.parsePipRequirementsFileLoosely=I;function k(C){const v=s.default.match(C,"LooseLine");if(v.failed())throw new c.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${v.shortMessage}`);return(0,c.semantics)(v).extractLoosely()}t.parsePipRequirementsLineLoosely=k}(vn)),vn}var Xl=Ql();function ec(t){return new Worker("/assets/pyworker-C-BOLKRv.js",{type:"module",name:t==null?void 0:t.name})}let tc=0;class nc{constructor(){this.pendingMessages=new Map}async init(e,n){this.workspace=e,this.vars=n??{},this.worker=new ec,this.worker.onmessage=i=>{this.handleWorkerMessage(i.data)},this.worker.onerror=i=>{console.error("Python Worker error:",i)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const i=e.payload.prompt||"Input:",s=window.prompt(i);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:s,cancelled:s===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:i,message:s}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",s,i);return}const n=this.pendingMessages.get(e.id);n&&(this.pendingMessages.delete(e.id),e.type==="success"?n.resolve(e.payload):e.type==="error"&&n.reject(new Error(e.payload.message)))}async sendMessage(e,n){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const i=`msg-${tc++}`,s={id:i,type:e,payload:n};return new Promise((c,a)=>{this.pendingMessages.set(i,{resolve:c,reject:a}),this.worker.postMessage(s)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,n){const i=await this.sendMessage("runFunction",{name:e,args:n});return yn(dr,this.workspace),i}async setGlobal(e,n){await this.sendMessage("setGlobal",{key:e,value:n})}async mountWorkspace(e="/workspace"){const n=await Mt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:n.getHandle(),mountPoint:e})}async installDependencies(){var n;const e=await((n=this.workspace)==null?void 0:n.getResource("requirements.txt"));if(e){const i=(await e.getContents()).replaceAll("\r",""),s=Xl.parsePipRequirementsFile(i).filter(c=>"name"in c).map(c=>c.name);await this.loadPackages(s)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),yn(dr,this.workspace)}async execCode(e){const n=await this.sendMessage("execCode",{code:e});return yn(dr,this.workspace),n}async execScript(e){const n=e.split(".")[0],i=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(n,i)}async execModule(e,n){const i=await this.sendMessage("execModule",{moduleName:e,entryName:n,vars:this.vars});return yn(dr,this.workspace),i}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class rc{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,pn(Ti,()=>{})}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const n=c=>{const a=c.detail;a&&Array.from(a.querySelectorAll("*")).filter(x=>x instanceof _t).forEach(x=>{Me.set(x),x.isEditor&&jr.set(x)})};e.addEventListener("tab-shown",n);const i=c=>{const a=c.detail;Array.from(a.querySelectorAll("*")).filter(x=>x instanceof _t).forEach(x=>{Me.get()==x&&Me.set(null),jr.get()==x&&jr.set(null)})};e.addEventListener("tab-closed",i),Zs(Ii,c=>{const h=c.closest("wa-tab-panel").getAttribute("name");e.markDirty(h,c.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((n,i)=>(i.ranking??0)-(n.ranking??0))}async handleInput(e){for(let n=0;n<this.editorInputHandlers.length;n++){const i=this.editorInputHandlers[n];if(i.canHandle(e))return await i.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${Vr}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const n=this.getEditorArea();if(!n){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(n),n.has(e.key)){n.activate(e.key);return}n.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}}const An=new rc;un.put("editorRegistry",An);const ic=`# 🌐 geo!space

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

**Happy mapping! 🗺️✨**`;pt({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}]},handler:{execute:async({params:t})=>{const e=await Mt.getWorkspace();if(!e){Qe("Please select a workspace!");return}let n=t==null?void 0:t.path;const i=t==null?void 0:t.contents,s=t==null?void 0:t.ask,c=t==null?void 0:t.extension;if((s||!n)&&(n=await br("Enter path to new file (directories will be created if not exist):",n||""),!n)||(c&&!n.endsWith(c)&&(n+=c),await e.getResource(n)&&!await wr(`File "${n}" already exists. Do you want to overwrite it?`)))return;const h=await e.getResource(n,{create:!0});h?(i&&await h.saveContents(i),Vt("File created: "+n)):Qe("Could not create file: "+n)}}});pt({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{var c;let e,n=t.params&&t.params.path;if(n){const a=await Mt.getWorkspace();a&&(e=await a.getResource(n))}if(e||(e=Ft.get()),!e){Qe("No resource to rename provided!");return}const i=e.getName(),s=((c=t.params)==null?void 0:c.newName)||await br(`Enter new name for "${i}":`,i);if(!(!s||s===i))try{await e.rename(s),Vt(`Resource renamed to: ${s}`)}catch(a){Qe(`Failed to rename ${i}: ${a.message}`)}}}});pt({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{let e,n=t.params&&t.params.path;if(n){const c=await Mt.getWorkspace();c&&(e=await c.getResource(n))}if(e||(e=Ft.get()),!e){Qe("No resource to delete provided!");return}n=e.getWorkspacePath();const i=t.params&&t.params.confirm;let s=!0;if((i===void 0||i===!0)&&(s=await wr(`Are you sure you want to delete ${n}?`)),s)try{await e.delete(),Vt("Resource deleted: "+n)}catch(c){Qe(`Resource ${n} could not be deleted: ${c.message||c}`)}}}});pt({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Mt.connectWorkspace(e)).catch(e=>{Qe(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});pt({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Mt.getWorkspace();e||Qe("No workspace selected."),e.touch()}}});pt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Mt.getWorkspace();e||Qe("No workspace selected.");const n=t.params.path,i=await(e==null?void 0:e.getResource(n));await An.loadEditor(i)}}});pt({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const n=new nc,i=await Mt.getWorkspace();await n.init(i,t),await n.installDependencies(),await n.execScript(e)}}});pt({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});pt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=Me.get();e&&e.isDirty()&&e.save()}},contribution:{target:Mi,icon:"floppy-disk",label:"Save active editor",slot:"end",disabled:()=>{const t=Me.get();return!t||!t.isDirty()}}});pt({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async t=>{const e=new $s(ic,"README.md");await An.loadEditor(e)}},contribution:{target:nr,icon:"question-circle",label:"Welcome"}});pt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{document.documentElement.classList.toggle("wa-dark")||document.documentElement.classList.toggle("wa-light")}},contribution:{target:nr,icon:"circle-half-stroke",label:"Theme Switcher"}});pt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:nr,icon:"expand",label:"Fullscreen"}});pt({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:t=>{const e={title:"settings.json",data:{async getContents(){const n=await tn.getAll();return JSON.stringify(n,void 0,2)},getName(){return e.key},saveContents(n){const i=JSON.parse(n);return tn.setAll(i)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>Q`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,An.loadEditor(e).then()}},contribution:{target:nr,icon:"gear",label:"Open Settings"}});pt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>Q`
                <k-extensions></k-extensions>`,An.loadEditor(e).then()}},contribution:{target:nr,icon:"puzzle-piece",label:"Open Extensions"}});Ae.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?Qe(t):Vt(t))}}});const va="events/chatservice/aiConfigChanged",$r="aiConfig",sc={defaultProvider:"ollama",providers:[{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""},{name:"openai",model:"gpt-4.1-mini",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"},{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"},{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"},{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}]},Cr="chatservice.prompts",ac={name:"openai-api",canHandle:t=>!0,completionApi:async t=>(await fetch(t.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${t.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({model:t.model,stream:t.stream,messages:t.messages,...t.chatConfig.parameters})})).json().then(n=>({role:"assistant",content:n.choices[0].message.content}))};class oc{constructor(){this.fetchers=[],this.promptContributions=[],pn(Ri,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.promptContributions=ut.getContributions(Cr)}registerFetcher(e){this.fetchers.push(e)}async checkAIConfig(){this.aiConfig||(this.aiConfig=await tn.get($r),this.aiConfig||(await tn.set($r,sc),this.aiConfig=await tn.get($r)),yn(va,this.aiConfig))}async getDefaultProvider(){var n;await this.checkAIConfig();const e=await this.getProviders();if((n=this.aiConfig)!=null&&n.defaultProvider){const i=e.find(s=>{var c;return s.name===((c=this.aiConfig)==null?void 0:c.defaultProvider)});if(i)return i}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig.defaultProvider=e,await tn.set($r,this.aiConfig),this.getDefaultProvider()}async getProviders(){var e;return await this.checkAIConfig(),((e=this.aiConfig)==null?void 0:e.providers)||[]}createMessage(e){return{role:"user",content:e}}getPromptContribution(e){return this.promptContributions.find(n=>n.role===e)}async handleUserPrompt(e){const n=e.chatConfig||await this.getDefaultProvider(),i=e.chatContext,s=this.promptContributions.map(a=>{const h=e.callContext.createChild({userPrompt:i.history[i.history.length-1].content});if(a.canHandle instanceof Function&&!a.canHandle(h.getProxy()))return;const x=i.history.map(v=>{let T=v.role,q=v.content;return T!=="user"&&(T!==a.role?(T="user",q=`***Another Assistant '${v.role}' replied:***
${q}`):T="assistant"),{role:T,content:q}});let I=x[x.length-1],k=a.sysPrompt;typeof k=="function"&&(k=k()),x.unshift({role:"system",content:k});const C=async()=>{const v={model:n.model,stream:!1,messages:x,chatConfig:n};return(this.fetchers.find(q=>q.canHandle(n))||ac).completionApi(v).then(q=>q)};return a.promptDecorator instanceof Function?a.promptDecorator(h.getProxy()).then(v=>{v&&(I.content=v)}).then(C).then(async v=>(v.role=a.role,a.messageDecorator&&(h.put("message",v),a.messageDecorator(h.getProxy())),v)):C()}),c=await Promise.all(s.filter(a=>!!a));i.history.push(...c)}}const Ln=new oc;un.put("chatService",Ln);var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,dn=(t,e,n,i)=>{for(var s=i>1?void 0:i?cc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&lc(e,n,s),s};let Kt=class extends _t{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatContext=this.defaultChatContext,this.busy=!1,this.inputValue=""}onAIConfigChanged(){this.doBeforeUI()}onPartChanged(t){t&&"chatContext"in t?this.chatContext=t.chatContext:this.chatContext=this.defaultChatContext}doBeforeUI(){Ln.getProviders().then(t=>{this.providers=t||[]}),Ln.getDefaultProvider().then(t=>{this.defaultProvider=t})}updated(t){super.updated(t),(t.has("chatContext")||t.has("busy"))&&this.scrollToBottom()}scrollToBottom(){this.messagesContainer&&requestAnimationFrame(()=>{this.messagesContainer&&(this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight)})}onInput(t){const e=t.target;this.inputValue=e.value}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.sendMessage())}async sendMessage(){const t=this.inputValue.trim();!t||this.busy||(this.inputValue="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),await this.handlePrompt(t))}async runCommand(t,e){const n=e||Ae,i=t.trim().split(/\s+/);if(i.length===0)return;const s=i.shift(),c=n.getCommand(s);if(!c){Qe("Command not found: "+s);return}const a={};i.forEach((x,I)=>{a[c.parameters[I].name]=x});const h=n.createExecutionContext(this,a);n.execute(s,h),this.requestUpdate()}async handlePrompt(t){if(t.startsWith("/")){await this.runCommand(t.substring(1),Ae);return}const e=Ln.createMessage(t);this.chatContext.history.push(e),this.requestUpdate(),this.busy=!0;const n=Me.get(),i=zn.createChild({activePart:n,activeEditor:n!=null&&n.isEditor?n:null});Zn.runAsync("Calling AI assistant",s=>Ln.handleUserPrompt({chatContext:this.chatContext,callContext:i}).then(c=>{this.requestUpdate()})).catch(s=>{Qe(`${s}`)}).finally(()=>{this.busy=!1,i.destroy()})}async onChangeDefaultProvider(t){this.defaultProvider=await Ln.setDefaultProvider(t.currentTarget.value)}copyToClipboard(t){navigator.clipboard.writeText(t).then(()=>{}).catch(e=>{Qe(`Failed to copy: ${e}`)})}formatTimestamp(t=new Date){return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderMessage(t){var s;const e=t.role==="user",n=Ln.getPromptContribution(t.role),i=(n==null?void 0:n.label)||t.role;return Q`
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
                        ${ln((s=t.actions)==null?void 0:s.length,()=>{var c;return Q`
                            ${(c=t.actions)==null?void 0:c.map(a=>Q`
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
                    ${Xr(Ke.parse(t.content))}
                </div>
            </div>
        `}renderLoadingIndicator(){return Q`
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
        `}render(){var t;return Q`
            <div class="chat-container">
                ${ln(!this.defaultProvider,()=>Q`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Select a provider from the menu below</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map(e=>this.renderMessage(e))}
                    ${ln(this.busy,()=>this.renderLoadingIndicator())}
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
                            ${(t=this.providers)==null?void 0:t.map(e=>{var n;return Q`
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
        `}};Kt.styles=Rt`
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
    `;dn([ft()],Kt.prototype,"chatContext",2);dn([ft()],Kt.prototype,"providers",2);dn([ft()],Kt.prototype,"defaultProvider",2);dn([ft()],Kt.prototype,"busy",2);dn([ft()],Kt.prototype,"inputValue",2);dn([Ms(".chat-messages")],Kt.prototype,"messagesContainer",2);dn([Ms("wa-textarea")],Kt.prototype,"textareaElement",2);dn([Oi(va)],Kt.prototype,"onAIConfigChanged",1);dn([ri(Me)],Kt.prototype,"onPartChanged",1);Kt=dn([ht("k-aiassist")],Kt);var uc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,ya=(t,e,n,i)=>{for(var s=i>1?void 0:i?pc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&uc(e,n,s),s};let Zr=class extends _t{doInitUI(){pn(xi,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){rt.enable(t.id,!0),this.requestUpdate()}disable(t){rt.disable(t.id,!0),this.requestUpdate()}selectionChanged(t){this.selectedExtension=t.detail.selection[0].model}render(){return Q`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree style="--indent-guide-width: 1px;" slot="start"
                         @wa-selection-change="${this.selectionChanged}">
                    ${rt.getExtensions().map(t=>Q`
                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t} expanded>
                            <span><k-icon name="${t.icon}"></k-icon> ${t.name}</span>
                        </wa-tree-item>`)}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${ln(this.selectedExtension,t=>Q`
                        <h1><k-icon name="${t.icon}"></k-icon> ${t.name}</h1>
                        <hr>
                        <div>
                            ${ln(rt.isEnabled(t.id),()=>Q`
                                <wa-button title="Disable this extension" @click="${()=>this.disable(t)}"
                                           variant="danger" appearance="plain">
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>`,()=>Q`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(t)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${ln(t.experimental,()=>Q`
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
        `}};Zr.styles=Rt`
        :host {
        }
    `;ya([ft()],Zr.prototype,"selectedExtension",2);Zr=ya([ht("k-extensions")],Zr);var dc=Object.defineProperty,hc=Object.getOwnPropertyDescriptor,oi=(t,e,n,i)=>{for(var s=i>1?void 0:i?hc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&dc(e,n,s),s};let er=class extends _t{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Dn()}connectedCallback(){super.connectedCallback(),io(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),so()}log(t,e,n="info"){const i={timestamp:new Date,level:n,source:t,message:e};this.messages=[...this.messages,i],this.autoScroll&&this.updateComplete.then(()=>{const s=this.containerRef.value;s&&(s.scrollTop=s.scrollHeight)})}clear(){this.messages=[]}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}render(){const t=this.getFilteredMessages();return Q`
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
                <div class="messages" ${Nn(this.containerRef)}>
                    ${t.length===0?Q`<div class="empty-state">No log messages</div>`:t.map(e=>Q`
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
        `}};er.styles=Rt`
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
    `;oi([ft()],er.prototype,"messages",2);oi([ft()],er.prototype,"autoScroll",2);oi([ft()],er.prototype,"filter",2);er=oi([ht("k-log-terminal")],er);var fc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,nn=(t,e,n,i)=>{for(var s=i>1?void 0:i?mc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&fc(e,n,s),s};let zt=class extends Ir{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const t=Hs.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),pn(yr,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=ut.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){var e;if("command"in t){const n=t,i=(e=n.disabled)==null?void 0:e.get();return Q`
                <k-command 
                    cmd="${n.command}"
                    icon="${n.icon||""}"
                    ?disabled="${i}">
                    ${n.label}
                </k-command>
            `}if("html"in t){const i=t.html;return i instanceof Function?i():Xr(i)}return Pt}render(){const t=this.getKeybinding();return this.isInDropdown()?Q`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${t?Q`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?Q`
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
                    
                    ${this.title?Q`
                        <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:Pt}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?Q`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                        </k-command>
                    `:Pt}
                </wa-dropdown>
            `:Q`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${()=>this.handleClick()}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};zt.styles=Rt`
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
    `;nn([Ue()],zt.prototype,"cmd",2);nn([Ue()],zt.prototype,"title",2);nn([Ue()],zt.prototype,"icon",2);nn([Ue({type:Boolean})],zt.prototype,"disabled",2);nn([Ue()],zt.prototype,"appearance",2);nn([Ue()],zt.prototype,"size",2);nn([Ue({type:Object,attribute:!1})],zt.prototype,"params",2);nn([Ue()],zt.prototype,"dropdown",2);nn([Ue()],zt.prototype,"placement",2);nn([ft()],zt.prototype,"dropdownContributions",2);zt=nn([ht("k-command")],zt);var gc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,Wn=(t,e,n,i)=>{for(var s=i>1?void 0:i?vc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&gc(e,n,s),s};let bn=class extends Ir{constructor(){super(...arguments),this.title="",this.disabled=!1,this.appearance="plain",this.size="small"}handleClick(t){!this.disabled&&this.action&&(t.stopPropagation(),this.action(t))}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}render(){return this.isInDropdown()?Q`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${t=>this.handleClick(t)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                </wa-dropdown-item>
            `:Q`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${this.title}
                @click=${t=>this.handleClick(t)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};bn.styles=Rt`
        :host {
            display: inline-block;
        }
    `;Wn([Ue({type:Object,attribute:!1})],bn.prototype,"action",2);Wn([Ue()],bn.prototype,"title",2);Wn([Ue()],bn.prototype,"icon",2);Wn([Ue({type:Boolean})],bn.prototype,"disabled",2);Wn([Ue()],bn.prototype,"appearance",2);Wn([Ue()],bn.prototype,"size",2);bn=Wn([ht("k-action")],bn);var yc=Object.defineProperty,bc=Object.getOwnPropertyDescriptor,Hi=(t,e,n,i)=>{for(var s=i>1?void 0:i?bc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&yc(e,n,s),s};let vr=class extends Ir{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return Q`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};vr.styles=Rt`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;Hi([Ue()],vr.prototype,"message",2);Hi([Ue()],vr.prototype,"icon",2);vr=Hi([ht("k-no-content")],vr);function Mr(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gi={exports:{}},Cs;function wc(){return Cs||(Cs=1,function(t,e){(function(n){t.exports=n()})(function(){return function(){function n(i,s,c){function a(I,k){if(!s[I]){if(!i[I]){var C=typeof Mr=="function"&&Mr;if(!k&&C)return C(I,!0);if(h)return h(I,!0);var v=new Error("Cannot find module '"+I+"'");throw v.code="MODULE_NOT_FOUND",v}var T=s[I]={exports:{}};i[I][0].call(T.exports,function(q){var Y=i[I][1][q];return a(Y||q)},T,T.exports,n,i,s,c)}return s[I].exports}for(var h=typeof Mr=="function"&&Mr,x=0;x<c.length;x++)a(c[x]);return a}return n}()({1:[function(n,i,s){const c=n("./utils"),a=function(){const h=c.stringToArray,x=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],I=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],k=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],C=["Thousand","Million","Billion","Trillion"];function v(P,M){var R=function(ee,H,z){var te="";if(ee<=19)te=(H?" and ":"")+(z?I[ee]:x[ee]);else if(ee<100){const Te=Math.floor(ee/10),Le=ee%10;te=(H?" and ":"")+k[Te-2],Le>0?te+="-"+R(Le,!1,z):z&&(te=te.substring(0,te.length-1)+"ieth")}else if(ee<1e3){const Te=Math.floor(ee/100),Le=ee%100;te=(H?", ":"")+x[Te]+" Hundred",Le>0?te+=R(Le,!0,z):z&&(te+="th")}else{var he=Math.floor(Math.log10(ee)/3);he>C.length&&(he=C.length);const Te=Math.pow(10,he*3),Le=Math.floor(ee/Te),de=ee-Le*Te;te=(H?", ":"")+R(Le,!1,!1)+" "+C[he-1],de>0?te+=R(de,!0,z):z&&(te+="th")}return te},K=R(P,!1,M);return K}const T={};x.forEach(function(P,M){T[P.toLowerCase()]=M}),I.forEach(function(P,M){T[P.toLowerCase()]=M}),k.forEach(function(P,M){const R=P.toLowerCase();T[R]=(M+2)*10,T[R.substring(0,P.length-1)+"ieth"]=T[R]}),T.hundredth=100,C.forEach(function(P,M){const R=P.toLowerCase(),K=Math.pow(10,(M+1)*3);T[R]=K,T[R+"th"]=K});function q(P){const R=P.split(/,\s|\sand\s|[\s\\-]/).map(H=>T[H]);let K=[0];return R.forEach(H=>{if(H<100){let z=K.pop();z>=1e3&&(K.push(z),z=0),K.push(z+H)}else K.push(K.pop()*H)}),K.reduce((H,z)=>H+z,0)}const Y=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],ve={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function Oe(P){for(var M=0;M<Y.length;M++){const R=Y[M];if(P>=R[0])return R[1]+Oe(P-R[0])}return""}function U(P){for(var M=0,R=1,K=P.length-1;K>=0;K--){const ee=P[K],H=ve[ee];H<R?M-=H:(R=H,M+=H)}return M}function N(P,M){for(var R=[],K=M.charCodeAt(0);P>0;)R.unshift(String.fromCharCode((P-1)%26+K)),P=Math.floor((P-1)/26);return R.join("")}function B(P,M){for(var R=M.charCodeAt(0),K=0,ee=0;ee<P.length;ee++)K+=(P.charCodeAt(P.length-ee-1)-R+1)*Math.pow(26,ee);return K}function L(P,M){if(typeof P>"u")return;P=Math.floor(P);const R=me(M);return j(P,R)}const y={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},F={UPPER:"upper",LOWER:"lower",TITLE:"title"};function j(P,M){let R;const K=P<0;switch(P=Math.abs(P),M.primary){case y.LETTERS:R=N(P,M.case===F.UPPER?"A":"a");break;case y.ROMAN:R=Oe(P),M.case===F.UPPER&&(R=R.toUpperCase());break;case y.WORDS:R=v(P,M.ordinal),M.case===F.UPPER?R=R.toUpperCase():M.case===F.LOWER&&(R=R.toLowerCase());break;case y.DECIMAL:R=""+P;var ee=M.mandatoryDigits-R.length;if(ee>0){var H=new Array(ee+1).join("0");R=H+R}if(M.zeroCode!==48&&(R=h(R).map(Te=>String.fromCodePoint(Te.codePointAt(0)+M.zeroCode-48)).join("")),M.regular){const Te=Math.floor((R.length-1)/M.groupingSeparators.position);for(let Le=Te;Le>0;Le--){const de=R.length-Le*M.groupingSeparators.position;R=R.substr(0,de)+M.groupingSeparators.character+R.substr(de)}}else M.groupingSeparators.reverse().forEach(Te=>{const Le=R.length-Te.position;R=R.substr(0,Le)+Te.character+R.substr(Le)});if(M.ordinal){var z={1:"st",2:"nd",3:"rd"},te=R[R.length-1],he=z[te];(!he||R.length>1&&R[R.length-2]==="1")&&(he="th"),R=R+he}break;case y.SEQUENCE:throw{code:"D3130",value:M.token}}return K&&(R="-"+R),R}const se=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function me(P){const M={type:"integer",primary:y.DECIMAL,case:F.LOWER,ordinal:!1};let R,K;const ee=P.lastIndexOf(";");switch(ee===-1?R=P:(R=P.substring(0,ee),K=P.substring(ee+1),K[0]==="o"&&(M.ordinal=!0)),R){case"A":M.case=F.UPPER;case"a":M.primary=y.LETTERS;break;case"I":M.case=F.UPPER;case"i":M.primary=y.ROMAN;break;case"W":M.case=F.UPPER,M.primary=y.WORDS;break;case"Ww":M.case=F.TITLE,M.primary=y.WORDS;break;case"w":M.primary=y.WORDS;break;default:{let H=null,z=0,te=0,he=[],Te=0;if(h(R).map(de=>de.codePointAt(0)).reverse().forEach(de=>{let we=!1;for(let Ne=0;Ne<se.length;Ne++){const ue=se[Ne];if(de>=ue&&de<=ue+9){if(we=!0,z++,Te++,H===null)H=ue;else if(ue!==H)throw{code:"D3131"};break}}we||(de===35?(Te++,te++):he.push({position:Te,character:String.fromCodePoint(de)}))}),z>0){M.primary=y.DECIMAL,M.zeroCode=H,M.mandatoryDigits=z,M.optionalDigits=te;const we=function(Ne){if(Ne.length===0)return 0;const ue=Ne[0].character;for(let lt=1;lt<Ne.length;lt++)if(Ne[lt].character!==ue)return 0;const ot=Ne.map(lt=>lt.position),Nt=function(lt,yt){return yt===0?lt:Nt(yt,lt%yt)},vt=ot.reduce(Nt);for(let lt=1;lt<=ot.length;lt++)if(ot.indexOf(lt*vt)===-1)return 0;return vt}(he);we>0?(M.regular=!0,M.groupingSeparators={position:we,character:he[0].character}):(M.regular=!1,M.groupingSeparators=he)}else M.primary=y.SEQUENCE,M.token=R}}return M}const J={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function re(P){var M=[];const R={type:"datetime",parts:M},K=function(we,Ne){if(Ne>we){let ue=P.substring(we,Ne);ue=ue.split("]]").join("]"),M.push({type:"literal",value:ue})}};for(var ee=0,H=0;H<P.length;){if(P.charAt(H)==="["){if(P.charAt(H+1)==="["){K(ee,H),M.push({type:"literal",value:"["}),H+=2,ee=H;continue}if(K(ee,H),ee=H,H=P.indexOf("]",ee),H===-1)throw{code:"D3135"};let we=P.substring(ee+1,H);we=we.split(/\s+/).join("");var z={type:"marker",component:we.charAt(0)},te=we.lastIndexOf(","),he;if(te!==-1){const Ne=we.substring(te+1),ue=Ne.indexOf("-");let ot,Nt;const vt=function(yt){if(!(typeof yt>"u"||yt==="*"))return parseInt(yt)};ue===-1?ot=Ne:(ot=Ne.substring(0,ue),Nt=Ne.substring(ue+1));const lt={min:vt(ot),max:vt(Nt)};z.width=lt,he=we.substring(1,te)}else he=we.substring(1);if(he.length===1)z.presentation1=he;else if(he.length>1){var Te=he.charAt(he.length-1);"atco".indexOf(Te)!==-1?(z.presentation2=Te,Te==="o"&&(z.ordinal=!0),z.presentation1=he.substring(0,he.length-1)):z.presentation1=he}else z.presentation1=J[z.component];if(typeof z.presentation1>"u")throw{code:"D3132",value:z.component};if(z.presentation1[0]==="n")z.names=F.LOWER;else if(z.presentation1[0]==="N")z.presentation1[1]==="n"?z.names=F.TITLE:z.names=F.UPPER;else if("YMDdFWwXxHhmsf".indexOf(z.component)!==-1){var Le=z.presentation1;if(z.presentation2&&(Le+=";"+z.presentation2),z.integerFormat=me(Le),z.width&&z.width.min!==void 0&&z.integerFormat.mandatoryDigits<z.width.min&&(z.integerFormat.mandatoryDigits=z.width.min),"YMD".indexOf(z.component)!==-1)if(z.n=-1,z.width&&z.width.max!==void 0)z.n=z.width.max,z.integerFormat.mandatoryDigits=z.n;else{var de=z.integerFormat.mandatoryDigits+z.integerFormat.optionalDigits;de>=2&&(z.n=de)}}(z.component==="Z"||z.component==="z")&&(z.integerFormat=me(z.presentation1)),M.push(z),ee=H+1}H++}return K(ee,H),R}const ce=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ke=["January","February","March","April","May","June","July","August","September","October","November","December"],ze=1e3*60*60*24,ye=function(P){const M=Date.UTC(P.year,P.month);var R=new Date(M).getUTCDay();return R===0&&(R=7),R>4?M+(8-R)*ze:M-(R-1)*ze},ge=function(P,M){return{year:P,month:M,nextMonth:function(){return M===11?ge(P+1,0):ge(P,M+1)},previousMonth:function(){return M===0?ge(P-1,11):ge(P,M-1)},nextYear:function(){return ge(P+1,M)},previousYear:function(){return ge(P-1,M)}}},We=function(P,M){return(M-P)/(ze*7)+1},ne=(P,M)=>{let R;switch(M){case"Y":R=P.getUTCFullYear();break;case"M":R=P.getUTCMonth()+1;break;case"D":R=P.getUTCDate();break;case"d":{const K=Date.UTC(P.getUTCFullYear(),P.getUTCMonth(),P.getUTCDate()),ee=Date.UTC(P.getUTCFullYear(),0);R=(K-ee)/ze+1;break}case"F":R=P.getUTCDay(),R===0&&(R=7);break;case"W":{const K=ge(P.getUTCFullYear(),0),ee=ye(K),H=Date.UTC(K.year,P.getUTCMonth(),P.getUTCDate());let z=We(ee,H);if(z>52){const te=ye(K.nextYear());H>=te&&(z=1)}else if(z<1){const te=ye(K.previousYear());z=We(te,H)}R=Math.floor(z);break}case"w":{const K=ge(P.getUTCFullYear(),P.getUTCMonth()),ee=ye(K),H=Date.UTC(K.year,K.month,P.getUTCDate());let z=We(ee,H);if(z>4){const te=ye(K.nextMonth());H>=te&&(z=1)}else if(z<1){const te=ye(K.previousMonth());z=We(te,H)}R=Math.floor(z);break}case"X":{const K=ge(P.getUTCFullYear(),0),ee=ye(K),H=ye(K.nextYear()),z=P.getTime();z<ee?R=K.year-1:z>=H?R=K.year+1:R=K.year;break}case"x":{const K=ge(P.getUTCFullYear(),P.getUTCMonth()),ee=ye(K),H=K.nextMonth(),z=ye(H),te=P.getTime();te<ee?R=K.previousMonth().month+1:te>=z?R=H.month+1:R=K.month+1;break}case"H":R=P.getUTCHours();break;case"h":R=P.getUTCHours(),R=R%12,R===0&&(R=12);break;case"P":R=P.getUTCHours()>=12?"pm":"am";break;case"m":R=P.getUTCMinutes();break;case"s":R=P.getUTCSeconds();break;case"f":R=P.getUTCMilliseconds();break;case"Z":case"z":break;case"C":R="ISO";break;case"E":R="ISO";break}return R};let Ee=null;function Pe(P,M,R){var K=0,ee=0;if(typeof R<"u"){const Le=parseInt(R);K=Math.floor(Le/100),ee=Le%100}var H=function(Le,de){var we=ne(Le,de.component);if("YMDdFWwXxHhms".indexOf(de.component)!==-1)if(de.component==="Y"&&de.n!==-1&&(we=we%Math.pow(10,de.n)),de.names){if(de.component==="M"||de.component==="x")we=ke[we-1];else if(de.component==="F")we=ce[we];else throw{code:"D3133",value:de.component};de.names===F.UPPER?we=we.toUpperCase():de.names===F.LOWER&&(we=we.toLowerCase()),de.width&&we.length>de.width.max&&(we=we.substring(0,de.width.max))}else we=j(we,de.integerFormat);else if(de.component==="f")we=j(we,de.integerFormat);else if(de.component==="Z"||de.component==="z"){const Ne=K*100+ee;if(de.integerFormat.regular)we=j(Ne,de.integerFormat);else{const ue=de.integerFormat.mandatoryDigits;if(ue===1||ue===2)we=j(K,de.integerFormat),ee!==0&&(we+=":"+L(ee,"00"));else if(ue===3||ue===4)we=j(Ne,de.integerFormat);else throw{code:"D3134",value:ue}}Ne>=0&&(we="+"+we),de.component==="z"&&(we="GMT"+we),Ne===0&&de.presentation2==="t"&&(we="Z")}else de.component==="P"&&de.names===F.UPPER&&(we=we.toUpperCase());return we};let z;typeof M>"u"?(Ee===null&&(Ee=re("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),z=Ee):z=re(M);const te=(60*K+ee)*60*1e3,he=new Date(P+te);let Te="";return z.parts.forEach(function(Le){Le.type==="literal"?Te+=Le.value:Te+=H(he,Le)}),Te}function b(P){var M={};if(P.type==="datetime")M.type="datetime",M.parts=P.parts.map(function(R){var K={};if(R.type==="literal")K.regex=R.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(R.component==="Z"||R.component==="z"){let H;Array.isArray(R.integerFormat.groupingSeparators)||(H=R.integerFormat.groupingSeparators),K.regex="",R.component==="z"&&(K.regex="GMT"),K.regex+="[-+][0-9]+",H&&(K.regex+=H.character+"[0-9]+"),K.parse=function(z){R.component==="z"&&(z=z.substring(3));let te=0,he=0;return H?(te=Number.parseInt(z.substring(0,z.indexOf(H.character))),he=Number.parseInt(z.substring(z.indexOf(H.character)+1))):z.length-1<=2?te=Number.parseInt(z):(te=Number.parseInt(z.substring(0,3)),he=Number.parseInt(z.substring(3))),te*60+he}}else if(R.integerFormat)R.integerFormat.n=R.n,K=b(R.integerFormat);else{K.regex="[a-zA-Z]+";var ee={};if(R.component==="M"||R.component==="x")ke.forEach(function(H,z){R.width&&R.width.max?ee[H.substring(0,R.width.max)]=z+1:ee[H]=z+1});else if(R.component==="F")ce.forEach(function(H,z){z>0&&(R.width&&R.width.max?ee[H.substring(0,R.width.max)]=z:ee[H]=z)});else if(R.component==="P")ee={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:R.component};K.parse=function(H){return ee[H]}}return K.component=R.component,K});else{M.type="integer";const R=P.case===F.UPPER;let K;switch(P.n&&P.n>0?P.optionalDigits===0?K=`{${P.n}}`:K=`{${P.n-P.optionalDigits},${P.n}}`:K="+",P.primary){case y.LETTERS:M.regex=R?"[A-Z]+":"[a-z]+",M.parse=function(ee){return B(ee,R?"A":"a")};break;case y.ROMAN:M.regex=R?"[MDCLXVI]+":"[mdclxvi]+",M.parse=function(ee){return U(R?ee:ee.toUpperCase())};break;case y.WORDS:M.regex="(?:"+Object.keys(T).concat("and","[\\-, ]").join("|")+")+",M.parse=function(ee){return q(ee.toLowerCase())};break;case y.DECIMAL:M.regex=`[0-9]${K}`,P.ordinal&&(M.regex+="(?:th|st|nd|rd)"),M.parse=function(ee){let H=ee;return P.ordinal&&(H=ee.substring(0,ee.length-2)),P.regular?H=H.split(",").join(""):P.groupingSeparators.forEach(z=>{H=H.split(z.character).join("")}),P.zeroCode!==48&&(H=H.split("").map(z=>String.fromCodePoint(z.codePointAt(0)-P.zeroCode+48)).join("")),parseInt(H)};break;case y.SEQUENCE:throw{code:"D3130",value:P.token}}}return M}function A(P,M){if(typeof P>"u")return;const R=me(M);return b(R).parse(P)}function oe(P,M){const R=re(M),K=b(R),ee="^"+K.parts.map(he=>"("+he.regex+")").join("")+"$";var z=new RegExp(ee,"i").exec(P);if(z!==null){const ue={};for(let $e=1;$e<z.length;$e++){const f=K.parts[$e-1];f.parse&&(ue[f.component]=f.parse(z[$e]))}if(Object.getOwnPropertyNames(ue).length===0)return;let ot=0;const Nt=$e=>{ot<<=1,ot+=$e?1:0},vt=$e=>!(~$e&ot)&&!!($e&ot);"YXMxWwdD".split("").forEach($e=>Nt(ue[$e]));const yt=!vt(161)&&vt(130),jt=vt(84),sn=!jt&&vt(72);ot=0,"PHhmsf".split("").forEach($e=>Nt(ue[$e]));const Ht=!vt(23)&&vt(47),hn=(yt?"YD":jt?"XxwF":sn?"XWF":"YMD")+(Ht?"Phmsf":"Hmsf"),$t=this.environment.timestamp;let tt=!1,Ut=!1;if(hn.split("").forEach($e=>{if(typeof ue[$e]>"u")tt?(ue[$e]="MDd".indexOf($e)!==-1?1:0,Ut=!0):ue[$e]=ne($t,$e);else if(tt=!0,Ut)throw{code:"D3136"}}),ue.M>0?ue.M-=1:ue.M=0,yt){const $e=Date.UTC(ue.Y,0),f=(ue.d-1)*1e3*60*60*24,w=new Date($e+f);ue.M=w.getUTCMonth(),ue.D=w.getUTCDate()}if(jt)throw{code:"D3136"};if(sn)throw{code:"D3136"};Ht&&(ue.H=ue.h===12?0:ue.h,ue.P===1&&(ue.H+=12));var te=Date.UTC(ue.Y,ue.M,ue.D,ue.H,ue.m,ue.s,ue.f);return(ue.Z||ue.z)&&(te-=(ue.Z||ue.z)*60*1e3),te}}var _e=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ge(P,M){if(!(typeof P>"u"))if(typeof M>"u"){if(!_e.test(P))throw{stack:new Error().stack,code:"D3110",value:P};return Date.parse(P)}else return oe.call(this,P,M)}function Re(P,M,R){if(!(typeof P>"u"))return Pe.call(this,P,M,R)}return{formatInteger:L,parseInteger:A,fromMillis:Re,toMillis:Ge}}();i.exports=a},{"./utils":6}],2:[function(n,i,s){(function(c){(function(){var a=n("./utils");const h=(()=>{var x=a.isNumeric,I=a.isArrayOfStrings,k=a.isArrayOfNumbers,C=a.createSequence,v=a.isSequence,T=a.isFunction,q=a.isLambda,Y=a.isPromise,ve=a.getFunctionArity,Oe=a.isDeepEqual,U=a.stringToArray;function N(l){if(!(typeof l>"u")){var d=0;return l.forEach(function(m){d+=m}),d}}function B(l){return typeof l>"u"?0:l.length}function L(l){if(!(typeof l>"u"||l.length===0))return Math.max.apply(Math,l)}function y(l){if(!(typeof l>"u"||l.length===0))return Math.min.apply(Math,l)}function F(l){if(!(typeof l>"u"||l.length===0)){var d=0;return l.forEach(function(m){d+=m}),d/l.length}}function j(l,d=!1){if(!(typeof l>"u")){var m;if(typeof l=="string")m=l;else if(T(l))m="";else{if(typeof l=="number"&&!isFinite(l))throw{code:"D3001",value:l,stack:new Error().stack};var E=d?2:0;Array.isArray(l)&&l.outerWrapper&&(l=l[0]),m=JSON.stringify(l,function(S,D){return typeof D<"u"&&D!==null&&D.toPrecision&&x(D)?Number(D.toPrecision(15)):D&&T(D)?"":D},E)}return m}}function se(l,d,m){if(!(typeof l>"u")){var E=U(l),S=E.length;if(S+d<0&&(d=0),typeof m<"u"){if(m<=0)return"";var D=d>=0?d+m:S+d+m;return E.slice(d,D).join("")}return E.slice(d).join("")}}function me(l,d){if(!(typeof l>"u")){var m=l.indexOf(d);return m>-1?l.substr(0,m):l}}function J(l,d){if(!(typeof l>"u")){var m=l.indexOf(d);return m>-1?l.substr(m+d.length):l}}function re(l){if(!(typeof l>"u"))return l.toLowerCase()}function ce(l){if(!(typeof l>"u"))return l.toUpperCase()}function ke(l){if(!(typeof l>"u"))return U(l).length}function ze(l){if(!(typeof l>"u")){var d=l.replace(/[ \t\n\r]+/gm," ");return d.charAt(0)===" "&&(d=d.substring(1)),d.charAt(d.length-1)===" "&&(d=d.substring(0,d.length-1)),d}}function ye(l,d,m){if(!(typeof l>"u")){(typeof m>"u"||m.length===0)&&(m=" ");var E,S=Math.abs(d)-ke(l);if(S>0){var D=new Array(S+1).join(m);m.length>1&&(D=se(D,0,S)),d>0?E=l+D:E=D+l}else E=l;return E}}async function ge(l,d){var m=l.apply(this,[d]);if(Y(m)&&(m=await m),m&&!(typeof m.start=="number"||m.end==="number"||Array.isArray(m.groups)||T(m.next)))throw{code:"T1010",stack:new Error().stack};return m}async function We(l,d){if(!(typeof l>"u")){var m;if(typeof d=="string")m=l.indexOf(d)!==-1;else{var E=await ge(d,l);m=typeof E<"u"}return m}}async function ne(l,d,m){if(!(typeof l>"u")){if(m<0)throw{stack:new Error().stack,value:m,code:"D3040",index:3};var E=C();if(typeof m>"u"||m>0){var S=0,D=await ge(d,l);if(typeof D<"u")for(;typeof D<"u"&&(typeof m>"u"||S<m);)E.push({match:D.match,index:D.start,groups:D.groups}),D=await ge(D.next),S++}return E}}async function Ee(l,d,m,E){if(!(typeof l>"u")){var S=this;if(d==="")throw{code:"D3010",stack:new Error().stack,value:d,index:2};if(E<0)throw{code:"D3011",stack:new Error().stack,value:E,index:4};var D;typeof m=="string"?D=function(De){for(var it="",Ce=0,Xe=m.indexOf("$",Ce);Xe!==-1&&Ce<m.length;){it+=m.substring(Ce,Xe),Ce=Xe+1;var Lt=m.charAt(Ce);if(Lt==="$")it+="$",Ce++;else if(Lt==="0")it+=De.match,Ce++;else{var Ve;if(De.groups.length===0?Ve=1:Ve=Math.floor(Math.log(De.groups.length)*Math.LOG10E)+1,Xe=parseInt(m.substring(Ce,Ce+Ve),10),Ve>1&&Xe>De.groups.length&&(Xe=parseInt(m.substring(Ce,Ce+Ve-1),10)),isNaN(Xe))it+="$";else{if(De.groups.length>0){var fn=De.groups[Xe-1];typeof fn<"u"&&(it+=fn)}Ce+=Xe.toString().length}}Xe=m.indexOf("$",Ce)}return it+=m.substring(Ce),it}:D=m;var V="",le=0;if(typeof E>"u"||E>0){var fe=0;if(typeof d=="string"){for(var Fe=l.indexOf(d,le);Fe!==-1&&(typeof E>"u"||fe<E);)V+=l.substring(le,Fe),V+=m,le=Fe+d.length,fe++,Fe=l.indexOf(d,le);V+=l.substring(le)}else{var xe=await ge(d,l);if(typeof xe<"u"){for(;typeof xe<"u"&&(typeof E>"u"||fe<E);){V+=l.substring(le,xe.start);var qe=D.apply(S,[xe]);if(Y(qe)&&(qe=await qe),typeof qe=="string")V+=qe;else throw{code:"D3012",stack:new Error().stack,value:qe};le=xe.start+xe.match.length,fe++,xe=await ge(xe.next)}V+=l.substring(le)}else V=l}}else V=l;return V}}function Pe(l){if(!(typeof l>"u")){var d=typeof window<"u"?window.btoa:function(m){return new c.Buffer.from(m,"binary").toString("base64")};return d(l)}}function b(l){if(!(typeof l>"u")){var d=typeof window<"u"?window.atob:function(m){return new c.Buffer.from(m,"base64").toString("binary")};return d(l)}}function A(l){if(!(typeof l>"u")){var d;try{d=encodeURIComponent(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"encodeUrlComponent"}}return d}}function oe(l){if(!(typeof l>"u")){var d;try{d=encodeURI(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"encodeUrl"}}return d}}function _e(l){if(!(typeof l>"u")){var d;try{d=decodeURIComponent(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"decodeUrlComponent"}}return d}}function Ge(l){if(!(typeof l>"u")){var d;try{d=decodeURI(l)}catch{throw{code:"D3140",stack:new Error().stack,value:l,functionName:"decodeUrl"}}return d}}async function Re(l,d,m){if(!(typeof l>"u")){if(m<0)throw{code:"D3020",stack:new Error().stack,value:m,index:3};var E=[];if(typeof m>"u"||m>0)if(typeof d=="string")E=l.split(d,m);else{var S=0,D=await ge(d,l);if(typeof D<"u"){for(var V=0;typeof D<"u"&&(typeof m>"u"||S<m);)E.push(l.substring(V,D.start)),V=D.end,D=await ge(D.next),S++;(typeof m>"u"||S<m)&&E.push(l.substring(V))}else E.push(l)}return E}}function P(l,d){if(!(typeof l>"u"))return typeof d>"u"&&(d=""),l.join(d)}function M(l,d,m){if(!(typeof l>"u")){var E={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},S=E;typeof m<"u"&&Object.keys(m).forEach(function(be){S[be]=m[be]});for(var D=[],V=S["zero-digit"].charCodeAt(0),le=V;le<V+10;le++)D.push(String.fromCharCode(le));var fe=D.concat([S["decimal-separator"],S["exponent-separator"],S["grouping-separator"],S.digit,S["pattern-separator"]]),Fe=d.split(S["pattern-separator"]);if(Fe.length>2)throw{code:"D3080",stack:new Error().stack};var xe=function(be){var He=function(){for(var et,kt=0;kt<be.length;kt++)if(et=be.charAt(kt),fe.indexOf(et)!==-1&&et!==S["exponent-separator"])return be.substring(0,kt)}(),mt=function(){for(var et,kt=be.length-1;kt>=0;kt--)if(et=be.charAt(kt),fe.indexOf(et)!==-1&&et!==S["exponent-separator"])return be.substring(kt+1)}(),Ye=be.substring(He.length,be.length-mt.length),Et,Jt,xt,nt,Ot=be.indexOf(S["exponent-separator"],He.length);Ot===-1||Ot>be.length-mt.length?(Et=Ye,Jt=void 0):(Et=Ye.substring(0,Ot),Jt=Ye.substring(Ot+1));var Tt=Et.indexOf(S["decimal-separator"]);return Tt===-1?(xt=Et,nt=mt):(xt=Et.substring(0,Tt),nt=Et.substring(Tt+1)),{prefix:He,suffix:mt,activePart:Ye,mantissaPart:Et,exponentPart:Jt,integerPart:xt,fractionalPart:nt,subpicture:be}},qe=function(be){var He,mt,Ye=be.subpicture,Et=Ye.indexOf(S["decimal-separator"]);Et!==Ye.lastIndexOf(S["decimal-separator"])&&(He="D3081"),Ye.indexOf(S.percent)!==Ye.lastIndexOf(S.percent)&&(He="D3082"),Ye.indexOf(S["per-mille"])!==Ye.lastIndexOf(S["per-mille"])&&(He="D3083"),Ye.indexOf(S.percent)!==-1&&Ye.indexOf(S["per-mille"])!==-1&&(He="D3084");var Jt=!1;for(mt=0;mt<be.mantissaPart.length;mt++){var xt=be.mantissaPart.charAt(mt);if(D.indexOf(xt)!==-1||xt===S.digit){Jt=!0;break}}Jt||(He="D3085");var nt=be.activePart.split("").map(function(et){return fe.indexOf(et)===-1?"p":"a"}).join("");nt.indexOf("p")!==-1&&(He="D3086"),Et!==-1?(Ye.charAt(Et-1)===S["grouping-separator"]||Ye.charAt(Et+1)===S["grouping-separator"])&&(He="D3087"):be.integerPart.charAt(be.integerPart.length-1)===S["grouping-separator"]&&(He="D3088"),Ye.indexOf(S["grouping-separator"]+S["grouping-separator"])!==-1&&(He="D3089");var Ot=be.integerPart.indexOf(S.digit);Ot!==-1&&be.integerPart.substring(0,Ot).split("").filter(function(et){return D.indexOf(et)>-1}).length>0&&(He="D3090"),Ot=be.fractionalPart.lastIndexOf(S.digit),Ot!==-1&&be.fractionalPart.substring(Ot).split("").filter(function(et){return D.indexOf(et)>-1}).length>0&&(He="D3091");var Tt=typeof be.exponentPart=="string";if(Tt&&be.exponentPart.length>0&&(Ye.indexOf(S.percent)!==-1||Ye.indexOf(S["per-mille"])!==-1)&&(He="D3092"),Tt&&(be.exponentPart.length===0||be.exponentPart.split("").filter(function(et){return D.indexOf(et)===-1}).length>0)&&(He="D3093"),He)throw{code:He,stack:new Error().stack}},De=function(be){var He=function(ct,On){for(var gn=[],Zt=ct.indexOf(S["grouping-separator"]);Zt!==-1;){var Vn=(On?ct.substring(0,Zt):ct.substring(Zt)).split("").filter(function(kn){return D.indexOf(kn)!==-1||kn===S.digit}).length;gn.push(Vn),Zt=be.integerPart.indexOf(S["grouping-separator"],Zt+1)}return gn},mt=He(be.integerPart),Ye=function(ct){if(ct.length===0)return 0;for(var On=function(Vn,kn){return kn===0?Vn:On(kn,Vn%kn)},gn=ct.reduce(On),Zt=1;Zt<=ct.length;Zt++)if(ct.indexOf(Zt*gn)===-1)return 0;return gn},Et=Ye(mt),Jt=He(be.fractionalPart,!0),xt=be.integerPart.split("").filter(function(ct){return D.indexOf(ct)!==-1}).length,nt=xt,Ot=be.fractionalPart.split(""),Tt=Ot.filter(function(ct){return D.indexOf(ct)!==-1}).length,et=Ot.filter(function(ct){return D.indexOf(ct)!==-1||ct===S.digit}).length,kt=typeof be.exponentPart=="string";xt===0&&et===0&&(kt?(Tt=1,et=1):xt=1),kt&&xt===0&&be.integerPart.indexOf(S.digit)!==-1&&(xt=1),xt===0&&Tt===0&&(Tt=1);var En=0;return kt&&(En=be.exponentPart.split("").filter(function(ct){return D.indexOf(ct)!==-1}).length),{integerPartGroupingPositions:mt,regularGrouping:Et,minimumIntegerPartSize:xt,scalingFactor:nt,prefix:be.prefix,fractionalPartGroupingPositions:Jt,minimumFactionalPartSize:Tt,maximumFactionalPartSize:et,minimumExponentSize:En,suffix:be.suffix,picture:be.subpicture}},it=Fe.map(xe);it.forEach(qe);var Ce=it.map(De),Xe=S["minus-sign"],Lt=S["zero-digit"],Ve=S["decimal-separator"],fn=S["grouping-separator"];Ce.length===1&&(Ce.push(JSON.parse(JSON.stringify(Ce[0]))),Ce[1].prefix=Xe+Ce[1].prefix);var Ze;l>=0?Ze=Ce[0]:Ze=Ce[1];var _n;Ze.picture.indexOf(S.percent)!==-1?_n=l*100:Ze.picture.indexOf(S["per-mille"])!==-1?_n=l*1e3:_n=l;var st,Yt;if(Ze.minimumExponentSize===0)st=_n;else{var ci=Math.pow(10,Ze.scalingFactor),Or=Math.pow(10,Ze.scalingFactor-1);for(st=_n,Yt=0;st<Or;)st*=10,Yt-=1;for(;st>ci;)st/=10,Yt+=1}var rr=te(st,Ze.maximumFactionalPartSize),Tr=function(be,He){var mt=Math.abs(be).toFixed(He);return Lt!=="0"&&(mt=mt.split("").map(function(Ye){return Ye>="0"&&Ye<="9"?D[Ye.charCodeAt(0)-48]:Ye}).join("")),mt},Se=Tr(rr,Ze.maximumFactionalPartSize),at=Se.indexOf(".");for(at===-1?Se=Se+Ve:Se=Se.replace(".",Ve);Se.charAt(0)===Lt;)Se=Se.substring(1);for(;Se.charAt(Se.length-1)===Lt;)Se=Se.substring(0,Se.length-1);at=Se.indexOf(Ve);var mn=Ze.minimumIntegerPartSize-at,ir=Ze.minimumFactionalPartSize-(Se.length-at-1);if(Se=(mn>0?new Array(mn+1).join(Lt):"")+Se,Se=Se+(ir>0?new Array(ir+1).join(Lt):""),at=Se.indexOf(Ve),Ze.regularGrouping>0)for(var Ct=Math.floor((at-1)/Ze.regularGrouping),Cn=1;Cn<=Ct;Cn++)Se=[Se.slice(0,at-Cn*Ze.regularGrouping),fn,Se.slice(at-Cn*Ze.regularGrouping)].join("");else Ze.integerPartGroupingPositions.forEach(function(be){Se=[Se.slice(0,at-be),fn,Se.slice(at-be)].join(""),at++});if(at=Se.indexOf(Ve),Ze.fractionalPartGroupingPositions.forEach(function(be){Se=[Se.slice(0,be+at+1),fn,Se.slice(be+at+1)].join("")}),at=Se.indexOf(Ve),(Ze.picture.indexOf(Ve)===-1||at===Se.length-1)&&(Se=Se.substring(0,Se.length-1)),typeof Yt<"u"){var Gn=Tr(Yt,0);mn=Ze.minimumExponentSize-Gn.length,mn>0&&(Gn=new Array(mn+1).join(Lt)+Gn),Se=Se+S["exponent-separator"]+(Yt<0?Xe:"")+Gn}return Se=Ze.prefix+Se+Ze.suffix,Se}}function R(l,d){if(!(typeof l>"u")){if(l=te(l),typeof d>"u"?d=10:d=te(d),d<2||d>36)throw{code:"D3100",stack:new Error().stack,value:d};var m=l.toString(d);return m}}function K(l){var d;if(!(typeof l>"u")){if(typeof l=="number")d=l;else if(typeof l=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(l)&&!isNaN(parseFloat(l))&&isFinite(l))d=parseFloat(l);else if(typeof l=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(l))d=Number(l);else if(l===!0)d=1;else if(l===!1)d=0;else throw{code:"D3030",value:l,stack:new Error().stack,index:1};return d}}function ee(l){var d;if(!(typeof l>"u"))return d=Math.abs(l),d}function H(l){var d;if(!(typeof l>"u"))return d=Math.floor(l),d}function z(l){var d;if(!(typeof l>"u"))return d=Math.ceil(l),d}function te(l,d){var m;if(!(typeof l>"u")){if(d){var E=l.toString().split("e");l=+(E[0]+"e"+(E[1]?+E[1]+d:d))}m=Math.round(l);var S=m-l;return Math.abs(S)===.5&&Math.abs(m%2)===1&&(m=m-1),d&&(E=m.toString().split("e"),m=+(E[0]+"e"+(E[1]?+E[1]-d:-d))),Object.is(m,-0)&&(m=0),m}}function he(l){var d;if(!(typeof l>"u")){if(l<0)throw{stack:new Error().stack,code:"D3060",index:1,value:l};return d=Math.sqrt(l),d}}function Te(l,d){var m;if(!(typeof l>"u")){if(m=Math.pow(l,d),!isFinite(m))throw{stack:new Error().stack,code:"D3061",index:1,value:l,exp:d};return m}}function Le(){return Math.random()}function de(l){if(!(typeof l>"u")){var d=!1;if(Array.isArray(l)){if(l.length===1)d=de(l[0]);else if(l.length>1){var m=l.filter(function(E){return de(E)});d=m.length>0}}else typeof l=="string"?l.length>0&&(d=!0):x(l)?l!==0&&(d=!0):l!==null&&typeof l=="object"?Object.keys(l).length>0&&(d=!0):typeof l=="boolean"&&l===!0&&(d=!0);return d}}function we(l){if(!(typeof l>"u"))return!de(l)}function Ne(l,d,m,E){var S=[d],D=ve(l);return D>=2&&S.push(m),D>=3&&S.push(E),S}async function ue(l,d){if(!(typeof l>"u")){for(var m=C(),E=0;E<l.length;E++){var S=Ne(d,l[E],E,l),D=await d.apply(this,S);typeof D<"u"&&m.push(D)}return m}}async function ot(l,d){if(!(typeof l>"u")){for(var m=C(),E=0;E<l.length;E++){var S=l[E],D=Ne(d,S,E,l),V=await d.apply(this,D);de(V)&&m.push(S)}return m}}async function Nt(l,d){if(!(typeof l>"u")){for(var m=!1,E,S=0;S<l.length;S++){var D=l[S],V=!0;if(typeof d<"u"){var le=Ne(d,D,S,l),fe=await d.apply(this,le);V=de(fe)}if(V)if(!m)E=D,m=!0;else throw{stack:new Error().stack,code:"D3138",index:S}}if(!m)throw{stack:new Error().stack,code:"D3139"};return E}}function vt(){for(var l=[],d=Array.prototype.slice.call(arguments),m=Math.min.apply(Math,d.map(function(D){return Array.isArray(D)?D.length:0})),E=0;E<m;E++){var S=d.map(D=>D[E]);l.push(S)}return l}async function lt(l,d,m){if(!(typeof l>"u")){var E,S=ve(d);if(S<2)throw{stack:new Error().stack,code:"D3050",index:1};var D;for(typeof m>"u"&&l.length>0?(E=l[0],D=1):(E=m,D=0);D<l.length;){var V=[E,l[D]];S>=3&&V.push(D),S>=4&&V.push(l),E=await d.apply(this,V),D++}return E}}function yt(l){var d=C();if(Array.isArray(l)){var m={};l.forEach(function(E){var S=yt(E);S.forEach(function(D){m[D]=!0})}),d=yt(m)}else l!==null&&typeof l=="object"&&!T(l)&&Object.keys(l).forEach(E=>d.push(E));return d}function jt(l,d){var m;if(Array.isArray(l)){m=C();for(var E=0;E<l.length;E++){var S=jt(l[E],d);typeof S<"u"&&(Array.isArray(S)?S.forEach(D=>m.push(D)):m.push(S))}}else l!==null&&typeof l=="object"&&!T(l)&&(m=l[d]);return m}function sn(l,d){return typeof l>"u"?d:typeof d>"u"?l:(Array.isArray(l)||(l=C(l)),Array.isArray(d)||(d=[d]),l.concat(d))}function In(l){return!(typeof l>"u")}function Ht(l){var d=C();if(Array.isArray(l))l.forEach(function(S){d=sn(d,Ht(S))});else if(l!==null&&typeof l=="object"&&!q(l))for(var m in l){var E={};E[m]=l[m],d.push(E)}else d=l;return d}function ie(l){if(!(typeof l>"u")){var d={};return l.forEach(function(m){for(var E in m)d[E]=m[E]}),d}}function xn(l){if(!(typeof l>"u")){if(l.length<=1)return l;for(var d=l.length,m=new Array(d),E=0;E<d;E++)m[d-E-1]=l[E];return m}}async function hn(l,d){var m=C();for(var E in l){var S=Ne(d,l[E],E,l),D=await d.apply(this,S);typeof D<"u"&&m.push(D)}return m}function $t(l){throw{code:"D3137",stack:new Error().stack,message:l||"$error() function evaluated"}}function tt(l,d){if(!l)throw{code:"D3141",stack:new Error().stack,message:d||"$assert() statement failed"}}function Ut(l){if(l!==void 0)return l===null?"null":x(l)?"number":typeof l=="string"?"string":typeof l=="boolean"?"boolean":Array.isArray(l)?"array":T(l)?"function":"object"}async function $e(l,d){if(!(typeof l>"u")){if(l.length<=1)return l;var m;if(typeof d>"u"){if(!k(l)&&!I(l))throw{stack:new Error().stack,code:"D3070",index:1};m=async function(V,le){return V>le}}else m=d;var E=async function(V,le){var fe=async function(xe,qe,De){qe.length===0?Array.prototype.push.apply(xe,De):De.length===0?Array.prototype.push.apply(xe,qe):await m(qe[0],De[0])?(xe.push(De[0]),await fe(xe,qe,De.slice(1))):(xe.push(qe[0]),await fe(xe,qe.slice(1),De))},Fe=[];return await fe(Fe,V,le),Fe},S=async function(V){if(!Array.isArray(V)||V.length<=1)return V;var le=Math.floor(V.length/2),fe=V.slice(0,le),Fe=V.slice(le);return fe=await S(fe),Fe=await S(Fe),await E(fe,Fe)},D=await S(l);return D}}function f(l){if(!(typeof l>"u")){if(l.length<=1)return l;for(var d=new Array(l.length),m=0;m<l.length;m++){var E=Math.floor(Math.random()*(m+1));m!==E&&(d[m]=d[E]),d[E]=l[m]}return d}}function w(l){if(!(typeof l>"u")){if(!Array.isArray(l)||l.length<=1)return l;for(var d=v(l)?C():[],m=0;m<l.length;m++){for(var E=l[m],S=!1,D=0;D<d.length;D++)if(Oe(E,d[D])){S=!0;break}S||d.push(E)}return d}}async function _(l,d){var m={};for(var E in l){var S=l[E],D=Ne(d,S,E,l),V=await d.apply(this,D);de(V)&&(m[E]=S)}return Object.keys(m).length===0&&(m=void 0),m}return{sum:N,count:B,max:L,min:y,average:F,string:j,substring:se,substringBefore:me,substringAfter:J,lowercase:re,uppercase:ce,length:ke,trim:ze,pad:ye,match:ne,contains:We,replace:Ee,split:Re,join:P,formatNumber:M,formatBase:R,number:K,floor:H,ceil:z,round:te,abs:ee,sqrt:he,power:Te,random:Le,boolean:de,not:we,map:ue,zip:vt,filter:ot,single:Nt,foldLeft:lt,sift:_,keys:yt,lookup:jt,append:sn,exists:In,spread:Ht,merge:ie,reverse:xn,each:hn,error:$t,assert:tt,type:Ut,sort:$e,shuffle:f,distinct:w,base64encode:Pe,base64decode:b,encodeUrlComponent:A,encodeUrl:oe,decodeUrlComponent:_e,decodeUrl:Ge}})();i.exports=h}).call(this)}).call(this,typeof is<"u"?is:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(n,i,s){var c=n("./datetime"),a=n("./functions"),h=n("./utils"),x=n("./parser"),I=n("./signature"),k=function(){var C=h.isNumeric,v=h.isArrayOfStrings,T=h.isArrayOfNumbers,q=h.createSequence,Y=h.isSequence,ve=h.isFunction,Oe=h.isLambda,U=h.isIterable,N=h.isPromise,B=h.getFunctionArity,L=h.isDeepEqual,y=$t(null);async function F(f,w,_){var l,d=_.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(d&&await d(f,w,_),f.type){case"path":l=await j(f,w,_);break;case"binary":l=await ke(f,w,_);break;case"unary":l=await ze(f,w,_);break;case"name":l=ye(f,w);break;case"string":case"number":case"value":l=ge(f);break;case"wildcard":l=We(f,w);break;case"descendant":l=Ee(f,w);break;case"parent":l=_.lookup(f.slot.label);break;case"condition":l=await H(f,w,_);break;case"block":l=await z(f,w,_);break;case"bind":l=await ee(f,w,_);break;case"regex":l=te(f);break;case"function":l=await Ne(f,w,_);break;case"variable":l=he(f,w,_);break;case"lambda":l=Nt(f,w,_);break;case"partial":l=await vt(f,w,_);break;case"apply":l=await we(f,w,_);break;case"transform":l=Le(f,w,_);break}if(Object.prototype.hasOwnProperty.call(f,"predicate"))for(var m=0;m<f.predicate.length;m++)l=await ce(f.predicate[m].expr,l,_);f.type!=="path"&&Object.prototype.hasOwnProperty.call(f,"group")&&(l=await M(f.group,l,_));var E=_.lookup(Symbol.for("jsonata.__evaluate_exit"));return E&&await E(f,w,_,l),l&&Y(l)&&!l.tupleStream&&(f.keepArray&&(l.keepSingleton=!0),l.length===0?l=void 0:l.length===1&&(l=l.keepSingleton?l:l[0])),l}async function j(f,w,_){var l;Array.isArray(w)&&f.steps[0].type!=="variable"?l=w:l=q(w);for(var d,m=!1,E=void 0,S=0;S<f.steps.length;S++){var D=f.steps[S];if(D.tuple&&(m=!0),S===0&&D.consarray?d=await F(D,l,_):m?E=await re(D,l,E,_):d=await me(D,l,_,S===f.steps.length-1),!m&&(typeof d>"u"||d.length===0))break;typeof D.focus>"u"&&(l=d)}if(m)if(f.tuple)d=E;else for(d=q(),S=0;S<E.length;S++)d.push(E[S]["@"]);return f.keepSingletonArray&&(Array.isArray(d)&&d.cons&&!d.sequence&&(d=q(d)),d.keepSingleton=!0),f.hasOwnProperty("group")&&(d=await M(f.group,m?E:d,_)),d}function se(f,w){var _=$t(f);for(const l in w)_.bind(l,w[l]);return _}async function me(f,w,_,l){var d;if(f.type==="sort")return d=await Te(f,w,_),f.stages&&(d=await J(f.stages,d,_)),d;d=q();for(var m=0;m<w.length;m++){var E=await F(f,w[m],_);if(f.stages)for(var S=0;S<f.stages.length;S++)E=await ce(f.stages[S].expr,E,_);typeof E<"u"&&d.push(E)}var D=q();return l&&d.length===1&&Array.isArray(d[0])&&!Y(d[0])?D=d[0]:d.forEach(function(V){!Array.isArray(V)||V.cons?D.push(V):V.forEach(le=>D.push(le))}),D}async function J(f,w,_){for(var l=w,d=0;d<f.length;d++){var m=f[d];switch(m.type){case"filter":l=await ce(m.expr,l,_);break;case"index":for(var E=0;E<l.length;E++){var S=l[E];S[m.value]=E}break}}return l}async function re(f,w,_,l){var d;if(f.type==="sort"){if(_)d=await Te(f,_,l);else{var m=await Te(f,w,l);d=q(),d.tupleStream=!0;for(var E=0;E<m.length;E++){var S={"@":m[E]};S[f.index]=E,d.push(S)}}return f.stages&&(d=await J(f.stages,d,l)),d}d=q(),d.tupleStream=!0;var D=l;_===void 0&&(_=w.map(Fe=>({"@":Fe})));for(var V=0;V<_.length;V++){D=se(l,_[V]);var le=await F(f,_[V]["@"],D);if(typeof le<"u"){Array.isArray(le)||(le=[le]);for(var fe=0;fe<le.length;fe++)S={},Object.assign(S,_[V]),le.tupleStream?Object.assign(S,le[fe]):(f.focus?(S[f.focus]=le[fe],S["@"]=_[V]["@"]):S["@"]=le[fe],f.index&&(S[f.index]=fe),f.ancestor&&(S[f.ancestor.label]=_[V]["@"])),d.push(S)}}return f.stages&&(d=await J(f.stages,d,l)),d}async function ce(f,w,_){var l=q();if(w&&w.tupleStream&&(l.tupleStream=!0),Array.isArray(w)||(w=q(w)),f.type==="number"){var d=Math.floor(f.value);d<0&&(d=w.length+d);var m=w[d];typeof m<"u"&&(Array.isArray(m)?l=m:l.push(m))}else for(d=0;d<w.length;d++){var m=w[d],E=m,S=_;w.tupleStream&&(E=m["@"],S=se(_,m));var D=await F(f,E,S);C(D)&&(D=[D]),T(D)?D.forEach(function(le){var fe=Math.floor(le);fe<0&&(fe=w.length+fe),fe===d&&l.push(m)}):a.boolean(D)&&l.push(m)}return l}async function ke(f,w,_){var l,d=await F(f.lhs,w,_),m=f.value,E=async()=>await F(f.rhs,w,_);if(m==="and"||m==="or")try{return await Ge(d,E,m)}catch(D){throw D.position=f.position,D.token=m,D}var S=await E();try{switch(m){case"+":case"-":case"*":case"/":case"%":l=b(d,S,m);break;case"=":case"!=":l=A(d,S,m);break;case"<":case"<=":case">":case">=":l=oe(d,S,m);break;case"&":l=P(d,S);break;case"..":l=K(d,S);break;case"in":l=_e(d,S);break}}catch(D){throw D.position=f.position,D.token=m,D}return l}async function ze(f,w,_){var l;switch(f.value){case"-":if(l=await F(f.expression,w,_),typeof l>"u")l=void 0;else if(C(l))l=-l;else throw{code:"D1002",stack:new Error().stack,position:f.position,token:f.value,value:l};break;case"[":l=[];let E=await Promise.all(f.expressions.map(async(S,D)=>(_.isParallelCall=D>0,[S,await F(S,w,_)])));for(let S of E){var[d,m]=S;typeof m<"u"&&(d.value==="["?l.push(m):l=a.append(l,m))}f.consarray&&Object.defineProperty(l,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":l=await M(f,w,_);break}return l}function ye(f,w,_){return a.lookup(w,f.value)}function ge(f){return f.value}function We(f,w){var _=q();return Array.isArray(w)&&w.outerWrapper&&w.length>0&&(w=w[0]),w!==null&&typeof w=="object"&&Object.keys(w).forEach(function(l){var d=w[l];Array.isArray(d)?(d=ne(d),_=a.append(_,d)):_.push(d)}),_}function ne(f,w){return typeof w>"u"&&(w=[]),Array.isArray(f)?f.forEach(function(_){ne(_,w)}):w.push(f),w}function Ee(f,w){var _,l=q();return typeof w<"u"&&(Pe(w,l),l.length===1?_=l[0]:_=l),_}function Pe(f,w){Array.isArray(f)||w.push(f),Array.isArray(f)?f.forEach(function(_){Pe(_,w)}):f!==null&&typeof f=="object"&&Object.keys(f).forEach(function(_){Pe(f[_],w)})}function b(f,w,_){var l;if(typeof f<"u"&&!C(f))throw{code:"T2001",stack:new Error().stack,value:f};if(typeof w<"u"&&!C(w))throw{code:"T2002",stack:new Error().stack,value:w};if(typeof f>"u"||typeof w>"u")return l;switch(_){case"+":l=f+w;break;case"-":l=f-w;break;case"*":l=f*w;break;case"/":l=f/w;break;case"%":l=f%w;break}return l}function A(f,w,_){var l,d=typeof f,m=typeof w;if(d==="undefined"||m==="undefined")return!1;switch(_){case"=":l=L(f,w);break;case"!=":l=!L(f,w);break}return l}function oe(f,w,_){var l,d=typeof f,m=typeof w,E=d==="undefined"||d==="string"||d==="number",S=m==="undefined"||m==="string"||m==="number";if(!E||!S)throw{code:"T2010",stack:new Error().stack,value:d==="string"||d==="number"?w:f};if(!(d==="undefined"||m==="undefined")){if(d!==m)throw{code:"T2009",stack:new Error().stack,value:f,value2:w};switch(_){case"<":l=f<w;break;case"<=":l=f<=w;break;case">":l=f>w;break;case">=":l=f>=w;break}return l}}function _e(f,w){var _=!1;if(typeof f>"u"||typeof w>"u")return!1;Array.isArray(w)||(w=[w]);for(var l=0;l<w.length;l++)if(w[l]===f){_=!0;break}return _}async function Ge(f,w,_){var l,d=Re(f);switch(_){case"and":l=d&&Re(await w());break;case"or":l=d||Re(await w());break}return l}function Re(f){var w=a.boolean(f);return typeof w>"u"?!1:w}function P(f,w){var _,l="",d="";return typeof f<"u"&&(l=a.string(f)),typeof w<"u"&&(d=a.string(w)),_=l.concat(d),_}async function M(f,w,_){var l={},d={},m=!!(w&&w.tupleStream);Array.isArray(w)||(w=q(w)),w.length===0&&w.push(void 0);for(var E=0;E<w.length;E++)for(var S=w[E],D=m?se(_,S):_,V=0;V<f.lhs.length;V++){var le=f.lhs[V],fe=await F(le[0],m?S["@"]:S,D);if(typeof fe!="string"&&fe!==void 0)throw{code:"T1003",stack:new Error().stack,position:f.position,value:fe};if(fe!==void 0){var Fe={data:S,exprIndex:V};if(d.hasOwnProperty(fe)){if(d[fe].exprIndex!==V)throw{code:"D1009",stack:new Error().stack,position:f.position,value:fe};d[fe].data=a.append(d[fe].data,S)}else d[fe]=Fe}}let xe=await Promise.all(Object.keys(d).map(async(De,it)=>{let Ce=d[De];var Xe=Ce.data,Lt=_;if(m){var Ve=R(Ce.data);Xe=Ve["@"],delete Ve["@"],Lt=se(_,Ve)}return _.isParallelCall=it>0,[De,await F(f.lhs[Ce.exprIndex][1],Xe,Lt)]}));for(let De of xe){var[fe,qe]=await De;typeof qe<"u"&&(l[fe]=qe)}return l}function R(f){if(!Array.isArray(f))return f;var w={};Object.assign(w,f[0]);for(var _=1;_<f.length;_++)for(const l in f[_])w[l]=a.append(w[l],f[_][l]);return w}function K(f,w){var _;if(typeof f<"u"&&!Number.isInteger(f))throw{code:"T2003",stack:new Error().stack,value:f};if(typeof w<"u"&&!Number.isInteger(w))throw{code:"T2004",stack:new Error().stack,value:w};if(typeof f>"u"||typeof w>"u"||f>w)return _;var l=w-f+1;if(l>1e7)throw{code:"D2014",stack:new Error().stack,value:l};_=new Array(l);for(var d=f,m=0;d<=w;d++,m++)_[m]=d;return _.sequence=!0,_}async function ee(f,w,_){var l=await F(f.rhs,w,_);return _.bind(f.lhs.value,l),l}async function H(f,w,_){var l,d=await F(f.condition,w,_);return a.boolean(d)?l=await F(f.then,w,_):typeof f.else<"u"&&(l=await F(f.else,w,_)),l}async function z(f,w,_){for(var l,d=$t(_),m=0;m<f.expressions.length;m++)l=await F(f.expressions[m],w,d);return l}function te(f){var w=new $e.RegexEngine(f.value),_=function(l,d){var m;w.lastIndex=d||0;var E=w.exec(l);if(E!==null){if(m={match:E[0],start:E.index,end:E.index+E[0].length,groups:[]},E.length>1)for(var S=1;S<E.length;S++)m.groups.push(E[S]);m.next=function(){if(!(w.lastIndex>=l.length)){var D=_(l,w.lastIndex);if(D&&D.match==="")throw{code:"D1004",stack:new Error().stack,position:f.position,value:f.value.source};return D}}}return m};return _}function he(f,w,_){var l;return f.value===""?l=w&&w.outerWrapper?w[0]:w:l=_.lookup(f.value),l}async function Te(f,w,_){var l,d=w,m=!!w.tupleStream,E=async function(D,V){for(var le=0,fe=0;le===0&&fe<f.terms.length;fe++){var Fe=f.terms[fe],xe=D,qe=_;m&&(xe=D["@"],qe=se(_,D));var De=await F(Fe.expression,xe,qe);xe=V,qe=_,m&&(xe=V["@"],qe=se(_,V));var it=await F(Fe.expression,xe,qe),Ce=typeof De,Xe=typeof it;if(Ce==="undefined"){le=Xe==="undefined"?0:1;continue}if(Xe==="undefined"){le=-1;continue}if(!(Ce==="string"||Ce==="number")||!(Xe==="string"||Xe==="number"))throw{code:"T2008",stack:new Error().stack,position:f.position,value:Ce==="string"||Ce==="number"?it:De};if(Ce!==Xe)throw{code:"T2007",stack:new Error().stack,position:f.position,value:De,value2:it};De!==it&&(De<it?le=-1:le=1,Fe.descending===!0&&(le=-le))}return le===1},S={environment:_,input:w};return l=await a.sort.apply(S,[d,E]),l}function Le(f,w,_){var l=async function(d){if(!(typeof d>"u")){var m=_.lookup("clone");if(!ve(m))throw{code:"T2013",stack:new Error().stack,position:f.position};var E=await ue(m,[d],null,_),S=await F(f.pattern,E,_);if(typeof S<"u"){Array.isArray(S)||(S=[S]);for(var D=0;D<S.length;D++){var V=S[D];if(V&&(V.isPrototypeOf(E)||V instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:f.position};var le=await F(f.update,V,_),fe=typeof le;if(fe!=="undefined"){if(fe!=="object"||le===null||Array.isArray(le))throw{code:"T2011",stack:new Error().stack,position:f.update.position,value:le};for(var Fe in le)V[Fe]=le[Fe]}if(typeof f.delete<"u"){var xe=await F(f.delete,V,_);if(typeof xe<"u"){var qe=xe;if(Array.isArray(xe)||(xe=[xe]),!v(xe))throw{code:"T2012",stack:new Error().stack,position:f.delete.position,value:qe};for(var De=0;De<xe.length;De++)typeof V=="object"&&V!==null&&delete V[xe[De]]}}}}return E}};return ie(l,"<(oa):o>")}var de=x("function($f, $g) { function($x){ $g($f($x)) } }");async function we(f,w,_){var l,d=await F(f.lhs,w,_);if(f.rhs.type==="function")l=await Ne(f.rhs,w,_,{context:d});else{var m=await F(f.rhs,w,_);if(!ve(m))throw{code:"T2006",stack:new Error().stack,position:f.position,value:m};if(ve(d)){var E=await F(de,null,_);l=await ue(E,[d,m],null,_)}else l=await ue(m,[d],null,_)}return l}async function Ne(f,w,_,l){var d,m=await F(f.procedure,w,_);if(typeof m>"u"&&f.procedure.type==="path"&&_.lookup(f.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:f.position,token:f.procedure.steps[0].value};var E=[];typeof l<"u"&&E.push(l.context);for(var S=0;S<f.arguments.length;S++){const V=await F(f.arguments[S],w,_);if(ve(V)){const le=async function(...fe){return await ue(V,fe,null,_)};le.arity=B(V),E.push(le)}else E.push(V)}var D=f.procedure.type==="path"?f.procedure.steps[0].value:f.procedure.value;try{typeof m=="object"&&(m.token=D,m.position=f.position),d=await ue(m,E,w,_)}catch(V){throw V.position||(V.position=f.position),V.token||(V.token=D),V}return d}async function ue(f,w,_,l){var d;for(d=await ot(f,w,_,l);Oe(d)&&d.thunk===!0;){var m=await F(d.body.procedure,d.input,d.environment);d.body.procedure.type==="variable"&&(m.token=d.body.procedure.value),m.position=d.body.procedure.position;for(var E=[],S=0;S<d.body.arguments.length;S++)E.push(await F(d.body.arguments[S],d.input,d.environment));d=await ot(m,E,_,l)}return d}async function ot(f,w,_,l){var d;try{var m=w;if(f&&(m=lt(f.signature,w,_)),Oe(f))d=await yt(f,m);else if(f&&f._jsonata_function===!0){var E={environment:l,input:_};d=f.implementation.apply(E,m),U(d)&&(d=d.next().value),N(d)&&(d=await d)}else if(typeof f=="function")d=f.apply(_,m),N(d)&&(d=await d);else throw{code:"T1006",stack:new Error().stack}}catch(S){throw f&&(typeof S.token>"u"&&typeof f.token<"u"&&(S.token=f.token),S.position=f.position||S.position),S}return d}function Nt(f,w,_){var l={_jsonata_lambda:!0,input:w,environment:_,arguments:f.arguments,signature:f.signature,body:f.body};return f.thunk===!0&&(l.thunk=!0),l.apply=async function(d,m){return await ue(l,m,w,d?d.environment:_)},l}async function vt(f,w,_){for(var l,d=[],m=0;m<f.arguments.length;m++){var E=f.arguments[m];E.type==="operator"&&E.value==="?"?d.push(E):d.push(await F(E,w,_))}var S=await F(f.procedure,w,_);if(typeof S>"u"&&f.procedure.type==="path"&&_.lookup(f.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:f.position,token:f.procedure.steps[0].value};if(Oe(S))l=jt(S,d);else if(S&&S._jsonata_function===!0)l=sn(S.implementation,d);else if(typeof S=="function")l=sn(S,d);else throw{code:"T1008",stack:new Error().stack,position:f.position,token:f.procedure.type==="path"?f.procedure.steps[0].value:f.procedure.value};return l}function lt(f,w,_){if(typeof f>"u")return w;var l=f.validate(w,_);return l}async function yt(f,w){var _,l=$t(f.environment);return f.arguments.forEach(function(d,m){l.bind(d.value,w[m])}),typeof f.body=="function"?_=await In(f.body,l):_=await F(f.body,f.input,l),_}function jt(f,w){var _=$t(f.environment),l=[];f.arguments.forEach(function(m,E){var S=w[E];S&&S.type==="operator"&&S.value==="?"?l.push(m):_.bind(m.value,S)});var d={_jsonata_lambda:!0,input:f.input,environment:_,arguments:l,body:f.body};return d}function sn(f,w){var _=Ht(f);_=_.map(function(E){return"$"+E.trim()});var l="function("+_.join(", ")+"){ _ }",d=x(l);d.body=f;var m=jt(d,w);return m}async function In(f,w){var _=Ht(f),l=_.map(function(E){return w.lookup(E.trim())}),d={environment:w},m=f.apply(d,l);return N(m)&&(m=await m),m}function Ht(f){var w=f.toString(),_=/\(([^)]*)\)/.exec(w)[1],l=_.split(",");return l}function ie(f,w){var _={_jsonata_function:!0,implementation:f};return typeof w<"u"&&(_.signature=I(w)),_}async function xn(f,w){if(!(typeof f>"u")){var _=this.input;typeof w<"u"&&(_=w,Array.isArray(_)&&!Y(_)&&(_=q(_),_.outerWrapper=!0));try{var l=x(f,!1)}catch(m){throw Ut(m),{stack:new Error().stack,code:"D3120",value:m.message,error:m}}try{var d=await F(l,_,this.environment)}catch(m){throw Ut(m),{stack:new Error().stack,code:"D3121",value:m.message,error:m}}return d}}function hn(f){if(!(typeof f>"u"))return JSON.parse(a.string(f))}function $t(f){var w={};const _={bind:function(d,m){w[d]=m},lookup:function(d){var m;return w.hasOwnProperty(d)?m=w[d]:f&&(m=f.lookup(d)),m},timestamp:f?f.timestamp:null,async:f?f.async:!1,isParallelCall:f?f.isParallelCall:!1,global:f?f.global:{ancestry:[null]}};if(f){var l=f.lookup(Symbol.for("jsonata.__createFrame_push"));l&&l(f,_)}return _}y.bind("sum",ie(a.sum,"<a<n>:n>")),y.bind("count",ie(a.count,"<a:n>")),y.bind("max",ie(a.max,"<a<n>:n>")),y.bind("min",ie(a.min,"<a<n>:n>")),y.bind("average",ie(a.average,"<a<n>:n>")),y.bind("string",ie(a.string,"<x-b?:s>")),y.bind("substring",ie(a.substring,"<s-nn?:s>")),y.bind("substringBefore",ie(a.substringBefore,"<s-s:s>")),y.bind("substringAfter",ie(a.substringAfter,"<s-s:s>")),y.bind("lowercase",ie(a.lowercase,"<s-:s>")),y.bind("uppercase",ie(a.uppercase,"<s-:s>")),y.bind("length",ie(a.length,"<s-:n>")),y.bind("trim",ie(a.trim,"<s-:s>")),y.bind("pad",ie(a.pad,"<s-ns?:s>")),y.bind("match",ie(a.match,"<s-f<s:o>n?:a<o>>")),y.bind("contains",ie(a.contains,"<s-(sf):b>")),y.bind("replace",ie(a.replace,"<s-(sf)(sf)n?:s>")),y.bind("split",ie(a.split,"<s-(sf)n?:a<s>>")),y.bind("join",ie(a.join,"<a<s>s?:s>")),y.bind("formatNumber",ie(a.formatNumber,"<n-so?:s>")),y.bind("formatBase",ie(a.formatBase,"<n-n?:s>")),y.bind("formatInteger",ie(c.formatInteger,"<n-s:s>")),y.bind("parseInteger",ie(c.parseInteger,"<s-s:n>")),y.bind("number",ie(a.number,"<(nsb)-:n>")),y.bind("floor",ie(a.floor,"<n-:n>")),y.bind("ceil",ie(a.ceil,"<n-:n>")),y.bind("round",ie(a.round,"<n-n?:n>")),y.bind("abs",ie(a.abs,"<n-:n>")),y.bind("sqrt",ie(a.sqrt,"<n-:n>")),y.bind("power",ie(a.power,"<n-n:n>")),y.bind("random",ie(a.random,"<:n>")),y.bind("boolean",ie(a.boolean,"<x-:b>")),y.bind("not",ie(a.not,"<x-:b>")),y.bind("map",ie(a.map,"<af>")),y.bind("zip",ie(a.zip,"<a+>")),y.bind("filter",ie(a.filter,"<af>")),y.bind("single",ie(a.single,"<af?>")),y.bind("reduce",ie(a.foldLeft,"<afj?:j>")),y.bind("sift",ie(a.sift,"<o-f?:o>")),y.bind("keys",ie(a.keys,"<x-:a<s>>")),y.bind("lookup",ie(a.lookup,"<x-s:x>")),y.bind("append",ie(a.append,"<xx:a>")),y.bind("exists",ie(a.exists,"<x:b>")),y.bind("spread",ie(a.spread,"<x-:a<o>>")),y.bind("merge",ie(a.merge,"<a<o>:o>")),y.bind("reverse",ie(a.reverse,"<a:a>")),y.bind("each",ie(a.each,"<o-f:a>")),y.bind("error",ie(a.error,"<s?:x>")),y.bind("assert",ie(a.assert,"<bs?:x>")),y.bind("type",ie(a.type,"<x:s>")),y.bind("sort",ie(a.sort,"<af?:a>")),y.bind("shuffle",ie(a.shuffle,"<a:a>")),y.bind("distinct",ie(a.distinct,"<x:x>")),y.bind("base64encode",ie(a.base64encode,"<s-:s>")),y.bind("base64decode",ie(a.base64decode,"<s-:s>")),y.bind("encodeUrlComponent",ie(a.encodeUrlComponent,"<s-:s>")),y.bind("encodeUrl",ie(a.encodeUrl,"<s-:s>")),y.bind("decodeUrlComponent",ie(a.decodeUrlComponent,"<s-:s>")),y.bind("decodeUrl",ie(a.decodeUrl,"<s-:s>")),y.bind("eval",ie(xn,"<sx?:x>")),y.bind("toMillis",ie(c.toMillis,"<s-s?:n>")),y.bind("fromMillis",ie(c.fromMillis,"<n-s?s?:s>")),y.bind("clone",ie(hn,"<(oa)-:o>"));var tt={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Ut(f){var w=tt[f.code];if(typeof w<"u"){var _=w.replace(/\{\{\{([^}]+)}}}/g,function(){return f[arguments[1]]});_=_.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(f[arguments[1]])}),f.message=_}}function $e(f,w){var _,l;try{_=x(f,w&&w.recover),l=_.errors,delete _.errors}catch(E){throw Ut(E),E}var d=$t(y),m=new Date;return d.bind("now",ie(function(E,S){return c.fromMillis(m.getTime(),E,S)},"<s?s?:s>")),d.bind("millis",ie(function(){return m.getTime()},"<:n>")),w&&w.RegexEngine?$e.RegexEngine=w.RegexEngine:$e.RegexEngine=RegExp,{evaluate:async function(E,S,D){if(typeof l<"u"){var V={code:"S0500",position:0};throw Ut(V),V}if(typeof S<"u"){var le;le=$t(d);for(var fe in S)le.bind(fe,S[fe])}else le=d;le.bind("$",E),m=new Date,le.timestamp=m,Array.isArray(E)&&!Y(E)&&(E=q(E),E.outerWrapper=!0);var Fe;try{return Fe=await F(_,E,le),typeof D=="function"&&D(null,Fe),Fe}catch(xe){throw Ut(xe),xe}},assign:function(E,S){d.bind(E,S)},registerFunction:function(E,S,D){var V=ie(S,D);d.bind(E,V)},ast:function(){return _},errors:function(){return l}}}return $e.parser=x,$e}();i.exports=k},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(n,i,s){var c=n("./signature");const a=(()=>{var h={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},x={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},I=function(C){var v=0,T=C.length,q=function(Oe,U){var N={type:Oe,value:U,position:v};return N},Y=function(){for(var Oe=v,U=0,N,B,L=function(F){if(C.charAt(F)==="/"&&U===0){for(var j=0;C.charAt(F-(j+1))==="\\";)j++;if(j%2===0)return!0}return!1};v<T;){var y=C.charAt(v);if(L(v)){if(N=C.substring(Oe,v),N==="")throw{code:"S0301",stack:new Error().stack,position:v};for(v++,y=C.charAt(v),Oe=v;y==="i"||y==="m";)v++,y=C.charAt(v);return B=C.substring(Oe,v)+"g",new RegExp(N,B)}(y==="("||y==="["||y==="{")&&C.charAt(v-1)!=="\\"&&U++,(y===")"||y==="]"||y==="}")&&C.charAt(v-1)!=="\\"&&U--,v++}throw{code:"S0302",stack:new Error().stack,position:v}},ve=function(Oe){if(v>=T)return null;for(var U=C.charAt(v);v<T&&` 	
\r\v`.indexOf(U)>-1;)v++,U=C.charAt(v);if(U==="/"&&C.charAt(v+1)==="*"){var N=v;for(v+=2,U=C.charAt(v);!(U==="*"&&C.charAt(v+1)==="/");)if(U=C.charAt(++v),v>=T)throw{code:"S0106",stack:new Error().stack,position:N};return v+=2,U=C.charAt(v),ve(Oe)}if(Oe!==!0&&U==="/")return v++,q("regex",Y());if(U==="."&&C.charAt(v+1)===".")return v+=2,q("operator","..");if(U===":"&&C.charAt(v+1)==="=")return v+=2,q("operator",":=");if(U==="!"&&C.charAt(v+1)==="=")return v+=2,q("operator","!=");if(U===">"&&C.charAt(v+1)==="=")return v+=2,q("operator",">=");if(U==="<"&&C.charAt(v+1)==="=")return v+=2,q("operator","<=");if(U==="*"&&C.charAt(v+1)==="*")return v+=2,q("operator","**");if(U==="~"&&C.charAt(v+1)===">")return v+=2,q("operator","~>");if(Object.prototype.hasOwnProperty.call(h,U))return v++,q("operator",U);if(U==='"'||U==="'"){var B=U;v++;for(var L="";v<T;){if(U=C.charAt(v),U==="\\")if(v++,U=C.charAt(v),Object.prototype.hasOwnProperty.call(x,U))L+=x[U];else if(U==="u"){var y=C.substr(v+1,4);if(/^[0-9a-fA-F]+$/.test(y)){var F=parseInt(y,16);L+=String.fromCharCode(F),v+=4}else throw{code:"S0104",stack:new Error().stack,position:v}}else throw{code:"S0103",stack:new Error().stack,position:v,token:U};else{if(U===B)return v++,q("string",L);L+=U}v++}throw{code:"S0101",stack:new Error().stack,position:v}}var j=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,se=j.exec(C.substring(v));if(se!==null){var me=parseFloat(se[0]);if(!isNaN(me)&&isFinite(me))return v+=se[0].length,q("number",me);throw{code:"S0102",stack:new Error().stack,position:v,token:se[0]}}var J;if(U==="`"){v++;var re=C.indexOf("`",v);if(re!==-1)return J=C.substring(v,re),v=re+1,q("name",J);throw v=T,{code:"S0105",stack:new Error().stack,position:v}}for(var ce=v,ke;;)if(ke=C.charAt(ce),ce===T||` 	
\r\v`.indexOf(ke)>-1||Object.prototype.hasOwnProperty.call(h,ke)){if(C.charAt(v)==="$")return J=C.substring(v+1,ce),v=ce,q("variable",J);switch(J=C.substring(v,ce),v=ce,J){case"or":case"in":case"and":return q("operator",J);case"true":return q("value",!0);case"false":return q("value",!1);case"null":return q("value",null);default:return v===T&&J===""?null:q("name",J)}}else ce++};return ve},k=function(C,v){var T,q,Y={},ve=[],Oe=function(){var b=[];T.id!=="(end)"&&b.push({type:T.type,value:T.value,position:T.position});for(var A=q();A!==null;)b.push(A),A=q();return b},U={nud:function(){var b={code:"S0211",token:this.value,position:this.position};if(v)return b.remaining=Oe(),b.type="error",ve.push(b),b;throw b.stack=new Error().stack,b}},N=function(b,A){var oe=Y[b];return A=A||0,oe?A>=oe.lbp&&(oe.lbp=A):(oe=Object.create(U),oe.id=oe.value=b,oe.lbp=A,Y[b]=oe),oe},B=function(b){if(v){b.remaining=Oe(),ve.push(b);var A=Y["(error)"];return T=Object.create(A),T.error=b,T.type="(error)",T}else throw b.stack=new Error().stack,b},L=function(b,A){if(b&&T.id!==b){var oe;T.id==="(end)"?oe="S0203":oe="S0202";var _e={code:oe,position:T.position,token:T.value,value:b};return B(_e)}var Ge=q(A);if(Ge===null)return T=Y["(end)"],T.position=C.length,T;var Re=Ge.value,P=Ge.type,M;switch(P){case"name":case"variable":M=Y["(name)"];break;case"operator":if(M=Y[Re],!M)return B({code:"S0204",stack:new Error().stack,position:Ge.position,token:Re});break;case"string":case"number":case"value":M=Y["(literal)"];break;case"regex":P="regex",M=Y["(regex)"];break;default:return B({code:"S0205",stack:new Error().stack,position:Ge.position,token:Re})}return T=Object.create(M),T.value=Re,T.type=P,T.position=Ge.position,T},y=function(b){var A,oe=T;for(L(null,!0),A=oe.nud();b<T.lbp;)oe=T,L(),A=oe.led(A);return A},F=function(b){var A=N(b,0);A.nud=function(){return this}},j=function(b,A,oe){var _e=A||h[b],Ge=N(b,_e);return Ge.led=oe||function(Re){return this.lhs=Re,this.rhs=y(_e),this.type="binary",this},Ge},se=function(b,A,oe){var _e=N(b,A);return _e.led=oe,_e},me=function(b,A){var oe=N(b);return oe.nud=A||function(){return this.expression=y(70),this.type="unary",this},oe};F("(end)"),F("(name)"),F("(literal)"),F("(regex)"),N(":"),N(";"),N(","),N(")"),N("]"),N("}"),N(".."),j("."),j("+"),j("-"),j("*"),j("/"),j("%"),j("="),j("<"),j(">"),j("!="),j("<="),j(">="),j("&"),j("and"),j("or"),j("in"),F("and"),F("or"),F("in"),me("-"),j("~>"),se("(error)",10,function(b){return this.lhs=b,this.error=T.error,this.remaining=Oe(),this.type="error",this}),me("*",function(){return this.type="wildcard",this}),me("**",function(){return this.type="descendant",this}),me("%",function(){return this.type="parent",this}),j("(",h["("],function(b){if(this.procedure=b,this.type="function",this.arguments=[],T.id!==")")for(;T.type==="operator"&&T.id==="?"?(this.type="partial",this.arguments.push(T),L("?")):this.arguments.push(y(0)),T.id===",";)L(",");if(L(")",!0),b.type==="name"&&(b.value==="function"||b.value==="λ")){if(this.arguments.forEach(function(Re,P){if(Re.type!=="variable")return B({code:"S0208",stack:new Error().stack,position:Re.position,token:Re.value,value:P+1})}),this.type="lambda",T.id==="<"){for(var A=T.position,oe=1,_e="<";oe>0&&T.id!=="{"&&T.id!=="(end)";){var Ge=L();Ge.id===">"?oe--:Ge.id==="<"&&oe++,_e+=Ge.value}L(">");try{this.signature=c(_e)}catch(Re){return Re.position=A+Re.offset,B(Re)}}L("{"),this.body=y(0),L("}")}return this}),me("(",function(){for(var b=[];T.id!==")"&&(b.push(y(0)),T.id===";");)L(";");return L(")",!0),this.type="block",this.expressions=b,this}),me("[",function(){var b=[];if(T.id!=="]")for(;;){var A=y(0);if(T.id===".."){var oe={type:"binary",value:"..",position:T.position,lhs:A};L(".."),oe.rhs=y(0),A=oe}if(b.push(A),T.id!==",")break;L(",")}return L("]",!0),this.expressions=b,this.type="unary",this}),j("[",h["["],function(b){if(T.id==="]"){for(var A=b;A&&A.type==="binary"&&A.value==="[";)A=A.lhs;return A.keepArray=!0,L("]"),b}else return this.lhs=b,this.rhs=y(h["]"]),this.type="binary",L("]",!0),this}),j("^",h["^"],function(b){L("(");for(var A=[];;){var oe={descending:!1};if(T.id==="<"?L("<"):T.id===">"&&(oe.descending=!0,L(">")),oe.expression=y(0),A.push(oe),T.id!==",")break;L(",")}return L(")"),this.lhs=b,this.rhs=A,this.type="binary",this});var J=function(b){var A=[];if(T.id!=="}")for(;;){var oe=y(0);L(":");var _e=y(0);if(A.push([oe,_e]),T.id!==",")break;L(",")}return L("}",!0),typeof b>"u"?(this.lhs=A,this.type="unary"):(this.lhs=b,this.rhs=A,this.type="binary"),this};me("{",J),j("{",h["{"],J),se(":=",h[":="],function(b){return b.type!=="variable"?B({code:"S0212",stack:new Error().stack,position:b.position,token:b.value}):(this.lhs=b,this.rhs=y(h[":="]-1),this.type="binary",this)}),j("@",h["@"],function(b){return this.lhs=b,this.rhs=y(h["@"]),this.rhs.type!=="variable"?B({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),j("#",h["#"],function(b){return this.lhs=b,this.rhs=y(h["#"]),this.rhs.type!=="variable"?B({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),j("?",h["?"],function(b){return this.type="condition",this.condition=b,this.then=y(0),T.id===":"&&(L(":"),this.else=y(0)),this}),me("|",function(){return this.type="transform",this.pattern=y(0),L("|"),this.update=y(0),T.id===","&&(L(","),this.delete=y(0)),L("|"),this});var re=function(b){var A;if(b.type==="function"&&!b.predicate){var oe={type:"lambda",thunk:!0,arguments:[],position:b.position};oe.body=b,A=oe}else if(b.type==="condition")b.then=re(b.then),typeof b.else<"u"&&(b.else=re(b.else)),A=b;else if(b.type==="block"){var _e=b.expressions.length;_e>0&&(b.expressions[_e-1]=re(b.expressions[_e-1])),A=b}else A=b;return A},ce=0,ke=0,ze=[],ye=function(b,A){switch(b.type){case"name":case"wildcard":A.level--,A.level===0&&(typeof b.ancestor>"u"||(ze[A.index].slot.label=b.ancestor.label),b.ancestor=A,b.tuple=!0);break;case"parent":A.level++;break;case"block":b.expressions.length>0&&(b.tuple=!0,A=ye(b.expressions[b.expressions.length-1],A));break;case"path":b.tuple=!0;var oe=b.steps.length-1;for(A=ye(b.steps[oe--],A);A.level>0&&oe>=0;)A=ye(b.steps[oe--],A);break;default:throw{code:"S0217",token:b.type,position:b.position}}return A},ge=function(b,A){if(typeof A.seekingParent<"u"||A.type==="parent"){var oe=typeof A.seekingParent<"u"?A.seekingParent:[];A.type==="parent"&&oe.push(A.slot),typeof b.seekingParent>"u"?b.seekingParent=oe:Array.prototype.push.apply(b.seekingParent,oe)}},We=function(b){var A=b.steps.length-1,oe=b.steps[A],_e=typeof oe.seekingParent<"u"?oe.seekingParent:[];oe.type==="parent"&&_e.push(oe.slot);for(var Ge=0;Ge<_e.length;Ge++){var Re=_e[Ge];for(A=b.steps.length-2;Re.level>0;){if(A<0){typeof b.seekingParent>"u"?b.seekingParent=[Re]:b.seekingParent.push(Re);break}for(var P=b.steps[A--];A>=0&&P.focus&&b.steps[A].focus;)P=b.steps[A--];Re=ye(P,Re)}}},ne=function(b){var A;switch(b.type){case"binary":switch(b.value){case".":var oe=ne(b.lhs);oe.type==="path"?A=oe:A={type:"path",steps:[oe]},oe.type==="parent"&&(A.seekingParent=[oe.slot]);var _e=ne(b.rhs);_e.type==="function"&&_e.procedure.type==="path"&&_e.procedure.steps.length===1&&_e.procedure.steps[0].type==="name"&&A.steps[A.steps.length-1].type==="function"&&(A.steps[A.steps.length-1].nextFunction=_e.procedure.steps[0].value),_e.type==="path"?Array.prototype.push.apply(A.steps,_e.steps):(typeof _e.predicate<"u"&&(_e.stages=_e.predicate,delete _e.predicate),A.steps.push(_e)),A.steps.filter(function(te){if(te.type==="number"||te.type==="value")throw{code:"S0213",stack:new Error().stack,position:te.position,value:te.value};return te.type==="string"}).forEach(function(te){te.type="name"}),A.steps.filter(function(te){return te.keepArray===!0}).length>0&&(A.keepSingletonArray=!0);var Ge=A.steps[0];Ge.type==="unary"&&Ge.value==="["&&(Ge.consarray=!0);var Re=A.steps[A.steps.length-1];Re.type==="unary"&&Re.value==="["&&(Re.consarray=!0),We(A);break;case"[":A=ne(b.lhs);var P=A,M="predicate";if(A.type==="path"&&(P=A.steps[A.steps.length-1],M="stages"),typeof P.group<"u")throw{code:"S0209",stack:new Error().stack,position:b.position};typeof P[M]>"u"&&(P[M]=[]);var R=ne(b.rhs);typeof R.seekingParent<"u"&&(R.seekingParent.forEach(te=>{te.level===1?ye(P,te):te.level--}),ge(P,R)),P[M].push({type:"filter",expr:R,position:b.position});break;case"{":if(A=ne(b.lhs),typeof A.group<"u")throw{code:"S0210",stack:new Error().stack,position:b.position};A.group={lhs:b.rhs.map(function(te){return[ne(te[0]),ne(te[1])]}),position:b.position};break;case"^":A=ne(b.lhs),A.type!=="path"&&(A={type:"path",steps:[A]});var K={type:"sort",position:b.position};K.terms=b.rhs.map(function(te){var he=ne(te.expression);return ge(K,he),{descending:te.descending,expression:he}}),A.steps.push(K),We(A);break;case":=":A={type:"bind",value:b.value,position:b.position},A.lhs=ne(b.lhs),A.rhs=ne(b.rhs),ge(A,A.rhs);break;case"@":if(A=ne(b.lhs),P=A,A.type==="path"&&(P=A.steps[A.steps.length-1]),typeof P.stages<"u"||typeof P.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:b.position};if(P.type==="sort")throw{code:"S0216",stack:new Error().stack,position:b.position};b.keepArray&&(P.keepArray=!0),P.focus=b.rhs.value,P.tuple=!0;break;case"#":A=ne(b.lhs),P=A,A.type==="path"?P=A.steps[A.steps.length-1]:(A={type:"path",steps:[A]},typeof P.predicate<"u"&&(P.stages=P.predicate,delete P.predicate)),typeof P.stages>"u"?P.index=b.rhs.value:P.stages.push({type:"index",value:b.rhs.value,position:b.position}),P.tuple=!0;break;case"~>":A={type:"apply",value:b.value,position:b.position},A.lhs=ne(b.lhs),A.rhs=ne(b.rhs),A.keepArray=A.lhs.keepArray||A.rhs.keepArray;break;default:A={type:b.type,value:b.value,position:b.position},A.lhs=ne(b.lhs),A.rhs=ne(b.rhs),ge(A,A.lhs),ge(A,A.rhs)}break;case"unary":A={type:b.type,value:b.value,position:b.position},b.value==="["?A.expressions=b.expressions.map(function(te){var he=ne(te);return ge(A,he),he}):b.value==="{"?A.lhs=b.lhs.map(function(te){var he=ne(te[0]);ge(A,he);var Te=ne(te[1]);return ge(A,Te),[he,Te]}):(A.expression=ne(b.expression),b.value==="-"&&A.expression.type==="number"?(A=A.expression,A.value=-A.value):ge(A,A.expression));break;case"function":case"partial":A={type:b.type,name:b.name,value:b.value,position:b.position},A.arguments=b.arguments.map(function(te){var he=ne(te);return ge(A,he),he}),A.procedure=ne(b.procedure);break;case"lambda":A={type:b.type,arguments:b.arguments,signature:b.signature,position:b.position};var ee=ne(b.body);A.body=re(ee);break;case"condition":A={type:b.type,position:b.position},A.condition=ne(b.condition),ge(A,A.condition),A.then=ne(b.then),ge(A,A.then),typeof b.else<"u"&&(A.else=ne(b.else),ge(A,A.else));break;case"transform":A={type:b.type,position:b.position},A.pattern=ne(b.pattern),A.update=ne(b.update),typeof b.delete<"u"&&(A.delete=ne(b.delete));break;case"block":A={type:b.type,position:b.position},A.expressions=b.expressions.map(function(te){var he=ne(te);return ge(A,he),(he.consarray||he.type==="path"&&he.steps[0].consarray)&&(A.consarray=!0),he});break;case"name":A={type:"path",steps:[b]},b.keepArray&&(A.keepSingletonArray=!0);break;case"parent":A={type:"parent",slot:{label:"!"+ce++,level:1,index:ke++}},ze.push(A);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":A=b;break;case"operator":if(b.value==="and"||b.value==="or"||b.value==="in")b.type="name",A=ne(b);else if(b.value==="?")A=b;else throw{code:"S0201",stack:new Error().stack,position:b.position,token:b.value};break;case"error":A=b,b.lhs&&(A=ne(b.lhs));break;default:var H="S0206";b.id==="(end)"&&(H="S0207");var z={code:H,position:b.position,token:b.value};if(v)return ve.push(z),{type:"error",error:z};throw z.stack=new Error().stack,z}return b.keepArray&&(A.keepArray=!0),A};q=I(C),L();var Ee=y(0);if(T.id!=="(end)"){var Pe={code:"S0201",position:T.position,token:T.value};B(Pe)}if(Ee=ne(Ee),Ee.type==="parent"||typeof Ee.seekingParent<"u")throw{code:"S0217",token:Ee.type,position:Ee.position};return ve.length>0&&(Ee.errors=ve),Ee};return k})();i.exports=a},{"./signature":5}],5:[function(n,i,s){var c=n("./utils");const a=(()=>{var h={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function x(I){for(var k=1,C=[],v={},T=v;k<I.length;){var q=I.charAt(k);if(q===":")break;var Y=function(){C.push(v),T=v,v={}},ve=function(j,se,me,J){for(var re=1,ce=se;ce<j.length;)if(ce++,q=j.charAt(ce),q===J){if(re--,re===0)break}else q===me&&re++;return ce};switch(q){case"s":case"n":case"b":case"l":case"o":v.regex="["+q+"m]",v.type=q,Y();break;case"a":v.regex="[asnblfom]",v.type=q,v.array=!0,Y();break;case"f":v.regex="f",v.type=q,Y();break;case"j":v.regex="[asnblom]",v.type=q,Y();break;case"x":v.regex="[asnblfom]",v.type=q,Y();break;case"-":T.context=!0,T.contextRegex=new RegExp(T.regex),T.regex+="?";break;case"?":case"+":T.regex+=q;break;case"(":var Oe=ve(I,k,"(",")"),U=I.substring(k+1,Oe);if(U.indexOf("<")===-1)v.regex="["+U+"m]";else throw{code:"S0402",stack:new Error().stack,value:U,offset:k};v.type="("+U+")",k=Oe,Y();break;case"<":if(T.type==="a"||T.type==="f"){var N=ve(I,k,"<",">");T.subtype=I.substring(k+1,N),k=N}else throw{code:"S0401",stack:new Error().stack,value:T.type,offset:k};break}k++}var B="^"+C.map(function(j){return"("+j.regex+")"}).join("")+"$",L=new RegExp(B),y=function(j){var se;if(c.isFunction(j))se="f";else{var me=typeof j;switch(me){case"string":se="s";break;case"number":se="n";break;case"boolean":se="b";break;case"object":j===null?se="l":Array.isArray(j)?se="a":se="o";break;case"undefined":default:se="m"}}return se},F=function(j,se){for(var me="^",J=0,re=0;re<C.length;re++){me+=C[re].regex;var ce=se.match(me);if(ce===null)throw{code:"T0410",stack:new Error().stack,value:j[J],index:J+1};J=ce[0].length}throw{code:"T0410",stack:new Error().stack,value:j[J],index:J+1}};return{definition:I,validate:function(j,se){var me="";j.forEach(function(ke){me+=y(ke)});var J=L.exec(me);if(J){var re=[],ce=0;return C.forEach(function(ke,ze){var ye=j[ce],ge=J[ze+1];if(ge==="")if(ke.context&&ke.contextRegex){var We=y(se);if(ke.contextRegex.test(We))re.push(se);else throw{code:"T0411",stack:new Error().stack,value:se,index:ce+1}}else re.push(ye),ce++;else ge.split("").forEach(function(ne){if(ke.type==="a"){if(ne==="m")ye=void 0;else{ye=j[ce];var Ee=!0;if(typeof ke.subtype<"u"){if(ne!=="a"&&ge!==ke.subtype)Ee=!1;else if(ne==="a"&&ye.length>0){var Pe=y(ye[0]);if(Pe!==ke.subtype.charAt(0))Ee=!1;else{var b=ye.filter(function(A){return y(A)!==Pe});Ee=b.length===0}}}if(!Ee)throw{code:"T0412",stack:new Error().stack,value:ye,index:ce+1,type:h[ke.subtype]};ne!=="a"&&(ye=[ye])}re.push(ye),ce++}else re.push(ye),ce++})}),re}F(j,me)}}}return x})();i.exports=a},{"./utils":6}],6:[function(n,i,s){const c=(()=>{function a(N){var B=!1;if(typeof N=="number"&&(B=!isNaN(N),B&&!isFinite(N)))throw{code:"D1001",value:N,stack:new Error().stack};return B}function h(N){var B=!1;return Array.isArray(N)&&(B=N.filter(function(L){return typeof L!="string"}).length===0),B}function x(N){var B=!1;return Array.isArray(N)&&(B=N.filter(function(L){return!a(L)}).length===0),B}function I(){var N=[];return N.sequence=!0,arguments.length===1&&N.push(arguments[0]),N}function k(N){return N.sequence===!0&&Array.isArray(N)}function C(N){return N&&(N._jsonata_function===!0||N._jsonata_lambda===!0)||typeof N=="function"}function v(N){var B=typeof N.arity=="number"?N.arity:typeof N.implementation=="function"?N.implementation.length:typeof N.length=="number"?N.length:N.arguments.length;return B}function T(N){return N&&N._jsonata_lambda===!0}var q=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function Y(N){return typeof N=="object"&&N!==null&&q in N&&"next"in N&&typeof N.next=="function"}function ve(N,B){if(N===B)return!0;if(typeof N=="object"&&typeof B=="object"&&N!==null&&B!==null){if(Array.isArray(N)&&Array.isArray(B)){if(N.length!==B.length)return!1;for(var L=0;L<N.length;L++)if(!ve(N[L],B[L]))return!1;return!0}var y=Object.getOwnPropertyNames(N),F=Object.getOwnPropertyNames(B);if(y.length!==F.length)return!1;for(y=y.sort(),F=F.sort(),L=0;L<y.length;L++)if(y[L]!==F[L])return!1;for(L=0;L<y.length;L++){var j=y[L];if(!ve(N[j],B[j]))return!1}return!0}return!1}function Oe(N){return typeof N=="object"&&N!==null&&"then"in N&&typeof N.then=="function"}function U(N){var B=[];for(let L of N)B.push(L);return B}return{isNumeric:a,isArrayOfStrings:h,isArrayOfNumbers:x,createSequence:I,isSequence:k,isFunction:C,isLambda:T,isIterable:Y,getFunctionArity:v,isDeepEqual:ve,stringToArray:U,isPromise:Oe}})();i.exports=c},{}]},{},[3])(3)})}(gi)),gi.exports}var Ic=wc();const ba=Ps(Ic);var an={exports:{}};const Fr=Ga(Va),xc="16.5.0",kc={version:xc};var Es;function Sc(){if(Es)return an.exports;Es=1;var t={};const e=Fr,n=Fr,i=Fr,s=Fr,a=kc.version,h=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function x(y){const F={};let j=y.toString();j=j.replace(/\r\n?/mg,`
`);let se;for(;(se=h.exec(j))!=null;){const me=se[1];let J=se[2]||"";J=J.trim();const re=J[0];J=J.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),re==='"'&&(J=J.replace(/\\n/g,`
`),J=J.replace(/\\r/g,"\r")),F[me]=J}return F}function I(y){const F=q(y),j=L.configDotenv({path:F});if(!j.parsed){const re=new Error(`MISSING_DATA: Cannot parse ${F} for an unknown reason`);throw re.code="MISSING_DATA",re}const se=v(y).split(","),me=se.length;let J;for(let re=0;re<me;re++)try{const ce=se[re].trim(),ke=T(j,ce);J=L.decrypt(ke.ciphertext,ke.key);break}catch(ce){if(re+1>=me)throw ce}return L.parse(J)}function k(y){console.log(`[dotenv@${a}][WARN] ${y}`)}function C(y){console.log(`[dotenv@${a}][DEBUG] ${y}`)}function v(y){return y&&y.DOTENV_KEY&&y.DOTENV_KEY.length>0?y.DOTENV_KEY:t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:""}function T(y,F){let j;try{j=new URL(F)}catch(ce){if(ce.code==="ERR_INVALID_URL"){const ke=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw ke.code="INVALID_DOTENV_KEY",ke}throw ce}const se=j.password;if(!se){const ce=new Error("INVALID_DOTENV_KEY: Missing key part");throw ce.code="INVALID_DOTENV_KEY",ce}const me=j.searchParams.get("environment");if(!me){const ce=new Error("INVALID_DOTENV_KEY: Missing environment part");throw ce.code="INVALID_DOTENV_KEY",ce}const J=`DOTENV_VAULT_${me.toUpperCase()}`,re=y.parsed[J];if(!re){const ce=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${J} in your .env.vault file.`);throw ce.code="NOT_FOUND_DOTENV_ENVIRONMENT",ce}return{ciphertext:re,key:se}}function q(y){let F=null;if(y&&y.path&&y.path.length>0)if(Array.isArray(y.path))for(const j of y.path)e.existsSync(j)&&(F=j.endsWith(".vault")?j:`${j}.vault`);else F=y.path.endsWith(".vault")?y.path:`${y.path}.vault`;else F=n.resolve(process.cwd(),".env.vault");return e.existsSync(F)?F:null}function Y(y){return y[0]==="~"?n.join(i.homedir(),y.slice(1)):y}function ve(y){!!(y&&y.debug)&&C("Loading env from encrypted .env.vault");const j=L._parseVault(y);let se=t;return y&&y.processEnv!=null&&(se=y.processEnv),L.populate(se,j,y),{parsed:j}}function Oe(y){const F=n.resolve(process.cwd(),".env");let j="utf8";const se=!!(y&&y.debug);y&&y.encoding?j=y.encoding:se&&C("No encoding is specified. UTF-8 is used by default");let me=[F];if(y&&y.path)if(!Array.isArray(y.path))me=[Y(y.path)];else{me=[];for(const ke of y.path)me.push(Y(ke))}let J;const re={};for(const ke of me)try{const ze=L.parse(e.readFileSync(ke,{encoding:j}));L.populate(re,ze,y)}catch(ze){se&&C(`Failed to load ${ke} ${ze.message}`),J=ze}let ce=t;return y&&y.processEnv!=null&&(ce=y.processEnv),L.populate(ce,re,y),J?{parsed:re,error:J}:{parsed:re}}function U(y){if(v(y).length===0)return L.configDotenv(y);const F=q(y);return F?L._configVault(y):(k(`You set DOTENV_KEY but you are missing a .env.vault file at ${F}. Did you forget to build it?`),L.configDotenv(y))}function N(y,F){const j=Buffer.from(F.slice(-64),"hex");let se=Buffer.from(y,"base64");const me=se.subarray(0,12),J=se.subarray(-16);se=se.subarray(12,-16);try{const re=s.createDecipheriv("aes-256-gcm",j,me);return re.setAuthTag(J),`${re.update(se)}${re.final()}`}catch(re){const ce=re instanceof RangeError,ke=re.message==="Invalid key length",ze=re.message==="Unsupported state or unable to authenticate data";if(ce||ke){const ye=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw ye.code="INVALID_DOTENV_KEY",ye}else if(ze){const ye=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw ye.code="DECRYPTION_FAILED",ye}else throw re}}function B(y,F,j={}){const se=!!(j&&j.debug),me=!!(j&&j.override);if(typeof F!="object"){const J=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw J.code="OBJECT_REQUIRED",J}for(const J of Object.keys(F))Object.prototype.hasOwnProperty.call(y,J)?(me===!0&&(y[J]=F[J]),se&&C(me===!0?`"${J}" is already defined and WAS overwritten`:`"${J}" is already defined and was NOT overwritten`)):y[J]=F[J]}const L={configDotenv:Oe,_configVault:ve,_parseVault:I,config:U,decrypt:N,parse:x,populate:B};return an.exports.configDotenv=L.configDotenv,an.exports._configVault=L._configVault,an.exports._parseVault=L._parseVault,an.exports.config=L.config,an.exports.decrypt=L.decrypt,an.exports.parse=L.parse,an.exports.populate=L.populate,an.exports=L,an.exports}var Ac=Sc();const Yi=async t=>{const n=await(await Mt.getWorkspace()).getResource(t);return n||Qe("Invalid URL: "+t),await n.getContents({uri:!0})},wa=t=>t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:"),Ji={},Qr=async(t,e)=>{const n=await ba(`[**[${e}!='']]`).evaluate(t);for(const i of n){const s=i[e];if(wa(s))continue;const c=await Yi(s);Ji[c]=i[e],i[e]=c}},hr=t=>Ji[t],Ci=async(t,e)=>{const n=await ba(`[**[${e}!='']]`).evaluate(t);for(const i of n){const s=i[e];!s||!s.startsWith("blob:")||(i[e]=Ji[s])}},Ia=t=>{var n;ut.registerContribution("catalog.root",{label:t.label,icon:t.icon,contributionId:t.contributionId});const e=t.contributionId??t.label;(n=t.items)==null||n.forEach(i=>{ut.registerContribution(e,{label:i.label,icon:i.icon,contributionId:i.contributionId});const c=import.meta.resolve("/.");i.items.forEach(a=>{var x;const h={label:a.label,icon:a.icon,state:{...a.state}};(x=h.state)!=null&&x.url&&(h.state.url=h.state.url.replace("${baseURL}/",c)),ut.registerContribution(i.contributionId,h)})})},Ei=t=>{Object.entries(t).forEach(([e,n])=>{const i=/\${([a-zA-Z0-9_]+)}/g;t[e]=n.replace(i,(s,c)=>{const a=t[c];return a!==void 0?a:s})})},xa=async(...t)=>{const e=await Mt.getWorkspace(),n={};for(const i of t){const s=await(e==null?void 0:e.getResource(i));if(!s)continue;const c=await s.getContents(),a=Ac.parse(c||"");Ei(a),Object.assign(n,a)}return Ei(n),n},_c=Object.freeze(Object.defineProperty({__proto__:null,getOriginalUri:hr,isAbsoluteResource:wa,loadEnvs:xa,registerCatalog:Ia,replaceUris:Qr,replaceVars:Ei,revertBlobUris:Ci,toBlobUri:Yi},Symbol.toStringTag,{value:"Module"}));Ka.resolveUrl=t=>Yi(t);An.registerEditorInputHandler({canHandle:t=>t instanceof Br&&t.getName().endsWith(".geospace"),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return e.widgetFactory=n=>Q`
            <gs-map id="${n}" .input="${e}"></gs-map>`,e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cc=Ls(class extends Ds{constructor(){super(...arguments),this.key=Pt}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(Ns(t),this.key=e),n}});var qt=(t=>(t[t.LOADED=0]="LOADED",t[t.LAYER_ADDED=1]="LAYER_ADDED",t[t.LAYER_DELETED=2]="LAYER_DELETED",t[t.LAYER_UPDATED=3]="LAYER_UPDATED",t[t.FEATURE_SELECTED=4]="FEATURE_SELECTED",t))(qt||{});const en=jn(No),Ec=`:root,
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
`,Oc=t=>new Proxy({},{get:(e,n)=>async(...i)=>{for(const s of t)await s[n](...i)}}),Tc="iframe-map-renderer.html";class Pc{constructor(e,n){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=n,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(n,i){return async(...s)=>await e.sendMessage(i,{...s})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=Tc,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}getViewExtent(){return[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(e){this.onSyncCallback&&this.onSyncCallback(e)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,n){try{const{toBlobUri:i}=await wt(async()=>{const{toBlobUri:c}=await Promise.resolve().then(()=>_c);return{toBlobUri:c}},[]),s=await i(n);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:s},"*")}catch(i){this.iframe.contentWindow.postMessage({id:e,success:!1,error:i instanceof Error?i.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{var h,x,I,k;if(e.source!==((h=this.iframe)==null?void 0:h.contentWindow))return;const{id:n,result:i,error:s,type:c,event:a}=e.data;if(n!==void 0&&this.pendingMessages.has(n)){const{resolve:C,reject:v}=this.pendingMessages.get(n);this.pendingMessages.delete(n),s?v(new Error(s)):C(i)}c==="dirty"?(x=this.onDirtyCallback)==null||x.call(this):c==="sync"?(I=this.onSyncCallback)==null||I.call(this,a):c==="iframeClicked"?(k=this.onClickCallback)==null||k.call(this):c==="resolveAsset"&&this.handleAssetResolution(n,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const n=i=>{var s;i.source===((s=this.iframe)==null?void 0:s.contentWindow)&&i.data.type==="rendererReady"&&(window.removeEventListener("message",n),e())};window.addEventListener("message",n)})}async sendMessage(e,n){if(!this.iframe)throw new Error("Iframe not initialized");const i=++this.messageId;return new Promise((s,c)=>{this.pendingMessages.set(i,{resolve:s,reject:c}),this.iframe.contentWindow.postMessage({id:i,method:e,params:n},"*"),setTimeout(()=>{this.pendingMessages.has(i)&&(this.pendingMessages.delete(i),c(new Error("Message timeout")))},5e3)})}}class Rc{constructor(e,n){this.gsMap=e,this.renderer=n}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,n){n?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){e>=0&&e<this.gsMap.layers.length&&this.gsMap.layers.splice(e,1),this.triggerDirty()}async renameLayer(e,n){e>=0&&e<this.gsMap.layers.length&&(this.gsMap.layers[e].name=n),this.triggerDirty()}async moveLayer(e,n){if(e>=0&&e<this.gsMap.layers.length&&n>=0&&n<this.gsMap.layers.length&&e!==n){const[i]=this.gsMap.layers.splice(e,1);this.gsMap.layers.splice(n,0,i)}this.triggerDirty()}async setLayerVisible(e,n){e>=0&&e<this.gsMap.layers.length&&(this.gsMap.layers[e].visible=n),this.triggerDirty()}async applyStyles(e,n){const i=typeof e=="number"?this.gsMap.layers[e]:this.gsMap.layers.find(s=>s.name===e);i&&(i.stylesPath=n),this.triggerDirty()}async addMarker(e,n){let i=this.gsMap.layers.find(s=>s.name===(n||"Markers"));i||(i={name:n||"Markers",type:"vector",source:{type:"features",features:[]},visible:!0},this.gsMap.layers.push(i)),i.source&&i.source.features&&i.source.features.push(e),this.triggerDirty()}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){e>=0&&e<this.gsMap.controls.length&&this.gsMap.controls.splice(e,1),this.triggerDirty(),await this.renderer.modelToUI()}async addOverlayFromModule(e,n){this.gsMap.overlays.push({src:e,position:n||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){e>=0&&e<this.gsMap.overlays.length&&this.gsMap.overlays.splice(e,1),this.triggerDirty(),await this.renderer.modelToUI()}async enableDrawing(e,n){}async disableDrawing(){}async enableFeatureSelection(e){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class Lc{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,n){en.set({part:this.source,event:qt.LAYER_ADDED})}async deleteLayer(e){en.set({part:this.source,event:qt.LAYER_DELETED})}async renameLayer(e,n){en.set({part:this.source,event:qt.LAYER_UPDATED})}async moveLayer(e,n){en.set({part:this.source,event:qt.LAYER_UPDATED})}async setLayerVisible(e,n){}async applyStyles(e,n){}async addMarker(e,n){en.set({part:this.source,event:qt.LAYER_ADDED})}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,n){}async removeOverlay(e){}async enableDrawing(e,n){}async disableDrawing(){}async enableFeatureSelection(e){}async disableSelection(){}async deleteSelectedFeatures(){en.set({part:this.source,event:qt.LAYER_UPDATED})}}var Dc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,Er=(t,e,n,i)=>{for(var s=i>1?void 0:i?Nc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Dc(e,n,s),s};let It=class extends _t{constructor(){super(),this.mapContainer=Dn(),this.isFirstConnection=!0,this.interactionMode="none",this.chatContext={history:[]},this.commandStack=new Ks}getOperations(){return this.operations}onMapChanged({part:t,event:e}){t===this&&(e===qt.LAYER_ADDED||e===qt.LAYER_DELETED||e===qt.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const t=this.getGsMap(),e=(t==null?void 0:t.layers.map((i,s)=>({layer:i,index:s})).filter(({layer:i})=>{var a;const s=i.type===ss.VECTOR,c=((a=i.source)==null?void 0:a.type)===Xt.Features;return s&&c}))||[],n=this.activeDrawingLayerIndex!==void 0;return Q`
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
            
            ${ln(e.length>0,()=>{const i=e.map(({layer:s,index:c})=>`${c}:${s.name}`).join("|");return Q`
                ${Cc(i,Q`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerIndex??""}"
                        @change=${s=>{var a;const c=s.target.value?parseInt(s.target.value):void 0;this.activeDrawingLayerIndex=c,(c==null||s.target.value==="")&&((a=this.operations)==null||a.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${e.map(({layer:s,index:c})=>Q`
                            <wa-option value="${c}">${s.name||`Layer ${c+1}`}</wa-option>
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
        `}async connectedCallback(){var t;if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}(t=this.renderer)!=null&&t.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Me.set(this)}))}async doInitUI(){var h,x,I;const t=(h=this.input)==null?void 0:h.data,e=await xa(".env","envs/.env","env","envs/env","default.env","envs/default.env","dev.env","envs/dev.env");e.BUILD_TIME=new Date;const n=await t.getContents();let i=n&&n.trim()?JSON.parse(n):Fs;i=this.migrateGsMap(i),await Qr(i,"url"),await Qr(i,"src"),this.gsMap=i,i.view&&(this.initialView={center:[...i.view.center],zoom:i.view.zoom}),this.renderer=new Pc(i,e);const s=this.renderer.getOperations(),c=new Rc(i,this.renderer),a=new Lc(this);this.operations=Oc([c,s,a]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(k=>{var C;if(this.gsMap){switch(k.type){case"viewChanged":this.gsMap.view.center=k.view.center,this.gsMap.view.zoom=k.view.zoom,k.view.rotation!==void 0&&k.view.rotation!==0&&(this.gsMap.view.rotation=k.view.rotation);break;case"featuresChanged":const v=this.gsMap.layers[k.layerIndex];v&&((C=v.source)==null?void 0:C.type)===Xt.Features&&(v.source.features=k.features);break;case"featureSelected":const T={feature:k.feature,layerIndex:k.layerIndex,metrics:k.metrics};console.info("Feature metrics:",T.metrics),en.set({part:this,event:qt.FEATURE_SELECTED,payload:T});break;case"featureDeselected":console.info("Feature deselected"),en.set({part:this,event:qt.FEATURE_SELECTED,payload:null});break}this.markDirty(!0)}}),(I=(x=this.renderer).setOnClick)==null||I.call(x,()=>{Me.set(this)}),this.updateToolbar(),en.set({part:this,event:qt.LOADED})}catch(k){console.error("Failed to render map:",k),Qe(`Failed to render map: ${k.message}`)}}migrateGsMap(t){if(t.view)return t;console.log("Creating view field and migrating old properties...");const e={...t,view:{}};return t.center!==void 0&&(e.view.center=t.center,delete e.center),t.zoom!==void 0&&(e.view.zoom=t.zoom,delete e.zoom),t.projection!==void 0&&(e.view.projection=t.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857"),e}getGsMap(){return this.gsMap}async save(){var t;if(!this.renderer){Qe("Map not initialized");return}try{if(!this.gsMap){Qe("Map not initialized");return}const e=JSON.parse(JSON.stringify(this.gsMap));await Ci(e,"url"),await Ci(e,"src"),(t=this.input)==null||t.data.saveContents(JSON.stringify(e,null,2)),this.markDirty(!1)}catch(e){Qe(`Save failed: ${e.message}`)}}get mapOperations(){return this.operations}edit(){Vt("not yet implemented")}async refresh(){if(!this.renderer){bt.error("Map not initialized");return}await this.renderer.modelToUI()}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){var t;this.activeDrawingLayerIndex!==void 0&&(await((t=this.operations)==null?void 0:t.enableDrawing("Point",this.activeDrawingLayerIndex)),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){var t;this.activeDrawingLayerIndex!==void 0&&(await((t=this.operations)==null?void 0:t.enableDrawing("LineString",this.activeDrawingLayerIndex)),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){var t;this.activeDrawingLayerIndex!==void 0&&(await((t=this.operations)==null?void 0:t.enableDrawing("Polygon",this.activeDrawingLayerIndex)),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){var t;await((t=this.operations)==null?void 0:t.enableFeatureSelection(this.activeDrawingLayerIndex??-1)),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){var t;if(this.interactionMode==="select")try{await((t=this.operations)==null?void 0:t.deleteSelectedFeatures()),Vt("Selected features deleted")}catch(e){Qe(e.message)}}async handleCreateDrawingLayer(){var i;if(!this.gsMap){Qe("Map not initialized");return}const t=await br("Enter name for new drawing layer:","Drawing Layer");if(!t)return;const e={name:t,type:ss.VECTOR,source:{type:Xt.Features,features:[]},visible:!0};await((i=this.operations)==null?void 0:i.addLayer(e,!1));const n=this.gsMap.layers.length-1;this.activeDrawingLayerIndex=n,this.updateToolbar(),Vt(`Created drawing layer: ${t}`)}doClose(){var t;(t=this.renderer)==null||t.destroy(),this.renderer=void 0,this.input=void 0}render(){return Q`
            <div class="gc-map-container" ${Nn(this.mapContainer)}>
            </div>
        `}};It.styles=[Ha(Ec),Rt`
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
    `];Er([Ue({attribute:!1})],It.prototype,"input",2);Er([Ue({type:Number})],It.prototype,"activeDrawingLayerIndex",2);Er([Ue({type:String})],It.prototype,"interactionMode",2);Er([ri(en)],It.prototype,"onMapChanged",1);It=Er([ht("gs-map")],It);var $c=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,li=(t,e,n,i)=>{for(var s=i>1?void 0:i?Mc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&$c(e,n,s),s};let tr=class extends _t{onPartChanged(t){t==this||t==this.mapEditor||!(t instanceof It)||(this.mapEditor=t,this.updateLater())}onMapChanged({part:t}){t==this.mapEditor&&this.updateLater()}toggleVisible(t){var c,a;const s=!(this.mapEditor.getGsMap().layers[t].visible!==!1);(a=(c=this.mapEditor)==null?void 0:c.mapOperations)==null||a.setLayerVisible(t,s),this.updateLater()}async confirmAction(t,e){await wr(t)&&e()}selectLayer(t){this.selectedLayerIndex=t,this.updateToolbar(),this.updateContextMenu()}renameLayer(t){if(!this.mapEditor)return;const e=t!==void 0?t:this.selectedLayerIndex;if(e===void 0)return;const n=Ae.createExecutionContext(this,{index:e+1});n.activeEditor=this.mapEditor,Ae.execute("rename_layer",n)}deleteLayer(t){if(!this.mapEditor)return;const e=t!==void 0?t:this.selectedLayerIndex;if(e===void 0)return;const n=this.mapEditor.getGsMap(),i=n==null?void 0:n.layers[e];i&&this.confirmAction(`Delete layer "${i.name||`Layer ${e+1}`}"?`,()=>this.withRefresh(()=>{var s,c;return(c=(s=this.mapEditor)==null?void 0:s.mapOperations)==null?void 0:c.deleteLayer(e)}))}moveLayerUp(t){!this.mapEditor||t<=0||(this.withRefresh(()=>{var e,n;return(n=(e=this.mapEditor)==null?void 0:e.mapOperations)==null?void 0:n.moveLayer(t,t-1)}),this.selectedLayerIndex=t-1)}moveLayerDown(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();!e||t>=e.layers.length-1||(this.withRefresh(()=>{var n,i;return(i=(n=this.mapEditor)==null?void 0:n.mapOperations)==null?void 0:i.moveLayer(t,t+1)}),this.selectedLayerIndex=t+1)}renderToolbar(){const t=this.selectedLayerIndex!==void 0;return Q`
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
        `}renderContextMenu(){const t=this.selectedLayerIndex!==void 0;return Q`
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
        `}render(){return ln(!this.mapEditor,()=>Q`
                    <k-no-content message="Select a map."></k-no-content>`,()=>{var t,e,n,i,s;return Q`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${(t=this.mapEditor.getGsMap())==null?void 0:t.layers.map((c,a)=>Q`
                            <wa-tree-item @click="${()=>this.selectLayer(a)}" 
                                          class="${this.selectedLayerIndex===a?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${c.name??`Layer ${a+1}`}${a==0?Q`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-action size="small"
                                                  icon="${c.visible!==!1?"eye":"eye-slash"}"
                                                  title="${c.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>this.toggleVisible(a)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${a===0}"
                                                  .action=${()=>this.moveLayerUp(a)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${a===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>this.moveLayerDown(a)}>
                                        </k-action>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${(n=(e=this.mapEditor)==null?void 0:e.getGsMap())==null?void 0:n.controls.map((c,a)=>Q`
                            <wa-tree-item>
                                <span>${hr(c.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>this.confirmAction(`Delete control "${hr(c.src)}"?`,()=>this.withRefresh(()=>{var h,x;return(x=(h=this.mapEditor)==null?void 0:h.mapOperations)==null?void 0:x.removeControl(a)}))}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${(s=(i=this.mapEditor)==null?void 0:i.getGsMap())==null?void 0:s.overlays.map((c,a)=>Q`
                            <wa-tree-item>
                                <span>${hr(c.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>this.confirmAction(`Delete overlay "${hr(c.src)}"?`,()=>this.withRefresh(()=>{var h,x;return(x=(h=this.mapEditor)==null?void 0:h.mapOperations)==null?void 0:x.removeOverlay(a)}))}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="highlighter"></k-icon> Styles
                    </wa-tree-item>
                </wa-tree>
            `})}};tr.styles=Rt`
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
    `;li([ft()],tr.prototype,"selectedLayerIndex",2);li([ri(Me)],tr.prototype,"onPartChanged",1);li([ri(en)],tr.prototype,"onMapChanged",1);tr=li([ht("gs-map-props")],tr);var Fc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,ka=(t,e,n,i)=>{for(var s=i>1?void 0:i?qc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Fc(e,n,s),s};const zc="catalog.root";let Sn=class extends _t{constructor(){super(...arguments),this.treeRef=Dn()}doBeforeUI(){const t=ut.getContributions(zc);this.rootNodes=this.toTreeNodes(t)}renderToolbar(){const t=Me.get()instanceof Sn&&Ft.get()!==void 0;return Q`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!t} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(t){return t.map(e=>{const n={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const i=ut.getContributions(e.contributionId);n.leaf=i.length===0,n.children=this.toTreeNodes(i)}return n})}onItemDblClicked(t){const e=t.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(t){const e=t.detail.selection[0].model;Ft.set(e.data)}setAllExpanded(t){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(n=>{n.expanded=t})}refresh(){this.requestUpdate()}createTreeItems(t,e=!1){var n;return t?Q`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${t} ?expanded=${e}>
                <span><k-icon name="${t.icon}"></k-icon> ${t.label}</span>
                ${(n=t.children)==null?void 0:n.map(i=>this.createTreeItems(i))}
            </wa-tree-item>`:Q``}render(){var t;return Q`
            <wa-tree ${Nn(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${(t=this.rootNodes)==null?void 0:t.map(e=>this.createTreeItems(e,!0))}
            </wa-tree>
        `}};Sn.styles=Rt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;ka([ft()],Sn.prototype,"rootNodes",2);Sn=ka([ht("gs-catalog")],Sn);const jc="geo!space catalog",Uc="earth",Bc="catalog.root.geospace",Wc=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],Gc={label:jc,icon:Uc,contributionId:Bc,items:Wc};pt({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async t=>{let e=t.params&&t.params.url;if(!e){const i=Ft.get();if(!i||!("url"in i))return;e=i.url}const n=await Mt.getWorkspace();if(!n){Qe("No workspace selected.");return}fetch(e,{method:"GET"}).then(i=>i.blob()).then(i=>{const s=new URL(e).pathname.split("/"),c=s[s.length-1];return n.getResource(c,{create:!0}).then(a=>a.saveContents(i,{contentType:Ya.BINARY}).then(()=>{Vt("File checked out: "+c)}))}).catch(i=>{Qe(i)})}}});pt({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async t=>{const e=Me.get();e instanceof Sn&&e.refresh()}}});pt({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Me.get();e instanceof Sn&&e.setAllExpanded(!0)}}});pt({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Me.get();e instanceof Sn&&e.setAllExpanded(!1)}}});Ia(Gc);const rn=t=>t.activeEditor instanceof It,wn=t=>{const e=t.activeEditor;if(!(e instanceof It)||!e.getOperations())throw bt.error("GsMapEditor with renderer not available in context.source"),new Error("GsMapEditor with renderer not available in context.source");return e.getOperations()};Ae.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level, an interger between 0 and 12",required:!0}]},handler:{canExecute:rn,execute:async t=>{await wn(t).setZoom(Number(t.params.zoom).valueOf())}}});Ae.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[]},handler:{canExecute:t=>Me.get()instanceof It,execute:async t=>{var i;const e=Me.get(),n=e.getGsMap();if(((i=n==null?void 0:n.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(n.view.zoom+1))}}}});Ae.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[]},handler:{canExecute:t=>Me.get()instanceof It,execute:async t=>{var i;const e=Me.get(),n=e.getGsMap();if(((i=n==null?void 0:n.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(n.view.zoom-1))}}}});Ae.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the map",required:!0},{name:"lon",description:"the longitude of the map",required:!0}]},handler:{canExecute:rn,execute:async t=>{const e=wn(t),n=qs([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]);await e.setCenter([n[0],n[1]])}}});Ae.registerAll({command:{id:"add_marker",name:"Add a marker",description:"Add a marker to the map",parameters:[{name:"lat",description:"the latitude of the marker",required:!0},{name:"lon",description:"the longitude of the marker",required:!0},{name:"name",description:"a short name of the marker",required:!0},{name:"description",description:"a description of the marker",required:!0},{name:"iconPath",description:"the path within the workspace to the icon file in any graphics format such as png, jpg or svg; if no icon path provided, a marker.png file will be assumed to be located in the root of the workspace",required:!1},{name:"layerName",description:"the name of the layer to add the marker to; if not provided, markers will be added to the default 'geocoded-markers' layer",required:!1}]},handler:{canExecute:rn,execute:async t=>{const e=wn(t),n=qs([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]),i=t.params.iconPath||"marker.png",s={state:{name:t.params.name,description:t.params.description},style:i,geometry:{type:Ja.Point,coordinates:[...n]}};await e.addMarker(s,t.params.layerName)}}});Ae.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(Xt).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:rn,execute:async t=>{var h;const e=wn(t),n=(h=t.params.source)==null?void 0:h.trim().toLowerCase(),i=t.params.url,s=Za(n),c=(t==null?void 0:t.params)&&t.params.basemap==!0,a={type:Xa(n),source:{type:s,url:i??Qa(s)}};await Qr(a,"url"),await e.addLayer(a,c)}}});Ae.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:rn,execute:async t=>{const e=wn(t),n=parseInt(t.params.index)-1;n<0||await e.deleteLayer(n)}}});Ae.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:rn,execute:async t=>{var h;const e=wn(t),i=t.activeEditor.getGsMap(),s=parseInt(t.params.index)-1;if(s<0||!i||s>=i.layers.length)return;const c=i.layers[s].name||`Layer ${s+1}`,a=((h=t.params)==null?void 0:h.newName)||await br(`Enter new name for "${c}":`,c);!a||a===c||await e.renameLayer(s,a)}}});Ae.registerAll({command:{id:"apply_styles",name:"Apply styles",description:"Applies a styles json file to a layer",parameters:[{name:"stylesPath",description:"the path to the json file containing style definitions",required:!0},{name:"layer",description:"the layer to apply the styles to: can be either a name or the index pointing to a layer in the layers stack",required:!0}]},handler:{canExecute:rn,execute:async t=>{var s;const e=wn(t),n=t.params.layer,i=(s=t.params.stylesPath)==null?void 0:s.trim().toLowerCase();await e.applyStyles(n,i)}}});Ae.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:rn,execute:async t=>{var i;const e=t.source,n=(i=t.params)==null?void 0:i.mode;await e.switchColorMode(n)}}});Ae.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:rn,execute:async t=>{const e=wn(t),n=t.params.src,i=t.params.position;await e.addOverlayFromModule(n,i)}}});Ae.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:rn,execute:async t=>{const e=wn(t),n=t.params.src;await e.addControlFromModule(n)}}});Ae.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates",type:"number[]"}]},handler:{canExecute:rn,execute:async t=>{const e=t.params.latlon,i=t.source.renderer.getViewExtent();if(!i)throw new Error("Failed to get view extent");let s=i;if(e||e===void 0){const{transformExtent:c}=await wt(async()=>{const{transformExtent:a}=await import("./index-CNuu7pZ0.js").then(h=>h.al);return{transformExtent:a}},__vite__mapDeps([0,1]));s=c(i,"EPSG:3857","EPSG:4326"),[s[0],s[1]]=[s[1],s[0]],[s[2],s[3]]=[s[3],s[2]]}t.viewExtent=s}}});Ae.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:t=>Me.get()instanceof It,execute:async t=>{const e=Me.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});Ae.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:t=>Me.get()instanceof It,execute:async t=>{const e=Me.get();e instanceof It&&await e.refresh()}}});Ae.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:t=>Me.get()instanceof It,execute:async t=>{const e=Me.get();e instanceof It&&await e.resetView()}}});Ae.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:t=>Me.get()instanceof It,execute:async t=>{const n=Me.get().mapOperations;n&&await n.switchColorMode()}}});rt.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>wt(()=>import("./git-extension-DlKTWTrq.js"),__vite__mapDeps([2,0,1])),icon:"code-branch",experimental:!0});rt.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>wt(()=>import("./pyterminal-extension-BEXgss_A.js"),__vite__mapDeps([3,0,1,4])),icon:"k python",experimental:!0});rt.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>wt(()=>import("./k-linuxterminal-D_csODgL.js"),__vite__mapDeps([5,0,1,4])),icon:"terminal",experimental:!0});rt.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>wt(()=>import("./webllmservice-DEDenTv5.js"),[]),icon:"robot"});rt.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>wt(()=>import("./p12-splitter-Hfj6ILM2.js"),__vite__mapDeps([6,0,1])),icon:"certificate"});rt.registerExtension({id:"system.notebook",name:"Jupyter Notebook Editor",description:"View and execute Jupyter notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>wt(()=>import("./notebook-extension-CeHrvSxz.js"),__vite__mapDeps([7,0,1,8,9])),icon:"k jupyter"});rt.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>wt(()=>import("./command-palette-extension-DUrJ5ZZF.js"),__vite__mapDeps([10,0,1])),icon:"terminal"});rt.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>wt(()=>import("./download-extension-Dt-1aOCb.js"),__vite__mapDeps([11,0,1])),icon:"download"});rt.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>wt(()=>import("./unzip-extension-DflmwE5e.js"),__vite__mapDeps([12,0,1])),icon:"box-archive"});rt.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>wt(()=>import("./md-editor-extension-CExNlpYz.js"),__vite__mapDeps([13,0,1])),icon:"book"});rt.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>wt(()=>import("./monaco-editor-extension-CPYvSO-j.js"),__vite__mapDeps([14,8,0,1,9])),icon:"file-pen"});rt.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>wt(()=>import("./memory-usage-extension-Bm4D2KGB.js"),__vite__mapDeps([15,0,1])),icon:"microchip"});rt.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>wt(()=>import("./webdav-extension-Cw_Be4q7.js"),__vite__mapDeps([16,0,1])),icon:"cloud"});const Vc=`You are a specialized commands execution plan generator. Your sole purpose is to analyze user requests expressed in natural language and translate them into a precise sequence of command calls that can be executed by a software controller.

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
\`\`\``,Kc=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,Hc=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``;let Yc=0;ut.registerContribution(Cr,{label:"Commander",description:"Commands execution plan generator",role:"commands",sysPrompt:Vc,canHandle:({activeEditor:t})=>{const e=Ae.listCommands({source:t});return Object.keys(e).length>0},promptDecorator:async({userPrompt:t,commandRegistry:e,activeEditor:n})=>{const i=e.listCommands({source:n}),s=JSON.stringify(i,null,2);return`${t}

***Available Commands:***
${s}`},messageDecorator:async({message:t,activeEditor:e})=>{if(!t)return;const n=t.content.replace("```json","").replace("```",""),i=JSON.parse(n);let s=!0;t.content=i.map(({id:c,summary:a},h)=>{const x=Ae.getCommand(c);return x?`${h+1}. ${x.name}
	- ${a||x.description}`:(s=!1,`${h+1}. *INVALID COMMAND:* _${c}_`)}).join(`
`),t.actions=t.actions||[],t.actions.push({label:"Show Commands Execution Plan",icon:"list",action:async()=>{const c=Yc++,a=`\`\`\`json
${JSON.stringify(i,null,2)}
\`\`\``,h=new $s(a,`Commands Execution Plan (${c}).md`);await An.loadEditor(h)}}),s&&t.actions.push({label:"Execute Commands",icon:"play",action:async()=>{const c=(e==null?void 0:e.getCommandStack())||new Ks;await Zn.runAsync("Executing commands",async()=>{bt.debug("Executing commands: "+JSON.stringify(i));const a=Ae.createExecutionContext(e);for(const h of i){const x=Object.entries(h.parameters||{}).map(([I,k])=>(typeof k=="string"&&(k=k.replace(/{{(.*?)}}/g,(C,v)=>a[v.trim()]??"")),[I,k]));a.params=Object.fromEntries(x),await c.execute(h.id,a)}})}})}});const Sa=t=>t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function",Aa=async({userPrompt:t,activeEditor:e})=>{var c,a;const n=e.getEditor(),i=n.getModel(),s=i.getValueInRange(n.getSelection());return s?`${t}

 Code selection within file "${(c=e.input)==null?void 0:c.data.getWorkspacePath()}":

            ${s}`:`${t}

Code in file "${(a=e.input)==null?void 0:a.data.getWorkspacePath()}":

            ${i.getValue()}`};ut.registerContribution(Cr,{label:"Python Assistant",description:"Python code assistant",role:"py-programmer",sysPrompt:Kc,canHandle:({activeEditor:t})=>Sa(t)&&t.getLanguage()=="python",promptDecorator:Aa});ut.registerContribution(Cr,{label:"JavaScript Assistant",description:"JavaScript code assistant",role:"js-programmer",sysPrompt:Hc,canHandle:({activeEditor:t})=>Sa(t)&&t.getLanguage()=="javascript",promptDecorator:Aa});var Jc=Object.getOwnPropertyDescriptor,Zc=(t,e,n,i)=>{for(var s=i>1?void 0:i?Jc(e,n):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(s=a(s)||s);return s};let Os=class extends $i{createRenderRoot(){return this}render(){return Q`
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
                <k-toolbar id=${Mi}></k-toolbar>
                <k-toolbar id=${el}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${nr}></k-toolbar>
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
                    <k-tabs id="${Si}"></k-tabs>
                    <k-tabs id="${ea}"></k-tabs>
                </k-resizable-grid>
                
                <!-- CENTER: Editor + Bottom Panel -->
                <k-resizable-grid 
                    id="center-layout" 
                    orientation="vertical" 
                    sizes="80%, 20%">
                    
                    <!-- Editor Area (fixed, never moves) -->
                    <k-tabs id="${Vr}"></k-tabs>
                    
                    <!-- Bottom Panel (terminal, output, etc.) -->
                    <k-tabs id="${na}"></k-tabs>
                </k-resizable-grid>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${ta}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${Qs}></k-toolbar>
                <k-toolbar id=${Fi}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Xs}></k-toolbar>
            </div>
        `}};Os=Zc([ht("gs-app")],Os);const Qc=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
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
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,Ts=Pi("GeoSpaceApp"),Xc={".geojson":Xt.GeoJSON,".json":Xt.GeoJSON,".kml":Xt.KML,".gpx":Xt.GPX,".tif":Xt.GeoTIFF,".tiff":Xt.GeoTIFF,".geotiff":Xt.GeoTIFF},_a=t=>{const e=t.getName().toLowerCase();for(const[n,i]of Object.entries(Xc))if(e.endsWith(n))return i;return null},eu=t=>_a(t)!==null,Ur={id:"geospace",name:"geo!space",version:us,description:"A geospatial IDE for working with spatial data",extensions:["system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage"],contributions:{ui:[{target:Mi,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:Si,name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>Q`<k-filebrowser id="${t}"></k-filebrowser>`},{target:Si,name:"catalog",label:"Catalog",icon:"book",component:t=>Q`<gs-catalog id="${t}"></gs-catalog>`},{target:ea,name:"map-props",label:"Map Properties",icon:"fg map-options",component:t=>Q`<gs-map-props id="${t}"></gs-map-props>`},{target:ta,name:"assistant",label:"AI",icon:"robot",component:t=>Q`<k-aiassist id="${t}"></k-aiassist>`},{target:na,name:"log-terminal",label:"Log",icon:"list",component:t=>Q`<k-log-terminal id="${t}"></k-log-terminal>`},{target:Qs,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:Xs,label:`v${us}`,icon:"circle-info",command:"show_version_info"},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const t=Ft.get();return t instanceof Br?!eu(t):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_geospace_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>wt(()=>import("./mapbuilder-extension-DzIWWPLX.js"),__vite__mapDeps([17,0,1])),icon:"earth"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>wt(()=>import("./overpass-extension-DiwtfHVj.js"),__vite__mapDeps([18,0,1])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>wt(()=>import("./gtfs-extension-BqN5KC8C.js"),__vite__mapDeps([19,0,1])),icon:"map-location-dot"}]},async initialize(){ut.registerContribution(Cr,{label:"App Support",description:"General app support",role:"appsupport",sysPrompt:()=>{const t=rt.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,installedAndEnabled:rt.isEnabled(n.id)})),e=`***Available Extensions:***
${JSON.stringify(t,null,2)}`;return`${Qc}

${e}`},canHandle:({activeEditor:t})=>t===void 0,promptDecorator:async({userPrompt:t})=>Mt.getWorkspace().then(e=>{var s;const n={workspace:e==null?void 0:e.getName(),activeEditor:(s=An.getEditorArea())==null?void 0:s.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(n,null,2)}`}

${t}`})}),pt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{alert(`${Ur.name}
Version: ${Ur.version}
Alpha Release

${Ur.description}`)}}}),pt({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async t=>{const e=Ft.get();if(!(e instanceof Br))return;const n=_a(e);if(!n){Ts.warn(`Unsupported file type: ${e.getName()}`);return}const i=e.getWorkspacePath(),s=Ae.createExecutionContext(t.source,{source:n,url:i});await Ae.execute("add_layer",s)}}}),pt({command:{id:"create_geospace_file",name:"Create GeoSpace Map File",description:"Creates a new .geospace map file",parameters:[]},handler:{execute:async()=>{const t={...Fs,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}};await Ae.execute("create_file",{params:{path:"map.geospace",contents:JSON.stringify(t,null,2),extension:".geospace",ask:!0}})}}}),Ts.info("geo!space is ready!")},render(){return Q`<gs-app></gs-app>`}};Vs.loadApp(Ur,document.body);export{It as G,Un as K,nc as P,Mi as T,Me as a,Zn as b,Qe as c,Ft as d,na as e,_t as f,Yo as g,el as h,Mr as i,An as j,bt as k,xa as l,Ke as m,ut as n,Qs as o,Pi as p,pt as r,Vt as t};
