import{w as Fe,a as it,t as nt,l as It,b as Ut,c as Ft,r as Mt,G as Nt}from"./main-DqQij7VL.js";import"./index-C4bFKT08.js";var We={exports:{}},rt;function Lt(){return rt||(rt=1,(function(X){(z=>{var q=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,K=Object.getOwnPropertyNames,Z=Object.prototype.hasOwnProperty,ge=(e,n)=>{for(var r in n)q(e,r,{get:n[r],enumerable:!0})},ae=(e,n,r,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let g of K(n))!Z.call(e,g)&&g!==r&&q(e,g,{get:()=>n[g],enumerable:!(o=Y(n,g))||o.enumerable});return e},ve=e=>ae(q({},"__esModule",{value:!0}),e),ce=(e,n,r)=>new Promise((o,g)=>{var w=u=>{try{_(r.next(u))}catch(A){g(A)}},h=u=>{try{_(r.throw(u))}catch(A){g(A)}},_=u=>u.done?o(u.value):Promise.resolve(u.value).then(w,h);_((r=r.apply(e,n)).next())}),be={};ge(be,{analyzeMetafile:()=>Et,analyzeMetafileSync:()=>Tt,build:()=>bt,buildSync:()=>St,context:()=>xt,default:()=>Rt,formatMessages:()=>_t,formatMessagesSync:()=>jt,initialize:()=>Ot,stop:()=>Pt,transform:()=>kt,transformSync:()=>$t,version:()=>vt}),z.exports=ve(be);function Ee(e){let n=o=>{if(o===null)r.write8(0);else if(typeof o=="boolean")r.write8(1),r.write8(+o);else if(typeof o=="number")r.write8(2),r.write32(o|0);else if(typeof o=="string")r.write8(3),r.write(Q(o));else if(o instanceof Uint8Array)r.write8(4),r.write(o);else if(o instanceof Array){r.write8(5),r.write32(o.length);for(let g of o)n(g)}else{let g=Object.keys(o);r.write8(6),r.write32(g.length);for(let w of g)r.write(Q(w)),n(o[w])}},r=new Te;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),n(e.value),Le(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function Me(e){let n=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return se(r.read());case 4:return r.read();case 5:{let h=r.read32(),_=[];for(let u=0;u<h;u++)_.push(n());return _}case 6:{let h=r.read32(),_={};for(let u=0;u<h;u++)_[se(r.read())]=n();return _}default:throw new Error("Invalid packet")}},r=new Te(e),o=r.read32(),g=(o&1)===0;o>>>=1;let w=n();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:g,value:w}}var Te=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let n=new Uint8Array((this.len+e)*2);n.set(this.buf),this.buf=n}return this.len+=e,this.len-e}write8(e){let n=this._write(1);this.buf[n]=e}write32(e){let n=this._write(4);Le(this.buf,e,n)}write(e){let n=this._write(4+e.length);Le(this.buf,e.length,n),this.buf.set(e,n+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return Ve(this.buf,this._read(4))}read(){let e=this.read32(),n=new Uint8Array(e),r=this._read(n.length);return n.set(this.buf.subarray(r,r+e)),n}},Q,se,Ne;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,n=new TextDecoder;Q=r=>e.encode(r),se=r=>n.decode(r),Ne='new TextEncoder().encode("")'}else if(typeof Buffer<"u")Q=e=>Buffer.from(e),se=e=>{let{buffer:n,byteOffset:r,byteLength:o}=e;return Buffer.from(n,r,o).toString()},Ne='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(Q("")instanceof Uint8Array))throw new Error(`Invariant violation: "${Ne} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function Ve(e,n){return e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24}function Le(e,n,r){e[r++]=n,e[r++]=n>>8,e[r++]=n>>16,e[r++]=n>>24}var H=JSON.stringify,ze="warning",Je="silent";function xe(e,n){const r=[];for(const o of e){if(te(o,n),o.indexOf(",")>=0)throw new Error(`Invalid ${n}: ${o}`);r.push(o)}return r.join(",")}var Pe=()=>null,B=e=>typeof e=="boolean"?null:"a boolean",T=e=>typeof e=="string"?null:"a string",Oe=e=>e instanceof RegExp?null:"a RegExp object",pe=e=>typeof e=="number"&&e===(e|0)?null:"an integer",lt=e=>typeof e=="number"&&e===(e|0)&&e>=0&&e<=65535?null:"a valid port number",Ge=e=>typeof e=="function"?null:"a function",ue=e=>Array.isArray(e)?null:"an array",ee=e=>Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"an array of strings",re=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",at=e=>typeof e=="object"&&e!==null?null:"an array or an object",ot=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",qe=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",He=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",ct=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",Ye=e=>typeof e=="string"||Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"a string or an array of strings",Ke=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array",ut=e=>typeof e=="string"||e instanceof URL?null:"a string or a URL";function i(e,n,r,o){let g=e[r];if(n[r+""]=!0,g===void 0)return;let w=o(g);if(w!==null)throw new Error(`${H(r)} must be ${w}`);return g}function J(e,n,r){for(let o in e)if(!(o in n))throw new Error(`Invalid option ${r}: ${H(o)}`)}function ft(e){let n=Object.create(null),r=i(e,n,"wasmURL",ut),o=i(e,n,"wasmModule",ot),g=i(e,n,"worker",B);return J(e,n,"in initialize() call"),{wasmURL:r,wasmModule:o,worker:g}}function Qe(e){let n;if(e!==void 0){n=Object.create(null);for(let r in e){let o=e[r];if(typeof o=="string"||o===!1)n[r]=o;else throw new Error(`Expected ${H(r)} in mangle cache to map to either a string or false`)}}return n}function Ce(e,n,r,o,g){let w=i(n,r,"color",B),h=i(n,r,"logLevel",T),_=i(n,r,"logLimit",pe);w!==void 0?e.push(`--color=${w}`):o&&e.push("--color=true"),e.push(`--log-level=${h||g}`),e.push(`--log-limit=${_||0}`)}function te(e,n,r){if(typeof e!="string")throw new Error(`Expected value for ${n}${r!==void 0?" "+H(r):""} to be a string, got ${typeof e} instead`);return e}function Xe(e,n,r){let o=i(n,r,"legalComments",T),g=i(n,r,"sourceRoot",T),w=i(n,r,"sourcesContent",B),h=i(n,r,"target",Ye),_=i(n,r,"format",T),u=i(n,r,"globalName",T),A=i(n,r,"mangleProps",Oe),D=i(n,r,"reserveProps",Oe),O=i(n,r,"mangleQuoted",B),L=i(n,r,"minify",B),C=i(n,r,"minifySyntax",B),F=i(n,r,"minifyWhitespace",B),M=i(n,r,"minifyIdentifiers",B),j=i(n,r,"lineLimit",pe),V=i(n,r,"drop",ee),S=i(n,r,"dropLabels",ee),E=i(n,r,"charset",T),p=i(n,r,"treeShaking",B),f=i(n,r,"ignoreAnnotations",B),s=i(n,r,"jsx",T),a=i(n,r,"jsxFactory",T),d=i(n,r,"jsxFragment",T),b=i(n,r,"jsxImportSource",T),x=i(n,r,"jsxDev",B),c=i(n,r,"jsxSideEffects",B),m=i(n,r,"define",re),t=i(n,r,"logOverride",re),l=i(n,r,"supported",re),y=i(n,r,"pure",ee),v=i(n,r,"keepNames",B),$=i(n,r,"platform",T),R=i(n,r,"tsconfigRaw",ct),W=i(n,r,"absPaths",ee);if(o&&e.push(`--legal-comments=${o}`),g!==void 0&&e.push(`--source-root=${g}`),w!==void 0&&e.push(`--sources-content=${w}`),h&&e.push(`--target=${xe(Array.isArray(h)?h:[h],"target")}`),_&&e.push(`--format=${_}`),u&&e.push(`--global-name=${u}`),$&&e.push(`--platform=${$}`),R&&e.push(`--tsconfig-raw=${typeof R=="string"?R:JSON.stringify(R)}`),L&&e.push("--minify"),C&&e.push("--minify-syntax"),F&&e.push("--minify-whitespace"),M&&e.push("--minify-identifiers"),j&&e.push(`--line-limit=${j}`),E&&e.push(`--charset=${E}`),p!==void 0&&e.push(`--tree-shaking=${p}`),f&&e.push("--ignore-annotations"),V)for(let k of V)e.push(`--drop:${te(k,"drop")}`);if(S&&e.push(`--drop-labels=${xe(S,"drop label")}`),W&&e.push(`--abs-paths=${xe(W,"abs paths")}`),A&&e.push(`--mangle-props=${De(A)}`),D&&e.push(`--reserve-props=${De(D)}`),O!==void 0&&e.push(`--mangle-quoted=${O}`),s&&e.push(`--jsx=${s}`),a&&e.push(`--jsx-factory=${a}`),d&&e.push(`--jsx-fragment=${d}`),b&&e.push(`--jsx-import-source=${b}`),x&&e.push("--jsx-dev"),c&&e.push("--jsx-side-effects"),m)for(let k in m){if(k.indexOf("=")>=0)throw new Error(`Invalid define: ${k}`);e.push(`--define:${k}=${te(m[k],"define",k)}`)}if(t)for(let k in t){if(k.indexOf("=")>=0)throw new Error(`Invalid log override: ${k}`);e.push(`--log-override:${k}=${te(t[k],"log override",k)}`)}if(l)for(let k in l){if(k.indexOf("=")>=0)throw new Error(`Invalid supported: ${k}`);const N=l[k];if(typeof N!="boolean")throw new Error(`Expected value for supported ${H(k)} to be a boolean, got ${typeof N} instead`);e.push(`--supported:${k}=${N}`)}if(y)for(let k of y)e.push(`--pure:${te(k,"pure")}`);v&&e.push("--keep-names")}function dt(e,n,r,o,g){var w;let h=[],_=[],u=Object.create(null),A=null,D=null;Ce(h,n,u,r,o),Xe(h,n,u);let O=i(n,u,"sourcemap",He),L=i(n,u,"bundle",B),C=i(n,u,"splitting",B),F=i(n,u,"preserveSymlinks",B),M=i(n,u,"metafile",B),j=i(n,u,"outfile",T),V=i(n,u,"outdir",T),S=i(n,u,"outbase",T),E=i(n,u,"tsconfig",T),p=i(n,u,"resolveExtensions",ee),f=i(n,u,"nodePaths",ee),s=i(n,u,"mainFields",ee),a=i(n,u,"conditions",ee),d=i(n,u,"external",ee),b=i(n,u,"packages",T),x=i(n,u,"alias",re),c=i(n,u,"loader",re),m=i(n,u,"outExtension",re),t=i(n,u,"publicPath",T),l=i(n,u,"entryNames",T),y=i(n,u,"chunkNames",T),v=i(n,u,"assetNames",T),$=i(n,u,"inject",ee),R=i(n,u,"banner",re),W=i(n,u,"footer",re),k=i(n,u,"entryPoints",at),N=i(n,u,"absWorkingDir",T),U=i(n,u,"stdin",re),I=(w=i(n,u,"write",B))!=null?w:g,ne=i(n,u,"allowOverwrite",B),G=i(n,u,"mangleCache",re);if(u.plugins=!0,J(n,u,`in ${e}() call`),O&&h.push(`--sourcemap${O===!0?"":`=${O}`}`),L&&h.push("--bundle"),ne&&h.push("--allow-overwrite"),C&&h.push("--splitting"),F&&h.push("--preserve-symlinks"),M&&h.push("--metafile"),j&&h.push(`--outfile=${j}`),V&&h.push(`--outdir=${V}`),S&&h.push(`--outbase=${S}`),E&&h.push(`--tsconfig=${E}`),b&&h.push(`--packages=${b}`),p&&h.push(`--resolve-extensions=${xe(p,"resolve extension")}`),t&&h.push(`--public-path=${t}`),l&&h.push(`--entry-names=${l}`),y&&h.push(`--chunk-names=${y}`),v&&h.push(`--asset-names=${v}`),s&&h.push(`--main-fields=${xe(s,"main field")}`),a&&h.push(`--conditions=${xe(a,"condition")}`),d)for(let P of d)h.push(`--external:${te(P,"external")}`);if(x)for(let P in x){if(P.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${P}`);h.push(`--alias:${P}=${te(x[P],"alias",P)}`)}if(R)for(let P in R){if(P.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${P}`);h.push(`--banner:${P}=${te(R[P],"banner",P)}`)}if(W)for(let P in W){if(P.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${P}`);h.push(`--footer:${P}=${te(W[P],"footer",P)}`)}if($)for(let P of $)h.push(`--inject:${te(P,"inject")}`);if(c)for(let P in c){if(P.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${P}`);h.push(`--loader:${P}=${te(c[P],"loader",P)}`)}if(m)for(let P in m){if(P.indexOf("=")>=0)throw new Error(`Invalid out extension: ${P}`);h.push(`--out-extension:${P}=${te(m[P],"out extension",P)}`)}if(k)if(Array.isArray(k))for(let P=0,he=k.length;P<he;P++){let ie=k[P];if(typeof ie=="object"&&ie!==null){let oe=Object.create(null),me=i(ie,oe,"in",T),le=i(ie,oe,"out",T);if(J(ie,oe,"in entry point at index "+P),me===void 0)throw new Error('Missing property "in" for entry point at index '+P);if(le===void 0)throw new Error('Missing property "out" for entry point at index '+P);_.push([le,me])}else _.push(["",te(ie,"entry point at index "+P)])}else for(let P in k)_.push([P,te(k[P],"entry point",P)]);if(U){let P=Object.create(null),he=i(U,P,"contents",Ke),ie=i(U,P,"resolveDir",T),oe=i(U,P,"sourcefile",T),me=i(U,P,"loader",T);J(U,P,'in "stdin" object'),oe&&h.push(`--sourcefile=${oe}`),me&&h.push(`--loader=${me}`),ie&&(D=ie),typeof he=="string"?A=Q(he):he instanceof Uint8Array&&(A=he)}let de=[];if(f)for(let P of f)P+="",de.push(P);return{entries:_,flags:h,write:I,stdinContents:A,stdinResolveDir:D,absWorkingDir:N,nodePaths:de,mangleCache:Qe(G)}}function ht(e,n,r,o){let g=[],w=Object.create(null);Ce(g,n,w,r,o),Xe(g,n,w);let h=i(n,w,"sourcemap",He),_=i(n,w,"sourcefile",T),u=i(n,w,"loader",T),A=i(n,w,"banner",T),D=i(n,w,"footer",T),O=i(n,w,"mangleCache",re);return J(n,w,`in ${e}() call`),h&&g.push(`--sourcemap=${h===!0?"external":h}`),_&&g.push(`--sourcefile=${_}`),u&&g.push(`--loader=${u}`),A&&g.push(`--banner=${A}`),D&&g.push(`--footer=${D}`),{flags:g,mangleCache:Qe(O)}}function mt(e){const n={},r={didClose:!1,reason:""};let o={},g=0,w=0,h=new Uint8Array(16*1024),_=0,u=E=>{let p=_+E.length;if(p>h.length){let s=new Uint8Array(p*2);s.set(h),h=s}h.set(E,_),_+=E.length;let f=0;for(;f+4<=_;){let s=Ve(h,f);if(f+4+s>_)break;f+=4,F(h.subarray(f,f+s)),f+=s}f>0&&(h.copyWithin(0,f,_),_-=f)},A=E=>{r.didClose=!0,E&&(r.reason=": "+(E.message||E));const p="The service was stopped"+r.reason;for(let f in o)o[f](p,null);o={}},D=(E,p,f)=>{if(r.didClose)return f("The service is no longer running"+r.reason,null);let s=g++;o[s]=(a,d)=>{try{f(a,d)}finally{E&&E.unref()}},E&&E.ref(),e.writeToStdin(Ee({id:s,isRequest:!0,value:p}))},O=(E,p)=>{if(r.didClose)throw new Error("The service is no longer running"+r.reason);e.writeToStdin(Ee({id:E,isRequest:!1,value:p}))},L=(E,p)=>ce(null,null,function*(){try{if(p.command==="ping"){O(E,{});return}if(typeof p.key=="number"){const f=n[p.key];if(!f)return;const s=f[p.command];if(s){yield s(E,p);return}}throw new Error("Invalid command: "+p.command)}catch(f){const s=[we(f,e,null,void 0,"")];try{O(E,{errors:s})}catch{}}}),C=!0,F=E=>{if(C){C=!1;let f=String.fromCharCode(...E);if(f!=="0.25.11")throw new Error(`Cannot start service: Host version "0.25.11" does not match binary version ${H(f)}`);return}let p=Me(E);if(p.isRequest)L(p.id,p.value);else{let f=o[p.id];delete o[p.id],p.value.error?f(p.value.error,{}):f(null,p.value)}};return{readFromStdout:u,afterClose:A,service:{buildOrContext:({callName:E,refs:p,options:f,isTTY:s,defaultWD:a,callback:d})=>{let b=0;const x=w++,c={},m={ref(){++b===1&&p&&p.ref()},unref(){--b===0&&(delete n[x],p&&p.unref())}};n[x]=c,m.ref(),gt(E,x,D,O,m,e,c,f,s,a,(t,l)=>{try{d(t,l)}finally{m.unref()}})},transform:({callName:E,refs:p,input:f,options:s,isTTY:a,fs:d,callback:b})=>{const x=Ze();let c=m=>{try{if(typeof f!="string"&&!(f instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:t,mangleCache:l}=ht(E,s,a,Je),y={command:"transform",flags:t,inputFS:m!==null,input:m!==null?Q(m):typeof f=="string"?Q(f):f};l&&(y.mangleCache=l),D(p,y,(v,$)=>{if(v)return b(new Error(v),null);let R=ke($.errors,x),W=ke($.warnings,x),k=1,N=()=>{if(--k===0){let U={warnings:W,code:$.code,map:$.map,mangleCache:void 0,legalComments:void 0};"legalComments"in $&&(U.legalComments=$?.legalComments),$.mangleCache&&(U.mangleCache=$?.mangleCache),b(null,U)}};if(R.length>0)return b(Se("Transform failed",R,W),null);$.codeFS&&(k++,d.readFile($.code,(U,I)=>{U!==null?b(U,null):($.code=I,N())})),$.mapFS&&(k++,d.readFile($.map,(U,I)=>{U!==null?b(U,null):($.map=I,N())})),N()})}catch(t){let l=[];try{Ce(l,s,{},a,Je)}catch{}const y=we(t,e,x,void 0,"");D(p,{command:"error",flags:l,error:y},()=>{y.detail=x.load(y.detail),b(Se("Transform failed",[y],[]),null)})}};if((typeof f=="string"||f instanceof Uint8Array)&&f.length>1024*1024){let m=c;c=()=>d.writeFile(f,m)}c(null)},formatMessages:({callName:E,refs:p,messages:f,options:s,callback:a})=>{if(!s)throw new Error(`Missing second argument in ${E}() call`);let d={},b=i(s,d,"kind",T),x=i(s,d,"color",B),c=i(s,d,"terminalWidth",pe);if(J(s,d,`in ${E}() call`),b===void 0)throw new Error(`Missing "kind" in ${E}() call`);if(b!=="error"&&b!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${E}() call`);let m={command:"format-msgs",messages:fe(f,"messages",null,"",c),isWarning:b==="warning"};x!==void 0&&(m.color=x),c!==void 0&&(m.terminalWidth=c),D(p,m,(t,l)=>{if(t)return a(new Error(t),null);a(null,l.messages)})},analyzeMetafile:({callName:E,refs:p,metafile:f,options:s,callback:a})=>{s===void 0&&(s={});let d={},b=i(s,d,"color",B),x=i(s,d,"verbose",B);J(s,d,`in ${E}() call`);let c={command:"analyze-metafile",metafile:f};b!==void 0&&(c.color=b),x!==void 0&&(c.verbose=x),D(p,c,(m,t)=>{if(m)return a(new Error(m),null);a(null,t.result)})}}}}function gt(e,n,r,o,g,w,h,_,u,A,D){const O=Ze(),L=e==="context",C=(j,V)=>{const S=[];try{Ce(S,_,{},u,ze)}catch{}const E=we(j,w,O,void 0,V);r(g,{command:"error",flags:S,error:E},()=>{E.detail=O.load(E.detail),D(Se(L?"Context failed":"Build failed",[E],[]),null)})};let F;if(typeof _=="object"){const j=_.plugins;if(j!==void 0){if(!Array.isArray(j))return C(new Error('"plugins" must be an array'),"");F=j}}if(F&&F.length>0){if(w.isSync)return C(new Error("Cannot use plugins in synchronous API calls"),"");pt(n,r,o,g,w,h,_,F,O).then(j=>{if(!j.ok)return C(j.error,j.pluginName);try{M(j.requestPlugins,j.runOnEndCallbacks,j.scheduleOnDisposeCallbacks)}catch(V){C(V,"")}},j=>C(j,""));return}try{M(null,(j,V)=>V([],[]),()=>{})}catch(j){C(j,"")}function M(j,V,S){const E=w.hasFS,{entries:p,flags:f,write:s,stdinContents:a,stdinResolveDir:d,absWorkingDir:b,nodePaths:x,mangleCache:c}=dt(e,_,u,ze,E);if(s&&!w.hasFS)throw new Error('The "write" option is unavailable in this environment');const m={command:"build",key:n,entries:p,flags:f,write:s,stdinContents:a,stdinResolveDir:d,absWorkingDir:b||A,nodePaths:x,context:L};j&&(m.plugins=j),c&&(m.mangleCache=c);const t=(v,$)=>{const R={errors:ke(v.errors,O),warnings:ke(v.warnings,O),outputFiles:void 0,metafile:void 0,mangleCache:void 0},W=R.errors.slice(),k=R.warnings.slice();v.outputFiles&&(R.outputFiles=v.outputFiles.map(yt)),v.metafile&&(R.metafile=JSON.parse(v.metafile)),v.mangleCache&&(R.mangleCache=v.mangleCache),v.writeToStdout!==void 0&&console.log(se(v.writeToStdout).replace(/\n$/,"")),V(R,(N,U)=>{if(W.length>0||N.length>0){const I=Se("Build failed",W.concat(N),k.concat(U));return $(I,null,N,U)}$(null,R,N,U)})};let l,y;L&&(h["on-end"]=(v,$)=>new Promise(R=>{t($,(W,k,N,U)=>{const I={errors:N,warnings:U};y&&y(W,k),l=void 0,y=void 0,o(v,I),R()})})),r(g,m,(v,$)=>{if(v)return D(new Error(v),null);if(!L)return t($,(k,N)=>(S(),D(k,N)));if($.errors.length>0)return D(Se("Context failed",$.errors,$.warnings),null);let R=!1;const W={rebuild:()=>(l||(l=new Promise((k,N)=>{let U;y=(ne,G)=>{U||(U=()=>ne?N(ne):k(G))};const I=()=>{r(g,{command:"rebuild",key:n},(G,de)=>{G?N(new Error(G)):U?U():I()})};I()})),l),watch:(k={})=>new Promise((N,U)=>{if(!w.hasFS)throw new Error('Cannot use the "watch" API in this environment');const I={},ne=i(k,I,"delay",pe);J(k,I,"in watch() call");const G={command:"watch",key:n};ne&&(G.delay=ne),r(g,G,de=>{de?U(new Error(de)):N(void 0)})}),serve:(k={})=>new Promise((N,U)=>{if(!w.hasFS)throw new Error('Cannot use the "serve" API in this environment');const I={},ne=i(k,I,"port",lt),G=i(k,I,"host",T),de=i(k,I,"servedir",T),P=i(k,I,"keyfile",T),he=i(k,I,"certfile",T),ie=i(k,I,"fallback",T),oe=i(k,I,"cors",re),me=i(k,I,"onRequest",Ge);J(k,I,"in serve() call");const le={command:"serve",key:n,onRequest:!!me};if(ne!==void 0&&(le.port=ne),G!==void 0&&(le.host=G),de!==void 0&&(le.servedir=de),P!==void 0&&(le.keyfile=P),he!==void 0&&(le.certfile=he),ie!==void 0&&(le.fallback=ie),oe){const je={},_e=i(oe,je,"origin",Ye);J(oe,je,'on "cors" object'),Array.isArray(_e)?le.corsOrigin=_e:_e!==void 0&&(le.corsOrigin=[_e])}r(g,le,(je,_e)=>{if(je)return U(new Error(je));me&&(h["serve-request"]=(At,Dt)=>{me(Dt.args),o(At,{})}),N(_e)})}),cancel:()=>new Promise(k=>{if(R)return k();r(g,{command:"cancel",key:n},()=>{k()})}),dispose:()=>new Promise(k=>{if(R)return k();R=!0,r(g,{command:"dispose",key:n},()=>{k(),S(),g.unref()})})};g.ref(),D(null,W)})}}var pt=(e,n,r,o,g,w,h,_,u)=>ce(null,null,function*(){let A=[],D=[],O={},L={},C=[],F=0,M=0,j=[],V=!1;_=[..._];for(let p of _){let f={};if(typeof p!="object")throw new Error(`Plugin at index ${M} must be an object`);const s=i(p,f,"name",T);if(typeof s!="string"||s==="")throw new Error(`Plugin at index ${M} is missing a name`);try{let a=i(p,f,"setup",Ge);if(typeof a!="function")throw new Error("Plugin is missing a setup function");J(p,f,`on plugin ${H(s)}`);let d={name:s,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};M++;let x=a({initialOptions:h,resolve:(c,m={})=>{if(!V)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof c!="string")throw new Error("The path to resolve must be a string");let t=Object.create(null),l=i(m,t,"pluginName",T),y=i(m,t,"importer",T),v=i(m,t,"namespace",T),$=i(m,t,"resolveDir",T),R=i(m,t,"kind",T),W=i(m,t,"pluginData",Pe),k=i(m,t,"with",re);return J(m,t,"in resolve() call"),new Promise((N,U)=>{const I={command:"resolve",path:c,key:e,pluginName:s};if(l!=null&&(I.pluginName=l),y!=null&&(I.importer=y),v!=null&&(I.namespace=v),$!=null&&(I.resolveDir=$),R!=null)I.kind=R;else throw new Error('Must specify "kind" when calling "resolve"');W!=null&&(I.pluginData=u.store(W)),k!=null&&(I.with=wt(k,"with")),n(o,I,(ne,G)=>{ne!==null?U(new Error(ne)):N({errors:ke(G.errors,u),warnings:ke(G.warnings,u),path:G.path,external:G.external,sideEffects:G.sideEffects,namespace:G.namespace,suffix:G.suffix,pluginData:u.load(G.pluginData)})})})},onStart(c){let m='This error came from the "onStart" callback registered here:',t=Re(new Error(m),g,"onStart");A.push({name:s,callback:c,note:t}),d.onStart=!0},onEnd(c){let m='This error came from the "onEnd" callback registered here:',t=Re(new Error(m),g,"onEnd");D.push({name:s,callback:c,note:t}),d.onEnd=!0},onResolve(c,m){let t='This error came from the "onResolve" callback registered here:',l=Re(new Error(t),g,"onResolve"),y={},v=i(c,y,"filter",Oe),$=i(c,y,"namespace",T);if(J(c,y,`in onResolve() call for plugin ${H(s)}`),v==null)throw new Error("onResolve() call is missing a filter");let R=F++;O[R]={name:s,callback:m,note:l},d.onResolve.push({id:R,filter:De(v),namespace:$||""})},onLoad(c,m){let t='This error came from the "onLoad" callback registered here:',l=Re(new Error(t),g,"onLoad"),y={},v=i(c,y,"filter",Oe),$=i(c,y,"namespace",T);if(J(c,y,`in onLoad() call for plugin ${H(s)}`),v==null)throw new Error("onLoad() call is missing a filter");let R=F++;L[R]={name:s,callback:m,note:l},d.onLoad.push({id:R,filter:De(v),namespace:$||""})},onDispose(c){C.push(c)},esbuild:g.esbuild});x&&(yield x),j.push(d)}catch(a){return{ok:!1,error:a,pluginName:s}}}w["on-start"]=(p,f)=>ce(null,null,function*(){u.clear();let s={errors:[],warnings:[]};yield Promise.all(A.map(a=>ce(null,[a],function*({name:d,callback:b,note:x}){try{let c=yield b();if(c!=null){if(typeof c!="object")throw new Error(`Expected onStart() callback in plugin ${H(d)} to return an object`);let m={},t=i(c,m,"errors",ue),l=i(c,m,"warnings",ue);J(c,m,`from onStart() callback in plugin ${H(d)}`),t!=null&&s.errors.push(...fe(t,"errors",u,d,void 0)),l!=null&&s.warnings.push(...fe(l,"warnings",u,d,void 0))}}catch(c){s.errors.push(we(c,g,u,x&&x(),d))}}))),r(p,s)}),w["on-resolve"]=(p,f)=>ce(null,null,function*(){let s={},a="",d,b;for(let x of f.ids)try{({name:a,callback:d,note:b}=O[x]);let c=yield d({path:f.path,importer:f.importer,namespace:f.namespace,resolveDir:f.resolveDir,kind:f.kind,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onResolve() callback in plugin ${H(a)} to return an object`);let m={},t=i(c,m,"pluginName",T),l=i(c,m,"path",T),y=i(c,m,"namespace",T),v=i(c,m,"suffix",T),$=i(c,m,"external",B),R=i(c,m,"sideEffects",B),W=i(c,m,"pluginData",Pe),k=i(c,m,"errors",ue),N=i(c,m,"warnings",ue),U=i(c,m,"watchFiles",ee),I=i(c,m,"watchDirs",ee);J(c,m,`from onResolve() callback in plugin ${H(a)}`),s.id=x,t!=null&&(s.pluginName=t),l!=null&&(s.path=l),y!=null&&(s.namespace=y),v!=null&&(s.suffix=v),$!=null&&(s.external=$),R!=null&&(s.sideEffects=R),W!=null&&(s.pluginData=u.store(W)),k!=null&&(s.errors=fe(k,"errors",u,a,void 0)),N!=null&&(s.warnings=fe(N,"warnings",u,a,void 0)),U!=null&&(s.watchFiles=Ae(U,"watchFiles")),I!=null&&(s.watchDirs=Ae(I,"watchDirs"));break}}catch(c){s={id:x,errors:[we(c,g,u,b&&b(),a)]};break}r(p,s)}),w["on-load"]=(p,f)=>ce(null,null,function*(){let s={},a="",d,b;for(let x of f.ids)try{({name:a,callback:d,note:b}=L[x]);let c=yield d({path:f.path,namespace:f.namespace,suffix:f.suffix,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onLoad() callback in plugin ${H(a)} to return an object`);let m={},t=i(c,m,"pluginName",T),l=i(c,m,"contents",Ke),y=i(c,m,"resolveDir",T),v=i(c,m,"pluginData",Pe),$=i(c,m,"loader",T),R=i(c,m,"errors",ue),W=i(c,m,"warnings",ue),k=i(c,m,"watchFiles",ee),N=i(c,m,"watchDirs",ee);J(c,m,`from onLoad() callback in plugin ${H(a)}`),s.id=x,t!=null&&(s.pluginName=t),l instanceof Uint8Array?s.contents=l:l!=null&&(s.contents=Q(l)),y!=null&&(s.resolveDir=y),v!=null&&(s.pluginData=u.store(v)),$!=null&&(s.loader=$),R!=null&&(s.errors=fe(R,"errors",u,a,void 0)),W!=null&&(s.warnings=fe(W,"warnings",u,a,void 0)),k!=null&&(s.watchFiles=Ae(k,"watchFiles")),N!=null&&(s.watchDirs=Ae(N,"watchDirs"));break}}catch(c){s={id:x,errors:[we(c,g,u,b&&b(),a)]};break}r(p,s)});let S=(p,f)=>f([],[]);D.length>0&&(S=(p,f)=>{ce(null,null,function*(){const s=[],a=[];for(const{name:d,callback:b,note:x}of D){let c,m;try{const t=yield b(p);if(t!=null){if(typeof t!="object")throw new Error(`Expected onEnd() callback in plugin ${H(d)} to return an object`);let l={},y=i(t,l,"errors",ue),v=i(t,l,"warnings",ue);J(t,l,`from onEnd() callback in plugin ${H(d)}`),y!=null&&(c=fe(y,"errors",u,d,void 0)),v!=null&&(m=fe(v,"warnings",u,d,void 0))}}catch(t){c=[we(t,g,u,x&&x(),d)]}if(c){s.push(...c);try{p.errors.push(...c)}catch{}}if(m){a.push(...m);try{p.warnings.push(...m)}catch{}}}f(s,a)})});let E=()=>{for(const p of C)setTimeout(()=>p(),0)};return V=!0,{ok:!0,requestPlugins:j,runOnEndCallbacks:S,scheduleOnDisposeCallbacks:E}});function Ze(){const e=new Map;let n=0;return{clear(){e.clear()},load(r){return e.get(r)},store(r){if(r===void 0)return-1;const o=n++;return e.set(o,r),o}}}function Re(e,n,r){let o,g=!1;return()=>{if(g)return o;g=!0;try{let w=(e.stack+"").split(`
`);w.splice(1,1);let h=et(n,w,r);if(h)return o={text:e.message,location:h},o}catch{}}}function we(e,n,r,o,g){let w="Internal error",h=null;try{w=(e&&e.message||e)+""}catch{}try{h=et(n,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:g,text:w,location:h,notes:o?[o]:[],detail:r?r.store(e):-1}}function et(e,n,r){let o="    at ";if(e.readFileSync&&!n[0].startsWith(o)&&n[1].startsWith(o))for(let g=1;g<n.length;g++){let w=n[g];if(w.startsWith(o))for(w=w.slice(o.length);;){let h=/^(?:new |async )?\S+ \((.*)\)$/.exec(w);if(h){w=h[1];continue}if(h=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(w),h){w=h[1];continue}if(h=/^(\S+):(\d+):(\d+)$/.exec(w),h){let _;try{_=e.readFileSync(h[1],"utf8")}catch{break}let u=_.split(/\r\n|\r|\n|\u2028|\u2029/)[+h[2]-1]||"",A=+h[3]-1,D=u.slice(A,A+r.length)===r?r.length:0;return{file:h[1],namespace:"file",line:+h[2],column:Q(u.slice(0,A)).length,length:Q(u.slice(A,A+D)).length,lineText:u+`
`+n.slice(1).join(`
`),suggestion:""}}break}}return null}function Se(e,n,r){let o=5;e+=n.length<1?"":` with ${n.length} error${n.length<2?"":"s"}:`+n.slice(0,o+1).map((w,h)=>{if(h===o)return`
...`;if(!w.location)return`
error: ${w.text}`;let{file:_,line:u,column:A}=w.location,D=w.pluginName?`[plugin: ${w.pluginName}] `:"";return`
${_}:${u}:${A}: ERROR: ${D}${w.text}`}).join("");let g=new Error(e);for(const[w,h]of[["errors",n],["warnings",r]])Object.defineProperty(g,w,{configurable:!0,enumerable:!0,get:()=>h,set:_=>Object.defineProperty(g,w,{configurable:!0,enumerable:!0,value:_})});return g}function ke(e,n){for(const r of e)r.detail=n.load(r.detail);return e}function tt(e,n,r){if(e==null)return null;let o={},g=i(e,o,"file",T),w=i(e,o,"namespace",T),h=i(e,o,"line",pe),_=i(e,o,"column",pe),u=i(e,o,"length",pe),A=i(e,o,"lineText",T),D=i(e,o,"suggestion",T);if(J(e,o,n),A){const O=A.slice(0,(_&&_>0?_:0)+(u&&u>0?u:0)+(r&&r>0?r:80));!/[\x7F-\uFFFF]/.test(O)&&!/\n/.test(A)&&(A=O)}return{file:g||"",namespace:w||"",line:h||0,column:_||0,length:u||0,lineText:A||"",suggestion:D||""}}function fe(e,n,r,o,g){let w=[],h=0;for(const _ of e){let u={},A=i(_,u,"id",T),D=i(_,u,"pluginName",T),O=i(_,u,"text",T),L=i(_,u,"location",qe),C=i(_,u,"notes",ue),F=i(_,u,"detail",Pe),M=`in element ${h} of "${n}"`;J(_,u,M);let j=[];if(C)for(const V of C){let S={},E=i(V,S,"text",T),p=i(V,S,"location",qe);J(V,S,M),j.push({text:E||"",location:tt(p,M,g)})}w.push({id:A||"",pluginName:D||o,text:O||"",location:tt(L,M,g),notes:j,detail:r?r.store(F):-1}),h++}return w}function Ae(e,n){const r=[];for(const o of e){if(typeof o!="string")throw new Error(`${H(n)} must be an array of strings`);r.push(o)}return r}function wt(e,n){const r=Object.create(null);for(const o in e){const g=e[o];if(typeof g!="string")throw new Error(`key ${H(o)} in object ${H(n)} must be a string`);r[o]=g}return r}function yt({path:e,contents:n,hash:r}){let o=null;return{path:e,contents:n,hash:r,get text(){const g=this.contents;return(o===null||g!==n)&&(n=g,o=se(g)),o}}}function De(e){let n=e.source;return e.flags&&(n=`(?${e.flags})${n}`),n}var vt="0.25.11",bt=e=>$e().build(e),xt=e=>$e().context(e),kt=(e,n)=>$e().transform(e,n),_t=(e,n)=>$e().formatMessages(e,n),Et=(e,n)=>$e().analyzeMetafile(e,n),St=()=>{throw new Error('The "buildSync" API only works in node')},$t=()=>{throw new Error('The "transformSync" API only works in node')},jt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Tt=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Pt=()=>(Ie&&Ie(),Promise.resolve()),ye,Ie,Ue,$e=()=>{if(Ue)return Ue;throw ye?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Ot=e=>{e=ft(e||{});let n=e.wasmURL,r=e.wasmModule,o=e.worker!==!1;if(!n&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(ye)throw new Error('Cannot call "initialize" more than once');return ye=Ct(n||"",r,o),ye.catch(()=>{ye=void 0}),ye},Ct=(e,n,r)=>ce(null,null,function*(){let o,g;const w=new Promise(O=>g=O);if(r){let O=new Blob([`onmessage=((postMessage) => {
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
    })(postMessage)`],{type:"text/javascript"});o=new Worker(URL.createObjectURL(O))}else{let O=(C=>{var F=(S,E,p)=>new Promise((f,s)=>{var a=x=>{try{b(p.next(x))}catch(c){s(c)}},d=x=>{try{b(p.throw(x))}catch(c){s(c)}},b=x=>x.done?f(x.value):Promise.resolve(x.value).then(a,d);b((p=p.apply(S,E)).next())});let M,j={};for(let S=self;S;S=Object.getPrototypeOf(S))for(let E of Object.getOwnPropertyNames(S))E in j||Object.defineProperty(j,E,{get:()=>self[E]});(()=>{const S=()=>{const f=new Error("not implemented");return f.code="ENOSYS",f};if(!j.fs){let f="";j.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(s,a){f+=p.decode(a);const d=f.lastIndexOf(`
`);return d!=-1&&(console.log(f.substring(0,d)),f=f.substring(d+1)),a.length},write(s,a,d,b,x,c){if(d!==0||b!==a.length||x!==null){c(S());return}const m=this.writeSync(s,a);c(null,m)},chmod(s,a,d){d(S())},chown(s,a,d,b){b(S())},close(s,a){a(S())},fchmod(s,a,d){d(S())},fchown(s,a,d,b){b(S())},fstat(s,a){a(S())},fsync(s,a){a(null)},ftruncate(s,a,d){d(S())},lchown(s,a,d,b){b(S())},link(s,a,d){d(S())},lstat(s,a){a(S())},mkdir(s,a,d){d(S())},open(s,a,d,b){b(S())},read(s,a,d,b,x,c){c(S())},readdir(s,a){a(S())},readlink(s,a){a(S())},rename(s,a,d){d(S())},rmdir(s,a){a(S())},stat(s,a){a(S())},symlink(s,a,d){d(S())},truncate(s,a,d){d(S())},unlink(s,a){a(S())},utimes(s,a,d,b){b(S())}}}if(j.process||(j.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw S()},pid:-1,ppid:-1,umask(){throw S()},cwd(){throw S()},chdir(){throw S()}}),!j.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!j.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!j.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!j.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const E=new TextEncoder("utf-8"),p=new TextDecoder("utf-8");j.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const f=(t,l)=>{this.mem.setUint32(t+0,l,!0),this.mem.setUint32(t+4,Math.floor(l/4294967296),!0)},s=t=>{const l=this.mem.getUint32(t+0,!0),y=this.mem.getInt32(t+4,!0);return l+y*4294967296},a=t=>{const l=this.mem.getFloat64(t,!0);if(l===0)return;if(!isNaN(l))return l;const y=this.mem.getUint32(t,!0);return this._values[y]},d=(t,l)=>{if(typeof l=="number"&&l!==0){if(isNaN(l)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,l,!0);return}if(l===void 0){this.mem.setFloat64(t,0,!0);return}let v=this._ids.get(l);v===void 0&&(v=this._idPool.pop(),v===void 0&&(v=this._values.length),this._values[v]=l,this._goRefCounts[v]=0,this._ids.set(l,v)),this._goRefCounts[v]++;let $=0;switch(typeof l){case"object":l!==null&&($=1);break;case"string":$=2;break;case"symbol":$=3;break;case"function":$=4;break}this.mem.setUint32(t+4,2146959360|$,!0),this.mem.setUint32(t,v,!0)},b=t=>{const l=s(t+0),y=s(t+8);return new Uint8Array(this._inst.exports.mem.buffer,l,y)},x=t=>{const l=s(t+0),y=s(t+8),v=new Array(y);for(let $=0;$<y;$++)v[$]=a(l+$*8);return v},c=t=>{const l=s(t+0),y=s(t+8);return p.decode(new DataView(this._inst.exports.mem.buffer,l,y))},m=Date.now()-performance.now();this.importObject={_gotest:{add:(t,l)=>t+l},gojs:{"runtime.wasmExit":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(l)},"runtime.wasmWrite":t=>{t>>>=0;const l=s(t+8),y=s(t+16),v=this.mem.getInt32(t+24,!0);j.fs.writeSync(l,new Uint8Array(this._inst.exports.mem.buffer,y,v))},"runtime.resetMemoryDataView":t=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,f(t+8,(m+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;const l=new Date().getTime();f(t+8,l/1e3),this.mem.setInt32(t+16,l%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;const l=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(l,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(l);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(t+8))),this.mem.setInt32(t+16,l,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(l)),this._scheduledTimeouts.delete(l)},"runtime.getRandomData":t=>{t>>>=0,crypto.getRandomValues(b(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;const l=this.mem.getUint32(t+8,!0);if(this._goRefCounts[l]--,this._goRefCounts[l]===0){const y=this._values[l];this._values[l]=null,this._ids.delete(y),this._idPool.push(l)}},"syscall/js.stringVal":t=>{t>>>=0,d(t+24,c(t+8))},"syscall/js.valueGet":t=>{t>>>=0;const l=Reflect.get(a(t+8),c(t+16));t=this._inst.exports.getsp()>>>0,d(t+32,l)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(a(t+8),c(t+16),a(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(a(t+8),c(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,d(t+24,Reflect.get(a(t+8),s(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(a(t+8),s(t+16),a(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{const l=a(t+8),y=Reflect.get(l,c(t+16)),v=x(t+32),$=Reflect.apply(y,l,v);t=this._inst.exports.getsp()>>>0,d(t+56,$),this.mem.setUint8(t+64,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+56,l),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{const l=a(t+8),y=x(t+16),v=Reflect.apply(l,void 0,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{const l=a(t+8),y=x(t+16),v=Reflect.construct(l,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,f(t+16,parseInt(a(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;const l=E.encode(String(a(t+8)));d(t+16,l),f(t+24,l.length)},"syscall/js.valueLoadString":t=>{t>>>=0;const l=a(t+8);b(t+16).set(l)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,a(t+8)instanceof a(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;const l=b(t+8),y=a(t+32);if(!(y instanceof Uint8Array||y instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;const l=a(t+8),y=b(t+16);if(!(l instanceof Uint8Array||l instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}run(f){return F(this,null,function*(){if(!(f instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=f,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,j,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[j,5],[this,6]]),this._idPool=[],this.exited=!1;let s=4096;const a=t=>{const l=s,y=E.encode(t+"\0");return new Uint8Array(this.mem.buffer,s,y.length).set(y),s+=y.length,s%8!==0&&(s+=8-s%8),l},d=this.argv.length,b=[];this.argv.forEach(t=>{b.push(a(t))}),b.push(0),Object.keys(this.env).sort().forEach(t=>{b.push(a(`${t}=${this.env[t]}`))}),b.push(0);const c=s;if(b.forEach(t=>{this.mem.setUint32(s,t,!0),this.mem.setUint32(s+4,0,!0),s+=8}),s>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(d,c),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(f){const s=this;return function(){const a={id:f,this:this,args:arguments};return s._pendingEvent=a,s._resume(),a.result}}}})(),M=({data:S})=>{let E=new TextDecoder,p=j.fs,f="";p.writeSync=(x,c)=>{if(x===1)C(c);else if(x===2){f+=E.decode(c);let m=f.split(`
`);m.length>1&&console.log(m.slice(0,-1).join(`
`)),f=m[m.length-1]}else throw new Error("Bad write");return c.length};let s=[],a,d=0;M=({data:x})=>(x.length>0&&(s.push(x),a&&a()),b),p.read=(x,c,m,t,l,y)=>{if(x!==0||m!==0||t!==c.length||l!==null)throw new Error("Bad read");if(s.length===0){a=()=>p.read(x,c,m,t,l,y);return}let v=s[0],$=Math.max(0,Math.min(t,v.length-d));c.set(v.subarray(d,d+$),m),d+=$,d===v.length&&(s.shift(),d=0),y(null,$)};let b=new j.Go;return b.argv=["","--service=0.25.11"],V(S,b).then(x=>{C(null),b.run(x)},x=>{C(x)}),b};function V(S,E){return F(this,null,function*(){if(S instanceof WebAssembly.Module)return WebAssembly.instantiate(S,E.importObject);const p=yield fetch(S);if(!p.ok)throw new Error(`Failed to download ${JSON.stringify(S)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(p.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(p,E.importObject)).instance;const f=yield p.arrayBuffer();return(yield WebAssembly.instantiate(f,E.importObject)).instance})}return S=>M(S)})(C=>o.onmessage({data:C})),L;o={onmessage:null,postMessage:C=>setTimeout(()=>{try{L=O({data:C})}catch(F){g(F)}}),terminate(){if(L)for(let C of L._scheduledTimeouts.values())clearTimeout(C)}}}let h,_;const u=new Promise((O,L)=>{h=O,_=L});o.onmessage=({data:O})=>{o.onmessage=({data:L})=>A(L),O?_(O):h()},o.postMessage(n||new URL(e,location.href).toString());let{readFromStdout:A,service:D}=mt({writeToStdin(O){o.postMessage(O)},isSync:!1,hasFS:!1,esbuild:be});yield u,Ie=()=>{o.terminate(),ye=void 0,Ie=void 0,Ue=void 0},Ue={build:O=>new Promise((L,C)=>{w.then(C),D.buildOrContext({callName:"build",refs:null,options:O,isTTY:!1,defaultWD:"/",callback:(F,M)=>F?C(F):L(M)})}),context:O=>new Promise((L,C)=>{w.then(C),D.buildOrContext({callName:"context",refs:null,options:O,isTTY:!1,defaultWD:"/",callback:(F,M)=>F?C(F):L(M)})}),transform:(O,L)=>new Promise((C,F)=>{w.then(F),D.transform({callName:"transform",refs:null,input:O,options:L||{},isTTY:!1,fs:{readFile(M,j){j(new Error("Internal error"),null)},writeFile(M,j){j(null)}},callback:(M,j)=>M?F(M):C(j)})}),formatMessages:(O,L)=>new Promise((C,F)=>{w.then(F),D.formatMessages({callName:"formatMessages",refs:null,messages:O,options:L,callback:(M,j)=>M?F(M):C(j)})}),analyzeMetafile:(O,L)=>new Promise((C,F)=>{w.then(F),D.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof O=="string"?O:JSON.stringify(O),options:L,callback:(M,j)=>M?F(M):C(j)})})}}),Rt=be})(X)})(We)),We.exports}var st=Lt();const Wt="/assets/esbuild-TYJnwsB5.wasm",Bt="/",Vt="/",zt="$PWA_NAME",Jt="standalone",Gt="/",qt="$PWA_SHORT_NAME",Ht="$PWA_DESCRIPTION",Yt="$PWA_VERSION",Kt="any",Qt=[],Xt=!1,Zt=["window-controls-overlay"],en={client_mode:"focus-existing"},tn=[{src:"assets/icons/512x512.png",sizes:"512x512",type:"image/png"},{src:"assets/icons/192x192.png",sizes:"192x192",type:"image/png"},{src:"assets/icons/48x48.png",sizes:"48x48",type:"image/png"},{src:"assets/icons/24x24.png",sizes:"24x24",type:"image/png"}],nn=[],rn=["Cross Platform","fast","interactive"],sn=["mapping","geospatial","interaction"],ln=[],an=[],on={id:Bt,scope:Vt,name:zt,display:Jt,start_url:Gt,short_name:qt,description:Ht,version:Yt,orientation:Kt,related_applications:Qt,prefer_related_applications:Xt,display_override:Zt,launch_handler:en,icons:tn,screenshots:nn,features:rn,categories:sn,shortcuts:ln,widgets:an},cn=X=>`
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
    
    <title>${X.title}</title>
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
`,un=X=>{const z={};return`
import {gsLib} from "${X.libPath}"
${[...X.gsMap.controls,...X.gsMap.overlays].map((q,Y)=>{const K=q.src,Z=`map_mod${Y}`;return z[K]=Z,`import ${Z} from '${K}'`}).join(`
`)}
    
export const renderMap = (mapContainerSelector) => gsLib({
    containerSelector: mapContainerSelector,
    gsMap: ${JSON.stringify(X.gsMap)},
    mapOptions: {
        controls: {zoom: false, attribution: false}
    },
    env: ${JSON.stringify(X.env||{})},
    modules: {${Object.entries(z).map(([q,Y])=>`"${q}":${Y}`).join(",")}}
})
`};let fn={name:"workspace",setup(X){X.onResolve({filter:/.*/},z=>{if(/^(?!https?:\/\/).+/.test(z.path))return{path:z.path,namespace:"virtual-workspace"}}),X.onLoad({filter:/.*/},async z=>{if(!/^(?!https?:\/\/).+/.test(z.path))return;const q=z.path,Y=await Fe.getWorkspace();let K=await Y.getResource(q);return K||(await Y.listChildren(!0),K=await Y.getResource(q)),{contents:await K.getContents()}})}};class dn{constructor(){this.initialized=!1}async init(){this.initialized||(await st.initialize({wasmURL:Wt}),this.initialized=!0)}async downloadFile(z,q){const Y=await Fe.getWorkspace(),K=""+z;await fetch(K).then(async Z=>Z.blob()).then(async Z=>{await Y.getResource(q,{create:!0}).then(ge=>ge).then(ge=>ge.saveContents(Z))})}async build(z,q=void 0){await this.init();const Y="build/gs-lib.js",K="build/app.js",Z="dist/index.html",ge="dist/app.js",ae=await Fe.getWorkspace();await ae.getResource("build")&&await(await ae.getResource("build")).delete(),await ae.getResource("dist")&&await(await ae.getResource("dist")).delete(),await this.downloadFile("/lib/gs-lib.js",Y),await this.downloadFile("/lib/gs-lib.css","dist/app.css"),await this.downloadFile("/pwa/staticwebapp.config.json","dist/staticwebapp.config.json"),await this.downloadFile("/pwa/sw.js","dist/sw.js");const ve={...z,libPath:Y},be=await(await ae.getResource("dist/sw.js")).getContents();await this.createFile("dist/sw.js",Q=>be.replace(/\$PWA_VERSION/g,Q.version),ve),await this.createFile("dist/manifest.json",Q=>{const se=JSON.parse(JSON.stringify(on));return se.name=Q.title,se.short_name=Q.title,se.description=Q.title,se.version=Q.version,JSON.stringify(se)},ve),await this.downloadFile("/pwa/assets/icons/24x24.png","dist/assets/icons/24x24.png"),await this.downloadFile("/pwa/assets/icons/48x48.png","dist/assets/icons/48x48.png"),await this.downloadFile("/pwa/assets/icons/192x192.png","dist/assets/icons/192x192.png"),await this.downloadFile("/pwa/assets/icons/512x512.png","dist/assets/icons/512x512.png"),await this.downloadFile("/pwa/assets/icons/icon_24.png","dist/assets/icons/icon_24.png"),await this.downloadFile("/pwa/assets/icons/icon_48.png","dist/assets/icons/icon_48.png"),await this.downloadFile("/pwa/assets/icons/icon_192.png","dist/assets/icons/icon_192.png"),await this.downloadFile("/pwa/assets/icons/icon_512.png","dist/assets/icons/icon_512.png");const Ee=await ae.getResource("assets");Ee&&await Ee.copyTo("dist/assets"),await this.createFile(K,un,ve),await this.createFile(Z,cn,ve);const Me=await ae.getResource(ge,{create:!0}),Te=await st.build({entryPoints:[K],bundle:!0,outfile:"app.js",format:"esm",minify:!0,plugins:[fn]});await Me.saveContents(Te.outputFiles[0].contents),(q===void 0||q)&&await(await ae.getResource("build")).delete(),ae.touch()}async createFile(z,q,Y){await(await(await Fe.getWorkspace()).getResource(z,{create:!0})).saveContents(q(Y))}async buildActiveMap(){const z=it.get();z.isDirty()&&(await z.save(),nt("Map saved automatically to run build."));const q=z.input.data,Y=JSON.parse(await q.getContents()),K=await It(".env","envs/.env","env","envs/env","default.env","envs/default.env","prod.env","envs/prod.env");K.BUILD_TIME=new Date,Ut.runAsync("Building map",()=>Be.build({title:q.getName(),gsMap:Y,env:K,version:K.VERSION||"0.0.0"})).then(()=>{nt("🚀 Map files copied to 'dist' folder in your workspace!")}).catch(Z=>{Ft(`💥 Map could not be built: ${Z}`)})}}const Be=new dn;Mt.put("buildService",Be);const gn=({commandRegistry:X})=>{X.registerAll({command:{id:"build_map",name:"Build map",description:"Builds a publishable map from a .geospace file",parameters:[]},handler:{execute:z=>Be.buildActiveMap()},contribution:{target:"toolbar:map-editor",icon:"hammer",label:"Build map",disabled:()=>!(it.get()instanceof Nt)}})};export{gn as default};
