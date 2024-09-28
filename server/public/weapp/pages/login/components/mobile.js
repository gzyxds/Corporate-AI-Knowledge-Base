"use strict";const e=require("../../../common/vendor.js"),o=require("../../../api/app.js"),n=require("../../../enums/appEnums.js"),r=require("../../../stores/app.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../utils/auth.js"),require("../../../utils/cache.js"),require("../../../utils/unique-id.js"),require("../../../router/index.js"),require("../../../config/index.js"),require("../../../utils/client.js"),require("../../../api/shop.js"),!Array){(e.resolveComponent("u-icon")+e.resolveComponent("u-input")+e.resolveComponent("u-form-item")+e.resolveComponent("u-verification-code")+e.resolveComponent("router-navigate")+e.resolveComponent("u-form")+e.resolveComponent("agreement")+e.resolveComponent("u-button"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-input/u-input.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-verification-code/u-verification-code.js")+(()=>"../../../node-modules/uniapp-router-next/components/router-navigate/router-navigate.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-form/u-form.js")+(()=>"../../../components/agreement/agreement.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js"))();const s=e.defineComponent({__name:"mobile",emits:["login"],setup(s,{emit:u}){const t=r.useAppStore(),i=e.shallowRef(),a=e.reactive({scene:1,mobile:"",captcha:"",code:"",password:""}),m=e.computed((()=>3===a.scene)),p=e.computed((()=>1===a.scene)),c=e.computed((()=>{var e;return null==(e=t.getLoginConfig.register_way)?void 0:e.includes("1")})),l=e.computed((()=>e.index.$u.test.mobile(a.mobile))),d=e=>{a.scene=e},v=e.shallowRef(),g=e.ref(""),f=e=>{g.value=e},j=async()=>{var r,s;a.mobile&&l.value&&(a.captcha.length||!t.getLoginConfig.is_captcha?(null==(r=v.value)?void 0:r.canGetCode)&&(await o.smsSend({scene:n.SMSEnum.LOGIN,mobile:a.mobile}),e.index.$u.toast("发送成功"),null==(s=v.value)||s.start()):e.index.$u.toast("请先输入图形验证码"))},q=()=>{var o;if(null==(o=i.value)?void 0:o.checkAgreement())return a.mobile?1!=a.scene||a.password?3!=a.scene||a.code?void u("login",{...a}):e.index.$u.toast("请输入验证码"):e.index.$u.toast("请输入密码"):e.index.$u.toast("请输入手机号码")};return(o,n)=>e.e({a:e.p({size:36,name:"/static/images/icon/icon_mobile.png"}),b:e.o((e=>a.mobile=e)),c:e.p({border:!1,placeholder:"请输入手机号码",modelValue:a.mobile}),d:e.unref(m)},e.unref(m)?{e:e.p({size:36,name:"/static/images/icon/icon_code.png"}),f:e.o((e=>a.code=e)),g:e.p({placeholder:"请输入验证码",border:!1,modelValue:a.code}),h:e.sr(v,"3d447067-7,3d447067-4",{k:"uCodeRef"}),i:e.o(f),j:e.p({seconds:60,"change-text":"x秒"}),k:e.t(g.value),l:e.n(e.unref(l)?"text-primary":"text-muted"),m:e.o(j)}:{},{n:e.unref(p)},e.unref(p)?{o:e.p({size:36,name:"/static/images/icon/icon_password.png"}),p:e.o((e=>a.password=e)),q:e.p({type:"password",placeholder:"请输入密码",border:!1,modelValue:a.password}),r:e.p({to:"/packages/pages/forget_pwd/forget_pwd?type=1"})}:{},{s:e.p({"border-bottom":!0}),t:e.sr(i,"3d447067-12",{k:"agreementRef"}),v:e.o(q),w:e.p({type:"primary",shape:"circle","hover-class":"none"}),x:e.unref(m)},e.unref(m)?{y:e.o((e=>d(1)))}:{},{z:e.unref(p)},e.unref(p)?{A:e.o((e=>d(3)))}:{},{B:e.unref(c)},e.unref(c)?{C:e.p({to:"/packages/pages/register/register?type=1"})}:{})}});wx.createComponent(s);
