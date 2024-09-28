"use strict";const e=require("../../../../../common/vendor.js");if(!Array){(e.resolveComponent("u-input")+e.resolveComponent("u-form-item")+e.resolveComponent("app-upload")+e.resolveComponent("u-form")+e.resolveComponent("u-button")+e.resolveComponent("u-popup"))()}Math||((()=>"../../../../../uni_modules/vk-uview-ui/components/u-input/u-input.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js")+(()=>"../../../../../components/app-upload/app-upload.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-form/u-form.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js"))();const o=e.defineComponent({__name:"add-menus",props:{show:{type:Boolean},type:null,data:null},emits:["update:show","update:data","confirm"],setup(o,{emit:u}){const n=o,t=e.shallowRef(),{show:p,data:r}=e.useVModels(n,u),a={keyword:[{required:!0,message:"请输入关键词"}]},l=()=>{t.value.validate((o=>{o&&(u("confirm",e.lodashExports.cloneDeep(r.value)),p.value=!1)}))};return e.watch(p,(e=>{e&&setTimeout((()=>{t.value.setRules(a)}))})),(o,u)=>({a:e.o((o=>e.unref(r).keyword=o)),b:e.p({placeholder:"请输入关键词",border:!0,modelValue:e.unref(r).keyword}),c:e.p({label:"关键词",prop:"keyword",required:!0}),d:e.o((o=>e.unref(r).content=o)),e:e.p({placeholder:"请输入回复内容，10000个字以内",border:!0,type:"textarea",height:300,modelValue:e.unref(r).content}),f:e.p({label:"回复内容",prop:"content"}),g:e.o((o=>e.unref(r).images=o)),h:e.p({"max-count":9,"return-type":"string-array",disabled:!1,modelValue:e.unref(r).images}),i:e.p({label:"上传图片"}),j:e.sr(t,"52aed212-1,52aed212-0",{k:"uFormRef"}),k:e.p({model:e.unref(r),"label-position":"top","border-bottom":!1}),l:e.o(l),m:e.p({type:"primary"}),n:e.o((o=>e.isRef(p)?p.value=o:null)),o:e.p({"safe-area-inset-bottom":!0,closeable:!0,"border-radius":"16",mode:"bottom",modelValue:e.unref(p)})})}});wx.createComponent(o);
