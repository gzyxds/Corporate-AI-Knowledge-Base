import{a3 as z,W as M,L as O,M as R,w as q,N as I,I as J,O as K}from"./element-plus.9458fb52.js";import{_ as Q}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{r as w}from"./index.d9c09296.js";import{u as k}from"./useLockFn.06f76359.js";import{u as W}from"./usePaging.9ff9bac2.js";import{d as G,_ as H,i as X,ag as Y,o as n,c as a,T as s,K as i,L as y,u as l,J as b,a as t,R as _,Q as r,P as V,S as C,a6 as D,j as Z}from"./@vue.7946e41b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.1871ee6b.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";function uu(c){return w.get({url:"/setting.system.upgrade/lists",params:c})}function eu(c){return w.post({url:"/setting.system.upgrade/downloadPkg",params:c})}function tu(c){return w.post({url:"/setting.system.upgrade/upgrade",params:c,timeout:120*1e3})}const iu=t("div",{class:"py-[3px]"},"\u6E29\u99A8\u63D0\u793A\uFF1A",-1),su=t("div",{class:"py-[3px]"},[r(" 1.\u7248\u672C\u66F4\u65B0\u9700\u8981\u9010\u4E2A\u7248\u672C\u66F4\u65B0\uFF0C "),t("span",{class:"text-[#f56c6c]"}," \u66F4\u65B0\u524D\u8BF7\u5907\u4EFD\u597D\u7CFB\u7EDF\u548C\u6570\u636E\u5E93\uFF0C\u66F4\u65B0\u6210\u529F\u540E\u9700\u8981\u5F3A\u5236\u5237\u65B0\u7AD9\u70B9\uFF1B ")],-1),ou=t("div",{class:"py-[3px]"},"2.\u7CFB\u7EDF\u6CA1\u6709\u505A\u4E8C\u6B21\u5F00\u53D1\uFF0C\u53EF\u4EE5\u76F4\u63A5\u9009\u62E9\u5728\u7EBF\u66F4\u65B0\u529F\u80FD\uFF1B",-1),lu=t("div",{class:"py-[3px]"}," 3.\u7CFB\u7EDF\u5DF2\u505A\u4E8C\u6B21\u5F00\u53D1\uFF0C\u8FDB\u884C\u4E86\u529F\u80FD\u4FEE\u6539\uFF0C\u8BF7\u8C28\u614E\u9009\u62E9\u5728\u7EBF\u66F4\u65B0\u529F\u80FD\uFF0C\u63A8\u8350\u4EE5\u66F4\u65B0\u5305\u7684\u5F62\u5F0F\u624B\u52A8\u66F4\u65B0\uFF1B ",-1),nu={class:"flex items-center"},au={class:"mr-2"},ru={class:""},du={class:"operation flex flex-wrap"},Fu={class:"flex mt-4 justify-end"},pu={class:"flex flex-col justify-between items-center"},cu={class:"flex flex-col pb-8"},mu={class:"mt-2.5"},_u={class:"mt-2.5"},Eu={key:0,style:{"text-align":"center"}},Bu={key:1,style:{"text-align":"center"}},fu=t("div",null,"\u4E8C\u6B21\u5F00\u53D1\u540E\u8BF7\u8C28\u614E\u4F7F\u7528\u4E00\u952E\u66F4\u65B0\u529F\u80FD\uFF01",-1),Cu=t("div",null,"\u4E8C\u6B21\u5F00\u53D1\u540E\u4E00\u952E\u66F4\u65B0\u5BFC\u81F4\u7684\u7CFB\u7EDF\u95EE\u9898\uFF0C\u5B98\u65B9\u65E0\u6CD5\u5904\u7406\uFF0C\u8BF7\u505A\u597D\u7CFB\u7EDF\u5907\u4EFD\uFF01",-1),Du=[fu,Cu],vu={key:0,class:"mt-2.5"},gu={class:"pt-10",style:{height:"200px","text-align":"center"}},yu={"element-loading-text":"\u7CFB\u7EDF\u66F4\u65B0\u4E2D\uFF0C\u66F4\u65B0\u5B8C\u6BD5\u540E\u4F1A\u81EA\u884C\u5237\u65B0\u9875\u9762 \u5207\u52FF\u5173\u95ED\u7A97\u53E3\u6216\u5237\u65B0\u9875\u9762"},de=G({__name:"index",setup(c){const u=H({id:"",outerVisible:!1,loading:!1,isSecondaryDev:!1,threeVisible:!1,innerVisible:!1}),{pager:m,getLists:v}=W({fetchFun:uu});k(async(E,o)=>{const f=await eu({id:E,update_type:o});o==6?window.open(f.line,"_blank"):window.location.href=f.line});const A=E=>{u.outerVisible=!0,u.id=E},S=()=>{u.innerVisible=!1,u.threeVisible=!0,$()},L=()=>{u.outerVisible=!1,u.isSecondaryDev=!1,u.innerVisible=!0},U=()=>{u.outerVisible=!1,u.isSecondaryDev=!0,u.innerVisible=!0},{lockFn:$}=k(async()=>{try{u.loading=!0,await tu({id:u.id,update_type:1}),v()}catch{}u.threeVisible=!1,u.innerVisible=!1,u.outerVisible=!1});return X(()=>{v()}),(E,o)=>{const f=z,x=O,B=R,N=M,F=q,T=I,P=Q,g=J,j=Y("perms"),h=K;return n(),a("div",null,[s(x,{class:"!border-none",shadow:"never"},{default:i(()=>[s(f,{class:"text-xxl",type:"warning",closable:!1,"show-icon":""},{title:i(()=>[iu,su,ou,lu]),_:1})]),_:1}),y((n(),b(x,{class:"!border-none mt-4",shadow:"never"},{default:i(()=>[t("div",null,[s(T,{data:l(m).lists,size:"large",border:""},{default:i(()=>[s(B,{prop:"publish_time",label:"\u53D1\u5E03\u65E5\u671F","min-width":"180px"}),s(B,{label:"\u7248\u672C\u53F7","min-width":"160px"},{default:i(e=>[t("div",nu,[t("div",au,_(e.row.version_no),1),e.$index==0&&l(m).page==1?(n(),b(N,{key:0,size:"small",type:"primary"},{default:i(()=>[r(" \u6700\u65B0 ")]),_:1})):V("",!0)]),t("div",ru,_(e.row.version_str),1)]),_:1}),s(B,{prop:"",label:"\u7248\u672C\u5185\u5BB9","min-width":"220px"},{default:i(e=>[(n(!0),a(C,null,D(e.row.add,(d,p)=>(n(),a("div",{class:"",key:p},_(d),1))),128)),(n(!0),a(C,null,D(e.row.optimize,(d,p)=>(n(),a("div",{class:"",key:p},_(d),1))),128)),(n(!0),a(C,null,D(e.row.repair,(d,p)=>(n(),a("div",{class:"",key:p},_(d),1))),128))]),_:1}),s(B,{prop:"notice",label:"\u6CE8\u610F\u4E8B\u9879","min-width":"220px"},{default:i(e=>[(n(!0),a(C,null,D(e.row.notice,(d,p)=>(n(),a("div",{class:"",key:p},_(d),1))),128))]),_:1}),s(B,{label:"\u64CD\u4F5C",width:"160px",fixed:"right"},{default:i(e=>[t("div",du,[y((n(),a("div",null,[e.row.able_update==1?(n(),b(F,{key:0,type:"primary",link:"",onClick:d=>A(e.row.id)},{default:i(()=>[r(" \u4E00\u952E\u66F4\u65B0 ")]),_:2},1032,["onClick"])):V("",!0)])),[[j,["setting.system.upgrade/upgrade"]]])])]),_:1})]),_:1},8,["data"])]),t("div",Fu,[s(P,{modelValue:l(m),"onUpdate:modelValue":o[0]||(o[0]=e=>Z(m)?m.value=e:null),onChange:l(v)},null,8,["modelValue","onChange"])])]),_:1})),[[h,l(m).loading]]),s(g,{modelValue:l(u).outerVisible,"onUpdate:modelValue":o[2]||(o[2]=e=>l(u).outerVisible=e),width:"400px",title:"\u7CFB\u7EDF\u662F\u5426\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1",center:""},{default:i(()=>[t("div",pu,[t("div",cu,[t("div",null,[s(F,{class:"w-full",type:"primary",onClick:L},{default:i(()=>[r(" \u672A\u505A\u4E8C\u6B21\u5F00\u53D1\uFF0C\u76F4\u63A5\u66F4\u65B0 ")]),_:1})]),t("div",mu,[s(F,{class:"w-full",onClick:U},{default:i(()=>[r("\u5DF2\u505A\u4E8C\u6B21\u5F00\u53D1")]),_:1})]),t("div",_u,[s(F,{class:"w-full",onClick:o[1]||(o[1]=e=>l(u).outerVisible=!1)},{default:i(()=>[r(" \u53D6\u6D88\u66F4\u65B0 ")]),_:1})])])])]),_:1},8,["modelValue"]),s(g,{width:"400px",modelValue:l(u).innerVisible,"onUpdate:modelValue":o[5]||(o[5]=e=>l(u).innerVisible=e),"append-to-body":"",center:""},{footer:i(()=>[t("div",null,[s(F,{type:"primary",onClick:S},{default:i(()=>[r(" \u786E\u5B9A\u66F4\u65B0 ")]),_:1}),s(F,{onClick:o[3]||(o[3]=e=>l(u).innerVisible=!1)},{default:i(()=>[r(" \u53D6\u6D88\u66F4\u65B0 ")]),_:1})]),l(u).isSecondaryDev?(n(),a("div",vu,[s(F,{onClick:o[4]||(o[4]=e=>l(u).innerVisible=!1)},{default:i(()=>[r(" \u4E0B\u8F7D\u66F4\u65B0\u5305\uFF0C\u624B\u52A8\u66F4\u65B0 ")]),_:1})])):V("",!0)]),default:i(()=>[t("div",null,[l(u).isSecondaryDev==!1?(n(),a("div",Eu," \u4E00\u952E\u66F4\u65B0\u5BFC\u81F4\u7684\u7CFB\u7EDF\u95EE\u9898\uFF0C\u6B22\u8FCE\u524D\u5F80\u793E\u533A\u53CD\u9988\uFF0C\u8BF7\u505A\u597D\u7CFB\u7EDF\u5907\u4EFD\uFF01 ")):(n(),a("div",Bu,Du))])]),_:1},8,["modelValue"]),s(g,{width:"300px",modelValue:l(u).threeVisible,"onUpdate:modelValue":o[6]||(o[6]=e=>l(u).threeVisible=e),"append-to-body":"",title:"\u66F4\u65B0\u4E2D",center:"","close-on-click-modal":!1,"close-on-press-escape":!1},{default:i(()=>[t("div",gu,[y(t("div",yu,null,512),[[h,l(u).loading]])])]),_:1},8,["modelValue"])])}}});export{de as default};
