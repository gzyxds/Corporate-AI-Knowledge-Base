"use strict";const e=require("../common/vendor.js"),l=new Set;exports.useAudio=a=>{const{onstart:u,onstop:n,onerror:o}=a||{},r=e.shallowRef(null),v=e.ref(!1),s=e.ref(0),t=e.ref(0),i=e.ref(0),c=()=>{null==u||u(),y(),v.value=!0},p=()=>{null==n||n(),v.value=!1,clearTimeout(i.value)},d=e=>{console.error(e),null==o||o(),v.value=!1,clearTimeout(i.value)},y=()=>{s.value=r.value.duration,t.value=r.value.currentTime},m=l=>{r.value=e.index.createInnerAudioContext(),r.value.obeyMuteSwitch=!1,r.value.isPlaying=v,r.value.onPlay(c),r.value.onEnded(p),r.value.onError(d),r.value.onStop(p),r.value.onPause(p),r.value.onTimeUpdate(y),r.value.onSeeking(y)},f=e=>{r.value||m(),r.value.src=e},T=()=>{var e;null==(e=r.value)||e.stop()},g=()=>{l.forEach((e=>{e.paused||e.pause()}))};return e.onBeforeUnmount((()=>{var e,a;v.value&&T(),r.value&&(null==(a=(e=r.value).destroy)||a.call(e),l.delete(r.value),r.value=null,clearTimeout(i.value))})),{pause:T,pauseAll:g,play:async e=>{g(),e&&(m(),f(e)),await(async()=>{r.value.onCanplay((()=>{console.log(r.value.paused),r.value.play()})),r.value.play()})()},duration:s,currentTime:t,isPlaying:v,setUrl:f,suspend:()=>{var e;null==(e=r.value)||e.pause()},seek:e=>{var l;null==(l=r.value)||l.seek(e),t.value=r.value.seek()}}};
