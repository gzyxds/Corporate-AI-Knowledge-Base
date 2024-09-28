"use strict";const e=require("../../../../common/vendor.js"),r=require("../../../../api/square.js"),i=require("../../../../api/task_reward.js"),a=require("../../../../stores/user.js");if(require("../../../../utils/request/index.js"),require("../../../../utils/request/http.js"),require("../../../../enums/requestEnums.js"),require("../../../../utils/request/cancel.js"),require("../../../../router/index.js"),require("../../../../utils/cache.js"),require("../../../../enums/constantEnums.js"),require("../../../../config/index.js"),require("../../../../utils/client.js"),require("../../../../enums/appEnums.js"),require("../../../../api/user.js"),require("../../../../utils/auth.js"),require("../../../../utils/unique-id.js"),!Array){(e.resolveComponent("u-lazy-load")+e.resolveComponent("u-waterfall")+e.resolveComponent("z-paging")+e.resolveComponent("draw-poster"))()}Math||((()=>"../../../../uni_modules/vk-uview-ui/components/u-lazy-load/u-lazy-load.js")+o+(()=>"../../../../uni_modules/vk-uview-ui/components/u-waterfall/u-waterfall.js")+(()=>"../../../../node-modules/z-paging/components/z-paging/z-paging.js"))();const o=()=>"../../../../uni_modules/vk-uview-ui/components/u-image/u-image.js",l=e.defineComponent({__name:"draw",props:{keyword:null},setup(o){const l=o,s=e.useRouter(),u=a.useUserStore(),n=e.ref([]),t=e.shallowRef(),d=e.shallowRef(null),c=e.shallowRef(),p=e.ref(!1),v=e.reactive({lists:[],current:""}),m=()=>{var e;null==(e=t.value)||e.reload()},g=async(e,i)=>{var a,o,s;try{const{lists:s=[]}=await r.getDrawSquare({keyword:l.keyword,category_id:v.current,page_size:i,page_no:e});1==e&&(null==(a=d.value)||a.clear()),null==(o=t.value)||o.complete(s)}catch(u){null==(s=t.value)||s.complete(!1)}},f=async i=>{var a,o;if(u.isLogin)try{await r.drawSquareCollect({records_id:i.id,status:i.is_collect?0:1}),0===v.current?(t.value.refresh(),null==(a=d.value)||a.remove(i.id)):null==(o=d.value)||o.modify(i.id,"is_collect",i.is_collect?0:1)}catch(l){console.error(l),e.index.$u.toast(JSON.stringify(l))}else s.navigateTo("/pages/login/login")},h=async e=>{u.isLogin?s.navigateTo({path:"/packages/pages/draw_detail/draw_detail",query:{id:e.records_id,collectId:e.id}}):s.navigateTo("/pages/login/login")};return e.watchDebounced((()=>l.keyword),(e=>{m()}),{debounce:500}),e.onMounted((async()=>{await(async()=>{v.lists=await i.getDrawCategoryList(),v.lists.unshift({name:"全部",id:""})})()})),(r,i)=>e.e({a:e.f(v.lists,((r,i,a)=>({a:e.t(r.name),b:r.id===v.current?1:"",c:r.id,d:e.o((e=>{return i=r.id,v.current=i,void m();var i}),r.id)}))),b:e.w((({leftList:r},i,a)=>({a:e.f(r,((r,i,o)=>{var l,s;return e.e({a:"1344e4d4-2-"+a+"-"+o+",1344e4d4-1",b:e.p({threshold:"0","border-radius":"10",image:(null==r?void 0:r.thumbnail)||(null==r?void 0:r.image),index:i}),c:e.n(r.is_collect?"praise-entry":"praise-leave"),d:e.o((e=>f(r)),i),e:e.t((null==r?void 0:r.prompts_cn)||(null==r?void 0:r.original_prompts.prompt)),f:null==(l=null==r?void 0:r.user_info)?void 0:l.name},(null==(s=null==r?void 0:r.user_info)?void 0:s.name)?{g:"1344e4d4-3-"+a+"-"+o+",1344e4d4-1",h:e.p({src:r.user_info.image,width:"40",height:"40","border-radius":"50"}),i:e.t(r.user_info.name)}:{},{j:i,k:e.o((e=>h(r)),i)})})),b:a,c:i})),{name:"left",path:"b",vueId:"1344e4d4-1,1344e4d4-0"}),c:e.w((({rightList:r},i,a)=>({a:e.f(r,((r,i,o)=>{var l,s;return e.e({a:"1344e4d4-4-"+a+"-"+o+",1344e4d4-1",b:e.p({threshold:"0","border-radius":"10",image:(null==r?void 0:r.thumbnail)||(null==r?void 0:r.image),index:i}),c:e.n(r.is_collect?"praise-entry":"praise-leave"),d:e.o((e=>f(r)),i),e:e.t((null==r?void 0:r.prompts_cn)||(null==r?void 0:r.original_prompts.prompt)),f:null==(l=null==r?void 0:r.user_info)?void 0:l.name},(null==(s=null==r?void 0:r.user_info)?void 0:s.name)?{g:"1344e4d4-5-"+a+"-"+o+",1344e4d4-1",h:e.p({src:r.user_info.image,width:"40",height:"40","border-radius":"50"}),i:e.t(r.user_info.name)}:{},{j:i,k:e.o((e=>h(r)),i)})})),b:a,c:i})),{name:"right",path:"c",vueId:"1344e4d4-1,1344e4d4-0"}),d:e.sr(d,"1344e4d4-1,1344e4d4-0",{k:"waterfallRef"}),e:e.o((e=>n.value=e)),f:e.p({"add-time":"50",modelValue:n.value}),g:e.sr(t,"1344e4d4-0",{k:"pagingRef"}),h:e.o(g),i:e.o((e=>n.value=e)),j:e.p({"auto-show-back-to-top":!0,fixed:!1,"auto-clean-list-when-reload":!0,"auto-scroll-to-top-when-reload":!1,modelValue:n.value}),k:p.value},p.value?{l:e.sr(c,"1344e4d4-6",{k:"posterRef"}),m:e.o((e=>p.value=!1))}:{})}}),s=e._export_sfc(l,[["__scopeId","data-v-1344e4d4"]]);wx.createComponent(s);
