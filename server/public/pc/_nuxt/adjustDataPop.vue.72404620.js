import{i as b,g as h}from"./entry.df16adda.js";import{E as v,a as R}from"./el-form-item.f85b8636.js";/* empty css                */import{_ as q}from"./index.34adc8c7.js";import{k as C,s as f,I as E,$ as k,a0 as r,a2 as a,u as s}from"./swiper-vue.397ea2eb.js";const j=C({__name:"adjustDataPop",props:{modelValue:{},title:{},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","confirm"],setup(c,{expose:_,emit:w}){const V=c,d=w,u=f(),m=f(),l=b(V,"modelValue",d),x={question:[{validator(e,o,t,n,i){o?t():t("请输入问题")}}],answer:[{validator(e,o,t,n,i){o?t():t("请输入答案")}}]},y=async()=>{var e;await((e=u.value)==null?void 0:e.validate()),d("confirm")};return _({open:e=>{var o;(o=m.value)==null||o.open()},close:()=>{var e;(e=m.value)==null||e.close()}}),(e,o)=>{const t=h,n=v,i=R;return E(),k(q,{ref_key:"popRef",ref:m,title:e.title,width:"800px","destroy-on-close":!0,async:"",onConfirm:y},{default:r(()=>[a(i,{ref_key:"formRef",ref:u,model:s(l),rules:x,"label-width":"100px",disabled:e.disabled},{default:r(()=>[a(n,{label:"提问问题",prop:"question"},{default:r(()=>[a(t,{modelValue:s(l).question,"onUpdate:modelValue":o[0]||(o[0]=p=>s(l).question=p),placeholder:"请输入问题",type:"textarea",resize:"none",rows:6,maxlength:"600","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1}),a(n,{label:"问题答案",prop:"answer"},{default:r(()=>[a(t,{modelValue:s(l).answer,"onUpdate:modelValue":o[1]||(o[1]=p=>s(l).answer=p),placeholder:"请输入答案",type:"textarea",resize:"none",rows:20,clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","disabled"])]),_:1},8,["title"])}}});export{j as _};
