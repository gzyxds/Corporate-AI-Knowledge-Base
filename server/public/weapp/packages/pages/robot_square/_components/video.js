"use strict";const e=require("../../../../common/vendor.js"),i=require("../../../../api/square.js"),r=require("../../../../api/task_reward.js"),s=require("../../../../stores/user.js");if(require("../../../../utils/request/index.js"),require("../../../../utils/request/http.js"),require("../../../../enums/requestEnums.js"),require("../../../../utils/request/cancel.js"),require("../../../../router/index.js"),require("../../../../utils/cache.js"),require("../../../../enums/constantEnums.js"),require("../../../../config/index.js"),require("../../../../utils/client.js"),require("../../../../enums/appEnums.js"),require("../../../../api/user.js"),require("../../../../utils/auth.js"),require("../../../../utils/unique-id.js"),!Array){(e.resolveComponent("u-image")+e.resolveComponent("z-paging"))()}Math||((()=>"../../../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+(()=>"../../../../node-modules/z-paging/components/z-paging/z-paging.js"))();const t=e.defineComponent({__name:"video",props:{keyword:null},setup(t){const o=t,a=e.useRouter(),u=s.useUserStore(),n=e.ref([]),l=e.shallowRef(),c=e.reactive({lists:[],current:""});e.ref(""),e.ref(!1);const d=()=>{var e;null==(e=l.value)||e.refresh()},p=async(e,r)=>{var s,t;try{const{lists:t=[]}=await i.getVideoSquare({keyword:o.keyword,style_id:c.current,page_size:r,page_no:e});null==(s=l.value)||s.complete(t)}catch(a){null==(t=l.value)||t.complete(!1)}};return e.watch((()=>c.current),(()=>{d()})),e.watchDebounced((()=>o.keyword),(e=>{d()}),{debounce:500,immediate:!1}),(async()=>{c.lists=await r.getVideoStyle(),c.lists.unshift({name:"全部",id:""})})(),(r,s)=>({a:e.f(c.lists,((i,r,s)=>({a:e.t(i.name),b:i.id===c.current?1:"",c:i.id,d:e.o((e=>c.current=i.id),i.id)}))),b:e.f(n.value,((r,s,t)=>{var o,n;return e.e({a:r.video_url,b:e.n(r.is_collect?"praise-entry":"praise-leave"),c:e.o((s=>(async r=>{if(u.isLogin)try{await i.videoSquareCollect({records_id:r.id,status:r.is_collect?0:1}),0===c.current?d():r.is_collect=r.is_collect?0:1}catch(s){console.error(s),e.index.$u.toast(JSON.stringify(s))}else a.navigateTo("/pages/login/login")})(r)),s),d:e.t(r.prompt),e:null==(o=null==r?void 0:r.user_info)?void 0:o.name},(null==(n=null==r?void 0:r.user_info)?void 0:n.name)?{f:"f31ea500-1-"+t+",f31ea500-0",g:e.p({src:r.user_info.image,width:"40",height:"40","border-radius":"50"}),h:e.t(r.user_info.name)}:{},{i:s,j:e.o((e=>(async e=>{u.isLogin?a.navigateTo({path:"/packages/pages/video_detail/video_detail",query:{id:e.records_id,collectId:e.id}}):a.navigateTo("/pages/login/login")})(r)),s)})})),c:e.sr(l,"f31ea500-0",{k:"pagingRef"}),d:e.o(p),e:e.o((e=>n.value=e)),f:e.p({"auto-show-back-to-top":!0,fixed:!1,"auto-clean-list-when-reload":!0,"auto-scroll-to-top-when-reload":!1,modelValue:n.value})})}}),o=e._export_sfc(t,[["__scopeId","data-v-f31ea500"]]);wx.createComponent(o);
