import{g as C}from"./entry.df16adda.js";import{E,a as h}from"./el-form-item.f85b8636.js";/* empty css                */import{_ as y}from"./index.34adc8c7.js";import{k as I,s as f,r as V,f as b,I as F,J as g,a2 as n,a0 as s,u as o}from"./swiper-vue.397ea2eb.js";const P=I({__name:"create-api",emits:["confirm"],setup(B,{expose:i,emit:c}){const u=c,l=f(),r=f(),t=V({name:""}),_=b({name:[{required:!0,message:"请输入接口名称"}]}),d=()=>{var e;(e=r.value)==null||e.open()},v=()=>{var e;(e=r.value)==null||e.close()},x=async()=>{var e;await((e=l.value)==null?void 0:e.validate()),u("confirm",t)};return i({open:d,close:v}),(e,a)=>{const R=C,w=E,k=h;return F(),g("div",null,[n(y,{ref_key:"popupRef",ref:r,title:"创建API",async:!0,width:"550px",onConfirm:x,onClose:a[1]||(a[1]=m=>{var p;return(p=o(l))==null?void 0:p.resetFields()})},{default:s(()=>[n(k,{ref_key:"formRef",ref:l,model:o(t),rules:o(_),"label-width":"84px"},{default:s(()=>[n(w,{label:"接口名称",prop:"name"},{default:s(()=>[n(R,{modelValue:o(t).name,"onUpdate:modelValue":a[0]||(a[0]=m=>o(t).name=m),placeholder:"接口名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},512)])}}});export{P as _};
