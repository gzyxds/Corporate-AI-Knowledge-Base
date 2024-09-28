"use strict";const e=require("../../../common/vendor.js"),u=require("../../../common/assets.js"),r=require("../../../api/music.js"),s=require("../../../api/square.js"),t=require("./useMusicPlay.js"),l=require("../../../hooks/useCopy.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../utils/auth.js"),require("../../../utils/cache.js"),require("../../../utils/unique-id.js"),require("../../../router/index.js"),require("../../../config/index.js"),require("../../../utils/client.js"),require("../../../enums/appEnums.js"),!Array){(e.resolveComponent("u-navbar")+e.resolveComponent("uv-slider")+e.resolveComponent("u-icon")+e.resolveComponent("u-button")+e.resolveComponent("u-popup"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-navbar/u-navbar.js")+(()=>"../../../uni_modules/uv-slider/components/uv-slider/uv-slider.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js"))();const o=e.defineComponent({__name:"music_player",setup(o){const{copy:i}=l.useCopy(),n=e.useRoute(),a=e.ref([]),c=["default","lyric"],p=e.ref(0),d=new Map,v=e.ref(-1),m=e.ref(!1),y=e.ref(""),{play:f,duration:q,currentTime:_,seek:j,isPlaying:g,pause:h,setUrl:b}=t.useMusicPlay(),w=()=>{g.value?h():f()},C=e=>{let u=v.value+e;u<=0&&(u=0),u>=a.value.length-1&&(u=a.value.length-1),v.value=u},k=async()=>{await i(y.value),m.value=!1},M=e=>{j(e)},x=e=>{let u=parseInt(String(e/60)),r=Math.round(e%60)+"";return 0==u?u="00":u<10&&(u="0"+u),1==r.length&&(r="0"+r),u+":"+r},$=e=>{p.value=e.detail.current},z=e.computed((()=>a.value[v.value]||{}));return e.watch(z,(e=>{console.log(e),e.audio_url&&(b(e.audio_url),f())})),e.onMounted((async()=>{await(async()=>{const e=null!=n.query.style_id?await s.getMusicSquare({style_id:n.query.style_id,keyword:n.query.keyword,page_no:1,page_size:9999}):await r.getMusicLists({page_type:0,status:2});a.value=e.lists,d.clear(),a.value.forEach(((e,u)=>{void 0===n.query.style_id?d.set(e.id,u):d.set(e.records_id,u)}))})();const e=d.get(Number(n.query.id));-1!==e&&(v.value=e)})),(r,s)=>e.e({a:r.$theme.navColor,b:r.$theme.navBgColor,c:r.$theme.pageStyle,d:a.value.length},a.value.length?e.e({e:e.p({"back-text":"歌曲详情"}),f:e.f(c,((e,u,r)=>({a:e,b:p.value===u?1:""}))),g:e.f(c,((u,r,s)=>e.e({a:"default"===u},"default"===u?e.e({b:e.unref(z).image_url,c:e.t(e.unref(z).title),d:e.unref(z).style_desc},e.unref(z).style_desc?{e:e.t(e.unref(z).style_desc)}:{},{f:e.t(e.unref(z).lyric)}):"lyric"===u?e.e({h:e.t(e.unref(z).title),i:e.unref(z).style_desc},e.unref(z).style_desc?{j:e.t(e.unref(z).style_desc)}:{},{k:e.t(e.unref(z).lyric)}):{},{g:"lyric"===u,l:u}))),h:p.value,i:e.o($),j:e.t(x(e.unref(_))),k:e.o(M),l:e.p({disabled:!e.unref(q),"model-value":e.unref(_),"block-size":12,"block-color":r.$theme.primaryColor,max:e.unref(q)||100,activeColor:r.$theme.primaryColor}),m:e.t(e.unref(q)?x(e.unref(q)):e.unref(z).duration),n:e.p({name:"download",size:48,color:"#999999"}),o:e.o((u=>{return r=e.unref(z),console.log(r),m.value=!0,void(y.value=r.audio_url);var r})),p:u._imports_0$5,q:0===v.value?1:"",r:e.o((e=>C(-1))),s:e.unref(g)},e.unref(g)?{t:e.p({name:"pause",size:40})}:{v:e.p({name:"play-right-fill",size:40})},{w:e.o(w),x:v.value===a.value.length-1?1:"",y:u._imports_1$3,z:e.o((e=>C(1))),A:e.o((e=>p.value=1)),B:e.o(k),C:e.p({type:"primary",shape:"circle"}),D:e.o((e=>m.value=e)),E:e.p({mode:"center","border-radius":"15",closeable:!0,modelValue:m.value})}):{})}});wx.createPage(o);
