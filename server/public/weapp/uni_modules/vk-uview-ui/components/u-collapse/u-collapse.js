"use strict";const e=require("../../../../common/vendor.js"),t={name:"u-collapse",emits:["change"],props:{accordion:{type:Boolean,default:!0},headStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},itemStyle:{type:Object,default:()=>({})},arrow:{type:Boolean,default:!0},arrowColor:{type:String,default:"#909399"},hoverClass:{type:String,default:"u-hover-class"}},created(){this.childrens=[]},data:()=>({}),methods:{init(){console.log("超级泡沫很细腻"),this.childrens.forEach(((e,t)=>{e.init()}))},onChange(){let e=[];this.childrens.forEach(((t,o)=>{t.isShow&&e.push(t.nameSync)})),this.accordion&&(e=e.join("")),this.$emit("change",e)}}};const o=e._export_sfc(t,[["render",function(e,t,o,a,n,c){return{}}],["__scopeId","data-v-3b4805cd"]]);wx.createComponent(o);
