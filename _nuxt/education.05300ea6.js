import{_ as v}from"./nuxt-link.6cbcea9a.js";import{_ as x}from"./Cardpro1.7b64d94f.js";import{h as b,q as m,B as g,f as d,a,b as i,w as c,F as k,p as y,i as B,j as E,o as l,d as u,c as w}from"./entry.c20d3a48.js";import{u as C}from"./fetch.096a9900.js";import"./asyncData.de210cf9.js";const N={class:"breadcrumbs",style:{color:"#0d3e6e"}},F=a("h1",null,"Projects",-1),L={id:"card-container"},H={__name:"education",async setup(V){let n,_;const{data:p}=([n,_]=b(()=>C(E().public.serverURL+"/projects","$Wzciag2sJ5")),n=await n,_(),n),s=m(0);m("all");const f=g(()=>{s.value==0;const r=[];for(let t of p.value)s.value>0&&t.price>=s.value||t.areaname!=="Education"&&t.areaname1!=="Education"||r.push(t);return r.slice(0,5)});return(r,t)=>{const o=v,h=x;return l(),d("main",null,[a("nav",N,[a("ul",null,[a("li",null,[i(o,{to:"/"},{default:c(()=>[u("Home")]),_:1})]),a("li",null,[i(o,{to:"/areas"},{default:c(()=>[u("Areas")]),_:1})]),a("li",null,[i(o,{to:""},{default:c(()=>[u("Education")]),_:1})])])]),F,a("div",L,[(l(!0),d(k,null,y(B(f),e=>(l(),w(h,{key:e.id,name:e.name,areaname:e.areaname,areaname1:e.areaname1,price:e.price,subtitle:e.subtitle,image:e.image,link:"/projects/"+e.id},null,8,["name","areaname","areaname1","price","subtitle","image","link"]))),128))])])}}};export{H as default};