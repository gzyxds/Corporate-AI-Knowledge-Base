import{W as H,C as J,D as Q,G as W,H as X,w as Y,F as Z,L as ee,M as te,o as le,N as ae,O as ue}from"./element-plus.9458fb52.js";import{_ as oe,a as ne}from"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang.2fba39d1.js";import{d as re,r as _,s as me,i as de,o as m,c as pe,T as e,K as l,a7 as x,u as s,Q as i,L as ce,J as f,a as r,R,P as E,j as _e}from"./@vue.7946e41b.js";import{g as fe,d as A}from"./manage.b0da3c3c.js";import{u as ve}from"./usePaging.9ff9bac2.js";import{f as y}from"./index.d9c09296.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./file.vue_vue_type_style_index_0_scoped_ba7daef9_lang.b66d1428.js";import"./vue-drag-resize.1871ee6b.js";import"./vue3-video-play.e85b6285.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const Fe={class:"flex items-center"},be={class:"ml-2"},Ee={class:"flex items-center"},ge={class:"ml-2"},Ce={class:"flex justify-end mt-4"},ct=re({__name:"record",setup(ye){const u=_({user_info:"",name:"",status:"",start_time:"",end_time:""}),g=_(!1),T=_(),k=_(""),w=_(!1),V=me(),{pager:d,getLists:v,resetPage:C,resetParams:U}=ve({fetchFun:fe,params:u.value}),S=async o=>{g.value=!0,k.value=o},$=async o=>{await y.confirm("\u786E\u8BA4\u5220\u9664\uFF1F"),await A({ids:[o]}),v()},K=async()=>{const o=V.value.getSelectionRows().map(a=>a.id);await y.confirm("\u662F\u5426\u786E\u8BA4\u6279\u91CF\u5220\u9664\uFF01"),await A({ids:o}),v()},L=o=>{console.log(o),w.value=o.length!=0},N=o=>{y.confirm(`\u9519\u8BEF\u4FE1\u606F\uFF1A${o}`,"\u5931\u8D25\u539F\u56E0",{showConfirmButton:!1,type:"error",cancelButtonText:"\u5173\u95ED"})};return de(()=>{v()}),(o,a)=>{const h=J,p=Q,c=W,P=X,I=ie,F=Y,j=Z,B=ee,n=te,z=le,b=H,M=ae,O=se,q=ne,G=ue;return m(),pe("div",null,[e(B,{class:"!border-none",shadow:"never"},{default:l(()=>[e(j,{ref:"formRef",class:"mb-[-16px]",model:T.value,inline:!0},{default:l(()=>[e(p,{label:"\u7528\u6237\u4FE1\u606F"},{default:l(()=>[e(h,{class:"w-[280px]",placeholder:"\u7528\u6237\u7F16\u53F7/\u6635\u79F0/\u624B\u673A\u53F7\u7801/\u90AE\u7BB1",clearable:"",modelValue:u.value.user_info,"onUpdate:modelValue":a[0]||(a[0]=t=>u.value.user_info=t),onKeyup:x(s(C),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(p,{label:"\u6587\u4EF6\u540D\u79F0"},{default:l(()=>[e(h,{class:"w-[280px]",placeholder:"\u8BF7\u8F93\u5165",clearable:"",onKeyup:x(s(C),["enter"]),modelValue:u.value.name,"onUpdate:modelValue":a[1]||(a[1]=t=>u.value.name=t)},null,8,["onKeyup","modelValue"])]),_:1}),e(p,{label:"\u751F\u6210\u72B6\u6001"},{default:l(()=>[e(P,{class:"w-[280px]",modelValue:u.value.status,"onUpdate:modelValue":a[2]||(a[2]=t=>u.value.status=t)},{default:l(()=>[e(c,{label:"\u5168\u90E8",value:""}),e(c,{label:"\u8349\u7A3F",value:"1"}),e(c,{label:"\u5408\u6210\u4E2D",value:"2"}),e(c,{label:"\u5408\u6210\u6210\u529F",value:"3"}),e(c,{label:"\u5408\u6210\u5931\u8D25",value:"4"})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"\u751F\u6210\u65F6\u95F4"},{default:l(()=>[e(I,{"start-time":u.value.start_time,"onUpdate:startTime":a[3]||(a[3]=t=>u.value.start_time=t),"end-time":u.value.end_time,"onUpdate:endTime":a[4]||(a[4]=t=>u.value.end_time=t)},null,8,["start-time","end-time"])]),_:1}),e(p,null,{default:l(()=>[e(F,{type:"primary",onClick:s(C)},{default:l(()=>[i("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(F,{onClick:s(U)},{default:l(()=>[i("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(B,{class:"!border-none mt-4",shadow:"never"},{default:l(()=>[e(F,{disabled:!w.value,onClick:K},{default:l(()=>[i("\u6279\u91CF\u5220\u9664")]),_:1},8,["disabled"]),ce((m(),f(M,{class:"mt-2",size:"large",data:s(d).lists,ref_key:"tableRef",ref:V,onSelectionChange:L},{default:l(()=>[e(n,{type:"selection",width:"55"}),e(n,{label:"ID",prop:"id","min-width":"80"}),e(n,{label:"\u7528\u6237\u4FE1\u606F","min-width":"200"},{default:l(({row:t})=>[r("div",Fe,[e(z,{class:"flex-none",src:t.avatar,size:50},null,8,["src"]),r("div",be,R(t.nickname),1)])]),_:1}),e(n,{label:"\u6587\u4EF6\u540D\u79F0","min-width":"210"},{default:l(({row:t})=>[r("div",Ee,[e(oe,{onClick:D=>S(t.video_url),class:"cursor-pointer",type:"video",uri:t.video_url},null,8,["onClick","uri"]),r("div",ge,R(t.name),1)])]),_:1}),e(n,{label:"\u65F6\u957F",prop:"long_time_desc","min-width":"120"}),e(n,{label:"\u751F\u6210\u72B6\u6001",prop:"status","min-width":"100"},{default:l(({row:t})=>[r("div",null,[t.status==1?(m(),f(b,{key:0,type:"info"},{default:l(()=>[i("\u8349\u7A3F")]),_:1})):E("",!0),t.status==2?(m(),f(b,{key:1},{default:l(()=>[i("\u5408\u6210\u4E2D")]),_:1})):E("",!0),t.status==3?(m(),f(b,{key:2,type:"success"},{default:l(()=>[i(" \u5408\u6210\u6210\u529F ")]),_:1})):E("",!0),t.status==4?(m(),f(b,{key:3,class:"cursor-pointer",type:"danger",onClick:D=>N(t.fail_reason)},{default:l(()=>[i(" \u5408\u6210\u5931\u8D25 ")]),_:2},1032,["onClick"])):E("",!0)])]),_:1}),e(n,{label:"\u751F\u6210\u65F6\u95F4",prop:"create_time","min-width":"120"}),e(n,{label:"\u64CD\u4F5C",width:"100",fixed:"right"},{default:l(({row:t})=>[r("div",null,[e(F,{onClick:D=>$(t.id),type:"danger",link:""},{default:l(()=>[i("\u5220\u9664")]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data"])),[[G,s(d).loading]]),r("div",Ce,[e(O,{modelValue:s(d),"onUpdate:modelValue":a[5]||(a[5]=t=>_e(d)?d.value=t:null),onChange:s(v)},null,8,["modelValue","onChange"])])]),_:1}),e(q,{modelValue:g.value,"onUpdate:modelValue":a[6]||(a[6]=t=>g.value=t),url:k.value,type:"video"},null,8,["modelValue","url"])])}}});export{ct as default};
