import{_ as y}from"./index.c3587517.js";import{a3 as h,J as k,K as x,L as N,D as R,C as H,w as U,F as I}from"./element-plus.9458fb52.js";import{g as J,s as K}from"./h5.5231b35e.js";import{d as B,_ as L,ag as F,o as p,c as S,T as e,K as t,u,a as i,Q as l,J as m,P as T,R as q,L as g}from"./@vue.7946e41b.js";import"./vue-drag-resize.1871ee6b.js";import"./@element-plus.7d8ec931.js";import"./lodash-es.0dcbbec0.js";import"./dayjs.34e6308d.js";import"./@iktakahiro.37fa5b2b.js";import"./katex.dbdd07a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.d9c09296.js";import"./@vueuse.927bd09a.js";import"./lodash.4744e7a5.js";import"./axios.978f8ca9.js";import"./vue-router.c4b4a189.js";import"./pinia.83a6d4dd.js";import"./vue-demi.b3a9cad9.js";import"./css-color-function.f0ee4d0a.js";import"./color.12f7d1c1.js";import"./clone.65ca8e73.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.6eeb6e12.js";import"./ms.a9ae1d6d.js";import"./nprogress.7152acad.js";import"./vue-clipboard3.fa3fc3ae.js";import"./clipboard.f56f94fd.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.4f6161a5.js";import"./@highlightjs.932a13cd.js";const G=i("div",{class:"form-tips"},"\u72B6\u6001\u4E3A\u5173\u95ED\u65F6\uFF0C\u5C06\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",-1),P={class:"w-80"},Q={class:"flex-1 min-w-0 break-words"},j=B({name:"h5Config"}),Rt=B({...j,setup(z){const o=L({status:0,page_status:0,page_url:"",url:""}),_=async()=>{const d=await J();for(const a in o)o[a]=d[a]},C=async()=>{await K(o),_()};return _(),(d,a)=>{const D=h,c=N,s=k,f=x,n=R,b=H,E=U,v=I,w=y,V=F("copy"),A=F("perms");return p(),S("div",null,[e(c,{class:"!border-none",shadow:"never"},{default:t(()=>[e(D,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1AH5\u8BBE\u7F6E",closable:!1,"show-icon":""})]),_:1}),e(c,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[e(v,{ref:"formRef",model:u(o),"label-width":"120px"},{default:t(()=>[e(n,{label:"\u6E20\u9053\u72B6\u6001",required:"",prop:"status"},{default:t(()=>[i("div",null,[e(f,{modelValue:u(o).status,"onUpdate:modelValue":a[0]||(a[0]=r=>u(o).status=r)},{default:t(()=>[e(s,{label:1},{default:t(()=>[l("\u5F00\u542F")]),_:1}),e(s,{label:0},{default:t(()=>[l("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"]),G])]),_:1}),e(n,{label:"\u5173\u95ED\u540E\u8BBF\u95EE\u9875\u9762",prop:"page_status"},{default:t(()=>[e(f,{modelValue:u(o).page_status,"onUpdate:modelValue":a[1]||(a[1]=r=>u(o).page_status=r)},{default:t(()=>[e(s,{label:0},{default:t(()=>[l("\u7A7A\u9875\u9762")]),_:1}),e(s,{label:1},{default:t(()=>[l("\u81EA\u5B9A\u4E49\u94FE\u63A5")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(o).page_status==1?(p(),m(n,{key:0,label:"",prop:"page_url"},{default:t(()=>[i("div",P,[e(b,{modelValue:u(o).page_url,"onUpdate:modelValue":a[2]||(a[2]=r=>u(o).page_url=r),placeholder:"\u8BF7\u8F93\u5165\u5B8C\u6574\u7684url"},null,8,["modelValue"])])]),_:1})):T("",!0),e(n,{label:"\u8BBF\u95EE\u94FE\u63A5"},{default:t(()=>[i("div",Q,[l(q(u(o).url)+" ",1),g((p(),m(E,null,{default:t(()=>[l("\u590D\u5236")]),_:1})),[[V,u(o).url]])])]),_:1})]),_:1},8,["model"])]),_:1}),g((p(),m(w,null,{default:t(()=>[e(E,{type:"primary",onClick:C},{default:t(()=>[l("\u4FDD\u5B58")]),_:1})]),_:1})),[[A,["channel.web_page_setting/setConfig"]]])])}}});export{Rt as default};
