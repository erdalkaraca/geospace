const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0ONUd71.js","assets/index-CyGQFstn.css","assets/git-extension-q9s_HUGL.js","assets/pyterminal-extension-ueECy6XZ.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-BsFyVv_L.js","assets/p12-splitter-BA6TvKZh.js","assets/package-manager-extension-B5WboPBk.js","assets/notebook-extension-eQj9zP_1.js","assets/editor.main-Bd4z_I5w.js","assets/editor-D6kYW_CN.css","assets/command-palette-extension-CoVdlYC_.js","assets/download-extension-j4yiNp0k.js","assets/unzip-extension-WqRZ2Ey6.js","assets/md-editor-extension-DifwTZUO.js","assets/monaco-editor-extension-eEIwUqU4.js","assets/memory-usage-extension-BwhpiDVB.js","assets/webdav-extension-D0yUBwVh.js","assets/mapbuilder-extension-yizVRGwZ.js","assets/style-editor-extension-CArMhPdY.js","assets/overpass-extension-19BKjZ8e.js","assets/gtfs-extension-D5HSV6uo.js"])))=>i.map(i=>d[i]);
var Ha=Object.defineProperty;var Ka=(t,e,n)=>e in t?Ha(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Je=(t,e,n)=>Ka(t,typeof e!="symbol"?e+"":e,n);import{x as Z,B as Kr,c as Si,g as $i,i as zs,a as Lt,t as mt,o as si,b as Ya,n as Ue,r as gt,e as Mn,E as Rt,d as Fn,f as js,h as Us,j as Ja,p as Za,v as Ln,k as pr,M as gi,T as Qa,m as Bs,l as rn,q as Ws,s as Xa,_ as eo,u as to,w as ft,y as no,G as ds,z as nn,D as Gs,A as ro,C as io,F as so,H as ao,I as oo,J as lo}from"./index-D0ONUd71.js";class Mi{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,n){var i;return e[n]||((i=this.parent)==null?void 0:i.getProxy()[n])}set(e,n,i){e[n]=i}put(e,n){this.variables[e]=n}getProxy(){return this.proxy}createChild(e={}){const n=new Mi(e);return n.parent=this,this.children.push(n),n}getChildren(){return this.children}getParent(){return this.parent}destroy(){var n,i;const e=(n=this.parent)==null?void 0:n.children.indexOf(this);e!==void 0&&e>=0&&((i=this.parent)==null||i.children.splice(e,1)),this.parent=void 0}}const Mt=new Mi({}),In=Mt.createChild({});In.put("html",Z);In.put("render",Kr);const hs={debug:0,info:1,warning:2,error:3};let co="debug";const Jn={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Yr=null;const Ai=[];function dr(t){if(t===null)return"null";if(t===void 0)return"undefined";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(t instanceof Error)return`${t.name}: ${t.message}`;try{return JSON.stringify(t)}catch{return String(t)}}class uo{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,n){Zn(this.source,e,n)}}function po(t){return hs[t]>=hs[co]}function Zn(t,e,n){po(n)&&(Yr?Yr(t,e,n):(Ai.push({source:t,message:e,level:n}),Jn[n==="error"?"error":n==="warning"?"warn":n==="debug"?"debug":"log"](`[${t}] ${e}`)))}function ho(){console.log=function(...t){Jn.log.apply(console,t),Zn("Console",t.map(e=>dr(e)).join(" "),"info")},console.info=function(...t){Jn.info.apply(console,t),Zn("Console",t.map(e=>dr(e)).join(" "),"info")},console.warn=function(...t){Jn.warn.apply(console,t),Zn("Console",t.map(e=>dr(e)).join(" "),"warning")},console.error=function(...t){Jn.error.apply(console,t),Zn("Console",t.map(e=>dr(e)).join(" "),"error")},console.debug=function(...t){Jn.debug.apply(console,t),Zn("Console",t.map(e=>dr(e)).join(" "),"debug")}}ho();function fo(t){for(Yr=t;Ai.length>0;){const e=Ai.shift();e&&t(e.source,e.message,e.level)}}function mo(){Yr=null}function Fi(t){return new uo(t)}const ut=Fi("System");Mt.put("logger",ut);var yr={exports:{}},go=yr.exports,fs;function vo(){return fs||(fs=1,function(t,e){(function(n,i){var s={};n.PubSub?(s=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=s,i(s)),t!==void 0&&t.exports&&(e=t.exports=s),e.PubSub=s,t.exports=e=s})(typeof window=="object"&&window||go||Si,function(n){var i={},s=-1,l="*";function a(N){var G;for(G in N)if(Object.prototype.hasOwnProperty.call(N,G))return!0;return!1}function h(N){return function(){throw N}}function w(N,G,re){try{N(G,re)}catch(j){setTimeout(h(j),0)}}function v(N,G,re){N(G,re)}function I(N,G,re,j){var L=i[G],W=j?v:w,D;if(Object.prototype.hasOwnProperty.call(i,G))for(D in L)Object.prototype.hasOwnProperty.call(L,D)&&W(L[D],N,re)}function S(N,G,re){return function(){var L=String(N),W=L.lastIndexOf(".");for(I(N,N,G,re);W!==-1;)L=L.substr(0,W),W=L.lastIndexOf("."),I(N,L,G,re);I(N,l,G,re)}}function y(N){var G=String(N),re=!!(Object.prototype.hasOwnProperty.call(i,G)&&a(i[G]));return re}function T(N){for(var G=String(N),re=y(G)||y(l),j=G.lastIndexOf(".");!re&&j!==-1;)G=G.substr(0,j),j=G.lastIndexOf("."),re=y(G);return re}function z(N,G,re,j){N=typeof N=="symbol"?N.toString():N;var L=S(N,G,j),W=T(N);return W?(re===!0?L():setTimeout(L,0),!0):!1}n.publish=function(N,G){return z(N,G,!1,n.immediateExceptions)},n.publishSync=function(N,G){return z(N,G,!0,n.immediateExceptions)},n.subscribe=function(N,G){if(typeof G!="function")return!1;N=typeof N=="symbol"?N.toString():N,Object.prototype.hasOwnProperty.call(i,N)||(i[N]={});var re="uid_"+String(++s);return i[N][re]=G,re},n.subscribeAll=function(N){return n.subscribe(l,N)},n.subscribeOnce=function(N,G){var re=n.subscribe(N,function(){n.unsubscribe(re),G.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){i={}},n.clearSubscriptions=function(G){var re;for(re in i)Object.prototype.hasOwnProperty.call(i,re)&&re.indexOf(G)===0&&delete i[re]},n.countSubscriptions=function(G){var re,j,L=0;for(re in i)if(Object.prototype.hasOwnProperty.call(i,re)&&re.indexOf(G)===0){for(j in i[re])L++;break}return L},n.getSubscriptions=function(G){var re,j=[];for(re in i)Object.prototype.hasOwnProperty.call(i,re)&&re.indexOf(G)===0&&j.push(re);return j},n.unsubscribe=function(N){var G=function(U){var se;for(se in i)if(Object.prototype.hasOwnProperty.call(i,se)&&se.indexOf(U)===0)return!0;return!1},re=typeof N=="string"&&(Object.prototype.hasOwnProperty.call(i,N)||G(N)),j=!re&&typeof N=="string",L=typeof N=="function",W=!1,D,b,F;if(re){n.clearSubscriptions(N);return}for(D in i)if(Object.prototype.hasOwnProperty.call(i,D)){if(b=i[D],j&&b[N]){delete b[N],W=N;break}if(L)for(F in b)Object.prototype.hasOwnProperty.call(b,F)&&b[F]===N&&(delete b[F],W=!0)}return W}})}(yr,yr.exports)),yr.exports}var yo=vo();const Vs=$i(yo),sn=(t,e)=>{Vs.subscribe(t,(n,i)=>e(i))},It=(t,e)=>{Vs.publish(t,e)},qi=t=>function(e,n,i){const s=i.value;return s.topic=t,i};Mt.put("subscribe",sn);Mt.put("publish",It);function zi(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function bo(t,e){const n=indexedDB.open(t);n.onupgradeneeded=()=>n.result.createObjectStore(e);const i=zi(n);return(s,l)=>i.then(a=>l(a.transaction(e,s).objectStore(e)))}let vi;function Hs(){return vi||(vi=bo("keyval-store","keyval")),vi}function wo(t,e=Hs()){return e("readonly",n=>zi(n.get(t)))}function Io(t,e,n=Hs()){return n("readwrite",i=>(i.put(e,t),zi(i.transaction)))}class xo{async persistObject(e,n){return Io(e,n)}async getObject(e){return wo(e)}}const bn=new xo;Mt.put("persistenceService",bn);let ko=".geospace";const pn="events/filesys/workspaceChanged",kr="events/filesys/workspaceConnected";class Jr{constructor(){this.state={}}getWorkspacePath(){const e=[];let n=this;for(;n;)e.push(n.getName()),n=n.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const n=e.getParent();if(n)e=n;else break}return e}}var Ks=(t=>(t[t.TEXT=0]="TEXT",t[t.BINARY=1]="BINARY",t))(Ks||{});class Xn extends Jr{}class _i extends Jr{}class Ys extends Xn{constructor(e,n){super(),this.contents=e,this.name=n}async getContents(e){return this.contents}async saveContents(e,n){this.contents=e}async copyTo(e){throw Error("Not supported")}delete(e,n){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class ms extends Xn{constructor(e,n){super(),this.fileHandle=e,this.parent=n}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const n=await this.fileHandle.getFile();return!e||(e==null?void 0:e.contentType)==0?await n.text():(e==null?void 0:e.encoding)==0||e!=null&&e.uri?URL.createObjectURL(n):e!=null&&e.blob?n:n.stream()}async saveContents(e,n){const i=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(i);else{const s=i.getWriter();try{await s.write(e)}finally{await s.close()}}}async copyTo(e){const n=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(n)}async rename(e){var i,s;const n=this.getParent();if(!n)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(l){throw l.name==="NotAllowedError"||(i=l.message)!=null&&i.includes("not allowed")||(s=l.message)!=null&&s.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):l}await n.listChildren(!0),It(pn,this.getWorkspace())}}}class $n extends _i{constructor(e,n){super(),this.dirHandle=e,this.parent=n}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){if(e||!this.files){this.files={};for await(const n of this.dirHandle.values()){const s=n.kind==="file"?new ms(n,this):new $n(n,this);this.files[s.getName()]=s}}return Object.values(this.files)}async getResource(e,n){if(!e)throw new Error("No path provided");const i=e.split("/");let s=this,l=!1;try{for(let a=0;a<i.length;a++){let h=i[a];if(h&&(h=h.trim()),!h)break;if(s instanceof $n){if(s.files||await s.listChildren(),!s.files)return null;const w=s.files[h];if(!w&&(n!=null&&n.create))if(l=!0,a<i.length-1){const v=await s.dirHandle.getDirectoryHandle(h,{create:!0}),I=new $n(v);s.files[h]=I,s=I}else{const v=await s.dirHandle.getFileHandle(h,{create:!0}),I=new ms(v,s);return s.files[h]=I,I}else s=w}}}finally{l&&It(pn,this.getWorkspace())}return s}touch(){It(pn,this.getWorkspace())}async delete(e,n=!0){var i;return e?this.dirHandle.removeEntry(e,{recursive:n}).then(()=>{It(pn,this.getWorkspace())}):(i=this.getParent())==null?void 0:i.delete(this.getName())}async copyTo(e){for(const n of await this.listChildren()){const i=[e,n.getName()].join("/");await n.copyTo(i)}}async rename(e){var i,s;const n=this.getParent();if(!n)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(l){throw l.name==="NotAllowedError"||(i=l.message)!=null&&i.includes("not allowed")||(s=l.message)!=null&&s.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):l}await n.listChildren(!0),It(pn,this.getWorkspace())}}}class So{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&It(kr,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await bn.getObject("workspace_data");if(!e)return;const n=this.contributions.get(e.type);if(!n){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(n.restore){const i=await n.restore(e.data);return i&&(this.currentType=e.type),i}}catch(i){console.error(`Failed to restore workspace of type ${e.type}:`,i)}}async connectWorkspace(e){const n=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!n)throw new Error("No workspace contribution can handle this input");const i=await n.connect(e),s=n.persist?await n.persist(i):e,l={type:n.type,data:s};return await bn.persistObject("workspace_data",l),this.currentType=n.type,this.workspace=Promise.resolve(i),It(kr,i),i}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await bn.persistObject("workspace_data",null),await bn.persistObject("workspace",null)}}const Dt=new So;Mt.put("workspaceService",Dt);Dt.registerContribution({type:"filesystem",name:"Local File System",canHandle(t){return t&&"kind"in t&&t.kind==="directory"},async connect(t){return new $n(t)},async restore(t){if(t&&"kind"in t&&t.kind==="directory")return new $n(t,void 0)},async persist(t){return t instanceof $n?t.getHandle():null}});const Mr=`${ko}/settings.json`,ji="events/settings/changed";class Ao{async checkSettings(){this.appSettings||(this.appSettings=await bn.getObject(Mr),this.appSettings||(this.appSettings={},await bn.persistObject(Mr,this.appSettings)),It(ji,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,n){await this.checkSettings(),this.appSettings[e]=n,await bn.persistObject(Mr,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await bn.persistObject(Mr,this.appSettings)}}const Ht=new Ao;Mt.put("appSettings",Ht);var Br={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var _o=Br.exports,gs;function Eo(){return gs||(gs=1,function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(_o,function(e){var n=function(a){return new n.lib.init(a)},i="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:i,constructor:n,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||n.defaults.text,this.options.node=a.node||n.defaults.node,this.options.duration=a.duration===0?0:a.duration||n.defaults.duration,this.options.selector=a.selector||n.defaults.selector,this.options.callback=a.callback||n.defaults.callback,this.options.destination=a.destination||n.defaults.destination,this.options.newWindow=a.newWindow||n.defaults.newWindow,this.options.close=a.close||n.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=a.positionLeft||n.defaults.positionLeft,this.options.position=a.position||n.defaults.position,this.options.backgroundColor=a.backgroundColor||n.defaults.backgroundColor,this.options.avatar=a.avatar||n.defaults.avatar,this.options.className=a.className||n.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?n.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||n.defaults.onClick,this.options.offset=a.offset||n.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||n.defaults.ariaLive,this.options.style=a.style||n.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var h in this.options.style)a.style[h]=this.options.style[h];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var w=document.createElement("img");w.src=this.options.avatar,w.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(w):a.insertAdjacentElement("afterbegin",w)}if(this.options.close===!0){var v=document.createElement("button");v.type="button",v.setAttribute("aria-label","Close"),v.className="toast-close",v.innerHTML="&#10006;",v.addEventListener("click",(function(G){G.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var I=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&I>360?a.insertAdjacentElement("afterbegin",v):a.appendChild(v)}if(this.options.stopOnFocus&&this.options.duration>0){var S=this;a.addEventListener("mouseover",function(G){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){S.removeElement(a)},S.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(G){G.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(G){G.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var y=s("x",this.options),T=s("y",this.options),z=this.options.position=="left"?y:"-"+y,N=this.options.gravity=="toastify-top"?T:"-"+T;a.style.transform="translate("+z+","+N+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var h=n.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,h),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),n.reposition()}).bind(this),400)}},n.reposition=function(){for(var a={top:15,bottom:15},h={top:15,bottom:15},w={top:15,bottom:15},v=document.getElementsByClassName("toastify"),I,S=0;S<v.length;S++){l(v[S],"toastify-top")===!0?I="toastify-top":I="toastify-bottom";var y=v[S].offsetHeight;I=I.substr(9,I.length-1);var T=15,z=window.innerWidth>0?window.innerWidth:screen.width;z<=360?(v[S].style[I]=w[I]+"px",w[I]+=y+T):l(v[S],"toastify-left")===!0?(v[S].style[I]=a[I]+"px",a[I]+=y+T):(v[S].style[I]=h[I]+"px",h[I]+=y+T)}return this};function s(a,h){return h.offset[a]?isNaN(h.offset[a])?h.offset[a]:h.offset[a]+"px":"0px"}function l(a,h){return!a||typeof h!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(h)>-1)}return n.lib.init.prototype=n.lib,n})}(Br)),Br.exports}var Co=Eo();const Ui=$i(Co),zt=t=>{console.info("[TOAST] INFO: ",t),Ui({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},Xe=t=>{console.error("[TOAST] ERROR: ",t),Ui({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},Oo=t=>{console.warn("[TOAST] WARNING: ",t),Ui({text:t,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};In.put("toastInfo",zt);In.put("toastError",Xe);In.put("toastWarning",Oo);var To=Object.defineProperty,Po=(t,e,n)=>e in t?To(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,yi=(t,e,n)=>(Po(t,typeof e!="symbol"?e+"":e,n),n),Ro=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},bi=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},Fr=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},vs=(t,e,n)=>(Ro(t,e,"access private method"),n);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Js(t,e){return Object.is(t,e)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let ht=null,wr=!1,Wr=1;const Zr=Symbol("SIGNAL");function Qn(t){const e=ht;return ht=t,e}function Lo(){return ht}function Do(){return wr}const Bi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ai(t){if(wr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(ht===null)return;ht.consumerOnSignalRead(t);const e=ht.nextProducerIndex++;if(er(ht),e<ht.producerNode.length&&ht.producerNode[e]!==t&&Ei(ht)){const n=ht.producerNode[e];oi(n,ht.producerIndexOfThis[e])}ht.producerNode[e]!==t&&(ht.producerNode[e]=t,ht.producerIndexOfThis[e]=Ei(ht)?Xs(t,ht,e):0),ht.producerLastReadVersion[e]=t.version}function No(){Wr++}function Zs(t){if(!(!t.dirty&&t.lastCleanEpoch===Wr)){if(!t.producerMustRecompute(t)&&!zo(t)){t.dirty=!1,t.lastCleanEpoch=Wr;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Wr}}function Qs(t){if(t.liveConsumerNode===void 0)return;const e=wr;wr=!0;try{for(const n of t.liveConsumerNode)n.dirty||Mo(n)}finally{wr=e}}function $o(){return(ht==null?void 0:ht.consumerAllowSignalWrites)!==!1}function Mo(t){var e;t.dirty=!0,Qs(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function Fo(t){return t&&(t.nextProducerIndex=0),Qn(t)}function qo(t,e){if(Qn(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Ei(t))for(let n=t.nextProducerIndex;n<t.producerNode.length;n++)oi(t.producerNode[n],t.producerIndexOfThis[n]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function zo(t){er(t);for(let e=0;e<t.producerNode.length;e++){const n=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==n.version||(Zs(n),i!==n.version))return!0}return!1}function Xs(t,e,n){var i;if(Wi(t),er(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)t.producerIndexOfThis[s]=Xs(t.producerNode[s],t,s)}return t.liveConsumerIndexOfThis.push(n),t.liveConsumerNode.push(e)-1}function oi(t,e){var n;if(Wi(t),er(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(n=t.unwatched)==null||n.call(t.wrapper);for(let s=0;s<t.producerNode.length;s++)oi(t.producerNode[s],t.producerIndexOfThis[s])}const i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){const s=t.liveConsumerIndexOfThis[e],l=t.liveConsumerNode[e];er(l),l.producerIndexOfThis[s]=e}}function Ei(t){var e;return t.consumerIsAlwaysLive||(((e=t==null?void 0:t.liveConsumerNode)==null?void 0:e.length)??0)>0}function er(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function Wi(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ea(t){if(Zs(t),ai(t),t.value===Ci)throw t.error;return t.value}function jo(t){const e=Object.create(Uo);e.computation=t;const n=()=>ea(e);return n[Zr]=e,n}const wi=Symbol("UNSET"),Ii=Symbol("COMPUTING"),Ci=Symbol("ERRORED"),Uo={...Bi,value:wi,dirty:!0,error:null,equal:Js,producerMustRecompute(t){return t.value===wi||t.value===Ii},producerRecomputeValue(t){if(t.value===Ii)throw new Error("Detected cycle in computations.");const e=t.value;t.value=Ii;const n=Fo(t);let i,s=!1;try{i=t.computation.call(t.wrapper),s=e!==wi&&e!==Ci&&t.equal.call(t.wrapper,e,i)}catch(l){i=Ci,t.error=l}finally{qo(t,n)}if(s){t.value=e;return}t.value=i,t.version++}};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Bo(){throw new Error}let Wo=Bo;function Go(){Wo()}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Vo(t){const e=Object.create(Yo);e.value=t;const n=()=>(ai(e),e.value);return n[Zr]=e,n}function Ho(){return ai(this),this.value}function Ko(t,e){$o()||Go(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,Jo(t))}const Yo={...Bi,equal:Js,value:void 0};function Jo(t){t.version++,No(),Qs(t)}/**
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
 */const _t=Symbol("node");var dn;(t=>{var e,n,i,s;class l{constructor(w,v={}){Fr(this,n),yi(this,e);const S=Vo(w)[Zr];if(this[_t]=S,S.wrapper=this,v){const y=v.equals;y&&(S.equal=y),S.watched=v[t.subtle.watched],S.unwatched=v[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Ho.call(this[_t])}set(w){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Do())throw new Error("Writes to signals not permitted during Watcher callback");const v=this[_t];Ko(v,w)}}e=_t,n=new WeakSet,t.isState=h=>typeof h=="object"&&bi(n,h),t.State=l;class a{constructor(w,v){Fr(this,s),yi(this,i);const S=jo(w)[Zr];if(S.consumerAllowSignalWrites=!0,this[_t]=S,S.wrapper=this,v){const y=v.equals;y&&(S.equal=y),S.watched=v[t.subtle.watched],S.unwatched=v[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return ea(this[_t])}}i=_t,s=new WeakSet,t.isComputed=h=>typeof h=="object"&&bi(s,h),t.Computed=a,(h=>{var w,v,I,S;function y(L){let W,D=null;try{D=Qn(null),W=L()}finally{Qn(D)}return W}h.untrack=y;function T(L){var W;if(!(0,t.isComputed)(L)&&!(0,t.isWatcher)(L))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((W=L[_t].producerNode)==null?void 0:W.map(D=>D.wrapper))??[]}h.introspectSources=T;function z(L){var W;if(!(0,t.isComputed)(L)&&!(0,t.isState)(L))throw new TypeError("Called introspectSinks without a Signal argument");return((W=L[_t].liveConsumerNode)==null?void 0:W.map(D=>D.wrapper))??[]}h.introspectSinks=z;function N(L){if(!(0,t.isComputed)(L)&&!(0,t.isState)(L))throw new TypeError("Called hasSinks without a Signal argument");const W=L[_t].liveConsumerNode;return W?W.length>0:!1}h.hasSinks=N;function G(L){if(!(0,t.isComputed)(L)&&!(0,t.isWatcher)(L))throw new TypeError("Called hasSources without a Computed or Watcher argument");const W=L[_t].producerNode;return W?W.length>0:!1}h.hasSources=G;class re{constructor(W){Fr(this,v),Fr(this,I),yi(this,w);let D=Object.create(Bi);D.wrapper=this,D.consumerMarkedDirty=W,D.consumerIsAlwaysLive=!0,D.consumerAllowSignalWrites=!1,D.producerNode=[],this[_t]=D}watch(...W){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");vs(this,I,S).call(this,W);const D=this[_t];D.dirty=!1;const b=Qn(D);for(const F of W)ai(F[_t]);Qn(b)}unwatch(...W){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");vs(this,I,S).call(this,W);const D=this[_t];er(D);for(let b=D.producerNode.length-1;b>=0;b--)if(W.includes(D.producerNode[b].wrapper)){oi(D.producerNode[b],D.producerIndexOfThis[b]);const F=D.producerNode.length-1;if(D.producerNode[b]=D.producerNode[F],D.producerIndexOfThis[b]=D.producerIndexOfThis[F],D.producerNode.length--,D.producerIndexOfThis.length--,D.nextProducerIndex--,b<D.producerNode.length){const U=D.producerIndexOfThis[b],se=D.producerNode[b];Wi(se),se.liveConsumerIndexOfThis[U]=b}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[_t].producerNode.filter(D=>D.dirty).map(D=>D.wrapper)}}w=_t,v=new WeakSet,I=new WeakSet,S=function(L){for(const W of L)if(!(0,t.isComputed)(W)&&!(0,t.isState)(W))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=L=>bi(v,L),h.Watcher=re;function j(){var L;return(L=Lo())==null?void 0:L.wrapper}h.currentComputed=j,h.watched=Symbol("watched"),h.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(dn||(dn={}));/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=Symbol("SignalWatcherBrand"),Qo=new FinalizationRegistry(({watcher:t,signal:e})=>{t.unwatch(e)}),ys=new WeakMap;function li(t){return t[Zo]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new dn.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new dn.Computed(()=>{this._$St.get(),super.performUpdate()});const e=this._$Su=new dn.subtle.Watcher(function(){const n=ys.get(this);n!==void 0&&(n._$Si===!1&&n.requestUpdate(),this.watch())});ys.set(e,this),Qo.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(n=>n.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,n,i){this._$So=!0,super.requestUpdate(e,n,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(e){this._$Sh.add(e);const n=this._$So;this.requestUpdate(),this._$So=n}m(e){this._$Sh.delete(e)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */dn.State;dn.Computed;const Bn=(t,e)=>new dn.State(t,e),Xo={},Me=Bn(null),Gr=Bn(null),Oi=Bn(null),ta=Bn(0),jt=Bn(void 0);Bn({name:"",timestamp:0});class el{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,ta.set(this.updateCounter)}run(e,n){const i=this.createProgressMonitor(e);try{this.tasks.push(i),this.notifyUpdate(),n(i)}finally{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()}}async runAsync(e,n){const i=this.createProgressMonitor(e);return this.tasks.push(i),this.notifyUpdate(),n(i).finally(()=>{this.tasks.splice(this.tasks.indexOf(i),1),this.notifyUpdate()})}createProgressMonitor(e){const n={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(n,{set:(i,s,l)=>(i[s]=l,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const tr=new el;Mt.put("taskService",tr);const Vr="events/extensionsregistry/extensionsConfigChanged",hr="extensions";class tl{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,sn(ji,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.checkExtensionsConfig().then(async()=>{var n;const e=((n=this.extensionsSettings)==null?void 0:n.filter(i=>this.isEnabled(i.id)).map(i=>this.load(i.id).catch(s=>{Xe("Extension could not be loaded: "+s.message)})))||[];await Promise.all(e)})}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await Ht.get(hr),this.extensionsSettings||(await Ht.set(hr,[]),this.extensionsSettings=await Ht.get(hr)),It(Vr,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e}getExtensions(){return Object.values(this.extensions)}isEnabled(e){var n;return this.checkExtensionsConfig(),!!((n=this.extensionsSettings)!=null&&n.find(i=>i.id===e&&i.enabled))}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,n=!1){this.isEnabled(e)||(ut.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,n)}).catch(i=>{ut.error(`Could not load extension: ${e}`)}))}async load(e,n=[]){if(this.loadedExtensions.has(e))return;const i=this.loadingPromises.get(e);if(i)return i;if(n.includes(e)){const a=[...n,e].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const s=this.extensions[e];if(!s)throw new Error("Extension not found: "+e);const l=(async()=>{try{if(s.dependencies&&s.dependencies.length>0){ut.debug(`Loading dependencies for ${e}: ${s.dependencies.join(", ")}`);const h=[...n,e];for(const w of s.dependencies)await this.load(w,h),this.isEnabled(w)||(await this.updateEnablementAsync(w,!0,!1),ut.debug(`Auto-enabled dependency: ${w}`))}const a=await tr.runAsync("Loading extension: "+s.name,()=>{if(s.loader)return s.loader();if(s.url)return import(s.url)});this.loadedExtensions.add(e),(a==null?void 0:a.default)instanceof Function&&(a==null||a.default(In.getProxy())),ut.debug(`Extension loaded: ${e}`)}catch(a){throw this.loadedExtensions.delete(e),a}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,l),l}disable(e,n=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,n)}updateEnablement(e,n,i){this.checkExtensionsConfig().then(()=>{var l,a;const s=(l=this.extensionsSettings)==null?void 0:l.find(h=>h.id==e);s?s.enabled=n:(a=this.extensionsSettings)==null||a.push({id:e,enabled:n}),Ht.set(hr,this.extensionsSettings).then(()=>{if(i){const h=this.extensions[e];zt(n?h.name+" enabled.":h.name+" disabled  - Please restart to take effect")}It(Vr,this.extensionsSettings)})})}async updateEnablementAsync(e,n,i){var l,a;await this.checkExtensionsConfig();const s=(l=this.extensionsSettings)==null?void 0:l.find(h=>h.id==e);if(s?s.enabled=n:(a=this.extensionsSettings)==null||a.push({id:e,enabled:n}),await Ht.set(hr,this.extensionsSettings),i){const h=this.extensions[e];zt(n?h.name+" enabled.":h.name+" disabled  - Please restart to take effect")}It(Vr,this.extensionsSettings)}}ut.debug("ExtensionRegistry initializing...");const Ze=new tl;Mt.put("extensionRegistry",Ze);ut.debug("ExtensionRegistry initialized");const Ar="events/contributionregistry/contributionsChanged";class nl{constructor(){this.contributions=new Map}registerContribution(e,n){const i=this.getContributions(e);if(n.disabled instanceof Function){const s=n.disabled;n.disabled=new dn.Computed(s)}i.push(n),It(Ar,{target:e,contributions:i})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const pt=new nl;Mt.put("contributionRegistry",pt);const Gt=Fi("AppLoader");class rl{constructor(){this.apps=new Map}registerApp(e){this.apps.has(e.id)&&Gt.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Gt.info(`Registered app: ${e.name} (${e.id}) v${e.version}`)}async loadApp(e,n){let i;if(typeof e=="string"){const s=this.apps.get(e);if(!s)throw new Error(`App '${e}' not found. Make sure it's registered.`);i=s}else i=e,this.registerApp(i);Gt.info(`Loading app: ${i.name}...`),this.currentApp&&(Gt.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Gt.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(s=>{Ze.disable(s)}))),i.extensions&&(Gt.info(`Enabling ${i.extensions.length} extensions...`),i.extensions.forEach(s=>{Ze.enable(s)})),i.contributions&&(Gt.info("Registering app contributions..."),i.contributions.ui&&(i.contributions.ui.forEach(s=>{const l=s.target;l&&pt.registerContribution(l,s)}),Gt.info(`Registered ${i.contributions.ui.length} UI contributions`)),i.contributions.extensions&&(i.contributions.extensions.forEach(s=>{Ze.registerExtension(s)}),Gt.info(`Registered ${i.contributions.extensions.length} app extensions`))),i.initialize&&(Gt.info(`Initializing ${i.name}...`),await i.initialize()),this.currentApp=i,Gt.info(`App ${i.name} loaded successfully`),n&&this.renderApp(n)}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");Kr(this.currentApp.render(),e),Gt.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}}const na=new rl;Mt.put("appLoaderService",na);const bs="0.12.20";class il{constructor(e,n,i,s,l){this.id=e,this.name=n,this.description=i,this.parameters=s||[],this.output=l||[]}}class ra{async execute(e,n){return Oe.execute(e,n)}async undo(){}async redo(){}}class sl{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,n){this.handlers.has(e)||this.handlers.set(e,[]),this.handlers.get(e).push(n)}getHandler(e){return this.handlers.get(e)}createExecutionContext(e,n){return{source:e,params:n||{},activePart:Me.get(),activeEditor:Gr.get()}}execute(e,n={}){const i=this.getHandler(e);if(!i)throw new Error(`No handlers registered for command: ${e}`);for(const s of i)if(s.canExecute===void 0||s.canExecute(n))return s.execute(n);ut.error(`No handler found to execute command: ${e}`)}createAndRegisterCommand(e,n,i,s,l){const a=new il(e,n,i,s);this.registerCommand(a),l&&this.registerHandler(e,l)}registerCommand(e){this.commands[e.id]=e,ut.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(n=>(Oe.getHandler(n.id)||[]).some(s=>s.canExecute===void 0||s.canExecute(e))).reduce((n,i)=>(n[i.id]=i,n),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const n=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(n,e.handler),e.contribution&&e.contribution.target&&pt.registerContribution(e.contribution.target,{command:n,...e.contribution})}}const Oe=new sl;Mt.put("commandRegistry",Oe);const dt=t=>{Oe.registerAll(t)};class al{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Oe.listCommands();Object.values(e).forEach(n=>{n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)})}watchCommandRegistry(){const e=Oe.registerCommand.bind(Oe);Oe.registerCommand=n=>{e(n),n.keyBinding&&this.registerKeyBinding(n.id,n.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const n=e.toUpperCase().split("+").map(a=>a.trim());if(n.length===0)return null;const i={ctrl:!1,alt:!1,shift:!1,meta:!1},s=n[n.length-1],l=n.slice(0,-1);for(const a of l)switch(a){case"CTRL":case"CONTROL":i.ctrl=!0;break;case"ALT":case"OPTION":i.alt=!0;break;case"SHIFT":i.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":i.meta=!0;break;default:ut.warn(`Unknown modifier: ${a}`)}return i.key=this.normalizeKey(s),i}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const n=[];return e.ctrl&&n.push("ctrl"),e.alt&&n.push("alt"),e.shift&&n.push("shift"),e.meta&&n.push("meta"),n.sort(),`${n.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,n){const i=this.parseKeyBinding(n);if(!i)return ut.error(`Invalid key binding: ${n}`),!1;i.commandId=e;const s=this.getBindingKey(i);this.bindings.has(s)||this.bindings.set(s,[]);const l=this.bindings.get(s);return l.find(h=>h.commandId===e)?(ut.error(`Key binding ${n} already registered for command ${e}`),!1):(l.push(i),ut.debug(`Key binding registered: ${n} -> ${e}`),!0)}unregisterKeyBinding(e,n){if(n){const i=this.parseKeyBinding(n);if(i){const s=this.getBindingKey(i),l=this.bindings.get(s);if(l){const a=l.filter(h=>h.commandId!==e);a.length===0?this.bindings.delete(s):this.bindings.set(s,a)}}}else for(const[i,s]of this.bindings.entries()){const l=s.filter(a=>a.commandId!==e);l.length===0?this.bindings.delete(i):this.bindings.set(i,l)}}getKeyBindingsForCommand(e){const n=[];for(const i of this.bindings.values())for(const s of i)s.commandId===e&&n.push(this.formatKeyBinding(s));return n}formatKeyBinding(e){const n=[];e.ctrl&&n.push("Ctrl"),e.alt&&n.push("Alt"),e.shift&&n.push("Shift"),e.meta&&n.push("Cmd");let i=e.key;return i.length===1?i=i.toUpperCase():i=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase(),n.push(i),n.join("+")}handleKeyDown(e){if(!this.enabled)return;const n=e.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)){const a=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&a==="P"))return}const i={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},s=this.getBindingKey(i),l=this.bindings.get(s);if(l&&l.length>0){const a=l[0];try{e.preventDefault(),e.stopPropagation();const h=Oe.createExecutionContext(this,{});Oe.execute(a.commandId,h),ut.info(`Executed command via key binding: ${a.commandId}`)}catch(h){ut.error(`Failed to execute command ${a.commandId}: ${h.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}ut.debug("KeyBindingManager initializing...");const ia=new al;ut.debug("KeyBindingManager initialized");Mt.put("keyBindingManager",ia);let fr=null;function sa(){return fr||(fr=document.createElement("div"),fr.id="global-dialog-container",document.body.appendChild(fr)),fr}function aa(t){return new Promise(e=>{const n=sa(),i=()=>{Kr(Z``,n)},s=()=>{i(),e(t.confirmValue)},l=()=>{i(),e(t.cancelValue)},a=Z`
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
                    
                    .dialog-actions {
                        display: flex;
                        gap: 0.5rem;
                        justify-content: flex-end;
                        margin-top: 0.5rem;
                    }
                </style>
                
                <div class="dialog-content">
                    ${t.renderContent({onConfirm:s,onCancel:l})}
                </div>
            </wa-dialog>
        `;Kr(a,n),t.onAfterRender&&requestAnimationFrame(t.onAfterRender)})}const _r=async(t,e="")=>{let n=e;return aa({title:"Input",message:t,confirmValue:n,cancelValue:null,renderContent:({onConfirm:i,onCancel:s})=>Z`
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
            `,onAfterRender:()=>{var l;const s=sa().querySelector("wa-input");if(s){const a=(l=s.shadowRoot)==null?void 0:l.querySelector("input");a&&(a.focus(),a.select())}}}).then(()=>n)},ar=async t=>aa({title:"Confirm",message:t,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:e,onCancel:n})=>Z`
            <div class="dialog-message">${t}</div>
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${n}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${e}>
                    OK
                </wa-button>
            </div>
        `});In.put("promptDialog",_r);In.put("confirmDialog",ar);const oa=(t,e)=>{const n=new dn.subtle.Watcher(async()=>{try{await 0,e(t.get())}finally{n.watch()}});n.watch(t)},ci=t=>function(e,n,i){const s=i.value;return s.signal=t,i};Object.defineProperty(zs.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Er extends zs{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(n=>{const i=e[n];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"topic"in s&&this.subscribe(s.topic,s)}}),Object.getOwnPropertyNames(e).forEach(n=>{const i=e[n];if(i instanceof Function){const s=i;s.name.startsWith("on")&&"signal"in s&&this.watch(s.signal,s)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,n){sn(e,n.bind(this))}showInfo(e){zt(e)}showError(e){Xe(e)}nobubble(e){return n=>{n.stopPropagation(),e.bind(this)(n)}}command(e,n={}){return()=>{this.executeCommand(e,n)}}executeCommand(e,n){const i=Oe.createExecutionContext(this,n);Oe.execute(e,i)}watch(e,n){oa(e,n.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}class Wn extends Er{}var ol=Object.getOwnPropertyDescriptor,ll=(t,e,n,i)=>{for(var s=i>1?void 0:i?ol(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=a(s)||s);return s};let Ti=class extends Wn{render(){return Z`
            <slot></slot>
        `}};Ti.styles=Lt`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Ti=ll([mt("k-app")],Ti);var cl=Object.defineProperty,ul=Object.getOwnPropertyDescriptor,Cr=(t,e,n,i)=>{for(var s=i>1?void 0:i?ul(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&cl(e,n,s),s};let qn=class extends li(Wn){constructor(){super(...arguments),this.position="start",this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),sn(Ar,e=>{if(!t)return;const n=t.includes(":")?t.split(":")[0]+":*":null;(e.target===t||e.target===n)&&(this.loadContributions(t),this.requestUpdate())})}loadContributions(t){const e=pt.getContributions(t);if(t.includes(":")){const n=t.split(":")[0]+":*",i=pt.getContributions(n);this.contributions=[...i,...e]}else this.contributions=e}contributionCreator(t){var e;if("command"in t){const n=t;return Z`
                <wa-button @click=${()=>this.executeCommand(n.command,n.params||{})}
                           title=${n.label}
                           ?disabled="${(e=n.disabled)==null?void 0:e.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${n.icon} label="${n.label}"></wa-icon>
                </wa-button>
            `}else if("html"in t){const n=t.html;return n instanceof Function?n():si(n)}else return Z`<span>unknown contribution type: ${typeof t}</span>`}render(){const t=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return Z`
            <div class="toolbar-items" style=${Ya({"justify-content":this.position})}>
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
        `}};qn.styles=Lt`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;Cr([Ue()],qn.prototype,"position",2);Cr([Ue({attribute:!1})],qn.prototype,"partToolbarContent",2);Cr([Ue({attribute:!1})],qn.prototype,"partToolbarRenderer",2);Cr([gt()],qn.prototype,"contributions",2);qn=Cr([mt("k-toolbar")],qn);var pl=Object.defineProperty,dl=Object.getOwnPropertyDescriptor,Or=(t,e,n,i)=>{for(var s=i>1?void 0:i?dl(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&pl(e,n,s),s};let zn=class extends li(Wn){constructor(){super(...arguments),this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Mn(),this.dropdownRef=Mn()}doBeforeUI(){const t=this.getAttribute("id");t&&this.loadContributions(t),sn(Ar,e=>{if(!t)return;const n=t.includes(":")?t.split(":")[0]+":*":null;(e.target===t||e.target===n)&&(this.loadContributions(t),this.requestUpdate())})}loadContributions(t){const e=pt.getContributions(t);if(t.includes(":")){const n=t.split(":")[0]+":*",i=pt.getContributions(n);this.contributions=[...i,...e]}else this.contributions=e}show(t){this.position=t,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(t,e){return async()=>{this.executeCommand(t,e||{})}}renderContribution(t){var e;if("command"in t){const n=t;return Z`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(n.command,n.params)}
                    ?disabled="${(e=n.disabled)==null?void 0:e.get()}">
                    ${n.icon?Z`<wa-icon slot="icon" name=${n.icon}></wa-icon>`:""}
                    ${n.label}
                </wa-dropdown-item>
            `}else if("html"in t){const n=t.html;return n instanceof Function?n():si(n)}return Rt}render(){if(!this.isOpen)return Rt;const t=this.partContextMenuRenderer?this.partContextMenuRenderer():Rt;return Z`
            <wa-dropdown 
                ${Fn(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${Fn(this.anchorRef)}
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
        `}};zn.styles=Lt`
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
    `;Or([Ue({attribute:!1})],zn.prototype,"partContextMenuRenderer",2);Or([gt()],zn.prototype,"contributions",2);Or([gt()],zn.prototype,"isOpen",2);Or([gt()],zn.prototype,"position",2);zn=Or([mt("k-contextmenu")],zn);class Gi extends Wn{}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=(t,e,n)=>{const i=new Map;for(let s=e;s<=n;s++)i.set(t[s],s);return i},hl=js(class extends Us{constructor(t){if(super(t),t.type!==Ja.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let i;n===void 0?n=e:e!==void 0&&(i=e);const s=[],l=[];let a=0;for(const h of t)s[a]=i?i(h,a):a,l[a]=n(h,a),a++;return{values:l,keys:s}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,i]){const s=Za(t),{values:l,keys:a}=this.dt(e,n,i);if(!Array.isArray(s))return this.ut=a,l;const h=this.ut??(this.ut=[]),w=[];let v,I,S=0,y=s.length-1,T=0,z=l.length-1;for(;S<=y&&T<=z;)if(s[S]===null)S++;else if(s[y]===null)y--;else if(h[S]===a[T])w[T]=Ln(s[S],l[T]),S++,T++;else if(h[y]===a[z])w[z]=Ln(s[y],l[z]),y--,z--;else if(h[S]===a[z])w[z]=Ln(s[S],l[z]),pr(t,w[z+1],s[S]),S++,z--;else if(h[y]===a[T])w[T]=Ln(s[y],l[T]),pr(t,s[S],s[y]),y--,T++;else if(v===void 0&&(v=ws(a,T,z),I=ws(h,S,y)),v.has(h[S]))if(v.has(h[y])){const N=I.get(a[T]),G=N!==void 0?s[N]:null;if(G===null){const re=pr(t,s[S]);Ln(re,l[T]),w[T]=re}else w[T]=Ln(G,l[T]),pr(t,s[S],G),s[N]=null;T++}else gi(s[y]),y--;else gi(s[S]),S++;for(;T<=z;){const N=pr(t,w[z+1]);Ln(N,l[T]),w[T++]=N}for(;S<=y;){const N=s[S++];N!==null&&gi(N)}return this.ut=a,Bs(t,w),Qa}});var fl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,Tr=(t,e,n,i)=>{for(var s=i>1?void 0:i?ml(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&fl(e,n,s),s};let jn=class extends Er{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const t=this.name.trim().split(/ +/),e=t.pop(),n=t.pop();return Z`
            <wa-icon library="${n||Rt}" variant="${this.variant||Rt}"
                         family="${this.family||Rt}" name=${e} label="${this.label||this.name||Rt}"></wa-icon>`}};jn.styles=Lt`
        :host {
            display: contents;
        }
    `;Tr([Ue()],jn.prototype,"name",2);Tr([Ue()],jn.prototype,"family",2);Tr([Ue()],jn.prototype,"variant",2);Tr([Ue()],jn.prototype,"label",2);jn=Tr([mt("k-icon")],jn);var gl=Object.defineProperty,vl=(t,e,n,i)=>{for(var s=void 0,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=a(e,n,s)||s);return s&&gl(e,n,s),s};class Et extends Gi{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return Rt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return Rt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Oi.set(null),Oi.set(this),Me.set(null),Me.set(this)}}vl([Ue()],Et.prototype,"dirty");const Vi="app-toolbars-main",or="app-toolbars-main-right",yl="app-toolbars-main-center",la="app-toolbars-bottom",Hi="app-toolbars-bottom-center",ca="app-toolbars-bottom-end",Qr="editor-area-main",Pi="sidebar-main",ua="sidebar-main-bottom",pa="sidebar-auxiliary",da="panel-bottom";var ha=(t=>(t[t.LEFT=0]="LEFT",t[t.MIDDLE=1]="MIDDLE",t[t.RIGHT=2]="RIGHT",t[t.BACK=3]="BACK",t[t.FORWARD=4]="FORWARD",t))(ha||{}),bl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,fa=(t,e,n,i)=>{for(var s=i>1?void 0:i?wl(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&bl(e,n,s),s};let Xr=class extends Gi{constructor(){super(...arguments),this.contributions=[],this.tabGroup=Mn(),this.containerId=null}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",t=>{const e=this.getTabPanel(t.detail.name);e&&(this.updateToolbarFromComponent(e),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateToolbarFromComponent(n)}),this.tabGroup.value.addEventListener("part-contextmenu-changed",t=>{const n=t.target.closest("wa-tab-panel");n&&this.updateContextMenuFromComponent(n)}),this.tabGroup.value.addEventListener("click",t=>{const e=t.target,n=e.closest("wa-tab");if(n){const a=n.getAttribute("panel");if(a){const h=this.getTabPanel(a);if(h){const w=h.querySelector(".tab-content");if(w&&w.firstElementChild){const v=w.firstElementChild;v instanceof Et&&Me.set(v)}}}return}const i=e.closest("wa-scroller.tab-content");if(!i)return;const s=i.closest("wa-tab-panel");if(!s)return;const l=s.querySelector(".tab-content");if(l&&l.firstElementChild){const a=l.firstElementChild;a instanceof Et&&Me.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",t=>{const e=t,n=e.target.closest("wa-scroller.tab-content");if(!n)return;e.preventDefault();const i=n.closest("wa-tab-panel");if(!i)return;const s=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,button:0});e.target.dispatchEvent(s),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(i);const l=i.querySelector("k-contextmenu");l&&l.show({x:e.clientX,y:e.clientY})})}))}),sn(Ar,t=>{!this.containerId||t.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(t){if(super.updated(t),t.has("contributions")){const e=this.containerId===Qr;this.contributions.forEach(n=>{const i=this.getTabPanel(n.name);if(!i)return;const s=i.querySelector(".tab-content");if(s&&s.firstElementChild){const l=s.firstElementChild;l instanceof Et&&(l.tabContribution=n,l.isEditor=e)}})}}has(t){return!!this.getTabPanel(t)}activate(t){this.tabGroup.value.setAttribute("active",t)}getActiveEditor(){return this.tabGroup.value.getAttribute("active")}open(t){if(this.contributions.find(n=>n.name===t.name)){this.activate(t.name);return}this.contributions.push(t),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(t.name);const n=this.getTabPanel(t.name);if(n){const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const s=i.firstElementChild;s instanceof Et&&(s.tabContribution=t,s.isEditor=this.containerId===Qr)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(n)})}})}handleTabAuxClick(t,e){t.button===ha.MIDDLE&&e.closable&&this.closeTab(t,e.name)}async closeTab(t,e){if(t.stopPropagation(),this.isDirty(e)&&!await ar("Unsaved changes will be lost: Do you really want to close?"))return;const n=this.getTabPanel(e);if(!n)return;const i=this.contributions.find(l=>l.name===e);if(!i)return;this.cleanupTabInstance(n);const s=this.contributions.indexOf(i);s>-1&&this.contributions.splice(s,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:n})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(t,e){this.getTab(t).classList.toggle("part-dirty",e)}isDirty(t){return this.getTab(t).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=pt.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(t){const e=t.querySelector(".tab-content");if(e&&e.firstElementChild){const n=e.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const t=this.tabGroup.value.querySelectorAll("wa-tab");if(t.length>0){const e=t.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(t){return this.tabGroup.value.querySelector(`wa-tab-panel[name='${t}']`)}getTab(t){return this.tabGroup.value.querySelector(`wa-tab[panel='${t}']`)}updateToolbarFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof Et)||!n.renderToolbar)return;const i=t.querySelector("k-toolbar");i&&(i.partToolbarRenderer=()=>n.renderToolbar(),i.requestUpdate())}updateContextMenuFromComponent(t){const e=t.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const n=e.firstElementChild;if(!(n instanceof Et)||!n.renderContextMenu)return;const i=t.querySelector("k-contextmenu");i&&(i.partContextMenuRenderer=()=>n.renderContextMenu(),i.requestUpdate())}render(){return Z`
            <wa-tab-group ${Fn(this.tabGroup)}>
                ${hl(this.contributions,t=>t.name,t=>Z`
                        <wa-tab panel="${t.name}"
                                @auxclick="${e=>this.handleTabAuxClick(e,t)}">
                            <k-icon name="${t.icon}"></k-icon>
                            ${t.label}
                            ${rn(t.closable,()=>Z`
                                <wa-icon name="xmark" label="Close"  @click="${e=>this.closeTab(e,t.name)}"></wa-icon>
                            `)}
                        </wa-tab>
                        <wa-tab-panel name="${t.name}">
                            <k-toolbar id="toolbar:${t.editorId??t.name}" class="tab-toolbar"></k-toolbar>
                            <wa-scroller class="tab-content" orientation="vertical">
                                ${t.component?t.component(t.name):Rt}
                            </wa-scroller>
                            <k-contextmenu id="contextmenu:${t.name}"></k-contextmenu>
                        </wa-tab-panel>
                    `)}
            </wa-tab-group>
        `}};Xr.styles=Lt`
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
    `;fa([gt()],Xr.prototype,"contributions",2);Xr=fa([mt("k-tabs")],Xr);var Il=Object.defineProperty,xl=Object.getOwnPropertyDescriptor,Pr=(t,e,n,i)=>{for(var s=i>1?void 0:i?xl(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Il(e,n,s),s};let nr=class extends Wn{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.handleResize=t=>{if(!this.resizing)return;const n=(this.orientation==="horizontal"?t.clientX:t.clientY)-this.resizing.startPos,i=[...this.resizing.startSizes];i[this.resizing.handleIndex]+=n,i[this.resizing.handleIndex+1]-=n;const s=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,l=s*.05;if(i[this.resizing.handleIndex]>=l&&i[this.resizing.handleIndex+1]>=l){this.resizing.currentSizes=i;const a=i.map((h,w)=>{const I=`${(h/s*100).toFixed(2)}%`;return w===i.length-1?I:`${I} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=()=>{var t;if((t=this.resizing)!=null&&t.currentSizes){const e=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(n=>`${(n/e*100).toFixed(2)}%`),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}loadChildren(){const t=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(t.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=t,this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}updated(t){super.updated(t),t.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,n)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${n*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${n*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(t,e){if(t.preventDefault(),e>=this.gridChildren.length-1)return;const n=this.orientation==="horizontal"?t.clientX:t.clientY,i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,s=this.gridSizes.map(l=>l.endsWith("%")?parseFloat(l)/100*i:(l.endsWith("px"),parseFloat(l)));this.resizing={handleIndex:e,startPos:n,startSizes:s},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return Rt;const t=this.gridSizes.flatMap((e,n)=>n===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=t,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=t),this.style.overflow="hidden",Z`
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
            
            ${this.gridChildren.map((e,n)=>{if(n<this.gridChildren.length-1){const i=this.orientation==="horizontal"?`${n*2+2}`:"1",s=this.orientation==="vertical"?`${n*2+2}`:"1";return Z`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${i};
                                grid-row: ${s};
                            "
                            @mousedown=${l=>this.startResize(l,n)}
                        ></div>
                    `}return Rt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Pr([Ue()],nr.prototype,"orientation",2);Pr([Ue()],nr.prototype,"sizes",2);Pr([gt()],nr.prototype,"gridSizes",2);Pr([gt()],nr.prototype,"gridChildren",2);nr=Pr([mt("k-resizable-grid")],nr);const kl=(t,e)=>!t.leaf&&e.leaf?-1:t.leaf&&!e.leaf?1:t.label.localeCompare(e.label);var Sl=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,ui=(t,e,n,i)=>{for(var s=i>1?void 0:i?Al(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Sl(e,n,s),s};let rr=class extends Et{constructor(){super(...arguments),this.treeRef=Mn()}doBeforeUI(){this.initializeWorkspace()}firstUpdated(t){super.firstUpdated(t),this.setupDragAndDrop()}updated(t){super.updated(t),t.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const t=await Dt.getWorkspace();t?await this.loadWorkspace(t):Oe.execute("help")}renderToolbar(){const t=jt.get()instanceof Jr;return Z`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const t=jt.get()instanceof Jr;return Z`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!t}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!t}>Delete</k-command>
        `}async onWorkspaceChanged(t){jt.set(void 0),await this.loadWorkspace(t),await this.syncTreeSelection()}async onWorkspaceConnected(t){await this.loadWorkspace(t)}async loadWorkspace(t){this.workspaceDir=t,t?this.root=await this.resourceToTreeNode(t):this.root=void 0}async syncTreeSelection(){var n,i;await this.updateComplete;const t=(n=this.treeRef.value)==null?void 0:n.querySelector("wa-tree"),e=(t==null?void 0:t.selectedItems)||[];e.length>0&&jt.set((i=e[0].model)==null?void 0:i.data)}async resourceToTreeNode(t){const e=t instanceof Xn,n={data:t,label:t.getName(),icon:e?"file":"folder-open",leaf:e,children:[]};if(t instanceof _i){for(const i of await t.listChildren(!0)){const s=await this.resourceToTreeNode(i);n.children.push(s)}n.children.sort(kl)}return n}createTreeItems(t,e=!1){return t?Z`
            <wa-tree-item @dblclick=${this.nobubble(this.onFileDoubleClicked)} .model=${t} ?expanded=${e}>
                <span><wa-icon name=${t.icon} label="${t.leaf?"File":"Folder"}"></wa-icon> ${t.label}</span>
                ${t.children.map(n=>this.createTreeItems(n))}
            </wa-tree-item>`:Z``}async onFileDoubleClicked(t){const n=t.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:n})}onSelectionChanged(t){const e=t.detail.selection;if(e&&e.length>0){const n=e[0].model;jt.set(n.data)}else jt.set(void 0)}setupDragAndDrop(){const t=this.treeRef.value;if(!t)return;const e=l=>{var w,v;if(!((w=l.dataTransfer)!=null&&w.types.includes("Files")))return;l.preventDefault(),l.dataTransfer.dropEffect="copy",t.classList.add("drag-over");const h=l.target.closest("wa-tree-item");h&&h!==this.currentDropTarget&&((v=this.currentDropTarget)==null||v.classList.remove("drop-target"),this.currentDropTarget=h,h.classList.add("drop-target"))},n=l=>{var a;(a=l.dataTransfer)!=null&&a.types.includes("Files")&&(l.preventDefault(),t.classList.add("drag-over"))},i=l=>{var v;const a=t.getBoundingClientRect(),h=l.clientX,w=l.clientY;(h<=a.left||h>=a.right||w<=a.top||w>=a.bottom)&&(t.classList.remove("drag-over"),(v=this.currentDropTarget)==null||v.classList.remove("drop-target"),this.currentDropTarget=void 0)},s=async l=>{var w;if(l.preventDefault(),t.classList.remove("drag-over"),(w=this.currentDropTarget)==null||w.classList.remove("drop-target"),this.currentDropTarget=void 0,!l.dataTransfer||!this.workspaceDir)return;const a=Array.from(l.dataTransfer.files);if(a.length===0)return;const h=await this.getDropTarget(l);await this.handleFilesDrop(a,h)};t.removeEventListener("dragover",e),t.removeEventListener("dragenter",n),t.removeEventListener("dragleave",i),t.removeEventListener("drop",s),t.addEventListener("dragover",e),t.addEventListener("dragenter",n),t.addEventListener("dragleave",i),t.addEventListener("drop",s)}async getDropTarget(t){const n=t.target.closest("wa-tree-item");if(n){const s=n.model.data;if(s instanceof _i)return s;const l=s.getParent();if(l)return l}return this.workspaceDir}async handleFilesDrop(t,e){const n=t.length;let i=0,s=0,l=0;for(const a of t)try{const h=this.buildTargetPath(e,a.name);if(await this.workspaceDir.getResource(h)&&!await ar(`File "${a.name}" already exists. Do you want to overwrite it?`)){l++;continue}await(await this.workspaceDir.getResource(h,{create:!0})).saveContents(a),i++}catch(h){console.error(`Failed to upload ${a.name}:`,h),s++}console.log(`Uploaded ${i}/${n} files${l>0?`, ${l} skipped`:""}${s>0?`, ${s} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(t,e){const n=t.getWorkspacePath();return n?`${n}/${e}`:e}render(){return Z`
            <div class="tree" ${Fn(this.treeRef)}>
                ${rn(!this.workspaceDir,()=>Z`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>Z`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};rr.styles=Lt`
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
    `;ui([gt()],rr.prototype,"root",2);ui([qi(pn)],rr.prototype,"onWorkspaceChanged",1);ui([qi(kr)],rr.prototype,"onWorkspaceConnected",1);rr=ui([mt("k-filebrowser")],rr);var _l=Object.getOwnPropertyDescriptor,El=(t,e,n,i)=>{for(var s=i>1?void 0:i?_l(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=a(s)||s);return s};pt.registerContribution(Hi,{html:"<k-tasks></k-tasks>"});let Ri=class extends li(Et){render(){ta.get();const t=tr.getActiveTasks().length;if(t!=0)return Z`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${t}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${t}
                </wa-button>
                ${tr.getActiveTasks().map(e=>{const n=e.progress>=0||e.totalSteps>0,i=e.progress>=0?e.progress:e.totalSteps>0?Math.round(e.currentStep/e.totalSteps*100):0,s=e.progress<0&&e.totalSteps>0;return Z`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${e.name}</strong>: ${e.message}
                            </div>
                            ${n?Z`
                                <wa-progress-bar value="${i}" style="--track-height: 1.25rem;">
                                    ${s?`${e.currentStep}/${e.totalSteps} - `:""}${i}%
                                </wa-progress-bar>
                            `:Z`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};Ri.styles=Lt`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;Ri=El([mt("k-tasks")],Ri);var Cl=Object.getOwnPropertyDescriptor,Ol=(t,e,n,i)=>{for(var s=i>1?void 0:i?Cl(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=a(s)||s);return s};const Is="<no workspace>";let xs=class extends Wn{constructor(){super(...arguments),this.workspaceName=Is}doInitUI(){this.updateWorkspaceName(),sn(kr,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Dt.getWorkspace().then(t=>{this.workspaceName=(t==null?void 0:t.getName())||Is,this.requestUpdate()})}handleLoadWorkspace(){Oe.execute("load_workspace",{source:this})}render(){return Z`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};xs=Ol([mt("k-workspace-name")],xs);var Tl=Object.getOwnPropertyDescriptor,Pl=(t,e,n,i)=>{for(var s=i>1?void 0:i?Tl(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=a(s)||s);return s};const ks="<no part>";pt.registerContribution(Hi,{html:"<k-part-name></k-part-name>"});let Ss=class extends li(Wn){getPartName(){var e;const t=Me.get();return t&&(((e=t.tabContribution)==null?void 0:e.label)||t.getAttribute("id"))||ks}render(){var n;const t=Me.get(),e=((n=t==null?void 0:t.tabContribution)==null?void 0:n.icon)||"box";return Z`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Ss=Pl([mt("k-part-name")],Ss);function Ki(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Gn=Ki();function ma(t){Gn=t}const Ir={exec:()=>null};function Be(t,e=""){let n=typeof t=="string"?t:t.source;const i={replace:(s,l)=>{let a=typeof l=="string"?l:l.source;return a=a.replace($t.caret,"$1"),n=n.replace(s,a),i},getRegex:()=>new RegExp(n,e)};return i}const $t={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Rl=/^(?:[ \t]*(?:\n|$))+/,Ll=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Dl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Rr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Nl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Yi=/(?:[*+-]|\d{1,9}[.)])/,ga=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,va=Be(ga).replace(/bull/g,Yi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),$l=Be(ga).replace(/bull/g,Yi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ji=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ml=/^[^\n]+/,Zi=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Fl=Be(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Zi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ql=Be(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Yi).getRegex(),pi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Qi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,zl=Be("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Qi).replace("tag",pi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ya=Be(Ji).replace("hr",Rr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pi).getRegex(),jl=Be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ya).getRegex(),Xi={blockquote:jl,code:Ll,def:Fl,fences:Dl,heading:Nl,hr:Rr,html:zl,lheading:va,list:ql,newline:Rl,paragraph:ya,table:Ir,text:Ml},As=Be("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Rr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pi).getRegex(),Ul={...Xi,lheading:$l,table:As,paragraph:Be(Ji).replace("hr",Rr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",As).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",pi).getRegex()},Bl={...Xi,html:Be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Qi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ir,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Be(Ji).replace("hr",Rr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",va).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Wl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Gl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ba=/^( {2,}|\\)\n(?!\s*$)/,Vl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,di=/[\p{P}\p{S}]/u,es=/[\s\p{P}\p{S}]/u,wa=/[^\s\p{P}\p{S}]/u,Hl=Be(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,es).getRegex(),Ia=/(?!~)[\p{P}\p{S}]/u,Kl=/(?!~)[\s\p{P}\p{S}]/u,Yl=/(?:[^\s\p{P}\p{S}]|~)/u,Jl=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,xa=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Zl=Be(xa,"u").replace(/punct/g,di).getRegex(),Ql=Be(xa,"u").replace(/punct/g,Ia).getRegex(),ka="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Xl=Be(ka,"gu").replace(/notPunctSpace/g,wa).replace(/punctSpace/g,es).replace(/punct/g,di).getRegex(),ec=Be(ka,"gu").replace(/notPunctSpace/g,Yl).replace(/punctSpace/g,Kl).replace(/punct/g,Ia).getRegex(),tc=Be("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,wa).replace(/punctSpace/g,es).replace(/punct/g,di).getRegex(),nc=Be(/\\(punct)/,"gu").replace(/punct/g,di).getRegex(),rc=Be(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ic=Be(Qi).replace("(?:-->|$)","-->").getRegex(),sc=Be("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ic).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ei=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ac=Be(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ei).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Sa=Be(/^!?\[(label)\]\[(ref)\]/).replace("label",ei).replace("ref",Zi).getRegex(),Aa=Be(/^!?\[(ref)\](?:\[\])?/).replace("ref",Zi).getRegex(),oc=Be("reflink|nolink(?!\\()","g").replace("reflink",Sa).replace("nolink",Aa).getRegex(),ts={_backpedal:Ir,anyPunctuation:nc,autolink:rc,blockSkip:Jl,br:ba,code:Gl,del:Ir,emStrongLDelim:Zl,emStrongRDelimAst:Xl,emStrongRDelimUnd:tc,escape:Wl,link:ac,nolink:Aa,punctuation:Hl,reflink:Sa,reflinkSearch:oc,tag:sc,text:Vl,url:Ir},lc={...ts,link:Be(/^!?\[(label)\]\((.*?)\)/).replace("label",ei).getRegex(),reflink:Be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ei).getRegex()},Li={...ts,emStrongRDelimAst:ec,emStrongLDelim:Ql,url:Be(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},cc={...Li,br:Be(ba).replace("{2,}","*").getRegex(),text:Be(Li.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},qr={normal:Xi,gfm:Ul,pedantic:Bl},mr={normal:ts,gfm:Li,breaks:cc,pedantic:lc},uc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_s=t=>uc[t];function cn(t,e){if(e){if($t.escapeTest.test(t))return t.replace($t.escapeReplace,_s)}else if($t.escapeTestNoEncode.test(t))return t.replace($t.escapeReplaceNoEncode,_s);return t}function Es(t){try{t=encodeURI(t).replace($t.percentDecode,"%")}catch{return null}return t}function Cs(t,e){var l;const n=t.replace($t.findPipe,(a,h,w)=>{let v=!1,I=h;for(;--I>=0&&w[I]==="\\";)v=!v;return v?"|":" |"}),i=n.split($t.splitPipe);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!((l=i.at(-1))!=null&&l.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace($t.slashPipe,"|");return i}function gr(t,e,n){const i=t.length;if(i===0)return"";let s=0;for(;s<i&&t.charAt(i-s-1)===e;)s++;return t.slice(0,i-s)}function pc(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return n>0?-2:-1}function Os(t,e,n,i,s){const l=e.href,a=e.title||null,h=t[1].replace(s.other.outputLinkReplace,"$1");i.state.inLink=!0;const w={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:l,title:a,text:h,tokens:i.inlineTokens(h)};return i.state.inLink=!1,w}function dc(t,e,n){const i=t.match(n.other.indentCodeCompensation);if(i===null)return e;const s=i[1];return e.split(`
`).map(l=>{const a=l.match(n.other.beginningSpace);if(a===null)return l;const[h]=a;return h.length>=s.length?l.slice(s.length):l}).join(`
`)}class ti{constructor(e){Je(this,"options");Je(this,"rules");Je(this,"lexer");this.options=e||Gn}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:gr(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],s=dc(i,n[3]||"",this.rules);return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(this.rules.other.endingHash.test(i)){const s=gr(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:gr(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let i=gr(n[0],`
`).split(`
`),s="",l="";const a=[];for(;i.length>0;){let h=!1;const w=[];let v;for(v=0;v<i.length;v++)if(this.rules.other.blockquoteStart.test(i[v]))w.push(i[v]),h=!0;else if(!h)w.push(i[v]);else break;i=i.slice(v);const I=w.join(`
`),S=I.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${I}`:I,l=l?`${l}
${S}`:S;const y=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(S,a,!0),this.lexer.state.top=y,i.length===0)break;const T=a.at(-1);if((T==null?void 0:T.type)==="code")break;if((T==null?void 0:T.type)==="blockquote"){const z=T,N=z.raw+`
`+i.join(`
`),G=this.blockquote(N);a[a.length-1]=G,s=s.substring(0,s.length-z.raw.length)+G.raw,l=l.substring(0,l.length-z.text.length)+G.text;break}else if((T==null?void 0:T.type)==="list"){const z=T,N=z.raw+`
`+i.join(`
`),G=this.list(N);a[a.length-1]=G,s=s.substring(0,s.length-T.raw.length)+G.raw,l=l.substring(0,l.length-z.raw.length)+G.raw,i=N.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:a,text:l}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i=n[1].trim();const s=i.length>1,l={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");const a=this.rules.other.listItemRegex(i);let h=!1;for(;e;){let v=!1,I="",S="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;I=n[0],e=e.substring(I.length);let y=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,j=>" ".repeat(3*j.length)),T=e.split(`
`,1)[0],z=!y.trim(),N=0;if(this.options.pedantic?(N=2,S=y.trimStart()):z?N=n[1].length+1:(N=n[2].search(this.rules.other.nonSpaceChar),N=N>4?1:N,S=y.slice(N),N+=n[1].length),z&&this.rules.other.blankLine.test(T)&&(I+=T+`
`,e=e.substring(T.length+1),v=!0),!v){const j=this.rules.other.nextBulletRegex(N),L=this.rules.other.hrRegex(N),W=this.rules.other.fencesBeginRegex(N),D=this.rules.other.headingBeginRegex(N),b=this.rules.other.htmlBeginRegex(N);for(;e;){const F=e.split(`
`,1)[0];let U;if(T=F,this.options.pedantic?(T=T.replace(this.rules.other.listReplaceNesting,"  "),U=T):U=T.replace(this.rules.other.tabCharGlobal,"    "),W.test(T)||D.test(T)||b.test(T)||j.test(T)||L.test(T))break;if(U.search(this.rules.other.nonSpaceChar)>=N||!T.trim())S+=`
`+U.slice(N);else{if(z||y.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||W.test(y)||D.test(y)||L.test(y))break;S+=`
`+T}!z&&!T.trim()&&(z=!0),I+=F+`
`,e=e.substring(F.length+1),y=U.slice(N)}}l.loose||(h?l.loose=!0:this.rules.other.doubleBlankLine.test(I)&&(h=!0));let G=null,re;this.options.gfm&&(G=this.rules.other.listIsTask.exec(S),G&&(re=G[0]!=="[ ] ",S=S.replace(this.rules.other.listReplaceTask,""))),l.items.push({type:"list_item",raw:I,task:!!G,checked:re,loose:!1,text:S,tokens:[]}),l.raw+=I}const w=l.items.at(-1);if(w)w.raw=w.raw.trimEnd(),w.text=w.text.trimEnd();else return;l.raw=l.raw.trimEnd();for(let v=0;v<l.items.length;v++)if(this.lexer.state.top=!1,l.items[v].tokens=this.lexer.blockTokens(l.items[v].text,[]),!l.loose){const I=l.items[v].tokens.filter(y=>y.type==="space"),S=I.length>0&&I.some(y=>this.rules.other.anyLine.test(y.raw));l.loose=S}if(l.loose)for(let v=0;v<l.items.length;v++)l.items[v].loose=!0;return l}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",l=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:s,title:l}}}table(e){var h;const n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;const i=Cs(n[1]),s=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),l=(h=n[3])!=null&&h.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(i.length===s.length){for(const w of s)this.rules.other.tableAlignRight.test(w)?a.align.push("right"):this.rules.other.tableAlignCenter.test(w)?a.align.push("center"):this.rules.other.tableAlignLeft.test(w)?a.align.push("left"):a.align.push(null);for(let w=0;w<i.length;w++)a.header.push({text:i[w],tokens:this.lexer.inline(i[w]),header:!0,align:a.align[w]});for(const w of l)a.rows.push(Cs(w,a.header.length).map((v,I)=>({text:v,tokens:this.lexer.inline(v),header:!1,align:a.align[I]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;const a=gr(i.slice(0,-1),"\\");if((i.length-a.length)%2===0)return}else{const a=pc(n[2],"()");if(a===-2)return;if(a>-1){const w=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,w).trim(),n[3]=""}}let s=n[2],l="";if(this.options.pedantic){const a=this.rules.other.pedanticHrefTitle.exec(s);a&&(s=a[1],l=a[3])}else l=n[3]?n[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),Os(n,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:l&&l.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),l=n[s.toLowerCase()];if(!l){const a=i[0].charAt(0);return{type:"text",raw:a,text:a}}return Os(i,l,i[0],this.lexer,this.rules)}}emStrong(e,n,i=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const a=[...s[0]].length-1;let h,w,v=a,I=0;const S=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(S.lastIndex=0,n=n.slice(-1*e.length+a);(s=S.exec(n))!=null;){if(h=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!h)continue;if(w=[...h].length,s[3]||s[4]){v+=w;continue}else if((s[5]||s[6])&&a%3&&!((a+w)%3)){I+=w;continue}if(v-=w,v>0)continue;w=Math.min(w,w+v+I);const y=[...s[0]][0].length,T=e.slice(0,a+s.index+y+w);if(Math.min(a,w)%2){const N=T.slice(1,-1);return{type:"em",raw:T,text:N,tokens:this.lexer.inlineTokens(N)}}const z=T.slice(2,-2);return{type:"strong",raw:T,text:z,tokens:this.lexer.inlineTokens(z)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(i),l=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&l&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=n[1],s="mailto:"+i):(i=n[1],s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let n;if(n=this.rules.inline.url.exec(e)){let s,l;if(n[2]==="@")s=n[0],l="mailto:"+s;else{let a;do a=n[0],n[0]=((i=this.rules.inline._backpedal.exec(n[0]))==null?void 0:i[0])??"";while(a!==n[0]);s=n[0],n[1]==="www."?l="http://"+n[0]:l=n[0]}return{type:"link",raw:n[0],text:s,href:l,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){const i=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:i}}}}class Kt{constructor(e){Je(this,"tokens");Je(this,"options");Je(this,"state");Je(this,"tokenizer");Je(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Gn,this.options.tokenizer=this.options.tokenizer||new ti,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:$t,block:qr.normal,inline:mr.normal};this.options.pedantic?(n.block=qr.pedantic,n.inline=mr.pedantic):this.options.gfm&&(n.block=qr.gfm,this.options.breaks?n.inline=mr.breaks:n.inline=mr.gfm),this.tokenizer.rules=n}static get rules(){return{block:qr,inline:mr}}static lex(e,n){return new Kt(n).lex(e)}static lexInline(e,n){return new Kt(n).inlineTokens(e)}lex(e){e=e.replace($t.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],i=!1){var s,l,a;for(this.options.pedantic&&(e=e.replace($t.tabCharGlobal,"    ").replace($t.spaceLine,""));e;){let h;if((l=(s=this.options.extensions)==null?void 0:s.block)!=null&&l.some(v=>(h=v.call({lexer:this},e,n))?(e=e.substring(h.raw.length),n.push(h),!0):!1))continue;if(h=this.tokenizer.space(e)){e=e.substring(h.raw.length);const v=n.at(-1);h.raw.length===1&&v!==void 0?v.raw+=`
`:n.push(h);continue}if(h=this.tokenizer.code(e)){e=e.substring(h.raw.length);const v=n.at(-1);(v==null?void 0:v.type)==="paragraph"||(v==null?void 0:v.type)==="text"?(v.raw+=`
`+h.raw,v.text+=`
`+h.text,this.inlineQueue.at(-1).src=v.text):n.push(h);continue}if(h=this.tokenizer.fences(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.heading(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.hr(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.blockquote(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.list(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.html(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.def(e)){e=e.substring(h.raw.length);const v=n.at(-1);(v==null?void 0:v.type)==="paragraph"||(v==null?void 0:v.type)==="text"?(v.raw+=`
`+h.raw,v.text+=`
`+h.raw,this.inlineQueue.at(-1).src=v.text):this.tokens.links[h.tag]||(this.tokens.links[h.tag]={href:h.href,title:h.title});continue}if(h=this.tokenizer.table(e)){e=e.substring(h.raw.length),n.push(h);continue}if(h=this.tokenizer.lheading(e)){e=e.substring(h.raw.length),n.push(h);continue}let w=e;if((a=this.options.extensions)!=null&&a.startBlock){let v=1/0;const I=e.slice(1);let S;this.options.extensions.startBlock.forEach(y=>{S=y.call({lexer:this},I),typeof S=="number"&&S>=0&&(v=Math.min(v,S))}),v<1/0&&v>=0&&(w=e.substring(0,v+1))}if(this.state.top&&(h=this.tokenizer.paragraph(w))){const v=n.at(-1);i&&(v==null?void 0:v.type)==="paragraph"?(v.raw+=`
`+h.raw,v.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=v.text):n.push(h),i=w.length!==e.length,e=e.substring(h.raw.length);continue}if(h=this.tokenizer.text(e)){e=e.substring(h.raw.length);const v=n.at(-1);(v==null?void 0:v.type)==="text"?(v.raw+=`
`+h.raw,v.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=v.text):n.push(h);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var h,w,v;let i=e,s=null;if(this.tokens.links){const I=Object.keys(this.tokens.links);if(I.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)I.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let l=!1,a="";for(;e;){l||(a=""),l=!1;let I;if((w=(h=this.options.extensions)==null?void 0:h.inline)!=null&&w.some(y=>(I=y.call({lexer:this},e,n))?(e=e.substring(I.raw.length),n.push(I),!0):!1))continue;if(I=this.tokenizer.escape(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.tag(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.link(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(I.raw.length);const y=n.at(-1);I.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=I.raw,y.text+=I.text):n.push(I);continue}if(I=this.tokenizer.emStrong(e,i,a)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.codespan(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.br(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.del(e)){e=e.substring(I.raw.length),n.push(I);continue}if(I=this.tokenizer.autolink(e)){e=e.substring(I.raw.length),n.push(I);continue}if(!this.state.inLink&&(I=this.tokenizer.url(e))){e=e.substring(I.raw.length),n.push(I);continue}let S=e;if((v=this.options.extensions)!=null&&v.startInline){let y=1/0;const T=e.slice(1);let z;this.options.extensions.startInline.forEach(N=>{z=N.call({lexer:this},T),typeof z=="number"&&z>=0&&(y=Math.min(y,z))}),y<1/0&&y>=0&&(S=e.substring(0,y+1))}if(I=this.tokenizer.inlineText(S)){e=e.substring(I.raw.length),I.raw.slice(-1)!=="_"&&(a=I.raw.slice(-1)),l=!0;const y=n.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=I.raw,y.text+=I.text):n.push(I);continue}if(e){const y="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return n}}class ni{constructor(e){Je(this,"options");Je(this,"parser");this.options=e||Gn}space(e){return""}code({text:e,lang:n,escaped:i}){var a;const s=(a=(n||"").match($t.notSpaceStart))==null?void 0:a[0],l=e.replace($t.endingNewline,"")+`
`;return s?'<pre><code class="language-'+cn(s)+'">'+(i?l:cn(l,!0))+`</code></pre>
`:"<pre><code>"+(i?l:cn(l,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,i=e.start;let s="";for(let h=0;h<e.items.length;h++){const w=e.items[h];s+=this.listitem(w)}const l=n?"ol":"ul",a=n&&i!==1?' start="'+i+'"':"";return"<"+l+a+`>
`+s+"</"+l+`>
`}listitem(e){var i;let n="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((i=e.tokens[0])==null?void 0:i.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+cn(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):n+=s+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",i="";for(let l=0;l<e.header.length;l++)i+=this.tablecell(e.header[l]);n+=this.tablerow({text:i});let s="";for(let l=0;l<e.rows.length;l++){const a=e.rows[l];i="";for(let h=0;h<a.length;h++)i+=this.tablecell(a[h]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+n+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${cn(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:i}){const s=this.parser.parseInline(i),l=Es(e);if(l===null)return s;e=l;let a='<a href="'+e+'"';return n&&(a+=' title="'+cn(n)+'"'),a+=">"+s+"</a>",a}image({href:e,title:n,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));const l=Es(e);if(l===null)return cn(i);e=l;let a=`<img src="${e}" alt="${i}"`;return n&&(a+=` title="${cn(n)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:cn(e.text)}}class ns{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Yt{constructor(e){Je(this,"options");Je(this,"renderer");Je(this,"textRenderer");this.options=e||Gn,this.options.renderer=this.options.renderer||new ni,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ns}static parse(e,n){return new Yt(n).parse(e)}static parseInline(e,n){return new Yt(n).parseInline(e)}parse(e,n=!0){var s,l;let i="";for(let a=0;a<e.length;a++){const h=e[a];if((l=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&l[h.type]){const v=h,I=this.options.extensions.renderers[v.type].call({parser:this},v);if(I!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(v.type)){i+=I||"";continue}}const w=h;switch(w.type){case"space":{i+=this.renderer.space(w);continue}case"hr":{i+=this.renderer.hr(w);continue}case"heading":{i+=this.renderer.heading(w);continue}case"code":{i+=this.renderer.code(w);continue}case"table":{i+=this.renderer.table(w);continue}case"blockquote":{i+=this.renderer.blockquote(w);continue}case"list":{i+=this.renderer.list(w);continue}case"html":{i+=this.renderer.html(w);continue}case"paragraph":{i+=this.renderer.paragraph(w);continue}case"text":{let v=w,I=this.renderer.text(v);for(;a+1<e.length&&e[a+1].type==="text";)v=e[++a],I+=`
`+this.renderer.text(v);n?i+=this.renderer.paragraph({type:"paragraph",raw:I,text:I,tokens:[{type:"text",raw:I,text:I,escaped:!0}]}):i+=I;continue}default:{const v='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(v),"";throw new Error(v)}}}return i}parseInline(e,n=this.renderer){var s,l;let i="";for(let a=0;a<e.length;a++){const h=e[a];if((l=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&l[h.type]){const v=this.options.extensions.renderers[h.type].call({parser:this},h);if(v!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(h.type)){i+=v||"";continue}}const w=h;switch(w.type){case"escape":{i+=n.text(w);break}case"html":{i+=n.html(w);break}case"link":{i+=n.link(w);break}case"image":{i+=n.image(w);break}case"strong":{i+=n.strong(w);break}case"em":{i+=n.em(w);break}case"codespan":{i+=n.codespan(w);break}case"br":{i+=n.br(w);break}case"del":{i+=n.del(w);break}case"text":{i+=n.text(w);break}default:{const v='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(v),"";throw new Error(v)}}}return i}}class xr{constructor(e){Je(this,"options");Je(this,"block");this.options=e||Gn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Kt.lex:Kt.lexInline}provideParser(){return this.block?Yt.parse:Yt.parseInline}}Je(xr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class hc{constructor(...e){Je(this,"defaults",Ki());Je(this,"options",this.setOptions);Je(this,"parse",this.parseMarkdown(!0));Je(this,"parseInline",this.parseMarkdown(!1));Je(this,"Parser",Yt);Je(this,"Renderer",ni);Je(this,"TextRenderer",ns);Je(this,"Lexer",Kt);Je(this,"Tokenizer",ti);Je(this,"Hooks",xr);this.use(...e)}walkTokens(e,n){var s,l;let i=[];for(const a of e)switch(i=i.concat(n.call(this,a)),a.type){case"table":{const h=a;for(const w of h.header)i=i.concat(this.walkTokens(w.tokens,n));for(const w of h.rows)for(const v of w)i=i.concat(this.walkTokens(v.tokens,n));break}case"list":{const h=a;i=i.concat(this.walkTokens(h.items,n));break}default:{const h=a;(l=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&l[h.type]?this.defaults.extensions.childTokens[h.type].forEach(w=>{const v=h[w].flat(1/0);i=i.concat(this.walkTokens(v,n))}):h.tokens&&(i=i.concat(this.walkTokens(h.tokens,n)))}}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(l=>{if(!l.name)throw new Error("extension name required");if("renderer"in l){const a=n.renderers[l.name];a?n.renderers[l.name]=function(...h){let w=l.renderer.apply(this,h);return w===!1&&(w=a.apply(this,h)),w}:n.renderers[l.name]=l.renderer}if("tokenizer"in l){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[l.level];a?a.unshift(l.tokenizer):n[l.level]=[l.tokenizer],l.start&&(l.level==="block"?n.startBlock?n.startBlock.push(l.start):n.startBlock=[l.start]:l.level==="inline"&&(n.startInline?n.startInline.push(l.start):n.startInline=[l.start]))}"childTokens"in l&&l.childTokens&&(n.childTokens[l.name]=l.childTokens)}),s.extensions=n),i.renderer){const l=this.defaults.renderer||new ni(this.defaults);for(const a in i.renderer){if(!(a in l))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const h=a,w=i.renderer[h],v=l[h];l[h]=(...I)=>{let S=w.apply(l,I);return S===!1&&(S=v.apply(l,I)),S||""}}s.renderer=l}if(i.tokenizer){const l=this.defaults.tokenizer||new ti(this.defaults);for(const a in i.tokenizer){if(!(a in l))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const h=a,w=i.tokenizer[h],v=l[h];l[h]=(...I)=>{let S=w.apply(l,I);return S===!1&&(S=v.apply(l,I)),S}}s.tokenizer=l}if(i.hooks){const l=this.defaults.hooks||new xr;for(const a in i.hooks){if(!(a in l))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const h=a,w=i.hooks[h],v=l[h];xr.passThroughHooks.has(a)?l[h]=I=>{if(this.defaults.async)return Promise.resolve(w.call(l,I)).then(y=>v.call(l,y));const S=w.call(l,I);return v.call(l,S)}:l[h]=(...I)=>{let S=w.apply(l,I);return S===!1&&(S=v.apply(l,I)),S}}s.hooks=l}if(i.walkTokens){const l=this.defaults.walkTokens,a=i.walkTokens;s.walkTokens=function(h){let w=[];return w.push(a.call(this,h)),l&&(w=w.concat(l.call(this,h))),w}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Kt.lex(e,n??this.defaults)}parser(e,n){return Yt.parse(e,n??this.defaults)}parseMarkdown(e){return(i,s)=>{const l={...s},a={...this.defaults,...l},h=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&l.async===!1)return h(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return h(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return h(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const w=a.hooks?a.hooks.provideLexer():e?Kt.lex:Kt.lexInline,v=a.hooks?a.hooks.provideParser():e?Yt.parse:Yt.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(i):i).then(I=>w(I,a)).then(I=>a.hooks?a.hooks.processAllTokens(I):I).then(I=>a.walkTokens?Promise.all(this.walkTokens(I,a.walkTokens)).then(()=>I):I).then(I=>v(I,a)).then(I=>a.hooks?a.hooks.postprocess(I):I).catch(h);try{a.hooks&&(i=a.hooks.preprocess(i));let I=w(i,a);a.hooks&&(I=a.hooks.processAllTokens(I)),a.walkTokens&&this.walkTokens(I,a.walkTokens);let S=v(I,a);return a.hooks&&(S=a.hooks.postprocess(S)),S}catch(I){return h(I)}}}onError(e,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+cn(i.message+"",!0)+"</pre>";return n?Promise.resolve(s):s}if(n)return Promise.reject(i);throw i}}}const Un=new hc;function He(t,e){return Un.parse(t,e)}He.options=He.setOptions=function(t){return Un.setOptions(t),He.defaults=Un.defaults,ma(He.defaults),He};He.getDefaults=Ki;He.defaults=Gn;He.use=function(...t){return Un.use(...t),He.defaults=Un.defaults,ma(He.defaults),He};He.walkTokens=function(t,e){return Un.walkTokens(t,e)};He.parseInline=Un.parseInline;He.Parser=Yt;He.parser=Yt.parse;He.Renderer=ni;He.TextRenderer=ns;He.Lexer=Kt;He.lexer=Kt.lex;He.Tokenizer=ti;He.Hooks=xr;He.parse=He;He.options;He.setOptions;He.use;He.walkTokens;He.parseInline;Yt.parse;Kt.lex;var yn={},tn={},Ts;function fc(){if(Ts)return tn;Ts=1,Object.defineProperty(tn,"__esModule",{value:!0});function t(u){const r=u||"";return function(){throw new Error("this method "+r+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(u,r){if(!u)throw new Error(r||"Assertion failed")}function n(u,r,o){let p;Object.defineProperty(u,r,{get(){return p||(p=o.call(this)),p}})}function i(u){return u&&Object.assign({},u)}function s(u,r){const o=[];for(;r-- >0;)o.push(u());return o}function l(u,r){return new Array(r+1).join(u)}function a(u,r){return s(()=>u,r)}function h(u){const r=[];for(let o=0;o<u.length;o++){const p=u[o];u.lastIndexOf(p)!==o&&r.indexOf(p)<0&&r.push(p)}return r}function w(u){const r=[];return u.forEach(o=>{r.indexOf(o)<0&&r.push(o)}),r}function v(u){const r=u[0];return r===r.toUpperCase()}function I(u){return!v(u)}function S(u,r,o){const p=o||" ";return u.length<r?l(p,r-u.length)+u:u}function y(){this.strings=[]}y.prototype.append=function(u){this.strings.push(u)},y.prototype.contents=function(){return this.strings.join("")};const T=u=>String.fromCodePoint(parseInt(u,16));function z(u){if(u.charAt(0)==="\\")switch(u.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return T(u.slice(2,4));case"u":return u.charAt(2)==="{"?T(u.slice(3,-1)):T(u.slice(2,6));default:return u.charAt(1)}else return u}function N(u){if(u==null)return String(u);const r=Object.prototype.toString.call(u);try{let o;return u.constructor&&u.constructor.name?o=u.constructor.name:r.indexOf("[object ")===0?o=r.slice(8,-1):o=typeof u,o+": "+JSON.stringify(String(u))}catch{return r}}var G=Object.freeze({__proto__:null,abstract:t,assert:e,defineLazyProperty:n,clone:i,repeatFn:s,repeatStr:l,repeat:a,getDuplicates:h,copyWithoutDuplicates:w,isSyntactic:v,isLexical:I,padLeft:S,StringBuffer:y,unescapeCodePoint:z,unexpectedObjToString:N});const re={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class j{constructor(){if(this.constructor===j)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(r){return r&&(this.source=r.trimmed()),this}}const L=Object.create(j.prototype),W=Object.create(j.prototype);class D extends j{constructor(r){super(),this.obj=r}}class b extends j{constructor(r,o){super(),this.from=r,this.to=o,this.matchCodePoint=r.length>1||o.length>1}}class F extends j{constructor(r){super(),this.index=r}}class U extends j{constructor(r){super(),this.terms=r}}class se extends U{constructor(r,o,p){const g=r.rules[o].body;super([p,g]),this.superGrammar=r,this.name=o,this.body=p}}class ve extends U{constructor(r,o,p,g){const O=r.rules[o].body;super([...p,O,...g]),this.superGrammar=r,this.ruleName=o,this.expansionPos=p.length}}class Q extends j{constructor(r){super(),this.factors=r}}class ae extends j{constructor(r){super(),this.expr=r}}class pe extends ae{}class Se extends ae{}class ze extends ae{}pe.prototype.operator="*",Se.prototype.operator="+",ze.prototype.operator="?",pe.prototype.minNumMatches=0,Se.prototype.minNumMatches=1,ze.prototype.minNumMatches=0,pe.prototype.maxNumMatches=Number.POSITIVE_INFINITY,Se.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ze.prototype.maxNumMatches=1;class be extends j{constructor(r){super(),this.expr=r}}class ye extends j{constructor(r){super(),this.expr=r}}class We extends j{constructor(r){super(),this.expr=r}}class ie extends j{constructor(r,o=[]){super(),this.ruleName=r,this.args=o}isSyntactic(){return v(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class Ce extends j{constructor(r){super(),this.category=r,this.pattern=re[r]}}function Pe(u,r){let o;return r?(o=new Error(r.getLineAndColumnMessage()+u),o.shortMessage=u,o.interval=r):o=new Error(u),o}function x(){return Pe("Interval sources don't match")}function _(u){const r=new Error;return Object.defineProperty(r,"message",{enumerable:!0,get(){return u.message}}),Object.defineProperty(r,"shortMessage",{enumerable:!0,get(){return"Expected "+u.getExpectedText()}}),r.interval=u.getInterval(),r}function ce(u,r,o){const p=r?`Grammar ${u} is not declared in namespace '${r}'`:"Undeclared grammar "+u;return Pe(p,o)}function _e(u,r){return Pe("Grammar "+u.name+" is already declared in this namespace")}function Ge(u){return Pe(`Grammar '${u.name}' does not support incremental parsing`)}function Re(u,r,o){return Pe("Rule "+u+" is not declared in grammar "+r,o)}function P(u,r,o){return Pe("Cannot override rule "+u+" because it is not declared in "+r,o)}function q(u,r,o){return Pe("Cannot extend rule "+u+" because it is not declared in "+r,o)}function R(u,r,o,p){let g="Duplicate declaration for rule '"+u+"' in grammar '"+r+"'";return r!==o&&(g+=" (originally declared in '"+o+"')"),Pe(g,p)}function Y(u,r,o,p){return Pe("Wrong number of parameters for rule "+u+" (expected "+r+", got "+o+")",p)}function te(u,r,o,p){return Pe("Wrong number of arguments for rule "+u+" (expected "+r+", got "+o+")",p)}function J(u,r,o){return Pe("Duplicate parameter names in rule "+u+": "+r.join(", "),o)}function B(u,r){return Pe("Invalid parameter to rule "+u+": "+r+" has arity "+r.getArity()+", but parameter expressions must have arity 1",r.source)}const ne="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function me(u,r){return Pe("Cannot apply syntactic rule "+u+" from here (inside a lexical context)",r.source)}function Te(u){const{ruleName:r}=u;return Pe(`applySyntactic is for syntactic rules, but '${r}' is a lexical rule. `+ne,u.source)}function Le(u){return Pe("applySyntactic is not required here (in a syntactic context)",u.source)}function fe(u,r){return Pe("Incorrect argument type: expected "+u,r.source)}function Ie(u){return Pe("'...' can appear at most once in a rule body",u.source)}function Ne(u){const r=u._node;e(r&&r.isNonterminal()&&r.ctorName==="escapeChar_unicodeCodePoint");const o=u.children.slice(1,-1).map(g=>g.source),p=o[0].coverageWith(...o.slice(1));return Pe(`U+${p.contents} is not a valid Unicode code point`,p)}function de(u,r){const o=r.length>0?r[r.length-1].args:[];let g="Nullable expression "+u.expr.substituteParams(o)+" is not allowed inside '"+u.operator+"' (possible infinite loop)";if(r.length>0){const O=r.map(M=>new ie(M.ruleName,M.args)).join(`
`);g+=`
Application stack (most recent application last):
`+O}return Pe(g,u.expr.source)}function ot(u,r,o,p){return Pe("Rule "+u+" involves an alternation which has inconsistent arity (expected "+r+", got "+o+")",p.source)}function Ft(u){const r=u.map(o=>o.message);return Pe(["Errors:"].concat(r).join(`
- `),u[0].interval)}function bt(u,r,o,p){let g=p.slice(0,-1).map(X=>{const he="  "+X[0].name+" > "+X[1];return X.length===3?he+" for '"+X[2]+"'":he}).join(`
`);g+=`
  `+r+" > "+u;let O="";u==="_iter"&&(O=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const M=[`Missing semantic action for '${u}' in ${o} '${r}'.${O}`,"Action stack (most recent call last):",g].join(`
`),ee=Pe(M);return ee.name="missingSemanticAction",ee}function lt(u){if(u.length===1)throw u[0];if(u.length>1)throw Ft(u)}function wt(u){let r=0;return u.map(p=>{const g=p.toString();return r=Math.max(r,g.length),g}).map(p=>S(p,r))}function Bt(u,r,o){const p=u.length,g=u.slice(0,o),O=u.slice(o+r.length);return(g+r+O).substr(0,p)}function on(...u){const r=this,{offset:o}=r,{repeatStr:p}=G,g=new y;g.append("Line "+r.lineNum+", col "+r.colNum+`:
`);const O=wt([r.prevLine==null?0:r.lineNum-1,r.lineNum,r.nextLine==null?0:r.lineNum+1]),M=(H,V,le)=>{g.append(le+O[H]+" | "+V+`
`)};r.prevLine!=null&&M(0,r.prevLine,"  "),M(1,r.line,"> ");const ee=r.line.length;let X=p(" ",ee+1);for(let H=0;H<u.length;++H){let V=u[H][0],le=u[H][1];e(V>=0&&V<=le,"range start must be >= 0 and <= end");const xe=o-r.colNum+1;V=Math.max(0,V-xe),le=Math.min(le-xe,ee),X=Bt(X,p("~",le-V),V)}const he=2+O[1].length+3;return g.append(p(" ",he)),X=Bt(X,"^",r.colNum-1),g.append(X.replace(/ +$/,"")+`
`),r.nextLine!=null&&M(2,r.nextLine,"  "),g.contents()}let kn=[];function Zt(u){kn.push(u)}function oe(u){kn.forEach(r=>{r(u)}),kn=null}function Sn(u,r){let o=1,p=1,g=0,O=0,M=null,ee=null,X=-1;for(;g<r;){const V=u.charAt(g++);V===`
`?(o++,p=1,X=O,O=g):V!=="\r"&&p++}let he=u.indexOf(`
`,O);if(he===-1)he=u.length;else{const V=u.indexOf(`
`,he+1);M=V===-1?u.slice(he):u.slice(he,V),M=M.replace(/^\r?\n/,"").replace(/\r$/,"")}X>=0&&(ee=u.slice(X,O).replace(/\r?\n$/,""));const H=u.slice(O,he).replace(/\r$/,"");return{offset:r,lineNum:o,colNum:p,line:H,prevLine:ee,nextLine:M,toString:on}}function fn(u,r,...o){return Sn(u,r).toString(...o)}const qt=(()=>{let u=0;return r=>""+r+u++})();class nt{constructor(r,o,p){this.sourceString=r,this.startIdx=o,this.endIdx=p}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...r){return nt.coverage(...r,this)}collapsedLeft(){return new nt(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new nt(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return Sn(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const r=[this.startIdx,this.endIdx];return fn(this.sourceString,this.startIdx,r)}minus(r){if(this.sourceString!==r.sourceString)throw x();return this.startIdx===r.startIdx&&this.endIdx===r.endIdx?[]:this.startIdx<r.startIdx&&r.endIdx<this.endIdx?[new nt(this.sourceString,this.startIdx,r.startIdx),new nt(this.sourceString,r.endIdx,this.endIdx)]:this.startIdx<r.endIdx&&r.endIdx<this.endIdx?[new nt(this.sourceString,r.endIdx,this.endIdx)]:this.startIdx<r.startIdx&&r.startIdx<this.endIdx?[new nt(this.sourceString,this.startIdx,r.startIdx)]:[this]}relativeTo(r){if(this.sourceString!==r.sourceString)throw x();return e(this.startIdx>=r.startIdx&&this.endIdx<=r.endIdx,"other interval does not cover this one"),new nt(this.sourceString,this.startIdx-r.startIdx,this.endIdx-r.startIdx)}trimmed(){const{contents:r}=this,o=this.startIdx+r.match(/^\s*/)[0].length,p=this.endIdx-r.match(/\s*$/)[0].length;return new nt(this.sourceString,o,p)}subInterval(r,o){const p=this.startIdx+r;return new nt(this.sourceString,p,p+o)}}nt.coverage=function(u,...r){let{startIdx:o,endIdx:p}=u;for(const g of r){if(g.sourceString!==u.sourceString)throw x();o=Math.min(o,g.startIdx),p=Math.max(p,g.endIdx)}return new nt(u.sourceString,o,p)};const Wt=65535;class $e{constructor(r){this.source=r,this.pos=0,this.examinedLength=0}atEnd(){const r=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),r}next(){const r=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),r}nextCharCode(){const r=this.next();return r&&r.charCodeAt(0)}nextCodePoint(){const r=this.source.slice(this.pos++).codePointAt(0);return r>Wt&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),r}matchString(r,o){let p;if(o){for(p=0;p<r.length;p++){const g=this.next(),O=r[p];if(g==null||g.toUpperCase()!==O.toUpperCase())return!1}return!0}for(p=0;p<r.length;p++)if(this.next()!==r[p])return!1;return!0}sourceSlice(r,o){return this.source.slice(r,o)}interval(r,o){return new nt(this.source,r,o||this.pos)}}class f{constructor(r,o,p,g,O,M,ee){this.matcher=r,this.input=o,this.startExpr=p,this._cst=g,this._cstOffset=O,this._rightmostFailurePosition=M,this._rightmostFailures=ee,this.failed()&&(n(this,"message",function(){const X="Expected "+this.getExpectedText();return fn(this.input,this.getRightmostFailurePosition())+X}),n(this,"shortMessage",function(){const X="expected "+this.getExpectedText(),he=Sn(this.input,this.getRightmostFailurePosition());return"Line "+he.lineNum+", col "+he.colNum+": "+X}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const r=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=r.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const r=new y;let o=this.getRightmostFailures();o=o.filter(p=>!p.isFluffy());for(let p=0;p<o.length;p++)p>0&&(p===o.length-1?r.append(o.length>2?", or ":" or "):r.append(", ")),r.append(o[p].toString());return r.contents()}getInterval(){const r=this.getRightmostFailurePosition();return new nt(this.input,r,r)}}class k{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(r){return this.applicationMemoKeyStack.indexOf(r.toMemoKey())>=0}enter(r){this.applicationMemoKeyStack.push(r.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(r,o){o.isLeftRecursion=!0,o.headApplication=r,o.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=o;const{applicationMemoKeyStack:p}=this,g=p.indexOf(r.toMemoKey())+1,O=p.slice(g);o.isInvolved=function(M){return O.indexOf(M)>=0},o.updateInvolvedApplicationMemoKeys=function(){for(let M=g;M<p.length;M++){const ee=p[M];this.isInvolved(ee)||O.push(ee)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(r){if(!r.isLeftRecursion)return!0;const{applicationMemoKeyStack:o}=this;for(let p=0;p<o.length;p++){const g=o[p];if(r.isInvolved(g))return!1}return!0}memoize(r,o){return this.memo[r]=o,this.maxExaminedLength=Math.max(this.maxExaminedLength,o.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,o.rightmostFailureOffset),o}clearObsoleteEntries(r,o){if(r+this.maxExaminedLength<=o)return;const{memo:p}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(p).forEach(g=>{const O=p[g];r+O.examinedLength>o?delete p[g]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,O.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,O.rightmostFailureOffset))})}}const E="✗",c="✓",d="⋅",m="⇒",C="␉",A="␊",$="␍",K={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function ue(u){return a(" ",u).join("")}function ge(u,r,o){const p=Fe(u.slice(r,r+o));return p.length<o?p+a(" ",o-p.length).join(""):p}function Fe(u){return typeof u=="string"?u.replace(/ /g,d).replace(/\t/g,C).replace(/\n/g,A).replace(/\r/g,$):String(u)}class ke{constructor(r,o,p,g,O,M,ee){this.input=r,this.pos=this.pos1=o,this.pos2=p,this.source=new nt(r,o,p),this.expr=g,this.bindings=M,this.children=ee||[],this.terminatingLREntry=null,this._flags=O?K.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(r){const o=new ke(this.input,this.pos,this.pos2,r,this.succeeded,this.bindings,this.children);return o.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,o.isImplicitSpaces=this.isImplicitSpaces,o.isMemoized=this.isMemoized,o.isRootNode=this.isRootNode,o.terminatesLR=this.terminatesLR,o.terminatingLREntry=this.terminatingLREntry,o}recordLRTermination(r,o){this.terminatingLREntry=new ke(this.input,this.pos,this.pos2,this.expr,!1,[o],[r]),this.terminatingLREntry.terminatesLR=!0}walk(r,o){let p=r;typeof p=="function"&&(p={enter:p});function g(O,M,ee){let X=!0;p.enter&&p.enter.call(o,O,M,ee)===ke.prototype.SKIP&&(X=!1),X&&(O.children.forEach(he=>{g(he,O,ee+1)}),p.exit&&p.exit.call(o,O,M,ee))}this.isRootNode?this.children.forEach(O=>{g(O,null,0)}):g(this,null,0)}toString(){const r=new y;return this.walk((o,p,g)=>{if(!o)return this.SKIP;if(o.expr.constructor.name!=="Alt"){if(r.append(ge(o.input,o.pos,10)+ue(g*2+1)),r.append((o.succeeded?c:E)+" "+o.displayString),o.isHeadOfLeftRecursion&&r.append(" (LR)"),o.succeeded){const M=Fe(o.source.contents);r.append(" "+m+"  "),r.append(typeof M=="string"?'"'+M+'"':M)}r.append(`
`)}}),r.contents()}}ke.prototype.SKIP={},Object.keys(K).forEach(u=>{const r=K[u];Object.defineProperty(ke.prototype,u,{get(){return(this._flags&r)!==0},set(o){o?this._flags|=r:this._flags&=~r}})}),j.prototype.allowsSkippingPrecedingSpace=t("allowsSkippingPrecedingSpace"),L.allowsSkippingPrecedingSpace=W.allowsSkippingPrecedingSpace=ie.prototype.allowsSkippingPrecedingSpace=D.prototype.allowsSkippingPrecedingSpace=b.prototype.allowsSkippingPrecedingSpace=Ce.prototype.allowsSkippingPrecedingSpace=function(){return!0},U.prototype.allowsSkippingPrecedingSpace=ae.prototype.allowsSkippingPrecedingSpace=We.prototype.allowsSkippingPrecedingSpace=ye.prototype.allowsSkippingPrecedingSpace=be.prototype.allowsSkippingPrecedingSpace=F.prototype.allowsSkippingPrecedingSpace=Q.prototype.allowsSkippingPrecedingSpace=function(){return!1};let qe;Zt(u=>{qe=u});let De;j.prototype.assertAllApplicationsAreValid=function(u,r){De=0,this._assertAllApplicationsAreValid(u,r)},j.prototype._assertAllApplicationsAreValid=t("_assertAllApplicationsAreValid"),L._assertAllApplicationsAreValid=W._assertAllApplicationsAreValid=D.prototype._assertAllApplicationsAreValid=b.prototype._assertAllApplicationsAreValid=F.prototype._assertAllApplicationsAreValid=Ce.prototype._assertAllApplicationsAreValid=function(u,r){},We.prototype._assertAllApplicationsAreValid=function(u,r){De++,this.expr._assertAllApplicationsAreValid(u,r),De--},U.prototype._assertAllApplicationsAreValid=function(u,r){for(let o=0;o<this.terms.length;o++)this.terms[o]._assertAllApplicationsAreValid(u,r)},Q.prototype._assertAllApplicationsAreValid=function(u,r){for(let o=0;o<this.factors.length;o++)this.factors[o]._assertAllApplicationsAreValid(u,r)},ae.prototype._assertAllApplicationsAreValid=be.prototype._assertAllApplicationsAreValid=ye.prototype._assertAllApplicationsAreValid=function(u,r){this.expr._assertAllApplicationsAreValid(u,r)},ie.prototype._assertAllApplicationsAreValid=function(u,r,o=!1){const p=r.rules[this.ruleName],g=v(u)&&De===0;if(!p)throw Re(this.ruleName,r.name,this.source);if(!o&&v(this.ruleName)&&!g)throw me(this.ruleName,this);const O=this.args.length,M=p.formals.length;if(O!==M)throw te(this.ruleName,M,O,this.source);const ee=qe&&p===qe.rules.applySyntactic;if(qe&&p===qe.rules.caseInsensitive&&!(this.args[0]instanceof D))throw fe('a Terminal (e.g. "abc")',this.args[0]);if(ee){const he=this.args[0];if(!(he instanceof ie))throw fe("a syntactic rule application",he);if(!v(he.ruleName))throw Te(he);if(g)throw Le(this)}this.args.forEach(he=>{if(he._assertAllApplicationsAreValid(u,r,ee),he.getArity()!==1)throw B(this.ruleName,he)})},j.prototype.assertChoicesHaveUniformArity=t("assertChoicesHaveUniformArity"),L.assertChoicesHaveUniformArity=W.assertChoicesHaveUniformArity=D.prototype.assertChoicesHaveUniformArity=b.prototype.assertChoicesHaveUniformArity=F.prototype.assertChoicesHaveUniformArity=We.prototype.assertChoicesHaveUniformArity=Ce.prototype.assertChoicesHaveUniformArity=function(u){},U.prototype.assertChoicesHaveUniformArity=function(u){if(this.terms.length===0)return;const r=this.terms[0].getArity();for(let o=0;o<this.terms.length;o++){const p=this.terms[o];p.assertChoicesHaveUniformArity();const g=p.getArity();if(r!==g)throw ot(u,r,g,p)}},se.prototype.assertChoicesHaveUniformArity=function(u){const r=this.terms[0].getArity(),o=this.terms[1].getArity();if(r!==o)throw ot(u,o,r,this.terms[0])},Q.prototype.assertChoicesHaveUniformArity=function(u){for(let r=0;r<this.factors.length;r++)this.factors[r].assertChoicesHaveUniformArity(u)},ae.prototype.assertChoicesHaveUniformArity=function(u){this.expr.assertChoicesHaveUniformArity(u)},be.prototype.assertChoicesHaveUniformArity=function(u){},ye.prototype.assertChoicesHaveUniformArity=function(u){this.expr.assertChoicesHaveUniformArity(u)},ie.prototype.assertChoicesHaveUniformArity=function(u){},j.prototype.assertIteratedExprsAreNotNullable=t("assertIteratedExprsAreNotNullable"),L.assertIteratedExprsAreNotNullable=W.assertIteratedExprsAreNotNullable=D.prototype.assertIteratedExprsAreNotNullable=b.prototype.assertIteratedExprsAreNotNullable=F.prototype.assertIteratedExprsAreNotNullable=Ce.prototype.assertIteratedExprsAreNotNullable=function(u){},U.prototype.assertIteratedExprsAreNotNullable=function(u){for(let r=0;r<this.terms.length;r++)this.terms[r].assertIteratedExprsAreNotNullable(u)},Q.prototype.assertIteratedExprsAreNotNullable=function(u){for(let r=0;r<this.factors.length;r++)this.factors[r].assertIteratedExprsAreNotNullable(u)},ae.prototype.assertIteratedExprsAreNotNullable=function(u){if(this.expr.assertIteratedExprsAreNotNullable(u),this.expr.isNullable(u))throw de(this,[])},ze.prototype.assertIteratedExprsAreNotNullable=be.prototype.assertIteratedExprsAreNotNullable=ye.prototype.assertIteratedExprsAreNotNullable=We.prototype.assertIteratedExprsAreNotNullable=function(u){this.expr.assertIteratedExprsAreNotNullable(u)},ie.prototype.assertIteratedExprsAreNotNullable=function(u){this.args.forEach(r=>{r.assertIteratedExprsAreNotNullable(u)})};class it{constructor(r){this.matchLength=r}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(r){if(this.children)return this.children[r]}indexOfChild(r){return this.children.indexOf(r)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(r){const o=this.indexOfChild(r);if(o<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(o===0)throw new Error("cannot get child before first child");return this.childAt(o-1)}childAfter(r){const o=this.indexOfChild(r);if(o<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(o===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(o+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class Ee extends it{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class et extends it{constructor(r,o,p,g){super(g),this.ruleName=r,this.children=o,this.childOffsets=p}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return I(this.ctorName)}isSyntactic(){return v(this.ctorName)}}class Nt extends it{constructor(r,o,p,g){super(p),this.children=r,this.childOffsets=o,this.optional=g}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}j.prototype.eval=t("eval"),L.eval=function(u){const{inputStream:r}=u,o=r.pos,p=r.nextCodePoint();return p!==void 0?(u.pushBinding(new Ee(String.fromCodePoint(p).length),o),!0):(u.processFailure(o,this),!1)},W.eval=function(u){const{inputStream:r}=u,o=r.pos;return r.atEnd()?(u.pushBinding(new Ee(0),o),!0):(u.processFailure(o,this),!1)},D.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos;return r.matchString(this.obj)?(u.pushBinding(new Ee(this.obj.length),o),!0):(u.processFailure(o,this),!1)},b.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos,p=this.matchCodePoint?r.nextCodePoint():r.nextCharCode();return p!==void 0&&this.from.codePointAt(0)<=p&&p<=this.to.codePointAt(0)?(u.pushBinding(new Ee(String.fromCodePoint(p).length),o),!0):(u.processFailure(o,this),!1)},F.prototype.eval=function(u){return u.eval(u.currentApplication().args[this.index])},We.prototype.eval=function(u){u.enterLexifiedContext();const r=u.eval(this.expr);return u.exitLexifiedContext(),r},U.prototype.eval=function(u){for(let r=0;r<this.terms.length;r++)if(u.eval(this.terms[r]))return!0;return!1},Q.prototype.eval=function(u){for(let r=0;r<this.factors.length;r++){const o=this.factors[r];if(!u.eval(o))return!1}return!0},ae.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos,p=this.getArity(),g=[],O=[];for(;g.length<p;)g.push([]),O.push([]);let M=0,ee=o,X;for(;M<this.maxNumMatches&&u.eval(this.expr);){if(r.pos===ee)throw de(this,u._applicationStack);ee=r.pos,M++;const le=u._bindings.splice(u._bindings.length-p,p),xe=u._bindingOffsets.splice(u._bindingOffsets.length-p,p);for(X=0;X<le.length;X++)g[X].push(le[X]),O[X].push(xe[X])}if(M<this.minNumMatches)return!1;let he=u.posToOffset(o),H=0;if(M>0){const le=g[p-1],xe=O[p-1],je=xe[xe.length-1]+le[le.length-1].matchLength;he=O[0][0],H=je-he}const V=this instanceof ze;for(X=0;X<g.length;X++)u._bindings.push(new Nt(g[X],O[X],H,V)),u._bindingOffsets.push(he);return!0},be.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos;u.pushFailuresInfo();const p=u.eval(this.expr);return u.popFailuresInfo(),p?(u.processFailure(o,this),!1):(r.pos=o,!0)},ye.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos;return u.eval(this.expr)?(r.pos=o,!0):!1},ie.prototype.eval=function(u){const r=u.currentApplication(),o=r?r.args:[],p=this.substituteParams(o),g=u.getCurrentPosInfo();if(g.isActive(p))return p.handleCycle(u);const O=p.toMemoKey(),M=g.memo[O];if(M&&g.shouldUseMemoizedResult(M)){if(u.hasNecessaryInfo(M))return u.useMemoizedResult(u.inputStream.pos,M);delete g.memo[O]}return p.reallyEval(u)},ie.prototype.handleCycle=function(u){const r=u.getCurrentPosInfo(),{currentLeftRecursion:o}=r,p=this.toMemoKey();let g=r.memo[p];return o&&o.headApplication.toMemoKey()===p?g.updateInvolvedApplicationMemoKeys():g||(g=r.memoize(p,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),r.startLeftRecursion(this,g)),u.useMemoizedResult(u.inputStream.pos,g)},ie.prototype.reallyEval=function(u){const{inputStream:r}=u,o=r.pos,p=u.getCurrentPosInfo(),g=u.grammar.rules[this.ruleName],{body:O}=g,{description:M}=g;u.enterApplication(p,this),M&&u.pushFailuresInfo();const ee=r.examinedLength;r.examinedLength=0;let X=this.evalOnce(O,u);const he=p.currentLeftRecursion,H=this.toMemoKey(),V=he&&he.headApplication.toMemoKey()===H;let le;u.doNotMemoize?u.doNotMemoize=!1:V?(X=this.growSeedResult(O,u,o,he,X),p.endLeftRecursion(),le=he,le.examinedLength=r.examinedLength-o,le.rightmostFailureOffset=u._getRightmostFailureOffset(),p.memoize(H,le)):(!he||!he.isInvolved(H))&&(le=p.memoize(H,{matchLength:r.pos-o,examinedLength:r.examinedLength-o,value:X,failuresAtRightmostPosition:u.cloneRecordedFailures(),rightmostFailureOffset:u._getRightmostFailureOffset()}));const xe=!!X;if(M&&(u.popFailuresInfo(),xe||u.processFailure(o,this),le&&(le.failuresAtRightmostPosition=u.cloneRecordedFailures())),u.isTracing()&&le){const je=u.getTraceEntry(o,this,xe,xe?[X]:[]);V&&(e(je.terminatingLREntry!=null||!xe),je.isHeadOfLeftRecursion=!0),le.traceEntry=je}return r.examinedLength=Math.max(r.examinedLength,ee),u.exitApplication(p,X),xe},ie.prototype.evalOnce=function(u,r){const{inputStream:o}=r,p=o.pos;if(r.eval(u)){const g=u.getArity(),O=r._bindings.splice(r._bindings.length-g,g),M=r._bindingOffsets.splice(r._bindingOffsets.length-g,g),ee=o.pos-p;return new et(this.ruleName,O,M,ee)}else return!1},ie.prototype.growSeedResult=function(u,r,o,p,g){if(!g)return!1;const{inputStream:O}=r;for(;;){if(p.matchLength=O.pos-o,p.value=g,p.failuresAtRightmostPosition=r.cloneRecordedFailures(),r.isTracing()){const M=r.trace[r.trace.length-1];p.traceEntry=new ke(r.input,o,O.pos,this,!0,[g],[M.clone()])}if(O.pos=o,g=this.evalOnce(u,r),O.pos-o<=p.matchLength)break;r.isTracing()&&r.trace.splice(-2,1)}return r.isTracing()&&p.traceEntry.recordLRTermination(r.trace.pop(),g),O.pos=o+p.matchLength,p.value},Ce.prototype.eval=function(u){const{inputStream:r}=u,o=r.pos,p=r.next();return p&&this.pattern.test(p)?(u.pushBinding(new Ee(p.length),o),!0):(u.processFailure(o,this),!1)},j.prototype.getArity=t("getArity"),L.getArity=W.getArity=D.prototype.getArity=b.prototype.getArity=F.prototype.getArity=ie.prototype.getArity=Ce.prototype.getArity=function(){return 1},U.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},Q.prototype.getArity=function(){let u=0;for(let r=0;r<this.factors.length;r++)u+=this.factors[r].getArity();return u},ae.prototype.getArity=function(){return this.expr.getArity()},be.prototype.getArity=function(){return 0},ye.prototype.getArity=We.prototype.getArity=function(){return this.expr.getArity()};function Ve(u,r){const o={};if(u.source&&r){const p=u.source.relativeTo(r);o.sourceInterval=[p.startIdx,p.endIdx]}return o}j.prototype.outputRecipe=t("outputRecipe"),L.outputRecipe=function(u,r){return["any",Ve(this,r)]},W.outputRecipe=function(u,r){return["end",Ve(this,r)]},D.prototype.outputRecipe=function(u,r){return["terminal",Ve(this,r),this.obj]},b.prototype.outputRecipe=function(u,r){return["range",Ve(this,r),this.from,this.to]},F.prototype.outputRecipe=function(u,r){return["param",Ve(this,r),this.index]},U.prototype.outputRecipe=function(u,r){return["alt",Ve(this,r)].concat(this.terms.map(o=>o.outputRecipe(u,r)))},se.prototype.outputRecipe=function(u,r){return this.terms[0].outputRecipe(u,r)},ve.prototype.outputRecipe=function(u,r){const o=this.terms.slice(0,this.expansionPos),p=this.terms.slice(this.expansionPos+1);return["splice",Ve(this,r),o.map(g=>g.outputRecipe(u,r)),p.map(g=>g.outputRecipe(u,r))]},Q.prototype.outputRecipe=function(u,r){return["seq",Ve(this,r)].concat(this.factors.map(o=>o.outputRecipe(u,r)))},pe.prototype.outputRecipe=Se.prototype.outputRecipe=ze.prototype.outputRecipe=be.prototype.outputRecipe=ye.prototype.outputRecipe=We.prototype.outputRecipe=function(u,r){return[this.constructor.name.toLowerCase(),Ve(this,r),this.expr.outputRecipe(u,r)]},ie.prototype.outputRecipe=function(u,r){return["app",Ve(this,r),this.ruleName,this.args.map(o=>o.outputRecipe(u,r))]},Ce.prototype.outputRecipe=function(u,r){return["unicodeChar",Ve(this,r),this.category]},j.prototype.introduceParams=t("introduceParams"),L.introduceParams=W.introduceParams=D.prototype.introduceParams=b.prototype.introduceParams=F.prototype.introduceParams=Ce.prototype.introduceParams=function(u){return this},U.prototype.introduceParams=function(u){return this.terms.forEach((r,o,p)=>{p[o]=r.introduceParams(u)}),this},Q.prototype.introduceParams=function(u){return this.factors.forEach((r,o,p)=>{p[o]=r.introduceParams(u)}),this},ae.prototype.introduceParams=be.prototype.introduceParams=ye.prototype.introduceParams=We.prototype.introduceParams=function(u){return this.expr=this.expr.introduceParams(u),this},ie.prototype.introduceParams=function(u){const r=u.indexOf(this.ruleName);if(r>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new F(r).withSource(this.source)}else return this.args.forEach((o,p,g)=>{g[p]=o.introduceParams(u)}),this},j.prototype.isNullable=function(u){return this._isNullable(u,Object.create(null))},j.prototype._isNullable=t("_isNullable"),L._isNullable=b.prototype._isNullable=F.prototype._isNullable=Se.prototype._isNullable=Ce.prototype._isNullable=function(u,r){return!1},W._isNullable=function(u,r){return!0},D.prototype._isNullable=function(u,r){return typeof this.obj=="string"?this.obj==="":!1},U.prototype._isNullable=function(u,r){return this.terms.length===0||this.terms.some(o=>o._isNullable(u,r))},Q.prototype._isNullable=function(u,r){return this.factors.every(o=>o._isNullable(u,r))},pe.prototype._isNullable=ze.prototype._isNullable=be.prototype._isNullable=ye.prototype._isNullable=function(u,r){return!0},We.prototype._isNullable=function(u,r){return this.expr._isNullable(u,r)},ie.prototype._isNullable=function(u,r){const o=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(r,o)){const{body:p}=u.rules[this.ruleName],g=p.substituteParams(this.args);r[o]=!1,r[o]=g._isNullable(u,r)}return r[o]},j.prototype.substituteParams=t("substituteParams"),L.substituteParams=W.substituteParams=D.prototype.substituteParams=b.prototype.substituteParams=Ce.prototype.substituteParams=function(u){return this},F.prototype.substituteParams=function(u){return u[this.index]},U.prototype.substituteParams=function(u){return new U(this.terms.map(r=>r.substituteParams(u)))},Q.prototype.substituteParams=function(u){return new Q(this.factors.map(r=>r.substituteParams(u)))},ae.prototype.substituteParams=be.prototype.substituteParams=ye.prototype.substituteParams=We.prototype.substituteParams=function(u){return new this.constructor(this.expr.substituteParams(u))},ie.prototype.substituteParams=function(u){if(this.args.length===0)return this;{const r=this.args.map(o=>o.substituteParams(u));return new ie(this.ruleName,r)}};function mn(u){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(u)}function Qe(u){const r=Object.create(null);u.forEach(o=>{r[o]=(r[o]||0)+1}),Object.keys(r).forEach(o=>{if(r[o]<=1)return;let p=1;u.forEach((g,O)=>{g===o&&(u[O]=g+"_"+p++)})})}j.prototype.toArgumentNameList=t("toArgumentNameList"),L.toArgumentNameList=function(u,r){return["any"]},W.toArgumentNameList=function(u,r){return["end"]},D.prototype.toArgumentNameList=function(u,r){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+u]},b.prototype.toArgumentNameList=function(u,r){let o=this.from+"_to_"+this.to;return mn(o)||(o="_"+o),mn(o)||(o="$"+u),[o]},U.prototype.toArgumentNameList=function(u,r){const o=this.terms.map(O=>O.toArgumentNameList(u,!0)),p=[],g=o[0].length;for(let O=0;O<g;O++){const M=[];for(let X=0;X<this.terms.length;X++)M.push(o[X][O]);const ee=w(M);p.push(ee.join("_or_"))}return r||Qe(p),p},Q.prototype.toArgumentNameList=function(u,r){let o=[];return this.factors.forEach(p=>{const g=p.toArgumentNameList(u,!0);o=o.concat(g),u+=g.length}),r||Qe(o),o},ae.prototype.toArgumentNameList=function(u,r){const o=this.expr.toArgumentNameList(u,r).map(p=>p[p.length-1]==="s"?p+"es":p+"s");return r||Qe(o),o},ze.prototype.toArgumentNameList=function(u,r){return this.expr.toArgumentNameList(u,r).map(o=>"opt"+o[0].toUpperCase()+o.slice(1))},be.prototype.toArgumentNameList=function(u,r){return[]},ye.prototype.toArgumentNameList=We.prototype.toArgumentNameList=function(u,r){return this.expr.toArgumentNameList(u,r)},ie.prototype.toArgumentNameList=function(u,r){return[this.ruleName]},Ce.prototype.toArgumentNameList=function(u,r){return["$"+u]},F.prototype.toArgumentNameList=function(u,r){return["param"+this.index]},j.prototype.toDisplayString=t("toDisplayString"),U.prototype.toDisplayString=Q.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},L.toDisplayString=W.toDisplayString=ae.prototype.toDisplayString=be.prototype.toDisplayString=ye.prototype.toDisplayString=We.prototype.toDisplayString=D.prototype.toDisplayString=b.prototype.toDisplayString=F.prototype.toDisplayString=function(){return this.toString()},ie.prototype.toDisplayString=function(){if(this.args.length>0){const u=this.args.map(r=>r.toDisplayString());return this.ruleName+"<"+u.join(",")+">"}else return this.ruleName},Ce.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function Cn(u){return u==="description"||u==="string"||u==="code"}class st{constructor(r,o,p){if(!Cn(p))throw new Error("invalid Failure type: "+p);this.pexpr=r,this.text=o,this.type=p,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(r){return this.getText()===r.getText()&&this.type===r.type&&(!this.isFluffy()||this.isFluffy()&&r.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const r=new st(this.pexpr,this.text,this.type);return this.isFluffy()&&r.makeFluffy(),r}toKey(){return this.toString()+"#"+this.type}}j.prototype.toFailure=t("toFailure"),L.toFailure=function(u){return new st(this,"any object","description")},W.toFailure=function(u){return new st(this,"end of input","description")},D.prototype.toFailure=function(u){return new st(this,this.obj,"string")},b.prototype.toFailure=function(u){return new st(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},be.prototype.toFailure=function(u){const r=this.expr===L?"nothing":"not "+this.expr.toFailure(u);return new st(this,r,"description")},ye.prototype.toFailure=function(u){return this.expr.toFailure(u)},ie.prototype.toFailure=function(u){let{description:r}=u.rules[this.ruleName];return r||(r=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new st(this,r,"description")},Ce.prototype.toFailure=function(u){return new st(this,"a Unicode ["+this.category+"] character","description")},U.prototype.toFailure=function(u){const o="("+this.terms.map(p=>p.toFailure(u)).join(" or ")+")";return new st(this,o,"description")},Q.prototype.toFailure=function(u){const o="("+this.factors.map(p=>p.toFailure(u)).join(" ")+")";return new st(this,o,"description")},ae.prototype.toFailure=function(u){const r="("+this.expr.toFailure(u)+this.operator+")";return new st(this,r,"description")},j.prototype.toString=t("toString"),L.toString=function(){return"any"},W.toString=function(){return"end"},D.prototype.toString=function(){return JSON.stringify(this.obj)},b.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},F.prototype.toString=function(){return"$"+this.index},We.prototype.toString=function(){return"#("+this.expr.toString()+")"},U.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(u=>u.toString()).join(" | ")+")"},Q.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(u=>u.toString()).join(" ")+")"},ae.prototype.toString=function(){return this.expr+this.operator},be.prototype.toString=function(){return"~"+this.expr},ye.prototype.toString=function(){return"&"+this.expr},ie.prototype.toString=function(){if(this.args.length>0){const u=this.args.map(r=>r.toString());return this.ruleName+"<"+u.join(",")+">"}else return this.ruleName},Ce.prototype.toString=function(){return"\\p{"+this.category+"}"};class Qt extends j{constructor(r){super(),this.obj=r}_getString(r){const o=r.currentApplication().args[this.obj.index];return e(o instanceof D,"expected a Terminal expression"),o.obj}allowsSkippingPrecedingSpace(){return!0}eval(r){const{inputStream:o}=r,p=o.pos,g=this._getString(r);return o.matchString(g,!0)?(r.pushBinding(new Ee(g.length),p),!0):(r.processFailure(p,this),!1)}getArity(){return 1}substituteParams(r){return new Qt(this.obj.substituteParams(r))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(r){return new st(this,this.obj.toFailure(r)+" (case-insensitive)","description")}_isNullable(r,o){return this.obj._isNullable(r,o)}}var mi=Object.freeze({__proto__:null,CaseInsensitiveTerminal:Qt,PExpr:j,any:L,end:W,Terminal:D,Range:b,Param:F,Alt:U,Extend:se,Splice:ve,Seq:Q,Iter:ae,Star:pe,Plus:Se,Opt:ze,Not:be,Lookahead:ye,Lex:We,Apply:ie,UnicodeChar:Ce});let Nr;Zt(u=>{Nr=u.rules.applySyntactic.body});const lr=new ie("spaces");class $r{constructor(r,o,p){this.matcher=r,this.startExpr=o,this.grammar=r.grammar,this.input=r.getInput(),this.inputStream=new $e(this.input),this.memoTable=r._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],p!==void 0&&(this.positionToRecordFailures=p,this.recordedFailures=Object.create(null))}posToOffset(r){return r-this._posStack[this._posStack.length-1]}enterApplication(r,o){this._posStack.push(this.inputStream.pos),this._applicationStack.push(o),this.inLexifiedContextStack.push(!1),r.enter(o),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(r,o){const p=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),r.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),o&&this.pushBinding(o,p)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const r=this.currentApplication();return r?r.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(lr),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(r){return r.allowsSkippingPrecedingSpace()&&r!==lr?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(r,o){this._bindings.push(r),this._bindingOffsets.push(this.posToOffset(o))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(r){for(;this._bindings.length>r;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(r){let o=this.memoTable[r];return o||(o=this.memoTable[r]=new k),o}processFailure(r,o){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,r),this.recordedFailures&&r===this.positionToRecordFailures){const p=this.currentApplication();p&&(o=o.substituteParams(p.args)),this.recordFailure(o.toFailure(this.grammar),!1)}}recordFailure(r,o){const p=r.toKey();this.recordedFailures[p]?this.recordedFailures[p].isFluffy()&&!r.isFluffy()&&this.recordedFailures[p].clearFluffy():this.recordedFailures[p]=o?r.clone():r}recordFailures(r,o){Object.keys(r).forEach(p=>{this.recordFailure(r[p],o)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const r=Object.create(null);return Object.keys(this.recordedFailures).forEach(o=>{r[o]=this.recordedFailures[o].clone()}),r}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(r,o){const p=this.memoTable[r];if(p&&o instanceof ie){const g=p.memo[o.toMemoKey()];if(g&&g.traceEntry){const O=g.traceEntry.cloneWithExpr(o);return O.isMemoized=!0,O}}return null}getTraceEntry(r,o,p,g){if(o instanceof ie){const O=this.currentApplication(),M=O?O.args:[];o=o.substituteParams(M)}return this.getMemoizedTraceEntry(r,o)||new ke(this.input,r,this.inputStream.pos,o,p,g,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(r){return this.trace&&!r.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+r.rightmostFailureOffset===this.positionToRecordFailures?!!r.failuresAtRightmostPosition:!0}useMemoizedResult(r,o){this.trace&&this.trace.push(o.traceEntry);const p=this.inputStream.pos+o.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,p),this.recordedFailures&&this.positionToRecordFailures===p&&o.failuresAtRightmostPosition&&this.recordFailures(o.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,o.examinedLength+r),o.value?(this.inputStream.pos+=o.matchLength,this.pushBinding(o.value,r),!0):!1}eval(r){const{inputStream:o}=this,p=this._bindings.length,g=this.userData;let O;this.recordedFailures&&(O=this.recordedFailures,this.recordedFailures=Object.create(null));const M=o.pos,ee=this.maybeSkipSpacesBefore(r);let X;this.trace&&(X=this.trace,this.trace=[]);const he=r.eval(this);if(this.trace){const H=this._bindings.slice(p),V=this.getTraceEntry(ee,r,he,H);V.isImplicitSpaces=r===lr,V.isRootNode=r===this.startExpr,X.push(V),this.trace=X}return he?this.recordedFailures&&o.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(H=>{this.recordedFailures[H].makeFluffy()}):(o.pos=M,this.truncateBindings(p),this.userData=g),this.recordedFailures&&this.recordFailures(O,!1),r===Nr&&this.skipSpaces(),he}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let r;this.recordedFailures&&(r=Object.keys(this.recordedFailures).map(p=>this.recordedFailures[p]));const o=this._bindings[0];return o&&(o.grammar=this.grammar),new f(this.matcher,this.input,this.startExpr,o,this._bindingOffsets[0],this.rightmostFailurePosition,r)}getTrace(){this.trace=[];const r=this.getMatchResult(),o=this.trace[this.trace.length-1];return o.result=r,o}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Ae{constructor(r){this.grammar=r,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(r){return this._input!==r&&this.replaceInputRange(0,this._input.length,r),this}replaceInputRange(r,o,p){const g=this._input,O=this._memoTable;if(r<0||r>g.length||o<0||o>g.length||r>o)throw new Error("Invalid indices: "+r+" and "+o);this._input=g.slice(0,r)+p+g.slice(o),this._input!==g&&O.length>0&&(this._isMemoTableStale=!0);const M=O.slice(o);O.length=r;for(let ee=0;ee<p.length;ee++)O.push(void 0);for(const ee of M)O.push(ee);for(let ee=0;ee<r;ee++){const X=O[ee];X&&X.clearObsoleteEntries(ee,r)}return this}match(r,o={incremental:!0}){return this._match(this._getStartExpr(r),{incremental:o.incremental,tracing:!1})}trace(r,o={incremental:!0}){return this._match(this._getStartExpr(r),{incremental:o.incremental,tracing:!0})}_match(r,o={}){const p={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...o};if(!p.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Ge(this.grammar);const g=new $r(this,r,p.positionToRecordFailures);return p.tracing?g.getTrace():g.getMatchResult()}_getStartExpr(r){const o=r||this.grammar.defaultStartRule;if(!o)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const p=this.grammar.parseApplication(o);return new Q([p,W])}}const at=[],gn=(u,r)=>Object.prototype.hasOwnProperty.call(u,r);class cr{constructor(r,o,p){this._node=r,this.source=o,this._baseInterval=p,r.isNonterminal()&&e(o===p),this._childWrappers=[]}_forgetMemoizedResultFor(r){delete this._node[this._semantics.attributeKeys[r]],this.children.forEach(o=>{o._forgetMemoizedResultFor(r)})}child(r){if(!(0<=r&&r<this._node.numChildren()))return;let o=this._childWrappers[r];if(!o){const p=this._node.childAt(r),g=this._node.childOffsets[r],O=this._baseInterval.subInterval(g,p.matchLength),M=p.isNonterminal()?O:this._baseInterval;o=this._childWrappers[r]=this._semantics.wrap(p,O,M)}return o}_children(){for(let r=0;r<this._node.numChildren();r++)this.child(r);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(r){const o=r||[],p=o.map(M=>M._node),g=new Nt(p,[],-1,!1),O=this._semantics.wrap(g,null,null);return O._childWrappers=o,O}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class Ct{constructor(r,o){const p=this;if(this.grammar=r,this.checkedActionDicts=!1,this.Wrapper=class extends(o?o.Wrapper:cr){constructor(g,O,M){super(g,O,M),p.checkActionDictsIfHaventAlready(),this._semantics=p}toString(){return"[semantics wrapper for "+p.grammar.name+"]"}},this.super=o,o){if(!(r.equals(this.super.grammar)||r._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+r.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const g in this.attributes)Object.defineProperty(this.attributeKeys,g,{value:qt(g)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let r;for(r in this.operations)this.operations[r].checkActionDict(this.grammar);for(r in this.attributes)this.attributes[r].checkActionDict(this.grammar)}toRecipe(r){function o(g){return g.super!==Ct.BuiltInSemantics._getSemantics()}let p=`(function(g) {
`;if(o(this)){p+="  var semantics = "+this.super.toRecipe(!0)+"(g";const g=this.super.grammar;let O=this.grammar;for(;O!==g;)p+=".superGrammar",O=O.superGrammar;p+=`);
`,p+="  return g.extendSemantics(semantics)"}else p+="  return g.createSemantics()";return["Operation","Attribute"].forEach(g=>{const O=this[g.toLowerCase()+"s"];Object.keys(O).forEach(M=>{const{actionDict:ee,formals:X,builtInDefault:he}=O[M];let H=M;X.length>0&&(H+="("+X.join(", ")+")");let V;o(this)&&this.super[g.toLowerCase()+"s"][M]?V="extend"+g:V="add"+g,p+=`
    .`+V+"("+JSON.stringify(H)+", {";const le=[];Object.keys(ee).forEach(xe=>{if(ee[xe]!==he){let je=ee[xe].toString().trim();je=je.replace(/^.*\(/,"function("),le.push(`
      `+JSON.stringify(xe)+": "+je)}}),p+=le.join(",")+`
    })`})}),p+=`;
  })`,r||(p=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+p+`(grammar);
  return semantics;
});
`),p}addOperationOrAttribute(r,o,p){const g=r+"s",O=On(o,r),{name:M}=O,{formals:ee}=O;this.assertNewName(M,r);const X=Kn(r,M,V),he={_default:X};Object.keys(p).forEach(le=>{he[le]=p[le]});const H=r==="operation"?new we(M,ee,he,X):new Ke(M,he,X);H.checkActionDict(this.grammar),this[g][M]=H;function V(...le){const xe=this._semantics[g][M];if(arguments.length!==xe.formals.length)throw new Error("Invalid number of arguments passed to "+M+" "+r+" (expected "+xe.formals.length+", got "+arguments.length+")");const je=Object.create(null);for(const[Rn,ur]of Object.entries(le)){const Va=xe.formals[Rn];je[Va]=ur}const yt=this.args;this.args=je;const At=xe.execute(this._semantics,this);return this.args=yt,At}r==="operation"?(this.Wrapper.prototype[M]=V,this.Wrapper.prototype[M].toString=function(){return"["+M+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,M,{get:V,configurable:!0}),Object.defineProperty(this.attributeKeys,M,{value:qt(M)}))}extendOperationOrAttribute(r,o,p){const g=r+"s";if(On(o,"attribute"),!(this.super&&o in this.super[g]))throw new Error("Cannot extend "+r+" '"+o+"': did not inherit an "+r+" with that name");if(gn(this[g],o))throw new Error("Cannot extend "+r+" '"+o+"' again");const O=this[g][o].formals,M=this[g][o].actionDict,ee=Object.create(M);Object.keys(p).forEach(X=>{ee[X]=p[X]}),this[g][o]=r==="operation"?new we(o,O,ee):new Ke(o,ee),this[g][o].checkActionDict(this.grammar)}assertNewName(r,o){if(gn(cr.prototype,r))throw new Error("Cannot add "+o+" '"+r+"': that's a reserved name");if(r in this.operations)throw new Error("Cannot add "+o+" '"+r+"': an operation with that name already exists");if(r in this.attributes)throw new Error("Cannot add "+o+" '"+r+"': an attribute with that name already exists")}wrap(r,o,p){const g=p||o;return r instanceof this.Wrapper?r:new this.Wrapper(r,o,g)}}function On(u,r){if(!Ct.prototypeGrammar)return e(u.indexOf("(")===-1),{name:u,formals:[]};const o=Ct.prototypeGrammar.match(u,r==="operation"?"OperationSignature":"AttributeSignature");if(o.failed())throw new Error(o.message);return Ct.prototypeGrammarSemantics(o).parse()}function Kn(u,r,o){return function(...p){const O=(this._semantics.operations[r]||this._semantics.attributes[r]).formals.map(M=>this.args[M]);if(!this.isIteration()&&p.length===1)return o.apply(p[0],O);throw bt(this.ctorName,r,u,at)}}Ct.createSemantics=function(u,r){const o=new Ct(u,r!==void 0?r:Ct.BuiltInSemantics._getSemantics()),p=function(O){if(!(O instanceof f))throw new TypeError("Semantics expected a MatchResult, but got "+N(O));if(O.failed())throw new TypeError("cannot apply Semantics to "+O.toString());const M=O._cst;if(M.grammar!==u)throw new Error("Cannot use a MatchResult from grammar '"+M.grammar.name+"' with a semantics for '"+u.name+"'");const ee=new $e(O.input);return o.wrap(M,ee.interval(O._cstOffset,O.input.length))};return p.addOperation=function(g,O){return o.addOperationOrAttribute("operation",g,O),p},p.extendOperation=function(g,O){return o.extendOperationOrAttribute("operation",g,O),p},p.addAttribute=function(g,O){return o.addOperationOrAttribute("attribute",g,O),p},p.extendAttribute=function(g,O){return o.extendOperationOrAttribute("attribute",g,O),p},p._getActionDict=function(g){const O=o.operations[g]||o.attributes[g];if(!O)throw new Error('"'+g+'" is not a valid operation or attribute name in this semantics for "'+u.name+'"');return O.actionDict},p._remove=function(g){let O;return g in o.operations?(O=o.operations[g],delete o.operations[g]):g in o.attributes&&(O=o.attributes[g],delete o.attributes[g]),delete o.Wrapper.prototype[g],O},p.getOperationNames=function(){return Object.keys(o.operations)},p.getAttributeNames=function(){return Object.keys(o.attributes)},p.getGrammar=function(){return o.grammar},p.toRecipe=function(g){return o.toRecipe(g)},p.toString=o.toString.bind(o),p._getSemantics=function(){return o},p};class we{constructor(r,o,p,g){this.name=r,this.formals=o,this.actionDict=p,this.builtInDefault=g}checkActionDict(r){r._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(r,o){try{const{ctorName:p}=o._node;let g=this.actionDict[p];return g?(at.push([this,p]),g.apply(o,o._children())):o.isNonterminal()&&(g=this.actionDict._nonterminal,g)?(at.push([this,"_nonterminal",p]),g.apply(o,o._children())):(at.push([this,"default action",p]),this.actionDict._default.apply(o,o._children()))}finally{at.pop()}}}we.prototype.typeName="operation";class Ke extends we{constructor(r,o,p){super(r,[],o,p)}execute(r,o){const p=o._node,g=r.attributeKeys[this.name];return gn(p,g)||(p[g]=we.prototype.execute.call(this,r,o)),p[g]}}Ke.prototype.typeName="attribute";const vt=["_iter","_terminal","_nonterminal","_default"];function Ye(u){return Object.keys(u.rules).sort().map(r=>u.rules[r])}const Ot=u=>u.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let Xt,kt;class rt{constructor(r,o,p,g){if(this.name=r,this.superGrammar=o,this.rules=p,g){if(!(g in p))throw new Error("Invalid start rule: '"+g+"' is not a rule in grammar '"+r+"'");this.defaultStartRule=g}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Ae(this)}isBuiltIn(){return this===rt.ProtoBuiltInRules||this===rt.BuiltInRules}equals(r){if(this===r)return!0;if(r==null||this.name!==r.name||this.defaultStartRule!==r.defaultStartRule||!(this.superGrammar===r.superGrammar||this.superGrammar.equals(r.superGrammar)))return!1;const o=Ye(this),p=Ye(r);return o.length===p.length&&o.every((g,O)=>g.description===p[O].description&&g.formals.join(",")===p[O].formals.join(",")&&g.body.toString()===p[O].body.toString())}match(r,o){const p=this.matcher();return p.replaceInputRange(0,0,r),p.match(o)}trace(r,o){const p=this.matcher();return p.replaceInputRange(0,0,r),p.trace(o)}createSemantics(){return Ct.createSemantics(this)}extendSemantics(r){return Ct.createSemantics(this,r._getSemantics())}_checkTopDownActionDict(r,o,p){const g=[];for(const O in p){const M=p[O];if(!vt.includes(O)&&!(O in this.rules)){g.push(`'${O}' is not a valid semantic action for '${this.name}'`);continue}if(typeof M!="function"){g.push(`'${O}' must be a function in an action dictionary for '${this.name}'`);continue}const X=M.length,he=this._topDownActionArity(O);if(X!==he){let H;O==="_iter"||O==="_nonterminal"?H=`it should use a rest parameter, e.g. \`${O}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:H=`expected ${he}, got ${X}`,g.push(`Semantic action '${O}' has the wrong arity: ${H}`)}}if(g.length>0){const O=g.map(ee=>"- "+ee),M=new Error([`Found errors in the action dictionary of the '${o}' ${r}:`,...O].join(`
`));throw M.problems=g,M}}_topDownActionArity(r){return vt.includes(r)?0:this.rules[r].body.getArity()}_inheritsFrom(r){let o=this.superGrammar;for(;o;){if(o.equals(r,!0))return!0;o=o.superGrammar}return!1}toRecipe(r=void 0){const o={};this.source&&(o.source=this.source.contents);let p=null;this.defaultStartRule&&(p=this.defaultStartRule);const g={};Object.keys(this.rules).forEach(ee=>{const X=this.rules[ee],{body:he}=X,H=!this.superGrammar||!this.superGrammar.rules[ee];let V;H?V="define":V=he instanceof se?"extend":"override";const le={};if(X.source&&this.source){const yt=X.source.relativeTo(this.source);le.sourceInterval=[yt.startIdx,yt.endIdx]}const xe=H?X.description:null,je=he.outputRecipe(X.formals,this.source);g[ee]=[V,le,xe,X.formals,je]});let O="null";r?O=r:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(O=this.superGrammar.toRecipe());const M=[...["grammar",o,this.name].map(JSON.stringify),O,...[p,g].map(JSON.stringify)];return Ot(`[${M.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const r=new y;r.append("{");let o=!0;for(const p in this.rules){const{body:g}=this.rules[p];o?o=!1:r.append(","),r.append(`
`),r.append("  "),this.addSemanticActionTemplate(p,g,r)}return r.append(`
}`),r.contents()}addSemanticActionTemplate(r,o,p){p.append(r),p.append(": function(");const g=this._topDownActionArity(r);p.append(a("_",g).join(", ")),p.append(`) {
`),p.append("  }")}parseApplication(r){let o;if(r.indexOf("<")===-1)o=new ie(r);else{const g=Xt.match(r,"Base_application");o=kt(g,{})}if(!(o.ruleName in this.rules))throw Re(o.ruleName,this.name);const{formals:p}=this.rules[o.ruleName];if(p.length!==o.args.length){const{source:g}=this.rules[o.ruleName];throw Y(o.ruleName,p.length,o.args.length,g)}return o}_setUpMatchState(r){this._matchStateInitializer&&this._matchStateInitializer(r)}}rt.ProtoBuiltInRules=new rt("ProtoBuiltInRules",void 0,{any:{body:L,formals:[],description:"any character",primitive:!0},end:{body:W,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new Qt(new F(0)),formals:["str"],primitive:!0},lower:{body:new Ce("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new Ce("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new Ce("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new pe(new ie("space")),formals:[]},space:{body:new b("\0"," "),formals:[],description:"a space"}}),rt.initApplicationParser=function(u,r){Xt=u,kt=r};class Tt{constructor(r){this.name=r}sourceInterval(r,o){return this.source.subInterval(r,o-r)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?rt.ProtoBuiltInRules:rt.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(r,o){const p=this.ensureSuperGrammar().rules[r];if(!p)throw P(r,this.superGrammar.name,o);return p}installOverriddenOrExtendedRule(r,o,p,g){const O=h(o);if(O.length>0)throw J(r,O,g);const M=this.ensureSuperGrammar().rules[r],ee=M.formals,X=ee?ee.length:0;if(o.length!==X)throw Y(r,X,o.length,g);return this.install(r,o,p,M.description,g)}install(r,o,p,g,O,M=!1){return this.rules[r]={body:p.introduceParams(o),formals:o,description:g,source:O,primitive:M},this}withSuperGrammar(r){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=r,this.rules=Object.create(r.rules),r.isBuiltIn()||(this.defaultStartRule=r.defaultStartRule),this}withDefaultStartRule(r){return this.defaultStartRule=r,this}withSource(r){return this.source=new $e(r).interval(0,r.length),this}build(){const r=new rt(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);r._matchStateInitializer=r.superGrammar._matchStateInitializer,r.supportsIncrementalParsing=r.superGrammar.supportsIncrementalParsing;const o=[];let p=!1;return Object.keys(r.rules).forEach(g=>{const{body:O}=r.rules[g];try{O.assertChoicesHaveUniformArity(g)}catch(M){o.push(M)}try{O.assertAllApplicationsAreValid(g,r)}catch(M){o.push(M),p=!0}}),p||Object.keys(r.rules).forEach(g=>{const{body:O}=r.rules[g];try{O.assertIteratedExprsAreNotNullable(r,[])}catch(M){o.push(M)}}),o.length>0&&lt(o),this.source&&(r.source=this.source),r}define(r,o,p,g,O,M){if(this.ensureSuperGrammar(),this.superGrammar.rules[r])throw R(r,this.name,this.superGrammar.name,O);if(this.rules[r])throw R(r,this.name,this.name,O);const ee=h(o);if(ee.length>0)throw J(r,ee,O);return this.install(r,o,p,g,O,M)}override(r,o,p,g,O){return this.ensureSuperGrammarRuleForOverriding(r,O),this.installOverriddenOrExtendedRule(r,o,p,O),this}extend(r,o,p,g,O){if(!this.ensureSuperGrammar().rules[r])throw q(r,this.superGrammar.name,O);const ee=new se(this.superGrammar,r,p);return ee.source=p.source,this.installOverriddenOrExtendedRule(r,o,ee,O),this}}class Pt{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(r){return new Tt(r)}grammar(r,o,p,g,O){const M=new Tt(o);return p&&M.withSuperGrammar(p instanceof rt?p:this.fromRecipe(p)),g&&M.withDefaultStartRule(g),r&&r.source&&M.withSource(r.source),this.currentDecl=M,Object.keys(O).forEach(ee=>{this.currentRuleName=ee;const X=O[ee],he=X[0],H=X[1],V=X[2],le=X[3],xe=this.fromRecipe(X[4]);let je;M.source&&H&&H.sourceInterval&&(je=M.source.subInterval(H.sourceInterval[0],H.sourceInterval[1]-H.sourceInterval[0])),M[he](ee,le,xe,V,je)}),this.currentRuleName=this.currentDecl=null,M.build()}terminal(r){return new D(r)}range(r,o){return new b(r,o)}param(r){return new F(r)}alt(...r){let o=[];for(let p of r)p instanceof j||(p=this.fromRecipe(p)),p instanceof U?o=o.concat(p.terms):o.push(p);return o.length===1?o[0]:new U(o)}seq(...r){let o=[];for(let p of r)p instanceof j||(p=this.fromRecipe(p)),p instanceof Q?o=o.concat(p.factors):o.push(p);return o.length===1?o[0]:new Q(o)}star(r){return r instanceof j||(r=this.fromRecipe(r)),new pe(r)}plus(r){return r instanceof j||(r=this.fromRecipe(r)),new Se(r)}opt(r){return r instanceof j||(r=this.fromRecipe(r)),new ze(r)}not(r){return r instanceof j||(r=this.fromRecipe(r)),new be(r)}lookahead(r){return r instanceof j||(r=this.fromRecipe(r)),new ye(r)}lex(r){return r instanceof j||(r=this.fromRecipe(r)),new We(r)}app(r,o){return o&&o.length>0&&(o=o.map(function(p){return p instanceof j?p:this.fromRecipe(p)},this)),new ie(r,o)}splice(r,o){return new ve(this.currentDecl.superGrammar,this.currentRuleName,r.map(p=>this.fromRecipe(p)),o.map(p=>this.fromRecipe(p)))}fromRecipe(r){const o=r[0]==="grammar"?r.slice(1):r.slice(2),p=this[r[0]](...o),g=r[1];return g&&g.sourceInterval&&this.currentDecl&&p.withSource(this.currentDecl.sourceInterval(...g.sourceInterval)),p}}function tt(u){return typeof u=="function"?u.call(new Pt):(typeof u=="string"&&(u=JSON.parse(u)),new Pt().fromRecipe(u))}var St=tt(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);rt.BuiltInRules=St,oe(rt.BuiltInRules);var Tn=tt(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const ct=Object.create(j.prototype);function Pn(u,r){for(const o in u)if(o===r)return!0;return!1}function vn(u,r,o){const p=new Pt;let g,O,M,ee=!1;return(o||Tn).createSemantics().addOperation("visit",{Grammars(H){return H.children.map(V=>V.visit())},Grammar(H,V,le,xe,je){const yt=H.visit();g=p.newGrammar(yt),V.child(0)&&V.child(0).visit(),xe.children.map(Rn=>Rn.visit());const At=g.build();if(At.source=this.source.trimmed(),Pn(r,yt))throw _e(At);return r[yt]=At,At},SuperGrammar(H,V){const le=V.visit();if(le==="null")g.withSuperGrammar(null);else{if(!r||!Pn(r,le))throw ce(le,r,V.source);g.withSuperGrammar(r[le])}},Rule_define(H,V,le,xe,je){O=H.visit(),M=V.children.map(ur=>ur.visit())[0]||[],!g.defaultStartRule&&g.ensureSuperGrammar()!==rt.ProtoBuiltInRules&&g.withDefaultStartRule(O);const yt=je.visit(),At=le.children.map(ur=>ur.visit())[0],Rn=this.source.trimmed();return g.define(O,M,yt,At,Rn)},Rule_override(H,V,le,xe){O=H.visit(),M=V.children.map(At=>At.visit())[0]||[];const je=this.source.trimmed();g.ensureSuperGrammarRuleForOverriding(O,je),ee=!0;const yt=xe.visit();return ee=!1,g.override(O,M,yt,null,je)},Rule_extend(H,V,le,xe){O=H.visit(),M=V.children.map(At=>At.visit())[0]||[];const je=xe.visit(),yt=this.source.trimmed();return g.extend(O,M,je,null,yt)},RuleBody(H,V){return p.alt(...V.visit()).withSource(this.source)},OverrideRuleBody(H,V){const le=V.visit(),xe=le.indexOf(ct);if(xe>=0){const je=le.slice(0,xe),yt=le.slice(xe+1);return yt.forEach(At=>{if(At===ct)throw Ie(At)}),new ve(g.superGrammar,O,je,yt).withSource(this.source)}else return p.alt(...le).withSource(this.source)},Formals(H,V,le){return V.visit()},Params(H,V,le){return V.visit()},Alt(H){return p.alt(...H.visit()).withSource(this.source)},TopLevelTerm_inline(H,V){const le=O+"_"+V.visit(),xe=H.visit(),je=this.source.trimmed(),yt=!(g.superGrammar&&g.superGrammar.rules[le]);ee&&!yt?g.override(le,M,xe,null,je):g.define(le,M,xe,null,je);const At=M.map(Rn=>p.app(Rn));return p.app(le,At).withSource(xe.source)},OverrideTopLevelTerm_superSplice(H){return ct},Seq(H){return p.seq(...H.children.map(V=>V.visit())).withSource(this.source)},Iter_star(H,V){return p.star(H.visit()).withSource(this.source)},Iter_plus(H,V){return p.plus(H.visit()).withSource(this.source)},Iter_opt(H,V){return p.opt(H.visit()).withSource(this.source)},Pred_not(H,V){return p.not(V.visit()).withSource(this.source)},Pred_lookahead(H,V){return p.lookahead(V.visit()).withSource(this.source)},Lex_lex(H,V){return p.lex(V.visit()).withSource(this.source)},Base_application(H,V){const le=V.children.map(xe=>xe.visit())[0]||[];return p.app(H.visit(),le).withSource(this.source)},Base_range(H,V,le){return p.range(H.visit(),le.visit()).withSource(this.source)},Base_terminal(H){return p.terminal(H.visit()).withSource(this.source)},Base_paren(H,V,le){return V.visit()},ruleDescr(H,V,le){return V.visit()},ruleDescrText(H){return this.sourceString.trim()},caseName(H,V,le,xe,je){return le.visit()},name(H,V){return this.sourceString},nameFirst(H){},nameRest(H){},terminal(H,V,le){return V.children.map(xe=>xe.visit()).join("")},oneCharTerminal(H,V,le){return V.visit()},escapeChar(H){try{return z(this.sourceString)}catch(V){throw V instanceof RangeError&&V.message.startsWith("Invalid code point ")?Ne(H):V}},NonemptyListOf(H,V,le){return[H.visit()].concat(le.children.map(xe=>xe.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(u).visit()}var en=tt(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);Yn(rt.BuiltInRules),An(en);function Yn(u){const r={empty(){return this.iteration()},nonEmpty(o,p,g){return this.iteration([o].concat(g.children))}};Ct.BuiltInSemantics=Ct.createSemantics(u,null).addOperation("asIteration",{emptyListOf:r.empty,nonemptyListOf:r.nonEmpty,EmptyListOf:r.empty,NonemptyListOf:r.nonEmpty})}function An(u){Ct.prototypeGrammarSemantics=u.createSemantics().addOperation("parse",{AttributeSignature(r){return{name:r.parse(),formals:[]}},OperationSignature(r,o){return{name:r.parse(),formals:o.children.map(p=>p.parse())[0]||[]}},Formals(r,o,p){return o.asIteration().children.map(g=>g.parse())},name(r,o){return this.sourceString}}),Ct.prototypeGrammar=u}function Ma(u){let r=0;const o=[0],p=()=>o[o.length-1],g={},O=/( *).*(?:$|\r?\n|\r)/g;let M;for(;(M=O.exec(u))!=null;){const[ee,X]=M;if(ee.length===0)break;const he=X.length,H=p(),V=r+he;if(he>H)o.push(he),g[V]=1;else if(he<H){const le=o.length;for(;p()!==he;)o.pop();g[V]=-1*(le-o.length)}r+=ee.length}return o.length>1&&(g[r]=1-o.length),g}const as="an indented block",os="a dedent",ls=1114112;class Fa extends $e{constructor(r){super(r.input),this.state=r}_indentationAt(r){return this.state.userData[r]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),ls):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),ls):super.nextCodePoint()}}class cs extends j{constructor(r=!0){super(),this.isIndent=r}allowsSkippingPrecedingSpace(){return!0}eval(r){const{inputStream:o}=r,p=r.userData;r.doNotMemoize=!0;const g=o.pos,O=this.isIndent?1:-1;return(p[g]||0)*O>0?(r.userData=Object.create(p),r.userData[g]-=O,r.pushBinding(new Ee(0),g),!0):(r.processFailure(g,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(r,o){}_isNullable(r,o){return!1}assertChoicesHaveUniformArity(r){}assertIteratedExprsAreNotNullable(r){}introduceParams(r){return this}substituteParams(r){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(r){const o=this.isIndent?as:os;return new st(this,o,"description")}}const qa=new ie("indent"),za=new ie("dedent"),ja=new ve(St,"any",[qa,za],[]),us=new Pt().newGrammar("IndentationSensitive").withSuperGrammar(St).define("indent",[],new cs(!0),as,void 0,!0).define("dedent",[],new cs(!1),os,void 0,!0).extend("any",[],ja,"any character",void 0).build();Object.assign(us,{_matchStateInitializer(u){u.userData=Ma(u.input),u.inputStream=new Fa(u)},supportsIncrementalParsing:!1});const Ua="17.1.0";rt.initApplicationParser(Tn,vn);const Ba=u=>!!u.constructor&&typeof u.constructor.isBuffer=="function"&&u.constructor.isBuffer(u);function Wa(u,r){const o=Tn.match(u,"Grammars");if(o.failed())throw _(o);return vn(o,r)}function Ga(u,r){const o=ps(u,r),p=Object.keys(o);if(p.length===0)throw new Error("Missing grammar definition");if(p.length>1){const O=o[p[1]].source;throw new Error(fn(O.sourceString,O.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return o[p[0]]}function ps(u,r){const o=Object.create(r||{});if(typeof u!="string")if(Ba(u))u=u.toString();else throw new TypeError("Expected string as first argument, got "+N(u));return Wa(u,o),o}return tn.ExperimentalIndentationSensitive=us,tn._buildGrammar=vn,tn.grammar=Ga,tn.grammars=ps,tn.makeRecipe=tt,tn.ohmGrammar=Tn,tn.pexprs=mi,tn.version=Ua,tn}var xi,Ps;function _a(){if(Ps)return xi;Ps=1;const{makeRecipe:t}=fc();return xi=t(["grammar",{source:`PEP508 {
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
`],["terminal",{sourceInterval:[6127,6130]},"#"]]],["app",{sourceInterval:[6132,6135]},"any",[]]]]]}]),xi}var vr={},Rs;function Ls(){return Rs||(Rs=1,function(t){var e=vr&&vr.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.RequirementsSyntaxError=t.semantics=void 0;const n=e(_a());t.semantics=n.default.createSemantics(),t.semantics.addOperation("extract",{File:s=>s.asIteration().children.map(l=>l.extract()).filter(Boolean),Line:(s,l)=>{var a;return((a=s.child(0))===null||a===void 0?void 0:a.extract())||null},NameReq:(s,l,a,h)=>{var w,v;return{type:"ProjectName",name:s.sourceString,versionSpec:a.extract(),extras:(w=l.child(0))===null||w===void 0?void 0:w.extract(),environmentMarkerTree:(v=h.child(0))===null||v===void 0?void 0:v.extract()}},UrlReq:(s,l,a,h,w)=>{var v,I;return{type:"ProjectURL",name:s.sourceString,url:a.extract(),extras:(v=l.child(0))===null||v===void 0?void 0:v.extract(),environmentMarkerTree:(I=w.child(0))===null||I===void 0?void 0:I.extract()}},Extras:(s,l,a)=>l.asIteration().children.map(h=>h.sourceString),RequirementsReq:(s,l)=>({type:"RequirementsFile",path:l.sourceString}),ConstraintsReq:(s,l)=>({type:"ConstraintsFile",path:l.sourceString}),UrlSpec:(s,l)=>l.sourceString,QuotedMarker:(s,l)=>l.extract(),MarkerOr_node:(s,l,a)=>({operator:"or",left:s.extract(),right:a.extract()}),MarkerAnd_node:(s,l,a)=>({operator:"and",left:s.extract(),right:a.extract()}),MarkerExpr_leaf:(s,l,a)=>({left:s.sourceString,operator:l.sourceString,right:a.sourceString}),MarkerExpr_node:(s,l,a)=>l.extract(),VersionSpec_parenthesized:(s,l,a)=>l.extract()||[],VersionMany:s=>{const l=s.asIteration().children;if(l.length!==0)return l.map(a=>a.extract())},VersionOne:(s,l)=>({operator:s.sourceString,version:l.sourceString})}),t.semantics.addOperation("extractLoosely",{LooseFile:s=>s.asIteration().children.map(l=>l.extractLoosely()).filter(Boolean),LooseLine:(s,l)=>{var a;return((a=s.child(0))===null||a===void 0?void 0:a.extractLoosely())||null},LooseNameReq:(s,l,a,h)=>({type:"ProjectName",name:s.sourceString}),LooseNonNameReq:s=>null});class i extends Error{}t.RequirementsSyntaxError=i}(vr)),vr}var Dn={},Ds;function mc(){if(Ds)return Dn;Ds=1,Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.VersionOperator=Dn.EnvironmentMarkerVariable=void 0;var t;(function(n){n.PythonVersion="python_version",n.PythonFullVersion="python_full_version",n.OsName="os_name",n.SysPlatform="sys_platform",n.PlatformRelease="platform_release",n.PlatformSystem="platform_system",n.PlatformVersion="platform_version",n.PlatformMachine="platform_machine",n.PlatformPythonImplementation="platform_python_implementation",n.ImplementationName="implementation_name",n.ImplementationVersion="implementation_version",n.Extra="extra"})(t||(Dn.EnvironmentMarkerVariable=t={}));var e;return function(n){n.CompatibleRelease="~=",n.VersionMatching="==",n.VersionExclusion="!=",n.LessThanOrMatching="<=",n.GreaterThanOrMatching=">=",n.LessThan="<",n.GreaterThan=">",n.ArbitrarilyEqual="==="}(e||(Dn.VersionOperator=e={})),Dn}var Ns;function gc(){return Ns||(Ns=1,function(t){var e=yn&&yn.__createBinding||(Object.create?function(S,y,T,z){z===void 0&&(z=T);var N=Object.getOwnPropertyDescriptor(y,T);(!N||("get"in N?!y.__esModule:N.writable||N.configurable))&&(N={enumerable:!0,get:function(){return y[T]}}),Object.defineProperty(S,z,N)}:function(S,y,T,z){z===void 0&&(z=T),S[z]=y[T]}),n=yn&&yn.__exportStar||function(S,y){for(var T in S)T!=="default"&&!Object.prototype.hasOwnProperty.call(y,T)&&e(y,S,T)},i=yn&&yn.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(t,"__esModule",{value:!0}),t.parsePipRequirementsLineLoosely=t.parsePipRequirementsFileLoosely=t.parsePipRequirementsLine=t.parsePipRequirementsFile=t.RequirementsSyntaxError=void 0;const s=i(_a()),l=Ls();var a=Ls();Object.defineProperty(t,"RequirementsSyntaxError",{enumerable:!0,get:function(){return a.RequirementsSyntaxError}}),n(mc(),t);function h(S){const y=s.default.match(S,"File");if(y.failed())throw new l.RequirementsSyntaxError(`Failed to parse requirements file. ${y.shortMessage}`);return(0,l.semantics)(y).extract()}t.parsePipRequirementsFile=h;function w(S){const y=s.default.match(S,"Line");if(y.failed())throw new l.RequirementsSyntaxError(`Failed to parse requirements line. ${y.shortMessage}`);return(0,l.semantics)(y).extract()}t.parsePipRequirementsLine=w;function v(S){const y=s.default.match(S,"LooseFile");if(y.failed())throw new l.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${y.shortMessage}`);return(0,l.semantics)(y).extractLoosely()}t.parsePipRequirementsFileLoosely=v;function I(S){const y=s.default.match(S,"LooseLine");if(y.failed())throw new l.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${y.shortMessage}`);return(0,l.semantics)(y).extractLoosely()}t.parsePipRequirementsLineLoosely=I}(yn)),yn}var vc=gc();function yc(t){return new Worker("/assets/pyworker-C-BOLKRv.js",{type:"module",name:t==null?void 0:t.name})}let bc=0;class wc{constructor(){this.pendingMessages=new Map}async init(e,n){this.workspace=e,this.vars=n??{},this.worker=new yc,this.worker.onmessage=i=>{this.handleWorkerMessage(i.data)},this.worker.onerror=i=>{console.error("Python Worker error:",i)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const i=e.payload.prompt||"Input:",s=window.prompt(i);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:s,cancelled:s===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:i,message:s}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",s,i);return}const n=this.pendingMessages.get(e.id);n&&(this.pendingMessages.delete(e.id),e.type==="success"?n.resolve(e.payload):e.type==="error"&&n.reject(new Error(e.payload.message)))}async sendMessage(e,n){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const i=`msg-${bc++}`,s={id:i,type:e,payload:n};return new Promise((l,a)=>{this.pendingMessages.set(i,{resolve:l,reject:a}),this.worker.postMessage(s)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,n){const i=await this.sendMessage("runFunction",{name:e,args:n});return It(pn,this.workspace),i}async setGlobal(e,n){await this.sendMessage("setGlobal",{key:e,value:n})}async mountWorkspace(e="/workspace"){const n=await Dt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:n.getHandle(),mountPoint:e})}async installDependencies(){var n;const e=await((n=this.workspace)==null?void 0:n.getResource("requirements.txt"));if(e){const i=(await e.getContents()).replaceAll("\r",""),s=vc.parsePipRequirementsFile(i).filter(l=>"name"in l).map(l=>l.name);await this.loadPackages(s)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),It(pn,this.workspace)}async execCode(e){const n=await this.sendMessage("execCode",{code:e});return It(pn,this.workspace),n}async execScript(e){const n=e.split(".")[0],i=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(n,i)}async execModule(e,n){const i=await this.sendMessage("execModule",{moduleName:e,entryName:n,vars:this.vars});return It(pn,this.workspace),i}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class Ic{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,sn(kr,()=>{})}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const n=l=>{const a=l.detail;a&&Array.from(a.querySelectorAll("*")).filter(w=>w instanceof Et).forEach(w=>{Me.set(w),w.isEditor&&Gr.set(w)})};e.addEventListener("tab-shown",n);const i=l=>{const a=l.detail;Array.from(a.querySelectorAll("*")).filter(w=>w instanceof Et).forEach(w=>{Me.get()==w&&Me.set(null),Gr.get()==w&&Gr.set(null)})};e.addEventListener("tab-closed",i),oa(Oi,l=>{const h=l.closest("wa-tab-panel").getAttribute("name");e.markDirty(h,l.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((n,i)=>(i.ranking??0)-(n.ranking??0))}async handleInput(e){for(let n=0;n<this.editorInputHandlers.length;n++){const i=this.editorInputHandlers[n];if(i.canHandle(e))return await i.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${Qr}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const n=this.getEditorArea();if(!n){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(n),n.has(e.key)){n.activate(e.key);return}n.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}}const En=new Ic;Mt.put("editorRegistry",En);const xc=`# 🌐 geo!space
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

**Happy mapping! 🗺️✨**`;dt({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}]},handler:{execute:async({params:t})=>{const e=await Dt.getWorkspace();if(!e){Xe("Please select a workspace!");return}let n=t==null?void 0:t.path;const i=t==null?void 0:t.contents,s=t==null?void 0:t.ask,l=t==null?void 0:t.extension;if((s||!n)&&(n=await _r("Enter path to new file (directories will be created if not exist):",n||""),!n)||(l&&!n.endsWith(l)&&(n+=l),await e.getResource(n)&&!await ar(`File "${n}" already exists. Do you want to overwrite it?`)))return;const h=await e.getResource(n,{create:!0});h?(i&&await h.saveContents(i),zt("File created: "+n)):Xe("Could not create file: "+n)}}});dt({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async t=>{var l;let e,n=t.params&&t.params.path;if(n){const a=await Dt.getWorkspace();a&&(e=await a.getResource(n))}if(e||(e=jt.get()),!e){Xe("No resource to rename provided!");return}const i=e.getName(),s=((l=t.params)==null?void 0:l.newName)||await _r(`Enter new name for "${i}":`,i);if(!(!s||s===i))try{await e.rename(s),zt(`Resource renamed to: ${s}`)}catch(a){Xe(`Failed to rename ${i}: ${a.message}`)}}}});dt({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async t=>{let e,n=t.params&&t.params.path;if(n){const l=await Dt.getWorkspace();l&&(e=await l.getResource(n))}if(e||(e=jt.get()),!e){Xe("No resource to delete provided!");return}n=e.getWorkspacePath();const i=t.params&&t.params.confirm;let s=!0;if((i===void 0||i===!0)&&(s=await ar(`Are you sure you want to delete ${n}?`)),s)try{await e.delete(),zt("Resource deleted: "+n)}catch(l){Xe(`Resource ${n} could not be deleted: ${l.message||l}`)}}}});dt({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async t=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Dt.connectWorkspace(e)).catch(e=>{Xe(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});dt({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async t=>{const e=await Dt.getWorkspace();e||Xe("No workspace selected."),e.touch()}}});dt({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async t=>{const e=await Dt.getWorkspace();e||Xe("No workspace selected.");const n=t.params.path,i=await(e==null?void 0:e.getResource(n));await En.loadEditor(i)}}});dt({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async t=>{const e=t.params.script;if(!e)return;const n=new wc,i=await Dt.getWorkspace();await n.init(i,t),await n.installDependencies(),await n.execScript(e)}}});dt({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});dt({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async t=>{const e=Me.get();e&&e.isDirty()&&e.save()}},contribution:{target:Vi,icon:"floppy-disk",label:"Save active editor",slot:"end",disabled:()=>{const t=Me.get();return!t||!t.isDirty()}}});dt({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async t=>{const e=new Ys(xc,"README.md");await En.loadEditor(e)}},contribution:{target:or,icon:"question-circle",label:"Welcome"}});dt({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async t=>{document.documentElement.classList.toggle("wa-dark")||document.documentElement.classList.toggle("wa-light")}},contribution:{target:or,icon:"circle-half-stroke",label:"Theme Switcher"}});dt({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async t=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:or,icon:"expand",label:"Fullscreen"}});dt({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:t=>{const e={title:"settings.json",data:{async getContents(){const n=await Ht.getAll();return JSON.stringify(n,void 0,2)},getName(){return e.key},saveContents(n){const i=JSON.parse(n);return Ht.setAll(i)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>Z`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,En.loadEditor(e).then()}},contribution:{target:or,icon:"gear",label:"Open Settings"}});dt({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:t=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>Z`
                <k-extensions></k-extensions>`,En.loadEditor(e).then()}},contribution:{target:or,icon:"puzzle-piece",label:"Open Extensions"}});Oe.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:t,type:e}})=>{t&&(e==="error"?Xe(t):zt(t))}}});const Ea="events/chatservice/aiConfigChanged",zr="aiConfig",kc={defaultProvider:"ollama",providers:[{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""},{name:"openai",model:"gpt-4.1-mini",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"},{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"},{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"},{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}]},Lr="chatservice.prompts",Sc={name:"openai-api",canHandle:t=>!0,completionApi:async t=>(await fetch(t.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${t.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({model:t.model,stream:t.stream,messages:t.messages,...t.chatConfig.parameters})})).json().then(n=>({role:"assistant",content:n.choices[0].message.content}))};class Ac{constructor(){this.fetchers=[],this.promptContributions=[],sn(ji,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.promptContributions=pt.getContributions(Lr)}registerFetcher(e){this.fetchers.push(e)}async checkAIConfig(){this.aiConfig||(this.aiConfig=await Ht.get(zr),this.aiConfig||(await Ht.set(zr,kc),this.aiConfig=await Ht.get(zr)),It(Ea,this.aiConfig))}async getDefaultProvider(){var n;await this.checkAIConfig();const e=await this.getProviders();if((n=this.aiConfig)!=null&&n.defaultProvider){const i=e.find(s=>{var l;return s.name===((l=this.aiConfig)==null?void 0:l.defaultProvider)});if(i)return i}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig.defaultProvider=e,await Ht.set(zr,this.aiConfig),this.getDefaultProvider()}async getProviders(){var e;return await this.checkAIConfig(),((e=this.aiConfig)==null?void 0:e.providers)||[]}createMessage(e){return{role:"user",content:e}}getPromptContribution(e){return this.promptContributions.find(n=>n.role===e)}async handleUserPrompt(e){const n=e.chatConfig||await this.getDefaultProvider(),i=e.chatContext,s=this.promptContributions.map(a=>{const h=e.callContext.createChild({userPrompt:i.history[i.history.length-1].content});if(a.canHandle instanceof Function&&!a.canHandle(h.getProxy()))return;const w=i.history.map(y=>{let T=y.role,z=y.content;return T!=="user"&&(T!==a.role?(T="user",z=`***Another Assistant '${y.role}' replied:***
${z}`):T="assistant"),{role:T,content:z}});let v=w[w.length-1],I=a.sysPrompt;typeof I=="function"&&(I=I()),w.unshift({role:"system",content:I});const S=async()=>{const y={model:n.model,stream:!1,messages:w,chatConfig:n};return(this.fetchers.find(z=>z.canHandle(n))||Sc).completionApi(y).then(z=>z)};return a.promptDecorator instanceof Function?a.promptDecorator(h.getProxy()).then(y=>{y&&(v.content=y)}).then(S).then(async y=>(y.role=a.role,a.messageDecorator&&(h.put("message",y),a.messageDecorator(h.getProxy())),y)):S()}),l=await Promise.all(s.filter(a=>!!a));i.history.push(...l)}}const Nn=new Ac;Mt.put("chatService",Nn);var _c=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,hn=(t,e,n,i)=>{for(var s=i>1?void 0:i?Ec(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&_c(e,n,s),s};let Jt=class extends Et{constructor(){super(...arguments),this.defaultChatContext={history:[]},this.chatContext=this.defaultChatContext,this.busy=!1,this.inputValue=""}onAIConfigChanged(){this.doBeforeUI()}onPartChanged(t){t&&"chatContext"in t?this.chatContext=t.chatContext:this.chatContext=this.defaultChatContext}doBeforeUI(){Nn.getProviders().then(t=>{this.providers=t||[]}),Nn.getDefaultProvider().then(t=>{this.defaultProvider=t})}updated(t){super.updated(t),(t.has("chatContext")||t.has("busy"))&&this.scrollToBottom()}scrollToBottom(){this.messagesContainer&&requestAnimationFrame(()=>{this.messagesContainer&&(this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight)})}onInput(t){const e=t.target;this.inputValue=e.value}onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),this.sendMessage())}async sendMessage(){const t=this.inputValue.trim();!t||this.busy||(this.inputValue="",this.requestUpdate(),await this.updateComplete,this.textareaElement&&(this.textareaElement.value="",this.textareaElement.focus()),await this.handlePrompt(t))}async runCommand(t,e){const n=e||Oe,i=t.trim().split(/\s+/);if(i.length===0)return;const s=i.shift(),l=n.getCommand(s);if(!l){Xe("Command not found: "+s);return}const a={};i.forEach((w,v)=>{a[l.parameters[v].name]=w});const h=n.createExecutionContext(this,a);n.execute(s,h),this.requestUpdate()}async handlePrompt(t){if(t.startsWith("/")){await this.runCommand(t.substring(1),Oe);return}const e=Nn.createMessage(t);this.chatContext.history.push(e),this.requestUpdate(),this.busy=!0;const n=Me.get(),i=In.createChild({activePart:n,activeEditor:n!=null&&n.isEditor?n:null});tr.runAsync("Calling AI assistant",s=>Nn.handleUserPrompt({chatContext:this.chatContext,callContext:i}).then(l=>{this.requestUpdate()})).catch(s=>{Xe(`${s}`)}).finally(()=>{this.busy=!1,i.destroy()})}async onChangeDefaultProvider(t){this.defaultProvider=await Nn.setDefaultProvider(t.currentTarget.value)}copyToClipboard(t){navigator.clipboard.writeText(t).then(()=>{}).catch(e=>{Xe(`Failed to copy: ${e}`)})}formatTimestamp(t=new Date){return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}renderMessage(t){var s;const e=t.role==="user",n=Nn.getPromptContribution(t.role),i=(n==null?void 0:n.label)||t.role;return Z`
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
                        ${rn((s=t.actions)==null?void 0:s.length,()=>{var l;return Z`
                            ${(l=t.actions)==null?void 0:l.map(a=>Z`
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
                    ${si(He.parse(t.content))}
                </div>
            </div>
        `}renderLoadingIndicator(){return Z`
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
        `}render(){var t;return Z`
            <div class="chat-container">
                ${rn(!this.defaultProvider,()=>Z`
                    <div class="empty-state">
                        <wa-icon name="robot" style="font-size: 3rem; opacity: 0.3;"></wa-icon>
                        <p>No AI provider configured</p>
                        <p class="hint">Select a provider from the menu below</p>
                    </div>
                `)}
                
                <div class="chat-messages">
                    ${this.chatContext.history.map(e=>this.renderMessage(e))}
                    ${rn(this.busy,()=>this.renderLoadingIndicator())}
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
                            ${(t=this.providers)==null?void 0:t.map(e=>{var n;return Z`
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
        `}};Jt.styles=Lt`
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
    `;hn([gt()],Jt.prototype,"chatContext",2);hn([gt()],Jt.prototype,"providers",2);hn([gt()],Jt.prototype,"defaultProvider",2);hn([gt()],Jt.prototype,"busy",2);hn([gt()],Jt.prototype,"inputValue",2);hn([Ws(".chat-messages")],Jt.prototype,"messagesContainer",2);hn([Ws("wa-textarea")],Jt.prototype,"textareaElement",2);hn([qi(Ea)],Jt.prototype,"onAIConfigChanged",1);hn([ci(Me)],Jt.prototype,"onPartChanged",1);Jt=hn([mt("k-aiassist")],Jt);var Cc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,Ca=(t,e,n,i)=>{for(var s=i>1?void 0:i?Oc(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Cc(e,n,s),s};let ri=class extends Et{doInitUI(){sn(Vr,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(t){Ze.enable(t.id,!0),this.requestUpdate()}disable(t){Ze.disable(t.id,!0),this.requestUpdate()}selectionChanged(t){this.selectedExtension=t.detail.selection[0].model}render(){return Z`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree style="--indent-guide-width: 1px;" slot="start"
                         @wa-selection-change="${this.selectionChanged}">
                    ${Ze.getExtensions().map(t=>Z`
                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t} expanded>
                            <span><k-icon name="${t.icon}"></k-icon> ${t.name}</span>
                        </wa-tree-item>`)}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${rn(this.selectedExtension,t=>Z`
                        <h1><k-icon name="${t.icon}"></k-icon> ${t.name}</h1>
                        <hr>
                        <div>
                            ${rn(Ze.isEnabled(t.id),()=>Z`
                                <wa-button title="Disable this extension" @click="${()=>this.disable(t)}"
                                           variant="danger" appearance="plain">
                                    <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                </wa-button>`,()=>Z`
                                <wa-button title="Enable this extension" @click="${()=>this.enable(t)}"
                                           variant="brand" appearance="plain">
                                    <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                </wa-button>`)}
                        </div>

                        ${rn(t.experimental,()=>Z`
                            <div style="margin-top: 1em;">
                                <wa-button size="small" variant="warning" appearance="plain">
                                    <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                </wa-button>
                                <small><i>This is an experimental extension!</i></small>
                            </div>
                        `)}

                        <p style="margin-top: 1em;">${t.description}</p>

                        ${rn(t.dependencies&&t.dependencies.length>0,()=>Z`
                            <div style="margin-top: 1.5em;">
                                <h3 style="margin-bottom: 0.5em;">
                                    <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                    Dependencies
                                </h3>
                                <div class="dependencies-list">
                                    ${t.dependencies.map(e=>{const n=Ze.getExtensions().find(s=>s.id===e),i=Ze.isEnabled(e);return Z`
                                            <div class="dependency-item">
                                                <wa-icon 
                                                    name="${i?"check-circle":"circle"}" 
                                                    style="color: ${i?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                </wa-icon>
                                                <k-icon name="${(n==null?void 0:n.icon)||"puzzle-piece"}"></k-icon>
                                                <span>${(n==null?void 0:n.name)||e}</span>
                                                ${i?"":Z`
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
        `}};ri.styles=Lt`
        :host {
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
    `;Ca([gt()],ri.prototype,"selectedExtension",2);ri=Ca([mt("k-extensions")],ri);var Tc=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,hi=(t,e,n,i)=>{for(var s=i>1?void 0:i?Pc(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Tc(e,n,s),s};let ir=class extends Et{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Mn()}connectedCallback(){super.connectedCallback(),fo(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),mo()}log(t,e,n="info"){const i={timestamp:new Date,level:n,source:t,message:e};this.messages=[...this.messages,i],this.autoScroll&&this.updateComplete.then(()=>{const s=this.containerRef.value;s&&(s.scrollTop=s.scrollHeight)})}clear(){this.messages=[]}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(t=>t.level===this.filter)}formatTimestamp(t){return t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(t){switch(t){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(t){switch(t){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}render(){const t=this.getFilteredMessages();return Z`
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
                <div class="messages" ${Fn(this.containerRef)}>
                    ${t.length===0?Z`<div class="empty-state">No log messages</div>`:t.map(e=>Z`
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
        `}};ir.styles=Lt`
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
    `;hi([gt()],ir.prototype,"messages",2);hi([gt()],ir.prototype,"autoScroll",2);hi([gt()],ir.prototype,"filter",2);ir=hi([mt("k-log-terminal")],ir);var Rc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,an=(t,e,n,i)=>{for(var s=i>1?void 0:i?Lc(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Rc(e,n,s),s};let Ut=class extends Er{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const t=ia.getKeyBindingsForCommand(this.cmd);return t.length>0?t[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),sn(Ar,t=>{this.dropdown&&t.target===this.dropdown&&(this.dropdownContributions=t.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=pt.getContributions(this.dropdown),this.requestUpdate())}renderContribution(t){var e;if("command"in t){const n=t,i=(e=n.disabled)==null?void 0:e.get();return Z`
                <k-command 
                    cmd="${n.command}"
                    icon="${n.icon||""}"
                    ?disabled="${i}">
                    ${n.label}
                </k-command>
            `}if("html"in t){const i=t.html;return i instanceof Function?i():si(i)}return Rt}render(){const t=this.getKeybinding();return this.isInDropdown()?Z`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${t?Z`<span class="keybinding">${t}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?Z`
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
                    
                    ${this.title?Z`
                        <h6 style="padding: var(--wa-spacing-2) var(--wa-spacing-3); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:Rt}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?Z`
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
            `:Z`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${t?`${this.title} (${t})`:this.title}
                @click=${()=>this.handleClick()}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};Ut.styles=Lt`
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
    `;an([Ue()],Ut.prototype,"cmd",2);an([Ue()],Ut.prototype,"title",2);an([Ue()],Ut.prototype,"icon",2);an([Ue({type:Boolean})],Ut.prototype,"disabled",2);an([Ue()],Ut.prototype,"appearance",2);an([Ue()],Ut.prototype,"size",2);an([Ue({type:Object,attribute:!1})],Ut.prototype,"params",2);an([Ue()],Ut.prototype,"dropdown",2);an([Ue()],Ut.prototype,"placement",2);an([gt()],Ut.prototype,"dropdownContributions",2);Ut=an([mt("k-command")],Ut);var Dc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,Vn=(t,e,n,i)=>{for(var s=i>1?void 0:i?Nc(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Dc(e,n,s),s};let wn=class extends Er{constructor(){super(...arguments),this.title="",this.disabled=!1,this.appearance="plain",this.size="small"}handleClick(t){!this.disabled&&this.action&&(t.stopPropagation(),this.action(t))}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}render(){return this.isInDropdown()?Z`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${t=>this.handleClick(t)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                </wa-dropdown-item>
            `:Z`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${this.title}
                @click=${t=>this.handleClick(t)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};wn.styles=Lt`
        :host {
            display: inline-block;
        }
    `;Vn([Ue({type:Object,attribute:!1})],wn.prototype,"action",2);Vn([Ue()],wn.prototype,"title",2);Vn([Ue()],wn.prototype,"icon",2);Vn([Ue({type:Boolean})],wn.prototype,"disabled",2);Vn([Ue()],wn.prototype,"appearance",2);Vn([Ue()],wn.prototype,"size",2);wn=Vn([mt("k-action")],wn);var $c=Object.defineProperty,Mc=Object.getOwnPropertyDescriptor,rs=(t,e,n,i)=>{for(var s=i>1?void 0:i?Mc(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&$c(e,n,s),s};let Sr=class extends Er{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return Z`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Sr.styles=Lt`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;rs([Ue()],Sr.prototype,"message",2);rs([Ue()],Sr.prototype,"icon",2);Sr=rs([mt("k-no-content")],Sr);function jr(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ki={exports:{}},$s;function Fc(){return $s||($s=1,function(t,e){(function(n){t.exports=n()})(function(){return function(){function n(i,s,l){function a(v,I){if(!s[v]){if(!i[v]){var S=typeof jr=="function"&&jr;if(!I&&S)return S(v,!0);if(h)return h(v,!0);var y=new Error("Cannot find module '"+v+"'");throw y.code="MODULE_NOT_FOUND",y}var T=s[v]={exports:{}};i[v][0].call(T.exports,function(z){var N=i[v][1][z];return a(N||z)},T,T.exports,n,i,s,l)}return s[v].exports}for(var h=typeof jr=="function"&&jr,w=0;w<l.length;w++)a(l[w]);return a}return n}()({1:[function(n,i,s){const l=n("./utils"),a=function(){const h=l.stringToArray,w=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],v=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],I=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],S=["Thousand","Million","Billion","Trillion"];function y(P,q){var R=function(te,J,B){var ne="";if(te<=19)ne=(J?" and ":"")+(B?v[te]:w[te]);else if(te<100){const Te=Math.floor(te/10),Le=te%10;ne=(J?" and ":"")+I[Te-2],Le>0?ne+="-"+R(Le,!1,B):B&&(ne=ne.substring(0,ne.length-1)+"ieth")}else if(te<1e3){const Te=Math.floor(te/100),Le=te%100;ne=(J?", ":"")+w[Te]+" Hundred",Le>0?ne+=R(Le,!0,B):B&&(ne+="th")}else{var me=Math.floor(Math.log10(te)/3);me>S.length&&(me=S.length);const Te=Math.pow(10,me*3),Le=Math.floor(te/Te),fe=te-Le*Te;ne=(J?", ":"")+R(Le,!1,!1)+" "+S[me-1],fe>0?ne+=R(fe,!0,B):B&&(ne+="th")}return ne},Y=R(P,!1,q);return Y}const T={};w.forEach(function(P,q){T[P.toLowerCase()]=q}),v.forEach(function(P,q){T[P.toLowerCase()]=q}),I.forEach(function(P,q){const R=P.toLowerCase();T[R]=(q+2)*10,T[R.substring(0,P.length-1)+"ieth"]=T[R]}),T.hundredth=100,S.forEach(function(P,q){const R=P.toLowerCase(),Y=Math.pow(10,(q+1)*3);T[R]=Y,T[R+"th"]=Y});function z(P){const R=P.split(/,\s|\sand\s|[\s\\-]/).map(J=>T[J]);let Y=[0];return R.forEach(J=>{if(J<100){let B=Y.pop();B>=1e3&&(Y.push(B),B=0),Y.push(B+J)}else Y.push(Y.pop()*J)}),Y.reduce((J,B)=>J+B,0)}const N=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],G={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function re(P){for(var q=0;q<N.length;q++){const R=N[q];if(P>=R[0])return R[1]+re(P-R[0])}return""}function j(P){for(var q=0,R=1,Y=P.length-1;Y>=0;Y--){const te=P[Y],J=G[te];J<R?q-=J:(R=J,q+=J)}return q}function L(P,q){for(var R=[],Y=q.charCodeAt(0);P>0;)R.unshift(String.fromCharCode((P-1)%26+Y)),P=Math.floor((P-1)/26);return R.join("")}function W(P,q){for(var R=q.charCodeAt(0),Y=0,te=0;te<P.length;te++)Y+=(P.charCodeAt(P.length-te-1)-R+1)*Math.pow(26,te);return Y}function D(P,q){if(typeof P>"u")return;P=Math.floor(P);const R=ve(q);return U(P,R)}const b={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},F={UPPER:"upper",LOWER:"lower",TITLE:"title"};function U(P,q){let R;const Y=P<0;switch(P=Math.abs(P),q.primary){case b.LETTERS:R=L(P,q.case===F.UPPER?"A":"a");break;case b.ROMAN:R=re(P),q.case===F.UPPER&&(R=R.toUpperCase());break;case b.WORDS:R=y(P,q.ordinal),q.case===F.UPPER?R=R.toUpperCase():q.case===F.LOWER&&(R=R.toLowerCase());break;case b.DECIMAL:R=""+P;var te=q.mandatoryDigits-R.length;if(te>0){var J=new Array(te+1).join("0");R=J+R}if(q.zeroCode!==48&&(R=h(R).map(Te=>String.fromCodePoint(Te.codePointAt(0)+q.zeroCode-48)).join("")),q.regular){const Te=Math.floor((R.length-1)/q.groupingSeparators.position);for(let Le=Te;Le>0;Le--){const fe=R.length-Le*q.groupingSeparators.position;R=R.substr(0,fe)+q.groupingSeparators.character+R.substr(fe)}}else q.groupingSeparators.reverse().forEach(Te=>{const Le=R.length-Te.position;R=R.substr(0,Le)+Te.character+R.substr(Le)});if(q.ordinal){var B={1:"st",2:"nd",3:"rd"},ne=R[R.length-1],me=B[ne];(!me||R.length>1&&R[R.length-2]==="1")&&(me="th"),R=R+me}break;case b.SEQUENCE:throw{code:"D3130",value:q.token}}return Y&&(R="-"+R),R}const se=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function ve(P){const q={type:"integer",primary:b.DECIMAL,case:F.LOWER,ordinal:!1};let R,Y;const te=P.lastIndexOf(";");switch(te===-1?R=P:(R=P.substring(0,te),Y=P.substring(te+1),Y[0]==="o"&&(q.ordinal=!0)),R){case"A":q.case=F.UPPER;case"a":q.primary=b.LETTERS;break;case"I":q.case=F.UPPER;case"i":q.primary=b.ROMAN;break;case"W":q.case=F.UPPER,q.primary=b.WORDS;break;case"Ww":q.case=F.TITLE,q.primary=b.WORDS;break;case"w":q.primary=b.WORDS;break;default:{let J=null,B=0,ne=0,me=[],Te=0;if(h(R).map(fe=>fe.codePointAt(0)).reverse().forEach(fe=>{let Ie=!1;for(let Ne=0;Ne<se.length;Ne++){const de=se[Ne];if(fe>=de&&fe<=de+9){if(Ie=!0,B++,Te++,J===null)J=de;else if(de!==J)throw{code:"D3131"};break}}Ie||(fe===35?(Te++,ne++):me.push({position:Te,character:String.fromCodePoint(fe)}))}),B>0){q.primary=b.DECIMAL,q.zeroCode=J,q.mandatoryDigits=B,q.optionalDigits=ne;const Ie=function(Ne){if(Ne.length===0)return 0;const de=Ne[0].character;for(let lt=1;lt<Ne.length;lt++)if(Ne[lt].character!==de)return 0;const ot=Ne.map(lt=>lt.position),Ft=function(lt,wt){return wt===0?lt:Ft(wt,lt%wt)},bt=ot.reduce(Ft);for(let lt=1;lt<=ot.length;lt++)if(ot.indexOf(lt*bt)===-1)return 0;return bt}(me);Ie>0?(q.regular=!0,q.groupingSeparators={position:Ie,character:me[0].character}):(q.regular=!1,q.groupingSeparators=me)}else q.primary=b.SEQUENCE,q.token=R}}return q}const Q={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function ae(P){var q=[];const R={type:"datetime",parts:q},Y=function(Ie,Ne){if(Ne>Ie){let de=P.substring(Ie,Ne);de=de.split("]]").join("]"),q.push({type:"literal",value:de})}};for(var te=0,J=0;J<P.length;){if(P.charAt(J)==="["){if(P.charAt(J+1)==="["){Y(te,J),q.push({type:"literal",value:"["}),J+=2,te=J;continue}if(Y(te,J),te=J,J=P.indexOf("]",te),J===-1)throw{code:"D3135"};let Ie=P.substring(te+1,J);Ie=Ie.split(/\s+/).join("");var B={type:"marker",component:Ie.charAt(0)},ne=Ie.lastIndexOf(","),me;if(ne!==-1){const Ne=Ie.substring(ne+1),de=Ne.indexOf("-");let ot,Ft;const bt=function(wt){if(!(typeof wt>"u"||wt==="*"))return parseInt(wt)};de===-1?ot=Ne:(ot=Ne.substring(0,de),Ft=Ne.substring(de+1));const lt={min:bt(ot),max:bt(Ft)};B.width=lt,me=Ie.substring(1,ne)}else me=Ie.substring(1);if(me.length===1)B.presentation1=me;else if(me.length>1){var Te=me.charAt(me.length-1);"atco".indexOf(Te)!==-1?(B.presentation2=Te,Te==="o"&&(B.ordinal=!0),B.presentation1=me.substring(0,me.length-1)):B.presentation1=me}else B.presentation1=Q[B.component];if(typeof B.presentation1>"u")throw{code:"D3132",value:B.component};if(B.presentation1[0]==="n")B.names=F.LOWER;else if(B.presentation1[0]==="N")B.presentation1[1]==="n"?B.names=F.TITLE:B.names=F.UPPER;else if("YMDdFWwXxHhmsf".indexOf(B.component)!==-1){var Le=B.presentation1;if(B.presentation2&&(Le+=";"+B.presentation2),B.integerFormat=ve(Le),B.width&&B.width.min!==void 0&&B.integerFormat.mandatoryDigits<B.width.min&&(B.integerFormat.mandatoryDigits=B.width.min),"YMD".indexOf(B.component)!==-1)if(B.n=-1,B.width&&B.width.max!==void 0)B.n=B.width.max,B.integerFormat.mandatoryDigits=B.n;else{var fe=B.integerFormat.mandatoryDigits+B.integerFormat.optionalDigits;fe>=2&&(B.n=fe)}}(B.component==="Z"||B.component==="z")&&(B.integerFormat=ve(B.presentation1)),q.push(B),te=J+1}J++}return Y(te,J),R}const pe=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Se=["January","February","March","April","May","June","July","August","September","October","November","December"],ze=1e3*60*60*24,be=function(P){const q=Date.UTC(P.year,P.month);var R=new Date(q).getUTCDay();return R===0&&(R=7),R>4?q+(8-R)*ze:q-(R-1)*ze},ye=function(P,q){return{year:P,month:q,nextMonth:function(){return q===11?ye(P+1,0):ye(P,q+1)},previousMonth:function(){return q===0?ye(P-1,11):ye(P,q-1)},nextYear:function(){return ye(P+1,q)},previousYear:function(){return ye(P-1,q)}}},We=function(P,q){return(q-P)/(ze*7)+1},ie=(P,q)=>{let R;switch(q){case"Y":R=P.getUTCFullYear();break;case"M":R=P.getUTCMonth()+1;break;case"D":R=P.getUTCDate();break;case"d":{const Y=Date.UTC(P.getUTCFullYear(),P.getUTCMonth(),P.getUTCDate()),te=Date.UTC(P.getUTCFullYear(),0);R=(Y-te)/ze+1;break}case"F":R=P.getUTCDay(),R===0&&(R=7);break;case"W":{const Y=ye(P.getUTCFullYear(),0),te=be(Y),J=Date.UTC(Y.year,P.getUTCMonth(),P.getUTCDate());let B=We(te,J);if(B>52){const ne=be(Y.nextYear());J>=ne&&(B=1)}else if(B<1){const ne=be(Y.previousYear());B=We(ne,J)}R=Math.floor(B);break}case"w":{const Y=ye(P.getUTCFullYear(),P.getUTCMonth()),te=be(Y),J=Date.UTC(Y.year,Y.month,P.getUTCDate());let B=We(te,J);if(B>4){const ne=be(Y.nextMonth());J>=ne&&(B=1)}else if(B<1){const ne=be(Y.previousMonth());B=We(ne,J)}R=Math.floor(B);break}case"X":{const Y=ye(P.getUTCFullYear(),0),te=be(Y),J=be(Y.nextYear()),B=P.getTime();B<te?R=Y.year-1:B>=J?R=Y.year+1:R=Y.year;break}case"x":{const Y=ye(P.getUTCFullYear(),P.getUTCMonth()),te=be(Y),J=Y.nextMonth(),B=be(J),ne=P.getTime();ne<te?R=Y.previousMonth().month+1:ne>=B?R=J.month+1:R=Y.month+1;break}case"H":R=P.getUTCHours();break;case"h":R=P.getUTCHours(),R=R%12,R===0&&(R=12);break;case"P":R=P.getUTCHours()>=12?"pm":"am";break;case"m":R=P.getUTCMinutes();break;case"s":R=P.getUTCSeconds();break;case"f":R=P.getUTCMilliseconds();break;case"Z":case"z":break;case"C":R="ISO";break;case"E":R="ISO";break}return R};let Ce=null;function Pe(P,q,R){var Y=0,te=0;if(typeof R<"u"){const Le=parseInt(R);Y=Math.floor(Le/100),te=Le%100}var J=function(Le,fe){var Ie=ie(Le,fe.component);if("YMDdFWwXxHhms".indexOf(fe.component)!==-1)if(fe.component==="Y"&&fe.n!==-1&&(Ie=Ie%Math.pow(10,fe.n)),fe.names){if(fe.component==="M"||fe.component==="x")Ie=Se[Ie-1];else if(fe.component==="F")Ie=pe[Ie];else throw{code:"D3133",value:fe.component};fe.names===F.UPPER?Ie=Ie.toUpperCase():fe.names===F.LOWER&&(Ie=Ie.toLowerCase()),fe.width&&Ie.length>fe.width.max&&(Ie=Ie.substring(0,fe.width.max))}else Ie=U(Ie,fe.integerFormat);else if(fe.component==="f")Ie=U(Ie,fe.integerFormat);else if(fe.component==="Z"||fe.component==="z"){const Ne=Y*100+te;if(fe.integerFormat.regular)Ie=U(Ne,fe.integerFormat);else{const de=fe.integerFormat.mandatoryDigits;if(de===1||de===2)Ie=U(Y,fe.integerFormat),te!==0&&(Ie+=":"+D(te,"00"));else if(de===3||de===4)Ie=U(Ne,fe.integerFormat);else throw{code:"D3134",value:de}}Ne>=0&&(Ie="+"+Ie),fe.component==="z"&&(Ie="GMT"+Ie),Ne===0&&fe.presentation2==="t"&&(Ie="Z")}else fe.component==="P"&&fe.names===F.UPPER&&(Ie=Ie.toUpperCase());return Ie};let B;typeof q>"u"?(Ce===null&&(Ce=ae("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),B=Ce):B=ae(q);const ne=(60*Y+te)*60*1e3,me=new Date(P+ne);let Te="";return B.parts.forEach(function(Le){Le.type==="literal"?Te+=Le.value:Te+=J(me,Le)}),Te}function x(P){var q={};if(P.type==="datetime")q.type="datetime",q.parts=P.parts.map(function(R){var Y={};if(R.type==="literal")Y.regex=R.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(R.component==="Z"||R.component==="z"){let J;Array.isArray(R.integerFormat.groupingSeparators)||(J=R.integerFormat.groupingSeparators),Y.regex="",R.component==="z"&&(Y.regex="GMT"),Y.regex+="[-+][0-9]+",J&&(Y.regex+=J.character+"[0-9]+"),Y.parse=function(B){R.component==="z"&&(B=B.substring(3));let ne=0,me=0;return J?(ne=Number.parseInt(B.substring(0,B.indexOf(J.character))),me=Number.parseInt(B.substring(B.indexOf(J.character)+1))):B.length-1<=2?ne=Number.parseInt(B):(ne=Number.parseInt(B.substring(0,3)),me=Number.parseInt(B.substring(3))),ne*60+me}}else if(R.integerFormat)R.integerFormat.n=R.n,Y=x(R.integerFormat);else{Y.regex="[a-zA-Z]+";var te={};if(R.component==="M"||R.component==="x")Se.forEach(function(J,B){R.width&&R.width.max?te[J.substring(0,R.width.max)]=B+1:te[J]=B+1});else if(R.component==="F")pe.forEach(function(J,B){B>0&&(R.width&&R.width.max?te[J.substring(0,R.width.max)]=B:te[J]=B)});else if(R.component==="P")te={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:R.component};Y.parse=function(J){return te[J]}}return Y.component=R.component,Y});else{q.type="integer";const R=P.case===F.UPPER;let Y;switch(P.n&&P.n>0?P.optionalDigits===0?Y=`{${P.n}}`:Y=`{${P.n-P.optionalDigits},${P.n}}`:Y="+",P.primary){case b.LETTERS:q.regex=R?"[A-Z]+":"[a-z]+",q.parse=function(te){return W(te,R?"A":"a")};break;case b.ROMAN:q.regex=R?"[MDCLXVI]+":"[mdclxvi]+",q.parse=function(te){return j(R?te:te.toUpperCase())};break;case b.WORDS:q.regex="(?:"+Object.keys(T).concat("and","[\\-, ]").join("|")+")+",q.parse=function(te){return z(te.toLowerCase())};break;case b.DECIMAL:q.regex=`[0-9]${Y}`,P.ordinal&&(q.regex+="(?:th|st|nd|rd)"),q.parse=function(te){let J=te;return P.ordinal&&(J=te.substring(0,te.length-2)),P.regular?J=J.split(",").join(""):P.groupingSeparators.forEach(B=>{J=J.split(B.character).join("")}),P.zeroCode!==48&&(J=J.split("").map(B=>String.fromCodePoint(B.codePointAt(0)-P.zeroCode+48)).join("")),parseInt(J)};break;case b.SEQUENCE:throw{code:"D3130",value:P.token}}}return q}function _(P,q){if(typeof P>"u")return;const R=ve(q);return x(R).parse(P)}function ce(P,q){const R=ae(q),Y=x(R),te="^"+Y.parts.map(me=>"("+me.regex+")").join("")+"$";var B=new RegExp(te,"i").exec(P);if(B!==null){const de={};for(let $e=1;$e<B.length;$e++){const f=Y.parts[$e-1];f.parse&&(de[f.component]=f.parse(B[$e]))}if(Object.getOwnPropertyNames(de).length===0)return;let ot=0;const Ft=$e=>{ot<<=1,ot+=$e?1:0},bt=$e=>!(~$e&ot)&&!!($e&ot);"YXMxWwdD".split("").forEach($e=>Ft(de[$e]));const wt=!bt(161)&&bt(130),Bt=bt(84),on=!Bt&&bt(72);ot=0,"PHhmsf".split("").forEach($e=>Ft(de[$e]));const Zt=!bt(23)&&bt(47),fn=(wt?"YD":Bt?"XxwF":on?"XWF":"YMD")+(Zt?"Phmsf":"Hmsf"),qt=this.environment.timestamp;let nt=!1,Wt=!1;if(fn.split("").forEach($e=>{if(typeof de[$e]>"u")nt?(de[$e]="MDd".indexOf($e)!==-1?1:0,Wt=!0):de[$e]=ie(qt,$e);else if(nt=!0,Wt)throw{code:"D3136"}}),de.M>0?de.M-=1:de.M=0,wt){const $e=Date.UTC(de.Y,0),f=(de.d-1)*1e3*60*60*24,k=new Date($e+f);de.M=k.getUTCMonth(),de.D=k.getUTCDate()}if(Bt)throw{code:"D3136"};if(on)throw{code:"D3136"};Zt&&(de.H=de.h===12?0:de.h,de.P===1&&(de.H+=12));var ne=Date.UTC(de.Y,de.M,de.D,de.H,de.m,de.s,de.f);return(de.Z||de.z)&&(ne-=(de.Z||de.z)*60*1e3),ne}}var _e=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ge(P,q){if(!(typeof P>"u"))if(typeof q>"u"){if(!_e.test(P))throw{stack:new Error().stack,code:"D3110",value:P};return Date.parse(P)}else return ce.call(this,P,q)}function Re(P,q,R){if(!(typeof P>"u"))return Pe.call(this,P,q,R)}return{formatInteger:D,parseInteger:_,fromMillis:Re,toMillis:Ge}}();i.exports=a},{"./utils":6}],2:[function(n,i,s){(function(l){(function(){var a=n("./utils");const h=(()=>{var w=a.isNumeric,v=a.isArrayOfStrings,I=a.isArrayOfNumbers,S=a.createSequence,y=a.isSequence,T=a.isFunction,z=a.isLambda,N=a.isPromise,G=a.getFunctionArity,re=a.isDeepEqual,j=a.stringToArray;function L(c){if(!(typeof c>"u")){var d=0;return c.forEach(function(m){d+=m}),d}}function W(c){return typeof c>"u"?0:c.length}function D(c){if(!(typeof c>"u"||c.length===0))return Math.max.apply(Math,c)}function b(c){if(!(typeof c>"u"||c.length===0))return Math.min.apply(Math,c)}function F(c){if(!(typeof c>"u"||c.length===0)){var d=0;return c.forEach(function(m){d+=m}),d/c.length}}function U(c,d=!1){if(!(typeof c>"u")){var m;if(typeof c=="string")m=c;else if(T(c))m="";else{if(typeof c=="number"&&!isFinite(c))throw{code:"D3001",value:c,stack:new Error().stack};var C=d?2:0;Array.isArray(c)&&c.outerWrapper&&(c=c[0]),m=JSON.stringify(c,function(A,$){return typeof $<"u"&&$!==null&&$.toPrecision&&w($)?Number($.toPrecision(15)):$&&T($)?"":$},C)}return m}}function se(c,d,m){if(!(typeof c>"u")){var C=j(c),A=C.length;if(A+d<0&&(d=0),typeof m<"u"){if(m<=0)return"";var $=d>=0?d+m:A+d+m;return C.slice(d,$).join("")}return C.slice(d).join("")}}function ve(c,d){if(!(typeof c>"u")){var m=c.indexOf(d);return m>-1?c.substr(0,m):c}}function Q(c,d){if(!(typeof c>"u")){var m=c.indexOf(d);return m>-1?c.substr(m+d.length):c}}function ae(c){if(!(typeof c>"u"))return c.toLowerCase()}function pe(c){if(!(typeof c>"u"))return c.toUpperCase()}function Se(c){if(!(typeof c>"u"))return j(c).length}function ze(c){if(!(typeof c>"u")){var d=c.replace(/[ \t\n\r]+/gm," ");return d.charAt(0)===" "&&(d=d.substring(1)),d.charAt(d.length-1)===" "&&(d=d.substring(0,d.length-1)),d}}function be(c,d,m){if(!(typeof c>"u")){(typeof m>"u"||m.length===0)&&(m=" ");var C,A=Math.abs(d)-Se(c);if(A>0){var $=new Array(A+1).join(m);m.length>1&&($=se($,0,A)),d>0?C=c+$:C=$+c}else C=c;return C}}async function ye(c,d){var m=c.apply(this,[d]);if(N(m)&&(m=await m),m&&!(typeof m.start=="number"||m.end==="number"||Array.isArray(m.groups)||T(m.next)))throw{code:"T1010",stack:new Error().stack};return m}async function We(c,d){if(!(typeof c>"u")){var m;if(typeof d=="string")m=c.indexOf(d)!==-1;else{var C=await ye(d,c);m=typeof C<"u"}return m}}async function ie(c,d,m){if(!(typeof c>"u")){if(m<0)throw{stack:new Error().stack,value:m,code:"D3040",index:3};var C=S();if(typeof m>"u"||m>0){var A=0,$=await ye(d,c);if(typeof $<"u")for(;typeof $<"u"&&(typeof m>"u"||A<m);)C.push({match:$.match,index:$.start,groups:$.groups}),$=await ye($.next),A++}return C}}async function Ce(c,d,m,C){if(!(typeof c>"u")){var A=this;if(d==="")throw{code:"D3010",stack:new Error().stack,value:d,index:2};if(C<0)throw{code:"D3011",stack:new Error().stack,value:C,index:4};var $;typeof m=="string"?$=function(De){for(var it="",Ee=0,et=m.indexOf("$",Ee);et!==-1&&Ee<m.length;){it+=m.substring(Ee,et),Ee=et+1;var Nt=m.charAt(Ee);if(Nt==="$")it+="$",Ee++;else if(Nt==="0")it+=De.match,Ee++;else{var Ve;if(De.groups.length===0?Ve=1:Ve=Math.floor(Math.log(De.groups.length)*Math.LOG10E)+1,et=parseInt(m.substring(Ee,Ee+Ve),10),Ve>1&&et>De.groups.length&&(et=parseInt(m.substring(Ee,Ee+Ve-1),10)),isNaN(et))it+="$";else{if(De.groups.length>0){var mn=De.groups[et-1];typeof mn<"u"&&(it+=mn)}Ee+=et.toString().length}}et=m.indexOf("$",Ee)}return it+=m.substring(Ee),it}:$=m;var K="",ue=0;if(typeof C>"u"||C>0){var ge=0;if(typeof d=="string"){for(var Fe=c.indexOf(d,ue);Fe!==-1&&(typeof C>"u"||ge<C);)K+=c.substring(ue,Fe),K+=m,ue=Fe+d.length,ge++,Fe=c.indexOf(d,ue);K+=c.substring(ue)}else{var ke=await ye(d,c);if(typeof ke<"u"){for(;typeof ke<"u"&&(typeof C>"u"||ge<C);){K+=c.substring(ue,ke.start);var qe=$.apply(A,[ke]);if(N(qe)&&(qe=await qe),typeof qe=="string")K+=qe;else throw{code:"D3012",stack:new Error().stack,value:qe};ue=ke.start+ke.match.length,ge++,ke=await ye(ke.next)}K+=c.substring(ue)}else K=c}}else K=c;return K}}function Pe(c){if(!(typeof c>"u")){var d=typeof window<"u"?window.btoa:function(m){return new l.Buffer.from(m,"binary").toString("base64")};return d(c)}}function x(c){if(!(typeof c>"u")){var d=typeof window<"u"?window.atob:function(m){return new l.Buffer.from(m,"base64").toString("binary")};return d(c)}}function _(c){if(!(typeof c>"u")){var d;try{d=encodeURIComponent(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"encodeUrlComponent"}}return d}}function ce(c){if(!(typeof c>"u")){var d;try{d=encodeURI(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"encodeUrl"}}return d}}function _e(c){if(!(typeof c>"u")){var d;try{d=decodeURIComponent(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"decodeUrlComponent"}}return d}}function Ge(c){if(!(typeof c>"u")){var d;try{d=decodeURI(c)}catch{throw{code:"D3140",stack:new Error().stack,value:c,functionName:"decodeUrl"}}return d}}async function Re(c,d,m){if(!(typeof c>"u")){if(m<0)throw{code:"D3020",stack:new Error().stack,value:m,index:3};var C=[];if(typeof m>"u"||m>0)if(typeof d=="string")C=c.split(d,m);else{var A=0,$=await ye(d,c);if(typeof $<"u"){for(var K=0;typeof $<"u"&&(typeof m>"u"||A<m);)C.push(c.substring(K,$.start)),K=$.end,$=await ye($.next),A++;(typeof m>"u"||A<m)&&C.push(c.substring(K))}else C.push(c)}return C}}function P(c,d){if(!(typeof c>"u"))return typeof d>"u"&&(d=""),c.join(d)}function q(c,d,m){if(!(typeof c>"u")){var C={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},A=C;typeof m<"u"&&Object.keys(m).forEach(function(we){A[we]=m[we]});for(var $=[],K=A["zero-digit"].charCodeAt(0),ue=K;ue<K+10;ue++)$.push(String.fromCharCode(ue));var ge=$.concat([A["decimal-separator"],A["exponent-separator"],A["grouping-separator"],A.digit,A["pattern-separator"]]),Fe=d.split(A["pattern-separator"]);if(Fe.length>2)throw{code:"D3080",stack:new Error().stack};var ke=function(we){var Ke=function(){for(var tt,St=0;St<we.length;St++)if(tt=we.charAt(St),ge.indexOf(tt)!==-1&&tt!==A["exponent-separator"])return we.substring(0,St)}(),vt=function(){for(var tt,St=we.length-1;St>=0;St--)if(tt=we.charAt(St),ge.indexOf(tt)!==-1&&tt!==A["exponent-separator"])return we.substring(St+1)}(),Ye=we.substring(Ke.length,we.length-vt.length),Ot,Xt,kt,rt,Tt=we.indexOf(A["exponent-separator"],Ke.length);Tt===-1||Tt>we.length-vt.length?(Ot=Ye,Xt=void 0):(Ot=Ye.substring(0,Tt),Xt=Ye.substring(Tt+1));var Pt=Ot.indexOf(A["decimal-separator"]);return Pt===-1?(kt=Ot,rt=vt):(kt=Ot.substring(0,Pt),rt=Ot.substring(Pt+1)),{prefix:Ke,suffix:vt,activePart:Ye,mantissaPart:Ot,exponentPart:Xt,integerPart:kt,fractionalPart:rt,subpicture:we}},qe=function(we){var Ke,vt,Ye=we.subpicture,Ot=Ye.indexOf(A["decimal-separator"]);Ot!==Ye.lastIndexOf(A["decimal-separator"])&&(Ke="D3081"),Ye.indexOf(A.percent)!==Ye.lastIndexOf(A.percent)&&(Ke="D3082"),Ye.indexOf(A["per-mille"])!==Ye.lastIndexOf(A["per-mille"])&&(Ke="D3083"),Ye.indexOf(A.percent)!==-1&&Ye.indexOf(A["per-mille"])!==-1&&(Ke="D3084");var Xt=!1;for(vt=0;vt<we.mantissaPart.length;vt++){var kt=we.mantissaPart.charAt(vt);if($.indexOf(kt)!==-1||kt===A.digit){Xt=!0;break}}Xt||(Ke="D3085");var rt=we.activePart.split("").map(function(tt){return ge.indexOf(tt)===-1?"p":"a"}).join("");rt.indexOf("p")!==-1&&(Ke="D3086"),Ot!==-1?(Ye.charAt(Ot-1)===A["grouping-separator"]||Ye.charAt(Ot+1)===A["grouping-separator"])&&(Ke="D3087"):we.integerPart.charAt(we.integerPart.length-1)===A["grouping-separator"]&&(Ke="D3088"),Ye.indexOf(A["grouping-separator"]+A["grouping-separator"])!==-1&&(Ke="D3089");var Tt=we.integerPart.indexOf(A.digit);Tt!==-1&&we.integerPart.substring(0,Tt).split("").filter(function(tt){return $.indexOf(tt)>-1}).length>0&&(Ke="D3090"),Tt=we.fractionalPart.lastIndexOf(A.digit),Tt!==-1&&we.fractionalPart.substring(Tt).split("").filter(function(tt){return $.indexOf(tt)>-1}).length>0&&(Ke="D3091");var Pt=typeof we.exponentPart=="string";if(Pt&&we.exponentPart.length>0&&(Ye.indexOf(A.percent)!==-1||Ye.indexOf(A["per-mille"])!==-1)&&(Ke="D3092"),Pt&&(we.exponentPart.length===0||we.exponentPart.split("").filter(function(tt){return $.indexOf(tt)===-1}).length>0)&&(Ke="D3093"),Ke)throw{code:Ke,stack:new Error().stack}},De=function(we){var Ke=function(ct,Pn){for(var vn=[],en=ct.indexOf(A["grouping-separator"]);en!==-1;){var Yn=(Pn?ct.substring(0,en):ct.substring(en)).split("").filter(function(An){return $.indexOf(An)!==-1||An===A.digit}).length;vn.push(Yn),en=we.integerPart.indexOf(A["grouping-separator"],en+1)}return vn},vt=Ke(we.integerPart),Ye=function(ct){if(ct.length===0)return 0;for(var Pn=function(Yn,An){return An===0?Yn:Pn(An,Yn%An)},vn=ct.reduce(Pn),en=1;en<=ct.length;en++)if(ct.indexOf(en*vn)===-1)return 0;return vn},Ot=Ye(vt),Xt=Ke(we.fractionalPart,!0),kt=we.integerPart.split("").filter(function(ct){return $.indexOf(ct)!==-1}).length,rt=kt,Tt=we.fractionalPart.split(""),Pt=Tt.filter(function(ct){return $.indexOf(ct)!==-1}).length,tt=Tt.filter(function(ct){return $.indexOf(ct)!==-1||ct===A.digit}).length,St=typeof we.exponentPart=="string";kt===0&&tt===0&&(St?(Pt=1,tt=1):kt=1),St&&kt===0&&we.integerPart.indexOf(A.digit)!==-1&&(kt=1),kt===0&&Pt===0&&(Pt=1);var Tn=0;return St&&(Tn=we.exponentPart.split("").filter(function(ct){return $.indexOf(ct)!==-1}).length),{integerPartGroupingPositions:vt,regularGrouping:Ot,minimumIntegerPartSize:kt,scalingFactor:rt,prefix:we.prefix,fractionalPartGroupingPositions:Xt,minimumFactionalPartSize:Pt,maximumFactionalPartSize:tt,minimumExponentSize:Tn,suffix:we.suffix,picture:we.subpicture}},it=Fe.map(ke);it.forEach(qe);var Ee=it.map(De),et=A["minus-sign"],Nt=A["zero-digit"],Ve=A["decimal-separator"],mn=A["grouping-separator"];Ee.length===1&&(Ee.push(JSON.parse(JSON.stringify(Ee[0]))),Ee[1].prefix=et+Ee[1].prefix);var Qe;c>=0?Qe=Ee[0]:Qe=Ee[1];var Cn;Qe.picture.indexOf(A.percent)!==-1?Cn=c*100:Qe.picture.indexOf(A["per-mille"])!==-1?Cn=c*1e3:Cn=c;var st,Qt;if(Qe.minimumExponentSize===0)st=Cn;else{var mi=Math.pow(10,Qe.scalingFactor),Nr=Math.pow(10,Qe.scalingFactor-1);for(st=Cn,Qt=0;st<Nr;)st*=10,Qt-=1;for(;st>mi;)st/=10,Qt+=1}var lr=ne(st,Qe.maximumFactionalPartSize),$r=function(we,Ke){var vt=Math.abs(we).toFixed(Ke);return Nt!=="0"&&(vt=vt.split("").map(function(Ye){return Ye>="0"&&Ye<="9"?$[Ye.charCodeAt(0)-48]:Ye}).join("")),vt},Ae=$r(lr,Qe.maximumFactionalPartSize),at=Ae.indexOf(".");for(at===-1?Ae=Ae+Ve:Ae=Ae.replace(".",Ve);Ae.charAt(0)===Nt;)Ae=Ae.substring(1);for(;Ae.charAt(Ae.length-1)===Nt;)Ae=Ae.substring(0,Ae.length-1);at=Ae.indexOf(Ve);var gn=Qe.minimumIntegerPartSize-at,cr=Qe.minimumFactionalPartSize-(Ae.length-at-1);if(Ae=(gn>0?new Array(gn+1).join(Nt):"")+Ae,Ae=Ae+(cr>0?new Array(cr+1).join(Nt):""),at=Ae.indexOf(Ve),Qe.regularGrouping>0)for(var Ct=Math.floor((at-1)/Qe.regularGrouping),On=1;On<=Ct;On++)Ae=[Ae.slice(0,at-On*Qe.regularGrouping),mn,Ae.slice(at-On*Qe.regularGrouping)].join("");else Qe.integerPartGroupingPositions.forEach(function(we){Ae=[Ae.slice(0,at-we),mn,Ae.slice(at-we)].join(""),at++});if(at=Ae.indexOf(Ve),Qe.fractionalPartGroupingPositions.forEach(function(we){Ae=[Ae.slice(0,we+at+1),mn,Ae.slice(we+at+1)].join("")}),at=Ae.indexOf(Ve),(Qe.picture.indexOf(Ve)===-1||at===Ae.length-1)&&(Ae=Ae.substring(0,Ae.length-1)),typeof Qt<"u"){var Kn=$r(Qt,0);gn=Qe.minimumExponentSize-Kn.length,gn>0&&(Kn=new Array(gn+1).join(Nt)+Kn),Ae=Ae+A["exponent-separator"]+(Qt<0?et:"")+Kn}return Ae=Qe.prefix+Ae+Qe.suffix,Ae}}function R(c,d){if(!(typeof c>"u")){if(c=ne(c),typeof d>"u"?d=10:d=ne(d),d<2||d>36)throw{code:"D3100",stack:new Error().stack,value:d};var m=c.toString(d);return m}}function Y(c){var d;if(!(typeof c>"u")){if(typeof c=="number")d=c;else if(typeof c=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(c)&&!isNaN(parseFloat(c))&&isFinite(c))d=parseFloat(c);else if(typeof c=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(c))d=Number(c);else if(c===!0)d=1;else if(c===!1)d=0;else throw{code:"D3030",value:c,stack:new Error().stack,index:1};return d}}function te(c){var d;if(!(typeof c>"u"))return d=Math.abs(c),d}function J(c){var d;if(!(typeof c>"u"))return d=Math.floor(c),d}function B(c){var d;if(!(typeof c>"u"))return d=Math.ceil(c),d}function ne(c,d){var m;if(!(typeof c>"u")){if(d){var C=c.toString().split("e");c=+(C[0]+"e"+(C[1]?+C[1]+d:d))}m=Math.round(c);var A=m-c;return Math.abs(A)===.5&&Math.abs(m%2)===1&&(m=m-1),d&&(C=m.toString().split("e"),m=+(C[0]+"e"+(C[1]?+C[1]-d:-d))),Object.is(m,-0)&&(m=0),m}}function me(c){var d;if(!(typeof c>"u")){if(c<0)throw{stack:new Error().stack,code:"D3060",index:1,value:c};return d=Math.sqrt(c),d}}function Te(c,d){var m;if(!(typeof c>"u")){if(m=Math.pow(c,d),!isFinite(m))throw{stack:new Error().stack,code:"D3061",index:1,value:c,exp:d};return m}}function Le(){return Math.random()}function fe(c){if(!(typeof c>"u")){var d=!1;if(Array.isArray(c)){if(c.length===1)d=fe(c[0]);else if(c.length>1){var m=c.filter(function(C){return fe(C)});d=m.length>0}}else typeof c=="string"?c.length>0&&(d=!0):w(c)?c!==0&&(d=!0):c!==null&&typeof c=="object"?Object.keys(c).length>0&&(d=!0):typeof c=="boolean"&&c===!0&&(d=!0);return d}}function Ie(c){if(!(typeof c>"u"))return!fe(c)}function Ne(c,d,m,C){var A=[d],$=G(c);return $>=2&&A.push(m),$>=3&&A.push(C),A}async function de(c,d){if(!(typeof c>"u")){for(var m=S(),C=0;C<c.length;C++){var A=Ne(d,c[C],C,c),$=await d.apply(this,A);typeof $<"u"&&m.push($)}return m}}async function ot(c,d){if(!(typeof c>"u")){for(var m=S(),C=0;C<c.length;C++){var A=c[C],$=Ne(d,A,C,c),K=await d.apply(this,$);fe(K)&&m.push(A)}return m}}async function Ft(c,d){if(!(typeof c>"u")){for(var m=!1,C,A=0;A<c.length;A++){var $=c[A],K=!0;if(typeof d<"u"){var ue=Ne(d,$,A,c),ge=await d.apply(this,ue);K=fe(ge)}if(K)if(!m)C=$,m=!0;else throw{stack:new Error().stack,code:"D3138",index:A}}if(!m)throw{stack:new Error().stack,code:"D3139"};return C}}function bt(){for(var c=[],d=Array.prototype.slice.call(arguments),m=Math.min.apply(Math,d.map(function($){return Array.isArray($)?$.length:0})),C=0;C<m;C++){var A=d.map($=>$[C]);c.push(A)}return c}async function lt(c,d,m){if(!(typeof c>"u")){var C,A=G(d);if(A<2)throw{stack:new Error().stack,code:"D3050",index:1};var $;for(typeof m>"u"&&c.length>0?(C=c[0],$=1):(C=m,$=0);$<c.length;){var K=[C,c[$]];A>=3&&K.push($),A>=4&&K.push(c),C=await d.apply(this,K),$++}return C}}function wt(c){var d=S();if(Array.isArray(c)){var m={};c.forEach(function(C){var A=wt(C);A.forEach(function($){m[$]=!0})}),d=wt(m)}else c!==null&&typeof c=="object"&&!T(c)&&Object.keys(c).forEach(C=>d.push(C));return d}function Bt(c,d){var m;if(Array.isArray(c)){m=S();for(var C=0;C<c.length;C++){var A=Bt(c[C],d);typeof A<"u"&&(Array.isArray(A)?A.forEach($=>m.push($)):m.push(A))}}else c!==null&&typeof c=="object"&&!T(c)&&(m=c[d]);return m}function on(c,d){return typeof c>"u"?d:typeof d>"u"?c:(Array.isArray(c)||(c=S(c)),Array.isArray(d)||(d=[d]),c.concat(d))}function kn(c){return!(typeof c>"u")}function Zt(c){var d=S();if(Array.isArray(c))c.forEach(function(A){d=on(d,Zt(A))});else if(c!==null&&typeof c=="object"&&!z(c))for(var m in c){var C={};C[m]=c[m],d.push(C)}else d=c;return d}function oe(c){if(!(typeof c>"u")){var d={};return c.forEach(function(m){for(var C in m)d[C]=m[C]}),d}}function Sn(c){if(!(typeof c>"u")){if(c.length<=1)return c;for(var d=c.length,m=new Array(d),C=0;C<d;C++)m[d-C-1]=c[C];return m}}async function fn(c,d){var m=S();for(var C in c){var A=Ne(d,c[C],C,c),$=await d.apply(this,A);typeof $<"u"&&m.push($)}return m}function qt(c){throw{code:"D3137",stack:new Error().stack,message:c||"$error() function evaluated"}}function nt(c,d){if(!c)throw{code:"D3141",stack:new Error().stack,message:d||"$assert() statement failed"}}function Wt(c){if(c!==void 0)return c===null?"null":w(c)?"number":typeof c=="string"?"string":typeof c=="boolean"?"boolean":Array.isArray(c)?"array":T(c)?"function":"object"}async function $e(c,d){if(!(typeof c>"u")){if(c.length<=1)return c;var m;if(typeof d>"u"){if(!I(c)&&!v(c))throw{stack:new Error().stack,code:"D3070",index:1};m=async function(K,ue){return K>ue}}else m=d;var C=async function(K,ue){var ge=async function(ke,qe,De){qe.length===0?Array.prototype.push.apply(ke,De):De.length===0?Array.prototype.push.apply(ke,qe):await m(qe[0],De[0])?(ke.push(De[0]),await ge(ke,qe,De.slice(1))):(ke.push(qe[0]),await ge(ke,qe.slice(1),De))},Fe=[];return await ge(Fe,K,ue),Fe},A=async function(K){if(!Array.isArray(K)||K.length<=1)return K;var ue=Math.floor(K.length/2),ge=K.slice(0,ue),Fe=K.slice(ue);return ge=await A(ge),Fe=await A(Fe),await C(ge,Fe)},$=await A(c);return $}}function f(c){if(!(typeof c>"u")){if(c.length<=1)return c;for(var d=new Array(c.length),m=0;m<c.length;m++){var C=Math.floor(Math.random()*(m+1));m!==C&&(d[m]=d[C]),d[C]=c[m]}return d}}function k(c){if(!(typeof c>"u")){if(!Array.isArray(c)||c.length<=1)return c;for(var d=y(c)?S():[],m=0;m<c.length;m++){for(var C=c[m],A=!1,$=0;$<d.length;$++)if(re(C,d[$])){A=!0;break}A||d.push(C)}return d}}async function E(c,d){var m={};for(var C in c){var A=c[C],$=Ne(d,A,C,c),K=await d.apply(this,$);fe(K)&&(m[C]=A)}return Object.keys(m).length===0&&(m=void 0),m}return{sum:L,count:W,max:D,min:b,average:F,string:U,substring:se,substringBefore:ve,substringAfter:Q,lowercase:ae,uppercase:pe,length:Se,trim:ze,pad:be,match:ie,contains:We,replace:Ce,split:Re,join:P,formatNumber:q,formatBase:R,number:Y,floor:J,ceil:B,round:ne,abs:te,sqrt:me,power:Te,random:Le,boolean:fe,not:Ie,map:de,zip:bt,filter:ot,single:Ft,foldLeft:lt,sift:E,keys:wt,lookup:Bt,append:on,exists:kn,spread:Zt,merge:oe,reverse:Sn,each:fn,error:qt,assert:nt,type:Wt,sort:$e,shuffle:f,distinct:k,base64encode:Pe,base64decode:x,encodeUrlComponent:_,encodeUrl:ce,decodeUrlComponent:_e,decodeUrl:Ge}})();i.exports=h}).call(this)}).call(this,typeof Si<"u"?Si:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(n,i,s){var l=n("./datetime"),a=n("./functions"),h=n("./utils"),w=n("./parser"),v=n("./signature"),I=function(){var S=h.isNumeric,y=h.isArrayOfStrings,T=h.isArrayOfNumbers,z=h.createSequence,N=h.isSequence,G=h.isFunction,re=h.isLambda,j=h.isIterable,L=h.isPromise,W=h.getFunctionArity,D=h.isDeepEqual,b=qt(null);async function F(f,k,E){var c,d=E.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(d&&await d(f,k,E),f.type){case"path":c=await U(f,k,E);break;case"binary":c=await Se(f,k,E);break;case"unary":c=await ze(f,k,E);break;case"name":c=be(f,k);break;case"string":case"number":case"value":c=ye(f);break;case"wildcard":c=We(f,k);break;case"descendant":c=Ce(f,k);break;case"parent":c=E.lookup(f.slot.label);break;case"condition":c=await J(f,k,E);break;case"block":c=await B(f,k,E);break;case"bind":c=await te(f,k,E);break;case"regex":c=ne(f);break;case"function":c=await Ne(f,k,E);break;case"variable":c=me(f,k,E);break;case"lambda":c=Ft(f,k,E);break;case"partial":c=await bt(f,k,E);break;case"apply":c=await Ie(f,k,E);break;case"transform":c=Le(f,k,E);break}if(Object.prototype.hasOwnProperty.call(f,"predicate"))for(var m=0;m<f.predicate.length;m++)c=await pe(f.predicate[m].expr,c,E);f.type!=="path"&&Object.prototype.hasOwnProperty.call(f,"group")&&(c=await q(f.group,c,E));var C=E.lookup(Symbol.for("jsonata.__evaluate_exit"));return C&&await C(f,k,E,c),c&&N(c)&&!c.tupleStream&&(f.keepArray&&(c.keepSingleton=!0),c.length===0?c=void 0:c.length===1&&(c=c.keepSingleton?c:c[0])),c}async function U(f,k,E){var c;Array.isArray(k)&&f.steps[0].type!=="variable"?c=k:c=z(k);for(var d,m=!1,C=void 0,A=0;A<f.steps.length;A++){var $=f.steps[A];if($.tuple&&(m=!0),A===0&&$.consarray?d=await F($,c,E):m?C=await ae($,c,C,E):d=await ve($,c,E,A===f.steps.length-1),!m&&(typeof d>"u"||d.length===0))break;typeof $.focus>"u"&&(c=d)}if(m)if(f.tuple)d=C;else for(d=z(),A=0;A<C.length;A++)d.push(C[A]["@"]);return f.keepSingletonArray&&(Array.isArray(d)&&d.cons&&!d.sequence&&(d=z(d)),d.keepSingleton=!0),f.hasOwnProperty("group")&&(d=await q(f.group,m?C:d,E)),d}function se(f,k){var E=qt(f);for(const c in k)E.bind(c,k[c]);return E}async function ve(f,k,E,c){var d;if(f.type==="sort")return d=await Te(f,k,E),f.stages&&(d=await Q(f.stages,d,E)),d;d=z();for(var m=0;m<k.length;m++){var C=await F(f,k[m],E);if(f.stages)for(var A=0;A<f.stages.length;A++)C=await pe(f.stages[A].expr,C,E);typeof C<"u"&&d.push(C)}var $=z();return c&&d.length===1&&Array.isArray(d[0])&&!N(d[0])?$=d[0]:d.forEach(function(K){!Array.isArray(K)||K.cons?$.push(K):K.forEach(ue=>$.push(ue))}),$}async function Q(f,k,E){for(var c=k,d=0;d<f.length;d++){var m=f[d];switch(m.type){case"filter":c=await pe(m.expr,c,E);break;case"index":for(var C=0;C<c.length;C++){var A=c[C];A[m.value]=C}break}}return c}async function ae(f,k,E,c){var d;if(f.type==="sort"){if(E)d=await Te(f,E,c);else{var m=await Te(f,k,c);d=z(),d.tupleStream=!0;for(var C=0;C<m.length;C++){var A={"@":m[C]};A[f.index]=C,d.push(A)}}return f.stages&&(d=await Q(f.stages,d,c)),d}d=z(),d.tupleStream=!0;var $=c;E===void 0&&(E=k.map(Fe=>({"@":Fe})));for(var K=0;K<E.length;K++){$=se(c,E[K]);var ue=await F(f,E[K]["@"],$);if(typeof ue<"u"){Array.isArray(ue)||(ue=[ue]);for(var ge=0;ge<ue.length;ge++)A={},Object.assign(A,E[K]),ue.tupleStream?Object.assign(A,ue[ge]):(f.focus?(A[f.focus]=ue[ge],A["@"]=E[K]["@"]):A["@"]=ue[ge],f.index&&(A[f.index]=ge),f.ancestor&&(A[f.ancestor.label]=E[K]["@"])),d.push(A)}}return f.stages&&(d=await Q(f.stages,d,c)),d}async function pe(f,k,E){var c=z();if(k&&k.tupleStream&&(c.tupleStream=!0),Array.isArray(k)||(k=z(k)),f.type==="number"){var d=Math.floor(f.value);d<0&&(d=k.length+d);var m=k[d];typeof m<"u"&&(Array.isArray(m)?c=m:c.push(m))}else for(d=0;d<k.length;d++){var m=k[d],C=m,A=E;k.tupleStream&&(C=m["@"],A=se(E,m));var $=await F(f,C,A);S($)&&($=[$]),T($)?$.forEach(function(ue){var ge=Math.floor(ue);ge<0&&(ge=k.length+ge),ge===d&&c.push(m)}):a.boolean($)&&c.push(m)}return c}async function Se(f,k,E){var c,d=await F(f.lhs,k,E),m=f.value,C=async()=>await F(f.rhs,k,E);if(m==="and"||m==="or")try{return await Ge(d,C,m)}catch($){throw $.position=f.position,$.token=m,$}var A=await C();try{switch(m){case"+":case"-":case"*":case"/":case"%":c=x(d,A,m);break;case"=":case"!=":c=_(d,A,m);break;case"<":case"<=":case">":case">=":c=ce(d,A,m);break;case"&":c=P(d,A);break;case"..":c=Y(d,A);break;case"in":c=_e(d,A);break}}catch($){throw $.position=f.position,$.token=m,$}return c}async function ze(f,k,E){var c;switch(f.value){case"-":if(c=await F(f.expression,k,E),typeof c>"u")c=void 0;else if(S(c))c=-c;else throw{code:"D1002",stack:new Error().stack,position:f.position,token:f.value,value:c};break;case"[":c=[];let C=await Promise.all(f.expressions.map(async(A,$)=>(E.isParallelCall=$>0,[A,await F(A,k,E)])));for(let A of C){var[d,m]=A;typeof m<"u"&&(d.value==="["?c.push(m):c=a.append(c,m))}f.consarray&&Object.defineProperty(c,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":c=await q(f,k,E);break}return c}function be(f,k,E){return a.lookup(k,f.value)}function ye(f){return f.value}function We(f,k){var E=z();return Array.isArray(k)&&k.outerWrapper&&k.length>0&&(k=k[0]),k!==null&&typeof k=="object"&&Object.keys(k).forEach(function(c){var d=k[c];Array.isArray(d)?(d=ie(d),E=a.append(E,d)):E.push(d)}),E}function ie(f,k){return typeof k>"u"&&(k=[]),Array.isArray(f)?f.forEach(function(E){ie(E,k)}):k.push(f),k}function Ce(f,k){var E,c=z();return typeof k<"u"&&(Pe(k,c),c.length===1?E=c[0]:E=c),E}function Pe(f,k){Array.isArray(f)||k.push(f),Array.isArray(f)?f.forEach(function(E){Pe(E,k)}):f!==null&&typeof f=="object"&&Object.keys(f).forEach(function(E){Pe(f[E],k)})}function x(f,k,E){var c;if(typeof f<"u"&&!S(f))throw{code:"T2001",stack:new Error().stack,value:f};if(typeof k<"u"&&!S(k))throw{code:"T2002",stack:new Error().stack,value:k};if(typeof f>"u"||typeof k>"u")return c;switch(E){case"+":c=f+k;break;case"-":c=f-k;break;case"*":c=f*k;break;case"/":c=f/k;break;case"%":c=f%k;break}return c}function _(f,k,E){var c,d=typeof f,m=typeof k;if(d==="undefined"||m==="undefined")return!1;switch(E){case"=":c=D(f,k);break;case"!=":c=!D(f,k);break}return c}function ce(f,k,E){var c,d=typeof f,m=typeof k,C=d==="undefined"||d==="string"||d==="number",A=m==="undefined"||m==="string"||m==="number";if(!C||!A)throw{code:"T2010",stack:new Error().stack,value:d==="string"||d==="number"?k:f};if(!(d==="undefined"||m==="undefined")){if(d!==m)throw{code:"T2009",stack:new Error().stack,value:f,value2:k};switch(E){case"<":c=f<k;break;case"<=":c=f<=k;break;case">":c=f>k;break;case">=":c=f>=k;break}return c}}function _e(f,k){var E=!1;if(typeof f>"u"||typeof k>"u")return!1;Array.isArray(k)||(k=[k]);for(var c=0;c<k.length;c++)if(k[c]===f){E=!0;break}return E}async function Ge(f,k,E){var c,d=Re(f);switch(E){case"and":c=d&&Re(await k());break;case"or":c=d||Re(await k());break}return c}function Re(f){var k=a.boolean(f);return typeof k>"u"?!1:k}function P(f,k){var E,c="",d="";return typeof f<"u"&&(c=a.string(f)),typeof k<"u"&&(d=a.string(k)),E=c.concat(d),E}async function q(f,k,E){var c={},d={},m=!!(k&&k.tupleStream);Array.isArray(k)||(k=z(k)),k.length===0&&k.push(void 0);for(var C=0;C<k.length;C++)for(var A=k[C],$=m?se(E,A):E,K=0;K<f.lhs.length;K++){var ue=f.lhs[K],ge=await F(ue[0],m?A["@"]:A,$);if(typeof ge!="string"&&ge!==void 0)throw{code:"T1003",stack:new Error().stack,position:f.position,value:ge};if(ge!==void 0){var Fe={data:A,exprIndex:K};if(d.hasOwnProperty(ge)){if(d[ge].exprIndex!==K)throw{code:"D1009",stack:new Error().stack,position:f.position,value:ge};d[ge].data=a.append(d[ge].data,A)}else d[ge]=Fe}}let ke=await Promise.all(Object.keys(d).map(async(De,it)=>{let Ee=d[De];var et=Ee.data,Nt=E;if(m){var Ve=R(Ee.data);et=Ve["@"],delete Ve["@"],Nt=se(E,Ve)}return E.isParallelCall=it>0,[De,await F(f.lhs[Ee.exprIndex][1],et,Nt)]}));for(let De of ke){var[ge,qe]=await De;typeof qe<"u"&&(c[ge]=qe)}return c}function R(f){if(!Array.isArray(f))return f;var k={};Object.assign(k,f[0]);for(var E=1;E<f.length;E++)for(const c in f[E])k[c]=a.append(k[c],f[E][c]);return k}function Y(f,k){var E;if(typeof f<"u"&&!Number.isInteger(f))throw{code:"T2003",stack:new Error().stack,value:f};if(typeof k<"u"&&!Number.isInteger(k))throw{code:"T2004",stack:new Error().stack,value:k};if(typeof f>"u"||typeof k>"u"||f>k)return E;var c=k-f+1;if(c>1e7)throw{code:"D2014",stack:new Error().stack,value:c};E=new Array(c);for(var d=f,m=0;d<=k;d++,m++)E[m]=d;return E.sequence=!0,E}async function te(f,k,E){var c=await F(f.rhs,k,E);return E.bind(f.lhs.value,c),c}async function J(f,k,E){var c,d=await F(f.condition,k,E);return a.boolean(d)?c=await F(f.then,k,E):typeof f.else<"u"&&(c=await F(f.else,k,E)),c}async function B(f,k,E){for(var c,d=qt(E),m=0;m<f.expressions.length;m++)c=await F(f.expressions[m],k,d);return c}function ne(f){var k=new $e.RegexEngine(f.value),E=function(c,d){var m;k.lastIndex=d||0;var C=k.exec(c);if(C!==null){if(m={match:C[0],start:C.index,end:C.index+C[0].length,groups:[]},C.length>1)for(var A=1;A<C.length;A++)m.groups.push(C[A]);m.next=function(){if(!(k.lastIndex>=c.length)){var $=E(c,k.lastIndex);if($&&$.match==="")throw{code:"D1004",stack:new Error().stack,position:f.position,value:f.value.source};return $}}}return m};return E}function me(f,k,E){var c;return f.value===""?c=k&&k.outerWrapper?k[0]:k:c=E.lookup(f.value),c}async function Te(f,k,E){var c,d=k,m=!!k.tupleStream,C=async function($,K){for(var ue=0,ge=0;ue===0&&ge<f.terms.length;ge++){var Fe=f.terms[ge],ke=$,qe=E;m&&(ke=$["@"],qe=se(E,$));var De=await F(Fe.expression,ke,qe);ke=K,qe=E,m&&(ke=K["@"],qe=se(E,K));var it=await F(Fe.expression,ke,qe),Ee=typeof De,et=typeof it;if(Ee==="undefined"){ue=et==="undefined"?0:1;continue}if(et==="undefined"){ue=-1;continue}if(!(Ee==="string"||Ee==="number")||!(et==="string"||et==="number"))throw{code:"T2008",stack:new Error().stack,position:f.position,value:Ee==="string"||Ee==="number"?it:De};if(Ee!==et)throw{code:"T2007",stack:new Error().stack,position:f.position,value:De,value2:it};De!==it&&(De<it?ue=-1:ue=1,Fe.descending===!0&&(ue=-ue))}return ue===1},A={environment:E,input:k};return c=await a.sort.apply(A,[d,C]),c}function Le(f,k,E){var c=async function(d){if(!(typeof d>"u")){var m=E.lookup("clone");if(!G(m))throw{code:"T2013",stack:new Error().stack,position:f.position};var C=await de(m,[d],null,E),A=await F(f.pattern,C,E);if(typeof A<"u"){Array.isArray(A)||(A=[A]);for(var $=0;$<A.length;$++){var K=A[$];if(K&&(K.isPrototypeOf(C)||K instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:f.position};var ue=await F(f.update,K,E),ge=typeof ue;if(ge!=="undefined"){if(ge!=="object"||ue===null||Array.isArray(ue))throw{code:"T2011",stack:new Error().stack,position:f.update.position,value:ue};for(var Fe in ue)K[Fe]=ue[Fe]}if(typeof f.delete<"u"){var ke=await F(f.delete,K,E);if(typeof ke<"u"){var qe=ke;if(Array.isArray(ke)||(ke=[ke]),!y(ke))throw{code:"T2012",stack:new Error().stack,position:f.delete.position,value:qe};for(var De=0;De<ke.length;De++)typeof K=="object"&&K!==null&&delete K[ke[De]]}}}}return C}};return oe(c,"<(oa):o>")}var fe=w("function($f, $g) { function($x){ $g($f($x)) } }");async function Ie(f,k,E){var c,d=await F(f.lhs,k,E);if(f.rhs.type==="function")c=await Ne(f.rhs,k,E,{context:d});else{var m=await F(f.rhs,k,E);if(!G(m))throw{code:"T2006",stack:new Error().stack,position:f.position,value:m};if(G(d)){var C=await F(fe,null,E);c=await de(C,[d,m],null,E)}else c=await de(m,[d],null,E)}return c}async function Ne(f,k,E,c){var d,m=await F(f.procedure,k,E);if(typeof m>"u"&&f.procedure.type==="path"&&E.lookup(f.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:f.position,token:f.procedure.steps[0].value};var C=[];typeof c<"u"&&C.push(c.context);for(var A=0;A<f.arguments.length;A++){const K=await F(f.arguments[A],k,E);if(G(K)){const ue=async function(...ge){return await de(K,ge,null,E)};ue.arity=W(K),C.push(ue)}else C.push(K)}var $=f.procedure.type==="path"?f.procedure.steps[0].value:f.procedure.value;try{typeof m=="object"&&(m.token=$,m.position=f.position),d=await de(m,C,k,E)}catch(K){throw K.position||(K.position=f.position),K.token||(K.token=$),K}return d}async function de(f,k,E,c){var d;for(d=await ot(f,k,E,c);re(d)&&d.thunk===!0;){var m=await F(d.body.procedure,d.input,d.environment);d.body.procedure.type==="variable"&&(m.token=d.body.procedure.value),m.position=d.body.procedure.position;for(var C=[],A=0;A<d.body.arguments.length;A++)C.push(await F(d.body.arguments[A],d.input,d.environment));d=await ot(m,C,E,c)}return d}async function ot(f,k,E,c){var d;try{var m=k;if(f&&(m=lt(f.signature,k,E)),re(f))d=await wt(f,m);else if(f&&f._jsonata_function===!0){var C={environment:c,input:E};d=f.implementation.apply(C,m),j(d)&&(d=d.next().value),L(d)&&(d=await d)}else if(typeof f=="function")d=f.apply(E,m),L(d)&&(d=await d);else throw{code:"T1006",stack:new Error().stack}}catch(A){throw f&&(typeof A.token>"u"&&typeof f.token<"u"&&(A.token=f.token),A.position=f.position||A.position),A}return d}function Ft(f,k,E){var c={_jsonata_lambda:!0,input:k,environment:E,arguments:f.arguments,signature:f.signature,body:f.body};return f.thunk===!0&&(c.thunk=!0),c.apply=async function(d,m){return await de(c,m,k,d?d.environment:E)},c}async function bt(f,k,E){for(var c,d=[],m=0;m<f.arguments.length;m++){var C=f.arguments[m];C.type==="operator"&&C.value==="?"?d.push(C):d.push(await F(C,k,E))}var A=await F(f.procedure,k,E);if(typeof A>"u"&&f.procedure.type==="path"&&E.lookup(f.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:f.position,token:f.procedure.steps[0].value};if(re(A))c=Bt(A,d);else if(A&&A._jsonata_function===!0)c=on(A.implementation,d);else if(typeof A=="function")c=on(A,d);else throw{code:"T1008",stack:new Error().stack,position:f.position,token:f.procedure.type==="path"?f.procedure.steps[0].value:f.procedure.value};return c}function lt(f,k,E){if(typeof f>"u")return k;var c=f.validate(k,E);return c}async function wt(f,k){var E,c=qt(f.environment);return f.arguments.forEach(function(d,m){c.bind(d.value,k[m])}),typeof f.body=="function"?E=await kn(f.body,c):E=await F(f.body,f.input,c),E}function Bt(f,k){var E=qt(f.environment),c=[];f.arguments.forEach(function(m,C){var A=k[C];A&&A.type==="operator"&&A.value==="?"?c.push(m):E.bind(m.value,A)});var d={_jsonata_lambda:!0,input:f.input,environment:E,arguments:c,body:f.body};return d}function on(f,k){var E=Zt(f);E=E.map(function(C){return"$"+C.trim()});var c="function("+E.join(", ")+"){ _ }",d=w(c);d.body=f;var m=Bt(d,k);return m}async function kn(f,k){var E=Zt(f),c=E.map(function(C){return k.lookup(C.trim())}),d={environment:k},m=f.apply(d,c);return L(m)&&(m=await m),m}function Zt(f){var k=f.toString(),E=/\(([^)]*)\)/.exec(k)[1],c=E.split(",");return c}function oe(f,k){var E={_jsonata_function:!0,implementation:f};return typeof k<"u"&&(E.signature=v(k)),E}async function Sn(f,k){if(!(typeof f>"u")){var E=this.input;typeof k<"u"&&(E=k,Array.isArray(E)&&!N(E)&&(E=z(E),E.outerWrapper=!0));try{var c=w(f,!1)}catch(m){throw Wt(m),{stack:new Error().stack,code:"D3120",value:m.message,error:m}}try{var d=await F(c,E,this.environment)}catch(m){throw Wt(m),{stack:new Error().stack,code:"D3121",value:m.message,error:m}}return d}}function fn(f){if(!(typeof f>"u"))return JSON.parse(a.string(f))}function qt(f){var k={};const E={bind:function(d,m){k[d]=m},lookup:function(d){var m;return k.hasOwnProperty(d)?m=k[d]:f&&(m=f.lookup(d)),m},timestamp:f?f.timestamp:null,async:f?f.async:!1,isParallelCall:f?f.isParallelCall:!1,global:f?f.global:{ancestry:[null]}};if(f){var c=f.lookup(Symbol.for("jsonata.__createFrame_push"));c&&c(f,E)}return E}b.bind("sum",oe(a.sum,"<a<n>:n>")),b.bind("count",oe(a.count,"<a:n>")),b.bind("max",oe(a.max,"<a<n>:n>")),b.bind("min",oe(a.min,"<a<n>:n>")),b.bind("average",oe(a.average,"<a<n>:n>")),b.bind("string",oe(a.string,"<x-b?:s>")),b.bind("substring",oe(a.substring,"<s-nn?:s>")),b.bind("substringBefore",oe(a.substringBefore,"<s-s:s>")),b.bind("substringAfter",oe(a.substringAfter,"<s-s:s>")),b.bind("lowercase",oe(a.lowercase,"<s-:s>")),b.bind("uppercase",oe(a.uppercase,"<s-:s>")),b.bind("length",oe(a.length,"<s-:n>")),b.bind("trim",oe(a.trim,"<s-:s>")),b.bind("pad",oe(a.pad,"<s-ns?:s>")),b.bind("match",oe(a.match,"<s-f<s:o>n?:a<o>>")),b.bind("contains",oe(a.contains,"<s-(sf):b>")),b.bind("replace",oe(a.replace,"<s-(sf)(sf)n?:s>")),b.bind("split",oe(a.split,"<s-(sf)n?:a<s>>")),b.bind("join",oe(a.join,"<a<s>s?:s>")),b.bind("formatNumber",oe(a.formatNumber,"<n-so?:s>")),b.bind("formatBase",oe(a.formatBase,"<n-n?:s>")),b.bind("formatInteger",oe(l.formatInteger,"<n-s:s>")),b.bind("parseInteger",oe(l.parseInteger,"<s-s:n>")),b.bind("number",oe(a.number,"<(nsb)-:n>")),b.bind("floor",oe(a.floor,"<n-:n>")),b.bind("ceil",oe(a.ceil,"<n-:n>")),b.bind("round",oe(a.round,"<n-n?:n>")),b.bind("abs",oe(a.abs,"<n-:n>")),b.bind("sqrt",oe(a.sqrt,"<n-:n>")),b.bind("power",oe(a.power,"<n-n:n>")),b.bind("random",oe(a.random,"<:n>")),b.bind("boolean",oe(a.boolean,"<x-:b>")),b.bind("not",oe(a.not,"<x-:b>")),b.bind("map",oe(a.map,"<af>")),b.bind("zip",oe(a.zip,"<a+>")),b.bind("filter",oe(a.filter,"<af>")),b.bind("single",oe(a.single,"<af?>")),b.bind("reduce",oe(a.foldLeft,"<afj?:j>")),b.bind("sift",oe(a.sift,"<o-f?:o>")),b.bind("keys",oe(a.keys,"<x-:a<s>>")),b.bind("lookup",oe(a.lookup,"<x-s:x>")),b.bind("append",oe(a.append,"<xx:a>")),b.bind("exists",oe(a.exists,"<x:b>")),b.bind("spread",oe(a.spread,"<x-:a<o>>")),b.bind("merge",oe(a.merge,"<a<o>:o>")),b.bind("reverse",oe(a.reverse,"<a:a>")),b.bind("each",oe(a.each,"<o-f:a>")),b.bind("error",oe(a.error,"<s?:x>")),b.bind("assert",oe(a.assert,"<bs?:x>")),b.bind("type",oe(a.type,"<x:s>")),b.bind("sort",oe(a.sort,"<af?:a>")),b.bind("shuffle",oe(a.shuffle,"<a:a>")),b.bind("distinct",oe(a.distinct,"<x:x>")),b.bind("base64encode",oe(a.base64encode,"<s-:s>")),b.bind("base64decode",oe(a.base64decode,"<s-:s>")),b.bind("encodeUrlComponent",oe(a.encodeUrlComponent,"<s-:s>")),b.bind("encodeUrl",oe(a.encodeUrl,"<s-:s>")),b.bind("decodeUrlComponent",oe(a.decodeUrlComponent,"<s-:s>")),b.bind("decodeUrl",oe(a.decodeUrl,"<s-:s>")),b.bind("eval",oe(Sn,"<sx?:x>")),b.bind("toMillis",oe(l.toMillis,"<s-s?:n>")),b.bind("fromMillis",oe(l.fromMillis,"<n-s?s?:s>")),b.bind("clone",oe(fn,"<(oa)-:o>"));var nt={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Wt(f){var k=nt[f.code];if(typeof k<"u"){var E=k.replace(/\{\{\{([^}]+)}}}/g,function(){return f[arguments[1]]});E=E.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(f[arguments[1]])}),f.message=E}}function $e(f,k){var E,c;try{E=w(f,k&&k.recover),c=E.errors,delete E.errors}catch(C){throw Wt(C),C}var d=qt(b),m=new Date;return d.bind("now",oe(function(C,A){return l.fromMillis(m.getTime(),C,A)},"<s?s?:s>")),d.bind("millis",oe(function(){return m.getTime()},"<:n>")),k&&k.RegexEngine?$e.RegexEngine=k.RegexEngine:$e.RegexEngine=RegExp,{evaluate:async function(C,A,$){if(typeof c<"u"){var K={code:"S0500",position:0};throw Wt(K),K}if(typeof A<"u"){var ue;ue=qt(d);for(var ge in A)ue.bind(ge,A[ge])}else ue=d;ue.bind("$",C),m=new Date,ue.timestamp=m,Array.isArray(C)&&!N(C)&&(C=z(C),C.outerWrapper=!0);var Fe;try{return Fe=await F(E,C,ue),typeof $=="function"&&$(null,Fe),Fe}catch(ke){throw Wt(ke),ke}},assign:function(C,A){d.bind(C,A)},registerFunction:function(C,A,$){var K=oe(A,$);d.bind(C,K)},ast:function(){return E},errors:function(){return c}}}return $e.parser=w,$e}();i.exports=I},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(n,i,s){var l=n("./signature");const a=(()=>{var h={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},w={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},v=function(S){var y=0,T=S.length,z=function(re,j){var L={type:re,value:j,position:y};return L},N=function(){for(var re=y,j=0,L,W,D=function(F){if(S.charAt(F)==="/"&&j===0){for(var U=0;S.charAt(F-(U+1))==="\\";)U++;if(U%2===0)return!0}return!1};y<T;){var b=S.charAt(y);if(D(y)){if(L=S.substring(re,y),L==="")throw{code:"S0301",stack:new Error().stack,position:y};for(y++,b=S.charAt(y),re=y;b==="i"||b==="m";)y++,b=S.charAt(y);return W=S.substring(re,y)+"g",new RegExp(L,W)}(b==="("||b==="["||b==="{")&&S.charAt(y-1)!=="\\"&&j++,(b===")"||b==="]"||b==="}")&&S.charAt(y-1)!=="\\"&&j--,y++}throw{code:"S0302",stack:new Error().stack,position:y}},G=function(re){if(y>=T)return null;for(var j=S.charAt(y);y<T&&` 	
\r\v`.indexOf(j)>-1;)y++,j=S.charAt(y);if(j==="/"&&S.charAt(y+1)==="*"){var L=y;for(y+=2,j=S.charAt(y);!(j==="*"&&S.charAt(y+1)==="/");)if(j=S.charAt(++y),y>=T)throw{code:"S0106",stack:new Error().stack,position:L};return y+=2,j=S.charAt(y),G(re)}if(re!==!0&&j==="/")return y++,z("regex",N());if(j==="."&&S.charAt(y+1)===".")return y+=2,z("operator","..");if(j===":"&&S.charAt(y+1)==="=")return y+=2,z("operator",":=");if(j==="!"&&S.charAt(y+1)==="=")return y+=2,z("operator","!=");if(j===">"&&S.charAt(y+1)==="=")return y+=2,z("operator",">=");if(j==="<"&&S.charAt(y+1)==="=")return y+=2,z("operator","<=");if(j==="*"&&S.charAt(y+1)==="*")return y+=2,z("operator","**");if(j==="~"&&S.charAt(y+1)===">")return y+=2,z("operator","~>");if(Object.prototype.hasOwnProperty.call(h,j))return y++,z("operator",j);if(j==='"'||j==="'"){var W=j;y++;for(var D="";y<T;){if(j=S.charAt(y),j==="\\")if(y++,j=S.charAt(y),Object.prototype.hasOwnProperty.call(w,j))D+=w[j];else if(j==="u"){var b=S.substr(y+1,4);if(/^[0-9a-fA-F]+$/.test(b)){var F=parseInt(b,16);D+=String.fromCharCode(F),y+=4}else throw{code:"S0104",stack:new Error().stack,position:y}}else throw{code:"S0103",stack:new Error().stack,position:y,token:j};else{if(j===W)return y++,z("string",D);D+=j}y++}throw{code:"S0101",stack:new Error().stack,position:y}}var U=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,se=U.exec(S.substring(y));if(se!==null){var ve=parseFloat(se[0]);if(!isNaN(ve)&&isFinite(ve))return y+=se[0].length,z("number",ve);throw{code:"S0102",stack:new Error().stack,position:y,token:se[0]}}var Q;if(j==="`"){y++;var ae=S.indexOf("`",y);if(ae!==-1)return Q=S.substring(y,ae),y=ae+1,z("name",Q);throw y=T,{code:"S0105",stack:new Error().stack,position:y}}for(var pe=y,Se;;)if(Se=S.charAt(pe),pe===T||` 	
\r\v`.indexOf(Se)>-1||Object.prototype.hasOwnProperty.call(h,Se)){if(S.charAt(y)==="$")return Q=S.substring(y+1,pe),y=pe,z("variable",Q);switch(Q=S.substring(y,pe),y=pe,Q){case"or":case"in":case"and":return z("operator",Q);case"true":return z("value",!0);case"false":return z("value",!1);case"null":return z("value",null);default:return y===T&&Q===""?null:z("name",Q)}}else pe++};return G},I=function(S,y){var T,z,N={},G=[],re=function(){var x=[];T.id!=="(end)"&&x.push({type:T.type,value:T.value,position:T.position});for(var _=z();_!==null;)x.push(_),_=z();return x},j={nud:function(){var x={code:"S0211",token:this.value,position:this.position};if(y)return x.remaining=re(),x.type="error",G.push(x),x;throw x.stack=new Error().stack,x}},L=function(x,_){var ce=N[x];return _=_||0,ce?_>=ce.lbp&&(ce.lbp=_):(ce=Object.create(j),ce.id=ce.value=x,ce.lbp=_,N[x]=ce),ce},W=function(x){if(y){x.remaining=re(),G.push(x);var _=N["(error)"];return T=Object.create(_),T.error=x,T.type="(error)",T}else throw x.stack=new Error().stack,x},D=function(x,_){if(x&&T.id!==x){var ce;T.id==="(end)"?ce="S0203":ce="S0202";var _e={code:ce,position:T.position,token:T.value,value:x};return W(_e)}var Ge=z(_);if(Ge===null)return T=N["(end)"],T.position=S.length,T;var Re=Ge.value,P=Ge.type,q;switch(P){case"name":case"variable":q=N["(name)"];break;case"operator":if(q=N[Re],!q)return W({code:"S0204",stack:new Error().stack,position:Ge.position,token:Re});break;case"string":case"number":case"value":q=N["(literal)"];break;case"regex":P="regex",q=N["(regex)"];break;default:return W({code:"S0205",stack:new Error().stack,position:Ge.position,token:Re})}return T=Object.create(q),T.value=Re,T.type=P,T.position=Ge.position,T},b=function(x){var _,ce=T;for(D(null,!0),_=ce.nud();x<T.lbp;)ce=T,D(),_=ce.led(_);return _},F=function(x){var _=L(x,0);_.nud=function(){return this}},U=function(x,_,ce){var _e=_||h[x],Ge=L(x,_e);return Ge.led=ce||function(Re){return this.lhs=Re,this.rhs=b(_e),this.type="binary",this},Ge},se=function(x,_,ce){var _e=L(x,_);return _e.led=ce,_e},ve=function(x,_){var ce=L(x);return ce.nud=_||function(){return this.expression=b(70),this.type="unary",this},ce};F("(end)"),F("(name)"),F("(literal)"),F("(regex)"),L(":"),L(";"),L(","),L(")"),L("]"),L("}"),L(".."),U("."),U("+"),U("-"),U("*"),U("/"),U("%"),U("="),U("<"),U(">"),U("!="),U("<="),U(">="),U("&"),U("and"),U("or"),U("in"),F("and"),F("or"),F("in"),ve("-"),U("~>"),se("(error)",10,function(x){return this.lhs=x,this.error=T.error,this.remaining=re(),this.type="error",this}),ve("*",function(){return this.type="wildcard",this}),ve("**",function(){return this.type="descendant",this}),ve("%",function(){return this.type="parent",this}),U("(",h["("],function(x){if(this.procedure=x,this.type="function",this.arguments=[],T.id!==")")for(;T.type==="operator"&&T.id==="?"?(this.type="partial",this.arguments.push(T),D("?")):this.arguments.push(b(0)),T.id===",";)D(",");if(D(")",!0),x.type==="name"&&(x.value==="function"||x.value==="λ")){if(this.arguments.forEach(function(Re,P){if(Re.type!=="variable")return W({code:"S0208",stack:new Error().stack,position:Re.position,token:Re.value,value:P+1})}),this.type="lambda",T.id==="<"){for(var _=T.position,ce=1,_e="<";ce>0&&T.id!=="{"&&T.id!=="(end)";){var Ge=D();Ge.id===">"?ce--:Ge.id==="<"&&ce++,_e+=Ge.value}D(">");try{this.signature=l(_e)}catch(Re){return Re.position=_+Re.offset,W(Re)}}D("{"),this.body=b(0),D("}")}return this}),ve("(",function(){for(var x=[];T.id!==")"&&(x.push(b(0)),T.id===";");)D(";");return D(")",!0),this.type="block",this.expressions=x,this}),ve("[",function(){var x=[];if(T.id!=="]")for(;;){var _=b(0);if(T.id===".."){var ce={type:"binary",value:"..",position:T.position,lhs:_};D(".."),ce.rhs=b(0),_=ce}if(x.push(_),T.id!==",")break;D(",")}return D("]",!0),this.expressions=x,this.type="unary",this}),U("[",h["["],function(x){if(T.id==="]"){for(var _=x;_&&_.type==="binary"&&_.value==="[";)_=_.lhs;return _.keepArray=!0,D("]"),x}else return this.lhs=x,this.rhs=b(h["]"]),this.type="binary",D("]",!0),this}),U("^",h["^"],function(x){D("(");for(var _=[];;){var ce={descending:!1};if(T.id==="<"?D("<"):T.id===">"&&(ce.descending=!0,D(">")),ce.expression=b(0),_.push(ce),T.id!==",")break;D(",")}return D(")"),this.lhs=x,this.rhs=_,this.type="binary",this});var Q=function(x){var _=[];if(T.id!=="}")for(;;){var ce=b(0);D(":");var _e=b(0);if(_.push([ce,_e]),T.id!==",")break;D(",")}return D("}",!0),typeof x>"u"?(this.lhs=_,this.type="unary"):(this.lhs=x,this.rhs=_,this.type="binary"),this};ve("{",Q),U("{",h["{"],Q),se(":=",h[":="],function(x){return x.type!=="variable"?W({code:"S0212",stack:new Error().stack,position:x.position,token:x.value}):(this.lhs=x,this.rhs=b(h[":="]-1),this.type="binary",this)}),U("@",h["@"],function(x){return this.lhs=x,this.rhs=b(h["@"]),this.rhs.type!=="variable"?W({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),U("#",h["#"],function(x){return this.lhs=x,this.rhs=b(h["#"]),this.rhs.type!=="variable"?W({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),U("?",h["?"],function(x){return this.type="condition",this.condition=x,this.then=b(0),T.id===":"&&(D(":"),this.else=b(0)),this}),ve("|",function(){return this.type="transform",this.pattern=b(0),D("|"),this.update=b(0),T.id===","&&(D(","),this.delete=b(0)),D("|"),this});var ae=function(x){var _;if(x.type==="function"&&!x.predicate){var ce={type:"lambda",thunk:!0,arguments:[],position:x.position};ce.body=x,_=ce}else if(x.type==="condition")x.then=ae(x.then),typeof x.else<"u"&&(x.else=ae(x.else)),_=x;else if(x.type==="block"){var _e=x.expressions.length;_e>0&&(x.expressions[_e-1]=ae(x.expressions[_e-1])),_=x}else _=x;return _},pe=0,Se=0,ze=[],be=function(x,_){switch(x.type){case"name":case"wildcard":_.level--,_.level===0&&(typeof x.ancestor>"u"||(ze[_.index].slot.label=x.ancestor.label),x.ancestor=_,x.tuple=!0);break;case"parent":_.level++;break;case"block":x.expressions.length>0&&(x.tuple=!0,_=be(x.expressions[x.expressions.length-1],_));break;case"path":x.tuple=!0;var ce=x.steps.length-1;for(_=be(x.steps[ce--],_);_.level>0&&ce>=0;)_=be(x.steps[ce--],_);break;default:throw{code:"S0217",token:x.type,position:x.position}}return _},ye=function(x,_){if(typeof _.seekingParent<"u"||_.type==="parent"){var ce=typeof _.seekingParent<"u"?_.seekingParent:[];_.type==="parent"&&ce.push(_.slot),typeof x.seekingParent>"u"?x.seekingParent=ce:Array.prototype.push.apply(x.seekingParent,ce)}},We=function(x){var _=x.steps.length-1,ce=x.steps[_],_e=typeof ce.seekingParent<"u"?ce.seekingParent:[];ce.type==="parent"&&_e.push(ce.slot);for(var Ge=0;Ge<_e.length;Ge++){var Re=_e[Ge];for(_=x.steps.length-2;Re.level>0;){if(_<0){typeof x.seekingParent>"u"?x.seekingParent=[Re]:x.seekingParent.push(Re);break}for(var P=x.steps[_--];_>=0&&P.focus&&x.steps[_].focus;)P=x.steps[_--];Re=be(P,Re)}}},ie=function(x){var _;switch(x.type){case"binary":switch(x.value){case".":var ce=ie(x.lhs);ce.type==="path"?_=ce:_={type:"path",steps:[ce]},ce.type==="parent"&&(_.seekingParent=[ce.slot]);var _e=ie(x.rhs);_e.type==="function"&&_e.procedure.type==="path"&&_e.procedure.steps.length===1&&_e.procedure.steps[0].type==="name"&&_.steps[_.steps.length-1].type==="function"&&(_.steps[_.steps.length-1].nextFunction=_e.procedure.steps[0].value),_e.type==="path"?Array.prototype.push.apply(_.steps,_e.steps):(typeof _e.predicate<"u"&&(_e.stages=_e.predicate,delete _e.predicate),_.steps.push(_e)),_.steps.filter(function(ne){if(ne.type==="number"||ne.type==="value")throw{code:"S0213",stack:new Error().stack,position:ne.position,value:ne.value};return ne.type==="string"}).forEach(function(ne){ne.type="name"}),_.steps.filter(function(ne){return ne.keepArray===!0}).length>0&&(_.keepSingletonArray=!0);var Ge=_.steps[0];Ge.type==="unary"&&Ge.value==="["&&(Ge.consarray=!0);var Re=_.steps[_.steps.length-1];Re.type==="unary"&&Re.value==="["&&(Re.consarray=!0),We(_);break;case"[":_=ie(x.lhs);var P=_,q="predicate";if(_.type==="path"&&(P=_.steps[_.steps.length-1],q="stages"),typeof P.group<"u")throw{code:"S0209",stack:new Error().stack,position:x.position};typeof P[q]>"u"&&(P[q]=[]);var R=ie(x.rhs);typeof R.seekingParent<"u"&&(R.seekingParent.forEach(ne=>{ne.level===1?be(P,ne):ne.level--}),ye(P,R)),P[q].push({type:"filter",expr:R,position:x.position});break;case"{":if(_=ie(x.lhs),typeof _.group<"u")throw{code:"S0210",stack:new Error().stack,position:x.position};_.group={lhs:x.rhs.map(function(ne){return[ie(ne[0]),ie(ne[1])]}),position:x.position};break;case"^":_=ie(x.lhs),_.type!=="path"&&(_={type:"path",steps:[_]});var Y={type:"sort",position:x.position};Y.terms=x.rhs.map(function(ne){var me=ie(ne.expression);return ye(Y,me),{descending:ne.descending,expression:me}}),_.steps.push(Y),We(_);break;case":=":_={type:"bind",value:x.value,position:x.position},_.lhs=ie(x.lhs),_.rhs=ie(x.rhs),ye(_,_.rhs);break;case"@":if(_=ie(x.lhs),P=_,_.type==="path"&&(P=_.steps[_.steps.length-1]),typeof P.stages<"u"||typeof P.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:x.position};if(P.type==="sort")throw{code:"S0216",stack:new Error().stack,position:x.position};x.keepArray&&(P.keepArray=!0),P.focus=x.rhs.value,P.tuple=!0;break;case"#":_=ie(x.lhs),P=_,_.type==="path"?P=_.steps[_.steps.length-1]:(_={type:"path",steps:[_]},typeof P.predicate<"u"&&(P.stages=P.predicate,delete P.predicate)),typeof P.stages>"u"?P.index=x.rhs.value:P.stages.push({type:"index",value:x.rhs.value,position:x.position}),P.tuple=!0;break;case"~>":_={type:"apply",value:x.value,position:x.position},_.lhs=ie(x.lhs),_.rhs=ie(x.rhs),_.keepArray=_.lhs.keepArray||_.rhs.keepArray;break;default:_={type:x.type,value:x.value,position:x.position},_.lhs=ie(x.lhs),_.rhs=ie(x.rhs),ye(_,_.lhs),ye(_,_.rhs)}break;case"unary":_={type:x.type,value:x.value,position:x.position},x.value==="["?_.expressions=x.expressions.map(function(ne){var me=ie(ne);return ye(_,me),me}):x.value==="{"?_.lhs=x.lhs.map(function(ne){var me=ie(ne[0]);ye(_,me);var Te=ie(ne[1]);return ye(_,Te),[me,Te]}):(_.expression=ie(x.expression),x.value==="-"&&_.expression.type==="number"?(_=_.expression,_.value=-_.value):ye(_,_.expression));break;case"function":case"partial":_={type:x.type,name:x.name,value:x.value,position:x.position},_.arguments=x.arguments.map(function(ne){var me=ie(ne);return ye(_,me),me}),_.procedure=ie(x.procedure);break;case"lambda":_={type:x.type,arguments:x.arguments,signature:x.signature,position:x.position};var te=ie(x.body);_.body=ae(te);break;case"condition":_={type:x.type,position:x.position},_.condition=ie(x.condition),ye(_,_.condition),_.then=ie(x.then),ye(_,_.then),typeof x.else<"u"&&(_.else=ie(x.else),ye(_,_.else));break;case"transform":_={type:x.type,position:x.position},_.pattern=ie(x.pattern),_.update=ie(x.update),typeof x.delete<"u"&&(_.delete=ie(x.delete));break;case"block":_={type:x.type,position:x.position},_.expressions=x.expressions.map(function(ne){var me=ie(ne);return ye(_,me),(me.consarray||me.type==="path"&&me.steps[0].consarray)&&(_.consarray=!0),me});break;case"name":_={type:"path",steps:[x]},x.keepArray&&(_.keepSingletonArray=!0);break;case"parent":_={type:"parent",slot:{label:"!"+pe++,level:1,index:Se++}},ze.push(_);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":_=x;break;case"operator":if(x.value==="and"||x.value==="or"||x.value==="in")x.type="name",_=ie(x);else if(x.value==="?")_=x;else throw{code:"S0201",stack:new Error().stack,position:x.position,token:x.value};break;case"error":_=x,x.lhs&&(_=ie(x.lhs));break;default:var J="S0206";x.id==="(end)"&&(J="S0207");var B={code:J,position:x.position,token:x.value};if(y)return G.push(B),{type:"error",error:B};throw B.stack=new Error().stack,B}return x.keepArray&&(_.keepArray=!0),_};z=v(S),D();var Ce=b(0);if(T.id!=="(end)"){var Pe={code:"S0201",position:T.position,token:T.value};W(Pe)}if(Ce=ie(Ce),Ce.type==="parent"||typeof Ce.seekingParent<"u")throw{code:"S0217",token:Ce.type,position:Ce.position};return G.length>0&&(Ce.errors=G),Ce};return I})();i.exports=a},{"./signature":5}],5:[function(n,i,s){var l=n("./utils");const a=(()=>{var h={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function w(v){for(var I=1,S=[],y={},T=y;I<v.length;){var z=v.charAt(I);if(z===":")break;var N=function(){S.push(y),T=y,y={}},G=function(U,se,ve,Q){for(var ae=1,pe=se;pe<U.length;)if(pe++,z=U.charAt(pe),z===Q){if(ae--,ae===0)break}else z===ve&&ae++;return pe};switch(z){case"s":case"n":case"b":case"l":case"o":y.regex="["+z+"m]",y.type=z,N();break;case"a":y.regex="[asnblfom]",y.type=z,y.array=!0,N();break;case"f":y.regex="f",y.type=z,N();break;case"j":y.regex="[asnblom]",y.type=z,N();break;case"x":y.regex="[asnblfom]",y.type=z,N();break;case"-":T.context=!0,T.contextRegex=new RegExp(T.regex),T.regex+="?";break;case"?":case"+":T.regex+=z;break;case"(":var re=G(v,I,"(",")"),j=v.substring(I+1,re);if(j.indexOf("<")===-1)y.regex="["+j+"m]";else throw{code:"S0402",stack:new Error().stack,value:j,offset:I};y.type="("+j+")",I=re,N();break;case"<":if(T.type==="a"||T.type==="f"){var L=G(v,I,"<",">");T.subtype=v.substring(I+1,L),I=L}else throw{code:"S0401",stack:new Error().stack,value:T.type,offset:I};break}I++}var W="^"+S.map(function(U){return"("+U.regex+")"}).join("")+"$",D=new RegExp(W),b=function(U){var se;if(l.isFunction(U))se="f";else{var ve=typeof U;switch(ve){case"string":se="s";break;case"number":se="n";break;case"boolean":se="b";break;case"object":U===null?se="l":Array.isArray(U)?se="a":se="o";break;case"undefined":default:se="m"}}return se},F=function(U,se){for(var ve="^",Q=0,ae=0;ae<S.length;ae++){ve+=S[ae].regex;var pe=se.match(ve);if(pe===null)throw{code:"T0410",stack:new Error().stack,value:U[Q],index:Q+1};Q=pe[0].length}throw{code:"T0410",stack:new Error().stack,value:U[Q],index:Q+1}};return{definition:v,validate:function(U,se){var ve="";U.forEach(function(Se){ve+=b(Se)});var Q=D.exec(ve);if(Q){var ae=[],pe=0;return S.forEach(function(Se,ze){var be=U[pe],ye=Q[ze+1];if(ye==="")if(Se.context&&Se.contextRegex){var We=b(se);if(Se.contextRegex.test(We))ae.push(se);else throw{code:"T0411",stack:new Error().stack,value:se,index:pe+1}}else ae.push(be),pe++;else ye.split("").forEach(function(ie){if(Se.type==="a"){if(ie==="m")be=void 0;else{be=U[pe];var Ce=!0;if(typeof Se.subtype<"u"){if(ie!=="a"&&ye!==Se.subtype)Ce=!1;else if(ie==="a"&&be.length>0){var Pe=b(be[0]);if(Pe!==Se.subtype.charAt(0))Ce=!1;else{var x=be.filter(function(_){return b(_)!==Pe});Ce=x.length===0}}}if(!Ce)throw{code:"T0412",stack:new Error().stack,value:be,index:pe+1,type:h[Se.subtype]};ie!=="a"&&(be=[be])}ae.push(be),pe++}else ae.push(be),pe++})}),ae}F(U,ve)}}}return w})();i.exports=a},{"./utils":6}],6:[function(n,i,s){const l=(()=>{function a(L){var W=!1;if(typeof L=="number"&&(W=!isNaN(L),W&&!isFinite(L)))throw{code:"D1001",value:L,stack:new Error().stack};return W}function h(L){var W=!1;return Array.isArray(L)&&(W=L.filter(function(D){return typeof D!="string"}).length===0),W}function w(L){var W=!1;return Array.isArray(L)&&(W=L.filter(function(D){return!a(D)}).length===0),W}function v(){var L=[];return L.sequence=!0,arguments.length===1&&L.push(arguments[0]),L}function I(L){return L.sequence===!0&&Array.isArray(L)}function S(L){return L&&(L._jsonata_function===!0||L._jsonata_lambda===!0)||typeof L=="function"}function y(L){var W=typeof L.arity=="number"?L.arity:typeof L.implementation=="function"?L.implementation.length:typeof L.length=="number"?L.length:L.arguments.length;return W}function T(L){return L&&L._jsonata_lambda===!0}var z=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function N(L){return typeof L=="object"&&L!==null&&z in L&&"next"in L&&typeof L.next=="function"}function G(L,W){if(L===W)return!0;if(typeof L=="object"&&typeof W=="object"&&L!==null&&W!==null){if(Array.isArray(L)&&Array.isArray(W)){if(L.length!==W.length)return!1;for(var D=0;D<L.length;D++)if(!G(L[D],W[D]))return!1;return!0}var b=Object.getOwnPropertyNames(L),F=Object.getOwnPropertyNames(W);if(b.length!==F.length)return!1;for(b=b.sort(),F=F.sort(),D=0;D<b.length;D++)if(b[D]!==F[D])return!1;for(D=0;D<b.length;D++){var U=b[D];if(!G(L[U],W[U]))return!1}return!0}return!1}function re(L){return typeof L=="object"&&L!==null&&"then"in L&&typeof L.then=="function"}function j(L){var W=[];for(let D of L)W.push(D);return W}return{isNumeric:a,isArrayOfStrings:h,isArrayOfNumbers:w,createSequence:v,isSequence:I,isFunction:S,isLambda:T,isIterable:N,getFunctionArity:y,isDeepEqual:G,stringToArray:j,isPromise:re}})();i.exports=l},{}]},{},[3])(3)})}(ki)),ki.exports}var qc=Fc();const Oa=$i(qc);var ln={exports:{}};const Ur=Xa(eo),zc="16.5.0",jc={version:zc};var Ms;function Uc(){if(Ms)return ln.exports;Ms=1;var t={};const e=Ur,n=Ur,i=Ur,s=Ur,a=jc.version,h=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function w(b){const F={};let U=b.toString();U=U.replace(/\r\n?/mg,`
`);let se;for(;(se=h.exec(U))!=null;){const ve=se[1];let Q=se[2]||"";Q=Q.trim();const ae=Q[0];Q=Q.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),ae==='"'&&(Q=Q.replace(/\\n/g,`
`),Q=Q.replace(/\\r/g,"\r")),F[ve]=Q}return F}function v(b){const F=z(b),U=D.configDotenv({path:F});if(!U.parsed){const ae=new Error(`MISSING_DATA: Cannot parse ${F} for an unknown reason`);throw ae.code="MISSING_DATA",ae}const se=y(b).split(","),ve=se.length;let Q;for(let ae=0;ae<ve;ae++)try{const pe=se[ae].trim(),Se=T(U,pe);Q=D.decrypt(Se.ciphertext,Se.key);break}catch(pe){if(ae+1>=ve)throw pe}return D.parse(Q)}function I(b){console.log(`[dotenv@${a}][WARN] ${b}`)}function S(b){console.log(`[dotenv@${a}][DEBUG] ${b}`)}function y(b){return b&&b.DOTENV_KEY&&b.DOTENV_KEY.length>0?b.DOTENV_KEY:t.DOTENV_KEY&&t.DOTENV_KEY.length>0?t.DOTENV_KEY:""}function T(b,F){let U;try{U=new URL(F)}catch(pe){if(pe.code==="ERR_INVALID_URL"){const Se=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw Se.code="INVALID_DOTENV_KEY",Se}throw pe}const se=U.password;if(!se){const pe=new Error("INVALID_DOTENV_KEY: Missing key part");throw pe.code="INVALID_DOTENV_KEY",pe}const ve=U.searchParams.get("environment");if(!ve){const pe=new Error("INVALID_DOTENV_KEY: Missing environment part");throw pe.code="INVALID_DOTENV_KEY",pe}const Q=`DOTENV_VAULT_${ve.toUpperCase()}`,ae=b.parsed[Q];if(!ae){const pe=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${Q} in your .env.vault file.`);throw pe.code="NOT_FOUND_DOTENV_ENVIRONMENT",pe}return{ciphertext:ae,key:se}}function z(b){let F=null;if(b&&b.path&&b.path.length>0)if(Array.isArray(b.path))for(const U of b.path)e.existsSync(U)&&(F=U.endsWith(".vault")?U:`${U}.vault`);else F=b.path.endsWith(".vault")?b.path:`${b.path}.vault`;else F=n.resolve(process.cwd(),".env.vault");return e.existsSync(F)?F:null}function N(b){return b[0]==="~"?n.join(i.homedir(),b.slice(1)):b}function G(b){!!(b&&b.debug)&&S("Loading env from encrypted .env.vault");const U=D._parseVault(b);let se=t;return b&&b.processEnv!=null&&(se=b.processEnv),D.populate(se,U,b),{parsed:U}}function re(b){const F=n.resolve(process.cwd(),".env");let U="utf8";const se=!!(b&&b.debug);b&&b.encoding?U=b.encoding:se&&S("No encoding is specified. UTF-8 is used by default");let ve=[F];if(b&&b.path)if(!Array.isArray(b.path))ve=[N(b.path)];else{ve=[];for(const Se of b.path)ve.push(N(Se))}let Q;const ae={};for(const Se of ve)try{const ze=D.parse(e.readFileSync(Se,{encoding:U}));D.populate(ae,ze,b)}catch(ze){se&&S(`Failed to load ${Se} ${ze.message}`),Q=ze}let pe=t;return b&&b.processEnv!=null&&(pe=b.processEnv),D.populate(pe,ae,b),Q?{parsed:ae,error:Q}:{parsed:ae}}function j(b){if(y(b).length===0)return D.configDotenv(b);const F=z(b);return F?D._configVault(b):(I(`You set DOTENV_KEY but you are missing a .env.vault file at ${F}. Did you forget to build it?`),D.configDotenv(b))}function L(b,F){const U=Buffer.from(F.slice(-64),"hex");let se=Buffer.from(b,"base64");const ve=se.subarray(0,12),Q=se.subarray(-16);se=se.subarray(12,-16);try{const ae=s.createDecipheriv("aes-256-gcm",U,ve);return ae.setAuthTag(Q),`${ae.update(se)}${ae.final()}`}catch(ae){const pe=ae instanceof RangeError,Se=ae.message==="Invalid key length",ze=ae.message==="Unsupported state or unable to authenticate data";if(pe||Se){const be=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw be.code="INVALID_DOTENV_KEY",be}else if(ze){const be=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw be.code="DECRYPTION_FAILED",be}else throw ae}}function W(b,F,U={}){const se=!!(U&&U.debug),ve=!!(U&&U.override);if(typeof F!="object"){const Q=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw Q.code="OBJECT_REQUIRED",Q}for(const Q of Object.keys(F))Object.prototype.hasOwnProperty.call(b,Q)?(ve===!0&&(b[Q]=F[Q]),se&&S(ve===!0?`"${Q}" is already defined and WAS overwritten`:`"${Q}" is already defined and was NOT overwritten`)):b[Q]=F[Q]}const D={configDotenv:re,_configVault:G,_parseVault:v,config:j,decrypt:L,parse:w,populate:W};return ln.exports.configDotenv=D.configDotenv,ln.exports._configVault=D._configVault,ln.exports._parseVault=D._parseVault,ln.exports.config=D.config,ln.exports.decrypt=D.decrypt,ln.exports.parse=D.parse,ln.exports.populate=D.populate,ln.exports=D,ln.exports}var Bc=Uc();const is=async t=>{const n=await(await Dt.getWorkspace()).getResource(t);return n||Xe("Invalid URL: "+t),await n.getContents({uri:!0})},Ta=t=>t.startsWith("blob:")||t.startsWith("http:")||t.startsWith("https:"),ss={},ii=async(t,e)=>{const n=await Oa(`[**[${e}!='']]`).evaluate(t);for(const i of n){const s=i[e];if(Ta(s))continue;const l=await is(s);ss[l]=i[e],i[e]=l}},br=t=>ss[t],Di=async(t,e)=>{const n=await Oa(`[**[${e}!='']]`).evaluate(t);for(const i of n){const s=i[e];!s||!s.startsWith("blob:")||(i[e]=ss[s])}},Pa=t=>{var n;pt.registerContribution("catalog.root",{label:t.label,icon:t.icon,contributionId:t.contributionId});const e=t.contributionId??t.label;(n=t.items)==null||n.forEach(i=>{pt.registerContribution(e,{label:i.label,icon:i.icon,contributionId:i.contributionId});const l=import.meta.resolve("/.");i.items.forEach(a=>{var w;const h={label:a.label,icon:a.icon,state:{...a.state}};(w=h.state)!=null&&w.url&&(h.state.url=h.state.url.replace("${baseURL}/",l)),pt.registerContribution(i.contributionId,h)})})},Ni=t=>{Object.entries(t).forEach(([e,n])=>{const i=/\${([a-zA-Z0-9_]+)}/g;t[e]=n.replace(i,(s,l)=>{const a=t[l];return a!==void 0?a:s})})},Ra=async(...t)=>{const e=await Dt.getWorkspace(),n={};for(const i of t){const s=await(e==null?void 0:e.getResource(i));if(!s)continue;const l=await s.getContents(),a=Bc.parse(l||"");Ni(a),Object.assign(n,a)}return Ni(n),n},Wc=Object.freeze(Object.defineProperty({__proto__:null,getOriginalUri:br,isAbsoluteResource:Ta,loadEnvs:Ra,registerCatalog:Pa,replaceUris:ii,replaceVars:Ni,revertBlobUris:Di,toBlobUri:is},Symbol.toStringTag,{value:"Module"}));to.resolveUrl=t=>is(t);En.registerEditorInputHandler({canHandle:t=>t instanceof Xn&&t.getName().endsWith(".geospace"),handle:async t=>{const e={title:t.getName(),data:t,key:t.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return e.widgetFactory=n=>Z`
            <gs-map id="${n}" .input="${e}"></gs-map>`,e}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gc=js(class extends Us{constructor(){super(...arguments),this.key=Rt}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(Bs(t),this.key=e),n}});var Vt=(t=>(t[t.LOADED=0]="LOADED",t[t.LAYER_ADDED=1]="LAYER_ADDED",t[t.LAYER_DELETED=2]="LAYER_DELETED",t[t.LAYER_UPDATED=3]="LAYER_UPDATED",t[t.FEATURE_SELECTED=4]="FEATURE_SELECTED",t))(Vt||{});const un=Bn(Xo),Vc=`:root,
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
`,Hc=t=>new Proxy({},{get:(e,n)=>async(...i)=>{for(const s of t)await s[n](...i)}}),Kc="iframe-map-renderer.html";class Yc{constructor(e,n){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=n,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(n,i){return async(...s)=>await e.sendMessage(i,{...s})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=Kc,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}getViewExtent(){return[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(e){this.onSyncCallback&&this.onSyncCallback(e)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,n){try{const{toBlobUri:i}=await ft(async()=>{const{toBlobUri:l}=await Promise.resolve().then(()=>Wc);return{toBlobUri:l}},[]),s=await i(n);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:s},"*")}catch(i){this.iframe.contentWindow.postMessage({id:e,success:!1,error:i instanceof Error?i.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{var h,w,v,I;if(e.source!==((h=this.iframe)==null?void 0:h.contentWindow))return;const{id:n,result:i,error:s,type:l,event:a}=e.data;if(n!==void 0&&this.pendingMessages.has(n)){const{resolve:S,reject:y}=this.pendingMessages.get(n);this.pendingMessages.delete(n),s?y(new Error(s)):S(i)}l==="dirty"?(w=this.onDirtyCallback)==null||w.call(this):l==="sync"?(v=this.onSyncCallback)==null||v.call(this,a):l==="iframeClicked"?(I=this.onClickCallback)==null||I.call(this):l==="resolveAsset"&&this.handleAssetResolution(n,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const n=i=>{var s;i.source===((s=this.iframe)==null?void 0:s.contentWindow)&&i.data.type==="rendererReady"&&(window.removeEventListener("message",n),e())};window.addEventListener("message",n)})}async sendMessage(e,n){if(!this.iframe)throw new Error("Iframe not initialized");const i=++this.messageId;return new Promise((s,l)=>{this.pendingMessages.set(i,{resolve:s,reject:l}),this.iframe.contentWindow.postMessage({id:i,method:e,params:n},"*"),setTimeout(()=>{this.pendingMessages.has(i)&&(this.pendingMessages.delete(i),l(new Error("Message timeout")))},5e3)})}}class Jc{constructor(e,n){this.gsMap=e,this.renderer=n}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,n){n?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){e>=0&&e<this.gsMap.layers.length&&this.gsMap.layers.splice(e,1),this.triggerDirty()}async renameLayer(e,n){e>=0&&e<this.gsMap.layers.length&&(this.gsMap.layers[e].name=n),this.triggerDirty()}async moveLayer(e,n){if(e>=0&&e<this.gsMap.layers.length&&n>=0&&n<this.gsMap.layers.length&&e!==n){const[i]=this.gsMap.layers.splice(e,1);this.gsMap.layers.splice(n,0,i)}this.triggerDirty()}async setLayerVisible(e,n){e>=0&&e<this.gsMap.layers.length&&(this.gsMap.layers[e].visible=n),this.triggerDirty()}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){e>=0&&e<this.gsMap.controls.length&&this.gsMap.controls.splice(e,1),this.triggerDirty(),await this.renderer.modelToUI()}async addOverlayFromModule(e,n){this.gsMap.overlays.push({src:e,position:n||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){e>=0&&e<this.gsMap.overlays.length&&this.gsMap.overlays.splice(e,1),this.triggerDirty(),await this.renderer.modelToUI()}async enableDrawing(e,n){}async disableDrawing(){}async enableFeatureSelection(e){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class Zc{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,n){un.set({part:this.source,event:Vt.LAYER_ADDED})}async deleteLayer(e){un.set({part:this.source,event:Vt.LAYER_DELETED})}async renameLayer(e,n){un.set({part:this.source,event:Vt.LAYER_UPDATED})}async moveLayer(e,n){un.set({part:this.source,event:Vt.LAYER_UPDATED})}async setLayerVisible(e,n){}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,n){}async removeOverlay(e){}async enableDrawing(e,n){}async disableDrawing(){}async enableFeatureSelection(e){}async disableSelection(){}async deleteSelectedFeatures(){un.set({part:this.source,event:Vt.LAYER_UPDATED})}}var Qc=Object.defineProperty,Xc=Object.getOwnPropertyDescriptor,Dr=(t,e,n,i)=>{for(var s=i>1?void 0:i?Xc(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&Qc(e,n,s),s};let xt=class extends Et{constructor(){super(),this.mapContainer=Mn(),this.isFirstConnection=!0,this.interactionMode="none",this.chatContext={history:[]},this.commandStack=new ra}getOperations(){return this.operations}onMapChanged({part:t,event:e}){t===this&&(e===Vt.LAYER_ADDED||e===Vt.LAYER_DELETED||e===Vt.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const t=this.getGsMap(),e=(t==null?void 0:t.layers.map((i,s)=>({layer:i,index:s})).filter(({layer:i})=>{var a;const s=i.type===ds.VECTOR,l=((a=i.source)==null?void 0:a.type)===nn.Features;return s&&l}))||[],n=this.activeDrawingLayerIndex!==void 0;return Z`
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
            
            ${rn(e.length>0,()=>{const i=e.map(({layer:s,index:l})=>`${l}:${s.name}`).join("|");return Z`
                ${Gc(i,Z`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerIndex??""}"
                        @change=${s=>{var a;const l=s.target.value?parseInt(s.target.value):void 0;this.activeDrawingLayerIndex=l,(l==null||s.target.value==="")&&((a=this.operations)==null||a.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${e.map(({layer:s,index:l})=>Z`
                            <wa-option value="${l}">${s.name||`Layer ${l+1}`}</wa-option>
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
        `}async connectedCallback(){var t;if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}(t=this.renderer)!=null&&t.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Me.set(this)}))}async doInitUI(){var h,w,v;const t=(h=this.input)==null?void 0:h.data,e=await Ra(".env","envs/.env","env","envs/env","default.env","envs/default.env","dev.env","envs/dev.env");e.BUILD_TIME=new Date;const n=await t.getContents();let i=n&&n.trim()?JSON.parse(n):Gs;i=this.migrateGsMap(i),await ii(i,"url"),await ii(i,"src"),this.gsMap=i,i.view&&(this.initialView={center:[...i.view.center],zoom:i.view.zoom}),this.renderer=new Yc(i,e);const s=this.renderer.getOperations(),l=new Jc(i,this.renderer),a=new Zc(this);this.operations=Hc([l,s,a]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(I=>{var S;if(this.gsMap){switch(I.type){case"viewChanged":this.gsMap.view.center=I.view.center,this.gsMap.view.zoom=I.view.zoom,I.view.rotation!==void 0&&I.view.rotation!==0&&(this.gsMap.view.rotation=I.view.rotation);break;case"featuresChanged":const y=this.gsMap.layers[I.layerIndex];y&&((S=y.source)==null?void 0:S.type)===nn.Features&&(y.source.features=I.features);break;case"featureSelected":const T={feature:I.feature,layerIndex:I.layerIndex,metrics:I.metrics};console.info("Feature metrics:",T.metrics),un.set({part:this,event:Vt.FEATURE_SELECTED,payload:T});break;case"featureDeselected":console.info("Feature deselected"),un.set({part:this,event:Vt.FEATURE_SELECTED,payload:null});break}this.markDirty(!0)}}),(v=(w=this.renderer).setOnClick)==null||v.call(w,()=>{Me.set(this)}),this.updateToolbar(),un.set({part:this,event:Vt.LOADED})}catch(I){console.error("Failed to render map:",I),Xe(`Failed to render map: ${I.message}`)}}migrateGsMap(t){const e={...t};let n=!1;return t.view||(console.log("Creating view field and migrating old properties..."),n=!0,e.view={},t.center!==void 0&&(e.view.center=t.center,delete e.center),t.zoom!==void 0&&(e.view.zoom=t.zoom,delete e.zoom),t.projection!==void 0&&(e.view.projection=t.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857")),(!t.styles||Object.keys(t.styles).length===0)&&(console.log("Adding default styles to map..."),n=!0,e.styles={...ro}),(!t.styleRules||t.styleRules.length===0)&&(console.log("Adding default style rules to map..."),n=!0,e.styleRules=[...io]),n&&console.log("Map migration completed"),e}getGsMap(){return this.gsMap}async save(){var t;if(!this.renderer){Xe("Map not initialized");return}try{if(!this.gsMap){Xe("Map not initialized");return}const e=JSON.parse(JSON.stringify(this.gsMap));await Di(e,"url"),await Di(e,"src"),(t=this.input)==null||t.data.saveContents(JSON.stringify(e,null,2)),this.markDirty(!1)}catch(e){Xe(`Save failed: ${e.message}`)}}get mapOperations(){return this.operations}edit(){zt("not yet implemented")}async refresh(){if(!this.renderer){ut.error("Map not initialized");return}await this.renderer.modelToUI()}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){var t;this.activeDrawingLayerIndex!==void 0&&(await((t=this.operations)==null?void 0:t.enableDrawing("Point",this.activeDrawingLayerIndex)),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){var t;this.activeDrawingLayerIndex!==void 0&&(await((t=this.operations)==null?void 0:t.enableDrawing("LineString",this.activeDrawingLayerIndex)),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){var t;this.activeDrawingLayerIndex!==void 0&&(await((t=this.operations)==null?void 0:t.enableDrawing("Polygon",this.activeDrawingLayerIndex)),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){var t;await((t=this.operations)==null?void 0:t.enableFeatureSelection(this.activeDrawingLayerIndex??-1)),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){var t;if(this.interactionMode==="select")try{await((t=this.operations)==null?void 0:t.deleteSelectedFeatures()),zt("Selected features deleted")}catch(e){Xe(e.message)}}async handleCreateDrawingLayer(){var i;if(!this.gsMap){Xe("Map not initialized");return}const t=await _r("Enter name for new drawing layer:","Drawing Layer");if(!t)return;const e={name:t,type:ds.VECTOR,source:{type:nn.Features,features:[]},visible:!0};await((i=this.operations)==null?void 0:i.addLayer(e,!1));const n=this.gsMap.layers.length-1;this.activeDrawingLayerIndex=n,this.updateToolbar(),zt(`Created drawing layer: ${t}`)}doClose(){var t;(t=this.renderer)==null||t.destroy(),this.renderer=void 0,this.input=void 0}render(){return Z`
            <div class="gc-map-container" ${Fn(this.mapContainer)}>
            </div>
        `}};xt.styles=[no(Vc),Lt`
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
    `];Dr([Ue({attribute:!1})],xt.prototype,"input",2);Dr([Ue({type:Number})],xt.prototype,"activeDrawingLayerIndex",2);Dr([Ue({type:String})],xt.prototype,"interactionMode",2);Dr([ci(un)],xt.prototype,"onMapChanged",1);xt=Dr([mt("gs-map")],xt);var eu=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,fi=(t,e,n,i)=>{for(var s=i>1?void 0:i?tu(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&eu(e,n,s),s};let sr=class extends Et{onPartChanged(t){t==this||t==this.mapEditor||!(t instanceof xt)||(this.mapEditor=t,this.updateLater())}onMapChanged({part:t}){t==this.mapEditor&&this.updateLater()}toggleVisible(t){var l,a;const s=!(this.mapEditor.getGsMap().layers[t].visible!==!1);(a=(l=this.mapEditor)==null?void 0:l.mapOperations)==null||a.setLayerVisible(t,s),this.updateLater()}async confirmAction(t,e){await ar(t)&&e()}selectLayer(t){this.selectedLayerIndex=t,this.updateToolbar(),this.updateContextMenu()}renameLayer(t){if(!this.mapEditor)return;const e=t!==void 0?t:this.selectedLayerIndex;if(e===void 0)return;const n=Oe.createExecutionContext(this,{index:e+1});n.activeEditor=this.mapEditor,Oe.execute("rename_layer",n)}deleteLayer(t){if(!this.mapEditor)return;const e=t!==void 0?t:this.selectedLayerIndex;if(e===void 0)return;const n=this.mapEditor.getGsMap(),i=n==null?void 0:n.layers[e];i&&this.confirmAction(`Delete layer "${i.name||`Layer ${e+1}`}"?`,()=>this.withRefresh(()=>{var s,l;return(l=(s=this.mapEditor)==null?void 0:s.mapOperations)==null?void 0:l.deleteLayer(e)}))}moveLayerUp(t){!this.mapEditor||t<=0||(this.withRefresh(()=>{var e,n;return(n=(e=this.mapEditor)==null?void 0:e.mapOperations)==null?void 0:n.moveLayer(t,t-1)}),this.selectedLayerIndex=t-1)}moveLayerDown(t){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();!e||t>=e.layers.length-1||(this.withRefresh(()=>{var n,i;return(i=(n=this.mapEditor)==null?void 0:n.mapOperations)==null?void 0:i.moveLayer(t,t+1)}),this.selectedLayerIndex=t+1)}renderToolbar(){const t=this.selectedLayerIndex!==void 0;return Z`
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
        `}renderContextMenu(){const t=this.selectedLayerIndex!==void 0;return Z`
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
        `}render(){return rn(!this.mapEditor,()=>Z`
                    <k-no-content message="Select a map."></k-no-content>`,()=>{var t,e,n,i,s,l,a,h;return Z`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${(t=this.mapEditor.getGsMap())==null?void 0:t.layers.map((w,v)=>Z`
                            <wa-tree-item @click="${()=>this.selectLayer(v)}" 
                                          class="${this.selectedLayerIndex===v?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${w.name??`Layer ${v+1}`}${v==0?Z`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-action size="small"
                                                  icon="${w.visible!==!1?"eye":"eye-slash"}"
                                                  title="${w.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>this.toggleVisible(v)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${v===0}"
                                                  .action=${()=>this.moveLayerUp(v)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${v===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>this.moveLayerDown(v)}>
                                        </k-action>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${(n=(e=this.mapEditor)==null?void 0:e.getGsMap())==null?void 0:n.controls.map((w,v)=>Z`
                            <wa-tree-item>
                                <span>${br(w.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>this.confirmAction(`Delete control "${br(w.src)}"?`,()=>this.withRefresh(()=>{var I,S;return(S=(I=this.mapEditor)==null?void 0:I.mapOperations)==null?void 0:S.removeControl(v)}))}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${(s=(i=this.mapEditor)==null?void 0:i.getGsMap())==null?void 0:s.overlays.map((w,v)=>Z`
                            <wa-tree-item>
                                <span>${br(w.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>this.confirmAction(`Delete overlay "${br(w.src)}"?`,()=>this.withRefresh(()=>{var I,S;return(S=(I=this.mapEditor)==null?void 0:I.mapOperations)==null?void 0:S.removeOverlay(v)}))}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="highlighter"></k-icon> Styles
                        <wa-tree-item>
                            <span>Defined Styles: ${Object.keys(((l=this.mapEditor.getGsMap())==null?void 0:l.styles)||{}).length}</span>
                        </wa-tree-item>
                        <wa-tree-item>
                            <span>Style Rules: ${((h=(a=this.mapEditor.getGsMap())==null?void 0:a.styleRules)==null?void 0:h.length)||0}</span>
                        </wa-tree-item>
                    </wa-tree-item>
                </wa-tree>
            `})}};sr.styles=Lt`
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
    `;fi([gt()],sr.prototype,"selectedLayerIndex",2);fi([ci(Me)],sr.prototype,"onPartChanged",1);fi([ci(un)],sr.prototype,"onMapChanged",1);sr=fi([mt("gs-map-props")],sr);var nu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,La=(t,e,n,i)=>{for(var s=i>1?void 0:i?ru(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=(i?a(e,n,s):a(s))||s);return i&&s&&nu(e,n,s),s};const iu="catalog.root";let _n=class extends Et{constructor(){super(...arguments),this.treeRef=Mn()}doBeforeUI(){const t=pt.getContributions(iu);this.rootNodes=this.toTreeNodes(t)}renderToolbar(){const t=Me.get()instanceof _n&&jt.get()!==void 0;return Z`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!t} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(t){return t.map(e=>{const n={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const i=pt.getContributions(e.contributionId);n.leaf=i.length===0,n.children=this.toTreeNodes(i)}return n})}onItemDblClicked(t){const e=t.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(t){const e=t.detail.selection[0].model;jt.set(e.data)}setAllExpanded(t){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(n=>{n.expanded=t})}refresh(){this.requestUpdate()}createTreeItems(t,e=!1){var n;return t?Z`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${t} ?expanded=${e}>
                <span><k-icon name="${t.icon}"></k-icon> ${t.label}</span>
                ${(n=t.children)==null?void 0:n.map(i=>this.createTreeItems(i))}
            </wa-tree-item>`:Z``}render(){var t;return Z`
            <wa-tree ${Fn(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${(t=this.rootNodes)==null?void 0:t.map(e=>this.createTreeItems(e,!0))}
            </wa-tree>
        `}};_n.styles=Lt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;La([gt()],_n.prototype,"rootNodes",2);_n=La([mt("gs-catalog")],_n);const su="geo!space catalog",au="earth",ou="catalog.root.geospace",lu=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],cu={label:su,icon:au,contributionId:ou,items:lu};dt({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async t=>{let e=t.params&&t.params.url;if(!e){const i=jt.get();if(!i||!("url"in i))return;e=i.url}const n=await Dt.getWorkspace();if(!n){Xe("No workspace selected.");return}fetch(e,{method:"GET"}).then(i=>i.blob()).then(i=>{const s=new URL(e).pathname.split("/"),l=s[s.length-1];return n.getResource(l,{create:!0}).then(a=>a.saveContents(i,{contentType:Ks.BINARY}).then(()=>{zt("File checked out: "+l)}))}).catch(i=>{Xe(i)})}}});dt({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async t=>{const e=Me.get();e instanceof _n&&e.refresh()}}});dt({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Me.get();e instanceof _n&&e.setAllExpanded(!0)}}});dt({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async t=>{const e=Me.get();e instanceof _n&&e.setAllExpanded(!1)}}});Pa(cu);const xn=t=>t.activeEditor instanceof xt,Hn=t=>{const e=t.activeEditor;if(!(e instanceof xt)||!e.getOperations())throw ut.error("GsMapEditor with renderer not available in context.source"),new Error("GsMapEditor with renderer not available in context.source");return e.getOperations()};Oe.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level, an interger between 0 and 12",required:!0}]},handler:{canExecute:xn,execute:async t=>{await Hn(t).setZoom(Number(t.params.zoom).valueOf())}}});Oe.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[]},handler:{canExecute:t=>Me.get()instanceof xt,execute:async t=>{var i;const e=Me.get(),n=e.getGsMap();if(((i=n==null?void 0:n.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(n.view.zoom+1))}}}});Oe.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[]},handler:{canExecute:t=>Me.get()instanceof xt,execute:async t=>{var i;const e=Me.get(),n=e.getGsMap();if(((i=n==null?void 0:n.view)==null?void 0:i.zoom)!==void 0){const s=e.mapOperations;await(s==null?void 0:s.setZoom(n.view.zoom-1))}}}});Oe.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the map",required:!0},{name:"lon",description:"the longitude of the map",required:!0}]},handler:{canExecute:xn,execute:async t=>{const e=Hn(t),n=so([Number(t.params.lon).valueOf(),Number(t.params.lat).valueOf()]);await e.setCenter([n[0],n[1]])}}});Oe.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(nn).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:xn,execute:async t=>{var h;const e=Hn(t),n=(h=t.params.source)==null?void 0:h.trim().toLowerCase(),i=t.params.url,s=ao(n),l=(t==null?void 0:t.params)&&t.params.basemap==!0,a={type:lo(n),source:{type:s,url:i??oo(s)}};await ii(a,"url"),await e.addLayer(a,l)}}});Oe.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:xn,execute:async t=>{const e=Hn(t),n=parseInt(t.params.index)-1;n<0||await e.deleteLayer(n)}}});Oe.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:xn,execute:async t=>{var h;const e=Hn(t),i=t.activeEditor.getGsMap(),s=parseInt(t.params.index)-1;if(s<0||!i||s>=i.layers.length)return;const l=i.layers[s].name||`Layer ${s+1}`,a=((h=t.params)==null?void 0:h.newName)||await _r(`Enter new name for "${l}":`,l);!a||a===l||await e.renameLayer(s,a)}}});Oe.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:xn,execute:async t=>{var i;const e=t.source,n=(i=t.params)==null?void 0:i.mode;await e.switchColorMode(n)}}});Oe.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:xn,execute:async t=>{const e=Hn(t),n=t.params.src,i=t.params.position;await e.addOverlayFromModule(n,i)}}});Oe.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:xn,execute:async t=>{const e=Hn(t),n=t.params.src;await e.addControlFromModule(n)}}});Oe.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates",type:"number[]"}]},handler:{canExecute:xn,execute:async t=>{const e=t.params.latlon,i=t.source.renderer.getViewExtent();if(!i)throw new Error("Failed to get view extent");let s=i;if(e||e===void 0){const{transformExtent:l}=await ft(async()=>{const{transformExtent:a}=await import("./index-D0ONUd71.js").then(h=>h.a8);return{transformExtent:a}},__vite__mapDeps([0,1]));s=l(i,"EPSG:3857","EPSG:4326"),[s[0],s[1]]=[s[1],s[0]],[s[2],s[3]]=[s[3],s[2]]}t.viewExtent=s}}});Oe.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:t=>Me.get()instanceof xt,execute:async t=>{const e=Me.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});Oe.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:t=>Me.get()instanceof xt,execute:async t=>{const e=Me.get();e instanceof xt&&await e.refresh()}}});Oe.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:t=>Me.get()instanceof xt,execute:async t=>{const e=Me.get();e instanceof xt&&await e.resetView()}}});Oe.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:t=>Me.get()instanceof xt,execute:async t=>{const n=Me.get().mapOperations;n&&await n.switchColorMode()}}});Ze.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>ft(()=>import("./git-extension-q9s_HUGL.js"),__vite__mapDeps([2,0,1])),icon:"code-branch",experimental:!0});Ze.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>ft(()=>import("./pyterminal-extension-ueECy6XZ.js"),__vite__mapDeps([3,0,1,4])),icon:"k python",experimental:!0});Ze.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>ft(()=>import("./k-linuxterminal-BsFyVv_L.js"),__vite__mapDeps([5,0,1,4])),icon:"terminal",experimental:!0});Ze.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>ft(()=>import("./webllmservice-DEDenTv5.js"),[]),icon:"robot"});Ze.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>ft(()=>import("./p12-splitter-BA6TvKZh.js"),__vite__mapDeps([6,0,1])),icon:"certificate"});Ze.registerExtension({id:"system.pythonpackagemanager",name:"Python Package Manager",description:"Manage Python packages for notebooks and other Python-based extensions",loader:()=>ft(()=>import("./package-manager-extension-B5WboPBk.js"),__vite__mapDeps([7,0,1])),icon:"box"});Ze.registerExtension({id:"system.notebook",name:"Jupyter Notebook Editor",description:"View and execute Jupyter notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>ft(()=>import("./notebook-extension-eQj9zP_1.js"),__vite__mapDeps([8,0,1,9,10,7])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});Ze.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>ft(()=>import("./command-palette-extension-CoVdlYC_.js"),__vite__mapDeps([11,0,1])),icon:"terminal"});Ze.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>ft(()=>import("./download-extension-j4yiNp0k.js"),__vite__mapDeps([12,0,1])),icon:"download"});Ze.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>ft(()=>import("./unzip-extension-WqRZ2Ey6.js"),__vite__mapDeps([13,0,1])),icon:"box-archive"});Ze.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>ft(()=>import("./md-editor-extension-DifwTZUO.js"),__vite__mapDeps([14,0,1])),icon:"book"});Ze.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>ft(()=>import("./monaco-editor-extension-eEIwUqU4.js"),__vite__mapDeps([15,9,0,1,10,7])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});Ze.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>ft(()=>import("./memory-usage-extension-BwhpiDVB.js"),__vite__mapDeps([16,0,1])),icon:"microchip"});Ze.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>ft(()=>import("./webdav-extension-D0yUBwVh.js"),__vite__mapDeps([17,0,1])),icon:"cloud"});const uu=`You are a specialized commands execution plan generator. Your sole purpose is to analyze user requests expressed in natural language and translate them into a precise sequence of command calls that can be executed by a software controller.

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
\`\`\``,pu=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,du=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``;let hu=0;pt.registerContribution(Lr,{label:"Commander",description:"Commands execution plan generator",role:"commands",sysPrompt:uu,canHandle:({activeEditor:t})=>{const e=Oe.listCommands({source:t});return Object.keys(e).length>0},promptDecorator:async({userPrompt:t,commandRegistry:e,activeEditor:n})=>{const i=e.listCommands({source:n}),s=JSON.stringify(i,null,2);return`${t}

***Available Commands:***
${s}`},messageDecorator:async({message:t,activeEditor:e})=>{if(!t)return;const n=t.content.replace("```json","").replace("```",""),i=JSON.parse(n);let s=!0;t.content=i.map(({id:l,summary:a},h)=>{const w=Oe.getCommand(l);return w?`${h+1}. ${w.name}
	- ${a||w.description}`:(s=!1,`${h+1}. *INVALID COMMAND:* _${l}_`)}).join(`
`),t.actions=t.actions||[],t.actions.push({label:"Show Commands Execution Plan",icon:"list",action:async()=>{const l=hu++,a=`\`\`\`json
${JSON.stringify(i,null,2)}
\`\`\``,h=new Ys(a,`Commands Execution Plan (${l}).md`);await En.loadEditor(h)}}),s&&t.actions.push({label:"Execute Commands",icon:"play",action:async()=>{const l=(e==null?void 0:e.getCommandStack())||new ra;await tr.runAsync("Executing commands",async()=>{ut.debug("Executing commands: "+JSON.stringify(i));const a=Oe.createExecutionContext(e);for(const h of i){const w=Object.entries(h.parameters||{}).map(([v,I])=>(typeof I=="string"&&(I=I.replace(/{{(.*?)}}/g,(S,y)=>a[y.trim()]??"")),[v,I]));a.params=Object.fromEntries(w),await l.execute(h.id,a)}})}})}});const Da=t=>t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function",Na=async({userPrompt:t,activeEditor:e})=>{var l,a;const n=e.getEditor(),i=n.getModel(),s=i.getValueInRange(n.getSelection());return s?`${t}

 Code selection within file "${(l=e.input)==null?void 0:l.data.getWorkspacePath()}":

            ${s}`:`${t}

Code in file "${(a=e.input)==null?void 0:a.data.getWorkspacePath()}":

            ${i.getValue()}`};pt.registerContribution(Lr,{label:"Python Assistant",description:"Python code assistant",role:"py-programmer",sysPrompt:pu,canHandle:({activeEditor:t})=>Da(t)&&t.getLanguage()=="python",promptDecorator:Na});pt.registerContribution(Lr,{label:"JavaScript Assistant",description:"JavaScript code assistant",role:"js-programmer",sysPrompt:du,canHandle:({activeEditor:t})=>Da(t)&&t.getLanguage()=="javascript",promptDecorator:Na});var fu=Object.getOwnPropertyDescriptor,mu=(t,e,n,i)=>{for(var s=i>1?void 0:i?fu(e,n):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(s=a(s)||s);return s};let Fs=class extends Gi{createRenderRoot(){return this}render(){return Z`
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
                <k-toolbar id=${Vi}></k-toolbar>
                <k-toolbar id=${yl}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${or}></k-toolbar>
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
                    <k-tabs id="${Pi}"></k-tabs>
                    <k-tabs id="${ua}"></k-tabs>
                </k-resizable-grid>
                
                <!-- CENTER: Editor + Bottom Panel -->
                <k-resizable-grid 
                    id="center-layout" 
                    orientation="vertical" 
                    sizes="80%, 20%">
                    
                    <!-- Editor Area (fixed, never moves) -->
                    <k-tabs id="${Qr}"></k-tabs>
                    
                    <!-- Bottom Panel (terminal, output, etc.) -->
                    <k-tabs id="${da}"></k-tabs>
                </k-resizable-grid>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${pa}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${la}></k-toolbar>
                <k-toolbar id=${Hi}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${ca}></k-toolbar>
            </div>
        `}};Fs=mu([mt("gs-app")],Fs);const gu=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
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
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,qs=Fi("GeoSpaceApp"),vu={".geojson":nn.GeoJSON,".json":nn.GeoJSON,".kml":nn.KML,".gpx":nn.GPX,".tif":nn.GeoTIFF,".tiff":nn.GeoTIFF,".geotiff":nn.GeoTIFF},$a=t=>{const e=t.getName().toLowerCase();for(const[n,i]of Object.entries(vu))if(e.endsWith(n))return i;return null},yu=t=>$a(t)!==null,Hr={id:"geospace",name:"geo!space",version:bs,description:"A geospatial IDE for working with spatial data",extensions:["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage"],contributions:{ui:[{target:Vi,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:Pi,name:"filebrowser",label:"Workspace",icon:"folder-open",component:t=>Z`<k-filebrowser id="${t}"></k-filebrowser>`},{target:Pi,name:"catalog",label:"Catalog",icon:"book",component:t=>Z`<gs-catalog id="${t}"></gs-catalog>`},{target:ua,name:"map-props",label:"Map Properties",icon:"fg map-options",component:t=>Z`<gs-map-props id="${t}"></gs-map-props>`},{target:pa,name:"assistant",label:"AI",icon:"robot",component:t=>Z`<k-aiassist id="${t}"></k-aiassist>`},{target:da,name:"log-terminal",label:"Log",icon:"list",component:t=>Z`<k-log-terminal id="${t}"></k-log-terminal>`},{target:la,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:ca,label:`v${bs}`,icon:"circle-info",command:"show_version_info"},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const t=jt.get();return t instanceof Xn?!yu(t):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_geospace_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>ft(()=>import("./mapbuilder-extension-yizVRGwZ.js"),__vite__mapDeps([18,0,1])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>ft(()=>import("./style-editor-extension-CArMhPdY.js"),__vite__mapDeps([19,0,1])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>ft(()=>import("./overpass-extension-19BKjZ8e.js"),__vite__mapDeps([20,0,1])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>ft(()=>import("./gtfs-extension-D5HSV6uo.js"),__vite__mapDeps([21,0,1])),icon:"map-location-dot"}]},async initialize(){pt.registerContribution(Lr,{label:"App Support",description:"General app support",role:"appsupport",sysPrompt:()=>{const t=Ze.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,installedAndEnabled:Ze.isEnabled(n.id)})),e=`***Available Extensions:***
${JSON.stringify(t,null,2)}`;return`${gu}

${e}`},canHandle:({activeEditor:t})=>t===void 0,promptDecorator:async({userPrompt:t})=>Dt.getWorkspace().then(e=>{var s;const n={workspace:e==null?void 0:e.getName(),activeEditor:(s=En.getEditorArea())==null?void 0:s.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(n,null,2)}`}

${t}`})}),dt({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async t=>{alert(`${Hr.name}
Version: ${Hr.version}
Alpha Release

${Hr.description}`)}}}),dt({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async t=>{const e=jt.get();if(!(e instanceof Xn))return;const n=$a(e);if(!n){qs.warn(`Unsupported file type: ${e.getName()}`);return}const i=e.getWorkspacePath(),s=Oe.createExecutionContext(t.source,{source:n,url:i});await Oe.execute("add_layer",s)}}}),dt({command:{id:"create_geospace_file",name:"Create GeoSpace Map File",description:"Creates a new .geospace map file",parameters:[]},handler:{execute:async()=>{const t={...Gs,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}};await Oe.execute("create_file",{params:{path:"map.geospace",contents:JSON.stringify(t,null,2),extension:".geospace",ask:!0}})}}}),qs.info("geo!space is ready!")},render(){return Z`<gs-app></gs-app>`}};na.loadApp(Hr,document.body);export{_i as D,Xn as F,xt as G,Wn as K,wc as P,Vi as T,Me as a,tr as b,Xe as c,Gr as d,dt as e,jt as f,da as g,Et as h,hl as i,yl as j,Ks as k,Ra as l,He as m,jr as n,En as o,ut as p,pt as q,Mt as r,sn as s,zt as t,la as u,It as v,Dt as w,pn as x,Fi as y};
