"use strict";const e=require("../../../common/vendor.js"),l=require("../../../hooks/useAudio.js");if(!Array){e.resolveComponent("u-icon")()}Math;const o=e.defineComponent({__name:"item",props:{isActive:{type:Boolean},value:null,url:null,placeholder:null,closeable:{type:Boolean}},emits:["close","click"],setup(o,{emit:c}){const{play:s,pause:u,isPlaying:n}=l.useAudio();return(l,a)=>e.e({a:e.t(o.value?o.value:o.placeholder),b:o.value&&o.closeable},o.value&&o.closeable?{c:e.p({name:"close-circle",size:36}),d:e.o((e=>c("close")))}:{},{e:o.url},o.url?e.e({f:e.unref(n)},e.unref(n)?{g:e.p({name:"pause-circle",size:36}),h:e.o(((...l)=>e.unref(u)&&e.unref(u)(...l)))}:{i:e.p({name:"play-circle",size:36}),j:e.o((l=>e.unref(s)(o.url)))}):{},{k:o.isActive?1:"",l:o.value?"":1,m:e.o((e=>c("click")))})}}),c=e._export_sfc(o,[["__scopeId","data-v-cb2725b7"]]);wx.createComponent(c);
