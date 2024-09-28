import{a4 as y,D as R,C as U,v as N,t as I,F as P}from"./element-plus.9458fb52.js";import{d as S,a as T,b as q,c as M}from"./department.f8301108.js";import{P as J}from"./index.9f63869e.js";import{u as K}from"./useDictOptions.eb4ce0b3.js";import{d as O,s as f,r as $,b as j,_ as z,o as _,c as G,T as t,K as n,u as l,J as H,P as L,a as F}from"./@vue.7946e41b.js";const Q={class:"edit-popup"},W=F("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),oe=O({__name:"edit",emits:["success","close"],setup(X,{expose:D,emit:B}){const p=B,c=f(),r=f(),i=$("add"),b=j(()=>i.value=="edit"?"\u7F16\u8F91\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8"),u=z({id:"",pid:"",name:"",leader:"",mobile:"",sort:0,status:1}),V={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8",trigger:["change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",trigger:["blur"]}],mobile:[{validator:(o,e,d)=>{if(e){const s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;if(console.log(s.test(e)),s.test(e))d();else return d(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"))}else return d()},trigger:["blur"]}]},{optionsData:v}=K({dept:{api:S}}),A=async()=>{var o,e;await((o=c.value)==null?void 0:o.validate()),i.value=="edit"?await T(u):await q(u),(e=r.value)==null||e.close(),p("success")},g=(o="add")=>{var e;i.value=o,(e=r.value)==null||e.open()},E=o=>{for(const e in u)o[e]!=null&&o[e]!=null&&(u[e]=o[e])},w=async o=>{const e=await M({id:o.id});E(e)},x=()=>{p("close")};return D({open:g,setFormData:E,getDetail:w}),(o,e)=>{const d=y,s=R,m=U,C=N,h=I,k=P;return _(),G("div",Q,[t(J,{ref_key:"popupRef",ref:r,title:l(b),async:!0,width:"550px",onConfirm:A,onClose:x},{default:n(()=>[t(k,{ref_key:"formRef",ref:c,model:l(u),"label-width":"84px",rules:V},{default:n(()=>[l(u).pid!==0?(_(),H(s,{key:0,label:"\u4E0A\u7EA7\u90E8\u95E8",prop:"pid"},{default:n(()=>[t(d,{class:"flex-1",modelValue:l(u).pid,"onUpdate:modelValue":e[0]||(e[0]=a=>l(u).pid=a),data:l(v).dept,clearable:"","node-key":"id",props:{value:"id",label:"name"},"check-strictly":"","default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"},null,8,["modelValue","data"])]),_:1})):L("",!0),t(s,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:n(()=>[t(m,{modelValue:l(u).name,"onUpdate:modelValue":e[1]||(e[1]=a=>l(u).name=a),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",maxlength:100},null,8,["modelValue"])]),_:1}),t(s,{label:"\u8D1F\u8D23\u4EBA",prop:"leader"},{default:n(()=>[t(m,{modelValue:l(u).leader,"onUpdate:modelValue":e[2]||(e[2]=a=>l(u).leader=a),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u59D3\u540D",maxlength:30},null,8,["modelValue"])]),_:1}),t(s,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"mobile"},{default:n(()=>[t(m,{modelValue:l(u).mobile,"onUpdate:modelValue":e[3]||(e[3]=a=>l(u).mobile=a),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD"},null,8,["modelValue"])]),_:1}),t(s,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[F("div",null,[t(C,{modelValue:l(u).sort,"onUpdate:modelValue":e[4]||(e[4]=a=>l(u).sort=a),min:0,max:9999},null,8,["modelValue"]),W])]),_:1}),t(s,{label:"\u90E8\u95E8\u72B6\u6001"},{default:n(()=>[t(h,{modelValue:l(u).status,"onUpdate:modelValue":e[5]||(e[5]=a=>l(u).status=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{oe as _};
