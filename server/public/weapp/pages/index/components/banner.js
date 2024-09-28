"use strict";const e=require("../../../common/vendor.js"),r=require("../../../utils/navigate.js"),s=require("../../../stores/app.js");if(require("../../../stores/navigationBarTitle.js"),require("../../../router/index.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../config/index.js"),require("../../../utils/client.js"),require("../../../enums/appEnums.js"),require("../../../enums/constantEnums.js"),require("../../../utils/auth.js"),require("../../../utils/cache.js"),require("../../../utils/unique-id.js"),require("../../../api/app.js"),require("../../../api/shop.js"),!Array){e.resolveComponent("u-swiper")()}Math;const i=e.defineComponent({__name:"banner",props:{isHidden:{type:Boolean},prop:null},setup(i){const u=i,{getImageUrl:t}=s.useAppStore(),n=e.ref();e.watchEffect((()=>{try{const e=null==u?void 0:u.prop.data,r=null==e?void 0:e.length;if(!r)return;for(let s=0;s<r;s++){const r=e[s];r.image=t(r.image)}n.value=e.filter((e=>1*e.isShow))}catch(e){console.log("轮播图数据错误",e)}}));const o=e=>{var s;const i=null==(s=n.value[e])?void 0:s.link;i&&r.navigateTo(i)};return(r,s)=>e.e({a:n.value.length&&i.isHidden},n.value.length&&i.isHidden?{b:e.o(o),c:e.p({list:n.value,height:280,name:"image",borderRadius:20})}:{})}});wx.createComponent(i);
