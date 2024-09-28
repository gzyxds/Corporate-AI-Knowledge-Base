"use strict";const e=require("../common/vendor.js"),t=require("../lib/fft.js"),l={id:"",width:0,height:0,scale:2,fps:30,fftSize:1024,lineCount:6,widthRatio:.6,spaceWidth:0,minHeight:8,position:0,mirrorEnable:!1,fallDuration:600,linear:[{pos:0,color:"white"},{pos:1,color:"white"}],round:!0,fullFreq:!1};exports.useRecorder=(t,l)=>{l=l||{type:"mp3",sampleRate:32e3,bitRate:32,duration:6e5,numberOfChannels:1,encodeBitRate:64e3,format:"mp3",frameSize:1};const a=e.ref(!1),o=e.shallowRef(),n=e.ref(!1),r=()=>{o.value=e.index.getRecorderManager()},i=()=>{var e;o.value&&(null==(e=o.value)||e.stop(),console.log("stop"))},s=()=>{var e,t,l,r,i,s,c,u,f,h,d,v;null==(t=null==(e=o.value)?void 0:e.close)||t.call(e,(()=>{a.value=!1})),o.value=null,n.value=!1,null==(r=null==(l=o.value)?void 0:l.offStart)||r.call(l),null==(s=null==(i=o.value)?void 0:i.offStop)||s.call(i),null==(u=null==(c=o.value)?void 0:c.offError)||u.call(c),null==(h=null==(f=o.value)?void 0:f.offInterruptionEnd)||h.call(f),null==(v=null==(d=o.value)?void 0:d.onFrameRecorded)||v.call(d)};return e.onBeforeUnmount((()=>{i(),s()})),{isRecording:a,isOpen:n,mediaRecorder:o,start:async()=>{try{o.value||r(),o.value.start(l),o.value.onStart((()=>{var e;a.value=!0,null==(e=t.onstart)||e.call(t)})),o.value.onStop((e=>{var l;console.log(e,"stop"),a.value=!1,null==(l=t.onstop)||l.call(t,e)})),o.value.onError((e=>{a.value=!1})),o.value.onInterruptionEnd((()=>{o.value.resume()})),o.value.onFrameRecorded((async({frameBuffer:a})=>{var o;const n=e.jsMp3.newDecoder(a);if(null!=n){const e=n.decode(),a=new Int16Array(e),r=a.length;let i=0;for(let t=0;t<r;t++)i+=Math.abs(a[t]);let s=500*i/(16383*r);s>=100&&(s=100),s<=5&&(s=1),s=parseInt(String(s)),null==(o=null==t?void 0:t.ondata)||o.call(t,{pcmData:a,powerLevel:s,sampleRate:null==l?void 0:l.sampleRate})}}))}catch(n){return console.log(n),Promise.reject(n)}},authorize:()=>new Promise((async(t,l)=>{if(n.value)t();else{o.value||r();try{await e.index.authorize({scope:"scope.record"}),n.value=!0,t()}catch(a){n.value=!1;if((await e.index.showModal({title:"开启麦克风权限",content:"为了正常使用语音输入功能，请开启麦克风权限",confirmText:"去设置"})).confirm){const{authSetting:l}=await e.index.openSetting();if(l["scope.record"])return n.value=!0,t()}l("无法录音：用户拒绝了麦克风权限")}}})),stop:i,close:s}},exports.useRenderAudioGraph=a=>{const o=a.id;o||console.error("绘制图形前必须指定`canvasId`");const n=e.getCurrentInstance(),r=Object.assign({},l,a),i=e.index.createCanvasContext(o,null==n?void 0:n.proxy);r.width&&r.height||console.error("必须指定画布的宽高");const s=t.genFFT(r.fftSize);let c,u=0,f=0,h=0,d=0,v=[];const p=(e,t,l,a)=>{const o=e.createLinearGradient(0,l,0,a);for(let n=0;n<t.length;n++)o.addColorStop(t[n].pos,t[n].color);return o},M=(e,t,l,a,o,n)=>{const[r,i,s,c]=n;e.beginPath(),e.moveTo(t+r,l),e.lineTo(t+a-r,l),e.arc(t+a-i,l+i,i,1.5*Math.PI,2*Math.PI),e.lineTo(t+a,l+o-s),e.arc(t+a-s,l+o-s,s,0,.5*Math.PI),e.lineTo(t+c,l+o),e.arc(t+c,l+o-c,c,.5*Math.PI,Math.PI),e.lineTo(t,l+r),e.arc(t+r,l+r,r,Math.PI,1.5*Math.PI),e.fill()},m=r.onDraw?r.onDraw:(e,{frequencyData:t,sampleRate:l,options:a})=>{const{scale:o,width:n,height:i,lineCount:s,round:c,fftSize:u,position:f,fallDuration:h,fps:d,fullFreq:m,linear:g,mirrorEnable:w}=a,R=n*o,I=i*o,S=Math.abs(f);let y=1==f?0:I,b=I;S<1&&(b/=2,y=b,b=Math.floor(b*(1+S)),y=Math.floor(f>0?y*(1-S):y*(1+S)));const x=v,D=Math.ceil(b/(h/(1e3/d))),P=1<<(Math.round(Math.log(u)/Math.log(2)+3)<<1),F=Math.log(P)/Math.log(10),z=20*Math.log(32767)/Math.log(10),C=u/2.5;let T=C;m||(T=Math.min(C,Math.floor(5e3*C/(l/2))));const q=T==u,E=q?s:Math.round(.8*s),j=T/E,A=q?0:(C-T)/(s-E);let B=0;for(let r=0;r<s;r++){const e=Math.ceil(B);B+=r<E?j:A;let l=Math.ceil(B);l==e&&l++,l=Math.min(l,C);let a=0;if(t)for(let r=e;r<l;r++)a=Math.max(a,Math.abs(t[r]));const o=a>P?Math.floor(17*(Math.log(a)/Math.log(10)-F)):0;let n=b*Math.min(o/z,1);x[r]=(x[r]||0)-D,n<x[r]&&(n=x[r]),n<0&&(n=0),x[r]=n}e.clearRect(0,0,R,I);const O=1/r.scale;e.scale(O,O);const k=p(e,g,y,y-b),G=p(e,g,y,y+b),H=w?2*s-1:s,L=a.spaceWidth*o;let W=a.widthRatio;0!=L&&(W=(R-L*(H+1))/R);let U=0,J=0,K=0;for(let r=0;r<2;r++){const e=Math.max(1*o,R*W/H);if(U=Math.floor(e),K=e-U,J=(R-H*e)/(H+1),!(J>0&&J<1))break;W=1,J=0}const N=a.minHeight*o,Q=w?(R-U)/2-J:0;for(let r=0;r<2;r++){r&&(e.save(),e.scale(-1,1));const t=r?R:0;for(let l,a,o,n,r=0,i=Q,u=0;r<s;r++){i+=J,l=Math.floor(i)-t,o=U,u+=K,u>=1&&(o++,u--),n=Math.max(v[r],N);const s=c?o/2:0;let f=new Array(4).fill(s);0!=y&&(a=y-n,e.setFillStyle(k),y!=I&&(f=[s,s,0,0]),M(e,l,a,o,n,f)),y!=I&&(e.setFillStyle(G),0!=y&&(f=[0,0,s,s]),M(e,l,y,o,n,f)),i+=o}if(r&&e.restore(),!w)break}e.draw()};delete r.onDraw;const g=(e,t)=>{m(i,{frequencyData:e,sampleRate:t,options:r})},w=()=>{const e=Math.floor(1e3/r.fps);h||(h=setInterval((function(){w()}),e));const t=Date.now();if(d=d||0,t-f>1.5*(null==r?void 0:r.fallDuration))return clearInterval(h),v=[],void g(null,c.sampleRate);if(t-d<e)return;d=t;const l=s.bufferSize,a=c.pcmData;let o=u;const n=new Int16Array(l);for(let r=0;r<l&&o<a.length;r++,o++)n[r]=a[o];u=o;const i=s.transform(n);g(i,c.sampleRate)};return{render:e=>{c=e,u=0,f=Date.now(),w()},draw:g,stopRender:()=>{clearInterval(h)}}};
