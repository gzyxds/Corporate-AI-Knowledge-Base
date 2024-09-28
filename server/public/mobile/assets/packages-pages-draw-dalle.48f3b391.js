import{d as e,G as a,o as l,c as t,w as s,b as u,k as r,l as o,F as i,j as p,I as d,r as m,a as n,m as c,e as f,n as _,f as x,t as v,L as g,u as y,A as h,s as b,Z as w,bo as j,g as k,z as V,ad as L,af as q,h as z}from"./index-9f08b835.js";import{_ as E}from"./page-meta.d2ccf398.js";import{_ as C}from"./u-empty.765dbffc.js";import{_ as D}from"./tabbar.vue_vue_type_script_setup_true_lang.da8cbb67.js";import{_ as A}from"./u-icon.f0423eb2.js";import{_ as T}from"./router-navigate.3e9d7fb5.js";import{_ as U}from"./u-navbar.9b578443.js";import{_ as F}from"./u-form.1bf0b756.js";import{_ as I}from"./u-button.cd082997.js";import{u as $}from"./useLockFn.cde70c0d.js";import{b as O,c as J}from"./draw.0416aa95.js";import{_ as R,a as S,D as X,p as G}from"./item-title.vue_vue_type_script_setup_true_lang.01a451c0.js";import{_ as H}from"./u-form-item.95df05ac.js";import{a as N}from"./index.f8572cdb.js";import{_ as Q}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-badge.508fc5b2.js";import"./l-textarea.5288c032.js";import"./u-loading.15b95fef.js";import"./u-popup.6c89de8e.js";import"./emitter.1571a5d9.js";import"./index.73309c03.js";const Z=Q(e({__name:"dalle-size",props:{modelValue:{default:"1024x1024"}},emits:["update:modelValue"],setup(e,{emit:g}){const y=e,{modelValue:h}=N(y,g),b=a({lists:[{name:"头像",scaleLabel:"1:1",scaleValue:"1024x1024",width:40,height:40},{name:"文章",scaleLabel:"4:3",scaleValue:"1792x1024",width:40,height:30},{name:"媒体",scaleLabel:"3:4",scaleValue:"1024x1792",width:30,height:40}]});return h.value="1024x1024",(e,a)=>{const g=p,y=d,w=m(n("u-form-item"),H);return l(),t(g,{class:"mt-4"},{default:s((()=>[u(R,{title:"图片尺寸",tips:"",required:""}),u(w,{prop:"size"},{default:s((()=>[u(g,{class:"flex-1 bg-white rounded-lg py-[20rpx] pr-[20rpx] overflow-hidden"},{default:s((()=>[u(y,{class:"flex-1 min-w-0 whitespace-nowrap","scroll-x":""},{default:s((()=>[(l(!0),r(i,null,o(b.lists,((e,a)=>(l(),t(g,{key:a,class:"inline-block w-[140rpx] ml-[20rpx]"},{default:s((()=>[u(g,{class:c(["picture-size text-center hover:text-primary",{"picture-size-active":f(h)==(null==e?void 0:e.scaleValue)}]),onClick:a=>h.value=e.scaleValue},{default:s((()=>[u(g,{class:"flex justify-center items-center h-[40rpx]"},{default:s((()=>[u(g,{class:"rect",style:_({width:`${e.width}rpx`,height:`${e.height}rpx`})},null,8,["style"])])),_:2},1024),u(g,{class:"text-[#101010] font-medium mt-[8rpx] size-scale"},{default:s((()=>[x(v(e.scaleLabel),1)])),_:2},1024),u(g,{class:"text-[#808D9C] mt-[8rpx] text-xs size-scale"},{default:s((()=>[x(v(e.name),1)])),_:2},1024)])),_:2},1032,["class","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-999eccc2"]]),B=Q(e({__name:"dalle-style",props:{modelValue:{default:"standard"}},emits:["update:modelValue"],setup(e,{emit:a}){const d=e,{modelValue:_}=N(d,a),g=[{value:"vivid",label:"生动"},{value:"natural",label:"自然"}];return _.value="vivid",(e,a)=>{const d=p,y=m(n("u-form-item"),H);return l(),t(d,{class:"mt-[15rpx]"},{default:s((()=>[u(R,{title:"风格选择",tips:"",required:""}),u(y,{prop:"quality"},{default:s((()=>[u(d,{class:"flex justify-between flex-1 bg-white rounded-lg py-[20rpx] pr-[20rpx] overflow-hidden"},{default:s((()=>[(l(),r(i,null,o(g,(e=>u(d,{key:e.value,class:c(["style-picker",{"style-picker__active":e.value===f(_)}]),onClick:a=>_.value=e.value},{default:s((()=>[x(v(e.label),1)])),_:2},1032,["class","onClick"]))),64))])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-63d6e4bf"]]),K=Q(e({__name:"dalle-quality",props:{modelValue:{default:"standard"}},emits:["update:modelValue"],setup(e,{emit:a}){const d=e,{modelValue:_}=N(d,a),g=[{value:"standard",label:"标准"},{value:"hd",label:"HD-高清"}];return _.value="standard",(e,a)=>{const d=p,y=m(n("u-form-item"),H);return l(),t(d,{class:"mt-[15rpx]"},{default:s((()=>[u(R,{title:"图片质量",tips:"",required:""}),u(y,{prop:"quality"},{default:s((()=>[u(d,{class:"flex justify-between flex-1 bg-white rounded-lg py-[20rpx] pr-[20rpx] overflow-hidden"},{default:s((()=>[(l(),r(i,null,o(g,(e=>u(d,{key:e.value,class:c(["quality-option",{"quality-option__active":e.value===f(_)}]),onClick:a=>_.value=e.value},{default:s((()=>[x(v(e.label),1)])),_:2},1032,["class","onClick"]))),64))])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-901821cc"]]),M=Q(e({__name:"dalle",setup(e){const o=V(),c=L(),_=g(),R=y(),H=h(),N=b({draw_api:S.DALLE,draw_type:X.TEXT,draw_model:S.DALLE,draw_loras:"",denoising_strength:.75,size:"512x512",prompt:"",negative_prompt:"",action:"generate",image_mask:"",image_id:"",complex_params:{step:20,sampler_name:"Euler a",seed:-1,cfg_scale:7},style:"",quality:""}),Q=a({config:{}}),M=q((async()=>{Q.config=await J({draw_api:S.DALLE})})),{lockFn:P,isLock:W}=$((async()=>{try{if(""===N.value.prompt)return uni.$u.toast("请输入提示词");await O({...N.value}),N.value.prompt="",o.navigateTo({path:"/packages/pages/draw_list/draw_list",query:{model:S.DALLE}})}catch(e){}}));return M(),w((()=>{j("drawRegenerate",(e=>{Object.assign(N.value,e)}));const e=c.query;try{const a=JSON.parse(e.data);Object.assign(N.value,a)}catch(a){}})),(e,a)=>{const o=m(n("page-meta"),E),c=m(n("u-empty"),C),g=m(n("tabbar"),D),y=p,h=m(n("u-icon"),A),b=m(n("router-navigate"),T),w=m(n("u-navbar"),U),j=m(n("u-form"),F),V=d,L=z,q=m(n("u-button"),I);return l(),r(i,null,[u(o,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),u(y,{class:"h-full flex flex-col bg-[#f5f8fd]"},{default:s((()=>[f(R).config.switch.dalle3_status?(l(),r(i,{key:1},[u(w,{"back-text":"绘画工作台"},{right:s((()=>[u(b,{to:{path:"/packages/pages/draw_list/draw_list",query:{model:f(S).DALLE}}},{default:s((()=>[u(y,{class:"flex items-center mr-[20rpx]"},{default:s((()=>[u(y,{class:"text-primary flex"},{default:s((()=>[u(h,{name:"clock",size:32})])),_:1}),u(y,{class:"text-muted ml-[10rpx]"},{default:s((()=>[x("历史记录")])),_:1})])),_:1})])),_:1},8,["to"])])),_:1}),u(y,{class:"flex-1 min-h-0"},{default:s((()=>[u(V,{class:"h-full","scroll-y":""},{default:s((()=>[u(y,{class:"px-[20rpx] pb-[30rpx] pt-[6rpx]"},{default:s((()=>[u(j,{ref_key:"uFormRef",ref:_,model:N.value,"label-position":"top","border-bottom":!1},{default:s((()=>[k("    关键词    "),u(G,{modelValue:N.value.prompt,"onUpdate:modelValue":a[0]||(a[0]=e=>N.value.prompt=e),negative:N.value.negative_prompt,"onUpdate:negative":a[1]||(a[1]=e=>N.value.negative_prompt=e),"is-negative":!1,model:f(S).DALLE,example:Q.example,typeEnum:f(X),showTranslate:!!Q.config.translate_switch},null,8,["modelValue","negative","model","example","typeEnum","showTranslate"]),k("    图片尺寸    "),u(Z,{modelValue:N.value.size,"onUpdate:modelValue":a[2]||(a[2]=e=>N.value.size=e)},null,8,["modelValue"]),k("    风格选择    "),u(B,{modelValue:N.value.style,"onUpdate:modelValue":a[3]||(a[3]=e=>N.value.style=e)},null,8,["modelValue"]),k("    图片质量    "),u(K,{modelValue:N.value.quality,"onUpdate:modelValue":a[4]||(a[4]=e=>N.value.quality=e)},null,8,["modelValue"])])),_:1},8,["model"])])),_:1})])),_:1})])),_:1}),u(y,{class:"p-[20rpx] bg-white safe-area-inset-bottom"},{default:s((()=>[u(q,{type:"primary",loading:f(W),onClick:f(P)},{default:s((()=>[u(y,null,{default:s((()=>[u(L,{class:"text-xl font-bold"},{default:s((()=>[x("立即生成")])),_:1}),Q.config.is_member?(l(),t(L,{key:0,class:"text-sm ml-[4px]"},{default:s((()=>[x(" 会员免费 ")])),_:1})):k("v-if",!0),0!=Q.config.power&&!Q.config.is_member&&f(H).isLogin?(l(),t(L,{key:1,class:"text-sm ml-[4px]"},{default:s((()=>[x(" 消耗"+v(Q.config.power||"--")+v(f(R).getTokenUnit),1)])),_:1})):k("v-if",!0)])),_:1})])),_:1},8,["loading","onClick"])])),_:1})],64)):(l(),t(y,{key:0,class:"w-full h-full bg-white rounded-[6px] flex items-center justify-center"},{default:s((()=>[u(c,{text:"绘画功能未开启",mode:"favor"}),u(g)])),_:1})),u(g)])),_:1})],64)}}}),[["__scopeId","data-v-9e58cc9e"]]);export{M as default};
