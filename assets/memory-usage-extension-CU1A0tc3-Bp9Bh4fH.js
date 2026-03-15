import{c,g as o,h as d}from"./config-BnnWtrGw-B7Dvw4S0.js";import{t as m,b as l}from"./webawesome-C6zoK8ho.js";var u=Object.getOwnPropertyDescriptor,g=(e,r,s,a)=>{for(var t=a>1?void 0:a?u(r,s):r,n=e.length-1,i;n>=0;n--)(i=e[n])&&(t=i(t)||t);return t};let p=class extends d{constructor(){super(...arguments),this.updateInterval=null}connectedCallback(){super.connectedCallback(),this.updateInterval=window.setInterval(()=>{this.requestUpdate()},2e3)}disconnectedCallback(){super.disconnectedCallback(),this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null)}render(){const e=performance.memory;if(!e)return l``;const r=(e.totalJSHeapSize/1048576).toFixed(1),s=(e.jsHeapSizeLimit/1048576).toFixed(0),a=e.totalJSHeapSize/e.jsHeapSizeLimit*100,t=a.toFixed(0),n=a>80?"#ff4444":a>60?"#ffaa00":"#44aa44";return l`
            <span style="display: inline-flex; align-items: center; justify-content: center; height: 100%; padding-left: 0.5rem; gap: 0.25rem; font-size: 0.85em; color: var(--wa-color-neutral-text);" title="JS heap allocated (matches DevTools Memory tab). Main thread only (excludes web workers).">
                <wa-icon name="microchip" label="Memory usage"></wa-icon>
                <span style="display: flex; align-items: center; gap: 0.25rem;">
                    <span>${r} / ${s} MB</span>
                    <span style="position: relative; display: inline-block; width: 60px; height: 14px; vertical-align: middle;">
                        <span style="display: block; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); border-radius: 4px;"></span>
                        <span style="display: block; position: absolute; width: ${t}%; height: 100%; background: ${n}; border-radius: 4px; transition: width 0.3s ease;"></span>
                        <span style="position: absolute; width: 100%; text-align: center; font-size: 0.7em; line-height: 14px; font-weight: 600; color: white; text-shadow: 0 0 2px rgba(0,0,0,0.8);">${t}%</span>
                    </span>
                </span>
            </span>
        `}};p=g([m("lyra-memory-usage")],p);c.registerContribution(o,{target:o,label:"Memory",component:"<lyra-memory-usage></lyra-memory-usage>"});
