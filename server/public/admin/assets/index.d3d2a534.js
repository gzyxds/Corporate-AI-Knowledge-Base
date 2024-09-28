import{_ as I}from"./index.c3587517.js";import{a3 as N,J as R,K as L,x as S,y as U,L as J,D as K,w as P}from"./element-plus.9458fb52.js";import{h as $,s as j,i as z}from"./model.de461dbd.js";import{_ as G}from"./model-lists.vue_vue_type_script_setup_true_lang.290e8189.js";import{f as Q}from"./index.d9c09296.js";import{d as A,r as F,_ as q,b as H,o as m,c as E,T as a,K as e,u as r,j as O,S as W,a6 as X,J as B,a as v,Q as D,R as Y,P as Z}from"./@vue.7946e41b.js";import"./vue-drag-resize.1871ee6b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./sortablejs.65032496.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const tt=v("div",{class:"form-tips !text-[14px]"},"\u5728\u300CAI\u6A21\u578B\u300D\u9009\u4E2D\u7684\u9ED8\u8BA4AI\u63A5\u53E3",-1),at=A({name:"ModelBilling"}),zt=A({...at,setup(et){const l=F("chat"),n=q([{name:"AI\u5BF9\u8BDD\u6A21\u578B",label:"chat",data:{defaultModel:"",lists:[]}},{name:"\u5411\u91CF\u6A21\u578B",label:"emb",data:{defaultModel:"",lists:[]}}]),i=H(()=>n==null?void 0:n.find(t=>t.label===l.value)),d=F({chat:[],emb:[]}),C=async()=>{const t=await $();d.value.chat=t.chatModels,d.value.emb=t.embModels},g=async()=>{const t=n.find(u=>u.label===l.value);if(!t)return Q.msgError("\u4FDD\u5B58\u5931\u8D25\uFF0C\u65E0\u9009\u4E2D\u6807\u7B7E\u9875");await j({type:t.label,configs:t.data.lists}),p()},p=async()=>{const t=await z({type:l.value}),u=n.find(c=>c.label===l.value);u&&(u.data=t)};return C(),p(),(t,u)=>{const c=N,_=J,h=R,y=L,M=K,x=S,w=U,T=P,k=I;return m(),E("div",null,[a(_,{class:"!border-none",shadow:"never"},{default:e(()=>[a(c,{class:"text-xxl",type:"warning",closable:!1,"show-icon":"",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u8BBE\u7F6E\u597D\u7684\u6A21\u578B\uFF0C\u8BF7\u52FF\u968F\u610F\u5220\u9664\u6216\u5173\u95ED\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u77E5\u8BC6\u5E93\u4F7F\u7528\u4E0D\u4E86\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01"})]),_:1}),a(_,{shadow:"never",class:"!border-none mt-4"},{default:e(()=>[a(w,{modelValue:r(l),"onUpdate:modelValue":u[0]||(u[0]=o=>O(l)?l.value=o:null),class:"mt-[-10px]",onTabChange:p},{default:e(()=>[(m(!0),E(W,null,X(r(n),(o,V)=>(m(),B(x,{label:`${o.name}`,name:o.label,key:V,lazy:""},{default:e(()=>[o.label=="chat"?(m(),B(M,{key:0,label:"\u5F53\u524D\u9ED8\u8BA4\u63A5\u53E3"},{default:e(()=>{var s;return[v("div",null,[a(y,{"model-value":(s=r(i))==null?void 0:s.data.defaultModel},{default:e(()=>{var f;return[a(h,{label:(f=r(i))==null?void 0:f.data.defaultModel},{default:e(()=>{var b;return[D(Y((b=r(i))==null?void 0:b.data.defaultModel),1)]}),_:1},8,["label"])]}),_:1},8,["model-value"]),tt])]}),_:1})):Z("",!0),a(G,{data:o.data.lists,"onUpdate:data":s=>o.data.lists=s,models:r(d)[o.label]||[]},null,8,["data","onUpdate:data","models"])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(k,null,{default:e(()=>[a(T,{type:"primary",onClick:g},{default:e(()=>[D(" \u4FDD\u5B58 ")]),_:1})]),_:1})])}}});export{zt as default};
