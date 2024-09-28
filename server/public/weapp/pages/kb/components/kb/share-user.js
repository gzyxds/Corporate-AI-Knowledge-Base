"use strict";const e=require("../../../../common/vendor.js"),u=require("../../../../api/kb.js");if(require("../../../../utils/request/index.js"),require("../../../../utils/request/http.js"),require("../../../../enums/requestEnums.js"),require("../../../../utils/request/cancel.js"),require("../../../../stores/user.js"),require("../../../../api/user.js"),require("../../../../enums/constantEnums.js"),require("../../../../utils/auth.js"),require("../../../../utils/cache.js"),require("../../../../utils/unique-id.js"),require("../../../../router/index.js"),require("../../../../config/index.js"),require("../../../../utils/client.js"),require("../../../../enums/appEnums.js"),!Array){(e.resolveComponent("u-search")+e.resolveComponent("u-avatar")+e.resolveComponent("u-tag")+e.resolveComponent("u-button")+e.resolveComponent("u-icon")+e.resolveComponent("u-popup")+e.resolveComponent("u-navbar"))()}Math||((()=>"../../../../uni_modules/vk-uview-ui/components/u-search/u-search.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-avatar/u-avatar.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-tag/u-tag.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-navbar/u-navbar.js"))();const s=e.defineComponent({__name:"share-user",props:{show:{type:Boolean},num:{default:0},kbId:null,isOwner:{type:Boolean}},emits:["update:show","update"],setup(s,{emit:i}){const t=s,o=e.ref(""),a=e.ref(""),r=e.ref({lists:[],share_count:0}),n=e.useVModel(t,"show",i),d=e.ref(!1),l=()=>{a.value="",m.value=[],n.value=!1,d.value=!0},c=()=>{n.value=!0,d.value=!1},p=async()=>{r.value=await u.getSharedList({kb_id:t.kbId,keyword:o.value,page_type:0})},m=e.ref([]),v=async()=>{const{lists:e=[]}=await u.getSharedUsers({kb_id:t.kbId,keyword:a.value});m.value=e};return e.watch(n,(e=>{o.value="",e?p():i("update")})),e.watch(d,(e=>{e||i("update")})),(i,b)=>e.e({a:e.t(`共享用户（${r.value.share_count||s.num}）`),b:e.o(p),c:e.o(p),d:e.o(p),e:e.o((e=>o.value=e)),f:e.p({disabled:!s.isOwner,"show-action":!0,placeholder:"请输入用户编号/昵称/手机号添加","action-text":"搜索",modelValue:o.value}),g:e.f(r.value.lists,((i,o,a)=>e.e({a:"b195defc-2-"+a+",b195defc-0",b:e.p({src:i.avatar,size:74}),c:e.t(i.nickname),d:i.is_super},i.is_super?{e:"b195defc-3-"+a+",b195defc-0",f:e.p({type:"primary",text:"所有者",size:"mini"})}:{},{g:!i.is_super},i.is_super?{}:e.e({h:s.isOwner},s.isOwner?{i:e.o((s=>(async(s,i)=>{const{confirm:o}=await e.index.showModal({title:"温馨提示",content:`确定转移知识库给：${i}`});o&&(await u.kbTransfer({id:t.kbId,user_id:s}),n.value=!1)})(i.user_id,i.nickname)),i.id),j:"b195defc-4-"+a+",b195defc-0",k:e.p({plain:!0,type:"primary",customStyle:{height:"56rpx",fontSize:"26rpx"}})}:{},{l:s.isOwner},s.isOwner?{m:e.o((s=>(async s=>{const{confirm:i}=await e.index.showModal({title:"温馨提示",content:"确定移除？"});i&&(await u.sharedDel({id:s}),p())})(i.id)),i.id),n:"b195defc-5-"+a+",b195defc-0",o:e.p({plain:!0,type:"error",customStyle:{height:"56rpx",fontSize:"26rpx"}})}:{}),{p:i.id}))),h:s.isOwner},s.isOwner?{i:e.p({name:"man-add"}),j:e.o(l)}:{},{k:e.o((u=>e.isRef(n)?n.value=u:null)),l:e.p({closeable:!0,"border-radius":"16",mode:"bottom",modelValue:e.unref(n)}),m:e.p({"back-text":"返回",title:"添加用户","is-fixed":!1,"title-bold":!0,"title-color":"#333","z-index":"2","custom-back":c}),n:e.o(v),o:e.o(v),p:e.o(v),q:e.o((e=>a.value=e)),r:e.p({"show-action":!0,placeholder:"请输入用户编号/昵称/手机号添加","action-text":"搜索",modelValue:a.value}),s:e.f(m.value,((s,i,o)=>e.e({a:"b195defc-10-"+o+",b195defc-7",b:e.p({src:s.avatar,size:74}),c:e.t(s.nickname),d:!s.is_added},s.is_added?{}:{e:e.o((e=>(async e=>{await u.sharedAdd({kb_id:t.kbId,user_id:e}),v(),p()})(s.id)),s.id),f:"b195defc-11-"+o+",b195defc-7",g:e.p({plain:!0,type:"primary",customStyle:{height:"56rpx",fontSize:"26rpx"}})},{h:s.id}))),t:e.o((e=>d.value=e)),v:e.p({"safe-area-inset-bottom":!0,closeable:!0,"border-radius":"16",mode:"bottom",modelValue:d.value})})}});wx.createComponent(s);
