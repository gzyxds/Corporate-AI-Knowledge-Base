"use strict";const e=require("../../common/vendor.js"),o=require("../../common/assets.js"),t=require("../../hooks/useCopy.js"),i=require("../../stores/app.js");if(require("../../api/app.js"),require("../../utils/request/index.js"),require("../../utils/request/http.js"),require("../../enums/requestEnums.js"),require("../../utils/request/cancel.js"),require("../../stores/user.js"),require("../../api/user.js"),require("../../enums/constantEnums.js"),require("../../utils/auth.js"),require("../../utils/cache.js"),require("../../utils/unique-id.js"),require("../../router/index.js"),require("../../config/index.js"),require("../../utils/client.js"),require("../../enums/appEnums.js"),require("../../api/shop.js"),!Array){(e.resolveComponent("u-image")+e.resolveComponent("u-tag")+e.resolveComponent("audio-play")+e.resolveComponent("u-loading"))()}Math||((()=>"../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+(()=>"../../uni_modules/vk-uview-ui/components/u-tag/u-tag.js")+n+r+(()=>"../audio-play/audio-play.js")+s+(()=>"../../uni_modules/vk-uview-ui/components/u-loading/u-loading.js"))();const s=()=>"./text-item.js",n=()=>"./record-image.js",r=()=>"./record-file.js",l=e.defineComponent({__name:"chat-record-item",props:{recordId:null,type:null,content:{default:""},showCopyBtn:{type:Boolean,default:!0},showCollectBtn:{type:Boolean,default:!0},showRewriteBtn:{type:Boolean,default:!1},showPosterBtn:{type:Boolean,default:!1},showVoiceBtn:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},index:null,isCollect:null,avatar:null,time:{default:""},audio:null,chatType:{default:1},images:{default:()=>[]},files:{default:()=>[]},videos:{default:()=>[]},filesPlugin:{default:()=>[]},bg:null,color:null,modelName:{default:""}},emits:["close","rewrite","update","click-link","click-poster"],setup(s,{emit:n}){const r=s,l=i.useAppStore(),{copy:u}=t.useCopy(),a=e.computed((()=>"left"==r.type));return(t,i)=>e.e({a:e.p({src:s.avatar,width:60,shape:"circle",height:60}),b:s.time},s.time?e.e({c:e.t(s.time),d:s.modelName&&e.unref(l).getChatConfig.is_show_model},s.modelName&&e.unref(l).getChatConfig.is_show_model?{e:e.p({size:"mini",text:s.modelName,type:"success"})}:{}):{},{f:s.filesPlugin.length},s.filesPlugin.length?{g:e.f(s.filesPlugin,((o,t,i)=>e.e({a:"image"==o.type},"image"==o.type?{b:"27b5e006-2-"+i,c:e.p({url:o.url,name:o.name})}:"file"==o.type?{e:"27b5e006-3-"+i,f:e.p({url:o.url,name:o.name})}:{},{d:"file"==o.type,g:t})))}:{},{h:s.audio},s.audio?{i:e.p({url:s.audio,reverse:"right"===s.type,"bg-color":"#fff"}),j:"right"===s.type?1:""}:{},{k:e.unref(e.isArray)(s.content)},e.unref(e.isArray)(s.content)?{l:e.f(s.content,((o,t,i)=>({a:"27b5e006-5-"+i,b:e.p({"is-markdown":e.unref(a),content:o,loading:s.loading,index:t,"record-id":s.recordId,"show-copy-btn":s.showCopyBtn&&"left"===s.type,type:s.chatType,images:s.images,files:s.files,videos:s.videos,"show-voice-btn":e.unref(l).getIsVoiceOpen&&s.showVoiceBtn,color:s.color}),c:t,d:t>0?1:""})))}:{m:e.o((e=>n("click-link",e))),n:e.p({"is-markdown":e.unref(a),content:s.content,loading:s.loading,index:0,"record-id":s.recordId,"show-copy-btn":s.showCopyBtn&&"left"===s.type,"show-voice-btn":e.unref(l).getIsVoiceOpen&&s.showVoiceBtn,color:s.color,images:s.images,files:s.files,videos:s.videos,type:s.chatType})},{o:s.loading},s.loading?{p:e.p({mode:"flower"})}:{},{q:e.n(`chat-record-item__${s.type}-content`),r:e.s(s.color?`--color:${s.color}`:""),s:"right"==s.type&&s.showCopyBtn},"right"==s.type&&s.showCopyBtn?{t:o._imports_0$7,v:e.o((o=>e.unref(u)(s.content)))}:{},{w:"right"==s.type?1:"",x:e.n(`chat-record-item__${s.type}`),y:"left"==s.type},(s.type,{}),{z:e.s(s.bg?`--bg-color:${s.bg}`:"")})}}),u=e._export_sfc(l,[["__scopeId","data-v-27b5e006"]]);wx.createComponent(u);
