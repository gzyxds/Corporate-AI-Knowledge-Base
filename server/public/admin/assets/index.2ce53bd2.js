import{k as Te,p as je,q as Le,r as Pe,Q as Me,E as Ue,G as Ne,H as $e,B as Ge,M as We,R as Ye,N as qe,O as Ke,w as Qe,C as Ze,a as Je}from"./element-plus.9458fb52.js";import{_ as Oe}from"./index.vue_vue_type_script_setup_true_lang.bc724294.js";import{_ as Xe}from"./index.3b915137.js";import{r as S,f as we,d as He,b as et}from"./index.d9c09296.js";import{P as tt}from"./index.9f63869e.js";import{_ as lt}from"./index.vue_vue_type_script_setup_true_lang.04d48163.js";import{_ as nt}from"./index.vue_vue_type_script_setup_true_lang.f8366df7.js";import{s as Fe,r as A,_ as at,d as st,a2 as Ee,b as it,w as se,i as ot,L as ut,u as e,o,c as _,a as s,T as l,K as n,J as b,Q as c,P as m,Y,S as V,a6 as q,j as P,a7 as dt,M as be,R as ie,A as ct,Z as rt,bk as ft,bj as mt}from"./@vue.7946e41b.js";import{u as pt}from"./usePaging.9ff9bac2.js";import{_ as oe,a as _t}from"./preview.vue_vue_type_script_setup_true_lang.fdc93781.js";import{_ as vt}from"./vue-drag-resize.1871ee6b.js";const ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAACJElEQVRYR+2YMWsUURSFz3m7s+nskjUIQSutbMRi7WzUVjSadMHCbVLkByjmLygaCVYWRqMEUhkFS9Gg0cJfYCPZjYUQFbPs+I7c2R1Q2ZjZfRNYYS4MAzPv3vnmvDvL3kMA2Hl5/CjLI9ckf4ZwY3Zt15C+gfwIao3So0rt3XsJtPUk9M/cAW6y9ap2DIyfAjgCwANwGeoYiEFtk/5e5CvXeer1D2neATcGgiTZM4+t9RNLEKcBtAFEGeBsiRWzl7EoSXo+8rV9gWc/fDc1B1VSEoEnDpj0KTB33tS26DGaEezvZQZpRxmODyoT5+vwBwS3zeTcT4yjTdZNJEiPSykk1bjZX6HeD/WQJ1zUApgq2w+etcsniBuAVlH9vELOx6Yo1VywgkmTB4X1kEGGhyAtg/Ecq3NNqnknDwVTrNBaactEts88OHs5b8Bw/Tof4M+kr4WrwwhoL9n5uRPWhxWwsxPEl+EGNMacP5I8evCPGgVgqKSFgoWCoQqE5hc9WCgYqkBoftGDeSiYz1/+UJLe+foftvh2A2B1fwQIrapkaFoDcK4PVyH0qVnyU4fjGdW4NQ2WlgDE5hLkMoJmQdh9zW9Dk59K5lhtLjyE01TX/jDILP5MGEbvbFPOJroIXvc5PjvTBbx7GM4vAjjd9WdSc2g/IPaqaTv5Aq58haP1TSb2Au20GGErvgTxIqiTAA7tVSnn+2Z9vAXdCsa4bD6Nsf0C/gYA5PMzcW0AAAAASUVORK5CYII=";function Ct(a){return S.post({url:"/file/addCate",params:a})}function yt(a){return S.post({url:"/file/editCate",params:a})}function gt(a){return S.post({url:"/file/delCate",params:a})}function kt(a){return S.get({url:"/file/listCate",params:a})}function Et(a){return S.get({url:"/file/lists",params:a})}function bt(a){return S.post({url:"/file/delete",params:a})}function wt(a){return S.post({url:"/file/move",params:a})}function Ft(a){return S.post({url:"/file/rename",params:a})}function At(a){const z=Fe(),x=A([]),g=A(""),E=async()=>{const f=await kt({page_type:0,type:a.value}),w=[{name:"\u5168\u90E8",id:""},{name:"\u672A\u5206\u7EC4",id:0}];x.value=f.lists,x.value.unshift(...w),setTimeout(()=>{var h;(h=z.value)==null||h.setCurrentKey(g.value)},0)};return{treeRef:z,cateId:g,cateLists:x,handleAddCate:async f=>{await Ct({type:a.value,name:f,pid:0}),E()},handleEditCate:async(f,w)=>{await yt({id:w,name:f}),E()},handleDeleteCate:async f=>{await we.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await gt({id:f}),g.value="",E()},getCateLists:E,handleCatSelect:f=>{g.value=f.id}}}function xt(a,z,x,g,E){const D=Fe(),M=A("normal"),R=A(0),r=A([]),f=A(!1),w=A(!1),h=at({name:"",type:z,cid:a,...E==null?void 0:E.value}),{pager:I,getLists:Q,resetPage:Z}=pt({fetchFun:Et,params:h,firstLoading:!0,size:g.value}),T=()=>{Q()},J=()=>{Z()},O=i=>!!r.value.find(u=>u.id==i),X=async i=>{await we.confirm("\u786E\u8BA4\u5220\u9664\u540E\uFF0C\u672C\u5730\u6216\u4E91\u5B58\u50A8\u6587\u4EF6\u4E5F\u5C06\u540C\u6B65\u5220\u9664\uFF0C\u5982\u6587\u4EF6\u5DF2\u88AB\u4F7F\u7528\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01");const u=i||r.value.map(F=>F.id);await bt({ids:u}),T(),k()},j=async()=>{const i=r.value.map(u=>u.id);await wt({ids:i,cid:R.value}),R.value=0,T(),k()},H=i=>{const u=r.value.findIndex(F=>F.id==i.id);if(u!=-1){r.value.splice(u,1);return}if(r.value.length==x.value){if(x.value==1){r.value=[],r.value.push(i);return}Te.warning("\u5DF2\u8FBE\u5230\u9009\u62E9\u4E0A\u9650");return}r.value.push(i)},k=()=>{r.value=[]};return{listShowType:M,tableRef:D,moveId:R,pager:I,fileParams:h,select:r,isCheckAll:f,isIndeterminate:w,getFileList:T,refresh:J,batchFileDelete:X,batchFileMove:j,selectFile:H,isSelect:O,clearSelect:k,cancelSelete:i=>{r.value=r.value.filter(u=>u.id!=i)},selectAll:i=>{var u;if(w.value=!1,(u=D.value)==null||u.toggleAllSelection(),i){r.value=[...I.lists];return}k()},handleFileRename:async(i,u)=>{await Ft({id:u,name:i}),T()}}}const K=a=>(ft("data-v-a087ca58"),a=a(),mt(),a),St={class:"material"},Dt={class:"material__left"},Bt={class:"flex-1 min-h-0"},Vt={class:"material-left__content pt-4 p-b-4"},zt={class:"flex flex-1 items-center min-w-0 pr-4"},Rt=K(()=>s("img",{class:"w-[20px] h-[16px] mr-3",src:ht},null,-1)),It={class:"flex-1 truncate mr-2"},Tt=K(()=>s("span",{class:"muted m-r-10"},"\xB7\xB7\xB7",-1)),jt=["onClick"],Lt={class:"flex justify-center p-2 border-t border-br"},Pt={class:"material__center flex flex-col"},Mt={class:"operate-btn flex"},Ut={class:"flex-1 flex"},Nt=K(()=>s("span",{class:"mr-5"},"\u79FB\u52A8\u6587\u4EF6\u81F3",-1)),$t={class:"flex items-center ml-2"},Gt={key:0,class:"mt-3"},Wt={class:"material-center__content flex flex-col flex-1 mb-1 min-h-0"},Yt={class:"file-list flex flex-wrap mt-4"},qt={key:0,class:"item-selected"},Kt={class:"operation-btns flex items-center"},Qt={class:"inline-block"},Zt={class:"inline-block"},Jt={class:"inline-block"},Ot={key:2,class:"flex flex-1 justify-center items-center"},Xt={class:"material-center__footer flex justify-between items-center mt-2"},Ht={class:"flex"},el={class:"mr-3"},tl=K(()=>s("span",{class:"mr-5"},"\u79FB\u52A8\u6587\u4EF6\u81F3",-1)),ll={key:0,class:"material__right"},nl={class:"flex justify-between p-2 flex-wrap"},al={class:"sm flex items-center"},sl={key:0},il={class:"flex-1 min-h-0"},ol={class:"select-lists flex flex-col p-t-3"},ul={class:"select-item"},dl=st({__name:"index",props:{fileSize:{type:String,default:"100px"},limit:{type:Number,default:1},type:{type:String,default:"image"},mode:{type:String,default:"picker"},pageSize:{type:Number,default:15},data:{type:Object,default:()=>({})}},emits:["change"],setup(a,{expose:z,emit:x}){const g=a,E=x,{limit:D}=Ee(g),M=it(()=>{switch(g.type){case"image":return 10;case"video":return 20;case"file":return 30;case"audio":return 40;default:return 0}}),R=ct("visible"),r=A(""),f=A(!1),{treeRef:w,cateId:h,cateLists:I,handleAddCate:Q,handleEditCate:Z,handleDeleteCate:T,getCateLists:J,handleCatSelect:O}=At(M),{pageSize:X,data:j}=Ee(g),{tableRef:H,listShowType:k,moveId:B,pager:C,fileParams:N,select:i,isCheckAll:u,isIndeterminate:F,getFileList:ue,refresh:L,batchFileDelete:$,batchFileMove:de,selectFile:ee,isSelect:ce,clearSelect:re,cancelSelete:Ae,selectAll:fe,handleFileRename:me}=xt(h,M,D,X,j),pe=async()=>{var y;await J(),(y=w.value)==null||y.setCurrentKey(h.value),ue()},te=y=>{r.value=y,f.value=!0};return se(R,async y=>{y&&pe()},{immediate:!0}),se(h,()=>{N.name="",L()}),se(i,y=>{if(E("change",y),y.length==C.lists.length&&y.length!==0){F.value=!1,u.value=!0;return}y.length>0?F.value=!0:(u.value=!1,F.value=!1)},{deep:!0}),ot(()=>{g.mode=="page"&&pe()}),z({clearSelect:re}),(y,d)=>{const _e=He,ve=je,G=nt,xe=Le,Se=Pe,De=Me,le=Ue,p=Qe,ne=lt,he=Ne,Ce=$e,ye=tt,W=et,Be=Ze,ge=Je,ae=Ge,ke=Xe,U=We,Ve=Ye,ze=qe,Re=Oe,Ie=Ke;return ut((o(),_("div",St,[s("div",Dt,[s("div",Bt,[l(le,null,{default:n(()=>[s("div",Vt,[l(De,{ref_key:"treeRef",ref:w,"node-key":"id",data:e(I),"empty-text":"''","highlight-current":!0,"expand-on-click-node":!1,"current-node-key":e(h),onNodeClick:e(O)},{default:n(({data:t})=>[s("div",zt,[Rt,s("span",It,[l(_e,{content:t.name},null,8,["content"])]),t.id>0?(o(),b(Se,{key:0,"hide-on-click":!1},{dropdown:n(()=>[l(xe,null,{default:n(()=>[l(G,{onConfirm:v=>e(Z)(v,t.id),size:"default",value:t.name,width:"400px",limit:20,"show-limit":"",teleported:""},{default:n(()=>[s("div",null,[l(ve,null,{default:n(()=>[c(" \u547D\u540D\u5206\u7EC4 ")]),_:1})])]),_:2},1032,["onConfirm","value"]),s("div",{onClick:v=>e(T)(t.id)},[l(ve,null,{default:n(()=>[c("\u5220\u9664\u5206\u7EC4")]),_:1})],8,jt)]),_:2},1024)]),default:n(()=>[Tt]),_:2},1024)):m("",!0)])]),_:1},8,["data","current-node-key","onNodeClick"])])]),_:1})]),s("div",Lt,[l(G,{onConfirm:e(Q),size:"default",width:"400px",limit:20,"show-limit":"",teleported:""},{default:n(()=>[l(p,null,{default:n(()=>[c(" \u6DFB\u52A0\u5206\u7EC4 ")]),_:1})]),_:1},8,["onConfirm"])])]),s("div",Pt,[s("div",Mt,[s("div",Ut,[a.type=="image"?(o(),b(ne,{key:0,class:"mr-3",data:{cid:e(h),...e(j)},type:a.type,"show-file-list":!1,onEnd:e(L)},{default:n(()=>[l(p,{type:"primary"},{default:n(()=>[c("\u672C\u5730\u4E0A\u4F20")]),_:1})]),_:1},8,["data","type","onEnd"])):m("",!0),a.type=="video"?(o(),b(ne,{key:1,class:"mr-3",data:{cid:e(h),...e(j)},type:a.type,"show-file-list":!1,onEnd:e(L)},{default:n(()=>[l(p,{type:"primary"},{default:n(()=>[c("\u672C\u5730\u4E0A\u4F20")]),_:1})]),_:1},8,["data","type","onEnd"])):m("",!0),a.type=="audio"?(o(),b(ne,{key:2,class:"mr-3",type:"audio",data:{cid:e(h),...e(j)},"show-file-list":!1,onEnd:e(L)},{default:n(()=>[l(p,{type:"primary"},{default:n(()=>[c("\u672C\u5730\u4E0A\u4F20")]),_:1})]),_:1},8,["data","onEnd"])):m("",!0),a.mode=="page"?(o(),b(p,{key:3,disabled:!e(i).length,onClick:d[0]||(d[0]=Y(t=>e($)(),["stop"]))},{default:n(()=>[c(" \u5220\u9664 ")]),_:1},8,["disabled"])):m("",!0),a.mode=="page"?(o(),b(ye,{key:4,class:"ml-3",onConfirm:e(de),disabled:!e(i).length,title:"\u79FB\u52A8\u6587\u4EF6"},{trigger:n(()=>[l(p,{disabled:!e(i).length},{default:n(()=>[c("\u79FB\u52A8")]),_:1},8,["disabled"])]),default:n(()=>[s("div",null,[Nt,l(Ce,{modelValue:e(B),"onUpdate:modelValue":d[1]||(d[1]=t=>P(B)?B.value=t:null),placeholder:"\u8BF7\u9009\u62E9"},{default:n(()=>[(o(!0),_(V,null,q(e(I),t=>(o(),_(V,{key:t.id},[t.id!==""?(o(),b(he,{key:0,label:t.name,value:t.id},null,8,["label","value"])):m("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])):m("",!0)]),l(Be,{class:"w-60",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",modelValue:e(N).name,"onUpdate:modelValue":d[2]||(d[2]=t=>e(N).name=t),onKeyup:dt(e(L),["enter"])},{append:n(()=>[l(p,{onClick:e(L)},{icon:n(()=>[l(W,{name:"el-icon-Search"})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeyup"]),s("div",$t,[l(ge,{content:"\u5217\u8868\u89C6\u56FE",placement:"top"},{default:n(()=>[s("div",{class:be(["list-icon",{select:e(k)=="table"}]),onClick:d[3]||(d[3]=t=>k.value="table")},[l(W,{name:"local-icon-list-2",size:18})],2)]),_:1}),l(ge,{content:"\u5E73\u94FA\u89C6\u56FE",placement:"top"},{default:n(()=>[s("div",{class:be(["list-icon",{select:e(k)=="normal"}]),onClick:d[4]||(d[4]=t=>k.value="normal")},[l(W,{name:"el-icon-Menu",size:18})],2)]),_:1})])]),a.mode=="page"?(o(),_("div",Gt,[l(ae,{disabled:!e(C).lists.length,modelValue:e(u),"onUpdate:modelValue":d[5]||(d[5]=t=>P(u)?u.value=t:null),onChange:e(fe),indeterminate:e(F)},{default:n(()=>[c(" \u5F53\u9875\u5168\u9009 ")]),_:1},8,["disabled","modelValue","onChange","indeterminate"])])):m("",!0),s("div",Wt,[e(C).lists.length&&e(k)=="normal"?(o(),b(le,{key:0},{default:n(()=>[s("ul",Yt,[(o(!0),_(V,null,q(e(C).lists,t=>(o(),_("li",{class:"file-item-wrap",key:t.id,style:rt({width:a.fileSize})},[l(ke,{onClose:v=>e($)([t.id])},{default:n(()=>[l(oe,{uri:t.uri,"file-size":a.fileSize,type:a.type,onClick:v=>e(ee)(t)},{default:n(()=>[e(ce)(t.id)?(o(),_("div",qt,[l(W,{size:24,name:"el-icon-Check",color:"#fff"})])):m("",!0)]),_:2},1032,["uri","file-size","type","onClick"])]),_:2},1032,["onClose"]),l(_e,{class:"mt-1",content:t.name},null,8,["content"]),s("div",Kt,[l(G,{onConfirm:v=>e(me)(v,t.id),size:"default",value:t.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:n(()=>[l(p,{type:"primary",link:""},{default:n(()=>[c(" \u91CD\u547D\u540D ")]),_:1})]),_:2},1032,["onConfirm","value"]),l(p,{type:"primary",link:"",onClick:v=>te(t.uri)},{default:n(()=>[c(" \u67E5\u770B ")]),_:2},1032,["onClick"])])],4))),128))])]),_:1})):m("",!0),e(k)=="table"?(o(),b(ze,{key:1,ref_key:"tableRef",ref:H,class:"mt-4",data:e(C).lists,width:"100%",height:"100%",size:"large",onRowClick:e(ee)},{default:n(()=>[l(U,{width:"55"},{default:n(({row:t})=>[l(ae,{modelValue:e(ce)(t.id),onChange:v=>e(ee)(t)},null,8,["modelValue","onChange"])]),_:1}),l(U,{label:"\u56FE\u7247",width:"100"},{default:n(({row:t})=>[l(oe,{uri:t.uri,"file-size":"50px",type:a.type},null,8,["uri","type"])]),_:1}),l(U,{label:"\u540D\u79F0","min-width":"100","show-overflow-tooltip":""},{default:n(({row:t})=>[l(Ve,{onClick:Y(v=>te(t.uri),["stop"]),underline:!1},{default:n(()=>[c(ie(t.name),1)]),_:2},1032,["onClick"])]),_:1}),l(U,{prop:"create_time",label:"\u4E0A\u4F20\u65F6\u95F4","min-width":"100"}),l(U,{label:"\u64CD\u4F5C",width:"150",fixed:"right"},{default:n(({row:t})=>[s("div",Qt,[l(G,{onConfirm:v=>e(me)(v,t.id),size:"default",value:t.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:n(()=>[l(p,{type:"primary",link:""},{default:n(()=>[c(" \u91CD\u547D\u540D ")]),_:1})]),_:2},1032,["onConfirm","value"])]),s("div",Zt,[l(p,{type:"primary",link:"",onClick:Y(v=>te(t.uri),["stop"])},{default:n(()=>[c(" \u67E5\u770B ")]),_:2},1032,["onClick"])]),s("div",Jt,[l(p,{type:"primary",link:"",onClick:Y(v=>e($)([t.id]),["stop"])},{default:n(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data","onRowClick"])):m("",!0),!e(C).loading&&!e(C).lists.length?(o(),_("div",Ot," \u6682\u65E0\u6570\u636E~ ")):m("",!0)]),s("div",Xt,[s("div",Ht,[a.mode=="page"?(o(),_(V,{key:0},[s("span",el,[l(ae,{disabled:!e(C).lists.length,modelValue:e(u),"onUpdate:modelValue":d[6]||(d[6]=t=>P(u)?u.value=t:null),onChange:e(fe),indeterminate:e(F)},{default:n(()=>[c(" \u5F53\u9875\u5168\u9009 ")]),_:1},8,["disabled","modelValue","onChange","indeterminate"])]),l(p,{disabled:!e(i).length,onClick:d[7]||(d[7]=t=>e($)())},{default:n(()=>[c(" \u5220\u9664 ")]),_:1},8,["disabled"]),l(ye,{class:"ml-3 inline",onConfirm:e(de),disabled:!e(i).length,title:"\u79FB\u52A8\u6587\u4EF6"},{trigger:n(()=>[l(p,{disabled:!e(i).length},{default:n(()=>[c("\u79FB\u52A8")]),_:1},8,["disabled"])]),default:n(()=>[s("div",null,[tl,l(Ce,{modelValue:e(B),"onUpdate:modelValue":d[8]||(d[8]=t=>P(B)?B.value=t:null),placeholder:"\u8BF7\u9009\u62E9"},{default:n(()=>[(o(!0),_(V,null,q(e(I),t=>(o(),_(V,{key:t.id},[t.id!==""?(o(),b(he,{key:0,label:t.name,value:t.id},null,8,["label","value"])):m("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])],64)):m("",!0)]),l(Re,{modelValue:e(C),"onUpdate:modelValue":d[9]||(d[9]=t=>P(C)?C.value=t:null),onChange:e(ue),layout:"total, prev, pager, next, jumper"},null,8,["modelValue","onChange"])])]),a.mode=="picker"?(o(),_("div",ll,[s("div",nl,[s("div",al,[c(" \u5DF2\u9009\u62E9 "+ie(e(i).length)+" ",1),e(D)?(o(),_("span",sl,"/"+ie(e(D)),1)):m("",!0)]),l(p,{type:"primary",link:"",onClick:e(re)},{default:n(()=>[c("\u6E05\u7A7A")]),_:1},8,["onClick"])]),s("div",il,[l(le,{class:"ls-scrollbar"},{default:n(()=>[s("ul",ol,[(o(!0),_(V,null,q(e(i),t=>(o(),_("li",{class:"mb-4",key:t.id},[s("div",ul,[l(ke,{onClose:v=>e(Ae)(t.id)},{default:n(()=>[l(oe,{uri:t.uri,"file-size":"100px",type:a.type},null,8,["uri","type"])]),_:2},1032,["onClose"])])]))),128))])]),_:1})])])):m("",!0),l(_t,{modelValue:e(f),"onUpdate:modelValue":d[10]||(d[10]=t=>P(f)?f.value=t:null),url:e(r),type:a.type},null,8,["modelValue","url","type"])])),[[Ie,e(C).loading]])}}});const kl=vt(dl,[["__scopeId","data-v-a087ca58"]]);export{kl as _};
