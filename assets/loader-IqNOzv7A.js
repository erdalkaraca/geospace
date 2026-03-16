import{g as Yt,_ as ue,b as Ge,D as ft}from"./repeat-Duk-1tMZ.js";import{l as Ht,G as Xt}from"./gs-map-editor-Bmb3q0Ab.js";import{T as Kt}from"./gs-gs2ol-B7eo2bWN.js";import{w as He,u as gt,x as wt,t as ke,o as Qt,D as yt,E as dt,F as Fe,y as ht,c as Zt}from"./config-BnnWtrGw-CtyKT0bq.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./third-party-BW12UeC1.js";function en(W,R){for(var D=0;D<R.length;D++){const A=R[D];if(typeof A!="string"&&!Array.isArray(A)){for(const V in A)if(V!=="default"&&!(V in W)){const I=Object.getOwnPropertyDescriptor(A,V);I&&Object.defineProperty(W,V,I.get?I:{enumerable:!0,get:()=>A[V]})}}}return Object.freeze(Object.defineProperty(W,Symbol.toStringTag,{value:"Module"}))}var Je={exports:{}},mt;function tn(){return mt||(mt=1,(function(W){(R=>{var D=Object.defineProperty,A=Object.getOwnPropertyDescriptor,V=Object.getOwnPropertyNames,I=Object.prototype.hasOwnProperty,C=(e,n)=>{for(var r in n)D(e,r,{get:n[r],enumerable:!0})},N=(e,n,r,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let p of V(n))!I.call(e,p)&&p!==r&&D(e,p,{get:()=>n[p],enumerable:!(o=A(n,p))||o.enumerable});return e},se=e=>N(D({},"__esModule",{value:!0}),e),ie=(e,n,r)=>new Promise((o,p)=>{var w=u=>{try{k(r.next(u))}catch(L){p(L)}},h=u=>{try{k(r.throw(u))}catch(L){p(L)}},k=u=>u.done?o(u.value):Promise.resolve(u.value).then(w,h);k((r=r.apply(e,n)).next())}),z={};C(z,{analyzeMetafile:()=>Ut,analyzeMetafileSync:()=>Vt,build:()=>Rt,buildSync:()=>Nt,context:()=>At,default:()=>Gt,formatMessages:()=>Ft,formatMessagesSync:()=>Mt,initialize:()=>Wt,stop:()=>Bt,transform:()=>It,transformSync:()=>Lt,version:()=>Dt}),R.exports=se(z);function H(e){let n=o=>{if(o===null)r.write8(0);else if(typeof o=="boolean")r.write8(1),r.write8(+o);else if(typeof o=="number")r.write8(2),r.write32(o|0);else if(typeof o=="string")r.write8(3),r.write(le(o));else if(o instanceof Uint8Array)r.write8(4),r.write(o);else if(o instanceof Array){r.write8(5),r.write32(o.length);for(let p of o)n(p)}else{let p=Object.keys(o);r.write8(6),r.write32(p.length);for(let w of p)r.write(le(w)),n(o[w])}},r=new _e;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),n(e.value),qe(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function K(e){let n=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return xe(r.read());case 4:return r.read();case 5:{let h=r.read32(),k=[];for(let u=0;u<h;u++)k.push(n());return k}case 6:{let h=r.read32(),k={};for(let u=0;u<h;u++)k[xe(r.read())]=n();return k}default:throw new Error("Invalid packet")}},r=new _e(e),o=r.read32(),p=(o&1)===0;o>>>=1;let w=n();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:p,value:w}}var _e=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let n=new Uint8Array((this.len+e)*2);n.set(this.buf),this.buf=n}return this.len+=e,this.len-e}write8(e){let n=this._write(1);this.buf[n]=e}write32(e){let n=this._write(4);qe(this.buf,e,n)}write(e){let n=this._write(4+e.length);qe(this.buf,e.length,n),this.buf.set(e,n+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return Qe(this.buf,this._read(4))}read(){let e=this.read32(),n=new Uint8Array(e),r=this._read(n.length);return n.set(this.buf.subarray(r,r+e)),n}},le,xe,Ee;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,n=new TextDecoder;le=r=>e.encode(r),xe=r=>n.decode(r),Ee='new TextEncoder().encode("")'}else if(typeof Buffer<"u")le=e=>Buffer.from(e),xe=e=>{let{buffer:n,byteOffset:r,byteLength:o}=e;return Buffer.from(n,r,o).toString()},Ee='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(le("")instanceof Uint8Array))throw new Error(`Invariant violation: "${Ee} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function Qe(e,n){return e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24}function qe(e,n,r){e[r++]=n,e[r++]=n>>8,e[r++]=n>>16,e[r++]=n>>24}var re=JSON.stringify,Ze="warning",et="silent";function je(e,n){const r=[];for(const o of e){if(oe(o,n),o.indexOf(",")>=0)throw new Error(`Invalid ${n}: ${o}`);r.push(o)}return r.join(",")}var Ue=()=>null,Z=e=>typeof e=="boolean"?null:"a boolean",T=e=>typeof e=="string"?null:"a string",Ne=e=>e instanceof RegExp?null:"a RegExp object",$e=e=>typeof e=="number"&&e===(e|0)?null:"an integer",vt=e=>typeof e=="number"&&e===(e|0)&&e>=0&&e<=65535?null:"a valid port number",tt=e=>typeof e=="function"?null:"a function",ge=e=>Array.isArray(e)?null:"an array",ae=e=>Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"an array of strings",de=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",bt=e=>typeof e=="object"&&e!==null?null:"an array or an object",_t=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",nt=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",rt=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",xt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",st=e=>typeof e=="string"||Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"a string or an array of strings",it=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array",kt=e=>typeof e=="string"||e instanceof URL?null:"a string or a URL";function i(e,n,r,o){let p=e[r];if(n[r+""]=!0,p===void 0)return;let w=o(p);if(w!==null)throw new Error(`${re(r)} must be ${w}`);return p}function te(e,n,r){for(let o in e)if(!(o in n))throw new Error(`Invalid option ${r}: ${re(o)}`)}function Et(e){let n=Object.create(null),r=i(e,n,"wasmURL",kt),o=i(e,n,"wasmModule",_t),p=i(e,n,"worker",Z);return te(e,n,"in initialize() call"),{wasmURL:r,wasmModule:o,worker:p}}function lt(e){let n;if(e!==void 0){n=Object.create(null);for(let r in e){let o=e[r];if(typeof o=="string"||o===!1)n[r]=o;else throw new Error(`Expected ${re(r)} in mangle cache to map to either a string or false`)}}return n}function Le(e,n,r,o,p){let w=i(n,r,"color",Z),h=i(n,r,"logLevel",T),k=i(n,r,"logLimit",$e);w!==void 0?e.push(`--color=${w}`):o&&e.push("--color=true"),e.push(`--log-level=${h||p}`),e.push(`--log-limit=${k||0}`)}function oe(e,n,r){if(typeof e!="string")throw new Error(`Expected value for ${n}${r!==void 0?" "+re(r):""} to be a string, got ${typeof e} instead`);return e}function at(e,n,r){let o=i(n,r,"legalComments",T),p=i(n,r,"sourceRoot",T),w=i(n,r,"sourcesContent",Z),h=i(n,r,"target",st),k=i(n,r,"format",T),u=i(n,r,"globalName",T),L=i(n,r,"mangleProps",Ne),M=i(n,r,"reserveProps",Ne),O=i(n,r,"mangleQuoted",Z),X=i(n,r,"minify",Z),F=i(n,r,"minifySyntax",Z),q=i(n,r,"minifyWhitespace",Z),J=i(n,r,"minifyIdentifiers",Z),P=i(n,r,"lineLimit",$e),ee=i(n,r,"drop",ae),$=i(n,r,"dropLabels",ae),E=i(n,r,"charset",T),g=i(n,r,"treeShaking",Z),f=i(n,r,"ignoreAnnotations",Z),s=i(n,r,"jsx",T),a=i(n,r,"jsxFactory",T),d=i(n,r,"jsxFragment",T),b=i(n,r,"jsxImportSource",T),_=i(n,r,"jsxDev",Z),c=i(n,r,"jsxSideEffects",Z),m=i(n,r,"define",de),t=i(n,r,"logOverride",de),l=i(n,r,"supported",de),y=i(n,r,"pure",ae),v=i(n,r,"keepNames",Z),S=i(n,r,"platform",T),U=i(n,r,"tsconfigRaw",xt),Q=i(n,r,"absPaths",ae);if(o&&e.push(`--legal-comments=${o}`),p!==void 0&&e.push(`--source-root=${p}`),w!==void 0&&e.push(`--sources-content=${w}`),h&&e.push(`--target=${je(Array.isArray(h)?h:[h],"target")}`),k&&e.push(`--format=${k}`),u&&e.push(`--global-name=${u}`),S&&e.push(`--platform=${S}`),U&&e.push(`--tsconfig-raw=${typeof U=="string"?U:JSON.stringify(U)}`),X&&e.push("--minify"),F&&e.push("--minify-syntax"),q&&e.push("--minify-whitespace"),J&&e.push("--minify-identifiers"),P&&e.push(`--line-limit=${P}`),E&&e.push(`--charset=${E}`),g!==void 0&&e.push(`--tree-shaking=${g}`),f&&e.push("--ignore-annotations"),ee)for(let x of ee)e.push(`--drop:${oe(x,"drop")}`);if($&&e.push(`--drop-labels=${je($,"drop label")}`),Q&&e.push(`--abs-paths=${je(Q,"abs paths")}`),L&&e.push(`--mangle-props=${Be(L)}`),M&&e.push(`--reserve-props=${Be(M)}`),O!==void 0&&e.push(`--mangle-quoted=${O}`),s&&e.push(`--jsx=${s}`),a&&e.push(`--jsx-factory=${a}`),d&&e.push(`--jsx-fragment=${d}`),b&&e.push(`--jsx-import-source=${b}`),_&&e.push("--jsx-dev"),c&&e.push("--jsx-side-effects"),m)for(let x in m){if(x.indexOf("=")>=0)throw new Error(`Invalid define: ${x}`);e.push(`--define:${x}=${oe(m[x],"define",x)}`)}if(t)for(let x in t){if(x.indexOf("=")>=0)throw new Error(`Invalid log override: ${x}`);e.push(`--log-override:${x}=${oe(t[x],"log override",x)}`)}if(l)for(let x in l){if(x.indexOf("=")>=0)throw new Error(`Invalid supported: ${x}`);const Y=l[x];if(typeof Y!="boolean")throw new Error(`Expected value for supported ${re(x)} to be a boolean, got ${typeof Y} instead`);e.push(`--supported:${x}=${Y}`)}if(y)for(let x of y)e.push(`--pure:${oe(x,"pure")}`);v&&e.push("--keep-names")}function $t(e,n,r,o,p){var w;let h=[],k=[],u=Object.create(null),L=null,M=null;Le(h,n,u,r,o),at(h,n,u);let O=i(n,u,"sourcemap",rt),X=i(n,u,"bundle",Z),F=i(n,u,"splitting",Z),q=i(n,u,"preserveSymlinks",Z),J=i(n,u,"metafile",Z),P=i(n,u,"outfile",T),ee=i(n,u,"outdir",T),$=i(n,u,"outbase",T),E=i(n,u,"tsconfig",T),g=i(n,u,"resolveExtensions",ae),f=i(n,u,"nodePaths",ae),s=i(n,u,"mainFields",ae),a=i(n,u,"conditions",ae),d=i(n,u,"external",ae),b=i(n,u,"packages",T),_=i(n,u,"alias",de),c=i(n,u,"loader",de),m=i(n,u,"outExtension",de),t=i(n,u,"publicPath",T),l=i(n,u,"entryNames",T),y=i(n,u,"chunkNames",T),v=i(n,u,"assetNames",T),S=i(n,u,"inject",ae),U=i(n,u,"banner",de),Q=i(n,u,"footer",de),x=i(n,u,"entryPoints",bt),Y=i(n,u,"absWorkingDir",T),G=i(n,u,"stdin",de),B=(w=i(n,u,"write",Z))!=null?w:p,ce=i(n,u,"allowOverwrite",Z),ne=i(n,u,"mangleCache",de);if(u.plugins=!0,te(n,u,`in ${e}() call`),O&&h.push(`--sourcemap${O===!0?"":`=${O}`}`),X&&h.push("--bundle"),ce&&h.push("--allow-overwrite"),F&&h.push("--splitting"),q&&h.push("--preserve-symlinks"),J&&h.push("--metafile"),P&&h.push(`--outfile=${P}`),ee&&h.push(`--outdir=${ee}`),$&&h.push(`--outbase=${$}`),E&&h.push(`--tsconfig=${E}`),b&&h.push(`--packages=${b}`),g&&h.push(`--resolve-extensions=${je(g,"resolve extension")}`),t&&h.push(`--public-path=${t}`),l&&h.push(`--entry-names=${l}`),y&&h.push(`--chunk-names=${y}`),v&&h.push(`--asset-names=${v}`),s&&h.push(`--main-fields=${je(s,"main field")}`),a&&h.push(`--conditions=${je(a,"condition")}`),d)for(let j of d)h.push(`--external:${oe(j,"external")}`);if(_)for(let j in _){if(j.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${j}`);h.push(`--alias:${j}=${oe(_[j],"alias",j)}`)}if(U)for(let j in U){if(j.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${j}`);h.push(`--banner:${j}=${oe(U[j],"banner",j)}`)}if(Q)for(let j in Q){if(j.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${j}`);h.push(`--footer:${j}=${oe(Q[j],"footer",j)}`)}if(S)for(let j of S)h.push(`--inject:${oe(j,"inject")}`);if(c)for(let j in c){if(j.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${j}`);h.push(`--loader:${j}=${oe(c[j],"loader",j)}`)}if(m)for(let j in m){if(j.indexOf("=")>=0)throw new Error(`Invalid out extension: ${j}`);h.push(`--out-extension:${j}=${oe(m[j],"out extension",j)}`)}if(x)if(Array.isArray(x))for(let j=0,ve=x.length;j<ve;j++){let he=x[j];if(typeof he=="object"&&he!==null){let pe=Object.create(null),be=i(he,pe,"in",T),me=i(he,pe,"out",T);if(te(he,pe,"in entry point at index "+j),be===void 0)throw new Error('Missing property "in" for entry point at index '+j);if(me===void 0)throw new Error('Missing property "out" for entry point at index '+j);k.push([me,be])}else k.push(["",oe(he,"entry point at index "+j)])}else for(let j in x)k.push([j,oe(x[j],"entry point",j)]);if(G){let j=Object.create(null),ve=i(G,j,"contents",it),he=i(G,j,"resolveDir",T),pe=i(G,j,"sourcefile",T),be=i(G,j,"loader",T);te(G,j,'in "stdin" object'),pe&&h.push(`--sourcefile=${pe}`),be&&h.push(`--loader=${be}`),he&&(M=he),typeof ve=="string"?L=le(ve):ve instanceof Uint8Array&&(L=ve)}let ye=[];if(f)for(let j of f)j+="",ye.push(j);return{entries:k,flags:h,write:B,stdinContents:L,stdinResolveDir:M,absWorkingDir:Y,nodePaths:ye,mangleCache:lt(ne)}}function St(e,n,r,o){let p=[],w=Object.create(null);Le(p,n,w,r,o),at(p,n,w);let h=i(n,w,"sourcemap",rt),k=i(n,w,"sourcefile",T),u=i(n,w,"loader",T),L=i(n,w,"banner",T),M=i(n,w,"footer",T),O=i(n,w,"mangleCache",de);return te(n,w,`in ${e}() call`),h&&p.push(`--sourcemap=${h===!0?"external":h}`),k&&p.push(`--sourcefile=${k}`),u&&p.push(`--loader=${u}`),L&&p.push(`--banner=${L}`),M&&p.push(`--footer=${M}`),{flags:p,mangleCache:lt(O)}}function Pt(e){const n={},r={didClose:!1,reason:""};let o={},p=0,w=0,h=new Uint8Array(16*1024),k=0,u=E=>{let g=k+E.length;if(g>h.length){let s=new Uint8Array(g*2);s.set(h),h=s}h.set(E,k),k+=E.length;let f=0;for(;f+4<=k;){let s=Qe(h,f);if(f+4+s>k)break;f+=4,q(h.subarray(f,f+s)),f+=s}f>0&&(h.copyWithin(0,f,k),k-=f)},L=E=>{r.didClose=!0,E&&(r.reason=": "+(E.message||E));const g="The service was stopped"+r.reason;for(let f in o)o[f](g,null);o={}},M=(E,g,f)=>{if(r.didClose)return f("The service is no longer running"+r.reason,null);let s=p++;o[s]=(a,d)=>{try{f(a,d)}finally{E&&E.unref()}},E&&E.ref(),e.writeToStdin(H({id:s,isRequest:!0,value:g}))},O=(E,g)=>{if(r.didClose)throw new Error("The service is no longer running"+r.reason);e.writeToStdin(H({id:E,isRequest:!1,value:g}))},X=(E,g)=>ie(null,null,function*(){try{if(g.command==="ping"){O(E,{});return}if(typeof g.key=="number"){const f=n[g.key];if(!f)return;const s=f[g.command];if(s){yield s(E,g);return}}throw new Error("Invalid command: "+g.command)}catch(f){const s=[Se(f,e,null,void 0,"")];try{O(E,{errors:s})}catch{}}}),F=!0,q=E=>{if(F){F=!1;let f=String.fromCharCode(...E);if(f!=="0.25.12")throw new Error(`Cannot start service: Host version "0.25.12" does not match binary version ${re(f)}`);return}let g=K(E);if(g.isRequest)X(g.id,g.value);else{let f=o[g.id];delete o[g.id],g.value.error?f(g.value.error,{}):f(null,g.value)}};return{readFromStdout:u,afterClose:L,service:{buildOrContext:({callName:E,refs:g,options:f,isTTY:s,defaultWD:a,callback:d})=>{let b=0;const _=w++,c={},m={ref(){++b===1&&g&&g.ref()},unref(){--b===0&&(delete n[_],g&&g.unref())}};n[_]=c,m.ref(),Tt(E,_,M,O,m,e,c,f,s,a,(t,l)=>{try{d(t,l)}finally{m.unref()}})},transform:({callName:E,refs:g,input:f,options:s,isTTY:a,fs:d,callback:b})=>{const _=ot();let c=m=>{try{if(typeof f!="string"&&!(f instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:t,mangleCache:l}=St(E,s,a,et),y={command:"transform",flags:t,inputFS:m!==null,input:m!==null?le(m):typeof f=="string"?le(f):f};l&&(y.mangleCache=l),M(g,y,(v,S)=>{if(v)return b(new Error(v),null);let U=Oe(S.errors,_),Q=Oe(S.warnings,_),x=1,Y=()=>{if(--x===0){let G={warnings:Q,code:S.code,map:S.map,mangleCache:void 0,legalComments:void 0};"legalComments"in S&&(G.legalComments=S?.legalComments),S.mangleCache&&(G.mangleCache=S?.mangleCache),b(null,G)}};if(U.length>0)return b(De("Transform failed",U,Q),null);S.codeFS&&(x++,d.readFile(S.code,(G,B)=>{G!==null?b(G,null):(S.code=B,Y())})),S.mapFS&&(x++,d.readFile(S.map,(G,B)=>{G!==null?b(G,null):(S.map=B,Y())})),Y()})}catch(t){let l=[];try{Le(l,s,{},a,et)}catch{}const y=Se(t,e,_,void 0,"");M(g,{command:"error",flags:l,error:y},()=>{y.detail=_.load(y.detail),b(De("Transform failed",[y],[]),null)})}};if((typeof f=="string"||f instanceof Uint8Array)&&f.length>1024*1024){let m=c;c=()=>d.writeFile(f,m)}c(null)},formatMessages:({callName:E,refs:g,messages:f,options:s,callback:a})=>{if(!s)throw new Error(`Missing second argument in ${E}() call`);let d={},b=i(s,d,"kind",T),_=i(s,d,"color",Z),c=i(s,d,"terminalWidth",$e);if(te(s,d,`in ${E}() call`),b===void 0)throw new Error(`Missing "kind" in ${E}() call`);if(b!=="error"&&b!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${E}() call`);let m={command:"format-msgs",messages:we(f,"messages",null,"",c),isWarning:b==="warning"};_!==void 0&&(m.color=_),c!==void 0&&(m.terminalWidth=c),M(g,m,(t,l)=>{if(t)return a(new Error(t),null);a(null,l.messages)})},analyzeMetafile:({callName:E,refs:g,metafile:f,options:s,callback:a})=>{s===void 0&&(s={});let d={},b=i(s,d,"color",Z),_=i(s,d,"verbose",Z);te(s,d,`in ${E}() call`);let c={command:"analyze-metafile",metafile:f};b!==void 0&&(c.color=b),_!==void 0&&(c.verbose=_),M(g,c,(m,t)=>{if(m)return a(new Error(m),null);a(null,t.result)})}}}}function Tt(e,n,r,o,p,w,h,k,u,L,M){const O=ot(),X=e==="context",F=(P,ee)=>{const $=[];try{Le($,k,{},u,Ze)}catch{}const E=Se(P,w,O,void 0,ee);r(p,{command:"error",flags:$,error:E},()=>{E.detail=O.load(E.detail),M(De(X?"Context failed":"Build failed",[E],[]),null)})};let q;if(typeof k=="object"){const P=k.plugins;if(P!==void 0){if(!Array.isArray(P))return F(new Error('"plugins" must be an array'),"");q=P}}if(q&&q.length>0){if(w.isSync)return F(new Error("Cannot use plugins in synchronous API calls"),"");jt(n,r,o,p,w,h,k,q,O).then(P=>{if(!P.ok)return F(P.error,P.pluginName);try{J(P.requestPlugins,P.runOnEndCallbacks,P.scheduleOnDisposeCallbacks)}catch(ee){F(ee,"")}},P=>F(P,""));return}try{J(null,(P,ee)=>ee([],[]),()=>{})}catch(P){F(P,"")}function J(P,ee,$){const E=w.hasFS,{entries:g,flags:f,write:s,stdinContents:a,stdinResolveDir:d,absWorkingDir:b,nodePaths:_,mangleCache:c}=$t(e,k,u,Ze,E);if(s&&!w.hasFS)throw new Error('The "write" option is unavailable in this environment');const m={command:"build",key:n,entries:g,flags:f,write:s,stdinContents:a,stdinResolveDir:d,absWorkingDir:b||L,nodePaths:_,context:X};P&&(m.plugins=P),c&&(m.mangleCache=c);const t=(v,S)=>{const U={errors:Oe(v.errors,O),warnings:Oe(v.warnings,O),outputFiles:void 0,metafile:void 0,mangleCache:void 0},Q=U.errors.slice(),x=U.warnings.slice();v.outputFiles&&(U.outputFiles=v.outputFiles.map(Ct)),v.metafile&&(U.metafile=JSON.parse(v.metafile)),v.mangleCache&&(U.mangleCache=v.mangleCache),v.writeToStdout!==void 0&&console.log(xe(v.writeToStdout).replace(/\n$/,"")),ee(U,(Y,G)=>{if(Q.length>0||Y.length>0){const B=De("Build failed",Q.concat(Y),x.concat(G));return S(B,null,Y,G)}S(null,U,Y,G)})};let l,y;X&&(h["on-end"]=(v,S)=>new Promise(U=>{t(S,(Q,x,Y,G)=>{const B={errors:Y,warnings:G};y&&y(Q,x),l=void 0,y=void 0,o(v,B),U()})})),r(p,m,(v,S)=>{if(v)return M(new Error(v),null);if(!X)return t(S,(x,Y)=>($(),M(x,Y)));if(S.errors.length>0)return M(De("Context failed",S.errors,S.warnings),null);let U=!1;const Q={rebuild:()=>(l||(l=new Promise((x,Y)=>{let G;y=(ce,ne)=>{G||(G=()=>ce?Y(ce):x(ne))};const B=()=>{r(p,{command:"rebuild",key:n},(ne,ye)=>{ne?Y(new Error(ne)):G?G():B()})};B()})),l),watch:(x={})=>new Promise((Y,G)=>{if(!w.hasFS)throw new Error('Cannot use the "watch" API in this environment');const B={},ce=i(x,B,"delay",$e);te(x,B,"in watch() call");const ne={command:"watch",key:n};ce&&(ne.delay=ce),r(p,ne,ye=>{ye?G(new Error(ye)):Y(void 0)})}),serve:(x={})=>new Promise((Y,G)=>{if(!w.hasFS)throw new Error('Cannot use the "serve" API in this environment');const B={},ce=i(x,B,"port",vt),ne=i(x,B,"host",T),ye=i(x,B,"servedir",T),j=i(x,B,"keyfile",T),ve=i(x,B,"certfile",T),he=i(x,B,"fallback",T),pe=i(x,B,"cors",de),be=i(x,B,"onRequest",tt);te(x,B,"in serve() call");const me={command:"serve",key:n,onRequest:!!be};if(ce!==void 0&&(me.port=ce),ne!==void 0&&(me.host=ne),ye!==void 0&&(me.servedir=ye),j!==void 0&&(me.keyfile=j),ve!==void 0&&(me.certfile=ve),he!==void 0&&(me.fallback=he),pe){const Ae={},Ce=i(pe,Ae,"origin",st);te(pe,Ae,'on "cors" object'),Array.isArray(Ce)?me.corsOrigin=Ce:Ce!==void 0&&(me.corsOrigin=[Ce])}r(p,me,(Ae,Ce)=>{if(Ae)return G(new Error(Ae));be&&(h["serve-request"]=(qt,Jt)=>{be(Jt.args),o(qt,{})}),Y(Ce)})}),cancel:()=>new Promise(x=>{if(U)return x();r(p,{command:"cancel",key:n},()=>{x()})}),dispose:()=>new Promise(x=>{if(U)return x();U=!0,r(p,{command:"dispose",key:n},()=>{x(),$(),p.unref()})})};p.ref(),M(null,Q)})}}var jt=(e,n,r,o,p,w,h,k,u)=>ie(null,null,function*(){let L=[],M=[],O={},X={},F=[],q=0,J=0,P=[],ee=!1;k=[...k];for(let g of k){let f={};if(typeof g!="object")throw new Error(`Plugin at index ${J} must be an object`);const s=i(g,f,"name",T);if(typeof s!="string"||s==="")throw new Error(`Plugin at index ${J} is missing a name`);try{let a=i(g,f,"setup",tt);if(typeof a!="function")throw new Error("Plugin is missing a setup function");te(g,f,`on plugin ${re(s)}`);let d={name:s,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};J++;let _=a({initialOptions:h,resolve:(c,m={})=>{if(!ee)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof c!="string")throw new Error("The path to resolve must be a string");let t=Object.create(null),l=i(m,t,"pluginName",T),y=i(m,t,"importer",T),v=i(m,t,"namespace",T),S=i(m,t,"resolveDir",T),U=i(m,t,"kind",T),Q=i(m,t,"pluginData",Ue),x=i(m,t,"with",de);return te(m,t,"in resolve() call"),new Promise((Y,G)=>{const B={command:"resolve",path:c,key:e,pluginName:s};if(l!=null&&(B.pluginName=l),y!=null&&(B.importer=y),v!=null&&(B.namespace=v),S!=null&&(B.resolveDir=S),U!=null)B.kind=U;else throw new Error('Must specify "kind" when calling "resolve"');Q!=null&&(B.pluginData=u.store(Q)),x!=null&&(B.with=Ot(x,"with")),n(o,B,(ce,ne)=>{ce!==null?G(new Error(ce)):Y({errors:Oe(ne.errors,u),warnings:Oe(ne.warnings,u),path:ne.path,external:ne.external,sideEffects:ne.sideEffects,namespace:ne.namespace,suffix:ne.suffix,pluginData:u.load(ne.pluginData)})})})},onStart(c){let m='This error came from the "onStart" callback registered here:',t=Me(new Error(m),p,"onStart");L.push({name:s,callback:c,note:t}),d.onStart=!0},onEnd(c){let m='This error came from the "onEnd" callback registered here:',t=Me(new Error(m),p,"onEnd");M.push({name:s,callback:c,note:t}),d.onEnd=!0},onResolve(c,m){let t='This error came from the "onResolve" callback registered here:',l=Me(new Error(t),p,"onResolve"),y={},v=i(c,y,"filter",Ne),S=i(c,y,"namespace",T);if(te(c,y,`in onResolve() call for plugin ${re(s)}`),v==null)throw new Error("onResolve() call is missing a filter");let U=q++;O[U]={name:s,callback:m,note:l},d.onResolve.push({id:U,filter:Be(v),namespace:S||""})},onLoad(c,m){let t='This error came from the "onLoad" callback registered here:',l=Me(new Error(t),p,"onLoad"),y={},v=i(c,y,"filter",Ne),S=i(c,y,"namespace",T);if(te(c,y,`in onLoad() call for plugin ${re(s)}`),v==null)throw new Error("onLoad() call is missing a filter");let U=q++;X[U]={name:s,callback:m,note:l},d.onLoad.push({id:U,filter:Be(v),namespace:S||""})},onDispose(c){F.push(c)},esbuild:p.esbuild});_&&(yield _),P.push(d)}catch(a){return{ok:!1,error:a,pluginName:s}}}w["on-start"]=(g,f)=>ie(null,null,function*(){u.clear();let s={errors:[],warnings:[]};yield Promise.all(L.map(a=>ie(null,[a],function*({name:d,callback:b,note:_}){try{let c=yield b();if(c!=null){if(typeof c!="object")throw new Error(`Expected onStart() callback in plugin ${re(d)} to return an object`);let m={},t=i(c,m,"errors",ge),l=i(c,m,"warnings",ge);te(c,m,`from onStart() callback in plugin ${re(d)}`),t!=null&&s.errors.push(...we(t,"errors",u,d,void 0)),l!=null&&s.warnings.push(...we(l,"warnings",u,d,void 0))}}catch(c){s.errors.push(Se(c,p,u,_&&_(),d))}}))),r(g,s)}),w["on-resolve"]=(g,f)=>ie(null,null,function*(){let s={},a="",d,b;for(let _ of f.ids)try{({name:a,callback:d,note:b}=O[_]);let c=yield d({path:f.path,importer:f.importer,namespace:f.namespace,resolveDir:f.resolveDir,kind:f.kind,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onResolve() callback in plugin ${re(a)} to return an object`);let m={},t=i(c,m,"pluginName",T),l=i(c,m,"path",T),y=i(c,m,"namespace",T),v=i(c,m,"suffix",T),S=i(c,m,"external",Z),U=i(c,m,"sideEffects",Z),Q=i(c,m,"pluginData",Ue),x=i(c,m,"errors",ge),Y=i(c,m,"warnings",ge),G=i(c,m,"watchFiles",ae),B=i(c,m,"watchDirs",ae);te(c,m,`from onResolve() callback in plugin ${re(a)}`),s.id=_,t!=null&&(s.pluginName=t),l!=null&&(s.path=l),y!=null&&(s.namespace=y),v!=null&&(s.suffix=v),S!=null&&(s.external=S),U!=null&&(s.sideEffects=U),Q!=null&&(s.pluginData=u.store(Q)),x!=null&&(s.errors=we(x,"errors",u,a,void 0)),Y!=null&&(s.warnings=we(Y,"warnings",u,a,void 0)),G!=null&&(s.watchFiles=Ve(G,"watchFiles")),B!=null&&(s.watchDirs=Ve(B,"watchDirs"));break}}catch(c){s={id:_,errors:[Se(c,p,u,b&&b(),a)]};break}r(g,s)}),w["on-load"]=(g,f)=>ie(null,null,function*(){let s={},a="",d,b;for(let _ of f.ids)try{({name:a,callback:d,note:b}=X[_]);let c=yield d({path:f.path,namespace:f.namespace,suffix:f.suffix,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onLoad() callback in plugin ${re(a)} to return an object`);let m={},t=i(c,m,"pluginName",T),l=i(c,m,"contents",it),y=i(c,m,"resolveDir",T),v=i(c,m,"pluginData",Ue),S=i(c,m,"loader",T),U=i(c,m,"errors",ge),Q=i(c,m,"warnings",ge),x=i(c,m,"watchFiles",ae),Y=i(c,m,"watchDirs",ae);te(c,m,`from onLoad() callback in plugin ${re(a)}`),s.id=_,t!=null&&(s.pluginName=t),l instanceof Uint8Array?s.contents=l:l!=null&&(s.contents=le(l)),y!=null&&(s.resolveDir=y),v!=null&&(s.pluginData=u.store(v)),S!=null&&(s.loader=S),U!=null&&(s.errors=we(U,"errors",u,a,void 0)),Q!=null&&(s.warnings=we(Q,"warnings",u,a,void 0)),x!=null&&(s.watchFiles=Ve(x,"watchFiles")),Y!=null&&(s.watchDirs=Ve(Y,"watchDirs"));break}}catch(c){s={id:_,errors:[Se(c,p,u,b&&b(),a)]};break}r(g,s)});let $=(g,f)=>f([],[]);M.length>0&&($=(g,f)=>{ie(null,null,function*(){const s=[],a=[];for(const{name:d,callback:b,note:_}of M){let c,m;try{const t=yield b(g);if(t!=null){if(typeof t!="object")throw new Error(`Expected onEnd() callback in plugin ${re(d)} to return an object`);let l={},y=i(t,l,"errors",ge),v=i(t,l,"warnings",ge);te(t,l,`from onEnd() callback in plugin ${re(d)}`),y!=null&&(c=we(y,"errors",u,d,void 0)),v!=null&&(m=we(v,"warnings",u,d,void 0))}}catch(t){c=[Se(t,p,u,_&&_(),d)]}if(c){s.push(...c);try{g.errors.push(...c)}catch{}}if(m){a.push(...m);try{g.warnings.push(...m)}catch{}}}f(s,a)})});let E=()=>{for(const g of F)setTimeout(()=>g(),0)};return ee=!0,{ok:!0,requestPlugins:P,runOnEndCallbacks:$,scheduleOnDisposeCallbacks:E}});function ot(){const e=new Map;let n=0;return{clear(){e.clear()},load(r){return e.get(r)},store(r){if(r===void 0)return-1;const o=n++;return e.set(o,r),o}}}function Me(e,n,r){let o,p=!1;return()=>{if(p)return o;p=!0;try{let w=(e.stack+"").split(`
`);w.splice(1,1);let h=ct(n,w,r);if(h)return o={text:e.message,location:h},o}catch{}}}function Se(e,n,r,o,p){let w="Internal error",h=null;try{w=(e&&e.message||e)+""}catch{}try{h=ct(n,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:p,text:w,location:h,notes:o?[o]:[],detail:r?r.store(e):-1}}function ct(e,n,r){let o="    at ";if(e.readFileSync&&!n[0].startsWith(o)&&n[1].startsWith(o))for(let p=1;p<n.length;p++){let w=n[p];if(w.startsWith(o))for(w=w.slice(o.length);;){let h=/^(?:new |async )?\S+ \((.*)\)$/.exec(w);if(h){w=h[1];continue}if(h=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(w),h){w=h[1];continue}if(h=/^(\S+):(\d+):(\d+)$/.exec(w),h){let k;try{k=e.readFileSync(h[1],"utf8")}catch{break}let u=k.split(/\r\n|\r|\n|\u2028|\u2029/)[+h[2]-1]||"",L=+h[3]-1,M=u.slice(L,L+r.length)===r?r.length:0;return{file:h[1],namespace:"file",line:+h[2],column:le(u.slice(0,L)).length,length:le(u.slice(L,L+M)).length,lineText:u+`
`+n.slice(1).join(`
`),suggestion:""}}break}}return null}function De(e,n,r){let o=5;e+=n.length<1?"":` with ${n.length} error${n.length<2?"":"s"}:`+n.slice(0,o+1).map((w,h)=>{if(h===o)return`
...`;if(!w.location)return`
error: ${w.text}`;let{file:k,line:u,column:L}=w.location,M=w.pluginName?`[plugin: ${w.pluginName}] `:"";return`
${k}:${u}:${L}: ERROR: ${M}${w.text}`}).join("");let p=new Error(e);for(const[w,h]of[["errors",n],["warnings",r]])Object.defineProperty(p,w,{configurable:!0,enumerable:!0,get:()=>h,set:k=>Object.defineProperty(p,w,{configurable:!0,enumerable:!0,value:k})});return p}function Oe(e,n){for(const r of e)r.detail=n.load(r.detail);return e}function ut(e,n,r){if(e==null)return null;let o={},p=i(e,o,"file",T),w=i(e,o,"namespace",T),h=i(e,o,"line",$e),k=i(e,o,"column",$e),u=i(e,o,"length",$e),L=i(e,o,"lineText",T),M=i(e,o,"suggestion",T);if(te(e,o,n),L){const O=L.slice(0,(k&&k>0?k:0)+(u&&u>0?u:0)+(r&&r>0?r:80));!/[\x7F-\uFFFF]/.test(O)&&!/\n/.test(L)&&(L=O)}return{file:p||"",namespace:w||"",line:h||0,column:k||0,length:u||0,lineText:L||"",suggestion:M||""}}function we(e,n,r,o,p){let w=[],h=0;for(const k of e){let u={},L=i(k,u,"id",T),M=i(k,u,"pluginName",T),O=i(k,u,"text",T),X=i(k,u,"location",nt),F=i(k,u,"notes",ge),q=i(k,u,"detail",Ue),J=`in element ${h} of "${n}"`;te(k,u,J);let P=[];if(F)for(const ee of F){let $={},E=i(ee,$,"text",T),g=i(ee,$,"location",nt);te(ee,$,J),P.push({text:E||"",location:ut(g,J,p)})}w.push({id:L||"",pluginName:M||o,text:O||"",location:ut(X,J,p),notes:P,detail:r?r.store(q):-1}),h++}return w}function Ve(e,n){const r=[];for(const o of e){if(typeof o!="string")throw new Error(`${re(n)} must be an array of strings`);r.push(o)}return r}function Ot(e,n){const r=Object.create(null);for(const o in e){const p=e[o];if(typeof p!="string")throw new Error(`key ${re(o)} in object ${re(n)} must be a string`);r[o]=p}return r}function Ct({path:e,contents:n,hash:r}){let o=null;return{path:e,contents:n,hash:r,get text(){const p=this.contents;return(o===null||p!==n)&&(n=p,o=xe(p)),o}}}function Be(e){let n=e.source;return e.flags&&(n=`(?${e.flags})${n}`),n}var Dt="0.25.12",Rt=e=>Re().build(e),At=e=>Re().context(e),It=(e,n)=>Re().transform(e,n),Ft=(e,n)=>Re().formatMessages(e,n),Ut=(e,n)=>Re().analyzeMetafile(e,n),Nt=()=>{throw new Error('The "buildSync" API only works in node')},Lt=()=>{throw new Error('The "transformSync" API only works in node')},Mt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Vt=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Bt=()=>(We&&We(),Promise.resolve()),Pe,We,ze,Re=()=>{if(ze)return ze;throw Pe?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Wt=e=>{e=Et(e||{});let n=e.wasmURL,r=e.wasmModule,o=e.worker!==!1;if(!n&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Pe)throw new Error('Cannot call "initialize" more than once');return Pe=zt(n||"",r,o),Pe.catch(()=>{Pe=void 0}),Pe},zt=(e,n,r)=>ie(null,null,function*(){let o,p;const w=new Promise(O=>p=O);if(r){let O=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const setInt32 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              _gotest: {
                add: (a, b) => a + b
              },
              gojs: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8)
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin) resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.25.12"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok) throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});o=new Worker(URL.createObjectURL(O))}else{let O=(F=>{var q=($,E,g)=>new Promise((f,s)=>{var a=_=>{try{b(g.next(_))}catch(c){s(c)}},d=_=>{try{b(g.throw(_))}catch(c){s(c)}},b=_=>_.done?f(_.value):Promise.resolve(_.value).then(a,d);b((g=g.apply($,E)).next())});let J,P={};for(let $=self;$;$=Object.getPrototypeOf($))for(let E of Object.getOwnPropertyNames($))E in P||Object.defineProperty(P,E,{get:()=>self[E]});(()=>{const $=()=>{const f=new Error("not implemented");return f.code="ENOSYS",f};if(!P.fs){let f="";P.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(s,a){f+=g.decode(a);const d=f.lastIndexOf(`
`);return d!=-1&&(console.log(f.substring(0,d)),f=f.substring(d+1)),a.length},write(s,a,d,b,_,c){if(d!==0||b!==a.length||_!==null){c($());return}const m=this.writeSync(s,a);c(null,m)},chmod(s,a,d){d($())},chown(s,a,d,b){b($())},close(s,a){a($())},fchmod(s,a,d){d($())},fchown(s,a,d,b){b($())},fstat(s,a){a($())},fsync(s,a){a(null)},ftruncate(s,a,d){d($())},lchown(s,a,d,b){b($())},link(s,a,d){d($())},lstat(s,a){a($())},mkdir(s,a,d){d($())},open(s,a,d,b){b($())},read(s,a,d,b,_,c){c($())},readdir(s,a){a($())},readlink(s,a){a($())},rename(s,a,d){d($())},rmdir(s,a){a($())},stat(s,a){a($())},symlink(s,a,d){d($())},truncate(s,a,d){d($())},unlink(s,a){a($())},utimes(s,a,d,b){b($())}}}if(P.process||(P.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw $()},pid:-1,ppid:-1,umask(){throw $()},cwd(){throw $()},chdir(){throw $()}}),!P.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!P.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!P.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!P.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const E=new TextEncoder("utf-8"),g=new TextDecoder("utf-8");P.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const f=(t,l)=>{this.mem.setUint32(t+0,l,!0),this.mem.setUint32(t+4,Math.floor(l/4294967296),!0)},s=t=>{const l=this.mem.getUint32(t+0,!0),y=this.mem.getInt32(t+4,!0);return l+y*4294967296},a=t=>{const l=this.mem.getFloat64(t,!0);if(l===0)return;if(!isNaN(l))return l;const y=this.mem.getUint32(t,!0);return this._values[y]},d=(t,l)=>{if(typeof l=="number"&&l!==0){if(isNaN(l)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,l,!0);return}if(l===void 0){this.mem.setFloat64(t,0,!0);return}let v=this._ids.get(l);v===void 0&&(v=this._idPool.pop(),v===void 0&&(v=this._values.length),this._values[v]=l,this._goRefCounts[v]=0,this._ids.set(l,v)),this._goRefCounts[v]++;let S=0;switch(typeof l){case"object":l!==null&&(S=1);break;case"string":S=2;break;case"symbol":S=3;break;case"function":S=4;break}this.mem.setUint32(t+4,2146959360|S,!0),this.mem.setUint32(t,v,!0)},b=t=>{const l=s(t+0),y=s(t+8);return new Uint8Array(this._inst.exports.mem.buffer,l,y)},_=t=>{const l=s(t+0),y=s(t+8),v=new Array(y);for(let S=0;S<y;S++)v[S]=a(l+S*8);return v},c=t=>{const l=s(t+0),y=s(t+8);return g.decode(new DataView(this._inst.exports.mem.buffer,l,y))},m=Date.now()-performance.now();this.importObject={_gotest:{add:(t,l)=>t+l},gojs:{"runtime.wasmExit":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(l)},"runtime.wasmWrite":t=>{t>>>=0;const l=s(t+8),y=s(t+16),v=this.mem.getInt32(t+24,!0);P.fs.writeSync(l,new Uint8Array(this._inst.exports.mem.buffer,y,v))},"runtime.resetMemoryDataView":t=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,f(t+8,(m+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;const l=new Date().getTime();f(t+8,l/1e3),this.mem.setInt32(t+16,l%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;const l=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(l,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(l);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(t+8))),this.mem.setInt32(t+16,l,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(l)),this._scheduledTimeouts.delete(l)},"runtime.getRandomData":t=>{t>>>=0,crypto.getRandomValues(b(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;const l=this.mem.getUint32(t+8,!0);if(this._goRefCounts[l]--,this._goRefCounts[l]===0){const y=this._values[l];this._values[l]=null,this._ids.delete(y),this._idPool.push(l)}},"syscall/js.stringVal":t=>{t>>>=0,d(t+24,c(t+8))},"syscall/js.valueGet":t=>{t>>>=0;const l=Reflect.get(a(t+8),c(t+16));t=this._inst.exports.getsp()>>>0,d(t+32,l)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(a(t+8),c(t+16),a(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(a(t+8),c(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,d(t+24,Reflect.get(a(t+8),s(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(a(t+8),s(t+16),a(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{const l=a(t+8),y=Reflect.get(l,c(t+16)),v=_(t+32),S=Reflect.apply(y,l,v);t=this._inst.exports.getsp()>>>0,d(t+56,S),this.mem.setUint8(t+64,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+56,l),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{const l=a(t+8),y=_(t+16),v=Reflect.apply(l,void 0,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{const l=a(t+8),y=_(t+16),v=Reflect.construct(l,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,f(t+16,parseInt(a(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;const l=E.encode(String(a(t+8)));d(t+16,l),f(t+24,l.length)},"syscall/js.valueLoadString":t=>{t>>>=0;const l=a(t+8);b(t+16).set(l)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,a(t+8)instanceof a(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;const l=b(t+8),y=a(t+32);if(!(y instanceof Uint8Array||y instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;const l=a(t+8),y=b(t+16);if(!(l instanceof Uint8Array||l instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}run(f){return q(this,null,function*(){if(!(f instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=f,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,P,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[P,5],[this,6]]),this._idPool=[],this.exited=!1;let s=4096;const a=t=>{const l=s,y=E.encode(t+"\0");return new Uint8Array(this.mem.buffer,s,y.length).set(y),s+=y.length,s%8!==0&&(s+=8-s%8),l},d=this.argv.length,b=[];this.argv.forEach(t=>{b.push(a(t))}),b.push(0),Object.keys(this.env).sort().forEach(t=>{b.push(a(`${t}=${this.env[t]}`))}),b.push(0);const c=s;if(b.forEach(t=>{this.mem.setUint32(s,t,!0),this.mem.setUint32(s+4,0,!0),s+=8}),s>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(d,c),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(f){const s=this;return function(){const a={id:f,this:this,args:arguments};return s._pendingEvent=a,s._resume(),a.result}}}})(),J=({data:$})=>{let E=new TextDecoder,g=P.fs,f="";g.writeSync=(_,c)=>{if(_===1)F(c);else if(_===2){f+=E.decode(c);let m=f.split(`
`);m.length>1&&console.log(m.slice(0,-1).join(`
`)),f=m[m.length-1]}else throw new Error("Bad write");return c.length};let s=[],a,d=0;J=({data:_})=>(_.length>0&&(s.push(_),a&&a()),b),g.read=(_,c,m,t,l,y)=>{if(_!==0||m!==0||t!==c.length||l!==null)throw new Error("Bad read");if(s.length===0){a=()=>g.read(_,c,m,t,l,y);return}let v=s[0],S=Math.max(0,Math.min(t,v.length-d));c.set(v.subarray(d,d+S),m),d+=S,d===v.length&&(s.shift(),d=0),y(null,S)};let b=new P.Go;return b.argv=["","--service=0.25.12"],ee($,b).then(_=>{F(null),b.run(_)},_=>{F(_)}),b};function ee($,E){return q(this,null,function*(){if($ instanceof WebAssembly.Module)return WebAssembly.instantiate($,E.importObject);const g=yield fetch($);if(!g.ok)throw new Error(`Failed to download ${JSON.stringify($)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(g.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(g,E.importObject)).instance;const f=yield g.arrayBuffer();return(yield WebAssembly.instantiate(f,E.importObject)).instance})}return $=>J($)})(F=>o.onmessage({data:F})),X;o={onmessage:null,postMessage:F=>setTimeout(()=>{try{X=O({data:F})}catch(q){p(q)}}),terminate(){if(X)for(let F of X._scheduledTimeouts.values())clearTimeout(F)}}}let h,k;const u=new Promise((O,X)=>{h=O,k=X});o.onmessage=({data:O})=>{o.onmessage=({data:X})=>L(X),O?k(O):h()},o.postMessage(n||new URL(e,location.href).toString());let{readFromStdout:L,service:M}=Pt({writeToStdin(O){o.postMessage(O)},isSync:!1,hasFS:!1,esbuild:z});yield u,We=()=>{o.terminate(),Pe=void 0,We=void 0,ze=void 0},ze={build:O=>new Promise((X,F)=>{w.then(F),M.buildOrContext({callName:"build",refs:null,options:O,isTTY:!1,defaultWD:"/",callback:(q,J)=>q?F(q):X(J)})}),context:O=>new Promise((X,F)=>{w.then(F),M.buildOrContext({callName:"context",refs:null,options:O,isTTY:!1,defaultWD:"/",callback:(q,J)=>q?F(q):X(J)})}),transform:(O,X)=>new Promise((F,q)=>{w.then(q),M.transform({callName:"transform",refs:null,input:O,options:X||{},isTTY:!1,fs:{readFile(J,P){P(new Error("Internal error"),null)},writeFile(J,P){P(null)}},callback:(J,P)=>J?q(J):F(P)})}),formatMessages:(O,X)=>new Promise((F,q)=>{w.then(q),M.formatMessages({callName:"formatMessages",refs:null,messages:O,options:X,callback:(J,P)=>J?q(J):F(P)})}),analyzeMetafile:(O,X)=>new Promise((F,q)=>{w.then(q),M.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof O=="string"?O:JSON.stringify(O),options:X,callback:(J,P)=>J?q(J):F(P)})})}}),Gt=z})(W)})(Je)),Je.exports}var Xe=tn();const nn=Yt(Xe),rn=en({__proto__:null,default:nn},[Xe]),sn="/assets/esbuild-BHljloGq.wasm";function ln(W){const R=W.lastIndexOf("/");return R>=0?W.slice(0,R):""}function Te(W,R){return W?`${W}/${R}`.replace(/\/+/g,"/"):R}function pt(W,R){if(W.startsWith("/"))return W.slice(1);const D=R.split("/").filter(I=>I),A=W.split("/").filter(I=>I);if(W.startsWith("./")||W.startsWith("../")||!W.startsWith("/")){const I=D.slice(0,-1);D.length=0,D.push(...I)}for(const I of A)I!=="."&&(I===".."?D.length>0&&D.pop():D.push(I));return D.join("/")}const fe="../../gs-lib";let an={name:"workspace",setup(W){W.onResolve({filter:/.*/},R=>{if(R.path.startsWith("http://")||R.path.startsWith("https://")||R.path.startsWith("data:"))return;let D=R.path;if(D.startsWith("/")&&(D=D.slice(1)),R.importer&&R.importer!==""){let A=R.importer;A.startsWith("virtual-workspace:")&&(A=A.slice(18));const V=R.path.startsWith("./")||R.path.startsWith("../"),I=D.includes("/"),C=A.startsWith("__build/");V?D=pt(R.path,A):!I&&!C&&(D=pt(D,A))}return{path:D,namespace:"virtual-workspace"}}),W.onLoad({filter:/.*/},async R=>{if(!/^(?!https?:\/\/).+/.test(R.path))return;const D=R.path,A=await He.getWorkspace();let V=await A.getResource(D);if(V||(await A.listChildren(!0),V=await A.getResource(D)),!V)throw new Error(`Module not found: ${D}`);const I=await V.getContents(),C=D.split(".").pop()?.toLowerCase();let N;return C==="ts"||C==="tsx"?N=C==="tsx"?"tsx":"ts":C==="js"||C==="jsx"?N=C==="jsx"?"jsx":"js":C==="json"?N="json":C==="css"&&(N="css"),{contents:I,loader:N}})}};class on{constructor(){this.initialized=!1,this.workspaceCache=null}async getWorkspace(){return this.workspaceCache||(this.workspaceCache=await He.getWorkspace()),this.workspaceCache}async init(){this.initialized||(await Xe.initialize({wasmURL:sn}),this.initialized=!0)}createBrowserFileCopier(R){const D=this.getWorkspace.bind(this),A={"dist/index.js":()=>ue(()=>import(`${fe}/dist/index.js?raw`),[]),"dist/gs-lib.css":()=>ue(()=>import(`${fe}/dist/gs-lib.css?raw`),[]),"public/pwa/staticwebapp.config.json":()=>ue(()=>import(`${fe}/public/pwa/staticwebapp.config.json?raw`),[]),"public/pwa/sw.js":()=>ue(()=>import(`${fe}/public/pwa/sw.js?raw`),[]),"public/pwa/manifest.json":()=>ue(()=>import(`${fe}/public/pwa/manifest.json?raw`),[]),"public/index.html":()=>ue(()=>import(`${fe}/public/index.html?raw`),[]),"public/pwa/assets/icons/24x24.png":()=>ue(()=>import(`${fe}/public/pwa/assets/icons/24x24.png?url`),[]),"public/pwa/assets/icons/48x48.png":()=>ue(()=>import(`${fe}/public/pwa/assets/icons/48x48.png?url`),[]),"public/pwa/assets/icons/192x192.png":()=>ue(()=>import(`${fe}/public/pwa/assets/icons/192x192.png?url`),[]),"public/pwa/assets/icons/512x512.png":()=>ue(()=>import(`${fe}/public/pwa/assets/icons/512x512.png?url`),[]),"public/pwa/assets/icons/icon_24.png":()=>ue(()=>import(`${fe}/public/pwa/assets/icons/icon_24.png?url`),[]),"public/pwa/assets/icons/icon_48.png":()=>ue(()=>import(`${fe}/public/pwa/assets/icons/icon_48.png?url`),[]),"public/pwa/assets/icons/icon_192.png":()=>ue(()=>import(`${fe}/public/pwa/assets/icons/icon_192.png?url`),[]),"public/pwa/assets/icons/icon_512.png":()=>ue(()=>import(`${fe}/public/pwa/assets/icons/icon_512.png?url`),[])},V=async(I,C,N,se)=>{const ie=A[I];if(!ie)throw new Error(`No import mapping for ${I}. Make sure gs-lib is built.`);let z;try{const le=await ie();if(N)z=le.default,se&&(z=await se(z));else{const xe=le.default,Ee=await fetch(xe);if(!Ee.ok)throw new Error(`Failed to fetch: ${Ee.statusText}`);z=await Ee.blob()}}catch(le){throw new Error(`Failed to copy ${I}: ${le}. Make sure gs-lib is built (run: npm run build --workspace=@kispace-io/gs-lib)`)}const H=await D(),K=Te(R,C);await(await H.getResource(K,{create:!0})).saveContents(z),z=void 0};return{async copyTextFile(I,C,N){await V(I,C,!0,N)},async copyBinaryFile(I,C){await V(I,C,!1)}}}async build(R,D=void 0,A,V){const I=(z,H)=>{A&&(A.currentStep=z,A.message=H)};I(0,"Initializing build system..."),await this.init();const C=await this.getWorkspace(),N={async readFile(z){const H=Te(V,z),K=await C.getResource(H);if(!K)throw new Error(`File not found: ${H}`);return await K.getContents()},async writeFile(z,H){const K=Te(V,z);await(await C.getResource(K,{create:!0})).saveContents(H)},async ensureDir(z){const H=Te(V,z.endsWith("/")?z:z+"/");await C.getResource(H,{create:!0})},async exists(z){const H=Te(V,z);return await C.getResource(H)!==null},async deleteDir(z){const H=Te(V,z),K=await C.getResource(H);K instanceof yt&&await K.delete()}},se=this.createBrowserFileCopier(V);await Kt(R,N,an,rn,{gsLibCopier:se,cleanAfterBuild:D,copyAssets:async(z,H)=>{const K=Te(V,"assets"),_e=await C.getResource(K);_e&&await _e.copyTo(`${H}/assets`)}},I),I(0,"Finalizing build..."),C.touch(),A&&(A.message="Build completed successfully!")}async buildMapFile(R,D){const A=JSON.parse(await R.getContents()),V=R.getWorkspacePath(),I=ln(V),C=await Ht([D||".env"],I||void 0);gt.runAsync("Building map",async N=>{await Ke.build({title:R.getName(),gsMap:A,env:C,version:C.VERSION||"0.0.0"},void 0,N,I||void 0)}).then(()=>{wt("🚀 Map files copied to 'dist' folder in your workspace!")}).catch(N=>{ke(`💥 Map could not be built: ${N}`)})}}const Ke=new on;Qt.put("buildService",Ke);const Ie=".geospace",cn=".env",un=["node_modules",".git","dist","build",".next",".cache",".vscode",".idea","coverage",".nyc_output",".parcel-cache",".turbo",".yarn",".pnp",".svelte-kit",".nuxt",".output","target","out",".temp",".tmp"];function fn(W){const R=W.toLowerCase();return un.some(D=>R===D.toLowerCase())}async function Ye(W,R,D,A={value:0}){const V=[],I=await W.listChildren(!0);for(const C of I){A.value++;const N=C.getWorkspacePath();if(D&&(D.message=`Scanning: ${N}`,D.currentStep=A.value),C instanceof Fe&&C.getName().toLowerCase().endsWith(R))V.push(N);else if(C instanceof yt&&!fn(C.getName())){const se=await Ye(C,R,D,A);V.push(...se)}}return V.sort()}function dn(){let W=document.getElementById("global-dialog-container");return W||(W=document.createElement("div"),W.id="global-dialog-container",document.body.appendChild(W)),W}async function hn(W,R,D,A){return new Promise(V=>{const I=dn();let C=D||"",N=A||"";const se=()=>{ft(Ge``,I)},ie=()=>{se(),V({geospaceFile:C||null,envFile:N||null})},z=()=>{se(),V({geospaceFile:null,envFile:null})},H=Ge`
            <wa-dialog
                label="Select Files"
                open
                @wa-request-close=${z}
            >
                <style>
                    .dialog-content {
                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;
                        padding: 1rem;
                        min-width: 400px;
                    }

                    .dialog-field {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                    }

                    .dialog-field label {
                        font-weight: 500;
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
                    <div class="dialog-field">
                        <label>Geospace File:</label>
                        <wa-select
                            value="${C}"
                            @change=${K=>{C=K.target.value}}
                        >
                            <wa-option value="">None</wa-option>
                            ${W.map(K=>Ge`
                                        <wa-option value="${K}"
                                            >${K}</wa-option
                                        >
                                    `)}
                        </wa-select>
                    </div>

                    <div class="dialog-field">
                        <label>Environment File:</label>
                        <wa-select
                            value="${N}"
                            @change=${K=>{N=K.target.value}}
                        >
                            <wa-option value="">None (use .env)</wa-option>
                            ${R.map(K=>Ge`
                                        <wa-option value="${K}"
                                            >${K}</wa-option
                                        >
                                    `)}
                        </wa-select>
                    </div>

                    <div class="dialog-actions">
                        <wa-button variant="default" @click=${z}>
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click=${ie}>
                            OK
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `;ft(H,I)})}const bn=({commandRegistry:W})=>{W.registerAll({command:{id:"build_map",name:"Build map",description:"Builds a publishable map from a .geospace file",parameters:[{name:"file",description:"Path to the .geospace file relative to workspace root. If not provided, uses the active map editor or selected file.",required:!1},{name:"env",description:"Path to the environment file relative to workspace root (e.g., 'dev.env', 'prod.env'). Defaults to '.env' if not specified.",required:!1},{name:"ask",description:"If true, prompts for missing files (map file or env file) when not provided.",required:!1}]},handler:{execute:async R=>{let D=R.params?.env,A=R.params?.file;const V=R.params?.ask===!0||R.params?.ask==="true",I=await He.getWorkspace();if(!I){ke("No workspace available");return}let C;if(A){const N=await I.getResource(A);if(!N||!(N instanceof Fe)){ke(`File not found: ${A}`);return}if(!N.getName().toLowerCase().endsWith(Ie)){ke(`File is not a .geospace file: ${A}`);return}C=N}else{const N=dt.get();if(N&&N.input)N.isDirty()&&(await N.save(),wt("Map saved automatically to run build.")),C=N.input.data;else{const se=ht.get();se instanceof Fe&&se.getName().toLowerCase().endsWith(Ie)&&(C=se)}}if(V&&(!C||!D)){let N=[],se=[];await gt.runAsync("Collecting files",async H=>{H.message="Scanning workspace for .geospace files...",N=await Ye(I,Ie,H,{value:0}),H.message="Scanning workspace for .env files...",H.currentStep=0,se=await Ye(I,cn,H,{value:0}),H.message=`Found ${N.length} .geospace files and ${se.length} .env files`});const ie=C?.getWorkspacePath(),z=await hn(N,se,ie,D||".env");if(z.geospaceFile===null&&z.envFile===null)return;if(z.geospaceFile&&!C){A=z.geospaceFile;const H=await I.getResource(A);if(!H||!(H instanceof Fe)){ke(`File not found: ${A}`);return}if(!H.getName().toLowerCase().endsWith(Ie)){ke(`File is not a .geospace file: ${A}`);return}C=H}z.envFile!==null&&(D=z.envFile||".env")}else if(!C){ke("No map editor active, no .geospace file selected, and no file path provided");return}if(!C){ke("No map file available");return}return Ke.buildMapFile(C,D)}},contribution:{target:"toolbar:map-editor",icon:"hammer",label:"Build map",disabled:()=>!(dt.get()instanceof Xt)}}),Zt.registerContribution("contextmenu:filebrowser",{command:"build_map",icon:"hammer",label:"Build map",params:{ask:!0},disabled:()=>{const R=ht.get();return R instanceof Fe?!R.getName().toLowerCase().endsWith(Ie):!0}})};export{bn as default};
