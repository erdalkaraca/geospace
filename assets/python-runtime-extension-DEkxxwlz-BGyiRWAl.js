const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/python-editor-DNIbAXyz-lbKR_WAZ.js","assets/dist-XDM-k8NY.js","assets/chunk-CYidjpOJ.js","assets/preload-helper-DzyYoeor.js","assets/events-B_ZxkU_G-CIQGcfIC.js","assets/fs-access-BzDvih72-DkSEMJDg.js","assets/repeat-D7ZcYN9W.js","assets/dist-CwEYIDCO.css","assets/api-BKSQgj-C-C5_mgUrm.js","assets/package-manager-CicT90vE-Dd5LAvKp.js","assets/pyservice-DoyHFuGG-CJprZ3XA.js","assets/editor-python-run-Cs68X5JL-Dk-pHwir.js"])))=>i.map(i=>d[i]);
import{F as e,I as t,N as n,n as r}from"./dist-XDM-k8NY.js";import{U as i}from"./repeat-D7ZcYN9W.js";import{t as a}from"./preload-helper-DzyYoeor.js";import{n as o}from"./fs-access-BzDvih72-DkSEMJDg.js";import{t as s}from"./notebook-kernel-api-c9l3_84P-DH9SRGva.js";import"./dist-aphZbfG7.js";import{t as c}from"./pyservice-DoyHFuGG-CJprZ3XA.js";import{t as l}from"./package-manager-CicT90vE-Dd5LAvKp.js";import{n as u}from"./editor-python-run-Cs68X5JL-Dk-pHwir.js";var d=class{constructor(){this.id=`python`,this.label=`Python`,this.language=`python`,this.pyenv=null,this.requiredPackages=[]}async connect(e){if(!this.pyenv){this.requiredPackages=e?.requiredPackages??[],this.pyenv=new c,await this.pyenv.init(),this.requiredPackages.length>0&&await this.pyenv.loadPackages(this.requiredPackages);try{await this.pyenv.execCode(`
try:
    import matplotlib
    matplotlib.use('agg')
    import matplotlib.pyplot as plt
    import io
    import base64
    _original_show = plt.show
    _display_data = None
    def _patched_show(*args, **kwargs):
        global _display_data
        if plt.get_fignums():
            fig = plt.gcf()
            buffer = io.BytesIO()
            fig.savefig(buffer, format='png', bbox_inches='tight', dpi=100)
            buffer.seek(0)
            _display_data = base64.b64encode(buffer.read()).decode('utf-8')
            plt.close(fig)
        pass
    plt.show = _patched_show
except ImportError:
    pass
`)}catch{}}}async execute(e){if(this.pyenv||await this.connect(),!this.pyenv)return{error:`Python kernel not initialized`};try{let t=await this.pyenv.execCode(e),n=[];if(t&&typeof t==`object`&&`console`in t){let e=t.console;if(Array.isArray(e)&&e.length>0){let t=e.filter(e=>e&&String(e).trim());t.length>0&&n.push(...t.map(String))}}let r;try{let e=await this.pyenv.execCode(`_display_data if "_display_data" in dir() else None`),t=e&&typeof e==`object`&&e&&`result`in e?e.result:e;t!=null&&String(t)!==`None`&&String(t)!==`undefined`&&(r=String(t),await this.pyenv.execCode(`_display_data = None`))}catch{}if(!r){let e=t&&typeof t==`object`&&t&&`result`in t?t.result:t;if(e!=null&&String(e)!==`undefined`){let t=String(e);t&&t!==`undefined`&&n.push(t)}}return{data:n.length>0?n.join(`
`):void 0,imageData:r}}catch(e){return{error:e instanceof Error?e.message:String(e)}}}async getVersion(){if(this.pyenv)try{return await this.pyenv.getVersion()??void 0}catch{return}}interrupt(){this.pyenv?.interrupt?.()}async restart(){this.pyenv&&=(this.pyenv.close(),null),await this.connect()}openPackageManager(e){this.pyenv&&l.showPackageManager({packages:e?.requiredPackages??[],pyenv:this.pyenv,onPackageAdded:e?.onPackageAdded,onPackageRemoved:e?.onPackageRemoved})}close(){this.pyenv&&=(this.pyenv.close(),null)}};n.registerContribution(s,{id:`python`,label:`Python`,language:`python`,loadKernel:async()=>new d}),e({command:{id:`python`,name:`Run Python Script`,description:`Executes a Python script given its file path`,parameters:[{name:`script`,description:`the path to a Python script to run`,required:!1}]},handler:{execute:async e=>{let t=e.params?.script;if(!t)return;let n=new c;await n.init({params:e.params}),await n.execScript(t)}}}),e({command:{id:`python.openEditorPackageManager`,name:`Manage packages`,description:`Manage Python packages for the editor environment`,parameters:[]},handler:{canExecute:e=>!!e.activeEditor?.isLanguage?.(`python`),execute:async e=>{let n=e.activeEditor;if(!n){t(`No active editor`);return}let r=u(n?.getContent?.()??``),i=n.getPyEnv?.();l.showPackageManager({packages:r,pyenv:i})}}}),r.registerEditorInputHandler({editorId:`system.python-editor`,label:`Python`,icon:`lyra python`,lazyInit:async()=>{await a(()=>import(`./python-editor-DNIbAXyz-lbKR_WAZ.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))},canHandle:e=>e instanceof o&&e.getName().toLowerCase().endsWith(`.py`),ranking:1e3,handle:async e=>{let t={title:e.getWorkspacePath(),data:e,key:e.getWorkspacePath(),icon:`python`,state:{},component:()=>null};return t.component=e=>i`<lyra-python-editor id="${e}" .input=${t}></lyra-python-editor>`,t}});export{c as PyEnv,l as pythonPackageManagerService};