import{i as F,g as b,E as B,f as v}from"./entry.df16adda.js";import{E as I,a as D}from"./el-form-item.f85b8636.js";import{_ as U}from"./index.vue.403e5f16.js";/* empty css                */import{u as q}from"./useLockFn.a803ddfa.js";import{w as L}from"./my_database.5da0ead6.js";import{k as N,a as $,I as i,J as c,K as r,a2 as o,a0 as s,u,e as z,ae as V,Z as H,ap as J,a4 as k}from"./swiper-vue.397ea2eb.js";import"./_baseClone.000a3762.js";import"./_getTag.af7a9d71.js";import"./_plugin-vue_export-helper.c27b6911.js";const K={class:"web-page"},M={class:"py-4"},O={class:"flex-1"},R={class:"mb-2 text-tx-primary font-medium text-lg"},oe=N({__name:"web-page",props:{modelValue:{}},emits:["update:modelValue"],setup(y,{emit:x}){const l=F(y,"modelValue",x),t=$(""),E=async n=>{await v.confirm(`确定删除：${n.source}？`);const e=l.value.indexOf(n);e!==-1&&l.value.splice(e,1)},{lockFn:w,isLock:g}=q(async()=>{if(!t.value)return v.msgError("请输入网页链接");const n=await L({url:t.value.split(`
`).filter(Boolean)});l.value=[...l.value,...n.map(e=>({question:e.content,answer:"",source:e.url}))],t.value=""});return(n,e)=>{const m=b,p=I,d=B,h=D,C=U;return i(),c("div",K,[r("div",M,[o(h,null,{default:s(()=>[o(p,null,{default:s(()=>[r("div",O,[o(m,{modelValue:u(t),"onUpdate:modelValue":e[0]||(e[0]=a=>z(t)?t.value=a:null),placeholder:"请输入要解析的网页链接，添加多个请按回车键分隔",type:"textarea",resize:"none",rows:6},null,8,["modelValue"])])]),_:1}),o(p,null,{default:s(()=>[o(d,{type:"primary",loading:u(g),onClick:u(w)},{default:s(()=>[V(" 解析 ")]),_:1},8,["loading","onClick"])]),_:1})]),_:1}),r("div",null,[(i(!0),c(H,null,J(u(l),(a,_)=>(i(),c("div",{key:_,class:"mb-4"},[r("div",R,[V(" #"+k(_+1)+" "+k(a.source)+" ",1),o(d,{link:"",type:"primary"},{default:s(()=>[o(C,{name:"el-icon-Delete",onClick:f=>E(a)},null,8,["onClick"])]),_:2},1024)]),o(m,{modelValue:a.question,"onUpdate:modelValue":f=>a.question=f,placeholder:"文件内容，空内容会自动省略",type:"textarea",resize:"none",rows:15},null,8,["modelValue","onUpdate:modelValue"])]))),128))])])])}}});export{oe as default};
