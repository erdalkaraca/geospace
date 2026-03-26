const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/github-service-extension-D5697jnV-C2O7aprH.js","assets/dist-XDM-k8NY.js","assets/chunk-CYidjpOJ.js","assets/preload-helper-DzyYoeor.js","assets/events-B_ZxkU_G-CIQGcfIC.js","assets/fs-access-BzDvih72-DkSEMJDg.js","assets/repeat-D7ZcYN9W.js","assets/dist-CwEYIDCO.css","assets/md-editor-extension-BAARKIfY-DJWSGyHu.js","assets/media-viewer-extension-DIdiRDeO-BdmpIQFa.js","assets/memory-usage-extension-CtuLZyaR-BZIT0N7F.js","assets/monaco-editor-extension-C4HaIO0k-8jDp0aIl.js","assets/editor.api2-CmFNvybj-DwfqPt45.js","assets/monaco.contribution-CdHWOuG1-DOti65Ho.js","assets/workers-CGROc86k-DJ0VA00C.js","assets/settings-tree-extension-xvuT1JDl-BcUtLjTL.js","assets/commands-CpsCRh5S-DX3JSEbu.js","assets/api-BKSQgj-C-C5_mgUrm.js","assets/package-manager-CicT90vE-Dd5LAvKp.js","assets/pyservice-DoyHFuGG-CJprZ3XA.js","assets/loader-BVX1pyhA.js","assets/lit-D5_fOPyp.js","assets/ai-system-extension-DnrA-ECv-X8agaG8m.js","assets/ai-service-CQaQJORq-BTW_zeb7.js","assets/command-palette-extension-CrNMOLMj-BNO1U3wu.js","assets/howto-extension-BEQ-0XJ7-ChC5IiSq.js","assets/api-a-2Qfsce.js","assets/in-browser-ml-extension-DJgZUoyC-C5LBQEqR.js","assets/python-runtime-extension-DEkxxwlz-BGyiRWAl.js","assets/dist-aphZbfG7.js","assets/notebook-kernel-api-c9l3_84P-DH9SRGva.js","assets/editor-python-run-Cs68X5JL-Dk-pHwir.js","assets/commands-DvF2qm90-HmJZ61bx.js","assets/dataviewer-extension-nwaJ0wW--sjWIqU9i.js","assets/third-party-D_KqVVyg.js","assets/sqleditor-extension-MEwwujrA-DXzPqctu.js","assets/duckdb-extension-MV9Z8YBQ-BVVaY3lg.js","assets/api-BDm6lISq.js","assets/pglite-extension-CMQRe3bs-zV8RgvaJ.js","assets/loader-SPGMVuOo.js","assets/loader-T4swYjKl.js","assets/loader-DKJlQJJs.js","assets/src-C4qLRiZf.js","assets/globals-D9uQnj65.js","assets/__vite-browser-external-hk0vqyiP.js","assets/src-c_1sG1-7.css","assets/utils-DdmSiiMS.js","assets/gs-map-editor-DgzOR9Iv.js","assets/loader-gS-ShAc3.js","assets/geo-BzR0juPd.js","assets/loader-Pkn-dy72.js","assets/loader-C7S4RjTO.js","assets/loader-4rbUdZue.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Cf3xff8G.js";import{F as e,N as t,f as n,g as r,m as i,n as a,r as o,y as s,z as c}from"./dist-XDM-k8NY.js";import{t as l}from"./preload-helper-DzyYoeor.js";import{a as u,u as d}from"./fs-access-BzDvih72-DkSEMJDg.js";import"./dist-aphZbfG7.js";import{r as f}from"./ai-service-CQaQJORq-BTW_zeb7.js";import"./api-a-2Qfsce.js";import{t as p}from"./api-BDm6lISq.js";c(`fg`,{resolver:(e,t,n)=>import.meta.resolve(`/icon-libs/font-gis.svg`)+`#fg-${e}`,mutator:e=>{e.setAttribute(`fill`,`currentColor`),e.setAttribute(`width`,`16`),e.setAttribute(`height`,`16`)},spriteSheet:!0});var m={name:`@eclipse-lyra/extension-github-service`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-lyra/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},h=`https://api.github.com`;function g(){let e=r.getCurrentApp();if(e?.metadata?.github){let t=e.metadata.github;if(t.owner&&t.repo)return{owner:t.owner,repo:t.repo}}throw Error(`GitHub repository not configured. Specify metadata.github in AppDefinition.`)}async function _(e=100){try{let t=g(),n=await fetch(`${h}/repos/${t.owner}/${t.repo}/releases?per_page=${e}`);return n.ok?await n.json():[]}catch(e){return console.error(`Failed to fetch releases:`,e),[]}}var v=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-GSWgOjeX-DWX3mlLM.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-Bhvk9DkV-DpAqNeTw.js`),[])}),!0);s.registerExtension({id:m.name,name:v.EXT_GITHUB_SERVICE_NAME,description:v.EXT_GITHUB_SERVICE_DESC,loader:()=>l(()=>import(`./github-service-extension-D5697jnV-C2O7aprH.js`),__vite__mapDeps([0,1,2,3,4,5,6,7])),icon:`code-branch`});var y={name:`@eclipse-lyra/extension-md-editor`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-lyra/core":`*`,marked:`^12.0.0 || ^16.4.1`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},b=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-B-XSgGEO-BCJngzzp.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-C1spZCa1-CaTwdF8E.js`),[])}),!0);s.registerExtension({id:y.name,name:b.EXT_MDEDITOR_NAME,description:b.EXT_MDEDITOR_DESC,loader:()=>l(()=>import(`./md-editor-extension-BAARKIfY-DJWSGyHu.js`),__vite__mapDeps([8,1,2,3,4,5,6,7])),icon:`book`});var x={name:`@eclipse-lyra/extension-media-viewer`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-lyra/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},S=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-BgRO7Rh7-CJMTaUDn.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-DyeoJm7D-lcbFjCOb.js`),[])}),!0);s.registerExtension({id:x.name,name:S.EXT_MEDIAVIEWER_NAME,description:S.EXT_MEDIAVIEWER_DESC,loader:()=>l(()=>import(`./media-viewer-extension-DIdiRDeO-BdmpIQFa.js`),__vite__mapDeps([9,1,2,3,4,5,6,7])),icon:`image`});var C={name:`@eclipse-lyra/extension-memory-usage`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-lyra/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},w=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-CvKdEf6o-BMYdzMq5.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-BMzjKj3o-Be6u9vgz.js`),[])}),!0);s.registerExtension({id:C.name,name:w.EXT_MEMORYUSAGE_NAME,description:w.EXT_MEMORYUSAGE_DESC,loader:()=>l(()=>import(`./memory-usage-extension-CtuLZyaR-BZIT0N7F.js`),__vite__mapDeps([10,1,2,3,4,5,6,7])),icon:`microchip`});var T={name:`@eclipse-lyra/extension-monaco-editor`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./widget":{types:`./dist/monaco-widget.d.ts`,import:`./dist/widget.js`}},dependencies:{"@eclipse-lyra/core":`*`,"monaco-editor":`0.55.1`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},E=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-TtWptOTJ-CKVkMbUi.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-DY_jLw5Z-DD8JHVxx.js`),[])}),!0);s.registerExtension({id:T.name,name:E.EXT_MONACO_NAME,description:E.EXT_MONACO_DESC,loader:()=>l(()=>import(`./monaco-editor-extension-C4HaIO0k-8jDp0aIl.js`),__vite__mapDeps([11,1,2,3,4,5,6,7,12,13,14])),icon:`file-pen`});var D={name:`@eclipse-lyra/extension-settings-tree`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-lyra/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},O=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-BNVmjm3M-CukLeP-2.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-4qIo7_K0-w--dqIV1.js`),[])}),!0);s.registerExtension({id:D.name,name:O.EXT_SETTINGS_TREE_NAME,description:O.EXT_SETTINGS_TREE_DESC,loader:()=>l(()=>import(`./settings-tree-extension-xvuT1JDl-BcUtLjTL.js`),__vite__mapDeps([15,1,2,3,4,5,6,7])),icon:`sitemap`});var k={name:`@eclipse-lyra/extension-utils`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-lyra/core":`*`,"@eclipse-lyra/extension-python-runtime":`*`,jszip:`^3.10.1`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},A=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-DpWotOVv-Dezn9Az0.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-4j7sK8PT-1ObOiY3C.js`),[])}),!0);s.registerExtension({id:k.name,name:A.EXT_UTILS_NAME,description:A.EXT_UTILS_DESC,loader:()=>l(()=>import(`./commands-CpsCRh5S-DX3JSEbu.js`),__vite__mapDeps([16,1,2,3,4,5,6,7,17,18,19])),icon:`toolbox`,dependencies:[`@eclipse-lyra/extension-python-runtime`]}),s.registerExtension({id:`@eclipse-lyra/extension-catalog`,name:`Catalog`,description:`Browse and checkout resources from a catalog`,loader:()=>l(()=>import(`./loader-BVX1pyhA.js`),__vite__mapDeps([20,1,2,3,4,5,6,7,21])),icon:`book`}),s.registerExtension({id:{name:`@eclipse-lyra/extension-ai-system`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-lyra/core":`*`,marked:`^12.0.0 || ^16.4.1`,lit:`^3.0.0`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}}.name,name:`AI System`,description:`AI assistants, chat, and tool execution`,loader:()=>l(()=>import(`./ai-system-extension-DnrA-ECv-X8agaG8m.js`),__vite__mapDeps([22,1,2,3,4,5,6,7,23])),icon:`robot`});var j={name:`@eclipse-lyra/extension-command-palette`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-lyra/core":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},M=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-BAIyaWGM-BBCKoiN6.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-4m_srIpA-DLX8EI7W.js`),[])}),!0);s.registerExtension({id:j.name,name:M.EXT_COMMANDPALETTE_NAME,description:M.EXT_COMMANDPALETTE_DESC,loader:()=>l(()=>import(`./command-palette-extension-CrNMOLMj-BNO1U3wu.js`),__vite__mapDeps([24,1,2,3,4,5,6,7,21])),icon:`terminal`});var N={name:`@eclipse-lyra/extension-howto-system`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},dependencies:{"@eclipse-lyra/core":`*`,"@eclipse-lyra/extension-ai-system":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},module:`./dist/index.js`,types:`./dist/index.d.ts`,files:[`dist`],scripts:{build:`vite build`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},P=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-5w94fisR-DUNfFYHn.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-LfC8hyxS-BJBJoGMA.js`),[])}),!0);s.registerExtension({id:N.name,name:P.EXT_HOWTO_NAME,description:P.EXT_HOWTO_DESC,loader:()=>l(()=>import(`./howto-extension-BEQ-0XJ7-ChC5IiSq.js`),__vite__mapDeps([25,1,2,3,4,5,6,7,23,26])),icon:`list-check`,experimental:!0});var F={name:`@eclipse-lyra/extension-in-browser-ml`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-lyra/core":`*`,"@huggingface/transformers":`^3.8.0`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},I=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-CeMAAFVI-DARHALds.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-4Ii3SXJ7-BqctpJ8V.js`),[])}),!0);s.registerExtension({id:F.name,name:I.EXT_IN_BROWSER_ML_NAME,description:I.EXT_IN_BROWSER_ML_DESC,loader:()=>l(()=>import(`./in-browser-ml-extension-DJgZUoyC-C5LBQEqR.js`),__vite__mapDeps([27,1,2,3,4,5,6,7,21])),icon:`brain`,experimental:!0});var L={name:`@eclipse-lyra/extension-python-runtime`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-lyra/core":`*`,"@eclipse-lyra/extension-monaco-editor":`*`,"@eclipse-lyra/extension-notebook":`*`,pyodide:`^0.27.7`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},R=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-CHoexpTu-Dd8UvlEn.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-BSbqitYs-N_-wSp0E.js`),[])}),!0);s.registerExtension({id:L.name,name:R.EXT_PYTHONRUNTIME_NAME,description:R.EXT_PYTHONRUNTIME_DESC,loader:()=>Promise.all([l(()=>import(`./python-runtime-extension-DEkxxwlz-BGyiRWAl.js`),__vite__mapDeps([28,1,2,3,4,5,6,7,29,30,31,18,19])),l(()=>import(`./commands-DvF2qm90-HmJZ61bx.js`),__vite__mapDeps([32,1,2,3,4,5,6,7,19]))]),icon:`lyra python`}),s.registerExtension({id:{name:`@eclipse-lyra/extension-dataviewer`,version:`0.7.60`,repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`},type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-lyra/core":`*`,papaparse:`^5.5.3`},devDependencies:{"@types/papaparse":`^5.5.2`,typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`}}.name,name:`Data Viewer`,description:`Tabular data views, persistence, and CSV/TSV/DuckDB integration`,loader:()=>l(()=>import(`./dataviewer-extension-nwaJ0wW--sjWIqU9i.js`),__vite__mapDeps([33,1,2,3,4,5,6,7,21,34])),icon:`table`}),s.registerExtension({id:{name:`@eclipse-lyra/extension-sqleditor`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-lyra/core":`*`,"@eclipse-lyra/extension-monaco-editor":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}}.name,name:`SQL Editor`,description:`Generic SQL editor with pluggable backends`,loader:()=>l(()=>import(`./sqleditor-extension-MEwwujrA-DXzPqctu.js`),__vite__mapDeps([35,1,2,3,4,5,6,7,21])),icon:`database`});var z={name:`@eclipse-lyra/extension-duckdb`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`},"./api":{types:`./dist/api.d.ts`,import:`./dist/api.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@duckdb/duckdb-wasm":`1.33.1-dev20.0`,"@eclipse-lyra/core":`*`,"@eclipse-lyra/extension-catalog":`*`,"@eclipse-lyra/extension-notebook":`*`,"@eclipse-lyra/extension-sqleditor":`*`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}},B=await o(Object.assign({"./i18n.de.json":()=>l(()=>import(`./i18n.de-DcvaIwdb-BnwSEj3E.js`),[]),"./i18n.en.json":()=>l(()=>import(`./i18n.en-CEVgAB1e-BranmPYj.js`),[])}),!0);s.registerExtension({id:z.name,name:B.EXT_DUCKDB_NAME,description:B.EXT_DUCKDB_DESC,loader:()=>l(()=>import(`./duckdb-extension-MV9Z8YBQ-BVVaY3lg.js`),__vite__mapDeps([36,1,2,3,4,5,6,7,37,29,30])),icon:`database`,dependencies:[`@eclipse-lyra/extension-sqleditor`],experimental:!0}),s.registerExtension({id:{name:`@eclipse-lyra/extension-pglite`,version:`0.7.60`,type:`module`,main:`./dist/index.js`,module:`./dist/index.js`,types:`./dist/index.d.ts`,exports:{".":{types:`./dist/index.d.ts`,import:`./dist/index.js`}},files:[`dist`],scripts:{build:`vite build`},dependencies:{"@eclipse-lyra/core":`*`,"@eclipse-lyra/extension-catalog":`*`,"@eclipse-lyra/extension-notebook":`*`,"@eclipse-lyra/extension-sqleditor":`*`,"@electric-sql/pglite":`^0.3.0`},devDependencies:{typescript:`^6.0.0`,vite:`^8.0.0`,"vite-plugin-dts":`^4.5.4`},repository:{type:`git`,url:`https://github.com/eclipse-lyra/core`}}.name,name:`PGlite`,description:`In-browser PostgreSQL via PGlite`,loader:()=>l(()=>import(`./pglite-extension-CMQRe3bs-zV8RgvaJ.js`),__vite__mapDeps([38,1,2,3,4,5,6,7,37,29,30])),icon:`database`,dependencies:[`@eclipse-lyra/extension-sqleditor`],experimental:!0}),s.registerExtension({id:`@kispace-io/extension-gtfs`,name:`GTFS to GeoJSON Converter`,description:`Convert GTFS zip archives to GeoJSON files`,loader:()=>l(()=>import(`./loader-SPGMVuOo.js`),__vite__mapDeps([39,1,2,3,4,5,6,7])),icon:`map-location-dot`}),s.registerExtension({id:`@kispace-io/extension-overpass`,name:`OpenStreetMap Overpass`,description:`OpenStreetMap Overpass API Integration for use with LLMs`,loader:()=>l(()=>import(`./loader-T4swYjKl.js`),__vite__mapDeps([40,1,2,3,4,5,6,7])),icon:`table`}),s.registerExtension({id:`@kispace-io/extension-map-editor`,name:`geo!space Map Editor`,description:`Interactive map editor for .geospace files with layers, drawing tools, and style management`,loader:()=>l(()=>import(`./loader-DKJlQJJs.js`),__vite__mapDeps([41,1,2,3,4,5,6,7,42,21,34,43,44,45,46,47])),icon:`location-dot`}),s.registerExtension({id:`@kispace-io/extension-mapprops`,name:`geo!space Map Properties`,description:`View and edit map layers, controls, overlays, and styles`,loader:()=>l(()=>import(`./loader-gS-ShAc3.js`),__vite__mapDeps([48,1,2,3,4,5,6,7,42,21,34,43,44,45,46,47,49])),icon:`fg map-options`}),s.registerExtension({id:`@kispace-io/extension-style-editor`,name:`Style Editor`,description:`Visual editor for defining and managing map styles and rules`,loader:()=>l(()=>import(`./loader-Pkn-dy72.js`),__vite__mapDeps([50,1,2,3,4,5,6,7,42,21,34,43,44,45,47,46,49])),icon:`palette`,dependencies:[`@kispace-io/extension-map-editor`]}),s.registerExtension({id:`@kispace-io/extension-mapbuilder`,name:`geo!space Map Builder`,description:`Compile a geo!space file to an interactive website`,loader:()=>l(()=>import(`./loader-C7S4RjTO.js`),__vite__mapDeps([51,1,2,3,4,5,6,7,42,21,34,43,44,45,46,47,49])),icon:`earth`}),s.registerExtension({id:`@kispace-io/extension-routing`,name:`In-Browser Routing`,description:`In-browser routing using OpenStreetMap data (based on Rust/WASM library routx).`,loader:()=>l(()=>import(`./loader-4rbUdZue.js`),__vite__mapDeps([52,1,2,3,4,5,6,7,42,21,34,43,44,45,47,46,49])),icon:`route`});var V=`# geo!space
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/erdalkaraca/geospace)
[![Browser Support](https://img.shields.io/badge/Chrome%20%7C%20Opera-Supported-brightgreen)](#browser-compatibility)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-purple)](#key-features)
[![No Installation](https://img.shields.io/badge/Installation-None%20Required-orange)](#quick-start)
[![Built on Eclipse Lyra](https://img.shields.io/badge/Built%20on-Eclipse%20Lyra-blue)](https://projects.eclipse.org/proposals/eclipse-lyra)

**The Interactive Mapping IDE in Your Browser**

geo!space is a powerful browser-based mapping IDE built as an [Eclipse Lyra](https://projects.eclipse.org/proposals/eclipse-lyra) app. It provides professional mapping capabilities entirely in your browser: create interactive maps, work with geospatial data, and transform maps into cross-platform Progressive Web Apps – all without installing any native software.

## Table of Contents

- [Key Features](#key-features)
- [Browser Compatibility](#browser-compatibility)
- [Use Cases](#use-cases)
- [Getting Started](#getting-started)
- [Development](#development)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Technical Architecture](#technical-architecture)
- [Used by](#used-by)
- [Quick Start](#quick-start)

## Key Features

### Professional Mapping
- **Interactive Map Editor**: Create and edit maps using the custom \`.geospace\` format
- **Multiple Data Sources**: Support for OSM, XYZ tiles, GeoJSON, KML, GeoTIFF, GPX, Features, BM (basemap.de), WMS, WMTS, and Overpass API
- **Satellite Imagery**: Built-in access to Esri World Imagery and Sentinel-2 satellite imagery
- **Layer Management**: Vector layers, tile layers, and layer groups with full styling control
- **OpenLayers Integration**: Built on the industry-standard OpenLayers mapping library
- **Advanced Styling**: Dynamic style loading and management system
- **PWA Transformation**: Convert \`.geospace\` files into cross-platform Progressive Web Apps

### Map Building & Deployment
- **PWA Builder**: Transform \`.geospace\` files into cross-platform Progressive Web Apps
- **Custom Controls**: Create interactive UI components using JavaScript modules
- **Module System**: Import and share custom map controls within your workspace

## Use Cases

- **Data Analysts**: Create interactive maps for data visualization
- **Urban Planners**: Design and prototype mapping applications  
- **Developers**: Build geospatial applications without complex setup
- **Researchers**: Prototype location-based applications quickly
- **Educators**: Teach mapping and geospatial concepts interactively
- **App Creators**: Transform maps into cross-platform PWAs for mobile, desktop, and web deployment

## Getting Started

### 1. **Connect a Workspace**
- In the Workspace tab, click the folder icon "Load workspace folder"
- Choose a local folder to use as your workspace
- This folder will be saved and restored when you reload geo!space

### 2. **Working with Files**
- **\`.geospace\` files**: Map files that open in the interactive map editor
- **Other files**: Open in the appropriate editor based on file type

### 3. **Creating Interactive Maps**
- Double-click \`.geospace\` files to open them in the map editor
- Use the map editor's UI to interact with layers, features, and styling
- Add data sources: OSM tiles, GeoJSON files, KML, GeoTIFF, GPX, or custom features
- **Build PWA**: Use the "Build map" button to transform your \`.geospace\` file into a cross-platform Progressive Web App

### 4. **Resource Catalog**
- Browse the catalog view for curated maps, datasets, icons, and controls
- Select items from catalog categories (datasets, maps, overlays, controls, icons)
- Use the "Checkout" button to download items directly to your workspace
- Access pre-built basemaps (OpenStreetMap, basemap.de) and sample datasets

## Development

geo!space runs as an Eclipse Lyra app and provides a powerful development environment for creating custom map controls, overlays, and workflows.

### **Run locally (for developers)**

To work on geo!space itself:

1. **Install dependencies**
   - At the repository root:
     - \`npm install\`
2. **Start the dev server**
   - From the root:
     - \`npm run dev\`
   - This runs the Lyra-based app from the \`@kispace-io/app\` workspace (served by Vite) and mounts it into the \`#app-root\` element in \`index.html\`.
3. **Build and preview**
   - Build: \`npm run build\`
   - Preview: \`npm run preview\`

The main app definition lives in \`packages/app/src/main.ts\`, where the Eclipse Lyra \`AppDefinition\` is registered along with all geo!space-specific extensions.

### **Custom Modules**

Create interactive UI components for your maps using JavaScript modules. geo!space uses **Lit** for templating and **Web Awesome** for UI components - both are provided by default and based on browser standards only, so no build tools are required.

**Key Features:**
- **No Build Tools**: Write plain JavaScript modules that run directly in the browser
- **Lit Templating**: Use Lit's HTML template literals for reactive UI
- **Web Awesome Components**: Access to a full library of web-standard UI components
- **OpenLayers API**: Full access to OpenLayers through the \`ol\` namespace object
- **Module System**: Import and share modules within your workspace using relative paths or bare specifiers

**Getting Started:**
1. Create a JavaScript file in your workspace (e.g., \`my-control.js\`)
2. Export a default function that receives APIs via destructuring
3. Return a Lit template from your function
4. Add your module to a map's \`controls\` or \`overlays\` array in the \`.geospace\` file

**Example:**
\`\`\`javascript
export default function ({html, style, events, map}) {
    style({
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0"
    });

    return () => html\`
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
            <wa-button @click=\${() => events("drawer/openMenu")}>
                Menu
            </wa-button>
        </div>
    \`;
}
\`\`\`

**Learn More:**
- See the [User Modules Guide](packages/app/public/docs/user-modules.md) for complete documentation
- Browse Web Awesome components: https://webawesome.com
- Explore OpenLayers API: https://openlayers.org/

## Examples

### **Create a City Map**
\`\`\`
1. Create a new .geospace file
2. Add OpenStreetMap as base layer
3. Add GeoJSON layers for buildings and trees
4. Use the "Build map" button to create a deployable PWA
\`\`\`

### **Custom Map Controls**
\`\`\`
1. Create a JavaScript module for custom map controls
2. Use Lit and WebAwesome components for UI
3. Add your module to a map's controls array
4. Build the map as a PWA for deployment
\`\`\`

## Troubleshooting

### **Common Issues**

**File Not Found**
- If you don't see expected files, try reloading the workspace
- Ensure the workspace folder is properly connected

**Browser Compatibility Issues**
- Use Chrome or Opera for full functionality
- Firefox and Safari have limited File System Access API support

**Map Not Loading**
- Check that \`.geospace\` files contain valid JSON
- Verify data source URLs are accessible
- Ensure required resources (icons, styles) are available

## FAQ

**Q: Do I need to install anything?**
A: No! geo!space runs entirely in your browser. Just open it in Chrome or Opera.

**Q: Is my data secure?**
A: Yes. All data stays in your browser and local workspace. No data is sent to external servers.

**Q: Can I use geo!space offline?**
A: Yes, for basic mapping features. Some features may require internet connection for data sources.

**Q: How do I share my maps?**
A: Use the "Build map" button to create a PWA that can be deployed anywhere or shared as a standalone app.

**Q: What file formats are supported?**
A: Maps: \`.geospace\` (JSON), Data: GeoJSON, KML, GPX, GeoTIFF, Features. Tile sources: OSM, XYZ, WMS, WMTS, BM (basemap.de), Satellite imagery (Esri, Sentinel-2).

**Q: Can I customize maps?**
A: Yes! Create custom controls using JavaScript modules with Lit and WebAwesome components.

## Technical Architecture

geo!space is implemented as an [Eclipse Lyra](https://projects.eclipse.org/proposals/eclipse-lyra) app that uses Lyra's core IDE infrastructure and extension system.

At startup, the Lyra \`AppDefinition\` in \`packages/app/src/main.ts\` is registered and auto-started into the \`#app-root\` container. The built-in "Welcome" command opens this \`README.md\` inside Lyra's editor system as the in-app welcome page.

**geo!space-Specific Stack:**
- **Eclipse Lyra Core**: Application shell, workspace, command palette, editor registry, AI system, and utilities (\`@eclipse-lyra/core\` and Lyra extensions)
- **Mapping Extensions**: geo!space-specific Lyra extensions such as:
  - \`@kispace-io/extension-map-editor\`
  - \`@kispace-io/extension-mapbuilder\`
  - \`@kispace-io/extension-mapprops\`
  - \`@kispace-io/extension-style-editor\`
  - \`@kispace-io/extension-overpass\`
  - \`@kispace-io/extension-gtfs\`
- **IDE Extensions**: Additional Lyra extensions for markdown editing, Monaco code editing, media viewing, settings, memory usage, AI assistance, data viewing, and more
- **OpenLayers**: Professional mapping library used for rendering and interaction
- **Custom Runtime (\`gs-lib\`)**: Map-to-OpenLayers conversion system and runtime utilities
- **Style Loader**: Dynamic style loading for geospatial data
- **PWA Builder**: Transform \`.geospace\` files into cross-platform Progressive Web Apps
- **Lit & WebAwesome**: Available for creating custom map controls and overlays

\`\`\`mermaid
flowchart TD
  browserUser[BrowserUser] --> geospaceApp["geo!space (Lyra App)"]
  geospaceApp --> lyraCore["EclipseLyraCore"]
  geospaceApp --> mappingExtensions["KiSpaceMappingExtensions"]
  geospaceApp --> lyraExtensions["LyraIDEExtensions"]
  mappingExtensions --> gsLib["gs-lib Runtime"]
  gsLib --> openLayers["OpenLayers"]
\`\`\`

## Used by

- **[Kiosk Scout](https://finder.kioskscout.de)**: A cross-platform PWA for finding nearby vending machines
- **Want your geo!space app listed here?** Contact us!

---

## Quick Start

**Get up and running in 3 minutes:**

1. **Open geo!space** in Chrome or Opera
2. **Connect workspace** - Click folder icon and select a local directory
3. **Create your first map** - Create a new \`.geospace\` file or open existing files
4. **Add data layers** - Import GeoJSON, KML, or add tile sources
5. **Build your app** - Use the "Build map" button to create a deployable PWA

### **First-Time Setup**
- **Start mapping immediately** - No configuration required
- **Add data sources** - Import your geospatial data or use built-in tile sources
- **Customize maps** - Create custom controls using JavaScript modules

## Ready to Start?

1. **Load the app** in Chrome or Opera
2. **Connect a workspace** folder
3. **Create your first map** or open an existing \`.geospace\` file
4. **Add layers and customize** your map
5. **Build and share** your interactive maps as PWAs

**Happy mapping!**`,H={label:`geo!space catalog`,icon:`earth`,contributionId:`catalog.root.geospace`,items:[{contributionId:`catalog.root.notebooks`,label:`Notebooks`,icon:`book`,items:[{label:`Welcome to Jupyter Notebooks`,icon:`graduation-cap`,state:{url:"${baseURL}/notebooks/welcome.ipynb",type:`file`}},{label:`Simple Notebook`,icon:`circle-info`,state:{url:"${baseURL}/notebooks/simple-notebook.ipynb",type:`file`}}]},{contributionId:`catalog.root.datasets`,label:`Datasets`,icon:`clone`,items:[{label:`countries.geojson`,icon:`fg geojson-file`,state:{url:"${baseURL}/datasets/countries.geojson",type:`file`}}]},{contributionId:`catalog.root.layers`,label:`Layers`,icon:`fg layers`,items:[{label:`Extent Markers`,icon:`code`,state:{url:"${baseURL}/layers/extent-markers.js",type:`file`}}]},{contributionId:`catalog.root.maps`,label:`Maps`,icon:`map-location`,items:[{label:`OpenStreetMap basemap`,icon:`earth`,state:{url:"${baseURL}/maps/osm.geospace",type:`file`}},{label:`basemap.de basemap`,icon:`earth`,state:{url:"${baseURL}/maps/bm.geospace",type:`file`}},{label:`basemap.de WMS (Color)`,icon:`earth`,state:{url:"${baseURL}/maps/bm-wms.geospace",type:`file`}},{label:`basemap.de WMS (Gray)`,icon:`earth`,state:{url:"${baseURL}/maps/bm-wms-gray.geospace",type:`file`}},{label:`basemap.de WMTS (Color)`,icon:`earth`,state:{url:"${baseURL}/maps/bm-wmts.geospace",type:`file`}},{label:`basemap.de WMTS (Gray)`,icon:`earth`,state:{url:"${baseURL}/maps/bm-wmts-gray.geospace",type:`file`}},{label:`TopPlusOpen WMTS`,icon:`earth`,state:{url:"${baseURL}/maps/topplus-wmts.geospace",type:`file`}},{label:`TopPlusOpen WMTS (Gray)`,icon:`earth`,state:{url:"${baseURL}/maps/topplus-wmts-gray.geospace",type:`file`}},{label:`TopPlusOpen WMTS Light`,icon:`earth`,state:{url:"${baseURL}/maps/topplus-wmts-light.geospace",type:`file`}},{label:`TopPlusOpen WMTS Light (Gray)`,icon:`earth`,state:{url:"${baseURL}/maps/topplus-wmts-light-gray.geospace",type:`file`}},{label:`Esri World Imagery (Satellite)`,icon:`satellite`,state:{url:"${baseURL}/maps/esri-world-imagery.geospace",type:`file`}},{label:`Sentinel-2 Cloudless (Satellite)`,icon:`satellite`,state:{url:"${baseURL}/maps/sentinel2-cloudless.geospace",type:`file`}},{label:`MapLibre 3D Example`,icon:`cubes`,state:{url:"${baseURL}/maps/maplibre-3d-demo.geospace",type:`file`}}]},{contributionId:`catalog.root.overlays`,label:`Overlays`,icon:`fg map-poi`,items:[]},{contributionId:`catalog.root.controls`,label:`Controls`,icon:`fg map-control`,items:[]},{contributionId:`catalog.root.icons`,label:`Icons`,icon:`icons`,items:[{label:`marker.png`,icon:`file`,state:{url:"${baseURL}/icons/marker.png",type:`file`}},{label:`location-user-24.png`,icon:`file`,state:{url:"${baseURL}/icons/location-user-24.png",type:`file`}}]},{contributionId:`catalog.root.packages`,label:`Asset Packages`,icon:`box-archive`,items:[]}]},U=`**geo!space - WebGIS Application:**

geo!space is a WebGIS (Web Geographic Information System) application for creating, editing, and visualizing interactive maps.

**Core Capabilities:**
- Interactive map editor with zoom, pan, and layer management
- Support for multiple layer types: GeoJSON, WMS, WMTS, Vector Tiles, and more
- Drawing tools for creating and editing geographic features
- Style management for customizing layer appearance
- Map state persistence in .geospace files (JSON format containing map configuration, layers, view settings, and styles)

**Map Editor:**
When a .geospace file is open, the map editor provides:
- Interactive map view with coordinate system support (EPSG:3857, EPSG:4326, etc.)
- Layer panel for managing multiple data layers
- Drawing tools for creating points, lines, and polygons
- Style editor for customizing layer visualizations
- Catalog integration for browsing and adding spatial data
`,W=d(`GeoSpaceApp`),G={name:`geo!space`,metadata:{github:{owner:`erdalkaraca`,repo:`geospace`},favicon:`/logo.svg`},extensions:[`@kispace-io/extension-map-editor`,`@kispace-io/extension-mapprops`,`@kispace-io/extension-style-editor`,`@kispace-io/extension-overpass`,`@kispace-io/extension-gtfs`,`@kispace-io/extension-mapbuilder`,`@kispace-io/extension-routing`,`@eclipse-lyra/extension-catalog`,`@eclipse-lyra/extension-utils`,`@eclipse-lyra/extension-command-palette`,`@eclipse-lyra/extension-md-editor`,`@eclipse-lyra/extension-monaco-editor`,`@eclipse-lyra/extension-media-viewer`,`@eclipse-lyra/extension-settings-tree`,`@eclipse-lyra/extension-memory-usage`,`@eclipse-lyra/extension-ai-system`,`@eclipse-lyra/extension-dataviewer`,`@eclipse-lyra/extension-sqleditor`,`@eclipse-lyra/extension-github-service`,`@eclipse-lyra/extension-notebook`],contributions:{ui:[{name:`toolbar.brand.geospace`,target:n,slot:`start`,label:`Brand`,component:`<span style="margin-right: 1rem; display: inline-flex; align-items: center;"><img src="/geospace.svg" alt="geo!space" style="height: 24px; display: block;" /></span>`}]},releaseHistory:_,async initialize(){let n=`/`.replace(/\/?$/,`/`);p(H,(typeof window<`u`?window.location.origin:``)+n),t.registerContribution(f,{label:`Geo!space Prompt Enhancer`,enhancer:{enhance:async e=>`${e}\n\n${U}`,priority:5}}),t.registerContribution(`system.icons`,{label:`geo!space File Icons`,mappings:{geospace:`earth`},priority:1}),e({command:{id:`help`,name:`Show welcome`,description:`Shows the welcome page.`,parameters:[]},handler:{execute:async e=>{let t=new u(V,`README.md`);await a.loadEditor(t)}},contribution:{target:i,icon:`question-circle`,label:`Welcome`}}),W.info(`geo!space is ready!`)},layout:`standard-bottom-sidebar`},K=document.getElementById(`app-root`)??document.body;r.registerApp(G,{autoStart:!0,hostConfig:!0,container:K});