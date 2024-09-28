import{w as S,M as P,N as j,L as z,O as I}from"./element-plus.9458fb52.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{f as K,b as M}from"./index.d9c09296.js";import{c as O,d as Q}from"./role.4f1d9871.js";import{u as U}from"./usePaging.9ff9bac2.js";import{_ as q}from"./edit.vue_vue_type_script_setup_true_lang.b6e36934.js";import{_ as G}from"./auth.vue_vue_type_script_setup_true_lang.f8c0547c.js";import{d as D,s as g,r as F,ag as H,o as a,c as E,T as t,K as i,a as C,L as c,J as u,Q as h,u as n,j as W,P as B,n as y}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.1871ee6b.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./index.9f63869e.js";import"./menu.40370a0f.js";const X={class:"role-lists"},Y={class:"mt-4"},Z={class:"flex justify-end mt-4"},ee=D({name:"role"}),Ue=D({...ee,setup(te){const d=g(),k=g(),_=F(!1),w=F(!1),{pager:m,getLists:p}=U({fetchFun:Q}),$=async()=>{var o;_.value=!0,await y(),(o=d.value)==null||o.open("add")},x=async o=>{var e,l;_.value=!0,await y(),(e=d.value)==null||e.open("edit"),(l=d.value)==null||l.setFormData(o)},A=async o=>{var e,l;w.value=!0,await y(),(e=k.value)==null||e.open(),(l=k.value)==null||l.setFormData(o)},V=async o=>{await K.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await O({id:o}),p()};return p(),(o,e)=>{const l=M,f=S,r=P,R=j,L=J,N=z,v=H("perms"),T=I;return a(),E("div",X,[t(N,{class:"!border-none",shadow:"never"},{default:i(()=>[C("div",null,[c((a(),u(f,{type:"primary",onClick:$},{icon:i(()=>[t(l,{name:"el-icon-Plus"})]),default:i(()=>[h(" \u65B0\u589E ")]),_:1})),[[v,["auth.role/add"]]])]),c((a(),E("div",Y,[C("div",null,[t(R,{data:n(m).lists,size:"large"},{default:i(()=>[t(r,{prop:"id",label:"ID","min-width":"100"}),t(r,{prop:"name",label:"\u540D\u79F0","min-width":"150"}),t(r,{prop:"desc",label:"\u5907\u6CE8","min-width":"150","show-overflow-tooltip":""}),t(r,{prop:"sort",label:"\u6392\u5E8F","min-width":"100"}),t(r,{prop:"num",label:"\u7BA1\u7406\u5458\u4EBA\u6570","min-width":"100"}),t(r,{prop:"create_time",label:"\u521B\u5EFA\u65F6\u95F4","min-width":"180"}),t(r,{label:"\u64CD\u4F5C",width:"200",fixed:"right"},{default:i(({row:s})=>[c((a(),u(f,{link:"",type:"primary",onClick:b=>x(s)},{default:i(()=>[h(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[v,["auth.role/edit"]]]),c((a(),u(f,{link:"",type:"primary",onClick:b=>A(s)},{default:i(()=>[h(" \u5206\u914D\u6743\u9650 ")]),_:2},1032,["onClick"])),[[v,["auth.role/edit"]]]),c((a(),u(f,{link:"",type:"danger",onClick:b=>V(s.id)},{default:i(()=>[h(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["auth.role/delete"]]])]),_:1})]),_:1},8,["data"])]),C("div",Z,[t(L,{modelValue:n(m),"onUpdate:modelValue":e[0]||(e[0]=s=>W(m)?m.value=s:null),onChange:n(p)},null,8,["modelValue","onChange"])])])),[[T,n(m).loading]])]),_:1}),n(_)?(a(),u(q,{key:0,ref_key:"editRef",ref:d,onSuccess:n(p),onClose:e[1]||(e[1]=s=>_.value=!1)},null,8,["onSuccess"])):B("",!0),n(w)?(a(),u(G,{key:1,ref_key:"authRef",ref:k,onSuccess:n(p),onClose:e[2]||(e[2]=s=>w.value=!1)},null,8,["onSuccess"])):B("",!0)])}}});export{Ue as default};
