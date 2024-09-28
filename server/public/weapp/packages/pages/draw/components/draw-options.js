"use strict";const e=require("../../../../common/vendor.js");if(!Array){(e.resolveComponent("app-slider")+e.resolveComponent("app-select")+e.resolveComponent("u-collapse-item")+e.resolveComponent("u-collapse"))()}Math||(t+(()=>"../../../../components/app-slider/app-slider.js")+(()=>"../../../../components/app-select/app-select.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-collapse-item/u-collapse-item.js")+(()=>"../../../../uni_modules/vk-uview-ui/components/u-collapse/u-collapse.js"))();const t=()=>"./components/item-title.js",o=e.defineComponent({__name:"draw-options",props:{modelValue:{default:()=>{}},samplers:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:o}){const l=t,{modelValue:s}=e.useVModels(l,o),a=e=>{const t=parseFloat(e.target.value);s.value.step=t>=150?150:t<0?0:t},p=e=>{const t=parseFloat(e.target.value);s.value.cfg_scale=t>=30?30:t<0?0:t};return(o,l)=>({a:e.p({title:"绘画步数",tips:"越低：细节简练，耗时更短；越高：细节丰富，耗时变长；注*步数过高可能产生细节扭曲","font-weight":"400"}),b:e.o((t=>e.unref(s).step=t)),c:e.p({min:0,max:150,step:1,showValue:!1,activeColor:o.$theme.primaryColor,modelValue:e.unref(s).step}),d:e.o(a),e:e.unref(s).step,f:e.o((t=>e.unref(s).step=t.detail.value)),g:e.p({title:"文本强度",tips:"低：淡化输入的特征，淡化风格；高：强化输入的特征，强化风格；最佳使用区间7-12，推荐不超过15","font-weight":"400"}),h:e.o((t=>e.unref(s).cfg_scale=t)),i:e.p({min:0,max:30,step:.5,showValue:!1,activeColor:o.$theme.primaryColor,modelValue:e.unref(s).cfg_scale}),j:e.o(p),k:e.unref(s).cfg_scale,l:e.o((t=>e.unref(s).cfg_scale=t.detail.value)),m:e.p({title:"采样模式",tips:"靠前的采样（euler）：适合动漫，细节简练，快速；靠后的采样（DPM）：适合写实，细节丰富，较慢","font-weight":"400"}),n:e.o((t=>e.unref(s).sampler_name=t)),o:e.p({popupTitle:"采样器",dataLists:t.samplers,placeholder:"请选择",closeable:!1,name:"name",value:"name",modelValue:e.unref(s).sampler_name}),p:e.p({title:"随机种子",tips:"每次生成图的初始画布，种子、提示词、参数和模型相同的情况下，可复原绘画结果","font-weight":"400"}),q:e.unref(s).seed,r:e.o((t=>e.unref(s).seed=t.detail.value)),s:e.p({title:"高级参数"})})}}),l=e._export_sfc(o,[["__scopeId","data-v-519529d3"]]);wx.createComponent(l);
