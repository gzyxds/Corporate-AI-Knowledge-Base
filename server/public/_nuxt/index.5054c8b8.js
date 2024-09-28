import{E as O,a as Q}from"./el-select.b7a2650e.js";import{_ as X}from"./index.vue.7f39d825.js";import{E as Z}from"./index.17567b0d.js";import{E as K,a as W}from"./el-collapse.1527f898.js";import{f as F,a as Y,bH as ee}from"./entry.dfbfd4fd.js";/* empty css               *//* empty css                     *//* empty css                  */import{P as te}from"./index.e94bc8a7.js";import{u as se}from"./useQuery.ba65a97e.js";import{k as oe,s as le,a as ae,r as ne,l as L,b as de,H as t,I as o,U as S,V as c,S as g,aj as k,u as l,J as a,Z as f,e as D,R as x,T as E,X as h,ag as ie,ah as ce}from"./swiper-vue.2eb6bd20.js";import{_ as re}from"./_plugin-vue_export-helper.c27b6911.js";const R=d=>(ie("data-v-648801bb"),d=d(),ce(),d),pe={class:"flex items-center"},ue={class:"my-1"},_e={class:"leading-6"},me={class:"line-clamp-1 flex-1"},fe={key:0},xe={key:1,class:"text-[#a8abb2]"},he={key:2},ve={key:3},ye={class:"flex-none ml-2 flex items-center"},be=R(()=>a("div",null,null,-1)),ge={class:"model-container"},ke={class:"flex items-center h-[46px] py-2"},we=["src"],Ce={class:"mx-2 leading-[24px] mt-[2px] font-medium"},Me={key:1,class:"bg-[#E3FFF2] text-[#23B571] px-[5px] py-[2px] leading-[20px] rounded-[5px]"},Le=["onClick"],Se={class:"flex items-center"},Ee={class:"mr-2"},Ve={key:0,class:"text-tx-placeholder"},Ae={key:1,class:"text-tx-placeholder"},Be={key:0,class:"flex items-center"},Ne={key:1,class:"flex items-center"},$e=R(()=>a("div",{class:"w-[18px] h-[18px] rounded-full border border-solid border-[#cacbd3]"},null,-1)),Fe=[$e],De=oe({__name:"index",props:{id:{type:[String,Number],default:""},sub_id:{type:[String,Number],default:""},setDefault:{type:Boolean,default:!0},type:{type:String,default:"chatModels"},disabled:{type:Boolean,default:!1}},emits:["update:id","update:sub_id","update:modelConfig"],setup(d,{emit:w}){const v=d,m=F(v,"id",w),p=F(v,"sub_id",w),V=Y(),C=le(),b=ae(-1),i=ne({modelList:[]}),U=L(()=>i.modelList.filter((e,s)=>s%2===0)),j=L(()=>i.modelList.filter((e,s)=>s%2!==0)),u=L(()=>v.type=="chatModels"?i.modelList.flatMap(e=>e.models).find(e=>e.id===p.value)||{}:i.modelList.find(e=>e.id===m.value)||{});de(()=>u.value,e=>{w("update:modelConfig",e)});const{suspense:T}=se(["modelLists"],{queryFn:ee,cacheTime:1e3}),I=async()=>{try{const{data:e}=await T();i.modelList=e[v.type],v.setDefault&&z()}catch(e){console.log("获取聊天模型数据错误=>",e)}},z=()=>{const e=i.modelList.findIndex(y=>y.is_default)||0,s=i.modelList[e].models[0];s&&(m.value=i.modelList[e].id,p.value=s.id,b.value=e)},A=(e,s)=>e===0?s*2:s*2+1,H=(e,s)=>i.modelList[A(e,s)].models.some(y=>y.id===p.value),P=(e,s)=>{m.value=e,p.value=s,C.value.close()};return I(),(e,s)=>{const y=O,q=Q,B=X,N=Z,G=K,J=W;return t(),o("div",pe,[d.type==="vectorModels"?(t(),S(q,{key:0,class:"flex-1",modelValue:l(m),"onUpdate:modelValue":s[0]||(s[0]=n=>D(m)?m.value=n:null),filterable:"",disabled:d.disabled},{default:c(()=>[(t(!0),o(g,null,k(l(i).modelList,n=>(t(),S(y,{class:"!h-fit",value:n.id,key:n.name,label:n.alias},{default:c(()=>[a("div",ue,[a("div",_e,f(n.alias),1)])]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue","disabled"])):x("",!0),d.type==="chatModels"?(t(),o("div",{key:1,class:E(["select-input flex items-center justify-between flex-1 cursor-pointer rounded-[8px] w-[266px] h-[32px] px-[15px]",[l(p)?"":"text-tx-placeholder",d.disabled?"text-tx-placeholder cursor-no-drop bg-[--el-disabled-bg-color]":""]]),onClick:s[1]||(s[1]=n=>l(C).open())},[a("div",me,[l(u).alias?(t(),o("span",fe,f(l(u).alias),1)):(t(),o("span",xe,"请选择")),l(u).alias&&l(u).price=="0"?(t(),o("span",he," (免费) ")):l(u).alias?(t(),o("span",ve," ("+f(`消耗${l(u).price}${l(V).getTokenUnit}/1000字符`)+") ",1)):x("",!0)]),a("div",ye,[h(B,{name:"el-icon-ArrowDown"})])],2)):x("",!0),d.type==="chatModels"?(t(),S(te,{key:2,ref_key:"popupRef",ref:C,width:"780px",title:"模型选择",customClass:"!rounded-[15px]"},{footer:c(()=>[be]),default:c(()=>[h(N,{height:"50vh","max-height":"70vh"},{default:c(()=>[a("div",ge,[h(J,{"active-name":l(b),"onUpdate:activeName":s[2]||(s[2]=n=>D(b)?b.value=n:null),class:"flex flex-wrap justify-between",accordion:""},{default:c(()=>[(t(!0),o(g,null,k([l(U),l(j)],(n,M)=>(t(),o("div",{key:M},[(t(!0),o(g,null,k(n,(_,$)=>(t(),o("div",{key:_.id,class:"w-[350px] mt-[15px]"},[h(G,{class:E(["bg-[#f8f8f8] dark:bg-[#0d0e10] border border-solid border-[transparent]",{"el-collapse-item--active":H(M,$)}]),name:A(M,$)},{title:c(()=>[a("div",null,[a("div",ke,[_.logo?(t(),o("img",{key:0,src:_.logo,class:"w-[30px] h-[30px]",alt:"模型logo"},null,8,we)):x("",!0),a("span",Ce,f(_.name),1),_.is_free?(t(),o("span",Me," 会员免费 ")):x("",!0)])])]),default:c(()=>[h(N,{height:"100%","max-height":"250px"},{default:c(()=>[(t(!0),o(g,null,k(_.models,r=>(t(),o("div",{key:r.id,class:E(["flex justify-between mb-[14px] px-[15px] cursor-pointer hover:text-primary",{"text-primary":l(p)===r.id}]),onClick:Re=>P(_.id,r.id)},[a("div",Se,[a("span",Ee,f(r.alias||"请选择"),1),r.alias&&r.price=="0"?(t(),o("span",Ve," (免费) ")):(t(),o("span",Ae," ("+f(`消耗${r.price}${l(V).getTokenUnit}/1千字符`)+") ",1))]),l(p)===r.id?(t(),o("div",Be,[h(B,{name:"el-icon-CircleCheck",size:"20"})])):(t(),o("div",Ne,Fe))],10,Le))),128))]),_:2},1024)]),_:2},1032,["class","name"])]))),128))]))),128))]),_:1},8,["active-name"])])]),_:1})]),_:1},512)):x("",!0)])}}});const Xe=re(De,[["__scopeId","data-v-648801bb"]]);export{Xe as _};
