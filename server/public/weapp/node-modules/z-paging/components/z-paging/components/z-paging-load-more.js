"use strict";const t=require("../../../../../common/vendor.js"),e={name:"z-paging-load-more",data:()=>({M:t.Enum.More,zTheme:{title:{white:"#efefef",black:"#a4a4a4"},line:{white:"#efefef",black:"#eeeeee"},circleBorder:{white:"#aaaaaa",black:"#c8c8c8"},circleBorderTop:{white:"#ffffff",black:"#444444"},flower:{white:t.zStatic.base64FlowerWhite,black:t.zStatic.base64Flower},indicator:{white:"#eeeeee",black:"#777777"}}}),props:["zConfig"],computed:{ts(){return this.c.defaultThemeStyle},c(){return this.zConfig||{}},ownLoadingMoreText(){return[this.c.defaultText,this.c.loadingText,this.c.noMoreText,this.c.failText][this.finalStatus]},finalStatus(){return this.c.defaultAsLoading&&this.c.status===this.M.Default?this.M.Loading:this.c.status},finalLoadingIconType(){return this.c.loadingIconType}},methods:{doClick(){this.$emit("doClick")}}};const o=t._export_sfc(e,[["render",function(e,o,i,n,a,c){return t.e({a:!c.c.hideContent},c.c.hideContent?{}:t.e({b:c.c.showNoMoreLine&&c.finalStatus===a.M.NoMore},c.c.showNoMoreLine&&c.finalStatus===a.M.NoMore?{c:"rpx"===c.c.unit?1:"",d:"px"===c.c.unit?1:"",e:t.s({backgroundColor:a.zTheme.line[c.ts]}),f:t.s(c.c.noMoreLineCustomStyle)}:{},{g:c.finalStatus===a.M.Loading&&!!c.c.loadingIconCustomImage},c.finalStatus===a.M.Loading&&c.c.loadingIconCustomImage?{h:c.c.loadingIconCustomImage,i:t.s(c.c.iconCustomStyle),j:c.c.loadingAnimated?1:"",k:"rpx"===c.c.unit?1:"",l:"px"===c.c.unit?1:""}:{},{m:c.finalStatus===a.M.Loading&&"flower"===c.finalLoadingIconType&&!c.c.loadingIconCustomImage.length},c.finalStatus!==a.M.Loading||"flower"!==c.finalLoadingIconType||c.c.loadingIconCustomImage.length?{}:{n:"rpx"===c.c.unit?1:"",o:"px"===c.c.unit?1:"",p:t.s(c.c.iconCustomStyle),q:a.zTheme.flower[c.ts]},{r:c.finalStatus===a.M.Loading&&"circle"===c.finalLoadingIconType&&!c.c.loadingIconCustomImage.length},c.finalStatus!==a.M.Loading||"circle"!==c.finalLoadingIconType||c.c.loadingIconCustomImage.length?{}:{s:"rpx"===c.c.unit?1:"",t:"px"===c.c.unit?1:"",v:t.s({borderColor:a.zTheme.circleBorder[c.ts],borderTopColor:a.zTheme.circleBorderTop[c.ts]}),w:t.s(c.c.iconCustomStyle)},{x:!c.c.isChat||!c.c.chatDefaultAsLoading&&c.finalStatus===a.M.Default||c.finalStatus===a.M.Fail},!c.c.isChat||!c.c.chatDefaultAsLoading&&c.finalStatus===a.M.Default||c.finalStatus===a.M.Fail?{y:t.t(c.ownLoadingMoreText),z:"rpx"===c.c.unit?1:"",A:"px"===c.c.unit?1:"",B:t.s({color:a.zTheme.title[c.ts]}),C:t.s(c.c.titleCustomStyle)}:{},{D:c.c.showNoMoreLine&&c.finalStatus===a.M.NoMore},c.c.showNoMoreLine&&c.finalStatus===a.M.NoMore?{E:"rpx"===c.c.unit?1:"",F:"px"===c.c.unit?1:"",G:t.s({backgroundColor:a.zTheme.line[c.ts]}),H:t.s(c.c.noMoreLineCustomStyle)}:{}),{I:"rpx"===c.c.unit?1:"",J:"px"===c.c.unit?1:"",K:t.s(c.c.customStyle),L:t.o(((...t)=>c.doClick&&c.doClick(...t)))})}],["__scopeId","data-v-9d08e2f6"]]);wx.createComponent(o);
