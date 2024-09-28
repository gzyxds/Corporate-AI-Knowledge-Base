import{d as C,Z as N}from"./entry.dfbfd4fd.js";import{k as I,m as b,a as c,a5 as V,H as m,U as f,V as p,a7 as M,Z as y}from"./swiper-vue.2eb6bd20.js";import{_ as D}from"./_plugin-vue_export-helper.c27b6911.js";/*! vue-countdown v2.1.1 | (c) 2018-present Chen Fengyuan | MIT */const a=1e3,l=60*a,r=60*l,g=24*r,E="abort",S="end",v="progress",T="start",_="visibilitychange";var k=I({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:t=>t>=0},transform:{type:Function,default:t=>t}},emits:[E,S,v,T],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/g)},hours(){return Math.floor(this.totalMilliseconds%g/r)},minutes(){return Math.floor(this.totalMilliseconds%r/l)},seconds(){return Math.floor(this.totalMilliseconds%l/a)},milliseconds(){return Math.floor(this.totalMilliseconds%a)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/r)},totalMinutes(){return Math.floor(this.totalMilliseconds/l)},totalSeconds(){return Math.floor(this.totalMilliseconds/a)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(_,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(_,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(T),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const t=Math.min(this.totalMilliseconds,this.interval);if(t>0){let i,s;const n=e=>{i||(i=e),s||(s=e);const o=e-i;o>=t||o+(e-s)/2>=t?this.progress():this.requestId=requestAnimationFrame(n),s=e};this.requestId=requestAnimationFrame(n)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.update(),this.emitEvents&&this.totalMilliseconds>0&&this.$emit(v,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(E))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(S))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},restart(){this.pause(),this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.counting=!1,this.start()},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return b(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}});const L=I({components:{VueCountdown:k,ElButton:C},props:{seconds:{type:Number,default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"x秒重新获取"},endText:{type:String,default:"重新获取"}},emits:["click-get"],setup(t,{emit:i}){const s=c(!1),n=c(!1),e=async()=>{s.value=!0},o=d=>t.changeText.replace("x",d),h=()=>{s.value=!1,n.value=!0},u=N(()=>{i("click-get")},1e3,!1);return{getChangeText:o,isStart:s,start:e,isRetry:n,handleEnd:h,handleStart:u}}});function $(t,i,s,n,e,o){const h=C,u=V("VueCountdown");return t.isStart?(m(),f(u,{key:1,ref:"vueCountdownRef",time:t.seconds*1e3,onEnd:t.handleEnd},{default:p(({totalSeconds:d})=>[M(y(t.getChangeText(d)),1)]),_:1},8,["time","onEnd"])):(m(),f(h,{key:0,link:"",onClick:t.handleStart},{default:p(()=>[M(y(t.isRetry?t.endText:t.startText),1)]),_:1},8,["onClick"]))}const H=D(L,[["render",$]]);export{H as _};
