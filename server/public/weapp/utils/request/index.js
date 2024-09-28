"use strict";const e=require("../../common/vendor.js"),r=require("./http.js"),t=require("../../enums/requestEnums.js"),s=require("../../stores/user.js"),o=require("../../router/index.js"),n=require("../../config/index.js"),u=require("../client.js"),i={requestInterceptorsHook(e,r){const{urlPrefix:t,baseUrl:o,withToken:i}=r;e.header=e.header||{},t&&(e.url=`${t}${e.url}`),o&&(e.url=`${o}${e.url}`);const a=s.useUserStore().token||null;return i&&!e.header.token&&(e.header.token=a),e.header.version=n.config.version,e.header.terminal=u.getClient(),e},async responseInterceptorsHook(r,n,u){var i;const{isTransformResponse:a,isReturnDefaultResponse:c,isAuth:d}=n;if(c)return r;if(!a)return r.data;const{logout:l}=s.useUserStore(),{code:m,data:p,msg:h,show:q}=r.data;switch(m){case t.RequestCodeEnum.SUCCESS:return h&&q&&e.index.$u.toast(h),p;case t.RequestCodeEnum.FAILED:case t.RequestCodeEnum.KEY_INVALID:return h&&e.index.$u.toast(h),Promise.reject(h);case t.RequestCodeEnum.LOGIN_EMPTY:return l(),o.router.reLaunch("/pages/index/index");case t.RequestCodeEnum.TOKEN_INVALID:return l(),d&&"GET"!==(null==(i=u.method)?void 0:i.toUpperCase())?o.router.navigateTo({path:"/pages/login/login"}):Promise.reject(h);default:return p}},async responseInterceptorsCatchHook(r,s){var o;return(null==(o=r.method)?void 0:o.toUpperCase())==t.RequestMethodsEnum.POST&&e.index.$u.toast("请求失败，请重试"),s.errMsg||s}},a={requestOptions:{timeout:n.config.timeout},baseUrl:n.config.baseUrl,isReturnDefaultResponse:!1,isTransformResponse:!0,urlPrefix:n.config.urlPrefix,ignoreCancel:!1,withToken:!0,isAuth:!1,retryCount:2,retryTimeout:1e3,requestHooks:i};const c=new r.HttpRequest(e.merge(a,d||{}));var d;exports.request=c;
