import{_ as p}from"./index.vue.79ff26cb.js";import{_ as u}from"./index.vue.7f39d825.js";import{cv as f}from"./entry.dfbfd4fd.js";import{_}from"./sidbar-item-title.vue.34bde19f.js";import{k as v,H as a,I as r,X as t,J as o,S as g,aj as h,T as j,u as x,Z as k}from"./swiper-vue.2eb6bd20.js";const y=""+new URL("mj.f72ee634.png",import.meta.url).href,C=""+new URL("nj.f854c607.png",import.meta.url).href,V={class:"grid grid-cols-2 gap-4"},b=["onClick"],w={class:"relative rounded-[12px] overflow-hidden"},I={class:"text-hidden-2 text-center"},U=v({__name:"mj-model",props:{modelValue:{default:""}},emits:["update:modelValue"],setup(l,{emit:n}){const c=l,{modelValue:s}=f(c,n),i=[{value:"mj",title:"真实感强",cover:y},{value:"niji",title:"卡通动漫",cover:C}];return(L,$)=>{const d=p,m=u;return a(),r("div",null,[t(_,{title:"模型选择",required:"",tips:"指定midjourney的渲染模型"}),o("div",V,[(a(),r(g,null,h(i,(e,B)=>o("div",{key:e.cover,class:"flex flex-col gap-2",onClick:M=>s.value=e.value},[o("div",w,[t(d,{class:"rounded-[12px] overflow-hidden bg-[var(--el-bg-color-page)]",src:e.cover,fit:"cover",ratio:[144,100]},null,8,["src"]),o("div",{class:j(["absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center transition-opacity opacity-0",{"opacity-100":e.value===x(s)}])},[t(m,{name:"el-icon-CircleCheckFilled",size:20,color:"#fff"})],2)]),o("div",I,k(e.title),1)],8,b)),64))])])}}});export{U as _};
