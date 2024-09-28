import{_ as J}from"./index.vue.403e5f16.js";import{E as K}from"./el-upload.397b9616.js";import{f as b,v as M,E as O}from"./entry.df16adda.js";import{E as y}from"./el-scrollbar.f4d658ff.js";import{_ as W}from"./index.34adc8c7.js";import"./el-progress.598034ee.js";import{k as Y,a as h,s as k,l as Z,I as n,$ as C,a0 as p,K as o,a2 as l,W as G,u as c,ae as H,a4 as v,J as i,Z as E,ap as F,Y as D,r as Q,_ as X,a3 as ee,an as te,ao as ae}from"./swiper-vue.397ea2eb.js";import{r as I,a as oe,b as se}from"./fileReader.15642605.js";import{a as ne}from"./split.f6195c48.js";import{isSameFile as ce}from"./hook.d7b4f5cd.js";import{_ as re}from"./_plugin-vue_export-helper.c27b6911.js";import"./cloneDeep.8862a013.js";import"./_baseClone.000a3762.js";import"./_getTag.af7a9d71.js";import"./isEqual.b93d80e7.js";import"./el-dialog.64289190.js";import"./use-dialog.825901d5.js";import"./refs.2a024717.js";import"./___vite-browser-external.34bf2328.js";const le=m=>(te("data-v-03b3dde9"),m=m(),ae(),m),ie={class:"flex-1 sm:flex min-h-0 mt-4 bg-white rounded sm:h-[500px]"},de={class:"sm:flex-1 sm:h-full"},pe={class:"p-4"},me={class:"el-upload__text"},_e=le(()=>o("em",null," 选择文件 ",-1)),ue={class:"el-upload__text"},fe={key:0,class:"h-full flex-1"},he=["onClick"],ve={class:"ml-2 line-clamp-1 flex-1 min-w-0"},xe={key:0,class:"sm:flex-[1.5]"},we={class:"sm:h-full min-h-[0px] max-h-[300px] bg-white"},ge={class:"p-4"},be={class:"flex-auto text-sm"},ye={class:"my-2 whitespace-pre-wrap break-all",contenteditable:"true"},ke=Y({__name:"addData",emits:["success","close"],setup(m,{expose:S,emit:B}){const $=B,x=[".txt",".docx",".pdf",".md"].join(", "),s=h([]),w=k(),d=h(0),R=Z(()=>{const e=s.value[d.value];return e?e.data:[]}),g=k(),u=h(!1),N=async e=>{const a=e.name.substring(e.name.lastIndexOf(".")+1);let t="";switch(a){case"md":case"txt":t=await I(e);break;case"pdf":t=await se(e);break;case"doc":case"docx":t=await oe(e);break;default:t=await I(e);break}return t},V=async({raw:e})=>{var a;try{if(e){u.value=!0,await ce(e,s.value);const t=await N(e);if(!t)throw"解析结果为空，已自动忽略";const f=Q([{question:t,answer:"",source:e.name}]);e.data=f,s.value.push(e)}}catch(t){b.msgError(t)}finally{u.value=!1,(a=w.value)==null||a.clearFiles()}},A=e=>{s.value.splice(e,1),e===d.value&&(d.value=0)},L=async()=>{await b.confirm("该任务无法终止！导入后会自动调用大模型生成问答对，如果余额不足，未完成的任务会被暂停，确定保存？");const e=s.value.reduce((a,t)=>(a=a.concat(t.data),a),[]);await ne({documents:e}),$("success")};return S({open:()=>{g.value.open()}}),(e,a)=>{const t=J,f=K,P=O,q=y,z=y,T=W,U=M;return n(),C(T,{ref_key:"popRef",ref:g,title:"新增拆分数据",async:"",width:"900px",onConfirm:L,onClose:a[0]||(a[0]=_=>e.$emit("close"))},{default:p(()=>[o("div",ie,[o("div",de,[l(q,null,{default:p(()=>[o("div",pe,[G((n(),C(f,{ref_key:"uploadRef",ref:w,drag:"","on-change":V,"auto-upload":!1,"show-file-list":!1,accept:c(x)},{default:p(()=>[o("div",me,[l(t,{name:"el-icon-Upload"}),H(" 拖拽文件至此，或点击"),_e]),o("div",ue,"支持 "+v(c(x))+" 文件",1)]),_:1},8,["accept"])),[[U,c(u)]]),c(s).length?(n(),i("div",fe,[(n(!0),i(E,null,F(c(s),(_,r)=>(n(),i("div",{key:r,class:X(["card-wrap flex items-center p-2 rounded-lg mt-4 cursor-pointer bg-page transition duration-300 hover:bg-primary-light-9 hover:text-primary",{"bg-primary-light-9":c(d)===r}]),onClick:j=>d.value=r},[l(t,{name:"el-icon-Folder",size:16,color:"#FFC94D"}),o("div",ve,v(_.name),1),l(P,{class:"delete-btn opacity-0",link:"",type:"primary",onClick:ee(j=>A(r),["stop"])},{icon:p(()=>[l(t,{name:"el-icon-Delete"})]),_:2},1032,["onClick"])],10,he))),128))])):D("",!0)])]),_:1})]),c(s).length?(n(),i("div",xe,[l(z,null,{default:p(()=>[o("div",we,[o("div",ge,[o("div",be,[(n(!0),i(E,null,F(c(R),(_,r)=>(n(),i("div",{key:r,class:"bg-page mt-2 p-[10px] card-wrap rounded"},[o("div",ye,v(_.question),1)]))),128))])])])]),_:1})])):D("",!0)])]),_:1},512)}}});const Me=re(ke,[["__scopeId","data-v-03b3dde9"]]);export{Me as default};
