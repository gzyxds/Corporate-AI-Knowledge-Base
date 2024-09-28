"use strict";const e=require("../../../common/vendor.js"),s=require("../../../api/shop.js");if(require("../../../utils/client.js"),require("../../../enums/appEnums.js"),require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../utils/auth.js"),require("../../../utils/cache.js"),require("../../../utils/unique-id.js"),require("../../../router/index.js"),require("../../../config/index.js"),!Array){(e.resolveComponent("w-customer-service")+e.resolveComponent("tabbar"))()}Math||((()=>"../../../components/widgets/customer-service/customer-service.js")+(()=>"../../../components/tabbar/tabbar.js"))();const r=e.defineComponent({__name:"customer_service",setup(r){const t=e.reactive({pages:[]}),n=async()=>{const e=await s.getDecorate({id:3});t.pages=JSON.parse(e.data),console.log(t.pages)};return e.onLoad((()=>{n()})),e.onPullDownRefresh((async()=>{n(),e.index.stopPullDownRefresh()})),(s,r)=>({a:s.$theme.navColor,b:s.$theme.navBgColor,c:s.$theme.pageStyle,d:e.f(t.pages,((s,r,t)=>e.e({a:"customer-service"==s.name},"customer-service"==s.name?{b:"502ef3f5-0-"+t,c:e.p({content:s.content,styles:s.styles})}:{},{d:r})))})}});wx.createPage(r);
