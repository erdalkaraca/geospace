const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/transformers-BZ9t3aNJ.js","assets/index-8b_zEHWw.js","assets/preload-helper-WQhrSmCl.js","assets/chunk.LTSJC6DR-BTS7fm5P.js","assets/index-aP6FMjSZ.css","assets/git-extension-Dj8sCney-CFF2HOlf.js","assets/chunk.RRCUZAZD-5O78oK5S.js","assets/pyterminal-extension-DFZtFr37-BJlqlOBh.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-EUO5ezUi-B13djloX.js","assets/webllmservice-CkxSBno_-CnZ0p67t.js","assets/p12-splitter-BT1Fci6r-COkJ3X5A.js","assets/package-manager-extension-Bb1gA_o0-Ddix86DH.js","assets/notebook-extension-CHWcKth5-zYCus4a3.js","assets/command-palette-extension-DzUKvXEF-B6tF6jeC.js","assets/download-extension-CAdNzkzp-Be9htdeo.js","assets/unzip-extension-Ds1heFdp-DQfqi5ad.js","assets/md-editor-extension-DKyIyPYL-C6UJ4s_O.js","assets/media-viewer-extension-BTZe4U8t-BiPOP3oc.js","assets/monaco-editor-extension-BYrgxpSf-CkIiFMtj.js","assets/memory-usage-extension-DySybky--BjWQo1kT.js","assets/webdav-extension-IJzFhTT3-CFa2-Iyv.js","assets/settings-tree-extension-CS1vqypL-DEYyh9GD.js","assets/in-browser-ml-extension-DzlSkaxu-DU-NA5SF.js","assets/ai-system-extension-CvZ3Jlt8-Dy7uje2-.js","assets/rag-system-extension-Ce_XJD9Q-DbuxQMgS.js","assets/howto-extension-DDSNN6um-lhW9hLlL.js","assets/index-DAjG65pZ.js","assets/k-monaco-editor-qnA44pN5-D2UPrw0T.js","assets/editor.main-ChA2hgQD.js","assets/editor-Dvl_Svmm.css","assets/mapbuilder-extension-BHqfx2sw.js","assets/style-editor-extension-bd99_IOe.js","assets/overpass-extension-BBggtk82.js","assets/gtfs-extension-BmQbUQkU.js","assets/github-service-DMLRK4rG.js"])))=>i.map(i=>d[i]);
import{_ as Pe,c as Ua,g as Mo,a as Uo}from"./preload-helper-WQhrSmCl.js";import{x as S,B as qt,q as Oe,s as He,u as zo,w as gs,y as tt,z as ce,E as Ke,A as qe,H as _r,I as Be,J as Fo,M as Yt,N as Zt,O as gt,P as Wo,Q as Go,G as zt,r as qo,R as za,T as Bo,U as ms,W as Fa,X as jo,Y as Vo,Z as Ho,_ as Xo,$ as Ko,o as Wa,a0 as Yo,a1 as Zo,a2 as Jo}from"./index-8b_zEHWw.js";import"./chunk.RRCUZAZD-5O78oK5S.js";import{r as Qo}from"./chunk.LTSJC6DR-BTS7fm5P.js";const el="@kispace-io/geospace",tl="1.1.7",nl={"@kispace-io/appspace":"^1.1.25","@kispace-io/gs-lib":"file:../gs-lib","esbuild-wasm":"^0.25.11","font-gis":"^1.0.6",osmtogeojson:"^3.0.0-beta.5","pace-js":"^1.2.4"},rl={"@testing-library/jest-dom":"^6.9.1","@types/node":"^24.9.2","@vitest/coverage-v8":"^4.0.6","@vitest/ui":"^4.0.6","happy-dom":"^20.0.10",jsdom:"^27.1.0","rollup-plugin-visualizer":"^6.0.5",typescript:"~5.9.3",vite:"^7.1.12","vite-plugin-cross-origin-isolation":"^0.1.6","vite-plugin-mkcert":"^1.17.9","vite-plugin-static-copy":"^3.1.4","vite-plugin-zip":"^1.0.1",vitest:"^4.0.6"},fr={name:el,version:tl,dependencies:nl,devDependencies:rl};class ea{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,t){return e[t]||this.parent?.getProxy()[t]}set(e,t,r){e[t]=r}put(e,t){this.variables[e]=t}getProxy(){return this.proxy}createChild(e={}){const t=new ea(e);return t.parent=this,this.children.push(t),t}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const bt=new ea({}),Zn=bt.createChild({});Zn.put("html",S);Zn.put("render",qt);const Ga={debug:0,info:1,warning:2,error:3};let il="debug";const Nn={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let Jr=null;const Fi=[];function ar(n){if(n===null)return"null";if(n===void 0)return"undefined";if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean")return String(n);if(n instanceof Error)return`${n.name}: ${n.message}`;try{return JSON.stringify(n)}catch{return String(n)}}class al{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,t){Mn(this.source,e,t)}}function sl(n){return Ga[n]>=Ga[il]}function Mn(n,e,t){sl(t)&&(Jr?Jr(n,e,t):(Fi.push({source:n,message:e,level:t}),Nn[t==="error"?"error":t==="warning"?"warn":t==="debug"?"debug":"log"](`[${n}] ${e}`)))}function ol(){console.log=function(...n){Nn.log.apply(console,n),Mn("Console",n.map(e=>ar(e)).join(" "),"info")},console.info=function(...n){Nn.info.apply(console,n),Mn("Console",n.map(e=>ar(e)).join(" "),"info")},console.warn=function(...n){Nn.warn.apply(console,n),Mn("Console",n.map(e=>ar(e)).join(" "),"warning")},console.error=function(...n){Nn.error.apply(console,n),Mn("Console",n.map(e=>ar(e)).join(" "),"error")},console.debug=function(...n){Nn.debug.apply(console,n),Mn("Console",n.map(e=>ar(e)).join(" "),"debug")}}ol();function ll(n){for(Jr=n;Fi.length>0;){const e=Fi.shift();e&&n(e.source,e.message,e.level)}}function cl(){Jr=null}function Bt(n){return new al(n)}const $e=Bt("System");bt.put("logger",$e);function ta(n){return new Promise((e,t)=>{n.oncomplete=n.onsuccess=()=>e(n.result),n.onabort=n.onerror=()=>t(n.error)})}function ul(n,e){let t;const r=()=>{if(t)return t;const i=indexedDB.open(n);return i.onupgradeneeded=()=>i.result.createObjectStore(e),t=ta(i),t.then(a=>{a.onclose=()=>t=void 0},()=>{}),t};return(i,a)=>r().then(s=>a(s.transaction(e,i).objectStore(e)))}let $i;function ys(){return $i||($i=ul("keyval-store","keyval")),$i}function dl(n,e=ys()){return e("readonly",t=>ta(t.get(n)))}function pl(n,e,t=ys()){return t("readwrite",r=>(r.put(e,n),ta(r.transaction)))}class hl{async persistObject(e,t){return pl(e,t)}async getObject(e){return dl(e)}}const Ot=new hl;bt.put("persistenceService",Ot);const Un=".geospace/settings.json",Yr="dialogSettings",rn="events/settings/changed";class fl{async checkSettings(){this.appSettings||(this.appSettings=await Ot.getObject(Un),this.appSettings||(this.appSettings={},await Ot.persistObject(Un,this.appSettings)),Oe(rn,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,t){await this.checkSettings(),this.appSettings[e]=t,await Ot.persistObject(Un,this.appSettings),Oe(rn,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await Ot.persistObject(Un,this.appSettings),Oe(rn,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[Yr]||{})[e]}async setDialogSetting(e,t){await this.checkSettings();const r=this.appSettings[Yr]||{};r[e]=t,this.appSettings[Yr]=r,await Ot.persistObject(Un,this.appSettings),Oe(rn,this.appSettings)}}const ze=new fl;bt.put("appSettings",ze);const gl=Object.freeze(Object.defineProperty({__proto__:null,DIALOG_SETTINGS_KEY:Yr,SETTINGS_FILE_PATH:Un,TOPIC_SETTINGS_CHANGED:rn,appSettings:ze},Symbol.toStringTag,{value:"Module"})),qp=Object.freeze(Object.defineProperty({__proto__:null,T:rn,a:ze,p:Ot,s:gl},Symbol.toStringTag,{value:"Module"})),xt=n=>{console.info("[TOAST] INFO:",n)},Ce=n=>{console.error("[TOAST] ERROR:",n)},ml=n=>{console.warn("[TOAST] WARNING:",n)};Zn.put("toastInfo",xt);Zn.put("toastError",Ce);Zn.put("toastWarning",ml);var yl=Object.defineProperty,bl=(n,e,t)=>e in n?yl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Oi=(n,e,t)=>(bl(n,typeof e!="symbol"?e+"":e,t),t),wl=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)},Di=(n,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return n.has(e)},jr=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},qa=(n,e,t)=>(wl(n,e,"access private method"),t);function bs(n,e){return Object.is(n,e)}let Xe=null,vr=!1,Zr=1;const Qr=Symbol("SIGNAL");function zn(n){const e=Xe;return Xe=n,e}function vl(){return Xe}function El(){return vr}const na={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function gi(n){if(vr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Xe===null)return;Xe.consumerOnSignalRead(n);const e=Xe.nextProducerIndex++;if(jn(Xe),e<Xe.producerNode.length&&Xe.producerNode[e]!==n&&Wi(Xe)){const t=Xe.producerNode[e];mi(t,Xe.producerIndexOfThis[e])}Xe.producerNode[e]!==n&&(Xe.producerNode[e]=n,Xe.producerIndexOfThis[e]=Wi(Xe)?Es(n,Xe,e):0),Xe.producerLastReadVersion[e]=n.version}function kl(){Zr++}function ws(n){if(!(!n.dirty&&n.lastCleanEpoch===Zr)){if(!n.producerMustRecompute(n)&&!Sl(n)){n.dirty=!1,n.lastCleanEpoch=Zr;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Zr}}function vs(n){if(n.liveConsumerNode===void 0)return;const e=vr;vr=!0;try{for(const t of n.liveConsumerNode)t.dirty||xl(t)}finally{vr=e}}function Cl(){return Xe?.consumerAllowSignalWrites!==!1}function xl(n){var e;n.dirty=!0,vs(n),(e=n.consumerMarkedDirty)==null||e.call(n.wrapper??n)}function Al(n){return n&&(n.nextProducerIndex=0),zn(n)}function Tl(n,e){if(zn(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Wi(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)mi(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Sl(n){jn(n);for(let e=0;e<n.producerNode.length;e++){const t=n.producerNode[e],r=n.producerLastReadVersion[e];if(r!==t.version||(ws(t),r!==t.version))return!0}return!1}function Es(n,e,t){var r;if(ra(n),jn(n),n.liveConsumerNode.length===0){(r=n.watched)==null||r.call(n.wrapper);for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=Es(n.producerNode[i],n,i)}return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function mi(n,e){var t;if(ra(n),jn(n),typeof ngDevMode<"u"&&ngDevMode&&e>=n.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${n.liveConsumerNode.length} consumers)`);if(n.liveConsumerNode.length===1){(t=n.unwatched)==null||t.call(n.wrapper);for(let i=0;i<n.producerNode.length;i++)mi(n.producerNode[i],n.producerIndexOfThis[i])}const r=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[r],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[r],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){const i=n.liveConsumerIndexOfThis[e],a=n.liveConsumerNode[e];jn(a),a.producerIndexOfThis[i]=e}}function Wi(n){var e;return n.consumerIsAlwaysLive||(((e=n?.liveConsumerNode)==null?void 0:e.length)??0)>0}function jn(n){n.producerNode??(n.producerNode=[]),n.producerIndexOfThis??(n.producerIndexOfThis=[]),n.producerLastReadVersion??(n.producerLastReadVersion=[])}function ra(n){n.liveConsumerNode??(n.liveConsumerNode=[]),n.liveConsumerIndexOfThis??(n.liveConsumerIndexOfThis=[])}function ks(n){if(ws(n),gi(n),n.value===Gi)throw n.error;return n.value}function _l(n){const e=Object.create($l);e.computation=n;const t=()=>ks(e);return t[Qr]=e,t}const Ri=Symbol("UNSET"),Ii=Symbol("COMPUTING"),Gi=Symbol("ERRORED"),$l={...na,value:Ri,dirty:!0,error:null,equal:bs,producerMustRecompute(n){return n.value===Ri||n.value===Ii},producerRecomputeValue(n){if(n.value===Ii)throw new Error("Detected cycle in computations.");const e=n.value;n.value=Ii;const t=Al(n);let r,i=!1;try{r=n.computation.call(n.wrapper),i=e!==Ri&&e!==Gi&&n.equal.call(n.wrapper,e,r)}catch(a){r=Gi,n.error=a}finally{Tl(n,t)}if(i){n.value=e;return}n.value=r,n.version++}};function Ol(){throw new Error}let Dl=Ol;function Rl(){Dl()}function Il(n){const e=Object.create(Nl);e.value=n;const t=()=>(gi(e),e.value);return t[Qr]=e,t}function Ll(){return gi(this),this.value}function Pl(n,e){Cl()||Rl(),n.equal.call(n.wrapper,n.value,e)||(n.value=e,Ml(n))}const Nl={...na,equal:bs,value:void 0};function Ml(n){n.version++,kl(),vs(n)}const st=Symbol("node");var Jt;(n=>{var e,t,r,i;class a{constructor(u,h={}){jr(this,t),Oi(this,e);const E=Il(u)[Qr];if(this[st]=E,E.wrapper=this,h){const m=h.equals;m&&(E.equal=m),E.watched=h[n.subtle.watched],E.unwatched=h[n.subtle.unwatched]}}get(){if(!(0,n.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Ll.call(this[st])}set(u){if(!(0,n.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(El())throw new Error("Writes to signals not permitted during Watcher callback");const h=this[st];Pl(h,u)}}e=st,t=new WeakSet,n.isState=l=>typeof l=="object"&&Di(t,l),n.State=a;class s{constructor(u,h){jr(this,i),Oi(this,r);const E=_l(u)[Qr];if(E.consumerAllowSignalWrites=!0,this[st]=E,E.wrapper=this,h){const m=h.equals;m&&(E.equal=m),E.watched=h[n.subtle.watched],E.unwatched=h[n.subtle.unwatched]}}get(){if(!(0,n.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return ks(this[st])}}r=st,i=new WeakSet,n.isComputed=l=>typeof l=="object"&&Di(i,l),n.Computed=s,(l=>{var u,h,T,E;function m($){let U,L=null;try{L=zn(null),U=$()}finally{zn(L)}return U}l.untrack=m;function k($){var U;if(!(0,n.isComputed)($)&&!(0,n.isWatcher)($))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((U=$[st].producerNode)==null?void 0:U.map(L=>L.wrapper))??[]}l.introspectSources=k;function D($){var U;if(!(0,n.isComputed)($)&&!(0,n.isState)($))throw new TypeError("Called introspectSinks without a Signal argument");return((U=$[st].liveConsumerNode)==null?void 0:U.map(L=>L.wrapper))??[]}l.introspectSinks=D;function B($){if(!(0,n.isComputed)($)&&!(0,n.isState)($))throw new TypeError("Called hasSinks without a Signal argument");const U=$[st].liveConsumerNode;return U?U.length>0:!1}l.hasSinks=B;function ee($){if(!(0,n.isComputed)($)&&!(0,n.isWatcher)($))throw new TypeError("Called hasSources without a Computed or Watcher argument");const U=$[st].producerNode;return U?U.length>0:!1}l.hasSources=ee;class Y{constructor(U){jr(this,h),jr(this,T),Oi(this,u);let L=Object.create(na);L.wrapper=this,L.consumerMarkedDirty=U,L.consumerIsAlwaysLive=!0,L.consumerAllowSignalWrites=!1,L.producerNode=[],this[st]=L}watch(...U){if(!(0,n.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");qa(this,T,E).call(this,U);const L=this[st];L.dirty=!1;const x=zn(L);for(const P of U)gi(P[st]);zn(x)}unwatch(...U){if(!(0,n.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");qa(this,T,E).call(this,U);const L=this[st];jn(L);for(let x=L.producerNode.length-1;x>=0;x--)if(U.includes(L.producerNode[x].wrapper)){mi(L.producerNode[x],L.producerIndexOfThis[x]);const P=L.producerNode.length-1;if(L.producerNode[x]=L.producerNode[P],L.producerIndexOfThis[x]=L.producerIndexOfThis[P],L.producerNode.length--,L.producerIndexOfThis.length--,L.nextProducerIndex--,x<L.producerNode.length){const q=L.producerIndexOfThis[x],de=L.producerNode[x];ra(de),de.liveConsumerIndexOfThis[q]=x}}}getPending(){if(!(0,n.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[st].producerNode.filter(L=>L.dirty).map(L=>L.wrapper)}}u=st,h=new WeakSet,T=new WeakSet,E=function($){for(const U of $)if(!(0,n.isComputed)(U)&&!(0,n.isState)(U))throw new TypeError("Called watch/unwatch without a Computed or State argument")},n.isWatcher=$=>Di(h,$),l.Watcher=Y;function G(){var $;return($=vl())==null?void 0:$.wrapper}l.currentComputed=G,l.watched=Symbol("watched"),l.unwatched=Symbol("unwatched")})(n.subtle||(n.subtle={}))})(Jt||(Jt={}));const Ul=Symbol("SignalWatcherBrand"),zl=new FinalizationRegistry((({watcher:n,signal:e})=>{n.unwatch(e)})),Ba=new WeakMap;function Fl(n){return n[Ul]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),n):class extends n{constructor(){super(...arguments),this._$St=new Jt.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new Jt.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new Jt.subtle.Watcher((function(){const t=Ba.get(this);t!==void 0&&(t._$Si===!1&&t.requestUpdate(),this.watch())}));Ba.set(e,this),zl.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((t=>t.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,r){this._$So=!0,super.requestUpdate(e,t,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}Jt.State;Jt.Computed;const an=(n,e)=>new Jt.State(n,e),jt="events/contributionregistry/contributionsChanged";class Wl{constructor(){this.contributions=new Map}registerContribution(e,t){const r=this.getContributions(e);if(t.disabled instanceof Function){const i=t.disabled;t.disabled=new Jt.Computed(i)}r.push(t),Oe(jt,{target:e,contributions:r})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const Q=new Wl;bt.put("contributionRegistry",Q);const Gl={},Re=an(null),Pt=an(null),Ar=an(null),qi=an(0),It=an(void 0);an({name:"",timestamp:0});class ql{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,qi.set(this.updateCounter)}run(e,t){const r=this.createProgressMonitor(e);try{this.tasks.push(r),this.notifyUpdate(),t(r)}finally{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()}}async runAsync(e,t){const r=this.createProgressMonitor(e);return this.tasks.push(r),this.notifyUpdate(),t(r).finally(()=>{this.tasks.splice(this.tasks.indexOf(r),1),this.notifyUpdate()})}createProgressMonitor(e){const t={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(t,{set:(r,i,a)=>(r[i]=a,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const $r=new ql;bt.put("taskService",$r);const gr="events/extensionsregistry/extensionsConfigChanged",sr="extensions",ja="extensions.external";class Bl{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,He(rn,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(t=>this.isEnabled(t.id)).map(t=>this.load(t.id).catch(r=>{Ce("Extension could not be loaded: "+r.message)}))||[];await Promise.all(e)})})}async loadPersistedExternalExtensions(){try{const e=await ze.get(ja);e&&Array.isArray(e)&&(e.forEach(t=>{this.extensions[t.id]=t}),$e.debug(`Loaded ${e.length} persisted external extensions`))}catch(e){$e.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(t=>t.external);await ze.set(ja,e)}catch(e){$e.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await ze.get(sr),this.extensionsSettings||(await ze.set(sr,[]),this.extensionsSettings=await ze.get(sr)),Oe(gr,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,e.external&&this.savePersistedExternalExtensions().catch(t=>{$e.error(`Failed to persist external extension: ${t}`)}),Oe(gr,this.extensionsSettings)}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(t=>t.id===e&&t.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,t=!1){this.isEnabled(e)||($e.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,t)}).catch(r=>{$e.error(`Could not load extension: ${e}: ${r}`)}))}async load(e,t=[]){if(this.loadedExtensions.has(e))return;const r=this.loadingPromises.get(e);if(r)return r;if(t.includes(e)){const s=[...t,e].join(" → ");throw new Error(`Circular dependency detected: ${s}`)}const i=this.extensions[e];if(!i)throw new Error("Extension not found: "+e);const a=(async()=>{try{if(i.dependencies&&i.dependencies.length>0){$e.debug(`Loading dependencies for ${e}: ${i.dependencies.join(", ")}`);const l=[...t,e];for(const u of i.dependencies)await this.load(u,l),this.isEnabled(u)||(await this.updateEnablementAsync(u,!0,!1),$e.debug(`Auto-enabled dependency: ${u}`))}const s=await $r.runAsync("Loading extension: "+i.name,()=>{if(i.loader)return i.loader();if(i.url)return import(i.url)});if(this.loadedExtensions.add(e),s?.default instanceof Function){$e.debug(`Executing extension function for: ${e}`);try{s?.default(Zn.getProxy()),$e.debug(`Extension function executed successfully: ${e}`)}catch(l){throw $e.error(`Error executing extension function for ${e}: ${l}`),l}}else $e.warn(`Extension ${e} does not export a default function`);$e.debug(`Extension loaded: ${e}`)}catch(s){throw this.loadedExtensions.delete(e),s}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,a),a}disable(e,t=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,t)}updateEnablement(e,t,r){this.checkExtensionsConfig().then(()=>{const i=this.extensionsSettings?.find(a=>a.id==e);i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),ze.set(sr,this.extensionsSettings).then(()=>{if(r){const a=this.extensions[e];xt(t?a.name+" enabled.":a.name+" disabled  - Please restart to take effect")}Oe(gr,this.extensionsSettings)})})}async updateEnablementAsync(e,t,r){await this.checkExtensionsConfig();const i=this.extensionsSettings?.find(a=>a.id==e);if(i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),await ze.set(sr,this.extensionsSettings),r){const a=this.extensions[e];xt(t?a.name+" enabled.":a.name+" disabled  - Please restart to take effect")}Oe(gr,this.extensionsSettings)}}$e.debug("ExtensionRegistry initializing...");const fe=new Bl;bt.put("extensionRegistry",fe);$e.debug("ExtensionRegistry initialized");const we=Bt("AppLoader");function or(n){return n instanceof Error?n.message:String(n)}function jl(n){try{const t=new URL(n).pathname.split("/").filter(Boolean);return t.length>0?t[t.length-1]:void 0}catch{const e=n.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function Vl(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const t=e[0];if(!(!t||t==="index.html"||t.endsWith(".html")))return t}class Hl{constructor(){this.apps=new Map,this.started=!1,this.container=document.body,this.systemRequiredExtensions=new Set}registerApp(e,t){this.apps.has(e.id)&&we.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),we.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),t?.defaultAppId&&(this.defaultAppId=t.defaultAppId),t?.container&&(this.container=t.container),t?.autoStart&&!this.started&&this.start()}registerSystemRequiredExtension(e){this.systemRequiredExtensions.add(e)}async loadExtensionFromUrl(e){we.info(`Loading extension from URL: ${e}...`);try{const t=`url:${e}`;if(fe.isEnabled(t)){we.info(`Extension from URL ${e} is already enabled`);return}const r={id:t,name:`Extension from ${e}`,description:`Extension loaded from URL: ${e}`,url:e};fe.registerExtension(r),we.info(`Registered extension from URL: ${t}`),fe.enable(t,!1),we.info(`Successfully enabled extension from URL: ${e}`)}catch(t){throw we.error(`Failed to load extension from URL ${e}: ${or(t)}`),t}}async loadAppFromUrl(e){we.info(`Loading app from URL: ${e}...`);try{const t=await import(e);if(!t.default)throw new Error(`Module at ${e} does not have a default export`);const r=t.default;if(!r.id||!r.name||!r.version)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return we.info(`Successfully loaded app definition from URL: ${r.name} (${r.id})`),r}catch(t){throw we.error(`Failed to load app from URL ${e}: ${or(t)}`),t}}async start(){if(this.started){we.debug("AppLoader already started");return}this.started=!0,we.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),t=e.get("app"),r=e.get("appId"),i=Vl(),a=this.apps.size;let s;if(t&&(s=jl(t),s&&we.info(`Extracted app ID from URL path: ${s}`)),i&&we.info(`Extracted app ID from current page path: ${i}`),t)try{we.info(`URL parameter 'app' found: ${t}, attempting to load extension or app`);try{await this.loadExtensionFromUrl(t),we.info(`Successfully loaded extension from URL: ${t}`)}catch(u){we.info(`Failed to load as extension, trying as app definition: ${or(u)}`);try{const h=await this.loadAppFromUrl(t);this.registerApp(h),await this.loadApp(h.id,this.container),we.info(`Successfully loaded app from URL: ${t}`);return}catch(h){throw we.error(`Failed to load from URL as both extension and app: ${or(h)}`),h}}}catch(u){we.error(`Failed to load from URL parameter, falling back to default app: ${or(u)}`)}const l=this.selectAppToLoad({appIdFromUrl:r,appIdFromPath:i,appIdFromAppUrl:s,appsBeforeExtension:a});if(!l)throw new Error("No apps registered");await this.loadApp(l,this.container)}async loadApp(e,t){const r=this.apps.get(e);if(!r)throw new Error(`App '${e}' not found. Make sure it's registered.`);we.info(`Loading app: ${r.name}...`),this.currentApp&&(we.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&this.currentApp.extensions.length>0&&(we.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(a=>{fe.disable(a)}))),r.contributions&&(we.info("Registering app contributions..."),r.contributions.ui&&(r.contributions.ui.forEach(a=>{const s=a.target;s&&Q.registerContribution(s,a)}),we.info(`Registered ${r.contributions.ui.length} UI contributions`)),r.contributions.extensions&&(r.contributions.extensions.forEach(a=>{fe.registerExtension(a)}),we.info(`Registered ${r.contributions.extensions.length} app extensions`)));const i=new Set(r.extensions||[]);this.systemRequiredExtensions.forEach(a=>i.add(a)),r.extensions=Array.from(i),r.extensions.length>0&&(we.info(`Enabling ${r.extensions.length} extensions...`),r.extensions.forEach(a=>{fe.enable(a)})),r.initialize&&(we.info(`Initializing ${r.name}...`),await r.initialize()),this.currentApp=r,we.info(`App ${r.name} loaded successfully`),this.updateDocumentMetadata(r),t&&this.renderApp(t)}updateDocumentMetadata(e){if(document.title=e.name,e.metadata?.favicon){const t=e.metadata.favicon;let r=document.querySelector("link[rel*='icon']");r||(r=document.createElement("link"),r.rel="icon",document.head.appendChild(r)),r.type="image/svg+xml",r.href=t}}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");const t=this.currentApp.render?this.currentApp.render():S`<k-standard-app></k-standard-app>`;qt(t,e),we.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}selectAppToLoad(e){const{appIdFromUrl:t,appIdFromPath:r,appIdFromAppUrl:i,appsBeforeExtension:a}=e;if(t){if(this.apps.has(t))return we.info(`Loading app specified by URL parameter 'appId': ${t}`),t;we.warn(`App ID '${t}' from URL parameter not found`)}if(r){if(this.apps.has(r))return we.info(`Loading app from URL path: ${r}`),r;we.debug(`App ID '${r}' from URL path not found, continuing search`)}if(i&&this.apps.has(i))return we.info(`Loading app using ID extracted from app URL path: ${i}`),i;if(this.apps.size>a){const l=Array.from(this.apps.values()).slice(a);if(l.length>0){const u=l[0];return we.info(`Loading app registered by extension: ${u.name} (${u.id})`),u.id}}if(this.defaultAppId){if(this.apps.has(this.defaultAppId))return this.defaultAppId;we.warn(`Default app '${this.defaultAppId}' not found`)}const s=this.getRegisteredApps();if(s.length>0){const l=s[0];return we.info(`Loading first registered app: ${l.name} (${l.id})`),l.id}}}const wn=new Hl;bt.put("appLoaderService",wn);class Cs{constructor(e,t,r,i,a){this.id=e,this.name=t,this.description=r,this.parameters=i||[],this.output=a||[]}}class xs{async execute(e,t){return ye.execute(e,t)}async undo(){}async redo(){}}class As{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,t){this.handlers.has(e)||this.handlers.set(e,[]);const r=this.handlers.get(e);r.push(t),r.sort((i,a)=>(a.ranking??0)-(i.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:Re.get(),activeEditor:Pt.get()}}execute(e,t={}){const r=this.getHandler(e);if(!r)throw $e.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const i=this.getCommand(e),a=t.params?` params: ${JSON.stringify(t.params)}`:"";$e.debug(`[CommandRegistry] Executing command: ${e}${i?` (${i.name})`:""}${a}`);for(const s of r)if(s.canExecute===void 0||s.canExecute(t))try{const l=s.execute(t);return $e.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${l})`),l}catch(l){const u=l instanceof Error?l.message:String(l);throw $e.error(`[CommandRegistry] Command execution failed: ${e} - ${u}`),l}$e.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,t,r,i,a){const s=new Cs(e,t,r,i);this.registerCommand(s),a&&this.registerHandler(e,a)}registerCommand(e){this.commands[e.id]=e,$e.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(t=>(ye.getHandler(t.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(e))).reduce((t,r)=>(t[r.id]=r,t),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const t=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(t,e.handler),e.contribution&&e.contribution.target&&Q.registerContribution(e.contribution.target,{command:t,...e.contribution})}}const ye=new As;bt.put("commandRegistry",ye);const Ae=n=>{ye.registerAll(n)},Bp=Object.freeze(Object.defineProperty({__proto__:null,Command:Cs,CommandRegistry:As,CommandStack:xs,commandRegistry:ye,registerAll:Ae},Symbol.toStringTag,{value:"Module"})),Gt="events/filesys/workspaceChanged",Vn="events/filesys/workspaceConnected";class ei{constructor(){this.state={}}getWorkspacePath(){const e=[];let t=this;for(;t;)e.push(t.getName()),t=t.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const t=e.getParent();if(t)e=t;else break}return e}}var ia=(n=>(n[n.TEXT=0]="TEXT",n[n.BINARY=1]="BINARY",n))(ia||{});class At extends ei{}class Gn extends ei{}class Xl extends At{constructor(e,t){super(),this.contents=e,this.name=t}async getContents(e){return this.contents}async saveContents(e,t){this.contents=e}async size(){return this.contents.length||null}async copyTo(e){throw Error("Not supported")}delete(e,t){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class Va extends At{constructor(e,t){super(),this.fileHandle=e,this.parent=t}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const t=await this.fileHandle.getFile();return!e||e?.contentType==0?await t.text():e?.encoding==0||e?.uri?URL.createObjectURL(t):e?.blob?t:t.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,t){const r=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(r);else{const i=r.getWriter();try{await i.write(e)}finally{await i.close()}}}async copyTo(e){const t=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(t)}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):r}await t.listChildren(!0),Oe(Gt,this.getWorkspace())}}}class nn extends Gn{constructor(e,t){super(),this.dirHandle=e,this.parent=t}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const t={};try{for await(const r of this.dirHandle.values()){const a=r.kind==="file"?new Va(r,this):new nn(r,this);t[a.getName()]=a}}catch(r){if(r.name==="NotFoundError")return this.files={},[];throw r}return this.files=t,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,t){if(!e)throw new Error("No path provided");const r=e.split("/");let i=this,a=!1;try{for(let s=0;s<r.length;s++){let l=r[s];if(l&&(l=l.trim()),!l)break;if(i instanceof nn){if(await i.listChildren(),!i.files)return null;const u=i.files[l];if(u)i=u;else if(t?.create)if(a=!0,s<r.length-1)try{const h=await i.dirHandle.getDirectoryHandle(l,{create:!0}),T=new nn(h,i);i.files[l]=T,i=T,i instanceof nn&&await i.listChildren();continue}catch(h){throw h.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${r.slice(0,s+1).join("/")}`):h}else try{const h=await i.dirHandle.getFileHandle(l,{create:!0}),T=new Va(h,i);return i.files[l]=T,T}catch(h){throw h.name==="NotFoundError"?new Error(`File not found or not accessible: ${r.join("/")}`):h}else return null}}}finally{a&&Oe(Gt,this.getWorkspace())}return i}touch(){Oe(Gt,this.getWorkspace())}async delete(e,t=!0){if(!e){const r=this.getParent();return r instanceof nn&&(await r.listChildren(),r.files&&delete r.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,r?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:t}).then(async()=>{this.files&&delete this.files[e],Oe(Gt,this.getWorkspace())})}async copyTo(e){for(const t of await this.listChildren()){const r=[e,t.getName()].join("/");await t.copyTo(r)}}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(r){throw r.name==="NotAllowedError"||r.message?.includes("not allowed")||r.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):r}await t.listChildren(!0),Oe(Gt,this.getWorkspace())}}}class Kl{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&Oe(Vn,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await Ot.getObject("workspace_data");if(!e)return;const t=this.contributions.get(e.type);if(!t){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(t.restore){const r=await t.restore(e.data);return r&&(this.currentType=e.type),r}}catch(r){console.error(`Failed to restore workspace of type ${e.type}:`,r)}}async connectWorkspace(e){const t=Array.from(this.contributions.values()).find(s=>s.canHandle(e));if(!t)throw new Error("No workspace contribution can handle this input");const r=await t.connect(e),i=t.persist?await t.persist(r):e,a={type:t.type,data:i};return await Ot.persistObject("workspace_data",a),this.currentType=t.type,this.workspace=Promise.resolve(r),Oe(Vn,r),r}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await Ot.persistObject("workspace_data",null),await Ot.persistObject("workspace",null)}}const Je=new Kl;bt.put("workspaceService",Je);Je.registerContribution({type:"filesystem",name:"Local File System",canHandle(n){return n&&"kind"in n&&n.kind==="directory"},async connect(n){return new nn(n)},async restore(n){if(n&&"kind"in n&&n.kind==="directory")return new nn(n,void 0)},async persist(n){return n instanceof nn?n.getHandle():null}});const Hn=(n,e)=>{const t=new Jt.subtle.Watcher(async()=>{try{await 0,e(n.get())}finally{t.watch(n)}});return t.watch(n),n.get(),()=>{t.unwatch(n)}};Object.defineProperty(gs.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class Or extends Fl(gs){constructor(){super(...arguments),this.signalCleanups=new Set,this.eventSubscriptions=new Set}connectedCallback(){super.connectedCallback(),this.doBeforeUI()}disconnectedCallback(){super.disconnectedCallback(),this.eventSubscriptions.forEach(e=>zo(e)),this.eventSubscriptions.clear(),this.signalCleanups.forEach(e=>e()),this.signalCleanups.clear()}subscribe(e,t){const r=He(e,t.bind(this));this.eventSubscriptions.add(r)}showInfo(e){xt(e)}showError(e){Ce(e)}nobubble(e){return t=>{t.stopPropagation(),e.bind(this)(t)}}command(e,t={}){return()=>{this.executeCommand(e,t)}}executeCommand(e,t){const r=ye.createExecutionContext(t);ye.execute(e,r)}watch(e,t){const r=Hn(e,t.bind(this));this.signalCleanups.add(r)}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}const Yl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Zl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-22%200%20300%20300'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M10.5838307,156.409656%20L10.5838307,156.196646%20L10.5838307,123.657627%20L17.7200527,123.657627%20L17.7200527,158.912657%20C18.0516208,161.753926%2017.8075656,164.63288%2017.0023629,167.377784%20C16.19722,170.122687%2014.8474392,172.677251%2013.0335946,174.88924%20C9.6624625,177.797086%205.34298451,179.369568%200.891381719,179.309391%20L0.145805038,173.983903%20C3.01718628,173.985518%205.78730255,172.922981%207.92105685,171.001585%20C9.83826599,168.76489%2010.5838307,165.729334%2010.5838307,156.409656%20Z%20M63.8037763,152.209035%20C63.8037763,156.203166%2063.8037763,159.771277%2064.1232613,162.860071%20L57.7859014,162.860071%20L57.3598815,156.522711%20C56.0343268,158.765028%2054.1386519,160.616318%2051.8656486,161.888456%20C49.5925854,163.160593%2047.0232464,163.808237%2044.4187946,163.765408%20C38.2412071,163.765408%2030.8919752,160.410366%2030.8919752,146.723715%20L30.8919752,123.983721%20L38.0281972,123.983721%20L38.0281972,145.285823%20C38.0281972,152.688352%2040.3181887,157.641058%2046.7620834,157.641058%20C48.0878176,157.655354%2049.4030239,157.404719%2050.6306575,156.903927%20C51.8582911,156.403136%2052.9735276,155.662296%2053.9110465,154.724777%20C54.8485056,153.787318%2055.5894046,152.672022%2056.0901963,151.444448%20C56.5909282,150.216815%2056.8415633,148.901549%2056.8273268,147.575814%20L56.8273268,123.717444%20L63.9634889,123.717444%20L63.9634889,151.996025%20L63.8037763,152.209035%20Z%20M77.330762,136.653806%20C77.330762,131.70104%2077.330762,127.653648%2077.0112304,123.979032%20L83.4018876,123.979032%20L83.7213726,130.635931%20C85.1452074,128.23088%2087.1949721,126.257257%2089.6521533,124.925482%20C92.1093944,123.593709%2094.8819333,122.953703%2097.6742718,123.073695%20C107.153723,123.073695%20114.289945,131.008713%20114.289945,142.831393%20C114.289945,156.784292%20105.715831,163.707504%2096.4493898,163.707504%20C94.0776877,163.813321%2091.7187865,163.305232%2089.6009496,162.232346%20C87.4831127,161.159401%2085.6780613,159.558028%2084.3604623,157.583154%20L84.3604623,178.885226%20L77.330762,178.885226%20L77.330762,136.813578%20L77.330762,136.653806%20Z%20M84.3604623,147.038594%20C84.3797833,148.004885%2084.4867369,148.967408%2084.6800071,149.914378%20C85.2842232,152.279021%2086.6597255,154.374666%2088.5887785,155.869683%20C90.5178913,157.364761%2092.8904309,158.173852%2095.3310427,158.168947%20C102.840047,158.168947%20107.260258,152.044597%20107.260258,143.150938%20C107.260258,135.375686%20103.106354,128.718758%2095.59735,128.718758%20C92.6257387,128.962101%2089.844945,130.280974%2087.7762781,132.428062%20C85.7076111,134.575149%2084.4931374,137.403079%2084.3604623,140.381689%20L84.3604623,147.038594%20Z%20M127.004503,123.94359%20L135.578617,146.896647%20C136.483954,149.452886%20137.442529,152.54168%20138.081618,154.831671%20C138.827183,152.488442%20139.625985,149.506124%20140.58462,146.736875%20L148.359872,123.94359%20L155.868876,123.94359%20L145.21784,151.636343%20C139.892293,164.950152%20136.643726,171.820127%20131.744199,175.97403%20C129.27643,178.228071%20126.267791,179.805756%20123.010354,180.553953%20L121.252929,174.589376%20C123.530581,173.840999%20125.645092,172.666304%20127.48382,171.127799%20C130.081872,169.010501%20132.14366,166.310102%20133.501635,163.246013%20C133.792288,162.715372%20133.990404,162.139031%20134.087428,161.541814%20C134.026892,160.899135%20133.865146,160.270094%20133.60817,159.677902%20L119.122716,123.837079%20L126.897968,123.837079%20L127.004503,123.94359%20Z%20M174.813541,112.770851%20L174.813541,123.954441%20L185.038557,123.954441%20L185.038557,129.279989%20L174.813541,129.279989%20L174.813541,150.262575%20C174.813541,155.055568%20176.198196,157.824817%20180.139089,157.824817%20C181.538758,157.847727%20182.935316,157.686579%20184.292992,157.345559%20L184.612537,162.671047%20C182.57671,163.376355%20180.428486,163.701283%20178.275118,163.629682%20C176.849069,163.718929%20175.420569,163.498622%20174.087657,162.983833%20C172.754744,162.469044%20171.549004,161.671976%20170.553103,160.647363%20C168.383883,157.745977%20167.394359,154.130491%20167.783854,150.528882%20L167.783854,129.226751%20L161.712742,129.226751%20L161.712742,123.901204%20L167.890329,123.901204%20L167.890329,114.421764%20L174.813541,112.770851%20Z%20M198.184399,144.647511%20C198.03988,146.453639%20198.289199,148.269577%20198.915189,149.969888%20C199.541179,151.670199%20200.528884,153.214267%20201.810114,154.495437%20C203.091285,155.776667%20204.635352,156.764373%20206.335664,157.390363%20C208.035975,158.016352%20209.851913,158.265672%20211.658041,158.121153%20C215.311153,158.202863%20218.940457,157.513288%20222.309077,156.097409%20L223.533958,161.422956%20C219.400274,163.12572%20214.955358,163.942168%20210.486396,163.819423%20C207.881107,163.997798%20205.268101,163.61054%20202.826592,162.684147%20C200.385023,161.757814%20198.172795,160.3143%20196.341489,158.452721%20C194.51022,156.591082%20193.103284,154.355345%20192.217196,151.898941%20C191.331104,149.442478%20190.986827,146.82349%20191.207978,144.221491%20C191.207978,132.505346%20198.184399,123.238905%20209.581059,123.238905%20C222.362314,123.238905%20225.557643,134.422495%20225.557643,141.558717%20C225.625954,142.658281%20225.625954,143.761016%20225.557643,144.860581%20L198.024687,144.860581%20L198.184399,144.647511%20Z%20M219.06051,139.322023%20C219.266043,137.898188%20219.163995,136.446897%20218.761184,135.065892%20C218.358433,133.684886%20217.664311,132.406228%20216.725656,131.316115%20C215.786941,130.226062%20214.625525,129.349856%20213.31959,128.746561%20C212.013656,128.143278%20210.59353,127.826939%20209.155039,127.818864%20C206.228949,128.030665%20203.487515,129.327603%20201.467959,131.455549%20C199.448402,133.583436%20198.296377,136.388874%20198.237697,139.322023%20L219.06051,139.322023%20Z%20M236.385366,136.053478%20C236.385366,131.473555%20236.385366,127.532637%20236.065834,123.911277%20L242.456492,123.911277%20L242.456492,131.526792%20L242.775977,131.526792%20C243.446769,129.176325%20244.83268,127.093027%20246.741335,125.566097%20C248.64999,124.039161%20250.986699,123.144369%20253.427072,123.005938%20C254.098762,122.917777%20254.779066,122.917777%20255.450756,123.005938%20L255.450756,129.66288%20C254.63688,129.568608%20253.814868,129.568608%20253.000992,129.66288%20C250.58353,129.756495%20248.282771,130.726973%20246.528505,132.393068%20C244.774238,134.059104%20243.686458,136.306745%20243.468304,138.716252%20C243.269171,139.805946%20243.162278,140.910475%20243.148819,142.018055%20L243.148819,162.734394%20L236.11909,162.734394%20L236.11909,136.106715%20L236.385366,136.053478%20Z'%20fill='%234E4E4E'%3e%3c/path%3e%3cpath%20d='M233.257943,16.9621357%20C233.476636,20.5398773%20232.625434,24.1017075%20230.812666,27.1939108%20C228.999898,30.286174%20226.307754,32.7687777%20223.079047,34.3255867%20C219.85034,35.8823358%20216.231324,36.4427655%20212.683013,35.9355136%20C209.134702,35.4282017%20205.817704,33.8761781%20203.154559,31.4770796%20C200.491421,29.0780409%20198.602703,25.9404959%20197.729013,22.4642047%20C196.855323,18.9879135%20197.036209,15.330196%20198.248625,11.9570899%20C199.461041,8.5839838%20201.650109,5.64808944%20204.536953,3.52346926%20C207.423803,1.39884909%20210.877782,0.181657262%20214.458814,0.0269503701%20C216.806708,-0.10224713%20219.156996,0.233972409%20221.374429,1.01627461%20C223.591922,1.79857323%20225.632893,3.01152758%20227.379981,4.58537259%20C229.12701,6.15922358%20230.54576,8.06291398%20231.554522,10.1869719%20C232.563283,12.3110298%20233.142196,14.6135829%20233.257943,16.9621357%20Z'%20fill='%23767677'%3e%3c/path%3e%3cpath%20d='M127.952969,225.540984%20C80.0236372,225.540984%2037.8984531,208.339518%2016.1170646,182.936721%20C24.5683135,205.78944%2039.8176362,225.504615%2059.8124569,239.428562%20C79.8070981,253.352629%20103.588124,260.816651%20127.952969,260.816651%20C152.318411,260.816651%20176.098839,253.352629%20196.094019,239.428562%20C216.0886,225.504615%20231.337863,205.78944%20239.789471,182.936721%20C218.061379,208.339518%20176.095848,225.540984%20127.952969,225.540984%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M127.952969,60.3543133%20C175.882898,60.3543133%20218.008142,77.5557785%20239.789471,102.958396%20C231.337863,80.1058563%20216.0886,60.3906823%20196.094019,46.4667348%20C176.098839,32.5427873%20152.318411,25.0784666%20127.952969,25.0784666%20C103.588124,25.0784666%2079.8070981,32.5427873%2059.8124569,46.4667348%20C39.8176362,60.3906823%2024.5683135,80.1058563%2016.1170646,102.958396%20C37.8984531,77.502541%2079.8106871,60.3543133%20127.952969,60.3543133%20Z'%20fill='%23F37726'%3e%3c/path%3e%3cpath%20d='M61.9716874,274.975202%20C62.2528294,279.48161%2061.186045,283.969713%2058.9072992,287.867658%20C56.6284936,291.765602%2053.2409116,294.896926%2049.1761363,296.862707%20C45.1113611,298.828488%2040.5533909,299.539717%2036.0829934,298.905772%20C31.6125362,298.271767%2027.4320141,296.321359%2024.0740419,293.30297%20C20.7160636,290.284582%2018.3326671,286.334835%2017.2274978,281.957035%20C16.1223339,277.579176%2016.3454363,272.971497%2017.868382,268.720869%20C19.3913284,264.470301%2022.1451683,260.769335%2025.7790187,258.089483%20C29.4129289,255.40962%2033.7623156,253.872201%2038.2730898,253.673106%20C41.2280121,253.515051%2044.1851476,253.940738%2046.9755719,254.925846%20C49.7659364,255.910962%2052.3349165,257.436187%2054.5356604,259.414404%20C56.7364042,261.392633%2058.5259031,263.785032%2059.8017495,266.455044%20C61.0776558,269.124996%2061.8150255,272.02022%2061.9716874,274.975202%20Z'%20fill='%239E9E9E'%3e%3c/path%3e%3cpath%20d='M21.5641016,54.5650606%20C18.9814831,54.6363631%2016.4354131,53.9424806%2014.2460944,52.570687%20C12.0567996,51.1988336%2010.3219858,49.2102622%209.25983722,46.8551295%20C8.19768984,44.499937%207.85562972,41.8832824%208.276674,39.3342215%20C8.69771827,36.7851606%209.86306631,34.4174662%2011.6261678,32.5289814%20C13.3892752,30.6404727%2015.6714246,29.3154324%2018.1856119,28.7204982%20C20.6997394,28.1255646%2023.3336813,28.2873008%2025.7562282,29.1853653%20C28.1787154,30.0834346%2030.2815979,31.6777312%2031.800363,33.767765%20C33.3191879,35.8578106%2034.1861222,38.3502842%2034.2921188,40.9317063%20C34.3930308,44.4222341%2033.113057,47.8117302%2030.7300493,50.3642007%20C28.3470417,52.916731%2025.0533134,54.4262842%2021.5641016,54.5650606%20Z'%20fill='%23616262'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Jl="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";Qo("k",{resolver:n=>new URL(Object.assign({"../icons/js.svg":Yl,"../icons/jupyter.svg":Zl,"../icons/python.svg":Jl})[`../icons/${n}.svg`],import.meta.url).href,mutator:n=>{n.setAttribute("fill","currentColor"),n.setAttribute("stroke","currentColor")}});var Ql=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,Dr=(n,e,t,r)=>{for(var i=r>1?void 0:r?ec(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&Ql(e,t,i),i};let An=class extends Or{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const n=this.name.trim().split(/ +/),e=n.pop(),t=n.pop();return S`
            <wa-icon library="${t||Ke}" variant="${this.variant||Ke}"
                         family="${this.family||Ke}" name=${e} label="${this.label||this.name||Ke}"></wa-icon>`}};An.styles=tt`
        :host {
            display: contents;
        }
    `;Dr([ce()],An.prototype,"name",2);Dr([ce()],An.prototype,"family",2);Dr([ce()],An.prototype,"variant",2);Dr([ce()],An.prototype,"label",2);An=Dr([qe("k-icon")],An);function aa(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var _n=aa();function Ts(n){_n=n}var Er={exec:()=>null};function De(n,e=""){let t=typeof n=="string"?n:n.source,r={replace:(i,a)=>{let s=typeof a=="string"?a:a.source;return s=s.replace(wt.caret,"$1"),t=t.replace(i,s),r},getRegex:()=>new RegExp(t,e)};return r}var tc=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),wt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},nc=/^(?:[ \t]*(?:\n|$))+/,rc=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ic=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Rr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ac=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,sa=/(?:[*+-]|\d{1,9}[.)])/,Ss=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_s=De(Ss).replace(/bull/g,sa).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),sc=De(Ss).replace(/bull/g,sa).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),oa=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,oc=/^[^\n]+/,la=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,lc=De(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",la).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),cc=De(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,sa).getRegex(),yi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ca=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,uc=De("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ca).replace("tag",yi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),$s=De(oa).replace("hr",Rr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex(),dc=De(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",$s).getRegex(),ua={blockquote:dc,code:rc,def:lc,fences:ic,heading:ac,hr:Rr,html:uc,lheading:_s,list:cc,newline:nc,paragraph:$s,table:Er,text:oc},Ha=De("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Rr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex(),pc={...ua,lheading:sc,table:Ha,paragraph:De(oa).replace("hr",Rr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ha).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex()},hc={...ua,html:De(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ca).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Er,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:De(oa).replace("hr",Rr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",_s).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},fc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,gc=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Os=/^( {2,}|\\)\n(?!\s*$)/,mc=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,bi=/[\p{P}\p{S}]/u,da=/[\s\p{P}\p{S}]/u,Ds=/[^\s\p{P}\p{S}]/u,yc=De(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,da).getRegex(),Rs=/(?!~)[\p{P}\p{S}]/u,bc=/(?!~)[\s\p{P}\p{S}]/u,wc=/(?:[^\s\p{P}\p{S}]|~)/u,vc=De(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",tc?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Is=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ec=De(Is,"u").replace(/punct/g,bi).getRegex(),kc=De(Is,"u").replace(/punct/g,Rs).getRegex(),Ls="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Cc=De(Ls,"gu").replace(/notPunctSpace/g,Ds).replace(/punctSpace/g,da).replace(/punct/g,bi).getRegex(),xc=De(Ls,"gu").replace(/notPunctSpace/g,wc).replace(/punctSpace/g,bc).replace(/punct/g,Rs).getRegex(),Ac=De("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ds).replace(/punctSpace/g,da).replace(/punct/g,bi).getRegex(),Tc=De(/\\(punct)/,"gu").replace(/punct/g,bi).getRegex(),Sc=De(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_c=De(ca).replace("(?:-->|$)","-->").getRegex(),$c=De("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_c).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ti=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Oc=De(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ti).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ps=De(/^!?\[(label)\]\[(ref)\]/).replace("label",ti).replace("ref",la).getRegex(),Ns=De(/^!?\[(ref)\](?:\[\])?/).replace("ref",la).getRegex(),Dc=De("reflink|nolink(?!\\()","g").replace("reflink",Ps).replace("nolink",Ns).getRegex(),Xa=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,pa={_backpedal:Er,anyPunctuation:Tc,autolink:Sc,blockSkip:vc,br:Os,code:gc,del:Er,emStrongLDelim:Ec,emStrongRDelimAst:Cc,emStrongRDelimUnd:Ac,escape:fc,link:Oc,nolink:Ns,punctuation:yc,reflink:Ps,reflinkSearch:Dc,tag:$c,text:mc,url:Er},Rc={...pa,link:De(/^!?\[(label)\]\((.*?)\)/).replace("label",ti).getRegex(),reflink:De(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ti).getRegex()},Bi={...pa,emStrongRDelimAst:xc,emStrongLDelim:kc,url:De(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Xa).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:De(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Xa).getRegex()},Ic={...Bi,br:De(Os).replace("{2,}","*").getRegex(),text:De(Bi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Vr={normal:ua,gfm:pc,pedantic:hc},lr={normal:pa,gfm:Bi,breaks:Ic,pedantic:Rc},Lc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ka=n=>Lc[n];function Xt(n,e){if(e){if(wt.escapeTest.test(n))return n.replace(wt.escapeReplace,Ka)}else if(wt.escapeTestNoEncode.test(n))return n.replace(wt.escapeReplaceNoEncode,Ka);return n}function Ya(n){try{n=encodeURI(n).replace(wt.percentDecode,"%")}catch{return null}return n}function Za(n,e){let t=n.replace(wt.findPipe,(a,s,l)=>{let u=!1,h=s;for(;--h>=0&&l[h]==="\\";)u=!u;return u?"|":" |"}),r=t.split(wt.splitPipe),i=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(wt.slashPipe,"|");return r}function cr(n,e,t){let r=n.length;if(r===0)return"";let i=0;for(;i<r&&n.charAt(r-i-1)===e;)i++;return n.slice(0,r-i)}function Pc(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return t>0?-2:-1}function Ja(n,e,t,r,i){let a=e.href,s=e.title||null,l=n[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;let u={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:a,title:s,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,u}function Nc(n,e,t){let r=n.match(t.other.indentCodeCompensation);if(r===null)return e;let i=r[1];return e.split(`
`).map(a=>{let s=a.match(t.other.beginningSpace);if(s===null)return a;let[l]=s;return l.length>=i.length?a.slice(i.length):a}).join(`
`)}var ni=class{options;rules;lexer;constructor(n){this.options=n||_n}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:cr(t,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],r=Nc(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let r=cr(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:cr(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=cr(e[0],`
`).split(`
`),r="",i="",a=[];for(;t.length>0;){let s=!1,l=[],u;for(u=0;u<t.length;u++)if(this.rules.other.blockquoteStart.test(t[u]))l.push(t[u]),s=!0;else if(!s)l.push(t[u]);else break;t=t.slice(u);let h=l.join(`
`),T=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${h}`:h,i=i?`${i}
${T}`:T;let E=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(T,a,!0),this.lexer.state.top=E,t.length===0)break;let m=a.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let k=m,D=k.raw+`
`+t.join(`
`),B=this.blockquote(D);a[a.length-1]=B,r=r.substring(0,r.length-k.raw.length)+B.raw,i=i.substring(0,i.length-k.text.length)+B.text;break}else if(m?.type==="list"){let k=m,D=k.raw+`
`+t.join(`
`),B=this.list(D);a[a.length-1]=B,r=r.substring(0,r.length-m.raw.length)+B.raw,i=i.substring(0,i.length-k.raw.length)+B.raw,t=D.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:a,text:i}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),r=t.length>1,i={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");let a=this.rules.other.listItemRegex(t),s=!1;for(;n;){let u=!1,h="",T="";if(!(e=a.exec(n))||this.rules.block.hr.test(n))break;h=e[0],n=n.substring(h.length);let E=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,Y=>" ".repeat(3*Y.length)),m=n.split(`
`,1)[0],k=!E.trim(),D=0;if(this.options.pedantic?(D=2,T=E.trimStart()):k?D=e[1].length+1:(D=e[2].search(this.rules.other.nonSpaceChar),D=D>4?1:D,T=E.slice(D),D+=e[1].length),k&&this.rules.other.blankLine.test(m)&&(h+=m+`
`,n=n.substring(m.length+1),u=!0),!u){let Y=this.rules.other.nextBulletRegex(D),G=this.rules.other.hrRegex(D),$=this.rules.other.fencesBeginRegex(D),U=this.rules.other.headingBeginRegex(D),L=this.rules.other.htmlBeginRegex(D);for(;n;){let x=n.split(`
`,1)[0],P;if(m=x,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),P=m):P=m.replace(this.rules.other.tabCharGlobal,"    "),$.test(m)||U.test(m)||L.test(m)||Y.test(m)||G.test(m))break;if(P.search(this.rules.other.nonSpaceChar)>=D||!m.trim())T+=`
`+P.slice(D);else{if(k||E.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||$.test(E)||U.test(E)||G.test(E))break;T+=`
`+m}!k&&!m.trim()&&(k=!0),h+=x+`
`,n=n.substring(x.length+1),E=P.slice(D)}}i.loose||(s?i.loose=!0:this.rules.other.doubleBlankLine.test(h)&&(s=!0));let B=null,ee;this.options.gfm&&(B=this.rules.other.listIsTask.exec(T),B&&(ee=B[0]!=="[ ] ",T=T.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:h,task:!!B,checked:ee,loose:!1,text:T,tokens:[]}),i.raw+=h}let l=i.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u=0;u<i.items.length;u++)if(this.lexer.state.top=!1,i.items[u].tokens=this.lexer.blockTokens(i.items[u].text,[]),!i.loose){let h=i.items[u].tokens.filter(E=>E.type==="space"),T=h.length>0&&h.some(E=>this.rules.other.anyLine.test(E.raw));i.loose=T}if(i.loose)for(let u=0;u<i.items.length;u++)i.items[u].loose=!0;return i}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:i}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=Za(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(let s of r)this.rules.other.tableAlignRight.test(s)?a.align.push("right"):this.rules.other.tableAlignCenter.test(s)?a.align.push("center"):this.rules.other.tableAlignLeft.test(s)?a.align.push("left"):a.align.push(null);for(let s=0;s<t.length;s++)a.header.push({text:t[s],tokens:this.lexer.inline(t[s]),header:!0,align:a.align[s]});for(let s of i)a.rows.push(Za(s,a.header.length).map((l,u)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:a.align[u]})));return a}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let a=cr(t.slice(0,-1),"\\");if((t.length-a.length)%2===0)return}else{let a=Pc(e[2],"()");if(a===-2)return;if(a>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(r);a&&(r=a[1],i=a[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),Ja(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[r.toLowerCase()];if(!i){let a=t[0].charAt(0);return{type:"text",raw:a,text:a}}return Ja(t,i,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!(!r||r[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!t||this.rules.inline.punctuation.exec(t))){let i=[...r[0]].length-1,a,s,l=i,u=0,h=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*n.length+i);(r=h.exec(e))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(s=[...a].length,r[3]||r[4]){l+=s;continue}else if((r[5]||r[6])&&i%3&&!((i+s)%3)){u+=s;continue}if(l-=s,l>0)continue;s=Math.min(s,s+l+u);let T=[...r[0]][0].length,E=n.slice(0,i+r.index+T+s);if(Math.min(i,s)%2){let k=E.slice(1,-1);return{type:"em",raw:E,text:k,tokens:this.lexer.inlineTokens(k)}}let m=E.slice(2,-2);return{type:"strong",raw:E,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){let e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=e[1],r="mailto:"+t):(t=e[1],r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,r;if(e[2]==="@")t=e[0],r="mailto:"+t;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);t=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Ft=class ji{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||_n,this.options.tokenizer=this.options.tokenizer||new ni,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:wt,block:Vr.normal,inline:lr.normal};this.options.pedantic?(t.block=Vr.pedantic,t.inline=lr.pedantic):this.options.gfm&&(t.block=Vr.gfm,this.options.breaks?t.inline=lr.breaks:t.inline=lr.gfm),this.tokenizer.rules=t}static get rules(){return{block:Vr,inline:lr}}static lex(e,t){return new ji(t).lex(e)}static lexInline(e,t){return new ji(t).inlineTokens(e)}lex(e){e=e.replace(wt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(wt.tabCharGlobal,"    ").replace(wt.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(s=>(i=s.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let s=t.at(-1);i.raw.length===1&&s!==void 0?s.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let s=t.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.at(-1).src=s.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let s=t.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let s=1/0,l=e.slice(1),u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},l),typeof u=="number"&&u>=0&&(s=Math.min(s,u))}),s<1/0&&s>=0&&(a=e.substring(0,s+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let s=t.at(-1);r&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):t.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let s=t.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):t.push(i);continue}if(e){let s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,i=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)a=i[2]?i[2].length:0,r=r.slice(0,i.index+a)+"["+"a".repeat(i[0].length-a-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let s=!1,l="";for(;e;){s||(l=""),s=!1;let u;if(this.options.extensions?.inline?.some(T=>(u=T.call({lexer:this},e,t))?(e=e.substring(u.raw.length),t.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);let T=t.at(-1);u.type==="text"&&T?.type==="text"?(T.raw+=u.raw,T.text+=u.text):t.push(u);continue}if(u=this.tokenizer.emStrong(e,r,l)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.del(e)){e=e.substring(u.raw.length),t.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),t.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),t.push(u);continue}let h=e;if(this.options.extensions?.startInline){let T=1/0,E=e.slice(1),m;this.options.extensions.startInline.forEach(k=>{m=k.call({lexer:this},E),typeof m=="number"&&m>=0&&(T=Math.min(T,m))}),T<1/0&&T>=0&&(h=e.substring(0,T+1))}if(u=this.tokenizer.inlineText(h)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(l=u.raw.slice(-1)),s=!0;let T=t.at(-1);T?.type==="text"?(T.raw+=u.raw,T.text+=u.text):t.push(u);continue}if(e){let T="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(T);break}else throw new Error(T)}}return t}},ri=class{options;parser;constructor(n){this.options=n||_n}space(n){return""}code({text:n,lang:e,escaped:t}){let r=(e||"").match(wt.notSpaceStart)?.[0],i=n.replace(wt.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Xt(r)+'">'+(t?i:Xt(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:Xt(i,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,r="";for(let s=0;s<n.items.length;s++){let l=n.items[s];r+=this.listitem(l)}let i=e?"ol":"ul",a=e&&t!==1?' start="'+t+'"':"";return"<"+i+a+`>
`+r+"</"+i+`>
`}listitem(n){let e="";if(n.task){let t=this.checkbox({checked:!!n.checked});n.loose?n.tokens[0]?.type==="paragraph"?(n.tokens[0].text=t+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=t+" "+Xt(n.tokens[0].tokens[0].text),n.tokens[0].tokens[0].escaped=!0)):n.tokens.unshift({type:"text",raw:t+" ",text:t+" ",escaped:!0}):e+=t+" "}return e+=this.parser.parse(n.tokens,!!n.loose),`<li>${e}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let i=0;i<n.header.length;i++)t+=this.tablecell(n.header[i]);e+=this.tablerow({text:t});let r="";for(let i=0;i<n.rows.length;i++){let a=n.rows[i];t="";for(let s=0;s<a.length;s++)t+=this.tablecell(a[s]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Xt(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let r=this.parser.parseInline(t),i=Ya(n);if(i===null)return r;n=i;let a='<a href="'+n+'"';return e&&(a+=' title="'+Xt(e)+'"'),a+=">"+r+"</a>",a}image({href:n,title:e,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let i=Ya(n);if(i===null)return Xt(t);n=i;let a=`<img src="${n}" alt="${t}"`;return e&&(a+=` title="${Xt(e)}"`),a+=">",a}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Xt(n.text)}},ha=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},Wt=class Vi{options;renderer;textRenderer;constructor(e){this.options=e||_n,this.options.renderer=this.options.renderer||new ri,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ha}static parse(e,t){return new Vi(t).parse(e)}static parseInline(e,t){return new Vi(t).parseInline(e)}parse(e,t=!0){let r="";for(let i=0;i<e.length;i++){let a=e[i];if(this.options.extensions?.renderers?.[a.type]){let l=a,u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){r+=u||"";continue}}let s=a;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"def":{r+=this.renderer.def(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let l=s,u=this.renderer.text(l);for(;i+1<e.length&&e[i+1].type==="text";)l=e[++i],u+=`
`+this.renderer.text(l);t?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u,escaped:!0}]}):r+=u;continue}default:{let l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}parseInline(e,t=this.renderer){let r="";for(let i=0;i<e.length;i++){let a=e[i];if(this.options.extensions?.renderers?.[a.type]){let l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=l||"";continue}}let s=a;switch(s.type){case"escape":{r+=t.text(s);break}case"html":{r+=t.html(s);break}case"link":{r+=t.link(s);break}case"image":{r+=t.image(s);break}case"strong":{r+=t.strong(s);break}case"em":{r+=t.em(s);break}case"codespan":{r+=t.codespan(s);break}case"br":{r+=t.br(s);break}case"del":{r+=t.del(s);break}case"text":{r+=t.text(s);break}default:{let l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}},mr=class{options;block;constructor(n){this.options=n||_n}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?Ft.lex:Ft.lexInline}provideParser(){return this.block?Wt.parse:Wt.parseInline}},Mc=class{defaults=aa();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Wt;Renderer=ri;TextRenderer=ha;Lexer=Ft;Tokenizer=ni;Hooks=mr;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(let r of n)switch(t=t.concat(e.call(this,r)),r.type){case"table":{let i=r;for(let a of i.header)t=t.concat(this.walkTokens(a.tokens,e));for(let a of i.rows)for(let s of a)t=t.concat(this.walkTokens(s.tokens,e));break}case"list":{let i=r;t=t.concat(this.walkTokens(i.items,e));break}default:{let i=r;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{let s=i[a].flat(1/0);t=t.concat(this.walkTokens(s,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let a=e.renderers[i.name];a?e.renderers[i.name]=function(...s){let l=i.renderer.apply(this,s);return l===!1&&(l=a.apply(this,s)),l}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=e[i.level];a?a.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),t.renderer){let i=this.defaults.renderer||new ri(this.defaults);for(let a in t.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let s=a,l=t.renderer[s],u=i[s];i[s]=(...h)=>{let T=l.apply(i,h);return T===!1&&(T=u.apply(i,h)),T||""}}r.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new ni(this.defaults);for(let a in t.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let s=a,l=t.tokenizer[s],u=i[s];i[s]=(...h)=>{let T=l.apply(i,h);return T===!1&&(T=u.apply(i,h)),T}}r.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new mr;for(let a in t.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let s=a,l=t.hooks[s],u=i[s];mr.passThroughHooks.has(a)?i[s]=h=>{if(this.defaults.async&&mr.passThroughHooksRespectAsync.has(a))return(async()=>{let E=await l.call(i,h);return u.call(i,E)})();let T=l.call(i,h);return u.call(i,T)}:i[s]=(...h)=>{if(this.defaults.async)return(async()=>{let E=await l.apply(i,h);return E===!1&&(E=await u.apply(i,h)),E})();let T=l.apply(i,h);return T===!1&&(T=u.apply(i,h)),T}}r.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,a=t.walkTokens;r.walkTokens=function(s){let l=[];return l.push(a.call(this,s)),i&&(l=l.concat(i.call(this,s))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return Ft.lex(n,e??this.defaults)}parser(n,e){return Wt.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let r={...t},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=n),i.async)return(async()=>{let s=i.hooks?await i.hooks.preprocess(e):e,l=await(i.hooks?await i.hooks.provideLexer():n?Ft.lex:Ft.lexInline)(s,i),u=i.hooks?await i.hooks.processAllTokens(l):l;i.walkTokens&&await Promise.all(this.walkTokens(u,i.walkTokens));let h=await(i.hooks?await i.hooks.provideParser():n?Wt.parse:Wt.parseInline)(u,i);return i.hooks?await i.hooks.postprocess(h):h})().catch(a);try{i.hooks&&(e=i.hooks.preprocess(e));let s=(i.hooks?i.hooks.provideLexer():n?Ft.lex:Ft.lexInline)(e,i);i.hooks&&(s=i.hooks.processAllTokens(s)),i.walkTokens&&this.walkTokens(s,i.walkTokens);let l=(i.hooks?i.hooks.provideParser():n?Wt.parse:Wt.parseInline)(s,i);return i.hooks&&(l=i.hooks.postprocess(l)),l}catch(s){return a(s)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let r="<p>An error occurred:</p><pre>"+Xt(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}},Tn=new Mc;function Le(n,e){return Tn.parse(n,e)}Le.options=Le.setOptions=function(n){return Tn.setOptions(n),Le.defaults=Tn.defaults,Ts(Le.defaults),Le};Le.getDefaults=aa;Le.defaults=_n;Le.use=function(...n){return Tn.use(...n),Le.defaults=Tn.defaults,Ts(Le.defaults),Le};Le.walkTokens=function(n,e){return Tn.walkTokens(n,e)};Le.parseInline=Tn.parseInline;Le.Parser=Wt;Le.parser=Wt.parse;Le.Renderer=ri;Le.TextRenderer=ha;Le.Lexer=Ft;Le.lexer=Ft.lex;Le.Tokenizer=ni;Le.Hooks=mr;Le.parse=Le;Le.options;Le.setOptions;Le.use;Le.walkTokens;Le.parseInline;Wt.parse;Ft.lex;class ln extends Or{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let t=this;for(;t&&t!==document.body&&t!==document.documentElement;){const r=t.getAttribute("id");if(r){e.unshift(`#${r}`);break}const i=t.tagName.toLowerCase(),a=t.parentElement;if(!a)break;const l=Array.from(a.children).filter(u=>u.tagName.toLowerCase()===i).indexOf(t);l>=0?e.unshift(`${i}:${l}`):e.unshift(i),t=a}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),t=this.getAttribute("id");if(t){this.settingsKey=`${e}:${t}`;return}const r=this.buildDOMTreePath();r&&(this.settingsKey=`${e}:${r}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await ze.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await ze.setDialogSetting(this.settingsKey,e)}}const Ms=class extends ln{dispose(){}getResult(){}renderMessage(e,t=!1){if(t){const r=Le.parse(e,{async:!1});return S`<div class="dialog-message" style="white-space: normal;">${_r(r)}</div>`}return S`<div class="dialog-message" style="white-space: pre-line;">${e}</div>`}};Ms.styles=[tt`
            .dialog-message {
                margin-bottom: 0.5rem;
                color: var(--wa-color-text-normal);
            }
        `];let $n=Ms;const tn=Bt("DialogService"),Xn="dialogs",wi={id:"ok",label:"OK",variant:"primary"},Us={id:"cancel",label:"Cancel",variant:"default"},Uc={id:"close",label:"Close",variant:"default"};let ur=null;function zc(){return ur||(ur=document.createElement("div"),ur.id="global-dialog-container",document.body.appendChild(ur)),ur}class Fc{constructor(){this.contributions=new Map,this.loadContributions(),He(jt,e=>{e.target===Xn&&this.loadContributions()})}loadContributions(){const e=Q.getContributions(Xn);this.contributions.clear();for(const t of e){if(!t.id){tn.warn("Dialog contribution missing id, skipping");continue}if(!t.component){tn.warn(`Dialog contribution "${t.id}" has no component function, skipping`);continue}if(!t.onButton){tn.warn(`Dialog contribution "${t.id}" has no onButton callback, skipping`);continue}this.contributions.set(t.id,t),tn.debug(`Loaded dialog contribution: ${t.id}`)}tn.info(`Loaded ${this.contributions.size} dialog contributions`)}async open(e,t){const r=this.contributions.get(e);if(!r)throw tn.error(`Dialog "${e}" not found`),new Error(`Dialog "${e}" not found`);return new Promise(i=>{const a=zc();let s=!0,l=null;const u=async()=>{if(s){if(s=!1,l)try{await l.dispose()}catch(m){const k=m instanceof Error?m.message:String(m);tn.error(`Error disposing dialog content for "${e}": ${k}`)}try{const m=l?l.getResult():void 0;await r.onButton("close",m,t)}catch(m){const k=m instanceof Error?m.message:String(m);tn.error(`Error executing close callback for dialog "${e}": ${k}`)}qt(S``,a),i()}},h=async m=>{try{const k=l?l.getResult():void 0;await r.onButton(m,k,t)!==!1&&u()}catch(k){const D=k instanceof Error?k.message:String(k);tn.error(`Error executing button callback for dialog "${e}": ${D}`),u()}},T=r.buttons&&r.buttons.length>0?r.buttons:[wi],E=S`
                <wa-dialog label="${r.label||e}" open @wa-request-close=${u}>
                    <style>
                        .dialog-service-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 400px;
                        }
                        
                        .dialog-service-footer {
                            display: flex;
                            gap: 0.5rem;
                            justify-content: flex-end;
                            margin-top: 1rem;
                            padding-top: 1rem;
                            border-top: 1px solid var(--wa-color-neutral-20);
                        }

                        :host-context(.wa-light) .dialog-service-footer {
                            border-top-color: var(--wa-color-neutral-80);
                        }
                    </style>
                    
                    <div class="dialog-service-content" 
                         @dialog-ok=${()=>{const m=T.find(k=>k.id==="ok");m&&h(m.id)}}
                         @dialog-cancel=${()=>{const m=T.find(k=>k.id==="cancel");m?h(m.id):u()}}>
                        ${r.component(t)}
                        
                        <div class="dialog-service-footer">
                            ${T.map(m=>S`
                                <wa-button 
                                    variant="${m.variant||"default"}"
                                    ?disabled=${m.disabled}
                                    @click=${()=>h(m.id)}
                                >
                                    ${m.label}
                                </wa-button>
                            `)}
                        </div>
                    </div>
                </wa-dialog>
            `;qt(E,a),(async()=>{const m=Array.from(a.querySelectorAll("*"));for(const k of m)if(k instanceof $n){await k.updateComplete,l=k;break}})()})}getDialogIds(){return Array.from(this.contributions.keys())}hasDialog(e){return this.contributions.has(e)}}const fa=new Fc;bt.put("dialogService",fa);var Wc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Ir=(n,e,t,r)=>{for(var i=r>1?void 0:r?Gc(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&Wc(e,t,i),i};let Sn=class extends $n{constructor(){super(...arguments),this.message="",this.defaultValue="",this.markdown=!1,this.inputValue=""}async firstUpdated(n){super.firstUpdated(n),this.inputValue=this.defaultValue,await this.updateComplete;const e=this.shadowRoot?.querySelector("wa-input");if(e){const t=e.shadowRoot?.querySelector("input");t&&(t.focus(),t.select())}}getResult(){return this.inputValue}handleInput(n){this.inputValue=n.target.value}handleKeyDown(n){n.key==="Enter"?(n.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-ok",{bubbles:!0,composed:!0}))):n.key==="Escape"&&(n.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0})))}render(){return S`
            ${this.renderMessage(this.message,this.markdown)}
            <wa-input
                value="${this.inputValue}"
                @input=${this.handleInput}
                @keydown=${this.handleKeyDown}
                autofocus
            ></wa-input>
        `}};Sn.styles=[...$n.styles,tt`
            wa-input {
                width: 100%;
            }
        `];Ir([ce({type:String})],Sn.prototype,"message",2);Ir([ce({type:String,attribute:"default-value"})],Sn.prototype,"defaultValue",2);Ir([ce({type:Boolean})],Sn.prototype,"markdown",2);Ir([Be()],Sn.prototype,"inputValue",2);Sn=Ir([qe("k-prompt-dialog-content")],Sn);Q.registerContribution(Xn,{id:"prompt",label:"Input",buttons:[wi,Us],component:n=>n?S`
            <k-prompt-dialog-content 
                .message="${n.message}"
                .defaultValue="${n.defaultValue}"
                .markdown="${n.markdown}"
            ></k-prompt-dialog-content>
        `:S`<div>Error: No prompt dialog state</div>`,onButton:async(n,e,t)=>(t&&(n==="ok"?t.resolve(e||""):t.resolve(null)),!0)});async function vi(n,e="",t=!1){return new Promise(r=>{fa.open("prompt",{message:n,defaultValue:e,markdown:t,resolve:r})})}var qc=Object.defineProperty,Bc=Object.getOwnPropertyDescriptor,ga=(n,e,t,r)=>{for(var i=r>1?void 0:r?Bc(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&qc(e,t,i),i};let ii=class extends $n{constructor(){super(...arguments),this.message="",this.markdown=!1}render(){return S`
            ${this.renderMessage(this.message,this.markdown)}
        `}};ga([ce({type:String})],ii.prototype,"message",2);ga([ce({type:Boolean})],ii.prototype,"markdown",2);ii=ga([qe("k-info-dialog-content")],ii);Q.registerContribution(Xn,{id:"info",label:"Information",buttons:[wi],component:n=>n?S`
            <k-info-dialog-content 
                .message="${n.message}"
                .markdown="${n.markdown}"
            ></k-info-dialog-content>
        `:S`<div>Error: No info dialog state</div>`,onButton:async(n,e,t)=>(t&&t.resolve&&t.resolve(),!0)});var jc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,ma=(n,e,t,r)=>{for(var i=r>1?void 0:r?Vc(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&jc(e,t,i),i};let ai=class extends $n{constructor(){super(...arguments),this.message="",this.markdown=!1}getResult(){return!1}render(){return S`
            ${this.renderMessage(this.message,this.markdown)}
        `}};ma([ce({type:String})],ai.prototype,"message",2);ma([ce({type:Boolean})],ai.prototype,"markdown",2);ai=ma([qe("k-confirm-dialog-content")],ai);Q.registerContribution(Xn,{id:"confirm",label:"Confirm",buttons:[wi,Us],component:n=>n?S`
            <k-confirm-dialog-content 
                .message="${n.message}"
                .markdown="${n.markdown}"
            ></k-confirm-dialog-content>
        `:S`<div>Error: No confirm dialog state</div>`,onButton:async(n,e,t)=>(t&&(n==="ok"?t.resolve(!0):t.resolve(!1)),!0)});async function Lr(n,e=!1){return new Promise(t=>{fa.open("confirm",{message:n,markdown:e,resolve:t})})}var Hc=Object.defineProperty,Xc=Object.getOwnPropertyDescriptor,On=(n,e,t,r)=>{for(var i=r>1?void 0:r?Xc(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&Hc(e,t,i),i};let sn=class extends $n{constructor(){super(...arguments),this.title="",this.message="",this.markdown=!1,this.actions=[],this.currentTitle="",this.currentMessage="",this.dialogElement=null}async firstUpdated(n){super.firstUpdated(n),this.currentTitle=this.title,this.currentMessage=this.message,await this.updateComplete;const e=this.closest("wa-dialog");e&&(this.dialogElement=e,this.updateDialogLabel());const t=this.closest(".dialog-service-content");if(t){const r=t.parentElement?.querySelector(".dialog-service-footer");r&&(r.style.display="none")}}updated(n){super.updated(n),n.has("title")&&(this.currentTitle=this.title,this.updateDialogLabel()),n.has("message")&&(this.currentMessage=this.message)}updateDialogLabel(){this.dialogElement&&this.dialogElement.setAttribute("label",this.currentTitle)}updateDialog(n,e,t){this.currentTitle=n,this.currentMessage=e,this.actions=[...t],this.updateDialogLabel(),this.requestUpdate()}handleActionClick(n){n.callback()}handleClose(){this.closest("wa-dialog")&&this.resolveCallback&&this.resolveCallback()}render(){const n=this.actions.filter(t=>t.label!=="Close"),e=this.actions.filter(t=>t.label==="Close");return S`
            <div class="dialog-content">
                <wa-scroller class="dialog-scroller">
                    ${this.renderMessage(this.currentMessage,this.markdown)}
                </wa-scroller>
                
                <div class="dialog-actions">
                    <div class="dialog-actions-left">
                        ${n.map(t=>S`
                            <wa-button 
                                variant="${t.variant||"default"}"
                                ?disabled=${t.disabled}
                                @click=${()=>this.handleActionClick(t)}
                            >
                                ${t.label}
                            </wa-button>
                        `)}
                    </div>
                    <div class="dialog-actions-right">
                        ${e.map(t=>S`
                            <wa-button 
                                variant="${t.variant||"primary"}"
                                @click=${()=>{this.handleActionClick(t),this.handleClose()}}
                            >
                                ${t.label}
                            </wa-button>
                        `)}
                    </div>
                </div>
            </div>
        `}};sn.styles=[...$n.styles,tt`
            :host {
                display: block;
            }

            :host-context(.dialog-service-content) {
                padding: 0;
            }
            
            .dialog-content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                min-width: 400px;
                max-width: 600px;
                height: 500px;
                padding: 1rem;
            }
            
            .dialog-scroller {
                flex: 1;
                overflow-y: auto;
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
        `];On([ce({type:String})],sn.prototype,"title",2);On([ce({type:String})],sn.prototype,"message",2);On([ce({type:Boolean})],sn.prototype,"markdown",2);On([Be()],sn.prototype,"actions",2);On([Be()],sn.prototype,"currentTitle",2);On([Be()],sn.prototype,"currentMessage",2);sn=On([qe("k-navigable-info-dialog-content")],sn);Q.registerContribution(Xn,{id:"navigable-info",label:"Information",buttons:[Uc],component:n=>{if(!n)return S`<div>Error: No navigable info dialog state</div>`;const e=S`
            <k-navigable-info-dialog-content 
                .title="${n.title}"
                .message="${n.message}"
                .markdown="${n.markdown}"
            ></k-navigable-info-dialog-content>
        `;return(async()=>{const t=document.querySelector("k-navigable-info-dialog-content");t&&(await t.updateComplete,t.actions=n.actions||[],t.resolveCallback=n.resolve,n.updateDialogRef&&(n.updateDialogRef.current=(r,i,a)=>{t.updateDialog(r,i,a)}))})(),e},onButton:async(n,e,t)=>t&&n==="close"&&t.resolve?(t.resolve(),!0):!1});var Kc=Object.getOwnPropertyDescriptor,Yc=(n,e,t,r)=>{for(var i=r>1?void 0:r?Kc(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=s(i)||i);return i};let Hi=class extends ln{render(){return S`
            <slot></slot>
        `}};Hi.styles=tt`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Hi=Yc([qe("k-app")],Hi);var Zc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,Jn=(n,e,t,r)=>{for(var i=r>1?void 0:r?Jc(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&Zc(e,t,i),i};let mn=class extends ln{constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const n=this.getAttribute("id");n&&this.loadContributions(n),He(jt,e=>{if(!n)return;this.matchesTarget(n,e.target)&&(this.loadContributions(n),this.requestUpdate())})}matchesTarget(n,e){if(e===n)return!0;if(!n.includes(":"))return!1;const[t]=n.split(":");if(e===`${t}:*`)return!0;const r=e.split(":");if(r.length===2){const i=r[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&n.startsWith(`${t}:`)}return!1}loadContributions(n){const e=Q.getContributions(n);if(!n.includes(":")){this.contributions=e;return}const[t]=n.split(":"),r=`${t}:*`,i=Q.getContributions(r),a=[];if(this.isEditor){const s=["system.editors",".system.editors"];for(const l of s){const u=`${t}:${l}`,h=Q.getContributions(u);a.push(...h)}}this.contributions=[...i,...a,...e]}contributionCreator(n){if("command"in n){const e=n,t=!!e.showLabel;return S`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${t?e.label:""}
                </wa-button>
            `}else if("html"in n){const e=n.html;return e instanceof Function?e():_r(e)}else return S`<span>unknown contribution type: ${typeof n}</span>`}render(){const n=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return S`
            <div class="toolbar-items" style=${Fo({"justify-content":this.position})}>
                <slot name="start">
                    ${this.contributions.filter(e=>e.slot==="start").map(this.contributionCreator.bind(this))}
                </slot>
                ${n}
                ${this.contributions.filter(e=>e.slot===void 0).map(this.contributionCreator.bind(this))}
                <slot>
                </slot>
                <slot name="end">
                    ${this.contributions.filter(e=>e.slot==="end").map(this.contributionCreator.bind(this))}
                </slot>
            </div>
        `}};mn.styles=tt`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;Jn([ce()],mn.prototype,"position",2);Jn([ce({type:Boolean,attribute:"is-editor"})],mn.prototype,"isEditor",2);Jn([ce({attribute:!1})],mn.prototype,"partToolbarContent",2);Jn([ce({attribute:!1})],mn.prototype,"partToolbarRenderer",2);Jn([Be()],mn.prototype,"contributions",2);mn=Jn([qe("k-toolbar")],mn);var Qc=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,Qn=(n,e,t,r)=>{for(var i=r>1?void 0:r?eu(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&Qc(e,t,i),i};let yn=class extends ln{constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=Yt(),this.dropdownRef=Yt()}doBeforeUI(){const n=this.getAttribute("id");n&&this.loadContributions(n),He(jt,e=>{if(!n)return;this.matchesTarget(n,e.target)&&(this.loadContributions(n),this.requestUpdate())})}matchesTarget(n,e){if(e===n)return!0;if(!n.includes(":"))return!1;const[t]=n.split(":");if(e===`${t}:*`)return!0;const r=e.split(":");if(r.length===2){const i=r[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&n.startsWith(`${t}:`)}return!1}loadContributions(n){const e=Q.getContributions(n);if(!n.includes(":")){this.contributions=e;return}const[t]=n.split(":"),r=`${t}:*`,i=Q.getContributions(r),a=[];if(this.isEditor){const s=["system.editors",".system.editors"];for(const l of s){const u=`${t}:${l}`,h=Q.getContributions(u);a.push(...h)}}this.contributions=[...i,...a,...e]}getElementFromPoint(n,e){let t=document.elementFromPoint(n,e);if(!t)return null;for(;t;){const r=t.shadowRoot;if(r){const i=r.elementFromPoint(n,e);if(i&&i!==t){t=i;continue}}break}return t}triggerClickUnderCursor(n){const e=this.getElementFromPoint(n.clientX,n.clientY);if(e){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:n.clientX,clientY:n.clientY,screenX:n.screenX,screenY:n.screenY,button:0,buttons:0,detail:1,which:1});e.dispatchEvent(t)}}show(n,e){e&&this.triggerClickUnderCursor(e),this.position=n,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(n,e){return async()=>{this.executeCommand(n,e||{})}}renderContribution(n){if("command"in n){const e=n;return S`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?S`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in n){const e=n.html;return e instanceof Function?e():_r(e)}return Ke}render(){if(!this.isOpen)return Ke;const n=this.partContextMenuRenderer?this.partContextMenuRenderer():Ke;return S`
            <wa-dropdown 
                ${Zt(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${Zt(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${n}
                ${this.contributions.map(e=>this.renderContribution(e))}
            </wa-dropdown>
        `}};yn.styles=tt`
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
    `;Qn([ce({type:Boolean,attribute:"is-editor"})],yn.prototype,"isEditor",2);Qn([ce({attribute:!1})],yn.prototype,"partContextMenuRenderer",2);Qn([Be()],yn.prototype,"contributions",2);Qn([Be()],yn.prototype,"isOpen",2);Qn([Be()],yn.prototype,"position",2);yn=Qn([qe("k-contextmenu")],yn);class ya extends ln{}var tu=Object.defineProperty,nu=(n,e,t,r)=>{for(var i=void 0,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=s(e,t,i)||i);return i&&tu(e,t,i),i};class mt extends ya{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return Ke}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return Ke}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Ar.set(null),Ar.set(this),Re.set(null),Re.set(this)}}nu([ce()],mt.prototype,"dirty");const zs="app-toolbars-main",er="app-toolbars-main-right",ru="app-toolbars-main-center",Fs="app-toolbars-bottom",ba="app-toolbars-bottom-center",Ei="app-toolbars-bottom-end",xn="editor-area-main",Xi="sidebar-main",Ws="sidebar-main-bottom",Gs="sidebar-auxiliary",iu="panel-bottom",au=!1;var qs=(n=>(n[n.LEFT=0]="LEFT",n[n.MIDDLE=1]="MIDDLE",n[n.RIGHT=2]="RIGHT",n[n.BACK=3]="BACK",n[n.FORWARD=4]="FORWARD",n))(qs||{}),su=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,Bs=(n,e,t,r)=>{for(var i=r>1?void 0:r?ou(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&su(e,t,i),i};let si=class extends ya{constructor(){super(...arguments),this.contributions=[],this.tabGroup=Yt(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",n=>{const e=this.getTabPanel(n.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",n=>{const t=n.target.closest("wa-tab-panel");t&&(this.updateToolbarFromComponent(t),requestAnimationFrame(()=>this.updateToolbarHeightVariable(t)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",n=>{const t=n.target.closest("wa-tab-panel");t&&this.updateContextMenuFromComponent(t)}),this.tabGroup.value.addEventListener("click",n=>{const e=n.target,t=e.closest("wa-tab");if(t){const s=t.getAttribute("panel");if(s){const l=this.getTabPanel(s);if(l){const u=l.querySelector(".tab-content");if(u&&u.firstElementChild){const h=u.firstElementChild;h instanceof mt&&Re.set(h)}}}return}const r=e.closest("wa-scroller.tab-content");if(!r)return;const i=r.closest("wa-tab-panel");if(!i)return;const a=i.querySelector(".tab-content");if(a&&a.firstElementChild){const s=a.firstElementChild;s instanceof mt&&Re.set(s)}}),this.tabGroup.value.addEventListener("contextmenu",n=>{const e=n,t=e.target.closest("wa-scroller.tab-content");if(!t)return;e.preventDefault();const r=t.closest("wa-tab-panel");r&&requestAnimationFrame(()=>{this.updateContextMenuFromComponent(r);const i=r.querySelector("k-contextmenu");i&&i.show({x:e.clientX,y:e.clientY},e)})}))}),He(jt,n=>{!this.containerId||n.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(n){if(super.updated(n),n.has("contributions")){const e=this.containerId===xn;this.contributions.forEach(t=>{const r=this.getTabPanel(t.name);if(!r)return;const i=r.querySelector(".tab-content");if(i&&i.firstElementChild){const a=i.firstElementChild;a instanceof mt&&(a.tabContribution=t,a.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(r))})}}has(n){return this.tabGroup.value?!!this.getTabPanel(n):!1}activate(n){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",n)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(n){if(this.contributions.find(t=>t.name===n.name)){this.activate(n.name);return}this.contributions.push(n),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(n.name);const t=this.getTabPanel(n.name);if(t){const r=t.querySelector(".tab-content");if(r&&r.firstElementChild){const i=r.firstElementChild;i instanceof mt&&(i.tabContribution=n,i.isEditor=this.containerId===xn)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(t),this.updateToolbarHeightVariable(t),this.setupToolbarResizeObserver(t)})}})}handleTabAuxClick(n,e){n.button===qs.MIDDLE&&e.closable&&this.closeTab(n,e.name)}async closeTab(n,e){if(n.stopPropagation(),this.isDirty(e)&&!await Lr("Unsaved changes will be lost: Do you really want to close?"))return;const t=this.getTabPanel(e);if(!t)return;const r=this.contributions.find(a=>a.name===e);if(!r)return;this.cleanupTabInstance(t);const i=this.contributions.indexOf(r);i>-1&&this.contributions.splice(i,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:t})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(n,e){this.getTab(n).classList.toggle("part-dirty",e)}isDirty(n){return this.getTab(n).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=Q.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(n){const e=this.resizeObservers.get(n);e&&(e.disconnect(),this.resizeObservers.delete(n));const t=n.querySelector(".tab-content");if(t&&t.firstElementChild){const r=t.firstElementChild;"close"in r&&typeof r.close=="function"&&r.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const n=this.tabGroup.value.querySelectorAll("wa-tab");if(n.length>0){const e=n.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(n){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${n}']`):null}getTab(n){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${n}']`):null}updateToolbarFromComponent(n){const e=n.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof mt)||!t.renderToolbar)return;const r=n.querySelector("k-toolbar");r&&(r.partToolbarRenderer=()=>t.renderToolbar(),r.requestUpdate())}updateContextMenuFromComponent(n){const e=n.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof mt)||!t.renderContextMenu)return;const r=n.querySelector("k-contextmenu");r&&(r.partContextMenuRenderer=()=>t.renderContextMenu(),r.requestUpdate())}updateToolbarHeightVariable(n){const e=n.querySelector(".tab-toolbar");if(!e)return;const t=e.offsetHeight;n.style.setProperty("--toolbar-height",`${t}px`)}setupToolbarResizeObserver(n){if(this.resizeObservers.has(n))return;const e=n.querySelector(".tab-toolbar");if(!e)return;const t=new ResizeObserver(()=>{this.updateToolbarHeightVariable(n)});t.observe(e),this.resizeObservers.set(n,t)}render(){const n=wn.getCurrentApp();return S`
            <wa-tab-group ${Zt(this.tabGroup)}>
                ${gt(this.contributions.length===0,()=>S`
                        <div class="empty-state">
                            ${gt(n,()=>S`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${n.name}</h2>
                                        ${gt(n.description,()=>S`<p class="empty-description">${n.description}</p>`)}
                                    </div>
                                `,()=>S`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>Wo(this.contributions,e=>e.name,e=>S`
                            <wa-tab panel="${e.name}"
                                    @auxclick="${t=>this.handleTabAuxClick(t,e)}">
                                <k-icon name="${e.icon}"></k-icon>
                                ${e.label}
                                ${gt(e.closable,()=>S`
                                    <wa-icon name="xmark" label="Close"  @click="${t=>this.closeTab(t,e.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${e.name}">
                                <k-toolbar id="toolbar:${e.editorId??e.name}" 
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===xn}"></k-toolbar>
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${e.component?e.component(e.name):Ke}
                                </wa-scroller>
                                <k-contextmenu id="contextmenu:${e.name}"
                                               ?is-editor="${this.containerId===xn}"></k-contextmenu>
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};si.styles=tt`
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

        .empty-state {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            grid-row: 2;
        }

        .empty-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            gap: 0.75rem;
            opacity: 0.3;
        }

        .empty-title {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 500;
            color: var(--wa-color-text-quiet);
        }

        .empty-description {
            margin: 0;
            font-size: 1rem;
            color: var(--wa-color-text-quiet);
            max-width: 500px;
        }

        .empty-icon {
            font-size: 6rem;
            opacity: 0.2;
            color: var(--wa-color-text-quiet);
        }
    `;Bs([Be()],si.prototype,"contributions",2);si=Bs([qe("k-tabs")],si);var lu=Object.defineProperty,cu=Object.getOwnPropertyDescriptor,Pr=(n,e,t,r)=>{for(var i=r>1?void 0:r?cu(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&lu(e,t,i),i};let Kn=class extends ln{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=n=>{if(!this.resizing)return;const t=(this.orientation==="horizontal"?n.clientX:n.clientY)-this.resizing.startPos,r=[...this.resizing.startSizes];r[this.resizing.handleIndex]+=t,r[this.resizing.handleIndex+1]-=t;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,a=i*.05;if(r[this.resizing.handleIndex]>=a&&r[this.resizing.handleIndex+1]>=a){this.resizing.currentSizes=r;const s=r.map((l,u)=>{const T=`${(l/i*100).toFixed(2)}%`;return u===r.length-1?T:`${T} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=s:this.style.gridTemplateRows=s}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const n=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/n*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const n=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(n.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=n,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(n){super.updated(n),n.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,t)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${t*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${t*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(n,e){if(n.preventDefault(),e>=this.gridChildren.length-1)return;const t=this.orientation==="horizontal"?n.clientX:n.clientY,r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(a=>a.endsWith("%")?parseFloat(a)/100*r:(a.endsWith("px"),parseFloat(a)));this.resizing={handleIndex:e,startPos:t,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return Ke;const n=this.gridSizes.flatMap((e,t)=>t===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=n,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=n),this.style.overflow="hidden",S`
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
            
            ${this.gridChildren.map((e,t)=>{if(t<this.gridChildren.length-1){const r=this.orientation==="horizontal"?`${t*2+2}`:"1",i=this.orientation==="vertical"?`${t*2+2}`:"1";return S`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${r};
                                grid-row: ${i};
                            "
                            @mousedown=${a=>this.startResize(a,t)}
                        ></div>
                    `}return Ke})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Pr([ce()],Kn.prototype,"orientation",2);Pr([ce()],Kn.prototype,"sizes",2);Pr([Be()],Kn.prototype,"gridSizes",2);Pr([Be()],Kn.prototype,"gridChildren",2);Kn=Pr([qe("k-resizable-grid")],Kn);var uu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,wa=(n,e,t,r)=>{for(var i=r>1?void 0:r?du(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&uu(e,t,i),i};let Tr=class extends Or{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return S`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Tr.styles=tt`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;wa([ce()],Tr.prototype,"message",2);wa([ce()],Tr.prototype,"icon",2);Tr=wa([qe("k-no-content")],Tr);var js=(n=>(n.ZERO_SHOT_CLASSIFICATION="Xenova/distilbert-base-uncased-mnli",n.FEATURE_EXTRACTION="Xenova/all-MiniLM-L6-v2",n.TEXT_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-sst-2-english",n.QUESTION_ANSWERING="Xenova/distilbert-base-cased-distilled-squad",n.SUMMARIZATION="Xenova/distilbart-cnn-6-6",n.TRANSLATION_EN_FR="Xenova/opus-mt-en-fr",n.FILL_MASK="Xenova/distilbert-base-uncased",n.SENTENCE_SIMILARITY="Xenova/all-MiniLM-L6-v2",n.TOKEN_CLASSIFICATION="Xenova/distilbert-base-uncased-finetuned-conll03-english",n.IMAGE_CLASSIFICATION="Xenova/vit-base-patch16-224",n.OBJECT_DETECTION="Xenova/detr-resnet-50",n.AUTOMATIC_SPEECH_RECOGNITION="Xenova/whisper-tiny",n.AUDIO_CLASSIFICATION="Xenova/wav2vec2-base",n))(js||{}),Vs=(n=>(n.ZERO_SHOT_CLASSIFICATION="zero-shot-classification",n.FEATURE_EXTRACTION="feature-extraction",n.TEXT_CLASSIFICATION="text-classification",n.SENTIMENT_ANALYSIS="sentiment-analysis",n.QUESTION_ANSWERING="question-answering",n.SUMMARIZATION="summarization",n.TRANSLATION="translation",n.FILL_MASK="fill-mask",n.SENTENCE_SIMILARITY="sentence-similarity",n.TOKEN_CLASSIFICATION="token-classification",n.IMAGE_CLASSIFICATION="image-classification",n.OBJECT_DETECTION="object-detection",n.AUTOMATIC_SPEECH_RECOGNITION="automatic-speech-recognition",n.AUDIO_CLASSIFICATION="audio-classification",n.IMAGE_TO_TEXT="image-to-text",n.TEXT_TO_IMAGE="text-to-image",n.IMAGE_SEGMENTATION="image-segmentation",n.DEPTH_ESTIMATION="depth-estimation",n))(Vs||{});function pu(n){switch(n){case"zero-shot-classification":return"Xenova/distilbert-base-uncased-mnli";case"feature-extraction":return"Xenova/all-MiniLM-L6-v2";case"text-classification":case"sentiment-analysis":return"Xenova/distilbert-base-uncased-finetuned-sst-2-english";case"question-answering":return"Xenova/distilbert-base-cased-distilled-squad";case"summarization":return"Xenova/distilbart-cnn-6-6";case"translation":return"Xenova/opus-mt-en-fr";case"fill-mask":return"Xenova/distilbert-base-uncased";case"sentence-similarity":return"Xenova/all-MiniLM-L6-v2";case"token-classification":return"Xenova/distilbert-base-uncased-finetuned-conll03-english";case"image-classification":return"Xenova/vit-base-patch16-224";case"object-detection":return"Xenova/detr-resnet-50";case"automatic-speech-recognition":return"Xenova/whisper-tiny";case"audio-classification":return"Xenova/wav2vec2-base";default:return null}}let Li=null,Qa=!1;async function Hs(){Li||(Li=Pe(()=>import("./transformers-BZ9t3aNJ.js"),__vite__mapDeps([0,1,2,3,4])));const n=await Li;return Qa||(n.env.allowRemoteModels=!0,n.env.allowLocalModels=!1,n.env.remoteHost="https://huggingface.co",Qa=!0),n}async function hu(n){const{env:e}=await Hs();n&&n.trim()?e.useAuthToken=n.trim():e.useAuthToken=null}const dr=Bt("InBrowserMLService");class Fn{constructor(){this.pipelines=new Map,this.loadingPipelines=new Set}static getInstance(){return Fn.instance||(Fn.instance=new Fn),Fn.instance}setAuthToken(e){hu(e).then(()=>{e&&e.trim()&&dr.info("Hugging Face token set for authenticated model access")}).catch(t=>{dr.warn(`Failed to configure auth token: ${t instanceof Error?t.message:String(t)}`)})}async getPipeline(e,t,r={}){if(!t&&typeof e!="string"){const l=pu(e);l&&(t=l)}const i=e,a=t,s=`${i}:${a}`;if(this.pipelines.has(s))return this.pipelines.get(s);if(this.loadingPipelines.has(s)){for(;this.loadingPipelines.has(s);)await new Promise(l=>setTimeout(l,100));return this.pipelines.get(s)}this.loadingPipelines.add(s);try{dr.info(`Loading transformers.js pipeline: ${i} with model ${a}...`);const{pipeline:l}=await Hs(),u=await l(i,a,{quantized:!0,...r});return this.pipelines.set(s,u),dr.info(`Pipeline ${s} loaded successfully`),u}catch(l){const u=l instanceof Error?l.message:String(l);throw dr.error(`Failed to load pipeline ${s}: ${u}`),l}finally{this.loadingPipelines.delete(s)}}clearPipeline(e,t){const a=`${e}:${t}`;this.pipelines.delete(a)}clearAllPipelines(){this.pipelines.clear()}}const fu=Fn.getInstance(),va="events/aiservice/streamStarted",Ea="events/aiservice/streamChunk",ka="events/aiservice/streamComplete",kr="events/aiservice/streamError",ki="events/aiservice/aiConfigChanged",Ca="events/aiservice/agentWorkflowStarted",xa="events/aiservice/agentWorkflowComplete",Aa="events/aiservice/agentWorkflowError",Ta="aiservice.agents",Qe="aiservice.chatProviders",Nr="aiservice.promptEnhancers",fn="aiConfig",Sa={defaultProvider:"openai",providers:[]},oi=10,Xs=5,gu=Object.freeze(Object.defineProperty({__proto__:null,AI_CONFIG_TEMPLATE:Sa,CID_AGENTS:Ta,CID_CHAT_PROVIDERS:Qe,CID_PROMPT_ENHANCERS:Nr,KEY_AI_CONFIG:fn,MAX_RECENT_TOOL_CALLS:Xs,MAX_TOOL_ITERATIONS:oi,TOPIC_AGENT_WORKFLOW_COMPLETE:xa,TOPIC_AGENT_WORKFLOW_ERROR:Aa,TOPIC_AGENT_WORKFLOW_STARTED:Ca,TOPIC_AICONFIG_CHANGED:ki,TOPIC_AI_STREAM_CHUNK:Ea,TOPIC_AI_STREAM_COMPLETE:ka,TOPIC_AI_STREAM_ERROR:kr,TOPIC_AI_STREAM_STARTED:va},Symbol.toStringTag,{value:"Module"}));class Ks{constructor(){this.decoder=new TextDecoder}*processLines(e){for(const t of e)t.trim()!==""&&(yield t)}}class mu extends Ks{constructor(){super(...arguments),this.usage=null}async*parse(e){let t="";this.usage=null;try{for(;;){const{done:i,value:a}=await e.read();if(i)break;t+=this.decoder.decode(a,{stream:!0});const s=t.split(`
`);t=s.pop()||"";for(const l of this.processLines(s))if(l.startsWith("data: ")){const u=l.slice(6).trim();if(u==="[DONE]"){const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}try{const h=JSON.parse(u);if(h.error){yield{type:"error",content:h.error.message||"Unknown error",metadata:h.error};continue}this.extractUsage(h);const T=this.parseChunk(h);T&&(yield T)}catch{continue}}}if(t.trim()&&t.startsWith("data: ")){const i=t.slice(6).trim();if(i!=="[DONE]")try{const a=JSON.parse(i);this.extractUsage(a);const s=this.parseChunk(a);s&&(yield s)}catch{}}const r={type:"done",content:""};this.usage&&(r.metadata={usage:this.usage}),yield r}finally{e.releaseLock()}}extractUsage(e){if(e.usage){const t=e.usage;this.usage={promptTokens:t.prompt_tokens||0,completionTokens:t.completion_tokens||0,totalTokens:t.total_tokens||0,estimated:!1}}}parseChunk(e){const t=e.choices?.[0]?.delta,r=e.choices?.[0];if(t?.content)return{type:"token",content:t.content,message:{role:t.role||"assistant",content:r?.message?.content||t.content}};if(r?.message?.tool_calls){const i=this.parseToolCalls(r.message.tool_calls,!0);if(i.length>0)return{type:"token",content:"",toolCalls:i}}else if(t?.tool_calls||r?.delta?.tool_calls){const i=this.parseToolCalls(t?.tool_calls||r?.delta?.tool_calls||[],!1);if(i.length>0)return{type:"token",content:"",toolCalls:i}}return null}parseToolCalls(e,t=!1){return e.filter(r=>r.function!==void 0).map((r,i)=>({id:r.id||`call_${r.index!==void 0?r.index:i}_${Date.now()}`,type:"function",function:{name:r.function?.name||"",arguments:r.function?.arguments||(t?"{}":"")},_index:r.index!==void 0?r.index:i}))}}class yu extends Ks{constructor(){super(...arguments),this.usage=null}async*parse(e){let t="";this.usage=null;try{for(;;){const{done:i,value:a}=await e.read();if(i)break;t+=this.decoder.decode(a,{stream:!0});const s=t.split(`
`);t=s.pop()||"";for(const l of this.processLines(s))try{const u=JSON.parse(l);if(u.error){yield{type:"error",content:u.error,metadata:u};continue}if(u.done){this.extractUsage(u);const h={type:"done",content:""};this.usage&&(h.metadata={usage:this.usage}),yield h;continue}u.message?.content?yield{type:"token",content:u.message.content,message:{role:u.message.role||"assistant",content:u.message.content}}:u.response&&(yield{type:"token",content:u.response,message:{role:"assistant",content:u.response}})}catch{continue}}if(t.trim())try{const i=JSON.parse(t);i.done&&this.extractUsage(i),i.message?.content&&(yield{type:"token",content:i.message.content,message:{role:i.message.role||"assistant",content:i.message.content}})}catch{}const r={type:"done",content:""};this.usage&&(r.metadata={usage:this.usage}),yield r}finally{e.releaseLock()}}extractUsage(e){if(e.prompt_eval_count!==void 0||e.eval_count!==void 0){const t=e.prompt_eval_count||0,r=e.eval_count||0;this.usage={promptTokens:t,completionTokens:r,totalTokens:t+r,estimated:!1}}}}class _a{createParser(e,t){return e.includes("text/event-stream")||t.includes("openai")?new mu:new yu}async getAvailableModels(e){if(!e.chatApiEndpoint)return[];try{const t=e.chatApiEndpoint;let r=t;if(t.includes("/v1/chat/completions"))r=t.replace("/v1/chat/completions","");else if(t.includes("/api/v1/chat/completions"))r=t.replace("/api/v1/chat/completions","");else if(t.includes("/api/chat/completion"))r=t.replace("/api/chat/completion","");else try{const h=new URL(t);r=`${h.protocol}//${h.host}`}catch{return[]}const i=`${r}/v1/models`,a={"Content-Type":"application/json"};e.apiKey&&(a.Authorization=`Bearer ${e.apiKey}`);const s=await fetch(i,{method:"GET",headers:a});return s.ok?((await s.json()).data||[]).map(h=>({id:h.id,name:h.name||h.id})):[]}catch{return[]}}async*stream(e){const t={model:e.model,stream:!0,messages:e.messages,...e.chatConfig.parameters};e.tools&&e.tools.length>0&&(t.tools=e.tools,t.tool_choice="auto");const r=await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(t),signal:e.signal});if(!r.ok){const u=await r.text().catch(()=>"Unknown error");yield{type:"error",content:`HTTP ${r.status}: ${u}`,metadata:{status:r.status,statusText:r.statusText}};return}const i=r.headers.get("content-type")||"",a=r.headers.get("content-length");if(!r.body){yield{type:"error",content:`Response body is null or empty (Content-Length: ${a||"unknown"}). This may indicate: 1) The endpoint doesn't support streaming, 2) Authentication is required/invalid, 3) The endpoint URL is incorrect. For Open WebUI, ensure you're using the correct endpoint and API key.`,metadata:{status:r.status,contentType:i,contentLength:a,endpoint:e.chatConfig.chatApiEndpoint,hasApiKey:!!e.chatConfig.apiKey}};return}const s=r.body.getReader();if(!s){yield{type:"error",content:"Response body is not readable"};return}const l=this.createParser(i,e.chatConfig.chatApiEndpoint);try{for await(const u of l.parse(s))yield u}catch(u){yield{type:"error",content:u instanceof Error?u.message:"Failed to parse response stream",metadata:{error:u,contentType:i,endpoint:e.chatConfig.chatApiEndpoint}}}}}class Ys extends _a{constructor(){super(...arguments),this.name="openai"}canHandle(e){return e.chatApiEndpoint.includes("openai")||e.chatApiEndpoint.includes("v1/chat/completions")}}class Zs extends _a{constructor(){super(...arguments),this.name="ollama"}canHandle(e){return e.name.toLowerCase()==="ollama"||e.chatApiEndpoint.includes("ollama")||e.chatApiEndpoint.includes("localhost:11434")}}class Js{constructor(){this.providers=[],this.registerDefaultProviders()}registerDefaultProviders(){this.providers.push(new Ys),this.providers.push(new Zs)}registerProvider(e){this.providers.push(e)}getProvider(e){const t=this.providers.find(r=>r.canHandle(e));return t||this.providers[0]}getAllProviders(){return[...this.providers]}}class Qs{getAgentContributions(){return Q.getContributions(Ta)}filterAndSortAgents(e,t){return e.filter(r=>r.canHandle?r.canHandle(t):!0).sort((r,i)=>(i.priority||0)-(r.priority||0))}getMatchingAgents(e,t){const r=this.getAgentContributions();if(r.length===0)throw new Error("No agents are registered. The App Support agent should be available from the AI system extension.");let i=r.filter(a=>t&&!t.includes(a.role)?!1:a.canHandle?a.canHandle(e):!0);if(t&&t.length>0){if(i=i.sort((a,s)=>(s.priority||0)-(a.priority||0)),i.length===0){const a=t.join(", ");throw new Error(`No agents found for requested roles: ${a}. Available agents: ${r.map(s=>s.role).join(", ")}`)}}else if(i=this.filterAndSortAgents(i,e),i.length===0)throw new Error(`No agents can handle the current context. Available agents: ${r.map(a=>a.role).join(", ")}`);return i}}class $a{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}commandToTool(e,t){const r={},i=[];return e.parameters?.forEach(l=>{const u=this.sanitizeFunctionName(l.name);r[u]={type:l.type||"string",description:l.description,...l.allowedValues&&{enum:l.allowedValues}},l.required===!0&&i.push(u)}),{type:"function",function:{name:this.sanitizeFunctionName(e.id),description:e.description||e.name,parameters:{type:"object",properties:r,required:i}}}}getAvailableTools(e,t){const r=ye.listCommands();let i=Object.values(r);return t&&(i=i.filter(a=>t(a,e))),i.map(a=>this.commandToTool(a,e))}}const hn=Bt("ToolDetector");class bu{constructor(){this.classifier=null,this.loading=!1,this.loadPromise=null}async ensureLoaded(){if(!this.classifier)return this.loading&&this.loadPromise?this.loadPromise:(this.loading=!0,this.loadPromise=(async()=>{try{hn.info("Loading ML model for tool detection..."),this.classifier=await fu.getPipeline(Vs.ZERO_SHOT_CLASSIFICATION,js.ZERO_SHOT_CLASSIFICATION,{quantized:!0}),hn.info("ML model loaded successfully - will use for tool detection")}catch(e){const t=e instanceof Error?e.message:String(e);hn.warn(`Failed to load ML model, will use keyword-based detection fallback: ${t}`),this.classifier=null}finally{this.loading=!1}})(),this.loadPromise)}async needsTools(e){if(!e||e.trim().length===0)return!1;const t=e.toLowerCase().trim();if(["hello","hi","hey","thanks","thank you","bye","goodbye"].some(a=>t===a||t.startsWith(a+" ")))return!1;try{if(await this.ensureLoaded(),this.classifier){hn.info(`Using ML model to classify prompt: "${t.substring(0,50)}${t.length>50?"...":""}"`);const a=await this.classifier(t,["requires executing commands or actions","is a simple greeting or question"]),s=a.labels[0]==="requires executing commands or actions"&&a.scores[0]>.6;return hn.info(`ML classification result: ${a.labels[0]} (confidence: ${(a.scores[0]*100).toFixed(1)}%) - needsTools: ${s}`),s}}catch(a){const s=a instanceof Error?a.message:String(a);hn.warn(`ML classification failed, using keyword fallback: ${s}`)}hn.info("Using keyword-based detection (ML model not available)");const i=this.keywordBasedDetection(t);return hn.info(`Keyword detection result: needsTools=${i}`),i}keywordBasedDetection(e){const t=["create","open","delete","read","write","edit","save","rename","move","copy","list","show","display","run","execute","build","add","remove","update","modify","change","set","get","find","search","filter","sort","install","uninstall","load","import","export","generate","make","do","perform","call","invoke"],r=["file","folder","directory","workspace","editor","map","layer","command","tool","extension","script","code","project"],i=t.some(s=>e.includes(s)),a=r.some(s=>e.includes(s));return i&&(a||e.length>20)}dispose(){this.classifier=null,this.loading=!1,this.loadPromise=null}}const wu=new bu;class eo{constructor(){this.toolRegistry=new $a,this.enhancers=[]}addEnhancer(e){this.enhancers.push(e)}async getSysPrompt(e,t){let r=e.sysPrompt;if(typeof r=="function"&&(r=r()),!r||typeof r!="string")throw new Error(`Agent "${e.role}" (${e.label}) is missing a system prompt. All agents must provide a sysPrompt.`);const i=[...e.promptEnhancers||[],...this.enhancers,...this.getContributedEnhancers()].sort((s,l)=>(l.priority||0)-(s.priority||0));let a=r;for(const s of i)try{a=await s.enhance(a,t),(!a||typeof a!="string")&&(a=r)}catch(l){console.warn("[PromptBuilder] Enhancer failed:",l)}return a}rewriteChatHistoryForAgent(e,t){return e.map(r=>r.role==="user"?{role:r.role,content:r.content}:r.role===t?{role:"assistant",content:r.content}:{role:"user",content:`***Agent '${r.role}' replied:***
${r.content}`})}getContributedEnhancers(){return Q.getContributions(Nr).map(t=>({...t.enhancer,priority:t.priority??t.enhancer.priority}))}async build(e,t,r,i){i?.beforeSend&&await i.beforeSend(t,r);const a=this.sanitizeMessagesForAPI(t),s=this.rewriteChatHistoryForAgent(a,e.role);let l=e.tools;typeof l=="function"&&(l=await l());let u;if(l?.enabled)if(l.smartToolDetection){const m=t[t.length-1]?.content||"";await wu.needsTools(m)&&(u=this.toolRegistry.getAvailableTools(r,l.commandFilter))}else u=this.toolRegistry.getAvailableTools(r,l.commandFilter);const h=await this.getSysPrompt(e,r);s.unshift({role:"system",content:h});const T=s.length-1;return{messages:s,userPromptIndex:T,tools:u}}sanitizeMessageForAPI(e){const t={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(t.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(t.tool_calls=e.tool_calls),t}sanitizeMessagesForAPI(e){return e.map(t=>this.sanitizeMessageForAPI(t))}}class to{constructor(){this.processors=[]}addProcessor(e){this.processors.push(e)}getSortedProcessors(){return[...this.processors].sort((e,t)=>(t.priority||0)-(e.priority||0))}async process(e,t,r){let i={...e};const a=[...t.messageProcessors||[],...this.processors].sort((l,u)=>(u.priority||0)-(l.priority||0));for(const l of a)i=await l.process(i,r);const s=i.actions?.some(l=>l.requiresAttention)||i.attentionRequests?.some(l=>l.requiresAction)||!1;return{...i,requiresAttention:s}}checkRequiresAttention(e){return e.actions?.some(t=>t.requiresAttention)||e.attentionRequests?.some(t=>t.requiresAction)||!1}}class no{constructor(){this.accumulatedToolCalls=new Map,this.toolCallIndexMap=new Map}processChunk(e){if(e.type==="token"&&e.toolCalls&&e.toolCalls.length>0)for(const t of e.toolCalls){const r=t._index,i=t.id;let a,s;if(r!==void 0&&this.toolCallIndexMap.has(r)?(s=this.toolCallIndexMap.get(r),a=this.accumulatedToolCalls.get(s)):i&&this.accumulatedToolCalls.has(i)?(s=i,a=this.accumulatedToolCalls.get(s)):(s=i||`call_${r!==void 0?r:Date.now()}_${Math.random()}`,a=void 0),a){const l=a.function.arguments||"",u=t.function.arguments||"",h=l+u;this.accumulatedToolCalls.set(s,{id:s,type:t.type||a.type,function:{name:t.function.name||a.function.name,arguments:h}}),r!==void 0&&!this.toolCallIndexMap.has(r)&&this.toolCallIndexMap.set(r,s)}else this.accumulatedToolCalls.set(s,{...t,id:s}),r!==void 0&&this.toolCallIndexMap.set(r,s)}}getFinalToolCalls(){return Array.from(this.accumulatedToolCalls.values()).filter(e=>e.function.name&&e.function.name.trim().length>0).map(e=>{let t=e.function.arguments||"";return(!t||t.trim()==="")&&(t="{}"),{...e,function:{...e.function,arguments:t}}})}reset(){this.accumulatedToolCalls.clear(),this.toolCallIndexMap.clear()}}class Oa{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}findCommand(e,t){const r=e.function.name,i=ye.getCommand(r);if(i)return i;const a=ye.listCommands();for(const[s,l]of Object.entries(a))if(this.sanitizeFunctionName(s)===r)return l;return null}parseArguments(e){if(!e||e.trim()===""||e==="{}")return{};try{const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch(t){const r=t instanceof Error?t.message:String(t);return console.error(`[ToolExecutor] Failed to parse arguments: ${e} - ${r}`),{}}}sanitizeArguments(e,t){if(!t||!t.parameters||!e||typeof e!="object")return e||{};const r={};return t.parameters.forEach(i=>{const a=this.sanitizeFunctionName(i.name);a in e&&(r[i.name]=e[a])}),r}async executeToolCall(e,t){try{const r=this.findCommand(e,t),i=r?.id||e.function.name,a=e.function.arguments||"{}",s=this.parseArguments(a),l=this.sanitizeArguments(s,r),u=ye.createExecutionContext(l),h={...t,...u,params:l};let T=await ye.execute(i,h);const m={success:!0,message:`Command "${r?.name||i}" executed successfully`,command:i};if(l&&typeof l=="object"&&Object.keys(l).length>0&&(m.parameters=l),T){let k=T;if(k instanceof Promise&&(k=await k),m.result=k,r?.output&&r.output.length>0){const D=r.output.map(B=>`${B.name}: ${B.description||B.type||"value"}`).join(", ");m.output=D}}return{id:e.id,result:m}}catch(r){const i=r instanceof Error?r.message:String(r);let a=null;try{a=this.findCommand(e,t)}catch{a=null}const s=a?.name||e.function.name;let l=i;return i.includes("No handler found")||i.includes("No handlers registered")?l=`Command "${s}" cannot be executed. ${i}. This usually means the command is not available in the current context (e.g., a map editor may not be open or active).`:(i.includes("not available")||i.includes("GsMapEditor"))&&(l=`Command "${s}" cannot be executed: ${i}. Please ensure the required editor or component is open and active.`),{id:e.id,result:null,error:l}}}async executeToolCalls(e,t){const r=[];for(const i of e){const a=await this.executeToolCall(i,t);r.push(a)}return r}createToolCallAccumulator(){return new no}createToolCallSignature(e){const t=e.function.arguments||"{}";let r={};try{const a=JSON.parse(t);r=a&&typeof a=="object"?a:{}}catch{r={}}const i=r&&typeof r=="object"?Object.keys(r).sort().reduce((a,s)=>(a[s]=r[s],a),{}):{};return`${e.function.name}:${JSON.stringify(i)}`}}const vu=Object.freeze(Object.defineProperty({__proto__:null,ToolExecutor:Oa},Symbol.toStringTag,{value:"Module"}));class ro{async execute(e,t,r,i){const a=t.chatConfig;if(!a)throw new Error("Chat config is required");const s=e.map(async l=>{try{await i(l,t.chatContext.history,r.sharedState,a,t,r)}catch(u){const h=u instanceof Error?u:new Error(String(u));r.errors.set(l.role,h),t.onAgentError?.(l.role,h)}});await Promise.all(s)}}class io{async execute(e,t,r,i){const a=t.chatConfig;if(!a)throw new Error("Chat config is required");let s=[...t.chatContext.history],l={...r.sharedState};for(const u of e)try{const h=this.createAgentContextWithPreviousAgents(l,t,r),T=await i(u,s,l,a,t,r);if(!T)break;const E=this.updateWorkflowState(T,s,l,h,r);s=E.currentMessages,l=E.accumulatedState}catch(h){const T=h instanceof Error?h:new Error(String(h));r.errors.set(u.role,T),t.onAgentError?.(u.role,T);break}}createAgentContextWithPreviousAgents(e,t,r){return{...e,...t.callContext.getProxy(),previousAgents:Array.from(r.messages.entries()).map(([i,a])=>({role:i,content:a.content}))}}updateWorkflowState(e,t,r,i,a){return t.push(e),r={...r,...i,message:e},a.sharedState=r,{currentMessages:t,accumulatedState:r}}}class ao{async execute(e,t,r,i){const a=t.chatConfig;if(!a)throw new Error("Chat config is required");let s=[...t.chatContext.history],l={...r.sharedState};for(const u of e)try{const h=this.createAgentContextWithPreviousAgents(l,t,r);if(u.canHandle&&!u.canHandle(h))continue;const T=await i(u,s,l,a,t,r);if(!T)break;const E=this.updateWorkflowState(T,s,l,h,r);s=E.currentMessages,l=E.accumulatedState}catch(h){const T=h instanceof Error?h:new Error(String(h));r.errors.set(u.role,T),t.onAgentError?.(u.role,T)}}createAgentContextWithPreviousAgents(e,t,r){return{...e,...t.callContext.getProxy(),previousAgents:Array.from(r.messages.entries()).map(([i,a])=>({role:i,content:a.content}))}}updateWorkflowState(e,t,r,i,a){return t.push(e),r={...r,...i,message:e},a.sharedState=r,{currentMessages:t,accumulatedState:r}}}class so{constructor(){this.strategies=new Map([["parallel",new ro],["sequential",new io],["conditional",new ao]])}registerStrategy(e,t){this.strategies.set(e,t)}async execute(e,t,r){const i=`workflow-${Date.now()}-${Math.random()}`,a=t.execution||"parallel",s=t.sharedState||{},l={messages:new Map,sharedState:{...s},errors:new Map};Oe(Ca,{workflowId:i,options:t});try{const u=this.strategies.get(a);if(!u)throw new Error(`Unknown workflow execution strategy: ${a}`);return await u.execute(e,t,l,r),Oe(xa,{workflowId:i,results:l}),l}catch(u){const h=u instanceof Error?u:new Error(String(u));throw Oe(Aa,{workflowId:i,error:h}),h}}}const Ci=class{static estimateTokens(e){if(!e||e.trim().length===0)return 0;const t=e.trim(),r=t.length,i=t.split(/\s+/).filter(s=>s.length>0).length,a=Math.ceil(r/this.AVERAGE_CHARS_PER_TOKEN+i*.3);return Math.max(1,a)}static estimateMessageTokens(e){let t=this.MESSAGE_OVERHEAD;if(e.content&&(t+=this.estimateTokens(e.content)),e.role&&(t+=this.estimateTokens(e.role)),e.tool_calls)for(const r of e.tool_calls)t+=this.estimateTokens(r.function.name||""),t+=this.estimateTokens(r.function.arguments||"{}"),t+=10;return e.tool_call_id&&(t+=this.estimateTokens(e.tool_call_id)),t}static estimatePromptTokens(e,t){let r=0;for(const i of e)r+=this.estimateMessageTokens(i);if(t&&t.length>0){for(const i of t)if(r+=this.TOOL_DEFINITION_OVERHEAD,r+=this.estimateTokens(i.function.name||""),r+=this.estimateTokens(i.function.description||""),i.function.parameters){const a=JSON.stringify(i.function.parameters);r+=this.estimateTokens(a)}}return r}static estimateCompletionTokens(e,t){let r=this.estimateTokens(e);if(t&&t.length>0)for(const i of t)r+=10,r+=this.estimateTokens(i.function?.name||""),r+=this.estimateTokens(i.function?.arguments||"{}");return r}};Ci.AVERAGE_CHARS_PER_TOKEN=4;Ci.TOOL_DEFINITION_OVERHEAD=50;Ci.MESSAGE_OVERHEAD=4;let es=Ci;const ts="ai_token_usage";class Eu{constructor(){this.data=null,this.loadPromise=null}async loadData(){return this.data?this.data:this.loadPromise?this.loadPromise:(this.loadPromise=(async()=>{const e=await Ot.getObject(ts);return e?this.data=e:(this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()),this.loadPromise=null,this.data})(),this.loadPromise)}async saveData(){this.data&&(this.data.lastUpdated=Date.now(),await Ot.persistObject(ts,this.data))}async recordUsage(e,t){if(await this.loadData(),!this.data)return;this.data.providers[e]||(this.data.providers[e]={promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0});const r=this.data.providers[e];r.promptTokens+=t.promptTokens,r.completionTokens+=t.completionTokens,r.totalTokens+=t.totalTokens,r.requestCount+=1,this.data.total.promptTokens+=t.promptTokens,this.data.total.completionTokens+=t.completionTokens,this.data.total.totalTokens+=t.totalTokens,this.data.total.requestCount+=1,await this.saveData()}async getProviderUsage(e){return await this.loadData(),this.data?.providers[e]||null}async getAllProviderUsage(){return await this.loadData(),this.data?.providers||{}}async getTotalUsage(){return await this.loadData(),this.data?.total||{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0}}async reset(){this.data={providers:{},total:{promptTokens:0,completionTokens:0,totalTokens:0,requestCount:0},lastUpdated:Date.now()},await this.saveData()}async resetProvider(e){if(await this.loadData(),!this.data)return;const t=this.data.providers[e];t&&(this.data.total.promptTokens-=t.promptTokens,this.data.total.completionTokens-=t.completionTokens,this.data.total.totalTokens-=t.totalTokens,this.data.total.requestCount-=t.requestCount,delete this.data.providers[e],await this.saveData())}}const oo=new Eu;class ku{constructor(){this.activeRequests=new Map,this.providerFactory=new Js,this.agentRegistry=new Qs,this.promptBuilder=new eo,this.messageProcessor=new to,this.toolExecutor=new Oa,this.workflowEngine=new so,this.toolRegistry=new $a,He(rn,()=>{this.aiConfig=void 0,this.configCheckPromise=void 0,this.checkAIConfig().then()}),this.checkAIConfig().then()}getAgentContributions(){return this.agentRegistry.getAgentContributions()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const t=e.find(r=>r.name===this.aiConfig?.defaultProvider);if(t)return t}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig&&(this.aiConfig.defaultProvider=e,await ze.set(fn,this.aiConfig)),this.getDefaultProvider()}createMessage(e){return{role:"user",content:e}}registerStreamingFetcher(e){this.providerFactory.registerProvider(e)}getContributedProviders(){return Q.getContributions(Qe).map(t=>t.provider)}mergeProviders(e,t){const r=new Set(e.map(a=>a.name)),i=t.filter(a=>!r.has(a.name));return i.length>0?[...e,...i]:e}async createInitialConfig(){const e=this.getContributedProviders(),t={...Sa,providers:e};return await ze.set(fn,t),await ze.get(fn)}async updateConfigWithMissingProviders(e){const t=this.getContributedProviders(),r=this.mergeProviders(e.providers,t);if(r.length!==e.providers.length){const i={...e,providers:r};return await ze.set(fn,i),i}return e}async checkAIConfig(){if(!this.aiConfig)return this.configCheckPromise?this.configCheckPromise:(this.configCheckPromise=this.performConfigCheck(),this.configCheckPromise)}async performConfigCheck(){try{this.aiConfig=await ze.get(fn),this.aiConfig?this.aiConfig=await this.updateConfigWithMissingProviders(this.aiConfig):this.aiConfig=await this.createInitialConfig(),Oe(ki,this.aiConfig)}finally{this.configCheckPromise=void 0}}createAgentContext(e,t,r={}){return{...e,...t.getProxy(),...r}}createFinalMessage(e,t){return{role:e.role,content:t.content,actions:t.actions,requiresAttention:t.requiresAttention,attentionRequests:t.attentionRequests,canContinue:t.canContinue}}async handleUserAttention(e,t,r,i){if(!t.requiresAttention||!r.userAttentionHandler)return!0;const a=[];if(t.attentionRequests&&a.push(...t.attentionRequests),t.actions)for(const u of t.actions)u.requiresAttention&&u.attentionRequest&&a.push(u.attentionRequest);if(a.length===0)return!0;if(i.pendingAttention||(i.pendingAttention=new Map),i.pendingAttention.set(e,a),r.onAttentionRequest)for(const u of a)r.onAttentionRequest(e,u);if(r.pauseOnAttention)return i.paused=!0,i.continuationToken=`${e}-${Date.now()}-${Math.random()}`,!1;const s=r.userAttentionHandler,l=this.createAgentContext(r.sharedState||{},r.callContext,{message:t});for(const u of a)if(s.onAttentionRequest){const h=await s.onAttentionRequest(u,l);if(u.requiresAction&&(h===!1||h===null))return!1;h&&typeof h=="string"&&(l[`attention_${u.type}_result`]=h)}else switch(u.type){case"confirmation":if(s.onConfirmation&&!await s.onConfirmation(u.message,l)&&u.requiresAction)return!1;break;case"input":if(s.onInput){const h=await s.onInput(u.message,void 0,l);if(!h&&u.requiresAction)return!1;h&&(l.attention_input_result=h)}break}return!0}async*streamCompletion(e){const t=`${Date.now()}-${Math.random()}`,r=new AbortController;this.activeRequests.set(t,r),e.signal&&e.signal.addEventListener("abort",()=>{r.abort()});const i=e.signal||r.signal;try{e.onStatus?.("starting"),Oe(va,{requestId:t,options:e});const a=e.chatConfig||await this.getDefaultProvider(),s=this.sanitizeMessagesForAPI(e.chatContext.history),l=this.providerFactory.getProvider(a),u=this.toolExecutor.createToolCallAccumulator();let h="",T={role:"assistant",content:""},E;for await(const D of l.stream({model:a.model,messages:s,chatConfig:a,tools:e.tools,signal:i})){if(D.type==="error"){e.onStatus?.("error"),Oe(kr,{requestId:t,chunk:D}),yield D;break}if(D.type==="token")u.processChunk(D),(!D.toolCalls||D.toolCalls.length===0)&&(h+=D.content,T.content=h),D.message?.role&&(T.role=D.message.role),D.content&&e.onToken?.(D.content),e.onStatus?.("streaming"),e.onProgress?.({received:h.length}),Oe(Ea,{requestId:t,chunk:D}),yield D;else if(D.type==="done"){D.metadata?.usage&&(E=D.metadata.usage),e.onStatus?.("complete"),Oe(ka,{requestId:t}),yield D;break}else yield D}const m=u.getFinalToolCalls(),k={role:T.role||"assistant",content:h||"",...m.length>0&&{toolCalls:m}};if(!E){const D=es.estimatePromptTokens(s,e.tools),B=es.estimateCompletionTokens(h,m);E={promptTokens:D,completionTokens:B,totalTokens:D+B,estimated:!0}}return oo.recordUsage(a.name,E).catch(D=>{$e.error(`Failed to record token usage: ${D instanceof Error?D.message:String(D)}`)}),{message:k,tokenUsage:E}}catch(a){if(a instanceof Error&&a.name==="AbortError")throw e.onStatus?.("error"),Oe(kr,{requestId:t,error:"Request cancelled"}),a;e.onStatus?.("error");const s=a instanceof Error?a.message:String(a);throw Oe(kr,{requestId:t,error:s}),yield{type:"error",content:s,metadata:{error:a}},a}finally{this.activeRequests.delete(t)}}async handleStreamingPromptDirect(e){const t=this.streamCompletion(e);let r;for(;;){if(r=await t.next(),r.done)return r.value.message;const i=r.value;if(i.type==="error")throw new Error(i.content);if(i.type==="done"){const a=await t.next();if(a.done&&a.value)return a.value.message;if(!a.done)continue;throw new Error("Stream completed without return value")}}}sanitizeMessageForAPI(e){const t={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(t.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(t.tool_calls=e.tool_calls),t}sanitizeMessagesForAPI(e){return e.map(t=>this.sanitizeMessageForAPI(t))}async handleStreamingPrompt(e){const t=e.callContext||bt.createChild({}),r=this.createAgentContext({},t,{userPrompt:e.chatContext.history[e.chatContext.history.length-1]?.content||""}),i=this.agentRegistry.getMatchingAgents(r),a=i.length>0?i.map(u=>u.role):["assistant"],s=await this.executeAgentWorkflow({chatContext:e.chatContext,chatConfig:e.chatConfig,callContext:t,execution:"parallel",stream:e.stream,signal:e.signal,onToken:(u,h)=>{e.onToken?.(h)},onStatus:(u,h)=>{e.onStatus?.(h)},roles:a}),l=Array.from(s.messages.values());return l.length===1?l[0]:l}async continueWorkflow(e,t,r){const i={sharedState:{...r.sharedState,...Object.fromEntries(t)}},a={...r,sharedState:i.sharedState,pauseOnAttention:!1};return this.executeAgentWorkflow(a)}cancelRequest(e){const t=this.activeRequests.get(e);return t?(t.abort(),this.activeRequests.delete(e),!0):!1}async executeAgentWorkflow(e){const t=this.createAgentContext(e.sharedState||{},e.callContext),r=this.agentRegistry.getMatchingAgents(t,e.roles);return this.workflowEngine.execute(r,e,async(i,a,s,l,u,h)=>this.executeAgent(i,a,s,l,u,h))}async executeAgent(e,t,r,i,a,s){a.onAgentStart?.(e.role);const l=this.createAgentContext(r,a.callContext,{userPrompt:t[t.length-1]?.content||""}),{messages:u,tools:h}=await this.promptBuilder.build(e,t,l,e.hooks),T=u.map(Y=>{const G={role:Y.role,content:Y.content};return Y.tool_call_id&&(G.tool_call_id=Y.tool_call_id),Y.tool_calls&&(G.tool_calls=Y.tool_calls),G});let E=await this.handleStreamingPromptDirect({chatContext:{history:T},chatConfig:i,callContext:a.callContext,stream:a.stream??!0,signal:a.signal,tools:h}),m=0;const k=[...u];for(;E.toolCalls&&E.toolCalls.length>0;){if(m++,m>oi){console.warn(`[AIService] Maximum tool call iterations (${oi}) reached`);break}let Y=[];if(a.requireToolApproval&&a.onToolApprovalRequest){const P=E.toolCalls.map(pe=>{const ne=pe.function.arguments||"{}";let R={};try{R=JSON.parse(ne)}catch{R={}}return`${pe.function.name}(${Object.entries(R).map(([X,oe])=>`${X}=${oe}`).join(", ")})`}).join(", "),q={toolCalls:E.toolCalls,message:`The AI wants to execute: ${P}`};await a.onToolApprovalRequest(e.role,q)?Y=await this.toolExecutor.executeToolCalls(E.toolCalls,l):Y=E.toolCalls.map(pe=>({id:pe.id,result:{success:!1,message:"Tool execution cancelled by user",cancelled:!0}}))}else Y=await this.toolExecutor.executeToolCalls(E.toolCalls,l);const G=Y.map(P=>({role:"tool",content:P.error?JSON.stringify({error:P.error}):JSON.stringify(P.result),tool_call_id:P.id})),$={role:"assistant",content:E.content||""};E.toolCalls&&E.toolCalls.length>0&&($.tool_calls=E.toolCalls.filter(P=>P.function.name&&P.function.name.trim().length>0).map(P=>({id:P.id,type:P.type,function:{name:P.function.name,arguments:P.function.arguments||"{}"}}))),k.push($,...G);const U=k;E=await this.handleStreamingPromptDirect({chatContext:{history:U.map(P=>({role:P.role,content:P.content,...P.tool_call_id&&{tool_call_id:P.tool_call_id},...P.tool_calls&&{tool_calls:P.tool_calls}}))},chatConfig:i,callContext:a.callContext,stream:a.stream??!0,signal:a.signal,tools:h});const L=E.content&&E.content.trim().length>0,x=E.toolCalls&&E.toolCalls.length>0;if(L&&!x)break;if(L&&x){console.warn("[AIService] Model provided content but also called tools - treating as completion");break}}const D=await this.messageProcessor.process(E,e,this.createAgentContext(r,a.callContext,{message:E}));e.hooks?.afterReceive&&await e.hooks.afterReceive(D,this.createAgentContext(r,a.callContext));const B=this.createFinalMessage(e,D);return!await this.handleUserAttention(e.role,B,a,s)&&a.pauseOnAttention?null:(s.messages.set(e.role,B),a.onAgentComplete?.(e.role,B),B)}}const Cu=new ku,Hp=Object.freeze(Object.defineProperty({__proto__:null,A:Qs,B:_a,C:Ta,K:fn,M:to,O:Ys,P:eo,S:io,T:va,W:so,a:Cu,b:Ea,c:ka,d:kr,e:ki,f:Ca,g:xa,h:Aa,i:Qe,j:Nr,k:Sa,l:oi,m:Xs,n:Zs,o:Js,p:Oa,q:no,r:$a,s:ro,t:ao,u:oo,v:gu,w:vu},Symbol.toStringTag,{value:"Module"})),xu="@kispace-io/appspace",Au="1.1.27",Tu={"@awesome.me/webawesome":"^3.0.0","@fortawesome/fontawesome-free":"^7.1.0","@fortawesome/fontawesome-svg-core":"^7.1.0","@fortawesome/free-solid-svg-icons":"^7.1.0","@langchain/textsplitters":"^1.0.0","@lit-labs/signals":"^0.1.3","@mlc-ai/web-llm":"^0.2.79","@xenova/transformers":"^2.17.2","@xterm/xterm":"^5.5.0",axios:"^1.13.1",dotenv:"^17.2.3","idb-keyval":"^6.2.2",jsonata:"^2.1.0",jszip:"^3.10.1",lit:"^3.2.1",marked:"^12.0.0 || ^16.4.1","monaco-editor":"0.55.1","pace-js":"^1.2.4","pdfjs-dist":"^4.0.0","pip-requirements-js":"^1.0.2",pyodide:"^0.27.7",rxdb:"^15.0.0",uuid:"^13.0.0","wasm-git":"^0.0.13"},Su={typescript:"^5.9.3",vite:"^7.1.12","vite-plugin-dts":"^4.5.4"},Hr={name:xu,version:Au,dependencies:Tu,devDependencies:Su},on="system.language_bundles",Ki="language";function _u(n,e){return e?n.replace(/\{(\w+)\}/g,(t,r)=>e[r]!==void 0?e[r]:t):n}class $u extends String{constructor(e,t,r,i){super(""),this.i18nService=e,this.namespace=t,this.key=r,this.params=i}toString(){const e=this.i18nService.currentLanguageSignal.get();return this.cachedValue!==void 0&&this.cachedLanguage===e?this.cachedValue:(this.cachedValue=this.i18nService.translate(this.namespace,this.key,this.params),this.cachedLanguage=e,this.cachedValue)}valueOf(){return this.toString()}[Symbol.toPrimitive](e){if(e==="number"){const t=Number(this.toString());return isNaN(t)?0:t}return this.toString()}toJSON(){return this.toString()}}const lo=class yr{constructor(){this.translationCache=new Map,this.currentLanguageSignal=an(this.getBrowserLanguage()),this.languageContributionsSignal=an([]),this.initialize()}getBrowserLanguage(){return(navigator.language||navigator.languages?.[0]||yr.DEFAULT_LANGUAGE).split("-")[0].toLowerCase()}async initializeLanguage(){return await ze.get(Ki)||this.getBrowserLanguage()}async updateLanguageFromSettings(){const e=await this.initializeLanguage();this.currentLanguageSignal.set(e)}getPrimaryLanguage(e){return e.split("-")[0].toLowerCase()}updateLanguageContributions(){const e=Q.getContributions(on);this.languageContributionsSignal.set(e)}createCacheKey(e,t){return`${e}:${t}`}mergeTranslationsForLanguage(e,t,r){const i=this.createCacheKey(t,r),a=this.translationCache.get(i);if(a!==void 0)return a;const s={};for(const l of e){if(l.namespace!==t)continue;let u;l.translations&&l.language===r?u=l.translations:l[r]&&typeof l[r]=="object"&&(u=l[r]),u&&Object.assign(s,u)}return this.translationCache.set(i,s),s}invalidateTranslationCache(){this.translationCache.clear()}translate(e,t,r){const i=this.currentLanguageSignal.get(),a=this.getPrimaryLanguage(i),s=this.languageContributionsSignal.get();let l;const u=this.mergeTranslationsForLanguage(s,e,i);if(u[t])l=u[t];else{const h=i!==a?this.mergeTranslationsForLanguage(s,e,a):u;if(h[t])l=h[t];else if(a!==yr.DEFAULT_LANGUAGE&&i!==yr.DEFAULT_LANGUAGE){const T=this.mergeTranslationsForLanguage(s,e,yr.DEFAULT_LANGUAGE);T[t]&&(l=T[t])}}return l?_u(l,r):t}initialize(){He(rn,async e=>{const t=e?.[Ki]||this.getBrowserLanguage();this.currentLanguageSignal.set(t),this.invalidateTranslationCache()}),He(jt,e=>{e.target===on&&(this.invalidateTranslationCache(),this.updateLanguageContributions())}),this.updateLanguageFromSettings(),this.updateLanguageContributions()}i18n(e){return(t,r)=>this.translate(e,t,r)}i18nLazy(e){return(t,r)=>new $u(this,e,t,r)}};lo.DEFAULT_LANGUAGE="en";let Ou=lo;const Mr=new Ou;bt.put("i18nService",Mr);const co=Mr.currentLanguageSignal,Du=Mr.languageContributionsSignal,Dn=n=>Mr.i18n(n),Ru=n=>Mr.i18nLazy(n),Iu="filebrowser",Lu={CONNECT_WORKSPACE:"Connect Workspace...",RELOAD_WORKSPACE:"Reload workspace folder",CREATE_NEW:"Create new...",RENAME_RESOURCE:"Rename selected resource",DELETE_RESOURCE:"Delete selected resource",OPEN:"Open",RENAME:"Rename",DELETE:"Delete",FILE:"File",FOLDER:"Folder",FILE_EXISTS_OVERWRITE:'File "{fileName}" already exists. Do you want to overwrite it?',SELECT_WORKSPACE:"Select a workspace.",DROP_FILES_HERE:"📁 Drop files here"},Pu={CONNECT_WORKSPACE:"Arbeitsbereich verbinden...",RELOAD_WORKSPACE:"Arbeitsbereich-Ordner neu laden",CREATE_NEW:"Neu erstellen...",RENAME_RESOURCE:"Ausgewählte Ressource umbenennen",DELETE_RESOURCE:"Ausgewählte Ressource löschen",OPEN:"Öffnen",RENAME:"Umbenennen",DELETE:"Löschen",FILE:"Datei",FOLDER:"Ordner",FILE_EXISTS_OVERWRITE:'Die Datei "{fileName}" existiert bereits. Möchten Sie sie überschreiben?',SELECT_WORKSPACE:"Wählen Sie einen Arbeitsbereich aus.",DROP_FILES_HERE:"📁 Dateien hier ablegen"},Nu={namespace:Iu,en:Lu,de:Pu},Mu="extensions",Uu={FILTER_PLACEHOLDER:"Filter extensions...",INSTALLED:"Installed",AVAILABLE:"Available",NO_MATCHES:'No extensions match "{filterText}"',EXTERNAL_EXTENSION:"External Extension",UNINSTALL:"Uninstall (requires restart)",REQUIRED_HINT:"This extension is required by the current app and cannot be uninstalled",INSTALL:"Install",EXPERIMENTAL:"This is an experimental extension!",VERSION:"Version:",AUTHOR:"Author:",DEPENDENCIES:"Dependencies",NOT_INSTALLED:"Not Installed",DEPENDENCIES_HINT:"Dependencies are automatically installed when this extension is enabled.",DISABLE_TITLE:"Disable this extension",ENABLE_TITLE:"Enable this extension",EXT_GIT_NAME:"Git Support",EXT_GIT_DESC:"Git commands and UI elements",EXT_GITHUB_SERVICE_NAME:"GitHub Service",EXT_GITHUB_SERVICE_DESC:"GitHub API service for fetching release information",EXT_PYTERMINAL_NAME:"Python terminal",EXT_PYTERMINAL_DESC:"Python terminal view",EXT_LINUXTERMINAL_NAME:"Linux terminal",EXT_LINUXTERMINAL_DESC:"Linux terminal view",EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"In-Browser LLM inference",EXT_P12SPLITTER_NAME:".p12 file splitter",EXT_P12SPLITTER_DESC:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",EXT_PYTHONPACKAGEMANAGER_NAME:"Python Package Manager",EXT_PYTHONPACKAGEMANAGER_DESC:"Manage Python packages for notebooks and other Python-based extensions",EXT_NOTEBOOK_NAME:"Jupyter-like Notebook Editor",EXT_NOTEBOOK_DESC:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",EXT_COMMANDPALETTE_NAME:"Command Palette",EXT_COMMANDPALETTE_DESC:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",EXT_DOWNLOAD_NAME:"Download Files",EXT_DOWNLOAD_DESC:"Download files from URLs to the workspace",EXT_UNZIP_NAME:"Unzip Archives",EXT_UNZIP_DESC:"Extract zip archives to the workspace",EXT_MDEDITOR_NAME:"Markdown Editor",EXT_MDEDITOR_DESC:"View and render Markdown (.md) files",EXT_MEDIAVIEWER_NAME:"Media Viewer",EXT_MEDIAVIEWER_DESC:"View PDF, image, and HTML files in the browser",EXT_MONACO_NAME:"Monaco Code Editor",EXT_MONACO_DESC:"Code editor with syntax highlighting, code completion, and Python execution support",EXT_MEMORYUSAGE_NAME:"Memory Usage Monitor",EXT_MEMORYUSAGE_DESC:"Displays JavaScript heap memory usage in the bottom toolbar",EXT_WEBDAV_NAME:"WebDAV Workspace",EXT_WEBDAV_DESC:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",EXT_SETTINGS_TREE_NAME:"Settings Tree Editor",EXT_SETTINGS_TREE_DESC:"Tree-based editor for settings with in-place editing",EXT_IN_BROWSER_ML_NAME:"In-Browser ML",EXT_IN_BROWSER_ML_DESC:"In-browser machine learning service using transformers.js for specialized tasks (zero-shot classification, embeddings, etc.)",EXT_AI_SYSTEM_NAME:"AI System",EXT_AI_SYSTEM_DESC:"Modern AI service with streaming support and agent workflows",EXT_RAG_SYSTEM_NAME:"RAG System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation system for document indexing, search and retrieval",EXT_HOWTO_NAME:"HowTo System",EXT_HOWTO_DESC:"Step-by-step workflow system with pre and post condition checks"},zu={FILTER_PLACEHOLDER:"Erweiterungen filtern...",INSTALLED:"Installiert",AVAILABLE:"Verfügbar",NO_MATCHES:'Keine Erweiterungen entsprechen "{filterText}"',EXTERNAL_EXTENSION:"Externe Erweiterung",UNINSTALL:"Deinstallieren (Neustart erforderlich)",REQUIRED_HINT:"Diese Erweiterung ist für die aktuelle App erforderlich und kann nicht deinstalliert werden",INSTALL:"Installieren",EXPERIMENTAL:"Dies ist eine experimentelle Erweiterung!",VERSION:"Version:",AUTHOR:"Autor:",DEPENDENCIES:"Abhängigkeiten",NOT_INSTALLED:"Nicht installiert",DEPENDENCIES_HINT:"Abhängigkeiten werden automatisch installiert, wenn diese Erweiterung aktiviert wird.",DISABLE_TITLE:"Diese Erweiterung deaktivieren",ENABLE_TITLE:"Diese Erweiterung aktivieren",EXT_GIT_NAME:"Git-Unterstützung",EXT_GIT_DESC:"Git-Befehle und UI-Elemente",EXT_GITHUB_SERVICE_NAME:"GitHub-Service",EXT_GITHUB_SERVICE_DESC:"GitHub-API-Service zum Abrufen von Release-Informationen",EXT_PYTERMINAL_NAME:"Python-Terminal",EXT_PYTERMINAL_DESC:"Python-Terminalansicht",EXT_LINUXTERMINAL_NAME:"Linux-Terminal",EXT_LINUXTERMINAL_DESC:"Linux-Terminalansicht",EXT_WEBLLM_NAME:"WebLLM",EXT_WEBLLM_DESC:"LLM-Inferenz im Browser",EXT_P12SPLITTER_NAME:".p12-Datei-Splitter",EXT_P12SPLITTER_DESC:"Fügt einen Befehl hinzu, um eine .p12-Datei in private/öffentliche und zusätzliche .pem-Dateien zu trennen",EXT_PYTHONPACKAGEMANAGER_NAME:"Python-Paket-Manager",EXT_PYTHONPACKAGEMANAGER_DESC:"Verwaltet Python-Pakete für Notebooks und andere Python-basierte Erweiterungen",EXT_NOTEBOOK_NAME:"Jupyter-ähnlicher Notebook-Editor",EXT_NOTEBOOK_DESC:"Anzeigen und Ausführen von Jupyter-ähnlichen Notebooks (.ipynb) mit Python-Codeausführung und Markdown-Rendering",EXT_COMMANDPALETTE_NAME:"Befehls-Palette",EXT_COMMANDPALETTE_DESC:"VS Code-ähnliche Befehls-Palette oben in der Mitte für schnelle Befehlsausführung (Strg+Umschalt+P)",EXT_DOWNLOAD_NAME:"Dateien herunterladen",EXT_DOWNLOAD_DESC:"Dateien von URLs in den Arbeitsbereich herunterladen",EXT_UNZIP_NAME:"Archive entpacken",EXT_UNZIP_DESC:"Zip-Archive in den Arbeitsbereich extrahieren",EXT_MDEDITOR_NAME:"Markdown-Editor",EXT_MDEDITOR_DESC:"Anzeigen und Rendern von Markdown (.md) Dateien",EXT_MEDIAVIEWER_NAME:"Medien-Viewer",EXT_MEDIAVIEWER_DESC:"PDF-, Bild- und HTML-Dateien im Browser anzeigen",EXT_MONACO_NAME:"Monaco-Code-Editor",EXT_MONACO_DESC:"Code-Editor mit Syntaxhervorhebung, Code-Vervollständigung und Python-Ausführungsunterstützung",EXT_MEMORYUSAGE_NAME:"Speicherverbrauch-Monitor",EXT_MEMORYUSAGE_DESC:"Zeigt die JavaScript-Heap-Speichernutzung in der unteren Symbolleiste an",EXT_WEBDAV_NAME:"WebDAV-Arbeitsbereich",EXT_WEBDAV_DESC:"Verbinden Sie sich mit WebDAV-Servern (Nextcloud, ownCloud) als Arbeitsbereichsordner für Cloud-Speicher-Integration",EXT_SETTINGS_TREE_NAME:"Einstellungs-Baum-Editor",EXT_SETTINGS_TREE_DESC:"Baumbasierter Editor für Einstellungen mit direkter Bearbeitung",EXT_IN_BROWSER_ML_NAME:"ML im Browser",EXT_IN_BROWSER_ML_DESC:"Maschinelles Lernen im Browser mit transformers.js für spezialisierte Aufgaben (Zero-Shot-Klassifizierung, Embeddings usw.)",EXT_AI_SYSTEM_NAME:"KI-System",EXT_AI_SYSTEM_DESC:"Modernes KI-Service mit Streaming-Unterstützung und Agent-Workflows",EXT_RAG_SYSTEM_NAME:"RAG-System",EXT_RAG_SYSTEM_DESC:"Retrieval-Augmented Generation System für Dokumentenindizierung, Suche und Abruf",EXT_HOWTO_NAME:"HowTo-System",EXT_HOWTO_DESC:"Schritt-für-Schritt-Workflow-System mit Vor- und Nachbedingungsprüfungen"},Fu={namespace:Mu,en:Uu,de:zu},Wu="tasks",Gu={ACTIVE_TASKS:"Active Tasks",ACTIVE_TASKS_TITLE:"Active tasks: {taskCount}. Click to view details."},qu={ACTIVE_TASKS:"Aktive Aufgaben",ACTIVE_TASKS_TITLE:"Aktive Aufgaben: {taskCount}. Klicken Sie, um Details anzuzeigen."},Bu={namespace:Wu,en:Gu,de:qu},ju="workspace",Vu={NO_WORKSPACE:"<no workspace>",LOAD_WORKSPACE:"Load workspace"},Hu={NO_WORKSPACE:"<kein Arbeitsbereich>",LOAD_WORKSPACE:"Arbeitsbereich laden"},Xu={namespace:ju,en:Vu,de:Hu},Ku="fastviews",Yu={FAST_VIEWS:"Fast Views"},Zu={FAST_VIEWS:"Schnellansichten"},Ju={namespace:Ku,en:Yu,de:Zu},Qu="logterminal",ed={ALL_LOGS:"All logs",ALL:"All",INFO_LOGS:"Info logs",INFO:"Info",WARNING_LOGS:"Warning logs",WARNINGS:"Warnings",ERROR_LOGS:"Error logs",ERRORS:"Errors",DEBUG_LOGS:"Debug logs",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Auto-scroll enabled",AUTO_SCROLL_DISABLED:"Auto-scroll disabled",AUTO_SCROLL:"Auto-scroll",MANUAL:"Manual",CLEAR_LOGS:"Clear logs",CLEAR:"Clear",NO_LOG_MESSAGES:"No log messages"},td={ALL_LOGS:"Alle Protokolle",ALL:"Alle",INFO_LOGS:"Info-Protokolle",INFO:"Info",WARNING_LOGS:"Warnungsprotokolle",WARNINGS:"Warnungen",ERROR_LOGS:"Fehlerprotokolle",ERRORS:"Fehler",DEBUG_LOGS:"Debug-Protokolle",DEBUG:"Debug",AUTO_SCROLL_ENABLED:"Automatisches Scrollen aktiviert",AUTO_SCROLL_DISABLED:"Automatisches Scrollen deaktiviert",AUTO_SCROLL:"Automatisches Scrollen",MANUAL:"Manuell",CLEAR_LOGS:"Protokolle löschen",CLEAR:"Löschen",NO_LOG_MESSAGES:"Keine Protokollnachrichten"},nd={namespace:Qu,en:ed,de:td},rd="partname",id={NO_PART:"<no part>",ACTIVE_PART:"Active part"},ad={NO_PART:"<kein Bereich>",ACTIVE_PART:"Aktiver Bereich"},sd={namespace:rd,en:id,de:ad};Q.registerContribution(on,Nu);Q.registerContribution(on,Fu);Q.registerContribution(on,Bu);Q.registerContribution(on,Xu);Q.registerContribution(on,Ju);Q.registerContribution(on,nd);Q.registerContribution(on,sd);class od{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=ye.listCommands();Object.values(e).forEach(t=>{t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)})}watchCommandRegistry(){const e=ye.registerCommand.bind(ye);ye.registerCommand=t=>{e(t),t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const t=e.toUpperCase().split("+").map(s=>s.trim());if(t.length===0)return null;const r={ctrl:!1,alt:!1,shift:!1,meta:!1},i=t[t.length-1],a=t.slice(0,-1);for(const s of a)switch(s){case"CTRL":case"CONTROL":r.ctrl=!0;break;case"ALT":case"OPTION":r.alt=!0;break;case"SHIFT":r.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":r.meta=!0;break;default:$e.warn(`Unknown modifier: ${s}`)}return r.key=this.normalizeKey(i),r}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const t=[];return e.ctrl&&t.push("ctrl"),e.alt&&t.push("alt"),e.shift&&t.push("shift"),e.meta&&t.push("meta"),t.sort(),`${t.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,t){const r=this.parseKeyBinding(t);if(!r)return $e.error(`Invalid key binding: ${t}`),!1;r.commandId=e;const i=this.getBindingKey(r);this.bindings.has(i)||this.bindings.set(i,[]);const a=this.bindings.get(i);return a.find(l=>l.commandId===e)?($e.error(`Key binding ${t} already registered for command ${e}`),!1):(a.push(r),$e.debug(`Key binding registered: ${t} -> ${e}`),!0)}unregisterKeyBinding(e,t){if(t){const r=this.parseKeyBinding(t);if(r){const i=this.getBindingKey(r),a=this.bindings.get(i);if(a){const s=a.filter(l=>l.commandId!==e);s.length===0?this.bindings.delete(i):this.bindings.set(i,s)}}}else for(const[r,i]of this.bindings.entries()){const a=i.filter(s=>s.commandId!==e);a.length===0?this.bindings.delete(r):this.bindings.set(r,a)}}getKeyBindingsForCommand(e){const t=[];for(const r of this.bindings.values())for(const i of r)i.commandId===e&&t.push(this.formatKeyBinding(i));return t}formatKeyBinding(e){const t=[];e.ctrl&&t.push("Ctrl"),e.alt&&t.push("Alt"),e.shift&&t.push("Shift"),e.meta&&t.push("Cmd");let r=e.key;return r.length===1?r=r.toUpperCase():r=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase(),t.push(r),t.join("+")}handleKeyDown(e){if(!this.enabled)return;const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)){const s=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&s==="P"))return}const r={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},i=this.getBindingKey(r),a=this.bindings.get(i);if(a&&a.length>0){const s=a[0];try{e.preventDefault(),e.stopPropagation();const l=ye.createExecutionContext({});ye.execute(s.commandId,l),$e.info(`Executed command via key binding: ${s.commandId}`)}catch(l){$e.error(`Failed to execute command ${s.commandId}: ${l.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}$e.debug("KeyBindingManager initializing...");const uo=new od;$e.debug("KeyBindingManager initialized");bt.put("keyBindingManager",uo);const ns=(n,e)=>!n.leaf&&e.leaf?-1:n.leaf&&!e.leaf?1:n.label.localeCompare(e.label);class ld{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,He(Vn,()=>{}),He(jt,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=Q.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((t,r)=>{const i=t.priority??0,a=r.priority??0;return a!==i?a-i:t.label.localeCompare(r.label)}),this.cachedIconContributions}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const t=a=>{const s=a.detail;s&&Array.from(s.querySelectorAll("*")).filter(u=>u instanceof mt).forEach(u=>{Re.set(u),u.isEditor&&Pt.set(u)})};e.addEventListener("tab-shown",t);const r=a=>{const s=a.detail;Array.from(s.querySelectorAll("*")).filter(u=>u instanceof mt).forEach(u=>{Re.get()==u&&Re.set(null),Pt.get()==u&&Pt.set(null)})};e.addEventListener("tab-closed",r);const i=a=>{const l=a.closest("wa-tab-panel").getAttribute("name");e.markDirty(l,a.isDirty())};this.signalCleanup=Hn(Ar,i)}registerEditorInputHandler(e){this.editorInputHandlers.push({definition:e,initialized:!1}),this.editorInputHandlers.sort((t,r)=>{const i=t.definition.ranking??0;return(r.definition.ranking??0)-i})}async ensureHandlerInitialized(e){const t=e.definition;!t.lazyInit||e.initialized||(e.lazyInitPromise||(e.lazyInitPromise=Promise.resolve(t.lazyInit()).then(()=>{e.initialized=!0,e.lazyInitPromise=void 0}).catch(r=>{throw e.lazyInitPromise=void 0,r})),await e.lazyInitPromise)}async handleInput(e){for(let t=0;t<this.editorInputHandlers.length;t++){const r=this.editorInputHandlers[t],i=r.definition;if(i.canHandle(e))return await this.ensureHandlerInitialized(r),await i.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${xn}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const t=this.getEditorArea();if(!t){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(t),t.has(e.key)){t.activate(e.key);return}t.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}getFileIcon(e){const t=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),r=this.getSortedIconContributions();if(r.length===0)return"file";for(const i of r)if(i.mappings&&i.mappings[t])return i.mappings[t];return"file"}}const vn=new ld;bt.put("editorRegistry",vn);Q.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});var cd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,po=(n,e,t,r)=>{for(var i=r>1?void 0:r?ud(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&cd(e,t,i),i};const kt=Dn("filebrowser");let li=class extends mt{constructor(){super(...arguments),this.treeRef=Yt(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace(),He(jt,n=>{n.target==="system.icons"&&this.requestUpdate()}),this.subscribe(Gt,n=>this.onWorkspaceChanged(n)),this.subscribe(Vn,n=>this.onWorkspaceConnected(n))}firstUpdated(n){super.firstUpdated(n),this.setupDragAndDrop()}updated(n){super.updated(n),n.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const n=await Je.getWorkspace();n?await this.loadWorkspace(n):ye.execute("help")}renderToolbar(){const n=It.get()instanceof ei;return S`
            <k-command icon="folder-open" title="${kt("CONNECT_WORKSPACE")}" dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="${kt("RELOAD_WORKSPACE")}"></k-command>
            <k-command cmd="create_file" icon="plus" title="${kt("CREATE_NEW")}" dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!n} title="${kt("RENAME_RESOURCE")}"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!n} title="${kt("DELETE_RESOURCE")}"></k-command>
        `}renderContextMenu(){const n=It.get()instanceof ei;return S`
            <k-command cmd="open_editor" icon="folder-open">${kt("OPEN")}</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">${kt("CREATE_NEW")}</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!n}>${kt("RENAME")}</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!n}>${kt("DELETE")}</k-command>
        `}async onWorkspaceChanged(n){It.set(void 0),await this.loadWorkspace(n),await this.syncTreeSelection()}async onWorkspaceConnected(n){await this.loadWorkspace(n)}async loadWorkspace(n){this.workspaceDir=n,n?this.root=await this.resourceToTreeNode(n,!0):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&It.set(e[0].model?.data)}async resourceToTreeNode(n,e=!1){const t=n instanceof At,r={data:n,label:n.getName(),leaf:t,children:[]};if(n instanceof Gn&&e){for(const i of await n.listChildren(!1)){const a=await this.resourceToTreeNode(i,!1);r.children.push(a)}r.children.sort(ns)}return r}createTreeItems(n,e=!1){if(!n)return S``;const t=!n.leaf&&n.children.length===0,r=n.data,i=r instanceof At,a=i?vn.getFileIcon(r.getName()):n.icon||"folder-open";return S`
            <wa-tree-item 
                draggable=${i}
                @dragstart=${i?this.nobubble(s=>this.onDragStart(s,r)):void 0}
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(s=>this.onLazyLoad(s,n))}
                .model=${n} 
                ?expanded=${e}
                ?lazy=${t}>
                <span><wa-icon name=${a} label="${n.leaf?kt("FILE"):kt("FOLDER")}"></wa-icon> ${n.label}</span>
                ${n.children.map(s=>this.createTreeItems(s,!1))}
            </wa-tree-item>`}onDragStart(n,e){if(!n.dataTransfer)return;const t=e.getWorkspacePath(),r=e.getName();if(n.dataTransfer.effectAllowed="copy",n.dataTransfer.setData("text/plain",t),n.dataTransfer.setData("application/x-workspace-file",t),n.dataTransfer.setData("text/uri-list",t),n.dataTransfer.setDragImage){const i=document.createElement("div");i.textContent=r,i.style.position="absolute",i.style.top="-1000px",i.style.padding="4px 8px",i.style.background="var(--wa-color-neutral-10)",i.style.border="1px solid var(--wa-color-neutral-30)",i.style.borderRadius="4px",document.body.appendChild(i),n.dataTransfer.setDragImage(i,0,0),setTimeout(()=>document.body.removeChild(i),0)}}async onLazyLoad(n,e){const t=e.data;t instanceof Gn&&e.children.length===0&&await this.loadNodeChildren(e,t)}async loadNodeChildren(n,e){if(!this.loadingNodes.has(n)){this.loadingNodes.add(n);try{for(const t of await e.listChildren(!1)){au&&t.getName().startsWith(".");const r=await this.resourceToTreeNode(t,!1);n.children.push(r)}n.children.sort(ns),this.requestUpdate()}catch(t){console.error("Failed to load directory children:",t)}finally{this.loadingNodes.delete(n)}}}async onFileDoubleClicked(n){const t=n.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:t})}onSelectionChanged(n){const e=n.detail.selection;if(e&&e.length>0){const t=e[0].model;It.set(t.data)}else It.set(void 0)}setupDragAndDrop(){const n=this.treeRef.value;if(!n)return;const e=a=>{if(!a.dataTransfer?.types.includes("Files"))return;a.preventDefault(),a.dataTransfer.dropEffect="copy",n.classList.add("drag-over");const l=a.target.closest("wa-tree-item");l&&l!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=l,l.classList.add("drop-target"))},t=a=>{a.dataTransfer?.types.includes("Files")&&(a.preventDefault(),n.classList.add("drag-over"))},r=a=>{const s=n.getBoundingClientRect(),l=a.clientX,u=a.clientY;(l<=s.left||l>=s.right||u<=s.top||u>=s.bottom)&&(n.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async a=>{if(a.preventDefault(),n.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!a.dataTransfer||!this.workspaceDir)return;const s=Array.from(a.dataTransfer.files);if(s.length===0)return;const l=await this.getDropTarget(a);await this.handleFilesDrop(s,l)};n.removeEventListener("dragover",e),n.removeEventListener("dragenter",t),n.removeEventListener("dragleave",r),n.removeEventListener("drop",i),n.addEventListener("dragover",e),n.addEventListener("dragenter",t),n.addEventListener("dragleave",r),n.addEventListener("drop",i)}async getDropTarget(n){const t=n.target.closest("wa-tree-item");if(t){const i=t.model.data;if(i instanceof Gn)return i;const a=i.getParent();if(a)return a}return this.workspaceDir}async handleFilesDrop(n,e){const t=n.length;let r=0,i=0,a=0;for(const s of n)try{const l=this.buildTargetPath(e,s.name);if(await this.workspaceDir.getResource(l)&&!await Lr(kt("FILE_EXISTS_OVERWRITE",{fileName:s.name}))){a++;continue}await(await this.workspaceDir.getResource(l,{create:!0})).saveContents(s),r++}catch(l){console.error(`Failed to upload ${s.name}:`,l),i++}console.log(`Uploaded ${r}/${t} files${a>0?`, ${a} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(n,e){const t=n.getWorkspacePath();return t?`${t}/${e}`:e}render(){return S`
            <div class="tree" ${Zt(this.treeRef)} style="--drop-files-text: '${kt("DROP_FILES_HERE")}'">
                ${gt(!this.workspaceDir,()=>S`
                    <k-no-content message="${kt("SELECT_WORKSPACE")}"></k-no-content>`,()=>S`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};li.styles=tt`
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
            content: var(--drop-files-text);
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
    `;po([Be()],li.prototype,"root",2);li=po([qe("k-filebrowser")],li);var dd=Object.getOwnPropertyDescriptor,pd=(n,e,t,r)=>{for(var i=r>1?void 0:r?dd(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=s(i)||i);return i};const Yi=Dn("tasks");Q.registerContribution(ba,{html:"<k-tasks></k-tasks>"});let pr=null;function ho(){return pr||(pr=document.createElement("div"),pr.id="progress-dialog-container",document.body.appendChild(pr)),pr}function rs(){return ho().querySelector("wa-dialog")}function hd(){fo(!0)}function fo(n=!1){const e=ho(),t=$r.getActiveTasks();if(t.length===0){qt(S``,e);return}const i=rs();if(!(n||i?.open===!0))return;const s=()=>{const h=rs();h&&(h.open=!1)},l=()=>{qt(S``,e)},u=S`
        <wa-dialog 
            label="${Yi("ACTIVE_TASKS")}" 
            open
            light-dismiss
            style="--width: 600px;"
            @wa-request-close=${s}
            @wa-after-hide=${l}
        >
            <style>
                .progress-dialog-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .task-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: var(--wa-color-neutral-10);
                    border-radius: 8px;
                    border: 1px solid var(--wa-color-neutral-20);
                }
                
                :host-context(.wa-light) .task-item {
                    background: var(--wa-color-neutral-95);
                    border: 1px solid var(--wa-color-neutral-85);
                }
                
                .task-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .task-name {
                    font-weight: 600;
                    font-size: 1rem;
                    color: var(--wa-color-neutral-90);
                }
                
                :host-context(.wa-light) .task-name {
                    color: var(--wa-color-neutral-10);
                }
                
                .task-message {
                    font-size: 0.875rem;
                    color: var(--wa-color-neutral-70);
                    margin-top: 0.25rem;
                }
                
                :host-context(.wa-light) .task-message {
                    color: var(--wa-color-neutral-30);
                }
                
                .task-progress {
                    margin-top: 0.5rem;
                }
                
                wa-progress-bar {
                    --track-height: 1.5rem;
                }
                
                wa-progress-bar::part(label) {
                    text-align: center;
                    width: 100%;
                    font-size: 0.875rem;
                }
                
                .no-tasks {
                    text-align: center;
                    padding: 2rem;
                    color: var(--wa-color-neutral-60);
                }
                
                :host-context(.wa-light) .no-tasks {
                    color: var(--wa-color-neutral-40);
                }
            </style>
            
            <div class="progress-dialog-content">
                ${t.map(h=>{const T=h.progress>=0||h.totalSteps>0,E=h.progress>=0?h.progress:h.totalSteps>0?Math.round(h.currentStep/h.totalSteps*100):0,m=h.progress<0&&h.totalSteps>0;return S`
                        <div class="task-item">
                            <div class="task-header">
                                <wa-icon name="hourglass" style="color: var(--wa-color-warning-fill-loud);"></wa-icon>
                                <div style="flex: 1;">
                                    <div class="task-name">${h.name}</div>
                                    ${h.message?S`
                                        <div class="task-message">${h.message}</div>
                                    `:""}
                                </div>
                            </div>
                            <div class="task-progress">
                                ${T?S`
                                    <wa-progress-bar value="${E}">
                                        ${m?`${h.currentStep}/${h.totalSteps} - `:""}${E}%
                                    </wa-progress-bar>
                                `:S`
                                    <wa-progress-bar indeterminate></wa-progress-bar>
                                `}
                            </div>
                        </div>
                    `})}
            </div>
        </wa-dialog>
    `;qt(u,e)}let Zi=class extends mt{doBeforeUI(){this.watch(qi,()=>{fo(),this.requestUpdate()})}handleIndicatorClick(){hd()}render(){qi.get();const e=$r.getActiveTasks().length;return e===0?S``:S`
            <div class="task-indicator" @click=${this.handleIndicatorClick} title="${Yi("ACTIVE_TASKS_TITLE",{taskCount:e.toString()})}">
                <wa-spinner 
                    style="font-size: 1rem; --indicator-color: var(--wa-color-warning-fill-loud);" 
                    label="${Yi("ACTIVE_TASKS")}"
                ></wa-spinner>
                <span class="task-count">${e}</span>
            </div>
        `}};Zi.styles=tt`
        :host {
            display: flex;
            align-items: center;
        }
        
        .task-indicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .task-indicator:hover {
            background: var(--wa-color-neutral-15);
        }
        
        :host-context(.wa-light) .task-indicator:hover {
            background: var(--wa-color-neutral-85);
        }
        
        .task-count {
            font-size: 0.875rem;
            color: var(--wa-color-neutral-70);
        }
        
        :host-context(.wa-light) .task-count {
            color: var(--wa-color-neutral-30);
        }
    `;Zi=pd([qe("k-tasks")],Zi);var fd=Object.getOwnPropertyDescriptor,gd=(n,e,t,r)=>{for(var i=r>1?void 0:r?fd(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=s(i)||i);return i};const Pi=Dn("workspace");let is=class extends ln{constructor(){super(...arguments),this.workspaceName=Pi("NO_WORKSPACE")}doInitUI(){this.updateWorkspaceName(),He(Vn,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Je.getWorkspace().then(n=>{this.workspaceName=n?.getName()||Pi("NO_WORKSPACE"),this.requestUpdate()})}handleLoadWorkspace(){ye.execute("load_workspace",{source:this})}render(){return S`
            <wa-button 
                appearance="plain"
                size="small"
                title="${Pi("LOAD_WORKSPACE")}"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};is=gd([qe("k-workspace-name")],is);var md=Object.getOwnPropertyDescriptor,yd=(n,e,t,r)=>{for(var i=r>1?void 0:r?md(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=s(i)||i);return i};const Ni=Dn("partname");Q.registerContribution(ba,{html:"<k-part-name></k-part-name>"});let as=class extends ln{doBeforeUI(){this.watch(Re,()=>{this.requestUpdate()})}getPartName(){const n=Re.get();return n&&(n.tabContribution?.label||n.getAttribute("id"))||Ni("NO_PART")}render(){const e=Re.get()?.tabContribution?.icon||"box";return S`
            <wa-button 
                appearance="plain"
                size="small"
                title="${Ni("ACTIVE_PART")}">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};as=yd([qe("k-part-name")],as);var bd=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,Da=(n,e,t,r)=>{for(var i=r>1?void 0:r?wd(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&bd(e,t,i),i};const ot=Dn("extensions");let Sr=class extends mt{constructor(){super(...arguments),this.filterText=""}doInitUI(){He(gr,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(n){fe.enable(n.id,!0),this.requestUpdate()}disable(n){fe.disable(n.id,!0),this.requestUpdate()}isExtensionRequired(n){const e=wn.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(n)}selectionChanged(n){const e=n.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return fe.getExtensions();const n=this.filterText.toLowerCase();return fe.getExtensions().filter(e=>String(e.name).toLowerCase().includes(n)||(e.description?String(e.description).toLowerCase().includes(n):!1)||e.id.toLowerCase().includes(n))}getGroupedExtensions(){const n=this.getFilteredExtensions(),e=[],t=[];return n.forEach(r=>{fe.isEnabled(r.id)?e.push(r):t.push(r)}),e.sort((r,i)=>String(r.name).localeCompare(String(i.name))),t.sort((r,i)=>String(r.name).localeCompare(String(i.name))),{enabled:e,available:t}}isExternalExtension(n){return n.external===!0}handleFilterInput(n){this.filterText=n.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return S`
            <wa-input
                placeholder="${ot("FILTER_PLACEHOLDER")}"
                .value=${this.filterText}
                @input=${n=>this.handleFilterInput(n)}
                @wa-clear=${()=>this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
        `}render(){const n=this.getGroupedExtensions(),e=n.enabled.length>0||n.available.length>0;return S`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${e?S`
                        ${n.enabled.length>0?S`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    ${ot("INSTALLED")} (${n.enabled.length})
                                </span>
                                ${n.enabled.map(t=>{const r=this.isExternalExtension(t);return S`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                            <span><k-icon name="${t.icon}"></k-icon></span> ${t.name}${r?S` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                        ${n.available.length>0?S`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    ${ot("AVAILABLE")} (${n.available.length})
                                </span>
                                ${n.available.map(t=>{const r=this.isExternalExtension(t);return S`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                            <span><k-icon name="${t.icon}"></k-icon></span> ${t.name}${r?S` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                    `:""}
                    ${e?"":S`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            ${ot("NO_MATCHES",{filterText:this.filterText})}
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${gt(this.selectedExtension,t=>{const r=this.isExternalExtension(t),i=fe.isEnabled(t.id);return S`
                                <h1><k-icon name="${t.icon}"></k-icon> ${t.name}${r?" (External)":""}</h1>
                                ${gt(r,()=>S`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>${ot("EXTERNAL_EXTENSION")}</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${gt(i,()=>S`
                                        <wa-button 
                                            title="${this.isExtensionRequired(t.id)?ot("REQUIRED_HINT"):ot("DISABLE_TITLE")}" 
                                            @click="${()=>this.disable(t)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(t.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;${ot("UNINSTALL")}
                                        </wa-button>
                                        ${gt(this.isExtensionRequired(t.id),()=>S`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>${ot("REQUIRED_HINT")}</span>
                                            </div>
                                        `)}
                                    `,()=>S`
                                        <wa-button 
                                            title="${ot("ENABLE_TITLE")}" 
                                            @click="${()=>this.enable(t)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;${ot("INSTALL")}
                                        </wa-button>
                                    `)}
                                </div>

                                ${gt(t.experimental,()=>S`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>${ot("EXPERIMENTAL")}</i></small>
                                    </div>
                                `)}

                                ${gt(t.version||t.author,()=>S`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${gt(t.version,()=>S`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${ot("VERSION")} <strong>${t.version}</strong></span>
                                            </div>
                                        `)}
                                        ${gt(t.author,()=>S`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">${ot("AUTHOR")} <strong>${t.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${t.description}</p>

                                ${gt(t.dependencies&&t.dependencies.length>0,()=>S`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            ${ot("DEPENDENCIES")}
                                        </h3>
                                        <div class="dependencies-list">
                                            ${t.dependencies.map(a=>{const s=fe.getExtensions().find(u=>u.id===a),l=fe.isEnabled(a);return S`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${l?"check-circle":"circle"}" 
                                                            style="color: ${l?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        <k-icon name="${s?.icon||"puzzle-piece"}"></k-icon>
                                                        <span>${s?.name||a}</span>
                                                        ${l?"":S`
                                                            <span class="dependency-badge">${ot("NOT_INSTALLED")}</span>
                                                        `}
                                                    </div>
                                                `})}
                                        </div>
                                        <small style="opacity: 0.7; display: block; margin-top: 0.5em;">
                                            <wa-icon name="info-circle" style="font-size: 0.9em;"></wa-icon>
                                            ${ot("DEPENDENCIES_HINT")}
                                        </small>
                                    </div>
                                `)}
                            `})}
                </div>
            </wa-split-panel>
        `}};Sr.styles=tt`
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

        .marketplace-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.375rem 0.875rem;
            border-radius: 4px;
            background: var(--wa-color-primary-10);
            color: var(--wa-color-primary-70);
            font-size: 0.875rem;
            font-weight: 500;
            margin-top: 0.75rem;
            margin-bottom: 0.5rem;
            border: 1px solid var(--wa-color-primary-30);
        }
    `;Da([Be()],Sr.prototype,"selectedExtension",2);Da([Be()],Sr.prototype,"filterText",2);Sr=Da([qe("k-extensions")],Sr);var vd=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,xi=(n,e,t,r)=>{for(var i=r>1?void 0:r?Ed(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&vd(e,t,i),i};const lt=Dn("logterminal");let Yn=class extends mt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=Yt()}connectedCallback(){super.connectedCallback(),this.loadSettings(),ll(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),cl()}log(n,e,t="info"){const r={timestamp:new Date,level:t,source:n,message:e};this.messages=[...this.messages,r],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(n=>n.level===this.filter)}formatTimestamp(n){return n.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(n){switch(n){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(n){switch(n){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const n=this.messages.filter(i=>i.level==="info").length,e=this.messages.filter(i=>i.level==="warning").length,t=this.messages.filter(i=>i.level==="error").length,r=this.messages.filter(i=>i.level==="debug").length;return S`
            <k-command 
                icon="list"
                title="${lt("ALL_LOGS")}"
                appearance="${this.filter==="all"?"filled":"plain"}"
                variant="${this.filter==="all"?"brand":"neutral"}"
                .action=${()=>{this.filter="all",this.saveSettings(),this.updateToolbar()}}>
                ${lt("ALL")} (${this.messages.length})
            </k-command>

            <k-command 
                icon="circle-info"
                title="${lt("INFO_LOGS")}"
                appearance="${this.filter==="info"?"filled":"plain"}"
                variant="${this.filter==="info"?"brand":"neutral"}"
                .action=${()=>{this.filter="info",this.saveSettings(),this.updateToolbar()}}>
                ${lt("INFO")}${n>0?` (${n})`:""}
            </k-command>

            <k-command 
                icon="triangle-exclamation"
                title="${lt("WARNING_LOGS")}"
                appearance="${this.filter==="warning"?"filled":"plain"}"
                variant="${this.filter==="warning"?"brand":"neutral"}"
                .action=${()=>{this.filter="warning",this.saveSettings(),this.updateToolbar()}}>
                ${lt("WARNINGS")}${e>0?` (${e})`:""}
            </k-command>

            <k-command 
                icon="circle-xmark"
                title="${lt("ERROR_LOGS")}"
                appearance="${this.filter==="error"?"filled":"plain"}"
                variant="${this.filter==="error"?"brand":"neutral"}"
                .action=${()=>{this.filter="error",this.saveSettings(),this.updateToolbar()}}>
                ${lt("ERRORS")}${t>0?` (${t})`:""}
            </k-command>

            <k-command 
                icon="bug"
                title="${lt("DEBUG_LOGS")}"
                appearance="${this.filter==="debug"?"filled":"plain"}"
                variant="${this.filter==="debug"?"brand":"neutral"}"
                .action=${()=>{this.filter="debug",this.saveSettings(),this.updateToolbar()}}>
                ${lt("DEBUG")}${r>0?` (${r})`:""}
            </k-command>

            <wa-divider orientation="vertical"></wa-divider>

            <k-command 
                icon="arrow-down" 
                title="${this.autoScroll?lt("AUTO_SCROLL_ENABLED"):lt("AUTO_SCROLL_DISABLED")}"
                appearance="${this.autoScroll?"filled":"plain"}"
                variant="${this.autoScroll?"brand":"neutral"}"
                .action=${()=>{this.autoScroll=!this.autoScroll,this.saveSettings(),this.updateToolbar()}}>
                ${this.autoScroll?lt("AUTO_SCROLL"):lt("MANUAL")}
            </k-command>

            <k-command 
                icon="trash" 
                title="${lt("CLEAR_LOGS")}"
                .action=${()=>this.clear()}>
                ${lt("CLEAR")}
            </k-command>
        `}render(){const n=this.getFilteredMessages();return S`
            <div class="log-terminal">
                <div class="messages" ${Zt(this.containerRef)}>
                    ${n.length===0?S`<div class="empty-state">${lt("NO_LOG_MESSAGES")}</div>`:n.map(e=>S`
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
        `}async loadSettings(){const n=await this.getDialogSetting();n&&(typeof n.filter=="string"&&(n.filter==="all"||["info","warning","error","debug"].includes(n.filter))&&(this.filter=n.filter),typeof n.autoScroll=="boolean"&&(this.autoScroll=n.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};Yn.styles=tt`
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
    `;xi([Be()],Yn.prototype,"messages",2);xi([Be()],Yn.prototype,"autoScroll",2);xi([Be()],Yn.prototype,"filter",2);Yn=xi([qe("k-log-terminal")],Yn);var kd=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,St=(n,e,t,r)=>{for(var i=r>1?void 0:r?Cd(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&kd(e,t,i),i};let yt=class extends Or{constructor(){super(...arguments),this.cmd="",this.title="",this.label=!1,this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(n){if(!this.disabled){if(n&&n.stopPropagation(),this.action){this.action(n);return}if(this.cmd){const e=this.closest("wa-dropdown");e&&e.open!==void 0&&(e.open=!1),this.executeCommand(this.cmd,this.params)}}}handleSelect(n){const e=n.target;e&&e.open!==void 0&&(e.open=!1)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd||this.action)return null;const n=uo.getKeyBindingsForCommand(this.cmd);return n.length>0?n[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),He(jt,n=>{this.dropdown&&n.target===this.dropdown&&(this.dropdownContributions=n.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=Q.getContributions(this.dropdown),this.requestUpdate())}renderContribution(n){if("command"in n){const e=n,t=e.disabled?.get();return S`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    .params=${e.params||{}}
                    ?disabled="${t}">
                    ${e.label}
                </k-command>
            `}if("html"in n){const t=n.html;return t instanceof Function?t():_r(t)}return Ke}render(){const n=this.getKeybinding();return this.isInDropdown()?S`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${e=>this.handleClick(e)}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${n?S`<span class="keybinding">${n}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?S`
                <wa-dropdown 
                    placement=${this.placement}
                    @wa-select=${e=>this.handleSelect(e)}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        variant=${this.variant}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${n?`${this.title} (${n})`:this.title}>
                        <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                        <slot></slot>
                        ${this.label?this.title:Ke}
                    </wa-button>
                    
                    ${this.title?S`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:Ke}
                    
                    ${this.dropdownContributions.map(e=>this.renderContribution(e))}
                    
                    ${this.cmd?S`
                        <wa-divider></wa-divider>
                        <k-command 
                            cmd="${this.cmd}"
                            icon="${this.icon||""}"
                            .params=${this.params}
                            ?disabled=${this.disabled}>
                            <slot></slot>
                            ${this.title}
                        </k-command>
                    `:Ke}
                </wa-dropdown>
            `:S`
            <wa-button
                appearance=${this.appearance}
                variant=${this.variant}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${n?`${this.title} (${n})`:this.title}
                @click=${e=>this.handleClick(e)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};yt.styles=tt`
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
    `;St([ce()],yt.prototype,"cmd",2);St([ce({type:Object,attribute:!1})],yt.prototype,"action",2);St([ce()],yt.prototype,"title",2);St([ce()],yt.prototype,"label",2);St([ce()],yt.prototype,"icon",2);St([ce({type:Boolean})],yt.prototype,"disabled",2);St([ce()],yt.prototype,"appearance",2);St([ce()],yt.prototype,"variant",2);St([ce()],yt.prototype,"size",2);St([ce({type:Object,attribute:!1})],yt.prototype,"params",2);St([ce()],yt.prototype,"dropdown",2);St([ce()],yt.prototype,"placement",2);St([Be()],yt.prototype,"dropdownContributions",2);yt=St([qe("k-command")],yt);var xd=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,Nt=(n,e,t,r)=>{for(var i=r>1?void 0:r?Ad(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&xd(e,t,i),i};const Td=Dn("fastviews");let Tt=class extends Or{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=Yt(),this.tabsRef=Yt(),this.resizeHandleRef=Yt(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(n){if(!this.disabled)if(this.containerId){const e=document.querySelector(`k-tabs#${this.containerId}`);if(!e){console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(n)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(n)})}handleDrawerHide(){this.drawerOpen=!1}startResize(n){n.preventDefault(),n.stopPropagation();const e=this.drawerRef.value;if(!e)return;let r=(()=>{const s=e.shadowRoot?.querySelector('[part="panel"]');if(s&&s.offsetWidth>0)return s.offsetWidth;const h=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(h){const T=parseFloat(h[1]),E=h[2];if(E==="px")return T;if(E==="vw")return T/100*window.innerWidth;if(E==="vh")return T/100*window.innerHeight;if(E==="%")return T/100*window.innerWidth}return 0})();r===0&&(r=window.innerWidth*.5);const i=s=>{this.resizing&&(s.preventDefault(),s.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const l=this.resizing.startX-s.clientX,u=Math.round(this.resizing.startSize+l),h=200,T=Math.round(window.innerWidth*.9);if(u>=h&&u<=T){this.drawerSize=`${u}px`;const E=this.drawerRef.value;E&&(E.style.setProperty("--size",this.drawerSize),E.style.setProperty("transition","none"))}this.resizing.rafId=null}))},a=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const s=this.drawerRef.value;s&&s.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:n.clientX,startSize:r,handleMouseMove:i,handleMouseUp:a,rafId:null},document.addEventListener("mousemove",i,{passive:!1}),document.addEventListener("mouseup",a,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),He(jt,n=>{this.target&&n.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const n=Q.getContributions(this.target);this.tabContributions=n.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(n){const e=n.disabled?.get();return S`
            <wa-dropdown-item 
                ?disabled=${e}
                @click=${()=>this.handleTabClick(n)}>
                <k-icon name="${n.icon||""}" label="${n.label}" slot="icon"></k-icon>
                ${n.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?Ke:S`
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
                
                ${this.title?S`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:Ke}
                
                ${this.tabContributions.map(n=>this.renderTabContribution(n))}
            </wa-dropdown>

            ${this.containerId?Ke:S`
                <wa-drawer 
                    ${Zt(this.drawerRef)}
                    label="${this.title||Td("FAST_VIEWS")}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${Zt(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <k-tabs 
                        ${Zt(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            `}
        `:Ke}};Tt.styles=tt`
        :host {
            display: inline-block;
        }

        wa-drawer {
            position: relative;
        }

        wa-drawer::part(panel) {
            position: relative;
        }

        .resize-handle {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            cursor: col-resize;
            z-index: 1000;
            background: transparent;
            transition: background-color 0.2s;
            user-select: none;
            touch-action: none;
        }

        .resize-handle:hover {
            background: var(--wa-color-brand-fill-loud);
        }

        .resize-handle:active {
            background: var(--wa-color-brand-fill-loud);
        }
    `;Nt([ce()],Tt.prototype,"target",2);Nt([ce()],Tt.prototype,"title",2);Nt([ce()],Tt.prototype,"icon",2);Nt([ce({type:Boolean})],Tt.prototype,"disabled",2);Nt([ce()],Tt.prototype,"appearance",2);Nt([ce()],Tt.prototype,"size",2);Nt([ce()],Tt.prototype,"placement",2);Nt([ce()],Tt.prototype,"containerId",2);Nt([Be()],Tt.prototype,"tabContributions",2);Nt([Be()],Tt.prototype,"drawerOpen",2);Nt([Be()],Tt.prototype,"drawerSize",2);Tt=Nt([qe("k-fastviews")],Tt);var Sd=Object.getOwnPropertyDescriptor,_d=(n,e,t,r)=>{for(var i=r>1?void 0:r?Sd(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=s(i)||i);return i};function $d(){let n=document.getElementById("global-dialog-container");return n||(n=document.createElement("div"),n.id="global-dialog-container",document.body.appendChild(n)),n}const go=n=>{try{return new Intl.DisplayNames([n],{type:"language"}).of(n)||n.toUpperCase()}catch{return n.toUpperCase()}},Od=()=>{const n=Du.get(),e=new Set;for(const t of n)if(t.namespace){const r=t;for(const i in r)i!=="namespace"&&i!=="label"&&i!=="language"&&i!=="translations"&&typeof r[i]=="object"&&e.add(i)}return Array.from(e).sort()},Dd=async()=>{const n=Od(),e=co.get();return new Promise(t=>{const r=$d();let i=!1;const a=()=>{const h=r.querySelector("wa-dialog");h&&!i&&(h.open=!1)},s=()=>{i||(i=!0,qt(S``,r),t())},l=async h=>{await ze.set(Ki,h),a()},u=S`
            <wa-dialog 
                label="Select Language" 
                open 
                light-dismiss
                @wa-request-close=${a}
                @wa-after-hide=${s}>
                <style>
                    .language-list {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                        padding: 1rem;
                        min-width: 300px;
                        max-height: 400px;
                        overflow-y: auto;
                    }
                    
                    .language-item {
                        display: flex;
                        align-items: center;
                        padding: 0.75rem;
                        border-radius: var(--wa-border-radius-small);
                        cursor: pointer;
                        transition: background-color 0.2s;
                    }
                    
                    .language-item:hover {
                        background-color: var(--wa-color-neutral-fill-quiet);
                    }
                    
                    .language-item.active {
                        background-color: var(--wa-color-brand-fill-quiet);
                        font-weight: 600;
                    }
                    
                    .language-code {
                        font-family: monospace;
                        margin-right: 0.75rem;
                        min-width: 3rem;
                        color: var(--wa-color-neutral-600);
                    }
                    
                    .language-name {
                        flex: 1;
                    }
                </style>
                
                <div class="language-list">
                    ${n.map(h=>S`
                        <div 
                            class="language-item ${h===e?"active":""}"
                            @click=${()=>l(h)}>
                            <span class="language-code">${h.toUpperCase()}</span>
                            <span class="language-name">${go(h)}</span>
                        </div>
                    `)}
                </div>
            </wa-dialog>
        `;qt(u,r)})};let Ji=class extends ln{render(){const n=co.get(),e=go(n),t=`${n.toUpperCase()} ${e}`;return S`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current language: ${e}"
                @click=${()=>Dd()}>
                ${t}
            </wa-button>
        `}};Ji.styles=tt`
        :host {
            display: inline-block;
        }
    `;Ji=_d([qe("k-language-selector")],Ji);const ge=Ru("extensions");fe.registerExtension({id:"system.git",name:ge("EXT_GIT_NAME"),description:ge("EXT_GIT_DESC"),loader:()=>Pe(()=>import("./git-extension-Dj8sCney-CFF2HOlf.js"),__vite__mapDeps([5,2,1,3,4,6])),icon:"code-branch",experimental:!0});fe.registerExtension({id:"system.github-service",name:ge("EXT_GITHUB_SERVICE_NAME"),description:ge("EXT_GITHUB_SERVICE_DESC"),loader:()=>Pe(()=>import("./github-service-extension-Bwyvo7DZ-C-kuSNTI.js"),[]),icon:"code-branch"});fe.registerExtension({id:"system.pyterminal",name:ge("EXT_PYTERMINAL_NAME"),description:ge("EXT_PYTERMINAL_DESC"),loader:()=>Pe(()=>import("./pyterminal-extension-DFZtFr37-BJlqlOBh.js"),__vite__mapDeps([7,1,2,3,4,8,6])),icon:"k python",experimental:!0});fe.registerExtension({id:"system.linuxterminal",name:ge("EXT_LINUXTERMINAL_NAME"),description:ge("EXT_LINUXTERMINAL_DESC"),loader:()=>Pe(()=>import("./k-linuxterminal-EUO5ezUi-B13djloX.js"),__vite__mapDeps([9,1,2,3,4,8,6])),icon:"terminal",experimental:!0});fe.registerExtension({id:"system.webllm",name:ge("EXT_WEBLLM_NAME"),description:ge("EXT_WEBLLM_DESC"),loader:()=>Pe(()=>import("./webllmservice-CkxSBno_-CnZ0p67t.js"),__vite__mapDeps([10,2,1,3,4,6])),icon:"robot"});fe.registerExtension({id:"system.p12splitter",name:ge("EXT_P12SPLITTER_NAME"),description:ge("EXT_P12SPLITTER_DESC"),loader:()=>Pe(()=>import("./p12-splitter-BT1Fci6r-COkJ3X5A.js"),__vite__mapDeps([11,2,1,3,4,6])),icon:"certificate"});fe.registerExtension({id:"system.pythonpackagemanager",name:ge("EXT_PYTHONPACKAGEMANAGER_NAME"),description:ge("EXT_PYTHONPACKAGEMANAGER_DESC"),loader:()=>Pe(()=>import("./package-manager-extension-Bb1gA_o0-Ddix86DH.js"),__vite__mapDeps([12,1,2,3,4,6])),icon:"box"});fe.registerExtension({id:"system.notebook",name:ge("EXT_NOTEBOOK_NAME"),description:ge("EXT_NOTEBOOK_DESC"),loader:()=>Pe(()=>import("./notebook-extension-CHWcKth5-zYCus4a3.js"),__vite__mapDeps([13,2,1,3,4,6])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});fe.registerExtension({id:"system.commandpalette",name:ge("EXT_COMMANDPALETTE_NAME"),description:ge("EXT_COMMANDPALETTE_DESC"),loader:()=>Pe(()=>import("./command-palette-extension-DzUKvXEF-B6tF6jeC.js"),__vite__mapDeps([14,1,2,3,4,6])),icon:"terminal"});fe.registerExtension({id:"system.download",name:ge("EXT_DOWNLOAD_NAME"),description:ge("EXT_DOWNLOAD_DESC"),loader:()=>Pe(()=>import("./download-extension-CAdNzkzp-Be9htdeo.js"),__vite__mapDeps([15,2,1,3,4,6])),icon:"download"});fe.registerExtension({id:"system.unzip",name:ge("EXT_UNZIP_NAME"),description:ge("EXT_UNZIP_DESC"),loader:()=>Pe(()=>import("./unzip-extension-Ds1heFdp-DQfqi5ad.js"),__vite__mapDeps([16,2,1,3,4,6])),icon:"box-archive"});fe.registerExtension({id:"system.mdeditor",name:ge("EXT_MDEDITOR_NAME"),description:ge("EXT_MDEDITOR_DESC"),loader:()=>Pe(()=>import("./md-editor-extension-DKyIyPYL-C6UJ4s_O.js"),__vite__mapDeps([17,1,2,3,4,6])),icon:"book"});fe.registerExtension({id:"system.mediaviewer",name:ge("EXT_MEDIAVIEWER_NAME"),description:ge("EXT_MEDIAVIEWER_DESC"),loader:()=>Pe(()=>import("./media-viewer-extension-BTZe4U8t-BiPOP3oc.js"),__vite__mapDeps([18,1,2,3,4,6])),icon:"image"});fe.registerExtension({id:"system.monaco",name:ge("EXT_MONACO_NAME"),description:ge("EXT_MONACO_DESC"),loader:()=>Pe(()=>import("./monaco-editor-extension-BYrgxpSf-CkIiFMtj.js"),__vite__mapDeps([19,2,1,3,4,6])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});fe.registerExtension({id:"system.memoryusage",name:ge("EXT_MEMORYUSAGE_NAME"),description:ge("EXT_MEMORYUSAGE_DESC"),loader:()=>Pe(()=>import("./memory-usage-extension-DySybky--BjWQo1kT.js"),__vite__mapDeps([20,1,2,3,4,6])),icon:"microchip"});fe.registerExtension({id:"system.webdav",name:ge("EXT_WEBDAV_NAME"),description:ge("EXT_WEBDAV_DESC"),loader:()=>Pe(()=>import("./webdav-extension-IJzFhTT3-CFa2-Iyv.js"),__vite__mapDeps([21,1,2,3,4,6])),icon:"cloud"});fe.registerExtension({id:"system.settings-tree",name:ge("EXT_SETTINGS_TREE_NAME"),description:ge("EXT_SETTINGS_TREE_DESC"),loader:()=>Pe(()=>import("./settings-tree-extension-CS1vqypL-DEYyh9GD.js"),__vite__mapDeps([22,1,2,3,4,6])),icon:"sitemap"});fe.registerExtension({id:"system.in-browser-ml",name:ge("EXT_IN_BROWSER_ML_NAME"),description:ge("EXT_IN_BROWSER_ML_DESC"),loader:()=>Pe(()=>import("./in-browser-ml-extension-DzlSkaxu-DU-NA5SF.js"),__vite__mapDeps([23,2,1,3,4,6])),icon:"brain"});fe.registerExtension({id:"system.ai-system",name:ge("EXT_AI_SYSTEM_NAME"),description:ge("EXT_AI_SYSTEM_DESC"),loader:()=>Pe(()=>import("./ai-system-extension-CvZ3Jlt8-Dy7uje2-.js"),__vite__mapDeps([24,2,1,3,4,6])),icon:"robot",dependencies:["system.in-browser-ml"]});fe.registerExtension({id:"system.rag-system",name:ge("EXT_RAG_SYSTEM_NAME"),description:ge("EXT_RAG_SYSTEM_DESC"),loader:()=>Pe(()=>import("./rag-system-extension-Ce_XJD9Q-DbuxQMgS.js").then(n=>n.b),__vite__mapDeps([25,2,1,3,4])),icon:"database",experimental:!0,dependencies:["system.ai-system"]});fe.registerExtension({id:"system.howto",name:ge("EXT_HOWTO_NAME"),description:ge("EXT_HOWTO_DESC"),loader:()=>Pe(()=>import("./howto-extension-DDSNN6um-lhW9hLlL.js"),__vite__mapDeps([26,1,2,3,4,6])),icon:"list-check"});Q.registerContribution(Qe,{target:Qe,label:"Ollama (Local)",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:""}});Q.registerContribution(Qe,{target:Qe,label:"OpenWebUI (Self Hosted)",provider:{name:"openwebui",model:"gemma3:12b",chatApiEndpoint:"https://<your-server>/api/v1/chat/completion",apiKey:""}});Q.registerContribution(Qe,{target:Qe,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});Q.registerContribution(Qe,{target:Qe,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});Q.registerContribution(Qe,{target:Qe,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});Q.registerContribution(Qe,{target:Qe,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});Q.registerContribution(Qe,{target:Qe,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr",ocrModel:"mistral-ocr-latest"}});Q.registerContribution(Qe,{target:Qe,label:"LiteLLM",provider:{name:"litellm",model:"gpt-3.5-turbo",chatApiEndpoint:"https://<your-server>/v1/chat/completions",apiKey:"<your api key>"}});Q.registerContribution(Xi,{name:"filebrowser",label:"Workspace",icon:"folder-open",component:n=>S`<k-filebrowser id="${n}"></k-filebrowser>`});Q.registerContribution(Gs,{name:"aiview",label:"AI",icon:"robot",component:n=>S`<k-aiview id="${n}"></k-aiview>`});Q.registerContribution("system.fastviews-bottomend",{name:"log-terminal",label:"Log Messages",icon:"list",component:n=>S`<k-log-terminal id="${n}"></k-log-terminal>`});Q.registerContribution(Fs,{slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"});Q.registerContribution(Ei,{label:"Info",icon:"circle-info",command:"show_version_info",showLabel:!0});Q.registerContribution(Ei,{label:"Fast Views",html:'<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>'});Q.registerContribution(Ei,{label:"Language",html:()=>S`<k-language-selector></k-language-selector>`});const ct=Bt("MarketplaceRegistry"),Mi="events/marketplaceregistry/changed",ss="marketplace.catalogUrls";class Rd{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{ct.error(`Failed to refresh catalogs on init: ${e.message}`)})}),He(Mi,()=>{this.registerMarketplaceExtensions()})}async loadCatalogUrls(){try{const e=await ze.get(ss);this.catalogUrls=Array.isArray(e)?e:[],ct.debug(`Loaded ${this.catalogUrls.length} catalog URLs`)}catch(e){ct.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await ze.set(ss,this.catalogUrls),Oe(Mi,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){ct.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),ct.info(`Added catalog URL: ${e}`);try{await this.fetchCatalog(e),this.registerMarketplaceExtensions()}catch(t){ct.warn(`Failed to fetch catalog immediately after adding: ${t}`)}}async removeCatalogUrl(e){const t=this.catalogUrls.indexOf(e);t!==-1&&(this.catalogUrls.splice(t,1),await this.saveCatalogUrls(),ct.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const t=this.loadingPromises.get(e);if(t)return t;const r=(async()=>{try{ct.debug(`Fetching catalog from: ${e}`);const i=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const a=await i.json();if(!a.extensions||!Array.isArray(a.extensions))throw new Error("Invalid catalog format: extensions array is required");const s={name:a.name,description:a.description,extensions:a.extensions};return ct.debug(`Successfully fetched catalog from ${e}: ${s.extensions.length} extensions`),s}catch(i){throw ct.error(`Failed to fetch catalog from ${e}: ${i}`),i}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,r),r}async refreshCatalogs(){ct.info(`Refreshing ${this.catalogUrls.length} catalogs...`);const e=this.catalogUrls.map(r=>this.fetchCatalog(r).catch(i=>(ct.warn(`Failed to refresh catalog ${r}: ${i.message}`),null)));(await Promise.allSettled(e)).forEach((r,i)=>{r.status==="fulfilled"&&r.value&&r.value.extensions.forEach(s=>{if(!fe.getExtensions().find(l=>l.id===s.id)){const l={...s,external:!0};fe.registerExtension(l),ct.debug(`Registered marketplace extension: ${s.id}`)}})}),Oe(Mi,{type:"refreshed"}),ct.info("Catalog refresh completed")}registerMarketplaceExtensions(){}getMarketplaceExtensions(){return[]}getMarketplaceExtension(e){const t=fe.getExtensions().find(r=>r.id===e);if(t&&t.external)return t}getCatalogsWithExtensions(){return[]}async installExtension(e){if(fe.isEnabled(e.id)){ct.info(`Extension ${e.id} is already installed`);return}ct.info(`Installing marketplace extension: ${e.name} from ${e.url}`);const t={...e,external:!0};fe.registerExtension(t),await wn.loadExtensionFromUrl(e.url),ct.info(`Successfully installed marketplace extension: ${e.id}`)}isMarketplaceExtension(e){const t=fe.getExtensions().find(r=>r.id===e);return t!==void 0&&t.external===!0}}const mo=new Rd;bt.put("marketplaceRegistry",mo);const Id=Bt("MarketplaceCatalogContributions");mo.addCatalogUrl("https://marketplace.kispace.de/externals.json").catch(n=>{Id.warn(`Failed to add commercial catalog: ${n}`)});function Ld(n){return new Worker("/assets/pyworker-_tLBWDbU.js",{type:"module",name:n?.name})}let Ui=null;async function Pd(){return Ui||(Ui=Pe(()=>import("./index-DAjG65pZ.js").then(n=>n.i),__vite__mapDeps([27,2]))),Ui}let Nd=0;class Md{constructor(){this.pendingMessages=new Map}async init(e,t){this.workspace=e,this.vars=t??{},this.worker=new Ld,this.worker.onmessage=r=>{this.handleWorkerMessage(r.data)},this.worker.onerror=r=>{console.error("Python Worker error:",r)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const r=e.payload.prompt||"Input:",i=window.prompt(r);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:i,cancelled:i===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:r,message:i}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",i,r);return}const t=this.pendingMessages.get(e.id);t&&(this.pendingMessages.delete(e.id),e.type==="success"?t.resolve(e.payload):e.type==="error"&&t.reject(new Error(e.payload.message)))}async sendMessage(e,t){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const r=`msg-${Nd++}`,i={id:r,type:e,payload:t};return new Promise((a,s)=>{this.pendingMessages.set(r,{resolve:a,reject:s}),this.worker.postMessage(i)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,t){const r=await this.sendMessage("runFunction",{name:e,args:t});return Oe(Gt,this.workspace),r}async setGlobal(e,t){await this.sendMessage("setGlobal",{key:e,value:t})}async mountWorkspace(e="/workspace"){const t=await Je.getWorkspace();await this.sendMessage("mountWorkspace",{handle:t.getHandle(),mountPoint:e})}async installDependencies(){const e=await this.workspace?.getResource("requirements.txt");if(e){const t=(await e.getContents()).replaceAll("\r",""),{parsePipRequirementsFile:r}=await Pd(),i=r(t).filter(a=>"name"in a).map(a=>a.name);await this.loadPackages(i)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),Oe(Gt,this.workspace)}async execCode(e){const t=await this.sendMessage("execCode",{code:e});return Oe(Gt,this.workspace),t}async execScript(e){const t=e.split(".")[0],r=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(t,r)}async execModule(e,t){const r=await this.sendMessage("execModule",{moduleName:e,entryName:t,vars:this.vars});return Oe(Gt,this.workspace),r}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class Ud{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?S``:S`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(e=>{const t=e.dependencies||{},r=Object.entries(t);return r.length===0?S``:S`
                        <wa-tree-item expanded>
                            <span>${e.name}</span>
                            ${r.map(([i,a])=>S`
                                <wa-tree-item>
                                    <span>${i} <small>${a}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const ci=new Ud;var zd=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,Ra=(n,e,t,r)=>{for(var i=r>1?void 0:r?Fd(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&zd(e,t,i),i};let ui=class extends ya{constructor(){super(...arguments),this.showBottomSidebar=!0,this.showBottomPanel=!1}createRenderRoot(){return this}render(){return S`
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                }
                
                html {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }
                
                body {
                    height: 100%;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                
                k-standard-app {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                
                k-standard-app .toolbar-top {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    align-items: center;
                    border-bottom: solid var(--wa-border-width-s) var(--wa-color-neutral-border-loud);
                    flex-shrink: 0;
                }
                
                k-standard-app .toolbar-bottom {
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
                
                k-standard-app .main-layout {
                    flex: 1;
                    min-height: 0;
                }
                
                k-standard-app .toolbar-end {
                    justify-self: end;
                }
            </style>
            
            <div class="toolbar-top">
                <k-toolbar id=${zs}></k-toolbar>
                <k-toolbar id=${ru}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${er}></k-toolbar>
            </div>
            
            <k-resizable-grid 
                class="main-layout"
                id="main-layout" 
                orientation="horizontal" 
                sizes="15%, 65%, 20%">
                
                ${this.showBottomSidebar?S`
                        <k-resizable-grid 
                            id="left-sidebar-split" 
                            orientation="vertical" 
                            sizes="50%, 50%">
                            <k-tabs id="${Xi}"></k-tabs>
                            <k-tabs id="${Ws}"></k-tabs>
                        </k-resizable-grid>
                    `:S`<k-tabs id="${Xi}"></k-tabs>`}
                
                ${this.showBottomPanel?S`
                        <k-resizable-grid 
                            id="editor-area-split" 
                            orientation="vertical" 
                            sizes="70%, 30%">
                            <k-tabs id="${xn}"></k-tabs>
                            <k-tabs id="${iu}"></k-tabs>
                        </k-resizable-grid>
                    `:S`<k-tabs id="${xn}"></k-tabs>`}
                
                <k-tabs id="${Gs}"></k-tabs>
            </k-resizable-grid>
            
            <div class="toolbar-bottom">
                <k-toolbar id=${Fs}></k-toolbar>
                <k-toolbar id=${ba}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Ei}></k-toolbar>
            </div>
        `}};Ra([ce({type:Boolean,attribute:"show-bottom-sidebar"})],ui.prototype,"showBottomSidebar",2);Ra([ce({type:Boolean,attribute:"show-bottom-panel"})],ui.prototype,"showBottomPanel",2);ui=Ra([qe("k-standard-app")],ui);const Wd={enhance:async(n,e)=>{try{const t=await Je.getWorkspace(),r=vn.getEditorArea()?.getActiveEditor(),i={workspace:t?.getName()||null,activeEditor:r?{title:r.input?.title||null,editorId:r.input?.editorId||null}:null},a=`***App's state:***
${JSON.stringify(i,null,2)}`;return`${n}

${a}`}catch{return n}},priority:20};Q.registerContribution(Nr,{label:"App State Enhancer",enhancer:Wd});const hr=Bt("HowToService"),di="system.howtos";class Gd{constructor(){this.contributions=new Map,this.loadContributions(),He(jt,e=>{e.target===di&&this.loadContributions()})}loadContributions(){const e=Q.getContributions(di);this.contributions.clear();for(const t of e){if(!t.id){hr.warn("HowTo contribution missing id, skipping");continue}if(!t.label){const a=typeof t.title=="function"?t.title():t.title;t.label=a}if(!t.steps||t.steps.length===0){hr.warn(`HowTo contribution "${t.id}" has no steps, skipping`);continue}const r=new Set;for(const a of t.steps){if(r.has(a.id)){hr.warn(`HowTo contribution "${t.id}" has duplicate step ID: "${a.id}"`);continue}r.add(a.id)}this.contributions.set(t.id,t);const i=typeof t.title=="function"?t.title():t.title;hr.debug(`Loaded HowTo contribution: ${i} (${t.id})`)}hr.info(`Loaded ${this.contributions.size} HowTo contributions`)}getContribution(e){return this.contributions.get(e)}getAllContributions(){return Array.from(this.contributions.values())}getContributionsByCategory(e){return Array.from(this.contributions.values()).filter(t=>t.category===e)}hasContribution(e){return this.contributions.has(e)}}const Xp=new Gd,pi="welcome.txt";function qd(n){return n&&typeof n.getFilePath=="function"}async function Bd(){return Je.isConnected()}async function os(){const n=await Je.getWorkspace();if(!n)return!1;try{return await n.getResource(pi)instanceof At}catch{return!1}}function Cr(){const n=Pt.get();return!n||!qd(n)?!1:n.getFilePath()===pi}function jd(){if(!Cr())return!1;const n=Pt.get();return n?n.isDirty()===!1:!1}function Vd(){return!Cr()}function ls(){return wn.getCurrentApp()?.name||"AppSpace"}const Hd={id:"appspace.onboarding",title:()=>`Welcome to ${ls()}`,description:()=>`Get started with ${ls()} by learning the basics of workspace and file management`,icon:"graduation-cap",label:"",category:"Getting Started",initialize:n=>{const e=[];return He(Gt,()=>{n.requestUpdate()}),He(Vn,()=>{n.requestUpdate()}),e.push(Hn(Pt,()=>{n.requestUpdate()})),e.push(Hn(Ar,()=>{n.requestUpdate()})),()=>{e.forEach(t=>t())}},steps:[{id:"create-text-file",title:"Create welcome.txt",description:`Create a new text file called "welcome.txt" in your workspace. If you don't have a workspace selected, choose one first.`,preCondition:async()=>await Bd(),postCondition:async()=>await os(),command:"create_file",commandParams:{path:pi,contents:`Welcome to AppSpace!

This is your first file. You can edit it and save your changes.`}},{id:"open-text-file",title:"Open welcome.txt",description:'Open the "welcome.txt" file in the editor.',preCondition:async()=>await os(),postCondition:()=>Cr(),command:"open_editor",commandParams:{path:pi}},{id:"edit-and-save",title:"Type something and save",description:"Type some text in the editor to modify the file, then save it using Ctrl+S or the save button.",preCondition:()=>Cr(),postCondition:()=>jd()},{id:"close-text-file",title:"Close the file",description:"Close the editor tab by clicking the X button on the tab.",preCondition:()=>Cr(),postCondition:()=>Vd()}]};Q.registerContribution(di,Hd);const yo=".system.ai-config";function bo(n){return n&&typeof n.getFilePath=="function"}function xr(){const n=Pt.get();return!n||!bo(n)?!1:n.getFilePath()===yo}async function cs(){try{const n=await ze.get(fn);if(!n||!n.defaultProvider)return!1;const e=n.providers?.find(t=>t.name===n.defaultProvider);return e?!!e.apiKey&&e.apiKey.trim()!=="":!1}catch{return!1}}function Xd(){const n=Pt.get();return!n||!bo(n)||n.getFilePath()!==yo?!1:n.isDirty()===!0}function Kd(){return xr()?!Xd():!1}function Yd(){return!xr()}async function Zd(){try{const n=await ze.get("aiChatSessions");if(!n||typeof n!="object")return!1;for(const e in n){const t=n[e];if(t?.history&&Array.isArray(t.history)&&t.history.some(i=>i.role==="user"&&i.content&&i.content.trim()!==""))return!0}return!1}catch{return!1}}function us(){return wn.getCurrentApp()?.name||"AppSpace"}const Jd={id:"appspace.ai-setup",title:()=>`Set up AI in ${us()}`,description:()=>`Configure an LLM provider to enable AI chat features in ${us()}`,icon:"robot",label:"",category:"Getting Started",initialize:n=>{const e=[];return e.push(Hn(Pt,()=>{n.requestUpdate()})),e.push(Hn(Ar,()=>{n.requestUpdate()})),He(ki,()=>{n.requestUpdate()}),()=>{e.forEach(t=>t())}},steps:[{id:"open-ai-settings",title:"Open AI Settings",description:"Open the AI settings editor by clicking the robot icon in the toolbar or using the command palette.",preCondition:()=>!0,postCondition:()=>xr(),command:"open_ai_config"},{id:"configure-llm-provider",title:"Configure LLM Provider",description:"Select a provider as default and enter an API key. Make sure to save your changes using Ctrl+S or the save button.",preCondition:()=>xr(),postCondition:async()=>{const n=await cs(),e=Kd();return n&&e}},{id:"save-and-close",title:"Save and Close",description:"Save your changes (if not already saved) and close the AI settings editor tab.",preCondition:()=>xr(),postCondition:()=>Yd()},{id:"type-in-chat",title:"Type in Chat",description:"Open the AI chat view (if not already open) and type a message to test your AI configuration.",preCondition:async()=>await cs(),postCondition:async()=>await Zd()}]};Q.registerContribution(di,Jd);async function Ai(n,e=!0){const t=await Je.getWorkspace();if(!t)return null;const r=n?.path;return e&&!r?null:{workspace:t,path:r||""}}function Ia(n){return n&&typeof n.getContent=="function"&&typeof n.getSelection=="function"&&typeof n.getSnippet=="function"&&typeof n.getLanguage=="function"&&typeof n.getFilePath=="function"}async function wo(n,e){let t;const r=n.params?.path;if(r){const i=await Je.getWorkspace();i&&(t=await i.getResource(r))}return t||(t=It.get()),t}async function Ti(n){try{const e=await n.getContents();return typeof e!="string"?(Ce("File is not a text file"),null):e}catch(e){return Ce(`Failed to read file: ${e.message}`),null}}function gn(n=!1){const e={filePath:null,language:null};return n?{...e,snippet:null,cursorLine:null}:e}async function Ur(n,e=!0){const t=await Ai(n,e);if(!t)return null;const{workspace:r,path:i}=t;if(!i)return null;try{const a=await r.getResource(i);return!a||!(a instanceof At)?null:{workspace:r,path:i,file:a}}catch{return null}}Ae({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async({params:n})=>{let e=n?.path;const t=n?.contents,r=n?.ask,i=n?.extension;if((r||!e)&&(e=await vi("Enter path to new file (directories will be created if not exist):",e||""),!e))return;i&&!e.endsWith(i)&&(e+=i);const a=await Ai({path:e},!0);if(!a)return;const{workspace:s}=a;if(await s.getResource(e)&&!await Lr(`File "${e}" already exists. Do you want to overwrite it?`))return;const u=await s.getResource(e,{create:!0});return u?(t&&await u.saveContents(t),$e.info("File created: "+e)):Ce("Could not create file: "+e),e}}});Ae({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async n=>{const e=await wo(n);if(!e){Ce("No resource to rename provided!");return}const t=e.getName(),r=n.params?.newName||await vi(`Enter new name for "${t}":`,t);if(!(!r||r===t))try{await e.rename(r),xt(`Resource renamed to: ${r}`)}catch(i){Ce(`Failed to rename ${t}: ${i.message}`)}}}});Ae({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async n=>{const e=await wo(n);if(!e){Ce("No resource to delete provided!");return}const t=e.getWorkspacePath(),r=n.params&&n.params.confirm;let i=!0;if((r===void 0||r===!0)&&(i=await Lr(`Are you sure you want to delete ${t}?`)),i)try{await e.delete(),xt("Resource deleted: "+t)}catch(a){Ce(`Resource ${t} could not be deleted: ${a.message||a}`)}}}});Ae({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async n=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Je.connectWorkspace(e)).catch(e=>{Ce(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});Ae({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async n=>{const e=await Je.getWorkspace();e||Ce("No workspace selected."),e.touch()}}});Ae({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async n=>{const e=await Ur({path:n.params?.path});if(!e)return;const{file:t}=e;await vn.loadEditor(t)}}});Ae({command:{id:"head_file",name:"Head - Show first lines",description:"Shows the first N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the beginning (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the first N lines of the file"}]},handler:{execute:async({params:n})=>{const e=await Ur(n);if(!e)return;const{file:t}=e,r=n?.lines?parseInt(n.lines,10):10;if(isNaN(r)||r<1){Ce("Number of lines must be a positive integer");return}const i=await Ti(t);return i?i.split(`
`).slice(0,r).join(`
`):void 0}}});Ae({command:{id:"tail_file",name:"Tail - Show last lines",description:"Shows the last N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the end (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the last N lines of the file"}]},handler:{execute:async({params:n})=>{const e=await Ur(n);if(!e)return;const{file:t}=e,r=n?.lines?parseInt(n.lines,10):10;if(isNaN(r)||r<1){Ce("Number of lines must be a positive integer");return}const i=await Ti(t);return i?i.split(`
`).slice(-r).join(`
`):void 0}}});Ae({command:{id:"cat_file",name:"Cat - Show file contents",description:"Shows the complete contents of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0}],output:[{name:"content",description:"the complete contents of the file"}]},handler:{execute:async({params:n})=>{const e=await Ur(n);if(!e)return;const{file:t}=e;return await Ti(t)}}});Ae({command:{id:"wc_file",name:"Word count",description:"Counts lines, words, and characters in a file",parameters:[{name:"path",description:"the path of the file to analyze",required:!0}],output:[{name:"lines",description:"number of lines in the file"},{name:"words",description:"number of words in the file"},{name:"characters",description:"number of characters in the file"}]},handler:{execute:async({params:n})=>{const e=await Ur(n);if(!e)return;const{file:t}=e,r=await Ti(t);if(!r)return;const a=r.split(`
`).length,s=r.trim()===""?0:r.trim().split(/\s+/).filter(u=>u.length>0).length,l=r.length;return{lines:a,words:s,characters:l}}}});Ae({command:{id:"file_exists",name:"Check if file exists",description:"Checks if a file exists at the given path",parameters:[{name:"path",description:"the path of the file to check, relative to the workspace",required:!0}],output:[{name:"exists",description:"true if the file exists, false otherwise"}]},handler:{execute:async({params:n})=>{const e=await Ai(n);if(!e)return!1;const{workspace:t,path:r}=e;try{return await t.getResource(r)instanceof At}catch{return!1}}}});async function vo(n){const e=[],t=await n.listChildren(!0);for(const r of t)if(r instanceof At)e.push(r.getWorkspacePath());else if(r instanceof Gn){const i=await vo(r);e.push(...i)}return e}Ae({command:{id:"ls",name:"List files",description:"Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",parameters:[{name:"path",description:"the path of the directory to list, relative to the workspace. If not provided, uses workspace root",required:!1},{name:"recursive",description:"whether to recursively traverse all subdirectories",type:"boolean",required:!1}],output:[{name:"files",description:"array of file objects with path and size information"}]},handler:{execute:async({params:n})=>{const e=await Ai(n,!1);if(!e)return Ce("No workspace available"),[];const{workspace:t,path:r}=e,i=n?.recursive===!0||n?.recursive==="true";try{let a=t;if(r){const s=await t.getResource(r);if(!s)return Ce(`Path not found: ${r}`),[];if(!(s instanceof Gn))return Ce(`Path is not a directory: ${r}`),[];a=s}if(i){const s=await vo(a),l=[];for(const u of s){const h=await t.getResource(u);if(h instanceof At){const T=await h.size();l.push({path:u,size:T})}}return l}else{const s=await a.listChildren(!0),l=[];for(const u of s)if(u instanceof At){const h=await u.size();l.push({path:u.getWorkspacePath(),size:h})}return l}}catch(a){return Ce(`Failed to list files: ${a.message}`),[]}}}});Ae({command:{id:"get_active_editor_content",name:"Get active editor content",description:"Gets the complete contents of the currently active editor. Returns null if no editor is active or if the editor is not a code editor.",parameters:[],output:[{name:"content",description:"the complete contents of the active editor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async n=>{const e=n.activeEditor;if(!Ia(e))return{...gn(),content:null};try{return{content:e.getContent(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...gn(),content:null}}}}});Ae({command:{id:"get_active_editor_selection",name:"Get active editor selection",description:"Gets the currently selected text in the active editor. Returns null if no editor is active, no selection exists, or if the editor is not a code editor.",parameters:[],output:[{name:"selection",description:"the selected text in the active editor, or null if no selection exists or no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"}]},handler:{execute:async n=>{const e=n.activeEditor;if(!Ia(e))return{...gn(),selection:null};try{return{selection:e.getSelection(),filePath:e.getFilePath(),language:e.getLanguage()}}catch{return{...gn(),selection:null}}}}});Ae({command:{id:"get_active_editor_snippet",name:"Get active editor snippet around cursor",description:"Gets a code snippet from the active editor with n lines before and n lines after the cursor position. Useful for getting context around the cursor without loading the entire file.",parameters:[{name:"lines",description:"number of lines to include before and after the cursor position (default: 5)",type:"number",required:!1}],output:[{name:"snippet",description:"the code snippet with n lines before and after the cursor, or null if no editor is active"},{name:"filePath",description:"the workspace path of the file in the active editor, or null if no editor is active"},{name:"language",description:"the programming language of the active editor, or null if no editor is active"},{name:"cursorLine",description:"the line number where the cursor is positioned (1-based), or null if no editor is active"}]},handler:{execute:async n=>{const e=n.activeEditor;if(!Ia(e))return gn(!0);try{const t=n.params?.lines?parseInt(n.params.lines,10):5;if(isNaN(t)||t<0)return gn(!0);const r=e.getSnippet(t);return r?{snippet:r.snippet,filePath:e.getFilePath(),language:e.getLanguage(),cursorLine:r.cursorLine}:gn(!0)}catch{return gn(!0)}}}});Ae({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async n=>{const e=wn.getCurrentApp();if(!e){Ce("No app loaded");return}const t=ci.hasPackages(),r=ci.renderTree();let i=null;const a=()=>(i||(i=document.getElementById("global-dialog-container")||document.createElement("div"),i.id||(i.id="global-dialog-container",document.body.appendChild(i))),i),s=()=>{i&&qt(S``,i)},l=ee=>{const Y=Le.parse(ee,{async:!1});return S`${_r(Y)}`};let u=[];if(e.releaseHistory)if(typeof e.releaseHistory=="function")try{u=await e.releaseHistory()}catch(ee){console.error("Failed to load release history from app:",ee),u=[]}else u=e.releaseHistory;e.version;const h=u.length>0?u.findIndex(ee=>ee.tag_name===e.version):-1,T=h>=0?h:0;let E=T;const m=ee=>{if(u.length===0)return"";const Y=u[ee],G=Y.tag_name===e.version;let $=`**Version:** ${Y.tag_name}`;G&&($+=" (Current)"),$+=`

`;const U=new Date(Y.published_at).toLocaleDateString();if($+=`**Released:** ${U}

`,!G){const L=e.version.replace(/^v/,""),x=Y.tag_name.replace(/^v/,""),P=L.split(".").map(Number),q=x.split(".").map(Number);let de=!1;for(let pe=0;pe<Math.max(P.length,q.length);pe++){const ne=P[pe]||0,R=q[pe]||0;if(R>ne){de=!0;break}if(R<ne)break}de&&($+=`⚠️ **Update available - reload page to update**

`)}return Y.body&&($+=`---

${Y.body}`),$},k=()=>{s()},D=()=>{s()},B=ee=>{const Y=m(ee),G=u.length>0,$=S`
                    <wa-dialog 
                        label="About ${e.name} - ${e.version}"
                        open 
                        light-dismiss
                        style="--width: 600px;"
                        @wa-request-close=${k}
                        @wa-after-hide=${D}
                    >
                        <style>
                            .dialog-content {
                                height: 600px;
                            }
                            
                            wa-tree-item > span small {
                                color: var(--wa-color-neutral-60);
                                font-size: 0.875em;
                                margin-left: 0.5rem;
                            }
                        </style>
                        <small>${e.description}</small>
                        <div class="dialog-content">
                            <wa-tab-group>
                                ${u.length>0?S`
                                    <wa-tab slot="nav" panel="release">Release History</wa-tab>
                                    <wa-tab-panel name="release">
                                        ${l(Y)}
                                    </wa-tab-panel>
                                `:""}
                                
                                ${t?S`
                                    <wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>
                                    <wa-tab-panel name="packages">
                                        ${r}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${G?S`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${ee===u.length-1}
                                    @click=${()=>{ee<u.length-1&&(E=ee+1,B(E))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${ee===0}
                                    @click=${()=>{ee>0&&(E=ee-1,B(E))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" data-dialog="close">Close</wa-button>
                        </div>
                    </wa-dialog>
                `;qt($,a())};return B(T),new Promise(ee=>{const Y=()=>{i?.querySelector("wa-dialog[open]")?setTimeout(Y,100):ee()};Y()})}}});Ae({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async n=>{const e=n.params.script;if(!e)return;const t=new Md,r=await Je.getWorkspace();await t.init(r,n),await t.installDependencies(),await t.execScript(e)}}});Ae({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});Ae({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async n=>{const e=Pt.get()||Re.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const n=Re.get();return!n||!n.isDirty()}}});Ae({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});const Eo="theme";async function ko(n){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(n)}async function Qd(){const n=await ze.get(Eo);await ko(n||"wa-dark")}async function ep(n){await ze.set(Eo,n)}Ae({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async n=>{const t=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await ko(t),await ep(t)}},contribution:{target:er,icon:"circle-half-stroke",label:"Theme Switcher"}});Qd().catch(n=>{console.error("Failed to load theme preference:",n)});Ae({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async n=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:er,icon:"expand",label:"Fullscreen"}});Ae({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:async n=>{await Pe(()=>import("./k-monaco-editor-qnA44pN5-D2UPrw0T.js"),__vite__mapDeps([28,29,2,30,1,3,4,12,6]));const e={title:"settings.json",data:{async getContents(){const t=await ze.getAll();return JSON.stringify(t,void 0,2)},getName(){return e.key},saveContents(t){const r=JSON.parse(t);return ze.setAll(r)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>S`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,vn.loadEditor(e).then()}},contribution:{target:er,icon:"gear",label:"Open Settings"}});Ae({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:n=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>S`
                <k-extensions></k-extensions>`,vn.loadEditor(e).then()}},contribution:{target:er,icon:"puzzle-piece",label:"Open Extensions"}});Ae({command:{id:"list_extensions",name:"List extensions",description:"Lists all available extensions with their status (enabled/disabled)",parameters:[],output:[{name:"extensions",description:"array of extension objects with id, name, description, experimental flag, and enabled status"}]},handler:{execute:async n=>fe.getExtensions().map(t=>({id:t.id,name:t.name,description:t.description,experimental:t.experimental,enabled:fe.isEnabled(t.id)}))}});Ae({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:n,type:e}})=>{n&&(e==="error"?Ce(n):xt(n))}}});ci.addPackage({name:Hr.name,version:Hr.version,dependencies:Hr.dependencies,devDependencies:Hr.devDependencies});function Xr(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var zi={exports:{}},ds;function tp(){return ds||(ds=1,(function(n,e){(function(t){n.exports=t()})(function(){return(function(){function t(r,i,a){function s(h,T){if(!i[h]){if(!r[h]){var E=typeof Xr=="function"&&Xr;if(!T&&E)return E(h,!0);if(l)return l(h,!0);var m=new Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m}var k=i[h]={exports:{}};r[h][0].call(k.exports,function(D){var B=r[h][1][D];return s(B||D)},k,k.exports,t,r,i,a)}return i[h].exports}for(var l=typeof Xr=="function"&&Xr,u=0;u<a.length;u++)s(a[u]);return s}return t})()({1:[function(t,r,i){const a=t("./utils"),s=(function(){const l=a.stringToArray,u=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],h=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],T=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],E=["Thousand","Million","Billion","Trillion"];function m(C,O){var A=function(W,z,I){var F="";if(W<=19)F=(z?" and ":"")+(I?h[W]:u[W]);else if(W<100){const ke=Math.floor(W/10),Te=W%10;F=(z?" and ":"")+T[ke-2],Te>0?F+="-"+A(Te,!1,I):I&&(F=F.substring(0,F.length-1)+"ieth")}else if(W<1e3){const ke=Math.floor(W/100),Te=W%100;F=(z?", ":"")+u[ke]+" Hundred",Te>0?F+=A(Te,!0,I):I&&(F+="th")}else{var ae=Math.floor(Math.log10(W)/3);ae>E.length&&(ae=E.length);const ke=Math.pow(10,ae*3),Te=Math.floor(W/ke),te=W-Te*ke;F=(z?", ":"")+A(Te,!1,!1)+" "+E[ae-1],te>0?F+=A(te,!0,I):I&&(F+="th")}return F},N=A(C,!1,O);return N}const k={};u.forEach(function(C,O){k[C.toLowerCase()]=O}),h.forEach(function(C,O){k[C.toLowerCase()]=O}),T.forEach(function(C,O){const A=C.toLowerCase();k[A]=(O+2)*10,k[A.substring(0,C.length-1)+"ieth"]=k[A]}),k.hundredth=100,E.forEach(function(C,O){const A=C.toLowerCase(),N=Math.pow(10,(O+1)*3);k[A]=N,k[A+"th"]=N});function D(C){const A=C.split(/,\s|\sand\s|[\s\\-]/).map(z=>k[z]);let N=[0];return A.forEach(z=>{if(z<100){let I=N.pop();I>=1e3&&(N.push(I),I=0),N.push(I+z)}else N.push(N.pop()*z)}),N.reduce((z,I)=>z+I,0)}const B=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],ee={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function Y(C){for(var O=0;O<B.length;O++){const A=B[O];if(C>=A[0])return A[1]+Y(C-A[0])}return""}function G(C){for(var O=0,A=1,N=C.length-1;N>=0;N--){const W=C[N],z=ee[W];z<A?O-=z:(A=z,O+=z)}return O}function $(C,O){for(var A=[],N=O.charCodeAt(0);C>0;)A.unshift(String.fromCharCode((C-1)%26+N)),C=Math.floor((C-1)/26);return A.join("")}function U(C,O){for(var A=O.charCodeAt(0),N=0,W=0;W<C.length;W++)N+=(C.charCodeAt(C.length-W-1)-A+1)*Math.pow(26,W);return N}function L(C,O){if(typeof C>"u")return;C=Math.floor(C);const A=pe(O);return q(C,A)}const x={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},P={UPPER:"upper",LOWER:"lower",TITLE:"title"};function q(C,O){let A;const N=C<0;switch(C=Math.abs(C),O.primary){case x.LETTERS:A=$(C,O.case===P.UPPER?"A":"a");break;case x.ROMAN:A=Y(C),O.case===P.UPPER&&(A=A.toUpperCase());break;case x.WORDS:A=m(C,O.ordinal),O.case===P.UPPER?A=A.toUpperCase():O.case===P.LOWER&&(A=A.toLowerCase());break;case x.DECIMAL:A=""+C;var W=O.mandatoryDigits-A.length;if(W>0){var z=new Array(W+1).join("0");A=z+A}if(O.zeroCode!==48&&(A=l(A).map(ke=>String.fromCodePoint(ke.codePointAt(0)+O.zeroCode-48)).join("")),O.regular){const ke=Math.floor((A.length-1)/O.groupingSeparators.position);for(let Te=ke;Te>0;Te--){const te=A.length-Te*O.groupingSeparators.position;A=A.substr(0,te)+O.groupingSeparators.character+A.substr(te)}}else O.groupingSeparators.reverse().forEach(ke=>{const Te=A.length-ke.position;A=A.substr(0,Te)+ke.character+A.substr(Te)});if(O.ordinal){var I={1:"st",2:"nd",3:"rd"},F=A[A.length-1],ae=I[F];(!ae||A.length>1&&A[A.length-2]==="1")&&(ae="th"),A=A+ae}break;case x.SEQUENCE:throw{code:"D3130",value:O.token}}return N&&(A="-"+A),A}const de=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function pe(C){const O={type:"integer",primary:x.DECIMAL,case:P.LOWER,ordinal:!1};let A,N;const W=C.lastIndexOf(";");switch(W===-1?A=C:(A=C.substring(0,W),N=C.substring(W+1),N[0]==="o"&&(O.ordinal=!0)),A){case"A":O.case=P.UPPER;case"a":O.primary=x.LETTERS;break;case"I":O.case=P.UPPER;case"i":O.primary=x.ROMAN;break;case"W":O.case=P.UPPER,O.primary=x.WORDS;break;case"Ww":O.case=P.TITLE,O.primary=x.WORDS;break;case"w":O.primary=x.WORDS;break;default:{let z=null,I=0,F=0,ae=[],ke=0;if(l(A).map(te=>te.codePointAt(0)).reverse().forEach(te=>{let le=!1;for(let ve=0;ve<de.length;ve++){const J=de[ve];if(te>=J&&te<=J+9){if(le=!0,I++,ke++,z===null)z=J;else if(J!==z)throw{code:"D3131"};break}}le||(te===35?(ke++,F++):ae.push({position:ke,character:String.fromCodePoint(te)}))}),I>0){O.primary=x.DECIMAL,O.zeroCode=z,O.mandatoryDigits=I,O.optionalDigits=F;const le=function(ve){if(ve.length===0)return 0;const J=ve[0].character;for(let Ye=1;Ye<ve.length;Ye++)if(ve[Ye].character!==J)return 0;const nt=ve.map(Ye=>Ye.position),Dt=function(Ye,pt){return pt===0?Ye:Dt(pt,Ye%pt)},dt=nt.reduce(Dt);for(let Ye=1;Ye<=nt.length;Ye++)if(nt.indexOf(Ye*dt)===-1)return 0;return dt}(ae);le>0?(O.regular=!0,O.groupingSeparators={position:le,character:ae[0].character}):(O.regular=!1,O.groupingSeparators=ae)}else O.primary=x.SEQUENCE,O.token=A}}return O}const ne={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function R(C){var O=[];const A={type:"datetime",parts:O},N=function(le,ve){if(ve>le){let J=C.substring(le,ve);J=J.split("]]").join("]"),O.push({type:"literal",value:J})}};for(var W=0,z=0;z<C.length;){if(C.charAt(z)==="["){if(C.charAt(z+1)==="["){N(W,z),O.push({type:"literal",value:"["}),z+=2,W=z;continue}if(N(W,z),W=z,z=C.indexOf("]",W),z===-1)throw{code:"D3135"};let le=C.substring(W+1,z);le=le.split(/\s+/).join("");var I={type:"marker",component:le.charAt(0)},F=le.lastIndexOf(","),ae;if(F!==-1){const ve=le.substring(F+1),J=ve.indexOf("-");let nt,Dt;const dt=function(pt){if(!(typeof pt>"u"||pt==="*"))return parseInt(pt)};J===-1?nt=ve:(nt=ve.substring(0,J),Dt=ve.substring(J+1));const Ye={min:dt(nt),max:dt(Dt)};I.width=Ye,ae=le.substring(1,F)}else ae=le.substring(1);if(ae.length===1)I.presentation1=ae;else if(ae.length>1){var ke=ae.charAt(ae.length-1);"atco".indexOf(ke)!==-1?(I.presentation2=ke,ke==="o"&&(I.ordinal=!0),I.presentation1=ae.substring(0,ae.length-1)):I.presentation1=ae}else I.presentation1=ne[I.component];if(typeof I.presentation1>"u")throw{code:"D3132",value:I.component};if(I.presentation1[0]==="n")I.names=P.LOWER;else if(I.presentation1[0]==="N")I.presentation1[1]==="n"?I.names=P.TITLE:I.names=P.UPPER;else if("YMDdFWwXxHhmsf".indexOf(I.component)!==-1){var Te=I.presentation1;if(I.presentation2&&(Te+=";"+I.presentation2),I.integerFormat=pe(Te),I.width&&I.width.min!==void 0&&I.integerFormat.mandatoryDigits<I.width.min&&(I.integerFormat.mandatoryDigits=I.width.min),I.component==="Y")if(I.n=-1,I.width&&I.width.max!==void 0)I.n=I.width.max,I.integerFormat.mandatoryDigits=I.n;else{var te=I.integerFormat.mandatoryDigits+I.integerFormat.optionalDigits;te>=2&&(I.n=te)}const ve=O[O.length-1];ve&&ve.integerFormat&&(ve.integerFormat.parseWidth=ve.integerFormat.mandatoryDigits)}(I.component==="Z"||I.component==="z")&&(I.integerFormat=pe(I.presentation1)),O.push(I),W=z+1}z++}return N(W,z),A}const X=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],oe=["January","February","March","April","May","June","July","August","September","October","November","December"],me=1e3*60*60*24,ie=function(C){const O=Date.UTC(C.year,C.month);var A=new Date(O).getUTCDay();return A===0&&(A=7),A>4?O+(8-A)*me:O-(A-1)*me},K=function(C,O){return{year:C,month:O,nextMonth:function(){return O===11?K(C+1,0):K(C,O+1)},previousMonth:function(){return O===0?K(C-1,11):K(C,O-1)},nextYear:function(){return K(C+1,O)},previousYear:function(){return K(C-1,O)}}},re=function(C,O){return(O-C)/(me*7)+1},j=(C,O)=>{let A;switch(O){case"Y":A=C.getUTCFullYear();break;case"M":A=C.getUTCMonth()+1;break;case"D":A=C.getUTCDate();break;case"d":{const N=Date.UTC(C.getUTCFullYear(),C.getUTCMonth(),C.getUTCDate()),W=Date.UTC(C.getUTCFullYear(),0);A=(N-W)/me+1;break}case"F":A=C.getUTCDay(),A===0&&(A=7);break;case"W":{const N=K(C.getUTCFullYear(),0),W=ie(N),z=Date.UTC(N.year,C.getUTCMonth(),C.getUTCDate());let I=re(W,z);if(I>52){const F=ie(N.nextYear());z>=F&&(I=1)}else if(I<1){const F=ie(N.previousYear());I=re(F,z)}A=Math.floor(I);break}case"w":{const N=K(C.getUTCFullYear(),C.getUTCMonth()),W=ie(N),z=Date.UTC(N.year,N.month,C.getUTCDate());let I=re(W,z);if(I>4){const F=ie(N.nextMonth());z>=F&&(I=1)}else if(I<1){const F=ie(N.previousMonth());I=re(F,z)}A=Math.floor(I);break}case"X":{const N=K(C.getUTCFullYear(),0),W=ie(N),z=ie(N.nextYear()),I=C.getTime();I<W?A=N.year-1:I>=z?A=N.year+1:A=N.year;break}case"x":{const N=K(C.getUTCFullYear(),C.getUTCMonth()),W=ie(N),z=N.nextMonth(),I=ie(z),F=C.getTime();F<W?A=N.previousMonth().month+1:F>=I?A=z.month+1:A=N.month+1;break}case"H":A=C.getUTCHours();break;case"h":A=C.getUTCHours(),A=A%12,A===0&&(A=12);break;case"P":A=C.getUTCHours()>=12?"pm":"am";break;case"m":A=C.getUTCMinutes();break;case"s":A=C.getUTCSeconds();break;case"f":A=C.getUTCMilliseconds();break;case"Z":case"z":break;case"C":A="ISO";break;case"E":A="ISO";break}return A};let xe=null;function ut(C,O,A){var N=0,W=0;if(typeof A<"u"){const Te=parseInt(A);N=Math.floor(Te/100),W=Te%100}var z=function(Te,te){var le=j(Te,te.component);if("YMDdFWwXxHhms".indexOf(te.component)!==-1)if(te.component==="Y"&&te.n!==-1&&(le=le%Math.pow(10,te.n)),te.names){if(te.component==="M"||te.component==="x")le=oe[le-1];else if(te.component==="F")le=X[le];else throw{code:"D3133",value:te.component};te.names===P.UPPER?le=le.toUpperCase():te.names===P.LOWER&&(le=le.toLowerCase()),te.width&&le.length>te.width.max&&(le=le.substring(0,te.width.max))}else le=q(le,te.integerFormat);else if(te.component==="f")le=q(le,te.integerFormat);else if(te.component==="Z"||te.component==="z"){const ve=N*100+W;if(te.integerFormat.regular)le=q(ve,te.integerFormat);else{const J=te.integerFormat.mandatoryDigits;if(J===1||J===2)le=q(N,te.integerFormat),W!==0&&(le+=":"+L(W,"00"));else if(J===3||J===4)le=q(ve,te.integerFormat);else throw{code:"D3134",value:J}}ve>=0&&(le="+"+le),te.component==="z"&&(le="GMT"+le),ve===0&&te.presentation2==="t"&&(le="Z")}else te.component==="P"&&te.names===P.UPPER&&(le=le.toUpperCase());return le};let I;typeof O>"u"?(xe===null&&(xe=R("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),I=xe):I=R(O);const F=(60*N+W)*60*1e3,ae=new Date(C+F);let ke="";return I.parts.forEach(function(Te){Te.type==="literal"?ke+=Te.value:ke+=z(ae,Te)}),ke}function f(C){var O={};if(C.type==="datetime")O.type="datetime",O.parts=C.parts.map(function(A){var N={};if(A.type==="literal")N.regex=A.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(A.component==="Z"||A.component==="z"){let z;Array.isArray(A.integerFormat.groupingSeparators)||(z=A.integerFormat.groupingSeparators),N.regex="",A.component==="z"&&(N.regex="GMT"),N.regex+="[-+][0-9]+",z&&(N.regex+=z.character+"[0-9]+"),N.parse=function(I){A.component==="z"&&(I=I.substring(3));let F=0,ae=0;return z?(F=Number.parseInt(I.substring(0,I.indexOf(z.character))),ae=Number.parseInt(I.substring(I.indexOf(z.character)+1))):I.length-1<=2?F=Number.parseInt(I):(F=Number.parseInt(I.substring(0,3)),ae=Number.parseInt(I.substring(3))),F*60+ae}}else if(A.integerFormat)N=f(A.integerFormat);else{N.regex="[a-zA-Z]+";var W={};if(A.component==="M"||A.component==="x")oe.forEach(function(z,I){A.width&&A.width.max?W[z.substring(0,A.width.max)]=I+1:W[z]=I+1});else if(A.component==="F")X.forEach(function(z,I){I>0&&(A.width&&A.width.max?W[z.substring(0,A.width.max)]=I:W[z]=I)});else if(A.component==="P")W={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:A.component};N.parse=function(z){return W[z]}}return N.component=A.component,N});else{O.type="integer";const A=C.case===P.UPPER;switch(C.primary){case x.LETTERS:O.regex=A?"[A-Z]+":"[a-z]+",O.parse=function(N){return U(N,A?"A":"a")};break;case x.ROMAN:O.regex=A?"[MDCLXVI]+":"[mdclxvi]+",O.parse=function(N){return G(A?N:N.toUpperCase())};break;case x.WORDS:O.regex="(?:"+Object.keys(k).concat("and","[\\-, ]").join("|")+")+",O.parse=function(N){return D(N.toLowerCase())};break;case x.DECIMAL:O.regex="[0-9]",C.parseWidth?O.regex+=`{${C.parseWidth}}`:O.regex+="+",C.ordinal&&(O.regex+="(?:th|st|nd|rd)"),O.parse=function(N){let W=N;return C.ordinal&&(W=N.substring(0,N.length-2)),C.regular?W=W.split(",").join(""):C.groupingSeparators.forEach(z=>{W=W.split(z.character).join("")}),C.zeroCode!==48&&(W=W.split("").map(z=>String.fromCodePoint(z.codePointAt(0)-C.zeroCode+48)).join("")),parseInt(W)};break;case x.SEQUENCE:throw{code:"D3130",value:C.token}}}return O}function y(C,O){if(typeof C>"u")return;const A=pe(O);return f(A).parse(C)}function H(C,O){const A=R(O),N=f(A),W="^"+N.parts.map(ae=>"("+ae.regex+")").join("")+"$";var I=new RegExp(W,"i").exec(C);if(I!==null){const J={};for(let Ne=1;Ne<I.length;Ne++){const d=N.parts[Ne-1];d.parse&&(J[d.component]=d.parse(I[Ne]))}if(Object.getOwnPropertyNames(J).length===0)return;let nt=0;const Dt=Ne=>{nt<<=1,nt+=Ne?1:0},dt=Ne=>!(~Ne&nt)&&!!(Ne&nt);"YXMxWwdD".split("").forEach(Ne=>Dt(J[Ne]));const pt=!dt(161)&&dt(130),Qt=dt(84),un=!Qt&&dt(72);nt=0,"PHhmsf".split("").forEach(Ne=>Dt(J[Ne]));const dn=!dt(23)&&dt(47),tr=(pt?"YD":Qt?"XxwF":un?"XWF":"YMD")+(dn?"Phmsf":"Hmsf"),Mt=this.environment.timestamp;let Rn=!1,Vt=!1;if(tr.split("").forEach(Ne=>{if(typeof J[Ne]>"u")Rn?(J[Ne]="MDd".indexOf(Ne)!==-1?1:0,Vt=!0):J[Ne]=j(Mt,Ne);else if(Rn=!0,Vt)throw{code:"D3136"}}),J.M>0?J.M-=1:J.M=0,pt){const Ne=Date.UTC(J.Y,0),d=(J.d-1)*1e3*60*60*24,g=new Date(Ne+d);J.M=g.getUTCMonth(),J.D=g.getUTCDate()}if(Qt)throw{code:"D3136"};if(un)throw{code:"D3136"};dn&&(J.H=J.h===12?0:J.h,J.P===1&&(J.H+=12));var F=Date.UTC(J.Y,J.M,J.D,J.H,J.m,J.s,J.f);return(J.Z||J.z)&&(F-=(J.Z||J.z)*60*1e3),F}}var he=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Ue(C,O){if(!(typeof C>"u"))if(typeof O>"u"){if(!he.test(C))throw{stack:new Error().stack,code:"D3110",value:C};return Date.parse(C)}else return H.call(this,C,O)}function _e(C,O,A){if(!(typeof C>"u"))return ut.call(this,C,O,A)}return{formatInteger:L,parseInteger:y,fromMillis:_e,toMillis:Ue}})();r.exports=s},{"./utils":6}],2:[function(t,r,i){(function(a){(function(){var s=t("./utils");const l=(()=>{var u=s.isNumeric,h=s.isArrayOfStrings,T=s.isArrayOfNumbers,E=s.createSequence,m=s.isSequence,k=s.isFunction,D=s.isLambda,B=s.isPromise,ee=s.getFunctionArity,Y=s.isDeepEqual,G=s.stringToArray;function $(o){if(!(typeof o>"u")){var c=0;return o.forEach(function(p){c+=p}),c}}function U(o){return typeof o>"u"?0:o.length}function L(o){if(!(typeof o>"u"||o.length===0))return Math.max.apply(Math,o)}function x(o){if(!(typeof o>"u"||o.length===0))return Math.min.apply(Math,o)}function P(o){if(!(typeof o>"u"||o.length===0)){var c=0;return o.forEach(function(p){c+=p}),c/o.length}}function q(o,c=!1){if(!(typeof o>"u")){var p;if(typeof o=="string")p=o;else if(k(o))p="";else{if(typeof o=="number"&&!isFinite(o))throw{code:"D3001",value:o,stack:new Error().stack};var v=c?2:0;Array.isArray(o)&&o.outerWrapper&&(o=o[0]),p=JSON.stringify(o,function(b,_){return typeof _<"u"&&_!==null&&_.toPrecision&&u(_)?Number(_.toPrecision(15)):_&&k(_)?"":_},v)}return p}}function de(o,c,p){if(!(typeof o>"u")){var v=G(o),b=v.length;if(b+c<0&&(c=0),typeof p<"u"){if(p<=0)return"";var _=c>=0?c+p:b+c+p;return v.slice(c,_).join("")}return v.slice(c).join("")}}function pe(o,c){if(!(typeof o>"u")){var p=o.indexOf(c);return p>-1?o.substr(0,p):o}}function ne(o,c){if(!(typeof o>"u")){var p=o.indexOf(c);return p>-1?o.substr(p+c.length):o}}function R(o){if(!(typeof o>"u"))return o.toLowerCase()}function X(o){if(!(typeof o>"u"))return o.toUpperCase()}function oe(o){if(!(typeof o>"u"))return G(o).length}function me(o){if(!(typeof o>"u")){var c=o.replace(/[ \t\n\r]+/gm," ");return c.charAt(0)===" "&&(c=c.substring(1)),c.charAt(c.length-1)===" "&&(c=c.substring(0,c.length-1)),c}}function ie(o,c,p){if(!(typeof o>"u")){(typeof p>"u"||p.length===0)&&(p=" ");var v;c=Math.trunc(c);var b=Math.abs(c)-oe(o);if(b>0){var _=new Array(b+1).join(p);p.length>1&&(_=de(_,0,b)),c>0?v=o+_:v=_+o}else v=o;return v}}async function K(o,c){var p=o.apply(this,[c]);if(B(p)&&(p=await p),p&&!(typeof p.start=="number"||p.end==="number"||Array.isArray(p.groups)||k(p.next)))throw{code:"T1010",stack:new Error().stack};return p}async function re(o,c){if(!(typeof o>"u")){var p;if(typeof c=="string")p=o.indexOf(c)!==-1;else{var v=await K(c,o);p=typeof v<"u"}return p}}async function j(o,c,p){if(!(typeof o>"u")){if(p<0)throw{stack:new Error().stack,value:p,code:"D3040",index:3};var v=E();if(typeof p>"u"||p>0){var b=0,_=await K(c,o);if(typeof _<"u")for(;typeof _<"u"&&(typeof p>"u"||b<p);)v.push({match:_.match,index:_.start,groups:_.groups}),_=await K(_.next),b++}return v}}async function xe(o,c,p,v){if(!(typeof o>"u")){var b=this;if(c==="")throw{code:"D3010",stack:new Error().stack,value:c,index:2};if(v<0)throw{code:"D3011",stack:new Error().stack,value:v,index:4};var _;typeof p=="string"?_=function(Ie){for(var rt="",Se=0,je=p.indexOf("$",Se);je!==-1&&Se<p.length;){rt+=p.substring(Se,je),Se=je+1;var Rt=p.charAt(Se);if(Rt==="$")rt+="$",Se++;else if(Rt==="0")rt+=Ie.match,Se++;else{var it;if(Ie.groups.length===0?it=1:it=Math.floor(Math.log(Ie.groups.length)*Math.LOG10E)+1,je=parseInt(p.substring(Se,Se+it),10),it>1&&je>Ie.groups.length&&(je=parseInt(p.substring(Se,Se+it-1),10)),isNaN(je))rt+="$";else{if(Ie.groups.length>0){var In=Ie.groups[je-1];typeof In<"u"&&(rt+=In)}Se+=je.toString().length}}je=p.indexOf("$",Se)}return rt+=p.substring(Se),rt}:_=p;var M="",Z=0;if(typeof v>"u"||v>0){var se=0;if(typeof c=="string"){for(var Me=o.indexOf(c,Z);Me!==-1&&(typeof v>"u"||se<v);)M+=o.substring(Z,Me),M+=p,Z=Me+c.length,se++,Me=o.indexOf(c,Z);M+=o.substring(Z)}else{var Ee=await K(c,o);if(typeof Ee<"u"){for(;typeof Ee<"u"&&(typeof v>"u"||se<v);){M+=o.substring(Z,Ee.start);var Fe=_.apply(b,[Ee]);if(B(Fe)&&(Fe=await Fe),typeof Fe=="string")M+=Fe;else throw{code:"D3012",stack:new Error().stack,value:Fe};Z=Ee.start+Ee.match.length,se++,Ee=await K(Ee.next)}M+=o.substring(Z)}else M=o}}else M=o;return M}}function ut(o){if(!(typeof o>"u")){var c=typeof window<"u"?window.btoa:function(p){return new a.Buffer.from(p,"binary").toString("base64")};return c(o)}}function f(o){if(!(typeof o>"u")){var c=typeof window<"u"?window.atob:function(p){return new a.Buffer.from(p,"base64").toString("binary")};return c(o)}}function y(o){if(!(typeof o>"u")){var c;try{c=encodeURIComponent(o)}catch{throw{code:"D3140",stack:new Error().stack,value:o,functionName:"encodeUrlComponent"}}return c}}function H(o){if(!(typeof o>"u")){var c;try{c=encodeURI(o)}catch{throw{code:"D3140",stack:new Error().stack,value:o,functionName:"encodeUrl"}}return c}}function he(o){if(!(typeof o>"u")){var c;try{c=decodeURIComponent(o)}catch{throw{code:"D3140",stack:new Error().stack,value:o,functionName:"decodeUrlComponent"}}return c}}function Ue(o){if(!(typeof o>"u")){var c;try{c=decodeURI(o)}catch{throw{code:"D3140",stack:new Error().stack,value:o,functionName:"decodeUrl"}}return c}}async function _e(o,c,p){if(!(typeof o>"u")){if(p<0)throw{code:"D3020",stack:new Error().stack,value:p,index:3};var v=[];if(typeof p>"u"||p>0)if(typeof c=="string")v=o.split(c,p);else{var b=0,_=await K(c,o);if(typeof _<"u"){for(var M=0;typeof _<"u"&&(typeof p>"u"||b<p);)v.push(o.substring(M,_.start)),M=_.end,_=await K(_.next),b++;(typeof p>"u"||b<p)&&v.push(o.substring(M))}else v.push(o)}return v}}function C(o,c){if(!(typeof o>"u"))return typeof c>"u"&&(c=""),o.join(c)}function O(o,c,p){if(!(typeof o>"u")){var v={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},b=v;typeof p<"u"&&Object.keys(p).forEach(function(ue){b[ue]=p[ue]});for(var _=[],M=b["zero-digit"].charCodeAt(0),Z=M;Z<M+10;Z++)_.push(String.fromCharCode(Z));var se=_.concat([b["decimal-separator"],b["exponent-separator"],b["grouping-separator"],b.digit,b["pattern-separator"]]),Me=c.split(b["pattern-separator"]);if(Me.length>2)throw{code:"D3080",stack:new Error().stack};var Ee=function(ue){var Ge=(function(){for(var Ze,$t=0;$t<ue.length;$t++)if(Ze=ue.charAt($t),se.indexOf(Ze)!==-1&&Ze!==b["exponent-separator"])return ue.substring(0,$t)})(),ft=(function(){for(var Ze,$t=ue.length-1;$t>=0;$t--)if(Ze=ue.charAt($t),se.indexOf(Ze)!==-1&&Ze!==b["exponent-separator"])return ue.substring($t+1)})(),We=ue.substring(Ge.length,ue.length-ft.length),vt,pn,Et,Cn,_t=ue.indexOf(b["exponent-separator"],Ge.length);_t===-1||_t>ue.length-ft.length?(vt=We,pn=void 0):(vt=We.substring(0,_t),pn=We.substring(_t+1));var Ut=vt.indexOf(b["decimal-separator"]);return Ut===-1?(Et=vt,Cn=ft):(Et=vt.substring(0,Ut),Cn=vt.substring(Ut+1)),{prefix:Ge,suffix:ft,activePart:We,mantissaPart:vt,exponentPart:pn,integerPart:Et,fractionalPart:Cn,subpicture:ue}},Fe=function(ue){var Ge,ft,We=ue.subpicture,vt=We.indexOf(b["decimal-separator"]);vt!==We.lastIndexOf(b["decimal-separator"])&&(Ge="D3081"),We.indexOf(b.percent)!==We.lastIndexOf(b.percent)&&(Ge="D3082"),We.indexOf(b["per-mille"])!==We.lastIndexOf(b["per-mille"])&&(Ge="D3083"),We.indexOf(b.percent)!==-1&&We.indexOf(b["per-mille"])!==-1&&(Ge="D3084");var pn=!1;for(ft=0;ft<ue.mantissaPart.length;ft++){var Et=ue.mantissaPart.charAt(ft);if(_.indexOf(Et)!==-1||Et===b.digit){pn=!0;break}}pn||(Ge="D3085");var Cn=ue.activePart.split("").map(function(Ze){return se.indexOf(Ze)===-1?"p":"a"}).join("");Cn.indexOf("p")!==-1&&(Ge="D3086"),vt!==-1?(We.charAt(vt-1)===b["grouping-separator"]||We.charAt(vt+1)===b["grouping-separator"])&&(Ge="D3087"):ue.integerPart.charAt(ue.integerPart.length-1)===b["grouping-separator"]&&(Ge="D3088"),We.indexOf(b["grouping-separator"]+b["grouping-separator"])!==-1&&(Ge="D3089");var _t=ue.integerPart.indexOf(b.digit);_t!==-1&&ue.integerPart.substring(0,_t).split("").filter(function(Ze){return _.indexOf(Ze)>-1}).length>0&&(Ge="D3090"),_t=ue.fractionalPart.lastIndexOf(b.digit),_t!==-1&&ue.fractionalPart.substring(_t).split("").filter(function(Ze){return _.indexOf(Ze)>-1}).length>0&&(Ge="D3091");var Ut=typeof ue.exponentPart=="string";if(Ut&&ue.exponentPart.length>0&&(We.indexOf(b.percent)!==-1||We.indexOf(b["per-mille"])!==-1)&&(Ge="D3092"),Ut&&(ue.exponentPart.length===0||ue.exponentPart.split("").filter(function(Ze){return _.indexOf(Ze)===-1}).length>0)&&(Ge="D3093"),Ge)throw{code:Ge,stack:new Error().stack}},Ie=function(ue){var Ge=function(at,qr){for(var ir=[],en=at.indexOf(b["grouping-separator"]);en!==-1;){var Br=(qr?at.substring(0,en):at.substring(en)).split("").filter(function(Pn){return _.indexOf(Pn)!==-1||Pn===b.digit}).length;ir.push(Br),en=ue.integerPart.indexOf(b["grouping-separator"],en+1)}return ir},ft=Ge(ue.integerPart),We=function(at){if(at.length===0)return 0;for(var qr=function(Br,Pn){return Pn===0?Br:qr(Pn,Br%Pn)},ir=at.reduce(qr),en=1;en<=at.length;en++)if(at.indexOf(en*ir)===-1)return 0;return ir},vt=We(ft),pn=Ge(ue.fractionalPart,!0),Et=ue.integerPart.split("").filter(function(at){return _.indexOf(at)!==-1}).length,Cn=Et,_t=ue.fractionalPart.split(""),Ut=_t.filter(function(at){return _.indexOf(at)!==-1}).length,Ze=_t.filter(function(at){return _.indexOf(at)!==-1||at===b.digit}).length,$t=typeof ue.exponentPart=="string";Et===0&&Ze===0&&($t?(Ut=1,Ze=1):Et=1),$t&&Et===0&&ue.integerPart.indexOf(b.digit)!==-1&&(Et=1),Et===0&&Ut===0&&(Ut=1);var Ma=0;return $t&&(Ma=ue.exponentPart.split("").filter(function(at){return _.indexOf(at)!==-1}).length),{integerPartGroupingPositions:ft,regularGrouping:vt,minimumIntegerPartSize:Et,scalingFactor:Cn,prefix:ue.prefix,fractionalPartGroupingPositions:pn,minimumFactionalPartSize:Ut,maximumFactionalPartSize:Ze,minimumExponentSize:Ma,suffix:ue.suffix,picture:ue.subpicture}},rt=Me.map(Ee);rt.forEach(Fe);var Se=rt.map(Ie),je=b["minus-sign"],Rt=b["zero-digit"],it=b["decimal-separator"],In=b["grouping-separator"];Se.length===1&&(Se.push(JSON.parse(JSON.stringify(Se[0]))),Se[1].prefix=je+Se[1].prefix);var Ve;o>=0?Ve=Se[0]:Ve=Se[1];var nr;Ve.picture.indexOf(b.percent)!==-1?nr=o*100:Ve.picture.indexOf(b["per-mille"])!==-1?nr=o*1e3:nr=o;var kn,Ln;if(Ve.minimumExponentSize===0)kn=nr;else{var Io=Math.pow(10,Ve.scalingFactor),Lo=Math.pow(10,Ve.scalingFactor-1);for(kn=nr,Ln=0;kn<Lo;)kn*=10,Ln-=1;for(;kn>Io;)kn/=10,Ln+=1}var Po=F(kn,Ve.maximumFactionalPartSize),Pa=function(ue,Ge){var ft=Math.abs(ue).toFixed(Ge);return Rt!=="0"&&(ft=ft.split("").map(function(We){return We>="0"&&We<="9"?_[We.charCodeAt(0)-48]:We}).join("")),ft},be=Pa(Po,Ve.maximumFactionalPartSize),ht=be.indexOf(".");for(ht===-1?be=be+it:be=be.replace(".",it);be.charAt(0)===Rt;)be=be.substring(1);for(;be.charAt(be.length-1)===Rt;)be=be.substring(0,be.length-1);ht=be.indexOf(it);var rr=Ve.minimumIntegerPartSize-ht,Na=Ve.minimumFactionalPartSize-(be.length-ht-1);if(be=(rr>0?new Array(rr+1).join(Rt):"")+be,be=be+(Na>0?new Array(Na+1).join(Rt):""),ht=be.indexOf(it),Ve.regularGrouping>0)for(var No=Math.floor((ht-1)/Ve.regularGrouping),Wr=1;Wr<=No;Wr++)be=[be.slice(0,ht-Wr*Ve.regularGrouping),In,be.slice(ht-Wr*Ve.regularGrouping)].join("");else Ve.integerPartGroupingPositions.forEach(function(ue){be=[be.slice(0,ht-ue),In,be.slice(ht-ue)].join(""),ht++});if(ht=be.indexOf(it),Ve.fractionalPartGroupingPositions.forEach(function(ue){be=[be.slice(0,ue+ht+1),In,be.slice(ue+ht+1)].join("")}),ht=be.indexOf(it),(Ve.picture.indexOf(it)===-1||ht===be.length-1)&&(be=be.substring(0,be.length-1)),typeof Ln<"u"){var Gr=Pa(Ln,0);rr=Ve.minimumExponentSize-Gr.length,rr>0&&(Gr=new Array(rr+1).join(Rt)+Gr),be=be+b["exponent-separator"]+(Ln<0?je:"")+Gr}return be=Ve.prefix+be+Ve.suffix,be}}function A(o,c){if(!(typeof o>"u")){if(o=F(o),typeof c>"u"?c=10:c=F(c),c<2||c>36)throw{code:"D3100",stack:new Error().stack,value:c};var p=o.toString(c);return p}}function N(o){var c;if(!(typeof o>"u")){if(typeof o=="number")c=o;else if(typeof o=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(o)&&!isNaN(parseFloat(o))&&isFinite(o))c=parseFloat(o);else if(typeof o=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(o))c=Number(o);else if(o===!0)c=1;else if(o===!1)c=0;else throw{code:"D3030",value:o,stack:new Error().stack,index:1};return c}}function W(o){var c;if(!(typeof o>"u"))return c=Math.abs(o),c}function z(o){var c;if(!(typeof o>"u"))return c=Math.floor(o),c}function I(o){var c;if(!(typeof o>"u"))return c=Math.ceil(o),c}function F(o,c){var p;if(!(typeof o>"u")){if(c){var v=o.toString().split("e");o=+(v[0]+"e"+(v[1]?+v[1]+c:c))}p=Math.round(o);var b=p-o;return Math.abs(b)===.5&&Math.abs(p%2)===1&&(p=p-1),c&&(v=p.toString().split("e"),p=+(v[0]+"e"+(v[1]?+v[1]-c:-c))),Object.is(p,-0)&&(p=0),p}}function ae(o){var c;if(!(typeof o>"u")){if(o<0)throw{stack:new Error().stack,code:"D3060",index:1,value:o};return c=Math.sqrt(o),c}}function ke(o,c){var p;if(!(typeof o>"u")){if(p=Math.pow(o,c),!isFinite(p))throw{stack:new Error().stack,code:"D3061",index:1,value:o,exp:c};return p}}function Te(){return Math.random()}function te(o){if(!(typeof o>"u")){var c=!1;if(Array.isArray(o)){if(o.length===1)c=te(o[0]);else if(o.length>1){var p=o.filter(function(v){return te(v)});c=p.length>0}}else typeof o=="string"?o.length>0&&(c=!0):u(o)?o!==0&&(c=!0):o!==null&&typeof o=="object"&&!k(o)?Object.keys(o).length>0&&(c=!0):typeof o=="boolean"&&o===!0&&(c=!0);return c}}function le(o){if(!(typeof o>"u"))return!te(o)}function ve(o,c,p,v){var b=[c],_=ee(o);return _>=2&&b.push(p),_>=3&&b.push(v),b}async function J(o,c){if(!(typeof o>"u")){for(var p=E(),v=0;v<o.length;v++){var b=ve(c,o[v],v,o),_=await c.apply(this,b);typeof _<"u"&&p.push(_)}return p}}async function nt(o,c){if(!(typeof o>"u")){for(var p=E(),v=0;v<o.length;v++){var b=o[v],_=ve(c,b,v,o),M=await c.apply(this,_);te(M)&&p.push(b)}return p}}async function Dt(o,c){if(!(typeof o>"u")){for(var p=!1,v,b=0;b<o.length;b++){var _=o[b],M=!0;if(typeof c<"u"){var Z=ve(c,_,b,o),se=await c.apply(this,Z);M=te(se)}if(M)if(!p)v=_,p=!0;else throw{stack:new Error().stack,code:"D3138",index:b}}if(!p)throw{stack:new Error().stack,code:"D3139"};return v}}function dt(){for(var o=[],c=Array.prototype.slice.call(arguments),p=Math.min.apply(Math,c.map(function(_){return Array.isArray(_)?_.length:0})),v=0;v<p;v++){var b=c.map(_=>_[v]);o.push(b)}return o}async function Ye(o,c,p){if(!(typeof o>"u")){var v,b=ee(c);if(b<2)throw{stack:new Error().stack,code:"D3050",index:1};var _;for(typeof p>"u"&&o.length>0?(v=o[0],_=1):(v=p,_=0);_<o.length;){var M=[v,o[_]];b>=3&&M.push(_),b>=4&&M.push(o),v=await c.apply(this,M),_++}return v}}function pt(o){var c=E();if(Array.isArray(o)){var p={};o.forEach(function(v){var b=pt(v);b.forEach(function(_){p[_]=!0})}),c=pt(p)}else o!==null&&typeof o=="object"&&!k(o)&&Object.keys(o).forEach(v=>c.push(v));return c}function Qt(o,c){var p;if(Array.isArray(o)){p=E();for(var v=0;v<o.length;v++){var b=Qt(o[v],c);typeof b<"u"&&(Array.isArray(b)?b.forEach(_=>p.push(_)):p.push(b))}}else o!==null&&typeof o=="object"&&!k(o)&&(p=o[c]);return p}function un(o,c){return typeof o>"u"?c:typeof c>"u"?o:(Array.isArray(o)||(o=E(o)),Array.isArray(c)||(c=[c]),o.concat(c))}function zr(o){return!(typeof o>"u")}function dn(o){var c=E();if(Array.isArray(o))o.forEach(function(b){c=un(c,dn(b))});else if(o!==null&&typeof o=="object"&&!D(o))for(var p in o){var v={};v[p]=o[p],c.push(v)}else c=o;return c}function V(o){if(!(typeof o>"u")){var c={};return o.forEach(function(p){for(var v in p)c[v]=p[v]}),c}}function Fr(o){if(!(typeof o>"u")){if(o.length<=1)return o;for(var c=o.length,p=new Array(c),v=0;v<c;v++)p[c-v-1]=o[v];return p}}async function tr(o,c){var p=E();for(var v in o){var b=ve(c,o[v],v,o),_=await c.apply(this,b);typeof _<"u"&&p.push(_)}return p}function Mt(o){throw{code:"D3137",stack:new Error().stack,message:o||"$error() function evaluated"}}function Rn(o,c){if(!o)throw{code:"D3141",stack:new Error().stack,message:c||"$assert() statement failed"}}function Vt(o){if(o!==void 0)return o===null?"null":u(o)?"number":typeof o=="string"?"string":typeof o=="boolean"?"boolean":Array.isArray(o)?"array":k(o)?"function":"object"}async function Ne(o,c){if(!(typeof o>"u")){if(o.length<=1)return o;var p;if(typeof c>"u"){if(!T(o)&&!h(o))throw{stack:new Error().stack,code:"D3070",index:1};p=async function(M,Z){return M>Z}}else p=c;var v=async function(M,Z){var se=async function(Ee,Fe,Ie){Fe.length===0?Array.prototype.push.apply(Ee,Ie):Ie.length===0?Array.prototype.push.apply(Ee,Fe):await p(Fe[0],Ie[0])?(Ee.push(Ie[0]),await se(Ee,Fe,Ie.slice(1))):(Ee.push(Fe[0]),await se(Ee,Fe.slice(1),Ie))},Me=[];return await se(Me,M,Z),Me},b=async function(M){if(!Array.isArray(M)||M.length<=1)return M;var Z=Math.floor(M.length/2),se=M.slice(0,Z),Me=M.slice(Z);return se=await b(se),Me=await b(Me),await v(se,Me)},_=await b(o);return _}}function d(o){if(!(typeof o>"u")){if(o.length<=1)return o;for(var c=new Array(o.length),p=0;p<o.length;p++){var v=Math.floor(Math.random()*(p+1));p!==v&&(c[p]=c[v]),c[v]=o[p]}return c}}function g(o){if(!(typeof o>"u")){if(!Array.isArray(o)||o.length<=1)return o;for(var c=m(o)?E():[],p=0;p<o.length;p++){for(var v=o[p],b=!1,_=0;_<c.length;_++)if(Y(v,c[_])){b=!0;break}b||c.push(v)}return c}}async function w(o,c){var p={};for(var v in o){var b=o[v],_=ve(c,b,v,o),M=await c.apply(this,_);te(M)&&(p[v]=b)}return Object.keys(p).length===0&&(p=void 0),p}return{sum:$,count:U,max:L,min:x,average:P,string:q,substring:de,substringBefore:pe,substringAfter:ne,lowercase:R,uppercase:X,length:oe,trim:me,pad:ie,match:j,contains:re,replace:xe,split:_e,join:C,formatNumber:O,formatBase:A,number:N,floor:z,ceil:I,round:F,abs:W,sqrt:ae,power:ke,random:Te,boolean:te,not:le,map:J,zip:dt,filter:nt,single:Dt,foldLeft:Ye,sift:w,keys:pt,lookup:Qt,append:un,exists:zr,spread:dn,merge:V,reverse:Fr,each:tr,error:Mt,assert:Rn,type:Vt,sort:Ne,shuffle:d,distinct:g,base64encode:ut,base64decode:f,encodeUrlComponent:y,encodeUrl:H,decodeUrlComponent:he,decodeUrl:Ue}})();r.exports=l}).call(this)}).call(this,typeof Ua<"u"?Ua:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(t,r,i){var a=t("./datetime"),s=t("./functions"),l=t("./utils"),u=t("./parser"),h=t("./signature"),T=(function(){var E=l.isNumeric,m=l.isArrayOfStrings,k=l.isArrayOfNumbers,D=l.createSequence,B=l.isSequence,ee=l.isFunction,Y=l.isLambda,G=l.isIterable,$=l.isPromise,U=l.getFunctionArity,L=l.isDeepEqual,x=Mt(null);async function P(d,g,w){var o,c=w.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(c&&await c(d,g,w),d.type){case"path":o=await q(d,g,w);break;case"binary":o=await oe(d,g,w);break;case"unary":o=await me(d,g,w);break;case"name":o=ie(d,g);break;case"string":case"number":case"value":o=K(d);break;case"wildcard":o=re(d,g);break;case"descendant":o=xe(d,g);break;case"parent":o=w.lookup(d.slot.label);break;case"condition":o=await z(d,g,w);break;case"block":o=await I(d,g,w);break;case"bind":o=await W(d,g,w);break;case"regex":o=F(d);break;case"function":o=await ve(d,g,w);break;case"variable":o=ae(d,g,w);break;case"lambda":o=Dt(d,g,w);break;case"partial":o=await dt(d,g,w);break;case"apply":o=await le(d,g,w);break;case"transform":o=Te(d,g,w);break}if(Object.prototype.hasOwnProperty.call(d,"predicate"))for(var p=0;p<d.predicate.length;p++)o=await X(d.predicate[p].expr,o,w);d.type!=="path"&&Object.prototype.hasOwnProperty.call(d,"group")&&(o=await O(d.group,o,w));var v=w.lookup(Symbol.for("jsonata.__evaluate_exit"));return v&&await v(d,g,w,o),o&&B(o)&&!o.tupleStream&&(d.keepArray&&(o.keepSingleton=!0),o.length===0?o=void 0:o.length===1&&(o=o.keepSingleton?o:o[0])),o}async function q(d,g,w){var o;Array.isArray(g)&&d.steps[0].type!=="variable"?o=g:o=D(g);for(var c,p=!1,v=void 0,b=0;b<d.steps.length;b++){var _=d.steps[b];if(_.tuple&&(p=!0),b===0&&_.consarray?c=await P(_,o,w):p?v=await R(_,o,v,w):c=await pe(_,o,w,b===d.steps.length-1),!p&&(typeof c>"u"||c.length===0))break;typeof _.focus>"u"&&(o=c)}if(p)if(d.tuple)c=v;else for(c=D(),b=0;b<v.length;b++)c.push(v[b]["@"]);return d.keepSingletonArray&&(Array.isArray(c)&&c.cons&&!c.sequence&&(c=D(c)),c.keepSingleton=!0),d.hasOwnProperty("group")&&(c=await O(d.group,p?v:c,w)),c}function de(d,g){var w=Mt(d);for(const o in g)w.bind(o,g[o]);return w}async function pe(d,g,w,o){var c;if(d.type==="sort")return c=await ke(d,g,w),d.stages&&(c=await ne(d.stages,c,w)),c;c=D();for(var p=0;p<g.length;p++){var v=await P(d,g[p],w);if(d.stages)for(var b=0;b<d.stages.length;b++)v=await X(d.stages[b].expr,v,w);typeof v<"u"&&c.push(v)}var _=D();return o&&c.length===1&&Array.isArray(c[0])&&!B(c[0])?_=c[0]:c.forEach(function(M){!Array.isArray(M)||M.cons?_.push(M):M.forEach(Z=>_.push(Z))}),_}async function ne(d,g,w){for(var o=g,c=0;c<d.length;c++){var p=d[c];switch(p.type){case"filter":o=await X(p.expr,o,w);break;case"index":for(var v=0;v<o.length;v++){var b=o[v];b[p.value]=v}break}}return o}async function R(d,g,w,o){var c;if(d.type==="sort"){if(w)c=await ke(d,w,o);else{var p=await ke(d,g,o);c=D(),c.tupleStream=!0;for(var v=0;v<p.length;v++){var b={"@":p[v]};b[d.index]=v,c.push(b)}}return d.stages&&(c=await ne(d.stages,c,o)),c}c=D(),c.tupleStream=!0;var _=o;w===void 0&&(w=g.map(Me=>({"@":Me})));for(var M=0;M<w.length;M++){_=de(o,w[M]);var Z=await P(d,w[M]["@"],_);if(typeof Z<"u"){Array.isArray(Z)||(Z=[Z]);for(var se=0;se<Z.length;se++)b={},Object.assign(b,w[M]),Z.tupleStream?Object.assign(b,Z[se]):(d.focus?(b[d.focus]=Z[se],b["@"]=w[M]["@"]):b["@"]=Z[se],d.index&&(b[d.index]=se),d.ancestor&&(b[d.ancestor.label]=w[M]["@"])),c.push(b)}}return d.stages&&(c=await ne(d.stages,c,o)),c}async function X(d,g,w){var o=D();if(g&&g.tupleStream&&(o.tupleStream=!0),Array.isArray(g)||(g=D(g)),d.type==="number"){var c=Math.floor(d.value);c<0&&(c=g.length+c);var p=await g[c];typeof p<"u"&&(Array.isArray(p)?o=p:o.push(p))}else for(c=0;c<g.length;c++){var p=g[c],v=p,b=w;g.tupleStream&&(v=p["@"],b=de(w,p));var _=await P(d,v,b);E(_)&&(_=[_]),k(_)?_.forEach(function(Z){var se=Math.floor(Z);se<0&&(se=g.length+se),se===c&&o.push(p)}):s.boolean(_)&&o.push(p)}return o}async function oe(d,g,w){var o,c=await P(d.lhs,g,w),p=d.value,v=async()=>await P(d.rhs,g,w);if(p==="and"||p==="or")try{return await Ue(c,v,p)}catch(_){throw _.position=d.position,_.token=p,_}var b=await v();try{switch(p){case"+":case"-":case"*":case"/":case"%":o=f(c,b,p);break;case"=":case"!=":o=y(c,b,p);break;case"<":case"<=":case">":case">=":o=H(c,b,p);break;case"&":o=C(c,b);break;case"..":o=N(c,b);break;case"in":o=he(c,b);break}}catch(_){throw _.position=d.position,_.token=p,_}return o}async function me(d,g,w){var o;switch(d.value){case"-":if(o=await P(d.expression,g,w),typeof o>"u")o=void 0;else if(E(o))o=-o;else throw{code:"D1002",stack:new Error().stack,position:d.position,token:d.value,value:o};break;case"[":o=[];let v=await Promise.all(d.expressions.map(async(b,_)=>(w.isParallelCall=_>0,[b,await P(b,g,w)])));for(let b of v){var[c,p]=b;typeof p<"u"&&(c.value==="["?o.push(p):o=s.append(o,p))}d.consarray&&Object.defineProperty(o,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":o=await O(d,g,w);break}return o}function ie(d,g,w){return s.lookup(g,d.value)}function K(d){return d.value}function re(d,g){var w=D();return Array.isArray(g)&&g.outerWrapper&&g.length>0&&(g=g[0]),g!==null&&typeof g=="object"&&Object.keys(g).forEach(function(o){var c=g[o];Array.isArray(c)?(c=j(c),w=s.append(w,c)):w.push(c)}),w}function j(d,g){return typeof g>"u"&&(g=[]),Array.isArray(d)?d.forEach(function(w){j(w,g)}):g.push(d),g}function xe(d,g){var w,o=D();return typeof g<"u"&&(ut(g,o),o.length===1?w=o[0]:w=o),w}function ut(d,g){Array.isArray(d)||g.push(d),Array.isArray(d)?d.forEach(function(w){ut(w,g)}):d!==null&&typeof d=="object"&&Object.keys(d).forEach(function(w){ut(d[w],g)})}function f(d,g,w){var o;if(typeof d<"u"&&!E(d))throw{code:"T2001",stack:new Error().stack,value:d};if(typeof g<"u"&&!E(g))throw{code:"T2002",stack:new Error().stack,value:g};if(typeof d>"u"||typeof g>"u")return o;switch(w){case"+":o=d+g;break;case"-":o=d-g;break;case"*":o=d*g;break;case"/":o=d/g;break;case"%":o=d%g;break}return o}function y(d,g,w){var o,c=typeof d,p=typeof g;if(c==="undefined"||p==="undefined")return!1;switch(w){case"=":o=L(d,g);break;case"!=":o=!L(d,g);break}return o}function H(d,g,w){var o,c=typeof d,p=typeof g,v=c==="undefined"||c==="string"||c==="number",b=p==="undefined"||p==="string"||p==="number";if(!v||!b)throw{code:"T2010",stack:new Error().stack,value:c==="string"||c==="number"?g:d};if(!(c==="undefined"||p==="undefined")){if(c!==p)throw{code:"T2009",stack:new Error().stack,value:d,value2:g};switch(w){case"<":o=d<g;break;case"<=":o=d<=g;break;case">":o=d>g;break;case">=":o=d>=g;break}return o}}function he(d,g){var w=!1;if(typeof d>"u"||typeof g>"u")return!1;Array.isArray(g)||(g=[g]);for(var o=0;o<g.length;o++)if(g[o]===d){w=!0;break}return w}async function Ue(d,g,w){var o,c=_e(d);switch(w){case"and":o=c&&_e(await g());break;case"or":o=c||_e(await g());break}return o}function _e(d){var g=s.boolean(d);return typeof g>"u"?!1:g}function C(d,g){var w,o="",c="";return typeof d<"u"&&(o=s.string(d)),typeof g<"u"&&(c=s.string(g)),w=o.concat(c),w}async function O(d,g,w){var o={},c={},p=!!(g&&g.tupleStream);Array.isArray(g)||(g=D(g)),g.length===0&&g.push(void 0);for(var v=0;v<g.length;v++)for(var b=g[v],_=p?de(w,b):w,M=0;M<d.lhs.length;M++){var Z=d.lhs[M],se=await P(Z[0],p?b["@"]:b,_);if(typeof se!="string"&&se!==void 0)throw{code:"T1003",stack:new Error().stack,position:d.position,value:se};if(se!==void 0){var Me={data:b,exprIndex:M};if(c.hasOwnProperty(se)){if(c[se].exprIndex!==M)throw{code:"D1009",stack:new Error().stack,position:d.position,value:se};c[se].data=s.append(c[se].data,b)}else c[se]=Me}}let Ee=await Promise.all(Object.keys(c).map(async(Ie,rt)=>{let Se=c[Ie];var je=Se.data,Rt=w;if(p){var it=A(Se.data);je=it["@"],delete it["@"],Rt=de(w,it)}return w.isParallelCall=rt>0,[Ie,await P(d.lhs[Se.exprIndex][1],je,Rt)]}));for(let Ie of Ee){var[se,Fe]=await Ie;typeof Fe<"u"&&(o[se]=Fe)}return o}function A(d){if(!Array.isArray(d))return d;var g={};Object.assign(g,d[0]);for(var w=1;w<d.length;w++)for(const o in d[w])g[o]=s.append(g[o],d[w][o]);return g}function N(d,g){var w;if(typeof d<"u"&&!Number.isInteger(d))throw{code:"T2003",stack:new Error().stack,value:d};if(typeof g<"u"&&!Number.isInteger(g))throw{code:"T2004",stack:new Error().stack,value:g};if(typeof d>"u"||typeof g>"u"||d>g)return w;var o=g-d+1;if(o>1e7)throw{code:"D2014",stack:new Error().stack,value:o};w=new Array(o);for(var c=d,p=0;c<=g;c++,p++)w[p]=c;return w.sequence=!0,w}async function W(d,g,w){var o=await P(d.rhs,g,w);return w.bind(d.lhs.value,o),o}async function z(d,g,w){var o,c=await P(d.condition,g,w);return s.boolean(c)?o=await P(d.then,g,w):typeof d.else<"u"&&(o=await P(d.else,g,w)),o}async function I(d,g,w){for(var o,c=Mt(w),p=0;p<d.expressions.length;p++)o=await P(d.expressions[p],g,c);return o}function F(d){var g=new Ne.RegexEngine(d.value),w=function(o,c){var p;g.lastIndex=c||0;var v=g.exec(o);if(v!==null){if(p={match:v[0],start:v.index,end:v.index+v[0].length,groups:[]},v.length>1)for(var b=1;b<v.length;b++)p.groups.push(v[b]);p.next=function(){if(!(g.lastIndex>=o.length)){var _=w(o,g.lastIndex);if(_&&_.match==="")throw{code:"D1004",stack:new Error().stack,position:d.position,value:d.value.source};return _}}}return p};return w}function ae(d,g,w){var o;return d.value===""?o=g&&g.outerWrapper?g[0]:g:o=w.lookup(d.value),o}async function ke(d,g,w){var o,c=g,p=!!g.tupleStream,v=async function(_,M){for(var Z=0,se=0;Z===0&&se<d.terms.length;se++){var Me=d.terms[se],Ee=_,Fe=w;p&&(Ee=_["@"],Fe=de(w,_));var Ie=await P(Me.expression,Ee,Fe);Ee=M,Fe=w,p&&(Ee=M["@"],Fe=de(w,M));var rt=await P(Me.expression,Ee,Fe),Se=typeof Ie,je=typeof rt;if(Se==="undefined"){Z=je==="undefined"?0:1;continue}if(je==="undefined"){Z=-1;continue}if(!(Se==="string"||Se==="number")||!(je==="string"||je==="number"))throw{code:"T2008",stack:new Error().stack,position:d.position,value:Se==="string"||Se==="number"?rt:Ie};if(Se!==je)throw{code:"T2007",stack:new Error().stack,position:d.position,value:Ie,value2:rt};Ie!==rt&&(Ie<rt?Z=-1:Z=1,Me.descending===!0&&(Z=-Z))}return Z===1},b={environment:w,input:g};return o=await s.sort.apply(b,[c,v]),o}function Te(d,g,w){var o=async function(c){if(!(typeof c>"u")){var p=w.lookup("clone");if(!ee(p))throw{code:"T2013",stack:new Error().stack,position:d.position};var v=await J(p,[c],null,w),b=await P(d.pattern,v,w);if(typeof b<"u"){Array.isArray(b)||(b=[b]);for(var _=0;_<b.length;_++){var M=b[_];if(M&&(M.isPrototypeOf(v)||M instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:d.position};var Z=await P(d.update,M,w),se=typeof Z;if(se!=="undefined"){if(se!=="object"||Z===null||Array.isArray(Z))throw{code:"T2011",stack:new Error().stack,position:d.update.position,value:Z};for(var Me in Z)M[Me]=Z[Me]}if(typeof d.delete<"u"){var Ee=await P(d.delete,M,w);if(typeof Ee<"u"){var Fe=Ee;if(Array.isArray(Ee)||(Ee=[Ee]),!m(Ee))throw{code:"T2012",stack:new Error().stack,position:d.delete.position,value:Fe};for(var Ie=0;Ie<Ee.length;Ie++)typeof M=="object"&&M!==null&&delete M[Ee[Ie]]}}}}return v}};return V(o,"<(oa):o>")}var te=u("function($f, $g) { function($x){ $g($f($x)) } }");async function le(d,g,w){var o,c=await P(d.lhs,g,w);if(d.rhs.type==="function")o=await ve(d.rhs,g,w,{context:c});else{var p=await P(d.rhs,g,w);if(!ee(p))throw{code:"T2006",stack:new Error().stack,position:d.position,value:p};if(ee(c)){var v=await P(te,null,w);o=await J(v,[c,p],null,w)}else o=await J(p,[c],null,w)}return o}async function ve(d,g,w,o){var c,p=await P(d.procedure,g,w);if(typeof p>"u"&&d.procedure.type==="path"&&w.lookup(d.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:d.position,token:d.procedure.steps[0].value};var v=[];typeof o<"u"&&v.push(o.context);for(var b=0;b<d.arguments.length;b++){const M=await P(d.arguments[b],g,w);if(ee(M)){const Z=async function(...se){return await J(M,se,null,w)};Z.arity=U(M),v.push(Z)}else v.push(M)}var _=d.procedure.type==="path"?d.procedure.steps[0].value:d.procedure.value;try{typeof p=="object"&&(p.token=_,p.position=d.position),c=await J(p,v,g,w)}catch(M){throw M.position||(M.position=d.position),M.token||(M.token=_),M}return c}async function J(d,g,w,o){var c;for(c=await nt(d,g,w,o);Y(c)&&c.thunk===!0;){var p=await P(c.body.procedure,c.input,c.environment);c.body.procedure.type==="variable"&&(p.token=c.body.procedure.value),p.position=c.body.procedure.position;for(var v=[],b=0;b<c.body.arguments.length;b++)v.push(await P(c.body.arguments[b],c.input,c.environment));c=await nt(p,v,w,o)}return c}async function nt(d,g,w,o){var c;try{var p=g;if(d&&(p=Ye(d.signature,g,w)),Y(d))c=await pt(d,p);else if(d&&d._jsonata_function===!0){var v={environment:o,input:w};c=d.implementation.apply(v,p),G(c)&&(c=c.next().value),$(c)&&(c=await c)}else if(typeof d=="function")c=d.apply(w,p),$(c)&&(c=await c);else throw{code:"T1006",stack:new Error().stack}}catch(b){throw d&&(typeof b.token>"u"&&typeof d.token<"u"&&(b.token=d.token),b.position=d.position||b.position),b}return c}function Dt(d,g,w){var o={_jsonata_lambda:!0,input:g,environment:w,arguments:d.arguments,signature:d.signature,body:d.body};return d.thunk===!0&&(o.thunk=!0),o.apply=async function(c,p){return await J(o,p,g,c?c.environment:w)},o}async function dt(d,g,w){for(var o,c=[],p=0;p<d.arguments.length;p++){var v=d.arguments[p];v.type==="operator"&&v.value==="?"?c.push(v):c.push(await P(v,g,w))}var b=await P(d.procedure,g,w);if(typeof b>"u"&&d.procedure.type==="path"&&w.lookup(d.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:d.position,token:d.procedure.steps[0].value};if(Y(b))o=Qt(b,c);else if(b&&b._jsonata_function===!0)o=un(b.implementation,c);else if(typeof b=="function")o=un(b,c);else throw{code:"T1008",stack:new Error().stack,position:d.position,token:d.procedure.type==="path"?d.procedure.steps[0].value:d.procedure.value};return o}function Ye(d,g,w){if(typeof d>"u")return g;var o=d.validate(g,w);return o}async function pt(d,g){var w,o=Mt(d.environment);return d.arguments.forEach(function(c,p){o.bind(c.value,g[p])}),typeof d.body=="function"?w=await zr(d.body,o):w=await P(d.body,d.input,o),w}function Qt(d,g){var w=Mt(d.environment),o=[];d.arguments.forEach(function(p,v){var b=g[v];b&&b.type==="operator"&&b.value==="?"?o.push(p):w.bind(p.value,b)});var c={_jsonata_lambda:!0,input:d.input,environment:w,arguments:o,body:d.body};return c}function un(d,g){var w=dn(d);w=w.map(function(v){return"$"+v.trim()});var o="function("+w.join(", ")+"){ _ }",c=u(o);c.body=d;var p=Qt(c,g);return p}async function zr(d,g){var w=dn(d),o=w.map(function(v){return g.lookup(v.trim())}),c={environment:g},p=d.apply(c,o);return $(p)&&(p=await p),p}function dn(d){var g=d.toString(),w=/\(([^)]*)\)/.exec(g)[1],o=w.split(",");return o}function V(d,g){var w={_jsonata_function:!0,implementation:d};return typeof g<"u"&&(w.signature=h(g)),w}async function Fr(d,g){if(!(typeof d>"u")){var w=this.input;typeof g<"u"&&(w=g,Array.isArray(w)&&!B(w)&&(w=D(w),w.outerWrapper=!0));try{var o=u(d,!1)}catch(p){throw Vt(p),{stack:new Error().stack,code:"D3120",value:p.message,error:p}}try{var c=await P(o,w,this.environment)}catch(p){throw Vt(p),{stack:new Error().stack,code:"D3121",value:p.message,error:p}}return c}}function tr(d){if(!(typeof d>"u"))return JSON.parse(s.string(d))}function Mt(d){var g={};const w={bind:function(c,p){g[c]=p},lookup:function(c){var p;return g.hasOwnProperty(c)?p=g[c]:d&&(p=d.lookup(c)),p},timestamp:d?d.timestamp:null,async:d?d.async:!1,isParallelCall:d?d.isParallelCall:!1,global:d?d.global:{ancestry:[null]}};if(d){var o=d.lookup(Symbol.for("jsonata.__createFrame_push"));o&&o(d,w)}return w}x.bind("sum",V(s.sum,"<a<n>:n>")),x.bind("count",V(s.count,"<a:n>")),x.bind("max",V(s.max,"<a<n>:n>")),x.bind("min",V(s.min,"<a<n>:n>")),x.bind("average",V(s.average,"<a<n>:n>")),x.bind("string",V(s.string,"<x-b?:s>")),x.bind("substring",V(s.substring,"<s-nn?:s>")),x.bind("substringBefore",V(s.substringBefore,"<s-s:s>")),x.bind("substringAfter",V(s.substringAfter,"<s-s:s>")),x.bind("lowercase",V(s.lowercase,"<s-:s>")),x.bind("uppercase",V(s.uppercase,"<s-:s>")),x.bind("length",V(s.length,"<s-:n>")),x.bind("trim",V(s.trim,"<s-:s>")),x.bind("pad",V(s.pad,"<s-ns?:s>")),x.bind("match",V(s.match,"<s-f<s:o>n?:a<o>>")),x.bind("contains",V(s.contains,"<s-(sf):b>")),x.bind("replace",V(s.replace,"<s-(sf)(sf)n?:s>")),x.bind("split",V(s.split,"<s-(sf)n?:a<s>>")),x.bind("join",V(s.join,"<a<s>s?:s>")),x.bind("formatNumber",V(s.formatNumber,"<n-so?:s>")),x.bind("formatBase",V(s.formatBase,"<n-n?:s>")),x.bind("formatInteger",V(a.formatInteger,"<n-s:s>")),x.bind("parseInteger",V(a.parseInteger,"<s-s:n>")),x.bind("number",V(s.number,"<(nsb)-:n>")),x.bind("floor",V(s.floor,"<n-:n>")),x.bind("ceil",V(s.ceil,"<n-:n>")),x.bind("round",V(s.round,"<n-n?:n>")),x.bind("abs",V(s.abs,"<n-:n>")),x.bind("sqrt",V(s.sqrt,"<n-:n>")),x.bind("power",V(s.power,"<n-n:n>")),x.bind("random",V(s.random,"<:n>")),x.bind("boolean",V(s.boolean,"<x-:b>")),x.bind("not",V(s.not,"<x-:b>")),x.bind("map",V(s.map,"<af>")),x.bind("zip",V(s.zip,"<a+>")),x.bind("filter",V(s.filter,"<af>")),x.bind("single",V(s.single,"<af?>")),x.bind("reduce",V(s.foldLeft,"<afj?:j>")),x.bind("sift",V(s.sift,"<o-f?:o>")),x.bind("keys",V(s.keys,"<x-:a<s>>")),x.bind("lookup",V(s.lookup,"<x-s:x>")),x.bind("append",V(s.append,"<xx:a>")),x.bind("exists",V(s.exists,"<x:b>")),x.bind("spread",V(s.spread,"<x-:a<o>>")),x.bind("merge",V(s.merge,"<a<o>:o>")),x.bind("reverse",V(s.reverse,"<a:a>")),x.bind("each",V(s.each,"<o-f:a>")),x.bind("error",V(s.error,"<s?:x>")),x.bind("assert",V(s.assert,"<bs?:x>")),x.bind("type",V(s.type,"<x:s>")),x.bind("sort",V(s.sort,"<af?:a>")),x.bind("shuffle",V(s.shuffle,"<a:a>")),x.bind("distinct",V(s.distinct,"<x:x>")),x.bind("base64encode",V(s.base64encode,"<s-:s>")),x.bind("base64decode",V(s.base64decode,"<s-:s>")),x.bind("encodeUrlComponent",V(s.encodeUrlComponent,"<s-:s>")),x.bind("encodeUrl",V(s.encodeUrl,"<s-:s>")),x.bind("decodeUrlComponent",V(s.decodeUrlComponent,"<s-:s>")),x.bind("decodeUrl",V(s.decodeUrl,"<s-:s>")),x.bind("eval",V(Fr,"<sx?:x>")),x.bind("toMillis",V(a.toMillis,"<s-s?:n>")),x.bind("fromMillis",V(a.fromMillis,"<n-s?s?:s>")),x.bind("clone",V(tr,"<(oa)-:o>"));var Rn={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Vt(d){var g=Rn[d.code];if(typeof g<"u"){var w=g.replace(/\{\{\{([^}]+)}}}/g,function(){return d[arguments[1]]});w=w.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(d[arguments[1]])}),d.message=w}}function Ne(d,g){var w,o;try{w=u(d,g&&g.recover),o=w.errors,delete w.errors}catch(v){throw Vt(v),v}var c=Mt(x),p=new Date;return c.bind("now",V(function(v,b){return a.fromMillis(p.getTime(),v,b)},"<s?s?:s>")),c.bind("millis",V(function(){return p.getTime()},"<:n>")),g&&g.RegexEngine?Ne.RegexEngine=g.RegexEngine:Ne.RegexEngine=RegExp,{evaluate:async function(v,b,_){if(typeof o<"u"){var M={code:"S0500",position:0};throw Vt(M),M}if(typeof b<"u"){var Z;Z=Mt(c);for(var se in b)Z.bind(se,b[se])}else Z=c;Z.bind("$",v),p=new Date,Z.timestamp=p,Array.isArray(v)&&!B(v)&&(v=D(v),v.outerWrapper=!0);var Me;try{return Me=await P(w,v,Z),typeof _=="function"&&_(null,Me),Me}catch(Ee){throw Vt(Ee),Ee}},assign:function(v,b){c.bind(v,b)},registerFunction:function(v,b,_){var M=V(b,_);c.bind(v,M)},ast:function(){return w},errors:function(){return o}}}return Ne.parser=u,Ne})();r.exports=T},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(t,r,i){var a=t("./signature");const s=(()=>{var l={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,"?:":40,"??":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},u={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},h=function(E){var m=0,k=E.length,D=function(Y,G){var $={type:Y,value:G,position:m};return $},B=function(){for(var Y=m,G=0,$,U,L=function(P){if(E.charAt(P)==="/"&&G===0){for(var q=0;E.charAt(P-(q+1))==="\\";)q++;if(q%2===0)return!0}return!1};m<k;){var x=E.charAt(m);if(L(m)){if($=E.substring(Y,m),$==="")throw{code:"S0301",stack:new Error().stack,position:m};for(m++,x=E.charAt(m),Y=m;x==="i"||x==="m";)m++,x=E.charAt(m);return U=E.substring(Y,m)+"g",new RegExp($,U)}(x==="("||x==="["||x==="{")&&E.charAt(m-1)!=="\\"&&G++,(x===")"||x==="]"||x==="}")&&E.charAt(m-1)!=="\\"&&G--,m++}throw{code:"S0302",stack:new Error().stack,position:m}},ee=function(Y){if(m>=k)return null;for(var G=E.charAt(m);m<k&&` 	
\r\v`.indexOf(G)>-1;)m++,G=E.charAt(m);if(G==="/"&&E.charAt(m+1)==="*"){var $=m;for(m+=2,G=E.charAt(m);!(G==="*"&&E.charAt(m+1)==="/");)if(G=E.charAt(++m),m>=k)throw{code:"S0106",stack:new Error().stack,position:$};return m+=2,G=E.charAt(m),ee(Y)}if(Y!==!0&&G==="/")return m++,D("regex",B());if(G==="."&&E.charAt(m+1)===".")return m+=2,D("operator","..");if(G===":"&&E.charAt(m+1)==="=")return m+=2,D("operator",":=");if(G==="!"&&E.charAt(m+1)==="=")return m+=2,D("operator","!=");if(G===">"&&E.charAt(m+1)==="=")return m+=2,D("operator",">=");if(G==="<"&&E.charAt(m+1)==="=")return m+=2,D("operator","<=");if(G==="*"&&E.charAt(m+1)==="*")return m+=2,D("operator","**");if(G==="~"&&E.charAt(m+1)===">")return m+=2,D("operator","~>");if(G==="?"&&E.charAt(m+1)===":")return m+=2,D("operator","?:");if(G==="?"&&E.charAt(m+1)==="?")return m+=2,D("operator","??");if(Object.prototype.hasOwnProperty.call(l,G))return m++,D("operator",G);if(G==='"'||G==="'"){var U=G;m++;for(var L="";m<k;){if(G=E.charAt(m),G==="\\")if(m++,G=E.charAt(m),Object.prototype.hasOwnProperty.call(u,G))L+=u[G];else if(G==="u"){var x=E.substr(m+1,4);if(/^[0-9a-fA-F]+$/.test(x)){var P=parseInt(x,16);L+=String.fromCharCode(P),m+=4}else throw{code:"S0104",stack:new Error().stack,position:m}}else throw{code:"S0103",stack:new Error().stack,position:m,token:G};else{if(G===U)return m++,D("string",L);L+=G}m++}throw{code:"S0101",stack:new Error().stack,position:m}}var q=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,de=q.exec(E.substring(m));if(de!==null){var pe=parseFloat(de[0]);if(!isNaN(pe)&&isFinite(pe))return m+=de[0].length,D("number",pe);throw{code:"S0102",stack:new Error().stack,position:m,token:de[0]}}var ne;if(G==="`"){m++;var R=E.indexOf("`",m);if(R!==-1)return ne=E.substring(m,R),m=R+1,D("name",ne);throw m=k,{code:"S0105",stack:new Error().stack,position:m}}for(var X=m,oe;;)if(oe=E.charAt(X),X===k||` 	
\r\v`.indexOf(oe)>-1||Object.prototype.hasOwnProperty.call(l,oe)){if(E.charAt(m)==="$")return ne=E.substring(m+1,X),m=X,D("variable",ne);switch(ne=E.substring(m,X),m=X,ne){case"or":case"in":case"and":return D("operator",ne);case"true":return D("value",!0);case"false":return D("value",!1);case"null":return D("value",null);default:return m===k&&ne===""?null:D("name",ne)}}else X++};return ee},T=function(E,m){var k,D,B={},ee=[],Y=function(){var f=[];k.id!=="(end)"&&f.push({type:k.type,value:k.value,position:k.position});for(var y=D();y!==null;)f.push(y),y=D();return f},G={nud:function(){var f={code:"S0211",token:this.value,position:this.position};if(m)return f.remaining=Y(),f.type="error",ee.push(f),f;throw f.stack=new Error().stack,f}},$=function(f,y){var H=B[f];return y=y||0,H?y>=H.lbp&&(H.lbp=y):(H=Object.create(G),H.id=H.value=f,H.lbp=y,B[f]=H),H},U=function(f){if(m){f.remaining=Y(),ee.push(f);var y=B["(error)"];return k=Object.create(y),k.error=f,k.type="(error)",k}else throw f.stack=new Error().stack,f},L=function(f,y){if(f&&k.id!==f){var H;k.id==="(end)"?H="S0203":H="S0202";var he={code:H,position:k.position,token:k.value,value:f};return U(he)}var Ue=D(y);if(Ue===null)return k=B["(end)"],k.position=E.length,k;var _e=Ue.value,C=Ue.type,O;switch(C){case"name":case"variable":O=B["(name)"];break;case"operator":if(O=B[_e],!O)return U({code:"S0204",stack:new Error().stack,position:Ue.position,token:_e});break;case"string":case"number":case"value":O=B["(literal)"];break;case"regex":C="regex",O=B["(regex)"];break;default:return U({code:"S0205",stack:new Error().stack,position:Ue.position,token:_e})}return k=Object.create(O),k.value=_e,k.type=C,k.position=Ue.position,k},x=function(f){var y,H=k;for(L(null,!0),y=H.nud();f<k.lbp;)H=k,L(),y=H.led(y);return y},P=function(f){var y=$(f,0);y.nud=function(){return this}},q=function(f,y,H){var he=y||l[f],Ue=$(f,he);return Ue.led=H||function(_e){return this.lhs=_e,this.rhs=x(he),this.type="binary",this},Ue},de=function(f,y,H){var he=$(f,y);return he.led=H,he},pe=function(f,y){var H=$(f);return H.nud=y||function(){return this.expression=x(70),this.type="unary",this},H};P("(end)"),P("(name)"),P("(literal)"),P("(regex)"),$(":"),$(";"),$(","),$(")"),$("]"),$("}"),$(".."),q("."),q("+"),q("-"),q("*"),q("/"),q("%"),q("="),q("<"),q(">"),q("!="),q("<="),q(">="),q("&"),q("and"),q("or"),q("in"),P("and"),P("or"),P("in"),pe("-"),q("~>"),q("??",l["??"],function(f){return this.type="condition",this.condition={type:"function",value:"(",procedure:{type:"variable",value:"exists"},arguments:[f]},this.then=f,this.else=x(0),this}),de("(error)",10,function(f){return this.lhs=f,this.error=k.error,this.remaining=Y(),this.type="error",this}),pe("*",function(){return this.type="wildcard",this}),pe("**",function(){return this.type="descendant",this}),pe("%",function(){return this.type="parent",this}),q("(",l["("],function(f){if(this.procedure=f,this.type="function",this.arguments=[],k.id!==")")for(;k.type==="operator"&&k.id==="?"?(this.type="partial",this.arguments.push(k),L("?")):this.arguments.push(x(0)),k.id===",";)L(",");if(L(")",!0),f.type==="name"&&(f.value==="function"||f.value==="λ")){if(this.arguments.forEach(function(_e,C){if(_e.type!=="variable")return U({code:"S0208",stack:new Error().stack,position:_e.position,token:_e.value,value:C+1})}),this.type="lambda",k.id==="<"){for(var y=k.position,H=1,he="<";H>0&&k.id!=="{"&&k.id!=="(end)";){var Ue=L();Ue.id===">"?H--:Ue.id==="<"&&H++,he+=Ue.value}L(">");try{this.signature=a(he)}catch(_e){return _e.position=y+_e.offset,U(_e)}}L("{"),this.body=x(0),L("}")}return this}),pe("(",function(){for(var f=[];k.id!==")"&&(f.push(x(0)),k.id===";");)L(";");return L(")",!0),this.type="block",this.expressions=f,this}),pe("[",function(){var f=[];if(k.id!=="]")for(;;){var y=x(0);if(k.id===".."){var H={type:"binary",value:"..",position:k.position,lhs:y};L(".."),H.rhs=x(0),y=H}if(f.push(y),k.id!==",")break;L(",")}return L("]",!0),this.expressions=f,this.type="unary",this}),q("[",l["["],function(f){if(k.id==="]"){for(var y=f;y&&y.type==="binary"&&y.value==="[";)y=y.lhs;return y.keepArray=!0,L("]"),f}else return this.lhs=f,this.rhs=x(l["]"]),this.type="binary",L("]",!0),this}),q("^",l["^"],function(f){L("(");for(var y=[];;){var H={descending:!1};if(k.id==="<"?L("<"):k.id===">"&&(H.descending=!0,L(">")),H.expression=x(0),y.push(H),k.id!==",")break;L(",")}return L(")"),this.lhs=f,this.rhs=y,this.type="binary",this});var ne=function(f){var y=[];if(k.id!=="}")for(;;){var H=x(0);L(":");var he=x(0);if(y.push([H,he]),k.id!==",")break;L(",")}return L("}",!0),typeof f>"u"?(this.lhs=y,this.type="unary"):(this.lhs=f,this.rhs=y,this.type="binary"),this};pe("{",ne),q("{",l["{"],ne),de(":=",l[":="],function(f){return f.type!=="variable"?U({code:"S0212",stack:new Error().stack,position:f.position,token:f.value}):(this.lhs=f,this.rhs=x(l[":="]-1),this.type="binary",this)}),q("@",l["@"],function(f){return this.lhs=f,this.rhs=x(l["@"]),this.rhs.type!=="variable"?U({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),q("#",l["#"],function(f){return this.lhs=f,this.rhs=x(l["#"]),this.rhs.type!=="variable"?U({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),q("?",l["?"],function(f){return this.type="condition",this.condition=f,this.then=x(0),k.id===":"&&(L(":"),this.else=x(0)),this}),q("?:",l["?:"],function(f){return this.type="condition",this.condition=f,this.then=f,this.else=x(0),this}),pe("|",function(){return this.type="transform",this.pattern=x(0),L("|"),this.update=x(0),k.id===","&&(L(","),this.delete=x(0)),L("|"),this});var R=function(f){var y;if(f.type==="function"&&!f.predicate){var H={type:"lambda",thunk:!0,arguments:[],position:f.position};H.body=f,y=H}else if(f.type==="condition")f.then=R(f.then),typeof f.else<"u"&&(f.else=R(f.else)),y=f;else if(f.type==="block"){var he=f.expressions.length;he>0&&(f.expressions[he-1]=R(f.expressions[he-1])),y=f}else y=f;return y},X=0,oe=0,me=[],ie=function(f,y){switch(f.type){case"name":case"wildcard":y.level--,y.level===0&&(typeof f.ancestor>"u"||(me[y.index].slot.label=f.ancestor.label),f.ancestor=y,f.tuple=!0);break;case"parent":y.level++;break;case"block":f.expressions.length>0&&(f.tuple=!0,y=ie(f.expressions[f.expressions.length-1],y));break;case"path":f.tuple=!0;var H=f.steps.length-1;for(y=ie(f.steps[H--],y);y.level>0&&H>=0;)y=ie(f.steps[H--],y);break;default:throw{code:"S0217",token:f.type,position:f.position}}return y},K=function(f,y){if(typeof y.seekingParent<"u"||y.type==="parent"){var H=typeof y.seekingParent<"u"?y.seekingParent:[];y.type==="parent"&&H.push(y.slot),typeof f.seekingParent>"u"?f.seekingParent=H:Array.prototype.push.apply(f.seekingParent,H)}},re=function(f){var y=f.steps.length-1,H=f.steps[y],he=typeof H.seekingParent<"u"?H.seekingParent:[];H.type==="parent"&&he.push(H.slot);for(var Ue=0;Ue<he.length;Ue++){var _e=he[Ue];for(y=f.steps.length-2;_e.level>0;){if(y<0){typeof f.seekingParent>"u"?f.seekingParent=[_e]:f.seekingParent.push(_e);break}for(var C=f.steps[y--];y>=0&&C.focus&&f.steps[y].focus;)C=f.steps[y--];_e=ie(C,_e)}}},j=function(f){var y;switch(f.type){case"binary":switch(f.value){case".":var H=j(f.lhs);H.type==="path"?y=H:y={type:"path",steps:[H]},H.type==="parent"&&(y.seekingParent=[H.slot]);var he=j(f.rhs);he.type==="function"&&he.procedure.type==="path"&&he.procedure.steps.length===1&&he.procedure.steps[0].type==="name"&&y.steps[y.steps.length-1].type==="function"&&(y.steps[y.steps.length-1].nextFunction=he.procedure.steps[0].value),he.type==="path"?Array.prototype.push.apply(y.steps,he.steps):(typeof he.predicate<"u"&&(he.stages=he.predicate,delete he.predicate),y.steps.push(he)),y.steps.filter(function(F){if(F.type==="number"||F.type==="value")throw{code:"S0213",stack:new Error().stack,position:F.position,value:F.value};return F.type==="string"}).forEach(function(F){F.type="name"}),y.steps.filter(function(F){return F.keepArray===!0}).length>0&&(y.keepSingletonArray=!0);var Ue=y.steps[0];Ue.type==="unary"&&Ue.value==="["&&(Ue.consarray=!0);var _e=y.steps[y.steps.length-1];_e.type==="unary"&&_e.value==="["&&(_e.consarray=!0),re(y);break;case"[":y=j(f.lhs);var C=y,O="predicate";if(y.type==="path"&&(C=y.steps[y.steps.length-1],O="stages"),typeof C.group<"u")throw{code:"S0209",stack:new Error().stack,position:f.position};typeof C[O]>"u"&&(C[O]=[]);var A=j(f.rhs);typeof A.seekingParent<"u"&&(A.seekingParent.forEach(F=>{F.level===1?ie(C,F):F.level--}),K(C,A)),C[O].push({type:"filter",expr:A,position:f.position});break;case"{":if(y=j(f.lhs),typeof y.group<"u")throw{code:"S0210",stack:new Error().stack,position:f.position};y.group={lhs:f.rhs.map(function(F){return[j(F[0]),j(F[1])]}),position:f.position};break;case"^":y=j(f.lhs),y.type!=="path"&&(y={type:"path",steps:[y]});var N={type:"sort",position:f.position};N.terms=f.rhs.map(function(F){var ae=j(F.expression);return K(N,ae),{descending:F.descending,expression:ae}}),y.steps.push(N),re(y);break;case":=":y={type:"bind",value:f.value,position:f.position},y.lhs=j(f.lhs),y.rhs=j(f.rhs),K(y,y.rhs);break;case"@":if(y=j(f.lhs),C=y,y.type==="path"&&(C=y.steps[y.steps.length-1]),typeof C.stages<"u"||typeof C.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:f.position};if(C.type==="sort")throw{code:"S0216",stack:new Error().stack,position:f.position};f.keepArray&&(C.keepArray=!0),C.focus=f.rhs.value,C.tuple=!0;break;case"#":y=j(f.lhs),C=y,y.type==="path"?C=y.steps[y.steps.length-1]:(y={type:"path",steps:[y]},typeof C.predicate<"u"&&(C.stages=C.predicate,delete C.predicate)),typeof C.stages>"u"?C.index=f.rhs.value:C.stages.push({type:"index",value:f.rhs.value,position:f.position}),C.tuple=!0;break;case"~>":y={type:"apply",value:f.value,position:f.position},y.lhs=j(f.lhs),y.rhs=j(f.rhs),y.keepArray=y.lhs.keepArray||y.rhs.keepArray;break;default:y={type:f.type,value:f.value,position:f.position},y.lhs=j(f.lhs),y.rhs=j(f.rhs),K(y,y.lhs),K(y,y.rhs)}break;case"unary":y={type:f.type,value:f.value,position:f.position},f.value==="["?y.expressions=f.expressions.map(function(F){var ae=j(F);return K(y,ae),ae}):f.value==="{"?y.lhs=f.lhs.map(function(F){var ae=j(F[0]);K(y,ae);var ke=j(F[1]);return K(y,ke),[ae,ke]}):(y.expression=j(f.expression),f.value==="-"&&y.expression.type==="number"?(y=y.expression,y.value=-y.value):K(y,y.expression));break;case"function":case"partial":y={type:f.type,name:f.name,value:f.value,position:f.position},y.arguments=f.arguments.map(function(F){var ae=j(F);return K(y,ae),ae}),y.procedure=j(f.procedure);break;case"lambda":y={type:f.type,arguments:f.arguments,signature:f.signature,position:f.position};var W=j(f.body);y.body=R(W);break;case"condition":y={type:f.type,position:f.position},y.condition=j(f.condition),K(y,y.condition),y.then=j(f.then),K(y,y.then),typeof f.else<"u"&&(y.else=j(f.else),K(y,y.else));break;case"transform":y={type:f.type,position:f.position},y.pattern=j(f.pattern),y.update=j(f.update),typeof f.delete<"u"&&(y.delete=j(f.delete));break;case"block":y={type:f.type,position:f.position},y.expressions=f.expressions.map(function(F){var ae=j(F);return K(y,ae),(ae.consarray||ae.type==="path"&&ae.steps[0].consarray)&&(y.consarray=!0),ae});break;case"name":y={type:"path",steps:[f]},f.keepArray&&(y.keepSingletonArray=!0);break;case"parent":y={type:"parent",slot:{label:"!"+X++,level:1,index:oe++}},me.push(y);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":y=f;break;case"operator":if(f.value==="and"||f.value==="or"||f.value==="in")f.type="name",y=j(f);else if(f.value==="?")y=f;else throw{code:"S0201",stack:new Error().stack,position:f.position,token:f.value};break;case"error":y=f,f.lhs&&(y=j(f.lhs));break;default:var z="S0206";f.id==="(end)"&&(z="S0207");var I={code:z,position:f.position,token:f.value};if(m)return ee.push(I),{type:"error",error:I};throw I.stack=new Error().stack,I}return f.keepArray&&(y.keepArray=!0),y};D=h(E),L();var xe=x(0);if(k.id!=="(end)"){var ut={code:"S0201",position:k.position,token:k.value};U(ut)}if(xe=j(xe),xe.type==="parent"||typeof xe.seekingParent<"u")throw{code:"S0217",token:xe.type,position:xe.position};return ee.length>0&&(xe.errors=ee),xe};return T})();r.exports=s},{"./signature":5}],5:[function(t,r,i){var a=t("./utils");const s=(()=>{var l={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function u(h){for(var T=1,E=[],m={},k=m;T<h.length;){var D=h.charAt(T);if(D===":")break;var B=function(){E.push(m),k=m,m={}},ee=function(q,de,pe,ne){for(var R=1,X=de;X<q.length;)if(X++,D=q.charAt(X),D===ne){if(R--,R===0)break}else D===pe&&R++;return X};switch(D){case"s":case"n":case"b":case"l":case"o":m.regex="["+D+"m]",m.type=D,B();break;case"a":m.regex="[asnblfom]",m.type=D,m.array=!0,B();break;case"f":m.regex="f",m.type=D,B();break;case"j":m.regex="[asnblom]",m.type=D,B();break;case"x":m.regex="[asnblfom]",m.type=D,B();break;case"-":k.context=!0,k.contextRegex=new RegExp(k.regex),k.regex+="?";break;case"?":case"+":k.regex+=D;break;case"(":var Y=ee(h,T,"(",")"),G=h.substring(T+1,Y);if(G.indexOf("<")===-1)m.regex="["+G+"m]";else throw{code:"S0402",stack:new Error().stack,value:G,offset:T};m.type="("+G+")",T=Y,B();break;case"<":if(k.type==="a"||k.type==="f"){var $=ee(h,T,"<",">");k.subtype=h.substring(T+1,$),T=$}else throw{code:"S0401",stack:new Error().stack,value:k.type,offset:T};break}T++}var U="^"+E.map(function(q){return"("+q.regex+")"}).join("")+"$",L=new RegExp(U),x=function(q){var de;if(a.isFunction(q))de="f";else{var pe=typeof q;switch(pe){case"string":de="s";break;case"number":de="n";break;case"boolean":de="b";break;case"object":q===null?de="l":Array.isArray(q)?de="a":de="o";break;case"undefined":default:de="m"}}return de},P=function(q,de){for(var pe="^",ne=0,R=0;R<E.length;R++){pe+=E[R].regex;var X=de.match(pe);if(X===null)throw{code:"T0410",stack:new Error().stack,value:q[ne],index:ne+1};ne=X[0].length}throw{code:"T0410",stack:new Error().stack,value:q[ne],index:ne+1}};return{definition:h,validate:function(q,de){var pe="";q.forEach(function(oe){pe+=x(oe)});var ne=L.exec(pe);if(ne){var R=[],X=0;return E.forEach(function(oe,me){var ie=q[X],K=ne[me+1];if(K==="")if(oe.context&&oe.contextRegex){var re=x(de);if(oe.contextRegex.test(re))R.push(de);else throw{code:"T0411",stack:new Error().stack,value:de,index:X+1}}else R.push(ie),X++;else K.split("").forEach(function(j){if(oe.type==="a"){if(j==="m")ie=void 0;else{ie=q[X];var xe=!0;if(typeof oe.subtype<"u"){if(j!=="a"&&K!==oe.subtype)xe=!1;else if(j==="a"&&ie.length>0){var ut=x(ie[0]);if(ut!==oe.subtype.charAt(0))xe=!1;else{var f=ie.filter(function(y){return x(y)!==ut});xe=f.length===0}}}if(!xe)throw{code:"T0412",stack:new Error().stack,value:ie,index:X+1,type:l[oe.subtype]};j!=="a"&&(ie=[ie])}R.push(ie),X++}else R.push(ie),X++})}),R}P(q,pe)}}}return u})();r.exports=s},{"./utils":6}],6:[function(t,r,i){const a=(()=>{function s($){var U=!1;if(typeof $=="number"&&(U=!isNaN($),U&&!isFinite($)))throw{code:"D1001",value:$,stack:new Error().stack};return U}function l($){var U=!1;return Array.isArray($)&&(U=$.filter(function(L){return typeof L!="string"}).length===0),U}function u($){var U=!1;return Array.isArray($)&&(U=$.filter(function(L){return!s(L)}).length===0),U}function h(){var $=[];return $.sequence=!0,arguments.length===1&&$.push(arguments[0]),$}function T($){return $.sequence===!0&&Array.isArray($)}function E($){return $&&($._jsonata_function===!0||$._jsonata_lambda===!0)||typeof $=="function"}function m($){var U=typeof $.arity=="number"?$.arity:typeof $.implementation=="function"?$.implementation.length:typeof $.length=="number"?$.length:$.arguments.length;return U}function k($){return $&&$._jsonata_lambda===!0}var D=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function B($){return typeof $=="object"&&$!==null&&D in $&&"next"in $&&typeof $.next=="function"}function ee($,U){if($===U)return!0;if(typeof $=="object"&&typeof U=="object"&&$!==null&&U!==null){if(Array.isArray($)&&Array.isArray(U)){if($.length!==U.length)return!1;for(var L=0;L<$.length;L++)if(!ee($[L],U[L]))return!1;return!0}var x=Object.getOwnPropertyNames($),P=Object.getOwnPropertyNames(U);if(x.length!==P.length)return!1;for(x=x.sort(),P=P.sort(),L=0;L<x.length;L++)if(x[L]!==P[L])return!1;for(L=0;L<x.length;L++){var q=x[L];if(!ee($[q],U[q]))return!1}return!0}return!1}function Y($){return typeof $=="object"&&$!==null&&"then"in $&&typeof $.then=="function"}function G($){var U=[];for(let L of $)U.push(L);return U}return{isNumeric:s,isArrayOfStrings:l,isArrayOfNumbers:u,createSequence:h,isSequence:T,isFunction:E,isLambda:k,isIterable:B,getFunctionArity:m,isDeepEqual:ee,stringToArray:G,isPromise:Y}})();r.exports=a},{}]},{},[3])(3)})})(zi)),zi.exports}var np=tp();const Co=Mo(np);var Ht={exports:{}};const Kr=Uo(Go),rp="17.2.3",ip={version:rp};var ps;function ap(){if(ps)return Ht.exports;ps=1;var n={};const e=Kr,t=Kr,r=Kr,i=Kr,s=ip.version,l=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function u(){return l[Math.floor(Math.random()*l.length)]}function h(R){return typeof R=="string"?!["false","0","no","off",""].includes(R.toLowerCase()):!!R}function T(){return process.stdout.isTTY}function E(R){return T()?`\x1B[2m${R}\x1B[0m`:R}const m=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function k(R){const X={};let oe=R.toString();oe=oe.replace(/\r\n?/mg,`
`);let me;for(;(me=m.exec(oe))!=null;){const ie=me[1];let K=me[2]||"";K=K.trim();const re=K[0];K=K.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),re==='"'&&(K=K.replace(/\\n/g,`
`),K=K.replace(/\\r/g,"\r")),X[ie]=K}return X}function D(R){R=R||{};const X=U(R);R.path=X;const oe=ne.configDotenv(R);if(!oe.parsed){const re=new Error(`MISSING_DATA: Cannot parse ${X} for an unknown reason`);throw re.code="MISSING_DATA",re}const me=G(R).split(","),ie=me.length;let K;for(let re=0;re<ie;re++)try{const j=me[re].trim(),xe=$(oe,j);K=ne.decrypt(xe.ciphertext,xe.key);break}catch(j){if(re+1>=ie)throw j}return ne.parse(K)}function B(R){console.error(`[dotenv@${s}][WARN] ${R}`)}function ee(R){console.log(`[dotenv@${s}][DEBUG] ${R}`)}function Y(R){console.log(`[dotenv@${s}] ${R}`)}function G(R){return R&&R.DOTENV_KEY&&R.DOTENV_KEY.length>0?R.DOTENV_KEY:n.DOTENV_KEY&&n.DOTENV_KEY.length>0?n.DOTENV_KEY:""}function $(R,X){let oe;try{oe=new URL(X)}catch(j){if(j.code==="ERR_INVALID_URL"){const xe=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw xe.code="INVALID_DOTENV_KEY",xe}throw j}const me=oe.password;if(!me){const j=new Error("INVALID_DOTENV_KEY: Missing key part");throw j.code="INVALID_DOTENV_KEY",j}const ie=oe.searchParams.get("environment");if(!ie){const j=new Error("INVALID_DOTENV_KEY: Missing environment part");throw j.code="INVALID_DOTENV_KEY",j}const K=`DOTENV_VAULT_${ie.toUpperCase()}`,re=R.parsed[K];if(!re){const j=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${K} in your .env.vault file.`);throw j.code="NOT_FOUND_DOTENV_ENVIRONMENT",j}return{ciphertext:re,key:me}}function U(R){let X=null;if(R&&R.path&&R.path.length>0)if(Array.isArray(R.path))for(const oe of R.path)e.existsSync(oe)&&(X=oe.endsWith(".vault")?oe:`${oe}.vault`);else X=R.path.endsWith(".vault")?R.path:`${R.path}.vault`;else X=t.resolve(process.cwd(),".env.vault");return e.existsSync(X)?X:null}function L(R){return R[0]==="~"?t.join(r.homedir(),R.slice(1)):R}function x(R){const X=h(n.DOTENV_CONFIG_DEBUG||R&&R.debug),oe=h(n.DOTENV_CONFIG_QUIET||R&&R.quiet);(X||!oe)&&Y("Loading env from encrypted .env.vault");const me=ne._parseVault(R);let ie=n;return R&&R.processEnv!=null&&(ie=R.processEnv),ne.populate(ie,me,R),{parsed:me}}function P(R){const X=t.resolve(process.cwd(),".env");let oe="utf8",me=n;R&&R.processEnv!=null&&(me=R.processEnv);let ie=h(me.DOTENV_CONFIG_DEBUG||R&&R.debug),K=h(me.DOTENV_CONFIG_QUIET||R&&R.quiet);R&&R.encoding?oe=R.encoding:ie&&ee("No encoding is specified. UTF-8 is used by default");let re=[X];if(R&&R.path)if(!Array.isArray(R.path))re=[L(R.path)];else{re=[];for(const f of R.path)re.push(L(f))}let j;const xe={};for(const f of re)try{const y=ne.parse(e.readFileSync(f,{encoding:oe}));ne.populate(xe,y,R)}catch(y){ie&&ee(`Failed to load ${f} ${y.message}`),j=y}const ut=ne.populate(me,xe,R);if(ie=h(me.DOTENV_CONFIG_DEBUG||ie),K=h(me.DOTENV_CONFIG_QUIET||K),ie||!K){const f=Object.keys(ut).length,y=[];for(const H of re)try{const he=t.relative(process.cwd(),H);y.push(he)}catch(he){ie&&ee(`Failed to load ${H} ${he.message}`),j=he}Y(`injecting env (${f}) from ${y.join(",")} ${E(`-- tip: ${u()}`)}`)}return j?{parsed:xe,error:j}:{parsed:xe}}function q(R){if(G(R).length===0)return ne.configDotenv(R);const X=U(R);return X?ne._configVault(R):(B(`You set DOTENV_KEY but you are missing a .env.vault file at ${X}. Did you forget to build it?`),ne.configDotenv(R))}function de(R,X){const oe=Buffer.from(X.slice(-64),"hex");let me=Buffer.from(R,"base64");const ie=me.subarray(0,12),K=me.subarray(-16);me=me.subarray(12,-16);try{const re=i.createDecipheriv("aes-256-gcm",oe,ie);return re.setAuthTag(K),`${re.update(me)}${re.final()}`}catch(re){const j=re instanceof RangeError,xe=re.message==="Invalid key length",ut=re.message==="Unsupported state or unable to authenticate data";if(j||xe){const f=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw f.code="INVALID_DOTENV_KEY",f}else if(ut){const f=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw f.code="DECRYPTION_FAILED",f}else throw re}}function pe(R,X,oe={}){const me=!!(oe&&oe.debug),ie=!!(oe&&oe.override),K={};if(typeof X!="object"){const re=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw re.code="OBJECT_REQUIRED",re}for(const re of Object.keys(X))Object.prototype.hasOwnProperty.call(R,re)?(ie===!0&&(R[re]=X[re],K[re]=X[re]),me&&ee(ie===!0?`"${re}" is already defined and WAS overwritten`:`"${re}" is already defined and was NOT overwritten`)):(R[re]=X[re],K[re]=X[re]);return K}const ne={configDotenv:P,_configVault:x,_parseVault:D,config:q,decrypt:de,parse:k,populate:pe};return Ht.exports.configDotenv=ne.configDotenv,Ht.exports._configVault=ne._configVault,Ht.exports._parseVault=ne._parseVault,Ht.exports.config=ne.config,Ht.exports.decrypt=ne.decrypt,Ht.exports.parse=ne.parse,Ht.exports.populate=ne.populate,Ht.exports=ne,Ht.exports}var sp=ap();const xo={".geojson":zt.GeoJSON,".json":zt.GeoJSON,".kml":zt.KML,".gpx":zt.GPX,".tif":zt.GeoTIFF,".tiff":zt.GeoTIFF,".geotiff":zt.GeoTIFF},La=n=>{const e=n.getName().toLowerCase();for(const[t,r]of Object.entries(xo))if(e.endsWith(t))return r;return null},Ao=n=>La(n)!==null,hi=async n=>{const e=await Je.getWorkspace();if(!e)throw new Error("No workspace available");const t=await e.getResource(n);if(!t)throw new Error("Invalid URL: "+n);return await t.getContents({uri:!0})},To=n=>n.startsWith("blob:")||n.startsWith("http:")||n.startsWith("https:"),Si={},Wn=async(n,e,t)=>{const r=await Co(`[**[${e}!='']]`).evaluate(n);for(const i of r){const a=i[e];if(To(a))continue;let s;if(e==="src"&&t)try{s=(await t.resolveWorkspaceModule(a)).blobUrl}catch{s=await hi(a)}else s=await hi(a);Si[s]=i[e],i[e]=s}},br=n=>Si[n],wr=async(n,e)=>{const t=await Co(`[**[${e}!='']]`).evaluate(n);for(const r of t){const i=r[e];!i||!i.startsWith("blob:")||(r[e]=Si[i])}},So=n=>{Q.registerContribution("catalog.root",{label:n.label,icon:n.icon,contributionId:n.contributionId});const e=n.contributionId??n.label;n.items?.forEach(t=>{Q.registerContribution(e,{label:t.label,icon:t.icon,contributionId:t.contributionId});const i=import.meta.resolve("/.");t.items.forEach(a=>{const s={label:a.label,icon:a.icon,state:{...a.state}};s.state?.url&&(s.state.url=s.state.url.replace("${baseURL}/",i)),Q.registerContribution(t.contributionId,s)})})},Qi=n=>{Object.entries(n).forEach(([e,t])=>{const r=/\${([a-zA-Z0-9_]+)}/g;n[e]=t.replace(r,(i,a)=>{const s=n[a];return s!==void 0?s:i})})},_o=async(...n)=>{const e=await Je.getWorkspace(),t={};for(const r of n){const i=await e?.getResource(r);if(!i)continue;const a=await i.getContents(),s=sp.parse(a||"");Qi(s),Object.assign(t,s)}return Qi(t),t},op=Object.freeze(Object.defineProperty({__proto__:null,FILE_EXTENSION_TO_SOURCE_TYPE:xo,_blobsLookup:Si,getOriginalUri:br,getSourceTypeFromFile:La,isAbsoluteResource:To,isSupportedSpatialFile:Ao,loadEnvs:_o,registerCatalog:So,replaceUris:Wn,replaceVars:Qi,revertBlobUris:wr,toBlobUri:hi},Symbol.toStringTag,{value:"Module"}));qo.resolveUrl=n=>hi(n);vn.registerEditorInputHandler({canHandle:n=>n instanceof At&&n.getName().endsWith(".geospace"),handle:async n=>{const e={title:n.getName(),data:n,key:n.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return e.widgetFactory=t=>S`
            <gs-map id="${t}" .input="${e}"></gs-map>`,e}});function qn(n,e){return n.layers.find(t=>t.uuid===e)}function Bn(n,e){return n.layers.findIndex(t=>t.uuid===e)}function lp(n,e){return n.controls.findIndex(t=>t.uuid===e)}function cp(n,e){return n.overlays.findIndex(t=>t.uuid===e)}const up=n=>new Proxy({},{get:(e,t)=>async(...r)=>{for(const i of n)await i[t](...r)}});var Lt=(n=>(n[n.LOADED=0]="LOADED",n[n.LAYER_ADDED=1]="LAYER_ADDED",n[n.LAYER_DELETED=2]="LAYER_DELETED",n[n.LAYER_UPDATED=3]="LAYER_UPDATED",n[n.FEATURE_SELECTED=4]="FEATURE_SELECTED",n))(Lt||{});const Kt=an(Gl),dp=`:root,
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
`;function pp(n){return n.startsWith("blob:")||n.startsWith("http:")||n.startsWith("https:")}function hs(n,e){if(n.startsWith("/"))return n.slice(1);const t=e.split("/").filter(a=>a),r=n.split("/").filter(a=>a);if(n.startsWith("./")||n.startsWith("../")||!n.startsWith("/")){const a=t.slice(0,-1);t.length=0,t.push(...a)}for(const a of r)a!=="."&&(a===".."?t.length>0&&t.pop():t.push(a));return t.join("/")}function hp(n){const e=[],t=/import\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,r=/export\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,i=/import\s*\(\s*["']([^"']+)["']\s*\)/g;let a;for(;(a=t.exec(n))!==null;)e.push({fullMatch:a[0],importPath:a[1],isDynamic:!1,startIndex:a.index,endIndex:a.index+a[0].length});for(;(a=r.exec(n))!==null;)e.push({fullMatch:a[0],importPath:a[1],isDynamic:!1,startIndex:a.index,endIndex:a.index+a[0].length});for(;(a=i.exec(n))!==null;)e.push({fullMatch:a[0],importPath:a[1],isDynamic:!0,startIndex:a.index,endIndex:a.index+a[0].length});return e.sort((s,l)=>l.startIndex-s.startIndex)}class fp{constructor(){this.blobUrlCache=new Map,this.moduleCache=new Map,this.resolvingModules=new Set,this.resolvingPromises=new Map}async resolveModuleRecursive(e){if(!await Je.getWorkspace())throw new Error("Workspace not available");if(this.blobUrlCache.has(e))return this.blobUrlCache.get(e);if(this.resolvingPromises.has(e))return await this.resolvingPromises.get(e);if(this.resolvingModules.has(e))throw new Error(`Circular dependency detected: ${e}`);this.resolvingModules.add(e);const r=this.doResolveModule(e);this.resolvingPromises.set(e,r);try{return await r}finally{this.resolvingPromises.delete(e)}}async doResolveModule(e){const t=await Je.getWorkspace();if(!t)throw new Error("Workspace not available");try{let r=await t.getResource(e);if(r||(await t.listChildren(!0),r=await t.getResource(e)),!r)throw new Error(`Module not found: ${e}`);let i=await r.getContents();const a=hp(i);for(const u of a){const h=u.importPath;if(!pp(h))try{const T=hs(h,e),E=await this.resolveModuleRecursive(T);let m;if(u.isDynamic)m=`import("${E}")`;else{const k=u.fullMatch.search(/["']/);if(k===-1)m=u.fullMatch;else{const D=u.fullMatch[k],B=u.fullMatch.lastIndexOf(D);B!==-1&&B>k?m=u.fullMatch.slice(0,k+1)+E+u.fullMatch.slice(B):m=u.fullMatch}}i=i.slice(0,u.startIndex)+m+i.slice(u.endIndex)}catch{}}const s=new Blob([i],{type:"application/javascript"}),l=URL.createObjectURL(s);return this.blobUrlCache.set(e,l),this.moduleCache.set(e,{code:i,workspacePath:e,blobUrl:l}),l}catch(r){throw r}finally{this.resolvingModules.delete(e)}}async resolveWorkspaceModule(e,t){const r=t?hs(e,t):e;if(this.moduleCache.has(r))return this.moduleCache.get(r);await this.resolveModuleRecursive(r);const i=this.moduleCache.get(r);if(!i)throw new Error(`Failed to resolve module: ${r}`);return i}clear(){for(const e of this.blobUrlCache.values())e.startsWith("blob:")&&URL.revokeObjectURL(e);this.blobUrlCache.clear(),this.moduleCache.clear(),this.resolvingModules.clear()}}const gp="iframe-map-renderer.html";class $o{constructor(e,t){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=t,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(t,r){return async(...i)=>await e.sendMessage(r,{...i})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=gp,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}async getViewExtent(){return(await this.sendMessage("getViewExtent",{}))?.extent||[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(e){this.onSyncCallback&&this.onSyncCallback(e)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,t){try{const{toBlobUri:r}=await Pe(async()=>{const{toBlobUri:a}=await Promise.resolve().then(()=>op);return{toBlobUri:a}},void 0),i=await r(t);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:i},"*")}catch(r){this.iframe.contentWindow.postMessage({id:e,success:!1,error:r instanceof Error?r.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{if(e.source!==this.iframe?.contentWindow)return;const{id:t,result:r,error:i,type:a,event:s}=e.data;if(t!==void 0&&this.pendingMessages.has(t)){const{resolve:l,reject:u}=this.pendingMessages.get(t);if(this.pendingMessages.delete(t),i)u(new Error(i));else{const h=r??Object.fromEntries(Object.entries(e.data).filter(([T])=>!["id","type","event","error"].includes(T)));l(h)}}a==="dirty"?this.onDirtyCallback?.():a==="sync"?this.onSyncCallback?.(s):a==="iframeClicked"?this.onClickCallback?.():a==="resolveAsset"&&this.handleAssetResolution(t,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const t=r=>{r.source===this.iframe?.contentWindow&&r.data.type==="rendererReady"&&(window.removeEventListener("message",t),e())};window.addEventListener("message",t)})}async sendMessage(e,t){if(!this.iframe)throw new Error("Iframe not initialized");const r=++this.messageId;return new Promise((i,a)=>{this.pendingMessages.set(r,{resolve:i,reject:a}),this.iframe.contentWindow.postMessage({id:r,method:e,params:t},"*"),setTimeout(()=>{this.pendingMessages.has(r)&&(this.pendingMessages.delete(r),a(new Error("Message timeout")))},5e3)})}}class mp{constructor(e,t){this.gsMap=e,this.renderer=t}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,t){t?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){const t=Bn(this.gsMap,e);t>=0&&(this.gsMap.layers.splice(t,1),this.triggerDirty())}async renameLayer(e,t){const r=qn(this.gsMap,e);r&&(r.name=t,this.triggerDirty())}async moveLayer(e,t){const r=Bn(this.gsMap,e);if(r<0)return;let i;if(t){if(i=Bn(this.gsMap,t),i<0||r===i)return}else i=r>0?r-1:r+1;if(i>=0&&i<this.gsMap.layers.length&&r!==i){const[a]=this.gsMap.layers.splice(r,1);this.gsMap.layers.splice(i,0,a),this.triggerDirty()}}async setLayerVisible(e,t){const r=qn(this.gsMap,e);r&&(r.visible=t,this.triggerDirty())}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){const t=lp(this.gsMap,e);t>=0&&(this.gsMap.controls.splice(t,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(e,t){this.gsMap.overlays.push({src:e,position:t||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){const t=cp(this.gsMap,e);t>=0&&(this.gsMap.overlays.splice(t,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(e,t){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class yp{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,t){Kt.set({part:this.source,event:Lt.LAYER_ADDED})}async deleteLayer(e){Kt.set({part:this.source,event:Lt.LAYER_DELETED})}async renameLayer(e,t){Kt.set({part:this.source,event:Lt.LAYER_UPDATED})}async moveLayer(e,t){Kt.set({part:this.source,event:Lt.LAYER_UPDATED})}async setLayerVisible(e,t){}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,t){}async removeOverlay(e){}async enableDrawing(e,t){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){Kt.set({part:this.source,event:Lt.LAYER_UPDATED})}}var bp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,_i=(n,e,t,r)=>{for(var i=r>1?void 0:r?wp(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&bp(e,t,i),i};const vp=Bt("GsMapEditor");let et=class extends mt{constructor(){super(),this.mapContainer=Yt(),this.isFirstConnection=!0,this.moduleResolver=new fp,this.interactionMode="none",this.commandStack=new xs}getRenderer(){return this.renderer}getOperations(){return this.operations}doBeforeUI(){this.watch(Kt,({part:n,event:e})=>{this.onMapChanged({part:n,event:e})})}onMapChanged({part:n,event:e}){n===this&&(e===Lt.LAYER_ADDED||e===Lt.LAYER_DELETED||e===Lt.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const e=this.getGsMap()?.layers.filter(r=>{const i=r.type===za.VECTOR,a=r.source?.type===zt.Features;return i&&a})||[],t=this.activeDrawingLayerUuid!==void 0;return S`
            <k-command cmd="zoom_in" icon="magnifying-glass-plus" title="Zoom in"></k-command>
            <k-command cmd="zoom_out" icon="magnifying-glass-minus" title="Zoom out"></k-command>
            <k-command cmd="reset_view" icon="house" title="Reset view"></k-command>
            <k-command cmd="refresh_map" icon="rotate" title="Refresh map"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command cmd="capture_map_screenshot" icon="camera" title="Capture screenshot"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command cmd="toggle_color_mode" icon="circle-half-stroke" title="Toggle dark/light mode"></k-command>
            <k-command cmd="toggle_mobile_view" icon="mobile" title="Toggle mobile view"></k-command>
            
            <wa-divider orientation="vertical"></wa-divider>
            
            <k-command icon="plus" 
                      title="Create Drawing Layer"
                      .action=${()=>this.handleCreateDrawingLayer()}>
            </k-command>
            
            ${gt(e.length>0,()=>{const r=e.map(i=>`${i.uuid}:${i.name}`).join("|");return S`
                ${Bo(r,S`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${i=>{const a=i.target.value||void 0;this.activeDrawingLayerUuid=a,(a===void 0||i.target.value==="")&&(this.operations?.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${e.map(i=>S`
                            <wa-option value="${i.uuid}">${i.name||"Layer"}</wa-option>
                        `)}
                    </wa-select>
                `)}
                
                <k-command icon="location-dot" 
                          title="Draw Point"
                          ?disabled=${!t}
                          .action=${()=>this.handleDrawPoint()}>
                </k-command>
                <k-command icon="minus" 
                          title="Draw LineString"
                          ?disabled=${!t}
                          .action=${()=>this.handleDrawLine()}>
                </k-command>
                <k-command icon="draw-polygon" 
                          title="Draw Polygon"
                          ?disabled=${!t}
                          .action=${()=>this.handleDrawPolygon()}>
                </k-command>
                
                <k-command icon="trash" 
                          title="Delete Selected Features"
                          ?disabled=${this.interactionMode!=="select"}
                          .action=${()=>this.handleDeleteSelected()}>
                </k-command>

                <wa-divider orientation="vertical"></wa-divider>
            `})}
            
            <k-command icon="hand-pointer" 
                      title="Select Features"
                      .action=${()=>this.handleSelectFeatures()}>
            </k-command>

            <wa-divider orientation="vertical"></wa-divider>
        `}async connectedCallback(){if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}this.renderer?.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Re.set(this)}))}async doInitUI(){const n=this.input?.data,e=await _o(".env");e.BUILD_TIME=new Date;const t=await n.getContents();let r=t&&t.trim()?JSON.parse(t):ms;r=this.migrateGsMap(r),Fa(r),await Wn(r,"url"),await Wn(r,"src",this.moduleResolver),this.gsMap=r,r.view&&(this.initialView={center:[...r.view.center],zoom:r.view.zoom}),this.renderer=new $o(r,e);const i=this.renderer.getOperations(),a=new mp(r,this.renderer),s=new yp(this);this.operations=up([a,i,s]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(l=>{if(this.gsMap){switch(l.type){case"viewChanged":this.gsMap.view.center=l.view.center,this.gsMap.view.zoom=l.view.zoom,l.view.rotation!==void 0&&l.view.rotation!==0&&(this.gsMap.view.rotation=l.view.rotation);break;case"featuresChanged":const u=qn(this.gsMap,l.layerUuid);u&&u.source?.type===zt.Features&&(u.source.features=l.features);break;case"featureSelected":const h={feature:l.feature,layerUuid:l.layerUuid,metrics:l.metrics};console.info("Feature metrics:",h.metrics),Kt.set({part:this,event:Lt.FEATURE_SELECTED,payload:h});break;case"featureDeselected":console.info("Feature deselected"),Kt.set({part:this,event:Lt.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),this.renderer.setOnClick?.(()=>{Re.set(this)}),this.updateToolbar(),Kt.set({part:this,event:Lt.LOADED})}catch(l){console.error("Failed to render map:",l),Ce(`Failed to render map: ${l.message}`)}}migrateGsMap(n){const e={...n};let t=!1;return n.view||(console.log("Creating view field and migrating old properties..."),t=!0,e.view={},n.center!==void 0&&(e.view.center=n.center,delete e.center),n.zoom!==void 0&&(e.view.zoom=n.zoom,delete e.zoom),n.projection!==void 0&&(e.view.projection=n.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857")),(!n.styles||Object.keys(n.styles).length===0)&&(console.log("Adding default styles to map..."),t=!0,e.styles={...jo}),(!n.styleRules||n.styleRules.length===0)&&(console.log("Adding default style rules to map..."),t=!0,e.styleRules=[...Vo]),t&&console.log("Map migration completed"),e}getGsMap(){return this.gsMap}async save(){if(!this.renderer){Ce("Map not initialized");return}try{if(!this.gsMap){Ce("Map not initialized");return}const n=JSON.parse(JSON.stringify(this.gsMap));await wr(n,"url"),await wr(n,"src"),this.input?.data.saveContents(JSON.stringify(n,null,2)),this.markDirty(!1)}catch(n){Ce(`Save failed: ${n.message}`)}}get mapOperations(){return this.operations}edit(){xt("not yet implemented")}async refresh(){if(!this.renderer||!this.gsMap){vp.error("Map not initialized");return}await wr(this.gsMap,"url"),await wr(this.gsMap,"src"),this.moduleResolver.clear(),await Wn(this.gsMap,"url"),await Wn(this.gsMap,"src",this.moduleResolver),await this.renderer.modelToUI(this.gsMap)}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Point",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("LineString",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Polygon",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){await this.operations?.enableFeatureSelection(),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){if(this.interactionMode==="select")try{await this.operations?.deleteSelectedFeatures(),xt("Selected features deleted")}catch(n){Ce(n.message)}}async handleCreateDrawingLayer(){if(!this.gsMap){Ce("Map not initialized");return}const n=await vi("Enter name for new drawing layer:","Drawing Layer");if(!n)return;const e=Fa({name:n,type:za.VECTOR,source:{type:zt.Features,features:[]},visible:!0});await this.operations?.addLayer(e,!1);const t=this.gsMap?.layers.find(r=>r.uuid===e.uuid);t?.uuid&&(this.activeDrawingLayerUuid=t.uuid),await this.updateComplete,this.updateToolbar(),xt(`Created drawing layer: ${n}`)}doClose(){this.renderer?.destroy(),this.renderer=void 0,this.input=void 0,this.moduleResolver.clear()}render(){return S`
            <div class="gc-map-container" ${Zt(this.mapContainer)}>
            </div>
        `}};et.styles=[Ho(dp),tt`
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
    `];_i([ce({attribute:!1})],et.prototype,"input",2);_i([ce({type:String})],et.prototype,"activeDrawingLayerUuid",2);_i([ce({type:String})],et.prototype,"interactionMode",2);et=_i([qe("gs-map")],et);var Ep=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,Oo=(n,e,t,r)=>{for(var i=r>1?void 0:r?kp(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&Ep(e,t,i),i};let fi=class extends mt{doBeforeUI(){this.watch(Pt,n=>{this.onPartChanged(n)}),this.watch(Kt,({part:n})=>{this.onMapChanged({part:n})})}onPartChanged(n){if(!(n==this||n==this.mapEditor)){if(!(n instanceof et)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=n,this.requestUpdate()}}onMapChanged({part:n}){n==this.mapEditor&&this.requestUpdate()}toggleVisible(n){const e=this.mapEditor.getGsMap(),t=qn(e,n);if(!t)return;const i=!(t.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(n,i),this.updateLater()}async confirmAction(n,e){await Lr(n)&&e()}selectLayer(n){this.selectedLayerUuid=n,this.updateToolbar(),this.updateContextMenu()}renameLayer(n){if(!this.mapEditor)return;const e=n||this.selectedLayerUuid;if(!e)return;const t=this.mapEditor.getGsMap();if(!qn(t,e))return;const i=Bn(t,e),a=ye.createExecutionContext({index:i+1});ye.execute("rename_layer",a)}deleteLayer(n){if(!this.mapEditor)return;const e=n||this.selectedLayerUuid;if(!e)return;const t=this.mapEditor.getGsMap(),r=qn(t,e);r&&this.confirmAction(`Delete layer "${r.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(e)))}moveLayerUp(n){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const t=Bn(e,n);if(t<=0)return;const r=e.layers[t-1]?.uuid;r&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(n,r)),this.selectedLayerUuid=r)}moveLayerDown(n){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const t=Bn(e,n);if(t<0||t>=e.layers.length-1)return;const r=e.layers[t+1]?.uuid;r&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(n,r)),this.selectedLayerUuid=r)}renderToolbar(){const n=this.selectedLayerUuid!==void 0;return S`
            <k-command ?disabled=${!n} 
                      title="Rename selected layer" 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
            </k-command>
            <k-command ?disabled=${!n} 
                      title="Delete selected layer" 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
            </k-command>
        `}renderContextMenu(){const n=this.selectedLayerUuid!==void 0;return S`
            <k-command ?disabled=${!n} 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
                Rename
            </k-command>
            <k-command ?disabled=${!n} 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
                Delete
            </k-command>
        `}render(){return gt(!this.mapEditor,()=>S`
                    <k-no-content message="Select a map."></k-no-content>`,()=>S`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((n,e)=>S`
                            <wa-tree-item @click="${()=>n.uuid&&this.selectLayer(n.uuid)}" 
                                          class="${this.selectedLayerUuid===n.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${n.name??`Layer ${e+1}`}${e==0?S`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-command size="small"
                                                  icon="${n.visible!==!1?"eye":"eye-slash"}"
                                                  title="${n.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>n.uuid&&this.toggleVisible(n.uuid)}>
                                        </k-command>
                                        <k-command size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${e===0}"
                                                  .action=${()=>n.uuid&&this.moveLayerUp(n.uuid)}>
                                        </k-command>
                                        <k-command size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${e===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>n.uuid&&this.moveLayerDown(n.uuid)}>
                                        </k-command>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(n=>S`
                            <wa-tree-item>
                                <span>${br(n.src)}</span>
                                <k-command size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{n.uuid&&this.confirmAction(`Delete control "${br(n.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(n.uuid)))}}>
                                </k-command>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(n=>S`
                            <wa-tree-item>
                                <span>${br(n.src)}</span>
                                <k-command size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{n.uuid&&this.confirmAction(`Delete overlay "${br(n.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(n.uuid)))}}>
                                </k-command>
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
            `)}};fi.styles=tt`
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
    `;Oo([Be()],fi.prototype,"selectedLayerUuid",2);fi=Oo([qe("gs-map-props")],fi);var Cp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,Do=(n,e,t,r)=>{for(var i=r>1?void 0:r?xp(e,t):e,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(e,t,i):s(i))||i);return r&&i&&Cp(e,t,i),i};const Ap="catalog.root";let bn=class extends mt{constructor(){super(...arguments),this.treeRef=Yt()}doBeforeUI(){const n=Q.getContributions(Ap);this.rootNodes=this.toTreeNodes(n)}renderToolbar(){const n=Re.get()instanceof bn&&It.get()!==void 0;return S`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!n} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(n){return n.map(e=>{const t={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const r=Q.getContributions(e.contributionId);t.leaf=r.length===0,t.children=this.toTreeNodes(r)}return t})}onItemDblClicked(n){const e=n.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(n){const e=n.detail.selection[0].model;It.set(e.data)}setAllExpanded(n){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(t=>{t.expanded=n})}refresh(){this.requestUpdate()}createTreeItems(n,e=!1){return n?S`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${n} ?expanded=${e}>
                <span><k-icon name="${n.icon}"></k-icon> ${n.label}</span>
                ${n.children?.map(t=>this.createTreeItems(t))}
            </wa-tree-item>`:S``}render(){return S`
            <wa-tree ${Zt(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${this.rootNodes?.map(n=>this.createTreeItems(n,!0))}
            </wa-tree>
        `}};bn.styles=tt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;Do([Be()],bn.prototype,"rootNodes",2);bn=Do([qe("gs-catalog")],bn);const Tp="geo!space catalog",Sp="earth",_p="catalog.root.geospace",$p=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],Op={label:Tp,icon:Sp,contributionId:_p,items:$p};Ae({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async n=>{let e=n.params&&n.params.url;if(!e){const r=It.get();if(!r||!("url"in r))return;e=r.url}const t=await Je.getWorkspace();if(!t){Ce("No workspace selected.");return}fetch(e,{method:"GET"}).then(r=>r.blob()).then(r=>{const i=new URL(e).pathname.split("/"),a=i[i.length-1];return t.getResource(a,{create:!0}).then(s=>s.saveContents(r,{contentType:ia.BINARY}).then(()=>{xt("File checked out: "+a)}))}).catch(r=>{Ce(r)})}}});Ae({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async n=>{const e=Re.get();e instanceof bn&&e.refresh()}}});Ae({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async n=>{const e=Re.get();e instanceof bn&&e.setAllExpanded(!0)}}});Ae({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async n=>{const e=Re.get();e instanceof bn&&e.setAllExpanded(!1)}}});So(Op);const Ct=Bt("GsCommandHandlers"),cn=n=>n.activeEditor instanceof et,En=n=>{const e=n.activeEditor;if(!(e instanceof et)||!e.getOperations())throw Ct.error("GsMapEditor with renderer not available in context.activeEditor"),new Error("GsMapEditor with renderer not available in context.activeEditor");return e.getOperations()};ye.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level (typically 0-20, where 0=world view, 5-9=country/region, 10-12=city, 13-15=street, 16-20=building detail)",required:!0}]},handler:{canExecute:cn,execute:async n=>{const e=En(n),t=Number(n.params.zoom).valueOf();return await e.setZoom(t),{zoom:t}}}});ye.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:n=>Re.get()instanceof et,execute:async n=>{const e=Re.get(),t=e.getGsMap();if(t?.view?.zoom!==void 0){const r=e.mapOperations,i=t.view.zoom+1;return await r?.setZoom(i),i}return t?.view?.zoom}}});ye.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:n=>Re.get()instanceof et,execute:async n=>{const e=Re.get(),t=e.getGsMap();if(t?.view?.zoom!==void 0){const r=e.mapOperations,i=t.view.zoom-1;return await r?.setZoom(i),i}return t?.view?.zoom}}});ye.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the location (e.g., 52.52 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0},{name:"lon",description:"the longitude of the location (e.g., 13.405 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0}]},handler:{canExecute:cn,execute:async n=>{const e=En(n),t=Xo([Number(n.params.lon).valueOf(),Number(n.params.lat).valueOf()]);await e.setCenter([t[0],t[1]])}}});ye.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(zt).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:cn,execute:async n=>{const e=En(n),t=n.params.source?.trim().toLowerCase(),r=n.params.url,i=Ko(t),a=n?.params&&n.params.basemap==!0;let s;r&&(s=r.split("/").pop()),!s&&i&&(s=i);const l=Wa({name:s,type:Yo(t),source:Wa({type:i,url:r??Zo(i)})});await Wn(l,"url"),await e.addLayer(l,a)}}});ye.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:cn,execute:async n=>{const e=En(n),r=n.activeEditor.getGsMap(),i=parseInt(n.params.index)-1;if(i<0||!r||i>=r.layers.length)return;const a=r.layers[i];a?.uuid&&await e.deleteLayer(a.uuid)}}});ye.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:cn,execute:async n=>{const e=En(n),r=n.activeEditor.getGsMap(),i=parseInt(n.params.index)-1;if(i<0||!r||i>=r.layers.length)return;const a=r.layers[i];if(!a?.uuid)return;const s=a.name||`Layer ${i+1}`,l=n.params?.newName||await vi(`Enter new name for "${s}":`,s);!l||l===s||await e.renameLayer(a.uuid,l)}}});ye.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:cn,execute:async n=>{const e=En(n),t=n.params?.mode;await e.switchColorMode(t)}}});ye.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:cn,execute:async n=>{const e=En(n),t=n.params.src,r=n.params.position;await e.addOverlayFromModule(t,r)}}});ye.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:cn,execute:async n=>{const e=En(n),t=n.params.src;await e.addControlFromModule(t)}}});ye.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates in WGS84 (EPSG:4326) format",type:"number[]"}]},handler:{canExecute:cn,execute:async n=>{const e=n.activeEditor,t=n.params.latlon,i=await e.getRenderer().getViewExtent();if(!i)throw new Error("Failed to get view extent");let a=i;return(t||t===void 0)&&(a=Jo(i,"EPSG:3857","EPSG:4326"),[a[0],a[1]]=[a[1],a[0]],[a[2],a[3]]=[a[3],a[2]]),n.viewExtent=a,a}}});ye.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:n=>Re.get()instanceof et,execute:async n=>{const e=Re.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});ye.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:n=>Re.get()instanceof et,execute:async n=>{const e=Re.get();e instanceof et&&await e.refresh()}}});ye.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:n=>Re.get()instanceof et,execute:async n=>{const e=Re.get();e instanceof et&&await e.resetView()}}});ye.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:n=>Re.get()instanceof et,execute:async n=>{const t=Re.get().mapOperations;t&&await t.switchColorMode()}}});ye.registerAll({command:{id:"capture_map_screenshot",name:"Capture map screenshot",description:"Takes a screenshot of the currently visible OpenLayers map and returns it as a base64-encoded data URL. Useful for analyzing map imagery with ML tools.",parameters:[{name:"filePath",description:"Optional path for the screenshot file. If provided, the screenshot will be saved to this path. If not provided, a unique filename based on date and time will be generated and the screenshot will be saved (e.g., 'screenshot-2024-01-15-14-30-45.png').",type:"string",required:!1}],output:[{name:"dataUrl",description:"Base64-encoded data URL of the map screenshot (format: data:image/png;base64,...)",type:"string"},{name:"width",description:"Width of the captured image in pixels",type:"number"},{name:"height",description:"Height of the captured image in pixels",type:"number"},{name:"filePath",description:"Path of the saved file (always present as screenshot is always saved)",type:"string"}]},handler:{canExecute:n=>n.activeEditor instanceof et,execute:async n=>{try{const e=n.activeEditor;if(!(e instanceof et))return{error:"Active editor is not a map editor"};const t=e.getRenderer();return!t||!(t instanceof $o)?{error:"Map renderer not available"}:await $r.runAsync("Capturing map screenshot",async r=>{try{r.message="Capturing screenshot from map...",r.progress=10,Ct.info("Capturing map screenshot...");const i=await t.sendMessage("captureScreenshot",{});if(!i)throw Ct.error("No result from captureScreenshot"),Ce("Failed to capture screenshot: No result from iframe"),new Error("No result from screenshot capture");if(!i.success)throw Ct.error(`Screenshot capture failed: ${i.error||"Unknown error"}`),Ce(`Failed to capture screenshot: ${i.error||"Unknown error"}`),new Error(i.error||"Failed to capture screenshot");r.message="Preparing to save screenshot...",r.progress=50,Ct.info("Screenshot captured, saving to workspace...");const a=await Je.getWorkspace();if(!a)throw Ct.error("No workspace available"),Ce("Failed to save screenshot: No workspace available"),new Error("No workspace available");let s=n.params?.filePath;if(!s){let m="map";e.input?.data instanceof At&&(m=e.input.data.getName().replace(/\.geospace$/i,""),m=m.replace(/[^a-zA-Z0-9_-]/g,"_"));const k=new Date,D=k.getFullYear(),B=String(k.getMonth()+1).padStart(2,"0"),ee=String(k.getDate()).padStart(2,"0"),Y=String(k.getHours()).padStart(2,"0"),G=String(k.getMinutes()).padStart(2,"0"),$=String(k.getSeconds()).padStart(2,"0");s=`${m}-screenshot-${D}-${B}-${ee}-${Y}-${G}-${$}.png`}const l=s.endsWith(".png")?s:`${s}.png`;if(r.message=`Saving screenshot to ${l}...`,r.progress=70,Ct.info(`Saving screenshot to: ${l}`),!i.dataUrl)throw Ct.error("No dataUrl in screenshot result"),Ce("Failed to save screenshot: No image data received"),new Error("No image data in screenshot result");const u=i.dataUrl.split(",")[1];if(!u)throw Ct.error("Invalid dataUrl format"),Ce("Failed to save screenshot: Invalid image data format"),new Error("Invalid image data format");r.message="Converting image data...",r.progress=80;const h=Uint8Array.from(atob(u),m=>m.charCodeAt(0)),T=new Blob([h],{type:"image/png"}),E=await a.getResource(l,{create:!0});if(!E)throw Ct.error(`Failed to create file resource: ${l}`),Ce(`Failed to save screenshot: Could not create file ${l}`),new Error(`Failed to create file: ${l}`);return r.message="Writing file to workspace...",r.progress=90,Ct.info(`Saving blob (size: ${T.size} bytes) to file...`),await E.saveContents(T,{contentType:ia.BINARY}),r.message="Screenshot saved successfully",r.progress=100,Ct.info(`Screenshot saved successfully to: ${l}`),xt(`Screenshot saved: ${l}`),{dataUrl:i.dataUrl,width:i.width,height:i.height,filePath:l}}catch(i){throw Ct.error(`Screenshot capture failed: ${i.message}`),Ce(`Failed to capture screenshot: ${i.message}`),i}})}catch(e){return Ct.error(`Failed to capture map screenshot: ${e.message}`),Ce(`Failed to capture screenshot: ${e.message}`),{error:`Failed to capture map screenshot: ${e.message}`}}}}});const Dp=`
**geo!space - WebGIS Application:**

geo!space is a WebGIS (Web Geographic Information System) application for creating, editing, and visualizing interactive maps.

**Core Capabilities:**
- Interactive map editor with zoom, pan, and layer management
- Support for multiple layer types: GeoJSON, WMS, WMTS, Vector Tiles, and more
- Drawing tools for creating and editing geographic features
- Style management for customizing layer appearance
- Map state persistence in .geospace files (JSON format containing map configuration, layers, view settings, and styles)

**Map Editor:**
When a .geospace file is open, the map editor provides:
- Interactive map view with coordinate system support (EPSG:3857, EPSG:4326, etc.)
- Layer panel for managing multiple data layers
- Drawing tools for creating points, lines, and polygons
- Style editor for customizing layer visualizations
- Catalog integration for browsing and adding spatial data
`,Rp={enhance:async(n,e)=>`${n}

${Dp}`,priority:5};function Ip(){Q.registerContribution(Nr,{label:"Geo!space Prompt Enhancer",enhancer:Rp})}const Lp=`# 🌐 geo!space
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/erdalkaraca/geospace)
[![Browser Support](https://img.shields.io/badge/Chrome%20%7C%20Opera-Supported-brightgreen)](#-browser-compatibility)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-purple)](#-key-features)
[![No Installation](https://img.shields.io/badge/Installation-None%20Required-orange)](#-quick-start)
[![Built on app!space](https://img.shields.io/badge/Built%20on-app%21space-blue)](https://github.com/kispace-io/appspace)

**The Interactive Mapping IDE in Your Browser**

geo!space is a powerful web application built on the [app!space](https://github.com/kispace-io/appspace) platform that provides professional mapping capabilities in your browser. Create interactive maps, work with geospatial data, and transform maps into cross-platform Progressive Web Apps - all without installing any software, directly in your browser.

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🌐 Browser Compatibility](#-browser-compatibility)
- [🌟 Use Cases](#-use-cases)
- [🚀 Getting Started](#-getting-started)
- [👨‍💻 Development](#-development)
- [💡 Examples](#-examples)
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

### 🛠️ **Map Building & Deployment**
- **PWA Builder**: Transform \`.geospace\` files into cross-platform Progressive Web Apps
- **Custom Controls**: Create interactive UI components using JavaScript modules
- **Module System**: Import and share custom map controls within your workspace

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

### 2. **Working with Files**
- **\`.geospace\` files**: Map files that open in the interactive map editor
- **Other files**: Open in the appropriate editor based on file type

### 3. **Creating Interactive Maps**
- Double-click \`.geospace\` files to open them in the map editor
- Use the map editor's UI to interact with layers, features, and styling
- Add data sources: OSM tiles, GeoJSON files, KML, GeoTIFF, GPX, or custom features
- **Build PWA**: Use the "Build map" button to transform your \`.geospace\` file into a cross-platform Progressive Web App

### 4. **Resource Catalog**
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

## 💡 Examples

### **Create a City Map**
\`\`\`
1. Create a new .geospace file
2. Add OpenStreetMap as base layer
3. Add GeoJSON layers for buildings and trees
4. Use the "Build map" button to create a deployable PWA
\`\`\`

### **Custom Map Controls**
\`\`\`
1. Create a JavaScript module for custom map controls
2. Use Lit and WebAwesome components for UI
3. Add your module to a map's controls array
4. Build the map as a PWA for deployment
\`\`\`

## 🔧 Troubleshooting

### **Common Issues**

**File Not Found**
- If you don't see expected files, try reloading the workspace
- Ensure the workspace folder is properly connected

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
A: Yes. All data stays in your browser and local workspace. No data is sent to external servers.

**Q: Can I use geo!space offline?**
A: Yes, for basic mapping features. Some features may require internet connection for data sources.

**Q: How do I share my maps?**
A: Use the "Build map" button to create a PWA that can be deployed anywhere or shared as a standalone app.

**Q: What file formats are supported?**
A: Maps: \`.geospace\` (JSON), Data: GeoJSON, KML, GPX, GeoTIFF, Features. Tile sources: OSM, XYZ, WMS, WMTS, BM (basemap.de), Satellite imagery (Esri, Sentinel-2).

**Q: Can I customize maps?**
A: Yes! Create custom controls using JavaScript modules with Lit and WebAwesome components.

## 🏗️ Technical Architecture

geo!space is built on the [app!space](https://github.com/kispace-io/appspace) platform, which provides the core IDE infrastructure.

**geo!space-Specific Stack:**
- **OpenLayers**: Professional mapping library
- **Custom Runtime**: Map-to-OpenLayers conversion system (\`gs-lib\`)
- **Style Loader**: Dynamic style loading for geospatial data
- **PWA Builder**: Transform \`.geospace\` files into cross-platform Progressive Web Apps
- **Lit & WebAwesome**: Available for creating custom map controls and overlays

## 🤝 Trusted by

- **[Kiosk Scout](https://finder.kioskscout.de)**: A cross-platform PWA for finding nearby vending machines
- **Want your geo!space app listed here?** Contact us!

---

## ⚡ Quick Start

**Get up and running in 3 minutes:**

1. **Open geo!space** in Chrome or Opera
2. **Connect workspace** - Click folder icon and select a local directory
3. **Create your first map** - Create a new \`.geospace\` file or open existing files
4. **Add data layers** - Import GeoJSON, KML, or add tile sources
5. **Build your app** - Use the "Build map" button to create a deployable PWA

### **First-Time Setup**
- **Start mapping immediately** - No configuration required
- **Add data sources** - Import your geospatial data or use built-in tile sources
- **Customize maps** - Create custom controls using JavaScript modules

## 🎯 Ready to Start?

1. **Load the app** in Chrome or Opera
2. **Connect a workspace** folder
3. **Create your first map** or open an existing \`.geospace\` file
4. **Add layers and customize** your map
5. **Build and share** your interactive maps as PWAs

**Happy mapping! 🗺️✨**`,Pp=fr.version,fs=Bt("GeoSpaceApp"),Np=["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.github-service","system.memoryusage","system.pythonpackagemanager","system.settings-tree","system.ai-system","system.howto"],Mp=[{target:zs,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:"system.fastviews-bottomend",name:"catalog",label:"Catalog",icon:"book",component:n=>S`<gs-catalog id="${n}"></gs-catalog>`},{target:Ws,name:"map-props",label:"Map Properties",icon:"fg map-options",component:n=>S`<gs-map-props id="${n}"></gs-map-props>`},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const n=It.get();return n instanceof At?!Ao(n):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_map_file"}],Up=[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>Pe(()=>import("./mapbuilder-extension-BHqfx2sw.js"),__vite__mapDeps([31,1,2,3,4,6])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>Pe(()=>import("./style-editor-extension-bd99_IOe.js"),__vite__mapDeps([32,1,2,3,4,6])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>Pe(()=>import("./overpass-extension-BBggtk82.js"),__vite__mapDeps([33,2,1,3,4,6])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>Pe(()=>import("./gtfs-extension-BmQbUQkU.js"),__vite__mapDeps([34,2,1,3,4,6])),icon:"map-location-dot"}],Ro={id:"geospace",name:"🌐geo!space",version:Pp,description:"An IDE for working with geospatial data.",metadata:{github:{owner:"erdalkaraca",repo:"geospace"},favicon:"/geospace.svg"},extensions:Np,contributions:{ui:Mp,extensions:Up},releaseHistory:async()=>{try{const{fetchReleases:n}=await Pe(async()=>{const{fetchReleases:e}=await import("./github-service-DMLRK4rG.js");return{fetchReleases:e}},__vite__mapDeps([35,2,1,3,4,6]));return await n()}catch(n){return console.error("Failed to fetch release history from GitHub:",n),[]}},async initialize(){ci.addPackage({name:fr.name,version:fr.version,dependencies:fr.dependencies,devDependencies:fr.devDependencies}),Ip(),Q.registerContribution("system.icons",{label:"geo!space File Icons",mappings:{geospace:"earth"},priority:1}),Ae({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async n=>{const e=It.get();if(!(e instanceof At))return;const t=La(e);if(!t){fs.warn(`Unsupported file type: ${e.getName()}`);return}const r=e.getWorkspacePath(),i=ye.createExecutionContext({source:t,url:r});await ye.execute("add_layer",i)}}}),Ae({command:{id:"create_map_file",name:"Create Geospace map file",description:"Creates a new .geospace map file with default map structure. This is specifically for creating geospace map files, not general files.",parameters:[{name:"path",description:"the path including name of the map file to be created (e.g., 'my-map.geospace' or 'my map'). The .geospace extension will be added automatically if missing. Must be relative to the workspace.",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async n=>{const e={...ms,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}},t=n.params?.path||"map.geospace",r=t.endsWith(".geospace")?t:`${t}.geospace`;return await ye.execute("create_file",{params:{path:r,contents:JSON.stringify(e,null,2),extension:".geospace",ask:t==="map.geospace"}})}}}),Ae({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async n=>{const e=new Xl(Lp,"README.md");await vn.loadEditor(e)}},contribution:{target:er,icon:"question-circle",label:"Welcome"}}),fs.info("geo!space is ready!")}};wn.registerApp(Ro,{defaultAppId:"geospace",autoStart:!0,container:document.body});const Kp=Object.freeze(Object.defineProperty({__proto__:null,geospaceApp:Ro},Symbol.toStringTag,{value:"Module"}));export{Ei as $,rn as A,ze as B,Nr as C,Gn as D,vi as E,At as F,et as G,Lr as H,fu as I,Ta as J,ln as K,fn as L,er as M,ki as N,Zn as O,Md as P,ka as Q,oo as R,on as S,zs as T,Js as U,Qe as V,Vn as W,ml as X,js as Y,Vs as Z,Xp as _,xt as a,Or as a0,di as a1,jt as a2,qp as a3,Bp as a4,Hp as a5,Kp as a6,Ce as b,Re as c,It as d,Q as e,Pt as f,$e as g,Ae as h,wn as i,iu as j,Cu as k,_o as l,mt as m,ye as n,Dn as o,ru as p,ia as q,bt as r,Xr as s,$r as t,Le as u,vn as v,Je as w,Fs as x,Gt as y,Bt as z};
