"use strict";const e=require("../../../../../common/vendor.js");if(!Array){(e.resolveComponent("u-input")+e.resolveComponent("u-form-item")+e.resolveComponent("uni-th")+e.resolveComponent("uni-tr")+e.resolveComponent("uni-td")+e.resolveComponent("uni-table")+e.resolveComponent("u-button"))()}Math||((()=>"../../../../../uni_modules/vk-uview-ui/components/u-input/u-input.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js")+(()=>"../../../../../uni_modules/uni-table/components/uni-th/uni-th.js")+(()=>"../../../../../uni_modules/uni-table/components/uni-tr/uni-tr.js")+(()=>"../../../../../uni_modules/uni-table/components/uni-td/uni-td.js")+(()=>"../../../../../uni_modules/uni-table/components/uni-table/uni-table.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+n)();const n=()=>"./add-menus.js",o=e.defineComponent({__name:"interface-config",props:{modelValue:null},emits:["update:modelValue"],setup(n,{emit:o}){const t=n,u=e.useVModel(t,"modelValue",o),l=e.reactive({show:!1,type:"add",data:{},index:0}),i=(n="add",o={images:[],content:"",keyword:""})=>{var t;l.show=!0,l.type=n,l.data=e.lodashExports.cloneDeep(o),l.index=null==(t=u.value.menus)?void 0:t.indexOf(o)},s=e=>{var n,o,t;switch(l.type){case"add":(null==(n=u.value.menus)?void 0:n.length)<3&&(null==(o=u.value.menus)||o.push(e));break;case"edit":-1!==l.index&&(null==(t=u.value.menus)||t.splice(l.index,1,e))}};return(n,o)=>({a:e.o((n=>e.unref(u).welcome_introducer=n)),b:e.p({type:"textarea",height:200,placeholder:"",border:!0,modelValue:e.unref(u).welcome_introducer}),c:e.p({label:"欢迎语",prop:"welcome_introducer"}),d:e.o((n=>e.unref(u).copyright=n)),e:e.p({placeholder:"",border:!0,modelValue:e.unref(u).copyright}),f:e.p({label:"底部标识",prop:"copyright"}),g:e.p({width:"100"}),h:e.p({width:"100"}),i:e.p({width:"80"}),j:e.f(e.unref(u).menus,((n,o,t)=>{var l,s,r,a;return e.e({a:e.t(n.keyword),b:"fb4c6608-11-"+t+",fb4c6608-10-"+t,c:n.content},(n.content,{}),{d:n.content&&(null==(l=n.images)?void 0:l.length)},(n.content&&(null==(s=n.images)||s.length),{}),{e:null==(r=n.images)?void 0:r.length},(null==(a=n.images)||a.length,{}),{f:"fb4c6608-12-"+t+",fb4c6608-10-"+t,g:e.o((e=>i("edit",n)),o),h:e.o((e=>(e=>{var n;null==(n=u.value.menus)||n.splice(e,1)})(o)),o),i:"fb4c6608-13-"+t+",fb4c6608-10-"+t,j:o,k:"fb4c6608-10-"+t+",fb4c6608-5"})})),k:e.sr("table","fb4c6608-5,fb4c6608-4"),l:e.p({stripe:!0,emptyText:"暂无更多数据"}),m:e.o((e=>i())),n:e.p({type:"primary",size:"medium",disabled:e.unref(u).menus.length>=3}),o:e.p({label:"菜单设置"}),p:e.o(s),q:e.o((e=>l.show=e)),r:e.o((e=>l.data=e)),s:e.p({type:l.type,show:l.show,data:l.data})})}});wx.createComponent(o);
