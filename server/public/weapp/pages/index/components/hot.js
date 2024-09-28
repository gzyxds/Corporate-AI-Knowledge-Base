"use strict";const e=require("../../../common/vendor.js"),r=require("../../../common/assets.js"),i=require("../../../stores/app.js"),s=require("../../../api/create.js"),t=require("../../../stores/user.js");if(require("../../../api/app.js"),require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../enums/constantEnums.js"),require("../../../config/index.js"),require("../../../utils/client.js"),require("../../../enums/appEnums.js"),require("../../../api/shop.js"),require("../../../api/user.js"),require("../../../utils/auth.js"),require("../../../utils/unique-id.js"),!Array){(e.resolveComponent("u-image")+e.resolveComponent("u-icon"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js"))();const o=e.defineComponent({__name:"hot",props:{isHidden:{type:Boolean},prop:null},setup(o){const u=o,n=e.useRouter(),a=t.useUserStore(),{getImageUrl:c}=i.useAppStore(),p=e.ref([]);e.watch((()=>u.prop.data),(e=>{p.value=e}),{deep:!0,immediate:!0});return(i,t)=>e.e({a:o.isHidden},o.isHidden?{b:e.t(o.prop.title),c:e.f(o.prop.data,((r,i,t)=>e.e({a:"2960d562-0-"+t,b:e.p({src:e.unref(c)(r.image),width:"80",height:"80","border-radius":"12"}),c:e.t(r.name),d:e.t(r.tips),e:e.t(r.user_count),f:!r.is_collect},r.is_collect?{i:"2960d562-2-"+t,j:e.p({name:"star-fill",size:"32",color:"#ffcd2c"})}:{g:"2960d562-1-"+t,h:e.p({name:"star",size:"32",color:"#9a9a9a"})},{k:e.t(r.collect_count),l:e.o((e=>(async(e,r)=>{if(a.isLogin)try{await s.collection({id:e.id}),u.prop.data[r].collect_count+=1,u.prop.data[r].is_collect=!e.is_collect}catch(i){console.log("收藏失败",i)}else n.navigateTo("/pages/login/login")})(r,i)),i),m:i,n:e.o((e=>{return i=r.id,void n.navigateTo({path:"/packages/pages/create/create",query:{id:i}});var i}),i)}))),d:r._imports_0$6,e:`repeat(${o.prop.showType}, minmax(0, 1fr))`}:{})}});wx.createComponent(o);
