import{d as a,E as s,r,_ as c,a as d,b as m,c as l,e as p}from"./desk-beccae6c-bb673de5.js";const u=a(e=>{const{name:t,title:o,icon:n,...i}=e||{};return{name:"@sanity/vision",tools:[{name:t||"vision",title:o||"Vision",icon:n||s,component:r.lazy(()=>c(()=>import("./SanityVision-8a519187-7f0e4b13.js"),["static/SanityVision-8a519187-7f0e4b13.js","static/desk-beccae6c-bb673de5.js","static/index-5698cb12.js"])),options:i,router:d.create("/*")}]}}),f={name:"author",title:"Author",type:"document",fields:[{name:"name",title:"Name",type:"string"}]},g=[f],y=m({name:"default",title:"blog-app-bg-10-01-2023",projectId:"imidjdk8",dataset:"production",plugins:[l(),u()],schema:{types:g}});p(document.getElementById("sanity"),y,{reactStrictMode:!1,basePath:"/"});