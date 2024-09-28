import{_ as e}from"./page-meta.d2ccf398.js";import{d as t,L as a,s as l,o as s,k as r,b as o,w as u,e as n,F as i,l as d,g as m,r as p,a as c,j as f,c as _,f as x,t as g,h as v}from"./index-9f08b835.js";import{_ as y}from"./u-avatar.fa3324f6.js";import{_ as w}from"./z-paging.5d396652.js";import{c as h}from"./promotion.ee9a8a29.js";import{F as b}from"./floating-menu.a8f47c3e.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.f0423eb2.js";const F=j(t({__name:"distribution_order",setup(t){const j=a(),F=l([]),k=async(e,t)=>{try{const{lists:a}=await h({page_no:e,page_size:t});j.value.complete(a)}catch(a){j.value.complete(!1),console.log("请求分销订单列表失败",a)}};return(t,a)=>{const l=p(c("page-meta"),e),h=p(c("u-avatar"),y),z=f,C=v,V=p(c("z-paging"),w);return s(),r(i,null,[o(l,{"page-style":t.$theme.pageStyle},null,8,["page-style"]),o(z,{class:"distribute-order flex flex-col min-h-0 h-full"},{default:u((()=>[o(z,{class:"flex-1"},{default:u((()=>[o(V,{ref_key:"paging",ref:j,modelValue:F.value,"onUpdate:modelValue":a[0]||(a[0]=e=>F.value=e),onQuery:k,fixed:!1,height:"100%","empty-view-text":"暂无分销订单记录～","empty-view-img":n("/mobile/assets/distribute_order-42380899.png"),"empty-view-style":{"margin-top":"100px"},"empty-view-center":!1,"auto-clean-list-when-reload":!1,"auto-scroll-to-top-when-reload":!1,"empty-view-img-style":{width:"360rpx",height:"360rpx"}},{default:u((()=>[(s(!0),r(i,null,d(F.value,(e=>(s(),_(z,{class:"m-[30rpx] bg-white rounded-[14rpx]",key:e},{default:u((()=>[m(" 订单头部 "),o(z,{class:"flex justify-between items-center order-header px-[20rpx] py-[18rpx]"},{default:u((()=>[o(z,{class:"flex items-center"},{default:u((()=>{var t;return[o(h,{size:"64",src:null==(t=null==e?void 0:e.user)?void 0:t.avatar},null,8,["src"]),o(z,{class:"ml-[20rpx] text-base text-content"},{default:u((()=>{var t;return[x(g(null==(t=null==e?void 0:e.user)?void 0:t.nickname),1)]})),_:2},1024)]})),_:2},1024),o(z,{class:"text-sm text-[#FF2C3C]"},{default:u((()=>[x(g(e.status_desc),1)])),_:2},1024)])),_:2},1024),m(" 订单主体 "),o(z,{class:"order-main p-[20rpx]"},{default:u((()=>[o(z,{class:"flex justify-between"},{default:u((()=>[o(z,{class:"font-medium text-lg"},{default:u((()=>[x(g(null==e?void 0:e.order_type_desc),1)])),_:2},1024),o(z,{class:"text-xs text-muted"},{default:u((()=>[x(g(null==e?void 0:e.create_time),1)])),_:2},1024)])),_:2},1024),o(z,{class:"flex justify-between mt-[16rpx] text-base"},{default:u((()=>[o(z,null,{default:u((()=>[o(C,{class:"text-content"},{default:u((()=>[x("获得收益")])),_:1}),o(C,{class:"font-medium text-[#FF2C3C]"},{default:u((()=>[x(" ￥"+g(null==e?void 0:e.income),1)])),_:2},1024)])),_:2},1024),o(z,null,{default:u((()=>[o(C,{class:"text-content"},{default:u((()=>[x("付款金额")])),_:1}),o(C,{class:"font-medium text-black"},{default:u((()=>[x(" ¥"+g(null==e?void 0:e.order_amount),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(z,{class:"flex justify-between mt-[10rpx] pb-[10rpx]"},{default:u((()=>[o(C,{class:"text-content text-sm"},{default:u((()=>[x(" 订单号: "+g(null==e?void 0:e.order_sn),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["modelValue","empty-view-img"])])),_:1}),m("    悬浮菜单    "),o(b)])),_:1})],64)}}}),[["__scopeId","data-v-01dc673e"]]);export{F as default};
