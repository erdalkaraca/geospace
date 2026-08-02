import{n as e,r as t,t as n}from"./install-prompt-capture-fZikSCg3-CKjbxl_q.js";import{V as r,h as i,v as a}from"./repeat-CUOIy3cL.js";import{F as o,T as s,i as c,m as l}from"./dist-8hKpvNa5.js";var u=class extends c{constructor(...e){super(...e),this.updateAvailable=!1,this.updateProgress=0,this.updateProgressVisible=!1,this.updateCurrentFile=``,this.pendingReload=!1,this.registration=null,this.periodicInterval=null,this.pollInterval=null,this.pollAttempts=0,this.attachAbort=null,this.onControllerChange=()=>{this.pendingReload&&window.location.reload()},this.onServiceWorkerMessage=e=>{let t=e.data;if(!t||t.type!==`SW_UPDATE_PROGRESS`||t.total<=0)return;let n=Math.max(0,Math.min(1,t.completed/t.total));this.updateProgress=n,this.updateProgressVisible=!this.updateAvailable&&!t.done&&n<1,this.updateCurrentFile=this.toDisplayFileName(t.currentFile)},this.onUpdateFound=()=>{let e=this.registration;if(!e)return;this.syncUpdateState(e);let t=e.installing;if(!t)return;navigator.serviceWorker.controller&&(this.updateProgress=0,this.updateProgressVisible=!0,this.updateCurrentFile=``);let n=this.attachAbort?.signal;n&&t.addEventListener(`statechange`,()=>{if(t.state===`redundant`){this.updateProgress=0,this.updateProgressVisible=!1,this.updateCurrentFile=``;return}t.state===`installed`&&navigator.serviceWorker.controller&&this.syncUpdateState(e)},{signal:n})}}toDisplayFileName(e){if(!e)return``;let t=e.split(`?`)[0].split(`#`)[0],n=t.split(`/`).filter(Boolean).at(-1)??t;if(!n)return``;let r=decodeURIComponent(n);return r.length<=32?r:`${r.slice(0,29)}...`}connectedCallback(){super.connectedCallback(),`serviceWorker`in navigator&&(navigator.serviceWorker.addEventListener(`controllerchange`,this.onControllerChange),navigator.serviceWorker.addEventListener(`message`,this.onServiceWorkerMessage),this.findOrAttachRegistration())}disconnectedCallback(){super.disconnectedCallback(),navigator.serviceWorker.removeEventListener(`controllerchange`,this.onControllerChange),navigator.serviceWorker.removeEventListener(`message`,this.onServiceWorkerMessage),this.teardownAttachment()}async findOrAttachRegistration(){let e=await navigator.serviceWorker.getRegistration();if(e){this.attach(e);return}this.pollInterval=window.setInterval(async()=>{this.pollAttempts+=1;let e=await navigator.serviceWorker.getRegistration();if(e){this.clearPoll(),this.attach(e);return}this.pollAttempts>=30&&this.clearPoll()},1e3)}clearPoll(){this.pollInterval!==null&&(window.clearInterval(this.pollInterval),this.pollInterval=null)}teardownAttachment(){this.clearPoll(),this.periodicInterval!==null&&(window.clearInterval(this.periodicInterval),this.periodicInterval=null),this.attachAbort?.abort(),this.attachAbort=null,this.registration=null,this.updateAvailable=!1,this.updateProgress=0,this.updateProgressVisible=!1,this.updateCurrentFile=``}syncUpdateState(e){let t=!!e.waiting,n=!!navigator.serviceWorker.controller;this.updateAvailable=t&&n,this.updateAvailable&&(this.updateProgress=1,this.updateProgressVisible=!1,this.updateCurrentFile=``)}attach(e){if(this.registration===e)return;this.attachAbort?.abort(),this.attachAbort=new AbortController;let t=this.attachAbort.signal;this.registration=e,this.syncUpdateState(e),e.addEventListener(`updatefound`,this.onUpdateFound,{signal:t}),e.update().catch(()=>{}),this.periodicInterval=window.setInterval(()=>{e.update().catch(()=>{})},36e5),queueMicrotask(()=>{this.registration===e&&this.syncUpdateState(e)})}onActivateClick(){let e=this.registration?.waiting;if(e){this.pendingReload=!0,e.postMessage({type:`SKIP_WAITING`});return}window.location.reload()}render(){if(this.updateProgressVisible&&!this.updateAvailable){let e=Math.round(this.updateProgress*100);return r`
        <div
          style="display: inline-flex; align-items: center; gap: 0.5rem; min-width: 210px;"
          title="Downloading the latest update..."
          aria-label="Downloading the latest update"
        >
          <wa-progress-bar value=${e}></wa-progress-bar>
          <div style="display: inline-flex; flex-direction: column; gap: 0.1rem; max-width: 140px;">
            <span style="font-size: 0.75rem; opacity: 0.8;">${e}%</span>
            ${this.updateCurrentFile?r`<span
                  style="font-size: 0.7rem; opacity: 0.7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                  title=${this.updateCurrentFile}
                  >${this.updateCurrentFile}</span
                >`:r``}
          </div>
        </div>
      `}return this.updateAvailable?r`
      <wa-animation
        style="display: inline-flex; align-items: center;"
        name="zoomIn"
        duration="1400"
        easing="ease-out"
        iterations="Infinity"
        ?play=${!0}
      >
        <wa-button
          appearance="plain"
          title="A new version is available. Click to reload."
          aria-label="A new version is available. Reload to update."
          @click=${this.onActivateClick}
        >
          <wa-icon
            name="arrows-rotate"
            label=""
            style="color: var(--wa-color-success-fill-loud)"
          ></wa-icon>
        </wa-button>
      </wa-animation>
    `:r``}};s([i()],u.prototype,`updateAvailable`,void 0),s([i()],u.prototype,`updateProgress`,void 0),s([i()],u.prototype,`updateProgressVisible`,void 0),s([i()],u.prototype,`updateCurrentFile`,void 0),u=s([a(`docks-sw-update-indicator`)],u);function d(){return window.matchMedia(`(display-mode: standalone)`).matches||window.matchMedia(`(display-mode: window-controls-overlay)`).matches||window.navigator.standalone===!0}var f=class extends c{constructor(...t){super(...t),this.showInstall=!1,this.deferredPrompt=null,this.onPromptAvailable=()=>{this.applyCapturedPrompt()},this.onAppInstalled=()=>{e(),this.deferredPrompt=null,this.showInstall=!1}}applyCapturedPrompt(){let e=t();e&&(this.deferredPrompt=e,this.showInstall=!0)}connectedCallback(){super.connectedCallback(),!d()&&(this.applyCapturedPrompt(),window.addEventListener(n,this.onPromptAvailable),window.addEventListener(`appinstalled`,this.onAppInstalled))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(n,this.onPromptAvailable),window.removeEventListener(`appinstalled`,this.onAppInstalled)}async onInstallClick(){let t=this.deferredPrompt;t&&(await t.prompt(),await t.userChoice.catch(()=>{}),e(),this.deferredPrompt=null,this.showInstall=!1)}render(){return this.showInstall?r`
      <wa-button
        appearance="plain"
        title="Install this app on your device"
        aria-label="Install app"
        @click=${()=>void this.onInstallClick()}
      >
        <wa-icon name="download" label=""></wa-icon>
      </wa-button>
    `:r``}};s([i()],f.prototype,`showInstall`,void 0),f=s([a(`docks-pwa-install`)],f),o.registerContribution(l,{name:`toolbar.swUpdate`,label:`App update`,component:`<docks-sw-update-indicator></docks-sw-update-indicator>`}),o.registerContribution(l,{name:`toolbar.pwaInstall`,label:`Install app`,component:`<docks-pwa-install></docks-pwa-install>`});