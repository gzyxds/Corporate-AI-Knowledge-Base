import{_ as e}from"./page-meta.d2ccf398.js";import{d as l,L as a,s as t,M as s,x as u,G as o,aE as r,o as i,k as c,b as d,w as n,c as p,e as m,N as f,f as x,t as h,g as v,F as _,l as g,z as y,R as b,bc as w,r as k,a as V,j as C,h as j,p as B,i as z,aD as U,m as I,V as E}from"./index-9f08b835.js";import{_ as A}from"./u-navbar.9b578443.js";import{_ as T}from"./u-tabs.3aba862d.js";import{_ as D}from"./u-image.e6fb9592.js";import{_ as L}from"./u-icon.f0423eb2.js";import{_ as R}from"./u-loading.15b95fef.js";import{_ as Q}from"./u-checkbox.468f126b.js";import{_ as q}from"./u-button.cd082997.js";import{_ as F}from"./z-paging.5d396652.js";import{_ as M}from"./u-action-sheet.11119791.js";import{_ as S}from"./u-popup.6c89de8e.js";import{_ as $}from"./icon_music.5ddb40fe.js";import{d as G,b as J}from"./music.82052fd1.js";import{a as N}from"./download.bd561ce2.js";import{m as H}from"./icon_music_fail.bb797fc1.js";import{u as K}from"./useCopy.7659937f.js";import{_ as O}from"./u-tag.d6be710f.js";import{d as P,a as W}from"./video.a7b79a96.js";import{I as X}from"./icon_copy.36709540.js";import{I as Y,a as Z}from"./icon_delete.577abfad.js";import{d as ee,a as le}from"./draw.0416aa95.js";import{_ as ae}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-badge.508fc5b2.js";const te=l({__name:"music",props:{isBatch:{type:Boolean}},setup(e){const l=e,U=y(),I=a(),{copy:E}=K(),A=t([]),T=t([]),O=s({get:()=>T.value.length===A.value.length,set(){T.value.length===A.value.length?T.value=[]:T.value=A.value.map((e=>e.id))}});u((()=>l.isBatch),(()=>{T.value=[]}));const P=o({show:!1,item:{}}),W=s((()=>{const e=[{value:"delete",text:"删除",color:"#EA0000"}];return 2==P.item.status&&e.unshift({value:"download",text:"下载"}),e})),X=e=>{P.show=!0,P.item=e},Y=async e=>{const{cancel:l}=await b({title:"温馨提示",content:"确定删除？"});l||(await G({id:e}),T.value=[],se())},Z=t(),ee=async e=>{const l=W.value[e].value,a=P.item;switch(l){case"delete":Y(a.id);break;case"download":w()?Z.value=!0:N(a.audio_url,a.title)}},le=async()=>{await E(P.item.audio_url),Z.value=!1},ae=a(),te=async(e,l)=>{try{const{lists:a}=await J({page_no:e,page_size:l,status:2});I.value.complete(a)}catch(a){I.value.complete(!1)}},se=()=>{var e;null==(e=I.value)||e.refresh()};return r((()=>{clearTimeout(ae.value)})),(a,t)=>{const s=k(V("u-image"),D),u=C,o=z,r=j,y=k(V("u-icon"),L),b=k(V("u-loading"),R),w=k(V("u-checkbox"),Q),E=k(V("u-button"),q),G=k(V("z-paging"),F),J=k(V("u-action-sheet"),M),N=k(V("u-popup"),S);return i(),c(_,null,[d(G,{ref_key:"pagingRef",ref:I,modelValue:A.value,"onUpdate:modelValue":t[2]||(t[2]=e=>A.value=e),"auto-clean-list-when-reload":!1,"safe-area-inset-bottom":!0,onQuery:te,fixed:!1,height:"100%"},{bottom:n((()=>[e.isBatch?(i(),p(u,{key:0,class:"h-[120rpx] flex items-center px-[20rpx] rounded-t-[25rpx] bg-white shadow-light"},{default:n((()=>[d(w,{modelValue:m(O),"onUpdate:modelValue":t[0]||(t[0]=e=>f(O)?O.value=e:null),shape:"circle"},{default:n((()=>[x(" 全选 ")])),_:1},8,["modelValue"]),d(u,null,{default:n((()=>[x("已选"),d(r,{class:"text-error"},{default:n((()=>[x(h(T.value.length),1)])),_:1}),x("/"+h(A.value.length)+"首音乐",1)])),_:1}),d(u,{class:"ml-auto"},{default:n((()=>[d(E,{size:"medium",type:"error",disabled:!T.value.length,onClick:t[1]||(t[1]=e=>Y(T.value))},{default:n((()=>[x(" 删除 ")])),_:1},8,["disabled"])])),_:1})])),_:1})):v("v-if",!0)])),default:n((()=>[d(u,{class:"flex flex-wrap px-[10rpx]"},{default:n((()=>[(i(!0),c(_,null,g(A.value,(a=>(i(),p(u,{class:"w-[50%] px-[10rpx] mb-[20rpx]",key:a.id},{default:n((()=>[d(u,{class:"h-[390rpx] relative rounded-[15rpx] overflow-hidden",onClick:e=>(e=>{if(l.isBatch){const l=T.value.findIndex((l=>l===e));l>-1?T.value.splice(l,1):T.value.push(e)}else U.navigateTo({path:"/packages/pages/music_player/music_player",query:{id:e,mode:"user_works"}})})(a.id)},{default:n((()=>[d(u,{class:"w-full h-full"},{default:n((()=>[d(s,{src:a.image_url,width:"100%",height:"100%"},null,8,["src"])])),_:2},1024),d(u,{class:"flex flex-col h-full absolute left-0 right-0 top-0 bottom-0 z-[999]"},{default:n((()=>[d(u,{class:"p-[20rpx] flex-1"},{default:n((()=>[d(u,{class:"bg-[rgba(0,0,0,0.5)] inline-flex text-white p-[10rpx] rounded-full text-xs items-center"},{default:n((()=>[d(o,{src:$,class:"w-[24rpx] h-[24rpx]"}),d(r,{class:"ml-[6rpx]"},{default:n((()=>[x(h(a.duration),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),d(u,{class:"bg-[rgba(0,0,0,0.3)] px-[20rpx] py-[25rpx] text-white",style:{"backdrop-filter":"blur(10px)","border-radius":"0 0 15rpx 15rpx"}},{default:n((()=>[d(u,{class:"line-clamp-1 font-bold"},{default:n((()=>[x(h(a.title),1)])),_:2},1024),d(u,{class:"flex text-xs mt-[15rpx] items-center"},{default:n((()=>[d(u,{class:"mr-auto"},{default:n((()=>[x(h(a.create_time),1)])),_:2},1024),d(u,{onClick:B((e=>X(a)),["stop"])},{default:n((()=>[d(y,{name:"more-dot-fill",size:32})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024),3==a.status||1==a.status?(i(),p(u,{key:0,class:"h-full absolute inset-0 bg-white z-10 flex items-center justify-center flex-col"},{default:n((()=>[1==a.status?(i(),c(_,{key:0},[d(b,{size:50,mode:"flower"}),d(u,{class:"text-content text-sm mt-[20rpx]"},{default:n((()=>[x(" 歌曲生成中，请稍等！ ")])),_:1})],64)):(i(),c(_,{key:1},[d(y,{name:m(H),size:50},null,8,["name"]),d(u,{class:"text-content text-sm mt-[20rpx]"},{default:n((()=>[x(" 音乐生成失败 ")])),_:1}),d(u,{class:"absolute bottom-0 w-full px-[20rpx] py-[25rpx] flex items-center text-muted"},{default:n((()=>[d(u,{class:"mr-auto text-xs"},{default:n((()=>[x(h(a.create_time),1)])),_:2},1024),d(u,{onClick:B((e=>X(a)),["stop"])},{default:n((()=>[d(y,{name:"more-dot-fill",size:32})])),_:2},1032,["onClick"])])),_:2},1024)],64))])),_:2},1024)):v("v-if",!0),e.isBatch?(i(),p(u,{key:1,class:"absolute right-0 top-[20rpx]"},{default:n((()=>[d(w,{"model-value":T.value.includes(a.id),shape:"circle"},null,8,["model-value"])])),_:2},1024)):v("v-if",!0)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"]),d(J,{"safe-area-inset-bottom":"",list:m(W),modelValue:P.show,"onUpdate:modelValue":t[3]||(t[3]=e=>P.show=e),onClick:ee},null,8,["list","modelValue"]),d(N,{modelValue:Z.value,"onUpdate:modelValue":t[4]||(t[4]=e=>Z.value=e),mode:"center","border-radius":"15",closeable:""},{default:n((()=>[d(u,{class:"w-[650rpx] p-[40rpx]"},{default:n((()=>[d(u,{class:"text-lg font-bold text-center mb-[40rpx]"},{default:n((()=>[x(" 下载音乐 ")])),_:1}),d(u,{class:"mb-[40rpx]"},{default:n((()=>[x(" 当前环境不支持下载，请复制链接到浏览器打开下载 ")])),_:1}),d(E,{type:"primary",shape:"circle",onClick:le},{default:n((()=>[x(" 复制链接 ")])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}}),se=l({__name:"video",props:{isBatch:{type:Boolean}},setup(e){const l=e;y();const B=a(),{copy:I}=K(),E=t([]),A=t([]),T=s({get:()=>A.value.length===E.value.length,set(){A.value.length===E.value.length?A.value=[]:A.value=E.value.map((e=>e.id))}});u((()=>l.isBatch),(()=>{A.value=[]}));const D=async e=>{const{cancel:l}=await b({title:"温馨提示",content:"确定删除？"});l||(await P({id:e}),A.value=[],G())},L=o({show:!1,item:{}}),R=async()=>{await I(L.item.video_url),L.show=!1},M=a(),$=async(e,l)=>{try{const{lists:a}=await W({page_no:e,page_size:l,status:2});B.value.complete(a)}catch(a){B.value.complete(!1)}},G=()=>{var e;null==(e=B.value)||e.refresh()};return r((()=>{clearTimeout(M.value)})),(a,t)=>{const s=k(V("u-checkbox"),Q),u=C,o=k(V("u-tag"),O),r=z,y=U,b=j,M=k(V("u-button"),q),G=k(V("z-paging"),F),J=k(V("u-popup"),S);return i(),c(_,null,[d(G,{ref_key:"pagingRef",ref:B,modelValue:E.value,"onUpdate:modelValue":t[2]||(t[2]=e=>E.value=e),"auto-clean-list-when-reload":!1,"safe-area-inset-bottom":!0,onQuery:$,fixed:!1,height:"100%"},{bottom:n((()=>[e.isBatch?(i(),p(u,{key:0,class:"h-[120rpx] flex items-center px-[20rpx] rounded-t-[25rpx] bg-white shadow-light"},{default:n((()=>[d(s,{modelValue:m(T),"onUpdate:modelValue":t[0]||(t[0]=e=>f(T)?T.value=e:null),shape:"circle"},{default:n((()=>[x(" 全选 ")])),_:1},8,["modelValue"]),d(u,null,{default:n((()=>[x("已选"),d(b,{class:"text-error"},{default:n((()=>[x(h(A.value.length),1)])),_:1}),x("/"+h(E.value.length),1)])),_:1}),d(u,{class:"ml-auto"},{default:n((()=>[d(M,{size:"medium",type:"error",disabled:!A.value.length,onClick:t[1]||(t[1]=e=>D(A.value))},{default:n((()=>[x(" 删除 ")])),_:1},8,["disabled"])])),_:1})])),_:1})):v("v-if",!0)])),default:n((()=>[d(u,{class:"w-full h-full px-[20rpx]"},{default:n((()=>[(i(!0),c(_,null,g(E.value,(a=>(i(),p(u,{class:"mb-[20rpx] rounded-[12rpx] relative shadow-[0px_3px_16px_0px_#EBEEFD] bg-white",key:a.id,onClick:e=>(e=>{if(l.isBatch){const l=A.value.findIndex((l=>l===e));l>-1?A.value.splice(l,1):A.value.push(e)}})(a.id)},{default:n((()=>[e.isBatch?(i(),p(u,{key:0,class:"absolute right-0 bottom-[30rpx]"},{default:n((()=>[d(s,{"model-value":A.value.includes(a.id),shape:"circle"},null,8,["model-value"])])),_:2},1024)):v("v-if",!0),d(u,{class:"px-[30rpx]"},{default:n((()=>[d(u,{class:"py-[30rpx] flex"},{default:n((()=>[d(u,{class:"mr-[20rpx]"},{default:n((()=>[d(o,{text:a.type_desc,size:"mini","border-color":"transparent"},null,8,["text"])])),_:2},1024),d(u,{class:"ml-auto flex items-center"},{default:n((()=>[d(r,{class:"w-[32rpx] h-[32rpx] ml-[34rpx]",src:m(X),alt:"复制",onClick:e=>m(I)(a.prompt)},null,8,["src","onClick"]),d(r,{class:"w-[32rpx] h-[32rpx] ml-[34rpx]",src:m(Y),alt:"下载",onClick:e=>(e=>{w()?(L.show=!0,L.item=e):N(e.video_url,"视频","video")})(a)},null,8,["src","onClick"]),d(r,{class:"w-[32rpx] h-[32rpx] ml-[34rpx]",src:m(Z),alt:"删除",onClick:e=>D(a.id)},null,8,["src","onClick"])])),_:2},1024)])),_:2},1024),d(u,{class:"h-[472rpx]"},{default:n((()=>[d(y,{class:"w-full h-full rounded-[10rpx] overflow-hidden",preload:"",playsinline:"","webkit-playsinline":"","x-webkit-airplay":"allow","x5-video-player-fullscreen":"true","x5-video-player-type":"h5",src:a.video_url},null,8,["src"])])),_:2},1024),d(u,{class:"line-clamp-2 mt-[20rpx]"},{default:n((()=>[x(h(a.prompt),1)])),_:2},1024),d(u,{class:"flex items-center py-[30rpx]"},{default:n((()=>[d(u,{class:"text-muted mr-auto"},{default:n((()=>[x(" 时间："+h(a.create_time),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"]),d(J,{modelValue:L.show,"onUpdate:modelValue":t[3]||(t[3]=e=>L.show=e),mode:"center","border-radius":"15",closeable:""},{default:n((()=>[d(u,{class:"w-[650rpx] p-[40rpx]"},{default:n((()=>[d(u,{class:"text-lg font-bold text-center mb-[40rpx]"},{default:n((()=>[x(" 下载视频 ")])),_:1}),d(u,{class:"mb-[40rpx]"},{default:n((()=>[x(" 当前环境不支持下载，请复制链接到浏览器打开下载 ")])),_:1}),d(M,{type:"primary",shape:"circle",onClick:R},{default:n((()=>[x(" 复制链接 ")])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}}),ue=ae(l({__name:"draw",props:{isBatch:{type:Boolean}},setup(e){const l=e,r=y(),w=a(),{copy:z}=K(),U=t([]),E=t([]),A=o({status:3,model:"sd"}),T=t([{name:"SD绘画",type:"sd"},{name:"DALLE绘画",type:"dalle3"},{name:"MJ绘画",type:"mj_goapi"}]),L=s({get:()=>E.value.length===U.value.length,set(){E.value.length===U.value.length?E.value=[]:E.value=U.value.map((e=>e.id))}});u((()=>l.isBatch),(()=>{E.value=[]}));const R=o({show:!1,item:{}}),M=async()=>{await z(R.item.video_url),R.show=!1},$=async(e,l)=>{try{const{lists:a}=await le({page_no:e,page_size:l,...A});w.value.complete(a)}catch(a){w.value.complete(!1)}},G=()=>{var e;null==(e=w.value)||e.refresh()};return(a,t)=>{const s=C,u=k(V("u-image"),D),o=k(V("u-checkbox"),Q),y=j,z=k(V("u-button"),q),J=k(V("z-paging"),F),N=k(V("u-popup"),S);return i(),c(_,null,[d(s,{class:"nav flex px-4 pb-2"},{default:n((()=>[d(s,{class:"category-list flex-1"},{default:n((()=>[(i(!0),c(_,null,g(T.value,(e=>(i(),p(s,{key:e.type,class:I(["category-item",{"category-item--active":e.type===A.model}]),onClick:l=>{return a=e.type,void(A.model!==a&&(A.model=a,G()));var a}},{default:n((()=>[x(h(e.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),d(J,{ref_key:"pagingRef",ref:w,modelValue:U.value,"onUpdate:modelValue":t[2]||(t[2]=e=>U.value=e),"auto-clean-list-when-reload":!1,"safe-area-inset-bottom":!0,onQuery:$,fixed:!1,height:"100%"},{bottom:n((()=>[e.isBatch?(i(),p(s,{key:0,class:"h-[120rpx] flex items-center px-[20rpx] rounded-t-[25rpx] bg-white shadow-light"},{default:n((()=>[d(o,{modelValue:m(L),"onUpdate:modelValue":t[0]||(t[0]=e=>f(L)?L.value=e:null),shape:"circle"},{default:n((()=>[x(" 全选 ")])),_:1},8,["modelValue"]),d(s,null,{default:n((()=>[x("已选"),d(y,{class:"text-error"},{default:n((()=>[x(h(E.value.length),1)])),_:1}),x("/"+h(U.value.length),1)])),_:1}),d(s,{class:"ml-auto"},{default:n((()=>[d(z,{size:"medium",type:"error",disabled:!E.value.length,onClick:t[1]||(t[1]=e=>(async e=>{const{cancel:l}=await b({title:"温馨提示",content:"确定删除？"});l||(await ee({ids:e}),E.value=[],G())})(E.value))},{default:n((()=>[x(" 删除 ")])),_:1},8,["disabled"])])),_:1})])),_:1})):v("v-if",!0)])),default:n((()=>[d(s,{class:"w-full h-full px-[20rpx]"},{default:n((()=>[(i(!0),c(_,null,g(U.value,(a=>(i(),p(s,{class:"inline-block w-[50%] px-[10rpx] mb-[20rpx]",key:a.id,onClick:B((e=>(e=>{if(l.isBatch){const l=E.value.findIndex((l=>l===e));l>-1?E.value.splice(l,1):E.value.push(e)}})(a.id)),["stop"])},{default:n((()=>[d(s,{class:I(["relative rounded-[15rpx] overflow-hidden",{"border-[2px] !border-primary border-solid":e.isBatch&&E.value.includes(a.id)}]),style:{border:"2px solid transparent"},onClick:e=>(e=>{l.isBatch||r.navigateTo({path:"/packages/pages/draw_detail/draw_detail",query:{id:e.id}})})(a)},{default:n((()=>[d(s,{class:"w-full h-full"},{default:n((()=>[d(u,{src:a.image,width:"100%",height:"340"},null,8,["src"])])),_:2},1024),e.isBatch?(i(),p(s,{key:0,class:"absolute right-0 top-[20rpx]"},{default:n((()=>[d(o,{"model-value":E.value.includes(a.id),shape:"circle"},null,8,["model-value"])])),_:2},1024)):v("v-if",!0)])),_:2},1032,["class","onClick"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"]),d(N,{modelValue:R.show,"onUpdate:modelValue":t[3]||(t[3]=e=>R.show=e),mode:"center","border-radius":"15",closeable:""},{default:n((()=>[d(s,{class:"w-[650rpx] p-[40rpx]"},{default:n((()=>[d(s,{class:"text-lg font-bold text-center mb-[40rpx]"},{default:n((()=>[x(" 下载图片 ")])),_:1}),d(s,{class:"mb-[40rpx]"},{default:n((()=>[x(" 当前环境不支持下载，请复制链接到浏览器打开下载，或长按图片选择保存 ")])),_:1}),d(z,{type:"primary",shape:"circle",onClick:M},{default:n((()=>[x(" 复制链接 ")])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-7a4ade06"]]),oe=ae(l({__name:"user_works",setup(l){const a=E(),u=t(!1),o=t(0),r=t([{name:"AI音乐",component:"music"},{name:"AI视频",component:"video"},{name:"AI绘画",component:"draw"}]),f=s((()=>r.value[o.value].component));return(l,t)=>{const s=k(V("page-meta"),e),g=C,y=k(V("u-navbar"),A),b=k(V("u-tabs"),T);return i(),c(_,null,[d(s,{"page-style":l.$theme.pageStyle},null,8,["page-style"]),d(g,{class:"h-full flex flex-col"},{default:n((()=>[d(y,{"back-text":m(a).getTitle||"我的作品"},{right:n((()=>[d(g,{class:"flex items-center mr-[20rpx] text-primary border-[1px] border-primary border-solid text-sm py-[7rpx] px-[16rpx] rounded-[8rpx]",onClick:t[0]||(t[0]=e=>u.value=!u.value)},{default:n((()=>[x(h(u.value?"取消":"批量管理"),1)])),_:1})])),_:1},8,["back-text"]),d(g,{class:"m-[20rpx] bg-white rounded-[16rpx] overflow-hidden"},{default:n((()=>[d(b,{list:r.value,modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value=e),"is-scroll":!0,"active-color":l.$theme.primaryColor},null,8,["list","modelValue","active-color"])])),_:1}),d(g,{class:"flex-1 min-h-0"},{default:n((()=>["video"==m(f)?(i(),p(se,{key:0,class:"w-full h-full",isBatch:u.value},null,8,["isBatch"])):v("v-if",!0),"music"==m(f)?(i(),p(te,{key:1,class:"w-full h-full",isBatch:u.value},null,8,["isBatch"])):v("v-if",!0),"draw"==m(f)?(i(),p(ue,{key:2,class:"w-full h-full",isBatch:u.value},null,8,["isBatch"])):v("v-if",!0)])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-2eb64347"]]);export{oe as default};
