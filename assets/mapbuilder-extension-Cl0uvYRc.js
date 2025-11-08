import{w as Fe,a as lt,t as nt,l as Ut,b as Ft,c as Mt,r as Nt,G as Wt}from"./main-nnxehFyZ.js";import"./index-B-or_cqe.js";var Le={exports:{}},rt;function Lt(){return rt||(rt=1,(function(H){(B=>{var I=Object.defineProperty,J=Object.getOwnPropertyDescriptor,Y=Object.getOwnPropertyNames,V=Object.prototype.hasOwnProperty,ie=(e,n)=>{for(var r in n)I(e,r,{get:n[r],enumerable:!0})},ee=(e,n,r,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let p of Y(n))!V.call(e,p)&&p!==r&&I(e,p,{get:()=>n[p],enumerable:!(o=J(n,p))||o.enumerable});return e},ve=e=>ee(I({},"__esModule",{value:!0}),e),ue=(e,n,r)=>new Promise((o,p)=>{var w=u=>{try{_(r.next(u))}catch(A){p(A)}},h=u=>{try{_(r.throw(u))}catch(A){p(A)}},_=u=>u.done?o(u.value):Promise.resolve(u.value).then(w,h);_((r=r.apply(e,n)).next())}),be={};ie(be,{analyzeMetafile:()=>St,analyzeMetafileSync:()=>Tt,build:()=>xt,buildSync:()=>$t,context:()=>kt,default:()=>At,formatMessages:()=>Et,formatMessagesSync:()=>Pt,initialize:()=>Ct,stop:()=>Ot,transform:()=>_t,transformSync:()=>jt,version:()=>bt}),B.exports=ve(be);function Ee(e){let n=o=>{if(o===null)r.write8(0);else if(typeof o=="boolean")r.write8(1),r.write8(+o);else if(typeof o=="number")r.write8(2),r.write32(o|0);else if(typeof o=="string")r.write8(3),r.write(Z(o));else if(o instanceof Uint8Array)r.write8(4),r.write(o);else if(o instanceof Array){r.write8(5),r.write32(o.length);for(let p of o)n(p)}else{let p=Object.keys(o);r.write8(6),r.write32(p.length);for(let w of p)r.write(Z(w)),n(o[w])}},r=new Pe;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),n(e.value),We(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function Me(e){let n=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return le(r.read());case 4:return r.read();case 5:{let h=r.read32(),_=[];for(let u=0;u<h;u++)_.push(n());return _}case 6:{let h=r.read32(),_={};for(let u=0;u<h;u++)_[le(r.read())]=n();return _}default:throw new Error("Invalid packet")}},r=new Pe(e),o=r.read32(),p=(o&1)===0;o>>>=1;let w=n();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:p,value:w}}var Pe=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let n=new Uint8Array((this.len+e)*2);n.set(this.buf),this.buf=n}return this.len+=e,this.len-e}write8(e){let n=this._write(1);this.buf[n]=e}write32(e){let n=this._write(4);We(this.buf,e,n)}write(e){let n=this._write(4+e.length);We(this.buf,e.length,n),this.buf.set(e,n+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return Ve(this.buf,this._read(4))}read(){let e=this.read32(),n=new Uint8Array(e),r=this._read(n.length);return n.set(this.buf.subarray(r,r+e)),n}},Z,le,Ne;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,n=new TextDecoder;Z=r=>e.encode(r),le=r=>n.decode(r),Ne='new TextEncoder().encode("")'}else if(typeof Buffer<"u")Z=e=>Buffer.from(e),le=e=>{let{buffer:n,byteOffset:r,byteLength:o}=e;return Buffer.from(n,r,o).toString()},Ne='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(Z("")instanceof Uint8Array))throw new Error(`Invariant violation: "${Ne} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function Ve(e,n){return e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24}function We(e,n,r){e[r++]=n,e[r++]=n>>8,e[r++]=n>>16,e[r++]=n>>24}var X=JSON.stringify,ze="warning",Je="silent";function xe(e,n){const r=[];for(const o of e){if(ne(o,n),o.indexOf(",")>=0)throw new Error(`Invalid ${n}: ${o}`);r.push(o)}return r.join(",")}var Te=()=>null,G=e=>typeof e=="boolean"?null:"a boolean",P=e=>typeof e=="string"?null:"a string",Oe=e=>e instanceof RegExp?null:"a RegExp object",ge=e=>typeof e=="number"&&e===(e|0)?null:"an integer",at=e=>typeof e=="number"&&e===(e|0)&&e>=0&&e<=65535?null:"a valid port number",Ge=e=>typeof e=="function"?null:"a function",fe=e=>Array.isArray(e)?null:"an array",te=e=>Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"an array of strings",se=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",ot=e=>typeof e=="object"&&e!==null?null:"an array or an object",ct=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",qe=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",He=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",ut=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",Ye=e=>typeof e=="string"||Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"a string or an array of strings",Ke=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array",ft=e=>typeof e=="string"||e instanceof URL?null:"a string or a URL";function i(e,n,r,o){let p=e[r];if(n[r+""]=!0,p===void 0)return;let w=o(p);if(w!==null)throw new Error(`${X(r)} must be ${w}`);return p}function K(e,n,r){for(let o in e)if(!(o in n))throw new Error(`Invalid option ${r}: ${X(o)}`)}function dt(e){let n=Object.create(null),r=i(e,n,"wasmURL",ft),o=i(e,n,"wasmModule",ct),p=i(e,n,"worker",G);return K(e,n,"in initialize() call"),{wasmURL:r,wasmModule:o,worker:p}}function Qe(e){let n;if(e!==void 0){n=Object.create(null);for(let r in e){let o=e[r];if(typeof o=="string"||o===!1)n[r]=o;else throw new Error(`Expected ${X(r)} in mangle cache to map to either a string or false`)}}return n}function Ce(e,n,r,o,p){let w=i(n,r,"color",G),h=i(n,r,"logLevel",P),_=i(n,r,"logLimit",ge);w!==void 0?e.push(`--color=${w}`):o&&e.push("--color=true"),e.push(`--log-level=${h||p}`),e.push(`--log-limit=${_||0}`)}function ne(e,n,r){if(typeof e!="string")throw new Error(`Expected value for ${n}${r!==void 0?" "+X(r):""} to be a string, got ${typeof e} instead`);return e}function Xe(e,n,r){let o=i(n,r,"legalComments",P),p=i(n,r,"sourceRoot",P),w=i(n,r,"sourcesContent",G),h=i(n,r,"target",Ye),_=i(n,r,"format",P),u=i(n,r,"globalName",P),A=i(n,r,"mangleProps",Oe),D=i(n,r,"reserveProps",Oe),O=i(n,r,"mangleQuoted",G),L=i(n,r,"minify",G),C=i(n,r,"minifySyntax",G),M=i(n,r,"minifyWhitespace",G),N=i(n,r,"minifyIdentifiers",G),j=i(n,r,"lineLimit",ge),q=i(n,r,"drop",te),S=i(n,r,"dropLabels",te),E=i(n,r,"charset",P),g=i(n,r,"treeShaking",G),f=i(n,r,"ignoreAnnotations",G),s=i(n,r,"jsx",P),a=i(n,r,"jsxFactory",P),d=i(n,r,"jsxFragment",P),b=i(n,r,"jsxImportSource",P),x=i(n,r,"jsxDev",G),c=i(n,r,"jsxSideEffects",G),m=i(n,r,"define",se),t=i(n,r,"logOverride",se),l=i(n,r,"supported",se),y=i(n,r,"pure",te),v=i(n,r,"keepNames",G),$=i(n,r,"platform",P),R=i(n,r,"tsconfigRaw",ut),z=i(n,r,"absPaths",te);if(o&&e.push(`--legal-comments=${o}`),p!==void 0&&e.push(`--source-root=${p}`),w!==void 0&&e.push(`--sources-content=${w}`),h&&e.push(`--target=${xe(Array.isArray(h)?h:[h],"target")}`),_&&e.push(`--format=${_}`),u&&e.push(`--global-name=${u}`),$&&e.push(`--platform=${$}`),R&&e.push(`--tsconfig-raw=${typeof R=="string"?R:JSON.stringify(R)}`),L&&e.push("--minify"),C&&e.push("--minify-syntax"),M&&e.push("--minify-whitespace"),N&&e.push("--minify-identifiers"),j&&e.push(`--line-limit=${j}`),E&&e.push(`--charset=${E}`),g!==void 0&&e.push(`--tree-shaking=${g}`),f&&e.push("--ignore-annotations"),q)for(let k of q)e.push(`--drop:${ne(k,"drop")}`);if(S&&e.push(`--drop-labels=${xe(S,"drop label")}`),z&&e.push(`--abs-paths=${xe(z,"abs paths")}`),A&&e.push(`--mangle-props=${De(A)}`),D&&e.push(`--reserve-props=${De(D)}`),O!==void 0&&e.push(`--mangle-quoted=${O}`),s&&e.push(`--jsx=${s}`),a&&e.push(`--jsx-factory=${a}`),d&&e.push(`--jsx-fragment=${d}`),b&&e.push(`--jsx-import-source=${b}`),x&&e.push("--jsx-dev"),c&&e.push("--jsx-side-effects"),m)for(let k in m){if(k.indexOf("=")>=0)throw new Error(`Invalid define: ${k}`);e.push(`--define:${k}=${ne(m[k],"define",k)}`)}if(t)for(let k in t){if(k.indexOf("=")>=0)throw new Error(`Invalid log override: ${k}`);e.push(`--log-override:${k}=${ne(t[k],"log override",k)}`)}if(l)for(let k in l){if(k.indexOf("=")>=0)throw new Error(`Invalid supported: ${k}`);const W=l[k];if(typeof W!="boolean")throw new Error(`Expected value for supported ${X(k)} to be a boolean, got ${typeof W} instead`);e.push(`--supported:${k}=${W}`)}if(y)for(let k of y)e.push(`--pure:${ne(k,"pure")}`);v&&e.push("--keep-names")}function ht(e,n,r,o,p){var w;let h=[],_=[],u=Object.create(null),A=null,D=null;Ce(h,n,u,r,o),Xe(h,n,u);let O=i(n,u,"sourcemap",He),L=i(n,u,"bundle",G),C=i(n,u,"splitting",G),M=i(n,u,"preserveSymlinks",G),N=i(n,u,"metafile",G),j=i(n,u,"outfile",P),q=i(n,u,"outdir",P),S=i(n,u,"outbase",P),E=i(n,u,"tsconfig",P),g=i(n,u,"resolveExtensions",te),f=i(n,u,"nodePaths",te),s=i(n,u,"mainFields",te),a=i(n,u,"conditions",te),d=i(n,u,"external",te),b=i(n,u,"packages",P),x=i(n,u,"alias",se),c=i(n,u,"loader",se),m=i(n,u,"outExtension",se),t=i(n,u,"publicPath",P),l=i(n,u,"entryNames",P),y=i(n,u,"chunkNames",P),v=i(n,u,"assetNames",P),$=i(n,u,"inject",te),R=i(n,u,"banner",se),z=i(n,u,"footer",se),k=i(n,u,"entryPoints",ot),W=i(n,u,"absWorkingDir",P),F=i(n,u,"stdin",se),U=(w=i(n,u,"write",G))!=null?w:p,re=i(n,u,"allowOverwrite",G),Q=i(n,u,"mangleCache",se);if(u.plugins=!0,K(n,u,`in ${e}() call`),O&&h.push(`--sourcemap${O===!0?"":`=${O}`}`),L&&h.push("--bundle"),re&&h.push("--allow-overwrite"),C&&h.push("--splitting"),M&&h.push("--preserve-symlinks"),N&&h.push("--metafile"),j&&h.push(`--outfile=${j}`),q&&h.push(`--outdir=${q}`),S&&h.push(`--outbase=${S}`),E&&h.push(`--tsconfig=${E}`),b&&h.push(`--packages=${b}`),g&&h.push(`--resolve-extensions=${xe(g,"resolve extension")}`),t&&h.push(`--public-path=${t}`),l&&h.push(`--entry-names=${l}`),y&&h.push(`--chunk-names=${y}`),v&&h.push(`--asset-names=${v}`),s&&h.push(`--main-fields=${xe(s,"main field")}`),a&&h.push(`--conditions=${xe(a,"condition")}`),d)for(let T of d)h.push(`--external:${ne(T,"external")}`);if(x)for(let T in x){if(T.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${T}`);h.push(`--alias:${T}=${ne(x[T],"alias",T)}`)}if(R)for(let T in R){if(T.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${T}`);h.push(`--banner:${T}=${ne(R[T],"banner",T)}`)}if(z)for(let T in z){if(T.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${T}`);h.push(`--footer:${T}=${ne(z[T],"footer",T)}`)}if($)for(let T of $)h.push(`--inject:${ne(T,"inject")}`);if(c)for(let T in c){if(T.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${T}`);h.push(`--loader:${T}=${ne(c[T],"loader",T)}`)}if(m)for(let T in m){if(T.indexOf("=")>=0)throw new Error(`Invalid out extension: ${T}`);h.push(`--out-extension:${T}=${ne(m[T],"out extension",T)}`)}if(k)if(Array.isArray(k))for(let T=0,me=k.length;T<me;T++){let ae=k[T];if(typeof ae=="object"&&ae!==null){let ce=Object.create(null),pe=i(ae,ce,"in",P),oe=i(ae,ce,"out",P);if(K(ae,ce,"in entry point at index "+T),pe===void 0)throw new Error('Missing property "in" for entry point at index '+T);if(oe===void 0)throw new Error('Missing property "out" for entry point at index '+T);_.push([oe,pe])}else _.push(["",ne(ae,"entry point at index "+T)])}else for(let T in k)_.push([T,ne(k[T],"entry point",T)]);if(F){let T=Object.create(null),me=i(F,T,"contents",Ke),ae=i(F,T,"resolveDir",P),ce=i(F,T,"sourcefile",P),pe=i(F,T,"loader",P);K(F,T,'in "stdin" object'),ce&&h.push(`--sourcefile=${ce}`),pe&&h.push(`--loader=${pe}`),ae&&(D=ae),typeof me=="string"?A=Z(me):me instanceof Uint8Array&&(A=me)}let he=[];if(f)for(let T of f)T+="",he.push(T);return{entries:_,flags:h,write:U,stdinContents:A,stdinResolveDir:D,absWorkingDir:W,nodePaths:he,mangleCache:Qe(Q)}}function mt(e,n,r,o){let p=[],w=Object.create(null);Ce(p,n,w,r,o),Xe(p,n,w);let h=i(n,w,"sourcemap",He),_=i(n,w,"sourcefile",P),u=i(n,w,"loader",P),A=i(n,w,"banner",P),D=i(n,w,"footer",P),O=i(n,w,"mangleCache",se);return K(n,w,`in ${e}() call`),h&&p.push(`--sourcemap=${h===!0?"external":h}`),_&&p.push(`--sourcefile=${_}`),u&&p.push(`--loader=${u}`),A&&p.push(`--banner=${A}`),D&&p.push(`--footer=${D}`),{flags:p,mangleCache:Qe(O)}}function pt(e){const n={},r={didClose:!1,reason:""};let o={},p=0,w=0,h=new Uint8Array(16*1024),_=0,u=E=>{let g=_+E.length;if(g>h.length){let s=new Uint8Array(g*2);s.set(h),h=s}h.set(E,_),_+=E.length;let f=0;for(;f+4<=_;){let s=Ve(h,f);if(f+4+s>_)break;f+=4,M(h.subarray(f,f+s)),f+=s}f>0&&(h.copyWithin(0,f,_),_-=f)},A=E=>{r.didClose=!0,E&&(r.reason=": "+(E.message||E));const g="The service was stopped"+r.reason;for(let f in o)o[f](g,null);o={}},D=(E,g,f)=>{if(r.didClose)return f("The service is no longer running"+r.reason,null);let s=p++;o[s]=(a,d)=>{try{f(a,d)}finally{E&&E.unref()}},E&&E.ref(),e.writeToStdin(Ee({id:s,isRequest:!0,value:g}))},O=(E,g)=>{if(r.didClose)throw new Error("The service is no longer running"+r.reason);e.writeToStdin(Ee({id:E,isRequest:!1,value:g}))},L=(E,g)=>ue(null,null,function*(){try{if(g.command==="ping"){O(E,{});return}if(typeof g.key=="number"){const f=n[g.key];if(!f)return;const s=f[g.command];if(s){yield s(E,g);return}}throw new Error("Invalid command: "+g.command)}catch(f){const s=[we(f,e,null,void 0,"")];try{O(E,{errors:s})}catch{}}}),C=!0,M=E=>{if(C){C=!1;let f=String.fromCharCode(...E);if(f!=="0.25.11")throw new Error(`Cannot start service: Host version "0.25.11" does not match binary version ${X(f)}`);return}let g=Me(E);if(g.isRequest)L(g.id,g.value);else{let f=o[g.id];delete o[g.id],g.value.error?f(g.value.error,{}):f(null,g.value)}};return{readFromStdout:u,afterClose:A,service:{buildOrContext:({callName:E,refs:g,options:f,isTTY:s,defaultWD:a,callback:d})=>{let b=0;const x=w++,c={},m={ref(){++b===1&&g&&g.ref()},unref(){--b===0&&(delete n[x],g&&g.unref())}};n[x]=c,m.ref(),gt(E,x,D,O,m,e,c,f,s,a,(t,l)=>{try{d(t,l)}finally{m.unref()}})},transform:({callName:E,refs:g,input:f,options:s,isTTY:a,fs:d,callback:b})=>{const x=Ze();let c=m=>{try{if(typeof f!="string"&&!(f instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:t,mangleCache:l}=mt(E,s,a,Je),y={command:"transform",flags:t,inputFS:m!==null,input:m!==null?Z(m):typeof f=="string"?Z(f):f};l&&(y.mangleCache=l),D(g,y,(v,$)=>{if(v)return b(new Error(v),null);let R=ke($.errors,x),z=ke($.warnings,x),k=1,W=()=>{if(--k===0){let F={warnings:z,code:$.code,map:$.map,mangleCache:void 0,legalComments:void 0};"legalComments"in $&&(F.legalComments=$?.legalComments),$.mangleCache&&(F.mangleCache=$?.mangleCache),b(null,F)}};if(R.length>0)return b(Se("Transform failed",R,z),null);$.codeFS&&(k++,d.readFile($.code,(F,U)=>{F!==null?b(F,null):($.code=U,W())})),$.mapFS&&(k++,d.readFile($.map,(F,U)=>{F!==null?b(F,null):($.map=U,W())})),W()})}catch(t){let l=[];try{Ce(l,s,{},a,Je)}catch{}const y=we(t,e,x,void 0,"");D(g,{command:"error",flags:l,error:y},()=>{y.detail=x.load(y.detail),b(Se("Transform failed",[y],[]),null)})}};if((typeof f=="string"||f instanceof Uint8Array)&&f.length>1024*1024){let m=c;c=()=>d.writeFile(f,m)}c(null)},formatMessages:({callName:E,refs:g,messages:f,options:s,callback:a})=>{if(!s)throw new Error(`Missing second argument in ${E}() call`);let d={},b=i(s,d,"kind",P),x=i(s,d,"color",G),c=i(s,d,"terminalWidth",ge);if(K(s,d,`in ${E}() call`),b===void 0)throw new Error(`Missing "kind" in ${E}() call`);if(b!=="error"&&b!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${E}() call`);let m={command:"format-msgs",messages:de(f,"messages",null,"",c),isWarning:b==="warning"};x!==void 0&&(m.color=x),c!==void 0&&(m.terminalWidth=c),D(g,m,(t,l)=>{if(t)return a(new Error(t),null);a(null,l.messages)})},analyzeMetafile:({callName:E,refs:g,metafile:f,options:s,callback:a})=>{s===void 0&&(s={});let d={},b=i(s,d,"color",G),x=i(s,d,"verbose",G);K(s,d,`in ${E}() call`);let c={command:"analyze-metafile",metafile:f};b!==void 0&&(c.color=b),x!==void 0&&(c.verbose=x),D(g,c,(m,t)=>{if(m)return a(new Error(m),null);a(null,t.result)})}}}}function gt(e,n,r,o,p,w,h,_,u,A,D){const O=Ze(),L=e==="context",C=(j,q)=>{const S=[];try{Ce(S,_,{},u,ze)}catch{}const E=we(j,w,O,void 0,q);r(p,{command:"error",flags:S,error:E},()=>{E.detail=O.load(E.detail),D(Se(L?"Context failed":"Build failed",[E],[]),null)})};let M;if(typeof _=="object"){const j=_.plugins;if(j!==void 0){if(!Array.isArray(j))return C(new Error('"plugins" must be an array'),"");M=j}}if(M&&M.length>0){if(w.isSync)return C(new Error("Cannot use plugins in synchronous API calls"),"");wt(n,r,o,p,w,h,_,M,O).then(j=>{if(!j.ok)return C(j.error,j.pluginName);try{N(j.requestPlugins,j.runOnEndCallbacks,j.scheduleOnDisposeCallbacks)}catch(q){C(q,"")}},j=>C(j,""));return}try{N(null,(j,q)=>q([],[]),()=>{})}catch(j){C(j,"")}function N(j,q,S){const E=w.hasFS,{entries:g,flags:f,write:s,stdinContents:a,stdinResolveDir:d,absWorkingDir:b,nodePaths:x,mangleCache:c}=ht(e,_,u,ze,E);if(s&&!w.hasFS)throw new Error('The "write" option is unavailable in this environment');const m={command:"build",key:n,entries:g,flags:f,write:s,stdinContents:a,stdinResolveDir:d,absWorkingDir:b||A,nodePaths:x,context:L};j&&(m.plugins=j),c&&(m.mangleCache=c);const t=(v,$)=>{const R={errors:ke(v.errors,O),warnings:ke(v.warnings,O),outputFiles:void 0,metafile:void 0,mangleCache:void 0},z=R.errors.slice(),k=R.warnings.slice();v.outputFiles&&(R.outputFiles=v.outputFiles.map(vt)),v.metafile&&(R.metafile=JSON.parse(v.metafile)),v.mangleCache&&(R.mangleCache=v.mangleCache),v.writeToStdout!==void 0&&console.log(le(v.writeToStdout).replace(/\n$/,"")),q(R,(W,F)=>{if(z.length>0||W.length>0){const U=Se("Build failed",z.concat(W),k.concat(F));return $(U,null,W,F)}$(null,R,W,F)})};let l,y;L&&(h["on-end"]=(v,$)=>new Promise(R=>{t($,(z,k,W,F)=>{const U={errors:W,warnings:F};y&&y(z,k),l=void 0,y=void 0,o(v,U),R()})})),r(p,m,(v,$)=>{if(v)return D(new Error(v),null);if(!L)return t($,(k,W)=>(S(),D(k,W)));if($.errors.length>0)return D(Se("Context failed",$.errors,$.warnings),null);let R=!1;const z={rebuild:()=>(l||(l=new Promise((k,W)=>{let F;y=(re,Q)=>{F||(F=()=>re?W(re):k(Q))};const U=()=>{r(p,{command:"rebuild",key:n},(Q,he)=>{Q?W(new Error(Q)):F?F():U()})};U()})),l),watch:(k={})=>new Promise((W,F)=>{if(!w.hasFS)throw new Error('Cannot use the "watch" API in this environment');const U={},re=i(k,U,"delay",ge);K(k,U,"in watch() call");const Q={command:"watch",key:n};re&&(Q.delay=re),r(p,Q,he=>{he?F(new Error(he)):W(void 0)})}),serve:(k={})=>new Promise((W,F)=>{if(!w.hasFS)throw new Error('Cannot use the "serve" API in this environment');const U={},re=i(k,U,"port",at),Q=i(k,U,"host",P),he=i(k,U,"servedir",P),T=i(k,U,"keyfile",P),me=i(k,U,"certfile",P),ae=i(k,U,"fallback",P),ce=i(k,U,"cors",se),pe=i(k,U,"onRequest",Ge);K(k,U,"in serve() call");const oe={command:"serve",key:n,onRequest:!!pe};if(re!==void 0&&(oe.port=re),Q!==void 0&&(oe.host=Q),he!==void 0&&(oe.servedir=he),T!==void 0&&(oe.keyfile=T),me!==void 0&&(oe.certfile=me),ae!==void 0&&(oe.fallback=ae),ce){const je={},_e=i(ce,je,"origin",Ye);K(ce,je,'on "cors" object'),Array.isArray(_e)?oe.corsOrigin=_e:_e!==void 0&&(oe.corsOrigin=[_e])}r(p,oe,(je,_e)=>{if(je)return F(new Error(je));pe&&(h["serve-request"]=(Dt,It)=>{pe(It.args),o(Dt,{})}),W(_e)})}),cancel:()=>new Promise(k=>{if(R)return k();r(p,{command:"cancel",key:n},()=>{k()})}),dispose:()=>new Promise(k=>{if(R)return k();R=!0,r(p,{command:"dispose",key:n},()=>{k(),S(),p.unref()})})};p.ref(),D(null,z)})}}var wt=(e,n,r,o,p,w,h,_,u)=>ue(null,null,function*(){let A=[],D=[],O={},L={},C=[],M=0,N=0,j=[],q=!1;_=[..._];for(let g of _){let f={};if(typeof g!="object")throw new Error(`Plugin at index ${N} must be an object`);const s=i(g,f,"name",P);if(typeof s!="string"||s==="")throw new Error(`Plugin at index ${N} is missing a name`);try{let a=i(g,f,"setup",Ge);if(typeof a!="function")throw new Error("Plugin is missing a setup function");K(g,f,`on plugin ${X(s)}`);let d={name:s,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};N++;let x=a({initialOptions:h,resolve:(c,m={})=>{if(!q)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof c!="string")throw new Error("The path to resolve must be a string");let t=Object.create(null),l=i(m,t,"pluginName",P),y=i(m,t,"importer",P),v=i(m,t,"namespace",P),$=i(m,t,"resolveDir",P),R=i(m,t,"kind",P),z=i(m,t,"pluginData",Te),k=i(m,t,"with",se);return K(m,t,"in resolve() call"),new Promise((W,F)=>{const U={command:"resolve",path:c,key:e,pluginName:s};if(l!=null&&(U.pluginName=l),y!=null&&(U.importer=y),v!=null&&(U.namespace=v),$!=null&&(U.resolveDir=$),R!=null)U.kind=R;else throw new Error('Must specify "kind" when calling "resolve"');z!=null&&(U.pluginData=u.store(z)),k!=null&&(U.with=yt(k,"with")),n(o,U,(re,Q)=>{re!==null?F(new Error(re)):W({errors:ke(Q.errors,u),warnings:ke(Q.warnings,u),path:Q.path,external:Q.external,sideEffects:Q.sideEffects,namespace:Q.namespace,suffix:Q.suffix,pluginData:u.load(Q.pluginData)})})})},onStart(c){let m='This error came from the "onStart" callback registered here:',t=Re(new Error(m),p,"onStart");A.push({name:s,callback:c,note:t}),d.onStart=!0},onEnd(c){let m='This error came from the "onEnd" callback registered here:',t=Re(new Error(m),p,"onEnd");D.push({name:s,callback:c,note:t}),d.onEnd=!0},onResolve(c,m){let t='This error came from the "onResolve" callback registered here:',l=Re(new Error(t),p,"onResolve"),y={},v=i(c,y,"filter",Oe),$=i(c,y,"namespace",P);if(K(c,y,`in onResolve() call for plugin ${X(s)}`),v==null)throw new Error("onResolve() call is missing a filter");let R=M++;O[R]={name:s,callback:m,note:l},d.onResolve.push({id:R,filter:De(v),namespace:$||""})},onLoad(c,m){let t='This error came from the "onLoad" callback registered here:',l=Re(new Error(t),p,"onLoad"),y={},v=i(c,y,"filter",Oe),$=i(c,y,"namespace",P);if(K(c,y,`in onLoad() call for plugin ${X(s)}`),v==null)throw new Error("onLoad() call is missing a filter");let R=M++;L[R]={name:s,callback:m,note:l},d.onLoad.push({id:R,filter:De(v),namespace:$||""})},onDispose(c){C.push(c)},esbuild:p.esbuild});x&&(yield x),j.push(d)}catch(a){return{ok:!1,error:a,pluginName:s}}}w["on-start"]=(g,f)=>ue(null,null,function*(){u.clear();let s={errors:[],warnings:[]};yield Promise.all(A.map(a=>ue(null,[a],function*({name:d,callback:b,note:x}){try{let c=yield b();if(c!=null){if(typeof c!="object")throw new Error(`Expected onStart() callback in plugin ${X(d)} to return an object`);let m={},t=i(c,m,"errors",fe),l=i(c,m,"warnings",fe);K(c,m,`from onStart() callback in plugin ${X(d)}`),t!=null&&s.errors.push(...de(t,"errors",u,d,void 0)),l!=null&&s.warnings.push(...de(l,"warnings",u,d,void 0))}}catch(c){s.errors.push(we(c,p,u,x&&x(),d))}}))),r(g,s)}),w["on-resolve"]=(g,f)=>ue(null,null,function*(){let s={},a="",d,b;for(let x of f.ids)try{({name:a,callback:d,note:b}=O[x]);let c=yield d({path:f.path,importer:f.importer,namespace:f.namespace,resolveDir:f.resolveDir,kind:f.kind,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onResolve() callback in plugin ${X(a)} to return an object`);let m={},t=i(c,m,"pluginName",P),l=i(c,m,"path",P),y=i(c,m,"namespace",P),v=i(c,m,"suffix",P),$=i(c,m,"external",G),R=i(c,m,"sideEffects",G),z=i(c,m,"pluginData",Te),k=i(c,m,"errors",fe),W=i(c,m,"warnings",fe),F=i(c,m,"watchFiles",te),U=i(c,m,"watchDirs",te);K(c,m,`from onResolve() callback in plugin ${X(a)}`),s.id=x,t!=null&&(s.pluginName=t),l!=null&&(s.path=l),y!=null&&(s.namespace=y),v!=null&&(s.suffix=v),$!=null&&(s.external=$),R!=null&&(s.sideEffects=R),z!=null&&(s.pluginData=u.store(z)),k!=null&&(s.errors=de(k,"errors",u,a,void 0)),W!=null&&(s.warnings=de(W,"warnings",u,a,void 0)),F!=null&&(s.watchFiles=Ae(F,"watchFiles")),U!=null&&(s.watchDirs=Ae(U,"watchDirs"));break}}catch(c){s={id:x,errors:[we(c,p,u,b&&b(),a)]};break}r(g,s)}),w["on-load"]=(g,f)=>ue(null,null,function*(){let s={},a="",d,b;for(let x of f.ids)try{({name:a,callback:d,note:b}=L[x]);let c=yield d({path:f.path,namespace:f.namespace,suffix:f.suffix,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onLoad() callback in plugin ${X(a)} to return an object`);let m={},t=i(c,m,"pluginName",P),l=i(c,m,"contents",Ke),y=i(c,m,"resolveDir",P),v=i(c,m,"pluginData",Te),$=i(c,m,"loader",P),R=i(c,m,"errors",fe),z=i(c,m,"warnings",fe),k=i(c,m,"watchFiles",te),W=i(c,m,"watchDirs",te);K(c,m,`from onLoad() callback in plugin ${X(a)}`),s.id=x,t!=null&&(s.pluginName=t),l instanceof Uint8Array?s.contents=l:l!=null&&(s.contents=Z(l)),y!=null&&(s.resolveDir=y),v!=null&&(s.pluginData=u.store(v)),$!=null&&(s.loader=$),R!=null&&(s.errors=de(R,"errors",u,a,void 0)),z!=null&&(s.warnings=de(z,"warnings",u,a,void 0)),k!=null&&(s.watchFiles=Ae(k,"watchFiles")),W!=null&&(s.watchDirs=Ae(W,"watchDirs"));break}}catch(c){s={id:x,errors:[we(c,p,u,b&&b(),a)]};break}r(g,s)});let S=(g,f)=>f([],[]);D.length>0&&(S=(g,f)=>{ue(null,null,function*(){const s=[],a=[];for(const{name:d,callback:b,note:x}of D){let c,m;try{const t=yield b(g);if(t!=null){if(typeof t!="object")throw new Error(`Expected onEnd() callback in plugin ${X(d)} to return an object`);let l={},y=i(t,l,"errors",fe),v=i(t,l,"warnings",fe);K(t,l,`from onEnd() callback in plugin ${X(d)}`),y!=null&&(c=de(y,"errors",u,d,void 0)),v!=null&&(m=de(v,"warnings",u,d,void 0))}}catch(t){c=[we(t,p,u,x&&x(),d)]}if(c){s.push(...c);try{g.errors.push(...c)}catch{}}if(m){a.push(...m);try{g.warnings.push(...m)}catch{}}}f(s,a)})});let E=()=>{for(const g of C)setTimeout(()=>g(),0)};return q=!0,{ok:!0,requestPlugins:j,runOnEndCallbacks:S,scheduleOnDisposeCallbacks:E}});function Ze(){const e=new Map;let n=0;return{clear(){e.clear()},load(r){return e.get(r)},store(r){if(r===void 0)return-1;const o=n++;return e.set(o,r),o}}}function Re(e,n,r){let o,p=!1;return()=>{if(p)return o;p=!0;try{let w=(e.stack+"").split(`
`);w.splice(1,1);let h=et(n,w,r);if(h)return o={text:e.message,location:h},o}catch{}}}function we(e,n,r,o,p){let w="Internal error",h=null;try{w=(e&&e.message||e)+""}catch{}try{h=et(n,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:p,text:w,location:h,notes:o?[o]:[],detail:r?r.store(e):-1}}function et(e,n,r){let o="    at ";if(e.readFileSync&&!n[0].startsWith(o)&&n[1].startsWith(o))for(let p=1;p<n.length;p++){let w=n[p];if(w.startsWith(o))for(w=w.slice(o.length);;){let h=/^(?:new |async )?\S+ \((.*)\)$/.exec(w);if(h){w=h[1];continue}if(h=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(w),h){w=h[1];continue}if(h=/^(\S+):(\d+):(\d+)$/.exec(w),h){let _;try{_=e.readFileSync(h[1],"utf8")}catch{break}let u=_.split(/\r\n|\r|\n|\u2028|\u2029/)[+h[2]-1]||"",A=+h[3]-1,D=u.slice(A,A+r.length)===r?r.length:0;return{file:h[1],namespace:"file",line:+h[2],column:Z(u.slice(0,A)).length,length:Z(u.slice(A,A+D)).length,lineText:u+`
`+n.slice(1).join(`
`),suggestion:""}}break}}return null}function Se(e,n,r){let o=5;e+=n.length<1?"":` with ${n.length} error${n.length<2?"":"s"}:`+n.slice(0,o+1).map((w,h)=>{if(h===o)return`
...`;if(!w.location)return`
error: ${w.text}`;let{file:_,line:u,column:A}=w.location,D=w.pluginName?`[plugin: ${w.pluginName}] `:"";return`
${_}:${u}:${A}: ERROR: ${D}${w.text}`}).join("");let p=new Error(e);for(const[w,h]of[["errors",n],["warnings",r]])Object.defineProperty(p,w,{configurable:!0,enumerable:!0,get:()=>h,set:_=>Object.defineProperty(p,w,{configurable:!0,enumerable:!0,value:_})});return p}function ke(e,n){for(const r of e)r.detail=n.load(r.detail);return e}function tt(e,n,r){if(e==null)return null;let o={},p=i(e,o,"file",P),w=i(e,o,"namespace",P),h=i(e,o,"line",ge),_=i(e,o,"column",ge),u=i(e,o,"length",ge),A=i(e,o,"lineText",P),D=i(e,o,"suggestion",P);if(K(e,o,n),A){const O=A.slice(0,(_&&_>0?_:0)+(u&&u>0?u:0)+(r&&r>0?r:80));!/[\x7F-\uFFFF]/.test(O)&&!/\n/.test(A)&&(A=O)}return{file:p||"",namespace:w||"",line:h||0,column:_||0,length:u||0,lineText:A||"",suggestion:D||""}}function de(e,n,r,o,p){let w=[],h=0;for(const _ of e){let u={},A=i(_,u,"id",P),D=i(_,u,"pluginName",P),O=i(_,u,"text",P),L=i(_,u,"location",qe),C=i(_,u,"notes",fe),M=i(_,u,"detail",Te),N=`in element ${h} of "${n}"`;K(_,u,N);let j=[];if(C)for(const q of C){let S={},E=i(q,S,"text",P),g=i(q,S,"location",qe);K(q,S,N),j.push({text:E||"",location:tt(g,N,p)})}w.push({id:A||"",pluginName:D||o,text:O||"",location:tt(L,N,p),notes:j,detail:r?r.store(M):-1}),h++}return w}function Ae(e,n){const r=[];for(const o of e){if(typeof o!="string")throw new Error(`${X(n)} must be an array of strings`);r.push(o)}return r}function yt(e,n){const r=Object.create(null);for(const o in e){const p=e[o];if(typeof p!="string")throw new Error(`key ${X(o)} in object ${X(n)} must be a string`);r[o]=p}return r}function vt({path:e,contents:n,hash:r}){let o=null;return{path:e,contents:n,hash:r,get text(){const p=this.contents;return(o===null||p!==n)&&(n=p,o=le(p)),o}}}function De(e){let n=e.source;return e.flags&&(n=`(?${e.flags})${n}`),n}var bt="0.25.11",xt=e=>$e().build(e),kt=e=>$e().context(e),_t=(e,n)=>$e().transform(e,n),Et=(e,n)=>$e().formatMessages(e,n),St=(e,n)=>$e().analyzeMetafile(e,n),$t=()=>{throw new Error('The "buildSync" API only works in node')},jt=()=>{throw new Error('The "transformSync" API only works in node')},Pt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Tt=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Ot=()=>(Ie&&Ie(),Promise.resolve()),ye,Ie,Ue,$e=()=>{if(Ue)return Ue;throw ye?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Ct=e=>{e=dt(e||{});let n=e.wasmURL,r=e.wasmModule,o=e.worker!==!1;if(!n&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(ye)throw new Error('Cannot call "initialize" more than once');return ye=Rt(n||"",r,o),ye.catch(()=>{ye=void 0}),ye},Rt=(e,n,r)=>ue(null,null,function*(){let o,p;const w=new Promise(O=>p=O);if(r){let O=new Blob([`onmessage=((postMessage) => {
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
        go.argv = ["", \`--service=\${"0.25.11"}\`];
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
    })(postMessage)`],{type:"text/javascript"});o=new Worker(URL.createObjectURL(O))}else{let O=(C=>{var M=(S,E,g)=>new Promise((f,s)=>{var a=x=>{try{b(g.next(x))}catch(c){s(c)}},d=x=>{try{b(g.throw(x))}catch(c){s(c)}},b=x=>x.done?f(x.value):Promise.resolve(x.value).then(a,d);b((g=g.apply(S,E)).next())});let N,j={};for(let S=self;S;S=Object.getPrototypeOf(S))for(let E of Object.getOwnPropertyNames(S))E in j||Object.defineProperty(j,E,{get:()=>self[E]});(()=>{const S=()=>{const f=new Error("not implemented");return f.code="ENOSYS",f};if(!j.fs){let f="";j.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(s,a){f+=g.decode(a);const d=f.lastIndexOf(`
`);return d!=-1&&(console.log(f.substring(0,d)),f=f.substring(d+1)),a.length},write(s,a,d,b,x,c){if(d!==0||b!==a.length||x!==null){c(S());return}const m=this.writeSync(s,a);c(null,m)},chmod(s,a,d){d(S())},chown(s,a,d,b){b(S())},close(s,a){a(S())},fchmod(s,a,d){d(S())},fchown(s,a,d,b){b(S())},fstat(s,a){a(S())},fsync(s,a){a(null)},ftruncate(s,a,d){d(S())},lchown(s,a,d,b){b(S())},link(s,a,d){d(S())},lstat(s,a){a(S())},mkdir(s,a,d){d(S())},open(s,a,d,b){b(S())},read(s,a,d,b,x,c){c(S())},readdir(s,a){a(S())},readlink(s,a){a(S())},rename(s,a,d){d(S())},rmdir(s,a){a(S())},stat(s,a){a(S())},symlink(s,a,d){d(S())},truncate(s,a,d){d(S())},unlink(s,a){a(S())},utimes(s,a,d,b){b(S())}}}if(j.process||(j.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw S()},pid:-1,ppid:-1,umask(){throw S()},cwd(){throw S()},chdir(){throw S()}}),!j.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!j.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!j.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!j.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const E=new TextEncoder("utf-8"),g=new TextDecoder("utf-8");j.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const f=(t,l)=>{this.mem.setUint32(t+0,l,!0),this.mem.setUint32(t+4,Math.floor(l/4294967296),!0)},s=t=>{const l=this.mem.getUint32(t+0,!0),y=this.mem.getInt32(t+4,!0);return l+y*4294967296},a=t=>{const l=this.mem.getFloat64(t,!0);if(l===0)return;if(!isNaN(l))return l;const y=this.mem.getUint32(t,!0);return this._values[y]},d=(t,l)=>{if(typeof l=="number"&&l!==0){if(isNaN(l)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,l,!0);return}if(l===void 0){this.mem.setFloat64(t,0,!0);return}let v=this._ids.get(l);v===void 0&&(v=this._idPool.pop(),v===void 0&&(v=this._values.length),this._values[v]=l,this._goRefCounts[v]=0,this._ids.set(l,v)),this._goRefCounts[v]++;let $=0;switch(typeof l){case"object":l!==null&&($=1);break;case"string":$=2;break;case"symbol":$=3;break;case"function":$=4;break}this.mem.setUint32(t+4,2146959360|$,!0),this.mem.setUint32(t,v,!0)},b=t=>{const l=s(t+0),y=s(t+8);return new Uint8Array(this._inst.exports.mem.buffer,l,y)},x=t=>{const l=s(t+0),y=s(t+8),v=new Array(y);for(let $=0;$<y;$++)v[$]=a(l+$*8);return v},c=t=>{const l=s(t+0),y=s(t+8);return g.decode(new DataView(this._inst.exports.mem.buffer,l,y))},m=Date.now()-performance.now();this.importObject={_gotest:{add:(t,l)=>t+l},gojs:{"runtime.wasmExit":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(l)},"runtime.wasmWrite":t=>{t>>>=0;const l=s(t+8),y=s(t+16),v=this.mem.getInt32(t+24,!0);j.fs.writeSync(l,new Uint8Array(this._inst.exports.mem.buffer,y,v))},"runtime.resetMemoryDataView":t=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,f(t+8,(m+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;const l=new Date().getTime();f(t+8,l/1e3),this.mem.setInt32(t+16,l%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;const l=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(l,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(l);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(t+8))),this.mem.setInt32(t+16,l,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(l)),this._scheduledTimeouts.delete(l)},"runtime.getRandomData":t=>{t>>>=0,crypto.getRandomValues(b(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;const l=this.mem.getUint32(t+8,!0);if(this._goRefCounts[l]--,this._goRefCounts[l]===0){const y=this._values[l];this._values[l]=null,this._ids.delete(y),this._idPool.push(l)}},"syscall/js.stringVal":t=>{t>>>=0,d(t+24,c(t+8))},"syscall/js.valueGet":t=>{t>>>=0;const l=Reflect.get(a(t+8),c(t+16));t=this._inst.exports.getsp()>>>0,d(t+32,l)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(a(t+8),c(t+16),a(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(a(t+8),c(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,d(t+24,Reflect.get(a(t+8),s(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(a(t+8),s(t+16),a(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{const l=a(t+8),y=Reflect.get(l,c(t+16)),v=x(t+32),$=Reflect.apply(y,l,v);t=this._inst.exports.getsp()>>>0,d(t+56,$),this.mem.setUint8(t+64,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+56,l),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{const l=a(t+8),y=x(t+16),v=Reflect.apply(l,void 0,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{const l=a(t+8),y=x(t+16),v=Reflect.construct(l,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,f(t+16,parseInt(a(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;const l=E.encode(String(a(t+8)));d(t+16,l),f(t+24,l.length)},"syscall/js.valueLoadString":t=>{t>>>=0;const l=a(t+8);b(t+16).set(l)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,a(t+8)instanceof a(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;const l=b(t+8),y=a(t+32);if(!(y instanceof Uint8Array||y instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;const l=a(t+8),y=b(t+16);if(!(l instanceof Uint8Array||l instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}run(f){return M(this,null,function*(){if(!(f instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=f,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,j,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[j,5],[this,6]]),this._idPool=[],this.exited=!1;let s=4096;const a=t=>{const l=s,y=E.encode(t+"\0");return new Uint8Array(this.mem.buffer,s,y.length).set(y),s+=y.length,s%8!==0&&(s+=8-s%8),l},d=this.argv.length,b=[];this.argv.forEach(t=>{b.push(a(t))}),b.push(0),Object.keys(this.env).sort().forEach(t=>{b.push(a(`${t}=${this.env[t]}`))}),b.push(0);const c=s;if(b.forEach(t=>{this.mem.setUint32(s,t,!0),this.mem.setUint32(s+4,0,!0),s+=8}),s>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(d,c),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(f){const s=this;return function(){const a={id:f,this:this,args:arguments};return s._pendingEvent=a,s._resume(),a.result}}}})(),N=({data:S})=>{let E=new TextDecoder,g=j.fs,f="";g.writeSync=(x,c)=>{if(x===1)C(c);else if(x===2){f+=E.decode(c);let m=f.split(`
`);m.length>1&&console.log(m.slice(0,-1).join(`
`)),f=m[m.length-1]}else throw new Error("Bad write");return c.length};let s=[],a,d=0;N=({data:x})=>(x.length>0&&(s.push(x),a&&a()),b),g.read=(x,c,m,t,l,y)=>{if(x!==0||m!==0||t!==c.length||l!==null)throw new Error("Bad read");if(s.length===0){a=()=>g.read(x,c,m,t,l,y);return}let v=s[0],$=Math.max(0,Math.min(t,v.length-d));c.set(v.subarray(d,d+$),m),d+=$,d===v.length&&(s.shift(),d=0),y(null,$)};let b=new j.Go;return b.argv=["","--service=0.25.11"],q(S,b).then(x=>{C(null),b.run(x)},x=>{C(x)}),b};function q(S,E){return M(this,null,function*(){if(S instanceof WebAssembly.Module)return WebAssembly.instantiate(S,E.importObject);const g=yield fetch(S);if(!g.ok)throw new Error(`Failed to download ${JSON.stringify(S)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(g.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(g,E.importObject)).instance;const f=yield g.arrayBuffer();return(yield WebAssembly.instantiate(f,E.importObject)).instance})}return S=>N(S)})(C=>o.onmessage({data:C})),L;o={onmessage:null,postMessage:C=>setTimeout(()=>{try{L=O({data:C})}catch(M){p(M)}}),terminate(){if(L)for(let C of L._scheduledTimeouts.values())clearTimeout(C)}}}let h,_;const u=new Promise((O,L)=>{h=O,_=L});o.onmessage=({data:O})=>{o.onmessage=({data:L})=>A(L),O?_(O):h()},o.postMessage(n||new URL(e,location.href).toString());let{readFromStdout:A,service:D}=pt({writeToStdin(O){o.postMessage(O)},isSync:!1,hasFS:!1,esbuild:be});yield u,Ie=()=>{o.terminate(),ye=void 0,Ie=void 0,Ue=void 0},Ue={build:O=>new Promise((L,C)=>{w.then(C),D.buildOrContext({callName:"build",refs:null,options:O,isTTY:!1,defaultWD:"/",callback:(M,N)=>M?C(M):L(N)})}),context:O=>new Promise((L,C)=>{w.then(C),D.buildOrContext({callName:"context",refs:null,options:O,isTTY:!1,defaultWD:"/",callback:(M,N)=>M?C(M):L(N)})}),transform:(O,L)=>new Promise((C,M)=>{w.then(M),D.transform({callName:"transform",refs:null,input:O,options:L||{},isTTY:!1,fs:{readFile(N,j){j(new Error("Internal error"),null)},writeFile(N,j){j(null)}},callback:(N,j)=>N?M(N):C(j)})}),formatMessages:(O,L)=>new Promise((C,M)=>{w.then(M),D.formatMessages({callName:"formatMessages",refs:null,messages:O,options:L,callback:(N,j)=>N?M(N):C(j)})}),analyzeMetafile:(O,L)=>new Promise((C,M)=>{w.then(M),D.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof O=="string"?O:JSON.stringify(O),options:L,callback:(N,j)=>N?M(N):C(j)})})}}),At=be})(H)})(Le)),Le.exports}var st=Lt();const Bt="/assets/esbuild-TYJnwsB5.wasm",Vt="/",zt="/",Jt="$PWA_NAME",Gt="standalone",qt="/",Ht="$PWA_SHORT_NAME",Yt="$PWA_DESCRIPTION",Kt="$PWA_VERSION",Qt="any",Xt=[],Zt=!1,en=["window-controls-overlay"],tn={client_mode:"focus-existing"},nn=[{src:"assets/icons/512x512.png",sizes:"512x512",type:"image/png"},{src:"assets/icons/192x192.png",sizes:"192x192",type:"image/png"},{src:"assets/icons/48x48.png",sizes:"48x48",type:"image/png"},{src:"assets/icons/24x24.png",sizes:"24x24",type:"image/png"}],rn=[],sn=["Cross Platform","fast","interactive"],ln=["mapping","geospatial","interaction"],an=[],on=[],cn={id:Vt,scope:zt,name:Jt,display:Gt,start_url:qt,short_name:Ht,description:Yt,version:Kt,orientation:Qt,related_applications:Xt,prefer_related_applications:Zt,display_override:en,launch_handler:tn,icons:nn,screenshots:rn,features:sn,categories:ln,shortcuts:an,widgets:on},un=H=>`
<!doctype html>
<html lang="en" translate="no">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="google" content="notranslate">
    
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="geospace-app" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    
    <link rel="icon" href="/assets/icons/icon_24.png" type="image/png" />
    <link rel="manifest" href="manifest.json" />
    
    <title>${H.title}</title>
    <link rel="stylesheet" href="app.css" />
    <style>
        html, body, .map-container {
            height: 100dvh;
            width: 100dvw;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        
        * {
            touch-action: none;
        }
    </style>
</head>
<body>
<div class="map-container"></div>
<script type="module">
    import {renderMap} from "./app.js"
    renderMap("div.map-container")
<\/script>
<script>
    if ('serviceWorker' in navigator) {
      window.onload = () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  if (confirm('A new version of the app is available. Reload to update?')) {
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                  }
                }
              });
            }
          });
          
          // Listen for service worker messages
          navigator.serviceWorker.addEventListener('message', event => {
            if (event.data && event.data.type === 'RELOAD') {
              window.location.reload();
            }
          });
        });
      }
    }
  <\/script>
</body>
</html>
`,fn=H=>{const B=[],I=[];return[...H.gsMap.controls||[],...H.gsMap.overlays||[]].forEach((Y,V)=>{const ie=Y.src,ee=`map_mod${V}`;B.push(`import ${ee} from '${ie}'`),I.push(`"${ie}": ${ee}`)}),`
import {gsLib} from "${H.libPath}"
${B.join(`
`)}
    
export const renderMap = (mapContainerSelector) => {
    const modules = {${I.join(",")}}
    return gsLib({
        containerSelector: mapContainerSelector,
        gsMap: ${JSON.stringify(H.gsMap)},
        mapOptions: {
            controls: {zoom: false, attribution: false}
        },
        env: ${JSON.stringify(H.env||{})},
        modules: modules
    })
}
`};function it(H,B){if(H.startsWith("/"))return H.slice(1);const I=B.split("/").filter(V=>V),J=H.split("/").filter(V=>V);if(H.startsWith("./")||H.startsWith("../")||!H.startsWith("/")){const V=I.slice(0,-1);I.length=0,I.push(...V)}for(const V of J)V!=="."&&(V===".."?I.length>0&&I.pop():I.push(V));return I.join("/")}let dn={name:"workspace",setup(H){H.onResolve({filter:/.*/},B=>{if(!/^(?!https?:\/\/).+/.test(B.path))return;let I=B.path;if(I.startsWith("/")&&(I=I.slice(1)),B.importer&&B.importer!==""){let J=B.importer;J.startsWith("virtual-workspace:")&&(J=J.slice(18));const Y=B.path.startsWith("./")||B.path.startsWith("../"),V=I.includes("/"),ie=J.startsWith("build/");Y?I=it(B.path,J):!V&&!ie&&(I=it(I,J))}return{path:I,namespace:"virtual-workspace"}}),H.onLoad({filter:/.*/},async B=>{if(!/^(?!https?:\/\/).+/.test(B.path))return;const I=B.path,J=await Fe.getWorkspace();let Y=await J.getResource(I);if(Y||(await J.listChildren(!0),Y=await J.getResource(I)),!Y)throw new Error(`Module not found: ${I}`);return{contents:await Y.getContents()}})}};class hn{constructor(){this.initialized=!1}async init(){this.initialized||(await st.initialize({wasmURL:Bt}),this.initialized=!0)}async downloadFile(B,I){const J=await Fe.getWorkspace(),Y=""+B;await fetch(Y).then(async V=>V.blob()).then(async V=>{await J.getResource(I,{create:!0}).then(ie=>ie).then(ie=>ie.saveContents(V))})}async build(B,I=void 0){await this.init();const J="build/gs-lib.js",Y="build/app.js",V="dist/index.html",ie="dist/app.js",ee=await Fe.getWorkspace();await ee.getResource("build")&&await(await ee.getResource("build")).delete(),await ee.getResource("dist")&&await(await ee.getResource("dist")).delete(),await this.downloadFile("/lib/gs-lib.js",J),await this.downloadFile("/lib/gs-lib.css","dist/app.css"),await this.downloadFile("/pwa/staticwebapp.config.json","dist/staticwebapp.config.json"),await this.downloadFile("/pwa/sw.js","dist/sw.js");const ve={...B,libPath:J},be=await(await ee.getResource("dist/sw.js")).getContents();await this.createFile("dist/sw.js",Z=>be.replace(/\$PWA_VERSION/g,Z.version),ve),await this.createFile("dist/manifest.json",Z=>{const le=JSON.parse(JSON.stringify(cn));return le.name=Z.title,le.short_name=Z.title,le.description=Z.title,le.version=Z.version,JSON.stringify(le)},ve),await this.downloadFile("/pwa/assets/icons/24x24.png","dist/assets/icons/24x24.png"),await this.downloadFile("/pwa/assets/icons/48x48.png","dist/assets/icons/48x48.png"),await this.downloadFile("/pwa/assets/icons/192x192.png","dist/assets/icons/192x192.png"),await this.downloadFile("/pwa/assets/icons/512x512.png","dist/assets/icons/512x512.png"),await this.downloadFile("/pwa/assets/icons/icon_24.png","dist/assets/icons/icon_24.png"),await this.downloadFile("/pwa/assets/icons/icon_48.png","dist/assets/icons/icon_48.png"),await this.downloadFile("/pwa/assets/icons/icon_192.png","dist/assets/icons/icon_192.png"),await this.downloadFile("/pwa/assets/icons/icon_512.png","dist/assets/icons/icon_512.png");const Ee=await ee.getResource("assets");Ee&&await Ee.copyTo("dist/assets"),await this.createFile(Y,fn,ve),await this.createFile(V,un,ve);const Me=await ee.getResource(ie,{create:!0}),Pe=await st.build({entryPoints:[Y],bundle:!0,outfile:"app.js",format:"esm",minify:!0,plugins:[dn]});await Me.saveContents(Pe.outputFiles[0].contents),(I===void 0||I)&&await(await ee.getResource("build")).delete(),ee.touch()}async createFile(B,I,J){await(await(await Fe.getWorkspace()).getResource(B,{create:!0})).saveContents(I(J))}async buildActiveMap(){const B=lt.get();B.isDirty()&&(await B.save(),nt("Map saved automatically to run build."));const I=B.input.data,J=JSON.parse(await I.getContents()),Y=await Ut(".env","envs/.env","env","envs/env","default.env","envs/default.env","prod.env","envs/prod.env");Y.BUILD_TIME=new Date,Ft.runAsync("Building map",()=>Be.build({title:I.getName(),gsMap:J,env:Y,version:Y.VERSION||"0.0.0"})).then(()=>{nt("🚀 Map files copied to 'dist' folder in your workspace!")}).catch(V=>{Mt(`💥 Map could not be built: ${V}`)})}}const Be=new hn;Nt.put("buildService",Be);const gn=({commandRegistry:H})=>{H.registerAll({command:{id:"build_map",name:"Build map",description:"Builds a publishable map from a .geospace file",parameters:[]},handler:{execute:B=>Be.buildActiveMap()},contribution:{target:"toolbar:map-editor",icon:"hammer",label:"Build map",disabled:()=>!(lt.get()instanceof Wt)}})};export{gn as default};
