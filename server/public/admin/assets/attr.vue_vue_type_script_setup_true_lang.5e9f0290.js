import{w as P,C as R,D as z,G as oe,H as ue,F as G,B as ne,M as se,b as j,t as de,N as ie,I as me,O as re,J as pe,K as _e,a1 as ce}from"./element-plus.9458fb52.js";import{_ as fe}from"./index.3b915137.js";import{g as S}from"./@vueuse.927bd09a.js";import{_ as ve}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{f as ge,b as Ve}from"./index.d9c09296.js";import{d as I,r as L,_ as be,b as ye,w as K,o as v,c as E,a as V,G as J,T as e,K as l,Q as f,L as Ee,u as o,a7 as Fe,S as M,a6 as Ce,J as T,j as h,R as he,P as O}from"./@vue.7946e41b.js";import{h as xe,g as Be}from"./ai_creation.8718de7e.js";import{u as we}from"./usePaging.9ff9bac2.js";import{k as Ae}from"./lodash-es.0dcbbec0.js";import{D as De}from"./vuedraggable.0170ba82.js";const ke={class:"detail"},$e={class:"my-[10px]"},Ue={class:"flex justify-end mt-5"},Te={class:"dialog-footer"},Le=I({__name:"dialog",props:{modelValue:{default:()=>[]},disabled:{type:Boolean,default:!1},limit:{default:50}},emits:["update:modelValue"],setup(x,{emit:B}){const b=x,w=B,n=L(!1),m=L([]),d=be({name:"",category_id:""}),t=L([]),p=ye({get(){const{lists:s}=g,a=t.value.map(i=>i.id);return s.length?s.every(i=>a.includes(i.id)):!1},set(s){const{lists:a}=g;if(s){for(let i=0;i<a.length;i++){const k=a[i];if(!t.value.map(U=>U.id).includes(k.id)){if(c())return;t.value.push(k)}}console.log(t.value)}else a.forEach(i=>{_(i)})}}),y=s=>t.value.some(a=>a.id==s.id),_=s=>{const a=t.value.findIndex(i=>i.id==s.id);a!=-1&&t.value.splice(a,1)},c=()=>t.value.length>=b.limit?(ge.msgWarning(`\u6700\u591A\u9009\u62E9${b.limit}\u6761`),!0):!1,F=(s,a)=>{if(s){if(c())return;t.value.push(a)}else _(a)},D=()=>{w("update:modelValue",t.value),n.value=!1},{pager:g,getLists:r,resetPage:N}=we({fetchFun:xe,params:d}),q=async()=>{const{lists:s}=await Be({page_type:0});m.value=s};return K(n,s=>{s&&(q(),r())}),K(()=>b.modelValue,s=>{t.value=Ae(s)},{immediate:!0,deep:!0}),(s,a)=>{const i=P,k=R,$=z,U=oe,Q=ue,W=Ve,X=G,H=ne,C=se,Y=j,Z=de,ee=ie,le=ve,te=me,ae=re;return v(),E(M,null,[V("div",{class:"inline-flex",onClick:a[0]||(a[0]=u=>n.value=!0)},[J(s.$slots,"trigger",{},()=>[e(i,{disabled:s.disabled,size:"mini",type:"primary"},{default:l(()=>[f("\u9009\u62E9\u521B\u4F5C")]),_:1},8,["disabled"])])]),e(te,{modelValue:o(n),"onUpdate:modelValue":a[7]||(a[7]=u=>h(n)?n.value=u:null),width:"800px"},{footer:l(()=>[V("div",Te,[e(i,{onClick:a[6]||(a[6]=u=>n.value=!1)},{default:l(()=>[f(" \u53D6\u6D88 ")]),_:1}),e(i,{type:"primary",onClick:D},{default:l(()=>[f(" \u786E\u5B9A ")]),_:1})])]),default:l(()=>[Ee((v(),E("div",ke,[e(X,{ref:"formRef",model:o(d),inline:!0},{default:l(()=>[e($,{label:"\u521B\u4F5C\u540D\u79F0"},{default:l(()=>[e(k,{modelValue:o(d).name,"onUpdate:modelValue":a[1]||(a[1]=u=>o(d).name=u),placeholder:"\u8BF7\u8F93\u5165\u521B\u4F5C\u540D\u79F0",clearable:"",onKeyup:Fe(o(N),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e($,{label:"\u521B\u4F5C\u5206\u7C7B"},{default:l(()=>[e(Q,{modelValue:o(d).category_id,"onUpdate:modelValue":a[2]||(a[2]=u=>o(d).category_id=u)},{default:l(()=>[e(U,{label:"\u5168\u90E8",value:""}),(v(!0),E(M,null,Ce(o(m),(u,A)=>(v(),T(U,{key:A,label:u.name,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e($,{label:""},{default:l(()=>[e(i,{type:"primary",onClick:o(N)},{default:l(()=>[e(W,{name:"el-icon-Search"})]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"]),V("div",$e,[e(H,{modelValue:o(p),"onUpdate:modelValue":a[3]||(a[3]=u=>h(p)?p.value=u:null)},{default:l(()=>[f("\u5168\u9009")]),_:1},8,["modelValue"])]),e(ee,{ef:"table",data:o(g).lists,style:{width:"100%"},height:"370px",size:"mini","row-key":"id"},{default:l(()=>[e(C,{width:"45"},{default:l(({row:u})=>[e(H,{"model-value":y(u),onChange:A=>F(A,u)},null,8,["model-value","onChange"])]),_:1}),e(C,{label:"\u56FE\u6807","min-width":"100"},{default:l(({row:u})=>[e(Y,{src:u.image,class:"w-[44px] h-[44px]"},null,8,["src"])]),_:1}),e(C,{label:"\u6A21\u578B\u540D\u79F0",prop:"name","min-width":"120"}),e(C,{label:"\u6A21\u578B\u63CF\u8FF0",prop:"tips","min-width":"150"}),e(C,{label:"\u6240\u5C5E\u7C7B\u76EE",prop:"category_name","min-width":"120"}),e(C,{label:"\u72B6\u6001","min-width":"100"},{default:l(({row:u})=>[e(Z,{disabled:!0,modelValue:u.status,"onUpdate:modelValue":A=>u.status=A,"active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data"]),V("div",Ue,[e(le,{modelValue:o(g),"onUpdate:modelValue":a[4]||(a[4]=u=>h(g)?g.value=u:null),onChange:a[5]||(a[5]=u=>o(r)())},null,8,["modelValue"])])])),[[ae,o(g).loading]])]),_:1},8,["modelValue"])],64)}}}),Se={class:"flex"},Ie={class:"mr-[20px]"},Ne={class:"text-tx-secondary ml-[20px]"},He={key:0,class:"clear"},Ke={class:"list pt-[20px]"},Me=I({__name:"index",props:{modelValue:{default:()=>[]},disabled:{type:Boolean,default:!1},limit:{default:50}},emits:["update:modelValue"],setup(x,{emit:B}){const n=S(x,"modelValue",B),m=d=>{n.value.splice(d,1)};return(d,t)=>{const p=P,y=j,_=fe;return v(),E("div",null,[V("div",Se,[e(Le,{modelValue:o(n),"onUpdate:modelValue":t[0]||(t[0]=c=>h(n)?n.value=c:null),disabled:d.disabled,limit:d.limit},{default:l(()=>[J(d.$slots,"default")]),_:3},8,["modelValue","disabled","limit"]),V("div",Ie,[V("span",Ne,"\u6700\u591A\u6DFB\u52A0"+he(d.limit)+"\u6761",1)]),o(n).length?(v(),E("div",He,[e(p,{size:"small",type:"text",onClick:t[1]||(t[1]=c=>n.value=[]),disabled:d.disabled},{default:l(()=>[f(" \u6E05\u7A7A ")]),_:1},8,["disabled"])])):O("",!0)]),V("div",Ke,[e(o(De),{class:"flex flex-wrap",modelValue:o(n),"onUpdate:modelValue":t[2]||(t[2]=c=>h(n)?n.value=c:null),animation:"300"},{item:l(({element:c,index:F})=>[(v(),T(_,{key:F,onClose:D=>m(F),class:"w-[64px] h-[64px] cursor-move mr-[10px] mb-[10px]"},{default:l(()=>[e(y,{style:{width:"100%",height:"100%"},fit:"cover",src:c.image},null,8,["src"])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"])])])}}}),Pe={key:0},Re=V("div",{class:"bg-primary-light-9 text-primary px-2 rounded-sm mt-2 text-xs"}," \u7CFB\u7EDF\u63A8\u8350\u89C4\u5219\uFF1A\u6839\u636E\u4F7F\u7528\u4EBA\u6570>\u6392\u5E8F\u503C>\u6DFB\u52A0\u65F6\u95F4\u6765\u663E\u793A ",-1),ze=[Re],el=I({__name:"attr",props:{isHidden:{type:Boolean},content:{}},emits:["update:isHidden"],setup(x,{emit:B}){const b=x,w=B,n=S(b,"isHidden",w),m=S(b,"content",w);return(d,t)=>{const p=pe,y=_e,_=z,c=R,F=ce,D=Me,g=G;return v(),E("div",null,[e(g,{"label-width":"70px",class:"max-w-[400px]"},{default:l(()=>[e(_,{label:"\u662F\u5426\u663E\u793A"},{default:l(()=>[e(y,{modelValue:o(n),"onUpdate:modelValue":t[0]||(t[0]=r=>h(n)?n.value=r:null)},{default:l(()=>[e(p,{label:!1},{default:l(()=>[f("\u663E\u793A")]),_:1}),e(p,{label:!0},{default:l(()=>[f("\u4E0D\u663E\u793A")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(_,{label:"\u663E\u793A\u6837\u5F0F"},{default:l(()=>[e(y,{modelValue:d.content.showType,"onUpdate:modelValue":t[1]||(t[1]=r=>d.content.showType=r)},{default:l(()=>[e(p,{label:1},{default:l(()=>[f("\u5217\u8868\u6A21\u5F0F")]),_:1}),e(p,{label:2},{default:l(()=>[f("\u4E00\u884C2\u4E2A")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(_,{label:"\u6807\u9898\u540D\u79F0"},{default:l(()=>[e(c,{modelValue:o(m).title,"onUpdate:modelValue":t[2]||(t[2]=r=>o(m).title=r),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u9009\u62E9\u6A21\u578B"},{default:l(()=>[e(y,{modelValue:o(m).dataType,"onUpdate:modelValue":t[3]||(t[3]=r=>o(m).dataType=r)},{default:l(()=>[e(p,{label:1},{default:l(()=>[f("\u7CFB\u7EDF\u63A8\u8350")]),_:1}),e(p,{label:2},{default:l(()=>[f("\u624B\u52A8\u9009\u62E9")]),_:1})]),_:1},8,["modelValue"]),o(m).dataType===1?(v(),E("div",Pe,ze)):O("",!0)]),_:1}),o(m).dataType==1?(v(),T(_,{key:0,label:"\u663E\u793A\u6570\u91CF"},{default:l(()=>[e(F,{modelValue:o(m).dataNum,"onUpdate:modelValue":t[4]||(t[4]=r=>o(m).dataNum=r),min:1,max:50,"show-input":""},null,8,["modelValue"])]),_:1})):(v(),T(_,{key:1},{default:l(()=>[e(D,{modelValue:o(m).data,"onUpdate:modelValue":t[5]||(t[5]=r=>o(m).data=r)},null,8,["modelValue"])]),_:1}))]),_:1})])}}});export{el as _};
