"use strict";const e=require("../../common/vendor.js"),l={__name:"l-textarea",props:{placeholder:"",maxlength:"",showWordLimit:!1,customClass:{},error:"",rows:"",modelValue:""},emits:["update:modelValue"],setup(l,{emit:a}){var o;const t=l,r=e.ref(t.modelValue),u=e.ref((null==(o=t.modelValue)?void 0:o.length)||0),d=e.ref(!1),s=e=>{const l=e||window.event,o=l.detail||l.taget;a("update:modelValue",o.value)};return e.watch((()=>t.modelValue),(e=>{r.value=e,u.value=e.length})),(a,o)=>e.e({a:l.placeholder,b:l.rows,c:l.maxlength,d:d.value?1:"",e:e.s(l.customClass),f:e.o([e=>r.value=e.detail.value,s]),g:e.o((e=>d.value=!0)),h:e.o((e=>d.value=!1)),i:r.value,j:l.showWordLimit},l.showWordLimit?{k:e.t(u.value),l:e.t(l.maxlength)}:{},{m:l.error,n:l.error?1:""})}},a=e._export_sfc(l,[["__scopeId","data-v-ded95b60"]]);wx.createComponent(a);
