"use strict";const e=require("../../../../common/vendor.js"),t=require("../../../../common/assets.js");if(!Array){(e.resolveComponent("u-image")+e.resolveComponent("u-icon")+e.resolveComponent("u-form-item"))()}Math||(o+(()=>"../../../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js"))();const o=()=>"./components/item-title.js",n=e.defineComponent({__name:"draw-model",props:{modelValue:{default:()=>[]},cateList:null,modelList:null},emits:["update:modelValue","changeCate"],setup(o,{emit:n}){const u=o,{modelValue:i}=e.useVModels(u,n),m=e.ref(0),a=e.useThrottleFn((t=>{const o=e.isNumber(t)?t:t.detail.current;m.value!==o&&(m.value=o,n("changeCate",u.cateList[o].value))}),50);return(n,u)=>({a:e.p({title:"模型选择",tips:"让AI根据此模型的风格绘制图片，修改合适的描述词和参数可以让生成效果更加精美",required:!0}),b:e.f(o.cateList,((t,o,n)=>({a:e.t(t.label),b:o,c:o===m.value?1:"",d:e.o((t=>e.unref(a)(o)),o)}))),c:e.f(o.cateList,((n,u,m)=>e.e(o.modelList.length?{a:e.f(o.modelList,((t,o,n)=>e.e({a:"86dd2ad0-2-"+m+"-"+n+",86dd2ad0-1",b:e.p({src:t.cover,width:"100%",height:"100%"}),c:e.unref(i)===t.model_name},e.unref(i)===t.model_name?{d:"86dd2ad0-3-"+m+"-"+n+",86dd2ad0-1",e:e.p({name:"checkmark-circle-fill",size:40})}:{},{f:e.t(t.title),g:e.o((e=>{return o=t.model_name,void(i.value=o);var o}),t.id),h:t.id})))}:{b:e.unref(t.EmptyImage)},{c:u}))),d:o.modelList.length,e:m.value,f:e.o((t=>e.unref(a)(t))),g:e.p({label:""})})}});wx.createComponent(n);
