import{k as Z,r as V,a as K,aa as L,s as Q,H as a,I as c,X as r,V as p,S as $,aj as j,u as i,J as s,$ as z,R as x,a7 as W,a0 as ee,aw as oe,U as te,T as R,Z as k,Y as D,ag as se,ah as ae,ax as re}from"./swiper-vue.2eb6bd20.js";import{_ as ie}from"./index.vue.79ff26cb.js";import{E as ne}from"./index.5de6b9f9.js";import{E as ce}from"./index.8ad94f19.js";import{_ as le}from"./index.vue.7f39d825.js";import{h as de,m as _e,cE as pe,ck as ue,c$ as me,H as fe,d as ge,j as he}from"./entry.dfbfd4fd.js";import{E as ve}from"./el-image-viewer.d5621b18.js";/* empty css                  */import"./el-tooltip.4ed993c7.js";/* empty css                  */import{u as T}from"./asyncData.eaddccf2.js";import{b as xe}from"./download.f61d7233.js";import{c as ye,v as we}from"./square.4ad4120f.js";import{a as be}from"./task_reward.d02f9b86.js";import{e as ke}from"./empty_con.c3f015fe.js";import{E as Se}from"./index.a258b1c6.js";import{_ as Ce}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.f647f618.js";import"./___vite-browser-external.5512611b.js";import"./index.9c8f8f3a.js";import"./isUndefined.aa0326a0.js";import"./throttle.d40f833a.js";import"./debounce.8cbe4cfc.js";import"./position.4bcf7430.js";const q=u=>(se("data-v-26cc000b"),u=u(),ae(),u),Ee={class:"flex-1 min-h-0 mx-[16px] relative"},Be=["onClick"],Ie={class:"flex-1 min-h-[70vh] overflow-hidden mx-auto"},Ve=["infinite-scroll-disabled"],Le={key:0,class:"grid grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 8xl:grid-cols-7 gap-4"},$e={class:"relative flex-1"},je={class:"bg-[var(--el-bg-color-page)] rounded-t-[12px] overflow-hidden"},ze={class:"w-full h-full p-[15px] box-border"},Re={class:"line-clamp-2"},De={class:"flex justify-between px-[15px] pb-[20px]"},Te={key:0,class:"flex items-center"},qe={class:"text-[#BBBBBB] ml-[6px] w-[100px] truncate"},Pe={class:"flex items-center"},Ue=["onClick"],Ae=["onClick"],Ne={key:1,class:"flex justify-center items-center mt-[50px]"},Oe=q(()=>s("span",{class:"mt-[4px] ml-[10px] text-[#999999]"},"加载中...",-1)),Fe={class:"flex flex-col justify-center items-center w-full h-[60vh]"},He=q(()=>s("div",{class:"text-tx-regular mb-4"},"当前选择暂无视频～",-1)),Ye=Z({__name:"video",props:{keyword:{}},async setup(u){let d,g;const P=u;de();const h=_e(),_=V({page_no:0,page_size:20,keyword:"",category_id:""}),t=V({more:!0,count:0,loading:!1,lists:[]}),S=K(0),{data:C}=([d,g]=L(()=>T(()=>be({type:me.VIDEO}),{default(){return[]},transform(e){return[{id:"",name:"全部"}].concat(e)},lazy:!0},"$F7shVYj0fG")),d=await d,g(),d);[d,g]=L(()=>T(()=>y(),{lazy:!0},"$Cw5rrd3Tss")),await d,g();const y=async()=>{if(!t.loading){if(t.more)_.page_no+=1;else return;t.loading=!0;try{const e=await ye(_),{lists:l,page_no:n,page_size:m,count:f}=e;n*m>f&&(t.more=!1),n==1?t.lists=l:t.lists=[...t.lists,...l]}finally{setTimeout(()=>t.loading=!1,200)}}},v=()=>{_.page_no=0,t.more=!0,y()},U=async e=>{if(!h.isLogin){h.toggleShowLogin(!0);return}await we({records_id:e.id,status:e.is_collect?0:1}),_.category_id===0?v():e.is_collect=e.is_collect?0:1},A=async(e,l)=>{if(!h.isLogin){h.toggleShowLogin(!0);return}try{const n=await $request.get({url:e,responseType:"blob",baseURL:""},{isReturnDefaultResponse:!0,apiPrefix:""});console.log(n);const m=new Blob([n._data],{type:n.headers.get("Content-Type")}),f=window.URL.createObjectURL(m);xe(f,l)}catch{he.msgError("文件下载失败")}},N=Q(),O=e=>{N.value=e,console.log(e)},E=e=>{var l;S.value=e,_.category_id=(l=C.value[e])==null?void 0:l.id,v()};return E(0),pe(()=>P.keyword,e=>{_.keyword=e,v()},{debounce:500}),(e,l)=>{const n=re,m=oe,f=ie,F=ne,B=ce,H=le,Y=fe,G=ve,J=ge,M=Se;return a(),c("div",Ee,[r(m,{slidesPerView:"auto",spaceBetween:16,class:"category-lists",style:{padding:"10px 0"},onSwiper:O},{default:p(()=>[(a(!0),c($,null,j(i(C),(o,w)=>(a(),te(n,{key:o.id,style:{width:"auto","margin-right":"12px"}},{default:p(()=>[Object.keys(o).includes("name")?(a(),c("div",{key:0,class:R(["category-item bg-white",{"is-active":i(S)===w}]),onClick:b=>E(w)},k(o.name),11,Be)):x("",!0)]),_:2},1024))),128))]),_:1}),s("div",Ie,[z((a(),c("div",{class:"model-lists mb-[10px] mx-[0px]","infinite-scroll-distance":"50","infinite-scroll-delay":200,"infinite-scroll-disabled":!i(t).more},[i(t).lists.length?(a(),c("div",Le,[(a(!0),c($,null,j(i(t).lists,(o,w)=>{var b,I;return a(),c("div",{key:o.id,class:"flex flex-col min-h-0 bg-body rounded-[12px] cursor-pointer"},[s("div",$e,[s("div",je,[r(f,{src:o.video_url,type:"video",ratio:[4,3]},null,8,["src"])])]),s("div",ze,[s("div",Re,k(o.prompt),1)]),s("div",De,[(b=o==null?void 0:o.user_info)!=null&&b.image?(a(),c("div",Te,[r(F,{size:28,src:(I=o==null?void 0:o.user_info)==null?void 0:I.image},null,8,["src"]),s("p",qe,k(o.user_info.name),1)])):x("",!0),s("div",Pe,[r(B,{effect:"dark",content:"收藏 / 取消收藏",placement:"bottom"},{default:p(()=>[s("div",{class:"image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",onClick:D(X=>U(o),["stop"])},[s("div",{class:R(["praise-animate",o.is_collect?"praise-entry":"praise-leave"])},null,2)],8,Ue)]),_:2},1024),r(B,{effect:"dark",content:"下载视频",placement:"bottom"},{default:p(()=>[s("div",{onClick:D(X=>A(o.video_url,"视频"),["stop"])},[r(H,{class:"cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",name:"el-icon-Download",size:"24",color:"#556477"})],8,Ae)]),_:2},1024)])])])}),128))])):x("",!0),i(t).loading?(a(),c("div",Ne,[r(Y,{size:"25",class:"is-loading"},{default:p(()=>[r(i(ue))]),_:1}),Oe])):x("",!0),z(s("div",Fe,[r(G,{class:"w-[200px] h-[200px]",src:i(ke)},null,8,["src"]),He,r(J,{type:"primary",onClick:v},{default:p(()=>[W(" 点击刷新 ")]),_:1})],512),[[ee,!i(t).lists.length&&!i(t).loading]])],8,Ve)),[[M,y]])])])}}});const ho=Ce(Ye,[["__scopeId","data-v-26cc000b"]]);export{ho as default};
