import{_ as y}from"./index.vue.79ff26cb.js";import{_ as k}from"./index.vue.7f39d825.js";import{E as x}from"./el-empty.6e01cec2.js";import{E as b}from"./index.17567b0d.js";import{cv as C}from"./entry.dfbfd4fd.js";/* empty css                     */import{m as o}from"./useDrawEffect.259be699.js";import{_ as V}from"./sidbar-item-title.vue.34bde19f.js";import{k as w,b as E,H as l,I as s,X as r,V as B,u as c,S as L,aj as $,U as z,J as n,T as S,Z as j}from"./swiper-vue.2eb6bd20.js";const F={key:0,class:"grid grid-cols-2 gap-4"},I=["onClick"],N={class:"relative rounded-[12px] overflow-hidden cursor-pointer"},A={class:"text-hidden-2 text-center"},K=w({__name:"sd-lora",props:{modelValue:{type:Array,default:[]}},emits:["update:modelValue"],setup(d,{emit:p}){const _=d;E(()=>o,()=>{i("clear")});const{modelValue:e}=C(_,p),i=a=>{a==="clear"?e.value=[]:e.value.includes(o.value[a].model_name)?e.value=e.value.filter(m=>m!==o.value[a].model_name):e.value.push(o.value[a].model_name)};return(a,m)=>{const u=y,f=k,v=x,h=b;return l(),s("div",null,[r(V,{title:"微调模型",tips:"在基础模型上叠加微调模型，让画面更细腻更可控"}),r(h,{"max-height":"360px"},{default:B(()=>[c(o).length>0?(l(),s("div",F,[(l(!0),s(L,null,$(c(o),(t,g)=>(l(),s("div",{key:t.id,class:"flex flex-col gap-2",onClick:D=>i(g)},[n("div",N,[r(u,{class:"rounded-[12px] overflow-hidden w-auto h-full bg-[var(--el-bg-color-page)]",src:t.cover,fit:"cover",ratio:[144,100]},null,8,["src"]),n("div",{class:S(["absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full flex justify-center items-center transition-opacity opacity-0",{"opacity-100":c(e).includes(t.model_name)}])},[r(f,{name:"el-icon-CircleCheckFilled",size:20,color:"#fff"})],2)]),n("div",A,j(t.title||t.model_name),1)],8,I))),128))])):(l(),z(v,{key:1,description:"暂无关联的微调模型","image-size":50}))]),_:1})])}}});export{K as _};
