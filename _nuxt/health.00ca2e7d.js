import{_ as v}from"./nuxt-link.5b06a851.js";import{_ as x}from"./Cardpro1.7f1a2fb4.js";import{h as b,q as m,z as k,f as d,a as t,b as o,w as i,F as g,p as y,i as H,j as w,o as c,d as u,c as B}from"./entry.f0bb47c3.js";import{u as C}from"./fetch.784c6ff8.js";import"./asyncData.a8da01f8.js";const L={class:"breadcrumbs",style:{color:"#0d3e6e"}},N=t("h1",null,"Projects",-1),A={id:"card-container"},z={__name:"health",async setup(F){let n,_;const{data:p}=([n,_]=b(()=>C(w().public.serverURL+"/projects","$qAMUi0sLZr")),n=await n,_(),n),r=m(0);m("all");const f=k(()=>{r.value==0;const s=[];var l=0;for(let e of p.value)r.value>0&&e.price>=r.value||e.areaname!=="Health"&&e.areaname1!=="Health"&&l<5||(s.push(e),l++);return s});return(s,l)=>{const e=v,h=x;return c(),d("main",null,[t("nav",L,[t("ul",null,[t("li",null,[o(e,{to:"/"},{default:i(()=>[u("Home")]),_:1})]),t("li",null,[o(e,{to:"/areas"},{default:i(()=>[u("Areas")]),_:1})]),t("li",null,[o(e,{to:""},{default:i(()=>[u("Health")]),_:1})])])]),N,t("div",A,[(c(!0),d(g,null,y(H(f),a=>(c(),B(h,{key:a.id,name:a.name,areaname:a.areaname,areaname1:a.areaname1,price:a.price,subtitle:a.subtitle,image:a.image,link:"/projects/"+a.id},null,8,["name","areaname","areaname1","price","subtitle","image","link"]))),128))])])}}};export{z as default};