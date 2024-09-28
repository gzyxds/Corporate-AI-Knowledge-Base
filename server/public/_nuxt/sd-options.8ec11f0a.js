import{_ as y}from"./index.vue.7f39d825.js";import{E as U}from"./index.828bffd0.js";import{E as k}from"./el-slider.211113d2.js";import{a as F,E as z}from"./el-select.b7a2650e.js";import{cv as B,E as C}from"./entry.dfbfd4fd.js";import{E as L,a as O}from"./el-collapse.1527f898.js";/* empty css                  *//* empty css                   */import"./el-input-number.a67590b7.js";import"./el-tooltip.4ed993c7.js";/* empty css               *//* empty css                     */import{w as Q,b as M}from"./useDrawEffect.259be699.js";import{k as N,a as v,E as j,H as d,I as g,X as o,V as a,J as e,u as s,Z as h,S as D,aj as P,e as $,U as H,ag as J,ah as R}from"./swiper-vue.2eb6bd20.js";import{_ as X}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.8ad94f19.js";import"./isUndefined.aa0326a0.js";import"./dropdown.cd5c481a.js";import"./debounce.8cbe4cfc.js";import"./index.17567b0d.js";import"./index.e979a1ab.js";import"./strings.ceb81673.js";import"./isEqual.0df0ab2c.js";import"./_getTag.83294aff.js";import"./_baseIteratee.5e0c38c1.js";import"./index.071e9281.js";import"./castArray.c741e965.js";import"./index.93ec1a3c.js";import"./index.91e71ce7.js";import"./usePaging.b2b97b82.js";import"./usePolling.de4d6c35.js";import"./DrawEnum.ea2da3f6.js";const r=i=>(J("data-v-f7ef8053"),i=i(),R(),i),Z=r(()=>e("div",{class:"flex items-center gap-2"},[e("span",null,"高级参数")],-1)),q={class:"flex flex-col gap-2"},A={class:"flex items-center gap-2"},G=r(()=>e("span",null,"绘画步数",-1)),K={class:"flex items-center cursor-pointer text-[#999999]"},T={class:"flex gap-4 items-center pl-3"},W={class:"flex items-center gap-2"},Y=r(()=>e("span",null,"文本强度",-1)),ee={class:"flex items-center cursor-pointer text-[#999999]"},te={class:"flex gap-4 items-center pl-3"},oe={class:"flex items-center gap-2 mb-2"},se=r(()=>e("span",null,"采样模式",-1)),le={class:"flex items-center cursor-pointer text-[#999999]"},ne={class:"flex gap-4 items-center"},ae={class:"flex items-center gap-2 mb-2"},ie=r(()=>e("span",null,"随机种子",-1)),re={class:"flex items-center cursor-pointer text-[#999999]"},pe={class:"flex gap-4 items-center"},me=N({__name:"sd-options",props:{modelValue:{type:Object,default:{step:"",sampling:"",seed:"",cfg:""}}},emits:["update:modelValue"],setup(i,{emit:x}){const V=i,{modelValue:n}=B(V,x),_=v([]),c=v("1");return j(async()=>{Q().then(u=>{_.value=u})}),(u,l)=>{const p=y,m=U,f=k,w=z,E=F,S=C,I=L,b=O;return d(),g("div",null,[o(b,{modelValue:s(c),"onUpdate:modelValue":l[5]||(l[5]=t=>$(c)?c.value=t:null),class:"complex_params"},{default:a(()=>[o(I,{title:"高级参数",name:"1"},{title:a(()=>[Z]),default:a(()=>[e("div",q,[e("div",null,[e("div",A,[G,o(m,{placement:"right",width:200,"show-arrow":!1,transition:"custom-popover",trigger:"hover",content:"越低：细节简练，耗时更短；越高：细节丰富，耗时变长；注*步数过高可能产生细节扭曲"},{reference:a(()=>[e("div",K,[o(p,{name:"el-icon-QuestionFilled",size:14})])]),_:1})]),e("div",T,[o(f,{modelValue:s(n).step,"onUpdate:modelValue":l[0]||(l[0]=t=>s(n).step=t),step:1,max:150},null,8,["modelValue"]),e("span",null,h(s(n).step),1)])]),e("div",null,[e("div",W,[Y,o(m,{placement:"right","show-arrow":!1,transition:"custom-popover",width:200,trigger:"hover",content:"低：淡化输入的特征，淡化风格；高：强化输入的特征，强化风格；最佳使用区间7-12，推荐不超过15"},{reference:a(()=>[e("div",ee,[o(p,{name:"el-icon-QuestionFilled",size:14})])]),_:1})]),e("div",te,[o(f,{modelValue:s(n).cfg_scale,"onUpdate:modelValue":l[1]||(l[1]=t=>s(n).cfg_scale=t),step:.5,max:30},null,8,["modelValue"]),e("span",null,h(s(n).cfg_scale),1)])]),e("div",null,[e("div",oe,[se,o(m,{placement:"right","show-arrow":!1,transition:"custom-popover",width:200,trigger:"hover",content:"靠前的采样（euler）：适合动漫，细节简练，快速；靠后的采样（DPM）：适合写实，细节丰富，较慢"},{reference:a(()=>[e("div",le,[o(p,{name:"el-icon-QuestionFilled",size:14})])]),_:1})]),e("div",ne,[o(E,{modelValue:s(n).sampler_name,"onUpdate:modelValue":l[2]||(l[2]=t=>s(n).sampler_name=t),placeholder:"请选择采样模式"},{default:a(()=>[(d(!0),g(D,null,P(s(_),t=>(d(),H(w,{key:t.name,label:t.name,value:t.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),e("div",null,[e("div",ae,[ie,o(m,{placement:"right","show-arrow":!1,transition:"custom-popover",width:200,trigger:"hover",content:"每次生成图的初始画布，种子、提示词、参数和模型相同的情况下，可复原绘画结果"},{reference:a(()=>[e("div",re,[o(p,{name:"el-icon-QuestionFilled",size:14})])]),_:1})]),e("div",pe,[o(S,{modelValue:s(n).seed,"onUpdate:modelValue":l[3]||(l[3]=t=>s(n).seed=t),type:"number",min:-1,maxlength:18,onFocus:l[4]||(l[4]=t=>s(M)()),placeholder:"请选择采样模式"},null,8,["modelValue"])])])])]),_:1})]),_:1},8,["modelValue"])])}}});const Je=X(me,[["__scopeId","data-v-f7ef8053"]]);export{Je as default};
