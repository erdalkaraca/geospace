import{C as b,P as h,U as q}from"./chunk-3WWIVTCY-CHsEZfxb.js";import{u as U}from"./chunk-QY3QWFKW-CdepMCHW.js";import"./repeat-DeJtXcpe.js";U();var F=5,D=async(u,S)=>{let w=new Set,I={async query(e,y,i){let v,E,r;if(typeof e!="string"&&(v=e.signal,y=e.params,i=e.callback,E=e.offset,r=e.limit,e=e.query),E===void 0!=(r===void 0))throw new Error("offset and limit must be provided together");let _=E!==void 0&&r!==void 0,m;if(_&&(typeof E!="number"||isNaN(E)||typeof r!="number"||isNaN(r)))throw new Error("offset and limit must be numbers");let c=i?[i]:[],n=b().replace(/-/g,""),R=!1,f,A,L=async()=>{await u.transaction(async a=>{let s=y&&y.length>0?await h(u,e,y,a):e;await a.exec(`CREATE OR REPLACE TEMP VIEW live_query_${n}_view AS ${s}`);let d=await C(a,`live_query_${n}_view`);await g(a,d,w),_?(await a.exec(`
              PREPARE live_query_${n}_get(int, int) AS
              SELECT * FROM live_query_${n}_view
              LIMIT $1 OFFSET $2;
            `),await a.exec(`
              PREPARE live_query_${n}_get_total_count AS
              SELECT COUNT(*) FROM live_query_${n}_view;
            `),m=(await a.query(`EXECUTE live_query_${n}_get_total_count;`)).rows[0].count,f={...await a.query(`EXECUTE live_query_${n}_get(${r}, ${E});`),offset:E,limit:r,totalCount:m}):(await a.exec(`
              PREPARE live_query_${n}_get AS
              SELECT * FROM live_query_${n}_view;
            `),f=await a.query(`EXECUTE live_query_${n}_get;`)),A=await Promise.all(d.map($=>a.listen(`"table_change__${$.schema_oid}__${$.table_oid}"`,async()=>{T()})))})};await L();let T=q(async({offset:a,limit:s}={})=>{if(!_&&(a!==void 0||s!==void 0))throw new Error("offset and limit cannot be provided for non-windowed queries");if(a&&(typeof a!="number"||isNaN(a))||s&&(typeof s!="number"||isNaN(s)))throw new Error("offset and limit must be numbers");E=a??E,r=s??r;let d=async($=0)=>{if(c.length!==0){try{_?f={...await u.query(`EXECUTE live_query_${n}_get(${r}, ${E});`),offset:E,limit:r,totalCount:m}:f=await u.query(`EXECUTE live_query_${n}_get;`)}catch(t){let p=t.message;if(p.startsWith(`prepared statement "live_query_${n}`)&&p.endsWith("does not exist")){if($>F)throw t;await L(),d($+1)}else throw t}if(O(c,f),_){let t=(await u.query(`EXECUTE live_query_${n}_get_total_count;`)).rows[0].count;t!==m&&(m=t,T())}}};await d()}),l=a=>{if(R)throw new Error("Live query is no longer active and cannot be subscribed to");c.push(a)},o=async a=>{a?c=c.filter(s=>s!==s):c=[],c.length===0&&!R&&(R=!0,await u.transaction(async s=>{await Promise.all(A.map(d=>d(s))),await s.exec(`
              DROP VIEW IF EXISTS live_query_${n}_view;
              DEALLOCATE live_query_${n}_get;
            `)}))};return v?.aborted?await o():v?.addEventListener("abort",()=>{o()},{once:!0}),O(c,f),{initialResults:f,subscribe:l,unsubscribe:o,refresh:T}},async changes(e,y,i,v){let E;if(typeof e!="string"&&(E=e.signal,y=e.params,i=e.key,v=e.callback,e=e.query),!i)throw new Error("key is required for changes queries");let r=v?[v]:[],_=b().replace(/-/g,""),m=!1,c=1,n,R,f=async()=>{await u.transaction(async l=>{let o=await h(u,e,y,l);await l.query(`CREATE OR REPLACE TEMP VIEW live_query_${_}_view AS ${o}`);let a=await C(l,`live_query_${_}_view`);await g(l,a,w);let s=[...(await l.query(`
                SELECT column_name, data_type, udt_name
                FROM information_schema.columns 
                WHERE table_name = 'live_query_${_}_view'
              `)).rows,{column_name:"__after__",data_type:"integer"}];await l.exec(`
            CREATE TEMP TABLE live_query_${_}_state1 (LIKE live_query_${_}_view INCLUDING ALL);
            CREATE TEMP TABLE live_query_${_}_state2 (LIKE live_query_${_}_view INCLUDING ALL);
          `);for(let d of[1,2]){let $=d===1?2:1;await l.exec(`
              PREPARE live_query_${_}_diff${d} AS
              WITH
                prev AS (SELECT LAG("${i}") OVER () as __after__, * FROM live_query_${_}_state${$}),
                curr AS (SELECT LAG("${i}") OVER () as __after__, * FROM live_query_${_}_state${d}),
                data_diff AS (
                  -- INSERT operations: Include all columns
                  SELECT 
                    'INSERT' AS __op__,
                    ${s.map(({column_name:t})=>`curr."${t}" AS "${t}"`).join(`,
`)},
                    ARRAY[]::text[] AS __changed_columns__
                  FROM curr
                  LEFT JOIN prev ON curr.${i} = prev.${i}
                  WHERE prev.${i} IS NULL
                UNION ALL
                  -- DELETE operations: Include only the primary key
                  SELECT 
                    'DELETE' AS __op__,
                    ${s.map(({column_name:t,data_type:p,udt_name:N})=>t===i?`prev."${t}" AS "${t}"`:`NULL${p==="USER-DEFINED"?`::${N}`:""} AS "${t}"`).join(`,
`)},
                      ARRAY[]::text[] AS __changed_columns__
                  FROM prev
                  LEFT JOIN curr ON prev.${i} = curr.${i}
                  WHERE curr.${i} IS NULL
                UNION ALL
                  -- UPDATE operations: Include only changed columns
                  SELECT 
                    'UPDATE' AS __op__,
                    ${s.map(({column_name:t,data_type:p,udt_name:N})=>t===i?`curr."${t}" AS "${t}"`:`CASE 
                              WHEN curr."${t}" IS DISTINCT FROM prev."${t}" 
                              THEN curr."${t}"
                              ELSE NULL${p==="USER-DEFINED"?`::${N}`:""}
                              END AS "${t}"`).join(`,
`)},
                      ARRAY(SELECT unnest FROM unnest(ARRAY[${s.filter(({column_name:t})=>t!==i).map(({column_name:t})=>`CASE
                              WHEN curr."${t}" IS DISTINCT FROM prev."${t}" 
                              THEN '${t}' 
                              ELSE NULL 
                              END`).join(", ")}]) WHERE unnest IS NOT NULL) AS __changed_columns__
                  FROM curr
                  INNER JOIN prev ON curr.${i} = prev.${i}
                  WHERE NOT (curr IS NOT DISTINCT FROM prev)
                )
              SELECT * FROM data_diff;
            `)}R=await Promise.all(a.map(d=>l.listen(`"table_change__${d.schema_oid}__${d.table_oid}"`,async()=>{A()})))})};await f();let A=q(async()=>{if(r.length===0&&n)return;let l=!1;for(let o=0;o<5;o++)try{await u.transaction(async a=>{await a.exec(`
                INSERT INTO live_query_${_}_state${c} 
                  SELECT * FROM live_query_${_}_view;
              `),n=await a.query(`EXECUTE live_query_${_}_diff${c};`),c=c===1?2:1,await a.exec(`
                TRUNCATE live_query_${_}_state${c};
              `)});break}catch(a){if(a.message===`relation "live_query_${_}_state${c}" does not exist`){l=!0,await f();continue}else throw a}P(r,[...l?[{__op__:"RESET"}]:[],...n.rows])}),L=l=>{if(m)throw new Error("Live query is no longer active and cannot be subscribed to");r.push(l)},T=async l=>{l?r=r.filter(o=>o!==o):r=[],r.length===0&&!m&&(m=!0,await u.transaction(async o=>{await Promise.all(R.map(a=>a(o))),await o.exec(`
              DROP VIEW IF EXISTS live_query_${_}_view;
              DROP TABLE IF EXISTS live_query_${_}_state1;
              DROP TABLE IF EXISTS live_query_${_}_state2;
              DEALLOCATE live_query_${_}_diff1;
              DEALLOCATE live_query_${_}_diff2;
            `)}))};return E?.aborted?await T():E?.addEventListener("abort",()=>{T()},{once:!0}),await A(),{fields:n.fields.filter(l=>!["__after__","__op__","__changed_columns__"].includes(l.name)),initialChanges:n.rows,subscribe:L,unsubscribe:T,refresh:A}},async incrementalQuery(e,y,i,v){let E;if(typeof e!="string"&&(E=e.signal,y=e.params,i=e.key,v=e.callback,e=e.query),!i)throw new Error("key is required for incremental queries");let r=v?[v]:[],_=new Map,m=new Map,c=[],n=!0,{fields:R,unsubscribe:f,refresh:A}=await I.changes(e,y,i,l=>{for(let s of l){let{__op__:d,__changed_columns__:$,...t}=s;switch(d){case"RESET":_.clear(),m.clear();break;case"INSERT":_.set(t[i],t),m.set(t.__after__,t[i]);break;case"DELETE":{let p=_.get(t[i]);_.delete(t[i]),p.__after__!==null&&m.delete(p.__after__);break}case"UPDATE":{let p={..._.get(t[i])??{}};for(let N of $)p[N]=t[N],N==="__after__"&&m.set(t.__after__,t[i]);_.set(t[i],p);break}}}let o=[],a=null;for(let s=0;s<_.size;s++){let d=m.get(a),$=_.get(d);if(!$)break;let t={...$};delete t.__after__,o.push(t),a=d}c=o,n||O(r,{rows:o,fields:R})});n=!1,O(r,{rows:c,fields:R});let L=l=>{r.push(l)},T=async l=>{l?r=r.filter(o=>o!==o):r=[],r.length===0&&await f()};return E?.aborted?await T():E?.addEventListener("abort",()=>{T()},{once:!0}),{initialResults:{rows:c,fields:R},subscribe:L,unsubscribe:T,refresh:A}}};return{namespaceObj:I}},x={name:"Live Queries",setup:D};async function C(u,S){return(await u.query(`
      WITH RECURSIVE view_dependencies AS (
        -- Base case: Get the initial view's dependencies
        SELECT DISTINCT
          cl.relname AS dependent_name,
          n.nspname AS schema_name,
          cl.oid AS dependent_oid,
          n.oid AS schema_oid,
          cl.relkind = 'v' AS is_view
        FROM pg_rewrite r
        JOIN pg_depend d ON r.oid = d.objid
        JOIN pg_class cl ON d.refobjid = cl.oid
        JOIN pg_namespace n ON cl.relnamespace = n.oid
        WHERE
          r.ev_class = (
              SELECT oid FROM pg_class WHERE relname = $1 AND relkind = 'v'
          )
          AND d.deptype = 'n'

        UNION ALL

        -- Recursive case: Traverse dependencies for views
        SELECT DISTINCT
          cl.relname AS dependent_name,
          n.nspname AS schema_name,
          cl.oid AS dependent_oid,
          n.oid AS schema_oid,
          cl.relkind = 'v' AS is_view
        FROM view_dependencies vd
        JOIN pg_rewrite r ON vd.dependent_name = (
          SELECT relname FROM pg_class WHERE oid = r.ev_class AND relkind = 'v'
        )
        JOIN pg_depend d ON r.oid = d.objid
        JOIN pg_class cl ON d.refobjid = cl.oid
        JOIN pg_namespace n ON cl.relnamespace = n.oid
        WHERE d.deptype = 'n'
      )
      SELECT DISTINCT
        dependent_name AS table_name,
        schema_name,
        dependent_oid AS table_oid,
        schema_oid
      FROM view_dependencies
      WHERE NOT is_view; -- Exclude intermediate views
    `,[S])).rows.map(w=>({table_name:w.table_name,schema_name:w.schema_name,table_oid:w.table_oid,schema_oid:w.schema_oid}))}async function g(u,S,w){let I=S.filter(e=>!w.has(`${e.schema_oid}_${e.table_oid}`)).map(e=>`
      CREATE OR REPLACE FUNCTION "_notify_${e.schema_oid}_${e.table_oid}"() RETURNS TRIGGER AS $$
      BEGIN
        PERFORM pg_notify('table_change__${e.schema_oid}__${e.table_oid}', '');
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql;
      CREATE OR REPLACE TRIGGER "_notify_trigger_${e.schema_oid}_${e.table_oid}"
      AFTER INSERT OR UPDATE OR DELETE ON "${e.schema_name}"."${e.table_name}"
      FOR EACH STATEMENT EXECUTE FUNCTION "_notify_${e.schema_oid}_${e.table_oid}"();
      `).join(`
`);I.trim()!==""&&await u.exec(I),S.map(e=>w.add(`${e.schema_oid}_${e.table_oid}`))}var O=(u,S)=>{for(let w of u)w(S)},P=(u,S)=>{for(let w of u)w(S)};export{x as live};
