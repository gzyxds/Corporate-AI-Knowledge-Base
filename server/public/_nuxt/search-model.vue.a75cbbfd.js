import{_ as D}from"./index.vue.7f39d825.js";import{E as L}from"./index.8ad94f19.js";import{E as O}from"./el-segmented.5d590d1a.js";import{E as H}from"./index.828bffd0.js";import{E as R}from"./index.e979a1ab.js";import{cv as j}from"./entry.dfbfd4fd.js";import"./el-tooltip.4ed993c7.js";/* empty css                  *//* empty css                   *//* empty css               */import{u as I}from"./useTemplate.3bd5b482.js";import{_ as F}from"./search-type.vue.91a3ef27.js";import{ModelEnums as v,TypeEnums as f}from"./searchEnums.5f291054.js";import{k as J,a as E,l as T,b as P,H as d,I as y,X as s,V as a,J as l,T as k,Z as b,u as o,U as W,e as h,_ as X,S as V,aj as Y,a7 as Z}from"./swiper-vue.2eb6bd20.js";const q={class:"flex items-center justify-center"},G={class:"ml-1"},K={class:"py-[10px]"},Q={key:1,class:"flex items-center"},ee={class:"flex items-center cursor-pointer"},le={class:"flex text-primary"},oe={class:"px-[6px]"},te={class:"py-[10px]"},se=["onMouseover"],ae={class:"py-[6px]"},ne={class:"border-l border-solid border-br-light ml-[8px] pl-[8px]"},Ee=J({__name:"search-model",props:{type:{},mode:{default:"segmented"},model:{}},emits:["update:model","update:type"],setup(M,{emit:C}){const S=M,[B,x]=I(),{type:c,model:n}=j(S,C),i=E(!1),m=E(""),p=[{label:"基础",value:v.BASE,icon:"local-icon-search_base"},{label:"增强",value:v.ENHANCE,icon:"local-icon-search_copilot",desc:"检索更多网页，提供更全面个性化答案"},{label:"研究",value:v.STUDY,icon:"local-icon-search_research",desc:"结构更细致，内容更深入。自动总结大纲和图谱，答案更清晰"}],U=[{label:"全网",value:f.ALL},{label:"文档",value:f.DOC},{label:"学术",value:f.SCHOLAR}],w=T(()=>U.find(t=>t.value==c.value)||{}),g=T(()=>p.find(t=>t.value==n.value)||{});return P(i,()=>{m.value=""}),(u,t)=>{const _=D,N=L,$=O,z=H,A=R;return d(),y(V,null,[s(o(B),null,{default:a(({item:e,select:r})=>[l("div",q,[l("span",{class:k({"text-primary":!r})},[s(_,{size:"15",name:e.icon},null,8,["name"])],2),l("div",G,b(e.label),1)])]),_:1}),u.mode=="segmented"?(d(),W($,{key:0,modelValue:o(n),"onUpdate:modelValue":t[0]||(t[0]=e=>h(n)?n.value=e:null),options:p,style:X({width:`${p.length*90}px`,"--el-border-radius-base":"10px","--el-segmented-color":"var(--el-text-color-primary)"})},{default:a(({item:e})=>[s(N,{effect:"dark",content:e.desc,disabled:!e.desc,placement:"top"},{default:a(()=>[l("div",K,[s(o(x),{item:e,select:e.value==o(n)},null,8,["item","select"])])]),_:2},1032,["content","disabled"])]),_:1},8,["modelValue","style"])):(d(),y("div",Q,[s(z,{placement:"bottom",trigger:"click",width:120,"popper-style":{minWidth:"120px",padding:0},visible:o(i),"onUpdate:visible":t[2]||(t[2]=e=>h(i)?i.value=e:null)},{reference:a(()=>[l("div",ee,[l("span",le,[s(_,{name:o(g).icon},null,8,["name"])]),l("span",oe,b(o(g).label),1),s(_,{name:"el-icon-CaretBottom"})])]),default:a(()=>[l("div",te,[(d(),y(V,null,Y(p,e=>l("div",{key:e.value,class:k({"bg-primary-light-9":o(m)==e.value}),onMouseover:r=>m.value=e.value},[s(F,{model:e.value,type:o(c),"onUpdate:type":[t[1]||(t[1]=r=>h(c)?c.value=r:null),r=>n.value=e.value],trigger:"hover",placement:"right"},{item:a(({icon:r,label:re})=>[l("div",ae,[s(o(x),{class:"px-[10px]",item:e,select:!1},null,8,["item"])])]),_:2},1032,["model","type","onUpdate:type"])],42,se)),64))])]),_:1},8,["visible"]),l("div",ne,[s(A,{type:"primary",size:"small"},{default:a(()=>[Z(b(o(w).label),1)]),_:1})])]))],64)}}});export{Ee as _};
