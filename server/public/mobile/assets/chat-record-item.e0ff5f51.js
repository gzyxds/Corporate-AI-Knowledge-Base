import{_ as e}from"./u-image.e6fb9592.js";import{d as t,bb as s,x as l,o,c as a,w as r,b as i,n,m as c,e as d,f as u,t as p,j as f,r as m,a as y,g as h,au as g,u as w,M as x,k as _,F as b,l as v,aT as k,K as B,i as C,h as j}from"./index-9f08b835.js";import{_ as P}from"./u-tag.d6be710f.js";import{u as $}from"./useAudio.8d04ba62.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as T}from"./u-loading.15b95fef.js";import{_ as V}from"./icon_copy.bacd4068.js";import{u as N}from"./useCopy.7659937f.js";import{T as M}from"./text-item.75b27895.js";const O=I(t({__name:"audio-play",props:{url:null,color:{default:"#000"},bgColor:{default:"#fff"},reverse:{type:Boolean,default:!1}},setup(e){const t=e;s((t=>({"218fbccc":e.bgColor,fa4c2c42:e.color})));const{pause:m,play:y,duration:h,isPlaying:g,setUrl:w}=$(),x=()=>{g.value?m():y()};return l((()=>t.url),(e=>{e&&w(e)}),{immediate:!0}),(t,s)=>{const l=f;return o(),a(l,{class:c(["audio",{reverse:e.reverse}]),onClick:x},{default:r((()=>[i(l,{style:n({transform:`rotate(${e.reverse?"135deg":"-45deg"})`})},{default:r((()=>[i(l,{class:c(["wifi-symbol",{playing:d(g)}])},{default:r((()=>[i(l,{class:"wifi-circle first"}),i(l,{class:"wifi-circle second"}),i(l,{class:"wifi-circle third"})])),_:1},8,["class"])])),_:1},8,["style"]),i(l,{class:"duration"},{default:r((()=>[u(p(d(h)?Math.round(d(h))+'"':""),1)])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-85bbeea2"]]),R=t({__name:"record-image",props:{url:null,name:null},setup:t=>(s,l)=>{const n=m(y("u-image"),e),c=f;return t.url?(o(),a(c,{key:0,class:"flex mb-[32rpx] bg-white rounded-[10rpx] p-[20rpx] max-w-[450rpx] items-center"},{default:r((()=>[i(n,{class:"flex-none",src:t.url,width:"80",height:"80",onClick:l[0]||(l[0]=e=>{return s=[t.url],void g({urls:s});var s})},null,8,["src"]),i(c,{class:"line-clamp-2 text-main flex-1 min-w-0 ml-[12rpx]",style:{"word-break":"break-word"}},{default:r((()=>[u(p(t.name),1)])),_:1})])),_:1})):h("v-if",!0)}}),z=t({__name:"record-file",props:{url:null,name:null},setup(e){const t=e,s=async()=>{window.open(t.url,"_blank")};return(t,l)=>{const n=f;return e.url?(o(),a(n,{key:0,class:"flex mb-[32rpx] bg-white rounded-[10rpx] p-[20rpx] max-w-[450rpx] items-center",onClick:s},{default:r((()=>[h(' <u-image class="flex-none" :src="icon_doc" width="80" height="80" /> '),i(n,{class:"line-clamp-2 text-main flex-1 min-w-0 ml-[12rpx]",style:{"word-break":"break-word"}},{default:r((()=>[u(p(e.name),1)])),_:1})])),_:1})):h("v-if",!0)}}}),A=I(t({__name:"chat-record-item",props:{recordId:null,type:null,content:{default:""},showCopyBtn:{type:Boolean,default:!0},showCollectBtn:{type:Boolean,default:!0},showRewriteBtn:{type:Boolean,default:!1},showPosterBtn:{type:Boolean,default:!1},showVoiceBtn:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},index:null,isCollect:null,avatar:null,time:{default:""},audio:null,chatType:{default:1},images:{default:()=>[]},files:{default:()=>[]},videos:{default:()=>[]},filesPlugin:{default:()=>[]},bg:null,color:null,modelName:{default:""},showPoster:{type:Boolean,default:!1}},emits:["close","rewrite","update","click-link","poster"],setup(t,{emit:s}){const l=t,g=w(),{copy:$}=N(),I=x((()=>"left"==l.type));return(l,w)=>{const x=m(y("u-image"),e),N=f,A=m(y("u-tag"),P),F=m(y("audio-play"),O),K=m(y("u-loading"),T),L=C,U=j;return o(),a(N,{class:"chat-record-item",style:n(t.bg?`--bg-color:${t.bg}`:"")},{default:r((()=>[i(N,{class:c(`chat-record-item__${t.type}`)},{default:r((()=>[i(N,{class:"flex-none"},{default:r((()=>[i(x,{src:t.avatar,width:60,shape:"circle",height:60},null,8,["src"])])),_:1}),i(N,{class:c(["min-w-0 flex flex-col",{"justify-end":"right"==t.type}])},{default:r((()=>[t.time?(o(),_("div",{key:0,class:"ml-[25rpx] mb-[20rpx] text-muted"},[u(p(t.time)+" ",1),t.modelName&&d(g).getChatConfig.is_show_model?(o(),a(A,{key:0,class:"ml-2",size:"mini",text:t.modelName,style:{"--color-success":"#67c23a","--color-success-light-3":"transparent","--color-success-light-9":"#f0f9eb"},type:"success"},null,8,["text"])):h("v-if",!0)])):h("v-if",!0),i(N,{class:c(`chat-record-item__${t.type}-content`),style:n(t.color?`--color:${t.color}`:"")},{default:r((()=>[t.filesPlugin.length?(o(),a(N,{key:0},{default:r((()=>[(o(!0),_(b,null,v(t.filesPlugin,((e,t)=>(o(),_(b,{key:t},["image"==e.type?(o(),a(R,{key:0,url:e.url,name:e.name},null,8,["url","name"])):"file"==e.type?(o(),a(z,{key:1,url:e.url,name:e.name},null,8,["url","name"])):h("v-if",!0)],64)))),128))])),_:1})):h("v-if",!0),t.audio?(o(),a(N,{key:1,class:c(["mb-[20rpx] flex",{"justify-end":"right"===t.type}])},{default:r((()=>[i(F,{url:t.audio,reverse:"right"===t.type,"bg-color":"#fff"},null,8,["url","reverse"])])),_:1},8,["class"])):h("v-if",!0),i(N,null,{default:r((()=>[d(k)(t.content)?(o(!0),_(b,{key:0},v(t.content,((e,n)=>(o(),a(N,{key:n,class:c(["mb-[20rpx] last-of-type:mb-0",{"pt-[20rpx] border-t border-solid border-light border-0":n>0}])},{default:r((()=>[i(M,{"is-markdown":d(I),content:e,loading:t.loading,index:n,"record-id":t.recordId,"show-copy-btn":t.showCopyBtn&&"left"===t.type,type:t.chatType,images:t.images,files:t.files,videos:t.videos,"show-voice-btn":d(g).getIsVoiceOpen&&t.showVoiceBtn,color:t.color,"show-poster":t.showPoster,onPoster:w[0]||(w[0]=e=>s("poster"))},{btn:r((()=>[B(l.$slots,"btn",{},void 0,!0)])),_:2},1032,["is-markdown","content","loading","index","record-id","show-copy-btn","type","images","files","videos","show-voice-btn","color","show-poster"])])),_:2},1032,["class"])))),128)):(o(),a(M,{key:1,"is-markdown":d(I),content:t.content,loading:t.loading,index:0,"record-id":t.recordId,"show-copy-btn":t.showCopyBtn&&"left"===t.type,"show-voice-btn":d(g).getIsVoiceOpen&&t.showVoiceBtn,color:t.color,images:t.images,files:t.files,videos:t.videos,type:t.chatType,"show-poster":t.showPoster,onClickLink:w[1]||(w[1]=e=>s("click-link",e)),onPoster:w[2]||(w[2]=e=>s("poster"))},{btn:r((()=>[B(l.$slots,"btn",{},void 0,!0)])),_:3},8,["is-markdown","content","loading","record-id","show-copy-btn","show-voice-btn","color","images","files","videos","type","show-poster"])),t.loading?(o(),a(N,{key:2,class:"flex items-center text-muted text-sm mt-[16rpx]"},{default:r((()=>[i(K,{mode:"flower"}),i(N,{class:"ml-[10rpx]"},{default:r((()=>[u("加载中，请稍等")])),_:1})])),_:1})):h("v-if",!0)])),_:3})])),_:3},8,["class","style"]),"right"==t.type&&t.showCopyBtn?(o(),a(N,{key:1,class:"flex items-center justify-end pr-[20rpx] pt-[10rpx]",onClick:w[3]||(w[3]=e=>d($)(t.content))},{default:r((()=>[i(L,{class:"w-[26rpx] h-[26rpx]",src:V}),i(U,{class:"text-xs text-muted ml-[8rpx]"},{default:r((()=>[u("复制")])),_:1})])),_:1})):h("v-if",!0),B(l.$slots,"footer",{},void 0,!0),h("  生成海报  ")])),_:3},8,["class"])])),_:3},8,["class"]),"left"==t.type?B(l.$slots,"sub_actions",{key:0},void 0,!0):h("v-if",!0)])),_:3},8,["style"])}}}),[["__scopeId","data-v-514e7580"]]);export{A as _};
