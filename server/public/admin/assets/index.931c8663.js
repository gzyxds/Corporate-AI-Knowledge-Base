import{a3 as b,W as v,L as A,M as k,w as y,N as D,O as x}from"./element-plus.9458fb52.js";import{_ as L,s as T}from"./edit.vue_vue_type_script_setup_true_lang.bb439651.js";import{d as f,s as N,_ as R,ag as S,o as a,c as V,T as t,K as e,L as d,u as F,J as i,Q as l}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.d9c09296.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.1871ee6b.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./index.9f63869e.js";const $={class:"storage"},z=f({name:"storage"}),At=f({...z,setup(J){const m=N(),o=R({loading:!1,lists:[]}),p=async()=>{try{o.loading=!0,o.lists=await T(),o.loading=!1}catch{o.loading=!1}},g=r=>{var s;(s=m.value)==null||s.open(r)};return p(),(r,s)=>{const B=b,c=A,u=k,_=v,E=y,h=D,w=S("perms"),C=x;return a(),V("div",$,[t(c,{class:"!border-none",shadow:"never"},{default:e(()=>[t(B,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",closable:!1,"show-icon":""})]),_:1}),d((a(),i(c,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(h,{size:"large",data:F(o).lists},{default:e(()=>[t(u,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"name","min-width":"120"}),t(u,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"path","min-width":"160"}),t(u,{label:"\u72B6\u6001","min-width":"80"},{default:e(({row:n})=>[n.status==1?(a(),i(_,{key:0},{default:e(()=>[l("\u5F00\u542F")]),_:1})):(a(),i(_,{key:1,type:"danger"},{default:e(()=>[l("\u5173\u95ED")]),_:1}))]),_:1}),t(u,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({row:n})=>[d((a(),i(E,{type:"primary",link:"",onClick:K=>g(n.engine)},{default:e(()=>[l(" \u8BBE\u7F6E ")]),_:2},1032,["onClick"])),[[w,["setting.storage/setup"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[C,F(o).loading]]),t(L,{ref_key:"editRef",ref:m,onSuccess:p},null,512)])}}});export{At as default};
