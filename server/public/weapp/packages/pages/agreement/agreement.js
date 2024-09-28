"use strict";const e=require("../../../common/vendor.js"),r=require("../../../api/app.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../utils/auth.js"),require("../../../utils/cache.js"),require("../../../utils/unique-id.js"),require("../../../router/index.js"),require("../../../config/index.js"),require("../../../utils/client.js"),require("../../../enums/appEnums.js"),!Array){e.resolveComponent("mp-html")()}Math;const t=e.defineComponent({__name:"agreement",setup(t){const s=e.ref(""),u=e.ref("");return e.onLoad((t=>{t.type&&(s.value=t.type,(async t=>{const s=await r.getPolicy({type:t});u.value=s.content,e.index.setNavigationBarTitle({title:String(s.title||"协议政策")})})(s.value))})),(r,t)=>({a:r.$theme.navColor,b:r.$theme.navBgColor,c:r.$theme.pageStyle,d:e.p({content:u.value})})}});wx.createPage(t);
