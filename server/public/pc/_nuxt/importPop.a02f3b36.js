import{a as B,b as C}from"./el-select.b349f79d.js";import{E as F,a as S}from"./el-form-item.f85b8636.js";import{_ as L}from"./index.34adc8c7.js";import{D as _,h as d}from"./entry.df16adda.js";import"./el-tag.7a8069da.js";import"./el-scrollbar.f4d658ff.js";import"./el-popper.89e34564.js";/* empty css                */import{k as P,s as u,r as f,I as i,J as b,a2 as l,a0 as r,K as c,Z as A,ap as K,$ as N,u as n,an as q,ao as J}from"./swiper-vue.397ea2eb.js";import{_ as M}from"./_plugin-vue_export-helper.c27b6911.js";import"./strings.294b5976.js";import"./isEqual.b93d80e7.js";import"./_getTag.af7a9d71.js";import"./debounce.2369182b.js";import"./_baseClone.000a3762.js";import"./el-dialog.64289190.js";import"./use-dialog.825901d5.js";import"./refs.2a024717.js";const O=t=>(q("data-v-2a604598"),t=t(),J(),t),Q={class:"flex-1"},T=O(()=>c("div",{class:"form-tips"},"支持导出至多个知识库",-1)),U=P({__name:"importPop",props:{count:{},kbList:{}},emits:["confirm"],setup(t,{expose:v,emit:k}){const y=k,p=u(),a=f({kb_ids:[]}),$=f({kb_ids:[{required:!0,message:"请选择知识库",trigger:"change"}]}),m=u(),h=async()=>{var e;m.value.open(),(e=p.value)==null||e.resetFields()},w=async()=>{m.value.close()},E=async()=>{var e;await((e=p.value)==null?void 0:e.validate()),y("confirm",a)};return v({open:h,close:w}),(e,s)=>{const I=C,g=B,x=F,D=S,R=L;return i(),b("div",null,[l(R,{ref_key:"popRef",ref:m,title:`导入到数据${e.count?`（可导出${e.count}条数据）`:""}`,width:"600px",async:"",onConfirm:E,onClose:s[1]||(s[1]=o=>e.$emit("close"))},{default:r(()=>[c("div",null,[l(D,{ref_key:"formRef",ref:p,"label-width":"100px",rules:$,model:a},{default:r(()=>[l(x,{label:"导入至",prop:"kb_ids"},{default:r(()=>[c("div",Q,[l(g,{modelValue:a.kb_ids,"onUpdate:modelValue":s[0]||(s[0]=o=>a.kb_ids=o),class:"w-full",multiple:"",clearable:"",filterable:""},{default:r(()=>[(i(!0),b(A,null,K(e.kbList,(o,V)=>(i(),N(I,{key:V,label:`${o.name}${o.type==1?`-${n(_)[n(d).Document]}`:`-${n(_)[n(d).QAndA]}`}`,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),T])]),_:1})]),_:1},8,["rules","model"])])]),_:1},8,["title"])])}}});const ie=M(U,[["__scopeId","data-v-2a604598"]]);export{ie as default};
