import{_ as O}from"./index.c3587517.js";import{J as $,K as J,D as L,B as P,Z as T,C as H,L as Q,t as Z,G as z,H as W,F as X,w as Y}from"./element-plus.9458fb52.js";import{b as ee,p as ue}from"./music.80fcc708.js";import{d as k,s as oe,b as E,r as le,i as te,o as n,c as r,T as t,K as s,a as m,u as e,j as se,S as _,a6 as v,J as F,Q as p,R as b,P as g}from"./@vue.7946e41b.js";import"./vue-drag-resize.1871ee6b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.d9c09296.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const ie=m("div",{class:"text-xl font-medium mb-[20px]"},"AI\u8BBE\u7F6E",-1),ae={key:0,class:"form-tips"},me=["href"],ne=m("div",{class:"form-tips"},"\u4E0D\u540C\u7248\u672C\u4EA7\u751F\u7684\u8D44\u8D39\u4E0D\u540C\uFF0C\u8BF7\u8C28\u614E\u8BBE\u7F6E",-1),re={class:"w-[460px]"},de=m("div",{class:"form-tips"},"\u586B\u51990\u5219\u8868\u793A\u4E0D\u6D88\u8017\u7535\u529B\u503C",-1),ce=m("div",{class:"text-xl font-medium mb-[20px]"},"\u667A\u80FD\u8054\u60F3\u8BBE\u7F6E",-1),_e=m("div",{class:"form-tips"},"\u5F00\u542F\u540E\uFF0C\u4F7F\u7528AI\u751F\u6210\u6B4C\u8BCD\u7684\u9700\u8981\u989D\u5916\u6D88\u8017\u7535\u529B\u503C",-1),pe={class:"w-[460px]"},fe={class:"w-[460px]"},ve=m("div",{class:"form-tips"},"\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u586B\u51990\u5219\u8868\u793A\u4E0D\u989D\u5916\u6263\u8D39",-1),Fe=k({name:"musicSetting"}),tu=k({...Fe,setup(be){const B=oe(),w=E(()=>({[`music_models.${i.value}.price`]:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D88\u8017\u7535\u529B\u503C"}],[`music_models.${i.value}.agency_api`]:[{required:!0,message:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49API\u57DF\u540D"}],"music_imagine.model_id":[{required:!0,message:"\u8BF7\u9009\u62E9AI\u751F\u6210\u901A\u9053"}],"music_imagine.cost_id":[{required:!0,message:"\u8BF7\u9009\u62E9\u6A21\u578B"}]})),u=le({chat_models:[],music_models:{},music_imagine:{cost_id:"",model_id:"",price:"",status:0},music_version:{}}),x=()=>{const[a]=D.value;a&&(u.value.music_imagine.cost_id=a.id)},D=E(()=>{const a=u.value.chat_models.find(l=>l.id===u.value.music_imagine.model_id);return(a==null?void 0:a.models)||[]}),y=async()=>{u.value=await ee()},i=E({get(){const a=Object.values(u.value.music_models).find(l=>l.checked);return(a==null?void 0:a.channel)||""},set(a){Object.keys(u.value.music_models).forEach(l=>{u.value.music_models[l].checked=!1,l==a&&(u.value.music_models[l].checked=!0)})}}),I=async()=>{var a;await((a=B.value)==null?void 0:a.validate()),await ue(u.value)};return te(()=>{y()}),(a,l)=>{const C=$,h=J,d=L,R=P,U=T,V=H,A=Q,S=Z,q=z,M=W,N=X,j=Y,G=O;return n(),r("div",null,[t(N,{class:"mt-4",ref_key:"formRef",ref:B,model:e(u),"label-width":"120px",rules:e(w)},{default:s(()=>[t(A,{shadow:"never",class:"!border-none"},{default:s(()=>[ie,t(d,{label:"AI\u63A5\u53E3",required:"","show-message":!1},{default:s(()=>{var o,c;return[m("div",null,[m("div",null,[t(h,{modelValue:e(i),"onUpdate:modelValue":l[0]||(l[0]=f=>se(i)?i.value=f:null)},{default:s(()=>[(n(!0),r(_,null,v(e(u).music_models,(f,K)=>(n(),F(C,{label:f.channel,key:K},{default:s(()=>[p(b(f.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),((o=e(u).music_models[e(i)])==null?void 0:o.tips)||((c=e(u).music_models[e(i)])==null?void 0:c.website)?(n(),r("div",ae,[e(u).music_models[e(i)].tips?(n(),r(_,{key:0},[p(b(e(u).music_models[e(i)].tips),1)],64)):g("",!0),e(u).music_models[e(i)].website?(n(),r("a",{key:1,class:"text-primary",target:"_blank",href:e(u).music_models[e(i)].website}," \u524D\u5F80\u5F00\u901A ",8,me)):g("",!0)])):g("",!0)])]}),_:1}),e(i)?(n(),r(_,{key:0},[t(d,{label:"\u652F\u6301\u7248\u672C"},{default:s(()=>[m("div",null,[t(U,{modelValue:e(u).music_models[e(i)].version,"onUpdate:modelValue":l[1]||(l[1]=o=>e(u).music_models[e(i)].version=o)},{default:s(()=>[(n(!0),r(_,null,v(e(u).music_version,(o,c)=>(n(),F(R,{label:c,key:o},{default:s(()=>[p(b(o),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),ne])]),_:1}),t(d,{label:"\u6D88\u8017\u7535\u529B\u503C",prop:`music_models.${e(i)}.price`},{default:s(()=>[m("div",re,[t(V,{modelValue:e(u).music_models[e(i)].price,"onUpdate:modelValue":l[2]||(l[2]=o=>e(u).music_models[e(i)].price=o),placeholder:"\u8BF7\u8F93\u5165\u6D88\u8017\u7535\u529B\u503C\u6570\u91CF",type:"number"},null,8,["modelValue"]),de])]),_:1},8,["prop"])],64)):g("",!0)]),_:1}),t(A,{shadow:"never",class:"!border-none mt-4"},{default:s(()=>[ce,t(d,{label:"\u542F\u7528\u667A\u80FD\u8054\u60F3"},{default:s(()=>[m("div",null,[t(S,{modelValue:e(u).music_imagine.status,"onUpdate:modelValue":l[3]||(l[3]=o=>e(u).music_imagine.status=o),"active-value":1,"inactive-value":0},null,8,["modelValue"]),_e])]),_:1}),t(d,{label:"AI\u751F\u6210\u901A\u9053",prop:"music_imagine.model_id"},{default:s(()=>[m("div",null,[t(h,{modelValue:e(u).music_imagine.model_id,"onUpdate:modelValue":l[4]||(l[4]=o=>e(u).music_imagine.model_id=o)},{default:s(()=>[(n(!0),r(_,null,v(e(u).chat_models,(o,c)=>(n(),F(C,{label:o.id,key:c,onChange:x},{default:s(()=>[p(b(o.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])])]),_:1}),t(d,{label:"\u9009\u62E9\u6A21\u578B",prop:"music_imagine.cost_id"},{default:s(()=>[m("div",pe,[t(M,{class:"w-full",modelValue:e(u).music_imagine.cost_id,"onUpdate:modelValue":l[5]||(l[5]=o=>e(u).music_imagine.cost_id=o),placeholder:"",clearable:""},{default:s(()=>[(n(!0),r(_,null,v(e(D),o=>(n(),F(q,{value:o.id,label:o.alias,key:o.id},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])])]),_:1}),t(d,{label:"\u989D\u5916\u6D88\u8017\u7535\u529B\u503C",prop:"music_imagine.price"},{default:s(()=>[m("div",fe,[t(V,{modelValue:e(u).music_imagine.price,"onUpdate:modelValue":l[6]||(l[6]=o=>e(u).music_imagine.price=o),placeholder:"\u8BF7\u8F93\u5165\u989D\u5916\u6D88\u8017\u7535\u529B\u503C",type:"number"},null,8,["modelValue"]),ve])]),_:1})]),_:1})]),_:1},8,["model","rules"]),t(G,null,{default:s(()=>[t(j,{type:"primary",onClick:I},{default:s(()=>[p("\u4FDD\u5B58")]),_:1})]),_:1})])}}});export{tu as default};
