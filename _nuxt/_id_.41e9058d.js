import{_ as d}from"./nuxt-link.54ac7cb2.js";import{u as p,h as m,f as h,a as e,b as l,w as c,i as t,d as n,t as a,j as f,o as g}from"./entry.5d503a6d.js";import{u as L}from"./fetch.03109756.js";import{n as v}from"./text-functions.1299222f.js";import"./asyncData.6e56455f.js";const w={class:"breadcrumbs",style:{color:"#0d3e6e"}},b={class:"info-group"},x=["src"],y=["src"],N=["src"],j={id:"data-container"},S={class:"data"},F={class:"data"},R={class:"data"},T={class:"data"},V=e("h2",null,"Description",-1),k=["innerHTML"],B={class:"data"},E={__name:"[id]",async setup(C){let o,_;const u=p().params.id,{data:s}=([o,_]=m(()=>L(f().public.serverURL+"/projects/"+u,"$NLv8nVzATR")),o=await o,_(),o);return(r,H)=>{const i=d;return g(),h("main",null,[e("nav",w,[e("ul",null,[e("li",null,[l(i,{to:"/"},{default:c(()=>[n("Home")]),_:1})]),e("li",null,[l(i,{to:"/projects"},{default:c(()=>[n("Projects")]),_:1})]),e("li",null,[l(i,{to:""},{default:c(()=>[n("Details")]),_:1})])])]),e("div",b,[e("img",{id:"main-img3",src:t(s).image},null,8,x),e("img",{id:"main-img3",src:t(s).image1},null,8,y),e("img",{id:"main-img3",src:t(s).image2},null,8,N)]),e("div",j,[e("p",S,[n("Name: "),e("span",null,a(t(s).name),1)]),e("p",F,[n("Subtitle: "),e("span",null,a(t(s).subtitle),1)]),e("p",R,[n("Price: "),e("span",null,a(t(s).price),1)]),e("p",T,[n("Person: "),e("span",null,a(t(s).people),1)])]),V,e("p",{id:"description",innerHTML:("newLineOnFullStop"in r?r.newLineOnFullStop:t(v))(t(s).description)},null,8,k),e("p",B,[n("Área: "),e("span",null,a(t(s).areaname),1),n(),e("span",null,a(t(s).areaname1),1)])])}}};export{E as default};
