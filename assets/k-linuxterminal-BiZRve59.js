import{l,q as v,x as p,L as d,a as u,t as h}from"./index-C1DvjuJF.js";import{s as m}from"./xterm-CODBi7oP.js";import{K as w}from"./main-Ci7DRhcV.js";var D=Object.getOwnPropertyDescriptor,x=(s,r,o,i)=>{for(var e=i>1?void 0:i?D(r,o):r,t=s.length-1,n;t>=0;t--)(n=s[t])&&(e=n(e)||e);return e};const a=window.CheerpX;let c=class extends w{constructor(){super(...arguments),this.consoleRef=l()}async doInitUI(){const s=await a.CloudDevice.create("wss://disks.webvm.io/debian_large_20230522_5044875331.ext2"),r=await a.IDBDevice.create("block1"),o=await a.OverlayDevice.create(s,r),i=await a.WebDevice.create(""),e=await a.DataDevice.create(),t=await a.Linux.create({mounts:[{type:"ext2",path:"/",dev:o},{type:"dir",path:"/app",dev:i},{type:"dir",path:"/data",dev:e},{type:"devs",path:"/dev"}]});t.setConsole(this.consoleRef.value),await t.run("/bin/bash",["--login"],{env:["HOME=/home/user","HOME=/home/user","USER=user","SHELL=/bin/bash","EDITOR=vim","LANG=en_US.UTF-8","LC_ALL=C"],cwd:"/home/user",uid:1e3,gid:1e3})}render(){return p`
            <pre class="console" ${v(this.consoleRef)}></pre>
        `}};c.styles=[d(m),u`
            :host {
                display: flex;
                flex: 1;
            }

            pre.console {
                flex: 1;
            }
        `];c=x([h("k-linux-terminal")],c);export{c as KLinuxTerminal};
