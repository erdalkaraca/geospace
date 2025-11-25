const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/k-monaco-editor-SUljfLxX-DiQ04mxS.js","assets/editor.main-ChA2hgQD.js","assets/preload-helper-WQhrSmCl.js","assets/editor-Dvl_Svmm.css","assets/index-CGXaaVt9.js","assets/chunk.LTSJC6DR-BCCP1Gxs.js","assets/index-aP6FMjSZ.css","assets/package-manager-extension-Bb1gA_o0-CoZqNrwJ.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./preload-helper-WQhrSmCl.js";import{s,x as c,u as d,q as i,ae as r}from"./index-CGXaaVt9.js";import"./chunk.LTSJC6DR-BCCP1Gxs.js";const l=`**Python Programming Assistant:**

You are helping with Python code. Python code is executed in the browser using Pyodide.

**Python-Specific Responsibilities:**
- Explain Python code and help debug Python errors
- Help with \`js\` module interaction: calling JavaScript functions from Python and passing data between Python and JavaScript
- Provide Python code examples
- Remember code runs in a browser environment (Pyodide) - be mindful of browser limitations

**Python Environment:**
- Working directory is \`/workspace\` (linked to user's local file system)
- Install packages by adding them to \`requirements.txt\` in the workspace
- Packages in \`requirements.txt\` are automatically installed before code execution

`,u=`**JavaScript Programming Assistant:**

You are helping with JavaScript code. JavaScript code is executed in a worker.

**JavaScript-Specific Focus:**
- Help with JavaScript, OpenLayers usage, and module patterns
- When a user requests a starter module, provide this template:

\`\`\`javascript
export default function ({ map, env, render, html, style, when, ref, createRef, events, settings }) {
    const state = {};
    return () => html\`
        <div>
            <h3>Hello!</h3>
            <button @click=\${() => {}}>Click me</button>
        </div>
    \`;
}
\`\`\`

`;s.registerEditorInputHandler({lazyInit:async()=>{await o(()=>import("./k-monaco-editor-SUljfLxX-DiQ04mxS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))},canHandle:e=>e instanceof d,handle:async e=>{const n={title:e.getName(),data:e,key:e.getName(),editorId:"monaco-editor",icon:"file-pen",noOverflow:!1,state:{}};return n.widgetFactory=()=>c`
            <k-monaco-editor .input=${n}></k-monaco-editor>`,n}});function a(e,n){const t=e.activeEditor;return t&&typeof t.getEditor=="function"&&typeof t.getLanguage=="function"&&t.getLanguage()===n}const p={priority:50,enhance:async(e,n)=>a(n,"python")?`${e}

${l}`:e},h={priority:50,enhance:async(e,n)=>a(n,"javascript")?`${e}

${u}`:e};i.registerContribution(r,{label:"Python Programming Enhancer",enhancer:p});i.registerContribution(r,{label:"JavaScript Programming Enhancer",enhancer:h});
