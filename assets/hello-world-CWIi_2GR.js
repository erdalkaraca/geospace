const r=({toastInfo:e,html:l,contributionRegistry:o,editorRegistry:n})=>{const t=()=>{alert("Hello World!")};o.registerContribution("app-tabs-left-end",{name:"system.helloworld",label:"Hello World!",icon:"flask",component:()=>l`
        <wa-button @click="${t}">Hello, world!</wa-button>`}),e("The Hello World! extension enabled!")};export{r as default};
