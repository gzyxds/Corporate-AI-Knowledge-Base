import{W as X,C as Y,D as Z,G as ee,H as te,w as T,F as oe,L as le,M as ae,N as ne,O as ue}from"./element-plus.9458fb52.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{f as re,_ as ie,d as pe}from"./index.d9c09296.js";import{_ as me}from"./index.vue_vue_type_script_setup_true_lang.2fba39d1.js";import{u as de}from"./vue-router.c4b4a189.js";import{d as P,_ as ce,s as $,r as _e,ag as fe,o as u,c as g,T as e,K as o,u as l,a7 as A,Q as r,a as v,L as h,J as p,P as K,R as y,S as L,a6 as ve,j as ye}from"./@vue.7946e41b.js";import{c as be,a as ge}from"./chat_records.039d86e9.js";import{u as ke}from"./usePaging.9ff9bac2.js";import{_ as Ce}from"./replyPop.vue_vue_type_script_setup_true_lang.c7d6e8ee.js";import{_ as Ee}from"./auditPop.vue_vue_type_script_setup_true_lang.b7d5f576.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.1871ee6b.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";import"./index.vue_vue_type_style_index_0_lang.aff7de23.js";import"./markdown-it.0d5ee94e.js";import"./entities.c5b8564c.js";import"./uc.micro.5b97656f.js";import"./mdurl.53a9fb7d.js";import"./linkify-it.11d25e6c.js";import"./punycode.acbf2ca9.js";/* empty css                            */import"./index.9f63869e.js";const he={class:"flex items-center"},Fe={class:"flex justify-end mt-4"},we=P({name:"dialogueRecord"}),Bt=P({...we,setup(Be){const U=de().query.type,n=ce({type:U||"1",user_info:"",keyword:"",censor_status:"",start_time:"",end_time:""}),F=$(),w=$(),N=i=>{F.value.open(i)},S=i=>{w.value.open(i)},{pager:c,getLists:k,resetPage:C,resetParams:I}=ke({fetchFun:ge,params:n}),E=_e([]),O=i=>{E.value=i.map(a=>a.id)},B=async i=>{await re.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await be({id:i}),k()};return k(),(i,a)=>{const D=Y,_=Z,m=ee,j=te,q=me,f=T,z=oe,V=le,G=T,s=ae,x=ie,H=pe,b=X,J=ne,M=se,R=fe("perms"),Q=ue;return u(),g("div",null,[e(V,{class:"!border-none",shadow:"never"},{default:o(()=>[e(z,{ref:"formRef",class:"mb-[-16px]",model:l(n),inline:!0},{default:o(()=>[e(_,{label:"\u7528\u6237\u4FE1\u606F"},{default:o(()=>[e(D,{class:"w-[280px]",modelValue:l(n).user_info,"onUpdate:modelValue":a[0]||(a[0]=t=>l(n).user_info=t),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237ID/\u7528\u6237\u6635\u79F0",clearable:"",onKeyup:A(l(C),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(_,{label:"\u5173\u952E\u8BCD"},{default:o(()=>[e(D,{class:"w-[280px]",modelValue:l(n).keyword,"onUpdate:modelValue":a[1]||(a[1]=t=>l(n).keyword=t),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",clearable:"",onKeyup:A(l(C),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(_,{label:"\u5BA1\u6838\u72B6\u6001"},{default:o(()=>[e(j,{class:"w-[240px]",modelValue:l(n).censor_status,"onUpdate:modelValue":a[2]||(a[2]=t=>l(n).censor_status=t)},{default:o(()=>[e(m,{label:"\u5168\u90E8",value:""}),e(m,{label:"\u672A\u5BA1\u6838",value:0}),e(m,{label:"\u5408\u89C4",value:1}),e(m,{label:"\u4E0D\u5408\u89C4",value:2}),e(m,{label:"\u7591\u4F3C",value:3}),e(m,{label:"\u5BA1\u6838\u5931\u8D25",value:4})]),_:1},8,["modelValue"])]),_:1}),e(_,{label:"\u63D0\u95EE\u65F6\u95F4"},{default:o(()=>[e(q,{startTime:l(n).start_time,"onUpdate:startTime":a[3]||(a[3]=t=>l(n).start_time=t),endTime:l(n).end_time,"onUpdate:endTime":a[4]||(a[4]=t=>l(n).end_time=t)},null,8,["startTime","endTime"])]),_:1}),e(_,null,{default:o(()=>[e(f,{type:"primary",onClick:l(C)},{default:o(()=>[r("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(f,{onClick:l(I)},{default:o(()=>[r("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(V,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[v("div",null,[h((u(),p(G,{disabled:l(E).length<=0,class:"!mb-4",onClick:a[5]||(a[5]=t=>B(l(E)))},{default:o(()=>[r(" \u6279\u91CF\u5220\u9664 ")]),_:1},8,["disabled"])),[[R,["chat.chat_record/del"]]])]),h((u(),p(J,{size:"large",data:l(c).lists,onSelectionChange:O},{default:o(()=>[e(s,{type:"selection",width:"55"}),e(s,{label:"ID",prop:"id","min-width":"80"}),e(s,{label:"\u7528\u6237\u4FE1\u606F","min-width":"150"},{default:o(({row:t})=>[v("div",he,[t.avatar?(u(),p(x,{key:0,radius:"50%",class:"flex-none mr-2",src:t.avatar,width:48,height:48,"preview-src-list":[t.avatar],"preview-teleported":"",fit:"contain"},null,8,["src","preview-src-list"])):K("",!0),v("span",null,y(t.nickname),1)])]),_:1}),e(s,{label:"\u63D0\u95EE\u65F6\u95F4",prop:"create_time","min-width":"180","show-tooltip-when-overflow":""}),e(s,{label:"\u7528\u6237\u63D0\u95EE",prop:"ask","min-width":"250"},{default:o(({row:t})=>[(u(!0),g(L,null,ve(t.files_plugin,(d,W)=>(u(),g("div",{class:"flex flex-wrap mb-2",key:W},[d.type=="image"?(u(),p(x,{key:0,class:"flex-none mr-2",src:d.url,width:70,height:"auto","preview-src-list":[d.url],"preview-teleported":"",fit:"contain"},null,8,["src","preview-src-list"])):K("",!0)]))),128)),e(H,{content:t.ask,line:3,teleported:!0},null,8,["content"])]),_:1}),e(s,{label:"\u5BF9\u8BDD\u6A21\u578B",prop:"model","min-width":"140"}),e(s,{label:"\u6D88\u8017\u7535\u529B\u503C",prop:"price","min-width":"130"}),e(s,{label:"\u5BA1\u6838\u72B6\u6001","min-width":"180"},{default:o(({row:t})=>[v("div",null,[t.censor_status==1?(u(),p(b,{key:0,type:"success"},{default:o(()=>[r(y(t.censor_status_desc),1)]),_:2},1024)):t.censor_status>=2?(u(),g(L,{key:1},[e(b,{class:"cursor-pointer",type:"danger"},{default:o(()=>[r(y(t.censor_status_desc),1)]),_:2},1024),e(f,{type:"danger",link:!0,onClick:d=>S(t)},{default:o(()=>[r(" \u67E5\u770B\u539F\u56E0 ")]),_:2},1032,["onClick"])],64)):t.censor_status==0?(u(),p(b,{key:2,type:"warning"},{default:o(()=>[r(y(t.censor_status_desc),1)]),_:2},1024)):(u(),p(b,{key:3,type:"danger"},{default:o(()=>[r(y(t.censor_status_desc),1)]),_:2},1024))])]),_:1}),e(s,{label:"\u8BF7\u6C42ip",prop:"ip","min-width":"140"}),e(s,{label:"\u64CD\u4F5C","min-width":"180",fixed:"right"},{default:o(({row:t})=>[e(f,{type:"primary",link:"",onClick:d=>N(t.reply)},{default:o(()=>[r(" \u67E5\u770B\u56DE\u590D ")]),_:2},1032,["onClick"]),h((u(),p(f,{type:"danger",link:"",onClick:d=>B([t.id])},{default:o(()=>[r(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[R,["chat.chat_record/del"]]])]),_:1})]),_:1},8,["data"])),[[Q,l(c).loading]]),v("div",Fe,[e(M,{modelValue:l(c),"onUpdate:modelValue":a[6]||(a[6]=t=>ye(c)?c.value=t:null),onChange:l(k)},null,8,["modelValue","onChange"])])]),_:1}),e(Ee,{ref_key:"auditRef",ref:w},null,512),e(Ce,{ref_key:"popRef",ref:F},null,512)])}}});export{Bt as default};
