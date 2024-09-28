import{_ as E}from"./index.c3587517.js";import{w as F}from"./element-plus.9458fb52.js";import{u as S}from"./vue-router.c4b4a189.js";import{g as N,s as P}from"./decoration.97419f2b.js";import{_ as k,w}from"./preview-pc.vue_vue_type_script_setup_true_lang.fbc2b611.js";import b from"./prop-setting.95dcf18b.js";import{m as I}from"./index.d9c09296.js";import{d as D,r as u,b as J,i as O,ag as U,o as d,c as V,a as x,T as l,u as t,j as q,K as c,J as y,O as A,L as M,Q as R}from"./@vue.7946e41b.js";import{_ as T}from"./vue-drag-resize.1871ee6b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./prop.vue_vue_type_script_setup_true_lang.b8fff902.js";import"./picker.e7e8a72a.js";import"./index.9f63869e.js";import"./index.2ce53bd2.js";import"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import"./index.3b915137.js";import"./index.vue_vue_type_script_setup_true_lang.04d48163.js";import"./index.vue_vue_type_script_setup_true_lang.f8366df7.js";import"./usePaging.9ff9bac2.js";import"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import"./file.vue_vue_type_style_index_0_scoped_ba7daef9_lang.b66d1428.js";import"./vue3-video-play.e85b6285.js";import"./vuedraggable.0170ba82.js";import"./vue.c48aa7bc.js";import"./sortablejs.65032496.js";import"./content.b56a0791.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./prop.vue_vue_type_script_setup_true_lang.dea1b2a3.js";import"./content.fb55b51b.js";import"./prop.vue_vue_type_script_setup_true_lang.9dfa609c.js";import"./picker.339dcc7b.js";import"./ai_creation.8718de7e.js";import"./content.f0222f68.js";import"./decoration-img.628424ae.js";import"./decoration-img.vue_vue_type_style_index_0_scoped_6d06952c_lang.91ed11af.js";import"./prop.vue_vue_type_script_setup_true_lang.2e9e8091.js";import"./content.262d1730.js";import"./prop.vue_vue_type_script_setup_true_lang.d87dde46.js";import"./content.4e885e4d.js";import"./website.13d01b09.js";import"./prop.vue_vue_type_script_setup_true_lang.c4b17d18.js";import"./content.2bc6d43c.js";import"./index_arrow-right02.3a32185e.js";import"./prop.vue_vue_type_script_setup_true_lang.9697df7e.js";import"./content.d3ad379a.js";import"./preview.af951ac0.js";const W={class:"decoration-pages"},j={class:"flex flex-1 min-w-0 items-start overflow-x-auto overflow-y-hidden"},K={class:"h-full py-4"},L=D({name:"decorationPc"}),Q=D({...L,setup($){const _=S(),h=a=>a.map(e=>{var m;return{id:I(),...((m=w[e])==null?void 0:m.config())||{}}}),r=u([{id:1,type:1,name:"pc\u9996\u9875\u88C5\u4FEE",data:[]},{id:5,type:5,name:"pc\u521B\u4F5C\u88C5\u4FEE",data:[]},{id:6,type:6,name:"pc\u667A\u80FD\u4F53\u5E7F\u573A",data:[]}]),o=u(0),p=u(0),i=J(()=>r.value[o.value].data[p.value]||{}),f=async()=>{const a=await N({id:r.value[o.value].id});if(!a.data){r.value[o.value].data=h(["header","title","intro","guide"]);return}r.value[o.value]={...a,data:JSON.parse(a.data)}},B=async()=>{await P({...r.value[o.value],data:JSON.stringify(r.value[o.value].data)}),f()};return O(()=>{o.value=_.query.type||0,console.log(_.query),f()}),(a,e)=>{const v=F,m=E,C=U("perms");return d(),V("div",W,[x("div",j,[l(k,{class:"flex flex-1 min-w-0 h-full","page-data":t(r)[t(o)].data,index:t(p),"onUpdate:index":e[0]||(e[0]=s=>q(p)?p.value=s:null)},null,8,["page-data","index"]),x("div",K,[l(b,{title:t(i).title},{default:c(()=>{var s,g;return[(d(),y(A((g=t(w)[(s=t(i))==null?void 0:s.name])==null?void 0:g.prop),{"is-show":t(i).isShow,"onUpdate:isShow":e[1]||(e[1]=n=>t(i).isShow=n),prop:t(i).prop,"onUpdate:prop":e[2]||(e[2]=n=>t(i).prop=n)},null,40,["is-show","prop"]))]}),_:1},8,["title"])])]),M((d(),y(m,{fixed:!0},{default:c(()=>[l(v,{type:"primary",onClick:B},{default:c(()=>[R("\u4FDD\u5B58")]),_:1})]),_:1})),[[C,["decorate.page/save"]]])])}}});const go=T(Q,[["__scopeId","data-v-6f13a580"]]);export{go as default};
