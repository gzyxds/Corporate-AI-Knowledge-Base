import{J as C,K as S,D as v,C as I,F as K}from"./element-plus.9458fb52.js";import{c as T,d as w}from"./message.d9aa54f6.js";import{P as x}from"./index.9f63869e.js";import{d as A,s as E,_ as U,o as d,c as Y,T as l,K as a,u as t,a as q,R as N,J as m,P as _,Q as f}from"./@vue.7946e41b.js";const J={class:"edit-popup"},H=A({__name:"edit",emits:["success"],setup(h,{expose:F,emit:y}){const g=y,n=E(),i=E(),e=U({name:"",type:"",sign:"",app_key:"",app_id:"",secret_key:"",secret_id:"",status:0}),V={sign:[{required:!0,message:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u7B7E\u540D",trigger:"blur"}],app_id:[{required:!0,message:"\u8BF7\u8F93\u5165APP_ID",trigger:"blur"}],app_key:[{required:!0,message:"\u8BF7\u8F93\u5165APP_KEY",trigger:"blur"}],secret_key:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_KEY",trigger:"blur"}],secret_id:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_ID",trigger:"blur"}]},B=async()=>{var o,u;await((o=n.value)==null?void 0:o.validate()),await T(e),(u=i.value)==null||u.close(),g("success")},D=async()=>{const o=await w({type:e.type});for(const u in o)e[u]=o[u]},k=o=>{var u;e.type=o,(u=i.value)==null||u.open(),D()},b=()=>{var o;(o=n.value)==null||o.resetFields()};return F({open:k}),(o,u)=>{const r=v,p=I,c=C,P=S,R=K;return d(),Y("div",J,[l(x,{ref_key:"popupRef",ref:i,title:"\u8BBE\u7F6E\u77ED\u4FE1",async:!0,width:"550px",onConfirm:B,onClose:b},{default:a(()=>[l(R,{ref_key:"formRef",ref:n,model:t(e),"label-width":"120px",rules:V},{default:a(()=>[l(r,{label:"\u77ED\u4FE1\u6E20\u9053"},{default:a(()=>[q("div",null,N(t(e).name),1)]),_:1}),l(r,{label:"\u77ED\u4FE1\u7B7E\u540D",prop:"sign"},{default:a(()=>[l(p,{modelValue:t(e).sign,"onUpdate:modelValue":u[0]||(u[0]=s=>t(e).sign=s),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u7B7E\u540D"},null,8,["modelValue"])]),_:1}),t(e).type=="ali"?(d(),m(r,{key:0,label:"APP_KEY",prop:"app_key"},{default:a(()=>[l(p,{modelValue:t(e).app_key,"onUpdate:modelValue":u[1]||(u[1]=s=>t(e).app_key=s),placeholder:"\u8BF7\u8F93\u5165APP_KEY"},null,8,["modelValue"])]),_:1})):_("",!0),t(e).type=="tencent"?(d(),m(r,{key:1,label:"APP_ID",prop:"app_id"},{default:a(()=>[l(p,{modelValue:t(e).app_id,"onUpdate:modelValue":u[2]||(u[2]=s=>t(e).app_id=s),placeholder:"\u8BF7\u8F93\u5165APP_ID"},null,8,["modelValue"])]),_:1})):_("",!0),t(e).type=="tencent"?(d(),m(r,{key:2,label:"SECRET_ID",prop:"secret_id"},{default:a(()=>[l(p,{modelValue:t(e).secret_id,"onUpdate:modelValue":u[3]||(u[3]=s=>t(e).secret_id=s),placeholder:"\u8BF7\u8F93\u5165SECRET_ID"},null,8,["modelValue"])]),_:1})):_("",!0),l(r,{label:"SECRET_KEY",prop:"secret_key"},{default:a(()=>[l(p,{modelValue:t(e).secret_key,"onUpdate:modelValue":u[4]||(u[4]=s=>t(e).secret_key=s),placeholder:"\u8BF7\u8F93\u5165SECRET_KEY"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u72B6\u6001",prop:"status"},{default:a(()=>[l(P,{modelValue:t(e).status,"onUpdate:modelValue":u[5]||(u[5]=s=>t(e).status=s)},{default:a(()=>[l(c,{label:0},{default:a(()=>[f("\u5173\u95ED")]),_:1}),l(c,{label:1},{default:a(()=>[f("\u5F00\u542F")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{H as _};
