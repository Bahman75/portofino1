import{_ as v}from"./nuxt-link.c384d7a6.js";import{_ as x}from"./Cardpro1.dad9240a.js";import{h as b,q as m,z as k,f as d,a,b as o,w as i,F as g,p as y,i as H,j as w,o as c,d as u,c as B}from"./entry.b4fef8ca.js";import{u as C}from"./fetch.6adb4d25.js";import"./asyncData.d4d887cc.js";const L={class:"breadcrumbs",style:{color:"#0d3e6e"}},N=a("h1",null,"Projects",-1),A={id:"card-container"},z={__name:"health",async setup(F){let n,_;const{data:p}=([n,_]=b(()=>C(w().public.serverURL+"/projects","$qAMUi0sLZr")),n=await n,_(),n),r=m(0);m("all");const f=k(()=>{r.value==0;const s=[];for(let t of p.value)r.value>0&&t.price>=r.value||t.areaname!=="Health"&&t.areaname1!=="Health"||s.push(t);return s});return(s,t)=>{const l=v,h=x;return c(),d("main",null,[a("nav",L,[a("ul",null,[a("li",null,[o(l,{to:"/"},{default:i(()=>[u("Home")]),_:1})]),a("li",null,[o(l,{to:"/areas"},{default:i(()=>[u("Areas")]),_:1})]),a("li",null,[o(l,{to:""},{default:i(()=>[u("Health")]),_:1})])])]),N,a("div",A,[(c(!0),d(g,null,y(H(f),e=>(c(),B(h,{key:e.id,name:e.name,areaname:e.areaname,areaname1:e.areaname1,price:e.price,subtitle:e.subtitle,image:e.image,link:"/projects/"+e.id},null,8,["name","areaname","areaname1","price","subtitle","image","link"]))),128))])])}}};export{z as default};