import{k as ie,s as $,r as j,a as ce,aa as R,H as n,I as i,X as r,V as d,S as le,aj as de,u as o,J as a,$ as D,U as P,R as u,a7 as M,Z as v,T as I,Y as T,a0 as _e,aw as ue,ag as pe,ah as me,ax as fe}from"./swiper-vue.2eb6bd20.js";import{E as ge}from"./el-image-viewer.d5621b18.js";import{_ as ye}from"./index.vue.7f39d825.js";import{_ as xe}from"./nuxt-link.42058260.js";import{E as he}from"./index.8ad94f19.js";import{E as we}from"./index.5de6b9f9.js";import{W as ve}from"./index.36f10986.js";import{h as be,m as ke,cE as Ce,ck as Se,c$ as Ee,H as Pe,d as Ie,j as Be}from"./entry.dfbfd4fd.js";import{u as Ve,_ as qe}from"./player.a8689b22.js";import"./el-tooltip.4ed993c7.js";/* empty css                  *//* empty css                  */import{u as F}from"./asyncData.eaddccf2.js";import{b as Le}from"./download.f61d7233.js";import{b as ze,m as $e}from"./square.4ad4120f.js";import{a as je}from"./task_reward.d02f9b86.js";import{e as Re}from"./empty_con.c3f015fe.js";import{E as De}from"./index.a258b1c6.js";import{_ as Me}from"./_plugin-vue_export-helper.c27b6911.js";import"./throttle.d40f833a.js";import"./debounce.8cbe4cfc.js";import"./position.4bcf7430.js";import"./isUndefined.aa0326a0.js";import"./el-slider.211113d2.js";import"./el-input-number.a67590b7.js";import"./index.91e71ce7.js";import"./music.f06b2c3d.js";const U=y=>(pe("data-v-80fa2648"),y=y(),me(),y),Te={class:"flex-1 min-h-0 mx-[16px] relative"},Fe=["onClick"],Ue={class:"flex-1 min-h-[70vh] overflow-hidden mx-auto",style:{"padding-bottom":"100px"}},Ne=["infinite-scroll-disabled"],Ae=["id","onClick"],We={class:"w-[100px] h-[100px] flex items-center justify-center flex-none relative"},Ye={key:1,class:"text-tx-secondary"},He={key:2,class:"absolute inset-0 flex items-center justify-center text-white"},Oe={key:3,class:"absolute inset-0 flex items-center justify-center text-white"},Je={class:"flex-1 ml-[20px]"},Xe={key:0,class:"mt-[12px] text-tx-secondary"},Ze={class:"flex justify-between mt-[12px]"},Ge={class:"mt-[4px] text-tx-secondary"},Ke={class:"flex items-center"},Qe=["onClick"],et=["onClick"],tt={key:1,class:"flex items-center"},st={class:"text-[#BBBBBB] ml-[6px] w-[100px] truncate"},ot={key:1,class:"flex justify-center items-center mt-[50px]"},at=U(()=>a("span",{class:"mt-[4px] ml-[10px] text-[#999999]"},"加载中...",-1)),rt={class:"flex flex-col justify-center items-center w-full h-[60vh]"},nt=U(()=>a("div",{class:"text-tx-regular mb-4"},"当前选择暂无音乐～",-1)),it={class:"fixed pb-[32px] bottom-0 left-[112px] right-[34px] bg-page"},ct=ie({__name:"music",props:{keyword:{}},async setup(y){let p,b;const N=y,A=be(),k=ke(),W=$(null),{playing:B,currentId:x,setCurrentId:Y,togglePlay:H,setMusic:O}=Ve(),m=j({page_no:0,page_size:20,keyword:"",category_id:""}),J={4e3:{rowPerView:4},2e3:{rowPerView:3},1800:{rowPerView:3},1600:{rowPerView:3},1440:{rowPerView:2},1360:{rowPerView:2},1280:{rowPerView:2},1024:{rowPerView:2}},s=j({first:!0,more:!0,count:0,loading:!1,lists:[]}),V=ce(0),{data:q}=([p,b]=R(()=>F(()=>je({type:Ee.MUSIC}),{default(){return[]},transform(t){return[{id:"",name:"全部"}].concat(t)},lazy:!0},"$ydYDo0Bg16")),p=await p,b(),p);[p,b]=R(()=>F(()=>S(),{lazy:!0},"$Fywk2foRYg")),await p,b();const S=async()=>{if(!s.loading){if(s.more)m.page_no+=1;else return;s.loading=!0;try{const t=await ze(m),{lists:c,page_no:l,page_size:h,count:f}=t;if(l*h>f&&(s.more=!1),l==1?s.lists=c:s.lists=[...s.lists,...c],c.length){const g=s.lists.map(_=>(_.square_id=_.id,_.id=_.records_id,_));O(g),x.value=s.lists[0].records_id}}finally{setTimeout(()=>s.loading=!1,200)}}},C=()=>{m.page_no=0,s.more=!0,S()},X=t=>{A.push({path:"/music/player",query:{id:t.square_id}})},Z=t=>{if(t.records_id==x.value){H();return}Y(t.records_id)},G=async t=>{if(!k.isLogin){k.toggleShowLogin(!0);return}await $e({records_id:t.square_id,status:t.is_collect?0:1}),m.category_id===0?C():t.is_collect=t.is_collect?0:1},K=async(t,c)=>{if(!k.isLogin){k.toggleShowLogin(!0);return}try{const l=await $request.get({url:t,responseType:"blob",baseURL:""},{isReturnDefaultResponse:!0,apiPrefix:""});console.log(l);const h=new Blob([l._data],{type:l.headers.get("Content-Type")}),f=window.URL.createObjectURL(h);Le(f,c)}catch{Be.msgError("文件下载失败")}},Q=$(),ee=t=>{Q.value=t,console.log(t)},L=t=>{var c;V.value=t,m.category_id=(c=q.value[t])==null?void 0:c.id,C()};return L(0),Ce(()=>N.keyword,t=>{m.keyword=t,C()},{debounce:500}),(t,c)=>{const l=fe,h=ue,f=ge,g=ye,_=xe,z=he,te=we,se=ve,oe=Pe,ae=Ie,re=qe,ne=De;return n(),i("div",Te,[r(h,{slidesPerView:"auto",spaceBetween:16,class:"category-lists",onSwiper:ee,style:{padding:"10px 0"}},{default:d(()=>[(n(!0),i(le,null,de(o(q),(e,w)=>(n(),P(l,{key:e.id,style:{width:"auto","margin-right":"12px"}},{default:d(()=>[Object.keys(e).includes("name")?(n(),i("div",{key:0,class:I(["category-item bg-white",{"is-active":o(V)===w}]),onClick:E=>L(w)},v(e.name),11,Fe)):u("",!0)]),_:2},1024))),128))]),_:1}),a("div",Ue,[D((n(),i("div",{class:"model-lists mb-[10px] mx-[0px]","infinite-scroll-distance":"50","infinite-scroll-delay":200,"infinite-scroll-disabled":!o(s).more},[o(s).lists.length?(n(),P(se,{key:0,ref_key:"waterFull",ref:W,delay:100,list:o(s).lists,width:315,gutter:20,animationDelay:0,animationDuration:0,backgroundColor:"none",animationPrefix:"none",animated:"none",animationEffect:"none",breakpoints:J},{item:d(({item:e})=>{var w;return[a("div",{class:"flex bg-body p-[20px] rounded-[12px] hover:bg-[#EEF2FF]",id:`music-item-${e.id}`,onClick:E=>Z(e)},[a("div",We,[e.image_url?(n(),P(f,{key:0,src:e.image_url,class:"w-full h-full rounded-[12px]"},null,8,["src"])):(n(),i("div",Ye,[r(g,{name:"local-icon-music1",size:45})])),o(x)==e.records_id&&o(B)?(n(),i("div",He,[r(g,{name:"local-icon-pause1",size:20})])):u("",!0),o(x)==e.records_id&&!o(B)?(n(),i("div",Oe,[r(g,{name:"local-icon-play",size:20})])):u("",!0)]),a("div",Je,[r(_,{class:I(["text-[16px] font-bold",{"!text-primary":o(x)===e.records_id}]),to:{path:"/music/player",query:{id:e.square_id}}},{default:d(()=>[M(v(e.title),1)]),_:2},1032,["class","to"]),e.style_name?(n(),i("div",Xe,v(e.style_name),1)):u("",!0),a("div",Ze,[a("div",Ge,v(e.duration),1),a("div",Ke,[r(z,{effect:"dark",content:"收藏 / 取消收藏",placement:"bottom"},{default:d(()=>[a("div",{class:"image-praise relative dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",onClick:T(E=>G(e),["stop"])},[a("div",{class:I(["praise-animate",e.is_collect?"praise-entry":"praise-leave"])},null,2)],8,Qe)]),_:2},1024),r(z,{effect:"dark",content:"下载音乐",placement:"bottom"},{default:d(()=>[a("div",{onClick:T(E=>K(e.audio_url,e.title),["stop"])},[r(g,{class:"cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1 box-content",name:"el-icon-Download",size:"24",color:"#556477"})],8,et)]),_:2},1024)])]),e.user_info?(n(),i("div",tt,[r(te,{size:28,src:(w=e==null?void 0:e.user_info)==null?void 0:w.image},null,8,["src"]),a("p",st,v(e.user_info.name),1)])):u("",!0)])],8,Ae)]}),_:1},8,["list"])):u("",!0),o(s).loading?(n(),i("div",ot,[r(oe,{size:"25",class:"is-loading"},{default:d(()=>[r(o(Se))]),_:1}),at])):u("",!0),D(a("div",rt,[r(f,{class:"w-[200px] h-[200px]",src:o(Re)},null,8,["src"]),nt,r(ae,{type:"primary",onClick:C},{default:d(()=>[M(" 点击刷新 ")]),_:1})],512),[[_e,!o(s).lists.length&&!o(s).loading]])],8,Ne)),[[ne,S]])]),a("div",it,[r(re,{ref:"musicPlayerRef",class:"bg-body rounded-[12px]",onTitle:X},null,512)])])}}});const Rt=Me(ct,[["__scopeId","data-v-80fa2648"]]);export{Rt as default};
