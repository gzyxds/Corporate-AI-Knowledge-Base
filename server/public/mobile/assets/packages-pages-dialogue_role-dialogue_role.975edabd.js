import{d as e,u as a,A as t,L as l,s as o,G as n,ax as s,aE as i,o as r,k as u,b as c,w as p,f as d,t as m,e as v,c as f,g,F as h,l as _,ad as y,z as w,r as x,a as j,j as k,p as b,aI as C,R as T,aF as S,h as U}from"./index-9f08b835.js";import{_ as B}from"./page-meta.d2ccf398.js";import{_ as V}from"./u-icon.f0423eb2.js";import{_ as z}from"./chat-record-item.e0ff5f51.js";import{_ as R,a as $,b as F}from"./dialog-poster.vue_vue_type_script_setup_true_lang.53970165.js";import{_ as I}from"./z-paging.5d396652.js";import{e as L,h as A,i as O}from"./chat.05123b79.js";import{b as P}from"./role.91d2bfcc.js";import{u as D}from"./useLockFn.cde70c0d.js";import{u as H}from"./text-item.75b27895.js";import{_ as q}from"./model-picker.dbbe4c90.js";import{_ as J}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e6fb9592.js";import"./u-tag.d6be710f.js";import"./useAudio.8d04ba62.js";import"./howler.bdae6f69.js";import"./_commonjsHelpers.157f59fb.js";import"./u-loading.15b95fef.js";import"./icon_copy.bacd4068.js";import"./useCopy.7659937f.js";import"./uni-file-picker.55c7ce72.js";import"./u-input.6dc4a2b4.js";import"./emitter.1571a5d9.js";import"./index.f8572cdb.js";import"./index.73309c03.js";import"./l-painter-image.bb294855.js";import"./l-painter.d7281161.js";import"./u-button.cd082997.js";import"./u-popup.6c89de8e.js";import"./ua-markdown.f5ba7fba.js";import"./katex.30814119.js";import"./mp-html.6ddc2dff.js";import"./index.c3709e84.js";import"./icon_copy.36709540.js";import"./u-collapse.3475c9a9.js";const M=J(e({__name:"dialogue_role",setup(e){const{useShare:J,resolveOptions:M,removeMixinShare:N}=C(),E=a(),K=y(),Y=w(),G=t(),Q=l(),W=o(!1),X=o(0),Z=o({image:"",tips:"",name:""}),ee=o(""),ae=o([]),te=o(""),le=o(""),oe=()=>{ge()},ne=n({show:!1,data:{url:"",name:"",type:"image"}}),se=e=>{ne.show=!!e.support_image,ne.show||(ne.data.url="")},ie=l(),re=l(),ue=async(e,a)=>{var t,l;try{const{lists:l=[],count:o}=await L({type:3,other_id:X.value,page_size:a/2,page_no:e});null==(t=ie.value)||t.complete(l.reverse()),0===o?setTimeout((()=>{var e;null==(e=ie.value)||e.scrollToTop(!1)}),200):1===a&&setTimeout((()=>{ge()}),100)}catch(o){null==(l=ie.value)||l.complete(!1)}},ce=o(!1),pe=e=>{e.height>0?ce.value=!0:ce.value=!1},de=()=>{ce.value=!1},{lockFn:me}=D((async()=>{var e;if(!G.isLogin)return ke();(await T({title:"温馨提示",content:"确定清空对话？"})).cancel||(we(),await A({type:3,other_id:X.value}),null==(e=ie.value)||e.reload())})),ve=o(-1),{lockFn:fe}=D((async e=>{if(he.value)return;const a=ae.value[e],t=ae.value.findLast((({id:e})=>e===a.id));t&&(ve.value=a.id,ae.value.splice(e,2),be(t.content))})),ge=async()=>{var e;null==(e=ie.value)||e.scrollToBottom(!1)},he=o(!1);let _e=null;const ye=o([]),we=()=>{null==_e||_e.cancel(),setTimeout((()=>{te.value=""}))},xe=o({}),{pauseAll:je}=H(),ke=()=>{Y.navigateTo({path:"/pages/login/login"})},{lockFn:be}=D((async e=>{if(W.value=!1,!G.isLogin)return ke();if(he.value)return;const a=e||te.value;if(a){ie.value.addChatRecordData({type:1,content:a,files_plugin:[{...ne.data}]}),xe.value={type:2,loading:!0,content:[],id:Date.now()},ie.value.addChatRecordData(xe.value),le.value=te.value,te.value="";try{he.value=!0,await O({type:3,other_id:X.value,question:a,model:ee.value,file:ne.data.url},{onstart(e){_e=e,je(),te.value=""},onmessage(e){e.trim().split("data:").forEach((async e=>{var a,t,l,o,n;if(""!==e)try{const s=JSON.parse(e),{object:i,choices:r,error:u}=s;if(u){console.log(u);const{message:e,code:a}=u;if(1100===a)if(E.getIsShowRecharge){const{cancel:e}=await T({title:"温馨提示",content:`${E.getTokenUnit}数量已用完，请前往充值`});if(e)return;Y.navigateTo({path:"/packages/pages/recharge/recharge"})}else uni.$u.toast(`${E.getTokenUnit}数量已用完。请联系客服增加`);else e&&uni.$u.toast(e);return te.value=le.value,void ae.value.splice(0,2)}switch(i){case"chat":{const e=null==(a=r[0])?void 0:a.index,o=null==(l=null==(t=r[0])?void 0:t.delta)?void 0:l.content;xe.value.content[e]||(xe.value.content[e]=""),xe.value.content[e]+=o;break}case"question":ye.value=JSON.parse(null==(n=null==(o=r[0])?void 0:o.delta)?void 0:n.content);break;case"finish":console.log("终端"),ne.data.url=""}}catch(s){}}))},async onclose(){-1!==ve.value&&xe.value.content.length&&(await A({type:1,id:ve.value}),ve.value=-1),he.value=!1,setTimeout((()=>{var e;null==(e=ie.value)||e.reload(),G.getUser()}),500)}})}catch(t){console.log("发送消息失败=>",t),t.errMsg!==S.ABORT&&ae.value.splice(0,2),te.value=le.value,he.value=!1}}})),Ce=()=>{Y.navigateBack()};return s((async()=>{const{id:e}=K.query;X.value=e,await(async()=>{try{Z.value=await P({id:X.value}),J({desc:Z.value.describe,title:Z.value.name,imageUrl:Z.value.image})}catch(e){console.log("获取角色错误=>",e)}})()})),i((()=>{we()})),(e,a)=>{const t=x(j("page-meta"),B),l=x(j("u-icon"),V),o=k,n=U,s=x(j("chat-record-item"),z),i=x(j("chat-input"),$),y=x(j("z-paging"),I),w=x(j("l-watermark"),F);return r(),u(h,null,[c(t,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),c(o,{class:"h-full flex flex-col"},{default:p((()=>[c(o,{class:"bg-white flex justify-between items-center pl-[20rpx] py-[4rpx]"},{default:p((()=>[c(o,{class:"flex items-center text-lg p-[20rpx]",onClick:Ce},{default:p((()=>[c(l,{name:"arrow-left",size:26}),c(o,{class:"flex-1 line-clamp-1 ml-[20rpx]"},{default:p((()=>{var e;return[d(m(null==(e=Z.value)?void 0:e.name),1)]})),_:1})])),_:1}),c(q,{sub_id:ee.value,"onUpdate:sub_id":a[0]||(a[0]=e=>ee.value=e),hasHiddenUnit:!0,"onUpdate:modelConfig":se},null,8,["sub_id"])])),_:1}),c(o,{class:"flex-1 min-h-0"},{default:p((()=>[c(w,{class:"w-full h-full",content:v(E).getChatConfig.watermark,font:{color:"rgba(0,0,0,0.06)",fontSize:12}},{default:p((()=>[c(y,{ref_key:"pagingRef",ref:ie,modelValue:ae.value,"onUpdate:modelValue":a[5]||(a[5]=e=>ae.value=e),"use-chat-record-mode":"",fixed:!1,height:"100%",auto:!0,"safe-area-inset-bottom":!1,"auto-clean-list-when-reload":!1,"show-chat-loading-when-reload":!0,"default-page-size":20,onQuery:ue,onKeyboardHeightChange:pe,onHidedKeyboard:de},{empty:p((()=>[c(o,{class:"w-full min-h-full"},{default:p((()=>[c(o,{class:"py-[30rpx]"},{default:p((()=>[c(s,{type:"left",content:Z.value.tips,loading:!1,avatar:Z.value.image,index:0,showCollectBtn:!1,showCopyBtn:!1,showVoiceBtn:!1,onClickLink:a[1]||(a[1]=e=>v(be)(e))},null,8,["content","avatar"])])),_:1})])),_:1})])),bottom:p((()=>[c(i,{modelValue:te.value,"onUpdate:modelValue":a[2]||(a[2]=e=>te.value=e),loading:he.value,showStop:he.value,safeAreaInsetBottom:"",showContinue:ae.value.length,"file-plugin":ne.data,"onUpdate:filePlugin":a[3]||(a[3]=e=>ne.data=e),"show-file-upload":ne.show,onSend:v(be),onPause:we,onFocus:oe,onClear:v(me),onContinue:a[4]||(a[4]=e=>v(be)("继续"))},{actions:p((()=>[v(G).isLogin?(r(),f(o,{key:0,class:"text-base"},{default:p((()=>[d(" 剩余: "+m(v(G).userInfo.balance)+" "+m(v(E).getTokenUnit),1)])),_:1})):g("v-if",!0)])),_:1},8,["modelValue","loading","showStop","showContinue","file-plugin","show-file-upload","onSend","onClear"])])),default:p((()=>[c(o,{class:"scroll-view-content pb-[40rpx]",ref_key:"contentRef",ref:Q},{default:p((()=>[(r(!0),u(h,null,_(ae.value,((e,a)=>(r(),f(o,{key:`${e.id} + ${a} + ''`,style:{transform:"scaleY(-1)"}},{default:p((()=>[c(o,{class:"chat-record mt-[20rpx] pb-[40rpx]"},{default:p((()=>[c(s,{"record-id":e.id,type:1==e.type?"right":"left",content:e.content,loading:e.loading,avatar:1==e.type?v(G).userInfo.avatar:Z.value.image,index:a,time:2==e.type?e.create_time:"",showCopyBtn:!0,showVoiceBtn:2==e.type,"files-plugin":e.files_plugin,"model-name":e.model,"show-poster":2==e.type,onPoster:a=>(async e=>{const a=ae.value.filter((a=>a.id==e));2==a.length?re.value.initPosterData({title:a[1].content,content:a[0].content}):uni.$u.toast("上下文数据不对～")})(e.id)},{btn:p((()=>[2==e.type&&0===a?(r(),f(o,{key:0,class:"text-content text-sm flex items-center mr-[20rpx] mt-[16rpx]",onClick:b((e=>v(fe)(a)),["stop"])},{default:p((()=>[c(l,{name:"reload",size:"26"}),c(n,{class:"ml-1"},{default:p((()=>[d("重新回答")])),_:1})])),_:2},1032,["onClick"])):g("v-if",!0)])),sub_actions:p((()=>[0!==a||he.value?g("v-if",!0):(r(),f(o,{key:0,class:"flex flex-col",style:{"margin-left":"84rpx"}},{default:p((()=>[(r(!0),u(h,null,_(ye.value.length?ye.value:e.correlation,((e,a)=>(r(),f(o,{key:a,class:"inline-flex items-center rounded-md bg-white cursor-pointer mt-[20rpx]",style:{padding:"16rpx 24rpx",width:"fit-content"},onClick:b((a=>v(be)(e)),["stop"])},{default:p((()=>[c(n,{class:"mr-1 text-base text-content"},{default:p((()=>[d(m(e),1)])),_:2},1024),c(l,{name:"arrow-rightward",color:"#999",size:"30"})])),_:2},1032,["onClick"])))),128))])),_:2},1024))])),_:2},1032,["record-id","type","content","loading","avatar","index","time","showVoiceBtn","files-plugin","model-name","show-poster","onPoster"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},512)])),_:1},8,["modelValue"])])),_:1},8,["content","font"])])),_:1}),g("  生产对话海报  "),c(R,{ref_key:"posterRef",ref:re},null,512)])),_:1})],64)}}}),[["__scopeId","data-v-a7df1237"]]);export{M as default};
