import{_ as v}from"./nuxt-link.c384d7a6.js";import{_ as g}from"./Cardpro1.dad9240a.js";import{h as x,q as m,z as b,f as d,a,b as l,w as i,F as k,p as y,i as w,j as B,o as c,d as u,c as C}from"./entry.b4fef8ca.js";import{u as G}from"./fetch.6adb4d25.js";import"./asyncData.d4d887cc.js";const N={class:"breadcrumbs",style:{color:"#0d3e6e"}},F=a("h1",null,"Projects",-1),L={id:"card-container"},E={__name:"green",async setup(V){let n,_;const{data:p}=([n,_]=x(()=>G(B().public.serverURL+"/projects","$egla0mfpYa")),n=await n,_(),n),r=m(0);m("all");const f=b(()=>{r.value==0;const s=[];for(let t of p.value)r.value>0&&t.price>=r.value||t.areaname!=="Green"&&t.areaname1!=="Green"||s.push(t);return s});return(s,t)=>{const o=v,h=g;return c(),d("main",null,[a("nav",N,[a("ul",null,[a("li",null,[l(o,{to:"/"},{default:i(()=>[u("Home")]),_:1})]),a("li",null,[l(o,{to:"/areas"},{default:i(()=>[u("Areas")]),_:1})]),a("li",null,[l(o,{to:""},{default:i(()=>[u("Green")]),_:1})])])]),F,a("div",L,[(c(!0),d(k,null,y(w(f),e=>(c(),C(h,{key:e.id,name:e.name,areaname:e.areaname,areaname1:e.areaname1,price:e.price,subtitle:e.subtitle,image:e.image,link:"/projects/"+e.id},null,8,["name","areaname","areaname1","price","subtitle","image","link"]))),128))])])}}};export{E as default};
