import{K as c,j as d,k as o}from"./main-C15lmSu1.js";import{t as m,x as l}from"./index-DUZ9xzhO.js";var u=Object.getOwnPropertyDescriptor,g=(e,n,r,a)=>{for(var t=a>1?void 0:a?u(n,r):n,s=e.length-1,i;s>=0;s--)(i=e[s])&&(t=i(t)||t);return t};let p=class extends c{constructor(){super(...arguments),this.updateInterval=null}connectedCallback(){super.connectedCallback(),this.updateInterval=window.setInterval(()=>{this.requestUpdate()},2e3)}disconnectedCallback(){super.disconnectedCallback(),this.updateInterval!==null&&(clearInterval(this.updateInterval),this.updateInterval=null)}render(){const e=performance.memory;if(!e)return l``;const n=(e.usedJSHeapSize/1048576).toFixed(1),r=(e.jsHeapSizeLimit/1048576).toFixed(0),a=e.usedJSHeapSize/e.jsHeapSizeLimit*100,t=a.toFixed(0),s=a>80?"#ff4444":a>60?"#ffaa00":"#44aa44";return l`
            <span style="display: flex; align-items: center; padding-left: 0.5rem; gap: 0.25rem; font-size: 0.85em; color: var(--wa-color-neutral-text);" title="Main thread memory consumption only (excludes web workers)">
                <wa-icon name="microchip"></wa-icon>
                <span style="display: flex; align-items: center; gap: 0.25rem;">
                    <span>${n} / ${r} MB</span>
                    <span style="position: relative; display: inline-block; width: 60px; height: 14px;">
                        <span style="display: block; position: absolute; width: 100%; height: 100%; background: rgba(255,255,255,0.1); border-radius: 4px;"></span>
                        <span style="display: block; position: absolute; width: ${t}%; height: 100%; background: ${s}; border-radius: 4px; transition: width 0.3s ease;"></span>
                        <span style="position: absolute; width: 100%; text-align: center; font-size: 0.7em; line-height: 14px; font-weight: 600; color: white; text-shadow: 0 0 2px rgba(0,0,0,0.8);">${t}%</span>
                    </span>
                </span>
            </span>
        `}};p=g([m("k-memory-usage")],p);d.registerContribution(o,{target:o,label:"Memory",disabled:()=>!performance.memory,html:"<k-memory-usage></k-memory-usage>"});
