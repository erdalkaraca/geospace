const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/git-extension-D7HkdJaR.js","assets/index-CQTfp0Ol.js","assets/index-C2t38aP0.css","assets/pyterminal-extension-D9_27bUb.js","assets/xterm-CODBi7oP.js","assets/k-linuxterminal-EJIbwrWo.js","assets/webllmservice-_whJ3rvU.js","assets/p12-splitter-MGuGrFZF.js","assets/package-manager-extension-C3JHFYay.js","assets/notebook-extension-Co02v1S3.js","assets/editor.main-DC2Yd6vp.js","assets/editor-BhPcksyq.css","assets/command-palette-extension-97smYzj-.js","assets/download-extension-81kkSf14.js","assets/unzip-extension-DgFHi5gz.js","assets/md-editor-extension-Deu-wfgK.js","assets/media-viewer-extension-DcWQD9tM.js","assets/monaco-editor-extension-tca-Dzeu.js","assets/memory-usage-extension-DPe2xHLU.js","assets/webdav-extension-DwNEJzC6.js","assets/settings-tree-extension-BU_BaMPX.js","assets/ai-system-extension-DqqVWFHO.js","assets/rag-system-extension-D7niKS_N.js","assets/mapbuilder-extension-CFccy2Lc.js","assets/style-editor-extension-CIc7liNg.js","assets/overpass-extension-DTttzobX.js","assets/gtfs-extension-DLV-hxXC.js"])))=>i.map(i=>d[i]);
import{x as j,B as Tr,P as aa,o as Bn,g as oa,i as la,a as Mt,t as yt,b as Eo,n as Te,r as xt,e as mr,E as vt,c as gr,d as ca,f as ua,h as _o,p as Oo,v as jr,j as Cn,M as Ri,T as To,m as pa,k as Ro,l as Dt,_ as at,q as Cs,s as Po,O as Lo,u as $o,w as Do,G as As,y as ir,D as da,z as Es,A as No,C as Mo,F as Fo,H as zo,I as _s,J as qo,K as Uo}from"./index-CQTfp0Ol.js";const jo="@kispace-io/geospace",Wo="0.14.7",Bo={"@kispace-io/appspace":"file:../appspace","esbuild-wasm":"^0.25.11",ol:"^10.6.1","ol-mapbox-style":"^13.1.0",osmtogeojson:"^3.0.0-beta.5","font-gis":"^1.0.6","pace-js":"^1.2.4","pubsub-js":"^1.9.5"},Vo={"@testing-library/jest-dom":"^6.9.1","@types/node":"^24.9.2","@types/pubsub-js":"^1.8.6","@types/toastify-js":"^1.12.4","@vitest/coverage-v8":"^4.0.6","@vitest/ui":"^4.0.6","happy-dom":"^20.0.10",jsdom:"^27.1.0","rollup-plugin-visualizer":"^6.0.5",typescript:"~5.9.3",vite:"^7.1.12","vite-plugin-cross-origin-isolation":"^0.1.6","vite-plugin-mkcert":"^1.17.9","vite-plugin-static-copy":"^3.1.4","vite-plugin-zip":"^1.0.1",vitest:"^4.0.6",esbuild:"^0.25.11"},Ln={name:jo,version:Wo,dependencies:Bo,devDependencies:Vo};class Qi{constructor(e){this.children=[],this.variables=e,this.proxy=new Proxy(e,this)}get(e,t){return e[t]||this.parent?.getProxy()[t]}set(e,t,n){e[t]=n}put(e,t){this.variables[e]=t}getProxy(){return this.proxy}createChild(e={}){const t=new Qi(e);return t.parent=this,this.children.push(t),t}getChildren(){return this.children}getParent(){return this.parent}destroy(){const e=this.parent?.children.indexOf(this);e!==void 0&&e>=0&&this.parent?.children.splice(e,1),this.parent=void 0}}const qt=new Qi({}),br=qt.createChild({});br.put("html",j);br.put("render",Tr);const Os={debug:0,info:1,warning:2,error:3};let Go="debug";const tn={log:console.log.bind(console),info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),debug:console.debug.bind(console)};let ci=null;const qi=[];function An(r){if(r===null)return"null";if(r===void 0)return"undefined";if(typeof r=="string")return r;if(typeof r=="number"||typeof r=="boolean")return String(r);if(r instanceof Error)return`${r.name}: ${r.message}`;try{return JSON.stringify(r)}catch{return String(r)}}class Ho{constructor(e){this.source=e}info(e){this.log(e,"info")}warning(e){this.log(e,"warning")}warn(e){this.log(e,"warning")}error(e){this.log(e,"error")}debug(e){this.log(e,"debug")}log(e,t){rn(this.source,e,t)}}function Ko(r){return Os[r]>=Os[Go]}function rn(r,e,t){Ko(t)&&(ci?ci(r,e,t):(qi.push({source:r,message:e,level:t}),tn[t==="error"?"error":t==="warning"?"warn":t==="debug"?"debug":"log"](`[${r}] ${e}`)))}function Yo(){console.log=function(...r){tn.log.apply(console,r),rn("Console",r.map(e=>An(e)).join(" "),"info")},console.info=function(...r){tn.info.apply(console,r),rn("Console",r.map(e=>An(e)).join(" "),"info")},console.warn=function(...r){tn.warn.apply(console,r),rn("Console",r.map(e=>An(e)).join(" "),"warning")},console.error=function(...r){tn.error.apply(console,r),rn("Console",r.map(e=>An(e)).join(" "),"error")},console.debug=function(...r){tn.debug.apply(console,r),rn("Console",r.map(e=>An(e)).join(" "),"debug")}}Yo();function Jo(r){for(ci=r;qi.length>0;){const e=qi.shift();e&&r(e.source,e.message,e.level)}}function Zo(){ci=null}function Hr(r){return new Ho(r)}const Ke=Hr("System");qt.put("logger",Ke);var Qo=Object.defineProperty,Xo=(r,e,t)=>e in r?Qo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Pi=(r,e,t)=>(Xo(r,typeof e!="symbol"?e+"":e,t),t),el=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Li=(r,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return r.has(e)},ei=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Ts=(r,e,t)=>(el(r,e,"access private method"),t);function ha(r,e){return Object.is(r,e)}let gt=null,zn=!1,si=1;const ui=Symbol("SIGNAL");function sn(r){const e=gt;return gt=r,e}function tl(){return gt}function rl(){return zn}const Xi={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function bi(r){if(zn)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(gt===null)return;gt.consumerOnSignalRead(r);const e=gt.nextProducerIndex++;if(dn(gt),e<gt.producerNode.length&&gt.producerNode[e]!==r&&Ui(gt)){const t=gt.producerNode[e];wi(t,gt.producerIndexOfThis[e])}gt.producerNode[e]!==r&&(gt.producerNode[e]=r,gt.producerIndexOfThis[e]=Ui(gt)?ga(r,gt,e):0),gt.producerLastReadVersion[e]=r.version}function nl(){si++}function fa(r){if(!(!r.dirty&&r.lastCleanEpoch===si)){if(!r.producerMustRecompute(r)&&!ll(r)){r.dirty=!1,r.lastCleanEpoch=si;return}r.producerRecomputeValue(r),r.dirty=!1,r.lastCleanEpoch=si}}function ma(r){if(r.liveConsumerNode===void 0)return;const e=zn;zn=!0;try{for(const t of r.liveConsumerNode)t.dirty||sl(t)}finally{zn=e}}function il(){return gt?.consumerAllowSignalWrites!==!1}function sl(r){var e;r.dirty=!0,ma(r),(e=r.consumerMarkedDirty)==null||e.call(r.wrapper??r)}function al(r){return r&&(r.nextProducerIndex=0),sn(r)}function ol(r,e){if(sn(e),!(!r||r.producerNode===void 0||r.producerIndexOfThis===void 0||r.producerLastReadVersion===void 0)){if(Ui(r))for(let t=r.nextProducerIndex;t<r.producerNode.length;t++)wi(r.producerNode[t],r.producerIndexOfThis[t]);for(;r.producerNode.length>r.nextProducerIndex;)r.producerNode.pop(),r.producerLastReadVersion.pop(),r.producerIndexOfThis.pop()}}function ll(r){dn(r);for(let e=0;e<r.producerNode.length;e++){const t=r.producerNode[e],n=r.producerLastReadVersion[e];if(n!==t.version||(fa(t),n!==t.version))return!0}return!1}function ga(r,e,t){var n;if(es(r),dn(r),r.liveConsumerNode.length===0){(n=r.watched)==null||n.call(r.wrapper);for(let i=0;i<r.producerNode.length;i++)r.producerIndexOfThis[i]=ga(r.producerNode[i],r,i)}return r.liveConsumerIndexOfThis.push(t),r.liveConsumerNode.push(e)-1}function wi(r,e){var t;if(es(r),dn(r),typeof ngDevMode<"u"&&ngDevMode&&e>=r.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${r.liveConsumerNode.length} consumers)`);if(r.liveConsumerNode.length===1){(t=r.unwatched)==null||t.call(r.wrapper);for(let i=0;i<r.producerNode.length;i++)wi(r.producerNode[i],r.producerIndexOfThis[i])}const n=r.liveConsumerNode.length-1;if(r.liveConsumerNode[e]=r.liveConsumerNode[n],r.liveConsumerIndexOfThis[e]=r.liveConsumerIndexOfThis[n],r.liveConsumerNode.length--,r.liveConsumerIndexOfThis.length--,e<r.liveConsumerNode.length){const i=r.liveConsumerIndexOfThis[e],o=r.liveConsumerNode[e];dn(o),o.producerIndexOfThis[i]=e}}function Ui(r){var e;return r.consumerIsAlwaysLive||(((e=r?.liveConsumerNode)==null?void 0:e.length)??0)>0}function dn(r){r.producerNode??(r.producerNode=[]),r.producerIndexOfThis??(r.producerIndexOfThis=[]),r.producerLastReadVersion??(r.producerLastReadVersion=[])}function es(r){r.liveConsumerNode??(r.liveConsumerNode=[]),r.liveConsumerIndexOfThis??(r.liveConsumerIndexOfThis=[])}function va(r){if(fa(r),bi(r),r.value===ji)throw r.error;return r.value}function cl(r){const e=Object.create(ul);e.computation=r;const t=()=>va(e);return t[ui]=e,t}const $i=Symbol("UNSET"),Di=Symbol("COMPUTING"),ji=Symbol("ERRORED"),ul={...Xi,value:$i,dirty:!0,error:null,equal:ha,producerMustRecompute(r){return r.value===$i||r.value===Di},producerRecomputeValue(r){if(r.value===Di)throw new Error("Detected cycle in computations.");const e=r.value;r.value=Di;const t=al(r);let n,i=!1;try{n=r.computation.call(r.wrapper),i=e!==$i&&e!==ji&&r.equal.call(r.wrapper,e,n)}catch(o){n=ji,r.error=o}finally{ol(r,t)}if(i){r.value=e;return}r.value=n,r.version++}};function pl(){throw new Error}let dl=pl;function hl(){dl()}function fl(r){const e=Object.create(vl);e.value=r;const t=()=>(bi(e),e.value);return t[ui]=e,t}function ml(){return bi(this),this.value}function gl(r,e){il()||hl(),r.equal.call(r.wrapper,r.value,e)||(r.value=e,yl(r))}const vl={...Xi,equal:ha,value:void 0};function yl(r){r.version++,nl(),ma(r)}const _t=Symbol("node");var vr;(r=>{var e,t,n,i;class o{constructor(f,y={}){ei(this,t),Pi(this,e);const w=fl(f)[ui];if(this[_t]=w,w.wrapper=this,y){const x=y.equals;x&&(w.equal=x),w.watched=y[r.subtle.watched],w.unwatched=y[r.subtle.unwatched]}}get(){if(!(0,r.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return ml.call(this[_t])}set(f){if(!(0,r.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(rl())throw new Error("Writes to signals not permitted during Watcher callback");const y=this[_t];gl(y,f)}}e=_t,t=new WeakSet,r.isState=c=>typeof c=="object"&&Li(t,c),r.State=o;class a{constructor(f,y){ei(this,i),Pi(this,n);const w=cl(f)[ui];if(w.consumerAllowSignalWrites=!0,this[_t]=w,w.wrapper=this,y){const x=y.equals;x&&(w.equal=x),w.watched=y[r.subtle.watched],w.unwatched=y[r.subtle.unwatched]}}get(){if(!(0,r.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return va(this[_t])}}n=_t,i=new WeakSet,r.isComputed=c=>typeof c=="object"&&Li(i,c),r.Computed=a,(c=>{var f,y,T,w;function x(L){let G,F=null;try{F=sn(null),G=L()}finally{sn(F)}return G}c.untrack=x;function I(L){var G;if(!(0,r.isComputed)(L)&&!(0,r.isWatcher)(L))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((G=L[_t].producerNode)==null?void 0:G.map(F=>F.wrapper))??[]}c.introspectSources=I;function z(L){var G;if(!(0,r.isComputed)(L)&&!(0,r.isState)(L))throw new TypeError("Called introspectSinks without a Signal argument");return((G=L[_t].liveConsumerNode)==null?void 0:G.map(F=>F.wrapper))??[]}c.introspectSinks=z;function B(L){if(!(0,r.isComputed)(L)&&!(0,r.isState)(L))throw new TypeError("Called hasSinks without a Signal argument");const G=L[_t].liveConsumerNode;return G?G.length>0:!1}c.hasSinks=B;function de(L){if(!(0,r.isComputed)(L)&&!(0,r.isWatcher)(L))throw new TypeError("Called hasSources without a Computed or Watcher argument");const G=L[_t].producerNode;return G?G.length>0:!1}c.hasSources=de;class ve{constructor(G){ei(this,y),ei(this,T),Pi(this,f);let F=Object.create(Xi);F.wrapper=this,F.consumerMarkedDirty=G,F.consumerIsAlwaysLive=!0,F.consumerAllowSignalWrites=!1,F.producerNode=[],this[_t]=F}watch(...G){if(!(0,r.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ts(this,T,w).call(this,G);const F=this[_t];F.dirty=!1;const O=sn(F);for(const q of G)bi(q[_t]);sn(O)}unwatch(...G){if(!(0,r.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Ts(this,T,w).call(this,G);const F=this[_t];dn(F);for(let O=F.producerNode.length-1;O>=0;O--)if(G.includes(F.producerNode[O].wrapper)){wi(F.producerNode[O],F.producerIndexOfThis[O]);const q=F.producerNode.length-1;if(F.producerNode[O]=F.producerNode[q],F.producerIndexOfThis[O]=F.producerIndexOfThis[q],F.producerNode.length--,F.producerIndexOfThis.length--,F.nextProducerIndex--,O<F.producerNode.length){const J=F.producerIndexOfThis[O],Se=F.producerNode[O];es(Se),Se.liveConsumerIndexOfThis[J]=O}}}getPending(){if(!(0,r.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[_t].producerNode.filter(F=>F.dirty).map(F=>F.wrapper)}}f=_t,y=new WeakSet,T=new WeakSet,w=function(L){for(const G of L)if(!(0,r.isComputed)(G)&&!(0,r.isState)(G))throw new TypeError("Called watch/unwatch without a Computed or State argument")},r.isWatcher=L=>Li(y,L),c.Watcher=ve;function U(){var L;return(L=tl())==null?void 0:L.wrapper}c.currentComputed=U,c.watched=Symbol("watched"),c.unwatched=Symbol("unwatched")})(r.subtle||(r.subtle={}))})(vr||(vr={}));const bl=Symbol("SignalWatcherBrand"),wl=new FinalizationRegistry((({watcher:r,signal:e})=>{r.unwatch(e)})),Rs=new WeakMap;function xi(r){return r[bl]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),r):class extends r{constructor(){super(...arguments),this._$St=new vr.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new vr.Computed((()=>{this._$St.get(),super.performUpdate()}));const e=this._$Su=new vr.subtle.Watcher((function(){const t=Rs.get(this);t!==void 0&&(t._$Si===!1&&t.requestUpdate(),this.watch())}));Rs.set(e,this),wl.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach((t=>t.commit()))}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,n){this._$So=!0,super.requestUpdate(e,t,n)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask((()=>{this.isConnected===!1&&this._$Sp()}))}_(e){this._$Sh.add(e);const t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}vr.State;vr.Computed;const Kr=(r,e)=>new vr.State(r,e),Wt=(r,e)=>{aa.subscribe(r,(t,n)=>e(n))},We=(r,e)=>{aa.publish(r,e)},ya=r=>function(e,t,n){const i=n.value;return i.topic=r,n};qt.put("subscribe",Wt);qt.put("publish",We);const Yr="events/contributionregistry/contributionsChanged";class xl{constructor(){this.contributions=new Map}registerContribution(e,t){const n=this.getContributions(e);if(t.disabled instanceof Function){const i=t.disabled;t.disabled=new vr.Computed(i)}n.push(t),We(Yr,{target:e,contributions:n})}getContributions(e){return this.contributions.has(e)||this.contributions.set(e,[]),this.contributions.get(e)}}const Ye=new xl;qt.put("contributionRegistry",Ye);const Il={},Ze=Kr(null),ln=Kr(null),Wi=Kr(null),ba=Kr(0),Vt=Kr(void 0);Kr({name:"",timestamp:0});class wa{constructor(e,t,n,i,o){this.id=e,this.name=t,this.description=n,this.parameters=i||[],this.output=o||[]}}class xa{async execute(e,t){return Le.execute(e,t)}async undo(){}async redo(){}}class Ia{constructor(){this.commands={},this.handlers=new Map}registerHandler(e,t){this.handlers.has(e)||this.handlers.set(e,[]);const n=this.handlers.get(e);n.push(t),n.sort((i,o)=>(o.ranking??0)-(i.ranking??0))}getHandler(e){return this.handlers.get(e)}createExecutionContext(e){return{params:e||{},activePart:Ze.get(),activeEditor:ln.get()}}execute(e,t={}){const n=this.getHandler(e);if(!n)throw Ke.debug(`[CommandRegistry] No handlers registered for command: ${e}`),new Error(`No handlers registered for command: ${e}`);const i=this.getCommand(e),o=t.params?` params: ${JSON.stringify(t.params)}`:"";Ke.debug(`[CommandRegistry] Executing command: ${e}${i?` (${i.name})`:""}${o}`);for(const a of n)if(a.canExecute===void 0||a.canExecute(t))try{const c=a.execute(t);return Ke.debug(`[CommandRegistry] Command executed successfully: ${e} (result: ${c})`),c}catch(c){const f=c instanceof Error?c.message:String(c);throw Ke.error(`[CommandRegistry] Command execution failed: ${e} - ${f}`),c}Ke.error(`[CommandRegistry] No handler found to execute command: ${e}`)}createAndRegisterCommand(e,t,n,i,o){const a=new wa(e,t,n,i);this.registerCommand(a),o&&this.registerHandler(e,o)}registerCommand(e){this.commands[e.id]=e,Ke.debug(`Command registered: ${e.id}`)}hasCommand(e){return e in this.commands}listCommands(e){return e?Object.values(this.commands).filter(t=>(Le.getHandler(t.id)||[]).some(i=>i.canExecute===void 0||i.canExecute(e))).reduce((t,n)=>(t[n.id]=n,t),{}):this.commands}getCommand(e){return this.commands[e]}registerAll(e){const t=e.command.id;this.registerCommand(e.command),e.handler&&this.registerHandler(t,e.handler),e.contribution&&e.contribution.target&&Ye.registerContribution(e.contribution.target,{command:t,...e.contribution})}}const Le=new Ia;qt.put("commandRegistry",Le);const et=r=>{Le.registerAll(r)},Dp=Object.freeze(Object.defineProperty({__proto__:null,Command:wa,CommandRegistry:Ia,CommandStack:xa,commandRegistry:Le,registerAll:et},Symbol.toStringTag,{value:"Module"}));class kl{constructor(){this.bindings=new Map,this.enabled=!0,document.addEventListener("keydown",this.handleKeyDown.bind(this),!0),this.registerExistingCommandBindings(),this.watchCommandRegistry()}registerExistingCommandBindings(){const e=Le.listCommands();Object.values(e).forEach(t=>{t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)})}watchCommandRegistry(){const e=Le.registerCommand.bind(Le);Le.registerCommand=t=>{e(t),t.keyBinding&&this.registerKeyBinding(t.id,t.keyBinding)}}parseKeyBinding(e){if(!e||e.trim()==="")return null;const t=e.toUpperCase().split("+").map(a=>a.trim());if(t.length===0)return null;const n={ctrl:!1,alt:!1,shift:!1,meta:!1},i=t[t.length-1],o=t.slice(0,-1);for(const a of o)switch(a){case"CTRL":case"CONTROL":n.ctrl=!0;break;case"ALT":case"OPTION":n.alt=!0;break;case"SHIFT":n.shift=!0;break;case"META":case"CMD":case"COMMAND":case"WIN":case"WINDOWS":n.meta=!0;break;default:Ke.warn(`Unknown modifier: ${a}`)}return n.key=this.normalizeKey(i),n}normalizeKey(e){return{SPACE:" ",ESC:"ESCAPE",RETURN:"ENTER",LEFT:"ARROWLEFT",RIGHT:"ARROWRIGHT",UP:"ARROWUP",DOWN:"ARROWDOWN",DEL:"DELETE",INS:"INSERT",PAGEUP:"PAGEUP",PAGEDOWN:"PAGEDOWN"}[e]||e}getBindingKey(e){const t=[];return e.ctrl&&t.push("ctrl"),e.alt&&t.push("alt"),e.shift&&t.push("shift"),e.meta&&t.push("meta"),t.sort(),`${t.join("+")}+${e.key.toUpperCase()}`}registerKeyBinding(e,t){const n=this.parseKeyBinding(t);if(!n)return Ke.error(`Invalid key binding: ${t}`),!1;n.commandId=e;const i=this.getBindingKey(n);this.bindings.has(i)||this.bindings.set(i,[]);const o=this.bindings.get(i);return o.find(c=>c.commandId===e)?(Ke.error(`Key binding ${t} already registered for command ${e}`),!1):(o.push(n),Ke.debug(`Key binding registered: ${t} -> ${e}`),!0)}unregisterKeyBinding(e,t){if(t){const n=this.parseKeyBinding(t);if(n){const i=this.getBindingKey(n),o=this.bindings.get(i);if(o){const a=o.filter(c=>c.commandId!==e);a.length===0?this.bindings.delete(i):this.bindings.set(i,a)}}}else for(const[n,i]of this.bindings.entries()){const o=i.filter(a=>a.commandId!==e);o.length===0?this.bindings.delete(n):this.bindings.set(n,o)}}getKeyBindingsForCommand(e){const t=[];for(const n of this.bindings.values())for(const i of n)i.commandId===e&&t.push(this.formatKeyBinding(i));return t}formatKeyBinding(e){const t=[];e.ctrl&&t.push("Ctrl"),e.alt&&t.push("Alt"),e.shift&&t.push("Shift"),e.meta&&t.push("Cmd");let n=e.key;return n.length===1?n=n.toUpperCase():n=n.charAt(0).toUpperCase()+n.slice(1).toLowerCase(),t.push(n),t.join("+")}handleKeyDown(e){if(!this.enabled)return;const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)){const a=e.key.toUpperCase();if(!((e.ctrlKey||e.metaKey)&&e.shiftKey&&a==="P"))return}const n={commandId:"",key:this.normalizeKey(e.key.toUpperCase()),ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey},i=this.getBindingKey(n),o=this.bindings.get(i);if(o&&o.length>0){const a=o[0];try{e.preventDefault(),e.stopPropagation();const c=Le.createExecutionContext({});Le.execute(a.commandId,c),Ke.info(`Executed command via key binding: ${a.commandId}`)}catch(c){Ke.error(`Failed to execute command ${a.commandId}: ${c.message}`)}}}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}getAllBindings(){return new Map(this.bindings)}clearAll(){this.bindings.clear()}}Ke.debug("KeyBindingManager initializing...");const ka=new kl;Ke.debug("KeyBindingManager initialized");qt.put("keyBindingManager",ka);function ts(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Jr=ts();function Sa(r){Jr=r}var qn={exec:()=>null};function Ge(r,e=""){let t=typeof r=="string"?r:r.source,n={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(zt.caret,"$1"),t=t.replace(i,a),n},getRegex:()=>new RegExp(t,e)};return n}var zt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i")},Sl=/^(?:[ \t]*(?:\n|$))+/,Cl=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Al=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Vn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,El=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,rs=/(?:[*+-]|\d{1,9}[.)])/,Ca=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Aa=Ge(Ca).replace(/bull/g,rs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),_l=Ge(Ca).replace(/bull/g,rs).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ns=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ol=/^[^\n]+/,is=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Tl=Ge(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",is).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Rl=Ge(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,rs).getRegex(),Ii="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ss=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pl=Ge("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ss).replace("tag",Ii).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ea=Ge(ns).replace("hr",Vn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ii).getRegex(),Ll=Ge(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ea).getRegex(),as={blockquote:Ll,code:Cl,def:Tl,fences:Al,heading:El,hr:Vn,html:Pl,lheading:Aa,list:Rl,newline:Sl,paragraph:Ea,table:qn,text:Ol},Ps=Ge("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Vn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ii).getRegex(),$l={...as,lheading:_l,table:Ps,paragraph:Ge(ns).replace("hr",Vn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ps).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ii).getRegex()},Dl={...as,html:Ge(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ss).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:qn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ge(ns).replace("hr",Vn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Aa).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Nl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ml=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_a=/^( {2,}|\\)\n(?!\s*$)/,Fl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ki=/[\p{P}\p{S}]/u,os=/[\s\p{P}\p{S}]/u,Oa=/[^\s\p{P}\p{S}]/u,zl=Ge(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,os).getRegex(),Ta=/(?!~)[\p{P}\p{S}]/u,ql=/(?!~)[\s\p{P}\p{S}]/u,Ul=/(?:[^\s\p{P}\p{S}]|~)/u,jl=Ge(/link|code|html/,"g").replace("link",new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code",new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html",/<(?! )[^<>]*?>/).getRegex(),Ra=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Wl=Ge(Ra,"u").replace(/punct/g,ki).getRegex(),Bl=Ge(Ra,"u").replace(/punct/g,Ta).getRegex(),Pa="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Vl=Ge(Pa,"gu").replace(/notPunctSpace/g,Oa).replace(/punctSpace/g,os).replace(/punct/g,ki).getRegex(),Gl=Ge(Pa,"gu").replace(/notPunctSpace/g,Ul).replace(/punctSpace/g,ql).replace(/punct/g,Ta).getRegex(),Hl=Ge("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Oa).replace(/punctSpace/g,os).replace(/punct/g,ki).getRegex(),Kl=Ge(/\\(punct)/,"gu").replace(/punct/g,ki).getRegex(),Yl=Ge(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Jl=Ge(ss).replace("(?:-->|$)","-->").getRegex(),Zl=Ge("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Jl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),pi=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Ql=Ge(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",pi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),La=Ge(/^!?\[(label)\]\[(ref)\]/).replace("label",pi).replace("ref",is).getRegex(),$a=Ge(/^!?\[(ref)\](?:\[\])?/).replace("ref",is).getRegex(),Xl=Ge("reflink|nolink(?!\\()","g").replace("reflink",La).replace("nolink",$a).getRegex(),Ls=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ls={_backpedal:qn,anyPunctuation:Kl,autolink:Yl,blockSkip:jl,br:_a,code:Ml,del:qn,emStrongLDelim:Wl,emStrongRDelimAst:Vl,emStrongRDelimUnd:Hl,escape:Nl,link:Ql,nolink:$a,punctuation:zl,reflink:La,reflinkSearch:Xl,tag:Zl,text:Fl,url:qn},ec={...ls,link:Ge(/^!?\[(label)\]\((.*?)\)/).replace("label",pi).getRegex(),reflink:Ge(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",pi).getRegex()},Bi={...ls,emStrongRDelimAst:Gl,emStrongLDelim:Bl,url:Ge(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ls).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Ge(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ls).getRegex()},tc={...Bi,br:Ge(_a).replace("{2,}","*").getRegex(),text:Ge(Bi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ti={normal:as,gfm:$l,pedantic:Dl},En={normal:ls,gfm:Bi,breaks:tc,pedantic:ec},rc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$s=r=>rc[r];function pr(r,e){if(e){if(zt.escapeTest.test(r))return r.replace(zt.escapeReplace,$s)}else if(zt.escapeTestNoEncode.test(r))return r.replace(zt.escapeReplaceNoEncode,$s);return r}function Ds(r){try{r=encodeURI(r).replace(zt.percentDecode,"%")}catch{return null}return r}function Ns(r,e){let t=r.replace(zt.findPipe,(o,a,c)=>{let f=!1,y=a;for(;--y>=0&&c[y]==="\\";)f=!f;return f?"|":" |"}),n=t.split(zt.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(zt.slashPipe,"|");return n}function _n(r,e,t){let n=r.length;if(n===0)return"";let i=0;for(;i<n&&r.charAt(n-i-1)===e;)i++;return r.slice(0,n-i)}function nc(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}function Ms(r,e,t,n,i){let o=e.href,a=e.title||null,c=r[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let f={type:r[0].charAt(0)==="!"?"image":"link",raw:t,href:o,title:a,text:c,tokens:n.inlineTokens(c)};return n.state.inLink=!1,f}function ic(r,e,t){let n=r.match(t.other.indentCodeCompensation);if(n===null)return e;let i=n[1];return e.split(`
`).map(o=>{let a=o.match(t.other.beginningSpace);if(a===null)return o;let[c]=a;return c.length>=i.length?o.slice(i.length):o}).join(`
`)}var di=class{options;rules;lexer;constructor(r){this.options=r||Jr}space(r){let e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){let e=this.rules.block.code.exec(r);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:_n(t,`
`)}}}fences(r){let e=this.rules.block.fences.exec(r);if(e){let t=e[0],n=ic(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(r){let e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let n=_n(t,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(t=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){let e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:_n(e[0],`
`)}}blockquote(r){let e=this.rules.block.blockquote.exec(r);if(e){let t=_n(e[0],`
`).split(`
`),n="",i="",o=[];for(;t.length>0;){let a=!1,c=[],f;for(f=0;f<t.length;f++)if(this.rules.other.blockquoteStart.test(t[f]))c.push(t[f]),a=!0;else if(!a)c.push(t[f]);else break;t=t.slice(f);let y=c.join(`
`),T=y.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${y}`:y,i=i?`${i}
${T}`:T;let w=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(T,o,!0),this.lexer.state.top=w,t.length===0)break;let x=o.at(-1);if(x?.type==="code")break;if(x?.type==="blockquote"){let I=x,z=I.raw+`
`+t.join(`
`),B=this.blockquote(z);o[o.length-1]=B,n=n.substring(0,n.length-I.raw.length)+B.raw,i=i.substring(0,i.length-I.text.length)+B.text;break}else if(x?.type==="list"){let I=x,z=I.raw+`
`+t.join(`
`),B=this.list(z);o[o.length-1]=B,n=n.substring(0,n.length-x.raw.length)+B.raw,i=i.substring(0,i.length-I.raw.length)+B.raw,t=z.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:o,text:i}}}list(r){let e=this.rules.block.list.exec(r);if(e){let t=e[1].trim(),n=t.length>1,i={type:"list",raw:"",ordered:n,start:n?+t.slice(0,-1):"",loose:!1,items:[]};t=n?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=n?t:"[*+-]");let o=this.rules.other.listItemRegex(t),a=!1;for(;r;){let f=!1,y="",T="";if(!(e=o.exec(r))||this.rules.block.hr.test(r))break;y=e[0],r=r.substring(y.length);let w=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,ve=>" ".repeat(3*ve.length)),x=r.split(`
`,1)[0],I=!w.trim(),z=0;if(this.options.pedantic?(z=2,T=w.trimStart()):I?z=e[1].length+1:(z=e[2].search(this.rules.other.nonSpaceChar),z=z>4?1:z,T=w.slice(z),z+=e[1].length),I&&this.rules.other.blankLine.test(x)&&(y+=x+`
`,r=r.substring(x.length+1),f=!0),!f){let ve=this.rules.other.nextBulletRegex(z),U=this.rules.other.hrRegex(z),L=this.rules.other.fencesBeginRegex(z),G=this.rules.other.headingBeginRegex(z),F=this.rules.other.htmlBeginRegex(z);for(;r;){let O=r.split(`
`,1)[0],q;if(x=O,this.options.pedantic?(x=x.replace(this.rules.other.listReplaceNesting,"  "),q=x):q=x.replace(this.rules.other.tabCharGlobal,"    "),L.test(x)||G.test(x)||F.test(x)||ve.test(x)||U.test(x))break;if(q.search(this.rules.other.nonSpaceChar)>=z||!x.trim())T+=`
`+q.slice(z);else{if(I||w.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(w)||G.test(w)||U.test(w))break;T+=`
`+x}!I&&!x.trim()&&(I=!0),y+=O+`
`,r=r.substring(O.length+1),w=q.slice(z)}}i.loose||(a?i.loose=!0:this.rules.other.doubleBlankLine.test(y)&&(a=!0));let B=null,de;this.options.gfm&&(B=this.rules.other.listIsTask.exec(T),B&&(de=B[0]!=="[ ] ",T=T.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:y,task:!!B,checked:de,loose:!1,text:T,tokens:[]}),i.raw+=y}let c=i.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let f=0;f<i.items.length;f++)if(this.lexer.state.top=!1,i.items[f].tokens=this.lexer.blockTokens(i.items[f].text,[]),!i.loose){let y=i.items[f].tokens.filter(w=>w.type==="space"),T=y.length>0&&y.some(w=>this.rules.other.anyLine.test(w.raw));i.loose=T}if(i.loose)for(let f=0;f<i.items.length;f++)i.items[f].loose=!0;return i}}html(r){let e=this.rules.block.html.exec(r);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(r){let e=this.rules.block.def.exec(r);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:n,title:i}}}table(r){let e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=Ns(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===n.length){for(let a of n)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<t.length;a++)o.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:o.align[a]});for(let a of i)o.rows.push(Ns(a,o.header.length).map((c,f)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[f]})));return o}}lheading(r){let e=this.rules.block.lheading.exec(r);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(r){let e=this.rules.block.paragraph.exec(r);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){let e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){let e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){let e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){let e=this.rules.inline.link.exec(r);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let o=_n(t.slice(0,-1),"\\");if((t.length-o.length)%2===0)return}else{let o=nc(e[2],"()");if(o===-2)return;if(o>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(n);o&&(n=o[1],i=o[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?n=n.slice(1):n=n.slice(1,-1)),Ms(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){let n=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[n.toLowerCase()];if(!i){let o=t[0].charAt(0);return{type:"text",raw:o,text:o}}return Ms(t,i,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let n=this.rules.inline.emStrongLDelim.exec(r);if(!(!n||n[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[2])||!t||this.rules.inline.punctuation.exec(t))){let i=[...n[0]].length-1,o,a,c=i,f=0,y=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(y.lastIndex=0,e=e.slice(-1*r.length+i);(n=y.exec(e))!=null;){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(a=[...o].length,n[3]||n[4]){c+=a;continue}else if((n[5]||n[6])&&i%3&&!((i+a)%3)){f+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+f);let T=[...n[0]][0].length,w=r.slice(0,i+n.index+T+a);if(Math.min(i,a)%2){let I=w.slice(1,-1);return{type:"em",raw:w,text:I,tokens:this.lexer.inlineTokens(I)}}let x=w.slice(2,-2);return{type:"strong",raw:w,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(r){let e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return n&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){let e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r){let e=this.rules.inline.del.exec(r);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(r){let e=this.rules.inline.autolink.exec(r);if(e){let t,n;return e[2]==="@"?(t=e[1],n="mailto:"+t):(t=e[1],n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(r){let e;if(e=this.rules.inline.url.exec(r)){let t,n;if(e[2]==="@")t=e[0],n="mailto:"+t;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);t=e[0],e[1]==="www."?n="http://"+e[0]:n=e[0]}return{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(r){let e=this.rules.inline.text.exec(r);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},sr=class Vi{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Jr,this.options.tokenizer=this.options.tokenizer||new di,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:zt,block:ti.normal,inline:En.normal};this.options.pedantic?(t.block=ti.pedantic,t.inline=En.pedantic):this.options.gfm&&(t.block=ti.gfm,this.options.breaks?t.inline=En.breaks:t.inline=En.gfm),this.tokenizer.rules=t}static get rules(){return{block:ti,inline:En}}static lex(e,t){return new Vi(t).lex(e)}static lexInline(e,t){return new Vi(t).inlineTokens(e)}lex(e){e=e.replace(zt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(zt.tabCharGlobal,"    ").replace(zt.spaceLine,""));e;){let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=t.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let o=e;if(this.options.extensions?.startBlock){let a=1/0,c=e.slice(1),f;this.options.extensions.startBlock.forEach(y=>{f=y.call({lexer:this},c),typeof f=="number"&&f>=0&&(a=Math.min(a,f))}),a<1/0&&a>=0&&(o=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(o))){let a=t.at(-1);n&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(i),n=o.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=t.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(i);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,i=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)c.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,i.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let o=!1,a="";for(;e;){o||(a=""),o=!1;let c;if(this.options.extensions?.inline?.some(y=>(c=y.call({lexer:this},e,t))?(e=e.substring(c.raw.length),t.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let y=t.at(-1);c.type==="text"&&y?.type==="text"?(y.raw+=c.raw,y.text+=c.text):t.push(c);continue}if(c=this.tokenizer.emStrong(e,n,a)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),t.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),t.push(c);continue}let f=e;if(this.options.extensions?.startInline){let y=1/0,T=e.slice(1),w;this.options.extensions.startInline.forEach(x=>{w=x.call({lexer:this},T),typeof w=="number"&&w>=0&&(y=Math.min(y,w))}),y<1/0&&y>=0&&(f=e.substring(0,y+1))}if(c=this.tokenizer.inlineText(f)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(a=c.raw.slice(-1)),o=!0;let y=t.at(-1);y?.type==="text"?(y.raw+=c.raw,y.text+=c.text):t.push(c);continue}if(e){let y="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return t}},hi=class{options;parser;constructor(r){this.options=r||Jr}space(r){return""}code({text:r,lang:e,escaped:t}){let n=(e||"").match(zt.notSpaceStart)?.[0],i=r.replace(zt.endingNewline,"")+`
`;return n?'<pre><code class="language-'+pr(n)+'">'+(t?i:pr(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:pr(i,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){let e=r.ordered,t=r.start,n="";for(let a=0;a<r.items.length;a++){let c=r.items[a];n+=this.listitem(c)}let i=e?"ol":"ul",o=e&&t!==1?' start="'+t+'"':"";return"<"+i+o+`>
`+n+"</"+i+`>
`}listitem(r){let e="";if(r.task){let t=this.checkbox({checked:!!r.checked});r.loose?r.tokens[0]?.type==="paragraph"?(r.tokens[0].text=t+" "+r.tokens[0].text,r.tokens[0].tokens&&r.tokens[0].tokens.length>0&&r.tokens[0].tokens[0].type==="text"&&(r.tokens[0].tokens[0].text=t+" "+pr(r.tokens[0].tokens[0].text),r.tokens[0].tokens[0].escaped=!0)):r.tokens.unshift({type:"text",raw:t+" ",text:t+" ",escaped:!0}):e+=t+" "}return e+=this.parser.parse(r.tokens,!!r.loose),`<li>${e}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",t="";for(let i=0;i<r.header.length;i++)t+=this.tablecell(r.header[i]);e+=this.tablerow({text:t});let n="";for(let i=0;i<r.rows.length;i++){let o=r.rows[i];t="";for(let a=0;a<o.length;a++)t+=this.tablecell(o[a]);n+=this.tablerow({text:t})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let e=this.parser.parseInline(r.tokens),t=r.header?"th":"td";return(r.align?`<${t} align="${r.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${pr(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:t}){let n=this.parser.parseInline(t),i=Ds(r);if(i===null)return n;r=i;let o='<a href="'+r+'"';return e&&(o+=' title="'+pr(e)+'"'),o+=">"+n+"</a>",o}image({href:r,title:e,text:t,tokens:n}){n&&(t=this.parser.parseInline(n,this.parser.textRenderer));let i=Ds(r);if(i===null)return pr(t);r=i;let o=`<img src="${r}" alt="${t}"`;return e&&(o+=` title="${pr(e)}"`),o+=">",o}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:pr(r.text)}},cs=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}},ar=class Gi{options;renderer;textRenderer;constructor(e){this.options=e||Jr,this.options.renderer=this.options.renderer||new hi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new cs}static parse(e,t){return new Gi(t).parse(e)}static parseInline(e,t){return new Gi(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){let o=e[i];if(this.options.extensions?.renderers?.[o.type]){let c=o,f=this.options.extensions.renderers[c.type].call({parser:this},c);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(c.type)){n+=f||"";continue}}let a=o;switch(a.type){case"space":{n+=this.renderer.space(a);continue}case"hr":{n+=this.renderer.hr(a);continue}case"heading":{n+=this.renderer.heading(a);continue}case"code":{n+=this.renderer.code(a);continue}case"table":{n+=this.renderer.table(a);continue}case"blockquote":{n+=this.renderer.blockquote(a);continue}case"list":{n+=this.renderer.list(a);continue}case"html":{n+=this.renderer.html(a);continue}case"def":{n+=this.renderer.def(a);continue}case"paragraph":{n+=this.renderer.paragraph(a);continue}case"text":{let c=a,f=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],f+=`
`+this.renderer.text(c);t?n+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):n+=f;continue}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}parseInline(e,t=this.renderer){let n="";for(let i=0;i<e.length;i++){let o=e[i];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=c||"";continue}}let a=o;switch(a.type){case"escape":{n+=t.text(a);break}case"html":{n+=t.html(a);break}case"link":{n+=t.link(a);break}case"image":{n+=t.image(a);break}case"strong":{n+=t.strong(a);break}case"em":{n+=t.em(a);break}case"codespan":{n+=t.codespan(a);break}case"br":{n+=t.br(a);break}case"del":{n+=t.del(a);break}case"text":{n+=t.text(a);break}default:{let c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}},$n=class{options;block;constructor(r){this.options=r||Jr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(){return this.block?sr.lex:sr.lexInline}provideParser(){return this.block?ar.parse:ar.parseInline}},sc=class{defaults=ts();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ar;Renderer=hi;TextRenderer=cs;Lexer=sr;Tokenizer=di;Hooks=$n;constructor(...r){this.use(...r)}walkTokens(r,e){let t=[];for(let n of r)switch(t=t.concat(e.call(this,n)),n.type){case"table":{let i=n;for(let o of i.header)t=t.concat(this.walkTokens(o.tokens,e));for(let o of i.rows)for(let a of o)t=t.concat(this.walkTokens(a.tokens,e));break}case"list":{let i=n;t=t.concat(this.walkTokens(i.items,e));break}default:{let i=n;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let a=i[o].flat(1/0);t=t.concat(this.walkTokens(a,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...r){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(t=>{let n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=e.renderers[i.name];o?e.renderers[i.name]=function(...a){let c=i.renderer.apply(this,a);return c===!1&&(c=o.apply(this,a)),c}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=e[i.level];o?o.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),t.renderer){let i=this.defaults.renderer||new hi(this.defaults);for(let o in t.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let a=o,c=t.renderer[a],f=i[a];i[a]=(...y)=>{let T=c.apply(i,y);return T===!1&&(T=f.apply(i,y)),T||""}}n.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new di(this.defaults);for(let o in t.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let a=o,c=t.tokenizer[a],f=i[a];i[a]=(...y)=>{let T=c.apply(i,y);return T===!1&&(T=f.apply(i,y)),T}}n.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new $n;for(let o in t.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let a=o,c=t.hooks[a],f=i[a];$n.passThroughHooks.has(o)?i[a]=y=>{if(this.defaults.async&&$n.passThroughHooksRespectAsync.has(o))return(async()=>{let w=await c.call(i,y);return f.call(i,w)})();let T=c.call(i,y);return f.call(i,T)}:i[a]=(...y)=>{if(this.defaults.async)return(async()=>{let w=await c.apply(i,y);return w===!1&&(w=await f.apply(i,y)),w})();let T=c.apply(i,y);return T===!1&&(T=f.apply(i,y)),T}}n.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,o=t.walkTokens;n.walkTokens=function(a){let c=[];return c.push(o.call(this,a)),i&&(c=c.concat(i.call(this,a))),c}}this.defaults={...this.defaults,...n}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return sr.lex(r,e??this.defaults)}parser(r,e){return ar.parse(r,e??this.defaults)}parseMarkdown(r){return(e,t)=>{let n={...t},i={...this.defaults,...n},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=r),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(e):e,c=await(i.hooks?await i.hooks.provideLexer():r?sr.lex:sr.lexInline)(a,i),f=i.hooks?await i.hooks.processAllTokens(c):c;i.walkTokens&&await Promise.all(this.walkTokens(f,i.walkTokens));let y=await(i.hooks?await i.hooks.provideParser():r?ar.parse:ar.parseInline)(f,i);return i.hooks?await i.hooks.postprocess(y):y})().catch(o);try{i.hooks&&(e=i.hooks.preprocess(e));let a=(i.hooks?i.hooks.provideLexer():r?sr.lex:sr.lexInline)(e,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let c=(i.hooks?i.hooks.provideParser():r?ar.parse:ar.parseInline)(a,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(a){return o(a)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let n="<p>An error occurred:</p><pre>"+pr(t.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(t);throw t}}},Vr=new sc;function Je(r,e){return Vr.parse(r,e)}Je.options=Je.setOptions=function(r){return Vr.setOptions(r),Je.defaults=Vr.defaults,Sa(Je.defaults),Je};Je.getDefaults=ts;Je.defaults=Jr;Je.use=function(...r){return Vr.use(...r),Je.defaults=Vr.defaults,Sa(Je.defaults),Je};Je.walkTokens=function(r,e){return Vr.walkTokens(r,e)};Je.parseInline=Vr.parseInline;Je.Parser=ar;Je.parser=ar.parse;Je.Renderer=hi;Je.TextRenderer=cs;Je.Lexer=sr;Je.lexer=sr.lex;Je.Tokenizer=di;Je.Hooks=$n;Je.parse=Je;Je.options;Je.setOptions;Je.use;Je.walkTokens;Je.parseInline;ar.parse;sr.lex;let On=null;function us(){return On||(On=document.createElement("div"),On.id="global-dialog-container",document.body.appendChild(On)),On}function ps(r){return new Promise(e=>{const t=us(),n=()=>{Tr(j``,t)},i=()=>{n(),e(r.confirmValue)},o=()=>{n(),e(r.cancelValue)},a=j`
            <wa-dialog label="${r.title}" open @wa-request-close=${o}>
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
                    ${r.renderContent({onConfirm:i,onCancel:o})}
                </div>
            </wa-dialog>
        `;Tr(a,t),r.onAfterRender&&requestAnimationFrame(r.onAfterRender)})}function Si(r,e=!1){if(e){const t=Je.parse(r,{async:!1});return j`<div class="dialog-message markdown-content" style="white-space: normal;">${Bn(t)}</div>`}return j`<div class="dialog-message" style="white-space: pre-line;">${r}</div>`}const Gn=async(r,e="",t=!1)=>{let n=e;return ps({title:"Input",message:r,markdown:t,confirmValue:n,cancelValue:null,renderContent:({onConfirm:i,onCancel:o})=>{const a=f=>{n=f.target.value},c=f=>{f.key==="Enter"?(f.preventDefault(),i()):f.key==="Escape"&&(f.preventDefault(),o())};return j`
                ${Si(r,t)}
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
            `},onAfterRender:()=>{const o=us().querySelector("wa-input");if(o){const a=o.shadowRoot?.querySelector("input");a&&(a.focus(),a.select())}}}).then(()=>n)},vn=async(r,e=!1)=>ps({title:"Confirm",message:r,markdown:e,confirmValue:!0,cancelValue:!1,renderContent:({onConfirm:t,onCancel:n})=>j`
            ${Si(r,e)}
            
            <div class="dialog-actions">
                <wa-button variant="default" @click=${n}>
                    Cancel
                </wa-button>
                <wa-button variant="primary" @click=${t}>
                    OK
                </wa-button>
            </div>
        `}),ac=async(r,e,t=!1)=>{await ps({title:r,message:e,markdown:t,confirmValue:void 0,cancelValue:void 0,renderContent:({onConfirm:n})=>j`
            ${Si(e,t)}
            
            <div class="dialog-actions">
                <wa-button variant="primary" @click=${n}>
                    OK
                </wa-button>
            </div>
        `})},oc=async(r,e,t,n=!1)=>new Promise(i=>{const o=us();let a=!0;const c=()=>{a&&(a=!1,Tr(j``,o),i())},f=(y,T,w)=>{if(!a)return;const x=j`
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
                            ${Si(T,n)}
                        </wa-scroller>
                        
                        <div class="dialog-actions">
                            <div class="dialog-actions-left">
                                ${w.filter(I=>I.label!=="Close").map(I=>j`
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
                                ${w.filter(I=>I.label==="Close").map(I=>j`
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
            `;Tr(x,o)};t.updateDialog=f,f(r,e,t)});br.put("promptDialog",Gn);br.put("confirmDialog",vn);br.put("infoDialog",ac);br.put("navigableInfoDialog",oc);var ai={exports:{}};var lc=ai.exports,Fs;function cc(){return Fs||(Fs=1,(function(r){(function(e,t){r.exports?r.exports=t():e.Toastify=t()})(lc,function(e){var t=function(a){return new t.lib.init(a)},n="1.12.0";t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},t.lib=t.prototype={toastify:n,constructor:t,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||t.defaults.text,this.options.node=a.node||t.defaults.node,this.options.duration=a.duration===0?0:a.duration||t.defaults.duration,this.options.selector=a.selector||t.defaults.selector,this.options.callback=a.callback||t.defaults.callback,this.options.destination=a.destination||t.defaults.destination,this.options.newWindow=a.newWindow||t.defaults.newWindow,this.options.close=a.close||t.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=a.positionLeft||t.defaults.positionLeft,this.options.position=a.position||t.defaults.position,this.options.backgroundColor=a.backgroundColor||t.defaults.backgroundColor,this.options.avatar=a.avatar||t.defaults.avatar,this.options.className=a.className||t.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?t.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||t.defaults.onClick,this.options.offset=a.offset||t.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:t.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||t.defaults.ariaLive,this.options.style=a.style||t.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var c in this.options.style)a.style[c]=this.options.style[c];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var f=document.createElement("img");f.src=this.options.avatar,f.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(f):a.insertAdjacentElement("afterbegin",f)}if(this.options.close===!0){var y=document.createElement("button");y.type="button",y.setAttribute("aria-label","Close"),y.className="toast-close",y.innerHTML="&#10006;",y.addEventListener("click",(function(de){de.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var T=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&T>360?a.insertAdjacentElement("afterbegin",y):a.appendChild(y)}if(this.options.stopOnFocus&&this.options.duration>0){var w=this;a.addEventListener("mouseover",function(de){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){w.removeElement(a)},w.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(de){de.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(de){de.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var x=i("x",this.options),I=i("y",this.options),z=this.options.position=="left"?x:"-"+x,B=this.options.gravity=="toastify-top"?I:"-"+I;a.style.transform="translate("+z+","+B+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var c=t.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,c),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),t.reposition()}).bind(this),400)}},t.reposition=function(){for(var a={top:15,bottom:15},c={top:15,bottom:15},f={top:15,bottom:15},y=document.getElementsByClassName("toastify"),T,w=0;w<y.length;w++){o(y[w],"toastify-top")===!0?T="toastify-top":T="toastify-bottom";var x=y[w].offsetHeight;T=T.substr(9,T.length-1);var I=15,z=window.innerWidth>0?window.innerWidth:screen.width;z<=360?(y[w].style[T]=f[T]+"px",f[T]+=x+I):o(y[w],"toastify-left")===!0?(y[w].style[T]=a[T]+"px",a[T]+=x+I):(y[w].style[T]=c[T]+"px",c[T]+=x+I)}return this};function i(a,c){return c.offset[a]?isNaN(c.offset[a])?c.offset[a]:c.offset[a]+"px":"0px"}function o(a,c){return!a||typeof c!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(c)>-1)}return t.lib.init.prototype=t.lib,t})})(ai)),ai.exports}var uc=cc();const ds=oa(uc),Gt=r=>{console.info("[TOAST] INFO: ",r),ds({text:r,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0}).showToast()},je=r=>{console.error("[TOAST] ERROR: ",r),ds({text:r,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"coral"}}).showToast()},pc=r=>{console.warn("[TOAST] WARNING: ",r),ds({text:r,duration:3e3,close:!0,gravity:"bottom",stopOnFocus:!0,style:{background:"orange"}}).showToast()};br.put("toastInfo",Gt);br.put("toastError",je);br.put("toastWarning",pc);const Da=(r,e)=>{const t=new vr.subtle.Watcher(async()=>{try{await 0,e(r.get())}finally{t.watch()}});t.watch(r)},hs=r=>function(e,t,n){const i=n.value;return i.signal=r,n};Object.defineProperty(la.prototype,"model",{enumerable:!0,configurable:!0,writable:!0});class yn extends la{connectedCallback(){const e=Object.getPrototypeOf(this);Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t];if(n instanceof Function){const i=n;i.name.startsWith("on")&&"topic"in i&&this.subscribe(i.topic,i)}}),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t];if(n instanceof Function){const i=n;i.name.startsWith("on")&&"signal"in i&&this.watch(i.signal,i)}}),super.connectedCallback(),this.doBeforeUI()}subscribe(e,t){Wt(e,t.bind(this))}showInfo(e){Gt(e)}showError(e){je(e)}nobubble(e){return t=>{t.stopPropagation(),e.bind(this)(t)}}command(e,t={}){return()=>{this.executeCommand(e,t)}}executeCommand(e,t){const n=Le.createExecutionContext(t);Le.execute(e,n)}watch(e,t){Da(e,t.bind(this))}firstUpdated(e){super.firstUpdated(e),this.doInitUI()}updateIdle(){requestIdleCallback(()=>this.requestUpdate())}updateLater(){requestAnimationFrame(()=>this.requestUpdate())}doBeforeUI(){}doInitUI(){}withRefresh(e){e(),this.updateLater()}}function fs(r){return new Promise((e,t)=>{r.oncomplete=r.onsuccess=()=>e(r.result),r.onabort=r.onerror=()=>t(r.error)})}function dc(r,e){let t;const n=()=>{if(t)return t;const i=indexedDB.open(r);return i.onupgradeneeded=()=>i.result.createObjectStore(e),t=fs(i),t.then(o=>{o.onclose=()=>t=void 0},()=>{}),t};return(i,o)=>n().then(a=>o(a.transaction(e,i).objectStore(e)))}let Ni;function Na(){return Ni||(Ni=dc("keyval-store","keyval")),Ni}function hc(r,e=Na()){return e("readonly",t=>fs(t.get(r)))}function fc(r,e,t=Na()){return t("readwrite",n=>(n.put(e,r),fs(n.transaction)))}class mc{async persistObject(e,t){return fc(e,t)}async getObject(e){return hc(e)}}const dr=new mc;qt.put("persistenceService",dr);const nn=".geospace/settings.json",oi="dialogSettings",Br="events/settings/changed";class gc{async checkSettings(){this.appSettings||(this.appSettings=await dr.getObject(nn),this.appSettings||(this.appSettings={},await dr.persistObject(nn,this.appSettings)),We(Br,this.appSettings))}async get(e){return await this.checkSettings(),this.appSettings[e]}async set(e,t){await this.checkSettings(),this.appSettings[e]=t,await dr.persistObject(nn,this.appSettings),We(Br,this.appSettings)}async getAll(){return await this.checkSettings(),this.appSettings}async setAll(e){this.appSettings=e,await dr.persistObject(nn,this.appSettings),We(Br,this.appSettings)}async getDialogSetting(e){return await this.checkSettings(),(this.appSettings[oi]||{})[e]}async setDialogSetting(e,t){await this.checkSettings();const n=this.appSettings[oi]||{};n[e]=t,this.appSettings[oi]=n,await dr.persistObject(nn,this.appSettings),We(Br,this.appSettings)}}const mt=new gc;qt.put("appSettings",mt);const Np=Object.freeze(Object.defineProperty({__proto__:null,DIALOG_SETTINGS_KEY:oi,SETTINGS_FILE_PATH:nn,TOPIC_SETTINGS_CHANGED:Br,appSettings:mt},Symbol.toStringTag,{value:"Module"}));class Zr extends yn{constructor(){super(...arguments),this.settingsKey=null}buildDOMTreePath(){const e=[];let t=this;for(;t&&t!==document.body&&t!==document.documentElement;){const n=t.getAttribute("id");if(n){e.unshift(`#${n}`);break}const i=t.tagName.toLowerCase(),o=t.parentElement;if(!o)break;const c=Array.from(o.children).filter(f=>f.tagName.toLowerCase()===i).indexOf(t);c>=0?e.unshift(`${i}:${c}`):e.unshift(i),t=o}return e.length>0?e.join(" > "):null}initializeSettingsKey(){if(!this.settingsKey){const e=this.tagName.toLowerCase(),t=this.getAttribute("id");if(t){this.settingsKey=`${e}:${t}`;return}const n=this.buildDOMTreePath();n&&(this.settingsKey=`${e}:${n}`)}}async getDialogSetting(){if(this.initializeSettingsKey(),!!this.settingsKey)return await mt.getDialogSetting(this.settingsKey)}async setDialogSetting(e){this.initializeSettingsKey(),this.settingsKey&&await mt.setDialogSetting(this.settingsKey,e)}}var vc=Object.getOwnPropertyDescriptor,yc=(r,e,t,n)=>{for(var i=n>1?void 0:n?vc(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=a(i)||i);return i};let Hi=class extends Zr{render(){return j`
            <slot></slot>
        `}};Hi.styles=Mt`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
        }
    `;Hi=yc([yt("k-app")],Hi);var bc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,bn=(r,e,t,n)=>{for(var i=n>1?void 0:n?wc(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&bc(e,t,i),i};let Rr=class extends xi(Zr){constructor(){super(...arguments),this.position="start",this.isEditor=!1,this.partToolbarContent=void 0,this.partToolbarRenderer=void 0,this.contributions=[]}doBeforeUI(){const r=this.getAttribute("id");r&&this.loadContributions(r),Wt(Yr,e=>{if(!r)return;this.matchesTarget(r,e.target)&&(this.loadContributions(r),this.requestUpdate())})}matchesTarget(r,e){if(e===r)return!0;if(!r.includes(":"))return!1;const[t]=r.split(":");if(e===`${t}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&r.startsWith(`${t}:`)}return!1}loadContributions(r){const e=Ye.getContributions(r);if(!r.includes(":")){this.contributions=e;return}const[t]=r.split(":"),n=`${t}:*`,i=Ye.getContributions(n),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const c of a){const f=`${t}:${c}`,y=Ye.getContributions(f);o.push(...y)}}this.contributions=[...i,...o,...e]}contributionCreator(r){if("command"in r){const e=r,t=!!e.showLabel;return j`
                <wa-button @click=${()=>this.executeCommand(e.command,e.params||{})}
                           title=${e.label}
                           ?disabled="${e.disabled?.get()}"
                           appearance="plain" size="small">
                    <wa-icon name=${e.icon} label="${e.label}"></wa-icon>
                    ${t?e.label:""}
                </wa-button>
            `}else if("html"in r){const e=r.html;return e instanceof Function?e():Bn(e)}else return j`<span>unknown contribution type: ${typeof r}</span>`}render(){const r=this.partToolbarRenderer?this.partToolbarRenderer():this.partToolbarContent?this.partToolbarContent:"";return j`
            <div class="toolbar-items" style=${Eo({"justify-content":this.position})}>
                <slot name="start">
                    ${this.contributions.filter(e=>e.slot==="start").map(this.contributionCreator.bind(this))}
                </slot>
                ${r}
                ${this.contributions.filter(e=>e.slot===void 0).map(this.contributionCreator.bind(this))}
                <slot>
                </slot>
                <slot name="end">
                    ${this.contributions.filter(e=>e.slot==="end").map(this.contributionCreator.bind(this))}
                </slot>
            </div>
        `}};Rr.styles=Mt`
        :host {
            display: flex;
            flex-direction: row;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `;bn([Te()],Rr.prototype,"position",2);bn([Te({type:Boolean,attribute:"is-editor"})],Rr.prototype,"isEditor",2);bn([Te({attribute:!1})],Rr.prototype,"partToolbarContent",2);bn([Te({attribute:!1})],Rr.prototype,"partToolbarRenderer",2);bn([xt()],Rr.prototype,"contributions",2);Rr=bn([yt("k-toolbar")],Rr);var xc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,wn=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ic(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&xc(e,t,i),i};let Pr=class extends xi(Zr){constructor(){super(...arguments),this.isEditor=!1,this.partContextMenuRenderer=void 0,this.contributions=[],this.isOpen=!1,this.position={x:0,y:0},this.anchorRef=mr(),this.dropdownRef=mr()}doBeforeUI(){const r=this.getAttribute("id");r&&this.loadContributions(r),Wt(Yr,e=>{if(!r)return;this.matchesTarget(r,e.target)&&(this.loadContributions(r),this.requestUpdate())})}matchesTarget(r,e){if(e===r)return!0;if(!r.includes(":"))return!1;const[t]=r.split(":");if(e===`${t}:*`)return!0;const n=e.split(":");if(n.length===2){const i=n[1];if(i==="system.editors"||i===".system.editors")return this.isEditor&&r.startsWith(`${t}:`)}return!1}loadContributions(r){const e=Ye.getContributions(r);if(!r.includes(":")){this.contributions=e;return}const[t]=r.split(":"),n=`${t}:*`,i=Ye.getContributions(n),o=[];if(this.isEditor){const a=["system.editors",".system.editors"];for(const c of a){const f=`${t}:${c}`,y=Ye.getContributions(f);o.push(...y)}}this.contributions=[...i,...o,...e]}show(r){this.position=r,this.isOpen=!0}onClose(){this.isOpen=!1}handleCommandClick(r,e){return async()=>{this.executeCommand(r,e||{})}}renderContribution(r){if("command"in r){const e=r;return j`
                <wa-dropdown-item 
                    @click=${this.handleCommandClick(e.command,e.params)}
                    ?disabled="${e.disabled?.get()}">
                    ${e.icon?j`<wa-icon slot="icon" name=${e.icon}></wa-icon>`:""}
                    ${e.label}
                </wa-dropdown-item>
            `}else if("html"in r){const e=r.html;return e instanceof Function?e():Bn(e)}return vt}render(){if(!this.isOpen)return vt;const r=this.partContextMenuRenderer?this.partContextMenuRenderer():vt;return j`
            <wa-dropdown 
                ${gr(this.dropdownRef)}
                ?open=${this.isOpen}
                @wa-after-hide=${this.onClose}
                placement="bottom-start"
                distance="0">
                
                <div 
                    slot="trigger"
                    ${gr(this.anchorRef)}
                    style="position: fixed; 
                           left: ${this.position.x}px; 
                           top: ${this.position.y}px; 
                           width: 1px; 
                           height: 1px; 
                           pointer-events: none;">
                </div>
                
                ${r}
                ${this.contributions.map(e=>this.renderContribution(e))}
            </wa-dropdown>
        `}};Pr.styles=Mt`
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
    `;wn([Te({type:Boolean,attribute:"is-editor"})],Pr.prototype,"isEditor",2);wn([Te({attribute:!1})],Pr.prototype,"partContextMenuRenderer",2);wn([xt()],Pr.prototype,"contributions",2);wn([xt()],Pr.prototype,"isOpen",2);wn([xt()],Pr.prototype,"position",2);Pr=wn([yt("k-contextmenu")],Pr);class ms extends Zr{}const zs=(r,e,t)=>{const n=new Map;for(let i=e;i<=t;i++)n.set(r[i],i);return n},kc=ca(class extends ua{constructor(r){if(super(r),r.type!==_o.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const i=[],o=[];let a=0;for(const c of r)i[a]=n?n(c,a):a,o[a]=t(c,a),a++;return{values:o,keys:i}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,n]){const i=Oo(r),{values:o,keys:a}=this.dt(e,t,n);if(!Array.isArray(i))return this.ut=a,o;const c=this.ut??=[],f=[];let y,T,w=0,x=i.length-1,I=0,z=o.length-1;for(;w<=x&&I<=z;)if(i[w]===null)w++;else if(i[x]===null)x--;else if(c[w]===a[I])f[I]=jr(i[w],o[I]),w++,I++;else if(c[x]===a[z])f[z]=jr(i[x],o[z]),x--,z--;else if(c[w]===a[z])f[z]=jr(i[w],o[z]),Cn(r,f[z+1],i[w]),w++,z--;else if(c[x]===a[I])f[I]=jr(i[x],o[I]),Cn(r,i[w],i[x]),x--,I++;else if(y===void 0&&(y=zs(a,I,z),T=zs(c,w,x)),y.has(c[w]))if(y.has(c[x])){const B=T.get(a[I]),de=B!==void 0?i[B]:null;if(de===null){const ve=Cn(r,i[w]);jr(ve,o[I]),f[I]=ve}else f[I]=jr(de,o[I]),Cn(r,i[w],de),i[B]=null;I++}else Ri(i[x]),x--;else Ri(i[w]),w++;for(;I<=z;){const B=Cn(r,f[z+1]);jr(B,o[I]),f[I++]=B}for(;w<=x;){const B=i[w++];B!==null&&Ri(B)}return this.ut=a,pa(r,f),To}}),Sc="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2879L21.0615%2023.9237C21.2231%2024.4313%2022.2462%2025.6368%2023.5385%2025.6368C24.8308%2025.6368%2025.4308%2024.931%2025.4308%2024.463C25.4308%2023.1878%2024.1112%2022.7382%2023.4774%2022.5223C23.374%2022.4871%2023.289%2022.4581%2023.2308%2022.4328C23.2009%2022.4198%2023.1558%2022.4025%2023.0979%2022.3804C22.393%2022.1111%2019.7923%2021.1175%2019.7923%2018.2373C19.7923%2015.065%2022.8538%2014.7002%2023.5462%2014.7002C23.9991%2014.7002%2026.1769%2014.7557%2027.2615%2016.7939L25.2615%2018.1898C24.8231%2017.3015%2024.0946%2017.0081%2023.6462%2017.0081C22.5385%2017.0081%2022.3077%2017.8201%2022.3077%2018.1898C22.3077%2019.227%2023.5112%2019.6919%2024.5273%2020.0844C24.7932%2020.1871%2025.0462%2020.2848%2025.2615%2020.3866C26.3692%2020.91%2028%2021.7666%2028%2024.463C28%2025.8136%2026.8672%2028.0002%2024.0154%2028.0002C20.1846%2028.0002%2019.1692%2025.7003%2019%2025.2879Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5587L11.1487%2024.1953C11.317%2024.7026%2011.9713%2025.638%2012.9205%2025.638C13.8698%2025.638%2014.3557%2024.663%2014.3557%2024.1953V15.0002H16.9982V24.1953C17.041%2025.4636%2016.3376%2028.0002%2013.2332%2028.0002C10.379%2028.0002%209.19242%2026.3039%209%2025.5587Z'%20fill='%233E3E3E'/%3e%3c/svg%3e",Cc="/assets/jupyter-C78Cpfql.svg",Ac="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0164%202C10.8193%202%209.03825%203.72453%209.03825%205.85185V8.51852H15.9235V9.25926H5.97814C3.78107%209.25926%202%2010.9838%202%2013.1111L2%2018.8889C2%2021.0162%203.78107%2022.7407%205.97814%2022.7407H8.27322V19.4815C8.27322%2017.3542%2010.0543%2015.6296%2012.2514%2015.6296H19.5956C21.4547%2015.6296%2022.9617%2014.1704%2022.9617%2012.3704V5.85185C22.9617%203.72453%2021.1807%202%2018.9836%202H13.0164ZM12.0984%206.74074C12.8589%206.74074%2013.4754%206.14378%2013.4754%205.40741C13.4754%204.67103%2012.8589%204.07407%2012.0984%204.07407C11.3378%204.07407%2010.7213%204.67103%2010.7213%205.40741C10.7213%206.14378%2011.3378%206.74074%2012.0984%206.74074Z'%20fill='url(%23paint0_linear_87_8204)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9834%2030C21.1805%2030%2022.9616%2028.2755%2022.9616%2026.1482V23.4815L16.0763%2023.4815L16.0763%2022.7408L26.0217%2022.7408C28.2188%2022.7408%2029.9998%2021.0162%2029.9998%2018.8889V13.1111C29.9998%2010.9838%2028.2188%209.25928%2026.0217%209.25928L23.7266%209.25928V12.5185C23.7266%2014.6459%2021.9455%2016.3704%2019.7485%2016.3704L12.4042%2016.3704C10.5451%2016.3704%209.03809%2017.8296%209.03809%2019.6296L9.03809%2026.1482C9.03809%2028.2755%2010.8192%2030%2013.0162%2030H18.9834ZM19.9015%2025.2593C19.1409%2025.2593%2018.5244%2025.8562%2018.5244%2026.5926C18.5244%2027.329%2019.1409%2027.9259%2019.9015%2027.9259C20.662%2027.9259%2021.2785%2027.329%2021.2785%2026.5926C21.2785%2025.8562%2020.662%2025.2593%2019.9015%2025.2593Z'%20fill='url(%23paint1_linear_87_8204)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_87_8204'%20x1='12.4809'%20y1='2'%20x2='12.4809'%20y2='22.7407'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23327EBD'/%3e%3cstop%20offset='1'%20stop-color='%231565A7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_87_8204'%20x1='19.519'%20y1='9.25928'%20x2='19.519'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFDA4B'/%3e%3cstop%20offset='1'%20stop-color='%23F9C600'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";Ro("k",{resolver:r=>new URL(Object.assign({"../icons/js.svg":Sc,"../icons/jupyter.svg":Cc,"../icons/python.svg":Ac})[`../icons/${r}.svg`],import.meta.url).href,mutator:r=>{r.setAttribute("fill","currentColor"),r.setAttribute("stroke","currentColor")}});var Ec=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,Hn=(r,e,t,n)=>{for(var i=n>1?void 0:n?_c(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Ec(e,t,i),i};let Gr=class extends yn{constructor(){super(...arguments),this.family="regular"}render(){if(!this.name)return"";const r=this.name.trim().split(/ +/),e=r.pop(),t=r.pop();return j`
            <wa-icon library="${t||vt}" variant="${this.variant||vt}"
                         family="${this.family||vt}" name=${e} label="${this.label||this.name||vt}"></wa-icon>`}};Gr.styles=Mt`
        :host {
            display: contents;
        }
    `;Hn([Te()],Gr.prototype,"name",2);Hn([Te()],Gr.prototype,"family",2);Hn([Te()],Gr.prototype,"variant",2);Hn([Te()],Gr.prototype,"label",2);Gr=Hn([yt("k-icon")],Gr);var Oc=Object.defineProperty,Tc=(r,e,t,n)=>{for(var i=void 0,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=a(e,t,i)||i);return i&&Oc(e,t,i),i};class Nt extends ms{constructor(){super(...arguments),this.dirty=!1,this.isEditor=!1}getCommandStack(){return this.commandStack}renderToolbar(){return vt}updateToolbar(){this.dispatchEvent(new CustomEvent("part-toolbar-changed",{bubbles:!0,composed:!0}))}renderContextMenu(){return vt}updateContextMenu(){this.dispatchEvent(new CustomEvent("part-contextmenu-changed",{bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("dirty")&&e.get("dirty")!==void 0&&this.dispatchEvent(new CustomEvent("dirty",{detail:this.dirty,bubbles:!0}))}doClose(){}disconnectedCallback(){super.disconnectedCallback()}close(){this.doClose()}connectedCallback(){super.connectedCallback()}save(){}isDirty(){return this.dirty}markDirty(e){this.dirty=e,Wi.set(null),Wi.set(this),Ze.set(null),Ze.set(this)}}Tc([Te()],Nt.prototype,"dirty");const Ma="app-toolbars-main",xn="app-toolbars-main-right",Rc="app-toolbars-main-center",Fa="app-toolbars-bottom",gs="app-toolbars-bottom-center",Ki="app-toolbars-bottom-end",an="editor-area-main",za="sidebar-main",qa="sidebar-main-bottom",Ua="sidebar-auxiliary",Mp="panel-bottom",Pc=!1;var ja=(r=>(r[r.LEFT=0]="LEFT",r[r.MIDDLE=1]="MIDDLE",r[r.RIGHT=2]="RIGHT",r[r.BACK=3]="BACK",r[r.FORWARD=4]="FORWARD",r))(ja||{});class Lc{constructor(){this.tasks=[],this.updateCounter=0}notifyUpdate(){this.updateCounter++,ba.set(this.updateCounter)}run(e,t){const n=this.createProgressMonitor(e);try{this.tasks.push(n),this.notifyUpdate(),t(n)}finally{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()}}async runAsync(e,t){const n=this.createProgressMonitor(e);return this.tasks.push(n),this.notifyUpdate(),t(n).finally(()=>{this.tasks.splice(this.tasks.indexOf(n),1),this.notifyUpdate()})}createProgressMonitor(e){const t={name:e,message:"",currentStep:0,totalSteps:-1,progress:-1};return new Proxy(t,{set:(n,i,o)=>(n[i]=o,this.notifyUpdate(),!0)})}getActiveTasks(){return this.tasks}}const fi=new Lc;qt.put("taskService",fi);const Dn="events/extensionsregistry/extensionsConfigChanged",Tn="extensions",qs="extensions.external";class $c{constructor(){this.extensions={},this.loadedExtensions=new Set,this.loadingPromises=new Map,Wt(Br,()=>{this.extensionsSettings=void 0,this.checkExtensionsConfig().then()}),this.loadPersistedExternalExtensions().then(()=>{this.checkExtensionsConfig().then(async()=>{const e=this.extensionsSettings?.filter(t=>this.isEnabled(t.id)).map(t=>this.load(t.id).catch(n=>{je("Extension could not be loaded: "+n.message)}))||[];await Promise.all(e)})})}async loadPersistedExternalExtensions(){try{const e=await mt.get(qs);e&&Array.isArray(e)&&(e.forEach(t=>{this.extensions[t.id]=t}),Ke.debug(`Loaded ${e.length} persisted external extensions`))}catch(e){Ke.error(`Failed to load persisted external extensions: ${e}`)}}async savePersistedExternalExtensions(){try{const e=Object.values(this.extensions).filter(t=>t.external);await mt.set(qs,e)}catch(e){Ke.error(`Failed to save persisted external extensions: ${e}`)}}async checkExtensionsConfig(){this.extensionsSettings||(this.extensionsSettings=await mt.get(Tn),this.extensionsSettings||(await mt.set(Tn,[]),this.extensionsSettings=await mt.get(Tn)),We(Dn,this.extensionsSettings))}registerExtension(e){this.extensions[e.id]=e,e.external&&this.savePersistedExternalExtensions().catch(t=>{Ke.error(`Failed to persist external extension: ${t}`)}),We(Dn,this.extensionsSettings)}getExtensions(){return Object.values(this.extensions)}isEnabled(e){return this.checkExtensionsConfig(),!!this.extensionsSettings?.find(t=>t.id===e&&t.enabled)}isLoaded(e){return this.loadedExtensions.has(e)}enable(e,t=!1){this.isEnabled(e)||(Ke.debug(`Loading extension: ${e}`),this.load(e).then(()=>{this.updateEnablement(e,!0,t)}).catch(n=>{Ke.error(`Could not load extension: ${e}`)}))}async load(e,t=[]){if(this.loadedExtensions.has(e))return;const n=this.loadingPromises.get(e);if(n)return n;if(t.includes(e)){const a=[...t,e].join(" → ");throw new Error(`Circular dependency detected: ${a}`)}const i=this.extensions[e];if(!i)throw new Error("Extension not found: "+e);const o=(async()=>{try{if(i.dependencies&&i.dependencies.length>0){Ke.debug(`Loading dependencies for ${e}: ${i.dependencies.join(", ")}`);const c=[...t,e];for(const f of i.dependencies)await this.load(f,c),this.isEnabled(f)||(await this.updateEnablementAsync(f,!0,!1),Ke.debug(`Auto-enabled dependency: ${f}`))}const a=await fi.runAsync("Loading extension: "+i.name,()=>{if(i.loader)return i.loader();if(i.url)return import(i.url)});if(this.loadedExtensions.add(e),a?.default instanceof Function){Ke.debug(`Executing extension function for: ${e}`);try{a?.default(br.getProxy()),Ke.debug(`Extension function executed successfully: ${e}`)}catch(c){throw Ke.error(`Error executing extension function for ${e}: ${c}`),c}}else Ke.warn(`Extension ${e} does not export a default function`);Ke.debug(`Extension loaded: ${e}`)}catch(a){throw this.loadedExtensions.delete(e),a}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,o),o}disable(e,t=!1){this.isEnabled(e)&&this.updateEnablement(e,!1,t)}updateEnablement(e,t,n){this.checkExtensionsConfig().then(()=>{const i=this.extensionsSettings?.find(o=>o.id==e);i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),mt.set(Tn,this.extensionsSettings).then(()=>{if(n){const o=this.extensions[e];Gt(t?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}We(Dn,this.extensionsSettings)})})}async updateEnablementAsync(e,t,n){await this.checkExtensionsConfig();const i=this.extensionsSettings?.find(o=>o.id==e);if(i?i.enabled=t:this.extensionsSettings?.push({id:e,enabled:t}),await mt.set(Tn,this.extensionsSettings),n){const o=this.extensions[e];Gt(t?o.name+" enabled.":o.name+" disabled  - Please restart to take effect")}We(Dn,this.extensionsSettings)}}Ke.debug("ExtensionRegistry initializing...");const Pe=new $c;qt.put("extensionRegistry",Pe);Ke.debug("ExtensionRegistry initialized");const Me=Hr("AppLoader");function Rn(r){return r instanceof Error?r.message:String(r)}function Dc(r){try{const t=new URL(r).pathname.split("/").filter(Boolean);return t.length>0?t[t.length-1]:void 0}catch{const e=r.split("/").filter(Boolean);return e.length>0?e[e.length-1]:void 0}}function Nc(){const e=window.location.pathname.split("/").filter(Boolean);if(e.length===0)return;const t=e[0];if(!(!t||t==="index.html"||t.endsWith(".html")))return t}class Mc{constructor(){this.apps=new Map,this.started=!1,this.container=document.body}registerApp(e,t){this.apps.has(e.id)&&Me.warn(`App '${e.id}' is already registered. Overwriting.`),this.apps.set(e.id,e),Me.info(`Registered app: ${e.name} (${e.id}) v${e.version}`),t?.defaultAppId&&(this.defaultAppId=t.defaultAppId),t?.container&&(this.container=t.container),t?.autoStart&&!this.started&&this.start()}async loadExtensionFromUrl(e){Me.info(`Loading extension from URL: ${e}...`);try{const t=`url:${e}`;if(Pe.isEnabled(t)){Me.info(`Extension from URL ${e} is already enabled`);return}const n={id:t,name:`Extension from ${e}`,description:`Extension loaded from URL: ${e}`,url:e};Pe.registerExtension(n),Me.info(`Registered extension from URL: ${t}`),Pe.enable(t,!1),Me.info(`Successfully enabled extension from URL: ${e}`)}catch(t){throw Me.error(`Failed to load extension from URL ${e}: ${Rn(t)}`),t}}async loadAppFromUrl(e){Me.info(`Loading app from URL: ${e}...`);try{const t=await import(e);if(!t.default)throw new Error(`Module at ${e} does not have a default export`);const n=t.default;if(!n.id||!n.name||!n.version||!n.render)throw new Error(`Module at ${e} does not export a valid AppDefinition`);return Me.info(`Successfully loaded app definition from URL: ${n.name} (${n.id})`),n}catch(t){throw Me.error(`Failed to load app from URL ${e}: ${Rn(t)}`),t}}async start(){if(this.started){Me.debug("AppLoader already started");return}document.readyState==="loading"&&await new Promise(f=>{document.addEventListener("DOMContentLoaded",()=>f(),{once:!0})}),this.started=!0,Me.info("Starting AppLoader...");const e=new URLSearchParams(window.location.search),t=e.get("app"),n=e.get("appId"),i=Nc(),o=this.apps.size;let a;if(t&&(a=Dc(t),a&&Me.info(`Extracted app ID from URL path: ${a}`)),i&&Me.info(`Extracted app ID from current page path: ${i}`),t)try{Me.info(`URL parameter 'app' found: ${t}, attempting to load extension or app`);try{await this.loadExtensionFromUrl(t),Me.info(`Successfully loaded extension from URL: ${t}`)}catch(f){Me.info(`Failed to load as extension, trying as app definition: ${Rn(f)}`);try{const y=await this.loadAppFromUrl(t);this.registerApp(y),await this.loadApp(y.id,this.container),Me.info(`Successfully loaded app from URL: ${t}`);return}catch(y){throw Me.error(`Failed to load from URL as both extension and app: ${Rn(y)}`),y}}}catch(f){Me.error(`Failed to load from URL parameter, falling back to default app: ${Rn(f)}`)}const c=this.selectAppToLoad({appIdFromUrl:n,appIdFromPath:i,appIdFromAppUrl:a,appsBeforeExtension:o});if(!c)throw new Error("No apps registered");await this.loadApp(c,this.container)}async loadApp(e,t){const n=this.apps.get(e);if(!n)throw new Error(`App '${e}' not found. Make sure it's registered.`);Me.info(`Loading app: ${n.name}...`),this.currentApp&&(Me.info(`Disposing current app: ${this.currentApp.name}`),this.currentApp.dispose&&await this.currentApp.dispose(),this.currentApp.extensions&&(Me.info(`Disabling ${this.currentApp.extensions.length} extensions...`),this.currentApp.extensions.forEach(i=>{Pe.disable(i)}))),n.contributions&&(Me.info("Registering app contributions..."),n.contributions.ui&&(n.contributions.ui.forEach(i=>{const o=i.target;o&&Ye.registerContribution(o,i)}),Me.info(`Registered ${n.contributions.ui.length} UI contributions`)),n.contributions.extensions&&(n.contributions.extensions.forEach(i=>{Pe.registerExtension(i)}),Me.info(`Registered ${n.contributions.extensions.length} app extensions`))),n.extensions&&(Me.info(`Enabling ${n.extensions.length} extensions...`),n.extensions.forEach(i=>{Pe.enable(i)})),n.initialize&&(Me.info(`Initializing ${n.name}...`),await n.initialize()),this.currentApp=n,Me.info(`App ${n.name} loaded successfully`),t&&this.renderApp(t)}renderApp(e){if(!this.currentApp)throw new Error("No app loaded. Call loadApp() first.");Tr(this.currentApp.render(),e),Me.info(`Rendered ${this.currentApp.name}`)}getCurrentApp(){return this.currentApp}getRegisteredApps(){return Array.from(this.apps.values())}selectAppToLoad(e){const{appIdFromUrl:t,appIdFromPath:n,appIdFromAppUrl:i,appsBeforeExtension:o}=e;if(t){if(this.apps.has(t))return Me.info(`Loading app specified by URL parameter 'appId': ${t}`),t;Me.warn(`App ID '${t}' from URL parameter not found`)}if(n){if(this.apps.has(n))return Me.info(`Loading app from URL path: ${n}`),n;Me.debug(`App ID '${n}' from URL path not found, continuing search`)}if(i&&this.apps.has(i))return Me.info(`Loading app using ID extracted from app URL path: ${i}`),i;if(this.apps.size>o){const c=Array.from(this.apps.values()).slice(o);if(c.length>0){const f=c[0];return Me.info(`Loading app registered by extension: ${f.name} (${f.id})`),f.id}}if(this.defaultAppId){if(this.apps.has(this.defaultAppId))return this.defaultAppId;Me.warn(`Default app '${this.defaultAppId}' not found`)}const a=this.getRegisteredApps();if(a.length>0){const c=a[0];return Me.info(`Loading first registered app: ${c.name} (${c.id})`),c.id}}}const Qr=new Mc;qt.put("appLoaderService",Qr);var Fc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,Wa=(r,e,t,n)=>{for(var i=n>1?void 0:n?zc(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Fc(e,t,i),i};let mi=class extends ms{constructor(){super(...arguments),this.contributions=[],this.tabGroup=mr(),this.containerId=null,this.resizeObservers=new WeakMap}doBeforeUI(){if(this.containerId=this.getAttribute("id"),!this.containerId)throw new Error("k-tabs requires an 'id' attribute to function");this.loadAndResolveContributions()}doInitUI(){this.updateComplete.then(()=>{this.activateNextAvailableTab(),this.tabGroup.value&&(this.tabGroup.value.addEventListener("wa-tab-show",r=>{const e=this.getTabPanel(r.detail.name);e&&(this.updateToolbarFromComponent(e),requestAnimationFrame(()=>{this.updateToolbarHeightVariable(e),this.setupToolbarResizeObserver(e)}),this.dispatchEvent(new CustomEvent("tab-shown",{detail:e})))}),this.tabGroup.value.addEventListener("part-toolbar-changed",r=>{const t=r.target.closest("wa-tab-panel");t&&(this.updateToolbarFromComponent(t),requestAnimationFrame(()=>this.updateToolbarHeightVariable(t)))}),this.tabGroup.value.addEventListener("part-contextmenu-changed",r=>{const t=r.target.closest("wa-tab-panel");t&&this.updateContextMenuFromComponent(t)}),this.tabGroup.value.addEventListener("click",r=>{const e=r.target,t=e.closest("wa-tab");if(t){const a=t.getAttribute("panel");if(a){const c=this.getTabPanel(a);if(c){const f=c.querySelector(".tab-content");if(f&&f.firstElementChild){const y=f.firstElementChild;y instanceof Nt&&Ze.set(y)}}}return}const n=e.closest("wa-scroller.tab-content");if(!n)return;const i=n.closest("wa-tab-panel");if(!i)return;const o=i.querySelector(".tab-content");if(o&&o.firstElementChild){const a=o.firstElementChild;a instanceof Nt&&Ze.set(a)}}),this.tabGroup.value.addEventListener("contextmenu",r=>{const e=r,t=e.target.closest("wa-scroller.tab-content");if(!t)return;e.preventDefault();const n=t.closest("wa-tab-panel");if(!n)return;const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,clientX:e.clientX,clientY:e.clientY,button:0});e.target.dispatchEvent(i),requestAnimationFrame(()=>{this.updateContextMenuFromComponent(n);const o=n.querySelector("k-contextmenu");o&&o.show({x:e.clientX,y:e.clientY})})}))}),Wt(Yr,r=>{!this.containerId||r.target!==this.containerId||(this.loadAndResolveContributions(),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()}))})}updated(r){if(super.updated(r),r.has("contributions")){const e=this.containerId===an;this.contributions.forEach(t=>{const n=this.getTabPanel(t.name);if(!n)return;const i=n.querySelector(".tab-content");if(i&&i.firstElementChild){const o=i.firstElementChild;o instanceof Nt&&(o.tabContribution=t,o.isEditor=e)}requestAnimationFrame(()=>this.updateToolbarHeightVariable(n))})}}has(r){return this.tabGroup.value?!!this.getTabPanel(r):!1}activate(r){this.tabGroup.value&&this.tabGroup.value.setAttribute("active",r)}getActiveEditor(){return this.tabGroup.value?this.tabGroup.value.getAttribute("active"):null}open(r){if(this.contributions.find(t=>t.name===r.name)){this.activate(r.name);return}this.contributions.push(r),this.requestUpdate(),this.updateComplete.then(()=>{this.activate(r.name);const t=this.getTabPanel(r.name);if(t){const n=t.querySelector(".tab-content");if(n&&n.firstElementChild){const i=n.firstElementChild;i instanceof Nt&&(i.tabContribution=r,i.isEditor=this.containerId===an)}requestAnimationFrame(()=>{this.updateToolbarFromComponent(t),this.updateToolbarHeightVariable(t),this.setupToolbarResizeObserver(t)})}})}handleTabAuxClick(r,e){r.button===ja.MIDDLE&&e.closable&&this.closeTab(r,e.name)}async closeTab(r,e){if(r.stopPropagation(),this.isDirty(e)&&!await vn("Unsaved changes will be lost: Do you really want to close?"))return;const t=this.getTabPanel(e);if(!t)return;const n=this.contributions.find(o=>o.name===e);if(!n)return;this.cleanupTabInstance(t);const i=this.contributions.indexOf(n);i>-1&&this.contributions.splice(i,1),this.dispatchEvent(new CustomEvent("tab-closed",{detail:t})),this.requestUpdate(),this.updateComplete.then(()=>{this.activateNextAvailableTab()})}markDirty(r,e){this.getTab(r).classList.toggle("part-dirty",e)}isDirty(r){return this.getTab(r).classList.contains("part-dirty")}loadAndResolveContributions(){this.contributions=Ye.getContributions(this.containerId),this.requestUpdate()}cleanupTabInstance(r){const e=this.resizeObservers.get(r);e&&(e.disconnect(),this.resizeObservers.delete(r));const t=r.querySelector(".tab-content");if(t&&t.firstElementChild){const n=t.firstElementChild;"close"in n&&typeof n.close=="function"&&n.close()}}activateNextAvailableTab(){if(!this.tabGroup.value)return;const r=this.tabGroup.value.querySelectorAll("wa-tab");if(r.length>0){const e=r.item(0).getAttribute("panel");e&&this.tabGroup.value.setAttribute("active",e)}else this.tabGroup.value.removeAttribute("active")}getTabPanel(r){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab-panel[name='${r}']`):null}getTab(r){return this.tabGroup.value?this.tabGroup.value.querySelector(`wa-tab[panel='${r}']`):null}updateToolbarFromComponent(r){const e=r.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof Nt)||!t.renderToolbar)return;const n=r.querySelector("k-toolbar");n&&(n.partToolbarRenderer=()=>t.renderToolbar(),n.requestUpdate())}updateContextMenuFromComponent(r){const e=r.querySelector(".tab-content");if(!e||!e.firstElementChild)return;const t=e.firstElementChild;if(!(t instanceof Nt)||!t.renderContextMenu)return;const n=r.querySelector("k-contextmenu");n&&(n.partContextMenuRenderer=()=>t.renderContextMenu(),n.requestUpdate())}updateToolbarHeightVariable(r){const e=r.querySelector(".tab-toolbar");if(!e)return;const t=e.offsetHeight;r.style.setProperty("--toolbar-height",`${t}px`)}setupToolbarResizeObserver(r){if(this.resizeObservers.has(r))return;const e=r.querySelector(".tab-toolbar");if(!e)return;const t=new ResizeObserver(()=>{this.updateToolbarHeightVariable(r)});t.observe(e),this.resizeObservers.set(r,t)}render(){const r=Qr.getCurrentApp();return j`
            <wa-tab-group ${gr(this.tabGroup)}>
                ${Dt(this.contributions.length===0,()=>j`
                        <div class="empty-state">
                            ${Dt(r,()=>j`
                                    <div class="empty-content">
                                        <h2 class="empty-title">${r.name}</h2>
                                        ${Dt(r.description,()=>j`<p class="empty-description">${r.description}</p>`)}
                                    </div>
                                `,()=>j`
                                    <wa-icon name="folder-open" class="empty-icon"></wa-icon>
                                `)}
                        </div>
                    `,()=>kc(this.contributions,e=>e.name,e=>j`
                            <wa-tab panel="${e.name}"
                                    @auxclick="${t=>this.handleTabAuxClick(t,e)}">
                                <k-icon name="${e.icon}"></k-icon>
                                ${e.label}
                                ${Dt(e.closable,()=>j`
                                    <wa-icon name="xmark" label="Close"  @click="${t=>this.closeTab(t,e.name)}"></wa-icon>
                                `)}
                            </wa-tab>
                            <wa-tab-panel name="${e.name}">
                                <k-toolbar id="toolbar:${e.editorId??e.name}" 
                                           class="tab-toolbar"
                                           ?is-editor="${this.containerId===an}"></k-toolbar>
                                <wa-scroller class="tab-content" orientation="vertical">
                                    ${e.component?e.component(e.name):vt}
                                </wa-scroller>
                                <k-contextmenu id="contextmenu:${e.name}"
                                               ?is-editor="${this.containerId===an}"></k-contextmenu>
                            </wa-tab-panel>
                        `))}
            </wa-tab-group>
        `}};mi.styles=Mt`
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
    `;Wa([xt()],mi.prototype,"contributions",2);mi=Wa([yt("k-tabs")],mi);var qc=Object.defineProperty,Uc=Object.getOwnPropertyDescriptor,Kn=(r,e,t,n)=>{for(var i=n>1?void 0:n?Uc(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&qc(e,t,i),i};let hn=class extends Zr{constructor(){super(...arguments),this.orientation="horizontal",this.gridSizes=[],this.gridChildren=[],this.resizing=null,this.resizeOverlay=null,this.childrenLoaded=!1,this.childStylesApplied=!1,this.settingsLoaded=!1,this.handleResize=r=>{if(!this.resizing)return;const t=(this.orientation==="horizontal"?r.clientX:r.clientY)-this.resizing.startPos,n=[...this.resizing.startSizes];n[this.resizing.handleIndex]+=t,n[this.resizing.handleIndex+1]-=t;const i=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,o=i*.05;if(n[this.resizing.handleIndex]>=o&&n[this.resizing.handleIndex+1]>=o){this.resizing.currentSizes=n;const a=n.map((c,f)=>{const T=`${(c/i*100).toFixed(2)}%`;return f===n.length-1?T:`${T} 4px`}).join(" ");this.orientation==="horizontal"?this.style.gridTemplateColumns=a:this.style.gridTemplateRows=a}},this.stopResize=async()=>{if(this.resizing?.currentSizes){const r=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight;this.gridSizes=this.resizing.currentSizes.map(e=>`${(e/r*100).toFixed(2)}%`),await this.saveSizes(),this.requestUpdate()}this.resizeOverlay&&(document.body.removeChild(this.resizeOverlay),this.resizeOverlay=null),this.resizing=null,document.removeEventListener("mousemove",this.handleResize),document.removeEventListener("mouseup",this.stopResize),document.body.style.cursor="",document.body.style.userSelect=""}}createRenderRoot(){return this}doBeforeUI(){this.childrenLoaded||(this.mutationObserver=new MutationObserver(()=>{this.childrenLoaded||this.loadChildren()}),this.mutationObserver.observe(this,{childList:!0,subtree:!1}),this.loadChildren())}async loadChildren(){const r=Array.from(this.children).filter(e=>e.tagName!=="STYLE"&&e.tagName!=="SCRIPT"&&!e.classList.contains("resize-handle"));if(r.length!==0){if(this.childrenLoaded=!0,this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0),this.gridChildren=r,!this.settingsLoaded){this.settingsLoaded=!0;const e=await this.getDialogSetting();if(e&&Array.isArray(e.sizes)&&e.sizes.length===this.gridChildren.length){this.gridSizes=e.sizes,this.requestUpdate();return}}if(this.sizes)this.gridSizes=this.sizes.split(",").map(e=>e.trim());else{const e=`${100/this.gridChildren.length}%`;this.gridSizes=this.gridChildren.map(()=>e)}this.requestUpdate()}}async saveSizes(){this.gridSizes.length!==0&&await this.setDialogSetting({sizes:this.gridSizes,orientation:this.orientation})}updated(r){super.updated(r),r.has("gridChildren")&&!this.childStylesApplied&&this.gridChildren.length>0&&(this.childStylesApplied=!0,this.gridChildren.forEach((e,t)=>{e.style.overflow="hidden",e.style.height="100%",e.style.width="100%",e.style.gridColumn=this.orientation==="horizontal"?`${t*2+1}`:"1",e.style.gridRow=this.orientation==="vertical"?`${t*2+1}`:"1",e.style.display="flex",e.style.flexDirection="column"}))}startResize(r,e){if(r.preventDefault(),e>=this.gridChildren.length-1)return;const t=this.orientation==="horizontal"?r.clientX:r.clientY,n=this.orientation==="horizontal"?this.offsetWidth:this.offsetHeight,i=this.gridSizes.map(o=>o.endsWith("%")?parseFloat(o)/100*n:(o.endsWith("px"),parseFloat(o)));this.resizing={handleIndex:e,startPos:t,startSizes:i},this.resizeOverlay=document.createElement("div"),this.resizeOverlay.style.position="fixed",this.resizeOverlay.style.top="0",this.resizeOverlay.style.left="0",this.resizeOverlay.style.width="100%",this.resizeOverlay.style.height="100%",this.resizeOverlay.style.zIndex="9999",this.resizeOverlay.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.appendChild(this.resizeOverlay),document.addEventListener("mousemove",this.handleResize),document.addEventListener("mouseup",this.stopResize),document.body.style.cursor=this.orientation==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"}render(){if(this.gridChildren.length===0||this.gridSizes.length===0)return vt;const r=this.gridSizes.flatMap((e,t)=>t===this.gridSizes.length-1?[e]:[e,"4px"]).join(" ");return this.style.display="grid",this.orientation==="horizontal"?(this.style.gridTemplateColumns=r,this.style.gridTemplateRows="100%"):(this.style.gridTemplateColumns="100%",this.style.gridTemplateRows=r),this.style.overflow="hidden",j`
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
            
            ${this.gridChildren.map((e,t)=>{if(t<this.gridChildren.length-1){const n=this.orientation==="horizontal"?`${t*2+2}`:"1",i=this.orientation==="vertical"?`${t*2+2}`:"1";return j`
                        <div 
                            class="resize-handle"
                            style="
                                cursor: ${this.orientation==="horizontal"?"col-resize":"row-resize"};
                                grid-column: ${n};
                                grid-row: ${i};
                            "
                            @mousedown=${o=>this.startResize(o,t)}
                        ></div>
                    `}return vt})}
        `}disconnectedCallback(){super.disconnectedCallback(),this.resizing&&this.stopResize(),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}connectedCallback(){super.connectedCallback(),this.style.height="100%",this.style.width="100%"}};Kn([Te()],hn.prototype,"orientation",2);Kn([Te()],hn.prototype,"sizes",2);Kn([xt()],hn.prototype,"gridSizes",2);Kn([xt()],hn.prototype,"gridChildren",2);hn=Kn([yt("k-resizable-grid")],hn);const fr="events/filesys/workspaceChanged",Un="events/filesys/workspaceConnected";class gi{constructor(){this.state={}}getWorkspacePath(){const e=[];let t=this;for(;t;)e.push(t.getName()),t=t.getParent();return e.reverse(),e.shift(),e.join("/")}getWorkspace(){let e=this;for(;e;){const t=e.getParent();if(t)e=t;else break}return e}}var Ba=(r=>(r[r.TEXT=0]="TEXT",r[r.BINARY=1]="BINARY",r))(Ba||{});class or extends gi{}class cn extends gi{}class jc extends or{constructor(e,t){super(),this.contents=e,this.name=t}async getContents(e){return this.contents}async saveContents(e,t){this.contents=e}async size(){return this.contents.length||null}async copyTo(e){throw Error("Not supported")}delete(e,t){throw Error("Not supported")}async rename(e){throw Error("Not supported")}getName(){return this.name}getParent(){}}class Us extends or{constructor(e,t){super(),this.fileHandle=e,this.parent=t}getName(){return this.fileHandle.name}getParent(){return this.parent}async delete(){return this.getParent().delete(this.getName())}async getContents(e){const t=await this.fileHandle.getFile();return!e||e?.contentType==0?await t.text():e?.encoding==0||e?.uri?URL.createObjectURL(t):e?.blob?t:t.stream()}async size(){try{return(await this.fileHandle.getFile()).size}catch{return null}}async saveContents(e,t){const n=await this.fileHandle.createWritable();if(e&&typeof e.pipeTo=="function")await e.pipeTo(n);else{const i=n.getWriter();try{await i.write(e)}finally{await i.close()}}}async copyTo(e){const t=await this.getContents({blob:!0});await(await this.getWorkspace().getResource(e,{create:!0})).saveContents(t)}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename root resource");if(this.getName()!==e){if(!("move"in this.fileHandle)||typeof this.fileHandle.move!="function")throw new Error("File rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.fileHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("File rename failed: The operation took too long and user activation expired. Please try again."):n}await t.listChildren(!0),We(fr,this.getWorkspace())}}}class Cr extends cn{constructor(e,t){super(),this.dirHandle=e,this.parent=t}getHandle(){return this.dirHandle}getParent(){return this.parent}getName(){return this.dirHandle.name}async listChildren(e=!1){return e||!this.files?this.loadingPromise?this.loadingPromise:(this.loadingPromise=(async()=>{try{const t={};try{for await(const n of this.dirHandle.values()){const o=n.kind==="file"?new Us(n,this):new Cr(n,this);t[o.getName()]=o}}catch(n){if(n.name==="NotFoundError")return this.files={},[];throw n}return this.files=t,Object.values(this.files)}finally{this.loadingPromise=void 0}})(),this.loadingPromise):Object.values(this.files)}async getResource(e,t){if(!e)throw new Error("No path provided");const n=e.split("/");let i=this,o=!1;try{for(let a=0;a<n.length;a++){let c=n[a];if(c&&(c=c.trim()),!c)break;if(i instanceof Cr){if(await i.listChildren(),!i.files)return null;const f=i.files[c];if(f)i=f;else if(t?.create)if(o=!0,a<n.length-1)try{const y=await i.dirHandle.getDirectoryHandle(c,{create:!0}),T=new Cr(y,i);i.files[c]=T,i=T,i instanceof Cr&&await i.listChildren();continue}catch(y){throw y.name==="NotFoundError"?new Error(`Directory not found or not accessible: ${n.slice(0,a+1).join("/")}`):y}else try{const y=await i.dirHandle.getFileHandle(c,{create:!0}),T=new Us(y,i);return i.files[c]=T,T}catch(y){throw y.name==="NotFoundError"?new Error(`File not found or not accessible: ${n.join("/")}`):y}else return null}}}finally{o&&We(fr,this.getWorkspace())}return i}touch(){We(fr,this.getWorkspace())}async delete(e,t=!0){if(!e){const n=this.getParent();return n instanceof Cr&&(await n.listChildren(),n.files&&delete n.files[this.getName()]),this.files=void 0,this.loadingPromise=void 0,n?.delete(this.getName())}return this.dirHandle.removeEntry(e,{recursive:t}).then(async()=>{this.files&&delete this.files[e],We(fr,this.getWorkspace())})}async copyTo(e){for(const t of await this.listChildren()){const n=[e,t.getName()].join("/");await t.copyTo(n)}}async rename(e){const t=this.getParent();if(!t)throw new Error("Cannot rename workspace root");if(this.getName()!==e){if(!("move"in this.dirHandle)||typeof this.dirHandle.move!="function")throw new Error("Directory rename not supported in this browser. Please use a browser with File System Access API move() support.");try{await this.dirHandle.move(e)}catch(n){throw n.name==="NotAllowedError"||n.message?.includes("not allowed")||n.message?.includes("user agent")?new Error("Directory rename failed: The operation took too long and user activation expired. Please try again."):n}await t.listChildren(!0),We(fr,this.getWorkspace())}}}class Wc{constructor(){this.contributions=new Map,this.workspace=this.loadPersistedWorkspace(),this.workspace.then(e=>{e&&We(Un,e)})}registerContribution(e){this.contributions.set(e.type,e),console.log(`Workspace contribution registered: ${e.name} (${e.type})`)}getContributions(){return Array.from(this.contributions.values())}async loadPersistedWorkspace(){const e=await dr.getObject("workspace_data");if(!e)return;const t=this.contributions.get(e.type);if(!t){console.warn(`No contribution found for workspace type: ${e.type}`);return}try{if(t.restore){const n=await t.restore(e.data);return n&&(this.currentType=e.type),n}}catch(n){console.error(`Failed to restore workspace of type ${e.type}:`,n)}}async connectWorkspace(e){const t=Array.from(this.contributions.values()).find(a=>a.canHandle(e));if(!t)throw new Error("No workspace contribution can handle this input");const n=await t.connect(e),i=t.persist?await t.persist(n):e,o={type:t.type,data:i};return await dr.persistObject("workspace_data",o),this.currentType=t.type,this.workspace=Promise.resolve(n),We(Un,n),n}async getWorkspace(){if(!this.workspace)throw new Error("No workspace connected.");return await this.workspace}isConnected(){return!!this.workspace}getWorkspaceType(){return this.currentType}async disconnectWorkspace(){this.workspace=void 0,this.currentType=void 0,await dr.persistObject("workspace_data",null),await dr.persistObject("workspace",null)}}const Tt=new Wc;qt.put("workspaceService",Tt);Tt.registerContribution({type:"filesystem",name:"Local File System",canHandle(r){return r&&"kind"in r&&r.kind==="directory"},async connect(r){return new Cr(r)},async restore(r){if(r&&"kind"in r&&r.kind==="directory")return new Cr(r,void 0)},async persist(r){return r instanceof Cr?r.getHandle():null}});const js=(r,e)=>!r.leaf&&e.leaf?-1:r.leaf&&!e.leaf?1:r.label.localeCompare(e.label);class Bc{constructor(){this.editorInputHandlers=[],this.listenersAttached=!1,this.cachedIconContributions=null,Wt(Un,()=>{}),Wt(Yr,e=>{e.target==="system.icons"&&(this.cachedIconContributions=null)})}getSortedIconContributions(){if(this.cachedIconContributions!==null)return this.cachedIconContributions;const e=Ye.getContributions("system.icons");return this.cachedIconContributions=[...e].sort((t,n)=>{const i=t.priority??0,o=n.priority??0;return o!==i?o-i:t.label.localeCompare(n.label)}),this.cachedIconContributions}setupEventListeners(e){if(this.listenersAttached)return;this.listenersAttached=!0;const t=o=>{const a=o.detail;a&&Array.from(a.querySelectorAll("*")).filter(f=>f instanceof Nt).forEach(f=>{Ze.set(f),f.isEditor&&ln.set(f)})};e.addEventListener("tab-shown",t);const n=o=>{const a=o.detail;Array.from(a.querySelectorAll("*")).filter(f=>f instanceof Nt).forEach(f=>{Ze.get()==f&&Ze.set(null),ln.get()==f&&ln.set(null)})};e.addEventListener("tab-closed",n),Da(Wi,o=>{const c=o.closest("wa-tab-panel").getAttribute("name");e.markDirty(c,o.isDirty())})}registerEditorInputHandler(e){this.editorInputHandlers.push(e),this.editorInputHandlers.sort((t,n)=>(n.ranking??0)-(t.ranking??0))}async handleInput(e){for(let t=0;t<this.editorInputHandlers.length;t++){const n=this.editorInputHandlers[t];if(n.canHandle(e))return await n.handle(e)}}getEditorArea(){return document.querySelector(`k-tabs#${an}`)}async loadEditor(e){if(!e||("widgetFactory"in e||(e=await this.handleInput(e)),!e||!("widgetFactory"in e)))return;const t=this.getEditorArea();if(!t){console.error("Editor area not found. The split pane system may not be initialized yet.");return}if(this.setupEventListeners(t),t.has(e.key)){t.activate(e.key);return}t.open({name:e.key,editorId:e.editorId,label:e.title,icon:e.icon,closable:!0,noOverflow:e.noOverflow,component:e.widgetFactory})}getFileIcon(e){const t=e.includes(".")?e.split(".").pop()?.toLowerCase()||"":e.toLowerCase(),n=this.getSortedIconContributions();if(n.length===0)return"file";for(const i of n)if(i.mappings&&i.mappings[t])return i.mappings[t];return"file"}}const Lr=new Bc;qt.put("editorRegistry",Lr);Ye.registerContribution("system.icons",{label:"Default File Icons",mappings:{pdf:"file-pdf",md:"book",txt:"file-lines",ts:"code",tsx:"code",js:"code",jsx:"code",json:"file-code",geojson:"file-code",py:"python",html:"code",htm:"code",css:"code",scss:"code",sass:"code",xml:"file-code",yaml:"file-code",yml:"file-code",sql:"database",kml:"file-code",gpx:"file-code",jpg:"image",jpeg:"image",png:"image",gif:"image",svg:"image",webp:"image",bmp:"image",ico:"image"},priority:0});var Vc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Ci=(r,e,t,n)=>{for(var i=n>1?void 0:n?Gc(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Vc(e,t,i),i};let fn=class extends Nt{constructor(){super(...arguments),this.treeRef=mr(),this.loadingNodes=new Set}doBeforeUI(){this.initializeWorkspace()}firstUpdated(r){super.firstUpdated(r),this.setupDragAndDrop()}updated(r){super.updated(r),r.has("workspaceDir")&&this.workspaceDir&&this.setupDragAndDrop()}async initializeWorkspace(){const r=await Tt.getWorkspace();r?await this.loadWorkspace(r):Le.execute("help")}renderToolbar(){const r=Vt.get()instanceof gi;return j`
            <k-command icon="folder-open" title="Connect workspace..." dropdown="filebrowser.connections"></k-command>
            <k-command cmd="reload_workspace" icon="repeat" title="Reload workspace folder"></k-command>
            <k-command cmd="create_file" icon="plus" title="Create new..." dropdown="filebrowser.create"></k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!r} title="Rename selected resource (F2)"></k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!r} title="Delete selected resource"></k-command>
        `}renderContextMenu(){const r=Vt.get()instanceof gi;return j`
            <k-command cmd="open_editor" icon="folder-open">Open</k-command>
            <k-command cmd="create_file" icon="plus" dropdown="filebrowser.create">Create new...</k-command>
            <k-command cmd="rename_resource" icon="pen" ?disabled=${!r}>Rename</k-command>
            <k-command cmd="delete_resource" icon="trash" ?disabled=${!r}>Delete</k-command>
        `}async onWorkspaceChanged(r){Vt.set(void 0),await this.loadWorkspace(r),await this.syncTreeSelection()}async onWorkspaceConnected(r){await this.loadWorkspace(r)}async loadWorkspace(r){this.workspaceDir=r,r?this.root=await this.resourceToTreeNode(r,!0):this.root=void 0}async syncTreeSelection(){await this.updateComplete;const e=this.treeRef.value?.querySelector("wa-tree")?.selectedItems||[];e.length>0&&Vt.set(e[0].model?.data)}async resourceToTreeNode(r,e=!1){const t=r instanceof or,n={data:r,label:r.getName(),icon:t?Lr.getFileIcon(r.getName()):"folder-open",leaf:t,children:[]};if(r instanceof cn&&e){for(const i of await r.listChildren(!1)){const o=await this.resourceToTreeNode(i,!1);n.children.push(o)}n.children.sort(js)}return n}createTreeItems(r,e=!1){if(!r)return j``;const t=!r.leaf&&r.children.length===0;return j`
            <wa-tree-item 
                @dblclick=${this.nobubble(this.onFileDoubleClicked)}
                @wa-lazy-load=${this.nobubble(n=>this.onLazyLoad(n,r))}
                .model=${r} 
                ?expanded=${e}
                ?lazy=${t}>
                <span><wa-icon name=${r.icon} label="${r.leaf?"File":"Folder"}"></wa-icon> ${r.label}</span>
                ${r.children.map(n=>this.createTreeItems(n,!1))}
            </wa-tree-item>`}async onLazyLoad(r,e){const t=e.data;t instanceof cn&&e.children.length===0&&await this.loadNodeChildren(e,t)}async loadNodeChildren(r,e){if(!this.loadingNodes.has(r)){this.loadingNodes.add(r);try{for(const t of await e.listChildren(!1)){Pc&&t.getName().startsWith(".");const n=await this.resourceToTreeNode(t,!1);r.children.push(n)}r.children.sort(js),this.requestUpdate()}catch(t){console.error("Failed to load directory children:",t)}finally{this.loadingNodes.delete(r)}}}async onFileDoubleClicked(r){const t=r.currentTarget.model.data.getWorkspacePath();this.executeCommand("open_editor",{path:t})}onSelectionChanged(r){const e=r.detail.selection;if(e&&e.length>0){const t=e[0].model;Vt.set(t.data)}else Vt.set(void 0)}setupDragAndDrop(){const r=this.treeRef.value;if(!r)return;const e=o=>{if(!o.dataTransfer?.types.includes("Files"))return;o.preventDefault(),o.dataTransfer.dropEffect="copy",r.classList.add("drag-over");const c=o.target.closest("wa-tree-item");c&&c!==this.currentDropTarget&&(this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=c,c.classList.add("drop-target"))},t=o=>{o.dataTransfer?.types.includes("Files")&&(o.preventDefault(),r.classList.add("drag-over"))},n=o=>{const a=r.getBoundingClientRect(),c=o.clientX,f=o.clientY;(c<=a.left||c>=a.right||f<=a.top||f>=a.bottom)&&(r.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0)},i=async o=>{if(o.preventDefault(),r.classList.remove("drag-over"),this.currentDropTarget?.classList.remove("drop-target"),this.currentDropTarget=void 0,!o.dataTransfer||!this.workspaceDir)return;const a=Array.from(o.dataTransfer.files);if(a.length===0)return;const c=await this.getDropTarget(o);await this.handleFilesDrop(a,c)};r.removeEventListener("dragover",e),r.removeEventListener("dragenter",t),r.removeEventListener("dragleave",n),r.removeEventListener("drop",i),r.addEventListener("dragover",e),r.addEventListener("dragenter",t),r.addEventListener("dragleave",n),r.addEventListener("drop",i)}async getDropTarget(r){const t=r.target.closest("wa-tree-item");if(t){const i=t.model.data;if(i instanceof cn)return i;const o=i.getParent();if(o)return o}return this.workspaceDir}async handleFilesDrop(r,e){const t=r.length;let n=0,i=0,o=0;for(const a of r)try{const c=this.buildTargetPath(e,a.name);if(await this.workspaceDir.getResource(c)&&!await vn(`File "${a.name}" already exists. Do you want to overwrite it?`)){o++;continue}await(await this.workspaceDir.getResource(c,{create:!0})).saveContents(a),n++}catch(c){console.error(`Failed to upload ${a.name}:`,c),i++}console.log(`Uploaded ${n}/${t} files${o>0?`, ${o} skipped`:""}${i>0?`, ${i} failed`:""}`),await this.loadWorkspace(this.workspaceDir)}buildTargetPath(r,e){const t=r.getWorkspacePath();return t?`${t}/${e}`:e}render(){return j`
            <div class="tree" ${gr(this.treeRef)}>
                ${Dt(!this.workspaceDir,()=>j`
                    <k-no-content message="Select a workspace."></k-no-content>`,()=>j`
                `)}
                <wa-tree @wa-selection-change=${this.nobubble(this.onSelectionChanged)}
                         style="--indent-guide-width: 1px;">
                    ${this.createTreeItems(this.root,!0)}
                </wa-tree>
            </div>
        `}};fn.styles=Mt`
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
    `;Ci([xt()],fn.prototype,"root",2);Ci([ya(fr)],fn.prototype,"onWorkspaceChanged",1);Ci([ya(Un)],fn.prototype,"onWorkspaceConnected",1);fn=Ci([yt("k-filebrowser")],fn);var Hc=Object.getOwnPropertyDescriptor,Kc=(r,e,t,n)=>{for(var i=n>1?void 0:n?Hc(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=a(i)||i);return i};Ye.registerContribution(gs,{html:"<k-tasks></k-tasks>"});let Yi=class extends xi(Nt){render(){ba.get();const r=fi.getActiveTasks().length;if(r!=0)return j`
            <wa-dropdown>
                <wa-button slot="trigger" appearance="plain" size="small" title="Active tasks: ${r}">
                    <wa-animation name="zoomIn" duration="1000" play>
                        <wa-icon name="hourglass" label="Active tasks" style="color: var(--wa-color-warning-fill-loud)"></wa-icon>
                    </wa-animation>
                    Active tasks: ${r}
                </wa-button>
                ${fi.getActiveTasks().map(e=>{const t=e.progress>=0||e.totalSteps>0,n=e.progress>=0?e.progress:e.totalSteps>0?Math.round(e.currentStep/e.totalSteps*100):0,i=e.progress<0&&e.totalSteps>0;return j`
                        <wa-dropdown-item style="display: block; padding: 0.5rem 1rem;">
                            <div style="margin-bottom: 0.25rem;">
                                <strong>${e.name}</strong>: ${e.message}
                            </div>
                            ${t?j`
                                <wa-progress-bar value="${n}" style="--track-height: 1.25rem;">
                                    ${i?`${e.currentStep}/${e.totalSteps} - `:""}${n}%
                                </wa-progress-bar>
                            `:j`
                                <wa-progress-bar indeterminate style="--track-height: 1.25rem;"></wa-progress-bar>
                            `}
                        </wa-dropdown-item>
                    `})}
            </wa-dropdown>
        `}};Yi.styles=Mt`
        wa-progress-bar::part(label) {
            text-align: center;
            width: 100%;
        }
    `;Yi=Kc([yt("k-tasks")],Yi);var Yc=Object.getOwnPropertyDescriptor,Jc=(r,e,t,n)=>{for(var i=n>1?void 0:n?Yc(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=a(i)||i);return i};const Ws="<no workspace>";let Bs=class extends Zr{constructor(){super(...arguments),this.workspaceName=Ws}doInitUI(){this.updateWorkspaceName(),Wt(Un,()=>{this.updateWorkspaceName()})}updateWorkspaceName(){Tt.getWorkspace().then(r=>{this.workspaceName=r?.getName()||Ws,this.requestUpdate()})}handleLoadWorkspace(){Le.execute("load_workspace",{source:this})}render(){return j`
            <wa-button 
                appearance="plain"
                size="small"
                title="Load workspace"
                @click=${this.handleLoadWorkspace}>
                <wa-icon name="folder-open" slot="start" label="Workspace"></wa-icon>
                ${this.workspaceName}
            </wa-button>
        `}};Bs=Jc([yt("k-workspace-name")],Bs);var Zc=Object.getOwnPropertyDescriptor,Qc=(r,e,t,n)=>{for(var i=n>1?void 0:n?Zc(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=a(i)||i);return i};const Vs="<no part>";Ye.registerContribution(gs,{html:"<k-part-name></k-part-name>"});let Gs=class extends xi(Zr){getPartName(){const r=Ze.get();return r&&(r.tabContribution?.label||r.getAttribute("id"))||Vs}render(){const e=Ze.get()?.tabContribution?.icon||"box";return j`
            <wa-button 
                appearance="plain"
                size="small"
                title="Active part">
                <k-icon slot="start" name="${e}" label="Part"></k-icon>
                ${this.getPartName()}
            </wa-button>
        `}};Gs=Qc([yt("k-part-name")],Gs);var Xc=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,vs=(r,e,t,n)=>{for(var i=n>1?void 0:n?eu(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Xc(e,t,i),i};let jn=class extends Nt{constructor(){super(...arguments),this.filterText=""}doInitUI(){Wt(Dn,()=>{this.requestUpdate()})}onExtensionDblClick(){}enable(r){Pe.enable(r.id,!0),this.requestUpdate()}disable(r){Pe.disable(r.id,!0),this.requestUpdate()}isExtensionRequired(r){const e=Qr.getCurrentApp();return!e||!e.extensions?!1:e.extensions.includes(r)}selectionChanged(r){const e=r.detail.selection||[];e.length>0&&e[0].model?this.selectedExtension=e[0].model:this.selectedExtension=void 0}getFilteredExtensions(){if(!this.filterText.trim())return Pe.getExtensions();const r=this.filterText.toLowerCase();return Pe.getExtensions().filter(e=>e.name.toLowerCase().includes(r)||(e.description?.toLowerCase().includes(r)??!1)||e.id.toLowerCase().includes(r))}getGroupedExtensions(){const r=this.getFilteredExtensions(),e=[],t=[];return r.forEach(n=>{Pe.isEnabled(n.id)?e.push(n):t.push(n)}),e.sort((n,i)=>n.name.localeCompare(i.name)),t.sort((n,i)=>n.name.localeCompare(i.name)),{enabled:e,available:t}}isExternalExtension(r){return r.external===!0}handleFilterInput(r){this.filterText=r.target.value,this.requestUpdate()}clearFilter(){this.filterText="",this.requestUpdate()}renderToolbar(){return j`
            <wa-input
                placeholder="Filter extensions..."
                .value=${this.filterText}
                @input=${r=>this.handleFilterInput(r)}
                @wa-clear=${()=>this.clearFilter()}
                with-clear
                size="small"
                style="width: 300px;">
                <wa-icon slot="start" name="magnifying-glass" label="Filter"></wa-icon>
            </wa-input>
        `}render(){const r=this.getGroupedExtensions(),e=r.enabled.length>0||r.available.length>0;return j`
            <wa-split-panel position="30" style="height: 100%">
                <wa-tree 
                    selection="leaf"
                    style="--indent-guide-width: 1px;" 
                    slot="start"
                    @wa-selection-change="${this.selectionChanged}">
                    ${e?j`
                        ${r.enabled.length>0?j`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="check-circle" style="color: var(--wa-color-success-50);"></wa-icon>
                                    Installed (${r.enabled.length})
                                </span>
                                ${r.enabled.map(t=>{const n=this.isExternalExtension(t);return j`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                            <span><k-icon name="${t.icon}"></k-icon></span> ${t.name}${n?j` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                        ${r.available.length>0?j`
                            <wa-tree-item expanded>
                                <span>
                                    <wa-icon name="circle" style="color: var(--wa-color-neutral-50);"></wa-icon>
                                    Available (${r.available.length})
                                </span>
                                ${r.available.map(t=>{const n=this.isExternalExtension(t);return j`
                                        <wa-tree-item @dblclick=${this.nobubble(this.onExtensionDblClick)} .model=${t}>
                                            <span><k-icon name="${t.icon}"></k-icon></span> ${t.name}${n?j` <span style="opacity: 0.6; font-size: 0.9em; margin-left: 0.5rem;">(External)</span>`:""}
                                        </wa-tree-item>
                                    `})}
                            </wa-tree-item>
                        `:""}
                    `:""}
                    ${e?"":j`
                        <div style="padding: 1em; text-align: center; opacity: 0.7;">
                            No extensions match "${this.filterText}"
                        </div>
                    `}
                </wa-tree>
                <div slot="end" style="padding: 1em;">
                    ${Dt(this.selectedExtension,t=>{const n=this.isExternalExtension(t),i=Pe.isEnabled(t.id);return j`
                                <h1><k-icon name="${t.icon}"></k-icon> ${t.name}${n?" (External)":""}</h1>
                                ${Dt(n,()=>j`
                                    <div class="marketplace-badge">
                                        <wa-icon name="store"></wa-icon>
                                        <span>External Extension</span>
                                    </div>
                                `)}
                                <hr>
                                <div>
                                    ${Dt(i,()=>j`
                                        <wa-button 
                                            title="${this.isExtensionRequired(t.id)?"This extension is required by the current app and cannot be uninstalled":"Disable this extension"}" 
                                            @click="${()=>this.disable(t)}"
                                            variant="danger" 
                                            appearance="plain"
                                            ?disabled=${this.isExtensionRequired(t.id)}>
                                            <wa-icon name="xmark" label="Uninstall"></wa-icon>&nbsp;Uninstall (requires restart)
                                        </wa-button>
                                        ${Dt(this.isExtensionRequired(t.id),()=>j`
                                            <div class="required-hint">
                                                <wa-icon name="info-circle" style="color: var(--wa-color-primary-50);"></wa-icon>
                                                <span>This extension is required by the current app and cannot be uninstalled</span>
                                            </div>
                                        `)}
                                    `,()=>j`
                                        <wa-button 
                                            title="Enable this extension" 
                                            @click="${()=>this.enable(t)}"
                                            variant="brand" 
                                            appearance="plain">
                                            <wa-icon name="download" label="Install"></wa-icon>&nbsp;Install
                                        </wa-button>
                                    `)}
                                </div>

                                ${Dt(t.experimental,()=>j`
                                    <div style="margin-top: 1em;">
                                        <wa-button size="small" variant="warning" appearance="plain">
                                            <wa-icon name="triangle-exclamation" label="Warning"></wa-icon>
                                        </wa-button>
                                        <small><i>This is an experimental extension!</i></small>
                                    </div>
                                `)}

                                ${Dt(t.version||t.author,()=>j`
                                    <div style="margin-top: 1em; display: flex; flex-direction: column; gap: 0.5rem;">
                                        ${Dt(t.version,()=>j`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="tag" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">Version: <strong>${t.version}</strong></span>
                                            </div>
                                        `)}
                                        ${Dt(t.author,()=>j`
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <wa-icon name="user" style="font-size: 0.9em; opacity: 0.7;"></wa-icon>
                                                <span style="font-size: 0.9em; opacity: 0.8;">Author: <strong>${t.author}</strong></span>
                                            </div>
                                        `)}
                                    </div>
                                `)}

                                <p style="margin-top: 1em;">${t.description}</p>

                                ${Dt(t.dependencies&&t.dependencies.length>0,()=>j`
                                    <div style="margin-top: 1.5em;">
                                        <h3 style="margin-bottom: 0.5em;">
                                            <wa-icon name="puzzle-piece" style="font-size: 0.9em;"></wa-icon>
                                            Dependencies
                                        </h3>
                                        <div class="dependencies-list">
                                            ${t.dependencies.map(o=>{const a=Pe.getExtensions().find(f=>f.id===o),c=Pe.isEnabled(o);return j`
                                                    <div class="dependency-item">
                                                        <wa-icon 
                                                            name="${c?"check-circle":"circle"}" 
                                                            style="color: ${c?"var(--wa-color-success-50)":"var(--wa-color-neutral-50)"};">
                                                        </wa-icon>
                                                        <k-icon name="${a?.icon||"puzzle-piece"}"></k-icon>
                                                        <span>${a?.name||o}</span>
                                                        ${c?"":j`
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
                            `})}
                </div>
            </wa-split-panel>
        `}};jn.styles=Mt`
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
    `;vs([xt()],jn.prototype,"selectedExtension",2);vs([xt()],jn.prototype,"filterText",2);jn=vs([yt("k-extensions")],jn);var tu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,Ai=(r,e,t,n)=>{for(var i=n>1?void 0:n?ru(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&tu(e,t,i),i};let mn=class extends Nt{constructor(){super(...arguments),this.messages=[],this.autoScroll=!0,this.filter="all",this.containerRef=mr()}connectedCallback(){super.connectedCallback(),this.loadSettings(),Jo(this.log.bind(this))}disconnectedCallback(){super.disconnectedCallback(),Zo()}log(r,e,t="info"){const n={timestamp:new Date,level:t,source:r,message:e};this.messages=[...this.messages,n],this.updateToolbar(),this.autoScroll&&this.updateComplete.then(()=>{const i=this.containerRef.value;i&&(i.scrollTop=i.scrollHeight)})}clear(){this.messages=[],this.updateToolbar()}getFilteredMessages(){return this.filter==="all"?this.messages:this.messages.filter(r=>r.level===this.filter)}formatTimestamp(r){return r.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}getLevelIcon(r){switch(r){case"info":return"circle-info";case"warning":return"triangle-exclamation";case"error":return"circle-xmark";case"debug":return"bug"}}getLevelColor(r){switch(r){case"info":return"var(--wa-color-primary-text, #0066cc)";case"warning":return"var(--wa-color-warning-text, #ff9800)";case"error":return"var(--wa-color-danger-text, #dc3545)";case"debug":return"var(--wa-color-neutral-text-subtle, #6c757d)"}}renderToolbar(){const r=this.messages.filter(i=>i.level==="info").length,e=this.messages.filter(i=>i.level==="warning").length,t=this.messages.filter(i=>i.level==="error").length,n=this.messages.filter(i=>i.level==="debug").length;return j`
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
                Info${r>0?` (${r})`:""}
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
                Errors${t>0?` (${t})`:""}
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
        `}render(){const r=this.getFilteredMessages();return j`
            <div class="log-terminal">
                <div class="messages" ${gr(this.containerRef)}>
                    ${r.length===0?j`<div class="empty-state">No log messages</div>`:r.map(e=>j`
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
        `}async loadSettings(){const r=await this.getDialogSetting();r&&(typeof r.filter=="string"&&(r.filter==="all"||["info","warning","error","debug"].includes(r.filter))&&(this.filter=r.filter),typeof r.autoScroll=="boolean"&&(this.autoScroll=r.autoScroll),this.updateToolbar())}async saveSettings(){await this.setDialogSetting({filter:this.filter,autoScroll:this.autoScroll})}};mn.styles=Mt`
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
    `;Ai([xt()],mn.prototype,"messages",2);Ai([xt()],mn.prototype,"autoScroll",2);Ai([xt()],mn.prototype,"filter",2);mn=Ai([yt("k-log-terminal")],mn);var nu=Object.defineProperty,iu=Object.getOwnPropertyDescriptor,lr=(r,e,t,n)=>{for(var i=n>1?void 0:n?iu(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&nu(e,t,i),i};let Ht=class extends yn{constructor(){super(...arguments),this.cmd="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.params={},this.placement="bottom-start",this.dropdownContributions=[]}handleClick(){!this.disabled&&this.cmd&&this.executeCommand(this.cmd,this.params)}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}getKeybinding(){if(!this.cmd)return null;const r=ka.getKeyBindingsForCommand(this.cmd);return r.length>0?r[0]:null}doBeforeUI(){this.dropdown&&(this.loadDropdownContributions(),Wt(Yr,r=>{this.dropdown&&r.target===this.dropdown&&(this.dropdownContributions=r.contributions,this.requestUpdate())}))}loadDropdownContributions(){this.dropdown&&(this.dropdownContributions=Ye.getContributions(this.dropdown),this.requestUpdate())}renderContribution(r){if("command"in r){const e=r,t=e.disabled?.get();return j`
                <k-command 
                    cmd="${e.command}"
                    icon="${e.icon||""}"
                    ?disabled="${t}">
                    ${e.label}
                </k-command>
            `}if("html"in r){const t=r.html;return t instanceof Function?t():Bn(t)}return vt}render(){const r=this.getKeybinding();return this.isInDropdown()?j`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${()=>this.handleClick()}>
                    <k-icon name="${this.icon}" label="${this.title}" slot="icon"></k-icon>
                    <slot></slot>
                    ${r?j`<span class="keybinding">${r}</span>`:""}
                </wa-dropdown-item>
            `:this.dropdown?j`
                <wa-dropdown placement=${this.placement}>
                    <wa-button 
                        slot="trigger"
                        appearance=${this.appearance}
                        size=${this.size}
                        ?disabled=${this.disabled}
                        with-caret
                        title=${r?`${this.title} (${r})`:this.title}>
                        <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                        <slot></slot>
                    </wa-button>
                    
                    ${this.title?j`
                        <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${this.title}
                        </h6>
                    `:vt}
                    
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
                    `:vt}
                </wa-dropdown>
            `:j`
            <wa-button
                appearance=${this.appearance}
                size=${this.size}
                ?disabled=${this.disabled}
                title=${r?`${this.title} (${r})`:this.title}
                @click=${()=>this.handleClick()}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};Ht.styles=Mt`
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
    `;lr([Te()],Ht.prototype,"cmd",2);lr([Te()],Ht.prototype,"title",2);lr([Te()],Ht.prototype,"icon",2);lr([Te({type:Boolean})],Ht.prototype,"disabled",2);lr([Te()],Ht.prototype,"appearance",2);lr([Te()],Ht.prototype,"size",2);lr([Te({type:Object,attribute:!1})],Ht.prototype,"params",2);lr([Te()],Ht.prototype,"dropdown",2);lr([Te()],Ht.prototype,"placement",2);lr([xt()],Ht.prototype,"dropdownContributions",2);Ht=lr([yt("k-command")],Ht);var su=Object.defineProperty,au=Object.getOwnPropertyDescriptor,Dr=(r,e,t,n)=>{for(var i=n>1?void 0:n?au(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&su(e,t,i),i};let yr=class extends yn{constructor(){super(...arguments),this.title="",this.disabled=!1,this.appearance="plain",this.variant="neutral",this.size="small"}handleClick(r){!this.disabled&&this.action&&(r.stopPropagation(),this.action(r))}isInDropdown(){return!!this.closest("wa-dropdown, wa-dropdown-menu")}render(){return this.isInDropdown()?j`
                <wa-dropdown-item 
                    ?disabled=${this.disabled}
                    @click=${r=>this.handleClick(r)}>
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
                @click=${r=>this.handleClick(r)}>
                <k-icon slot="start" name="${this.icon}" label="${this.title}"></k-icon>
                <slot></slot>
            </wa-button>
        `}};yr.styles=Mt`
        :host {
            display: inline-block;
        }
    `;Dr([Te({type:Object,attribute:!1})],yr.prototype,"action",2);Dr([Te()],yr.prototype,"title",2);Dr([Te()],yr.prototype,"icon",2);Dr([Te({type:Boolean})],yr.prototype,"disabled",2);Dr([Te()],yr.prototype,"appearance",2);Dr([Te()],yr.prototype,"variant",2);Dr([Te()],yr.prototype,"size",2);yr=Dr([yt("k-action")],yr);var ou=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,Qt=(r,e,t,n)=>{for(var i=n>1?void 0:n?lu(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&ou(e,t,i),i};let Bt=class extends yn{constructor(){super(...arguments),this.target="",this.title="",this.disabled=!1,this.appearance="plain",this.size="small",this.placement="bottom-start",this.tabContributions=[],this.drawerOpen=!1,this.drawerSize="50vw",this.drawerRef=mr(),this.tabsRef=mr(),this.resizeHandleRef=mr(),this.resizing=null}getDrawerTabsId(){return`fastviews-drawer-tabs-${this.target}`}handleTabClick(r){if(!this.disabled)if(this.containerId){const e=document.querySelector(`k-tabs#${this.containerId}`);if(!e){console.error(`k-fastviews: Tab container with id "${this.containerId}" not found`);return}e.open(r)}else this.drawerOpen=!0,this.updateComplete.then(()=>{const e=this.tabsRef.value;e&&e.open(r)})}handleDrawerHide(){this.drawerOpen=!1}startResize(r){r.preventDefault(),r.stopPropagation();const e=this.drawerRef.value;if(!e)return;let n=(()=>{const a=e.shadowRoot?.querySelector('[part="panel"]');if(a&&a.offsetWidth>0)return a.offsetWidth;const y=(window.getComputedStyle(e).getPropertyValue("--size")||this.drawerSize).match(/^(\d+(?:\.\d+)?)(px|vw|vh|%)$/);if(y){const T=parseFloat(y[1]),w=y[2];if(w==="px")return T;if(w==="vw")return T/100*window.innerWidth;if(w==="vh")return T/100*window.innerHeight;if(w==="%")return T/100*window.innerWidth}return 0})();n===0&&(n=window.innerWidth*.5);const i=a=>{this.resizing&&(a.preventDefault(),a.stopPropagation(),this.resizing.rafId!==null&&cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=requestAnimationFrame(()=>{if(!this.resizing)return;const c=this.resizing.startX-a.clientX,f=Math.round(this.resizing.startSize+c),y=200,T=Math.round(window.innerWidth*.9);if(f>=y&&f<=T){this.drawerSize=`${f}px`;const w=this.drawerRef.value;w&&(w.style.setProperty("--size",this.drawerSize),w.style.setProperty("transition","none"))}this.resizing.rafId=null}))},o=()=>{if(this.resizing){this.resizing.rafId!==null&&(cancelAnimationFrame(this.resizing.rafId),this.resizing.rafId=null),document.removeEventListener("mousemove",this.resizing.handleMouseMove),document.removeEventListener("mouseup",this.resizing.handleMouseUp),document.body.style.cursor="",document.body.style.userSelect="";const a=this.drawerRef.value;a&&a.style.removeProperty("transition"),this.resizing=null}};this.resizing={startX:r.clientX,startSize:n,handleMouseMove:i,handleMouseUp:o,rafId:null},document.addEventListener("mousemove",i,{passive:!1}),document.addEventListener("mouseup",o,{passive:!1}),document.body.style.cursor="col-resize",document.body.style.userSelect="none"}doBeforeUI(){this.target&&(this.loadTabContributions(),Wt(Yr,r=>{this.target&&r.target===this.target&&this.loadTabContributions()}))}loadTabContributions(){if(!this.target)return;const r=Ye.getContributions(this.target);this.tabContributions=r.filter(e=>"name"in e),this.requestUpdate()}renderTabContribution(r){const e=r.disabled?.get();return j`
            <wa-dropdown-item 
                ?disabled=${e}
                @click=${()=>this.handleTabClick(r)}>
                <k-icon name="${r.icon||""}" label="${r.label}" slot="icon"></k-icon>
                ${r.label}
            </wa-dropdown-item>
        `}render(){return this.target?this.tabContributions.length===0?vt:j`
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
                
                ${this.title?j`
                    <h6 style="padding: var(--wa-space-xs) var(--wa-space-s); margin: 0; color: var(--wa-color-neutral-50); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${this.title}
                    </h6>
                `:vt}
                
                ${this.tabContributions.map(r=>this.renderTabContribution(r))}
            </wa-dropdown>

            ${this.containerId?vt:j`
                <wa-drawer 
                    ${gr(this.drawerRef)}
                    label="${this.title||"Fast Views"}"
                    placement="end"
                    ?open=${this.drawerOpen}
                    @wa-hide=${this.handleDrawerHide}
                    style="--size: ${this.drawerSize};">
                    <div 
                        ${gr(this.resizeHandleRef)}
                        class="resize-handle"
                        @mousedown=${this.startResize}>
                    </div>
                    <k-tabs 
                        ${gr(this.tabsRef)}
                        id="${this.getDrawerTabsId()}"
                        style="width: 100%; height: 100%; display: flex; flex-direction: column;">
                    </k-tabs>
                </wa-drawer>
            `}
        `:vt}};Bt.styles=Mt`
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
    `;Qt([Te()],Bt.prototype,"target",2);Qt([Te()],Bt.prototype,"title",2);Qt([Te()],Bt.prototype,"icon",2);Qt([Te({type:Boolean})],Bt.prototype,"disabled",2);Qt([Te()],Bt.prototype,"appearance",2);Qt([Te()],Bt.prototype,"size",2);Qt([Te()],Bt.prototype,"placement",2);Qt([Te()],Bt.prototype,"containerId",2);Qt([xt()],Bt.prototype,"tabContributions",2);Qt([xt()],Bt.prototype,"drawerOpen",2);Qt([xt()],Bt.prototype,"drawerSize",2);Bt=Qt([yt("k-fastviews")],Bt);var cu=Object.defineProperty,uu=Object.getOwnPropertyDescriptor,ys=(r,e,t,n)=>{for(var i=n>1?void 0:n?uu(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&cu(e,t,i),i};let Wn=class extends yn{constructor(){super(...arguments),this.message="No content.",this.icon="info-circle"}render(){return j`
            <h3>
                <wa-icon name=${this.icon} label="${this.message}"></wa-icon>
                ${this.message}
            </h3>
        `}};Wn.styles=Mt`
        :host {
            display: flex;
            margin: 10px;
        }

        * {
            flex: 1;
        }
    `;ys([Te()],Wn.prototype,"message",2);ys([Te()],Wn.prototype,"icon",2);Wn=ys([yt("k-no-content")],Wn);Pe.registerExtension({id:"system.git",name:"Git Support",description:"Git commands and UI elements",loader:()=>at(()=>import("./git-extension-D7HkdJaR.js"),__vite__mapDeps([0,1,2])),icon:"code-branch",experimental:!0});Pe.registerExtension({id:"system.pyterminal",name:"Python terminal",description:"Python terminal view",loader:()=>at(()=>import("./pyterminal-extension-D9_27bUb.js"),__vite__mapDeps([3,1,2,4])),icon:"k python",experimental:!0});Pe.registerExtension({id:"system.linuxterminal",name:"Linux terminal",description:"Linux terminal view",loader:()=>at(()=>import("./k-linuxterminal-EJIbwrWo.js"),__vite__mapDeps([5,1,2,4])),icon:"terminal",experimental:!0});Pe.registerExtension({id:"system.webllm",name:"WebLLM",description:"In-Browser LLM inference",loader:()=>at(()=>import("./webllmservice-_whJ3rvU.js"),__vite__mapDeps([6,1,2])),icon:"robot"});Pe.registerExtension({id:"system.p12splitter",name:".p12 file splitter",description:"Adds a command to split/separate a .p12 file into private/public and additional .pem files",loader:()=>at(()=>import("./p12-splitter-MGuGrFZF.js"),__vite__mapDeps([7,1,2])),icon:"certificate"});Pe.registerExtension({id:"system.pythonpackagemanager",name:"Python Package Manager",description:"Manage Python packages for notebooks and other Python-based extensions",loader:()=>at(()=>import("./package-manager-extension-C3JHFYay.js"),__vite__mapDeps([8,1,2])),icon:"box"});Pe.registerExtension({id:"system.notebook",name:"Jupyter-like Notebook Editor",description:"View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",loader:()=>at(()=>import("./notebook-extension-Co02v1S3.js"),__vite__mapDeps([9,1,2,10,11,8])),icon:"k jupyter",dependencies:["system.pythonpackagemanager"]});Pe.registerExtension({id:"system.commandpalette",name:"Command Palette",description:"VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",loader:()=>at(()=>import("./command-palette-extension-97smYzj-.js"),__vite__mapDeps([12,1,2])),icon:"terminal"});Pe.registerExtension({id:"system.download",name:"Download Files",description:"Download files from URLs to the workspace",loader:()=>at(()=>import("./download-extension-81kkSf14.js"),__vite__mapDeps([13,1,2])),icon:"download"});Pe.registerExtension({id:"system.unzip",name:"Unzip Archives",description:"Extract zip archives to the workspace",loader:()=>at(()=>import("./unzip-extension-DgFHi5gz.js"),__vite__mapDeps([14,1,2])),icon:"box-archive"});Pe.registerExtension({id:"system.mdeditor",name:"Markdown Editor",description:"View and render Markdown (.md) files",loader:()=>at(()=>import("./md-editor-extension-Deu-wfgK.js"),__vite__mapDeps([15,1,2])),icon:"book"});Pe.registerExtension({id:"system.mediaviewer",name:"Media Viewer",description:"View PDF, image, and HTML files in the browser",loader:()=>at(()=>import("./media-viewer-extension-DcWQD9tM.js"),__vite__mapDeps([16,1,2])),icon:"image"});Pe.registerExtension({id:"system.monaco",name:"Monaco Code Editor",description:"Code editor with syntax highlighting, code completion, and Python execution support",loader:()=>at(()=>import("./monaco-editor-extension-tca-Dzeu.js"),__vite__mapDeps([17,10,1,2,11,8])),icon:"file-pen",dependencies:["system.pythonpackagemanager"]});Pe.registerExtension({id:"system.memoryusage",name:"Memory Usage Monitor",description:"Displays JavaScript heap memory usage in the bottom toolbar",loader:()=>at(()=>import("./memory-usage-extension-DPe2xHLU.js"),__vite__mapDeps([18,1,2])),icon:"microchip"});Pe.registerExtension({id:"system.webdav",name:"WebDAV Workspace",description:"Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",loader:()=>at(()=>import("./webdav-extension-DwNEJzC6.js"),__vite__mapDeps([19,1,2])),icon:"cloud"});Pe.registerExtension({id:"system.settings-tree",name:"Settings Tree Editor",description:"Tree-based editor for settings with in-place editing",loader:()=>at(()=>import("./settings-tree-extension-BU_BaMPX.js"),__vite__mapDeps([20,1,2])),icon:"sitemap"});Pe.registerExtension({id:"system.ai-system",name:"AI System",description:"Modern AI service with streaming support and agent workflows",loader:()=>at(()=>import("./ai-system-extension-DqqVWFHO.js"),__vite__mapDeps([21,1,2])),icon:"robot"});Pe.registerExtension({id:"system.rag-system",name:"RAG System",description:"Retrieval-Augmented Generation system for document indexing, search and retrieval",loader:()=>at(()=>import("./rag-system-extension-D7niKS_N.js").then(r=>r.b),__vite__mapDeps([22,1,2])),icon:"database",experimental:!0,dependencies:["system.ai-system"]});const Va="events/aiservice/streamStarted",Ga="events/aiservice/streamChunk",Ha="events/aiservice/streamComplete",li="events/aiservice/streamError",Ka="events/aiservice/aiConfigChanged",Ya="events/aiservice/agentWorkflowStarted",Ja="events/aiservice/agentWorkflowComplete",Za="events/aiservice/agentWorkflowError",Yn="aiservice.agents",Kt="aiservice.chatProviders",Nn="aiConfig",Qa={defaultProvider:"openai",providers:[]},Ji=10,Fp=Object.freeze(Object.defineProperty({__proto__:null,AI_CONFIG_TEMPLATE:Qa,CID_AGENTS:Yn,CID_CHAT_PROVIDERS:Kt,KEY_AI_CONFIG:Nn,MAX_TOOL_ITERATIONS:Ji,TOPIC_AGENT_WORKFLOW_COMPLETE:Ja,TOPIC_AGENT_WORKFLOW_ERROR:Za,TOPIC_AGENT_WORKFLOW_STARTED:Ya,TOPIC_AICONFIG_CHANGED:Ka,TOPIC_AI_STREAM_CHUNK:Ga,TOPIC_AI_STREAM_COMPLETE:Ha,TOPIC_AI_STREAM_ERROR:li,TOPIC_AI_STREAM_STARTED:Va},Symbol.toStringTag,{value:"Module"}));class Xa{constructor(){this.decoder=new TextDecoder}*processLines(e){for(const t of e)t.trim()!==""&&(yield t)}}class pu extends Xa{async*parse(e){let t="";try{for(;;){const{done:n,value:i}=await e.read();if(n)break;t+=this.decoder.decode(i,{stream:!0});const o=t.split(`
`);t=o.pop()||"";for(const a of this.processLines(o))if(a.startsWith("data: ")){const c=a.slice(6).trim();if(c==="[DONE]"){yield{type:"done",content:""};continue}try{const f=JSON.parse(c);if(f.error){yield{type:"error",content:f.error.message||"Unknown error",metadata:f.error};continue}const y=this.parseChunk(f);y&&(yield y)}catch{continue}}}if(t.trim()&&t.startsWith("data: ")){const n=t.slice(6).trim();if(n!=="[DONE]")try{const i=JSON.parse(n),o=this.parseChunk(i);o&&(yield o)}catch{}}yield{type:"done",content:""}}finally{e.releaseLock()}}parseChunk(e){const t=e.choices?.[0]?.delta,n=e.choices?.[0];if(t?.content)return{type:"token",content:t.content,message:{role:t.role||"assistant",content:n?.message?.content||t.content}};if(n?.message?.tool_calls){const i=this.parseToolCalls(n.message.tool_calls,!0);if(i.length>0)return{type:"token",content:"",toolCalls:i}}else if(t?.tool_calls||n?.delta?.tool_calls){const i=this.parseToolCalls(t?.tool_calls||n?.delta?.tool_calls||[],!1);if(i.length>0)return{type:"token",content:"",toolCalls:i}}return null}parseToolCalls(e,t=!1){return e.filter(n=>n.function!==void 0).map((n,i)=>({id:n.id||`call_${n.index!==void 0?n.index:i}_${Date.now()}`,type:"function",function:{name:n.function?.name||"",arguments:n.function?.arguments||(t?"{}":"")},_index:n.index!==void 0?n.index:i}))}}class du extends Xa{async*parse(e){let t="";try{for(;;){const{done:n,value:i}=await e.read();if(n)break;t+=this.decoder.decode(i,{stream:!0});const o=t.split(`
`);t=o.pop()||"";for(const a of this.processLines(o))try{const c=JSON.parse(a);if(c.error){yield{type:"error",content:c.error,metadata:c};continue}if(c.done){yield{type:"done",content:""};continue}c.message?.content?yield{type:"token",content:c.message.content,message:{role:c.message.role||"assistant",content:c.message.content}}:c.response&&(yield{type:"token",content:c.response,message:{role:"assistant",content:c.response}})}catch{continue}}if(t.trim())try{const n=JSON.parse(t);n.message?.content&&(yield{type:"token",content:n.message.content,message:{role:n.message.role||"assistant",content:n.message.content}})}catch{}yield{type:"done",content:""}}finally{e.releaseLock()}}}class eo{createParser(e,t){return e.includes("text/event-stream")||t.includes("openai")?new pu:new du}async*stream(e){const t={model:e.model,stream:!0,messages:e.messages,...e.chatConfig.parameters};e.tools&&e.tools.length>0&&(t.tools=e.tools,t.tool_choice="auto");const n=await fetch(e.chatConfig.chatApiEndpoint,{method:"POST",headers:{Authorization:`Bearer ${e.chatConfig.apiKey}`,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(t),signal:e.signal});if(!n.ok){const c=await n.text().catch(()=>"Unknown error");yield{type:"error",content:`HTTP ${n.status}: ${c}`,metadata:{status:n.status,statusText:n.statusText}};return}const i=n.headers.get("content-type")||"",o=n.body?.getReader();if(!o){yield{type:"error",content:"Response body is not readable"};return}const a=this.createParser(i,e.chatConfig.chatApiEndpoint);for await(const c of a.parse(o))yield c}}class hu extends eo{constructor(){super(...arguments),this.name="openai"}canHandle(e){return e.chatApiEndpoint.includes("openai")||e.chatApiEndpoint.includes("v1/chat/completions")}}class fu extends eo{constructor(){super(...arguments),this.name="ollama"}canHandle(e){return e.name.toLowerCase()==="ollama"||e.chatApiEndpoint.includes("ollama")||e.chatApiEndpoint.includes("localhost:11434")}}class mu{constructor(){this.providers=[],this.registerDefaultProviders()}registerDefaultProviders(){this.providers.push(new hu),this.providers.push(new fu)}registerProvider(e){this.providers.push(e)}getProvider(e){const t=this.providers.find(n=>n.canHandle(e));return t||this.providers[0]}getAllProviders(){return[...this.providers]}}class gu{getAgentContributions(){return Ye.getContributions(Yn)}filterAndSortAgents(e,t){return e.filter(n=>n.canHandle?n.canHandle(t):!0).sort((n,i)=>(i.priority||0)-(n.priority||0))}getDefaultAgent(){return{role:"assistant",label:"Assistant",description:"General assistant",sysPrompt:"You are a helpful AI assistant.",priority:0,tools:{enabled:!0}}}getMatchingAgents(e,t){const n=this.getAgentContributions();let i=n.filter(o=>t&&!t.includes(o.role)?!1:o.canHandle?o.canHandle(e):!0);if(t&&t.length>0){if(i=i.sort((o,a)=>(a.priority||0)-(o.priority||0)),i.length===0){const o=t.includes("assistant")?"assistant":t[0];if(o==="assistant")i.push(this.getDefaultAgent());else{const a=n.find(c=>c.role===o);a?i.push(a):i.push(this.getDefaultAgent())}}}else i=this.filterAndSortAgents(i,e),i.length===0&&i.push(this.getDefaultAgent());return i}}class to{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}commandToTool(e,t){const n={},i=[];return e.parameters?.forEach(c=>{const f=this.sanitizeFunctionName(c.name);n[f]={type:c.type||"string",description:c.description,...c.allowedValues&&{enum:c.allowedValues}},c.required===!0&&i.push(f)}),{type:"function",function:{name:this.sanitizeFunctionName(e.id),description:e.description||e.name,parameters:{type:"object",properties:n,required:i}}}}getAvailableTools(e,t){const n=Le.listCommands();let i=Object.values(n);return t&&(i=i.filter(o=>t(o,e))),i.map(o=>this.commandToTool(o,e))}}class vu{constructor(){this.toolRegistry=new to,this.enhancers=[]}addEnhancer(e){this.enhancers.push(e)}getSysPrompt(e){const t=e.sysPrompt;return typeof t=="function"?t():t}rewriteChatHistoryForAgent(e,t){return e.map(n=>n.role==="user"?{role:n.role,content:n.content}:n.role===t?{role:"assistant",content:n.content}:{role:"user",content:`***Agent '${n.role}' replied:***
${n.content}`})}async enhancePrompt(e,t,n){let i=e;const o=[...t.promptEnhancers||[],...this.enhancers].sort((a,c)=>(c.priority||0)-(a.priority||0));for(const a of o)i=await a.enhance(i,n);return i}async build(e,t,n,i){i?.beforeSend&&await i.beforeSend(t,n);const o=this.sanitizeMessagesForAPI(t),a=this.rewriteChatHistoryForAgent(o,e.role),c=a.length-1;let f=a[c],y;e.tools?.enabled&&(y=this.toolRegistry.getAvailableTools(n,e.tools.commandFilter));const T=await this.enhancePrompt(f.content,e,n);f.content=T;const w=this.getSysPrompt(e);return a.unshift({role:"system",content:w}),{messages:a,userPromptIndex:c,tools:y}}sanitizeMessageForAPI(e){const t={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(t.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(t.tool_calls=e.tool_calls),t}sanitizeMessagesForAPI(e){return e.map(t=>this.sanitizeMessageForAPI(t))}}class yu{constructor(){this.processors=[]}addProcessor(e){this.processors.push(e)}getSortedProcessors(){return[...this.processors].sort((e,t)=>(t.priority||0)-(e.priority||0))}async process(e,t,n){let i={...e};const o=[...t.messageProcessors||[],...this.processors].sort((c,f)=>(f.priority||0)-(c.priority||0));for(const c of o)i=await c.process(i,n);const a=i.actions?.some(c=>c.requiresAttention)||i.attentionRequests?.some(c=>c.requiresAction)||!1;return{...i,requiresAttention:a}}checkRequiresAttention(e){return e.actions?.some(t=>t.requiresAttention)||e.attentionRequests?.some(t=>t.requiresAction)||!1}}class bu{constructor(){this.accumulatedToolCalls=new Map,this.toolCallIndexMap=new Map}processChunk(e){if(e.type==="token"&&e.toolCalls&&e.toolCalls.length>0)for(const t of e.toolCalls){const n=t._index,i=t.id;let o,a;if(n!==void 0&&this.toolCallIndexMap.has(n)?(a=this.toolCallIndexMap.get(n),o=this.accumulatedToolCalls.get(a)):i&&this.accumulatedToolCalls.has(i)?(a=i,o=this.accumulatedToolCalls.get(a)):(a=i||`call_${n!==void 0?n:Date.now()}_${Math.random()}`,o=void 0),o){const c=o.function.arguments||"",f=t.function.arguments||"",y=c+f;this.accumulatedToolCalls.set(a,{id:a,type:t.type||o.type,function:{name:t.function.name||o.function.name,arguments:y}}),n!==void 0&&!this.toolCallIndexMap.has(n)&&this.toolCallIndexMap.set(n,a)}else this.accumulatedToolCalls.set(a,{...t,id:a}),n!==void 0&&this.toolCallIndexMap.set(n,a)}}getFinalToolCalls(){return Array.from(this.accumulatedToolCalls.values()).filter(e=>e.function.name&&e.function.name.trim().length>0).map(e=>{let t=e.function.arguments||"";return(!t||t.trim()==="")&&(t="{}"),{...e,function:{...e.function,arguments:t}}})}reset(){this.accumulatedToolCalls.clear(),this.toolCallIndexMap.clear()}}class ro{sanitizeFunctionName(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^[^a-zA-Z]/,"cmd_$&").replace(/_+/g,"_").replace(/^_|_$/g,"")}findCommand(e,t){const n=e.function.name,i=Le.getCommand(n);if(i)return i;const o=Le.listCommands();for(const[a,c]of Object.entries(o))if(this.sanitizeFunctionName(a)===n)return c;return null}parseArguments(e){if(!e||e.trim()===""||e==="{}")return{};try{const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch(t){const n=t instanceof Error?t.message:String(t);return console.error(`[ToolExecutor] Failed to parse arguments: ${e} - ${n}`),{}}}sanitizeArguments(e,t){if(!t||!t.parameters||!e||typeof e!="object")return e||{};const n={};return t.parameters.forEach(i=>{const o=this.sanitizeFunctionName(i.name);o in e&&(n[i.name]=e[o])}),n}async executeToolCall(e,t){try{const n=this.findCommand(e,t),i=n?.id||e.function.name,o=e.function.arguments||"{}",a=this.parseArguments(o),c=this.sanitizeArguments(a,n),f=Le.createExecutionContext(c),y={...t,...f,params:c};let T=await Le.execute(i,y);const x={success:!0,message:`Command "${n?.name||i}" executed successfully`,command:i};if(c&&typeof c=="object"&&Object.keys(c).length>0&&(x.parameters=c),T){let I=T;if(I instanceof Promise&&(I=await I),x.result=I,n?.output&&n.output.length>0){const z=n.output.map(B=>`${B.name}: ${B.description||B.type||"value"}`).join(", ");x.output=z}}return{id:e.id,result:x}}catch(n){const i=n instanceof Error?n.message:String(n);let o=null;try{o=this.findCommand(e,t)}catch{o=null}const a=o?.name||e.function.name;let c=i;return i.includes("No handler found")||i.includes("No handlers registered")?c=`Command "${a}" cannot be executed. ${i}. This usually means the command is not available in the current context (e.g., a map editor may not be open or active).`:(i.includes("not available")||i.includes("GsMapEditor"))&&(c=`Command "${a}" cannot be executed: ${i}. Please ensure the required editor or component is open and active.`),{id:e.id,result:null,error:c}}}async executeToolCalls(e,t){const n=[];for(const i of e){const o=await this.executeToolCall(i,t);n.push(o)}return n}createToolCallAccumulator(){return new bu}createToolCallSignature(e){const t=e.function.arguments||"{}";let n={};try{const o=JSON.parse(t);n=o&&typeof o=="object"?o:{}}catch{n={}}const i=n&&typeof n=="object"?Object.keys(n).sort().reduce((o,a)=>(o[a]=n[a],o),{}):{};return`${e.function.name}:${JSON.stringify(i)}`}}const zp=Object.freeze(Object.defineProperty({__proto__:null,ToolExecutor:ro},Symbol.toStringTag,{value:"Module"}));class wu{async execute(e,t,n,i){const o=t.chatConfig;if(!o)throw new Error("Chat config is required");const a=e.map(async c=>{try{await i(c,t.chatContext.history,n.sharedState,o,t,n)}catch(f){const y=f instanceof Error?f:new Error(String(f));n.errors.set(c.role,y),t.onAgentError?.(c.role,y)}});await Promise.all(a)}}class xu{async execute(e,t,n,i){const o=t.chatConfig;if(!o)throw new Error("Chat config is required");let a=[...t.chatContext.history],c={...n.sharedState};for(const f of e)try{const y=this.createAgentContextWithPreviousAgents(c,t,n),T=await i(f,a,c,o,t,n);if(!T)break;const w=this.updateWorkflowState(T,a,c,y,n);a=w.currentMessages,c=w.accumulatedState}catch(y){const T=y instanceof Error?y:new Error(String(y));n.errors.set(f.role,T),t.onAgentError?.(f.role,T);break}}createAgentContextWithPreviousAgents(e,t,n){return{...e,...t.callContext.getProxy(),previousAgents:Array.from(n.messages.entries()).map(([i,o])=>({role:i,content:o.content}))}}updateWorkflowState(e,t,n,i,o){return t.push(e),n={...n,...i,message:e},o.sharedState=n,{currentMessages:t,accumulatedState:n}}}class Iu{async execute(e,t,n,i){const o=t.chatConfig;if(!o)throw new Error("Chat config is required");let a=[...t.chatContext.history],c={...n.sharedState};for(const f of e)try{const y=this.createAgentContextWithPreviousAgents(c,t,n);if(f.canHandle&&!f.canHandle(y))continue;const T=await i(f,a,c,o,t,n);if(!T)break;const w=this.updateWorkflowState(T,a,c,y,n);a=w.currentMessages,c=w.accumulatedState}catch(y){const T=y instanceof Error?y:new Error(String(y));n.errors.set(f.role,T),t.onAgentError?.(f.role,T)}}createAgentContextWithPreviousAgents(e,t,n){return{...e,...t.callContext.getProxy(),previousAgents:Array.from(n.messages.entries()).map(([i,o])=>({role:i,content:o.content}))}}updateWorkflowState(e,t,n,i,o){return t.push(e),n={...n,...i,message:e},o.sharedState=n,{currentMessages:t,accumulatedState:n}}}class ku{constructor(){this.strategies=new Map([["parallel",new wu],["sequential",new xu],["conditional",new Iu]])}registerStrategy(e,t){this.strategies.set(e,t)}async execute(e,t,n){const i=`workflow-${Date.now()}-${Math.random()}`,o=t.execution||"parallel",a=t.sharedState||{},c={messages:new Map,sharedState:{...a},errors:new Map};We(Ya,{workflowId:i,options:t});try{const f=this.strategies.get(o);if(!f)throw new Error(`Unknown workflow execution strategy: ${o}`);return await f.execute(e,t,c,n),We(Ja,{workflowId:i,results:c}),c}catch(f){const y=f instanceof Error?f:new Error(String(f));throw We(Za,{workflowId:i,error:y}),y}}}class Su{constructor(){this.activeRequests=new Map,this.providerFactory=new mu,this.agentRegistry=new gu,this.promptBuilder=new vu,this.messageProcessor=new yu,this.toolExecutor=new ro,this.workflowEngine=new ku,this.toolRegistry=new to,Wt(Br,()=>{this.aiConfig=void 0,this.checkAIConfig().then()}),this.checkAIConfig().then()}getAgentContributions(){return this.agentRegistry.getAgentContributions()}async getProviders(){return await this.checkAIConfig(),this.aiConfig?.providers||[]}async getDefaultProvider(){await this.checkAIConfig();const e=await this.getProviders();if(this.aiConfig?.defaultProvider){const t=e.find(n=>n.name===this.aiConfig?.defaultProvider);if(t)return t}return e[0]}async setDefaultProvider(e){return await this.checkAIConfig(),this.aiConfig&&(this.aiConfig.defaultProvider=e,await mt.set(Nn,this.aiConfig)),this.getDefaultProvider()}createMessage(e){return{role:"user",content:e}}registerStreamingFetcher(e){this.providerFactory.registerProvider(e)}async checkAIConfig(){if(!this.aiConfig){if(this.aiConfig=await mt.get(Nn),!this.aiConfig){const e={...Qa,providers:[]};await mt.set(Nn,e),this.aiConfig=await mt.get(Nn)}We(Ka,this.aiConfig)}}createAgentContext(e,t,n={}){return{...e,...t.getProxy(),...n}}createFinalMessage(e,t){return{role:e.role,content:t.content,actions:t.actions,requiresAttention:t.requiresAttention,attentionRequests:t.attentionRequests,canContinue:t.canContinue}}async handleUserAttention(e,t,n,i){if(!t.requiresAttention||!n.userAttentionHandler)return!0;const o=[];if(t.attentionRequests&&o.push(...t.attentionRequests),t.actions)for(const f of t.actions)f.requiresAttention&&f.attentionRequest&&o.push(f.attentionRequest);if(o.length===0)return!0;if(i.pendingAttention||(i.pendingAttention=new Map),i.pendingAttention.set(e,o),n.onAttentionRequest)for(const f of o)n.onAttentionRequest(e,f);if(n.pauseOnAttention)return i.paused=!0,i.continuationToken=`${e}-${Date.now()}-${Math.random()}`,!1;const a=n.userAttentionHandler,c=this.createAgentContext(n.sharedState||{},n.callContext,{message:t});for(const f of o)if(a.onAttentionRequest){const y=await a.onAttentionRequest(f,c);if(f.requiresAction&&(y===!1||y===null))return!1;y&&typeof y=="string"&&(c[`attention_${f.type}_result`]=y)}else switch(f.type){case"confirmation":if(a.onConfirmation&&!await a.onConfirmation(f.message,c)&&f.requiresAction)return!1;break;case"input":if(a.onInput){const y=await a.onInput(f.message,void 0,c);if(!y&&f.requiresAction)return!1;y&&(c.attention_input_result=y)}break}return!0}async*streamCompletion(e){const t=`${Date.now()}-${Math.random()}`,n=new AbortController;this.activeRequests.set(t,n),e.signal&&e.signal.addEventListener("abort",()=>{n.abort()});const i=e.signal||n.signal;try{e.onStatus?.("starting"),We(Va,{requestId:t,options:e});const o=e.chatConfig||await this.getDefaultProvider(),a=this.sanitizeMessagesForAPI(e.chatContext.history),c=this.providerFactory.getProvider(o),f=this.toolExecutor.createToolCallAccumulator();let y="",T={role:"assistant",content:""};for await(const I of c.stream({model:o.model,messages:a,chatConfig:o,tools:e.tools,signal:i})){if(I.type==="error"){e.onStatus?.("error"),We(li,{requestId:t,chunk:I}),yield I;break}if(I.type==="token")f.processChunk(I),(!I.toolCalls||I.toolCalls.length===0)&&(y+=I.content,T.content=y),I.message?.role&&(T.role=I.message.role),I.content&&e.onToken?.(I.content),e.onStatus?.("streaming"),e.onProgress?.({received:y.length}),We(Ga,{requestId:t,chunk:I}),yield I;else if(I.type==="done"){e.onStatus?.("complete"),We(Ha,{requestId:t}),yield I;break}else yield I}const w=f.getFinalToolCalls();return{message:{role:T.role||"assistant",content:y||"",...w.length>0&&{toolCalls:w}}}}catch(o){if(o instanceof Error&&o.name==="AbortError")throw e.onStatus?.("error"),We(li,{requestId:t,error:"Request cancelled"}),o;e.onStatus?.("error");const a=o instanceof Error?o.message:String(o);throw We(li,{requestId:t,error:a}),yield{type:"error",content:a,metadata:{error:o}},o}finally{this.activeRequests.delete(t)}}async handleStreamingPromptDirect(e){const t=this.streamCompletion(e);let n;for(;;){if(n=await t.next(),n.done)return n.value.message;const i=n.value;if(i.type==="error")throw new Error(i.content);if(i.type==="done"){const o=await t.next();if(o.done&&o.value)return o.value.message;if(!o.done)continue;throw new Error("Stream completed without return value")}}}sanitizeMessageForAPI(e){const t={role:e.role,content:e.content};return"tool_call_id"in e&&e.tool_call_id&&(t.tool_call_id=e.tool_call_id),"tool_calls"in e&&e.tool_calls&&(t.tool_calls=e.tool_calls),t}sanitizeMessagesForAPI(e){return e.map(t=>this.sanitizeMessageForAPI(t))}async handleStreamingPrompt(e){this.getAgentContributions();const t=this.createAgentContext({},e.callContext,{userPrompt:e.chatContext.history[e.chatContext.history.length-1]?.content||""}),n=this.agentRegistry.getMatchingAgents(t),i=n.length>0?n.map(c=>c.role):["assistant"],o=await this.executeAgentWorkflow({chatContext:e.chatContext,chatConfig:e.chatConfig,callContext:e.callContext,execution:"parallel",stream:e.stream,signal:e.signal,onToken:(c,f)=>{e.onToken?.(f)},onStatus:(c,f)=>{e.onStatus?.(f)},roles:i}),a=Array.from(o.messages.values());return a.length===1?a[0]:a}async continueWorkflow(e,t,n){const i={sharedState:{...n.sharedState,...Object.fromEntries(t)}},o={...n,sharedState:i.sharedState,pauseOnAttention:!1};return this.executeAgentWorkflow(o)}cancelRequest(e){const t=this.activeRequests.get(e);return t?(t.abort(),this.activeRequests.delete(e),!0):!1}async executeAgentWorkflow(e){const t=this.createAgentContext(e.sharedState||{},e.callContext),n=this.agentRegistry.getMatchingAgents(t,e.roles);return this.workflowEngine.execute(n,e,async(i,o,a,c,f,y)=>this.executeAgent(i,o,a,c,f,y))}async executeAgent(e,t,n,i,o,a){o.onAgentStart?.(e.role);const c=this.createAgentContext(n,o.callContext,{userPrompt:t[t.length-1]?.content||""}),{messages:f,tools:y}=await this.promptBuilder.build(e,t,c,e.hooks),T=f.map(ve=>{const U={role:ve.role,content:ve.content};return ve.tool_call_id&&(U.tool_call_id=ve.tool_call_id),ve.tool_calls&&(U.tool_calls=ve.tool_calls),U});let w=await this.handleStreamingPromptDirect({chatContext:{history:T},chatConfig:i,callContext:o.callContext,stream:o.stream??!0,signal:o.signal,tools:y}),x=0;const I=[...f];for(;w.toolCalls&&w.toolCalls.length>0;){if(x++,x>Ji){console.warn(`[AIService] Maximum tool call iterations (${Ji}) reached`);break}let ve=[];if(o.requireToolApproval&&o.onToolApprovalRequest){const q=w.toolCalls.map(_e=>{const se=_e.function.arguments||"{}";let M={};try{M=JSON.parse(se)}catch{M={}}return`${_e.function.name}(${Object.entries(M).map(([ie,fe])=>`${ie}=${fe}`).join(", ")})`}).join(", "),J={toolCalls:w.toolCalls,message:`The AI wants to execute: ${q}`};await o.onToolApprovalRequest(e.role,J)?ve=await this.toolExecutor.executeToolCalls(w.toolCalls,c):ve=w.toolCalls.map(_e=>({id:_e.id,result:{success:!1,message:"Tool execution cancelled by user",cancelled:!0}}))}else ve=await this.toolExecutor.executeToolCalls(w.toolCalls,c);const U=ve.map(q=>({role:"tool",content:q.error?JSON.stringify({error:q.error}):JSON.stringify(q.result),tool_call_id:q.id})),L={role:"assistant",content:w.content||""};w.toolCalls&&w.toolCalls.length>0&&(L.tool_calls=w.toolCalls.filter(q=>q.function.name&&q.function.name.trim().length>0).map(q=>({id:q.id,type:q.type,function:{name:q.function.name,arguments:q.function.arguments||"{}"}}))),I.push(L,...U);const G=I;w=await this.handleStreamingPromptDirect({chatContext:{history:G.map(q=>({role:q.role,content:q.content,...q.tool_call_id&&{tool_call_id:q.tool_call_id},...q.tool_calls&&{tool_calls:q.tool_calls}}))},chatConfig:i,callContext:o.callContext,stream:o.stream??!0,signal:o.signal,tools:y});const F=w.content&&w.content.trim().length>0,O=w.toolCalls&&w.toolCalls.length>0;if(F&&!O)break;if(F&&O){console.warn("[AIService] Model provided content but also called tools - treating as completion");break}}const z=await this.messageProcessor.process(w,e,this.createAgentContext(n,o.callContext,{message:w}));e.hooks?.afterReceive&&await e.hooks.afterReceive(z,this.createAgentContext(n,o.callContext));const B=this.createFinalMessage(e,z);return!await this.handleUserAttention(e.role,B,o,a)&&o.pauseOnAttention?null:(a.messages.set(e.role,B),o.onAgentComplete?.(e.role,B),B)}}const qp=new Su,Cu=`You are a helpful assistant designed to guide users in programming tasks within a WebGIS called "geo!space".
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
The dependencies within the requirements.txt are installed before any code is executed.`,Au=`You are a JavaScript programming assistant for the geo!space IDE.
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
\`\`\``,no=r=>r&&typeof r.getEditor=="function"&&typeof r.getLanguage=="function",Eu={enhance:async(r,e)=>{const t=e.activeEditor;if(!no(t))return r;const n=t.getEditor(),i=n.getModel(),o=i.getValueInRange(n.getSelection()),a=t.input?.data.getWorkspacePath();return o?`${r}

 Code selection within file "${a}":
${o}`:`${r}

Code in file "${a}":
${i.getValue()}`}},io=(r,e,t)=>({label:t,description:`${t}`,role:`${r==="python"?"py":"js"}-programmer`,icon:"code",sysPrompt:e,canHandle:n=>{const i=n.activeEditor;return no(i)&&i.getLanguage()===r},promptEnhancers:[Eu]});Ye.registerContribution(Yn,io("python",Cu,"Python Assistant"));Ye.registerContribution(Yn,io("javascript",Au,"JavaScript Assistant"));Ye.registerContribution(Kt,{target:Kt,label:"Ollama",provider:{name:"ollama",model:"gemma3:12b",chatApiEndpoint:"http://localhost:11434/v1/chat/completions",apiKey:""}});Ye.registerContribution(Kt,{target:Kt,label:"OpenAI",provider:{name:"openai",model:"gpt-4.1",chatApiEndpoint:"https://api.openai.com/v1/chat/completions",apiKey:"<your api key>"}});Ye.registerContribution(Kt,{target:Kt,label:"Groq",provider:{name:"groq",model:"llama-3.1-8b-instant",chatApiEndpoint:"https://api.groq.com/openai/v1/chat/completions",apiKey:"<your api key>"}});Ye.registerContribution(Kt,{target:Kt,label:"Cerebras",provider:{name:"cerebras",model:"llama3.1-8b",chatApiEndpoint:"https://api.cerebras.ai/v1/chat/completions",apiKey:"<your api key>"}});Ye.registerContribution(Kt,{target:Kt,label:"WebLLM",provider:{name:"webllm",model:"gemma-2-9b-it-q4f16_1-MLC",chatApiEndpoint:"",apiKey:"",parameters:{context_window_size:4096}}});Ye.registerContribution(Kt,{target:Kt,label:"Mistral",provider:{name:"mistral",model:"mistral-large-latest",chatApiEndpoint:"https://api.mistral.ai/v1/chat/completions",apiKey:"<your api key>",ocrApiEndpoint:"https://api.mistral.ai/v1/ocr"}});const Ot=Hr("MarketplaceRegistry"),Mi="events/marketplaceregistry/changed",Hs="marketplace.catalogUrls";class _u{constructor(){this.catalogUrls=[],this.loadingPromises=new Map,this.loadCatalogUrls().then(()=>{this.refreshCatalogs().catch(e=>{Ot.error(`Failed to refresh catalogs on init: ${e.message}`)})}),Wt(Mi,()=>{this.registerMarketplaceExtensions()})}async loadCatalogUrls(){try{const e=await mt.get(Hs);this.catalogUrls=Array.isArray(e)?e:[],Ot.debug(`Loaded ${this.catalogUrls.length} catalog URLs`)}catch(e){Ot.error(`Failed to load catalog URLs: ${e}`),this.catalogUrls=[]}}async saveCatalogUrls(){await mt.set(Hs,this.catalogUrls),We(Mi,{type:"catalogs",urls:this.catalogUrls})}async addCatalogUrl(e){if(!this.isValidUrl(e))throw new Error(`Invalid catalog URL: ${e}`);if(this.catalogUrls.includes(e)){Ot.debug(`Catalog URL already exists: ${e}`);return}this.catalogUrls.push(e),await this.saveCatalogUrls(),Ot.info(`Added catalog URL: ${e}`);try{await this.fetchCatalog(e),this.registerMarketplaceExtensions()}catch(t){Ot.warn(`Failed to fetch catalog immediately after adding: ${t}`)}}async removeCatalogUrl(e){const t=this.catalogUrls.indexOf(e);t!==-1&&(this.catalogUrls.splice(t,1),await this.saveCatalogUrls(),Ot.info(`Removed catalog URL: ${e}`))}getCatalogUrls(){return[...this.catalogUrls]}isValidUrl(e){try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}async fetchCatalog(e){const t=this.loadingPromises.get(e);if(t)return t;const n=(async()=>{try{Ot.debug(`Fetching catalog from: ${e}`);const i=await fetch(e,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const o=await i.json();if(!o.extensions||!Array.isArray(o.extensions))throw new Error("Invalid catalog format: extensions array is required");const a={name:o.name,description:o.description,extensions:o.extensions};return Ot.debug(`Successfully fetched catalog from ${e}: ${a.extensions.length} extensions`),a}catch(i){throw Ot.error(`Failed to fetch catalog from ${e}: ${i}`),i}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,n),n}async refreshCatalogs(){Ot.info(`Refreshing ${this.catalogUrls.length} catalogs...`);const e=this.catalogUrls.map(n=>this.fetchCatalog(n).catch(i=>(Ot.warn(`Failed to refresh catalog ${n}: ${i.message}`),null)));(await Promise.allSettled(e)).forEach((n,i)=>{n.status==="fulfilled"&&n.value&&n.value.extensions.forEach(a=>{if(!Pe.getExtensions().find(c=>c.id===a.id)){const c={...a,external:!0};Pe.registerExtension(c),Ot.debug(`Registered marketplace extension: ${a.id}`)}})}),We(Mi,{type:"refreshed"}),Ot.info("Catalog refresh completed")}registerMarketplaceExtensions(){}getMarketplaceExtensions(){return[]}getMarketplaceExtension(e){const t=Pe.getExtensions().find(n=>n.id===e);if(t&&t.external)return t}getCatalogsWithExtensions(){return[]}async installExtension(e){if(Pe.isEnabled(e.id)){Ot.info(`Extension ${e.id} is already installed`);return}Ot.info(`Installing marketplace extension: ${e.name} from ${e.url}`);const t={...e,external:!0};Pe.registerExtension(t),await Qr.loadExtensionFromUrl(e.url),Ot.info(`Successfully installed marketplace extension: ${e.id}`)}isMarketplaceExtension(e){const t=Pe.getExtensions().find(n=>n.id===e);return t!==void 0&&t.external===!0}}const so=new _u;qt.put("marketplaceRegistry",so);const Ou=Hr("MarketplaceCatalogContributions");so.addCatalogUrl("https://marketplace.kispace.de/externals.json").catch(r=>{Ou.warn(`Failed to add commercial catalog: ${r}`)});async function Ei(r,e=!0){const t=await Tt.getWorkspace();if(!t)return null;const n=r?.path;return e&&!n?null:{workspace:t,path:n||""}}async function Jn(r,e=!0){const t=await Ei(r,e);if(!t)return null;const{workspace:n,path:i}=t;if(!i)return null;try{const o=await n.getResource(i);return!o||!(o instanceof or)?null:{workspace:n,path:i,file:o}}catch{return null}}et({command:{id:"create_file",name:"Create new file",description:"Creates a new file within the workspace. For .geospace map files, use create_map_file instead.",keyBinding:"CTRL+N",parameters:[{name:"path",description:"the path including name of the file to be created, must be relative to the workspace",required:!1},{name:"contents",description:"the textual contents of the file",required:!1},{name:"ask",description:"whether to prompt the user for the file path",required:!1},{name:"extension",description:"required file extension (e.g., '.geospace'), will be appended if missing",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async({params:r})=>{let e=r?.path;const t=r?.contents,n=r?.ask,i=r?.extension;if((n||!e)&&(e=await Gn("Enter path to new file (directories will be created if not exist):",e||""),!e))return;const o=await Ei({path:e},!0);if(!o)return;const{workspace:a}=o;if(i&&!e.endsWith(i)&&(e+=i),await a.getResource(e)&&!await vn(`File "${e}" already exists. Do you want to overwrite it?`))return;const f=await a.getResource(e,{create:!0});return f?(t&&await f.saveContents(t),Ke.info("File created: "+e)):je("Could not create file: "+e),e}}});et({command:{id:"rename_resource",name:"Rename a resource (file or directory)",description:"Renames a resource (file or directory)",keyBinding:"F2",parameters:[{name:"path",description:"the path of the resource within the workspace to rename or the currently active selection",required:!1},{name:"newName",description:"the new name for the resource",required:!1}]},handler:{execute:async r=>{let e,t=r.params&&r.params.path;if(t){const o=await Tt.getWorkspace();o&&(e=await o.getResource(t))}if(e||(e=Vt.get()),!e){je("No resource to rename provided!");return}const n=e.getName(),i=r.params?.newName||await Gn(`Enter new name for "${n}":`,n);if(!(!i||i===n))try{await e.rename(i),Gt(`Resource renamed to: ${i}`)}catch(o){je(`Failed to rename ${n}: ${o.message}`)}}}});et({command:{id:"delete_resource",name:"Delete a resource (file or directory)",description:"Deletes a resource (file or directory)",parameters:[{name:"path",description:"the path of the resource within the workspace to delete or the currently active selection",required:!1},{name:"confirm",description:"whether to ask the user to confirm the deletion, true by default",required:!1}]},handler:{execute:async r=>{let e,t=r.params&&r.params.path;if(t){const o=await Tt.getWorkspace();o&&(e=await o.getResource(t))}if(e||(e=Vt.get()),!e){je("No resource to delete provided!");return}t=e.getWorkspacePath();const n=r.params&&r.params.confirm;let i=!0;if((n===void 0||n===!0)&&(i=await vn(`Are you sure you want to delete ${t}?`)),i)try{await e.delete(),Gt("Resource deleted: "+t)}catch(o){je(`Resource ${t} could not be deleted: ${o.message||o}`)}}}});et({command:{id:"load_workspace",name:"Local Folder",description:"Connect to a local folder using File System Access API",parameters:[]},handler:{execute:async r=>{await window.showDirectoryPicker({mode:"readwrite"}).then(e=>Tt.connectWorkspace(e)).catch(e=>{je(e.message)})}},contribution:{target:"filebrowser.connections",label:"Local Folder",icon:"folder-open"}});et({command:{id:"reload_workspace",name:"Reload workspace folder",description:"Reloads the active workspace folder",parameters:[]},handler:{execute:async r=>{const e=await Tt.getWorkspace();e||je("No workspace selected."),e.touch()}}});et({command:{id:"open_editor",name:"Open editor",description:"Opens a file in an editor",parameters:[{name:"path",description:"tha path of the file to open within the workspace",required:!0}]},handler:{execute:async r=>{const e=await Jn({path:r.params?.path});if(!e)return;const{file:t}=e;await Lr.loadEditor(t)}}});et({command:{id:"head_file",name:"Head - Show first lines",description:"Shows the first N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the beginning (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the first N lines of the file"}]},handler:{execute:async({params:r})=>{const e=await Jn(r);if(!e)return;const{file:t}=e,n=r?.lines?parseInt(r.lines,10):10;if(isNaN(n)||n<1){je("Number of lines must be a positive integer");return}try{const i=await t.getContents();if(typeof i!="string"){je("File is not a text file");return}return i.split(`
`).slice(0,n).join(`
`)}catch(i){je(`Failed to read file: ${i.message}`);return}}}});et({command:{id:"tail_file",name:"Tail - Show last lines",description:"Shows the last N lines of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0},{name:"lines",description:"number of lines to show from the end (default: 10)",type:"number",required:!1}],output:[{name:"content",description:"the last N lines of the file"}]},handler:{execute:async({params:r})=>{const e=await Jn(r);if(!e)return;const{file:t}=e,n=r?.lines?parseInt(r.lines,10):10;if(isNaN(n)||n<1){je("Number of lines must be a positive integer");return}try{const i=await t.getContents();if(typeof i!="string"){je("File is not a text file");return}return i.split(`
`).slice(-n).join(`
`)}catch(i){je(`Failed to read file: ${i.message}`);return}}}});et({command:{id:"cat_file",name:"Cat - Show file contents",description:"Shows the complete contents of a file",parameters:[{name:"path",description:"the path of the file to read",required:!0}],output:[{name:"content",description:"the complete contents of the file"}]},handler:{execute:async({params:r})=>{const e=await Jn(r);if(!e)return;const{file:t}=e;try{const n=await t.getContents();if(typeof n!="string"){je("File is not a text file");return}return n}catch(n){je(`Failed to read file: ${n.message}`);return}}}});et({command:{id:"wc_file",name:"Word count",description:"Counts lines, words, and characters in a file",parameters:[{name:"path",description:"the path of the file to analyze",required:!0}],output:[{name:"lines",description:"number of lines in the file"},{name:"words",description:"number of words in the file"},{name:"characters",description:"number of characters in the file"}]},handler:{execute:async({params:r})=>{const e=await Jn(r);if(!e)return;const{file:t}=e;try{const n=await t.getContents();if(typeof n!="string"){je("File is not a text file");return}const o=n.split(`
`).length,a=n.trim()===""?0:n.trim().split(/\s+/).filter(f=>f.length>0).length,c=n.length;return{lines:o,words:a,characters:c}}catch(n){je(`Failed to read file: ${n.message}`);return}}}});et({command:{id:"file_exists",name:"Check if file exists",description:"Checks if a file exists at the given path",parameters:[{name:"path",description:"the path of the file to check, relative to the workspace",required:!0}],output:[{name:"exists",description:"true if the file exists, false otherwise"}]},handler:{execute:async({params:r})=>{const e=await Ei(r);if(!e)return!1;const{workspace:t,path:n}=e;try{return await t.getResource(n)instanceof or}catch{return!1}}}});async function ao(r){const e=[],t=await r.listChildren(!0);for(const n of t)if(n instanceof or)e.push(n.getWorkspacePath());else if(n instanceof cn){const i=await ao(n);e.push(...i)}return e}et({command:{id:"ls",name:"List files",description:"Lists files from a directory. If recursive is provided, it traverses from the provided directory down to all leaves. If no directory is provided, it will traverse from the workspace root.",parameters:[{name:"path",description:"the path of the directory to list, relative to the workspace. If not provided, uses workspace root",required:!1},{name:"recursive",description:"whether to recursively traverse all subdirectories",type:"boolean",required:!1}],output:[{name:"files",description:"array of file objects with path and size information"}]},handler:{execute:async({params:r})=>{const e=await Ei(r,!1);if(!e)return je("No workspace available"),[];const{workspace:t,path:n}=e,i=r?.recursive===!0||r?.recursive==="true";try{let o=t;if(n){const a=await t.getResource(n);if(!a)return je(`Path not found: ${n}`),[];if(!(a instanceof cn))return je(`Path is not a directory: ${n}`),[];o=a}if(i){const a=await ao(o),c=[];for(const f of a){const y=await t.getResource(f);if(y instanceof or){const T=await y.size();c.push({path:f,size:T})}}return c}else{const a=await o.listChildren(!0),c=[];for(const f of a)if(f instanceof or){const y=await f.size();c.push({path:f.getWorkspacePath(),size:y})}return c}}catch(o){return je(`Failed to list files: ${o.message}`),[]}}}});var Sr={},nr={},Ks;function Tu(){if(Ks)return nr;Ks=1,Object.defineProperty(nr,"__esModule",{value:!0});function r(p){const s=p||"";return function(){throw new Error("this method "+s+" is abstract! (it has no implementation in class "+this.constructor.name+")")}}function e(p,s){if(!p)throw new Error(s||"Assertion failed")}function t(p,s,l){let d;Object.defineProperty(p,s,{get(){return d||(d=l.call(this)),d}})}function n(p){return p&&Object.assign({},p)}function i(p,s){const l=[];for(;s-- >0;)l.push(p());return l}function o(p,s){return new Array(s+1).join(p)}function a(p,s){return i(()=>p,s)}function c(p){const s=[];for(let l=0;l<p.length;l++){const d=p[l];p.lastIndexOf(d)!==l&&s.indexOf(d)<0&&s.push(d)}return s}function f(p){const s=[];return p.forEach(l=>{s.indexOf(l)<0&&s.push(l)}),s}function y(p){const s=p[0];return s===s.toUpperCase()}function T(p){return!y(p)}function w(p,s,l){const d=l||" ";return p.length<s?o(d,s-p.length)+p:p}function x(){this.strings=[]}x.prototype.append=function(p){this.strings.push(p)},x.prototype.contents=function(){return this.strings.join("")};const I=p=>String.fromCodePoint(parseInt(p,16));function z(p){if(p.charAt(0)==="\\")switch(p.charAt(1)){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"x":return I(p.slice(2,4));case"u":return p.charAt(2)==="{"?I(p.slice(3,-1)):I(p.slice(2,6));default:return p.charAt(1)}else return p}function B(p){if(p==null)return String(p);const s=Object.prototype.toString.call(p);try{let l;return p.constructor&&p.constructor.name?l=p.constructor.name:s.indexOf("[object ")===0?l=s.slice(8,-1):l=typeof p,l+": "+JSON.stringify(String(p))}catch{return s}}var de=Object.freeze({__proto__:null,abstract:r,assert:e,defineLazyProperty:t,clone:n,repeatFn:i,repeatStr:o,repeat:a,getDuplicates:c,copyWithoutDuplicates:f,isSyntactic:y,isLexical:T,padLeft:w,StringBuffer:x,unescapeCodePoint:z,unexpectedObjToString:B});const ve={Lu:new RegExp("\\p{Lu}","u"),Ll:new RegExp("\\p{Ll}","u"),Lt:new RegExp("\\p{Lt}","u"),Lm:new RegExp("\\p{Lm}","u"),Lo:new RegExp("\\p{Lo}","u"),Nl:new RegExp("\\p{Nl}","u"),Nd:new RegExp("\\p{Nd}","u"),Mn:new RegExp("\\p{Mn}","u"),Mc:new RegExp("\\p{Mc}","u"),Pc:new RegExp("\\p{Pc}","u"),Zs:new RegExp("\\p{Zs}","u"),L:new RegExp("\\p{Letter}","u"),Ltmo:new RegExp("\\p{Lt}|\\p{Lm}|\\p{Lo}","u")};class U{constructor(){if(this.constructor===U)throw new Error("PExpr cannot be instantiated -- it's abstract")}withSource(s){return s&&(this.source=s.trimmed()),this}}const L=Object.create(U.prototype),G=Object.create(U.prototype);class F extends U{constructor(s){super(),this.obj=s}}class O extends U{constructor(s,l){super(),this.from=s,this.to=l,this.matchCodePoint=s.length>1||l.length>1}}class q extends U{constructor(s){super(),this.index=s}}class J extends U{constructor(s){super(),this.terms=s}}class Se extends J{constructor(s,l,d){const v=s.rules[l].body;super([d,v]),this.superGrammar=s,this.name=l,this.body=d}}class _e extends J{constructor(s,l,d,v){const _=s.rules[l].body;super([...d,_,...v]),this.superGrammar=s,this.ruleName=l,this.expansionPos=d.length}}class se extends U{constructor(s){super(),this.factors=s}}class M extends U{constructor(s){super(),this.expr=s}}class ie extends M{}class fe extends M{}class ke extends M{}ie.prototype.operator="*",fe.prototype.operator="+",ke.prototype.operator="?",ie.prototype.minNumMatches=0,fe.prototype.minNumMatches=1,ke.prototype.minNumMatches=0,ie.prototype.maxNumMatches=Number.POSITIVE_INFINITY,fe.prototype.maxNumMatches=Number.POSITIVE_INFINITY,ke.prototype.maxNumMatches=1;class ae extends U{constructor(s){super(),this.expr=s}}class ee extends U{constructor(s){super(),this.expr=s}}class oe extends U{constructor(s){super(),this.expr=s}}class V extends U{constructor(s,l=[]){super(),this.ruleName=s,this.args=l}isSyntactic(){return y(this.ruleName)}toMemoKey(){return this._memoKey||Object.defineProperty(this,"_memoKey",{value:this.toString()}),this._memoKey}}class xe extends U{constructor(s){super(),this.category=s,this.pattern=ve[s]}}function $e(p,s){let l;return s?(l=new Error(s.getLineAndColumnMessage()+p),l.shortMessage=p,l.interval=s):l=new Error(p),l}function b(){return $e("Interval sources don't match")}function S(p){const s=new Error;return Object.defineProperty(s,"message",{enumerable:!0,get(){return p.message}}),Object.defineProperty(s,"shortMessage",{enumerable:!0,get(){return"Expected "+p.getExpectedText()}}),s.interval=p.getInterval(),s}function ue(p,s,l){const d=s?`Grammar ${p} is not declared in namespace '${s}'`:"Undeclared grammar "+p;return $e(d,l)}function Ae(p,s){return $e("Grammar "+p.name+" is already declared in this namespace")}function Qe(p){return $e(`Grammar '${p.name}' does not support incremental parsing`)}function Fe(p,s,l){return $e("Rule "+p+" is not declared in grammar "+s,l)}function R(p,s,l){return $e("Cannot override rule "+p+" because it is not declared in "+s,l)}function N(p,s,l){return $e("Cannot extend rule "+p+" because it is not declared in "+s,l)}function P(p,s,l,d){let v="Duplicate declaration for rule '"+p+"' in grammar '"+s+"'";return s!==l&&(v+=" (originally declared in '"+l+"')"),$e(v,d)}function H(p,s,l,d){return $e("Wrong number of parameters for rule "+p+" (expected "+s+", got "+l+")",d)}function ne(p,s,l,d){return $e("Wrong number of arguments for rule "+p+" (expected "+s+", got "+l+")",d)}function X(p,s,l){return $e("Duplicate parameter names in rule "+p+": "+s.join(", "),l)}function W(p,s){return $e("Invalid parameter to rule "+p+": "+s+" has arity "+s.getArity()+", but parameter expressions must have arity 1",s.source)}const re="NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";function ye(p,s){return $e("Cannot apply syntactic rule "+p+" from here (inside a lexical context)",s.source)}function Ne(p){const{ruleName:s}=p;return $e(`applySyntactic is for syntactic rules, but '${s}' is a lexical rule. `+re,p.source)}function ze(p){return $e("applySyntactic is not required here (in a syntactic context)",p.source)}function ge(p,s){return $e("Incorrect argument type: expected "+p,s.source)}function Ie(p){return $e("'...' can appear at most once in a rule body",p.source)}function De(p){const s=p._node;e(s&&s.isNonterminal()&&s.ctorName==="escapeChar_unicodeCodePoint");const l=p.children.slice(1,-1).map(v=>v.source),d=l[0].coverageWith(...l.slice(1));return $e(`U+${d.contents} is not a valid Unicode code point`,d)}function he(p,s){const l=s.length>0?s[s.length-1].args:[];let v="Nullable expression "+p.expr.substituteParams(l)+" is not allowed inside '"+p.operator+"' (possible infinite loop)";if(s.length>0){const _=s.map(D=>new V(D.ruleName,D.args)).join(`
`);v+=`
Application stack (most recent application last):
`+_}return $e(v,p.expr.source)}function dt(p,s,l,d){return $e("Rule "+p+" involves an alternation which has inconsistent arity (expected "+s+", got "+l+")",d.source)}function Ut(p){const s=p.map(l=>l.message);return $e(["Errors:"].concat(s).join(`
- `),p[0].interval)}function It(p,s,l,d){let v=d.slice(0,-1).map(Q=>{const me="  "+Q[0].name+" > "+Q[1];return Q.length===3?me+" for '"+Q[2]+"'":me}).join(`
`);v+=`
  `+s+" > "+p;let _="";p==="_iter"&&(_=[`
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,"  https://ohmjs.org/d/dsa for details."].join(`
`));const D=[`Missing semantic action for '${p}' in ${l} '${s}'.${_}`,"Action stack (most recent call last):",v].join(`
`),te=$e(D);return te.name="missingSemanticAction",te}function ht(p){if(p.length===1)throw p[0];if(p.length>1)throw Ut(p)}function kt(p){let s=0;return p.map(d=>{const v=d.toString();return s=Math.max(s,v.length),v}).map(d=>w(d,s))}function Yt(p,s,l){const d=p.length,v=p.slice(0,l),_=p.slice(l+s.length);return(v+s+_).substr(0,d)}function cr(...p){const s=this,{offset:l}=s,{repeatStr:d}=de,v=new x;v.append("Line "+s.lineNum+", col "+s.colNum+`:
`);const _=kt([s.prevLine==null?0:s.lineNum-1,s.lineNum,s.nextLine==null?0:s.lineNum+1]),D=(Y,K,ce)=>{v.append(ce+_[Y]+" | "+K+`
`)};s.prevLine!=null&&D(0,s.prevLine,"  "),D(1,s.line,"> ");const te=s.line.length;let Q=d(" ",te+1);for(let Y=0;Y<p.length;++Y){let K=p[Y][0],ce=p[Y][1];e(K>=0&&K<=ce,"range start must be >= 0 and <= end");const Ce=l-s.colNum+1;K=Math.max(0,K-Ce),ce=Math.min(ce-Ce,te),Q=Yt(Q,d("~",ce-K),K)}const me=2+_[1].length+3;return v.append(d(" ",me)),Q=Yt(Q,"^",s.colNum-1),v.append(Q.replace(/ +$/,"")+`
`),s.nextLine!=null&&D(2,s.nextLine,"  "),v.contents()}let Er=[];function Xt(p){Er.push(p)}function le(p){Er.forEach(s=>{s(p)}),Er=null}function _r(p,s){let l=1,d=1,v=0,_=0,D=null,te=null,Q=-1;for(;v<s;){const K=p.charAt(v++);K===`
`?(l++,d=1,Q=_,_=v):K!=="\r"&&d++}let me=p.indexOf(`
`,_);if(me===-1)me=p.length;else{const K=p.indexOf(`
`,me+1);D=K===-1?p.slice(me):p.slice(me,K),D=D.replace(/^\r?\n/,"").replace(/\r$/,"")}Q>=0&&(te=p.slice(Q,_).replace(/\r?\n$/,""));const Y=p.slice(_,me).replace(/\r$/,"");return{offset:s,lineNum:l,colNum:d,line:Y,prevLine:te,nextLine:D,toString:cr}}function wr(p,s,...l){return _r(p,s).toString(...l)}const jt=(()=>{let p=0;return s=>""+s+p++})();class ot{constructor(s,l,d){this.sourceString=s,this.startIdx=l,this.endIdx=d}get contents(){return this._contents===void 0&&(this._contents=this.sourceString.slice(this.startIdx,this.endIdx)),this._contents}get length(){return this.endIdx-this.startIdx}coverageWith(...s){return ot.coverage(...s,this)}collapsedLeft(){return new ot(this.sourceString,this.startIdx,this.startIdx)}collapsedRight(){return new ot(this.sourceString,this.endIdx,this.endIdx)}getLineAndColumn(){return _r(this.sourceString,this.startIdx)}getLineAndColumnMessage(){const s=[this.startIdx,this.endIdx];return wr(this.sourceString,this.startIdx,s)}minus(s){if(this.sourceString!==s.sourceString)throw b();return this.startIdx===s.startIdx&&this.endIdx===s.endIdx?[]:this.startIdx<s.startIdx&&s.endIdx<this.endIdx?[new ot(this.sourceString,this.startIdx,s.startIdx),new ot(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.endIdx&&s.endIdx<this.endIdx?[new ot(this.sourceString,s.endIdx,this.endIdx)]:this.startIdx<s.startIdx&&s.startIdx<this.endIdx?[new ot(this.sourceString,this.startIdx,s.startIdx)]:[this]}relativeTo(s){if(this.sourceString!==s.sourceString)throw b();return e(this.startIdx>=s.startIdx&&this.endIdx<=s.endIdx,"other interval does not cover this one"),new ot(this.sourceString,this.startIdx-s.startIdx,this.endIdx-s.startIdx)}trimmed(){const{contents:s}=this,l=this.startIdx+s.match(/^\s*/)[0].length,d=this.endIdx-s.match(/\s*$/)[0].length;return new ot(this.sourceString,l,d)}subInterval(s,l){const d=this.startIdx+s;return new ot(this.sourceString,d,d+l)}}ot.coverage=function(p,...s){let{startIdx:l,endIdx:d}=p;for(const v of s){if(v.sourceString!==p.sourceString)throw b();l=Math.min(l,v.startIdx),d=Math.max(d,v.endIdx)}return new ot(p.sourceString,l,d)};const Jt=65535;class Ue{constructor(s){this.source=s,this.pos=0,this.examinedLength=0}atEnd(){const s=this.pos>=this.source.length;return this.examinedLength=Math.max(this.examinedLength,this.pos+1),s}next(){const s=this.source[this.pos++];return this.examinedLength=Math.max(this.examinedLength,this.pos),s}nextCharCode(){const s=this.next();return s&&s.charCodeAt(0)}nextCodePoint(){const s=this.source.slice(this.pos++).codePointAt(0);return s>Jt&&(this.pos+=1),this.examinedLength=Math.max(this.examinedLength,this.pos),s}matchString(s,l){let d;if(l){for(d=0;d<s.length;d++){const v=this.next(),_=s[d];if(v==null||v.toUpperCase()!==_.toUpperCase())return!1}return!0}for(d=0;d<s.length;d++)if(this.next()!==s[d])return!1;return!0}sourceSlice(s,l){return this.source.slice(s,l)}interval(s,l){return new ot(this.source,s,l||this.pos)}}class m{constructor(s,l,d,v,_,D,te){this.matcher=s,this.input=l,this.startExpr=d,this._cst=v,this._cstOffset=_,this._rightmostFailurePosition=D,this._rightmostFailures=te,this.failed()&&(t(this,"message",function(){const Q="Expected "+this.getExpectedText();return wr(this.input,this.getRightmostFailurePosition())+Q}),t(this,"shortMessage",function(){const Q="expected "+this.getExpectedText(),me=_r(this.input,this.getRightmostFailurePosition());return"Line "+me.lineNum+", col "+me.colNum+": "+Q}))}succeeded(){return!!this._cst}failed(){return!this.succeeded()}getRightmostFailurePosition(){return this._rightmostFailurePosition}getRightmostFailures(){if(!this._rightmostFailures){this.matcher.setInput(this.input);const s=this.matcher._match(this.startExpr,{tracing:!1,positionToRecordFailures:this.getRightmostFailurePosition()});this._rightmostFailures=s.getRightmostFailures()}return this._rightmostFailures}toString(){return this.succeeded()?"[match succeeded]":"[match failed at position "+this.getRightmostFailurePosition()+"]"}getExpectedText(){if(this.succeeded())throw new Error("cannot get expected text of a successful MatchResult");const s=new x;let l=this.getRightmostFailures();l=l.filter(d=>!d.isFluffy());for(let d=0;d<l.length;d++)d>0&&(d===l.length-1?s.append(l.length>2?", or ":" or "):s.append(", ")),s.append(l[d].toString());return s.contents()}getInterval(){const s=this.getRightmostFailurePosition();return new ot(this.input,s,s)}}class k{constructor(){this.applicationMemoKeyStack=[],this.memo={},this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,this.currentLeftRecursion=void 0}isActive(s){return this.applicationMemoKeyStack.indexOf(s.toMemoKey())>=0}enter(s){this.applicationMemoKeyStack.push(s.toMemoKey())}exit(){this.applicationMemoKeyStack.pop()}startLeftRecursion(s,l){l.isLeftRecursion=!0,l.headApplication=s,l.nextLeftRecursion=this.currentLeftRecursion,this.currentLeftRecursion=l;const{applicationMemoKeyStack:d}=this,v=d.indexOf(s.toMemoKey())+1,_=d.slice(v);l.isInvolved=function(D){return _.indexOf(D)>=0},l.updateInvolvedApplicationMemoKeys=function(){for(let D=v;D<d.length;D++){const te=d[D];this.isInvolved(te)||_.push(te)}}}endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion}shouldUseMemoizedResult(s){if(!s.isLeftRecursion)return!0;const{applicationMemoKeyStack:l}=this;for(let d=0;d<l.length;d++){const v=l[d];if(s.isInvolved(v))return!1}return!0}memoize(s,l){return this.memo[s]=l,this.maxExaminedLength=Math.max(this.maxExaminedLength,l.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,l.rightmostFailureOffset),l}clearObsoleteEntries(s,l){if(s+this.maxExaminedLength<=l)return;const{memo:d}=this;this.maxExaminedLength=0,this.maxRightmostFailureOffset=-1,Object.keys(d).forEach(v=>{const _=d[v];s+_.examinedLength>l?delete d[v]:(this.maxExaminedLength=Math.max(this.maxExaminedLength,_.examinedLength),this.maxRightmostFailureOffset=Math.max(this.maxRightmostFailureOffset,_.rightmostFailureOffset))})}}const A="✗",u="✓",h="⋅",g="⇒",E="␉",C="␊",$="␍",Z={succeeded:1,isRootNode:2,isImplicitSpaces:4,isMemoized:8,isHeadOfLeftRecursion:16,terminatesLR:32};function pe(p){return a(" ",p).join("")}function be(p,s,l){const d=Be(p.slice(s,s+l));return d.length<l?d+a(" ",l-d.length).join(""):d}function Be(p){return typeof p=="string"?p.replace(/ /g,h).replace(/\t/g,E).replace(/\n/g,C).replace(/\r/g,$):String(p)}class Ee{constructor(s,l,d,v,_,D,te){this.input=s,this.pos=this.pos1=l,this.pos2=d,this.source=new ot(s,l,d),this.expr=v,this.bindings=D,this.children=te||[],this.terminatingLREntry=null,this._flags=_?Z.succeeded:0}get displayString(){return this.expr.toDisplayString()}clone(){return this.cloneWithExpr(this.expr)}cloneWithExpr(s){const l=new Ee(this.input,this.pos,this.pos2,s,this.succeeded,this.bindings,this.children);return l.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion,l.isImplicitSpaces=this.isImplicitSpaces,l.isMemoized=this.isMemoized,l.isRootNode=this.isRootNode,l.terminatesLR=this.terminatesLR,l.terminatingLREntry=this.terminatingLREntry,l}recordLRTermination(s,l){this.terminatingLREntry=new Ee(this.input,this.pos,this.pos2,this.expr,!1,[l],[s]),this.terminatingLREntry.terminatesLR=!0}walk(s,l){let d=s;typeof d=="function"&&(d={enter:d});function v(_,D,te){let Q=!0;d.enter&&d.enter.call(l,_,D,te)===Ee.prototype.SKIP&&(Q=!1),Q&&(_.children.forEach(me=>{v(me,_,te+1)}),d.exit&&d.exit.call(l,_,D,te))}this.isRootNode?this.children.forEach(_=>{v(_,null,0)}):v(this,null,0)}toString(){const s=new x;return this.walk((l,d,v)=>{if(!l)return this.SKIP;if(l.expr.constructor.name!=="Alt"){if(s.append(be(l.input,l.pos,10)+pe(v*2+1)),s.append((l.succeeded?u:A)+" "+l.displayString),l.isHeadOfLeftRecursion&&s.append(" (LR)"),l.succeeded){const D=Be(l.source.contents);s.append(" "+g+"  "),s.append(typeof D=="string"?'"'+D+'"':D)}s.append(`
`)}}),s.contents()}}Ee.prototype.SKIP={},Object.keys(Z).forEach(p=>{const s=Z[p];Object.defineProperty(Ee.prototype,p,{get(){return(this._flags&s)!==0},set(l){l?this._flags|=s:this._flags&=~s}})}),U.prototype.allowsSkippingPrecedingSpace=r("allowsSkippingPrecedingSpace"),L.allowsSkippingPrecedingSpace=G.allowsSkippingPrecedingSpace=V.prototype.allowsSkippingPrecedingSpace=F.prototype.allowsSkippingPrecedingSpace=O.prototype.allowsSkippingPrecedingSpace=xe.prototype.allowsSkippingPrecedingSpace=function(){return!0},J.prototype.allowsSkippingPrecedingSpace=M.prototype.allowsSkippingPrecedingSpace=oe.prototype.allowsSkippingPrecedingSpace=ee.prototype.allowsSkippingPrecedingSpace=ae.prototype.allowsSkippingPrecedingSpace=q.prototype.allowsSkippingPrecedingSpace=se.prototype.allowsSkippingPrecedingSpace=function(){return!1};let Ve;Xt(p=>{Ve=p});let qe;U.prototype.assertAllApplicationsAreValid=function(p,s){qe=0,this._assertAllApplicationsAreValid(p,s)},U.prototype._assertAllApplicationsAreValid=r("_assertAllApplicationsAreValid"),L._assertAllApplicationsAreValid=G._assertAllApplicationsAreValid=F.prototype._assertAllApplicationsAreValid=O.prototype._assertAllApplicationsAreValid=q.prototype._assertAllApplicationsAreValid=xe.prototype._assertAllApplicationsAreValid=function(p,s){},oe.prototype._assertAllApplicationsAreValid=function(p,s){qe++,this.expr._assertAllApplicationsAreValid(p,s),qe--},J.prototype._assertAllApplicationsAreValid=function(p,s){for(let l=0;l<this.terms.length;l++)this.terms[l]._assertAllApplicationsAreValid(p,s)},se.prototype._assertAllApplicationsAreValid=function(p,s){for(let l=0;l<this.factors.length;l++)this.factors[l]._assertAllApplicationsAreValid(p,s)},M.prototype._assertAllApplicationsAreValid=ae.prototype._assertAllApplicationsAreValid=ee.prototype._assertAllApplicationsAreValid=function(p,s){this.expr._assertAllApplicationsAreValid(p,s)},V.prototype._assertAllApplicationsAreValid=function(p,s,l=!1){const d=s.rules[this.ruleName],v=y(p)&&qe===0;if(!d)throw Fe(this.ruleName,s.name,this.source);if(!l&&y(this.ruleName)&&!v)throw ye(this.ruleName,this);const _=this.args.length,D=d.formals.length;if(_!==D)throw ne(this.ruleName,D,_,this.source);const te=Ve&&d===Ve.rules.applySyntactic;if(Ve&&d===Ve.rules.caseInsensitive&&!(this.args[0]instanceof F))throw ge('a Terminal (e.g. "abc")',this.args[0]);if(te){const me=this.args[0];if(!(me instanceof V))throw ge("a syntactic rule application",me);if(!y(me.ruleName))throw Ne(me);if(v)throw ze(this)}this.args.forEach(me=>{if(me._assertAllApplicationsAreValid(p,s,te),me.getArity()!==1)throw W(this.ruleName,me)})},U.prototype.assertChoicesHaveUniformArity=r("assertChoicesHaveUniformArity"),L.assertChoicesHaveUniformArity=G.assertChoicesHaveUniformArity=F.prototype.assertChoicesHaveUniformArity=O.prototype.assertChoicesHaveUniformArity=q.prototype.assertChoicesHaveUniformArity=oe.prototype.assertChoicesHaveUniformArity=xe.prototype.assertChoicesHaveUniformArity=function(p){},J.prototype.assertChoicesHaveUniformArity=function(p){if(this.terms.length===0)return;const s=this.terms[0].getArity();for(let l=0;l<this.terms.length;l++){const d=this.terms[l];d.assertChoicesHaveUniformArity();const v=d.getArity();if(s!==v)throw dt(p,s,v,d)}},Se.prototype.assertChoicesHaveUniformArity=function(p){const s=this.terms[0].getArity(),l=this.terms[1].getArity();if(s!==l)throw dt(p,l,s,this.terms[0])},se.prototype.assertChoicesHaveUniformArity=function(p){for(let s=0;s<this.factors.length;s++)this.factors[s].assertChoicesHaveUniformArity(p)},M.prototype.assertChoicesHaveUniformArity=function(p){this.expr.assertChoicesHaveUniformArity(p)},ae.prototype.assertChoicesHaveUniformArity=function(p){},ee.prototype.assertChoicesHaveUniformArity=function(p){this.expr.assertChoicesHaveUniformArity(p)},V.prototype.assertChoicesHaveUniformArity=function(p){},U.prototype.assertIteratedExprsAreNotNullable=r("assertIteratedExprsAreNotNullable"),L.assertIteratedExprsAreNotNullable=G.assertIteratedExprsAreNotNullable=F.prototype.assertIteratedExprsAreNotNullable=O.prototype.assertIteratedExprsAreNotNullable=q.prototype.assertIteratedExprsAreNotNullable=xe.prototype.assertIteratedExprsAreNotNullable=function(p){},J.prototype.assertIteratedExprsAreNotNullable=function(p){for(let s=0;s<this.terms.length;s++)this.terms[s].assertIteratedExprsAreNotNullable(p)},se.prototype.assertIteratedExprsAreNotNullable=function(p){for(let s=0;s<this.factors.length;s++)this.factors[s].assertIteratedExprsAreNotNullable(p)},M.prototype.assertIteratedExprsAreNotNullable=function(p){if(this.expr.assertIteratedExprsAreNotNullable(p),this.expr.isNullable(p))throw he(this,[])},ke.prototype.assertIteratedExprsAreNotNullable=ae.prototype.assertIteratedExprsAreNotNullable=ee.prototype.assertIteratedExprsAreNotNullable=oe.prototype.assertIteratedExprsAreNotNullable=function(p){this.expr.assertIteratedExprsAreNotNullable(p)},V.prototype.assertIteratedExprsAreNotNullable=function(p){this.args.forEach(s=>{s.assertIteratedExprsAreNotNullable(p)})};class ct{constructor(s){this.matchLength=s}get ctorName(){throw new Error("subclass responsibility")}numChildren(){return this.children?this.children.length:0}childAt(s){if(this.children)return this.children[s]}indexOfChild(s){return this.children.indexOf(s)}hasChildren(){return this.numChildren()>0}hasNoChildren(){return!this.hasChildren()}onlyChild(){if(this.numChildren()!==1)throw new Error("cannot get only child of a node of type "+this.ctorName+" (it has "+this.numChildren()+" children)");return this.firstChild()}firstChild(){if(this.hasNoChildren())throw new Error("cannot get first child of a "+this.ctorName+" node, which has no children");return this.childAt(0)}lastChild(){if(this.hasNoChildren())throw new Error("cannot get last child of a "+this.ctorName+" node, which has no children");return this.childAt(this.numChildren()-1)}childBefore(s){const l=this.indexOfChild(s);if(l<0)throw new Error("Node.childBefore() called w/ an argument that is not a child");if(l===0)throw new Error("cannot get child before first child");return this.childAt(l-1)}childAfter(s){const l=this.indexOfChild(s);if(l<0)throw new Error("Node.childAfter() called w/ an argument that is not a child");if(l===this.numChildren()-1)throw new Error("cannot get child after last child");return this.childAt(l+1)}isTerminal(){return!1}isNonterminal(){return!1}isIteration(){return!1}isOptional(){return!1}}class Re extends ct{get ctorName(){return"_terminal"}isTerminal(){return!0}get primitiveValue(){throw new Error("The `primitiveValue` property was removed in Ohm v17.")}}class it extends ct{constructor(s,l,d,v){super(v),this.ruleName=s,this.children=l,this.childOffsets=d}get ctorName(){return this.ruleName}isNonterminal(){return!0}isLexical(){return T(this.ctorName)}isSyntactic(){return y(this.ctorName)}}class Ft extends ct{constructor(s,l,d,v){super(d),this.children=s,this.childOffsets=l,this.optional=v}get ctorName(){return"_iter"}isIteration(){return!0}isOptional(){return this.optional}}U.prototype.eval=r("eval"),L.eval=function(p){const{inputStream:s}=p,l=s.pos,d=s.nextCodePoint();return d!==void 0?(p.pushBinding(new Re(String.fromCodePoint(d).length),l),!0):(p.processFailure(l,this),!1)},G.eval=function(p){const{inputStream:s}=p,l=s.pos;return s.atEnd()?(p.pushBinding(new Re(0),l),!0):(p.processFailure(l,this),!1)},F.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos;return s.matchString(this.obj)?(p.pushBinding(new Re(this.obj.length),l),!0):(p.processFailure(l,this),!1)},O.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos,d=this.matchCodePoint?s.nextCodePoint():s.nextCharCode();return d!==void 0&&this.from.codePointAt(0)<=d&&d<=this.to.codePointAt(0)?(p.pushBinding(new Re(String.fromCodePoint(d).length),l),!0):(p.processFailure(l,this),!1)},q.prototype.eval=function(p){return p.eval(p.currentApplication().args[this.index])},oe.prototype.eval=function(p){p.enterLexifiedContext();const s=p.eval(this.expr);return p.exitLexifiedContext(),s},J.prototype.eval=function(p){for(let s=0;s<this.terms.length;s++)if(p.eval(this.terms[s]))return!0;return!1},se.prototype.eval=function(p){for(let s=0;s<this.factors.length;s++){const l=this.factors[s];if(!p.eval(l))return!1}return!0},M.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos,d=this.getArity(),v=[],_=[];for(;v.length<d;)v.push([]),_.push([]);let D=0,te=l,Q;for(;D<this.maxNumMatches&&p.eval(this.expr);){if(s.pos===te)throw he(this,p._applicationStack);te=s.pos,D++;const ce=p._bindings.splice(p._bindings.length-d,d),Ce=p._bindingOffsets.splice(p._bindingOffsets.length-d,d);for(Q=0;Q<ce.length;Q++)v[Q].push(ce[Q]),_[Q].push(Ce[Q])}if(D<this.minNumMatches)return!1;let me=p.posToOffset(l),Y=0;if(D>0){const ce=v[d-1],Ce=_[d-1],He=Ce[Ce.length-1]+ce[ce.length-1].matchLength;me=_[0][0],Y=He-me}const K=this instanceof ke;for(Q=0;Q<v.length;Q++)p._bindings.push(new Ft(v[Q],_[Q],Y,K)),p._bindingOffsets.push(me);return!0},ae.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos;p.pushFailuresInfo();const d=p.eval(this.expr);return p.popFailuresInfo(),d?(p.processFailure(l,this),!1):(s.pos=l,!0)},ee.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos;return p.eval(this.expr)?(s.pos=l,!0):!1},V.prototype.eval=function(p){const s=p.currentApplication(),l=s?s.args:[],d=this.substituteParams(l),v=p.getCurrentPosInfo();if(v.isActive(d))return d.handleCycle(p);const _=d.toMemoKey(),D=v.memo[_];if(D&&v.shouldUseMemoizedResult(D)){if(p.hasNecessaryInfo(D))return p.useMemoizedResult(p.inputStream.pos,D);delete v.memo[_]}return d.reallyEval(p)},V.prototype.handleCycle=function(p){const s=p.getCurrentPosInfo(),{currentLeftRecursion:l}=s,d=this.toMemoKey();let v=s.memo[d];return l&&l.headApplication.toMemoKey()===d?v.updateInvolvedApplicationMemoKeys():v||(v=s.memoize(d,{matchLength:0,examinedLength:0,value:!1,rightmostFailureOffset:-1}),s.startLeftRecursion(this,v)),p.useMemoizedResult(p.inputStream.pos,v)},V.prototype.reallyEval=function(p){const{inputStream:s}=p,l=s.pos,d=p.getCurrentPosInfo(),v=p.grammar.rules[this.ruleName],{body:_}=v,{description:D}=v;p.enterApplication(d,this),D&&p.pushFailuresInfo();const te=s.examinedLength;s.examinedLength=0;let Q=this.evalOnce(_,p);const me=d.currentLeftRecursion,Y=this.toMemoKey(),K=me&&me.headApplication.toMemoKey()===Y;let ce;p.doNotMemoize?p.doNotMemoize=!1:K?(Q=this.growSeedResult(_,p,l,me,Q),d.endLeftRecursion(),ce=me,ce.examinedLength=s.examinedLength-l,ce.rightmostFailureOffset=p._getRightmostFailureOffset(),d.memoize(Y,ce)):(!me||!me.isInvolved(Y))&&(ce=d.memoize(Y,{matchLength:s.pos-l,examinedLength:s.examinedLength-l,value:Q,failuresAtRightmostPosition:p.cloneRecordedFailures(),rightmostFailureOffset:p._getRightmostFailureOffset()}));const Ce=!!Q;if(D&&(p.popFailuresInfo(),Ce||p.processFailure(l,this),ce&&(ce.failuresAtRightmostPosition=p.cloneRecordedFailures())),p.isTracing()&&ce){const He=p.getTraceEntry(l,this,Ce,Ce?[Q]:[]);K&&(e(He.terminatingLREntry!=null||!Ce),He.isHeadOfLeftRecursion=!0),ce.traceEntry=He}return s.examinedLength=Math.max(s.examinedLength,te),p.exitApplication(d,Q),Ce},V.prototype.evalOnce=function(p,s){const{inputStream:l}=s,d=l.pos;if(s.eval(p)){const v=p.getArity(),_=s._bindings.splice(s._bindings.length-v,v),D=s._bindingOffsets.splice(s._bindingOffsets.length-v,v),te=l.pos-d;return new it(this.ruleName,_,D,te)}else return!1},V.prototype.growSeedResult=function(p,s,l,d,v){if(!v)return!1;const{inputStream:_}=s;for(;;){if(d.matchLength=_.pos-l,d.value=v,d.failuresAtRightmostPosition=s.cloneRecordedFailures(),s.isTracing()){const D=s.trace[s.trace.length-1];d.traceEntry=new Ee(s.input,l,_.pos,this,!0,[v],[D.clone()])}if(_.pos=l,v=this.evalOnce(p,s),_.pos-l<=d.matchLength)break;s.isTracing()&&s.trace.splice(-2,1)}return s.isTracing()&&d.traceEntry.recordLRTermination(s.trace.pop(),v),_.pos=l+d.matchLength,d.value},xe.prototype.eval=function(p){const{inputStream:s}=p,l=s.pos,d=s.next();return d&&this.pattern.test(d)?(p.pushBinding(new Re(d.length),l),!0):(p.processFailure(l,this),!1)},U.prototype.getArity=r("getArity"),L.getArity=G.getArity=F.prototype.getArity=O.prototype.getArity=q.prototype.getArity=V.prototype.getArity=xe.prototype.getArity=function(){return 1},J.prototype.getArity=function(){return this.terms.length===0?0:this.terms[0].getArity()},se.prototype.getArity=function(){let p=0;for(let s=0;s<this.factors.length;s++)p+=this.factors[s].getArity();return p},M.prototype.getArity=function(){return this.expr.getArity()},ae.prototype.getArity=function(){return 0},ee.prototype.getArity=oe.prototype.getArity=function(){return this.expr.getArity()};function Xe(p,s){const l={};if(p.source&&s){const d=p.source.relativeTo(s);l.sourceInterval=[d.startIdx,d.endIdx]}return l}U.prototype.outputRecipe=r("outputRecipe"),L.outputRecipe=function(p,s){return["any",Xe(this,s)]},G.outputRecipe=function(p,s){return["end",Xe(this,s)]},F.prototype.outputRecipe=function(p,s){return["terminal",Xe(this,s),this.obj]},O.prototype.outputRecipe=function(p,s){return["range",Xe(this,s),this.from,this.to]},q.prototype.outputRecipe=function(p,s){return["param",Xe(this,s),this.index]},J.prototype.outputRecipe=function(p,s){return["alt",Xe(this,s)].concat(this.terms.map(l=>l.outputRecipe(p,s)))},Se.prototype.outputRecipe=function(p,s){return this.terms[0].outputRecipe(p,s)},_e.prototype.outputRecipe=function(p,s){const l=this.terms.slice(0,this.expansionPos),d=this.terms.slice(this.expansionPos+1);return["splice",Xe(this,s),l.map(v=>v.outputRecipe(p,s)),d.map(v=>v.outputRecipe(p,s))]},se.prototype.outputRecipe=function(p,s){return["seq",Xe(this,s)].concat(this.factors.map(l=>l.outputRecipe(p,s)))},ie.prototype.outputRecipe=fe.prototype.outputRecipe=ke.prototype.outputRecipe=ae.prototype.outputRecipe=ee.prototype.outputRecipe=oe.prototype.outputRecipe=function(p,s){return[this.constructor.name.toLowerCase(),Xe(this,s),this.expr.outputRecipe(p,s)]},V.prototype.outputRecipe=function(p,s){return["app",Xe(this,s),this.ruleName,this.args.map(l=>l.outputRecipe(p,s))]},xe.prototype.outputRecipe=function(p,s){return["unicodeChar",Xe(this,s),this.category]},U.prototype.introduceParams=r("introduceParams"),L.introduceParams=G.introduceParams=F.prototype.introduceParams=O.prototype.introduceParams=q.prototype.introduceParams=xe.prototype.introduceParams=function(p){return this},J.prototype.introduceParams=function(p){return this.terms.forEach((s,l,d)=>{d[l]=s.introduceParams(p)}),this},se.prototype.introduceParams=function(p){return this.factors.forEach((s,l,d)=>{d[l]=s.introduceParams(p)}),this},M.prototype.introduceParams=ae.prototype.introduceParams=ee.prototype.introduceParams=oe.prototype.introduceParams=function(p){return this.expr=this.expr.introduceParams(p),this},V.prototype.introduceParams=function(p){const s=p.indexOf(this.ruleName);if(s>=0){if(this.args.length>0)throw new Error("Parameterized rules cannot be passed as arguments to another rule.");return new q(s).withSource(this.source)}else return this.args.forEach((l,d,v)=>{v[d]=l.introduceParams(p)}),this},U.prototype.isNullable=function(p){return this._isNullable(p,Object.create(null))},U.prototype._isNullable=r("_isNullable"),L._isNullable=O.prototype._isNullable=q.prototype._isNullable=fe.prototype._isNullable=xe.prototype._isNullable=function(p,s){return!1},G._isNullable=function(p,s){return!0},F.prototype._isNullable=function(p,s){return typeof this.obj=="string"?this.obj==="":!1},J.prototype._isNullable=function(p,s){return this.terms.length===0||this.terms.some(l=>l._isNullable(p,s))},se.prototype._isNullable=function(p,s){return this.factors.every(l=>l._isNullable(p,s))},ie.prototype._isNullable=ke.prototype._isNullable=ae.prototype._isNullable=ee.prototype._isNullable=function(p,s){return!0},oe.prototype._isNullable=function(p,s){return this.expr._isNullable(p,s)},V.prototype._isNullable=function(p,s){const l=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(s,l)){const{body:d}=p.rules[this.ruleName],v=d.substituteParams(this.args);s[l]=!1,s[l]=v._isNullable(p,s)}return s[l]},U.prototype.substituteParams=r("substituteParams"),L.substituteParams=G.substituteParams=F.prototype.substituteParams=O.prototype.substituteParams=xe.prototype.substituteParams=function(p){return this},q.prototype.substituteParams=function(p){return p[this.index]},J.prototype.substituteParams=function(p){return new J(this.terms.map(s=>s.substituteParams(p)))},se.prototype.substituteParams=function(p){return new se(this.factors.map(s=>s.substituteParams(p)))},M.prototype.substituteParams=ae.prototype.substituteParams=ee.prototype.substituteParams=oe.prototype.substituteParams=function(p){return new this.constructor(this.expr.substituteParams(p))},V.prototype.substituteParams=function(p){if(this.args.length===0)return this;{const s=this.args.map(l=>l.substituteParams(p));return new V(this.ruleName,s)}};function xr(p){return/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(p)}function nt(p){const s=Object.create(null);p.forEach(l=>{s[l]=(s[l]||0)+1}),Object.keys(s).forEach(l=>{if(s[l]<=1)return;let d=1;p.forEach((v,_)=>{v===l&&(p[_]=v+"_"+d++)})})}U.prototype.toArgumentNameList=r("toArgumentNameList"),L.toArgumentNameList=function(p,s){return["any"]},G.toArgumentNameList=function(p,s){return["end"]},F.prototype.toArgumentNameList=function(p,s){return typeof this.obj=="string"&&/^[_a-zA-Z0-9]+$/.test(this.obj)?["_"+this.obj]:["$"+p]},O.prototype.toArgumentNameList=function(p,s){let l=this.from+"_to_"+this.to;return xr(l)||(l="_"+l),xr(l)||(l="$"+p),[l]},J.prototype.toArgumentNameList=function(p,s){const l=this.terms.map(_=>_.toArgumentNameList(p,!0)),d=[],v=l[0].length;for(let _=0;_<v;_++){const D=[];for(let Q=0;Q<this.terms.length;Q++)D.push(l[Q][_]);const te=f(D);d.push(te.join("_or_"))}return s||nt(d),d},se.prototype.toArgumentNameList=function(p,s){let l=[];return this.factors.forEach(d=>{const v=d.toArgumentNameList(p,!0);l=l.concat(v),p+=v.length}),s||nt(l),l},M.prototype.toArgumentNameList=function(p,s){const l=this.expr.toArgumentNameList(p,s).map(d=>d[d.length-1]==="s"?d+"es":d+"s");return s||nt(l),l},ke.prototype.toArgumentNameList=function(p,s){return this.expr.toArgumentNameList(p,s).map(l=>"opt"+l[0].toUpperCase()+l.slice(1))},ae.prototype.toArgumentNameList=function(p,s){return[]},ee.prototype.toArgumentNameList=oe.prototype.toArgumentNameList=function(p,s){return this.expr.toArgumentNameList(p,s)},V.prototype.toArgumentNameList=function(p,s){return[this.ruleName]},xe.prototype.toArgumentNameList=function(p,s){return["$"+p]},q.prototype.toArgumentNameList=function(p,s){return["param"+this.index]},U.prototype.toDisplayString=r("toDisplayString"),J.prototype.toDisplayString=se.prototype.toDisplayString=function(){return this.source?this.source.trimmed().contents:"["+this.constructor.name+"]"},L.toDisplayString=G.toDisplayString=M.prototype.toDisplayString=ae.prototype.toDisplayString=ee.prototype.toDisplayString=oe.prototype.toDisplayString=F.prototype.toDisplayString=O.prototype.toDisplayString=q.prototype.toDisplayString=function(){return this.toString()},V.prototype.toDisplayString=function(){if(this.args.length>0){const p=this.args.map(s=>s.toDisplayString());return this.ruleName+"<"+p.join(",")+">"}else return this.ruleName},xe.prototype.toDisplayString=function(){return"Unicode ["+this.category+"] character"};function Mr(p){return p==="description"||p==="string"||p==="code"}class ut{constructor(s,l,d){if(!Mr(d))throw new Error("invalid Failure type: "+d);this.pexpr=s,this.text=l,this.type=d,this.fluffy=!1}getPExpr(){return this.pexpr}getText(){return this.text}getType(){return this.type}isDescription(){return this.type==="description"}isStringTerminal(){return this.type==="string"}isCode(){return this.type==="code"}isFluffy(){return this.fluffy}makeFluffy(){this.fluffy=!0}clearFluffy(){this.fluffy=!1}subsumes(s){return this.getText()===s.getText()&&this.type===s.type&&(!this.isFluffy()||this.isFluffy()&&s.isFluffy())}toString(){return this.type==="string"?JSON.stringify(this.getText()):this.getText()}clone(){const s=new ut(this.pexpr,this.text,this.type);return this.isFluffy()&&s.makeFluffy(),s}toKey(){return this.toString()+"#"+this.type}}U.prototype.toFailure=r("toFailure"),L.toFailure=function(p){return new ut(this,"any object","description")},G.toFailure=function(p){return new ut(this,"end of input","description")},F.prototype.toFailure=function(p){return new ut(this,this.obj,"string")},O.prototype.toFailure=function(p){return new ut(this,JSON.stringify(this.from)+".."+JSON.stringify(this.to),"code")},ae.prototype.toFailure=function(p){const s=this.expr===L?"nothing":"not "+this.expr.toFailure(p);return new ut(this,s,"description")},ee.prototype.toFailure=function(p){return this.expr.toFailure(p)},V.prototype.toFailure=function(p){let{description:s}=p.rules[this.ruleName];return s||(s=(/^[aeiouAEIOU]/.test(this.ruleName)?"an":"a")+" "+this.ruleName),new ut(this,s,"description")},xe.prototype.toFailure=function(p){return new ut(this,"a Unicode ["+this.category+"] character","description")},J.prototype.toFailure=function(p){const l="("+this.terms.map(d=>d.toFailure(p)).join(" or ")+")";return new ut(this,l,"description")},se.prototype.toFailure=function(p){const l="("+this.factors.map(d=>d.toFailure(p)).join(" ")+")";return new ut(this,l,"description")},M.prototype.toFailure=function(p){const s="("+this.expr.toFailure(p)+this.operator+")";return new ut(this,s,"description")},U.prototype.toString=r("toString"),L.toString=function(){return"any"},G.toString=function(){return"end"},F.prototype.toString=function(){return JSON.stringify(this.obj)},O.prototype.toString=function(){return JSON.stringify(this.from)+".."+JSON.stringify(this.to)},q.prototype.toString=function(){return"$"+this.index},oe.prototype.toString=function(){return"#("+this.expr.toString()+")"},J.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():"("+this.terms.map(p=>p.toString()).join(" | ")+")"},se.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():"("+this.factors.map(p=>p.toString()).join(" ")+")"},M.prototype.toString=function(){return this.expr+this.operator},ae.prototype.toString=function(){return"~"+this.expr},ee.prototype.toString=function(){return"&"+this.expr},V.prototype.toString=function(){if(this.args.length>0){const p=this.args.map(s=>s.toString());return this.ruleName+"<"+p.join(",")+">"}else return this.ruleName},xe.prototype.toString=function(){return"\\p{"+this.category+"}"};class er extends U{constructor(s){super(),this.obj=s}_getString(s){const l=s.currentApplication().args[this.obj.index];return e(l instanceof F,"expected a Terminal expression"),l.obj}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:l}=s,d=l.pos,v=this._getString(s);return l.matchString(v,!0)?(s.pushBinding(new Re(v.length),d),!0):(s.processFailure(d,this),!1)}getArity(){return 1}substituteParams(s){return new er(this.obj.substituteParams(s))}toDisplayString(){return this.obj.toDisplayString()+" (case-insensitive)"}toFailure(s){return new ut(this,this.obj.toFailure(s)+" (case-insensitive)","description")}_isNullable(s,l){return this.obj._isNullable(s,l)}}var Ti=Object.freeze({__proto__:null,CaseInsensitiveTerminal:er,PExpr:U,any:L,end:G,Terminal:F,Range:O,Param:q,Alt:J,Extend:Se,Splice:_e,Seq:se,Iter:M,Star:ie,Plus:fe,Opt:ke,Not:ae,Lookahead:ee,Lex:oe,Apply:V,UnicodeChar:xe});let Qn;Xt(p=>{Qn=p.rules.applySyntactic.body});const In=new V("spaces");class Xn{constructor(s,l,d){this.matcher=s,this.startExpr=l,this.grammar=s.grammar,this.input=s.getInput(),this.inputStream=new Ue(this.input),this.memoTable=s._memoTable,this.userData=void 0,this.doNotMemoize=!1,this._bindings=[],this._bindingOffsets=[],this._applicationStack=[],this._posStack=[0],this.inLexifiedContextStack=[!1],this.rightmostFailurePosition=-1,this._rightmostFailurePositionStack=[],this._recordedFailuresStack=[],d!==void 0&&(this.positionToRecordFailures=d,this.recordedFailures=Object.create(null))}posToOffset(s){return s-this._posStack[this._posStack.length-1]}enterApplication(s,l){this._posStack.push(this.inputStream.pos),this._applicationStack.push(l),this.inLexifiedContextStack.push(!1),s.enter(l),this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this.rightmostFailurePosition=-1}exitApplication(s,l){const d=this._posStack.pop();this._applicationStack.pop(),this.inLexifiedContextStack.pop(),s.exit(),this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,this._rightmostFailurePositionStack.pop()),l&&this.pushBinding(l,d)}enterLexifiedContext(){this.inLexifiedContextStack.push(!0)}exitLexifiedContext(){this.inLexifiedContextStack.pop()}currentApplication(){return this._applicationStack[this._applicationStack.length-1]}inSyntacticContext(){const s=this.currentApplication();return s?s.isSyntactic()&&!this.inLexifiedContext():this.startExpr.factors[0].isSyntactic()}inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1]}skipSpaces(){return this.pushFailuresInfo(),this.eval(In),this.popBinding(),this.popFailuresInfo(),this.inputStream.pos}skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos}maybeSkipSpacesBefore(s){return s.allowsSkippingPrecedingSpace()&&s!==In?this.skipSpacesIfInSyntacticContext():this.inputStream.pos}pushBinding(s,l){this._bindings.push(s),this._bindingOffsets.push(this.posToOffset(l))}popBinding(){this._bindings.pop(),this._bindingOffsets.pop()}numBindings(){return this._bindings.length}truncateBindings(s){for(;this._bindings.length>s;)this.popBinding()}getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos)}getPosInfo(s){let l=this.memoTable[s];return l||(l=this.memoTable[s]=new k),l}processFailure(s,l){if(this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,s),this.recordedFailures&&s===this.positionToRecordFailures){const d=this.currentApplication();d&&(l=l.substituteParams(d.args)),this.recordFailure(l.toFailure(this.grammar),!1)}}recordFailure(s,l){const d=s.toKey();this.recordedFailures[d]?this.recordedFailures[d].isFluffy()&&!s.isFluffy()&&this.recordedFailures[d].clearFluffy():this.recordedFailures[d]=l?s.clone():s}recordFailures(s,l){Object.keys(s).forEach(d=>{this.recordFailure(s[d],l)})}cloneRecordedFailures(){if(!this.recordedFailures)return;const s=Object.create(null);return Object.keys(this.recordedFailures).forEach(l=>{s[l]=this.recordedFailures[l].clone()}),s}getRightmostFailurePosition(){return this.rightmostFailurePosition}_getRightmostFailureOffset(){return this.rightmostFailurePosition>=0?this.posToOffset(this.rightmostFailurePosition):-1}getMemoizedTraceEntry(s,l){const d=this.memoTable[s];if(d&&l instanceof V){const v=d.memo[l.toMemoKey()];if(v&&v.traceEntry){const _=v.traceEntry.cloneWithExpr(l);return _.isMemoized=!0,_}}return null}getTraceEntry(s,l,d,v){if(l instanceof V){const _=this.currentApplication(),D=_?_.args:[];l=l.substituteParams(D)}return this.getMemoizedTraceEntry(s,l)||new Ee(this.input,s,this.inputStream.pos,l,d,v,this.trace)}isTracing(){return!!this.trace}hasNecessaryInfo(s){return this.trace&&!s.traceEntry?!1:this.recordedFailures&&this.inputStream.pos+s.rightmostFailureOffset===this.positionToRecordFailures?!!s.failuresAtRightmostPosition:!0}useMemoizedResult(s,l){this.trace&&this.trace.push(l.traceEntry);const d=this.inputStream.pos+l.rightmostFailureOffset;return this.rightmostFailurePosition=Math.max(this.rightmostFailurePosition,d),this.recordedFailures&&this.positionToRecordFailures===d&&l.failuresAtRightmostPosition&&this.recordFailures(l.failuresAtRightmostPosition,!0),this.inputStream.examinedLength=Math.max(this.inputStream.examinedLength,l.examinedLength+s),l.value?(this.inputStream.pos+=l.matchLength,this.pushBinding(l.value,s),!0):!1}eval(s){const{inputStream:l}=this,d=this._bindings.length,v=this.userData;let _;this.recordedFailures&&(_=this.recordedFailures,this.recordedFailures=Object.create(null));const D=l.pos,te=this.maybeSkipSpacesBefore(s);let Q;this.trace&&(Q=this.trace,this.trace=[]);const me=s.eval(this);if(this.trace){const Y=this._bindings.slice(d),K=this.getTraceEntry(te,s,me,Y);K.isImplicitSpaces=s===In,K.isRootNode=s===this.startExpr,Q.push(K),this.trace=Q}return me?this.recordedFailures&&l.pos===this.positionToRecordFailures&&Object.keys(this.recordedFailures).forEach(Y=>{this.recordedFailures[Y].makeFluffy()}):(l.pos=D,this.truncateBindings(d),this.userData=v),this.recordedFailures&&this.recordFailures(_,!1),s===Qn&&this.skipSpaces(),me}getMatchResult(){this.grammar._setUpMatchState(this),this.eval(this.startExpr);let s;this.recordedFailures&&(s=Object.keys(this.recordedFailures).map(d=>this.recordedFailures[d]));const l=this._bindings[0];return l&&(l.grammar=this.grammar),new m(this.matcher,this.input,this.startExpr,l,this._bindingOffsets[0],this.rightmostFailurePosition,s)}getTrace(){this.trace=[];const s=this.getMatchResult(),l=this.trace[this.trace.length-1];return l.result=s,l}pushFailuresInfo(){this._rightmostFailurePositionStack.push(this.rightmostFailurePosition),this._recordedFailuresStack.push(this.recordedFailures)}popFailuresInfo(){this.rightmostFailurePosition=this._rightmostFailurePositionStack.pop(),this.recordedFailures=this._recordedFailuresStack.pop()}}class Oe{constructor(s){this.grammar=s,this._memoTable=[],this._input="",this._isMemoTableStale=!1}_resetMemoTable(){this._memoTable=[],this._isMemoTableStale=!1}getInput(){return this._input}setInput(s){return this._input!==s&&this.replaceInputRange(0,this._input.length,s),this}replaceInputRange(s,l,d){const v=this._input,_=this._memoTable;if(s<0||s>v.length||l<0||l>v.length||s>l)throw new Error("Invalid indices: "+s+" and "+l);this._input=v.slice(0,s)+d+v.slice(l),this._input!==v&&_.length>0&&(this._isMemoTableStale=!0);const D=_.slice(l);_.length=s;for(let te=0;te<d.length;te++)_.push(void 0);for(const te of D)_.push(te);for(let te=0;te<s;te++){const Q=_[te];Q&&Q.clearObsoleteEntries(te,s)}return this}match(s,l={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:l.incremental,tracing:!1})}trace(s,l={incremental:!0}){return this._match(this._getStartExpr(s),{incremental:l.incremental,tracing:!0})}_match(s,l={}){const d={tracing:!1,incremental:!0,positionToRecordFailures:void 0,...l};if(!d.incremental)this._resetMemoTable();else if(this._isMemoTableStale&&!this.grammar.supportsIncrementalParsing)throw Qe(this.grammar);const v=new Xn(this,s,d.positionToRecordFailures);return d.tracing?v.getTrace():v.getMatchResult()}_getStartExpr(s){const l=s||this.grammar.defaultStartRule;if(!l)throw new Error("Missing start rule argument -- the grammar has no default start rule.");const d=this.grammar.parseApplication(l);return new se([d,G])}}const pt=[],Ir=(p,s)=>Object.prototype.hasOwnProperty.call(p,s);class kn{constructor(s,l,d){this._node=s,this.source=l,this._baseInterval=d,s.isNonterminal()&&e(l===d),this._childWrappers=[]}_forgetMemoizedResultFor(s){delete this._node[this._semantics.attributeKeys[s]],this.children.forEach(l=>{l._forgetMemoizedResultFor(s)})}child(s){if(!(0<=s&&s<this._node.numChildren()))return;let l=this._childWrappers[s];if(!l){const d=this._node.childAt(s),v=this._node.childOffsets[s],_=this._baseInterval.subInterval(v,d.matchLength),D=d.isNonterminal()?_:this._baseInterval;l=this._childWrappers[s]=this._semantics.wrap(d,_,D)}return l}_children(){for(let s=0;s<this._node.numChildren();s++)this.child(s);return this._childWrappers}isIteration(){return this._node.isIteration()}isTerminal(){return this._node.isTerminal()}isNonterminal(){return this._node.isNonterminal()}isSyntactic(){return this.isNonterminal()&&this._node.isSyntactic()}isLexical(){return this.isNonterminal()&&this._node.isLexical()}isOptional(){return this._node.isOptional()}iteration(s){const l=s||[],d=l.map(D=>D._node),v=new Ft(d,[],-1,!1),_=this._semantics.wrap(v,null,null);return _._childWrappers=l,_}get children(){return this._children()}get ctorName(){return this._node.ctorName}get numChildren(){return this._node.numChildren()}get sourceString(){return this.source.contents}}class Rt{constructor(s,l){const d=this;if(this.grammar=s,this.checkedActionDicts=!1,this.Wrapper=class extends(l?l.Wrapper:kn){constructor(v,_,D){super(v,_,D),d.checkActionDictsIfHaventAlready(),this._semantics=d}toString(){return"[semantics wrapper for "+d.grammar.name+"]"}},this.super=l,l){if(!(s.equals(this.super.grammar)||s._inheritsFrom(this.super.grammar)))throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+s.name+"' (not a sub-grammar)");this.operations=Object.create(this.super.operations),this.attributes=Object.create(this.super.attributes),this.attributeKeys=Object.create(null);for(const v in this.attributes)Object.defineProperty(this.attributeKeys,v,{value:jt(v)})}else this.operations=Object.create(null),this.attributes=Object.create(null),this.attributeKeys=Object.create(null)}toString(){return"[semantics for "+this.grammar.name+"]"}checkActionDictsIfHaventAlready(){this.checkedActionDicts||(this.checkActionDicts(),this.checkedActionDicts=!0)}checkActionDicts(){let s;for(s in this.operations)this.operations[s].checkActionDict(this.grammar);for(s in this.attributes)this.attributes[s].checkActionDict(this.grammar)}toRecipe(s){function l(v){return v.super!==Rt.BuiltInSemantics._getSemantics()}let d=`(function(g) {
`;if(l(this)){d+="  var semantics = "+this.super.toRecipe(!0)+"(g";const v=this.super.grammar;let _=this.grammar;for(;_!==v;)d+=".superGrammar",_=_.superGrammar;d+=`);
`,d+="  return g.extendSemantics(semantics)"}else d+="  return g.createSemantics()";return["Operation","Attribute"].forEach(v=>{const _=this[v.toLowerCase()+"s"];Object.keys(_).forEach(D=>{const{actionDict:te,formals:Q,builtInDefault:me}=_[D];let Y=D;Q.length>0&&(Y+="("+Q.join(", ")+")");let K;l(this)&&this.super[v.toLowerCase()+"s"][D]?K="extend"+v:K="add"+v,d+=`
    .`+K+"("+JSON.stringify(Y)+", {";const ce=[];Object.keys(te).forEach(Ce=>{if(te[Ce]!==me){let He=te[Ce].toString().trim();He=He.replace(/^.*\(/,"function("),ce.push(`
      `+JSON.stringify(Ce)+": "+He)}}),d+=ce.join(",")+`
    })`})}),d+=`;
  })`,s||(d=`(function() {
  var grammar = this.fromRecipe(`+this.grammar.toRecipe()+`);
  var semantics = `+d+`(grammar);
  return semantics;
});
`),d}addOperationOrAttribute(s,l,d){const v=s+"s",_=Fr(l,s),{name:D}=_,{formals:te}=_;this.assertNewName(D,s);const Q=Xr(s,D,K),me={_default:Q};Object.keys(d).forEach(ce=>{me[ce]=d[ce]});const Y=s==="operation"?new we(D,te,me,Q):new tt(D,me,Q);Y.checkActionDict(this.grammar),this[v][D]=Y;function K(...ce){const Ce=this._semantics[v][D];if(arguments.length!==Ce.formals.length)throw new Error("Invalid number of arguments passed to "+D+" "+s+" (expected "+Ce.formals.length+", got "+arguments.length+")");const He=Object.create(null);for(const[Ur,Sn]of Object.entries(ce)){const Ao=Ce.formals[Ur];He[Ao]=Sn}const wt=this.args;this.args=He;const Et=Ce.execute(this._semantics,this);return this.args=wt,Et}s==="operation"?(this.Wrapper.prototype[D]=K,this.Wrapper.prototype[D].toString=function(){return"["+D+" operation]"}):(Object.defineProperty(this.Wrapper.prototype,D,{get:K,configurable:!0}),Object.defineProperty(this.attributeKeys,D,{value:jt(D)}))}extendOperationOrAttribute(s,l,d){const v=s+"s";if(Fr(l,"attribute"),!(this.super&&l in this.super[v]))throw new Error("Cannot extend "+s+" '"+l+"': did not inherit an "+s+" with that name");if(Ir(this[v],l))throw new Error("Cannot extend "+s+" '"+l+"' again");const _=this[v][l].formals,D=this[v][l].actionDict,te=Object.create(D);Object.keys(d).forEach(Q=>{te[Q]=d[Q]}),this[v][l]=s==="operation"?new we(l,_,te):new tt(l,te),this[v][l].checkActionDict(this.grammar)}assertNewName(s,l){if(Ir(kn.prototype,s))throw new Error("Cannot add "+l+" '"+s+"': that's a reserved name");if(s in this.operations)throw new Error("Cannot add "+l+" '"+s+"': an operation with that name already exists");if(s in this.attributes)throw new Error("Cannot add "+l+" '"+s+"': an attribute with that name already exists")}wrap(s,l,d){const v=d||l;return s instanceof this.Wrapper?s:new this.Wrapper(s,l,v)}}function Fr(p,s){if(!Rt.prototypeGrammar)return e(p.indexOf("(")===-1),{name:p,formals:[]};const l=Rt.prototypeGrammar.match(p,s==="operation"?"OperationSignature":"AttributeSignature");if(l.failed())throw new Error(l.message);return Rt.prototypeGrammarSemantics(l).parse()}function Xr(p,s,l){return function(...d){const _=(this._semantics.operations[s]||this._semantics.attributes[s]).formals.map(D=>this.args[D]);if(!this.isIteration()&&d.length===1)return l.apply(d[0],_);throw It(this.ctorName,s,p,pt)}}Rt.createSemantics=function(p,s){const l=new Rt(p,s!==void 0?s:Rt.BuiltInSemantics._getSemantics()),d=function(_){if(!(_ instanceof m))throw new TypeError("Semantics expected a MatchResult, but got "+B(_));if(_.failed())throw new TypeError("cannot apply Semantics to "+_.toString());const D=_._cst;if(D.grammar!==p)throw new Error("Cannot use a MatchResult from grammar '"+D.grammar.name+"' with a semantics for '"+p.name+"'");const te=new Ue(_.input);return l.wrap(D,te.interval(_._cstOffset,_.input.length))};return d.addOperation=function(v,_){return l.addOperationOrAttribute("operation",v,_),d},d.extendOperation=function(v,_){return l.extendOperationOrAttribute("operation",v,_),d},d.addAttribute=function(v,_){return l.addOperationOrAttribute("attribute",v,_),d},d.extendAttribute=function(v,_){return l.extendOperationOrAttribute("attribute",v,_),d},d._getActionDict=function(v){const _=l.operations[v]||l.attributes[v];if(!_)throw new Error('"'+v+'" is not a valid operation or attribute name in this semantics for "'+p.name+'"');return _.actionDict},d._remove=function(v){let _;return v in l.operations?(_=l.operations[v],delete l.operations[v]):v in l.attributes&&(_=l.attributes[v],delete l.attributes[v]),delete l.Wrapper.prototype[v],_},d.getOperationNames=function(){return Object.keys(l.operations)},d.getAttributeNames=function(){return Object.keys(l.attributes)},d.getGrammar=function(){return l.grammar},d.toRecipe=function(v){return l.toRecipe(v)},d.toString=l.toString.bind(l),d._getSemantics=function(){return l},d};class we{constructor(s,l,d,v){this.name=s,this.formals=l,this.actionDict=d,this.builtInDefault=v}checkActionDict(s){s._checkTopDownActionDict(this.typeName,this.name,this.actionDict)}execute(s,l){try{const{ctorName:d}=l._node;let v=this.actionDict[d];return v?(pt.push([this,d]),v.apply(l,l._children())):l.isNonterminal()&&(v=this.actionDict._nonterminal,v)?(pt.push([this,"_nonterminal",d]),v.apply(l,l._children())):(pt.push([this,"default action",d]),this.actionDict._default.apply(l,l._children()))}finally{pt.pop()}}}we.prototype.typeName="operation";class tt extends we{constructor(s,l,d){super(s,[],l,d)}execute(s,l){const d=l._node,v=s.attributeKeys[this.name];return Ir(d,v)||(d[v]=we.prototype.execute.call(this,s,l)),d[v]}}tt.prototype.typeName="attribute";const bt=["_iter","_terminal","_nonterminal","_default"];function rt(p){return Object.keys(p.rules).sort().map(s=>p.rules[s])}const Pt=p=>p.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");let tr,Ct;class lt{constructor(s,l,d,v){if(this.name=s,this.superGrammar=l,this.rules=d,v){if(!(v in d))throw new Error("Invalid start rule: '"+v+"' is not a rule in grammar '"+s+"'");this.defaultStartRule=v}this._matchStateInitializer=void 0,this.supportsIncrementalParsing=!0}matcher(){return new Oe(this)}isBuiltIn(){return this===lt.ProtoBuiltInRules||this===lt.BuiltInRules}equals(s){if(this===s)return!0;if(s==null||this.name!==s.name||this.defaultStartRule!==s.defaultStartRule||!(this.superGrammar===s.superGrammar||this.superGrammar.equals(s.superGrammar)))return!1;const l=rt(this),d=rt(s);return l.length===d.length&&l.every((v,_)=>v.description===d[_].description&&v.formals.join(",")===d[_].formals.join(",")&&v.body.toString()===d[_].body.toString())}match(s,l){const d=this.matcher();return d.replaceInputRange(0,0,s),d.match(l)}trace(s,l){const d=this.matcher();return d.replaceInputRange(0,0,s),d.trace(l)}createSemantics(){return Rt.createSemantics(this)}extendSemantics(s){return Rt.createSemantics(this,s._getSemantics())}_checkTopDownActionDict(s,l,d){const v=[];for(const _ in d){const D=d[_];if(!bt.includes(_)&&!(_ in this.rules)){v.push(`'${_}' is not a valid semantic action for '${this.name}'`);continue}if(typeof D!="function"){v.push(`'${_}' must be a function in an action dictionary for '${this.name}'`);continue}const Q=D.length,me=this._topDownActionArity(_);if(Q!==me){let Y;_==="_iter"||_==="_nonterminal"?Y=`it should use a rest parameter, e.g. \`${_}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.`:Y=`expected ${me}, got ${Q}`,v.push(`Semantic action '${_}' has the wrong arity: ${Y}`)}}if(v.length>0){const _=v.map(te=>"- "+te),D=new Error([`Found errors in the action dictionary of the '${l}' ${s}:`,..._].join(`
`));throw D.problems=v,D}}_topDownActionArity(s){return bt.includes(s)?0:this.rules[s].body.getArity()}_inheritsFrom(s){let l=this.superGrammar;for(;l;){if(l.equals(s,!0))return!0;l=l.superGrammar}return!1}toRecipe(s=void 0){const l={};this.source&&(l.source=this.source.contents);let d=null;this.defaultStartRule&&(d=this.defaultStartRule);const v={};Object.keys(this.rules).forEach(te=>{const Q=this.rules[te],{body:me}=Q,Y=!this.superGrammar||!this.superGrammar.rules[te];let K;Y?K="define":K=me instanceof Se?"extend":"override";const ce={};if(Q.source&&this.source){const wt=Q.source.relativeTo(this.source);ce.sourceInterval=[wt.startIdx,wt.endIdx]}const Ce=Y?Q.description:null,He=me.outputRecipe(Q.formals,this.source);v[te]=[K,ce,Ce,Q.formals,He]});let _="null";s?_=s:this.superGrammar&&!this.superGrammar.isBuiltIn()&&(_=this.superGrammar.toRecipe());const D=[...["grammar",l,this.name].map(JSON.stringify),_,...[d,v].map(JSON.stringify)];return Pt(`[${D.join(",")}]`)}toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate()}_toOperationOrAttributeActionDictionaryTemplate(){const s=new x;s.append("{");let l=!0;for(const d in this.rules){const{body:v}=this.rules[d];l?l=!1:s.append(","),s.append(`
`),s.append("  "),this.addSemanticActionTemplate(d,v,s)}return s.append(`
}`),s.contents()}addSemanticActionTemplate(s,l,d){d.append(s),d.append(": function(");const v=this._topDownActionArity(s);d.append(a("_",v).join(", ")),d.append(`) {
`),d.append("  }")}parseApplication(s){let l;if(s.indexOf("<")===-1)l=new V(s);else{const v=tr.match(s,"Base_application");l=Ct(v,{})}if(!(l.ruleName in this.rules))throw Fe(l.ruleName,this.name);const{formals:d}=this.rules[l.ruleName];if(d.length!==l.args.length){const{source:v}=this.rules[l.ruleName];throw H(l.ruleName,d.length,l.args.length,v)}return l}_setUpMatchState(s){this._matchStateInitializer&&this._matchStateInitializer(s)}}lt.ProtoBuiltInRules=new lt("ProtoBuiltInRules",void 0,{any:{body:L,formals:[],description:"any character",primitive:!0},end:{body:G,formals:[],description:"end of input",primitive:!0},caseInsensitive:{body:new er(new q(0)),formals:["str"],primitive:!0},lower:{body:new xe("Ll"),formals:[],description:"a lowercase letter",primitive:!0},upper:{body:new xe("Lu"),formals:[],description:"an uppercase letter",primitive:!0},unicodeLtmo:{body:new xe("Ltmo"),formals:[],description:"a Unicode character in Lt, Lm, or Lo",primitive:!0},spaces:{body:new ie(new V("space")),formals:[]},space:{body:new O("\0"," "),formals:[],description:"a space"}}),lt.initApplicationParser=function(p,s){tr=p,Ct=s};class Lt{constructor(s){this.name=s}sourceInterval(s,l){return this.source.subInterval(s,l-s)}ensureSuperGrammar(){return this.superGrammar||this.withSuperGrammar(this.name==="BuiltInRules"?lt.ProtoBuiltInRules:lt.BuiltInRules),this.superGrammar}ensureSuperGrammarRuleForOverriding(s,l){const d=this.ensureSuperGrammar().rules[s];if(!d)throw R(s,this.superGrammar.name,l);return d}installOverriddenOrExtendedRule(s,l,d,v){const _=c(l);if(_.length>0)throw X(s,_,v);const D=this.ensureSuperGrammar().rules[s],te=D.formals,Q=te?te.length:0;if(l.length!==Q)throw H(s,Q,l.length,v);return this.install(s,l,d,D.description,v)}install(s,l,d,v,_,D=!1){return this.rules[s]={body:d.introduceParams(l),formals:l,description:v,source:_,primitive:D},this}withSuperGrammar(s){if(this.superGrammar)throw new Error("the super grammar of a GrammarDecl cannot be set more than once");return this.superGrammar=s,this.rules=Object.create(s.rules),s.isBuiltIn()||(this.defaultStartRule=s.defaultStartRule),this}withDefaultStartRule(s){return this.defaultStartRule=s,this}withSource(s){return this.source=new Ue(s).interval(0,s.length),this}build(){const s=new lt(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);s._matchStateInitializer=s.superGrammar._matchStateInitializer,s.supportsIncrementalParsing=s.superGrammar.supportsIncrementalParsing;const l=[];let d=!1;return Object.keys(s.rules).forEach(v=>{const{body:_}=s.rules[v];try{_.assertChoicesHaveUniformArity(v)}catch(D){l.push(D)}try{_.assertAllApplicationsAreValid(v,s)}catch(D){l.push(D),d=!0}}),d||Object.keys(s.rules).forEach(v=>{const{body:_}=s.rules[v];try{_.assertIteratedExprsAreNotNullable(s,[])}catch(D){l.push(D)}}),l.length>0&&ht(l),this.source&&(s.source=this.source),s}define(s,l,d,v,_,D){if(this.ensureSuperGrammar(),this.superGrammar.rules[s])throw P(s,this.name,this.superGrammar.name,_);if(this.rules[s])throw P(s,this.name,this.name,_);const te=c(l);if(te.length>0)throw X(s,te,_);return this.install(s,l,d,v,_,D)}override(s,l,d,v,_){return this.ensureSuperGrammarRuleForOverriding(s,_),this.installOverriddenOrExtendedRule(s,l,d,_),this}extend(s,l,d,v,_){if(!this.ensureSuperGrammar().rules[s])throw N(s,this.superGrammar.name,_);const te=new Se(this.superGrammar,s,d);return te.source=d.source,this.installOverriddenOrExtendedRule(s,l,te,_),this}}class $t{constructor(){this.currentDecl=null,this.currentRuleName=null}newGrammar(s){return new Lt(s)}grammar(s,l,d,v,_){const D=new Lt(l);return d&&D.withSuperGrammar(d instanceof lt?d:this.fromRecipe(d)),v&&D.withDefaultStartRule(v),s&&s.source&&D.withSource(s.source),this.currentDecl=D,Object.keys(_).forEach(te=>{this.currentRuleName=te;const Q=_[te],me=Q[0],Y=Q[1],K=Q[2],ce=Q[3],Ce=this.fromRecipe(Q[4]);let He;D.source&&Y&&Y.sourceInterval&&(He=D.source.subInterval(Y.sourceInterval[0],Y.sourceInterval[1]-Y.sourceInterval[0])),D[me](te,ce,Ce,K,He)}),this.currentRuleName=this.currentDecl=null,D.build()}terminal(s){return new F(s)}range(s,l){return new O(s,l)}param(s){return new q(s)}alt(...s){let l=[];for(let d of s)d instanceof U||(d=this.fromRecipe(d)),d instanceof J?l=l.concat(d.terms):l.push(d);return l.length===1?l[0]:new J(l)}seq(...s){let l=[];for(let d of s)d instanceof U||(d=this.fromRecipe(d)),d instanceof se?l=l.concat(d.factors):l.push(d);return l.length===1?l[0]:new se(l)}star(s){return s instanceof U||(s=this.fromRecipe(s)),new ie(s)}plus(s){return s instanceof U||(s=this.fromRecipe(s)),new fe(s)}opt(s){return s instanceof U||(s=this.fromRecipe(s)),new ke(s)}not(s){return s instanceof U||(s=this.fromRecipe(s)),new ae(s)}lookahead(s){return s instanceof U||(s=this.fromRecipe(s)),new ee(s)}lex(s){return s instanceof U||(s=this.fromRecipe(s)),new oe(s)}app(s,l){return l&&l.length>0&&(l=l.map(function(d){return d instanceof U?d:this.fromRecipe(d)},this)),new V(s,l)}splice(s,l){return new _e(this.currentDecl.superGrammar,this.currentRuleName,s.map(d=>this.fromRecipe(d)),l.map(d=>this.fromRecipe(d)))}fromRecipe(s){const l=s[0]==="grammar"?s.slice(1):s.slice(2),d=this[s[0]](...l),v=s[1];return v&&v.sourceInterval&&this.currentDecl&&d.withSource(this.currentDecl.sourceInterval(...v.sourceInterval)),d}}function st(p){return typeof p=="function"?p.call(new $t):(typeof p=="string"&&(p=JSON.parse(p)),new $t().fromRecipe(p))}var At=st(["grammar",{source:`BuiltInRules {

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
}`},"BuiltInRules",null,null,{alnum:["define",{sourceInterval:[18,78]},"an alpha-numeric character",[],["alt",{sourceInterval:[60,78]},["app",{sourceInterval:[60,66]},"letter",[]],["app",{sourceInterval:[73,78]},"digit",[]]]],letter:["define",{sourceInterval:[82,142]},"a letter",[],["alt",{sourceInterval:[107,142]},["app",{sourceInterval:[107,112]},"lower",[]],["app",{sourceInterval:[119,124]},"upper",[]],["app",{sourceInterval:[131,142]},"unicodeLtmo",[]]]],digit:["define",{sourceInterval:[146,177]},"a digit",[],["range",{sourceInterval:[169,177]},"0","9"]],hexDigit:["define",{sourceInterval:[181,254]},"a hexadecimal digit",[],["alt",{sourceInterval:[219,254]},["app",{sourceInterval:[219,224]},"digit",[]],["range",{sourceInterval:[231,239]},"a","f"],["range",{sourceInterval:[246,254]},"A","F"]]],ListOf:["define",{sourceInterval:[258,336]},null,["elem","sep"],["alt",{sourceInterval:[282,336]},["app",{sourceInterval:[282,307]},"NonemptyListOf",[["param",{sourceInterval:[297,301]},0],["param",{sourceInterval:[303,306]},1]]],["app",{sourceInterval:[314,336]},"EmptyListOf",[["param",{sourceInterval:[326,330]},0],["param",{sourceInterval:[332,335]},1]]]]],NonemptyListOf:["define",{sourceInterval:[340,388]},null,["elem","sep"],["seq",{sourceInterval:[372,388]},["param",{sourceInterval:[372,376]},0],["star",{sourceInterval:[377,388]},["seq",{sourceInterval:[378,386]},["param",{sourceInterval:[378,381]},1],["param",{sourceInterval:[382,386]},0]]]]],EmptyListOf:["define",{sourceInterval:[392,434]},null,["elem","sep"],["seq",{sourceInterval:[438,438]}]],listOf:["define",{sourceInterval:[438,516]},null,["elem","sep"],["alt",{sourceInterval:[462,516]},["app",{sourceInterval:[462,487]},"nonemptyListOf",[["param",{sourceInterval:[477,481]},0],["param",{sourceInterval:[483,486]},1]]],["app",{sourceInterval:[494,516]},"emptyListOf",[["param",{sourceInterval:[506,510]},0],["param",{sourceInterval:[512,515]},1]]]]],nonemptyListOf:["define",{sourceInterval:[520,568]},null,["elem","sep"],["seq",{sourceInterval:[552,568]},["param",{sourceInterval:[552,556]},0],["star",{sourceInterval:[557,568]},["seq",{sourceInterval:[558,566]},["param",{sourceInterval:[558,561]},1],["param",{sourceInterval:[562,566]},0]]]]],emptyListOf:["define",{sourceInterval:[572,682]},null,["elem","sep"],["seq",{sourceInterval:[685,685]}]],applySyntactic:["define",{sourceInterval:[685,710]},null,["app"],["param",{sourceInterval:[707,710]},0]]}]);lt.BuiltInRules=At,le(lt.BuiltInRules);var zr=st(["grammar",{source:`Ohm {

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
`],["app",{sourceInterval:[2439,2442]},"end",[]]]]]],comment_multiLine:["define",{sourceInterval:[2465,2501]},null,[],["seq",{sourceInterval:[2465,2487]},["terminal",{sourceInterval:[2465,2469]},"/*"],["star",{sourceInterval:[2470,2482]},["seq",{sourceInterval:[2471,2480]},["not",{sourceInterval:[2471,2476]},["terminal",{sourceInterval:[2472,2476]},"*/"]],["app",{sourceInterval:[2477,2480]},"any",[]]]],["terminal",{sourceInterval:[2483,2487]},"*/"]]],comment:["define",{sourceInterval:[2398,2501]},null,[],["alt",{sourceInterval:[2412,2501]},["app",{sourceInterval:[2412,2443]},"comment_singleLine",[]],["app",{sourceInterval:[2465,2487]},"comment_multiLine",[]]]],tokens:["define",{sourceInterval:[2505,2520]},null,[],["star",{sourceInterval:[2514,2520]},["app",{sourceInterval:[2514,2519]},"token",[]]]],token:["define",{sourceInterval:[2524,2600]},null,[],["alt",{sourceInterval:[2532,2600]},["app",{sourceInterval:[2532,2540]},"caseName",[]],["app",{sourceInterval:[2543,2550]},"comment",[]],["app",{sourceInterval:[2553,2558]},"ident",[]],["app",{sourceInterval:[2561,2569]},"operator",[]],["app",{sourceInterval:[2572,2583]},"punctuation",[]],["app",{sourceInterval:[2586,2594]},"terminal",[]],["app",{sourceInterval:[2597,2600]},"any",[]]]],operator:["define",{sourceInterval:[2604,2669]},null,[],["alt",{sourceInterval:[2615,2669]},["terminal",{sourceInterval:[2615,2619]},"<:"],["terminal",{sourceInterval:[2622,2625]},"="],["terminal",{sourceInterval:[2628,2632]},":="],["terminal",{sourceInterval:[2635,2639]},"+="],["terminal",{sourceInterval:[2642,2645]},"*"],["terminal",{sourceInterval:[2648,2651]},"+"],["terminal",{sourceInterval:[2654,2657]},"?"],["terminal",{sourceInterval:[2660,2663]},"~"],["terminal",{sourceInterval:[2666,2669]},"&"]]],punctuation:["define",{sourceInterval:[2673,2709]},null,[],["alt",{sourceInterval:[2687,2709]},["terminal",{sourceInterval:[2687,2690]},"<"],["terminal",{sourceInterval:[2693,2696]},">"],["terminal",{sourceInterval:[2699,2702]},","],["terminal",{sourceInterval:[2705,2709]},"--"]]]}]);const ft=Object.create(U.prototype);function qr(p,s){for(const l in p)if(l===s)return!0;return!1}function kr(p,s,l){const d=new $t;let v,_,D,te=!1;return(l||zr).createSemantics().addOperation("visit",{Grammars(Y){return Y.children.map(K=>K.visit())},Grammar(Y,K,ce,Ce,He){const wt=Y.visit();v=d.newGrammar(wt),K.child(0)&&K.child(0).visit(),Ce.children.map(Ur=>Ur.visit());const Et=v.build();if(Et.source=this.source.trimmed(),qr(s,wt))throw Ae(Et);return s[wt]=Et,Et},SuperGrammar(Y,K){const ce=K.visit();if(ce==="null")v.withSuperGrammar(null);else{if(!s||!qr(s,ce))throw ue(ce,s,K.source);v.withSuperGrammar(s[ce])}},Rule_define(Y,K,ce,Ce,He){_=Y.visit(),D=K.children.map(Sn=>Sn.visit())[0]||[],!v.defaultStartRule&&v.ensureSuperGrammar()!==lt.ProtoBuiltInRules&&v.withDefaultStartRule(_);const wt=He.visit(),Et=ce.children.map(Sn=>Sn.visit())[0],Ur=this.source.trimmed();return v.define(_,D,wt,Et,Ur)},Rule_override(Y,K,ce,Ce){_=Y.visit(),D=K.children.map(Et=>Et.visit())[0]||[];const He=this.source.trimmed();v.ensureSuperGrammarRuleForOverriding(_,He),te=!0;const wt=Ce.visit();return te=!1,v.override(_,D,wt,null,He)},Rule_extend(Y,K,ce,Ce){_=Y.visit(),D=K.children.map(Et=>Et.visit())[0]||[];const He=Ce.visit(),wt=this.source.trimmed();return v.extend(_,D,He,null,wt)},RuleBody(Y,K){return d.alt(...K.visit()).withSource(this.source)},OverrideRuleBody(Y,K){const ce=K.visit(),Ce=ce.indexOf(ft);if(Ce>=0){const He=ce.slice(0,Ce),wt=ce.slice(Ce+1);return wt.forEach(Et=>{if(Et===ft)throw Ie(Et)}),new _e(v.superGrammar,_,He,wt).withSource(this.source)}else return d.alt(...ce).withSource(this.source)},Formals(Y,K,ce){return K.visit()},Params(Y,K,ce){return K.visit()},Alt(Y){return d.alt(...Y.visit()).withSource(this.source)},TopLevelTerm_inline(Y,K){const ce=_+"_"+K.visit(),Ce=Y.visit(),He=this.source.trimmed(),wt=!(v.superGrammar&&v.superGrammar.rules[ce]);te&&!wt?v.override(ce,D,Ce,null,He):v.define(ce,D,Ce,null,He);const Et=D.map(Ur=>d.app(Ur));return d.app(ce,Et).withSource(Ce.source)},OverrideTopLevelTerm_superSplice(Y){return ft},Seq(Y){return d.seq(...Y.children.map(K=>K.visit())).withSource(this.source)},Iter_star(Y,K){return d.star(Y.visit()).withSource(this.source)},Iter_plus(Y,K){return d.plus(Y.visit()).withSource(this.source)},Iter_opt(Y,K){return d.opt(Y.visit()).withSource(this.source)},Pred_not(Y,K){return d.not(K.visit()).withSource(this.source)},Pred_lookahead(Y,K){return d.lookahead(K.visit()).withSource(this.source)},Lex_lex(Y,K){return d.lex(K.visit()).withSource(this.source)},Base_application(Y,K){const ce=K.children.map(Ce=>Ce.visit())[0]||[];return d.app(Y.visit(),ce).withSource(this.source)},Base_range(Y,K,ce){return d.range(Y.visit(),ce.visit()).withSource(this.source)},Base_terminal(Y){return d.terminal(Y.visit()).withSource(this.source)},Base_paren(Y,K,ce){return K.visit()},ruleDescr(Y,K,ce){return K.visit()},ruleDescrText(Y){return this.sourceString.trim()},caseName(Y,K,ce,Ce,He){return ce.visit()},name(Y,K){return this.sourceString},nameFirst(Y){},nameRest(Y){},terminal(Y,K,ce){return K.children.map(Ce=>Ce.visit()).join("")},oneCharTerminal(Y,K,ce){return K.visit()},escapeChar(Y){try{return z(this.sourceString)}catch(K){throw K instanceof RangeError&&K.message.startsWith("Invalid code point ")?De(Y):K}},NonemptyListOf(Y,K,ce){return[Y.visit()].concat(ce.children.map(Ce=>Ce.visit()))},EmptyListOf(){return[]},_terminal(){return this.sourceString}})(p).visit()}var rr=st(["grammar",{source:`OperationsAndAttributes {

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

}`},"OperationsAndAttributes",null,"AttributeSignature",{AttributeSignature:["define",{sourceInterval:[29,58]},null,[],["app",{sourceInterval:[54,58]},"name",[]]],OperationSignature:["define",{sourceInterval:[62,100]},null,[],["seq",{sourceInterval:[87,100]},["app",{sourceInterval:[87,91]},"name",[]],["opt",{sourceInterval:[92,100]},["app",{sourceInterval:[92,99]},"Formals",[]]]]],Formals:["define",{sourceInterval:[104,143]},null,[],["seq",{sourceInterval:[118,143]},["terminal",{sourceInterval:[118,121]},"("],["app",{sourceInterval:[122,139]},"ListOf",[["app",{sourceInterval:[129,133]},"name",[]],["terminal",{sourceInterval:[135,138]},","]]],["terminal",{sourceInterval:[140,143]},")"]]],name:["define",{sourceInterval:[147,187]},"a name",[],["seq",{sourceInterval:[168,187]},["app",{sourceInterval:[168,177]},"nameFirst",[]],["star",{sourceInterval:[178,187]},["app",{sourceInterval:[178,186]},"nameRest",[]]]]],nameFirst:["define",{sourceInterval:[191,223]},null,[],["alt",{sourceInterval:[207,223]},["terminal",{sourceInterval:[207,210]},"_"],["app",{sourceInterval:[217,223]},"letter",[]]]],nameRest:["define",{sourceInterval:[227,257]},null,[],["alt",{sourceInterval:[242,257]},["terminal",{sourceInterval:[242,245]},"_"],["app",{sourceInterval:[252,257]},"alnum",[]]]]}]);en(lt.BuiltInRules),Or(rr);function en(p){const s={empty(){return this.iteration()},nonEmpty(l,d,v){return this.iteration([l].concat(v.children))}};Rt.BuiltInSemantics=Rt.createSemantics(p,null).addOperation("asIteration",{emptyListOf:s.empty,nonemptyListOf:s.nonEmpty,EmptyListOf:s.empty,NonemptyListOf:s.nonEmpty})}function Or(p){Rt.prototypeGrammarSemantics=p.createSemantics().addOperation("parse",{AttributeSignature(s){return{name:s.parse(),formals:[]}},OperationSignature(s,l){return{name:s.parse(),formals:l.children.map(d=>d.parse())[0]||[]}},Formals(s,l,d){return l.asIteration().children.map(v=>v.parse())},name(s,l){return this.sourceString}}),Rt.prototypeGrammar=p}function vo(p){let s=0;const l=[0],d=()=>l[l.length-1],v={},_=/( *).*(?:$|\r?\n|\r)/g;let D;for(;(D=_.exec(p))!=null;){const[te,Q]=D;if(te.length===0)break;const me=Q.length,Y=d(),K=s+me;if(me>Y)l.push(me),v[K]=1;else if(me<Y){const ce=l.length;for(;d()!==me;)l.pop();v[K]=-1*(ce-l.length)}s+=te.length}return l.length>1&&(v[s]=1-l.length),v}const bs="an indented block",ws="a dedent",xs=1114112;class yo extends Ue{constructor(s){super(s.input),this.state=s}_indentationAt(s){return this.state.userData[s]||0}atEnd(){return super.atEnd()&&this._indentationAt(this.pos)===0}next(){if(this._indentationAt(this.pos)!==0){this.examinedLength=Math.max(this.examinedLength,this.pos);return}return super.next()}nextCharCode(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),xs):super.nextCharCode()}nextCodePoint(){return this._indentationAt(this.pos)!==0?(this.examinedLength=Math.max(this.examinedLength,this.pos),xs):super.nextCodePoint()}}class Is extends U{constructor(s=!0){super(),this.isIndent=s}allowsSkippingPrecedingSpace(){return!0}eval(s){const{inputStream:l}=s,d=s.userData;s.doNotMemoize=!0;const v=l.pos,_=this.isIndent?1:-1;return(d[v]||0)*_>0?(s.userData=Object.create(d),s.userData[v]-=_,s.pushBinding(new Re(0),v),!0):(s.processFailure(v,this),!1)}getArity(){return 1}_assertAllApplicationsAreValid(s,l){}_isNullable(s,l){return!1}assertChoicesHaveUniformArity(s){}assertIteratedExprsAreNotNullable(s){}introduceParams(s){return this}substituteParams(s){return this}toString(){return this.isIndent?"indent":"dedent"}toDisplayString(){return this.toString()}toFailure(s){const l=this.isIndent?bs:ws;return new ut(this,l,"description")}}const bo=new V("indent"),wo=new V("dedent"),xo=new _e(At,"any",[bo,wo],[]),ks=new $t().newGrammar("IndentationSensitive").withSuperGrammar(At).define("indent",[],new Is(!0),bs,void 0,!0).define("dedent",[],new Is(!1),ws,void 0,!0).extend("any",[],xo,"any character",void 0).build();Object.assign(ks,{_matchStateInitializer(p){p.userData=vo(p.input),p.inputStream=new yo(p)},supportsIncrementalParsing:!1});const Io="17.1.0";lt.initApplicationParser(zr,kr);const ko=p=>!!p.constructor&&typeof p.constructor.isBuffer=="function"&&p.constructor.isBuffer(p);function So(p,s){const l=zr.match(p,"Grammars");if(l.failed())throw S(l);return kr(l,s)}function Co(p,s){const l=Ss(p,s),d=Object.keys(l);if(d.length===0)throw new Error("Missing grammar definition");if(d.length>1){const _=l[d[1]].source;throw new Error(wr(_.sourceString,_.startIdx)+"Found more than one grammar definition -- use ohm.grammars() instead.")}return l[d[0]]}function Ss(p,s){const l=Object.create(s||{});if(typeof p!="string")if(ko(p))p=p.toString();else throw new TypeError("Expected string as first argument, got "+B(p));return So(p,l),l}return nr.ExperimentalIndentationSensitive=ks,nr._buildGrammar=kr,nr.grammar=Co,nr.grammars=Ss,nr.makeRecipe=st,nr.ohmGrammar=zr,nr.pexprs=Ti,nr.version=Io,nr}var Fi,Ys;function oo(){if(Ys)return Fi;Ys=1;const{makeRecipe:r}=Tu();return Fi=r(["grammar",{source:`PEP508 {
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
`],["terminal",{sourceInterval:[6123,6126]},"#"]]],["app",{sourceInterval:[6128,6131]},"any",[]]]]]}]),Fi}var Pn={},Js;function Zs(){return Js||(Js=1,(function(r){var e=Pn&&Pn.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(r,"__esModule",{value:!0}),r.RequirementsSyntaxError=r.semantics=void 0;const t=e(oo());r.semantics=t.default.createSemantics();function n(a){return{startIdx:a.source.startIdx,endIdx:a.source.endIdx}}function i(a,c){return{data:c,location:n(a)}}r.semantics.addOperation("extract",{File:a=>a.asIteration().children.map(c=>c.extract()).filter(Boolean),Line:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extract())||null},NameReq:(a,c,f,y)=>{var T,w;return{type:"ProjectName",name:a.sourceString,versionSpec:f.extract(),extras:(T=c.child(0))===null||T===void 0?void 0:T.extract(),environmentMarkerTree:(w=y.child(0))===null||w===void 0?void 0:w.extract()}},UrlReq:(a,c,f,y,T)=>{var w,x;return{type:"ProjectURL",name:a.sourceString,url:f.extract(),extras:(w=c.child(0))===null||w===void 0?void 0:w.extract(),environmentMarkerTree:(x=T.child(0))===null||x===void 0?void 0:x.extract()}},Extras:(a,c,f)=>c.asIteration().children.map(y=>y.sourceString),RequirementsReq:(a,c)=>({type:"RequirementsFile",path:c.sourceString}),ConstraintsReq:(a,c)=>({type:"ConstraintsFile",path:c.sourceString}),UrlSpec:(a,c)=>c.sourceString,QuotedMarker:(a,c)=>c.extract(),MarkerOr_node:(a,c,f)=>({operator:"or",left:a.extract(),right:f.extract()}),MarkerAnd_node:(a,c,f)=>({operator:"and",left:a.extract(),right:f.extract()}),MarkerExpr_leaf:(a,c,f)=>({left:a.sourceString,operator:c.sourceString,right:f.sourceString}),MarkerExpr_node:(a,c,f)=>c.extract(),VersionSpec_parenthesized:(a,c,f)=>c.extract()||[],VersionMany:a=>{const c=a.asIteration().children;if(c.length!==0)return c.map(f=>f.extract())},VersionOne:(a,c)=>({operator:a.sourceString,version:c.sourceString})}),r.semantics.addOperation("extractLoosely",{LooseFile:a=>a.asIteration().children.map(c=>c.extractLoosely()).filter(Boolean),LooseLine:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLoosely())||null},LooseNameReq:(a,c,f,y)=>{var T;return{type:"ProjectName",name:a.sourceString,extras:(T=c.child(0))===null||T===void 0?void 0:T.extractLoosely(),versionSpec:f.extractLoosely()}},LooseNonNameReq:a=>null,LooseExtras:(a,c,f,y)=>c.asIteration().children.map(T=>T.sourceString),LooseVersionSpec_parenthesized:(a,c,f)=>c.extractLoosely()||[],LooseVersionMany:(a,c)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(y=>y.extractLoosely())},LooseVersionOne:(a,c)=>{const f={operator:a.sourceString};return c.sourceString&&(f.version=c.sourceString),f}}),r.semantics.addOperation("extractWithLocation",{File:a=>a.asIteration().children.map(c=>c.extractWithLocation()).filter(Boolean),Line:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractWithLocation())||null},NameReq:function(a,c,f,y){var T,w;return i(this,{type:"ProjectName",name:i(a,a.sourceString),versionSpec:f.extractWithLocation(),extras:(T=c.child(0))===null||T===void 0?void 0:T.extractWithLocation(),environmentMarkerTree:(w=y.child(0))===null||w===void 0?void 0:w.extractWithLocation()})},UrlReq:function(a,c,f,y,T){var w,x;return i(this,{type:"ProjectURL",name:i(a,a.sourceString),url:f.extractWithLocation(),extras:(w=c.child(0))===null||w===void 0?void 0:w.extractWithLocation(),environmentMarkerTree:(x=T.child(0))===null||x===void 0?void 0:x.extractWithLocation()})},Extras:function(a,c,f){return c.asIteration().children.map(y=>i(y,y.sourceString))},RequirementsReq:function(a,c){return i(this,{type:"RequirementsFile",path:c.sourceString})},ConstraintsReq:function(a,c){return i(this,{type:"ConstraintsFile",path:c.sourceString})},UrlSpec:function(a,c){return i(c,c.sourceString)},QuotedMarker:(a,c)=>i(c,c.extract()),VersionSpec_parenthesized:(a,c,f)=>c.extractWithLocation()||[],VersionMany:a=>{const c=a.asIteration().children;if(c.length!==0)return c.map(f=>f.extractWithLocation())},VersionOne:function(a,c){return i(this,{operator:i(a,a.sourceString),version:i(c,c.sourceString)})}}),r.semantics.addOperation("extractLooselyWithLocation",{LooseFile:a=>a.asIteration().children.map(c=>c.extractLooselyWithLocation()).filter(Boolean),LooseLine:(a,c)=>{var f;return((f=a.child(0))===null||f===void 0?void 0:f.extractLooselyWithLocation())||null},LooseNameReq:function(a,c,f,y){var T;return i(this,{type:"ProjectName",name:i(a,a.sourceString),extras:(T=c.child(0))===null||T===void 0?void 0:T.extractLooselyWithLocation(),versionSpec:f.extractLooselyWithLocation()})},LooseNonNameReq:a=>null,LooseExtras:function(a,c,f,y){return c.asIteration().children.map(T=>i(T,T.sourceString))},LooseVersionSpec_parenthesized:(a,c,f)=>c.extractLooselyWithLocation()||[],LooseVersionMany:(a,c)=>{const f=a.asIteration().children;if(f.length!==0)return f.map(y=>y.extractLooselyWithLocation())},LooseVersionOne:function(a,c){return i(this,{operator:i(a,a.sourceString),...c.sourceString?{version:i(c,c.sourceString)}:{}})}});class o extends Error{}r.RequirementsSyntaxError=o})(Pn)),Pn}var Wr={},Qs;function Ru(){if(Qs)return Wr;Qs=1,Object.defineProperty(Wr,"__esModule",{value:!0}),Wr.VersionOperator=Wr.EnvironmentMarkerVariable=void 0;var r;(function(t){t.PythonVersion="python_version",t.PythonFullVersion="python_full_version",t.OsName="os_name",t.SysPlatform="sys_platform",t.PlatformRelease="platform_release",t.PlatformSystem="platform_system",t.PlatformVersion="platform_version",t.PlatformMachine="platform_machine",t.PlatformPythonImplementation="platform_python_implementation",t.ImplementationName="implementation_name",t.ImplementationVersion="implementation_version",t.Extra="extra"})(r||(Wr.EnvironmentMarkerVariable=r={}));var e;return(function(t){t.CompatibleRelease="~=",t.VersionMatching="==",t.VersionExclusion="!=",t.LessThanOrMatching="<=",t.GreaterThanOrMatching=">=",t.LessThan="<",t.GreaterThan=">",t.ArbitrarilyEqual="==="})(e||(Wr.VersionOperator=e={})),Wr}var Xs;function Pu(){return Xs||(Xs=1,(function(r){var e=Sr&&Sr.__createBinding||(Object.create?(function(w,x,I,z){z===void 0&&(z=I);var B=Object.getOwnPropertyDescriptor(x,I);(!B||("get"in B?!x.__esModule:B.writable||B.configurable))&&(B={enumerable:!0,get:function(){return x[I]}}),Object.defineProperty(w,z,B)}):(function(w,x,I,z){z===void 0&&(z=I),w[z]=x[I]})),t=Sr&&Sr.__exportStar||function(w,x){for(var I in w)I!=="default"&&!Object.prototype.hasOwnProperty.call(x,I)&&e(x,w,I)},n=Sr&&Sr.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(r,"__esModule",{value:!0}),r.parsePipRequirementsLineLoosely=r.parsePipRequirementsFileLoosely=r.parsePipRequirementsLine=r.parsePipRequirementsFile=r.RequirementsSyntaxError=void 0;const i=n(oo()),o=Zs();var a=Zs();Object.defineProperty(r,"RequirementsSyntaxError",{enumerable:!0,get:function(){return a.RequirementsSyntaxError}}),t(Ru(),r);function c(w,x){const I=i.default.match(w,"File");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements file. ${I.shortMessage}`);return x?.includeLocations?(0,o.semantics)(I).extractWithLocation():(0,o.semantics)(I).extract()}r.parsePipRequirementsFile=c;function f(w,x){const I=i.default.match(w,"Line");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to parse requirements line. ${I.shortMessage}`);return x?.includeLocations?(0,o.semantics)(I).extractWithLocation():(0,o.semantics)(I).extract()}r.parsePipRequirementsLine=f;function y(w,x){const I=i.default.match(w,"LooseFile");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements file. ${I.shortMessage}`);return x?.includeLocations?(0,o.semantics)(I).extractLooselyWithLocation():(0,o.semantics)(I).extractLoosely()}r.parsePipRequirementsFileLoosely=y;function T(w,x){const I=i.default.match(w,"LooseLine");if(I.failed())throw new o.RequirementsSyntaxError(`Failed to loosely parse requirements line. ${I.shortMessage}`);return x?.includeLocations?(0,o.semantics)(I).extractLooselyWithLocation():(0,o.semantics)(I).extractLoosely()}r.parsePipRequirementsLineLoosely=T})(Sr)),Sr}var Lu=Pu();function $u(r){return new Worker("/assets/pyworker-Drd8fvVW.js",{type:"module",name:r?.name})}let Du=0;class Nu{constructor(){this.pendingMessages=new Map}async init(e,t){this.workspace=e,this.vars=t??{},this.worker=new $u,this.worker.onmessage=n=>{this.handleWorkerMessage(n.data)},this.worker.onerror=n=>{console.error("Python Worker error:",n)},await this.sendMessage("init",{vars:this.vars}),await this.mountWorkspace(),await this.installDependencies()}handleWorkerMessage(e){if(e.id==="interrupt-buffer"){e.type==="success"?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type==="inputRequest"){const n=e.payload.prompt||"Input:",i=window.prompt(n);this.worker.postMessage({id:e.id,type:"inputResponse",payload:{value:i,cancelled:i===null}});return}if(e.type==="stdout"){this.stdoutCallback?this.stdoutCallback(e.payload):console.info(e.payload);return}if(e.type==="stderr"){this.stderrCallback?this.stderrCallback(e.payload):console.error(e.payload);return}if(e.type==="console"){const{level:n,message:i}=e.payload;typeof window<"u"&&window.logToTerminal&&window.logToTerminal("Python Worker",i,n);return}const t=this.pendingMessages.get(e.id);t&&(this.pendingMessages.delete(e.id),e.type==="success"?t.resolve(e.payload):e.type==="error"&&t.reject(new Error(e.payload.message)))}async sendMessage(e,t){if(!this.worker)throw new Error("PyEnv not initialized yet: see init()");const n=`msg-${Du++}`,i={id:n,type:e,payload:t};return new Promise((o,a)=>{this.pendingMessages.set(n,{resolve:o,reject:a}),this.worker.postMessage(i)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,t){const n=await this.sendMessage("runFunction",{name:e,args:t});return We(fr,this.workspace),n}async setGlobal(e,t){await this.sendMessage("setGlobal",{key:e,value:t})}async mountWorkspace(e="/workspace"){const t=await Tt.getWorkspace();await this.sendMessage("mountWorkspace",{handle:t.getHandle(),mountPoint:e})}async installDependencies(){const e=await this.workspace?.getResource("requirements.txt");if(e){const t=(await e.getContents()).replaceAll("\r",""),n=Lu.parsePipRequirementsFile(t).filter(i=>"name"in i).map(i=>i.name);await this.loadPackages(n)}}async loadPackages(e){e.length>0&&await this.sendMessage("loadPackages",{packages:e})}async syncWorkspace(){await this.sendMessage("syncWorkspace"),We(fr,this.workspace)}async execCode(e){const t=await this.sendMessage("execCode",{code:e});return We(fr,this.workspace),t}async execScript(e){const t=e.split(".")[0],n=e.includes(":")?e.split(":").reverse()[0]:void 0;return await this.execModule(t,n)}async execModule(e,t){const n=await this.sendMessage("execModule",{moduleName:e,entryName:t,vars:this.vars});return We(fr,this.workspace),n}async getVersion(){return await this.sendMessage("getVersion")}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&(this.worker.terminate(),this.worker=void 0),this.pendingMessages.clear()}}class Mu{constructor(){this.packages=[]}addPackage(e){this.packages.push(e)}hasPackages(){return this.packages.length>0&&this.packages.some(e=>e.dependencies&&Object.keys(e.dependencies).length>0)}renderTree(){return this.packages.length===0?j``:j`
            <wa-tree style="--indent-guide-width: 1px;">
                ${this.packages.map(e=>{const t=e.dependencies||{},n=Object.entries(t);return n.length===0?j``:j`
                        <wa-tree-item expanded>
                            <span>${e.name}</span>
                            ${n.map(([i,o])=>j`
                                <wa-tree-item>
                                    <span>${i} <small>${o}</small></span>
                                </wa-tree-item>
                            `)}
                        </wa-tree-item>
                    `})}
            </wa-tree>
        `}}const vi=new Mu,Fu="https://api.github.com";function zu(){const r=Qr.getCurrentApp();if(r?.metadata?.github){const e=r.metadata.github;if(e.owner&&e.repo)return{owner:e.owner,repo:e.repo}}throw new Error("GitHub repository not configured. Specify metadata.github in AppDefinition.")}async function qu(r=100){try{const e=zu(),t=await fetch(`${Fu}/repos/${e.owner}/${e.repo}/releases?per_page=${r}`);return t.ok?await t.json():[]}catch(e){return console.error("Failed to fetch releases:",e),[]}}function Uu(r,e){const t=r.replace(/^v/,""),n=e.replace(/^v/,""),i=t.split(".").map(Number),o=n.split(".").map(Number);for(let a=0;a<Math.max(i.length,o.length);a++){const c=i[a]||0,f=o[a]||0;if(f>c)return!0;if(f<c)return!1}return!1}et({command:{id:"show_version_info",name:"Show Version Info",description:"Shows application version information",parameters:[]},handler:{execute:async r=>{const e=Qr.getCurrentApp();if(!e){je("No app loaded");return}const t=vi.hasPackages(),n=vi.renderTree();let i=null;const o=()=>(i||(i=document.getElementById("global-dialog-container")||document.createElement("div"),i.id||(i.id="global-dialog-container",document.body.appendChild(i))),i),a=()=>{i&&Tr(j``,i)},c=B=>{const de=Je.parse(B,{async:!1});return j`${Bn(de)}`};let f=[];try{f=await qu()}catch{f=[]}const y=e.version==="0.0.0",T=f.length>0?f.findIndex(B=>B.tag_name===e.version):-1,w=T>=0?T:0;let x=w;const I=B=>{if(y)return`**Development Build**

${e.description||""}`;if(f.length===0)return`**Version:** ${e.version}

${e.description||""}`;const de=f[B],ve=de.tag_name===e.version;let U=`**Version:** ${de.tag_name}`;ve&&(U+=" (Current)"),U+=`

`;const L=new Date(de.published_at).toLocaleDateString();return U+=`**Released:** ${L}

`,!ve&&Uu(e.version,de.tag_name)&&(U+=`⚠️ **Update available**

`),de.body&&(U+=`---

${de.body}`),U},z=B=>{const de=I(B),ve=f.length>0,U=j`
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
                                ${t?j`<wa-tab slot="nav" panel="packages">NPM Packages</wa-tab>`:""}
                                
                                <wa-tab-panel name="release">
                                    ${c(de)}
                                </wa-tab-panel>
                                
                                ${t?j`
                                    <wa-tab-panel name="packages">
                                        ${n}
                                    </wa-tab-panel>
                                `:""}
                            </wa-tab-group>
                        </div>
                        <div slot="footer">
                            ${ve?j`
                                <wa-button 
                                    variant="default"
                                    ?disabled=${B===f.length-1}
                                    @click=${()=>{B<f.length-1&&(x=B+1,z(x))}}
                                >
                                    ← Previous
                                </wa-button>
                                <wa-button 
                                    variant="default"
                                    ?disabled=${B===0}
                                    @click=${()=>{B>0&&(x=B-1,z(x))}}
                                >
                                    Next →
                                </wa-button>
                            `:""}
                            <wa-button variant="primary" @click=${a}>Close</wa-button>
                        </div>
                    </wa-dialog>
                `;Tr(U,o())};return z(w),new Promise(B=>{const de=()=>{i?.querySelector("wa-dialog[open]")?setTimeout(de,100):B()};de()})}}});et({command:{id:"python",name:"Run Python Script",description:"Executes a Python script given its file path",parameters:[{name:"script",description:"the path to a Python script to run",required:!1}]},handler:{execute:async r=>{const e=r.params.script;if(!e)return;const t=new Nu,n=await Tt.getWorkspace();await t.init(n,r),await t.installDependencies(),await t.execScript(e)}}});et({command:{id:"js",name:"Run JavaScript file",description:"Executes a JavaScript file given its path",parameters:[{name:"script",description:"the path to a JavaScript file to run",required:!1}]}});et({command:{id:"save",name:"Save editor",description:"Saves the active/focused editor",keyBinding:"CTRL+S",parameters:[]},handler:{execute:async r=>{const e=ln.get()||Ze.get();e&&e.isDirty()&&e.save()}},contribution:{target:"toolbar:.system.editors",icon:"floppy-disk",label:"Save active editor",slot:"start",disabled:()=>{const r=Ze.get();return!r||!r.isDirty()}}});et({command:{id:"run_python",name:"Run Python Cell",description:"Runs active Python code in a supporting context (e.g. notebook, terminal, etc.)",keyBinding:"CTRL+R",parameters:[]}});const lo="theme";async function co(r){const e=document.documentElement;e.classList.remove("wa-dark","wa-light"),e.classList.add(r)}async function ju(){const r=await mt.get(lo);await co(r||"wa-dark")}async function Wu(r){await mt.set(lo,r)}et({command:{id:"switch_theme",name:"Switch theme",description:"Switches between dark and light theme",parameters:[]},handler:{execute:async r=>{const t=document.documentElement.classList.contains("wa-dark")?"wa-light":"wa-dark";await co(t),await Wu(t)}},contribution:{target:xn,icon:"circle-half-stroke",label:"Theme Switcher"}});ju().catch(r=>{console.error("Failed to load theme preference:",r)});et({command:{id:"fullscreen",name:"Toggle fullscreen",description:"Toggles fullscreen mode",parameters:[]},handler:{execute:async r=>{document.fullscreenElement===document.body?await document.exitFullscreen():await document.body.requestFullscreen()}},contribution:{target:xn,icon:"expand",label:"Fullscreen"}});et({command:{id:"open_settings",name:"Open Settings",description:"Opens the settings file in an editor",parameters:[]},handler:{execute:r=>{const e={title:"settings.json",data:{async getContents(){const t=await mt.getAll();return JSON.stringify(t,void 0,2)},getName(){return e.key},saveContents(t){const n=JSON.parse(t);return mt.setAll(n)}},key:"setting.json",editorId:"monaco-editor",icon:"gear",state:{}};e.widgetFactory=()=>j`
                <k-monaco-editor .input=${e}></k-monaco-editor>`,Lr.loadEditor(e).then()}},contribution:{target:xn,icon:"gear",label:"Open Settings"}});et({command:{id:"open_extensions",name:"Open Extensions",description:"Opens the extensions registry",parameters:[]},handler:{execute:r=>{const e={title:"Extensions",data:{},key:"system.extensions",editorId:"extensions-editor",icon:"puzzle-piece",state:{},noOverflow:!0};e.widgetFactory=()=>j`
                <k-extensions></k-extensions>`,Lr.loadEditor(e).then()}},contribution:{target:xn,icon:"puzzle-piece",label:"Open Extensions"}});Le.registerAll({command:{id:"toast_message",name:"Toast message to user",description:"Shows a toast message",parameters:[{name:"message",description:"the message to toast",required:!0},{name:"type",description:"the toast type: info (default), or error",required:!1}]},handler:{execute:({params:{message:r,type:e}})=>{r&&(e==="error"?je(r):Gt(r))}}});const Bu="@kispace-io/appspace",Vu="0.0.0",Gu={"@awesome.me/webawesome":"^3.0.0","@fortawesome/fontawesome-free":"^7.1.0","@fortawesome/fontawesome-svg-core":"^7.1.0","@fortawesome/free-solid-svg-icons":"^7.1.0","@lit-labs/signals":"^0.1.3","@lit/context":"^1.1.6","@mlc-ai/web-llm":"^0.2.79","@types/papaparse":"^5.3.16","@xterm/xterm":"^5.5.0",axios:"^1.13.1",dotenv:"^17.2.3","idb-keyval":"^6.2.2",jsonata:"^2.1.0",jszip:"^3.10.1",lit:"^3.2.1",marked:"^16.4.1","monaco-editor":"^0.54.0",papaparse:"^5.5.3","pdfjs-dist":"^4.0.0","pip-requirements-js":"^1.0.2","pubsub-js":"^1.9.5",pyodide:"^0.27.7",rxdb:"^15.0.0","@xenova/transformers":"^2.17.2","signal-polyfill":"^0.2.2","signal-utils":"^0.21.1","toastify-js":"^1.12.0",uuid:"^13.0.0","wasm-git":"^0.0.13"},Hu={typescript:"^5.9.3",vite:"^7.1.12"},ri={name:Bu,version:Vu,dependencies:Gu,devDependencies:Hu};vi.addPackage({name:ri.name,version:ri.version,dependencies:ri.dependencies,devDependencies:ri.devDependencies});function ni(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var zi={exports:{}},ea;function Ku(){return ea||(ea=1,(function(r,e){(function(t){r.exports=t()})(function(){return(function(){function t(n,i,o){function a(y,T){if(!i[y]){if(!n[y]){var w=typeof ni=="function"&&ni;if(!T&&w)return w(y,!0);if(c)return c(y,!0);var x=new Error("Cannot find module '"+y+"'");throw x.code="MODULE_NOT_FOUND",x}var I=i[y]={exports:{}};n[y][0].call(I.exports,function(z){var B=n[y][1][z];return a(B||z)},I,I.exports,t,n,i,o)}return i[y].exports}for(var c=typeof ni=="function"&&ni,f=0;f<o.length;f++)a(o[f]);return a}return t})()({1:[function(t,n,i){const o=t("./utils"),a=(function(){const c=o.stringToArray,f=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],y=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],T=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],w=["Thousand","Million","Billion","Trillion"];function x(R,N){var P=function(ne,X,W){var re="";if(ne<=19)re=(X?" and ":"")+(W?y[ne]:f[ne]);else if(ne<100){const Ne=Math.floor(ne/10),ze=ne%10;re=(X?" and ":"")+T[Ne-2],ze>0?re+="-"+P(ze,!1,W):W&&(re=re.substring(0,re.length-1)+"ieth")}else if(ne<1e3){const Ne=Math.floor(ne/100),ze=ne%100;re=(X?", ":"")+f[Ne]+" Hundred",ze>0?re+=P(ze,!0,W):W&&(re+="th")}else{var ye=Math.floor(Math.log10(ne)/3);ye>w.length&&(ye=w.length);const Ne=Math.pow(10,ye*3),ze=Math.floor(ne/Ne),ge=ne-ze*Ne;re=(X?", ":"")+P(ze,!1,!1)+" "+w[ye-1],ge>0?re+=P(ge,!0,W):W&&(re+="th")}return re},H=P(R,!1,N);return H}const I={};f.forEach(function(R,N){I[R.toLowerCase()]=N}),y.forEach(function(R,N){I[R.toLowerCase()]=N}),T.forEach(function(R,N){const P=R.toLowerCase();I[P]=(N+2)*10,I[P.substring(0,R.length-1)+"ieth"]=I[P]}),I.hundredth=100,w.forEach(function(R,N){const P=R.toLowerCase(),H=Math.pow(10,(N+1)*3);I[P]=H,I[P+"th"]=H});function z(R){const P=R.split(/,\s|\sand\s|[\s\\-]/).map(X=>I[X]);let H=[0];return P.forEach(X=>{if(X<100){let W=H.pop();W>=1e3&&(H.push(W),W=0),H.push(W+X)}else H.push(H.pop()*X)}),H.reduce((X,W)=>X+W,0)}const B=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],de={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function ve(R){for(var N=0;N<B.length;N++){const P=B[N];if(R>=P[0])return P[1]+ve(R-P[0])}return""}function U(R){for(var N=0,P=1,H=R.length-1;H>=0;H--){const ne=R[H],X=de[ne];X<P?N-=X:(P=X,N+=X)}return N}function L(R,N){for(var P=[],H=N.charCodeAt(0);R>0;)P.unshift(String.fromCharCode((R-1)%26+H)),R=Math.floor((R-1)/26);return P.join("")}function G(R,N){for(var P=N.charCodeAt(0),H=0,ne=0;ne<R.length;ne++)H+=(R.charCodeAt(R.length-ne-1)-P+1)*Math.pow(26,ne);return H}function F(R,N){if(typeof R>"u")return;R=Math.floor(R);const P=_e(N);return J(R,P)}const O={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},q={UPPER:"upper",LOWER:"lower",TITLE:"title"};function J(R,N){let P;const H=R<0;switch(R=Math.abs(R),N.primary){case O.LETTERS:P=L(R,N.case===q.UPPER?"A":"a");break;case O.ROMAN:P=ve(R),N.case===q.UPPER&&(P=P.toUpperCase());break;case O.WORDS:P=x(R,N.ordinal),N.case===q.UPPER?P=P.toUpperCase():N.case===q.LOWER&&(P=P.toLowerCase());break;case O.DECIMAL:P=""+R;var ne=N.mandatoryDigits-P.length;if(ne>0){var X=new Array(ne+1).join("0");P=X+P}if(N.zeroCode!==48&&(P=c(P).map(Ne=>String.fromCodePoint(Ne.codePointAt(0)+N.zeroCode-48)).join("")),N.regular){const Ne=Math.floor((P.length-1)/N.groupingSeparators.position);for(let ze=Ne;ze>0;ze--){const ge=P.length-ze*N.groupingSeparators.position;P=P.substr(0,ge)+N.groupingSeparators.character+P.substr(ge)}}else N.groupingSeparators.reverse().forEach(Ne=>{const ze=P.length-Ne.position;P=P.substr(0,ze)+Ne.character+P.substr(ze)});if(N.ordinal){var W={1:"st",2:"nd",3:"rd"},re=P[P.length-1],ye=W[re];(!ye||P.length>1&&P[P.length-2]==="1")&&(ye="th"),P=P+ye}break;case O.SEQUENCE:throw{code:"D3130",value:N.token}}return H&&(P="-"+P),P}const Se=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function _e(R){const N={type:"integer",primary:O.DECIMAL,case:q.LOWER,ordinal:!1};let P,H;const ne=R.lastIndexOf(";");switch(ne===-1?P=R:(P=R.substring(0,ne),H=R.substring(ne+1),H[0]==="o"&&(N.ordinal=!0)),P){case"A":N.case=q.UPPER;case"a":N.primary=O.LETTERS;break;case"I":N.case=q.UPPER;case"i":N.primary=O.ROMAN;break;case"W":N.case=q.UPPER,N.primary=O.WORDS;break;case"Ww":N.case=q.TITLE,N.primary=O.WORDS;break;case"w":N.primary=O.WORDS;break;default:{let X=null,W=0,re=0,ye=[],Ne=0;if(c(P).map(ge=>ge.codePointAt(0)).reverse().forEach(ge=>{let Ie=!1;for(let De=0;De<Se.length;De++){const he=Se[De];if(ge>=he&&ge<=he+9){if(Ie=!0,W++,Ne++,X===null)X=he;else if(he!==X)throw{code:"D3131"};break}}Ie||(ge===35?(Ne++,re++):ye.push({position:Ne,character:String.fromCodePoint(ge)}))}),W>0){N.primary=O.DECIMAL,N.zeroCode=X,N.mandatoryDigits=W,N.optionalDigits=re;const Ie=function(De){if(De.length===0)return 0;const he=De[0].character;for(let ht=1;ht<De.length;ht++)if(De[ht].character!==he)return 0;const dt=De.map(ht=>ht.position),Ut=function(ht,kt){return kt===0?ht:Ut(kt,ht%kt)},It=dt.reduce(Ut);for(let ht=1;ht<=dt.length;ht++)if(dt.indexOf(ht*It)===-1)return 0;return It}(ye);Ie>0?(N.regular=!0,N.groupingSeparators={position:Ie,character:ye[0].character}):(N.regular=!1,N.groupingSeparators=ye)}else N.primary=O.SEQUENCE,N.token=P}}return N}const se={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function M(R){var N=[];const P={type:"datetime",parts:N},H=function(Ie,De){if(De>Ie){let he=R.substring(Ie,De);he=he.split("]]").join("]"),N.push({type:"literal",value:he})}};for(var ne=0,X=0;X<R.length;){if(R.charAt(X)==="["){if(R.charAt(X+1)==="["){H(ne,X),N.push({type:"literal",value:"["}),X+=2,ne=X;continue}if(H(ne,X),ne=X,X=R.indexOf("]",ne),X===-1)throw{code:"D3135"};let Ie=R.substring(ne+1,X);Ie=Ie.split(/\s+/).join("");var W={type:"marker",component:Ie.charAt(0)},re=Ie.lastIndexOf(","),ye;if(re!==-1){const De=Ie.substring(re+1),he=De.indexOf("-");let dt,Ut;const It=function(kt){if(!(typeof kt>"u"||kt==="*"))return parseInt(kt)};he===-1?dt=De:(dt=De.substring(0,he),Ut=De.substring(he+1));const ht={min:It(dt),max:It(Ut)};W.width=ht,ye=Ie.substring(1,re)}else ye=Ie.substring(1);if(ye.length===1)W.presentation1=ye;else if(ye.length>1){var Ne=ye.charAt(ye.length-1);"atco".indexOf(Ne)!==-1?(W.presentation2=Ne,Ne==="o"&&(W.ordinal=!0),W.presentation1=ye.substring(0,ye.length-1)):W.presentation1=ye}else W.presentation1=se[W.component];if(typeof W.presentation1>"u")throw{code:"D3132",value:W.component};if(W.presentation1[0]==="n")W.names=q.LOWER;else if(W.presentation1[0]==="N")W.presentation1[1]==="n"?W.names=q.TITLE:W.names=q.UPPER;else if("YMDdFWwXxHhmsf".indexOf(W.component)!==-1){var ze=W.presentation1;if(W.presentation2&&(ze+=";"+W.presentation2),W.integerFormat=_e(ze),W.width&&W.width.min!==void 0&&W.integerFormat.mandatoryDigits<W.width.min&&(W.integerFormat.mandatoryDigits=W.width.min),W.component==="Y")if(W.n=-1,W.width&&W.width.max!==void 0)W.n=W.width.max,W.integerFormat.mandatoryDigits=W.n;else{var ge=W.integerFormat.mandatoryDigits+W.integerFormat.optionalDigits;ge>=2&&(W.n=ge)}const De=N[N.length-1];De&&De.integerFormat&&(De.integerFormat.parseWidth=De.integerFormat.mandatoryDigits)}(W.component==="Z"||W.component==="z")&&(W.integerFormat=_e(W.presentation1)),N.push(W),ne=X+1}X++}return H(ne,X),P}const ie=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fe=["January","February","March","April","May","June","July","August","September","October","November","December"],ke=1e3*60*60*24,ae=function(R){const N=Date.UTC(R.year,R.month);var P=new Date(N).getUTCDay();return P===0&&(P=7),P>4?N+(8-P)*ke:N-(P-1)*ke},ee=function(R,N){return{year:R,month:N,nextMonth:function(){return N===11?ee(R+1,0):ee(R,N+1)},previousMonth:function(){return N===0?ee(R-1,11):ee(R,N-1)},nextYear:function(){return ee(R+1,N)},previousYear:function(){return ee(R-1,N)}}},oe=function(R,N){return(N-R)/(ke*7)+1},V=(R,N)=>{let P;switch(N){case"Y":P=R.getUTCFullYear();break;case"M":P=R.getUTCMonth()+1;break;case"D":P=R.getUTCDate();break;case"d":{const H=Date.UTC(R.getUTCFullYear(),R.getUTCMonth(),R.getUTCDate()),ne=Date.UTC(R.getUTCFullYear(),0);P=(H-ne)/ke+1;break}case"F":P=R.getUTCDay(),P===0&&(P=7);break;case"W":{const H=ee(R.getUTCFullYear(),0),ne=ae(H),X=Date.UTC(H.year,R.getUTCMonth(),R.getUTCDate());let W=oe(ne,X);if(W>52){const re=ae(H.nextYear());X>=re&&(W=1)}else if(W<1){const re=ae(H.previousYear());W=oe(re,X)}P=Math.floor(W);break}case"w":{const H=ee(R.getUTCFullYear(),R.getUTCMonth()),ne=ae(H),X=Date.UTC(H.year,H.month,R.getUTCDate());let W=oe(ne,X);if(W>4){const re=ae(H.nextMonth());X>=re&&(W=1)}else if(W<1){const re=ae(H.previousMonth());W=oe(re,X)}P=Math.floor(W);break}case"X":{const H=ee(R.getUTCFullYear(),0),ne=ae(H),X=ae(H.nextYear()),W=R.getTime();W<ne?P=H.year-1:W>=X?P=H.year+1:P=H.year;break}case"x":{const H=ee(R.getUTCFullYear(),R.getUTCMonth()),ne=ae(H),X=H.nextMonth(),W=ae(X),re=R.getTime();re<ne?P=H.previousMonth().month+1:re>=W?P=X.month+1:P=H.month+1;break}case"H":P=R.getUTCHours();break;case"h":P=R.getUTCHours(),P=P%12,P===0&&(P=12);break;case"P":P=R.getUTCHours()>=12?"pm":"am";break;case"m":P=R.getUTCMinutes();break;case"s":P=R.getUTCSeconds();break;case"f":P=R.getUTCMilliseconds();break;case"Z":case"z":break;case"C":P="ISO";break;case"E":P="ISO";break}return P};let xe=null;function $e(R,N,P){var H=0,ne=0;if(typeof P<"u"){const ze=parseInt(P);H=Math.floor(ze/100),ne=ze%100}var X=function(ze,ge){var Ie=V(ze,ge.component);if("YMDdFWwXxHhms".indexOf(ge.component)!==-1)if(ge.component==="Y"&&ge.n!==-1&&(Ie=Ie%Math.pow(10,ge.n)),ge.names){if(ge.component==="M"||ge.component==="x")Ie=fe[Ie-1];else if(ge.component==="F")Ie=ie[Ie];else throw{code:"D3133",value:ge.component};ge.names===q.UPPER?Ie=Ie.toUpperCase():ge.names===q.LOWER&&(Ie=Ie.toLowerCase()),ge.width&&Ie.length>ge.width.max&&(Ie=Ie.substring(0,ge.width.max))}else Ie=J(Ie,ge.integerFormat);else if(ge.component==="f")Ie=J(Ie,ge.integerFormat);else if(ge.component==="Z"||ge.component==="z"){const De=H*100+ne;if(ge.integerFormat.regular)Ie=J(De,ge.integerFormat);else{const he=ge.integerFormat.mandatoryDigits;if(he===1||he===2)Ie=J(H,ge.integerFormat),ne!==0&&(Ie+=":"+F(ne,"00"));else if(he===3||he===4)Ie=J(De,ge.integerFormat);else throw{code:"D3134",value:he}}De>=0&&(Ie="+"+Ie),ge.component==="z"&&(Ie="GMT"+Ie),De===0&&ge.presentation2==="t"&&(Ie="Z")}else ge.component==="P"&&ge.names===q.UPPER&&(Ie=Ie.toUpperCase());return Ie};let W;typeof N>"u"?(xe===null&&(xe=M("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),W=xe):W=M(N);const re=(60*H+ne)*60*1e3,ye=new Date(R+re);let Ne="";return W.parts.forEach(function(ze){ze.type==="literal"?Ne+=ze.value:Ne+=X(ye,ze)}),Ne}function b(R){var N={};if(R.type==="datetime")N.type="datetime",N.parts=R.parts.map(function(P){var H={};if(P.type==="literal")H.regex=P.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if(P.component==="Z"||P.component==="z"){let X;Array.isArray(P.integerFormat.groupingSeparators)||(X=P.integerFormat.groupingSeparators),H.regex="",P.component==="z"&&(H.regex="GMT"),H.regex+="[-+][0-9]+",X&&(H.regex+=X.character+"[0-9]+"),H.parse=function(W){P.component==="z"&&(W=W.substring(3));let re=0,ye=0;return X?(re=Number.parseInt(W.substring(0,W.indexOf(X.character))),ye=Number.parseInt(W.substring(W.indexOf(X.character)+1))):W.length-1<=2?re=Number.parseInt(W):(re=Number.parseInt(W.substring(0,3)),ye=Number.parseInt(W.substring(3))),re*60+ye}}else if(P.integerFormat)H=b(P.integerFormat);else{H.regex="[a-zA-Z]+";var ne={};if(P.component==="M"||P.component==="x")fe.forEach(function(X,W){P.width&&P.width.max?ne[X.substring(0,P.width.max)]=W+1:ne[X]=W+1});else if(P.component==="F")ie.forEach(function(X,W){W>0&&(P.width&&P.width.max?ne[X.substring(0,P.width.max)]=W:ne[X]=W)});else if(P.component==="P")ne={am:0,AM:0,pm:1,PM:1};else throw{code:"D3133",value:P.component};H.parse=function(X){return ne[X]}}return H.component=P.component,H});else{N.type="integer";const P=R.case===q.UPPER;switch(R.primary){case O.LETTERS:N.regex=P?"[A-Z]+":"[a-z]+",N.parse=function(H){return G(H,P?"A":"a")};break;case O.ROMAN:N.regex=P?"[MDCLXVI]+":"[mdclxvi]+",N.parse=function(H){return U(P?H:H.toUpperCase())};break;case O.WORDS:N.regex="(?:"+Object.keys(I).concat("and","[\\-, ]").join("|")+")+",N.parse=function(H){return z(H.toLowerCase())};break;case O.DECIMAL:N.regex="[0-9]",R.parseWidth?N.regex+=`{${R.parseWidth}}`:N.regex+="+",R.ordinal&&(N.regex+="(?:th|st|nd|rd)"),N.parse=function(H){let ne=H;return R.ordinal&&(ne=H.substring(0,H.length-2)),R.regular?ne=ne.split(",").join(""):R.groupingSeparators.forEach(X=>{ne=ne.split(X.character).join("")}),R.zeroCode!==48&&(ne=ne.split("").map(X=>String.fromCodePoint(X.codePointAt(0)-R.zeroCode+48)).join("")),parseInt(ne)};break;case O.SEQUENCE:throw{code:"D3130",value:R.token}}}return N}function S(R,N){if(typeof R>"u")return;const P=_e(N);return b(P).parse(R)}function ue(R,N){const P=M(N),H=b(P),ne="^"+H.parts.map(ye=>"("+ye.regex+")").join("")+"$";var W=new RegExp(ne,"i").exec(R);if(W!==null){const he={};for(let Ue=1;Ue<W.length;Ue++){const m=H.parts[Ue-1];m.parse&&(he[m.component]=m.parse(W[Ue]))}if(Object.getOwnPropertyNames(he).length===0)return;let dt=0;const Ut=Ue=>{dt<<=1,dt+=Ue?1:0},It=Ue=>!(~Ue&dt)&&!!(Ue&dt);"YXMxWwdD".split("").forEach(Ue=>Ut(he[Ue]));const kt=!It(161)&&It(130),Yt=It(84),cr=!Yt&&It(72);dt=0,"PHhmsf".split("").forEach(Ue=>Ut(he[Ue]));const Xt=!It(23)&&It(47),wr=(kt?"YD":Yt?"XxwF":cr?"XWF":"YMD")+(Xt?"Phmsf":"Hmsf"),jt=this.environment.timestamp;let ot=!1,Jt=!1;if(wr.split("").forEach(Ue=>{if(typeof he[Ue]>"u")ot?(he[Ue]="MDd".indexOf(Ue)!==-1?1:0,Jt=!0):he[Ue]=V(jt,Ue);else if(ot=!0,Jt)throw{code:"D3136"}}),he.M>0?he.M-=1:he.M=0,kt){const Ue=Date.UTC(he.Y,0),m=(he.d-1)*1e3*60*60*24,k=new Date(Ue+m);he.M=k.getUTCMonth(),he.D=k.getUTCDate()}if(Yt)throw{code:"D3136"};if(cr)throw{code:"D3136"};Xt&&(he.H=he.h===12?0:he.h,he.P===1&&(he.H+=12));var re=Date.UTC(he.Y,he.M,he.D,he.H,he.m,he.s,he.f);return(he.Z||he.z)&&(re-=(he.Z||he.z)*60*1e3),re}}var Ae=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");function Qe(R,N){if(!(typeof R>"u"))if(typeof N>"u"){if(!Ae.test(R))throw{stack:new Error().stack,code:"D3110",value:R};return Date.parse(R)}else return ue.call(this,R,N)}function Fe(R,N,P){if(!(typeof R>"u"))return $e.call(this,R,N,P)}return{formatInteger:F,parseInteger:S,fromMillis:Fe,toMillis:Qe}})();n.exports=a},{"./utils":6}],2:[function(t,n,i){(function(o){(function(){var a=t("./utils");const c=(()=>{var f=a.isNumeric,y=a.isArrayOfStrings,T=a.isArrayOfNumbers,w=a.createSequence,x=a.isSequence,I=a.isFunction,z=a.isLambda,B=a.isPromise,de=a.getFunctionArity,ve=a.isDeepEqual,U=a.stringToArray;function L(u){if(!(typeof u>"u")){var h=0;return u.forEach(function(g){h+=g}),h}}function G(u){return typeof u>"u"?0:u.length}function F(u){if(!(typeof u>"u"||u.length===0))return Math.max.apply(Math,u)}function O(u){if(!(typeof u>"u"||u.length===0))return Math.min.apply(Math,u)}function q(u){if(!(typeof u>"u"||u.length===0)){var h=0;return u.forEach(function(g){h+=g}),h/u.length}}function J(u,h=!1){if(!(typeof u>"u")){var g;if(typeof u=="string")g=u;else if(I(u))g="";else{if(typeof u=="number"&&!isFinite(u))throw{code:"D3001",value:u,stack:new Error().stack};var E=h?2:0;Array.isArray(u)&&u.outerWrapper&&(u=u[0]),g=JSON.stringify(u,function(C,$){return typeof $<"u"&&$!==null&&$.toPrecision&&f($)?Number($.toPrecision(15)):$&&I($)?"":$},E)}return g}}function Se(u,h,g){if(!(typeof u>"u")){var E=U(u),C=E.length;if(C+h<0&&(h=0),typeof g<"u"){if(g<=0)return"";var $=h>=0?h+g:C+h+g;return E.slice(h,$).join("")}return E.slice(h).join("")}}function _e(u,h){if(!(typeof u>"u")){var g=u.indexOf(h);return g>-1?u.substr(0,g):u}}function se(u,h){if(!(typeof u>"u")){var g=u.indexOf(h);return g>-1?u.substr(g+h.length):u}}function M(u){if(!(typeof u>"u"))return u.toLowerCase()}function ie(u){if(!(typeof u>"u"))return u.toUpperCase()}function fe(u){if(!(typeof u>"u"))return U(u).length}function ke(u){if(!(typeof u>"u")){var h=u.replace(/[ \t\n\r]+/gm," ");return h.charAt(0)===" "&&(h=h.substring(1)),h.charAt(h.length-1)===" "&&(h=h.substring(0,h.length-1)),h}}function ae(u,h,g){if(!(typeof u>"u")){(typeof g>"u"||g.length===0)&&(g=" ");var E;h=Math.trunc(h);var C=Math.abs(h)-fe(u);if(C>0){var $=new Array(C+1).join(g);g.length>1&&($=Se($,0,C)),h>0?E=u+$:E=$+u}else E=u;return E}}async function ee(u,h){var g=u.apply(this,[h]);if(B(g)&&(g=await g),g&&!(typeof g.start=="number"||g.end==="number"||Array.isArray(g.groups)||I(g.next)))throw{code:"T1010",stack:new Error().stack};return g}async function oe(u,h){if(!(typeof u>"u")){var g;if(typeof h=="string")g=u.indexOf(h)!==-1;else{var E=await ee(h,u);g=typeof E<"u"}return g}}async function V(u,h,g){if(!(typeof u>"u")){if(g<0)throw{stack:new Error().stack,value:g,code:"D3040",index:3};var E=w();if(typeof g>"u"||g>0){var C=0,$=await ee(h,u);if(typeof $<"u")for(;typeof $<"u"&&(typeof g>"u"||C<g);)E.push({match:$.match,index:$.start,groups:$.groups}),$=await ee($.next),C++}return E}}async function xe(u,h,g,E){if(!(typeof u>"u")){var C=this;if(h==="")throw{code:"D3010",stack:new Error().stack,value:h,index:2};if(E<0)throw{code:"D3011",stack:new Error().stack,value:E,index:4};var $;typeof g=="string"?$=function(qe){for(var ct="",Re=0,it=g.indexOf("$",Re);it!==-1&&Re<g.length;){ct+=g.substring(Re,it),Re=it+1;var Ft=g.charAt(Re);if(Ft==="$")ct+="$",Re++;else if(Ft==="0")ct+=qe.match,Re++;else{var Xe;if(qe.groups.length===0?Xe=1:Xe=Math.floor(Math.log(qe.groups.length)*Math.LOG10E)+1,it=parseInt(g.substring(Re,Re+Xe),10),Xe>1&&it>qe.groups.length&&(it=parseInt(g.substring(Re,Re+Xe-1),10)),isNaN(it))ct+="$";else{if(qe.groups.length>0){var xr=qe.groups[it-1];typeof xr<"u"&&(ct+=xr)}Re+=it.toString().length}}it=g.indexOf("$",Re)}return ct+=g.substring(Re),ct}:$=g;var Z="",pe=0;if(typeof E>"u"||E>0){var be=0;if(typeof h=="string"){for(var Be=u.indexOf(h,pe);Be!==-1&&(typeof E>"u"||be<E);)Z+=u.substring(pe,Be),Z+=g,pe=Be+h.length,be++,Be=u.indexOf(h,pe);Z+=u.substring(pe)}else{var Ee=await ee(h,u);if(typeof Ee<"u"){for(;typeof Ee<"u"&&(typeof E>"u"||be<E);){Z+=u.substring(pe,Ee.start);var Ve=$.apply(C,[Ee]);if(B(Ve)&&(Ve=await Ve),typeof Ve=="string")Z+=Ve;else throw{code:"D3012",stack:new Error().stack,value:Ve};pe=Ee.start+Ee.match.length,be++,Ee=await ee(Ee.next)}Z+=u.substring(pe)}else Z=u}}else Z=u;return Z}}function $e(u){if(!(typeof u>"u")){var h=typeof window<"u"?window.btoa:function(g){return new o.Buffer.from(g,"binary").toString("base64")};return h(u)}}function b(u){if(!(typeof u>"u")){var h=typeof window<"u"?window.atob:function(g){return new o.Buffer.from(g,"base64").toString("binary")};return h(u)}}function S(u){if(!(typeof u>"u")){var h;try{h=encodeURIComponent(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"encodeUrlComponent"}}return h}}function ue(u){if(!(typeof u>"u")){var h;try{h=encodeURI(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"encodeUrl"}}return h}}function Ae(u){if(!(typeof u>"u")){var h;try{h=decodeURIComponent(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"decodeUrlComponent"}}return h}}function Qe(u){if(!(typeof u>"u")){var h;try{h=decodeURI(u)}catch{throw{code:"D3140",stack:new Error().stack,value:u,functionName:"decodeUrl"}}return h}}async function Fe(u,h,g){if(!(typeof u>"u")){if(g<0)throw{code:"D3020",stack:new Error().stack,value:g,index:3};var E=[];if(typeof g>"u"||g>0)if(typeof h=="string")E=u.split(h,g);else{var C=0,$=await ee(h,u);if(typeof $<"u"){for(var Z=0;typeof $<"u"&&(typeof g>"u"||C<g);)E.push(u.substring(Z,$.start)),Z=$.end,$=await ee($.next),C++;(typeof g>"u"||C<g)&&E.push(u.substring(Z))}else E.push(u)}return E}}function R(u,h){if(!(typeof u>"u"))return typeof h>"u"&&(h=""),u.join(h)}function N(u,h,g){if(!(typeof u>"u")){var E={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"},C=E;typeof g<"u"&&Object.keys(g).forEach(function(we){C[we]=g[we]});for(var $=[],Z=C["zero-digit"].charCodeAt(0),pe=Z;pe<Z+10;pe++)$.push(String.fromCharCode(pe));var be=$.concat([C["decimal-separator"],C["exponent-separator"],C["grouping-separator"],C.digit,C["pattern-separator"]]),Be=h.split(C["pattern-separator"]);if(Be.length>2)throw{code:"D3080",stack:new Error().stack};var Ee=function(we){var tt=(function(){for(var st,At=0;At<we.length;At++)if(st=we.charAt(At),be.indexOf(st)!==-1&&st!==C["exponent-separator"])return we.substring(0,At)})(),bt=(function(){for(var st,At=we.length-1;At>=0;At--)if(st=we.charAt(At),be.indexOf(st)!==-1&&st!==C["exponent-separator"])return we.substring(At+1)})(),rt=we.substring(tt.length,we.length-bt.length),Pt,tr,Ct,lt,Lt=we.indexOf(C["exponent-separator"],tt.length);Lt===-1||Lt>we.length-bt.length?(Pt=rt,tr=void 0):(Pt=rt.substring(0,Lt),tr=rt.substring(Lt+1));var $t=Pt.indexOf(C["decimal-separator"]);return $t===-1?(Ct=Pt,lt=bt):(Ct=Pt.substring(0,$t),lt=Pt.substring($t+1)),{prefix:tt,suffix:bt,activePart:rt,mantissaPart:Pt,exponentPart:tr,integerPart:Ct,fractionalPart:lt,subpicture:we}},Ve=function(we){var tt,bt,rt=we.subpicture,Pt=rt.indexOf(C["decimal-separator"]);Pt!==rt.lastIndexOf(C["decimal-separator"])&&(tt="D3081"),rt.indexOf(C.percent)!==rt.lastIndexOf(C.percent)&&(tt="D3082"),rt.indexOf(C["per-mille"])!==rt.lastIndexOf(C["per-mille"])&&(tt="D3083"),rt.indexOf(C.percent)!==-1&&rt.indexOf(C["per-mille"])!==-1&&(tt="D3084");var tr=!1;for(bt=0;bt<we.mantissaPart.length;bt++){var Ct=we.mantissaPart.charAt(bt);if($.indexOf(Ct)!==-1||Ct===C.digit){tr=!0;break}}tr||(tt="D3085");var lt=we.activePart.split("").map(function(st){return be.indexOf(st)===-1?"p":"a"}).join("");lt.indexOf("p")!==-1&&(tt="D3086"),Pt!==-1?(rt.charAt(Pt-1)===C["grouping-separator"]||rt.charAt(Pt+1)===C["grouping-separator"])&&(tt="D3087"):we.integerPart.charAt(we.integerPart.length-1)===C["grouping-separator"]&&(tt="D3088"),rt.indexOf(C["grouping-separator"]+C["grouping-separator"])!==-1&&(tt="D3089");var Lt=we.integerPart.indexOf(C.digit);Lt!==-1&&we.integerPart.substring(0,Lt).split("").filter(function(st){return $.indexOf(st)>-1}).length>0&&(tt="D3090"),Lt=we.fractionalPart.lastIndexOf(C.digit),Lt!==-1&&we.fractionalPart.substring(Lt).split("").filter(function(st){return $.indexOf(st)>-1}).length>0&&(tt="D3091");var $t=typeof we.exponentPart=="string";if($t&&we.exponentPart.length>0&&(rt.indexOf(C.percent)!==-1||rt.indexOf(C["per-mille"])!==-1)&&(tt="D3092"),$t&&(we.exponentPart.length===0||we.exponentPart.split("").filter(function(st){return $.indexOf(st)===-1}).length>0)&&(tt="D3093"),tt)throw{code:tt,stack:new Error().stack}},qe=function(we){var tt=function(ft,qr){for(var kr=[],rr=ft.indexOf(C["grouping-separator"]);rr!==-1;){var en=(qr?ft.substring(0,rr):ft.substring(rr)).split("").filter(function(Or){return $.indexOf(Or)!==-1||Or===C.digit}).length;kr.push(en),rr=we.integerPart.indexOf(C["grouping-separator"],rr+1)}return kr},bt=tt(we.integerPart),rt=function(ft){if(ft.length===0)return 0;for(var qr=function(en,Or){return Or===0?en:qr(Or,en%Or)},kr=ft.reduce(qr),rr=1;rr<=ft.length;rr++)if(ft.indexOf(rr*kr)===-1)return 0;return kr},Pt=rt(bt),tr=tt(we.fractionalPart,!0),Ct=we.integerPart.split("").filter(function(ft){return $.indexOf(ft)!==-1}).length,lt=Ct,Lt=we.fractionalPart.split(""),$t=Lt.filter(function(ft){return $.indexOf(ft)!==-1}).length,st=Lt.filter(function(ft){return $.indexOf(ft)!==-1||ft===C.digit}).length,At=typeof we.exponentPart=="string";Ct===0&&st===0&&(At?($t=1,st=1):Ct=1),At&&Ct===0&&we.integerPart.indexOf(C.digit)!==-1&&(Ct=1),Ct===0&&$t===0&&($t=1);var zr=0;return At&&(zr=we.exponentPart.split("").filter(function(ft){return $.indexOf(ft)!==-1}).length),{integerPartGroupingPositions:bt,regularGrouping:Pt,minimumIntegerPartSize:Ct,scalingFactor:lt,prefix:we.prefix,fractionalPartGroupingPositions:tr,minimumFactionalPartSize:$t,maximumFactionalPartSize:st,minimumExponentSize:zr,suffix:we.suffix,picture:we.subpicture}},ct=Be.map(Ee);ct.forEach(Ve);var Re=ct.map(qe),it=C["minus-sign"],Ft=C["zero-digit"],Xe=C["decimal-separator"],xr=C["grouping-separator"];Re.length===1&&(Re.push(JSON.parse(JSON.stringify(Re[0]))),Re[1].prefix=it+Re[1].prefix);var nt;u>=0?nt=Re[0]:nt=Re[1];var Mr;nt.picture.indexOf(C.percent)!==-1?Mr=u*100:nt.picture.indexOf(C["per-mille"])!==-1?Mr=u*1e3:Mr=u;var ut,er;if(nt.minimumExponentSize===0)ut=Mr;else{var Ti=Math.pow(10,nt.scalingFactor),Qn=Math.pow(10,nt.scalingFactor-1);for(ut=Mr,er=0;ut<Qn;)ut*=10,er-=1;for(;ut>Ti;)ut/=10,er+=1}var In=re(ut,nt.maximumFactionalPartSize),Xn=function(we,tt){var bt=Math.abs(we).toFixed(tt);return Ft!=="0"&&(bt=bt.split("").map(function(rt){return rt>="0"&&rt<="9"?$[rt.charCodeAt(0)-48]:rt}).join("")),bt},Oe=Xn(In,nt.maximumFactionalPartSize),pt=Oe.indexOf(".");for(pt===-1?Oe=Oe+Xe:Oe=Oe.replace(".",Xe);Oe.charAt(0)===Ft;)Oe=Oe.substring(1);for(;Oe.charAt(Oe.length-1)===Ft;)Oe=Oe.substring(0,Oe.length-1);pt=Oe.indexOf(Xe);var Ir=nt.minimumIntegerPartSize-pt,kn=nt.minimumFactionalPartSize-(Oe.length-pt-1);if(Oe=(Ir>0?new Array(Ir+1).join(Ft):"")+Oe,Oe=Oe+(kn>0?new Array(kn+1).join(Ft):""),pt=Oe.indexOf(Xe),nt.regularGrouping>0)for(var Rt=Math.floor((pt-1)/nt.regularGrouping),Fr=1;Fr<=Rt;Fr++)Oe=[Oe.slice(0,pt-Fr*nt.regularGrouping),xr,Oe.slice(pt-Fr*nt.regularGrouping)].join("");else nt.integerPartGroupingPositions.forEach(function(we){Oe=[Oe.slice(0,pt-we),xr,Oe.slice(pt-we)].join(""),pt++});if(pt=Oe.indexOf(Xe),nt.fractionalPartGroupingPositions.forEach(function(we){Oe=[Oe.slice(0,we+pt+1),xr,Oe.slice(we+pt+1)].join("")}),pt=Oe.indexOf(Xe),(nt.picture.indexOf(Xe)===-1||pt===Oe.length-1)&&(Oe=Oe.substring(0,Oe.length-1)),typeof er<"u"){var Xr=Xn(er,0);Ir=nt.minimumExponentSize-Xr.length,Ir>0&&(Xr=new Array(Ir+1).join(Ft)+Xr),Oe=Oe+C["exponent-separator"]+(er<0?it:"")+Xr}return Oe=nt.prefix+Oe+nt.suffix,Oe}}function P(u,h){if(!(typeof u>"u")){if(u=re(u),typeof h>"u"?h=10:h=re(h),h<2||h>36)throw{code:"D3100",stack:new Error().stack,value:h};var g=u.toString(h);return g}}function H(u){var h;if(!(typeof u>"u")){if(typeof u=="number")h=u;else if(typeof u=="string"&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(u)&&!isNaN(parseFloat(u))&&isFinite(u))h=parseFloat(u);else if(typeof u=="string"&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(u))h=Number(u);else if(u===!0)h=1;else if(u===!1)h=0;else throw{code:"D3030",value:u,stack:new Error().stack,index:1};return h}}function ne(u){var h;if(!(typeof u>"u"))return h=Math.abs(u),h}function X(u){var h;if(!(typeof u>"u"))return h=Math.floor(u),h}function W(u){var h;if(!(typeof u>"u"))return h=Math.ceil(u),h}function re(u,h){var g;if(!(typeof u>"u")){if(h){var E=u.toString().split("e");u=+(E[0]+"e"+(E[1]?+E[1]+h:h))}g=Math.round(u);var C=g-u;return Math.abs(C)===.5&&Math.abs(g%2)===1&&(g=g-1),h&&(E=g.toString().split("e"),g=+(E[0]+"e"+(E[1]?+E[1]-h:-h))),Object.is(g,-0)&&(g=0),g}}function ye(u){var h;if(!(typeof u>"u")){if(u<0)throw{stack:new Error().stack,code:"D3060",index:1,value:u};return h=Math.sqrt(u),h}}function Ne(u,h){var g;if(!(typeof u>"u")){if(g=Math.pow(u,h),!isFinite(g))throw{stack:new Error().stack,code:"D3061",index:1,value:u,exp:h};return g}}function ze(){return Math.random()}function ge(u){if(!(typeof u>"u")){var h=!1;if(Array.isArray(u)){if(u.length===1)h=ge(u[0]);else if(u.length>1){var g=u.filter(function(E){return ge(E)});h=g.length>0}}else typeof u=="string"?u.length>0&&(h=!0):f(u)?u!==0&&(h=!0):u!==null&&typeof u=="object"&&!I(u)?Object.keys(u).length>0&&(h=!0):typeof u=="boolean"&&u===!0&&(h=!0);return h}}function Ie(u){if(!(typeof u>"u"))return!ge(u)}function De(u,h,g,E){var C=[h],$=de(u);return $>=2&&C.push(g),$>=3&&C.push(E),C}async function he(u,h){if(!(typeof u>"u")){for(var g=w(),E=0;E<u.length;E++){var C=De(h,u[E],E,u),$=await h.apply(this,C);typeof $<"u"&&g.push($)}return g}}async function dt(u,h){if(!(typeof u>"u")){for(var g=w(),E=0;E<u.length;E++){var C=u[E],$=De(h,C,E,u),Z=await h.apply(this,$);ge(Z)&&g.push(C)}return g}}async function Ut(u,h){if(!(typeof u>"u")){for(var g=!1,E,C=0;C<u.length;C++){var $=u[C],Z=!0;if(typeof h<"u"){var pe=De(h,$,C,u),be=await h.apply(this,pe);Z=ge(be)}if(Z)if(!g)E=$,g=!0;else throw{stack:new Error().stack,code:"D3138",index:C}}if(!g)throw{stack:new Error().stack,code:"D3139"};return E}}function It(){for(var u=[],h=Array.prototype.slice.call(arguments),g=Math.min.apply(Math,h.map(function($){return Array.isArray($)?$.length:0})),E=0;E<g;E++){var C=h.map($=>$[E]);u.push(C)}return u}async function ht(u,h,g){if(!(typeof u>"u")){var E,C=de(h);if(C<2)throw{stack:new Error().stack,code:"D3050",index:1};var $;for(typeof g>"u"&&u.length>0?(E=u[0],$=1):(E=g,$=0);$<u.length;){var Z=[E,u[$]];C>=3&&Z.push($),C>=4&&Z.push(u),E=await h.apply(this,Z),$++}return E}}function kt(u){var h=w();if(Array.isArray(u)){var g={};u.forEach(function(E){var C=kt(E);C.forEach(function($){g[$]=!0})}),h=kt(g)}else u!==null&&typeof u=="object"&&!I(u)&&Object.keys(u).forEach(E=>h.push(E));return h}function Yt(u,h){var g;if(Array.isArray(u)){g=w();for(var E=0;E<u.length;E++){var C=Yt(u[E],h);typeof C<"u"&&(Array.isArray(C)?C.forEach($=>g.push($)):g.push(C))}}else u!==null&&typeof u=="object"&&!I(u)&&(g=u[h]);return g}function cr(u,h){return typeof u>"u"?h:typeof h>"u"?u:(Array.isArray(u)||(u=w(u)),Array.isArray(h)||(h=[h]),u.concat(h))}function Er(u){return!(typeof u>"u")}function Xt(u){var h=w();if(Array.isArray(u))u.forEach(function(C){h=cr(h,Xt(C))});else if(u!==null&&typeof u=="object"&&!z(u))for(var g in u){var E={};E[g]=u[g],h.push(E)}else h=u;return h}function le(u){if(!(typeof u>"u")){var h={};return u.forEach(function(g){for(var E in g)h[E]=g[E]}),h}}function _r(u){if(!(typeof u>"u")){if(u.length<=1)return u;for(var h=u.length,g=new Array(h),E=0;E<h;E++)g[h-E-1]=u[E];return g}}async function wr(u,h){var g=w();for(var E in u){var C=De(h,u[E],E,u),$=await h.apply(this,C);typeof $<"u"&&g.push($)}return g}function jt(u){throw{code:"D3137",stack:new Error().stack,message:u||"$error() function evaluated"}}function ot(u,h){if(!u)throw{code:"D3141",stack:new Error().stack,message:h||"$assert() statement failed"}}function Jt(u){if(u!==void 0)return u===null?"null":f(u)?"number":typeof u=="string"?"string":typeof u=="boolean"?"boolean":Array.isArray(u)?"array":I(u)?"function":"object"}async function Ue(u,h){if(!(typeof u>"u")){if(u.length<=1)return u;var g;if(typeof h>"u"){if(!T(u)&&!y(u))throw{stack:new Error().stack,code:"D3070",index:1};g=async function(Z,pe){return Z>pe}}else g=h;var E=async function(Z,pe){var be=async function(Ee,Ve,qe){Ve.length===0?Array.prototype.push.apply(Ee,qe):qe.length===0?Array.prototype.push.apply(Ee,Ve):await g(Ve[0],qe[0])?(Ee.push(qe[0]),await be(Ee,Ve,qe.slice(1))):(Ee.push(Ve[0]),await be(Ee,Ve.slice(1),qe))},Be=[];return await be(Be,Z,pe),Be},C=async function(Z){if(!Array.isArray(Z)||Z.length<=1)return Z;var pe=Math.floor(Z.length/2),be=Z.slice(0,pe),Be=Z.slice(pe);return be=await C(be),Be=await C(Be),await E(be,Be)},$=await C(u);return $}}function m(u){if(!(typeof u>"u")){if(u.length<=1)return u;for(var h=new Array(u.length),g=0;g<u.length;g++){var E=Math.floor(Math.random()*(g+1));g!==E&&(h[g]=h[E]),h[E]=u[g]}return h}}function k(u){if(!(typeof u>"u")){if(!Array.isArray(u)||u.length<=1)return u;for(var h=x(u)?w():[],g=0;g<u.length;g++){for(var E=u[g],C=!1,$=0;$<h.length;$++)if(ve(E,h[$])){C=!0;break}C||h.push(E)}return h}}async function A(u,h){var g={};for(var E in u){var C=u[E],$=De(h,C,E,u),Z=await h.apply(this,$);ge(Z)&&(g[E]=C)}return Object.keys(g).length===0&&(g=void 0),g}return{sum:L,count:G,max:F,min:O,average:q,string:J,substring:Se,substringBefore:_e,substringAfter:se,lowercase:M,uppercase:ie,length:fe,trim:ke,pad:ae,match:V,contains:oe,replace:xe,split:Fe,join:R,formatNumber:N,formatBase:P,number:H,floor:X,ceil:W,round:re,abs:ne,sqrt:ye,power:Ne,random:ze,boolean:ge,not:Ie,map:he,zip:It,filter:dt,single:Ut,foldLeft:ht,sift:A,keys:kt,lookup:Yt,append:cr,exists:Er,spread:Xt,merge:le,reverse:_r,each:wr,error:jt,assert:ot,type:Jt,sort:Ue,shuffle:m,distinct:k,base64encode:$e,base64decode:b,encodeUrlComponent:S,encodeUrl:ue,decodeUrlComponent:Ae,decodeUrl:Qe}})();n.exports=c}).call(this)}).call(this,typeof Cs<"u"?Cs:typeof self<"u"?self:typeof window<"u"?window:{})},{"./utils":6}],3:[function(t,n,i){var o=t("./datetime"),a=t("./functions"),c=t("./utils"),f=t("./parser"),y=t("./signature"),T=(function(){var w=c.isNumeric,x=c.isArrayOfStrings,I=c.isArrayOfNumbers,z=c.createSequence,B=c.isSequence,de=c.isFunction,ve=c.isLambda,U=c.isIterable,L=c.isPromise,G=c.getFunctionArity,F=c.isDeepEqual,O=jt(null);async function q(m,k,A){var u,h=A.lookup(Symbol.for("jsonata.__evaluate_entry"));switch(h&&await h(m,k,A),m.type){case"path":u=await J(m,k,A);break;case"binary":u=await fe(m,k,A);break;case"unary":u=await ke(m,k,A);break;case"name":u=ae(m,k);break;case"string":case"number":case"value":u=ee(m);break;case"wildcard":u=oe(m,k);break;case"descendant":u=xe(m,k);break;case"parent":u=A.lookup(m.slot.label);break;case"condition":u=await X(m,k,A);break;case"block":u=await W(m,k,A);break;case"bind":u=await ne(m,k,A);break;case"regex":u=re(m);break;case"function":u=await De(m,k,A);break;case"variable":u=ye(m,k,A);break;case"lambda":u=Ut(m,k,A);break;case"partial":u=await It(m,k,A);break;case"apply":u=await Ie(m,k,A);break;case"transform":u=ze(m,k,A);break}if(Object.prototype.hasOwnProperty.call(m,"predicate"))for(var g=0;g<m.predicate.length;g++)u=await ie(m.predicate[g].expr,u,A);m.type!=="path"&&Object.prototype.hasOwnProperty.call(m,"group")&&(u=await N(m.group,u,A));var E=A.lookup(Symbol.for("jsonata.__evaluate_exit"));return E&&await E(m,k,A,u),u&&B(u)&&!u.tupleStream&&(m.keepArray&&(u.keepSingleton=!0),u.length===0?u=void 0:u.length===1&&(u=u.keepSingleton?u:u[0])),u}async function J(m,k,A){var u;Array.isArray(k)&&m.steps[0].type!=="variable"?u=k:u=z(k);for(var h,g=!1,E=void 0,C=0;C<m.steps.length;C++){var $=m.steps[C];if($.tuple&&(g=!0),C===0&&$.consarray?h=await q($,u,A):g?E=await M($,u,E,A):h=await _e($,u,A,C===m.steps.length-1),!g&&(typeof h>"u"||h.length===0))break;typeof $.focus>"u"&&(u=h)}if(g)if(m.tuple)h=E;else for(h=z(),C=0;C<E.length;C++)h.push(E[C]["@"]);return m.keepSingletonArray&&(Array.isArray(h)&&h.cons&&!h.sequence&&(h=z(h)),h.keepSingleton=!0),m.hasOwnProperty("group")&&(h=await N(m.group,g?E:h,A)),h}function Se(m,k){var A=jt(m);for(const u in k)A.bind(u,k[u]);return A}async function _e(m,k,A,u){var h;if(m.type==="sort")return h=await Ne(m,k,A),m.stages&&(h=await se(m.stages,h,A)),h;h=z();for(var g=0;g<k.length;g++){var E=await q(m,k[g],A);if(m.stages)for(var C=0;C<m.stages.length;C++)E=await ie(m.stages[C].expr,E,A);typeof E<"u"&&h.push(E)}var $=z();return u&&h.length===1&&Array.isArray(h[0])&&!B(h[0])?$=h[0]:h.forEach(function(Z){!Array.isArray(Z)||Z.cons?$.push(Z):Z.forEach(pe=>$.push(pe))}),$}async function se(m,k,A){for(var u=k,h=0;h<m.length;h++){var g=m[h];switch(g.type){case"filter":u=await ie(g.expr,u,A);break;case"index":for(var E=0;E<u.length;E++){var C=u[E];C[g.value]=E}break}}return u}async function M(m,k,A,u){var h;if(m.type==="sort"){if(A)h=await Ne(m,A,u);else{var g=await Ne(m,k,u);h=z(),h.tupleStream=!0;for(var E=0;E<g.length;E++){var C={"@":g[E]};C[m.index]=E,h.push(C)}}return m.stages&&(h=await se(m.stages,h,u)),h}h=z(),h.tupleStream=!0;var $=u;A===void 0&&(A=k.map(Be=>({"@":Be})));for(var Z=0;Z<A.length;Z++){$=Se(u,A[Z]);var pe=await q(m,A[Z]["@"],$);if(typeof pe<"u"){Array.isArray(pe)||(pe=[pe]);for(var be=0;be<pe.length;be++)C={},Object.assign(C,A[Z]),pe.tupleStream?Object.assign(C,pe[be]):(m.focus?(C[m.focus]=pe[be],C["@"]=A[Z]["@"]):C["@"]=pe[be],m.index&&(C[m.index]=be),m.ancestor&&(C[m.ancestor.label]=A[Z]["@"])),h.push(C)}}return m.stages&&(h=await se(m.stages,h,u)),h}async function ie(m,k,A){var u=z();if(k&&k.tupleStream&&(u.tupleStream=!0),Array.isArray(k)||(k=z(k)),m.type==="number"){var h=Math.floor(m.value);h<0&&(h=k.length+h);var g=await k[h];typeof g<"u"&&(Array.isArray(g)?u=g:u.push(g))}else for(h=0;h<k.length;h++){var g=k[h],E=g,C=A;k.tupleStream&&(E=g["@"],C=Se(A,g));var $=await q(m,E,C);w($)&&($=[$]),I($)?$.forEach(function(pe){var be=Math.floor(pe);be<0&&(be=k.length+be),be===h&&u.push(g)}):a.boolean($)&&u.push(g)}return u}async function fe(m,k,A){var u,h=await q(m.lhs,k,A),g=m.value,E=async()=>await q(m.rhs,k,A);if(g==="and"||g==="or")try{return await Qe(h,E,g)}catch($){throw $.position=m.position,$.token=g,$}var C=await E();try{switch(g){case"+":case"-":case"*":case"/":case"%":u=b(h,C,g);break;case"=":case"!=":u=S(h,C,g);break;case"<":case"<=":case">":case">=":u=ue(h,C,g);break;case"&":u=R(h,C);break;case"..":u=H(h,C);break;case"in":u=Ae(h,C);break}}catch($){throw $.position=m.position,$.token=g,$}return u}async function ke(m,k,A){var u;switch(m.value){case"-":if(u=await q(m.expression,k,A),typeof u>"u")u=void 0;else if(w(u))u=-u;else throw{code:"D1002",stack:new Error().stack,position:m.position,token:m.value,value:u};break;case"[":u=[];let E=await Promise.all(m.expressions.map(async(C,$)=>(A.isParallelCall=$>0,[C,await q(C,k,A)])));for(let C of E){var[h,g]=C;typeof g<"u"&&(h.value==="["?u.push(g):u=a.append(u,g))}m.consarray&&Object.defineProperty(u,"cons",{enumerable:!1,configurable:!1,value:!0});break;case"{":u=await N(m,k,A);break}return u}function ae(m,k,A){return a.lookup(k,m.value)}function ee(m){return m.value}function oe(m,k){var A=z();return Array.isArray(k)&&k.outerWrapper&&k.length>0&&(k=k[0]),k!==null&&typeof k=="object"&&Object.keys(k).forEach(function(u){var h=k[u];Array.isArray(h)?(h=V(h),A=a.append(A,h)):A.push(h)}),A}function V(m,k){return typeof k>"u"&&(k=[]),Array.isArray(m)?m.forEach(function(A){V(A,k)}):k.push(m),k}function xe(m,k){var A,u=z();return typeof k<"u"&&($e(k,u),u.length===1?A=u[0]:A=u),A}function $e(m,k){Array.isArray(m)||k.push(m),Array.isArray(m)?m.forEach(function(A){$e(A,k)}):m!==null&&typeof m=="object"&&Object.keys(m).forEach(function(A){$e(m[A],k)})}function b(m,k,A){var u;if(typeof m<"u"&&!w(m))throw{code:"T2001",stack:new Error().stack,value:m};if(typeof k<"u"&&!w(k))throw{code:"T2002",stack:new Error().stack,value:k};if(typeof m>"u"||typeof k>"u")return u;switch(A){case"+":u=m+k;break;case"-":u=m-k;break;case"*":u=m*k;break;case"/":u=m/k;break;case"%":u=m%k;break}return u}function S(m,k,A){var u,h=typeof m,g=typeof k;if(h==="undefined"||g==="undefined")return!1;switch(A){case"=":u=F(m,k);break;case"!=":u=!F(m,k);break}return u}function ue(m,k,A){var u,h=typeof m,g=typeof k,E=h==="undefined"||h==="string"||h==="number",C=g==="undefined"||g==="string"||g==="number";if(!E||!C)throw{code:"T2010",stack:new Error().stack,value:h==="string"||h==="number"?k:m};if(!(h==="undefined"||g==="undefined")){if(h!==g)throw{code:"T2009",stack:new Error().stack,value:m,value2:k};switch(A){case"<":u=m<k;break;case"<=":u=m<=k;break;case">":u=m>k;break;case">=":u=m>=k;break}return u}}function Ae(m,k){var A=!1;if(typeof m>"u"||typeof k>"u")return!1;Array.isArray(k)||(k=[k]);for(var u=0;u<k.length;u++)if(k[u]===m){A=!0;break}return A}async function Qe(m,k,A){var u,h=Fe(m);switch(A){case"and":u=h&&Fe(await k());break;case"or":u=h||Fe(await k());break}return u}function Fe(m){var k=a.boolean(m);return typeof k>"u"?!1:k}function R(m,k){var A,u="",h="";return typeof m<"u"&&(u=a.string(m)),typeof k<"u"&&(h=a.string(k)),A=u.concat(h),A}async function N(m,k,A){var u={},h={},g=!!(k&&k.tupleStream);Array.isArray(k)||(k=z(k)),k.length===0&&k.push(void 0);for(var E=0;E<k.length;E++)for(var C=k[E],$=g?Se(A,C):A,Z=0;Z<m.lhs.length;Z++){var pe=m.lhs[Z],be=await q(pe[0],g?C["@"]:C,$);if(typeof be!="string"&&be!==void 0)throw{code:"T1003",stack:new Error().stack,position:m.position,value:be};if(be!==void 0){var Be={data:C,exprIndex:Z};if(h.hasOwnProperty(be)){if(h[be].exprIndex!==Z)throw{code:"D1009",stack:new Error().stack,position:m.position,value:be};h[be].data=a.append(h[be].data,C)}else h[be]=Be}}let Ee=await Promise.all(Object.keys(h).map(async(qe,ct)=>{let Re=h[qe];var it=Re.data,Ft=A;if(g){var Xe=P(Re.data);it=Xe["@"],delete Xe["@"],Ft=Se(A,Xe)}return A.isParallelCall=ct>0,[qe,await q(m.lhs[Re.exprIndex][1],it,Ft)]}));for(let qe of Ee){var[be,Ve]=await qe;typeof Ve<"u"&&(u[be]=Ve)}return u}function P(m){if(!Array.isArray(m))return m;var k={};Object.assign(k,m[0]);for(var A=1;A<m.length;A++)for(const u in m[A])k[u]=a.append(k[u],m[A][u]);return k}function H(m,k){var A;if(typeof m<"u"&&!Number.isInteger(m))throw{code:"T2003",stack:new Error().stack,value:m};if(typeof k<"u"&&!Number.isInteger(k))throw{code:"T2004",stack:new Error().stack,value:k};if(typeof m>"u"||typeof k>"u"||m>k)return A;var u=k-m+1;if(u>1e7)throw{code:"D2014",stack:new Error().stack,value:u};A=new Array(u);for(var h=m,g=0;h<=k;h++,g++)A[g]=h;return A.sequence=!0,A}async function ne(m,k,A){var u=await q(m.rhs,k,A);return A.bind(m.lhs.value,u),u}async function X(m,k,A){var u,h=await q(m.condition,k,A);return a.boolean(h)?u=await q(m.then,k,A):typeof m.else<"u"&&(u=await q(m.else,k,A)),u}async function W(m,k,A){for(var u,h=jt(A),g=0;g<m.expressions.length;g++)u=await q(m.expressions[g],k,h);return u}function re(m){var k=new Ue.RegexEngine(m.value),A=function(u,h){var g;k.lastIndex=h||0;var E=k.exec(u);if(E!==null){if(g={match:E[0],start:E.index,end:E.index+E[0].length,groups:[]},E.length>1)for(var C=1;C<E.length;C++)g.groups.push(E[C]);g.next=function(){if(!(k.lastIndex>=u.length)){var $=A(u,k.lastIndex);if($&&$.match==="")throw{code:"D1004",stack:new Error().stack,position:m.position,value:m.value.source};return $}}}return g};return A}function ye(m,k,A){var u;return m.value===""?u=k&&k.outerWrapper?k[0]:k:u=A.lookup(m.value),u}async function Ne(m,k,A){var u,h=k,g=!!k.tupleStream,E=async function($,Z){for(var pe=0,be=0;pe===0&&be<m.terms.length;be++){var Be=m.terms[be],Ee=$,Ve=A;g&&(Ee=$["@"],Ve=Se(A,$));var qe=await q(Be.expression,Ee,Ve);Ee=Z,Ve=A,g&&(Ee=Z["@"],Ve=Se(A,Z));var ct=await q(Be.expression,Ee,Ve),Re=typeof qe,it=typeof ct;if(Re==="undefined"){pe=it==="undefined"?0:1;continue}if(it==="undefined"){pe=-1;continue}if(!(Re==="string"||Re==="number")||!(it==="string"||it==="number"))throw{code:"T2008",stack:new Error().stack,position:m.position,value:Re==="string"||Re==="number"?ct:qe};if(Re!==it)throw{code:"T2007",stack:new Error().stack,position:m.position,value:qe,value2:ct};qe!==ct&&(qe<ct?pe=-1:pe=1,Be.descending===!0&&(pe=-pe))}return pe===1},C={environment:A,input:k};return u=await a.sort.apply(C,[h,E]),u}function ze(m,k,A){var u=async function(h){if(!(typeof h>"u")){var g=A.lookup("clone");if(!de(g))throw{code:"T2013",stack:new Error().stack,position:m.position};var E=await he(g,[h],null,A),C=await q(m.pattern,E,A);if(typeof C<"u"){Array.isArray(C)||(C=[C]);for(var $=0;$<C.length;$++){var Z=C[$];if(Z&&(Z.isPrototypeOf(E)||Z instanceof Object.constructor))throw{code:"D1010",stack:new Error().stack,position:m.position};var pe=await q(m.update,Z,A),be=typeof pe;if(be!=="undefined"){if(be!=="object"||pe===null||Array.isArray(pe))throw{code:"T2011",stack:new Error().stack,position:m.update.position,value:pe};for(var Be in pe)Z[Be]=pe[Be]}if(typeof m.delete<"u"){var Ee=await q(m.delete,Z,A);if(typeof Ee<"u"){var Ve=Ee;if(Array.isArray(Ee)||(Ee=[Ee]),!x(Ee))throw{code:"T2012",stack:new Error().stack,position:m.delete.position,value:Ve};for(var qe=0;qe<Ee.length;qe++)typeof Z=="object"&&Z!==null&&delete Z[Ee[qe]]}}}}return E}};return le(u,"<(oa):o>")}var ge=f("function($f, $g) { function($x){ $g($f($x)) } }");async function Ie(m,k,A){var u,h=await q(m.lhs,k,A);if(m.rhs.type==="function")u=await De(m.rhs,k,A,{context:h});else{var g=await q(m.rhs,k,A);if(!de(g))throw{code:"T2006",stack:new Error().stack,position:m.position,value:g};if(de(h)){var E=await q(ge,null,A);u=await he(E,[h,g],null,A)}else u=await he(g,[h],null,A)}return u}async function De(m,k,A,u){var h,g=await q(m.procedure,k,A);if(typeof g>"u"&&m.procedure.type==="path"&&A.lookup(m.procedure.steps[0].value))throw{code:"T1005",stack:new Error().stack,position:m.position,token:m.procedure.steps[0].value};var E=[];typeof u<"u"&&E.push(u.context);for(var C=0;C<m.arguments.length;C++){const Z=await q(m.arguments[C],k,A);if(de(Z)){const pe=async function(...be){return await he(Z,be,null,A)};pe.arity=G(Z),E.push(pe)}else E.push(Z)}var $=m.procedure.type==="path"?m.procedure.steps[0].value:m.procedure.value;try{typeof g=="object"&&(g.token=$,g.position=m.position),h=await he(g,E,k,A)}catch(Z){throw Z.position||(Z.position=m.position),Z.token||(Z.token=$),Z}return h}async function he(m,k,A,u){var h;for(h=await dt(m,k,A,u);ve(h)&&h.thunk===!0;){var g=await q(h.body.procedure,h.input,h.environment);h.body.procedure.type==="variable"&&(g.token=h.body.procedure.value),g.position=h.body.procedure.position;for(var E=[],C=0;C<h.body.arguments.length;C++)E.push(await q(h.body.arguments[C],h.input,h.environment));h=await dt(g,E,A,u)}return h}async function dt(m,k,A,u){var h;try{var g=k;if(m&&(g=ht(m.signature,k,A)),ve(m))h=await kt(m,g);else if(m&&m._jsonata_function===!0){var E={environment:u,input:A};h=m.implementation.apply(E,g),U(h)&&(h=h.next().value),L(h)&&(h=await h)}else if(typeof m=="function")h=m.apply(A,g),L(h)&&(h=await h);else throw{code:"T1006",stack:new Error().stack}}catch(C){throw m&&(typeof C.token>"u"&&typeof m.token<"u"&&(C.token=m.token),C.position=m.position||C.position),C}return h}function Ut(m,k,A){var u={_jsonata_lambda:!0,input:k,environment:A,arguments:m.arguments,signature:m.signature,body:m.body};return m.thunk===!0&&(u.thunk=!0),u.apply=async function(h,g){return await he(u,g,k,h?h.environment:A)},u}async function It(m,k,A){for(var u,h=[],g=0;g<m.arguments.length;g++){var E=m.arguments[g];E.type==="operator"&&E.value==="?"?h.push(E):h.push(await q(E,k,A))}var C=await q(m.procedure,k,A);if(typeof C>"u"&&m.procedure.type==="path"&&A.lookup(m.procedure.steps[0].value))throw{code:"T1007",stack:new Error().stack,position:m.position,token:m.procedure.steps[0].value};if(ve(C))u=Yt(C,h);else if(C&&C._jsonata_function===!0)u=cr(C.implementation,h);else if(typeof C=="function")u=cr(C,h);else throw{code:"T1008",stack:new Error().stack,position:m.position,token:m.procedure.type==="path"?m.procedure.steps[0].value:m.procedure.value};return u}function ht(m,k,A){if(typeof m>"u")return k;var u=m.validate(k,A);return u}async function kt(m,k){var A,u=jt(m.environment);return m.arguments.forEach(function(h,g){u.bind(h.value,k[g])}),typeof m.body=="function"?A=await Er(m.body,u):A=await q(m.body,m.input,u),A}function Yt(m,k){var A=jt(m.environment),u=[];m.arguments.forEach(function(g,E){var C=k[E];C&&C.type==="operator"&&C.value==="?"?u.push(g):A.bind(g.value,C)});var h={_jsonata_lambda:!0,input:m.input,environment:A,arguments:u,body:m.body};return h}function cr(m,k){var A=Xt(m);A=A.map(function(E){return"$"+E.trim()});var u="function("+A.join(", ")+"){ _ }",h=f(u);h.body=m;var g=Yt(h,k);return g}async function Er(m,k){var A=Xt(m),u=A.map(function(E){return k.lookup(E.trim())}),h={environment:k},g=m.apply(h,u);return L(g)&&(g=await g),g}function Xt(m){var k=m.toString(),A=/\(([^)]*)\)/.exec(k)[1],u=A.split(",");return u}function le(m,k){var A={_jsonata_function:!0,implementation:m};return typeof k<"u"&&(A.signature=y(k)),A}async function _r(m,k){if(!(typeof m>"u")){var A=this.input;typeof k<"u"&&(A=k,Array.isArray(A)&&!B(A)&&(A=z(A),A.outerWrapper=!0));try{var u=f(m,!1)}catch(g){throw Jt(g),{stack:new Error().stack,code:"D3120",value:g.message,error:g}}try{var h=await q(u,A,this.environment)}catch(g){throw Jt(g),{stack:new Error().stack,code:"D3121",value:g.message,error:g}}return h}}function wr(m){if(!(typeof m>"u"))return JSON.parse(a.string(m))}function jt(m){var k={};const A={bind:function(h,g){k[h]=g},lookup:function(h){var g;return k.hasOwnProperty(h)?g=k[h]:m&&(g=m.lookup(h)),g},timestamp:m?m.timestamp:null,async:m?m.async:!1,isParallelCall:m?m.isParallelCall:!1,global:m?m.global:{ancestry:[null]}};if(m){var u=m.lookup(Symbol.for("jsonata.__createFrame_push"));u&&u(m,A)}return A}O.bind("sum",le(a.sum,"<a<n>:n>")),O.bind("count",le(a.count,"<a:n>")),O.bind("max",le(a.max,"<a<n>:n>")),O.bind("min",le(a.min,"<a<n>:n>")),O.bind("average",le(a.average,"<a<n>:n>")),O.bind("string",le(a.string,"<x-b?:s>")),O.bind("substring",le(a.substring,"<s-nn?:s>")),O.bind("substringBefore",le(a.substringBefore,"<s-s:s>")),O.bind("substringAfter",le(a.substringAfter,"<s-s:s>")),O.bind("lowercase",le(a.lowercase,"<s-:s>")),O.bind("uppercase",le(a.uppercase,"<s-:s>")),O.bind("length",le(a.length,"<s-:n>")),O.bind("trim",le(a.trim,"<s-:s>")),O.bind("pad",le(a.pad,"<s-ns?:s>")),O.bind("match",le(a.match,"<s-f<s:o>n?:a<o>>")),O.bind("contains",le(a.contains,"<s-(sf):b>")),O.bind("replace",le(a.replace,"<s-(sf)(sf)n?:s>")),O.bind("split",le(a.split,"<s-(sf)n?:a<s>>")),O.bind("join",le(a.join,"<a<s>s?:s>")),O.bind("formatNumber",le(a.formatNumber,"<n-so?:s>")),O.bind("formatBase",le(a.formatBase,"<n-n?:s>")),O.bind("formatInteger",le(o.formatInteger,"<n-s:s>")),O.bind("parseInteger",le(o.parseInteger,"<s-s:n>")),O.bind("number",le(a.number,"<(nsb)-:n>")),O.bind("floor",le(a.floor,"<n-:n>")),O.bind("ceil",le(a.ceil,"<n-:n>")),O.bind("round",le(a.round,"<n-n?:n>")),O.bind("abs",le(a.abs,"<n-:n>")),O.bind("sqrt",le(a.sqrt,"<n-:n>")),O.bind("power",le(a.power,"<n-n:n>")),O.bind("random",le(a.random,"<:n>")),O.bind("boolean",le(a.boolean,"<x-:b>")),O.bind("not",le(a.not,"<x-:b>")),O.bind("map",le(a.map,"<af>")),O.bind("zip",le(a.zip,"<a+>")),O.bind("filter",le(a.filter,"<af>")),O.bind("single",le(a.single,"<af?>")),O.bind("reduce",le(a.foldLeft,"<afj?:j>")),O.bind("sift",le(a.sift,"<o-f?:o>")),O.bind("keys",le(a.keys,"<x-:a<s>>")),O.bind("lookup",le(a.lookup,"<x-s:x>")),O.bind("append",le(a.append,"<xx:a>")),O.bind("exists",le(a.exists,"<x:b>")),O.bind("spread",le(a.spread,"<x-:a<o>>")),O.bind("merge",le(a.merge,"<a<o>:o>")),O.bind("reverse",le(a.reverse,"<a:a>")),O.bind("each",le(a.each,"<o-f:a>")),O.bind("error",le(a.error,"<s?:x>")),O.bind("assert",le(a.assert,"<bs?:x>")),O.bind("type",le(a.type,"<x:s>")),O.bind("sort",le(a.sort,"<af?:a>")),O.bind("shuffle",le(a.shuffle,"<a:a>")),O.bind("distinct",le(a.distinct,"<x:x>")),O.bind("base64encode",le(a.base64encode,"<s-:s>")),O.bind("base64decode",le(a.base64decode,"<s-:s>")),O.bind("encodeUrlComponent",le(a.encodeUrlComponent,"<s-:s>")),O.bind("encodeUrl",le(a.encodeUrl,"<s-:s>")),O.bind("decodeUrlComponent",le(a.decodeUrlComponent,"<s-:s>")),O.bind("decodeUrl",le(a.decodeUrl,"<s-:s>")),O.bind("eval",le(_r,"<sx?:x>")),O.bind("toMillis",le(o.toMillis,"<s-s?:n>")),O.bind("fromMillis",le(o.fromMillis,"<n-s?s?:s>")),O.bind("clone",le(wr,"<(oa)-:o>"));var ot={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Jt(m){var k=ot[m.code];if(typeof k<"u"){var A=k.replace(/\{\{\{([^}]+)}}}/g,function(){return m[arguments[1]]});A=A.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(m[arguments[1]])}),m.message=A}}function Ue(m,k){var A,u;try{A=f(m,k&&k.recover),u=A.errors,delete A.errors}catch(E){throw Jt(E),E}var h=jt(O),g=new Date;return h.bind("now",le(function(E,C){return o.fromMillis(g.getTime(),E,C)},"<s?s?:s>")),h.bind("millis",le(function(){return g.getTime()},"<:n>")),k&&k.RegexEngine?Ue.RegexEngine=k.RegexEngine:Ue.RegexEngine=RegExp,{evaluate:async function(E,C,$){if(typeof u<"u"){var Z={code:"S0500",position:0};throw Jt(Z),Z}if(typeof C<"u"){var pe;pe=jt(h);for(var be in C)pe.bind(be,C[be])}else pe=h;pe.bind("$",E),g=new Date,pe.timestamp=g,Array.isArray(E)&&!B(E)&&(E=z(E),E.outerWrapper=!0);var Be;try{return Be=await q(A,E,pe),typeof $=="function"&&$(null,Be),Be}catch(Ee){throw Jt(Ee),Ee}},assign:function(E,C){h.bind(E,C)},registerFunction:function(E,C,$){var Z=le(C,$);h.bind(E,Z)},ast:function(){return A},errors:function(){return u}}}return Ue.parser=f,Ue})();n.exports=T},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(t,n,i){var o=t("./signature");const a=(()=>{var c={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,"?:":40,"??":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},y=function(w){var x=0,I=w.length,z=function(ve,U){var L={type:ve,value:U,position:x};return L},B=function(){for(var ve=x,U=0,L,G,F=function(q){if(w.charAt(q)==="/"&&U===0){for(var J=0;w.charAt(q-(J+1))==="\\";)J++;if(J%2===0)return!0}return!1};x<I;){var O=w.charAt(x);if(F(x)){if(L=w.substring(ve,x),L==="")throw{code:"S0301",stack:new Error().stack,position:x};for(x++,O=w.charAt(x),ve=x;O==="i"||O==="m";)x++,O=w.charAt(x);return G=w.substring(ve,x)+"g",new RegExp(L,G)}(O==="("||O==="["||O==="{")&&w.charAt(x-1)!=="\\"&&U++,(O===")"||O==="]"||O==="}")&&w.charAt(x-1)!=="\\"&&U--,x++}throw{code:"S0302",stack:new Error().stack,position:x}},de=function(ve){if(x>=I)return null;for(var U=w.charAt(x);x<I&&` 	
\r\v`.indexOf(U)>-1;)x++,U=w.charAt(x);if(U==="/"&&w.charAt(x+1)==="*"){var L=x;for(x+=2,U=w.charAt(x);!(U==="*"&&w.charAt(x+1)==="/");)if(U=w.charAt(++x),x>=I)throw{code:"S0106",stack:new Error().stack,position:L};return x+=2,U=w.charAt(x),de(ve)}if(ve!==!0&&U==="/")return x++,z("regex",B());if(U==="."&&w.charAt(x+1)===".")return x+=2,z("operator","..");if(U===":"&&w.charAt(x+1)==="=")return x+=2,z("operator",":=");if(U==="!"&&w.charAt(x+1)==="=")return x+=2,z("operator","!=");if(U===">"&&w.charAt(x+1)==="=")return x+=2,z("operator",">=");if(U==="<"&&w.charAt(x+1)==="=")return x+=2,z("operator","<=");if(U==="*"&&w.charAt(x+1)==="*")return x+=2,z("operator","**");if(U==="~"&&w.charAt(x+1)===">")return x+=2,z("operator","~>");if(U==="?"&&w.charAt(x+1)===":")return x+=2,z("operator","?:");if(U==="?"&&w.charAt(x+1)==="?")return x+=2,z("operator","??");if(Object.prototype.hasOwnProperty.call(c,U))return x++,z("operator",U);if(U==='"'||U==="'"){var G=U;x++;for(var F="";x<I;){if(U=w.charAt(x),U==="\\")if(x++,U=w.charAt(x),Object.prototype.hasOwnProperty.call(f,U))F+=f[U];else if(U==="u"){var O=w.substr(x+1,4);if(/^[0-9a-fA-F]+$/.test(O)){var q=parseInt(O,16);F+=String.fromCharCode(q),x+=4}else throw{code:"S0104",stack:new Error().stack,position:x}}else throw{code:"S0103",stack:new Error().stack,position:x,token:U};else{if(U===G)return x++,z("string",F);F+=U}x++}throw{code:"S0101",stack:new Error().stack,position:x}}var J=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/,Se=J.exec(w.substring(x));if(Se!==null){var _e=parseFloat(Se[0]);if(!isNaN(_e)&&isFinite(_e))return x+=Se[0].length,z("number",_e);throw{code:"S0102",stack:new Error().stack,position:x,token:Se[0]}}var se;if(U==="`"){x++;var M=w.indexOf("`",x);if(M!==-1)return se=w.substring(x,M),x=M+1,z("name",se);throw x=I,{code:"S0105",stack:new Error().stack,position:x}}for(var ie=x,fe;;)if(fe=w.charAt(ie),ie===I||` 	
\r\v`.indexOf(fe)>-1||Object.prototype.hasOwnProperty.call(c,fe)){if(w.charAt(x)==="$")return se=w.substring(x+1,ie),x=ie,z("variable",se);switch(se=w.substring(x,ie),x=ie,se){case"or":case"in":case"and":return z("operator",se);case"true":return z("value",!0);case"false":return z("value",!1);case"null":return z("value",null);default:return x===I&&se===""?null:z("name",se)}}else ie++};return de},T=function(w,x){var I,z,B={},de=[],ve=function(){var b=[];I.id!=="(end)"&&b.push({type:I.type,value:I.value,position:I.position});for(var S=z();S!==null;)b.push(S),S=z();return b},U={nud:function(){var b={code:"S0211",token:this.value,position:this.position};if(x)return b.remaining=ve(),b.type="error",de.push(b),b;throw b.stack=new Error().stack,b}},L=function(b,S){var ue=B[b];return S=S||0,ue?S>=ue.lbp&&(ue.lbp=S):(ue=Object.create(U),ue.id=ue.value=b,ue.lbp=S,B[b]=ue),ue},G=function(b){if(x){b.remaining=ve(),de.push(b);var S=B["(error)"];return I=Object.create(S),I.error=b,I.type="(error)",I}else throw b.stack=new Error().stack,b},F=function(b,S){if(b&&I.id!==b){var ue;I.id==="(end)"?ue="S0203":ue="S0202";var Ae={code:ue,position:I.position,token:I.value,value:b};return G(Ae)}var Qe=z(S);if(Qe===null)return I=B["(end)"],I.position=w.length,I;var Fe=Qe.value,R=Qe.type,N;switch(R){case"name":case"variable":N=B["(name)"];break;case"operator":if(N=B[Fe],!N)return G({code:"S0204",stack:new Error().stack,position:Qe.position,token:Fe});break;case"string":case"number":case"value":N=B["(literal)"];break;case"regex":R="regex",N=B["(regex)"];break;default:return G({code:"S0205",stack:new Error().stack,position:Qe.position,token:Fe})}return I=Object.create(N),I.value=Fe,I.type=R,I.position=Qe.position,I},O=function(b){var S,ue=I;for(F(null,!0),S=ue.nud();b<I.lbp;)ue=I,F(),S=ue.led(S);return S},q=function(b){var S=L(b,0);S.nud=function(){return this}},J=function(b,S,ue){var Ae=S||c[b],Qe=L(b,Ae);return Qe.led=ue||function(Fe){return this.lhs=Fe,this.rhs=O(Ae),this.type="binary",this},Qe},Se=function(b,S,ue){var Ae=L(b,S);return Ae.led=ue,Ae},_e=function(b,S){var ue=L(b);return ue.nud=S||function(){return this.expression=O(70),this.type="unary",this},ue};q("(end)"),q("(name)"),q("(literal)"),q("(regex)"),L(":"),L(";"),L(","),L(")"),L("]"),L("}"),L(".."),J("."),J("+"),J("-"),J("*"),J("/"),J("%"),J("="),J("<"),J(">"),J("!="),J("<="),J(">="),J("&"),J("and"),J("or"),J("in"),q("and"),q("or"),q("in"),_e("-"),J("~>"),J("??",c["??"],function(b){return this.type="condition",this.condition={type:"function",value:"(",procedure:{type:"variable",value:"exists"},arguments:[b]},this.then=b,this.else=O(0),this}),Se("(error)",10,function(b){return this.lhs=b,this.error=I.error,this.remaining=ve(),this.type="error",this}),_e("*",function(){return this.type="wildcard",this}),_e("**",function(){return this.type="descendant",this}),_e("%",function(){return this.type="parent",this}),J("(",c["("],function(b){if(this.procedure=b,this.type="function",this.arguments=[],I.id!==")")for(;I.type==="operator"&&I.id==="?"?(this.type="partial",this.arguments.push(I),F("?")):this.arguments.push(O(0)),I.id===",";)F(",");if(F(")",!0),b.type==="name"&&(b.value==="function"||b.value==="λ")){if(this.arguments.forEach(function(Fe,R){if(Fe.type!=="variable")return G({code:"S0208",stack:new Error().stack,position:Fe.position,token:Fe.value,value:R+1})}),this.type="lambda",I.id==="<"){for(var S=I.position,ue=1,Ae="<";ue>0&&I.id!=="{"&&I.id!=="(end)";){var Qe=F();Qe.id===">"?ue--:Qe.id==="<"&&ue++,Ae+=Qe.value}F(">");try{this.signature=o(Ae)}catch(Fe){return Fe.position=S+Fe.offset,G(Fe)}}F("{"),this.body=O(0),F("}")}return this}),_e("(",function(){for(var b=[];I.id!==")"&&(b.push(O(0)),I.id===";");)F(";");return F(")",!0),this.type="block",this.expressions=b,this}),_e("[",function(){var b=[];if(I.id!=="]")for(;;){var S=O(0);if(I.id===".."){var ue={type:"binary",value:"..",position:I.position,lhs:S};F(".."),ue.rhs=O(0),S=ue}if(b.push(S),I.id!==",")break;F(",")}return F("]",!0),this.expressions=b,this.type="unary",this}),J("[",c["["],function(b){if(I.id==="]"){for(var S=b;S&&S.type==="binary"&&S.value==="[";)S=S.lhs;return S.keepArray=!0,F("]"),b}else return this.lhs=b,this.rhs=O(c["]"]),this.type="binary",F("]",!0),this}),J("^",c["^"],function(b){F("(");for(var S=[];;){var ue={descending:!1};if(I.id==="<"?F("<"):I.id===">"&&(ue.descending=!0,F(">")),ue.expression=O(0),S.push(ue),I.id!==",")break;F(",")}return F(")"),this.lhs=b,this.rhs=S,this.type="binary",this});var se=function(b){var S=[];if(I.id!=="}")for(;;){var ue=O(0);F(":");var Ae=O(0);if(S.push([ue,Ae]),I.id!==",")break;F(",")}return F("}",!0),typeof b>"u"?(this.lhs=S,this.type="unary"):(this.lhs=b,this.rhs=S,this.type="binary"),this};_e("{",se),J("{",c["{"],se),Se(":=",c[":="],function(b){return b.type!=="variable"?G({code:"S0212",stack:new Error().stack,position:b.position,token:b.value}):(this.lhs=b,this.rhs=O(c[":="]-1),this.type="binary",this)}),J("@",c["@"],function(b){return this.lhs=b,this.rhs=O(c["@"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),J("#",c["#"],function(b){return this.lhs=b,this.rhs=O(c["#"]),this.rhs.type!=="variable"?G({code:"S0214",stack:new Error().stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),J("?",c["?"],function(b){return this.type="condition",this.condition=b,this.then=O(0),I.id===":"&&(F(":"),this.else=O(0)),this}),J("?:",c["?:"],function(b){return this.type="condition",this.condition=b,this.then=b,this.else=O(0),this}),_e("|",function(){return this.type="transform",this.pattern=O(0),F("|"),this.update=O(0),I.id===","&&(F(","),this.delete=O(0)),F("|"),this});var M=function(b){var S;if(b.type==="function"&&!b.predicate){var ue={type:"lambda",thunk:!0,arguments:[],position:b.position};ue.body=b,S=ue}else if(b.type==="condition")b.then=M(b.then),typeof b.else<"u"&&(b.else=M(b.else)),S=b;else if(b.type==="block"){var Ae=b.expressions.length;Ae>0&&(b.expressions[Ae-1]=M(b.expressions[Ae-1])),S=b}else S=b;return S},ie=0,fe=0,ke=[],ae=function(b,S){switch(b.type){case"name":case"wildcard":S.level--,S.level===0&&(typeof b.ancestor>"u"||(ke[S.index].slot.label=b.ancestor.label),b.ancestor=S,b.tuple=!0);break;case"parent":S.level++;break;case"block":b.expressions.length>0&&(b.tuple=!0,S=ae(b.expressions[b.expressions.length-1],S));break;case"path":b.tuple=!0;var ue=b.steps.length-1;for(S=ae(b.steps[ue--],S);S.level>0&&ue>=0;)S=ae(b.steps[ue--],S);break;default:throw{code:"S0217",token:b.type,position:b.position}}return S},ee=function(b,S){if(typeof S.seekingParent<"u"||S.type==="parent"){var ue=typeof S.seekingParent<"u"?S.seekingParent:[];S.type==="parent"&&ue.push(S.slot),typeof b.seekingParent>"u"?b.seekingParent=ue:Array.prototype.push.apply(b.seekingParent,ue)}},oe=function(b){var S=b.steps.length-1,ue=b.steps[S],Ae=typeof ue.seekingParent<"u"?ue.seekingParent:[];ue.type==="parent"&&Ae.push(ue.slot);for(var Qe=0;Qe<Ae.length;Qe++){var Fe=Ae[Qe];for(S=b.steps.length-2;Fe.level>0;){if(S<0){typeof b.seekingParent>"u"?b.seekingParent=[Fe]:b.seekingParent.push(Fe);break}for(var R=b.steps[S--];S>=0&&R.focus&&b.steps[S].focus;)R=b.steps[S--];Fe=ae(R,Fe)}}},V=function(b){var S;switch(b.type){case"binary":switch(b.value){case".":var ue=V(b.lhs);ue.type==="path"?S=ue:S={type:"path",steps:[ue]},ue.type==="parent"&&(S.seekingParent=[ue.slot]);var Ae=V(b.rhs);Ae.type==="function"&&Ae.procedure.type==="path"&&Ae.procedure.steps.length===1&&Ae.procedure.steps[0].type==="name"&&S.steps[S.steps.length-1].type==="function"&&(S.steps[S.steps.length-1].nextFunction=Ae.procedure.steps[0].value),Ae.type==="path"?Array.prototype.push.apply(S.steps,Ae.steps):(typeof Ae.predicate<"u"&&(Ae.stages=Ae.predicate,delete Ae.predicate),S.steps.push(Ae)),S.steps.filter(function(re){if(re.type==="number"||re.type==="value")throw{code:"S0213",stack:new Error().stack,position:re.position,value:re.value};return re.type==="string"}).forEach(function(re){re.type="name"}),S.steps.filter(function(re){return re.keepArray===!0}).length>0&&(S.keepSingletonArray=!0);var Qe=S.steps[0];Qe.type==="unary"&&Qe.value==="["&&(Qe.consarray=!0);var Fe=S.steps[S.steps.length-1];Fe.type==="unary"&&Fe.value==="["&&(Fe.consarray=!0),oe(S);break;case"[":S=V(b.lhs);var R=S,N="predicate";if(S.type==="path"&&(R=S.steps[S.steps.length-1],N="stages"),typeof R.group<"u")throw{code:"S0209",stack:new Error().stack,position:b.position};typeof R[N]>"u"&&(R[N]=[]);var P=V(b.rhs);typeof P.seekingParent<"u"&&(P.seekingParent.forEach(re=>{re.level===1?ae(R,re):re.level--}),ee(R,P)),R[N].push({type:"filter",expr:P,position:b.position});break;case"{":if(S=V(b.lhs),typeof S.group<"u")throw{code:"S0210",stack:new Error().stack,position:b.position};S.group={lhs:b.rhs.map(function(re){return[V(re[0]),V(re[1])]}),position:b.position};break;case"^":S=V(b.lhs),S.type!=="path"&&(S={type:"path",steps:[S]});var H={type:"sort",position:b.position};H.terms=b.rhs.map(function(re){var ye=V(re.expression);return ee(H,ye),{descending:re.descending,expression:ye}}),S.steps.push(H),oe(S);break;case":=":S={type:"bind",value:b.value,position:b.position},S.lhs=V(b.lhs),S.rhs=V(b.rhs),ee(S,S.rhs);break;case"@":if(S=V(b.lhs),R=S,S.type==="path"&&(R=S.steps[S.steps.length-1]),typeof R.stages<"u"||typeof R.predicate<"u")throw{code:"S0215",stack:new Error().stack,position:b.position};if(R.type==="sort")throw{code:"S0216",stack:new Error().stack,position:b.position};b.keepArray&&(R.keepArray=!0),R.focus=b.rhs.value,R.tuple=!0;break;case"#":S=V(b.lhs),R=S,S.type==="path"?R=S.steps[S.steps.length-1]:(S={type:"path",steps:[S]},typeof R.predicate<"u"&&(R.stages=R.predicate,delete R.predicate)),typeof R.stages>"u"?R.index=b.rhs.value:R.stages.push({type:"index",value:b.rhs.value,position:b.position}),R.tuple=!0;break;case"~>":S={type:"apply",value:b.value,position:b.position},S.lhs=V(b.lhs),S.rhs=V(b.rhs),S.keepArray=S.lhs.keepArray||S.rhs.keepArray;break;default:S={type:b.type,value:b.value,position:b.position},S.lhs=V(b.lhs),S.rhs=V(b.rhs),ee(S,S.lhs),ee(S,S.rhs)}break;case"unary":S={type:b.type,value:b.value,position:b.position},b.value==="["?S.expressions=b.expressions.map(function(re){var ye=V(re);return ee(S,ye),ye}):b.value==="{"?S.lhs=b.lhs.map(function(re){var ye=V(re[0]);ee(S,ye);var Ne=V(re[1]);return ee(S,Ne),[ye,Ne]}):(S.expression=V(b.expression),b.value==="-"&&S.expression.type==="number"?(S=S.expression,S.value=-S.value):ee(S,S.expression));break;case"function":case"partial":S={type:b.type,name:b.name,value:b.value,position:b.position},S.arguments=b.arguments.map(function(re){var ye=V(re);return ee(S,ye),ye}),S.procedure=V(b.procedure);break;case"lambda":S={type:b.type,arguments:b.arguments,signature:b.signature,position:b.position};var ne=V(b.body);S.body=M(ne);break;case"condition":S={type:b.type,position:b.position},S.condition=V(b.condition),ee(S,S.condition),S.then=V(b.then),ee(S,S.then),typeof b.else<"u"&&(S.else=V(b.else),ee(S,S.else));break;case"transform":S={type:b.type,position:b.position},S.pattern=V(b.pattern),S.update=V(b.update),typeof b.delete<"u"&&(S.delete=V(b.delete));break;case"block":S={type:b.type,position:b.position},S.expressions=b.expressions.map(function(re){var ye=V(re);return ee(S,ye),(ye.consarray||ye.type==="path"&&ye.steps[0].consarray)&&(S.consarray=!0),ye});break;case"name":S={type:"path",steps:[b]},b.keepArray&&(S.keepSingletonArray=!0);break;case"parent":S={type:"parent",slot:{label:"!"+ie++,level:1,index:fe++}},ke.push(S);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":S=b;break;case"operator":if(b.value==="and"||b.value==="or"||b.value==="in")b.type="name",S=V(b);else if(b.value==="?")S=b;else throw{code:"S0201",stack:new Error().stack,position:b.position,token:b.value};break;case"error":S=b,b.lhs&&(S=V(b.lhs));break;default:var X="S0206";b.id==="(end)"&&(X="S0207");var W={code:X,position:b.position,token:b.value};if(x)return de.push(W),{type:"error",error:W};throw W.stack=new Error().stack,W}return b.keepArray&&(S.keepArray=!0),S};z=y(w),F();var xe=O(0);if(I.id!=="(end)"){var $e={code:"S0201",position:I.position,token:I.value};G($e)}if(xe=V(xe),xe.type==="parent"||typeof xe.seekingParent<"u")throw{code:"S0217",token:xe.type,position:xe.position};return de.length>0&&(xe.errors=de),xe};return T})();n.exports=a},{"./signature":5}],5:[function(t,n,i){var o=t("./utils");const a=(()=>{var c={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};function f(y){for(var T=1,w=[],x={},I=x;T<y.length;){var z=y.charAt(T);if(z===":")break;var B=function(){w.push(x),I=x,x={}},de=function(J,Se,_e,se){for(var M=1,ie=Se;ie<J.length;)if(ie++,z=J.charAt(ie),z===se){if(M--,M===0)break}else z===_e&&M++;return ie};switch(z){case"s":case"n":case"b":case"l":case"o":x.regex="["+z+"m]",x.type=z,B();break;case"a":x.regex="[asnblfom]",x.type=z,x.array=!0,B();break;case"f":x.regex="f",x.type=z,B();break;case"j":x.regex="[asnblom]",x.type=z,B();break;case"x":x.regex="[asnblfom]",x.type=z,B();break;case"-":I.context=!0,I.contextRegex=new RegExp(I.regex),I.regex+="?";break;case"?":case"+":I.regex+=z;break;case"(":var ve=de(y,T,"(",")"),U=y.substring(T+1,ve);if(U.indexOf("<")===-1)x.regex="["+U+"m]";else throw{code:"S0402",stack:new Error().stack,value:U,offset:T};x.type="("+U+")",T=ve,B();break;case"<":if(I.type==="a"||I.type==="f"){var L=de(y,T,"<",">");I.subtype=y.substring(T+1,L),T=L}else throw{code:"S0401",stack:new Error().stack,value:I.type,offset:T};break}T++}var G="^"+w.map(function(J){return"("+J.regex+")"}).join("")+"$",F=new RegExp(G),O=function(J){var Se;if(o.isFunction(J))Se="f";else{var _e=typeof J;switch(_e){case"string":Se="s";break;case"number":Se="n";break;case"boolean":Se="b";break;case"object":J===null?Se="l":Array.isArray(J)?Se="a":Se="o";break;case"undefined":default:Se="m"}}return Se},q=function(J,Se){for(var _e="^",se=0,M=0;M<w.length;M++){_e+=w[M].regex;var ie=Se.match(_e);if(ie===null)throw{code:"T0410",stack:new Error().stack,value:J[se],index:se+1};se=ie[0].length}throw{code:"T0410",stack:new Error().stack,value:J[se],index:se+1}};return{definition:y,validate:function(J,Se){var _e="";J.forEach(function(fe){_e+=O(fe)});var se=F.exec(_e);if(se){var M=[],ie=0;return w.forEach(function(fe,ke){var ae=J[ie],ee=se[ke+1];if(ee==="")if(fe.context&&fe.contextRegex){var oe=O(Se);if(fe.contextRegex.test(oe))M.push(Se);else throw{code:"T0411",stack:new Error().stack,value:Se,index:ie+1}}else M.push(ae),ie++;else ee.split("").forEach(function(V){if(fe.type==="a"){if(V==="m")ae=void 0;else{ae=J[ie];var xe=!0;if(typeof fe.subtype<"u"){if(V!=="a"&&ee!==fe.subtype)xe=!1;else if(V==="a"&&ae.length>0){var $e=O(ae[0]);if($e!==fe.subtype.charAt(0))xe=!1;else{var b=ae.filter(function(S){return O(S)!==$e});xe=b.length===0}}}if(!xe)throw{code:"T0412",stack:new Error().stack,value:ae,index:ie+1,type:c[fe.subtype]};V!=="a"&&(ae=[ae])}M.push(ae),ie++}else M.push(ae),ie++})}),M}q(J,_e)}}}return f})();n.exports=a},{"./utils":6}],6:[function(t,n,i){const o=(()=>{function a(L){var G=!1;if(typeof L=="number"&&(G=!isNaN(L),G&&!isFinite(L)))throw{code:"D1001",value:L,stack:new Error().stack};return G}function c(L){var G=!1;return Array.isArray(L)&&(G=L.filter(function(F){return typeof F!="string"}).length===0),G}function f(L){var G=!1;return Array.isArray(L)&&(G=L.filter(function(F){return!a(F)}).length===0),G}function y(){var L=[];return L.sequence=!0,arguments.length===1&&L.push(arguments[0]),L}function T(L){return L.sequence===!0&&Array.isArray(L)}function w(L){return L&&(L._jsonata_function===!0||L._jsonata_lambda===!0)||typeof L=="function"}function x(L){var G=typeof L.arity=="number"?L.arity:typeof L.implementation=="function"?L.implementation.length:typeof L.length=="number"?L.length:L.arguments.length;return G}function I(L){return L&&L._jsonata_lambda===!0}var z=(typeof Symbol=="function"?Symbol:{}).iterator||"@@iterator";function B(L){return typeof L=="object"&&L!==null&&z in L&&"next"in L&&typeof L.next=="function"}function de(L,G){if(L===G)return!0;if(typeof L=="object"&&typeof G=="object"&&L!==null&&G!==null){if(Array.isArray(L)&&Array.isArray(G)){if(L.length!==G.length)return!1;for(var F=0;F<L.length;F++)if(!de(L[F],G[F]))return!1;return!0}var O=Object.getOwnPropertyNames(L),q=Object.getOwnPropertyNames(G);if(O.length!==q.length)return!1;for(O=O.sort(),q=q.sort(),F=0;F<O.length;F++)if(O[F]!==q[F])return!1;for(F=0;F<O.length;F++){var J=O[F];if(!de(L[J],G[J]))return!1}return!0}return!1}function ve(L){return typeof L=="object"&&L!==null&&"then"in L&&typeof L.then=="function"}function U(L){var G=[];for(let F of L)G.push(F);return G}return{isNumeric:a,isArrayOfStrings:c,isArrayOfNumbers:f,createSequence:y,isSequence:T,isFunction:w,isLambda:I,isIterable:B,getFunctionArity:x,isDeepEqual:de,stringToArray:U,isPromise:ve}})();n.exports=o},{}]},{},[3])(3)})})(zi)),zi.exports}var Yu=Ku();const uo=oa(Yu);var ur={exports:{}};const ii=Po(Lo),Ju="17.2.3",Zu={version:Ju};var ta;function Qu(){if(ta)return ur.exports;ta=1;var r={};const e=ii,t=ii,n=ii,i=ii,a=Zu.version,c=["🔐 encrypt with Dotenvx: https://dotenvx.com","🔐 prevent committing .env to code: https://dotenvx.com/precommit","🔐 prevent building .env in docker: https://dotenvx.com/prebuild","📡 add observability to secrets: https://dotenvx.com/ops","👥 sync secrets across teammates & machines: https://dotenvx.com/ops","🗂️ backup and recover secrets: https://dotenvx.com/ops","✅ audit secrets and track compliance: https://dotenvx.com/ops","🔄 add secrets lifecycle management: https://dotenvx.com/ops","🔑 add access controls to secrets: https://dotenvx.com/ops","🛠️  run anywhere with `dotenvx run -- yourcommand`","⚙️  specify custom .env file path with { path: '/custom/path/.env' }","⚙️  enable debug logging with { debug: true }","⚙️  override existing env vars with { override: true }","⚙️  suppress all logs with { quiet: true }","⚙️  write to custom object with { processEnv: myObject }","⚙️  load multiple .env files with { path: ['.env.local', '.env'] }"];function f(){return c[Math.floor(Math.random()*c.length)]}function y(M){return typeof M=="string"?!["false","0","no","off",""].includes(M.toLowerCase()):!!M}function T(){return process.stdout.isTTY}function w(M){return T()?`\x1B[2m${M}\x1B[0m`:M}const x=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function I(M){const ie={};let fe=M.toString();fe=fe.replace(/\r\n?/mg,`
`);let ke;for(;(ke=x.exec(fe))!=null;){const ae=ke[1];let ee=ke[2]||"";ee=ee.trim();const oe=ee[0];ee=ee.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),oe==='"'&&(ee=ee.replace(/\\n/g,`
`),ee=ee.replace(/\\r/g,"\r")),ie[ae]=ee}return ie}function z(M){M=M||{};const ie=G(M);M.path=ie;const fe=se.configDotenv(M);if(!fe.parsed){const oe=new Error(`MISSING_DATA: Cannot parse ${ie} for an unknown reason`);throw oe.code="MISSING_DATA",oe}const ke=U(M).split(","),ae=ke.length;let ee;for(let oe=0;oe<ae;oe++)try{const V=ke[oe].trim(),xe=L(fe,V);ee=se.decrypt(xe.ciphertext,xe.key);break}catch(V){if(oe+1>=ae)throw V}return se.parse(ee)}function B(M){console.error(`[dotenv@${a}][WARN] ${M}`)}function de(M){console.log(`[dotenv@${a}][DEBUG] ${M}`)}function ve(M){console.log(`[dotenv@${a}] ${M}`)}function U(M){return M&&M.DOTENV_KEY&&M.DOTENV_KEY.length>0?M.DOTENV_KEY:r.DOTENV_KEY&&r.DOTENV_KEY.length>0?r.DOTENV_KEY:""}function L(M,ie){let fe;try{fe=new URL(ie)}catch(V){if(V.code==="ERR_INVALID_URL"){const xe=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw xe.code="INVALID_DOTENV_KEY",xe}throw V}const ke=fe.password;if(!ke){const V=new Error("INVALID_DOTENV_KEY: Missing key part");throw V.code="INVALID_DOTENV_KEY",V}const ae=fe.searchParams.get("environment");if(!ae){const V=new Error("INVALID_DOTENV_KEY: Missing environment part");throw V.code="INVALID_DOTENV_KEY",V}const ee=`DOTENV_VAULT_${ae.toUpperCase()}`,oe=M.parsed[ee];if(!oe){const V=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${ee} in your .env.vault file.`);throw V.code="NOT_FOUND_DOTENV_ENVIRONMENT",V}return{ciphertext:oe,key:ke}}function G(M){let ie=null;if(M&&M.path&&M.path.length>0)if(Array.isArray(M.path))for(const fe of M.path)e.existsSync(fe)&&(ie=fe.endsWith(".vault")?fe:`${fe}.vault`);else ie=M.path.endsWith(".vault")?M.path:`${M.path}.vault`;else ie=t.resolve(process.cwd(),".env.vault");return e.existsSync(ie)?ie:null}function F(M){return M[0]==="~"?t.join(n.homedir(),M.slice(1)):M}function O(M){const ie=y(r.DOTENV_CONFIG_DEBUG||M&&M.debug),fe=y(r.DOTENV_CONFIG_QUIET||M&&M.quiet);(ie||!fe)&&ve("Loading env from encrypted .env.vault");const ke=se._parseVault(M);let ae=r;return M&&M.processEnv!=null&&(ae=M.processEnv),se.populate(ae,ke,M),{parsed:ke}}function q(M){const ie=t.resolve(process.cwd(),".env");let fe="utf8",ke=r;M&&M.processEnv!=null&&(ke=M.processEnv);let ae=y(ke.DOTENV_CONFIG_DEBUG||M&&M.debug),ee=y(ke.DOTENV_CONFIG_QUIET||M&&M.quiet);M&&M.encoding?fe=M.encoding:ae&&de("No encoding is specified. UTF-8 is used by default");let oe=[ie];if(M&&M.path)if(!Array.isArray(M.path))oe=[F(M.path)];else{oe=[];for(const b of M.path)oe.push(F(b))}let V;const xe={};for(const b of oe)try{const S=se.parse(e.readFileSync(b,{encoding:fe}));se.populate(xe,S,M)}catch(S){ae&&de(`Failed to load ${b} ${S.message}`),V=S}const $e=se.populate(ke,xe,M);if(ae=y(ke.DOTENV_CONFIG_DEBUG||ae),ee=y(ke.DOTENV_CONFIG_QUIET||ee),ae||!ee){const b=Object.keys($e).length,S=[];for(const ue of oe)try{const Ae=t.relative(process.cwd(),ue);S.push(Ae)}catch(Ae){ae&&de(`Failed to load ${ue} ${Ae.message}`),V=Ae}ve(`injecting env (${b}) from ${S.join(",")} ${w(`-- tip: ${f()}`)}`)}return V?{parsed:xe,error:V}:{parsed:xe}}function J(M){if(U(M).length===0)return se.configDotenv(M);const ie=G(M);return ie?se._configVault(M):(B(`You set DOTENV_KEY but you are missing a .env.vault file at ${ie}. Did you forget to build it?`),se.configDotenv(M))}function Se(M,ie){const fe=Buffer.from(ie.slice(-64),"hex");let ke=Buffer.from(M,"base64");const ae=ke.subarray(0,12),ee=ke.subarray(-16);ke=ke.subarray(12,-16);try{const oe=i.createDecipheriv("aes-256-gcm",fe,ae);return oe.setAuthTag(ee),`${oe.update(ke)}${oe.final()}`}catch(oe){const V=oe instanceof RangeError,xe=oe.message==="Invalid key length",$e=oe.message==="Unsupported state or unable to authenticate data";if(V||xe){const b=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw b.code="INVALID_DOTENV_KEY",b}else if($e){const b=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw b.code="DECRYPTION_FAILED",b}else throw oe}}function _e(M,ie,fe={}){const ke=!!(fe&&fe.debug),ae=!!(fe&&fe.override),ee={};if(typeof ie!="object"){const oe=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw oe.code="OBJECT_REQUIRED",oe}for(const oe of Object.keys(ie))Object.prototype.hasOwnProperty.call(M,oe)?(ae===!0&&(M[oe]=ie[oe],ee[oe]=ie[oe]),ke&&de(ae===!0?`"${oe}" is already defined and WAS overwritten`:`"${oe}" is already defined and was NOT overwritten`)):(M[oe]=ie[oe],ee[oe]=ie[oe]);return ee}const se={configDotenv:q,_configVault:O,_parseVault:z,config:J,decrypt:Se,parse:I,populate:_e};return ur.exports.configDotenv=se.configDotenv,ur.exports._configVault=se._configVault,ur.exports._parseVault=se._parseVault,ur.exports.config=se.config,ur.exports.decrypt=se.decrypt,ur.exports.parse=se.parse,ur.exports.populate=se.populate,ur.exports=se,ur.exports}var Xu=Qu();const yi=async r=>{const e=await Tt.getWorkspace();if(!e)throw new Error("No workspace available");const t=await e.getResource(r);if(!t)throw new Error("Invalid URL: "+r);return await t.getContents({uri:!0})},po=r=>r.startsWith("blob:")||r.startsWith("http:")||r.startsWith("https:"),_i={},on=async(r,e,t)=>{const n=await uo(`[**[${e}!='']]`).evaluate(r);for(const i of n){const o=i[e];if(po(o))continue;let a;if(e==="src"&&t)try{a=(await t.resolveWorkspaceModule(o)).blobUrl}catch{a=await yi(o)}else a=await yi(o);_i[a]=i[e],i[e]=a}},Mn=r=>_i[r],Fn=async(r,e)=>{const t=await uo(`[**[${e}!='']]`).evaluate(r);for(const n of t){const i=n[e];!i||!i.startsWith("blob:")||(n[e]=_i[i])}},ho=r=>{Ye.registerContribution("catalog.root",{label:r.label,icon:r.icon,contributionId:r.contributionId});const e=r.contributionId??r.label;r.items?.forEach(t=>{Ye.registerContribution(e,{label:t.label,icon:t.icon,contributionId:t.contributionId});const i=import.meta.resolve("/.");t.items.forEach(o=>{const a={label:o.label,icon:o.icon,state:{...o.state}};a.state?.url&&(a.state.url=a.state.url.replace("${baseURL}/",i)),Ye.registerContribution(t.contributionId,a)})})},Zi=r=>{Object.entries(r).forEach(([e,t])=>{const n=/\${([a-zA-Z0-9_]+)}/g;r[e]=t.replace(n,(i,o)=>{const a=r[o];return a!==void 0?a:i})})},fo=async(...r)=>{const e=await Tt.getWorkspace(),t={};for(const n of r){const i=await e?.getResource(n);if(!i)continue;const o=await i.getContents(),a=Xu.parse(o||"");Zi(a),Object.assign(t,a)}return Zi(t),t},ep=Object.freeze(Object.defineProperty({__proto__:null,_blobsLookup:_i,getOriginalUri:Mn,isAbsoluteResource:po,loadEnvs:fo,registerCatalog:ho,replaceUris:on,replaceVars:Zi,revertBlobUris:Fn,toBlobUri:yi},Symbol.toStringTag,{value:"Module"}));$o.resolveUrl=r=>yi(r);Lr.registerEditorInputHandler({canHandle:r=>r instanceof or&&r.getName().endsWith(".geospace"),handle:async r=>{const e={title:r.getName(),data:r,key:r.getName(),editorId:"map-editor",icon:"location-dot",state:{}};return e.widgetFactory=t=>j`
            <gs-map id="${t}" .input="${e}"></gs-map>`,e}});const tp=ca(class extends ua{constructor(){super(...arguments),this.key=vt}render(r,e){return this.key=r,e}update(r,[e,t]){return e!==this.key&&(pa(r),this.key=e),t}});function un(r,e){return r.layers.find(t=>t.uuid===e)}function pn(r,e){return r.layers.findIndex(t=>t.uuid===e)}function rp(r,e){return r.controls.findIndex(t=>t.uuid===e)}function np(r,e){return r.overlays.findIndex(t=>t.uuid===e)}const ip=r=>new Proxy({},{get:(e,t)=>async(...n)=>{for(const i of r)await i[t](...n)}});var Zt=(r=>(r[r.LOADED=0]="LOADED",r[r.LAYER_ADDED=1]="LAYER_ADDED",r[r.LAYER_DELETED=2]="LAYER_DELETED",r[r.LAYER_UPDATED=3]="LAYER_UPDATED",r[r.FEATURE_SELECTED=4]="FEATURE_SELECTED",r))(Zt||{});const hr=Kr(Il),sp=`:root,
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
`;function ap(r){return r.startsWith("blob:")||r.startsWith("http:")||r.startsWith("https:")}function ra(r,e){if(r.startsWith("/"))return r.slice(1);const t=e.split("/").filter(o=>o),n=r.split("/").filter(o=>o);if(r.startsWith("./")||r.startsWith("../")||!r.startsWith("/")){const o=t.slice(0,-1);t.length=0,t.push(...o)}for(const o of n)o!=="."&&(o===".."?t.length>0&&t.pop():t.push(o));return t.join("/")}function op(r){const e=[],t=/import\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,n=/export\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']/g,i=/import\s*\(\s*["']([^"']+)["']\s*\)/g;let o;for(;(o=t.exec(r))!==null;)e.push({fullMatch:o[0],importPath:o[1],isDynamic:!1,startIndex:o.index,endIndex:o.index+o[0].length});for(;(o=n.exec(r))!==null;)e.push({fullMatch:o[0],importPath:o[1],isDynamic:!1,startIndex:o.index,endIndex:o.index+o[0].length});for(;(o=i.exec(r))!==null;)e.push({fullMatch:o[0],importPath:o[1],isDynamic:!0,startIndex:o.index,endIndex:o.index+o[0].length});return e.sort((a,c)=>c.startIndex-a.startIndex)}class lp{constructor(){this.blobUrlCache=new Map,this.moduleCache=new Map,this.resolvingModules=new Set,this.resolvingPromises=new Map}async resolveModuleRecursive(e){if(!await Tt.getWorkspace())throw new Error("Workspace not available");if(this.blobUrlCache.has(e))return this.blobUrlCache.get(e);if(this.resolvingPromises.has(e))return await this.resolvingPromises.get(e);if(this.resolvingModules.has(e))throw new Error(`Circular dependency detected: ${e}`);this.resolvingModules.add(e);const n=this.doResolveModule(e);this.resolvingPromises.set(e,n);try{return await n}finally{this.resolvingPromises.delete(e)}}async doResolveModule(e){const t=await Tt.getWorkspace();if(!t)throw new Error("Workspace not available");try{let n=await t.getResource(e);if(n||(await t.listChildren(!0),n=await t.getResource(e)),!n)throw new Error(`Module not found: ${e}`);let i=await n.getContents();const o=op(i);for(const f of o){const y=f.importPath;if(!ap(y))try{const T=ra(y,e),w=await this.resolveModuleRecursive(T);let x;if(f.isDynamic)x=`import("${w}")`;else{const I=f.fullMatch.search(/["']/);if(I===-1)x=f.fullMatch;else{const z=f.fullMatch[I],B=f.fullMatch.lastIndexOf(z);B!==-1&&B>I?x=f.fullMatch.slice(0,I+1)+w+f.fullMatch.slice(B):x=f.fullMatch}}i=i.slice(0,f.startIndex)+x+i.slice(f.endIndex)}catch{}}const a=new Blob([i],{type:"application/javascript"}),c=URL.createObjectURL(a);return this.blobUrlCache.set(e,c),this.moduleCache.set(e,{code:i,workspacePath:e,blobUrl:c}),c}catch(n){throw n}finally{this.resolvingModules.delete(e)}}async resolveWorkspaceModule(e,t){const n=t?ra(e,t):e;if(this.moduleCache.has(n))return this.moduleCache.get(n);await this.resolveModuleRecursive(n);const i=this.moduleCache.get(n);if(!i)throw new Error(`Failed to resolve module: ${n}`);return i}clear(){for(const e of this.blobUrlCache.values())e.startsWith("blob:")&&URL.revokeObjectURL(e);this.blobUrlCache.clear(),this.moduleCache.clear(),this.resolvingModules.clear()}}const cp="iframe-map-renderer.html";class up{constructor(e,t){this.messageId=0,this.pendingMessages=new Map,this.isMobileView=!1,this.gsMap=e,this.env=t,this.operations=this.createProxy(this)}createProxy(e){return new Proxy({},{get(t,n){return async(...i)=>await e.sendMessage(n,{...i})}})}async reattached(){if(!this.targetElement){console.warn("No target element stored, cannot reattach");return}this.iframe&&this.iframe.parentElement&&this.iframe.remove(),await this.render(this.targetElement)}async render(e){if(this.iframe=document.createElement("iframe"),this.iframe.style.overflow="hidden",this.updateIframeStyles(),this.iframe.src=cp,this.targetElement=typeof e=="string"?document.querySelector(e):e,!this.targetElement)throw new Error("Container element not found");this.targetElement.innerHTML="",this.targetElement.appendChild(this.iframe),await this.waitRendererReady(),this.setupMessageListener(),await this.sendMessage("render",{gsMap:this.gsMap,env:this.env})}async modelToUI(e){await this.sendMessage("modelToUI",e??this.gsMap)}getOperations(){return this.operations}async getViewExtent(){return(await this.sendMessage("getViewExtent",{}))?.extent||[0,0,0,0]}setOnDirty(e){this.onDirtyCallback=e}triggerDirty(){this.onDirtyCallback&&this.onDirtyCallback()}setOnSync(e){this.onSyncCallback=e}setOnClick(e){this.onClickCallback=e}triggerSync(e){this.onSyncCallback&&this.onSyncCallback(e)}toggleMobileView(){this.isMobileView=!this.isMobileView,this.updateIframeStyles()}isInMobileView(){return this.isMobileView}updateIframeStyles(){this.iframe&&(this.isMobileView?(this.iframe.style.width="375px",this.iframe.style.height="667px",this.iframe.style.border="2px solid rgb(168, 168, 168)",this.iframe.style.borderRadius="20px",this.iframe.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.51)",this.iframe.style.margin="20px auto",this.iframe.style.display="block"):(this.iframe.style.width="100%",this.iframe.style.height="100%",this.iframe.style.border="none",this.iframe.style.borderRadius="0",this.iframe.style.boxShadow="none",this.iframe.style.margin="0"))}async handleAssetResolution(e,t){try{const{toBlobUri:n}=await at(async()=>{const{toBlobUri:o}=await Promise.resolve().then(()=>ep);return{toBlobUri:o}},void 0),i=await n(t);this.iframe.contentWindow.postMessage({id:e,success:!0,assetUrl:i},"*")}catch(n){this.iframe.contentWindow.postMessage({id:e,success:!1,error:n instanceof Error?n.message:"Unknown error"},"*")}}destroy(){this.messageListener&&(window.removeEventListener("message",this.messageListener),this.messageListener=void 0),this.iframe&&(this.iframe.remove(),this.iframe=void 0),this.pendingMessages.clear()}setupMessageListener(){this.messageListener=e=>{if(e.source!==this.iframe?.contentWindow)return;const{id:t,result:n,error:i,type:o,event:a}=e.data;if(t!==void 0&&this.pendingMessages.has(t)){const{resolve:c,reject:f}=this.pendingMessages.get(t);if(this.pendingMessages.delete(t),i)f(new Error(i));else{const y=n??Object.fromEntries(Object.entries(e.data).filter(([T])=>!["id","type","event","error"].includes(T)));c(y)}}o==="dirty"?this.onDirtyCallback?.():o==="sync"?this.onSyncCallback?.(a):o==="iframeClicked"?this.onClickCallback?.():o==="resolveAsset"&&this.handleAssetResolution(t,e.data.path)},window.addEventListener("message",this.messageListener)}async waitRendererReady(){return new Promise(e=>{const t=n=>{n.source===this.iframe?.contentWindow&&n.data.type==="rendererReady"&&(window.removeEventListener("message",t),e())};window.addEventListener("message",t)})}async sendMessage(e,t){if(!this.iframe)throw new Error("Iframe not initialized");const n=++this.messageId;return new Promise((i,o)=>{this.pendingMessages.set(n,{resolve:i,reject:o}),this.iframe.contentWindow.postMessage({id:n,method:e,params:t},"*"),setTimeout(()=>{this.pendingMessages.has(n)&&(this.pendingMessages.delete(n),o(new Error("Message timeout")))},5e3)})}}class pp{constructor(e,t){this.gsMap=e,this.renderer=t}triggerDirty(){this.renderer.triggerDirty()}async setZoom(e){this.gsMap.view.zoom=e,this.triggerDirty()}async setCenter(e){this.gsMap.view.center=e,this.triggerDirty()}async switchColorMode(e){this.gsMap.view.colorMode=e,this.triggerDirty()}async addLayer(e,t){t?this.gsMap.layers.unshift(e):this.gsMap.layers.push(e),this.triggerDirty()}async deleteLayer(e){const t=pn(this.gsMap,e);t>=0&&(this.gsMap.layers.splice(t,1),this.triggerDirty())}async renameLayer(e,t){const n=un(this.gsMap,e);n&&(n.name=t,this.triggerDirty())}async moveLayer(e,t){const n=pn(this.gsMap,e);if(n<0)return;let i;if(t){if(i=pn(this.gsMap,t),i<0||n===i)return}else i=n>0?n-1:n+1;if(i>=0&&i<this.gsMap.layers.length&&n!==i){const[o]=this.gsMap.layers.splice(n,1);this.gsMap.layers.splice(i,0,o),this.triggerDirty()}}async setLayerVisible(e,t){const n=un(this.gsMap,e);n&&(n.visible=t,this.triggerDirty())}async addControlFromModule(e){this.gsMap.controls.push({src:e,type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeControl(e){const t=rp(this.gsMap,e);t>=0&&(this.gsMap.controls.splice(t,1),this.triggerDirty(),await this.renderer.modelToUI())}async addOverlayFromModule(e,t){this.gsMap.overlays.push({src:e,position:t||"bottom-left",type:"module"}),this.triggerDirty(),await this.renderer.modelToUI()}async removeOverlay(e){const t=np(this.gsMap,e);t>=0&&(this.gsMap.overlays.splice(t,1),this.triggerDirty(),await this.renderer.modelToUI())}async enableDrawing(e,t){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){this.triggerDirty()}}class dp{constructor(e){this.source=e}async setZoom(e){}async setCenter(e){}async switchColorMode(e){}async addLayer(e,t){hr.set({part:this.source,event:Zt.LAYER_ADDED})}async deleteLayer(e){hr.set({part:this.source,event:Zt.LAYER_DELETED})}async renameLayer(e,t){hr.set({part:this.source,event:Zt.LAYER_UPDATED})}async moveLayer(e,t){hr.set({part:this.source,event:Zt.LAYER_UPDATED})}async setLayerVisible(e,t){}async addControlFromModule(e){}async removeControl(e){}async addOverlayFromModule(e,t){}async removeOverlay(e){}async enableDrawing(e,t){}async disableDrawing(){}async enableFeatureSelection(){}async disableSelection(){}async deleteSelectedFeatures(){hr.set({part:this.source,event:Zt.LAYER_UPDATED})}}var hp=Object.defineProperty,fp=Object.getOwnPropertyDescriptor,Zn=(r,e,t,n)=>{for(var i=n>1?void 0:n?fp(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&hp(e,t,i),i};const mp=Hr("GsMapEditor");let St=class extends Nt{constructor(){super(),this.mapContainer=mr(),this.isFirstConnection=!0,this.moduleResolver=new lp,this.interactionMode="none",this.commandStack=new xa}getRenderer(){return this.renderer}getOperations(){return this.operations}onMapChanged({part:r,event:e}){r===this&&(e===Zt.LAYER_ADDED||e===Zt.LAYER_DELETED||e===Zt.LAYER_UPDATED)&&this.updateToolbar()}renderToolbar(){const e=this.getGsMap()?.layers.filter(n=>{const i=n.type===As.VECTOR,o=n.source?.type===ir.Features;return i&&o})||[],t=this.activeDrawingLayerUuid!==void 0;return j`
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
            
            ${Dt(e.length>0,()=>{const n=e.map(i=>`${i.uuid}:${i.name}`).join("|");return j`
                ${tp(n,j`
                    <wa-select 
                        placeholder="Drawing layer"
                        size="small"
                        value="${this.activeDrawingLayerUuid??""}"
                        @change=${i=>{const o=i.target.value||void 0;this.activeDrawingLayerUuid=o,(o===void 0||i.target.value==="")&&(this.operations?.disableDrawing(),this.interactionMode="none"),this.updateToolbar()}}>
                        <wa-option value="">Select layer</wa-option>
                        ${e.map(i=>j`
                            <wa-option value="${i.uuid}">${i.name||"Layer"}</wa-option>
                        `)}
                    </wa-select>
                `)}
                
                <k-action icon="location-dot" 
                          title="Draw Point"
                          ?disabled=${!t}
                          .action=${()=>this.handleDrawPoint()}>
                </k-action>
                <k-action icon="minus" 
                          title="Draw LineString"
                          ?disabled=${!t}
                          .action=${()=>this.handleDrawLine()}>
                </k-action>
                <k-action icon="draw-polygon" 
                          title="Draw Polygon"
                          ?disabled=${!t}
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
        `}async connectedCallback(){if(super.connectedCallback(),this.isFirstConnection){this.isFirstConnection=!1;return}this.renderer?.reattached&&(await this.renderer.reattached(),this.renderer.setOnClick&&this.renderer.setOnClick(()=>{Ze.set(this)}))}async doInitUI(){const r=this.input?.data,e=await fo(".env");e.BUILD_TIME=new Date;const t=await r.getContents();let n=t&&t.trim()?JSON.parse(t):da;n=this.migrateGsMap(n),Es(n),await on(n,"url"),await on(n,"src",this.moduleResolver),this.gsMap=n,n.view&&(this.initialView={center:[...n.view.center],zoom:n.view.zoom}),this.renderer=new up(n,e);const i=this.renderer.getOperations(),o=new pp(n,this.renderer),a=new dp(this);this.operations=ip([o,i,a]);try{if(!this.mapContainer.value)throw new Error("Map container not available");await this.renderer.render(this.mapContainer.value),this.renderer.setOnDirty(()=>this.markDirty(!0)),this.renderer.setOnSync(c=>{if(this.gsMap){switch(c.type){case"viewChanged":this.gsMap.view.center=c.view.center,this.gsMap.view.zoom=c.view.zoom,c.view.rotation!==void 0&&c.view.rotation!==0&&(this.gsMap.view.rotation=c.view.rotation);break;case"featuresChanged":const f=un(this.gsMap,c.layerUuid);f&&f.source?.type===ir.Features&&(f.source.features=c.features);break;case"featureSelected":const y={feature:c.feature,layerUuid:c.layerUuid,metrics:c.metrics};console.info("Feature metrics:",y.metrics),hr.set({part:this,event:Zt.FEATURE_SELECTED,payload:y});break;case"featureDeselected":console.info("Feature deselected"),hr.set({part:this,event:Zt.FEATURE_SELECTED,payload:null}),this.interactionMode==="select"&&(this.interactionMode="none",this.updateToolbar());break;case"drawingDisabled":this.interactionMode==="draw"&&(this.interactionMode="none",this.updateToolbar());break}this.markDirty(!0)}}),this.renderer.setOnClick?.(()=>{Ze.set(this)}),this.updateToolbar(),hr.set({part:this,event:Zt.LOADED})}catch(c){console.error("Failed to render map:",c),je(`Failed to render map: ${c.message}`)}}migrateGsMap(r){const e={...r};let t=!1;return r.view||(console.log("Creating view field and migrating old properties..."),t=!0,e.view={},r.center!==void 0&&(e.view.center=r.center,delete e.center),r.zoom!==void 0&&(e.view.zoom=r.zoom,delete e.zoom),r.projection!==void 0&&(e.view.projection=r.projection,delete e.projection),e.view.center===void 0&&(e.view.center=[0,0]),e.view.zoom===void 0&&(e.view.zoom=0),e.view.projection===void 0&&(e.view.projection="EPSG:3857")),(!r.styles||Object.keys(r.styles).length===0)&&(console.log("Adding default styles to map..."),t=!0,e.styles={...No}),(!r.styleRules||r.styleRules.length===0)&&(console.log("Adding default style rules to map..."),t=!0,e.styleRules=[...Mo]),t&&console.log("Map migration completed"),e}getGsMap(){return this.gsMap}async save(){if(!this.renderer){je("Map not initialized");return}try{if(!this.gsMap){je("Map not initialized");return}const r=JSON.parse(JSON.stringify(this.gsMap));await Fn(r,"url"),await Fn(r,"src"),this.input?.data.saveContents(JSON.stringify(r,null,2)),this.markDirty(!1)}catch(r){je(`Save failed: ${r.message}`)}}get mapOperations(){return this.operations}edit(){Gt("not yet implemented")}async refresh(){if(!this.renderer||!this.gsMap){mp.error("Map not initialized");return}await Fn(this.gsMap,"url"),await Fn(this.gsMap,"src"),this.moduleResolver.clear(),await on(this.gsMap,"url"),await on(this.gsMap,"src",this.moduleResolver),await this.renderer.modelToUI(this.gsMap)}async resetView(){!this.operations||!this.initialView||(await this.operations.setCenter(this.initialView.center),await this.operations.setZoom(this.initialView.zoom))}async handleDrawPoint(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Point",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawLine(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("LineString",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleDrawPolygon(){this.activeDrawingLayerUuid&&(await this.operations?.enableDrawing("Polygon",this.activeDrawingLayerUuid),this.interactionMode="draw",this.updateToolbar())}async handleSelectFeatures(){await this.operations?.enableFeatureSelection(),this.interactionMode="select",this.updateToolbar()}async handleDeleteSelected(){if(this.interactionMode==="select")try{await this.operations?.deleteSelectedFeatures(),Gt("Selected features deleted")}catch(r){je(r.message)}}async handleCreateDrawingLayer(){if(!this.gsMap){je("Map not initialized");return}const r=await Gn("Enter name for new drawing layer:","Drawing Layer");if(!r)return;const e=Es({name:r,type:As.VECTOR,source:{type:ir.Features,features:[]},visible:!0});await this.operations?.addLayer(e,!1);const t=this.gsMap?.layers.find(n=>n.uuid===e.uuid);t?.uuid&&(this.activeDrawingLayerUuid=t.uuid),await this.updateComplete,this.updateToolbar(),Gt(`Created drawing layer: ${r}`)}doClose(){this.renderer?.destroy(),this.renderer=void 0,this.input=void 0,this.moduleResolver.clear()}render(){return j`
            <div class="gc-map-container" ${gr(this.mapContainer)}>
            </div>
        `}};St.styles=[Do(sp),Mt`
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
    `];Zn([Te({attribute:!1})],St.prototype,"input",2);Zn([Te({type:String})],St.prototype,"activeDrawingLayerUuid",2);Zn([Te({type:String})],St.prototype,"interactionMode",2);Zn([hs(hr)],St.prototype,"onMapChanged",1);St=Zn([yt("gs-map")],St);var gp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,Oi=(r,e,t,n)=>{for(var i=n>1?void 0:n?vp(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&gp(e,t,i),i};let gn=class extends Nt{onPartChanged(r){if(!(r==this||r==this.mapEditor)){if(!(r instanceof St)){this.mapEditor=void 0,this.requestUpdate();return}this.mapEditor=r,this.requestUpdate()}}onMapChanged({part:r}){r==this.mapEditor&&this.requestUpdate()}toggleVisible(r){const e=this.mapEditor.getGsMap(),t=un(e,r);if(!t)return;const i=!(t.visible!==!1);this.mapEditor?.mapOperations?.setLayerVisible(r,i),this.updateLater()}async confirmAction(r,e){await vn(r)&&e()}selectLayer(r){this.selectedLayerUuid=r,this.updateToolbar(),this.updateContextMenu()}renameLayer(r){if(!this.mapEditor)return;const e=r||this.selectedLayerUuid;if(!e)return;const t=this.mapEditor.getGsMap();if(!un(t,e))return;const i=pn(t,e),o=Le.createExecutionContext({index:i+1});Le.execute("rename_layer",o)}deleteLayer(r){if(!this.mapEditor)return;const e=r||this.selectedLayerUuid;if(!e)return;const t=this.mapEditor.getGsMap(),n=un(t,e);n&&this.confirmAction(`Delete layer "${n.name||"Layer"}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.deleteLayer(e)))}moveLayerUp(r){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const t=pn(e,r);if(t<=0)return;const n=e.layers[t-1]?.uuid;n&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(r,n)),this.selectedLayerUuid=n)}moveLayerDown(r){if(!this.mapEditor)return;const e=this.mapEditor.getGsMap();if(!e)return;const t=pn(e,r);if(t<0||t>=e.layers.length-1)return;const n=e.layers[t+1]?.uuid;n&&(this.withRefresh(()=>this.mapEditor?.mapOperations?.moveLayer(r,n)),this.selectedLayerUuid=n)}renderToolbar(){const r=this.selectedLayerUuid!==void 0;return j`
            <k-action ?disabled=${!r} 
                      title="Rename selected layer" 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
            </k-action>
            <k-action ?disabled=${!r} 
                      title="Delete selected layer" 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
            </k-action>
        `}renderContextMenu(){const r=this.selectedLayerUuid!==void 0;return j`
            <k-action ?disabled=${!r} 
                      icon="pen"
                      .action=${()=>this.renameLayer()}>
                Rename
            </k-action>
            <k-action ?disabled=${!r} 
                      icon="trash"
                      .action=${()=>this.deleteLayer()}>
                Delete
            </k-action>
        `}render(){return Dt(!this.mapEditor,()=>j`
                    <k-no-content message="Select a map."></k-no-content>`,()=>j`
                <wa-tree>
                    <wa-tree-item expanded>
                        <k-icon name="fg layers"></k-icon> Layers
                        ${this.mapEditor.getGsMap()?.layers.map((r,e)=>j`
                            <wa-tree-item @click="${()=>r.uuid&&this.selectLayer(r.uuid)}" 
                                          class="${this.selectedLayerUuid===r.uuid?"selected":""}">
                                <div class="layer-item">
                                    <div class="layer-name">
                                        <span>${r.name??`Layer ${e+1}`}${e==0?j`
                                            <small>(basemap)</small>`:""}</span>
                                    </div>
                                    <div class="layer-actions">
                                        <k-action size="small"
                                                  icon="${r.visible!==!1?"eye":"eye-slash"}"
                                                  title="${r.visible!==!1?"Hide layer":"Show layer"}"
                                                  .action=${()=>r.uuid&&this.toggleVisible(r.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-up"
                                                  title="Move layer up"
                                                  ?disabled="${e===0}"
                                                  .action=${()=>r.uuid&&this.moveLayerUp(r.uuid)}>
                                        </k-action>
                                        <k-action size="small"
                                                  icon="arrow-down"
                                                  title="Move layer down"
                                                  ?disabled="${e===this.mapEditor.getGsMap().layers.length-1}"
                                                  .action=${()=>r.uuid&&this.moveLayerDown(r.uuid)}>
                                        </k-action>
                                    </div>
                                </div>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-control"></k-icon> Controls
                        ${this.mapEditor?.getGsMap()?.controls.map(r=>j`
                            <wa-tree-item>
                                <span>${Mn(r.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete control"
                                          .action=${()=>{r.uuid&&this.confirmAction(`Delete control "${Mn(r.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeControl(r.uuid)))}}>
                                </k-action>
                            </wa-tree-item>
                        `)}
                    </wa-tree-item>
                    <wa-tree-item expanded>
                        <k-icon name="fg map-poi"></k-icon> Overlays
                        ${this.mapEditor?.getGsMap()?.overlays.map(r=>j`
                            <wa-tree-item>
                                <span>${Mn(r.src)}</span>
                                <k-action size="small"
                                          icon="trash"
                                          title="Delete overlay"
                                          .action=${()=>{r.uuid&&this.confirmAction(`Delete overlay "${Mn(r.src)}"?`,()=>this.withRefresh(()=>this.mapEditor?.mapOperations?.removeOverlay(r.uuid)))}}>
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
            `)}};gn.styles=Mt`
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
    `;Oi([xt()],gn.prototype,"selectedLayerUuid",2);Oi([hs(ln)],gn.prototype,"onPartChanged",1);Oi([hs(hr)],gn.prototype,"onMapChanged",1);gn=Oi([yt("gs-map-props")],gn);var yp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,mo=(r,e,t,n)=>{for(var i=n>1?void 0:n?bp(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&yp(e,t,i),i};const wp="catalog.root";let $r=class extends Nt{constructor(){super(...arguments),this.treeRef=mr()}doBeforeUI(){const r=Ye.getContributions(wp);this.rootNodes=this.toTreeNodes(r)}renderToolbar(){const r=Ze.get()instanceof $r&&Vt.get()!==void 0;return j`
            <k-command cmd="checkout" icon="file-arrow-down" ?disabled=${!r} title="Checkout"></k-command>
            <k-command cmd="refresh_catalog" icon="arrows-rotate" title="Refresh Catalog"></k-command>
            <k-command cmd="catalog_expand_all" icon="angles-down" slot="end" title="Expand All"></k-command>
            <k-command cmd="catalog_collapse_all" icon="angles-up" slot="end" title="Collapse All"></k-command>
        `}toTreeNodes(r){return r.map(e=>{const t={data:e.state,icon:e.icon,label:e.label,leaf:!1};if(e.contributionId){const n=Ye.getContributions(e.contributionId);t.leaf=n.length===0,t.children=this.toTreeNodes(n)}return t})}onItemDblClicked(r){const e=r.currentTarget.model.data.url;this.executeCommand("checkout",{url:e})}onSelectionChanged(r){const e=r.detail.selection[0].model;Vt.set(e.data)}setAllExpanded(r){const e=this.treeRef.value;e&&e.querySelectorAll("wa-tree-item").forEach(t=>{t.expanded=r})}refresh(){this.requestUpdate()}createTreeItems(r,e=!1){return r?j`
            <wa-tree-item
                    @dblclick=${this.nobubble(this.onItemDblClicked)} .model=${r} ?expanded=${e}>
                <span><k-icon name="${r.icon}"></k-icon> ${r.label}</span>
                ${r.children?.map(t=>this.createTreeItems(t))}
            </wa-tree-item>`:j``}render(){return j`
            <wa-tree ${gr(this.treeRef)} @wa-selection-change=${this.nobubble(this.onSelectionChanged)} style="--indent-guide-width: 1px;">
                ${this.rootNodes?.map(r=>this.createTreeItems(r,!0))}
            </wa-tree>
        `}};$r.styles=Mt`
        :host {
            display: flex;
            flex-direction: column;
        }
    `;mo([xt()],$r.prototype,"rootNodes",2);$r=mo([yt("gs-catalog")],$r);const xp="geo!space catalog",Ip="earth",kp="catalog.root.geospace",Sp=[{contributionId:"catalog.root.notebooks",label:"Notebooks",icon:"book",items:[{label:"Welcome to Jupyter Notebooks",icon:"graduation-cap",state:{url:"${baseURL}/notebooks/welcome.ipynb",type:"file"}},{label:"Simple Notebook",icon:"circle-info",state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:"file"}}]},{contributionId:"catalog.root.datasets",label:"Datasets",icon:"clone",items:[{label:"countries.geojson",icon:"fg geojson-file",state:{url:"${baseURL}/datasets/countries.geojson",type:"file"}}]},{contributionId:"catalog.root.maps",label:"Maps",icon:"map-location",items:[{label:"OpenStreetMap basemap",icon:"earth",state:{url:"${baseURL}/maps/osm.geospace",type:"file"}},{label:"basemap.de basemap",icon:"earth",state:{url:"${baseURL}/maps/bm.geospace",type:"file"}},{label:"basemap.de WMS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms.geospace",type:"file"}},{label:"basemap.de WMS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:"file"}},{label:"basemap.de WMTS (Color)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts.geospace",type:"file"}},{label:"basemap.de WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:"file"}},{label:"TopPlusOpen WMTS (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:"file"}},{label:"TopPlusOpen WMTS Light (Gray)",icon:"earth",state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:"file"}},{label:"Esri World Imagery (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:"file"}},{label:"Sentinel-2 Cloudless (Satellite)",icon:"satellite",state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:"file"}}]},{contributionId:"catalog.root.overlays",label:"Overlays",icon:"fg map-poi",items:[]},{contributionId:"catalog.root.controls",label:"Controls",icon:"fg map-control",items:[]},{contributionId:"catalog.root.icons",label:"Icons",icon:"icons",items:[{label:"marker.png",icon:"file",state:{url:"${baseURL}/icons/marker.png",type:"file"}},{label:"location-user-24.png",icon:"file",state:{url:"${baseURL}/icons/location-user-24.png",type:"file"}}]},{contributionId:"catalog.root.packages",label:"Asset Packages",icon:"box-archive",items:[]}],Cp={label:xp,icon:Ip,contributionId:kp,items:Sp};et({command:{id:"checkout",name:"Checkout",description:"Checkout a catalog item into the workspace",parameters:[{name:"url",description:"the url of the resource to checkout, if not provided, the current selection in the catalog will be used",required:!1}]},handler:{execute:async r=>{let e=r.params&&r.params.url;if(!e){const n=Vt.get();if(!n||!("url"in n))return;e=n.url}const t=await Tt.getWorkspace();if(!t){je("No workspace selected.");return}fetch(e,{method:"GET"}).then(n=>n.blob()).then(n=>{const i=new URL(e).pathname.split("/"),o=i[i.length-1];return t.getResource(o,{create:!0}).then(a=>a.saveContents(n,{contentType:Ba.BINARY}).then(()=>{Gt("File checked out: "+o)}))}).catch(n=>{je(n)})}}});et({command:{id:"refresh_catalog",name:"Refresh Catalog",description:"Refreshes the catalog view",parameters:[]},handler:{execute:async r=>{const e=Ze.get();e instanceof $r&&e.refresh()}}});et({command:{id:"catalog_expand_all",name:"Expand All Catalog Items",description:"Expands all items in the catalog tree",parameters:[]},handler:{execute:async r=>{const e=Ze.get();e instanceof $r&&e.setAllExpanded(!0)}}});et({command:{id:"catalog_collapse_all",name:"Collapse All Catalog Items",description:"Collapses all items in the catalog tree",parameters:[]},handler:{execute:async r=>{const e=Ze.get();e instanceof $r&&e.setAllExpanded(!1)}}});ho(Cp);const Ap=Hr("GsCommandHandlers"),Ar=r=>r.activeEditor instanceof St,Nr=r=>{const e=r.activeEditor;if(!(e instanceof St)||!e.getOperations())throw Ap.error("GsMapEditor with renderer not available in context.activeEditor"),new Error("GsMapEditor with renderer not available in context.activeEditor");return e.getOperations()};Le.registerAll({command:{id:"zoom_to_level",name:"Zoom to Level",description:"Zooms the map to the provided level",parameters:[{name:"zoom",description:"the zoom level (typically 0-20, where 0=world view, 5-9=country/region, 10-12=city, 13-15=street, 16-20=building detail)",required:!0}]},handler:{canExecute:Ar,execute:async r=>{const e=Nr(r),t=Number(r.params.zoom).valueOf();return await e.setZoom(t),{zoom:t}}}});Le.registerAll({command:{id:"zoom_in",name:"Zoom In",description:"Zooms the map in by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:r=>Ze.get()instanceof St,execute:async r=>{const e=Ze.get(),t=e.getGsMap();if(t?.view?.zoom!==void 0){const n=e.mapOperations,i=t.view.zoom+1;return await n?.setZoom(i),i}return t?.view?.zoom}}});Le.registerAll({command:{id:"zoom_out",name:"Zoom Out",description:"Zooms the map out by one level",parameters:[],output:[{name:"zoom",description:"the new zoom level",type:"number"}]},handler:{canExecute:r=>Ze.get()instanceof St,execute:async r=>{const e=Ze.get(),t=e.getGsMap();if(t?.view?.zoom!==void 0){const n=e.mapOperations,i=t.view.zoom-1;return await n?.setZoom(i),i}return t?.view?.zoom}}});Le.registerAll({command:{id:"center_location",name:"Center to a location",description:"Centers the map to the provided location coordinates",parameters:[{name:"lat",description:"the latitude of the location (e.g., 52.52 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0},{name:"lon",description:"the longitude of the location (e.g., 13.405 for Berlin). Use your knowledge of city coordinates or approximate values.",type:"number",required:!0}]},handler:{canExecute:Ar,execute:async r=>{const e=Nr(r),t=Fo([Number(r.params.lon).valueOf(),Number(r.params.lat).valueOf()]);await e.setCenter([t[0],t[1]])}}});Le.registerAll({command:{id:"add_layer",name:"Add new layer",description:"Adds a new layer to the map or set the basemap",parameters:[{name:"source",description:`the source of the layer, one of: ${Object.values(ir).join(", ")}`,required:!0},{name:"basemap",description:"if set to true, the new layer will be used as the basemap or basemap layer",required:!1},{name:"url",description:"the URL or path within the workspace to load the features/geometries from",required:!1},{name:"stylePath",description:"the path within the workspace to the style json file if source is of type vector, for example, geojson",required:!1}]},handler:{canExecute:Ar,execute:async r=>{const e=Nr(r),t=r.params.source?.trim().toLowerCase(),n=r.params.url,i=zo(t),o=r?.params&&r.params.basemap==!0;let a;n&&(a=n.split("/").pop()),!a&&i&&(a=i);const c=_s({name:a,type:qo(t),source:_s({type:i,url:n??Uo(i)})});await on(c,"url"),await e.addLayer(c,o)}}});Le.registerAll({command:{id:"delete_layer",name:"Delete a layer",description:"Delete a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to delete, starts with 1 for the first layer",required:!0}]},handler:{canExecute:Ar,execute:async r=>{const e=Nr(r),n=r.activeEditor.getGsMap(),i=parseInt(r.params.index)-1;if(i<0||!n||i>=n.layers.length)return;const o=n.layers[i];o?.uuid&&await e.deleteLayer(o.uuid)}}});Le.registerAll({command:{id:"rename_layer",name:"Rename a layer",description:"Rename a layer given its index (starting with 1 for the first layer)",parameters:[{name:"index",description:"the index of the layer to rename, starts with 1 for the first layer",required:!0},{name:"newName",description:"the new name for the layer",required:!1}]},handler:{canExecute:Ar,execute:async r=>{const e=Nr(r),n=r.activeEditor.getGsMap(),i=parseInt(r.params.index)-1;if(i<0||!n||i>=n.layers.length)return;const o=n.layers[i];if(!o?.uuid)return;const a=o.name||`Layer ${i+1}`,c=r.params?.newName||await Gn(`Enter new name for "${a}":`,a);!c||c===a||await e.renameLayer(o.uuid,c)}}});Le.registerAll({command:{id:"switch_color_mode",name:"Switch color mode",description:"Switches the current color mode to either dark or light (default)",parameters:[{name:"mode",description:"the mode to switch to, will be toggled if not provided",required:!1}]},handler:{canExecute:Ar,execute:async r=>{const e=Nr(r),t=r.params?.mode;await e.switchColorMode(t)}}});Le.registerAll({command:{id:"add_overlay",name:"Add overlay",description:"Adds an overlay JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:Ar,execute:async r=>{const e=Nr(r),t=r.params.src,n=r.params.position;await e.addOverlayFromModule(t,n)}}});Le.registerAll({command:{id:"add_control",name:"Add control",description:"Adds a control JavaScript module to the map",parameters:[{name:"src",description:"the path within the workspace - can also be an external URL - to the JavaScript module which must return a default function that adds behavior to a wrapper control",required:!0}]},handler:{canExecute:Ar,execute:async r=>{const e=Nr(r),t=r.params.src;await e.addControlFromModule(t)}}});Le.registerAll({command:{id:"view_extents",name:"View extents",description:"Stores the extent of the current view as a variable",parameters:[{name:"latlon",description:"set to true to reverse coordinates to lat/lon instead of lon/lat; useful for various external services such as OpenStreetMap Overpass API",required:!1}],output:[{name:"viewExtent",description:"the current view's extent as lat/lon coordinates in WGS84 (EPSG:4326) format",type:"number[]"}]},handler:{canExecute:Ar,execute:async r=>{const e=r.activeEditor,t=r.params.latlon,i=await e.getRenderer().getViewExtent();if(!i)throw new Error("Failed to get view extent");let o=i;if(t||t===void 0){const{transformExtent:a}=await at(async()=>{const{transformExtent:c}=await import("./index-CQTfp0Ol.js").then(f=>f.ag);return{transformExtent:c}},__vite__mapDeps([1,2]));o=a(i,"EPSG:3857","EPSG:4326"),[o[0],o[1]]=[o[1],o[0]],[o[2],o[3]]=[o[3],o[2]]}return r.viewExtent=o,o}}});Le.registerAll({command:{id:"toggle_mobile_view",name:"Toggle Mobile View",description:"Toggles between desktop and mobile view for the map",parameters:[]},handler:{canExecute:r=>Ze.get()instanceof St,execute:async r=>{const e=Ze.get().renderer;if(!e||!("toggleMobileView"in e))throw new Error("Mobile view toggle not available on this renderer");e.toggleMobileView()}}});Le.registerAll({command:{id:"refresh_map",name:"Refresh Map",description:"Refreshes the currently active map editor",parameters:[]},handler:{canExecute:r=>Ze.get()instanceof St,execute:async r=>{const e=Ze.get();e instanceof St&&await e.refresh()}}});Le.registerAll({command:{id:"reset_view",name:"Reset View",description:"Resets the map view to the initial center and zoom level",parameters:[]},handler:{canExecute:r=>Ze.get()instanceof St,execute:async r=>{const e=Ze.get();e instanceof St&&await e.resetView()}}});Le.registerAll({command:{id:"toggle_color_mode",name:"Toggle Color Mode",description:"Toggles between dark and light mode for the map",parameters:[]},handler:{canExecute:r=>Ze.get()instanceof St,execute:async r=>{const t=Ze.get().mapOperations;t&&await t.switchColorMode()}}});var Ep=Object.getOwnPropertyDescriptor,_p=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ep(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=a(i)||i);return i};let na=class extends ms{createRenderRoot(){return this}render(){return j`
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
                <k-toolbar id=${Ma}></k-toolbar>
                <k-toolbar id=${Rc}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${xn}></k-toolbar>
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
                    <k-tabs id="${za}"></k-tabs>
                    <k-tabs id="${qa}"></k-tabs>
                </k-resizable-grid>
                
                <!-- Editor Area (fixed, never moves) -->
                <k-tabs id="${an}"></k-tabs>
                
                <!-- RIGHT SIDEBAR (auxiliary) -->
                <k-tabs id="${Ua}"></k-tabs>
            </k-resizable-grid>
            
            <!-- BOTTOM TOOLBAR (status bar) -->
            <div class="toolbar-bottom">
                <k-toolbar id=${Fa}></k-toolbar>
                <k-toolbar id=${gs}></k-toolbar>
                <k-toolbar class="toolbar-end" id=${Ki}></k-toolbar>
            </div>
        `}};na=_p([yt("gs-app")],na);const Op=`You are an assistant embedded in a highly modular and extendable WebGIS called "geo!space".
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
Keep your answer concise and as short as possible: specific requests are handled by other assistants.`,Tp=`# 🌐 geo!space
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

**Happy mapping! 🗺️✨**`,ia=Ln.version,sa=Hr("GeoSpaceApp"),Rp={".geojson":ir.GeoJSON,".json":ir.GeoJSON,".kml":ir.KML,".gpx":ir.GPX,".tif":ir.GeoTIFF,".tiff":ir.GeoTIFF,".geotiff":ir.GeoTIFF},go=r=>{const e=r.getName().toLowerCase();for(const[t,n]of Object.entries(Rp))if(e.endsWith(t))return n;return null},Pp=r=>go(r)!==null,Lp={id:"geospace",name:"🌐geo!space",version:ia,description:"An IDE for working with geospatial data.",metadata:{github:{owner:"erdalkaraca",repo:"geospace"}},extensions:["geospace.styleEditor","system.mdeditor","system.monaco","system.download","system.commandpalette","system.memoryusage","system.pythonpackagemanager","system.settings-tree","system.ai-system"],contributions:{ui:[{target:Ma,slot:"start",label:"Brand",html:'<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>'},{target:za,name:"filebrowser",label:"Workspace",icon:"folder-open",component:r=>j`<k-filebrowser id="${r}"></k-filebrowser>`},{target:"system.fastviews-bottomend",name:"catalog",label:"Catalog",icon:"book",component:r=>j`<gs-catalog id="${r}"></gs-catalog>`},{target:qa,name:"map-props",label:"Map Properties",icon:"fg map-options",component:r=>j`<gs-map-props id="${r}"></gs-map-props>`},{target:Ua,name:"aiview",label:"AI",icon:"robot",component:r=>j`<k-aiview id="${r}"></k-aiview>`},{target:"system.fastviews-bottomend",name:"log-terminal",label:"Log Messages",icon:"list",component:r=>j`<k-log-terminal id="${r}"></k-log-terminal>`},{target:Fa,slot:"start",label:"Workspace",html:"<k-workspace-name></k-workspace-name>"},{target:Ki,label:`v${ia}`,icon:"circle-info",command:"show_version_info",showLabel:!0},{target:Ki,label:"Fast Views",html:'<k-fastviews target="system.fastviews-bottomend" icon="bolt" title="Fast Views"></k-fastviews>'},{target:"contextmenu:filebrowser",label:"Add as Map Layer",icon:"layer-group",command:"add_layer_from_selection",disabled:()=>{const r=Vt.get();return r instanceof or?!Pp(r):!0}},{target:"filebrowser.create",label:"geo!space map",icon:"earth",command:"create_map_file"}],extensions:[{id:"geospace.mapBuilder",name:"geo!space Map Builder",description:"Compile a geo!space file to an interactive website",loader:()=>at(()=>import("./mapbuilder-extension-CFccy2Lc.js"),__vite__mapDeps([23,1,2])),icon:"earth"},{id:"geospace.styleEditor",name:"Style Editor",description:"Visual editor for defining and managing map styles and rules",loader:()=>at(()=>import("./style-editor-extension-CIc7liNg.js"),__vite__mapDeps([24,1,2])),icon:"palette"},{id:"geospace.overpass",name:"OpenStreetMap Overpass",description:"OpenStreetMap Overpass API Integration for use with LLMs",loader:()=>at(()=>import("./overpass-extension-DTttzobX.js"),__vite__mapDeps([25,1,2])),icon:"table"},{id:"geospace.gtfs",name:"GTFS to GeoJSON Converter",description:"Convert GTFS zip archives to GeoJSON files",loader:()=>at(()=>import("./gtfs-extension-DLV-hxXC.js"),__vite__mapDeps([26,1,2])),icon:"map-location-dot"}]},async initialize(){vi.addPackage({name:Ln.name,version:Ln.version,dependencies:Ln.dependencies,devDependencies:Ln.devDependencies});const r={enhance:async(e,t)=>Tt.getWorkspace().then(n=>{const i={workspace:n?.getName(),activeEditor:Lr.getEditorArea()?.getActiveEditor()};return`${`***App's state:***
${JSON.stringify(i,null,2)}`}

${e}`})};Ye.registerContribution(Yn,{label:"App Support",description:"General app support",role:"appsupport",priority:100,icon:"question-circle",sysPrompt:()=>{const e=Pe.getExtensions().map(n=>({id:n.id,name:n.name,description:n.description,experimental:n.experimental,installedAndEnabled:Pe.isEnabled(n.id)})),t=`***Available Extensions:***
${JSON.stringify(e,null,2)}`;return`${Op}

${t}`},promptEnhancers:[r],tools:{enabled:!0}}),et({command:{id:"add_layer_from_selection",name:"Add Layer from Selected File",description:"Adds the selected file as a map layer",parameters:[]},handler:{execute:async e=>{const t=Vt.get();if(!(t instanceof or))return;const n=go(t);if(!n){sa.warn(`Unsupported file type: ${t.getName()}`);return}const i=t.getWorkspacePath(),o=Le.createExecutionContext({source:n,url:i});await Le.execute("add_layer",o)}}}),et({command:{id:"create_map_file",name:"Create Geospace map file",description:"Creates a new .geospace map file with default map structure. This is specifically for creating geospace map files, not general files.",parameters:[{name:"path",description:"the path including name of the map file to be created (e.g., 'my-map.geospace' or 'my map'). The .geospace extension will be added automatically if missing. Must be relative to the workspace.",required:!1}],output:[{name:"path",description:"the path of the created file"}]},handler:{execute:async e=>{const t={...da,chatHistory:[],view:{center:[1105600,6120800],zoom:5,projection:"EPSG:3857"}},n=e.params?.path||"map.geospace",i=n.endsWith(".geospace")?n:`${n}.geospace`;return await Le.execute("create_file",{params:{path:i,contents:JSON.stringify(t,null,2),extension:".geospace",ask:n==="map.geospace"}})}}}),et({command:{id:"help",name:"Show welcome",description:"Shows the welcome page.",parameters:[]},handler:{execute:async e=>{const t=new jc(Tp,"README.md");await Lr.loadEditor(t)}},contribution:{target:xn,icon:"question-circle",label:"Welcome"}}),sa.info("geo!space is ready!")},render(){return j`<gs-app></gs-app>`}};Qr.registerApp(Lp,{defaultAppId:"geospace",autoStart:!0,container:document.body});export{Hr as A,Br as B,mt as C,cn as D,Gn as E,or as F,St as G,vn as H,ya as I,Ka as J,Zr as K,br as L,Un as M,xn as N,Dp as O,Nu as P,Np as Q,Fp as R,zp as S,Ma as T,Gt as a,je as b,Ze as c,Vt as d,Ye as e,ln as f,Ke as g,et as h,Mp as i,qp as j,Nt as k,fo as l,Je as m,kc as n,Rc as o,Le as p,Ba as q,qt as r,Wt as s,fi as t,ni as u,Lr as v,Tt as w,Fa as x,We as y,fr as z};
