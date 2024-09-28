"use strict";const e=require("../../../common/vendor.js"),a=require("../../../api/robot.js"),t=require("../../../hooks/useLockFn.js"),o=require("../../../stores/user.js"),u=require("../../../stores/app.js"),n=require("../../../enums/requestEnums.js"),r=require("./useSessionList.js"),l=require("../../../hooks/useAudioPlay.js"),i=require("../../../hooks/useRecorder.js"),s=require("../../../hooks/useAudio.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../utils/request/cancel.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../enums/constantEnums.js"),require("../../../config/index.js"),require("../../../utils/client.js"),require("../../../enums/appEnums.js"),require("../../../api/user.js"),require("../../../utils/auth.js"),require("../../../utils/unique-id.js"),require("../../../api/app.js"),require("../../../api/shop.js"),require("../../../lib/fft.js"),!Array){(e.resolveComponent("u-navbar")+e.resolveComponent("u-icon")+e.resolveComponent("router-navigate")+e.resolveComponent("chat-record-item")+e.resolveComponent("u-tag")+e.resolveComponent("chat-input")+e.resolveComponent("z-paging")+e.resolveComponent("l-watermark")+e.resolveComponent("l-textarea")+e.resolveComponent("u-button")+e.resolveComponent("u-popup"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-navbar/u-navbar.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../node-modules/uniapp-router-next/components/router-navigate/router-navigate.js")+v+(()=>"../../../components/chat-record-item/chat-record-item.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-tag/u-tag.js")+(()=>"../../../components/chat-input/chat-input.js")+(()=>"../../../node-modules/z-paging/components/z-paging/z-paging.js")+(()=>"../../../uni_modules/lime-watermark/components/l-watermark/l-watermark.js")+c+d+p+(()=>"../../../components/l-textarea/l-textarea.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js"))();const c=()=>"../../components/session/popup.js",v=()=>"../../components/session/index.js",d=()=>"../../../components/chat-record-item/quote-popup.js",p=()=>"../../../components/chat-record-item/context-popup.js",m=e.defineComponent({__name:"robot_chat",setup(c){const v=u.useAppStore(),d=e.useRouter(),p=e.useRoute(),m=o.useUserStore();e.shallowRef();const f=e.ref(!1),h=e.ref([]),g=e.computed((()=>p.query.id)),{getSessionLists:w,sessionActive:y,sessionAdd:_,sessionEdit:j,sessionLists:q,sessionDelete:b,sessionClear:k,currentSession:x}=r.useSessionList(g.value),C=e.ref(1),T=e.computed((()=>2===C.value)),{pauseAll:R}=l.useAudioPlay(),A=e.ref(0),$=e.reactive({0:"正在初始化对话...",1:"点击开始说话",2:"我在听，您请说...",3:"稍等，让我想一想",4:"正在回复中..."}),z=e=>{2===C.value&&(A.value=e)},L=e.ref(!1),S=e.ref(0),P=e.ref(!1),B=e.ref(0),D=e.ref(0),F=e.ref(!0),E=e.reactive({id:"audio-canvas",width:100,height:30,minHeight:5,scale:2}),{render:V,stopRender:M,draw:O}=i.useRenderAudioGraph(E),{start:U,stop:G,isRecording:I,authorize:J,close:N}=i.useRecorder({onstart(){P.value=!1,S.value=Date.now()},async onstop(e){if(M(),setTimeout((()=>{O(new Float64Array(new Array(128).fill(0)),0)}),10),L.value){L.value=!1,z(3);try{const t=await a.voiceTransfer(e.tempFilePath);if(!t.text)return void(F.value&&z(2));je(t.text,"voice")}catch(t){F.value&&z(1)}}},ondata(e){V(e);const a=Date.now();e.powerLevel>15&&(clearTimeout(B.value),A.value=2,P.value=!0,S.value=a,B.value=setTimeout((()=>{L.value=!0,clearTimeout(D.value),G()}),2e3)),a-S.value>=5e3&&P.value}}),{play:H,pause:K,isPlaying:Q}=s.useAudio({onstart(){A.value=4,Z.value&&(Z.value=!1,G())},onstop(){var e;D.value=setTimeout((()=>{ee()}),1e3*(null==(e=ue.value.digital)?void 0:e.idle_time)||0),F.value?z(2):z(1)},onerror(){z(1)}}),W=async e=>{const{url:t}=await a.voiceGenerate(e);return t},X=async()=>{[4,3].includes(A.value)||(I.value?(F.value=!1,G(),z(1)):(F.value=!0,z(2)))},Y=e.ref(""),Z=e.ref(!1),ee=async()=>{if(2!==C.value)return Promise.reject();if(!ue.value.is_digital||!ue.value.digital_id||ue.value.is_disable)return Promise.reject();if(Y.value||(Y.value=await W({type:3,record_id:ue.value.id})),!Y.value)return Promise.reject();Z.value=!0;const a=Date.now();h.value.push({type:2,typing:!1,content:ue.value.digital.idle_reply,key:a}),await e.nextTick$1(),fe(),H(Y.value)};e.watch(C,(async e=>{if(1===e)K(),N(),A.value=0,clearTimeout(D.value);else{F.value=!0,await J(),O(null,0);try{await ee()}catch(a){z(2)}fe()}})),e.watch(A,(e=>{if(2===e)(async()=>{I.value||2!==C.value||U()})()}));const ae=e.reactive({show:!1,data:[]}),te=e.reactive({show:!1,data:[]}),oe=e.ref(!1),ue=e.ref({}),ne=e.ref(""),re=e.ref(""),le=()=>{if(!m.isLogin)return xe();fe()},ie=e.shallowRef();let se=0;const ce=async(e,t)=>{var o,u;try{const{lists:u=[],count:n}=await a.getRobotChatRecord({category_id:y.value,robot_id:g.value,page_size:t/2,page_no:e});if(null==(o=ie.value)||o.complete(u.reverse()),0===n?setTimeout((()=>{var e;null==(e=ie.value)||e.scrollToTop(!1)}),200):1===t&&setTimeout((()=>{fe()}),100),2===C.value&&3==A.value){const e=u[0];e&&e.id!==se&&(se=e.id,(async e=>{try{const a=await W({type:2,record_id:e});H(a)}catch(a){z(1)}})(se))}}catch(n){null==(u=ie.value)||u.complete(!1)}},ve=e.ref(!1),de=e=>{console.log(e),e.height>0?ve.value=!0:ve.value=!1},pe=()=>{ve.value=!1};e.watch(y,(e=>{console.log(e),setTimeout((()=>{var a,t;e?null==(a=ie.value)||a.reload():(null==(t=ie.value)||t.complete([]),setTimeout((()=>{var e;null==(e=ie.value)||e.scrollToTop(!1)}),100))}),10)}),{immediate:!0});const{lockFn:me}=t.useLockFn((async()=>{var t;if(!m.isLogin)return xe();(await e.index.showModal({title:"温馨提示",content:"确定清空对话？"})).cancel||(we(),await a.clearRobotChatRecord({robot_id:g.value,category_id:y.value}),null==(t=ie.value)||t.reload())})),fe=async()=>{var e;null==(e=ie.value)||e.scrollToBottom(!1)},he=e.ref(!1);let ge=null;const we=()=>{null==ge||ge.abort(),setTimeout((()=>{ne.value=""}))},ye=e.ref({}),{pauseAll:_e}=l.useAudioPlay(),{lockFn:je}=t.useLockFn((async(t,o="text")=>{if(f.value=!1,!m.isLogin)return xe();if(he.value)return;const u=t||ne.value;if(u){0===y.value&&await _(),"新的会话"===x.value&&await j({id:y.value,name:u}),ie.value.addChatRecordData({type:1,content:u}),ye.value={type:2,loading:!0,content:[],id:Date.now()},ie.value.addChatRecordData(ye.value),re.value=ne.value,ne.value="";try{he.value=!0,z(3),await a.robotChat({cate_id:y.value,robot_id:g.value,question:u,stream:!0},{onstart(e){ge=e,_e(),ne.value=""},onmessage(a){a.trim().split("data:").forEach((async a=>{var t,o;if(""!==a)try{const n=JSON.parse(a),{object:r,choices:l,error:i}=n;if(i){const{message:a,code:t}=i;return a&&e.index.$u.toast(a),void h.value.splice(0,2)}const s=null==(o=null==(t=l[0])?void 0:t.delta)?void 0:o.content;switch(r){case"chat":ye.value.content||(ye.value.content=""),ye.value.content+=s;break;case"image":case"video":case"file":{const e=`${r}s`;try{const a=JSON.parse(s);ye.value[e]=a}catch(u){console.error(u)}}}}catch(n){}}))},onclose(){he.value=!1,setTimeout((()=>{var e;null==(e=ie.value)||e.reload(),m.getUser()}),600)}})}catch(r){console.log("发送消息失败=>",r),r.errMsg!==n.RequestErrMsgEnum.ABORT&&h.value.splice(0,2),"text"==o&&(ne.value=re.value),he.value=!1}}})),qe=e.ref(!1),be=e.reactive({_index:-1,robot_id:g.value,record_id:-1,content:""}),ke=async()=>{try{await a.chatFeedBack(be),qe.value=!1,be.content="",h.value[be._index].is_feedback=1}catch(e){console.log("反馈提交失败--\x3e",e)}},xe=()=>{d.navigateTo({path:"/pages/login/login"})};return e.onShow((async()=>{w(),(async()=>{ue.value=await a.getRobotDetail({id:g.value})})()})),e.onUnmounted((()=>{we()})),(a,t)=>{var o,u;return e.e({a:a.$theme.navColor,b:a.$theme.navBgColor,c:a.$theme.pageStyle,d:e.p({title:ue.value.name,"title-color":"#333","title-bold":!0}),e:ue.value.is_digital},ue.value.is_digital?{f:e.p({name:"arrow-rightward"}),g:e.o(e.unref(R)),h:e.p({to:{path:"/packages/pages/digital_chat/digital_chat",query:{id:e.unref(g),cateId:e.unref(y)}}})}:{},{i:e.o((e=>oe.value=e)),j:e.p({name:e.unref(x),modelValue:oe.value}),k:e.unref(T)},e.unref(T)?{l:!e.unref(Q),m:null==(o=ue.value.digital)?void 0:o.vertical_stay_video,n:e.unref(Q),o:null==(u=ue.value.digital)?void 0:u.vertical_talk_video}:{},{p:e.f(h.value,((a,t,o)=>{var u,n,r,l,i,s;return e.e({a:1==a.type},1==a.type?{b:e.unref(T)?1:"",c:"24d248d6-6-"+o+",24d248d6-5",d:e.p({type:"right",content:a.content,avatar:e.unref(m).userInfo.avatar,showCopyBtn:!0})}:{},{e:2==a.type},2==a.type?e.e({f:!!ue.value.is_show_quote&&(null==(u=a.quotes)?void 0:u.length)},ue.value.is_show_quote&&(null==(n=a.quotes)?void 0:n.length)?{g:e.t(null==(r=a.quotes)?void 0:r.length),h:e.o((e=>{return t=a.quotes,te.show=!0,void(te.data=t);var t}),`${a.id} + ${t} + ''`)}:{},{i:!!ue.value.is_show_context&&(null==(l=a.context)?void 0:l.length)},ue.value.is_show_context&&(null==(i=a.context)?void 0:i.length)?{j:e.t(null==(s=a.context)?void 0:s.length),k:e.o((e=>{return t=a.context,ae.show=!0,void(ae.data=t);var t}),`${a.id} + ${t} + ''`)}:{},{l:a.create_time},a.create_time?{m:e.o((e=>((e,a)=>{1!==h.value[a].is_feedback&&(be.record_id=e.id,be._index=a,qe.value=!0)})(a,t)),`${a.id} + ${t} + ''`),n:"24d248d6-8-"+o+",24d248d6-7-"+o,o:e.p({text:a.is_feedback?"已反馈":"反馈",type:a.is_feedback?"info":"primary",size:"mini"})}:{},{p:e.unref(T)?1:"",q:"24d248d6-7-"+o+",24d248d6-5",r:e.p({"record-id":a.id,type:"left",content:a.content,loading:a.loading,avatar:ue.value.icons?ue.value.icons:ue.value.image,index:t,chatType:2,time:a.create_time,showCopyBtn:!0,images:a.images,files:a.files,videos:a.videos,showVoiceBtn:!0,"model-name":a.model})}):{},{s:`${a.id} + ${t} + ''`})})),q:ue.value.welcome_introducer},ue.value.welcome_introducer?{r:e.unref(T)?1:"",s:e.o(e.unref(je)),t:e.p({type:"left",content:ue.value.welcome_introducer,avatar:ue.value.icons?ue.value.icons:ue.value.image,showCopyBtn:!1})}:{},{v:e.f(ue.value.menus,((a,t,o)=>({a:e.t(a.keyword),b:t,c:e.o((t=>e.unref(je)(a.keyword)),t)}))),w:e.o(e.unref(je)),x:e.o(we),y:e.o(le),z:e.o(e.unref(me)),A:e.o((e=>ne.value=e)),B:e.p({loading:he.value||3===A.value,"show-stop":he.value,modelValue:ne.value}),C:e.unref(T)?"":1,D:e.sr(ie,"24d248d6-5,24d248d6-4",{k:"pagingRef"}),E:e.o(ce),F:e.o(de),G:e.o(pe),H:e.o((e=>h.value=e)),I:e.p({"use-chat-record-mode":!0,auto:!1,"safe-area-inset-bottom":!0,"auto-clean-list-when-reload":!1,"show-chat-loading-when-reload":!0,"default-page-size":20,fixed:!1,modelValue:h.value}),J:e.p({content:e.unref(v).getChatConfig.watermark,font:{color:"rgba(0,0,0,0.06)",fontSize:12}}),K:e.unref(T)},e.unref(T)?e.e({L:e.unref(I)},e.unref(I)?{M:e.p({name:"mic",size:50})}:{N:e.p({name:"mic-off",size:50})},{O:e.unref(I)?"":1,P:e.o(X)}):{},{Q:e.unref(T)},e.unref(T)?{R:`${E.width}px`,S:`${E.height}px`,T:E.id,U:e.t($[A.value])}:{},{V:e.unref(T)?ue.value.digital_bg:"",W:e.o(e.unref(_)),X:e.o(e.unref(k)),Y:e.o(e.unref(b)),Z:e.o(e.unref(j)),aa:e.o((e=>oe.value=e)),ab:e.o((a=>e.isRef(y)?y.value=a:null)),ac:e.p({lists:e.unref(q),show:oe.value,modelValue:e.unref(y)}),ad:e.o((e=>te.show=e)),ae:e.p({...te,show:te.show}),af:e.o((e=>ae.show=e)),ag:e.p({...ae,show:ae.show}),ah:e.o((e=>be.content=e)),ai:e.p({placeholder:"描述一下你遇到了什么问题",modelValue:be.content}),aj:e.o(ke),ak:e.p({type:"primary"}),al:e.o((e=>qe.value=e)),am:e.p({"safe-area-inset-bottom":!0,closeable:!0,"border-radius":"16",mode:"center",modelValue:qe.value})})}}});wx.createPage(m);
