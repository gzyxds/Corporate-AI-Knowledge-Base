import{G as W,H as X,D as Y,w as Z,F as ee,L as te,M as ae,b as le,t as oe,N as ue,O as ne}from"./element-plus.9458fb52.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{u as se}from"./usePaging.9ff9bac2.js";import{_ as re}from"./addPop.vue_vue_type_script_setup_true_lang.fda9a9ad.js";import{_ as me}from"./adjustClassPop.vue_vue_type_script_setup_true_lang.81c3917f.js";import{j as de,k as pe,l as ce,h as _e,m as fe}from"./bg.f67ac75c.js";import{f as D}from"./index.d9c09296.js";import{d as ve,r as y,s as B,i as ge,ag as Ce,o as u,c as P,T as e,K as a,S as be,a6 as ye,J as n,u as m,Q as p,L as c,a as h,R as we,j as ke,P as L,n as V}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.9f63869e.js";import"./vue-drag-resize.1871ee6b.js";import"./picker.e7e8a72a.js";import"./index.2ce53bd2.js";import"./index.3b915137.js";import"./index.vue_vue_type_script_setup_true_lang.04d48163.js";import"./index.vue_vue_type_script_setup_true_lang.f8366df7.js";import"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import"./file.vue_vue_type_style_index_0_scoped_ba7daef9_lang.b66d1428.js";import"./vue3-video-play.e85b6285.js";import"./vuedraggable.0170ba82.js";import"./vue.c48aa7bc.js";import"./sortablejs.65032496.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const Ee={class:"flex justify-end mt-4"},Bt=ve({__name:"manage",setup(Fe){const i=y({type:"",status:"",category_id:""}),S=y([]),s=y(!1),w=B(),x=B(),k=B(),E=y(!1),$=async()=>{s.value=!0,await V(),w.value.open()},j=async o=>{s.value=!0,await V(),w.value.open(o)},A=async o=>{await pe({id:o})},U=async o=>{await D.confirm("\u786E\u5B9A\u5220\u9664\uFF1F"),await ce({id:o}),_()},N=async()=>{S.value=await _e()},T=async()=>{s.value=!0,await V();const o=k.value.getSelectionRows().map(l=>l.id);x.value.open(o)},G=async()=>{const o=k.value.getSelectionRows().map(l=>l.id);await D.confirm("\u662F\u5426\u786E\u8BA4\u6279\u91CF\u5220\u9664\uFF01"),await fe({id:o}),_()},I=o=>{console.log(o),E.value=o.length!=0},{pager:C,getLists:_,resetPage:M,resetParams:O}=se({fetchFun:de,params:i.value});return ge(async()=>{await _(),await N()}),(o,l)=>{const f=W,F=X,b=Y,d=Z,q=ee,R=te,r=ae,z=le,H=oe,J=ue,K=ie,v=Ce("perms"),Q=ne;return u(),P("div",null,[e(R,{class:"!border-none",shadow:"never"},{default:a(()=>[e(q,{ref:"formRef",class:"mb-[-16px]",model:i.value,inline:!0},{default:a(()=>[e(b,{label:"\u7248\u578B\u7C7B\u578B"},{default:a(()=>[e(F,{class:"w-[280px]",modelValue:i.value.type,"onUpdate:modelValue":l[0]||(l[0]=t=>i.value.type=t)},{default:a(()=>[e(f,{label:"\u7AD6\u7248",value:1}),e(f,{label:"\u6A2A\u7248",value:2})]),_:1},8,["modelValue"])]),_:1}),e(b,{label:"\u6240\u5C5E\u5206\u7C7B"},{default:a(()=>[e(F,{class:"w-[280px]",modelValue:i.value.category_id,"onUpdate:modelValue":l[1]||(l[1]=t=>i.value.category_id=t)},{default:a(()=>[e(f,{label:"\u65E0\u5206\u7C7B",value:0}),(u(!0),P(be,null,ye(S.value,(t,g)=>(u(),n(f,{key:g,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(b,{label:"\u72B6\u6001"},{default:a(()=>[e(F,{class:"w-[280px]",modelValue:i.value.status,"onUpdate:modelValue":l[2]||(l[2]=t=>i.value.status=t)},{default:a(()=>[e(f,{label:"\u5F00\u542F",value:"1"}),e(f,{label:"\u5173\u95ED",value:"0"})]),_:1},8,["modelValue"])]),_:1}),e(b,null,{default:a(()=>[e(d,{type:"primary",onClick:m(M)},{default:a(()=>[p("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(d,{onClick:m(O)},{default:a(()=>[p("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(R,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[c((u(),n(d,{type:"primary",onClick:$},{default:a(()=>[p("+ \u65B0\u589E\u80CC\u666F")]),_:1})),[[v,["digital.background/add"]]]),c((u(),n(d,{onClick:T,disabled:!E.value},{default:a(()=>[p("\u6279\u91CF\u8C03\u6574")]),_:1},8,["disabled"])),[[v,["digital.background/batchEdit"]]]),c((u(),n(d,{onClick:G,disabled:!E.value},{default:a(()=>[p("\u6279\u91CF\u5220\u9664")]),_:1},8,["disabled"])),[[v,["digital.background/batchDel"]]]),c((u(),n(J,{class:"mt-2",size:"large",data:m(C).lists,ref_key:"tableRef",ref:k,onSelectionChange:I},{default:a(()=>[e(r,{type:"selection",width:"55"}),e(r,{label:"\u80CC\u666F\u56FE",prop:"sn","min-width":"120"},{default:a(({row:t})=>[e(z,{"preview-teleported":!0,"preview-src-list":[t.url],src:t.url,class:"w-[80px]"},null,8,["preview-src-list","src"])]),_:1}),e(r,{label:"\u7248\u578B\u7C7B\u578B",prop:"type_desc","min-width":"100"}),e(r,{label:"\u6240\u5C5E\u5206\u7C7B","min-width":"100"},{default:a(({row:t})=>[h("span",null,we(t.category_name||"\u65E0\u5206\u7C7B"),1)]),_:1}),e(r,{label:"\u72B6\u6001","min-width":"100"},{default:a(({row:t})=>[c(e(H,{onChange:g=>A(t.id),modelValue:t.status,"onUpdate:modelValue":g=>t.status=g,"active-value":1,"inactive-value":0},null,8,["onChange","modelValue","onUpdate:modelValue"]),[[v,["digital.background/status"]]])]),_:1}),e(r,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(r,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time","min-width":"120"}),e(r,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:a(({row:t})=>[h("div",null,[c((u(),n(d,{type:"primary",link:"",onClick:g=>j(t)},{default:a(()=>[p(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[v,["digital.background/edit"]]]),c((u(),n(d,{type:"danger",link:"",onClick:g=>U(t.id)},{default:a(()=>[p("\u5220\u9664")]),_:2},1032,["onClick"])),[[v,["digital.background/del"]]])])]),_:1})]),_:1},8,["data"])),[[Q,m(C).loading]]),h("div",Ee,[e(K,{modelValue:m(C),"onUpdate:modelValue":l[3]||(l[3]=t=>ke(C)?C.value=t:null),onChange:m(_)},null,8,["modelValue","onChange"])])]),_:1}),s.value?(u(),n(re,{key:0,ref_key:"addPopRef",ref:w,onClose:l[4]||(l[4]=t=>s.value=!1),onSuccess:l[5]||(l[5]=()=>{s.value=!1,m(_)()})},null,512)):L("",!0),s.value?(u(),n(me,{key:1,ref_key:"adjustPopRef",ref:x,onSuccess:l[6]||(l[6]=()=>{s.value=!1,m(_)()})},null,512)):L("",!0)])}}});export{Bt as default};
