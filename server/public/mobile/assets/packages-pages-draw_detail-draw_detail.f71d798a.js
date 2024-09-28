import{_ as e}from"./page-meta.d2ccf398.js";import{d as t,u as l,A as a,W as s,s as r,o as i,k as u,b as n,w as o,g as p,e as c,cN as d,f,B as m,F as x,a2 as _,cO as g,a4 as v,r as y,a as b,j as h,I as w,ct as j,G as k,L as C,M as F,Z as z,t as I,c as T,p as S,m as O,n as $,aC as q,ad as N,z as R,h as D,T as L}from"./index-9f08b835.js";import{_ as J}from"./u-loading.15b95fef.js";import{_ as V}from"./u-image.e6fb9592.js";import{_ as A}from"./u-icon.f0423eb2.js";import{_ as P}from"./u-button.cd082997.js";import{F as B}from"./floating-menu.a8f47c3e.js";import{_ as G}from"./page-status.a37f4663.js";import{u as M}from"./useCopy.7659937f.js";import{j as U}from"./draw.0416aa95.js";import{h as W,d as Z}from"./square.954d0237.js";import{_ as E}from"./l-painter-image.bb294855.js";import{a as H,b as K,_ as Y,c as Q}from"./l-painter.d7281161.js";import{_ as X}from"./u-popup.6c89de8e.js";import{_ as ee}from"./_plugin-vue_export-helper.1b428a4d.js";const te=t({__name:"draw-poster",emits:["close"],setup(e,{expose:t,emit:j}){const{copy:k}=M(),C=l(),F=a(),{primaryColor:z}=s(),I=r(!1),T=r(),S=r({});r("");const O=r(""),$=r(""),q=async()=>{_({title:"生成中"});try{O.value=await g(),setTimeout((()=>{R()}),500)}catch(e){v(),console.log(e)}},N=async()=>{k(await g())},R=async()=>{var e;null==(e=T.value)||e.canvasToTempFilePathSync({fileType:"png",quality:1,pathType:"base64",success:e=>{v(),$.value=e.tempFilePath},fail:e=>{console.log(e),v(),uni.$u.toast("调用海报错误",e)}})},D=()=>{uni.$u.toast("请长按图片保存")};return t({open:e=>{I.value=!0,S.value=e,q()}}),(e,t)=>{const l=y(b("l-painter-image"),E),a=y(b("l-painter-view"),H),s=y(b("l-painter-text"),K),r=y(b("l-painter-qrcode"),Y),_=y(b("l-painter"),Q),g=h,v=w,j=y(b("u-button"),P),k=y(b("u-popup"),X);return i(),u(x,null,[n(_,{ref_key:"painterRef",ref:T,isCanvasToTempFilePath:!1,"custom-style":"position: fixed; left: 200%;"},{default:o((()=>[n(a,{css:"\n            border-radius: 14rpx;\n            overflow: hidden;\n            background-color: #F2F3F6;\n            "},{default:o((()=>[n(a,{css:"\n                width: 100%;\n                "},{default:o((()=>{var e;return[n(l,{src:null==(e=S.value)?void 0:e.image,css:"width: 100%;object-fit:contain;"},null,8,["src"])]})),_:1}),n(a,{css:"margin-top: 20rpx;padding-left: 20rpx;padding-right: 20rpx;margin-bottom: 20rpx;"},{default:o((()=>[n(a,null,{default:o((()=>{var e,t,l;return[n(s,{css:"display: block;font-weight: bold;font-size: 34rpx;text-align: left;color: #101010;lineClamp: 2;",text:(null==(t=null==(e=S.value)?void 0:e.original_prompts)?void 0:t.prompt)||(null==(l=S.value)?void 0:l.prompt)},null,8,["text"])]})),_:1}),p("                <l-painter-view>"),p("                    <l-painter-text"),p('                        css="font-size: 28rpx;text-align: left;color: #101010;margin-top:20rpx;lineClamp: 1;"'),p('                        :text="imgContent?.original_prompts?.prompt_en"'),p("                    />"),p("                </l-painter-view>")])),_:1}),n(a,{css:"height:10rpx;border-top-width:1px;border-top-style:dashed;border-top-color:#D6D3D3;"}),n(a,null,{default:o((()=>[n(a,{css:"margin-top: 20rpx;height: 220rpx; padding-left: 20rpx;padding-right: 20rpx;margin-bottom: 20rpx;display:block;width:60%"},{default:o((()=>[n(a,{css:"display:flex;align-items: center;"},{default:o((()=>[n(l,{css:"width:68rpx;height:68rpx;border-radius: 50%;",src:c(F).userInfo.avatar},null,8,["src"]),n(s,{css:";font-size: 28rpx;text-align: left;color: #666666;margin-left: 20rpx; lineClamp: 1;",text:c(F).userInfo.nickname},null,8,["text"])])),_:1}),n(a,{css:"margin-top:20rpx"},{default:o((()=>[n(s,{css:"font-size: 32rpx;text-align: left;color: #101010;",text:c(C).getWebsiteConfig.pc_name},null,8,["text"])])),_:1}),n(a,{css:"margin-top:20rpx;margin-bottom:20rpx"},{default:o((()=>[n(s,{css:`font-size: 30rpx;text-align: left;color: ${c(z)};`,text:c(d)(c(C).config.current_domain)},null,8,["css","text"])])),_:1})])),_:1}),n(a,{css:"position: absolute;top:20rpx;right:20px;background-color:#fff;padding:15rpx;border-radius: 10rpx;"},{default:o((()=>[p("  H5二维码  "),n(r,{text:O.value,css:"width: 180rpx; height: 180rpx"},null,8,["text"]),p("  小程序二维码  ")])),_:1})])),_:1})])),_:1})])),_:1},512),n(k,{modelValue:I.value,"onUpdate:modelValue":t[0]||(t[0]=e=>I.value=e),mode:"bottom",closeable:!0,closeIconColor:"#000","safe-area-inset-bottom":!0,height:"90%","border-radius":"14",onClose:t[1]||(t[1]=t=>e.$emit("close"))},{default:o((()=>[n(g,{class:"flex flex-col relative h-full"},{default:o((()=>[n(g,{class:"title text-xl font-medium text-center py-[30rpx]"},{default:o((()=>[f(" 生成海报 ")])),_:1}),n(g,{class:"mb-[120rpx] flex-1 min-h-0"},{default:o((()=>[n(v,{"scroll-y":"true",class:"h-full"},{default:o((()=>[n(g,{class:"px-[60rpx]"},{default:o((()=>[m("img",{class:"w-full",src:$.value},null,8,["src"])])),_:1})])),_:1})])),_:1}),n(g,{class:"w-full absolute bottom-0 px-[30rpx] py-[20rpx] flex justify-center"},{default:o((()=>[n(j,{class:"flex-1 mr-2",type:"primary",size:"default",customStyle:{padding:"0 30rpx",height:"82rpx",border:"none",backgroundColor:"#f4f4f8",color:"#333"},onClick:N},{default:o((()=>[f(" 复制链接 ")])),_:1}),n(j,{type:"primary",class:"flex-1",size:"default",customStyle:{padding:"0 30rpx",height:"82rpx"},onClick:D},{default:o((()=>[f(" 长按保存图片到相册 ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}}),le=ee(t({__name:"draw_detail",setup(t){const l=q.baseUrl,s={1:"文生图",2:"图生图",3:"选中放大",4:"选中变换"},{copy:d}=M(),m=N(),_=R(),g=a(),v=r(j.LOADING),w=r({id:-1,task_id:"",prompt:"",prompt_en:"",prompt_desc:"",prompt_other:"",status:3,image:"",image_base:"",thumbnail:"",model:"",nickname:"",image_url:"",image_id:-1,scale:"",able_actions:null,fail_reason:"",negative_prompt:"",version:"",style:"",engine:"",quality:"",censor_status:-1,create_time:"",loras:[],type:1,complex_params:""}),E=k({id:""}),H=C(),K=r(!1),Y=F((()=>{var e,t,l;return(null==(t=null==(e=w.value)?void 0:e.complex_params)?void 0:t.length)?JSON.parse(null==(l=w.value)?void 0:l.complex_params):{}})),Q=async()=>{if(g.isLogin)try{await Z({records_id:E.id,status:w.value.is_collect?0:1}),w.value.is_collect=w.value.is_collect?0:1}catch(e){console.error(e),uni.$u.toast(JSON.stringify(e))}else _.navigateTo("/pages/login/login")};return z((async()=>{const e=m.query.id;await(async e=>{try{if(m.query.collectId){const t=await W({id:e});t.loras=JSON.parse(t.loras),w.value=t}else{const t=await U({id:e});t.loras=JSON.parse(t.loras),w.value=t}v.value=j.NORMAL}catch(t){v.value=j.ERROR}})(e),E.id=m.query.collectId})),(t,a)=>{const r=y(b("page-meta"),e),m=y(b("u-loading"),J),j=h,k=y(b("u-image"),V),C=D,F=y(b("u-icon"),A),z=y(b("u-button"),P),q=y(b("floating-menu"),B),N=y(b("page-status"),G);return i(),u(x,null,[n(r,{"page-style":t.$theme.pageStyle},null,8,["page-style"]),n(N,{class:"h-full",status:v.value},{default:o((()=>[n(j,{class:"h-full flex flex-col"},{default:o((()=>[n(j,{class:"flex-1 min-h-0"},{default:o((()=>[n(j,{class:"px-[20rpx] bg-white",style:{"padding-bottom":"50px"}},{default:o((()=>[p("      绘画图片      "),n(j,{class:"pt-[24rpx]"},{default:o((()=>[n(k,{src:w.value.image,width:"100%",height:"100%",mode:"widthFix","border-radius":"30"},{loading:o((()=>[n(j,{class:"flex flex-col justify-center items-center w-[640rpx] h-[640rpx] bg-[#F7F9FD]"},{default:o((()=>[n(m,{mode:"circle",color:t.$theme.primaryColor,size:"40"},null,8,["color"]),n(j,{class:"text-primary text-sm mt-[20rpx]"},{default:o((()=>[f(" 加载中 ")])),_:1})])),_:1})])),_:1},8,["src"])])),_:1}),p("      绘画描述词      "),n(j,{class:"mt-[30rpx]"},{default:o((()=>[n(j,{class:"flex items-center justify-between"},{default:o((()=>[n(C,{class:"text-lg font-medium"},{default:o((()=>[f("描述词")])),_:1}),n(C,{class:"text-primary text-base",onClick:a[0]||(a[0]=e=>c(d)(w.value.prompt_en))},{default:o((()=>[f("复制")])),_:1})])),_:1}),n(j,{class:"min-h-[150rpx] mt-[20rpx] p-[20rpx] bg-page rounded-lg"},{default:o((()=>[n(C,{class:"text-base leading-4",style:{"letter-spacing":"1px"}},{default:o((()=>[f(I(w.value.prompt),1)])),_:1})])),_:1})])),_:1}),p("      绘画反向词      "),n(j,{class:"mt-[30rpx]"},{default:o((()=>[n(j,{class:"flex items-center justify-between"},{default:o((()=>[n(C,{class:"text-lg font-medium"},{default:o((()=>[f("反向词")])),_:1}),n(C,{class:"text-primary text-base",onClick:a[1]||(a[1]=e=>c(d)(w.value.negative_prompt))},{default:o((()=>[f("复制")])),_:1})])),_:1}),n(j,{class:"min-h-[150rpx] mt-[20rpx] p-[20rpx] bg-page rounded-lg"},{default:o((()=>[n(C,{class:"text-base"},{default:o((()=>[f(I(w.value.negative_prompt||"未填写"),1)])),_:1})])),_:1})])),_:1}),p("      创作信息      "),n(j,{class:"mt-[30rpx]",style:{"padding-bottom":"100rpx"}},{default:o((()=>[n(j,{class:"text-lg font-medium"},{default:o((()=>[f("创作信息")])),_:1}),n(j,{class:"mt-[20rpx] p-[20rpx] bg-page rounded-lg text-main text-base"},{default:o((()=>[n(j,{class:"flex items-center justify-between"},{default:o((()=>[n(C,null,{default:o((()=>[f("创作者")])),_:1}),n(C,null,{default:o((()=>{var e,t;return[f(I(w.value.nickname||(null==(t=null==(e=c(g))?void 0:e.userInfo)?void 0:t.nickname)),1)]})),_:1})])),_:1}),n(j,{class:"flex items-center justify-between mt-[20rpx]"},{default:o((()=>[n(C,null,{default:o((()=>[f("生成时间")])),_:1}),n(C,null,{default:o((()=>[f(I(w.value.create_time),1)])),_:1})])),_:1}),n(j,{class:"flex items-center justify-between mt-[20rpx]"},{default:o((()=>[n(C,null,{default:o((()=>[f("绘画类型")])),_:1}),n(C,null,{default:o((()=>[f(I(s[w.value.type]),1)])),_:1})])),_:1}),n(j,{class:"flex items-center justify-between mt-[20rpx]"},{default:o((()=>[n(C,null,{default:o((()=>[f("绘画模型")])),_:1}),n(C,null,{default:o((()=>[f(I(w.value.engine),1)])),_:1})])),_:1}),"sd"==w.value.model?(i(),T(j,{key:0,class:"flex items-center justify-between mt-[20rpx]"},{default:o((()=>[n(C,null,{default:o((()=>[f("微调模型")])),_:1}),n(j,{class:"w-[400rpx] text-right line-clamp-1"},{default:o((()=>[f(I(w.value.loras.join("、")),1)])),_:1})])),_:1})):p("v-if",!0),n(j,{class:"flex items-center justify-between mt-[20rpx]"},{default:o((()=>[n(C,null,{default:o((()=>[f("图片尺寸")])),_:1}),n(C,null,{default:o((()=>[f(I(w.value.scale),1)])),_:1})])),_:1})])),_:1}),"sd"==w.value.model?(i(),T(j,{key:0,class:"mt-[20rpx] p-[20rpx] bg-page rounded-lg text-main text-base"},{default:o((()=>[n(j,{class:"flex items-center justify-between"},{default:o((()=>[n(C,null,{default:o((()=>[f("绘画步数")])),_:1}),n(C,null,{default:o((()=>[f(I(c(Y).step||"-"),1)])),_:1})])),_:1}),n(j,{class:"flex items-center justify-between mt-[20rpx]"},{default:o((()=>[n(C,null,{default:o((()=>[f("文本强度")])),_:1}),n(C,null,{default:o((()=>[f(I(c(Y).cfg_scale||"-"),1)])),_:1})])),_:1}),n(j,{class:"flex items-center justify-between mt-[20rpx]"},{default:o((()=>[n(C,null,{default:o((()=>[f("采样模式")])),_:1}),n(C,null,{default:o((()=>[f(I(c(Y).sampler_name||"-"),1)])),_:1})])),_:1}),n(j,{class:"flex items-center justify-between mt-[20rpx]"},{default:o((()=>[n(C,null,{default:o((()=>[f("随机种子")])),_:1}),n(C,null,{default:o((()=>[f(I(c(Y).seed||"-"),1)])),_:1})])),_:1})])),_:1})):p("v-if",!0)])),_:1}),E.id?(i(),T(j,{key:0,class:"draw-detail-footer flex justify-between items-center px-[60rpx]"},{default:o((()=>[n(j,{class:"flex text-xs text-[#666]"},{default:o((()=>[n(j,{class:"text-center",onClick:S(Q,["stop"])},{default:o((()=>[n(j,{class:"praise"},{default:o((()=>[n(j,{class:O(["praise-animate",[w.value.is_collect?"praise-entry":"praise-leave"]]),style:$({backgroundImage:`url(${c(l)}resource/image/api/default/praise02.png)`})},null,8,["style","class"])])),_:1}),n(j,{class:"text-[22rpx] text-content"},{default:o((()=>[f("收藏")])),_:1})])),_:1},8,["onClick"]),n(j,{class:"ml-7 text-center",onClick:a[2]||(a[2]=S((e=>(async e=>{var t;g.isLogin?(K.value=!0,await L(),null==(t=null==H?void 0:H.value)||t.open(e)):_.navigateTo("/pages/login/login")})(w.value)),["stop"]))},{default:o((()=>[n(j,{class:"mt-[2rpx] mb-[4rpx]"},{default:o((()=>[n(F,{name:"photo",size:"42"})])),_:1}),n(j,{class:"text-[22rpx] text-content"},{default:o((()=>[f("生成海报")])),_:1})])),_:1})])),_:1}),n(z,{type:"primary",size:"default",customStyle:{padding:"0 30rpx",height:"82rpx",width:"300rpx",margin:"0"}},{default:o((()=>[f(" 长按图片保存 ")])),_:1})])),_:1})):p("v-if",!0)])),_:1})])),_:1}),K.value?(i(),T(te,{key:0,ref_key:"posterRef",ref:H,onClose:a[3]||(a[3]=e=>K.value=!1)},null,512)):p("v-if",!0)])),_:1}),p("    悬浮菜单    "),n(q)])),_:1},8,["status"])],64)}}}),[["__scopeId","data-v-74106801"]]);export{le as default};
