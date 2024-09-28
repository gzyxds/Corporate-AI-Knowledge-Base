import{T as D,U as V,I as $}from"./element-plus.9458fb52.js";import{f as h,e as I}from"./index.d9c09296.js";import{d as N,s as O,r as v,b as U,w as q,o as d,c as p,T as F,a8 as T,a6 as E,K as y,G as z,aj as G,ak as H,H as J,u,j as w,J as K,a as f,S as M,R as Q,P as W}from"./@vue.7946e41b.js";const X={class:"upload"},Y={class:"file-list p-4"},Z={class:"flex-1"},ae=N({__name:"index",props:{files:{type:Array,default:()=>[]},type:{type:String,default:"image"},multiple:{type:Boolean,default:!0},limit:{type:Number,default:10},data:{type:Object,default:()=>({})},name:{type:String,default:"file"},header:{type:Object,default:()=>({})},showFileList:{type:Boolean,default:!1}},emits:["end","change","error","success","update:files"],setup(i,{emit:_}){const l=i,n=_,g=O(),r=v(!1),s=v([]),b=()=>{r.value=!0},m=e=>{n("change",e),s.value.length==0&&n("end")},k=(e,t)=>{m(t),n("success",e),n("update:files",[...l.files,{url:e.uri,name:e.name}]);const a=s.value.indexOf(t);!l.showFileList&&s.value.splice(a,1)},x=e=>{const t=s.value.indexOf(e),a=l.files;a.splice(t,1),n("update:files",[...a])},A=(e,t)=>{var a;m(t),h.msgError(`${t.name}\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25`),(a=g.value)==null||a.abort(t),r.value=!1,n("error",t)},B=()=>{h.msgError(`\u8D85\u51FA\u4E0A\u4F20\u4E0A\u9650${l.limit}\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20`)},C=()=>{s.value=[],r.value=!1},R=U(()=>{switch(l.type){case"image":return".jpg,.png,.gif,.jpeg";case"video":return".wmv,.avi,.mpg,.mpeg,.3gp,.mov,.mp4,.flv,.rmvb,.mkv";case"audio":return"*";default:return"*"}}),S=e=>I(l.type,{file:e.file,name:l.name,header:l.header,data:l.data},t=>{const a=t;a.percent=t.total>0?t.loaded/t.total*100:0,e.onProgress(a)});return q(()=>l.files,e=>{!s.value.length&&(e==null?void 0:e.length)&&(s.value=[...e])},{immediate:!0}),(e,t)=>{const a=D,L=V,P=$;return d(),p("div",X,[F(a,J({"file-list":u(s),"onUpdate:fileList":t[0]||(t[0]=o=>w(s)?s.value=o:null),ref_key:"uploadRefs",ref:g},e.$attrs,{multiple:i.multiple,limit:i.limit,"show-file-list":i.showFileList,"on-progress":b,"on-success":k,"on-exceed":B,"on-error":A,accept:u(R),"on-change":m,"on-remove":x,"http-request":S}),T({_:2},[E(e.$slots,(o,c)=>({name:c,fn:y(j=>[z(e.$slots,c,G(H(j)))])}))]),1040,["file-list","multiple","limit","show-file-list","accept"]),!i.showFileList&&u(s).length?(d(),K(P,{key:0,modelValue:u(r),"onUpdate:modelValue":t[1]||(t[1]=o=>w(r)?r.value=o:null),title:"\u4E0A\u4F20\u8FDB\u5EA6","close-on-click-modal":!1,width:"500px",modal:!1,onClose:C},{default:y(()=>[f("div",Y,[(d(!0),p(M,null,E(u(s),(o,c)=>(d(),p("div",{key:c,class:"mb-5"},[f("div",null,Q(o.name),1),f("div",Z,[F(L,{percentage:parseInt(String(o.percentage))},null,8,["percentage"])])]))),128))])]),_:1},8,["modelValue"])):W("",!0)])}}});export{ae as _};
