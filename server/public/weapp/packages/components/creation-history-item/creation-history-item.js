"use strict";const e=require("../../../common/vendor.js"),o=require("../../../stores/app.js"),t=require("../../../hooks/useAudioPlay.js"),i=require("../../../api/chat.js");if(require("../../../api/app.js"),require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../utils/auth.js"),require("../../../utils/cache.js"),require("../../../utils/unique-id.js"),require("../../../router/index.js"),require("../../../config/index.js"),require("../../../utils/client.js"),require("../../../enums/appEnums.js"),require("../../../api/shop.js"),!Array){(e.resolveComponent("u-tag")+e.resolveComponent("u-read-more")+e.resolveComponent("u-loading")+e.resolveComponent("u-icon"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-tag/u-tag.js")+r+(()=>"../../../uni_modules/vk-uview-ui/components/u-read-more/u-read-more.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-loading/u-loading.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js"))();const r=()=>"../../../components/chat-record-item/text-item.js",n=e.defineComponent({__name:"creation-history-item",props:{title:{default:""},time:{default:""},content:{default:""},overflow:{type:Boolean,default:!1},showCopy:{type:Boolean,default:!0},showRewrite:{type:Boolean,default:!1},showVoice:{type:Boolean,default:!1},recordId:null,index:null,modelName:{default:""}},emits:["click-title","copy","delete","rewrite"],setup(r,{emit:n}){const u=r,s=o.useAppStore(),{play:a,audioPlaying:l,pause:m,audioLoading:d}=t.useAudioPlay({api:i.getChatBroadcast,dataTransform:e=>e.file,params:{records_id:u.recordId,content:u.index,type:1}});return(o,t)=>e.e({a:e.t(r.title),b:e.o((e=>n("click-title",r.title))),c:e.t(r.time),d:r.modelName&&e.unref(s).getChatConfig.is_show_model},r.modelName&&e.unref(s).getChatConfig.is_show_model?{e:e.p({size:"mini",text:r.modelName,type:"success"})}:{},{f:r.overflow},r.overflow?{g:e.p({"is-markdown":!!e.unref(s).getChatConfig.is_markdown,content:r.content}),h:e.p({toggle:!0})}:{i:e.p({"is-markdown":!!e.unref(s).getChatConfig.is_markdown,content:r.content})},{j:r.showVoice},r.showVoice?e.e({k:!e.unref(l)},e.unref(l)?{p:e.p({name:"volume"}),q:e.o(((...o)=>e.unref(m)&&e.unref(m)(...o)))}:e.e({l:e.unref(d)},e.unref(d)?{m:e.p({mode:"flower",size:26})}:{n:e.p({name:"volume"})},{o:e.o(((...o)=>e.unref(a)&&e.unref(a)(...o)))})):{},{r:r.showRewrite},r.showRewrite?{s:e.p({name:"edit-pen"}),t:e.o((e=>n("rewrite")))}:{},{v:r.showCopy},r.showCopy?{w:e.p({name:"file-text"}),x:e.o((e=>n("copy",r.content)))}:{})}});wx.createComponent(n);
