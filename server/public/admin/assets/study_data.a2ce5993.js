import{_ as N,L as P,w as T,M as x,N as S,O as q}from"./element-plus.9458fb52.js";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{u as M}from"./vue-router.c4b4a189.js";import{u as z}from"./usePaging.9ff9bac2.js";import{_ as H}from"./trainDataPop.vue_vue_type_script_setup_true_lang.1a8dbc8c.js";import{c as I,e as J}from"./manage.1d8a9b85.js";import{f as K}from"./index.d9c09296.js";import{d as O,r as w,s as Q,i as U,ag as G,o as u,c as W,T as e,K as a,u as n,Q as p,L as v,J as d,R as F,a as g,j as X,P as Y,n as Z}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.9f63869e.js";import"./vue-drag-resize.1871ee6b.js";import"./data-view.vue_vue_type_script_setup_true_lang.73fde954.js";import"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import"./file.vue_vue_type_style_index_0_scoped_ba7daef9_lang.b66d1428.js";import"./vue3-video-play.e85b6285.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const ee={class:"flex justify-end mt-4"},Xe=O({__name:"study_data",setup(te){const c=w(!1),h=Q(),_=w(),f=M().query.id,E=w(-1),{pager:l,getLists:b,resetPage:ie,resetParams:ae}=z({fetchFun:J,params:{kb_id:f}}),R=async o=>{E.value=o,c.value=!0,await Z(),h.value.open()},y=async o=>{await K.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF01"),I({kb_id:f,fids:o}),b()},$=async()=>{var i;const o=(i=_.value)==null?void 0:i.getSelectionRows().map(k=>k.id);y(o)};return U(()=>{b()}),(o,i)=>{const k=N,B=P,C=T,t=x,V=S,A=j,D=G("perms"),L=q;return u(),W("div",null,[e(B,{class:"!border-none",shadow:"never"},{default:a(()=>[e(k,{content:o.$route.query.name,onBack:i[0]||(i[0]=s=>o.$router.back())},null,8,["content"])]),_:1}),e(B,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>{var s;return[e(C,{onClick:$,disabled:((s=n(_))==null?void 0:s.getSelectionRows().length)==0},{default:a(()=>[p("\u6279\u91CF\u5220\u9664")]),_:1},8,["disabled"]),v((u(),d(V,{ref_key:"tableRef",ref:_,class:"mt-4",size:"large",data:n(l).lists},{default:a(()=>[e(t,{type:"selection",width:"55"}),e(t,{label:"ID",prop:"id",width:"80"}),e(t,{label:"\u6587\u4EF6\u540D\u79F0",prop:"name","min-width":"150"}),e(t,{label:"\u64CD\u4F5C\u7528\u6237","min-width":"120"},{default:a(({row:r})=>{var m;return[p(F((m=r.user)==null?void 0:m.nickname),1)]}),_:1}),e(t,{label:"\u6240\u5C5E\u77E5\u8BC6\u5E93",prop:"id","min-width":"120"},{default:a(()=>[g("div",null,F(o.$route.query.name),1)]),_:1}),e(t,{label:"\u5F85\u8BAD\u7EC3",prop:"wait_sum","min-width":"120"}),e(t,{label:"\u5DF2\u8BAD\u7EC3",prop:"ok_sum","min-width":"120"}),e(t,{label:"\u6570\u636E\u603B\u91CF",prop:"total_sum","min-width":"120"}),e(t,{label:"\u8BAD\u7EC3\u6A21\u578B",prop:"model","min-width":"120"}),e(t,{label:"\u6700\u540E\u66F4\u65B0\u65F6\u95F4",prop:"update_time","min-width":"120"}),e(t,{fixed:"right",label:"\u64CD\u4F5C","min-width":"150"},{default:a(({row:r})=>[g("div",null,[v((u(),d(C,{type:"primary",onClick:m=>R(r.id),link:""},{default:a(()=>[p("\u6570\u636E\u8BE6\u60C5")]),_:2},1032,["onClick"])),[[D,["kb.know/fileDatas"]]]),v((u(),d(C,{type:"danger",onClick:m=>y([r.id]),link:""},{default:a(()=>[p("\u5220\u9664")]),_:2},1032,["onClick"])),[[D,["kb.know/fileRemove"]]])])]),_:1})]),_:1},8,["data"])),[[L,n(l).loading]]),g("div",ee,[e(A,{modelValue:n(l),"onUpdate:modelValue":i[1]||(i[1]=r=>X(l)?l.value=r:null),onChange:n(b)},null,8,["modelValue","onChange"])])]}),_:1}),n(c)?(u(),d(H,{key:0,onClose:i[2]||(i[2]=s=>c.value=!1),kb_id:n(f),fd_id:n(E),ref_key:"popRef",ref:h},null,8,["kb_id","fd_id"])):Y("",!0)])}}});export{Xe as default};
