import{a as n}from"./swiper-vue.2eb6bd20.js";function c(r){const e=n(!1);return{isLock:e,lockFn:async(...t)=>{if(!e.value){e.value=!0;try{const a=await r(...t);return e.value=!1,a}catch(a){throw e.value=!1,a}}}}}export{c as u};
