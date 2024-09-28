import{Y as J,C as M,D as Q,G as Y,H as W,w as X,F as Z,L as ee,M as te,t as oe,N as ae,O as le}from"./element-plus.9458fb52.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{f as se,b as re}from"./index.d9c09296.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang.57e627f4.js";import{d as S,s as ue,r as E,_ as P,ag as me,o as r,c as pe,T as e,K as o,u as t,a7 as de,a as h,Q as c,L as _,J as u,j as ce,P as _e}from"./@vue.7946e41b.js";import{u as fe}from"./usePaging.9ff9bac2.js";import{g as x,d as Ce,b as ge}from"./draw_prompt.46d4646a.js";import{g as we}from"./draw_prompt_category.649d4000.js";import{_ as ve}from"./edit.vue_vue_type_script_setup_true_lang.3d3ea572.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.1871ee6b.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./index.9f63869e.js";const be={class:"w-[200px]"},Ee={class:"flex justify-end mt-4"},he=S({name:"drawPrompt"}),_t=S({...he,setup(ye){const y=ue(),$=E(!0),L=P({multiple:!1,checkStrictly:!0,label:"name",value:"id",children:"children",emitPath:!1}),s=P({prompt:"",category_id:"",model:"dalle3",status:""}),B=E([]),v=E([]),U=n=>{v.value=n},N=async()=>{const n=await we();B.value=n},F=(n,l={})=>{var g;(g=y.value)==null||g.open(n,l)},V=async n=>{await se.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await Ce({id:n}),C()},R=n=>{ge({id:n})},{pager:m,getLists:C,resetPage:k,resetParams:z}=fe({fetchFun:x,params:s});return C(),N(),(n,l)=>{const g=M,w=Q,K=J,b=Y,T=W,p=X,A=ie,j=Z,D=ee,I=re,i=te,O=oe,q=ae,G=ne,f=me("perms"),H=le;return r(),pe("div",null,[e(D,{class:"!border-none",shadow:"never"},{default:o(()=>[e(j,{ref:"formRef",class:"mb-[-16px]",model:t(s),inline:!0},{default:o(()=>[e(w,{label:"\u5185\u5BB9\u641C\u7D22"},{default:o(()=>[e(g,{class:"w-[200px]",modelValue:t(s).prompt,"onUpdate:modelValue":l[0]||(l[0]=a=>t(s).prompt=a),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9\u5173\u952E\u8BCD",clearable:"",onKeyup:de(t(k),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,{label:"\u793A\u4F8B\u7C7B\u76EE"},{default:o(()=>[e(K,{class:"w-[200px]",modelValue:t(s).category_id,"onUpdate:modelValue":l[1]||(l[1]=a=>t(s).category_id=a),options:t(B),props:t(L),clearable:!0},null,8,["modelValue","options","props"])]),_:1}),e(w,{label:"\u793A\u4F8B\u72B6\u6001"},{default:o(()=>[h("div",be,[e(T,{modelValue:t(s).status,"onUpdate:modelValue":l[2]||(l[2]=a=>t(s).status=a)},{default:o(()=>[e(b,{label:"\u5168\u90E8",value:""}),e(b,{label:"\u5F00\u542F",value:1}),e(b,{label:"\u5173\u95ED",value:0})]),_:1},8,["modelValue"])])]),_:1}),e(w,null,{default:o(()=>[e(p,{type:"primary",onClick:t(k)},{default:o(()=>[c("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(p,{onClick:t(z)},{default:o(()=>[c("\u91CD\u7F6E")]),_:1},8,["onClick"]),e(A,{class:"ml-2.5","fetch-fun":t(x),params:t(s),"page-size":t(m).size},null,8,["fetch-fun","params","page-size"])]),_:1})]),_:1},8,["model"])]),_:1}),e(D,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[h("div",null,[_((r(),u(p,{type:"primary",onClick:l[3]||(l[3]=a=>F("add"))},{icon:o(()=>[e(I,{name:"el-icon-Plus"})]),default:o(()=>[c(" \u65B0\u589E ")]),_:1})),[[f,["draw.draw_prompt/add"]]]),_((r(),u(p,{type:"default",plain:!0,disabled:!t(v).length,onClick:l[4]||(l[4]=a=>V(t(v).map(d=>d.id)))},{default:o(()=>[c(" \u6279\u91CF\u5220\u9664 ")]),_:1},8,["disabled"])),[[f,["draw.draw_prompt/delete"]]])]),_((r(),u(q,{size:"large",class:"mt-4",data:t(m).lists,onSelectionChange:U},{default:o(()=>[e(i,{type:"selection",width:"55"}),e(i,{label:"\u5173\u952E\u8BCD\u82F1\u6587",prop:"prompt_en","min-width":"100"}),e(i,{label:"\u5173\u952E\u8BCD\u4E2D\u6587",prop:"prompt","min-width":"100"}),e(i,{label:"\u6240\u5C5E\u7C7B\u522B",prop:"cate_name","min-width":"120"}),_((r(),u(i,{label:"\u72B6\u6001","min-width":"100"},{default:o(({row:a})=>[e(O,{modelValue:a.status,"onUpdate:modelValue":d=>a.status=d,"active-value":1,"inactive-value":0,onChange:d=>R(a.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})),[[f,["draw.draw_prompt/status"]]]),e(i,{label:"\u6392\u5E8F",prop:"sort","min-width":"120"}),e(i,{label:"\u64CD\u4F5C",width:"150",fixed:"right"},{default:o(({row:a})=>[_((r(),u(p,{type:"primary",link:"",onClick:d=>F("edit",a)},{default:o(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[f,["draw.draw_prompt/edit"]]]),_((r(),u(p,{type:"danger",link:"",onClick:d=>V([a.id])},{default:o(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["draw.draw_prompt/delete"]]])]),_:1})]),_:1},8,["data"])),[[H,t(m).loading]]),h("div",Ee,[e(G,{modelValue:t(m),"onUpdate:modelValue":l[5]||(l[5]=a=>ce(m)?m.value=a:null),onChange:t(C)},null,8,["modelValue","onChange"])])]),_:1}),t($)?(r(),u(ve,{key:0,ref_key:"editRef",ref:y,onSuccess:t(C)},null,8,["onSuccess"])):_e("",!0)])}}});export{_t as default};
