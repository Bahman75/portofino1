import{_ as v}from"./nuxt-link.c384d7a6.js";import{_ as x}from"./Cardpro1.dad9240a.js";import{h as b,q as m,z as g,f as d,a,b as i,w as c,F as k,p as y,i as E,j as w,o as l,d as u,c as B}from"./entry.b4fef8ca.js";import{u as C}from"./fetch.6adb4d25.js";import"./asyncData.d4d887cc.js";const N={class:"breadcrumbs",style:{color:"#0d3e6e"}},F=a("h1",null,"Projects",-1),L={id:"card-container"},H={__name:"education",async setup(V){let n,_;const{data:p}=([n,_]=b(()=>C(w().public.serverURL+"/projects","$Wzciag2sJ5")),n=await n,_(),n),r=m(0);m("all");const f=g(()=>{r.value==0;const s=[];for(let t of p.value)r.value>0&&t.price>=r.value||t.areaname!=="Education"&&t.areaname1!=="Education"||s.push(t);return s});return(s,t)=>{const o=v,h=x;return l(),d("main",null,[a("nav",N,[a("ul",null,[a("li",null,[i(o,{to:"/"},{default:c(()=>[u("Home")]),_:1})]),a("li",null,[i(o,{to:"/areas"},{default:c(()=>[u("Areas")]),_:1})]),a("li",null,[i(o,{to:""},{default:c(()=>[u("Education")]),_:1})])])]),F,a("div",L,[(l(!0),d(k,null,y(E(f),e=>(l(),B(h,{key:e.id,name:e.name,areaname:e.areaname,areaname1:e.areaname1,price:e.price,subtitle:e.subtitle,image:e.image,link:"/projects/"+e.id},null,8,["name","areaname","areaname1","price","subtitle","image","link"]))),128))])])}}};export{H as default};