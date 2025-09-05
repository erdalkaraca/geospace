import{K as l,f as v,n as p,x as d,g as u,i as h,h as w}from"./index-Dvj07BtA.js";import{s as D}from"./xterm-CODBi7oP.js";var m=Object.getOwnPropertyDescriptor,x=(a,r,o,i)=>{for(var e=i>1?void 0:i?m(r,o):r,t=a.length-1,n;t>=0;t--)(n=a[t])&&(e=n(e)||e);return e};const s=window.CheerpX;let c=class extends l{constructor(){super(...arguments),this.consoleRef=v()}async doInitUI(){const a=await s.CloudDevice.create("wss://disks.webvm.io/debian_large_20230522_5044875331.ext2"),r=await s.IDBDevice.create("block1"),o=await s.OverlayDevice.create(a,r),i=await s.WebDevice.create(""),e=await s.DataDevice.create(),t=await s.Linux.create({mounts:[{type:"ext2",path:"/",dev:o},{type:"dir",path:"/app",dev:i},{type:"dir",path:"/data",dev:e},{type:"devs",path:"/dev"}]});t.setConsole(this.consoleRef.value),await t.run("/bin/bash",["--login"],{env:["HOME=/home/user","HOME=/home/user","USER=user","SHELL=/bin/bash","EDITOR=vim","LANG=en_US.UTF-8","LC_ALL=C"],cwd:"/home/user",uid:1e3,gid:1e3})}render(){return d`
            <pre class="console" ${p(this.consoleRef)}></pre>
        `}};c.styles=[u(D),h`
            :host {
                display: flex;
                flex: 1;
            }

            pre.console {
                flex: 1;
            }
        `];c=x([w("k-linux-terminal")],c);export{c as KLinuxTerminal};
