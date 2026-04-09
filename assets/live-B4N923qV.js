import{l as e}from"./chunk-QY3QWFKW-BGin8aqG.js";import{l as t,n,p as r}from"./chunk-3WWIVTCY-L2e3gcG7.js";e();var i=5,a={name:`Live Queries`,setup:async(e,a)=>{let u=new Set,d={async query(a,l,d){let f,p,m;if(typeof a!=`string`&&(f=a.signal,l=a.params,d=a.callback,p=a.offset,m=a.limit,a=a.query),p===void 0!=(m===void 0))throw Error(`offset and limit must be provided together`);let h=p!==void 0&&m!==void 0,g;if(h&&(typeof p!=`number`||isNaN(p)||typeof m!=`number`||isNaN(m)))throw Error(`offset and limit must be numbers`);let _=d?[d]:[],v=n().replace(/-/g,``),y=!1,b,x,S=async()=>{await e.transaction(async n=>{let r=l&&l.length>0?await t(e,a,l,n):a;await n.exec(`CREATE OR REPLACE TEMP VIEW live_query_${v}_view AS ${r}`);let i=await o(n,`live_query_${v}_view`);await s(n,i,u),h?(await n.exec(`
              PREPARE live_query_${v}_get(int, int) AS
              SELECT * FROM live_query_${v}_view
              LIMIT $1 OFFSET $2;
            `),await n.exec(`
              PREPARE live_query_${v}_get_total_count AS
              SELECT COUNT(*) FROM live_query_${v}_view;
            `),g=(await n.query(`EXECUTE live_query_${v}_get_total_count;`)).rows[0].count,b={...await n.query(`EXECUTE live_query_${v}_get(${m}, ${p});`),offset:p,limit:m,totalCount:g}):(await n.exec(`
              PREPARE live_query_${v}_get AS
              SELECT * FROM live_query_${v}_view;
            `),b=await n.query(`EXECUTE live_query_${v}_get;`)),x=await Promise.all(i.map(e=>n.listen(`"table_change__${e.schema_oid}__${e.table_oid}"`,async()=>{C()})))})};await S();let C=r(async({offset:t,limit:n}={})=>{if(!h&&(t!==void 0||n!==void 0))throw Error(`offset and limit cannot be provided for non-windowed queries`);if(t&&(typeof t!=`number`||isNaN(t))||n&&(typeof n!=`number`||isNaN(n)))throw Error(`offset and limit must be numbers`);p=t??p,m=n??m;let r=async(t=0)=>{if(_.length!==0){try{b=h?{...await e.query(`EXECUTE live_query_${v}_get(${m}, ${p});`),offset:p,limit:m,totalCount:g}:await e.query(`EXECUTE live_query_${v}_get;`)}catch(e){let n=e.message;if(n.startsWith(`prepared statement "live_query_${v}`)&&n.endsWith(`does not exist`)){if(t>i)throw e;await S(),r(t+1)}else throw e}if(c(_,b),h){let t=(await e.query(`EXECUTE live_query_${v}_get_total_count;`)).rows[0].count;t!==g&&(g=t,C())}}};await r()}),w=e=>{if(y)throw Error(`Live query is no longer active and cannot be subscribed to`);_.push(e)},T=async t=>{_=t?_.filter(e=>e!==e):[],_.length===0&&!y&&(y=!0,await e.transaction(async e=>{await Promise.all(x.map(t=>t(e))),await e.exec(`
              DROP VIEW IF EXISTS live_query_${v}_view;
              DEALLOCATE live_query_${v}_get;
            `)}))};return f?.aborted?await T():f?.addEventListener(`abort`,()=>{T()},{once:!0}),c(_,b),{initialResults:b,subscribe:w,unsubscribe:T,refresh:C}},async changes(i,a,c,d){let f;if(typeof i!=`string`&&(f=i.signal,a=i.params,c=i.key,d=i.callback,i=i.query),!c)throw Error(`key is required for changes queries`);let p=d?[d]:[],m=n().replace(/-/g,``),h=!1,g=1,_,v,y=async()=>{await e.transaction(async n=>{let r=await t(e,i,a,n);await n.query(`CREATE OR REPLACE TEMP VIEW live_query_${m}_view AS ${r}`);let l=await o(n,`live_query_${m}_view`);await s(n,l,u);let d=[...(await n.query(`
                SELECT column_name, data_type, udt_name
                FROM information_schema.columns 
                WHERE table_name = 'live_query_${m}_view'
              `)).rows,{column_name:`__after__`,data_type:`integer`}];await n.exec(`
            CREATE TEMP TABLE live_query_${m}_state1 (LIKE live_query_${m}_view INCLUDING ALL);
            CREATE TEMP TABLE live_query_${m}_state2 (LIKE live_query_${m}_view INCLUDING ALL);
          `);for(let e of[1,2]){let t=e===1?2:1;await n.exec(`
              PREPARE live_query_${m}_diff${e} AS
              WITH
                prev AS (SELECT LAG("${c}") OVER () as __after__, * FROM live_query_${m}_state${t}),
                curr AS (SELECT LAG("${c}") OVER () as __after__, * FROM live_query_${m}_state${e}),
                data_diff AS (
                  -- INSERT operations: Include all columns
                  SELECT 
                    'INSERT' AS __op__,
                    ${d.map(({column_name:e})=>`curr."${e}" AS "${e}"`).join(`,
`)},
                    ARRAY[]::text[] AS __changed_columns__
                  FROM curr
                  LEFT JOIN prev ON curr.${c} = prev.${c}
                  WHERE prev.${c} IS NULL
                UNION ALL
                  -- DELETE operations: Include only the primary key
                  SELECT 
                    'DELETE' AS __op__,
                    ${d.map(({column_name:e,data_type:t,udt_name:n})=>e===c?`prev."${e}" AS "${e}"`:`NULL${t===`USER-DEFINED`?`::${n}`:``} AS "${e}"`).join(`,
`)},
                      ARRAY[]::text[] AS __changed_columns__
                  FROM prev
                  LEFT JOIN curr ON prev.${c} = curr.${c}
                  WHERE curr.${c} IS NULL
                UNION ALL
                  -- UPDATE operations: Include only changed columns
                  SELECT 
                    'UPDATE' AS __op__,
                    ${d.map(({column_name:e,data_type:t,udt_name:n})=>e===c?`curr."${e}" AS "${e}"`:`CASE 
                              WHEN curr."${e}" IS DISTINCT FROM prev."${e}" 
                              THEN curr."${e}"
                              ELSE NULL${t===`USER-DEFINED`?`::${n}`:``}
                              END AS "${e}"`).join(`,
`)},
                      ARRAY(SELECT unnest FROM unnest(ARRAY[${d.filter(({column_name:e})=>e!==c).map(({column_name:e})=>`CASE
                              WHEN curr."${e}" IS DISTINCT FROM prev."${e}" 
                              THEN '${e}' 
                              ELSE NULL 
                              END`).join(`, `)}]) WHERE unnest IS NOT NULL) AS __changed_columns__
                  FROM curr
                  INNER JOIN prev ON curr.${c} = prev.${c}
                  WHERE NOT (curr IS NOT DISTINCT FROM prev)
                )
              SELECT * FROM data_diff;
            `)}v=await Promise.all(l.map(e=>n.listen(`"table_change__${e.schema_oid}__${e.table_oid}"`,async()=>{b()})))})};await y();let b=r(async()=>{if(p.length===0&&_)return;let t=!1;for(let n=0;n<5;n++)try{await e.transaction(async e=>{await e.exec(`
                INSERT INTO live_query_${m}_state${g} 
                  SELECT * FROM live_query_${m}_view;
              `),_=await e.query(`EXECUTE live_query_${m}_diff${g};`),g=g===1?2:1,await e.exec(`
                TRUNCATE live_query_${m}_state${g};
              `)});break}catch(e){if(e.message===`relation "live_query_${m}_state${g}" does not exist`){t=!0,await y();continue}else throw e}l(p,[...t?[{__op__:`RESET`}]:[],..._.rows])}),x=e=>{if(h)throw Error(`Live query is no longer active and cannot be subscribed to`);p.push(e)},S=async t=>{p=t?p.filter(e=>e!==e):[],p.length===0&&!h&&(h=!0,await e.transaction(async e=>{await Promise.all(v.map(t=>t(e))),await e.exec(`
              DROP VIEW IF EXISTS live_query_${m}_view;
              DROP TABLE IF EXISTS live_query_${m}_state1;
              DROP TABLE IF EXISTS live_query_${m}_state2;
              DEALLOCATE live_query_${m}_diff1;
              DEALLOCATE live_query_${m}_diff2;
            `)}))};return f?.aborted?await S():f?.addEventListener(`abort`,()=>{S()},{once:!0}),await b(),{fields:_.fields.filter(e=>![`__after__`,`__op__`,`__changed_columns__`].includes(e.name)),initialChanges:_.rows,subscribe:x,unsubscribe:S,refresh:b}},async incrementalQuery(e,t,n,r){let i;if(typeof e!=`string`&&(i=e.signal,t=e.params,n=e.key,r=e.callback,e=e.query),!n)throw Error(`key is required for incremental queries`);let a=r?[r]:[],o=new Map,s=new Map,l=[],u=!0,{fields:f,unsubscribe:p,refresh:m}=await d.changes(e,t,n,e=>{for(let t of e){let{__op__:e,__changed_columns__:r,...i}=t;switch(e){case`RESET`:o.clear(),s.clear();break;case`INSERT`:o.set(i[n],i),s.set(i.__after__,i[n]);break;case`DELETE`:{let e=o.get(i[n]);o.delete(i[n]),e.__after__!==null&&s.delete(e.__after__);break}case`UPDATE`:{let e={...o.get(i[n])??{}};for(let t of r)e[t]=i[t],t===`__after__`&&s.set(i.__after__,i[n]);o.set(i[n],e);break}}}let t=[],r=null;for(let e=0;e<o.size;e++){let e=s.get(r),n=o.get(e);if(!n)break;let i={...n};delete i.__after__,t.push(i),r=e}l=t,u||c(a,{rows:t,fields:f})});u=!1,c(a,{rows:l,fields:f});let h=e=>{a.push(e)},g=async e=>{a=e?a.filter(e=>e!==e):[],a.length===0&&await p()};return i?.aborted?await g():i?.addEventListener(`abort`,()=>{g()},{once:!0}),{initialResults:{rows:l,fields:f},subscribe:h,unsubscribe:g,refresh:m}}};return{namespaceObj:d}}};async function o(e,t){return(await e.query(`
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
    `,[t])).rows.map(e=>({table_name:e.table_name,schema_name:e.schema_name,table_oid:e.table_oid,schema_oid:e.schema_oid}))}async function s(e,t,n){let r=t.filter(e=>!n.has(`${e.schema_oid}_${e.table_oid}`)).map(e=>`
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
`);r.trim()!==``&&await e.exec(r),t.map(e=>n.add(`${e.schema_oid}_${e.table_oid}`))}var c=(e,t)=>{for(let n of e)n(t)},l=(e,t)=>{for(let n of e)n(t)};export{a as live};