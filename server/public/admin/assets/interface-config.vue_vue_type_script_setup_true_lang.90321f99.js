import{C as w,D as x,M as v,w as b,N as y}from"./element-plus.9458fb52.js";import{g as k}from"./@vueuse.927bd09a.js";import{_ as V}from"./add-menu.vue_vue_type_script_setup_true_lang.f09f6e47.js";import{l as g}from"./lodash.4744e7a5.js";import{d as A,_ as $,o as N,c as T,T as u,K as s,a as n,u as a,Q as m,R as U}from"./@vue.7946e41b.js";const z={class:"pt-[10px]"},M={class:"w-[600px]"},R=n("div",{class:"form-tips"},[m(" \u6253\u5F00\u804A\u5929\u7A97\u53E3\u540E\u4F1A\u4E3B\u52A8\u53D1\u9001\uFF0C\u6DFB\u52A0\u53CC\u4E95\u53F7\u53EF\u6DFB\u52A0\u63D0\u95EE\u793A\u4F8B\uFF0C\u4F8B\u5982\uFF1A#\u5E2E\u6211\u5199\u4E00\u5219\u5173\u4E8Exxx\u7684\u6587\u6848# "),n("br"),m(" \u591A\u4E2A\u95EE\u9898\u8BF7\u7528\u56DE\u8F66\u6362\u884C ")],-1),S={class:"w-[600px]"},I=n("div",{class:"form-tips flex items-center"},"\u4E0D\u586B\u5199\u4E0D\u663E\u793A",-1),K={class:"flex-1 min-w-0"},O={class:"max-w-[600px]"},P={class:"mt-4"},Q=n("div",{class:"form-tips"},"\u7528\u6237\u70B9\u51FB\u83DC\u5355\u540E\uFF0C\u5C06\u56DE\u590D\u5BF9\u5E94\u5185\u5BB9\u3002\u6B64\u7C7B\u6D88\u606F\u4E0D\u6D88\u8017\u4F59\u989D\u3002",-1),X=A({__name:"interface-config",props:{modelValue:{}},emits:["update:modelValue"],setup(B,{emit:F}){const l=k(B,"modelValue",F),t=$({show:!1,type:"add",data:{},index:0}),_=(d="add",e={})=>{var i;t.show=!0,t.type=d,t.data=g.exports.cloneDeep(e),t.index=(i=l.value.menus)==null?void 0:i.indexOf(e)},C=d=>{var e;(e=l.value.menus)==null||e.splice(d,1)},D=d=>{var e,i,p;switch(t.type){case"add":((e=l.value.menus)==null?void 0:e.length)<3&&((i=l.value.menus)==null||i.push(d));break;case"edit":t.index!==-1&&((p=l.value.menus)==null||p.splice(t.index,1,d));break}};return(d,e)=>{const i=w,p=x,E=v,c=b,h=y;return N(),T("div",z,[u(p,{label:"\u6B22\u8FCE\u8BED",prop:"welcome_introducer"},{default:s(()=>[n("div",M,[u(i,{modelValue:a(l).welcome_introducer,"onUpdate:modelValue":e[0]||(e[0]=o=>a(l).welcome_introducer=o),placeholder:"",type:"textarea",autosize:{minRows:8,maxRows:8},clearable:"",resize:"none"},null,8,["modelValue"]),R])]),_:1}),u(p,{label:"\u5E95\u90E8\u6807\u8BC6",prop:"copyright"},{default:s(()=>[n("div",S,[u(i,{modelValue:a(l).copyright,"onUpdate:modelValue":e[1]||(e[1]=o=>a(l).copyright=o),placeholder:"",clearable:""},null,8,["modelValue"]),I])]),_:1}),u(p,{label:"\u83DC\u5355\u8BBE\u7F6E"},{default:s(()=>[n("div",K,[n("div",O,[u(h,{size:"large",data:a(l).menus},{default:s(()=>[u(E,{label:"\u5173\u952E\u8BCD",prop:"keyword","min-width":"120"}),u(E,{label:"\u56DE\u590D\u5185\u5BB9","min-width":"120"},{default:s(({row:o})=>{var r;return[m(U((r=o.images)!=null&&r.length?"\u6587\u5B57+\u56FE\u7247":"\u6587\u5B57"),1)]}),_:1}),u(E,{label:"\u64CD\u4F5C",width:"200"},{default:s(({$index:o,row:r})=>[u(c,{type:"primary",disabled:!1,link:"",onClick:f=>_("view",r)},{default:s(()=>[m(" \u67E5\u770B ")]),_:2},1032,["onClick"]),u(c,{type:"primary",link:"",onClick:f=>_("edit",r)},{default:s(()=>[m(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),u(c,{type:"danger",link:"",onClick:f=>C(o)},{default:s(()=>[m(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),n("div",P,[u(c,{type:"primary",disabled:a(l).menus.length>=3,onClick:e[2]||(e[2]=o=>_())},{default:s(()=>[m(" +\u6DFB\u52A0\u83DC\u5355 ")]),_:1},8,["disabled"])]),Q])]),_:1}),u(V,{show:a(t).show,"onUpdate:show":e[3]||(e[3]=o=>a(t).show=o),type:a(t).type,data:a(t).data,"onUpdate:data":e[4]||(e[4]=o=>a(t).data=o),onConfirm:D},null,8,["show","type","data"])])}}});export{X as _};
