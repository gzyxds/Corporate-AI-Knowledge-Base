import{P as k}from"./index.9f63869e.js";import{D as x,C as A,t as h,F as G}from"./element-plus.9458fb52.js";import{_ as P}from"./picker.e7e8a72a.js";import{r as n}from"./index.d9c09296.js";import{d as R,s as c,r as f,o as L,J as q,K as i,T as s,u,a as r}from"./@vue.7946e41b.js";function O(t){return n.get({url:"/digital.preposition/lists",params:t})}function U(t){return n.post({url:"/digital.preposition/add",params:t})}function I(t){return n.post({url:"/digital.preposition/edit",params:t})}function T(t){return n.post({url:"/digital.preposition/del",params:t})}function z(t){return n.post({url:"/digital.preposition/batchDel",params:t})}function H(t){return n.post({url:"/digital.preposition/status",params:t})}const N=r("div",{class:"form-tips"},"\u6279\u91CF\u6DFB\u52A0\u4E00\u6B21\u6700\u591A\u652F\u630110\u5F20",-1),S=r("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D\u9762",-1),Q=R({__name:"addPop",emits:["success","close"],setup(t,{expose:_,emit:v}){const F=v,g=c(),p=f(!1),d=c(),e=f({id:"",status:1,sort:"0",url:[]}),D={music:[{required:!0}],cover:[{required:!0}]},V=async l=>{d.value.open(),l&&(Object.keys(e.value).map(o=>{e.value[o]=l[o]}),e.value.id=l.id)},E=async()=>{try{p.value=!0,e.value.id?await I({...e.value}):await U({...e.value}),F("success"),d.value.close()}catch{p.value=!1}};return _({open:V}),(l,o)=>{const b=P,m=x,y=A,B=h,C=G,w=k;return L(),q(w,{ref_key:"popRef",ref:d,title:u(e).id?"\u7F16\u8F91\u524D\u666F":"\u65B0\u589E\u524D\u666F",width:"600px",async:"",onConfirm:E,"confirm-loading":u(p),onClose:o[3]||(o[3]=a=>l.$emit("close"))},{default:i(()=>[s(C,{"label-width":"90px",ref_key:"formRef",ref:g,model:u(e),rules:D},{default:i(()=>[s(m,{label:"\u524D\u666F\u56FE",prop:"cover"},{default:i(()=>[r("div",null,[s(b,{limit:u(e).id?1:10,modelValue:u(e).url,"onUpdate:modelValue":o[0]||(o[0]=a=>u(e).url=a),data:{use_type:2}},null,8,["limit","modelValue"]),N])]),_:1}),s(m,{label:"\u6392\u5E8F"},{default:i(()=>[r("div",null,[s(y,{modelValue:u(e).sort,"onUpdate:modelValue":o[1]||(o[1]=a=>u(e).sort=a),class:"w-[320px]"},null,8,["modelValue"]),S])]),_:1}),s(m,{label:"\u72B6\u6001"},{default:i(()=>[s(B,{modelValue:u(e).status,"onUpdate:modelValue":o[2]||(o[2]=a=>u(e).status=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","confirm-loading"])}}});export{Q as _,z as b,H as c,T as d,O as g};
