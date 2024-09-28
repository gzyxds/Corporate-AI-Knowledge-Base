import{_ as E}from"./index.c3587517.js";import{D as B,t as g,F as h,L as b,w}from"./element-plus.9458fb52.js";import{_ as A}from"./picker.e7e8a72a.js";import{a as V,b as y}from"./user.9e582c21.js";import{d as n,_ as k,ag as x,o as l,c as S,T as o,K as u,u as m,a as i,L as U,J as N,Q as j}from"./@vue.7946e41b.js";import"./vue-drag-resize.1871ee6b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.9f63869e.js";import"./index.2ce53bd2.js";import"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import"./index.3b915137.js";import"./index.d9c09296.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./index.vue_vue_type_script_setup_true_lang.04d48163.js";import"./index.vue_vue_type_script_setup_true_lang.f8366df7.js";import"./usePaging.9ff9bac2.js";import"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import"./file.vue_vue_type_style_index_0_scoped_ba7daef9_lang.b66d1428.js";import"./vue3-video-play.e85b6285.js";import"./vuedraggable.0170ba82.js";import"./vue.c48aa7bc.js";import"./sortablejs.65032496.js";const L={class:"user-setup"},T=i("div",{class:"font-medium mb-7"},"\u57FA\u672C\u8BBE\u7F6E",-1),I=i("div",null,[i("div",{class:"form-tips"}," \u7528\u6237\u6CE8\u518C\u65F6\u7ED9\u7684\u9ED8\u8BA4\u5934\u50CF\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ")],-1),J=i("div",{class:"form-tips"}," \u662F\u5426\u5141\u8BB8\u7528\u6237\u6CE8\u9500\u8D26\u53F7\uFF0C\u5173\u95ED\u8868\u793A\u4E0D\u5141\u8BB8\uFF0C\u9ED8\u8BA4\u5173\u95ED ",-1),K=n({name:"userSetup"}),Qt=n({...K,setup(Q){const t=k({default_avatar:"",is_cancelled:0}),s=async()=>{try{const r=await V();for(const e in t)t[e]=r[e]}catch(r){console.log("\u83B7\u53D6=>",r)}},c=async()=>{try{await y(t),s()}catch(r){console.log("\u4FDD\u5B58=>",r)}};return s(),(r,e)=>{const _=A,a=B,d=g,F=h,f=b,C=w,v=E,D=x("perms");return l(),S("div",L,[o(f,{shadow:"never",class:"!border-none"},{default:u(()=>[T,o(F,{ref:"formRef",model:m(t),"label-width":"120px"},{default:u(()=>[o(a,{label:"\u7528\u6237\u9ED8\u8BA4\u5934\u50CF"},{default:u(()=>[i("div",null,[o(_,{modelValue:m(t).default_avatar,"onUpdate:modelValue":e[0]||(e[0]=p=>m(t).default_avatar=p),limit:1},null,8,["modelValue"])])]),_:1}),o(a,null,{default:u(()=>[I]),_:1}),o(a,{label:"\u8D26\u53F7\u6CE8\u9500"},{default:u(()=>[i("div",null,[o(d,{modelValue:m(t).is_cancelled,"onUpdate:modelValue":e[1]||(e[1]=p=>m(t).is_cancelled=p),"active-value":1,"inactive-value":0},null,8,["modelValue"]),J])]),_:1})]),_:1},8,["model"])]),_:1}),U((l(),N(v,null,{default:u(()=>[o(C,{type:"primary",onClick:c},{default:u(()=>[j("\u4FDD\u5B58")]),_:1})]),_:1})),[[D,["setting.user/setConfig"]]])])}}});export{Qt as default};
