"use strict";const e=require("../../common/vendor.js"),o=require("../../common/assets.js"),n=require("../../api/chat.js"),r=require("../../hooks/useAudioPlay.js"),u=require("../../hooks/useCopy.js");if(require("../../utils/request/index.js"),require("../../utils/request/http.js"),require("../../enums/requestEnums.js"),require("../../utils/request/cancel.js"),require("../../stores/user.js"),require("../../api/user.js"),require("../../enums/constantEnums.js"),require("../../utils/auth.js"),require("../../utils/cache.js"),require("../../utils/unique-id.js"),require("../../router/index.js"),require("../../config/index.js"),require("../../utils/client.js"),require("../../enums/appEnums.js"),!Array){(e.resolveComponent("ua-markdown")+e.resolveComponent("u-image")+e.resolveComponent("video-preview")+e.resolveComponent("u-loading")+e.resolveComponent("u-icon"))()}Math||((()=>"../ua-markdown/ua-markdown.js")+(()=>"../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+(()=>"../video-preview/video-preview.js")+(()=>"../../uni_modules/vk-uview-ui/components/u-loading/u-loading.js")+(()=>"../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js"))();const i=e.defineComponent({options:{virtualHost:!0},externalClasses:["class"],__name:"text-item",props:{content:null,isMarkdown:{type:Boolean},loading:{type:Boolean,default:!1},showCopyBtn:{type:Boolean,default:!1},showVoiceBtn:{type:Boolean,default:!1},recordId:null,index:null,type:{default:1},images:{default:()=>[]},files:{default:()=>[]},videos:{default:()=>[]},color:null},emits:["click-link"],setup(i,{emit:s}){const t=i,{copy:l}=u.useCopy(),a=e.computed((()=>t.images.map((({url:e})=>e)))),{play:d,audioPlaying:p,pause:c,audioLoading:m}=r.useAudioPlay({api:n.getChatBroadcast,dataTransform:e=>e.file,params:{records_id:t.recordId,content:t.index,type:t.type}});return(n,r)=>{var u,t;return e.e({a:i.isMarkdown},i.isMarkdown?{b:e.o((e=>s("click-link",e))),c:i.color,d:e.p({content:i.content})}:{e:e.t(i.content),f:i.color},{g:e.unref(a).length},e.unref(a).length?{h:e.f(e.unref(a),((o,n,r)=>({a:n,b:e.o((o=>(o=>{e.index.previewImage({current:o,urls:a.value})})(n)),n),c:"21fd3eba-1-"+r,d:e.p({src:o,width:180,height:180})})))}:{},{i:i.videos.length},i.videos.length?{j:e.f(i.videos,((o,n,r)=>({a:"21fd3eba-2-"+r,b:e.p({width:"180rpx",height:"180rpx",url:o.url}),c:n})))}:{},{k:null==(u=i.files)?void 0:u.length},(null==(t=i.files)?void 0:t.length)?{l:e.f(i.files,((o,n,r)=>({a:e.t(o.name),b:o.url,c:n}))),m:o._imports_0$11}:{},{n:!i.loading},i.loading?{}:e.e({o:i.showCopyBtn},i.showCopyBtn?{p:o._imports_1$2,q:e.o((o=>e.unref(l)(i.content)))}:{},{r:i.showVoiceBtn},i.showVoiceBtn?e.e({s:!e.unref(p)},e.unref(p)?{y:e.p({name:"volume"}),z:e.o(((...o)=>e.unref(c)&&e.unref(c)(...o)))}:e.e({t:e.unref(m)},e.unref(m)?{v:e.p({mode:"flower",size:26})}:{w:e.p({name:"volume"})},{x:e.o((o=>e.unref(d)()))})):{}))}}}),s=e._export_sfc(i,[["__scopeId","data-v-21fd3eba"]]);wx.createComponent(s);
