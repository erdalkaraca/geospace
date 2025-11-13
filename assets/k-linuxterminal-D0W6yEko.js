import{e as l,d as v,x as p,y as d,b as u,t as h}from"./index-DoDY4M9O.js";import{s as m}from"./xterm-CODBi7oP.js";import{K as w}from"./main-CE0Oq1DM.js";var D=Object.getOwnPropertyDescriptor,b=(a,r,o,i)=>{for(var e=i>1?void 0:i?D(r,o):r,t=a.length-1,n;t>=0;t--)(n=a[t])&&(e=n(e)||e);return e};const s=window.CheerpX;let c=class extends w{constructor(){super(...arguments),this.consoleRef=l()}async doInitUI(){const a=await s.CloudDevice.create("wss://disks.webvm.io/debian_large_20230522_5044875331.ext2"),r=await s.IDBDevice.create("block1"),o=await s.OverlayDevice.create(a,r),i=await s.WebDevice.create(""),e=await s.DataDevice.create(),t=await s.Linux.create({mounts:[{type:"ext2",path:"/",dev:o},{type:"dir",path:"/app",dev:i},{type:"dir",path:"/data",dev:e},{type:"devs",path:"/dev"}]});t.setConsole(this.consoleRef.value),await t.run("/bin/bash",["--login"],{env:["HOME=/home/user","HOME=/home/user","USER=user","SHELL=/bin/bash","EDITOR=vim","LANG=en_US.UTF-8","LC_ALL=C"],cwd:"/home/user",uid:1e3,gid:1e3})}render(){return p`
            <pre class="console" ${v(this.consoleRef)}></pre>
        `}};c.styles=[d(m),u`
            :host {
                display: flex;
                flex: 1;
            }

            pre.console {
                flex: 1;
            }
        `];c=b([h("k-linux-terminal")],c);export{c as KLinuxTerminal};
