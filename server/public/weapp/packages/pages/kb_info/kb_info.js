"use strict";const e=require("../../../common/vendor.js"),r=require("../../../config/index.js"),s=require("../../../stores/user.js");require("../../../api/user.js"),require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../enums/constantEnums.js"),require("../../../utils/client.js"),require("../../../enums/appEnums.js"),require("../../../utils/auth.js"),require("../../../utils/unique-id.js");const u=e.defineComponent({__name:"kb_info",setup(u){const i=s.useUserStore(),t=e.useRoute().query.id,n=e.computed((()=>`${r.config.baseUrl}mobile/packages/pages/kb_info/kb_info?id=${t}&webview=1&token=${i.token}`));return(r,s)=>({a:r.$theme.navColor,b:r.$theme.navBgColor,c:r.$theme.pageStyle,d:e.unref(n)})}}),i=e._export_sfc(u,[["__scopeId","data-v-9e9a25a6"]]);wx.createPage(i);
