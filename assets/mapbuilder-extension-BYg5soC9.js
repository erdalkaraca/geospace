import{x as Be,B as at}from"./index-B-or_cqe.js";import{w as Re,l as Vt,t as zt,a as ht,b as be,r as Gt,c as ot,G as Jt,F as Oe,d as ct,e as qt,D as Ht}from"./main-CY9-3YkN.js";var Ge={exports:{}},ut;function Yt(){return ut||(ut=1,(function(G){(F=>{var O=Object.defineProperty,U=Object.getOwnPropertyDescriptor,J=Object.getOwnPropertyNames,M=Object.prototype.hasOwnProperty,H=(e,n)=>{for(var r in n)O(e,r,{get:n[r],enumerable:!0})},q=(e,n,r,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let p of J(n))!M.call(e,p)&&p!==r&&O(e,p,{get:()=>n[p],enumerable:!(o=U(n,p))||o.enumerable});return e},re=e=>q(O({},"__esModule",{value:!0}),e),ae=(e,n,r)=>new Promise((o,p)=>{var w=u=>{try{_(r.next(u))}catch(D){p(D)}},h=u=>{try{_(r.throw(u))}catch(D){p(D)}},_=u=>u.done?o(u.value):Promise.resolve(u.value).then(w,h);_((r=r.apply(e,n)).next())}),ne={};H(ne,{analyzeMetafile:()=>Rt,analyzeMetafileSync:()=>It,build:()=>jt,buildSync:()=>Ft,context:()=>Tt,default:()=>Wt,formatMessages:()=>Ot,formatMessagesSync:()=>Dt,initialize:()=>Nt,stop:()=>Ut,transform:()=>Ct,transformSync:()=>At,version:()=>Pt}),F.exports=re(ne);function ue(e){let n=o=>{if(o===null)r.write8(0);else if(typeof o=="boolean")r.write8(1),r.write8(+o);else if(typeof o=="number")r.write8(2),r.write32(o|0);else if(typeof o=="string")r.write8(3),r.write(te(o));else if(o instanceof Uint8Array)r.write8(4),r.write(o);else if(o instanceof Array){r.write8(5),r.write32(o.length);for(let p of o)n(p)}else{let p=Object.keys(o);r.write8(6),r.write32(p.length);for(let w of p)r.write(te(w)),n(o[w])}},r=new Fe;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),n(e.value),ze(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function oe(e){let n=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return fe(r.read());case 4:return r.read();case 5:{let h=r.read32(),_=[];for(let u=0;u<h;u++)_.push(n());return _}case 6:{let h=r.read32(),_={};for(let u=0;u<h;u++)_[fe(r.read())]=n();return _}default:throw new Error("Invalid packet")}},r=new Fe(e),o=r.read32(),p=(o&1)===0;o>>>=1;let w=n();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:p,value:w}}var Fe=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let n=new Uint8Array((this.len+e)*2);n.set(this.buf),this.buf=n}return this.len+=e,this.len-e}write8(e){let n=this._write(1);this.buf[n]=e}write32(e){let n=this._write(4);ze(this.buf,e,n)}write(e){let n=this._write(4+e.length);ze(this.buf,e.length,n),this.buf.set(e,n+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return He(this.buf,this._read(4))}read(){let e=this.read32(),n=new Uint8Array(e),r=this._read(n.length);return n.set(this.buf.subarray(r,r+e)),n}},te,fe,Ve;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,n=new TextDecoder;te=r=>e.encode(r),fe=r=>n.decode(r),Ve='new TextEncoder().encode("")'}else if(typeof Buffer<"u")te=e=>Buffer.from(e),fe=e=>{let{buffer:n,byteOffset:r,byteLength:o}=e;return Buffer.from(n,r,o).toString()},Ve='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(te("")instanceof Uint8Array))throw new Error(`Invariant violation: "${Ve} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function He(e,n){return e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24}function ze(e,n,r){e[r++]=n,e[r++]=n>>8,e[r++]=n>>16,e[r++]=n>>24}var ee=JSON.stringify,Ye="warning",Xe="silent";function Ee(e,n){const r=[];for(const o of e){if(ie(o,n),o.indexOf(",")>=0)throw new Error(`Invalid ${n}: ${o}`);r.push(o)}return r.join(",")}var Ae=()=>null,X=e=>typeof e=="boolean"?null:"a boolean",j=e=>typeof e=="string"?null:"a string",De=e=>e instanceof RegExp?null:"a RegExp object",xe=e=>typeof e=="number"&&e===(e|0)?null:"an integer",mt=e=>typeof e=="number"&&e===(e|0)&&e>=0&&e<=65535?null:"a valid port number",Ke=e=>typeof e=="function"?null:"a function",pe=e=>Array.isArray(e)?null:"an array",se=e=>Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"an array of strings",ce=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",pt=e=>typeof e=="object"&&e!==null?null:"an array or an object",gt=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",Qe=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",Ze=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",wt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",et=e=>typeof e=="string"||Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"a string or an array of strings",tt=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array",yt=e=>typeof e=="string"||e instanceof URL?null:"a string or a URL";function i(e,n,r,o){let p=e[r];if(n[r+""]=!0,p===void 0)return;let w=o(p);if(w!==null)throw new Error(`${ee(r)} must be ${w}`);return p}function Q(e,n,r){for(let o in e)if(!(o in n))throw new Error(`Invalid option ${r}: ${ee(o)}`)}function vt(e){let n=Object.create(null),r=i(e,n,"wasmURL",yt),o=i(e,n,"wasmModule",gt),p=i(e,n,"worker",X);return Q(e,n,"in initialize() call"),{wasmURL:r,wasmModule:o,worker:p}}function nt(e){let n;if(e!==void 0){n=Object.create(null);for(let r in e){let o=e[r];if(typeof o=="string"||o===!1)n[r]=o;else throw new Error(`Expected ${ee(r)} in mangle cache to map to either a string or false`)}}return n}function Ie(e,n,r,o,p){let w=i(n,r,"color",X),h=i(n,r,"logLevel",j),_=i(n,r,"logLimit",xe);w!==void 0?e.push(`--color=${w}`):o&&e.push("--color=true"),e.push(`--log-level=${h||p}`),e.push(`--log-limit=${_||0}`)}function ie(e,n,r){if(typeof e!="string")throw new Error(`Expected value for ${n}${r!==void 0?" "+ee(r):""} to be a string, got ${typeof e} instead`);return e}function rt(e,n,r){let o=i(n,r,"legalComments",j),p=i(n,r,"sourceRoot",j),w=i(n,r,"sourcesContent",X),h=i(n,r,"target",et),_=i(n,r,"format",j),u=i(n,r,"globalName",j),D=i(n,r,"mangleProps",De),I=i(n,r,"reserveProps",De),C=i(n,r,"mangleQuoted",X),z=i(n,r,"minify",X),R=i(n,r,"minifySyntax",X),L=i(n,r,"minifyWhitespace",X),B=i(n,r,"minifyIdentifiers",X),P=i(n,r,"lineLimit",xe),K=i(n,r,"drop",se),S=i(n,r,"dropLabels",se),E=i(n,r,"charset",j),g=i(n,r,"treeShaking",X),f=i(n,r,"ignoreAnnotations",X),s=i(n,r,"jsx",j),a=i(n,r,"jsxFactory",j),d=i(n,r,"jsxFragment",j),b=i(n,r,"jsxImportSource",j),x=i(n,r,"jsxDev",X),c=i(n,r,"jsxSideEffects",X),m=i(n,r,"define",ce),t=i(n,r,"logOverride",ce),l=i(n,r,"supported",ce),y=i(n,r,"pure",se),v=i(n,r,"keepNames",X),$=i(n,r,"platform",j),A=i(n,r,"tsconfigRaw",wt),Y=i(n,r,"absPaths",se);if(o&&e.push(`--legal-comments=${o}`),p!==void 0&&e.push(`--source-root=${p}`),w!==void 0&&e.push(`--sources-content=${w}`),h&&e.push(`--target=${Ee(Array.isArray(h)?h:[h],"target")}`),_&&e.push(`--format=${_}`),u&&e.push(`--global-name=${u}`),$&&e.push(`--platform=${$}`),A&&e.push(`--tsconfig-raw=${typeof A=="string"?A:JSON.stringify(A)}`),z&&e.push("--minify"),R&&e.push("--minify-syntax"),L&&e.push("--minify-whitespace"),B&&e.push("--minify-identifiers"),P&&e.push(`--line-limit=${P}`),E&&e.push(`--charset=${E}`),g!==void 0&&e.push(`--tree-shaking=${g}`),f&&e.push("--ignore-annotations"),K)for(let k of K)e.push(`--drop:${ie(k,"drop")}`);if(S&&e.push(`--drop-labels=${Ee(S,"drop label")}`),Y&&e.push(`--abs-paths=${Ee(Y,"abs paths")}`),D&&e.push(`--mangle-props=${Me(D)}`),I&&e.push(`--reserve-props=${Me(I)}`),C!==void 0&&e.push(`--mangle-quoted=${C}`),s&&e.push(`--jsx=${s}`),a&&e.push(`--jsx-factory=${a}`),d&&e.push(`--jsx-fragment=${d}`),b&&e.push(`--jsx-import-source=${b}`),x&&e.push("--jsx-dev"),c&&e.push("--jsx-side-effects"),m)for(let k in m){if(k.indexOf("=")>=0)throw new Error(`Invalid define: ${k}`);e.push(`--define:${k}=${ie(m[k],"define",k)}`)}if(t)for(let k in t){if(k.indexOf("=")>=0)throw new Error(`Invalid log override: ${k}`);e.push(`--log-override:${k}=${ie(t[k],"log override",k)}`)}if(l)for(let k in l){if(k.indexOf("=")>=0)throw new Error(`Invalid supported: ${k}`);const V=l[k];if(typeof V!="boolean")throw new Error(`Expected value for supported ${ee(k)} to be a boolean, got ${typeof V} instead`);e.push(`--supported:${k}=${V}`)}if(y)for(let k of y)e.push(`--pure:${ie(k,"pure")}`);v&&e.push("--keep-names")}function bt(e,n,r,o,p){var w;let h=[],_=[],u=Object.create(null),D=null,I=null;Ie(h,n,u,r,o),rt(h,n,u);let C=i(n,u,"sourcemap",Ze),z=i(n,u,"bundle",X),R=i(n,u,"splitting",X),L=i(n,u,"preserveSymlinks",X),B=i(n,u,"metafile",X),P=i(n,u,"outfile",j),K=i(n,u,"outdir",j),S=i(n,u,"outbase",j),E=i(n,u,"tsconfig",j),g=i(n,u,"resolveExtensions",se),f=i(n,u,"nodePaths",se),s=i(n,u,"mainFields",se),a=i(n,u,"conditions",se),d=i(n,u,"external",se),b=i(n,u,"packages",j),x=i(n,u,"alias",ce),c=i(n,u,"loader",ce),m=i(n,u,"outExtension",ce),t=i(n,u,"publicPath",j),l=i(n,u,"entryNames",j),y=i(n,u,"chunkNames",j),v=i(n,u,"assetNames",j),$=i(n,u,"inject",se),A=i(n,u,"banner",ce),Y=i(n,u,"footer",ce),k=i(n,u,"entryPoints",pt),V=i(n,u,"absWorkingDir",j),W=i(n,u,"stdin",ce),N=(w=i(n,u,"write",X))!=null?w:p,le=i(n,u,"allowOverwrite",X),Z=i(n,u,"mangleCache",ce);if(u.plugins=!0,Q(n,u,`in ${e}() call`),C&&h.push(`--sourcemap${C===!0?"":`=${C}`}`),z&&h.push("--bundle"),le&&h.push("--allow-overwrite"),R&&h.push("--splitting"),L&&h.push("--preserve-symlinks"),B&&h.push("--metafile"),P&&h.push(`--outfile=${P}`),K&&h.push(`--outdir=${K}`),S&&h.push(`--outbase=${S}`),E&&h.push(`--tsconfig=${E}`),b&&h.push(`--packages=${b}`),g&&h.push(`--resolve-extensions=${Ee(g,"resolve extension")}`),t&&h.push(`--public-path=${t}`),l&&h.push(`--entry-names=${l}`),y&&h.push(`--chunk-names=${y}`),v&&h.push(`--asset-names=${v}`),s&&h.push(`--main-fields=${Ee(s,"main field")}`),a&&h.push(`--conditions=${Ee(a,"condition")}`),d)for(let T of d)h.push(`--external:${ie(T,"external")}`);if(x)for(let T in x){if(T.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${T}`);h.push(`--alias:${T}=${ie(x[T],"alias",T)}`)}if(A)for(let T in A){if(T.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${T}`);h.push(`--banner:${T}=${ie(A[T],"banner",T)}`)}if(Y)for(let T in Y){if(T.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${T}`);h.push(`--footer:${T}=${ie(Y[T],"footer",T)}`)}if($)for(let T of $)h.push(`--inject:${ie(T,"inject")}`);if(c)for(let T in c){if(T.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${T}`);h.push(`--loader:${T}=${ie(c[T],"loader",T)}`)}if(m)for(let T in m){if(T.indexOf("=")>=0)throw new Error(`Invalid out extension: ${T}`);h.push(`--out-extension:${T}=${ie(m[T],"out extension",T)}`)}if(k)if(Array.isArray(k))for(let T=0,ye=k.length;T<ye;T++){let de=k[T];if(typeof de=="object"&&de!==null){let me=Object.create(null),ve=i(de,me,"in",j),he=i(de,me,"out",j);if(Q(de,me,"in entry point at index "+T),ve===void 0)throw new Error('Missing property "in" for entry point at index '+T);if(he===void 0)throw new Error('Missing property "out" for entry point at index '+T);_.push([he,ve])}else _.push(["",ie(de,"entry point at index "+T)])}else for(let T in k)_.push([T,ie(k[T],"entry point",T)]);if(W){let T=Object.create(null),ye=i(W,T,"contents",tt),de=i(W,T,"resolveDir",j),me=i(W,T,"sourcefile",j),ve=i(W,T,"loader",j);Q(W,T,'in "stdin" object'),me&&h.push(`--sourcefile=${me}`),ve&&h.push(`--loader=${ve}`),de&&(I=de),typeof ye=="string"?D=te(ye):ye instanceof Uint8Array&&(D=ye)}let we=[];if(f)for(let T of f)T+="",we.push(T);return{entries:_,flags:h,write:N,stdinContents:D,stdinResolveDir:I,absWorkingDir:V,nodePaths:we,mangleCache:nt(Z)}}function xt(e,n,r,o){let p=[],w=Object.create(null);Ie(p,n,w,r,o),rt(p,n,w);let h=i(n,w,"sourcemap",Ze),_=i(n,w,"sourcefile",j),u=i(n,w,"loader",j),D=i(n,w,"banner",j),I=i(n,w,"footer",j),C=i(n,w,"mangleCache",ce);return Q(n,w,`in ${e}() call`),h&&p.push(`--sourcemap=${h===!0?"external":h}`),_&&p.push(`--sourcefile=${_}`),u&&p.push(`--loader=${u}`),D&&p.push(`--banner=${D}`),I&&p.push(`--footer=${I}`),{flags:p,mangleCache:nt(C)}}function kt(e){const n={},r={didClose:!1,reason:""};let o={},p=0,w=0,h=new Uint8Array(16*1024),_=0,u=E=>{let g=_+E.length;if(g>h.length){let s=new Uint8Array(g*2);s.set(h),h=s}h.set(E,_),_+=E.length;let f=0;for(;f+4<=_;){let s=He(h,f);if(f+4+s>_)break;f+=4,L(h.subarray(f,f+s)),f+=s}f>0&&(h.copyWithin(0,f,_),_-=f)},D=E=>{r.didClose=!0,E&&(r.reason=": "+(E.message||E));const g="The service was stopped"+r.reason;for(let f in o)o[f](g,null);o={}},I=(E,g,f)=>{if(r.didClose)return f("The service is no longer running"+r.reason,null);let s=p++;o[s]=(a,d)=>{try{f(a,d)}finally{E&&E.unref()}},E&&E.ref(),e.writeToStdin(ue({id:s,isRequest:!0,value:g}))},C=(E,g)=>{if(r.didClose)throw new Error("The service is no longer running"+r.reason);e.writeToStdin(ue({id:E,isRequest:!1,value:g}))},z=(E,g)=>ae(null,null,function*(){try{if(g.command==="ping"){C(E,{});return}if(typeof g.key=="number"){const f=n[g.key];if(!f)return;const s=f[g.command];if(s){yield s(E,g);return}}throw new Error("Invalid command: "+g.command)}catch(f){const s=[ke(f,e,null,void 0,"")];try{C(E,{errors:s})}catch{}}}),R=!0,L=E=>{if(R){R=!1;let f=String.fromCharCode(...E);if(f!=="0.25.11")throw new Error(`Cannot start service: Host version "0.25.11" does not match binary version ${ee(f)}`);return}let g=oe(E);if(g.isRequest)z(g.id,g.value);else{let f=o[g.id];delete o[g.id],g.value.error?f(g.value.error,{}):f(null,g.value)}};return{readFromStdout:u,afterClose:D,service:{buildOrContext:({callName:E,refs:g,options:f,isTTY:s,defaultWD:a,callback:d})=>{let b=0;const x=w++,c={},m={ref(){++b===1&&g&&g.ref()},unref(){--b===0&&(delete n[x],g&&g.unref())}};n[x]=c,m.ref(),_t(E,x,I,C,m,e,c,f,s,a,(t,l)=>{try{d(t,l)}finally{m.unref()}})},transform:({callName:E,refs:g,input:f,options:s,isTTY:a,fs:d,callback:b})=>{const x=st();let c=m=>{try{if(typeof f!="string"&&!(f instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:t,mangleCache:l}=xt(E,s,a,Xe),y={command:"transform",flags:t,inputFS:m!==null,input:m!==null?te(m):typeof f=="string"?te(f):f};l&&(y.mangleCache=l),I(g,y,(v,$)=>{if(v)return b(new Error(v),null);let A=Se($.errors,x),Y=Se($.warnings,x),k=1,V=()=>{if(--k===0){let W={warnings:Y,code:$.code,map:$.map,mangleCache:void 0,legalComments:void 0};"legalComments"in $&&(W.legalComments=$?.legalComments),$.mangleCache&&(W.mangleCache=$?.mangleCache),b(null,W)}};if(A.length>0)return b(Pe("Transform failed",A,Y),null);$.codeFS&&(k++,d.readFile($.code,(W,N)=>{W!==null?b(W,null):($.code=N,V())})),$.mapFS&&(k++,d.readFile($.map,(W,N)=>{W!==null?b(W,null):($.map=N,V())})),V()})}catch(t){let l=[];try{Ie(l,s,{},a,Xe)}catch{}const y=ke(t,e,x,void 0,"");I(g,{command:"error",flags:l,error:y},()=>{y.detail=x.load(y.detail),b(Pe("Transform failed",[y],[]),null)})}};if((typeof f=="string"||f instanceof Uint8Array)&&f.length>1024*1024){let m=c;c=()=>d.writeFile(f,m)}c(null)},formatMessages:({callName:E,refs:g,messages:f,options:s,callback:a})=>{if(!s)throw new Error(`Missing second argument in ${E}() call`);let d={},b=i(s,d,"kind",j),x=i(s,d,"color",X),c=i(s,d,"terminalWidth",xe);if(Q(s,d,`in ${E}() call`),b===void 0)throw new Error(`Missing "kind" in ${E}() call`);if(b!=="error"&&b!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${E}() call`);let m={command:"format-msgs",messages:ge(f,"messages",null,"",c),isWarning:b==="warning"};x!==void 0&&(m.color=x),c!==void 0&&(m.terminalWidth=c),I(g,m,(t,l)=>{if(t)return a(new Error(t),null);a(null,l.messages)})},analyzeMetafile:({callName:E,refs:g,metafile:f,options:s,callback:a})=>{s===void 0&&(s={});let d={},b=i(s,d,"color",X),x=i(s,d,"verbose",X);Q(s,d,`in ${E}() call`);let c={command:"analyze-metafile",metafile:f};b!==void 0&&(c.color=b),x!==void 0&&(c.verbose=x),I(g,c,(m,t)=>{if(m)return a(new Error(m),null);a(null,t.result)})}}}}function _t(e,n,r,o,p,w,h,_,u,D,I){const C=st(),z=e==="context",R=(P,K)=>{const S=[];try{Ie(S,_,{},u,Ye)}catch{}const E=ke(P,w,C,void 0,K);r(p,{command:"error",flags:S,error:E},()=>{E.detail=C.load(E.detail),I(Pe(z?"Context failed":"Build failed",[E],[]),null)})};let L;if(typeof _=="object"){const P=_.plugins;if(P!==void 0){if(!Array.isArray(P))return R(new Error('"plugins" must be an array'),"");L=P}}if(L&&L.length>0){if(w.isSync)return R(new Error("Cannot use plugins in synchronous API calls"),"");Et(n,r,o,p,w,h,_,L,C).then(P=>{if(!P.ok)return R(P.error,P.pluginName);try{B(P.requestPlugins,P.runOnEndCallbacks,P.scheduleOnDisposeCallbacks)}catch(K){R(K,"")}},P=>R(P,""));return}try{B(null,(P,K)=>K([],[]),()=>{})}catch(P){R(P,"")}function B(P,K,S){const E=w.hasFS,{entries:g,flags:f,write:s,stdinContents:a,stdinResolveDir:d,absWorkingDir:b,nodePaths:x,mangleCache:c}=bt(e,_,u,Ye,E);if(s&&!w.hasFS)throw new Error('The "write" option is unavailable in this environment');const m={command:"build",key:n,entries:g,flags:f,write:s,stdinContents:a,stdinResolveDir:d,absWorkingDir:b||D,nodePaths:x,context:z};P&&(m.plugins=P),c&&(m.mangleCache=c);const t=(v,$)=>{const A={errors:Se(v.errors,C),warnings:Se(v.warnings,C),outputFiles:void 0,metafile:void 0,mangleCache:void 0},Y=A.errors.slice(),k=A.warnings.slice();v.outputFiles&&(A.outputFiles=v.outputFiles.map($t)),v.metafile&&(A.metafile=JSON.parse(v.metafile)),v.mangleCache&&(A.mangleCache=v.mangleCache),v.writeToStdout!==void 0&&console.log(fe(v.writeToStdout).replace(/\n$/,"")),K(A,(V,W)=>{if(Y.length>0||V.length>0){const N=Pe("Build failed",Y.concat(V),k.concat(W));return $(N,null,V,W)}$(null,A,V,W)})};let l,y;z&&(h["on-end"]=(v,$)=>new Promise(A=>{t($,(Y,k,V,W)=>{const N={errors:V,warnings:W};y&&y(Y,k),l=void 0,y=void 0,o(v,N),A()})})),r(p,m,(v,$)=>{if(v)return I(new Error(v),null);if(!z)return t($,(k,V)=>(S(),I(k,V)));if($.errors.length>0)return I(Pe("Context failed",$.errors,$.warnings),null);let A=!1;const Y={rebuild:()=>(l||(l=new Promise((k,V)=>{let W;y=(le,Z)=>{W||(W=()=>le?V(le):k(Z))};const N=()=>{r(p,{command:"rebuild",key:n},(Z,we)=>{Z?V(new Error(Z)):W?W():N()})};N()})),l),watch:(k={})=>new Promise((V,W)=>{if(!w.hasFS)throw new Error('Cannot use the "watch" API in this environment');const N={},le=i(k,N,"delay",xe);Q(k,N,"in watch() call");const Z={command:"watch",key:n};le&&(Z.delay=le),r(p,Z,we=>{we?W(new Error(we)):V(void 0)})}),serve:(k={})=>new Promise((V,W)=>{if(!w.hasFS)throw new Error('Cannot use the "serve" API in this environment');const N={},le=i(k,N,"port",mt),Z=i(k,N,"host",j),we=i(k,N,"servedir",j),T=i(k,N,"keyfile",j),ye=i(k,N,"certfile",j),de=i(k,N,"fallback",j),me=i(k,N,"cors",ce),ve=i(k,N,"onRequest",Ke);Q(k,N,"in serve() call");const he={command:"serve",key:n,onRequest:!!ve};if(le!==void 0&&(he.port=le),Z!==void 0&&(he.host=Z),we!==void 0&&(he.servedir=we),T!==void 0&&(he.keyfile=T),ye!==void 0&&(he.certfile=ye),de!==void 0&&(he.fallback=de),me){const Te={},$e=i(me,Te,"origin",et);Q(me,Te,'on "cors" object'),Array.isArray($e)?he.corsOrigin=$e:$e!==void 0&&(he.corsOrigin=[$e])}r(p,he,(Te,$e)=>{if(Te)return W(new Error(Te));ve&&(h["serve-request"]=(Lt,Bt)=>{ve(Bt.args),o(Lt,{})}),V($e)})}),cancel:()=>new Promise(k=>{if(A)return k();r(p,{command:"cancel",key:n},()=>{k()})}),dispose:()=>new Promise(k=>{if(A)return k();A=!0,r(p,{command:"dispose",key:n},()=>{k(),S(),p.unref()})})};p.ref(),I(null,Y)})}}var Et=(e,n,r,o,p,w,h,_,u)=>ae(null,null,function*(){let D=[],I=[],C={},z={},R=[],L=0,B=0,P=[],K=!1;_=[..._];for(let g of _){let f={};if(typeof g!="object")throw new Error(`Plugin at index ${B} must be an object`);const s=i(g,f,"name",j);if(typeof s!="string"||s==="")throw new Error(`Plugin at index ${B} is missing a name`);try{let a=i(g,f,"setup",Ke);if(typeof a!="function")throw new Error("Plugin is missing a setup function");Q(g,f,`on plugin ${ee(s)}`);let d={name:s,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};B++;let x=a({initialOptions:h,resolve:(c,m={})=>{if(!K)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof c!="string")throw new Error("The path to resolve must be a string");let t=Object.create(null),l=i(m,t,"pluginName",j),y=i(m,t,"importer",j),v=i(m,t,"namespace",j),$=i(m,t,"resolveDir",j),A=i(m,t,"kind",j),Y=i(m,t,"pluginData",Ae),k=i(m,t,"with",ce);return Q(m,t,"in resolve() call"),new Promise((V,W)=>{const N={command:"resolve",path:c,key:e,pluginName:s};if(l!=null&&(N.pluginName=l),y!=null&&(N.importer=y),v!=null&&(N.namespace=v),$!=null&&(N.resolveDir=$),A!=null)N.kind=A;else throw new Error('Must specify "kind" when calling "resolve"');Y!=null&&(N.pluginData=u.store(Y)),k!=null&&(N.with=St(k,"with")),n(o,N,(le,Z)=>{le!==null?W(new Error(le)):V({errors:Se(Z.errors,u),warnings:Se(Z.warnings,u),path:Z.path,external:Z.external,sideEffects:Z.sideEffects,namespace:Z.namespace,suffix:Z.suffix,pluginData:u.load(Z.pluginData)})})})},onStart(c){let m='This error came from the "onStart" callback registered here:',t=Ue(new Error(m),p,"onStart");D.push({name:s,callback:c,note:t}),d.onStart=!0},onEnd(c){let m='This error came from the "onEnd" callback registered here:',t=Ue(new Error(m),p,"onEnd");I.push({name:s,callback:c,note:t}),d.onEnd=!0},onResolve(c,m){let t='This error came from the "onResolve" callback registered here:',l=Ue(new Error(t),p,"onResolve"),y={},v=i(c,y,"filter",De),$=i(c,y,"namespace",j);if(Q(c,y,`in onResolve() call for plugin ${ee(s)}`),v==null)throw new Error("onResolve() call is missing a filter");let A=L++;C[A]={name:s,callback:m,note:l},d.onResolve.push({id:A,filter:Me(v),namespace:$||""})},onLoad(c,m){let t='This error came from the "onLoad" callback registered here:',l=Ue(new Error(t),p,"onLoad"),y={},v=i(c,y,"filter",De),$=i(c,y,"namespace",j);if(Q(c,y,`in onLoad() call for plugin ${ee(s)}`),v==null)throw new Error("onLoad() call is missing a filter");let A=L++;z[A]={name:s,callback:m,note:l},d.onLoad.push({id:A,filter:Me(v),namespace:$||""})},onDispose(c){R.push(c)},esbuild:p.esbuild});x&&(yield x),P.push(d)}catch(a){return{ok:!1,error:a,pluginName:s}}}w["on-start"]=(g,f)=>ae(null,null,function*(){u.clear();let s={errors:[],warnings:[]};yield Promise.all(D.map(a=>ae(null,[a],function*({name:d,callback:b,note:x}){try{let c=yield b();if(c!=null){if(typeof c!="object")throw new Error(`Expected onStart() callback in plugin ${ee(d)} to return an object`);let m={},t=i(c,m,"errors",pe),l=i(c,m,"warnings",pe);Q(c,m,`from onStart() callback in plugin ${ee(d)}`),t!=null&&s.errors.push(...ge(t,"errors",u,d,void 0)),l!=null&&s.warnings.push(...ge(l,"warnings",u,d,void 0))}}catch(c){s.errors.push(ke(c,p,u,x&&x(),d))}}))),r(g,s)}),w["on-resolve"]=(g,f)=>ae(null,null,function*(){let s={},a="",d,b;for(let x of f.ids)try{({name:a,callback:d,note:b}=C[x]);let c=yield d({path:f.path,importer:f.importer,namespace:f.namespace,resolveDir:f.resolveDir,kind:f.kind,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onResolve() callback in plugin ${ee(a)} to return an object`);let m={},t=i(c,m,"pluginName",j),l=i(c,m,"path",j),y=i(c,m,"namespace",j),v=i(c,m,"suffix",j),$=i(c,m,"external",X),A=i(c,m,"sideEffects",X),Y=i(c,m,"pluginData",Ae),k=i(c,m,"errors",pe),V=i(c,m,"warnings",pe),W=i(c,m,"watchFiles",se),N=i(c,m,"watchDirs",se);Q(c,m,`from onResolve() callback in plugin ${ee(a)}`),s.id=x,t!=null&&(s.pluginName=t),l!=null&&(s.path=l),y!=null&&(s.namespace=y),v!=null&&(s.suffix=v),$!=null&&(s.external=$),A!=null&&(s.sideEffects=A),Y!=null&&(s.pluginData=u.store(Y)),k!=null&&(s.errors=ge(k,"errors",u,a,void 0)),V!=null&&(s.warnings=ge(V,"warnings",u,a,void 0)),W!=null&&(s.watchFiles=Ne(W,"watchFiles")),N!=null&&(s.watchDirs=Ne(N,"watchDirs"));break}}catch(c){s={id:x,errors:[ke(c,p,u,b&&b(),a)]};break}r(g,s)}),w["on-load"]=(g,f)=>ae(null,null,function*(){let s={},a="",d,b;for(let x of f.ids)try{({name:a,callback:d,note:b}=z[x]);let c=yield d({path:f.path,namespace:f.namespace,suffix:f.suffix,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onLoad() callback in plugin ${ee(a)} to return an object`);let m={},t=i(c,m,"pluginName",j),l=i(c,m,"contents",tt),y=i(c,m,"resolveDir",j),v=i(c,m,"pluginData",Ae),$=i(c,m,"loader",j),A=i(c,m,"errors",pe),Y=i(c,m,"warnings",pe),k=i(c,m,"watchFiles",se),V=i(c,m,"watchDirs",se);Q(c,m,`from onLoad() callback in plugin ${ee(a)}`),s.id=x,t!=null&&(s.pluginName=t),l instanceof Uint8Array?s.contents=l:l!=null&&(s.contents=te(l)),y!=null&&(s.resolveDir=y),v!=null&&(s.pluginData=u.store(v)),$!=null&&(s.loader=$),A!=null&&(s.errors=ge(A,"errors",u,a,void 0)),Y!=null&&(s.warnings=ge(Y,"warnings",u,a,void 0)),k!=null&&(s.watchFiles=Ne(k,"watchFiles")),V!=null&&(s.watchDirs=Ne(V,"watchDirs"));break}}catch(c){s={id:x,errors:[ke(c,p,u,b&&b(),a)]};break}r(g,s)});let S=(g,f)=>f([],[]);I.length>0&&(S=(g,f)=>{ae(null,null,function*(){const s=[],a=[];for(const{name:d,callback:b,note:x}of I){let c,m;try{const t=yield b(g);if(t!=null){if(typeof t!="object")throw new Error(`Expected onEnd() callback in plugin ${ee(d)} to return an object`);let l={},y=i(t,l,"errors",pe),v=i(t,l,"warnings",pe);Q(t,l,`from onEnd() callback in plugin ${ee(d)}`),y!=null&&(c=ge(y,"errors",u,d,void 0)),v!=null&&(m=ge(v,"warnings",u,d,void 0))}}catch(t){c=[ke(t,p,u,x&&x(),d)]}if(c){s.push(...c);try{g.errors.push(...c)}catch{}}if(m){a.push(...m);try{g.warnings.push(...m)}catch{}}}f(s,a)})});let E=()=>{for(const g of R)setTimeout(()=>g(),0)};return K=!0,{ok:!0,requestPlugins:P,runOnEndCallbacks:S,scheduleOnDisposeCallbacks:E}});function st(){const e=new Map;let n=0;return{clear(){e.clear()},load(r){return e.get(r)},store(r){if(r===void 0)return-1;const o=n++;return e.set(o,r),o}}}function Ue(e,n,r){let o,p=!1;return()=>{if(p)return o;p=!0;try{let w=(e.stack+"").split(`
`);w.splice(1,1);let h=it(n,w,r);if(h)return o={text:e.message,location:h},o}catch{}}}function ke(e,n,r,o,p){let w="Internal error",h=null;try{w=(e&&e.message||e)+""}catch{}try{h=it(n,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:p,text:w,location:h,notes:o?[o]:[],detail:r?r.store(e):-1}}function it(e,n,r){let o="    at ";if(e.readFileSync&&!n[0].startsWith(o)&&n[1].startsWith(o))for(let p=1;p<n.length;p++){let w=n[p];if(w.startsWith(o))for(w=w.slice(o.length);;){let h=/^(?:new |async )?\S+ \((.*)\)$/.exec(w);if(h){w=h[1];continue}if(h=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(w),h){w=h[1];continue}if(h=/^(\S+):(\d+):(\d+)$/.exec(w),h){let _;try{_=e.readFileSync(h[1],"utf8")}catch{break}let u=_.split(/\r\n|\r|\n|\u2028|\u2029/)[+h[2]-1]||"",D=+h[3]-1,I=u.slice(D,D+r.length)===r?r.length:0;return{file:h[1],namespace:"file",line:+h[2],column:te(u.slice(0,D)).length,length:te(u.slice(D,D+I)).length,lineText:u+`
`+n.slice(1).join(`
`),suggestion:""}}break}}return null}function Pe(e,n,r){let o=5;e+=n.length<1?"":` with ${n.length} error${n.length<2?"":"s"}:`+n.slice(0,o+1).map((w,h)=>{if(h===o)return`
...`;if(!w.location)return`
error: ${w.text}`;let{file:_,line:u,column:D}=w.location,I=w.pluginName?`[plugin: ${w.pluginName}] `:"";return`
${_}:${u}:${D}: ERROR: ${I}${w.text}`}).join("");let p=new Error(e);for(const[w,h]of[["errors",n],["warnings",r]])Object.defineProperty(p,w,{configurable:!0,enumerable:!0,get:()=>h,set:_=>Object.defineProperty(p,w,{configurable:!0,enumerable:!0,value:_})});return p}function Se(e,n){for(const r of e)r.detail=n.load(r.detail);return e}function lt(e,n,r){if(e==null)return null;let o={},p=i(e,o,"file",j),w=i(e,o,"namespace",j),h=i(e,o,"line",xe),_=i(e,o,"column",xe),u=i(e,o,"length",xe),D=i(e,o,"lineText",j),I=i(e,o,"suggestion",j);if(Q(e,o,n),D){const C=D.slice(0,(_&&_>0?_:0)+(u&&u>0?u:0)+(r&&r>0?r:80));!/[\x7F-\uFFFF]/.test(C)&&!/\n/.test(D)&&(D=C)}return{file:p||"",namespace:w||"",line:h||0,column:_||0,length:u||0,lineText:D||"",suggestion:I||""}}function ge(e,n,r,o,p){let w=[],h=0;for(const _ of e){let u={},D=i(_,u,"id",j),I=i(_,u,"pluginName",j),C=i(_,u,"text",j),z=i(_,u,"location",Qe),R=i(_,u,"notes",pe),L=i(_,u,"detail",Ae),B=`in element ${h} of "${n}"`;Q(_,u,B);let P=[];if(R)for(const K of R){let S={},E=i(K,S,"text",j),g=i(K,S,"location",Qe);Q(K,S,B),P.push({text:E||"",location:lt(g,B,p)})}w.push({id:D||"",pluginName:I||o,text:C||"",location:lt(z,B,p),notes:P,detail:r?r.store(L):-1}),h++}return w}function Ne(e,n){const r=[];for(const o of e){if(typeof o!="string")throw new Error(`${ee(n)} must be an array of strings`);r.push(o)}return r}function St(e,n){const r=Object.create(null);for(const o in e){const p=e[o];if(typeof p!="string")throw new Error(`key ${ee(o)} in object ${ee(n)} must be a string`);r[o]=p}return r}function $t({path:e,contents:n,hash:r}){let o=null;return{path:e,contents:n,hash:r,get text(){const p=this.contents;return(o===null||p!==n)&&(n=p,o=fe(p)),o}}}function Me(e){let n=e.source;return e.flags&&(n=`(?${e.flags})${n}`),n}var Pt="0.25.11",jt=e=>je().build(e),Tt=e=>je().context(e),Ct=(e,n)=>je().transform(e,n),Ot=(e,n)=>je().formatMessages(e,n),Rt=(e,n)=>je().analyzeMetafile(e,n),Ft=()=>{throw new Error('The "buildSync" API only works in node')},At=()=>{throw new Error('The "transformSync" API only works in node')},Dt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},It=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Ut=()=>(We&&We(),Promise.resolve()),_e,We,Le,je=()=>{if(Le)return Le;throw _e?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Nt=e=>{e=vt(e||{});let n=e.wasmURL,r=e.wasmModule,o=e.worker!==!1;if(!n&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(_e)throw new Error('Cannot call "initialize" more than once');return _e=Mt(n||"",r,o),_e.catch(()=>{_e=void 0}),_e},Mt=(e,n,r)=>ae(null,null,function*(){let o,p;const w=new Promise(C=>p=C);if(r){let C=new Blob([`onmessage=((postMessage) => {
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
    })(postMessage)`],{type:"text/javascript"});o=new Worker(URL.createObjectURL(C))}else{let C=(R=>{var L=(S,E,g)=>new Promise((f,s)=>{var a=x=>{try{b(g.next(x))}catch(c){s(c)}},d=x=>{try{b(g.throw(x))}catch(c){s(c)}},b=x=>x.done?f(x.value):Promise.resolve(x.value).then(a,d);b((g=g.apply(S,E)).next())});let B,P={};for(let S=self;S;S=Object.getPrototypeOf(S))for(let E of Object.getOwnPropertyNames(S))E in P||Object.defineProperty(P,E,{get:()=>self[E]});(()=>{const S=()=>{const f=new Error("not implemented");return f.code="ENOSYS",f};if(!P.fs){let f="";P.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(s,a){f+=g.decode(a);const d=f.lastIndexOf(`
`);return d!=-1&&(console.log(f.substring(0,d)),f=f.substring(d+1)),a.length},write(s,a,d,b,x,c){if(d!==0||b!==a.length||x!==null){c(S());return}const m=this.writeSync(s,a);c(null,m)},chmod(s,a,d){d(S())},chown(s,a,d,b){b(S())},close(s,a){a(S())},fchmod(s,a,d){d(S())},fchown(s,a,d,b){b(S())},fstat(s,a){a(S())},fsync(s,a){a(null)},ftruncate(s,a,d){d(S())},lchown(s,a,d,b){b(S())},link(s,a,d){d(S())},lstat(s,a){a(S())},mkdir(s,a,d){d(S())},open(s,a,d,b){b(S())},read(s,a,d,b,x,c){c(S())},readdir(s,a){a(S())},readlink(s,a){a(S())},rename(s,a,d){d(S())},rmdir(s,a){a(S())},stat(s,a){a(S())},symlink(s,a,d){d(S())},truncate(s,a,d){d(S())},unlink(s,a){a(S())},utimes(s,a,d,b){b(S())}}}if(P.process||(P.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw S()},pid:-1,ppid:-1,umask(){throw S()},cwd(){throw S()},chdir(){throw S()}}),!P.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!P.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!P.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!P.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const E=new TextEncoder("utf-8"),g=new TextDecoder("utf-8");P.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const f=(t,l)=>{this.mem.setUint32(t+0,l,!0),this.mem.setUint32(t+4,Math.floor(l/4294967296),!0)},s=t=>{const l=this.mem.getUint32(t+0,!0),y=this.mem.getInt32(t+4,!0);return l+y*4294967296},a=t=>{const l=this.mem.getFloat64(t,!0);if(l===0)return;if(!isNaN(l))return l;const y=this.mem.getUint32(t,!0);return this._values[y]},d=(t,l)=>{if(typeof l=="number"&&l!==0){if(isNaN(l)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,l,!0);return}if(l===void 0){this.mem.setFloat64(t,0,!0);return}let v=this._ids.get(l);v===void 0&&(v=this._idPool.pop(),v===void 0&&(v=this._values.length),this._values[v]=l,this._goRefCounts[v]=0,this._ids.set(l,v)),this._goRefCounts[v]++;let $=0;switch(typeof l){case"object":l!==null&&($=1);break;case"string":$=2;break;case"symbol":$=3;break;case"function":$=4;break}this.mem.setUint32(t+4,2146959360|$,!0),this.mem.setUint32(t,v,!0)},b=t=>{const l=s(t+0),y=s(t+8);return new Uint8Array(this._inst.exports.mem.buffer,l,y)},x=t=>{const l=s(t+0),y=s(t+8),v=new Array(y);for(let $=0;$<y;$++)v[$]=a(l+$*8);return v},c=t=>{const l=s(t+0),y=s(t+8);return g.decode(new DataView(this._inst.exports.mem.buffer,l,y))},m=Date.now()-performance.now();this.importObject={_gotest:{add:(t,l)=>t+l},gojs:{"runtime.wasmExit":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(l)},"runtime.wasmWrite":t=>{t>>>=0;const l=s(t+8),y=s(t+16),v=this.mem.getInt32(t+24,!0);P.fs.writeSync(l,new Uint8Array(this._inst.exports.mem.buffer,y,v))},"runtime.resetMemoryDataView":t=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,f(t+8,(m+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;const l=new Date().getTime();f(t+8,l/1e3),this.mem.setInt32(t+16,l%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;const l=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(l,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(l);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},s(t+8))),this.mem.setInt32(t+16,l,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(l)),this._scheduledTimeouts.delete(l)},"runtime.getRandomData":t=>{t>>>=0,crypto.getRandomValues(b(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;const l=this.mem.getUint32(t+8,!0);if(this._goRefCounts[l]--,this._goRefCounts[l]===0){const y=this._values[l];this._values[l]=null,this._ids.delete(y),this._idPool.push(l)}},"syscall/js.stringVal":t=>{t>>>=0,d(t+24,c(t+8))},"syscall/js.valueGet":t=>{t>>>=0;const l=Reflect.get(a(t+8),c(t+16));t=this._inst.exports.getsp()>>>0,d(t+32,l)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(a(t+8),c(t+16),a(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(a(t+8),c(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,d(t+24,Reflect.get(a(t+8),s(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(a(t+8),s(t+16),a(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{const l=a(t+8),y=Reflect.get(l,c(t+16)),v=x(t+32),$=Reflect.apply(y,l,v);t=this._inst.exports.getsp()>>>0,d(t+56,$),this.mem.setUint8(t+64,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+56,l),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{const l=a(t+8),y=x(t+16),v=Reflect.apply(l,void 0,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{const l=a(t+8),y=x(t+16),v=Reflect.construct(l,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,f(t+16,parseInt(a(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;const l=E.encode(String(a(t+8)));d(t+16,l),f(t+24,l.length)},"syscall/js.valueLoadString":t=>{t>>>=0;const l=a(t+8);b(t+16).set(l)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,a(t+8)instanceof a(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;const l=b(t+8),y=a(t+32);if(!(y instanceof Uint8Array||y instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;const l=a(t+8),y=b(t+16);if(!(l instanceof Uint8Array||l instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}run(f){return L(this,null,function*(){if(!(f instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=f,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,P,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[P,5],[this,6]]),this._idPool=[],this.exited=!1;let s=4096;const a=t=>{const l=s,y=E.encode(t+"\0");return new Uint8Array(this.mem.buffer,s,y.length).set(y),s+=y.length,s%8!==0&&(s+=8-s%8),l},d=this.argv.length,b=[];this.argv.forEach(t=>{b.push(a(t))}),b.push(0),Object.keys(this.env).sort().forEach(t=>{b.push(a(`${t}=${this.env[t]}`))}),b.push(0);const c=s;if(b.forEach(t=>{this.mem.setUint32(s,t,!0),this.mem.setUint32(s+4,0,!0),s+=8}),s>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(d,c),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(f){const s=this;return function(){const a={id:f,this:this,args:arguments};return s._pendingEvent=a,s._resume(),a.result}}}})(),B=({data:S})=>{let E=new TextDecoder,g=P.fs,f="";g.writeSync=(x,c)=>{if(x===1)R(c);else if(x===2){f+=E.decode(c);let m=f.split(`
`);m.length>1&&console.log(m.slice(0,-1).join(`
`)),f=m[m.length-1]}else throw new Error("Bad write");return c.length};let s=[],a,d=0;B=({data:x})=>(x.length>0&&(s.push(x),a&&a()),b),g.read=(x,c,m,t,l,y)=>{if(x!==0||m!==0||t!==c.length||l!==null)throw new Error("Bad read");if(s.length===0){a=()=>g.read(x,c,m,t,l,y);return}let v=s[0],$=Math.max(0,Math.min(t,v.length-d));c.set(v.subarray(d,d+$),m),d+=$,d===v.length&&(s.shift(),d=0),y(null,$)};let b=new P.Go;return b.argv=["","--service=0.25.11"],K(S,b).then(x=>{R(null),b.run(x)},x=>{R(x)}),b};function K(S,E){return L(this,null,function*(){if(S instanceof WebAssembly.Module)return WebAssembly.instantiate(S,E.importObject);const g=yield fetch(S);if(!g.ok)throw new Error(`Failed to download ${JSON.stringify(S)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(g.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(g,E.importObject)).instance;const f=yield g.arrayBuffer();return(yield WebAssembly.instantiate(f,E.importObject)).instance})}return S=>B(S)})(R=>o.onmessage({data:R})),z;o={onmessage:null,postMessage:R=>setTimeout(()=>{try{z=C({data:R})}catch(L){p(L)}}),terminate(){if(z)for(let R of z._scheduledTimeouts.values())clearTimeout(R)}}}let h,_;const u=new Promise((C,z)=>{h=C,_=z});o.onmessage=({data:C})=>{o.onmessage=({data:z})=>D(z),C?_(C):h()},o.postMessage(n||new URL(e,location.href).toString());let{readFromStdout:D,service:I}=kt({writeToStdin(C){o.postMessage(C)},isSync:!1,hasFS:!1,esbuild:ne});yield u,We=()=>{o.terminate(),_e=void 0,We=void 0,Le=void 0},Le={build:C=>new Promise((z,R)=>{w.then(R),I.buildOrContext({callName:"build",refs:null,options:C,isTTY:!1,defaultWD:"/",callback:(L,B)=>L?R(L):z(B)})}),context:C=>new Promise((z,R)=>{w.then(R),I.buildOrContext({callName:"context",refs:null,options:C,isTTY:!1,defaultWD:"/",callback:(L,B)=>L?R(L):z(B)})}),transform:(C,z)=>new Promise((R,L)=>{w.then(L),I.transform({callName:"transform",refs:null,input:C,options:z||{},isTTY:!1,fs:{readFile(B,P){P(new Error("Internal error"),null)},writeFile(B,P){P(null)}},callback:(B,P)=>B?L(B):R(P)})}),formatMessages:(C,z)=>new Promise((R,L)=>{w.then(L),I.formatMessages({callName:"formatMessages",refs:null,messages:C,options:z,callback:(B,P)=>B?L(B):R(P)})}),analyzeMetafile:(C,z)=>new Promise((R,L)=>{w.then(L),I.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof C=="string"?C:JSON.stringify(C),options:z,callback:(B,P)=>B?L(B):R(P)})})}}),Wt=ne})(G)})(Ge)),Ge.exports}var ft=Yt();const Xt="/assets/esbuild-TYJnwsB5.wasm",Kt="/",Qt="/",Zt="$PWA_NAME",en="standalone",tn="/",nn="$PWA_SHORT_NAME",rn="$PWA_DESCRIPTION",sn="$PWA_VERSION",ln="any",an=[],on=!1,cn=["window-controls-overlay"],un={client_mode:"focus-existing"},fn=[{src:"assets/icons/512x512.png",sizes:"512x512",type:"image/png"},{src:"assets/icons/192x192.png",sizes:"192x192",type:"image/png"},{src:"assets/icons/48x48.png",sizes:"48x48",type:"image/png"},{src:"assets/icons/24x24.png",sizes:"24x24",type:"image/png"}],dn=[],hn=["Cross Platform","fast","interactive"],mn=["mapping","geospatial","interaction"],pn=[],gn=[],wn={id:Kt,scope:Qt,name:Zt,display:en,start_url:tn,short_name:nn,description:rn,version:sn,orientation:ln,related_applications:an,prefer_related_applications:on,display_override:cn,launch_handler:un,icons:fn,screenshots:dn,features:hn,categories:mn,shortcuts:pn,widgets:gn},yn=G=>`
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
    
    <title>${G.title}</title>
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
`,vn=G=>{const F=[],O=[];return[...G.gsMap.controls||[],...G.gsMap.overlays||[]].forEach((J,M)=>{const H=J.src,q=`map_mod${M}`;F.push(`import ${q} from '${H}'`),O.push(`"${H}": ${q}`)}),`
import {gsLib} from "${G.libPath}"
${F.join(`
`)}
    
export const renderMap = (mapContainerSelector) => {
    const modules = {${O.join(",")}}
    return gsLib({
        containerSelector: mapContainerSelector,
        gsMap: ${JSON.stringify(G.gsMap)},
        mapOptions: {
            controls: {zoom: false, attribution: false}
        },
        env: ${JSON.stringify(G.env||{})},
        modules: modules
    })
}
`};function dt(G,F){if(G.startsWith("/"))return G.slice(1);const O=F.split("/").filter(M=>M),U=G.split("/").filter(M=>M);if(G.startsWith("./")||G.startsWith("../")||!G.startsWith("/")){const M=O.slice(0,-1);O.length=0,O.push(...M)}for(const M of U)M!=="."&&(M===".."?O.length>0&&O.pop():O.push(M));return O.join("/")}let bn={name:"workspace",setup(G){G.onResolve({filter:/.*/},F=>{if(!/^(?!https?:\/\/).+/.test(F.path))return;let O=F.path;if(O.startsWith("/")&&(O=O.slice(1)),F.importer&&F.importer!==""){let U=F.importer;U.startsWith("virtual-workspace:")&&(U=U.slice(18));const J=F.path.startsWith("./")||F.path.startsWith("../"),M=O.includes("/"),H=U.startsWith("build/");J?O=dt(F.path,U):!M&&!H&&(O=dt(O,U))}return{path:O,namespace:"virtual-workspace"}}),G.onLoad({filter:/.*/},async F=>{if(!/^(?!https?:\/\/).+/.test(F.path))return;const O=F.path,U=await Re.getWorkspace();let J=await U.getResource(O);if(J||(await U.listChildren(!0),J=await U.getResource(O)),!J)throw new Error(`Module not found: ${O}`);return{contents:await J.getContents()}})}};class xn{constructor(){this.initialized=!1}async init(){this.initialized||(await ft.initialize({wasmURL:Xt}),this.initialized=!0)}async downloadFile(F,O){const U=await Re.getWorkspace(),J=""+F;await fetch(J).then(async M=>M.blob()).then(async M=>{await U.getResource(O,{create:!0}).then(H=>H).then(H=>H.saveContents(M))})}async build(F,O=void 0){await this.init();const U="build/gs-lib.js",J="build/app.js",M="dist/index.html",H="dist/app.js",q=await Re.getWorkspace();await q.getResource("build")&&await(await q.getResource("build")).delete(),await q.getResource("dist")&&await(await q.getResource("dist")).delete(),await this.downloadFile("/lib/gs-lib.js",U),await this.downloadFile("/lib/gs-lib.css","dist/app.css"),await this.downloadFile("/pwa/staticwebapp.config.json","dist/staticwebapp.config.json"),await this.downloadFile("/pwa/sw.js","dist/sw.js");const re={...F,libPath:U},ne=await(await q.getResource("dist/sw.js")).getContents();await this.createFile("dist/sw.js",te=>ne.replace(/\$PWA_VERSION/g,te.version),re),await this.createFile("dist/manifest.json",te=>{const fe=JSON.parse(JSON.stringify(wn));return fe.name=te.title,fe.short_name=te.title,fe.description=te.title,fe.version=te.version,JSON.stringify(fe)},re),await this.downloadFile("/pwa/assets/icons/24x24.png","dist/assets/icons/24x24.png"),await this.downloadFile("/pwa/assets/icons/48x48.png","dist/assets/icons/48x48.png"),await this.downloadFile("/pwa/assets/icons/192x192.png","dist/assets/icons/192x192.png"),await this.downloadFile("/pwa/assets/icons/512x512.png","dist/assets/icons/512x512.png"),await this.downloadFile("/pwa/assets/icons/icon_24.png","dist/assets/icons/icon_24.png"),await this.downloadFile("/pwa/assets/icons/icon_48.png","dist/assets/icons/icon_48.png"),await this.downloadFile("/pwa/assets/icons/icon_192.png","dist/assets/icons/icon_192.png"),await this.downloadFile("/pwa/assets/icons/icon_512.png","dist/assets/icons/icon_512.png");const ue=await q.getResource("assets");ue&&await ue.copyTo("dist/assets"),await this.createFile(J,vn,re),await this.createFile(M,yn,re);const oe=await q.getResource(H,{create:!0}),Fe=await ft.build({entryPoints:[J],bundle:!0,outfile:"app.js",format:"esm",minify:!0,plugins:[bn]});await oe.saveContents(Fe.outputFiles[0].contents),(O===void 0||O)&&await(await q.getResource("build")).delete(),q.touch()}async createFile(F,O,U){await(await(await Re.getWorkspace()).getResource(F,{create:!0})).saveContents(O(U))}async buildMapFile(F,O){const U=JSON.parse(await F.getContents()),J=await Vt(O||".env");J.BUILD_TIME=new Date,zt.runAsync("Building map",()=>qe.build({title:F.getName(),gsMap:U,env:J,version:J.VERSION||"0.0.0"})).then(()=>{ht("🚀 Map files copied to 'dist' folder in your workspace!")}).catch(M=>{be(`💥 Map could not be built: ${M}`)})}}const qe=new xn;Gt.put("buildService",qe);const Ce=".geospace",kn=".env";async function Je(G,F){const O=[],U=await G.listChildren(!0);for(const J of U)if(J instanceof Oe&&J.getName().toLowerCase().endsWith(F))O.push(J.getWorkspacePath());else if(J instanceof Ht){const M=await Je(J,F);O.push(...M)}return O.sort()}function _n(){let G=document.getElementById("global-dialog-container");return G||(G=document.createElement("div"),G.id="global-dialog-container",document.body.appendChild(G)),G}async function En(G,F,O,U){return new Promise(J=>{const M=_n();let H=O||"",q=U||"";const re=()=>{at(Be``,M)},ae=()=>{re(),J({geospaceFile:H||null,envFile:q||null})},ne=()=>{re(),J({geospaceFile:null,envFile:null})},ue=Be`
            <wa-dialog label="Select Files" open @wa-request-close=${ne}>
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
                            value="${H}"
                            @change=${oe=>{H=oe.target.value}}>
                            <wa-option value="">None</wa-option>
                            ${G.map(oe=>Be`
                                <wa-option value="${oe}">${oe}</wa-option>
                            `)}
                        </wa-select>
                    </div>
                    
                    <div class="dialog-field">
                        <label>Environment File:</label>
                        <wa-select 
                            value="${q}"
                            @change=${oe=>{q=oe.target.value}}>
                            <wa-option value="">None (use .env)</wa-option>
                            ${F.map(oe=>Be`
                                <wa-option value="${oe}">${oe}</wa-option>
                            `)}
                        </wa-select>
                    </div>
                    
                    <div class="dialog-actions">
                        <wa-button variant="default" @click=${ne}>
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click=${ae}>
                            OK
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `;at(ue,M)})}const Pn=({commandRegistry:G})=>{G.registerAll({command:{id:"build_map",name:"Build map",description:"Builds a publishable map from a .geospace file",parameters:[{name:"file",description:"Path to the .geospace file relative to workspace root. If not provided, uses the active map editor or selected file.",required:!1},{name:"env",description:"Path to the environment file relative to workspace root (e.g., 'dev.env', 'prod.env'). Defaults to '.env' if not specified.",required:!1},{name:"ask",description:"If true, prompts for missing files (map file or env file) when not provided.",required:!1}]},handler:{execute:async F=>{let O=F.params?.env,U=F.params?.file;const J=F.params?.ask===!0||F.params?.ask==="true",M=await Re.getWorkspace();if(!M){be("No workspace available");return}let H;if(U){const q=await M.getResource(U);if(!q||!(q instanceof Oe)){be(`File not found: ${U}`);return}if(!q.getName().toLowerCase().endsWith(Ce)){be(`File is not a .geospace file: ${U}`);return}H=q}else{const q=ot.get();if(q&&q.input)q.isDirty()&&(await q.save(),ht("Map saved automatically to run build.")),H=q.input.data;else{const re=ct.get();re instanceof Oe&&re.getName().toLowerCase().endsWith(Ce)&&(H=re)}}if(J&&(!H||!O)){const q=await Je(M,Ce),re=await Je(M,kn),ae=H?.getWorkspacePath(),ne=await En(q,re,ae,O||".env");if(ne.geospaceFile===null&&ne.envFile===null)return;if(ne.geospaceFile&&!H){U=ne.geospaceFile;const ue=await M.getResource(U);if(!ue||!(ue instanceof Oe)){be(`File not found: ${U}`);return}if(!ue.getName().toLowerCase().endsWith(Ce)){be(`File is not a .geospace file: ${U}`);return}H=ue}ne.envFile!==null&&(O=ne.envFile||".env")}else if(!H){be("No map editor active, no .geospace file selected, and no file path provided");return}if(!H){be("No map file available");return}return qe.buildMapFile(H,O)}},contribution:{target:"toolbar:map-editor",icon:"hammer",label:"Build map",disabled:()=>!(ot.get()instanceof Jt)}}),qt.registerContribution("contextmenu:filebrowser",{command:"build_map",icon:"hammer",label:"Build map",params:{ask:!0},disabled:()=>{const F=ct.get();return F instanceof Oe?!F.getName().toLowerCase().endsWith(Ce):!0}})};export{Pn as default};
