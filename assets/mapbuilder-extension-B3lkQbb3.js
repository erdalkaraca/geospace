const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CGXaaVt9.js","assets/preload-helper-WQhrSmCl.js","assets/chunk.LTSJC6DR-BCCP1Gxs.js","assets/index-aP6FMjSZ.css"])))=>i.map(i=>d[i]);
import{w as Xe,ad as pt,U as mt,Q as Pe,aC as Jt,aw as gt,M as ct,u as Ne,a5 as ut,q as qt,x as qe,az as ft}from"./index-CGXaaVt9.js";import{l as Ht,G as Yt}from"./geospace-app-B-xjLbq3.js";import{_ as oe,g as Xt}from"./preload-helper-WQhrSmCl.js";import"./chunk.LTSJC6DR-BCCP1Gxs.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";function Kt(A,E){for(var D=0;D<E.length;D++){const S=E[D];if(typeof S!="string"&&!Array.isArray(S)){for(const I in S)if(I!=="default"&&!(I in A)){const k=Object.getOwnPropertyDescriptor(S,I);k&&Object.defineProperty(A,I,k.get?k:{enumerable:!0,get:()=>S[I]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}function Qt(A){const D=[...A.gsMap.controls||[],...A.gsMap.overlays||[]].map(k=>k.src).filter(k=>k),S=D.map((k,F)=>{const L=k.replace(/`/g,"\\`").replace(/\$/g,"\\$");return`import script${F} from '${L}'`}),I=D.map((k,F)=>`${JSON.stringify(k)}: script${F}`).join(`,
        `);return`
import {gsLib} from "${A.gsLibPath}"

${S.join(`
`)}

export const renderMap = (mapContainerSelector) => {
    const modules = {
        ${I}
    }
    return gsLib({
        containerSelector: mapContainerSelector,
        gsMap: ${JSON.stringify(A.gsMap)},
        mapOptions: {
            controls: {zoom: false, attribution: false}
        },
        env: ${JSON.stringify(A.env||{})},
        modules: modules
    })
}
`}function Zt(A,E){return A.replace(/\$PWA_VERSION/g,E)}function en(A,E,D){const S=JSON.parse(A);return S.name=E,S.short_name=E,S.description=E,S.version=D,JSON.stringify(S,null,2)}function tn(A,E){return A.replace(/\$TITLE/g,E)}async function nn(A,E,D,S,I,k,F,L,K){const N=Z=>{F&&F(L!==void 0?++L.value:0,Z,K)};N("Bundling and minifying code...");const Y=await k.build({entryPoints:[A],bundle:!0,outfile:E,format:"esm",minify:!0,plugins:[I],external:[],packages:"bundle"});N("Saving bundled output..."),Y.outputFiles&&Y.outputFiles.length>0&&await S.writeFile(E,Y.outputFiles[0].contents)}function rn(A,E){const D=async(S,I,k,F)=>{const L=`${E}/${S}`;let K=await A.readFile(L);k&&(K instanceof Uint8Array?K=new TextDecoder().decode(K):K=K,F&&(K=await F(K))),await A.writeFile(I,K)};return{async copyTextFile(S,I,k){await D(S,I,!0,k)},async copyBinaryFile(S,I){await D(S,I,!1)}}}async function sn(A,E,D,S,I={},k){const{outputDir:F="dist",buildDir:L="__build",gsLibPath:K=`${L}/gs-lib/index.js`,gsLibPackagePath:N,gsLibCopier:Y,cleanBeforeBuild:Z=!0,cleanAfterBuild:ae=!0,copyAssets:Ee}=I,te=Y||(N?rn(E,N):null);if(!te)throw new Error("Either gsLibCopier or gsLibPackagePath must be provided");const we=K;let Se=I.startingStep??0;const Re=I.totalSteps,ce=ne=>{k&&k(++Se,ne,Re)};if(Z){ce("Cleaning build directories...");const ne=[];if(E.deleteDir)ne.push(E.deleteDir(L).catch(()=>{}),E.deleteDir(F).catch(()=>{}));else try{const ke=await oe(()=>import("./index-CGXaaVt9.js").then($e=>$e.O),__vite__mapDeps([0,1,2,3])),Q=await oe(()=>import("./index-CGXaaVt9.js").then($e=>$e.O),__vite__mapDeps([0,1,2,3])),$=process.cwd();ne.push(ke.rm(Q.resolve($,L),{recursive:!0,force:!0}).catch(()=>{}),ke.rm(Q.resolve($,F),{recursive:!0,force:!0}).catch(()=>{}))}catch{}await Promise.all(ne)}ce("Preparing build directories..."),await Promise.all([E.ensureDir(`${F}/assets/icons/`),E.ensureDir(`${L}/gs-lib/`)]),ce("Copying gs-lib package..."),await Promise.all([te.copyTextFile("dist/index.js",`${L}/gs-lib/index.js`),te.copyTextFile("dist/gs-lib.css",`${F}/app.css`)]),ce("Copying PWA core files..."),await te.copyTextFile("public/pwa/staticwebapp.config.json",`${F}/staticwebapp.config.json`),ce("Processing service worker..."),await te.copyTextFile("public/pwa/sw.js",`${F}/sw.js`,ne=>Zt(ne,A.version)),ce("Creating manifest file..."),await te.copyTextFile("public/pwa/manifest.json",`${F}/manifest.json`,ne=>en(ne,A.title,A.version)),ce("Copying PWA icons...");const ie=["24x24.png","48x48.png","192x192.png","512x512.png","icon_24.png","icon_48.png","icon_192.png","icon_512.png"];await Promise.all(ie.map(ne=>te.copyBinaryFile(`public/pwa/assets/icons/${ne}`,`${F}/assets/icons/${ne}`))),Ee&&(ce("Copying workspace assets..."),await Ee(E,F,k)),ce("Generating application code...");const Me=Qt({gsMap:A.gsMap,gsLibPath:we,env:{...A.env,BUILD_TIME:new Date}});await E.writeFile(`${L}/app.js`,Me),ce("Generating HTML file..."),await te.copyTextFile("public/index.html",`${F}/index.html`,ne=>tn(ne,A.title));const Ae={value:Se};if(await nn(`${L}/app.js`,`${F}/app.js`,we,E,D,S,k,Ae,Re),Se=Ae.value,ae)if(ce("Cleaning up temporary files..."),E.deleteDir)await E.deleteDir(L);else try{const ne=await oe(()=>import("./index-CGXaaVt9.js").then($=>$.O),__vite__mapDeps([0,1,2,3])),Q=(await oe(()=>import("./index-CGXaaVt9.js").then($=>$.O),__vite__mapDeps([0,1,2,3]))).resolve(process.cwd(),L);await ne.rm(Q,{recursive:!0,force:!0})}catch{}ce("Build completed!")}var He={exports:{}},dt;function ln(){return dt||(dt=1,(function(A){(E=>{var D=Object.defineProperty,S=Object.getOwnPropertyDescriptor,I=Object.getOwnPropertyNames,k=Object.prototype.hasOwnProperty,F=(e,n)=>{for(var r in n)D(e,r,{get:n[r],enumerable:!0})},L=(e,n,r,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let m of I(n))!k.call(e,m)&&m!==r&&D(e,m,{get:()=>n[m],enumerable:!(o=S(n,m))||o.enumerable});return e},K=e=>L(D({},"__esModule",{value:!0}),e),N=(e,n,r)=>new Promise((o,m)=>{var w=u=>{try{P(r.next(u))}catch(V){m(V)}},h=u=>{try{P(r.throw(u))}catch(V){m(V)}},P=u=>u.done?o(u.value):Promise.resolve(u.value).then(w,h);P((r=r.apply(e,n)).next())}),Y={};F(Y,{analyzeMetafile:()=>Ft,analyzeMetafileSync:()=>Nt,build:()=>jt,buildSync:()=>It,context:()=>Dt,default:()=>Wt,formatMessages:()=>At,formatMessagesSync:()=>Lt,initialize:()=>Bt,stop:()=>Mt,transform:()=>Rt,transformSync:()=>Ut,version:()=>Ct}),E.exports=K(Y);function Z(e){let n=o=>{if(o===null)r.write8(0);else if(typeof o=="boolean")r.write8(1),r.write8(+o);else if(typeof o=="number")r.write8(2),r.write32(o|0);else if(typeof o=="string")r.write8(3),r.write(te(o));else if(o instanceof Uint8Array)r.write8(4),r.write(o);else if(o instanceof Array){r.write8(5),r.write32(o.length);for(let m of o)n(m)}else{let m=Object.keys(o);r.write8(6),r.write32(m.length);for(let w of m)r.write(te(w)),n(o[w])}},r=new Ee;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),n(e.value),ce(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function ae(e){let n=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return we(r.read());case 4:return r.read();case 5:{let h=r.read32(),P=[];for(let u=0;u<h;u++)P.push(n());return P}case 6:{let h=r.read32(),P={};for(let u=0;u<h;u++)P[we(r.read())]=n();return P}default:throw new Error("Invalid packet")}},r=new Ee(e),o=r.read32(),m=(o&1)===0;o>>>=1;let w=n();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:m,value:w}}var Ee=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let n=new Uint8Array((this.len+e)*2);n.set(this.buf),this.buf=n}return this.len+=e,this.len-e}write8(e){let n=this._write(1);this.buf[n]=e}write32(e){let n=this._write(4);ce(this.buf,e,n)}write(e){let n=this._write(4+e.length);ce(this.buf,e.length,n),this.buf.set(e,n+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return Re(this.buf,this._read(4))}read(){let e=this.read32(),n=new Uint8Array(e),r=this._read(n.length);return n.set(this.buf.subarray(r,r+e)),n}},te,we,Se;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,n=new TextDecoder;te=r=>e.encode(r),we=r=>n.decode(r),Se='new TextEncoder().encode("")'}else if(typeof Buffer<"u")te=e=>Buffer.from(e),we=e=>{let{buffer:n,byteOffset:r,byteLength:o}=e;return Buffer.from(n,r,o).toString()},Se='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(te("")instanceof Uint8Array))throw new Error(`Invariant violation: "${Se} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function Re(e,n){return e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24}function ce(e,n,r){e[r++]=n,e[r++]=n>>8,e[r++]=n>>16,e[r++]=n>>24}var ie=JSON.stringify,Me="warning",Ae="silent";function ne(e,n){const r=[];for(const o of e){if(fe(o,n),o.indexOf(",")>=0)throw new Error(`Invalid ${n}: ${o}`);r.push(o)}return r.join(",")}var ke=()=>null,Q=e=>typeof e=="boolean"?null:"a boolean",$=e=>typeof e=="string"?null:"a string",$e=e=>e instanceof RegExp?null:"a RegExp object",Te=e=>typeof e=="number"&&e===(e|0)?null:"an integer",wt=e=>typeof e=="number"&&e===(e|0)&&e>=0&&e<=65535?null:"a valid port number",Ze=e=>typeof e=="function"?null:"a function",ye=e=>Array.isArray(e)?null:"an array",ue=e=>Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"an array of strings",he=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",yt=e=>typeof e=="object"&&e!==null?null:"an array or an object",vt=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",et=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",tt=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",bt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",nt=e=>typeof e=="string"||Array.isArray(e)&&e.every(n=>typeof n=="string")?null:"a string or an array of strings",rt=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array",_t=e=>typeof e=="string"||e instanceof URL?null:"a string or a URL";function s(e,n,r,o){let m=e[r];if(n[r+""]=!0,m===void 0)return;let w=o(m);if(w!==null)throw new Error(`${ie(r)} must be ${w}`);return m}function se(e,n,r){for(let o in e)if(!(o in n))throw new Error(`Invalid option ${r}: ${ie(o)}`)}function xt(e){let n=Object.create(null),r=s(e,n,"wasmURL",_t),o=s(e,n,"wasmModule",vt),m=s(e,n,"worker",Q);return se(e,n,"in initialize() call"),{wasmURL:r,wasmModule:o,worker:m}}function it(e){let n;if(e!==void 0){n=Object.create(null);for(let r in e){let o=e[r];if(typeof o=="string"||o===!1)n[r]=o;else throw new Error(`Expected ${ie(r)} in mangle cache to map to either a string or false`)}}return n}function Be(e,n,r,o,m){let w=s(n,r,"color",Q),h=s(n,r,"logLevel",$),P=s(n,r,"logLimit",Te);w!==void 0?e.push(`--color=${w}`):o&&e.push("--color=true"),e.push(`--log-level=${h||m}`),e.push(`--log-limit=${P||0}`)}function fe(e,n,r){if(typeof e!="string")throw new Error(`Expected value for ${n}${r!==void 0?" "+ie(r):""} to be a string, got ${typeof e} instead`);return e}function st(e,n,r){let o=s(n,r,"legalComments",$),m=s(n,r,"sourceRoot",$),w=s(n,r,"sourcesContent",Q),h=s(n,r,"target",nt),P=s(n,r,"format",$),u=s(n,r,"globalName",$),V=s(n,r,"mangleProps",$e),W=s(n,r,"reserveProps",$e),U=s(n,r,"mangleQuoted",Q),X=s(n,r,"minify",Q),M=s(n,r,"minifySyntax",Q),J=s(n,r,"minifyWhitespace",Q),q=s(n,r,"minifyIdentifiers",Q),j=s(n,r,"lineLimit",Te),re=s(n,r,"drop",ue),O=s(n,r,"dropLabels",ue),T=s(n,r,"charset",$),g=s(n,r,"treeShaking",Q),f=s(n,r,"ignoreAnnotations",Q),i=s(n,r,"jsx",$),a=s(n,r,"jsxFactory",$),d=s(n,r,"jsxFragment",$),b=s(n,r,"jsxImportSource",$),_=s(n,r,"jsxDev",Q),c=s(n,r,"jsxSideEffects",Q),p=s(n,r,"define",he),t=s(n,r,"logOverride",he),l=s(n,r,"supported",he),y=s(n,r,"pure",ue),v=s(n,r,"keepNames",Q),C=s(n,r,"platform",$),B=s(n,r,"tsconfigRaw",bt),ee=s(n,r,"absPaths",ue);if(o&&e.push(`--legal-comments=${o}`),m!==void 0&&e.push(`--source-root=${m}`),w!==void 0&&e.push(`--sources-content=${w}`),h&&e.push(`--target=${ne(Array.isArray(h)?h:[h],"target")}`),P&&e.push(`--format=${P}`),u&&e.push(`--global-name=${u}`),C&&e.push(`--platform=${C}`),B&&e.push(`--tsconfig-raw=${typeof B=="string"?B:JSON.stringify(B)}`),X&&e.push("--minify"),M&&e.push("--minify-syntax"),J&&e.push("--minify-whitespace"),q&&e.push("--minify-identifiers"),j&&e.push(`--line-limit=${j}`),T&&e.push(`--charset=${T}`),g!==void 0&&e.push(`--tree-shaking=${g}`),f&&e.push("--ignore-annotations"),re)for(let x of re)e.push(`--drop:${fe(x,"drop")}`);if(O&&e.push(`--drop-labels=${ne(O,"drop label")}`),ee&&e.push(`--abs-paths=${ne(ee,"abs paths")}`),V&&e.push(`--mangle-props=${ze(V)}`),W&&e.push(`--reserve-props=${ze(W)}`),U!==void 0&&e.push(`--mangle-quoted=${U}`),i&&e.push(`--jsx=${i}`),a&&e.push(`--jsx-factory=${a}`),d&&e.push(`--jsx-fragment=${d}`),b&&e.push(`--jsx-import-source=${b}`),_&&e.push("--jsx-dev"),c&&e.push("--jsx-side-effects"),p)for(let x in p){if(x.indexOf("=")>=0)throw new Error(`Invalid define: ${x}`);e.push(`--define:${x}=${fe(p[x],"define",x)}`)}if(t)for(let x in t){if(x.indexOf("=")>=0)throw new Error(`Invalid log override: ${x}`);e.push(`--log-override:${x}=${fe(t[x],"log override",x)}`)}if(l)for(let x in l){if(x.indexOf("=")>=0)throw new Error(`Invalid supported: ${x}`);const H=l[x];if(typeof H!="boolean")throw new Error(`Expected value for supported ${ie(x)} to be a boolean, got ${typeof H} instead`);e.push(`--supported:${x}=${H}`)}if(y)for(let x of y)e.push(`--pure:${fe(x,"pure")}`);v&&e.push("--keep-names")}function Et(e,n,r,o,m){var w;let h=[],P=[],u=Object.create(null),V=null,W=null;Be(h,n,u,r,o),st(h,n,u);let U=s(n,u,"sourcemap",tt),X=s(n,u,"bundle",Q),M=s(n,u,"splitting",Q),J=s(n,u,"preserveSymlinks",Q),q=s(n,u,"metafile",Q),j=s(n,u,"outfile",$),re=s(n,u,"outdir",$),O=s(n,u,"outbase",$),T=s(n,u,"tsconfig",$),g=s(n,u,"resolveExtensions",ue),f=s(n,u,"nodePaths",ue),i=s(n,u,"mainFields",ue),a=s(n,u,"conditions",ue),d=s(n,u,"external",ue),b=s(n,u,"packages",$),_=s(n,u,"alias",he),c=s(n,u,"loader",he),p=s(n,u,"outExtension",he),t=s(n,u,"publicPath",$),l=s(n,u,"entryNames",$),y=s(n,u,"chunkNames",$),v=s(n,u,"assetNames",$),C=s(n,u,"inject",ue),B=s(n,u,"banner",he),ee=s(n,u,"footer",he),x=s(n,u,"entryPoints",yt),H=s(n,u,"absWorkingDir",$),G=s(n,u,"stdin",he),z=(w=s(n,u,"write",Q))!=null?w:m,de=s(n,u,"allowOverwrite",Q),le=s(n,u,"mangleCache",he);if(u.plugins=!0,se(n,u,`in ${e}() call`),U&&h.push(`--sourcemap${U===!0?"":`=${U}`}`),X&&h.push("--bundle"),de&&h.push("--allow-overwrite"),M&&h.push("--splitting"),J&&h.push("--preserve-symlinks"),q&&h.push("--metafile"),j&&h.push(`--outfile=${j}`),re&&h.push(`--outdir=${re}`),O&&h.push(`--outbase=${O}`),T&&h.push(`--tsconfig=${T}`),b&&h.push(`--packages=${b}`),g&&h.push(`--resolve-extensions=${ne(g,"resolve extension")}`),t&&h.push(`--public-path=${t}`),l&&h.push(`--entry-names=${l}`),y&&h.push(`--chunk-names=${y}`),v&&h.push(`--asset-names=${v}`),i&&h.push(`--main-fields=${ne(i,"main field")}`),a&&h.push(`--conditions=${ne(a,"condition")}`),d)for(let R of d)h.push(`--external:${fe(R,"external")}`);if(_)for(let R in _){if(R.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${R}`);h.push(`--alias:${R}=${fe(_[R],"alias",R)}`)}if(B)for(let R in B){if(R.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${R}`);h.push(`--banner:${R}=${fe(B[R],"banner",R)}`)}if(ee)for(let R in ee){if(R.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${R}`);h.push(`--footer:${R}=${fe(ee[R],"footer",R)}`)}if(C)for(let R of C)h.push(`--inject:${fe(R,"inject")}`);if(c)for(let R in c){if(R.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${R}`);h.push(`--loader:${R}=${fe(c[R],"loader",R)}`)}if(p)for(let R in p){if(R.indexOf("=")>=0)throw new Error(`Invalid out extension: ${R}`);h.push(`--out-extension:${R}=${fe(p[R],"out extension",R)}`)}if(x)if(Array.isArray(x))for(let R=0,_e=x.length;R<_e;R++){let pe=x[R];if(typeof pe=="object"&&pe!==null){let ge=Object.create(null),xe=s(pe,ge,"in",$),me=s(pe,ge,"out",$);if(se(pe,ge,"in entry point at index "+R),xe===void 0)throw new Error('Missing property "in" for entry point at index '+R);if(me===void 0)throw new Error('Missing property "out" for entry point at index '+R);P.push([me,xe])}else P.push(["",fe(pe,"entry point at index "+R)])}else for(let R in x)P.push([R,fe(x[R],"entry point",R)]);if(G){let R=Object.create(null),_e=s(G,R,"contents",rt),pe=s(G,R,"resolveDir",$),ge=s(G,R,"sourcefile",$),xe=s(G,R,"loader",$);se(G,R,'in "stdin" object'),ge&&h.push(`--sourcefile=${ge}`),xe&&h.push(`--loader=${xe}`),pe&&(W=pe),typeof _e=="string"?V=te(_e):_e instanceof Uint8Array&&(V=_e)}let be=[];if(f)for(let R of f)R+="",be.push(R);return{entries:P,flags:h,write:z,stdinContents:V,stdinResolveDir:W,absWorkingDir:H,nodePaths:be,mangleCache:it(le)}}function kt(e,n,r,o){let m=[],w=Object.create(null);Be(m,n,w,r,o),st(m,n,w);let h=s(n,w,"sourcemap",tt),P=s(n,w,"sourcefile",$),u=s(n,w,"loader",$),V=s(n,w,"banner",$),W=s(n,w,"footer",$),U=s(n,w,"mangleCache",he);return se(n,w,`in ${e}() call`),h&&m.push(`--sourcemap=${h===!0?"external":h}`),P&&m.push(`--sourcefile=${P}`),u&&m.push(`--loader=${u}`),V&&m.push(`--banner=${V}`),W&&m.push(`--footer=${W}`),{flags:m,mangleCache:it(U)}}function $t(e){const n={},r={didClose:!1,reason:""};let o={},m=0,w=0,h=new Uint8Array(16*1024),P=0,u=T=>{let g=P+T.length;if(g>h.length){let i=new Uint8Array(g*2);i.set(h),h=i}h.set(T,P),P+=T.length;let f=0;for(;f+4<=P;){let i=Re(h,f);if(f+4+i>P)break;f+=4,J(h.subarray(f,f+i)),f+=i}f>0&&(h.copyWithin(0,f,P),P-=f)},V=T=>{r.didClose=!0,T&&(r.reason=": "+(T.message||T));const g="The service was stopped"+r.reason;for(let f in o)o[f](g,null);o={}},W=(T,g,f)=>{if(r.didClose)return f("The service is no longer running"+r.reason,null);let i=m++;o[i]=(a,d)=>{try{f(a,d)}finally{T&&T.unref()}},T&&T.ref(),e.writeToStdin(Z({id:i,isRequest:!0,value:g}))},U=(T,g)=>{if(r.didClose)throw new Error("The service is no longer running"+r.reason);e.writeToStdin(Z({id:T,isRequest:!1,value:g}))},X=(T,g)=>N(null,null,function*(){try{if(g.command==="ping"){U(T,{});return}if(typeof g.key=="number"){const f=n[g.key];if(!f)return;const i=f[g.command];if(i){yield i(T,g);return}}throw new Error("Invalid command: "+g.command)}catch(f){const i=[Oe(f,e,null,void 0,"")];try{U(T,{errors:i})}catch{}}}),M=!0,J=T=>{if(M){M=!1;let f=String.fromCharCode(...T);if(f!=="0.25.12")throw new Error(`Cannot start service: Host version "0.25.12" does not match binary version ${ie(f)}`);return}let g=ae(T);if(g.isRequest)X(g.id,g.value);else{let f=o[g.id];delete o[g.id],g.value.error?f(g.value.error,{}):f(null,g.value)}};return{readFromStdout:u,afterClose:V,service:{buildOrContext:({callName:T,refs:g,options:f,isTTY:i,defaultWD:a,callback:d})=>{let b=0;const _=w++,c={},p={ref(){++b===1&&g&&g.ref()},unref(){--b===0&&(delete n[_],g&&g.unref())}};n[_]=c,p.ref(),Pt(T,_,W,U,p,e,c,f,i,a,(t,l)=>{try{d(t,l)}finally{p.unref()}})},transform:({callName:T,refs:g,input:f,options:i,isTTY:a,fs:d,callback:b})=>{const _=lt();let c=p=>{try{if(typeof f!="string"&&!(f instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:t,mangleCache:l}=kt(T,i,a,Ae),y={command:"transform",flags:t,inputFS:p!==null,input:p!==null?te(p):typeof f=="string"?te(f):f};l&&(y.mangleCache=l),W(g,y,(v,C)=>{if(v)return b(new Error(v),null);let B=je(C.errors,_),ee=je(C.warnings,_),x=1,H=()=>{if(--x===0){let G={warnings:ee,code:C.code,map:C.map,mangleCache:void 0,legalComments:void 0};"legalComments"in C&&(G.legalComments=C?.legalComments),C.mangleCache&&(G.mangleCache=C?.mangleCache),b(null,G)}};if(B.length>0)return b(Fe("Transform failed",B,ee),null);C.codeFS&&(x++,d.readFile(C.code,(G,z)=>{G!==null?b(G,null):(C.code=z,H())})),C.mapFS&&(x++,d.readFile(C.map,(G,z)=>{G!==null?b(G,null):(C.map=z,H())})),H()})}catch(t){let l=[];try{Be(l,i,{},a,Ae)}catch{}const y=Oe(t,e,_,void 0,"");W(g,{command:"error",flags:l,error:y},()=>{y.detail=_.load(y.detail),b(Fe("Transform failed",[y],[]),null)})}};if((typeof f=="string"||f instanceof Uint8Array)&&f.length>1024*1024){let p=c;c=()=>d.writeFile(f,p)}c(null)},formatMessages:({callName:T,refs:g,messages:f,options:i,callback:a})=>{if(!i)throw new Error(`Missing second argument in ${T}() call`);let d={},b=s(i,d,"kind",$),_=s(i,d,"color",Q),c=s(i,d,"terminalWidth",Te);if(se(i,d,`in ${T}() call`),b===void 0)throw new Error(`Missing "kind" in ${T}() call`);if(b!=="error"&&b!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${T}() call`);let p={command:"format-msgs",messages:ve(f,"messages",null,"",c),isWarning:b==="warning"};_!==void 0&&(p.color=_),c!==void 0&&(p.terminalWidth=c),W(g,p,(t,l)=>{if(t)return a(new Error(t),null);a(null,l.messages)})},analyzeMetafile:({callName:T,refs:g,metafile:f,options:i,callback:a})=>{i===void 0&&(i={});let d={},b=s(i,d,"color",Q),_=s(i,d,"verbose",Q);se(i,d,`in ${T}() call`);let c={command:"analyze-metafile",metafile:f};b!==void 0&&(c.color=b),_!==void 0&&(c.verbose=_),W(g,c,(p,t)=>{if(p)return a(new Error(p),null);a(null,t.result)})}}}}function Pt(e,n,r,o,m,w,h,P,u,V,W){const U=lt(),X=e==="context",M=(j,re)=>{const O=[];try{Be(O,P,{},u,Me)}catch{}const T=Oe(j,w,U,void 0,re);r(m,{command:"error",flags:O,error:T},()=>{T.detail=U.load(T.detail),W(Fe(X?"Context failed":"Build failed",[T],[]),null)})};let J;if(typeof P=="object"){const j=P.plugins;if(j!==void 0){if(!Array.isArray(j))return M(new Error('"plugins" must be an array'),"");J=j}}if(J&&J.length>0){if(w.isSync)return M(new Error("Cannot use plugins in synchronous API calls"),"");St(n,r,o,m,w,h,P,J,U).then(j=>{if(!j.ok)return M(j.error,j.pluginName);try{q(j.requestPlugins,j.runOnEndCallbacks,j.scheduleOnDisposeCallbacks)}catch(re){M(re,"")}},j=>M(j,""));return}try{q(null,(j,re)=>re([],[]),()=>{})}catch(j){M(j,"")}function q(j,re,O){const T=w.hasFS,{entries:g,flags:f,write:i,stdinContents:a,stdinResolveDir:d,absWorkingDir:b,nodePaths:_,mangleCache:c}=Et(e,P,u,Me,T);if(i&&!w.hasFS)throw new Error('The "write" option is unavailable in this environment');const p={command:"build",key:n,entries:g,flags:f,write:i,stdinContents:a,stdinResolveDir:d,absWorkingDir:b||V,nodePaths:_,context:X};j&&(p.plugins=j),c&&(p.mangleCache=c);const t=(v,C)=>{const B={errors:je(v.errors,U),warnings:je(v.warnings,U),outputFiles:void 0,metafile:void 0,mangleCache:void 0},ee=B.errors.slice(),x=B.warnings.slice();v.outputFiles&&(B.outputFiles=v.outputFiles.map(Ot)),v.metafile&&(B.metafile=JSON.parse(v.metafile)),v.mangleCache&&(B.mangleCache=v.mangleCache),v.writeToStdout!==void 0&&console.log(we(v.writeToStdout).replace(/\n$/,"")),re(B,(H,G)=>{if(ee.length>0||H.length>0){const z=Fe("Build failed",ee.concat(H),x.concat(G));return C(z,null,H,G)}C(null,B,H,G)})};let l,y;X&&(h["on-end"]=(v,C)=>new Promise(B=>{t(C,(ee,x,H,G)=>{const z={errors:H,warnings:G};y&&y(ee,x),l=void 0,y=void 0,o(v,z),B()})})),r(m,p,(v,C)=>{if(v)return W(new Error(v),null);if(!X)return t(C,(x,H)=>(O(),W(x,H)));if(C.errors.length>0)return W(Fe("Context failed",C.errors,C.warnings),null);let B=!1;const ee={rebuild:()=>(l||(l=new Promise((x,H)=>{let G;y=(de,le)=>{G||(G=()=>de?H(de):x(le))};const z=()=>{r(m,{command:"rebuild",key:n},(le,be)=>{le?H(new Error(le)):G?G():z()})};z()})),l),watch:(x={})=>new Promise((H,G)=>{if(!w.hasFS)throw new Error('Cannot use the "watch" API in this environment');const z={},de=s(x,z,"delay",Te);se(x,z,"in watch() call");const le={command:"watch",key:n};de&&(le.delay=de),r(m,le,be=>{be?G(new Error(be)):H(void 0)})}),serve:(x={})=>new Promise((H,G)=>{if(!w.hasFS)throw new Error('Cannot use the "serve" API in this environment');const z={},de=s(x,z,"port",wt),le=s(x,z,"host",$),be=s(x,z,"servedir",$),R=s(x,z,"keyfile",$),_e=s(x,z,"certfile",$),pe=s(x,z,"fallback",$),ge=s(x,z,"cors",he),xe=s(x,z,"onRequest",Ze);se(x,z,"in serve() call");const me={command:"serve",key:n,onRequest:!!xe};if(de!==void 0&&(me.port=de),le!==void 0&&(me.host=le),be!==void 0&&(me.servedir=be),R!==void 0&&(me.keyfile=R),_e!==void 0&&(me.certfile=_e),pe!==void 0&&(me.fallback=pe),ge){const Ue={},De=s(ge,Ue,"origin",nt);se(ge,Ue,'on "cors" object'),Array.isArray(De)?me.corsOrigin=De:De!==void 0&&(me.corsOrigin=[De])}r(m,me,(Ue,De)=>{if(Ue)return G(new Error(Ue));xe&&(h["serve-request"]=(zt,Gt)=>{xe(Gt.args),o(zt,{})}),H(De)})}),cancel:()=>new Promise(x=>{if(B)return x();r(m,{command:"cancel",key:n},()=>{x()})}),dispose:()=>new Promise(x=>{if(B)return x();B=!0,r(m,{command:"dispose",key:n},()=>{x(),O(),m.unref()})})};m.ref(),W(null,ee)})}}var St=(e,n,r,o,m,w,h,P,u)=>N(null,null,function*(){let V=[],W=[],U={},X={},M=[],J=0,q=0,j=[],re=!1;P=[...P];for(let g of P){let f={};if(typeof g!="object")throw new Error(`Plugin at index ${q} must be an object`);const i=s(g,f,"name",$);if(typeof i!="string"||i==="")throw new Error(`Plugin at index ${q} is missing a name`);try{let a=s(g,f,"setup",Ze);if(typeof a!="function")throw new Error("Plugin is missing a setup function");se(g,f,`on plugin ${ie(i)}`);let d={name:i,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};q++;let _=a({initialOptions:h,resolve:(c,p={})=>{if(!re)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof c!="string")throw new Error("The path to resolve must be a string");let t=Object.create(null),l=s(p,t,"pluginName",$),y=s(p,t,"importer",$),v=s(p,t,"namespace",$),C=s(p,t,"resolveDir",$),B=s(p,t,"kind",$),ee=s(p,t,"pluginData",ke),x=s(p,t,"with",he);return se(p,t,"in resolve() call"),new Promise((H,G)=>{const z={command:"resolve",path:c,key:e,pluginName:i};if(l!=null&&(z.pluginName=l),y!=null&&(z.importer=y),v!=null&&(z.namespace=v),C!=null&&(z.resolveDir=C),B!=null)z.kind=B;else throw new Error('Must specify "kind" when calling "resolve"');ee!=null&&(z.pluginData=u.store(ee)),x!=null&&(z.with=Tt(x,"with")),n(o,z,(de,le)=>{de!==null?G(new Error(de)):H({errors:je(le.errors,u),warnings:je(le.warnings,u),path:le.path,external:le.external,sideEffects:le.sideEffects,namespace:le.namespace,suffix:le.suffix,pluginData:u.load(le.pluginData)})})})},onStart(c){let p='This error came from the "onStart" callback registered here:',t=Ve(new Error(p),m,"onStart");V.push({name:i,callback:c,note:t}),d.onStart=!0},onEnd(c){let p='This error came from the "onEnd" callback registered here:',t=Ve(new Error(p),m,"onEnd");W.push({name:i,callback:c,note:t}),d.onEnd=!0},onResolve(c,p){let t='This error came from the "onResolve" callback registered here:',l=Ve(new Error(t),m,"onResolve"),y={},v=s(c,y,"filter",$e),C=s(c,y,"namespace",$);if(se(c,y,`in onResolve() call for plugin ${ie(i)}`),v==null)throw new Error("onResolve() call is missing a filter");let B=J++;U[B]={name:i,callback:p,note:l},d.onResolve.push({id:B,filter:ze(v),namespace:C||""})},onLoad(c,p){let t='This error came from the "onLoad" callback registered here:',l=Ve(new Error(t),m,"onLoad"),y={},v=s(c,y,"filter",$e),C=s(c,y,"namespace",$);if(se(c,y,`in onLoad() call for plugin ${ie(i)}`),v==null)throw new Error("onLoad() call is missing a filter");let B=J++;X[B]={name:i,callback:p,note:l},d.onLoad.push({id:B,filter:ze(v),namespace:C||""})},onDispose(c){M.push(c)},esbuild:m.esbuild});_&&(yield _),j.push(d)}catch(a){return{ok:!1,error:a,pluginName:i}}}w["on-start"]=(g,f)=>N(null,null,function*(){u.clear();let i={errors:[],warnings:[]};yield Promise.all(V.map(a=>N(null,[a],function*({name:d,callback:b,note:_}){try{let c=yield b();if(c!=null){if(typeof c!="object")throw new Error(`Expected onStart() callback in plugin ${ie(d)} to return an object`);let p={},t=s(c,p,"errors",ye),l=s(c,p,"warnings",ye);se(c,p,`from onStart() callback in plugin ${ie(d)}`),t!=null&&i.errors.push(...ve(t,"errors",u,d,void 0)),l!=null&&i.warnings.push(...ve(l,"warnings",u,d,void 0))}}catch(c){i.errors.push(Oe(c,m,u,_&&_(),d))}}))),r(g,i)}),w["on-resolve"]=(g,f)=>N(null,null,function*(){let i={},a="",d,b;for(let _ of f.ids)try{({name:a,callback:d,note:b}=U[_]);let c=yield d({path:f.path,importer:f.importer,namespace:f.namespace,resolveDir:f.resolveDir,kind:f.kind,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onResolve() callback in plugin ${ie(a)} to return an object`);let p={},t=s(c,p,"pluginName",$),l=s(c,p,"path",$),y=s(c,p,"namespace",$),v=s(c,p,"suffix",$),C=s(c,p,"external",Q),B=s(c,p,"sideEffects",Q),ee=s(c,p,"pluginData",ke),x=s(c,p,"errors",ye),H=s(c,p,"warnings",ye),G=s(c,p,"watchFiles",ue),z=s(c,p,"watchDirs",ue);se(c,p,`from onResolve() callback in plugin ${ie(a)}`),i.id=_,t!=null&&(i.pluginName=t),l!=null&&(i.path=l),y!=null&&(i.namespace=y),v!=null&&(i.suffix=v),C!=null&&(i.external=C),B!=null&&(i.sideEffects=B),ee!=null&&(i.pluginData=u.store(ee)),x!=null&&(i.errors=ve(x,"errors",u,a,void 0)),H!=null&&(i.warnings=ve(H,"warnings",u,a,void 0)),G!=null&&(i.watchFiles=We(G,"watchFiles")),z!=null&&(i.watchDirs=We(z,"watchDirs"));break}}catch(c){i={id:_,errors:[Oe(c,m,u,b&&b(),a)]};break}r(g,i)}),w["on-load"]=(g,f)=>N(null,null,function*(){let i={},a="",d,b;for(let _ of f.ids)try{({name:a,callback:d,note:b}=X[_]);let c=yield d({path:f.path,namespace:f.namespace,suffix:f.suffix,pluginData:u.load(f.pluginData),with:f.with});if(c!=null){if(typeof c!="object")throw new Error(`Expected onLoad() callback in plugin ${ie(a)} to return an object`);let p={},t=s(c,p,"pluginName",$),l=s(c,p,"contents",rt),y=s(c,p,"resolveDir",$),v=s(c,p,"pluginData",ke),C=s(c,p,"loader",$),B=s(c,p,"errors",ye),ee=s(c,p,"warnings",ye),x=s(c,p,"watchFiles",ue),H=s(c,p,"watchDirs",ue);se(c,p,`from onLoad() callback in plugin ${ie(a)}`),i.id=_,t!=null&&(i.pluginName=t),l instanceof Uint8Array?i.contents=l:l!=null&&(i.contents=te(l)),y!=null&&(i.resolveDir=y),v!=null&&(i.pluginData=u.store(v)),C!=null&&(i.loader=C),B!=null&&(i.errors=ve(B,"errors",u,a,void 0)),ee!=null&&(i.warnings=ve(ee,"warnings",u,a,void 0)),x!=null&&(i.watchFiles=We(x,"watchFiles")),H!=null&&(i.watchDirs=We(H,"watchDirs"));break}}catch(c){i={id:_,errors:[Oe(c,m,u,b&&b(),a)]};break}r(g,i)});let O=(g,f)=>f([],[]);W.length>0&&(O=(g,f)=>{N(null,null,function*(){const i=[],a=[];for(const{name:d,callback:b,note:_}of W){let c,p;try{const t=yield b(g);if(t!=null){if(typeof t!="object")throw new Error(`Expected onEnd() callback in plugin ${ie(d)} to return an object`);let l={},y=s(t,l,"errors",ye),v=s(t,l,"warnings",ye);se(t,l,`from onEnd() callback in plugin ${ie(d)}`),y!=null&&(c=ve(y,"errors",u,d,void 0)),v!=null&&(p=ve(v,"warnings",u,d,void 0))}}catch(t){c=[Oe(t,m,u,_&&_(),d)]}if(c){i.push(...c);try{g.errors.push(...c)}catch{}}if(p){a.push(...p);try{g.warnings.push(...p)}catch{}}}f(i,a)})});let T=()=>{for(const g of M)setTimeout(()=>g(),0)};return re=!0,{ok:!0,requestPlugins:j,runOnEndCallbacks:O,scheduleOnDisposeCallbacks:T}});function lt(){const e=new Map;let n=0;return{clear(){e.clear()},load(r){return e.get(r)},store(r){if(r===void 0)return-1;const o=n++;return e.set(o,r),o}}}function Ve(e,n,r){let o,m=!1;return()=>{if(m)return o;m=!0;try{let w=(e.stack+"").split(`
`);w.splice(1,1);let h=at(n,w,r);if(h)return o={text:e.message,location:h},o}catch{}}}function Oe(e,n,r,o,m){let w="Internal error",h=null;try{w=(e&&e.message||e)+""}catch{}try{h=at(n,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:m,text:w,location:h,notes:o?[o]:[],detail:r?r.store(e):-1}}function at(e,n,r){let o="    at ";if(e.readFileSync&&!n[0].startsWith(o)&&n[1].startsWith(o))for(let m=1;m<n.length;m++){let w=n[m];if(w.startsWith(o))for(w=w.slice(o.length);;){let h=/^(?:new |async )?\S+ \((.*)\)$/.exec(w);if(h){w=h[1];continue}if(h=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(w),h){w=h[1];continue}if(h=/^(\S+):(\d+):(\d+)$/.exec(w),h){let P;try{P=e.readFileSync(h[1],"utf8")}catch{break}let u=P.split(/\r\n|\r|\n|\u2028|\u2029/)[+h[2]-1]||"",V=+h[3]-1,W=u.slice(V,V+r.length)===r?r.length:0;return{file:h[1],namespace:"file",line:+h[2],column:te(u.slice(0,V)).length,length:te(u.slice(V,V+W)).length,lineText:u+`
`+n.slice(1).join(`
`),suggestion:""}}break}}return null}function Fe(e,n,r){let o=5;e+=n.length<1?"":` with ${n.length} error${n.length<2?"":"s"}:`+n.slice(0,o+1).map((w,h)=>{if(h===o)return`
...`;if(!w.location)return`
error: ${w.text}`;let{file:P,line:u,column:V}=w.location,W=w.pluginName?`[plugin: ${w.pluginName}] `:"";return`
${P}:${u}:${V}: ERROR: ${W}${w.text}`}).join("");let m=new Error(e);for(const[w,h]of[["errors",n],["warnings",r]])Object.defineProperty(m,w,{configurable:!0,enumerable:!0,get:()=>h,set:P=>Object.defineProperty(m,w,{configurable:!0,enumerable:!0,value:P})});return m}function je(e,n){for(const r of e)r.detail=n.load(r.detail);return e}function ot(e,n,r){if(e==null)return null;let o={},m=s(e,o,"file",$),w=s(e,o,"namespace",$),h=s(e,o,"line",Te),P=s(e,o,"column",Te),u=s(e,o,"length",Te),V=s(e,o,"lineText",$),W=s(e,o,"suggestion",$);if(se(e,o,n),V){const U=V.slice(0,(P&&P>0?P:0)+(u&&u>0?u:0)+(r&&r>0?r:80));!/[\x7F-\uFFFF]/.test(U)&&!/\n/.test(V)&&(V=U)}return{file:m||"",namespace:w||"",line:h||0,column:P||0,length:u||0,lineText:V||"",suggestion:W||""}}function ve(e,n,r,o,m){let w=[],h=0;for(const P of e){let u={},V=s(P,u,"id",$),W=s(P,u,"pluginName",$),U=s(P,u,"text",$),X=s(P,u,"location",et),M=s(P,u,"notes",ye),J=s(P,u,"detail",ke),q=`in element ${h} of "${n}"`;se(P,u,q);let j=[];if(M)for(const re of M){let O={},T=s(re,O,"text",$),g=s(re,O,"location",et);se(re,O,q),j.push({text:T||"",location:ot(g,q,m)})}w.push({id:V||"",pluginName:W||o,text:U||"",location:ot(X,q,m),notes:j,detail:r?r.store(J):-1}),h++}return w}function We(e,n){const r=[];for(const o of e){if(typeof o!="string")throw new Error(`${ie(n)} must be an array of strings`);r.push(o)}return r}function Tt(e,n){const r=Object.create(null);for(const o in e){const m=e[o];if(typeof m!="string")throw new Error(`key ${ie(o)} in object ${ie(n)} must be a string`);r[o]=m}return r}function Ot({path:e,contents:n,hash:r}){let o=null;return{path:e,contents:n,hash:r,get text(){const m=this.contents;return(o===null||m!==n)&&(n=m,o=we(m)),o}}}function ze(e){let n=e.source;return e.flags&&(n=`(?${e.flags})${n}`),n}var Ct="0.25.12",jt=e=>Ie().build(e),Dt=e=>Ie().context(e),Rt=(e,n)=>Ie().transform(e,n),At=(e,n)=>Ie().formatMessages(e,n),Ft=(e,n)=>Ie().analyzeMetafile(e,n),It=()=>{throw new Error('The "buildSync" API only works in node')},Ut=()=>{throw new Error('The "transformSync" API only works in node')},Lt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Nt=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Mt=()=>(Ge&&Ge(),Promise.resolve()),Ce,Ge,Je,Ie=()=>{if(Je)return Je;throw Ce?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Bt=e=>{e=xt(e||{});let n=e.wasmURL,r=e.wasmModule,o=e.worker!==!1;if(!n&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Ce)throw new Error('Cannot call "initialize" more than once');return Ce=Vt(n||"",r,o),Ce.catch(()=>{Ce=void 0}),Ce},Vt=(e,n,r)=>N(null,null,function*(){let o,m;const w=new Promise(U=>m=U);if(r){let U=new Blob([`onmessage=((postMessage) => {
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
    })(postMessage)`],{type:"text/javascript"});o=new Worker(URL.createObjectURL(U))}else{let U=(M=>{var J=(O,T,g)=>new Promise((f,i)=>{var a=_=>{try{b(g.next(_))}catch(c){i(c)}},d=_=>{try{b(g.throw(_))}catch(c){i(c)}},b=_=>_.done?f(_.value):Promise.resolve(_.value).then(a,d);b((g=g.apply(O,T)).next())});let q,j={};for(let O=self;O;O=Object.getPrototypeOf(O))for(let T of Object.getOwnPropertyNames(O))T in j||Object.defineProperty(j,T,{get:()=>self[T]});(()=>{const O=()=>{const f=new Error("not implemented");return f.code="ENOSYS",f};if(!j.fs){let f="";j.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(i,a){f+=g.decode(a);const d=f.lastIndexOf(`
`);return d!=-1&&(console.log(f.substring(0,d)),f=f.substring(d+1)),a.length},write(i,a,d,b,_,c){if(d!==0||b!==a.length||_!==null){c(O());return}const p=this.writeSync(i,a);c(null,p)},chmod(i,a,d){d(O())},chown(i,a,d,b){b(O())},close(i,a){a(O())},fchmod(i,a,d){d(O())},fchown(i,a,d,b){b(O())},fstat(i,a){a(O())},fsync(i,a){a(null)},ftruncate(i,a,d){d(O())},lchown(i,a,d,b){b(O())},link(i,a,d){d(O())},lstat(i,a){a(O())},mkdir(i,a,d){d(O())},open(i,a,d,b){b(O())},read(i,a,d,b,_,c){c(O())},readdir(i,a){a(O())},readlink(i,a){a(O())},rename(i,a,d){d(O())},rmdir(i,a){a(O())},stat(i,a){a(O())},symlink(i,a,d){d(O())},truncate(i,a,d){d(O())},unlink(i,a){a(O())},utimes(i,a,d,b){b(O())}}}if(j.process||(j.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw O()},pid:-1,ppid:-1,umask(){throw O()},cwd(){throw O()},chdir(){throw O()}}),!j.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!j.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!j.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!j.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const T=new TextEncoder("utf-8"),g=new TextDecoder("utf-8");j.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=t=>{t!==0&&console.warn("exit code:",t)},this._exitPromise=new Promise(t=>{this._resolveExitPromise=t}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const f=(t,l)=>{this.mem.setUint32(t+0,l,!0),this.mem.setUint32(t+4,Math.floor(l/4294967296),!0)},i=t=>{const l=this.mem.getUint32(t+0,!0),y=this.mem.getInt32(t+4,!0);return l+y*4294967296},a=t=>{const l=this.mem.getFloat64(t,!0);if(l===0)return;if(!isNaN(l))return l;const y=this.mem.getUint32(t,!0);return this._values[y]},d=(t,l)=>{if(typeof l=="number"&&l!==0){if(isNaN(l)){this.mem.setUint32(t+4,2146959360,!0),this.mem.setUint32(t,0,!0);return}this.mem.setFloat64(t,l,!0);return}if(l===void 0){this.mem.setFloat64(t,0,!0);return}let v=this._ids.get(l);v===void 0&&(v=this._idPool.pop(),v===void 0&&(v=this._values.length),this._values[v]=l,this._goRefCounts[v]=0,this._ids.set(l,v)),this._goRefCounts[v]++;let C=0;switch(typeof l){case"object":l!==null&&(C=1);break;case"string":C=2;break;case"symbol":C=3;break;case"function":C=4;break}this.mem.setUint32(t+4,2146959360|C,!0),this.mem.setUint32(t,v,!0)},b=t=>{const l=i(t+0),y=i(t+8);return new Uint8Array(this._inst.exports.mem.buffer,l,y)},_=t=>{const l=i(t+0),y=i(t+8),v=new Array(y);for(let C=0;C<y;C++)v[C]=a(l+C*8);return v},c=t=>{const l=i(t+0),y=i(t+8);return g.decode(new DataView(this._inst.exports.mem.buffer,l,y))},p=Date.now()-performance.now();this.importObject={_gotest:{add:(t,l)=>t+l},gojs:{"runtime.wasmExit":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(l)},"runtime.wasmWrite":t=>{t>>>=0;const l=i(t+8),y=i(t+16),v=this.mem.getInt32(t+24,!0);j.fs.writeSync(l,new Uint8Array(this._inst.exports.mem.buffer,y,v))},"runtime.resetMemoryDataView":t=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{t>>>=0,f(t+8,(p+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;const l=new Date().getTime();f(t+8,l/1e3),this.mem.setInt32(t+16,l%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":t=>{t>>>=0;const l=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(l,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(l);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},i(t+8))),this.mem.setInt32(t+16,l,!0)},"runtime.clearTimeoutEvent":t=>{t>>>=0;const l=this.mem.getInt32(t+8,!0);clearTimeout(this._scheduledTimeouts.get(l)),this._scheduledTimeouts.delete(l)},"runtime.getRandomData":t=>{t>>>=0,crypto.getRandomValues(b(t+8))},"syscall/js.finalizeRef":t=>{t>>>=0;const l=this.mem.getUint32(t+8,!0);if(this._goRefCounts[l]--,this._goRefCounts[l]===0){const y=this._values[l];this._values[l]=null,this._ids.delete(y),this._idPool.push(l)}},"syscall/js.stringVal":t=>{t>>>=0,d(t+24,c(t+8))},"syscall/js.valueGet":t=>{t>>>=0;const l=Reflect.get(a(t+8),c(t+16));t=this._inst.exports.getsp()>>>0,d(t+32,l)},"syscall/js.valueSet":t=>{t>>>=0,Reflect.set(a(t+8),c(t+16),a(t+32))},"syscall/js.valueDelete":t=>{t>>>=0,Reflect.deleteProperty(a(t+8),c(t+16))},"syscall/js.valueIndex":t=>{t>>>=0,d(t+24,Reflect.get(a(t+8),i(t+16)))},"syscall/js.valueSetIndex":t=>{t>>>=0,Reflect.set(a(t+8),i(t+16),a(t+24))},"syscall/js.valueCall":t=>{t>>>=0;try{const l=a(t+8),y=Reflect.get(l,c(t+16)),v=_(t+32),C=Reflect.apply(y,l,v);t=this._inst.exports.getsp()>>>0,d(t+56,C),this.mem.setUint8(t+64,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+56,l),this.mem.setUint8(t+64,0)}},"syscall/js.valueInvoke":t=>{t>>>=0;try{const l=a(t+8),y=_(t+16),v=Reflect.apply(l,void 0,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueNew":t=>{t>>>=0;try{const l=a(t+8),y=_(t+16),v=Reflect.construct(l,y);t=this._inst.exports.getsp()>>>0,d(t+40,v),this.mem.setUint8(t+48,1)}catch(l){t=this._inst.exports.getsp()>>>0,d(t+40,l),this.mem.setUint8(t+48,0)}},"syscall/js.valueLength":t=>{t>>>=0,f(t+16,parseInt(a(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;const l=T.encode(String(a(t+8)));d(t+16,l),f(t+24,l.length)},"syscall/js.valueLoadString":t=>{t>>>=0;const l=a(t+8);b(t+16).set(l)},"syscall/js.valueInstanceOf":t=>{t>>>=0,this.mem.setUint8(t+24,a(t+8)instanceof a(t+16)?1:0)},"syscall/js.copyBytesToGo":t=>{t>>>=0;const l=b(t+8),y=a(t+32);if(!(y instanceof Uint8Array||y instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{t>>>=0;const l=a(t+8),y=b(t+16);if(!(l instanceof Uint8Array||l instanceof Uint8ClampedArray)){this.mem.setUint8(t+48,0);return}const v=y.subarray(0,l.length);l.set(v),f(t+40,v.length),this.mem.setUint8(t+48,1)},debug:t=>{console.log(t)}}}}run(f){return J(this,null,function*(){if(!(f instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=f,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,j,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[j,5],[this,6]]),this._idPool=[],this.exited=!1;let i=4096;const a=t=>{const l=i,y=T.encode(t+"\0");return new Uint8Array(this.mem.buffer,i,y.length).set(y),i+=y.length,i%8!==0&&(i+=8-i%8),l},d=this.argv.length,b=[];this.argv.forEach(t=>{b.push(a(t))}),b.push(0),Object.keys(this.env).sort().forEach(t=>{b.push(a(`${t}=${this.env[t]}`))}),b.push(0);const c=i;if(b.forEach(t=>{this.mem.setUint32(i,t,!0),this.mem.setUint32(i+4,0,!0),i+=8}),i>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(d,c),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(f){const i=this;return function(){const a={id:f,this:this,args:arguments};return i._pendingEvent=a,i._resume(),a.result}}}})(),q=({data:O})=>{let T=new TextDecoder,g=j.fs,f="";g.writeSync=(_,c)=>{if(_===1)M(c);else if(_===2){f+=T.decode(c);let p=f.split(`
`);p.length>1&&console.log(p.slice(0,-1).join(`
`)),f=p[p.length-1]}else throw new Error("Bad write");return c.length};let i=[],a,d=0;q=({data:_})=>(_.length>0&&(i.push(_),a&&a()),b),g.read=(_,c,p,t,l,y)=>{if(_!==0||p!==0||t!==c.length||l!==null)throw new Error("Bad read");if(i.length===0){a=()=>g.read(_,c,p,t,l,y);return}let v=i[0],C=Math.max(0,Math.min(t,v.length-d));c.set(v.subarray(d,d+C),p),d+=C,d===v.length&&(i.shift(),d=0),y(null,C)};let b=new j.Go;return b.argv=["","--service=0.25.12"],re(O,b).then(_=>{M(null),b.run(_)},_=>{M(_)}),b};function re(O,T){return J(this,null,function*(){if(O instanceof WebAssembly.Module)return WebAssembly.instantiate(O,T.importObject);const g=yield fetch(O);if(!g.ok)throw new Error(`Failed to download ${JSON.stringify(O)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(g.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(g,T.importObject)).instance;const f=yield g.arrayBuffer();return(yield WebAssembly.instantiate(f,T.importObject)).instance})}return O=>q(O)})(M=>o.onmessage({data:M})),X;o={onmessage:null,postMessage:M=>setTimeout(()=>{try{X=U({data:M})}catch(J){m(J)}}),terminate(){if(X)for(let M of X._scheduledTimeouts.values())clearTimeout(M)}}}let h,P;const u=new Promise((U,X)=>{h=U,P=X});o.onmessage=({data:U})=>{o.onmessage=({data:X})=>V(X),U?P(U):h()},o.postMessage(n||new URL(e,location.href).toString());let{readFromStdout:V,service:W}=$t({writeToStdin(U){o.postMessage(U)},isSync:!1,hasFS:!1,esbuild:Y});yield u,Ge=()=>{o.terminate(),Ce=void 0,Ge=void 0,Je=void 0},Je={build:U=>new Promise((X,M)=>{w.then(M),W.buildOrContext({callName:"build",refs:null,options:U,isTTY:!1,defaultWD:"/",callback:(J,q)=>J?M(J):X(q)})}),context:U=>new Promise((X,M)=>{w.then(M),W.buildOrContext({callName:"context",refs:null,options:U,isTTY:!1,defaultWD:"/",callback:(J,q)=>J?M(J):X(q)})}),transform:(U,X)=>new Promise((M,J)=>{w.then(J),W.transform({callName:"transform",refs:null,input:U,options:X||{},isTTY:!1,fs:{readFile(q,j){j(new Error("Internal error"),null)},writeFile(q,j){j(null)}},callback:(q,j)=>q?J(q):M(j)})}),formatMessages:(U,X)=>new Promise((M,J)=>{w.then(J),W.formatMessages({callName:"formatMessages",refs:null,messages:U,options:X,callback:(q,j)=>q?J(q):M(j)})}),analyzeMetafile:(U,X)=>new Promise((M,J)=>{w.then(J),W.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof U=="string"?U:JSON.stringify(U),options:X,callback:(q,j)=>q?J(q):M(j)})})}}),Wt=Y})(A)})(He)),He.exports}var Ke=ln();const an=Xt(Ke),on=Kt({__proto__:null,default:an},[Ke]),cn="/assets/esbuild-BHljloGq.wasm";function ht(A,E){if(A.startsWith("/"))return A.slice(1);const D=E.split("/").filter(k=>k),S=A.split("/").filter(k=>k);if(A.startsWith("./")||A.startsWith("../")||!A.startsWith("/")){const k=D.slice(0,-1);D.length=0,D.push(...k)}for(const k of S)k!=="."&&(k===".."?D.length>0&&D.pop():D.push(k));return D.join("/")}let un={name:"workspace",setup(A){A.onResolve({filter:/.*/},E=>{if(!/^(?!https?:\/\/).+/.test(E.path))return;let D=E.path;if(D.startsWith("/")&&(D=D.slice(1)),E.importer&&E.importer!==""){let S=E.importer;S.startsWith("virtual-workspace:")&&(S=S.slice(18));const I=E.path.startsWith("./")||E.path.startsWith("../"),k=D.includes("/"),F=S.startsWith("__build/");I?D=ht(E.path,S):!k&&!F&&(D=ht(D,S))}return{path:D,namespace:"virtual-workspace"}}),A.onLoad({filter:/.*/},async E=>{if(!/^(?!https?:\/\/).+/.test(E.path))return;const D=E.path,S=await Xe.getWorkspace();let I=await S.getResource(D);if(I||(await S.listChildren(!0),I=await S.getResource(D)),!I)throw new Error(`Module not found: ${D}`);return{contents:await I.getContents()}})}};class fn{constructor(){this.initialized=!1,this.workspaceCache=null}async getWorkspace(){return this.workspaceCache||(this.workspaceCache=await Xe.getWorkspace()),this.workspaceCache}async init(){this.initialized||(await Ke.initialize({wasmURL:cn}),this.initialized=!0)}createBrowserFileCopier(){const E=this.getWorkspace.bind(this),D={"dist/index.js":()=>oe(()=>import("./index-Bi7QSLBf.js"),[]),"dist/gs-lib.css":()=>oe(()=>import("./gs-lib-FAwrTO_w.js"),[]),"public/pwa/staticwebapp.config.json":()=>oe(()=>import("./staticwebapp.config-D4wTVvdR.js"),[]),"public/pwa/sw.js":()=>oe(()=>import("./sw-BKnha_pc.js"),[]),"public/pwa/manifest.json":()=>oe(()=>import("./manifest-ua3l4Tcu.js"),[]),"public/index.html":()=>oe(()=>import("./index-BP__Vh0n.js"),[]),"public/pwa/assets/icons/24x24.png":()=>oe(()=>import("./24x24-Bu_QYm8Z.js"),[]),"public/pwa/assets/icons/48x48.png":()=>oe(()=>import("./48x48-DrHeaEQJ.js"),[]),"public/pwa/assets/icons/192x192.png":()=>oe(()=>import("./192x192-Be9eAkr9.js"),[]),"public/pwa/assets/icons/512x512.png":()=>oe(()=>import("./512x512-CpHm9SFP.js"),[]),"public/pwa/assets/icons/icon_24.png":()=>oe(()=>import("./icon_24-Bu_QYm8Z.js"),[]),"public/pwa/assets/icons/icon_48.png":()=>oe(()=>import("./icon_48-DrHeaEQJ.js"),[]),"public/pwa/assets/icons/icon_192.png":()=>oe(()=>import("./icon_192-DkSxEksg.js"),[]),"public/pwa/assets/icons/icon_512.png":()=>oe(()=>import("./icon_512-Dcr9wNXR.js"),[])},S=async(I,k,F,L)=>{const K=D[I];if(!K)throw new Error(`No import mapping for ${I}. Make sure gs-lib is built.`);let N;try{const ae=await K();if(F)N=ae.default,L&&(N=await L(N));else{const Ee=ae.default,te=await fetch(Ee);if(!te.ok)throw new Error(`Failed to fetch: ${te.statusText}`);N=await te.blob()}}catch(ae){throw new Error(`Failed to copy ${I}: ${ae}. Make sure gs-lib is built (run: npm run build --workspace=@kispace-io/gs-lib)`)}await(await(await E()).getResource(k,{create:!0})).saveContents(N),N=void 0};return{async copyTextFile(I,k,F){await S(I,k,!0,F)},async copyBinaryFile(I,k){await S(I,k,!1)}}}async build(E,D=void 0,S){const I=(N,Y)=>{S&&(S.currentStep=N,S.message=Y)};I(0,"Initializing build system..."),await this.init();const k=await this.getWorkspace(),F={async readFile(N){const Y=await k.getResource(N);if(!Y)throw new Error(`File not found: ${N}`);return await Y.getContents()},async writeFile(N,Y){await(await k.getResource(N,{create:!0})).saveContents(Y)},async ensureDir(N){await k.getResource(N.endsWith("/")?N:N+"/",{create:!0})},async exists(N){return await k.getResource(N)!==null},async deleteDir(N){const Y=await k.getResource(N);Y instanceof gt&&await Y.delete()}},L=this.createBrowserFileCopier();await sn(E,F,un,on,{gsLibCopier:L,cleanAfterBuild:D,copyAssets:async(N,Y)=>{const Z=await k.getResource("assets");Z&&await Z.copyTo(`${Y}/assets`)}},I),I(0,"Finalizing build..."),k.touch(),S&&(S.message="Build completed successfully!")}async buildMapFile(E,D){const S=JSON.parse(await E.getContents()),I=await Ht(D||".env");pt.runAsync("Building map",async k=>{await Qe.build({title:E.getName(),gsMap:S,env:I,version:I.VERSION||"0.0.0"},void 0,k)}).then(()=>{mt("🚀 Map files copied to 'dist' folder in your workspace!")}).catch(k=>{Pe(`💥 Map could not be built: ${k}`)})}}const Qe=new fn;Jt.put("buildService",Qe);const Le=".geospace",dn=".env",hn=["node_modules",".git","dist","build",".next",".cache",".vscode",".idea","coverage",".nyc_output",".parcel-cache",".turbo",".yarn",".pnp",".svelte-kit",".nuxt",".output","target","out",".temp",".tmp"];function pn(A){const E=A.toLowerCase();return hn.some(D=>E===D.toLowerCase())}async function Ye(A,E,D,S={value:0}){const I=[],k=await A.listChildren(!0);for(const F of k){S.value++;const L=F.getWorkspacePath();if(D&&(D.message=`Scanning: ${L}`,D.currentStep=S.value),F instanceof Ne&&F.getName().toLowerCase().endsWith(E))I.push(L);else if(F instanceof gt&&!pn(F.getName())){const K=await Ye(F,E,D,S);I.push(...K)}}return I.sort()}function mn(){let A=document.getElementById("global-dialog-container");return A||(A=document.createElement("div"),A.id="global-dialog-container",document.body.appendChild(A)),A}async function gn(A,E,D,S){return new Promise(I=>{const k=mn();let F=D||"",L=S||"";const K=()=>{ft(qe``,k)},N=()=>{K(),I({geospaceFile:F||null,envFile:L||null})},Y=()=>{K(),I({geospaceFile:null,envFile:null})},Z=qe`
            <wa-dialog label="Select Files" open @wa-request-close=${Y}>
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
                            value="${F}"
                            @change=${ae=>{F=ae.target.value}}>
                            <wa-option value="">None</wa-option>
                            ${A.map(ae=>qe`
                                <wa-option value="${ae}">${ae}</wa-option>
                            `)}
                        </wa-select>
                    </div>
                    
                    <div class="dialog-field">
                        <label>Environment File:</label>
                        <wa-select 
                            value="${L}"
                            @change=${ae=>{L=ae.target.value}}>
                            <wa-option value="">None (use .env)</wa-option>
                            ${E.map(ae=>qe`
                                <wa-option value="${ae}">${ae}</wa-option>
                            `)}
                        </wa-select>
                    </div>
                    
                    <div class="dialog-actions">
                        <wa-button variant="default" @click=${Y}>
                            Cancel
                        </wa-button>
                        <wa-button variant="primary" @click=${N}>
                            OK
                        </wa-button>
                    </div>
                </div>
            </wa-dialog>
        `;ft(Z,k)})}const xn=({commandRegistry:A})=>{A.registerAll({command:{id:"build_map",name:"Build map",description:"Builds a publishable map from a .geospace file",parameters:[{name:"file",description:"Path to the .geospace file relative to workspace root. If not provided, uses the active map editor or selected file.",required:!1},{name:"env",description:"Path to the environment file relative to workspace root (e.g., 'dev.env', 'prod.env'). Defaults to '.env' if not specified.",required:!1},{name:"ask",description:"If true, prompts for missing files (map file or env file) when not provided.",required:!1}]},handler:{execute:async E=>{let D=E.params?.env,S=E.params?.file;const I=E.params?.ask===!0||E.params?.ask==="true",k=await Xe.getWorkspace();if(!k){Pe("No workspace available");return}let F;if(S){const L=await k.getResource(S);if(!L||!(L instanceof Ne)){Pe(`File not found: ${S}`);return}if(!L.getName().toLowerCase().endsWith(Le)){Pe(`File is not a .geospace file: ${S}`);return}F=L}else{const L=ct.get();if(L&&L.input)L.isDirty()&&(await L.save(),mt("Map saved automatically to run build.")),F=L.input.data;else{const K=ut.get();K instanceof Ne&&K.getName().toLowerCase().endsWith(Le)&&(F=K)}}if(I&&(!F||!D)){let L=[],K=[];await pt.runAsync("Collecting files",async Z=>{Z.message="Scanning workspace for .geospace files...",L=await Ye(k,Le,Z,{value:0}),Z.message="Scanning workspace for .env files...",Z.currentStep=0,K=await Ye(k,dn,Z,{value:0}),Z.message=`Found ${L.length} .geospace files and ${K.length} .env files`});const N=F?.getWorkspacePath(),Y=await gn(L,K,N,D||".env");if(Y.geospaceFile===null&&Y.envFile===null)return;if(Y.geospaceFile&&!F){S=Y.geospaceFile;const Z=await k.getResource(S);if(!Z||!(Z instanceof Ne)){Pe(`File not found: ${S}`);return}if(!Z.getName().toLowerCase().endsWith(Le)){Pe(`File is not a .geospace file: ${S}`);return}F=Z}Y.envFile!==null&&(D=Y.envFile||".env")}else if(!F){Pe("No map editor active, no .geospace file selected, and no file path provided");return}if(!F){Pe("No map file available");return}return Qe.buildMapFile(F,D)}},contribution:{target:"toolbar:map-editor",icon:"hammer",label:"Build map",disabled:()=>!(ct.get()instanceof Yt)}}),qt.registerContribution("contextmenu:filebrowser",{command:"build_map",icon:"hammer",label:"Build map",params:{ask:!0},disabled:()=>{const E=ut.get();return E instanceof Ne?!E.getName().toLowerCase().endsWith(Le):!0}})};export{xn as default};
