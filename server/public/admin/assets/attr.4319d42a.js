import{x as I,J as P,K as R,V as T,y as S,w as j,D as N,C as L,t as $,E as z,F as K}from"./element-plus.9458fb52.js";import{_ as O}from"./index.3b915137.js";import{b as G}from"./index.d9c09296.js";import{_ as J}from"./picker.339dcc7b.js";import{_ as M}from"./picker.e7e8a72a.js";import{D as Q}from"./vuedraggable.0170ba82.js";import{d as q,r as g,o as H,c as W,T as e,K as o,u as p,j as X,a as m,Q as d,n as Y,bk as Z,bj as ee}from"./@vue.7946e41b.js";import{_ as oe}from"./vue-drag-resize.1871ee6b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import"./usePaging.9ff9bac2.js";import"./ai_creation.8718de7e.js";import"./index.9f63869e.js";import"./index.2ce53bd2.js";import"./index.vue_vue_type_script_setup_true_lang.04d48163.js";import"./index.vue_vue_type_script_setup_true_lang.f8366df7.js";import"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import"./file.vue_vue_type_style_index_0_scoped_ba7daef9_lang.b66d1428.js";import"./vue3-video-play.e85b6285.js";import"./vue.c48aa7bc.js";import"./sortablejs.65032496.js";const te="/admin/assets/pc_example_app.f79bcf6f.png",le="/admin/assets/mobile_example_app.2d20d9cc.png",ue=l=>(Z("data-v-a6682f51"),l=l(),ee(),l),ae={class:"max-w-[400px]"},ne={class:"bg-fill-light w-full p-4 mb-4"},me={class:"flex-1 flex items-center"},de={class:"drag-move cursor-move ml-auto"},ie=ue(()=>m("div",{class:"form-tips"}," \u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A\uFF1A1920*300 ",-1)),pe={class:"form-tips !text-[14px]"},se=["src"],ce={class:"form-tips !text-[14px]"},re=["src"],_e=q({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(l){const E=l,s=g("common"),c=g(null),v=async()=>{E.content.data.push({image:"",title:"",desc:"",pcLink:{},link:{},is_show:"1"}),await Y(),c.value&&c.value.scrollTo({top:999999})},B=b=>{E.content.data.splice(b,1)};return(b,u)=>{const r=j,F=M,n=N,i=L,V=J,A=$,h=G,k=O,C=z,_=I,f=P,w=R,x=T,y=S,U=K;return H(),W("div",ae,[e(U,{"label-width":"85px"},{default:o(()=>[e(y,{modelValue:p(s),"onUpdate:modelValue":u[5]||(u[5]=t=>X(s)?s.value=t:null)},{default:o(()=>[e(_,{label:"\u5E94\u7528\u914D\u7F6E",name:"common"},{default:o(()=>[m("div",null,[e(r,{type:"primary",onClick:v},{default:o(()=>[d("\u6DFB\u52A0\u5E94\u7528")]),_:1})]),e(C,{height:"100%",ref_key:"scrollbarRef",ref:c,class:"app-scroll"},{default:o(()=>[e(p(Q),{class:"draggable",modelValue:l.content.data,"onUpdate:modelValue":u[0]||(u[0]=t=>l.content.data=t),animation:"300",handle:".drag-move"},{item:o(({element:t,index:D})=>[e(k,{onClose:a=>B(D),class:"max-w-[400px] mr-2 mt-4"},{default:o(()=>[m("div",ne,[e(n,{label:"\u5E94\u7528\u5C01\u9762"},{default:o(()=>[e(F,{modelValue:t.image,"onUpdate:modelValue":a=>t.image=a,"upload-class":"bg-body","exclude-domain":"",size:"100px"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{label:"\u5E94\u7528\u6807\u9898"},{default:o(()=>[e(i,{modelValue:t.title,"onUpdate:modelValue":a=>t.title=a,placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u6807\u9898"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{label:"\u5E94\u7528\u63CF\u8FF0"},{default:o(()=>[e(i,{modelValue:t.desc,"onUpdate:modelValue":a=>t.desc=a,placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u63CF\u8FF0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{label:"pc\u94FE\u63A5"},{default:o(()=>[e(V,{type:"pc",modelValue:t.pcLink,"onUpdate:modelValue":a=>t.pcLink=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{label:"\u79FB\u52A8\u7AEF\u94FE\u63A5"},{default:o(()=>[e(V,{type:"mobile",modelValue:t.link,"onUpdate:modelValue":a=>t.link=a},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{label:"\u662F\u5426\u663E\u793A"},{default:o(()=>[m("div",me,[e(A,{modelValue:t.is_show,"onUpdate:modelValue":a=>t.is_show=a,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),m("div",de,[e(h,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])]),_:2},1032,["onClose"])]),_:1},8,["modelValue"])]),_:1},512)]),_:1}),e(_,{label:"PC\u914D\u7F6E",name:"pc"},{default:o(()=>[e(n,{label:"\u80CC\u666F\u56FE\u7247"},{default:o(()=>[m("div",null,[e(F,{modelValue:l.content.pc_background,"onUpdate:modelValue":u[1]||(u[1]=t=>l.content.pc_background=t),"upload-class":"bg-body","exclude-domain":""},null,8,["modelValue"]),ie])]),_:1}),e(n,{label:"\u6807\u9898\u540D\u79F0"},{default:o(()=>[e(i,{modelValue:l.content.pc_title,"onUpdate:modelValue":u[2]||(u[2]=t=>l.content.pc_title=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6309\u94AE\u663E\u793A"},{default:o(()=>[e(w,{modelValue:l.content.pc_text_color,"onUpdate:modelValue":u[3]||(u[3]=t=>l.content.pc_text_color=t)},{default:o(()=>[e(f,{label:1},{default:o(()=>[d("\u9ED1\u8272")]),_:1}),e(f,{label:2},{default:o(()=>[d("\u767D\u8272")]),_:1}),e(f,{label:3},{default:o(()=>[d("\u4E3B\u9898\u8272")]),_:1})]),_:1},8,["modelValue"])]),_:1}),m("div",pe,[d(" PC\u7AEF\u914D\u7F6E\u5BF9\u5E94PC\u5E94\u7528\u4E2D\u5FC3\u7684\u5934\u90E8\u88C5\u4FEE\u8BBE\u7F6E\u3002 "),e(x,{placement:"bottom-start",width:"auto",trigger:"hover"},{reference:o(()=>[e(r,{link:"",type:"primary"},{default:o(()=>[d(" \u67E5\u770B\u793A\u4F8B ")]),_:1})]),default:o(()=>[m("img",{src:p(te),alt:"",class:"w-[600px]"},null,8,se)]),_:1})])]),_:1}),e(_,{label:"\u79FB\u52A8\u7AEF\u914D\u7F6E",name:"mobile_title"},{default:o(()=>[e(n,{label:"\u6807\u9898\u540D\u79F0"},{default:o(()=>[e(i,{modelValue:l.content.mobile_title,"onUpdate:modelValue":u[4]||(u[4]=t=>l.content.mobile_title=t)},null,8,["modelValue"])]),_:1}),m("div",ce,[d(" \u79FB\u52A8\u7AEF\u914D\u7F6E\u5BF9\u5E94\u79FB\u52A8\u7AEF\u5E94\u7528\u4E2D\u5FC3\u7684\u5934\u90E8\u88C5\u4FEE\u8BBE\u7F6E\u3002 "),e(x,{placement:"bottom-start",width:"auto",trigger:"hover"},{reference:o(()=>[e(r,{link:"",type:"primary"},{default:o(()=>[d(" \u67E5\u770B\u793A\u4F8B ")]),_:1})]),default:o(()=>[m("img",{src:p(le),alt:"",class:"w-[300px]"},null,8,re)]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}});const fo=oe(_e,[["__scopeId","data-v-a6682f51"]]);export{fo as default};
