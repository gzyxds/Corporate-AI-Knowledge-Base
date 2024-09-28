"use strict";const e=require("../../../../common/vendor.js"),n=require("../../../../api/app.js"),t=require("../../../../stores/app.js"),i=require("../../../../stores/user.js");if(require("../../../../utils/request/index.js"),require("../../../../utils/request/http.js"),require("../../../../enums/requestEnums.js"),require("../../../../utils/request/cancel.js"),require("../../../../router/index.js"),require("../../../../utils/cache.js"),require("../../../../enums/constantEnums.js"),require("../../../../config/index.js"),require("../../../../utils/client.js"),require("../../../../enums/appEnums.js"),require("../../../../api/shop.js"),require("../../../../api/user.js"),require("../../../../utils/auth.js"),require("../../../../utils/unique-id.js"),!Array){(e.resolveComponent("l-painter-image")+e.resolveComponent("l-painter-text")+e.resolveComponent("l-painter-view")+e.resolveComponent("l-painter"))()}Math||((()=>"../../../../uni_modules/lime-painter/components/l-painter-image/l-painter-image.js")+(()=>"../../../../uni_modules/lime-painter/components/l-painter-text/l-painter-text.js")+(()=>"../../../../uni_modules/lime-painter/components/l-painter-view/l-painter-view.js")+(()=>"../../../../uni_modules/lime-painter/components/l-painter/l-painter.js"))();const o=e.defineComponent({__name:"invite-poster",props:{options:{default:{code:{x:"",y:""},data:{content:"邀请您前来体验",x:"",y:""},default:1,defaultUrl1:"",defaultUrl2:"",posterUrl:"",showData:0}}},emits:["fail","success"],setup(o,{expose:s,emit:r}){const l=o,{getImageUrl:a,config:u}=t.useAppStore(),p=i.useUserStore(),{userInfo:d}=e.storeToRefs(p),c=e.ref(),x=e.reactive({qrcode:"",link:""}),m=e.computed((()=>{const e=null==l?void 0:l.options;return 1==e.default&&1==e.poster?a(e.defaultUrl1):1==e.default&&2==e.poster?a(null==l?void 0:l.options.defaultUrl2):2==e.default?a(e.posterUrl):void 0})),v=()=>{var n;try{console.log("props",l),null==(n=c.value)||n.canvasToTempFilePathSync({fileType:"png",pathType:"url",quality:1,success:n=>{console.log("生成结果",n),e.index.hideLoading(),r("success",n.tempFilePath)},fail:n=>{console.log(n),e.index.hideLoading(),e.index.$u.toast("调用海报错误",n)}})}catch(t){e.index.hideLoading(),e.index.$u.toast("调用海报错误")}};return s({drawCanvas:v,initPosterData:async()=>{var t;try{(null==(t=null==d?void 0:d.value)?void 0:t.sn)||await p.getUser();const{result:i}=await n.getMnpQrCode({user_sn:d.value.sn,page:"pages/index/index"});x.qrcode=i,await e.nextTick$1(),await v()}catch(i){console.log(i)}}}),(n,t)=>{var i,s,r,l,a,u,p,d,v,f;return e.e({a:e.p({src:x.qrcode,css:`\n                    box-sizing: border-box;\n                    position: absolute;\n                    z-index: 10;\n                    top: ${2*(null==(s=null==(i=o.options)?void 0:i.code)?void 0:s.y)}rpx;\n                    left:${2*(null==(l=null==(r=o.options)?void 0:r.code)?void 0:l.x)}rpx;\n                    width: 200rpx;\n                    height: 200rpx;\n                    border-radius: 12rpx;\n                    background-color: #FFFFFF;\n                `}),b:o.options.showData},o.options.showData?{c:e.p({text:null==(u=null==(a=o.options)?void 0:a.data)?void 0:u.content,css:`\n                    position: absolute;\n                    z-index: 10;\n                    display: block;\n                    color: #FFFFFF;\n                    font-size: 28rpx;\n                    top: ${2*(null==(d=null==(p=o.options)?void 0:p.data)?void 0:d.y)}rpx;\n                    left:${2*(null==(f=null==(v=o.options)?void 0:v.data)?void 0:f.x)}rpx;\n                `})}:{},{d:e.p({css:"\n                position: relative;\n                display: block;\n                box-sizing: border-box;\n                border-radius: 14rpx;\n                width: 100%;\n                height: 900rpx;\n            "}),e:e.sr(c,"342c330e-0",{k:"painterRef"}),f:e.p({isCanvasToTempFilePath:!1,"after-delay":300,css:`width: 540rpx; background-image: url(${e.unref(m)});`,"custom-style":"position: fixed; left: 200%; height: 900rpx;"})})}}});wx.createComponent(o);
