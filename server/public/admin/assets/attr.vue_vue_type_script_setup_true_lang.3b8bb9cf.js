import{J as R,K as S,D as T,C as $,t as M,w as N,F as z}from"./element-plus.9458fb52.js";import{_ as I}from"./index.3b915137.js";import{f as b,b as J}from"./index.d9c09296.js";import{_ as K}from"./picker.339dcc7b.js";import{_ as j}from"./picker.e7e8a72a.js";import{g as A}from"./@vueuse.927bd09a.js";import{D as G}from"./vuedraggable.0170ba82.js";import{d as Q,o as g,c as q,T as e,K as o,u as _,j as L,Q as m,a as s,J as O}from"./@vue.7946e41b.js";const P={class:"flex-1"},W=s("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*285px",-1),X={class:"bg-fill-light w-full p-4 mt-4"},Y={class:"flex-1 flex items-center"},Z={class:"drag-move cursor-move ml-auto"},c=999,se=Q({__name:"attr",props:{isHidden:{type:Boolean},content:{}},emits:["update:isHidden"],setup(v,{emit:h}){const r=v,f=h,p=A(r,"isHidden",f),d=A(r,"content",f),B=()=>{var n;((n=d.value.data)==null?void 0:n.length)<c?d.value.data.push({image:"",desc:"",title:"",link:{},isShow:!0}):b.msgError(`\u6700\u591A\u6DFB\u52A0${c}\u4E2A`)},k=n=>{var u;if(((u=d.value.data)==null?void 0:u.length)<=1)return b.msgError("\u6700\u5C11\u4FDD\u7559\u4E00\u4E2A");d.value.data.splice(n,1)};return(n,u)=>{const i=R,E=S,t=T,w=j,V=$,x=K,C=M,U=J,D=I,y=N,H=z;return g(),q("div",null,[e(H,{"label-width":"70px"},{default:o(()=>[e(t,{label:"\u662F\u5426\u663E\u793A"},{default:o(()=>[e(E,{modelValue:_(p),"onUpdate:modelValue":u[0]||(u[0]=l=>L(p)?p.value=l:null)},{default:o(()=>[e(i,{label:!1},{default:o(()=>[m("\u663E\u793A")]),_:1}),e(i,{label:!0},{default:o(()=>[m("\u4E0D\u663E\u793A")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"\u663E\u793A\u6837\u5F0F"},{default:o(()=>[e(E,{modelValue:n.content.showType,"onUpdate:modelValue":u[1]||(u[1]=l=>n.content.showType=l)},{default:o(()=>[e(i,{label:2},{default:o(()=>[m("\u4E00\u884C2\u4E2A")]),_:1}),e(i,{label:3},{default:o(()=>[m("\u4E00\u884C3\u4E2A")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(t,{label:"\u5E7F\u544A\u8BBE\u7F6E"},{default:o(()=>[s("div",P,[W,e(_(G),{class:"draggable",modelValue:_(d).data,"onUpdate:modelValue":u[2]||(u[2]=l=>_(d).data=l),animation:"300",handle:".drag-move"},{item:o(({element:l,index:F})=>[(g(),O(D,{key:F,onClose:a=>k(F),class:"max-w-[400px]"},{default:o(()=>[s("div",X,[e(t,{label:"\u5E7F\u544A\u5C01\u9762"},{default:o(()=>[s("div",null,[e(w,{modelValue:l.image,"onUpdate:modelValue":a=>l.image=a,"upload-class":"bg-body",size:"100px","exclude-domain":!0},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024),e(t,{label:"\u5E7F\u544A\u6807\u9898",class:"mt-[18px]"},{default:o(()=>[e(V,{modelValue:l.title,"onUpdate:modelValue":a=>l.title=a,placeholder:"\u8BF7\u8F93\u5165\u5E7F\u544A\u6807\u9898"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"\u5E7F\u544A\u63CF\u8FF0",class:"mt-[18px]"},{default:o(()=>[e(V,{modelValue:l.desc,"onUpdate:modelValue":a=>l.desc=a,placeholder:"\u8BF7\u8F93\u5165\u5E7F\u544A\u63CF\u8FF0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{label:"\u94FE\u63A5\u5730\u5740",class:"mt-[18px]"},{default:o(()=>[e(x,{type:"mobile",modelValue:l.link,"onUpdate:modelValue":a=>l.link=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(t,{class:"mt-[18px]",label:"\u662F\u5426\u663E\u793A"},{default:o(()=>[s("div",Y,[e(C,{"active-value":!0,"inactive-value":!1,modelValue:l.isShow,"onUpdate:modelValue":a=>l.isShow=a},null,8,["modelValue","onUpdate:modelValue"]),s("div",Z,[e(U,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"])])]),_:1}),e(t,null,{default:o(()=>{var l;return[e(y,{disabled:((l=n.content.data)==null?void 0:l.length)>=c,type:"primary",onClick:B},{default:o(()=>[m(" \u6DFB\u52A0 ")]),_:1},8,["disabled"])]}),_:1})]),_:1})])}}});export{se as _};
