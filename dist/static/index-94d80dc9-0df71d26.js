import{r as u,p as o,ar as re,an as H,aV as oe,as as ie,cz as ae,H as U,J as ce,N as le,aD as ue,A as C,P as de,cA as me,X as pe,cB as fe,cC as he,cD as ye,aH as ge,bb as Te,O as G,q as x,al as $,ae as Ie,bI as Le,ac as _,ab as O,ao as be,F as Se,b1 as Pe,cE as Re,aj as M,u as Ce,C as ve,G as _e,b5 as w,cF as Ee,cG as De,cH as Oe,cI as je,a$ as N,h as Fe,cJ as xe,ch as we,ci as Ae,b3 as $e,cK as Me,cL as Ne,bM as k,bO as ke,cM as qe,bD as Be,b6 as We,bj as He,cN as Ue,cO as Ge,cP as Ve,bE as Ye}from"./desk-beccae6c-bb673de5.js";import{useDeskTool as ze,useDeskToolSetting as q,Delay as Ke}from"./index-684ea917-af633e41.js";import{P as Xe}from"./PaneItem-880b4872-c4c6b52e.js";import"./index-5698cb12.js";const B=100,A=2e3,V={by:[{field:"_updatedAt",direction:"desc"}]},Je={};function Qe(e,s){return e._id?G(e._id):"item-".concat(s)}function Ze(e){return Oe(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const et=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function tt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=e.match(et);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),c=s[a];return typeof c=="string"?c:null}return t}function nt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function st(e){return e.map(s=>[rt(s),(s.direction||"").toLowerCase()].map(n=>n.trim()).filter(Boolean).join(" ")).join(",")}function rt(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function ot(e,s){const n=e.by.map(t=>{if(t.mapWith)return t;const a=it(s,t.field);return a?ct(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===e.by[a])?e:{...e,by:n}}function it(e,s){const n=pe(s);let t=e;for(const a of n){if(!t)return;if(typeof a=="string"){t=at(t,a);continue}if(!(fe(a)||he(a))||t.jsonType!=="array")return;const[r,i]=t.of||[];if(i||!r)return;if(!ye(r)){t=r;continue}const[f,h]=r.to||[];if(h||!f)return;t=f}return t}function at(e,s){if(!("fields"in e))return;const n=e.fields.find(t=>t.name===s);return n?n.type:void 0}function ct(e,s){let n=e.type;for(;n;){if(n.name===s||!n.type&&n.jsonType===s)return!0;n=n.type}return!1}function lt(e){const{childItemId:s,error:n,filterIsSimpleTypeContraint:t,fullList:a,isActive:c,isLoading:r,items:i,layout:f,onListChange:h,onRetry:l,showIcons:y}=e,S=U(),{collapsed:b}=ge(),{collapsed:L,index:g}=Te(),[P,R]=u.useState(!1);u.useEffect(()=>{if(L)return;const d=setTimeout(()=>{R(!0)},0);return()=>{clearTimeout(d)}},[L]);const T=u.useCallback(d=>{const I=G(d._id),m=s===I;return o(Xe,{icon:y===!1?!1:void 0,id:I,pressed:!c&&m,selected:c&&m,layout:f,schemaType:S.get(d._type),value:d})},[s,c,f,S,y]),p=u.useMemo(()=>{if(!P)return null;if(n)return o(x,{align:"center",direction:"column",height:"fill",justify:"center",children:o($,{width:1,children:C(Ie,{paddingX:4,paddingY:5,space:4,children:[o(Le,{as:"h3",children:"Could not fetch list items"}),C(_,{as:"p",children:["Error: ",o("code",{children:n.message})]}),l&&o(O,{children:o(H,{icon:be,onClick:l,text:"Retry",tone:"primary"})})]})})});if(i===null)return o(x,{align:"center",direction:"column",height:"fill",justify:"center",children:o(Ke,{ms:300,children:C(Se,{children:[o(Pe,{muted:!0}),o(O,{marginTop:3,children:o(_,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!r&&i.length===0)return o(x,{align:"center",direction:"column",height:"fill",justify:"center",children:o($,{width:1,children:o(O,{paddingX:4,paddingY:5,children:o(_,{align:"center",muted:!0,size:2,children:t?"No documents of this type":"No matching documents"})})})});const d=a&&i.length===A;return C(O,{padding:2,children:[i.length>0&&o(Re,{gap:1,getItemKey:Qe,items:i,renderItem:T,onChange:h},"".concat(g,"-").concat(L)),r&&o(M,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:o(_,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&o(M,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:C(_,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",A," documents"]})})]})},[n,t,a,h,r,i,l,T,P,L,g]);return o(Ce,{overflow:b?void 0:"auto",children:p})}const Y=u.memo(e=>{let{index:s,initialValueTemplates:n=[],menuItems:t=[],menuItemGroups:a=[],setLayout:c,setSortOrder:r,title:i}=e;const{features:f}=ze(),h=u.useMemo(()=>({setLayout:l=>{let{layout:y}=l;c(y)},setSortOrder:l=>{r(l)}}),[c,r]);return o(re,{backButton:f.backButton&&s>0&&o(H,{as:oe,"data-as":"a",icon:ie,mode:"bleed"}),title:i,actions:o(ae,{initialValueTemplateItems:n,actionHandlers:h,menuItemGroups:a,menuItems:t})})});Y.displayName="DocumentListPaneHeader";const ut={result:null,error:!1},dt=e=>({result:{documents:e},loading:!1,error:!1}),mt=e=>({result:null,loading:!1,error:e}),pt=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=new je,t=n.next.bind(n);return e.pipe(N(r=>({client:r.client,query:r.query,params:r.params})),Fe(xe),we(1),Ae()).pipe($e(r=>{const i=Me(r.client,r.query,r.params,s).pipe(N(dt),Ne());return k(w({loading:!0}).pipe(ke(400),qe(i)),i)})).pipe(Be(ut),We((r,i)=>He(w(mt(r)),k(Ue(window,"online"),n).pipe(Ge(1),Ve(i)))),Ye((r,i)=>({...r,...i,onRetry:t})))};function ft(e){var s;const{apiVersion:n,filter:t,params:a,sortOrder:c}=e,r=ve(_e),[i,f]=u.useState(!1),h=u.useRef(i),[l,y]=u.useState(null),S=(l==null?void 0:l.error)||null,b=(l==null?void 0:l.loading)||l===null,L=l==null?void 0:l.onRetry,g=(s=l==null?void 0:l.result)==null?void 0:s.documents,P=u.useMemo(()=>g?Ze(g):null,[g]),R=u.useMemo(()=>{const p=c==null?void 0:c.extendedProjection,d=["_id","_type"],I=d.join(","),m=(c==null?void 0:c.by)||[],v=i?A:B,E=m.length>0?m:V.by,D=st(E);if(p){const j=d.concat(p).join(",");return["*[".concat(t,"] {").concat(j,"}"),"order(".concat(D,") [0...").concat(v,"]"),"{".concat(I,"}")].join("|")}return"*[".concat(t,"]|order(").concat(D,")[0...").concat(v,"]{").concat(I,"}")},[t,i,c]),T=u.useCallback(p=>{let{toIndex:d}=p;b||h.current||d>=B/2&&(f(!0),h.current=!0)},[b]);return u.useEffect(()=>{const p=i?m=>Boolean(m.result):()=>!0;y(m=>m?{...m,loading:!0}:null);const I=pt(w({client:r,query:R,params:a}),{apiVersion:n,tag:"desk.document-list"}).pipe(Ee(p)).subscribe(y);return()=>I.unsubscribe()},[n,r,i,R,a]),u.useEffect(()=>{y(null),f(!1),h.current=!1},[t,a,c,n]),{error:S,fullList:i,handleListChange:T,isLoading:b,items:P,onRetry:L}}const W=[];function ht(e){const s=u.useRef(e);return De(s.current,e)||(s.current=e),s.current}const Lt=u.memo(function(s){const{childItemId:n,index:t,isActive:a,isSelected:c,pane:r,paneKey:i}=s,f=U(),{name:h}=ce(),{defaultLayout:l="default",displayOptions:y,initialValueTemplates:S=W,menuItems:b,menuItemGroups:L,options:g,title:P}=r,{apiVersion:R,defaultOrdering:T=W,filter:p}=g,d=ht(g.params||Je),I=r.source,m=u.useMemo(()=>tt(p,d),[p,d]),v=(y==null?void 0:y.showIcons)!==!1,[E,D]=q(m,"layout",l),j=u.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:V,[T]),[F,z]=q(m,"sortOrder",j),K=m&&F?ot(F,f.get(m)):F,X=le(K),J=nt(p),{error:Q,fullList:Z,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=ft({filter:p,params:d,sortOrder:X,apiVersion:R});return o(ue,{name:I||h,children:C(de,{currentMaxWidth:350,id:i,maxWidth:640,minWidth:320,selected:c,children:[me,o(Y,{index:t,initialValueTemplates:S,menuItems:b,menuItemGroups:L,setLayout:D,setSortOrder:z,title:P}),o(lt,{childItemId:n,error:Q,filterIsSimpleTypeContraint:J,fullList:Z,isActive:a,isLoading:te,items:ne,layout:E,onListChange:ee,onRetry:se,showIcons:v})]})})});export{Lt as default};
